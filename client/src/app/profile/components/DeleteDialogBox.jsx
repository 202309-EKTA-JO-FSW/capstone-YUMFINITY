import { UserContext } from "@/app/utils/contextProvider";
import { useContext } from "react";

export default function DeleteDialogBox({ setDeleteOpen, deleteAccount }) {
  const { setUser } = useContext(UserContext);

  async function handleDelete() {
    const res = await deleteAccount();
    if (res.message.includes("successfully")) {
      setUser("");
      window.location.assign("/");
    }
  }

  return (
    <div>
      <div className="fixed inset-0 z-[1000] flex h-full w-full flex-wrap items-center justify-center overflow-auto p-4 font-[sans-serif] before:fixed before:inset-0 before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
        <div className="relative w-full max-w-md rounded-md bg-white p-6 shadow-lg">
          <div className="my-8 text-center">
            <h4 className="mt-6 text-xl font-semibold text-gray-500">
              Are you sure you want to delete it?
            </h4>
            <p className="mt-4 text-sm text-gray-500">
              You will lose all of your data by deleting this. The action cannot
              be undone.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              onClick={handleDelete}
              className="rounded-md border-none bg-red-500 px-6 py-2.5 text-sm font-semibold text-white outline-none hover:bg-red-600 active:bg-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => setDeleteOpen(false)}
              type="button"
              className="rounded-md border-none bg-gray-200 px-6 py-2.5 text-sm font-semibold text-black outline-none hover:bg-gray-300 active:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
