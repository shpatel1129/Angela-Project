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
    Plane,
    Home,
    ShieldCheck,
    Calendar,
    Landmark,
    X,
    FileText,
    BadgePercent,
    Wine,
    Utensils,
    CheckCircle,
    Heart,
    Briefcase,
    Coffee,
    Bell,
    Gift,
    Luggage,
    MessageCircle,
    UserCheck,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Butler Service photography once
   available. Paths assume a new /assets/ScenicButlerService folder. */
// import HeroImage from "../../assets/ScenicButlerService/scenic-butler-hero.jpg";
// import SuiteImage from "../../assets/ScenicButlerService/scenic-butler-suite.jpg";
// import BreakfastImage from "../../assets/ScenicButlerService/scenic-butler-breakfast.jpg";
// import RequestImage from "../../assets/ScenicButlerService/scenic-butler-request.jpg";

import { Helmet } from "react-helmet-async";
import "../riversidecruises/RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../riversidecruises/RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/butler-service/#webpage",
            name: "Scenic River Cruise Butler Service: What Does It Include? (2026)",
            url: "https://www.tripsandships.com/scenic-river-cruises/butler-service/",
            description:
                "What does a Scenic River Cruise butler do? Learn what Scenic Butler Service includes, from in-suite assistance and unpacking to special requests, dining, excursions, and personalized service.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/butler-service/#article",
            headline: "Scenic River Cruise Butler Service: What Does It Include?",
            description:
                "A complete guide to Scenic Butler Service, including what your butler can help with, which suites are eligible, and whether upgrading to a butler-serviced suite is worth it.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/butler-service/#breadcrumb",
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
                    name: "Scenic River Cruise Butler Service",
                    item: "https://www.tripsandships.com/scenic-river-cruises/butler-service/",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/butler-service/#itemlist",
            name: "Scenic River Cruise Butler Service — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Does Every Scenic Guest Get Butler Service?" },
                { "@type": "ListItem", position: 3, name: "What Does a Scenic Butler Actually Do?" },
                { "@type": "ListItem", position: 4, name: "Butler Service for Special Occasions & Families" },
                { "@type": "ListItem", position: 5, name: "Butler Service for Solo Travelers" },
                { "@type": "ListItem", position: 6, name: "Butler Service vs Standard Cruise Service" },
                { "@type": "ListItem", position: 7, name: "Is Scenic Butler Service Worth It?" },
                { "@type": "ListItem", position: 8, name: "Which Scenic Suites Have Butler Service?" },
                { "@type": "ListItem", position: 9, name: "Butler vs Concierge & What's Not Included" },
                { "@type": "ListItem", position: 10, name: "Tips for Getting the Most From Your Butler" },
                { "@type": "ListItem", position: 11, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 12, name: "Scenic vs Other Luxury River Cruise Lines" },
                { "@type": "ListItem", position: 13, name: "Why a Luxury Travel Advisor Can Help" },
                { "@type": "ListItem", position: 14, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/butler-service/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Scenic Butler Service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic Butler Service provides personalized assistance to guests staying in eligible Scenic suites, helping with suite-related needs, special requests, and other aspects of the onboard experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does every Scenic suite have a butler?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Butler Service is associated with eligible suite categories, and inclusions can vary by ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What does a Scenic butler do?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A Scenic butler can assist with services such as unpacking and packing, in-suite breakfast or refreshments, special requests, and other personalized onboard needs.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can my Scenic butler unpack my luggage?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Unpacking and packing assistance is one of the services associated with Scenic Butler Service, subject to the applicable suite and onboard arrangements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I have breakfast in my Scenic suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Eligible suites with Butler Service can provide enhanced in-suite service, including breakfast arrangements. Confirm the exact service available on your ship and suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic Butler Service included in the cruise fare?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Butler Service is included with eligible suite categories rather than being a separate service that every guest receives.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic Butler Service worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It can be, particularly for travelers who value privacy, personalized service, in-suite dining, convenience, and additional assistance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can my butler help with special occasions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Tell the onboard team about birthdays, anniversaries, honeymoons, or other celebrations so appropriate arrangements can be considered.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a Scenic butler arrange dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Your butler can assist with certain dining-related requests and communicate preferences to the appropriate onboard team.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can my butler help with excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Your butler can assist with questions and certain arrangements connected with your cruise schedule, while the dedicated excursion team manages the actual excursion program.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Butler Service useful for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Solo travelers who value personalized attention and convenience may find Butler Service particularly appealing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Butler Service useful for seniors?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It can be especially valuable for travelers who appreciate assistance with luggage, in-suite service, and reducing the number of logistical tasks they need to handle themselves.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic Butler Service include room service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Eligible suites can receive enhanced in-suite service. Exact dining and room-service availability should be confirmed for your specific ship and suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I know which Scenic suite has Butler Service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Compare the official amenities for the specific Scenic ship and suite category you're considering. A travel advisor can also explain the differences before you book.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a travel advisor help me choose a Scenic Butler Suite?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. An experienced luxury travel advisor can compare suite categories, service inclusions, ship layouts, and current promotions to determine whether a Butler Suite makes sense for your trip.",
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
            q: "What is Scenic Butler Service?",
            a: "Scenic Butler Service provides personalized assistance to guests staying in eligible Scenic suites, helping with suite-related needs, special requests, and other aspects of the onboard experience.",
        },
        {
            q: "Does every Scenic suite have a butler?",
            a: "No. Butler Service is associated with eligible suite categories, and inclusions can vary by ship.",
        },
        {
            q: "What does a Scenic butler do?",
            a: "A Scenic butler can assist with services such as unpacking and packing, in-suite breakfast or refreshments, special requests, and other personalized onboard needs.",
        },
        {
            q: "Can my Scenic butler unpack my luggage?",
            a: "Unpacking and packing assistance is one of the services associated with Scenic Butler Service, subject to the applicable suite and onboard arrangements.",
        },
        {
            q: "Can I have breakfast in my Scenic suite?",
            a: "Eligible suites with Butler Service can provide enhanced in-suite service, including breakfast arrangements. Confirm the exact service available on your ship and suite.",
        },
        {
            q: "Is Scenic Butler Service included in the cruise fare?",
            a: "Butler Service is included with eligible suite categories rather than being a separate service that every guest receives.",
        },
        {
            q: "Is Scenic Butler Service worth the money?",
            a: "It can be, particularly for travelers who value privacy, personalized service, in-suite dining, convenience, and additional assistance.",
        },
        {
            q: "Can my butler help with special occasions?",
            a: "Yes. Tell the onboard team about birthdays, anniversaries, honeymoons, or other celebrations so appropriate arrangements can be considered.",
        },
        {
            q: "Can a Scenic butler arrange dining?",
            a: "Your butler can assist with certain dining-related requests and communicate preferences to the appropriate onboard team.",
        },
        {
            q: "Can my butler help with excursions?",
            a: "Your butler can assist with questions and certain arrangements connected with your cruise schedule, while the dedicated excursion team manages the actual excursion program.",
        },
        {
            q: "Is Butler Service useful for solo travelers?",
            a: "Yes. Solo travelers who value personalized attention and convenience may find Butler Service particularly appealing.",
        },
        {
            q: "Is Butler Service useful for seniors?",
            a: "It can be especially valuable for travelers who appreciate assistance with luggage, in-suite service, and reducing the number of logistical tasks they need to handle themselves.",
        },
        {
            q: "Does Scenic Butler Service include room service?",
            a: "Eligible suites can receive enhanced in-suite service. Exact dining and room-service availability should be confirmed for your specific ship and suite.",
        },
        {
            q: "How do I know which Scenic suite has Butler Service?",
            a: "Compare the official amenities for the specific Scenic ship and suite category you're considering. A travel advisor can also explain the differences before you book.",
        },
        {
            q: "Can a travel advisor help me choose a Scenic Butler Suite?",
            a: "Yes. An experienced luxury travel advisor can compare suite categories, service inclusions, ship layouts, and current promotions to determine whether a Butler Suite makes sense for your trip.",
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
    "Unpacking and packing assistance",
    "In-suite service",
    "Breakfast served in your suite",
    "Handling special requests",
    "Dining arrangement assistance",
    "Help coordinating activities",
];

