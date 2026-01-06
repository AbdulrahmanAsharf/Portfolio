import Header from "@/components/Header";
import Navber from "@/components/Navber";
import About from "@/components/About";
import ExperienceSection from "@/components/Experience"
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className=" relative z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navber />
        <Header />
      </div>
      <About />
      <ExperienceSection />
      <Tech />
      <Works />/
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>

    </div>
  );
}
