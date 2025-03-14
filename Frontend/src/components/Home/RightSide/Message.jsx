import React from "react";

const Message = () => {
  return (
    <div className="p-5" style={{ minHeight: "calc(8vh)" }}>
      <div className="chat chat-start ">
        <div className="chat-bubble">
          It's over Anakin,
          <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
    </div>
  );
};

export default Message;
