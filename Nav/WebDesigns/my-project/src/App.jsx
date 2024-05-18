import { useState } from 'react';
import logo from './Untitled.jpeg';

const Quiz = () => {
  // Define the state for storing the current question index, whether the answer is correct, the score, user responses, and review mode
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);

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
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "India", "South Korea"],
      answer: "Japan"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: "H2O"
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      answer: "Nitrogen"
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Albert Einstein"],
      answer: "Alexander Fleming"
    },
    {
      question: "What is the smallest bone in the human body?",
      options: ["Femur", "Cranium", "Stapes", "Humerus"],
      answer: "Stapes"
    },
    // Add more questions here
  ];

  // Function to handle option selection
  const handleOptionSelect = (selectedOption) => {
    // Check if the selected option is correct
    const isAnswerCorrect = selectedOption === questions[currentQuestion].answer;
    // Update state variable
    setIsCorrect(isAnswerCorrect);
    // Increment the score if the answer is correct
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    // Store the response
    const newResponses = [...responses];
    newResponses[currentQuestion] = { question: questions[currentQuestion].question, selectedOption, isCorrect: isAnswerCorrect };
    setResponses(newResponses);
  };

  // Function to move to the next question
  const moveToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      // Move to the next question
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If it was the last question, mark the quiz as completed
      setCurrentQuestion(currentQuestion + 1);
    }
    // Reset isCorrect state variable
    setIsCorrect(null);
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsCorrect(null);
    setScore(0);
    setResponses([]);
    setReviewMode(false);
  };

  // Function to toggle review mode
  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
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
        {reviewMode ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Review Your Mistakes</h1>
            {responses.map((response, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg mb-2">Question {index + 1}: {response.question}</h2>
                <p className={`mb-2 ${response.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  Your answer: {response.selectedOption} - {response.isCorrect ? 'Correct' : 'Incorrect'}
                </p>
              </div>
            ))}
            <button 
              className="block w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
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
                {/* Display next question button */}
                <button 
                  className="block w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
                  onClick={moveToNextQuestion}
                  disabled={isCorrect === null}
                >
                  Next Question
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Quiz Finished!</h1>
                <p className="text-lg mb-5">Congratulations! You have completed the quiz.</p>
                <p className="text-lg mb-5">Your score is: {score} out of {questions.length}</p>
                <button 
                  className="block w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
                  onClick={restartQuiz}
                >
                  Restart Quiz
                </button>
                <button 
                  className="block w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
                  onClick={toggleReviewMode}
                >
                  Review Your Mistakes
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
