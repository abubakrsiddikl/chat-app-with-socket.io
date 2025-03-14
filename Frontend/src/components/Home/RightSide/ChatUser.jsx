import React from "react";

const ChatUser = () => {
  return (
    <>
      <div className="px-5 py-2 flex gap-2 bg-gray-600">
        <div>
          <div className="avatar avatar-online">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co.com/fzTH1nJS/myprofile.jpg" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">Md Limon</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
};

export default ChatUser;
