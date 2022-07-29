import React, { useEffect, useState } from "react";
import { addUserToGroup, getGroups } from "../../store/firestore";

import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useRouter } from "next/router";

const GroupIcon = () => {
  return (
    <FontAwesomeIcon
      className="text-accent"
      icon={solid("users")}
      size={"6x"}
    />
  );
};

const UserIcon = () => {
  return (
    <FontAwesomeIcon
      className="text-secondary"
      icon={solid("user")}
      size={"1x"}
    />
  );
};

const LockIcon = () => {
  return (
    <FontAwesomeIcon
      className="text-secondary"
      icon={solid("lock")}
      size={"1x"}
    />
  );
};

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "330px",
    height: "50px",
    background: "transparent",
    border: "solid 1px",
    borderColor: state.isFocused ? "black" : "#26A69A",
    borderRadius: "0 20px 20px 0",
    color: "black",
    boxShadow: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    width: "43px",
  }),
};

const GroupOption = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      <p>{data.label}</p>
      <div className="flex items-center">
        {data.private && <LockIcon />}
        <span className="mx-4 flex items-center gap-[3px]">
          <p>{data.members}</p>
          <UserIcon />
        </span>
      </div>
    </div>
  );
};

const NoGroups = ({ user }) => {
  const [groups, setGroups] = useState(null);
  const [option, setOption] = useState(null);
  const router = useRouter();

  const selectedIndex = option?.value;

  const handleJoin = () => {
    if (option === null) return alert("Välj en grupp");
    const group = groups[selectedIndex].id;
    addUserToGroup(user.uid, group).then(() => {
      router.push("/");
    });
  };

  useEffect(() => {
    getGroups().then((groups) => {
      setGroups(groups);
    });
  }, []);

  const groupOptions = groups?.map((groupRef, index) => {
    const group = groupRef.data();
    return {
      value: index,
      label: group.name,
      private: group.private,
      members: group.members ? group.members.length : 0,
    };
  });

  return (
    <div className="w-full h-full mt-24 flex flex-col justify-start items-center gap-5">
      <GroupIcon />
      <h3 className="text-xl font-light text-center">
        Gå med i en grupp för att börja använda{" "}
        <span className="font-serif">Recepta</span>
      </h3>
      <Select
        value={option}
        onChange={setOption}
        formatOptionLabel={(data) => <GroupOption data={data} />}
        options={groups ? groupOptions : []}
        placeholder="Välj en grupp..."
        styles={selectStyles}
      />
      <Button onClick={handleJoin} color="primary">
        GÅ MED
      </Button>
    </div>
  );
};

export default NoGroups;
