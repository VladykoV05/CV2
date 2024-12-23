import React from "react";
import "./App.css";
import Footer from "./components/Footer"; // Импортируем Footer
import Navbar from "./components/Navbar"; // Импортируем Navbar
import Header from "./components/Header"; // Импортируем Header
import MySkills from "./components/MySkills"; // Импортируем MySkills
import MyWorks from "./components/MyWorks"; // Импортируем MyWorks

const App = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />
      <div className="pt-24 p-8">
        <div className="max-w-6xl mx-auto p-5">
          <Header />
          <MySkills />
          <MyWorks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;