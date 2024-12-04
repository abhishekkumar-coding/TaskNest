import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

function RecentActivity() {
  const activities = useSelector((state) => state.tasks.activities || []);

  return (
    <div className="w-full h-80 overflow-scroll bg-[#3F4057] px-2 py-2 rounded-lg shadow-lg mt-6 scrollbar-hide">
      <h2 className="text-white text-2xl font-bold text-center mb-3">
        Recent Activity
      </h2>

      <div className="space-y-2">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-[#4e5b71] p-4 rounded-lg flex items-center justify-between text-white"
            >
              <p className="text-lg">{activity.action}</p>
              <p className="text-sm text-gray-300">{activity.time}</p>
              <div className="flex gap-2">
                {activity.action.includes("completed") && (
                  <FaCheckCircle size={20} className="text-green-500" />
                )}
                {activity.action.includes("deleted") && (
                  <FaTrash size={20} className="text-red-500" />
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white">
            No recent activity to display.
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentActivity;
