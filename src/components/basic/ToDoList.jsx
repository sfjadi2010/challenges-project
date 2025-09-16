import React, { useState } from "react";

const todoList = [];

const handleAddItem = (item) => {
  todoList.push(item);
};

const handleRemoveItem = (index) => {
  todoList.splice(index, 1);
}

const ToDoList = () => {
  const [newTask, setNewTask] = useState("");

  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        className="border p-2 rounded-lg mb-4 w-64"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddItem(newTask);
          setNewTask("");
        }}
        className="mb-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        Add Task
      </button>
      <ul className="list-disc list-inside text-left">
        {todoList.map((item, index) => (
          <li key={index} className="text-white">
            {item}
            <button onClick={() => handleRemoveItem(index)} className="ml-4 text-red-500 hover:text-red-700 hover:bg-amber-50 pl-2 pr-2 rounded">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
