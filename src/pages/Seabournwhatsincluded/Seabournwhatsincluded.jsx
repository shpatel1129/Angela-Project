import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Wine,
    Gem,
    Map,
    Compass,
    Utensils,
    Home,
    MessageCircle,
    Wifi,
    DollarSign,
    Music,
    Dumbbell,
    Coffee,
    Sparkles,
    Droplet,
    Shirt,
    Flower2,
    MapPin,
    Wallet,
    ShoppingBag,
    Waves,
    AlertCircle,
    Star,
    Award,
    Users,
    Ship,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "./Seabournwhatsincluded.css";

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
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#webpage",
            name: "What Is Included on a Seabourn Cruise? Complete Guide",
            url: "https://www.tripsandships.com/seabourn-cruises/whats-included/",
            description:
                "Find out what is included on a Seabourn cruise, from dining, premium beverages and caviar to Wi-Fi, gratuities, entertainment, suites and expedition experiences.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#article",
            headline: "What Is Included on a Seabourn Cruise?",
            description:
                "A complete guide to Seabourn cruise inclusions, covering dining, premium beverages, Champagne, caviar, Wi-Fi, gratuities, entertainment, enrichment, fitness facilities, expedition activities, shore excursions, and additional costs.",
            author: {
                "@type": "Person",
                name: "Angela Hughes",
                "@id": "https://www.tripsandships.com/#person",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
                "@id": "https://www.tripsandships.com/#organization",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "What Is Included on a Seabourn Cruise?", item: "https://www.tripsandships.com/seabourn-cruises/whats-included/" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#service",
            serviceType: "Seabourn Cruise Vacation Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
                "@id": "https://www.tripsandships.com/#travelagency",
            },
            areaServed: "Worldwide",
            description:
                "Personalized travel planning support for Seabourn cruises, including itinerary selection, suite categories, cruise inclusions, shore experiences, and overall trip planning.",
        },
        {
            "@type": "Review",
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#review",
            itemReviewed: { "@type": "Product", name: "Seabourn Cruises" },
            author: { "@type": "Person", name: "Angela Hughes", "@id": "https://www.tripsandships.com/#person" },
            reviewBody:
                "Seabourn provides one of the more comprehensive luxury cruise experiences, with dining, premium beverages, Champagne, caviar, Wi-Fi, gratuities, entertainment and enrichment forming the foundation of the onboard experience. Optional shore excursions, spa treatments, private experiences, travel arrangements and personal purchases may carry additional costs.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#itemlist",
            name: "What This Seabourn Cruise Inclusions Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "What Is Included on a Seabourn Cruise?" },
                { "@type": "ListItem", position: 2, name: "Is Seabourn All-Inclusive?" },
                { "@type": "ListItem", position: 3, name: "Seabourn Dining" },
                { "@type": "ListItem", position: 4, name: "Premium Spirits and Fine Wines" },
                { "@type": "ListItem", position: 5, name: "Welcome Champagne" },
                { "@type": "ListItem", position: 6, name: "In-Suite Bar" },
                { "@type": "ListItem", position: 7, name: "Complimentary Caviar" },
                { "@type": "ListItem", position: 8, name: "Wi-Fi" },
                { "@type": "ListItem", position: 9, name: "Gratuities" },
                { "@type": "ListItem", position: 10, name: "Entertainment" },
                { "@type": "ListItem", position: 11, name: "Seabourn Conversations" },
                { "@type": "ListItem", position: 12, name: "Fitness Facilities" },
                { "@type": "ListItem", position: 13, name: "Pools and Public Spaces" },
                { "@type": "ListItem", position: 14, name: "Expedition Activities" },
                { "@type": "ListItem", position: 15, name: "Seabourn Shore Excursions" },
                { "@type": "ListItem", position: 16, name: "Ventures by Seabourn" },
                { "@type": "ListItem", position: 17, name: "What Is Not Included on a Seabourn Cruise?" },
                { "@type": "ListItem", position: 18, name: "How Seabourn Inclusions Affect the True Cruise Cost" },
                { "@type": "ListItem", position: 19, name: "How to Maximize the Value of a Seabourn Cruise" },
                { "@type": "ListItem", position: 20, name: "Is Seabourn Worth the Money Because of Its Inclusions?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/whats-included/#faq",
            mainEntity: [
                { "@type": "Question", name: "Is Seabourn all-inclusive?", acceptedAnswer: { "@type": "Answer", text: "Seabourn offers a broad all-inclusive luxury cruise experience, with accommodation, dining, premium beverages, Wi-Fi, gratuities and many onboard experiences included. Optional services and certain excursions can cost extra." } },
                { "@type": "Question", name: "Are drinks included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn includes many premium spirits, fine wines, Champagne, beer and non-alcoholic beverages." } },
                { "@type": "Question", name: "Is Wi-Fi included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Wi-Fi is included as part of the Seabourn experience, with connectivity supported by Starlink on the fleet." } },
                { "@type": "Question", name: "Are gratuities included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn states that tipping is neither required nor expected." } },
                { "@type": "Question", name: "Is caviar included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Complimentary caviar is one of Seabourn's signature luxury offerings." } },
                { "@type": "Question", name: "Is dining included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dining at Seabourn's primary onboard restaurants is included, along with in-suite dining." } },
                { "@type": "Question", name: "Is room service included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Seabourn offers in-suite dining, allowing guests to enjoy meals privately in their suite." } },
                { "@type": "Question", name: "Are shore excursions included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Not all shore excursions are included. Many optional shore experiences and specialized tours carry additional charges." } },
                { "@type": "Question", name: "Are Seabourn expedition excursions included?", acceptedAnswer: { "@type": "Answer", text: "Many core expedition activities are included on expedition voyages, while certain specialized or optional experiences can cost extra." } },
                { "@type": "Question", name: "Is the spa included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Use of standard onboard facilities may be included, but spa treatments, massages, facials and salon services are generally additional." } },
                { "@type": "Question", name: "Is Champagne included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Champagne is included as part of Seabourn's onboard beverage offering, including a welcome Champagne." } },
                { "@type": "Question", name: "Are premium wines included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn includes fine wines and premium spirits as part of its onboard experience." } },
                { "@type": "Question", name: "Does Seabourn charge for specialty dining?", acceptedAnswer: { "@type": "Answer", text: "Seabourn includes multiple dining venues, although specific specialty culinary experiences or offerings can vary by ship and itinerary." } },
                { "@type": "Question", name: "Does Seabourn include laundry?", acceptedAnswer: { "@type": "Answer", text: "Travelers should generally budget separately for laundry and dry-cleaning unless a specific fare, suite benefit or promotion includes the service." } },
                { "@type": "Question", name: "Are airfare and transfers included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Not automatically in every cruise fare. Airfare, transfers and pre- or post-cruise arrangements depend on the booking package or promotion." } },
                { "@type": "Question", name: "Are Seabourn shore excursions expensive?", acceptedAnswer: { "@type": "Answer", text: "Pricing varies significantly by experience. Private tours, specialized adventures and exclusive experiences generally cost more than standard sightseeing." } },
                { "@type": "Question", name: "Is Seabourn worth it if I don't drink alcohol?", acceptedAnswer: { "@type": "Answer", text: "It can be. Seabourn's value also comes from suites, dining, service, Wi-Fi, gratuities, entertainment, enrichment and destination experiences." } },
                { "@type": "Question", name: "How can I compare the true cost of a Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "Compare the cruise fare together with airfare, hotels, transfers, excursions, spa treatments and personal spending. Then compare that total with competing luxury cruise lines." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (custom Sbc-faq classes) ─────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "1. Is Seabourn all-inclusive?", a: "Seabourn offers a broad all-inclusive luxury cruise experience, with accommodation, dining, premium beverages, Wi-Fi, gratuities and many onboard experiences included. Optional services and certain excursions can cost extra." },
        { q: "2. Are drinks included on Seabourn?", a: "Yes. Seabourn includes many premium spirits, fine wines, Champagne, beer and non-alcoholic beverages." },
        { q: "3. Is Wi-Fi included on Seabourn?", a: "Yes. Wi-Fi is included as part of the Seabourn experience, with connectivity supported by Starlink on the fleet." },
        { q: "4. Are gratuities included on Seabourn?", a: "Yes. Seabourn states that tipping is neither required nor expected." },
        { q: "5. Is caviar included on Seabourn?", a: "Yes. Complimentary caviar is one of Seabourn's signature luxury offerings." },
        { q: "6. Is dining included on Seabourn?", a: "Yes. Dining at Seabourn's primary onboard restaurants is included, along with in-suite dining." },
        { q: "7. Is room service included on Seabourn?", a: "Seabourn offers in-suite dining, allowing guests to enjoy meals privately in their suite." },
        { q: "8. Are shore excursions included on Seabourn?", a: "Not all shore excursions are included. Many optional shore experiences and specialized tours carry additional charges." },
        { q: "9. Are Seabourn expedition excursions included?", a: "Many core expedition activities are included on expedition voyages, while certain specialized or optional experiences can cost extra." },
        { q: "10. Is the spa included on Seabourn?", a: "Use of standard onboard facilities may be included, but spa treatments, massages, facials and salon services are generally additional." },
        { q: "11. Is Champagne included on Seabourn?", a: "Yes. Champagne is included as part of Seabourn's onboard beverage offering, including a welcome Champagne." },
        { q: "12. Are premium wines included on Seabourn?", a: "Yes. Seabourn includes fine wines and premium spirits as part of its onboard experience." },
        { q: "13. Does Seabourn charge for specialty dining?", a: "Seabourn includes multiple dining venues, although specific specialty culinary experiences or offerings can vary by ship and itinerary." },
        { q: "14. Does Seabourn include laundry?", a: "Travelers should generally budget separately for laundry and dry-cleaning unless a specific fare, suite benefit or promotion includes the service." },
        { q: "15. Are airfare and transfers included on Seabourn?", a: "Not automatically in every cruise fare. Airfare, transfers and pre- or post-cruise arrangements depend on the booking package or promotion." },
        { q: "16. Are Seabourn shore excursions expensive?", a: "Pricing varies significantly by experience. Private tours, specialized adventures and exclusive experiences generally cost more than standard sightseeing." },
        { q: "17. Is Seabourn worth it if I don't drink alcohol?", a: "It can be. Seabourn's value also comes from suites, dining, service, Wi-Fi, gratuities, entertainment, enrichment and destination experiences." },
        { q: "18. How can I compare the true cost of a Seabourn cruise?", a: "Compare the cruise fare together with airfare, hotels, transfers, excursions, spa treatments and personal spending. Then compare that total with competing luxury cruise lines." },
    ];

    return (
        <div className="Sbc-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`Sbc-faq-item${open === i ? " Sbc-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Sbc-faq-q">
                        <span>{item.q}</span>
                        <span className="Sbc-faq-icon">
                            {open === i ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                        </span>
                    </div>
                    {open === i && (
                        <div className="Sbc-faq-a">
                            <div className="Sbc-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ── Data ──────────────────────────────────────────────────────── */
const quickIncluded = [
    "All-suite oceanfront accommodation", "Complimentary dining", "Premium spirits and fine wines",
    "Welcome Champagne", "In-suite bar", "Complimentary caviar", "Wi-Fi", "Gratuities", "Entertainment",
    "Seabourn Conversations enrichment", "Selected onboard activities", "Expedition activities on expedition voyages",
    "Fitness facilities", "Access to public areas and pools",
];

const quickAdditional = [
    "Certain shore excursions", "Ventures by Seabourn experiences", "Spa treatments", "Salon services",
    "Some premium purchases", "Boutique shopping", "Casino-related expenses where applicable",
    "Certain travel arrangements", "Medical services", "Personal purchases",
];

const allInclusiveFormula = ["Accommodation", "dining", "premium beverages", "Wi-Fi", "gratuities", "entertainment", "many onboard experiences"];

const inclusionDetails = [
    { icon: Dumbbell, num: "10", title: "Fitness Facilities Are Included", text: "Guests can use the ship's fitness facilities without paying a separate daily access fee. Personal training and specialized services may carry an additional charge.", featuresTitle: "Depending on the ship, facilities can include:", features: ["Fitness center", "Exercise equipment", "Fitness classes", "Outdoor walking areas", "Wellness activities"] },
    { icon: Waves, num: "11", title: "Pools and Public Spaces Are Included", text: "Access to Seabourn's onboard public areas is included in the cruise fare. There is no separate resort-style daily access fee for these standard onboard facilities.", featuresTitle: "This includes access to spaces such as:", features: ["Pools", "Lounges", "Observation areas", "Deck spaces", "Restaurants", "Bars"] },
    { icon: Compass, num: "12", title: "Expedition Activities Can Be Included", text: "For travelers booking Seabourn Venture or Seabourn Pursuit, the inclusions become particularly interesting. ", featuresTitle: "Expedition voyages can include activities such as:", features: ["Zodiac excursions", "Nature walks", "Wildlife viewing", "Expedition briefings", "Guided exploration", "Kayaking on selected voyages", "Snorkeling on selected itineraries"] },
];

const shoreVentureCards = [
    { icon: Map, title: "Seabourn Shore Excursions: Are They Included?", text: "This is where travelers need to pay close attention. Not every Seabourn shore excursion is included in the cruise fare. Seabourn offers a broad portfolio of shore experiences, and some excursions are optional purchases. ", featuresTitle: "These can include:", features: ["Cultural tours", "Food and wine experiences", "Private touring", "Active adventures", "UNESCO visits", "Wildlife experiences"] },
    { icon: Compass, title: "Ventures by Seabourn: Is It Included?", text: "Ventures by Seabourn experiences may cost extra. These are specialized active and expedition-style experiences that are particularly attractive to adventurous travelers, but they should be considered separately when calculating the total cost of your trip.", featuresTitle: "These can include activities such as:", features: ["Kayaking", "Zodiac exploration", "Wildlife viewing", "Hiking", "Nature exploration"] },
];

const extraQaCards = [
    { icon: Home, title: "Is Room Service Included on Seabourn?", text: "Yes, Seabourn offers in-suite dining. Guests can enjoy meals in the privacy of their suite rather than dining in a restaurant — particularly valuable for breakfast on the veranda, quiet dinners, couples, special occasions and travelers who prefer privacy." },
    { icon: Utensils, title: "Is Specialty Dining Included on Seabourn?", text: "Seabourn's dining model is significantly more inclusive than cruise lines that charge separately for every specialty restaurant. Dining venues included vary by ship. Some special culinary experiences, private events or premium offerings may have an additional charge." },
    { icon: Wine, title: "Are Alcoholic Drinks Included on Seabourn?", text: "Yes, many alcoholic beverages are included: fine wines, premium spirits, Champagne, beer and cocktails. Availability can vary by venue and product, and travelers generally do not need to purchase a separate standard beverage package." },
    { icon: Sparkles, title: "Is Champagne Included on Seabourn?", text: "Yes. Seabourn includes Champagne as part of its onboard luxury experience, including a welcome Champagne — one of the small details that distinguishes the line from more mainstream cruise experiences." },
    { icon: Droplet, title: "Are Soft Drinks Included on Seabourn?", text: "Yes, non-alcoholic beverages are part of the onboard experience, including soft drinks, bottled water, coffee, tea, juices and other non-alcoholic refreshments." },
    { icon: Shirt, title: "Are Laundry Services Included?", text: "Standard laundry and dry-cleaning services should be treated as additional expenses unless specifically included with a particular fare, suite benefit or promotion. Check current pricing and applicable suite-level benefits on longer voyages." },
    { icon: Flower2, title: "Is the Spa Included on Seabourn?", text: "Access to standard ship facilities may be included, but spa treatments — massages, facials, beauty treatments, specialized wellness treatments and salon services — are generally additional expenses to budget separately." },
    { icon: MapPin, title: "Are Shore Excursions Included?", text: "Not all shore excursions are included. Pricing varies according to the type of experience, with private tours, specialty culinary experiences, exclusive cultural activities, adventure excursions, premium transportation and specialized local experiences typically costing extra." },
];

const notIncludedCards = [
    { title: "Shore Excursions", text: "Some excursions require additional payment." },
    { title: "Spa Treatments", text: "Massages, facials and salon services are generally extra." },
    { title: "Private Experiences", text: "Private guides, private transportation and exclusive tours can cost extra." },
    { title: "Airfare", text: "Unless specifically included in a particular package or promotion, airfare should be treated separately." },
    { title: "Pre- and Post-Cruise Hotels", text: "Hotels before or after the cruise are additional unless included in a specific package." },
    { title: "Travel Insurance", text: "Travel insurance is separate." },
    { title: "Medical Services", text: "Medical treatment onboard can involve additional charges." },
    { title: "Shopping", text: "Items purchased from onboard boutiques are not included." },
    { title: "Specialty Experiences", text: "Certain premium or specialized experiences may carry additional fees." },
];

const compareTable = [
    ["Suite accommodation", "Spa treatments"],
    ["Dining", "Some shore excursions"],
    ["Premium spirits", "Private tours"],
    ["Fine wines", "Specialty experiences"],
    ["Champagne", "Airfare"],
    ["Caviar", "Pre-cruise hotels"],
    ["Wi-Fi", "Post-cruise hotels"],
    ["Gratuities", "Travel insurance"],
    ["Entertainment", "Medical services"],
    ["Seabourn Conversations", "Boutique purchases"],
    ["Fitness facilities", "Certain premium activities"],
    ["Standard onboard facilities", "Personal expenses"],
];

const mainstreamDiff = [
    { term: "Premium beverages", desc: "Included rather than requiring a beverage package." },
    { term: "Wi-Fi", desc: "Included rather than requiring an internet package." },
    { term: "Gratuities", desc: "Included rather than added daily." },
    { term: "Dining", desc: "Multiple dining options included." },
    { term: "Caviar", desc: "A signature luxury amenity." },
    { term: "Suite accommodations", desc: "All-suite oceanfront accommodation is central to the product." },
];

const otherLuxuryCompareList = ["Cruise fare", "Suite category", "Included excursions", "Beverage policy", "Wi-Fi", "Airfare", "Transfers", "Gratuities", "Specialty dining", "Hotel packages", "Included activities"];

const differentModelFormula = ["Order a premium wine", "Enjoy dinner", "Connect to Wi-Fi", "Relax in your suite", "Attend enrichment programs", "Enjoy entertainment", "Use the fitness facilities"];

const budgetTiers = [
    { icon: Wallet, title: "Minimal Additional Spending", items: ["Included dining", "Included beverages", "Included Wi-Fi", "Included entertainment", "Included onboard activities"] },
    { icon: ShoppingBag, title: "Moderate Additional Spending", items: ["Several shore excursions", "Spa treatments", "Specialty experiences", "Shopping"] },
    { icon: Gem, title: "High-End Additional Spending", items: ["Private guides", "Private transportation", "Premium excursions", "Luxury pre- and post-cruise hotels", "Extensive spa treatments"] },
];

const maximizeValueTips = [
    { icon: Utensils, title: "Take Advantage of the Included Dining", text: "Try the different included dining venues instead of assuming you need specialty restaurants." },
    { icon: Wine, title: "Enjoy the Included Beverages", text: "Premium wines and spirits are already part of the experience." },
    { icon: Wifi, title: "Use the Included Wi-Fi", text: "There is no need to budget separately for a standard internet package." },
    { icon: MessageCircle, title: "Take Advantage of Onboard Enrichment", text: "Seabourn Conversations and destination programming can add substantial value." },
    { icon: Map, title: "Choose Excursions Strategically", text: "You do not need to book an expensive excursion at every port. Mix premium experiences with independent exploration where appropriate." },
    { icon: DollarSign, title: "Compare the Total Trip Cost", text: "Look at cruise fare + airfare + hotels + transfers + excursions + personal spending for a realistic picture of the trip's value." },
];

const worthItFormula = ["Luxury suite", "dining", "premium beverages", "Wi-Fi", "gratuities", "service", "entertainment", "destination experiences"];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournWhatsIncluded = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>What Is Included on a Seabourn Cruise? Complete Guide</title>
                <meta name="title" content="Seabourn Cruise Inclusions: What Is Included?" />
                <meta
                    name="description"
                    content="Find out what is included on a Seabourn cruise, from dining, premium beverages and caviar to Wi-Fi, gratuities, entertainment, suites and expedition experiences."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>

                <div className="Sbc-hero-content">
                    <h1>What Is Included on a Seabourn Cruise?</h1>
                    <p>
                        One of the biggest advantages of booking a Seabourn cruise is the breadth of the included experience.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Seabourn is designed around an ultra-luxury model where many expenses that can become add-ons on other cruise lines are already part of the cruise experience. Dining, premium spirits and wines, Wi-Fi, gratuities, entertainment, and a number of onboard experiences are included, while certain excursions, spa treatments, premium services and other personal expenses may cost extra.
                            </p>
                            <p>
                                For travelers comparing Seabourn with other luxury cruise lines, understanding exactly what is included—and what is not—is essential for comparing the true value of the fare.
                            </p>
                            <p>
                                This guide breaks down Seabourn cruise inclusions by category so you can understand what you are paying for before you book.
                            </p>
                        </>
                    )}

                    <div className="Sbc-hero-readmore-wrapper">
                        <button
                            className="Sbc-hero-readmore-btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Seabourn Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-quick-answer">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Short Version</span>
                        <h2 className="Sbc-h2">Quick Answer: What Is Included on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            A Seabourn cruise generally includes accommodation, dining,
                            premium beverages, Wi-Fi, gratuities and entertainment.
                            However, not everything is included in the cruise fare —
                            the exact inclusions can vary by ship, itinerary and
                            voyage, so travelers should review the specific sailing
                            before booking.
                        </p>
                    </div>

                    <div className="Wic-qa-panels">
                        <div className="Wic-qa-panel Wic-included-panel">
                            <h3 className="Wic-qa-panel-title">Generally Included</h3>
                            <ul className="Wic-qa-panel-list">
                                {quickIncluded.map((item, i) => (
                                    <li key={i}>
                                        
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Wic-qa-panel Wic-expenses-panel">
                            <h3 className="Wic-qa-panel-title">Additional Expenses</h3>
                            <ul className="Wic-qa-panel-list">
                                {quickAdditional.map((item, i) => (
                                    <li key={i}>
                                        
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN ALL-INCLUSIVE ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-all-inclusive">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Setting Expectations</span>
                        <h2 className="Sbc-h2">Is Seabourn All-Inclusive?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p" style={{ marginBottom: "24px" }}>
                                Seabourn is often described as an all-inclusive or
                                ultra-luxury cruise experience, but "all-inclusive" does
                                not mean absolutely everything is free. 
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "24px" }}>The core onboard
                                experience includes a remarkably broad range of services
                                and amenities — but optional services and certain shore
                                experiences can still cost extra. That distinction is
                                important when comparing Seabourn with other luxury cruise
                                brands.</p>

                            <div className="Sbc-worth-card" style={{ backgroundColor: 'var(--bg-white)', margin: "0" }}>
                                <h4 className="Sbc-worth-card-title">Seabourn includes:</h4>
                                <div className="Sbc-worth-formula-row">
                                    {allInclusiveFormula.map((part, i) => (
                                        <Fragment key={i}>
                                            <span>{part}</span>
                                            {i < allInclusiveFormula.length - 1 && <span className="Sbc-worth-plus">+</span>}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder" style={{ background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-dark2) 100%)" }}>
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Sparkles size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn All-Inclusive Luxury Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN DINING IS INCLUDED ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wic-dining-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Category 01</span>
                        <h2 className="Sbc-h2">Seabourn Dining Is Included</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-dining-split">
                        {/* Left: image + venue chips */}
                        <div className="Wic-dining-visual">
                            <div className="Wic-dining-placeholder">
                                <div className="Wic-dining-placeholder-icon">
                                    <Utensils size={40} strokeWidth={1.5} />
                                </div>
                                <span className="Wic-dining-placeholder-text">Seabourn Dining Image Placeholder</span>
                            </div>
                            <div className="Wic-dining-venues">
                                {["The Restaurant","The Colonnade","The Patio","Sushi","Specialty dining venues","In-suite dining"].map((v, i) => (
                                    <span key={i} className="Wic-dining-venue-chip">{v}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right: content */}
                        <div className="Wic-dining-content">
                            <p className="Wic-dining-lead">
                                One of the strongest inclusions is dining.
                            </p>
                            <p className="Wic-dining-body">
                                Seabourn includes dining across its primary onboard restaurants, allowing guests to enjoy multiple meals without paying restaurant-by-restaurant charges.
                            </p>

                            <p className="Wic-dining-venues-label">Depending on the ship, dining options can include:</p>

                            <div className="Wic-dining-sub-cards">
                                <div className="Wic-dining-sub-card">
                                    <h3 className="Wic-dining-sub-title">The Restaurant</h3>
                                    <p className="Wic-dining-sub-text">The Restaurant is Seabourn's primary fine-dining venue. Guests can enjoy multi-course meals in an elegant setting without a separate restaurant charge.</p>
                                </div>
                                <div className="Wic-dining-sub-card">
                                    <h3 className="Wic-dining-sub-title">The Colonnade</h3>
                                    <p className="Wic-dining-sub-text">The Colonnade offers a more relaxed dining environment, with options for breakfast, lunch and dinner depending on the sailing.</p>
                                </div>
                                <div className="Wic-dining-sub-card">
                                    <h3 className="Wic-dining-sub-title">In-Suite Dining</h3>
                                    <p className="Wic-dining-sub-text">Guests can also enjoy meals privately in their suite. For travelers celebrating a honeymoon, anniversary or other milestone, having dinner delivered to the suite or veranda can be one of the most enjoyable ways to experience Seabourn.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── SEABOURN PREMIUM SPIRITS & FINE WINES ───────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wic-beverage-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Category 02</span>
                        <h2 className="Sbc-h2">Premium Spirits and Fine Wines Are Included</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Wine size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Premium Beverages Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <p className="Sbc-p" style={{ fontWeight: "600", color: "var(--navy)", marginBottom: "14px" }}>
                                Seabourn includes premium spirits and fine wines as part of its onboard experience.
                            </p>
                            <p className="Sbc-p">
                                This is an important distinction for travelers comparing cruise fares. On some cruise lines, beverages beyond basic options require a separate beverage package. With Seabourn, many premium alcoholic beverages are already included.
                            </p>

                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px", marginBottom: "24px", backgroundColor: 'var(--bg-white)' }}>
                                <h4 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", fontSize: "18px", marginBottom: "16px" }}>
                                    Included beverage options can include:
                                </h4>
                                <ul className="Sbc-highlights-list" style={{ listStyle: "none", padding: 0 }}>
                                    {[
                                        "Fine wines",
                                        "Champagne",
                                        "Premium spirits",
                                        "Cocktails",
                                        "Beer",
                                        "Soft drinks",
                                        "Bottled water",
                                        "Coffee and tea",
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", fontSize: "16px", color: "#4a5568" }}>
                                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", background: "var(--bg-soft)", color: "var(--navy)" }}>
                                                <Check size={20} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ fontStyle: "italic", color: "#718096", marginTop: "20px" }}>
                                Note: Availability can vary by venue and specific product.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Related Reading</span>
                    <h3 className="Sbc-cta-title">Explore the Full Seabourn Experience</h3>
                    <p className="Sbc-cta-text">
                        Inclusions are just one part of the story. See the complete
                        guide to Seabourn's ships, suites and destinations to plan
                        your voyage from start to finish.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                    <div className="Wic-cta-links">
                        <Link to="/seabourn-cruises/">Seabourn Cruises Guide</Link>
                        <Link to="/seabourn-cruises/#Sbc-ships">Seabourn Ships</Link>
                        <Link to="/seabourn-cruises/#Sbc-suites">Seabourn Suites</Link>
                    </div>
                </div>
            </section>

            {/* ── GROUPED AMENITIES (Categories 03-06) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wic-grouped-amenities">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Categories 03 - 06</span>
                        <h2 className="Sbc-h2">Welcome Champagne, In-Suite Bar, Caviar & Wi-Fi</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-four-grid">
                        {/* Card 1: Champagne */}
                        <div className="Wic-four-card">
                            <div className="Wic-four-card-header">
                                <div className="Wic-four-card-icon-wrapper">
                                    <Sparkles size={20} />
                                </div>
                                <h3 className="Wic-four-card-title">Welcome Champagne Is Included</h3>
                            </div>
                            <p className="Wic-four-card-text">
                                Guests are welcomed with Champagne as part of the Seabourn experience. It is a small detail, but it reflects the line's emphasis on luxury from the moment you step onboard.
                            </p>
                            <p className="Wic-four-card-text">
                                For travelers booking a special celebration, this contributes to the overall sense that the cruise is designed as a premium hospitality experience rather than simply transportation between ports.
                            </p>
                        </div>

                        {/* Card 2: In-Suite Bar */}
                        <div className="Wic-four-card">
                            <div className="Wic-four-card-header">
                                <div className="Wic-four-card-icon-wrapper">
                                    <Coffee size={20} />
                                </div>
                                <h3 className="Wic-four-card-title">An In-Suite Bar Is Included</h3>
                            </div>
                            <p className="Wic-four-card-text">
                                Seabourn suites feature an in-suite bar stocked according to guest preferences. Depending on the ship and suite, travelers can request preferred beverages.
                            </p>
                            <p className="Wic-four-card-text">
                                This means guests can enjoy a drink privately in their suite or on their veranda without needing to visit a bar.
                            </p>
                            <span className="Wic-four-card-list-title">This can be particularly useful for:</span>
                            <ul className="Wic-four-card-list">
                                {[
                                    "Couples",
                                    "Honeymooners",
                                    "Travelers who prefer privacy",
                                    "Guests enjoying a balcony breakfast",
                                    "Pre-dinner drinks in the suite",
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Wic-four-card-list-dot"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 3: Caviar */}
                        <div className="Wic-four-card">
                            <div className="Wic-four-card-header">
                                <div className="Wic-four-card-icon-wrapper">
                                    <Gem size={20} />
                                </div>
                                <h3 className="Wic-four-card-title">Caviar Is Included</h3>
                            </div>
                            <p className="Wic-four-card-text">
                                Caviar is one of Seabourn's signature luxury touches. Complimentary caviar is available onboard, reinforcing the brand's emphasis on elevated dining.
                            </p>
                            <p className="Wic-four-card-text">
                                For luxury travelers, this is an important distinction because caviar is frequently treated as a premium add-on elsewhere.
                            </p>
                            <span className="Wic-four-card-list-title">Caviar can be enjoyed:</span>
                            <ul className="Wic-four-card-list">
                                {[
                                    "During special onboard occasions",
                                    "With appropriate meals",
                                    "Through selected Seabourn experiences",
                                    "As part of the line's signature culinary offering",
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Wic-four-card-list-dot"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Wic-four-card-footnote">
                                Note: Availability and presentation can vary by ship and itinerary.
                            </p>
                        </div>

                        {/* Card 4: Wi-Fi */}
                        <div className="Wic-four-card">
                            <div className="Wic-four-card-header">
                                <div className="Wic-four-card-icon-wrapper">
                                    <Wifi size={20} />
                                </div>
                                <h3 className="Wic-four-card-title">Wi-Fi Is Included</h3>
                            </div>
                            <p className="Wic-four-card-text">
                                Seabourn includes Wi-Fi as part of its onboard experience. The line has also expanded connectivity through Starlink-powered Wi-Fi on its ships.
                            </p>
                            <p className="Wic-four-card-text">
                                This means guests can stay connected without necessarily purchasing the traditional internet package found on many cruise lines.
                            </p>
                            <span className="Wic-four-card-list-title">Useful for:</span>
                            <ul className="Wic-four-card-list">
                                {[
                                    "Email",
                                    "Messaging",
                                    "Social media",
                                    "Staying connected with family",
                                    "Remote work",
                                    "Travel planning",
                                    "Sharing photos",
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Wic-four-card-list-dot"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="Wic-four-card-footnote">
                                Note: Connection speeds and availability can vary depending on location and satellite coverage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN GRATUITIES ARE INCLUDED ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wic-gratuities-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Category 07</span>
                        <h2 className="Sbc-h2">Gratuities Are Included</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p" style={{ fontWeight: "600", color: "var(--navy)", marginBottom: "14px" }}>
                                One of the most useful Seabourn inclusions is gratuities.
                            </p>
                            <p className="Sbc-p">
                                Seabourn states that tipping is neither required nor expected. That means travelers generally do not need to budget for the daily automatic gratuities that are common on many mainstream cruise lines.
                            </p>

                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px", marginBottom: "24px", backgroundColor: 'var(--bg-white)' }}>
                                <h4 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", fontSize: "18px", marginBottom: "16px" }}>
                                    Why this matters (gratuities compare):
                                </h4>
                                <p className="Sbc-p" style={{ fontSize: "16px", marginBottom: "14px" }}>
                                    When comparing cruise fares, gratuities can make a meaningful difference to the final cost of a trip. A cruise advertised at a lower base fare can become significantly more expensive after adding:
                                </p>
                                <ul className="Sbc-highlights-list" style={{ listStyle: "none", padding: 0 }}>
                                    {[
                                        "Daily gratuities",
                                        "Beverage packages",
                                        "Wi-Fi",
                                        "Specialty dining",
                                        "Other onboard charges",
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", fontSize: "16px", color: "#4a5568" }}>
                                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", background: "var(--bg-soft)", color: "var(--navy)" }}>
                                                <Check size={20} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p">
                                Seabourn's more inclusive approach makes the initial cruise fare easier to evaluate.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <DollarSign size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Gratuities Included Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN ENTERTAINMENT IS INCLUDED ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wic-entertainment-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Category 08</span>
                        <h2 className="Sbc-h2">Entertainment Is Included</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Music size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Entertainment Included Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <p className="Sbc-p" style={{ fontWeight: "600", color: "var(--navy)", marginBottom: "14px" }}>
                                Seabourn includes onboard entertainment as part of the cruise experience.
                            </p>
                            <p className="Sbc-p">
                                The emphasis is generally on intimate and sophisticated entertainment rather than the large-scale productions found on mega-ships.
                            </p>

                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px", marginBottom: "24px" }}>
                                <h4 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", fontSize: "18px", marginBottom: "16px" }}>
                                    Depending on the ship and itinerary, entertainment can include:
                                </h4>
                                <ul className="Sbc-highlights-list" style={{ listStyle: "none", padding: 0 }}>
                                    {[
                                        "Live music",
                                        "Performances",
                                        "Cultural programming",
                                        "Destination presentations",
                                        "Social events",
                                        "Evening entertainment",
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", fontSize: "16px", color: "#4a5568" }}>
                                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", background: "var(--bg-soft)", color: "var(--navy)" }}>
                                                <Check size={20} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN CONVERSATIONS IS INCLUDED ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wic-conversations-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Category 09</span>
                        <h2 className="Sbc-h2">Seabourn Conversations Is Included</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-conv-split">
                        {/* Content */}
                        <div className="Wic-conv-content">
                            <p className="Wic-conv-lead">
                                Seabourn's enrichment program, Seabourn Conversations, is included.
                            </p>
                            <p className="Wic-conv-body">
                                For travelers who prefer intellectual enrichment over large-scale entertainment, this can be a significant part of the onboard experience.
                            </p>

                            <div className="Wic-conv-topics">
                                <h4 className="Wic-conv-topics-label">
                                    These programs can feature experts and speakers discussing topics such as:
                                </h4>
                                <ul className="Wic-conv-list">
                                    {[
                                        "History",
                                        "Culture",
                                        "Science",
                                        "Exploration",
                                        "Art",
                                        "Literature",
                                        "Destinations",
                                        "Current affairs",
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <span className="Wic-conv-dot"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Image placeholder */}
                        <div className="Wic-conv-image">
                            <div className="Wic-conv-placeholder">
                                <div className="Wic-conv-placeholder-icon">
                                    <MessageCircle size={40} strokeWidth={1.5} />
                                </div>
                                <span className="Wic-conv-placeholder-text">Enrichment Included Image Placeholder</span>
                            </div>
                            <div className="Wic-conv-badge">
                                <span>Seabourn Conversations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Curate Your Next Shore Experience</h3>
                    <p className="Sbc-cta-text">
                        From cultural immersion to Zodiac expeditions, Seabourn offers
                        meaningful shore collections. Let's design your dream
                        adventures in over 400 ports worldwide.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                    <div className="Wic-cta-links">
                        <Link to="/seabourn-cruises/#Sbc-destinations">Seabourn Destinations</Link>
                        <Link to="/seabourn-cruises/#Sbc-experiences">Shore Excursions & Conversations</Link>
                    </div>
                </div>
            </section>

            {/* ── DETAILED INCLUSIONS (remaining categories) ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-inclusions-detail">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Category by Category</span>
                        <h2 className="Sbc-h2">What's Included, In Detail</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This guide breaks down Seabourn cruise inclusions by
                            category so you can understand exactly what you are paying
                            for before you book.
                        </p>
                    </div>

                    <div className="Wic-detail-grid">
                        {inclusionDetails.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div className="Wic-detail-card" key={i}>
                                    <div className="Wic-detail-head">
                                        <div className="Wic-detail-icon-wrapper">
                                            <Icon size={24} strokeWidth={1.5} className="Wic-detail-icon" />
                                        </div>
                                        <div>
                                         
                                            <h3 className="Wic-detail-title">{item.title}</h3>
                                        </div>
                                    </div>
                                    <p className="Wic-detail-text">{item.text}</p>
                                    {item.features && (
                                        <div className="Wic-detail-features">
                                            <span className="Wic-detail-features-title">{item.featuresTitle}</span>
                                            <ul className="Wic-detail-list">
                                                {item.features.map((f, j) => (
                                                    <li key={j}>
                                                        <span className="Wic-detail-dot"></span>
                                                        <span>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS & VENTURES ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-shore-ventures">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard & Ashore</span>
                        <h2 className="Sbc-h2">Shore Excursions & Ventures: Are They Included?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is where travelers need to pay close attention — not
                            every shore experience is automatically part of the fare.
                        </p>
                    </div>

                    <div className="Wic-detail-grid Wic-cols-2">
                        {shoreVentureCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Wic-detail-card" key={i}>
                                    <div className="Wic-detail-head">
                                        <div className="Wic-detail-icon-wrapper">
                                            <Icon size={24} strokeWidth={1.5} className="Wic-detail-icon" />
                                        </div>
                                        <h3 className="Wic-detail-title">{card.title}</h3>
                                    </div>
                                    <p className="Wic-detail-text">{card.text}</p>
                                    <div className="Wic-detail-features">
                                        <span className="Wic-detail-features-title">{card.featuresTitle}</span>
                                        <ul className="Wic-detail-list">
                                            {card.features.map((f, j) => (
                                                <li key={j}>
                                                    <span className="Wic-detail-dot"></span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── MORE INCLUSIONS: PART 1 (Categories 01-04) ──────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wic-more-inclusions-part1">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Common Questions - Part 1</span>
                        <h2 className="Sbc-h2">More Inclusions, Answered</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-qa-card-grid">
                        {extraQaCards.slice(0, 4).map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Wic-qa-card" key={i}>
                                    <div className="Wic-qa-card-image-placeholder">
                                        <div className="Wic-qa-card-placeholder-icon-wrapper">
                                            <Icon size={24} className="Wic-qa-card-placeholder-icon" />
                                        </div>
                                        <span className="Wic-qa-card-placeholder-text">
                                            {card.title.replace("?", "")} Visual
                                        </span>
                                    </div>
                                    <h3 className="Wic-qa-card-title">{card.title}</h3>
                                    <p className="Wic-qa-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── MORE INCLUSIONS: PART 2 (Categories 05-08) ──────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wic-more-inclusions-part2">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Common Questions - Part 2</span>
                        <h2 className="Sbc-h2">Additional Amenities & Exclusions</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-qa-card-grid">
                        {extraQaCards.slice(4, 8).map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Wic-qa-card Wic-qa-card-alt" key={i}>
                                    <div className="Wic-qa-card-image-placeholder">
                                        <div className="Wic-qa-card-placeholder-icon-wrapper">
                                            <Icon size={24} className="Wic-qa-card-placeholder-icon" />
                                        </div>
                                        <span className="Wic-qa-card-placeholder-text">
                                            {card.title.replace("?", "")} Visual
                                        </span>
                                    </div>
                                    <h3 className="Wic-qa-card-title">{card.title}</h3>
                                    <p className="Wic-qa-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Compare the Total Value of Your Cruise</h3>
                    <p className="Sbc-cta-text">
                        Let's compare itinerary routes, suite rates, and exclusive
                        promotions to find the best value for your ultra-luxury
                        cruise vacation.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get a Personalized Quote
                        <ArrowRight size={16} />
                    </Link>
                    <div className="Wic-cta-links">
                        <Link to="/seabourn-cruises/#Sbc-worth-it">Is Seabourn Worth It?</Link>
                        <Link to="/seabourn-cruises/#Sbc-vs-others">Seabourn vs Other Luxury Lines</Link>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS NOT INCLUDED ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-not-included">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Budget For These</span>
                        <h2 className="Sbc-h2">What Is NOT Included on a Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            While Seabourn includes more than many cruise lines,
                            travelers should still budget for certain expenses.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {notIncludedCards.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <X size={20} strokeWidth={2} />
                                </div>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INCLUSIONS VS ADDITIONAL COSTS TABLE ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-compare-table">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Side by Side</span>
                        <h2 className="Sbc-h2">Seabourn Inclusions vs <br /> Additional Costs</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-compare-table">
                        <div className="Wic-compare-table-head">
                            <span>Included on Seabourn</span>
                            <span>Usually Additional</span>
                        </div>
                        {compareTable.map((row, i) => (
                            <div className="Wic-compare-table-row" key={i}>
                                <div className="Wic-compare-table-col Wic-compare-col-yes">

                                    <span>{row[0]}</span>
                                </div>
                                <div className="Wic-compare-table-col Wic-compare-col-no">

                                    <span>{row[1]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="Wic-compare-note">
                        Always confirm the exact inclusions for your specific sailing
                        before booking, because offerings can vary by ship, itinerary
                        and promotion.
                    </p>
                </div>
            </section>

            {/* ── TRUE CRUISE COST ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-true-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Real Comparison</span>
                        <h2 className="Sbc-h2">How Seabourn's Inclusions Affect the True Cruise Cost</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            A useful way to compare luxury cruises is to look beyond
                            the advertised fare. A lower cruise fare may initially
                            appear attractive, but travelers may then add a beverage
                            package, a Wi-Fi package, daily gratuities, specialty
                            dining and premium activities — and the final price can
                            become considerably higher. Seabourn's inclusive model
                            means many of these costs are already incorporated.
                        </p>
                    </div>

                    <div className="Sbc-includes-note">
                        <p>
                            <strong>The better question:</strong> "What will my total
                            trip cost be after adding the experiences I actually
                            want?"
                        </p>
                        <p>
                            That is a much better way to compare Seabourn with
                            competing luxury cruise lines.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── MORE INCLUSIVE THAN MAINSTREAM ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-mainstream">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Is Seabourn More Inclusive Than Mainstream Cruise Lines?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Generally, yes. Seabourn's ultra-luxury positioning means
                            many amenities that are optional on mainstream cruise
                            lines are included in the cruise experience.
                        </p>
                    </div>

                    <div className="Wic-diff-grid">
                        {mainstreamDiff.map((item, i) => (
                            <div className="Wic-diff-item" key={i}>
                                <h3 className="Wic-diff-term">{item.term}</h3>
                                <p className="Wic-diff-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 4 ─────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Bring It All Together</span>
                    <h3 className="Sbc-cta-title">See What Your Seabourn Voyage Really Costs</h3>
                    <p className="Sbc-cta-text">
                        We'll walk through your ideal sailing, suite category and
                        excursions so you know exactly what's included — and what
                        isn't — before you book.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start My Trip Estimate
                        <ArrowRight size={16} />
                    </Link>
                    <div className="Wic-cta-links">
                        <Link to="/seabourn-cruises/#Sbc-dining">Seabourn Dining</Link>
                        <Link to="/seabourn-cruises/#Sbc-includes">Seabourn Inclusions Overview</Link>
                    </div>
                </div>
            </section>

            {/* ── MORE INCLUSIVE THAN OTHER LUXURY LINES ───────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-vs-luxury">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Closer Comparison</span>
                        <h2 className="Sbc-h2">Is Seabourn More Inclusive Than Other Luxury Cruise Lines?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wic-vs-luxury-split">
                        {/* Image Placeholder */}
                        <div className="Wic-vs-luxury-image">
                            <div className="Wic-vs-luxury-placeholder">
                                <div className="Wic-vs-luxury-placeholder-icon">
                                    <Gem size={40} strokeWidth={1.5} />
                                </div>
                                <span className="Wic-vs-luxury-placeholder-text">Luxury Cruise Comparison Visual</span>
                            </div>
                            <div className="Wic-vs-luxury-badge">
                                <span>Ultra-Luxury</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="Wic-vs-luxury-content">
                            <p className="Wic-vs-luxury-lead">
                                This is a more complicated question. Many ultra-luxury
                                cruise lines have similarly broad inclusion models. When
                                comparing Seabourn with brands such as Silversea, Regent
                                Seven Seas, Scenic, Crystal or Explora Journeys, you
                                should compare the specific:
                            </p>

                            <ul className="Wic-vs-luxury-list">
                                {otherLuxuryCompareList.map((item, i) => (
                                    <li key={i}>
                                        <span className="Wic-vs-luxury-dot"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="Wic-vs-luxury-note">
                                <p>
                                    The most inclusive cruise is not necessarily the one with the
                                    longest list of inclusions. The better choice is the one
                                    whose inclusions match how you actually travel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES THE MODEL DIFFERENT ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-model-different">
                <div className="Sbc-container">
                    <div className="Wic-model-diff-layout">
                        {/* Left: text block */}
                        <div className="Wic-model-diff-left">
                            <span className="Sbc-eyebrow">The Philosophy</span>
                            <h2 className="Wic-model-diff-heading">What Makes Seabourn's Inclusion Model Different?</h2>
                            <div className="Sbc-accent-line" style={{ marginBottom: "28px" }}></div>
                            <p className="Wic-model-diff-body">
                                Seabourn's philosophy is centered on making the ship itself feel like a luxury hospitality experience.
                            </p>
                            <p className="Wic-model-diff-body">
                                Instead of charging guests repeatedly throughout the voyage, the line incorporates many premium elements into the cruise fare.
                            </p>

                            <div className="Wic-model-diff-closing">
                                <p className="Wic-model-diff-without">
                                    — without constantly thinking about whether each activity will generate another charge.
                                </p>
                                <p className="Wic-model-diff-value">
                                    For luxury travelers, that simplicity has real value.
                                </p>
                            </div>
                        </div>

                        {/* Right: "That means you can" list */}
                        <div className="Wic-model-diff-right">
                            <div className="Wic-model-diff-card">
                                <h4 className="Wic-model-diff-card-label">That means you can:</h4>
                                <ul className="Wic-model-diff-list">
                                    {differentModelFormula.map((part, i) => (
                                        <li key={i}>
                                            <span className="Wic-model-diff-check">
                                                <Check size={13} strokeWidth={3} />
                                            </span>
                                            <span>{part}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUDGET TIERS ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-budget-tiers">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Plan Ahead</span>
                        <h2 className="Sbc-h2">How Much Should You Budget Beyond the Cruise Fare?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Your additional spending depends heavily on your travel
                            style.
                        </p>
                    </div>

                    <div className="Sbc-fit-grid">
                        {budgetTiers.map((tier, i) => {
                            const Icon = tier.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{tier.title}</h3>
                                    <ul>
                                        {tier.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── MAXIMIZE VALUE ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-maximize-value">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Get the Most From Your Fare</span>
                        <h2 className="Sbc-h2">How to Maximize the Value of a Seabourn Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid">
                        {maximizeValueTips.map((tip, i) => {
                            const Icon = tip.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{tip.title}</h3>
                                    <p className="Sbc-card-text">{tip.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

           

            {/* ── IS SEABOURN WORTH IT BECAUSE OF ITS INCLUSIONS ───────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-worth-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Value Proposition</span>
                                <h2 className="Sbc-h2">Is Seabourn Worth the Money Because of Its Inclusions?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-worth-intro">For the right traveler, yes.</p>
                            <p className="Sbc-worth-text">
                                If you would otherwise purchase many of those items
                                separately, Seabourn's inclusive structure can make
                                the cruise particularly attractive.
                            </p>

                            <div className="Sbc-worth-card" style={{backgroundColor: 'var(--bg-white)'}}>
                                <h4 className="Sbc-worth-card-title">Seabourn's value comes from combining:</h4>
                                <div className="Sbc-worth-formula-row">
                                    {worthItFormula.map((part, i) => (
                                        <Fragment key={i}>
                                            <span>{part}</span>
                                            {i < worthItFormula.length - 1 && <span className="Sbc-worth-plus">+</span>}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-worth-value-desc">
                                If you rarely drink, do not use Wi-Fi and prefer
                                independent shore exploration, you may place less
                                value on some of those inclusions.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Gem size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Value & Inclusions Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
            <section className="Sbc-expert-section" id="Asc-expert-insight">
                <div className="Sbc-container">
                    <div className="Sbc-expert-heading">
                        <span className="Sbc-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Sbc-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Sbc-expert-divider"></div>
                    </div>

                    <div className="Sbc-expert-grid">
                        <div className="Sbc-expert-image-col">
                            <div className="Sbc-expert-portrait-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Expert"
                                    className="Sbc-expert-portrait"
                                />
                                <div className="Sbc-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>
                            </div>

                            <div className="Sbc-expert-name-card">
                                <h3 className="Sbc-expert-name">Angela Hughes</h3>
                                <p className="Sbc-expert-role">CEO of Trips &amp; Ships Luxury Travel</p>
                                <div className="Sbc-expert-name-divider"></div>
                                <p className="Sbc-expert-countries">
                                    <MapPin size={14} />
                                    Traveled to more than 121 countries
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-expert-content-col">
                            <div className="Sbc-expert-credentials-box">
                                <h4 className="Sbc-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes Authority Box
                                </h4>

                                <div className="Sbc-expert-credentials-grid">
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
                                        <div className="Sbc-expert-list-item" key={i}>
                                            <span className="Sbc-expert-list-icon">{item.icon}</span>
                                            <span className="Sbc-expert-list-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know about what is included
                            on a Seabourn cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-final-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict: What Is Included on Seabourn?</span>
                        <h2 className="Sbc-h2">Compare the Value, Not Just the Fare</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn provides one of the more comprehensive luxury
                            cruise experiences, with dining, premium beverages,
                            Champagne, caviar, Wi-Fi, gratuities, entertainment and
                            enrichment forming the foundation of the onboard
                            experience. The biggest expenses to watch are generally
                            optional shore excursions, spa treatments, private
                            experiences, travel arrangements and personal purchases.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Don't compare
                                Seabourn based solely on the advertised cruise fare.
                                Compare the total value of what is already included.
                                For travelers who appreciate premium dining, drinks,
                                personalized service, suite accommodation and a
                                largely cash-free onboard experience, those inclusions
                                can make Seabourn a compelling luxury cruise choice.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournWhatsIncluded;