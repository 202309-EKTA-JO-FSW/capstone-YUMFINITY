"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../utils/contextProvider";

export default function GoogleUser({ getCookie }) {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    async function handleGoogleUser() {
      const user = await getCookie();
      if (user) setUser(user);
      router.push("/restaurants");
    }

    handleGoogleUser();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center text-5xl">
      Authenticating........
    </div>
  );
}
