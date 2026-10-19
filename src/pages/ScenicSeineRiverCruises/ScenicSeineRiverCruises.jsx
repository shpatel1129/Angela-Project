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
    ShieldAlert,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Seine River Cruise photography once
   available. Paths assume a new /assets/ScenicSeine folder. */
// import HeroImage from "../../assets/ScenicSeine/scenic-seine-hero.jpg";
// import GivernyImage from "../../assets/ScenicSeine/scenic-seine-giverny.jpg";
// import CabinImage from "../../assets/ScenicSeine/scenic-seine-suite.jpg";
// import FinalImage from "../../assets/ScenicSeine/scenic-seine-final.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/seine/#webpage",
            name: "Scenic Seine River Cruises (2026) | Complete Guide",
            url: "https://www.tripsandships.com/scenic-river-cruises/seine/",
            description:
                "Explore Scenic Seine River Cruises from Paris through Normandy. Discover Rouen, Monet's Giverny, D-Day sites, French cuisine, excursions, cabins, costs and the best time to sail.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/seine/#article",
            headline: "Scenic Seine River Cruises: Paris, Normandy & the Complete Guide",
            description:
                "A complete guide to Scenic Seine River Cruises, including Paris, Giverny, Rouen, Normandy, D-Day history, French cuisine, cabins, cost, and how to choose the right sailing.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/seine/#breadcrumb",
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
                    name: "Scenic Seine River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/seine/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/seine/#itemlist",
            name: "Scenic Seine River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Seine River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Does a Scenic Seine River Cruise Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Seine River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time for a Scenic Seine River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Seine Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Seine Cruise for Art Lovers" },
                { "@type": "ListItem", position: 8, name: "Cabins & Butler Service" },
                { "@type": "ListItem", position: 9, name: "Food, Wine & D-Day History" },
                { "@type": "ListItem", position: 10, name: "Couples & Families" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/seine/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Scenic Seine River Cruise itinerary?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For first-time travelers, an itinerary combining Paris, Normandy, Rouen, and Giverny can provide an excellent overview of the Seine region. Exact destinations vary by sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic Seine River Cruise start in Paris?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Scenic Seine itineraries are designed around Paris, but embarkation and disembarkation details vary by itinerary and sailing date.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic visit Normandy?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic offers Seine itineraries that explore Normandy and its historic destinations. Check the individual sailing for the exact ports and excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Seine cruise visit Giverny?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Some itineraries include access to Giverny and Monet-related experiences. Always confirm the specific itinerary before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I visit the D-Day beaches on a Scenic Seine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Certain itineraries offer Normandy excursions focused on D-Day history. The exact sites and excursion availability depend on the sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Seine River Cruise good for first-time cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The Seine is relatively straightforward to understand and combines a major city with smaller French destinations and countryside.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time for a Scenic Seine River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring and fall are particularly appealing for comfortable sightseeing. Summer offers longer days, while seasonal departures can provide a different atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for a Seine River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is a strong option for travelers seeking an all-inclusive luxury experience with personalized service and destination-focused excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Seine cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Paris, French cuisine, wine, art, gardens, historic towns, and scenic sailing make the Seine especially attractive for couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Seine cruise good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The itinerary offers a mix of history, culture, museums, sightseeing, and excursions that can appeal to multiple generations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included on a Scenic Seine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic includes a selection of destination experiences, including Freechoice activities and eligible Scenic Enrich experiences. The exact choices vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What cabin should I choose on a Scenic Seine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best suite depends on your priorities, but travelers who enjoy scenic sailing may appreciate a suite with a Sun Lounge or another dedicated river-view area.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Butler Service on the Seine?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Butler Service is available with eligible Scenic suite categories. Confirm the exact services associated with your selected suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does a Scenic Seine River Cruise cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Prices vary according to the itinerary, sailing date, suite category, availability, and other travel arrangements. Compare the total inclusions rather than just the starting fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How many nights should I spend in Paris before a Scenic Seine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For first-time visitors, two or three nights before the cruise is a strong starting point. It provides time to explore Paris and reduces the risk of missing embarkation because of a delayed international flight.",
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
            q: "What is the best Scenic Seine River Cruise itinerary?",
            a: "For first-time travelers, an itinerary combining Paris, Normandy, Rouen, and Giverny can provide an excellent overview of the Seine region. Exact destinations vary by sailing.",
        },
        {
            q: "Does Scenic Seine River Cruise start in Paris?",
            a: "Many Scenic Seine itineraries are designed around Paris, but embarkation and disembarkation details vary by itinerary and sailing date.",
        },
        {
            q: "Does Scenic visit Normandy?",
            a: "Scenic offers Seine itineraries that explore Normandy and its historic destinations. Check the individual sailing for the exact ports and excursions.",
        },
        {
            q: "Does a Scenic Seine cruise visit Giverny?",
            a: "Some itineraries include access to Giverny and Monet-related experiences. Always confirm the specific itinerary before booking.",
        },
        {
            q: "Can I visit the D-Day beaches on a Scenic Seine cruise?",
            a: "Certain itineraries offer Normandy excursions focused on D-Day history. The exact sites and excursion availability depend on the sailing.",
        },
        {
            q: "Is a Scenic Seine River Cruise good for first-time cruisers?",
            a: "Yes. The Seine is relatively straightforward to understand and combines a major city with smaller French destinations and countryside.",
        },
        {
            q: "What is the best time for a Scenic Seine River Cruise?",
            a: "Spring and fall are particularly appealing for comfortable sightseeing. Summer offers longer days, while seasonal departures can provide a different atmosphere.",
        },
        {
            q: "Is Scenic good for a Seine River Cruise?",
            a: "Scenic is a strong option for travelers seeking an all-inclusive luxury experience with personalized service and destination-focused excursions.",
        },
        {
            q: "Is a Scenic Seine cruise good for couples?",
            a: "Yes. Paris, French cuisine, wine, art, gardens, historic towns, and scenic sailing make the Seine especially attractive for couples.",
        },
        {
            q: "Is a Scenic Seine cruise good for families?",
            a: "Yes. The itinerary offers a mix of history, culture, museums, sightseeing, and excursions that can appeal to multiple generations.",
        },
        {
            q: "Are excursions included on a Scenic Seine cruise?",
            a: "Scenic includes a selection of destination experiences, including Freechoice activities and eligible Scenic Enrich experiences. The exact choices vary by itinerary.",
        },
        {
            q: "What cabin should I choose on a Scenic Seine cruise?",
            a: "The best suite depends on your priorities, but travelers who enjoy scenic sailing may appreciate a suite with a Sun Lounge or another dedicated river-view area.",
        },
        {
            q: "Does Scenic offer Butler Service on the Seine?",
            a: "Butler Service is available with eligible Scenic suite categories. Confirm the exact services associated with your selected suite.",
        },
        {
            q: "How much does a Scenic Seine River Cruise cost?",
            a: "Prices vary according to the itinerary, sailing date, suite category, availability, and other travel arrangements. Compare the total inclusions rather than just the starting fare.",
        },
        {
            q: "How many nights should I spend in Paris before a Scenic Seine cruise?",
            a: "For first-time visitors, two or three nights before the cruise is a strong starting point. It provides time to explore Paris and reduces the risk of missing embarkation because of a delayed international flight.",
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
    "Couples",
    "First-time river cruisers",
    "Luxury travelers",
    "Art and culture enthusiasts",
    "History travelers",
    "Food and wine lovers",
    "Travelers interested in Normandy",
    "D-Day history enthusiasts",
    "Multigenerational families",
    "Travelers combining Paris with a river cruise",
];

