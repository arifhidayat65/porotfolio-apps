import type { Project, Experience, Education, Profile } from '../types';

// Import profile assets
import arifAvatar from '../assets/arif.png';

// Import project images
import enigmaLogo from '../assets/portfolio/enigmacamp.png';
import bsiLogo from '../assets/portfolio/bankbsi.png';
import backofficeLogo from '../assets/portfolio/backoffice.png';
import pilgrimLogo from '../assets/portfolio/pilgrim.png';

// Import design images
import keepItGreenLogo from '../assets/portfolio/Keep it green/cover.png';
import keepItGreenShow from '../assets/portfolio/Keep it green/show.png';

import digitalAgencyLogo from '../assets/portfolio/digital agency/behance cover.png';
import digitalAgency1 from '../assets/portfolio/digital agency/1. start.png';
import digitalAgency2 from '../assets/portfolio/digital agency/2. about.png';
import digitalAgency3 from '../assets/portfolio/digital agency/3. Our services.png';
import digitalAgency4 from '../assets/portfolio/digital agency/4. latest project.png';
import digitalAgency5 from '../assets/portfolio/digital agency/5. Contact us.png';

import booksiLogo from '../assets/portfolio/booksi/behance cover.png';
import booksiHome from '../assets/portfolio/booksi/home page.png';
import booksiLogin from '../assets/portfolio/booksi/login.png';
import booksiRegister from '../assets/portfolio/booksi/register.png';
import booksiForYou from '../assets/portfolio/booksi/For you.png';
import booksiBoard from '../assets/portfolio/booksi/behance board.png';

import weatherLogo from '../assets/portfolio/weather/Wooden Hand iPhone 12 Pro.png';

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

export const fetchProfile = async (): Promise<Profile> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    firstName: 'Arif',
    lastName: 'Hidayat',
    role: 'Lead Software Engineer',
    email: 'arifhidayat1010@gmail.com',
    location: 'Jakarta, Indonesia',
    avatar: arifAvatar,
    cvUrl: '/RESUME.html',
    description: [
      'Lead Software Engineer and Software Architect with 7+ years building systems for finance, insurance, and public utilities.',
      'I turn complex requirements into software that meets business goals. I take products from idea to production: microservices for high load, banking systems that meet security standards, logistics platforms that track in real time.',
      'I run Agile teams, ship on schedule, and help engineers grow.'
    ],
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/arif-hidayat-8b173212b/' },
      { platform: 'github', url: 'https://github.com/arifhidayat65' },
      { platform: 'twitter', url: 'https://twitter.com/Arifhidayat65' },
      { platform: 'facebook', url: 'https://www.facebook.com/arifefhidayat/' }
    ]
  };
};

