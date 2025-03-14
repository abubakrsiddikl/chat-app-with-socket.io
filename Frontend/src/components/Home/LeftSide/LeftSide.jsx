import React from "react";
import Search from "./Search";
import Users from "./Users";

const LeftSide = () => {
  return (
    <div className="w-1/3 text-white bg-black">
      <h1 className="font-bold text-2xl">Chats</h1>
      <Search></Search>
      <Users></Users>
    </div>
  );
};

export default LeftSide;
