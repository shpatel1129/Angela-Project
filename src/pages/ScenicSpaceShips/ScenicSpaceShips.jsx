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
    BadgePercent,
    CheckCircle,
    Coffee,
    Sun,
    Sunset,
    Moon,
    Snowflake,
    Gift,
    Wind,
    Eye,
    Building2,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Space-Ship / Sun Lounge photography
   once available. Paths assume a new /assets/ScenicSunLounge folder. */
// import HeroImage from "../../assets/ScenicSunLounge/scenic-sun-lounge-hero.jpg";
// import SuiteImage from "../../assets/ScenicSunLounge/scenic-sun-lounge-suite.jpg";
// import PrivacyImage from "../../assets/ScenicSunLounge/scenic-sun-lounge-privacy.jpg";
// import RequestImage from "../../assets/ScenicSunLounge/scenic-sun-lounge-request.jpg";

import { Helmet } from "react-helmet-async";
import "../riversidecruises/RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../riversidecruises/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/#webpage",
            name: "Scenic Space-Ships & Sun Lounge Balconies Explained (2026)",
            url: "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/",
            description:
                "Discover how Scenic Space-Ships and Sun Lounge balconies work, including balcony design, suite categories, privacy, river views, and which Scenic cabins are best for your trip.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/#article",
            headline: "Scenic Space-Ships & Sun Lounge Balconies Explained",
            description:
                "A complete guide to Scenic's Space-Ship design and Sun Lounge balconies, including how they work, which suites have them, and how to choose the right cabin for your trip.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/#breadcrumb",
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
                    name: "Scenic Space-Ships & Sun Lounge Balconies",
                    item: "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/#itemlist",
            name: "Scenic Space-Ships & Sun Lounge Balconies — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "What Is a Scenic Space-Ship?" },
                { "@type": "ListItem", position: 3, name: "What Makes the Scenic Balcony Different?" },
                { "@type": "ListItem", position: 4, name: "The Best Time to Use Your Sun Lounge" },
                { "@type": "ListItem", position: 5, name: "Sun Lounge vs Traditional Balcony" },
                { "@type": "ListItem", position: 6, name: "Are Scenic Sun Lounge Balconies Private?" },
                { "@type": "ListItem", position: 7, name: "Which Scenic Suites Have Sun Lounge Balconies?" },
                { "@type": "ListItem", position: 8, name: "Is a Sun Lounge Better Than an Outdoor Balcony?" },
                { "@type": "ListItem", position: 9, name: "Best Scenic Suites for River Views" },
                { "@type": "ListItem", position: 10, name: "Is a Scenic Sun Lounge Worth It?" },
                { "@type": "ListItem", position: 11, name: "Sun Lounges in Cold Weather & Christmas Markets" },
                { "@type": "ListItem", position: 12, name: "Scenic Space-Ship vs Ocean Cruise Balcony" },
                { "@type": "ListItem", position: 13, name: "Why Your Suite Location Matters" },
                { "@type": "ListItem", position: 14, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 15, name: "How to Choose the Right Scenic Suite" },
                { "@type": "ListItem", position: 16, name: "Why a Luxury Travel Advisor Can Help" },
                { "@type": "ListItem", position: 17, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/space-ships-sun-lounges/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is a Scenic Sun Lounge?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A Scenic Sun Lounge is a distinctive balcony/living-space design found on eligible Scenic suites, giving guests a comfortable area to enjoy river views with greater protection from the elements than a completely exposed balcony.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do all Scenic suites have Sun Lounge balconies?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Balcony and Sun Lounge configurations vary by suite category and Space-Ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Sun Lounge balconies private?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Sun Lounge is part of your private suite, although the level of visual privacy can depend on the specific suite location and ship design.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you open a Scenic Sun Lounge?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The exact operation and configuration can vary by Space-Ship and suite. Check the specific ship's current specifications before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Sun Lounge worth the extra cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It can be worthwhile if you enjoy spending time in your suite, watching the scenery, or traveling during cooler or changeable weather.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Sun Lounges good in winter?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The more protected design can be particularly appealing during cooler-season sailings, including Christmas Market cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic suites have the best balconies?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The answer depends on your priorities. Larger premium suites generally provide more space, while higher decks may provide broader sightlines.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the port or starboard side better on a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There isn't one universally better side. River scenery changes continuously, and the ship's orientation changes throughout the itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic balconies worth it?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers who enjoy watching the river and spending time in their cabin, a balcony or Sun Lounge can significantly improve the cruise experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I see castles and villages from my Scenic Sun Lounge?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. One of the major advantages of river cruising is the continuous scenery along the riverbanks, including castles, villages, vineyards, and historic cities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic Space-Ships smaller than ocean cruise ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic Space-Ships are purpose-built river vessels and are much smaller than typical ocean cruise ships.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic Butler Service come with every Sun Lounge suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily. Butler Service depends on the specific suite category, so the two features should be evaluated separately when comparing cabins.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Sun Lounge better than a traditional balcony?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It depends on your preferences. The Sun Lounge emphasizes comfort and flexibility, while some travelers may prefer a completely open-air balcony.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor help me choose a Scenic balcony?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. An experienced advisor can compare ship layouts, suite categories, deck locations, balcony configurations, and service inclusions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic cruise is best for balcony views?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There isn't one universal answer. Rhine, Danube, Rhône, Douro, and other itineraries all offer different scenery. The best choice depends on whether you prioritize castles, vineyards, cities, villages, or landscapes.",
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
            q: "What is a Scenic Sun Lounge?",
            a: "A Scenic Sun Lounge is a distinctive balcony/living-space design found on eligible Scenic suites, giving guests a comfortable area to enjoy river views with greater protection from the elements than a completely exposed balcony.",
        },
        {
            q: "Do all Scenic suites have Sun Lounge balconies?",
            a: "No. Balcony and Sun Lounge configurations vary by suite category and Space-Ship.",
        },
        {
            q: "Are Scenic Sun Lounge balconies private?",
            a: "The Sun Lounge is part of your private suite, although the level of visual privacy can depend on the specific suite location and ship design.",
        },
        {
            q: "Can you open a Scenic Sun Lounge?",
            a: "The exact operation and configuration can vary by Space-Ship and suite. Check the specific ship's current specifications before booking.",
        },
        {
            q: "Is a Scenic Sun Lounge worth the extra cost?",
            a: "It can be worthwhile if you enjoy spending time in your suite, watching the scenery, or traveling during cooler or changeable weather.",
        },
        {
            q: "Are Scenic Sun Lounges good in winter?",
            a: "Yes. The more protected design can be particularly appealing during cooler-season sailings, including Christmas Market cruises.",
        },
        {
            q: "Which Scenic suites have the best balconies?",
            a: "The answer depends on your priorities. Larger premium suites generally provide more space, while higher decks may provide broader sightlines.",
        },
        {
            q: "Is the port or starboard side better on a Scenic River Cruise?",
            a: "There isn't one universally better side. River scenery changes continuously, and the ship's orientation changes throughout the itinerary.",
        },
        {
            q: "Are Scenic balconies worth it?",
            a: "For travelers who enjoy watching the river and spending time in their cabin, a balcony or Sun Lounge can significantly improve the cruise experience.",
        },
        {
            q: "Can I see castles and villages from my Scenic Sun Lounge?",
            a: "Yes. One of the major advantages of river cruising is the continuous scenery along the riverbanks, including castles, villages, vineyards, and historic cities.",
        },
        {
            q: "Are Scenic Space-Ships smaller than ocean cruise ships?",
            a: "Yes. Scenic Space-Ships are purpose-built river vessels and are much smaller than typical ocean cruise ships.",
        },
        {
            q: "Does Scenic Butler Service come with every Sun Lounge suite?",
            a: "Not necessarily. Butler Service depends on the specific suite category, so the two features should be evaluated separately when comparing cabins.",
        },
        {
            q: "Is a Scenic Sun Lounge better than a traditional balcony?",
            a: "It depends on your preferences. The Sun Lounge emphasizes comfort and flexibility, while some travelers may prefer a completely open-air balcony.",
        },
        {
            q: "Can a travel advisor help me choose a Scenic balcony?",
            a: "Yes. An experienced advisor can compare ship layouts, suite categories, deck locations, balcony configurations, and service inclusions.",
        },
        {
            q: "Which Scenic cruise is best for balcony views?",
            a: "There isn't one universal answer. Rhine, Danube, Rhône, Douro, and other itineraries all offer different scenery. The best choice depends on whether you prioritize castles, vineyards, cities, villages, or landscapes.",
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
    "More usable living space",
    "Excellent river views",
    "Protection from some weather conditions",
    "Flexible indoor/outdoor-style experience",
    "Comfortable place to relax while sailing",
    "A distinctive Scenic suite feature",
];

