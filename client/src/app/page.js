import LandingPageNavbar from "./components/LandingPage/LandingPageNavbar";
import Section from "./components/LandingPage/Section";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center overflow-x-clip">
      <LandingPageNavbar />
      <Section />
    </main>
  );
}
