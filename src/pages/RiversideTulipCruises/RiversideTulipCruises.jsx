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
    Church,
    Waves,
    Wine,
    Flower2,
    Wind,
    Building2,
    Camera,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Utensils,
    Sun,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Tulip Cruises
   photography once available. Paths assume a new
   /assets/RiversideTulipCruises folder. */
// import HeroImage from "../../assets/RiversideTulipCruises/riverside-tulip-hero.jpg";
// import ShipsImage from "../../assets/RiversideTulipCruises/riverside-tulip-ship.jpg";
// import AmsterdamImage from "../../assets/RiversideTulipCruises/riverside-tulip-amsterdam.jpg";
// import KeukenhofImage from "../../assets/RiversideTulipCruises/riverside-tulip-keukenhof.jpg";
// import KinderdijkImage from "../../assets/RiversideTulipCruises/riverside-tulip-kinderdijk.jpg";
// import RotterdamImage from "../../assets/RiversideTulipCruises/riverside-tulip-rotterdam.jpg";
// import AntwerpImage from "../../assets/RiversideTulipCruises/riverside-tulip-antwerp.jpg";
// import DelftImage from "../../assets/RiversideTulipCruises/riverside-tulip-delft.jpg";
// import SuiteImage from "../../assets/RiversideTulipCruises/riverside-tulip-suite.jpg";
// import DiningImage from "../../assets/RiversideTulipCruises/riverside-tulip-dining.jpg";
// import FieldsImage from "../../assets/RiversideTulipCruises/riverside-tulip-fields.jpg";
// import WorthItImage from "../../assets/RiversideTulipCruises/riverside-tulip-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideTulipCruises/riverside-tulip-ship-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#webpage",
            name: "Riverside Tulip Cruises | Luxury Spring River Cruises in Holland & Belgium",
            url: "https://www.tripsandships.com/riverside-tulip-cruises",
            description:
                "Experience spring in the Netherlands and Belgium on a Riverside Tulip Cruise. Visit Amsterdam, Keukenhof Gardens, Kinderdijk, Antwerp, and colorful tulip fields while enjoying boutique luxury river cruising.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#article",
            headline: "Riverside Tulip Cruises | Luxury Holland & Belgium River Cruises",
            description:
                "A complete guide to Riverside Tulip Cruises, covering destinations, accommodations, gourmet dining, included excursions, and whether a Riverside Tulip Cruise is worth booking.",
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
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#breadcrumb",
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
                    name: "Riverside Tulip Cruises",
                    item: "https://www.tripsandships.com/riverside-tulip-cruises",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#touristtrip",
            name: "Riverside Tulip Cruise",
            touristType: "Spring travelers, garden lovers, couples, photographers, luxury travelers",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Amsterdam, Netherlands" },
                    { "@type": "ListItem", position: 2, name: "Keukenhof Gardens, Netherlands" },
                    { "@type": "ListItem", position: 3, name: "Kinderdijk, Netherlands" },
                    { "@type": "ListItem", position: 4, name: "Rotterdam, Netherlands" },
                    { "@type": "ListItem", position: 5, name: "Antwerp, Belgium" },
                    { "@type": "ListItem", position: 6, name: "Delft, Netherlands" },
                ],
            },
        },
        {
            "@type": "Cruise",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#cruise",
            name: "Riverside Tulip Cruise",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Amsterdam, Netherlands" },
                    { "@type": "ListItem", position: 2, name: "Keukenhof Gardens, Netherlands" },
                    { "@type": "ListItem", position: 3, name: "Kinderdijk, Netherlands" },
                    { "@type": "ListItem", position: 4, name: "Rotterdam, Netherlands" },
                    { "@type": "ListItem", position: 5, name: "Antwerp, Belgium" },
                    { "@type": "ListItem", position: 6, name: "Delft, Netherlands" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#destinations",
            name: "Riverside Tulip Cruise Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Amsterdam, Netherlands" },
                { "@type": "Place", position: 2, name: "Keukenhof Gardens, Netherlands" },
                { "@type": "Place", position: 3, name: "Kinderdijk, Netherlands" },
                { "@type": "Place", position: 4, name: "Rotterdam, Netherlands" },
                { "@type": "Place", position: 5, name: "Antwerp, Belgium" },
                { "@type": "Place", position: 6, name: "Delft, Netherlands" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#service",
            serviceType: "Luxury Spring Tulip River Cruise Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Tulip Cruise itineraries and choose the best sailing dates, ship, and suite for peak bloom season.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#itemlist",
            name: "What This Riverside Tulip Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Tulip Cruise?" },
                { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 4, name: "Highlights of a Riverside Tulip Cruise" },
                { "@type": "ListItem", position: 5, name: "Tulip Fields in Bloom" },
                { "@type": "ListItem", position: 6, name: "Riverside Luxury Accommodations" },
                { "@type": "ListItem", position: 7, name: "Gourmet Dining" },
                { "@type": "ListItem", position: 8, name: "Included Shore Excursions & Life Onboard" },
                { "@type": "ListItem", position: 9, name: "Who Should Choose a Riverside Tulip Cruise?" },
                { "@type": "ListItem", position: 10, name: "Best Time to Go" },
                { "@type": "ListItem", position: 11, name: "Is a Riverside Tulip Cruise Worth It?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "When do Riverside Tulip Cruises operate?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most sailings take place between late March and early May during the Dutch tulip season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will I visit Keukenhof Gardens?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Tulip Cruise itineraries include a visit to Keukenhof, depending on the specific sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which countries are included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries visit the Netherlands and Belgium.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long are Tulip Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises range from 7 to 10 nights.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are shore excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Selected guided excursions are typically included, with optional premium experiences available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are meals included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Gourmet breakfast, lunch, and dinner are generally included throughout the cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Wine, beer, soft drinks, coffee, tea, and water are usually included with meals.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is this cruise good for photographers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. The colorful flower fields, historic canals, windmills, and charming villages make it one of Europe's most photogenic river cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside ship operates Tulip Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary and season, select Riverside ships may operate spring sailings through Holland and Belgium.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you choose the best departure date for peak blooms and coordinate every detail of your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there a dress code onboard Riverside Tulip Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The dress code onboard is elegant casual. Comfortable walking clothes and layers are recommended for shore excursions, while smart casual attire is perfect for evening dining.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are bicycles available for guest use during the cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Riverside ships typically carry complimentary bicycles and e-bikes, allowing guests to explore the scenic Dutch and Belgian cycling paths at their own pace.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Accordion ─────────────────────────────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "When do Riverside Tulip Cruises operate?",
            a: "Most sailings take place between late March and early May during the Dutch tulip season.",
        },
        {
            q: "Will I visit Keukenhof Gardens?",
            a: "Many Tulip Cruise itineraries include a visit to Keukenhof, depending on the specific sailing.",
        },
        {
            q: "Which countries are included?",
            a: "Most itineraries visit the Netherlands and Belgium.",
        },
        {
            q: "How long are Tulip Cruises?",
            a: "Most cruises range from 7 to 10 nights.",
        },
        {
            q: "Are shore excursions included?",
            a: "Yes. Selected guided excursions are typically included, with optional premium experiences available.",
        },
        {
            q: "Are meals included?",
            a: "Yes. Gourmet breakfast, lunch, and dinner are generally included throughout the cruise.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are usually included with meals.",
        },
        {
            q: "Is this cruise good for photographers?",
            a: "Absolutely. The colorful flower fields, historic canals, windmills, and charming villages make it one of Europe's most photogenic river cruises.",
        },
        {
            q: "Which Riverside ship operates Tulip Cruises?",
            a: "Depending on the itinerary and season, select Riverside ships may operate spring sailings through Holland and Belgium.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you choose the best departure date for peak blooms and coordinate every detail of your vacation.",
        },
        {
            q: "Is there a dress code onboard Riverside Tulip Cruises?",
            a: "The dress code onboard is elegant casual. Comfortable walking clothes and layers are recommended for shore excursions, while smart casual attire is perfect for evening dining.",
        },
        {
            q: "Are bicycles available for guest use during the cruise?",
            a: "Yes, Riverside ships typically carry complimentary bicycles and e-bikes, allowing guests to explore the scenic Dutch and Belgian cycling paths at their own pace.",
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
    { key: "bestfor", label: "Best For", value: "Spring Travelers, Garden Lovers, Couples, Photographers" },
    { key: "season", label: "Season", value: "March through May" },
    { key: "countries", label: "Countries Visited", value: "Netherlands & Belgium" },
    { key: "destinations", label: "Popular Destinations", value: "Amsterdam, Keukenhof, Kinderdijk, Rotterdam, Antwerp" },
    { key: "length", label: "Cruise Length", value: "Typically 7–10 nights" },
    { key: "style", label: "Cruise Style", value: "Boutique Luxury" },
];

/* ── Highlights of a Riverside Tulip Cruise Destinations ──────── */
const tulipDestinations = [
    {
        id: "amsterdam",
        title: "Amsterdam, Netherlands",
        badge: "Amsterdam",
        icon: Landmark,
        // image: AmsterdamImage,
        desc: "One of Europe's most fascinating capitals, Amsterdam combines history, art, and beautiful canals. Amsterdam is often the beginning or ending point for Riverside Tulip Cruises.",
        columns: [
            {
                label: "Highlights:",
                items: ["Canal cruises", "Rijksmuseum", "Anne Frank House", "Jordaan District", "Flower Market", "Historic architecture"],
            },
        ],
    },
    {
        id: "keukenhof",
        title: "Keukenhof Gardens",
        badge: "Keukenhof",
        icon: Flower2,
        // image: KeukenhofImage,
        desc: "The highlight of nearly every spring itinerary is a visit to Keukenhof, one of the world's largest and most famous flower gardens. Keukenhof is open only for a few weeks each spring, making these cruises especially popular.",
        columns: [
            {
                label: "Guests can admire:",
                items: ["Over seven million blooming flowers", "Tulips", "Hyacinths", "Daffodils", "Orchids", "Beautiful walking paths", "Sculptures", "Garden pavilions"],
            },
        ],
    },
    {
        id: "kinderdijk",
        title: "Kinderdijk",
        badge: "Kinderdijk",
        icon: Wind,
        // image: KinderdijkImage,
        desc: "A UNESCO World Heritage Site, Kinderdijk is famous for its historic windmills, offering one of the most iconic views in the Netherlands.",
        columns: [
            {
                label: "Visitors enjoy:",
                items: ["Traditional Dutch landscapes", "Windmill tours", "Scenic cycling routes", "Walking paths", "Beautiful waterways"],
            },
        ],
    },
    {
        id: "rotterdam",
        title: "Rotterdam",
        badge: "Rotterdam",
        icon: Building2,
        // image: RotterdamImage,
        desc: "A vibrant modern city known for innovative architecture and maritime history, Rotterdam provides an exciting contrast to Holland's historic towns.",
        columns: [
            {
                label: "Highlights include:",
                items: ["Cube Houses", "Erasmus Bridge", "Markthal", "Modern museums", "Harbor views"],
            },
        ],
    },
    {
        id: "antwerp",
        title: "Antwerp, Belgium",
        badge: "Antwerp",
        icon: Church,
        // image: AntwerpImage,
        desc: "Belgium's second-largest city offers outstanding history, shopping, and cuisine for guests to explore.",
        columns: [
            {
                label: "Guests can explore:",
                items: ["Cathedral of Our Lady", "Diamond District", "Medieval streets", "Belgian chocolate shops", "Local cafés"],
            },
        ],
    },
    {
        id: "delft",
        title: "Delft",
        badge: "Delft",
        icon: MapPin,
        // image: DelftImage,
        desc: "Depending on the itinerary, guests may visit Delft, famous for its artisan traditions and historic charm.",
        columns: [
            {
                label: "Delft is known for:",
                items: ["Delft Blue pottery", "Historic canals", "Market Square", "Royal history", "Artisan workshops"],
            },
        ],
    },
];

/* ── Best Time to Go Data ─────────────────────────────────────── */
const bestTimeData = [
    {
        key: "late-march",
        icon: Sparkles,
        title: "Late March",
        range: "Early season",
        items: ["Early blooms", "Fewer crowds", "Cooler temperatures"],
    },
    {
        key: "april",
        icon: Sun,
        title: "April",
        range: "Peak tulip season",
        items: ["Keukenhof in full bloom", "Best photography opportunities", "Vibrant countryside color"],
    },
    {
        key: "early-may",
        icon: Star,
        title: "Early May",
        range: "Late season",
        items: ["Beautiful spring landscapes", "Comfortable weather", "Late-season flowers"],
    },
];


/* ── Main Component ──────────────────────────────────────────────── */
const RiversideTulipCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [activeDestination, setActiveDestination] = useState("amsterdam");

    const currentDestination =
        tulipDestinations.find((d) => d.id === activeDestination) || tulipDestinations[0];

    const ActiveIcon = currentDestination.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Riverside Tulip Cruises | Luxury Spring River Cruises in Holland & Belgium</title>
                <meta name="title" content="Riverside Tulip Cruises | Luxury Holland & Belgium River Cruises" />
                <meta
                    name="description"
                    content="Experience spring in the Netherlands and Belgium on a Riverside Tulip Cruise. Visit Amsterdam, Keukenhof Gardens, Kinderdijk, Antwerp, and colorful tulip fields while enjoying boutique luxury river cruising."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Tulip Cruises</h1>

                    <p>
                        Every spring, the Netherlands transforms into one of the
                        world's most colorful destinations as millions of tulips
                        bloom across fields, gardens, and countryside. A Riverside
                        Tulip Cruise offers the perfect opportunity to experience
                        this spectacular season while enjoying the comfort,
                        elegance, and personalized service of a luxury boutique
                        river cruise.
                    </p>

                    {readMore && (
                        <p>
                            Sailing through the waterways of the Netherlands and
                            Belgium, Riverside combines breathtaking scenery with
                            charming cities, historic windmills, world-famous
                            gardens, and exceptional cuisine. Rather than rushing
                            from one destination to another, you'll wake up each
                            morning in a new location, ready to discover another
                            highlight of Northern Europe. Whether you're passionate
                            about flowers, photography, history, or simply looking
                            for an unforgettable spring vacation, Riverside Tulip
                            Cruises provide one of Europe's most beautiful seasonal
                            travel experiences.
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
                            Start Planning Your Tulip Cruise
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

            {/* ── WHY CHOOSE A TULIP CRUISE ─────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-choose-a-tulip-cruise"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Why Choose a Tulip Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Riverside Tulip Cruise sailing past blooming Dutch tulip fields"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    <strong>Spring</strong> is one of the most beautiful
                                    times to visit Europe. A river cruise allows you to
                                    visit multiple destinations while unpacking only once,
                                    waking each morning to a new highlight of the
                                    Netherlands and Belgium.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">During tulip season you'll experience:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Millions of blooming tulips",
                                            "World-famous gardens",
                                            "Historic Dutch cities",
                                            "Scenic canals",
                                            "Windmills",
                                            "Flower festivals",
                                            "Charming villages",
                                            "Mild spring weather",
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
                                        Start Planning Your Tulip Cruise
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
                            Riverside offers a refined boutique experience that
                            perfectly complements the relaxed beauty of spring in
                            Holland and Belgium. With fewer guests onboard than many
                            larger cruise lines, Riverside creates an intimate and
                            peaceful travel experience.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious luxury suites",
                                "Personalized service",
                                "Gourmet dining",
                                "Elegant contemporary interiors",
                                "Relaxed atmosphere",
                                "Carefully curated itineraries",
                                "Boutique hospitality",
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
                                        A boutique fleet creates an intimate, personal
                                        experience that feels far different than larger
                                        cruise lines.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: "310px" }}>
                                <img
                                    // src={ShipsImage}
                                    alt="Elegant atmosphere aboard a Riverside Luxury Cruise ship in spring"
                                    className="adg-c-overview-img"
                                />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Boutique • Elegant • Intimate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HIGHLIGHTS OF A RIVERSIDE TULIP CRUISE ───────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Highlights of a Riverside Tulip Cruise</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Every stop along a Riverside Tulip Cruise reveals its
                            own interpretation of spring — from Amsterdam's canals
                            to the endless blooms of Keukenhof Gardens.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {tulipDestinations.map((item) => {
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

            {/* ── TULIP FIELDS IN BLOOM ─────────────────────────────────────── */}
            <section className="rrd-provence-section" id="tulip-fields-in-bloom">
                <div className="rrd-provence-container">
                    <div className="rrd-provence-header">
                        <h2 className="rrd-provence-title">Tulip Fields in Bloom</h2>
                        <div className="rrd-provence-accent"></div>
                        <p className="rrd-provence-intro">
                            One of the unforgettable moments of a Riverside Tulip
                            Cruise is sailing through landscapes filled with
                            colorful flower fields, creating incredible
                            opportunities for photography.
                        </p>
                    </div>

                    <div className="rrd-provence-grid">
                        {[
                            { label: "Endless tulip fields", icon: Flower2 },
                            { label: "Hyacinths", icon: Flower2 },
                            { label: "Daffodils", icon: Flower2 },
                            { label: "Traditional Dutch farms", icon: Home },
                            { label: "Windmills", icon: Wind },
                            { label: "Scenic countryside", icon: Waves },
                            { label: "Photography opportunities", icon: Camera },
                            { label: "Mild spring sunshine", icon: Sun },
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

            {/* ── GOURMET DINING ─────────────────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="gourmet-dining"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Gourmet Dining</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{ margin: '0px', marginBottom: '30px' }}>
                                Dining highlights the fresh flavors of the
                                Netherlands and Belgium. Every meal is prepared
                                with the same attention to quality found throughout
                                the Riverside experience.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Fresh seafood",
                                    "Dutch cheeses",
                                    "Belgian specialties",
                                    "Artisan breads",
                                    "Seasonal vegetables",
                                    "Gourmet desserts",
                                    "Regional wines",
                                    "International cuisine",
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
                                    Every meal is prepared with the same attention
                                    to quality found throughout the Riverside
                                    experience.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={DiningImage}
                                        alt="Gourmet dining aboard a Riverside Tulip Cruise"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={FieldsImage}
                                            alt="Dutch tulip fields in bloom"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={KeukenhofImage}
                                            alt="Keukenhof Gardens flowers"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INCLUDED SHORE EXCURSIONS & LIFE ONBOARD ────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="onboard-experience">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Included Shore Excursions &amp; Life Onboard</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Most itineraries include guided experiences that
                            showcase the region's gardens and history,
                            complemented by a relaxed, elegant atmosphere onboard.
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
                                    Most itineraries include guided experiences
                                    such as garden visits, walking tours, and
                                    historic city centers.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Included experiences often include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Keukenhof Gardens",
                                            "Walking tours",
                                            "Canal districts",
                                            "Windmill visits",
                                            "Museum tours",
                                            "Historic city centers",
                                            "Local cultural experiences",
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
                                            Optional premium excursions provide
                                            additional opportunities to explore.
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
                                    While cruising through Holland and Belgium,
                                    the onboard experience emphasizes comfort and
                                    quiet luxury.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Guests can enjoy:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Panoramic river views",
                                            "Destination presentations",
                                            "Live music",
                                            "Cocktail hours",
                                            "Scenic cruising",
                                            "Comfortable observation lounges",
                                            "Relaxed social atmosphere",
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
                                            The onboard atmosphere emphasizes
                                            comfort and quiet luxury.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE LUXURY ACCOMMODATIONS ──────────────────────────── */}
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
                                alt="Luxury suite aboard a Riverside Tulip Cruise"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Riverside Luxury Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            After a day exploring gardens and historic cities,
                            return to your elegant Riverside suite. The spacious
                            accommodations provide a relaxing retreat throughout
                            your journey.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Luxury linens",
                                "Spacious sitting areas",
                                "Premium bath amenities",
                                "River-view windows",
                                "Climate control",
                            ]
                                .slice(0, readMoreSuites ? 7 : 4)
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
                                Start Planning Your Tulip Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE A RIVERSIDE TULIP CRUISE ────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="who-should-choose">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Should Choose a Riverside Tulip Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Its relaxed pace and spectacular scenery make it one
                            of Riverside's most popular seasonal itineraries.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "Garden lovers",
                            "Photography enthusiasts",
                            "Couples",
                            "Luxury travelers",
                            "First-time visitors to the Netherlands",
                            "Art lovers",
                            "Spring vacation travelers",
                            "Multi-generational adult families",
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

            {/* ── BEST TIME TO GO ───────────────────────────────────────────── */}
            <section className="rdd-seasons-section" id="best-time-to-go">
                <div className="rdd-seasons-container">
                    <div className="rdd-seasons-header">
                        <h2 className="rdd-seasons-title">Best Time to Go</h2>
                        <div className="rdd-seasons-accent"></div>
                        <p className="rdd-seasons-intro">
                            Tulip Cruises typically operate from late March
                            through early May, when the flowers are at their
                            peak. Because bloom times vary slightly with weather
                            conditions, no two seasons are exactly alike.
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
                        {bestTimeData.map((window) => {
                            const WindowIcon = window.icon;
                            return (
                                <div
                                    key={window.key}
                                    className="rdd-seasons-card"
                                    style={{ flex: "1 1 280px", maxWidth: "300px" }}
                                >
                                    <div className="rdd-seasons-card-body">
                                        <span className="rdd-seasons-icon-wrap">
                                            <WindowIcon size={22} strokeWidth={1.6} />
                                        </span>
                                        <h3 className="rdd-seasons-card-title">{window.title}</h3>
                                        <p className="rdd-seasons-card-range">
                                            {window.range}
                                        </p>
                                        <ul className="rdd-seasons-card-list">
                                            {window.items.map((point, idx) => (
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

            {/* ── IS A RIVERSIDE TULIP CRUISE WORTH IT ─────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-it">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is a Riverside Tulip Cruise Worth It?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                Absolutely. For travelers seeking one of Europe's
                                most beautiful seasonal experiences, a Riverside
                                Tulip Cruise offers exceptional value.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The combination of blooming flower fields,
                                    charming Dutch towns, elegant accommodations,
                                    gourmet dining, and personalized service
                                    creates an unforgettable luxury vacation.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Tulip Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WorthItImage}
                                    alt="Elegant evening lounge aboard a Riverside Tulip Cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>Scenic • Elegant</span>
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
                                Plan Every Detail of Your Spring Journey
                            </h3>
                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you choose the
                                best sailing dates for peak blooms, compare
                                itineraries, select the ideal suite, coordinate
                                airfare, arrange pre- and post-cruise hotels, and
                                organize private transfers — so every aspect of
                                your spring trip is stress-free from beginning to
                                end.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional planning helps ensure you
                                    experience the tulip season at its very best.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Choose the best sailing dates for peak blooms" },
                                    { icon: <Waves size={18} />, label: "Compare itineraries" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Coordinate airfare" },
                                    { icon: <Hotel size={18} />, label: "Arrange pre- and post-cruise hotels" },
                                    { icon: <Anchor size={18} />, label: "Organize private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend sightseeing experiences" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions and special offers" },
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
                            Everything travelers need to know before booking a
                            Riverside Tulip Cruise.
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
                        alt="Riverside ship sailing past Dutch tulip fields"
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
                                    One of Europe's Most Breathtaking <br /> Spring Vacations
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Riverside Tulip Cruise is one of Europe's
                                        most breathtaking spring vacations. From the
                                        spectacular blooms of Keukenhof Gardens and
                                        the iconic windmills of Kinderdijk to the
                                        canals of Amsterdam and the charm of
                                        Antwerp, every destination showcases the
                                        beauty of the season.

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
                                                Combined with Riverside's spacious
                                                suites, gourmet cuisine, and
                                                personalized boutique service, these
                                                spring sailings offer a luxurious
                                                and unforgettable way to experience
                                                Holland and Belgium.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">


                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you choose the
                                                ideal departure during peak tulip
                                                season, select the perfect suite,
                                                and create a customized luxury
                                                river cruise designed around your
                                                travel goals.
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
                                            "Choose the best sailing dates for peak blooms",
                                            "Compare itineraries",
                                            "Select the ideal suite",
                                            "Coordinate airfare",
                                            "Arrange pre- and post-cruise hotels",
                                            "Organize private transfers",
                                            "Recommend sightseeing experiences",
                                            "Explain promotions and special offers",
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

export default RiversideTulipCruises;