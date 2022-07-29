import React, { useEffect, useState } from "react";

import DiscoverController from "../components/discover/discover-controller";
import Header from "../components/header";
import { auth } from "../store/firebase";
import { getUser } from "../store/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (user) {
      getUser(user.uid).then((user) => {
        if (user.data() !== undefined) {
          setUserInfo(user.data());
        }
      });
    } else if (!loading) {
      router.push("/login");
    }
  }, [user, router, loading]);

  return (
    <div className="w-full h-full">
      <Header />
      <DiscoverController user={user} userInfo={userInfo} />
    </div>
  );
}
