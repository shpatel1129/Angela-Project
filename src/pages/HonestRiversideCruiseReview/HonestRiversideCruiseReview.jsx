import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Users,
    MapPin,
    Award,
    Check,
    X,
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
    Gem,
    Heart,
    Map,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Honest Riverside Cruise Review
   photography once available. Paths assume a new
   /assets/HonestRiversideCruiseReview folder. */
// import HeroImage from "../../assets/HonestRiversideCruiseReview/riverside-review-hero.jpg";
// import ShipsImage from "../../assets/HonestRiversideCruiseReview/riverside-review-ship.jpg";
// import SuiteImage from "../../assets/HonestRiversideCruiseReview/riverside-review-suite.jpg";
// import DiningImage from "../../assets/HonestRiversideCruiseReview/riverside-review-dining.jpg";
// import DiningPlateImage from "../../assets/HonestRiversideCruiseReview/riverside-review-plate.jpg";
// import WineImage from "../../assets/HonestRiversideCruiseReview/riverside-review-wine.jpg";
// import DanubeImage from "../../assets/HonestRiversideCruiseReview/riverside-review-danube.jpg";
// import RhineImage from "../../assets/HonestRiversideCruiseReview/riverside-review-rhine.jpg";
// import RhoneImage from "../../assets/HonestRiversideCruiseReview/riverside-review-rhone.jpg";
// import LoungeImage from "../../assets/HonestRiversideCruiseReview/riverside-review-lounge.jpg";
// import WorthItImage from "../../assets/HonestRiversideCruiseReview/riverside-review-evening.jpg";
// import CTAImage from "../../assets/HonestRiversideCruiseReview/riverside-review-ship-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#webpage",
            name: "Honest Riverside Cruise Review | Is Riverside Luxury Cruises Worth It?",
            url: "https://www.tripsandships.com/honest-riverside-cruise-review",
            description:
                "Read our honest Riverside Cruise review covering suites, dining, service, itineraries, excursions, pricing, pros and cons, and who should sail Riverside Luxury Cruises.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#article",
            headline: "Honest Riverside Cruise Review | Real Look at Riverside Luxury Cruises",
            description:
                "A complete, honest review of Riverside Luxury Cruises covering accommodations, dining, service, itineraries, excursions, pricing, pros and cons, and who should sail.",
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
            "@type": "Review",
            "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#review",
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
                ratingValue: "4.8",
                bestRating: "5",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#breadcrumb",
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
                    name: "Honest Riverside Cruise Review",
                    item: "https://www.tripsandships.com/honest-riverside-cruise-review",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#itemlist",
            name: "What This Honest Riverside Cruise Review Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Verdict" },
                { "@type": "ListItem", position: 2, name: "What Makes Riverside Different?" },
                { "@type": "ListItem", position: 3, name: "Suites & Accommodations" },
                { "@type": "ListItem", position: 4, name: "Dining Experience" },
                { "@type": "ListItem", position: 5, name: "Service" },
                { "@type": "ListItem", position: 6, name: "Destinations & Itineraries" },
                { "@type": "ListItem", position: 7, name: "Shore Excursions & Life Onboard" },
                { "@type": "ListItem", position: 8, name: "Pros and Cons" },
                { "@type": "ListItem", position: 9, name: "Is Riverside Worth the Price?" },
                { "@type": "ListItem", position: 10, name: "Our Overall Verdict" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside Luxury Cruises really luxurious?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside offers spacious accommodations, gourmet dining, elegant ships, and personalized service that place it firmly within the luxury river cruise category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers seeking boutique luxury and exceptional hospitality, most guests feel the experience justifies the premium pricing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside ship is the best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Each ship offers a similar luxury experience: Riverside Mozart sails Danube itineraries, Riverside Ravel sails Rhine itineraries, and Riverside Debussy sails Rhône itineraries. The best choice depends on the destinations you wish to explore.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Its attentive service and classic European itineraries make it an excellent introduction to luxury river cruising.",
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
                    name: "Are excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include guided sightseeing, with optional premium excursions available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there formal dress onboard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The atmosphere is smart casual and elegant rather than overly formal.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside family friendly?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Families are welcome, but the onboard experience is primarily designed for adults.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Riverside compare with Scenic or Uniworld?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside distinguishes itself through spacious suites, boutique hospitality, and a relaxed atmosphere. Scenic and Uniworld each offer different inclusions and onboard experiences, making the best choice dependent on your travel preferences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help compare cruise lines, explain promotions, and recommend the best itinerary and accommodations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Wi-Fi included on Riverside Luxury Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary Wi-Fi is generally available for all guests throughout the ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included in the cruise fare?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Gratuity policies can vary by booking package and itinerary. It is recommended to check your specific reservation details or consult your travel advisor.",
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
            q: "Is Riverside Luxury Cruises really luxurious?",
            a: "Yes. Riverside offers spacious accommodations, gourmet dining, elegant ships, and personalized service that place it firmly within the luxury river cruise category.",
        },
        {
            q: "Is Riverside worth the money?",
            a: "For travelers seeking boutique luxury and exceptional hospitality, most guests feel the experience justifies the premium pricing.",
        },
        {
            q: "Which Riverside ship is the best?",
            a: "Each ship offers a similar luxury experience: Riverside Mozart sails Danube itineraries, Riverside Ravel sails Rhine itineraries, and Riverside Debussy sails Rhône itineraries. The best choice depends on the destinations you wish to explore.",
        },
        {
            q: "Is Riverside good for first-time river cruisers?",
            a: "Absolutely. Its attentive service and classic European itineraries make it an excellent introduction to luxury river cruising.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
        },
        {
            q: "Are excursions included?",
            a: "Most cruises include guided sightseeing, with optional premium excursions available.",
        },
        {
            q: "Is there formal dress onboard?",
            a: "The atmosphere is smart casual and elegant rather than overly formal.",
        },
        {
            q: "Is Riverside family friendly?",
            a: "Families are welcome, but the onboard experience is primarily designed for adults.",
        },
        {
            q: "How does Riverside compare with Scenic or Uniworld?",
            a: "Riverside distinguishes itself through spacious suites, boutique hospitality, and a relaxed atmosphere. Scenic and Uniworld each offer different inclusions and onboard experiences, making the best choice dependent on your travel preferences.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can help compare cruise lines, explain promotions, and recommend the best itinerary and accommodations.",
        },
        {
            q: "Is Wi-Fi included on Riverside Luxury Cruises?",
            a: "Yes. Complimentary Wi-Fi is generally available for all guests throughout the ship.",
        },
        {
            q: "Are gratuities included in the cruise fare?",
            a: "Gratuity policies can vary by booking package and itinerary. It is recommended to check your specific reservation details or consult your travel advisor.",
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

/* ── Quick Verdict Data ───────────────────────────────────────── */
const quickVerdictData = [
    { key: "accommodations", label: "Luxury Accommodations", value: "★★★★★" },
    { key: "dining", label: "Dining", value: "★★★★★" },
    { key: "service", label: "Service", value: "★★★★★" },
    { key: "itineraries", label: "Itineraries", value: "★★★★★" },
    { key: "value", label: "Value", value: "★★★★☆" },
    { key: "entertainment", label: "Entertainment", value: "★★★★☆" },
    { key: "overall", label: "Overall Experience", value: "★★★★★" },
];

/* ── Destinations & Itineraries Data ───────────────────────────── */
const riverItineraries = [
    {
        id: "danube",
        title: "The Danube",
        badge: "Danube",
        icon: Landmark,
        // image: DanubeImage,
        desc: "Riverside's Danube sailings balance grand imperial cities with the quiet charm of the Wachau Valley, making it one of the line's most popular classic European itineraries.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Budapest", "Vienna", "Bratislava", "Passau", "Wachau Valley"],
            },
        ],
    },
    {
        id: "rhine",
        title: "The Rhine",
        badge: "Rhine",
        icon: Building2,
        // image: RhineImage,
        desc: "Sailing the Rhine takes guests past storybook riverside villages, vineyard-covered hillsides, and some of Europe's most walkable historic city centers.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Amsterdam", "Cologne", "Strasbourg", "Basel", "Rüdesheim"],
            },
        ],
    },
    {
        id: "rhone",
        title: "The Rhône",
        badge: "Rhône",
        icon: Wine,
        // image: RhoneImage,
        desc: "Riverside's Rhône itineraries lean into Provençal light, lavender-scented countryside, and some of France's most celebrated vineyards.",
        columns: [
            {
                label: "Ports of call include:",
                items: ["Lyon", "Avignon", "Arles", "Provence", "Rhône Valley vineyards"],
            },
        ],
    },
];

