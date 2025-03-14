import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="py-4">
      <form className="flex justify-center">
        <label className=" py-2">
          <input
            type="search"
            className="grow text-white bg-slate-900 border outline-none"
            placeholder="Search"
          />
        </label>
        <button>
          <IoSearch className="hover:bg-gray-400  rounded-lg text-2xl p-1"></IoSearch>
        </button>
      </form>
    </div>
  );
};

export default Search;
