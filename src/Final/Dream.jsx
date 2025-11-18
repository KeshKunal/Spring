import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY_DREAM);

function App() {
  const [llmResponse, setLlmResponse] = useState("");
  const [dreamInput, setDreamInput] = useState(''); 
  const [analysisOutput, setAnalysisOutput] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: `You are Luna, a warm and empathetic dream interpreter on Spring - a mental wellness platform dedicated to helping people understand their inner world.

Your role is to provide thoughtful, creative, and compassionate dream analysis that:
- Explores symbolic meanings with curiosity and openness
- Connects dream elements to emotional wellness and personal growth
- Offers gentle insights that reduce anxiety rather than amplify it
- Acknowledges that dreams are deeply personal and interpretations are guidance, not absolutes
- Uses warm, encouraging language that makes people feel heard and understood
- Recognizes positive elements and growth opportunities within challenging dreams
- Suggests mindful reflections that promote self-awareness and stress relief

When analyzing dreams:
1. Start by acknowledging the dreamer's feelings and the emotional tone of the dream
2. Explore 2-3 key symbols or themes with creative, wellness-focused interpretations
3. Connect dream elements to potential real-life emotions or situations (gently)
4. Highlight any positive aspects, messages of resilience, or opportunities for growth
5. End with a calming reflection or affirmation related to their dream
6. Keep responses between 180-220 words - concise yet meaningful

If someone shares anxiety dreams: Frame them as your mind processing stress (which is healthy!), and suggest the dream shows your resilience.
If someone shares confusing dreams: Embrace the mystery and focus on emotions rather than literal meanings.
If someone shares pleasant dreams: Celebrate them as signs of inner peace and positive emotional processing.

IMPORTANT BOUNDARIES:
- If someone greets you, warmly greet them back as Luna and ask about their dream with genuine interest
- If someone asks non-dream questions, kindly redirect: "I'm Luna, your dream interpreter here on Spring. I'd love to help you explore your dreams! For other support, try Yuri (our AI companion) or explore Spring's resources. Now, tell me about a dream you've had..."
- Avoid clinical diagnoses - focus on emotional wellness and self-discovery
- Gently remind users that while dreams offer insights, speaking with Spring's professional therapists can provide deeper support if they're experiencing persistent distress

Remember: Your purpose is to help people feel less stressed, more self-aware, and curious about their inner world. Every dream is a window to understanding oneself better.`
  });

  const generationConfig = {
    temperature: 1.4,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run(prompt) {
    setIsLoading(true);
    setError("");
    setAnalysisOutput("");
    
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {text: "i see tall black figures running across the horizon chasing something/someone "},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "Dreams about being chased are very common and often represent feelings of anxiety or stress in your waking life.  The tall, black figures in your dream running across the horizon could symbolize unknown or suppressed fears that seem distant but ever-present. Their pursuit of something or someone might suggest a sense of urgency or pressure in addressing these fears. \n\nThe horizon often symbolizes the future or the unknown, implying that you might feel apprehensive about what lies ahead. The figures being black might relate to the unknown or hidden aspects of yourself or your life. The fact that they are running could suggest that these feelings are dynamic and require attention. \n\nRemember, dream interpretation is subjective, and this analysis is based on common symbolism. It's essential to reflect on your personal experiences and emotions to fully understand the dream's message for you. If you find yourself feeling overwhelmed or anxious, our platform has many qualified mental health professionals who can provide you with personalized support and guidance. \n"},
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();
      setLlmResponse(text);
      setAnalysisOutput(text);
    } catch (error) {
      setError("Unable to analyze your dream right now. Please try again later or contact support if the issue persists.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={{ position: 'relative', minHeight: '90vh' }}>
      <video
        autoPlay
        muted
        loop
        src= "/cloud/cloud.mp4"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      ></video>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex justify-center">
          <div className="mt-5 p-2 rounded-xl inline-block bg-white bg-opacity-60">
            <div className="text-3xl underline underline-offset-4 font-betofin text-[#0E176E]">Dream Analyzer</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around mt-10">
          <div className="p-4 w-full md:w-auto md:ml-20">
            <textarea
              placeholder="Please Describe Your Dream In As Much Detail As Possible.&#10;&#10;Include Where The Dream Took Place And The Environment, Summarize The Key Actions And Events, And Share How You Felt Along With Any Symbols Or Recurring Themes."
              className="w-full md:w-[400px] h-80 p-7 rounded-[41px] border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-lg text-2xl placeholder-black resize-none bg-white opacity-60"
              value={dreamInput}
              onChange={(e) => setDreamInput(e.target.value)}
            />
            <br />
            <button
              className="w-full md:w-auto mt-6 px-7 py-2 text-2xl bg-[#0E176E] hover:text-white text-white rounded-full hover:bg-[#101ead] transition duration-300 hover:text-medium disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => run(dreamInput)}
              disabled={isLoading || !dreamInput.trim()}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                  <span>Analyzing...</span>
                </div>
              ) : (
                'Analyze Dream'
              )}
            </button>
          </div>
          <div className="w-full md:w-auto mt-6 md:mt-0 px-4 md:px-0">
            {error && (
              <div className="mb-4 p-4 bg-red-100 border-2 border-red-400 rounded-2xl text-red-700">
                <p className="font-semibold">⚠️ {error}</p>
              </div>
            )}
            <textarea
              readOnly
              placeholder={isLoading ? "Luna is interpreting your dream... This may take 10-15 seconds 🌙✨" : "Your dream analysis will appear here ...😴"}
              className="w-full mb-10 md:w-[650px] h-96 p-4 rounded-[25px] border border-blue-300 focus:outline-none focus:ring-2 placeholder:text-lg text-xl placeholder-black resize-flex bg-white opacity-60"
              value={analysisOutput} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;