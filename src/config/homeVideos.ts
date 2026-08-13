export type HomeVideo = {
  id: string;
  src: string;
  poster?: string;
  label: string;
};

export const homeVideos: HomeVideo[] = [
  {
    id: "page-greenway-home",
    label: "Green Way International home video",
    src: "/videos/home/page-greenway.mp4",
  },
];
