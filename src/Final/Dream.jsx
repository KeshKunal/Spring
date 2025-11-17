import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyAgU67wkTvzCb7MNjwYM7QYwvRsJCfHPqY");

function App() {
  const [llmResponse, setLlmResponse] = useState("");
  const [dreamInput, setDreamInput] = useState(''); 
  const [analysisOutput, setAnalysisOutput] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: "You are a dream analyser tool on a mental health help platform 'Spring'. You will be given a description of the user's dream and you have to provide an analysis of the dream to the user in about 200 words. Just provide the user an analysis, do not ask questions. Mention to the user very subtly in the end that you are an AI and that if the user may be struggling with some issues, feel free to connect with the professionals on our website. If the user says/asks anything apart from their dreams, then tell them that you are only a dream analyzer, and for anything else, they can either talk to Yuri (The virtual mental health chatbot on Spring), or explore resources at Spring as per their needs. If the user greets you first, then don't say I'm just a dream analyzer, instead greet them back and ask them about their dream."
  });

  const generationConfig = {
    temperature: 1.25,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run(prompt) {
    setIsLoading(true);
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
      console.error("Error generating analysis:", error);
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
              className="w-full md:w-auto mt-6 px-7 py-2 text-2xl bg-[#0E176E] hover:text-white text-white rounded-full hover:bg-[#101ead] transition duration-300 hover:text-medium"
              onClick={() => run(dreamInput)}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                'Analyze Dream'
              )}
            </button>
          </div>
          <div className="w-full md:w-auto mt-6 md:mt-0 px-4 md:px-0">
            <textarea
              readOnly
              placeholder="Your dream analysis will appear here ...😴"
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