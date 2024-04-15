import React from "react";
import SignUpForm from "./SignUpForm";
import { cookies } from "next/headers";
import { main_url_BACKEND } from "../utils/URLs";

async function submitData(form) {
  "use server";

  const [username, password, firstName, lastName, email, phoneNumber] = [
    form.get("username"),
    form.get("password"),
    form.get("firstName"),
    form.get("lastName"),
    form.get("email"),
    form.get("phoneNumber"),
  ];

  const res = await fetch(`${main_url_BACKEND}/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNumber,
    }),
  });
  const result = await res.json();
  if (result.user) {
    const cookiesSetter = cookies();
    cookiesSetter.set("user", JSON.stringify(result.user), {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    cookiesSetter.set("accessToken", result.tokens.accessToken, {
      httpOnly: true,
    });
    cookiesSetter.set("refreshToken", result.tokens.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  }

  return result;
}

const SignUp = () => {
  return (
    <main className="text-[#333]">
      <div className="relative grid gap-4 bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY p-4 pb-14 sm:p-10 lg:grid-cols-2 lg:bg-none dark:to-black-YUMFINITY dark:text-white-YUMFINITY">
        <div>
          <div className="inset-0 -z-10 hidden w-full bg-gradient-to-b from-yellow-YUMFINITY to-white-YUMFINITY pl-12 pt-20 lg:absolute lg:block lg:h-[390px] lg:bg-gradient-to-r xl:h-[360px] dark:to-70%">
            <h3 className=" w-2/5 font-boston  text-3xl text-white">
              Let us get started!
            </h3>
            <p className=" mt-4 w-2/5 text-lg text-white">
              Become a registered user and unlock the full flavor experience.
              Fill out the details below to create your account and embark on a
              delicious journey with us. From mouthwatering meals to delightful
              deals, we have got it all. Let us make your food cravings a
              reality! Welcome to Yumfinity
            </p>
          </div>
        </div>
        <div className="dark:bg my-4 h-max w-full max-w-md rounded-xl bg-white px-4 py-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto sm:px-6 dark:bg-orange-950 dark:bg-opacity-35 dark:backdrop-blur-lg">
          <SignUpForm submitData={submitData} />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
