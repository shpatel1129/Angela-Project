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
    Waves,
} from "lucide-react";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Mekong River Cruise photography
   once available. Paths assume a new /assets/ScenicMekong folder. */
// import HeroImage from "../../../assets/ScenicRiverCruises/ScenicMekong/scenic-mekong-hero.jpg";
// import SiemReapImage from "../../../assets/ScenicRiverCruises/ScenicMekong/scenic-mekong-siem-reap.jpg";
// import CabinImage from "../../../assets/ScenicRiverCruises/ScenicMekong/scenic-mekong-suite.jpg";
// import FinalImage from "../../../assets/ScenicRiverCruises/ScenicMekong/scenic-mekong-final.jpg";

import { Helmet } from "react-helmet-async";
import "../../riversidecruises/RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../riversidecruises/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../../VikingCruises/VikingCruises.css";
import "../../AzamaraDiningGuide/AzamaraDiningGuide.css";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/mekong/#webpage",
            name: "Scenic Mekong River Cruises (2026) | Vietnam, Cambodia & Luxury Cruise Guide",
            url: "https://www.tripsandships.com/scenic-river-cruises/mekong",
            description:
                "Explore Scenic Mekong River Cruises through Vietnam and Cambodia. Discover Ho Chi Minh City, Phnom Penh, the Mekong Delta, Siem Reap, temples, local culture, excursions, cabins, costs and the best time to sail.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/mekong/#article",
            headline: "Scenic Mekong River Cruises: The Complete Guide to Vietnam & Cambodia",
            description:
                "A complete guide to Scenic Mekong River Cruises, including Ho Chi Minh City, the Mekong Delta, Phnom Penh, Siem Reap, Angkor, Vietnamese and Cambodian culture and cuisine, cabins, cost, and how to choose the right sailing.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/mekong/#breadcrumb",
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
                    name: "Scenic River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic Mekong River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/mekong",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/mekong/#itemlist",
            name: "Scenic Mekong River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Mekong River Cruise?" },
                { "@type": "ListItem", position: 3, name: "Where Do Scenic Mekong Cruises Go?" },
                { "@type": "ListItem", position: 4, name: "Best Scenic Mekong River Cruise Itineraries" },
                { "@type": "ListItem", position: 5, name: "Best Time for a Scenic Mekong River Cruise" },
                { "@type": "ListItem", position: 6, name: "Scenic Mekong Excursions" },
                { "@type": "ListItem", position: 7, name: "Scenic Mekong Cruise for History Lovers" },
                { "@type": "ListItem", position: 8, name: "Cabins & Suites" },
                { "@type": "ListItem", position: 9, name: "Food & Culinary Heritage" },
                { "@type": "ListItem", position: 10, name: "Couples & Families" },
                { "@type": "ListItem", position: 11, name: "Cost & What's Included" },
                { "@type": "ListItem", position: 12, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/mekong/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Does Scenic offer Mekong River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers luxury Mekong journeys combining river cruising with destination experiences in Vietnam and Cambodia.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What countries does a Scenic Mekong River Cruise visit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary, Scenic Mekong journeys can include Vietnam and Cambodia.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Mekong cruise visit Ho Chi Minh City?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ho Chi Minh City is an important gateway for Mekong itineraries, although the exact itinerary and length of stay vary by departure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Mekong cruise visit Phnom Penh?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Selected Vietnam-and-Cambodia itineraries include Phnom Penh. Always check the exact sailing itinerary before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a Scenic Mekong cruise include Siem Reap?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Some longer Vietnam-and-Cambodia journeys incorporate Siem Reap and Angkor as part of the broader land program. Confirm the specific itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Mekong River Cruise good for first-time travelers to Vietnam and Cambodia?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A coordinated river-and-land itinerary can simplify transportation while providing guided cultural experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best time for a Scenic Mekong River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The drier months are often attractive for sightseeing, while the wetter season can offer lush landscapes and a different atmosphere. Check regional weather conditions for your specific travel dates.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Mekong cruise good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Families and multigenerational groups can enjoy temples, markets, food, cultural experiences, and guided excursions. Activity levels and climate should be considered.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Mekong cruise good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The combination of luxury accommodations, cultural experiences, cuisine, river scenery, and Cambodia's historic sites makes it a strong choice for couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should I pack for a Scenic Mekong River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pack lightweight clothing, comfortable walking shoes, sun protection, a rain layer, modest clothing for temples, and clothing suitable for warm and humid conditions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included on a Scenic Mekong River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Destination experiences and excursions are an important part of Scenic's offering, but exact inclusions vary by itinerary. Review the individual sailing before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does a Scenic Mekong River Cruise cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pricing depends on the sailing, itinerary, suite, availability, and land arrangements. Compare the complete journey rather than only the cruise fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive early for a Scenic Mekong cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. International travelers should consider arriving at least one day early, and potentially two nights early, depending on the itinerary and flight schedule.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Mekong River Cruise physically demanding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Some excursions can involve walking, stairs, heat, humidity, or uneven surfaces. Travelers should review the activity level of each day's excursions before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a Scenic Mekong River Cruise worth it?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers interested in Vietnam, Cambodia, culture, food, history, and luxury travel, the Mekong can offer exceptional value as a comprehensive Southeast Asia experience.",
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
            q: "Does Scenic offer Mekong River Cruises?",
            a: "Yes. Scenic offers luxury Mekong journeys combining river cruising with destination experiences in Vietnam and Cambodia.",
        },
        {
            q: "What countries does a Scenic Mekong River Cruise visit?",
            a: "Depending on the itinerary, Scenic Mekong journeys can include Vietnam and Cambodia.",
        },
        {
            q: "Does a Scenic Mekong cruise visit Ho Chi Minh City?",
            a: "Ho Chi Minh City is an important gateway for Mekong itineraries, although the exact itinerary and length of stay vary by departure.",
        },
        {
            q: "Does a Scenic Mekong cruise visit Phnom Penh?",
            a: "Selected Vietnam-and-Cambodia itineraries include Phnom Penh. Always check the exact sailing itinerary before booking.",
        },
        {
            q: "Does a Scenic Mekong cruise include Siem Reap?",
            a: "Some longer Vietnam-and-Cambodia journeys incorporate Siem Reap and Angkor as part of the broader land program. Confirm the specific itinerary.",
        },
        {
            q: "Is a Scenic Mekong River Cruise good for first-time travelers to Vietnam and Cambodia?",
            a: "Yes. A coordinated river-and-land itinerary can simplify transportation while providing guided cultural experiences.",
        },
        {
            q: "What is the best time for a Scenic Mekong River Cruise?",
            a: "The drier months are often attractive for sightseeing, while the wetter season can offer lush landscapes and a different atmosphere. Check regional weather conditions for your specific travel dates.",
        },
        {
            q: "Is a Scenic Mekong cruise good for families?",
            a: "Yes. Families and multigenerational groups can enjoy temples, markets, food, cultural experiences, and guided excursions. Activity levels and climate should be considered.",
        },
        {
            q: "Is a Scenic Mekong cruise good for couples?",
            a: "Yes. The combination of luxury accommodations, cultural experiences, cuisine, river scenery, and Cambodia's historic sites makes it a strong choice for couples.",
        },
        {
            q: "What should I pack for a Scenic Mekong River Cruise?",
            a: "Pack lightweight clothing, comfortable walking shoes, sun protection, a rain layer, modest clothing for temples, and clothing suitable for warm and humid conditions.",
        },
        {
            q: "Are excursions included on a Scenic Mekong River Cruise?",
            a: "Destination experiences and excursions are an important part of Scenic's offering, but exact inclusions vary by itinerary. Review the individual sailing before booking.",
        },
        {
            q: "How much does a Scenic Mekong River Cruise cost?",
            a: "Pricing depends on the sailing, itinerary, suite, availability, and land arrangements. Compare the complete journey rather than only the cruise fare.",
        },
        {
            q: "Should I arrive early for a Scenic Mekong cruise?",
            a: "Yes. International travelers should consider arriving at least one day early, and potentially two nights early, depending on the itinerary and flight schedule.",
        },
        {
            q: "Is the Mekong River Cruise physically demanding?",
            a: "Some excursions can involve walking, stairs, heat, humidity, or uneven surfaces. Travelers should review the activity level of each day's excursions before booking.",
        },
        {
            q: "Is a Scenic Mekong River Cruise worth it?",
            a: "For travelers interested in Vietnam, Cambodia, culture, food, history, and luxury travel, the Mekong can offer exceptional value as a comprehensive Southeast Asia experience.",
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
    "First-time Vietnam and Cambodia travelers",
    "Couples",
    "Luxury travelers",
    "Cultural travelers",
    "Food lovers",
    "History enthusiasts",
    "Photography travelers",
    "Multigenerational families",
];

