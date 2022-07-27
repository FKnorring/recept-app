import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { addUser } from "../store/firestore";
import { auth } from "../store/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [createError, setCreateError] = useState(false);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (!user) handleError();
        else addUser({ name: name, email: user.user.email });
      })
      .catch((err) => alert(err));
  };

  const handleError = () => {
    //create 5 seconds timeout for error message
    setCreateError(true);
    setTimeout(() => {
      setCreateError(false);
    }, 5000);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Namn"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Lösenord"
      />

      <button onClick={handleSignUp}>Skapa konto</button>
      {loading && <p>Loading...</p>}
      {createError && <p>Något gick fel, försök igen</p>}
      {user && <p>Konto skapat!</p>}
    </div>
  );
};

export default SignUp;
