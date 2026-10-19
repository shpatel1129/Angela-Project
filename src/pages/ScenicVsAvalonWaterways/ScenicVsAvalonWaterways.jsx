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
        HeartHandshake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#webpage",
            name: "Scenic vs Avalon Waterways: Which River Cruise Is Better?",
            url: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/",
            description:
                "Scenic vs Avalon Waterways: compare luxury, cabins, balconies, dining, excursions, inclusions, service, ships, itineraries, pricing and who each river cruise line is best for.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#article",
            headline: "Scenic vs Avalon Waterways: Which River Cruise Is Better?",
            description:
                "A complete comparison of Scenic and Avalon Waterways, including cabins, balconies, dining, excursions, inclusions, service, ships, price, and who each line is best for.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#breadcrumb",
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
                    name: "Scenic vs Avalon Waterways",
                    item: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#itemlist",
            name: "Scenic vs Avalon Waterways — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "The Biggest Difference" },
                { "@type": "ListItem", position: 3, name: "Who Is Each Line Best For?" },
                { "@type": "ListItem", position: 4, name: "Cabins" },
                { "@type": "ListItem", position: 5, name: "Balconies" },
                { "@type": "ListItem", position: 6, name: "Dining" },
                { "@type": "ListItem", position: 7, name: "Excursions & What's Included" },
                { "@type": "ListItem", position: 8, name: "Service & Ships" },
                { "@type": "ListItem", position: 9, name: "Couples, Families & Solo Travelers" },
                { "@type": "ListItem", position: 10, name: "Price & Value" },
                { "@type": "ListItem", position: 11, name: "Pros & Cons" },
                { "@type": "ListItem", position: 12, name: "Our Verdict" },
                { "@type": "ListItem", position: 13, name: "FAQ" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic better than Avalon Waterways?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is generally the better choice for travelers prioritizing luxury, personalized service, and an all-inclusive experience. Avalon can be better for travelers prioritizing spacious suites, open-air balconies, and active destination experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Avalon Waterways more affordable than Scenic?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon can have a lower entry price on some itineraries, but the overall value depends on what is included. Compare the complete vacation rather than the headline fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better cabins, Scenic or Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic offers luxury-oriented suites and Sun Lounge designs, while Avalon is particularly known for its spacious Panorama Suites and Open-Air Balconies. The better choice depends on your cabin priorities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic have better service than Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is particularly strong for travelers seeking highly personalized luxury service. Avalon offers attentive service with a more relaxed overall approach.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better balconies, Scenic or Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both use distinctive balcony concepts. Scenic's Sun Lounge provides flexibility between indoor and outdoor space, while Avalon's Open-Air Balcony emphasizes an integrated outdoor living area.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is more luxurious, Scenic or Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic generally has the stronger luxury positioning, particularly for travelers who value personalized service, premium dining, Butler Service on eligible suites, and a highly inclusive experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent for first-time river cruisers. Scenic may be preferable for travelers who want a highly inclusive luxury experience, while Avalon can appeal to travelers seeking spacious accommodations and flexibility.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Scenic is particularly strong for luxury celebrations and special occasions, while Avalon is attractive for couples who prioritize spacious cabins and destination exploration.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for active travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon can have an advantage for travelers who prioritize cycling, walking, and other active destination experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better food, Scenic or Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic may appeal more to travelers seeking luxury dining and premium service, while Avalon can be particularly appealing to travelers who enjoy destination-focused and regional cuisine.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer strong excursion programs. Scenic emphasizes curated experiences and its Freechoice and Scenic Enrich programs on applicable itineraries, while Avalon offers a broad selection of destination experiences and active options.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic more all-inclusive than Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic generally has the stronger all-inclusive luxury positioning. However, exact inclusions vary by itinerary and booking, so compare the specific sailing before making a decision.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both can work well for solo travelers. Compare the individual sailing's single supplement, cabin options, excursions, and dining arrangements before booking.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which should I choose for a European river cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Choose Scenic if luxury and inclusions are your priorities. Choose Avalon if spacious cabins, open-air balconies, and active destination experiences matter most.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor help me choose between Scenic and Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare the specific itineraries, cabins, inclusions, promotions, excursions, and pre- and post-cruise arrangements to determine which option best fits your travel style.",
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
            q: "Is Scenic better than Avalon Waterways?",
            a: "Scenic is generally the better choice for travelers prioritizing luxury, personalized service, and an all-inclusive experience. Avalon can be better for travelers prioritizing spacious suites, open-air balconies, and active destination experiences.",
        },
        {
            q: "Is Avalon Waterways more affordable than Scenic?",
            a: "Avalon can have a lower entry price on some itineraries, but the overall value depends on what is included. Compare the complete vacation rather than the headline fare.",
        },
        {
            q: "Which has better cabins, Scenic or Avalon?",
            a: "Scenic offers luxury-oriented suites and Sun Lounge designs, while Avalon is particularly known for its spacious Panorama Suites and Open-Air Balconies. The better choice depends on your cabin priorities.",
        },
        {
            q: "Does Scenic have better service than Avalon?",
            a: "Scenic is particularly strong for travelers seeking highly personalized luxury service. Avalon offers attentive service with a more relaxed overall approach.",
        },
        {
            q: "Which has better balconies, Scenic or Avalon?",
            a: "Both use distinctive balcony concepts. Scenic's Sun Lounge provides flexibility between indoor and outdoor space, while Avalon's Open-Air Balcony emphasizes an integrated outdoor living area.",
        },
        {
            q: "Which is more luxurious, Scenic or Avalon?",
            a: "Scenic generally has the stronger luxury positioning, particularly for travelers who value personalized service, premium dining, Butler Service on eligible suites, and a highly inclusive experience.",
        },
        {
            q: "Which is better for first-time river cruisers?",
            a: "Both are excellent for first-time river cruisers. Scenic may be preferable for travelers who want a highly inclusive luxury experience, while Avalon can appeal to travelers seeking spacious accommodations and flexibility.",
        },
        {
            q: "Which is better for couples?",
            a: "Both are excellent. Scenic is particularly strong for luxury celebrations and special occasions, while Avalon is attractive for couples who prioritize spacious cabins and destination exploration.",
        },
        {
            q: "Which is better for active travelers?",
            a: "Avalon can have an advantage for travelers who prioritize cycling, walking, and other active destination experiences.",
        },
        {
            q: "Which has better food, Scenic or Avalon?",
            a: "Scenic may appeal more to travelers seeking luxury dining and premium service, while Avalon can be particularly appealing to travelers who enjoy destination-focused and regional cuisine.",
        },
        {
            q: "Which has better excursions?",
            a: "Both offer strong excursion programs. Scenic emphasizes curated experiences and its Freechoice and Scenic Enrich programs on applicable itineraries, while Avalon offers a broad selection of destination experiences and active options.",
        },
        {
            q: "Is Scenic more all-inclusive than Avalon?",
            a: "Scenic generally has the stronger all-inclusive luxury positioning. However, exact inclusions vary by itinerary and booking, so compare the specific sailing before making a decision.",
        },
        {
            q: "Which is better for solo travelers?",
            a: "Both can work well for solo travelers. Compare the individual sailing's single supplement, cabin options, excursions, and dining arrangements before booking.",
        },
        {
            q: "Which should I choose for a European river cruise?",
            a: "Choose Scenic if luxury and inclusions are your priorities. Choose Avalon if spacious cabins, open-air balconies, and active destination experiences matter most.",
        },
        {
            q: "Can a travel advisor help me choose between Scenic and Avalon?",
            a: "Yes. A luxury travel advisor can compare the specific itineraries, cabins, inclusions, promotions, excursions, and pre- and post-cruise arrangements to determine which option best fits your travel style.",
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
    { key: "positioning", cat: "Overall positioning", scenic: "Luxury", avalon: "Premium" },
    { key: "inclusive", cat: "All-inclusive approach", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "suites", cat: "Suites", scenic: "Excellent", avalon: "⭐⭐⭐⭐⭐" },
    { key: "balcony", cat: "Balcony concept", scenic: "Sun Lounge", avalon: "Open-Air Balcony" },
    { key: "service", cat: "Service", scenic: "Highly personalized", avalon: "Relaxed & attentive" },
    { key: "dining", cat: "Dining", scenic: "Luxury-focused", avalon: "Destination-focused" },
    { key: "excursions", cat: "Excursions", scenic: "Included experiences", avalon: "Choice-focused" },
    { key: "active", cat: "Active options", scenic: "Available", avalon: "Strong" },
    { key: "couples", cat: "Couples", scenic: "Excellent", avalon: "Excellent" },
    { key: "families", cat: "Families", scenic: "Good", avalon: "Good" },
    { key: "luxury", cat: "Luxury travelers", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "value", cat: "Value-focused travelers", scenic: "Good", avalon: "⭐⭐⭐⭐⭐" },
    { key: "firsttime", cat: "First-time cruisers", scenic: "Excellent", avalon: "Excellent" },
];

