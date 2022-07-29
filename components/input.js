import React from "react";

const Input = ({ label, type, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="ml-5">{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="w-64 h-10 px-6 text-base bg-primary rounded-[20px]"
      ></input>
    </div>
  );
};

export default Input;
