const PageNotFound = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className=" text-8xl font-bold text-black">404</h1>
        <p className="  text-4xl font-medium text-gray-800">Page Not Found</p>
        <a href="/" className=" mt-4 text-xl text-[#FD7014] hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
