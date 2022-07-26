import React from "react";
import Step from "./step";

const StepList = ({ steps, editable = false, removeStep = () => {} }) => {
  return (
    <ol>
      {steps.map((step) => {
        return (
          <li key={step}>
            <Step editable={editable} step={step} removeStep={removeStep} />
          </li>
        );
      })}
    </ol>
  );
};

export default StepList;
