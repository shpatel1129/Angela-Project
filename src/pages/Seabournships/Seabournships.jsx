import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Anchor,
    Compass,
    Snowflake,
    Landmark,
    Home,
    Gem,
    Utensils,
    Sun,
    Waves,
    Star,
    MapPin,
    Award,
    Users,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";
import "./Seabournships.css";
import "../SeabournCruises/SeabournCruises.css";


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
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#webpage",
            name: "Seabourn Ships: Complete Fleet Guide & Ship Comparison",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/",
            description:
                "Compare Seabourn ships including Quest, Encore, Ovation, Venture and Pursuit. Explore suites, dining, amenities, expedition features, size and which Seabourn ship is best for you.",
            inLanguage: "en-US",
            isPartOf: { "@id": "https://www.tripsandships.com/#website" },
            about: { "@type": "Brand", name: "Seabourn" },
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#article",
            headline: "Seabourn Ships: The Complete Fleet Guide",
            description:
                "A complete guide comparing Seabourn Quest, Seabourn Encore, Seabourn Ovation, Seabourn Venture and Seabourn Pursuit, including ship size, suites, dining, amenities, expedition capabilities and which ship may be best for different travel styles.",
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
            mainEntityOfPage: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#webpage",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ships", item: "https://www.tripsandships.com/seabourn-cruises/ships/" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#service",
            serviceType: "Seabourn Cruise Planning and Ship Selection",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
                "@id": "https://www.tripsandships.com/#travelagency",
            },
            areaServed: "Worldwide",
            description:
                "Personalized Seabourn cruise planning and ship selection support, including itinerary comparison, suite selection, ocean and expedition ship recommendations, and luxury cruise planning.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#fleet",
            name: "Seabourn Fleet",
            description: "The five Seabourn ships covered in this complete fleet guide.",
            numberOfItems: 5,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Seabourn Quest", item: { "@type": "Product", name: "Seabourn Quest", brand: { "@type": "Brand", name: "Seabourn" }, category: "Luxury Ocean Cruise Ship" } },
                { "@type": "ListItem", position: 2, name: "Seabourn Encore", item: { "@type": "Product", name: "Seabourn Encore", brand: { "@type": "Brand", name: "Seabourn" }, category: "Luxury Ocean Cruise Ship" } },
                { "@type": "ListItem", position: 3, name: "Seabourn Ovation", item: { "@type": "Product", name: "Seabourn Ovation", brand: { "@type": "Brand", name: "Seabourn" }, category: "Luxury Ocean Cruise Ship" } },
                { "@type": "ListItem", position: 4, name: "Seabourn Venture", item: { "@type": "Product", name: "Seabourn Venture", brand: { "@type": "Brand", name: "Seabourn" }, category: "Luxury Expedition Cruise Ship" } },
                { "@type": "ListItem", position: 5, name: "Seabourn Pursuit", item: { "@type": "Product", name: "Seabourn Pursuit", brand: { "@type": "Brand", name: "Seabourn" }, category: "Luxury Expedition Cruise Ship" } },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/#faq",
            mainEntity: [
                { "@type": "Question", name: "How many Seabourn ships are there?", acceptedAnswer: { "@type": "Answer", text: "Seabourn currently operates five ships in its fleet: Seabourn Quest, Seabourn Encore, Seabourn Ovation, Seabourn Venture and Seabourn Pursuit." } },
                { "@type": "Question", name: "Which Seabourn ship is the newest?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Pursuit is the newest of the five ships covered in this fleet, having entered service in August 2023." } },
                { "@type": "Question", name: "Which Seabourn ships are expedition ships?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture and Seabourn Pursuit are the line's purpose-built expedition ships." } },
                { "@type": "Question", name: "Which Seabourn ships are ocean ships?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Quest, Seabourn Encore and Seabourn Ovation are the fleet's primary ocean-going luxury ships." } },
                { "@type": "Question", name: "Which Seabourn ship is best for Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture and Seabourn Pursuit are the primary ships to consider for Antarctica because they are purpose-built expedition vessels equipped for remote exploration." } },
                { "@type": "Question", name: "What is the difference between Seabourn Venture and Pursuit?", acceptedAnswer: { "@type": "Answer", text: "They are sister expedition ships with similar core capabilities, including 24 Zodiacs, kayaks and 19-person Expedition Teams. Pursuit entered service in 2023, one year after Venture." } },
                { "@type": "Question", name: "Are Seabourn Encore and Ovation sister ships?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn describes Ovation as the sister ship to Encore." } },
                { "@type": "Question", name: "Which Seabourn ship is best for the Mediterranean?", acceptedAnswer: { "@type": "Answer", text: "Quest, Encore and Ovation can all be considered for Mediterranean cruising. The best choice depends heavily on the specific itinerary, departure date, suite and port schedule." } },
                { "@type": "Question", name: "Which Seabourn ship is best for first-time Seabourn travelers?", acceptedAnswer: { "@type": "Answer", text: "Encore or Ovation can be attractive introductions to the contemporary Seabourn ocean experience, while Quest may appeal to travelers specifically looking for the line's classic intimate atmosphere." } },
                { "@type": "Question", name: "Which Seabourn ship has the largest capacity?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Encore and Seabourn Ovation each accommodate approximately 600 guests, making them larger than Quest and the 264-guest expedition ships." } },
                { "@type": "Question", name: "Do all Seabourn ships have suites?", acceptedAnswer: { "@type": "Answer", text: "Seabourn's fleet is built around luxury suite accommodation, with oceanfront suites across its ships. Encore and Ovation specifically offer oceanfront suites with private verandas." } },
                { "@type": "Question", name: "Do Seabourn expedition ships have balconies?", acceptedAnswer: { "@type": "Answer", text: "Seabourn expedition ships offer luxury oceanfront accommodations, but travelers should compare the specific suite category and deck plan for the sailing they are considering." } },
                { "@type": "Question", name: "Which Seabourn ship is best for luxury adventure travel?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture and Pursuit are the strongest choices for travelers who want luxury combined with expedition-style exploration." } },
                { "@type": "Question", name: "Which Seabourn ship is best for a quiet luxury cruise?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Quest can be particularly appealing to travelers who prioritize an intimate, classic small-ship atmosphere." } },
                { "@type": "Question", name: "Which Seabourn ship has the best dining?", acceptedAnswer: { "@type": "Answer", text: "There is no single objective winner. Encore, Ovation and Quest all offer sophisticated dining, while Venture and Pursuit combine Seabourn's culinary approach with expedition travel." } },
                { "@type": "Question", name: "Is Seabourn Venture only an expedition ship?", acceptedAnswer: { "@type": "Answer", text: "Venture is a purpose-built expedition ship, but Seabourn also uses it for some traditional ocean voyages depending on the deployment." } },
                { "@type": "Question", name: "Are Seabourn ships small?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn deliberately operates small ships designed to provide a more intimate, yacht-like experience than large mainstream cruise ships." } },
                { "@type": "Question", name: "How do I choose the best Seabourn ship?", acceptedAnswer: { "@type": "Answer", text: "Start with your destination, then compare the ship's itinerary, suite category, amenities, sailing date and price. For remote destinations, prioritize Venture or Pursuit; for traditional ocean cruising, compare Quest, Encore and Ovation." } },
            ],
        },
    ],
};

