export default function AddRestaurant({ setCreateOpen }) {
  return (
    <div className="z-10 flex w-screen justify-center">
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Restaurant
            </h3>
          </div>
          <form className="p-4 md:p-5">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter restaurant name"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Phone no.
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter phone no."
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <select className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400">
                  <option selected="">Select category</option>
                  <option value="TV">Indian</option>
                  <option value="PC">Italian</option>
                  <option value="GA">Eastern</option>
                  <option value="PH">Healthy</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Photo
                </label>
                <div className="flex w-full items-center justify-center">
                  <label className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Location
                </label>
                <textarea
                  id="location"
                  rows="4"
                  className="block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-500 dark:bg-gray-600 dark:placeholder-gray-400  "
                  placeholder="Enter location here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              onClick={() => setCreateOpen(false)}
              className="inline-flex items-center rounded-lg bg-[#FD7014]  px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 "
            >
              Add new restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
