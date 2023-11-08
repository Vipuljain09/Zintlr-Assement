import React from "react";

const CustomButton = ({ children,className }) => {
  return (
    <div className={`text-center px-4 py-2 text-xl  bg-gray-800 text-white rounded-md md:min-w-[40px] cursor-pointer + ${className}`}>
      {children}
    </div>
  );
};

export default CustomButton;