export const fetchProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [
    {
      title: 'PAM Jaya Mobil Tangki SDD',
      description: 'A comprehensive web-based monitoring, scheduling, and queue management system for PAM Jaya water tanker distribution (Sistem Distribusi & Delivery). Designed to optimize clean water dispatching with real-time assignment monitoring, monthly historical analytics, queue management, and automated trip planning.',
      image: '/Mobil-Tangki-SDD_files/monitoring_case_delivered.png',
      tags: ['React', 'TypeScript', 'Dashboard', 'Analytics', 'Queue Management', 'Real-time Tracking'],
      github: 'https://github.com/arifhidayat65',
      demo: '#',
      category: 'Web',
      images: [
        '/Mobil-Tangki-SDD_files/monitoring_case_delivered.png',
        '/Mobil-Tangki-SDD_files/pusta_daata_master_arsip_armada.png',
        '/Mobil-Tangki-SDD_files/antrian_queque.png',
        '/Mobil-Tangki-SDD_files/perencanaan_penugasan.png',
        '/Mobil-Tangki-SDD_files/permintaan_pernecanaan1.png',
        '/Mobil-Tangki-SDD_files/user_management.png',
        '/Mobil-Tangki-SDD_files/add_new_trips.png',
        '/Mobil-Tangki-SDD_files/create_new_event_agenda.png',
        '/Mobil-Tangki-SDD_files/area_historikal_bulanan.png'
      ]
    },
    {
      title: 'PAM Jaya Mobile Driver',
      description: 'An Android-based application designed for PAM Jaya field operations and drivers. Features real-time GPS tracking, task assignment management, and geotagged camera verification for water distribution and service reports.',
      image: '/images/location_driver_live_tracking.png',
      tags: ['Android', 'Kotlin', 'Google Maps API', 'Geotagging', 'SQLite', 'Retrofit'],
      github: 'https://github.com/arifhidayat65',
      demo: '#',
      category: 'Mobile',
      images: [
        '/images/location_driver_live_tracking.png',
        '/images/halaman_login_page.png',
        '/images/trip_driver.png',
        '/images/update_assignment.png',
        '/images/mengambil_kamera_dengan_lokasi.png',
        '/images/foto_pengiriman.png',
        '/images/buat_pin_baru.png',
        '/images/halaman_lupa_password.png',
        '/images/kebijakan_privasi.png',
        '/images/profil_saya.png',
        '/images/pusat_bantuan.png',
        '/images/tentang_aplikasi.png',
        '/images/konfirmasi_lock_trip.png'
      ]
    },
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
      category: 'Design',
      images: [
        keepItGreenLogo,
        keepItGreenShow
      ]
    },
    {
      title: 'Digital Agency',
      description: 'Complete website design for a digital agency. Including about, services, and contact pages.',
      image: digitalAgencyLogo,
      tags: ['Figma', 'Illustrator', 'UI/UX'],
      github: '',
      demo: '#',
      category: 'Design',
      images: [
        digitalAgencyLogo,
        digitalAgency1,
        digitalAgency2,
        digitalAgency3,
        digitalAgency4,
        digitalAgency5
      ]
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
      category: 'Design',
      images: [
        booksiLogo,
        booksiHome,
        booksiLogin,
        booksiRegister,
        booksiForYou,
        booksiBoard
      ]
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
  await new Promise((resolve) => setTimeout(resolve, 300));
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
      image: '/unikom.webp'
    }
  ];
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [
    {
      company: 'PT Pam Jaya',
      role: 'Lead Software Engineer',
      period: 'Jan 2025 – Oct 2026 (End of Contract)',
      description: 'Led Jakarta water utility digital upgrade. Contract ended Oct 2026. Shipped systems for real-time water distribution and tanker logistics. Aligned architecture with ops needs, held 99.9% uptime, and sped up deploys with CI/CD.',
      skills: ['Technical Leadership', 'System Architecture', 'CI/CD', 'Cloud Infrastructure', 'React', 'Node.js'],
      image: '/Mobil-Tangki-SDD_files/logoMobilTangki.png'
    },
    {
      company: 'Bank Syariah Indonesia (BSI)',
      role: 'Lead Software Engineer',
      period: '2023 - 2024',
      description: 'Owned core digital assets for Indonesia’s largest Sharia bank. Built high-traffic portals, met Sharia and OJK compliance 100%, rebuilt transaction engines for lower latency, mentored 15+ developers.',
      skills: ['Team Leadership', 'Python', 'Django', 'Security Compliance', 'Database Optimization', 'Banking Systems'],
      image: bsiLogo
    },
    {
      company: 'PT Bank Sinarmas MSIGLIFE',
      role: 'Senior Backend Developer',
      period: 'Jan 2021 - Des 2022',
      description: 'Built core backend for a life insurer (JV with MSIG Japan). Broke a monolith into Spring Boot microservices, integrated partner APIs for real-time policy issuance, hardened data security.',
      skills: ['Microservices', 'Java', 'Springboot', 'Oracle', 'API Management', 'Quality Engineering']
    },
    {
      company: 'PT Enigmacamp Cipta Humanika',
      role: 'Technical Lead & Backend Specialist',
      period: 'Jun 2019 - Sep 2021',
      description: 'Ran technical delivery for an IT incubator. Owned client project lifecycles, built Enigma Camp 2.0 LMS for thousands of concurrent students, standardized backend workflows and lifted output 30%.',
      skills: ['Project Management', 'Backend Development', 'Technical Mentoring', 'Architecture Design']
    },
    {
      company: 'Indocyber Global Service',
      role: 'Fullstack Web Developer',
      period: 'Jan 2018 - Des 2019',
      description: 'Shipped web products for FMCG and finance clients with React and Java. Built responsive interfaces backed by solid logic.',
      skills: ['Fullstack Development', 'ReactJS', 'TypeScript', 'Flutter', 'Java', 'Redux']
    },
    {
      company: 'Walden Global Service',
      role: 'Backend Engineer (PHP/Laravel)',
      period: 'Jan 2017 - Des 2018',
      description: 'Built and ran high-concurrency Laravel apps. Tuned databases and servers to handle peak e-commerce traffic.',
      skills: ['Laravel', 'PHP', 'MySQL', 'Server Management', 'VueJS']
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
