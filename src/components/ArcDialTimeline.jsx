import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SafeHtml from "./SafeHtml";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ARC_SHAPE = "line";
const ARC_PATH =
  ARC_SHAPE === "curve"
    ? "M 25,30 C 188,180 188,520 25,670"
    : "M 25,30 L 25,670";

const ArcDialTimeline = ({ events, detailPath }) => {
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

  const handleYearClick = useCallback(
    (idx) => {
      const st = stRef.current;
      if (!st || events.length <= 1) return;
      const N = events.length;
      const targetScroll = st.start + (idx / (N - 1)) * (st.end - st.start);
      gsap.to(window, {
        scrollTo: { y: targetScroll, autoKill: false },
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
    [events.length],
  );

  useGSAP(
    () => {
      const N = events.length;
      if (N === 0) return;

      const ARC_RADIUS = ARC_SHAPE === "curve" ? 1000 : 0;
      const ANGLE_STEP = ARC_SHAPE === "curve" ? 0.24 : 0;
      const CARD_SPACING = 250;
      const vh = window.innerHeight;

      const arcTrack = arcTrackRef.current;
      const arcProgress = arcProgressRef.current;
      let pathLength = 0;

      if (arcTrack && arcProgress) {
        pathLength = arcTrack.getTotalLength();
        arcProgress.style.strokeDasharray = pathLength;
        arcProgress.style.strokeDashoffset = pathLength;
      }

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

      if (arcTrack && indicatorRef.current) {
        const startPoint = arcTrack.getPointAtLength(0);
        gsap.set(indicatorRef.current, {
          attr: { cx: startPoint.x, cy: startPoint.y },
        });
      }

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

      bgRefs.current.forEach((bg, i) => {
        if (!bg) return;
        gsap.set(bg, { opacity: i === 0 ? 1 : 0 });
      });

      stRef.current = ScrollTrigger.create({
        trigger: viewportRef.current,
        start: "top top",
        end: () => `+=${(N + 1) * vh}px`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        snap:
          N > 1
            ? {
                snapTo: 1 / (N - 1),
                duration: { min: 0.1, max: 0.3 },
                delay: 0.01,
                ease: "power1.inOut",
                inertia: false,
              }
            : undefined,
        onUpdate: (self) => {
          const progress = self.progress;
          const centerIdx = progress * (N - 1);
          const activeIdx = Math.round(centerIdx);

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

          if (arcProgress && pathLength) {
            arcProgress.style.strokeDashoffset = pathLength * (1 - progress);
          }

          if (arcTrack && indicatorRef.current && pathLength) {
            const point = arcTrack.getPointAtLength(progress * pathLength);
            gsap.set(indicatorRef.current, {
              attr: { cx: point.x, cy: point.y },
            });
          }

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

          if (progressFillRef.current) {
            gsap.set(progressFillRef.current, { scaleX: progress });
          }

          bgRefs.current.forEach((bg, i) => {
            if (!bg) return;
            const dist = Math.abs(i - centerIdx);
            const bgOpacity = gsap.utils.clamp(0, 1, 1 - dist * 0.95);
            const parallaxY = (i - centerIdx) * 180;
            gsap.set(bg, { opacity: bgOpacity, y: parallaxY });
          });

          if (yearLabelRef.current && events[activeIdx]) {
            yearLabelRef.current.textContent = events[activeIdx].year;
          }
          if (yearSubRef.current && events[activeIdx]) {
            yearSubRef.current.textContent = events[activeIdx].category;
          }
        },
      });
    },
    { scope: viewportRef, dependencies: [events] },
  );

  if (events.length === 0) return null;

  return (
    <section className="timeline-section">
      <div className="timeline-viewport" ref={viewportRef}>
        <div className="timeline-backgrounds">
          {events.map((event, i) => (
            <div
              key={i}
              className={`timeline-bg ${event.bgImage ? "timeline-bg-image" : ""}`}
              ref={(el) => setBgRef(el, i)}
              style={
                event.bgImage
                  ? { backgroundImage: `url(${event.bgImage})` }
                  : { background: event.bgGradient }
              }
            />
          ))}
          <div className="timeline-overlay" />
        </div>

        <div className="arc-dial">
          <svg viewBox="0 0 140 700" preserveAspectRatio="xMidYMid meet">
            {(() => {
              const N = events.length;
              const MINOR_PER_GAP = 4;
              const marks = [];
              for (let i = 0; i < N; i++) {
                const y =
                N > 1 ? 30 + (i / (N - 1)) * 640 : 30;
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
                    const my =
                      y + (m / (MINOR_PER_GAP + 1)) * (640 / (N - 1));
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

            <path
              ref={arcTrackRef}
              className="arc-track"
              d={ARC_PATH}
              fill="none"
            />
            <path
              ref={arcProgressRef}
              className="arc-progress"
              d={ARC_PATH}
              fill="none"
            />

            {events.map((_, i) => (
              <circle
                key={`marker-${i}`}
                ref={(el) => setMarkerRef(el, i)}
                className="arc-marker"
                cx={25}
                cy={30}
                r={4}
              />
            ))}

            {events.map((event, i) => (
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

            <circle
              ref={indicatorRef}
              className="arc-indicator"
              cx={25}
              cy={30}
              r={11}
            />
          </svg>

          <div className="arc-year-display">
            <span ref={yearLabelRef} className="arc-year-number">
              {events[0]?.year}
            </span>
            <span ref={yearSubRef} className="arc-year-category">
              {events[0]?.category}
            </span>
          </div>
        </div>

        <div className="timeline-cards-container">
          {events.map((event, i) => (
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
              {event.showContentImageInCard && event.contentImage && (
                <div className="card-image-wrapper">
                  <img src={event.contentImage} alt={event.title} className="card-image" />
                </div>
              )}
              <SafeHtml 
                html={event.cardDescription || event.description} 
                tagName="p" 
                className="card-description" 
              />
              {event.bullets && event.bullets.length > 0 && (
                <ul className="card-bullets">
                  {event.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
              {event.tags && (
                <div className="card-tags">
                  {event.tags.map((tag, j) => (
                    <span key={j} className="card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {event.detailDescription && detailPath && (
                <Link
                  to={`${detailPath}/${event.year}`}
                  className="card-see-more"
                >
                  See more
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="timeline-progress-bar">
          <span>{events[0]?.year}</span>
          <div className="progress-track">
            <div className="progress-fill" ref={progressFillRef} />
          </div>
          <span>{events[events.length - 1]?.year}</span>
        </div>
      </div>
    </section>
  );
};

export default ArcDialTimeline;
