import Group from "./group";
import React from "react";

const GroupList = ({ groups }) => {
  return (
    <div>
      {groups.map((group, i) => {
        return <Group key={i} group={group} />;
      })}
    </div>
  );
};
