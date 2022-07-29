import React from "react";

const Button = ({ children, color = "accent", ...props }) => {
  return (
    <button
      {...props}
      className={`my-3 px-5 py-3 text-xl tracking-wider bg-${color} rounded-[20px]`}
    >
      {children}
    </button>
  );
};

export default Button;