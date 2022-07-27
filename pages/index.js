import Discover from "../components/discover";
import Groups from "../components/groups/groups";
import Landing from "../components/landing";
import Login from "../components/login";
import React from "react";
import SignUp from "./signup";
import { auth } from "../store/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Login />
    </div>
  );
}
