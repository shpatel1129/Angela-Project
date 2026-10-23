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
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity/#webpage",
            name: "Scenic vs Celebrity River Cruises (2026): Which Is Better?",
            url: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity",
            description:
                "Compare Scenic vs Celebrity River Cruises for 2026. Explore luxury, suites, service, dining, inclusions, excursions, ships, pricing, families, and who each cruise line is best for.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity/#article",
            headline: "Scenic vs Celebrity: Which Luxury River Cruise Is Better?",
            description:
                "A complete comparison of Scenic and Celebrity, including suites, balconies, dining, service, excursions, inclusions, ships, price, and who each line is best for.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Scenic River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic vs Celebrity",
                    item: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity/#itemlist",
            name: "Scenic vs Celebrity — What This Guide Covers",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic better than Celebrity River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is currently the stronger choice for travelers seeking an established ultra-luxury river cruise program and comprehensive all-inclusive experience. Celebrity may be better for travelers who prioritize new ships and contemporary design.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Celebrity River Cruises really luxury?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Celebrity's current river ships include suite-level butler service, modern accommodations, premium amenities, innovative public spaces and luxury-oriented design.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better ships, Scenic or Celebrity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic has the advantage in established river-cruise experience. Celebrity has the advantage in newness and innovative ship design.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer luxury suites. Scenic is known for its Sun Lounge concept, while Celebrity offers innovative Infinite Balcony and Skylight Infinite Balcony designs on its newer river ships.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Celebrity River Cruises have butler service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Celebrity's current river-ship information states that butler service is available in every suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic more all-inclusive than Celebrity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic has a particularly clear all-inclusive positioning and describes its river cruises as truly all-inclusive. Celebrity also includes many services and amenities, but travelers should compare the exact fare and sailing inclusions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic has a more established luxury river dining program. Celebrity brings its contemporary culinary approach to new ships and includes innovative spaces such as the Magic Edge on Celebrity Seeker.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic currently has the advantage in established excursion experience and program breadth. Celebrity's river program is focused on immersive European experiences and continues to develop.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Scenic is ideal for couples who want established ultra-luxury, while Celebrity is appealing to couples who want a modern and new river-cruise experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Celebrity may be attractive for families and multigenerational groups seeking a contemporary product. Scenic is stronger for travelers who prioritize a traditional ultra-luxury river experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both can work well. Compare single supplements, cabin categories, excursion structure and dining arrangements for your specific sailing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Celebrity River Cruises good for someone who already cruises Celebrity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Brand familiarity is one of Celebrity River Cruises' strongest advantages for existing Celebrity ocean guests.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for a Danube river cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic currently has the advantage in established Danube river-cruise experience. Celebrity offers a compelling alternative for travelers attracted to its new ships and contemporary design.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for a Rhine river cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both can be considered, but compare the exact itinerary, ship, suite and included excursions. Scenic has extensive experience on Europe's major rivers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic more expensive than Celebrity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There is no universal answer. Prices vary by departure, suite, itinerary and inclusions. Compare the total trip cost rather than the headline cruise fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has the newest river ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Celebrity's current river program is built around a new generation of purpose-built ships, including Celebrity Compass and Celebrity Seeker.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better balcony cabins?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic's Sun Lounge is an established and distinctive feature. Celebrity's Infinite Balcony and Skylight Infinite Balcony concepts provide a more technologically innovative approach.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I choose Scenic or Celebrity River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Choose Scenic for established ultra-luxury river cruising and comprehensive inclusions. Choose Celebrity if you prefer modern design, new ships and the familiar Celebrity brand.",
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
            q: "Is Scenic better than Celebrity River Cruises?",
            a: "Scenic is currently the stronger choice for travelers seeking an established ultra-luxury river cruise program and comprehensive all-inclusive experience. Celebrity may be better for travelers who prioritize new ships and contemporary design.",
        },
        {
            q: "Is Celebrity River Cruises really luxury?",
            a: "Yes. Celebrity's current river ships include suite-level butler service, modern accommodations, premium amenities, innovative public spaces and luxury-oriented design.",
        },
        {
            q: "Which has better ships, Scenic or Celebrity?",
            a: "Scenic has the advantage in established river-cruise experience. Celebrity has the advantage in newness and innovative ship design.",
        },
        {
            q: "Which has better suites?",
            a: "Both offer luxury suites. Scenic is known for its Sun Lounge concept, while Celebrity offers innovative Infinite Balcony and Skylight Infinite Balcony designs on its newer river ships.",
        },
        {
            q: "Does Celebrity River Cruises have butler service?",
            a: "Yes. Celebrity's current river-ship information states that butler service is available in every suite.",
        },
        {
            q: "Is Scenic more all-inclusive than Celebrity?",
            a: "Scenic has a particularly clear all-inclusive positioning and describes its river cruises as truly all-inclusive. Celebrity also includes many services and amenities, but travelers should compare the exact fare and sailing inclusions.",
        },
        {
            q: "Which has better dining?",
            a: "Scenic has a more established luxury river dining program. Celebrity brings its contemporary culinary approach to new ships and includes innovative spaces such as the Magic Edge on Celebrity Seeker.",
        },
        {
            q: "Which has better excursions?",
            a: "Scenic currently has the advantage in established excursion experience and program breadth. Celebrity's river program is focused on immersive European experiences and continues to develop.",
        },
        {
            q: "Which is better for couples?",
            a: "Both are excellent. Scenic is ideal for couples who want established ultra-luxury, while Celebrity is appealing to couples who want a modern and new river-cruise experience.",
        },
        {
            q: "Which is better for families?",
            a: "Celebrity may be attractive for families and multigenerational groups seeking a contemporary product. Scenic is stronger for travelers who prioritize a traditional ultra-luxury river experience.",
        },
        {
            q: "Which is better for solo travelers?",
            a: "Both can work well. Compare single supplements, cabin categories, excursion structure and dining arrangements for your specific sailing.",
        },
        {
            q: "Is Celebrity River Cruises good for someone who already cruises Celebrity?",
            a: "Yes. Brand familiarity is one of Celebrity River Cruises' strongest advantages for existing Celebrity ocean guests.",
        },
        {
            q: "Which is better for a Danube river cruise?",
            a: "Scenic currently has the advantage in established Danube river-cruise experience. Celebrity offers a compelling alternative for travelers attracted to its new ships and contemporary design.",
        },
        {
            q: "Which is better for a Rhine river cruise?",
            a: "Both can be considered, but compare the exact itinerary, ship, suite and included excursions. Scenic has extensive experience on Europe's major rivers.",
        },
        {
            q: "Is Scenic more expensive than Celebrity?",
            a: "There is no universal answer. Prices vary by departure, suite, itinerary and inclusions. Compare the total trip cost rather than the headline cruise fare.",
        },
        {
            q: "Which has the newest river ships?",
            a: "Celebrity's current river program is built around a new generation of purpose-built ships, including Celebrity Compass and Celebrity Seeker.",
        },
        {
            q: "Which has better balcony cabins?",
            a: "Scenic's Sun Lounge is an established and distinctive feature. Celebrity's Infinite Balcony and Skylight Infinite Balcony concepts provide a more technologically innovative approach.",
        },
        {
            q: "Should I choose Scenic or Celebrity River Cruises?",
            a: "Choose Scenic for established ultra-luxury river cruising and comprehensive inclusions. Choose Celebrity if you prefer modern design, new ships and the familiar Celebrity brand.",
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
    { key: "positioning", cat: "Overall positioning", scenic: "Ultra-luxury", avalon: "Contemporary premium/luxury" },
    { key: "experience", cat: "River-cruise experience", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "shipdesign", cat: "Ship design", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "suites", cat: "Suite experience", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "butler", cat: "Butler service", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "allinclusive", cat: "All-inclusive approach", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "dining", cat: "Dining", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "excursions", cat: "Excursions", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "wellness", cat: "Wellness", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "destination", cat: "Destination experience", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "fleet", cat: "Fleet experience", scenic: "⭐⭐⭐⭐⭐", avalon: "Developing" },
    { key: "couples", cat: "Couples", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "families", cat: "Families", scenic: "⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "bestfor", cat: "Best for", scenic: "Established ultra-luxury", avalon: "Modern Celebrity-style river cruising" },
];


export default function ScenicVsCelebrity() {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic vs Celebrity River Cruises (2026): Which Is Better?</title>
                <meta name="title" content="Scenic vs Celebrity River Cruises | Luxury Comparison" />
                <meta
                    name="description"
                    content="Compare Scenic vs Celebrity River Cruises for 2026. Explore ships, suites, balconies, dining, service, inclusions, excursions, pricing, itineraries, families, and who each brand is best for."
                />
                <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic vs Celebrity River Cruises <br /> Which Is Better?</h1>

                    <p>
                        Scenic and Celebrity River C ruises represent two
                        different approaches to luxury river cruising.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Scenic is an established ultra-luxury river
                                cruise brand with a mature European and
                                Southeast Asian river program. It describes
                                its river cruises as a truly all-inclusive,
                                5-star experience, with personalized
                                service, luxury suites and curated
                                destination experiences.
                            </p> 
                            <p>
                                Celebrity River Cruises is a newer entrant
                                bringing the Celebrity Cruises design
                                philosophy to Europe's rivers. Its current
                                river program emphasizes modern ship
                                design, spacious accommodations, open-air
                                spaces, technology, wellness and immersive
                                European experiences. Celebrity's river
                                fleet currently includes ships such as
                                Celebrity Compass and Celebrity Seeker,
                                with additional vessels planned in its
                                expanding program.
                            </p>
                            <p>
                                That creates an interesting choice: Scenic
                                is the stronger option for travelers
                                seeking established ultra-luxury river
                                cruising and a highly inclusive experience.
                                Celebrity may appeal more to travelers who
                                want a fresh, contemporary river experience
                                built around modern design and the
                                familiar Celebrity brand.
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
                        <h2 className="adg-h2">Quick Answer: Scenic vs Celebrity</h2>
                        <div className="adg-accent-line"></div>

                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Scenic</th>
                                    <th>Celebrity</th>
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
                            Choose Scenic if you want: A proven
                            ultra-luxury river cruise with extensive
                            inclusions, mature itineraries, personalized
                            service and signature Scenic experiences.
                            Choose Celebrity if you want: A newer, modern
                            river cruise experience with contemporary ship
                            design, innovative suites, wellness and the
                            Celebrity brand.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── THE BIGGEST DIFFERENCE ────────────────────────────────── */}
            <section className="sva-ships-section" id="biggest-difference" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">The Biggest Difference Between Scenic and Celebrity</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead" style={{ marginTop: "16px" }}>
                            The biggest difference is experience and positioning. Scenic has been developing its river-cruise product for decades. Its current European and Southeast Asian programs include established itineraries across the Rhine, Main, Danube, Moselle, Seine, Rhône, Saône, Bordeaux and Douro, among others.
                        </p>
                        <p className="sva-section-lead" style={{ marginTop: "8px", fontWeight: "500", color: "var(--navy)" }}>
                            Celebrity is entering river cruising with a new generation of purpose-built ships.
                        </p>
                    </div>

                    <div className="sva-ships-grid">
                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Sparkles size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Scenic: Established Ultra-Luxury</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Scenic = Established Ultra-Luxury River Cruising</h3>
                                <ul className="sva-ships-list" style={{ marginBottom: "24px" }}>
                                    {[
                                        "Suite",
                                        "Butler",
                                        "Dining",
                                        "Sun Lounge",
                                        "Wellness",
                                        "Entertainment",
                                        "Excursions",
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
                                <Gem size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Celebrity: Modern, New-Generation Cruising</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Celebrity = Modern, New-Generation River Cruising</h3>
                                <ul className="sva-ships-list" style={{ marginBottom: "24px" }}>
                                    {[
                                        "Modern interiors",
                                        "Open-air lounges",
                                        "Fewer guests",
                                        "Spacious accommodations",
                                        "Innovative balcony concepts",
                                        "Wellness",
                                        "Personalized service",
                                        "Contemporary design",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "15px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Celebrity Compass, for example, features the brand's Skylight Infinite Balcony Suites, while Celebrity Seeker introduces features including its Magic Edge dining pods.
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
                        <h2 className="adg-h2">What Are Scenic and Celebrity Best Known For?</h2>
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
                                <h3 className="adg-card-title1">Scenic River Cruises: What Makes Them Different?</h3>

                                <p className="sfe-cabins-text">
                                    Scenic's river product is built around a comprehensive luxury experience.
                                </p>

                                <p className="sfe-cabins-text" style={{ fontWeight: "600", marginBottom: "12px", color: "var(--navy)" }}>
                                    Its current positioning emphasizes:
                                </p>

                                <ul className="adg-card-list">
                                    {[
                                        "Ultra-luxury",
                                        "Truly all-inclusive travel",
                                        "Personalized service",
                                        "Luxury suites",
                                        "Butler service",
                                        "Multiple dining venues",
                                        "Scenic Freechoice",
                                        "Scenic Enrich",
                                        "Wellness",
                                        "Included beverages",
                                        "Curated excursions",
                                    ].map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-text" style={{ fontStyle: "italic", fontSize: "16px", color: "var(--text-muted)", marginTop: "12px" }}>
                                    Scenic describes its river journeys as being designed so that travelers can enjoy a seamless experience with details handled "to the Nth Degree."
                                </p>

                                <p className="sfe-cabins-outro" style={{ marginTop: "auto" }}>
                                    <strong>Scenic is particularly attractive to travelers who want:</strong>
                                    <br />
                                    Luxury without constantly thinking about what costs extra.
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
                                    <span className="adg-card-eyebrow-label">Celebrity</span>
                                </div>
                            </div>
                            <div className="adg-card-body">
                                <h3 className="adg-card-title1">Celebrity River Cruises: What Makes Them Different?</h3>

                                <p className="sfe-cabins-text">
                                    Celebrity is approaching river cruising from a different direction.
                                </p>

                                <p className="sfe-cabins-text" style={{ fontWeight: "600", marginBottom: "12px", color: "var(--navy)" }}>
                                    Its current river ships are designed around modern architecture, technology and open spaces:
                                </p>

                                <ul className="adg-card-list">
                                    {[
                                        "Modern interiors",
                                        "Open-air lounges",
                                        "Innovative Skylight Infinite Balcony Suites",
                                        "Contemporary interiors",
                                        "Personalized service",
                                        "Wellness facilities",
                                        "Magic Edge dining pods",
                                        "Top-deck bar and grill",
                                        "Hybrid propulsion",
                                        "Spacious staterooms",
                                        "Butler service in suites",
                                        "Complimentary minibar",
                                        "In-room continental breakfast",
                                    ].map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-text" style={{ fontStyle: "italic", fontSize: "16px", color: "var(--text-muted)", marginTop: "12px" }}>
                                    Celebrity Compass is described as having spacious interiors, open-air lounges and innovative Skylight Infinite Balcony Suites. Celebrity Seeker adds Magic Edge dining pods and hybrid propulsion.
                                </p>

                                <p className="sfe-cabins-outro" style={{ marginTop: "auto" }}>
                                    <strong>Celebrity is particularly attractive to:</strong>
                                    <br />
                                    Travelers who want river cruising to feel contemporary, stylish and distinctly different from traditional river cruise design.
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
                            Let us help you compare Scenic and Celebrity sailings and find the perfect fit for your trip.
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
                        <h2 className="sfe-firsttime-title">Scenic vs Celebrity Suites</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">
                            For many luxury travelers, the suite is one of
                            the biggest reasons to choose one brand over
                            another.
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
                                    Scenic's suite experience is one of
                                    its strongest differentiators.
                                    Depending on the ship and category,
                                    travelers can find:
                                </p>
                                <ul className="sfe-cabins-list">
                                    {[
                                        "Spacious living areas",
                                        "Scenic Sun Lounge",
                                        "Premium bedding",
                                        "Minibar",
                                        "Luxury bathrooms",
                                        "Butler Service",
                                        "Separate living areas in higher categories",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro">
                                    Best for travelers who want a mature
                                    luxury suite product with flexible
                                    indoor/outdoor river viewing.
                                </p>
                            </div>
                        </div>

                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Celebrity Suites</span>
                            </div>
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Celebrity Suites</h3>
                                <p className="sfe-cabins-text">
                                    Celebrity is bringing some familiar
                                    ideas from its ocean fleet into river
                                    cruising. Its current river product
                                    includes:
                                </p>
                                <ul className="sfe-cabins-list">
                                    {[
                                        "King-size beds",
                                        "River-facing accommodations",
                                        "Infinite Balcony-style suites",
                                        "Skylight Infinite Balcony Suites",
                                        "Butler service in suites",
                                        "Premium amenities",
                                        "Complimentary minibar",
                                        "In-room breakfast",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sfe-cabins-list-item">
                                            <CheckCircle size={16} strokeWidth={2.5} className="sfe-cabins-list-icon" />
                                            <span className="sfe-cabins-list-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sfe-cabins-outro">
                                    Celebrity's river-cruise information
                                    confirms that suite guests receive
                                    butler service, upgraded amenities and
                                    additional dining and service
                                    benefits. Best for travelers who want
                                    modern suite design and innovative
                                    approaches to river views.
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
                        <h2 className="sva-section-title">Best For</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div className="sva-choice-grid" style={{ marginBottom: "24px" }}>
                            <div className="sva-choice-item">
                                <strong>Scenic</strong> — Travelers who want a mature luxury suite product with flexible indoor/outdoor river viewing.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Celebrity</strong> — Travelers who want modern suite design and innovative approaches to river views.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BALCONY COMPARISON ─────────────────────────────────── */}
            <section className="sva-balcony-section" id="balconies">
                <div className="sva-balcony-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity Balcony Experience</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This may be one of the closest comparisons.
                        </p>
                    </div>

                    <div className="sva-balcony-grid">
                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Sun size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Scenic — Sun Lounge</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Scenic: Sun Lounge</h3>
                                <p className="sva-balcony-card-text">
                                    Scenic's signature balcony concept
                                    creates a flexible space where
                                    travelers can enjoy river views while
                                    remaining protected from changing
                                    weather.
                                </p>
                            </div>
                        </div>

                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Home size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Celebrity — Infinite Balcony / Skylight Infinite Balcony</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Celebrity: Infinite Balcony / Skylight Infinite Balcony</h3>
                                <p className="sva-balcony-card-text">
                                    Celebrity is applying its modern
                                    balcony technology to river cruising.
                                    Celebrity describes its Skylight
                                    Infinite Balcony Suites as a new
                                    river-cruise accommodation concept
                                    that incorporates a large ceiling
                                    window and separate living area.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box">
                        <h4 className="sva-choice-title">Winner:</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Scenic</strong> for the established Sun Lounge concept.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Celebrity</strong> for innovative new balcony technology.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── FIRST-TIME RIVER CRUISERS ──────────────────────────── */}
            <section className="sva-info-section" id="first-time-cruisers" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity for First-Time River Cruisers</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Choose Scenic if you want:</h3>
                                <p className="sva-info-card-text">
                                    A well-established luxury river cruise experience with a proven operating model.
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Choose Celebrity if you want:</h3>
                                <p className="sva-info-card-text">
                                    You have sailed Celebrity Ocean Cruises and want to experience the brand's approach on European rivers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text">
                            This is one of Celebrity's biggest potential advantages: Brand familiarity. A traveler who already enjoys Celebrity's ocean experience may find the move to Celebrity River Cruises particularly appealing.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── SERVICE (GENERAL) ────────────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="food-lovers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity: Service</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Luxury river cruising depends heavily on service.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Scenic has an established service culture and emphasizes its "Nth Degree" approach to personalized service.
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Celebrity: Its current river ships emphasize:</h3>
                                <ul className="sva-info-list">
                                    {["Personalized service", "Butler service", "Daily housekeeping", "Turndown", "In-room amenities"].map((item, idx) => (
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
                        <p className="sva-winner-text">Scenic has the advantage in established river-cruise service experience. Celebrity has a strong foundation, particularly in suite service.</p>
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
                                deciding between Scenic and Celebrity.
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
                        <h2 className="sva-section-title">Scenic vs Celebrity Dining</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Dining is another major part of the comparison.
                        </p>
                    </div>

                    <div className="sva-dining-grid">
                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Utensils size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Scenic Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Scenic</h3>
                                <p className="sva-dining-card-text">
                                    Scenic offers a mature luxury dining program with multiple venues and destination-inspired cuisine. Its all-inclusive model makes dining one of the central components of the experience.
                                </p>
                                <p className="sva-dining-card-text" style={{ marginTop: "12px" }}>
                                    Best for: Travelers who want variety and an established luxury river dining program.
                                </p>
                            </div>
                        </div>

                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Wine size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Celebrity Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Celebrity</h3>
                                <p className="sva-dining-card-text">
                                    Celebrity is bringing its established culinary identity into the river environment. Celebrity's current ships include innovative dining spaces, including the Magic Edge dining pods aboard Celebrity Seeker.
                                </p>
                                <p className="sva-dining-card-text" style={{ marginTop: "12px" }}>
                                    Best for: Travelers who want modern dining environments and a contemporary culinary experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-verdict-box">
                        <h4 className="sva-verdict-title">Verdict:</h4>
                        <div className="sva-verdict-grid">
                            <div className="sva-verdict-item">
                                <strong>Scenic</strong> has the advantage in established river-cruise dining experience.
                            </div>
                            <div className="sva-verdict-item">
                                <strong>Celebrity</strong> has the advantage in new design concepts.
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── BUTLER SERVICE ─────────────────────────────────── */}
            <section className="sva-service-section" id="service">
                <div className="sva-service-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity Butler Service</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both brands can appeal to travelers who want elevated personal service.</p>
                    </div>

                    <div className="sva-service-grid">
                        <div className="sva-service-card">
                            <div className="sva-service-img-placeholder">
                                <Bell size={48} className="sva-service-img-icon" strokeWidth={1.2} />
                                <span className="sva-service-img-label">Scenic Butler Service</span>
                            </div>
                            <div className="sva-service-content">
                                <h3 className="sva-service-card-title">Scenic</h3>
                                <p className="sva-service-card-text">
                                    Scenic is well known for its Butler Service as part of its ultra-luxury positioning.
                                </p>
                            </div>
                        </div>

                        <div className="sva-service-card">
                            <div className="sva-service-img-placeholder">
                                <Users size={48} className="sva-service-img-icon" strokeWidth={1.2} />
                                <span className="sva-service-img-label">Celebrity Butler Service</span>
                            </div>
                            <div className="sva-service-content">
                                <h3 className="sva-service-card-title">Celebrity</h3>
                                <p className="sva-service-card-text">
                                    Celebrity's river product also includes butler service in every suite on its current ships.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "24px" }}>
                        <p className="sva-notes-text" style={{ fontWeight: 600, marginBottom: "8px" }}>Why this matters</p>
                        <p className="sva-notes-text">Butler service can be especially valuable for: Special occasions, Suite guests, Travelers with complex requests, Couples celebrating milestones, Travelers who prefer highly personalized service.</p>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "16px" }}>
                        <p className="sva-notes-text">Verdict: Very close. Celebrity's inclusion of butler service in every suite is a particularly important point for travelers comparing the two brands.</p>
                    </div>
                </div>
            </section>

            {/* ── EXCURSIONS (FIRST) ─────────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="tour-directors">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity: Excursions</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">A river cruise is ultimately about the destinations.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic has a mature excursion model built around:</h3>
                                <ul className="sva-info-list">
                                    {["Included excursions", "Scenic Freechoice", "Scenic Enrich", "Cultural experiences", "Active experiences", "Local exploration"].map((item, idx) => (
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
                                <h3 className="sva-info-card-title text-avalon">Celebrity</h3>
                                <p className="sva-info-card-text">
                                    Celebrity's new river program focuses on immersive European experiences and bringing travelers closer to local culture, history and destinations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text"><strong>Scenic advantage:</strong> More established excursion infrastructure.</p>
                        <p className="sva-notes-text" style={{ marginTop: "8px" }}><strong>Celebrity advantage:</strong> Fresh approach to European destination experiences.</p>
                    </div>
                </div>
            </section>



            {/* ── EXCURSIONS ──────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="excursions">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity: Which Has Better Excursions?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <p className="sfe-dining-noimg-text" style={{ marginBottom: "12px" }}>
                            At this point, Scenic has the advantage in experience and breadth because it has a much more established river program.
                        </p>
                        <p className="sfe-dining-noimg-text" style={{ marginBottom: "12px" }}>
                            Celebrity is the more interesting choice for travelers who want to experience a new generation of river cruising.
                        </p>
                        <p className="sfe-dining-noimg-text">
                            For a specific departure, however, compare the actual daily excursion schedule.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── WHAT IS INCLUDED ──────────────────────────────────── */}
            <section className="sva-included-section" id="whats-included">
                <div className="sva-included-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity: Is One More All-Inclusive?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is one of the most important questions—and the answer is both are highly inclusive.</p>
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
                                    Scenic explicitly markets its river cruises as truly all-inclusive. Its current river program emphasizes an inclusive experience covering major elements of the journey.
                                </p>
                            </div>
                        </div>

                        <div className="sva-included-card">
                            <div className="sva-included-img-placeholder">
                                <Wallet size={48} className="sva-included-img-icon" strokeWidth={1.2} />
                                <span className="sva-included-img-label">Celebrity Inclusions</span>
                            </div>
                            <div className="sva-included-content">
                                <h3 className="sva-included-card-title">Celebrity</h3>
                                <p className="sva-included-card-text">
                                    Celebrity also includes substantial elements in the river fare, but travelers should carefully review the exact inclusions attached to their itinerary and cabin. Celebrity's current river information includes accommodations, dining, selected beverages and other services, with additional benefits attached to suite categories.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "24px" }}>
                        <p className="sva-notes-text">Winner: Scenic for the clearest established all-inclusive positioning.</p>
                    </div>
                </div>
            </section>



            {/* ── COUPLES / FIRST-TIME / ACTIVE ──────────────────────── */}
            <section className="sfe-family-section" id="couples" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "8px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Celebrity for Couples</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead">Both are excellent for couples.</p>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row">
                                <div className="sfe-dining-noimg-icon-box">
                                    <Heart size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="sfe-dining-noimg-title">Choose Scenic for:</h3>
                            </div>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Established ultra-luxury",
                                    "Romantic suites",
                                    "Butler service",
                                    "Premium dining",
                                    "Curated excursions",
                                    "Special occasions",
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
                                <h3 className="sfe-dining-noimg-title">Choose Celebrity for:</h3>
                            </div>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Contemporary design",
                                    "Innovative suites",
                                    "Modern river experience",
                                    "Wellness",
                                    "New ships",
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
                        Winner: Tie—based on travel style.
                    </p>
                </div>
            </section>

            {/* ── HONEYMOONS AND ANNIVERSARIES ─────────────────────────── */}
            <section className="sfe-firsttime-section" id="honeymoons-anniversaries" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sfe-firsttime-container">
                    <div className="sfe-firsttime-header">
                        <h2 className="sfe-firsttime-title">Scenic vs Celebrity for Honeymoons and Anniversaries</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead" style={{ marginTop: "16px" }}>
                            For a milestone trip, the ship is only one part of the equation.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto 32px auto" }}>
                        <p style={{ fontWeight: 600, fontSize: "16px", color: "var(--navy)", marginBottom: "16px" }}>Consider:</p>
                        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px 24px", listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                "Suite category",
                                "Balcony",
                                "Dining",
                                "Excursions",
                                "Pre-cruise hotel",
                                "Transfers",
                                "Romantic experiences",
                                "Time in port"
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <CheckCircle size={16} style={{ color: "var(--navy)" }} />
                                    <span className="sfe-dining-noimg-list-text" style={{ fontSize: "15px", color: "var(--text-body)" }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                                <div className="sfe-dining-noimg-icon-box" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--navy-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy)" }}>
                                    <Sparkles size={20} />
                                </div>
                                <h3 className="sfe-dining-noimg-title" style={{ margin: 0 }}>Scenic</h3>
                            </div>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: 0 }}>
                                Better for travelers who want a fully established ultra-luxury experience.
                            </p>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <div className="sfe-dining-noimg-header-row" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                                <div className="sfe-dining-noimg-icon-box" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--navy-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy)" }}>
                                    <Gem size={20} />
                                </div>
                                <h3 className="sfe-dining-noimg-title" style={{ margin: 0 }}>Celebrity</h3>
                            </div>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: 0 }}>
                                Interesting for travelers who want something new and contemporary.
                            </p>
                        </div>
                    </div>
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
            <section className="sva-ships-section" id="ships" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity: Which Has Better Ships?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This is one of the most interesting categories.
                        </p>
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
                                    Scenic's Space-Ships are designed around a proven luxury-river concept. Key characteristics include:
                                </p>
                                <ul className="sva-ships-list" style={{ marginBottom: "16px" }}>
                                    {[
                                        "Spacious suites",
                                        "Sun Lounge balconies",
                                        "Multiple dining venues",
                                        "Wellness spaces",
                                        "Observation areas",
                                        "Contemporary interiors",
                                        "Personalized service",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Scenic's ships are particularly recognizable for their Sun Lounge suite concept.
                                </p>
                            </div>
                        </div>

                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Ship size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Celebrity River Ships</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Celebrity River Ships</h3>
                                <p className="sva-ships-card-text" style={{ fontSize: "16px", marginBottom: "16px" }}>
                                    Celebrity is taking a more experimental approach to river-ship design. Celebrity Compass features:
                                </p>
                                <ul className="sva-ships-list" style={{ marginBottom: "16px" }}>
                                    {[
                                        "Open-air lounges",
                                        "Skylight Infinite Balcony Suites",
                                        "Contemporary interiors",
                                        "Personalized service",
                                        "Wellness facilities",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Celebrity Seeker adds its Magic Edge dining pods and hybrid propulsion system.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box" style={{ marginTop: "32px" }}>
                        <h4 className="sva-choice-title">Verdict</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Scenic</strong> wins for proven river-cruise design and experience.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Celebrity</strong> wins for newness and design innovation.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR FAMILIES ──────────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="families">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity for Families</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This comparison is more nuanced. Scenic's river product is traditionally associated with luxury adult travel. Celebrity's new river program has positioned itself as an experience that can appeal to a broader range of travelers, and current Celebrity river materials highlight a more flexible approach to modern river cruising.
                        </p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Choose Celebrity if:</h3>
                                <ul className="sva-info-list">
                                    {["You want a newer product", "You are traveling with different generations", "Modern design appeals to your group"].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Choose Scenic if:</h3>
                                <ul className="sva-info-list">
                                    {["Luxury service is the priority", "Adults are the primary travelers", "You want a mature river-cruise program"].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
                                    Can offer excellent value if you will take advantage of:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "Included excursions",
                                        "Premium beverages",
                                        "Butler service",
                                        "Specialty dining",
                                        "Enrich experiences",
                                        "Pre/post-cruise inclusions where applicable"
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
                                <span className="sva-luxury-img-label">Celebrity Value</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Celebrity</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    May offer strong value for travelers who want:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "New ships",
                                        "Modern design",
                                        "Suite benefits",
                                        "Butler service",
                                        "Celebrity's brand experience",
                                        "Innovative accommodations"
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
                        <h4 className="sva-winner-title">Verdict:</h4>
                        <p className="sva-winner-text">Scenic for comprehensive inclusions. Celebrity for travelers attracted to the new-ship experience.</p>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR SOLO TRAVELERS ────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="solo-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity for Solo Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both can work very well for solo travelers.</p>
                    </div>

                    <div className="sva-solo-layout">
                        <div className="sva-info-card" style={{ padding: "40px" }}>
                            <p className="sva-info-card-text" style={{ marginBottom: "16px", fontWeight: 500 }}>
                                Look closely at:
                            </p>
                            <ul className="sva-info-list" style={{ marginBottom: "20px" }}>
                                {["Single supplement", "Solo cabin options", "Dining arrangements", "Excursion groups", "Suite pricing", "Ship size"].map((item, idx) => (
                                    <li key={idx} className="sva-info-item">
                                        <CheckCircle size={16} className="sva-info-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="sva-solo-highlights">
                                <div className="sva-highlight-item border-avalon-left">
                                    Celebrity's newer ships may be attractive to solo travelers who prefer modern social spaces.
                                </div>
                                <div className="sva-highlight-item border-scenic-left">
                                    Scenic's personalized service can be valuable to travelers who want a more established luxury environment.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CELEBRITY OCEAN CRUISE FANS ────────────────────────── */}
            <section className="sva-info-section bg-white" id="active-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Celebrity for Celebrity Ocean Cruise Fans</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This deserves its own section because it represents a major search opportunity. If you already enjoy Celebrity Cruises, you may naturally ask: Should I try Celebrity River Cruises instead of Scenic? The answer depends on what you want.
                        </p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-avalon">
                            <div className="sva-luxury-img-placeholder">
                                <Compass size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Choose Celebrity River</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Choose Celebrity River if:</h3>
                                <ul className="sva-info-list">
                                    {[
                                        "You already love the Celebrity brand",
                                        "You want modern design",
                                        "You like contemporary ship interiors",
                                        "You want a new river experience",
                                        "You value suite-level butler service",
                                        "You want to stay within a familiar cruise family",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-info-item">
                                            <CheckCircle size={16} className="sva-info-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-scenic">
                            <div className="sva-luxury-img-placeholder">
                                <Bike size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Choose Scenic</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Choose Scenic if:</h3>
                                <ul className="sva-info-list">
                                    {[
                                        "You want dedicated river-cruise expertise",
                                        "You want a mature ultra-luxury river program",
                                        "You want extensive all-inclusive inclusions",
                                        "You want established river itineraries",
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
                        <h4 className="sva-choice-title">Winner:</h4>
                        <p className="sva-winner-text">Scenic for flexibility and activity choices.</p>
                    </div>
                </div>
            </section>
            {/* ── PRICE ──────────────────────────────────── */}
            <section className="sfe-cost-section" id="price" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "24px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Celebrity: Price</h2>
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
                        <h2 className="adg-h2">Scenic vs Celebrity: Pros &amp; Cons</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-grid" style={{ marginBottom: "24px" }}>
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Scenic Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Established luxury river cruise brand",
                                    "Ultra-luxury positioning",
                                    "Truly all-inclusive philosophy",
                                    "Extensive European itineraries",
                                    "Southeast Asian river cruises",
                                    "Sun Lounge suites",
                                    "Butler service",
                                    "Strong excursion program",
                                    "Scenic Freechoice",
                                    "Scenic Enrich"
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
                            <h3 className="sfe-dining-noimg-title">Celebrity River Cruises Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Brand-new river ships",
                                    "Contemporary design",
                                    "Innovative balcony concepts",
                                    "Butler service in suites",
                                    "Modern wellness spaces",
                                    "New culinary concepts",
                                    "Familiar Celebrity brand",
                                    "European destination focus",
                                    "Smaller river-ship environment"
                                ].map((item, idx) => (
                                    <li key={idx} className="sfe-dining-noimg-list-item">
                                        <span className="sfe-dining-noimg-list-icon">
                                            <Check size={16} />
                                        </span>
                                        <span className="sfe-dining-noimg-list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p style={{
                                margin: "12px 0 20px 0",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                color: "var(--text-muted)",
                                fontStyle: "italic",
                                background: "var(--bg-white)",
                                padding: "12px 16px",
                                borderRadius: "8px",
                                borderLeft: "3px solid var(--navy-light)",
                                border: "1px solid var(--navy-border)"
                            }}>
                                Celebrity's current fleet pages emphasize fewer guests, more space and new technology as core elements of the river product.
                            </p>
                        </div>
                    </div>

                    <div className="scenic-exclusions-grid" style={{ marginBottom: "12px" }}>
                        {[
                            "Premium pricing",
                            "Less \"new\" feeling than Celebrity's new river ships",
                            "Travelers seeking the newest ship technology may prefer Celebrity"
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
                            "Newer river program with less operating history",
                            "Smaller established river itinerary portfolio",
                            "Travelers wanting a long-established river-cruise brand may prefer Scenic",
                            "Exact inclusions should be checked carefully by sailing"
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



            {/* ── WHO SHOULD CHOOSE EACH LINE ─────────────────────────── */}
            <section className="sfe-firsttime-section" id="who-should-choose" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="sfe-firsttime-container">
                    <div className="sfe-firsttime-header">
                        <h2 className="sfe-firsttime-title">Scenic vs Celebrity <br /> Which Should You Choose?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead" style={{ marginTop: "16px" }}>
                            Here's the easiest way to decide.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Scenic if you want:</h3>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: "8px 0 0 0" }}>
                                Established ultra-luxury + all-inclusive travel + mature river expertise + extensive destination experiences.
                            </p>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Celebrity if you want:</h3>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: "8px 0 0 0" }}>
                                New ships + modern design + innovative suites + contemporary luxury + the Celebrity brand.
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
                            Celebrity before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        alt="A Scenic Space-Ship and an Celebrity Panorama-class river ship sailing a European river"
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
                                    Scenic vs Celebrity — <br /> There Isn't a Universal Winner
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Choose Scenic for luxury,
                                        inclusions, and personalized
                                        service. Choose Celebrity for space,
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
                                                Celebrity deserves serious
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
                                            "Compare Scenic and Celebrity itineraries and ships",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain current Scenic and Celebrity promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic and Celebrity with other luxury river cruise lines",
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