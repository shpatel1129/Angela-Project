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
    Music,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Danube River Cruise photography once
   available. Paths assume a new /assets/ScenicDanube folder. */
// import HeroImage from "../../assets/ScenicDanube/scenic-danube-hero.jpg";
// import WachauImage from "../../assets/ScenicDanube/scenic-danube-wachau-valley.jpg";
// import CabinImage from "../../assets/ScenicDanube/scenic-danube-suite.jpg";
// import FinalImage from "../../assets/ScenicDanube/scenic-danube-final.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/danube/#webpage",
            name: "Scenic Danube River Cruises (2026) | Itineraries, Ports & Guide",
            url: "https://www.tripsandships.com/scenic-river-cruises/danube/",
            description:
                "Explore Scenic Danube River Cruises with our guide to Budapest, Vienna, Bratislava, Salzburg, castles, excursions, Christmas markets, cabins, costs, and the best time to sail.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/danube/#article",
            headline: "Scenic Danube River Cruises: The Complete Guide",
            description:
                "A complete guide to Scenic Danube River Cruises, including where they go, the best itineraries, when to travel, excursions, cabins, cost, and how to choose the right sailing.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/danube/#breadcrumb",
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
                    name: "Scenic Danube River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/danube/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/danube/#itemlist",
            name: "Scenic Danube River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Danube River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Does a Scenic Danube River Cruise Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Danube River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time for a Scenic Danube River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Danube Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Danube Castles, Abbeys & Historic Sites" },
                { "@type": "ListItem", position: 8, name: "Cabins & Butler Service" },
                { "@type": "ListItem", position: 9, name: "Food, Wine & Christmas Markets" },
                { "@type": "ListItem", position: 10, name: "Couples & Families" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/danube/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Scenic Danube River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For first-time travelers, an itinerary combining Budapest, Vienna, Bratislava, and Austrian destinations can provide an excellent introduction to the Danube.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What countries can you visit on a Scenic Danube cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary, Scenic Danube cruises can visit destinations in Hungary, Austria, Slovakia, Germany, and other Central European regions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for a Danube River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is a strong choice for travelers looking for an all-inclusive luxury river cruise with personalized service, destination experiences, and upscale accommodations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best month to cruise the Danube?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring and fall are excellent for comfortable sightseeing. Summer offers long days, while winter is ideal for Christmas Market cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Danube good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The combination of major capitals, historic towns, scenic landscapes, and cultural experiences makes the Danube particularly accessible to first-time river cruisers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the highlights of a Scenic Danube cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Popular highlights include Budapest, Vienna, Bratislava, the Wachau Valley, historic Austrian towns, vineyards, abbeys, and seasonal Christmas markets.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic visit Budapest?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Scenic Danube itineraries include Budapest, although exact ports depend on the specific sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic visit Vienna?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Vienna is a major destination on many Scenic Danube itineraries. Always check the individual sailing for exact port information.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Danube cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The combination of historic cities, wine regions, scenic sailing, cultural experiences, and luxury accommodations makes the Danube popular with couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Danube cruise good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Multigenerational travelers can combine sightseeing, cultural experiences, excursions, and relaxed time onboard.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Danube Christmas Market cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers European Christmas Market itineraries, including Danube-focused sailings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Danube excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic's cruise experience includes a selection of destination experiences, including Freechoice activities and eligible Scenic Enrich experiences. Exact options depend on the itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic Danube cabin is best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best cabin depends on your priorities. Travelers who enjoy scenic sailing may prefer a suite with a Sun Lounge or other dedicated river-view space.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Butler Service on Danube cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Butler Service is available with eligible Scenic suite categories. Confirm the service associated with your specific suite before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive early for a Scenic Danube cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Arriving at least one day early is generally a smart strategy for international travelers because it provides protection against travel delays and gives you time to explore your embarkation city.",
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
            q: "What is the best Scenic Danube River Cruise?",
            a: "For first-time travelers, an itinerary combining Budapest, Vienna, Bratislava, and Austrian destinations can provide an excellent introduction to the Danube.",
        },
        {
            q: "What countries can you visit on a Scenic Danube cruise?",
            a: "Depending on the itinerary, Scenic Danube cruises can visit destinations in Hungary, Austria, Slovakia, Germany, and other Central European regions.",
        },
        {
            q: "Is Scenic good for a Danube River Cruise?",
            a: "Scenic is a strong choice for travelers looking for an all-inclusive luxury river cruise with personalized service, destination experiences, and upscale accommodations.",
        },
        {
            q: "What is the best month to cruise the Danube?",
            a: "Spring and fall are excellent for comfortable sightseeing. Summer offers long days, while winter is ideal for Christmas Market cruises.",
        },
        {
            q: "Is the Danube good for first-time river cruisers?",
            a: "Yes. The combination of major capitals, historic towns, scenic landscapes, and cultural experiences makes the Danube particularly accessible to first-time river cruisers.",
        },
        {
            q: "What are the highlights of a Scenic Danube cruise?",
            a: "Popular highlights include Budapest, Vienna, Bratislava, the Wachau Valley, historic Austrian towns, vineyards, abbeys, and seasonal Christmas markets.",
        },
        {
            q: "Does Scenic visit Budapest?",
            a: "Many Scenic Danube itineraries include Budapest, although exact ports depend on the specific sailing.",
        },
        {
            q: "Does Scenic visit Vienna?",
            a: "Vienna is a major destination on many Scenic Danube itineraries. Always check the individual sailing for exact port information.",
        },
        {
            q: "Is a Scenic Danube cruise good for couples?",
            a: "Yes. The combination of historic cities, wine regions, scenic sailing, cultural experiences, and luxury accommodations makes the Danube popular with couples.",
        },
        {
            q: "Is a Scenic Danube cruise good for families?",
            a: "Yes. Multigenerational travelers can combine sightseeing, cultural experiences, excursions, and relaxed time onboard.",
        },
        {
            q: "Does Scenic offer Danube Christmas Market cruises?",
            a: "Yes. Scenic offers European Christmas Market itineraries, including Danube-focused sailings.",
        },
        {
            q: "Are Scenic Danube excursions included?",
            a: "Scenic's cruise experience includes a selection of destination experiences, including Freechoice activities and eligible Scenic Enrich experiences. Exact options depend on the itinerary.",
        },
        {
            q: "Which Scenic Danube cabin is best?",
            a: "The best cabin depends on your priorities. Travelers who enjoy scenic sailing may prefer a suite with a Sun Lounge or other dedicated river-view space.",
        },
        {
            q: "Does Scenic offer Butler Service on Danube cruises?",
            a: "Butler Service is available with eligible Scenic suite categories. Confirm the service associated with your specific suite before booking.",
        },
        {
            q: "Should I arrive early for a Scenic Danube cruise?",
            a: "Arriving at least one day early is generally a smart strategy for international travelers because it provides protection against travel delays and gives you time to explore your embarkation city.",
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
    "History and architecture enthusiasts",
    "Food and wine travelers",
    "Christmas Market travelers",
    "Travelers visiting Central Europe for the first time",
];