/* ── Why Choose a Scenic Mekong Cruise — Variety Data ────────────────── */
const douroVarietyFeatures = [
    "Southeast Asian culture",
    "Luxury river travel",
    "Vietnam",
    "Cambodia",
    "Temples & history",
    "Local cuisine",
    "Mekong Delta landscapes",
    "Rural communities",
];

/* ── Where Do Scenic Mekong Cruises Go — Destinations Data ─────────── */
const douroDestinations = [
    { key: "hcmc", title: "Ho Chi Minh City", items: ["Vietnamese cuisine & French colonial architecture", "Markets, museums & historic landmarks", "An important gateway for Mekong journeys"] },
    { key: "mekong-delta", title: "The Mekong Delta", items: ["Tropical vegetation & waterways", "Agriculture, boats & riverside communities", "Local markets & a more intimate view of Vietnamese life"] },
    { key: "delta-villages", title: "Mekong Delta Villages", items: ["Local markets & traditional crafts", "Small waterways & community traditions", "Communities away from the major tourist centers"] },
    { key: "phnom-penh", title: "Phnom Penh", items: ["Cambodian history & architecture", "Food, markets & museums", "A key transition into the broader Cambodian portion of the itinerary"] },
    { key: "siem-reap", title: "Siem Reap & Angkor", items: ["The temples of Angkor", "A defining highlight of a Vietnam-and-Cambodia journey", "An extraordinary contrast to the river experience"] },
];

