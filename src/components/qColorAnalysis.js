import React, { useState } from 'react';
import axios from 'axios';
import questionsData from './questionsData'; // Assuming questionsData is imported from a file
import MainContent from './MainContent'; // Corrected import
import Sidebar from './Sidebar'; // Corrected import

const QColorAnalysis = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionSelect = (optionId) => {
    setAnswers([...answers, { questionId: questionsData[currentQuestion].id, optionId }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/user-input', answers);
      const response = await axios.post('http://localhost:3000/color-analysis');
      // Handle response as needed
    } catch (error) {
      console.error('Error during analysis:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Assuming Sidebar contains navigation or other persistent content */}
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Color Analysis Test</h1>
          <div>
            {questionsData.map((question, index) => (
              <div key={question.id} style={{ display: index <= currentQuestion ? 'block' : 'none', marginBottom: '20px' }}>
                <div className="mb-4">{question.question}</div>
                <div>
                  {question.options.map(option => (
                    <div key={option.id} className="mb-4 flex items-center">
                      <input 
                        type="radio" 
                        id={option.id} 
                        name={`question${question.id}`} 
                        onChange={() => handleOptionSelect(option.id)} 
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
        </div>
      </div>
    </div>
  );
};

export default QColorAnalysis;


