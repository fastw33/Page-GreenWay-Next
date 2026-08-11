export type HomeVideo = {
  id: string;
  src: string;
  poster?: string;
  label: string;
};

export const homeVideos: HomeVideo[] = [
  {
    id: "greenway-home-hero",
    label: "Greenway International home video",
    poster: "/videos/home/greenway-home-hero-poster.jpg",
    src: "/videos/home/greenway-home-hero.mp4",
  },
];
