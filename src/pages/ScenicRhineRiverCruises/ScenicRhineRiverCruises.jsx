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
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Rhine River Cruise photography once
   available. Paths assume a new /assets/ScenicRhine folder. */
// import HeroImage from "../../assets/ScenicRhine/scenic-rhine-hero.jpg";
// import GorgeImage from "../../assets/ScenicRhine/scenic-rhine-gorge-castle.jpg";
// import CabinImage from "../../assets/ScenicRhine/scenic-rhine-suite.jpg";
// import FinalImage from "../../assets/ScenicRhine/scenic-rhine-final.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhine/#webpage",
            name: "Scenic Rhine River Cruises (2026) | Itineraries, Ports & Travel Guide",
            url: "https://www.tripsandships.com/scenic-river-cruises/rhine/",
            description:
                "Explore Scenic Rhine River Cruises with our complete guide to itineraries, destinations, castles, Christmas markets, cabins, excursions, costs, and the best time to sail.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhine/#article",
            headline: "Scenic Rhine River Cruises: The Complete Guide",
            description:
                "A complete guide to Scenic Rhine River Cruises, including where they go, the best itineraries, when to travel, excursions, cabins, cost, and how to choose the right sailing.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhine/#breadcrumb",
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
                    name: "Scenic Rhine River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/rhine/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhine/#itemlist",
            name: "Scenic Rhine River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Rhine River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Does a Scenic Rhine River Cruise Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Rhine River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time to Take a Scenic Rhine River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Rhine Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Rhine Cruise Castles" },
                { "@type": "ListItem", position: 8, name: "Cabins & Butler Service" },
                { "@type": "ListItem", position: 9, name: "Food, Wine & Christmas Markets" },
                { "@type": "ListItem", position: 10, name: "Families & Couples" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/rhine/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Scenic Rhine River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For first-time travelers, an itinerary connecting Amsterdam and Basel can provide an excellent overview of the Rhine region. The best choice ultimately depends on the specific ports, duration, and experiences included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What countries can you visit on a Scenic Rhine River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary, Rhine cruises can include destinations in the Netherlands, Germany, France, and Switzerland.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for a Rhine River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic is particularly well suited to travelers looking for an all-inclusive luxury river cruise with personalized service and included destination experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time to cruise the Rhine?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, summer, and fall are excellent for general sightseeing. Winter is particularly appealing for Christmas Market cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Rhine River Cruise good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The Rhine offers a strong combination of major cities, villages, castles, countryside, and cultural experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the highlights of a Scenic Rhine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Popular highlights include Cologne, Rhine Gorge castles, Rüdesheim, Strasbourg, vineyards, medieval towns, and Christmas markets.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I see castles from a Scenic Rhine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Castle scenery is one of the defining highlights of cruising through the Rhine Gorge.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Rhine cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The combination of castles, vineyards, historic cities, food, wine, and luxury accommodations makes the Rhine particularly appealing for couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Scenic Rhine cruise good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, especially for multigenerational families with teenagers and adult children who enjoy history, culture, food, and sightseeing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Rhine excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic includes a selection of destination experiences as part of its river cruise offering, including Freechoice activities and eligible Scenic Enrich experiences. Exact options vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Rhine Christmas Market cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic operates seasonal European river cruises focused on Christmas markets, with Rhine itineraries among the popular options.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic Rhine cabin is best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best cabin depends on your priorities. Travelers who want to spend substantial time watching the scenery should consider suites with a Sun Lounge or balcony-style viewing area.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic have Butler Service on the Rhine?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Butler Service is available with eligible Scenic suite categories. The exact service depends on the ship and suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How far in advance should I book a Scenic Rhine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For popular departures, premium suites, and Christmas Market cruises, booking well in advance is recommended.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I add time before or after my Scenic Rhine cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Adding time in Amsterdam, Basel, or another destination can turn your river cruise into a more comprehensive European vacation and provides protection against travel delays.",
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
            q: "What is the best Scenic Rhine River Cruise?",
            a: "For first-time travelers, an itinerary connecting Amsterdam and Basel can provide an excellent overview of the Rhine region. The best choice ultimately depends on the specific ports, duration, and experiences included.",
        },
        {
            q: "What countries can you visit on a Scenic Rhine River Cruise?",
            a: "Depending on the itinerary, Rhine cruises can include destinations in the Netherlands, Germany, France, and Switzerland.",
        },
        {
            q: "Is Scenic good for a Rhine River Cruise?",
            a: "Yes. Scenic is particularly well suited to travelers looking for an all-inclusive luxury river cruise with personalized service and included destination experiences.",
        },
        {
            q: "What is the best time to cruise the Rhine?",
            a: "Spring, summer, and fall are excellent for general sightseeing. Winter is particularly appealing for Christmas Market cruises.",
        },
        {
            q: "Is the Rhine River Cruise good for first-time river cruisers?",
            a: "Yes. The Rhine offers a strong combination of major cities, villages, castles, countryside, and cultural experiences.",
        },
        {
            q: "What are the highlights of a Scenic Rhine cruise?",
            a: "Popular highlights include Cologne, Rhine Gorge castles, Rüdesheim, Strasbourg, vineyards, medieval towns, and Christmas markets.",
        },
        {
            q: "Can I see castles from a Scenic Rhine cruise?",
            a: "Yes. Castle scenery is one of the defining highlights of cruising through the Rhine Gorge.",
        },
        {
            q: "Is a Scenic Rhine cruise good for couples?",
            a: "Yes. The combination of castles, vineyards, historic cities, food, wine, and luxury accommodations makes the Rhine particularly appealing for couples.",
        },
        {
            q: "Is the Scenic Rhine cruise good for families?",
            a: "Yes, especially for multigenerational families with teenagers and adult children who enjoy history, culture, food, and sightseeing.",
        },
        {
            q: "Are Scenic Rhine excursions included?",
            a: "Scenic includes a selection of destination experiences as part of its river cruise offering, including Freechoice activities and eligible Scenic Enrich experiences. Exact options vary by itinerary.",
        },
        {
            q: "Does Scenic offer Rhine Christmas Market cruises?",
            a: "Yes. Scenic operates seasonal European river cruises focused on Christmas markets, with Rhine itineraries among the popular options.",
        },
        {
            q: "Which Scenic Rhine cabin is best?",
            a: "The best cabin depends on your priorities. Travelers who want to spend substantial time watching the scenery should consider suites with a Sun Lounge or balcony-style viewing area.",
        },
        {
            q: "Does Scenic have Butler Service on the Rhine?",
            a: "Butler Service is available with eligible Scenic suite categories. The exact service depends on the ship and suite.",
        },
        {
            q: "How far in advance should I book a Scenic Rhine cruise?",
            a: "For popular departures, premium suites, and Christmas Market cruises, booking well in advance is recommended.",
        },
        {
            q: "Should I add time before or after my Scenic Rhine cruise?",
            a: "Yes. Adding time in Amsterdam, Basel, or another destination can turn your river cruise into a more comprehensive European vacation and provides protection against travel delays.",
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
    "First-time river cruisers",
    "Couples",
    "Luxury travelers",
    "Multigenerational families",
    "Food and wine travelers",
    "History enthusiasts",
    "Christmas Market travelers",
    "Travelers who want to visit several destinations in one trip",
];