/* ── Best Mekong Itineraries — Tabbed Data ──────────────────────────── */
const douroItineraries = [
    {
        id: "vietnam-cambodia-combo",
        title: "Vietnam & Cambodia Combination",
        badge: "Best Overall",
        icon: Compass,
        desc: "For first-time travelers, a journey combining Vietnam and Cambodia is usually the strongest introduction. It allows you to experience both countries rather than focusing exclusively on the river.",
        columns: [
            {
                label: "Best for:",
                items: ["First-time Southeast Asia travelers", "Couples", "Luxury travelers", "Cultural travelers"],
            },
        ],
    },
    {
        id: "delta-focused",
        title: "Mekong Delta-Focused Experience",
        badge: "Delta Focus",
        icon: Waves,
        desc: "Travelers particularly interested in Vietnam may prefer an itinerary with greater emphasis on the Mekong Delta.",
        columns: [
            {
                label: "Best for:",
                items: ["Vietnam enthusiasts", "River travelers", "Rural culture enthusiasts", "Photographers"],
            },
        ],
    },
    {
        id: "siem-reap-angkor",
        title: "Mekong + Siem Reap & Angkor",
        badge: "Cultural Heritage",
        icon: Landmark,
        desc: "For many travelers, this is the most compelling combination. You experience the river and then continue into Cambodia's ancient cultural heritage.",
        columns: [
            {
                label: "Best for:",
                items: ["History travelers", "Architecture enthusiasts", "Photographers", "First-time Cambodia travelers"],
            },
        ],
    },
];

/* ── Best Time to Cruise — Season Data ─────────────────────────────── */
const douroSeasons = [
    {
        key: "dry-season",
        icon: <Sun size={22} strokeWidth={1.6} />,
        eyebrow: "Dry Season",
        title: "Dry Season",
        intro: "The drier months can provide attractive conditions for sightseeing. Benefits may include:",
        items: [
            "More predictable weather",
            "Comfortable sightseeing conditions",
            "Good photography opportunities"
        ],
        outro: "Strong cultural experiences and comfortable excursion conditions make the dry season a popular choice.",
        accent: "adg-accent-teal"
    },
    {
        key: "wet-season",
        icon: <Leaf size={22} strokeWidth={1.6} />,
        eyebrow: "Wet Season",
        title: "Wet Season",
        intro: "The wet season can bring heavier rainfall and higher humidity, but the landscape becomes particularly lush. Travelers may appreciate:",
        items: [
            "Green landscapes",
            "Higher water levels",
            "Fewer tourists at some destinations"
        ],
        outro: "Always check the specific sailing dates and current regional conditions before booking.",
        accent: "adg-accent-navy"
    }
];

