import { CircularProgress } from "@mui/material";
import Discover from "./discover";
import NoGroups from "./nogroups";
import React from "react";

const DiscoverController = ({ user, userInfo }) => {
  console.log(userInfo);
  if (userInfo === undefined)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  if (userInfo.groups === undefined || userInfo.groups.length === 0) {
    return <NoGroups user={user} />;
  }
  return <Discover user={user} userInfo={userInfo} />;
};

export default DiscoverController;
