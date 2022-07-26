import React from "react";

const Step = ({ step, editable = false, removeStep = () => {} }) => {
  return (
    <div>
      <p>
        {step}
        {editable && <button onClick={() => removeStep(step)}>X</button>}
      </p>
    </div>
  );
};

export default Step;
