import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Users,
    MapPin,
    Award,
    Check,
    Minus,
    Plus,
    ArrowRight,
    Star,
    Compass,
    Sparkles,
    Ship,
    Home,
    ShieldCheck,
    Calendar,
    Landmark,
    X,
    CheckCircle,
    Wine,
    Utensils,
    Heart,
    Gift,
    Building2,
    Flower2,
    Leaf,
    Snowflake,
    Sun,
    BadgePercent,
    Wallet,
    FileText,
    Plane,
    Bell,
    Palette,
    Camera,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Bordeaux River Cruise photography
   once available. Paths assume a new /assets/ScenicBordeaux folder. */
// import HeroImage from "../../assets/ScenicBordeaux/scenic-bordeaux-hero.jpg";
// import SaintEmilionImage from "../../assets/ScenicBordeaux/scenic-bordeaux-saint-emilion.jpg";
// import CabinImage from "../../assets/ScenicBordeaux/scenic-bordeaux-suite.jpg";
// import FinalImage from "../../assets/ScenicBordeaux/scenic-bordeaux-final.jpg";

import { Helmet } from "react-helmet-async";
import "../riversidecruises/RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../riversidecruises/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.tripsandships.com/#organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        },
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#travelagency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            description:
                "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
        },
        {
            "@type": "Person",
            "@id": "https://www.tripsandships.com/#person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/bordeaux/#webpage",
            name: "Scenic Bordeaux River Cruises (2026) | Wine, Bordeaux & Best Itineraries",
            url: "https://www.tripsandships.com/scenic-river-cruises/bordeaux/",
            description:
                "Explore Scenic Bordeaux River Cruises through France's legendary wine region. Discover Bordeaux, Saint-Émilion, Médoc, the Garonne, Dordogne, French cuisine, excursions, cabins, costs and the best time to sail.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/bordeaux/#article",
            headline: "Scenic Bordeaux River Cruises: The Complete Guide",
            description:
                "A complete guide to Scenic Bordeaux River Cruises, including Bordeaux, Saint-Émilion, Médoc, Blaye, Cadillac, Libourne, the Garonne and Dordogne rivers, French wine and cuisine, cabins, cost, and how to choose the right sailing.",
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/bordeaux/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.tripsandships.com/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Scenic Bordeaux River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/bordeaux/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/bordeaux/#itemlist",
            name: "Scenic Bordeaux River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Bordeaux River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Do Scenic Bordeaux Cruises Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Bordeaux River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time for a Scenic Bordeaux River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Bordeaux Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Bordeaux Cruise for Wine Lovers" },
                { "@type": "ListItem", position: 8, name: "Cabins & Butler Service" },
                { "@type": "ListItem", position: 9, name: "Food, History & Châteaux" },
                { "@type": "ListItem", position: 10, name: "Couples & Families" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/bordeaux/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Scenic Bordeaux River Cruise itinerary?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For first-time visitors, an itinerary combining Bordeaux with Saint-Émilion, Médoc, Blaye, Libourne, and surrounding wine country can provide a strong introduction to the region. Exact destinations vary by sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for a Bordeaux River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is a strong option for travelers looking for a luxury, all-inclusive river cruise with destination-focused experiences and personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Bordeaux wine cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic Bordeaux itineraries are particularly well suited to wine-focused travel, with opportunities to explore Bordeaux's famous wine-producing regions and surrounding destinations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Bordeaux cruise visit Saint-Émilion?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Some Scenic Bordeaux itineraries include Saint-Émilion or experiences in the surrounding wine region. Check the exact sailing before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic visit Médoc?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Médoc is featured on selected Bordeaux itineraries and excursions. Exact availability varies by sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What rivers does a Scenic Bordeaux cruise use?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Bordeaux itineraries can incorporate the Garonne and Dordogne rivers and the surrounding waterways of southwestern France, depending on the itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time for a Scenic Bordeaux River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, summer, and fall all have advantages. Wine travelers may want to consider the timing of vineyard and harvest activity, while spring and summer can be attractive for scenery and outdoor sightseeing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Bordeaux cruise good for wine lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Bordeaux is one of the world's most important wine regions, making this itinerary particularly attractive to travelers who want wine integrated into their vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Bordeaux cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Wine, French cuisine, historic villages, vineyards, châteaux, and luxury accommodations make Bordeaux particularly appealing for couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Bordeaux cruise good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Families and multigenerational groups can combine history, food, cultural experiences, and sightseeing. Excursion activity levels should be considered when choosing the itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are wine excursions included on a Scenic Bordeaux cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic offers destination experiences as part of its all-inclusive approach, but the exact wine experiences available vary by itinerary. Review the specific sailing before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cabin is best for a Bordeaux cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best suite depends on your priorities. Travelers who enjoy scenic sailing may prefer a suite with a Sun Lounge or another dedicated river-view area.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Butler Service on Bordeaux cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Butler Service is available with eligible Scenic suite categories. The exact service depends on the suite selected.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does a Scenic Bordeaux River Cruise cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Prices vary according to the sailing date, itinerary, suite category, availability, and other travel arrangements. Compare the complete package and inclusions rather than only the starting fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive early for a Scenic Bordeaux River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. International travelers should consider arriving at least one day before embarkation. This gives you a buffer against flight delays and time to explore Bordeaux.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "What is the best Scenic Bordeaux River Cruise itinerary?",
            a: "For first-time visitors, an itinerary combining Bordeaux with Saint-Émilion, Médoc, Blaye, Libourne, and surrounding wine country can provide a strong introduction to the region. Exact destinations vary by sailing.",
        },
        {
            q: "Is Scenic good for a Bordeaux River Cruise?",
            a: "Scenic is a strong option for travelers looking for a luxury, all-inclusive river cruise with destination-focused experiences and personalized service.",
        },
        {
            q: "Does Scenic offer Bordeaux wine cruises?",
            a: "Scenic Bordeaux itineraries are particularly well suited to wine-focused travel, with opportunities to explore Bordeaux's famous wine-producing regions and surrounding destinations.",
        },
        {
            q: "Does a Scenic Bordeaux cruise visit Saint-Émilion?",
            a: "Some Scenic Bordeaux itineraries include Saint-Émilion or experiences in the surrounding wine region. Check the exact sailing before booking.",
        },
        {
            q: "Does Scenic visit Médoc?",
            a: "Médoc is featured on selected Bordeaux itineraries and excursions. Exact availability varies by sailing.",
        },
        {
            q: "What rivers does a Scenic Bordeaux cruise use?",
            a: "Bordeaux itineraries can incorporate the Garonne and Dordogne rivers and the surrounding waterways of southwestern France, depending on the itinerary.",
        },
        {
            q: "What is the best time for a Scenic Bordeaux River Cruise?",
            a: "Spring, summer, and fall all have advantages. Wine travelers may want to consider the timing of vineyard and harvest activity, while spring and summer can be attractive for scenery and outdoor sightseeing.",
        },
        {
            q: "Is a Scenic Bordeaux cruise good for wine lovers?",
            a: "Yes. Bordeaux is one of the world's most important wine regions, making this itinerary particularly attractive to travelers who want wine integrated into their vacation.",
        },
        {
            q: "Is a Scenic Bordeaux cruise good for couples?",
            a: "Yes. Wine, French cuisine, historic villages, vineyards, châteaux, and luxury accommodations make Bordeaux particularly appealing for couples.",
        },
        {
            q: "Is a Scenic Bordeaux cruise good for families?",
            a: "Yes. Families and multigenerational groups can combine history, food, cultural experiences, and sightseeing. Excursion activity levels should be considered when choosing the itinerary.",
        },
        {
            q: "Are wine excursions included on a Scenic Bordeaux cruise?",
            a: "Scenic offers destination experiences as part of its all-inclusive approach, but the exact wine experiences available vary by itinerary. Review the specific sailing before booking.",
        },
        {
            q: "Which Scenic cabin is best for a Bordeaux cruise?",
            a: "The best suite depends on your priorities. Travelers who enjoy scenic sailing may prefer a suite with a Sun Lounge or another dedicated river-view area.",
        },
        {
            q: "Does Scenic offer Butler Service on Bordeaux cruises?",
            a: "Butler Service is available with eligible Scenic suite categories. The exact service depends on the suite selected.",
        },
        {
            q: "How much does a Scenic Bordeaux River Cruise cost?",
            a: "Prices vary according to the sailing date, itinerary, suite category, availability, and other travel arrangements. Compare the complete package and inclusions rather than only the starting fare.",
        },
        {
            q: "Should I arrive early for a Scenic Bordeaux River Cruise?",
            a: "Yes. International travelers should consider arriving at least one day before embarkation. This gives you a buffer against flight delays and time to explore Bordeaux.",
        },
    ];

    return (
        <div className="Asc-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`Asc-faq-item${open === i ? " Asc-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Asc-faq-q">
                        <span>{item.q}</span>
                        <span className="Asc-faq-icon">
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
                        </span>
                    </div>
                    {open === i && (
                        <div className="Asc-faq-a">
                            <div className="Asc-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ── Quick Answer Emphasis Data ────────────────────────────────────── */
const quickAnswerEmphasis = [
    "Wine enthusiasts",
    "Food lovers",
    "Couples",
    "Luxury travelers",
    "First-time river cruisers",
    "Art and architecture enthusiasts",
    "French culture travelers",
    "Multigenerational groups",
    "Travelers celebrating a special occasion",
];

/* ── Why Choose a Scenic Bordeaux Cruise — Variety Data ──────────────── */
const bordeauxVarietyFeatures = [
    "Bordeaux",
    "The Garonne River",
    "The Dordogne River",
    "Saint-Émilion",
    "Médoc",
    "French wine estates",
    "Historic villages & châteaux",
    "French cuisine",
];

/* ── Where Do Scenic Bordeaux Cruises Go — Destinations Data ─────────── */
const bordeauxDestinations = [
    { key: "bordeaux", title: "Bordeaux", items: ["Historic architecture & elegant squares", "Riverfront scenery & French cuisine", "A beautiful introduction to southwestern France"] },
    { key: "saint-emilion", title: "Saint-Émilion", items: ["Historic village surrounded by vineyards", "Churches & medieval architecture", "Wine culture and heritage combined with village atmosphere"] },
    { key: "medoc", title: "Médoc", items: ["Prestigious wine estates & châteaux", "Vineyard, château & terroir", "A deeper look at Bordeaux's most famous wines"] },
    { key: "libourne", title: "Libourne", items: ["Gateway to Dordogne wine country", "Access to surrounding vineyards", "Excursions to nearby wine and cultural experiences"] },
    { key: "blaye", title: "Blaye", items: ["Historic fortress on the Gironde estuary", "French history & architecture", "A welcome change of pace from vineyard excursions"] },
    { key: "cadillac", title: "Cadillac", items: ["French history & châteaux", "Wine and countryside", "Architectural and cultural experiences"] },
    { key: "garonne", title: "The Garonne River", items: ["Central to the Bordeaux cruise experience", "Changing landscapes between major destinations", "Sailing as part of the vacation, not just transportation"] },
    { key: "dordogne", title: "The Dordogne River", items: ["Additional wine-producing areas", "Historic destinations", "A different perspective on southwestern France"] },
];

/* ── Best Bordeaux Itineraries — Tabbed Data ──────────────────────────── */
const bordeauxItineraries = [
    {
        id: "wine-country",
        title: "Bordeaux Wine Country Itinerary",
        badge: "Best Overall",
        icon: Compass,
        desc: "For first-time travelers, look for an itinerary that combines Bordeaux, Saint-Émilion, Médoc, Blaye, Libourne, and surrounding wine country.",
        columns: [
            {
                label: "Best for:",
                items: ["Travelers who want a broad introduction to Bordeaux wine and French culture", "First-time visitors to the region", "A comprehensive overview of southwestern France"],
            },
        ],
    },
    {
        id: "saint-emilion",
        title: "Bordeaux & Saint-Émilion",
        badge: "Wine & Village Life",
        icon: Wine,
        desc: "If your primary interest is wine and French village life, prioritize itineraries with significant time around Saint-Émilion.",
        columns: [
            {
                label: "Best for:",
                items: ["Wine lovers", "Vineyard travelers", "French village enthusiasts"],
            },
        ],
    },
    {
        id: "medoc",
        title: "Bordeaux & Médoc",
        badge: "Estate Focus",
        icon: Landmark,
        desc: "Travelers particularly interested in Bordeaux's famous wine estates may want to prioritize itineraries with strong Médoc programming.",
        columns: [
            {
                label: "Best for:",
                items: ["Serious wine travelers", "Travelers wanting deeper exposure to Bordeaux wine culture"],
            },
        ],
    },
    {
        id: "garonne-dordogne",
        title: "Garonne & Dordogne Experience",
        badge: "Two Rivers",
        icon: Sun,
        desc: "An itinerary incorporating both rivers provides a broader view of southwestern France.",
        columns: [
            {
                label: "Best for:",
                items: ["First-time Bordeaux visitors", "Couples", "Food and wine travelers", "Travelers wanting variety"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const bordeauxSeasons = [
    {
        key: "spring",
        icon: <Flower2 size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        intro: "Spring offers:",
        items: [
            "Green vineyards",
            "Flowers",
            "Moderate temperatures & comfortable sightseeing"
        ],
        outro: "It's an excellent choice for travelers who prioritize scenery and comfortable walking conditions.",
        accent: "adg-accent-teal"
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        intro: "Summer brings:",
        items: [
            "Longer days & outdoor dining",
            "Lush countryside",
            "Extended sightseeing"
        ],
        outro: "It is a popular travel period, so preferred departures and suites can book early.",
        accent: "adg-accent-navy"
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        intro: "For wine enthusiasts, fall can be especially interesting. Highlights can include:",
        items: [
            "Harvest activity",
            "Wine experiences",
            "Autumn scenery & seasonal food"
        ],
        outro: "If the wine component is the primary reason for your trip, compare sailing dates carefully with your preferred winery and vineyard experiences.",
        accent: "adg-accent-rose"
    },
    {
        key: "winter",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "December–February",
        title: "Winter",
        intro: "Winter provides a quieter atmosphere, but isn't usually the first choice for travelers seeking the classic vineyard experience. Travelers may still appreciate:",
        items: [
            "Fewer crowds",
            "A slower pace",
            "Quieter sightseeing"
        ],
        outro: "Travelers who prefer fewer crowds and a slower pace may still appreciate the season.",
        accent: "adg-accent-teal"
    }
];

/* ── Scenic Bordeaux Excursions Data ─────────────────────────────────── */
const bordeauxExcursions = [
    { icon: <Wine size={28} strokeWidth={1.5} />, title: "Wine", desc: "Visit vineyards, wine estates, and wine-producing areas." },
    { icon: <Utensils size={28} strokeWidth={1.5} />, title: "French Cuisine", desc: "Discover regional dishes, culinary traditions, and local specialties." },
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "Châteaux", desc: "Explore historic estates and French architecture." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Historic Towns", desc: "Walk through Bordeaux, Saint-Émilion, Blaye, and other destinations." },
    { icon: <Palette size={28} strokeWidth={1.5} />, title: "Culture", desc: "Learn about French history, art, and regional traditions." },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Freechoice & Enrich", desc: "Scenic's Freechoice program gives travelers options among available experiences, while Scenic Enrich provides specially curated experiences on qualifying sailings." },
];

/* ── Bordeaux Vineyard & Countryside Sightings Data ──────────────────────── */
const countrysideSightings = ["Vineyard-covered hillsides", "Château rooftops among the vines", "Riverside wine villages", "Gironde estuary scenery"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Sailing date",
    "Cruise duration",
    "Suite category",
    "Ship",
    "Availability",
    "Itinerary",
    "Promotions",
    "Airfare",
    "Hotels & transfers",
];

/* ── What's Included Data ──────────────────────────────────────────── */
const whatsIncluded = [
    "Accommodation",
    "Meals",
    "Selected beverages",
    "Wi-Fi",
    "Scenic Freechoice experiences",
    "Scenic Enrich experiences",
    "Entertainment",
    "Personalized service",
];

/* ── Scenic Bordeaux vs Other Luxury River Cruises — Comparison Table ── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "All-inclusive luxury and personalized service" },
    { key: "riverside", scenic: "Riverside", ocean: "Spacious luxury suites" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique design and distinctive interiors" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided travel" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Active excursions and destination experiences" },
    { key: "avalon", scenic: "Avalon", ocean: "Open-air balcony concept" },
    { key: "viking", scenic: "Viking", ocean: "Broad European river cruise network" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Choosing the itinerary without checking wine excursions",
    "Assuming every itinerary visits Saint-Émilion",
    "Booking during the wrong season for your interests",
    "Ignoring the cabin location",
    "Arriving in Bordeaux on embarkation day",
    "Not extending your stay",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicBordeauxRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("wine-country");

    const currentItinerary =
        bordeauxItineraries.find((f) => f.id === activeItinerary) || bordeauxItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Bordeaux River Cruises | Wine, Bordeaux & Best Itineraries</title>
                <meta name="title" content="Scenic Bordeaux River Cruises | Bordeaux Wine & Luxury Cruise Guide" />
                <meta
                    name="description"
                    content="Explore Scenic Bordeaux River Cruises through France's legendary wine region. Discover Bordeaux, Saint-Émilion, Médoc, the Garonne, Dordogne, French cuisine, excursions, cabins, costs and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Bordeaux <br /> River Cruises</h1>

                    <p>
                        A Scenic Bordeaux River Cruise is one of the best
                        ways to explore southwestern France if your ideal
                        luxury vacation revolves around wine, gastronomy,
                        history, countryside, and beautiful French towns.
                        Bordeaux is more than a city — it is the gateway to
                        one of the world's most celebrated wine regions,
                        and a river cruise allows travelers to explore that
                        region without repeatedly changing hotels.
                    </p>

                    {readMore && (
                        <p>
                            Depending on your itinerary, a Scenic Bordeaux
                            cruise can combine Bordeaux, the Garonne River,
                            the Dordogne River, Saint-Émilion, Médoc, French
                            wine estates, historic villages, vineyards,
                            French cuisine, châteaux, and regional cultural
                            experiences. For wine lovers in particular, the
                            appeal is obvious — you can experience
                            Bordeaux's wine country while using a luxury
                            river ship as your home base.
                        </p>
                    )}

                    <div className="Scenic_readmore_wrapper">
                        <button
                            className="Scenic_readmore_btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Scenic Bordeaux Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Bordeaux River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Yes — especially for travelers who love wine,
                            food, French culture, historic towns, and
                            relaxed luxury travel. Bordeaux is one of the
                            strongest European river cruise choices for
                            travelers who want their vacation to revolve
                            around gastronomy and wine rather than visiting
                            as many countries as possible. It's especially
                            well suited to:
                        </p>

                        <ul className="rlc-qa-list">
                            {quickAnswerEmphasis.map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Bordeaux highlights include the Bordeaux wine
                            region, vineyards, French châteaux, Bordeaux
                            itself, Saint-Émilion, the Garonne River, the
                            Dordogne River, and French cuisine.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC BORDEAUX RIVER CRUISE? ─────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-bordeaux">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Bordeaux River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The biggest reason is access. A Bordeaux river
                            cruise allows you to explore several famous
                            wine-producing areas while avoiding the
                            logistical challenge of arranging separate
                            hotels and transportation between each
                            destination. Instead of hotel → car → hotel →
                            train → hotel → excursion, your experience
                            becomes luxury ship → destination → excursion →
                            ship:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {bordeauxVarietyFeatures.map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <CheckCircle size={16} strokeWidth={2.5} />
                                    </span>
                                    <span className="adg-c-overview-label">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Ship
                                        size={28}
                                        className="adg-c-callout-star"
                                    />
                                    <p className="adg-c-callout-text">
                                        Several of Bordeaux's most famous
                                        wine regions, one home base — because
                                        the ship travels with you, there's no
                                        need to repeatedly check into hotels.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '350px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        One Ship, Across Bordeaux Wine Country
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DO SCENIC BORDEAUX CRUISES GO? ────────────────────── */}
            <section
                className="adg-section"
                id="bordeaux-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Do Scenic Bordeaux River Cruises Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact ports and excursions depend on the
                            itinerary and sailing date. Bordeaux itineraries
                            can focus on destinations and regions including:
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {bordeauxDestinations.map((item) => (
                            <div key={item.key} className="adg-card">
                                <div
                                    className="adg-card-image-wrap"
                                    style={{
                                        background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "210px",
                                    }}
                                >
                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">
                                            <Landmark size={20} strokeWidth={1.6} />
                                        </span>
                                        <span className="adg-card-eyebrow-label">Bordeaux Destination</span>
                                    </div>
                                </div>

                                <div className="adg-card-body">
                                    <h3 className="adg-card-title">{item.title}</h3>

                                    <ul className="adg-card-list">
                                        {item.items.map((point, idx) => (
                                            <li key={idx} className="adg-card-list-item">
                                                <span className="adg-card-list-dot"></span>
                                                <span className="adg-card-list-text">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="adg-card-bar"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                        {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Bordeaux Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Bordeaux sailings and find the perfect fit for your trip.
                        </p>
                    </div>
                    <div className="scenic-inline-cta-action-dark">
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Get a Custom Quote
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── BEST TIME FOR A SCENIC BORDEAUX RIVER CRUISE ───────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time for a Scenic Bordeaux River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            Season can significantly influence your experience.
                        </p>
                    </div>

                    <div className="sfe-danube-seasons-grid">
                        {bordeauxSeasons.map((item) => (
                            <div key={item.key} className={`adg-card ${item.accent}`}>
                                <div className="adg-card-image-wrap" style={{ background: 'radial-gradient(circle at center, #1b2e4b 0%, #0d1726 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '210px' }}>
                <div className="adg-card-image-overlay"></div>
                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">{item.icon}</span>
                                        <span className="adg-card-eyebrow-label">{item.eyebrow}</span>
                                    </div>
                                </div>

                                <div className="adg-card-body">
                                    <h3 className="adg-card-title">{item.title}</h3>
                                    
                                    <span className="adg-card-list-text" style={{ fontWeight: 600, display: 'block', color: 'var(--navy)' }}>
                                        {item.intro}
                                    </span>
                                    
                                    <ul className="adg-card-list">
                                        {item.items.map((point, idx) => (
                                            <li key={idx} className="adg-card-list-item">
                                                <span className="adg-card-list-dot"></span>
                                                <span className="adg-card-list-text">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p style={{ fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)', margin: 'auto 0 0 0', paddingTop: '15px' }}>
                                        {item.outro}
                                    </p>
                                </div>

                                <div className="adg-card-bar"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEST SCENIC BORDEAUX RIVER CRUISE ITINERARIES ──────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Bordeaux River Cruise Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            The best itinerary depends on what you want from the trip.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {bordeauxItineraries.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeItinerary === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveItinerary(item.id)}
                                    >
                                        <div className="luc-dest-nav-icon-wrap">
                                            <NavIcon size={16} strokeWidth={1.8} />
                                        </div>
                                        <span className="luc-dest-nav-label">{item.badge}</span>
                                        {isActive && <div className="luc-dest-nav-pip"></div>}
                                    </button>
                                );
                            })}
                        </nav>

                        <div className="luc-dest-panel" key={activeItinerary}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveItineraryIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveItineraryIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentItinerary.title}</span>
                                </div>
                            </div>

                            {currentItinerary.desc && (
                                <p className="luc-dest-panel-desc">{currentItinerary.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentItinerary.columns.map((col, cIdx) => (
                                    <div key={cIdx} className="luc-dest-info-col">
                                        <span className="luc-dest-info-label">{col.label}</span>
                                        <div className="luc-dest-items-grid">
                                            {col.items.map((bullet, bIdx) => (
                                                <div key={bIdx} className="luc-dest-item">
                                                    <div className="luc-dest-item-dot"></div>
                                                    <span className="luc-dest-item-text">{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME RIVER CRUISERS ──────────────────────── */}
            <section className="sfe-firsttime-section" id="first-time-cruisers">
                <div className="sfe-firsttime-container">
                    
                    <div className="sfe-firsttime-header">
                        <h2 className="sfe-firsttime-title">Scenic Bordeaux Cruise for First-Time River Cruisers</h2>
                        
                        <p className="sfe-firsttime-lead">
                            Bordeaux can be an excellent first river cruise because the purpose of the itinerary is easy to understand.
                        </p>
                        
                        <p className="sfe-firsttime-desc">
                            You're not trying to visit five countries. You're exploring one of Europe's most famous wine regions.
                        </p>
                    </div>

                    <h4 className="sfe-firsttime-progression-title">
                        The journey is essentially a progression:
                    </h4>

                    <div className="sfe-firsttime-progression-grid">
                        
                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">01</div>
                            <h3 className="sfe-firsttime-step-title">Bordeaux</h3>
                            <span className="sfe-firsttime-step-subtitle">City & Wine Gateway</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">02</div>
                            <h3 className="sfe-firsttime-step-title">Vineyards</h3>
                            <span className="sfe-firsttime-step-subtitle">Saint-Émilion & Médoc</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">03</div>
                            <h3 className="sfe-firsttime-step-title">River Country</h3>
                            <span className="sfe-firsttime-step-subtitle">Garonne & Dordogne</span>
                        </div>

                    </div>

                    <div className="sfe-firsttime-footer-box">
                        <p className="sfe-firsttime-callout-text">
                            Checklist travel isn't the focus.
                        </p>
                        <p className="sfe-firsttime-conclusion">
                            That makes the cruise particularly attractive to travelers who prefer immersive travel over visiting as many countries as possible.
                        </p>
                    </div>

                </div>
            </section>


            {/* ── SCENIC BORDEAUX EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="bordeaux-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Bordeaux River Cruise Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Excursions are arguably the most important part
                            of a Bordeaux itinerary. Scenic's Freechoice
                            program gives travelers options among available
                            experiences, while Scenic Enrich offers
                            specially curated experiences on qualifying
                            sailings.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {bordeauxExcursions.map((item, idx) => (
                            <div key={idx} className="ugt-advantage-card">
                                <div className="ugt-icon-box">
                                    {item.icon}
                                </div>
                                <h4 className="ugt-card-title">{item.title}</h4>
                                <p className="ugt-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
  

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">A Balanced Introduction</span>
                            <h3 className="scenic-inline-cta-title-light">First Time on a River Cruise?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Bordeaux gives you Bordeaux city, Saint-Émilion, Médoc, and the Garonne and Dordogne rivers — all in one trip. You can think of the journey simply as Bordeaux → vineyards → historic towns → French cuisine, rather than a complicated multi-country itinerary.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Contact Angela Hughes
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">40+ Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CABINS & BUTLER SERVICE ──────────────────────────────────── */}
            <section className="sfe-cabins-section" id="cabins-butler-service">
                <div className="sfe-cabins-container">
                    <div className="sfe-cabins-grid">
                        
                        {/* Card 1: Cabins */}
                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Bordeaux River Cruise Cabins</span>
                            </div>
                            
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Bordeaux River Cruise Cabins &amp; Suites</h3>
                                <p className="sfe-cabins-text">
                                    Your cabin matters even on a destination-focused cruise. When comparing cabins, consider:
                                </p>
                                
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Suite category & deck",
                                        "River views",
                                        "Sun Lounge",
                                        "Space",
                                        "Butler Service",
                                        "Location & budget"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    If you're spending significant time onboard during scenic sailing, a comfortable river-view suite can enhance the experience.
                                </p>

                                <div className="sfe-cabins-links">
                                    <span className="sfe-cabins-links-label">Read next:</span>
                                    <div className="sfe-cabins-links-grid">
                                        <Link to="/scenic-river-cruises/space-ships-sun-lounges" className="sfe-cabins-link-item">
                                            <span>Scenic Space-Ships &amp; Sun Lounge Balconies Explained</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                        <Link to="/scenic-river-cruises/cabin-categories" className="sfe-cabins-link-item">
                                            <span>Scenic River Cruise Cabin Categories Explained</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                        <Link to="/scenic-river-cruises/best-cabins" className="sfe-cabins-link-item">
                                            <span>Best Scenic River Cruise Cabins &amp; Cabins to Avoid</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Butler Service */}
                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Bell size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Personalized Butler Service</span>
                            </div>

                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Butler Service on Bordeaux Cruises</h3>
                                <p className="sfe-cabins-text">
                                    Butler Service is available with eligible Scenic suite categories. Travelers who value personalized service may find this particularly useful for:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Special occasions",
                                        "Celebration travel",
                                        "Personalized requests",
                                        "In-suite preferences"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    Exact Butler Service depends on the suite and itinerary, so confirm the details with your advisor before booking.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* ── FOOD, HISTORY & CHÂTEAUX ───────────────────────────── */}
            <section className="sfe-dining-noimg-section" id="food-history-chateaux">
                <div className="sfe-dining-noimg-container">
                    <div className="sfe-dining-noimg-grid">

                        {/* Card 1: Food */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Utensils size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Bordeaux Cruise for Food Lovers</h3>
                            </div>

                            <p className="sfe-dining-noimg-text" style={{ fontWeight: 600, marginBottom: '8px' }}>
                                Wine may get the headlines, but food is equally important.
                            </p>

                            <p className="sfe-dining-noimg-text">
                                Bordeaux and southwestern France offer a rich culinary culture.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can experience:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '20px' }}>
                                {[
                                    "Artisan breads",
                                    "Regional cheeses",
                                    "French specialties",
                                    "Wine pairings",
                                    "French desserts",
                                    "Regional cuisine"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <Utensils size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="sfe-dining-noimg-outro">
                                If food is a major part of your vacation, consider extending your stay in Bordeaux before or after the cruise to explore local restaurants.
                            </p>
                        </div>

                        {/* Card 2: History & Châteaux */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Landmark size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">French History, Fortresses & Châteaux</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                Blaye combines history and wine, with a historic fortress along the Gironde estuary, while Cadillac offers another perspective through its châteaux and countryside.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Depending on the destinations visited, travelers can encounter:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "French history",
                                    "Historic fortresses",
                                    "Châteaux",
                                    "Riverfront architecture",
                                    "French regional traditions"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <CheckCircle size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item.value || item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="sfe-dining-noimg-outro">
                                It provides a welcome change of pace from vineyard-focused excursions, without straying from the region's wine and countryside character.
                            </p>

                            <div className="sfe-dining-noimg-links">
                                <span className="sfe-dining-noimg-links-label">Related Guide:</span>
                                <div className="sfe-dining-noimg-links-grid">
                                    <Link to="/scenic-river-cruises/bordeaux" className="sfe-dining-noimg-link-item">
                                        <span>Scenic Bordeaux River Cruises: The Complete Guide</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WINE LOVERS EXPERIENCE ──────────────────────── */}
            <section className="sfe-wine-section" id="wine-lovers-experience">
                <div className="sfe-wine-container">
                    <div className="sfe-wine-grid">
                        
                        <div className="sfe-wine-content">
                          
                            <h2 className="sfe-wine-title">Scenic Bordeaux for Wine Lovers</h2>
                            
                            <p className="sfe-wine-lead">
                                If you're choosing a river cruise primarily because of wine, Bordeaux deserves serious consideration.
                            </p>
                            
                            <p className="sfe-wine-desc">
                                The region gives travelers an opportunity to understand Bordeaux wine within its geographical and cultural context.
                            </p>

                            <div className="sfe-wine-callout">
                                Médoc and Saint-Émilion are particularly important for wine enthusiasts.
                            </div>

                            <h4 className="sfe-wine-context-title">
                                Rather than simply tasting wine, you can experience:
                            </h4>

                            <div className="sfe-wine-timeline">
                                <span className="sfe-wine-timeline-node">vineyard</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">château</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">village</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">cuisine</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">wine</span>
                            </div>

                            <p className="sfe-wine-conclusion">
                                That makes the destination particularly compelling for travelers who want more than a conventional tasting vacation.
                            </p>
                        </div>

                        <div className="sfe-wine-media">
                            <Wine size={72} className="sfe-wine-media-icon" strokeWidth={1} />
                            <span className="sfe-wine-media-label">Bordeaux Wine Regions</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SUN LOUNGE EXPERIENCE ──────────────────────── */}
            <section className="sfe-lounge-section" id="sun-lounge-experience">
                <div className="sfe-lounge-container">
                    <div className="sfe-lounge-grid">
                        
                        <div className="sfe-lounge-media">
                            <Compass size={72} className="sfe-lounge-media-icon" strokeWidth={1} />

                        </div>

                        <div className="sfe-lounge-content">
                
                            <h2 className="sfe-lounge-title">Scenic Sun Lounge on a Bordeaux Cruise</h2>
                            
                            <p className="sfe-lounge-lead">
                                Scenic's Sun Lounge concept can be particularly enjoyable when sailing through Bordeaux wine country.
                            </p>

                            <h4 className="sfe-lounge-list-title">You can watch:</h4>

                            <div className="sfe-lounge-checklist">
                                {[
                                    "Vineyards",
                                    "French countryside",
                                    "Riverside towns",
                                    "Garonne landscapes",
                                    "Dordogne scenery"
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-lounge-item">
                                        <CheckCircle size={18} strokeWidth={2.5} className="sfe-lounge-icon" />
                                        <span className="sfe-lounge-text">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="sfe-lounge-desc">
                                without needing to spend all your time on an open exterior deck.
                            </p>

                            <p className="sfe-lounge-outro">
                                The ability to enjoy the view from your suite makes sailing time feel like part of the destination rather than simply transportation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAMILIES & MULTIGENERATIONAL GROUPS ──────────────────────── */}
            <section className="sfe-family-section" id="families-multigenerational">
                <div className="sfe-family-container">
                    <div className="sfe-family-header">
                        <h2 className="sfe-family-title">Scenic Bordeaux Cruises for Families &amp; Multigenerational Groups</h2>
                        <div className="sfe-family-accent"></div>
                        <p className="sfe-family-intro">
                            A Bordeaux itinerary can also work for multigenerational travel — different family members can focus on different aspects of the journey. The key is selecting excursions with appropriate activity levels for everyone.
                        </p>
                    </div>

                    <div className="sfe-family-layout">
                        {/* Left: Generation preference cards */}
                        <div className="sfe-family-generations">
                            {/* Grandparents */}
                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Heart size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Generation</p>
                                        <h3 className="sfe-family-gen-title">Grandparents may enjoy:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Luxury accommodations", "Scenery", "History", "Relaxed sightseeing"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Adults */}
                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Users size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Generation</p>
                                        <h3 className="sfe-family-gen-title">Adults may enjoy:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Wine", "Cuisine", "History", "Architecture"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Older children and teenagers */}
                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Sparkles size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Generation</p>
                                        <h3 className="sfe-family-gen-title">Older children &amp; teenagers may appreciate:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Castles", "French culture", "Cycling", "History", "Food"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Ship size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Bordeaux Family Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Ship size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    The key is selecting excursions with appropriate activity levels for everyone, so every generation finds their own reason to enjoy the trip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COUPLES ──────────────────────────────────────────────────── */}
            <section className="sfe-family-section" id="couples" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="sfe-family-container">
                    <div className="sfe-family-layout">
                        {/* Left: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Heart size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Bordeaux Couples Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Heart size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    It's particularly well suited to anniversaries, milestone birthdays, and other celebrations.
                                </p>
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="sfe-family-generations">
                            <div className="sfe-family-header" style={{ textAlign: 'left', margin: '0 0 32px 0', maxWidth: '100%' }}>
                                <h2 className="sfe-family-title">Scenic Bordeaux Cruise for Couples</h2>
                                <div className="sfe-family-accent" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="sfe-family-intro">
                                    Bordeaux is an excellent choice for romantic travel.
                                </p>
                            </div>

                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Heart size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Experiences</p>
                                        <h3 className="sfe-family-gen-title">Couples can combine:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {[
                                        "Wine tasting",
                                        "French cuisine",
                                        "Vineyard landscapes",
                                        "Historic villages",
                                        "Châteaux",
                                        "Scenic sailing",
                                        "Bordeaux city"
                                    ].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">
                                            <span style={{ marginRight: '6px' }}></span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW MUCH DOES A SCENIC BORDEAUX CRUISE COST? ───────────────── */}
            <section className="sfe-cost-section" id="bordeaux-cost" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Bordeaux River Cruise Cost?</h2>
                        <div className="sfe-cost-accent"></div>
                        <p className="sfe-cost-intro">
                            The total price depends on:
                        </p>
                    </div>

                    <div className="sfe-cost-layout">
                        <div className="sfe-cost-factors-grid">
                            {costFactors.map((label, i) => (
                                <div key={i} className="sfe-cost-factor-card">
                                    <div className="sfe-cost-factor-icon-wrap">
                                        <CheckCircle size={16} strokeWidth={2.5} />
                                    </div>
                                    <span className="sfe-cost-factor-label">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="sfe-cost-right">
                            <div className="sfe-cost-callout-card">
                                <div className="sfe-cost-callout-box">
                                    <div className="sfe-cost-callout-header">
                                        <div className="sfe-cost-callout-icon-wrap">
                                            <Wallet size={24} />
                                        </div>
                                        <h3 className="sfe-cost-callout-title">Don't compare Bordeaux river cruises solely on the headline fare.</h3>
                                    </div>
                                    <div className="sfe-cost-divider" />
                                    <p className="sfe-cost-callout-text">
                                        Instead, consider what's included, the suite, excursions, service, itinerary, and overall convenience.
                                    </p>
                                    <div className="sfe-cost-divider" />
                                    <div className="sfe-cost-related">
                                        <strong>Related Guide: </strong>
                                        <Link to="/scenic-river-cruises/cost">How Much Does a Scenic River Cruise Cost?</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="sfe-cost-image-wrap">
                                <Wallet size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <span className="sfe-cost-img-label">
                                    Compare What's Included, Not Just the Fare
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Want More on Scenic Cabins?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Read our guides to Scenic Space-Ships &amp; Sun Lounge balconies and cabin categories.
                        </p>
                    </div>
                    <div className="scenic-inline-cta-action-dark">
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Get a Custom Quote
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS INCLUDED ON A SCENIC BORDEAUX CRUISE? ──────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Bordeaux River Cruise?</h2>
                        <div className="sfe-inc-accent"></div>
                        <p className="sfe-inc-intro">
                            Scenic's all-inclusive approach can include:
                        </p>
                    </div>

                    <div className="sfe-inc-layout">
                        <div className="sfe-inc-left">
                            <p className="sfe-inc-intro" style={{ marginBottom: '30px', fontSize: '16px' }}>
                                Depending on your specific cruise, inclusions can include:
                            </p>
                            <div className="sfe-inc-checklist">
                                {whatsIncluded.map((label, i) => (
                                    <div key={i} className="sfe-inc-check-item">
                                        <span className="sfe-inc-check-icon">
                                            <CheckCircle size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="sfe-inc-check-label">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sfe-inc-right">
                            <div className="sfe-inc-callout-card">
                                <div className="sfe-inc-callout-box">
                                    <div className="sfe-inc-callout-header">
                                        <div className="sfe-inc-callout-icon-wrap">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <h3 className="sfe-inc-callout-title">Verify Inclusions</h3>
                                    </div>
                                    <div className="sfe-inc-divider" />
                                    <p className="sfe-inc-callout-text">
                                        Exact inclusions vary by sailing and booking, so verify your specific itinerary before booking.
                                    </p>
                                    <div className="sfe-inc-divider" />
                                    <div className="sfe-inc-related">
                                        <strong>Related Guide: </strong>
                                        <Link to="/scenic-river-cruises/what-is-included">What Is Included on a Scenic River Cruise?</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="sfe-inc-image-wrap">
                                <ShieldCheck size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <span className="sfe-inc-img-label">
                                    What Is Included on a Scenic River Cruise
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC BORDEAUX VS OTHER LUXURY RIVER CRUISES ──────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="bordeaux-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Bordeaux vs <br /> Other Luxury River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The best choice depends on your priorities. For
                            Bordeaux specifically, compare the wine
                            programming, excursions, suite, dining, and
                            included experiences rather than simply
                            comparing cruise fares.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Particularly Appealing For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.scenic}</strong>
                                        </td>
                                        <td>{row.ocean}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── COMMON SCENIC BORDEAUX CRUISE MISTAKES ─────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Bordeaux Cruise Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Scenic Bordeaux River Cruise.
                        </p>
                    </div>

                    <div className="scenic-exclusions-grid">
                        {commonMistakes.map((item, i) => (
                            <div key={i} className="scenic-exclusion-card">
                                <div className="scenic-exclusion-icon-wrap">
                                    <X size={16} strokeWidth={2.5} className="scenic-exclusion-icon" />
                                </div>
                                <span className="scenic-exclusion-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CRUISE DURATION ─────────────────────────────────────────── */}
            <section className="sfe-danube-duration-section" id="cruise-duration">
                <div className="sfe-danube-duration-container">
                    <div className="sfe-danube-duration-header">
                        <h2 className="sfe-danube-duration-title">How Many Days Do You Need for a Scenic Bordeaux Cruise?</h2>
                        <div className="sfe-danube-duration-accent"></div>
                        <p className="sfe-danube-duration-lead">
                            The cruise itinerary itself provides the foundation, but adding extra nights can make the experience substantially better.
                        </p>
                    </div>

                    <div className="sfe-danube-duration-grid">
                        
                        {/* Before the Cruise Card */}
                        <div className="sfe-danube-duration-card">
                            <div className="sfe-danube-duration-card-header">
                                <div className="sfe-danube-duration-icon-box">
                                    <Calendar size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-danube-duration-card-title">Before the Cruise</h3>
                            </div>
                            <span className="sfe-danube-duration-card-subtitle">Good for:</span>
                            <ul className="sfe-danube-duration-list">
                                {[
                                    "1–2 nights in Bordeaux",
                                    "Recovering from jet lag",
                                    "Protecting against flight delays"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-danube-duration-list-item">
                                        <CheckCircle size={16} className="sfe-danube-duration-list-icon" strokeWidth={2.5} />
                                        <span className="sfe-danube-duration-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* After the Cruise Card */}
                        <div className="sfe-danube-duration-card">
                            <div className="sfe-danube-duration-card-header">
                                <div className="sfe-danube-duration-icon-box">
                                    <Compass size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-danube-duration-card-title">After the Cruise</h3>
                            </div>
                            <span className="sfe-danube-duration-card-subtitle">Better for:</span>
                            <ul className="sfe-danube-duration-list">
                                {[
                                    "Extending into another part of France",
                                    "Restaurant reservations in Bordeaux",
                                    "A more complete French vacation"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-danube-duration-list-item">
                                        <CheckCircle size={16} className="sfe-danube-duration-list-icon" strokeWidth={2.5} />
                                        <span className="sfe-danube-duration-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Footer Warning/Tip Card */}
                    <div className="sfe-danube-duration-footer-card">
                        <div className="sfe-danube-duration-footer-icon-box">
                            <Plane size={26} strokeWidth={1.5} />
                        </div>
                        <p className="sfe-danube-duration-footer-text">
                            Bordeaux itself deserves additional time — arriving early provides protection from flight delays and more time to experience the city.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHY BOOK A SCENIC BORDEAUX CRUISE THROUGH A LUXURY TRAVEL ADVISOR? ── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book a Scenic Bordeaux Cruise Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Bordeaux Is a Destination Where the Details Matter
                            </h3>
                            <p className="Avr-planning-left-body">
                                A traveler who wants wine-focused experiences
                                may need a different itinerary from someone
                                primarily interested in French history, food,
                                architecture, art, family travel, or romantic
                                travel. A luxury travel advisor can help
                                coordinate the complete journey, which is
                                particularly valuable if Bordeaux is part of
                                a larger European vacation.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Booking early through an advisor can
                                    help maximize both availability and
                                    value.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help coordinate:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Plane size={18} />, label: "Flights" },
                                    { icon: <Home size={18} />, label: "Bordeaux hotels" },
                                    { icon: <Ship size={18} />, label: "Scenic cruise" },
                                    { icon: <MapPin size={18} />, label: "Suite selection" },
                                    { icon: <Compass size={18} />, label: "Excursions" },
                                    { icon: <Calendar size={18} />, label: "Transfers" },
                                    { icon: <ShieldCheck size={18} />, label: "Travel insurance" },
                                    { icon: <Sparkles size={18} />, label: "Pre- and post-cruise travel" },
                                ].map((item, i) => (
                                    <div key={i} className="Avr-planning-benefit-card">
                                        <span className="Avr-planning-benefit-icon">{item.icon}</span>
                                        <span className="Avr-planning-benefit-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
            <section className="Adg-expert-section" id="Asc-expert-insight">
                <div className="Asc-container">
                    <div className="Adg-expert-heading">
                        <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Adg-expert-divider"></div>
                    </div>

                    <div className="Adg-expert-grid">
                        <div className="Adg-expert-image-col">
                            <div className="Adg-expert-portrait-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Expert"
                                    className="Adg-expert-portrait"
                                />
                                <div className="Adg-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>
                            </div>

                            <div className="Adg-expert-name-card">
                                <h3 className="Adg-expert-name">Angela Hughes</h3>
                                <p className="Adg-expert-role">CEO of Trips &amp; Ships Luxury Travel</p>
                                <div className="Adg-expert-name-divider"></div>
                                <p className="Adg-expert-countries">
                                    <MapPin size={14} />
                                    Traveled to more than 121 countries
                                </p>
                            </div>
                        </div>

                        <div className="Adg-expert-content-col">
                            <div className="Adg-expert-credentials-box">
                                <h4 className="Adg-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes Authority Box
                                </h4>

                                <div className="Adg-expert-credentials-grid">
                                    {[
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Star size={16} />, label: "Over 40 years in the travel industry" },
                                        { icon: <MapPin size={16} />, label: "Traveled to more than 121 countries" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Users size={16} />, label: "Global luxury travel speaker and trainer" },
                                        { icon: <Users size={16} />, label: "Weekly industry columnist" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        {
                                            icon: <Star size={16} />,
                                            label: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                                        },
                                        { icon: <Award size={16} />, label: "Featured in major travel publications globally" },
                                        {
                                            icon: <Ship size={16} />,
                                            label: "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                                        },
                                    ].map((item, i) => (
                                        <div className="Adg-expert-list-item" key={i}>
                                            <span className="Adg-expert-list-icon">{item.icon}</span>
                                            <span className="Adg-expert-list-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ────────────────────────────────────────────────────── */}
            <section className="Asc-section Asc-bg-white" id="Asc-faq">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Frequently Asked Questions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-faq-intro">
                            Everything you need to know about Scenic
                            Bordeaux River Cruises before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={FinalImage}
                        alt="Scenic Space-Ship sailing past Bordeaux vineyards on the Garonne at sunset"
                        className="Asc-help-bg-img"
                    />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">
                        <div className="Asc-help-content">
                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">Final Verdict</span>
                                <h2 className="Asc-help-h2">
                                    Bordeaux Wine Country — <br /> A Journey Through French Gastronomy
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Bordeaux River Cruises are one
                                        of Europe's strongest luxury options
                                        for travelers who want wine, food,
                                        French culture, and countryside in
                                        one seamless journey.

                                        {!readMoreVerdict && (
                                            <button
                                                onClick={() => setReadMoreVerdict(true)}
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    color: "var(--bg-white)",
                                                    cursor: "pointer",
                                                    marginLeft: "8px",
                                                    fontWeight: "600",
                                                    padding: 0,
                                                }}
                                            >
                                                Read More
                                            </button>
                                        )}
                                    </p>

                                    {readMoreVerdict && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                The experience is
                                                fundamentally different from
                                                a Rhine or Danube cruise.
                                                Instead of trying to visit
                                                multiple countries, you're
                                                going deeper into one of
                                                France's most celebrated
                                                regions. For wine lovers,
                                                couples, food travelers, and
                                                luxury travelers who want a
                                                more immersive French
                                                experience, Bordeaux
                                                deserves a place near the top
                                                of the river cruise list.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                The journey can combine
                                                Bordeaux wine country,
                                                Saint-Émilion, Médoc and
                                                French châteaux, Garonne and
                                                Dordogne sailing, Bordeaux
                                                itself, and French cuisine.
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare the ship, suite,
                                                itinerary, and included
                                                experiences — not simply
                                                the advertised cruise
                                                price.
                                                <button
                                                    onClick={() => setReadMoreVerdict(false)}
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--bg-white)",
                                                        cursor: "pointer",
                                                        marginLeft: "8px",
                                                        fontWeight: "600",
                                                        padding: 0,
                                                    }}
                                                >
                                                    Read Less
                                                </button>
                                            </p>
                                        </>
                                    )}

                                    <div className="Asc-help-btn-container">
                                        <Link
                                            to="/contact"
                                            className="Asc-help-cta-btn"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Start Planning Your Scenic Bordeaux Cruise
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="Asc-help-list-box">
                                    <h3 className="Asc-help-list-title">
                                        Our luxury planning services include:
                                    </h3>

                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Compare Scenic Bordeaux itineraries and ships",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain Scenic promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic with other luxury river cruise lines",
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <div className="Asc-bullet-icon">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScenicBordeauxRiverCruises;