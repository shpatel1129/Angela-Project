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
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Rhône & Saône River Cruise photography
   once available. Paths assume a new /assets/ScenicRhoneSaone folder. */
// import HeroImage from "../../assets/ScenicRhoneSaone/scenic-rhone-hero.jpg";
// import ProvenceImage from "../../assets/ScenicRhoneSaone/scenic-rhone-provence.jpg";
// import CabinImage from "../../assets/ScenicRhoneSaone/scenic-rhone-suite.jpg";
// import FinalImage from "../../assets/ScenicRhoneSaone/scenic-rhone-final.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/#webpage",
            name: "Scenic Rhône & Saône River Cruises (2026) | Burgundy, Provence & Guide",
            url: "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/",
            description:
                "Explore Scenic Rhône and Saône River Cruises through Burgundy and Provence. Discover Lyon, Avignon, Arles, vineyards, French cuisine, excursions, cabins, costs and the best time to sail.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/#article",
            headline: "Scenic Rhône & Saône River Cruises: Burgundy, Provence & the Complete Guide",
            description:
                "A complete guide to Scenic Rhône & Saône River Cruises, including Lyon, Burgundy, Beaune, Avignon, Arles, Provence, French wine and cuisine, cabins, cost, and how to choose the right sailing.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/#breadcrumb",
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
                    name: "Scenic Rhône & Saône River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/#itemlist",
            name: "Scenic Rhône & Saône River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Rhône & Saône River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Do Scenic Rhône & Saône Cruises Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Rhône & Saône River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time for a Scenic Rhône & Saône River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Rhône & Saône Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Rhône & Saône Cruise for Art Lovers" },
                { "@type": "ListItem", position: 8, name: "Cabins & Butler Service" },
                { "@type": "ListItem", position: 9, name: "Food, Wine & History" },
                { "@type": "ListItem", position: 10, name: "Couples & Families" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhone-saone/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Scenic Rhône and Saône River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An itinerary combining Burgundy and Provence is an excellent choice for first-time travelers because it provides a broad introduction to French food, wine, history, and countryside.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What destinations are included on a Scenic Rhône and Saône cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary, destinations can include Lyon, Burgundy, Beaune, Mâcon, Vienne, Avignon, Arles, and other locations in southeastern France.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic cruise the Rhône River?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers river cruise itineraries focused on the Rhône and surrounding destinations in southern France.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic cruise the Saône River?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Selected Scenic itineraries combine the Saône with the Rhône to connect Burgundy and Provence.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Rhône and Saône cruise good for wine lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Burgundy and the Rhône Valley are major attractions for wine enthusiasts, making this one of the strongest European river cruise regions for wine-focused travel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Rhône cruise good for food lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Lyon, Burgundy, and Provence each have distinctive culinary traditions, making food an important part of the experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time for a Scenic Rhône River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, summer, and fall each offer different advantages. Fall can be especially appealing to wine travelers, while spring and summer are attractive for landscapes and outdoor sightseeing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Rhône cruise visit Provence?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Scenic Rhône itineraries explore Provence, although exact destinations vary by sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic visit Avignon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avignon is an important destination on many Rhône itineraries, but travelers should confirm the exact port schedule for their sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Rhône cruise visit Arles?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Some itineraries include Arles and its historic and artistic attractions. Check the specific itinerary before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Rhône and Saône cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Burgundy wine, Provençal scenery, French cuisine, historic cities, and luxury accommodations make this an excellent itinerary for couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Rhône and Saône cruise suitable for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Multigenerational families can combine history, food, cultural experiences, and different levels of excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included on Scenic Rhône cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic includes a selection of destination experiences, including Freechoice activities and eligible Scenic Enrich experiences. Exact offerings vary by sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cabin is best on a Scenic Rhône and Saône cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best suite depends on your preferences and budget. Travelers who enjoy scenic sailing may particularly value a suite with a Sun Lounge or dedicated river-view space.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive early for a Scenic Rhône and Saône cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. International travelers should strongly consider arriving at least one day before embarkation, particularly if the cruise begins in Lyon.",
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
            q: "What is the best Scenic Rhône and Saône River Cruise?",
            a: "An itinerary combining Burgundy and Provence is an excellent choice for first-time travelers because it provides a broad introduction to French food, wine, history, and countryside.",
        },
        {
            q: "What destinations are included on a Scenic Rhône and Saône cruise?",
            a: "Depending on the itinerary, destinations can include Lyon, Burgundy, Beaune, Mâcon, Vienne, Avignon, Arles, and other locations in southeastern France.",
        },
        {
            q: "Does Scenic cruise the Rhône River?",
            a: "Yes. Scenic offers river cruise itineraries focused on the Rhône and surrounding destinations in southern France.",
        },
        {
            q: "Does Scenic cruise the Saône River?",
            a: "Yes. Selected Scenic itineraries combine the Saône with the Rhône to connect Burgundy and Provence.",
        },
        {
            q: "Is the Rhône and Saône cruise good for wine lovers?",
            a: "Yes. Burgundy and the Rhône Valley are major attractions for wine enthusiasts, making this one of the strongest European river cruise regions for wine-focused travel.",
        },
        {
            q: "Is a Scenic Rhône cruise good for food lovers?",
            a: "Yes. Lyon, Burgundy, and Provence each have distinctive culinary traditions, making food an important part of the experience.",
        },
        {
            q: "What is the best time for a Scenic Rhône River Cruise?",
            a: "Spring, summer, and fall each offer different advantages. Fall can be especially appealing to wine travelers, while spring and summer are attractive for landscapes and outdoor sightseeing.",
        },
        {
            q: "Does a Scenic Rhône cruise visit Provence?",
            a: "Many Scenic Rhône itineraries explore Provence, although exact destinations vary by sailing.",
        },
        {
            q: "Does Scenic visit Avignon?",
            a: "Avignon is an important destination on many Rhône itineraries, but travelers should confirm the exact port schedule for their sailing.",
        },
        {
            q: "Does a Scenic Rhône cruise visit Arles?",
            a: "Some itineraries include Arles and its historic and artistic attractions. Check the specific itinerary before booking.",
        },
        {
            q: "Is a Scenic Rhône and Saône cruise good for couples?",
            a: "Yes. Burgundy wine, Provençal scenery, French cuisine, historic cities, and luxury accommodations make this an excellent itinerary for couples.",
        },
        {
            q: "Is the Rhône and Saône cruise suitable for families?",
            a: "Yes. Multigenerational families can combine history, food, cultural experiences, and different levels of excursions.",
        },
        {
            q: "Are excursions included on Scenic Rhône cruises?",
            a: "Scenic includes a selection of destination experiences, including Freechoice activities and eligible Scenic Enrich experiences. Exact offerings vary by sailing.",
        },
        {
            q: "Which cabin is best on a Scenic Rhône and Saône cruise?",
            a: "The best suite depends on your preferences and budget. Travelers who enjoy scenic sailing may particularly value a suite with a Sun Lounge or dedicated river-view space.",
        },
        {
            q: "Should I arrive early for a Scenic Rhône and Saône cruise?",
            a: "Yes. International travelers should strongly consider arriving at least one day before embarkation, particularly if the cruise begins in Lyon.",
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
    "Luxury travelers",
    "Foodies",
    "Wine enthusiasts",
    "Art lovers",
    "History travelers",
    "First-time river cruisers",
    "Multigenerational travelers",
    "Travelers who want to explore Burgundy and Provence",
];

