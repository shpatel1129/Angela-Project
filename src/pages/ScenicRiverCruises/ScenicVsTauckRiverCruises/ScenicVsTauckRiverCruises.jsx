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
import AboutImage from "../../../assets/AboutAngela3.jpeg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck/#webpage",
            name: "Scenic vs Tauck River Cruises (2026): Which Is Better?",
            url: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck",
            description:
                "Compare Scenic vs Tauck River Cruises for 2026. Explore luxury, suites, service, dining, inclusions, excursions, ships, pricing, families, and who each cruise line is best for.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck/#article",
            headline: "Scenic vs Tauck: Which Luxury River Cruise Is Better?",
            description:
                "A complete comparison of Scenic and Tauck, including suites, balconies, dining, service, excursions, inclusions, ships, price, and who each line is best for.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck/#breadcrumb",
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
                    name: "Scenic vs Tauck",
                    item: "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck/#itemlist",
            name: "Scenic vs Tauck — What This Guide Covers",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic better than Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic may be better for travelers who prioritize luxury suites, Butler Service, onboard amenities and flexibility. Tauck may be better for travelers who prioritize destination experiences, guided touring and seamless logistics.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Tauck more luxurious than Scenic?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are luxury river cruise options. Scenic emphasizes an ultra-luxury ship experience, while Tauck focuses heavily on an all-inclusive journey with destination experiences, guides and exclusive access.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is more all-inclusive, Scenic or Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are highly inclusive. Tauck currently describes its river cruises as \"Distinctively Inclusive,\" with excursions, meals, beverages, gratuities, transfers and other components included in one upfront price.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better suites, Scenic or Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is particularly strong for travelers who want Sun Lounge suites and Butler Service. Tauck also offers spacious luxury accommodations, with the exact configuration depending on the ship and cabin category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic have Butler Service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Butler Service is one of Scenic's major differentiators, with services varying by suite category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better excursions, Scenic or Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tauck may have an advantage for travelers who prioritize guided destination experiences and exclusive cultural access. Scenic may be preferable for travelers who want more choice among different activities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better food?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are strong. Scenic emphasizes onboard dining variety, while Tauck places considerable emphasis on regionally inspired dining and local dining experiences ashore.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Scenic may appeal more to couples who prioritize the ship, suite and onboard luxury. Tauck may appeal to couples who prioritize destination experiences and seamless touring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tauck has the advantage because its Tauck Bridges program is specifically designed around family and multigenerational travel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both can work well. Tauck is particularly worth investigating because its current river-cruise program offers no single supplement in Category 1 on all river cruise departures.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Scenic is ideal if you want a luxury ship experience with choices, while Tauck is excellent if you want highly structured, seamless touring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Tauck more expensive than Scenic?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pricing varies by itinerary, ship, cabin, season and departure date. Compare total trip cost and inclusions rather than headline fares.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has smaller river cruise ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both operate relatively intimate river vessels compared with ocean cruise ships. Exact passenger capacity varies by ship and itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for active travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic can be particularly attractive to active travelers who want choices among walking, cycling and other experiences. Tauck also offers active experiences but is particularly strong in guided touring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I choose Scenic or Tauck for the Danube?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent options. Choose Scenic if the ship and suite are major priorities. Choose Tauck if destination experiences, guides and seamless touring are more important.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better European river cruise itineraries?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Neither universally wins. Compare the exact route, ports, duration, pre/post-cruise stays and excursion program for your travel dates.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic or Tauck better for a luxury Christmas market cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both can be excellent. Compare the specific Christmas-market itinerary, included excursions, hotel stays and holiday programming rather than choosing purely by brand.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a luxury travel advisor help compare Scenic and Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A knowledgeable luxury travel advisor can compare the exact ship, suite category, itinerary, inclusions, promotions, transfers and pre/post-cruise arrangements to determine which experience best matches your priorities.",
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
            q: "Is Scenic better than Tauck?",
            a: "Scenic may be better for travelers who prioritize luxury suites, Butler Service, onboard amenities and flexibility. Tauck may be better for travelers who prioritize destination experiences, guided touring and seamless logistics.",
        },
        {
            q: "Is Tauck more luxurious than Scenic?",
            a: "Both are luxury river cruise options. Scenic emphasizes an ultra-luxury ship experience, while Tauck focuses heavily on an all-inclusive journey with destination experiences, guides and exclusive access.",
        },
        {
            q: "Which is more all-inclusive, Scenic or Tauck?",
            a: "Both are highly inclusive. Tauck currently describes its river cruises as \"Distinctively Inclusive,\" with excursions, meals, beverages, gratuities, transfers and other components included in one upfront price.",
        },
        {
            q: "Which has better suites, Scenic or Tauck?",
            a: "Scenic is particularly strong for travelers who want Sun Lounge suites and Butler Service. Tauck also offers spacious luxury accommodations, with the exact configuration depending on the ship and cabin category.",
        },
        {
            q: "Does Scenic have Butler Service?",
            a: "Yes. Butler Service is one of Scenic's major differentiators, with services varying by suite category.",
        },
        {
            q: "Which has better excursions, Scenic or Tauck?",
            a: "Tauck may have an advantage for travelers who prioritize guided destination experiences and exclusive cultural access. Scenic may be preferable for travelers who want more choice among different activities.",
        },
        {
            q: "Which has better food?",
            a: "Both are strong. Scenic emphasizes onboard dining variety, while Tauck places considerable emphasis on regionally inspired dining and local dining experiences ashore.",
        },
        {
            q: "Which is better for couples?",
            a: "Both are excellent. Scenic may appeal more to couples who prioritize the ship, suite and onboard luxury. Tauck may appeal to couples who prioritize destination experiences and seamless touring.",
        },
        {
            q: "Which is better for families?",
            a: "Tauck has the advantage because its Tauck Bridges program is specifically designed around family and multigenerational travel.",
        },
        {
            q: "Which is better for solo travelers?",
            a: "Both can work well. Tauck is particularly worth investigating because its current river-cruise program offers no single supplement in Category 1 on all river cruise departures.",
        },
        {
            q: "Which is better for first-time river cruisers?",
            a: "Both are excellent. Scenic is ideal if you want a luxury ship experience with choices, while Tauck is excellent if you want highly structured, seamless touring.",
        },
        {
            q: "Is Tauck more expensive than Scenic?",
            a: "Pricing varies by itinerary, ship, cabin, season and departure date. Compare total trip cost and inclusions rather than headline fares.",
        },
        {
            q: "Which has smaller river cruise ships?",
            a: "Both operate relatively intimate river vessels compared with ocean cruise ships. Exact passenger capacity varies by ship and itinerary.",
        },
        {
            q: "Which is better for active travelers?",
            a: "Scenic can be particularly attractive to active travelers who want choices among walking, cycling and other experiences. Tauck also offers active experiences but is particularly strong in guided touring.",
        },
        {
            q: "Should I choose Scenic or Tauck for the Danube?",
            a: "Both are excellent options. Choose Scenic if the ship and suite are major priorities. Choose Tauck if destination experiences, guides and seamless touring are more important.",
        },
        {
            q: "Which has better European river cruise itineraries?",
            a: "Neither universally wins. Compare the exact route, ports, duration, pre/post-cruise stays and excursion program for your travel dates.",
        },
        {
            q: "Is Scenic or Tauck better for a luxury Christmas market cruise?",
            a: "Both can be excellent. Compare the specific Christmas-market itinerary, included excursions, hotel stays and holiday programming rather than choosing purely by brand.",
        },
        {
            q: "Can a luxury travel advisor help compare Scenic and Tauck?",
            a: "Yes. A knowledgeable luxury travel advisor can compare the exact ship, suite category, itinerary, inclusions, promotions, transfers and pre/post-cruise arrangements to determine which experience best matches your priorities.",
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
    { key: "positioning", cat: "Overall positioning", scenic: "Ultra-luxury", avalon: "Luxury / premium" },
    { key: "allinclusive", cat: "All-inclusive experience", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "suites", cat: "Suites", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "balcony", cat: "Balcony concept", scenic: "Sun Lounge", avalon: "French balconies / suite options" },
    { key: "butler", cat: "Butler Service", scenic: "⭐⭐⭐⭐⭐", avalon: "Not the same model" },
    { key: "destination", cat: "Destination experiences", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "leadership", cat: "Tour leadership", scenic: "Strong", avalon: "⭐⭐⭐⭐⭐" },
    { key: "dining", cat: "Dining", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "entertainment", cat: "Onboard entertainment", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐" },
    { key: "families", cat: "Families", scenic: "Good", avalon: "⭐⭐⭐⭐⭐" },
    { key: "couples", cat: "Couples", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "solo", cat: "Solo travelers", scenic: "Excellent", avalon: "⭐⭐⭐⭐⭐" },
    { key: "luxury", cat: "Luxury travelers", scenic: "⭐⭐⭐⭐⭐", avalon: "⭐⭐⭐⭐⭐" },
    { key: "bestfor", cat: "Best for", scenic: "Ship + suite luxury", avalon: "Touring + destination depth" },
];


export default function ScenicVsTauck() {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic vs Tauck River Cruises (2026): Which Is Better?</title>
                <meta name="title" content="Scenic vs Tauck River Cruises | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Compare Scenic vs Tauck River Cruises for 2026. Explore luxury, suites, service, dining, inclusions, excursions, ships, pricing, families, and who each cruise line is best for."
                />
                <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/scenic-vs-tauck" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic vs Tauck: Which Luxury River Cruise Is Better?</h1>

                    <p>
                        Scenic and Tauck are two of the strongest choices
                        for travelers comparing luxury river cruises in
                        Europe. Both emphasize high levels of inclusion,
                        premium accommodations, attentive service,
                        destination experiences, and a relatively intimate
                        river-cruise environment. But they are not
                        identical.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Scenic stands out for its ultra-luxury
                                ship experience, signature Sun Lounge
                                suites, Butler Service, extensive onboard
                                amenities, and choice of included
                                experiences.
                            </p>
                            <p>
                                Tauck stands out for its highly inclusive
                                approach to touring, strong destination
                                programming, Tauck Directors, exclusive
                                cultural experiences, and a philosophy of
                                taking care of virtually every detail from
                                ship to shore. Tauck currently describes
                                its river cruises as "Distinctively
                                Inclusive," with all-included excursions,
                                dining, beverages, gratuities, transfers
                                and other components covered in one
                                upfront price.
                            </p>
                            <p>
                                So which is better? Scenic may be the
                                better fit for travelers who want the ship
                                and suite to be a major part of the
                                luxury experience. Tauck may be the
                                better fit for travelers who place
                                exceptional importance on destination
                                experiences, guiding and seamless touring.
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
                        <h2 className="adg-h2">Quick Answer: Scenic vs Tauck</h2>
                        <div className="adg-accent-line"></div>

                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Scenic</th>
                                    <th>Tauck</th>
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
                            Choose Scenic if you want: Ultra-luxury
                            accommodations, Butler Service, a highly
                            inclusive experience, extensive onboard
                            amenities, and flexible included experiences.
                            Choose Tauck if you want: Exceptional
                            destination programming, highly guided
                            touring, exclusive cultural experiences, and a
                            seamless all-inclusive land-and-river
                            experience.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── THE BIGGEST DIFFERENCE ────────────────────────────────── */}
            <section className="sva-ships-section" id="biggest-difference" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck: The Biggest Difference</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead" style={{ marginTop: "16px" }}>
                            Both brands can appear remarkably similar when you compare their headline features. Both offer luxury river ships, included excursions, premium dining, complimentary beverages, Wi-Fi, transfers, gratuities, personalized service, and destination experiences.
                        </p>
                        <p className="sva-section-lead" style={{ marginTop: "8px", fontWeight: "500", color: "var(--navy)" }}>
                            The difference becomes clearer when you ask: Where do you want the luxury to be concentrated?
                        </p>
                    </div>

                    <div className="sva-ships-grid">
                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Sparkles size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Scenic: The Ship Experience</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Scenic Emphasizes the Ship Experience</h3>
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
                                <span className="sva-ships-img-label">Tauck: The Complete Journey</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Tauck Emphasizes the Complete Journey</h3>
                                <ul className="sva-ships-list" style={{ marginBottom: "24px" }}>
                                    {[
                                        "Ship",
                                        "Tour Director",
                                        "Local Guides",
                                        "Exclusive Experiences",
                                        "Dining Ashore",
                                        "Hotels",
                                        "Transfers",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "15px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Tauck's current materials specifically emphasize all-included excursions, exclusive cultural experiences, local dining, multiple Tauck Directors and local experts, airport transfers, gratuities and selected hotel stays.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="sva-section-lead" style={{ marginTop: "24px", textAlign: "center" }}>
                        That distinction is extremely useful when choosing between the two.
                    </p>
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
                        <h2 className="adg-h2">What Are Scenic and Tauck Best Known For?</h2>
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
                                <h3 className="adg-card-title1">What Is Scenic Best Known For?</h3>

                                <p className="sfe-cabins-text">
                                    Scenic's European river product is positioned around an ultra-luxury, highly inclusive experience.
                                </p>

                                <p className="sfe-cabins-text" style={{ fontWeight: "600", marginBottom: "12px", color: "var(--navy)" }}>
                                    Its strengths include:
                                </p>

                                <ul className="adg-card-list">
                                    {[
                                        "Scenic Space-Ships",
                                        "Spacious suites",
                                        "Sun Lounge balconies",
                                        "Butler Service",
                                        "Premium beverages",
                                        "Multiple dining venues",
                                        "Scenic Freechoice",
                                        "Scenic Enrich",
                                        "Wellness facilities",
                                        "Included excursions",
                                        "Personalized service",
                                    ].map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-outro" style={{ marginTop: "auto" }}>
                                    <strong>Scenic is especially attractive to:</strong>
                                    <br />
                                    Travelers who consider the ship itself part of the destination.
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
                                    <span className="adg-card-eyebrow-label">Tauck</span>
                                </div>
                            </div>
                            <div className="adg-card-body">
                                <h3 className="adg-card-title1">What Is Tauck Best Known For?</h3>

                                <p className="sfe-cabins-text">
                                    Tauck's greatest strength is arguably the quality and depth of its destination experience.
                                </p>

                                <p className="sfe-cabins-text" style={{ fontWeight: "600", marginBottom: "12px", color: "var(--navy)" }}>
                                    Its current "Distinctively Inclusive" river cruise model includes:
                                </p>

                                <ul className="adg-card-list">
                                    {[
                                        "All shore excursions",
                                        "Exclusive cultural experiences",
                                        "All meals",
                                        "Local dining",
                                        "Complimentary beverages",
                                        "Gratuities",
                                        "Airport transfers",
                                        "On-tour transportation",
                                        "Tauck Directors",
                                        "Local guides",
                                        "Selected hotel stays",
                                        "Special access experiences",
                                    ].map((point, idx) => (
                                        <li key={idx} className="adg-card-list-item">
                                            <span className="adg-card-list-dot"></span>
                                            <span className="adg-card-list-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="sfe-cabins-text" style={{ fontStyle: "italic", fontSize: "16px", color: "var(--text-muted)", marginTop: "12px" }}>
                                    Tauck also states that it does not sell optional excursions on its river cruises—the experiences are incorporated into the upfront price.
                                </p>

                                <p className="sfe-cabins-outro" style={{ marginTop: "auto" }}>
                                    <strong>Tauck is especially attractive to:</strong>
                                    <br />
                                    Travelers who want someone else to handle the details.
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
                            Let us help you compare Scenic and Tauck sailings and find the perfect fit for your trip.
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
                        <h2 className="sfe-firsttime-title">Scenic vs Tauck Suites</h2>
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
                                    The signature Sun Lounge is
                                    particularly distinctive because it
                                    allows travelers to enjoy the river
                                    view from a flexible indoor/outdoor-
                                    style space.
                                </p>
                            </div>
                        </div>

                        <div className="sfe-cabins-card">
                            <div className="sfe-cabins-img-wrap">
                                <Home size={48} className="sfe-cabins-img-icon" strokeWidth={1.2} />
                                <span className="sfe-cabins-img-label">Tauck Suites</span>
                            </div>
                            <div className="sfe-cabins-body">
                                <h3 className="sfe-cabins-title">Tauck Suites</h3>
                                <p className="sfe-cabins-text">
                                    Tauck also offers spacious
                                    accommodations, with different
                                    categories depending on the ship. Its
                                    newer riverboats have been designed
                                    around generous living space,
                                    contemporary amenities and a
                                    relatively intimate guest experience.
                                </p>
                                <p className="sfe-cabins-outro">
                                    Tauck's current river-cruise
                                    philosophy emphasizes comfort,
                                    spaciousness, elegance and personal
                                    service.
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
                        <h2 className="sva-section-title">Which Has Better Suites?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div className="sva-choice-grid" style={{ marginBottom: "24px" }}>
                            <div className="sva-choice-item">
                                <strong>Scenic</strong> has the edge for travelers who specifically want Butler Service and the Sun Lounge concept.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Tauck</strong> is excellent for travelers who prioritize spacious, comfortable accommodation as part of a destination-focused luxury journey.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BALCONY COMPARISON ─────────────────────────────────── */}
            <section className="sva-balcony-section" id="balconies">
                <div className="sva-balcony-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck: Balcony Comparison</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This is another important difference.
                        </p>
                    </div>

                    <div className="sva-balcony-grid">
                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Sun size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Scenic Sun Lounge</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Scenic Sun Lounge</h3>
                                <p className="sva-balcony-card-text">
                                    Scenic's Sun Lounge is one of the
                                    brand's signature features. It allows
                                    guests to enjoy river views while
                                    maintaining protection from weather
                                    and providing additional usable
                                    living space.
                                </p>
                                <p className="sva-balcony-card-text" style={{ marginTop: "12px", fontWeight: 500 }}>Best for:</p>
                                <ul className="sva-ships-list">
                                    {["River viewing", "Relaxing in your suite", "Cooler weather", "Rainy days", "Travelers who spend considerable time in their cabin"].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-balcony-card">
                            <div className="sva-balcony-img-placeholder">
                                <Home size={48} className="sva-balcony-img-icon" strokeWidth={1.2} />
                                <span className="sva-balcony-img-label">Tauck Balcony Options</span>
                            </div>
                            <div className="sva-balcony-content">
                                <h3 className="sva-balcony-card-title">Tauck Balcony Options</h3>
                                <p className="sva-balcony-card-text">
                                    Tauck's ships use different balcony
                                    configurations depending on the
                                    vessel and cabin category. Some
                                    cabins emphasize French-balcony-style
                                    access and views rather than
                                    Scenic's enclosed Sun Lounge concept.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box">
                        <h4 className="sva-choice-title">Winner:</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Scenic</strong> for balcony innovation and flexibility.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── FIRST-TIME RIVER CRUISERS ──────────────────────────── */}
            <section className="sva-info-section" id="first-time-cruisers" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck for First-Time River Cruisers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both are excellent choices for first-time river cruisers.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Best for travelers who want: "Everything is taken care of, but I still want choices."
                                </p>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Tauck</h3>
                                <p className="sva-info-card-text">
                                    Best for travelers who want: "Everything is taken care of, and I don't want to think about logistics."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text">Winner: Tie.</p>
                    </div>
                </div>
            </section>



            {/* ── FOOD LOVERS ────────────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="food-lovers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck for Food Lovers</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic: Best for travelers who want:</h3>
                                <ul className="sva-info-list">
                                    {["Multiple onboard dining options", "Premium beverages", "Fine dining", "Variety"].map((item, idx) => (
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
                                <h3 className="sva-info-card-title text-avalon">Tauck: Best for travelers who want:</h3>
                                <ul className="sva-info-list">
                                    {["Regional cuisine", "Dining ashore", "Destination-based culinary experiences", "Local restaurants"].map((item, idx) => (
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
                        <p className="sva-winner-text">Scenic for onboard variety. Tauck for destination dining.</p>
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
                                deciding between Scenic and Tauck.
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
                        <h2 className="sva-section-title">Scenic vs Tauck Dining</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Both brands take dining seriously.
                        </p>
                    </div>

                    <div className="sva-dining-grid">
                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Utensils size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Scenic Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Scenic Dining</h3>
                                <p className="sva-dining-card-text">
                                    Scenic offers multiple dining environments depending on the ship, with a focus on fine dining, regional cuisine, variety, premium beverages and flexible dining experiences.
                                </p>
                                <p className="sva-dining-card-text" style={{ marginTop: "12px" }}>
                                    Scenic can be particularly appealing to travelers who want variety onboard.
                                </p>
                            </div>
                        </div>

                        <div className="sva-dining-card">
                            <div className="sva-dining-img-placeholder">
                                <Wine size={48} className="sva-dining-img-icon" strokeWidth={1.2} />
                                <span className="sva-dining-img-label">Tauck Dining</span>
                            </div>
                            <div className="sva-dining-content">
                                <h3 className="sva-dining-card-title">Tauck Dining</h3>
                                <p className="sva-dining-card-text">
                                    Tauck emphasizes both onboard and destination dining. Its current river cruise materials highlight regionally inspired meals onboard as well as locally inspired dining ashore.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-verdict-box">
                        <h4 className="sva-verdict-title">The difference:</h4>
                        <div className="sva-verdict-grid">
                            <div className="sva-verdict-item">
                                <strong>Scenic:</strong> More emphasis on onboard dining variety.
                            </div>
                            <div className="sva-verdict-item">
                                <strong>Tauck:</strong> Strong emphasis on connecting dining to the destination.
                            </div>
                        </div>
                        <p className="sva-winner-text" style={{ marginTop: "12px" }}><strong>Winner:</strong> Tie—with different strengths.</p>
                    </div>
                </div>
            </section>



            {/* ── BUTLER SERVICE ─────────────────────────────────── */}
            <section className="sva-service-section" id="service">
                <div className="sva-service-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck Butler Service</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">This is a major differentiator.</p>
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
                                    Scenic provides Butler Service across its suite categories, with the specific services varying according to accommodation level. Services can include things such as concierge assistance, packing and unpacking, shoe polishing, in-suite drinks, minibar service, and assistance with special requests.
                                </p>
                                <p className="sva-service-card-text" style={{ marginTop: "12px", fontWeight: 500 }}>
                                    If Butler Service matters to you: Scenic has a clear advantage.
                                </p>
                            </div>
                        </div>

                        <div className="sva-service-card">
                            <div className="sva-service-img-placeholder">
                                <Users size={48} className="sva-service-img-icon" strokeWidth={1.2} />
                                <span className="sva-service-img-label">Tauck Team-Based Service</span>
                            </div>
                            <div className="sva-service-content">
                                <h3 className="sva-service-card-title">Tauck</h3>
                                <p className="sva-service-card-text">
                                    Tauck's strength is different: instead of emphasizing a personal butler model, it emphasizes a comprehensive team-based service experience involving Tauck Directors, local guides and ship staff.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TOUR DIRECTORS AND GUIDES ─────────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="tour-directors">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck: Tour Directors and Guides</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Tauck has a particularly distinctive model.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Tauck</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Tauck states that its river cruises can include up to four Tauck Director-level staff, working with local guides and experts. That can be valuable for travelers who want:
                                </p>
                                <ul className="sva-info-list">
                                    {["More personal assistance", "Strong logistical support", "Deeper destination context", "A consistent point of contact"].map((item, idx) => (
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
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text">
                                    Scenic also provides dedicated cruise staff and local guides.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box">
                        <p className="sva-notes-text">Winner: Tauck for its tour-director-led destination model.</p>
                    </div>
                </div>
            </section>



            {/* ── EXCURSIONS ──────────────────────────────────── */}
            <section className="sva-info-section bg-white" id="excursions">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck: Which Has Better Excursions?</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Choose Scenic if you want:</h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {[
                                        "More activity choices",
                                        "Flexibility",
                                        "A mix of active and cultural experiences",
                                        "More control over how you spend your port days",
                                    ].map((point, idx) => (
                                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                            <span style={{ color: "var(--navy)", fontWeight: "bold" }}>✔</span>
                                            <span className="sva-info-card-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sva-info-card border-avalon">
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Choose Tauck if you want:</h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {[
                                        "Highly guided touring",
                                        "Strong destination storytelling",
                                        "Exclusive experiences",
                                        "More support ashore",
                                        "A seamless group experience",
                                    ].map((point, idx) => (
                                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                            <span style={{ color: "var(--navy)", fontWeight: "bold" }}>✔</span>
                                            <span className="sva-info-card-text">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box" style={{ marginTop: "32px" }}>
                        <h4 className="sva-choice-title">Verdict:</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                            <p className="sva-info-card-text">
                                Tauck has an edge for travelers who consider touring the most important part of the vacation.
                            </p>
                            <p className="sva-info-card-text">
                                Scenic has an edge for travelers who want more choice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHAT IS INCLUDED ──────────────────────────────────── */}
            <section className="sva-included-section" id="whats-included">
                <div className="sva-included-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck: Is One More All-Inclusive?</h2>
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
                                    Scenic describes its river experience as all-inclusive, incorporating dining, beverages, excursions, entertainment and other elements into the experience.
                                </p>
                            </div>
                        </div>

                        <div className="sva-included-card">
                            <div className="sva-included-img-placeholder">
                                <Wallet size={48} className="sva-included-img-icon" strokeWidth={1.2} />
                                <span className="sva-included-img-label">Tauck Inclusions</span>
                            </div>
                            <div className="sva-included-content">
                                <h3 className="sva-included-card-title">Tauck</h3>
                                <p className="sva-included-card-text">
                                    Tauck takes an equally strong approach. Its current river cruise materials state that all shore excursions, accommodations, meals, gratuities, transportation, transfers and selected exclusive experiences are included.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-important-box">
                        <div className="sva-important-header">
                            <AlertCircle size={24} className="sva-important-header-icon" />
                            <h4 className="sva-important-title">The difference</h4>
                        </div>
                        <div className="sva-important-content">
                            <p className="sva-important-lead-text">Scenic: Luxury ship experience + inclusions. Tauck: Complete land-and-river journey + inclusions.</p>
                        </div>
                    </div>
                    <div className="sva-notes-box" style={{ marginTop: "24px" }}>
                        <p className="sva-notes-text">Winner: It's essentially a tie—but the inclusions are structured differently.</p>
                    </div>
                </div>
            </section>



            {/* ── COUPLES / FIRST-TIME / ACTIVE ──────────────────────── */}
            <section className="sfe-family-section" id="couples" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="sfe-cabins-container">
                    <div className="sfe-firsttime-header" style={{ marginBottom: "8px" }}>
                        <h2 className="sfe-firsttime-title">Scenic vs Tauck for Couples</h2>
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
                                    "Luxury ship experience",
                                    "Butler Service",
                                    "Romantic suites",
                                    "Premium dining",
                                    "Flexible excursions",
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
                                <h3 className="sfe-dining-noimg-title">Choose Tauck for:</h3>
                            </div>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Destination immersion",
                                    "Exclusive experiences",
                                    "Seamless touring",
                                    "Luxury land extensions",
                                    "Less logistical planning",
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
                        Winner: Tie. For an anniversary or honeymoon,
                        choose based on the itinerary and suite first.
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
            <section className="sva-ships-section" id="ships" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="sva-ships-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck: Ships</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            Both brands use purpose-built river ships designed for luxury travelers.
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
                                    Scenic's Space-Ships are designed around:
                                </p>
                                <ul className="sva-ships-list" style={{ marginBottom: "16px" }}>
                                    {[
                                        "Contemporary luxury",
                                        "Spacious suites",
                                        "Sun Lounges",
                                        "Multiple dining venues",
                                        "Wellness",
                                        "Entertainment",
                                        "Personalized service",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Scenic's ships are particularly recognizable because of the distinctive Sun Lounge suite concept.
                                </p>
                            </div>
                        </div>

                        <div className="sva-ships-card">
                            <div className="sva-ships-img-placeholder">
                                <Ship size={48} className="sva-ships-img-icon" strokeWidth={1.2} />
                                <span className="sva-ships-img-label">Tauck Riverboats</span>
                            </div>
                            <div className="sva-ships-content">
                                <h3 className="sva-ships-card-title">Tauck Riverboats</h3>
                                <p className="sva-ships-card-text" style={{ fontSize: "16px", marginBottom: "16px" }}>
                                    Tauck's riverboats emphasize:
                                </p>
                                <ul className="sva-ships-list" style={{ marginBottom: "16px" }}>
                                    {[
                                        "Elegant design",
                                        "Spacious accommodations",
                                        "Smaller guest numbers",
                                        "Comfortable public areas",
                                        "Personalized service",
                                    ].map((item, idx) => (
                                        <li key={idx} className="sva-ships-item">
                                            <CheckCircle size={16} className="sva-ships-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="sva-ships-card-text" style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "auto" }}>
                                    Tauck's current materials describe its riverboats as custom-crafted around comfort, spaciousness and elegance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sva-choice-box" style={{ marginTop: "32px" }}>
                        <h4 className="sva-choice-title">Which ships are better?</h4>
                        <div className="sva-choice-grid">
                            <div className="sva-choice-item">
                                <strong>Scenic</strong> if onboard amenities and suite innovation are your priority.
                            </div>
                            <div className="sva-choice-item">
                                <strong>Tauck</strong> if intimacy and destination-focused service are more important.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR FAMILIES ──────────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="families">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck for Families</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">
                            This is one category where Tauck deserves special attention. Tauck operates Tauck Bridges, its family travel program, making it particularly relevant to multigenerational travelers and families. Scenic is primarily oriented toward adults and luxury travelers rather than family-focused programming.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <p className="sfe-dining-noimg-text" style={{ fontWeight: 500, marginBottom: "12px" }}>Choose Tauck if:</p>
                        <ul className="sva-info-list">
                            {["You're traveling with children", "You're traveling with multiple generations", "Family activities matter", "You want structured family experiences"].map((item, idx) => (
                                <li key={idx} className="sva-info-item">
                                    <CheckCircle size={16} className="sva-info-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "24px" }}>
                        <p className="sva-notes-text">Winner: Tauck for family and multigenerational travel.</p>
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
                                        "Butler Service",
                                        "Specialty dining",
                                        "Enrich experiences",
                                        "Onboard amenities"
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
                                <span className="sva-luxury-img-label">Tauck Value</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Tauck</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Can offer excellent value if you will take advantage of:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "Guided excursions",
                                        "Exclusive experiences",
                                        "Dining ashore",
                                        "Transfers",
                                        "Tour Directors",
                                        "Included hotels",
                                        "Comprehensive logistics"
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
                        <p className="sva-winner-text">Depends on your travel style.</p>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR SOLO TRAVELERS ────────────────────────────── */}
            <section className="sva-info-section bg-soft" id="solo-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck for Solo Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Both can work very well for solo travelers.</p>
                    </div>

                    <div className="sva-solo-layout">
                        <div className="sva-info-card" style={{ padding: "40px" }}>
                            <p className="sva-info-card-text" style={{ marginBottom: "20px" }}>
                                Tauck currently highlights no single supplement in Category 1 on all river cruise departures, with additional solo savings available on selected cabins and departures. That can make Tauck particularly interesting for solo travelers.
                            </p>

                            <div className="sva-solo-highlights">
                                <div className="sva-highlight-item border-scenic-left">
                                    <strong>Choose Scenic if:</strong> You value Butler Service and a luxury ship environment.
                                </div>
                                <div className="sva-highlight-item border-avalon-left">
                                    <strong>Choose Tauck if:</strong> You value guided touring, strong support and potentially favorable solo pricing.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sva-notes-box" style={{ marginTop: "32px" }}>
                        <p className="sva-notes-text">Winner: Tauck deserves a close look for solo travelers.</p>
                    </div>
                </div>
            </section>

            {/* ── ACTIVE TRAVELERS ────────────────────────── */}
            <section className="sva-info-section bg-white" id="active-travelers">
                <div className="sva-info-container">
                    <div className="sva-section-header">
                        <h2 className="sva-section-title">Scenic vs Tauck for Active Travelers</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sva-section-lead">Scenic can be attractive for travelers who want to mix sightseeing with activity.</p>
                    </div>

                    <div className="sva-info-grid">
                        <div className="sva-info-card border-scenic">
                            <div className="sva-luxury-img-placeholder">
                                <Bike size={48} className="sva-luxury-img-icon" strokeWidth={1.2} />
                                <span className="sva-luxury-img-label">Scenic Active Experiences</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-scenic">Scenic</h3>
                                <p className="sva-info-card-text" style={{ marginBottom: "16px" }}>
                                    Depending on itinerary, its experiences can include:
                                </p>
                                <ul className="sva-info-list">
                                    {[
                                        "Hiking",
                                        "Cycling",
                                        "Walking",
                                        "Cultural activities"
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
                                <span className="sva-luxury-img-label">Tauck Guided Exploration</span>
                            </div>
                            <div className="sva-info-content">
                                <h3 className="sva-info-card-title text-avalon">Tauck</h3>
                                <p className="sva-info-card-text">
                                    Tauck also offers active experiences, but its strength is more strongly associated with guided destination exploration.
                                </p>
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
                        <h2 className="sfe-firsttime-title">Scenic vs Tauck: Price</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead" style={{ marginTop: "16px" }}>
                            Both brands occupy the premium end of river cruising, so neither should be compared with mainstream river cruise pricing without accounting for inclusions.
                        </p>
                        <p className="sfe-firsttime-lead" style={{ marginTop: "8px" }}>
                            The headline fare can look expensive.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div className="sfe-dining-noimg-header-row">
                            <div className="sfe-dining-noimg-icon-box">
                                <Wallet size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="sfe-dining-noimg-title">But a meaningful comparison should include:</h3>
                        </div>

                        <ul className="sfe-dining-noimg-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px 24px", marginBottom: "32px" }}>
                            {[
                                "Cruise",
                                "Hotel nights",
                                "Transfers",
                                "Excursions",
                                "Beverages",
                                "Dining ashore",
                                "Gratuities",
                                "Wi-Fi",
                                "Transportation",
                                "Special experiences"
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
                            Tauck explicitly builds virtually all of these components into its upfront pricing on applicable river itineraries.
                        </p>

                        <div className="sva-choice-box" style={{ padding: "24px 32px", borderLeft: "4px solid var(--navy)" }}>
                            <h4 className="sva-choice-title" style={{ fontSize: "18px", marginBottom: "16px" }}>The right comparison:</h4>
                            <div className="sva-choice-grid">
                                <div className="sva-choice-item">
                                    <strong>Total vacation cost</strong>—not cruise fare alone.
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
                        <h2 className="adg-h2">Scenic vs Tauck: Pros &amp; Cons</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="sfe-dining-noimg-grid" style={{ marginBottom: "24px" }}>
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Scenic Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Ultra-luxury positioning",
                                    "Highly inclusive",
                                    "Butler Service",
                                    "Sun Lounge suites",
                                    "Strong dining variety",
                                    "Scenic Freechoice",
                                    "Scenic Enrich",
                                    "Excellent onboard amenities",
                                    "Strong choice for couples"
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
                            <h3 className="sfe-dining-noimg-title">Tauck Pros</h3>
                            <ul className="sfe-dining-noimg-list">
                                {[
                                    "Highly inclusive pricing",
                                    "All-inclusive excursions",
                                    "Strong Tauck Director support",
                                    "Exclusive cultural experiences",
                                    "Excellent destination programming",
                                    "Dining ashore",
                                    "Strong family offering",
                                    "Excellent land extensions",
                                    "Strong solo-traveler policies on qualifying categories"
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
                                Tauck's current materials explicitly state that no options are sold on its river cruises and that virtually every river-cruise expense is included in one upfront price.
                            </p>
                        </div>
                    </div>

                    <div className="scenic-exclusions-grid" style={{ marginBottom: "12px" }}>
                        {[
                            "Premium pricing",
                            "May be more ship-focused than travelers who prioritize touring",
                            "Families may find Tauck more specifically designed for multigenerational travel"
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
                            "Travelers who want more onboard activity choices may prefer Scenic",
                            "Travelers specifically seeking Butler Service may prefer Scenic",
                            "The highly structured touring style may not appeal to travelers who prefer maximum independence"
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
                        <h2 className="sfe-firsttime-title">Scenic vs Tauck <br /> Which Should You Choose?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="sfe-firsttime-lead" style={{ marginTop: "16px" }}>
                            Here's the simplest way to decide.
                        </p>
                    </div>

                    <div className="sfe-dining-noimg-grid">
                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Scenic if you want:</h3>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: "8px 0 0 0" }}>
                                Ultra-luxury ship + Butler Service + Sun Lounge + choice + onboard amenities
                            </p>
                        </div>

                        <div className="sfe-dining-noimg-card">
                            <h3 className="sfe-dining-noimg-title">Choose Tauck if you want:</h3>
                            <p className="sfe-dining-noimg-list-text" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-body)", margin: "8px 0 0 0" }}>
                                Exceptional touring + exclusive experiences + Tour Directors + seamless logistics
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
                            Tauck before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        alt="A Scenic Space-Ship and an Tauck Panorama-class river ship sailing a European river"
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
                                    Scenic vs Tauck — <br /> There Isn't a Universal Winner
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Choose Scenic for luxury,
                                        inclusions, and personalized
                                        service. Choose Tauck for space,
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
                                                Tauck deserves serious
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
                                            "Compare Scenic and Tauck itineraries and ships",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Communicate special occasions to the cruise line",
                                            "Explain current Scenic and Tauck promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic and Tauck with other luxury river cruise lines",
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