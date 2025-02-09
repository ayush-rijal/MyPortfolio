export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: '',
//     img: 'assets/review1.png',
//     review:
//       'Working with Arun was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: '',
//     img: 'assets/review2.png',
//     review:
//       'Arun’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: ' ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Arun. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: '',
//     img: 'assets/review4.png',
//     review:
//       'Arun was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [

  {
    title: 'PYQ-Online Exam Questions Platform',
    desc: 'It is a web application providing students with past exam questions, built using Django (backend), JavaScript (frontend), and PostgreSQL (database). Features include categorized quizzes, subject-wise filtering, and a user-friendly interface for easy access to exam archives.',
    // subdesc:
    //   'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://github.com/ayush-rijal/PastYearQuestions-djangosite',
    texture: '/textures/project/PYQ.mp4',
    logo: '/assets/educationLogo.jpg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'JS',
        path: '/assets/javascriptLogo.png',
      },
      {
        id: 2,
        name: 'Django',
        path: '/assets/django.svg',
      },
     
    ],
  },


  {
    title: 'ShopMe-EcommercePlatform',
    desc: ' It is a full-stack e-commerce platform using Django (backend) and React (frontend). Features include user authentication, product management, secure payments, and a seamless shopping experience.',
// subdesc:  
//   'Built with react, Wwth a robust backend powered by Django and PostgreSQL, ShopMe ensures high performance, scalability, and security for modern eCommerce businesses.',  

    href: 'https://github.com/ayush-rijal/Django-Ecommerce',
    texture: '/textures/project/ecommerce.mp4',
    logo: '/assets/ecommerceLogo.jpg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Django',
        path: 'assets/django.svg',
      },
    ],
  },
  {
    title: 'ChatBot',
    desc: 'Its an interactive chatbot using OpenAI API, Django (backend), and JavaScript (frontend). Implements natural language processing for intelligent responses and seamless user interaction.',
    // subdesc:
    //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://github.com/ayush-rijal/Django-ChatBot',
    texture: '/textures/project/ChatBot.mp4',
    logo: '/assets/chatBot.jpg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'django',
        path: '/assets/django.svg',
      },
      {
        id: 2,
        name: 'Javascript',
        path: 'assets/javascriptLogo.png',
      },
     
     
    ],
  },
 
  
 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Django',
    pos: 'Lead Web Developer',
    duration: '2024- Present',
    title:
"I am currently collaborating with a team to develop an educational platform using Django. This project focuses on creating an interactive and user-friendly experience, leveraging Django's robust backend capabilities to deliver scalable and efficient solutions.",

    icon: '/assets/django.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'React',
    pos: 'Web Developer',
    duration: '',
    title:
      "Currently, I am working with a team to develop an innovative educational platform powered by React. By harnessing React's component-driven design and efficient state management, we're crafting an engaging and intuitive user experience that prioritizes scalability and performance",

    icon: '/assets/react.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Python',
    pos: 'AI/ML projects',
    duration: '',
    title:
      'Python is my preferred tool for solving complex problems in artificial intelligence, machine learning, and generative AI. Its versatility allows me to preprocess data, build and train machine learning models, and create innovative generative AI solutions. With Python, I can develop efficient algorithms, automate workflows, and craft intelligent systems that drive innovation and solve real-world challenges',
    icon: '/assets/python.svg',
    animation: 'salute',
  },
];
