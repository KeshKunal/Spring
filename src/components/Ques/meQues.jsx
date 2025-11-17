import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import "../../pages/HelpPage/Help.css"
const genAI = new GoogleGenerativeAI("AIzaSyCJnE0tVtHZdj60ba8sm-uFGx3IDujwVSg");
import { Link } from 'react-router-dom';

let questionString = "";
const questions = [
    {
        question: "How often do you feel overwhelmed by your thoughts or emotions?",
        options: ["Rarely", "Sometimes", "Often", "Almost always"]
    },
    {
        question: "How well do you sleep on a regular basis?",
        options: ["Very well", "Fairly well", "Poorly", "I have trouble sleeping most nights"]
    },
    {
        question: "How do you feel about your daily activities and responsibilities?",
        options: ["Energized and motivated", "Neutral or indifferent", "Exhausted but managing", "Overwhelmed and unable to cope"]
    },
    {
        question: "How connected do you feel to the people around you (friends, family, etc.)",
        options: ["Very connected and supported", "Somewhat connected", "Distant or isolated at times", "Completely disconnected"]
    },
    {
        question: "How often do you experience feelings of sadness or hopelessness?",
        options: ["Rarely or never", "Occasionally", "Frequently", "Almost all the time"]
    }
];

function Ques() {
    const [llmResponse, setLlmResponse] = useState("")
    const [isLoading, setIsLoading] = useState(false);

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
                generationConfig, history: [
                    {
                        role: "user",
                        parts: [
                            { text: "Question: Over the last 2 weeks, how often have you felt down, depressed, or hopeless?\nAnswer: Not at all\n\nQuestion: How often have you had little interest or pleasure in doing things?\nAnswer: Several days\n\nQuestion: How often have you had trouble falling or staying asleep, or sleeping too much?\nAnswer: Several days\n\nQuestion: How often have you felt tired or had little energy?\nAnswer: Several days\n\nQuestion: How often have you had trouble concentrating on things?\nAnswer: Several days" },
                        ],
                    },
                    {
                        role: "model",
                        parts: [
                            { text: "It sounds like you've been experiencing some challenges related to low mood and energy levels in recent weeks. While you haven't felt depressed or hopeless, the lack of interest in activities and feelings of fatigue are worth paying attention to.  Difficulties with sleep and concentration can also be indicators of mental stress. It's important to monitor these symptoms and explore potential causes.  Remember, everyone experiences ups and downs, but persistent changes in mood and energy can benefit from attention. \n" },
                        ],
                    },
                ],
            });

            const result = await chatSession.sendMessage(prompt);
            const response = await result.response;
            const text = response.text();
            setLlmResponse(text);
            return text;
        } finally {
            setIsLoading(false);
        }
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showAnalysis, setShowAnalysis] = useState(false);

    const handleBookSession = () => {
        console.log("Book a session clicked");
    };

    const handleTalkToYuri = () => {
        console.log("Talk to Yuri clicked");
    };
    const handleAnswerClick = (selectedAnswer) => {
        const newAnswers = [...answers, selectedAnswer];
        questions[currentQuestion].answer = selectedAnswer


        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setTimeout(() => setCurrentQuestion(nextQuestion), 300);
        } else {
            questions.map(question => {
                questionString += `\nQuestion: ${question.question}\nAnswer: ${question.answer}\n`

            })
            console.log(questionString)
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
                            <div className="text-center md:mt-5 ">
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
                    <div className="">
                        <div className='text-3xl sm:text-3xl md:text-4xl font-bold font-rocaLt mb-7 '>Thank you for completing the questionnaire !</div>

                        <div className='text-2xl font-semibold mb-7'>Your Analysis:</div>
                        {isLoading ? (
                            <div className="">Loading...</div>
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
                            <Link to="">
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

export default Ques;
