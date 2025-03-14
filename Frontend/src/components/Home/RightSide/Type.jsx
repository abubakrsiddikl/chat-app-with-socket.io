import React from "react";
import { IoSend } from "react-icons/io5";

const Type = () => {
  return (
    <div className="px-3 flex w-full items-center" style={{ minHeight: "calc(8vh)" }}>
      <div className="flex-grow bg-gray-600">
        <input
          type="search"
          className="input w-full text-white bg-slate-900 border  border-white outline-none rounded-xl"
          placeholder="Search"
        />
      </div>
      <button className="ml-2">
        <IoSend className="hover:bg-gray-400 rounded-lg text-3xl p-1" />
      </button>
    </div>
  );
};

export default Type;