/* ── What a Butler Does — Detail Sections Data ─────────────────────── */
const butlerServices = [
    {
        id: "unpacking",
        title: "Unpacking & Packing Assistance",
        badge: "Settling In",
        icon: Luggage,
        desc: "Arriving after an international flight can make unpacking feel like a chore. Your butler can assist with settling into your suite and, where available, packing assistance at the end of the cruise.",
        columns: [
            {
                label: "Particularly valuable for:",
                items: ["Long international journeys", "Extended European vacations", "Travelers with mobility limitations", "Guests traveling with formal clothing", "A completely hands-off experience"],
            },
        ],
    },
    {
        id: "breakfast",
        title: "In-Suite Breakfast",
        badge: "Mornings",
        icon: Coffee,
        desc: "One of the most attractive benefits of Butler Service is the ability to enjoy breakfast in the privacy of your suite when available, overlooking the river instead of heading to the dining venue.",
        columns: [
            {
                label: "Especially appealing on:",
                items: ["Early excursion mornings", "Scenic sailing days", "Special occasions", "Relaxed mornings"],
            },
        ],
    },
    {
        id: "dining",
        title: "In-Suite Dining & Refreshments",
        badge: "Privacy",
        icon: Utensils,
        desc: "Depending on the suite and available onboard service, your butler can help arrange refreshments or dining in your suite — a more private alternative to the main dining venues, especially after a long excursion.",
        columns: [
            {
                label: "A private alternative for:",
                items: ["Relaxing after excursions", "Quiet in-suite meals", "Refreshments on request"],
            },
        ],
    },
    {
        id: "requests",
        title: "Special Requests",
        badge: "Personal Touches",
        icon: Bell,
        desc: "This is where Butler Service can become particularly valuable. Your butler can serve as an additional point of contact for reasonable onboard requests.",
        columns: [
            {
                label: "Examples may include:",
                items: ["Setting up your suite", "Arranging special touches", "Helping with refreshments", "Coordinating service requests", "Assisting with special occasions"],
            },
        ],
    },
    {
        id: "dining-assist",
        title: "Dining Assistance",
        badge: "Dining",
        icon: Wine,
        desc: "Your butler can help with certain dining-related requests and communicate preferences to the appropriate onboard team — though your butler is not a replacement for the restaurant team.",
        columns: [
            {
                label: "Useful when you're:",
                items: ["Celebrating an occasion", "Traveling with family", "Managing dietary requirements", "Looking for a particular dining arrangement"],
            },
        ],
    },
    {
        id: "excursions",
        title: "Excursion Assistance",
        badge: "Excursions",
        icon: Compass,
        desc: "Scenic's excursion program gives guests a choice of experiences, including Scenic Freechoice activities and Scenic Enrich experiences. Your butler can help coordinate certain onboard aspects of your plans.",
        columns: [
            {
                label: "Your butler can help with:",
                items: ["Understanding your day's schedule", "Coordinating onboard logistics", "Answering general questions"],
            },
        ],
    },
];

