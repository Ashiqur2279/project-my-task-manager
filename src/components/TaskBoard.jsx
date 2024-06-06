import React from "react";
import SearchTask from "./SearchTask";

const TaskBoard = () => {
  return (
    <div className="border rounded-sm border-orange-500 p-4 bg-gray-200 relative">
      <SearchTask />
    </div>
  );
};

export default TaskBoard;
