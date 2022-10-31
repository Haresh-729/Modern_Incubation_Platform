import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import FAQs from "./components/FAQs";
import { AboutUs1, AboutUs2, AboutUs3, AboutUs4, AboutUs5 } from "./components";
import CurrentProjects from "./components/CurrentProjects";
import Tasks from "./components/Tasks";
import Sessions1 from "./components/Sessions1";
import Sessions2 from "./components/Sessions2";
import Maturity1 from "./components/Maturity1";
import Quiz from "./components/Quiz";


import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  Dashboard,
  Profile,
} from "./components";

import { Calendar, ToDoList, Pie } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* profile */}
                <Route path="/profile" element={<Profile />} />

                {/* apps  */}
                <Route path="/todolist" element={<ToDoList />} />

                <Route path="/calendar" element={<Calendar />} />
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/Current-Projects" element={<CurrentProjects />} />
                <Route path="/Tasks" element={<Tasks />} />
                <Route path="/Session" element={<Sessions1 />} />
                <Route path="/Session-Details" element={<Sessions2 />} />
                <Route path="/Maturity" element={<Maturity1 />} />
                <Route path="/Quiz" element={<Quiz />} />

                {/* charts  */}
                <Route path="/pie" element={<Pie />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
