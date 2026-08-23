import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Anchor,
    Waves,
    Wine,
    Sun,
    Gem,
    Heart,
    Map,
    Compass,
    Utensils,
    Landmark,
    Mountain,
    Snowflake,
    Camera,
    Home,
    Users,
    Award,
    AlertCircle,
    Binoculars,
    Footprints,
    CloudSnow,
    Fish,
    Bird,
    Star,
    MapPin,
    Dot,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "./Seabournantarcticacruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/antarctica/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/antarctica/",
            name: "Seabourn Antarctica Cruises: Itineraries, Ships & Guide",
            headline:
                "Seabourn Antarctica Cruises: Complete Guide to Ships, Itineraries, Wildlife & Planning",
            description:
                "Explore Seabourn Antarctica cruises, including itineraries, expedition ships, Zodiac landings, wildlife, suites, packing tips, activities and planning advice.",
            isPartOf: { "@id": "https://www.tripsandships.com/#website" },
            about: { "@type": "Thing", name: "Seabourn Antarctica Cruises" },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/antarctica/#faq",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/antarctica/#breadcrumb",
            },
            publisher: { "@id": "https://www.tripsandships.com/#organization" },
        },
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            description:
                "Luxury travel planning and cruise advisory services from Trips & Ships Luxury Travel.",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/antarctica/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Antarctica Cruises", item: "https://www.tripsandships.com/seabourn-cruises/antarctica/" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/antarctica/#faq",
            url: "https://www.tripsandships.com/seabourn-cruises/antarctica/",
            name: "Frequently Asked Questions About Seabourn Antarctica Cruises",
            mainEntity: [
                { "@type": "Question", name: "Does Seabourn cruise to Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn operates expedition cruises to Antarctica using its dedicated expedition ships, including Seabourn Venture and Seabourn Pursuit." } },
                { "@type": "Question", name: "What Seabourn ships go to Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture and Seabourn Pursuit are Seabourn's purpose-built expedition ships designed for destinations such as Antarctica." } },
                { "@type": "Question", name: "Does Seabourn Antarctica include Zodiac landings?", acceptedAnswer: { "@type": "Answer", text: "Zodiac operations are a core component of Seabourn's expedition experience, with specific landings and excursions depending on weather, sea conditions, ice and local regulations." } },
                { "@type": "Question", name: "What wildlife can I see on a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Potential sightings include penguins, whales, seals and numerous seabirds. Specific wildlife sightings cannot be guaranteed." } },
                { "@type": "Question", name: "Can I see penguins on a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Penguins are one of the major wildlife attractions of Antarctica, and expedition itineraries can include opportunities to visit or observe penguin colonies." } },
                { "@type": "Question", name: "Can I see whales in Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Whale sightings are possible during Antarctic voyages, including while cruising and during Zodiac exploration. Humpback whales are among the species that may be encountered." } },
                { "@type": "Question", name: "What is the best month for a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "There isn't one universally best month. December through February can be attractive for travelers prioritizing long daylight hours and active wildlife, while earlier and later sailings offer different seasonal conditions." } },
                { "@type": "Question", name: "How cold is a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Conditions vary considerably. Antarctica can be cold, windy and wet, particularly during shore landings and Zodiac excursions. Proper layering and waterproof clothing are essential." } },
                { "@type": "Question", name: "What should I pack for a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Pack thermal layers, insulating mid-layers, waterproof outerwear, waterproof trousers, warm accessories, suitable footwear, sunglasses, sunscreen and waterproof protection for electronics." } },
                { "@type": "Question", name: "Do I need to be physically fit for a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Travelers should be comfortable with activities such as Zodiac boarding, walking and potentially uneven terrain. Activity difficulty varies by excursion." } },
                { "@type": "Question", name: "Is Seabourn Antarctica good for first-time Antarctica travelers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn can be particularly appealing to first-time visitors who want a guided expedition experience combined with luxury accommodation, dining and service." } },
                { "@type": "Question", name: "Is Seabourn Antarctica all-inclusive?", acceptedAnswer: { "@type": "Answer", text: "Many components are included, such as dining and expedition experiences, with specific inclusions varying by sailing. Travelers should review the current terms for their specific voyage." } },
                { "@type": "Question", name: "Is Wi-Fi included on Seabourn Antarctica cruises?", acceptedAnswer: { "@type": "Answer", text: "Wi-Fi is included as part of Seabourn's onboard offering, although connectivity in Antarctica can be limited by the remote environment." } },
                { "@type": "Question", name: "Can Antarctic itineraries change?", acceptedAnswer: { "@type": "Answer", text: "Yes. Weather, sea conditions, ice, wildlife, safety and local regulations can cause expedition plans to change. Flexibility is an essential part of Antarctic travel." } },
                { "@type": "Question", name: "Is the Drake Passage rough?", acceptedAnswer: { "@type": "Answer", text: "It can be. Sea conditions vary from relatively calm to rough, and travelers who are prone to motion sickness should prepare accordingly." } },
                { "@type": "Question", name: "Does Seabourn provide binoculars?", acceptedAnswer: { "@type": "Answer", text: "Yes. Swarovski Optik binoculars are provided in every suite aboard Seabourn Venture and Seabourn Pursuit." } },
                { "@type": "Question", name: "Is a veranda suite worth it in Antarctica?", acceptedAnswer: { "@type": "Answer", text: "For many travelers, yes. A private veranda provides another place to watch glaciers, icebergs, wildlife and passing landscapes without leaving your suite." } },
                { "@type": "Question", name: "Is Seabourn Antarctica expensive?", acceptedAnswer: { "@type": "Answer", text: "Seabourn is positioned in the luxury expedition market, so fares can be considerably higher than those of mainstream expedition operators. The final cost depends on itinerary, season, suite category and sailing date." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reuses Sbc-faq classes) ───────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Does Seabourn cruise to Antarctica?", a: "Yes. Seabourn operates expedition cruises to Antarctica using its dedicated expedition ships, including Seabourn Venture and Seabourn Pursuit." },
        { q: "What Seabourn ships go to Antarctica?", a: "Seabourn Venture and Seabourn Pursuit are the company's purpose-built expedition ships designed for destinations such as Antarctica." },
        { q: "Does Seabourn Antarctica include Zodiac landings?", a: "Zodiac operations are a core component of Seabourn's expedition experience, with specific landings and excursions depending on weather, sea conditions, ice and local regulations." },
        { q: "What wildlife can I see on a Seabourn Antarctica cruise?", a: "Potential sightings include penguins, whales, seals and numerous seabirds. Specific wildlife sightings cannot be guaranteed." },
        { q: "Can I see penguins on a Seabourn Antarctica cruise?", a: "Penguins are one of the major wildlife attractions of Antarctica, and expedition itineraries can include opportunities to visit or observe penguin colonies." },
        { q: "Can I see whales in Antarctica?", a: "Yes. Whale sightings are possible during Antarctic voyages, including while cruising and during Zodiac exploration. Humpback whales are among the species that may be encountered." },
        { q: "What is the best month for a Seabourn Antarctica cruise?", a: "There isn't one universally best month. December through February can be attractive for travelers prioritizing long daylight hours and active wildlife, while earlier and later sailings offer different seasonal conditions." },
        { q: "How cold is a Seabourn Antarctica cruise?", a: "Conditions vary considerably. Antarctica can be cold, windy and wet, particularly during shore landings and Zodiac excursions. Proper layering and waterproof clothing are essential." },
        { q: "What should I pack for a Seabourn Antarctica cruise?", a: "Pack thermal layers, insulating mid-layers, waterproof outerwear, waterproof trousers, warm accessories, suitable footwear, sunglasses, sunscreen and waterproof protection for electronics." },
        { q: "Do I need to be physically fit for a Seabourn Antarctica cruise?", a: "You should be comfortable with activities such as Zodiac boarding, walking and potentially uneven terrain. Activity difficulty varies by excursion." },
        { q: "Is Seabourn Antarctica good for first-time Antarctica travelers?", a: "Yes. Seabourn can be particularly appealing to first-time visitors who want a guided expedition experience combined with luxury accommodation, dining and service." },
        { q: "Is Seabourn Antarctica all-inclusive?", a: "Many components are included, such as dining and expedition experiences, with specific inclusions varying by sailing. Review the current terms for your specific voyage." },
        { q: "Is Wi-Fi included on Seabourn Antarctica cruises?", a: "Wi-Fi is included as part of Seabourn's onboard offering, although connectivity in Antarctica can be limited by the remote environment." },
        { q: "Can Antarctic itineraries change?", a: "Yes. Weather, sea conditions, ice, wildlife, safety and local regulations can cause expedition plans to change. Flexibility is an essential part of Antarctic travel." },
        { q: "Is the Drake Passage rough?", a: "It can be. Sea conditions vary from relatively calm to rough, and travelers who are prone to motion sickness should prepare accordingly." },
        { q: "Does Seabourn provide binoculars?", a: "Yes. Swarovski Optik binoculars are provided in every suite aboard Seabourn Venture and Seabourn Pursuit." },
        { q: "Is a veranda suite worth it in Antarctica?", a: "For many travelers, yes. A private veranda provides another place to watch glaciers, icebergs, wildlife and passing landscapes without leaving your suite." },
        { q: "Is Seabourn Antarctica expensive?", a: "Seabourn is positioned in the luxury expedition market, so fares can be considerably higher than those of mainstream expedition operators. The final cost depends on itinerary, season, suite category and sailing date." },
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
const whyGoodChoice = [
    "Purpose-built expedition ships", "Luxury all-suite accommodations", "Zodiacs for exploration",
    "Expert expedition teams", "Wildlife viewing", "Kayaking opportunities", "Small-ship atmosphere",
    "Fine dining", "Personalized service", "Comfortable accommodations after active days ashore",
];

const ships = [
    {
        name: "Seabourn Venture",
        meta: "Purpose-built expedition ship",
        desc: "Seabourn Venture is a purpose-built expedition ship designed to explore remote destinations. Its expedition capabilities are combined with Seabourn's luxury approach to suites, dining, service, lounges, outdoor viewing and personalized experiences. The ship carries expedition equipment designed to take guests beyond the ship and into the Antarctic environment.",
        best: ["Suites", "Dining", "Service", "Lounges", "Outdoor viewing", "Personalized experiences"],
    },
    {
        name: "Seabourn Pursuit",
        meta: "Second dedicated expedition ship",
        desc: "Seabourn Pursuit is Seabourn's second dedicated expedition ship. Like Venture, it combines expedition capabilities with an all-suite luxury experience. The ship is designed around the idea that the destination is the primary attraction — guests can spend the day exploring Antarctica and return to a private suite, fine dining, comfortable lounges, warm indoor spaces and personalized service.",
        best: ["Private suite", "Fine dining", "Comfortable lounges", "Warm indoor spaces", "Personalized service"],
    },
];

const shipCompareRows = [
    ["Purpose-built expedition ship", "Yes", "Yes"],
    ["Luxury suites", "Yes", "Yes"],
    ["Expedition team", "Yes", "Yes"],
    ["Zodiac operations", "Yes", "Yes"],
    ["Kayaking opportunities", "Yes", "Yes"],
    ["Antarctic exploration", "Yes", "Yes"],
    ["Wildlife viewing", "Yes", "Yes"],
    ["Fine dining", "Yes", "Yes"],
];

const whenComparing = ["Number of expedition days", "Antarctic Peninsula routing", "South Shetland Islands", "Drake Passage schedule", "Optional extensions", "Suite category", "Sailing dates"];

const whereItGoes = [
    {
        icon: Mountain,
        title: "The Antarctic Peninsula",
        intro: "For many travelers, the Antarctic Peninsula is the centerpiece of an Antarctica cruise.",
        listLabel: "The region combines:",
        listItems: [
            "Snow-covered mountains",
            "Glaciers",
            "Icebergs",
            "Penguin colonies",
            "Whales",
            "Seals",
            "Dramatic coastlines"
        ],
        conclusion: "The scenery can change throughout the day as the ship moves between different landing and viewing locations."
    },
    {
        icon: Compass,
        title: "South Shetland Islands",
        intro: "The South Shetland Islands are another important part of many Antarctic expedition itineraries.",
        listLabel: "These islands offer opportunities for:",
        listItems: [
            "Penguin viewing",
            "Zodiac exploration",
            "Shore landings",
            "Scenic cruising",
            "Photography",
            "Wildlife observation"
        ],
        conclusion: "Conditions determine which locations are accessible on a particular voyage."
    },
    {
        icon: Waves,
        title: "Drake Passage",
        intro: "The journey to Antarctica can involve crossing the Drake Passage, the ocean separating the southern tip of South America from the Antarctic Peninsula.",
        subIntro: "",
        listLabel: "You may experience:",
        listItems: [
            "Calm seas",
            "Moderate swells",
            "Rougher conditions"
        ],
        conclusion: "This is one reason travelers should prepare for possible motion discomfort. The crossing is also part of the adventure for many experienced expedition travelers."
    }
];

const typicalDay = [
    { time: "Early Morning", text: "Wake up to a new Antarctic landscape." },
    { time: "Morning", text: "Attend an expedition briefing before heading out on a Zodiac excursion or shore landing." },
    { time: "Midday", text: "Return to the ship for lunch and relaxation." },
    { time: "Afternoon", text: "Participate in another landing, Zodiac ride, wildlife observation or scenic exploration." },
    { time: "Evening", text: "Attend an expedition presentation followed by dinner." },
];

const zodiacSteps = [
    "Preparing for the excursion.", "Receiving safety instructions.", "Boarding the Zodiac.",
    "Traveling from the ship toward shore.", "Stepping onto a landing area.", "Exploring with the expedition team.",
    "Returning to the Zodiac.", "Traveling back to the ship.",
];

const wildlifeCards = [
    { icon: Footprints, title: "Penguins", text: "Depending on the location and season, travelers may encounter Gentoo, Chinstrap and Adélie penguins." },
    { icon: Fish, title: "Whales", text: "Possible sightings include humpback whales, minke whales and orcas." },
    { icon: Waves, title: "Seals", text: "You may encounter Weddell seals, crabeater seals, leopard seals and fur seals." },
    { icon: Bird, title: "Birds", text: "Antarctic waters are home to numerous seabirds, including albatross, petrels, skuas and shearwaters." },
];

const suiteBestFor = [
    { title: "Private veranda", text: "Useful for watching icebergs, whales, seabirds and landscapes." },
    { title: "Location", text: "A midship location can be worth considering for travelers concerned about motion." },
    { title: "Larger suites", text: "Useful for travelers who want more space for camera equipment and expedition clothing." },
    { title: "View", text: "A good outward-facing view can add considerable value on a scenic expedition." },
];

const includesData = [
    { title: "Suite Accommodation", items: ["Private suite aboard Venture or Pursuit"] },
    { title: "Dining & Beverages", items: ["Dining", "Beverages"] },
    { title: "Expedition Program", items: ["Expedition activities", "Zodiac operations", "Expedition team"] },
    { title: "Onboard Service", items: ["Wi-Fi", "Gratuities", "Onboard service"] },
];

const notIncludedList = ["Airfare", "Hotels before or after the cruise", "Travel insurance", "Personal expenses"];

const proscons = {
    pros: ["Luxury expedition experience", "Purpose-built ships (Venture and Pursuit)", "Zodiacs for close access", "Wildlife: penguins, whales, seals and seabirds", "Expert expedition team", "All-suite accommodation", "Fine dining after active days"],
    cons: ["Expensive", "Weather uncertainty", "Wildlife is unpredictable", "Physically demanding", "Drake Passage sea conditions", "Limited predictability in the itinerary"],
};

const vsOperators = [
    { name: "Silversea Expeditions", text: "Another established ultra-luxury expedition operator worth comparing on ship size and inclusions." },
    { name: "Scenic Eclipse", text: "A contemporary luxury expedition ship with its own suite and dining concept." },
    { name: "Ponant", text: "A French luxury expedition line with a different onboard atmosphere and itinerary style." },
    { name: "Lindblad Expeditions", text: "Known for a strong scientific and naturalist focus, useful for comparing expedition intensity." },
    { name: "Atlas Ocean Voyages", text: "A newer luxury expedition entrant worth weighing on price and ship size." },
];

const compareCriteria = ["Ship size", "Suite configuration", "Expedition equipment", "Number of expedition specialists", "Dining", "Included beverages", "Wi-Fi", "Gratuities", "Shore activities", "Kayaking", "Zodiac operations", "Itinerary length", "Price"];

const bestForCards = [
    { icon: Heart, title: "Couples", items: ["Antarctica combines adventure, luxury, scenery and wildlife.", "Explore together by day, return to a comfortable suite and refined dining in the evening."] },
    { icon: Users, title: "Families", items: ["A remarkable multigenerational experience for families with older children or teenagers.", "Combines science, geography, wildlife, photography, adventure and history."] },
    { icon: Compass, title: "Solo Travelers", items: ["Zodiac excursions, lectures and shore landings naturally create opportunities to meet other guests.", "Seeing a penguin colony or whale together often becomes an easy conversation starter."] },
];

const monthData = [
    { m: "November", h: "Ice, early-season landscapes" },
    { m: "December", h: "Long daylight, active wildlife" },
    { m: "January", h: "Peak summer expedition conditions" },
    { m: "February", h: "Wildlife and whale opportunities" },
    { m: "March", h: "Late-season atmosphere and wildlife" },
];

const costFactors = ["Sailing date", "Itinerary", "Cruise duration", "Suite category", "Demand", "Season"];

const vsTraditionalRows = [
    ["Purpose-built expedition ship", "Yes", "Not always"],
    ["Luxury suites", "Yes", "Varies"],
    ["Zodiac exploration", "Yes", "Not always"],
    ["Shore landings", "Expedition focused", "Limited or unavailable"],
    ["Expedition specialists", "Yes", "Varies"],
    ["Small-ship atmosphere", "Yes", "Usually larger"],
    ["Fine dining", "Yes", "Varies"],
    ["Wildlife focus", "High", "Moderate"],
    ["Itinerary flexibility", "High", "Lower"],
    ["Luxury service", "High", "Varies"],
];

const tips = [
    { title: "Choose the itinerary before the ship", text: "The destination should drive the decision." },
    { title: "Don't underestimate the weather", text: "Antarctica can be unpredictable." },
    { title: "Bring layers", text: "Layering is much more practical than one huge coat." },
    { title: "Protect your camera", text: "Zodiac spray is real." },
    { title: "Keep binoculars accessible", text: "Wildlife can appear unexpectedly." },
    { title: "Be flexible", text: "The best expedition experiences sometimes happen because the original plan changed." },
    { title: "Don't overpack", text: "You need technical layers, not an enormous wardrobe." },
    { title: "Consider motion sensitivity", text: "The Drake Passage can be rough." },
    { title: "Leave room for photography equipment", text: "Antarctica provides constant photographic opportunities." },
    { title: "Choose a suite you'll enjoy", text: "You're likely to spend more time watching the scenery than you expect." },
];

const whoShouldChoose = ["Luxury travelers", "Couples", "Experienced cruisers", "Wildlife enthusiasts", "Photographers", "Adventure-minded travelers", "Affluent families", "Multigenerational groups", "Travelers seeking a bucket-list experience"];

const whoMayPrefer = ["Lowest possible price", "Maximum expedition intensity", "A very specialized scientific program", "A more casual onboard experience", "A different ship size", "A specific itinerary Seabourn doesn't operate"];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournAntarcticaCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeShipTab, setActiveShipTab] = useState(0);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Antarctica Cruises: Itineraries, Ships & Guide</title>
                <meta name="title" content="Seabourn Antarctica Cruises Guide: Ships, Wildlife & Planning" />
                <meta
                    name="description"
                    content="Explore Seabourn Antarctica cruises, including itineraries, expedition ships, Zodiac landings, wildlife, suites, packing tips, activities and planning advice."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Antarctica Cruises <br /> Complete Guide to Ships, Itineraries & Wildlife</h1>
                    <p>
                        A Seabourn Antarctica cruise combines the adventure of an Antarctic expedition with the comfort and service of an ultra-luxury small ship.
                    </p>
                    {readMore && (
                        <>
                            <p>
                                Instead of experiencing Antarctica only from the deck of a large cruise ship, Seabourn's expedition voyages are designed around Zodiac exploration, shore landings, wildlife encounters, expert-led activities and close-up views of the Antarctic environment. Seabourn's dedicated expedition ships, Seabourn Venture and Seabourn Pursuit, are purpose-built for exploration and provide an intimate alternative to traditional large-ship cruising.
                            </p>
                            <p>
                                For travelers considering Antarctica for the first time, the biggest question isn't simply where the ship goes. It's what the entire expedition experience will be like — from choosing the right itinerary and suite to preparing for Zodiac landings, changing weather and wildlife encounters.
                            </p>
                            <p>
                                This guide covers what to know before booking a Seabourn Antarctica expedition, including ships, routes, wildlife, excursions, suites, packing, physical requirements and planning tips.
                            </p>
                        </>
                    )}
                    <div className="Sbc-hero-readmore-wrapper">
                        <button className="Sbc-hero-readmore-btn" onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Antarctica Expedition
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Short Version</span>
                        <h2 className="Sbc-h2">Is Seabourn a Good Choice <br /> for Antarctica?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is an excellent option for travelers who want Antarctica combined with a luxury cruise experience.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">The strongest reasons to consider Seabourn include:</h4>
                                <ul className="Sbc-highlights-list">
                                    {whyGoodChoice.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                The primary consideration is price. Seabourn sits firmly in the luxury expedition category, so it typically costs more than many conventional expedition operators. For travelers who want to experience Antarctica without giving up luxury, however, that premium can be worthwhile.
                            </p>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Snowflake size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Antarctica Expedition Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHIPS ─────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleet</span>
                        <h2 className="Sbc-h2">Seabourn Antarctica Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's dedicated expedition ships are the foundation of its Antarctic program.
                        </p>
                    </div>

                    <div className="Sbc-ships-tabs-container">
                        <div className="Sbc-ships-tabs-nav">
                            {ships.map((ship, idx) => (
                                <button
                                    key={idx}
                                    className={`Sbc-ship-tab-btn ${activeShipTab === idx ? "active" : ""}`}
                                    onClick={() => setActiveShipTab(idx)}
                                >
                                    <span className="Sbc-tab-ship-name">{ship.name}</span>
                                    <span className="Sbc-tab-ship-meta">{ship.meta}</span>
                                </button>
                            ))}
                        </div>
                        <div className="Sbc-ship-tab-content">
                            <div className="Sbc-ship-tab-image-placeholder">
                                <Ship size={40} className="Sbc-ship-tab-placeholder-icon" />
                                <span className="Sbc-ship-tab-placeholder-text">{ships[activeShipTab].name} Image Placeholder</span>
                            </div>
                            <div className="Sbc-ship-tab-details">
                                <span className="Sbc-ship-tab-meta-badge">{ships[activeShipTab].meta}</span>
                                <h3 className="Sbc-ship-tab-title">{ships[activeShipTab].name}</h3>
                                <p className="Sbc-ship-tab-desc">{ships[activeShipTab].desc}</p>
                                <div className="Sbc-ship-tab-best-title">Best For</div>
                                <ul className="Sbc-ship-tab-tags">
                                    {ships[activeShipTab].best.map((tag, j) => (
                                        <li key={j}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VENTURE VS PURSUIT TABLE ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Aac-ship-compare">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing Between Sailings</span>
                        <h2 className="Sbc-h2">Seabourn Venture vs. <br /> Seabourn Pursuit for Antarctica</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both ships provide a luxury expedition experience, so the itinerary and sailing date should usually be more important than choosing between the ships.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Venture</th>
                                    <th>Seabourn Pursuit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shipCompareRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row[0]}</td>
                                        <td><span className="Aac-table-yes"><Check size={14} strokeWidth={3} />{row[1]}</span></td>
                                        <td><span className="Aac-table-yes"><Check size={14} strokeWidth={3} />{row[2]}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "36px" }}>
                        <p><strong>When comparing sailings, look closely at:</strong> {whenComparing.join(", ")}.</p>
                    </div>
                </div>
            </section>

            {/* ── WHERE DO THEY GO ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-where">
                <div className="Sbc-container">
                    <div className="Aac-where-split">
                        <div className="Aac-where-intro-block">
                            <span className="Sbc-eyebrow">The Route</span>
                            <h2 className="Sbc-h2">Where Do Seabourn Antarctica Cruises Go?</h2>
                            <div className="Sbc-accent-line" style={{ margin: "18px 0 20px" }}></div>
                            <p className="Sbc-p Aac-where-intro-desc">
                                Antarctic itineraries vary by sailing, but expedition routes commonly focus on the Antarctic Peninsula and surrounding islands.
                            </p>
                            <div className="Aac-where-warning">
                                <AlertCircle size={20} className="Aac-where-warning-icon" />
                                <div className="Aac-where-warning-text">
                                    <strong>Itinerary Flexibility:</strong> The exact itinerary should never be treated as guaranteed. Antarctica is an expedition environment, and conditions can influence where the ship can safely travel and where Zodiacs can land.
                                </div>
                            </div>
                        </div>

                        <div className="Aac-where-potential-card">
                            <h4 className="Aac-where-potential-title">Potential Areas of Exploration</h4>
                            <ul className="Aac-where-potential-list">
                                {[
                                    "Antarctic Peninsula",
                                    "South Shetland Islands",
                                    "Antarctic islands",
                                    "Remote bays and coves",
                                    "Penguin colonies",
                                    "Glacier landscapes",
                                    "Ice-filled channels"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={22} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Aac-where-grid">
                        {whereItGoes.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Aac-where-card" key={i}>
                                    <div className="Aac-where-card-header">
                                        <div className="Aac-where-card-icon">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="Sbc-h3">{card.title}</h3>
                                    </div>
                                    <div className="Aac-where-card-body">
                                        <p className="Aac-where-card-text">{card.intro}</p>
                                        {card.subIntro && <p className="Aac-where-card-text Aac-where-card-subtext">{card.subIntro}</p>}

                                        <span className="Aac-where-card-list-label">{card.listLabel}</span>
                                        <ul className="Aac-where-card-list">
                                            {card.listItems.map((item, j) => (
                                                <li key={j}>
                                                    <Check size={16} strokeWidth={2.5} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="Aac-where-card-verdict">
                                        <p>{card.conclusion}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan Your Expedition</span>
                    <h3 className="Sbc-cta-title">Ready to Explore the Antarctic Peninsula?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare Seabourn Venture and Seabourn Pursuit sailing dates, suite categories, and
                        current promotions to find the right Antarctica expedition for you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── TYPICAL DAY ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Aac-typical-day">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Day In Antarctica</span>
                        <h2 className="Sbc-h2">What Is a Typical Seabourn <br /> Antarctica Cruise Like?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            An Antarctic expedition is very different from a conventional port-intensive cruise. A typical day might look something like this — though there is no guarantee that every day will follow this schedule.
                        </p>
                    </div>

                    <div className="Aac-timeline-wrap">
                        <div className="Aac-timeline-track"></div>
                        <div className="Aac-timeline-list">
                            {typicalDay.map((item, i) => (
                                <div className="Aac-timeline-card" key={i}>
                                    <div className="Aac-timeline-node">
                                        <span className="Aac-timeline-node-dot"></span>
                                    </div>
                                    <div className="Aac-timeline-card-content">
                                        <div className="Aac-timeline-card-header">
                                            <span className="Aac-timeline-badge">{item.time}</span>
                                        </div>
                                        <p className="Aac-timeline-card-text">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="Aac-timeline-note">Weather, sea conditions, wildlife and ice can change plans.</p>
                </div>
            </section>

            {/* ── ZODIAC LANDINGS ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-zodiac">
                <div className="Sbc-container">
                    <div className="Sbc-wellness-layout">
                        <div className="Sbc-wellness-content">
                            <div className="Sbc-section-header Sbc-align-left" style={{ marginBottom: "24px" }}>
                                <span className="Sbc-eyebrow">Getting Ashore</span>
                                <h2 className="Sbc-h2" style={{ textAlign: "left", margin: "0 0 16px" }}>Seabourn Antarctica <br /> Zodiac Landings</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 20px" }}></div>
                            </div>
                            <p className="Sbc-wellness-intro">
                                Zodiacs are one of the most important parts of the Antarctic experience. These inflatable expedition boats transport guests between the ship and landing locations and can also be used for wildlife and scenic exploration.
                            </p>
                            <div className="Sbc-wellness-features-card">
                                <h4 className="Sbc-wellness-features-title">A Zodiac excursion may take you:</h4>
                                <ul className="Sbc-wellness-list">
                                    {["Along an iceberg-filled coastline", "Near a penguin colony", "Into a sheltered bay", "Around glaciers", "Along dramatic cliffs", "Toward wildlife observation areas"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-wellness-takeaway">
                                <p className="Sbc-p">
                                    The smaller boats allow travelers to experience Antarctica from a much closer perspective than they would from a conventional cruise ship.
                                </p>
                            </div>
                        </div>
                        <div className="Sbc-wellness-image-container">
                            <div className="Sbc-wellness-image-placeholder">
                                <div className="Sbc-wellness-placeholder-icon-wrapper">
                                    <Anchor size={40} className="Sbc-wellness-placeholder-icon" />
                                </div>
                                <span className="Sbc-wellness-placeholder-text">Seabourn Antarctica Zodiac Landing Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ZODIAC LANDING STEPS ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Aac-zodiac-steps">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Step By Step</span>
                        <h2 className="Sbc-h2">What Is a Zodiac Landing Like?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">A Zodiac landing typically involves:</p>
                    </div>

                    <div className="Aac-steps-grid">
                        {zodiacSteps.map((step, i) => (
                            <div className="Aac-step-card" key={i}>
                                <div className="Aac-step-num">{i + 1}</div>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                    <p className="Aac-timeline-note">Landings can be wet, cold and uneven. That is why appropriate clothing and footwear are essential.</p>
                </div>
            </section>

            {/* ── ARE EXCURSIONS INCLUDED ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-included-qa">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Inclusions</span>
                                <h2 className="Sbc-h2">Are Seabourn Antarctica Zodiac Excursions Included?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Expedition operations are an integral part of the Seabourn Antarctica experience, with Zodiac excursions and expedition activities offered as part of applicable expedition itineraries.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Specific activities and landing opportunities remain dependent on:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Weather", "Ice", "Sea conditions", "Wildlife", "Local regulations", "Safety", "Expedition planning"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>Always check the specific sailing's current inclusions before booking.</span>
                                </div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <CloudSnow size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Antarctica Expedition Activities Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan Your Journey</span>
                    <h3 className="Sbc-cta-title">Let's Find Your Ideal Suite & Sailing</h3>
                    <p className="Sbc-cta-text">
                        We can compare inclusive costs, promotions, and suite amenities to help you build the perfect expedition itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with an Expert
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WILDLIFE ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-wildlife">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What You Might See</span>
                        <h2 className="Sbc-h2">Antarctic Wildlife You May See</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Wildlife is one of the biggest attractions of Antarctica. Potential sightings include:</p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {wildlifeCards.map((card, i) => {
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

            {/* ── ARE SIGHTINGS GUARANTEED ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-guaranteed-qa">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Fish size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Antarctic Wildlife Sightings Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Managing Expectations</span>
                                <h2 className="Sbc-h2">Are Antarctic Wildlife <br /> Sightings Guaranteed?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">No responsible expedition operator can guarantee a specific wildlife encounter.</p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Wild animals move according to:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Food availability", "Weather", "Season", "Sea conditions", "Migration patterns"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">The best approach is to expect wildlife opportunities rather than guaranteed sightings.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PENGUINS / WHALES ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Aac-penguins-whales">
                <div className="Sbc-container">
                    <div className="Aac-wildlife-grid">
                        <div className="Aac-wildlife-card">
                            <div className="Aac-wildlife-card-content">
                                <div className="Aac-wildlife-card-header">
                                    <h3 className="Sbc-h3">Penguins on a Seabourn Antarctica Cruise</h3>
                                    <div className="Aac-wildlife-card-icon">
                                        <Footprints size={24} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <p className="Aac-wildlife-bold-text">
                                    Penguins are often one of the biggest motivations for visiting Antarctica. Watching a colony from shore can be an extraordinary experience.
                                </p>
                                <span className="Aac-wildlife-list-label">You may see penguins:</span>
                                <ul className="Aac-wildlife-list">
                                    {[
                                        "Entering the water",
                                        "Feeding",
                                        "Nesting",
                                        "Walking across snow",
                                        "Interacting with other penguins"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Dot size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Aac-wildlife-note-box">
                                    <p>Travelers should follow all expedition team instructions regarding wildlife distances and landing behavior.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Aac-wildlife-card">
                            <div className="Aac-wildlife-card-content">
                                <div className="Aac-wildlife-card-header">
                                    <h3 className="Sbc-h3">Whale Watching in Antarctica</h3>
                                    <div className="Aac-wildlife-card-icon">
                                        <Fish size={24} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <span className="Aac-wildlife-list-label" style={{ marginTop: "0" }}>Whales can be encountered while:</span>
                                <ul className="Aac-wildlife-list">
                                    {[
                                        "Cruising",
                                        "Traveling by Zodiac",
                                        "Viewing from observation areas",
                                        "Exploring bays and channels"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Dot size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Aac-wildlife-desc-text">
                                    Humpback whales are particularly notable during the Antarctic summer.
                                </p>
                                <div className="Aac-wildlife-note-box">
                                    <p>Whale sightings can be brief, so keeping binoculars and a camera ready is worthwhile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PHOTOGRAPHY & BINOCULARS ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-photography">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Capturing the Moment</span>
                        <h2 className="Sbc-h2">Photography & Binoculars</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-trio-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                        <div className="Sbc-trio-card">
                            <div className="Sbc-trio-head">
                                <div className="Sbc-trio-icon-wrapper"><Camera size={24} strokeWidth={1.5} className="Sbc-trio-icon" /></div>
                                <h3 className="Sbc-h3">Seabourn Antarctica Photography</h3>
                            </div>
                            <p className="Sbc-card-text">
                                Antarctica is an exceptional destination for photography. A telephoto lens is particularly useful for wildlife, while a wide-angle lens is useful for landscapes and large ice formations.
                            </p>
                            <div className="Sbc-trio-features">
                                <span className="Sbc-trio-features-title">Subjects include:</span>
                                <ul className="Sbc-trio-list">
                                    {["Penguins", "Whales", "Icebergs", "Glaciers", "Mountains", "Zodiacs", "Snow-covered landscapes", "Seabirds", "Expedition activities"].map((item, idx) => (
                                        <li key={idx}>
                                            <span className="Sbc-trio-dot"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="Sbc-trio-card">
                            <div className="Sbc-trio-head">
                                <div className="Sbc-trio-icon-wrapper"><Binoculars size={24} strokeWidth={1.5} className="Sbc-trio-icon" /></div>
                                <h3 className="Sbc-h3">Binoculars on Venture and Pursuit</h3>
                            </div>
                            <p className="Sbc-card-text">
                                Seabourn provides Swarovski Optik binoculars in every suite aboard Seabourn Venture and Seabourn Pursuit. This is useful because Antarctic wildlife can often be observed from a considerable distance.
                            </p>
                            <div className="Sbc-trio-features">
                                <span className="Sbc-trio-features-title">You can use binoculars from:</span>
                                <ul className="Sbc-trio-list">
                                    {["Your suite", "Observation areas", "Outdoor decks", "Zodiacs"].map((item, idx) => (
                                        <li key={idx}>
                                            <span className="Sbc-trio-dot"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Antarctica Gear & Advice</span>
                    <h3 className="Sbc-cta-title">Start Planning Your Antarctica Packing List</h3>
                    <p className="Sbc-cta-text">
                        We'll walk you through Seabourn's pre-cruise requirements and help you pack the right layers, footwear and gear for your expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Packing Help
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SUITES ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Antarctica Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            After spending several hours in a Zodiac or on shore, having a comfortable private suite becomes particularly valuable. Depending on the category, travelers can choose suites with ocean views, verandas, larger living areas, premium amenities and additional space.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Home size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Best Seabourn Suite for Antarctica Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Best Seabourn Suite for Antarctica</h3>
                                <p className="Sbc-p" style={{ marginBottom: "20px" }}>There isn't one universally best suite. However, travelers should consider:</p>
                                <ul className="Sbc-suite-feature-list" style={{ gridTemplateColumns: '1fr', gap: '25px' }}>
                                    {suiteBestFor.map((f, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span><strong>{f.title}:</strong> {f.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-suite-card Sbc-suite-card-dark">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Gem size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Veranda Suite Antarctica Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Should You Book a Veranda Suite for Antarctica?</h3>
                                <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                    For many travelers, yes. Antarctica is a destination where the scenery is constantly changing. A private veranda provides another opportunity to observe:
                                </p>
                                <ul className="Sbc-wintergarden-list">
                                    {["Icebergs", "Glaciers", "Wildlife", "Mountains", "Passing Zodiacs"].map((item, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ marginTop: "20px" }}>
                                    You don't have to spend every moment outside to enjoy the scenery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING / EXPEDITION TEAM ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard & Enrichment</span>
                        <h2 className="Sbc-h2">Seabourn Antarctica Dining <br /> & Expedition Team</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Antarctic expedition does not mean sacrificing luxury dining. For many travelers, this is one of Seabourn's biggest advantages over more rugged expedition experiences.
                        </p>
                    </div>

                    <div className="Sbc-dining-grid">
                        <div className="Sbc-dining-card">
                            <div className="Sbc-dining-image-placeholder">
                                <div className="Sbc-dining-placeholder-icon-wrapper"><Utensils size={24} className="Sbc-dining-placeholder-icon" /></div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Antarctica Dining Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">After a Day of Exploration</h3>
                            <p className="Sbc-card-text">Guests can return to the ship for breakfast, lunch, dinner, specialty dining, casual dining, in-suite dining and beverages.</p>
                        </div>
                        <div className="Sbc-dining-card">
                            <div className="Sbc-dining-image-placeholder">
                                <div className="Sbc-dining-placeholder-icon-wrapper"><Users size={24} className="Sbc-dining-placeholder-icon" /></div>
                                <span className="Sbc-dining-placeholder-text">Seabourn Expedition Team Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">The Expedition Team</h3>
                            <p className="Sbc-card-text">The expedition team adds an educational dimension to the trip. Specialists may discuss Antarctic wildlife, marine biology, geology, history, exploration, climate, photography and conservation.</p>
                        </div>
                        <div className="Sbc-dining-card">
                            <div className="Sbc-dining-image-placeholder">
                                <div className="Sbc-dining-placeholder-icon-wrapper"><Sun size={24} className="Sbc-dining-placeholder-icon" /></div>
                                <span className="Sbc-dining-placeholder-text">Expedition Presentations Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-card-title">Presentations & Context</h3>
                            <p className="Sbc-card-text">These presentations can help travelers better understand what they are seeing during the expedition, adding depth to each landing and Zodiac excursion.</p>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── OLDER TRAVELERS ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-mobility-qa">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Suitability</span>
                                <h2 className="Sbc-h2">Is Seabourn Antarctica Suitable for Older Travelers?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                It can be, provided the traveler is comfortable with the physical requirements of expedition operations. Age itself isn't the primary consideration — mobility is more important.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Travelers should consider whether they can:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Get in and out of a Zodiac", "Walk on uneven surfaces", "Stand for extended periods", "Handle cold conditions", "Follow expedition safety instructions"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>If mobility is limited, discuss the specific sailing and activity requirements with a travel advisor before booking.</span>
                                </div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Antarctica Mobility & Accessibility Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW ACTIVE ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Activity Level</span>
                        <h2 className="Sbc-h2">How Active Is a Seabourn <br /> Antarctica Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">The answer depends on how much you choose to participate. However, not every guest needs to participate in the most physically demanding activities.</p>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card">
                            <div className="Sbc-atmos-card-title">Possible Activities Can Involve</div>
                            <ul>
                                {["Zodiac boarding", "Shore landings", "Walking", "Hiking", "Kayaking", "Standing", "Uneven terrain"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card">
                            <div className="Sbc-atmos-card-title">You Can Also Enjoy Antarctica Through</div>
                            <ul>
                                {["Scenic cruising", "Wildlife observation", "Lectures", "Photography", "Observation decks", "Zodiac sightseeing"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── CTA 4 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Accommodations</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Antarctica Suite</h3>
                    <p className="Sbc-cta-text">
                        From a private veranda to watch passing icebergs to a midship location for added stability,
                        let's help you select the ideal Antarctica suite category.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHO IS IT FOR (COUPLES / FAMILIES / SOLO) ────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Couples, Families & Solo Travelers</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-fit-grid">
                        {bestForCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-card-icon"><Icon size={22} strokeWidth={1.5} /></div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <ul>
                                        {card.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── PACKING ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Get Ready</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn <br /> Antarctica Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Packing for Antarctica requires a different approach from packing for a conventional cruise. Think in layers rather than one extremely heavy outfit.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Clothing</div>
                            <ul>
                                {["Thermal base layers", "Fleece layers", "Waterproof outer layer", "Waterproof trousers", "Warm socks", "Gloves", "Hat", "Neck warmer"].map((item, j) => (
                                    <li key={j}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Expedition Gear</div>
                            <ul>
                                {["Small backpack", "Waterproof phone case", "Sunglasses", "Sunscreen", "Reusable water bottle", "Appropriate waterproof footwear"].map((item, j) => (
                                    <li key={j}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Photography</div>
                            <ul>
                                {["Camera", "Telephoto lens", "Wide-angle lens", "Extra batteries", "Extra memory cards", "Waterproof camera protection"].map((item, j) => (
                                    <li key={j}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Travel Essentials</div>
                            <ul>
                                {["Passport", "Travel documents", "Medications", "Chargers", "Appropriate adapters"].map((item, j) => (
                                    <li key={j}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-includes-note">
                        <p><strong>What should you wear on the ship?</strong> You don't need to spend the entire cruise dressed for Antarctica. A useful strategy is: expedition clothing during the day → comfortable luxury-casual clothing onboard → evening attire for dinner.</p>
                        <p>Always follow Seabourn's pre-cruise packing instructions because equipment and clothing requirements can vary.</p>
                    </div>
                </div>
            </section>

            {/* ── BEST TIME ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timing Your Trip</span>
                        <h2 className="Sbc-h2">Best Time to Take a Seabourn <br /> Antarctica Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Antarctica's cruise season occurs during the Southern Hemisphere summer. The season generally runs from approximately November through March, although the exact sailing calendar varies. There isn't one perfect month for every traveler.
                        </p>
                    </div>

                    <div className="Aac-month-grid">
                        {monthData.map((m, i) => (
                            <div className="Aac-month-card" key={i}>
                                <h4>{m.m}</h4>
                                <p>{m.h}</p>
                            </div>
                        ))}
                    </div>

                    <div className="Sbc-compare-key" style={{ marginTop: "36px" }}>
                        <p><strong>How long should you spend in Antarctica?</strong> Longer isn't automatically better, but additional expedition time can provide more opportunities for wildlife encounters, shore landings, Zodiac exploration, scenic cruising and weather flexibility. When comparing itineraries, look beyond the total cruise length and ask: how much time is actually devoted to Antarctic exploration?</p>
                    </div>
                </div>
            </section>

            {/* ── SEASONS COMPARISON (Ssf-table) ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Aac-seasons-compare">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At a Glance</span>
                        <h2 className="Sbc-h2">Seabourn Antarctica: November vs. December vs. January vs. February</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The best sailing depends on what matters most to you.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th>Potential Highlights</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { period: "November", highlights: "Ice, early-season landscapes" },
                                    { period: "December", highlights: "Long daylight, active wildlife" },
                                    { period: "January", highlights: "Peak summer expedition conditions" },
                                    { period: "February", highlights: "Wildlife and whale opportunities" },
                                    { period: "March", highlights: "Late-season atmosphere and wildlife" }
                                ].map((row, idx) => (
                                    <tr key={idx}>
                                        <td>{row.period}</td>
                                        <td>{row.highlights}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── CTA 5 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Timing & Seasonality</span>
                    <h3 className="Sbc-cta-title">Choose the Best Month for Your Antarctic Voyage</h3>
                    <p className="Sbc-cta-text">
                        From early-season ice landscapes to peak summer daylight and late-season whale watching, let's find the best departure dates for you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        View Antarctica Sailings
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── COST SECTION (Aac-cost) ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Aac-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Budgeting</span>
                        <h2 className="Sbc-h2">Seabourn Antarctica Cruise Cost</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Aac-cost-grid">
                        {/* Column 1: Factors */}
                        <div className="Aac-cost-card">
                            <h3 className="Aac-cost-card-title">The cost of a Seabourn Antarctica cruise depends on:</h3>
                            <ul className="Aac-cost-list">
                                {[
                                    "Sailing date",
                                    "Itinerary",
                                    "Cruise duration",
                                    "Suite category",
                                    "Demand",
                                    "Season"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Aac-list-icon-circle">
                                            <Check size={12} strokeWidth={3} style={{ color: "var(--navy)" }} />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Aac-cost-note-box">
                                <p>It is important to compare the total value, not simply the advertised fare.</p>
                            </div>
                        </div>

                        {/* Column 2: Inclusions */}
                        <div className="Aac-cost-card">
                            <h3 className="Aac-cost-card-title">Consider what's included:</h3>
                            <ul className="Aac-cost-list">
                                {[
                                    "Suite accommodation",
                                    "Dining",
                                    "Beverages",
                                    "Expedition activities",
                                    "Zodiac operations",
                                    "Expedition team",
                                    "Wi-Fi",
                                    "Gratuities",
                                    "Onboard service"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Aac-list-icon-circle">
                                            <Check size={12} strokeWidth={3} style={{ color: "var(--navy)" }} />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Aac-cost-note-box">
                                <p>Airfare, hotels before or after the cruise, travel insurance and personal expenses may be additional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WORTH IT ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is a Seabourn Antarctica <br /> Cruise Worth the Money?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Antarctica Value Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <p className="Sbc-worth-intro">For travelers who prioritize luxury, comfort and expedition access, it can be.</p>
                            <p className="Sbc-worth-text">You are paying for more than transportation to Antarctica.</p>

                            <div className="Sbc-worth-card">
                                <h4 className="Sbc-worth-card-title">You're purchasing an integrated experience that combines:</h4>
                                <div className="Sbc-worth-formula-row">
                                    <span>Remote destination</span><span className="Sbc-worth-plus">+</span>
                                    <span>purpose-built ship</span><span className="Sbc-worth-plus">+</span>
                                    <span>expedition specialists</span><span className="Sbc-worth-plus">+</span>
                                    <span>Zodiac operations</span><span className="Sbc-worth-plus">+</span>
                                    <span>luxury accommodation</span><span className="Sbc-worth-plus">+</span>
                                    <span>fine dining</span><span className="Sbc-worth-plus">+</span>
                                    <span>personalized service</span>
                                </div>
                            </div>

                            <p className="Sbc-worth-value-desc">For budget-conscious travelers, other expedition operators may provide a lower-cost path to Antarctica. For luxury travelers, Seabourn's combination can be compelling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VS TRADITIONAL CRUISE TABLE ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Aac-vs-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Antarctica vs. <br /> Traditional Antarctica Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">The biggest difference is how you experience Antarctica.</p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Expedition</th>
                                    <th>Traditional Cruise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vsTraditionalRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row[0]}</td>
                                        <td>
                                            {row[1] === "Yes" ? <span className="Aac-table-yes"><Check size={14} strokeWidth={3} />Yes</span> : <span>{row[1]}</span>}
                                        </td>
                                        <td>
                                            {row[2] === "Not always" || row[2] === "Varies" || row[2] === "Limited or unavailable" || row[2] === "Lower" || row[2] === "Moderate" || row[2] === "Usually larger" ? <span className="Aac-table-no">{row[2]}</span> : <span>{row[2]}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── VS OTHER LUXURY OPERATORS ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-others">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Shopping Around</span>
                        <h2 className="Sbc-h2">Seabourn vs. Other Luxury Antarctica Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Aac-compare-grid">
                        <div className="Aac-compare-card">
                            <h3 className="Aac-compare-card-title">Travelers considering Seabourn may also compare:</h3>
                            <ul className="Aac-compare-list">
                                {[
                                    "Silversea Expeditions",
                                    "Scenic Eclipse",
                                    "Ponant",
                                    "Lindblad Expeditions",
                                    "Atlas Ocean Voyages"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Aac-list-icon-circle">
                                            <Check size={12} strokeWidth={3} style={{ color: "var(--navy)" }} />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Aac-compare-card">
                            <h3 className="Aac-compare-card-title">When comparing luxury expedition operators, look at:</h3>
                            <ul className="Aac-compare-list Aac-compare-grid-list">
                                {[
                                    "Ship size",
                                    "Suite configuration",
                                    "Expedition equipment",
                                    "Number of expedition specialists",
                                    "Dining",
                                    "Included beverages",
                                    "Wi-Fi",
                                    "Gratuities",
                                    "Shore activities",
                                    "Kayaking",
                                    "Zodiac operations",
                                    "Itinerary length",
                                    "Price"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Aac-list-icon-circle">
                                            <Check size={12} strokeWidth={3} style={{ color: "var(--navy)" }} />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Aac-compare-verdict-box">
                        <p>The cheapest cruise isn't necessarily the best value.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA 6 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Value & Luxury</span>
                    <h3 className="Sbc-cta-title">Evaluate Inclusions for the Best Value</h3>
                    <p className="Sbc-cta-text">
                        Compare Antarctica cruise rates, suite configurations, and standard inclusions to find the best value for your expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Cruise Rates
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Pros and Cons of a Seabourn <br /> Antarctica Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Pros</h3>
                            <ul>
                                {proscons.pros.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Cons</h3>
                            <ul>
                                {proscons.cons.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME TIPS ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Aac-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Go</span>
                        <h2 className="Sbc-h2">First-Time Seabourn <br /> Antarctica Tips</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Aac-tips-grid">
                        {tips.map((tip, i) => (
                            <div className="Aac-tip-card" key={i}>
                                <div className="Aac-tip-num">{i + 1}</div>
                                <div>
                                    <h4>{tip.title}</h4>
                                    <p>{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE / WHO SHOULD LOOK ELSEWHERE ────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-who-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Is It Right For You?</span>
                        <h2 className="Sbc-h2">Who Should Choose Seabourn Antarctica?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Aac-suitability-grid">
                        <div className="Aac-suitability-card">
                            <div className="Aac-suitability-card-header">
                                <h3 className="Sbc-h3">Seabourn Antarctica Is Particularly Well Suited To</h3>
                                <div className="Aac-suitability-card-icon">
                                    <Gem size={24} strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="Aac-suitability-card-body">
                                <ul className="Aac-suitability-list">
                                    {whoShouldChoose.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="Aac-list-icon-circle">
                                                <Check size={12} strokeWidth={3} style={{ color: "var(--navy)" }} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Aac-suitability-card">
                            <div className="Aac-suitability-card-header">
                                <h3 className="Sbc-h3">Who May Prefer Another Antarctica Operator?</h3>
                                <div className="Aac-suitability-card-icon Aac-suitability-card-icon-x">
                                    <X size={24} strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="Aac-suitability-card-body">
                                <ul className="Aac-suitability-list">
                                    {whoMayPrefer.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="Aac-list-icon-circle Aac-list-icon-circle-x">
                                                <X size={12} strokeWidth={3} style={{ color: "#ef4444" }} />
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

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About <br /> Seabourn Antarctica Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">Everything travelers need to know before booking a Seabourn Antarctica expedition.</p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Antarctica Cruise Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Antarctica Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Antarctica cruises are an excellent choice for travelers who want Antarctica without sacrificing luxury. The combination of Seabourn Venture or Seabourn Pursuit, Zodiac exploration, expert expedition teams, wildlife opportunities, luxury suites and fine dining creates a very different experience from a standard cruise.
                        </p>
                        <p className="Sbc-p">
                            The most important thing to understand is that Antarctica cannot be controlled. Weather can change the schedule. Ice can alter a route. Wildlife may appear unexpectedly. A planned landing may become impossible. That uncertainty isn't a flaw — it is what makes an Antarctic expedition an expedition.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> For travelers who embrace that flexibility and want to experience one of the world's most extraordinary destinations in comfort, Seabourn Antarctica is worth serious consideration.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Antarctica Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournAntarcticaCruisesGuide;