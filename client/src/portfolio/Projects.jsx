import { projects } from './data';
import Icon from './Icons';
import { ProjectVisual } from './Visuals';
export function SectionHeading({ number, label, children }) {
  return <div className="section-heading reveal"><p className="section-eyebrow"><span>{number}</span> {label}</p><h2>{children}</h2></div>;
}
export default function Projects({ onOpenCaseStudy }) {
  return <section className="projects-section section-shell" id="projects" aria-labelledby="projects-heading"><div className="section-heading reveal"><p className="section-eyebrow"><span>01</span> Selected work</p><h2 id="projects-heading">Projects with purpose, built with care.</h2></div><div className="project-list">{projects.map((project) => <article className={`project-row ${project.id === 'taskedge' ? 'project-reversed' : ''} reveal`} key={project.id} data-project={project.id}><a className="project-image-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live website`}><ProjectVisual project={project} /></a><div className="project-copy"><div className="project-kicker mono"><span>{project.category}</span><span>{project.number} / 02</span></div><h3>{project.title}</h3><p className="project-description">{project.summary}</p><div className="project-focus"><span className="mono">{project.focusLabel}</span><p>{project.focus}</p></div><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.url} target="_blank" rel="noopener noreferrer">Live demo <Icon name="external" /></a><button type="button" onClick={() => onOpenCaseStudy(project)}>Project details <Icon name="arrow" /></button></div></div></article>)}</div></section>;
}
