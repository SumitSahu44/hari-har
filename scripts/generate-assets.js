const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/logo',
  'public/images/hero',
  'public/images/why',
  'public/images/menu',
  'public/images/locations',
  'public/images/gallery',
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(process.cwd(), d), { recursive: true });
});

// Helper SVG Food Generator
function createFoodSvg(title, subtitle, bgColor = '#075B3A', accentColor = '#FFC928') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor}" />
      <stop offset="100%" stop-color="#06452D" />
    </linearGradient>
    <linearGradient id="cheese" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFC928" />
      <stop offset="100%" stop-color="#F5B91E" />
    </linearGradient>
    <linearGradient id="bread" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="50%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Background Surface -->
  <rect width="800" height="600" fill="url(#bg)" />
  
  <!-- Wooden Board Surface -->
  <ellipse cx="400" cy="460" rx="340" ry="100" fill="#291D18" opacity="0.6" filter="url(#shadow)" />
  <ellipse cx="400" cy="450" rx="320" ry="90" fill="#452A1C" />

  <!-- Layered Sandwich Visual -->
  <g transform="translate(400, 310)" filter="url(#shadow)">
    <!-- Bottom Toast -->
    <path d="M -220 40 Q 0 80 220 40 L 200 80 Q 0 120 -200 80 Z" fill="url(#bread)" />
    <path d="M -210 30 Q 0 70 210 30 L 220 40 Q 0 80 -220 40 Z" fill="#FDE68A" />

    <!-- Veggies & Sauce Layers -->
    <!-- Melted Cheese Layer -->
    <path d="M -200 25 Q -100 45 0 20 Q 100 50 200 25 L 210 35 Q 110 65 0 35 Q -110 55 -210 35 Z" fill="url(#cheese)" />
    <!-- Fresh Tomatoes -->
    <circle cx="-120" cy="15" r="18" fill="#EF4444" />
    <circle cx="-30" cy="22" r="16" fill="#EF4444" />
    <circle cx="80" cy="18" r="18" fill="#EF4444" />
    <circle cx="150" cy="12" r="14" fill="#EF4444" />

    <!-- Fresh Capsicum / Green Chutney -->
    <path d="M -160 10 Q -110 -5 -60 12 Q 10 -8 70 10 Q 120 -5 170 8" stroke="#16A34A" stroke-width="12" stroke-linecap="round" fill="none" />
    
    <!-- Grilled Paneer / Chicken Cubes -->
    <rect x="-140" y="-10" width="35" height="25" rx="5" fill="#FEF08A" stroke="#CA8A04" stroke-width="2" />
    <rect x="-40" y="-15" width="40" height="28" rx="5" fill="#FEF08A" stroke="#CA8A04" stroke-width="2" />
    <rect x="50" y="-12" width="38" height="26" rx="5" fill="#FEF08A" stroke="#CA8A04" stroke-width="2" stroke-dasharray="4 2" />

    <!-- Middle Toast Layer -->
    <path d="M -215 -10 Q 0 25 215 -10 L 205 5 Q 0 45 -205 5 Z" fill="url(#bread)" />
    <path d="M -210 -18 Q 0 15 210 -18 L 215 -10 Q 0 25 -215 -10 Z" fill="#FDE68A" />

    <!-- Top Filling & Cheese Drizzle -->
    <path d="M -190 -25 Q -90 -5 0 -30 Q 90 -5 190 -25 L 200 -15 Q 100 8 0 -18 Q -100 10 -200 -15 Z" fill="url(#cheese)" />

    <!-- Top Toast Layer with Grill Marks -->
    <path d="M -210 -60 Q 0 -20 210 -60 L 200 -30 Q 0 10 -200 -30 Z" fill="url(#bread)" />
    
    <!-- Grill Marks -->
    <line x1="-150" y1="-55" x2="-120" y2="-35" stroke="#451A03" stroke-width="6" stroke-linecap="round" />
    <line x1="-90" y1="-52" x2="-60" y2="-30" stroke="#451A03" stroke-width="6" stroke-linecap="round" />
    <line x1="-30" y1="-48" x2="0" y2="-28" stroke="#451A03" stroke-width="6" stroke-linecap="round" />
    <line x1="30" y1="-48" x2="60" y2="-28" stroke="#451A03" stroke-width="6" stroke-linecap="round" />
    <line x1="90" y1="-52" x2="120" y2="-32" stroke="#451A03" stroke-width="6" stroke-linecap="round" />
    <line x1="150" y1="-56" x2="175" y2="-36" stroke="#451A03" stroke-width="6" stroke-linecap="round" />
  </g>

  <!-- Title & Subtitle Badge -->
  <rect x="50" y="40" width="300" height="60" rx="30" fill="${accentColor}" />
  <text x="70" y="76" font-family="sans-serif" font-weight="900" font-size="22" fill="#06452D">${title}</text>
  <text x="400" y="550" font-family="sans-serif" font-weight="700" font-size="20" fill="#FFF9E9" text-anchor="middle">${subtitle}</text>
