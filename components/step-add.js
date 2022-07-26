import React, { useState } from "react";

const StepAdd = ({ addStep }) => {
  const [step, setStep] = useState("");

  const handleClick = () => {
    addStep(step);
    setStep("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <textarea
        onKeyDown={handleEnter}
        onChange={(e) => setStep(e.target.value)}
        type="text"
        name="name"
        placeholder="Steg"
        value={step}
      />
      <button onClick={handleClick}>Lägg till steg</button>
    </div>
  );
};

export default StepAdd;
