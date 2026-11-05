# ApnaTrail — Discover Beyond the Usual
### Hackathon Prototype for Theme: "Explore Local"

**ApnaTrail** is an AI-powered local tourism discovery and personalized itinerary-planning web application designed to solve a core problem in modern travel: travelers struggle to discover authentic, off-the-beaten-path local attractions, hidden heritage, community crafts, and budget-friendly cultural experiences.

This prototype is seeded with comprehensive, realistic data for **Sonipat, Haryana, India** (the ancient *Swarnaprastha* along the historic Grand Trunk Road corridor).

---

## 🌟 Key Features

1. **Local Destination Directory & Hidden Gems**
   - Rich destination cards covering Mughal-Pathan stone tombs, Sufi shrines, the iconic Murthal highway dhabas, Olympic wrestling akhadas, Western Yamuna Canal falls, and rural terracotta pottery hamlets.
   - Estimated costs in INR, visit durations, ratings, local Hindi names, and tags.
   - Reliable imagery with graceful fallback gradients.

2. **Smart Search & Multi-Tier Filters**
   - Instant search across destination names, local names, addresses, descriptions, and interest tags.
   - Category filtering (Heritage, Culinary & Dhabas, Sacred & Sufi, Nature & Serenity, Amusement & Fun, Crafts & Bazaars, Akhadas).
   - Budget presets (Free ₹0, Under ₹100, Under ₹400, ₹400+).
   - Multi-select interest badges (History & Architecture, Authentic Food, Photography, Offbeat, Peace, Family, etc.).
   - One-click "Hidden Gems Only ✨" filter and multiple sorting options (Rating, Price Low/High, Duration, Proximity).

3. **Personalized "AI Trip Planner" (Deterministic Engine)**
   - **Zero paid APIs / API keys required**: Operates 100% reliably in offline-first mode using a heuristic recommendation and route optimization algorithm.
   - Balances user interests (+30 pts per tag), budget constraints, visit pace (Relaxed, Balanced, Fast-Paced), and transit times.
   - Generates a chronological timeline with realistic time slots (e.g. `09:30 AM – 11:00 AM`), transit distance/duration between consecutive stops, and AI recommendation rationale badges.
   - Live itinerary modification: Remove stops, or add from the suggested alternatives shelf.
   - Export tools: Copy formatted summary for WhatsApp/Notes, or print/export to PDF.

4. **Deep Cultural & Historical Insights**
   - Full destination modal with cultural significance, chronicle notes, visitor tips checklist, cost breakdowns, and direct Google Maps directions.
   - Dedicated **Culture & Flavors** section highlighting Murthal tandoori paranthas with fresh white butter, Old Sonipat Shahi Ghevar, traditional akhada pehlwani, and responsible travel etiquette.

5. **Nearby Discovery with Geolocation & Manual Landmark Fallbacks**
   - Browser geolocation via `navigator.geolocation` with permission handling.
   - If denied or unavailable, users can select any local landmark (City Center Subhash Chowk, Railway Station, Murthal Flyover, Rai, Kundli) to calculate real distances. Never requires location permission to use the app.

6. **Wishlist & Saved Trails**
   - Bookmark favorite spots with persistence in `localStorage`.
   - Slide-over wishlist drawer with cumulative cost, time calculations, and direct "Build Itinerary From Saved" action.

---

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** with custom warm earthy palette (`trail`, `ochre`, `sage`)
- **Lucide React** for modern iconography
- **Canvas Confetti** for delightful celebration feedback
- Browser Geolocation & LocalStorage APIs

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
Preview production build:
```bash
npm run preview
```
