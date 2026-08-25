import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    Plus,
    Minus,
    ArrowRight,
    Ship,
    Home,
    Compass,
    Gem,
    Award,
    Users,
    Anchor,
    Snowflake,
    Globe,
    Calendar,
    Phone,
    Mail,
    User,
    MessageCircle,
    Heart,
    MapPin,
    Quote,
    Tag,
    Briefcase,
    Landmark,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";

import { Helmet } from "react-helmet-async";
import "./SeabournCruiseQuote.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournCruiseQuoteSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/request-a-quote/",
            name: "Request a Seabourn Cruise Quote | Luxury Cruise Planning",
            headline: "Request a Seabourn Cruise Quote",
            description:
                "Request a personalized Seabourn cruise quote from Trips & Ships Luxury Travel. Get expert help choosing your Seabourn ship, suite, itinerary, dates and available offers.",
            keywords: [
                "Seabourn cruise quote",
                "Seabourn cruise pricing",
                "Seabourn cruise travel advisor",
                "Seabourn luxury cruise planning",
                "Seabourn cruise booking",
                "Seabourn cruise specialist",
                "Seabourn cruise vacation",
                "Seabourn suite quote",
                "Seabourn cruise deals",
                "Seabourn cruise offers",
                "Seabourn itinerary planning",
                "luxury cruise quote",
                "Seabourn travel advisor",
                "book a Seabourn cruise",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#quote-service",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Request a Seabourn Cruise Quote", item: "https://www.tripsandships.com/seabourn-cruises/request-a-quote/" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#quote-service",
            name: "Seabourn Cruise Quote",
            serviceType: "Luxury Seabourn Cruise Planning and Quote Service",
            description:
                "Personalized Seabourn cruise planning and quote assistance covering ships, suites, itineraries, travel dates, pricing, promotions, loyalty benefits and related travel arrangements.",
            url: "https://www.tripsandships.com/seabourn-cruises/request-a-quote/",
            provider: {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                name: "Trips & Ships Luxury Travel",
                url: "https://www.tripsandships.com/",
            },
            brand: { "@type": "Brand", name: "Seabourn" },
            areaServed: { "@type": "Place", name: "Worldwide" },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Seabourn Cruise Planning Options",
                itemListElement: [
                    { "@type": "Offer", name: "Seabourn Ocean Cruise Planning", description: "Planning assistance for Seabourn ocean-going luxury cruises." },
                    { "@type": "Offer", name: "Seabourn Expedition Cruise Planning", description: "Planning assistance for Seabourn expedition voyages including Antarctica, the Arctic, Greenland and the Kimberley." },
                    { "@type": "Offer", name: "Seabourn World Cruise Planning", description: "Planning assistance for Seabourn World Cruises and Grand Voyages." },
                    { "@type": "Offer", name: "Seabourn Suite Planning", description: "Assistance comparing suite categories, locations, verandas, amenities and overall value." },
                    { "@type": "Offer", name: "Seabourn Itinerary Planning", description: "Assistance comparing destinations, ports, sailing dates and cruise lengths." },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#quote-details",
            name: "Seabourn Quote Request Details",
            description: "Information travelers can provide when requesting a personalized Seabourn cruise quote.",
            numberOfItems: 9,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Preferred Destination", description: "The destination or region the traveler would like to visit." },
                { "@type": "ListItem", position: 2, name: "Travel Dates", description: "Preferred travel dates and whether those dates are flexible." },
                { "@type": "ListItem", position: 3, name: "Number of Travelers", description: "The number of travelers included in the cruise request." },
                { "@type": "ListItem", position: 4, name: "Preferred Suite Category", description: "Preferred suite category or accommodation level." },
                { "@type": "ListItem", position: 5, name: "Approximate Budget", description: "A budget range that helps narrow down realistic Seabourn options." },
                { "@type": "ListItem", position: 6, name: "Special Occasions", description: "Special occasions such as anniversaries, honeymoons, birthdays, retirements or family celebrations." },
                { "@type": "ListItem", position: 7, name: "Cruise Length", description: "Preferred voyage length, including shorter cruises, extended voyages or World Cruises." },
                { "@type": "ListItem", position: 8, name: "Previous Seabourn Experience", description: "Information about previous Seabourn cruises and past-guest experience." },
                { "@type": "ListItem", position: 9, name: "Loyalty Status and Travel Preferences", description: "Seabourn Club status and other preferences that may affect cruise recommendations." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#ships",
            name: "Seabourn Ships Available for Quote Requests",
            description: "Seabourn ships listed on the quote request page.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Seabourn Quest" },
                { "@type": "ListItem", position: 2, name: "Seabourn Encore" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ovation" },
                { "@type": "ListItem", position: 4, name: "Seabourn Venture" },
                { "@type": "ListItem", position: 5, name: "Seabourn Pursuit" },
                { "@type": "ListItem", position: 6, name: "Not Sure" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#suite-categories",
            name: "Seabourn Suite Categories for Quote Requests",
            description: "Suite categories travelers can select or discuss when requesting a Seabourn cruise quote.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Veranda Suite" },
                { "@type": "ListItem", position: 2, name: "Penthouse Suite" },
                { "@type": "ListItem", position: 3, name: "Premium Suite" },
                { "@type": "ListItem", position: 4, name: "Signature Suite" },
                { "@type": "ListItem", position: 5, name: "Expedition Suite" },
                { "@type": "ListItem", position: 6, name: "Not Sure" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#destinations",
            name: "Seabourn Cruise Quote Destinations",
            description: "Destination examples available for Seabourn quote requests.",
            numberOfItems: 9,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Mediterranean" },
                { "@type": "ListItem", position: 2, name: "Alaska" },
                { "@type": "ListItem", position: 3, name: "Antarctica" },
                { "@type": "ListItem", position: 4, name: "Arctic & Greenland" },
                { "@type": "ListItem", position: 5, name: "Kimberley" },
                { "@type": "ListItem", position: 6, name: "South America" },
                { "@type": "ListItem", position: 7, name: "Northern Europe" },
                { "@type": "ListItem", position: 8, name: "Asia" },
                { "@type": "ListItem", position: 9, name: "World Cruise" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#planning-services",
            name: "Seabourn Cruise Planning Services",
            description: "Areas of cruise and luxury travel planning assistance offered by Trips & Ships Luxury Travel.",
            numberOfItems: 10,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Seabourn Ship Selection", description: "Help choosing between Seabourn ocean ships and expedition vessels." },
                { "@type": "ListItem", position: 2, name: "Suite Recommendations", description: "Help comparing suite size, location, veranda configuration, views, accessibility and amenities." },
                { "@type": "ListItem", position: 3, name: "Itinerary Comparisons", description: "Help comparing destinations, ports and sailing dates." },
                { "@type": "ListItem", position: 4, name: "Cruise Pricing", description: "Help evaluating Seabourn cruise pricing and available options." },
                { "@type": "ListItem", position: 5, name: "Promotion Monitoring", description: "Help reviewing applicable Seabourn promotions and special offers." },
                { "@type": "ListItem", position: 6, name: "Seabourn Club Considerations", description: "Help taking applicable Seabourn Club status and benefits into consideration." },
                { "@type": "ListItem", position: 7, name: "Pre- and Post-Cruise Arrangements", description: "Help coordinating hotels, transfers and other travel before or after the cruise." },
                { "@type": "ListItem", position: 8, name: "Special Occasions", description: "Planning considerations for anniversaries, honeymoons, birthdays, retirements and other milestones." },
                { "@type": "ListItem", position: 9, name: "Private Travel Arrangements", description: "Assistance with private travel arrangements connected to the Seabourn vacation." },
                { "@type": "ListItem", position: 10, name: "Destination Planning", description: "Help coordinating the broader destination experience around the cruise." },
            ],
        },
        {
            "@type": "HowTo",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#how-it-works",
            name: "How the Seabourn Cruise Quote Process Works",
            description: "Five steps for requesting and refining a personalized Seabourn cruise quote.",
            step: [
                { "@type": "HowToStep", position: 1, name: "Tell Us What You Want", text: "Submit your preferred destination, dates, travelers and other relevant details." },
                { "@type": "HowToStep", position: 2, name: "We Review Your Preferences", text: "Your travel priorities, desired experience, suite and itinerary are reviewed." },
                { "@type": "HowToStep", position: 3, name: "We Identify Options", text: "Potential Seabourn sailings are evaluated based on availability, itinerary, suite category and applicable offers." },
                { "@type": "HowToStep", position: 4, name: "We Discuss the Choices", text: "Review the potential options and ask questions before deciding." },
                { "@type": "HowToStep", position: 5, name: "We Refine the Trip", text: "Once the right cruise is identified, the details of the broader luxury vacation can be refined." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#faq",
            mainEntity: [
                { "@type": "Question", name: "How do I request a Seabourn cruise quote?", acceptedAnswer: { "@type": "Answer", text: "Complete the quote request form with your preferred dates, destination, number of travelers, suite preferences and budget. You can also indicate if you are unsure which Seabourn itinerary is right for you." } },
                { "@type": "Question", name: "Do I need to know which Seabourn ship I want?", acceptedAnswer: { "@type": "Answer", text: "No. You can request a quote even if you are still deciding between Seabourn's ships." } },
                { "@type": "Question", name: "Can I request a quote for a specific Seabourn suite?", acceptedAnswer: { "@type": "Answer", text: "Yes. Include your preferred suite category or specific suite preference in the request." } },
                { "@type": "Question", name: "Can you help me compare Seabourn itineraries?", acceptedAnswer: { "@type": "Answer", text: "Yes. If your dates or destinations are flexible, provide the type of experience you are looking for and suitable options can be narrowed down." } },
                { "@type": "Question", name: "Can I request a Seabourn quote for Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Include Antarctica as your preferred destination and mention any expedition preferences in your request." } },
                { "@type": "Question", name: "Can I request a Seabourn World Cruise quote?", acceptedAnswer: { "@type": "Answer", text: "Yes. Include your preferred travel dates, approximate voyage length and whether you are interested in the full World Cruise or selected segments." } },
                { "@type": "Question", name: "Can you check Seabourn promotions?", acceptedAnswer: { "@type": "Answer", text: "Your advisor can review applicable promotions and help compare them with the fare and suite options for your preferred sailing." } },
                { "@type": "Question", name: "Can I request a Seabourn quote as a solo traveler?", acceptedAnswer: { "@type": "Answer", text: "Yes. Indicate that you are traveling solo so the quote can account for applicable solo pricing and supplement." } },
                { "@type": "Question", name: "Can I request a quote for a family or multigenerational group?", acceptedAnswer: { "@type": "Answer", text: "Yes. Include the number of travelers, ages of children if applicable, number of suites and any connecting-suite requirements." } },
                { "@type": "Question", name: "Can you help with pre- and post-cruise travel?", acceptedAnswer: { "@type": "Answer", text: "Yes. If your cruise is part of a larger vacation, mention your pre- or post-cruise plans in the quote request." } },
                { "@type": "Question", name: "What information should I include in my quote request?", acceptedAnswer: { "@type": "Answer", text: "Provide your destination, dates, number of travelers, preferred suite, budget and any special requirements. If you are flexible, say so." } },
                { "@type": "Question", name: "Why should I use a luxury travel advisor for a Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "A luxury travel advisor can help compare ships, suites, itineraries, promotions and travel arrangements while helping build a more complete vacation around the cruise." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq classes) ───────────────────────── */
function QuoteFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "How do I request a Seabourn cruise quote?", a: "Complete the quote request form with your preferred dates, destination, number of travelers, suite preferences and budget. You can also tell us if you are unsure which Seabourn itinerary is right for you." },
        { q: "Do I need to know which Seabourn ship I want?", a: "No. You can request a quote even if you're still deciding between Seabourn's ships." },
        { q: "Can I request a quote for a specific Seabourn suite?", a: "Yes. Include your preferred suite category or specific suite preference in the request." },
        { q: "Can you help me compare Seabourn itineraries?", a: "Yes. If your dates or destinations are flexible, tell us what type of experience you're looking for and we can help narrow down suitable options." },
        { q: "Can I request a Seabourn quote for Antarctica?", a: "Yes. Include Antarctica as your preferred destination and mention any expedition preferences in your request." },
        { q: "Can I request a Seabourn World Cruise quote?", a: "Yes. Include your preferred travel dates, approximate voyage length and whether you are interested in the full World Cruise or selected segments." },
        { q: "Can you check Seabourn promotions?", a: "Your advisor can review applicable promotions and help compare them with the fare and suite options for your preferred sailing." },
        { q: "Can I request a Seabourn quote as a solo traveler?", a: "Yes. Indicate that you are traveling solo so the quote can account for the applicable solo pricing and supplement." },
        { q: "Can I request a quote for a family or multigenerational group?", a: "Yes. Include the number of travelers, ages of children if applicable, number of suites and any connecting-suite requirements." },
        { q: "Can you help with pre- and post-cruise travel?", a: "Yes. If your cruise is part of a larger vacation, mention your pre- or post-cruise plans in the quote request." },
        { q: "What information should I include in my quote request?", a: "Provide your destination, dates, number of travelers, preferred suite, budget and any special requirements. If you're flexible, say so." },
        { q: "Why should I use a luxury travel advisor for a Seabourn cruise?", a: "A luxury travel advisor can help compare ships, suites, itineraries, promotions and travel arrangements while helping you build a more complete vacation around your cruise." },
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
const tripDetailFields = [
    "Preferred destination", "Travel dates", "Number of travelers", "Preferred suite category",
    "Approximate budget", "Special occasions", "Cruise length", "Previous Seabourn experience",
    "Loyalty status, if applicable", "Other travel preferences",
];

const whyQuoteCards = [
    { icon: Ship, title: "Different Seabourn Ships", text: "Choose between Seabourn's classic ocean ships and expedition vessels based on your travel style." },
    { icon: Home, title: "Suite Categories", text: "Compare suite locations, space, verandas, amenities and overall value." },
    { icon: Compass, title: "Itineraries", text: "Consider different destinations, ports and sailing dates." },
    { icon: Tag, title: "Current Offers", text: "Review applicable Seabourn promotions and special offers." },
    { icon: Award, title: "Past-Guest Benefits", text: "If you have sailed with Seabourn before, we can take your Seabourn Club status and applicable benefits into consideration." },
    { icon: Briefcase, title: "Additional Travel", text: "If your cruise is part of a larger vacation, we can help coordinate the broader travel plan." },
];

const destinationOptions = ["Mediterranean", "Alaska", "Antarctica", "Arctic & Greenland", "Kimberley", "South America", "Northern Europe", "Asia", "World Cruise"];
const shipOptions = ["Seabourn Quest", "Seabourn Encore", "Seabourn Ovation", "Seabourn Venture", "Seabourn Pursuit", "Not Sure"];
const suiteOptions = ["Veranda Suite", "Penthouse Suite", "Premium Suite", "Signature Suite", "Expedition Suite", "Not Sure"];
const lengthOptions = ["Less than 7 days", "7\u201313 days", "14\u201320 days", "21+ days", "World Cruise / Grand Voyage", "Flexible"];

const specialRequestTags = [
    "Anniversary", "Birthday", "Honeymoon", "Family celebration", "Multigenerational travel",
    "Solo travel", "Accessibility requirements", "Connecting suites", "Preferred suite location",
    "Pre- or post-cruise travel", "Private excursions", "Extended land stay",
];

const notSureExamples = [
    "We want a two-week luxury cruise in Europe with excellent food, smaller ports and a quiet atmosphere.",
    "We're interested in Antarctica but don't know whether Seabourn Venture or Seabourn Pursuit is the better choice.",
    "We're planning a special anniversary and want the best suite we can find.",
];

const quoteShips = [
    { icon: Ship, title: "Seabourn Quest", text: "A smaller ocean-going luxury ship with an intimate atmosphere and classic Seabourn experience." },
    { icon: Ship, title: "Seabourn Encore", text: "A larger ocean ship offering spacious suites, dining and an extensive range of onboard amenities." },
    { icon: Ship, title: "Seabourn Ovation", text: "A sister ship to Encore with a similar luxury experience and access to a broad range of destinations." },
    { icon: Snowflake, title: "Seabourn Venture", text: "An expedition ship designed for destinations where exploration is the primary focus." },
    { icon: Snowflake, title: "Seabourn Pursuit", text: "A purpose-built expedition ship combining Seabourn's luxury service with expedition capabilities." },
];

const suiteConsiderations = ["Suite size", "Suite location", "Veranda configuration", "View", "Deck location", "Accessibility", "Connecting-suite options", "Higher-category upgrades", "Overall value"];

const expeditionConsiderations = ["Expedition activities", "Zodiac excursions", "Wildlife viewing", "Weather", "Specialized clothing", "Expedition equipment", "Physical activity levels", "Pre- and post-cruise arrangements"];

const worldCruiseConsiderations = ["Suite selection", "Departure dates", "Voyage segments", "Multiple climates", "Air arrangements", "Pre-cruise accommodations", "Post-cruise travel", "Laundry", "Travel insurance", "Special events", "Long-voyage packing"];

const offersConsiderations = ["Current Seabourn promotions", "Onboard credit", "Past-guest offers", "Seabourn Club benefits", "Suite promotions", "Group opportunities", "Special-occasion amenities"];

const processSteps = [
    { title: "Tell Us What You Want", text: "Submit your preferred destination, dates, travelers and any other relevant details." },
    { title: "We Review Your Preferences", text: "We look at your travel priorities, including your desired experience, suite and itinerary." },
    { title: "We Identify Options", text: "Potential Seabourn sailings can be evaluated based on availability, itinerary, suite category and applicable offers." },
    { title: "We Discuss the Choices", text: "You can review the options and ask questions before deciding." },
    { title: "We Refine the Trip", text: "Once you identify the right cruise, we can help refine the details of your luxury vacation." },
];

const whyWorkWithUs = ["Seabourn ship selection", "Suite recommendations", "Itinerary comparisons", "Cruise pricing", "Promotion monitoring", "Seabourn Club considerations", "Pre- and post-cruise arrangements", "Special occasions", "Private travel arrangements", "Destination planning"];

const journeyColumns = [
    { icon: Landmark, title: "Before Your Cruise", items: ["Luxury hotels", "Airport transfers", "Private drivers", "Pre-cruise stays", "Destination experiences"] },
    { icon: Ship, title: "During Your Cruise", items: ["Suite selection", "Shore excursions", "Special occasions", "Dining preferences", "Expedition planning"] },
    { icon: MapPin, title: "After Your Cruise", items: ["Post-cruise hotel stays", "Private tours", "Transfers", "Extended destination travel", "Return flights"] },
];

const occasionsList = ["Anniversary", "Honeymoon", "Birthday", "Retirement", "Graduation", "Family reunion", "Wedding celebration", "Major personal milestone"];

const familyList = ["Number of adults", "Number of children", "Ages of children", "Number of suites", "Connecting-suite preferences", "Accessibility requirements", "Dining preferences", "Preferred itinerary"];

const soloList = ["Single supplement", "Available solo opportunities", "Suite categories", "Itinerary length", "Social atmosphere", "Shore excursions", "Overall value"];

const minimumInfo = [
    "Where you want to go",
    "When you want to travel",
    "How many people are traveling",
    "Your approximate budget",
    "Your preferred suite level, if known",
    "Any special requirements",
];



/* ── Main Component ──────────────────────────────────────────────── */
const SeabournCruiseQuote = () => {
    const formRef = useRef(null);

    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        destination: "", travelDates: "", flexible: "",
        travelers: "", suitesNeeded: "",
        ship: "", suite: "", cruiseLength: "",
        budget: "",
        sailedBefore: "", clubMember: "", previousExperience: "",
        specialRequests: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const [activeTab, setActiveTab] = useState("expedition");
    const [activeCategoryTab, setActiveCategoryTab] = useState("occasions");

    const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

    const addTag = (tag) => {
        setForm((prev) => ({
            ...prev,
            specialRequests: prev.specialRequests ? `${prev.specialRequests}, ${tag}` : tag,
        }));
    };

    const useExample = (text) => {
        setForm((prev) => ({ ...prev, specialRequests: text }));
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Request a Seabourn Cruise Quote | Luxury Cruise Planning</title>
                <meta name="title" content="Request a Seabourn Cruise Quote | Trips & Ships" />
                <meta
                    name="description"
                    content="Request a personalized Seabourn cruise quote from Trips & Ships Luxury Travel. Get expert help choosing your Seabourn ship, suite, itinerary, dates and available offers."
                />
                <script type="application/ld+json">{JSON.stringify(seabournCruiseQuoteSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (same UI as Offers & Loyalty hero) ──────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Request a Seabourn <br /> Cruise Quote</h1>
                    <p>
                        Planning a Seabourn cruise is about choosing more than a destination. The right ship, suite, itinerary, departure date and available offer can make a significant difference to your overall experience.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                At Trips &amp; Ships Luxury Travel, we help travelers plan Seabourn vacations around what matters most to them—from the ideal suite and itinerary to special occasions, expedition adventures and extended voyages.
                            </p>
                            <p>
                                Complete the quote request form to tell us what you are looking for, and a luxury travel advisor can help you explore the best available options.
                            </p>
                        </>
                    )}

                    <div className="Sbc-hero-readmore-wrapper">
                        <button className="Sbc-hero-readmore-btn" onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <button className="rlc-page-cta-btn rlc-btn-light" onClick={scrollToForm}>
                            Request My Seabourn Quote
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── INTRO ──────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-intro">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Personalized Cruise Planning</span>
                        <h2 className="Sbc-h2">Start Planning Your <br /> Seabourn Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Whether you already know exactly which Seabourn cruise
                            you want or you're still deciding between ships and
                            destinations, a personalized quote is a useful first
                            step. Complete the quote request form to tell us what
                            you are looking for, and a luxury travel advisor can
                            help you explore the best available options.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Tell us about your:</h4>
                                <ul className="Sbc-highlights-list">
                                    {tripDetailFields.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                The more information you provide, the more
                                effectively we can narrow down the options.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Cruise Planning Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY REQUEST A PERSONALIZED QUOTE ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-why-quote">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond the Advertised Fare</span>
                        <h2 className="Sbc-h2">Why Request a Personalized Seabourn Quote?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn offers a range of ships, suites and
                            itineraries, and pricing can vary considerably
                            depending on the sailing. A personalized quote allows
                            us to look beyond a basic advertised fare. We can
                            help compare:
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {whyQuoteCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── QUOTE REQUEST FORM (new Sbcq-form classes) ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-quote-form" ref={formRef}>
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Your Quote Request</span>
                        <h2 className="Sbc-h2">Tell Us About Your Seabourn Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Use the quote request form to provide the details
                            that are most important to you.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="Sbcq-form-card Sbcq-form-success">
                            <div className="Sbcq-success-icon">
                                <Check size={30} strokeWidth={2} />
                            </div>
                            <h3 className="Sbc-h3">Thank You, {form.firstName || "Traveler"}!</h3>
                            <p className="Sbc-p">
                                Your Seabourn cruise quote request has been
                                received. A luxury travel advisor will be in
                                touch shortly to help explore your best
                                available options.
                            </p>
                        </div>
                    ) : (
                        <form className="Sbcq-form-card" onSubmit={handleSubmit}>

                            {/* Contact Information */}
                            <div className="Sbcq-form-group">
                                <h3 className="Sbcq-form-group-title"><User size={18} /> Contact Information</h3>
                                <div className="Sbcq-form-row">
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">First Name</label>
                                        <input className="Sbcq-input" type="text" value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} required />
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Last Name</label>
                                        <input className="Sbcq-input" type="text" value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} required />
                                    </div>
                                </div>
                                <div className="Sbcq-form-row">
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label"><Mail size={13} /> Email Address</label>
                                        <input className="Sbcq-input" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} required />
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label"><Phone size={13} /> Phone Number</label>
                                        <input className="Sbcq-input" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            {/* Trip Details */}
                            <div className="Sbcq-form-group">
                                <h3 className="Sbcq-form-group-title"><Compass size={18} /> Trip Details</h3>
                                <div className="Sbcq-form-row">
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Preferred Destination</label>
                                        <select className="Sbcq-select" value={form.destination} onChange={(e) => updateField("destination", e.target.value)}>
                                            <option value="">Select a destination</option>
                                            {destinationOptions.map((d) => (
                                                <option key={d} value={d}>{d}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label"><Calendar size={13} /> Preferred Travel Dates</label>
                                        <input className="Sbcq-input" type="text" placeholder="e.g. June 2027, or flexible" value={form.travelDates} onChange={(e) => updateField("travelDates", e.target.value)} />
                                    </div>
                                </div>

                                <div className="Sbcq-form-field Sbcq-full" style={{ marginBottom: "20px" }}>
                                    <label className="Sbcq-label">Are Your Dates Flexible?</label>
                                    <div className="Sbcq-radio-group">
                                        {["Yes", "No", "Somewhat"].map((opt) => (
                                            <label key={opt} className={`Sbcq-radio-option${form.flexible === opt ? " Sbcq-radio-active" : ""}`}>
                                                <input type="radio" name="flexible" value={opt} checked={form.flexible === opt} onChange={(e) => updateField("flexible", e.target.value)} />
                                                {opt}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="Sbcq-form-row">
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label"><Users size={13} /> Number of Travelers</label>
                                        <input className="Sbcq-input" type="number" min="1" value={form.travelers} onChange={(e) => updateField("travelers", e.target.value)} />
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label"><Home size={13} /> Number of Suites Needed</label>
                                        <input className="Sbcq-input" type="number" min="1" value={form.suitesNeeded} onChange={(e) => updateField("suitesNeeded", e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            {/* Cruise Preferences */}
                            <div className="Sbcq-form-group">
                                <h3 className="Sbcq-form-group-title"><Ship size={18} /> Cruise Preferences</h3>
                                <div className="Sbcq-form-row Sbcq-row-3">
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Preferred Seabourn Ship</label>
                                        <select className="Sbcq-select" value={form.ship} onChange={(e) => updateField("ship", e.target.value)}>
                                            <option value="">Select a ship</option>
                                            {shipOptions.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Preferred Suite Category</label>
                                        <select className="Sbcq-select" value={form.suite} onChange={(e) => updateField("suite", e.target.value)}>
                                            <option value="">Select a suite</option>
                                            {suiteOptions.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Preferred Cruise Length</label>
                                        <select className="Sbcq-select" value={form.cruiseLength} onChange={(e) => updateField("cruiseLength", e.target.value)}>
                                            <option value="">Select a length</option>
                                            {lengthOptions.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Budget */}
                            <div className="Sbcq-form-group">
                                <h3 className="Sbcq-form-group-title"><Tag size={18} /> Budget</h3>
                                <div className="Sbcq-form-field Sbcq-full">
                                    <label className="Sbcq-label">Approximate Cruise Budget</label>
                                    <input className="Sbcq-input" type="text" placeholder="e.g. $10,000 &ndash; $15,000 per person" value={form.budget} onChange={(e) => updateField("budget", e.target.value)} />
                                    <p className="Sbcq-form-hint">
                                        Providing a budget range helps your advisor
                                        focus on realistic options rather than
                                        presenting a large number of unsuitable
                                        choices.
                                    </p>
                                </div>
                            </div>

                            {/* Previous Seabourn Experience */}
                            <div className="Sbcq-form-group">
                                <h3 className="Sbcq-form-group-title"><Award size={18} /> Previous Seabourn Experience</h3>
                                <div className="Sbcq-form-row">
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Have You Sailed With Seabourn Before?</label>
                                        <div className="Sbcq-radio-group">
                                            {["Yes", "No"].map((opt) => (
                                                <label key={opt} className={`Sbcq-radio-option${form.sailedBefore === opt ? " Sbcq-radio-active" : ""}`}>
                                                    <input type="radio" name="sailedBefore" value={opt} checked={form.sailedBefore === opt} onChange={(e) => updateField("sailedBefore", e.target.value)} />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="Sbcq-form-field">
                                        <label className="Sbcq-label">Seabourn Club Member?</label>
                                        <div className="Sbcq-radio-group">
                                            {["Yes", "No", "Not Sure"].map((opt) => (
                                                <label key={opt} className={`Sbcq-radio-option${form.clubMember === opt ? " Sbcq-radio-active" : ""}`}>
                                                    <input type="radio" name="clubMember" value={opt} checked={form.clubMember === opt} onChange={(e) => updateField("clubMember", e.target.value)} />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="Sbcq-form-field Sbcq-full">
                                    <label className="Sbcq-label">Previous Sailings &amp; Loyalty Status</label>
                                    <textarea className="Sbcq-textarea" placeholder="If you are a returning Seabourn guest, include any information you have about your previous sailings or loyalty status." value={form.previousExperience} onChange={(e) => updateField("previousExperience", e.target.value)} />
                                </div>
                            </div>

                            {/* Special Requests */}
                            <div className="Sbcq-form-group">
                                <h3 className="Sbcq-form-group-title"><Heart size={18} /> Special Requests</h3>
                                <div className="Sbcq-form-field Sbcq-full">
                                    <label className="Sbcq-label">Tell us anything that would help us personalize your recommendation.</label>
                                    <textarea className="Sbcq-textarea" placeholder="Anniversary, honeymoon, accessibility requirements, connecting suites, pre- or post-cruise travel..." value={form.specialRequests} onChange={(e) => updateField("specialRequests", e.target.value)} />
                                    <div className="Sbcq-tag-suggestions">
                                        {specialRequestTags.map((tag, i) => (
                                            <button type="button" key={i} className="Sbc-exp-tag Sbcq-tag-btn" onClick={() => addTag(tag)}>
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="Sbcq-form-submit-row">
                                <button type="submit" className="Sbc-btn Sbc-btn-solid">
                                    Request My Seabourn Quote
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* ── NOT SURE WHICH CRUISE ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-not-sure">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">No Pressure to Decide</span>
                        <h2 className="Sbc-h2">Not Sure Which Seabourn Cruise Is Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            That's completely fine. You don't need to know the
                            exact ship or itinerary before requesting a quote.
                            If you're deciding between options, tell us what
                            kind of experience you're looking for. These
                            details give your advisor a starting point for
                            developing recommendations.
                        </p>
                    </div>

                    <div className="Sbcq-example-grid">
                        {notSureExamples.map((ex, i) => (
                            <div className="Sbcq-example-card" key={i}>
                                <Quote size={22} className="Sbcq-example-quote-icon" />
                                <p className="Sbcq-example-text">&ldquo;{ex}&rdquo;</p>
                                <button className="Sbcq-example-btn" onClick={() => useExample(ex)}>
                                    Use This Example <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CHOOSING THE RIGHT SHIP ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleet</span>
                        <h2 className="Sbc-h2">Choosing the Right Seabourn Ship</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's fleet offers different experiences. If
                            you're uncertain which ship fits your travel style,
                            your quote request can simply say &ldquo;Not
                            sure.&rdquo;
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {quoteShips.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{s.title}</h3>
                                    <p className="Sbc-card-text">{s.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── RELATED CTA #1.5 (SHIP SELECTION CTA) ─────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Select Your Ship</span>
                    <h3 className="Sbc-cta-title">Unsure Which Seabourn Ship Is Right For You?</h3>
                    <p className="Sbc-cta-text">
                        Tell us about your ideal cruise experience, and a luxury travel advisor can help you compare ocean ships and expedition vessels to find the perfect match.
                    </p>
                    <button className="Sbc-cta-button" onClick={scrollToForm}>
                        Request My Seabourn Quote
                        <ArrowRight size={16} />
                    </button>
                </div>
            </section>

            {/* ── CHOOSING THE RIGHT SUITE ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-suite">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Your Accommodation</span>
                        <h2 className="Sbc-h2">Choosing the Right Seabourn Suite</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbcq-suite-split">
                        <div className="Sbcq-suite-content">
                            <p className="Sbc-intro" style={{ marginBottom: "24px" }}>
                                Your suite is an important part of the Seabourn experience. When preparing a quote, we can help you consider:
                            </p>
                            
                            <div className="Sbc-wellness-features-card" style={{ maxWidth: "100%", margin: "0 0 24px" }}>
                                <ul className="Sbc-wellness-list">
                                    {suiteConsiderations.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ margin: 0 }}>
                                Rather than automatically choosing the least expensive suite, consider how much time you expect to spend in your accommodation and which features matter most to you.
                            </p>
                        </div>

                        <div className="Sbcq-suite-image-container">
                            <div className="Sbcq-suite-image-placeholder">
                                <div className="Sbcq-suite-placeholder-icon-wrapper">
                                    <Home size={44} strokeWidth={1.5} />
                                </div>
                                <span className="Sbcq-suite-placeholder-text">Seabourn Suite Accommodation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPECIALIZED VOYAGE PLANNING (EXPEDITION & WORLD CRUISE TABS) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-specialized-planning">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Voyage Types</span>
                        <h2 className="Sbc-h2">Specialized Voyage Planning</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn offers unique journeys for adventurers and world travelers. Select a voyage type to learn more:
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="Sbcq-tabs-nav">
                        <button 
                            className={`Sbcq-tab-btn ${activeTab === "expedition" ? "active" : ""}`}
                            onClick={() => setActiveTab("expedition")}
                        >
                            <Snowflake size={18} />
                            Expedition Cruises
                        </button>
                        <button 
                            className={`Sbcq-tab-btn ${activeTab === "world" ? "active" : ""}`}
                            onClick={() => setActiveTab("world")}
                        >
                            <Globe size={18} />
                            World Cruises
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="Sbcq-tab-content-wrap">
                        {activeTab === "expedition" ? (
                            <div className="Sbcq-tab-pane Sbcq-suite-split animate-fade">
                                <div className="Sbcq-suite-content">
                                    <h3 className="Sbcq-tab-title">Planning a Seabourn Expedition?</h3>
                                    <p className="Sbc-intro" style={{ marginBottom: "20px" }}>
                                        If you're considering Antarctica, the Arctic, Greenland or the Kimberley, mention the destination in your request. Expedition cruises have different considerations from traditional ocean voyages. Your planning may involve:
                                    </p>
                                    <div className="Sbc-wellness-features-card" style={{ maxWidth: "100%", margin: "0 0 20px" }}>
                                        <ul className="Sbc-wellness-list">
                                            {expeditionConsiderations.map((item, idx) => (
                                                <li key={idx}>
                                                    <Snowflake size={18} strokeWidth={2.5} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="Sbc-p" style={{ margin: 0 }}>
                                        We can help you evaluate the itinerary as well as the ship.
                                    </p>
                                </div>
                                <div className="Sbcq-suite-image-container">
                                    <div className="Sbcq-suite-image-placeholder">
                                        <div className="Sbcq-suite-placeholder-icon-wrapper">
                                            <Snowflake size={44} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sbcq-suite-placeholder-text">Seabourn Expedition Planning</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="Sbcq-tab-pane Sbcq-suite-split animate-fade">
                                <div className="Sbcq-suite-content">
                                    <h3 className="Sbcq-tab-title">Planning a Seabourn World Cruise?</h3>
                                    <p className="Sbc-intro" style={{ marginBottom: "20px" }}>
                                        For travelers considering a Seabourn World Cruise or Grand Voyage, early planning can be particularly important. Long voyages require additional consideration of:
                                    </p>
                                    <div className="Sbc-wellness-features-card" style={{ maxWidth: "100%", margin: "0 0 20px" }}>
                                        <ul className="Sbc-wellness-list">
                                            {worldCruiseConsiderations.map((item, idx) => (
                                                <li key={idx}>
                                                    <Globe size={18} strokeWidth={2.5} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="Sbc-p" style={{ margin: 0 }}>
                                        If you are considering a World Cruise, include your approximate travel window and preferred length in your quote request.
                                    </p>
                                </div>
                                <div className="Sbcq-suite-image-container">
                                    <div className="Sbcq-suite-image-placeholder">
                                        <div className="Sbcq-suite-placeholder-icon-wrapper">
                                            <Globe size={44} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sbcq-suite-placeholder-text">Seabourn World Cruise Planning</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            {/* ── SEABOURN OFFERS ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-offers">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Value &amp; Promotions</span>
                        <h2 className="Sbc-h2">Looking for Seabourn Offers?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            When you request a quote, let us know if you're
                            specifically interested in:
                        </p>
                    </div>

                    <div className="Sbc-wellness-features-card" style={{ maxWidth: "820px", margin: "0 auto" }}>
                        <ul className="Sbc-wellness-list">
                            {offersConsiderations.map((item, idx) => (
                                <li key={idx}>
                                    <Tag size={18} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="Sbc-p" style={{ maxWidth: "820px", margin: "24px auto 0", textAlign: "center" }}>
                        Promotions can vary by sailing, suite category and
                        booking conditions. The objective is to evaluate the
                        total value of the booking, rather than simply
                        selecting the largest advertised discount.
                    </p>
                </div>
            </section>

                    {/* ── WHY WORK WITH TRIPS & SHIPS ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-why-us">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Expert Guidance</span>
                        <h2 className="Sbc-h2">Why Work With Trips &amp; Ships Luxury Travel?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbcq-suite-split">
                        <div className="Sbcq-suite-content">
                            <p className="Sbc-intro" style={{ marginBottom: "24px" }}>
                                A Seabourn cruise is a significant travel investment. Working with a knowledgeable luxury travel advisor can provide another layer of planning expertise. At Trips &amp; Ships Luxury Travel, we can help with:
                            </p>

                            <div className="Sbc-brand-highlights" style={{ maxWidth: "100%", margin: "0 0 24px" }}>
                                <ul className="Sbc-highlights-list">
                                    {whyWorkWithUs.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ margin: 0 }}>
                                Our goal is to make the planning process easier and help you select the Seabourn experience that best fits your priorities.
                            </p>
                        </div>

                        <div className="Sbcq-suite-image-container">
                            <div className="Sbcq-suite-image-placeholder">
                                <div className="Sbcq-suite-placeholder-icon-wrapper">
                                    <Award size={44} strokeWidth={1.5} />
                                </div>
                                <span className="Sbcq-suite-placeholder-text">Trips &amp; Ships Travel Advisor Expertise</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── RELATED CTA #1 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Go Deeper</span>
                    <h3 className="Sbc-cta-title">Explore the Complete Seabourn Cruises Guide</h3>
                    <p className="Sbc-cta-text">
                        Read our full guide covering ships, suites, dining, destinations, inclusions and what makes Seabourn different before you request your quote.
                    </p>
                    <Link to="/seabourn-cruises/" className="Sbc-cta-button">
                        Read the Seabourn Cruises Guide
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


                  {/* ── COMPLETE JOURNEY (reused Sbc-exp classes) ─────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-journey">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Full Vacation</span>
                        <h2 className="Sbc-h2">More Than a Cruise: <br /> Plan the Complete Journey</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Your Seabourn cruise may be only one part of your
                            vacation. This approach can turn a cruise booking
                            into a complete luxury travel experience.
                        </p>
                    </div>

                    <div className="Sbc-exp-grid">
                        {journeyColumns.map((col, i) => {
                            const Icon = col.icon;
                            return (
                                <div className="Sbc-exp-card" key={i}>
                                    <div className="Sbc-exp-card-header">
                                        <div className="Sbc-exp-icon-wrap">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="Sbc-h3">{col.title}</h3>
                                    </div>
                                    <div className="Sbc-exp-features">
                                        <div className="Sbc-exp-tags">
                                            {col.items.map((item, idx) => (
                                                <span key={idx} className="Sbc-exp-tag">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── WHAT HAPPENS NEXT (new Sbcq-steps classes) ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-process">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Process</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Quote: What Happens Next?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            After submitting your request, your information
                            gives us a starting point for your cruise
                            planning.
                        </p>
                    </div>

                    <div className="Sbcq-steps-list">
                        {processSteps.map((step, i) => (
                            <div className="Sbcq-step" key={i}>
                                <div className="Sbcq-step-number">{i + 1}</div>
                                <div className="Sbcq-step-body">
                                    <h3 className="Sbcq-step-title">{step.title}</h3>
                                    <p className="Sbcq-step-text">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

    

      
            {/* ── TRAVEL STYLES MERGED SECTION (TABS) ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-travel-styles">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Your Travel Style</span>
                        <h2 className="Sbc-h2">Planning for Your Travel Style</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Every Seabourn journey is personal. Select your travel style below to see how we customize your planning:
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="Sbcq-tabs-nav">
                        <button 
                            className={`Sbcq-tab-btn ${activeCategoryTab === "occasions" ? "active" : ""}`}
                            onClick={() => setActiveCategoryTab("occasions")}
                        >
                            <Heart size={18} />
                            Special Occasions
                        </button>
                        <button 
                            className={`Sbcq-tab-btn ${activeCategoryTab === "family" ? "active" : ""}`}
                            onClick={() => setActiveCategoryTab("family")}
                        >
                            <Users size={18} />
                            Family Travel
                        </button>
                        <button 
                            className={`Sbcq-tab-btn ${activeCategoryTab === "solo" ? "active" : ""}`}
                            onClick={() => setActiveCategoryTab("solo")}
                        >
                            <Anchor size={18} />
                            Solo Travel
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="Sbcq-tab-content-wrap">
                        {activeCategoryTab === "occasions" && (
                            <div className="Sbcq-tab-pane Sbcq-suite-split animate-fade">
                                <div className="Sbcq-suite-content">
                                    <h3 className="Sbcq-tab-title">Seabourn Quote Request for Special Occasions</h3>
                                    <p className="Sbc-intro" style={{ marginBottom: "20px" }}>
                                        Seabourn can be an excellent choice for milestone travel. Tell us if your cruise is celebrating:
                                    </p>
                                    <div className="Sbc-wellness-features-card" style={{ maxWidth: "100%", margin: "0 0 20px" }}>
                                        <ul className="Sbc-wellness-list">
                                            {occasionsList.map((item, idx) => (
                                                <li key={idx}>
                                                    <Heart size={18} strokeWidth={2.5} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="Sbc-p" style={{ margin: 0 }}>
                                        Providing this information when you request your quote allows your advisor to consider the occasion when planning your experience.
                                    </p>
                                </div>
                                <div className="Sbcq-suite-image-container">
                                    <div className="Sbcq-suite-image-placeholder">
                                        <div className="Sbcq-suite-placeholder-icon-wrapper">
                                            <Heart size={44} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sbcq-suite-placeholder-text">Seabourn Special Occasion Planning</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeCategoryTab === "family" && (
                            <div className="Sbcq-tab-pane Sbcq-suite-split animate-fade">
                                <div className="Sbcq-suite-content">
                                    <h3 className="Sbcq-tab-title">Seabourn Family &amp; Multigenerational Travel</h3>
                                    <p className="Sbc-intro" style={{ marginBottom: "20px" }}>
                                        Traveling with several generations can require additional planning. A quote request should mention:
                                    </p>
                                    <div className="Sbc-wellness-features-card" style={{ maxWidth: "100%", margin: "0 0 20px" }}>
                                        <ul className="Sbc-wellness-list">
                                            {familyList.map((item, idx) => (
                                                <li key={idx}>
                                                    <Users size={18} strokeWidth={2.5} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="Sbc-p" style={{ margin: 0 }}>
                                        This information helps your advisor identify suitable suite configurations and itineraries.
                                    </p>
                                </div>
                                <div className="Sbcq-suite-image-container">
                                    <div className="Sbcq-suite-image-placeholder">
                                        <div className="Sbcq-suite-placeholder-icon-wrapper">
                                            <Users size={44} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sbcq-suite-placeholder-text">Seabourn Family Travel Planning</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeCategoryTab === "solo" && (
                            <div className="Sbcq-tab-pane Sbcq-suite-split animate-fade">
                                <div className="Sbcq-suite-content">
                                    <h3 className="Sbcq-tab-title">Seabourn Solo Cruise Quote</h3>
                                    <p className="Sbc-intro" style={{ marginBottom: "20px" }}>
                                        Solo travelers should also request a personalized quote. Let us know that you are traveling alone so we can consider:
                                    </p>
                                    <div className="Sbc-wellness-features-card" style={{ maxWidth: "100%", margin: "0 0 20px" }}>
                                        <ul className="Sbc-wellness-list">
                                            {soloList.map((item, idx) => (
                                                <li key={idx}>
                                                    <Anchor size={18} strokeWidth={2.5} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="Sbc-p" style={{ margin: 0 }}>
                                        A solo quote can be very different from simply dividing the advertised fare for two travelers.
                                    </p>
                                </div>
                                <div className="Sbcq-suite-image-container">
                                    <div className="Sbcq-suite-image-placeholder">
                                        <div className="Sbcq-suite-placeholder-icon-wrapper">
                                            <Anchor size={44} strokeWidth={1.5} />
                                        </div>
                                        <span className="Sbcq-suite-placeholder-text">Seabourn Solo Travel Planning</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── RELATED CTA #2 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">We're Here to Help</span>
                    <h3 className="Sbc-cta-title">Traveling Solo, as a Couple or With Family?</h3>
                    <p className="Sbc-cta-text">
                        Whatever your travel style, tell us about your travel
                        goals, and we'll help you explore the possibilities.
                    </p>
                    <button className="Sbc-cta-button" onClick={scrollToForm}>
                        Request My Seabourn Quote
                        <ArrowRight size={16} />
                    </button>
                </div>
            </section>

            {/* ── WHAT INFORMATION SHOULD I PROVIDE ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbcq-minimum">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Started</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Quote: What Information Should I Provide?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            You don't need to have every detail decided. At
                            minimum, provide:
                        </p>
                    </div>

                    <ol className="Sbcq-minimum-list">
                        {minimumInfo.map((item, idx) => (
                            <li key={idx}>
                                <span className="Sbcq-minimum-number">{idx + 1}</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ol>

                    <p className="Sbc-p" style={{ maxWidth: "780px", margin: "28px auto 0", textAlign: "center" }}>
                        If your dates or destination are flexible, tell us.
                        Flexibility can open up additional itinerary and
                        pricing possibilities.
                    </p>
                </div>
            </section>



            {/* ── FAQ (reused Sbc-faq classes) ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbcq-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before requesting
                            a Seabourn cruise quote.
                        </p>
                    </div>
                    <QuoteFAQ />
                </div>
            </section>

            {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbcq-final-cta">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ready to Start Planning?</span>
                        <h2 className="Sbc-h2">Request Your Seabourn Quote</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p" style={{ textAlign: "center" }}>
                            Tell us what you're looking for and let Trips
                            &amp; Ships Luxury Travel help you explore your
                            Seabourn options.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Not sure which Seabourn cruise is right
                                for you?</strong> Tell us about your travel
                                goals, and we'll help you explore the
                                possibilities.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <button className="Sbc-btn Sbc-btn-light" onClick={scrollToForm}>
                                Request a Seabourn Cruise Quote
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournCruiseQuote;