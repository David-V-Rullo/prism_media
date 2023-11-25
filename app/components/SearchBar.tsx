"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@nextui-org/react";
const SearchBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          className=" rounded-md w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search..."
        />
        <div className="p-4">
          {/* <button
            type="submit"
            className="bg-blue-500 text-white rounded-full  hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
          > */}
          <Button
            isIconOnly={true}
            color="primary"
            size="sm"
            radius="sm"
            aria-label="Execute your search"
          >
            <FaSearch />
          </Button>
          {/* </button> */}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
