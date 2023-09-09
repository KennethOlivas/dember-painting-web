import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/images/gallery/door-before.webp",
    original: "/images/gallery/door-before.webp",
    width: 720,
    height: 960,
    tags: [
      { value: "Interior", title: "Interior" },
      { value: "Before", title: "Before" },
    ],
    caption: "Before",
  },
  {
    src: "/images/gallery/door-after.webp",
    original: "/images/gallery/door-after.webp",
    width: 720,
    height: 960,
    tags: [
      { value: "Interior", title: "Interior" },
      { value: "After", title: "After" },
    ],
    caption: "After",
  },
  {
    src: "/images/gallery/fence_before.webp",
    original: "/images/gallery/fence_before.webp",
    width: 720,
    height: 960,
    tags: [
      { value: "Exterior", title: "Exterior" },
      { value: "Before", title: "Before" },
    ],
    caption: "Before",
  },
  {
    src: "/images/gallery/fence_after.webp",
    original: "/images/gallery/fence_after.webp",
    width: 720,
    height: 960,
    tags: [
      { value: "Exterior", title: "Exterior" },
      { value: "After", title: "After" },
    ],
    caption: "After",
  },
  {
    src: "/images/gallery/pink_house_before.webp",
    original: "/images/gallery/pink_house_before.webp",
    width: 1536,
    height: 2048,
    tags: [
      { value: "Exterior", title: "Exterior" },
      { value: "Before", title: "Before" },
    ],
    caption: "Before",
  },
  {
    src: "/images/gallery/pink_house_after.webp",
    original: "/images/gallery/pink_house_after.webp",
    width: 1536,
    height: 2048,
    tags: [
      { value: "Exterior", title: "Exterior" },
      { value: "After", title: "After" },
    ],
    caption: "After",
  },
];
