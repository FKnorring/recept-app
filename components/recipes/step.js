import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Step = ({ step, editable = false, removeStep = () => {} }) => {
  return (
    <>
      <p className="my-2 font-light border-b-[1px] border-opacity-10 w-fit">
        {step}
        {editable && (
          <FontAwesomeIcon
            className="cursor-pointer ml-2 float-right"
            icon={solid("xmark")}
            onClick={() => removeStep(step)}
            size="1x"
          />
        )}
      </p>
    </>
  );
};

export default Step;
