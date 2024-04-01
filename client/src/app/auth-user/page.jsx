import { cookies } from "next/headers";
import GoogleUser from "./GoogleUser";
import { main_url_BACKEND } from "../utils/URLs";

async function getCookie() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/google/me`, {
    credentials: "include",
  });
  const { user, accessToken, refreshToken } = await res.json();
  if (user) setUser(user);
  cookies().set("user", JSON.stringify(user), {
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
  cookies().set("accessToken", accessToken, { httpOnly: true, secure: true });
  cookies().set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
  return user;
}

export default function AUTH() {
  return <GoogleUser getCookie={getCookie} />;
}
