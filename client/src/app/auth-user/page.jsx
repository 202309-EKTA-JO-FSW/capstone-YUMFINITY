import { cookies } from "next/headers";
import GoogleUser from "./GoogleUser";

async function setCookies(user, accessToken, refreshToken) {
  "use server";

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
  return true;
}

export default function AUTH() {
  return <GoogleUser setCookies={setCookies} />;
}
