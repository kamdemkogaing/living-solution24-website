import {
  Building2,
  Construction,
  Grid3X3,
  Hammer,
  Home,
  PaintRoller,
  Truck,
  Upload,
  Zap,
} from "lucide-react";

export const services = [
  {
    title: "Abbrucharbeiten",
    text: "Fachgerechter Rückbau & Entsorgung.",
    icon: Truck,
    images: [
      "/images/services/abbruch/abbruch-1.webp",
      "/images/services/abbruch/abbruch-2.webp",
      "/images/services/abbruch/abbruch-3.webp",
    ],
  },

  {
    title: "Sanierung",
    text: "Komplette Sanierungen von Alt- und Neubauten.",
    icon: Home,
    images: [
      "/images/services/sanierung/sanierung-1.webp",
      "/images/services/sanierung/sanierung-2.webp",
      "/images/services/sanierung/sanierung-3.webp",
    ],
  },

  {
    title: "Renovierung",
    text: "Renovierungen aller Art, sauber & zuverlässig.",
    icon: PaintRoller,
    images: [
      "/images/services/renovierung/renovierung-1.webp",
      "/images/services/renovierung/renovierung-2.webp",
      "/images/services/renovierung/renovierung-3.webp",
    ],
  },

  {
    title: "Trockenbau",
    text: "Moderne Trockenbaulösungen für Ihr Zuhause.",
    icon: Building2,
    images: [
      "/images/services/trockenbau/trockenbau-1.webp",
      "/images/services/trockenbau/trockenbau-2.webp",
      "/images/services/trockenbau/trockenbau-3.webp",
    ],
  },

  {
    title: "Malerarbeiten",
    text: "Professionelle Malerarbeiten innen & außen.",
    icon: PaintRoller,
    images: [
      "/images/services/malerarbeiten/malerarbeiten-1.webp",
      "/images/services/malerarbeiten/malerarbeiten-2.webp",
      "/images/services/malerarbeiten/malerarbeiten-3.webp",
    ],
  },

  {
    title: "Bodenverlegung",
    text: "Laminat, Vinyl, Fliesen und mehr.",
    icon: Grid3X3,
    images: [
      "/images/services/bodenverlegung/boden-1.webp",
      "/images/services/bodenverlegung/boden-2.webp",
      "/images/services/bodenverlegung/boden-3.webp",
    ],
  },

  {
    title: "Fassadenarbeiten",
    text: "Fassadenanstriche & Wärmedämmung.",
    icon: Construction,
    images: [
      "/images/services/fassadenarbeiten/fassade-1.webp",
      "/images/services/fassadenarbeiten/fassade-2.webp",
      "/images/services/fassadenarbeiten/fassade-3.webp",
    ],
  },

  {
    title: "Innenausbau",
    text: "Individueller Innenausbau nach Wunsch.",
    icon: Hammer,
    images: [
      "/images/services/innenausbau/innenausbau-1.webp",
      "/images/services/innenausbau/innenausbau-2.webp",
      "/images/services/innenausbau/innenausbau-3.webp",
    ],
  },

  {
    title: "Elektrikarbeiten",
    text: "Professionelle Elektroinstallationen & moderne Stromlösungen.",
    icon: Zap,
    images: [
      "/images/services/elektrikarbeiten/elektrik-1.webp",
      "/images/services/elektrikarbeiten/elektrik-2.webp",
      "/images/services/elektrikarbeiten/elektrik-3.webp",
      "/images/services/elektrikarbeiten/elektrik-4.webp",
    ],
  },

  {
    title: "Projektbilder hochladen",
    text: "Unsere Bilder von Baustelle oder Projekt hinzufügen.",
    icon: Upload,
    images: [],
    upload: true,
  },
];