/* ── Data ──────────────────────────────────────────────────────── */
const quickCompare = [
    { ship: "Seabourn Quest", type: "Ocean", capacity: "~458", best: "Classic Seabourn, intimate luxury" },
    { ship: "Seabourn Encore", type: "Ocean", capacity: "600", best: "Modern luxury, suites & dining" },
    { ship: "Seabourn Ovation", type: "Ocean", capacity: "600", best: "Contemporary luxury & European cruising" },
    { ship: "Seabourn Venture", type: "Expedition", capacity: "264", best: "Antarctica, Arctic & remote exploration" },
    { ship: "Seabourn Pursuit", type: "Expedition", capacity: "264", best: "Newer expedition experience & remote destinations" },
];

const bestForCards = [
    { icon: Ship, title: "Seabourn Quest", text: "Best for classic Seabourn intimacy and a traditional small-ship atmosphere." },
    { icon: Waves, title: "Seabourn Encore", text: "Best for a modern ocean cruise with expanded suite categories and dining." },
    { icon: Sun, title: "Seabourn Ovation", text: "Best for contemporary luxury cruising, especially in European destinations." },
    { icon: Snowflake, title: "Seabourn Venture", text: "Best for expedition cruising in Antarctica, the Arctic and remote regions." },
    { icon: Compass, title: "Seabourn Pursuit", text: "Best for the newest expedition experience across remote destinations." },
];

const ships = [
    {
        name: "Seabourn Quest",
        subtitle: "Classic Small-Ship Seabourn Luxury",
        meta: "Ocean · ~458 guests",
        desc: [
            "Seabourn Quest represents the classic evolution of Seabourn's larger small-ship design.",
            "The ship entered service in 2011 and is part of the trio of vessels that Seabourn describes as a major evolution of its small-ship concept.",
            "Seabourn highlights Quest for its dining options, including complimentary dining venues, and its intimate onboard atmosphere."
        ],
        glanceTitle: "Seabourn Quest at a Glance",
        glance: [
            "Ocean-going luxury ship",
            "Approximately 458 guests",
            "Intimate small-ship atmosphere",
            "Multiple dining venues",
            "Spa and wellness",
            "Fitness center",
            "In-suite dining",
            "Seabourn Conversations",
            "Sky Bar",
            "The Club",
            "Casino",
            "Caviar and other signature Seabourn experiences"
        ],
        best: [
            "Travelers who want the classic Seabourn experience.",
            "Quest can be especially attractive if you care more about intimacy and atmosphere than having the newest ship in the fleet."
        ],
        differentTitle: "What makes Quest different?",
        different: [
            "Its smaller capacity creates a particularly intimate feel compared with the 600-guest Encore and Ovation.",
            "For travelers who think of Seabourn as a private yacht-style experience, Quest is an important ship to consider."
        ]
    },
    {
        name: "Seabourn Encore",
        subtitle: "Modern Ocean Luxury With More Space",
        meta: "Ocean · 600 guests",
        desc: [
            "Seabourn Encore represents the next generation of Seabourn's ocean fleet.",
            "The ship entered service in 2016 and carries approximately 600 guests. Seabourn lists its length at 690 feet and width at 92 feet.",
            "Encore was designed as an evolution of the earlier Seabourn ships, adding another deck and expanded common spaces.",
            "Seabourn states that Encore has 13 categories of oceanfront suites with private verandas, with suites ranging from 251 to 1,306 square feet of interior space."
        ],
        glanceTitle: "Seabourn Encore Highlights",
        glance: [
            "600 guests",
            "690 feet long",
            "92 feet wide",
            "Oceanfront suites",
            "Private verandas",
            "13 suite categories",
            "Solis",
            "The Restaurant",
            "Sushi",
            "Seabourn Square",
            "Observation Bar",
            "The Retreat",
            "Spa & Wellness",
            "Pool",
            "Earth & Ocean",
            "Fitness Center",
            "The Patio",
            "The Colonnade",
            "Sky Bar"
        ],
        best: [
            "Travelers who want a modern Seabourn ocean ship with a broader selection of onboard spaces and suite categories."
        ]
    },
    {
        name: "Seabourn Ovation",
        subtitle: "Encore's Sister Ship",
        meta: "Ocean · 600 guests",
        desc: [
            "Seabourn Ovation is the sister ship to Seabourn Encore and entered service in 2018.",
            "Seabourn describes Ovation as another stage in the evolution of the small-ship concept pioneered by the brand.",
            "Because Encore and Ovation share the same general design lineage, they are among the easiest Seabourn ships to compare."
        ],
        glanceTitle: "Seabourn Ovation Highlights",
        glance: [
            "600 guests",
            "Ocean-going luxury",
            "Oceanfront suites",
            "Private verandas",
            "Solis",
            "The Restaurant",
            "Sushi",
            "Seabourn Square",
            "Observation Bar",
            "The Retreat",
            "Spa & Wellness",
            "Pool",
            "Earth & Ocean",
            "Fitness Center",
            "The Patio",
            "The Colonnade",
            "Sky Bar"
        ],
        best: [
            "Travelers looking for a contemporary Seabourn experience with a strong combination of luxury accommodations, dining and wellness."
        ]
    },
    {
        name: "Seabourn Venture",
        subtitle: "Purpose-Built Luxury Expedition Ship",
        meta: "Expedition · 264 guests",
        desc: [
            "Seabourn Venture is fundamentally different from Quest, Encore and Ovation.",
            "It is a purpose-built expedition ship designed to take guests into remote environments while maintaining Seabourn's luxury service and accommodations.",
            "Venture entered service in 2022 and was built to PC6 Polar Class standards. It carries 24 Zodiacs, kayaks and a 19-person expert Expedition Team.",
            "Seabourn's expedition program currently uses Venture for both traditional ocean voyages and expedition experiences, depending on the itinerary."
        ],
        glanceTitle: "Seabourn Venture at a Glance",
        glance: [
            "264 guests",
            "557 feet long",
            "78 feet wide",
            "Purpose-built expedition ship",
            "PC6 Polar Class standards",
            "24 Zodiacs",
            "Kayaks",
            "19-person Expedition Team",
            "Expedition Lounge",
            "Discovery Center",
            "Seabourn Square",
            "Spa",
            "The Club",
            "The Restaurant"
        ],
        destinationsTitle: "Destinations can include:",
        destinations: [
            "Antarctica",
            "Arctic",
            "Northwest Passage",
            "Kimberley",
            "South Pacific",
            "Other remote expedition regions"
        ],
        best: [
            "Luxury adventure travelers who want remote destinations without giving up sophisticated accommodations and service."
        ]
    },
    {
        name: "Seabourn Pursuit",
        subtitle: "The Newer Generation of Seabourn Expedition Cruising",
        meta: "Expedition · 264 guests",
        desc: [
            "Seabourn Pursuit is the second purpose-built expedition ship in the Seabourn fleet.",
            "It entered service on August 12, 2023 and was designed for remote exploration while maintaining a yacht-like luxury environment.",
            "Seabourn's current expedition deployment describes Pursuit as visiting destinations across the South Pacific, Kimberley, Antarctica, South Georgia and the Falkland Islands."
        ],
        glanceTitle: "Seabourn Pursuit Highlights",
        glance: [
            "264 guests",
            "Purpose-built expedition ship",
            "PC6 Polar Class standards",
            "24 Zodiacs",
            "Kayaks",
            "19-person Expedition Team",
            "Expedition Lounge",
            "Discovery Center",
            "The Restaurant",
            "Seabourn Square",
            "Spa",
            "Remote-destination capabilities"
        ],
        destinationsTitle: "Destinations include:",
        destinations: [
            "Antarctica",
            "South Georgia",
            "Falkland Islands",
            "South Pacific",
            "Kimberley",
            "Other remote destinations"
        ],
        best: [
            "Travelers looking for a newer, purpose-built Seabourn expedition experience."
        ]
    }
];


