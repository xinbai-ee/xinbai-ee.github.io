import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft } from "lucide-react";
import { experienceEvents } from "../data/experienceData";
import SafeHtml from "../components/SafeHtml";
import "./BackgroundDetail.css";

const ExperienceDetail = () => {
  const { year } = useParams();
  const event = experienceEvents.find((e) => String(e.year) === year);

  if (!event) {
    return (
      <section className="background-detail">
        <div className="detail-container">
          <p className="detail-not-found">Experience not found.</p>
          <Link to="/experience" className="detail-back">
            <ArrowLeft size={18} />
            Back to timeline
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="background-detail"
      style={
        event.image
          ? { backgroundImage: `url(${event.image})` }
          : { background: event.bgGradient }
      }
    >
      <div className="detail-overlay" />
      <div className="detail-container">
        <Link to="/experience" className="detail-back">
          <ArrowLeft size={18} />
          Back to timeline
        </Link>

        <article className="detail-card">
          <div className="detail-header">
            <span className="detail-year-badge">{event.year}</span>
            {event.category && (
              <span className="detail-category-badge">{event.category}</span>
            )}
          </div>
          <h1 className="detail-title">{event.title}</h1>
          {event.institution && (
            <div className="detail-institution">
              <MapPin size={18} />
              <span>{event.institution}</span>
            </div>
          )}
          <div className="detail-description">
            <SafeHtml html={event.description} tagName="div" />
          </div>
          {event.tags && event.tags.length > 0 && (
            <div className="detail-tags">
              {event.tags.map((tag, j) => (
                <span key={j} className="detail-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default ExperienceDetail;
