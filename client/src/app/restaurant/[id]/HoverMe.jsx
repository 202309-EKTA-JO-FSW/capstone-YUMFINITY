export default function HoverMe() {
  return (
    <div>
      <div className="p-20">
        <div className="h-54 group relative mb-4 w-96 items-center justify-center rounded-md border bg-[#FD7014] px-8 py-10 text-white shadow-lg transition-all duration-200 ease-in-out">
          <h3 className="text-xs uppercase">HEY!</h3>
          <p className="mt-2 font-sans text-3xl font-bold">Hover Me!</p>

          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-[#FD7014] px-10 opacity-0 transition group-hover:opacity-100">
            <p className="mt-2 font-sans text-3xl font-bold">
              You got 15% off!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
