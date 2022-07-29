import "../styles/globals.css";

import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-bg h-screen max-w-[1440px] mx-auto p-10">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
