import React, { useEffect, useState } from "react";
import { auth, getUser, signout } from "../store/firestore";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useRouter } from "next/router";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    signInWithEmailAndPassword(email, password);
  };

  //effect with user as dependency
  useEffect(() => {
    if (user) {
      //get user from getUser import to const
      getUser(user.uid).then((user) => {
        if (user.data() === undefined) router.push("/create-profile");
      });
    }
  }, [user]);

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
      <button onClick={handleSignIn}> Logga in </button>
      <div>
        <h5>Logga in med</h5>
        <Google />
        <Facebook />
        {user && user.email}
      </div>
      <button onClick={signout}>Logga ut</button>
      <a href="/signup">Registrera dig</a>
    </div>
  );
};

export default Login;
