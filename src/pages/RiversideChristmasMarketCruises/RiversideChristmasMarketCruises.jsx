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
    Wine,
    Snowflake,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Utensils,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Christmas Market Cruises
   photography once available. Paths assume a new
   /assets/RiversideChristmasMarketCruises folder. */
// import HeroImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-market-hero.jpg";
// import ShipsImage from "../../assets/RiversideChristmasMarketCruises/riverside-mozart-ravel-holiday.jpg";
// import ViennaImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-vienna.jpg";
// import BudapestImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-budapest.jpg";
// import NurembergImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-nuremberg.jpg";
// import CologneImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-cologne.jpg";
// import StrasbourgImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-strasbourg.jpg";
// import PassauImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-passau.jpg";
// import SuiteImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-suite.jpg";
// import DiningImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-dining.jpg";
// import ExcursionImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-market-stalls.jpg";
// import WorthItImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideChristmasMarketCruises/riverside-christmas-ship-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#webpage",
            name: "Riverside Christmas Market Cruises | Luxury European Holiday River Cruises",
            url: "https://www.tripsandships.com/riverside-christmas-market-cruises",
            description:
                "Experience Europe's most magical Christmas markets on a Riverside Luxury Cruise. Visit Vienna, Budapest, Strasbourg, Cologne, Nuremberg, and more while enjoying boutique luxury, gourmet dining, and festive holiday traditions.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#article",
            headline: "Riverside Christmas Market Cruises | Luxury Holiday River Cruises",
            description:
                "A complete guide to Riverside Christmas Market Cruises, covering destinations, Riverside Mozart and Riverside Ravel, accommodations, holiday dining, included excursions, and whether a Riverside Christmas Market Cruise is worth booking.",
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
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#breadcrumb",
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
                    name: "Riverside Christmas Market Cruises",
                    item: "https://www.tripsandships.com/riverside-christmas-market-cruises",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#touristtrip",
            name: "Riverside Christmas Market Cruise",
            touristType: "Holiday travelers, couples, families, Christmas lovers, luxury travelers",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Vienna, Austria" },
                    { "@type": "ListItem", position: 2, name: "Budapest, Hungary" },
                    { "@type": "ListItem", position: 3, name: "Nuremberg, Germany" },
                    { "@type": "ListItem", position: 4, name: "Cologne, Germany" },
                    { "@type": "ListItem", position: 5, name: "Strasbourg, France" },
                    { "@type": "ListItem", position: 6, name: "Passau, Germany" },
                ],
            },
        },
        {
            "@type": "Cruise",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#cruise",
            name: "Riverside Christmas Market Cruise",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Vienna, Austria" },
                    { "@type": "ListItem", position: 2, name: "Budapest, Hungary" },
                    { "@type": "ListItem", position: 3, name: "Nuremberg, Germany" },
                    { "@type": "ListItem", position: 4, name: "Cologne, Germany" },
                    { "@type": "ListItem", position: 5, name: "Strasbourg, France" },
                    { "@type": "ListItem", position: 6, name: "Passau, Germany" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#destinations",
            name: "Riverside Christmas Market Cruise Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Vienna, Austria" },
                { "@type": "Place", position: 2, name: "Budapest, Hungary" },
                { "@type": "Place", position: 3, name: "Nuremberg, Germany" },
                { "@type": "Place", position: 4, name: "Cologne, Germany" },
                { "@type": "Place", position: 5, name: "Strasbourg, France" },
                { "@type": "Place", position: 6, name: "Passau, Germany" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#service",
            serviceType: "Luxury Christmas Market River Cruise Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Christmas Market itineraries and choose the best sailing, ship, and suite for their holiday trip.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#itemlist",
            name: "What This Riverside Christmas Market Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Take a Christmas Market Cruise?" },
                { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 4, name: "The Best Christmas Market Destinations" },
                { "@type": "ListItem", position: 5, name: "Holiday Experiences You'll Enjoy" },
                { "@type": "ListItem", position: 6, name: "Riverside Mozart & Riverside Ravel" },
                { "@type": "ListItem", position: 7, name: "Included Shore Excursions & Life Onboard" },
                { "@type": "ListItem", position: 8, name: "Luxury Accommodations" },
                { "@type": "ListItem", position: 9, name: "Who Should Choose a Riverside Christmas Market Cruise?" },
                { "@type": "ListItem", position: 10, name: "Holiday Dining" },
                { "@type": "ListItem", position: 11, name: "Best Time to Go" },
                { "@type": "ListItem", position: 12, name: "Is a Riverside Christmas Market Cruise Worth It?" },
                { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "When do Riverside Christmas Market Cruises operate?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most holiday cruises sail between late November and December while Europe's Christmas markets are open.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which rivers host Christmas Market cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Danube and Rhine are the most popular rivers for Christmas Market itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ship sails Christmas Market cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the itinerary, holiday sailings may be offered aboard Riverside Mozart or Riverside Ravel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Christmas Market visits included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many itineraries include guided visits to famous Christmas markets as part of the included shore excursions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are meals included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Gourmet breakfast, lunch, and dinner are typically included throughout the cruise.",
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
                    name: "Is this a good cruise for first-time visitors to Europe?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Christmas Market cruises provide an excellent introduction to Central Europe's history, culture, and holiday traditions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book early?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Christmas Market cruises are among Riverside's most popular departures and often sell out well in advance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The intimate atmosphere, elegant accommodations, and festive destinations make these cruises especially popular with couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you compare holiday itineraries, recommend the best suite, and coordinate every detail of your trip.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Riverside during holiday cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The dress code is elegant casual by day and smart casual in the evenings, with no formal wear required. We recommend warm, comfortable layers for visiting the outdoor markets.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included on Riverside Christmas Market Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, all onboard gratuities for the ship's crew and tips for local guides during included shore excursions are included in your cruise fare.",
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
            q: "When do Riverside Christmas Market Cruises operate?",
            a: "Most holiday cruises sail between late November and December while Europe's Christmas markets are open.",
        },
        {
            q: "Which rivers host Christmas Market cruises?",
            a: "The Danube and Rhine are the most popular rivers for Christmas Market itineraries.",
        },
        {
            q: "Which ship sails Christmas Market cruises?",
            a: "Depending on the itinerary, holiday sailings may be offered aboard Riverside Mozart or Riverside Ravel.",
        },
        {
            q: "Are Christmas Market visits included?",
            a: "Many itineraries include guided visits to famous Christmas markets as part of the included shore excursions.",
        },
        {
            q: "Are meals included?",
            a: "Yes. Gourmet breakfast, lunch, and dinner are typically included throughout the cruise.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
        },
        {
            q: "Is this a good cruise for first-time visitors to Europe?",
            a: "Yes. Christmas Market cruises provide an excellent introduction to Central Europe's history, culture, and holiday traditions.",
        },
        {
            q: "Should I book early?",
            a: "Absolutely. Christmas Market cruises are among Riverside's most popular departures and often sell out well in advance.",
        },
        {
            q: "Is Riverside suitable for couples?",
            a: "Yes. The intimate atmosphere, elegant accommodations, and festive destinations make these cruises especially popular with couples.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you compare holiday itineraries, recommend the best suite, and coordinate every detail of your trip.",
        },
        {
            q: "What is the dress code onboard Riverside during holiday cruises?",
            a: "The dress code is elegant casual by day and smart casual in the evenings, with no formal wear required. We recommend warm, comfortable layers for visiting the outdoor markets.",
        },
        {
            q: "Are gratuities included on Riverside Christmas Market Cruises?",
            a: "Yes, all onboard gratuities for the ship's crew and tips for local guides during included shore excursions are included in your cruise fare.",
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
    { key: "bestfor", label: "Best For", value: "Holiday Travelers, Couples, Families, Christmas Lovers" },
    { key: "season", label: "Season", value: "Late November through December" },
    { key: "rivers", label: "Popular Rivers", value: "Danube & Rhine" },
    { key: "ships", label: "Featured Ships", value: "Riverside Mozart, Riverside Ravel" },
    { key: "length", label: "Cruise Length", value: "Typically 5–10 nights" },
    { key: "style", label: "Cruise Style", value: "Boutique Luxury" },
];

/* ── The Best Christmas Market Destinations ───────────────────── */
const christmasDestinations = [
    {
        id: "vienna",
        title: "Vienna, Austria",
        badge: "Vienna",
        icon: Landmark,
        // image: ViennaImage,
        desc: "Vienna is home to some of Europe's most elegant Christmas markets. The city's imperial architecture becomes even more magical during the holiday season.",
        columns: [
            {
                label: "Highlights:",
                items: ["Rathaus Christmas Market", "Schönbrunn Palace Market", "Holiday concerts", "Traditional ornaments", "Austrian pastries"],
            },
        ],
    },
    {
        id: "budapest",
        title: "Budapest, Hungary",
        badge: "Budapest",
        icon: Waves,
        // image: BudapestImage,
        desc: "Budapest combines festive markets with spectacular nighttime views, its riverside skyline glowing beneath the holiday lights.",
        columns: [
            {
                label: "Highlights:",
                items: ["Vörösmarty Square Christmas Market", "St. Stephen's Basilica Market", "Hungarian holiday foods", "Mulled wine", "Seasonal performances"],
            },
        ],
    },
    {
        id: "nuremberg",
        title: "Nuremberg, Germany",
        badge: "Nuremberg",
        icon: Sparkles,
        // image: NurembergImage,
        desc: "One of Europe's most famous Christmas markets, Nuremberg is a beloved stop for travelers seeking timeless German holiday traditions.",
        columns: [
            {
                label: "Highlights:",
                items: ["Nürnberger Christkindlesmarkt", "Handmade ornaments", "Gingerbread", "Wooden toys", "Traditional German crafts"],
            },
        ],
    },
    {
        id: "cologne",
        title: "Cologne, Germany",
        badge: "Cologne",
        icon: Church,
        // image: CologneImage,
        desc: "Cologne hosts several unique Christmas markets. The illuminated Cologne Cathedral creates an unforgettable holiday backdrop.",
        columns: [
            {
                label: "Highlights:",
                items: ["Cathedral Christmas Market", "Harbor Christmas Market", "Angel Market", "Local foods", "Holiday shopping"],
            },
        ],
    },
    {
        id: "strasbourg",
        title: "Strasbourg, France",
        badge: "Strasbourg",
        icon: Snowflake,
        // image: StrasbourgImage,
        desc: 'Known as the "Capital of Christmas," Strasbourg hosts one of Europe\'s oldest and most celebrated Christmas markets.',
        columns: [
            {
                label: "Highlights:",
                items: ["Petite France", "Christmas lights", "Alsatian cuisine", "Handmade gifts", "Festive decorations throughout the city"],
            },
        ],
    },
    {
        id: "passau",
        title: "Passau, Germany",
        badge: "Passau",
        icon: MapPin,
        // image: PassauImage,
        desc: "This charming Bavarian town offers a slower, cozier introduction to Germany's holiday traditions, historic Old Town, and artisan gifts.",
        columns: [
            {
                label: "Highlights:",
                items: ["Traditional Christmas Market", "Historic Old Town", "Local artisan gifts", "Festive music", "Cozy cafés"],
            },
        ],
    },
];

/* ── Best Time to Go Data ─────────────────────────────────────── */
const bestTimeData = [
    {
        key: "early",
        icon: Snowflake,
        title: "Early December",
        range: "Smaller crowds",
        items: ["Quieter markets", "Easier reservations", "Charming winter atmosphere"],
    },
    {
        key: "mid",
        icon: Sparkles,
        title: "Mid-December",
        range: "Peak holiday atmosphere",
        items: ["Markets in full swing", "Festive citywide decorations", "Lively holiday energy"],
    },
    {
        key: "pre",
        icon: Star,
        title: "Pre-Christmas",
        range: "Most festive departures",
        items: ["Closest to the holiday itself", "Magical seasonal ambiance", "Popular with returning guests"],
    },
];


/* ── Main Component ──────────────────────────────────────────────── */
const RiversideChristmasMarketCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [activeDestination, setActiveDestination] = useState("vienna");

    const currentDestination =
        christmasDestinations.find((d) => d.id === activeDestination) || christmasDestinations[0];

    const ActiveIcon = currentDestination.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Riverside Christmas Market Cruises | Luxury European Holiday River Cruises</title>
                <meta name="title" content="Riverside Christmas Market Cruises | Luxury Holiday River Cruises" />
                <meta
                    name="description"
                    content="Experience Europe's most magical Christmas markets on a Riverside Luxury Cruise. Visit Vienna, Budapest, Strasbourg, Cologne, Nuremberg, and more while enjoying boutique luxury, gourmet dining, and festive holiday traditions."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Christmas Market Cruises</h1>

                    <p>
                        Few vacations capture the magic of the holiday season quite
                        like a Riverside Christmas Market Cruise. Picture snow-dusted
                        medieval towns, festive lights reflecting on the river, the
                        aroma of roasted chestnuts and mulled wine filling historic
                        squares, and beautifully decorated Christmas markets just steps
                        from your ship.
                    </p>

                    {readMore && (
                        <p>
                            Aboard Riverside Luxury Cruises, you'll experience Europe's
                            most beloved holiday traditions while enjoying spacious
                            suites, exceptional cuisine, personalized service, and the
                            relaxed elegance of boutique river cruising. Whether you're
                            celebrating a special holiday, planning a romantic winter
                            escape, or checking a bucket-list experience off your travel
                            list, a Riverside Christmas Market Cruise offers one of the
                            most enchanting ways to explore Europe.
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
                            Start Planning Your Christmas Market Cruise
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

            {/* ── WHY TAKE A CHRISTMAS MARKET CRUISE ───────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-take-a-christmas-market-cruise"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Why Take a Christmas Market Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Riverside Christmas Market Cruise sailing past a festive European city"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    European <strong>Christmas markets</strong> have been
                                    celebrated for centuries, transforming historic city
                                    centers into festive villages filled with handcrafted
                                    gifts, seasonal treats, and holiday music. A Riverside
                                    Christmas Market Cruise lets you experience many of
                                    them without ever changing hotels.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">A Riverside Christmas Market Cruise allows you to:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Visit multiple Christmas markets on one vacation",
                                            "Wake up in a new city almost every day",
                                            "Enjoy luxury accommodations throughout your journey",
                                            "Experience Europe's holiday traditions without changing hotels",
                                            "Relax between destinations while scenic winter landscapes drift by",
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
                                        Start Planning Your Christmas Market Cruise
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
                            Riverside combines festive holiday experiences with
                            exceptional boutique luxury. Instead of large crowds
                            onboard, Riverside focuses on personalized hospitality and
                            thoughtful service.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious luxury suites",
                                "Gourmet holiday-inspired cuisine",
                                "Personalized service",
                                "Elegant holiday décor onboard",
                                "Relaxed atmosphere",
                                "Beautiful river views",
                                "Intimate guest experience",
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
                                        A boutique fleet creates a holiday experience that
                                        feels far more personal than larger cruise lines.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: "310px" }}>
                                <img
                                    // src={ShipsImage}
                                    alt="Festive holiday atmosphere aboard a Riverside Luxury Cruise ship"
                                    className="adg-c-overview-img"
                                />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Boutique • Festive • Elegant
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE BEST CHRISTMAS MARKET DESTINATIONS ───────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">The Best Christmas Market Destinations</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Every stop along a Riverside Christmas Market Cruise
                            reveals its own interpretation of the season — from
                            Vienna's imperial elegance to Strasbourg's centuries-old
                            traditions.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {christmasDestinations.map((item) => {
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

            {/* ── HOLIDAY EXPERIENCES YOU'LL ENJOY ──────────────────────────── */}
            <section className="rrd-provence-section" id="holiday-experiences">
                <div className="rrd-provence-container">
                    <div className="rrd-provence-header">
                        <h2 className="rrd-provence-title">Holiday Experiences You'll Enjoy</h2>
                        <div className="rrd-provence-accent"></div>
                        <p className="rrd-provence-intro">
                            A Riverside Christmas Market Cruise offers much more than
                            shopping — every destination offers its own unique
                            interpretation of Christmas.
                        </p>
                    </div>

                    <div className="rrd-provence-grid">
                        {[
                            { label: "Carol performances", icon: Music },
                            { label: "Historic churches", icon: Church },
                            { label: "Holiday concerts", icon: Music },
                            { label: "Seasonal food tastings", icon: Utensils },
                            { label: "Local Christmas traditions", icon: Sparkles },
                            { label: "Festive city tours", icon: Compass },
                            { label: "Holiday decorations", icon: Snowflake },
                            { label: "Winter river scenery", icon: Waves },
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

            {/* ── RIVERSIDE MOZART & RIVERSIDE RAVEL ────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="riverside-mozart-ravel"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Riverside Mozart &amp; Riverside Ravel</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{ margin: '0px', marginBottom: '30px' }}>
                                Depending on the itinerary, Riverside's Christmas Market
                                sailings are offered aboard Riverside Mozart or Riverside
                                Ravel, both designed for elegant, boutique holiday
                                cruising through Europe's festive rivers.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Spacious suites",
                                    "Gourmet holiday dining venues",
                                    "Panoramic observation lounge",
                                    "Festive onboard décor",
                                    "Cozy lounges",
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
                                    After a day exploring festive markets, guests return to
                                    an elegant ship decorated for the season — peaceful,
                                    sophisticated, and wonderfully festive.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={ShipsImage}
                                        alt="Riverside Mozart and Riverside Ravel decorated for the holidays"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={ViennaImage}
                                            alt="Vienna Christmas Market scenery"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={CologneImage}
                                            alt="Cologne Cathedral Christmas Market scenery"
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
                            Many itineraries include guided experiences that showcase
                            the region's holiday traditions, complemented by a
                            festive, peaceful atmosphere onboard.
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
                                    Guided experiences highlight the region's Christmas
                                    Market traditions, historic architecture, and
                                    holiday culture.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Included experiences often include:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Christmas Market walking tours",
                                            "Historic city tours",
                                            "Cathedral visits",
                                            "Holiday food tastings",
                                            "Local cultural experiences",
                                            "Scenic sightseeing",
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
                                            Optional premium excursions provide opportunities
                                            for more in-depth exploration.
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
                                    Between ports, the onboard atmosphere perfectly
                                    complements the magic of Europe's Christmas season.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Guests can enjoy:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Holiday music",
                                            "Scenic cruising",
                                            "Festive cocktails",
                                            "Destination talks",
                                            "Live entertainment",
                                            "Comfortable observation lounges",
                                            "Seasonal celebrations",
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
                                            The atmosphere is peaceful, sophisticated, and
                                            wonderfully festive.
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
                                alt="Luxury suite aboard a Riverside Christmas Market Cruise"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Luxury Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            Riverside's spacious suites provide the perfect place to
                            relax after a day of sightseeing. The generous
                            accommodations are among the finest available on European
                            rivers.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Premium linens",
                                "Comfortable sitting areas",
                                "River views",
                                "Luxury bath amenities",
                                "Climate control",
                                "Elegant furnishings",
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
                                Start Planning Your Christmas Market Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE A RIVERSIDE CHRISTMAS MARKET CRUISE ────── */}
            <section className="adg-c-section adg-c-bg-soft" id="who-should-choose">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Should Choose a Riverside Christmas Market Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The festive atmosphere appeals to travelers of all ages who
                            appreciate European traditions.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "Couples",
                            "Holiday travelers",
                            "Christmas enthusiasts",
                            "Luxury travelers",
                            "Photography lovers",
                            "Family celebrations",
                            "Anniversary trips",
                            "Bucket-list vacations",
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

            {/* ── HOLIDAY DINING & RIVERSIDE LUXURY DURING THE HOLIDAYS ────── */}
            <section className="rdd-dining-section" id="holiday-dining">
                <div className="rdd-dining-container">

                    {/* Header Image */}
                    <div className="rdd-dining-image-wrap">
                        <img
                            // src={DiningImage}
                            alt="Holiday dining aboard Riverside Christmas Market Cruises"
                            className="rdd-dining-img"
                        />
                        <div className="rdd-dining-image-overlay"></div>
                        <div className="rdd-dining-image-badge">
                            <span>Seasonal European Cuisine • Festive Traditions</span>
                        </div>
                    </div>

                    {/* Columns Grid */}
                    <div className="rdd-dining-grid">

                        {/* Column 1: Holiday Dining */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Holiday Dining</h2>

                            <p className="rdd-dining-lead">
                                Christmas cruises feature seasonal European cuisine
                                inspired by the destinations visited.
                            </p>

                            <h3 className="rdd-dining-list-title">Guests may enjoy:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Roast meats",
                                    "Traditional pastries",
                                    "Christmas cookies",
                                    "Regional cheeses",
                                    "Mulled wine",
                                    "Holiday desserts",
                                    "Gourmet dinners",
                                    "Local specialties",
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
                                    Dining becomes part of the holiday celebration itself.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Riverside Luxury During the Holidays */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Riverside Luxury During the Holidays</h2>

                            <p className="rdd-dining-lead">
                                After a day exploring festive markets, guests return to
                                an elegant ship decorated for the season.
                            </p>

                            <h3 className="rdd-dining-list-title">Onboard experiences often include:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Holiday décor",
                                    "Seasonal menus",
                                    "Festive desserts",
                                    "Warm hospitality",
                                    "Comfortable lounges",
                                    "Evening entertainment",
                                    "Scenic winter cruising",
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
                                    The atmosphere is peaceful, sophisticated, and
                                    wonderfully festive.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "40px", justifyContent: "center" }}>
                        <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                            Start Planning Your Christmas Market Cruise
                            <ArrowRight size={18} />
                        </Link>
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
                            Christmas Market cruises generally operate from late
                            November through December, when Europe's markets are in
                            full celebration. Booking early is recommended, as holiday
                            sailings are among the most popular of the year.
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

            {/* ── IS A RIVERSIDE CHRISTMAS MARKET CRUISE WORTH IT ─────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-it">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is a Riverside Christmas Market Cruise Worth It?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                Absolutely. Combining luxurious accommodations with
                                some of Europe's most iconic holiday traditions
                                creates an unforgettable seasonal vacation.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    From sipping mulled wine beneath cathedral lights to
                                    browsing artisan markets and returning each evening to
                                    an elegant boutique ship, Riverside offers one of the
                                    finest Christmas travel experiences available.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Christmas Market Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WorthItImage}
                                    alt="Elegant evening lounge aboard a Riverside Christmas Market Cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>Festive • Elegant</span>
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
                                Plan Every Detail of Your Holiday Journey
                            </h3>
                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you choose the best
                                Christmas itinerary, compare Danube and Rhine holiday
                                sailings, recommend the ideal suite, coordinate flights,
                                arrange pre- and post-cruise hotels, and organize
                                private transfers — so every aspect of your holiday
                                trip is stress-free from beginning to end.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance ensures your holiday trip is
                                    stress-free from beginning to end.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Choose the best Christmas itinerary" },
                                    { icon: <Waves size={18} />, label: "Compare Danube and Rhine holiday sailings" },
                                    { icon: <Home size={18} />, label: "Recommend the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights" },
                                    { icon: <Hotel size={18} />, label: "Arrange pre- and post-cruise hotels" },
                                    { icon: <Anchor size={18} />, label: "Organize private transfers" },
                                    { icon: <BadgePercent size={18} />, label: "Explain holiday promotions" },
                                    { icon: <Compass size={18} />, label: "Plan a seamless vacation" },
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
                            Riverside Christmas Market Cruise.
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
                        alt="Riverside ship sailing past a Christmas Market at dusk"
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
                                    One of the Most Magical <br /> Ways to Celebrate the Season
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Riverside Christmas Market Cruise is one of the
                                        most magical ways to celebrate the holiday season.
                                        From Vienna's elegant squares and Budapest's
                                        festive lights to Strasbourg's centuries-old
                                        Christmas traditions and Cologne's famous cathedral
                                        markets, every stop offers unforgettable seasonal
                                        charm.

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
                                                gourmet dining, and personalized service,
                                                these cruises create a holiday experience
                                                that is both luxurious and memorable.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">


                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare Christmas
                                                Market itineraries, choose the perfect suite,
                                                and plan a festive European river cruise
                                                you'll treasure for years to come.
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
                                            "Compare Christmas itineraries",
                                            "Choose the best suite",
                                            "Coordinate flights",
                                            "Arrange hotels",
                                            "Plan holiday excursions",
                                            "Organize private transfers",
                                            "Recommend markets to visit",
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

export default RiversideChristmasMarketCruises;