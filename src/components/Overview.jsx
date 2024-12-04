import React from "react";
import { useSelector } from "react-redux";

function Overview() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;
  const overdueTasks = tasks.filter(
    (task) => new Date(task.dueDate) < new Date()
  ).length;

  return (
    <div className="w-full h-full bg-[#3F4057] p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        Overview
      </h2>
{/* TASKS OVERVIEW  */}
      <div className=" h-full">
        <div className="bg-[blue] p-2 mb-8 flex items-center justify-around rounded-lg text-center text-white shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Total Tasks</h3>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>

        <div className="bg-[#22c55e] p-2 mb-8 flex items-center justify-around rounded-lg text-center text-white shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Completed Tasks</h3>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>

        <div className="bg-[#eab308] p-2 mb-8 flex items-center justify-around rounded-lg text-center text-white shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Pending Tasks</h3>
          <p className="text-3xl font-bold">{pendingTasks}</p>
        </div>

        <div className="bg-[#ef4444] p-2 mb-8 flex items-center justify-around rounded-lg text-center text-white shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold">Overdue Tasks</h3>
          <p className="text-3xl font-bold">{overdueTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
