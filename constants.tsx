import React from 'react';
import { ResumeData } from './types';
import { Github, Linkedin, Mail, Globe, Twitter } from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "Cola",
  title: "Senior Full Stack Engineer",
  location: "San Francisco, CA",
  email: "cola@example.com",
  bio: "Passionate developer with over 6 years of experience building scalable web applications. Expert in React, TypeScript, and Node.js ecosystems. I love turning complex problems into simple, beautiful, and intuitive designs.",
  socials: [
    { platform: "GitHub", url: "https://github.com", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { platform: "Portfolio", url: "https://cola.dev", icon: "Globe" },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Frontend Engineer",
      company: "TechFlow Solutions",
      period: "2021 - Present",
      description: [
        "Led the migration of a legacy monolithic application to a micro-frontend architecture using React and Module Federation, reducing build times by 40%.",
        "Mentored a team of 5 junior developers, conducting code reviews and organizing weekly technical workshops.",
        "Implemented a comprehensive design system using Tailwind CSS and Storybook, ensuring UI consistency across 4 distinct products."
      ]
    },
    {
      id: "exp-2",
      role: "Software Engineer",
      company: "Creative Pulse Agency",
      period: "2018 - 2021",
      description: [
        "Developed high-performance e-commerce platforms for major retail clients using Next.js and Shopify API.",
        "Optimized core web vitals resulting in a 25% increase in conversion rates for key clients.",
        "Integrated third-party payment gateways (Stripe, PayPal) and managed complex state with Redux."
      ]
    },
    {
      id: "exp-3",
      role: "Junior Web Developer",
      company: "StartUp Inc.",
      period: "2017 - 2018",
      description: [
        "Collaborated with UI/UX designers to implement responsive landing pages.",
        "Maintained and updated internal tools built with Vue.js and Firebase.",
        "Participated in agile sprints and daily stand-ups."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science",
      school: "University of California, Berkeley",
      year: "2013 - 2017"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Redis", "Firebase"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "TaskMaster AI",
      description: "A productivity application that uses AI to prioritize tasks based on deadlines and complexity. Built with React, Node.js, and OpenAI API.",
      technologies: ["React", "Node.js", "AI Integration", "MongoDB"],
      link: "#"
    },
    {
      id: "proj-2",
      title: "CryptoDash",
      description: "Real-time cryptocurrency dashboard featuring live price charts, portfolio tracking, and news aggregation.",
      technologies: ["Next.js", "WebSocket", "Recharts", "Tailwind"],
      link: "#"
    },
    {
      id: "proj-3",
      title: "EcoTrack",
      description: "Mobile-first web app for tracking personal carbon footprint with gamification elements.",
      technologies: ["PWA", "React", "Firebase"],
      link: "#"
    }
  ]
};

// Map string icon names to components for rendering
export const IconMap: Record<string, React.ElementType> = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Globe: Globe,
  Twitter: Twitter
};