const ventureVsPursuit = [
    { label: "Ship type", venture: "Expedition", pursuit: "Expedition" },
    { label: "Guests", venture: "264", pursuit: "264" },
    { label: "Entered service", venture: "2022", pursuit: "2023" },
    { label: "Expedition Team", venture: "19", pursuit: "19" },
    { label: "Zodiacs", venture: "24", pursuit: "24" },
    { label: "Kayaks", venture: "Yes", pursuit: "Yes" },
    { label: "Polar Class", venture: "PC6", pursuit: "PC6" },
    { label: "Remote destinations", venture: "Yes", pursuit: "Yes" },
    { label: "Luxury accommodations", venture: "Yes", pursuit: "Yes" },
    { label: "Best for", venture: "Expedition pioneers", pursuit: "Newer expedition experience" },
];

const comparisonTabs = [
    {
        title: "Encore vs Ovation",
        longTitle: "Seabourn Encore vs Seabourn Ovation",
        intro: "Encore and Ovation are sister ships and are among the closest comparisons in the Seabourn fleet.",
        bothOffer: [
            "600 guests",
            "Oceanfront suites",
            "Private verandas",
            "Contemporary design",
            "Multiple dining venues",
            "Spa and wellness",
            "Fitness facilities",
            "Seabourn Square",
            "Luxury public spaces"
        ],
        extraInfo: "Seabourn specifically identifies Ovation as Encore's sister ship.",
        whichBetterTitle: "Which is better?",
        whichBetterIntro: "There is no universal winner. If both are offering similar itineraries, compare:",
        compareItems: [
            "Sailing date",
            "Itinerary",
            "Suite category",
            "Port schedule",
            "Price",
            "Any current promotions",
            "Your preferred embarkation port"
        ],
        verdict: "The itinerary should usually break the tie."
    },
    {
        title: "Quest vs Encore",
        longTitle: "Seabourn Quest vs Seabourn Encore",
        intro: "This comparison is more about ship size and style.",
        questPreferTitle: "Choose Quest if you prefer:",
        questPrefer: [
            "A more intimate atmosphere",
            "Classic Seabourn design",
            "Smaller guest capacity",
            "Traditional small-ship feel"
        ],
        encorePreferTitle: "Choose Encore if you prefer:",
        encorePrefer: [
            "600-guest capacity",
            "More modern design",
            "Expanded common areas",
            "More suite categories",
            "A newer-generation ocean ship"
        ],
        extraInfo: "Encore represents the evolution of the earlier Seabourn design and adds an additional deck and expanded common areas."
    },
    {
        title: "Quest vs Ovation",
        longTitle: "Seabourn Quest vs Seabourn Ovation",
        intro: "The same general decision applies.",
        questSuitedTitle: "Quest",
        questSuitedText: "Better suited to travelers who prioritize classic Seabourn intimacy.",
        ovationSuitedTitle: "Ovation",
        ovationSuitedText: "Better suited to travelers who prefer a newer-generation ship with expanded facilities.",
        verdict: "The most important factor, however, remains the itinerary."
    },
    {
        title: "Ocean vs Expedition",
        longTitle: "Seabourn Ocean Ship vs Expedition Ship: Which Should You Choose?",
        question: "Is the ship the destination, or is the destination the destination?",
        oceanTitle: "If you want to spend your vacation enjoying:",
        oceanItems: [
            "Fine dining",
            "Spa",
            "Pool",
            "Lounges",
            "Bars",
            "Relaxed sea days",
            "Sophisticated onboard spaces"
        ],
        oceanVerdict: "an ocean ship such as Encore, Ovation or Quest may be the better fit.",
        expeditionTitle: "If you want:",
        expeditionItems: [
            "Penguins",
            "Polar landscapes",
            "Zodiac excursions",
            "Wildlife",
            "Remote islands",
            "Expedition guides",
            "Active exploration"
        ],
        expeditionVerdict: "choose Venture or Pursuit."
    }
];

