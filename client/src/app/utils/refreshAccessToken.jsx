"use server";

import { cookies } from "next/headers";
import { main_url_BACKEND } from "./URLs";

export async function refreshAccessToken() {
  const res = await fetch(`${main_url_BACKEND}/refreshToken`, {
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
