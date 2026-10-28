import { useEffect, useRef, useState } from 'react';
import { navigation, profile } from './data';
import Icon from './Icons';
export function ResumeLink({ className = '' }) {
  return profile.resume
    ? <a className={`resume-link ${className}`} href={profile.resume} download>Download résumé <Icon name="download" /></a>
    : <button className={`resume-link ${className}`} type="button" disabled title="The résumé PDF will be available here once it is added.">Résumé coming soon <Icon name="download" /></button>;
}
export default function Navigation({ active }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);
  return <header className="site-header"><div className="header-inner">
    <a className="wordmark" href="#home" aria-label={`${profile.name} — home`} onClick={() => setOpen(false)}>{profile.initials}<span>·</span></a>
    <nav className={`primary-nav ${open ? 'is-open' : ''}`} id="primary-navigation" aria-label="Primary navigation">{navigation.map((label) => <a key={label} href={`#${label.toLowerCase()}`} className={active === label.toLowerCase() ? 'active' : ''} aria-current={active === label.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <ResumeLink className="header-resume" /><button ref={menuButton} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
  </div></header>;
}
