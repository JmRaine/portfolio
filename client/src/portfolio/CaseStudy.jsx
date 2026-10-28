import { useEffect, useRef, useState } from 'react';
import Icon from './Icons';
import { profile } from './data';

export function ProjectCapture({ project }) {
  return <div className={`project-capture capture-${project.id}`}>
    <img src={project.image} alt={project.imageAlt} width="1280" height="720" />
  </div>;
}

export default function CaseStudy({ project, onClose }) {
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!project) return;
    const opener = document.activeElement;
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    setClosing(false);
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(closeTimer.current);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
    };
  }, [project]);

  const requestClose = () => {
    if (closing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClose();
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(onClose, 200);
  };

  if (!project) return null;
  return <dialog ref={ref} className={`case-study ${closing ? 'is-closing' : ''}`}
    aria-labelledby="case-study-title"
    onCancel={(event) => { event.preventDefault(); requestClose(); }}
    onClick={(event) => { if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) requestClose();
    } }}>
    <header className="case-header">
      <div><p className="mono case-category">Selected work / {project.number}</p><h2 id="case-study-title">{project.title}<span>·</span></h2></div>
      <button type="button" className="case-close" aria-label="Close project details" onClick={requestClose} autoFocus><Icon name="close" /></button>
    </header>
    <div className="case-study-content" tabIndex="0" aria-label={`${project.title} project information`}>
      <div className="case-layout">
        <div className="case-preview">
          <div className="case-preview-bar"><span className="status-dot" /><span className="mono">{project.category}</span><Icon name="external" /></div>
          <ProjectCapture project={project} />
          <div className="case-preview-caption"><span className="mono">Live application</span><span>{new URL(project.url).hostname}</span></div>
        </div>
        <div className="case-story">
          <p className="case-intro">{project.overview}</p>
          <section><h3><span>01</span> Who it’s for</h3><p>{project.audience}</p></section>
          <section><h3><span>02</span> Why this project</h3><p>{project.takeaway}</p></section>
        </div>
      </div>
      <section className="case-features"><h3><span>03</span> What it brings together</h3><ul>{project.features.map(feature => <li key={feature}><span className="status-dot" />{feature}</li>)}</ul></section>
    </div>
    <footer className="case-actions"><a className="button primary" href={project.url} target="_blank" rel="noopener noreferrer">Explore live project <Icon name="external" /></a><a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let’s talk about ${project.title}`)}`}>Ask me about this project <Icon name="arrow" /></a></footer>
  </dialog>;
}
