const paths = {
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  external: <path d="M13 5h6v6M19 5l-9 9M10 5H5v14h14v-5" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M5 19h14" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></>,
  github: <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-1-3 4-.5 7-2 7-6 0-2-.6-3-1.5-4 .3-1 .3-3-.5-4-2 0-3 1-4 1-2-.5-4-.5-6 0-1 0-2-1-4-1-.8 1-1 3-.5 4C3.5 6 3 7 3 9c0 4 3 5.5 7 6-1 1-1 2-1 3v4" />,
  linkedin: <><rect x="3" y="8" width="4" height="13" /><path d="M12 21V8h4v2c3-4 6-1 6 2v9M16 12v9" /><circle cx="5" cy="3.5" r="1.5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};
export default function Icon({ name, className = '' }) {
  return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}
