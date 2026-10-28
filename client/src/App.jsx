import { useEffect, useState } from 'react';
import Navigation, { ResumeLink } from './portfolio/Navigation';
import Icon from './portfolio/Icons';
import { CodeVisual } from './portfolio/Visuals';
import Projects, { SectionHeading } from './portfolio/Projects';
import CaseStudy from './portfolio/CaseStudy';
import { navigation, profile, skillGroups } from './portfolio/data';

export default function App() {
  const [active, setActive] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timer = window.setTimeout(() => setIntro(false), reduced.matches ? 0 : 950);
    document.documentElement.classList.add('motion-ready');
    const reveals = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveals.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach((element) => reveals.observe(element));
    const sections = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    navigation.forEach((label) => {
      const element = document.getElementById(label.toLowerCase());
      if (element) sections.observe(element);
    });
    return () => {
      window.clearTimeout(timer);
      reveals.disconnect();
      sections.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return <div className="portfolio-root">
    <a className="skip-link" href="#main-content">Skip to content</a>
    {intro && <div className="intro-screen" aria-hidden="true"><div className="intro-mark">JRJ<span>·</span></div><span className="intro-line" /></div>}
    <Navigation active={active} />
    <main id="main-content">
      <section className="hero section-shell" id="home" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow hero-enter"><span className="status-dot" /> Information Technology · Full-stack development</p>
            <h1 className="hero-enter delay-one" id="hero-heading">Building useful<br />digital experiences,<br /><span>from interface to<br />infrastructure.</span></h1>
            <p className="hero-description hero-enter delay-two">I’m Justin, an aspiring full-stack developer focused on building responsive web applications, reliable backend systems, and user-centered digital experiences.</p>
            <div className="hero-actions hero-enter delay-three"><a className="button primary" href="#projects">Explore my work <Icon name="arrow" /></a><ResumeLink className="button ghost" /></div>
          </div>
          <div className="hero-enter delay-three visual-entrance"><CodeVisual /></div>
        </div>
        <div className="hero-meta mono hero-enter delay-three"><span>Based in the Philippines</span><a href="#projects">Scroll to explore <i /></a><span>Portfolio / {new Date().getFullYear()}</span></div>
      </section>
      <Projects onOpenCaseStudy={setSelectedProject} />
      <section className="about-section divided-section section-shell" id="about" aria-labelledby="about-heading">
        <div className="section-heading reveal"><p className="section-eyebrow"><span>02</span> About me</p><h2 id="about-heading">Curiosity in the details.<br />Clarity in the result.</h2></div>
        <div className="about-layout reveal">
          <p className="about-lead">I’m an Information Technology student specializing in <span>Mobile and Web Applications</span>, with experience developing web systems, working with databases, integrating APIs, and testing software.</p>
          <div className="about-body"><p>I enjoy turning technical requirements into practical, user-friendly applications. My approach starts with understanding the problem, structuring the system, and refining the experience until each part feels intentional.</p><p>I’m growing across both frontend and backend development through academic projects and collaborative software work.</p><a className="text-link" href="#experience">More about my experience <Icon name="arrow" /></a></div>
          <dl className="about-facts"><div><dt>Focus</dt><dd>Full-stack web<br />development</dd></div><div><dt>Interests</dt><dd>Web systems<br />Mobile applications<br />Software testing</dd></div><div><dt>Status</dt><dd><span className="status-dot" /> Open to opportunities</dd></div></dl>
        </div>
      </section>
      <section className="skills-section divided-section section-shell" id="skills">
        <SectionHeading number="03" label="Technical toolkit">A practical stack for<br />building end to end.</SectionHeading>
        <div className="skill-grid reveal">{skillGroups.map((group, index) => <div className="skill-column" key={group.label}><h3 className="mono">0{index + 1} / {group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}<span /></li>)}</ul></div>)}</div>
        <p className="skills-footnote mono reveal">From interface details to the systems behind them.</p>
      </section>
      <section className="experience-section divided-section section-shell" id="experience" aria-labelledby="experience-heading">
        <div className="experience-heading reveal"><p className="section-eyebrow"><span>04</span> Experience & education</p><h2 id="experience-heading">A growing record of academic work, collaborative practice, and hands-on software development.</h2></div>
        <div className="timeline reveal"><div><span className="mono">Current</span><div><h3>Information Technology</h3><p>Specialization in Mobile and Web Applications</p></div><span className="mono">Education</span></div><div><span className="mono">Capstone</span><div><h3>SagipBayan</h3><p>A public-safety platform serving Jaen, Nueva Ecija.</p></div><span className="mono">Project work</span></div><div><span className="mono">Final project</span><div><h3>TaskEdge</h3><p>Team organization, project planning, and task management.</p></div><span className="mono">Project work</span></div></div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div className="contact-inner reveal"><p className="section-eyebrow">05 Start a conversation</p><h2 id="contact-heading">Have a project or<br /><span>opportunity in mind?</span></h2><p className="contact-description">I’m open to discussing junior development opportunities, internships,<br className="desktop-break" /> and interesting software projects.</p><a className="contact-email" href={`mailto:${profile.email}`}><span>{profile.email}</span><Icon name="arrow" /></a><div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub <Icon name="external" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn <Icon name="external" /></a><a href={`mailto:${profile.email}`}><Icon name="mail" /> Email <Icon name="external" /></a></div></div></section>
    </main>
    <footer className="site-footer section-shell"><div><a className="wordmark" href="#home" aria-label="Back to home">{profile.initials}<span>·</span></a><p>Full-stack developer building considered digital<br />experiences.</p></div><div className="footer-right"><nav aria-label="Footer navigation">{navigation.slice(1).map((label) => <a href={`#${label.toLowerCase()}`} key={label}>{label}</a>)}</nav><span className="mono">© {new Date().getFullYear()} {profile.name}</span></div></footer>
    <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>;
}