/* ── What Is a Scenic Space-Ship — Design Philosophy Data ──────────── */
const spaceShipFeatures = [
    "Spacious suites",
    "Contemporary interiors",
    "Large windows",
    "River views",
    "Personalized service",
    "Luxury public areas",
    "High-quality dining",
    "Destination-focused travel",
];

/* ── Best Time to Use Your Sun Lounge — Tabbed Data ────────────────── */
const sunLoungeMoments = [
    {
        id: "morning",
        title: "Early Morning",
        badge: "Mornings",
        icon: Coffee,
        desc: "Watch European villages and countryside wake up while enjoying coffee. The riverbanks are often at their quietest and most atmospheric before the day's excursions begin.",
        columns: [
            {
                label: "Best enjoyed with:",
                items: ["Morning coffee or tea", "A quiet, unhurried start", "Misty riverside scenery"],
            },
        ],
    },
    {
        id: "afternoon",
        title: "Afternoon",
        badge: "Afternoon",
        icon: Sun,
        desc: "Relax after returning from an excursion. The Sun Lounge gives you a comfortable space to unwind while the scenery continues to change outside.",
        columns: [
            {
                label: "Ideal for:",
                items: ["Resting after a shore excursion", "Reading with a river view", "A relaxed midday pause"],
            },
        ],
    },
    {
        id: "golden-hour",
        title: "Golden Hour",
        badge: "Golden Hour",
        icon: Sunset,
        desc: "Watch castles and vineyards change in the evening light. Golden hour is often when the Sun Lounge feels most rewarding, as the landscape takes on a different character.",
        columns: [
            {
                label: "What you might see:",
                items: ["Sunlit castles and hillsides", "Vineyards in warm evening light", "Riverside villages glowing at dusk"],
            },
        ],
    },
    {
        id: "evening",
        title: "Evening",
        badge: "Evening",
        icon: Moon,
        desc: "Enjoy the river views before dinner. One of the best things about river cruising is that the destination literally moves past your window, even as the evening winds down.",
        columns: [
            {
                label: "A relaxed way to:",
                items: ["Unwind before dinner", "Watch the river in the evening light", "End the day with a view"],
            },
        ],
    },
];

