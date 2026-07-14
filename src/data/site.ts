export const lab = {
  name: "Intelligent Digital Systems Lab",
  shortName: "IDS Lab",
  affiliation: "Sungkyunkwan University",
  tagline: "Digital VLSI, intelligent accelerators, and hardware-aware algorithms",
  summary:
    "We design intelligent digital systems that combine efficient VLSI architecture, machine-learning accelerators, neuromorphic computing, and hardware-oriented optimization.",
  mission:
    "Our mission is to advance the frontiers of digital VLSI and architecture through excellence, creativity, and collaboration, translating research into practical systems with positive impact.",
  recruitment:
    "IDS Lab is seeking talented and motivated undergraduate interns and graduate students interested in neural processing units, neuromorphic computing, application-specific accelerators, and hardware-based optimization.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Members", href: "/members" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export const quickStats = [
  { value: "14+", label: "Selected publications" },
  { value: "10+", label: "Current members and alumni" },
];

export const researchAreas = [
  {
    title: "Neural Processing Units",
    eyebrow: "AI Hardware",
    description:
      "Hardware architectures optimized for machine learning workloads, from natural language processing to computer vision and emerging generative models.",
    themes: ["low-precision training", "energy-efficient MAC arrays", "memory-aware dataflow"],
  },
  {
    title: "Neuromorphic Computing",
    eyebrow: "Brain-Inspired Systems",
    description:
      "Computing architectures inspired by neural systems, with emphasis on efficiency, fault tolerance, and new models for intelligent sensing and learning.",
    themes: ["spiking systems", "on-chip learning", "fault-tolerant inference"],
  },
  {
    title: "Application-Specific Accelerators",
    eyebrow: "Specialized Architecture",
    description:
      "Custom accelerators tailored to the structure of specific machine-learning applications, balancing performance, power, and accuracy.",
    themes: ["transformers", "3D Gaussian splatting", "domain-specific datapaths"],
  },
  {
    title: "Hardware-Based SAT Solvers",
    eyebrow: "Reasoning Engines",
    description:
      "Specialized hardware for Boolean satisfiability, automated reasoning, and verification workloads that benefit from massive parallelism.",
    themes: ["parallel search", "verification", "hardware-oriented algorithms"],
  },
];

export const news = [
  {
    date: "2026",
    title: "Two IDS Lab papers accepted to ASP-DAC 2026",
    detail:
      "Recent work includes H2NoC for FPGA interconnect architecture and BOA-3DGS for memory-aware 3D Gaussian splatting acceleration.",
  },
  {
    date: "2025",
    title: "RGHT-Q accepted to DATE 2025",
    detail:
      "The lab presented a GEMM unit for heterogeneous-homogeneous tensor quantization.",
  },
  {
    date: "Open",
    title: "Undergraduate interns and graduate applicants are welcome",
    detail:
      "Students interested in digital VLSI systems, NPUs, neuromorphic computing, and accelerators are encouraged to contact the lab.",
  },
];

export const contact = {
  professor: "Jeongwoo Park",
  email: "jeffjw@skku.edu",
  phone: "+82-31-299-4588",
  addressLines: [
    "Semiconductor Building #400510",
    "2066 Seobu-ro, Jangan-gu, Suwon-si",
    "Gyeonggi-do, South Korea",
  ],
};
