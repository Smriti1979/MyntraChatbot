import React, { useState } from 'react';
import axios from 'axios';
import questionsData from './questionsData';
import Sidebar from './Sidebar'; 

const QColorAnalysis = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);

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
      <div className="flex-1 flex flex-col overflow-y-auto ml-10">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 text-pink-500">Color Analysis Test</h1>
          <div>
            {questionsData.map((question, index) => (
              <div key={question.id} style={{ display: index <= currentQuestion ? 'block' : 'none', marginBottom: '20px' }}>
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
                      />
                      <img 
                        src={option.imageUrl} 
                        alt={option.text} 
                        className="mr-2 w-16 h-16 object-cover" 
                      />
                      <label htmlFor={option.id} className="ml-2">{option.text}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {currentQuestion === questionsData.length && (
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
              <p>{analysisResult}</p> 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QColorAnalysis;