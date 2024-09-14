import React, { useState } from 'react';
import axios from 'axios';
import questionsData from './questionsData';
import Sidebar from './Sidebar'; 
import logo from '../assets/Chatbot_logo.png'; 

const QColorAnalysis = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showSubmit, setShowSubmit] = useState(false);


  const handleOptionSelect = (event) => {
    const optionId = event.target.id;
    const currentQuestionObj = questionsData[currentQuestion];

    const selectedOption = currentQuestionObj.options.find(option => option.id === parseInt(optionId));
    const optionText = selectedOption.text;
  
    setAnswers(prevAnswers => [
      ...prevAnswers,
      { questionId: questionsData[currentQuestion].question, optionText }
    ]);
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === questionsData.length - 1) {
      setShowSubmit(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };


  const handleSubmit = async () => {
    try {
      console.log('User input submitted:', answers);
  
      const response = await axios.post('http://localhost:3000/user-input', {
        answers: answers  
      });
  
      console.log('Server response:', response.data);
      setAnalysisResult(response.data.result)
    } catch (error) {
      console.error('Error during analysis:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar /> 
      <div className="flex-1 flex-col overflow-y-auto">
        <div className="p-4 sticky top-0 z-10 bg-white">
              <div className="flex-1 border border-gray-300 rounded-full p-4 text-center max-w-[13vw] h-[7vh] md:w-25vw relative group mx-auto">
                <h2 className="text-l-lg font-semi-bold text-white">Color Analysis Test</h2>
                <style jsx>{`
                      .group {
                        background-image: linear-gradient(to bottom, #ed219f 0%, #e94a2f 90%);
                      }
                    `}
                </style>
              </div>
            </div>
            {questionsData.map((question, index) => (
              <div key={question.id} style={{ display: index <= currentQuestion ? 'block' : 'none', marginBottom: '20px' }} className="mb-8 flex items-start ml-10">
                <div className="mb-10 flex item-center text-pink-800 border-width: 2px"><img src={logo} alt="logo" className="mr-2 w-8 h-8"></img>{question.question}</div>
                <div className="flex flex-wrap">
                  {question.options.map(option => (
                    <div key={option.id} className="mb-8 flex items-center mr-4 ml-10 ">
                      <input 
                        type="radio" 
                        id={option.id} 
                        name={`question${question.id}`} 
                        onChange={handleOptionSelect} 
                        className="mr-2 mb-10"
                        required
                      />
                      <div className="flex flex-col items-center">
                      <img 
                        src={option.imageUrl} 
                        alt={option.text} 
                        className="w-16 h-16 object-cover mb-2 rounded-2xl" 
                      />
                      <label htmlFor={option.id} className="mt-2 text-center">{option.text}</label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {showSubmit && (
            <div className="flex justify-center">
            <div>
            <button onClick={handleSubmit} className="bg-pink-600 active:bg-white hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-2xl w-60 mb-10">
                Submit
              </button>
            </div>
            </div>
          )}
          {analysisResult && (
            <div className="flex justify-center items-center">
        <div className={`bg-${analysisResult}-500 border border-solid border-pink-800 rounded-lg w-[50vw] h-[30vh] mb-10 flex flex-col items-center justify-center p-6`} >
          <h2 className="text-4xl font-bold text-pink-500 mb-4">Analysis Result</h2>
          <p className="text-lg mb-2">Color which will suit you best is: {analysisResult}</p>
          <p className="text-lg mb-4">Here is the link to your result: <a href={`https://www.myntra.com/women?f=Categories%3ADresses%3A%3AColor%3A${analysisResult}`} className="text-blue-500">myntra.com</a> </p>
          <h1 className="text-lg text-pink-600">Happy Shopping💖</h1>
          </div>
        </div>
      )}
        </div>
      </div>
  );
};

export default QColorAnalysis;