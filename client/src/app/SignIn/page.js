import React from "react";
import SignInForm from "./SignInForm";
import { cookies } from "next/headers";

async function googleSignIn() {
  "use server";
  // window.open("http://localhost:3001/v1/google");
  // console.log(data);
}

async function submitData(form) {
  "use server";

  const [username, password] = [form.get("username"), form.get("password")];

  const res = await fetch("http://192.168.100.5:3001/v1/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const result = await res.json();
  if (result.user) cookies().set("user", JSON.stringify(result.user));
  return result;
}

const SignIn = () => {
  return (
    <div className="text-[#333]">
      <div className="relative grid gap-4 bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY p-4 pb-14 sm:p-10 lg:grid-cols-2 lg:bg-none dark:to-black-YUMFINITY dark:text-white-YUMFINITY">
        <div>
          <div className="inset-0 -z-10 hidden h-[320px] w-full bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY pl-12 pt-20 lg:absolute lg:block lg:bg-gradient-to-r dark:to-70%">
            <h3 className="font-boston text-4xl text-white">Welcome back!</h3>
            <p className=" mt-4 w-2/5 text-lg text-white">
              Craving something delicious? Sign in to your account and let us
              get those tasty treats headed your way!
            </p>
          </div>
        </div>
        <div className="dark:bg my-4 h-max w-full max-w-md rounded-xl bg-white px-4 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto sm:px-6 dark:bg-orange-950 dark:bg-opacity-35 dark:backdrop-blur-lg">
          <SignInForm submitData={submitData} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