/* ── Special Occasions Data ────────────────────────────────────────── */
const specialOccasions = [
    { title: "Anniversaries", icon: <Heart size={20} /> },
    { title: "Milestone birthdays", icon: <Gift size={20} /> },
    { title: "Retirement celebrations", icon: <Award size={20} /> },
    { title: "Honeymoons", icon: <Sparkles size={20} /> },
    { title: "Family celebrations", icon: <Users size={20} /> },
];

/* ── Multigenerational Families Data ───────────────────────────────── */
const familyBenefits = [
    { title: "Grandparents", desc: "May appreciate assistance with luggage and in-suite service." },
    { title: "Parents", desc: "May appreciate help coordinating the day's schedule." },
    { title: "Adult children", desc: "Can enjoy the flexibility of exploring independently." },
];

/* ── Solo Travelers Data ───────────────────────────────────────────── */
const soloAppeal = ["Privacy", "Convenience", "Personalized attention", "In-suite dining", "Assistance with luggage"];

/* ── Butler vs Standard Service Table Data ─────────────────────────── */
const serviceComparisonRows = [
    { feature: "Housekeeping", standard: "✓", butler: "✓" },
    { feature: "Dining service", standard: "✓", butler: "✓" },
    { feature: "Concierge/onboard assistance", standard: "✓", butler: "✓" },
    { feature: "Personalized suite assistance", standard: "Limited", butler: "✓" },
    { feature: "Dedicated butler", standard: "—", butler: "✓" },
    { feature: "In-suite breakfast/service", standard: "Depends on suite/service", butler: "Enhanced access" },
    { feature: "Packing/unpacking assistance", standard: "—", butler: "Available with Butler Service" },
    { feature: "Personalized requests", standard: "✓", butler: "Enhanced" },
];