/* ── Sun Lounge vs Traditional Balcony — Comparison Table Data ─────── */
const balconyComparisonRows = [
    { feature: "Outdoor-style viewing", traditional: "✓", sunLounge: "✓" },
    { feature: "Connected to suite", traditional: "✓", sunLounge: "✓" },
    { feature: "Weather protection", traditional: "Limited", sunLounge: "Enhanced" },
    { feature: "Flexible living space", traditional: "Limited", sunLounge: "✓" },
    { feature: "River views", traditional: "✓", sunLounge: "✓" },
    { feature: "Distinctive Scenic design", traditional: "—", sunLounge: "✓" },
    { feature: "Usable in cooler weather", traditional: "More limited", sunLounge: "Better suited" },
];

/* ── Privacy Factors Data ──────────────────────────────────────────── */
const privacyFactors = ["Suite location", "Deck", "Ship design", "Nearby suites", "River traffic", "Port position"];

/* ── Which Suites Have Sun Lounges — Comparison Factors ─────────────── */
const suiteFactors = [
    "Suite size",
    "Deck location",
    "Sun Lounge configuration",
    "Sleeping area",
    "Bathroom",
    "Butler Service",
    "Bed configuration",
    "View",
    "Ship-specific layout",
];

/* ── Suite Categories Data ─────────────────────────────────────────── */
const suiteCategories = [
    "Standard Suites",
    "Balcony Suites",
    "Junior Suites",
    "Royal Suites",
    "Royal Panorama Suites",
    "Owner's Penthouse Suites",
];

/* ── Best Scenic Suites for River Views Data ───────────────────────── */
const bestViewSuites = [
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "Higher Deck Suites", desc: "Higher decks can provide broader sightlines over the passing landscape." },
    { icon: <Compass size={28} strokeWidth={1.5} />, title: "Forward or Midship Locations", desc: "Depending on the ship, these locations can provide different perspectives while sailing." },
    { icon: <Home size={28} strokeWidth={1.5} />, title: "Larger Sun Lounge Suites", desc: "If you expect to spend significant time in your suite, additional space can make a meaningful difference." },
    { icon: <Eye size={28} strokeWidth={1.5} />, title: "Panorama-Focused Suites", desc: "For travelers who prioritize views above everything else, premium suite categories can be worth considering." },
];

/* ── Scenic Space-Ship vs Ocean Cruise Balcony — Comparison Table ──── */
const spaceShipVsOceanRows = [
    { feature: "Ship focus", spaceShip: "Designed for river scenery", ocean: "Designed for ocean views" },
    { feature: "Scenery", spaceShip: "Frequent changing landscapes", ocean: "Horizon-focused views" },
    { feature: "Ship size", spaceShip: "Compact luxury ship", ocean: "Often much larger" },
    { feature: "Itinerary style", spaceShip: "European destinations nearby", ocean: "More sea days" },
    { feature: "Balcony views", spaceShip: "Villages, castles, vineyards", ocean: "Ocean and port views" },
    { feature: "Overall focus", spaceShip: "Destination immersion", ocean: "Ship amenities can be a major focus" },
];

/* ── Suite Location Factors Data ───────────────────────────────────── */
const locationFactors = [
    { title: "Forward vs Midship", desc: "Different perspectives and potential motion characteristics." },
    { title: "Lower vs Upper Deck", desc: "Different sightlines over the passing landscape." },
    { title: "Port vs Starboard", desc: "The river scenery changes constantly, so neither side guarantees the best views for an entire itinerary." },
    { title: "Near Public Areas", desc: "Convenient — but potentially busier." },
    { title: "Quiet Areas", desc: "Better if you value privacy and uninterrupted relaxation." },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Assuming every Scenic balcony is identical",
    "Looking only at square footage",
    "Ignoring deck location",
    "Assuming one side of the ship is always better",
    "Not looking at the actual deck plan",
];

/* ── How to Choose the Right Scenic Suite Data ─────────────────────── */
const chooseSuiteQuestions = [
    { icon: <Home size={28} strokeWidth={1.5} />, title: "How much time will I spend in my suite?", desc: "If the answer is \"a lot,\" consider upgrading." },
    { icon: <Eye size={28} strokeWidth={1.5} />, title: "How important are river views?", desc: "If they're central to your experience, prioritize a balcony/Sun Lounge category." },
    { icon: <Calendar size={28} strokeWidth={1.5} />, title: "When am I traveling?", desc: "Spring, autumn, and winter make weather protection more valuable." },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Do I want Butler Service?", desc: "If personalized service matters, compare eligible suite categories." },
    { icon: <BadgePercent size={28} strokeWidth={1.5} />, title: "What's my overall travel budget?", desc: "Don't sacrifice the itinerary simply to get a larger cabin." },
];