const destinationTabs = [
    {
        icon: Landmark,
        title: "Mediterranean",
        subtitle: "Which Seabourn Ship Is Best for the Mediterranean?",
        desc: "For a traditional Mediterranean luxury cruise, start by comparing Seabourn Quest, Seabourn Encore and Seabourn Ovation. Seabourn's ocean fleet is designed for destination-rich voyages, and the line's current programs include European destinations.",
        listLabel: "When choosing a Mediterranean sailing, compare:",
        listItems: ["Greek Isles", "Italy", "Croatia", "France", "Spain", "Turkey", "Adriatic itineraries", "Overnight calls", "Smaller ports"],
        best: "The itinerary and port schedule can make a bigger difference than the ship itself.",
    },
    {
        icon: Snowflake,
        title: "Antarctica",
        subtitle: "Which Seabourn Ship Is Best for Antarctica?",
        desc: "For Antarctica, focus on Seabourn Venture or Seabourn Pursuit. Both are purpose-built expedition vessels with the equipment and expedition teams required for this style of travel, including Zodiacs, kayaks and expert-led exploration.",
        listLabel: "Don't choose an Antarctica sailing solely because one ship is newer. Compare:",
        listItems: ["Number of expedition days", "Landing opportunities", "Itinerary", "South Georgia inclusion", "Falkland Islands inclusion", "Departure date", "Wildlife season", "Sea days", "Price"],
        best: "Purpose-built expedition ships equipped for remote exploration.",
    },
    {
        icon: Compass,
        title: "Arctic",
        subtitle: "Which Seabourn Ship Is Best for the Arctic?",
        desc: "Seabourn Venture is particularly relevant for Arctic and Northwest Passage itineraries. Seabourn's current expedition deployment describes Venture exploring the Arctic, Northwest Passage and Antarctica alongside more traditional ocean voyages.",
        listLabel: "For an Arctic-focused traveler, consider:",
        listItems: ["Northwest Passage routing", "Remote landscapes", "Wildlife viewing", "Ice conditions", "Expedition exploration", "Expert interpretation"],
        best: "The itinerary is more important than choosing between expedition ships based simply on age.",
    },
    {
        icon: Anchor,
        title: "Kimberley",
        subtitle: "Which Seabourn Ship Is Best for the Kimberley?",
        desc: "Both Seabourn Venture and Seabourn Pursuit are designed for expedition cruising in the Kimberley. Seabourn's current expedition materials identify the Kimberley among the regions explored by its expedition fleet.",
        listLabel: "Travelers can explore Australia's rugged northwest through:",
        listItems: ["Zodiac excursions", "Remote coastline", "Wildlife", "Indigenous culture", "Waterfalls", "Dramatic landscapes"],
        best: "Remote Australian landscapes, wildlife and small-ship access.",
    },
];

const diningCards = [
    { icon: Utensils, title: "Encore & Ovation", text: "Offer an expanded collection of dining venues, including Solis, The Restaurant, Sushi, Earth & Ocean, The Colonnade and The Patio." },
    { icon: Sun, title: "Seabourn Quest", text: "Offers a different combination of venues including Solis, Earth & Ocean, The Restaurant, The Patio, The Club, Sky Bar and in-suite dining." },
    { icon: Home, title: "Venture & Pursuit", text: "The expedition ships combine expedition facilities with Seabourn's luxury dining approach — fine dining without sacrificing the expedition experience." },
];

const atmosphereCards = [
    { title: "Most Intimate", ship: "Seabourn Quest" },
    { title: "Most Contemporary Ocean Experience", ship: "Seabourn Encore / Ovation" },
    { title: "Most Adventurous", ship: "Seabourn Venture / Pursuit" },
    { title: "Most Expedition-Focused", ship: "Venture / Pursuit" },
];

const decisionTable = [
    { priority: "Classic Seabourn experience", ship: "Quest" },
    { priority: "Modern ocean luxury", ship: "Encore" },
    { priority: "Contemporary ocean cruising", ship: "Ovation" },
    { priority: "Antarctica expedition", ship: "Venture or Pursuit" },
    { priority: "Arctic expedition", ship: "Venture" },
    { priority: "Kimberley expedition", ship: "Venture or Pursuit" },
    { priority: "Remote South Pacific", ship: "Venture or Pursuit" },
    { priority: "Large suite selection", ship: "Encore / Ovation" },
    { priority: "Intimate classic atmosphere", ship: "Quest" },
    { priority: "Newest expedition ship", ship: "Pursuit" },
];

const considerSteps = [
    { title: "Start With the Destination", text: "Don't choose the ship first. Choose the destination you want to experience." },
    { title: "Compare the Itineraries", text: "Two Seabourn cruises to the same region can feel completely different depending on port selection, overnight stays, sea days, departure ports, number of days and excursion opportunities." },
    { title: "Decide Between Ocean and Expedition", text: "This is the biggest decision. Ocean means luxury cruising. Expedition means luxury exploration." },
    { title: "Compare Suite Categories", text: "The same ship can offer dramatically different experiences depending on your suite." },
    { title: "Look at the Ship's Amenities", text: "If you care about spa, pool, dining, fitness, specialty restaurants or lounges, compare the individual ship rather than assuming every Seabourn vessel is identical." },
    { title: "Consider the Ship's Age and Design", text: "A newer ship isn't automatically better. Some travelers prefer the classic atmosphere of Quest, while others prefer the more contemporary design of Encore or Ovation." },
    { title: "Compare the Total Value", text: "Look beyond the cruise fare. Consider suite, dining, beverages, Wi-Fi, gratuities, excursions, transfers, airfare and pre/post-cruise hotels." },
];

