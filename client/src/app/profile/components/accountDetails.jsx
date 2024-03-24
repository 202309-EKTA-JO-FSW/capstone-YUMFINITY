"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import profilePlaceholder from "./profile-placeholder.jpg";

const userDataFromResponse = {
  username: "belaloo",
  email: "belalabomoalsh@gmail.com",
  firstName: "Belal",
  lastName: "Ahmad",
  phoneNumber: "0780000000",
  addresses: [
    { addressName: "home", location: [32, 33] },
    { addressName: "home", location: [32, 33] },
  ],
};

export default function AccountDetails() {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(userDataFromResponse);
  const form = useRef(null);

  function handleSubmit() {
    const fields = Array.from(form.current.children);
    fields.forEach((e) => {
      if (e.lastChild.nodeName === "PICTURE") {
        console.log(e.lastChild.childNodes[1].files);
        formData[e.lastChild.childNodes[1].name] =
          e.lastChild.childNodes[1].files[0];
      }
      if (userDataFromResponse[e.lastChild.name] !== e.lastChild.value) {
        formData[e.lastChild.name] = e.lastChild.value;
      }
    });
    setFormData(formData);
    setEditing(!editing);
  }

  return (
    <article className="order-1 rounded-lg bg-orange-200 shadow-lg dark:bg-yellow-YUMFINITY/80 dark:shadow-red-YUMFINITY/40">
      <div className="flex items-center justify-between px-6 pt-4 lg:pt-8">
        <h2 className="font-boston text-2xl">Account Details</h2>
        {!editing && (
          <button
            onClick={() => setEditing(!editing)}
            className="rounded-lg bg-red-700/75 px-4 py-2 text-xl font-bold text-white shadow-lg transition-all hover:bg-red-YUMFINITY active:bg-red-900 "
          >
            Edit
          </button>
        )}
        {editing && (
          <button
            type="submit"
            form="changes"
            onClick={handleSubmit}
            className="rounded-lg bg-red-700/75 px-4 py-2 text-xl font-bold text-white shadow-lg transition-all hover:bg-red-YUMFINITY active:bg-red-900 "
          >
            Submit
          </button>
        )}
      </div>
      {!editing && (
        <section className="m-3 flex flex-col rounded-lg border bg-white shadow-lg *:flex *:flex-col *:items-start *:justify-start *:border-b *:px-4 *:py-4 *:md:flex-row *:md:justify-between lg:m-6 *:lg:items-center dark:bg-gray-950">
          <fieldset>
            <div className="text-lg font-bold">First Name</div>
            <div className="text-lg">{formData.firstName}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Last Name</div>
            <div className="text-lg">{formData.lastName}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Email</div>
            <div className="text-lg">{formData.email}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Username</div>
            <div className="text-lg">{formData.username}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Phone Number</div>
            <div className="text-lg">{formData.phoneNumber}</div>
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Addresses</div>
            <div className="flex flex-col gap-2">
              {formData.addresses.map((address, index) => (
                <div className="text-lg" key={index}>
                  {address.addressName}
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <picture className="flex flex-col gap-8 text-lg font-bold md:flex-row">
              <div className="mr-auto text-nowrap">Profile pic</div>
              <Image
                width={formData.profilePicture && 355}
                height={formData.profilePicture && 355}
                priority
                src={formData.profilePicture || profilePlaceholder}
                alt="Profile Picture"
                className="rounded-2xl md:max-w-[200px]"
              />
            </picture>
          </fieldset>
        </section>
      )}
      {editing && (
        <form
          ref={form}
          id="changes"
          className="m-3 flex h-[637px] flex-col justify-between rounded-lg border bg-white shadow-lg *:flex *:flex-col *:items-start *:justify-start *:border-b *:px-4 *:py-4 *:md:flex-row *:md:justify-between lg:m-6 *:lg:items-center dark:bg-gray-950"
        >
          <fieldset>
            <div className="text-lg font-bold">First Name</div>
            <input
              name="firstName"
              type="text"
              defaultValue={formData.firstName}
              className="rounded-sm bg-slate-100 px-2 text-lg ring-2 ring-orange-200 dark:text-black"
            />
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Last Name</div>
            <input
              name="lastName"
              type="text"
              defaultValue={formData.lastName}
              className="rounded-sm bg-slate-100 px-2 text-lg ring-2 ring-orange-200 dark:text-black"
            />
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Email</div>
            <input
              name="email"
              type="email"
              defaultValue={formData.email}
              className="rounded-sm bg-slate-100 px-2 text-lg ring-2 ring-orange-200 dark:text-black"
            />
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Username</div>
            <input
              name="username"
              type="text"
              defaultValue={formData.username}
              className="rounded-sm bg-slate-100 px-2 text-lg ring-2 ring-orange-200 dark:text-black"
            />
          </fieldset>
          <fieldset>
            <div className="text-lg font-bold">Phone Number</div>
            <input
              name="phoneNumber"
              type="text"
              defaultValue={formData.phoneNumber}
              className="rounded-sm bg-slate-100 px-2 text-lg ring-2 ring-orange-200 dark:text-black"
            />
          </fieldset>
          <fieldset>
            <picture className="flex flex-col items-center justify-center gap-3 text-nowrap text-lg font-bold md:flex-row md:gap-8">
              Profile pic
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                className="absolute translate-x-[10.25rem] translate-y-5 md:translate-x-[13.75rem] md:translate-y-0"
              />
              <label
                htmlFor="profilePicture"
                className="z-10 cursor-pointer text-nowrap rounded-2xl bg-yellow-YUMFINITY px-4 py-2 transition-all hover:bg-orange-700 active:bg-orange-900"
              >
                Choose Profile Picture
              </label>
            </picture>
          </fieldset>
        </form>
      )}
    </article>
  );
}
