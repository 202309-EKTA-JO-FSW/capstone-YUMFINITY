"use server";

import { cookies } from "next/headers";

export async function deleteCookies() {
  const cookiesStore = cookies();
  cookiesStore.delete("user");
  cookiesStore.delete("accessToken");
  cookiesStore.delete("refreshToken");
}
