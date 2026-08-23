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
    MessageCircle,
    Users,
    Award,
    AlertCircle,
    Star,
    MapPin,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournCruises.css";

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
            "@id": "https://www.tripsandships.com/seabourn-cruises/#webpage",
            name: "Seabourn Cruises: Complete Guide to Ships, Suites & Destinations",
            url: "https://www.tripsandships.com/seabourn-cruises/",
            description:
                "Explore our complete Seabourn Cruises guide covering ships, suites, destinations, dining, inclusions, excursions, expedition cruises, service, and what makes Seabourn different.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#article",
            headline: "Seabourn Cruises: The Complete Luxury Travel Guide",
            description:
                "A complete guide to Seabourn Cruises covering the fleet, ocean and expedition cruises, suites, dining, destinations, shore excursions, inclusions, wellness, service, and who should sail Seabourn.",
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
            "@id": "https://www.tripsandships.com/seabourn-cruises/#breadcrumb",
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
                    name: "Seabourn Cruises",
                    item: "https://www.tripsandships.com/seabourn-cruises/",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#touristtrip",
            name: "Seabourn Luxury Ocean and Expedition Cruises",
            touristType:
                "Luxury travelers, couples, experienced luxury travelers, adventure travelers, cultural travelers, and solo travelers",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Mediterranean" },
                    { "@type": "ListItem", position: 2, name: "Alaska" },
                    { "@type": "ListItem", position: 3, name: "Japan" },
                    { "@type": "ListItem", position: 4, name: "Northern Europe" },
                    { "@type": "ListItem", position: 5, name: "Antarctica" },
                    { "@type": "ListItem", position: 6, name: "Arctic and Northwest Passage" },
                    { "@type": "ListItem", position: 7, name: "Kimberley" },
                    { "@type": "ListItem", position: 8, name: "South Pacific" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#destinations",
            name: "Seabourn Cruises Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Mediterranean" },
                { "@type": "Place", position: 2, name: "Alaska" },
                { "@type": "Place", position: 3, name: "Japan" },
                { "@type": "Place", position: 4, name: "Northern Europe" },
                { "@type": "Place", position: 5, name: "Antarctica" },
                { "@type": "Place", position: 6, name: "Arctic and Northwest Passage" },
                { "@type": "Place", position: 7, name: "Kimberley" },
                { "@type": "Place", position: 8, name: "South Pacific" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#service",
            serviceType: "Luxury Seabourn Cruise Vacation Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
                "@id": "https://www.tripsandships.com/#travelagency",
            },
            areaServed: "Worldwide",
            description:
                "Personalized luxury travel planning support for Seabourn ocean and expedition cruises, including itinerary selection, suite categories, destinations, shore experiences, and cruise planning.",
        },
        {
            "@type": "Review",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#review",
            itemReviewed: { "@type": "Product", name: "Seabourn Cruises" },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
                "@id": "https://www.tripsandships.com/#person",
            },
            reviewBody:
                "Seabourn is one of the strongest choices for travelers who want luxury cruising without the scale and crowds of a traditional cruise ship. Its combination of small ships, all-suite accommodations, personalized service, fine dining, premium inclusions, and destination depth creates an intimate luxury experience, with expedition ships extending the experience to destinations such as Antarctica, the Arctic, the Kimberley, and the South Pacific.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#itemlist",
            name: "What This Seabourn Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "What Is Seabourn Cruises?" },
                { "@type": "ListItem", position: 2, name: "Why Luxury Travelers Choose Seabourn" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ocean Cruises vs Seabourn Expedition Cruises" },
                { "@type": "ListItem", position: 4, name: "Seabourn Cruise Ships" },
                { "@type": "ListItem", position: 5, name: "Seabourn Suites" },
                { "@type": "ListItem", position: 6, name: "Seabourn Dining" },
                { "@type": "ListItem", position: 7, name: "What Is Included on Seabourn?" },
                { "@type": "ListItem", position: 8, name: "Seabourn Destinations" },
                { "@type": "ListItem", position: 9, name: "Seabourn Shore Excursions" },
                { "@type": "ListItem", position: 10, name: "Ventures by Seabourn" },
                { "@type": "ListItem", position: 11, name: "Seabourn Conversations" },
                { "@type": "ListItem", position: 12, name: "Seabourn Wellness" },
                { "@type": "ListItem", position: 13, name: "Who Is Seabourn Best For?" },
                { "@type": "ListItem", position: 14, name: "Is Seabourn Worth It?" },
                { "@type": "ListItem", position: 15, name: "Seabourn Pros and Cons" },
                { "@type": "ListItem", position: 16, name: "Seabourn vs Other Luxury Cruise Lines" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Seabourn Cruises known for?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn is known for intimate ultra-luxury ships, all-suite oceanfront accommodations, personalized service, fine dining, premium included beverages, and destination-focused itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn considered a luxury cruise line?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn positions itself as an ultra-luxury cruise line offering all-inclusive ocean and expedition voyages.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn offers a broad all-inclusive experience that includes accommodations, dining, premium spirits and wines, selected onboard experiences, Wi-Fi, and other amenities. Some optional shore experiences carry additional charges.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is included on a Seabourn cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depending on the voyage, inclusions can include an oceanfront suite, dining, premium spirits and wines, welcome Champagne, an in-suite bar, Wi-Fi, entertainment, and other onboard experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn include drinks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn includes complimentary premium spirits and fine wines onboard, along with welcome Champagne and an in-suite bar stocked according to guest preferences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn include gratuities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn states that tipping is neither required nor expected.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Seabourn cruises adults only?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn is not strictly an adults-only cruise line, but its ships and onboard experience are primarily designed around adult luxury travelers rather than families seeking extensive children's programming.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are Seabourn ships like?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn ships are intimate and designed around a private yacht-like atmosphere, with all-suite oceanfront accommodations and personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn have private balconies?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most Seabourn ocean suites have private verandas, although exact accommodation features vary by ship and suite category.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn have expedition cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn operates purpose-built expedition ships, including Seabourn Venture and Seabourn Pursuit, with itineraries in Antarctica, the Arctic, Kimberley, South Pacific, and other remote destinations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn go to Antarctica?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn offers Antarctica expedition voyages featuring Zodiac exploration, expert-led activities, and wildlife encounters.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn good for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn's intimate ships, suites, fine dining, and personalized service make it particularly attractive to couples celebrating anniversaries, honeymoons, and other milestones.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn good for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn can work well for solo travelers who enjoy sophisticated small-ship environments and social dining, although travelers should compare the applicable single supplement and suite pricing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn good for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Seabourn can work for families who prioritize luxury and cultural or expedition travel, but it is not primarily designed as a family cruise product.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Seabourn have good food?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn emphasizes world-class dining and offers multiple complimentary dining venues, with cuisine designed around high-quality ingredients and destination influences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you order room service on Seabourn?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Seabourn offers in-suite dining, including the ability to have meals from The Restaurant served in the suite or on the veranda.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How many passengers are on Seabourn ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Passenger capacity varies by ship. Seabourn's defining characteristic is its intimate scale compared with large mainstream cruise ships.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Seabourn worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers who value small ships, personalized service, luxury suites, fine dining, premium inclusions, and destination access, Seabourn can offer strong value within the ultra-luxury cruise category.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Accordion (custom Sbc-faq classes) ─────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is Seabourn Cruises known for?", a: "Seabourn is known for intimate ultra-luxury ships, all-suite oceanfront accommodations, personalized service, fine dining, premium included beverages and destination-focused itineraries." },
        { q: "Is Seabourn considered a luxury cruise line?", a: "Yes. Seabourn positions itself as an ultra-luxury cruise line offering all-inclusive ocean and expedition voyages." },
        { q: "Is Seabourn all-inclusive?", a: "Seabourn offers a broad all-inclusive experience that includes accommodations, dining, premium spirits and wines, selected onboard experiences, Wi-Fi and other amenities. Some optional shore experiences carry additional charges." },
        { q: "What is included on a Seabourn cruise?", a: "Depending on the voyage, inclusions can include an oceanfront suite, dining, premium spirits and wines, welcome Champagne, an in-suite bar, Wi-Fi, entertainment and other onboard experiences." },
        { q: "Does Seabourn include drinks?", a: "Seabourn includes complimentary premium spirits and fine wines onboard, along with welcome Champagne and an in-suite bar stocked according to guest preferences." },
        { q: "Does Seabourn include gratuities?", a: "Seabourn states that tipping is neither required nor expected." },
        { q: "Are Seabourn cruises adults only?", a: "Seabourn is not strictly an adults-only cruise line, but its ships and onboard experience are primarily designed around adult luxury travelers rather than families seeking extensive children's programming." },
        { q: "What are Seabourn ships like?", a: "Seabourn ships are intimate and designed around a private yacht-like atmosphere, with all-suite oceanfront accommodations and personalized service." },
        { q: "Does Seabourn have private balconies?", a: "Most Seabourn ocean suites have private verandas, although exact accommodation features vary by ship and suite category." },
        { q: "Does Seabourn have expedition cruises?", a: "Yes. Seabourn operates purpose-built expedition ships, including Seabourn Venture and Seabourn Pursuit, with itineraries in Antarctica, the Arctic, Kimberley, South Pacific and other remote destinations." },
        { q: "Does Seabourn go to Antarctica?", a: "Yes. Seabourn offers Antarctica expedition voyages featuring Zodiac exploration, expert-led activities and wildlife encounters." },
        { q: "Is Seabourn good for couples?", a: "Yes. Seabourn's intimate ships, suites, fine dining and personalized service make it particularly attractive to couples celebrating anniversaries, honeymoons and other milestones." },
        { q: "Is Seabourn good for solo travelers?", a: "Seabourn can work well for solo travelers who enjoy sophisticated small-ship environments and social dining, although travelers should compare the applicable single supplement and suite pricing." },
        { q: "Is Seabourn good for families?", a: "Seabourn can work for families who prioritize luxury and cultural or expedition travel, but it is not primarily designed as a family cruise product." },
        { q: "Does Seabourn have good food?", a: "Yes. Seabourn emphasizes world-class dining and offers multiple complimentary dining venues, with cuisine designed around high-quality ingredients and destination influences." },
        { q: "Can you order room service on Seabourn?", a: "Yes. Seabourn offers in-suite dining, including the ability to have meals from The Restaurant served in the suite or on the veranda." },
        { q: "How many passengers are on Seabourn ships?", a: "Passenger capacity varies by ship. Seabourn's defining characteristic is its intimate scale compared with large mainstream cruise ships." },
        { q: "Is Seabourn worth the money?", a: "For travelers who value small ships, personalized service, luxury suites, fine dining, premium inclusions and destination access, Seabourn can offer strong value within the ultra-luxury cruise category." },
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
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
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
const brandTags = [
    "Intimate ships", "Private yacht-like atmosphere", "All oceanfront suites",
    "Personalized service", "Complimentary premium spirits and fine wines",
    "Complimentary caviar", "Complimentary dining", "Welcome Champagne",
    "In-suite bar", "Included Wi-Fi", "No required tipping", "Curated voyages",
    "Expert-led enrichment", "Expedition experiences",
];

const whyChooseCards = [
    { icon: Ship, title: "Small ships", text: "Less crowded public spaces and a more intimate atmosphere." },
    { icon: Home, title: "All-suite accommodations", text: "Oceanfront suites form the foundation of the Seabourn experience." },
    { icon: Heart, title: "Personalized service", text: "The line emphasizes intuitive service rather than formal, highly structured luxury." },
    { icon: Utensils, title: "Fine dining", text: "Multiple complimentary dining venues are available across the fleet." },
    { icon: Wine, title: "Premium beverages", text: "Premium spirits and fine wines are complimentary onboard." },
    { icon: Compass, title: "Destination-focused itineraries", text: "Seabourn visits major destinations as well as smaller ports and less-visited locations." },
    { icon: Snowflake, title: "Expedition capability", text: "Purpose-built expedition ships take travelers into Antarctica, the Arctic, Kimberley, South Pacific and other remote regions." },
];

const oceanList = ["Mediterranean ports", "Northern Europe", "Alaska", "Japan", "Caribbean destinations", "Canada & New England", "Relaxed days at sea", "Fine dining", "Luxury suites", "Small-ship exploration"];
const expeditionList = ["Antarctica", "South Georgia", "Falkland Islands", "Arctic", "Northwest Passage", "Kimberley", "South Pacific", "Remote areas of Oceania"];

const ships = [
    {
        name: "Seabourn Quest",
        meta: "Ocean-focused",
        desc: "Seabourn Quest is an ocean-going luxury ship designed around Seabourn's intimate, yacht-like atmosphere. In 2026, Seabourn announced a significant reimagining of Seabourn Quest's spaces following drydock, with updates intended to create a more refined onboard experience.",
        best: ["A smaller luxury ship", "Classic Seabourn atmosphere", "Destination-focused itineraries", "Sophisticated public spaces", "A relaxed onboard experience"],
    },
    {
        name: "Seabourn Encore",
        meta: "Ocean-focused",
        desc: "Seabourn Encore is one of the line's ocean ships and offers the all-suite, oceanfront accommodation model that defines the brand.",
        best: ["Mediterranean journeys", "Asia", "Australia and other international destinations", "Luxury dining", "Intimate shipboard atmosphere"],
    },
    {
        name: "Seabourn Ovation",
        meta: "Ocean-focused",
        desc: "Seabourn Ovation continues the line's small-ship luxury concept with all-suite accommodations and a focus on personalized service.",
        best: ["Sophisticated ocean cruising", "European itineraries", "Fine dining", "Wellness", "Small-ship service"],
    },
    {
        name: "Seabourn Venture",
        meta: "Expedition — launched 2022",
        desc: "Seabourn Venture is a purpose-built expedition ship launched in 2022, designed specifically for exploration in challenging environments. Its expedition capabilities include Zodiac excursions, kayaking opportunities, nature walks, an expedition team, remote destination access, wildlife viewing, open deck space and enrichment programming. Seabourn's current expedition information describes a 19-person Expedition Team and extensive outdoor viewing space.",
        best: ["Zodiac excursions", "Kayaking", "Nature walks", "Wildlife viewing", "Remote destination access"],
    },
    {
        name: "Seabourn Pursuit",
        meta: "Expedition — joined fleet 2023",
        desc: "Seabourn Pursuit joined the fleet in 2023 as a purpose-built expedition ship, designed for remote destinations including Antarctica, South Pacific, Kimberley, Australia, South Georgia and the Falkland Islands. For travelers who want expedition adventure without sacrificing luxury, Seabourn Pursuit is one of the most compelling options in the fleet.",
        best: ["Antarctica", "South Pacific", "Kimberley", "South Georgia", "Falkland Islands"],
    },
];

const suiteFeatures = ["Ocean views", "Private verandas", "Living areas", "Bedroom areas", "Luxury bathrooms", "In-suite bar", "Welcome Champagne", "In-suite dining"];

const diningVenues = ["The Restaurant", "The Colonnade", "The Patio", "Sushi", "Seabourn Square", "Specialty dining", "In-suite dining"];

const diningCards = [
    { icon: Utensils, title: "The Restaurant", text: "Seabourn's primary fine-dining venue provides an elegant open-seating environment, allowing travelers flexibility around when and with whom they dine. Best for formal dinners, special occasions, fine dining, multi-course meals and travelers who appreciate flexible dining." },
    { icon: Sun, title: "The Colonnade", text: "A more relaxed dining experience that, depending on ship and meal period, can feature breakfast, lunch, casual dining, buffet selections, table service and regional themed dinners. Best for travelers who want excellent food without a formal restaurant atmosphere." },
    { icon: Home, title: "In-Suite Dining", text: "Seabourn offers in-suite dining, allowing guests to enjoy meals in the comfort of their suite. Dinner from The Restaurant can be served course-by-course in the suite or on the veranda — ideal for couples, honeymooners, anniversaries and guests who prefer privacy." },
];

const includesData = [
    { title: "Accommodation", items: ["Oceanfront suite", "Most suites with private veranda"] },
    { title: "Dining", items: ["Complimentary dining venues", "In-suite dining"] },
    { title: "Beverages", items: ["Premium spirits", "Fine wines", "Welcome Champagne", "In-suite bar"] },
    { title: "Service", items: ["Personalized service", "No required tipping"] },
    { title: "Connectivity", items: ["Complimentary Wi-Fi packages with unlimited minutes powered by Starlink"] },
    { title: "Experiences", items: ["Included entertainment", "Seabourn Conversations", "Selected signature events"] },
];

const destinations = [
    {
        icon: Landmark,
        title: "Mediterranean",
        subtitle: "Mediterranean Seabourn Cruises",
        desc: "The Mediterranean is one of the most natural fits for Seabourn. The smaller size of Seabourn's ships can allow access to ports and harbors that are less suited to the largest cruise vessels.",
        listLabel: "Travelers can explore:",
        listItems: ["Italy", "Greece", "Croatia", "Turkey", "France", "Spain", "Portugal", "Mediterranean islands"],
        best: "Couples, food lovers, history enthusiasts and travelers looking for sophisticated European exploration."
    },
    {
        icon: Mountain,
        title: "Alaska",
        subtitle: "Alaska Seabourn Cruises",
        desc: "Seabourn's Alaska program focuses on smaller-scale exploration and access to scenic areas of the Inside Passage. The line highlights its ability to reach destinations that larger ships may not be able to access as easily. Seabourn's 2026 Alaska program also emphasizes access to Glacier Bay and the Inside Passage.",
        listLabel: "Expect:",
        listItems: ["Glaciers", "Wildlife", "Mountains", "Fjords", "Remote scenery", "Expedition-style experiences"],
        best: ""
    },
    {
        icon: Camera,
        title: "Japan",
        subtitle: "Japan Seabourn Cruises",
        desc: "Japan is another important Seabourn destination. The line's 2027 program includes new autumn itineraries featuring multiple destinations, additional overnight stays and later departures.",
        listLabel: "Travelers interested in:",
        listItems: ["Japanese cuisine", "Culture", "History", "Art", "Gardens", "Traditional cities", "Smaller ports"],
        best: ""
    },
    {
        icon: Waves,
        title: "Northern Europe",
        subtitle: "Northern Europe Seabourn Cruises",
        desc: "Seabourn also explores Northern Europe. The combination of small ships and longer port experiences can make Northern Europe particularly appealing for luxury travelers.",
        listLabel: "Seabourn also explores:",
        listItems: ["Scandinavia", "Baltic destinations", "British Isles", "Northern European ports", "Norwegian fjords"],
        best: ""
    },
    {
        icon: Snowflake,
        title: "Antarctica",
        subtitle: "Antarctica Seabourn Cruises",
        desc: "For travelers looking for a luxury Antarctica expedition, Seabourn is one of the brands worth considering. Its expedition materials specifically highlight Antarctica, South Georgia and the Falkland Islands among its remote destinations.",
        listLabel: "Its expedition ships provide:",
        listItems: ["Zodiac cruises", "Expedition team", "Nature walks", "Wildlife encounters", "Expert briefings", "Open-deck viewing", "Ice and wildlife exploration"],
        best: "Adventure travelers who want Antarctica without giving up sophisticated accommodations and service."
    },
    {
        icon: Compass,
        title: "Arctic & Northwest Passage",
        subtitle: "Arctic and Northwest Passage Cruises",
        desc: "Seabourn Venture also operates expedition voyages in the Arctic and Northwest Passage. The expedition experience combines luxury accommodation with active exploration.",
        listLabel: "These journeys are designed for travelers who want:",
        listItems: ["Remote landscapes", "Wildlife", "Ice", "Expedition exploration", "Expert interpretation", "Small-ship access"],
        best: ""
    },
    {
        icon: Anchor,
        title: "Kimberley",
        subtitle: "Seabourn Kimberley Cruises",
        desc: "The Kimberley is another standout destination for Seabourn's expedition program. Seabourn's current expedition deployment includes the Kimberley as part of its remote-destination program.",
        listLabel: "Travelers can explore Australia's rugged northwest through:",
        listItems: ["Zodiac excursions", "Remote coastline", "Wildlife", "Indigenous culture", "Waterfalls", "Dramatic landscapes"],
        best: ""
    }
];

const bestForCards = [
    { icon: Heart, title: "Couples", items: ["Honeymoons", "Anniversaries", "Milestone birthdays", "Retirement", "Major life celebrations"] },
    { icon: Gem, title: "Experienced Luxury Travelers", items: ["Luxury hotels", "Private villas", "Yacht charters", "Fine dining", "Personalized service"] },
    { icon: Compass, title: "Adventure Travelers", items: ["Antarctica", "Arctic", "Kimberley", "South Pacific", "Remote destinations"] },
    { icon: Landmark, title: "Cultural Travelers", items: ["Museums", "History", "Food", "Local culture", "Architecture", "UNESCO sites"] },
    { icon: Ship, title: "Travelers Who Dislike Large Ships", items: ["If you would rather have a boutique hotel atmosphere than a floating resort, Seabourn deserves consideration."] },
];

const notFitList = ["Large-scale nightlife", "Extensive family entertainment", "Waterparks", "Huge casinos", "Multiple massive pools", "Large theatrical productions", "A busy resort atmosphere"];

const prosList = ["Intimate ships", "Private yacht-like atmosphere", "All-suite accommodations", "Oceanfront suites", "Personalized service", "Premium spirits and wines included", "Complimentary dining", "Complimentary caviar", "Welcome Champagne", "In-suite bar", "Included Wi-Fi", "No required tipping", "Strong destination programming", "Expedition ships", "Antarctica and Arctic itineraries", "Excellent culinary experience", "Strong enrichment programming"];

const consList = ["Premium pricing", "Less onboard activity than a large resort ship", "Not designed primarily for families with young children", "Optional excursions can add to trip cost", "Smaller ships mean fewer onboard venues", "Some travelers may prefer a more energetic atmosphere"];

const vsLines = [
    { name: "Seabourn vs Silversea", text: "A particularly useful comparison for travelers choosing between two small-ship ultra-luxury brands." },
    { name: "Seabourn vs Regent", text: "Worth considering if you are focused heavily on inclusions, suite size and destination programming." },
    { name: "Seabourn vs Explora Journeys", text: "A compelling comparison between established luxury cruising and a newer, contemporary luxury hospitality concept." },
    { name: "Seabourn vs Scenic", text: "Especially useful for travelers comparing ocean/expedition luxury with Scenic's river and ocean offerings." },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeShipTab, setActiveShipTab] = useState(0);
    const [activeDestTab, setActiveDestTab] = useState(0);

    const ActiveIcon = destinations[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Cruises: Complete Guide to Ships, Suites & Destinations</title>
                <meta name="title" content="Seabourn Cruises Complete Guide | Ships, Suites & Destinations" />
                <meta
                    name="description"
                    content="Explore our complete Seabourn Cruises guide covering ships, suites, destinations, dining, inclusions, excursions, expedition cruises, service, and what makes Seabourn different."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (custom Sbc-hero classes) ──────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>

                <div className="Sbc-hero-content">
                    <h1>Seabourn Cruises <br /> The Complete Guide</h1>

                    <p>
                        Seabourn Cruises is designed for travelers who want the intimacy of a private yacht, the service of a luxury hotel, and the opportunity to explore destinations that larger ships cannot easily reach.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The line combines all-suite accommodations, oceanfront views, personalized service, fine dining, premium beverages, curated experiences and small-ship itineraries across both ocean and expedition cruising. Seabourn currently operates five modern ships, including the purpose-built expedition vessels Seabourn Venture and Seabourn Pursuit.
                            </p>
                            <p>
                                For luxury travelers deciding whether Seabourn is right for their next vacation, this guide explains what Seabourn offers, which ships to consider, where the line sails, what is included, what the suites are like, how dining works, and what makes the experience different from a traditional cruise.
                            </p>
                            <p>
                                The short version: Seabourn is best suited to travelers who value small ships, highly personalized service, sophisticated accommodations, destination depth and an understated luxury atmosphere.
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

            {/* ── WHAT IS SEABOURN CRUISES? ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Short Version</span>
                        <h2 className="Sbc-h2">What Is Seabourn Cruises?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is an ultra-luxury ocean and expedition
                            cruise line built around intimate ships and
                            highly personalized service.
                        </p>
                        <p className="Sbc-intro Sbc-what-intro-second">
                            Unlike large ocean cruise lines that can carry
                            thousands of passengers, Seabourn focuses on a
                            boutique environment designed to feel more like
                            a private yacht or sophisticated resort at sea.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Seabourn's current brand positioning highlights:</h4>
                                <ul className="Sbc-highlights-list">
                                    {[
                                        "Intimate ships",
                                        "Private yacht-like atmosphere",
                                        "All oceanfront suites",
                                        "Personalized service",
                                        "Complimentary premium spirits and fine wines",
                                        "Complimentary caviar",
                                        "Complimentary dining",
                                        "Welcome Champagne",
                                        "In-suite bar",
                                        "Included Wi-Fi",
                                        "No required tipping",
                                        "Curated voyages",
                                        "Expert-led enrichment",
                                        "Expedition experiences"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p Sbc-what-conclusion">
                                That combination makes Seabourn particularly
                                interesting for travelers who want luxury without
                                the atmosphere of a large resort ship.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">What Is Seabourn Cruises Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY LUXURY TRAVELERS CHOOSE SEABOURN ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Luxury Travelers <br /> Choose Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The appeal of Seabourn is not simply that the ships
                            are small. It is the combination of scale, service,
                            accommodations and destination access.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {whyChooseCards.map((card, i) => {
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



            {/* ── OCEAN VS EXPEDITION ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ocean-vs-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Two Styles of Luxury Travel</span>
                        <h2 className="Sbc-h2">Seabourn Ocean Cruises vs Seabourn Expedition Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the most important things to understand
                            about Seabourn is that it offers two distinct
                            styles of luxury travel.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Ocean Cruises Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Ocean Cruises</h3>
                            <p className="Sbc-compare-sub">Ideal for travelers who want:</p>
                            <ul className="Sbc-compare-list">
                                {oceanList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Compass size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Expedition Cruises Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Expedition Cruises</h3>
                            <p className="Sbc-compare-sub">Designed for travelers who want to go further:</p>
                            <ul className="Sbc-compare-list">
                                {expeditionList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p><strong>Ocean cruising:</strong> Luxury first, exploration through sophisticated itineraries.</p>
                        <p><strong>Expedition cruising:</strong> Luxury combined with active exploration and access to remote environments.</p>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN CRUISE SHIPS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleet</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn currently operates a fleet of five modern
                            ships, including its ocean and expedition vessels.
                            If you are choosing between Seabourn sailings, the
                            ship should be considered alongside the itinerary
                            rather than treated as an afterthought.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Ocean-Focused Ships</div>
                            <ul>
                                <li>Seabourn Encore</li>
                                <li>Seabourn Ovation</li>
                                <li>Seabourn Quest</li>
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

            {/* ── SEABOURN SUITES ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Suites <br />What Are They Like?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the strongest reasons to consider Seabourn is
                            its accommodation model. Seabourn's ocean ships
                            feature all oceanfront suites, with most offering
                            private verandas.
                        </p>
                    </div>

                    <div className="Sbc-suite-grid">
                        <div className="Sbc-suite-card">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Home size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Suite Category Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Depending on Ship and Category</h3>
                                <ul className="Sbc-suite-feature-list">
                                    {suiteFeatures.map((f, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ marginTop: "22px", marginBottom: "24px" }}>
                                    Travelers upgrading to larger suites can gain
                                    more living space, larger verandas, enhanced
                                    entertaining areas, premium suite amenities and
                                    additional privacy.
                                </p>
                                <div className="Sbc-suite-strategy">
                                    <p>
                                        <strong>Best strategy:</strong> If you are
                                        considering Seabourn for a milestone
                                        celebration, compare suite categories
                                        carefully rather than simply choosing the
                                        cheapest oceanfront option.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-suite-card Sbc-suite-card-dark">
                            <div className="Sbc-suite-card-image-placeholder">
                                <Gem size={32} className="Sbc-suite-placeholder-icon" />
                                <span className="Sbc-suite-placeholder-text">Wintergarden Suites Image Placeholder</span>
                            </div>
                            <div className="Sbc-suite-card-content">
                                <h3 className="Sbc-h3">Seabourn Wintergarden Suites</h3>
                                <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                    For travelers who want significantly more
                                    space, Seabourn's larger suite categories can
                                    provide a more residential experience.
                                </p>
                                <ul className="Sbc-wintergarden-list">
                                    {["More living space", "Separate sleeping and living areas", "Premium views", "A larger luxury environment", "Space for extended in-suite relaxation"].map((item, i) => (
                                        <li key={i}>
                                            <Check size={16} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ marginTop: "20px" }}>
                                    For long voyages, world cruises or special
                                    celebrations, the additional space can make a
                                    meaningful difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 (Suites & Accommodations) ─────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Accommodations</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Suite at Sea</h3>
                    <p className="Sbc-cta-text">
                        Explore Seabourn's all-suite oceanfront configurations. Let us help you select
                        the ideal layout, from spacious veranda suites to premium multi-room options.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SEABOURN DINING ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Dining is a major part of the Seabourn experience.
                            Seabourn describes its culinary program as
                            world-class, with dining venues designed to rival
                            high-end restaurants. All dining venues are
                            complimentary on its ocean ships. Seabourn also
                            offers complimentary caviar as an additional
                            luxury touch.
                        </p>
                        <ul className="Sbc-dining-venues">
                            {diningVenues.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>
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

            {/* ── WHAT IS INCLUDED ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-includes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Inclusive Model</span>
                        <h2 className="Sbc-h2">What Is Included on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the biggest advantages of Seabourn is the
                            breadth of its inclusive model. Depending on the
                            voyage and ship, the Seabourn experience includes:
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {includesData.map((cat, i) => (
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
                            <strong>Important distinction:</strong> Not every
                            possible experience is automatically included.
                            Optional programs such as Ventures by Seabourn
                            shore excursions can carry additional charges.
                        </p>
                        <p>
                            For expedition voyages, however, Seabourn includes
                            a broad range of expedition experiences such as
                            Zodiac cruises, hikes, nature walks and snorkeling,
                            depending on destination and conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN DESTINATIONS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Seabourn Sails</span>
                        <h2 className="Sbc-h2">Seabourn Destinations</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's destination portfolio is one of its
                            biggest strengths. The line currently travels to
                            all seven continents and visits more than 400
                            ports, including major cities and smaller
                            destinations.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav">
                            {destinations.map((dest, i) => {
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
                                <span className="Sbc-dest-placeholder-text">
                                    {destinations[activeDestTab].title} Travel Image
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Destination</span>
                                <h3 className="Sbc-dest-tab-title">
                                    {destinations[activeDestTab].subtitle}
                                </h3>
                                <p className="Sbc-dest-tab-desc">
                                    {destinations[activeDestTab].desc}
                                </p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">
                                        {destinations[activeDestTab].listLabel}
                                    </h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {destinations[activeDestTab].listItems.map((item, j) => (
                                            <li key={j}>
                                                <Check size={16} strokeWidth={2.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {destinations[activeDestTab].best && (
                                    <div className="Sbc-dest-best-strategy">
                                        <p>
                                            <strong>Best for:</strong>{" "}
                                            {destinations[activeDestTab].best}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS / VENTURES / CONVERSATIONS ──────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-experiences">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard & Ashore</span>
                        <h2 className="Sbc-h2">Shore Excursions, Ventures & Conversations</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-exp-grid">

                        {/* Card 1: Shore Excursions */}
                        <div className="Sbc-exp-card">
                            <div className="Sbc-exp-card-header">
                                <div className="Sbc-exp-icon-wrap">
                                    <Map size={24} />
                                </div>
                                <h3 className="Sbc-h3">Seabourn Shore Excursions</h3>
                            </div>

                            <p className="Sbc-exp-text">
                                Seabourn offers a large portfolio of curated shore experiences. Its current shore-experience program encompasses more than 450 ports of call annually and approximately 12,000 shore experiences, organized into collections based on travelers' interests.
                            </p>

                            <div className="Sbc-exp-features">
                                <span className="Sbc-exp-features-title">Experiences can focus on:</span>
                                <div className="Sbc-exp-tags">
                                    {["Culture", "Food", "History", "Nature", "Active exploration", "Wildlife", "Local communities", "UNESCO sites"].map((item, idx) => (
                                        <span key={idx} className="Sbc-exp-tag">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="Sbc-exp-footer">
                                <strong>Why this matters:</strong> The goal isn't simply to get off the ship. It is to create meaningful experiences in each destination.
                            </div>
                        </div>

                        {/* Card 2: Ventures */}
                        <div className="Sbc-exp-card">
                            <div className="Sbc-exp-card-header">
                                <div className="Sbc-exp-icon-wrap">
                                    <Compass size={24} />
                                </div>
                                <h3 className="Sbc-h3">Ventures by Seabourn</h3>
                            </div>

                            <p className="Sbc-exp-text">
                                Ventures by Seabourn provides optional expedition-style shore experiences in selected destinations. These excursions are led by members of Seabourn's expedition team.
                            </p>

                            <div className="Sbc-exp-features">
                                <span className="Sbc-exp-features-title">Depending on location, these may involve:</span>
                                <div className="Sbc-exp-tags">
                                    {["Kayaking", "Zodiac exploration", "Wildlife viewing", "Hiking", "Nature exploration"].map((item, idx) => (
                                        <span key={idx} className="Sbc-exp-tag">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="Sbc-exp-footer">
                                These experiences can be particularly attractive to active travelers who want more adventure than a conventional sightseeing excursion.
                            </div>
                        </div>

                        {/* Card 3: Conversations */}
                        <div className="Sbc-exp-card">
                            <div className="Sbc-exp-card-header">
                                <div className="Sbc-exp-icon-wrap">
                                    <MessageCircle size={24} />
                                </div>
                                <h3 className="Sbc-h3">Seabourn Conversations</h3>
                            </div>

                            <p className="Sbc-exp-text">
                                Seabourn's enrichment program is another important part of the onboard experience. Seabourn Conversations connects guests with experts, speakers and thought leaders.
                            </p>

                            <div className="Sbc-exp-features">
                                <span className="Sbc-exp-features-title">Topics can include:</span>
                                <div className="Sbc-exp-tags">
                                    {["History", "Culture", "Science", "Exploration", "Art", "Politics", "Destination history", "Literature"].map((item, idx) => (
                                        <span key={idx} className="Sbc-exp-tag">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="Sbc-exp-footer">
                                For travelers who want intellectual enrichment alongside luxury, this can be a significant advantage.
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── CTA 2 (Curate Shore Experiences) ─────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Curate Your Next Shore Experience</h3>
                    <p className="Sbc-cta-text">
                        From cultural immersion to zodiac expeditions, Seabourn offers meaningful shore collections.
                        Let's design your dream adventures in over 400 ports worldwide.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WELLNESS ──────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-wellness">
                <div className="Sbc-container">
                    <div className="Sbc-wellness-layout">
                        <div className="Sbc-wellness-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", marginBottom: "24px" }}>
                                <span className="Sbc-eyebrow">Health & Wellbeing</span>
                                <h2 className="Sbc-h2" style={{ textAlign: "left", margin: "0 0 16px" }}>Seabourn Wellness</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 20px" }}></div>
                            </div>

                            <p className="Sbc-wellness-intro">
                                Seabourn also places emphasis on health and wellness.
                            </p>

                            <div className="Sbc-wellness-features-card">
                                <h4 className="Sbc-wellness-features-title">Depending on ship, guests can find:</h4>
                                <ul className="Sbc-wellness-list">
                                    {["Spa", "Fitness facilities", "Wellness treatments", "Relaxation spaces", "Mindful-living programming", "Fitness activities"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sbc-wellness-takeaway">
                                <p className="Sbc-p">
                                    The experience is generally more understated than a giant resort ship's wellness complex.
                                </p>
                                <p className="Sbc-p" style={{ fontWeight: "600", color: "var(--navy)", marginTop: "8px" }}>
                                    The focus is on personal well-being rather than spectacle.
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-wellness-image-container">
                            <div className="Sbc-wellness-image-placeholder">
                                <div className="Sbc-wellness-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-wellness-placeholder-icon" />
                                </div>
                                <span className="Sbc-wellness-placeholder-text">Seabourn Wellness Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ATMOSPHERE ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Feel</span>
                        <h2 className="Sbc-h2">What Is Seabourn's <br /> Atmosphere Like?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is one of the most difficult things to
                            understand from a brochure — and one of the most
                            important. The line describes its atmosphere as
                            relaxed and sociable, with guests able to feel at
                            home onboard.
                        </p>
                    </div>

                    <div className="Sbc-atmos-words">
                        {["Elegant", "Quiet", "Social", "Intimate", "Unhurried"].map((w, i) => (
                            <span key={i}>{w}</span>
                        ))}
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card Sbc-atmos-card--no">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--no">
                                    <X size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">You Are Unlikely To Choose Seabourn Because You Want</div>
                            </div>
                            <ul>
                                {["Large crowds", "Massive water parks", "Broadway-scale entertainment", "Hundreds of restaurants", "Huge nightlife venues"].map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--no"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card Sbc-atmos-card--yes">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--yes">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">You Choose Seabourn Because You Want</div>
                            </div>
                            <ul>
                                {["Conversation", "Service", "Fine dining", "Space", "Privacy", "Destination access", "Sophisticated surroundings"].map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--yes"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO IS SEABOURN BEST FOR ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Is Seabourn Best For?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-fit-grid">
                        {bestForCards.map((card, i) => {
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

            {/* ── WHO MAY NOT BE A GOOD FIT ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-not-fit">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <h2 className="Sbc-h2">Who May Not Be a Good Fit for Seabourn?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            Seabourn may not be the ideal choice if you want a busy
                            resort atmosphere. The smaller, quieter environment is
                            precisely what many Seabourn guests love — but it is
                            not for everyone.
                        </p>
                    </div>

                    <div className="Sbc-notfit-grid">
                        {notFitList.map((item, i) => (
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

            {/* ── IS SEABOURN GOOD FOR FAMILIES ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Family Travel</span>
                                <h2 className="Sbc-h2">Is Seabourn Good for Families?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Seabourn is primarily designed around an adult luxury experience rather than a family-resort model.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Families who appreciate:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Fine dining", "Cultural travel", "Expedition experiences", "Sophisticated accommodations", "Quiet luxury"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">may enjoy it.</div>
                            </div>

                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>
                                        But families seeking children's clubs, waterparks and extensive youth programming may find another cruise line better suited to their needs.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Families Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN GOOD FOR SOLO TRAVELERS ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Solo Cruising Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Solo Cruising</span>
                                <h2 className="Sbc-h2">Is Seabourn Good for Solo Travelers?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                It can be.
                            </p>

                            <p className="Sbc-p">
                                The intimate ship size can make it easier to meet other travelers than on a huge ocean liner. The social nature of dining and lounges can also encourage interaction.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">However, solo travelers should carefully compare:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Single supplements", "Suite categories", "Specific departure pricing", "Dining arrangements", "Itinerary style"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={24} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">before booking.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN WORTH IT ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is Seabourn Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-worth-intro">
                                For the right traveler, yes.
                            </p>
                            <p className="Sbc-worth-text">
                                The value proposition is not based on finding the cheapest cruise fare. It is based on the overall experience.
                            </p>

                            <div className="Sbc-worth-card">
                                <h4 className="Sbc-worth-card-title">You are paying for:</h4>
                                <div className="Sbc-worth-formula-row">
                                    <span>Small ship</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>suite</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>service</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>dining</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>premium beverages</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>destination access</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>convenience</span>
                                    <span className="Sbc-worth-plus">+</span>
                                    <span>atmosphere</span>
                                </div>
                            </div>

                            <p className="Sbc-worth-value-desc">
                                If you value those things, Seabourn can provide excellent value within the ultra-luxury cruise market.
                            </p>
                            <p className="Sbc-worth-verdict">
                                If your priority is simply maximizing the number of onboard activities per dollar, Seabourn is probably not the right product.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Value & Worth Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 3 (Speak with a Specialist) ─────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Is Seabourn Your Next Voyage?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare itinerary routes, suite rates, and exclusive promotions to find
                        the best value for your ultra-luxury cruise vacation.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Pros and Cons</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Seabourn Pros</h3>
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
                            <h3 className="Sbc-proscons-title">Seabourn Cons</h3>
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

            {/* ── VS OTHER LUXURY CRUISE LINES ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-others">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn vs Other <br /> Luxury Cruise Lines</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Travelers researching Seabourn will often compare
                            it with Silversea, Regent Seven Seas Cruises,
                            Explora Journeys, Scenic, Crystal and Viking. The
                            right choice depends on what type of luxury
                            experience you want.
                        </p>
                    </div>

                    <div className="Sbc-vs-list">
                        {vsLines.map((line, i) => (
                            <div className="Sbc-vs-row" key={i}>
                                <div className="Sbc-vs-name">{line.name}</div>
                                <p className="Sbc-vs-desc">{line.text}</p>
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


            {/* ── FAQ (custom Sbc-faq classes) ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a
                            Seabourn cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── OUR VERDICT ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Cruise Verdict</span>
                        <h2 className="Sbc-h2">Intimate Luxury, Exceptional Service</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn is one of the strongest choices for
                            travelers who want luxury cruising without the
                            scale and crowds of a traditional cruise ship. Its
                            combination of small ships, all-suite
                            accommodations, personalized service, fine dining,
                            premium inclusions and destination depth creates
                            an experience that feels closer to a private
                            yacht-style journey than a conventional cruise
                            vacation.
                        </p>
                        <p className="Sbc-p">
                            The brand becomes even more compelling for
                            adventurous luxury travelers because its
                            expedition ships extend the experience into
                            destinations such as Antarctica, the Arctic, the
                            Kimberley and the South Pacific.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Choose
                                Seabourn if you want intimate luxury,
                                exceptional service, sophisticated suites,
                                outstanding dining and access to remarkable
                                destinations without the crowds of a large
                                cruise ship.
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

export default SeabournCruisesGuide;