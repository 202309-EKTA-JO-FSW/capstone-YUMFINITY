"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../utils/contextProvider";
import { main_url_BACKEND } from "../utils/URLs";

export default function GoogleUser({ setCookies }) {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    async function handleGoogleUser() {
      const res = await fetch(`${main_url_BACKEND}/google/me`, {
        credentials: "include",
      });
      const { user, accessToken, refreshToken } = await res.json();
      if (user) {
        const check = await setCookies(user, accessToken, refreshToken);
        if (check) setUser(user);
        router.push("/restaurants");
      }
    }

    handleGoogleUser();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center text-5xl">
      Authenticating........
    </div>
  );
}
