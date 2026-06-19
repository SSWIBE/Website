export const SITE = {
  name: "SSWIBE",
  fullName: "South Sudan Women in the Built Environment",
  tagline: "Elevating Women, Shaping Spaces.",
  pillars: ["BUILD", "MENTOR", "TRANSFORM"] as const,
  email: "info@sswibe.space",
  founded: "August 2025",
  foundedYear: "2025",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#programs" },
  { label: "Our Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Join Us", href: "#join" },
];

export const PROGRAMS = [
  {
    id: "01",
    icon: "GraduationCap",
    title: "Mentorship & Career Advocacy",
    body: "Structured mentorship pairing young professionals with industry veterans to navigate real career challenges.",
  },
  {
    id: "02",
    icon: "Briefcase",
    title: "Employment & Opportunities",
    body: "A shared job board actively bridging the economic gap — already securing new work for our members.",
  },
  {
    id: "03",
    icon: "BookOpen",
    title: "Continuous Educational Growth",
    body: "Connecting members with ALX Africa short courses to sharpen technical and leadership skills.",
  },
  {
    id: "04",
    icon: "Mic2",
    title: "Knowledge Sharing & Media",
    body: "The 'She Builds' podcast hosting deep-dive conversations on issues facing women in the industry.",
  },
  {
    id: "05",
    icon: "Monitor",
    title: "Monthly Webinars",
    body: "Renowned architects, civil engineers, and academics addressing the professional hurdles our members face.",
  },
  {
    id: "06",
    icon: "Users",
    title: "Quarterly Physical Events",
    body: "In-person gatherings every three months to deepen professional networks and community bonds.",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Ropani Betty James Sadaraka",
    role: "Co-founder | Strategic Director",
    bio: "Provides strategic leadership, fosters connections with international institutions, and ensures the network maintains the highest professional standards.",
    image: "/images/team/ropani.jpg",
    initials: "RB",
  },
  {
    name: "Annmarie Land",
    role: "Co-founder | Director of Academic Inclusion & Human Development",
    bio: "Bridging education, professional opportunity, and gender equity in the South Sudanese built environment.",
    image: "/images/team/annmarie.jpg",
    initials: "AL",
  },
  {
    name: "Winny Raymond Pita Lagu",
    role: "Co-founder | Director of Financial Strategy",
    bio: "Drives economic empowerment through financial literacy, scaling practices, and securing strategic commercial partnerships.",
    image: "/images/team/winny.jpg",
    initials: "WR",
  },
];

export const TEAM = [
  {
    name: "Cholhok Kuar",
    role: "Creative Engagement Coordinator",
    bio: "Podcast host and curator of SSWIBE's public programming and quarterly physical experiences.",
    image: "/images/team/cholhok.jpg",
    initials: "CK",
  },
  {
    name: "Akuot Chol Wal",
    role: "Lead Student Ambassador",
    bio: "Primary liaison between student members, academic institutions, and the executive board.",
    image: "/images/team/akuot.jpg",
    initials: "AC",
  },
  {
    name: "Salma Tondura Ali",
    role: "Social Media & Digital Communications Manager",
    bio: "The digital voice of SSWIBE — moving the network from hidden group to visible, valued collective.",
    image: "/images/team/salma.jpg",
    initials: "ST",
  },
];

export const STATS = [
  { value: 3, label: "Co-Founders", suffix: "" },
  { value: 6, label: "Core Programs", suffix: "" },
  { value: 1, label: "Active Podcast", suffix: "" },
  { value: 4, label: "Events Per Year", suffix: "+" },
];

export const TESTIMONIALS = [
  {
    quote:
      "SSWIBE gave me a mentor and a community I didn't know I needed in this industry.",
    name: "Ayen D.",
    role: "Structural Engineer, Juba",
    avatar: "/illustrations/avatar-1.svg",
    handle: "@ayend_builds",
  },
  {
    quote:
      "For the first time, I felt seen as a professional — not an exception.",
    name: "Amani K.",
    role: "Urban Planner, Wau",
    avatar: "/illustrations/avatar-2.svg",
    handle: "@amani_plans",
  },
  {
    quote: "The job board alone changed the trajectory of my career.",
    name: "Lucia M.",
    role: "Architect, Juba",
    avatar: "/illustrations/avatar-3.svg",
    handle: "@lucia_arch",
  },
];

export const BENEFITS = [
  "Structured mentorship programs",
  "Shared job board & career opportunities",
  "Monthly expert webinars",
  "'She Builds' podcast community",
  "Quarterly in-person events",
  "ALX Africa short course access",
  "A visible, valued professional network",
];

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  facebook: "#",
  tiktok: "#",
  twitter: "#",
};
