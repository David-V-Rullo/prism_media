import React from "react";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <form>
        <input
          className="px-2 py-2 m-5 rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
