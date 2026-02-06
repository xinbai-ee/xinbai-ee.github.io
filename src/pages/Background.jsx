import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  Star,
} from "lucide-react";
import { timelineEvents } from "../data/timelineData";
import { projects } from "../data/projectsData";
import ArcDialTimeline from "../components/ArcDialTimeline";
import "./Background.css";

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  return (
    <div className="background-page">
      <BackgroundHeader />
      <ArcDialTimeline events={timelineEvents} detailPath="/background/event" />
      <ProjectsSection />
    </div>
  );
};

/* ─── Header ────────────────────────────────────── */
const BackgroundHeader = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".bg-header-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(
          ".bg-header-subtitle",
          { y: 25, opacity: 0, duration: 0.6 },
          "-=0.4",
        )
        .from(".bg-header-hint", { opacity: 0, duration: 0.5 }, "-=0.2");
    },
    { scope: headerRef },
  );

  return (
    <section className="bg-header" ref={headerRef}>
      <div className="bg-header-bg">
        <div className="bg-header-gradient" />
      </div>
      <div className="bg-header-content">
        <h1 className="bg-header-title">Academic Background</h1>
        <p className="bg-header-subtitle">
          A journey through education, research, and professional milestones
        </p>
        <div className="bg-header-hint">
          <ChevronDown size={22} />
          <span>Scroll to explore the timeline</span>
        </div>
      </div>
    </section>
  );
};

/* ─── Projects Section ──────────────────────────── */
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const setProjectRef = useCallback((el, i) => {
    projectRefs.current[i] = el;
  }, []);

  useGSAP(
    () => {
      projectRefs.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Research Projects</h2>
        <p className="section-subtitle">
          Open-source tools and frameworks advancing machine learning, NLP, and
          AI interpretability research
        </p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card"
              ref={(el) => setProjectRef(el, i)}
            >
              <div
                className="project-icon"
                style={{ background: project.gradient }}
              >
                <span>{project.icon}</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  {project.stars && (
                    <span className="project-stars">
                      <Star size={13} />
                      {project.stars}
                    </span>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
