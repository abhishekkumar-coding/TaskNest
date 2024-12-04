import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import {
  deleteTask,
  editTask as editTaskAction,
  toggleTaskStatus,
} from "../store/taskSlice";

function MyTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (isConfirmed) {
      dispatch(deleteTask(id));
    }
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleTaskStatus(id));
  };

  const handleEdit = (task) => {
    setEditTask(task);
  };

  const handleSaveEdit = () => {
    if (editTask) {
      dispatch(editTaskAction(editTask));
      setEditTask(null);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.status === "Completed";
    if (filter === "Pending") return task.status === "Pending";
    if (filter === "Overdue") return new Date(task.dueDate) < new Date();
    return false;
  });

  return (
    <div className="bg-[#3F4057] p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        My Tasks
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-around mb-6">
        {["All", "Completed", "Pending", "Overdue"].map((filterType) => (
          <button
            key={filterType}
            onClick={() => handleFilterChange(filterType)}
            className={`px-4 py-2 rounded-lg ${
              filter === filterType
                ? "bg-blue-500 text-white"
                : "bg-[#4e5b71] text-white hover:bg-[#3F4057]"
            }`}
          >
            {filterType} Tasks
          </button>
        ))}
      </div>

      {/* TASK LIST */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#4e5b71] text-white rounded-lg">
          <thead>
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <tr key={task.id} className="border-b border-[#3F4057]">
                  <td className="p-3">{task.title}</td>
                  <td className="p-3">{task.description}</td>
                  <td className="p-3">{task.dueDate}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        task.status === "Completed"
                          ? "bg-green-500"
                          : task.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleToggleStatus(task.id)}
                      className="text-green-400 hover:text-green-600 transition-colors"
                    >
                      <FaCheckCircle size={18} />
                    </button>
                    <button
                      onClick={() => handleEdit(task)}
                      className="text-yellow-400 hover:text-yellow-600 transition-colors"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6">
                  No tasks found for the selected filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

{/* EDIT TASK  */}
      {editTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#4e5b71] p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-white text-xl font-bold mb-4">Edit Task</h3>
            <input
              type="text"
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
              placeholder="Title"
              className="w-full p-2 mb-4 rounded bg-[#3F4057] text-white"
            />
            <textarea
              value={editTask.description}
              onChange={(e) =>
                setEditTask({ ...editTask, description: e.target.value })
              }
              placeholder="Description"
              className="w-full p-2 mb-4 rounded bg-[#3F4057] text-white"
            />
            <input
              type="date"
              value={editTask.dueDate}
              onChange={(e) =>
                setEditTask({ ...editTask, dueDate: e.target.value })
              }
              className="w-full p-2 mb-4 rounded bg-[#3F4057] text-white"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setEditTask(null)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTasks;
