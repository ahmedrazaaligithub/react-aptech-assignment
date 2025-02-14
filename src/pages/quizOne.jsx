import { useState } from "react";

const QuizOne = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({
    pak: "",
    ind: "",
    chn: "",
    usa: "",
    uk: "",
  });
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

    // Check each question individually
    if (selectedAnswers.pak === "Islamabad") {
      userScore += 10;
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (selectedAnswers.ind === "Delhi") {
      userScore += 10;
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (selectedAnswers.chn === "Beijing") {
      userScore += 10;
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (selectedAnswers.usa === "Washington, D.C.") {
      userScore += 10;
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (selectedAnswers.uk === "London") {
      userScore += 10;
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    setScore(userScore);
    setRight(rightAnswers);
    setWrong(wrongAnswers);
    setSubmitted(true);
  };

  return (
    <div className="w-full p-10 flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-gray-400">
      <h1 className="text-2xl font-bold mb-5 text-white">Basic Quiz</h1>

      {/* Question 1 */}
      <div className="my-4 w-full max-w-md bg-white/40 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">1. What is the capital of Pakistan?</h2>
        <label className="block mb-2">
          <input
            type="radio"
            name="pak"
            value="Islamabad"
            checked={selectedAnswers.pak === "Islamabad"}
            onChange={(e) => handleOptionChange("pak", e.target.value)}
            className="mr-2"
          />
          Islamabad
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="pak"
            value="Karachi"
            checked={selectedAnswers.pak === "Karachi"}
            onChange={(e) => handleOptionChange("pak", e.target.value)}
            className="mr-2"
          />
          Karachi
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="pak"
            value="Lahore"
            checked={selectedAnswers.pak === "Lahore"}
            onChange={(e) => handleOptionChange("pak", e.target.value)}
            className="mr-2"
          />
          Lahore
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="pak"
            value="Multan"
            checked={selectedAnswers.pak === "Multan"}
            onChange={(e) => handleOptionChange("pak", e.target.value)}
            className="mr-2"
          />
          Multan
        </label>
      </div>

      {/* Question 2 */}
      <div className="my-4 w-full max-w-md bg-white/40 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">2. What is the capital of India?</h2>
        <label className="block mb-2">
          <input
            type="radio"
            name="ind"
            value="Mumbai"
            checked={selectedAnswers.ind === "Mumbai"}
            onChange={(e) => handleOptionChange("ind", e.target.value)}
            className="mr-2"
          />
          Mumbai
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="ind"
            value="Delhi"
            checked={selectedAnswers.ind === "Delhi"}
            onChange={(e) => handleOptionChange("ind", e.target.value)}
            className="mr-2"
          />
          Delhi
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="ind"
            value="Bangalore"
            checked={selectedAnswers.ind === "Bangalore"}
            onChange={(e) => handleOptionChange("ind", e.target.value)}
            className="mr-2"
          />
          Bangalore
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="ind"
            value="Chennai"
            checked={selectedAnswers.ind === "Chennai"}
            onChange={(e) => handleOptionChange("ind", e.target.value)}
            className="mr-2"
          />
          Chennai
        </label>
      </div>

      {/* Question 3 */}
      <div className="my-4 w-full max-w-md bg-white/40 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">3. What is the capital of China?</h2>
        <label className="block mb-2">
          <input
            type="radio"
            name="chn"
            value="Shanghai"
            checked={selectedAnswers.chn === "Shanghai"}
            onChange={(e) => handleOptionChange("chn", e.target.value)}
            className="mr-2"
          />
          Shanghai
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="chn"
            value="Beijing"
            checked={selectedAnswers.chn === "Beijing"}
            onChange={(e) => handleOptionChange("chn", e.target.value)}
            className="mr-2"
          />
          Beijing
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="chn"
            value="Guangzhou"
            checked={selectedAnswers.chn === "Guangzhou"}
            onChange={(e) => handleOptionChange("chn", e.target.value)}
            className="mr-2"
          />
          Guangzhou
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="chn"
            value="Shenzhen"
            checked={selectedAnswers.chn === "Shenzhen"}
            onChange={(e) => handleOptionChange("chn", e.target.value)}
            className="mr-2"
          />
          Shenzhen
        </label>
      </div>

      {/* Question 4 */}
      <div className="my-4 w-full max-w-md bg-white/40 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">4. What is the capital of the USA?</h2>
        <label className="block mb-2">
          <input
            type="radio"
            name="usa"
            value="New York"
            checked={selectedAnswers.usa === "New York"}
            onChange={(e) => handleOptionChange("usa", e.target.value)}
            className="mr-2"
          />
          New York
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="usa"
            value="Washington, D.C."
            checked={selectedAnswers.usa === "Washington, D.C."}
            onChange={(e) => handleOptionChange("usa", e.target.value)}
            className="mr-2"
          />
          Washington, D.C.
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="usa"
            value="Los Angeles"
            checked={selectedAnswers.usa === "Los Angeles"}
            onChange={(e) => handleOptionChange("usa", e.target.value)}
            className="mr-2"
          />
          Los Angeles
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="usa"
            value="Chicago"
            checked={selectedAnswers.usa === "Chicago"}
            onChange={(e) => handleOptionChange("usa", e.target.value)}
            className="mr-2"
          />
          Chicago
        </label>
      </div>

      {/* Question 5 */}
      <div className="my-4 w-full max-w-md bg-white/40 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">5. What is the capital of the UK?</h2>
        <label className="block mb-2">
          <input
            type="radio"
            name="uk"
            value="London"
            checked={selectedAnswers.uk === "London"}
            onChange={(e) => handleOptionChange("uk", e.target.value)}
            className="mr-2"
          />
          London
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="uk"
            value="Manchester"
            checked={selectedAnswers.uk === "Manchester"}
            onChange={(e) => handleOptionChange("uk", e.target.value)}
            className="mr-2"
          />
          Manchester
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="uk"
            value="Liverpool"
            checked={selectedAnswers.uk === "Liverpool"}
            onChange={(e) => handleOptionChange("uk", e.target.value)}
            className="mr-2"
          />
          Liverpool
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="uk"
            value="Birmingham"
            checked={selectedAnswers.uk === "Birmingham"}
            onChange={(e) => handleOptionChange("uk", e.target.value)}
            className="mr-2"
          />
          Birmingham
        </label>
      </div>

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

export default QuizOne;