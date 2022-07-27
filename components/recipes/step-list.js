import React from "react";
import Step from "./step";

const StepList = ({
  steps,
  editable = false,
  removeStep = () => {},
  ...props
}) => {
  return (
    <ol {...props} className="list-decimal ml-4 max-w-prose">
      {steps.map((step, i) => {
        return (
          <li className="" key={i}>
            <Step editable={editable} step={step} removeStep={removeStep} />
          </li>
        );
      })}
    </ol>
  );
};

export default StepList;
