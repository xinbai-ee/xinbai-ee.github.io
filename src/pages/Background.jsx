import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ExternalLink,
  Github,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import { timelineEvents } from "../data/timelineData";
import { projects } from "../data/projectsData";
import "./Background.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/*
 * Timeline arc shape switch — change to 'line' for a vertical straight line,
 * or keep 'curve' for the original curved arc.
 */
const ARC_SHAPE = "line"; // 'curve' | 'line'

/* SVG path data for each shape variant */
const ARC_PATH =
  ARC_SHAPE === "curve"
    ? "M 25,30 C 188,180 188,520 25,670"
    : "M 25,30 L 25,670";

const Background = () => {
  return (
    <div className="background-page">
      <BackgroundHeader />
      <ArcDialTimeline />
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

/* ─── Arc Dial Timeline ─────────────────────────── */
const ArcDialTimeline = () => {
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);
  const arcTrackRef = useRef(null);
  const arcProgressRef = useRef(null);
  const indicatorRef = useRef(null);
  const markerRefs = useRef([]);
  const arcYearLabelRefs = useRef([]);
  const bgRefs = useRef([]);
  const yearLabelRef = useRef(null);
  const yearSubRef = useRef(null);
  const progressFillRef = useRef(null);
  const stRef = useRef(null);

  const setCardRef = useCallback((el, i) => {
    cardRefs.current[i] = el;
  }, []);

  const setMarkerRef = useCallback((el, i) => {
    markerRefs.current[i] = el;
  }, []);

  const setArcYearRef = useCallback((el, i) => {
    arcYearLabelRefs.current[i] = el;
  }, []);

  const setBgRef = useCallback((el, i) => {
    bgRefs.current[i] = el;
  }, []);

  const handleYearClick = useCallback((idx) => {
    const st = stRef.current;
    if (!st) return;
    const N = timelineEvents.length;
    if (N <= 1) return;
    const targetScroll = st.start + (idx / (N - 1)) * (st.end - st.start);
    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, []);

  useGSAP(
    () => {
      const N = timelineEvents.length;
      if (N === 0) return;

      /* Arc geometry parameters */
      const ARC_RADIUS = ARC_SHAPE === "curve" ? 1000 : 0;
      const ANGLE_STEP = ARC_SHAPE === "curve" ? 0.24 : 0;
      const CARD_SPACING = 250;
      const vh = window.innerHeight;

      /* Initialize SVG path metrics */
      const arcTrack = arcTrackRef.current;
      const arcProgress = arcProgressRef.current;
      let pathLength = 0;

      if (arcTrack && arcProgress) {
        pathLength = arcTrack.getTotalLength();
        arcProgress.style.strokeDasharray = pathLength;
        arcProgress.style.strokeDashoffset = pathLength;
      }

      /* Position SVG markers and year labels along the arc path */
      if (arcTrack) {
        markerRefs.current.forEach((marker, i) => {
          if (!marker) return;
          const t = N > 1 ? i / (N - 1) : 0;
          const point = arcTrack.getPointAtLength(t * pathLength);
          gsap.set(marker, { attr: { cx: point.x, cy: point.y } });

          const yearLabel = arcYearLabelRefs.current[i];
          if (yearLabel) {
            gsap.set(yearLabel, { attr: { x: point.x + 14, y: point.y + 4 } });
          }
        });
      }

      /* Set initial indicator position */
      if (arcTrack && indicatorRef.current) {
        const startPoint = arcTrack.getPointAtLength(0);
        gsap.set(indicatorRef.current, {
          attr: { cx: startPoint.x, cy: startPoint.y },
        });
      }

      /* Initialize cards at starting positions */
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const angle = i * ANGLE_STEP;
        const curveX = ARC_RADIUS * (Math.cos(angle) - 1);
        const baseY = i * CARD_SPACING;
        const opacity = gsap.utils.clamp(0, 1, 1.2 - i * 0.6);
        const scale = gsap.utils.clamp(0.65, 1.0, 1.0 - i * 0.2);
        gsap.set(card, { x: curveX, y: baseY, opacity, scale });
        if (i === 0) card.classList.add("active");
      });

      /* Set initial background opacity */
      bgRefs.current.forEach((bg, i) => {
        if (!bg) return;
        gsap.set(bg, { opacity: i === 0 ? 1 : 0 });
      });

      /* ScrollTrigger — drives the arc dial animation */
      stRef.current = ScrollTrigger.create({
        trigger: viewportRef.current,
        start: "top top",
        end: () => `+=${(N + 1) * vh}px`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        snap: {
          snapTo: 1 / (N - 1),
          duration: { min: 0.1, max: 0.3 },
          delay: 0.01,
          ease: "power1.inOut",
          inertia: false,
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const centerIdx = progress * (N - 1);
          const activeIdx = Math.round(centerIdx);

          /* ── Position event cards along the arc ── */
          cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const offset = i - centerIdx;
            const angle = offset * ANGLE_STEP;
            const curveX = ARC_RADIUS * (Math.cos(angle) - 1);
            const baseY = offset * CARD_SPACING;

            const absDist = Math.abs(offset);
            const opacity = gsap.utils.clamp(0, 1, 1.15 - absDist * 0.6);
            const scale = gsap.utils.clamp(0.65, 1.0, 1.0 - absDist * 0.2);
            const blur = absDist > 0.6 ? (absDist - 0.6) * 5 : 0;

            gsap.set(card, {
              x: curveX,
              y: baseY,
              opacity,
              scale,
              filter: `blur(${blur}px)`,
              zIndex: 100 - Math.round(absDist * 10),
            });

            if (absDist < 0.5) {
              card.classList.add("active");
            } else {
              card.classList.remove("active");
            }
          });

          /* ── Update SVG arc progress ── */
          if (arcProgress && pathLength) {
            arcProgress.style.strokeDashoffset = pathLength * (1 - progress);
          }

          /* ── Move indicator dot along the arc ── */
          if (arcTrack && indicatorRef.current && pathLength) {
            const point = arcTrack.getPointAtLength(progress * pathLength);
            gsap.set(indicatorRef.current, {
              attr: { cx: point.x, cy: point.y },
            });
          }

          /* ── Update markers and year labels ── */
          markerRefs.current.forEach((marker, i) => {
            if (!marker) return;
            const isActive = i === activeIdx;
            const isPast = i < activeIdx;
            gsap.set(marker, {
              attr: { r: isActive ? 7 : 4 },
              opacity: isActive ? 1 : isPast ? 0.7 : 0.3,
              fill: isActive ? "#c8a84e" : isPast ? "#c8a84e" : "#4a5568",
            });

            const yearLabel = arcYearLabelRefs.current[i];
            if (yearLabel) {
              gsap.set(yearLabel, {
                opacity: isActive ? 1 : isPast ? 0.5 : 0.2,
                fill: isActive ? "#c8a84e" : "#8a9ab5",
              });
            }
          });

          /* ── Update bottom progress bar fill ── */
          if (progressFillRef.current) {
            gsap.set(progressFillRef.current, { scaleX: progress });
          }

          /* ── Parallax backgrounds ── */
          bgRefs.current.forEach((bg, i) => {
            if (!bg) return;
            const dist = Math.abs(i - centerIdx);
            const bgOpacity = gsap.utils.clamp(0, 1, 1 - dist * 0.95);
            const parallaxY = (i - centerIdx) * 180;
            gsap.set(bg, { opacity: bgOpacity, y: parallaxY });
          });

          /* ── Update year display ── */
          if (yearLabelRef.current && timelineEvents[activeIdx]) {
            yearLabelRef.current.textContent = timelineEvents[activeIdx].year;
          }
          if (yearSubRef.current && timelineEvents[activeIdx]) {
            yearSubRef.current.textContent = timelineEvents[activeIdx].category;
          }
        },
      });
    },
    { scope: viewportRef },
  );

  return (
    <section className="timeline-section">
      <div className="timeline-viewport" ref={viewportRef}>
        {/* ── Parallax Background Images ── */}
        <div className="timeline-backgrounds">
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className={`timeline-bg ${event.image ? "timeline-bg-image" : ""}`}
              ref={(el) => setBgRef(el, i)}
              style={
                event.image
                  ? { backgroundImage: `url(${event.image})` }
                  : { background: event.bgGradient }
              }
            />
          ))}
          <div className="timeline-overlay" />
        </div>

        {/* ── Left: Arc Dial SVG ── */}
        <div className="arc-dial">
          <svg viewBox="0 0 140 700" preserveAspectRatio="xMidYMid meet">
            {/* Scale markings — major ticks aligned with event positions */}
            {(() => {
              const N = timelineEvents.length;
              const MINOR_PER_GAP = 4;
              const marks = [];

              for (let i = 0; i < N; i++) {
                const y = 30 + (i / (N - 1)) * 640;
                marks.push(
                  <line
                    key={`major-${i}`}
                    x1={0}
                    y1={y}
                    x2={18}
                    y2={y}
                    className="arc-scale-mark major"
                  />,
                );

                if (i < N - 1) {
                  for (let m = 1; m <= MINOR_PER_GAP; m++) {
                    const my = y + (m / (MINOR_PER_GAP + 1)) * (640 / (N - 1));
                    marks.push(
                      <line
                        key={`minor-${i}-${m}`}
                        x1={5}
                        y1={my}
                        x2={12}
                        y2={my}
                        className="arc-scale-mark minor"
                      />,
                    );
                  }
                }
              }
              return marks;
            })()}

            {/* Arc track (background) */}
            <path
              ref={arcTrackRef}
              className="arc-track"
              d={ARC_PATH}
              fill="none"
            />

            {/* Arc progress (foreground fill) */}
            <path
              ref={arcProgressRef}
              className="arc-progress"
              d={ARC_PATH}
              fill="none"
            />

            {/* Event markers on the arc */}
            {timelineEvents.map((_, i) => (
              <circle
                key={`marker-${i}`}
                ref={(el) => setMarkerRef(el, i)}
                className="arc-marker"
                cx={25}
                cy={30}
                r={4}
              />
            ))}

            {/* Year labels beside markers (clickable) */}
            {timelineEvents.map((event, i) => (
              <text
                key={`year-${i}`}
                ref={(el) => setArcYearRef(el, i)}
                className="arc-year-label arc-year-clickable"
                x={39}
                y={34}
                textAnchor="start"
                onClick={() => handleYearClick(i)}
              >
                {event.year}
              </text>
            ))}

            {/* Glowing active indicator */}
            <circle
              ref={indicatorRef}
              className="arc-indicator"
              cx={25}
              cy={30}
              r={11}
            />
          </svg>

          {/* Year readout */}
          <div className="arc-year-display">
            <span ref={yearLabelRef} className="arc-year-number">
              {timelineEvents[0]?.year}
            </span>
            <span ref={yearSubRef} className="arc-year-category">
              {timelineEvents[0]?.category}
            </span>
          </div>
        </div>

        {/* ── Center: Event Cards ── */}
        <div className="timeline-cards-container">
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className="timeline-card"
              ref={(el) => setCardRef(el, i)}
            >
              <div className="card-header">
                <span className="card-year-badge">{event.year}</span>
                {event.category && (
                  <span className="card-category-badge">{event.category}</span>
                )}
              </div>
              <h3 className="card-title">{event.title}</h3>
              {event.institution && (
                <div className="card-institution">
                  <MapPin size={14} />
                  <span>{event.institution}</span>
                </div>
              )}
              <p className="card-description">{event.description}</p>
              {event.tags && (
                <div className="card-tags">
                  {event.tags.map((tag, j) => (
                    <span key={j} className="card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link
                to={`/background/event/${event.year}`}
                className="card-see-more"
              >
                See more
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* ── Progress bar at bottom ── */}
        <div className="timeline-progress-bar">
          <span>{timelineEvents[0]?.year}</span>
          <div className="progress-track">
            <div className="progress-fill" ref={progressFillRef} />
          </div>
          <span>{timelineEvents[timelineEvents.length - 1]?.year}</span>
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