const faqData = [
    { q: "How many Seabourn ships are there?", a: "Seabourn currently operates five ships in its fleet: Seabourn Quest, Seabourn Encore, Seabourn Ovation, Seabourn Venture and Seabourn Pursuit." },
    { q: "Which Seabourn ship is the newest?", a: "Seabourn Pursuit is the newest of the five ships covered in this fleet, having entered service in August 2023." },
    { q: "Which Seabourn ships are expedition ships?", a: "Seabourn Venture and Seabourn Pursuit are the line's purpose-built expedition ships." },
    { q: "Which Seabourn ships are ocean ships?", a: "Seabourn Quest, Seabourn Encore and Seabourn Ovation are the fleet's primary ocean-going luxury ships." },
    { q: "Which Seabourn ship is best for Antarctica?", a: "Seabourn Venture and Seabourn Pursuit are the primary ships to consider for Antarctica because they are purpose-built expedition vessels equipped for remote exploration." },
    { q: "What is the difference between Seabourn Venture and Pursuit?", a: "They are sister expedition ships with similar core capabilities, including 24 Zodiacs, kayaks and 19-person Expedition Teams. Pursuit entered service in 2023, one year after Venture." },
    { q: "Are Seabourn Encore and Ovation sister ships?", a: "Yes. Seabourn describes Ovation as the sister ship to Encore." },
    { q: "Which Seabourn ship is best for the Mediterranean?", a: "Quest, Encore and Ovation can all be considered for Mediterranean cruising. The best choice depends heavily on the specific itinerary, departure date, suite and port schedule." },
    { q: "Which Seabourn ship is best for first-time Seabourn travelers?", a: "Encore or Ovation can be attractive introductions to the contemporary Seabourn ocean experience, while Quest may appeal to travelers specifically looking for the line's classic intimate atmosphere." },
    { q: "Which Seabourn ship has the largest capacity?", a: "Seabourn Encore and Seabourn Ovation each accommodate approximately 600 guests, making them larger than Quest and the 264-guest expedition ships." },
    { q: "Do all Seabourn ships have suites?", a: "Seabourn's fleet is built around luxury suite accommodation, with oceanfront suites across its ships. Encore and Ovation specifically offer oceanfront suites with private verandas." },
    { q: "Do Seabourn expedition ships have balconies?", a: "Seabourn expedition ships offer luxury oceanfront accommodations, but travelers should compare the specific suite category and deck plan for the sailing they are considering." },
    { q: "Which Seabourn ship is best for luxury adventure travel?", a: "Seabourn Venture and Pursuit are the strongest choices for travelers who want luxury combined with expedition-style exploration." },
    { q: "Which Seabourn ship is best for a quiet luxury cruise?", a: "Seabourn Quest can be particularly appealing to travelers who prioritize an intimate, classic small-ship atmosphere." },
    { q: "Which Seabourn ship has the best dining?", a: "There is no single objective winner. Encore, Ovation and Quest all offer sophisticated dining, while Venture and Pursuit combine Seabourn's culinary approach with expedition travel." },
    { q: "Is Seabourn Venture only an expedition ship?", a: "Venture is a purpose-built expedition ship, but Seabourn also uses it for some traditional ocean voyages depending on the deployment." },
    { q: "Are Seabourn ships small?", a: "Yes. Seabourn deliberately operates small ships designed to provide a more intimate, yacht-like experience than large mainstream cruise ships." },
    { q: "How do I choose the best Seabourn ship?", a: "Start with your destination, then compare the ship's itinerary, suite category, amenities, sailing date and price. For remote destinations, prioritize Venture or Pursuit; for traditional ocean cruising, compare Quest, Encore and Ovation." },
];

