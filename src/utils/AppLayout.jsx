import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TaskBoard from "../components/TaskBoard";

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <TaskBoard />
    </>
  );
};

export default AppLayout;

// Primary: .bg-blue-800 ( Blue)
// Secondary: .bg-gray-200 (Light Gray)
// Accent: .bg-orange-500 (Orange)
