"use client";
import { useRouter } from "next/navigation";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Search = () => {
  const router = useRouter();
  function handleLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      console.log(latitude);
      router.push(`/restaurants?location=${latitude}+${longitude}`);
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    const location = e.target.location.value;
    if (!location) return router.push("/restaurants");
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-[550px] flex-col items-center justify-center px-4 md:max-w-[60%] md:-translate-y-10"
    >
      <div className="md:text-nowraptext-black-YUMFINITY text-balance pb-10 text-center text-5xl font-bold text-black-YUMFINITY [text-shadow:_0_0_12px_#F1F2EB,_0_0_5px_#ff4500] md:text-nowrap">
        Order food online in Jordan
      </div>
      <div className="flex h-16 w-full items-center justify-center rounded-lg border-2 border-[#ff4500] bg-white-YUMFINITY shadow-inner shadow-gray-400 md:max-w-[40rem]">
        <button type="button" onClick={handleLocation}>
          <FaLocationCrosshairs className="mx-4 size-8 flex-shrink-0 text-black-YUMFINITY transition-all hover:fill-yellow-YUMFINITY" />
        </button>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Search for area, street name, landmark..."
          className="h-4/5 w-full rounded-lg bg-white-YUMFINITY px-5 text-center text-xl font-light capitalize text-black-YUMFINITY outline-none"
        />
        <button>
          <FaSearchLocation className="mx-4 size-8 flex-shrink-0 text-black-YUMFINITY transition-all hover:fill-yellow-YUMFINITY" />
        </button>
      </div>
    </form>
  );
};

export default Search;
