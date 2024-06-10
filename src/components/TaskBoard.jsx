import React from "react";
import SearchTask from "./SearchTask";
import TaskNav from "./TaskNav";

const TaskBoard = () => {
  return (
    <div className="border rounded-sm border-orange-500 p-4 bg-gray-200 relative">
      <SearchTask />
      <div className="mt-14">
        <TaskNav />
      </div>
    </div>
  );
};

export default TaskBoard;
