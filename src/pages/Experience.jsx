import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import { experienceEvents } from "../data/experienceData";
import ArcDialTimeline from "../components/ArcDialTimeline";
import "./Experience.css";
import "./Background.css";

gsap.registerPlugin(ScrollTrigger);

const ExperienceHeader = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".exp-header-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(
          ".exp-header-subtitle",
          { y: 25, opacity: 0, duration: 0.6 },
          "-=0.4",
        )
        .from(".exp-header-hint", { opacity: 0, duration: 0.5 }, "-=0.2");
    },
    { scope: headerRef },
  );

  return (
    <section className="exp-header bg-header" ref={headerRef}>
      <div className="bg-header-bg">
        <div className="bg-header-gradient" />
      </div>
      <div className="bg-header-content">
        <h1 className="exp-header-title bg-header-title">Work Experience</h1>
        <p className="exp-header-subtitle bg-header-subtitle">
          Industry roles, research positions, and career milestones
        </p>
        <div className="exp-header-hint bg-header-hint">
          <ChevronDown size={22} />
          <span>Scroll to explore the timeline</span>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <div className="experience-page">
      <ExperienceHeader />
      <ArcDialTimeline events={experienceEvents} detailPath="/experience/event" />
    </div>
  );
};

export default Experience;
