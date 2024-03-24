export default function SearchRestaurants({ handleSearch, handleReset }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex- w-5/6 rounded-xl bg-white p-6 shadow-md dark:bg-gray-800 dark:shadow-none">
        <form onSubmit={handleSearch} onReset={handleReset}>
          <div className="relative mb-6 flex w-full items-center justify-between rounded-md">
            <input
              type="text"
              name="name"
              className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 px-10 py-4 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50 dark:text-black-YUMFINITY"
              placeholder="Search by name, category, status, etc"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col">
              <label
                htmlFor="manufacturer"
                className="text-sm font-medium text-stone-600 dark:text-white-YUMFINITY"
              >
                Category
              </label>

              <select
                id="manufacturer"
                name="category"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50 dark:text-black-YUMFINITY"
              >
                <option value="">select</option>
                <option value="Indian">Indian</option>
                <option value="Mid Eastern">Mid Eastern</option>
                <option value="Italian">Italian</option>
                <option value="Asian">Asian</option>
                <option value="healthy">healthy</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="status"
                className="text-sm font-medium text-stone-600 dark:text-white-YUMFINITY"
              >
                Status
              </label>

              <select
                id="status"
                className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-[#FD7014] focus:ring focus:ring-[#FD7014] focus:ring-opacity-50 dark:text-black-YUMFINITY"
              >
                <option>select</option>
                <option>open</option>
                <option>closed</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button
              name="reset"
              type="reset"
              className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-[#FD7014] outline-none hover:bg-gray-300 focus:ring"
            >
              Reset
            </button>
            <button
              name="search"
              className="rounded-lg bg-[#FD7014] px-8 py-2 font-medium text-white outline-none hover:bg-[#eb5d00] focus:ring"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
