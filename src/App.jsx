import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import CreateTask from "./components/CreateTask";
import RecentActivity from "./components/RecentActivity";
import MyTasks from "./components/MyTasks";
import CalendarSection from "./components/CalenderSection";

function App() {
  return (
    <Router>
      <div className="flex main_container">
        <Sidebar />

        <div id="app" className="w-[74%] h-[850px] p-6 ">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mt-2 h-full">
                  <div className="h-full">
                    <Overview />
                  </div>
                  <div className="h-full">
                    <CreateTask />
                  </div>
                  <div className="h-full">
                    <RecentActivity />
                  </div>
                  <div className="h-full calender">
                    <CalendarSection />
                  </div>
                </div>
              }
            />

            <Route path="/my-tasks" element={<MyTasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
