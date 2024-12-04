import { createSlice } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
const initialActivities = JSON.parse(localStorage.getItem("activities")) || [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: initialTasks,
    activities: initialActivities,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      state.activities.push({
        id: new Date().toISOString(),
        action: `Task "${action.payload.title}" added`,
        time: "Just now",
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
    deleteTask: (state, action) => {
      const taskToDelete = state.tasks.find(
        (task) => task.id === action.payload
      );
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.activities.push({
        id: new Date().toISOString(),
        action: `Task "${taskToDelete.title}" deleted`,
        time: "Just now",
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
        state.activities.push({
          id: new Date().toISOString(),
          action: `Task "${action.payload.title}" edited`,
          time: "Just now",
        });
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        localStorage.setItem("activities", JSON.stringify(state.activities));
      }
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === "Completed" ? "Pending" : "Completed";
        state.activities.push({
          id: new Date().toISOString(),
          action: `Task "${task.title}" status changed to ${task.status}`,
          time: "Just now",
        });
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        localStorage.setItem("activities", JSON.stringify(state.activities));
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTaskStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
