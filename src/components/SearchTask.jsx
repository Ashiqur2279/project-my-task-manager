import React from "react";

const SearchTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements[0].value;
  };

  return (
    <div className="absolute top-3 right-3 p-2 border rounded-sm border-blue-800">
      <form onSubmit={handleSubmit}>
        <input
          className="py-1 px-2"
          type="text"
          placeholder="Search your task"
        />
        <button className="bg-orange-600 py-1 px-2 text-white " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchTask;
