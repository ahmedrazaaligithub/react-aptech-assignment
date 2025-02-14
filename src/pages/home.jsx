import React from 'react';
import { Link } from 'react-router-dom';

const assignments = [
  { id: 1, title: 'Assignment 1', description: 'Quiz With Out Array' ,url:"/quiz-w-o-a"},
  { id: 2, title: 'Assignment 2', description: 'Quiz With Array' ,url:"/quiz-w-a"},
  { id: 3, title: 'Assignment 3', description: 'Array Work' ,url:"/planets"},
  { id: 4, title: 'Assignment 4', description: 'Feedback Form' ,url:"/feedback"},
  { id: 5, title: 'Assignment 5', description: 'Todo List' ,url:"/todo"},
  { id: 6, title: 'Assignment 6', description: 'Letter and word count' ,url:"/letters&words"},
  { id: 7, title: 'Assignment 7', description: 'Props' ,url:"/props"},
];

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen  bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-white text-4xl font-bold mb-8">React Assignments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {assignments.map((assignment) => (
          <Link to={assignment.url}>
          <div
            key={assignment.id}
            className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-100">{assignment.title}</h3>
            <p className="text-cyan-50 mt-2">{assignment.description}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;