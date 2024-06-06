import React from "react";
import logo from "../assets/task.png";

const Header = () => {
  return (
    <div className="flex h-20 py-2 px-4 bg-blue-800 justify-between items-center border rounded-sm border-orange-500">
      <img className="size-16" src={logo} alt="my task manager" />
      <h1 className="text-2xl font-semibold text-white">Ashiqur2279</h1>
    </div>
  );
};

export default Header;
