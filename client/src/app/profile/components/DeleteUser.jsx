"use client";
import { useState } from "react";
import { TiUserDelete } from "react-icons/ti";
import DeleteDialogBox from "./DeleteDialogBox";

export default function DeleteUser({ deleteAccount, fetchCUrrentOrder }) {
  const [deleteBox, setDeleteOpen] = useState(false);

  function handleDeleteBox() {
    setDeleteOpen(true);
  }

  return (
    <article className="order-4 rounded-lg bg-red-YUMFINITY/40 shadow-lg lg:self-start dark:bg-red-YUMFINITY/50 dark:shadow-red-YUMFINITY/40">
      <div className="flex items-center justify-between px-6 pt-4 lg:pt-8">
        <h2 className="mb-6 font-boston text-2xl">Delete Account</h2>
      </div>
      <section className="m-3 flex h-[200px] items-center justify-center rounded-lg bg-red-700/25 text-white">
        <button
          onClick={handleDeleteBox}
          className="flex flex-col items-center rounded-lg bg-red-700/40 px-4 py-2 text-xl font-bold transition-all hover:bg-red-YUMFINITY active:bg-red-900 "
        >
          <TiUserDelete className="size-12 translate-x-1.5" />
          Delete Account
        </button>
        {deleteBox && (
          <DeleteDialogBox
            deleteAccount={deleteAccount}
            setDeleteOpen={setDeleteOpen}
            fetchCUrrentOrder={fetchCUrrentOrder}
          />
        )}
      </section>
    </article>
  );
}
