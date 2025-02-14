import { useState } from "react";

const QuizTwo = () => {
  const questions = [
    {
      qno: 1,
      question: "What is the capital of Pakistan?",
      options: ["Islamabad", "Karachi", "Lahore", "Multan"],
      correctAnswer: "Islamabad",
      name: "pak",
    },
    {
      qno: 2,
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
      correctAnswer: "Delhi",
      name: "ind",
    },
    {
      qno: 3,
      question: "What is the capital of China?",
      options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
      correctAnswer: "Beijing",
      name: "chn",
    },
    {
      qno: 4,
      question: "What is the capital of the USA?",
      options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
      correctAnswer: "Washington, D.C.",
      name: "usa",
    },
    {
      qno: 5,
      question: "What is the capital of the UK?",
      options: ["London", "Manchester", "Liverpool", "Birmingham"],
      correctAnswer: "London",
      name: "uk",
    },
    {
      qno: 6,
      question: "What is the capital of France?",
      options: ["Paris", "Lyon", "Marseille", "Nice"],
      correctAnswer: "Paris",
      name: "fra",
    },
    {
      qno: 7,
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correctAnswer: "Berlin",
      name: "ger",
    },
    {
      qno: 8,
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
      correctAnswer: "Tokyo",
      name: "jpn",
    },
    {
      qno: 9,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
      name: "aus",
    },
    {
      qno: 10,
      question: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      correctAnswer: "Ottawa",
      name: "can",
    },
  ];
  
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [right, setRight] = useState(0);

  const handleOptionChange = (name, value) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    let userScore = 0;
    let rightAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach((q) => {
      if (selectedAnswers[q.name] === q.correctAnswer) {
        userScore += 10;
        rightAnswers++;
      } else {
        wrongAnswers++;
      }
    });

    setScore(userScore);
    setRight(rightAnswers);
    setWrong(wrongAnswers);
    setSubmitted(true);
  };

  return (
    <div className="w-full  p-10 flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-gray-400">
      <h1 className="text-2xl font-bold mb-5 text-white">Quiz</h1>
      {questions.map((q) => (
        <div
          key={q.qno}
          // className="my-4 w-full max-w-md bg-white p-4 rounded-lg shadow"
          className={`my-4 w-full max-w-md bg-white/40 p-4 rounded-lg shadow `}
        >
          <h2 className={`text-lg font-semibold mb-2 ${submitted && selectedAnswers[q.name] !== q.correctAnswer ? 'text-red-400' : 'text-black'}`}>
            {q.qno}. {q.question}
          </h2>
          {q.options.map((option, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name={q.name}
                value={option}
                checked={selectedAnswers[q.name] === option}
                onChange={(e) => handleOptionChange(q.name, e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={handleSubmit}
        disabled={submitted}
      >
        Submit
      </button>

      {submitted && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Score: {score}</p>
          <p className="text-lg font-semibold text-red-500">
            Wrong Answers: {wrong}
          </p>
          <p className="text-lg font-semibold text-green-500">
            Right Answers: {right}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizTwo;
