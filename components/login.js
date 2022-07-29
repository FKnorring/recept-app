import { Button, TextField, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { auth } from "../store/firebase";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { getUser } from "../store/firestore";
import { signout } from "../store/auth";
import { useRouter } from "next/router";

const WhiteTextField = styled(TextField)({
  background: "white",
})

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <FontAwesomeIcon
      className="pointer"
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
  }, [user, router]);

  return (
    <div>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Lösenord"
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        onClick={handleSignIn}
      >
        {" "}
        Logga in{" "}
      </Button>
      <div>
        <Google />
      </div>
      <button onClick={signout}>Logga ut</button>
      <Link href="/signup">Registrera dig</Link>
    </div>
  );
};

export default Login;
