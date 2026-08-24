import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Waves,
    Sun,
    Gem,
    Heart,
    Map,
    Compass,
    Landmark,
    Mountain,
    Snowflake,
    Home,
    Users,
    Award,
    AlertCircle,
    User,
    UserCheck,
    Coffee,
    DollarSign,
    Percent,
    Wallet,
    Clock,
    Calendar,
    BookOpen,
    Star,
    MapPin
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournSoloTravelers.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournSoloTravelersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/",
      "name": "Seabourn for Solo Travelers: Single Supplements & Tips",
      "headline": "Seabourn for Solo Travelers: Single Supplements, Dining & What to Expect",
      "description": "Is Seabourn good for solo travelers? Explore single supplements, solo dining, social opportunities, suites, itineraries and tips for cruising alone.",
      "keywords": [
        "Seabourn for Solo Travelers",
        "Seabourn solo travel",
        "Seabourn solo cruises",
        "Seabourn for solo travelers",
        "Seabourn single supplement",
        "Seabourn solo cruise",
        "Seabourn cruise for one",
        "Seabourn single traveler",
        "Seabourn solo dining",
        "Seabourn solo cabins",
        "Seabourn solo cruise review",
        "Seabourn solo travel tips",
        "best Seabourn cruises for solo travelers",
        "Seabourn single occupancy",
        "luxury solo cruise",
        "luxury cruises for solo travelers",
        "Seabourn solo itinerary"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#travel"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tripsandships.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Seabourn Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Seabourn Solo Travel",
          "item": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/"
        }
      ]
    },

    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#travel",
      "name": "Seabourn Solo Travel",
      "description": "A luxury cruise experience for solo travelers combining intimate ships, personalized service, flexible dining, luxury accommodations, destination-focused itineraries and natural social opportunities.",
      "touristType": [
        "Solo travelers",
        "Independent luxury travelers",
        "Solo women travelers",
        "Solo men travelers",
        "Introverted travelers",
        "Extroverted travelers",
        "Luxury travelers"
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Ship Atmosphere",
          "value": "Intimate and sophisticated"
        },
        {
          "@type": "PropertyValue",
          "name": "Single Supplement",
          "value": "Varies by sailing and suite"
        },
        {
          "@type": "PropertyValue",
          "name": "Solo Dining",
          "value": "Flexible dining environment"
        },
        {
          "@type": "PropertyValue",
          "name": "Meeting People",
          "value": "Relatively easy through activities and excursions"
        },
        {
          "@type": "PropertyValue",
          "name": "Suites",
          "value": "Most accommodations are designed for two"
        },
        {
          "@type": "PropertyValue",
          "name": "Excursions",
          "value": "Excellent opportunity to meet other travelers"
        },
        {
          "@type": "PropertyValue",
          "name": "Best For",
          "value": "Independent luxury travelers"
        },
        {
          "@type": "PropertyValue",
          "name": "Social Atmosphere",
          "value": "Friendly without being overly structured"
        },
        {
          "@type": "PropertyValue",
          "name": "Best Itinerary Types",
          "value": "Destination-rich, expedition and longer voyages"
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#features",
      "name": "Seabourn Solo Travel Features",
      "description": "Key features and considerations for travelers cruising alone with Seabourn.",
      "numberOfItems": 8,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Smaller-Ship Atmosphere",
          "description": "Seabourn's intimate ships can make it easier for solo travelers to become familiar with restaurants, lounges, crew, fellow guests and public spaces."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Personalized Service",
          "description": "Attentive service can make traveling alone more comfortable by helping manage the details of the trip."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Flexible Dining",
          "description": "Solo travelers can dine alone, join other guests, request shared dining, use casual dining options or enjoy room service."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Social Opportunities",
          "description": "Shore excursions, hosted activities, lectures, culinary experiences, lounges, bars, fitness activities, cultural programming and shared dining provide opportunities to meet other guests."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Single Supplement Considerations",
          "description": "Solo cruise pricing can vary based on ship, suite category, sailing date, itinerary, demand, promotions and availability."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Suite and Balcony Options",
          "description": "Solo travelers can compare entry-level suites, veranda suites and larger suites based on budget, privacy, scenic views and living space."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Solo-Friendly Itineraries",
          "description": "Mediterranean, Alaska, Antarctica, Arctic and Greenland, expedition cruises and longer World Cruises can provide strong opportunities for exploration and social interaction."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Solo Shore Excursions",
          "description": "Small-group food tours, cooking classes, wine experiences, hiking, wildlife tours, cultural tours and sightseeing can help solo travelers meet fellow guests."
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#itineraries",
      "name": "Best Seabourn Itineraries for Solo Travelers",
      "description": "Seabourn itinerary types highlighted as suitable for solo travelers.",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Mediterranean",
          "description": "Well suited to history, food, cultural excursions, walking tours and smaller ports."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Alaska",
          "description": "Appealing for wildlife, glaciers, scenic cruising and outdoor excursions."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Antarctica",
          "description": "A strong option for adventurous solo travelers interested in wildlife, expedition activities, photography, lectures and Zodiac excursions."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Arctic and Greenland",
          "description": "Suitable for travelers who enjoy remote destinations, wildlife, photography and exploration."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "World Cruises",
          "description": "Longer voyages can appeal to experienced solo travelers who enjoy developing friendships over an extended period."
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Seabourn good for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Seabourn's smaller ships, personalized service, flexible dining and relaxed social atmosphere can work particularly well for independent luxury travelers."
          }
        },
        {
          "@type": "Question",
          "name": "Does Seabourn charge a single supplement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Solo travelers may pay a single supplement because cruise fares are commonly based on double occupancy. The amount varies by sailing, suite and availability."
          }
        },
        {
          "@type": "Question",
          "name": "Does Seabourn have solo cabins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn primarily operates a suite-based accommodation model, so dedicated single cabins are not the main focus of its fleet. Solo travelers should compare single-occupancy pricing across suite categories."
          }
        },
        {
          "@type": "Question",
          "name": "Can solo travelers get a reduced single supplement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. Promotions and reduced single supplements may be available on selected sailings, so flexibility can be valuable."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn expensive for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be. The main reason is that a solo traveler may pay more to occupy a suite designed for two guests. However, the total value depends on the fare, supplement, suite and inclusions."
          }
        },
        {
          "@type": "Question",
          "name": "Can solo travelers dine alone on Seabourn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Solo travelers can choose to dine privately or participate in shared dining when available."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn social for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but the atmosphere is generally sophisticated and relaxed rather than party-oriented. Excursions, dining and onboard activities provide natural opportunities to meet other guests."
          }
        },
        {
          "@type": "Question",
          "name": "How do solo travelers meet people on Seabourn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common opportunities include shore excursions, dining, lectures, lounges, cultural activities and other onboard events."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best Seabourn cruises for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mediterranean, Alaska, expedition, Arctic and longer voyages can all work well. The best itinerary depends on whether you prioritize culture, wildlife, adventure or social opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn good for solo women?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Seabourn's upscale environment and personalized service can be appealing to women traveling independently. Normal travel-safety precautions should still be followed ashore."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn good for solo men?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Solo men can enjoy Seabourn's independent travel, dining, excursions and social opportunities just as other solo guests can."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn good for introverts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The cruise allows you to control how much you socialize. You can enjoy private time while still having opportunities to interact when you want."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn good for extroverts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dining, excursions, lounges and onboard activities provide opportunities for frequent social interaction."
          }
        },
        {
          "@type": "Question",
          "name": "Is a balcony suite worth it for a solo traveler?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For travelers who value privacy and scenic views, a balcony can be worthwhile. It provides a personal outdoor space for relaxing and watching the destination."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn shore excursions good for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Group excursions can make sightseeing easier while creating natural opportunities to meet other travelers."
          }
        },
        {
          "@type": "Question",
          "name": "Can solo travelers go on Seabourn expedition cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Expedition cruises can be particularly appealing to solo travelers because shared Zodiac excursions, wildlife encounters and expedition activities create natural social interaction."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find the best Seabourn solo cruise price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare several sailing dates, suite categories and itineraries. Monitor promotions and single-supplement offers, and compare the total trip cost rather than only the advertised fare."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it for a solo traveler?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For travelers who prioritize luxury, personalized service and an intimate ship environment, Seabourn can be worth the additional cost of solo occupancy."
          }
        }
      ]
    }
  ]
};
/* ── FAQ Accordion (reused Sbc-faq classes) ────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Is Seabourn good for solo travelers?", a: "Yes. Seabourn's smaller ships, personalized service, flexible dining and relaxed social atmosphere can work particularly well for independent luxury travelers." },
        { q: "Does Seabourn charge a single supplement?", a: "Solo travelers may pay a single supplement because cruise fares are commonly based on double occupancy. The amount varies by sailing, suite and availability." },
        { q: "Does Seabourn have solo cabins?", a: "Seabourn primarily operates a suite-based accommodation model, so dedicated single cabins are not the main focus of its fleet. Solo travelers should compare single-occupancy pricing across suite categories." },
        { q: "Can solo travelers get a reduced single supplement?", a: "Sometimes. Promotions and reduced single supplements may be available on selected sailings, so flexibility can be valuable." },
        { q: "Is Seabourn expensive for solo travelers?", a: "It can be. The main reason is that a solo traveler may pay more to occupy a suite designed for two guests. However, the total value depends on the fare, supplement, suite and inclusions." },
        { q: "Can solo travelers dine alone on Seabourn?", a: "Yes. Solo travelers can choose to dine privately or participate in shared dining when available." },
        { q: "Is Seabourn social for solo travelers?", a: "Yes, but the atmosphere is generally sophisticated and relaxed rather than party-oriented. Excursions, dining and onboard activities provide natural opportunities to meet other guests." },
        { q: "How do solo travelers meet people on Seabourn?", a: "Common opportunities include shore excursions, dining, lectures, lounges, cultural activities and other onboard events." },
        { q: "What are the best Seabourn cruises for solo travelers?", a: "Mediterranean, Alaska, expedition, Arctic and longer voyages can all work well. The best itinerary depends on whether you prioritize culture, wildlife, adventure or social opportunities." },
        { q: "Is Seabourn good for solo women?", a: "Yes. Seabourn's upscale environment and personalized service can be appealing to women traveling independently. Normal travel-safety precautions should still be followed ashore." },
        { q: "Is Seabourn good for solo men?", a: "Yes. Solo men can enjoy Seabourn's independent travel, dining, excursions and social opportunities just as other solo guests can." },
        { q: "Is Seabourn good for introverts?", a: "Yes. The cruise allows you to control how much you socialize. You can enjoy private time while still having opportunities to interact when you want." },
        { q: "Is Seabourn good for extroverts?", a: "Yes. Dining, excursions, lounges and onboard activities provide opportunities for frequent social interaction." },
        { q: "Is a balcony suite worth it for a solo traveler?", a: "For travelers who value privacy and scenic views, a balcony can be worthwhile. It provides a personal outdoor space for relaxing and watching the destination." },
        { q: "Are Seabourn shore excursions good for solo travelers?", a: "Yes. Group excursions can make sightseeing easier while creating natural opportunities to meet other travelers." },
        { q: "Can solo travelers go on Seabourn expedition cruises?", a: "Yes. Expedition cruises can be particularly appealing to solo travelers because shared Zodiac excursions, wildlife encounters and expedition activities create natural social interaction." },
        { q: "How can I find the best Seabourn solo cruise price?", a: "Compare several sailing dates, suite categories and itineraries. Monitor promotions and single-supplement offers, and compare the total trip cost rather than only the advertised fare." },
        { q: "Is Seabourn worth it for a solo traveler?", a: "For travelers who prioritize luxury, personalized service and an intimate ship environment, Seabourn can be worth the additional cost of solo occupancy." },
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
const soloQualities = [
    "Luxury accommodations", "Personalized service", "Smaller ships", "Fine dining",
    "Cultural experiences", "Wildlife and expedition travel", "Flexible days", "A sophisticated social environment",
];

const glanceRows = [
    { feature: "Ship atmosphere", value: "Intimate and sophisticated" },
    { feature: "Single supplement", value: "Varies by sailing and suite" },
    { feature: "Solo dining", value: "Flexible dining environment" },
    { feature: "Meeting people", value: "Relatively easy through activities and excursions" },
    { feature: "Suites", value: "Most accommodations are designed for two" },
    { feature: "Excursions", value: "Excellent opportunity to meet other travelers" },
    { feature: "Best for", value: "Independent luxury travelers" },
    { feature: "Social atmosphere", value: "Friendly without being overly structured" },
    { feature: "Best itinerary types", value: "Destination-rich, expedition and longer voyages" },
];

const whyChooseCards = [
    {
        icon: Ship,
        title: "Smaller-ship atmosphere",
        text: "A smaller ship means you are less likely to feel anonymous.",
        tags: ["Restaurants", "Lounges", "Crew", "Fellow guests", "Public spaces"],
    },
    {
        icon: Heart,
        title: "Personalized service",
        text: "Seabourn's service model can be particularly comfortable for someone traveling alone. You don't have another person helping manage the details of the trip, so having attentive service can make the experience easier.",
    },
    {
        icon: Sun,
        title: "Flexible days",
        text: "You can decide exactly how you want to spend your time. You don't have to compromise with a travel companion.",
    },
    {
        icon: Users,
        title: "Built-in social opportunities",
        text: "Excursions, dining and onboard activities create natural opportunities to meet people.",
    },
    {
        icon: Gem,
        title: "Luxury without a party-ship atmosphere",
        text: "Seabourn generally appeals to travelers looking for a more sophisticated environment rather than a highly programmed social scene.",
    },
];

const supplementFactors = ["Ship", "Suite category", "Sailing date", "Itinerary", "Demand", "Promotional offers", "Availability"];
const flexibilityFactors = ["Travel dates", "Ship", "Itinerary", "Suite category"];
const totalCostFactors = ["Cruise fare", "Single supplement", "Taxes and fees", "Flights", "Transfers", "Pre- or post-cruise hotels", "Shore excursions", "Travel insurance"];
const soloCabinFocus = ["Single-occupancy pricing", "Available suite categories", "Current promotions", "Suite location", "Overall value"];
const balconyBenefits = ["Read", "Enjoy coffee", "Watch scenic cruising", "Relax between excursions", "Enjoy privacy"];
const soloDiningChoices = ["Dine alone", "Join other guests", "Request a shared table", "Meet people during meals", "Use casual dining options", "Enjoy room service"];
const meetPeopleWays = ["Shore excursions", "Hosted activities", "Lectures", "Cooking or culinary experiences", "Lounges", "Bars", "Fitness activities", "Pool areas", "Cultural programming", "Shared dining"];

const suiteOptions = [
    { icon: Wallet, title: "Entry-level suite", text: "A good option if your priority is keeping the total cost under control." },
    { icon: Waves, title: "Veranda suite", text: "An attractive choice for travelers who enjoy private outdoor space, scenic views, morning coffee and watching the destination from their suite." },
    { icon: Home, title: "Larger suite", text: "Useful if you expect to spend significant time in your accommodation or want additional living space." },
];

const largeShipCompareRows = [
    { seabourn: "Intimate environment", large: "Very large environment" },
    { seabourn: "Smaller guest population", large: "Thousands of guests" },
    { seabourn: "Sophisticated social atmosphere", large: "Extensive social programming" },
    { seabourn: "Personalized service", large: "Large-scale service" },
    { seabourn: "Luxury-focused", large: "Entertainment-focused" },
    { seabourn: "Quiet lounges", large: "Numerous entertainment venues" },
    { seabourn: "Destination-focused", large: "Destination + onboard activities" },
];

const tooQuietNo = ["Nightclubs", "Large parties", "Constant entertainment", "Hundreds of social activities"];
const tooQuietYes = ["Conversation", "Fine dining", "Reading", "Cultural experiences", "Scenic cruising", "Relaxation"];

const soloItineraries = [
    {
        title: "Mediterranean",
        icon: Landmark,
        subtitle: "History, food and cultural exploration",
        desc: "Excellent for history, food, cultural excursions, walking tours and smaller ports. The variety of activities gives solo travelers many opportunities to meet others.",
        listLabel: "Excellent for:",
        listItems: ["History", "Food", "Cultural excursions", "Walking tours", "Smaller ports"],
    },
    {
        title: "Alaska",
        icon: Mountain,
        subtitle: "Wildlife, glaciers and scenic cruising",
        desc: "Ideal for wildlife, glaciers, scenic cruising and outdoor excursions. Shared excursions can make Alaska particularly social.",
        listLabel: "Ideal for:",
        listItems: ["Wildlife", "Glaciers", "Scenic cruising", "Outdoor excursions"],
    },
    {
        title: "Antarctica",
        icon: Snowflake,
        subtitle: "Expedition activities and wildlife",
        desc: "A strong choice for adventurous solo travelers interested in wildlife, expedition activities, photography, lectures and Zodiac excursions. The shared expedition experience naturally creates conversation.",
        listLabel: "A strong choice for adventurous solo travelers interested in:",
        listItems: ["Wildlife", "Expedition activities", "Photography", "Lectures", "Zodiac excursions"],
    },
    {
        title: "Arctic & Greenland",
        icon: Compass,
        subtitle: "Remote destinations and exploration",
        desc: "Excellent for travelers who enjoy remote destinations, wildlife, photography and exploration.",
        listLabel: "Excellent for travelers who enjoy:",
        listItems: ["Remote destinations", "Wildlife", "Photography", "Exploration"],
    },
    {
        title: "World Cruises",
        icon: Map,
        subtitle: "Longer voyages, deeper friendships",
        desc: "Longer voyages can appeal to experienced solo travelers who enjoy developing friendships over an extended period.",
        listLabel: "Best for:",
        listItems: ["Experienced solo travelers", "Developing friendships over time", "Extended, immersive itineraries"],
    },
];

const solotravelExpCards = [
    {
        icon: Landmark,
        title: "Seabourn Solo Travelers in the Mediterranean",
        text: "The Mediterranean can be particularly easy for solo travelers. A typical day might include a morning walking tour, lunch in port, afternoon sightseeing and evening onboard dining.",
        tagsTitle: "A typical day might include:",
        tags: ["Morning walking tour", "Lunch in port", "Afternoon sightseeing", "Evening onboard dining"],
        footer: "Because many excursions involve small groups, travelers can naturally meet others with similar interests.",
    },
    {
        icon: Mountain,
        title: "Seabourn Solo Travelers in Alaska",
        text: "Alaska can be one of the best choices for solo travelers interested in nature. Wildlife viewing, glacier excursions and scenic cruising create natural conversation topics.",
        tagsTitle: "Popular activities can include:",
        tags: ["Whale watching", "Hiking", "Wildlife viewing", "Glacier excursions", "Cultural experiences"],
        footer: "Shared wildlife moments make it easy to strike up conversation with fellow travelers.",
    },
    {
        icon: Compass,
        title: "Seabourn Solo Travelers on Expedition Cruises",
        text: "Seabourn's expedition voyages can be particularly social. Guests share experiences such as Zodiac excursions, wildlife landings, expedition briefings, lectures and photography.",
        tagsTitle: "Guests share experiences such as:",
        tags: ["Zodiac excursions", "Wildlife landings", "Expedition briefings", "Lectures", "Photography", "Remote destination exploration"],
        footer: "The shared adventure can make it easier to build connections.",
    },
];

const introvertList = ["Reading", "Exploring alone", "Sitting quietly on deck", "Enjoying your suite"];
const extrovertList = ["Dining", "Excursions", "Lounges", "Bars", "Lectures", "Group activities"];

const genderCards = [
    { icon: User, title: "Is Seabourn Good for Solo Women Travelers?", text: "Seabourn can be appealing to women who want an upscale environment with a combination of independence and service. Travelers should still follow normal travel-safety practices when exploring ports independently. For more remote destinations or unfamiliar cities, organized excursions can provide additional convenience." },
    { icon: UserCheck, title: "Is Seabourn Good for Solo Men?", text: "Yes. Solo male travelers can enjoy the same combination of independent exploration, social dining, excursions and fine dining in luxury accommodations. The strongest determining factor is usually personal travel style rather than gender." },
];

const excursionBenefits = ["Join a small group", "Share experiences", "Meet fellow travelers", "Learn from a local guide", "Return to the ship with an organized transfer"];
const excursionChoiceTags = ["Food tours", "Cooking classes", "Wine experiences", "Hiking", "Wildlife tours", "Cultural tours", "Small-group sightseeing"];

const soloTips = [
    { title: "Compare single supplements", text: "Don't book the first sailing you find." },
    { title: "Check multiple dates", text: "Pricing can vary substantially between sailings." },
    { title: "Consider shoulder seasons", text: "Lower-demand dates may sometimes provide better value." },
    { title: "Book excursions early", text: "Popular small-group excursions can fill quickly." },
    { title: "Tell the dining team you're traveling alone", text: "They can help you choose the dining arrangement that fits your preferences." },
    { title: "Participate in one or two activities", text: "You don't need to attend everything." },
    { title: "Choose your suite carefully", text: "Think about whether a balcony or better location is important to you." },
    { title: "Use the ship's public spaces", text: "Lounges and shared areas are natural places to meet people." },
    { title: "Don't feel obligated to socialize", text: "Solo travel is also about having complete control over your time." },
    { title: "Work with a travel advisor", text: "An experienced luxury cruise advisor can monitor pricing, promotions and suite availability." },
];

const saveMoneyCards = [
    { icon: Calendar, title: "Travel during shoulder season", text: "Demand can be lower than during peak periods." },
    { icon: Clock, title: "Be flexible with dates", text: "A different departure date may have a significantly different fare." },
    { icon: Home, title: "Compare suite categories", text: "An entry-level suite can sometimes provide a better overall value." },
    { icon: Percent, title: "Watch promotions", text: "Special solo offers or reduced supplements may occasionally become available." },
    { icon: DollarSign, title: "Compare the total trip cost", text: "Don't focus only on the cruise fare." },
];

const worthItList = ["Luxury accommodation", "Personalized service", "Fine dining", "Curated destinations", "Excursion opportunities", "Social opportunities", "Complete freedom over your schedule"];

const prosList = [
    "Excellent service", "Intimate ship environment", "Flexible dining", "Natural social opportunities",
    "Luxury accommodations", "Strong destination focus", "Excellent excursions", "Good environment for independent travelers",
    "Expedition itineraries can be highly social", "No need to coordinate with a travel companion",
];
const consList = [
    "Single supplements can be significant", "Dedicated solo cabins are limited", "Some suite categories can be expensive alone",
    "Social atmosphere is relaxed rather than party-oriented", "Solo travelers must plan their own personal time", "Popular excursions may sell out",
];

const shouldChooseList = ["Enjoy luxury", "Prefer smaller ships", "Value personal service", "Like meeting people organically", "Enjoy cultural travel", "Appreciate fine dining", "Want independent days", "Enjoy wildlife and expedition travel", "Prefer sophisticated social environments"];
const preferAnotherList = ["Dedicated solo cabins", "Very low single supplements", "Large singles programs", "Extensive nightlife", "Large social events", "Young-adult-focused activities", "Very large entertainment facilities"];

/* ── Component ─────────────────────────────────────────────────── */
const SeabournSoloTravelers = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeItinTab, setActiveItinTab] = useState(0);
    const ActiveItinIcon = soloItineraries[activeItinTab].icon;

    return (
        <div>
            <Helmet>
                <title>Seabourn Solo Cruises: Single Supplements, Dining & Tips</title>
                <meta name="title" content="Seabourn Solo Cruises: Single Supplements, Dining & Tips" />
                <meta
                    name="description"
                    content="Is Seabourn good for solo travelers? Explore single supplements, solo dining, social opportunities, suites, itineraries and tips for cruising alone."
                />
                <script type="application/ld+json">{JSON.stringify(seabournSoloTravelersSchema )}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn for Solo Travelers</h1>

                    <p>
                        A Seabourn cruise can be an excellent choice for solo travelers who want the freedom of traveling independently without giving up luxury, personalized service or opportunities to meet other guests.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Seabourn's intimate ships, relaxed atmosphere and destination-focused itineraries can make solo cruising feel less overwhelming than traveling alone on a very large cruise ship.
                            </p>
                            <p>
                                However, there is an important consideration: the cost of cruising alone. Solo travelers need to understand Seabourn's single-occupancy pricing, available promotions, suite options and itinerary choices before booking.
                            </p>
                            <p>
                                This guide explains Seabourn solo travel, single supplements, dining arrangements, social opportunities, choosing the right suite and which types of Seabourn itineraries work particularly well for travelers sailing alone.
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
                            Start Planning Your Solo Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN GOOD FOR SOLO TRAVELERS ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-is-good">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Short Answer</span>
                        <h2 className="Sbc-h2">Is Seabourn Good for <br /> Solo Travelers?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-image-container" style={{ maxWidth: "800px", margin: "0 auto 32px" }}>
                        <div className="Sbc-qa-image-placeholder" style={{ minHeight: "380px" }}>
                            <div className="Sbc-qa-placeholder-icon-wrapper">
                                <User size={40} className="Sbc-qa-placeholder-icon" />
                            </div>
                            <span className="Sbc-qa-placeholder-text">Seabourn Solo Travel Image Placeholder</span>
                        </div>
                    </div>

                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <p className="Sbc-p" style={{ textAlign: "center", fontWeight: "500" }}>
                            Yes, Seabourn can be very good for solo travelers.
                        </p>
                        <p className="Sbc-p" style={{ marginTop: "14px", textAlign: "center" }}>
                            The experience is particularly well suited to independent travelers who appreciate:
                        </p>

                        <div className="Sbc-qa-card" style={{ border: "1.5px solid var(--navy)", borderColor: "var(--navy)" }}>
                            <ul className="Sbc-qa-list">
                                {soloQualities.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", background: "transparent" }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-qa-warning-box">
                            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                <span>
                                    The biggest challenge is usually pricing, rather than the onboard experience. A solo traveler may pay more than a traveler sharing a suite because cruise fares are generally structured around double occupancy.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE TABLE (new Slo- classes) ──────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn Solo Travel at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Slo-glance-table-wrap">
                        <table className="Slo-glance-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Solo Traveler Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row.feature}</td>
                                        <td data-label="Solo Traveler Experience">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY SOLO TRAVELERS CHOOSE SEABOURN ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Advantages</span>
                        <h2 className="Sbc-h2">Why Solo Travelers <br /> Choose Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Solo travel on Seabourn has several advantages.</p>
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
                                    {card.tags && (
                                        <div className="Sbc-exp-tags" style={{ marginTop: "16px" }}>
                                            {card.tags.map((t, j) => (
                                                <span key={j} className="Sbc-exp-tag">{t}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── SINGLE SUPPLEMENT EXPLAINED ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-supplement">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Understanding The Cost</span>
                        <h2 className="Sbc-h2">Seabourn Single <br /> Supplement Explained</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The single supplement is one of the most important considerations for solo travelers. Cruise fares are commonly advertised based on double occupancy. When one traveler occupies a suite alone, the cruise line may charge a higher percentage of the fare.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights"  style={{backgroundColor: 'var(--bg-white)'}}>
                                <h4 className="Sbc-highlights-title">The exact supplement can vary based on:</h4>
                                <ul className="Sbc-highlights-list">
                                    {supplementFactors.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                There is therefore no single Seabourn single-supplement percentage that applies to every voyage.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Percent size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Single Supplement Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── CTA 1 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Travel Your Way</span>
                    <h3 className="Sbc-cta-title">Start Planning Your Solo Seabourn Voyage</h3>
                    <p className="Sbc-cta-text">
                        Let's compare single supplements, suites and sailings so you can find the right
                        Seabourn voyage for traveling alone.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── REDUCED SUPPLEMENTS + FIND BEST FARE ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-reduced-fares">
                <div className="Sbc-container">
                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon">
                                <DollarSign size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sbc-card-title">Reduced Single Supplements</h3>
                            <p className="Sbc-card-text">
                                Sometimes. Seabourn may offer promotions or pricing opportunities that make solo travel more attractive on selected sailings. Availability can change quickly.
                            </p>
                            <div className="Sbc-exp-features" style={{ marginTop: "18px" }}>
                                <span className="Sbc-exp-features-title">If you're flexible about:</span>
                                <div className="Sbc-exp-tags">
                                    {flexibilityFactors.map((item, idx) => (
                                        <span key={idx} className="Sbc-exp-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="Sbc-card-text" style={{ marginTop: "16px" }}>
                                you may have more opportunities to find a favorable solo fare.
                            </p>
                        </div>

                        <div className="Sbc-card">
                            <div className="Sbc-card-icon">
                                <Wallet size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sbc-card-title">Finding the Best Solo Fare</h3>
                            <p className="Sbc-card-text">
                                Instead of looking only at the advertised cruise fare, compare the total solo cost.
                            </p>
                            <div className="Sbc-exp-features" style={{ marginTop: "18px" }}>
                                <span className="Sbc-exp-features-title">Consider:</span>
                                <div className="Sbc-exp-tags">
                                    {totalCostFactors.map((item, idx) => (
                                        <span key={idx} className="Sbc-exp-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="Sbc-card-text" style={{ marginTop: "16px" }}>
                                A sailing with a slightly higher base fare can sometimes provide better overall value if the single supplement is lower.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SOLO CABINS ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-cabins">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Accommodations</span>
                                <h2 className="Sbc-h2">Are There Seabourn Solo Cabins?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Seabourn's accommodation inventory is primarily designed around its suite-based luxury model rather than a large selection of dedicated single cabins.
                            </p>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: "var(--bg-white)", marginTop: "24px" }}>
                                <h4 className="Sbc-highlights-title">For that reason, solo travelers should focus on:</h4>
                                <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: "1fr" }}>
                                    {soloCabinFocus.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Home size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Solo Cabins Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="Sbc-qa-warning-box" style={{ marginTop: "32px" }}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                            <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                            <span>
                                Do not assume that every Seabourn ship has a dedicated solo cabin simply because solo travelers are welcome.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH SUITE IS BEST ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing a Suite</span>
                        <h2 className="Sbc-h2">Which Seabourn Suite Is <br /> Best for a Solo Traveler?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The best suite depends on your priorities and budget. For solo travelers, the most expensive suite is not necessarily the best value.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {suiteOptions.map((s, i) => {
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

                    <div className="Sbc-suite-strategy" style={{ marginTop: "36px" }}>
                        <p>
                            <strong>Is a balcony worth it?</strong> For many solo travelers, yes. A private balcony provides a place to {balconyBenefits.join(", ").toLowerCase()}. This can be particularly valuable on scenic itineraries such as Alaska, Antarctica or Mediterranean voyages.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── SOLO DINING ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-dining">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Coffee size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Solo Dining on Seabourn Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">At the Table</span>
                                <h2 className="Sbc-h2">Solo Dining on Seabourn</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Dining alone can initially feel like one of the biggest concerns about solo cruising. On Seabourn, however, dining can be flexible.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Solo travelers may choose to:</h4>
                                <ul className="Sbc-qa-list">
                                    {soloDiningChoices.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">throughout the voyage.</div>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                The relaxed dining environment means you don't necessarily need a fixed dining companion throughout the voyage.
                            </p>
                        </div>
                    </div>

                    <div className="Sbc-suite-strategy" style={{ marginTop: "40px" }}>
                        <p>
                            <strong>Dine alone or with others?</strong> There is no right answer. If you want privacy, dining alone can be enjoyable. If you're interested in meeting people, meals are one of the easiest opportunities to start conversations. A good strategy is to alternate — some meals alone, some meals socially — for both independence and connection.
                        </p>
                    </div>
                </div>
            </section>

                        {/* ── CTA 2 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Suites &amp; Accommodations</span>
                    <h3 className="Sbc-cta-title">Find the Right Suite for Traveling Alone</h3>
                    <p className="Sbc-cta-text">
                        From entry-level suites to spacious verandas, let's find the category that
                        fits your budget and your priorities.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── HOW TO MEET PEOPLE ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-meet-people">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Social Opportunities</span>
                        <h2 className="Sbc-h2">How Do Solo Travelers <br /> Meet People on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            You don't have to be highly extroverted to meet people. Excursions are particularly useful because everyone already has a common interest.
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights">
                        <h4 className="Sbc-highlights-title">Natural opportunities include:</h4>
                        <ul className="Sbc-highlights-list">
                            {meetPeopleWays.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN TOO QUIET ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-too-quiet">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Setting Expectations</span>
                        <h2 className="Sbc-h2">Is Seabourn Too Quiet <br /> for Solo Travelers?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">It depends on what you want.</p>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card Sbc-atmos-card--no">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--no">
                                    <X size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">Seabourn May Feel Too Quiet If You're Looking For</div>
                            </div>
                            <ul>
                                {tooQuietNo.map((item, i) => (
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
                                <div className="Sbc-atmos-card-title">The Atmosphere Can Be Ideal If You Prefer</div>
                            </div>
                            <ul>
                                {tooQuietYes.map((item, i) => (
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

            {/* ── VS LARGE CRUISE SHIPS TABLE ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-vs-large">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Different Kind of Cruise</span>
                        <h2 className="Sbc-h2">Seabourn Solo Travel <br /> vs. Large Cruise Ships</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For solo travelers who want quality social interaction rather than constant entertainment, Seabourn can be a strong fit.
                        </p>
                    </div>

                    <div className="Slo-glance-table-wrap">
                        <table className="Slo-glance-table Slo-vs-table">
                            <thead>
                                <tr>
                                    <th>Seabourn</th>
                                    <th>Large Cruise Ship</th>
                                </tr>
                            </thead>
                            <tbody>
                                {largeShipCompareRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Seabourn">{row.seabourn}</td>
                                        <td data-label="Large Cruise Ship">{row.large}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── BEST ITINERARIES (tabs) ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-itineraries">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where to Sail Alone</span>
                        <h2 className="Sbc-h2">Best Seabourn Itineraries <br /> for Solo Travelers</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            There isn't one universally best itinerary. Instead, look for itineraries that naturally create opportunities for interaction and exploration.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav">
                            {soloItineraries.map((dest, i) => {
                                const Icon = dest.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Sbc-dest-tab-btn ${activeItinTab === i ? "active" : ""}`}
                                        onClick={() => setActiveItinTab(i)}
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
                                    <ActiveItinIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">
                                    {soloItineraries[activeItinTab].title} Solo Travel Image
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Itinerary</span>
                                <h3 className="Sbc-dest-tab-title">{soloItineraries[activeItinTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{soloItineraries[activeItinTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{soloItineraries[activeItinTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {soloItineraries[activeItinTab].listItems.map((item, j) => (
                                            <li key={j}>
                                                <Check size={16} strokeWidth={2.5} />
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

            {/* ── CTA 3 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Explore and Discover</span>
                    <h3 className="Sbc-cta-title">Design Your Solo Itinerary</h3>
                    <p className="Sbc-cta-text">
                        From the Mediterranean to Antarctica, let's find the itinerary that gives you
                        the right mix of independence and connection.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Design My Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── MEDITERRANEAN / ALASKA / EXPEDITION SPOTLIGHTS ────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-spotlights">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Closer Look</span>
                        <h2 className="Sbc-h2">Solo Travel by Destination</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-exp-grid">
                        {solotravelExpCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-exp-card" key={i}>
                                    <div className="Sbc-exp-card-header">
                                        <div className="Sbc-exp-icon-wrap">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="Sbc-h3">{card.title}</h3>
                                    </div>
                                    <p className="Sbc-exp-text">{card.text}</p>
                                    <div className="Sbc-exp-features">
                                        <span className="Sbc-exp-features-title">{card.tagsTitle}</span>
                                        <div className="Sbc-exp-tags">
                                            {card.tags.map((t, j) => (
                                                <span key={j} className="Sbc-exp-tag">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="Sbc-exp-footer">{card.footer}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── INTROVERTS VS EXTROVERTS ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-personality">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Whatever Your Style</span>
                        <h2 className="Sbc-h2">Solo Travel for Introverts <br /> &amp; Extroverts</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            You do not need to be highly social to enjoy a Seabourn cruise alone — you control your level of interaction.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Coffee size={40} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Solo Travel for Introverts</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Solo Travel for Introverts</h3>
                            <p className="Sbc-compare-sub">You can spend the day:</p>
                            <ul className="Sbc-compare-list">
                                {introvertList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Users size={40} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Solo Travel for Extroverts</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Solo Travel for Extroverts</h3>
                            <p className="Sbc-compare-sub">You can seek out social opportunities through:</p>
                            <ul className="Sbc-compare-list">
                                {extrovertList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p><strong>Introverts:</strong> Choose to socialize at dinner or during an excursion, then enjoy quiet time on your own terms.</p>
                        <p><strong>Extroverts:</strong> Because the guest population is relatively small compared with a large ship, repeated encounters can help friendships develop naturally.</p>
                    </div>
                </div>
            </section>

            {/* ── SOLO WOMEN / SOLO MEN ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-gender">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Traveling Independently</span>
                        <h2 className="Sbc-h2">Solo Women &amp; <br /> Solo Men on Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {genderCards.map((card, i) => {
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

            {/* ── SHORE EXCURSIONS FOR SOLO TRAVELERS ───────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ashore</span>
                        <h2 className="Sbc-h2">Solo Traveler Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Slo-excursions-grid">
                        <div className="Slo-excursion-card">
                            <div className="Slo-excursion-image-placeholder">
                                <Map size={40} className="Slo-excursion-placeholder-icon" />
                                <span className="Slo-excursion-placeholder-text">Solo Traveler Shore Excursions</span>
                            </div>
                            <h3 className="Slo-excursion-card-title">Solo Traveler Shore Excursions</h3>
                            <p className="Slo-excursion-card-intro">
                                Shore excursions can be one of the best investments for solo travelers.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Instead of navigating a destination completely alone, you can:
                            </p>
                            <ul className="Slo-excursion-list">
                                {excursionBenefits.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Slo-excursion-card-footer">
                                For first-time solo cruisers, excursions can also make the transition to solo travel easier.
                            </div>
                        </div>

                        <div className="Slo-excursion-card">
                            <div className="Slo-excursion-image-placeholder">
                                <Compass size={40} className="Slo-excursion-placeholder-icon" />
                                <span className="Slo-excursion-placeholder-text">How to Choose Excursions</span>
                            </div>
                            <h3 className="Slo-excursion-card-title">How to Choose Excursions as a Solo Traveler</h3>
                            <p className="Slo-excursion-card-intro">
                                Look for activities with built-in interaction.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Good options include:
                            </p>
                            <ul className="Slo-excursion-list">
                                {excursionChoiceTags.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Slo-excursion-card-footer">
                                If you want solitude, choose a private excursion or independent exploration instead.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SOLO TRAVEL TIPS (new Slo- classes) ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Seabourn Solo Travel Tips</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Slo-tips-grid">
                        {soloTips.map((tip, i) => (
                            <div className="Slo-tip-card" key={i}>
                                <span className="Slo-tip-number">{String(i + 1).padStart(2, "0")}</span>
                                <div>
                                    <h4 className="Slo-tip-title">{tip.title}</h4>
                                    <p className="Slo-tip-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            {/* ── CTA 4 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Ready to Book Your Solo Voyage?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare single-occupancy fares, suite categories and promotions to find
                        the best value for your solo luxury cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Solo Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── HOW TO SAVE MONEY ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-save-money">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Smart Strategies</span>
                        <h2 className="Sbc-h2">How to Save Money on a <br /> Seabourn Solo Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Solo travelers can use several strategies.</p>
                    </div>

                    <div className="Sbc-card-grid">
                        {saveMoneyCards.map((card, i) => {
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

                    <div className="Sbc-suite-strategy" style={{ marginTop: "36px" }}>
                        <p>
                            <strong>Should solo travelers book early?</strong> Generally, yes, particularly if you have a specific ship, suite, itinerary or travel date. However, flexible solo travelers may sometimes benefit from monitoring later promotions. The best strategy depends on whether your priority is specificity or price.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── IS SEABOURN WORTH IT FOR SOLO TRAVELERS ───────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is Seabourn Worth It <br /> for Solo Travelers?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Slo-worth-verdict-intro">For the right independent traveler, yes.</p>
                            <p className="Sbc-p">
                                The biggest advantage is the ability to enjoy a premium, luxury vacation without needing a travel companion.
                            </p>

                            <div className="Slo-worth-grid">
                                {worthItList.map((item, i) => (
                                    <div key={i} className="Slo-worth-item">
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="Slo-worth-caveat">
                                <div className="Slo-worth-caveat-title">The Cost Caveat</div>
                                <p className="Slo-worth-caveat-text">
                                    The main disadvantage is the additional cost associated with occupying a suite alone due to standard single supplement premiums.
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Slo-worth-image-card">
                                <div className="Slo-worth-badge">
                                    <Award size={14} /> Value Verdict
                                </div>
                                <div className="Slo-worth-rating">4.8 / 5</div>
                                <div className="Slo-worth-rating-sub">Solo Luxury Score</div>
                                <div className="Slo-worth-stars">
                                    <Gem size={20} fill="currentColor" />
                                    <Gem size={20} fill="currentColor" />
                                    <Gem size={20} fill="currentColor" />
                                    <Gem size={20} fill="currentColor" />
                                    <Gem size={20} fill="currentColor" style={{ opacity: 0.8 }} />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Solo Travel Value</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Slo-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Solo Travel Pros and Cons</h2>
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

            {/* ── WHO SHOULD CHOOSE / WHO MAY PREFER ANOTHER LINE ───────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-who-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Choose Seabourn for Solo Travel?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card Sbc-atmos-card--yes">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--yes">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">Seabourn Is Especially Well Suited to Solo Travelers Who</div>
                            </div>
                            <ul>
                                {shouldChooseList.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--yes"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card Sbc-atmos-card--no">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--no">
                                    <X size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">A Different Line May Be Better If You Want</div>
                            </div>
                            <ul>
                                {preferAnotherList.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--no"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="Sbc-compare-key">
                        <p>Seabourn's strength is quiet luxury and quality interaction, rather than a highly programmed solo-cruising experience.</p>
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
                                        { icon: <Star size={16} />, label: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse" },
                                        { icon: <Award size={16} />, label: "Featured in major travel publications globally" },
                                        { icon: <Ship size={16} />, label: "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel" },
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

            {/* ── FAQ ────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Slo-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything solo travelers need to know before booking a Seabourn cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

   

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Slo-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Good for Solo Travelers?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Yes — Seabourn can be an excellent choice for solo luxury travelers, provided you understand the pricing structure. The ships offer a comfortable balance between privacy and social interaction. You can dine alone, join other guests, explore independently or participate in excursions without feeling that the entire vacation revolves around being part of a group.
                        </p>
                        <p className="Sbc-p">
                            The main issue is the single supplement, which can significantly affect the overall cost. For travelers willing to pay a premium for personalized service, luxury accommodations, intimate ships and destination-focused experiences, Seabourn can make solo travel feel remarkably comfortable.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Compare single-occupancy fares, suite categories, itineraries and promotions rather than simply choosing the lowest advertised cruise fare.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Solo Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournSoloTravelers;