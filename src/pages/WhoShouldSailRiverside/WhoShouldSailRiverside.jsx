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
    Compass,
    Sparkles,
    Ship,
    Plane,
    MapPinned,
    Home,
    ShieldCheck,
    Heart,
    Landmark,
    PartyPopper,
    Waves,
    Wine,
    X,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Luxury Cruises photography once
   available. Paths assume a new /assets/WhoShouldSailRiverside folder. */
// import HeroImage1 from "../../assets/WhoShouldSailRiverside/riverside-couple-suite-balcony.jpg";
// import HeroImage2 from "../../assets/WhoShouldSailRiverside/riverside-couple-dining.jpg";
// import HeroImage3 from "../../assets/WhoShouldSailRiverside/riverside-onboard-lounge.jpg";
// import RiversideSuite from "../../assets/WhoShouldSailRiverside/riverside-suite-living-area.jpg";
// import RiversideFamily from "../../assets/WhoShouldSailRiverside/riverside-family-onboard.jpg";
// import RiversideCulture from "../../assets/WhoShouldSailRiverside/riverside-cultural-excursion.jpg";
// import RiversideCastle from "../../assets/WhoShouldSailRiverside/riverside-rhine-castle-view.jpg";
// import RiversideCrew from "../../assets/WhoShouldSailRiverside/riverside-crew-service.jpg";
// import RiversideEvening from "../../assets/WhoShouldSailRiverside/riverside-evening-lounge.jpg";
// import RiversideShip from "../../assets/WhoShouldSailRiverside/riverside-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";

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
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#webpage",
            name: "Who Should Sail Riverside? | Is Riverside Luxury Cruises Right for You?",
            url: "https://www.tripsandships.com/who-should-sail-riverside",
            description:
                "Discover who should sail Riverside Luxury Cruises. Learn whether Riverside is the right choice for couples, first-time river cruisers, food lovers, luxury travelers, and multi-generational families.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#article",
            headline: "Who Should Sail Riverside? | Choosing the Right Luxury River Cruise",
            description:
                "A complete guide to who Riverside Luxury Cruises is best suited for, covering couples, first-time river cruisers, luxury travelers, food and wine enthusiasts, cultural travelers, and multi-generational families.",
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
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#breadcrumb",
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
                    name: "Riverside Luxury Cruises Reviews",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises-reviewss",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Who Should Sail Riverside",
                    item: "https://www.tripsandships.com/who-should-sail-riverside",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#trip",
            name: "Riverside Luxury Cruises European River Cruise Experience",
            description:
                "Boutique luxury river cruising designed for couples, first-time river cruisers, luxury travelers, food and wine enthusiasts, cultural explorers, and multi-generational adult families sailing the Danube, Rhine, and Rhône Rivers.",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#service",
            serviceType: "Luxury River Cruise Vacation Planning",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized guidance to help travelers determine whether Riverside Luxury Cruises matches their travel style, and to plan the ideal itinerary, ship, and suite.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#itemlist",
            name: "Who Should Sail Riverside? — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Riverside Is Perfect for Couples" },
                { "@type": "ListItem", position: 3, name: "First-Time River Cruisers & Luxury Travelers" },
                { "@type": "ListItem", position: 4, name: "Food & Wine Enthusiasts" },
                { "@type": "ListItem", position: 5, name: "Cultural Travelers" },
                { "@type": "ListItem", position: 6, name: "Special Occasions & Multi-Generational Families" },
                { "@type": "ListItem", position: 7, name: "Travelers Who Love Scenic Cruising" },
                { "@type": "ListItem", position: 8, name: "Travelers Who Appreciate Personalized Service" },
                { "@type": "ListItem", position: 9, name: "Who Might Prefer Another Cruise Line?" },
                { "@type": "ListItem", position: 10, name: "Is Riverside Worth It?" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/who-should-sail-riverside/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside's personalized service, spacious accommodations, and classic European itineraries make it one of the best options for first-time luxury river cruisers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. The intimate atmosphere, elegant dining, and romantic destinations make Riverside especially popular with couples.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Solo travelers who enjoy boutique luxury and cultural exploration often appreciate Riverside's welcoming atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside family friendly?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Families are welcome, but the onboard experience is primarily designed for adults and older children rather than young families.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside good for food lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Gourmet cuisine, regional specialties, and wine-focused experiences are among Riverside's greatest strengths.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside a good choice for luxury travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Definitely. Spacious suites, elegant ships, personalized hospitality, and exceptional dining place Riverside firmly within the luxury river cruise market.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which river is best for first-time guests?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Danube and Rhine are both excellent choices, offering iconic cities, beautiful scenery, and classic European experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for active travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Many itineraries include walking tours, cycling opportunities, and cultural excursions, though the overall pace remains relaxed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Riverside compare with Scenic or Uniworld?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside stands out for its spacious accommodations, boutique atmosphere, and personalized service. Scenic and Uniworld offer different styles, inclusions, and onboard experiences, making the best choice dependent on your travel preferences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare cruise lines, explain promotions, recommend the best itinerary, and help you choose the right suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for travelers celebrating special occasions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside is an outstanding choice for milestones like anniversaries, birthdays, retirements, and honeymoons, thanks to its attentive butler service and elegant accommodations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside recommended for multi-generational families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, particularly for families with adult children or grandparents. The comfortable suites, relaxed pace, and inclusive experiences make it simple and rewarding for adult groups to cruise together.",
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
            q: "Is Riverside good for first-time river cruisers?",
            a: "Yes. Riverside's personalized service, spacious accommodations, and classic European itineraries make it one of the best options for first-time luxury river cruisers.",
        },
        {
            q: "Is Riverside good for couples?",
            a: "Absolutely. The intimate atmosphere, elegant dining, and romantic destinations make Riverside especially popular with couples.",
        },
        {
            q: "Is Riverside suitable for solo travelers?",
            a: "Yes. Solo travelers who enjoy boutique luxury and cultural exploration often appreciate Riverside's welcoming atmosphere.",
        },
        {
            q: "Is Riverside family friendly?",
            a: "Families are welcome, but the onboard experience is primarily designed for adults and older children rather than young families.",
        },
        {
            q: "Is Riverside good for food lovers?",
            a: "Yes. Gourmet cuisine, regional specialties, and wine-focused experiences are among Riverside's greatest strengths.",
        },
        {
            q: "Is Riverside a good choice for luxury travelers?",
            a: "Definitely. Spacious suites, elegant ships, personalized hospitality, and exceptional dining place Riverside firmly within the luxury river cruise market.",
        },
        {
            q: "Which river is best for first-time guests?",
            a: "The Danube and Rhine are both excellent choices, offering iconic cities, beautiful scenery, and classic European experiences.",
        },
        {
            q: "Is Riverside suitable for active travelers?",
            a: "Yes. Many itineraries include walking tours, cycling opportunities, and cultural excursions, though the overall pace remains relaxed.",
        },
        {
            q: "How does Riverside compare with Scenic or Uniworld?",
            a: "Riverside stands out for its spacious accommodations, boutique atmosphere, and personalized service. Scenic and Uniworld offer different styles, inclusions, and onboard experiences, making the best choice dependent on your travel preferences.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can compare cruise lines, explain promotions, recommend the best itinerary, and help you choose the right suite.",
        },
        {
            q: "Is Riverside suitable for travelers celebrating special occasions?",
            a: "Yes. Riverside is an outstanding choice for milestones like anniversaries, birthdays, retirements, and honeymoons, thanks to its attentive butler service and elegant accommodations.",
        },
        {
            q: "Is Riverside recommended for multi-generational families?",
            a: "Yes, particularly for families with adult children or grandparents. The comfortable suites, relaxed pace, and inclusive experiences make it simple and rewarding for adult groups to cruise together.",
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

/* ── Main Component ──────────────────────────────────────────────── */
const WhoShouldSailRiverside = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const [readMoreCulture, setReadMoreCulture] = useState(false);

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
                    Who Should Sail Riverside? | Is Riverside Luxury Cruises Right for You?
                </title>
                <meta
                    name="title"
                    content="Who Should Sail Riverside? | Choosing the Right Luxury River Cruise"
                />
                <meta
                    name="description"
                    content="Discover who should sail Riverside Luxury Cruises. Learn whether Riverside is the right choice for couples, first-time river cruisers, food lovers, luxury travelers, and multi-generational families."
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
                    <h1>Who Should Sail Riverside?</h1>

                    <p>
                        Choosing the right river cruise is about more than
                        selecting an itinerary — it's about finding a cruise
                        line that matches your travel style, expectations, and
                        interests. Riverside Luxury Cruises is designed for
                        travelers who value personalized service, spacious
                        accommodations, exceptional dining, and immersive
                        cultural experiences over large crowds and nonstop
                        onboard entertainment.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                While Riverside may not be the perfect fit for
                                everyone, it excels at delivering an elegant
                                boutique luxury experience that appeals to
                                discerning travelers seeking comfort and
                                authenticity.
                            </p>

                            <p>
                                This guide will help you determine whether
                                Riverside Luxury Cruises is the right choice for
                                your next European vacation.
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

            {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
            <section
                className="rlc-qa-section"
                id="quick-answer" style={{ backgroundColor: 'var(--bg-white)' }}
            >
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Riverside Luxury Cruises is best suited for:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Couples",
                                "Luxury travelers",
                                "First-time river cruisers",
                                "Food and wine enthusiasts",
                                "Cultural explorers",
                                "Empty nesters",
                                "Multi-generational adult families",
                                "Anniversary and celebration travelers",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={3} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            If you value elegant accommodations, exceptional
                            service, and unforgettable European destinations,
                            Riverside is likely an excellent match.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE IS PERFECT FOR COUPLES ─────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="perfect-for-couples">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Riverside Is Perfect for Couples</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Riverside is one of the most romantic river cruise
                            experiences available in Europe. Couples
                            appreciate:
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious luxury suites",
                                "Fine dining every evening",
                                "Scenic river views",
                                "Relaxed atmosphere",
                                "Personalized service",
                                "Romantic destinations",
                                "Intimate boutique environment",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <Heart size={16} strokeWidth={2.5} />
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
                                        Popular itineraries along the Danube,
                                        Rhine, and Rhône provide unforgettable
                                        settings for anniversaries, honeymoons,
                                        birthdays, and special celebrations.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '' }}>
                                <img
                                    // src={RiversideSuite}
                                    alt="Romantic suite aboard Riverside Luxury Cruises"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Romantic Getaways • Boutique Luxury
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FIRST-TIME RIVER CRUISERS & LUXURY TRAVELERS — SIDE BY SIDE */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }}>
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">First-Time River Cruisers &amp; Luxury Travelers</h2>

                        <div className="azs-section-accent"></div>

                        <p className="azs-section-subtitle">
                            Whether you're new to river cruising or an
                            experienced luxury traveler, Riverside is designed
                            to meet you where you are.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* First-Time River Cruisers */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Ship size={24} className="azs-dining-icon" />
                                    </div>

                                    <h3 className="azs-dining-title">First-Time River Cruisers</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    If you've never taken a European river
                                    cruise before, Riverside offers an
                                    excellent introduction to luxury river
                                    travel.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Why first-time guests love Riverside:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Easy embarkation",
                                            "Boutique-sized ships",
                                            "Included sightseeing",
                                            "Comfortable accommodations",
                                            "Friendly, attentive crew",
                                            "Stress-free travel",
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
                                            You'll unpack once while exploring
                                            several destinations, making travel
                                            simple and relaxing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Luxury Travelers */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Sparkles size={24} className="azs-dining-icon" />
                                    </div>

                                    <h3 className="azs-dining-title">Luxury Travelers</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Riverside was created for travelers who
                                    expect a higher level of comfort and
                                    service.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Luxury guests enjoy:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Large suites",
                                            "Elegant interiors",
                                            "Premium bedding",
                                            "Marble bathrooms",
                                            "Gourmet cuisine",
                                            "Personalized hospitality",
                                            "Boutique atmosphere",
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
                                            Rather than offering flashy
                                            attractions, Riverside focuses on
                                            delivering understated
                                            sophistication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOD & WINE ENTHUSIASTS ──────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="food-and-wine-enthusiasts"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Food &amp; Wine Enthusiasts</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{ margin: '0px', marginBottom: '30px' }}>
                                European river cruising is as much about
                                cuisine as it is about sightseeing. Riverside
                                is ideal for travelers who enjoy:
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Regional specialties",
                                    "Local wines",
                                    "Multi-course dinners",
                                    "Fresh seasonal ingredients",
                                    "Culinary traditions",
                                    "Wine-focused excursions",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Wine size={16} strokeWidth={3} className="rlc-inc-check-icon" />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rlc-inc-outro-box">
                                <p className="rlc-inc-outro-text">
                                    Popular destinations include some of
                                    Europe's most celebrated food and wine
                                    regions, including Provence, the Rhône
                                    Valley, Austria, and Germany.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={HeroImage1}
                                        alt="Gourmet dining aboard Riverside Luxury Cruises"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={HeroImage2}
                                            alt="Regional wine tasting aboard Riverside Luxury Cruises"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={HeroImage3}
                                            alt="Riverside onboard lounge"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CULTURAL TRAVELERS ───────────────────────────────────────── */}
            <section className="luc-why-section" id="cultural-travelers">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideCulture}
                                alt="Historic cathedral visited on a Riverside cultural excursion"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideCastle}
                                alt="Medieval town explored on a Riverside shore excursion"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">✓</span>
                                <span className="luc-why-badge-text">Immersive Cultural Itineraries</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Cultural Travelers</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            If museums, castles, historic cities, and local
                            traditions are your idea of the perfect vacation,
                            Riverside offers exceptional cultural experiences.
                            Every itinerary is designed to immerse guests in
                            the culture of each destination.
                        </p>

                        <div className="luc-why-features">
                            {[
                                "UNESCO World Heritage Sites",
                                "Medieval towns",
                                "Historic cathedrals",
                                "Palaces",
                                "Museums",
                                "Local markets",
                                "Walking tours",
                                "Traditional villages",
                            ]
                                .slice(0, readMoreCulture ? 8 : 4)
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
                                onClick={() => setReadMoreCulture(!readMoreCulture)}
                            >
                                {readMoreCulture ? "Read Less" : "Read More"}
                            </button>
                        </div>

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "20px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Riverside Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPECIAL OCCASIONS & MULTI-GENERATIONAL FAMILIES ─────────── */}
            <section className="wssr-celebrations-section" id="special-occasions-and-families">
                <div className="wssr-celebrations-container">
                    <div className="wssr-celebrations-grid">
                        
                        {/* Special Occasions */}
                        <div className="wssr-card wssr-occasions-card">
                            <div className="wssr-card-header">
                                <div className="wssr-icon-wrap">
                                    <PartyPopper size={24} />
                                </div>
                                <h3 className="wssr-card-title">Travelers Celebrating Special Occasions</h3>
                            </div>
                            <p className="wssr-card-desc">
                                Riverside is an outstanding choice for celebrating life's important milestones. The attentive service and elegant surroundings make every celebration feel even more memorable.
                            </p>
                            <div className="wssr-list-wrap">
                                <span className="wssr-list-title">Perfect for:</span>
                                <ul className="wssr-list">
                                    {[
                                        "Anniversaries",
                                        "Birthdays",
                                        "Retirement trips",
                                        "Honeymoons",
                                        "Family celebrations",
                                        "Graduation gifts",
                                        "Bucket-list vacations"
                                    ].map((item, i) => (
                                        <li key={i} className="wssr-list-item">
                                            <Check size={16} className="wssr-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Multi-Generational Families */}
                        <div className="wssr-card wssr-families-card">
                            <div className="wssr-card-header">
                                <div className="wssr-icon-wrap">
                                    <Users size={24} />
                                </div>
                                <h3 className="wssr-card-title">Multi-Generational Adult Families</h3>
                            </div>
                            <p className="wssr-card-desc">
                                Families traveling with adult children, parents, or grandparents often find Riverside to be an excellent choice. The intimate atmosphere encourages meaningful time together while allowing everyone to explore at their own pace.
                            </p>
                            <div className="wssr-list-wrap">
                                <span className="wssr-list-title">Benefits include:</span>
                                <ul className="wssr-list">
                                    {[
                                        "Comfortable suites",
                                        "Relaxed pace",
                                        "Included excursions",
                                        "Fine dining",
                                        "Easy logistics",
                                        "Accessible historic cities"
                                    ].map((item, i) => (
                                        <li key={i} className="wssr-list-item">
                                            <Check size={16} className="wssr-check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SCENIC CRUISING & PERSONALIZED SERVICE ─────────────────── */}
            <section
                className="dve-winner-section"
                id="dve-sea-days-port-stays"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Scenic Cruising &amp; Personalized Service
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            Some of the greatest moments on a Riverside cruise happen between destinations, supported by an exceptionally attentive crew.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Scenic Cruising */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap">
                                <img
                                    // src={ExploraSea}
                                    alt="Scenic view from a Riverside cruise deck"
                                    className="dve-winner-img"
                                />
                                <span className="dve-winner-badge">Scenic Cruising</span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">Travelers Who Love Scenic Cruising</h3>

                                <p className="dve-winner-intro">
                                    Large panoramic windows and open-air decks make scenic cruising one of the highlights of the journey.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">Guests Can Relax While Sailing Through:</h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "The Wachau Valley",
                                        "Rhine Gorge",
                                        "Rhône Valley vineyards",
                                        "Dutch countryside",
                                        "Historic castles",
                                        "Vineyards",
                                        "Medieval villages",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} className="dve-advantage-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Personalized Service */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap">
                                <img
                                    // src={ExploraDining}
                                    alt="Personalized crew service aboard Riverside"
                                    className="dve-winner-img"
                                />
                                <span className="dve-winner-badge">Personalized Service</span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">Travelers Who Appreciate Personalized Service</h3>

                                <p className="dve-winner-intro">
                                    Riverside's boutique approach allows crew members to provide highly personalized hospitality. The smaller number of passengers creates a more personal relationship between guests and crew.
                                </p>

                                <div className="dve-winner-divider"></div>

                                <h4 className="dve-advantages-title">
                                    Guests Often Enjoy:
                                </h4>

                                <ul className="dve-advantages-list">
                                    {[
                                        "Friendly interactions",
                                        "Quick assistance",
                                        "Attention to detail",
                                        "Remembered preferences",
                                        "Professional service",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <ShieldCheck size={18} className="dve-advantage-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO MIGHT PREFER ANOTHER CRUISE LINE? ────────────────────── */}
            <section className="Asc-section" id="who-might-prefer-another-line" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Riverside Is Probably Right for You If...</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Although Riverside excels in luxury hospitality, it
                            may not suit every traveler. If most of the items
                            below describe your travel style, Riverside is
                            likely an outstanding choice.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Riverside Is Probably Right for You If...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "You enjoy boutique hotels",
                                    "You appreciate excellent food",
                                    "You prefer quiet evenings",
                                    "You enjoy history and culture",
                                    "You like personalized service",
                                    "You want spacious accommodations",
                                    "You enjoy scenic travel",
                                    "You prefer quality over quantity",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">You May Prefer Another Cruise Line If You Want...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Casinos",
                                    "Broadway-style entertainment",
                                    "Nightclubs",
                                    "Water parks",
                                    "Children's programs",
                                    "Adventure attractions",
                                    "Budget pricing",
                                    "Large-ship amenities",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <X size={16} className="Asc-icon-red" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                 
                </div>
            </section>

            {/* ── IS RIVERSIDE WORTH IT? ───────────────────────────────────── */}
            <section
                className="rlc-lc-worth-section"
                id="is-riverside-worth-it"
            >
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Riverside Worth It?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                For the right traveler, absolutely. Rather
                                than trying to appeal to everyone, Riverside
                                focuses on delivering a premium experience for
                                guests who value:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Comfort",
                                    "Luxury",
                                    "Exceptional service",
                                    "Gourmet dining",
                                    "Cultural discovery",
                                    "Beautiful European destinations",
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    That focused approach is one of the reasons
                                    Riverside has quickly become a respected
                                    name in luxury river cruising.
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
                                    // src={RiversideEvening}
                                    alt="Elegant evening lounge aboard Riverside Luxury Cruises"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Refined • Personalized</span>
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
                            Personalized Trip Planning
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
                                Find the Cruise Line That Fits Your Style
                            </h3>

                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you determine
                                whether Riverside matches your travel style,
                                compare Riverside with Scenic, Uniworld,
                                Tauck, and AmaWaterways, and personalize every
                                aspect of your vacation.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Expert guidance ensures you choose the
                                    cruise line that best fits your
                                    expectations.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A knowledgeable travel advisor can assist with:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Determine whether Riverside matches your travel style" },
                                    { icon: <Ship size={18} />, label: "Compare Riverside with Scenic, Uniworld, Tauck, and AmaWaterways" },
                                    { icon: <MapPinned size={18} />, label: "Recommend the best itinerary" },
                                    { icon: <Home size={18} />, label: "Select the ideal suite" },
                                    { icon: <Plane size={18} />, label: "Arrange flights and hotels" },
                                    { icon: <Landmark size={18} />, label: "Coordinate private transfers" },
                                    { icon: <Star size={18} />, label: "Recommend shore excursions" },
                                    { icon: <Sparkles size={18} />, label: "Personalize every aspect of your vacation" },
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
                            Everything travelers need to know about whether
                            Riverside Luxury Cruises is the right fit before
                            booking their next European river cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / FINAL VERDICT ─────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RiversideShip}
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
                                    Who Should Sail <br /> Riverside?
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Luxury Cruises is best suited
                                        for travelers who appreciate elegant
                                        accommodations, exceptional
                                        hospitality, gourmet dining, and
                                        immersive European travel experiences.
                                        <br /><br />

                                        Whether you're celebrating a milestone,
                                        planning a romantic getaway, exploring
                                        Europe for the first time, or simply
                                        seeking a more refined way to travel,
                                        Riverside delivers a boutique luxury
                                        experience that emphasizes quality,
                                        comfort, and personalized service.
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
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                determine whether Riverside is
                                                the right fit for your travel
                                                style, compare itineraries and
                                                ships, recommend the ideal
                                                suite, and create a customized
                                                European river cruise designed
                                                around your interests.
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
                                            "Determine whether Riverside is the right fit",
                                            "Compare itineraries and ships",
                                            "Recommend the ideal suite",
                                            "Arrange flights and hotels",
                                            "Coordinate private transfers",
                                            "Recommend shore excursions",
                                            "Explain available promotions",
                                            "Personalize every aspect of your vacation",
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

export default WhoShouldSailRiverside;