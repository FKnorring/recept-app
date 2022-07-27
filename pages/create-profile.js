import React, { useState } from "react";

import DropImage from "../components/dropimage";
import { auth } from "../store/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const CreateProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [imgUrl, setImgUrl] = useState(null);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>CreateProfile</h1>
      {user && <p>User: {user.email}</p>}
      <DropImage imgUrl={imgUrl} setImgUrl={setImgUrl} />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name}
    </div>
  );
};

export default CreateProfile;
