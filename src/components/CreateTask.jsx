import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

function TaskCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        status: "Pending",
      };
      dispatch(addTask(newTask));
      setTitle("");
      setDescription("");
      setDueDate("");
    }
  };

  return (
    <div className="bg-[#3F4057] p-2 rounded-lg shadow-lg mt-6">
      <h2 className="text-white text-2xl font-bold text-center mb-1">
        Create Task
      </h2>
      {/* FORM FOR TASK CREATION  */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 mb-3 bg-[#4e5b71] text-white rounded-lg"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 mb-3 bg-[#4e5b71] text-white rounded-lg"
          rows="3"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-3 mb-3 bg-[#4e5b71] text-white rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
