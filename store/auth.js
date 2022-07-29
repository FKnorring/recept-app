import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export const signout = () => signOut(auth);