/* ── Pros Data ─────────────────────────────────────────────────── */
const prosData = [
    {
        key: "suites",
        icon: Home,
        title: "Spacious Suites",
        range: "Accommodations",
        items: ["Among the largest accommodations available in European river cruising"],
    },
    {
        key: "boutique",
        icon: Users,
        title: "Boutique Experience",
        range: "Atmosphere",
        items: ["A smaller guest count creates a quieter, more personalized atmosphere"],
    },
    {
        key: "dining",
        icon: Utensils,
        title: "Outstanding Dining",
        range: "Cuisine",
        items: ["Fresh ingredients, regional cuisine, and consistently high-quality meals"],
    },
    {
        key: "service",
        icon: Star,
        title: "Excellent Service",
        range: "Hospitality",
        items: ["Attentive hospitality that feels genuine rather than scripted"],
    },
    {
        key: "itineraries",
        icon: MapPin,
        title: "Beautiful Itineraries",
        range: "Destinations",
        items: ["Classic European rivers with thoughtfully planned ports of call"],
    },
    {
        key: "ships",
        icon: Ship,
        title: "Elegant Ships",
        range: "Design",
        items: ["Modern interiors that feel sophisticated without being overly formal"],
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const HonestRiversideCruiseReview = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreSuites, setReadMoreSuites] = useState(false);
    const [activeRiver, setActiveRiver] = useState("danube");

    const currentRiver =
        riverItineraries.find((d) => d.id === activeRiver) || riverItineraries[0];

    const ActiveIcon = currentRiver.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Honest Riverside Cruise Review | Is Riverside Luxury Cruises Worth It?</title>
                <meta name="title" content="Honest Riverside Cruise Review | Real Look at Riverside Luxury Cruises" />
                <meta
                    name="description"
                    content="Read our honest Riverside Cruise review covering suites, dining, service, itineraries, excursions, pricing, pros and cons, and who should sail Riverside Luxury Cruises."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Honest Riverside Cruise Review</h1>

                    <p>
                        If you're considering a Riverside Luxury Cruise, chances
                        are you're looking for more than just another European
                        vacation — you want exceptional service, elegant
                        accommodations, outstanding cuisine, and an experience
                        that truly feels luxurious.
                    </p>

                    {readMore && (
                        <p>
                            Riverside Luxury Cruises has quickly earned attention
                            for its boutique approach to river cruising, offering
                            spacious suites, thoughtfully designed ships, and
                            carefully curated itineraries along some of Europe's
                            most beautiful rivers. But is Riverside really worth
                            the premium price? This honest review looks beyond the
                            marketing to explore what Riverside does exceptionally
                            well, where it may not be the right fit, and which
                            travelers are most likely to enjoy the experience.
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
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK VERDICT ────────────────────────────────────────────── */}
            <section className="adg-section" id="quick-verdict" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Verdict</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Overall Rating: <strong>★★★★★</strong>
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickVerdictData.map((row) => (
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

            {/* ── WHAT MAKES RIVERSIDE DIFFERENT ───────────────────────────── */}
            <section
                className="ugt-components-section"
                id="what-makes-riverside-different"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">What Makes Riverside Different?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage}
                                        alt="Riverside Luxury Cruises ship sailing along a European river"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Unlike many river cruise lines that focus on
                                    maximizing passenger capacity,{" "}
                                    <strong>Riverside emphasizes spaciousness,
                                        comfort, and personalized service</strong>.
                                    Rather than creating a busy onboard schedule,
                                    Riverside allows the destinations to take
                                    center stage. The experience feels closer to
                                    staying at a luxury boutique hotel that happens
                                    to travel through Europe.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Guests enjoy:</span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Larger suites",
                                            "Relaxed atmosphere",
                                            "Fine dining",
                                            "Personalized hospitality",
                                            "Carefully planned itineraries",
                                            "Elegant contemporary interiors",
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
                                        Start Planning Your Riverside Cruise
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LIFE ONBOARD ──────────────────────────────────────────────── */}
            <section className="rrd-provence-section" id="life-onboard">
                <div className="rrd-provence-container">
                    <div className="rrd-provence-header">
                        <h2 className="rrd-provence-title">Life Onboard</h2>
                        <div className="rrd-provence-accent"></div>
                        <p className="rrd-provence-intro">
                            Riverside is intentionally relaxing. If you're looking
                            for Broadway-style entertainment or casinos, this
                            isn't the cruise line for you — instead, the focus is
                            on meaningful travel experiences.
                        </p>
                    </div>

                    <div className="rrd-provence-grid">
                        {[
                            { label: "Scenic cruising", icon: Waves },
                            { label: "Live piano music", icon: Star },
                            { label: "Destination lectures", icon: Landmark },
                            { label: "Cocktail hours", icon: Wine },
                            { label: "Wine tastings", icon: Wine },
                            { label: "Comfortable lounges", icon: Home },
                            { label: "Panoramic observation areas", icon: Camera },
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

                    <p className="rrd-provence-intro" style={{ marginTop: "24px" }}>
                        Our Rating: ★★★★☆
                    </p>
                </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ──────────────────────────────────── */}
            <section className="luc-why-section" id="suites-and-accommodations">
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
                                marginTop: "105px",
                            }}
                        >
                            <img
                                // src={SuiteImage}
                                alt="Spacious suite aboard a Riverside Luxury Cruises ship"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Suites &amp; Accommodations</h2>
                        <div className="aac-accent-line aac-accent-white"></div>
                        <p className="luc-why-intro">
                            One of Riverside's biggest strengths is its
                            accommodations. The suites are among the largest
                            available on European rivers — unlike many river
                            cruise cabins that feel compact, Riverside's
                            accommodations offer enough space to truly relax.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Premium bath amenities",
                                "Comfortable sitting areas",
                                "Luxury linens",
                                "River views",
                                "Climate control",
                                "Modern design",
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

                        <p className="luc-why-intro" style={{ marginTop: "20px" }}>
                            Our Rating: ★★★★★
                        </p>


                    </div>
                </div>
            </section>

                  {/* ── SERVICE & SHORE EXCURSIONS ───────────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="service-and-excursions">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Service &amp; Shore Excursions</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Two of the areas where Riverside consistently earns
                            its luxury reputation.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Service */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Users size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Service</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Service is one of the areas where Riverside
                                    truly excels. Because the ships carry
                                    relatively few guests, crew members often
                                    learn guest preferences during the voyage —
                                    that personal touch creates a warm and
                                    welcoming atmosphere.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        The crew delivers:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Friendly hospitality",
                                            "Attention to detail",
                                            "Professional service",
                                            "Personalized interactions",
                                            "Quick response times",
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
                                            Our Rating: ★★★★★
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shore Excursions */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Compass size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Shore Excursions</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Included excursions are well organized and
                                    destination-focused, with optional premium
                                    excursions available for travelers seeking
                                    more specialized experiences.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Included excursions typically feature:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Historic walking tours",
                                            "Cathedral visits",
                                            "Local markets",
                                            "Wine tastings",
                                            "Museum visits",
                                            "Cultural experiences",
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
                                            Our Rating: ★★★★☆
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING EXPERIENCE ─────────────────────────────────────────── */}
            <section className="rlc-inc-section" id="dining-experience">
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Dining Experience</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p className="rlc-inc-intro" style={{ margin: "0px", marginBottom: "30px" }}>
                                Dining consistently ranks among Riverside's
                                strongest features. Every meal emphasizes quality
                                over quantity, and rather than offering dozens of
                                restaurants, Riverside focuses on delivering
                                exceptional quality in every meal.
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Fresh regional ingredients",
                                    "Gourmet presentation",
                                    "Seasonal menus",
                                    "Excellent wines",
                                    "Fresh pastries",
                                    "Local specialties",
                                    "Multi-course dinners",
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
                                    Our Rating: ★★★★★
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={DiningImage}
                                        alt="Gourmet dining aboard a Riverside Luxury Cruises ship"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={DiningPlateImage}
                                            alt="Gourmet plated course served onboard"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={WineImage}
                                            alt="Regional wine pairing aboard Riverside"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      

            {/* ── DESTINATIONS & ITINERARIES ───────────────────────────────── */}
            <section className="luc-destinations-section" id="destinations-and-itineraries">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Destinations &amp; Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Riverside focuses on some of Europe's most iconic
                            rivers, balancing famous landmarks with charming
                            smaller towns. Seasonal cruises — including Christmas
                            Markets, Tulip Cruises, and wine-themed itineraries —
                            are also available.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {riverItineraries.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeRiver === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
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
                                    // src={currentRiver.image}
                                    alt={currentRiver.title}
                                    className="luc-dest-img"
                                />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentRiver.title}</span>
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
                        </div>
                    </div>
                    {/* 
                    <p className="luc-destinations-intro" style={{ marginTop: "24px" }}>
                        Our Rating: ★★★★★
                    </p> */}
                </div>
            </section>

                     {/* ── WHO MIGHT PREFER ANOTHER CRUISE LINE ─────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="who-might-prefer-another-line">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Might Prefer Another Cruise Line?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Ocean cruises generally offer more onboard
                            entertainment, while Riverside focuses on the
                            destinations themselves.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "Casinos",
                            "Large theatrical productions",
                            "Extensive nightlife",
                            "Water parks",
                            "Children's clubs",
                            "Budget-friendly vacations",
                        ].map((label, i) => (
                            <div key={i} className="adg-c-overview-item">
                                <span className="adg-c-overview-icon">
                                    <X size={16} strokeWidth={2.5} />
                                </span>
                                <span className="adg-c-overview-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── WHO WILL LOVE RIVERSIDE? ───────────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="adg-container">
                    <div className="adg-section-header" style={{ marginBottom: "60px" }}>
                        <h2 className="adg-h2">Who Will Love Riverside?</h2>
                        <div className="Asc-accent-line"></div>

                        <div
                            className="adg-split-layout"
                            style={{ alignItems: "flex-start" }}
                        >
                            <div className="adg-content-card-side">
                                <img
                                    // src={ConciergeImage}
                                    alt="Couples enjoying a luxury Riverside European river cruise"
                                    className="adg-side-image"
                                    style={{ height: "55vh", border: '1px solid' }}
                                />

                                <div className="adg-info-card">
                                    <div className="adg-card-meta">
                                        <Heart size={28} />
                                        <span className="adg-meta-label">
                                            Luxury European River Cruising
                                        </span>
                                    </div>

                                    <p className="adg-card-lead">
                                        Riverside is ideal for travelers who appreciate boutique luxury,
                                        spacious accommodations, gourmet dining, and relaxed travel. Many
                                        guests describe the experience as refined, peaceful, and exceptionally comfortable.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-list-side">
                                {[
                                    {
                                        title: "Boutique Luxury",
                                        icon: <Gem size={20} />,
                                    },
                                    {
                                        title: "Spacious Accommodations",
                                        icon: <Ship size={20} />,
                                    },
                                    {
                                        title: "Gourmet Dining",
                                        icon: <Utensils size={20} />,
                                    },
                                    {
                                        title: "Personalized Service",
                                        icon: <Heart size={20} />,
                                    },
                                    {
                                        title: "European Culture",
                                        icon: <Landmark size={20} />,
                                    },
                                    {
                                        title: "Scenic Cruising",
                                        icon: <Map size={20} />,
                                    },
                                    {
                                        title: "Fine Wines",
                                        icon: <Wine size={20} />,
                                    },
                                    {
                                        title: "Relaxed Travel",
                                        icon: <Compass size={20} />,
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="adg-list-item-card">
                                        <div className="adg-list-item-icon">{item.icon}</div>
                                        <h4 className="adg-list-item-label">{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ────────────────────────────────────────────── */}
            <section className="hrc-pros-cons-section" id="pros-and-cons">
                <div className="hrc-pros-cons-container">
                    <div className="hrc-pros-cons-header">
                        <h2 className="hrc-pros-cons-title">Pros &amp; Cons</h2>
                        <div className="hrc-pros-cons-accent"></div>
                        <p className="hrc-pros-cons-intro">
                            An honest comparison of the key advantages and considerations when booking a Riverside Luxury Cruise.
                        </p>
                    </div>

                    <div className="hrc-pros-cons-grid">
                        {/* Pros Column */}
                        <div className="hrc-column hrc-pros-column">
                            <h3 className="hrc-column-title">
                                <Check size={20} className="hrc-title-icon hrc-pro-icon" />
                                Pros
                            </h3>
                            <div className="hrc-items-list">
                                {[
                                    {
                                        title: "Spacious Suites",
                                        desc: "Among the largest accommodations available in European river cruising."
                                    },
                                    {
                                        title: "Boutique Experience",
                                        desc: "A smaller guest count creates a quieter, more personalized atmosphere."
                                    },
                                    {
                                        title: "Outstanding Dining",
                                        desc: "Fresh ingredients, regional cuisine, and consistently high-quality meals."
                                    },
                                    {
                                        title: "Excellent Service",
                                        desc: "Attentive hospitality that feels genuine rather than scripted."
                                    },
                                    {
                                        title: "Beautiful Itineraries",
                                        desc: "Classic European rivers with thoughtfully planned ports of call."
                                    },
                                    
                                ].map((item, i) => (
                                    <div key={i} className="hrc-item-card">
                                        <h4 className="hrc-item-title">{item.title}</h4>
                                        <p className="hrc-item-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cons Column */}
                        <div className="hrc-column hrc-cons-column">
                            <h3 className="hrc-column-title">
                                <X size={18} className="hrc-title-icon hrc-con-icon" />
                                Cons
                            </h3>
                            <div className="hrc-items-list">
                                {[
                                    {
                                        title: "Premium Pricing",
                                        desc: "Riverside is positioned firmly within the luxury market."
                                    },
                                    {
                                        title: "Limited Fleet",
                                        desc: "With only a few ships, departure dates and itineraries are more limited than larger competitors."
                                    },
                                    {
                                        title: "Minimal Nightlife",
                                        desc: "Evenings are relaxed rather than entertainment-focused."
                                    },
                                    {
                                        title: "Fewer Dining Venues",
                                        desc: "River ships naturally offer fewer restaurant choices than ocean cruises."
                                    },
                                    {
                                        title: "Adult-Oriented Experience",
                                        desc: "Families are welcome, but the onboard experience is primarily designed for adults."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="hrc-item-card">
                                        <h4 className="hrc-item-title">{item.title}</h4>
                                        <p className="hrc-item-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS RIVERSIDE WORTH THE PRICE ─────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-the-price" style={{backgroundColor: 'var(--bg-soft)'}}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Riverside Worth the Price?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                For travelers who value exceptional service,
                                spacious suites, gourmet cuisine, boutique
                                hospitality, and relaxed luxury, Riverside
                                represents excellent value.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The experience emphasizes quality over
                                    quantity, making it especially appealing to
                                    travelers who appreciate refined luxury
                                    instead of flashy amenities.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={LoungeImage}
                                    alt="Elegant evening lounge aboard a Riverside Luxury Cruises ship"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>
                                <div className="rlc-lc-worth-media-badge">
                                    <span>Boutique • Elegant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR OVERALL VERDICT ──────────────────────────────────────── */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }} id="our-overall-verdict">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Our Overall Verdict</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            After evaluating the accommodations, dining, service,
                            itineraries, and overall guest experience, Riverside
                            Luxury Cruises stands out as one of the strongest
                            boutique luxury river cruise options in Europe.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Check size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">We Recommend Riverside If You Want:</h3>
                                </div>

                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "A luxury boutique experience",
                                            "Exceptional dining",
                                            "Spacious accommodations",
                                            "Personalized service",
                                            "Beautiful European itineraries",
                                            "Peaceful, sophisticated travel",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <X size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">You May Want Another Cruise Line If You Prefer:</h3>
                                </div>

                                <div className="azs-dining-body">
                                    <ul className="azs-dining-list">
                                        {[
                                            "Large ships",
                                            "Extensive nightlife",
                                            "Family-focused entertainment",
                                            "Casinos",
                                            "Budget travel",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Minus size={14} className="azs-dining-list-icon" />
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

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
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
                                Let an Expert Handle Every Detail
                            </h3>
                            <p className="Avr-planning-left-body">
                                Booking with an experienced luxury travel advisor
                                can enhance your Riverside experience by helping
                                you compare itineraries, choose the best sailing
                                season, select the ideal suite, arrange flights,
                                coordinate hotels, and plan private transfers — an
                                advisor can also help determine whether Riverside
                                is the best fit compared with other luxury river
                                cruise lines.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional planning helps ensure your
                                    Riverside cruise is tailored to your travel
                                    style.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Waves size={18} />, label: "Compare itineraries" },
                                    { icon: <Sun size={18} />, label: "Choose the best sailing season" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Arrange flights" },
                                    { icon: <Hotel size={18} />, label: "Coordinate hotels" },
                                    { icon: <Anchor size={18} />, label: "Plan private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend excursions" },
                                    { icon: <BadgePercent size={18} />, label: "Explain available promotions" },
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
                            Riverside Luxury Cruise.
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
                        alt="Riverside ship sailing along a European river at dusk"
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
                                    One of Europe's Strongest <br /> Boutique Luxury Cruise Lines
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Rather than trying to compete through
                                        onboard attractions or entertainment,
                                        Riverside focuses on delivering what
                                        luxury travelers often value most:
                                        spacious accommodations, exceptional
                                        hospitality, gourmet cuisine, and
                                        unforgettable European destinations.

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
                                                If your ideal vacation includes
                                                relaxing scenic cruising,
                                                personalized service, elegant
                                                surroundings, and immersive
                                                cultural experiences, Riverside is
                                                an outstanding choice.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare
                                                Riverside with other leading
                                                luxury river cruise lines,
                                                recommend the right itinerary,
                                                select the ideal suite, and
                                                create a customized European
                                                river cruise tailored to your
                                                travel style.
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
                                            "Compare Riverside with other luxury river cruise lines",
                                            "Recommend the right itinerary",
                                            "Select the ideal suite",
                                            "Arrange flights",
                                            "Coordinate hotels",
                                            "Plan private transfers",
                                            "Recommend excursions",
                                            "Explain available promotions",
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

export default HonestRiversideCruiseReview;