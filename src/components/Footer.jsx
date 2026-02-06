import { Mail, MapPin, Phone, Github, Linkedin, Globe, BookOpen } from 'lucide-react'
import { personalData } from '../data/personalData'
import './Footer.css'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
  scholar: BookOpen,
}

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-section footer-brand">
          <h3 className="footer-name">{personalData.name}</h3>
          <p className="footer-title">{personalData.title}</p>
          <p className="footer-institution">{personalData.institution}</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-contact">
            <a href={`mailto:${personalData.email}`}>
              <Mail size={14} />
              {personalData.email}
            </a>
            <a href={`tel:${personalData.phone}`}>
              <Phone size={14} />
              {personalData.phone}
            </a>
            <span>
              <MapPin size={14} />
              {personalData.office}
            </span>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Links</h4>
          <div className="footer-social">
            {personalData.socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Globe
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Icon size={15} />
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <p className="footer-note">Built for academic demonstration purposes.</p>
      </div>
    </div>
  </footer>
)

export default Footer
