import React from "react";
import { USER_ICON } from "../utils/Constants";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-300 rounded-lg items-center my-2">
      <img className="w-10 h-10 ml-2" src={USER_ICON} alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