/* ── Why Choose a Scenic Seine Cruise — Variety Data ──────────────── */
const seineVarietyFeatures = [
    "Paris",
    "Impressionist art",
    "French countryside",
    "Giverny's gardens",
    "Historic Normandy",
    "D-Day history",
    "French cuisine",
    "Scenic sailing",
];

/* ── Where Does a Scenic Seine Cruise Go — Destinations Data ─────── */
const seineDestinations = [
    { key: "paris", title: "Paris", items: ["Eiffel Tower, Louvre & Musée d'Orsay", "Montmartre & the Seine riverfront", "The perfect start or finish to your journey"] },
    { key: "vernon-giverny", title: "Vernon & Giverny", items: ["Monet's former home and gardens", "The landscapes that inspired Impressionism", "A highlight for art and garden lovers"] },
    { key: "rouen", title: "Rouen", items: ["Medieval architecture & Gothic churches", "Joan of Arc history", "An intimate contrast to cosmopolitan Paris"] },
    { key: "normandy", title: "Normandy", items: ["French countryside & coastal scenery", "Regional gastronomy", "The emotional center of many Seine itineraries"] },
    { key: "dday-beaches", title: "D-Day Beaches", items: ["Historic landing beaches & memorials", "Cemeteries & WWII museums", "One of the most meaningful excursions on the Seine"] },
];

