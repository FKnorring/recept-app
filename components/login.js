import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../store/firestore";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <FontAwesomeIcon
      onClick={() => signInWithGoogle()}
      icon={brands("google")}
      size={"3x"}
    />
  );
};

const Facebook = () => {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  return (
    <FontAwesomeIcon
      onClick={() => signInWithFacebook()}
      icon={brands("facebook")}
      size={"3x"}
    />
  );
};

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Lösenord"
      />
      <button onClick={() => signInWithEmailAndPassword(email, password)}>
        {" "}
        Logga in{" "}
      </button>
      <div>
        <h5>Logga in med</h5>
        <Google />
        <Facebook />
      </div>
    </div>
  );
};

export default Login;
