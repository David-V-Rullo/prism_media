"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Input } from "@nextui-org/react";
const SearchBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-around gap-4 py-8">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
        />
        <Input
          id="location"
          type="text"
          placeholder="Location"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
        />
        <Input
          id="date"
          type="date"
          labelPlacement="outside"
          placeholder="Date"
          variant="bordered"
          radius="sm"
        />

        <Button
          isIconOnly={true}
          color="primary"
          size="sm"
          radius="sm"
          aria-label="Execute your search"
        >
          <FaSearch />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
