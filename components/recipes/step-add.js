import React, { useState } from "react";

const StepAdd = ({ addStep }) => {
  const [step, setStep] = useState("");

  const handleClick = () => {
    addStep(step);
    setStep("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onKeyDown={handleKeyDown}
        onChange={(e) => setStep(e.target.value)}
        type="text"
        name="name"
        placeholder="Steg"
        value={step}
      />
      <button type="submit" onClick={handleClick}>
        Lägg till steg
      </button>
    </form>
  );
};

export default StepAdd;