/* ── Scenic Mekong Excursions Data ─────────────────────────────────── */
const douroExcursions = [
    { icon: <Palette size={28} strokeWidth={1.5} />, title: "Culture", desc: "Meet local communities and learn about regional traditions." },
    { icon: <Landmark size={28} strokeWidth={1.5} />, title: "History", desc: "Explore historic sites and museums." },
    { icon: <Utensils size={28} strokeWidth={1.5} />, title: "Food", desc: "Experience Vietnamese and Cambodian cuisine." },
    { icon: <Building2 size={28} strokeWidth={1.5} />, title: "Temples", desc: "Visit Buddhist and historic religious sites." },
    { icon: <Waves size={28} strokeWidth={1.5} />, title: "Villages", desc: "Explore communities along the Mekong and surrounding waterways." },
    { icon: <Mountain size={28} strokeWidth={1.5} />, title: "Active Experiences", desc: "Walking and other activities may be available depending on the itinerary." },
];

/* ── Mekong Delta Landscape Sightings Data ──────────────────────── */
const landscapeSightings = ["Tropical vegetation", "Waterways & boats", "Riverside communities", "Local markets"];

/* ── Cost Factors Data ─────────────────────────────────────────────── */
const costFactors = [
    "Sailing date",
    "Itinerary",
    "Cruise length",
    "Suite category",
    "Availability",
    "Included land arrangements",
    "Airfare",
    "Hotels & transfers",
];

/* ── What's Included Data ──────────────────────────────────────────── */
const whatsIncluded = [
    "Luxury accommodation",
    "Meals",
    "Selected beverages",
    "Wi-Fi",
    "Guided destination experiences",
    "Excursions",
    "Entertainment",
    "Personalized service",
];

