export const profile = {
  name: 'Justin Raine Justiza', initials: 'JRJ',
  email: 'justinrainemjustiza@gmail.com',
  github: 'https://github.com/JmRaine',
  linkedin: 'https://www.linkedin.com/in/justin-raine-justiza-3a099a440/',
  resume: '/Justin-Raine-Justiza-CV.pdf',
};
export const navigation = ['Home', 'Projects', 'About', 'Skills', 'Contact'];
export const projects = [
  {
    id: 'sagipbayan', number: '01', title: 'SagipBayan', category: 'Capstone project',
    url: 'https://sagipbayan.com', image: '/projects/sagipbayan.png',
    imageAlt: 'Actual SagipBayan public information portal for Jaen, Nueva Ecija',
    summary: 'Public safety information, brought together. A disaster-awareness platform for Jaen, Nueva Ecija, connecting weather, evacuation information, and community updates in one place.',
    focusLabel: 'The purpose', focus: 'Supporting the MDRRMO of Jaen, Nueva Ecija in making local disaster and public-safety information easier to share and access.',
    tags: ['Public safety', 'Web & mobile', 'Capstone'],
    overview: 'SagipBayan is my capstone project. Its public-facing portal brings together the Jaen MDRRMO’s local weather, evacuation areas, hazard information, advisories, and emergency contacts.',
    audience: 'MDRRMO of Jaen, Nueva Ecija.',
    features: ['Local weather outlook and forecasts', 'Evacuation maps with barangay filtering', 'Hazard monitoring and incident information', 'Official advisories and public-safety updates', 'A companion mobile-app experience'],
    takeaway: 'To support the MDRRMO of Jaen, Nueva Ecija with a central platform for sharing disaster advisories, evacuation information, and emergency updates with the community.',
  },
  {
    id: 'taskedge', number: '02', title: 'TaskEdge', category: 'Final academic project',
    url: 'https://taskedgeproject.vercel.app', image: '/projects/taskedge.png',
    imageAlt: 'Actual TaskEdge team task-management sign-in page',
    summary: 'Less scattered work. More shared progress. A team task-management application for planning projects, assigning responsibilities, and keeping deadlines in view.',
    focusLabel: 'The purpose', focus: 'Giving a team one clear place to organize its work, responsibilities, and upcoming deadlines.',
    tags: ['Team collaboration', 'Task management', 'Web application'],
    overview: 'TaskEdge is my final academic project: a web application built around team organization. Its public entry page introduces project planning, responsibility assignment, deadlines, and role-based access.',
    audience: 'Teams that need a shared view of projects, responsibilities, and deadlines.',
    features: ['Project and task organization', 'Responsibility assignment', 'Deadline visibility', 'Roles and permissions', 'An account-based workspace with a responsive sign-in flow'],
    takeaway: 'A second working application focused on a different problem: making collaborative work easier to follow.',
  },
];
export const skillGroups = [
  { label: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Data', items: ['MongoDB', 'MySQL'] },
  { label: 'Workflow', items: ['Git & GitHub', 'Software testing', 'Deployment', 'Debugging'] },
];
