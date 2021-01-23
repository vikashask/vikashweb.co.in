import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vikash | Profile', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Fullstack developer React,Node,Angular', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vikash Verma',
  subtitle: 'I am Frontend developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    '✓	Having 8+ Years of experience in area of Software developing and Programming in React Js, Redux, Node Js, MongoDb, Angular.',
  paragraphTwo:
    '✓	Adept in end-to-end development of software products from requirement analysis to system study, designing, coding, testing, de-bugging, documentation, and implementation',
  paragraphThree:
    '✓	Deft at mapping the requirements, custom designing solutions & troubleshooting for complex software & application problems',
  resume: '/Resume-Vikash_Verma_React.docx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project/dop.png',
    title: 'DOP',
    info: 'DOP is shopping site, for b2b and b2c',
    info2: 'React Js, Redux, Material ui, Styled component, HTML, CSS',
    url: 'http://dop-demo.netlify.app/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project/house-of-pepsico.png',
    title: 'House Of Pepsico',
    info: 'React Js, Gatsby, Material ui, HTML, CSS',
    info2: '',
    url: 'https://www.houseofpepsico.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project/quaker.png',
    title: 'Quaker',
    info: '',
    info2: 'React,HTML,Css,PHP',
    url: 'https://quaker.co.in/',
    repo: '',
  },

  {
    id: nanoid(),
    img: 'project/bubbly.png',
    title: 'Bubbly',
    info: 'Bubbly shopping marketing page for camping',
    info2: 'React Js, Material ui, Styled component, HTML, CSS',
    url: 'https://dmp-bubly-dev.azurewebsites.net/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project/app.denefits.png',
    title: 'Denefits Application',
    info: 'Angular, Node js',
    info2: '',
    url: 'http://app.denefits.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project/denefits.com.png',
    title: 'Denefits.com',
    info: '',
    info2: 'React,HTML,Css,PHP',
    url: 'denefits.com.',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vikashraj144@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/vikashraj144',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vikash-verma-0581682b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vikashask',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
