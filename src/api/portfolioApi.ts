import type { Project, Experience, Education } from '../types';

// Import project images
import enigmaLogo from '../assets/portfolio/enigmacamp.png';
import bsiLogo from '../assets/portfolio/bankbsi.png';
import backofficeLogo from '../assets/portfolio/backoffice.png';
import pilgrimLogo from '../assets/portfolio/pilgrim.png';
import conspiracyLogo from '../assets/portfolio/conspiracy.png';
import govBrLogo from '../assets/portfolio/gov_br.svg';

// Import design images
import keepItGreenLogo from '../assets/portfolio/Keep it green/cover.png';
import digitalAgencyLogo from '../assets/portfolio/digital agency/behance cover.png';
// import creditCardLogo from '../assets/portfolio/credit/behance cover.png';
import booksiLogo from '../assets/portfolio/booksi/behance cover.png';
import weatherLogo from '../assets/portfolio/weather/Wooden Hand iPhone 12 Pro.png';
// import pillLogo from '../assets/portfolio/pill reminder/Web 1.png';

// Import skill images
import bootstrapImg from '../assets/skills/bootstrap.png';
import cImg from '../assets/skills/C.png';
import csharpImg from '../assets/skills/Csharp.png';
import cssImg from '../assets/skills/css.png';
import figmaImg from '../assets/skills/figma.png';
import gitImg from '../assets/skills/git.png';
import htmlImg from '../assets/skills/html.png';
import illustratorImg from '../assets/skills/illustrator.png';
import javaImg from '../assets/skills/java.png';
import javascriptImg from '../assets/skills/javascript.png';
import photoshopImg from '../assets/skills/photoshop.png';
import phpImg from '../assets/skills/php.png';
import pythonImg from '../assets/skills/python.png';
import reactImg from '../assets/skills/react.png';
import vuejsImg from '../assets/skills/vuejs.png';
import xdImg from '../assets/skills/xd.png';

import mainLogo from '../assets/logo.png';

export const fetchProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [
    {
      title: 'Enigma Camp 2.0',
      description: 'Full online learning program completed with a more advanced combination of Self-paced learning, Instructor Led, and Collaborative learning methods.',
      image: enigmaLogo,
      tags: ['Java', 'Android', 'SQlite', 'Vue'],
      github: 'https://github.com/arifhidayat65',
      demo: 'https://enigmacamp.com/',
      category: 'Web'
    },
    {
      title: 'Bank BSI',
      description: 'The first Islamic bank website in Indonesia. Implemented a security system to prevent data leakage.',
      image: bsiLogo,
      tags: ['Python', 'Django', 'JQuery', 'Postgres', 'Docker', 'CI/CD'],
      github: 'https://github.com/arifhidayat65',
      demo: 'https://www.bankbsi.co.id/',
      category: 'Web'
    },
    {
      title: 'Keep it Green',
      description: 'UI/UX Design for an environment-focused application. Moodboard and visual design.',
      image: keepItGreenLogo,
      tags: ['Figma', 'Photoshop', 'UI/UX'],
      github: '',
      demo: '#',
      category: 'Design'
    },
    {
      title: 'Digital Agency',
      description: 'Complete website design for a digital agency. Including about, services, and contact pages.',
      image: digitalAgencyLogo,
      tags: ['Figma', 'Illustrator', 'UI/UX'],
      github: '',
      demo: '#',
      category: 'Design'
    },
    {
      title: 'Backoffice Enigmacamp',
      description: 'Project that aims to help beginner programmers with logic and algorithms on a web platform.',
      image: backofficeLogo,
      tags: ['Angular', 'Mysql', 'Postgres', 'CI/CD'],
      github: 'https://github.com/arifhidayat65',
      demo: '#',
      category: 'Web'
    },
    {
      title: 'BOOKSI',
      description: 'E-Book library Android app design for easy reading.',
      image: booksiLogo,
      tags: ['Figma', 'Photoshop', 'Mobile Design'],
      github: '',
      demo: '#',
      category: 'Design'
    },
    {
      title: 'The Pilgrim App',
      description: 'Christian content system like ebooks, audiobooks, courses and articles. With e-commerce for purchases.',
      image: pilgrimLogo,
      tags: ['Python', 'Django', 'Postgres', 'Cassandra', 'AWS', 'CI/CD', 'Firebase'],
      github: 'https://github.com/arifhidayat65',
      demo: 'https://thepilgrim.app/',
      category: 'Web'
    },
    {
      title: 'Quiet Weather',
      description: 'React Native app design using OpenWeatherMap API.',
      image: weatherLogo,
      tags: ['Figma', 'Illustration', 'React Native'],
      github: '',
      demo: '#',
      category: 'Design'
    }
  ];
};

