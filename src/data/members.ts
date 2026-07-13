export type Member = {
  name: string;
  role: string;
  email?: string;
  interests?: string[];
  photo?: string;
  photoAlt?: string;
};

export const professor: Member = {
  name: "Jeongwoo Park",
  role: "Professor",
  email: "jeffjw@g.skku.edu",
  interests: ["Digital VLSI", "Intelligent accelerators", "Neuromorphic systems"],
};

export const phdStudents: Member[] = [
  {
    name: "Seungheon Baek",
    role: "PhD / Combined MS-PhD Student",
    email: "qwdqwd00@g.skku.edu",
    interests: ["Neuromorphic Systems"],
  },
  {
    name: "Kyuseok Nam",
    role: "PhD / Combined MS-PhD Student",
    email: "nam.kyuseok@g.skku.edu",
    interests: ["Accelerating Generative AI"],
  },
  {
    name: "Jongyeop Kim",
    role: "PhD / Combined MS-PhD Student",
    email: "jondyp03@g.skku.edu",
    interests: ["Accelerator for Transformers", "Neuromorphic Systems"],
  },
  {
    name: "Jinhyeong Park",
    role: "PhD / Combined MS-PhD Student",
    email: "irudajin@g.skku.edu",
    interests: ["Network-on-Chip", "AI Accelerators"],
  },
  {
    name: "Younggil Jeong",
    role: "PhD / Combined MS-PhD Student",
    email: "j168816@g.skku.edu",
    interests: ["Network-on-Chip", "AI Accelerators"],
  },
  {
    name: "Beomjin Kim",
    role: "PhD / Combined MS-PhD Student",
    email: "kimb@g.skku.edu",
    interests: ["Neural Processing Unit"],
  },
  {
    name: "Wonjong Park",
    role: "PhD / Combined MS-PhD Student",
    email: "dnjswhd71@g.skku.edu",
    interests: ["Network-on-Chip"],
  },
];

export const msStudents: Member[] = [
  {
    name: "Inkyo Lee",
    role: "MS Student",
    email: "lik0712@g.skku.edu",
    interests: ["Neural Processing Unit"],
  },
  {
    name: "Donghyun Nam",
    role: "MS Student",
    email: "nam3918@g.skku.edu",
    interests: ["Neural Processing Unit"],
  },
  {
    name: "Hyukjun Kwon",
    role: "MS Student",
    email: "hyukjun@skku.edu",
    interests: ["Accelerator for 3DGS SLAM"],
  },
  {
    name: "Jaeyoung Gong",
    role: "MS Student",
    email: "danieljk1119@gmail.com",
    interests: ["Neural Processing Unit"],
  },
  {
    name: "Sanghoo Lee",
    role: "MS Student",
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
];
