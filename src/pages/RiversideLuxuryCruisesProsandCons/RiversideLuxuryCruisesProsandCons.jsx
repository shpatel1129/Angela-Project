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
    Waves,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Utensils,
    Music,
    Snowflake,
    BedDouble,
    Palette,
    Gem,
    Heart,
    Wine,
    Landmark,
    ScrollText,
    Gift,
    Map,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Luxury Cruises Pros and Cons
   photography once available. Paths assume a new
   /assets/RiversideLuxuryCruisesProsAndCons folder. */
// import HeroImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-hero.jpg";
// import SuiteImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-suite.jpg";
// import DiningImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-dining.jpg";
// import ShipsImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-ship.jpg";
// import LoungeImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-lounge.jpg";
// import WorthItImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-evening-lounge.jpg";
// import CTAImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-ship-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#webpage",
            name: "Riverside Luxury Cruises Pros and Cons | Honest Luxury River Cruise Review",
            url: "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons",
            description:
                "Explore the pros and cons of Riverside Luxury Cruises. Learn about spacious suites, gourmet dining, personalized service, potential drawbacks, and whether Riverside is the right luxury river cruise for you.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#article",
            headline: "Riverside Luxury Cruises Pros and Cons | Is Riverside Worth It?",
            description:
                "An honest look at the biggest advantages and potential drawbacks of Riverside Luxury Cruises, covering suites, dining, service, itineraries, pricing, and who Riverside is best suited for.",
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
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#review",
            itemReviewed: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            reviewBody:
                "Riverside Luxury Cruises stands out for its spacious suites, boutique atmosphere, and personalized hospitality, though its smaller fleet and premium pricing may not suit every traveler.",
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#breadcrumb",
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
                    name: "Riverside Luxury Cruises Pros and Cons",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons",
                },
            ],
        },
        {
            "@type": "Cruise",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#cruise",
            name: "Riverside Luxury Cruises",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Budapest, Hungary" },
                    { "@type": "ListItem", position: 2, name: "Vienna, Austria" },
                    { "@type": "ListItem", position: 3, name: "Amsterdam, Netherlands" },
                    { "@type": "ListItem", position: 4, name: "Strasbourg, France" },
                    { "@type": "ListItem", position: 5, name: "Lyon, France" },
                    { "@type": "ListItem", position: 6, name: "Avignon, France" },
                    { "@type": "ListItem", position: 7, name: "Cologne, Germany" },
                    { "@type": "ListItem", position: 8, name: "Passau, Germany" },
                ],
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#service",
            serviceType: "Luxury River Cruise Comparison & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Riverside Luxury Cruises with other luxury river cruise lines and choose the best itinerary, ship, and suite.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#itemlist",
            name: "What This Riverside Luxury Cruises Pros and Cons Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "The Biggest Advantages of Riverside Luxury Cruises" },
                { "@type": "ListItem", position: 3, name: "Potential Drawbacks" },
                { "@type": "ListItem", position: 4, name: "Who Will Love Riverside?" },
                { "@type": "ListItem", position: 5, name: "Who Might Prefer Another Cruise Line?" },
                { "@type": "ListItem", position: 6, name: "Riverside vs. Other Luxury River Cruise Lines" },
                { "@type": "ListItem", position: 7, name: "Is Riverside Luxury Cruises Worth It?" },
                { "@type": "ListItem", position: 8, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the biggest advantages of Riverside Luxury Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The largest suites, personalized service, gourmet dining, boutique atmosphere, and elegant European itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the biggest disadvantages?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A smaller fleet, fewer itineraries, premium pricing, and limited onboard entertainment compared to ocean cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside worth the price?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers seeking luxury accommodations and personalized service, many find Riverside offers excellent value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The Danube and Rhine itineraries are particularly popular with first-time guests.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside include excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries include selected guided excursions, with optional premium experiences available.",
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
                    name: "Is Riverside family friendly?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Families are welcome, but the cruise experience is primarily designed for adults.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside ship is best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Mozart for Danube cruises, Riverside Ravel for Rhine cruises, and Riverside Debussy for Rhône cruises — each offers the same high standard of luxury and service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside better than Scenic or Uniworld?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Each cruise line has its strengths. Riverside stands out for its spacious suites, boutique atmosphere, and personalized hospitality, while Scenic and Uniworld offer different inclusions and onboard styles.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare cruise lines, explain promotions, and help you choose the best itinerary and suite.",
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
            q: "What are the biggest advantages of Riverside Luxury Cruises?",
            a: "The largest suites, personalized service, gourmet dining, boutique atmosphere, and elegant European itineraries.",
        },
        {
            q: "What are the biggest disadvantages?",
            a: "A smaller fleet, fewer itineraries, premium pricing, and limited onboard entertainment compared to ocean cruises.",
        },
        {
            q: "Is Riverside worth the price?",
            a: "For travelers seeking luxury accommodations and personalized service, many find Riverside offers excellent value.",
        },
        {
            q: "Is Riverside good for first-time river cruisers?",
            a: "Yes. The Danube and Rhine itineraries are particularly popular with first-time guests.",
        },
        {
            q: "Does Riverside include excursions?",
            a: "Most itineraries include selected guided excursions, with optional premium experiences available.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals.",
        },
        {
            q: "Is Riverside family friendly?",
            a: "Families are welcome, but the cruise experience is primarily designed for adults.",
        },
        {
            q: "Which Riverside ship is best?",
            a: "Riverside Mozart for Danube cruises, Riverside Ravel for Rhine cruises, and Riverside Debussy for Rhône cruises — each offers the same high standard of luxury and service.",
        },
        {
            q: "Is Riverside better than Scenic or Uniworld?",
            a: "Each cruise line has its strengths. Riverside stands out for its spacious suites, boutique atmosphere, and personalized hospitality, while Scenic and Uniworld offer different inclusions and onboard styles.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can compare cruise lines, explain promotions, and help you choose the best itinerary and suite.",
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

/* ── Quick Overview Data (Pros vs Cons) ───────────────────────── */
const quickOverviewData = [
    { key: "row1", pro: "Spacious luxury suites", con: "Smaller fleet than many competitors" },
    { key: "row2", pro: "Boutique atmosphere", con: "Fewer itinerary options" },
    { key: "row3", pro: "Personalized service", con: "Limited onboard entertainment" },
    { key: "row4", pro: "Excellent cuisine", con: "Not designed for families with young children" },
    { key: "row5", pro: "Elegant modern ships", con: "Premium pricing" },
    { key: "row6", pro: "Relaxed onboard experience", con: "Fewer departure dates" },
];

/* ── The Biggest Advantages Data ──────────────────────────────── */
const prosData = [
    {
        id: "suites",
        title: "Spacious Luxury Suites",
        badge: "Suites",
        icon: Hotel,
        desc: "One of Riverside's greatest strengths is the size of its accommodations. Compared to many European river cruise lines, the generous space creates a boutique hotel experience rather than a traditional cruise cabin.",
        columns: [
            {
                label: "Riverside offers:",
                items: ["Larger suites", "Comfortable seating areas", "Marble bathrooms", "Premium linens", "Elegant contemporary décor"],
            },
        ],
    },
    {
        id: "boutique",
        title: "Boutique Luxury Experience",
        badge: "Boutique",
        icon: Sparkles,
        desc: "Unlike larger cruise companies, Riverside focuses on intimate luxury. Guests often appreciate the quieter environment and attentive service.",
        columns: [
            {
                label: "Benefits include:",
                items: ["Fewer guests", "Personalized attention", "Peaceful atmosphere", "Less crowded public areas", "Relaxed pace"],
            },
        ],
    },
    {
        id: "service",
        title: "Exceptional Personalized Service",
        badge: "Service",
        icon: Users,
        desc: "Riverside places a strong emphasis on hospitality. With a smaller number of passengers onboard, crew members can often remember guest preferences and provide a more customized experience.",
        columns: [
            {
                label: "Guests frequently praise:",
                items: ["Friendly crew", "Personalized attention", "Quick service", "Professional staff", "Attention to detail"],
            },
        ],
    },
    {
        id: "dining",
        title: "Outstanding Dining",
        badge: "Dining",
        icon: Utensils,
        desc: "Dining is consistently one of Riverside's strongest features. Meals reflect the destinations visited, creating a culinary journey alongside the cruise itself.",
        columns: [
            {
                label: "Expect:",
                items: ["Gourmet cuisine", "Fresh seasonal ingredients", "Regional specialties", "Excellent presentation", "Local wines", "Multi-course dinners"],
            },
        ],
    },
    {
        id: "itineraries",
        title: "Beautiful European Itineraries",
        badge: "Itineraries",
        icon: MapPinned,
        desc: "Riverside sails some of Europe's most iconic rivers, including the Danube, Rhine, and Rhône. Each itinerary blends culture, history, cuisine, and scenic cruising.",
        columns: [
            {
                label: "Popular destinations include:",
                items: ["Budapest", "Vienna", "Amsterdam", "Strasbourg", "Lyon", "Avignon", "Cologne", "Passau"],
            },
        ],
    },
    {
        id: "ships",
        title: "Elegant Contemporary Ships",
        badge: "Ships",
        icon: Ship,
        desc: "Riverside ships feature modern interiors and sophisticated design. The overall atmosphere feels luxurious without being overly formal.",
        columns: [
            {
                label: "Ships feature:",
                items: ["Modern interiors", "Comfortable lounges", "Panoramic windows", "Sun decks", "Sophisticated design"],
            },
        ],
    },
    {
        id: "relaxed",
        title: "Relaxed Atmosphere",
        badge: "Relaxed",
        icon: Waves,
        desc: "Unlike ocean cruises, Riverside focuses on destination immersion rather than nonstop entertainment. This appeals to travelers seeking relaxation instead of busy schedules.",
        columns: [
            {
                label: "Guests enjoy:",
                items: ["Scenic cruising", "Wine tastings", "Destination lectures", "Live music", "Quiet lounges", "Meaningful conversations"],
            },
        ],
    },
];

/* ── Potential Drawbacks Data ──────────────────────────────────── */
const consData = [
    {
        id: "fleet",
        title: "Smaller Fleet",
        badge: "Fleet Size",
        icon: Ship,
        desc: "Riverside currently operates only a handful of ships. While this creates consistency in service, travelers should book early for the best selection.",
        columns: [
            {
                label: "This also means:",
                items: ["Fewer itineraries", "Limited departure dates", "Popular sailings may sell out quickly"],
            },
        ],
    },
    {
        id: "pricing",
        title: "Premium Pricing",
        badge: "Pricing",
        icon: BadgePercent,
        desc: "Riverside is positioned in the luxury market. Budget-conscious travelers may find other river cruise lines more affordable, though they may offer fewer luxury inclusions.",
        columns: [
            {
                label: "Fares generally reflect:",
                items: ["Larger accommodations", "Personalized service", "Gourmet dining", "Boutique experience"],
            },
        ],
    },
    {
        id: "entertainment",
        title: "Limited Entertainment",
        badge: "Entertainment",
        icon: Music,
        desc: "If you're expecting Broadway-style productions, casinos, nightclubs, or large-scale entertainment, Riverside may not be the right fit. Instead, the focus is on relaxation and cultural enrichment.",
        columns: [
            {
                label: "Instead, the focus is on:",
                items: ["Relaxation", "Scenic cruising", "Cultural enrichment", "Fine dining", "Conversation"],
            },
        ],
    },
    {
        id: "families",
        title: "Not Designed for Young Families",
        badge: "Families",
        icon: Users,
        desc: "While families are welcome, Riverside primarily caters to adults. The experience is best suited to couples, solo travelers, and adult family groups.",
        columns: [
            {
                label: "There are:",
                items: ["No children's clubs", "Few kid-focused activities", "Minimal family entertainment"],
            },
        ],
    },
    {
        id: "venues",
        title: "Limited Dining Venues",
        badge: "Dining Venues",
        icon: Utensils,
        desc: "Compared with large ocean cruise ships, river ships naturally have fewer restaurants. However, most guests consider quality more important than quantity.",
        columns: [
            {
                label: "Riverside compensates with:",
                items: ["Exceptional food quality", "Rotating menus", "Regional specialties", "Personalized service"],
            },
        ],
    },
    {
        id: "seasonal",
        title: "Seasonal Availability",
        badge: "Seasonality",
        icon: Snowflake,
        desc: "River cruising depends on water levels and seasonal operating schedules. Travelers looking for year-round cruising may find ocean cruises offer more flexibility.",
        columns: [
            {
                label: "Good to know:",
                items: ["Most sailings run spring through late fall", "Holiday sailings available in winter", "Schedules are weather-dependent"],
            },
        ],
    },
];



/* ── Main Component ──────────────────────────────────────────────── */
const RiversideLuxuryCruisesProsAndCons = () => {
    const [readMore, setReadMore] = useState(false);
    const [activePro, setActivePro] = useState("suites");
    const [activeCon, setActiveCon] = useState("fleet");

    const currentPro = prosData.find((d) => d.id === activePro) || prosData[0];
    const CurrentProIcon = currentPro.icon;

    const currentCon = consData.find((d) => d.id === activeCon) || consData[0];
    const CurrentConIcon = currentCon.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Riverside Luxury Cruises Pros and Cons | Honest Luxury River Cruise Review</title>
                <meta name="title" content="Riverside Luxury Cruises Pros and Cons | Is Riverside Worth It?" />
                <meta
                    name="description"
                    content="Explore the pros and cons of Riverside Luxury Cruises. Learn about spacious suites, gourmet dining, personalized service, potential drawbacks, and whether Riverside is the right luxury river cruise for you."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Luxury Cruises Pros and Cons</h1>

                    <p>
                        Every luxury river cruise line offers a unique experience,
                        and Riverside Luxury Cruises has quickly established
                        itself as one of Europe's most elegant boutique river
                        cruise brands. With spacious suites, personalized
                        service, fine dining, and thoughtfully designed
                        itineraries, Riverside appeals to travelers seeking a
                        more refined way to explore Europe's rivers.
                    </p>

                    {readMore && (
                        <p>
                            However, no cruise line is perfect for everyone. The
                            ideal choice depends on your travel style,
                            expectations, and priorities. This guide provides an
                            honest look at the biggest advantages and potential
                            drawbacks of Riverside Luxury Cruises to help you
                            decide if it's the right fit for your next European
                            vacation.
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
                                    <th>Pros</th>
                                    <th>Cons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickOverviewData.map((row) => (
                                    <tr key={row.key}>
                                        <td>{row.pro}</td>
                                        <td>{row.con}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── THE BIGGEST ADVANTAGES ────────────────────────────────────── */}
            <section className="luc-destinations-section" id="biggest-advantages">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">The Biggest Advantages of Riverside Luxury Cruises</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            From spacious suites to gourmet dining, here's what
                            travelers consistently praise most about sailing with
                            Riverside.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {prosData.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activePro === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActivePro(item.id)}
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

                        <div className="luc-dest-panel" key={activePro}>
                            <div className="luc-dest-img-wrap">
                                <img
                                    // src={undefined}
                                    alt={currentPro.title}
                                    className="luc-dest-img"
                                />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <CurrentProIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentPro.title}</span>
                                </div>
                            </div>

                            <p className="luc-dest-panel-desc">{currentPro.desc}</p>

                            <div className="luc-dest-columns">
                                {currentPro.columns.map((col, cIdx) => (
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

            {/* ── POTENTIAL DRAWBACKS ───────────────────────────────────────── */}
            <section className="rlc-drawbacks-section" id="potential-drawbacks">
                <div className="rlc-drawbacks-container">
                    <div className="rlc-drawbacks-header">
                        <h2 className="rlc-drawbacks-title">Potential Drawbacks</h2>
                        <div className="rlc-drawbacks-accent"></div>
                        <p className="rlc-drawbacks-intro">
                            No cruise line is perfect for everyone — here are the
                            trade-offs worth considering before you book.
                        </p>
                    </div>

                    <div className="rlc-drawbacks-grid">
                        {consData.map((item) => {
                            const ConIcon = item.icon;
                            return (
                                <div key={item.id} className="rlc-drawback-card">
                                    <div className="rlc-drawback-icon-wrap">
                                        <ConIcon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="rlc-drawback-content">
                                        <span className="rlc-drawback-badge">{item.badge}</span>
                                        <h3 className="rlc-drawback-card-title">{item.title}</h3>
                                        <p className="rlc-drawback-card-desc">{item.desc}</p>
                                        
                                        <div className="rlc-drawback-details">
                                            {item.columns.map((col, cIdx) => (
                                                <div key={cIdx} className="rlc-drawback-col">
                                                    <span className="rlc-drawback-col-label">{col.label}</span>
                                                    <ul className="rlc-drawback-list">
                                                        {col.items.map((bullet, bIdx) => (
                                                            <li key={bIdx} className="rlc-drawback-item">
                                                                <span className="rlc-drawback-dot"></span>
                                                                <span className="rlc-drawback-bullet-text">{bullet}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHO WILL LOVE RIVERSIDE? ───────────────────────────────────── */}
            <section className="adg-section" style={{backgroundColor: 'var(--bg-soft)'}}>
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
                                    style={{ height: "70vh", border: '1px solid' }}
                                />

                                <div className="adg-info-card">
                                    <div className="adg-card-meta">
                                        <Heart size={28} />
                                        <span className="adg-meta-label">
                                            Luxury European River Cruising
                                        </span>
                                    </div>

                                    <p className="adg-card-lead">
                                        If you value personalized service, elegant accommodations,
                                        destination-inspired cuisine, and immersive European
                                        experiences, Riverside is likely to exceed your expectations.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-list-side">
                                {[
                                    {
                                        title: "Luxury Travelers",
                                        icon: <Gem size={20} />,
                                    },
                                    {
                                        title: "Couples",
                                        icon: <Heart size={20} />,
                                    },
                                    {
                                        title: "First-Time River Cruisers",
                                        icon: <Ship size={20} />,
                                    },
                                    {
                                        title: "Food & Wine Enthusiasts",
                                        icon: <Wine size={20} />,
                                    },
                                    {
                                        title: "Cultural Travelers",
                                        icon: <Landmark size={20} />,
                                    },
                                    {
                                        title: "History Lovers",
                                        icon: <ScrollText size={20} />,
                                    },
                                    {
                                        title: "Anniversary Celebrations",
                                        icon: <Gift size={20} />,
                                    },
                                    {
                                        title: "Empty Nesters",
                                        icon: <Users size={20} />,
                                    },
                                    {
                                        title: "Retired Travelers",
                                        icon: <Map size={20} />,
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



            {/* ── RIVERSIDE VS OTHER LUXURY RIVER CRUISE LINES ───────────────── */}
            <section
                className="ugt-advantage-section"
                id="riverside-vs-other-luxury-river-cruise-lines"
            >
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">
                            Riverside Luxury Cruises
                        </span>

                        <h2 className="ugt-advantage-title">
                            Riverside vs. Other Luxury River Cruise Lines
                        </h2>

                        <div className="Asc-accent-line"></div>

                        <p className="ugt-advantage-intro">
                            Compared to competitors, Riverside is known for:
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        <div className="ugt-advantage-card">
                            <div className="ugt-icon-box">
                                <BedDouble size={28} strokeWidth={1.5} />
                            </div>

                            <h4 className="ugt-card-title">Spacious Accommodations</h4>

                            <p className="ugt-card-desc">
                                Enjoy some of the largest suites available in European river
                                cruising, offering generous living space and premium comfort.
                            </p>
                        </div>

                        <div className="ugt-advantage-card">
                            <div className="ugt-icon-box">
                                <Users size={28} strokeWidth={1.5} />
                            </div>

                            <h4 className="ugt-card-title">Personalized Hospitality</h4>

                            <p className="ugt-card-desc">
                                Boutique-style service with fewer guests allows the crew to
                                provide attentive, individualized experiences throughout your
                                voyage.
                            </p>
                        </div>

                        <div className="ugt-advantage-card">
                            <div className="ugt-icon-box">
                                <Palette size={28} strokeWidth={1.5} />
                            </div>

                            <h4 className="ugt-card-title">Modern Design</h4>

                            <p className="ugt-card-desc">
                                Elegant contemporary interiors create a sophisticated
                                atmosphere with stylish lounges, suites, and public spaces.
                            </p>
                        </div>

                        <div className="ugt-advantage-card">
                            <div className="ugt-icon-box">
                                <Sparkles size={28} strokeWidth={1.5} />
                            </div>

                            <h4 className="ugt-card-title">Relaxed Luxury</h4>

                            <p className="ugt-card-desc">
                                Experience a peaceful onboard environment focused on comfort,
                                fine service, and destination immersion rather than scheduled
                                entertainment.
                            </p>
                        </div>

                        <div className="ugt-advantage-card">
                            <div className="ugt-icon-box">
                                <Utensils size={28} strokeWidth={1.5} />
                            </div>

                            <h4 className="ugt-card-title">Gourmet Dining</h4>

                            <p className="ugt-card-desc">
                                Savor destination-inspired cuisine crafted with seasonal
                                ingredients that reflect the regions you visit along the way.
                            </p>
                        </div>
                    </div>


                </div>
            </section>


            {/* ── IS RIVERSIDE LUXURY CRUISES WORTH IT ─────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-it-worth-it">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Riverside Luxury Cruises Worth It?</h2>
                            <div className="rlc-lc-worth-accent"></div>
                            <p className="rlc-lc-worth-lead">
                                For travelers seeking spacious suites, exceptional
                                service, fine dining, boutique atmosphere, and
                                beautiful European itineraries, Riverside offers
                                excellent value within the luxury river cruise
                                market.
                            </p>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Rather than offering endless onboard
                                    activities, Riverside invests in the aspects
                                    that many luxury travelers value most —
                                    comfort, cuisine, and personalized
                                    hospitality.
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
                                    // src={WorthItImage}
                                    alt="Elegant lounge aboard a Riverside Luxury Cruise ship"
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

                        {/* ── WHO MIGHT PREFER ANOTHER CRUISE LINE ──────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="who-might-prefer-another-line">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Who Might Prefer Another Cruise Line?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Ocean cruises or larger river cruise operators may
                            better match these preferences.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {[
                            "Large ships with many restaurants",
                            "Extensive nightlife",
                            "Casinos",
                            "Family-focused entertainment",
                            "Children's programs",
                            "Budget-friendly fares",
                            "Adventure-focused activities",
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

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
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
                                Book the Cruise That Best Matches Your Travel Goals
                            </h3>
                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you compare
                                Riverside with other luxury cruise lines, choose
                                the best itinerary, recommend the right ship,
                                select the ideal suite, arrange airfare,
                                coordinate hotels, and organize transfers — so
                                every aspect of your trip is stress-free from
                                beginning to end.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional advice ensures you book the
                                    cruise that best matches your travel goals.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Compare Riverside with other luxury cruise lines" },
                                    { icon: <Compass size={18} />, label: "Choose the best itinerary" },
                                    { icon: <Ship size={18} />, label: "Recommend the right ship" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Arrange airfare" },
                                    { icon: <Hotel size={18} />, label: "Coordinate hotels" },
                                    { icon: <Anchor size={18} />, label: "Organize transfers" },
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
                            Everything travelers need to know before deciding if
                            Riverside Luxury Cruises is right for them.
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
                        alt="Riverside Luxury Cruise ship sailing along a European river"
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
                                    A Sophisticated Choice for <br /> Refined European Travel
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Luxury Cruises is an outstanding
                                        choice for travelers who value comfort,
                                        personalized service, and immersive
                                        European travel over flashy entertainment
                                        or large-ship amenities.

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
                                                Its spacious accommodations,
                                                gourmet dining, boutique
                                                atmosphere, and carefully curated
                                                itineraries create a sophisticated
                                                travel experience that rivals some
                                                of the finest luxury hotels.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">


                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you compare
                                                Riverside with other luxury river
                                                cruise lines, select the perfect
                                                itinerary and suite, and plan a
                                                seamless European river cruise
                                                tailored to your travel style.
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
                                            "Compare Riverside with other luxury cruise lines",
                                            "Choose the best itinerary",
                                            "Recommend the right ship",
                                            "Select the ideal suite",
                                            "Arrange airfare",
                                            "Coordinate hotels",
                                            "Organize transfers",
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

export default RiversideLuxuryCruisesProsAndCons;