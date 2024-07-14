import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; 
import questionsData from './questionsData'; 

const QColorAnalysis = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null); // New state variable for the result

  const handleOptionSelect = (optionId) => {
    setAnswers([...answers, { questionId: questionsData[currentQuestion].id, optionId }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/user-input', answers);
      const response = await axios.post('http://localhost:3000/color-analysis');
      setAnalysisResult(response.data); // Set the response data to the state variable
    } catch (error) {
      console.error('Error during analysis:', error);
    }
  };

  return (
    <div className="flex h-screen"> 
      <Sidebar /> 
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Color Analysis Test</h1>
          {currentQuestion < questionsData.length ? (
            <div>
              <div className="flex mb-4">
                <img className="mr-4" src={questionsData[currentQuestion].options[0].imageUrl} alt="Option 1" />
                <img src={questionsData[currentQuestion].options[1].imageUrl} alt="Option 2" />
              </div>
              <div className="mb-4">{questionsData[currentQuestion].question}</div>
              <div>
                {questionsData[currentQuestion].options.map(option => (
                  <div key={option.id} className="mb-2">
                    <input type="radio" id={option.id} name={`question${questionsData[currentQuestion].id}`} onChange={() => handleOptionSelect(option.id)} />
                    <label htmlFor={option.id} className="ml-2">{option.text}</label>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-4">All questions answered. Click submit to proceed.</p>
              <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          )}
          {analysisResult && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Analysis Result</h2>
              <p>{analysisResult.message}</p> {/* Display the result message */}
              {/* You can display more details from the result if needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QColorAnalysis;
