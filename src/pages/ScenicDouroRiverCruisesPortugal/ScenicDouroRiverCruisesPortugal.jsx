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
    Mountain,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Douro River Cruise photography
   once available. Paths assume a new /assets/ScenicDouro folder. */
// import HeroImage from "../../assets/ScenicDouro/scenic-douro-hero.jpg";
// import PinhaoImage from "../../assets/ScenicDouro/scenic-douro-pinhao.jpg";
// import CabinImage from "../../assets/ScenicDouro/scenic-douro-suite.jpg";
// import FinalImage from "../../assets/ScenicDouro/scenic-douro-final.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/douro/#webpage",
            name: "Scenic Douro River Cruises in Portugal (2026) | Wine, Porto & Best Itineraries",
            url: "https://www.tripsandships.com/scenic-river-cruises/douro/",
            description:
                "Explore Scenic Douro River Cruises through Portugal's wine country. Discover Porto, the Douro Valley, Pinhão, vineyards, wineries, excursions, cabins, costs and the best time to cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/douro/#article",
            headline: "Scenic Douro River Cruises in Portugal: The Complete Guide",
            description:
                "A complete guide to Scenic Douro River Cruises, including Porto, the Douro Valley, Pinhão, Régua, Portuguese wine and cuisine, cabins, cost, and how to choose the right sailing.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/douro/#breadcrumb",
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
                    name: "Scenic Douro River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/douro/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/douro/#itemlist",
            name: "Scenic Douro River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Douro River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Do Scenic Douro Cruises Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Douro River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time for a Scenic Douro River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Douro Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Douro Cruise for Wine Lovers" },
                { "@type": "ListItem", position: 8, name: "Cabins & Butler Service" },
                { "@type": "ListItem", position: 9, name: "Food & Port Wine Heritage" },
                { "@type": "ListItem", position: 10, name: "Couples & Families" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/douro/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Scenic Douro River Cruise itinerary?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For first-time travelers, an itinerary combining Porto and the Douro Valley is an excellent choice because it combines the city with Portugal's wine country and river scenery.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic good for a Douro River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is a strong option for travelers looking for luxury, an all-inclusive approach, personalized service, and destination-focused experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Douro River Cruises in Portugal?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers river cruise experiences focused on Portugal's Douro Valley and surrounding destinations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Douro River Cruise good for wine lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Wine is one of the major attractions of the Douro Valley, making this itinerary particularly appealing to wine enthusiasts.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Douro cruise visit Porto?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Porto is an important gateway for Douro River cruises. Exact time in Porto and whether it is included as an embarkation or disembarkation destination depends on the itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time for a Scenic Douro River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, summer, and fall each offer different advantages. Fall can be particularly attractive to wine travelers, while spring offers lush landscapes and comfortable sightseeing conditions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Douro cruise visit Pinhão?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pinhão is an important destination in the Douro Valley and can feature on Douro itineraries. Travelers should check their exact sailing for the scheduled ports and excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic visit Régua?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Régua is a major center of the Douro wine region and may feature on Douro itineraries. Confirm the exact itinerary before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Scenic Douro River Cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Wine, Portuguese cuisine, vineyards, scenic sailing, and luxury accommodations make the Douro particularly appealing for couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Douro cruise good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Multigenerational groups can enjoy cultural experiences, scenery, history, food, and selected active excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are wine excursions included on a Scenic Douro cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic provides destination experiences as part of its overall offering, but the exact wine experiences available depend on the sailing. Review your specific itinerary before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cabin is best on a Douro River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best suite depends on your priorities. Because the Douro is highly scenic, travelers who enjoy watching the landscape may place particular value on river-view space or a Sun Lounge.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer Butler Service on Douro cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Butler Service is available with eligible Scenic suite categories. Exact services depend on the suite selected.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does a Scenic Douro River Cruise cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pricing varies according to the sailing date, itinerary, suite category, availability, and other travel arrangements. Compare the complete value rather than only the starting fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive early for a Scenic Douro River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. International travelers should consider arriving at least one day before the cruise, with one or two nights in Porto being particularly useful.",
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
            q: "What is the best Scenic Douro River Cruise itinerary?",
            a: "For first-time travelers, an itinerary combining Porto and the Douro Valley is an excellent choice because it combines the city with Portugal's wine country and river scenery.",
        },
        {
            q: "Is Scenic good for a Douro River Cruise?",
            a: "Scenic is a strong option for travelers looking for luxury, an all-inclusive approach, personalized service, and destination-focused experiences.",
        },
        {
            q: "Does Scenic offer Douro River Cruises in Portugal?",
            a: "Yes. Scenic offers river cruise experiences focused on Portugal's Douro Valley and surrounding destinations.",
        },
        {
            q: "Is a Scenic Douro River Cruise good for wine lovers?",
            a: "Yes. Wine is one of the major attractions of the Douro Valley, making this itinerary particularly appealing to wine enthusiasts.",
        },
        {
            q: "Does a Scenic Douro cruise visit Porto?",
            a: "Porto is an important gateway for Douro River cruises. Exact time in Porto and whether it is included as an embarkation or disembarkation destination depends on the itinerary.",
        },
        {
            q: "What is the best time for a Scenic Douro River Cruise?",
            a: "Spring, summer, and fall each offer different advantages. Fall can be particularly attractive to wine travelers, while spring offers lush landscapes and comfortable sightseeing conditions.",
        },
        {
            q: "Does a Scenic Douro cruise visit Pinhão?",
            a: "Pinhão is an important destination in the Douro Valley and can feature on Douro itineraries. Travelers should check their exact sailing for the scheduled ports and excursions.",
        },
        {
            q: "Does Scenic visit Régua?",
            a: "Régua is a major center of the Douro wine region and may feature on Douro itineraries. Confirm the exact itinerary before booking.",
        },
        {
            q: "Is the Scenic Douro River Cruise good for couples?",
            a: "Yes. Wine, Portuguese cuisine, vineyards, scenic sailing, and luxury accommodations make the Douro particularly appealing for couples.",
        },
        {
            q: "Is a Scenic Douro cruise good for families?",
            a: "Yes. Multigenerational groups can enjoy cultural experiences, scenery, history, food, and selected active excursions.",
        },
        {
            q: "Are wine excursions included on a Scenic Douro cruise?",
            a: "Scenic provides destination experiences as part of its overall offering, but the exact wine experiences available depend on the sailing. Review your specific itinerary before booking.",
        },
        {
            q: "Which Scenic cabin is best on a Douro River Cruise?",
            a: "The best suite depends on your priorities. Because the Douro is highly scenic, travelers who enjoy watching the landscape may place particular value on river-view space or a Sun Lounge.",
        },
        {
            q: "Does Scenic offer Butler Service on Douro cruises?",
            a: "Butler Service is available with eligible Scenic suite categories. Exact services depend on the suite selected.",
        },
        {
            q: "How much does a Scenic Douro River Cruise cost?",
            a: "Pricing varies according to the sailing date, itinerary, suite category, availability, and other travel arrangements. Compare the complete value rather than only the starting fare.",
        },
        {
            q: "Should I arrive early for a Scenic Douro River Cruise?",
            a: "Yes. International travelers should consider arriving at least one day before the cruise, with one or two nights in Porto being particularly useful.",
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
    "Wine enthusiasts",
    "Food lovers",
    "Luxury travelers",
    "First-time river cruisers",
    "Slow-travel enthusiasts",
    "Multigenerational travelers",
    "Travelers celebrating a special occasion",
];