/* ── Why Choose Scenic / Avalon — Overview Data ──────────────────── */
const scenicTraits = [
    "Luxury",
    "Personalized service",
    "All-inclusive approach",
    "High-end accommodations",
    "Included experiences",
    "Premium dining",
    "A polished onboard experience",
];

const avalonTraits = [
    "Spacious cabins",
    "Open-air balconies",
    "Scenic views",
    "Flexible sightseeing",
    "Active excursions",
    "Relaxed luxury",
    "Destination exploration",
];

/* ── Excursions Comparison Data ──────────────────────────────────── */
const excursionCards = [
    { icon: <Compass size={28} strokeWidth={1.5} />, title: "Curated Choice", desc: "Scenic's Freechoice and Scenic Enrich programs let travelers pick experiences suited to their interests and activity level." },
    { icon: <Bike size={28} strokeWidth={1.5} />, title: "Active Exploration", desc: "Avalon places a strong emphasis on walking, cycling, and cultural experiences across a range of activity levels." },
    { icon: <Sofa size={28} strokeWidth={1.5} />, title: "Included Comfort", desc: "Scenic's all-inclusive approach folds many excursions directly into the cruise fare." },
    { icon: <MapPin size={28} strokeWidth={1.5} />, title: "Destination Focus", desc: "Avalon's excursions lean into food, culture, and hands-on exploration of each port." },
    { icon: <Wine size={28} strokeWidth={1.5} />, title: "Wine & Culinary", desc: "Both lines offer strong wine and culinary excursions, particularly on European river itineraries." },
];

