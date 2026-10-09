import { useState, useEffect } from "react";
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
    Mountain,
    Wine,
    Snowflake,
    Flower2,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Globe,
    BedDouble,
    Utensils,
    Wifi,
    Activity,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Luxury Cruises photography once
   available. Paths assume a new /assets/RiversideLuxuryCruises folder. */
// import HeroImage1 from "../../assets/RiversideLuxuryCruises/riverside-danube-vienna-hero.jpg";
// import HeroImage2 from "../../assets/RiversideLuxuryCruises/riverside-rhine-castle-hero.jpg";

// import FleetMozart from "../../assets/RiversideLuxuryCruises/riverside-mozart-danube.jpg";
// import FleetDebussy from "../../assets/RiversideLuxuryCruises/riverside-debussy-rhine.jpg";
// import FleetRavel from "../../assets/RiversideLuxuryCruises/riverside-ravel-rhone.jpg";

// import RiversideAtmosphere from "../../assets/RiversideLuxuryCruises/riverside-onboard-atmosphere.jpg";
// import RiversideSuite from "../../assets/RiversideLuxuryCruises/riverside-suite-interior.jpg";
// import RiversideDining from "../../assets/RiversideLuxuryCruises/riverside-gourmet-dining.jpg";
// import RiversideCrew from "../../assets/RiversideLuxuryCruises/riverside-crew-service.jpg";

// import DanubeImage from "../../assets/RiversideLuxuryCruises/riverside-danube-budapest.jpg";
// import RhineImage from "../../assets/RiversideLuxuryCruises/riverside-rhine-vineyards.jpg";
// import RhoneImage from "../../assets/RiversideLuxuryCruises/riverside-rhone-provence.jpg";

// import ChristmasMarketImage from "../../assets/RiversideLuxuryCruises/riverside-christmas-market.jpg";
// import TulipImage from "../../assets/RiversideLuxuryCruises/riverside-tulip-season-netherlands.jpg";

