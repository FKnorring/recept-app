import Discover from "./discover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "./page";
import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <h1 className="text-6xl font-semibold displayfont tracking-tight text-primary-800 ml-5">
      Recepta
    </h1>
  );
};

const Landing = () => {
  const router = useRouter();
  return (
    <Page>
      <Header />
      <hr className="border-y-1 mt-3 border-primary-600" />
      <Discover />
      <FontAwesomeIcon
        className="cursor-pointer text-primary-700"
        icon={solid("circle-plus")}
        size="3x"
        onClick={() => router.push("/recipes/add-recipe")}
      />
    </Page>
  );
};

export default Landing;