/* ── FAQ Accordion (custom Sbc-faq classes) ─────────────────────── */
function ShipsFAQ() {
    const [open, setOpen] = useState(null);
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

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournShipsGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeShipTab, setActiveShipTab] = useState(0);
    const [activeDestTab, setActiveDestTab] = useState(0);
    const [activeCompareTab, setActiveCompareTab] = useState(0);
    const ActiveDestIcon = destinationTabs[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Ships: Complete Fleet Guide & Ship Comparison</title>
                <meta name="title" content="Seabourn Ships Guide: Quest, Encore, Ovation, Venture & Pursuit" />
                <meta
                    name="description"
                    content="Compare Seabourn ships including Quest, Encore, Ovation, Venture and Pursuit. Explore suites, dining, amenities, expedition features, size and which Seabourn ship is best for you."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (custom Sbc-hero classes) ──────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>

                <div className="Sbc-hero-content">
                    <h1>Seabourn Ships <br /> Complete Fleet Guide</h1>
                    <p>
                        Choosing the right ship can be just as important as choosing the right itinerary.
                    </p>
                    {readMore && (
                        <>
                            <p>
                                While Seabourn Cruises is known for its intimate, yacht-like approach to luxury cruising, the fleet is not identical. The current fleet includes five ships: Seabourn Quest, Seabourn Encore, Seabourn Ovation, Seabourn Venture and Seabourn Pursuit. The first three are ocean-going luxury ships, while Venture and Pursuit are purpose-built expedition vessels.
                            </p>
                            <p>
                                That distinction matters.
                            </p>
                            <p>
                                If you are planning a Mediterranean escape, you may prefer the atmosphere and amenities of Seabourn Encore or Seabourn Ovation. If your goal is Antarctica, the Arctic or the Kimberley, Seabourn Venture or Seabourn Pursuit are designed specifically for that style of exploration.
                            </p>
                            <p>
                                This guide compares the five ships so you can understand which Seabourn ship is best for your travel style, destination and priorities.
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
                            Start Planning Your Seabourn Voyage
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK SHIP COMPARISON (new Ssf-table) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-quick-compare">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At a Glance</span>
                        <h2 className="Sbc-h2">Quick Seabourn Ship Comparison</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The first three ships are ocean-going luxury ships, while Venture
                            and Pursuit are purpose-built expedition vessels — and that
                            distinction matters.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Ship</th>
                                    <th>Type</th>
                                    <th>Guest Capacity</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickCompare.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.ship}</td>
                                        <td>{row.type}</td>
                                        <td>{row.capacity}</td>
                                        <td>{row.best}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="Ssf-table-caption">
                        Guest capacity, venues, suite configurations and itineraries can
                        change over time — verify details for your specific sailing before booking.
                    </p>
                </div>
            </section>

            {/* ── WHICH SEABOURN SHIP IS BEST ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-which-best">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">No Single Winner</span>
                        <h2 className="Sbc-h2">Which Seabourn Ship Is Best?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            There is no single "best" Seabourn ship for every traveler. If
                            your priority is remote exploration, start with Venture and
                            Pursuit. If your priority is classic luxury cruising in
                            destinations such as Europe, compare Quest, Encore and Ovation.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {bestForCards.map((card, i) => {
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

            {/* ── INDIVIDUAL SHIP PROFILES (reuses Sbc-ships-tabs pattern) ──── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ship-profiles">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ship by Ship</span>
                        <h2 className="Sbc-h2">The Seabourn Fleet in Detail</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Explore each ship's story, at-a-glance specs and who it's best
                            suited for.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Ocean-Focused Ships</div>
                            <ul>
                                <li>Seabourn Quest</li>
                                <li>Seabourn Encore</li>
                                <li>Seabourn Ovation</li>
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Expedition Ships</div>
                            <ul>
                                <li>Seabourn Venture</li>
                                <li>Seabourn Pursuit</li>
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-fleet-tab-nav">
                        {ships.map((ship, idx) => (
                            <button
                                key={idx}
                                className={`Sbc-fleet-tab-btn ${activeShipTab === idx ? "active" : ""}`}
                                onClick={() => setActiveShipTab(idx)}
                            >
                                <span className="Sbc-fleet-tab-name">{ship.name}</span>
                                <span className="Sbc-fleet-tab-meta">{ship.meta}</span>
                            </button>
                        ))}
                    </div>

                    <div className="Sbc-fleet-tab-panel">
                        <div className="Sbc-fleet-tab-grid">
                            <div className="Sbc-fleet-tab-left">
                                <div>
                                    <span className="Sbc-fleet-tab-badge">{ships[activeShipTab].meta}</span>
                                    <h3 className="Sbc-fleet-tab-title">{ships[activeShipTab].name}</h3>
                                    <div className="Sbc-fleet-tab-subtitle">{ships[activeShipTab].subtitle}</div>
                                </div>

                                <div className="Sbc-fleet-tab-desc">
                                    {ships[activeShipTab].desc.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                {ships[activeShipTab].different && (
                                    <div className="Sbc-fleet-tab-diff-box">
                                        <div className="Sbc-fleet-tab-diff-title">{ships[activeShipTab].differentTitle}</div>
                                        {ships[activeShipTab].different.map((p, dIdx) => (
                                            <p key={dIdx} className="Sbc-fleet-tab-diff-text">{p}</p>
                                        ))}
                                    </div>
                                )}

                                {ships[activeShipTab].destinations && (
                                    <div className="Sbc-fleet-tab-dest-box">
                                        <div className="Sbc-fleet-tab-dest-title">{ships[activeShipTab].destinationsTitle}</div>
                                        <ul className="Sbc-fleet-tab-dest-list">
                                            {ships[activeShipTab].destinations.map((dest, dIdx) => (
                                                <li key={dIdx}>{dest}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="Sbc-fleet-tab-best-box">
                                    <div className="Sbc-fleet-tab-best-title">Best for:</div>
                                    <ul className="Sbc-fleet-tab-best-list">
                                        {ships[activeShipTab].best.map((item, bIdx) => (
                                            <li key={bIdx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="Sbc-fleet-tab-right">
                                <div className="Sbc-fleet-tab-image">
                                    <Ship size={32} className="Sbc-fleet-tab-image-icon" />
                                    <span className="Sbc-fleet-tab-image-text">{ships[activeShipTab].name} Image Placeholder</span>
                                </div>

                                <div className="Sbc-fleet-tab-glance-box">
                                    <div className="Sbc-fleet-tab-glance-title">{ships[activeShipTab].glanceTitle}</div>
                                    <ul className="Sbc-fleet-tab-glance-list">
                                        {ships[activeShipTab].glance.map((item, gIdx) => (
                                            <li key={gIdx}>
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
                        <h2 className="Sbc-h2">Seabourn Venture vs Seabourn Pursuit</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the most important comparisons for expedition travelers.
                            Both ships were purpose-built around the same expedition
                            philosophy and share key capabilities.
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
                                        <td>{row.label}</td>
                                        <td>{row.venture}</td>
                                        <td>{row.pursuit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="Ssf-table-caption">
                        Choose based primarily on itinerary — the destination, wildlife
                        conditions, season and itinerary are often more important than the
                        relatively small difference between the two ships.
                    </p>
                </div>
            </section>

            {/* ── CTA 1 (Related Content — Suites Guide) ───────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Related Guide</span>
                    <h3 className="Sbc-cta-title">See Suite Categories Across the Fleet</h3>
                    <p className="Sbc-cta-text">
                        From Quest's classic staterooms to Encore's 13 suite categories,
                        explore the full Seabourn Suites Guide to compare layouts and space.
                    </p>
                    <Link to="/seabourn-cruises/suites/" className="Sbc-cta-button">
                        Explore the Suites Guide
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SHIP VS SHIP TABBED COMPARISONS ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ship-vs-ship">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Head to Head</span>
                        <h2 className="Sbc-h2">Ship vs Ship Comparisons</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Compare closest matches in the Seabourn fleet to find the perfect fit for your voyage.
                        </p>
                    </div>

                    <div className="Sbc-compare-tab-nav">
                        {comparisonTabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`Sbc-compare-tab-btn ${activeCompareTab === idx ? "active" : ""}`}
                                onClick={() => setActiveCompareTab(idx)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className="Sbc-compare-tab-panel">
                        <h3 className="Sbc-compare-panel-title">{comparisonTabs[activeCompareTab].longTitle}</h3>
                        
                        {activeCompareTab === 0 && (
                            <div className="Sbc-compare-grid-2col">
                                <div>
                                    <p className="Sbc-compare-panel-intro">
                                        {comparisonTabs[0].intro}
                                    </p>
                                    <div className="Sbc-compare-list-box">
                                        <div className="Sbc-compare-list-box-title">Both offer:</div>
                                        <ul className="Sbc-compare-panel-list">
                                            {comparisonTabs[0].bothOffer.map((item, i) => (
                                                <li key={i}><Ship size={16} strokeWidth={2} /> <span>{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="Sbc-compare-extra-text">
                                        {comparisonTabs[0].extraInfo}
                                    </p>
                                </div>
                                <div>
                                    <div className="Sbc-compare-list-box">
                                        <div className="Sbc-compare-list-box-title">{comparisonTabs[0].whichBetterTitle}</div>
                                        <p className="Sbc-compare-suited-text" style={{ marginBottom: "16px" }}>
                                            {comparisonTabs[0].whichBetterIntro}
                                        </p>
                                        <ul className="Sbc-compare-panel-list">
                                            {comparisonTabs[0].compareItems.map((item, i) => (
                                                <li key={i}><Anchor size={16} strokeWidth={2} /> <span>{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="Sbc-compare-verdict-box">
                                        <strong>Verdict:</strong> {comparisonTabs[0].verdict}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeCompareTab === 1 && (
                            <div className="Sbc-compare-grid-2col">
                                <div className="Sbc-compare-prefer-col">
                                    <div className="Sbc-compare-prefer-title">{comparisonTabs[1].questPreferTitle}</div>
                                    <ul className="Sbc-compare-prefer-list">
                                        {comparisonTabs[1].questPrefer.map((item, i) => (
                                            <li key={i}><Anchor size={16} strokeWidth={2} /> <span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="Sbc-compare-prefer-col">
                                    <div className="Sbc-compare-prefer-title">{comparisonTabs[1].encorePreferTitle}</div>
                                    <ul className="Sbc-compare-prefer-list">
                                        {comparisonTabs[1].encorePrefer.map((item, i) => (
                                            <li key={i}><Ship size={16} strokeWidth={2} /> <span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="Sbc-compare-verdict-box">
                                    {comparisonTabs[1].extraInfo}
                                </div>
                            </div>
                        )}

                        {activeCompareTab === 2 && (
                            <div className="Sbc-compare-grid-2col">
                                <div className="Sbc-compare-suited-card">
                                    <div className="Sbc-compare-suited-title">{comparisonTabs[2].questSuitedTitle}</div>
                                    <p className="Sbc-compare-suited-text">{comparisonTabs[2].questSuitedText}</p>
                                </div>
                                <div className="Sbc-compare-suited-card">
                                    <div className="Sbc-compare-suited-title">{comparisonTabs[2].ovationSuitedTitle}</div>
                                    <p className="Sbc-compare-suited-text">{comparisonTabs[2].ovationSuitedText}</p>
                                </div>
                                <div className="Sbc-compare-verdict-box">
                                    <strong>Verdict:</strong> {comparisonTabs[2].verdict}
                                </div>
                            </div>
                        )}

                        {activeCompareTab === 3 && (
                            <div className="Sbc-compare-grid-2col">
                                <div className="Sbc-compare-quote-box">
                                    <div className="Sbc-compare-quote-title">Ask yourself one question:</div>
                                    <div className="Sbc-compare-quote-text">"{comparisonTabs[3].question}"</div>
                                </div>
                                <div className="Sbc-compare-prefer-col">
                                    <div className="Sbc-compare-prefer-title">{comparisonTabs[3].oceanTitle}</div>
                                    <ul className="Sbc-compare-prefer-list" style={{ marginBottom: "16px" }}>
                                        {comparisonTabs[3].oceanItems.map((item, i) => (
                                            <li key={i}><Waves size={16} strokeWidth={2} /> <span>{item}</span></li>
                                        ))}
                                    </ul>
                                    <div className="Sbc-compare-verdict-box" style={{ marginTop: "auto" }}>
                                        {comparisonTabs[3].oceanVerdict}
                                    </div>
                                </div>
                                <div className="Sbc-compare-prefer-col">
                                    <div className="Sbc-compare-prefer-title">{comparisonTabs[3].expeditionTitle}</div>
                                    <ul className="Sbc-compare-prefer-list" style={{ marginBottom: "16px" }}>
                                        {comparisonTabs[3].expeditionItems.map((item, i) => (
                                            <li key={i}><Compass size={16} strokeWidth={2} /> <span>{item}</span></li>
                                        ))}
                                    </ul>
                                    <div className="Sbc-compare-verdict-box" style={{ marginTop: "auto" }}>
                                        {comparisonTabs[3].expeditionVerdict}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>



            {/* ── BEST SHIP BY DESTINATION (reuses Sbc-dest-tabs pattern) ──── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-by-destination">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Best Ship, By Destination</span>
                        <h2 className="Sbc-h2">Which Seabourn Ship Is Best for Your Destination?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The most important factor remains the itinerary — but here is
                            where to start for four of the most-asked-about regions.
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
                                    <ActiveDestIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">
                                    {destinationTabs[activeDestTab].title} Travel Image
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Region</span>
                                <h3 className="Sbc-dest-tab-title">{destinationTabs[activeDestTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{destinationTabs[activeDestTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{destinationTabs[activeDestTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {destinationTabs[activeDestTab].listItems.map((item, j) => (
                                            <li key={j}><Check size={14} strokeWidth={2.5} /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>

                                {destinationTabs[activeDestTab].best && (
                                    <div className="Sbc-dest-best-strategy">
                                        <p><strong>Best for:</strong> {destinationTabs[activeDestTab].best}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── BEST SUITES (reuses Sbc-qa-split pattern) ────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships-best-suites">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Gem size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Suites Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Accommodations</span>
                                <h2 className="Sbc-h2">Which Seabourn Ship Has the Best Suites?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                All five ships maintain Seabourn's luxury accommodation
                                philosophy, but suite configurations differ between the ocean
                                and expedition vessels. Seabourn's ocean ships offer oceanfront
                                suites, while Encore and Ovation feature private verandas
                                across their suite categories.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">If suite space is your priority, compare:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Interior square footage", "Veranda size", "Separate living area", "Bathroom configuration", "Suite location", "Storage", "Suite category benefits"].map((item, idx) => (
                                        <li key={idx}><Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Don't choose a ship based only on its overall reputation — choose the specific suite that matches how you travel.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ACROSS THE FLEET (reuses Sbc-dining-grid) ─────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ships-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Ships and Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The line's fleet page highlights world-class dining, including the
                            newer Solis restaurant on applicable ships. There is no single
                            objective winner — dining differs venue-by-venue across the fleet.
                        </p>
                    </div>

                    <div className="Sbc-dining-grid">
                        {diningCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-dining-card" key={i}>
                                    <div className="Sbc-dining-image-placeholder">
                                        <div className="Sbc-dining-placeholder-icon-wrapper">
                                            <Icon size={24} className="Sbc-dining-placeholder-icon" />
                                        </div>
                                        <span className="Sbc-dining-placeholder-text">{card.title} Image Placeholder</span>
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA 2 (Related Content — Expedition Guide) ───────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Related Guide</span>
                    <h3 className="Sbc-cta-title">Go Further With Seabourn Expedition Cruises</h3>
                    <p className="Sbc-cta-text">
                        See how Venture and Pursuit bring Seabourn's luxury service to
                        Antarctica, the Arctic, the Kimberley and the South Pacific.
                    </p>
                    <Link to="/seabourn-cruises/expedition/" className="Sbc-cta-button">
                        Read the Expedition Guide
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ONBOARD AMENITIES ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships-amenities">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Features</span>
                        <h2 className="Sbc-h2">Seabourn Ships and <br /> Onboard Amenities</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            From signature lounges and specialty dining to expedition hubs and polar gear lockers, here is what you will find onboard each ship in the fleet.
                        </p>
                    </div>

                    <div className="Sbc-amenities-category-title">Ocean Fleet — Classic & Modern Luxury</div>
                    <div className="Sbc-amenities-grid Sbc-cols-3">
                        <div className="Sbc-amenities-card">
                            <h3 className="Sbc-amenities-card-title">Seabourn Quest</h3>
                            <p className="Sbc-amenities-card-intro">Best-known onboard features include:</p>
                            <ul className="Sbc-amenities-list">
                                {["The Restaurant", "The Patio", "The Club", "Sky Bar", "Casino", "Spa", "Fitness Center", "Coffee Bar", "Seabourn Conversations"].map((item, idx) => (
                                    <li key={idx}>
                                        <Anchor size={14} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-amenities-card">
                            <h3 className="Sbc-amenities-card-title">Seabourn Encore</h3>
                            <p className="Sbc-amenities-card-intro">Includes:</p>
                            <ul className="Sbc-amenities-list">
                                {["Solis", "The Restaurant", "Sushi", "Seabourn Square", "Observation Bar", "The Retreat", "Spa", "Pool", "Earth & Ocean", "Fitness Center", "Sky Bar"].map((item, idx) => (
                                    <li key={idx}>
                                        <Ship size={14} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-amenities-card Sbc-amenities-sister">
                            <h3 className="Sbc-amenities-card-title">Seabourn Ovation</h3>
                            <div className="Sbc-amenities-sister-box">
                                <p className="Sbc-amenities-sister-text">
                                    Shares much of Encore's design philosophy and onboard offering.
                                </p>
                            </div>
                            <p className="Sbc-amenities-card-intro" style={{ marginTop: "16px" }}>Includes same venues:</p>
                            <ul className="Sbc-amenities-list Sbc-dimmed">
                                {["Solis", "The Restaurant", "Sushi", "Seabourn Square", "Observation Bar", "The Retreat", "Spa", "Pool", "Earth & Ocean", "Fitness Center", "Sky Bar"].map((item, idx) => (
                                    <li key={idx}>
                                        <Waves size={14} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-amenities-category-title" style={{ marginTop: "50px" }}>Expedition Fleet — Ultra-Luxury Adventure</div>
                    <div className="Sbc-amenities-grid Sbc-cols-2">
                        <div className="Sbc-amenities-card Sbc-expedition-accent">
                            <h3 className="Sbc-amenities-card-title">Seabourn Venture</h3>
                            <p className="Sbc-amenities-card-intro">Focuses more heavily on:</p>
                            <ul className="Sbc-amenities-list">
                                {["Expedition Lounge", "Discovery Center", "Expedition operations", "Zodiacs", "Kayaks", "Expedition Team"].map((item, idx) => (
                                    <li key={idx}>
                                        <Snowflake size={14} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-amenities-card Sbc-expedition-accent">
                            <h3 className="Sbc-amenities-card-title">Seabourn Pursuit</h3>
                            <p className="Sbc-amenities-card-intro">Combines:</p>
                            <ul className="Sbc-amenities-list">
                                {["Expedition Lounge", "Discovery Center", "Spa", "The Restaurant", "Seabourn Square", "Zodiacs", "Kayaks", "Expedition Team"].map((item, idx) => (
                                    <li key={idx}>
                                        <Compass size={14} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST ATMOSPHERE (reuses Sbc-card-grid Sbc-cols-4) ─────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ships-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Feel</span>
                        <h2 className="Sbc-h2">Which Seabourn Ship Has the Best Atmosphere?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This depends on what you mean by "best." The common denominator
                            across the fleet is Seabourn's small-ship, yacht-like atmosphere.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {atmosphereCards.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <Ship size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.ship}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FLEET DECISION TABLE (new Ssf-table) ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-fleet-decision">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Match Your Priority</span>
                        <h2 className="Sbc-h2">Seabourn Fleet: Which Ship Is Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Your Priority</th>
                                    <th>Recommended Ship</th>
                                </tr>
                            </thead>
                            <tbody>
                                {decisionTable.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.priority}</td>
                                        <td>{row.ship}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── 7 THINGS TO CONSIDER (new Ssf-steps-list) ─────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-things-to-consider">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">7 Things to Consider Before Choosing a Seabourn Ship</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-steps-list">
                        {considerSteps.map((step, i) => (
                            <div className="Ssf-step-card" key={i}>
                                <div className="Ssf-step-number">{i + 1}</div>
                                <div className="Ssf-step-body">
                                    <h4>{step.title}</h4>
                                    <p>{step.text}</p>
                                </div>
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

            {/* ── FAQ (self-contained Ssf-faq accordion) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ships-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Common Questions</span>
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Ships</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <ShipsFAQ />
                </div>
            </section>

            {/* ── CTA 3 (Related Content — Destinations Guide) ─────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Related Guide</span>
                    <h3 className="Sbc-cta-title">Explore Every Region Seabourn Sails</h3>
                    <p className="Sbc-cta-text">
                        From the Mediterranean to Antarctica, browse the full Seabourn
                        Destinations guide to find your next itinerary.
                    </p>
                    <Link to="/seabourn-cruises/destinations/" className="Sbc-cta-button">
                        View Seabourn Destinations
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── OUR VERDICT (reuses Sbc-bg-dark / Sbc-verdict pattern) ────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-ships-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Ship Verdict</span>
                        <h2 className="Sbc-h2">Choose the Itinerary First, Then the Ship</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            The beauty of the Seabourn fleet is that there isn't one ship
                            that has to work for everyone. Quest is the choice for classic
                            Seabourn intimacy. Encore and Ovation are strong choices for
                            travelers who want contemporary ocean cruising with more
                            expansive onboard spaces. Venture and Pursuit are the ships to
                            consider when the destination itself is the adventure.
                        </p>
                        <p className="Sbc-p">
                            For Mediterranean, European and other conventional ocean
                            journeys, compare Quest, Encore and Ovation. For Antarctica, the
                            Arctic, Kimberley and other remote destinations, focus on Venture
                            and Pursuit.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Choose the Seabourn
                                itinerary first, then choose the ship and suite that make
                                that itinerary exceptional. When two ships appear equally
                                appealing, let the itinerary, suite and sailing date make the
                                final decision.
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

export default SeabournShipsGuide;