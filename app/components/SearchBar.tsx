"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />
        <div className="p-4">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
