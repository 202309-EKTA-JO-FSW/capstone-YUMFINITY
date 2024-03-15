export default function Pagination() {
  return (
    <div>
      <div className="mt-8">
        <div className="flex  h-10 items-center justify-center">
          <a
            href="#"
            className="mx-1 cursor-not-allowed rounded-md bg-gray-200 px-3 py-2 font-medium text-gray-500"
          >
            Previous
          </a>

          <a
            href="#"
            className="mx-1 rounded-md bg-gray-200 px-3 py-2 font-medium text-gray-700 hover:bg-[#FD7014] hover:text-gray-200"
          >
            1
          </a>

          <a
            href="#"
            className="mx-1 rounded-md bg-gray-200 px-3 py-2 font-medium text-gray-700 hover:bg-[#FD7014] hover:text-gray-200"
          >
            2
          </a>

          <a
            href="#"
            className="mx-1 rounded-md bg-gray-200 px-3 py-2 font-medium text-gray-700 hover:bg-[#FD7014] hover:text-gray-200"
          >
            3
          </a>

          <a
            href="#"
            className="mx-1 rounded-md bg-gray-200 px-3 py-2 font-medium text-gray-700 hover:bg-[#FD7014] hover:text-gray-200"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
