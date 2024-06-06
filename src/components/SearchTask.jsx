import React from "react";

const SearchTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const text = e.target.value;
    const text = e.target.elements[0].value;
    // console.log(e);
    console.log(text);
  };

  return (
    <div className="absolute top-2 right-2 border rounded-sm border-blue-800">
      <form onSubmit={handleSubmit}>
        <input
          className="py-1 px-2"
          type="text"
          placeholder="Search your task"
        />
        <button className="bg-orange-500 py-1 px-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchTask;
