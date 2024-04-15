"use server";

import { cookies } from "next/headers";

export async function setCookie(name, value, options) {
  const cookiesStore = cookies();
  cookiesStore.set(name, value, options);
}