/* ── Beyond the Balcony — Space-Ship Features Data ─────────────────── */
const beyondBalconyFeatures = [
    "Multiple dining venues",
    "Scenic Lounge",
    "Wellness facilities",
    "Fitness areas",
    "Swimming facilities on select ships",
    "Outdoor spaces",
    "River-view public areas",
    "Personalized service",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicSpaceShipsSunLounge = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeMoment, setActiveMoment] = useState("morning");

    const currentMoment =
        sunLoungeMoments.find((f) => f.id === activeMoment) || sunLoungeMoments[0];
    const ActiveMomentIcon = currentMoment.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Space-Ships & Sun Lounge Balconies Explained</title>
                <meta name="title" content="Scenic Space-Ships & Sun Lounge Balconies | Cabin Guide" />
                <meta
                    name="description"
                    content="Discover how Scenic Space-Ships and Sun Lounge balconies work, including balcony design, suite categories, privacy, river views, and which Scenic cabins are best for your trip."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Space-Ships & <br /> Sun Lounge Balconies Explained</h1>

                    <p>
                        One of the most recognizable features of a Scenic
                        Space-Ship is its innovative balcony design. Instead
                        of a conventional balcony that simply extends
                        outside the cabin, many Scenic suites feature a Sun
                        Lounge — an enclosed or partially enclosed balcony
                        area that can be incorporated into the living space
                        of the suite.
                    </p>

                    {readMore && (
                        <p>
                            For travelers researching Scenic River Cruises,
                            understanding this design is important because
                            the balcony isn't simply a cosmetic feature. It
                            can affect how much usable living space you
                            have, how you experience the river, your
                            privacy, your ability to enjoy the scenery, and
                            which suite category makes sense for your
                            budget. This guide explains what Scenic
                            Space-Ships are, how Sun Lounge balconies work,
                            which travelers benefit most from them, and how
                            to choose the right Scenic suite.
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
                            Start Planning Your Scenic Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">What Is a Scenic Sun Lounge? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            A Scenic Sun Lounge is Scenic's distinctive
                            balcony concept that gives guests a dedicated
                            space for enjoying the river views while
                            allowing the area to become part of the suite's
                            living environment. The main benefits include:
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
                            Instead of sitting on a small exposed balcony,
                            you can enjoy the scenery from a more flexible
                            space connected to your suite. The exact
                            configuration depends on the Space-Ship and
                            suite category.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS A SCENIC SPACE-SHIP? ──────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="what-is-a-space-ship">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">What Is a Scenic Space-Ship?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic uses the term Space-Ship for its
                            purpose-built river cruise vessels. The design
                            philosophy emphasizes:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {spaceShipFeatures.map((label, i) => (
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
                                        Unlike a large ocean cruise ship, a
                                        Scenic Space-Ship is designed
                                        specifically for European rivers.
                                        That means the ship itself is part
                                        of the destination experience.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '340px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Purpose-Built for European Rivers
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rlc-lc-worth-conclusion-box" style={{ marginTop: "40px" }}>
                        <p className="rlc-lc-worth-conclusion-text">
                            Traditional balconies simply extend outside the
                            cabin (Suite → Door → Outdoor balcony → River).
                            Scenic's Sun Lounge concept is different — the
                            balcony area can become an extension of the
                            suite itself (Suite → Sun Lounge → River), which
                            makes it more useful in different weather
                            conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SUN LOUNGE OPERATION & IMPORTANCE ─────────────────────────── */}
            <section className="adg-section" id="sun-lounge-details" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="sss-lounge-grid">
                        {/* How Does It Work Card */}
                        <div className="sss-lounge-card">
                            <div className="sss-lounge-header">
                                <span className="sss-lounge-icon-wrap">
                                    <Sun size={22} strokeWidth={1.8} />
                                </span>
                                <h3 className="sss-lounge-title">How Does a Scenic Sun Lounge Work?</h3>
                            </div>
                            <p className="sss-lounge-text">
                                The Sun Lounge is designed to provide a flexible connection between your suite and the outside environment.
                            </p>
                            <p className="sss-lounge-text">
                                When conditions are ideal, you can enjoy the sensation of being close to the river. When the weather isn't cooperating, the space provides more protection than a completely exposed balcony.
                            </p>
                            <h4 className="sss-lounge-list-title">Particularly useful in:</h4>
                            <div className="sss-lounge-list">
                                {[
                                    "Spring",
                                    "Autumn",
                                    "Cooler mornings",
                                    "Rainy weather",
                                    "Early morning sailing",
                                    "Evening cruising",
                                ].map((item, idx) => (
                                    <div key={idx} className="sss-lounge-item">
                                        <div className="sss-lounge-bullet" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Balcony Design Matters Card */}
                        <div className="sss-lounge-card sss-lounge-card-alt">
                            <div className="sss-lounge-header">
                                <span className="sss-lounge-icon-wrap">
                                    <Eye size={22} strokeWidth={1.8} />
                                </span>
                                <h3 className="sss-lounge-title">Why Balcony Design Matters on a River Cruise</h3>
                            </div>
                            <p className="sss-lounge-text">
                                On a river cruise, the scenery is constantly changing. You aren't simply looking at the ocean horizon.
                            </p>
                            <h4 className="sss-lounge-list-title">You may pass:</h4>
                            <div className="sss-lounge-list">
                                {[
                                    "Medieval castles",
                                    "Vineyards",
                                    "Historic villages",
                                    "Churches",
                                    "Forested hills",
                                    "European cities",
                                    "Bridges",
                                    "Riverfront architecture",
                                ].map((item, idx) => (
                                    <div key={idx} className="sss-lounge-item">
                                        <div className="sss-lounge-bullet" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="sss-lounge-footer-box">
                                <p className="sss-lounge-footer-text">
                                    A well-designed balcony gives you a front-row seat. For many travelers, this is one of the reasons to upgrade from a basic cabin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Balcony Type Suits You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us walk you through Sun Lounge configurations across Scenic's fleet.
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

            {/* ── THE BEST TIME TO USE YOUR SUN LOUNGE ─────────────────────── */}
            <section className="luc-destinations-section" id="best-time-to-use-sun-lounge" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">The Best Time to Use Your Sun Lounge</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            A Sun Lounge isn't only useful during daytime
                            sailing. On a river cruise, the scenery is
                            constantly changing — a well-designed balcony
                            gives you a front-row seat at any hour.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {sunLoungeMoments.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeMoment === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveMoment(item.id)}
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

                        <div className="luc-dest-panel" key={activeMoment}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveMomentIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveMomentIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentMoment.title}</span>
                                </div>
                            </div>

                            {currentMoment.desc && (
                                <p className="luc-dest-panel-desc">{currentMoment.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentMoment.columns.map((col, cIdx) => (
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

            {/* ── SUN LOUNGE VS TRADITIONAL BALCONY ────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="sun-lounge-vs-balcony">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Sun Lounge vs <br /> Traditional Balcony</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The exact design depends on the ship and suite
                            category, but the general differences are
                            consistent across the fleet.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Traditional Balcony</th>
                                    <th>Scenic Sun Lounge</th>
                                </tr>
                            </thead>
                            <tbody>
                                {balconyComparisonRows.map((row, i) => (
                                    <tr key={i}>
                                        <td><strong>{row.feature}</strong></td>
                                        <td>{row.traditional}</td>
                                        <td>{row.sunLounge}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── ARE SCENIC SUN LOUNGE BALCONIES PRIVATE? ─────────────────── */}
            <section className="rlc-lc-worth-section" id="privacy" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Are Scenic Sun Lounge Balconies Private?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Your Sun Lounge is part of your private
                                suite space. However, privacy can vary
                                depending on a number of factors. If privacy
                                is especially important to you, discuss the
                                specific cabin location with your travel
                                advisor before booking. Factors that can
                                affect privacy include:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {privacyFactors.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={PrivacyImage}
                                    alt="Private Sun Lounge balcony on a Scenic Space-Ship river cruise suite"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Your Private Viewing Space</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH SCENIC SUITES HAVE SUN LOUNGE BALCONIES? ─────────────────── */}
            <section className="sss-suites-section" id="suites-with-balconies" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    {/* Row 1: Which Scenic Suites Have Sun Lounge Balconies? */}
                    <div className="sss-suites-row">
                        <div className="sss-suites-content">
                            <h2 className="sss-suites-title">Which Scenic Suites Have Sun Lounge Balconies?</h2>
                            <div className="sss-suites-accent" />
                            <p className="sss-suites-text">
                                Sun Lounge configurations are associated with Scenic's suite categories, but not every suite is identical. Scenic offers multiple accommodation categories, and the size, layout, and balcony configuration can vary by Space-Ship.
                            </p>
                            <p className="sss-suites-text" style={{ fontWeight: "600", marginBottom: "16px" }}>
                                When comparing suites, look beyond the word "balcony." Always check:
                            </p>
                            <div className="sss-suites-list">
                                {[
                                    "Suite size",
                                    "Deck location",
                                    "Sun Lounge configuration",
                                    "Sleeping area",
                                    "Bathroom",
                                    "Butler Service",
                                    "Bed configuration",
                                    "View",
                                    "Ship-specific layout",
                                ].map((item, idx) => (
                                    <div key={idx} className="sss-suites-item">
                                        <div className="sss-suites-bullet">
                                            <Check size={12} strokeWidth={2.5} />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sss-suites-media">
                            <div className="sss-suites-media-badge">Suite Configuration</div>
                            <Ship size={64} strokeWidth={1.2} className="sss-suites-media-icon" />
                            <span className="sss-suites-media-label">Scenic Suite Showcase</span>
                        </div>
                    </div>

                    {/* Row 2: Scenic Suite Categories */}
                    <div className="sss-suites-row" style={{ marginTop: "60px" }}>
                        <div className="sss-suites-media">
                            <div className="sss-suites-media-badge">Categories Overview</div>
                            <Home size={64} strokeWidth={1.2} className="sss-suites-media-icon" />
                            <span className="sss-suites-media-label">Space-Ship Floorplans</span>
                        </div>

                        <div className="sss-suites-content">
                            <h2 className="sss-suites-title">Scenic Suite Categories</h2>
                            <div className="sss-suites-accent" />
                            <p className="sss-suites-text">
                                Scenic offers a range of accommodation options, from more compact entry-level suites to substantially larger luxury suites. The exact names and specifications can vary by ship, so travelers should always verify the current deck plan for their sailing.
                            </p>
                            <p className="sss-suites-text" style={{ fontWeight: "600", marginBottom: "16px" }}>
                                Some of the categories you may encounter include:
                            </p>
                            <div className="sss-suites-list" style={{ marginBottom: "24px" }}>
                                {[
                                    "Standard Suites",
                                    "Balcony Suites",
                                    "Junior Suites",
                                    "Royal Suites",
                                    "Royal Panorama Suites",
                                    "Owner's Penthouse Suites",
                                ].map((item, idx) => (
                                    <div key={idx} className="sss-suites-item">
                                        <div className="sss-suites-bullet">
                                            <Check size={12} strokeWidth={2.5} />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="sss-suites-text" style={{ fontStyle: "italic", margin: 0 }}>
                                The higher categories generally provide more space and enhanced amenities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Compare the Total Suite Experience</span>
                            <h3 className="scenic-inline-cta-title-light">Which Scenic Suite Is Right for You?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you compare Sun Lounge configurations alongside space, location, and amenities.
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

            {/* ── IS A SUN LOUNGE BETTER THAN AN OUTDOOR BALCONY? ──────────── */}
            <section className="adg-section" id="sun-lounge-vs-outdoor-balcony" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Is a Sun Lounge Better Than an Outdoor Balcony?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Not necessarily. It's better to think of them as
                            different experiences — the right choice depends
                            on how you expect to use the space.
                        </p>
                    </div>

                    <div className="sfe-vs-grid">
                        {/* Choose Sun Lounge Card */}
                        <div className="sfe-vs-card">
                            <div className="sfe-vs-header">
                                <span className="sfe-vs-icon-wrap">
                                    <Home size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-vs-title">Choose a Sun Lounge If You Value:</h3>
                            </div>
                            <div className="sfe-vs-bullets">
                                {[
                                    "More flexible space",
                                    "Weather protection",
                                    "Comfortable river viewing",
                                    "A larger-feeling living area",
                                    "Using the balcony throughout the sailing season",
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-vs-bullet-item">
                                        <Check size={14} className="sfe-vs-bullet-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Choose Traditional Balcony Card */}
                        <div className="sfe-vs-card sfe-vs-card-right">
                            <div className="sfe-vs-header">
                                <span className="sfe-vs-icon-wrap" style={{ backgroundColor: "var(--navy-soft)", color: "var(--navy-light)" }}>
                                    <Wind size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-vs-title">A Traditional Balcony May Appeal More If You:</h3>
                            </div>
                            <div className="sfe-vs-bullets">
                                {[
                                    "Want completely open-air seating",
                                    "Prioritize the feeling of being outdoors",
                                    "See fresh air as your primary reason for upgrading",
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-vs-bullet-item">
                                        <X size={14} className="sfe-vs-bullet-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="sfe-vs-footer-text">
                                The right choice depends on how you expect to use the space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST SCENIC SUITES FOR RIVER VIEWS ───────────────────────── */}
            <section className="ugt-advantage-section" id="best-suites-for-views">
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Scenery First</span>
                        <h2 className="ugt-advantage-title">
                            Best Scenic Suites for River Views
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            If scenery is one of your main reasons for booking Scenic, consider these factors.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {bestViewSuites.map((item, idx) => (
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

            {/* ── IS A SCENIC SUN LOUNGE WORTH IT? ─────────────────────────── */}
            <section className="adg-section" id="worth-it" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Is a Scenic Sun Lounge Worth It?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            For many travelers, yes. But the value depends on how much you'll actually use it.
                        </p>
                    </div>

                    <div className="sfe-inclusions-grid">
                        {/* Worth It Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap">
                                    <CheckCircle size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">Worth Considering If You:</h3>
                            </div>
                            <div className="dac-reasons-bullets" style={{ marginTop: "16px" }}>
                                {[
                                    "Love watching scenery",
                                    "Spend time relaxing in your suite",
                                    "Enjoy morning coffee with a view",
                                    "Prefer privacy",
                                    "Travel during shoulder seasons",
                                    "Want more usable living space",
                                ].map((item, idx) => (
                                    <div key={idx} className="dac-reasons-bullet-item" style={{ fontSize: "14px" }}>
                                        <CheckCircle size={14} className="dac-reasons-bullet-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* May Not Need It Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap sfe-enrich-icon-style" style={{ backgroundColor: "var(--navy-soft)", color: "var(--navy-light)" }}>
                                    <X size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">You May Not Need the Upgrade If You:</h3>
                            </div>
                            <div className="dac-reasons-bullets" style={{ marginTop: "16px", marginBottom: "24px" }}>
                                {[
                                    "Spend almost all day ashore",
                                    "Rarely use your cabin",
                                    "Primarily use public lounges",
                                    "Have a budget better spent on a longer itinerary",
                                ].map((item, idx) => (
                                    <div key={idx} className="dac-reasons-bullet-item" style={{ fontSize: "14px" }}>
                                        <X size={14} className="dac-reasons-bullet-icon" style={{ color: "var(--text-muted)", opacity: 0.6 }} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="sfe-inclusions-alert">
                                <p className="sfe-inclusions-alert-text">
                                    In that case, putting the extra money toward a longer itinerary may provide more value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUN LOUNGES IN COLD WEATHER & CHRISTMAS MARKETS ──────────── */}
            <section className="adg-section" id="cold-weather-and-christmas-markets" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">

                        <h2 className="adg-h2">Sun Lounges During Cold Weather</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            How stateroom balcony design extends the comfort of shoulder-season and winter cruising.
                        </p>
                    </div>

                    <div className="sss-cold-grid">
                        {/* Panel 1: Sun Lounges During Cold Weather */}
                        <div className="sss-cold-card">
                            <div className="sss-cold-banner">
                                <span className="sss-cold-badge">Protected View</span>
                                <div className="sss-cold-banner-card">
                                    <Snowflake size={24} className="sss-cold-banner-icon" />
                                    <span className="sss-cold-banner-label">Shoulder Season Sailing</span>
                                </div>
                            </div>
                            <div className="sss-cold-body">
                                <h3 className="sss-cold-title">Sun Lounges During Cold Weather</h3>
                                <p className="sss-cold-text">
                                    This is where the design becomes particularly useful. European river cruises can experience cool mornings, rain, wind, autumn temperatures, and spring showers.
                                </p>
                                <p className="sss-cold-text">
                                    A fully exposed balcony can become less comfortable in these conditions. The Sun Lounge gives you a more protected place to enjoy the views.
                                </p>
                                <span className="sss-cold-list-title">Particularly attractive for:</span>
                                <div className="sss-cold-list">
                                    {[
                                        "Rhine cruises in spring and autumn",
                                        "Danube cruises in shoulder seasons",
                                        "Christmas Market cruises",
                                    ].map((item, idx) => (
                                        <div key={idx} className="sss-cold-item">
                                            <CheckCircle size={14} className="sss-cold-bullet" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Panel 2: Scenic Sun Lounges & Christmas Market Cruises */}
                        <div className="sss-cold-card">
                            <div className="sss-cold-banner sss-cold-banner-festive">
                                <span className="sss-cold-badge">Winter Cruise</span>
                                <div className="sss-cold-banner-card">
                                    <Gift size={24} className="sss-cold-banner-icon" />
                                    <span className="sss-cold-banner-label">Christmas Market Voyage</span>
                                </div>
                            </div>
                            <div className="sss-cold-body">
                                <h3 className="sss-cold-title">Scenic Sun Lounges &amp; Christmas Market Cruises</h3>
                                <p className="sss-cold-text">
                                    A Sun Lounge can be especially useful during winter river cruises. Christmas Market sailings can involve cold temperatures, so sitting outside for extended periods may not be appealing.
                                </p>
                                <span className="sss-cold-list-title">A protected viewing area lets you watch:</span>
                                <div className="sss-cold-list" style={{ marginBottom: "24px" }}>
                                    {[
                                        "Illuminated towns",
                                        "Riverfront Christmas decorations",
                                        "Historic architecture",
                                        "Winter scenery",
                                    ].map((item, idx) => (
                                        <div key={idx} className="sss-cold-item">
                                            <CheckCircle size={14} className="sss-cold-bullet" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="sss-cold-alert">
                                    <p className="sss-cold-alert-text">
                                        For travelers considering a Scenic Christmas Market River Cruise, balcony design is worth considering when comparing suites.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Personalized Luxury, Elevated</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Book a Sun Lounge Suite?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you compare Scenic suite categories and secure the right balcony for your trip.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Scenic Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">Luxury Suite Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC SPACE-SHIP VS OCEAN CRUISE BALCONY ────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="space-ship-vs-ocean-cruise">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Space-Ship vs <br /> Ocean Cruise Balcony</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            A river cruise balcony is less about having an
                            outdoor room and more about having a private
                            viewing platform for constantly changing
                            scenery.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Scenic Space-Ship</th>
                                    <th>Ocean Cruise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {spaceShipVsOceanRows.map((row, i) => (
                                    <tr key={i}>
                                        <td><strong>{row.feature}</strong></td>
                                        <td>{row.spaceShip}</td>
                                        <td>{row.ocean}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY YOUR SUITE LOCATION MATTERS ──────────────────────────── */}
            <section className="rlc-lc-worth-section" id="suite-location" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Why Your Suite Location Matters</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Two suites with similar specifications can
                                feel completely different depending on
                                location. Consider:
                            </p>

                            <ul className="dve-advantages-list" style={{ marginTop: "8px" }}>
                                {locationFactors.map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                        <span><strong>{item.title}:</strong> {item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={SuiteImage}
                                    alt="Scenic Space-Ship suite deck location overlooking the river"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Location Changes the Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMON BALCONY BOOKING MISTAKES ──────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Scenic Balcony Booking Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when comparing Scenic
                            suite balconies.
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

            {/* ── HOW TO CHOOSE THE RIGHT SCENIC SUITE ─────────────────────── */}
            <section className="sss-choose-section" id="how-to-choose">
                <div className="sss-choose-container">
                    <div className="sss-choose-header"> 
                        <h2 className="sss-choose-title">How to Choose the Right <br /> Scenic Suite</h2>
                        <div className="sss-choose-accent"></div>
                        <p className="sss-choose-intro">
                            A great itinerary in a comfortable suite is often better than an expensive suite on an itinerary that doesn't excite you.
                        </p>
                    </div>

                    <div className="sss-choose-grid">
                        {chooseSuiteQuestions.map((item, idx) => (
                            <div key={idx} className="sss-choose-card">
                                <span className="sss-choose-card-number">0{idx + 1}</span>
                                <div className="sss-choose-icon-box">
                                    {item.icon}
                                </div>
                                <h4 className="sss-choose-card-title">{item.title}</h4>
                                <p className="sss-choose-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SCENIC SPACE-SHIPS: BEYOND THE BALCONY ───────────────────── */}
            <section className="sss-beyond-section" id="beyond-the-balcony">
                <div className="sss-beyond-container">
                    <div className="sss-beyond-header">
                        <h2 className="sss-beyond-title">Scenic Space-Ships <br /> Beyond the Balcony</h2>
                        <div className="sss-beyond-accent"></div>
                        <p className="sss-beyond-intro">
                            The Sun Lounge is only one part of the Space-Ship experience. Other features can include:
                        </p>
                    </div>

                    <div className="sss-beyond-layout">
                        <div className="sss-beyond-left">
                            <div className="sss-beyond-features-grid">
                                {beyondBalconyFeatures.map((label, i) => (
                                    <div key={i} className="sss-beyond-feature-item">
                                        <span className="sss-beyond-feature-icon">
                                            <CheckCircle size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="sss-beyond-feature-label">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sss-beyond-right">
                            <div className="sss-beyond-callout">
                                <div className="sss-beyond-callout-inner">
                                    <Sparkles size={28} className="sss-beyond-callout-star" />
                                    <p className="sss-beyond-callout-text">
                                        The combination creates a luxury hotel atmosphere that travels with you.
                                    </p>
                                </div>
                            </div>

                            <div className="sss-beyond-media-frame">
                                <Sparkles size={48} className="sss-beyond-media-frame-icon" strokeWidth={1.2} />
                                <span className="sss-beyond-media-label">
                                    A Luxury Hotel That Travels With You
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY A LUXURY TRAVEL ADVISOR CAN HELP ─────────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why a Luxury Travel <br /> Advisor Can Help
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Scenic Cabin Categories Can Be Confusing
                            </h3>
                            <p className="Avr-planning-left-body">
                                This is particularly true when comparing
                                different ships and Sun Lounge
                                configurations. An experienced travel
                                advisor can help you compare suites side by
                                side before you commit — especially valuable
                                when you're spending significantly more for
                                a premium suite.
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
                                A travel advisor can help you compare:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Ship size={18} />, label: "Space-Ship layouts" },
                                    { icon: <Home size={18} />, label: "Sun Lounge configurations" },
                                    { icon: <MapPin size={18} />, label: "Deck locations" },
                                    { icon: <Landmark size={18} />, label: "Suite sizes" },
                                    { icon: <Sparkles size={18} />, label: "Butler Service" },
                                    { icon: <Eye size={18} />, label: "River views" },
                                    { icon: <Compass size={18} />, label: "Itinerary availability" },
                                    { icon: <BadgePercent size={18} />, label: "Current promotions" },
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
                            Space-Ships and Sun Lounge balconies before
                            booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RequestImage}
                        alt="Guest relaxing on a Scenic Sun Lounge balcony overlooking the river"
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
                                    Your Private Viewing <br /> Area on the River
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Space-Ships and Sun Lounge
                                        balconies are an important part of
                                        what makes Scenic's river cruise
                                        experience distinctive. The design
                                        gives travelers a comfortable way to
                                        enjoy the constantly changing
                                        scenery while making better use of
                                        their suite's living space.

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
                                                For travelers who spend time
                                                watching castles, vineyards,
                                                villages, and European cities
                                                pass by, a Sun Lounge can be
                                                much more than a balcony. It's
                                                effectively your private
                                                viewing area on the river.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If you're deciding between
                                                Scenic suite categories,
                                                don't simply ask "How big is
                                                the cabin?" Also ask "How do
                                                I want to experience the
                                                river?" At Trips &amp; Ships
                                                Luxury Travel, we'll help you
                                                plan every detail of your
                                                Scenic cruise.
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
                                            Start Planning Your Scenic Cruise
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
                                            "Compare Sun Lounge configurations across Space-Ships",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain Scenic promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic with other luxury lines",
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

export default ScenicSpaceShipsSunLounge;