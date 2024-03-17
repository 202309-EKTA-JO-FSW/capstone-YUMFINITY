"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children, getCookie }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the user's information if they are logged in.
    const currentUserJSON = Cookies.get("user");
    let currentUser;
    if (currentUserJSON) currentUser = JSON.parse(currentUserJSON);
    console.log(currentUser);
    if (currentUser) return setUser(currentUser);
    setUser("");
  }, []);

  if (user === null) return null;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