/* ── Why Choose a Scenic Danube Cruise — Variety Data ──────────────── */
const danubeVarietyFeatures = [
    "Imperial capitals",
    "Central European culture",
    "Small historic towns",
    "Castles & abbeys",
    "Vineyards",
    "Classical music & architecture",
    "Cultural excursions",
    "Scenic sailing",
];

/* ── Where Does a Scenic Danube Cruise Go — Destinations Data ─────── */
const danubeDestinations = [
    { key: "budapest", title: "Budapest", items: ["Buda Castle, Parliament & Chain Bridge", "Historic thermal baths", "Split by the river into Buda & Pest"] },
    { key: "vienna", title: "Vienna", items: ["Imperial history & classical music", "Palaces, museums & coffeehouses", "One of the biggest highlights of the cruise"] },
    { key: "bratislava", title: "Bratislava", items: ["Compact, walkable historic center", "Historic streets & castle views", "A different pace from the larger capitals"] },
    { key: "wachau-valley", title: "Wachau Valley", items: ["Vineyards & rolling hills", "Historic abbeys & riverside towns", "One of the scenic highlights of the Danube"] },
    { key: "durnstein", title: "Dürnstein", items: ["Medieval architecture", "Vineyard-covered hillsides", "A postcard-perfect river town"] },
    { key: "melk", title: "Melk", items: ["Home to Melk Abbey", "Baroque architecture & landscape views", "One of Austria's most recognizable landmarks"] },
    { key: "salzburg", title: "Salzburg", items: ["Classical music & film history", "Alpine scenery & Austrian cuisine", "Available via included or optional excursions"] },
];

