<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# TaskNest

# Task Management Dashboard

A comprehensive task management application built with **React**, **Redux**, and **Tailwind CSS**. This dashboard allows users to manage tasks, track recent activities, and visualize data via an interactive calendar.

---

## Features

- **Dashboard Overview**: Displays the total, completed, pending, and overdue tasks.
- **Task Management**: Create, edit, delete, and mark tasks as complete or pending.
- **Recent Activities**: Tracks changes to tasks (e.g., addition, deletion, or status updates).
- **Calendar Integration**: Shows tasks and their due dates on an interactive calendar.
- **Responsive Design**: Works seamlessly on devices of all sizes.
- **Local Storage Integration**: Saves tasks and activity data for persistence.

---

## Components

### 1. **App**
The root component that integrates routing, navigation, and the main layout.

### 2. **Sidebar**
- Provides navigation links for quick access to the **Dashboard** and **My Tasks**.

### 3. **Navbar**
- Features a search bar and utility icons (e.g., for notifications, theme switching).

### 4. **Overview**
- Displays key task statistics (total, completed, pending, overdue) using data from Redux state.

### 5. **CreateTask**
- Allows users to add new tasks with a title, description, and due date.

### 6. **RecentActivity**
- Displays recent actions performed on tasks (e.g., added, deleted, edited).

### 7. **CalendarSection**
- Interactive calendar that helps users visualize their task schedules.

### 8. **MyTasks**
- Displays a list of tasks with options to filter by status (All, Completed, Pending, Overdue).
- Features include editing and deleting tasks and toggling task statuses.

---

## State Management
This project uses **Redux Toolkit** for state management:
- **taskSlice**: Manages tasks and activity data, with persistence to local storage.

### Actions
1. **addTask**: Adds a new task to the list.
2. **deleteTask**: Removes a task by ID.
3. **editTask**: Updates task details.
4. **toggleTaskStatus**: Toggles task completion status.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
>>>>>>> 48a25dcd2ba2c43a23dc2ad4fd1147deb5da1a7e
