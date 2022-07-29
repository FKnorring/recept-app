import { Button, Header, Input } from "../components";
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
import { useRouter } from "next/router";

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <FontAwesomeIcon
      className="text-primary cursor-pointer"
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
      className="text-primary cursor-pointer"
      onClick={() => signInWithFacebook()}
      icon={brands("facebook")}
      size={"3x"}
    />
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, passw);
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="h-full w-full, flex flex-col justify-center items-center gap-4"
    >
      <Input value={email} onChange={setEmail} type={"email"} label="Email" />
      <Input
        value={passw}
        onChange={setPassw}
        type={"password"}
        label="Lösenord"
      />
      <Button type={"submit"}>LOGGA IN</Button>
      <Link href="/signup">
        <p className="tracking-wider text-lg text-secondary underline cursor-pointer">
          REGISTRERA DIG
        </p>
      </Link>
      <p className="font-light text-xl">Logga in med</p>
      <div className="flex justify-between gap-6">
        <Google />
        <Facebook />
      </div>
    </form>
  );
};

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const errorHandler = (error) => {
    switch (error.code) {
      case "auth/user-not-found":
        handleUserNotFound();
        break;
      case "auth/wrong-password":
        handleWrongPassword();
        break;
      case "auth/invalid-email":
        handleInvalidEmail();
        break;
      case "auth/internal-error":
        handleInternalError();
        break;
      default:
        handleDefaultError();
        break;
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="h-screen max-w-[1440px] mx-auto p-10">
      <Header />
      <SignIn />
    </div>
  );
};

export default Login;
