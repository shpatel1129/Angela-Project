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
    Sun,
    Wallet,
    Plane,
    Bell,
    Bike,
    Sofa,
    Wind,
    AlertCircle,
    Gem,
    HeartHandshake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/#webpage",
            name: "Scenic vs Riverside Luxury Cruises | Which Is Better?",
            url: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/",
            description:
                "Scenic vs Riverside Luxury Cruises: compare suites, ships, dining, service, inclusions, excursions, itineraries, pricing, and overall luxury to find the right river cruise for you.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/#article",
            headline: "Scenic vs Riverside Luxury Cruises: Which River Cruise Is Better?",
            description:
                "A complete comparison of Scenic and Riverside Luxury Cruises, including suites, balconies, dining, service, excursions, inclusions, ships, price, and who each line is best for.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
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
                    name: "Scenic vs Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/#itemlist",
            name: "Scenic vs Riverside Luxury Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "The Biggest Difference" },
                { "@type": "ListItem", position: 3, name: "Who Is Each Line Best For?" },
                { "@type": "ListItem", position: 4, name: "Suites" },
                { "@type": "ListItem", position: 5, name: "Balcony Experience" },
                { "@type": "ListItem", position: 6, name: "Dining" },
                { "@type": "ListItem", position: 7, name: "Service & Excursions" },
                { "@type": "ListItem", position: 8, name: "What's Included & Price" },
                { "@type": "ListItem", position: 9, name: "Ships" },
                { "@type": "ListItem", position: 10, name: "Couples, Families & Solo Travelers" },
                { "@type": "ListItem", position: 11, name: "Pros & Cons" },
                { "@type": "ListItem", position: 12, name: "Our Verdict" },
                { "@type": "ListItem", position: 13, name: "FAQ" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic better than Riverside Luxury Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic may be better for travelers who prioritize ultra-luxury, all-inclusive travel, personalized service and included experiences. Riverside can be better for travelers who prioritize spacious suites and an intimate luxury atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside more luxurious than Scenic?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both operate at the luxury end of river cruising. Scenic emphasizes an ultra-luxury, highly inclusive model, while Riverside places particular emphasis on spacious accommodations, dining and personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better suites, Scenic or Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer spacious luxury accommodations. Scenic is especially distinctive for its Sun Lounge concept and Butler Service on applicable suites, while Riverside is particularly appealing to travelers who prioritize overall suite space.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better balconies, Scenic or Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic's Sun Lounge is one of its defining suite features and provides flexible indoor/outdoor river viewing. Riverside focuses strongly on spacious suite living. The best choice depends on whether balcony flexibility or overall accommodation space matters more.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is more all-inclusive, Scenic or Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic has a particularly strong all-inclusive positioning. Its current river product includes dining, premium beverages and destination experiences among its core features, although exact inclusions vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better food, Scenic or Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer strong luxury dining. Scenic provides multiple dining settings and included premium beverages, while Riverside appeals to travelers seeking an intimate luxury dining experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer strong destination experiences. Scenic has its Freechoice and Scenic Enrich programs on applicable itineraries. The exact itinerary should be compared before choosing a cruise line.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Scenic may be preferable for couples who want a highly inclusive luxury vacation, while Riverside can be especially appealing to couples who prioritize spacious suites and an intimate atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for a honeymoon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Either can work exceptionally well. Compare the suite, itinerary, dining, included experiences and pre/post-cruise arrangements before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic can be particularly easy for first-time luxury cruisers because of its highly inclusive approach. Riverside is also a strong choice for travelers who want spacious accommodations and personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has smaller ships, Scenic or Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic's European Space-Ships accommodate up to 163 guests. Riverside's individual ships vary, so travelers should compare the exact ship for their sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both emphasize personalized service. Scenic explicitly highlights its dedicated crew and \"Nth Degree\" service philosophy. Riverside is also designed around an intimate luxury experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic more expensive than Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There is no universal price winner. Fares vary by ship, suite, itinerary, season and departure date. Compare the complete vacation cost and inclusions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for a luxury Danube cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both can be excellent choices. Scenic may appeal to travelers seeking a highly inclusive luxury experience, while Riverside can be attractive to travelers who prioritize spacious suites and intimate luxury.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book Scenic or Riverside through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A luxury travel advisor can compare the exact ships, suites, itineraries, promotions, inclusions and pre- and post-cruise arrangements. This is particularly useful when the difference between two luxury brands is subtle.",
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
            q: "Is Scenic better than Riverside Luxury Cruises?",
            a: "Scenic may be better for travelers who prioritize ultra-luxury, all-inclusive travel, personalized service and included experiences. Riverside can be better for travelers who prioritize spacious suites and an intimate luxury atmosphere.",
        },
        {
            q: "Is Riverside more luxurious than Scenic?",
            a: "Both operate at the luxury end of river cruising. Scenic emphasizes an ultra-luxury, highly inclusive model, while Riverside places particular emphasis on spacious accommodations, dining and personalized service.",
        },
        {
            q: "Which has better suites, Scenic or Riverside?",
            a: "Both offer spacious luxury accommodations. Scenic is especially distinctive for its Sun Lounge concept and Butler Service on applicable suites, while Riverside is particularly appealing to travelers who prioritize overall suite space.",
        },
        {
            q: "Which has better balconies, Scenic or Riverside?",
            a: "Scenic's Sun Lounge is one of its defining suite features and provides flexible indoor/outdoor river viewing. Riverside focuses strongly on spacious suite living. The best choice depends on whether balcony flexibility or overall accommodation space matters more.",
        },
        {
            q: "Which is more all-inclusive, Scenic or Riverside?",
            a: "Scenic has a particularly strong all-inclusive positioning. Its current river product includes dining, premium beverages and destination experiences among its core features, although exact inclusions vary by itinerary.",
        },
        {
            q: "Which has better food, Scenic or Riverside?",
            a: "Both offer strong luxury dining. Scenic provides multiple dining settings and included premium beverages, while Riverside appeals to travelers seeking an intimate luxury dining experience.",
        },
        {
            q: "Which has better excursions?",
            a: "Both offer strong destination experiences. Scenic has its Freechoice and Scenic Enrich programs on applicable itineraries. The exact itinerary should be compared before choosing a cruise line.",
        },
        {
            q: "Which is better for couples?",
            a: "Both are excellent. Scenic may be preferable for couples who want a highly inclusive luxury vacation, while Riverside can be especially appealing to couples who prioritize spacious suites and an intimate atmosphere.",
        },
        {
            q: "Which is better for a honeymoon?",
            a: "Either can work exceptionally well. Compare the suite, itinerary, dining, included experiences and pre/post-cruise arrangements before booking.",
        },
        {
            q: "Which is better for first-time river cruisers?",
            a: "Scenic can be particularly easy for first-time luxury cruisers because of its highly inclusive approach. Riverside is also a strong choice for travelers who want spacious accommodations and personalized service.",
        },
        {
            q: "Which has smaller ships, Scenic or Riverside?",
            a: "Scenic's European Space-Ships accommodate up to 163 guests. Riverside's individual ships vary, so travelers should compare the exact ship for their sailing.",
        },
        {
            q: "Which has better service?",
            a: "Both emphasize personalized service. Scenic explicitly highlights its dedicated crew and \"Nth Degree\" service philosophy. Riverside is also designed around an intimate luxury experience.",
        },
        {
            q: "Is Scenic more expensive than Riverside?",
            a: "There is no universal price winner. Fares vary by ship, suite, itinerary, season and departure date. Compare the complete vacation cost and inclusions.",
        },
        {
            q: "Which is better for a luxury Danube cruise?",
            a: "Both can be excellent choices. Scenic may appeal to travelers seeking a highly inclusive luxury experience, while Riverside can be attractive to travelers who prioritize spacious suites and intimate luxury.",
        },
        {
            q: "Should I book Scenic or Riverside through a travel advisor?",
            a: "A luxury travel advisor can compare the exact ships, suites, itineraries, promotions, inclusions and pre- and post-cruise arrangements. This is particularly useful when the difference between two luxury brands is subtle.",
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

/* ── Quick Answer Comparison Table Data ────────────────────────── */
const quickAnswerRows = [
    { key: "positioning", cat: "Overall positioning", scenic: "Ultra-luxury", avalon: "Luxury" },
    { key: "inclusive", cat: "All-inclusive approach", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "suites", cat: "Suites", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "space", cat: "Cabin space", scenic: "Excellent", avalon: "Excellent" },
    { key: "balcony", cat: "Balcony experience", scenic: "Scenic Sun Lounge", avalon: "Suite-focused outdoor space" },
    { key: "service", cat: "Personalized service", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "dining", cat: "Dining", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "excursions", cat: "Excursions", scenic: "Strong included program", avalon: "Strong destination focus" },
    { key: "atmosphere", cat: "Ship atmosphere", scenic: "Contemporary ultra-luxury", avalon: "Intimate luxury" },
    { key: "couples", cat: "Couples", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "firsttime", cat: "First-time luxury cruisers", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "luxury", cat: "Luxury travelers", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "bestfor", cat: "Best for", scenic: "Inclusive luxury", avalon: "Space + personalized luxury" },
];

/* ── Why Choose Scenic / Riverside — Overview Data ──────────────────── */
const scenicTraits = [
    "Ultra-luxury positioning",
    "Personalized service",
    "Included beverages",
    "Curated excursions",
    "Scenic Enrich experiences",
    "Spacious suites",
    "Butler service",
    "A contemporary luxury ship",
    "A highly inclusive vacation",
];

const avalonTraits = [
    "Large, comfortable suites",
    "Luxury service",
    "High-end dining",
    "An intimate atmosphere",
    "A boutique-style experience",
    "Destination-focused travel",
    "A less standardized feeling than a large cruise brand",
];


export default function ScenicVsRiverside() {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic vs Riverside Luxury Cruises: Which River Cruise Is Better?</title>
                <meta name="title" content="Scenic vs Riverside Luxury Cruises | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Scenic vs Riverside Luxury Cruises: compare luxury, cabins, balconies, dining, excursions, inclusions, service, ships, itineraries, pricing and who each river cruise line is best for."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic vs Riverside Luxury Cruises: Which River Cruise Is Better?</h1>

                    <p>
                        Scenic and Riverside Luxury Cruises are both compelling choices for travelers looking for an upscale European river cruise, but they deliver luxury in different ways.
                    </p>
                    <p>
                        Scenic has built its river-cruise identity around an ultra-luxury, highly inclusive experience, with purpose-built Space-Ships, personalized service, spacious suites, and included experiences. Scenic's European Space-Ships accommodate up to 163 guests, while Scenic emphasizes all-inclusive dining, beverages, excursions and personalized service.
                    </p>
                   

                    {readMore && (
                        <>
                         <p>
                        Riverside takes a different approach, with a particularly strong emphasis on large accommodations, elevated dining, personalized service, and a more intimate luxury-ship feel.
                    </p>
                            <p>
                                That makes this a particularly interesting comparison for travelers who have already narrowed their choices to the luxury end of river cruising.
                            </p>
                            <p>
                                The right question isn't simply:
                                <br />
                                Which cruise line is better?
                                <br />
                                It's:
                                <br />
                                Which luxury river cruise gives you the experience you value most?
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
                            Start Planning Your River Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER COMPARISON TABLE ─────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="quick-answer">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Answer: Scenic vs Riverside</h2>
                        <div className="adg-accent-line"></div>

                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Scenic</th>
                                    <th>Riverside Luxury Cruises</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickAnswerRows.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.cat}</strong>
                                        </td>
                                        <td>{row.scenic}</td>
                                        <td>{row.avalon}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="sfe-firsttime-footer-box" style={{ marginTop: "32px" }}>
                        <p className="sfe-firsttime-callout-text">Bottom line</p>
                        <p className="sfe-firsttime-conclusion">
                            Choose Scenic if you want a highly inclusive
                            ultra-luxury experience with a strong focus on
                            included experiences and personalized service.
                            Choose Riverside if you place exceptional
                            importance on spacious accommodations, intimate
                            luxury, dining, and personalized attention.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── THE BIGGEST DIFFERENCE ────────────────────────────────── */}
            <section className="sva-ships-section" id="biggest-difference" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">The Biggest Difference Between Scenic and Riverside</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead" style={{ marginTop: "16px" }}>
                            The difference is subtle because both brands are competing for travelers who want a luxury river cruise rather than a mainstream river vacation.
                        </p>
                        <p className="sva-section-lead" style={{ marginTop: "8px", fontWeight: "500", color: "var(--navy)" }}>
                            The distinction becomes clearer when you look at the complete experience.
                        </p>
                    </div>

                    <div className="sva-ships-grid">
                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Sparkles size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Scenic Ultra-Luxury</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Scenic Emphasizes</h3>
                                <ul className="sva-ships-list" style={{ marginBottom: "24px" }}>
                                    {[
                                        "Ultra-luxury positioning",
                                        "All-inclusive travel",
                                        "Scenic Space-Ships",
                                        "Sun Lounge suites",
                                        "Butler service",
                                        "Included beverages",
                                        "Curated excursions",
                                        "Scenic Enrich experiences",
                                        "Personalized service"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "15px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Scenic explicitly describes its European Space-Ships as ultra-luxury vessels carrying up to 163 guests, with suites, personalized service, included beverages, dining and destination experiences.
                                </p>
                            </div>
                        </div>

                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Gem size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Riverside Boutique Luxury</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Riverside Emphasizes</h3>
                                <ul className="sva-ships-list" style={{ marginBottom: "24px" }}>
                                    {[
                                        "Spacious suites",
                                        "Intimate ship experience",
                                        "Luxury dining",
                                        "Personalized service",
                                        "Destination-focused travel",
                                        "Premium accommodations",
                                        "A more boutique-style atmosphere"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "15px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    For travelers choosing between these brands, the suite, itinerary and inclusions can ultimately matter more than the brand name.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO IS EACH LINE BEST FOR? ────────────────────────────── */}
            <section
                className="adg-section"
                id="who-is-it-for"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">What Kind of Traveler Is Each Line Best For?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="adgs-grid1">
                        <div className="adg-card">
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
                                        <Sparkles size={20} strokeWidth={1.6} />
                                    </span>
                                    <span className="adg-card-eyebrow-label">Scenic</span>
                                </div>
                            </div>
                            <div className="adg-card-body">
                                <h3 className="adg-card-title1">Scenic Is Best For Travelers Who Want:</h3>
                                <ul className="adg-card-list">
                                    {scenicTraits.map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro" style={{ marginTop: "12px" }}>
                                    Especially attractive for couples,
                                    luxury travelers, milestone
                                    celebrations, and travelers who don't
                                    want to keep paying extra for every
                                    component of their vacation.
                                </p>
                            </div>
                            <div className="adg-card-bar"></div>
                        </div>

                        <div className="adg-card">
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
                                        <Home size={20} strokeWidth={1.6} />
                                    </span>
                                    <span className="adg-card-eyebrow-label">Riverside Luxury Cruises</span>
                                </div>
                            </div>
                            <div className="adg-card-body">
                                <h3 className="adg-card-title1">Riverside Is a Strong Fit If You Want:</h3>
                                <ul className="adg-card-list">
                                    {avalonTraits.map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro" style={{ marginTop: "12px" }}>
                                    Particularly appealing to travelers who
                                    want spacious accommodations,
                                    personalized attention, luxury dining,
                                    intimate surroundings, and a premium
                                    onboard experience.
                                </p>
                            </div>
                            <div className="adg-card-bar"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Not Sure Which Line Fits Your Travel Style?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare Scenic and Riverside sailings and find the perfect fit for your trip.
                        </p>
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Contact Angela Hughes
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CABINS COMPARISON ──────────────────────────────────── */}
            <section className="sfe-cabins-section" id="cabins">
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "32px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Riverside Suites</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">
                            For luxury river cruisers, the suite can be one
                            of the most important factors in the decision.
                            Neither brand treats the cabin as simply
                            somewhere to sleep.
                        </p>
                    </div>

                    <div className="sfe-cabins-grid">
                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Scenic Suites</span>
                            </div>
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Scenic Suites</h3>
                                <p className="sfe-cabins-text">
                                    Scenic's suites are a major part of its
                                    luxury proposition. Depending on
                                    category, features can include:
                                </p>
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Spacious living areas",
                                        "Scenic Sun Lounge",
                                        "Queen-size Scenic Slumber Bed",
                                        "Nightly turndown",
                                        "Complimentary minibar",
                                        "Spacious bathrooms",
                                        "Butler service",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro">
                                    Best for travelers who want a
                                    sophisticated, highly serviced suite
                                    experience.
                                </p>
                            </div>
                        </div>

                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Riverside Suites</span>
                            </div>
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Riverside Suites</h3>
                                <p className="sfe-cabins-text">
                                    Riverside is particularly appealing if
                                    space is your primary cabin priority.
                                    Its suite philosophy places
                                    considerable emphasis on creating
                                    comfortable residential-style
                                    accommodations rather than compact
                                    cruise cabins.
                                </p>
                                <span className="sfe-cabins-img-label" style={{ display: "block", marginBottom: "8px" }}>
                                    Particularly attractive for:
                                </span>
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Travelers who want a residential feel",
                                        "Travelers who spend a lot of time in their cabin",
                                        "Couples",
                                        "Space + intimate luxury enthusiasts",
                                        "Travelers who prioritize cabin space",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro">
                                    Best for travelers who expect their
                                    river cruise suite to feel like a
                                    genuine part of the luxury experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER SUITES ────────────────────────────── */}
            <section className="sva-info-section" id="better-suites" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Which Has Better Suites?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is one category where there is no universal winner.</p>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div className="sva-choice-grid" style={{ marginBottom: "24px" }}>
                            <div className="sva-choice-item">
                                <strong>Choose Scenic if you value:</strong> Service + Sun Lounge + all-inclusive luxury
                            </div>
                            <div className="sva-choice-item">
                                <strong>Choose Riverside if you value:</strong> Space + residential feel + intimate luxury
                            </div>
                        </div>

                        <p className="sfe-dining-noimg-text" style={{ fontStyle: "italic", color: "var(--text-muted)", borderLeft: "3px solid var(--navy-light)", paddingLeft: "16px", margin: 0 }}>
                            For a specific sailing, compare the exact suite category, not just the brand.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BALCONY COMPARISON ─────────────────────────────────── */}
            <section className="sva-balcony-section" id="balconies">
                <div className="sva-balcony-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside Balcony Experience</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Balcony design can dramatically affect how much you enjoy a river cruise.
                        </p>
                    </div>

                    <div className="sva-balcony-grid">
                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Sun size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Scenic Sun Lounge</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Scenic: Sun Lounge</h3>
                                <p className="sva-balcony-card-text">
                                    Scenic's signature Sun Lounge can transform the balcony area, giving travelers an adaptable indoor/outdoor viewing space — particularly useful when the weather is cool, it's raining, or you simply want privacy.
                                </p>
                            </div>
                        </div>

                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Home size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Riverside Suite Living Space</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Riverside: Suite Living Space</h3>
                                <p className="sva-balcony-card-text">
                                    Riverside's suite design focuses heavily on comfortable living space and river views, rather than a single signature balcony concept.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box">
                        <h4 className="sva-choice-title">Which should you choose?</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Scenic wins</strong> for balcony flexibility.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Riverside</strong> can be more appealing if overall suite space is your top priority.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── FIRST-TIME RIVER CRUISERS ──────────────────────────── */}
            <section className="sva-info-section" id="first-time-cruisers" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside for First-Time River Cruisers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both are strong choices.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic is easier because:</h3>
                                <p className="sva-info-card-text">
                                    It's particularly easy for first-time luxury travelers thanks to its highly inclusive approach.
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside is appealing because:</h3>
                                <p className="sva-info-card-text">
                                    It's particularly appealing to first-time luxury cruisers who are willing to spend more time researching the specific ship and suite.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text">Winner: Scenic for simplicity. Riverside for travelers who want to customize the luxury experience around the ship and suite.</p>
                    </div>
                </div>
            </section>



            {/* ── FOOD LOVERS ────────────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="food-lovers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Which Has Better Food?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is too close to call universally.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic may be better for:</h3>
                                <ul className="sva-info-list">
                                    {["Dining variety", "Included beverages", "Multiple dining settings", "Structured culinary experiences"].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside may be better for:</h3>
                                <ul className="sva-info-list">
                                    {["Boutique dining atmosphere", "Personalized service", "Dining as a central luxury highlight"].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-winner-box border-winner">
                        <h4 className="sva-winner-title">Verdict:</h4>
                        <p className="sva-winner-text">Tie — with different strengths.</p>
                    </div>
                </div>
            </section>

                        {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Compare the Complete Trip</span>
                            <h3 className="scenic-inline-cta-title-light">Don't Compare Only the Advertised Fare</h3>
                            <p className="scenic-inline-cta-text-light">
                                Compare cruise fare + included experiences
                                + beverages + excursions + transfers +
                                hotel nights + suite + other costs before
                                deciding between Scenic and Riverside.
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



            {/* ── DINING COMPARISON ─────────────────────────────────── */}
            <section className="sva-dining-section" id="dining">
                <div className="sva-dining-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Dining</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Both brands are designed for travelers who expect considerably more than basic cruise dining.
                        </p>
                    </div>

                    <div className="sva-dining-grid">
                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Utensils size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Scenic Luxury Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Scenic</h3>
                                <p className="sva-dining-card-text">
                                    Scenic offers multiple dining styles, including fine dining, more relaxed venues and suite dining on applicable ships. Premium international beverages are included according to Scenic's current product information, with limited exceptions for certain fine and vintage selections.
                                </p>
                                <div className="sva-dining-emphasis">
                                    <span className="sva-emphasis-label">Best for travelers who want:</span>
                                    <ul className="sva-emphasis-list">
                                        {["Variety", "Luxury", "Included beverages"].map((item, idx) => (
                                            <li key={idx} className="sva-emphasis-item">
                                                <CheckCircle size={16} className="sva-emphasis-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Wine size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Riverside Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Riverside</h3>
                                <p className="sva-dining-card-text">
                                    Riverside puts significant emphasis on culinary quality and a premium dining experience. Its approach can be especially attractive to travelers who consider dining one of the highlights of a luxury cruise.
                                </p>
                                <div className="sva-dining-emphasis">
                                    <span className="sva-emphasis-label">Best for travelers who want:</span>
                                    <ul className="sva-emphasis-list">
                                        {["Fine dining", "Intimate service", "A luxury atmosphere"].map((item, idx) => (
                                            <li key={idx} className="sva-emphasis-item">
                                                <CheckCircle size={16} className="sva-emphasis-icon" />
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

            

            {/* ── SERVICE COMPARISON ─────────────────────────────────── */}
            <section className="sva-service-section" id="service">
                <div className="sva-service-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Service</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is another category where both brands are designed to compete at the luxury end.</p>
                    </div>

                    <div className="sva-service-grid">
                        <div className="sva-service-card">
                            <div className="sva-service-img-placeholder">
                                <Bell size={48} className="sva-service-img-icon" strokeWidth={1.2} />
                                <span className="sva-service-img-label">Scenic Service</span>
                            </div>
                            <div className="sva-service-content">
                                <h3 className="sva-service-card-title">Scenic</h3>
                                <p className="sva-service-card-text">
                                    Scenic explicitly emphasizes its personalized service model and "Nth Degree" service philosophy.
                                </p>
                            </div>
                        </div>

                        <div className="sva-service-card">
                            <div className="sva-service-img-placeholder">
                                <Users size={48} className="sva-service-img-icon" strokeWidth={1.2} />
                                <span className="sva-service-img-label">Riverside Service</span>
                            </div>
                            <div className="sva-service-content">
                                <h3 className="sva-service-card-title">Riverside</h3>
                                <p className="sva-service-card-text">
                                    Riverside also focuses heavily on personalized service and an intimate onboard experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box">
                        <h4 className="sva-choice-title">Verdict: Very close</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Choose Scenic if:</strong> You want a highly structured, polished luxury-service experience.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Choose Riverside if:</strong> You prefer a more intimate, boutique-style relationship with the crew.
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── EXCURSIONS ──────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="excursions">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Excursions</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            A luxury river cruise should not be evaluated only by what happens onboard.
                        </p>
                        <p className="sva-section-lead" style={{ marginTop: "8px", fontWeight: "500", color: "var(--navy)" }}>
                            The destinations are the reason most travelers choose a European river cruise.
                        </p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic Excursions</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Scenic offers included destination experiences and its Scenic Freechoice and Scenic Enrich programs on applicable itineraries.
                                </p>
                                <p className="sva-info-card-text" style={{ marginBottom: "20px" }}>
                                    This gives travelers opportunities to tailor sightseeing around different interests and activity levels.
                                </p>
                                <div style={{ borderTop: "1px solid var(--navy-border)", paddingTop: "16px", marginTop: "auto" }}>
                                    <strong>Best for:</strong>
                                    <p className="sva-info-card-text" style={{ marginTop: "8px" }}>
                                        Travelers who want curated experiences built into a highly inclusive vacation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside Excursions</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Riverside's destination experience is similarly focused on discovering the cities and regions along the river.
                                </p>
                                <p className="sva-info-card-text">
                                    Travelers should compare the exact excursion schedule for the sailing they are considering.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box" style={{ marginTop: "32px" }}>
                        <h4 className="sva-choice-title">Important:</h4>
                        <p className="sva-winner-text" style={{ marginBottom: "12px" }}>
                            Don't assume the better cruise line automatically has the better itinerary.
                        </p>
                        <p className="sva-winner-text" style={{ fontWeight: "500" }}>
                            A great Riverside itinerary can easily be a better choice than a less suitable Scenic itinerary—and vice versa.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── WHAT IS INCLUDED ──────────────────────────────────── */}
            <section className="sva-included-section" id="whats-included">
                <div className="sva-included-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: What Is Included?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is an important distinction.</p>
                    </div>

                    <div className="sva-included-grid">
                        <div className="sva-included-card">
                            <div className="sva-included-img-placeholder">
                                <Gift size={48} className="sva-included-img-icon" strokeWidth={1.2} />
                                <span className="sva-included-img-label">Scenic Inclusions</span>
                            </div>
                            <div className="sva-included-content">
                                <h3 className="sva-included-card-title">Scenic</h3>
                                <p className="sva-included-card-text">
                                    Scenic's all-inclusive approach can include:
                                </p>
                                <ul className="sva-included-list">
                                    {[
                                        "Meals",
                                        "Selected beverages",
                                        "Wi-Fi",
                                        "Excursions",
                                        "Entertainment",
                                        "Personalized service",
                                        "Selected transfers and experiences depending on itinerary",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-included-item">
                                            <CheckCircle size={16} className="sva-included-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-included-outro">
                                    Some suite categories also include Butler Service.
                                </p>
                            </div>
                        </div>

                        <div className="sva-included-card">
                            <div className="sva-included-img-placeholder">
                                <Wallet size={48} className="sva-included-img-icon" strokeWidth={1.2} />
                                <span className="sva-included-img-label">Riverside Inclusions</span>
                            </div>
                            <div className="sva-included-content">
                                <h3 className="sva-included-card-title">Riverside</h3>
                                <p className="sva-included-card-text">
                                    Riverside's pricing includes many core cruise components, but travelers should review the individual itinerary for specific inclusions.
                                </p>
                                <p className="sva-included-card-text" style={{ marginTop: "16px" }}>
                                    Riverside's approach gives travelers opportunities to choose additional experiences based on their interests.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-important-box">
                        <div className="sva-important-header">
                            <AlertCircle size={24} className="sva-important-header-icon" />
                            <h4 className="sva-important-title">Important: Don't compare only the advertised cruise fare.</h4>
                        </div>
                        <div className="sva-important-content">
                            <p className="sva-important-lead-text">Compare the total value breakdown:</p>
                            <div className="sva-compare-grid">
                                {[
                                    "Cruise fare",
                                    "Included experiences",
                                    "Beverages",
                                    "Excursions",
                                    "Transfers",
                                    "Hotel nights",
                                    "Suite",
                                    "Other costs",
                                ].map((item, idx, arr) => (
                                    <span key={idx} style={{ display: "contents" }}>
                                        <div className="sva-compare-pill">
                                            {item}
                                        </div>
                                        {idx < arr.length - 1 && <span className="sva-compare-plus">+</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── COUPLES / FIRST-TIME / ACTIVE ──────────────────────── */}
            <section className="sfe-family-section" id="couples" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "8px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Riverside for Couples</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">Both are excellent for couples.</p>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Heart size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Choose Scenic If You Want:</h3>
                            </div>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "More luxury",
                                    "Personalized service",
                                    "A highly inclusive experience",
                                    "Fine dining",
                                    "Suite upgrades",
                                    "Special-occasion travel",
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <Heart size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <HeartHandshake size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Choose Riverside If You Want:</h3>
                            </div>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Large cabins",
                                    "Open-air balcony space",
                                    "Relaxed sightseeing",
                                    "Active experiences",
                                    "Destination exploration",
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <HeartHandshake size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="sfe-cabins-outro" style={{ textAlign: "center", marginTop: "24px" }}>
                        Overall, Scenic has a slight edge for luxury
                        celebrations, while Riverside has a slight edge for
                        couples who prioritize space and relaxed
                        exploration.
                    </p>
                </div>
            </section>


            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Expert Cabin Selection</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Choose Your Perfect Suite?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you select the ideal cabin category and brand for your vacation.
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



            {/* ── SHIPS COMPARISON ──────────────────────────────────── */}
            <section className="sva-ships-section" id="ships" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside Ships</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sva-ships-grid">
                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Ship size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Scenic Space-Ships</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Scenic Space-Ships</h3>
                                <p className="sva-ships-card-text" style={{ fontSize: "16px", marginBottom: "16px" }}>
                                    Scenic's European Space-Ships accommodate up to 163 guests and are designed around a combination of spacious public areas, premium suites and personalized service.
                                </p>
                                <p className="sva-ships-card-text" style={{ fontWeight: "500", marginBottom: "8px" }}>
                                    Scenic's fleet includes ships such as:
                                </p>
                                <ul className="sva-ships-list" style={{ marginBottom: "16px" }}>
                                    {[
                                        "Scenic Jasper",
                                        "Scenic Opal",
                                        "Scenic Amber",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    These ships sail European waterways including the Rhine, Main, Danube and Moselle.
                                </p>
                            </div>
                        </div>

                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Ship size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Riverside Ships</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Riverside Ships</h3>
                                <p className="sva-ships-card-text" style={{ fontSize: "16px", marginBottom: "16px" }}>
                                    Riverside has a much smaller fleet, which can be an advantage for travelers who want to understand the individual ship before booking.
                                </p>
                                <p className="sva-ships-card-text" style={{ fontWeight: "500", marginBottom: "8px" }}>
                                    Its European fleet includes:
                                </p>
                                <ul className="sva-ships-list" style={{ marginBottom: "16px" }}>
                                    {[
                                        "Riverside Mozart",
                                        "Riverside Debussy",
                                        "Riverside Ravel",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    That makes Riverside particularly interesting for travelers who want to research the exact ship rather than comparing a large fleet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR FAMILIES ──────────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="families">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Best for Families</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Neither brand is primarily designed as a family cruise line, but both can work for multigenerational travel.
                        </p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Best for families who prioritize:
                                </p>
                                <ul className="sva-info-list">
                                    {["Luxury", "Service", "Comfort", "Premium accommodations"].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside</h3>
                                <p className="sva-info-card-text">
                                    Best for families who prioritize:
                                </p>
                                <ul className="sva-info-list">
                                    {["Activity", "Spacious cabins", "Flexible sightseeing", "Destination exploration"].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text">For families, check minimum age requirements and specific itinerary suitability before booking.</p>
                    </div>
                </div>
            </section>

            {/* ── BETTER VALUE ────────────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="better-value">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Which Offers Better Value?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-luxury-img-placeholder">
                                <Wallet size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Scenic Value</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Can offer excellent value for travelers who will use:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "Included beverages",
                                        "Excursions",
                                        "Scenic Enrich",
                                        "Butler service",
                                        "Included experiences",
                                        "Luxury amenities"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-luxury-img-placeholder">
                                <Wallet size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Riverside Value</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Can offer excellent value for travelers who prioritize:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "Suite space",
                                        "Dining",
                                        "Personalized service",
                                        "Intimate luxury"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-winner-box border-winner" style={{ marginTop: "32px" }}>
                        <h4 className="sva-winner-title">Winner:</h4>
                        <p className="sva-winner-text">It depends on how you travel.</p>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR SOLO TRAVELERS ────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="solo-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Best for Solo Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Comparing the key elements is crucial for solo cruisers.</p>
                    </div>

                    <div className="sva-solo-layout">
                        <div className="sva-info-card" style={{ padding: "40px" }}>
                            <h3 className="sva-info-card-title" style={{ fontSize: "22px", marginBottom: "20px", color: 'var(--navy)' }}>Solo travelers should compare:</h3>
                            <div className="sva-solo-compare-grid">
                                {["Single supplements", "Available solo cabins", "Cabin categories", "Group excursion structure", "Dining arrangements"].map((item, idx) => (
                                    <div key={idx} className="sva-compare-pill">
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="sva-solo-highlights">
                                <div className="sva-highlight-item border-avalon-left">
                                    <strong>Riverside's</strong> spacious cabins can be appealing.
                                </div>
                                <div className="sva-highlight-item border-scenic-left">
                                    <strong>Scenic's</strong> personalized service can be particularly valuable to solo luxury travelers.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "32px" }}>
                        <p className="sva-notes-text">The best choice depends heavily on the sailing and current solo pricing.</p>
                    </div>
                </div>
            </section>

            {/* ── HONEYMOONS & ANNIVERSARIES ────────────────────────── */}
            <section className="sva-info-section bg-white" id="honeymoons">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside for Honeymoons &amp; Anniversaries</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">For a special occasion, both can work extremely well.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-luxury-img-placeholder">
                                <Heart size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Scenic Special Occasion</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic may appeal to couples who want:</h3>
                                <ul className="sva-info-list">
                                    {[
                                        "A highly inclusive experience",
                                        "Luxury service",
                                        "Premium dining",
                                        "Excursions already incorporated into the journey"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-luxury-img-placeholder">
                                <Heart size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Riverside Special Occasion</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside may appeal to couples who want:</h3>
                                <ul className="sva-info-list">
                                    {[
                                        "More intimate surroundings",
                                        "Spacious suites",
                                        "High-end dining",
                                        "A boutique atmosphere"
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box" style={{ marginTop: "32px" }}>
                        <h4 className="sva-choice-title">Our recommendation:</h4>
                        <p className="sva-winner-text">
                            For a honeymoon or anniversary, prioritize suite + itinerary + pre/post-cruise hotel over the brand alone.
                        </p>
                    </div>
                </div>
            </section>
            {/* ── PRICE ──────────────────────────────────── */}
            <section className="sfe-cost-section" id="price" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "24px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Riverside: Price</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">
                            This is one of the hardest categories to answer with a simple winner.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div className="sfe-dining-noimg-header-row">
                            <div className="sfe-dining-noimg-icon-box">
                                <Wallet size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="sfe-dining-noimg-title">Price Considerations</h3>
                        </div>

                        <p className="sfe-dining-noimg-text" style={{ fontSize: "18px", marginBottom: "24px" }}>
                            Luxury river cruise pricing changes based on:
                        </p>

                        <ul className="sfe-dining-noimg-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px 24px", marginBottom: "32px" }}>
                            {[
                                "River",
                                "Ship",
                                "Suite",
                                "Season",
                                "Departure date",
                                "Length",
                                "Availability",
                                "Promotions",
                                "Pre/post-cruise stays",
                                "Included services"
                            ].map((item, idx) => (
                                <li key={idx} className="sfe-dining-noimg-list-item" style={{ margin: 0 }}>
                                    <span className="sfe-dining-noimg-list-icon">
                                        <CheckCircle size={16} />
                                    </span>
                                    <span className="sfe-dining-noimg-list-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="sfe-dining-noimg-text" style={{ fontStyle: "italic", marginBottom: "28px", color: "var(--text-muted)", borderLeft: "3px solid var(--navy-light)", paddingLeft: "16px" }}>
                            A higher advertised fare can sometimes represent better value if substantially more is included.
                        </p>

                        <div className="sva-choice-box" style={{ padding: "24px 32px", borderLeft: "4px solid var(--navy)" }}>
                            <h4 className="sva-choice-title" style={{ fontSize: "18px", marginBottom: "16px" }}>How to Compare Price</h4>
                            <div className="sva-choice-grid">
                                <div className="sva-choice-item">
                                    <strong>Compare:</strong> Total trip cost ÷ total inclusions
                                </div>
                                <div className="sva-choice-item">
                                    <strong>Rather than simply:</strong> Advertised cruise fare
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">A Great Itinerary Beats a Bigger Brand Name</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Neither line wins universally on itineraries — the better choice depends on destination, departure date, duration, ports, and pre/post-cruise arrangements.
                        </p>
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Contact Angela Hughes
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PROS & CONS ─────────────────────────────────────────── */}
            <section className="scenic-exclusions-section" id="pros-and-cons" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs Riverside: Pros &amp; Cons</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-grid" style={{ marginBottom: "24px" }}>
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Scenic Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Ultra-luxury positioning",
                                    "Highly inclusive experience",
                                    "Personalized service",
                                    "Butler service on applicable suites",
                                    "Scenic Sun Lounge",
                                    "Included premium beverages",
                                    "Strong excursion program",
                                    "Contemporary Space-Ships",
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <Check size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Riverside Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Spacious suites",
                                    "Intimate luxury atmosphere",
                                    "Strong dining proposition",
                                    "Personalized service",
                                    "Small, easy-to-research fleet",
                                    "Excellent option for luxury travelers",
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <Check size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="scenic-exclusions-grid" style={{ marginBottom: "12px" }}>
                        {[
                            "Can command a premium fare",
                            "Its larger Space-Ships may not feel as intimate as smaller luxury vessels",
                            "Travelers who prioritize maximum suite space may prefer Riverside",
                        ].map((item, i) => (
                            <div key={i} className="scenic-exclusion-card">
                                <div className="scenic-exclusion-icon-wrap">
                                    <X size={16} strokeWidth={2.5} className="scenic-exclusion-icon" />
                                </div>
                                <span className="scenic-exclusion-text">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="scenic-exclusions-grid">
                        {[
                            "Smaller fleet means fewer ship choices",
                            "Exact itinerary and inclusion comparisons are especially important",
                            "Travelers seeking the most clearly defined all-inclusive model may prefer Scenic",
                        ].map((item, i) => (
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

            {/* ── WHICH IS MORE LUXURY ───────────────────────────────── */}
            <section className="sva-info-section" id="more-luxury">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Riverside: Which Is More Luxury?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is a difficult question because both are luxury brands.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-luxury-img-placeholder">
                                <Sparkles size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Scenic Ultra-Luxury</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Scenic explicitly positions its river product as ultra-luxury and "truly all-inclusive."
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-luxury-img-placeholder">
                                <Compass size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Riverside Boutique Luxury</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Riverside</h3>
                                <p className="sva-info-card-text">
                                    Riverside competes with a strong luxury proposition centered around suites, service, dining and a more intimate experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box" style={{ marginTop: "32px" }}>
                        <h4 className="sva-choice-title">How do you define luxury?</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>If your definition of luxury is:</strong> All-inclusive + service + experiences &rarr; <strong>Scenic</strong>
                            </div>
                            <div className="sva-choice-item">
                                <strong>If your definition is:</strong> Space + intimacy + personalized luxury &rarr; <strong>Riverside</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHO SHOULD CHOOSE EACH LINE ─────────────────────────── */}
            <section className="sfe-firsttime-section" id="who-should-choose">
                <div className="sfe-firsttime-container">
                    <div className="sfe-firsttime-header">
                        <h2 className="sfe-firsttime-title">Scenic vs Riverside: Which Should You Choose?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead" style={{ marginTop: "16px" }}>
                            Here's the simplest way to decide:
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Scenic if you want:</h3>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: "8px 0 0 0" }}>
                                Ultra-luxury + all-inclusive + curated experiences + personalized service
                            </p>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Riverside if you want:</h3>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: "8px 0 0 0" }}>
                                Spacious suites + intimate luxury + dining + personalized service
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
                            Everything you need to know about Scenic vs
                            Riverside Luxury Cruises before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        alt="A Scenic Space-Ship and an Riverside Panorama-class river ship sailing a European river"
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
                                    Scenic vs Riverside — <br /> There Isn't a Universal Winner
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Choose Scenic for luxury,
                                        inclusions, and personalized
                                        service. Choose Riverside for space,
                                        balconies, flexibility, and active
                                        exploration.

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
                                                If your priority is the
                                                most luxurious overall
                                                river cruise experience,
                                                Scenic is likely the
                                                better choice. If your
                                                priority is having one of
                                                the most spacious and
                                                thoughtfully designed
                                                river cruise cabins,
                                                Riverside deserves serious
                                                consideration.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                And if you're deciding
                                                between the two for a
                                                specific destination, the
                                                itinerary should be the
                                                final deciding factor. At
                                                Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare the ship, suite,
                                                itinerary, and included
                                                experiences — not simply
                                                the advertised cruise
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
                                            Start Planning Your River Cruise
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
                                            "Compare Scenic and Riverside itineraries and ships",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain current Scenic and Riverside promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic and Riverside with other luxury river cruise lines",
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
}