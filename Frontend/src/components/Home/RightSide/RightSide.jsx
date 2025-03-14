import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

const RightSide = () => {
  return (
    <div className="w-2/3 text-white bg-slate-950">
      <ChatUser></ChatUser>
      <div className="overflow-auto" style={{ maxHeight: "calc(88vh - 8vh)" }}>
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>
  );
};

export default RightSide;
