export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryEvent = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  location?: string;
  summary: string;
  cover?: string;
  images: GalleryImage[];
};

export const galleryEvents: GalleryEvent[] = [
  {
    slug: "asp-dac-2026-01",
    title: "ASP-DAC 2026",
    date: "2026-01-01",
    dateLabel: "2026.01",
    location: "Macao, China",
    summary:
      "Conference travel moments from ASP-DAC 2026 with IDS Lab members.",
    cover: "gallery/2026/asp-dac-2026-01.jpg",
    images: [
      {
        src: "gallery/2026/asp-dac-2026-01.jpg",
        alt: "IDS Lab members during ASP-DAC 2026 in Macao",
        caption: "IDS Lab members at ASP-DAC 2026 in Macao.",
      },
    ],
  },
];
