"use client";
import { TiUserDelete } from "react-icons/ti";

export default function DeleteUser() {
  function handleCancel() {}

  return (
    <article className="order-4 rounded-lg bg-red-YUMFINITY/40 shadow-lg lg:self-start dark:bg-red-YUMFINITY/50 dark:shadow-red-YUMFINITY/40">
      <div className="flex items-center justify-between px-6 pt-4 lg:pt-8">
        <h2 className="font-boston text-2xl">Delete User</h2>
      </div>
      <section className="m-3 flex h-[200px] items-center justify-center rounded-lg bg-red-700/25">
        <button
          onClick={handleCancel}
          className="flex flex-col items-center rounded-lg bg-red-700/40 px-4 py-2 text-xl font-bold transition-all hover:bg-red-YUMFINITY active:bg-red-900 "
        >
          <TiUserDelete className="size-12 translate-x-1.5" />
          Delete Account
        </button>
      </section>
    </article>
  );
}
