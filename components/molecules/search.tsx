import React from "react";
import Input from "../atoms/input";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="flex w-fit justify-center align-center shadow rounded rounded-full divide-x-2 p-2">
      <Input type="text" placeholder="Search dashboard ..." name="search" />
      <span className="p-2 text-gray">
        <FiSearch />
      </span>
    </div>
  );
};

export default Search;