/* ── Best Seine Itineraries — Tabbed Data ─────────────────────────── */
const seineItineraries = [
    {
        id: "paris-normandy",
        title: "Paris to Normandy",
        badge: "Best Overall",
        icon: Compass,
        desc: "For first-time travelers, an itinerary that combines Paris with Normandy provides the strongest overall introduction to the Seine, taking in the French countryside, Giverny, Rouen, Normandy, and D-Day history along the way.",
        columns: [
            {
                label: "Best for:",
                items: ["First-time travelers", "The classic Paris + Normandy combination", "A well-rounded introduction to the Seine"],
            },
        ],
    },
    {
        id: "giverny",
        title: "Seine Cruise with Giverny",
        badge: "Art & Gardens",
        icon: Palette,
        desc: "If you're particularly interested in art and gardens, prioritize an itinerary that provides access to Giverny, the village associated with Claude Monet and the landscapes that inspired some of his most famous work.",
        columns: [
            {
                label: "Best for:",
                items: ["Art lovers", "Garden enthusiasts", "Photographers"],
            },
        ],
    },
    {
        id: "normandy-dday",
        title: "Seine Cruise with Normandy & D-Day",
        badge: "History Focus",
        icon: ShieldAlert,
        desc: "History enthusiasts should look for an itinerary with sufficient time for Normandy excursions, including locations associated with the Allied landings of June 1944.",
        columns: [
            {
                label: "Best for:",
                items: ["WWII history travelers", "Museum enthusiasts", "History-focused families"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const seineSeasons = [
    {
        key: "spring",
        icon: <Flower2 size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        intro: "Spring is particularly appealing for:",
        items: [
            "Gardens",
            "Green landscapes",
            "Comfortable sightseeing"
        ],
        outro: "Giverny can be especially attractive during the spring and early summer season.",
        accent: "adg-accent-teal"
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        intro: "Summer provides:",
        items: [
            "Longer daylight",
            "Green countryside",
            "Excellent sightseeing conditions"
        ],
        outro: "It's also a popular travel period, so preferred departures can sell quickly.",
        accent: "adg-accent-navy"
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        intro: "Autumn offers:",
        items: [
            "Changing foliage",
            "Seasonal food",
            "Comfortable temperatures"
        ],
        outro: "The French countryside can be particularly beautiful in the fall.",
        accent: "adg-accent-rose"
    },
    {
        key: "winter",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "December–February",
        title: "Winter",
        intro: "Winter is less about countryside sightseeing, but offers:",
        items: [
            "A quieter Paris experience",
            "Festive holiday itineraries",
            "Fewer crowds at major sites"
        ],
        outro: "The Seine is less focused on classic countryside sightseeing during winter, but travelers looking for a quieter Paris experience may appreciate the season.",
        accent: "adg-accent-teal"
    }
];

/* ── Scenic Seine Excursions Data ─────────────────────────────────── */
const seineExcursions = [
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "Paris Landmarks", desc: "Historic landmarks, architecture, museums, food, and cultural experiences." },
    { icon: <Flower2 size={28} strokeWidth={1.5} />, title: "Giverny", desc: "Monet's home and gardens, and the landscapes that inspired Impressionism." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Rouen", desc: "Medieval history, Gothic architecture, and French culture." },
    { icon: <ShieldAlert size={28} strokeWidth={1.5} />, title: "Normandy & D-Day", desc: "D-Day history and Normandy's regional heritage." },
    { icon: <Compass size={28} strokeWidth={1.5} />, title: "French Countryside", desc: "Walking tours, food, wine, and cultural experiences." },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Freechoice & Enrich", desc: "Scenic's Freechoice experiences let guests choose among available activities, while Scenic Enrich provides exclusive experiences on eligible itineraries." },
];

/* ── Seine Art & Countryside Sightings Data ──────────────────────── */
const artSightings = ["Impressionist landscapes", "French countryside", "Riverside villages", "Historic Normandy coastline"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Sailing date",
    "Duration",
    "Suite category",
    "Ship",
    "Availability",
    "Itinerary",
    "Promotions",
    "Airfare",
    "Pre- and post-cruise hotels",
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

/* ── Scenic Seine vs Other Luxury River Cruises — Comparison Table ── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "All-inclusive luxury and personalized service" },
    { key: "riverside", scenic: "Riverside", ocean: "Spacious luxury suites" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique design and luxury atmosphere" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided travel" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Active excursions and destination experiences" },
    { key: "avalon", scenic: "Avalon", ocean: "Open-air balcony concept" },
    { key: "viking", scenic: "Viking", ocean: "Broad European river cruise network" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Treating Paris as just the embarkation point",
    "Choosing an itinerary without checking the Normandy excursions",
    "Assuming every Seine itinerary includes Giverny",
    "Booking the cabin based only on price",
    "Arriving on embarkation day after an international flight",
    "Trying to do everything in one day",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicSeineRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("paris-normandy");

    const currentItinerary =
        seineItineraries.find((f) => f.id === activeItinerary) || seineItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Seine River Cruises: Paris & Normandy | Complete Guide</title>
                <meta name="title" content="Scenic Seine River Cruises | Paris, Normandy & Best Itineraries" />
                <meta
                    name="description"
                    content="Explore Scenic Seine River Cruises from Paris through Normandy. Discover Rouen, Monet's Giverny, D-Day sites, French cuisine, excursions, cabins, costs and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Seine <br /> River Cruises</h1>

                    <p>
                        A Scenic Seine River Cruise offers a different kind
                        of European river cruise experience. Instead of
                        focusing primarily on multiple countries, a Seine
                        itinerary takes you deep into France, connecting
                        Paris with Normandy, historic towns, Impressionist
                        landscapes, French cuisine, and some of the most
                        important sites in European history.
                    </p>

                    {readMore && (
                        <p>
                            For luxury travelers, the appeal is simple:
                            Paris, Normandy, French culture, and river
                            cruising in one seamless journey. Depending on
                            the itinerary, a Scenic Seine cruise can take you
                            from the heart of Paris toward destinations
                            including Vernon, Giverny, Rouen, Normandy,
                            historic French towns, the D-Day landing
                            beaches, and Impressionist sites — and because
                            your ship travels with you, you can explore
                            France without repeatedly changing hotels.
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
                            Start Planning Your Scenic Seine Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Seine River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Yes — particularly if you want to combine Paris
                            with Normandy, French history, Impressionist
                            art, gardens, cuisine, and a relaxed luxury
                            river cruise experience. The Seine is
                            especially appealing to travelers who want
                            depth rather than country-counting. It's
                            especially well suited to:
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
                            Seine highlights include Paris, Impressionist
                            art, Giverny, historic Normandy, Rouen, D-Day
                            history, French cuisine, and regional food and
                            wine.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC SEINE RIVER CRUISE? ─────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-seine">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Seine River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The Seine is particularly attractive because the
                            itinerary can combine one of the world's great
                            cities with some of France's most historically
                            significant and culturally important
                            destinations. You don't have to choose between a
                            Paris vacation and a Normandy vacation — a Seine
                            river cruise can connect the two:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {seineVarietyFeatures.map((label, i) => (
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
                                        A cosmopolitan capital and intimate
                                        historic destinations — because the
                                        ship travels with you, there's no
                                        need to repeatedly check into hotels.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '350px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        One Ship, All of France
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DOES A SCENIC SEINE CRUISE GO? ────────────────────── */}
            <section
                className="adg-section"
                id="seine-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Does a Scenic Seine River Cruise Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact ports vary by itinerary and sailing date,
                            but some of the most recognizable Scenic Seine
                            destinations include:
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {seineDestinations.map((item) => (
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
                                        <span className="adg-card-eyebrow-label">Seine Destination</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Seine Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Seine sailings and find the perfect fit for your trip.
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


            {/* ── BEST TIME FOR A SCENIC SEINE RIVER CRUISE ───────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time for a Scenic Seine River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            The best time depends on your interests.
                        </p>
                    </div>

                    <div className="sfe-danube-seasons-grid">
                        {seineSeasons.map((item) => (
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

            {/* ── BEST SCENIC SEINE RIVER CRUISE ITINERARIES ──────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Seine River Cruise Itinerary</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            The ideal Seine itinerary depends on your
                            priorities.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {seineItineraries.map((item) => {
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
                        <h2 className="sfe-firsttime-title">Scenic Seine River Cruise for First-Time River Cruisers</h2>

                        <p className="sfe-firsttime-lead">
                            The Seine is a particularly approachable first river cruise because the destination focus is easy to understand.
                        </p>
                    </div>

                    <h4 className="sfe-firsttime-progression-title">
                        You can think of the journey as:
                    </h4>

                    <div className="sfe-firsttime-progression-grid">

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">01</div>
                            <h3 className="sfe-firsttime-step-title">Paris</h3>
                            <span className="sfe-firsttime-step-subtitle">City of Light</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">02</div>
                            <h3 className="sfe-firsttime-step-title">French Countryside</h3>
                            <span className="sfe-firsttime-step-subtitle">Scenic Towns</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">03</div>
                            <h3 className="sfe-firsttime-step-title">Normandy</h3>
                            <span className="sfe-firsttime-step-subtitle">History & Landscapes</span>
                        </div>

                    </div>

                    <div className="sfe-firsttime-footer-box">
                        <p className="sfe-firsttime-callout-text">
                            rather than trying to understand a complicated multi-country itinerary.
                        </p>
                        <p className="sfe-firsttime-conclusion">
                            It's also ideal for travelers who want a river cruise to complement, rather than replace, a traditional European city vacation.
                        </p>
                    </div>

                </div>
            </section>


            {/* ── SCENIC SEINE EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="seine-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Seine River Cruise Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Excursions are central to the experience.
                            Scenic's Freechoice program allows guests to
                            select among available experiences on eligible
                            itineraries, while Scenic Enrich provides
                            specially curated experiences on qualifying
                            sailings.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {seineExcursions.map((item, idx) => (
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

            {/* ── SCENIC SEINE CRUISE FOR ART LOVERS ────────────────────────── */}
            <section className="rlc-lc-worth-section" id="seine-art-lovers">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Scenic Seine Cruise for Art Lovers</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                The Seine is one of the strongest Scenic
                                itineraries for travelers interested in art.
                                The connection between the river and
                                Impressionism is particularly compelling.
                                As the ship sails, you'll pass:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {artSightings.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    For art lovers, exploring Monet, Giverny,
                                    Impressionist landscapes, Paris museums,
                                    and French architecture can feel less
                                    like a conventional cruise and more like
                                    a floating French cultural journey.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={GivernyImage}
                                    alt="Monet's gardens at Giverny along a Scenic Seine river cruise itinerary"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Giverny • A Front-Row Seat</span>
                                </div>
                            </div>
                        </div>
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
                                The Seine gives you Paris, French countryside, Giverny, Rouen, and Normandy — all in one trip. You can think of the journey simply as Paris → French countryside → Normandy, rather than a complicated multi-country itinerary.
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
                                <span className="sfe-cabins-img-label">Seine River Cruise Cabins</span>
                            </div>

                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Seine River Cruise Cabins &amp; Suites</h3>
                                <p className="sfe-cabins-text">
                                    Choosing the right suite matters, especially if you enjoy watching the landscape while sailing. Consider:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Deck position",
                                        "Suite category",
                                        "River views",
                                        "Sun Lounge configuration",
                                        "Suite size",
                                        "Butler Service"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    The Seine is scenic, but the biggest advantage of upgrading isn't necessarily the scenery alone — a better suite can also provide additional comfort and space during a longer journey.
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
                                <h3 className="sfe-cabins-title">Scenic Butler Service on the Seine</h3>
                                <p className="sfe-cabins-text">
                                    Eligible Scenic suites include Butler Service. For travelers who prioritize personalized attention, this can be an important part of the luxury experience. Butler Service can be particularly valuable when travelers have:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Special requests",
                                        "Celebration arrangements",
                                        "In-suite preferences",
                                        "Personalized service needs"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    Exact services depend on the suite and sailing, so confirm the details with your advisor before booking.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* ── FOOD, WINE & D-DAY HISTORY ───────────────────────────── */}
            <section className="sfe-dining-noimg-section" id="food-wine-dday">
                <div className="sfe-dining-noimg-container">
                    <div className="sfe-dining-noimg-grid">

                        {/* Card 1: Food & Wine */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Wine size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Seine Cruise Food &amp; Wine</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                France is one of the world's great culinary destinations, and food naturally becomes an important part of the Seine experience.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can encounter:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '24px' }}>
                                {[
                                    "French pastries",
                                    "Regional cheeses",
                                    "French wines",
                                    "Artisan breads",
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


                        </div>

                        {/* Card 2: D-Day History */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <ShieldAlert size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">D-Day Beaches &amp; World War II History</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                For history-focused travelers, Normandy's D-Day sites can be one of the most meaningful experiences of the journey.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Depending on your itinerary and excursion, experiences can include:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Historic beaches",
                                    "Memorials",
                                    "Cemeteries",
                                    "Museums",
                                    "Battlefield sites"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <CheckCircle size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item.value || item}</span>
                                    </li>
                                ))}
                            </ul>



                            <div className="sfe-dining-noimg-links">
                                <span className="sfe-dining-noimg-links-label">Related Guide:</span>
                                <div className="sfe-dining-noimg-links-grid">
                                    <Link to="/scenic-river-cruises/seine" className="sfe-dining-noimg-link-item">
                                        <span>Scenic Seine River Cruises: The Complete Guide</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ART LOVERS EXPERIENCE ──────────────────────── */}
            <section className="sfe-wine-section" id="art-lovers-experience">
                <div className="sfe-wine-container">
                    <div className="sfe-wine-grid">

                        <div className="sfe-wine-content">
                            <h2 className="sfe-wine-title">Scenic Seine Cruise for Art Lovers</h2>

                            <p className="sfe-wine-lead">
                                The Seine is one of the strongest Scenic itineraries for travelers interested in art.
                            </p>

                            <p className="sfe-wine-desc">
                                The connection between the river and Impressionism is particularly compelling.
                            </p>

                            <div className="sfe-wine-callout">
                                For art lovers, this can feel less like a conventional cruise and more like a floating French cultural journey.
                            </div>

                            <h4 className="sfe-wine-context-title">
                                Travelers can explore:
                            </h4>

                            <div className="sfe-wine-timeline">
                                <span className="sfe-wine-timeline-node">Monet</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">Giverny</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">Impressionist landscapes</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">Paris museums</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">French architecture</span>
                            </div>
                        </div>

                        <div className="sfe-wine-media">
                            <Palette size={72} className="sfe-wine-media-icon" strokeWidth={1} />
                            <span className="sfe-wine-media-label">Seine Art Excursions</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SPACE-SHIPS & SUN LOUNGE EXPERIENCE ──────────────────────── */}
            <section className="sfe-lounge-section" id="sun-lounge-experience">
                <div className="sfe-lounge-container">
                    <div className="sfe-lounge-grid">

                        <div className="sfe-lounge-media">
                            <Compass size={72} className="sfe-lounge-media-icon" strokeWidth={1} />
                        </div>

                        <div className="sfe-lounge-content">
                            <h2 className="sfe-lounge-title">Scenic Space-Ships & Sun Lounge Experience</h2>

                            <p className="sfe-lounge-lead">
                                Scenic's Sun Lounge concept gives travelers a comfortable way to enjoy the river scenery.
                            </p>

                            <h4 className="sfe-lounge-list-title">This can be especially enjoyable while sailing through:</h4>

                            <div className="sfe-lounge-checklist">
                                {[
                                    "French countryside",
                                    "Normandy",
                                    "Historic riverside towns",
                                    "Rural landscapes"
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-lounge-item">
                                        <CheckCircle size={18} strokeWidth={2.5} className="sfe-lounge-icon" />
                                        <span className="sfe-lounge-text">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="sfe-lounge-desc">
                                Instead of treating sailing time as time between ports, consider it part of the destination experience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAMILIES & MULTIGENERATIONAL GROUPS ──────────────────────── */}
            <section className="sfe-family-section" id="families-multigenerational">
                <div className="sfe-family-container">
                    <div className="sfe-family-header">
                        <h2 className="sfe-family-title">Scenic Seine Cruises for Families &amp; Multigenerational Groups</h2>
                        <div className="sfe-family-accent"></div>
                        <p className="sfe-family-intro">
                            The itinerary can work well for multigenerational families, since different generations can find different reasons to enjoy the trip.
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
                                    {["History", "Architecture", "Food", "Scenic sailing"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Parents */}
                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Users size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Generation</p>
                                        <h3 className="sfe-family-gen-title">Parents may appreciate:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Convenient transportation", "Organized excursions"].map((item, i) => (
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
                                        <h3 className="sfe-family-gen-title">Older children &amp; teenagers can experience:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["D-Day history", "Museums", "Castles", "French culture", "Active sightseeing"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Ship size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Seine Family Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Ship size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    The Seine can work well when several generations want to travel together without creating a complicated transportation itinerary.
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
                                <span className="sfe-family-img-label">Seine Couples Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Heart size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    A pre- or post-cruise stay in Paris can make the trip feel substantially more special.
                                </p>
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="sfe-family-generations">
                            <div className="sfe-family-header" style={{ textAlign: 'left', margin: '0 0 32px 0', maxWidth: '100%' }}>
                                <h2 className="sfe-family-title">Scenic Seine Cruise for Couples</h2>
                                <div className="sfe-family-accent" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="sfe-family-intro">
                                    The Seine is an excellent romantic itinerary.
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
                                        "Paris",
                                        "French cuisine",
                                        "Wine",
                                        "Historic towns",
                                        "Scenic sailing",
                                        "Normandy",
                                        "Art and gardens"
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

            {/* ── HOW MUCH DOES A SCENIC SEINE CRUISE COST? ───────────────── */}
            <section className="sfe-cost-section" id="seine-cost" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Seine River Cruise Cost?</h2>
                        <div className="sfe-cost-accent"></div>
                        <p className="sfe-cost-intro">
                            Pricing depends on:
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
                                        <h3 className="sfe-cost-callout-title">Evaluate overall inclusions, not just the headline cruise fare.</h3>
                                    </div>
                                    <div className="sfe-cost-divider" />
                                    <p className="sfe-cost-callout-text">
                                        When comparing Scenic with other Seine river cruises, consider the total experience and inclusions, not just the advertised fare.
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

            {/* ── WHAT IS INCLUDED ON A SCENIC SEINE CRUISE? ──────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Seine Cruise?</h2>
                        <div className="sfe-inc-accent"></div>
                        <p className="sfe-inc-intro">
                            Scenic's all-inclusive approach can include a range of onboard and destination experiences.
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
                                        Exact inclusions vary by itinerary and booking, so verify your sailing before making a final decision.
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

            {/* ── SCENIC SEINE VS OTHER LUXURY RIVER CRUISES ──────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="seine-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Seine vs <br /> Other River Cruise Lines</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The best choice depends on your preferred ship,
                            itinerary, suite, inclusions, and travel style.
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

            {/* ── COMMON SCENIC SEINE CRUISE MISTAKES ─────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Seine Cruise Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Scenic Seine River Cruise.
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
                        <h2 className="sfe-danube-duration-title">How Many Days Do You Need for a Seine River Cruise?</h2>
                        <div className="sfe-danube-duration-accent"></div>
                        <p className="sfe-danube-duration-lead">
                            The ideal trip length depends on how much time you want in Paris and Normandy.
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
                                    "2–3 nights in Paris",
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
                                    "Additional time in Normandy",
                                    "Extending into another French region",
                                    "A more comprehensive French vacation"
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
                            If you're already familiar with Paris, you may instead choose to extend your trip into Normandy or another region of France.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHY BOOK A SCENIC SEINE CRUISE THROUGH A LUXURY TRAVEL ADVISOR? ── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book a Scenic Seine Cruise <br /> Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Matching the Right Cruise to the Reason You're Traveling
                            </h3>
                            <p className="Avr-planning-left-body">
                                The biggest value of an experienced advisor
                                isn't simply finding a cruise — it's
                                matching the right cruise to the reason
                                you're traveling. If you're primarily
                                interested in D-Day history, the advisor can
                                focus on itineraries with appropriate
                                Normandy excursions. If you're an art lover,
                                Giverny and Impressionist experiences become
                                more important.
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
                                A luxury travel advisor can also coordinate:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Plane size={18} />, label: "Flights" },
                                    { icon: <Home size={18} />, label: "Paris hotels" },
                                    { icon: <MapPin size={18} />, label: "Transfers" },
                                    { icon: <Ship size={18} />, label: "Cruise" },
                                    { icon: <Compass size={18} />, label: "Shore excursions" },
                                    { icon: <ShieldCheck size={18} />, label: "Travel insurance" },
                                    { icon: <Sparkles size={18} />, label: "Post-cruise extensions" },
                                    { icon: <Calendar size={18} />, label: "Itinerary planning" },
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
                            Everything you need to know about Scenic Seine
                            River Cruises before booking.
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
                        alt="Scenic Space-Ship sailing past the Eiffel Tower on the Seine at sunset"
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
                                    France, Deepened — <br /> Not Just Visited
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Seine River Cruises are an
                                        excellent choice for travelers who
                                        want to experience France through a
                                        combination of Paris, Normandy,
                                        history, art, food, and luxury river
                                        cruising.

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
                                                The Seine is particularly
                                                different from the Rhine or
                                                Danube. The Rhine is famous
                                                for castles and multiple
                                                countries. The Danube is
                                                famous for Central European
                                                capitals. The Seine is about
                                                France — Paris, Impressionism,
                                                Giverny, Rouen, Normandy,
                                                French cuisine, and French
                                                culture.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                For travelers who want to go
                                                deeper into one country
                                                rather than collect multiple
                                                countries in one trip, the
                                                Seine can be one of Europe's
                                                most rewarding river cruise
                                                experiences. At Trips &amp;
                                                Ships Luxury Travel, we'll
                                                help you compare the ship,
                                                suite, itinerary, and
                                                included experiences — not
                                                simply the advertised cruise
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
                                            Start Planning Your Scenic Seine Cruise
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
                                            "Compare Scenic Seine itineraries and ships",
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

export default ScenicSeineRiverCruises;