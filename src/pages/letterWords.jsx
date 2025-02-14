import React, { useState } from 'react';

const LetterWords = () => {
  const [text, setText] = useState('');
  
  // Function to count words
  const countWords = (text) => {
    if (!text.trim()) return 0;
    return text.trim().split(" ").length;
  };

  // Function to count letters
  const countLetters = (text) => {
    return text.length;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-500/40 to-lime-900/40 flex flex-col items-center justify-center p-6">
      <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Word & Letter Counter
        </h1>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          rows="8"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-6 flex justify-between">
          <div className="text-lg font-semibold text-gray-700">
            Words: <span className="text-lime-600/80">{countWords(text)}</span>
          </div>
          <div className="text-lg font-semibold text-gray-700">
            Letters: <span className="text-lime-600/80">{countLetters(text)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterWords;