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
    Home,
    Users,
    AlertCircle,
    MapPin,
    Star,
    Award,
    Dot,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "../../pages/SeabournCruises/SeabournCruises.css";
import "./SeabournShoreExcursions.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/shore-excursions/",
            name: "Seabourn Shore Excursions: Complete Guide to Tours, Ventures & Expedition Activities",
            description:
                "Explore Seabourn shore excursions, including traditional tours, Ventures by Seabourn, expedition activities, private experiences, wildlife adventures and planning tips.",
            isPartOf: { "@id": "https://www.tripsandships.com/#website" },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#article" },
            inLanguage: "en-US",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#article",
            headline: "Seabourn Shore Excursions: Complete Guide to Tours, Ventures & Expedition Activities",
            description:
                "Explore Seabourn shore excursions, including traditional tours, Ventures by Seabourn, expedition activities, private experiences, wildlife adventures and planning tips.",
            url: "https://www.tripsandships.com/seabourn-cruises/shore-excursions/",
            mainEntityOfPage: { "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#webpage" },
            articleSection: [
                "Seabourn Shore Excursions",
                "Traditional Shore Excursions",
                "Ventures by Seabourn",
                "Seabourn Expedition Activities",
                "Seabourn Zodiac Excursions",
                "Seabourn Kayaking",
                "Seabourn Wildlife Excursions",
                "Seabourn Antarctica Excursions",
                "Seabourn Alaska Excursions",
                "Seabourn Excursion Planning",
            ],
            keywords: [
                "Seabourn shore excursions",
                "Seabourn excursions",
                "Ventures by Seabourn",
                "Seabourn expedition activities",
                "Seabourn private excursions",
                "Seabourn wildlife excursions",
                "Seabourn Zodiac excursions",
                "Seabourn kayaking",
                "Seabourn cruise activities",
                "best Seabourn excursions",
            ],
            about: [
                { "@type": "Thing", name: "Seabourn shore excursions" },
                { "@type": "Thing", name: "Ventures by Seabourn" },
                { "@type": "Thing", name: "Seabourn expedition activities" },
                { "@type": "Thing", name: "Seabourn Zodiac excursions" },
                { "@type": "Thing", name: "Seabourn kayaking" },
                { "@type": "Thing", name: "Seabourn wildlife excursions" },
            ],
            publisher: { "@type": "TravelAgency", name: "Trips & Ships Luxury Travel", url: "https://www.tripsandships.com/" },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#faq",
            url: "https://www.tripsandships.com/seabourn-cruises/shore-excursions/",
            mainEntity: [
                { "@type": "Question", name: "What are Seabourn shore excursions?", acceptedAnswer: { "@type": "Answer", text: "Seabourn shore excursions are organized tours and activities that allow cruise guests to explore destinations beyond the ship. They range from sightseeing and cultural tours to food, wine, adventure and nature experiences." } },
                { "@type": "Question", name: "What are Ventures by Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Ventures by Seabourn are more immersive experiences focused on active exploration, nature, adventure and unique destination experiences. Availability varies by itinerary." } },
                { "@type": "Question", name: "Are Seabourn shore excursions included?", acceptedAnswer: { "@type": "Answer", text: "Not all shore excursions should be assumed to be included. Pricing and availability vary by experience and itinerary, so travelers should check the specific excursion details when planning their cruise." } },
                { "@type": "Question", name: "What activities are available on Seabourn expedition cruises?", acceptedAnswer: { "@type": "Answer", text: "Depending on the itinerary, expedition activities can include Zodiac excursions, shore landings, kayaking, hiking, wildlife observation and scenic exploration." } },
                { "@type": "Question", name: "Does Seabourn offer private shore excursions?", acceptedAnswer: { "@type": "Answer", text: "Private experiences may be available on selected itineraries and can provide greater flexibility around transportation, pace and activities." } },
                { "@type": "Question", name: "Are Seabourn shore excursions worth the cost?", acceptedAnswer: { "@type": "Answer", text: "They can be, particularly when an excursion provides expert guides, specialized transportation, exclusive access or experiences that are difficult to arrange independently." } },
                { "@type": "Question", name: "Can I explore a port independently on a Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "Yes. Independent exploration can be a good option in ports that are easy to navigate, provided you return to the ship well before its scheduled departure." } },
                { "@type": "Question", name: "How active are Seabourn shore excursions?", acceptedAnswer: { "@type": "Answer", text: "Activity levels vary from easy sightseeing to strenuous hiking and expedition activities. Travelers should check the individual excursion requirements before booking." } },
                { "@type": "Question", name: "Are Seabourn excursions suitable for older travelers?", acceptedAnswer: { "@type": "Answer", text: "Yes. There are many lower-activity options, although travelers should evaluate walking distance, terrain, stairs and transportation requirements for each excursion." } },
                { "@type": "Question", name: "Are Seabourn excursions good for families?", acceptedAnswer: { "@type": "Answer", text: "Yes. Families can choose from cultural, wildlife, food, nature and adventure experiences. Private excursions can be particularly useful for multigenerational groups." } },
                { "@type": "Question", name: "Does Seabourn offer Zodiac excursions?", acceptedAnswer: { "@type": "Answer", text: "Yes. Zodiac operations are an important part of the expedition experience aboard Seabourn Venture and Seabourn Pursuit, subject to itinerary and conditions." } },
                { "@type": "Question", name: "Does Seabourn offer kayaking?", acceptedAnswer: { "@type": "Answer", text: "Kayaking is available on applicable expedition itineraries and is subject to weather, sea conditions, safety requirements and local circumstances." } },
                { "@type": "Question", name: "Can I see wildlife on a Seabourn shore excursion?", acceptedAnswer: { "@type": "Answer", text: "Yes. Wildlife-focused excursions are available on appropriate itineraries. Expedition destinations can provide opportunities to see animals such as penguins, whales, seals and birds." } },
                { "@type": "Question", name: "Should I book excursions in every port?", acceptedAnswer: { "@type": "Answer", text: "Not necessarily. Leaving some ports open can give you time to explore independently or enjoy the ship without a structured tour." } },
                { "@type": "Question", name: "How do I choose the best Seabourn excursion?", acceptedAnswer: { "@type": "Answer", text: "Start with your interests and activity level. Choose cultural tours for history, culinary experiences for food lovers, Ventures for active exploration and expedition activities for wildlife and remote destinations." } },
                { "@type": "Question", name: "What should I bring on a Seabourn shore excursion?", acceptedAnswer: { "@type": "Answer", text: "Bring comfortable shoes, weather-appropriate clothing, identification, a phone, camera, sunscreen, water and any necessary medication. Expedition activities may require additional waterproof or cold-weather gear." } },
                { "@type": "Question", name: "Can Seabourn excursions be canceled because of weather?", acceptedAnswer: { "@type": "Answer", text: "Yes. Weather, sea conditions, safety concerns and local circumstances can affect excursions, particularly outdoor and expedition activities." } },
                { "@type": "Question", name: "What is the difference between a Seabourn shore excursion and a Ventures experience?", acceptedAnswer: { "@type": "Answer", text: "Traditional shore excursions often focus on sightseeing, culture, food and major attractions. Ventures experiences generally emphasize more active, immersive or nature-oriented exploration." } },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/shore-excursions/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Shore Excursions", item: "https://www.tripsandships.com/seabourn-cruises/shore-excursions/" },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq classes) ────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What are Seabourn shore excursions?", a: "Seabourn shore excursions are organized tours and activities that allow cruise guests to explore destinations beyond the ship. They range from sightseeing and cultural tours to food, wine, adventure and nature experiences." },
        { q: "What are Ventures by Seabourn?", a: "Ventures by Seabourn are more immersive experiences focused on active exploration, nature, adventure and unique destination experiences. Availability varies by itinerary." },
        { q: "Are Seabourn shore excursions included?", a: "Not all shore excursions should be assumed to be included. Pricing and availability vary by experience and itinerary, so check the specific excursion details when planning your cruise." },
        { q: "What activities are available on Seabourn expedition cruises?", a: "Depending on the itinerary, expedition activities can include Zodiac excursions, shore landings, kayaking, hiking, wildlife observation and scenic exploration." },
        { q: "Does Seabourn offer private shore excursions?", a: "Private experiences may be available on selected itineraries and can provide greater flexibility around transportation, pace and activities." },
        { q: "Are Seabourn shore excursions worth the cost?", a: "They can be, particularly when an excursion provides expert guides, specialized transportation, exclusive access or experiences that are difficult to arrange independently." },
        { q: "Can I explore a port independently on a Seabourn cruise?", a: "Yes. Independent exploration can be a good option in ports that are easy to navigate, provided you return to the ship well before its scheduled departure." },
        { q: "How active are Seabourn shore excursions?", a: "Activity levels vary from easy sightseeing to strenuous hiking and expedition activities. Always check the individual excursion's requirements before booking." },
        { q: "Are Seabourn excursions suitable for older travelers?", a: "Yes. There are many lower-activity options, although travelers should evaluate walking distance, terrain, stairs and transportation requirements for each excursion." },
        { q: "Are Seabourn excursions good for families?", a: "Yes. Families can choose from cultural, wildlife, food, nature and adventure experiences. Private excursions can be particularly useful for multigenerational groups." },
        { q: "Does Seabourn offer Zodiac excursions?", a: "Yes. Zodiac operations are an important part of the expedition experience aboard Seabourn Venture and Seabourn Pursuit, subject to itinerary and conditions." },
        { q: "Does Seabourn offer kayaking?", a: "Kayaking is available on applicable expedition itineraries and is subject to weather, sea conditions, safety requirements and local circumstances." },
        { q: "Can I see wildlife on a Seabourn shore excursion?", a: "Yes. Wildlife-focused excursions are available on appropriate itineraries. Expedition destinations can provide opportunities to see animals such as penguins, whales, seals and birds." },
        { q: "Should I book excursions in every port?", a: "Not necessarily. Leaving some ports open can give you time to explore independently or enjoy the ship without a structured tour." },
        { q: "How do I choose the best Seabourn excursion?", a: "Start with your interests and activity level. Choose cultural tours for history, culinary experiences for food lovers, Ventures for active exploration and expedition activities for wildlife and remote destinations." },
        { q: "What should I bring on a Seabourn shore excursion?", a: "Bring comfortable shoes, weather-appropriate clothing, identification, a phone, camera, sunscreen, water and any necessary medication. Expedition activities may require additional waterproof or cold-weather gear." },
        { q: "Can Seabourn excursions be canceled because of weather?", a: "Yes. Weather, sea conditions, safety concerns and local circumstances can affect excursions, particularly outdoor and expedition activities." },
        { q: "What is the difference between a Seabourn shore excursion and a Ventures experience?", a: "Traditional shore excursions often focus on sightseeing, culture, food and major attractions. Ventures experiences generally emphasize more active, immersive or nature-oriented exploration." },
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
    "City sightseeing", "Cultural tours", "Food and wine experiences", "Historical tours",
    "Nature excursions", "Wildlife experiences", "Scenic tours", "Hiking", "Cycling",
    "Kayaking", "Zodiac excursions", "Expedition landings", "Private experiences",
    "Small-group adventures",
];

const threeTypesCards = [
    { icon: Landmark, title: "Traditional Shore Excursions", text: "Destination-focused tours such as sightseeing, culture, food, history and scenic experiences." },
    { icon: Compass, title: "Ventures by Seabourn", text: "More immersive experiences designed around active exploration and unique access to destinations." },
    { icon: Snowflake, title: "Expedition Activities", text: "Associated primarily with Seabourn's expedition voyages and can include Zodiacs, kayaking, wildlife observation and shore landings." },
];

const traditionalOverviewList = [
    "Guided city tours", "Museums", "Historic sites", "Architecture", "Cultural attractions",
    "Scenic drives", "Local markets", "Culinary experiences", "Wine tasting", "Gardens",
    "Castles", "Religious sites", "Shopping",
];

const traditionalSubtypes = [
    {
        icon: Landmark,
        title: "Seabourn Sightseeing Tours",
        text: "Sightseeing tours are among the most straightforward ways to explore a port. A sightseeing excursion can be a good choice if you want:",
        items: ["Efficient transportation", "A knowledgeable guide", "A structured itinerary", "Major highlights", "Minimal planning"],
        footer: "For first-time visitors, this can be an easier alternative to arranging independent transportation.",
    },
    {
        icon: Compass,
        title: "Seabourn Cultural Excursions",
        text: "Cultural experiences provide a deeper connection to the destination. Depending on the port, these may include:",
        items: ["Local traditions", "Historic neighborhoods", "Museums", "Art", "Music", "Architecture", "Religious heritage", "Local communities"],
        footer: "These excursions are particularly appealing to travelers who want more than simply seeing the major tourist attractions.",
    },
    {
        icon: Utensils,
        title: "Seabourn Food and Wine Excursions",
        text: "Food-focused excursions are another way to experience a destination. Potential experiences include:",
        items: ["Local restaurants", "Food markets", "Cooking demonstrations", "Wine tastings", "Vineyards", "Regional specialties", "Culinary workshops", "Farm visits"],
        footer: "For travelers who enjoy gastronomy, these can sometimes be more memorable than a conventional sightseeing tour.",
    },

];

const venturesDifferentList = [
    "Into nature", "On a hike", "Into a remote landscape", "Along a coastline",
    "Through a wildlife environment", "Into a more active experience",
];

const venturesIncludedList = [
    "Whether an experience is included", "Whether there is an additional fee",
    "Activity requirements", "Duration", "Transportation", "Equipment", "Availability",
];

const expeditionActivities = [
    {
        icon: Waves,
        title: "Seabourn Zodiac Excursions",
        text: "Zodiacs are a core component of Seabourn's dedicated expedition ships. Depending on the destination, a Zodiac excursion may involve:",
        items: ["Wildlife viewing", "Glacier observation", "Coastal exploration", "Shore access", "Scenic cruising", "Remote beaches", "Ice-filled waterways"],
        footer: "Zodiac operations are particularly important in destinations such as Antarctica and other remote expedition regions.",
    },
    {
        icon: MapPin,
        title: "Seabourn Shore Landings",
        text: "On expedition voyages, a shore landing can be one of the highlights of the entire cruise.  Possible experiences include:",
        items: ["Wildlife observation", "Photography", "Nature walks", "Historical sites", "Remote landscapes", "Cultural encounters"],
        footer: "Landings depend on local conditions and expedition planning.",
    },
    {
        icon: Anchor,
        title: "Seabourn Kayaking",
        text: "Kayaking offers a different perspective from both the ship and a Zodiac. Depending on the itinerary and conditions, travelers may kayak through:",
        items: ["Calm bays", "Fjords", "Remote coastlines", "Sheltered waterways", "Scenic environments"],
        footer: "Kayaking can be an excellent choice for travelers who want a more active experience.",
    },
   
];

const destinationTabs = [
    {
        icon: Snowflake,
        title: "Antarctica",
        subtitle: "Seabourn Antarctica Excursions",
        desc: "Antarctica offers some of Seabourn's most distinctive expedition activities. The experience is less about visiting a list of traditional ports and more about exploring the environment.",
        listLabel: "Potential experiences include:",
        listItems: ["Zodiac cruises", "Penguin colony visits", "Wildlife observation", "Glacier viewing", "Shore landings", "Photography", "Kayaking", "Expedition lectures"],
    },
    {
        icon: Mountain,
        title: "Alaska",
        subtitle: "Seabourn Alaska Excursions",
        desc: "Alaska provides a different style of expedition and shore experience. Depending on the itinerary, travelers may participate in wildlife viewing, glacier experiences, nature walks, cultural excursions, scenic exploration, hiking and Zodiac exploration.",
        listLabel: "Potential wildlife includes:",
        listItems: ["Whales", "Bears", "Eagles", "Sea otters"],
    },
    {
        icon: Landmark,
        title: "Mediterranean",
        subtitle: "Seabourn Mediterranean Excursions",
        desc: "Seabourn's European itineraries provide a broad range of traditional excursions. Mediterranean itineraries can offer experiences centered around ancient history, architecture, food, wine, art, beaches and local villages.",
        listLabel: "Travelers may choose between:",
        listItems: ["Classic sightseeing", "Immersive local experiences", "Ancient history", "Architecture", "Food and wine", "Local villages"],
    },
    {
        icon: Waves,
        title: "Northern Europe",
        subtitle: "Seabourn Northern Europe Excursions",
        desc: "Northern European itineraries can emphasize historic cities, fjords, castles, scenic landscapes, local culture, museums and coastal environments.",
        listLabel: "Active travelers may also find:",
        listItems: ["Opportunities for hiking", "Nature exploration", "Historic cities", "Fjords", "Castles", "Coastal environments"],
    },
];

const activityLevels = [
    { icon: Sun, title: "Easy", items: ["Coach sightseeing", "Museums", "Scenic drives", "Cultural presentations"] },
    { icon: Waves, title: "Moderate", items: ["Walking tours", "Markets", "Longer sightseeing", "Light hiking"] },
    { icon: Mountain, title: "Active", items: ["Hiking", "Kayaking", "Cycling", "Extended walking", "Expedition landings"] },
    { icon: Snowflake, title: "Expedition", items: ["Zodiac operations", "Remote landings", "Uneven terrain", "Wildlife exploration"] },
];

const travelerTypeCards = [
    {
        icon: Star,
        title: "Seabourn Excursions for Older Travelers",
        intro: "Older travelers can enjoy a wide range of Seabourn excursions.",
        listTitle: "The best strategy is to evaluate:",
        items: ["Walking distance", "Terrain", "Stairs", "Transportation", "Standing time", "Rest opportunities"],
        paragraphs: [
            "A scenic drive or guided cultural tour may be preferable to a long hike for some travelers.",
            "Age itself is less important than mobility and personal fitness."
        ]
    },
    {
        icon: Home,
        title: "Seabourn Excursions for Families",
        intro: "Families can choose experiences based on the interests and ages of their travelers.",
        listTitle: "Good options may include:",
        items: ["Wildlife", "Outdoor activities", "Cultural experiences", "Food tours", "Scenic adventures", "Easy hikes"],
        paragraphs: [
            "For multigenerational groups, private excursions can be particularly attractive because the experience can be tailored to different activity levels."
        ]
    },
    {
        icon: Heart,
        title: "Seabourn Excursions for Couples",
        intro: "Couples have considerable flexibility.",
        listTitle: "Popular styles may include:",
        items: ["Food and wine", "Scenic tours", "Cultural experiences", "Private touring", "Wildlife", "Hiking", "Photography"],
        paragraphs: [
            "A private excursion can also be a good option for anniversaries, birthdays or other celebrations."
        ]
    },
    {
        icon: Users,
        title: "Seabourn Excursions for Solo Travelers",
        intro: "Solo travelers can participate in group excursions without having to arrange transportation independently.",
        items: [],
        paragraphs: [
            "Shared excursions also create opportunities to meet fellow passengers.",
            "Travelers who prefer more independence can investigate private experiences where available."
        ]
    }
];

const bookExcursionList = ["Organized transportation", "A professional guide", "Minimal planning", "Coordinated timing", "Destination expertise", "A ship-coordinated experience"];
const independentList = ["Flexibility", "Your own schedule", "Local restaurants", "Shopping", "Slow travel", "Independent discovery"];

const goalPairs = [
    { want: "Want to learn?", choose: "Choose history or cultural tours." },
    { want: "Want to eat?", choose: "Choose culinary or wine experiences." },
    { want: "Want adventure?", choose: "Look for Ventures or active excursions." },
    { want: "Want wildlife?", choose: "Choose nature or expedition experiences." },
    { want: "Want photography?", choose: "Choose scenic or wildlife-focused experiences." },
    { want: "Want relaxation?", choose: "Look for scenic, beach or low-activity experiences." },
    { want: "Want something unique?", choose: "Consider private or specialty experiences." },
];

const prosList = ["Convenient", "Professionally organized", "Destination-focused", "Expert guides", "Wide range of activity levels", "Good option for first-time visitors", "Expedition activities can provide unique access", "Private experiences may be available"];
const consList = ["Some excursions can be expensive", "Group tours may feel structured", "Departure times are fixed", "Popular experiences can fill quickly", "Physical requirements vary", "Not every excursion is suitable for every traveler"];

const wearPackGrid = [
    { title: "Wear: City Sightseeing", items: ["Comfortable walking shoes", "Lightweight clothing", "Sun protection"] },
    { title: "Wear: Hiking", items: ["Supportive footwear", "Layered clothing", "Weather protection"] },
    { title: "Wear: Wildlife Excursions", items: ["Neutral outdoor clothing", "Layers", "Comfortable shoes", "Camera protection"] },
    { title: "Wear: Expedition Excursions", items: ["Warm layers", "Waterproof clothing", "Appropriate footwear", "Gloves and hat where required"] },
    { title: "Day Bag Essentials", items: ["Identification", "Phone", "Camera", "Sunglasses", "Sunscreen", "Water", "Weather protection", "Medication", "Small amount of local currency"] },
    { title: "Expedition Voyage Packing", items: ["Waterproof layers", "Warm accessories", "Small backpack", "Waterproof phone protection", "Camera protection", "Binoculars"] },
];

