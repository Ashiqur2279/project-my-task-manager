import React from "react";
import SearchTask from "./SearchTask";
import TaskNav from "./TaskNav";

const TaskBoard = () => {
  return (
    <div className="border rounded-sm border-orange-500 p-4 bg-gray-200 relative my-4">
      <SearchTask />
      <div className="mt-14">
        <TaskNav />
      </div>
    </div>
  );
};

export default TaskBoard;