export default function ScenicVsAvalonWaterways() {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic vs Avalon Waterways: Which River Cruise Is Better?</title>
                <meta name="title" content="Scenic vs Avalon Waterways | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Scenic vs Avalon Waterways: compare luxury, cabins, balconies, dining, excursions, inclusions, service, ships, itineraries, pricing and who each river cruise line is best for."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic vs Avalon Waterways: Which River Cruise Is Better?</h1>

                    <p>
                        Scenic and Avalon Waterways are both excellent choices for European river cruising, <br /> but they appeal to somewhat different travelers.
                    </p>
                    <p>
                        Scenic is positioned toward travelers seeking a more all-inclusive luxury experience, personalized service, and a strong emphasis on included experiences.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Avalon Waterways is particularly known for its spacious Panorama Suites, open-air balconies, relaxed atmosphere, and destination-focused river cruising.
                            </p>
                            <p>
                                So the better question isn't simply:
                                <br />
                                Which is better—Scenic or Avalon?
                                <br />
                                It's:
                                <br />
                                Which cruise line better matches the way you want to travel?
                            </p>
                            <p>
                                For travelers who prioritize luxury, included experiences, personalized service, and a highly inclusive experience, Scenic can have the advantage.
                            </p>
                            <p>
                                For travelers who prioritize spacious cabins, open-air balconies, flexibility, and a more relaxed river-cruise experience, Avalon can be especially appealing.
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
                        <h2 className="adg-h2">Quick Answer: Scenic vs Avalon</h2>
                        <div className="adg-accent-line"></div>

                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Scenic</th>
                                    <th>Avalon Waterways</th>
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
                            Choose Scenic if you want a more luxurious,
                            highly inclusive experience with personalized
                            service. Choose Avalon if you want spacious
                            accommodations, an open-air balcony concept,
                            and flexibility within a premium river cruise
                            experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── THE BIGGEST DIFFERENCE ────────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="biggest-difference">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Scenic vs Avalon: The Biggest Difference</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            The biggest difference isn't simply the ship.

                            It's how the two brands approach the river cruise experience.

                            Scenic emphasizes an all-inclusive luxury model where many components are incorporated into the overall experience.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {avalonTraits.map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <CheckCircle size={16} strokeWidth={2.5} />
                                    </span>
                                    <span className="adg-c-overview-label">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Ship size={28} className="adg-c-callout-star" />
                                    <p className="adg-c-callout-text">
                                        Scenic folds luxury into every part
                                        of the journey; Avalon builds the
                                        journey around space, views, and
                                        flexibility.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="adg-c-overview-image-wrap"
                                style={{
                                    background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid var(--navy-border)",
                                    borderRadius: "var(--radius-lg)",
                                    height: "310px",
                                }}
                            >
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">Two Philosophies, One River</span>
                                </div>
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
                                <h3 className="adg-card-title">Scenic Is Best For Travelers Who Want:</h3>
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
                                        <Wind size={20} strokeWidth={1.6} />
                                    </span>
                                    <span className="adg-card-eyebrow-label">Avalon Waterways</span>
                                </div>
                            </div>
                            <div className="adg-card-body">
                                <h3 className="adg-card-title">Avalon Is Best For Travelers Who Prioritize:</h3>
                                <ul className="adg-card-list">
                                    {avalonTraits.map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro" style={{ marginTop: "12px" }}>
                                    Particularly appealing to couples,
                                    active travelers, first-time river
                                    cruisers, and travelers who place a
                                    high value on cabin space.
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
                            Let us help you compare Scenic and Avalon sailings and find the perfect fit for your trip.
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
                        <h2 className="sfe-firsttime-title">Scenic vs Avalon Cabins</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">
                            This is one of the most important categories to compare.
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
                                    Scenic's accommodation strategy
                                    emphasizes a luxury suite experience.
                                    Eligible accommodations can include:
                                </p>
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Separate living space",
                                        "River views",
                                        "Sun Lounge",
                                        "Premium furnishings",
                                        "Butler Service on eligible suites",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro">
                                    For travelers who spend significant
                                    time relaxing in their suite, Scenic's
                                    accommodation concept can be a major
                                    advantage.
                                </p>
                            </div>
                        </div>

                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Avalon Panorama Suites</span>
                            </div>
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Avalon Panorama Suites</h3>
                                <p className="sfe-cabins-text">
                                    Avalon's strongest accommodation
                                    differentiator is its Panorama Suite
                                    concept. The cabins are designed
                                    around expansive views, with beds
                                    positioned toward the river. The
                                    Open-Air Balcony is another major
                                    attraction — instead of a traditional
                                    small balcony, Avalon integrates the
                                    balcony into the living space.
                                </p>
                                <span className="sfe-cabins-img-label" style={{ display: "block", marginBottom: "8px" }}>
                                    Particularly attractive for:
                                </span>
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Travelers who love river views",
                                        "Travelers who spend a lot of time in their cabin",
                                        "Couples",
                                        "Scenic-view enthusiasts",
                                        "Travelers who prioritize cabin space",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME RIVER CRUISERS ──────────────────────────── */}
            <section className="sva-info-section" id="first-time-cruisers" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon for First-Time River Cruisers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both brands are excellent for first-time river cruisers.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic is better if:</h3>
                                <p className="sva-info-card-text">
                                    You don't want to worry about constantly calculating additional expenses.
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Avalon is better if:</h3>
                                <p className="sva-info-card-text">
                                    You want a straightforward premium cruise with plenty of flexibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text">Neither requires previous river-cruise experience.</p>
                    </div>
                </div>
            </section>

            {/* ── BALCONY COMPARISON ─────────────────────────────────── */}
            <section className="sva-balcony-section" id="balconies">
                <div className="sva-balcony-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon Balcony: Which Is Better?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This is a close comparison because both brands take a different approach.
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
                                    The balcony area can be transformed into an enclosed or open space, creating additional living flexibility.
                                </p>
                            </div>
                        </div>

                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Wind size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Avalon Open-Air Balcony</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Avalon: Open-Air Balcony</h3>
                                <p className="sva-balcony-card-text">
                                    The balcony is incorporated into the suite, creating an open-air extension of the living space.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box">
                        <h4 className="sva-choice-title">Which should you choose?</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Choose Scenic</strong> if you want flexibility between an enclosed and open balcony environment.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Choose Avalon</strong> if you want a more consistently open-air balcony concept.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── FOOD LOVERS ────────────────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="food-lovers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon for Food Lovers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Dining preferences vary, but both lines deliver quality.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Best for travelers who prioritize:
                                </p>
                                <ul className="sva-info-list">
                                    {["Luxury dining", "Wine", "Multiple dining venues", "Service", "Culinary experiences"].map((item, idx) => (
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
                                <h3 className="sva-info-card-title text-avalon">Avalon</h3>
                                <p className="sva-info-card-text">
                                    Best for travelers who prioritize:
                                </p>
                                <ul className="sva-info-list">
                                    {["Regional cuisine", "Destination-focused dining", "Culinary exploration"].map((item, idx) => (
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
                        <h4 className="sva-winner-title">Winner:</h4>
                        <p className="sva-winner-text">Scenic for luxury dining; Avalon for destination-focused culinary exploration.</p>
                    </div>
                </div>
            </section>



            {/* ── DINING COMPARISON ─────────────────────────────────── */}
            <section className="sva-dining-section" id="dining">
                <div className="sva-dining-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Dining</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Dining is another area where both brands perform well.
                        </p>
                    </div>

                    <div className="sva-dining-grid">
                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Utensils size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Scenic Luxury Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Scenic Dining</h3>
                                <p className="sva-dining-card-text">
                                    Scenic's dining experience is designed around its luxury positioning. Travelers can expect a variety of dining experiences depending on the ship and itinerary.
                                </p>
                                <div className="sva-dining-emphasis">
                                    <span className="sva-emphasis-label">The emphasis is on:</span>
                                    <ul className="sva-emphasis-list">
                                        {["Quality", "Variety", "Service", "Wine", "Destination-inspired cuisine"].map((item, idx) => (
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
                                <span className="sva-dining-img-label">Avalon Regional Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Avalon Dining</h3>
                                <p className="sva-dining-card-text">
                                    Avalon takes a destination-oriented approach to dining. Its dining can appeal to travelers who enjoy trying regional flavors while maintaining familiar options onboard.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-verdict-box">
                        <h4 className="sva-verdict-title">Best for food-focused travelers?</h4>
                        <div className="sva-verdict-grid">
                            <div className="sva-verdict-item">
                                <strong>Scenic</strong> may have the edge for travelers seeking a more luxury-focused dining experience.
                            </div>
                            <div className="sva-verdict-item">
                                <strong>Avalon</strong> is an excellent choice for travelers who prioritize regional food and flexibility.
                            </div>
                        </div>
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
                                deciding between Scenic and Avalon.
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

            {/* ── EXCURSIONS ──────────────────────────────────── */}
            <section className="ugt-advantage-section" id="excursions" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Onboard & Ashore</span>
                        <h2 className="ugt-advantage-title">Scenic vs Avalon: Excursions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Both cruise lines provide destination
                            experiences, but the overall philosophy
                            differs. It's a tie, with different strengths
                            — choose Scenic for curated luxury
                            experiences, or Avalon for travelers who want
                            choice and active exploration.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {excursionCards.map((item, idx) => (
                            <div key={idx} className="ugt-advantage-card">
                                <div className="ugt-icon-box">{item.icon}</div>
                                <h4 className="ugt-card-title">{item.title}</h4>
                                <p className="ugt-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── WHAT IS INCLUDED ──────────────────────────────────── */}
            <section className="sva-included-section" id="whats-included">
                <div className="sva-included-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: What Is Included?</h2>
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
                                <span className="sva-included-img-label">Avalon Inclusions</span>
                            </div>
                            <div className="sva-included-content">
                                <h3 className="sva-included-card-title">Avalon</h3>
                                <p className="sva-included-card-text">
                                    Avalon's pricing includes many core cruise components, but travelers should review the individual itinerary for specific inclusions.
                                </p>
                                <p className="sva-included-card-text" style={{ marginTop: "16px" }}>
                                    Avalon's approach gives travelers opportunities to choose additional experiences based on their interests.
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


            {/* ── WINE LOVERS ────────────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="wine-lovers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon for Wine Lovers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both brands work exceptionally well for European wine itineraries.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Scenic can be particularly attractive for travelers who want:
                                </p>
                                <ul className="sva-info-list">
                                    {["Wine included", "Luxury service", "Curated experiences"].map((item, idx) => (
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
                                <h3 className="sva-info-card-title text-avalon">Avalon</h3>
                                <p className="sva-info-card-text">
                                    Avalon can be attractive for travelers who want:
                                </p>
                                <ul className="sva-info-list">
                                    {["Regional wine experiences", "Flexible excursions", "Destination exploration"].map((item, idx) => (
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
                        <p className="sva-notes-text">The itinerary itself should ultimately determine your decision.</p>
                    </div>
                </div>
            </section>

            {/* ── SERVICE COMPARISON ─────────────────────────────────── */}
            <section className="sva-service-section" id="service">
                <div className="sva-service-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Service</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">If personalized service is one of your biggest priorities, Scenic deserves a close look.</p>
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
                                    Scenic's luxury positioning emphasizes a high level of personalized attention.
                                </p>
                                <p className="sva-service-card-text" style={{ marginTop: "16px" }}>
                                    Eligible suites can include Butler Service.
                                </p>
                            </div>
                        </div>

                        <div className="sva-service-card">
                            <div className="sva-service-img-placeholder">
                                <Users size={48} className="sva-service-img-icon" strokeWidth={1.2} />
                                <span className="sva-service-img-label">Avalon Service</span>
                            </div>
                            <div className="sva-service-content">
                                <h3 className="sva-service-card-title">Avalon</h3>
                                <p className="sva-service-card-text">
                                    Avalon provides attentive service but takes a somewhat more relaxed approach.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-winner-box">
                        <h4 className="sva-winner-title">Winner: Scenic</h4>
                        <p className="sva-winner-text">For travelers who want a more traditional luxury-service experience.</p>
                    </div>
                </div>
            </section>

            {/* ── COUPLES / FIRST-TIME / ACTIVE ──────────────────────── */}
            <section className="sfe-family-section" id="couples" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "8px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Avalon for Couples</h2>
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
                                <h3 className="sfe-dining-noimg-title">Choose Avalon If You Want:</h3>
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
                                            <Heart size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="sfe-cabins-outro" style={{ textAlign: "center", marginTop: "24px" }}>
                        Overall, Scenic has a slight edge for luxury
                        celebrations, while Avalon has a slight edge for
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

            {/* ── ACTIVE TRAVELERS ───────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="active-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon for Active Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Avalon can be particularly attractive for active travelers.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Scenic also offers active experiences through its excursion programming.
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Avalon</h3>
                                <p className="sva-info-card-text">
                                    Depending on the itinerary, travelers can find opportunities for:
                                </p>
                                <ul className="sva-info-list font-medium">
                                    <li className="sva-info-item"><span className="sva-info-emoji"></span> Cycling</li>
                                    <li className="sva-info-item"><span className="sva-info-emoji"></span> Walking</li>
                                    <li className="sva-info-item"><span className="sva-info-emoji"></span> Active sightseeing</li>
                                    <li className="sva-info-item"><span className="sva-info-emoji"></span> Adventure experiences</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-winner-box border-winner">
                        <h4 className="sva-winner-title">Winner: Avalon</h4>
                        <p className="sva-winner-text">Avalon for travelers who make activity a major part of the vacation.</p>
                    </div>
                </div>
            </section>

            {/* ── SHIPS COMPARISON ──────────────────────────────────── */}
            <section className="sva-ships-section" id="ships">
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Ships</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both brands operate purpose-built river ships designed around European river cruising.</p>
                    </div>

                    <div className="sva-ships-grid">
                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Ship size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Scenic Space-Ships</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Scenic</h3>
                                <p className="sva-ships-card-text">
                                    Scenic's Space-Ships emphasize:
                                </p>
                                <ul className="sva-ships-list">
                                    {[
                                        "Luxury",
                                        "Contemporary design",
                                        "Spacious suites",
                                        "Sun Lounges",
                                        "Multiple dining options",
                                        "Wellness facilities",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Ship size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Avalon Panorama-Class</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Avalon</h3>
                                <p className="sva-ships-card-text">
                                    Avalon's Panorama-class ships emphasize:
                                </p>
                                <ul className="sva-ships-list">
                                    {[
                                        "Large suites",
                                        "Open-air balconies",
                                        "Spacious public areas",
                                        "Destination-focused design",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-ships-winner-box">
                        <h4 className="sva-ships-winner-title">Winner? Depends on your priorities.</h4>
                        <div className="sva-ships-winner-grid">
                            <div className="sva-ships-winner-item">
                                <strong>Scenic</strong> generally has the stronger luxury-resort feel.
                            </div>
                            <div className="sva-ships-winner-item">
                                <strong>Avalon</strong> has an especially strong proposition for travelers who prioritize cabin space.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR FAMILIES ──────────────────────────────────── */}
            <section className="sva-info-section" id="families">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Best for Families</h2>
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
                                <h3 className="sva-info-card-title text-avalon">Avalon</h3>
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

            {/* ── BEST FOR SOLO TRAVELERS ────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="solo-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Best for Solo Travelers</h2>
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
                                    <strong>Avalon's</strong> spacious cabins can be appealing.
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
            {/* ── PRICE ──────────────────────────────────── */}
            <section className="sfe-cost-section" id="price" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "8px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Avalon: Price</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">
                            Price comparisons can be misleading. A lower
                            advertised fare doesn't necessarily mean a
                            lower overall vacation cost.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Wallet size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Scenic</h3>
                            </div>
                            <p className="sfe-dining-noimg-text">
                                Cruise + included experiences + beverages
                                + excursions + service + suite.
                            </p>
                            <p className="sfe-dining-noimg-outro">
                                Scenic can offer stronger value for
                                travelers who will use many included
                                luxury benefits.
                            </p>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Wallet size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Avalon</h3>
                            </div>
                            <p className="sfe-dining-noimg-text">
                                Cruise + selected experiences + optional
                                additions + suite + other travel costs.
                            </p>
                            <p className="sfe-dining-noimg-outro">
                                Avalon can offer excellent value for
                                travelers who want spacious accommodations
                                and flexibility.
                            </p>
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
                        <h2 className="adg-h2">Scenic vs Avalon: Pros &amp; Cons</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-grid" style={{ marginBottom: "24px" }}>
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Scenic Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Luxury positioning",
                                    "Highly inclusive experience",
                                    "Personalized service",
                                    "Butler Service on eligible suites",
                                    "Premium accommodations",
                                    "Strong dining experience",
                                    "Curated excursions",
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
                            <h3 className="sfe-dining-noimg-title">Avalon Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Spacious Panorama Suites",
                                    "Open-Air Balcony concept",
                                    "Strong destination focus",
                                    "Active excursion options",
                                    "Relaxed atmosphere",
                                    "Excellent river views",
                                    "Strong value proposition",
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
                            "Scenic is usually positioned at a higher price point",
                            "Scenic may be more luxury-focused than some travelers need",
                            "Travelers who prioritize active exploration may prefer Avalon's approach",
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
                            "Avalon is less traditionally luxury-focused than Scenic",
                            "Some premium services may not be included in the same way",
                            "Travelers seeking Butler Service and a highly inclusive luxury model may prefer Scenic",
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
                        <h2 className="sva-section-title">Scenic vs Avalon: Which One Is More Luxury?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-luxury-img-placeholder">
                                <Sparkles size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Scenic Luxury</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    If your definition of luxury includes:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "Personalized service",
                                        "Butler Service",
                                        "Highly inclusive pricing",
                                        "Premium dining",
                                        "Luxury accommodations",
                                        "Curated experiences",
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
                                <Compass size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Avalon Premium</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Avalon</h3>
                                <p className="sva-info-card-text">
                                    Avalon is better described as premium river cruising with an emphasis on spacious accommodations and destination exploration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-winner-box border-winner">
                        <h4 className="sva-winner-title">Scenic</h4>
                        <p className="sva-winner-text">Scenic has the stronger positioning.</p>
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER CABINS ────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="better-cabins">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Which Has Better Cabins?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This depends on what you mean by "better."</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    <strong>For luxury and service:</strong> Scenic
                                </p>
                                <p className="sva-info-card-text" style={{ marginTop: "16px" }}>
                                    For travelers who want a suite as part of a luxury hotel-like experience, Scenic may be the better fit.
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Avalon</h3>
                                <p className="sva-info-card-text">
                                    <strong>For space and open-air balcony design:</strong> Avalon
                                </p>
                                <p className="sva-info-card-text" style={{ marginTop: "16px" }}>
                                    For travelers who spend a lot of time in their cabin, Avalon deserves serious consideration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH HAS BETTER ITINERARIES ────────────────────────── */}
            <section className="sva-info-section" id="better-itineraries">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Avalon: Which Has Better Itineraries?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Neither line wins universally.</p>
                    </div>

                    <div className="sva-solo-layout">
                        <div className="sva-info-card" style={{ padding: "40px" }}>
                            <h3 className="sva-info-card-title" style={{ fontSize: "22px", marginBottom: "20px", color: "var(--navy)" }}>The better itinerary depends on:</h3>
                            <div className="sva-solo-compare-grid">
                                {[
                                    "Destination",
                                    "Departure date",
                                    "Cruise duration",
                                    "Ports",
                                    "Excursions",
                                    "Pre/post-cruise arrangements",
                                ].map((item, idx) => (
                                    <div key={idx} className="sva-compare-pill">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "32px" }}>
                        <p className="sva-notes-text">
                            A great itinerary on one line is usually a better choice than a mediocre itinerary simply because the brand has a stronger reputation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE EACH LINE ─────────────────────────── */}
            <section className="sfe-firsttime-section" id="who-should-choose">
                <div className="sfe-firsttime-container">
                    <div className="sfe-firsttime-header">
                        <h2 className="sfe-firsttime-title">Who Should Choose Scenic? Who Should Choose Avalon?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Scenic If You:</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Want luxury",
                                    "Prefer all-inclusive travel",
                                    "Value personalized service",
                                    "Want premium dining",
                                    "Appreciate curated excursions",
                                    "Are celebrating a special occasion",
                                    "Prefer a luxury-resort atmosphere",
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
                                Best match: luxury travelers who want the
                                cruise itself to feel like part of the
                                luxury experience.
                            </p>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Avalon If You:</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Prioritize spacious cabins",
                                    "Want an open-air balcony",
                                    "Enjoy active excursions",
                                    "Prefer a relaxed atmosphere",
                                    "Want destination-focused travel",
                                    "Value flexibility",
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
                                Best match: travelers who want a
                                comfortable premium cruise with
                                exceptional cabin space and strong
                                destination experiences.
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
                            Avalon Waterways before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        alt="A Scenic Space-Ship and an Avalon Panorama-class river ship sailing a European river"
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
                                    Scenic vs Avalon — <br /> There Isn't a Universal Winner
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Choose Scenic for luxury,
                                        inclusions, and personalized
                                        service. Choose Avalon for space,
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
                                                Avalon deserves serious
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
                                            "Compare Scenic and Avalon itineraries and ships",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain current Scenic and Avalon promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic and Avalon with other luxury river cruise lines",
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