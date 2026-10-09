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
    Sparkles,
    Ship,
    Landmark,
    Music,
    Church,
    Waves,
    Grape,
    Wine,
    Snowflake,
    Flower2,
    Sun,
    Leaf,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Globe,
    Utensils,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Rhône Cruises photography once
   available. Paths assume a new /assets/RiversideRhoneCruises folder. */
// import HeroImage from "../../assets/RiversideRhoneCruises/riverside-rhone-provence-hero.jpg";
// import DebussyImage from "../../assets/RiversideRhoneCruises/riverside-debussy-rhone.jpg";
// import LyonImage from "../../assets/RiversideRhoneCruises/riverside-rhone-lyon.jpg";
// import AvignonImage from "../../assets/RiversideRhoneCruises/riverside-rhone-avignon.jpg";
// import ArlesImage from "../../assets/RiversideRhoneCruises/riverside-rhone-arles.jpg";
// import ViviersImage from "../../assets/RiversideRhoneCruises/riverside-rhone-viviers.jpg";
// import TournonImage from "../../assets/RiversideRhoneCruises/riverside-rhone-tournon.jpg";
// import SuiteImage from "../../assets/RiversideRhoneCruises/riverside-rhone-suite.jpg";
// import DiningImage from "../../assets/RiversideRhoneCruises/riverside-rhone-dining.jpg";
// import WineImage from "../../assets/RiversideRhoneCruises/riverside-rhone-vineyard.jpg";
// import ExcursionImage from "../../assets/RiversideRhoneCruises/riverside-rhone-excursion.jpg";
// import WorthItImage from "../../assets/RiversideRhoneCruises/riverside-rhone-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideRhoneCruises/riverside-rhone-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../pages/RiversideLuxuryCruises/RiversideLuxuryCruises.css";

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
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#webpage",
            name: "Riverside Rhône Cruises | Luxury Rhône River Cruises in France",
            url: "https://www.tripsandships.com/riverside-rhone-cruises",
            description:
                "Explore Riverside Rhône Cruises through Lyon, Avignon, Arles, and Provence. Discover gourmet cuisine, world-class wines, luxury suites, and boutique river cruising in southern France.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#article",
            headline: "Riverside Rhône Cruises | Luxury River Cruises Through Provence",
            description:
                "A complete guide to Riverside Rhône Cruises, covering destinations, the Riverside Debussy, accommodations, dining, wine experiences, and whether a Riverside Rhône Cruise is worth booking.",
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
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#breadcrumb",
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
                    name: "River Cruise Guides",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises-ultimate-guide",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Riverside Rhône Cruises",
                    item: "https://www.tripsandships.com/riverside-rhone-cruises",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#touristtrip",
            name: "Riverside Rhône Cruise",
            touristType: "Food and wine lovers, couples, luxury travelers",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Lyon, France" },
                    { "@type": "ListItem", position: 2, name: "Avignon, France" },
                    { "@type": "ListItem", position: 3, name: "Arles, France" },
                    { "@type": "ListItem", position: 4, name: "Viviers, France" },
                    { "@type": "ListItem", position: 5, name: "Tournon-sur-Rhône, France" },
                ],
            },
        },
        {
            "@type": "Cruise",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#cruise",
            name: "Riverside Rhône Cruise",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            departurePort: {
                "@type": "BoatTerminal",
                name: "Lyon, France",
            },
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Lyon, France" },
                    { "@type": "ListItem", position: 2, name: "Tournon-sur-Rhône, France" },
                    { "@type": "ListItem", position: 3, name: "Viviers, France" },
                    { "@type": "ListItem", position: 4, name: "Avignon, France" },
                    { "@type": "ListItem", position: 5, name: "Arles, France" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#destinations",
            name: "Riverside Rhône Cruise Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Lyon, France" },
                { "@type": "Place", position: 2, name: "Avignon, France" },
                { "@type": "Place", position: 3, name: "Arles, France" },
                { "@type": "Place", position: 4, name: "Viviers, France" },
                { "@type": "Place", position: 5, name: "Tournon-sur-Rhône, France" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#service",
            serviceType: "Luxury Rhône River Cruise Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Rhône itineraries and choose the best sailing, ship, and suite for their trip.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#itemlist",
            name: "What This Riverside Rhône Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Cruise the Rhône River?" },
                { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 4, name: "Destinations Along the Rhône" },
                { "@type": "ListItem", position: 5, name: "Riverside Debussy" },
                { "@type": "ListItem", position: 6, name: "Luxury Accommodations" },
                { "@type": "ListItem", position: 7, name: "Gourmet Dining" },
                { "@type": "ListItem", position: 8, name: "Wine Experiences" },
                { "@type": "ListItem", position: 9, name: "Included Shore Excursions" },
                { "@type": "ListItem", position: 10, name: "Life Onboard" },
                { "@type": "ListItem", position: 11, name: "Best Time to Cruise the Rhône" },
                { "@type": "ListItem", position: 12, name: "Is a Riverside Rhône Cruise Worth It?" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Riverside ship sails the Rhône?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Debussy is commonly featured on Rhône River itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cities are included on a Rhône cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Popular ports include Lyon, Avignon, Arles, Viviers, and Tournon-sur-Rhône.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are wine tastings included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many itineraries include wine-focused experiences, while premium tastings may be available as optional excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are meals included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Gourmet breakfast, lunch, and dinner are typically included throughout the voyage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Wi-Fi included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary Wi-Fi is typically available onboard.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best season for a Rhône cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spring, summer, and fall are all excellent, with lavender blooming in early summer and wine harvest taking place in the fall.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Rhône good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, particularly for travelers interested in French culture, cuisine, and wine.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. The intimate atmosphere and elegant accommodations make it one of the most romantic river cruise experiences in Europe.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you compare itineraries, recommend the best suite, and coordinate every aspect of your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Riverside Debussy?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The dress code onboard is elegant casual during the day and smart casual in the evening. There are no formal dress nights required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included on a Riverside Rhône cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, all onboard gratuities for the ship's crew and the guides during included shore excursions are included in your cruise fare.",
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
            q: "Which Riverside ship sails the Rhône?",
            a: "Riverside Debussy is commonly featured on Rhône River itineraries.",
        },
        {
            q: "Which cities are included on a Rhône cruise?",
            a: "Popular ports include Lyon, Avignon, Arles, Viviers, and Tournon-sur-Rhône.",
        },
        {
            q: "Are wine tastings included?",
            a: "Many itineraries include wine-focused experiences, while premium tastings may be available as optional excursions.",
        },
        {
            q: "Are meals included?",
            a: "Yes. Gourmet breakfast, lunch, and dinner are typically included throughout the voyage.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Yes. Complimentary Wi-Fi is typically available onboard.",
        },
        {
            q: "What is the best season for a Rhône cruise?",
            a: "Spring, summer, and fall are all excellent, with lavender blooming in early summer and wine harvest taking place in the fall.",
        },
        {
            q: "Is the Rhône good for first-time river cruisers?",
            a: "Yes, particularly for travelers interested in French culture, cuisine, and wine.",
        },
        {
            q: "Is Riverside suitable for couples?",
            a: "Absolutely. The intimate atmosphere and elegant accommodations make it one of the most romantic river cruise experiences in Europe.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can help you compare itineraries, recommend the best suite, and coordinate every aspect of your vacation.",
        },
        {
            q: "What is the dress code onboard Riverside Debussy?",
            a: "The dress code onboard is elegant casual during the day and smart casual in the evening. There are no formal dress nights required.",
        },
        {
            q: "Are gratuities included on a Riverside Rhône cruise?",
            a: "Yes, all onboard gratuities for the ship's crew and the guides during included shore excursions are included in your cruise fare.",
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

/* ── Quick Overview Data ──────────────────────────────────────── */
const quickOverviewData = [
    { key: "bestfor", label: "Best For", value: "Food & Wine Lovers, Couples, Luxury Travelers" },
    { key: "river", label: "Main River", value: "Rhône" },
    { key: "ship", label: "Featured Ship", value: "Riverside Debussy" },
    { key: "destinations", label: "Popular Destinations", value: "Lyon, Avignon, Arles, Viviers, Tournon" },
    { key: "style", label: "Cruise Style", value: "Boutique Luxury" },
    { key: "length", label: "Cruise Length", value: "Typically 7–10 nights" },
];

/* ── Destinations Along the Rhône ─────────────────────────────── */
const rhoneDestinations = [
    {
        id: "lyon",
        title: "Lyon, France",
        badge: "Lyon",
        icon: Sparkles,
        // image: LyonImage,
        desc: "Often considered the culinary capital of France, Lyon is famous for its gastronomy, Renaissance architecture, and vibrant markets — a dream destination for food lovers.",
        columns: [
            {
                label: "Highlights:",
                items: ["Vieux Lyon (Old Town)", "Basilica of Notre-Dame de Fourvière", "Les Halles Paul Bocuse", "Local bouchon restaurants", "Silk weaving history"],
            },
        ],
    },
    {
        id: "avignon",
        title: "Avignon, France",
        badge: "Avignon",
        icon: Church,
        // image: AvignonImage,
        desc: "One of Provence's most historic cities, Avignon's rich history and charming atmosphere make it one of the Rhône's most popular ports.",
        columns: [
            {
                label: "Highlights:",
                items: ["Palais des Papes (Palace of the Popes)", "Pont Saint-Bénézet", "Medieval city walls", "Local markets", "Provençal cafés"],
            },
        ],
    },
    {
        id: "arles",
        title: "Arles, France",
        badge: "Arles",
        icon: Landmark,
        // image: ArlesImage,
        desc: "A UNESCO World Heritage Site, Arles blends Roman history with artistic heritage, and inspired many of Vincent van Gogh's most celebrated paintings.",
        columns: [
            {
                label: "Highlights:",
                items: ["Roman Amphitheater", "Ancient Theatre", "Van Gogh walking trail", "Historic squares", "Outdoor cafés"],
            },
        ],
    },
    {
        id: "viviers",
        title: "Viviers, France",
        badge: "Viviers",
        icon: MapPin,
        // image: ViviersImage,
        desc: "One of France's best-preserved medieval towns, Viviers' slower pace offers a glimpse into traditional southern France.",
        columns: [
            {
                label: "Highlights:",
                items: ["Narrow cobblestone streets", "Gothic cathedral", "Historic mansions", "Peaceful riverfront", "Authentic Provençal atmosphere"],
            },
        ],
    },
    {
        id: "tournon",
        title: "Tournon-sur-Rhône, France",
        badge: "Tournon",
        icon: Grape,
        // image: TournonImage,
        desc: "Known for its vineyards and riverside charm, Tournon is often considered a highlight of the itinerary for wine enthusiasts.",
        columns: [
            {
                label: "Highlights:",
                items: ["Château de Tournon", "Rhône Valley wines", "Scenic walking paths", "Historic architecture", "Local wine cellars"],
            },
        ],
    },
];

/* ── Seasons Data ──────────────────────────────────────────────── */
const seasonsData = [
    {
        key: "spring",
        icon: Flower2,
        title: "Spring",
        range: "March – May",
        items: ["Blooming landscapes", "Pleasant temperatures", "Fewer crowds"],
    },
    {
        key: "summer",
        icon: Sun,
        title: "Summer",
        range: "June – August",
        items: ["Lavender season", "Outdoor cafés", "Warm weather"],
    },
    {
        key: "fall",
        icon: Leaf,
        title: "Fall",
        range: "September – October",
        items: ["Wine harvest", "Vineyard tours", "Comfortable temperatures"],
    },
];


/* ── Main Component ──────────────────────────────────────────────── */
const RiversideRhoneCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [readMoreHeritage, setReadMoreHeritage] = useState(false);
    const [activeDestination, setActiveDestination] = useState("lyon");

    const currentDestination =
        rhoneDestinations.find((d) => d.id === activeDestination) || rhoneDestinations[0];

    const ActiveIcon = currentDestination.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Riverside Rhône Cruises | Luxury Rhône River Cruises in France</title>
                <meta name="title" content="Riverside Rhône Cruises | Luxury River Cruises Through Provence" />
                <meta
                    name="description"
                    content="Explore Riverside Rhône Cruises through Lyon, Avignon, Arles, and Provence. Discover gourmet cuisine, world-class wines, luxury suites, and boutique river cruising in southern France."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Rhône Cruises</h1>

                    <p>
                        A Riverside Rhône Cruise is the perfect journey for travelers
                        who love fine wine, exceptional cuisine, charming villages, and
                        the relaxed elegance of southern France. Flowing through the
                        heart of Provence and Burgundy, the Rhône River connects
                        historic cities, Roman landmarks, world-famous vineyards, and
                        picturesque countryside.
                    </p>

                    {readMore && (
                        <p>
                            With Riverside Luxury Cruises, you'll experience these
                            remarkable destinations aboard a boutique luxury ship
                            featuring spacious suites, personalized service, gourmet
                            dining, and thoughtfully curated itineraries. Every day
                            offers a new cultural discovery, while every evening invites
                            you to relax in elegant surroundings with panoramic river
                            views. Whether you're a first-time visitor to France or a
                            seasoned traveler returning to explore Provence, a Riverside
                            Rhône Cruise delivers an unforgettable luxury vacation.
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
                            Start Planning Your Rhône Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK OVERVIEW ───────────────────────────────────────────── */}
            <section className="adg-section" id="quick-overview" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Overview</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickOverviewData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.label}</strong>
                                        </td>
                                        <td>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY CRUISE THE RHÔNE RIVER ───────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-cruise-the-rhone"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Why Cruise the Rhône River?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Riverside Rhône Cruise sailing past Provence vineyards"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    The <strong>Rhône</strong> offers one of Europe's
                                    richest combinations of culture, history, gastronomy,
                                    and scenic beauty. Unlike bus tours or independent
                                    travel, a Rhône river cruise allows you to experience
                                    multiple regions without constantly unpacking and
                                    changing hotels.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Highlights Include:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Provence's charming villages",
                                            "UNESCO World Heritage Sites",
                                            "World-famous vineyards",
                                            "Roman ruins",
                                            "Lavender fields (seasonal)",
                                            "Gourmet French cuisine",
                                            "Historic cities",
                                            "Scenic countryside",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rlc-page-cta-container rlc-align-left">
                                    <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                        Start Planning Your Rhône Cruise
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE RIVERSIDE LUXURY CRUISES ─────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="why-choose-riverside">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Choose Riverside Luxury Cruises?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Riverside delivers a boutique river cruise experience
                            centered on elegance and personalized hospitality. With only
                            a small fleet of ships, Riverside focuses on quality over
                            quantity, creating an intimate and refined travel experience.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious luxury suites",
                                "Gourmet dining inspired by regional cuisine",
                                "Attentive, personalized service",
                                "Elegant contemporary interiors",
                                "Relaxed onboard atmosphere",
                                "Carefully planned itineraries",
                                "Boutique hotel-style experience",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <Sparkles size={16} strokeWidth={2.5} />
                                    </span>
                                    <span className="adg-c-overview-label">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Star size={28} className="adg-c-callout-star" />
                                    <p className="adg-c-callout-text">
                                        A boutique fleet creates an experience that feels far
                                        more personal than larger cruise lines.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: "310px" }}>
                                <img
                                    // src={DebussyImage}
                                    alt="Boutique atmosphere aboard Riverside Debussy"
                                    className="adg-c-overview-img"
                                />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Boutique • Personalized • Elegant
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ALONG THE RHÔNE ─────────────────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Destinations Along the Rhône</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Every stop along the Rhône reveals a different side of
                            southern France — from the culinary capital of Lyon to the
                            Roman ruins of Arles and the vineyards of Tournon.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {rhoneDestinations.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeDestination === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveDestination(item.id)}
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

                        <div className="luc-dest-panel" key={activeDestination}>
                            <div className="luc-dest-img-wrap">
                                <img
                                    // src={currentDestination.image}
                                    alt={currentDestination.title}
                                    className="luc-dest-img"
                                />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentDestination.title}</span>
                                </div>
                            </div>

                            <p className="luc-dest-panel-desc">{currentDestination.desc}</p>

                            <div className="luc-dest-columns">
                                {currentDestination.columns.map((col, cIdx) => (
                                    <div key={cIdx} className="luc-dest-info-col">
                                        <span className="luc-dest-info-label">{col.label}</span>
                                        <div className="luc-dest-items-grid">
                                            {col.items.map((item) => (
                                                <div key={item} className="luc-dest-item">
                                                    <div className="luc-dest-item-dot"></div>
                                                    <span className="luc-dest-item-text">{item}</span>
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

            {/* ── PROVENCE: THE HEART OF SOUTHERN FRANCE ──────────────────── */}
            <section className="rrd-provence-section" id="provence">
                <div className="rrd-provence-container">
                    <div className="rrd-provence-header">
                        <h2 className="rrd-provence-title">Provence: The Heart of Southern France</h2>
                        <div className="rrd-provence-accent"></div>
                        <p className="rrd-provence-intro">
                            Many Riverside Rhône itineraries travel through Provence, one
                            of France's most beloved regions. The relaxed lifestyle and
                            beautiful scenery make it unforgettable.
                        </p>
                    </div>

                    <div className="rrd-provence-grid">
                        {[
                            { label: "Lavender fields", icon: Flower2 },
                            { label: "Olive groves", icon: Leaf },
                            { label: "Vineyards", icon: Grape },
                            { label: "Sunflower fields", icon: Sun },
                            { label: "Historic villages", icon: Landmark },
                            { label: "Outdoor markets", icon: Compass },
                            { label: "Artisan shops", icon: Sparkles },
                        ].map((item, i) => {
                            const IconComp = item.icon;
                            return (
                                <div key={i} className="rrd-provence-card">
                                    <div className="rrd-provence-icon-wrap">
                                        <IconComp size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="rrd-provence-label">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE DEBUSSY ─────────────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="riverside-debussy"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Riverside Debussy</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{ margin: '0px', marginBottom: '30px' }}>
                                Many Rhône itineraries are operated by Riverside Debussy,
                                a luxury river ship designed for elegant and intimate
                                cruising. Its boutique atmosphere is ideal for travelers
                                seeking comfort and sophistication.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Spacious suites",
                                    "Fine dining venues",
                                    "Panoramic observation lounge",
                                    "Sun deck",
                                    "Wellness facilities",
                                    "Personalized concierge service",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check size={16} strokeWidth={3} className="rlc-inc-check-icon" />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rlc-inc-outro-box">
                                <p className="rlc-inc-outro-text">
                                    With thoughtfully designed onboard venues and attentive
                                    concierge service, the Debussy offers a truly
                                    personalized luxury experience.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={DebussyImage}
                                        alt="Riverside Debussy Ship"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={AvignonImage}
                                            alt="Avignon scenery"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={TournonImage}
                                            alt="Tournon-sur-Rhône vineyard scenery"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS & LIFE ONBOARD ─────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="onboard-experience">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Included Shore Excursions &amp; Life Onboard</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Most Riverside Rhône itineraries include guided sightseeing
                            and enriching onboard moments that complement your journey
                            through southern France.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Shore Excursions */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Compass size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Included Shore Excursions</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Guided sightseeing showcases the region's Roman
                                    history, culture, and cuisine.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Popular experiences include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Walking tours",
                                            "Historic landmarks",
                                            "Roman ruins",
                                            "Local markets",
                                            "Museum visits",
                                            "Cultural experiences",
                                            "Wine-focused excursions",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="azs-dining-divider"></div>

                                    <div className="azs-dining-highlight-box azs-seabourn-highlight">
                                        <p className="azs-dining-highlight-text">
                                            Optional premium tours provide opportunities for
                                            deeper exploration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Life Onboard */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Ship size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Life Onboard</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    While sailing through southern France, the onboard
                                    atmosphere emphasizes relaxation rather than nonstop
                                    entertainment.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Activities may include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Live music",
                                            "Destination presentations",
                                            "Scenic cruising",
                                            "Wine tastings",
                                            "Relaxing lounges",
                                            "Sun deck views",
                                            "Quiet reading spaces",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Star size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="azs-dining-divider"></div>

                                    <div className="azs-dining-highlight-box azs-azamara-highlight">
                                        <p className="azs-dining-highlight-text">
                                            The onboard atmosphere emphasizes relaxation
                                            rather than nonstop entertainment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LUXURY ACCOMMODATIONS ────────────────────────────────────── */}
            <section className="luc-why-section" id="luxury-accommodations">
                <div className="luc-why-container">
                    <div className="luc-why-images luc-why-images-custom" style={{ height: "auto" }}>
                        <div
                            className="luc-why-img-main-wrap luc-why-img-main-wrap-custom"
                            style={{
                                color: "#fff",
                                position: "relative",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "380px",
                                marginTop: "105px"
                            }}
                        >
                            <img
                                // src={SuiteImage}
                                alt="Luxury suite aboard Riverside Debussy"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Luxury Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Riverside suites provide generous space rarely found on
                            European river cruises. Every suite is designed to create a
                            relaxing retreat after a day of exploring.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Sitting areas",
                                "Premium bath amenities",
                                "Luxury linens",
                                "River-view windows",
                                "Climate control",
                                "Thoughtful storage",
                            ]
                                .slice(0, readMoreSuites ? 8 : 4)
                                .map((label, i) => (
                                    <div key={i} className="luc-why-feature">
                                        <div className="luc-why-feature-num">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div className="luc-why-feature-body">
                                            <p className="luc-why-feature-desc">{label}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div
                            className="Scenic_readmore_wrapper"
                            style={{ marginTop: "25px", textAlign: "left" }}
                        >
                            <button
                                className="Scenic_readmore_btn"
                                onClick={() => setReadMoreSuites(!readMoreSuites)}
                            >
                                {readMoreSuites ? "Read Less" : "Read More"}
                            </button>
                        </div>

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "30px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Rhône Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHO SHOULD CHOOSE A RIVERSIDE RHÔNE CRUISE ──────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="who-should-choose">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Should Choose a Riverside Rhône Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            If your dream vacation includes exceptional cuisine,
                            beautiful scenery, and authentic French culture, the Rhône
                            is an excellent choice.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "Food lovers",
                            "Wine enthusiasts",
                            "Couples",
                            "Luxury travelers",
                            "Art lovers",
                            "History enthusiasts",
                            "Slow travelers",
                            "Anniversary celebrations",
                        ].map((label, i) => (
                            <div key={i} className="adg-c-overview-item">
                                <span className="adg-c-overview-icon">
                                    <Check size={16} strokeWidth={2.5} />
                                </span>
                                <span className="adg-c-overview-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GOURMET DINING & WINE EXPERIENCES ─────────────────────────── */}
            <section className="rdd-dining-section" id="dining-wine-experience">
                <div className="rdd-dining-container">

                    {/* Header Image */}
                    <div className="rdd-dining-image-wrap">
                        <img
                            // src={DiningImage}
                            alt="Gourmet dining aboard Riverside Rhône Cruises"
                            className="rdd-dining-img"
                        />
                        <div className="rdd-dining-image-overlay"></div>
                        <div className="rdd-dining-image-badge">
                            <span>Fresh Seasonal Ingredients • Rhône Valley Appellations</span>
                        </div>
                    </div>

                    {/* Columns Grid */}
                    <div className="rdd-dining-grid">

                        {/* Column 1: Gourmet Dining */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Gourmet Dining</h2>

                            <p className="rdd-dining-lead">
                                Dining is one of the defining experiences of a Rhône cruise.
                            </p>

                            <h3 className="rdd-dining-list-title">Menus often feature:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "French regional cuisine",
                                    "Fresh seafood",
                                    "Local cheeses",
                                    "Seasonal produce",
                                    "Artisan breads",
                                    "Gourmet desserts",
                                    "Rhône Valley wines",
                                    "Chef-inspired tasting menus",
                                ].map((item, idx) => (
                                    <li key={idx} className="rdd-dining-item">
                                        <div className="rdd-dining-icon-box">
                                            <Utensils size={14} />
                                        </div>
                                        <span className="rdd-dining-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rdd-dining-footer-box">
                                <p className="rdd-dining-footer-text">
                                    Every meal reflects the culinary traditions of the destinations visited.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Wine Experiences */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Wine Experiences</h2>

                            <p className="rdd-dining-lead">
                                The Rhône Valley is one of France's premier wine regions.
                            </p>

                            <h3 className="rdd-dining-list-title">Depending on your itinerary, excursions may include:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Vineyard visits",
                                    "Wine tastings",
                                    "Local wineries",
                                    "Regional food pairings",
                                    "Visits to renowned appellations",
                                ].map((item, idx) => (
                                    <li key={idx} className="rdd-dining-item">
                                        <div className="rdd-dining-icon-box">
                                            <Wine size={14} />
                                        </div>
                                        <span className="rdd-dining-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rdd-dining-footer-box">
                                <p className="rdd-dining-footer-text">
                                    Whether you're a wine connoisseur or simply enjoy discovering local flavors, these experiences add another dimension to the journey.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "40px", justifyContent: "center" }}>
                        <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                            Start Planning Your Rhône Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO CRUISE THE RHÔNE ───────────────────────────── */}
            <section className="rdd-seasons-section" id="best-time-to-cruise">
                <div className="rdd-seasons-container">
                    <div className="rdd-seasons-header">
                        <h2 className="rdd-seasons-title">Best Time to Cruise the Rhône</h2>
                        <div className="rdd-seasons-accent"></div>
                        <p className="rdd-seasons-intro">
                            Each season showcases a different side of southern France.
                        </p>
                    </div>

                    <div 
                        className="rdd-seasons-grid" 
                        style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            flexWrap: "wrap", 
                            gap: "24px" 
                        }}
                    >
                        {seasonsData.map((season) => {
                            const SeasonIcon = season.icon;
                            return (
                                <div 
                                    key={season.key} 
                                    className="rdd-seasons-card"
                                    style={{ flex: "1 1 280px", maxWidth: "300px" }}
                                >
                                    <div className="rdd-seasons-card-body">
                                        <span className="rdd-seasons-icon-wrap">
                                            <SeasonIcon size={22} strokeWidth={1.6} />
                                        </span>
                                        <h3 className="rdd-seasons-card-title">{season.title}</h3>
                                        <p className="rdd-seasons-card-range">
                                            {season.range}
                                        </p>
                                        <ul className="rdd-seasons-card-list">
                                            {season.items.map((point, idx) => (
                                                <li key={idx} className="rdd-seasons-card-list-item">
                                                    <span className="rdd-seasons-card-list-dot"></span>
                                                    <span className="rdd-seasons-card-list-text">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rdd-seasons-card-bar"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── IS A RIVERSIDE RHÔNE CRUISE WORTH IT ────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-it">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is a Riverside Rhône Cruise Worth It?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                For travelers who value gourmet dining, fine wine,
                                charming villages, and boutique luxury, the answer is a
                                resounding yes.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The Rhône offers a more relaxed pace than many other
                                    European itineraries, allowing guests to savor each
                                    destination while enjoying Riverside's exceptional
                                    hospitality and spacious accommodations.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Rhône Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WorthItImage}
                                    alt="Elegant evening lounge aboard a Riverside Rhône Cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>Understated • Elegant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Itinerary Planning</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Plan Every Detail of Your Rhône Journey
                            </h3>
                            <p className="Avr-planning-left-body">
                                An experienced luxury travel advisor can help you compare
                                Rhône itineraries, choose the best suite, coordinate
                                flights, arrange hotels, plan wine experiences, and
                                organize private transfers — so every aspect of your
                                French river cruise is tailored to your interests.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Expert guidance ensures your French river cruise is
                                    tailored to your interests.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Compare Rhône itineraries" },
                                    { icon: <Home size={18} />, label: "Choose the best suite" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights" },
                                    { icon: <Hotel size={18} />, label: "Arrange hotels" },
                                    { icon: <Wine size={18} />, label: "Plan wine experiences" },
                                    { icon: <Anchor size={18} />, label: "Organize private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend excursions" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
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
                            Everything travelers need to know before booking a Riverside
                            Rhône Cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={CTAImage}
                        alt="Riverside Debussy sailing the Rhône River"
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
                                    An Immersive Journey Through <br /> Southern France
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Riverside Rhône Cruise is one of the finest ways to
                                        experience southern France. From Lyon's legendary
                                        restaurants and Avignon's medieval history to Arles'
                                        artistic heritage and the vineyards of the Rhône
                                        Valley, every destination celebrates the region's
                                        extraordinary culture and cuisine.

                                        {!readMore && (
                                            <button
                                                onClick={() => setReadMore(true)}
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

                                    {readMore && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Combined with Riverside's spacious suites,
                                                gourmet dining, and personalized service, the
                                                Rhône becomes more than a river cruise—it
                                                becomes an immersive luxury journey through one
                                                of Europe's most enchanting regions.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">


                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare Rhône itineraries,
                                                select the perfect suite aboard Riverside
                                                Debussy, and create a customized French river
                                                cruise tailored to your travel style.
                                                <button
                                                    onClick={() => setReadMore(false)}
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
                                            Start Planning Your Riverside Cruise
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
                                            "Compare Rhône itineraries",
                                            "Choose the best suite",
                                            "Coordinate flights",
                                            "Arrange hotels",
                                            "Plan wine experiences",
                                            "Organize private transfers",
                                            "Recommend excursions",
                                            "Explain promotions",
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

export default RiversideRhoneCruises;   