</svg>`;
}

// Generate Menu SVGs
const menuItems = [
  { name: 'classic-veg-grill', title: 'Classic Veg Grill', price: '₹89' },
  { name: 'tandoori-paneer-blast', title: 'Tandoori Paneer Blast', price: '₹119' },
  { name: 'corn-cheese-delight', title: 'Corn Cheese Delight', price: '₹109' },
  { name: 'chicken-fiesta', title: 'Chicken Fiesta', price: '₹139' },
  { name: 'harihar-special-club', title: 'Harihar Special Club', price: '₹149' },
  { name: 'schezwan-veg-blast', title: 'Schezwan Veg Blast', price: '₹99' },
  { name: 'pesto-paneer-grill', title: 'Pesto Paneer Grill', price: '₹129' },
  { name: 'bbq-chicken-loaded', title: 'BBQ Chicken Loaded', price: '₹159' },
];

menuItems.forEach(item => {
  const svgContent = createFoodSvg(item.title, `Loaded & Fresh • ${item.price}`, '#075B3A', '#FFC928');
  fs.writeFileSync(path.join(process.cwd(), `public/images/menu/${item.name}.jpg`), svgContent);
});

// Hero Sandwich
fs.writeFileSync(
  path.join(process.cwd(), 'public/images/hero/hero-sandwich.jpg'),
  createFoodSvg("BHOPAL'S FAVOURITE", "100% Fresh • Grilled • Loaded", '#075B3A', '#FFC928')
);

// Signature Close Up
fs.writeFileSync(
  path.join(process.cwd(), 'public/images/hero/signature-close-up.jpg'),
  createFoodSvg("SIGNATURE EXPERIENCE", "Layers of Freshness & Taste", '#06452D', '#FFC928')
);

// Why Section
const whyItems = ['fresh-ingredients', 'signature-taste', 'fast-service', 'franchise-ready'];
whyItems.forEach(item => {
  fs.writeFileSync(
    path.join(process.cwd(), `public/images/why/${item}.jpg`),
    createFoodSvg(item.replace('-', ' ').toUpperCase(), 'Harihar Quality', '#188A4A', '#FFC928')
  );
});

// Locations
const locItems = ['mp-nagar', 'tt-nagar', 'kolar-road', 'indore'];
locItems.forEach(item => {
  fs.writeFileSync(
    path.join(process.cwd(), `public/images/locations/${item}.jpg`),
    createFoodSvg(item.replace('-', ' ').toUpperCase(), 'Visit Harihar Outlet', '#075B3A', '#FFC928')
  );
});

// Gallery
for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(
    path.join(process.cwd(), `public/images/gallery/gallery-${i}.jpg`),
    createFoodSvg(`#HariharMoments ${i}`, 'Real Food. Real Happiness.', '#06452D', '#FFC928')
  );
}

// Map SVG
const mapSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <rect width="600" height="400" fill="#F8F4E8" rx="20" />
  
  <!-- Roads & Grid Lines -->
  <path d="M 50 200 Q 300 150 550 220" stroke="#E2E8F0" stroke-width="16" fill="none" />
  <path d="M 200 50 Q 250 200 300 350" stroke="#E2E8F0" stroke-width="12" fill="none" />
  <path d="M 400 50 Q 380 200 450 350" stroke="#E2E8F0" stroke-width="10" fill="none" />
  
  <!-- Lake/River Accent (Bhopal Lakes) -->
  <path d="M 50 100 Q 150 80 220 140 Q 180 220 80 180 Z" fill="#93C5FD" opacity="0.4" />
  <text x="120" y="140" font-family="sans-serif" font-weight="700" font-size="12" fill="#1E40AF">Upper Lake, Bhopal</text>

  <!-- Outlet Pins -->
  <!-- MP Nagar Pin -->
  <g transform="translate(320, 180)">
    <circle cx="0" cy="0" r="28" fill="#FFC928" stroke="#075B3A" stroke-width="4" />
    <circle cx="0" cy="0" r="10" fill="#075B3A" />
    <rect x="-45" y="-50" width="90" height="24" rx="12" fill="#075B3A" />
    <text x="0" y="-34" font-family="sans-serif" font-weight="800" font-size="11" fill="#FFF9E9" text-anchor="middle">MP Nagar</text>
  </g>

  <!-- TT Nagar Pin -->
  <g transform="translate(220, 240)">
    <circle cx="0" cy="0" r="22" fill="#188A4A" stroke="#FFF" stroke-width="3" />
    <circle cx="0" cy="0" r="8" fill="#FFF" />
    <rect x="-40" y="-42" width="80" height="22" rx="11" fill="#188A4A" />
    <text x="0" y="-27" font-family="sans-serif" font-weight="700" font-size="10" fill="#FFF" text-anchor="middle">TT Nagar</text>
  </g>

  <!-- Kolar Road Pin -->
  <g transform="translate(420, 280)">
    <circle cx="0" cy="0" r="22" fill="#188A4A" stroke="#FFF" stroke-width="3" />
    <circle cx="0" cy="0" r="8" fill="#FFF" />
    <rect x="-45" y="-42" width="90" height="22" rx="11" fill="#188A4A" />
    <text x="0" y="-27" font-family="sans-serif" font-weight="700" font-size="10" fill="#FFF" text-anchor="middle">Kolar Road</text>
  </g>

  <!-- Main Pin Highlight (Bhopal - Our Home) -->
  <g transform="translate(320, 120)">
    <path d="M 0 0 C -25 -30, -25 -60, 0 -60 C 25 -60, 25 -30, 0 0 Z" fill="#075B3A" stroke="#FFC928" stroke-width="3" />
    <circle cx="0" cy="-40" r="14" fill="#FFC928" />
    <text x="0" y="-80" font-family="sans-serif" font-weight="900" font-size="14" fill="#075B3A" text-anchor="middle">Bhopal (Our Home)</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/locations/bhopal-map.svg'), mapSvg);

console.log('Assets created successfully!');
