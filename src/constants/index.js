import {
  mobile,
  backend,
  creator,
  web,
  surveying,
  autocad,
  brickwall,
  design,
  analysis,
  survey,
  project,
  construction,
  building,
  bridge,
  infrastructure,
  road,
  git,
  figma,
  gis,
  modelling,
  sunkoshi,
  marsnepal,
  trishuli,
  footings,
  punyamata,
  marsnepalsurvey,
  isolated_footings,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certificate",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Design Tools",
    icon: autocad,
  },
  {
    title: "Analysis Tools",
    icon: analysis,
  },
  {
    title: "Survey Tools",
    icon: survey,
  },
  {
    title: "Project Management",
    icon: project,
  },
];

const technologies = [
  {
    name: "Autocad",
    icon: autocad,
  },
  {
    name: "GIS",
    icon: gis,
  },
  {
    name: "3d Modelling",
    icon: modelling,
  },
  {
    name: "Construction",
    icon: construction,
  },
  {
    name: "Brickwall",
    icon: brickwall,
  },
  {
    name: "Building",
    icon: building,
  },
  {
    name: "Bridge",
    icon: bridge,
  },
  {
    name: "Infrastructure",
    icon: infrastructure,
  },
  {
    name: "Survey",
    icon: surveying,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "road",
    icon: road,
  },
];

const experiences = [
  {
    title: "Sunkoshi Hydropower Optimization Lead",
    company_name: "Nepal Hydropower Company",
    icon: project, // Replace with a suitable hydropower icon
    iconBg: "#383E56",
    date: "July 2022 - Dec 2022",
    points: [
      "Led the RUM project to enhance water and sediment management in the Sunkoshi Hydropower plant.",
      "Optimized resources and operational efficiency, reducing sediment-related turbine wear.",
      "Prepared detailed reports and presented findings to stakeholders.",
    ],
  },
  {
    title: "Road Alignment Designer",
    company_name: "Mars Road Nepal",
    icon: design, // Replace with a road design icon
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    points: [
      "Designed road alignment for challenging terrains using SW-Road, ensuring safety and sustainability.",
      "Collaborated with surveying teams to gather site data and refine design plans.",
      "Minimized ecological impact through innovative planning techniques.",
    ],
  },
  {
    title: "Flood Analysis Specialist",
    company_name: "Punyamata River Research",
    icon: analysis, // Replace with a water analysis icon
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Conducted water flow analysis of the Punyamata River using HEC-RAS and EPANET.",
      "Developed flood prediction models for improved disaster preparedness.",
      "Integrated GIS data to visualize flood-prone areas and propose mitigation strategies.",
    ],
  },
];

const testimonials = [
  {
    "testimonial": "Sarita's dedication, innovative problem-solving, and multidisciplinary expertise make me incredibly proud as her mother.",
    "name": "Sita Sapkota",
    "designation": "Businesswoman",
    "company": "Self Employed",
     "image": "https://via.placeholder.com/100x100?text=SS"
  },

  {
    testimonial:
      "Her innovative approach to road alignment design and meticulous attention to detail have been an asset to our project.",
    name: "Prof. Ramesh Kumar Maskey",
    designation: "Professor",
    company: "Kathmandu University",
    image: "https://via.placeholder.com/100x100?text=RK",
  },
  {
    testimonial:
      "Sarita's ability to analyze complex hydraulic data and provide actionable insights is remarkable.",
    name: "Manish Prakash",
    designation: "Research Supervisor",
    company: "KU Research Labs",
    image: "https://via.placeholder.com/100x100?text=MP",
  },
];

const projects = [
  {
    name: "Sunkoshi Hydropower RUM Optimization",
    description:
      "Led the RUM project for Sunkoshi Hydropower to enhance water and sediment management, optimizing resources and operational efficiency.",
    tags: [
      {
        name: "hydropower",
        color: "blue-text-gradient",
      },
      {
        name: "water-management",
        color: "green-text-gradient",
      },
      {
        name: "optimization",
        color: "pink-text-gradient",
      },
    ],
    image: sunkoshi,
    report: "/path-to-sunkoshi-report.pdf",
    source_code_link: "https://github.com/",
  },
  {
    name: "Mars Nepal Road Design",
    description:
      "Designed road alignment for Nepal's Mars region using SW-Road, ensuring safety, efficiency, and minimal ecological impact.",
    tags: [
      {
        name: "road-design",
        color: "blue-text-gradient",
      },
      {
        name: "sw-road",
        color: "green-text-gradient",
      },
      {
        name: "sustainability",
        color: "pink-text-gradient",
      },
    ],
    image: marsnepal,
    report: marsnepalsurvey,
    source_code_link: "https://github.com/",
  },
  {
    name: "Punyamata River Flow Analysis",
    description:
      "Conducted water flow analysis of Punyamata River using HEC-RAS and EPANET for flood prediction and resource management.",
    tags: [
      {
        name: "flood-analysis",
        color: "blue-text-gradient",
      },
      {
        name: "hec-ras",
        color: "green-text-gradient",
      },
      {
        name: "epanet",
        color: "pink-text-gradient",
      },
    ],
    image: punyamata,
    report: "/path-to-sunkoshi-report.pdf",
    source_code_link: "https://github.com/",
  },
  {
    name: "Footings Demonstrative Model",
    description:
      "Designed and built a demonstrative model showcasing various types of footings, emphasizing their structural significance and applications.",
    tags: [
      {
        name: "structural-design",
        color: "blue-text-gradient",
      },
      {
        name: "modeling",
        color: "green-text-gradient",
      },
      {
        name: "construction",
        color: "pink-text-gradient",
      },
    ],
    image: footings,
    report: isolated_footings,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trishuli Hydropower Topography Model",
    description:
      "Built a topographic model of Trishuli Hydropower, showcasing natural and manmade features for infrastructure planning.",
    tags: [
      {
        name: "topography",
        color: "blue-text-gradient",
      },
      {
        name: "hydropower",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: trishuli,
    report: "/path-to-sunkoshi-report.pdf",
    source_code_link: "https://github.com/",
  },
];
const certificates = [
  {
    title: "AutoCAD Professional Certification",
    issuer: "Autodesk Certified Professional",
     year: "2023",
    credentialId: "ACP-2023-458",
    downloadLink: "/path-to-autocad-certificate.pdf",
    icon: autocad
  },
  {
    title: "HEC-RAS Specialist",
    issuer: "Hydraulic Engineering Center",
      year: "2023",
    credentialId: "HEC-2023-789",
     downloadLink: "/path-to-hecras-certificate.pdf",
    icon: analysis
  },
 {
      title: "Project Management Fundamentals",
      issuer: "PMI Certified Associate",
      year: "2022",
       credentialId: "PMF-2022-123",
      downloadLink: "/path-to-project-management-certificate.pdf",
      icon: project
  },
   {
        title: "EPANET Water Analysis",
       issuer: "Environmental Protection Agency",
         downloadLink: "/path-to-epanet-certificate.pdf",
        icon: survey
   },
    {
        title: "SW-Road Design Specialist",
      issuer: "Softworld Engineering",
       downloadLink: "/path-to-swroad-certificate.pdf",
       icon: road
    },
];
export { services, technologies, experiences, testimonials, projects, certificates };
