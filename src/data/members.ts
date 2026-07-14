export type Member = {
  name: string;
  role: string;
  email?: string;
  interests?: string[];
  photo?: string;
  photoAlt?: string;
  portfolioUrl?: string;
};

export const professor: Member = {
  name: "Jeongwoo Park",
  role: "Professor",
  email: "jeffjw@g.skku.edu",
  photo: "members/jeongwoo-park.jpg",
  photoAlt: "Jeongwoo Park portrait",
  interests: ["Digital VLSI", "Intelligent accelerators", "Neuromorphic systems"],
};

export const phdStudents: Member[] = [
  {
    name: "Seungheon Baek",
    role: "PhD / Combined MS-PhD Student",
    email: "qwdqwd00@g.skku.edu",
    photo: "members/seungheon-baek.jpg",
    photoAlt: "Seungheon Baek portrait",
    interests: ["Neuromorphic Systems"],
    portfolioUrl: "",
  },
  {
    name: "Jongyeop Kim",
    role: "PhD / Combined MS-PhD Student",
    email: "jondyp03@g.skku.edu",
    photo: "members/jongyeop-kim.jpg",
    photoAlt: "Jongyeop Kim portrait",
    interests: ["Accelerator for Transformers", "Neuromorphic Systems"],
    portfolioUrl: "",
  },
  {
    name: "Jinhyeong Park",
    role: "PhD / Combined MS-PhD Student",
    email: "irudajin@g.skku.edu",
    photo: "members/jinhyeong-park.jpg",
    photoAlt: "Jinhyeong Park portrait",
    interests: ["Network-on-Chip", "AI Accelerators"],
    portfolioUrl: "",
  },
  {
    name: "Younggil Jeong",
    role: "PhD / Combined MS-PhD Student",
    email: "j168816@g.skku.edu",
    photo: "members/younggil-jeong.jpg",
    photoAlt: "Younggil Jeong portrait",
    interests: ["Network-on-Chip", "AI Accelerators"],
    portfolioUrl: "",
  },
  {
    name: "Beomjin Kim",
    role: "PhD / Combined MS-PhD Student",
    email: "kimb@g.skku.edu",
    interests: ["Neuromorphic Systems"],
    portfolioUrl: "",
  },
  {
    name: "Wonjong Park",
    role: "PhD / Combined MS-PhD Student",
    email: "dnjswhd71@g.skku.edu",
    interests: ["Network-on-Chip"],
    portfolioUrl: "",
  },
];

export const msStudents: Member[] = [
  {
    name: "Kyuseok Nam",
    role: "MS Student",
    email: "nam.kyuseok@g.skku.edu",
    interests: ["Accelerating Generative AI"],
  },
  {
    name: "Donghyun Nam",
    role: "MS Student",
    email: "nam3918@g.skku.edu",
    photo: "members/donghyun-nam.jpg",
    photoAlt: "Donghyun Nam portrait",
    interests: ["Neural Processing Unit"],
  },
  {
    name: "Jaeyoung Gong",
    role: "MS Student",
    email: "danieljk1119@gmail.com",
    photo: "members/jaeyoung-gong.jpg",
    photoAlt: "Jaeyoung Gong portrait",
    interests: ["Neural Processing Unit"],
  },
  {
    name: "Sanghoo Lee",
    role: "MS Student",
    email: "tkdgn2907@gmail.com",
    photo: "members/sanghoo-lee.jpg",
    photoAlt: "Sanghoo Lee portrait",
    interests: ["ML-based VLSI Design"],
  },
  {
    name: "Sungan Park",
    role: "MS Student",
    email: "psa1582@g.skku.edu",
    interests: ["Neural Processing Unit"],
  },
];

export const alumni = [
  "Seungho Lee (Master) - Currently @ Hyundai Motors",
  "Inkyo Lee (Master) - Currently @ FADU",
  "Hyukjun Kwon (Master) - Currently @ MOBILINT",
];
