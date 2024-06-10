import React from "react";

const TaskNav = () => {
  return (
    <div className="flex items-center justify-between px-4 p-2">
      <h1 className="text-2xl font-semibold">My Task</h1>
      <div className="flex gap-4">
        <button className="px-2 py-1 bg-blue-800 rounded-sm text-white">
          Add Task
        </button>
        <button className="px-2 py-1 bg-orange-600 rounded-sm text-white">
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskNav;
