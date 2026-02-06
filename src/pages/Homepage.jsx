import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  Mail,
  MapPin,
  BookOpen,
  Github,
  Linkedin,
  Globe,
  Award,
  Brain,
  Languages,
  Eye,
  Users,
  Shield,
  ChevronDown,
  Newspaper,
  Calendar,
} from 'lucide-react'
import { personalData } from '../data/personalData'
import './Homepage.css'

gsap.registerPlugin(ScrollTrigger)

const interestIconMap = {
  brain: Brain,
  languages: Languages,
  eye: Eye,
  users: Users,
  book: BookOpen,
  shield: Shield,
}

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
  scholar: BookOpen,
}

const Homepage = () => {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 100)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="homepage">
      <HeroSection />
      <AboutSection />
      <InterestsSection />
      <AchievementsSection />
      <NewsSection />
    </div>
  )
}

/* ─── Hero Section ──────────────────────────────── */
const HeroSection = () => {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-avatar-wrapper', { scale: 0.8, opacity: 0, duration: 0.8 })
        .from('.hero-name', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-title-text', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-institution', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-social a', { y: 15, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.2')
        .from('.hero-stats .stat-item', { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.2')
        .from('.hero-scroll-hint', { opacity: 0, duration: 0.6 }, '-=0.1')
    },
    { scope: heroRef }
  )

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-pattern" />
      </div>

      <div className="hero-content">
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>{personalData.firstName[0]}{personalData.lastName[0]}</span>
            </div>
          </div>
          <div className="avatar-ring" />
        </div>

        <h1 className="hero-name">{personalData.name}</h1>
        <p className="hero-title-text">{personalData.title}</p>
        <p className="hero-institution">
          <MapPin size={16} />
          {personalData.institution}
        </p>

        <div className="hero-social">
          {personalData.socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon] || Globe
            return (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
                <Icon size={18} />
              </a>
            )
          })}
          <a href={`mailto:${personalData.email}`} title="Email">
            <Mail size={18} />
          </a>
        </div>

        <div className="hero-stats">
          {personalData.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-scroll-hint">
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  )
}

/* ─── About Section ─────────────────────────────── */
const AboutSection = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.about-text', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: { trigger: '.about-text', start: 'top 88%' },
      })
      gsap.from('.about-details .detail-item', {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        immediateRender: false,
        scrollTrigger: { trigger: '.about-details', start: 'top 88%' },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{personalData.bio}</p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <Mail size={18} />
              <div>
                <span className="detail-label">Email</span>
                <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
              </div>
            </div>
            <div className="detail-item">
              <MapPin size={18} />
              <div>
                <span className="detail-label">Office</span>
                <span>{personalData.office}</span>
              </div>
            </div>
            <div className="detail-item">
              <BookOpen size={18} />
              <div>
                <span className="detail-label">Department</span>
                <span>{personalData.department}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Research Interests ────────────────────────── */
const InterestsSection = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.interest-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        immediateRender: false,
        scrollTrigger: { trigger: '.interests-grid', start: 'top 88%' },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="interests-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Research Interests</h2>
        <p className="section-subtitle">{personalData.shortBio}</p>
        <div className="interests-grid">
          {personalData.researchInterests.map((interest, i) => {
            const Icon = interestIconMap[interest.icon] || Brain
            return (
              <div className="interest-card" key={i}>
                <div className="interest-icon">
                  <Icon size={24} />
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Achievements ──────────────────────────────── */
const AchievementsSection = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.achievement-item', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: { trigger: '.achievements-list', start: 'top 88%' },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="achievements-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Selected Achievements</h2>
        <p className="section-subtitle">
          Recognitions and milestones from a career in research and academia
        </p>
        <div className="achievements-list">
          {personalData.achievements.map((a, i) => (
            <div className="achievement-item" key={i}>
              <div className="achievement-year">
                <Award size={16} />
                {a.year}
              </div>
              <div className="achievement-content">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── News Section ──────────────────────────────── */
const NewsSection = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.news-item', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        immediateRender: false,
        scrollTrigger: { trigger: '.news-list', start: 'top 88%' },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="news-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">
          <Newspaper size={28} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Recent News
        </h2>
        <div className="news-list">
          {personalData.news.map((item, i) => (
            <div className="news-item" key={i}>
              <span className="news-date">
                <Calendar size={14} />
                {item.date}
              </span>
              <p className="news-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Homepage
