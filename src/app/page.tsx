import RecentProjects from "@/components/RecentProjects";
import Hero from "../components/Hero";
import About from "../components/About";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]}
        />
        <Hero/>
        <About/>
        <RecentProjects/>
        <Contact/>
      </div>
    </main>
  );
}