/* ── Which Suites Have Butler Service — Comparison Factors ─────────── */
const suiteFactors = [
    "Butler Service",
    "Balcony configuration",
    "Suite location",
    "Sleeping area",
    "Bathroom configuration",
    "Included amenities",
    "River views",
    "Privacy",
];



/* ── Tips for Getting the Most From Your Butler Data ───────────────── */
const butlerTips = [
    { icon: <UserCheck size={28} strokeWidth={1.5} />, title: "Introduce Yourself", desc: "Introduce yourself and let your butler know how you like to travel" },
    { icon: <Calendar size={28} strokeWidth={1.5} />, title: "Explain Your Schedule", desc: "Explain your schedule, including any early excursions" },
    { icon: <Gift size={28} strokeWidth={1.5} />, title: "Share Occasions", desc: "Share special occasions like birthdays and anniversaries early" },
    { icon: <MessageCircle size={28} strokeWidth={1.5} />, title: "Ask Questions", desc: "Ask questions — your butler is there to make things easier" },
    { icon: <Bell size={28} strokeWidth={1.5} />, title: "Use the Service", desc: "Don't be afraid to use the service you've paid for" },
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Choosing a suite only for size",
    "Assuming every Scenic cabin has a butler",
    "Not comparing ships",
    "Waiting until embarkation to mention special requests",
    "Paying for a butler suite without using the benefits",
];