/* ── Why Choose a Scenic Rhône & Saône Cruise — Variety Data ──────────────── */
const rhoneVarietyFeatures = [
    "Lyon",
    "Burgundy vineyards",
    "Beaune",
    "The Saône Valley",
    "Avignon",
    "Arles",
    "Provence",
    "French wine & cuisine",
];

/* ── Where Do Scenic Rhône & Saône Cruises Go — Destinations Data ─────── */
const rhoneDestinations = [
    { key: "lyon", title: "Lyon", items: ["French gastronomy & Old Lyon", "Renaissance architecture", "An excellent starting or ending point"] },
    { key: "burgundy", title: "Burgundy", items: ["Vineyards & wine estates", "Historic villages", "Synonymous with French wine and gastronomy"] },
    { key: "beaune", title: "Beaune", items: ["Burgundy's best-known wine destination", "Historic center & architecture", "A deeper look at Burgundy wine culture"] },
    { key: "vienne", title: "Vienne", items: ["Roman heritage & archaeological sites", "Historic churches", "A fascinating connection to France's Roman past"] },
    { key: "avignon", title: "Avignon", items: ["Palais des Papes & Pont d'Avignon", "Medieval architecture", "One of the major highlights of a Rhône cruise"] },
    { key: "arles", title: "Arles", items: ["Roman history & Provençal culture", "Vincent van Gogh connections", "Compelling for art and history travelers"] },
    { key: "provence", title: "Provence", items: ["Lavender landscapes & countryside", "Provençal cuisine & wine", "The emotional highlight for many travelers"] },
];