/* ── Best Danube Itineraries — Tabbed Data ─────────────────────────── */
const danubeItineraries = [
    {
        id: "budapest-vienna",
        title: "Budapest to Vienna (or Vienna to Budapest)",
        badge: "Best Overall",
        icon: Compass,
        desc: "An itinerary centered around Budapest and Vienna provides an excellent introduction to the Danube, combining Hungary, Austria, historic cities, river scenery, and cultural experiences. This is a good option if your vacation time is limited.",
        columns: [
            {
                label: "Best for:",
                items: ["First-time travelers", "Limited vacation time", "The classic Danube introduction"],
            },
        ],
    },
    {
        id: "central-european",
        title: "Central European Danube Itinerary",
        badge: "Broader Region",
        icon: Landmark,
        desc: "Longer itineraries can provide a broader perspective of the region, potentially combining Budapest, Bratislava, Vienna, the Wachau Valley, Austrian towns, and additional Central European destinations.",
        columns: [
            {
                label: "Best for:",
                items: ["Travelers who want more than two major cities", "A deeper regional exploration", "A slower, more immersive pace"],
            },
        ],
    },
    {
        id: "christmas-market",
        title: "Danube Christmas Market Cruise",
        badge: "Christmas Markets",
        icon: Gift,
        desc: "The Danube becomes especially appealing during the holiday season, with Christmas markets featuring decorations, lights, handmade gifts, mulled wine, and regional food across Vienna, Budapest, Bratislava, and other Central European destinations.",
        columns: [
            {
                label: "Best for:",
                items: ["Couples and families", "Travelers who enjoy European Christmas traditions", "A festive, luxury holiday getaway"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const danubeSeasons = [
    {
        key: "spring",
        icon: <Flower2 size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        intro: "Spring offers:",
        items: [
            "Fresh greenery",
            "Pleasant sightseeing conditions",
            "Longer days",
            "Seasonal flowers"
        ],
        outro: "It's a good choice for travelers who prefer moderate temperatures.",
        accent: "adg-accent-teal"
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        intro: "Summer offers:",
        items: [
            "Longer daylight",
            "Green landscapes",
            "Outdoor sightseeing"
        ],
        outro: "Summer is popular, however, so premium suites and preferred dates can require advance booking.",
        accent: "adg-accent-navy"
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        intro: "Autumn can be particularly appealing for:",
        items: [
            "Changing foliage",
            "Wine experiences",
            "Comfortable temperatures"
        ],
        outro: "The Wachau Valley is especially attractive during the fall season.",
        accent: "adg-accent-rose"
    },
    {
        key: "winter",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "December–February",
        title: "Winter",
        intro: "Winter is primarily about:",
        items: [
            "Christmas markets",
            "Holiday decorations",
            "Festive food and drinks"
        ],
        outro: "A Danube Christmas Market cruise can be one of the most atmospheric ways to experience Central Europe during the holidays.",
        accent: "adg-accent-teal"
    }
];

/* ── Scenic Danube Excursions Data ─────────────────────────────────── */
const danubeExcursions = [
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "Historic Walking Tours", desc: "Explore historic city centers and landmarks." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Architecture & Culture", desc: "Discover palaces, churches, museums, and historic buildings." },
    { icon: <Utensils size={28} strokeWidth={1.5} />, title: "Food & Wine", desc: "Experience regional cuisine and wine-producing areas." },
    { icon: <Music size={28} strokeWidth={1.5} />, title: "Music", desc: "Vienna and Salzburg can be particularly appealing to classical music enthusiasts." },
    { icon: <Compass size={28} strokeWidth={1.5} />, title: "Active Experiences", desc: "Some itineraries offer walking or cycling opportunities for more active travelers." },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Freechoice & Enrich", desc: "Scenic's Freechoice experiences let guests choose among available activities, while Scenic Enrich provides exclusive experiences on eligible itineraries." },
];

/* ── Danube Castles, Abbeys & Historic Sites Data ──────────────────── */
const castleSightings = ["Historic castles", "Abbeys", "Medieval towns", "Vineyards & river valleys"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Sailing date",
    "Length",
    "Suite category",
    "Ship",
    "Availability",
    "Itinerary",
    "Promotions",
    "Airfare",
    "Pre- and post-cruise arrangements",
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

/* ── Scenic Danube vs Other Luxury River Cruises — Comparison Table ── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "All-inclusive luxury and personalized service" },
    { key: "riverside", scenic: "Riverside", ocean: "Spacious luxury suites" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique design and distinctive interiors" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided travel" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Active excursions and destination experiences" },
    { key: "avalon", scenic: "Avalon", ocean: "Open-air balcony concept and flexible sightseeing" },
    { key: "viking", scenic: "Viking", ocean: "Large network of European river itineraries" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Choosing an itinerary without checking every port",
    "Treating Vienna as just another port",
    "Booking flights too close to embarkation",
    "Choosing a cabin without checking the deck plan",
    "Forgetting about the sailing itself",
    "Waiting too long to book Christmas Market cruises",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicDanubeRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("budapest-vienna");

    const currentItinerary =
        danubeItineraries.find((f) => f.id === activeItinerary) || danubeItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Danube River Cruises | Itineraries, Ports & Guide</title>
                <meta name="title" content="Scenic Danube River Cruises | Best Itineraries & Travel Guide" />
                <meta
                    name="description"
                    content="Explore Scenic Danube River Cruises with our guide to Budapest, Vienna, Bratislava, Salzburg, castles, excursions, Christmas markets, cabins, costs, and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Danube <br /> River Cruises</h1>

                    <p>
                        A Scenic Danube River Cruise is one of the most
                        rewarding ways to experience Central Europe. The
                        Danube connects some of Europe's most fascinating
                        capitals and cultural destinations, while also
                        passing through historic villages, rolling
                        countryside, castles, vineyards, and spectacular
                        river landscapes.
                    </p>

                    {readMore && (
                        <p>
                            For luxury travelers, Scenic combines this
                            destination variety with an all-inclusive river
                            cruise experience, spacious suites, personalized
                            service, and destination-focused excursions.
                            Depending on your itinerary, a Scenic Danube
                            cruise can introduce you to Budapest, Vienna,
                            Bratislava, Salzburg, the Wachau Valley, historic
                            Austrian towns, Central European castles,
                            Christmas markets, wine regions, and
                            UNESCO-listed landscapes — with a hotel that
                            travels with you rather than requiring you to
                            repeatedly pack and unpack.
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
                            Start Planning Your Scenic Danube Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Danube River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            For travelers interested in Central European
                            history, architecture, food, wine, music, and
                            culture, the Danube is one of the strongest
                            Scenic river cruise destinations. It's
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
                            Danube highlights include Budapest, Vienna,
                            Bratislava, the Wachau Valley, Christmas markets,
                            historic churches and cathedrals, and medieval
                            towns.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC DANUBE RIVER CRUISE? ─────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-danube">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Danube River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The Danube is especially attractive because it
                            combines major European capitals with smaller
                            destinations. You can spend one day exploring
                            Vienna's imperial architecture and another
                            walking through a much smaller riverside town —
                            two different perspectives on Central Europe in
                            a single cruise:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {danubeVarietyFeatures.map((label, i) => (
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
                                        Grand European cities and intimate
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
                                        One Ship, Many Destinations
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DOES A SCENIC DANUBE CRUISE GO? ────────────────────── */}
            <section
                className="adg-section"
                id="danube-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Does a Scenic Danube River Cruise Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact ports vary by itinerary and sailing date,
                            but some of the most recognizable Scenic Danube
                            destinations include:
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {danubeDestinations.map((item) => (
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
                                        <span className="adg-card-eyebrow-label">Danube Destination</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Danube Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Danube sailings and find the perfect fit for your trip.
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

            
            {/* ── BEST TIME FOR A SCENIC DANUBE RIVER CRUISE ───────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time for a Scenic Danube River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            There isn't one perfect month for everyone.
                        </p>
                    </div>

                    <div className="sfe-danube-seasons-grid">
                        {danubeSeasons.map((item) => (
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

            {/* ── BEST SCENIC DANUBE RIVER CRUISE ITINERARIES ──────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Danube River Cruise Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            The best itinerary depends on what you want to
                            experience.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {danubeItineraries.map((item) => {
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


            {/* ── SCENIC DANUBE EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="danube-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Danube River Cruise Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Excursions are an important part of the
                            experience. Scenic's Freechoice experiences
                            allow guests to choose among available
                            activities, while Scenic Enrich provides
                            exclusive experiences on eligible itineraries.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {danubeExcursions.map((item, idx) => (
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

            {/* ── SCENIC DANUBE CASTLES, ABBEYS & HISTORIC SITES ────────────── */}
            <section className="rlc-lc-worth-section" id="danube-castles">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Scenic Danube Castles, Abbeys &amp; Historic Sites</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                The Danube isn't only about major cities.
                                Some of its most memorable experiences come
                                from smaller destinations. This changing
                                landscape is one of the reasons a balcony or
                                Sun Lounge can be particularly valuable — as
                                the ship sails, you'll see:
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
                                    scenery without leaving your suite,
                                    especially through the Wachau Valley.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WachauImage}
                                    alt="Melk Abbey overlooking the Danube in the Wachau Valley on a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>The Wachau Valley • A Front-Row Seat</span>
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
                                The Danube gives you major capitals, small towns, countryside, castles, and cultural experiences — all in one trip. You can experience Budapest, Bratislava, and Vienna without constantly moving between hotels.
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
                                <span className="sfe-cabins-img-label">Danube River Cruise Cabins</span>
                            </div>
                            
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Danube Cruise Cabins &amp; Suites</h3>
                                <p className="sfe-cabins-text">
                                    Your cabin choice matters more on a Scenic river cruise than many first-time travelers expect. Consider:
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
                                    If you love watching the landscape, consider a suite with a dedicated viewing area — it can be particularly worthwhile through the Wachau Valley.
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
                                <h3 className="sfe-cabins-title">Scenic Butler Service on the Danube</h3>
                                <p className="sfe-cabins-text">
                                    Butler Service is available with eligible Scenic suite categories. For travelers who value highly personalized service, this can be an important reason to consider a higher suite category. Depending on the service and suite, your Butler may assist with:
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
                                <h3 className="sfe-dining-noimg-title">Scenic Danube Food &amp; Wine</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                The Danube crosses several countries and culinary traditions.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can experience flavors influenced by:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    { label: "Hungary", emoji: "🇭🇺" },
                                    { label: "Austria", emoji: "🇦🇹" },
                                    { label: "Slovakia", emoji: "🇸🇰" }
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <Utensils size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item.emoji} {item.label}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="sfe-dining-noimg-text" style={{ marginBottom: '20px' }}>
                                and other Central European destinations depending on the itinerary.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Onboard and onshore culinary highlights:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '28px' }}>
                                {[
                                    "Wachau Valley wine tastings",
                                    "Local food and market tours",
                                    "Onboard regional dining menus"
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
                                Wine lovers should pay particular attention to itineraries that spend time in Austria's Wachau Valley.
                            </p>
                        </div>

                        {/* Card 2: Christmas Markets */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Gift size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Danube Christmas Market Cruises</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                A Christmas Market cruise on the Danube can feel completely different from a summer sailing.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Historic city centers become filled with:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Christmas stalls",
                                    "Illuminations",
                                    "Seasonal sweets",
                                    "Mulled wine",
                                    "Traditional gifts"
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
                                Vienna is particularly famous for its Christmas markets, but smaller destinations can also offer a more intimate holiday atmosphere.
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

            {/* ── FAMILIES & MULTIGENERATIONAL GROUPS ──────────────────────── */}
            <section className="sfe-family-section" id="families-multigenerational">
                <div className="sfe-family-container">
                    <div className="sfe-family-header">
                        <h2 className="sfe-family-title">Scenic Danube Cruises for Families &amp; Multigenerational Groups</h2>
                        <div className="sfe-family-accent"></div>
                        <p className="sfe-family-intro">
                            The Danube can be a strong choice for families traveling across generations.
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
                                    {["History", "Architecture", "Scenic sailing", "Comfortable accommodations"].map((item, i) => (
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
                                    {["Convenient transportation", "Organized excursions", "Dining", "Service"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Younger travelers */}
                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Sparkles size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Generation</p>
                                        <h3 className="sfe-family-gen-title">Younger travelers can experience:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Castles", "Museums", "Historic cities", "Food", "Active excursions"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Ship size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Danube Family Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Ship size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    The ship becomes the shared base for the entire family — a comfortable, scenic home that moves with you through Central Europe.
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
                                <span className="sfe-family-img-label">Danube Couples Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Heart size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    A Sun Lounge can also provide a quiet place to enjoy the scenery together.
                                </p>
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="sfe-family-generations">
                            <div className="sfe-family-header" style={{ textAlign: 'left', margin: '0 0 32px 0', maxWidth: '100%' }}>
                                <h2 className="sfe-family-title">Scenic Danube Cruises for Couples</h2>
                                <div className="sfe-family-accent" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="sfe-family-intro">
                                    The Danube works exceptionally well for couples.
                                </p>
                            </div>

                            <div className="sfe-family-gen-card">
                                <div className="sfe-family-gen-header">
                                    <div className="sfe-family-gen-icon">
                                        <Heart size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="sfe-family-gen-label">Experiences</p>
                                        <h3 className="sfe-family-gen-title">Romantic experiences can include:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {[
                                        "Evening sailing",
                                        "Vienna's architecture",
                                        "Wine tasting",
                                        "Historic towns",
                                        "Christmas markets",
                                        "Private time in your suite"
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

            {/* ── HOW MUCH DOES A SCENIC DANUBE CRUISE COST? ───────────────── */}
            <section className="sfe-cost-section" id="danube-cost" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Danube River Cruise Cost?</h2>
                        <div className="sfe-cost-accent"></div>
                        <p className="sfe-cost-intro">
                            The cost of a Scenic Danube cruise depends on:
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
                                        Scenic should be evaluated based on its overall inclusions, rather than simply comparing the advertised cruise price.
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

            {/* ── WHAT IS INCLUDED ON A SCENIC DANUBE CRUISE? ──────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Danube Cruise?</h2>
                        <div className="sfe-inc-accent"></div>
                        <p className="sfe-inc-intro">
                            Scenic's river cruise experience is built around an all-inclusive model.
                        </p>
                    </div>

                    <div className="sfe-inc-layout">
                        <div className="sfe-inc-left">
                            <p className="sfe-inc-intro" style={{ marginBottom: '30px', fontSize: '16px' }}>
                                Depending on the specific itinerary and booking, inclusions can include:
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
                                        Always confirm the exact inclusions for your sailing before booking.
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

            {/* ── SCENIC DANUBE VS OTHER LUXURY RIVER CRUISES ──────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="danube-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Danube vs <br /> Other Luxury River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The best cruise line depends on your travel
                            style, preferred accommodations, itinerary, and
                            budget.
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

            {/* ── COMMON SCENIC DANUBE CRUISE MISTAKES ─────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Danube Cruise Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Scenic Danube River Cruise.
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
                        <h2 className="sfe-danube-duration-title">How Many Days Do You Need for a Scenic Danube Cruise?</h2>
                        <div className="sfe-danube-duration-accent"></div>
                        <p className="sfe-danube-duration-lead">
                            The ideal length depends on how much of Central Europe you want to experience.
                        </p>
                    </div>

                    <div className="sfe-danube-duration-grid">
                        
                        {/* Shorter Cruise Card */}
                        <div className="sfe-danube-duration-card">
                            <div className="sfe-danube-duration-card-header">
                                <div className="sfe-danube-duration-icon-box">
                                    <Calendar size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-danube-duration-card-title">Shorter Cruise Options</h3>
                            </div>
                            <span className="sfe-danube-duration-card-subtitle">Good for:</span>
                            <ul className="sfe-danube-duration-list">
                                {[
                                    "First-time river cruisers",
                                    "Travelers with limited vacation time",
                                    "Budapest and Vienna combinations"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-danube-duration-list-item">
                                        <CheckCircle size={16} className="sfe-danube-duration-list-icon" strokeWidth={2.5} />
                                        <span className="sfe-danube-duration-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Longer Cruise Card */}
                        <div className="sfe-danube-duration-card">
                            <div className="sfe-danube-duration-card-header">
                                <div className="sfe-danube-duration-icon-box">
                                    <Compass size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-danube-duration-card-title">Longer Cruise Options</h3>
                            </div>
                            <span className="sfe-danube-duration-card-subtitle">Better for:</span>
                            <ul className="sfe-danube-duration-list">
                                {[
                                    "Deeper regional exploration",
                                    "Multiple countries",
                                    "More excursions",
                                    "A slower travel pace"
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
                            If you're flying internationally, consider adding at least one or two nights before or after your cruise.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHY BOOK A SCENIC DANUBE CRUISE THROUGH A LUXURY TRAVEL ADVISOR? ── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book a Scenic Danube Cruise <br /> Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Choosing the Right Danube Itinerary Is More Than Picking a Date
                            </h3>
                            <p className="Avr-planning-left-body">
                                Choosing the right Danube itinerary can be
                                more complicated than simply selecting a
                                departure date. A luxury travel advisor can
                                also help determine whether Scenic is the
                                right fit compared with Riverside, Uniworld,
                                Tauck, AmaWaterways, Avalon, or Viking.
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
                                    { icon: <Ship size={18} />, label: "Scenic Space-Ships" },
                                    { icon: <Home size={18} />, label: "Suite categories" },
                                    { icon: <MapPin size={18} />, label: "Deck locations" },
                                    { icon: <Calendar size={18} />, label: "Itineraries" },
                                    { icon: <Compass size={18} />, label: "Excursions" },
                                    { icon: <Landmark size={18} />, label: "Pre-cruise hotels" },
                                    { icon: <Sparkles size={18} />, label: "Post-cruise extensions" },
                                    { icon: <Plane size={18} />, label: "Flights & transfers" },
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
                            Everything you need to know about Scenic Danube
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
                        alt="Scenic Space-Ship sailing past Budapest's Parliament building at sunset"
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
                                    Central Europe's Imperial Capitals <br /> in Comfort and Style
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Danube River Cruises offer one
                                        of the most comprehensive ways to
                                        experience Central Europe in luxury.
                                        The itinerary can combine Budapest,
                                        Vienna, Bratislava, the Wachau
                                        Valley, historic abbeys, medieval
                                        towns, and Christmas markets with the
                                        convenience of unpacking only once.

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
                                                For first-time river
                                                cruisers, couples, families,
                                                and experienced luxury
                                                travelers, the Danube offers
                                                an exceptional balance of
                                                culture, scenery, history,
                                                food, wine, and relaxation.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If you're choosing between
                                                the Rhine and Danube, choose
                                                the Rhine for dramatic
                                                castles, vineyards, and
                                                Western European
                                                destinations, or choose the
                                                Danube for imperial capitals,
                                                Central European culture,
                                                music, architecture, and
                                                historic cities. At Trips
                                                &amp; Ships Luxury Travel,
                                                we'll help you compare the
                                                ship, suite, itinerary, and
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
                                            Start Planning Your Scenic Danube Cruise
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
                                            "Compare Scenic Danube itineraries and ships",
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

export default ScenicDanubeRiverCruises;