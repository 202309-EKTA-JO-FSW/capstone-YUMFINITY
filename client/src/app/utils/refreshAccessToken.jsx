"use server";

import { cookies } from "next/headers";

export async function getAccessToken() {
  const res = await fetch("http://192.168.100.5:3001/v1/refreshToken", {
    method: "GET",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  const data = await res.json();
  if (data.successful) {
    cookies().set("accessToken", data.accessToken, { httpOnly: true });
    return data.accessToken;
  }
}
