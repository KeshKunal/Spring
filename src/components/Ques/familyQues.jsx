import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import "../../pages/HelpPage/Help.css"
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY_QUIZ);
import { Link } from 'react-router-dom';
const questions = [
    {
        question: "How often does your family member express feelings of sadness or anxiety?",
        options: ["Rarely", "Occasionally", "Frequently", "Almost all the time"]
    },
    {
        question: "How has your family member’s behavior changed in terms of social interactions?",
        options: ["No noticeable change", "Slight withdrawal from social activities", "Significant withdrawal from social activities", "Complete isolation from others"]
    },
    {
        question: "How well does your family member handle daily responsibilities (work, school, household tasks)?",
        options: ["Very well, no issues", "Somewhat well, with minor difficulties", "Struggling with responsibilities", "Unable to manage responsibilities"]
    },
    {
        question: "Has your family member shown signs of irritability or anger more frequently?",
        options: ["No, they are as calm as usual", "Occasionally, with minor irritability", "Frequently, with noticeable irritability", "Almost all the time, with significant anger"]
    },
    {
        question: "How open is your family member to talking about their feelings or mental health?",
        options: ["Very open and communicative", "Somewhat open but guarded", "Reluctant to discuss", "Completely closed off and uncommunicative"]
    }
];

function QuesFamily() {
    const [llmResponse, setLlmResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showAnalysis, setShowAnalysis] = useState(false);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        systemInstruction: "You are a mental health analyser tool on a mental health platform 'Spring'. You will recieve questions and the answers which the user has given and you have to provide an analysis to the user of their answers in a short and concise manner in not more than 250 words. Don't provide any help based resources. Refrain from using strong words like depression. Do not mention that you are an AI."
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
            });
    
            const result = await chatSession.sendMessage(prompt);
            const response = await result.response;
            const text = await response.text(); 
            setLlmResponse(text);
            return text;
        } finally {
            setIsLoading(false);
        }
    }
    
    const handleAnswerClick = (selectedAnswer) => {
        setAnswers([...answers, selectedAnswer]);
        questions[currentQuestion].answer = selectedAnswer;

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setTimeout(() => setCurrentQuestion(nextQuestion), 300);
        } else {
            let questionString = "";
            questions.forEach(question => {
                questionString += `\nQuestion: ${question.question}\nAnswer: ${question.answer}\n`;
            });
            setShowAnalysis(true);
            run(questionString);
        }
    };
    return (
        <>
            <div className="p-10 help">
                {!showAnalysis ? (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -150, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center  ">
                            <div className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold font-rocaLt">
                                    <span>{`${currentQuestion + 1}) `} &nbsp; </span> {questions[currentQuestion].question}
                                </div>
                            </div>
                            <div className="answer-section">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <div className='mt-5 text-xl text-center mb-10' key={index}>
                                        <button onClick={() => handleAnswerClick(option)}>
                                        <div className='bg-[#e6eaf0] bg-opacity-30 hover:bg-opacity-80 border-2 border-[#c3ccdb] w-60 sm:w-72 m-3 p-3 rounded-lg'>
                                                {option}
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="text-center">
                   <div className='text-3xl sm:text-3xl md:text-4xl font-bold font-rocaLt mb-7 '>Thank you for completing the questionnaire !</div>
                    <div className='text-2xl font-semibold mb-7'>Your Analysis:</div>
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center p-8">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4FD1C5] mb-4"></div>
                            <p className="text-lg text-gray-600">Analyzing your responses...</p>
                            <p className="text-sm text-gray-500 mt-2">This may take up to 15 seconds</p>
                        </div>
                    ) : (
                        <div className='text-base sm:text-lg md:text-xl sm:mx-8 md:mx-16 lg:mx-52 rounded-2xl bg-[#c7ebf2] bg-opacity-70 p-5 font-semibold'>
                        <Markdown>{llmResponse}</Markdown>
                    </div>
                    )}
                    <div className="">
                        <Link to="/book-session">
                            <button className="mt-10 md:mt-14 px-4 md:px-6 py-2 md:py-2 text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-[#e6eddd] text-black rounded-2xl hover:bg-[#dfedce] hover:text-black transition duration-300">
                                Book a Session
                            </button>
                        </Link>
                        <Link to="/talk-with-ai">
                            <button className="mt-10 md:mt-14 px-4 md:px-6 py-2 md:py-2 text-xl sm:text-2xl md:text-2xl lg:text-2xl bg-[#e6eddd] text-black rounded-2xl hover:bg-[#dfedce] hover:text-black transition duration-300">
                                Talk to Yuri
                            </button>
                        </Link>
                    </div>
                </div>

                )}
            </div>
        </>
    )
}

export default QuesFamily;
