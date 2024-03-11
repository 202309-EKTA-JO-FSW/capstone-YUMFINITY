import Search from "./Search";
import Image from "next/image";
import background from "./background.webp";

export default function Section() {
  return (
    <section
      className={`relative flex h-[70vh] w-full flex-col items-center justify-center bg-[url("./components/LandingPage/background-mobile.jpeg")] bg-center text-sm [box-shadow:_0px_1px_21px_4px_#00000062] [background-size:_950px] md:min-h-[750px] md:bg-none dark:[box-shadow:_0px_1px_21px_4px_#ffffff62]`}
    >
      <Search />
      <Image
        src={background}
        alt="background"
        priority
        className="absolute top-0 -z-10 hidden size-full object-cover md:block dark:brightness-75"
      />
    </section>
  );
}
