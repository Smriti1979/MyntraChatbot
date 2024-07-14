
// import React, { useState } from 'react';
// import axios from 'axios';
// import MainContent from './MainContent'; // Corrected import
// import SideBar from './Sidebar'
// const questionsData = [
//   // Your questions data remains unchanged
// ];

// const QColorAnalysis = () => {
  
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);

//   const handleOptionSelect = (optionId) => {
//     setAnswers([...answers, { questionId: questionsData[currentQuestion].id, optionId }]);
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3000/user-input', answers);
//       const response = await axios.post('http://localhost:3000/color-analysis');
//       // Handle response as needed
//     } catch (error) {
//       console.error('Error during analysis:', error);
//     }
//   };

//   return (
//     <div>
      
//       <div>
//         <h1>Color Analysis Test</h1>
//         {currentQuestion < questionsData.length ? (
//           <div>
//             <div>
//               <img src={questionsData[currentQuestion].options[0].imageUrl} alt="Option 1" />
//               <img src={questionsData[currentQuestion].options[1].imageUrl} alt="Option 2" />
//             </div>
//             <div>{questionsData[currentQuestion].question}</div>
//             <div>
//               {questionsData[currentQuestion].options.map(option => (
//                 <div key={option.id}>
//                   <input type="radio" id={option.id} name={`question${questionsData[currentQuestion].id}`} onChange={() => handleOptionSelect(option.id)} />
//                   <label htmlFor={option.id}>{option.text}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <p>All questions answered. Click submit to proceed.</p>
//             <button onClick={handleSubmit}>Submit</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QColorAnalysis;
import React, { useState } from 'react';
import axios from 'axios';
import MainContent from './MainContent'; // Corrected import
import Sidebar from './Sidebar'; // Corrected import
import questionsData from './questionsData'; // Assuming questionsData is imported from a file

const QColorAnalysis = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

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
    <div className="flex h-screen"> {/* Ensure full height */}
      <Sidebar /> {/* Sidebar is always visible */}
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
        </div>
      </div>
    </div>
  );
};

export default QColorAnalysis;