// import LifeOnboardImage from "../../assets/RiversideLuxuryCruises/riverside-observation-lounge.jpg";
// import ShoreExcursionsImage from "../../assets/RiversideLuxuryCruises/riverside-shore-excursion-tour.jpg";
// import BookingImage from "../../assets/RiversideLuxuryCruises/riverside-suite-booking-planning.jpg";
// import WorthItImage from "../../assets/RiversideLuxuryCruises/riverside-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideLuxuryCruises/riverside-ship-exterior-river.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "./RiversideLuxuryCruises.css";

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
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#webpage",
            name: "Riverside Luxury Cruises | Luxury River Cruise Guide (2026)",
            url: "https://www.tripsandships.com/riverside-luxury-cruises",
            description:
                "Discover Riverside Luxury Cruises with our complete guide covering ships, suites, dining, itineraries, pricing, destinations, inclusions, reviews, and expert planning advice for luxury European river cruises.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#article",
            headline: "Riverside Luxury Cruises | Complete Guide",
            description:
                "A complete guide to Riverside Luxury Cruises, covering the fleet, suites, dining, destinations, seasonal sailings, shore excursions, inclusions, pricing, and who should sail.",
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
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#breadcrumb",
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
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#touristtrip",
            name: "Riverside Luxury Cruises European River Itineraries",
            touristType: "Luxury travelers, couples, retirees, food & wine enthusiasts",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Danube River" },
                    { "@type": "ListItem", position: 2, name: "Rhine River" },
                    { "@type": "ListItem", position: 3, name: "Rhône River" },
                    { "@type": "ListItem", position: 4, name: "Christmas Market Cruises" },
                    { "@type": "ListItem", position: 5, name: "Tulip Season Cruises" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#destinations",
            name: "Riverside Luxury Cruises Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Danube River" },
                { "@type": "Place", position: 2, name: "Rhine River" },
                { "@type": "Place", position: 3, name: "Rhône River" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#service",
            serviceType: "Luxury River Cruise Vacation Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support for Riverside Luxury Cruises sailings, including itinerary selection, suite categories, and shore experiences.",
        },
        {
            "@type": "Review",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#review",
            itemReviewed: {
                "@type": "Product",
                name: "Riverside Luxury Cruises",
            },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
            },
            reviewBody:
                "Riverside Luxury Cruises delivers a boutique luxury river cruise experience with spacious all-suite accommodations, personalized service, exceptional dining, and thoughtfully designed European itineraries.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#itemlist",
            name: "What This Riverside Luxury Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 2, name: "The Riverside Fleet" },
                { "@type": "ListItem", position: 3, name: "Spacious Suite Accommodations" },
                { "@type": "ListItem", position: 4, name: "Dining That Reflects the Destination" },
                { "@type": "ListItem", position: 5, name: "Personalized Service" },
                { "@type": "ListItem", position: 6, name: "Beautiful European Destinations" },
                { "@type": "ListItem", position: 7, name: "Christmas Market & Tulip Season Cruises" },
                { "@type": "ListItem", position: 8, name: "Life Onboard" },
                { "@type": "ListItem", position: 9, name: "Shore Excursions" },
                { "@type": "ListItem", position: 10, name: "Who Should Sail Riverside?" },
                { "@type": "ListItem", position: 11, name: "What's Included?" },
                { "@type": "ListItem", position: 12, name: "Is Riverside Worth It?" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Riverside Luxury Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Luxury Cruises is a premium European river cruise line offering all-suite accommodations, gourmet dining, personalized service, and boutique luxury experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which rivers does Riverside sail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside operates on the Danube, Rhine, Main, Moselle, and Rhône Rivers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How many ships does Riverside have?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The fleet currently consists of three luxury ships: Riverside Mozart, Riverside Debussy, and Riverside Ravel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include accommodations, dining, beverages with meals, Wi-Fi, and selected excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Riverside ships suitable for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The relaxed atmosphere and attentive service make Riverside an excellent choice for both first-time and experienced river cruisers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What makes Riverside different?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside focuses on spacious suites, boutique hospitality, exceptional dining, and personalized service rather than large-scale entertainment.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside worth the price?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many luxury travelers believe Riverside offers outstanding value thanks to its accommodations, service, cuisine, and carefully curated itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best Riverside itinerary?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Danube and Rhine remain the most popular choices, while Rhône cruises are ideal for travelers interested in French wine and cuisine.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When should I book?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Luxury river cruises often sell out 9-18 months in advance, especially Christmas Market and Tulip season sailings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you compare itineraries, maximize value, coordinate travel logistics, and personalize your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What dining options are available onboard Riverside, and are dietary restrictions accommodated?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside offers gourmet multi-course dinners, breakfast and lunch buffets, and premium regional wine pairings. Culinary teams are highly trained to accommodate various dietary requirements, including vegetarian, vegan, gluten-free, and allergies, when notified in advance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Luxury Cruises provide butler service for all suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside offers personalized butler service for all guests, regardless of the suite category booked, to assist with unpacking, dining reservations, custom excursions, and daily needs.",
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
            q: "What is Riverside Luxury Cruises?",
            a: "Riverside Luxury Cruises is a premium European river cruise line offering all-suite accommodations, gourmet dining, personalized service, and boutique luxury experiences.",
        },
        {
            q: "Which rivers does Riverside sail?",
            a: "Riverside operates on the Danube, Rhine, Main, Moselle, and Rhône Rivers.",
        },
        {
            q: "How many ships does Riverside have?",
            a: "The fleet currently consists of three luxury ships: Riverside Mozart, Riverside Debussy, and Riverside Ravel.",
        },
        {
            q: "Is Riverside all-inclusive?",
            a: "Most cruises include accommodations, dining, beverages with meals, Wi-Fi, and selected excursions.",
        },
        {
            q: "Are Riverside ships suitable for first-time river cruisers?",
            a: "Yes. The relaxed atmosphere and attentive service make Riverside an excellent choice for both first-time and experienced river cruisers.",
        },
        {
            q: "What makes Riverside different?",
            a: "Riverside focuses on spacious suites, boutique hospitality, exceptional dining, and personalized service rather than large-scale entertainment.",
        },
        {
            q: "Is Riverside worth the price?",
            a: "Many luxury travelers believe Riverside offers outstanding value thanks to its accommodations, service, cuisine, and carefully curated itineraries.",
        },
        {
            q: "What is the best Riverside itinerary?",
            a: "The Danube and Rhine remain the most popular choices, while Rhône cruises are ideal for travelers interested in French wine and cuisine.",
        },
        {
            q: "When should I book?",
            a: "Luxury river cruises often sell out 9-18 months in advance, especially Christmas Market and Tulip season sailings.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you compare itineraries, maximize value, coordinate travel logistics, and personalize your vacation.",
        },
        {
            q: "What dining options are available onboard Riverside, and are dietary restrictions accommodated?",
            a: "Riverside offers gourmet multi-course dinners, breakfast and lunch buffets, and premium regional wine pairings. Culinary teams are highly trained to accommodate various dietary requirements, including vegetarian, vegan, gluten-free, and allergies, when notified in advance.",
        },
        {
            q: "Does Riverside Luxury Cruises provide butler service for all suites?",
            a: "Yes. Riverside offers personalized butler service for all guests, regardless of the suite category booked, to assist with unpacking, dining reservations, custom excursions, and daily needs.",
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

/* ── Fleet Data ────────────────────────────────────────────────── */
const fleetData = [
    {
        key: "mozart",
        name: "Riverside Mozart",
        tagline: "The Flagship of the Fleet",
        // image: FleetMozart,
        imageAlt: "Riverside Mozart sailing the Danube River",
        desc: "One of the largest luxury river ships on the Danube, offering exceptionally spacious suites, multiple dining venues, and extensive public spaces.",
        items: [
            "Danube itineraries",
            "First-time river cruisers",
            "Luxury travelers seeking extra space",
        ],
    },
    {
        key: "debussy",
        name: "Riverside Debussy",
        tagline: "Elegant Contemporary Luxury",
        // image: FleetDebussy,
        imageAlt: "Riverside Debussy sailing the Rhine River",
        desc: "Sailing primarily on the Rhine, Debussy combines elegant contemporary interiors with intimate luxury and personalized service.",
        items: [
            "Scenic Rhine itineraries",
            "Boutique atmosphere",
            "Sophisticated dining",
            "Beautiful observation lounges",
        ],
    },
    {
        key: "ravel",
        name: "Riverside Ravel",
        tagline: "Wine, Cuisine & Culture",
        // image: FleetRavel,
        imageAlt: "Riverside Ravel sailing the Rhône River",
        desc: "Operating on the Rhône River, Ravel explores southern France with itineraries focused on wine, cuisine, history, and culture.",
        items: [
            "French gastronomy",
            "Wine regions",
            "Historic villages",
            "Relaxed sightseeing",
        ],
    },
];

/* ── River Destinations ───────────────────────────────────────── */
const riverDestinations = [
    {
        id: "danube",
        title: "Danube River",
        badge: "Danube",
        icon: Landmark,
        // image: DanubeImage,

        desc: "The Danube is Riverside's signature river, sailing past imperial capitals, grand architecture, and centuries of European history.",

        columns: [
            {
                label: "Popular Ports May Include:",
                items: ["Budapest", "Vienna", "Bratislava", "Linz", "Melk", "Passau"],
            },
        ],

        themeLabel: "Imperial Cities & Grand Architecture",
        themeText:
            "Guests discover imperial cities, grand architecture, and centuries of European history — ideal for first-time river cruisers and experienced travelers alike.",
    },
    {
        id: "rhine",
        title: "Rhine River",
        badge: "Rhine",
        icon: Mountain,
        // image: RhineImage,

        desc: "The Rhine offers medieval castles, charming villages, and world-famous vineyards along one of Europe's most scenic waterways.",

        columns: [
            {
                label: "Popular Ports May Include:",
                items: [
                    "Cologne",
                    "Strasbourg",
                    "Basel",
                    "Koblenz",
                    "Rüdesheim",
                    "Amsterdam",
                ],
            },
        ],

        themeLabel: "Castles & Vineyards",
        themeText:
            "Expect medieval castles, charming villages, and world-famous vineyards throughout the region.",
    },
    {
        id: "rhone",
        title: "Rhône River",
        badge: "Rhône",
        icon: Wine,
        // image: RhoneImage,

        desc: "The Rhône journeys through southern France, perfect for travelers passionate about French cuisine and wine.",

        columns: [
            {
                label: "Popular Ports May Include:",
                items: ["Lyon", "Avignon", "Arles", "Viviers", "Tournon"],
            },
        ],

        themeLabel: "French Gastronomy & Wine",
        themeText:
            "Travelers enjoy French gastronomy, celebrated wine regions, historic villages, and relaxed sightseeing throughout Provence.",
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const RiversideLuxuryCruises = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const [activeRiver, setActiveRiver] = useState("danube");
    const currentRiver =
        riverDestinations.find((d) => d.id === activeRiver) || riverDestinations[0];

    const ActiveIcon = currentRiver.icon;

    const images = [];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>
                    Riverside Luxury Cruises | Luxury River Cruise Guide (2026)
                </title>
                <meta name="title" content="Riverside Luxury Cruises | Complete Guide" />
                <meta
                    name="description"
                    content="Discover Riverside Luxury Cruises with our complete guide covering ships, suites, dining, itineraries, pricing, destinations, inclusions, reviews, and expert planning advice for luxury European river cruises."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""
                            }`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Luxury Cruises</h1>

                    <p>
                        Luxury river cruising offers one of the most relaxing and
                        immersive ways to explore Europe, and Riverside Luxury Cruises has
                        quickly established itself as one of the most elegant names in
                        the industry.
                    </p>

                    <p>
                        Built around spacious all-suite accommodations, personalized
                        service, exceptional dining, and thoughtfully designed European
                        itineraries, Riverside delivers a boutique luxury experience that
                        feels more like staying at an exclusive riverside hotel than
                        taking a traditional cruise.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Whether you're sailing through the castles of the Rhine, the
                                vineyards of the Rhône, or the grand capitals along the
                                Danube, Riverside combines refined luxury with unforgettable
                                destinations.
                            </p>

                            <p>
                                This guide covers everything you need to know before booking
                                a Riverside Luxury Cruise.
                            </p>
                        </>
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
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE RIVERSIDE LUXURY CRUISES ─────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-choose-riverside"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">
                            Why Choose Riverside <br /> Luxury Cruises?
                        </h2>

                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideAtmosphere}
                                        alt="Onboard atmosphere aboard Riverside Luxury Cruises"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Luxury travelers increasingly value space, exceptional
                                    hospitality, and authentic experiences over crowded ships
                                    and busy schedules. <strong>Riverside</strong> was built
                                    around exactly that philosophy.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Riverside Delivers:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Spacious all-suite accommodations",
                                            "Personalized service",
                                            "Fine dining",
                                            "Boutique luxury atmosphere",
                                            "Scenic European itineraries",
                                            "Longer time in destination",
                                            "Elegant ship design",
                                            "Relaxed onboard experience",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p
                                    className="ugt-component-footer"
                                    style={{
                                        backgroundColor: "var(--bg-white)",
                                        padding: "12px",
                                        borderRadius: "6px",
                                    }}
                                >
                                    Every voyage is designed to help guests slow down and fully
                                    enjoy Europe's most beautiful waterways.
                                </p>

                                <div className="rlc-page-cta-container rlc-align-left">
                                    <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                        Start Planning Your Riverside Cruise
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE RIVERSIDE FLEET ─────────────────────────────────────── */}
            <section className="adg-section" id="riverside-fleet" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">The Riverside Fleet</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Riverside currently operates three elegant river ships, each
                            offering the same commitment to luxury while sailing different
                            European rivers.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {fleetData.map((ship) => (
                            <div key={ship.key} className="adg-card">
                                <div className="adg-card-image-wrap">
                                    <img
                                        src={ship.image}
                                        alt={ship.imageAlt}
                                        className="adg-card-img"
                                    />

                                    <div className="adg-card-image-overlay"></div>

                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">
                                            <Ship size={20} strokeWidth={1.6} />
                                        </span>
                                        <span className="adg-card-eyebrow-label">
                                            {ship.tagline}
                                        </span>
                                    </div>
                                </div>

                                <div className="adg-card-body">
                                    <h3 className="adg-card-title">{ship.name}</h3>

                                    <p style={{ marginBottom: "12px", color: 'var(--navy)' }}>{ship.desc}</p>

                                    <span
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.03em",
                                            opacity: 0.7,
                                        }}
                                    >
                                        Perfect For:
                                    </span>

                                    <ul className="adg-card-list">
                                        {ship.items.map((point, idx) => (
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

            {/* ── SPACIOUS SUITE ACCOMMODATIONS ───────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="spacious-suites">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Spacious Suite Accommodations</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Unlike many river cruise lines, Riverside focuses heavily on
                            spacious accommodations—many suites are considerably larger
                            than those found on traditional European river cruise ships.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Elegant suites",
                                "King-size beds",
                                "Luxury linens",
                                "Sitting areas",
                                "Marble bathrooms",
                                "Floor-to-ceiling windows",
                                "French or full balconies",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <BedDouble size={16} strokeWidth={2.5} />
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
                                        Many suites are considerably larger than those found on
                                        traditional European river cruise ships.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '310px' }}>
                                <img
                                    //   src={RiversideSuite}
                                    alt="Spacious suite accommodation aboard Riverside Luxury Cruises"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Elegant Comfort • Every Suite
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING THAT REFLECTS THE DESTINATION ────────────────────── */}
            <section
                className="dmg-info-section dmg-bg-white"
                id="dining-reflects-destination"
            >
                <div className="dmg-info-container">
                    <div className="dmg-info-grid">
                        <div className="dmg-info-media">
                            <div className="dmg-media-wrapper">
                                <img
                                    //   src={RiversideDining}
                                    alt="Gourmet dining aboard Riverside Luxury Cruises"
                                    className="dmg-media-img"
                                    style={{ height: "82vh" }}
                                />

                                <div className="dmg-media-overlay"></div>

                                <div className="dmg-media-badge">
                                    <span>Fresh Regional Ingredients</span>
                                </div>
                            </div>
                        </div>

                        <div className="dmg-info-content">
                            <h2 className="dmg-info-title">
                                Dining That Reflects the Destination
                            </h2>

                            <div className="dmg-info-accent"></div>

                            <p className="dmg-info-lead">
                                Food is an essential part of every Riverside journey. Menus
                                highlight fresh regional ingredients inspired by the
                                destinations visited during the voyage.
                            </p>

                            <div className="dmg-info-features dmg-info-features-scrollable">
                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Utensils size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">
                                            Gourmet Meals, All Day
                                        </h3>

                                        <p className="dmg-info-feature-desc">
                                            Gourmet breakfasts, multi-course lunches, and elegant
                                            dinners featuring local specialties.
                                        </p>
                                    </div>
                                </div>

                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Wine size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">Premium Wines</h3>

                                        <p className="dmg-info-feature-desc">
                                            Premium wines and fine desserts paired with each
                                            region's culinary traditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Check size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">
                                            Fresh Pastries &amp; Local Specialties
                                        </h3>

                                        <p className="dmg-info-feature-desc">
                                            Whether sailing through France, Germany, Austria, or
                                            Hungary, the culinary experience becomes part of the
                                            destination itself.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PERSONALIZED SERVICE ─────────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="personalized-service"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Personalized Service</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideCrew}
                                        alt="Attentive crew service aboard Riverside Luxury Cruises"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    <strong>Riverside</strong> emphasizes genuine hospitality
                                    over formal luxury. With fewer guests onboard, crew members
                                    quickly learn individual preferences, creating a highly
                                    personalized experience.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Guests Frequently Praise:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Friendly crew",
                                            "Personalized attention",
                                            "Fast service",
                                            "Attention to detail",
                                            "Warm atmosphere",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p
                                    className="ugt-component-footer"
                                    style={{
                                        backgroundColor: "var(--bg-white)",
                                        padding: "12px",
                                        borderRadius: "6px",
                                    }}
                                >
                                    With fewer guests onboard, crew members quickly learn
                                    individual preferences, creating a highly personalized
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEAUTIFUL EUROPEAN DESTINATIONS ─────────────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">
                            Beautiful European Destinations
                        </h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="luc-destinations-intro">
                            Riverside sails through some of Europe's most spectacular
                            regions. Each itinerary reflects the unique culture, history,
                            cuisine, and landscapes of the river it follows.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {riverDestinations.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeRiver === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""
                                            }`}
                                        onClick={() => setActiveRiver(item.id)}
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

                        <div className="luc-dest-panel" key={activeRiver}>
                            <div className="luc-dest-img-wrap">
                                <img
                                    src={currentRiver.image}
                                    alt={currentRiver.title}
                                    className="luc-dest-img"
                                />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveIcon size={22} strokeWidth={1.6} />
                                    </div>

                                    <span className="luc-dest-img-title">
                                        {currentRiver.title}
                                    </span>
                                </div>
                            </div>

                            <p className="luc-dest-panel-desc">{currentRiver.desc}</p>

                            <div className="luc-dest-columns">
                                {currentRiver.columns.map((col, cIdx) => (
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

                            <div className="luc-dest-theme-box-note">
                                <div className="luc-dest-theme-note-bar"></div>

                                <div className="luc-dest-theme-note-content">
                                    <span className="luc-dest-theme-note-label">
                                        {currentRiver.themeLabel}
                                    </span>

                                    <p className="luc-dest-theme-note-text">
                                        {currentRiver.themeText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CHRISTMAS MARKET & TULIP SEASON CRUISES ─────────────────── */}
            <section
                className="dve-winner-section"
                id="seasonal-cruises"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Christmas Market &amp; Tulip Season Cruises
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            Two of Riverside's most popular seasonal experiences bring
                            Europe's rivers to life in completely different ways.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Christmas Market Cruises */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap">
                                <img
                                    //   src={ChristmasMarketImage}
                                    alt="Riverside Christmas Market river cruise"
                                    className="dve-winner-img"
                                />
                                <span className="dve-winner-badge">Christmas Market Cruises</span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">Christmas Market Cruises</h3>

                                <p className="dve-winner-intro">
                                    One of Riverside's most popular seasonal experiences,
                                    especially popular during November and December.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">Guests Can Enjoy:</h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Traditional European markets",
                                        "Holiday lights",
                                        "Mulled wine",
                                        "Local crafts",
                                        "Historic town squares",
                                        "Seasonal cuisine",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Snowflake size={18} className="dve-advantage-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Tulip Season Cruises */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap">
                                <img
                                    //   src={TulipImage}
                                    alt="Riverside Tulip season cruise in the Netherlands"
                                    className="dve-winner-img"
                                />
                                <span className="dve-winner-badge">Tulip Season Cruises</span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">Tulip Season Cruises</h3>

                                <p className="dve-winner-intro">
                                    Spring transforms the Netherlands into a colorful landscape
                                    filled with blooming tulips—among the most sought-after
                                    European river itineraries.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">Highlights Include:</h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Keukenhof Gardens",
                                        "Amsterdam canals",
                                        "Windmills",
                                        "Dutch villages",
                                        "Flower markets",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Flower2 size={18} className="dve-advantage-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LIFE ONBOARD ─────────────────────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="life-onboard">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Life Onboard</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Riverside ships are intentionally designed for relaxation.
                            Rather than offering endless entertainment, Riverside encourages
                            guests to appreciate the destinations and enjoy the journey.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Observation lounges",
                                "Outdoor sun decks",
                                "Comfortable libraries",
                                "Fitness centers",
                                "Spa treatments",
                                "Wine tastings",
                                "Live music",
                                "Scenic cruising",
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
                                        Rather than offering endless entertainment, Riverside
                                        encourages guests to appreciate the destinations and
                                        enjoy the journey.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '350px' }}>
                                <img
                                    //   src={LifeOnboardImage}
                                    alt="Observation lounge aboard Riverside Luxury Cruises"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Relaxed • Elegant • Unhurried
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ─────────────────────────────────────────── */}
            <section className="adg-section" id="shore-excursions">
                <div className="adg-container">
                    <div className="adg-section-header" style={{ marginBottom: "60px" }}>
                        <h2 className="adg-h2">Shore Excursions</h2>
                        <div className="adg-accent-line"></div>

                        <p
                            className="Asc-body-text"
                            style={{ textAlign: "center", marginTop: "15px" }}
                        >
                            Every itinerary includes opportunities to discover local culture
                            through carefully planned experiences, with optional premium
                            excursions to customize your journey even further.
                        </p>
                    </div>

                    <div className="adg-split-layout">
                        <div className="adg-content-card-side">
                            <img
                                // src={ShoreExcursionsImage}
                                alt="Guests enjoying a Riverside Luxury Cruises shore excursion"
                                className="adg-side-image"
                                style={{ height: "60vh", border: '1px solid' }}
                            />

                            <div className="adg-info-card">
                                <div className="adg-card-meta">
                                    <MapPinned size={28} />
                                    <span className="adg-meta-label">
                                        Curated Local Experiences
                                    </span>
                                </div>

                                <p className="adg-card-lead">
                                    Optional premium excursions allow guests to customize their
                                    experience even further, from wine tastings to private
                                    castle visits.
                                </p>
                            </div>
                        </div>

                        <div className="adg-list-side">
                            {[
                                "Guided city tours",
                                "Castle visits",
                                "Wine tastings",
                                "Historic landmarks",
                                "Local markets",
                                "Culinary experiences",
                                "Museums",
                                "Scenic countryside drives",
                            ].map((item, i) => (
                                <div key={i} className="adg-list-item-card">
                                    <div className="adg-list-item-icon">
                                        <Check size={18} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="adg-list-item-label">{item}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "32px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD SAIL RIVERSIDE ────────────────────────────────── */}
            <section className="Asc-section" id="who-should-sail" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Sail Riverside?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-body-text">
                            Choosing the right cruise line depends on your travel style and
                            priorities.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">
                                Riverside Is an Excellent Choice for:
                            </h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Couples",
                                    "Luxury travelers",
                                    "Food & wine enthusiasts",
                                    "Retired travelers",
                                    "Anniversary celebrations",
                                    "Honeymooners",
                                    "Experienced river cruisers",
                                    "Travelers seeking relaxed luxury",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div> 

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">
                                Who Might Prefer Another Cruise Line?
                            </h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Want extensive onboard entertainment",
                                    "Prefer family-focused activities",
                                    "Are seeking lower-priced cruises",
                                    "Want highly active adventure programs",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Minus size={16} className="Asc-icon-red" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ──────────────────────────────────────────── */}
            <section className="rlc-inc-section" id="whats-included">
                <div className="rlc-inc-container">
                    <div className="rlc-inc-header">
                        <h2 className="rlc-inc-title">What's Included?</h2>

                        <div className="rlc-inc-accent"></div>

                        <p className="rlc-inc-intro">
                            Specific inclusions vary by itinerary and sailing, but most
                            Riverside sailings include the following as standard.
                        </p>
                    </div>

                    <div className="rlc-inc-grid">
                        {[
                            { label: "Luxury suite accommodations", icon: <BedDouble size={24} /> },
                            { label: "Gourmet dining", icon: <Utensils size={24} /> },
                            { label: "Wine, beer, and soft drinks with meals", icon: <Wine size={24} /> },
                            { label: "Wi-Fi", icon: <Wifi size={24} /> },
                            { label: "Selected shore excursions", icon: <Compass size={24} /> },
                            { label: "Fitness facilities", icon: <Activity size={24} /> },
                            { label: "Evening entertainment", icon: <Sparkles size={24} /> },
                            { label: "Concierge service", icon: <Users size={24} /> },
                        ].map((item, i) => (
                            <div key={i} className="rlc-inc-card">
                                <span className="rlc-inc-icon-box">
                                    {item.icon}
                                </span>
                                <span className="rlc-inc-label">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rlc-inc-callout">
                        <div className="rlc-inc-callout-inner">
                            <ShieldCheck size={28} className="rlc-inc-callout-icon" />
                            <p className="rlc-inc-callout-text">
                                Specific inclusions vary by itinerary and sailing—your
                                travel advisor can confirm exact details before booking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS RIVERSIDE WORTH IT ─────────────────────────────── */}

            <section
                className="rlc-lc-worth-section"
                id="is-riverside-worth-it"
            >
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">
                                Is Riverside Worth It?
                            </h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                For travelers who prioritize spacious accommodations,
                                exceptional hospitality, and elegant European travel,
                                Riverside represents excellent value.
                            </p>

                            <h3 className="rlc-lc-worth-emphasis-title">
                                Guests consistently praise:
                            </h3>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Spacious suites",
                                    "Outstanding dining",
                                    "Relaxed atmosphere",
                                    "Personalized service",
                                    "Beautiful itineraries",
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Rather than focusing on onboard attractions,
                                    Riverside invests in the overall quality of the
                                    guest experience.
                                </p>
                            </div>

                            <div
                                className="rlc-page-cta-container rlc-align-left"
                                style={{ marginTop: "24px" }}
                            >
                                <Link
                                    to="/contact"
                                    className="rlc-page-cta-btn"
                                    style={{ textDecoration: "none" }}
                                >
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={RiversideEvening}
                                    alt="Elegant evening lounge aboard Riverside Luxury Cruises"
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
                        <span className="Avr-planning-eyebrow">
                            Personalized Itinerary Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Find the Riverside Sailing That Fits You Best
                            </h3>

                            <p className="Avr-planning-left-body">
                                Luxury river cruising involves choosing the right itinerary,
                                cabin category, and sailing season. A knowledgeable travel
                                advisor takes the guesswork out of planning by helping you
                                select the ideal voyage for your travel style.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Professional guidance helps ensure every detail of your
                                    vacation is carefully planned.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A knowledgeable travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Compare itineraries" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights" },
                                    { icon: <Hotel size={18} />, label: "Arrange hotel stays" },
                                    { icon: <Anchor size={18} />, label: "Organize private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend excursions" },
                                    { icon: <Globe size={18} />, label: "Provide ongoing travel support" },
                                ].map((item, i) => (
                                    <div key={i} className="Avr-planning-benefit-card">
                                        <span className="Avr-planning-benefit-icon">
                                            {item.icon}
                                        </span>

                                        <span className="Avr-planning-benefit-label">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p
                                className="Avr-planning-right-intro"
                                style={{ marginTop: "24px" }}
                            >
                                Professional guidance helps ensure every detail of your
                                vacation is carefully planned.
                            </p>
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
                                <p className="Adg-expert-role">
                                    CEO of Trips &amp; Ships Luxury Travel
                                </p>
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
                                        {
                                            icon: <Award size={16} />,
                                            label: "CEO of Trips & Ships Luxury Travel",
                                        },
                                        {
                                            icon: <Star size={16} />,
                                            label: "Over 40 years in the travel industry",
                                        },
                                        {
                                            icon: <MapPin size={16} />,
                                            label: "Traveled to more than 121 countries",
                                        },
                                        {
                                            icon: <Award size={16} />,
                                            label: "Founder of Luxury Travel University",
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            label: "Global luxury travel speaker and trainer",
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            label: "Weekly industry columnist",
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            label: "Travel Leaders Network Advisory Board member",
                                        },
                                        {
                                            icon: <Award size={16} />,
                                            label: "2024 Luxury Travel Influencer of the Year",
                                        },
                                        {
                                            icon: <Star size={16} />,
                                            label:
                                                "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                                        },
                                        {
                                            icon: <Award size={16} />,
                                            label: "Featured in major travel publications globally",
                                        },
                                        {
                                            icon: <Ship size={16} />,
                                            label:
                                                "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                                        },
                                    ].map((item, i) => (
                                        <div className="Adg-expert-list-item" key={i}>
                                            <span className="Adg-expert-list-icon">{item.icon}</span>
                                            <span className="Adg-expert-list-label">
                                                {item.label}
                                            </span>
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
                            Everything travelers need to know about Riverside Luxury
                            Cruises.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / EXPLORE MORE ────────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={CTAImage}
                        alt="Riverside Luxury Cruises ship sailing a European river"
                        className="Asc-help-bg-img"
                    />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">
                        <div className="Asc-help-content">
                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">
                                    Personalized Luxury River Cruise Planning
                                </span>
                                <h2 className="Asc-help-h2">
                                    Explore More <br /> Riverside Luxury Cruises
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Whether you're dreaming of sailing past the castles of the
                                        Rhine, exploring the imperial capitals of the Danube, or
                                        discovering the vineyards of southern France, Riverside
                                        Luxury Cruises offers an elegant and unforgettable way to
                                        travel.
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
                                                With spacious suites, exceptional cuisine, attentive
                                                service, and thoughtfully designed itineraries,
                                                Riverside provides a refined river cruise experience
                                                for travelers who appreciate luxury without excess.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we help you choose
                                                the perfect Riverside itinerary, suite, and sailing
                                                while coordinating every detail of your
                                                journey—from flights and hotels to private transfers
                                                and personalized travel planning.
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
                                            "Compare itineraries",
                                            "Select the ideal suite",
                                            "Explain promotions",
                                            "Coordinate flights",
                                            "Arrange hotel stays",
                                            "Organize private transfers",
                                            "Recommend excursions",
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

export default RiversideLuxuryCruises;