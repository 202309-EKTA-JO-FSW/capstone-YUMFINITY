export default function HeroSection() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0">
          <img
            src="hero.jpg"
            alt="Background Image"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight">
            Welcome to YUMFINITY Our Awesome Website
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Discover amazing features and services that await you.
          </p>
          <a
            href="#"
            className="transform rounded-full bg-[#FD7014] px-6 py-2 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:scale-105 hover:bg-[#FD7014] hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