/* ── Scenic vs Other Luxury River Cruise Lines Data ────────────────── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "Butler Service on eligible suites" },
    { key: "riverside", scenic: "Riverside", ocean: "Highly personalized service" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique luxury and personalized service" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided travel" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Premium river cruising with personalized service" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicButlerService = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeService, setActiveService] = useState("unpacking");

    const currentService =
        butlerServices.find((f) => f.id === activeService) || butlerServices[0];
    const ActiveServiceIcon = currentService.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruise Butler Service: What Does It Include?</title>
                <meta name="title" content="Scenic River Cruise Butler Service | What Your Butler Does" />
                <meta
                    name="description"
                    content="What does a Scenic River Cruise butler do? Learn what Scenic Butler Service includes, from in-suite assistance and unpacking to special requests, dining, excursions, and personalized service."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruise <br /> Butler Service</h1>

                    <p>
                        One of the features that separates Scenic River
                        Cruises from many other European river cruise lines
                        is its emphasis on personalized service. For guests
                        staying in eligible suites, Scenic Butler Service
                        adds another layer of convenience to the cruise
                        experience.
                    </p>

                    {readMore && (
                        <p>
                            Instead of simply having a crew member available
                            when you need assistance, your butler can help
                            personalize parts of your stay — from settling
                            into your suite to handling special requests.
                            But what does a Scenic butler actually do, and is
                            the service available to every guest? This guide
                            explains what Scenic Butler Service includes,
                            which suites receive it, what your butler can
                            help with, and whether upgrading to a
                            butler-serviced suite is worth the additional
                            cost.
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
                            Start Planning Your Scenic Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">What Does a Scenic Butler Do? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            A Scenic butler provides personalized suite and
                            guest assistance throughout your river cruise.
                            Depending on your suite and the specific service
                            available, assistance can include:
                        </p>

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
                            The biggest benefit isn't one particular task.
                            It's convenience. Instead of figuring out every
                            small detail yourself, you have a dedicated
                            point of contact who can help make your cruise
                            more comfortable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DOES EVERY SCENIC GUEST GET BUTLER SERVICE? ──────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="does-every-guest-get-butler">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Does Every Scenic Guest Get Butler Service?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            No. Butler Service is associated with select
                            Scenic suites, rather than being a standard
                            service for every cabin category. This
                            distinction is important when comparing Scenic's
                            suite categories.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {suiteFactors.map((label, i) => (
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
                                    <Briefcase
                                        size={28}
                                        className="adg-c-callout-star"
                                    />
                                    <p className="adg-c-callout-text">
                                        Higher-level suites generally provide
                                        a more extensive level of
                                        personalized service and space,
                                        while entry-level accommodations may
                                        not include the same Butler Service
                                        benefits.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '310px' }}>
                                <Ship size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Varies by Ship & Itinerary
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rlc-lc-worth-conclusion-box" style={{ marginTop: "40px" }}>
                        <p className="rlc-lc-worth-conclusion-text">
                            Because suite amenities and service inclusions
                            can vary by ship and itinerary, verify the
                            specific inclusions for your sailing before
                            booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHAT DOES A SCENIC BUTLER ACTUALLY DO? ───────────────────── */}
            <section className="luc-destinations-section" id="what-does-a-butler-do" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">What Does a Scenic Butler Actually Do?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            A butler isn't simply someone who brings food to
                            your room. Think of your Scenic butler as a
                            personal onboard service contact who helps
                            remove small logistical tasks from your
                            vacation.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {butlerServices.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeService === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveService(item.id)}
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

                        <div className="luc-dest-panel" key={activeService}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveServiceIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveServiceIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentService.title}</span>
                                </div>
                            </div>

                            {currentService.desc && (
                                <p className="luc-dest-panel-desc">{currentService.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentService.columns.map((col, cIdx) => (
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


            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Celebrating a Special Occasion?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us communicate your celebration details to the cruise line before departure.
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

            {/* ── BUTLER SERVICE FOR SPECIAL OCCASIONS & FAMILIES ──────────── */}
            <section
                className="dve-winner-section"
                id="occasions-and-families"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Butler Service for Special Occasions &amp; Families
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            A Scenic River Cruise can be a wonderful setting
                            for milestones, celebrations, and family trips.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Special Occasions */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Gift size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Special Occasions
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Celebrate in Style
                                </h3>

                                <p className="dve-winner-intro">
                                    If you're celebrating something
                                    important, mention it when booking and
                                    again when you board.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <ul className="dve-advantages-list" style={{ marginTop: "20px" }}>
                                    {specialOccasions.map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Multigenerational Families */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Users size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Multigenerational Families
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Less Logistical Work for Everyone
                                </h3>

                                <p className="dve-winner-intro">
                                    Families can benefit from Butler Service
                                    because different generations often have
                                    different needs.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <ul className="dve-advantages-list" style={{ marginTop: "20px" }}>
                                    {familyBenefits.map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span><strong>{item.title}:</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE FOR SOLO TRAVELERS ────────────────────────── */}
            <section className="rlc-lc-worth-section" id="solo-travelers" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Butler Service for Solo Travelers</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Solo travelers may also appreciate the
                                additional level of personal attention.
                                Having a dedicated service contact can make
                                the ship feel more personal, particularly
                                for travelers who prefer not to navigate
                                every onboard request independently. Butler
                                Service can be particularly attractive if
                                you value:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {soloAppeal.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={SuiteImage}
                                    alt="Solo traveler enjoying personalized Scenic Butler Service in a river cruise suite"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>A More Personal Ship</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE VS STANDARD CRUISE SERVICE ────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="butler-vs-standard">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Butler Service vs <br /> Standard Cruise Service</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The exact benefits can vary according to your
                            suite category and ship.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Standard Scenic Service</th>
                                    <th>Butler Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceComparisonRows.map((row, i) => (
                                    <tr key={i}>
                                        <td><strong>{row.feature}</strong></td>
                                        <td>{row.standard}</td>
                                        <td>{row.butler}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC BUTLER SERVICE WORTH IT? ───────────────────────── */}
            <section className="adg-section" id="worth-it" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Is Scenic Butler Service Worth It?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            For some travelers, absolutely. But it depends on how you travel.
                        </p>
                    </div>

                    <div className="sfe-inclusions-grid">
                        {/* Worth It Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap">
                                    <CheckCircle size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">Butler Service Is Worth Considering If You:</h3>
                            </div>
                            <div className="dac-reasons-bullets" style={{ marginTop: "16px" }}>
                                {[
                                    "Prefer highly personalized service",
                                    "Spend significant time in your suite",
                                    "Enjoy breakfast privately",
                                    "Value convenience",
                                    "Are celebrating a special occasion",
                                    "Have mobility considerations",
                                    "Want assistance with luggage",
                                    "Prefer a luxury hotel-style experience",
                                ].map((item, idx) => (
                                    <div key={idx} className="dac-reasons-bullet-item" style={{ fontSize: "14px" }}>
                                        <CheckCircle size={14} className="dac-reasons-bullet-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* May Not Need It Card */}
                        <div className="sfe-inclusions-card">
                            <div className="sfe-inclusions-card-header">
                                <span className="sfe-inclusions-icon-wrap sfe-enrich-icon-style" style={{ backgroundColor: "var(--navy-soft)", color: "var(--navy-light)" }}>
                                    <X size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-inclusions-card-title">You May Not Need It If You:</h3>
                            </div>
                            <div className="dac-reasons-bullets" style={{ marginTop: "16px", marginBottom: "24px" }}>
                                {[
                                    "Spend most of your time ashore",
                                    "Rarely use your suite",
                                    "Prefer casual service",
                                    "Don't need additional assistance",
                                    "Are primarily choosing your cabin based on price",
                                ].map((item, idx) => (
                                    <div key={idx} className="dac-reasons-bullet-item" style={{ fontSize: "14px" }}>
                                        <X size={14} className="dac-reasons-bullet-icon" style={{ color: "var(--text-muted)", opacity: 0.6 }} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="sfe-inclusions-alert">
                                <p className="sfe-inclusions-alert-text">
                                    In that case, putting the extra money toward a better itinerary or longer pre-cruise stay may provide more value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                         <div className="scenic-inline-cta-content-light">
                        <span className="scenic-inline-cta-eyebrow-light">Compare the Total Suite Experience</span>
                        <h3 className="scenic-inline-cta-title-light">Which Scenic Suite Is Right for You?</h3>
                        <p className="scenic-inline-cta-text-light">
                            Let us help you compare Butler Service benefits alongside space, location, and amenities.
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
            

            {/* ── WHICH SCENIC SUITES HAVE BUTLER SERVICE? ─────────────────── */}
            <section className="scenic-dining-section" id="which-suites-have-butler" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-dining-container">
                    <div className="scenic-dining-grid">
                        <div className="scenic-dining-content">
                            <h2 className="scenic-dining-title">Which Scenic Suites Have Butler Service?</h2>
                            <div className="scenic-dining-accent"></div>

                            <p className="scenic-dining-intro">
                                Scenic's suite categories vary by ship.
                                Higher-level accommodations generally
                                provide the most comprehensive Butler
                                Service experience.
                            </p>

                            <div className="scenic-dining-highlights">
                                <h3>When comparing cabins, also consider:</h3>
                                <ul className="scenic-dining-list">
                                    {suiteFactors.map((item, index) => (
                                        <li key={index} className="scenic-dining-item">
                                            <CheckCircle size={18} className="scenic-dining-item-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="scenic-dining-outro">
                                Our recommendation is to compare the total
                                suite experience, not just the price
                                difference.
                            </p>
                        </div>

                        <div className="scenic-dining-image-wrap">
                            <div className="scenic-dining-image-frame" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "360px", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)" }}>
                                <Star size={64} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "20px" }} strokeWidth={1.2} />
                                <span style={{ fontFamily: "var(--font-display)", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                    Compare the Total Suite Experience
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── BUTLER VS CONCIERGE & LIMITATIONS ───────────────────────── */}
            <section className="adg-section" id="butler-vs-concierge" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Butler vs. Concierge &amp; Expectations</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-vs-grid">
                        {/* Butler vs Concierge Card */}
                        <div className="sfe-vs-card">
                            <div className="sfe-vs-header">
                                <span className="sfe-vs-icon-wrap">
                                    <Sparkles size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-vs-title">Scenic Butler Service vs a Cruise Concierge</h3>
                            </div>
                            <p className="sfe-vs-intro">
                                These services aren't necessarily the same.
                            </p>
                            <p className="sfe-vs-text">
                                A concierge generally handles broader ship-related questions and arrangements. A butler provides more personalized service connected to your suite and individual needs.
                            </p>
                            <div className="sfe-vs-quote">
                                <p className="sfe-vs-quote-q">A concierge might answer:</p>
                                <p className="sfe-vs-quote-a">"What time does the excursion leave?"</p>
                            </div>
                            <div className="sfe-vs-quote" style={{ borderLeftColor: "var(--navy-light)" }}>
                                <p className="sfe-vs-quote-q">A butler might go further by:</p>
                                <p className="sfe-vs-quote-a">Helping make sure your morning routine and suite experience are organized around that schedule.</p>
                            </div>
                            <div className="sfe-vs-alert">
                                <p className="sfe-vs-alert-text">
                                    For luxury travelers, that distinction matters.
                                </p>
                            </div>
                        </div>

                        {/* What Butler Service Does NOT Mean Card */}
                        <div className="sfe-vs-card sfe-vs-card-right">
                            <div className="sfe-vs-header">
                                <span className="sfe-vs-icon-wrap" style={{ backgroundColor: "var(--navy-soft)", color: "var(--navy-light)" }}>
                                    <X size={20} strokeWidth={2} />
                                </span>
                                <h3 className="sfe-vs-title">What Butler Service Does NOT Mean</h3>
                            </div>
                            <p className="sfe-vs-text">
                                Having a butler doesn't mean every request is automatically included. Some services may:
                            </p>
                            <div className="sfe-vs-bullets">
                                {[
                                    "Depend on your suite category",
                                    "Require advance notice",
                                    "Have availability limitations",
                                    "Be handled by another onboard department",
                                ].map((item, idx) => (
                                    <div key={idx} className="sfe-vs-bullet-item">
                                        <X size={14} className="sfe-vs-bullet-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="sfe-vs-footer-text">
                                Your butler coordinates with the wider Scenic team when necessary.
                            </p>
                            <div className="sfe-vs-alert">
                                <p className="sfe-vs-alert-text">
                                    It's best to think of the butler as your personal service liaison, rather than someone responsible for every aspect of the ship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Personalized Luxury, Elevated</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Book a Butler-Serviced Suite?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you compare Scenic suite categories and secure the right Butler Service benefits for your trip.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Scenic Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">Luxury Suite Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIPS FOR GETTING THE MOST FROM YOUR BUTLER ────────────────── */}
            <section className="ugt-advantage-section" id="butler-tips">
                <div className="ugt-advantage-container">
                    <div className="ugt-advantage-header">
                        <span className="ugt-advantage-eyebrow">Make the Most of It</span>
                        <h2 className="ugt-advantage-title">
                            Tips for Getting the Most From Your Butler
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="ugt-advantage-intro">
                            Use these guidelines to get the most value out of Scenic's Butler Service during your cruise.
                        </p>
                    </div>

                    <div className="ugt-advantage-grid">
                        {butlerTips.map((item, idx) => (
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


            {/* ── COMMON BOOKING MISTAKES ───────────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Booking Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Avoid these common errors when choosing a Scenic
                            Butler Suite.
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

            {/* ── SCENIC VS OTHER LUXURY RIVER CRUISE LINES ────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="cruise-line-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Butler Service vs <br /> Other Luxury River Cruise Lines</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic is not the only luxury river cruise line
                            offering personalized service. The differences
                            are often less about whether a cruise line
                            offers luxury service and more about how that
                            service is delivered.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Personalized Service</th>
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

            {/* ── WHY A LUXURY TRAVEL ADVISOR CAN HELP ─────────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why a Luxury Travel <br /> Advisor Can Help
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Choosing a Scenic Suite Can Be Surprisingly Complicated
                            </h3>
                            <p className="Avr-planning-left-body">
                                This is especially useful when the
                                difference between two suite categories
                                represents a significant investment. A
                                travel advisor can help you compare suites
                                side by side before you commit.
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
                                A travel advisor can help you compare:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Ship size={18} />, label: "Suite categories" },
                                    { icon: <Sparkles size={18} />, label: "Butler Service benefits" },
                                    { icon: <Landmark size={18} />, label: "Ship layouts" },
                                    { icon: <MapPin size={18} />, label: "Deck locations" },
                                    { icon: <Home size={18} />, label: "Balcony configurations" },
                                    { icon: <Compass size={18} />, label: "Itinerary options" },
                                    { icon: <BadgePercent size={18} />, label: "Current promotions" },
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
                            Everything you need to know about Scenic River
                            Cruise Butler Service before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RequestImage}
                        alt="Scenic butler assisting a guest in a luxury river cruise suite"
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
                                    Personalized Luxury <br /> Beyond the Standard Cruise
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic Butler Service is designed to
                                        take personalized luxury beyond the
                                        standard river cruise experience.
                                        For eligible suites, the service can
                                        provide assistance with luggage,
                                        in-suite service, breakfast, special
                                        requests, and other aspects of your
                                        onboard experience.

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
                                                The real value isn't simply
                                                having someone available to
                                                bring something to your
                                                room. It's having a personal
                                                service contact who knows
                                                your preferences and can help
                                                make the journey feel
                                                effortless.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If you're considering a
                                                higher-category Scenic
                                                suite, compare the Butler
                                                Service benefits alongside
                                                the additional space and
                                                amenities. At Trips &amp;
                                                Ships Luxury Travel, we'll
                                                help you plan every detail
                                                of your Scenic cruise.
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
                                            Start Planning Your Scenic Cruise
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
                                            "Compare suite categories and Butler Service benefits",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain Scenic promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic with other luxury lines",
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

export default ScenicButlerService;