/* ── Why Choose a Scenic Douro Cruise — Variety Data ──────────────── */
const douroVarietyFeatures = [
    "Porto",
    "The Douro Valley",
    "Pinhão",
    "Régua",
    "Portuguese vineyards",
    "Wine estates",
    "Historic villages",
    "Portuguese cuisine",
];

/* ── Where Do Scenic Douro Cruises Go — Destinations Data ─────────── */
const douroDestinations = [
    { key: "porto", title: "Porto", items: ["Port wine & historic architecture", "The Douro waterfront & wine cellars", "An excellent place to begin or extend a Douro vacation"] },
    { key: "douro-valley", title: "The Douro Valley", items: ["Terraced vineyards & steep hillsides", "Wine estates along the river", "Rural Portuguese scenery"] },
    { key: "pinhao", title: "Pinhão", items: ["One of the best-known Douro wine destinations", "Access to vineyards & wine estates", "The connection between landscape and wine production"] },
    { key: "regua", title: "Régua", items: ["Strong connections to the region's wine industry", "Access to surrounding vineyards", "Cultural attractions that put Douro wine into context"] },
    { key: "wine-country", title: "Douro Wine Country", items: ["Historic connection to Port wine", "Vineyards, wine estates & cuisine", "One continuous journey by river"] },
];

/* ── Best Douro Itineraries — Tabbed Data ──────────────────────────── */
const douroItineraries = [
    {
        id: "porto-douro-valley",
        title: "Porto & Douro Valley",
        badge: "Best Overall",
        icon: Compass,
        desc: "For first-time visitors, an itinerary combining Porto with the Douro Valley is an excellent introduction. It combines the urban character of Porto with the countryside of the Douro.",
        columns: [
            {
                label: "Best for:",
                items: ["First-time Portugal travelers", "Couples", "Wine lovers", "Luxury & food travelers"],
            },
        ],
    },
    {
        id: "wine-focused",
        title: "Douro Wine-Focused Itinerary",
        badge: "Wine Focus",
        icon: Wine,
        desc: "Travelers whose main priority is wine should look for sailings with strong vineyard, wine estate, and tasting experiences.",
        columns: [
            {
                label: "Best for:",
                items: ["Wine enthusiasts", "Vineyard travelers", "Food and wine travelers"],
            },
        ],
    },
    {
        id: "extended-portugal",
        title: "Extended Portugal Experience",
        badge: "Beyond the Douro",
        icon: Sun,
        desc: "If you have additional time, consider combining the cruise with a broader Portugal vacation, including Lisbon, Porto, the Douro Valley, and additional Portuguese wine regions.",
        columns: [
            {
                label: "Best for:",
                items: ["Travelers with extra time", "A more comprehensive Portugal journey", "Wine and culture travelers"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const douroSeasons = [
    {
        key: "spring",
        icon: <Flower2 size={22} strokeWidth={1.6} />,
        eyebrow: "March–May",
        title: "Spring",
        intro: "Spring offers:",
        items: [
            "Green landscapes & flowers",
            "Comfortable sightseeing conditions",
            "Lush scenery"
        ],
        outro: "It can be an excellent choice for travelers who prioritize landscape and comfortable temperatures.",
        accent: "adg-accent-teal"
    },
    {
        key: "summer",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "June–August",
        title: "Summer",
        intro: "Summer brings:",
        items: [
            "Long days & dramatic landscapes",
            "Outdoor experiences",
            "Extended sightseeing"
        ],
        outro: "Temperatures can be warm, particularly in the Douro Valley, so travelers should consider their tolerance for heat when choosing dates.",
        accent: "adg-accent-navy"
    },
    {
        key: "fall",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "September–November",
        title: "Fall",
        intro: "Fall can be particularly attractive to wine enthusiasts. Highlights can include:",
        items: [
            "Vineyard activity",
            "Wine experiences",
            "Autumn scenery & seasonal food"
        ],
        outro: "If wine is your primary motivation, fall deserves serious consideration.",
        accent: "adg-accent-rose"
    },
    {
        key: "winter",
        icon: <Snowflake size={22} strokeWidth={1.6} />,
        eyebrow: "December–February",
        title: "Winter",
        intro: "Winter offers a quieter experience, providing:",
        items: [
            "Fewer crowds",
            "A slower pace",
            "Quieter sightseeing"
        ],
        outro: "Travelers who prioritize fewer crowds and a slower pace may still find it appealing.",
        accent: "adg-accent-teal"
    }
];

/* ── Scenic Douro Excursions Data ─────────────────────────────────── */
const douroExcursions = [
    { icon: <Wine size={28} strokeWidth={1.5} />, title: "Wine", desc: "Explore vineyards and wine-producing areas." },
    { icon: <Utensils size={28} strokeWidth={1.5} />, title: "Food", desc: "Experience Portuguese culinary traditions." },
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "History", desc: "Discover historic towns and cultural sites." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Architecture", desc: "Explore Portuguese buildings and historic landmarks." },
    { icon: <Palette size={28} strokeWidth={1.5} />, title: "Culture", desc: "Experience local traditions and regional heritage." },
    { icon: <Mountain size={28} strokeWidth={1.5} />, title: "Active Travel", desc: "Walking and cycling opportunities may be available on eligible itineraries." },
];

/* ── Douro Valley Landscape Sightings Data ──────────────────────── */
const landscapeSightings = ["Terraced vineyards", "Steep hillsides", "Wine estates along the riverbank", "Portuguese rural scenery"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Sailing date",
    "Itinerary",
    "Cruise length",
    "Suite category",
    "Availability",
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

/* ── Scenic Douro vs Other Luxury River Cruises — Comparison Table ── */
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
    "Choosing a sailing without considering the season",
    "Treating the cruise as only a wine trip",
    "Not researching wine excursions",
    "Arriving in Porto on embarkation day",
    "Ignoring the cabin",
    "Not adding time in Porto",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicDouroRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("porto-douro-valley");

    const currentItinerary =
        douroItineraries.find((f) => f.id === activeItinerary) || douroItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Douro River Cruises in Portugal | Wine, Porto & Best Itineraries</title>
                <meta name="title" content="Scenic Douro River Cruises | Portugal Wine & Luxury Cruise Guide" />
                <meta
                    name="description"
                    content="Explore Scenic Douro River Cruises through Portugal's wine country. Discover Porto, the Douro Valley, Pinhão, vineyards, wineries, excursions, cabins, costs and the best time to cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Douro <br /> River Cruises in Portugal</h1>

                    <p>
                        A Scenic Douro River Cruise offers a luxurious way
                        to experience one of Europe's most beautiful wine
                        regions. Instead of connecting a long list of major
                        cities and countries, the journey focuses on
                        Portugal's dramatic Douro Valley, historic
                        villages, vineyards, wine estates, and the cultural
                        heritage of Porto.
                    </p>

                    {readMore && (
                        <p>
                            A Scenic Douro itinerary can combine Porto, the
                            Douro Valley, Pinhão, Régua, Portuguese
                            vineyards, wine estates, historic villages,
                            river landscapes, Portuguese cuisine, and
                            cultural experiences. The result is less about
                            checking destinations off a list and more about
                            experiencing Portugal's wine country from the
                            river.
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
                            Start Planning Your Scenic Douro Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Douro River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Yes — particularly for wine lovers, couples,
                            food travelers, and luxury travelers who want
                            to experience Portugal's Douro Valley without
                            constantly changing hotels. The biggest appeal
                            is the combination of wine, vineyards, dramatic
                            river scenery, Portuguese culture, food,
                            historic towns, and luxury river cruising. It's
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
                            Douro highlights include Porto, the Douro
                            Valley, Pinhão, Régua, Portuguese vineyards,
                            wine estates, historic villages, and Portuguese
                            cuisine.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC DOURO RIVER CRUISE? ─────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-douro">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Douro River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The Douro offers something that many larger
                            European river itineraries don't: landscape
                            immersion. As the ship travels through the
                            Douro Valley, vineyards rise along the
                            hillsides and the river becomes part of the
                            destination itself. The experience is
                            essentially Porto → Douro Valley → vineyards →
                            wine estates → Portuguese villages → Porto:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {douroVarietyFeatures.map((label, i) => (
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
                                        Instead of repeatedly packing and
                                        unpacking, travelers can use the
                                        ship as a floating luxury base while
                                        exploring Portugal's wine country.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '350px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        One Ship, Through Portugal's Wine Country
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DO SCENIC DOURO CRUISES GO? ────────────────────── */}
            <section
                className="adg-section"
                id="douro-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Do Scenic Douro River Cruises Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact destinations depend on the sailing and
                            itinerary, but a Scenic Douro journey can
                            include destinations and experiences around:
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {douroDestinations.map((item) => (
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
                                        <span className="adg-card-eyebrow-label">Douro Destination</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Douro Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Douro sailings and find the perfect fit for your trip.
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


            {/* ── BEST TIME FOR A SCENIC DOURO RIVER CRUISE ───────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time for a Scenic Douro River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            The Douro is a seasonal destination, and the best time depends on what you want to experience.
                        </p>
                    </div>

                    <div className="sfe-danube-seasons-grid">
                        {douroSeasons.map((item) => (
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

            {/* ── BEST SCENIC DOURO RIVER CRUISE ITINERARIES ──────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Douro River Cruise Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            There isn't one perfect itinerary for everyone.
                            Your choice should depend on how much time you
                            want in Porto, how important wine is to you,
                            and whether you prefer active excursions or
                            cultural experiences.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {douroItineraries.map((item) => {
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
                        <h2 className="sfe-firsttime-title">Scenic Douro Cruise for First-Time River Cruisers</h2>
                        
                        <p className="sfe-firsttime-lead">
                            The Douro is an excellent option if you want to experience river cruising without a multi-country itinerary.
                        </p>
                        
                        <p className="sfe-firsttime-desc">
                            The focus is clear: Portugal + wine + scenery + culture + cuisine. That makes it easier to build a trip around your interests.
                        </p>
                    </div>

                    <h4 className="sfe-firsttime-progression-title">
                        The trip can feel like a progression:
                    </h4>

                    <div className="sfe-firsttime-progression-grid">
                        
                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">01</div>
                            <h3 className="sfe-firsttime-step-title">Porto</h3>
                            <span className="sfe-firsttime-step-subtitle">City & Port Wine</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">02</div>
                            <h3 className="sfe-firsttime-step-title">Douro Valley</h3>
                            <span className="sfe-firsttime-step-subtitle">Vineyards & Wine Estates</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">03</div>
                            <h3 className="sfe-firsttime-step-title">Pinhão & Régua</h3>
                            <span className="sfe-firsttime-step-subtitle">Villages & River Scenery</span>
                        </div>

                    </div>

                    <div className="sfe-firsttime-footer-box">
                        <p className="sfe-firsttime-callout-text">
                            A multi-country itinerary isn't the focus.
                        </p>
                        <p className="sfe-firsttime-conclusion">
                            That means you spend more time experiencing a specific region instead of constantly moving between major European cities.
                        </p>
                    </div>

                </div>
            </section>


            {/* ── SCENIC DOURO EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="douro-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Douro River Cruise Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Excursions are an important part of the
                            experience. Scenic's Freechoice program gives
                            travelers options among available experiences,
                            while Scenic Enrich provides specially curated
                            experiences on qualifying sailings.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {douroExcursions.map((item, idx) => (
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
                                The Douro gives you Porto, the Douro Valley, Pinhão, and Régua — all in one trip. You can think of the journey simply as Porto → vineyards → wine estates → Portuguese villages, rather than a complicated multi-country itinerary.
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
                                <span className="sfe-cabins-img-label">Douro River Cruise Cabins</span>
                            </div>
                            
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Douro River Cruise Cabins &amp; Suites</h3>
                                <p className="sfe-cabins-text">
                                    The right suite can make a significant difference. When choosing your accommodation, consider:
                                </p>
                                
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Deck & suite category",
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
                                    Because the Douro is particularly scenic, travelers who enjoy watching the landscape may place greater value on their river-view space.
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
                                <h3 className="sfe-cabins-title">Scenic Butler Service on the Douro</h3>
                                <p className="sfe-cabins-text">
                                    Butler Service is available with eligible Scenic suites. Travelers who prioritize personalized service may appreciate the additional assistance, particularly when:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Celebrating a special occasion",
                                        "Traveling as part of a luxury itinerary",
                                        "Requesting personalized preferences",
                                        "Traveling with family"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    Exact Butler Service depends on your suite category and sailing, so confirm the details with your advisor before booking.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* ── FOOD & PORT WINE HERITAGE ───────────────────────────── */}
            <section className="sfe-dining-noimg-section" id="food-port-wine-heritage">
                <div className="sfe-dining-noimg-container">
                    <div className="sfe-dining-noimg-grid">

                        {/* Card 1: Food */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Utensils size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Douro Cruise for Food Lovers</h3>
                            </div>

                            <p className="sfe-dining-noimg-text" style={{ fontWeight: 600, marginBottom: '8px' }}>
                                Portugal is an increasingly popular destination for food travelers.
                            </p>

                            <p className="sfe-dining-noimg-text">
                                The Douro adds a regional dimension to that experience.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can experience:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '20px' }}>
                                {[
                                    "Portuguese breads",
                                    "Regional cheeses",
                                    "Seafood",
                                    "Portuguese specialties",
                                    "Wine pairings",
                                    "Local desserts"
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
                                For food-focused travelers, consider extending your trip in Porto so you can explore restaurants outside the cruise itinerary.
                            </p>
                        </div>

                        {/* Card 2: Port Wine Heritage */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Landmark size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Port Wine & the Douro</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                Port wine is deeply connected to the Douro region and the city of Porto. Travelers can learn how the region's geography, vineyards, and centuries of wine-making traditions shaped its reputation.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Depending on the destinations visited, travelers can encounter:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Port wine heritage",
                                    "Historic wine cellars",
                                    "Centuries of wine-making traditions",
                                    "Portuguese geography & vineyards",
                                    "Regional cultural traditions"
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
                                For serious wine travelers, consider adding additional time in Porto to explore its wine culture before or after the cruise.
                            </p>

                            <div className="sfe-dining-noimg-links">
                                <span className="sfe-dining-noimg-links-label">Related Guide:</span>
                                <div className="sfe-dining-noimg-links-grid">
                                    <Link to="/scenic-river-cruises/douro" className="sfe-dining-noimg-link-item">
                                        <span>Scenic Douro River Cruises: The Complete Guide</span>
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
                          
                            <h2 className="sfe-wine-title">Scenic Douro for Wine Lovers</h2>
                            
                            <p className="sfe-wine-lead">
                                If wine is the primary reason you're considering Portugal, the Douro should be high on your list.
                            </p>
                            
                            <p className="sfe-wine-desc">
                                The best experience isn't simply tasting wine. It's understanding where it comes from.
                            </p>

                            <div className="sfe-wine-callout">
                                Pinhão and Régua are particularly important for wine enthusiasts.
                            </div>

                            <h4 className="sfe-wine-context-title">
                                A well-planned Douro journey can connect:
                            </h4>

                            <div className="sfe-wine-timeline">
                                <span className="sfe-wine-timeline-node">river</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">vineyard</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">wine estate</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">cuisine</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">culture</span>
                            </div>

                            <p className="sfe-wine-conclusion">
                                That makes the experience more meaningful than a standalone wine tour.
                            </p>
                        </div>

                        <div className="sfe-wine-media">
                            <Wine size={72} className="sfe-wine-media-icon" strokeWidth={1} />
                            <span className="sfe-wine-media-label">Douro Wine Regions</span>
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
                
                            <h2 className="sfe-lounge-title">Scenic Sun Lounge Experience on the Douro</h2>
                            
                            <p className="sfe-lounge-lead">
                                Scenic's Sun Lounge concept can be especially attractive on the Douro. The river journey itself is part of the experience.
                            </p>

                            <h4 className="sfe-lounge-list-title">You can watch:</h4>

                            <div className="sfe-lounge-checklist">
                                {[
                                    "Vineyards",
                                    "Terraced hills",
                                    "Portuguese villages",
                                    "River landscapes",
                                    "Wine estates"
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-lounge-item">
                                        <CheckCircle size={18} strokeWidth={2.5} className="sfe-lounge-icon" />
                                        <span className="sfe-lounge-text">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="sfe-lounge-desc">
                                from the comfort of your suite.
                            </p>

                            <p className="sfe-lounge-outro">
                                For a scenic destination like the Douro, this can be one of the most valuable features of the accommodation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAMILIES & MULTIGENERATIONAL GROUPS ──────────────────────── */}
            <section className="sfe-family-section" id="families-multigenerational">
                <div className="sfe-family-container">
                    <div className="sfe-family-header">
                        <h2 className="sfe-family-title">Scenic Douro Cruises for Families &amp; Multigenerational Groups</h2>
                        <div className="sfe-family-accent"></div>
                        <p className="sfe-family-intro">
                            The Douro can also work well for families traveling across generations — select excursions based on activity level rather than trying to make everyone participate in every experience.
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
                                        <h3 className="sfe-family-gen-title">Older travelers may appreciate:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Relaxed river travel", "Luxury service", "Scenic sailing", "Cultural experiences"].map((item, i) => (
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
                                    {["Wine", "Food", "History", "Luxury accommodations"].map((item, i) => (
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
                                        <h3 className="sfe-family-gen-title">Older children &amp; teenagers may enjoy:</h3>
                                    </div>
                                </div>
                                <ul className="sfe-family-gen-list">
                                    {["Portuguese culture", "Historic sites", "Active excursions", "Scenic landscapes"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Ship size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Douro Family Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Ship size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    When traveling with multiple generations, select excursions based on activity level rather than trying to make everyone participate in every experience.
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
                                <span className="sfe-family-img-label">Douro Couples Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Heart size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    The combination makes the Douro a strong choice for anniversaries, honeymoons, and milestone birthdays.
                                </p>
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="sfe-family-generations">
                            <div className="sfe-family-header" style={{ textAlign: 'left', margin: '0 0 32px 0', maxWidth: '100%' }}>
                                <h2 className="sfe-family-title">Scenic Douro Cruise for Couples</h2>
                                <div className="sfe-family-accent" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="sfe-family-intro">
                                    The Douro is particularly well suited to romantic travel.
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
                                        "Vineyard scenery",
                                        "Portuguese cuisine",
                                        "Porto",
                                        "Historic towns",
                                        "Scenic sailing",
                                        "Luxury accommodations"
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

            {/* ── HOW MUCH DOES A SCENIC DOURO CRUISE COST? ───────────────── */}
            <section className="sfe-cost-section" id="douro-cost" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Douro River Cruise Cost?</h2>
                        <div className="sfe-cost-accent"></div>
                        <p className="sfe-cost-intro">
                            The cost depends on:
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
                                        <h3 className="sfe-cost-callout-title">When comparing Douro river cruises, don't focus only on the initial fare.</h3>
                                    </div>
                                    <div className="sfe-cost-divider" />
                                    <p className="sfe-cost-callout-text">
                                        Consider suite, inclusions, excursions, service, itinerary, and pre/post-cruise arrangements.
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

            {/* ── WHAT IS INCLUDED ON A SCENIC DOURO CRUISE? ──────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Douro River Cruise?</h2>
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

            {/* ── SCENIC DOURO VS OTHER LUXURY RIVER CRUISES ──────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="douro-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Douro vs <br /> Other Luxury River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            For the Douro specifically, compare the wine
                            experiences, itinerary, suite, excursions,
                            dining, and included services rather than
                            simply comparing starting prices.
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

            {/* ── COMMON SCENIC DOURO CRUISE MISTAKES ─────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Douro Cruise Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when planning your
                            Scenic Douro River Cruise.
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
                        <h2 className="sfe-danube-duration-title">How Many Days Do You Need for a Scenic Douro Cruise?</h2>
                        <div className="sfe-danube-duration-accent"></div>
                        <p className="sfe-danube-duration-lead">
                            The cruise itself provides a strong introduction to Portugal's wine country, but additional nights can improve the overall experience.
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
                                    "1–2 nights in Porto",
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
                                    "Extending into another Portuguese destination",
                                    "Restaurant reservations in Porto",
                                    "A more comprehensive Portugal vacation"
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
                            Porto is important enough to justify extra time — arriving early provides protection from flight delays and more time to experience the city.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── WHY BOOK A SCENIC DOURO CRUISE THROUGH A LUXURY TRAVEL ADVISOR? ── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book a Scenic Douro Cruise <br /> Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                The Right Itinerary Depends on Your Priorities
                            </h3>
                            <p className="Avr-planning-left-body">
                                A wine enthusiast may want a different
                                experience from a traveler primarily
                                interested in food, Portuguese history,
                                architecture, photography, family travel,
                                or romantic travel. A luxury travel advisor
                                can help coordinate the entire journey,
                                which is especially useful if the Douro
                                cruise is one part of a longer Portugal or
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
                                    { icon: <Home size={18} />, label: "Porto hotels" },
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
                            Douro River Cruises before booking.
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
                        alt="Scenic Space-Ship sailing past terraced Douro Valley vineyards at sunset"
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
                                    Douro Wine Country — <br /> Slowing Down to Experience a Landscape
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Douro River Cruises are an
                                        outstanding choice for travelers who
                                        want to experience Portugal through
                                        wine, scenery, food, and culture.

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
                                                The Douro isn't primarily
                                                about collecting cities.
                                                It's about slowing down and
                                                experiencing a landscape.
                                                For wine lovers, couples,
                                                food travelers, and luxury
                                                travelers looking for a more
                                                immersive European
                                                experience, the Douro is one
                                                of the most distinctive
                                                river cruise destinations in
                                                Europe.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                The journey can combine
                                                Douro wine country, terraced
                                                vineyards, Porto, wine
                                                estates, Portuguese cuisine,
                                                Douro River scenery, and
                                                historic towns. At Trips
                                                &amp; Ships Luxury Travel,
                                                we'll help you compare the
                                                ship, suite, itinerary, and
                                                included experiences — not
                                                simply the advertised
                                                cruise price.
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
                                            Start Planning Your Scenic Douro Cruise
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
                                            "Compare Scenic Douro itineraries and ships",
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

export default ScenicDouroRiverCruises;