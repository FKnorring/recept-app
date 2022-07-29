import { Button, DropImage, Header, Input } from "../components";
import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { addUser } from "../store/firestore";
import { auth } from "../store/firebase";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [imgurl, setImgurl] = useState("");
  const [createError, setCreateError] = useState(false);
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (!user) handleError();
        else {
          addUser(user.uid, { name: name, imgurl: imgurl });
          router.push("/");
        }
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
    <div className="h-screen max-w-[1440px] mx-auto p-10">
      <Header />
      <form
        onSubmit={handleSignUp}
        className="h-full w-full flex flex-col justify-center items-center gap-4"
      >
        <p>Ladda upp en bild</p>
        <DropImage imgUrl={imgurl} setImgUrl={setImgurl} />
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Namn"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Lösenord"
        />
        <Button type="submit">SKAPA KONTO</Button>
      </form>
    </div>
  );
};

export default SignUp;
