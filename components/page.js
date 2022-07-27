import React from "react";

const Page = ({ children, ...props }) => {
  return (
    <div
      className="px-[7rem] py-20 max-w-[1200px] min-h-screen m-auto bg-primary-100 shadow-lg"
      {...props}
    >
      {children}
    </div>
  );
};

export default Page;