/* ── Scenic Mekong vs Other Luxury River Cruises — Comparison Table ── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "Luxury, personalized service and curated destination experiences" },
    { key: "riverside", scenic: "Riverside", ocean: "Spacious luxury accommodations" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Destination experiences and active travel" },
    { key: "viking", scenic: "Viking", ocean: "Broad international river cruise network" },
    { key: "avalon", scenic: "Avalon", ocean: "Spacious cabins and open-air balcony concepts" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique design and distinctive interiors" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Choosing based only on the ship",
    "Ignoring the land itinerary",
    "Not allowing enough time in Ho Chi Minh City or Siem Reap",
    "Underestimating the climate",
    "Packing only for the ship",
    "Not checking excursion activity levels",
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicMekongRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("vietnam-cambodia-combo");

    const currentItinerary =
        douroItineraries.find((f) => f.id === activeItinerary) || douroItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Mekong River Cruises | Vietnam, Cambodia & Luxury Cruise Guide</title>
                <meta name="title" content="Scenic Mekong River Cruises | Vietnam, Cambodia & Luxury Travel Guide" />
                <meta
                    name="description"
                    content="Explore Scenic Mekong River Cruises through Vietnam and Cambodia. Discover Ho Chi Minh City, Phnom Penh, the Mekong Delta, Siem Reap, temples, local culture, excursions, cabins, costs and the best time to sail."
                />
                <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/mekong" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Mekong <br /> River Cruises</h1>

                    <p>
                        A Scenic Mekong River Cruise offers a very
                        different experience from Scenic's European river
                        journeys. Instead of vineyards, medieval castles,
                        and European capitals, the Mekong introduces
                        travelers to Vietnamese and Cambodian culture,
                        floating communities, temples, markets, and some
                        of Southeast Asia's most fascinating destinations.
                    </p>

                    {readMore && (
                        <p>
                            A Mekong itinerary can combine a luxury river
                            cruise with land experiences in Vietnam,
                            Cambodia, Ho Chi Minh City, the Mekong Delta,
                            Phnom Penh, Cambodian villages, Siem Reap, and
                            Angkor. For travelers who want more than a
                            conventional Southeast Asia tour, the Mekong
                            offers a way to slow down and experience the
                            region from the river. The journey is as much
                            about people and culture as it is about
                            destinations.
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
                            Start Planning Your Scenic Mekong Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is a Scenic Mekong River Cruise Worth It? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Yes — especially for travelers who want a
                            luxury introduction to Vietnam and Cambodia
                            while experiencing destinations and communities
                            that are difficult to appreciate on a
                            conventional city-based itinerary.
                        </p>

                        <p className="rlc-qa-intro">The
                            strongest reasons to choose a Mekong cruise
                            include Southeast Asian culture, luxury river
                            travel, Vietnam, Cambodia, temples and history,
                            local cuisine, Mekong Delta landscapes, and
                            rural communities. It's especially well suited
                            to:</p>

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
                            Mekong highlights include Ho Chi Minh City, the
                            Mekong Delta, Phnom Penh, Cambodian villages,
                            Siem Reap, Angkor, and Vietnamese and Cambodian
                            cuisine.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC MEKONG RIVER CRUISE? ─────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-choose-mekong">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose a Scenic Mekong River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The Mekong is fundamentally different from
                            Europe's major rivers. A European river cruise
                            often focuses on historic cities and monuments.
                            The Mekong experience is much more about
                            culture, people, landscapes, food, history, and
                            everyday life. The river provides access to
                            rural areas and communities that can be
                            difficult to experience when traveling only
                            between major cities:
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
                                        Instead of constantly changing
                                        hotels, travelers can enjoy a
                                        luxury ship while exploring
                                        different parts of Vietnam and
                                        Cambodia.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '350px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        One Ship, Through Vietnam &amp; Cambodia
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHERE DO SCENIC MEKONG CRUISES GO? ────────────────────── */}
            <section
                className="adg-section"
                id="mekong-destinations"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Where Do Scenic Mekong River Cruises Go?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Exact destinations depend on the itinerary and
                            sailing, but a Scenic Mekong journey can
                            connect experiences and destinations around:
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
                                        <span className="adg-card-eyebrow-label">Mekong Destination</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Mekong Itinerary Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic Mekong sailings and find the perfect fit for your trip.
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


            {/* ── BEST TIME FOR A SCENIC MEKONG RIVER CRUISE ───────────────── */}
            <section className="adg-section" id="best-time-to-cruise" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Best Time for a Scenic Mekong River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            The Mekong has a tropical climate, so timing is important. Always check the specific sailing dates and current regional conditions before booking.
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

            {/* ── BEST SCENIC MEKONG RIVER CRUISE ITINERARIES ──────────────── */}
            <section className="luc-destinations-section" id="best-itineraries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Mekong River Cruise Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            There isn't one perfect Mekong itinerary. The
                            best option depends on whether your priority is
                            Vietnam, Cambodia, culture, food, history,
                            Angkor, river cruising, or a longer land
                            experience.
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

            {/* ── FIRST-TIME TRAVELERS ──────────────────────── */}
            <section className="sfe-firsttime-section" id="first-time-cruisers">
                <div className="sfe-firsttime-container">

                    <div className="sfe-firsttime-header">
                        <h2 className="sfe-firsttime-title">Scenic Mekong Cruise for <br /> First-Time Travelers</h2>

                        <p className="sfe-firsttime-lead">
                            A Mekong river cruise can be an excellent introduction to Vietnam and Cambodia because it combines multiple forms of travel into one journey.
                        </p>

                        <p className="sfe-firsttime-desc">
                            Instead of arranging hotels, private transfers, domestic flights, excursions, and local guides separately, you can combine much of the experience into one coordinated itinerary.
                        </p>
                    </div>

                    <h4 className="sfe-firsttime-progression-title">
                        The trip can feel like a progression:
                    </h4>

                    <div className="sfe-firsttime-progression-grid">

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">01</div>
                            <h3 className="sfe-firsttime-step-title">Ho Chi Minh City</h3>
                            <span className="sfe-firsttime-step-subtitle">City & Vietnamese Culture</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">02</div>
                            <h3 className="sfe-firsttime-step-title">Mekong Delta</h3>
                            <span className="sfe-firsttime-step-subtitle">Villages & River Life</span>
                        </div>

                        <div className="sfe-firsttime-step-card">
                            <div className="sfe-firsttime-step-number">03</div>
                            <h3 className="sfe-firsttime-step-title">Phnom Penh &amp; Siem Reap</h3>
                            <span className="sfe-firsttime-step-subtitle">Cambodian History & Angkor</span>
                        </div>

                    </div>

                    <div className="sfe-firsttime-footer-box">
                        <p className="sfe-firsttime-callout-text">
                            This can be particularly valuable for first-time travelers.
                        </p>
                        <p className="sfe-firsttime-conclusion">
                            You want Southeast Asia to feel comfortable and seamless without losing its cultural character.
                        </p>
                    </div>

                </div>
            </section>


            {/* ── SCENIC MEKONG EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="mekong-excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">
                            Scenic Mekong River Cruise Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Excursions are arguably the most important part
                            of a Mekong journey. Scenic's destination
                            experience philosophy is particularly relevant
                            here because the river itself is only one part
                            of the journey.
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
                            <h3 className="scenic-inline-cta-title-light">First Time in Vietnam &amp; Cambodia?</h3>
                            <p className="scenic-inline-cta-text-light">
                                The Mekong gives you Ho Chi Minh City, the Mekong Delta, Phnom Penh, and Siem Reap — all in one trip. You can think of the journey simply as Ho Chi Minh City → Mekong Delta → Cambodia → Angkor, rather than a complicated multi-city itinerary.
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

            {/* ── CABINS & SUITES ──────────────────────────────────── */}
            <section className="sfe-cabins-section" id="cabins-suites">
                <div className="sfe-cabins-container">
                    <div className="sfe-cabins-grid">

                        {/* Card 1: Cabins */}
                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Mekong River Cruise Cabins</span>
                            </div>

                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Mekong River Cruise Cabins &amp; Suites</h3>
                                <p className="sfe-cabins-text">
                                    Your cabin remains important even though the destination is the primary attraction. Consider:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Suite size & deck",
                                        "River views",
                                        "Balcony or outdoor space",
                                        "Storage",
                                        "Location",
                                        "Service level"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro">
                                    The river is constantly changing, so having a comfortable place to watch the scenery can enhance the experience.
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

                        {/* Card 2: Dining */}
                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Utensils size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Scenic Mekong Cruise Dining</span>
                            </div>

                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Mekong Cruise Dining</h3>
                                <p className="sfe-cabins-text">
                                    Dining is an important part of the overall experience. On a Vietnam-and-Cambodia itinerary, travelers can expect the culinary experience to reflect the region while also offering familiar international options, particularly when:
                                </p>

                                <ul className="sfe-cabins-list">
                                    {[
                                        "Sampling regional Vietnamese dishes",
                                        "Enjoying Cambodian specialties onboard",
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
                                    If food is a major priority, add independent restaurant experiences in Ho Chi Minh City, Phnom Penh, or Siem Reap.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* ── FOOD & CULTURAL HERITAGE ───────────────────────────── */}
            <section className="sfe-dining-noimg-section" id="food-cultural-heritage">
                <div className="sfe-dining-noimg-container">
                    <div className="sfe-dining-noimg-grid">

                        {/* Card 1: Food */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Utensils size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Mekong Cruise for Food Lovers</h3>
                            </div>

                            <p className="sfe-dining-noimg-text" style={{ fontWeight: 600, marginBottom: '8px' }}>
                                Vietnam and Cambodia are exceptional destinations for travelers who enjoy food.
                            </p>

                            <p className="sfe-dining-noimg-text">
                                A Mekong journey can introduce you to a wide range of regional cuisine.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can experience:</span>
                            <ul className="sfe-dining-noimg-list" style={{ marginBottom: '20px' }}>
                                {[
                                    "Vietnamese noodles",
                                    "Regional dishes",
                                    "Fresh herbs",
                                    "Rice-based cuisine",
                                    "Tropical fruit",
                                    "Cambodian specialties"
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
                                The best way to approach the culinary experience is to treat local food as part of the destination rather than simply something eaten onboard.
                            </p>
                        </div>

                        {/* Card 2: History & Cultural Heritage */}
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Landmark size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic Mekong Cruise for History Lovers</h3>
                            </div>

                            <p className="sfe-dining-noimg-text">
                                The Mekong region contains layers of history spanning centuries. Angkor is an obvious highlight, but the smaller cultural encounters along the river can be equally valuable.
                            </p>

                            <span className="sfe-dining-noimg-list-title">Travelers can explore:</span>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Ancient civilizations",
                                    "Buddhist traditions",
                                    "Colonial history",
                                    "Modern Vietnamese & Cambodian history",
                                    "Ancient Khmer architecture"
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
                                For history-focused travelers, consider adding extra nights in Siem Reap to explore Angkor without rushing.
                            </p>

                            <div className="sfe-dining-noimg-links">
                                <span className="sfe-dining-noimg-links-label">Related Guide:</span>
                                <div className="sfe-dining-noimg-links-grid">
                                    <Link to="/scenic-river-cruises/mekong" className="sfe-dining-noimg-link-item">
                                        <span>Scenic Mekong River Cruises: The Complete Guide</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── PHOTOGRAPHY EXPERIENCE ──────────────────────── */}
            <section className="sfe-wine-section" id="photography-experience">
                <div className="sfe-wine-container">
                    <div className="sfe-wine-grid">

                        <div className="sfe-wine-content">

                            <h2 className="sfe-wine-title">Scenic Mekong Cruise for Photography</h2>

                            <p className="sfe-wine-lead">
                                The Mekong is particularly rewarding for photographers.
                            </p>

                            <p className="sfe-wine-desc">
                                Early morning and late afternoon can provide especially atmospheric conditions.
                            </p>

                            <div className="sfe-wine-callout">
                                River life, markets, and temples offer some of the most compelling subjects along the way.
                            </div>

                            <h4 className="sfe-wine-context-title">
                                Potential subjects include:
                            </h4>

                            <div className="sfe-wine-timeline">
                                <span className="sfe-wine-timeline-node">river life</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">markets</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">villages</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">temples</span>
                                <span className="sfe-wine-timeline-arrow">→</span>
                                <span className="sfe-wine-timeline-node">landscapes</span>
                            </div>

                            <p className="sfe-wine-conclusion">
                                That makes the Mekong one of the most photogenic river journeys in Southeast Asia.
                            </p>
                        </div>

                        <div className="sfe-wine-media">
                            <Camera size={72} className="sfe-wine-media-icon" strokeWidth={1} />
                            <span className="sfe-wine-media-label">Mekong Photography</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── PACKING FOR THE MEKONG ──────────────────────── */}
            <section className="sfe-lounge-section" id="packing-for-the-mekong">
                <div className="sfe-lounge-container">
                    <div className="sfe-lounge-grid">

                        <div className="sfe-lounge-media">
                            <Compass size={72} className="sfe-lounge-media-icon" strokeWidth={1} />

                        </div>

                        <div className="sfe-lounge-content">

                            <h2 className="sfe-lounge-title">What Should You Pack for a Scenic Mekong River Cruise?</h2>

                            <p className="sfe-lounge-lead">
                                A Mekong journey requires a slightly different packing strategy from a European river cruise.
                            </p>

                            <h4 className="sfe-lounge-list-title">Consider packing:</h4>

                            <div className="sfe-lounge-checklist">
                                {[
                                    "Lightweight, breathable clothing",
                                    "Comfortable walking shoes",
                                    "Sun & insect protection",
                                    "Modest clothing for temples",
                                    "A lightweight rain layer",
                                    "A small day bag"
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-lounge-item">
                                        <CheckCircle size={18} strokeWidth={2.5} className="sfe-lounge-icon" />
                                        <span className="sfe-lounge-text">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="sfe-lounge-desc">
                                for warm, humid conditions and temple visits.
                            </p>

                            <p className="sfe-lounge-outro">
                                Check the specific dress guidance for temples and religious sites on your itinerary before you go.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAMILIES & MULTIGENERATIONAL GROUPS ──────────────────────── */}
            <section className="sfe-family-section" id="families-multigenerational">
                <div className="sfe-family-container">
                    <div className="sfe-family-header">
                        <h2 className="sfe-family-title">Scenic Mekong Cruise for Families &amp; Multigenerational Groups</h2>
                        <div className="sfe-family-accent"></div>
                        <p className="sfe-family-intro">
                            A Mekong itinerary can be a strong choice for families traveling across generations — select excursions according to activity level and climate.
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
                                    {["Coordinated transportation", "Luxury accommodations", "Guided experiences", "A single organized itinerary"].map((item, i) => (
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
                                    {["Culture", "Food", "History", "Luxury service"].map((item, i) => (
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
                                    {["Temples", "Markets", "Boats", "Photography"].map((item, i) => (
                                        <li key={i} className="sfe-family-gen-badge">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: image placeholder + quote */}
                        <div className="sfe-family-visual">
                            <div className="sfe-family-img-placeholder">
                                <Ship size={56} className="sfe-family-img-icon" strokeWidth={1.2} />
                                <span className="sfe-family-img-label">Mekong Family Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Ship size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    When traveling with multiple generations, select excursions according to activity level and climate rather than trying to make everyone participate in every experience.
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
                                <span className="sfe-family-img-label">Mekong Couples Cruise</span>
                            </div>

                            <div className="sfe-family-quote">
                                <Heart size={28} className="sfe-family-quote-icon" strokeWidth={1.2} />
                                <p className="sfe-family-quote-text">
                                    The Mekong works exceptionally well for couples who want something more culturally immersive than a traditional beach vacation.
                                </p>
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="sfe-family-generations">
                            <div className="sfe-family-header" style={{ textAlign: 'left', margin: '0 0 32px 0', maxWidth: '100%' }}>
                                <h2 className="sfe-family-title">Scenic Mekong Cruise for Couples</h2>
                                <div className="sfe-family-accent" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="sfe-family-intro">
                                    The Mekong is particularly well suited to couples seeking a more culturally immersive journey.
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
                                        "Luxury accommodations",
                                        "River scenery",
                                        "Vietnamese cuisine",
                                        "Cambodian culture",
                                        "Temple visits",
                                        "Private experiences",
                                        "Siem Reap"
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

            {/* ── HOW MUCH DOES A SCENIC MEKONG CRUISE COST? ───────────────── */}
            <section className="sfe-cost-section" id="mekong-cost" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="sfe-cost-container">
                    <div className="sfe-cost-header">
                        <h2 className="sfe-cost-title">How Much Does a Scenic Mekong River Cruise Cost?</h2>
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
                                        <h3 className="sfe-cost-callout-title">Mekong journeys can include more land-based components than a typical European river cruise.</h3>
                                    </div>
                                    <div className="sfe-cost-divider" />
                                    <p className="sfe-cost-callout-text">
                                        Compare the entire journey, not just the cruise fare — including hotels, airfare, transfers, and promotions.
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
                            Read our guides to Scenic cabin categories and the best cabins to choose.
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

            {/* ── WHAT IS INCLUDED ON A SCENIC MEKONG CRUISE? ──────────────── */}
            <section className="sfe-inc-section" id="whats-included">
                <div className="sfe-inc-container">
                    <div className="sfe-inc-header">
                        <h2 className="sfe-inc-title">What Is Included on a Scenic Mekong River Cruise?</h2>
                        <div className="sfe-inc-accent"></div>
                        <p className="sfe-inc-intro">
                            Inclusions vary by itinerary, but a Scenic journey can include:
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
                                        Some Mekong journeys also incorporate hotels and land arrangements — always check the exact itinerary and booking terms.
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

            {/* ── SCENIC MEKONG VS OTHER LUXURY RIVER CRUISES ──────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="mekong-cruise-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Mekong vs <br /> Other Luxury River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            For the Mekong specifically, compare the land
                            program, hotels, guides, excursions, ship,
                            suite, dining, and cultural experiences rather
                            than simply comparing starting prices.
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

export default ScenicMekongRiverCruises;