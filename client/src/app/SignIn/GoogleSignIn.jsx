"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn({ googleSignIn, data }) {
  const router = useRouter();

  function handleGoogle() {
    window.open("http://localhost:3001/v1/google", "_self");
    googleSignIn();
    // router.push("/restaurants");
  }

  return (
    <button
      type="button"
      onClick={handleGoogle}
      className="flex items-center rounded bg-orange-100 px-4 py-2.5 text-sm font-semibold text-[#FD7014] transition-all hover:bg-yellow-YUMFINITY hover:text-white-YUMFINITY active:bg-orange-900"
    >
      <FcGoogle size={20} className="mr-3" />
      Continue with Google
    </button>
  );
}