/* ── Best Rhône & Saône Itineraries — Tabbed Data ─────────────────────────── */
const rhoneItineraries = [
    {
        id: "burgundy-provence",
        title: "Burgundy & Provence Itinerary",
        badge: "Best Overall",
        icon: Compass,
        desc: "For first-time travelers, an itinerary connecting the Burgundy region with Provence provides the broadest experience, combining Lyon, Burgundy, vineyards, the Rhône Valley, Avignon, and Provence.",
        columns: [
            {
                label: "Best for:",
                items: ["Travelers who want a comprehensive experience", "French food, wine, culture & countryside", "First-time travelers to the region"],
            },
        ],
    },
    {
        id: "rhone-valley",
        title: "Rhône Valley-Focused Cruise",
        badge: "Provence & South",
        icon: Sun,
        desc: "If your interests lean more toward Provence and southern France, look for an itinerary that provides greater time along the Rhône.",
        columns: [
            {
                label: "Best for:",
                items: ["Provence lovers", "Art travelers", "History and food & wine enthusiasts"],
            },
        ],
    },
    {
        id: "burgundy-focused",
        title: "Burgundy-Focused Experience",
        badge: "Wine Focus",
        icon: Wine,
        desc: "If wine is your primary reason for traveling, focus on itineraries and excursions that provide substantial time in Burgundy.",
        columns: [
            {
                label: "Best for:",
                items: ["Wine enthusiasts", "Food travelers", "Travelers interested in French countryside"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const rhoneSeasons = [
    {
        key: "spring",
        icon: <Flower2 size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        intro: "Spring can be excellent for:",
        items: [
            "Flowers & gardens",
            "Green countryside",
            "Comfortable sightseeing"
        ],
        outro: "It's a good choice for travelers who prefer moderate temperatures.",
        accent: "adg-accent-teal"
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        intro: "Summer is popular for good reason. You can expect:",
        items: [
            "Longer days",
            "Vibrant landscapes",
            "Outdoor sightseeing & dining"
        ],
        outro: "Provence can be particularly appealing during the summer months.",
        accent: "adg-accent-navy"
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        intro: "Fall is an excellent season for food and wine travelers. Highlights can include:",
        items: [
            "Harvest season",
            "Wine experiences",
            "Autumn landscapes & seasonal cuisine"
        ],
        outro: "If wine is your primary interest, consider carefully researching the exact dates of your sailing.",
        accent: "adg-accent-rose"
    },
    {
        key: "winter",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "December–February",
        title: "Winter",
        intro: "Winter provides a quieter experience, offering:",
        items: [
            "Fewer crowds",
            "Holiday-themed French travel",
            "A calmer pace"
        ],
        outro: "Winter doesn't showcase Provence in quite the same way as spring and summer, but can still be attractive for travelers who prefer festive experiences.",
        accent: "adg-accent-teal"
    }
];

/* ── Scenic Rhône & Saône Excursions Data ─────────────────────────────────── */
const rhoneExcursions = [
    { icon: <Utensils size={28} strokeWidth={1.5} />, title: "Food", desc: "Explore regional French culinary traditions." },
    { icon: <Wine size={28} strokeWidth={1.5} />, title: "Wine", desc: "Visit vineyards, wine-producing regions, and tasting experiences." },
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "History", desc: "Explore Roman, medieval, and religious heritage." },
    { icon: <Palette size={28} strokeWidth={1.5} />, title: "Art", desc: "Discover destinations associated with French artists and artistic movements." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Architecture", desc: "Visit historic cities, churches, palaces, and villages." },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Freechoice & Enrich", desc: "Scenic's Freechoice program allows travelers to select from available experiences, while Scenic Enrich offers specially curated experiences on eligible sailings." },
];

/* ── Rhône & Saône Art & Countryside Sightings Data ──────────────────────── */
const artSightings = ["Vineyard-covered hillsides", "Provençal light & landscapes", "Riverside villages", "Rhône Valley countryside"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Travel dates",
    "Cruise length",
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

/* ── Scenic Rhône & Saône vs Other Luxury River Cruises — Comparison Table ── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "All-inclusive luxury and personalized service" },
    { key: "riverside", scenic: "Riverside", ocean: "Spacious luxury suites" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique design and distinctive interiors" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided travel" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Active excursions and destination experiences" },
    { key: "avalon", scenic: "Avalon", ocean: "Open-air balcony concept" },
    { key: "viking", scenic: "Viking", ocean: "Extensive European river network" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Choosing the cruise without checking the season",
    "Booking solely for the headline destinations",
    "Ignoring wine-focused experiences",
    "Choosing a cabin without checking its position",
    "Arriving in Lyon on embarkation day",
    "Not extending the trip",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRhoneSaoneRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("burgundy-provence");

    const currentItinerary =
        rhoneItineraries.find((f) => f.id === activeItinerary) || rhoneItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Rhône & Saône River Cruises | Burgundy, Provence & Guide</title>
                <meta name="title" content="Scenic Rhône & Saône River Cruises | Burgundy & Provence" />
                <meta
                    name="description"
                    content="Explore Scenic Rhône and Saône River Cruises through Burgundy and Provence. Discover Lyon, Avignon, Arles, vineyards, French cuisine, excursions, cabins, costs and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Rhône & Saône <br /> River Cruises</h1>

                    <p>
                        A Scenic Rhône and Saône River Cruise is one of the
                        best ways to experience the food, wine, history, and
                        landscapes of southern France. While the Seine
                        introduces travelers to Paris and Normandy, and the
                        Rhine and Danube connect multiple European
                        destinations, the Rhône and Saône offer something
                        distinctly different: an immersive journey through
                        French Burgundy and Provence.
                    </p>

                    {readMore && (
                        <p>
                            The journey can combine Lyon, Burgundy, Beaune,
                            the Saône Valley, Avignon, Arles, Provence,
                            French vineyards, historic villages, regional
                            cuisine, and Mediterranean-influenced
                            landscapes. For luxury travelers, the attraction
                            isn't simply seeing France — it's experiencing
                            how different regions of France feel, taste,
                            and look as you move south.
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
                            Start Planning Your Scenic Rhône & Saône Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Rhône & Saône River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Yes — especially for travelers who prioritize
                            French food, wine, history, art, culture, and
                            countryside over visiting a large number of
                            countries in one trip. The Rhône and Saône are
                            particularly strong for travelers who want a
                            slower, more immersive French experience. It's
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
                            Rhône & Saône highlights include Burgundy
                            vineyards, French wine, regional cuisine, Lyon,
                            Beaune, Provence, Avignon, Arles, and southern
                            France.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC RHÔNE & SAÔNE RIVER CRUISE? ─────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-rhone">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Rhône & Saône River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The biggest advantage is regional depth. Rather
                            than crossing several countries, the itinerary
                            allows you to explore different sides of
                            France. You can begin with the culinary and
                            cultural heritage of Lyon and Burgundy before
                            moving south toward the warmer landscapes and
                            historic cities of Provence — Burgundy → Rhône
                            Valley → Provence:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {rhoneVarietyFeatures.map((label, i) => (
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
                                        A culinary capital and a warm
                                        southern countryside — because the
                                        ship travels with you, there's no
                                        need to repeatedly check into
                                        hotels.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '350px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        One Ship, From Burgundy to Provence
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DO SCENIC RHÔNE & SAÔNE CRUISES GO? ────────────────────── */}
            <section
                className="adg-section"
                id="rhone-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Do Scenic Rhône & Saône River Cruises Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact destinations depend on your itinerary and
                            sailing date, but Rhône and Saône journeys
                            commonly focus on destinations in southeastern
                            France, including:
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {rhoneDestinations.map((item) => (
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
                                        <span className="adg-card-eyebrow-label">Rhône & Saône Destination</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Rhône & Saône Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Rhône & Saône sailings and find the perfect fit for your trip.
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


            {/* ── BEST TIME FOR A SCENIC RHÔNE & SAÔNE RIVER CRUISE ───────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time for a Scenic Rhône & Saône River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            Timing can significantly influence the experience.
                        </p>
                    </div>

                    <div className="sfe-danube-seasons-grid">
                        {rhoneSeasons.map((item) => (
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

            {/* ── BEST SCENIC RHÔNE & SAÔNE RIVER CRUISE ITINERARIES ──────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Rhône & Saône River Cruise Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            There isn't one itinerary that's perfect for
                            everyone — your priorities should determine
                            your choice.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {rhoneItineraries.map((item) => {
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
                        <h2 className="sfe-firsttime-title">Scenic Rhône & Saône Cruise for First-Time River Cruisers</h2>
                        
                        <p className="sfe-firsttime-lead">
                            The Rhône and Saône can be an excellent introduction to river cruising.
                        </p>
                        
                        <p className="sfe-firsttime-desc">
                            Unlike a multi-country itinerary, you can focus on one country while experiencing dramatically different regions.
                        </p>
                    </div>

                    <h4 className="sfe-firsttime-progression-title">
                        The trip can feel like a progression:
                    </h4>

                    <div className="sfe-firsttime-progression-grid">
                        
                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">01</div>
                            <h3 className="sfe-firsttime-step-title">Burgundy</h3>
                            <span className="sfe-firsttime-step-subtitle">Wine Country</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">02</div>
                            <h3 className="sfe-firsttime-step-title">Rhône Valley</h3>
                            <span className="sfe-firsttime-step-subtitle">Historic Towns</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">03</div>
                            <h3 className="sfe-firsttime-step-title">Provence</h3>
                            <span className="sfe-firsttime-step-subtitle">Country & Culture</span>
                        </div>

                    </div>

                    <div className="sfe-firsttime-footer-box">
                        <p className="sfe-firsttime-callout-text">
                            Paris-style urban culture isn't the focus.
                        </p>
                        <p className="sfe-firsttime-conclusion">
                            That makes the cruise particularly attractive to travelers who prefer depth over breadth.
                        </p>
                    </div>

                </div>
            </section>


            {/* ── SCENIC RHÔNE & SAÔNE EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="rhone-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Rhône & Saône River Cruise Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Excursions can be one of the biggest reasons to
                            choose this itinerary. Scenic's Freechoice
                            program allows travelers to select from
                            available experiences, while Scenic Enrich
                            offers specially curated experiences on
                            eligible sailings.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {rhoneExcursions.map((item, idx) => (
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

            {/* ── SCENIC RHÔNE & SAÔNE CRUISE FOR ART LOVERS ────────────────────────── */}
            <section className="rlc-lc-worth-section" id="rhone-art-lovers">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Scenic Rhône & Saône Cruise for Art Lovers</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                The itinerary offers several strong
                                connections to art. Arles is particularly
                                important because of its association with
                                Vincent van Gogh, and the landscapes and
                                light of Provence also provide a strong
                                artistic connection. As the ship sails,
                                you'll pass:
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
                                    Combined with French architecture and
                                    historic cities, the journey can be
                                    particularly rewarding for travelers
                                    interested in visual culture.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={ProvenceImage}
                                    alt="Provençal vineyards and countryside along a Scenic Rhône & Saône river cruise itinerary"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Arles & Provence • A Front-Row Seat</span>
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
                                The Rhône and Saône give you Lyon, Burgundy, the Rhône Valley, and Provence — all in one trip. You can think of the journey simply as Burgundy wine country → Rhône Valley → Provence, rather than a complicated multi-country itinerary.
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
                                <span className="sfe-cabins-img-label">Rhône & Saône River Cruise Cabins</span>
                            </div>
                            
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Rhône & Saône River Cruise Cabins &amp; Suites</h3>
                                <p className="sfe-cabins-text">
                                    Your suite can significantly affect your experience. When comparing cabins, consider:
                                </p>
                                
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Deck",
                                        "Suite size",
                                        "River views",
                                        "Sun Lounge configuration",
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
                                    If you're traveling during scenic stretches of the Rhône, having a comfortable place to watch the landscape can be worthwhile.
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
                                <h3 className="sfe-cabins-title">Scenic Butler Service on the Rhône & Saône</h3>
                                <p className="sfe-cabins-text">
                                    Butler Service is available with eligible Scenic suites. Travelers choosing premium suites may appreciate having additional personalized assistance throughout their journey. This can be especially valuable for:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Special occasions",
                                        "Celebration travel",
                                        "Families",
                                        "Travelers with specific preferences"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    Exact services depend on the suite and itinerary, so confirm the details with your advisor before booking.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* ── FOOD, WINE & HISTORY ───────────────────────────── */}
            <section className="sfe-dining-noimg-section" id="food-wine-history">
                <div className="sfe-dining-noimg-container">
                    <div className="sfe-dining-noimg-grid">

                        {/* Card 1: Food & Wine */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Wine size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Rhône & Saône for Food Lovers</h3>
                            </div>

                            <p className="sfe-dining-noimg-text" style={{ fontWeight: 600, marginBottom: '8px' }}>
                                Food is another major strength.
                            </p>

                            <p className="sfe-dining-noimg-text">
                                Lyon has a particularly strong culinary reputation, while Burgundy and Provence offer very different regional traditions.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can experience:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '20px' }}>
                                {[
                                    "French pastries",
                                    "Regional cheeses",
                                    "Wine pairings",
                                    "Regional specialties",
                                    "Provençal flavors",
                                    "Fine dining"
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
                                For serious food travelers, consider extending the cruise with restaurant reservations in Lyon or Provence.
                            </p>
                        </div>

                        {/* Card 2: History */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Landmark size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Roman, Medieval & Religious History</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                This itinerary covers centuries of French history, from Roman heritage to medieval religious life.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Depending on the destinations visited, travelers can encounter:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Roman history",
                                    "Medieval France",
                                    "Religious history",
                                    "Renaissance architecture",
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
                                Vienne and Arles are particularly notable for their Roman heritage, while Avignon provides a window into medieval religious history as the former seat of the papacy.
                            </p>

                            <div className="sfe-dining-noimg-links">
                                <span className="sfe-dining-noimg-links-label">Related Guide:</span>
                                <div className="sfe-dining-noimg-links-grid">
                                    <Link to="/scenic-river-cruises/rhone-saone" className="sfe-dining-noimg-link-item">
                                        <span>Scenic Rhône & Saône River Cruises: The Complete Guide</span>
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
                          
                            <h2 className="sfe-wine-title">Scenic Rhône & Saône for Wine Lovers</h2>
                            
                            <p className="sfe-wine-lead">
                                If you're choosing this cruise primarily for wine, you're looking at the right region.
                            </p>
                            
                            <p className="sfe-wine-desc">
                                The itinerary can introduce travelers to some of France's most famous wine-producing areas.
                            </p>

                            <div className="sfe-wine-callout">
                                Burgundy is particularly important for wine enthusiasts.
                            </div>

                            <h4 className="sfe-wine-context-title">
                                Rather than simply visiting a tasting room, a well-designed itinerary can help put the wine into context:
                            </h4>

                            <div className="sfe-wine-timeline">
                                <span className="sfe-wine-timeline-node">vineyard</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">village</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">producer</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">cuisine</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">culture</span>
                            </div>

                            <p className="sfe-wine-conclusion">
                                That's what makes a destination-focused river cruise especially useful for wine travelers.
                            </p>
                        </div>

                        <div className="sfe-wine-media">
                            <Wine size={72} className="sfe-wine-media-icon" strokeWidth={1} />
                            <span className="sfe-wine-media-label">Rhône & Saône Wine Regions</span>
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
                
                            <h2 className="sfe-lounge-title">Scenic Sun Lounge Experience</h2>
                            
                            <p className="sfe-lounge-lead">
                                Scenic's Sun Lounge concept can make scenic sailing more enjoyable.
                            </p>

                            <h4 className="sfe-lounge-list-title">You can watch:</h4>

                            <div className="sfe-lounge-checklist">
                                {[
                                    "Vineyards",
                                    "French villages",
                                    "Historic towns",
                                    "Countryside",
                                    "Rhône Valley landscapes"
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
                                This is particularly useful if you prefer a more private viewing experience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAMILIES & MULTIGENERATIONAL GROUPS ──────────────────────── */}
            <section className="sfe-family-section" id="families-multigenerational">
                <div className="sfe-family-container">
                    <div className="sfe-family-header">
                        <h2 className="sfe-family-title">Scenic Rhône & Saône Cruises for Families &amp; Multigenerational Groups</h2>
                        <div className="sfe-family-accent"></div>
                        <p className="sfe-family-intro">
                            The itinerary can work well for families traveling across generations — the key is choosing excursions that offer different activity levels.
                        </p>
                    </div>

                    <div className="sfe-family-layout">
                        {/* Left: Generation preference cards */}
                        <div className="sfe-family-generations">
                            {/* Older travelers */}
                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Heart size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Generation</p>
                                        <h3 className="sfe-family-gen-title">Older travelers may enjoy:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["History", "Food", "Wine", "Architecture", "Scenic sailing"].map((item, i) => (
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
                                    {["Culinary experiences", "Wine", "Luxury accommodations", "French culture"].map((item, i) => (
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
                                    {["Roman history", "Castles", "Art", "Active excursions", "French cities"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Ship size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Rhône & Saône Family Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Ship size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    The key is choosing excursions that offer different activity levels, so every generation finds their own reason to enjoy the trip.
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
                                <span className="sfe-family-img-label">Rhône & Saône Couples Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Heart size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    Couples can also extend their journey with additional nights in Lyon, Paris, or Provence.
                                </p>
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="sfe-family-generations">
                            <div className="sfe-family-header" style={{ textAlign: 'left', margin: '0 0 32px 0', maxWidth: '100%' }}>
                                <h2 className="sfe-family-title">Scenic Rhône & Saône Cruise for Couples</h2>
                                <div className="sfe-family-accent" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="sfe-family-intro">
                                    This is one of the strongest Scenic itineraries for couples.
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
                                        "French wine",
                                        "Fine dining",
                                        "Provence",
                                        "Burgundy",
                                        "Historic villages",
                                        "Art",
                                        "Romantic cities",
                                        "Scenic sailing"
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

            {/* ── HOW MUCH DOES A SCENIC RHÔNE & SAÔNE CRUISE COST? ───────────────── */}
            <section className="sfe-cost-section" id="rhone-cost" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Rhône & Saône River Cruise Cost?</h2>
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
                                        When comparing Scenic with other luxury French river cruises, evaluate the total value and inclusions, not simply the starting cruise price.
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

            {/* ── WHAT IS INCLUDED ON A SCENIC RHÔNE & SAÔNE CRUISE? ──────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Rhône & Saône Cruise?</h2>
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

            {/* ── SCENIC RHÔNE & SAÔNE VS OTHER LUXURY RIVER CRUISES ──────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="rhone-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Rhône & Saône vs <br /> Other Luxury River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            There isn't one universally best cruise line —
                            the right choice depends on itinerary, ship,
                            suite, dining, excursions, service style,
                            inclusions, and budget.
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

            {/* ── COMMON SCENIC RHÔNE & SAÔNE CRUISE MISTAKES ─────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Rhône & Saône Cruise Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Scenic Rhône & Saône River Cruise.
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
                        <h2 className="sfe-danube-duration-title">How Many Days Do You Need for a Rhône & Saône River Cruise?</h2>
                        <div className="sfe-danube-duration-accent"></div>
                        <p className="sfe-danube-duration-lead">
                            A longer trip allows you to enjoy the cruise without rushing the surrounding destinations.
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
                                    "1–2 nights in Lyon",
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
                                    "Extending your stay in Provence or Avignon",
                                    "Adding time in Paris or another French destination",
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
                            Lyon is important enough that rushing through it would be a missed opportunity — arriving early provides protection from flight delays and more time to experience the city.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHY BOOK A SCENIC RHÔNE & SAÔNE CRUISE THROUGH A LUXURY TRAVEL ADVISOR? ── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book a Scenic Rhône & Saône Cruise Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                The Right Itinerary Depends on Why You Want to Visit France
                            </h3>
                            <p className="Avr-planning-left-body">
                                A traveler primarily interested in wine may
                                need a different itinerary from someone
                                focused on Provence, art, food, Roman
                                history, or family travel. A luxury travel
                                advisor can help coordinate the complete
                                journey, which is particularly valuable
                                when the cruise is one part of a longer
                                European vacation.
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
                                    { icon: <Home size={18} />, label: "Hotels" },
                                    { icon: <Ship size={18} />, label: "Scenic cruise" },
                                    { icon: <MapPin size={18} />, label: "Suite selection" },
                                    { icon: <Compass size={18} />, label: "Excursions" },
                                    { icon: <ShieldCheck size={18} />, label: "Travel insurance" },
                                    { icon: <Calendar size={18} />, label: "Transfers" },
                                    { icon: <Sparkles size={18} />, label: "Pre- and post-cruise stays" },
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
                            Everything you need to know about Scenic Rhône
                            & Saône River Cruises before booking.
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
                        alt="Scenic Space-Ship sailing past Provence vineyards on the Rhône at sunset"
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
                                    Burgundy to Provence — <br /> A Journey Through French Lifestyle
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Rhône & Saône River Cruises
                                        are an exceptional choice for
                                        travelers who want to experience
                                        France through food, wine, history,
                                        art, and countryside.

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
                                                The itinerary's biggest
                                                advantage is its depth. You
                                                can move from Burgundy
                                                through the Rhône Valley to
                                                Provence while enjoying the
                                                convenience of a luxury
                                                river cruise. For wine
                                                lovers, food travelers,
                                                couples, art enthusiasts,
                                                and travelers who want to
                                                explore France beyond
                                                Paris, this is one of
                                                Scenic's most compelling
                                                itineraries.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If the Rhine is about
                                                castles and the Danube is
                                                about Central European
                                                capitals, the Rhône and
                                                Saône are about French
                                                lifestyle, gastronomy,
                                                wine, and regional culture.
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
                                            Start Planning Your Scenic Rhône & Saône Cruise
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
                                            "Compare Scenic Rhône & Saône itineraries and ships",
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

export default ScenicRhoneSaoneRiverCruises;