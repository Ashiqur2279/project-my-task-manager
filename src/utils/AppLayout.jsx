import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TaskBoard from "../components/TaskBoard";

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </>
  );
};

export default AppLayout;

// Primary: .bg-blue-800 ( Blue)
// Secondary: .bg-gray-200 (Light Gray)
// Accent: .bg-orange-500 (Orange)