const accessibilityChecklist = ["Stairs", "Uneven terrain", "Long walks", "Transfers", "Getting into small boats", "Standing for long periods"];

const matrixRows = [
    { feature: "Sightseeing", traditional: "Excellent", ventures: "Sometimes" },
    { feature: "Culture", traditional: "Excellent", ventures: "Good" },
    { feature: "Food & wine", traditional: "Excellent", ventures: "Sometimes" },
    { feature: "Adventure", traditional: "Moderate", ventures: "High" },
    { feature: "Nature", traditional: "Good", ventures: "High" },
    { feature: "Active exploration", traditional: "Limited to moderate", ventures: "Strong" },
    { feature: "Remote environments", traditional: "Sometimes", ventures: "More likely" },
    { feature: "Hiking", traditional: "Some", ventures: "More common" },
    { feature: "Wildlife", traditional: "Destination dependent", ventures: "Strong focus on applicable itineraries" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournShoreExcursionsGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeDestTab, setActiveDestTab] = useState(0);

    const ActiveIcon = destinationTabs[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Shore Excursions: Ventures, Tours & Activities</title>
                <meta name="title" content="Seabourn Shore Excursions Guide: Tours, Ventures & Activities" />
                <meta
                    name="description"
                    content="Explore Seabourn shore excursions, including traditional tours, Ventures by Seabourn, expedition activities, private experiences, wildlife adventures and planning tips."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Shore Excursions <br /> Complete Guide</h1>
                    <p>
                        Seabourn shore excursions are an important part of the cruise experience, offering
                        travelers opportunities to explore destinations beyond the ship.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Depending on the itinerary, Seabourn excursions can range from traditional
                                guided sightseeing tours and cultural experiences to active adventures, private
                                experiences and expedition activities.
                            </p>
                            <p>
                                For travelers sailing on Seabourn's traditional ocean and small-ship
                                itineraries, excursions can provide a deeper look at the destinations on the
                                itinerary. For expedition voyages aboard Seabourn Venture and Seabourn
                                Pursuit, the experience becomes more immersive, with activities such as
                                Zodiac exploration, wildlife observation, kayaking and guided landings.
                                Seabourn also offers Ventures by Seabourn, a collection of more immersive
                                and active experiences designed to take travelers deeper into the
                                destination.
                            </p>
                            <p>
                                This guide explains the different types of Seabourn shore excursions, what
                                to expect, which activities may be best for different travelers, and how to
                                choose excursions that fit your interests and activity level.
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
                            Start Planning Your Shore Excursions
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-quick-answer">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Quick Answer</span>
                        <h2 className="Sbc-h2">What Are Seabourn Shore Excursions?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn shore excursions are organized experiences that allow guests to
                            explore destinations during their cruise. Depending on the itinerary, they can
                            include:
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">The selection varies by destination and sailing:</h4>
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
                                The most important distinction is between traditional shore excursions and
                                expedition activities.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Map size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Shore Excursions Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THREE MAIN TYPES ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-three-types">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Understand the Options</span>
                        <h2 className="Sbc-h2">The Three Main Types of Seabourn Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn excursions can broadly be divided into three categories. Understanding
                            this distinction makes it much easier to choose the right experience.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {threeTypesCards.map((card, i) => {
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

            {/* ── TRADITIONAL SHORE EXCURSIONS ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Destination-Focused</span>
                        <h2 className="Sbc-h2">Traditional Seabourn Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Traditional excursions are ideal for travelers who want to understand the
                            destination without necessarily participating in a physically demanding
                            adventure. They can include:
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights" style={{ marginBottom: "48px" }}>
                        <h4 className="Sbc-highlights-title">These excursions are particularly useful when visiting a destination for the first time:</h4>
                        <ul className="Sbc-highlights-list">
                            {traditionalOverviewList.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-fit-grid">
                        {traditionalSubtypes.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-dining-image-placeholder Sse-card-icon-wrap">
                                        <div className="Sbc-dining-placeholder-icon-wrapper">
                                            <Icon size={32} className="Sbc-dining-placeholder-icon" />
                                        </div>
                                        <span className="Sbc-dining-placeholder-text">{card.title} Image Placeholder</span>
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                    <ul className="Sse-compare-list">
                                        {card.items.map((item, j) => (
                                            <li key={j} className="Sse-compare-item">
                                                <Check size={14} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="Sse-fit-footer">{card.footer}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── VENTURES BY SEABOURN ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-ventures">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Immersive Exploration</span>
                                <h2 className="Sbc-h2">What Are Ventures by Seabourn?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Ventures by Seabourn focuses on more immersive experiences that allow guests
                                to explore destinations in active and unconventional ways. Rather than
                                simply viewing a destination from a coach or joining a standard city tour, a
                                Ventures experience may instead take you:
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">The key difference is the style of exploration:</h4>
                                <ul className="Sbc-qa-list">
                                    {venturesDifferentList.map((item, idx) => (
                                        <li key={idx}>
                                            <Compass size={20} strokeWidth={2.5} style={{ color: "var(--navy)", background: "var(--bg-soft)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">This makes Ventures particularly appealing to travelers who want to be more involved in the destination.</div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Ventures by Seabourn Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="Sbc-qa-card" style={{ marginTop: "40px" }}>
                        <h4 className="Sbc-qa-card-title">When comparing excursions, look carefully at:</h4>
                        <ul className="Sbc-qa-list">
                            {venturesIncludedList.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={20} strokeWidth={2.5} style={{ color: "#10b981", background: "rgba(16,185,129,0.1)" }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Curated Experiences Ashore</span>
                    <h3 className="Sbc-cta-title">Let's Find Your Perfect Shore Excursion</h3>
                    <p className="Sbc-cta-text">
                        From sightseeing and culinary tours to Zodiac expeditions, we'll help you choose
                        excursions that match your interests and activity level in every port.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan My Shore Excursions
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── EXPEDITION ACTIVITIES ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond the Ports</span>
                        <h2 className="Sbc-h2">Seabourn Expedition Activities</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For travelers sailing aboard Seabourn Venture or Seabourn Pursuit, excursions
                            can become much more expedition-oriented. The experience is fundamentally
                            different from a conventional cruise excursion.
                        </p>
                    </div>

                    <div className="Sbc-fit-grid">
                        {expeditionActivities.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                    <ul className="Sse-compare-list">
                                        {card.items.map((item, j) => (
                                            <li key={j} className="Sse-compare-item">
                                                <Dot size={22} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="Sse-fit-footer">{card.footer}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── EXCURSIONS BY DESTINATION (TABS) ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-by-destination">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where the Adventure Happens</span>
                        <h2 className="Sbc-h2">Seabourn Excursions by Destination</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's European itineraries provide a broad range of traditional
                            excursions, while Antarctica and Alaska showcase the line's most distinctive
                            expedition activities. European excursions are often particularly strong for
                            travelers interested in history, food and culture.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: "center" }}>
                            {destinationTabs.map((dest, i) => {
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
                                    <ActiveIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">{destinationTabs[activeDestTab].title} Excursions Image</span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Destination</span>
                                <h3 className="Sbc-dest-tab-title">{destinationTabs[activeDestTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{destinationTabs[activeDestTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{destinationTabs[activeDestTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {destinationTabs[activeDestTab].listItems.map((item, j) => (
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

            {/* ── DURATION ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-duration">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Plan Ahead</span>
                        <h2 className="Sbc-h2">How Long Are Seabourn Shore Excursions?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Excursion durations vary.</p>
                    </div>

                    <div className="Sse-duration-grid">
                        <div className="Sse-duration-card">
                            <h3 className="Sse-duration-card-title">A tour may last:</h3>
                            <ul>
                                {["A few hours", "Half a day", "Most of the day", "A full-day experience"].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sse-duration-card">
                            <h3 className="Sse-duration-card-title">Check:</h3>
                            <ul>
                                {["Departure time", "Return time", "Transportation", "Walking requirements", "Meal arrangements", "Activity level"].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sse-duration-note">
                        <AlertCircle size={18} />
                        <span>When comparing options, don't look only at the excursion title.</span>
                    </div>
                </div>
            </section>

            {/* ── ACTIVITY LEVELS ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-activity-levels">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Physical Demands</span>
                        <h2 className="Sbc-h2">Seabourn Excursion Activity Levels</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the most important things to check before booking is the activity
                            level. Excursions can range from relatively easy sightseeing to physically
                            demanding adventures. Choose based on your actual comfort level rather than
                            simply the name of the activity.
                        </p>
                    </div>

                    <div className="Sbc-fit-grid" style={{ marginTop: "32px" }}>
                        {activityLevels.map((card, i) => {
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

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore Further</span>
                    <h3 className="Sbc-cta-title">Ready for an Expedition Adventure?</h3>
                    <p className="Sbc-cta-text">
                        Whether it's Zodiac cruising in Antarctica or glacier viewing in Alaska, let's
                        design a shore experience that matches your sense of adventure.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Excursion Plan
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── CHOOSING BY TRAVELER TYPE ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-traveler-type">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit for You</span>
                        <h2 className="Sbc-h2">Choosing Excursions by Traveler Type</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sse-traveler-grid">
                        {travelerTypeCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sse-traveler-card" key={i}>
                                    <div className="Sse-traveler-image-placeholder">
                                        <div className="Sse-traveler-placeholder-icon-wrapper">
                                            <Icon size={32} className="Sse-traveler-placeholder-icon" />
                                        </div>
                                        <span className="Sse-traveler-placeholder-text">{card.title} Image Placeholder</span>
                                    </div>
                                    
                                    <h3 className="Sse-traveler-card-title">{card.title}</h3>
                                    <p className="Sse-traveler-card-text">{card.intro}</p>
                                    
                                    {card.listTitle && (
                                        <h4 className="Sse-traveler-list-title"><strong>{card.listTitle}</strong></h4>
                                    )}
                                    
                                    {card.items && card.items.length > 0 && (
                                        <ul className="Sse-compare-list-small">
                                            {card.items.map((item, j) => (
                                                <li key={j} className="Sse-compare-item">
                                                    <Check size={14} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    
                                    <div className="Sse-traveler-card-footer">
                                        {card.paragraphs.map((p, idx) => (
                                            <p className={`Sse-traveler-card-text ${idx > 0 || (card.items && card.items.length > 0) ? "Sse-traveler-text-margin" : ""}`} key={idx}>
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WORTH THE MONEY ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Value & Cost</span>
                        <h2 className="Sbc-h2">Are Seabourn Shore Excursions Worth the Money?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">It depends on the excursion.</p>
                    </div>

                    <p className="Sbc-p Sse-worth-intro">
                        The best value usually comes from experiences that provide something difficult to arrange independently.
                    </p>

                    <div className="Sse-worth-grid">
                        {[
                            { title: "Remote transportation", desc: "Coordinates travel to hard-to-reach destinations without independent worries.", icon: Ship },
                            { title: "Expert guides", desc: "Access to local naturalists, historians, and specialists who enrich your journey.", icon: Users },
                            { title: "Exclusive access", desc: "Private entry to sights and events closed to the general public.", icon: Gem },
                            { title: "Wildlife environments", desc: "Guided explorations through sensitive habits and wildlife reservations.", icon: Mountain },
                            { title: "Specialized equipment", desc: "Providing kayaks, zodiacs, snorkeling gear, or other specialized tools.", icon: Anchor },
                            { title: "Complex logistics", desc: "Flawless coordination of flights, permits, land travel, and dining ashore.", icon: Compass }
                        ].map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sse-worth-card" key={idx}>
                                    <div className="Sse-worth-icon-wrapper">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="Sse-worth-card-title">{card.title}</h3>
                                    <p className="Sse-worth-card-desc">{card.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Sse-worth-footer-box">
                        <AlertCircle size={20} />
                        <span>A basic city sightseeing tour may be easier to arrange independently, while a remote expedition activity can provide considerably more value.</span>
                    </div>
                </div>
            </section>

            {/* ── BOOK VS INDEPENDENT ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-book-vs-independent">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">How to Explore</span>
                        <h2 className="Sbc-h2">Should You Book Seabourn Excursions or Explore Independently?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Both approaches can work.</p>
                    </div>

                    <div className="Sse-duration-grid">
                        <div className="Sse-duration-card">
                            <h3 className="Sse-duration-card-title">Choose a Seabourn excursion if you want:</h3>
                            <ul>
                                {[
                                    "Organized transportation",
                                    "A professional guide",
                                    "Minimal planning",
                                    "Coordinated timing",
                                    "Destination expertise",
                                    "A ship-coordinated experience"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sse-duration-card">
                            <h3 className="Sse-duration-card-title">Consider independent exploration if you prefer:</h3>
                            <ul>
                                {[
                                    "Flexibility",
                                    "Your own schedule",
                                    "Local restaurants",
                                    "Shopping",
                                    "Slow travel",
                                    "Independent discovery"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sse-duration-note">
                        <AlertCircle size={18} />
                        <span>For remote or complicated destinations, the organized excursion can be the safer and more convenient option.</span>
                    </div>
                </div>
            </section>


            {/* ── HOW TO CHOOSE THE BEST EXCURSION ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-how-to-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Match Your Interests</span>
                        <h2 className="Sbc-h2">How to Choose the Best Seabourn Shore Excursion</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Start with your travel goal.</p>
                    </div>

                    <div className="Sse-goal-grid">
                        {goalPairs.map((pair, i) => (
                            <div className="Sse-goal-row" key={i}>
                                <span className="Sse-goal-want">{pair.want}</span>
                                <ArrowRight size={16} className="Sse-goal-arrow" />
                                <span className="Sse-goal-choose">{pair.choose}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Book with Confidence</span>
                    <h3 className="Sbc-cta-title">Let's Build Your Perfect Port Day</h3>
                    <p className="Sbc-cta-text">
                        From culinary tours to Zodiac wildlife cruises, we'll match every port to the
                        experience that fits your travel goals.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PLANNING STRATEGY ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sse-planning">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Balance Is Everything</span>
                        <h2 className="Sbc-h2">Seabourn Excursion Planning Strategy</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Don't book every available excursion. Instead, create a balance. Cruising can
                            become exhausting if every port involves a six- or eight-hour tour — leave room
                            to enjoy the ship.
                        </p>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <div className="Sbc-verdict-recommend">
                            <p><strong>A useful approach:</strong> One major excursion + independent time + relaxation.</p>
                        </div>
                    </div>

                    <div className="Sbc-verdict-copy" style={{ marginTop: "40px" }}>
                        <p className="Sbc-p">
                            Should you book excursions in every port? No. One of the advantages of Seabourn
                            is that the ship itself is part of the experience. Some ports may be worth
                            exploring extensively. Others may be better suited to a relaxed morning followed
                            by an afternoon onboard.
                        </p>
                        <div className="Sbc-verdict-recommend">
                            <p><strong>Consider alternating:</strong> Active port → Relaxed port → Active port. This can make the overall cruise more enjoyable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Excursion Pros and Cons</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Pros</h3>
                            <ul>
                                {prosList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Cons</h3>
                            <ul>
                                {consList.map((item, i) => (
                                    <li key={i}>
                                        <X size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO WEAR, PACK & BRING ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sse-wear-pack">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Pack Smart</span>
                        <h2 className="Sbc-h2">What to Wear, Pack & Bring</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Your clothing should match the activity. Always follow Seabourn's current
                            requirements for specialized expedition activities, and avoid carrying
                            unnecessary valuables in your day bag.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {wearPackGrid.map((cat, i) => (
                            <div className="Sbc-includes-card" key={i}>
                                <div className="Sbc-includes-title">{cat.title}</div>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="Sbc-includes-note">
                        <p>
                            <strong>For Antarctic and polar voyages:</strong> follow Seabourn's specific
                            pre-cruise equipment and clothing instructions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ACCESSIBILITY ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-accessibility">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Plan for Comfort</span>
                                <h2 className="Sbc-h2">Seabourn Excursions and Accessibility</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Accessibility varies considerably by excursion. Before booking, review
                                whether the activity involves:
                            </p>

                            <div className="Sbc-qa-card">
                                <ul className="Sbc-qa-list">
                                    {accessibilityChecklist.map((item, idx) => (
                                        <li key={idx}>
                                            <AlertCircle size={20} strokeWidth={2.5} style={{ color: "var(--navy)", background: "var(--bg-soft)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sbc-qa-warning-box">
                                Travelers with mobility considerations should discuss specific excursions
                                with their travel advisor before booking.
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Excursion Accessibility Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 4 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Seamless Preparation</span>
                    <h3 className="Sbc-cta-title">Prepare for Your Next Voyage</h3>
                    <p className="Sbc-cta-text">
                        Have questions about mobility options, special requirements, or what to pack for your excursions? Our specialists are here to guide you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Ask Our Specialists
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS VS VENTURES (MATRIX TABLE) ──────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sse-vs-ventures">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Side by Side</span>
                        <h2 className="Sbc-h2">Seabourn Shore Excursions <br /> vs. Ventures by Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The distinction is not absolute, but Ventures generally appeals more to
                            travelers looking for immersive exploration.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Traditional Shore Excursions</th>
                                    <th>Ventures by Seabourn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matrixRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.feature}</td>
                                        <td>{row.traditional}</td>
                                        <td>{row.ventures}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── EXCURSIONS VS EXPEDITION ACTIVITIES ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sse-vs-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Two Different Approaches</span>
                        <h2 className="Sbc-h2">Seabourn Shore Excursions <br /> vs. Expedition Activities</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Both are valuable, but they appeal to different types of travelers.
                        </p>
                    </div>

                    <div className="Sse-duration-grid">
                        <div className="Sse-duration-card">
                            <div className="Sbc-card-icon Sse-card-icon-wrap">
                                <Landmark size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sse-duration-card-title">Traditional Shore Excursions</h3>
                            <p className="Sse-card-p-desc">
                                Traditional excursions are generally designed around a destination or attraction.
                            </p>
                            <ul className="Sse-card-nested-list">
                                <li className="Sse-card-nested-li">
                                    <Check size={16} />
                                    <span><strong>Traditional:</strong> Visit a historic city and museum.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="Sse-duration-card">
                            <div className="Sbc-card-icon Sse-card-icon-wrap">
                                <Mountain size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sse-duration-card-title">Expedition Activities</h3>
                            <p className="Sse-card-p-desc">
                                Expedition activities are designed around the environment itself.
                            </p>
                            <ul className="Sse-card-nested-list">
                                <li className="Sse-card-nested-li">
                                    <Check size={16} />
                                    <span><strong>Expedition:</strong> Take a Zodiac into a remote bay to observe wildlife.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="Sse-duration-note Sse-duration-note-block">
                        <div className="Sse-duration-note-header">
                            <AlertCircle size={20} />
                            <h4 style={{ margin: 0, fontSize: "17px", fontWeight: "600", color: "var(--navy)" }}>Are Seabourn Expedition Activities Included?</h4>
                        </div>
                        <div className="Sse-duration-note-body">
                            <p className="Sse-duration-note-p">
                                Expedition activities form an important part of the experience aboard Seabourn's dedicated expedition ships.
                            </p>
                            <p className="Sse-duration-note-p">
                                However, specific activities, excursions and optional experiences can have different booking and pricing arrangements.
                            </p>
                            <p className="Sse-duration-note-p-bold">
                                Always check the individual voyage details rather than assuming every activity is included.
                            </p>
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
            <section className="Sbc-section Sbc-bg-white" id="Sse-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking Seabourn shore excursions.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

         

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sse-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Verdict</span>
                        <h2 className="Sbc-h2">Choosing Experiences That Fit the Destination</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn's shore excursions provide considerably more choice than simply
                            booking a standard guided tour. The program ranges from classic sightseeing
                            and culinary experiences to Ventures by Seabourn and expedition activities
                            involving Zodiacs, kayaking, wildlife and remote landings.
                        </p>
                        <p className="Sbc-p">
                            The best excursion isn't necessarily the longest or most expensive. It's the
                            one that matches how you want to experience the destination. For a first-time
                            visitor, a traditional guided excursion can provide an efficient introduction.
                            For an adventurous traveler, Ventures can provide a more active perspective.
                            For expedition travelers aboard Seabourn Venture or Seabourn Pursuit, Zodiac
                            operations, wildlife encounters and shore landings can become the centerpiece
                            of the voyage.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Balance exploration with time onboard
                                so that the cruise itself remains part of the vacation.
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

export default SeabournShoreExcursionsGuide;