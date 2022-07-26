import AddRecipe from "../components/add-recipe";
import Discover from "../components/discover";
import Login from "../components/login";
import React from "react";
import { auth } from "../store/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Login />
      {user && <p>{user.uid}</p>}
      <AddRecipe />
      <Discover />
    </div>
  );
}
