import React from "react";

const User = () => {
  return (
    <div className="flex gap-2 px-6 py-7">
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src="https://i.ibb.co.com/fzTH1nJS/myprofile.jpg" />
        </div>
      </div>
      <div>
        <h1>Md Limon</h1>
        <span>limonsk026@gmail.com</span>
      </div>
    </div>
  );
};

export default User;
