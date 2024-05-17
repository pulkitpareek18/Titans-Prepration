import { useState } from 'react';
import logo from './Untitled.jpeg';

const Quiz = () => {
  // Define the state for storing the current question index and whether the answer is correct
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  // Define the quiz questions and options
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars"
    },
    // Add more questions here
  ];

  // Function to handle option selection
  const handleOptionSelect = (selectedOption) => {
    // Check if the selected option is correct
    const isAnswerCorrect = selectedOption === questions[currentQuestion].answer;
    // Update state variable
    setIsCorrect(isAnswerCorrect);
  };

  // Function to move to the next question
  const moveToNextQuestion = () => {
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    // Reset isCorrect state variable
    setIsCorrect(null);
  };

  // Render the current question and options
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IntelliLearn</span>
          </a>
          {/* Navigation Menu */}
        </div>
      </nav>

      {/* Quiz Content */}
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        {currentQuestion < questions.length ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h1>
            <h2 className="text-lg mb-5">{questions[currentQuestion].question}</h2>
            {/* Display message if the answer is correct */}
            {isCorrect !== null && (
              <div className={`mb-4 text-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </div>
            )}
            {/* Display options */}
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  key={index} 
                  className={`block w-full py-2 px-4 mb-2 rounded-full ${isCorrect && questions[currentQuestion].answer === option ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-900 focus:outline-none focus:bg-blue-600`}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isCorrect !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {/* Display next question button if the answer is correct */}
            {isCorrect && (
              <button 
                className="block w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
                onClick={moveToNextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        ) : (
          <h1 className="text-2xl font-bold">Quiz completed!</h1>
        )}
      </div>
    </div>
  );
};

export default Quiz;
