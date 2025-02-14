import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodo = () => {
    if (!input || input.trim() == "") return alert("invalid input");
    if (todos.includes(input)) return alert("input hasbeen defiend already");
    setTodos([...todos, input]);
    setInput("");
  };
  const handleDelete= (index) => {
    if(window.confirm("do you really want to delete this todo"))
    setTodos(todos.filter((todo, i) => i !== index))
  } 
  return (
    <div className="p-20 w-full h-[100vh] flex items-center flex-col bg-gradient-to-tl  from-sky-300 to-purple-300">
        <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none  bg-sky-100"
        />
        <button
          onClick={handleTodo}
          className="px-2 py-1 rounded bg-purple-400 text-white"
        >
          Add
        </button>
      </div>
      <div className="w-full">
        {todos.map((todo, index) => {
          return (
            <div className="w-full flex justify-between mb-2" key={index}>
              <p className="text-white text-lg ">{todo}</p>
              <button
                onClick={()=>handleDelete(index)}
                className="px-2 py-1 rounded bg-purple-400 text-white"
              >
                <IoTrashOutline />
              </button>
            </div>
          );
        })}
      </div>

        </div>
    </div>
  );
};

export default TodoList;
