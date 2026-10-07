/**
 * Centralized Image System for Abhideep Harihar Sandwich
 * Replace paths here to update brand photography across the entire application.
 */

export const BRAND_IMAGES = {
  // Brand Logo & Mascot
  logo: "/images/logo/profile.jpg",
  mascotHeader: "/images/logo/mascot-header.svg",
  mascotCircle: "/images/logo/mascot-circle.svg",

  // Hero Section
  heroSandwich: "/images/hero/hero-right.png",

  // Why Harihar Feature Badges
  featureIngredients: "/images/why/fresh-ingredients.jpg",
  featureTaste: "/images/why/signature-taste.jpg",
  featureService: "/images/why/fast-service.jpg",
  featureFranchise: "/images/why/franchise-ready.jpg",

  // Signature Experience Editorial
  signatureCloseUp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-Hy8pF4O9vyISU-FcYq6i_eEHfJttXUOFm3oQBgeolZeCVOtLEQ74PY&s=10",

  // Menu Items
  menu: {
    classicVeg: "/images/menu/tClassic_Veg_Grill.jpg",
    tandooriPaneer: "/images/menu/tandoori_paneer_sandwitch.jpeg",
    cornCheese: "/images/menu/Corn_Cheese_Delight.jpeg",
    chickenFiesta: "/images/menu/Chicken_Fiesta.webp",
    specialClub: "/images/menu/harihar-special-club.jpg",
    schezwanVeg: "/images/menu/schezwan-veg-blast.jpg",
    pestoPaneer: "/images/menu/pesto-paneer-grill.jpg",
    bbqChicken: "/images/menu/bbq-chicken-loaded.jpg",
  },

  // Locations
  locations: {
    mpNagar: "/images/locations/mp-nagar.jpg",
    ttNagar: "/images/locations/tt-nagar.jpg",
    kolarRoad: "/images/locations/kolar-road.jpg",
    indore: "/images/locations/indore.jpg",
    mapIllustration: "/images/locations/bhopal-map.png",
  },

  // Instagram Profile & Reels (#HariharMoments)
  // Note: To use a local MP4 video file, put your video inside public/videos/ (e.g. public/videos/reel1.mp4)
  // and set `videoUrl: "/videos/reel1.mp4"`.
  // You can set `thumbnailTimestamp: 1.5` to pick an exact second frame from the video as thumbnail!
  instagramProfile: "https://www.instagram.com/harihar_sandwich/",
  reels: [
    {
      id: "Dcf69H4O8Yl",
      url: "https://www.instagram.com/reel/Dcf69H4O8Yl/",
      embedUrl: "https://www.instagram.com/reel/Dcf69H4O8Yl/embed",
      title: "Signature Loaded Sandwich | #HariharMoments",
      thumbnail: "/images/gallery/gallery-1.svg",
      videoUrl: "", // e.g. "/videos/reel1.mp4"
      thumbnailTimestamp: 0.5, // exact timestamp frame in seconds
    },
    {
      id: "DcVp4DStq2B",
      url: "https://www.instagram.com/reel/DcVp4DStq2B/",
      embedUrl: "https://www.instagram.com/reel/DcVp4DStq2B/embed",
      title: "Cheese Pull Perfection | Abhideep Harihar",
      thumbnail: "/images/gallery/gallery-3.svg",
      videoUrl: "", // e.g. "/videos/reel2.mp4"
      thumbnailTimestamp: 1.0,
    },
    {
      id: "Dd1s_NRTqkN",
      url: "https://www.instagram.com/reel/Dd1s_NRTqkN/",
      embedUrl: "https://www.instagram.com/reel/Dd1s_NRTqkN/embed",
      title: "Freshly Grilled Everyday | Bhopal Outlet",
      thumbnail: "/images/gallery/gallery-2.svg",
      videoUrl: "", // e.g. "/videos/reel3.mp4"
      thumbnailTimestamp: 0.5,
    },
    {
      id: "DdJQH31qwqU",
      url: "https://www.instagram.com/reel/DdJQH31qwqU/",
      embedUrl: "https://www.instagram.com/reel/DdJQH31qwqU/embed",
      title: "Street Style Sandwich Craze",
      thumbnail: "/images/gallery/gallery-4.svg",
      videoUrl: "", // e.g. "/videos/reel4.mp4"
      thumbnailTimestamp: 0.5,
    },
    {
      id: "Dc-Uk0wKvca",
      url: "https://www.instagram.com/reel/Dc-Uk0wKvca/",
      embedUrl: "https://www.instagram.com/reel/Dc-Uk0wKvca/embed",
      title: "Real People. Real Happiness.",
      thumbnail: "/images/gallery/gallery-5.svg",
      videoUrl: "", // e.g. "/videos/reel5.mp4"
      thumbnailTimestamp: 0.5,
    },
  ],

  gallery: [
    { id: 1, src: "/images/gallery/gallery-1.svg", alt: "Freshly poured Harihar sauce on grilled sandwich" },
    { id: 2, src: "/images/gallery/gallery-2.svg", alt: "Abhideep Harihar Sandwich MP Nagar outlet crowd" },
    { id: 3, src: "/images/gallery/gallery-3.svg", alt: "Loaded paneer sandwich cheese pull" },
    { id: 4, src: "/images/gallery/gallery-4.svg", alt: "Happy friends enjoying Harihar sandwiches" },
    { id: 5, src: "/images/gallery/gallery-5.svg", alt: "Signature grilled sandwich tray with fries & dips" },
  ],
};