/* ── Why Choose a Scenic Rhine Cruise — Variety Data ───────────────── */
const rhineVarietyFeatures = [
    "Multiple countries",
    "Major European cities",
    "Small historic towns",
    "Castles",
    "Vineyards",
    "Culinary experiences",
    "Cultural excursions",
    "Scenic sailing",
];

/* ── Where Does a Scenic Rhine Cruise Go — Destinations Data ───────── */
const rhineDestinations = [
    { key: "amsterdam", title: "Amsterdam", items: ["Historic canals & museums", "Arrive early to explore first"] },
    { key: "cologne", title: "Cologne", items: ["Home to Cologne Cathedral", "One of Germany's most recognizable cities"] },
    { key: "koblenz", title: "Koblenz", items: ["Where the Rhine and Moselle meet", "Gateway to the Rhine Valley"] },
    { key: "rudesheim", title: "Rüdesheim", items: ["Classic Rhine wine town", "Charming in the evening"] },
    { key: "rhine-gorge", title: "Rhine Gorge", items: ["Hilltop castles & vineyards", "The visual highlight of the cruise"] },
    { key: "strasbourg", title: "Strasbourg", items: ["French-German heritage", "Petite France & the Cathedral"] },
    { key: "basel", title: "Basel", items: ["Where Switzerland, France & Germany meet", "Gateway to the Swiss Alps"] },
];