export const fetchEducation = async (): Promise<Education[]> => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return [
    {
      name: "University Computer Indonesia",
      place: "Indonesia",
      date: "April, 2017 - Graduated",
      degree: "Bachelor in software engineering",
      description: "",
      skills: [
        "Software Engineering",
        "web programming",
        "UI/UX design",
        "Front-end developing",
        "Computer Network",
        "Agile",
        "OS",
        "Data Structure",
        "Quality",
        "Database"
      ],
      image: mainLogo
    }
  ];
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return [
    {
      company: 'PT Pam Jaya',
      role: 'Fullstack Developer',
      period: '2025 - 2026 (Present)',
      description: 'Leading the development of integrated utility management systems, focusing on modernizing public service platforms with robust Fullstack solutions. Implementing high-performance architectures to ensure seamless data flow and real-time monitoring of essential services.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker', 'Cloud Services']
    },
    {
      company: 'Bank Syariah Indonesia (BSI)',
      role: 'Software Engineer',
      period: '2023 - 2024',
      description: 'Developed and maintained core banking web applications with a focus on high security and compliance with Sharia banking regulations. Optimized internal financial systems and enhanced customer-facing digital services for better reliability and performance.',
      skills: ['Python', 'Django', 'PostgreSQL', 'JQuery', 'Security Best Practices', 'CI/CD'],
      image: bsiLogo
    },
    {
      company: 'PT Bank Sinarmas MSIGLIFE',
      role: 'Backend Developer',
      period: 'Jan 2021 - Des 2022',
      description: 'Part of team to create technically Service RestApi, management server, and Quality Code.',
      skills: ['Java', 'Springboot', 'Oracle', 'Agile', 'Microservices', 'CI/CD']
    },
    {
      company: 'PT Enigmacamp Cipta Humanika',
      role: 'Backend & Front Engineer',
      period: 'Jun 2019 - Sep 2021',
      description: 'Creating apps and web UI, portal backoffice.',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
      image: enigmaLogo
    },
    {
      company: 'Indocyber Global Service',
      role: 'React Web Developer',
      period: 'Jan 2018 - Des 2019',
      description: 'Worked as a fullstack developer solving front-end and back-end issues.',
      skills: ['Javascript', 'Typescript', 'ReactJS', 'React-Redux', 'webpack', 'Flutter', 'Java']
    },
    {
      company: 'Walden Global Service',
      role: 'Laravel Php',
      period: 'Jan 2017 - Des 2018',
      description: 'Created apps with microservice laravel php and managed server.',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JQuery', 'VueJS']
    }
  ];
};

export const skillAssets = {
  bootstrap: bootstrapImg,
  c: cImg,
  csharp: csharpImg,
  css: cssImg,
  figma: figmaImg,
  git: gitImg,
  html: htmlImg,
  illustrator: illustratorImg,
  java: javaImg,
  javascript: javascriptImg,
  photoshop: photoshopImg,
  php: phpImg,
  python: pythonImg,
  react: reactImg,
  vue: vuejsImg,
  xd: xdImg
};
