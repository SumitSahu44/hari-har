export interface StoreLocation {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  status: "Open" | "Coming Soon";
  phone: string;
  timing: string;
  image: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const LOCATIONS: StoreLocation[] = [
  {
    id: "mp-nagar-bhopal",
    name: "MP Nagar Outlet",
    area: "MP Nagar",
    city: "Bhopal",
    address: "Plot No. 12, Zone - 1, MP Nagar, Bhopal, Madhya Pradesh 462011",
    status: "Open",
    phone: "+91 98765 43210",
    timing: "11:00 AM - 11:00 PM",
    image: "/images/locations/mp-nagar.jpg",
    googleMapsUrl: "https://maps.google.com",
    coordinates: { lat: 23.2332, lng: 77.4343 },
  },
  {
    id: "tt-nagar-bhopal",
    name: "TT Nagar Outlet",
    area: "TT Nagar",
    city: "Bhopal",
    address: "Shop No. 45, Near TT Nagar Market, Bhopal, Madhya Pradesh 462003",
    status: "Open",
    phone: "+91 98765 43211",
    timing: "11:00 AM - 11:30 PM",
    image: "/images/locations/tt-nagar.jpg",
    googleMapsUrl: "https://maps.google.com",
    coordinates: { lat: 23.2389, lng: 77.4012 },
  },
  {
    id: "kolar-road-bhopal",
    name: "Kolar Road Outlet",
    area: "Kolar Road",
    city: "Bhopal",
    address: "Unit 3, City Centre Mall, Kolar Road, Bhopal, Madhya Pradesh 462042",
    status: "Open",
    phone: "+91 98765 43212",
    timing: "11:00 AM - 11:00 PM",
    image: "/images/locations/kolar-road.jpg",
    googleMapsUrl: "https://maps.google.com",
    coordinates: { lat: 23.1894, lng: 77.4231 },
  },
  {
    id: "indore-vijay-nagar",
    name: "Vijay Nagar Outlet",
    area: "Vijay Nagar",
    city: "Indore",
    address: "Main Food Street, Vijay Nagar, Indore, Madhya Pradesh",
    status: "Coming Soon",
    phone: "+91 98765 43213",
    timing: "Opening Q4 2026",
    image: "/images/locations/indore.jpg",
    googleMapsUrl: "https://maps.google.com",
    coordinates: { lat: 22.7533, lng: 75.8937 },
  },
];