/* ── Best Rhine Itineraries — Tabbed Data ──────────────────────────── */
const rhineItineraries = [
    {
        id: "amsterdam-basel",
        title: "Amsterdam to Basel",
        badge: "Best Overall",
        icon: Compass,
        desc: "For first-time Rhine travelers, an itinerary connecting Amsterdam and Basel can provide an excellent overview of the region, moving through the Netherlands, Germany, the Rhine Gorge, France, and Switzerland.",
        columns: [
            {
                label: "Best for:",
                items: ["First-time visitors", "The classic Rhine experience", "Seeing the widest variety of destinations"],
            },
        ],
    },
    {
        id: "rhine-gorge-focused",
        title: "Rhine Gorge-Focused Itinerary",
        badge: "Scenery Focus",
        icon: Landmark,
        desc: "If castles and scenery are your priority, choose an itinerary that provides substantial sailing through the Rhine Valley, allowing more time to enjoy the castles, vineyards, villages, and river scenery.",
        columns: [
            {
                label: "Best for:",
                items: ["Scenery and photography", "Travelers who prioritize castle views", "A more relaxed, scenery-focused pace"],
            },
        ],
    },
    {
        id: "christmas-market",
        title: "Christmas Market Rhine Cruise",
        badge: "Christmas Markets",
        icon: Gift,
        desc: "During the holiday season, the Rhine transforms. Historic city centers fill with Christmas markets, lights, mulled wine, handmade gifts, and regional food — a particularly attractive option for a luxury holiday experience.",
        columns: [
            {
                label: "Best for:",
                items: ["Couples", "Travelers who love Christmas traditions", "A festive, luxury holiday getaway"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const rhineSeasons = [
    {
        key: "spring",
        icon: <Flower2 size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        intro: "Best for:",
        items: [
            "Flowers",
            "Fresh landscapes",
            "Comfortable sightseeing"
        ],
        outro: "Spring can be especially appealing for travelers who don't enjoy summer heat.",
        accent: "adg-accent-teal"
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        intro: "Best for:",
        items: [
            "Longer daylight",
            "Green landscapes",
            "Outdoor sightseeing"
        ],
        outro: "Summer is popular, so book early.",
        accent: "adg-accent-navy"
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        intro: "Best for:",
        items: [
            "Autumn scenery",
            "Wine regions",
            "Comfortable temperatures"
        ],
        outro: "The Rhine Valley can be particularly beautiful during the fall.",
        accent: "adg-accent-rose"
    },
    {
        key: "winter",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "December–February",
        title: "Winter",
        intro: "Best for:",
        items: [
            "Christmas markets",
            "Holiday atmosphere",
            "Festive dining"
        ],
        outro: "Winter is ideal for travelers specifically interested in Christmas Market cruises.",
        accent: "adg-accent-teal"
    }
];

/* ── Scenic Rhine Excursions Data ──────────────────────────────────── */
const rhineExcursions = [
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "Historic Walking Tours", desc: "Explore medieval streets and historic city centers." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Castle Visits", desc: "Discover the castles overlooking the Rhine." },
    { icon: <Utensils size={28} strokeWidth={1.5} />, title: "Food Experiences", desc: "Taste local specialties and regional cuisine." },
    { icon: <Wine size={28} strokeWidth={1.5} />, title: "Wine Experiences", desc: "Explore the Rhine's famous wine-producing areas." },
    { icon: <Star size={28} strokeWidth={1.5} />, title: "Museums & Culture", desc: "Visit museums, galleries, churches, and historic landmarks." },
    { icon: <Compass size={28} strokeWidth={1.5} />, title: "Active Experiences", desc: "Some itineraries provide more active options such as walking and cycling." },
];

/* ── Rhine Gorge Castle Sightings Data ─────────────────────────────── */
const castleSightings = ["Hilltop castles", "Vineyards", "Forested hills", "Riverside villages"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Travel dates",
    "Cruise duration",
    "Suite category",
    "Itinerary",
    "Ship",
    "Availability",
    "Promotions",
    "Airfare",
    "Pre- and post-cruise hotels",
];

/* ── What's Included Data ──────────────────────────────────────────── */
const whatsIncluded = [
    "Accommodation",
    "Meals",
    "Selected beverages",
    "Scenic Freechoice activities",
    "Scenic Enrich experiences",
    "Wi-Fi",
    "Onboard entertainment",
    "Personalized service",
];

/* ── Scenic Rhine vs Other Rhine River Cruises — Comparison Table ──── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "Luxury, all-inclusive experience, Butler Service on eligible suites" },
    { key: "riverside", scenic: "Riverside", ocean: "Spacious luxury suites and personalized service" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique design and luxury atmosphere" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided travel" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Active excursions and destination-focused cruising" },
    { key: "avalon", scenic: "Avalon", ocean: "Open-air balcony design and flexible sightseeing" },
    { key: "viking", scenic: "Viking", ocean: "Large European river cruise network" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Booking without looking at the full itinerary",
    "Ignoring the sailing days",
    "Choosing a cabin without checking the deck plan",
    "Arriving the day of embarkation",
    "Not allowing extra time in Amsterdam or Basel",
    "Booking Christmas too late",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRhineRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("amsterdam-basel");

    const currentItinerary =
        rhineItineraries.find((f) => f.id === activeItinerary) || rhineItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Rhine River Cruises  | Itineraries, Ports & Travel Guide</title>
                <meta name="title" content="Scenic Rhine River Cruises | Best Itineraries & Cruise Guide" />
                <meta
                    name="description"
                    content="Explore Scenic Rhine River Cruises with our complete guide to itineraries, destinations, castles, Christmas markets, cabins, excursions, costs, and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Rhine <br /> River Cruises</h1>

                    <p>
                        The Rhine is one of Europe's most iconic rivers — and
                        one of the best ways to experience it is from a
                        luxury river cruise. A Scenic Rhine River Cruise
                        combines historic cities, medieval villages,
                        vineyards, castles, and spectacular river scenery
                        with Scenic's all-inclusive luxury cruise experience.
                    </p>

                    {readMore && (
                        <p>
                            Depending on the itinerary, you can wake up in
                            one European city and spend the afternoon
                            exploring another without packing and unpacking
                            your suitcase. For travelers considering Scenic,
                            the Rhine is particularly attractive because it
                            offers a remarkable variety of experiences in a
                            relatively compact region. This guide explains
                            where Scenic Rhine cruises go, which itineraries
                            are best, what you'll see, when to travel, which
                            excursions to consider, and how to choose the
                            right Scenic Rhine sailing.
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
                            Start Planning Your Scenic Rhine Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Rhine River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            For luxury travelers who value European scenery,
                            culture, food, wine, and convenient
                            destination-to-destination travel, the Rhine is
                            one of Scenic's strongest itineraries. It's
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
                            Rhine highlights include medieval castles, Rhine
                            Valley vineyards, historic villages, Cologne
                            Cathedral, Christmas markets, Strasbourg, German
                            Rhine towns, and Basel.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC RHINE RIVER CRUISE? ──────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-rhine">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Rhine River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The Rhine offers something that many European
                            river itineraries struggle to match: variety. A
                            single cruise can combine:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {rhineVarietyFeatures.map((label, i) => (
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
                                        Because the ship travels with you,
                                        there's no need to repeatedly check
                                        into hotels.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '380px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        One Ship, Many Destinations
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DOES A SCENIC RHINE CRUISE GO? ─────────────────────── */}
            <section
                className="adg-section"
                id="rhine-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Does a Scenic Rhine River Cruise Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact ports depend on your selected itinerary.
                            Common Rhine destinations may include:
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {rhineDestinations.map((item) => (
                            <div key={item.key} className="adg-card">
                                <div
                                    className="adg-card-image-wrap"
                                    style={{
                                        background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minHeight: "120px",
                                    }}
                                >
                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">
                                            <Landmark size={20} strokeWidth={1.6} />
                                        </span>
                                        <span className="adg-card-eyebrow-label">Rhine Destination</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Rhine Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Rhine sailings and find the perfect fit for your trip.
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

            
            {/* ── BEST TIME TO TAKE A SCENIC RHINE RIVER CRUISE ────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time to Take a Scenic Rhine River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            The best time depends on what you want from the trip.
                        </p>
                    </div>

                    <div className="sfe-danube-seasons-grid">
                        {rhineSeasons.map((item) => (
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

            {/* ── BEST SCENIC RHINE RIVER CRUISE ITINERARIES ───────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Rhine River Cruise Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            There isn't one single "best" itinerary. The
                            right choice depends on how much time you have
                            and what you want to see.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {rhineItineraries.map((item) => {
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


            {/* ── SCENIC RHINE EXCURSIONS ───────────────────────────────────── */}
            <section className="ugt-advantage-section" id="rhine-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Rhine Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            One of the strengths of a Scenic Rhine itinerary
                            is the variety of shore experiences. Scenic's
                            Freechoice program allows guests to select from
                            available experiences, while Scenic Enrich
                            provides exclusive destination-focused
                            experiences on eligible itineraries.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {rhineExcursions.map((item, idx) => (
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

            {/* ── SCENIC RHINE CRUISE CASTLES ───────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="rhine-castles">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Scenic Rhine Cruise Castles</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                The Rhine's castles are among its biggest
                                attractions. The river corridor is lined
                                with historic fortifications and hilltop
                                ruins. For many travelers, the best way to
                                experience them is simply to find a
                                comfortable seat onboard and watch them
                                pass — as the ship sails, you'll see:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {castleSightings.map((item, idx) => (
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
                                    This is where a Scenic Sun Lounge can be
                                    particularly valuable — you can enjoy the
                                    scenery without leaving your suite.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={GorgeImage}
                                    alt="Hilltop castle overlooking the Rhine Gorge on a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>The Rhine Gorge • A Front-Row Seat</span>
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
                                The Rhine gives you major cities, small towns, countryside, castles, and cultural experiences — all in one trip. You don't have to choose between an urban vacation and a countryside escape.
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
                                <span className="sfe-cabins-img-label">Rhine River Cruise Cabins</span>
                            </div>
                            
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Rhine River Cruise Cabins</h3>
                                <p className="sfe-cabins-text">
                                    Choosing the right cabin can significantly affect your experience. Consider:
                                </p>
                                
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Suite size",
                                        "Deck",
                                        "River view",
                                        "Sun Lounge configuration",
                                        "Butler Service",
                                        "Location on the ship"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    If you expect to spend a lot of time watching the Rhine, upgrading to a suite with a more usable balcony/Sun Lounge can be worthwhile.
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
                                <h3 className="sfe-cabins-title">Scenic Butler Service on the Rhine</h3>
                                <p className="sfe-cabins-text">
                                    Eligible Scenic suites can include Butler Service. Depending on your suite and sailing, this can provide additional personalized assistance. Potential benefits include:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "In-suite service",
                                        "Breakfast arrangements",
                                        "Packing and unpacking assistance",
                                        "Special requests",
                                        "Personalized attention"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    For travelers seeking a highly personalized luxury experience, this can be an important consideration when comparing suite categories.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* ── FOOD, WINE & CHRISTMAS MARKETS ───────────────────────────── */}
            <section className="sfe-dining-noimg-section" id="food-wine-christmas">
                <div className="sfe-dining-noimg-container">
                    <div className="sfe-dining-noimg-grid">

                        {/* Card 1: Food & Wine */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Wine size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Rhine Cruise Food &amp; Wine</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                The Rhine is an excellent itinerary for travelers who enjoy food and wine.
                            </p>

                            <span className="sfe-dining-noimg-list-title">You can experience regional flavors in:</span>
                            <div className="sfe-dining-noimg-pills">
                                {["Germany", "France", "Switzerland", "Alsace"].map((country, idx) => (
                                    <span key={idx} className="sfe-dining-noimg-pill">
                                        <MapPin size={14} />
                                        {country}
                                    </span>
                                ))}
                            </div>

                            <span className="sfe-dining-noimg-list-title">For travelers who enjoy culinary experiences, consider choosing excursions focused on:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '28px' }}>
                                {[
                                    { label: "Wine",icon: <Wine size={16} /> },
                                    { label: "Regional cuisine", icon: <Utensils size={16} /> },
                                    { label: "Local specialties", icon: <Utensils size={16} /> },
                                    { label: "Culinary traditions",icon: <Utensils size={16} /> }
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            {item.icon}
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item.emoji} {item.label}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="sfe-dining-noimg-outro">
                                Onboard, Scenic combines destination-inspired cuisine with luxury dining.
                            </p>
                        </div>

                        {/* Card 2: Christmas Markets */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Gift size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Rhine Christmas Market Cruises</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                The Rhine is one of Europe's most popular Christmas Market river cruise regions.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Depending on your itinerary, you may visit markets in destinations such as:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Cologne",
                                    "Strasbourg",
                                    "Rüdesheim",
                                    "Other German and French cities"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <CheckCircle size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="sfe-dining-noimg-outro">
                                Christmas Market cruises are particularly popular, so advance planning is recommended.
                            </p>

                            <div className="sfe-dining-noimg-links">
                                <span className="sfe-dining-noimg-links-label">Related Guide:</span>
                                <div className="sfe-dining-noimg-links-grid">
                                    <Link to="/scenic-river-cruises/christmas-markets" className="sfe-dining-noimg-link-item">
                                        <span>Scenic Christmas Market River Cruises</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAMILIES & COUPLES ────────────────────────────────────────── */}
            <section
                className="dve-winner-section"
                id="families-and-couples"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Scenic Rhine Cruises for Families &amp; Couples
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            The Rhine works beautifully for a range of
                            travel styles, from multigenerational trips to
                            romantic getaways.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Families */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Users size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Multigenerational Families
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Everyone Experiences Europe Together
                                </h3>

                                <p className="dve-winner-intro">
                                    The Rhine can work very well for
                                    multigenerational families. Older
                                    children and teenagers may particularly
                                    enjoy:
                                </p>

                                <div className="dve-winner-divider"></div>

                                <ul className="dve-advantages-list" style={{ marginTop: "20px" }}>
                                    {[
                                        "Castles",
                                        "Medieval towns",
                                        "Food experiences",
                                        "Museums",
                                        "Active excursions",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Couples */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Heart size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Couples
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    An Excellent Romantic Itinerary
                                </h3>

                                <p className="dve-winner-intro">
                                    Couples can enjoy an itinerary built
                                    around wine, castles, and history. A
                                    balcony or Sun Lounge can also create a
                                    more private space for enjoying the
                                    river together.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <ul className="dve-advantages-list" style={{ marginTop: "20px" }}>
                                    {[
                                        "Wine villages",
                                        "Castle scenery",
                                        "Historic cities",
                                        "French cuisine",
                                        "Christmas markets",
                                        "Sunset sailing",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW MUCH DOES A SCENIC RHINE CRUISE COST? ────────────────── */}
            <section className="sfe-cost-section" id="rhine-cost">
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Rhine River Cruise Cost?</h2>
                        <div className="sfe-cost-accent"></div>
                        <p className="sfe-cost-intro">
                            The price of a Scenic Rhine cruise depends on:
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
                                        <h3 className="sfe-cost-callout-title">Don't compare cruise prices based solely on the headline fare.</h3>
                                    </div>
                                    <div className="sfe-cost-divider" />
                                    <p className="sfe-cost-callout-text">
                                        Scenic's all-inclusive positioning means you should evaluate what is included, including dining, drinks, excursions, and service.
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

            {/* ── WHAT IS INCLUDED ON A SCENIC RHINE CRUISE? ───────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Rhine Cruise?</h2>
                        <div className="sfe-inc-accent"></div>
                        <p className="sfe-inc-intro">
                            Scenic's river cruise experience is designed around an all-inclusive model.
                        </p>
                    </div>

                    <div className="sfe-inc-layout">
                        <div className="sfe-inc-left">
                            <p className="sfe-inc-intro" style={{ marginBottom: '30px', fontSize: '16px' }}>
                                Depending on your itinerary and fare, inclusions can include:
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
                                        Exact inclusions can vary, so verify your specific booking.
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

            {/* ── SCENIC RHINE VS OTHER RHINE RIVER CRUISES ────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="rhine-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Rhine vs <br /> Other Rhine River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The "best" cruise line depends on your
                            priorities. If you value an all-inclusive luxury
                            experience and personalized service, Scenic
                            deserves serious consideration.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Best Known For</th>
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

            {/* ── COMMON SCENIC RHINE CRUISE MISTAKES ──────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Rhine Cruise Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Scenic Rhine River Cruise.
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

            {/* ── DAYS NEEDED & PRE-CRUISE HOTELS ──────────────────────────── */}
            <section className="scenic-prep-section" id="days-needed" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-prep-container">
                    <div className="scenic-prep-grid">
                        {/* Days Needed */}
                        <div className="scenic-prep-card">
                            <div className="scenic-prep-card-header">
                                <Calendar size={22} className="scenic-prep-card-icon" />
                                <h3>How Many Days Do You Need for a Rhine Cruise?</h3>
                            </div>
                            <p className="scenic-prep-card-lead">
                                A typical Scenic Rhine itinerary can vary in
                                length. For a larger European vacation,
                                consider adding:
                            </p>
                            <ul className="scenic-prep-list">
                                {[
                                    "Before the cruise: Amsterdam or another embarkation city",
                                    "After the cruise: Basel + Switzerland, or extra time in France/Germany",
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="scenic-prep-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="scenic-prep-card-footer">
                                <p>This can turn a river cruise into a much more comprehensive European vacation.</p>
                            </div>
                        </div>

                        {/* Pre-Cruise Hotel */}
                        <div className="scenic-prep-card">
                            <div className="scenic-prep-card-header">
                                <Home size={22} className="scenic-prep-card-icon" />
                                <h3>Should You Add a Pre-Cruise Hotel?</h3>
                            </div>
                            <p className="scenic-prep-card-lead">
                                Yes, whenever possible. For international
                                travelers, arriving one day early can:
                            </p>
                            <ul className="scenic-prep-list">
                                {[
                                    "Reduce stress",
                                    "Protect against flight delays",
                                    "Help overcome jet lag",
                                    "Give you time to explore the embarkation city",
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="scenic-prep-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="scenic-prep-card-footer accent-footer">
                                <p>For Amsterdam departures, an additional two or three nights can be particularly worthwhile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK A SCENIC RHINE CRUISE THROUGH A LUXURY TRAVEL ADVISOR? ── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book a Scenic Rhine Cruise <br /> Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                The Rhine Has Many Options — the Differences Aren't Always Obvious
                            </h3>
                            <p className="Avr-planning-left-body">
                                The Rhine has many cruise options, and the
                                differences aren't always clear from the
                                itinerary title alone. A luxury travel
                                advisor can also help determine whether
                                Scenic is actually the best fit compared
                                with Riverside, Uniworld, Tauck, or another
                                luxury river cruise line.
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
                                A luxury travel advisor can help compare:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Ship size={18} />, label: "Scenic ships" },
                                    { icon: <Home size={18} />, label: "Suite categories" },
                                    { icon: <MapPin size={18} />, label: "Deck locations" },
                                    { icon: <Calendar size={18} />, label: "Departure dates" },
                                    { icon: <Compass size={18} />, label: "Excursions" },
                                    { icon: <Landmark size={18} />, label: "Pre-cruise hotels" },
                                    { icon: <Sparkles size={18} />, label: "Post-cruise extensions" },
                                    { icon: <Plane size={18} />, label: "Airfare & transfers" },
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
                            Everything you need to know about Scenic Rhine
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
                        alt="Scenic Space-Ship sailing past Rhine Gorge castles at sunset"
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
                                    Europe's Historic Heartland <br /> in Comfort and Style
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Rhine River Cruises are an
                                        excellent choice for travelers who
                                        want to experience Europe's historic
                                        heartland in comfort and style. The
                                        combination of castles, vineyards,
                                        historic villages, Germany, France,
                                        Switzerland, and Christmas markets
                                        makes the Rhine one of Europe's most
                                        compelling river cruise destinations.

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
                                                Scenic adds another layer
                                                with its luxury suites,
                                                personalized service,
                                                destination-focused
                                                excursions, and all-inclusive
                                                approach.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                For first-time river
                                                cruisers, couples, families,
                                                and experienced luxury
                                                travelers alike, the Rhine is
                                                one of the Scenic itineraries
                                                worth putting near the top of
                                                your list. At Trips &amp;
                                                Ships Luxury Travel, we'll
                                                help you plan every detail of
                                                your Scenic Rhine cruise.
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
                                            Start Planning Your Scenic Rhine Cruise
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
                                            "Compare Scenic Rhine itineraries and ships",
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

export default ScenicRhineRiverCruises;