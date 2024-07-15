import React, { useState } from 'react';
import axios from 'axios';
import questionsData from './questionsData';
import Sidebar from './Sidebar'; 

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
      setAnalysisResult(response.data.result);
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
                <h2 className="text-s-lg font-semi-bold text-white">Color Analysis Test</h2>
                <style jsx>{`
                      .group {
                        background-image: linear-gradient(to bottom, #ed219f 0%, #e94a2f 90%);
                      }
                    `}
                </style>
              </div>
            </div>
          <div className="flex flex-wrap">
            {questionsData.map((question, index) => (
              <div key={question.id} style={{ display: index <= currentQuestion ? 'block' : 'none', marginBottom: '20px' }} className="mb-8 flex items-start">
                <div className="mb-10">{question.question}</div>
                <div className="flex flex-wrap">
                  {question.options.map(option => (
                    <div key={option.id} className="mb-8 flex items-center mr-4">
                      <input 
                        type="radio" 
                        id={option.id} 
                        name={`question${question.id}`} 
                        onChange={handleOptionSelect} 
                        className="mr-2"
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
          </div>
          {showSubmit && (
            <div className="flex justify-center">
            <div>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
            </div>
          )}
          {analysisResult && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Analysis Result</h2>
              <p>{analysisResult}</p> 
              <a href={`https://www.myntra.com/women?f=Categories%3ADresses%3A%3AColor%3A${analysisResult}`}>myntra.com</a>
            </div>
          )}
        </div>
      </div>
  );
};

export default QColorAnalysis;