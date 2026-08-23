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
    Gem,
    Heart,
    Compass,
    Utensils,
    Landmark,
    Mountain,
    Snowflake,
    Camera,
    Home,
    MessageCircle,
    Users,
    Award,
    AlertCircle,
    Binoculars,
    Backpack,
    Footprints,
    Sailboat,
    CloudRain,
    Thermometer,
    Sunrise,
    CloudSun,
    Sunset,
    Moon,
    Star,
    MapPin,
    Dot,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "./Seabournexpeditioncruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/expeditions/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/expeditions/",
            name: "Seabourn Expedition Cruises: Ships, Destinations & Activities",
            description:
                "Explore Seabourn expedition cruises to Antarctica, the Arctic, Alaska, Kimberley and remote destinations. Compare ships, activities, equipment, suites and inclusions.",
            inLanguage: "en-US",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/expeditions/#article",
            headline: "Seabourn Expedition Cruises: Complete Guide to Ships, Destinations, Activities & Inclusions",
            description:
                "A complete guide to Seabourn expedition cruises, covering expedition ships, destinations, activities, equipment, suites, inclusions, wildlife experiences and what travelers should expect.",
            author: { "@type": "Person", name: "Angela Hughes" },
            publisher: { "@type": "Organization", name: "Trips & Ships Luxury Travel" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/expeditions/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Expedition Cruises", item: "https://www.tripsandships.com/seabourn-cruises/expeditions/" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/expeditions/#faq",
            mainEntity: [
                { "@type": "Question", name: "What are Seabourn expedition cruises?", acceptedAnswer: { "@type": "Answer", text: "Seabourn expedition cruises combine luxury cruising with exploration of remote destinations using purpose-built expedition ships, Zodiacs, kayaks and expert-led activities." } },
                { "@type": "Question", name: "What ships does Seabourn use for expeditions?", acceptedAnswer: { "@type": "Answer", text: "Seabourn's dedicated expedition ships are Seabourn Venture and Seabourn Pursuit." } },
                { "@type": "Question", name: "Where do Seabourn expedition cruises go?", acceptedAnswer: { "@type": "Answer", text: "Destinations can include Antarctica, the Arctic, Greenland, Alaska, the Kimberley, Patagonia, Indonesia, Papua New Guinea and other remote regions, depending on the season and itinerary." } },
                { "@type": "Question", name: "Does Seabourn go to Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Antarctica is one of Seabourn's major expedition destinations and offers opportunities for Zodiac exploration, wildlife observation, shore landings and photography." } },
                { "@type": "Question", name: "Does Seabourn expedition cruising include Zodiac excursions?", acceptedAnswer: { "@type": "Answer", text: "Zodiac operations are a core part of the expedition experience, allowing guests to explore remote coastlines and access shore landing locations. Specific excursions depend on weather, local conditions and the itinerary." } },
                { "@type": "Question", name: "Does Seabourn offer kayaking?", acceptedAnswer: { "@type": "Answer", text: "Yes. Kayaking is available on applicable expedition itineraries, subject to weather, sea conditions, safety requirements and local circumstances." } },
                { "@type": "Question", name: "Does Seabourn provide binoculars?", acceptedAnswer: { "@type": "Answer", text: "Yes. Swarovski Optik binoculars are provided in every suite aboard Seabourn Venture and Seabourn Pursuit." } },
                { "@type": "Question", name: "Are Seabourn expedition cruises all-inclusive?", acceptedAnswer: { "@type": "Answer", text: "Seabourn includes many components of the luxury expedition experience, including dining, selected beverages, Wi-Fi, gratuities and expedition activities depending on the sailing. Travelers should review the specific inclusions for their itinerary." } },
                { "@type": "Question", name: "Are Seabourn expedition cruises expensive?", acceptedAnswer: { "@type": "Answer", text: "They are positioned at the luxury end of the expedition market. Prices vary based on destination, sailing date, cruise length, suite category and demand." } },
                { "@type": "Question", name: "Are Seabourn expedition cruises physically demanding?", acceptedAnswer: { "@type": "Answer", text: "Some activities can be physically demanding because they may involve Zodiac boarding, uneven terrain, hiking or wet landings. The difficulty varies considerably by destination and excursion." } },
                { "@type": "Question", name: "Are Seabourn expedition cruises good for families?", acceptedAnswer: { "@type": "Answer", text: "They can be excellent for families with older children or teenagers who enjoy wildlife, science, nature and adventure. However, the experience is more expedition-focused than a conventional family cruise." } },
                { "@type": "Question", name: "Are Seabourn expedition cruises good for solo travelers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shared expedition activities, lectures, Zodiac excursions and small-ship dining create natural opportunities for solo travelers to meet other guests." } },
                { "@type": "Question", name: "What should I pack for a Seabourn expedition cruise?", acceptedAnswer: { "@type": "Answer", text: "Pack layers, waterproof clothing, comfortable footwear, weather protection, a small backpack and appropriate camera equipment. Polar itineraries require additional cold-weather clothing." } },
                { "@type": "Question", name: "Can Seabourn expedition itineraries change?", acceptedAnswer: { "@type": "Answer", text: "Yes. Expedition itineraries can change because of weather, sea conditions, wildlife, ice, local regulations and landing conditions. Flexibility is an inherent part of expedition cruising." } },
                { "@type": "Question", name: "Is Seabourn Venture an expedition ship?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Venture is a purpose-built expedition ship designed to operate in remote environments while providing Seabourn's luxury suite and service experience." } },
                { "@type": "Question", name: "Is Seabourn Pursuit an expedition ship?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Pursuit is Seabourn's second dedicated expedition ship and is designed for remote exploration and wildlife-focused itineraries." } },
                { "@type": "Question", name: "What is the difference between a Seabourn expedition cruise and a regular Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "An expedition cruise places much greater emphasis on remote destinations, wildlife, Zodiac exploration, kayaking, shore landings and expert-led discovery. Traditional Seabourn cruises generally focus more on ports, relaxation and classic luxury cruising." } },
                { "@type": "Question", name: "Is Seabourn good for an Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Seabourn can be an excellent choice for travelers who want an Antarctic expedition combined with luxury suites, fine dining, personalized service and expedition activities." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reuses Sbc-faq- classes) ─────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What are Seabourn expedition cruises?", a: "Seabourn expedition cruises combine luxury cruising with exploration of remote destinations using purpose-built expedition ships, Zodiacs, kayaks and expert-led activities." },
        { q: "What ships does Seabourn use for expeditions?", a: "Seabourn's dedicated expedition ships are Seabourn Venture and Seabourn Pursuit." },
        { q: "Where do Seabourn expedition cruises go?", a: "Destinations can include Antarctica, the Arctic, Greenland, Alaska, the Kimberley, Patagonia, Indonesia, Papua New Guinea and other remote regions, depending on the season and itinerary." },
        { q: "Does Seabourn go to Antarctica?", a: "Yes. Antarctica is one of Seabourn's major expedition destinations and offers opportunities for Zodiac exploration, wildlife observation, shore landings and photography." },
        { q: "Does Seabourn expedition cruising include Zodiac excursions?", a: "Zodiac operations are a core part of the expedition experience, allowing guests to explore remote coastlines and access shore landing locations. Specific excursions depend on weather, local conditions and the itinerary." },
        { q: "Does Seabourn offer kayaking?", a: "Yes. Kayaking is available on applicable expedition itineraries, subject to weather, sea conditions, safety requirements and local circumstances." },
        { q: "Does Seabourn provide binoculars?", a: "Yes. Swarovski Optik binoculars are provided in every suite aboard Seabourn Venture and Seabourn Pursuit." },
        { q: "Are Seabourn expedition cruises all-inclusive?", a: "Seabourn includes many components of the luxury expedition experience, including dining, selected beverages, Wi-Fi, gratuities and expedition activities depending on the sailing. Travelers should review the specific inclusions for their itinerary." },
        { q: "Are Seabourn expedition cruises expensive?", a: "They are positioned at the luxury end of the expedition market. Prices vary based on destination, sailing date, cruise length, suite category and demand." },
        { q: "Are Seabourn expedition cruises physically demanding?", a: "Some activities can be physically demanding because they may involve Zodiac boarding, uneven terrain, hiking or wet landings. The difficulty varies considerably by destination and excursion." },
        { q: "Are Seabourn expedition cruises good for families?", a: "They can be excellent for families with older children or teenagers who enjoy wildlife, science, nature and adventure. However, the experience is more expedition-focused than a conventional family cruise." },
        { q: "Are Seabourn expedition cruises good for solo travelers?", a: "Yes. Shared expedition activities, lectures, Zodiac excursions and small-ship dining create natural opportunities for solo travelers to meet other guests." },
        { q: "What should I pack for a Seabourn expedition cruise?", a: "Pack layers, waterproof clothing, comfortable footwear, weather protection, a small backpack and appropriate camera equipment. Polar itineraries require additional cold-weather clothing." },
        { q: "Can Seabourn expedition itineraries change?", a: "Yes. Expedition itineraries can change because of weather, sea conditions, wildlife, ice, local regulations and landing conditions. Flexibility is an inherent part of expedition cruising." },
        { q: "Is Seabourn Venture an expedition ship?", a: "Yes. Seabourn Venture is a purpose-built expedition ship designed to operate in remote environments while providing Seabourn's luxury suite and service experience." },
        { q: "Is Seabourn Pursuit an expedition ship?", a: "Yes. Seabourn Pursuit is Seabourn's second dedicated expedition ship and is designed for remote exploration and wildlife-focused itineraries." },
        { q: "What is the difference between a Seabourn expedition cruise and a regular Seabourn cruise?", a: "An expedition cruise places much greater emphasis on remote destinations, wildlife, Zodiac exploration, kayaking, shore landings and expert-led discovery. Traditional Seabourn cruises generally focus more on ports, relaxation and classic luxury cruising." },
        { q: "Is Seabourn good for an Antarctica cruise?", a: "Seabourn can be an excellent choice for travelers who want an Antarctic expedition combined with luxury suites, fine dining, personalized service and expedition activities." },
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
const quickAnswerList = [
    "Remote destinations", "Small-ship exploration", "Luxury suites", "Fine dining",
    "Personalized service", "Expert expedition teams", "Wildlife encounters",
    "Guided shore excursions", "Zodiac exploration", "Kayaking and nature activities",
    "An intimate onboard atmosphere",
];

const expShips = [
    {
        name: "Seabourn Venture",
        desc: "Seabourn Venture was designed specifically for expedition cruising. It combines expedition capabilities with the suite accommodation, dining and service associated with the Seabourn brand. The ship is designed for destinations where conventional cruise ships cannot easily operate.",
        features: ["Purpose-built expedition design", "Polar capabilities", "Luxury oceanfront suites", "Private verandas", "Multiple dining venues", "Expedition lounges", "Outdoor viewing areas", "Zodiacs", "Kayaks", "Expedition equipment", "Expert expedition team"],
    },
    {
        name: "Seabourn Pursuit",
        desc: "Seabourn Pursuit is the second purpose-built expedition ship in the fleet. Like Venture, Pursuit combines a relatively intimate ship size with expedition equipment and luxury accommodations. The ship is designed to explore destinations where access and scenery are more important than conventional cruise amenities.",
        features: ["Wildlife", "Remote landscapes", "Expedition activities", "Expert-led exploration", "Scenic cruising", "Cultural encounters", "Photography", "Small-group discovery"],
    },
];

const ventureVsPursuit = [
    "Purpose-built expedition ship", "Luxury suites", "Private verandas", "Zodiac operations",
    "Kayaking", "Expedition team", "Polar destinations", "Remote destinations", "Luxury dining",
];

const expDestinations = [
    {
        icon: Snowflake,
        title: "Antarctica",
        subtitle: "Seabourn Antarctica Cruises",
        desc: "Antarctica is one of the strongest reasons to consider a Seabourn expedition cruise. A typical Antarctic expedition is less about checking off individual ports and more about experiencing the environment. Weather and ice conditions can influence the itinerary, which is part of the expedition experience.",
        listLabel: "The region offers:",
        listItems: ["Icebergs", "Penguins", "Seals", "Whales", "Remote landscapes", "Glaciers", "Snow-covered mountains", "Polar photography", "Zodiac exploration"],
        best: "",
    },
    {
        icon: Compass,
        title: "Arctic",
        subtitle: "Seabourn Arctic Cruises",
        desc: "Seabourn's northern expedition itineraries can take travelers into remote Arctic environments. The Arctic is particularly attractive for travelers who want a combination of wildlife, scenery and cultural exploration.",
        listLabel: "Depending on the itinerary, travelers may encounter:",
        listItems: ["Arctic wildlife", "Glaciers", "Ice", "Remote settlements", "Dramatic fjords", "Indigenous cultures", "Polar landscapes"],
        best: "",
    },
    {
        icon: Mountain,
        title: "Alaska",
        subtitle: "Seabourn Alaska Expedition Cruises",
        desc: "Alaska offers a different type of expedition experience. Instead of primarily focusing on polar environments, a smaller expedition ship can provide access to areas that are difficult to experience from larger cruise ships.",
        listLabel: "Alaska combines:",
        listItems: ["Glaciers", "Mountains", "Whales", "Bears", "Eagles", "Coastal forests", "Remote communities", "Indigenous culture"],
        best: "",
    },
    {
        icon: Anchor,
        title: "Kimberley",
        subtitle: "Seabourn Kimberley Expeditions",
        desc: "Australia's Kimberley region is another major expedition destination. The Kimberley is particularly appealing to travelers who want an expedition experience without traveling to a polar environment.",
        listLabel: "This remote region is known for:",
        listItems: ["Dramatic coastlines", "Waterfalls", "Gorges", "Aboriginal culture", "Wildlife", "Ancient landscapes", "Remote beaches"],
        best: "",
    },
];

const dayParts = [
    { icon: Sunrise, label: "Morning", text: "Wake up to a changing polar landscape and attend an expedition briefing." },
    { icon: CloudSun, label: "Late Morning", text: "Board Zodiacs for a landing or wildlife observation." },
    { icon: Sunset, label: "Afternoon", text: "Return to the ship, attend a lecture or photograph wildlife from the decks." },
    { icon: Moon, label: "Evening", text: "Enjoy dinner while discussing the day's sightings with fellow travelers and expedition specialists." },
];

const activityCards = [
    { icon: Sailboat, title: "Zodiac Excursions", text: "Reach remote shorelines, approach wildlife and access locations larger ships cannot reach." },
    { icon: Waves, title: "Kayaking", text: "Experience calm bays, fjords and glacier environments at water level." },
    { icon: Footprints, title: "Hiking & Shore Landings", text: "Guided walks ranging from easy strolls to uneven, snow-covered terrain." },
    { icon: Binoculars, title: "Wildlife Observation", text: "Close encounters with penguins, whales, bears, seabirds and more." },
    { icon: Camera, title: "Photography", text: "Capture icebergs, landscapes, glaciers and wildlife with expert guidance." },
    { icon: Ship, title: "Scenic Cruising", text: "Take in dramatic coastlines and remote landscapes from the ship's decks." },
    { icon: Landmark, title: "Cultural Encounters", text: "Meet remote communities and learn about Indigenous culture and history." },
    { icon: MessageCircle, title: "Expedition Lectures", text: "Presentations from specialists between landings and excursions." },
];

const excursionTrio = [
    {
        icon: Sailboat,
        title: "Zodiac Expeditions",
        text: "Zodiacs are central to the Seabourn expedition experience. These inflatable expedition boats allow guests to reach remote shorelines and approach wildlife.",
        listLabel: "Zodiacs allow guests to:",
        items: ["Reach remote shorelines", "Explore bays and fjords", "Approach wildlife", "Visit beaches", "Navigate around ice"],
        note: "A Zodiac excursion is often one of the most memorable parts of an expedition cruise.",
    },
    {
        icon: Waves,
        title: "Kayaking",
        text: "Kayaking provides another way to experience the destination at water level, depending on the itinerary and local conditions.",
        listLabel: "Guests may kayak through:",
        items: ["Calm bays", "Fjords", "Remote coastlines", "Glacier environments", "Sheltered waterways"],
        note: "Kayaking is generally subject to weather and sea conditions, so it should not be considered guaranteed on every sailing.",
    },
    {
        icon: Footprints,
        title: "Hiking & Shore Exploration",
        text: "Seabourn expedition cruises can also include guided walks and hikes. The difficulty varies by landing.",
        listLabel: "Some landings may involve:",
        items: ["Uneven terrain", "Rocks", "Mud", "Snow", "Steep sections", "Long walks"],
        note: "Travelers should review the activity descriptions before booking if mobility is a concern.",
    },
];

const wildlifeByRegion = [
    { title: "Antarctica", items: ["Penguins", "Whales", "Seals", "Seabirds"] },
    { title: "Arctic", items: ["Polar bears", "Walrus", "Seals", "Arctic birds", "Whales"] },
    { title: "Alaska", items: ["Humpback whales", "Orcas", "Bears", "Eagles", "Sea otters"] },
    { title: "Kimberley", items: ["Crocodiles", "Birds", "Marine life", "Native wildlife"] },
];

const regionIcons = {
    "Antarctica": Snowflake,
    "Arctic": Compass,
    "Alaska": Mountain,
    "Kimberley": Anchor
};

const teamTrio = [
    {
        icon: Compass,
        title: "Expedition Team",
        text: "The expedition team is one of the most important components of the experience. ",
        listLabel: "Specialists can provide insight into:",
        items: ["Wildlife", "Marine biology", "Geology", "History", "Photography", "Local culture", "Conservation"],
        note: "Expert-led exploration adds educational depth to every landing.",
    },
    {
        icon: MessageCircle,
        title: "Expedition Lectures",
        text: "Between landings and excursions, expedition specialists can provide presentations about the destination.",
        listLabel: "Topics can include:",
        items: ["Wildlife", "Geography", "History", "Exploration", "Indigenous communities", "Oceanography", "Climate"],
        note: "These sessions are particularly valuable when preparing for the next landing.",
    },
    {
        icon: Camera,
        title: "Photography",
        text: "Expedition cruising is an excellent fit for travelers interested in photography, from wildlife to remote landscapes.",
        listLabel: "A good strategy is to bring:",
        items: ["Camera with weather protection", "Telephoto lens", "Wide-angle lens", "Extra batteries", "Waterproof protection"],
        note: "Even smartphone users should consider waterproof protection since Zodiac conditions can be wet.",
    },
];

const packingCards = [
    { icon: Backpack, title: "Layering", text: "Bring multiple lightweight layers rather than one extremely heavy jacket." },
    { icon: CloudRain, title: "Waterproof Clothing", text: "Rain and spray can occur during Zodiac operations." },
    { icon: Footprints, title: "Comfortable Footwear", text: "Choose shoes suitable for wet and uneven terrain." },
    { icon: Thermometer, title: "Gloves & Hat", text: "Particularly important for polar itineraries." },
    { icon: Camera, title: "Camera Equipment", text: "Bring weather protection and extra batteries." },
    { icon: Binoculars, title: "Binoculars", text: "Seabourn provides binoculars, but some travelers may still prefer their own." },
    { icon: Backpack, title: "Small Backpack", text: "Useful for shore excursions." },
    { icon: CloudRain, title: "Waterproof Phone Protection", text: "Particularly useful for Zodiac rides." },
];

const bestTimeCards = [
    { icon: Snowflake, title: "Antarctica", text: "The expedition season operates during the Southern Hemisphere summer." },
    { icon: Compass, title: "Arctic", text: "The best opportunities occur during the northern summer." },
    { icon: Mountain, title: "Alaska", text: "Summer offers strong opportunities for wildlife and scenery." },
    { icon: Anchor, title: "Kimberley", text: "The dry season can provide favorable expedition conditions." },
];

const bookForCards = [
    { icon: Gem, title: "Luxury Travelers", items: ["Don't want to sacrifice comfort while exploring remote destinations."] },
    { icon: Binoculars, title: "Wildlife Enthusiasts", items: ["Want close encounters with animals in natural environments."] },
    { icon: Camera, title: "Photographers", items: ["Want exceptional landscapes and wildlife opportunities."] },
    { icon: Heart, title: "Adventurous Couples", items: ["Want something beyond a traditional luxury cruise."] },
    { icon: Compass, title: "Experienced Cruisers", items: ["Ready to try a more active style of cruising."] },
    { icon: Users, title: "Multigenerational Travelers", items: ["Want an educational adventure rather than a traditional beach vacation."] },
];

const skipList = ["Prefer predictable schedules", "Don't enjoy wildlife or nature", "Want extensive nightlife", "Prefer large-ship entertainment", "Have significant mobility limitations", "Dislike cold or wet environments", "Want a completely relaxing vacation", "Are uncomfortable with itinerary changes"];

const expProsList = ["Luxury all-suite accommodation", "Purpose-built expedition ships", "Excellent wildlife opportunities", "Zodiacs and kayaking", "Expert expedition team", "Small-ship experience", "Luxury dining", "Swarovski Optik binoculars in every suite"];
const expConsList = ["Higher price", "Weather can change plans", "Wildlife isn't guaranteed", "More physical activity", "Limited traditional cruise entertainment", "Itineraries can change"];

const vsOtherExpeditionLines = [
    { name: "Seabourn vs Silversea Expeditions", text: "A useful comparison for travelers choosing between two ultra-luxury expedition brands." },
    { name: "Seabourn vs Scenic Eclipse", text: "Worth considering if you are comparing discovery yacht concepts with purpose-built expedition ships." },
    { name: "Seabourn vs Ponant", text: "Especially useful for travelers weighing French-style luxury expedition cruising against Seabourn's approach." },
    { name: "Seabourn vs Lindblad Expeditions", text: "A compelling comparison between adventure-first exploration and luxury-first expedition cruising." },
];

const expVsTraditional = [
    { feature: "Remote destinations", exp: "Excellent", trad: "Moderate" },
    { feature: "Wildlife", exp: "Excellent", trad: "Good" },
    { feature: "Zodiac exploration", exp: true, trad: false },
    { feature: "Kayaking", exp: true, trad: false },
    { feature: "Expedition team", exp: true, trad: false },
    { feature: "Luxury suites", exp: true, trad: true },
    { feature: "Fine dining", exp: true, trad: true },
    { feature: "Physical activity", exp: "Higher", trad: "Lower" },
    { feature: "Itinerary flexibility", exp: "Higher", trad: "Lower" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournExpeditionCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeShipTab, setActiveShipTab] = useState(0);
    const [activeDestTab, setActiveDestTab] = useState(0);

    const ActiveDestIcon = expDestinations[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Expedition Cruises: Ships, Destinations & Guide</title>
                <meta name="title" content="Seabourn Expedition Cruises Guide: Ships, Destinations & Activities" />
                <meta
                    name="description"
                    content="Explore Seabourn expedition cruises to Antarctica, the Arctic, Alaska, Kimberley and remote destinations. Compare ships, activities, equipment, suites and inclusions."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Expedition Cruises <br /> The Complete Guide</h1>
                    <p>
                        Seabourn expedition cruises combine luxury small-ship cruising with immersive exploration of some of the world's most remote destinations.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Rather than simply visiting a port and returning to the ship, Seabourn's expedition program is designed around discovery. Guests can explore remote coastlines, observe wildlife, hike through pristine landscapes, kayak in protected waters and learn from expedition specialists who accompany the voyage.
                            </p>
                            <p>
                                The experience is built around Seabourn Venture and Seabourn Pursuit, purpose-built expedition ships designed for destinations ranging from Antarctica and the Arctic to Alaska and Australia's Kimberley region.
                            </p>
                            <p>
                                This guide explains Seabourn's expedition ships, destinations, activities, equipment, suites, inclusions and who these cruises are best suited for.
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
                            Start Planning Your Expedition
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-quick-answer">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Short Version</span>
                        <h2 className="Sbc-h2">Are Seabourn Expedition Cruises <br /> Worth Considering?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Yes, if you want expedition-style exploration with an upscale luxury experience.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Seabourn's expedition cruises are particularly appealing to travelers who want:</h4>
                                <ul className="Sbc-highlights-list">
                                    {quickAnswerList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                The major trade-off is that expedition cruising is more expensive than conventional cruising and itineraries can change because of weather, ice, wildlife and local conditions.
                            </p>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Snowflake size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Expedition Cruises Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION SHIPS ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleet</span>
                        <h2 className="Sbc-h2">Seabourn Expedition Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's dedicated expedition fleet consists of two purpose-built ships: Seabourn Venture and Seabourn Pursuit.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        {expShips.map((ship, i) => (
                            <div className={`Sbc-suite-card${i === 1 ? " Sbc-suite-card-dark" : ""}`} key={i}>
                                <div className="Sbc-suite-card-image-placeholder">
                                    <Ship size={32} className="Sbc-suite-placeholder-icon" />
                                    <span className="Sbc-suite-placeholder-text">{ship.name} Image Placeholder</span>
                                </div>
                                <div className="Sbc-suite-card-content">
                                    <h3 className="Sbc-h3">{ship.name}</h3>
                                    <p className="Sbc-p" style={{ marginBottom: "20px" }}>{ship.desc}</p>
                                    <ul className={i === 1 ? "Sbc-wintergarden-list" : "Sbc-suite-feature-list"}>
                                        {ship.features.map((f, j) => (
                                            <li key={j}>
                                                <Dot size={22} strokeWidth={2} />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHERE DO THEY GO ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Seabourn Explores</span>
                        <h2 className="Sbc-h2">Where Do Seabourn <br /> Expedition Cruises Go?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's expedition itineraries focus on remote and wildlife-rich destinations. The exact itinerary portfolio changes by season and year, so travelers should evaluate the current sailing rather than assuming every destination operates every year.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: "center" }}>
                            {expDestinations.map((dest, i) => {
                                const Icon = dest.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Sbc-dest-tab-btn ${activeDestTab === i ? "active" : ""}`}
                                        onClick={() => setActiveDestTab(i)}
                                    >
                                        <Icon size={18} />
                                        <span>{dest.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Sbc-dest-tab-content">
                            <div className="Sbc-dest-image-placeholder">
                                <div className="Sbc-dest-placeholder-icon-wrapper">
                                    <ActiveDestIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">{expDestinations[activeDestTab].title} Travel Image</span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Expedition Region</span>
                                <h3 className="Sbc-dest-tab-title">{expDestinations[activeDestTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{expDestinations[activeDestTab].desc}</p>
                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{expDestinations[activeDestTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {expDestinations[activeDestTab].listItems.map((item, j) => (
                                            <li key={j}>
                                                <Check size={14} strokeWidth={2.5} />
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

            {/* ── VENTURE VS PURSUIT TABLE (new Ssf-table) ─────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-venture-vs-pursuit">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Expedition Twins</span>
                        <h2 className="Sbc-h2">Seabourn Venture vs. Seabourn Pursuit</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For most travelers, there isn't a major reason to choose one ship simply because of its features. Instead, look first at the itinerary — the more important question is where the ship takes you.
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
                                {ventureVsPursuit.map((row, i) => (
                                    <tr key={i}>
                                        <td className="Sec-table-feature">{row}</td>
                                        <td><Check size={18} className="Sec-table-check" /></td>
                                        <td><Check size={18} className="Sec-table-check" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>



            {/* ── CTA A ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Your Next Adventure</span>
                    <h3 className="Sbc-cta-title">Where in the World Will You Explore?</h3>
                    <p className="Sbc-cta-text">
                        From Antarctica to the Arctic and the Kimberley, let us help you plan the perfect Seabourn expedition itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Expedition
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── A TYPICAL ANTARCTIC DAY ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-day">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Day in Antarctica</span>
                        <h2 className="Sbc-h2">What Is a Seabourn <br /> Antarctica Expedition Like?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sec-day-timeline">
                        {dayParts.map((part, i) => {
                            const Icon = part.icon;
                            return (
                                <div className="Sec-day-step" key={i}>
                                    <div className="Sec-day-icon-wrapper">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="Sec-day-label">{part.label}</span>
                                    <p className="Sec-day-text">{part.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sec-day-note">The schedule can change significantly depending on:</p>
                    <div className="Sbc-atmos-words">
                        {["Wildlife", "Ice", "Weather", "Sea conditions", "Landing conditions"].map((w, i) => (
                            <span key={i}>{w}</span>
                        ))}
                    </div>
                    <p className="Sec-day-note">That unpredictability is part of what makes expedition cruising different from conventional cruising.</p>
                </div>
            </section>

            {/* ── ACTIVITIES ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-activities">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Off the Ship</span>
                        <h2 className="Sbc-h2">Seabourn Expedition Activities</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the biggest differences between Seabourn expedition cruising and conventional cruising is the number of opportunities to get off the ship and explore. The exact activity program varies by destination.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {activityCards.map((card, i) => {
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

            {/* ── ZODIAC / KAYAK / HIKING DEEP DIVE ────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ways to Explore</span>
                        <h2 className="Sbc-h2">Zodiacs, Kayaking & Hiking</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sec-excursion-grid">
                        {excursionTrio.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sec-excursion-card" key={i}>
                                    <div className="Sec-excursion-head">
                                        <div className="Sec-excursion-icon-wrapper">
                                            <Icon size={24} strokeWidth={1.5} className="Sec-excursion-icon" />
                                        </div>
                                        <h3 className="Sbc-h3">{card.title}</h3>
                                    </div>
                                    <p className="Sec-excursion-text">{card.text}</p>
                                    <div className="Sec-excursion-features">
                                        <span className="Sec-excursion-features-title">{card.listLabel}</span>
                                        <ul className="Sec-excursion-list">
                                            {card.items.map((item, j) => (
                                                <li key={j}>
                                                    <span className="Sec-excursion-dot"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="Sec-excursion-footer-note">{card.note}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WILDLIFE WATCHING ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-wildlife">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Main Draw</span>
                        <h2 className="Sbc-h2">Wildlife Watching</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Wildlife is one of the strongest reasons travelers choose an expedition cruise. Depending on the destination, sightings can include:
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {wildlifeByRegion.map((cat, i) => {
                            const Icon = regionIcons[cat.title] || Binoculars;
                            return (
                                <div className="Sbc-suite-card" key={i}>
                                    <div className="Sbc-suite-card-image-placeholder">
                                        <Icon size={32} className="Sbc-suite-placeholder-icon" />
                                        <span className="Sbc-suite-placeholder-text">{cat.title} Wildlife Image Placeholder</span>
                                    </div>
                                    <div className="Sbc-suite-card-content">
                                        <h3 className="Sbc-h3">{cat.title}</h3>
                                        <ul className="Sbc-suite-feature-list" style={{ gridTemplateColumns: "1fr" }}>
                                            {cat.items.map((item, j) => (
                                                <li key={j}>
                                                    <Check size={16} strokeWidth={2} />
                                                    <span>{item}</span>
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

            {/* ── CTA 1 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Remote & Rare</span>
                    <h3 className="Sbc-cta-title">Ready to Explore Antarctica or the Arctic?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare Seabourn Venture and Seabourn Pursuit sailings to find the itinerary
                        and suite category that fits your expedition goals.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Expedition Departures
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── EQUIPMENT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-equipment">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Gear for the Field</span>
                        <h2 className="Sbc-h2">Seabourn Expedition Equipment</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn equips its expedition ships for exploration. One especially notable benefit is that Swarovski Optik binoculars are provided in every suite aboard Seabourn Venture and Seabourn Pursuit.
                        </p>
                    </div>

                    <div className="Sec-equip-grid">
                        <div className="Sec-equip-card">
                            <div className="Sec-equip-image-placeholder">
                                <div className="Sec-equip-placeholder-icon-wrapper">
                                    <Binoculars size={32} />
                                </div>
                                <span className="Sec-equip-placeholder-text">Expedition Equipment Provided Onboard</span>
                            </div>
                            <div className="Sec-equip-content">
                                <h3 className="Sec-equip-title">Equipment Provided Onboard</h3>
                                <ul className="Sec-equip-list">
                                    {["Zodiacs", "Kayaks", "Expedition gear", "Waterproof expedition equipment", "Polar clothing on applicable itineraries", "Binoculars", "Photography equipment opportunities"].map((f, i) => (
                                        <li key={i}>
                                            <Compass size={14} strokeWidth={2.5} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sec-equip-card Sec-equip-card-dark">
                            <div className="Sec-equip-image-placeholder">
                                <div className="Sec-equip-placeholder-icon-wrapper">
                                    <Thermometer size={32} />
                                </div>
                                <span className="Sec-equip-placeholder-text">Expedition Clothing Guidelines</span>
                            </div>
                            <div className="Sec-equip-content">
                                <h3 className="Sec-equip-title">Does Seabourn Provide Expedition Clothing?</h3>
                                <p className="Sec-equip-text">
                                    For polar expedition itineraries, Seabourn provides appropriate expedition gear as part of the experience, with specific arrangements varying by voyage. You should still pack appropriate personal clothing for:
                                </p>
                                <ul className="Sec-equip-list">
                                    {["Layering", "Wind", "Rain", "Cold", "Wet landings", "Comfortable walking"].map((item, i) => (
                                        <li key={i}>
                                            <Backpack size={14} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITES & VERANDA STRATEGY ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Expedition Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn expedition ships offer all-suite accommodations, including Veranda Suites and larger premium categories — combining expedition adventure with luxury suite accommodation.
                        </p>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card">
                            <div className="Sbc-atmos-card-title">You Might Use Your Veranda To</div>
                            <ul>
                                {["Watch whales", "Photograph glaciers", "Observe seabirds", "Watch icebergs", "Enjoy coffee", "Follow the coastline"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card">
                            <div className="Sbc-atmos-card-title">When Choosing a Suite, Consider</div>
                            <ul>
                                {["Deck location", "Window configuration", "Veranda size", "View", "Proximity to observation areas", "Accessibility", "Motion sensitivity"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "32px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
                        On an expedition ship, a private veranda can be more valuable than on a conventional cruise because the scenery is often the main attraction.
                    </p>
                </div>
            </section>

            {/* ── DINING ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-dining">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Culinary Program</span>
                                <h2 className="Sbc-h2">Seabourn Expedition Dining</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Expedition does not mean sacrificing dining. Seabourn maintains its luxury dining approach aboard its expedition ships.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Depending on the ship and sailing, guests can enjoy:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Fine dining", "Specialty restaurants", "Casual dining", "In-suite dining", "Outdoor dining", "Premium beverages"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">without giving up a luxury culinary program.</div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Utensils size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Expedition Dining Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION TEAM / LECTURES / PHOTOGRAPHY ─────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-team">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Learning as You Go</span>
                        <h2 className="Sbc-h2">Expedition Team, Lectures & Photography</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sec-excursion-grid">
                        {teamTrio.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sec-excursion-card" key={i}>
                                    <div className="Sec-excursion-head">
                                        <div className="Sec-excursion-icon-wrapper">
                                            <Icon size={24} strokeWidth={1.5} className="Sec-excursion-icon" />
                                        </div>
                                        <h3 className="Sbc-h3">{card.title}</h3>
                                    </div>
                                    <p className="Sec-excursion-text">{card.text}</p>
                                    <div className="Sec-excursion-features">
                                        <span className="Sec-excursion-features-title">{card.listLabel}</span>
                                        <ul className="Sec-excursion-list">
                                            {card.items.map((item, j) => (
                                                <li key={j}>
                                                    <span className="Sec-excursion-dot"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="Sec-excursion-footer-note">{card.note}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA B ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Expert-Led Journeys</span>
                    <h3 className="Sbc-cta-title">Learn from the Best in the Field</h3>
                    <p className="Sbc-cta-text">
                        Our specialists help you get the most out of every Zodiac excursion, hike and lecture. Let's find your ideal voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Connect with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── INCLUSIONS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-exp-inclusions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Inclusive Model</span>
                        <h2 className="Sbc-h2">Seabourn Expedition Inclusions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            A major benefit of booking a luxury expedition cruise is that many services and experiences are included. Depending on the sailing, inclusions can include:
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Onboard & Ashore</div>
                            <ul>
                                {["Expedition team", "Expedition activities", "Zodiac operations", "Kayaking opportunities"].map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Suite & Dining</div>
                            <ul>
                                {["Suite accommodations", "Dining", "Selected beverages"].map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Connectivity & Service</div>
                            <ul>
                                {["Wi-Fi", "Gratuities"].map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-includes-card">
                            <div className="Sbc-includes-title">Enrichment</div>
                            <ul>
                                {["Entertainment", "Expedition lectures"].map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-includes-note">
                        <p>The exact inclusions can vary by itinerary, so always check the current booking terms.</p>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Pros and Cons of Seabourn Expedition Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Pros</h3>
                            <ul>
                                {expProsList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Cons</h3>
                            <ul>
                                {expConsList.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PHYSICAL ACTIVITY / OLDER TRAVELERS ──────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-active">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Mobility & Effort</span>
                                <h2 className="Sbc-h2">How Physically Active Are Seabourn Expeditions?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                The answer varies dramatically by itinerary. Some activities are relatively easy; others may require walking over uneven ground, getting in and out of Zodiacs, hiking, standing for extended periods or navigating wet or slippery surfaces.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Many travelers can enjoy an expedition by combining:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Scenic cruising", "Wildlife watching", "Lectures", "Easier shore experiences", "Zodiac sightseeing"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">You don't have to participate in every activity.</div>
                            </div>
                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "var(--navy)", flexShrink: 0, marginTop: "2px" }} />
                                    <span>
                                        For older travelers, mobility matters more than age. If you can comfortably walk, board transportation and navigate uneven surfaces, you may be able to participate in many activities — though expedition conditions can be more demanding than a conventional luxury cruise.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Footprints size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Physical Activity Level Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAMILY-FRIENDLY ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Expedition Families Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Family Travel</span>
                                <h2 className="Sbc-h2">Are Seabourn Expedition Cruises Family-Friendly?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                They can work for families, but they are not traditional family cruises. The experience is particularly suitable for families with older children and teenagers.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Especially interested in:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Wildlife", "Science", "Nature", "Photography", "Exploration", "Adventure"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">A polar expedition can become an extraordinary educational experience for the right family.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Pack Your Binoculars</span>
                    <h3 className="Sbc-cta-title">Let's Find Your Ideal Suite & Sailing</h3>
                    <p className="Sbc-cta-text">
                        From Veranda Suites to premium categories, we'll help you choose the right accommodation
                        and itinerary for your expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Talk to an Expedition Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── COUPLES & SOLO TRAVELERS ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-couples-solo">
                <div className="Sbc-container">
                    <div className="Sec-travelers-grid">

                        {/* Couples Card */}
                        <div className="Sec-traveler-card">
                            <div className="Sec-traveler-image-placeholder">
                                <Heart size={44} className="Sec-traveler-placeholder-icon" strokeWidth={1.5} />
                                <span className="Sec-traveler-placeholder-text">Couples Expedition Cruising Image Placeholder</span>
                            </div>
                            <div className="Sec-traveler-card-content">
                                <h3 className="Sbc-h3">Are Seabourn Expedition Cruises Good for Couples?</h3>
                                <p className="Sec-bold-p">Absolutely.</p>
                                <span className="Sec-traveler-list-title">Couples who enjoy:</span>
                                <ul className="Sec-traveler-list">
                                    {["Nature", "Wildlife", "Adventure", "Photography", "Fine dining", "Luxury accommodations"].map((item, idx) => (
                                        <li key={idx}>
                                            <Heart size={18} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            
                                <div className="Sec-traveler-verdict">
                                    <p>
                                        It offers a combination that is difficult to replicate on a traditional cruise: <strong>remote adventure by day + luxury by night</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solo Travelers Card */}
                        <div className="Sec-traveler-card">
                            <div className="Sec-traveler-image-placeholder">
                                <Compass size={44} className="Sec-traveler-placeholder-icon" strokeWidth={1.5} />
                                <span className="Sec-traveler-placeholder-text">Solo Travelers Expedition Cruising Image Placeholder</span>
                            </div>
                            <div className="Sec-traveler-card-content">
                                <h3>Are Seabourn Expeditions Good for Solo Travelers?</h3>
                                <p className="Sec-bold-p">Yes.</p>

                                <span className="Sec-traveler-list-title">Guests often share:</span>
                                <ul className="Sec-traveler-list">
                                    {["Zodiac rides", "Landings", "Lectures", "Dining experiences", "Wildlife sightings"].map((item, idx) => (
                                        <li key={idx}>
                                            <Users size={18} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sec-traveler-verdict">
                                    <p>
                                        The shared nature of expedition travel can make solo travelers feel part of a community.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── EXPEDITION VS TRADITIONAL SEABOURN ───────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-vs-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Two Styles of Luxury Travel</span>
                        <h2 className="Sbc-h2">Seabourn Expedition vs Traditional Seabourn Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            If your priority is exploration, choose expedition. If your priority is relaxation, ports and classic luxury cruising, a traditional Seabourn itinerary may be better.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Expedition</th>
                                    <th>Traditional Seabourn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expVsTraditional.map((row, i) => (
                                    <tr key={i}>
                                        <td className="Sec-table-feature">{row.feature}</td>
                                        <td>
                                            {typeof row.exp === "boolean"
                                                ? (row.exp ? <Check size={18} className="Sec-table-check" /> : <span className="Sec-table-dash">—</span>)
                                                : row.exp}
                                        </td>
                                        <td>
                                            {typeof row.trad === "boolean"
                                                ? (row.trad ? <Check size={18} className="Sec-table-check" /> : <span className="Sec-table-dash">—</span>)
                                                : row.trad}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── VS OTHER LUXURY EXPEDITION LINES ─────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-vs-others">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Expedition vs Other Luxury Expedition Lines</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's strongest selling point is its combination of intimate expedition exploration with the traditional Seabourn luxury experience.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">

                        {/* Card 1 */}
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Other Lines to Consider</h3>
                                <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                    Travelers comparing Seabourn may also consider:
                                </p>
                                <ul className="Sbc-suite-feature-list" style={{ gridTemplateColumns: "1fr", margin: "0" }}>
                                    {["Silversea Expeditions", "Scenic Eclipse", "Ponant", "Lindblad Expeditions", "Regent Seven Seas for non-expedition luxury cruising"].map((item, idx) => (
                                        <li key={idx}>
                                            <Ship size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Key Differences</h3>
                                <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                    The key differences often come down to:
                                </p>
                                <ul className="Sbc-suite-feature-list" style={{ gridTemplateColumns: "1fr", margin: "0" }}>
                                    {["Ship size", "Suite design", "Dining", "Expedition philosophy", "Activity intensity", "Price", "Destination portfolio", "Luxury level"].map((item, idx) => (
                                        <li key={idx}>
                                            <Anchor size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COST ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-cost">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">

                        {/* Left Column */}
                        <div className="Sbc-qa-content" style={{ justifyContent: "flex-start" }}>
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Budgeting for an Expedition</span>
                                <h2 className="Sbc-h2">How Much Do Seabourn Expedition Cruises Cost?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p" style={{ marginBottom: "18px" }}>
                                Prices vary substantially based on:
                            </p>
                            <div className="Sbc-qa-card" style={{ marginBottom: "24px" }}>
                                <ul className="Sbc-qa-list">
                                    {["Destination", "Ship", "Sailing date", "Suite category", "Cruise length", "Season", "Demand"].map((item, idx) => (
                                        <li key={idx}>
                                            <Dot size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p">
                                Antarctica voyages can command particularly high fares because of the specialized ship, expedition team and remote destination.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="Sbc-qa-content" style={{ justifyContent: "flex-start" }}>
                            <p className="Sbc-p" style={{ marginBottom: "12px", marginTop: "20px" }}>
                                Rather than comparing only the headline cruise fare, evaluate:
                            </p>
                            <h3 className="Sbc-h3" style={{ fontSize: "22px", marginBottom: "18px" }}>
                                What's included in the expedition price?
                            </h3>
                            <div className="Sbc-qa-card" style={{ marginBottom: "24px" }}>
                                <h4 className="Sbc-qa-card-title">Consider:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Suite", "Dining", "Beverages", "Expedition activities", "Zodiacs", "Kayaking", "Wi-Fi", "Gratuities", "Expedition team", "Equipment"].map((item, idx) => (
                                        <li key={idx}>
                                            <Dot size={22} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p">
                                This provides a more meaningful comparison with other luxury expedition operators.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Value & Luxury</span>
                    <h3 className="Sbc-cta-title">Evaluate Inclusions for the Best Value</h3>
                    <p className="Sbc-cta-text">
                        Let's compare suite rates, expedition activities and exclusive promotions to find the best value for your Seabourn cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare Cruise Rates
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHAT TO PACK ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Get Ready</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn Expedition</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Your packing list depends heavily on the destination. Don't pack only for the destination — pack for the transition between environments.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {packingCards.map((card, i) => {
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

            {/* ── BEST TIME TO GO ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-best-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timing It Right</span>
                        <h2 className="Sbc-h2">Best Time for Seabourn Expedition Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            There isn't one universal best time — it depends on the destination. Always evaluate the specific sailing because wildlife behavior and weather vary.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        {bestTimeCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-suite-card" key={i}>
                                    <div className="Sbc-suite-card-image-placeholder">
                                        <Icon size={32} className="Sbc-suite-placeholder-icon" />
                                        <span className="Sbc-suite-placeholder-text">{card.title} Best Time Image Placeholder</span>
                                    </div>
                                    <div className="Sbc-suite-card-content">
                                        <h3 className="Sbc-h3">{card.title}</h3>
                                        <p className="Sbc-p" style={{ marginBottom: "0px" }}>{card.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD BOOK ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-exp-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Book a Seabourn Expedition Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-fit-grid">
                        {bookForCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
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

            {/* ── WHO SHOULD SKIP ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-skip">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <h2 className="Sbc-h2">Who Should Skip a Seabourn Expedition?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            An expedition cruise may not be ideal if you fit the profile below. For those travelers, a traditional Seabourn cruise may be a better fit.
                        </p>
                    </div>

                    <div className="Sbc-notfit-grid">
                        {skipList.map((item, i) => (
                            <div className="Sbc-notfit-item-card" key={i}>
                                <div className="Sbc-notfit-x-wrapper">
                                    <X size={14} strokeWidth={2.5} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
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

            {/* ── FAQ ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-exp-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn expedition cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-exp-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Verdict</span>
                        <h2 className="Sbc-h2">Luxury Exploration, Not Just Adventure</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn expedition cruises are best understood as luxury exploration rather than adventure cruising alone. The experience combines purpose-built expedition ships, luxury suites, private verandas, expert expedition teams, Zodiacs, kayaking, wildlife encounters, remote destinations, fine dining and personalized service.
                        </p>
                        <p className="Sbc-p">
                            The two ships — Seabourn Venture and Seabourn Pursuit — provide the platform for exploring some of the world's most remarkable environments. The biggest thing to remember is that expedition cruising is inherently unpredictable, and that's precisely what makes an expedition different from an ordinary cruise.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If you want to see Antarctica, the Arctic,
                                Alaska or the Kimberley without giving up the comfort and service of an
                                ultra-luxury cruise, Seabourn's expedition program can be an exceptional choice.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Expedition Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SeabournExpeditionCruisesGuide;