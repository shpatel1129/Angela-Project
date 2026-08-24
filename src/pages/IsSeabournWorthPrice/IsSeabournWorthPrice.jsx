import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Wine,
    Gem,
    Heart,
    Snowflake,
    Home,
    User,
    Award,
    AlertCircle,
    Compass,
    Coffee,
    Utensils,
    ChefHat,
    Ship,
    Star,
    MapPin,
    Users
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "./IsSeabournWorthIt.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const faqData = [
    { q: "Is Seabourn worth the price?", a: "For travelers who value personalized service, all-suite accommodations, fine dining, complimentary beverages and smaller ships, Seabourn can be worth the premium." },
    { q: "Why is Seabourn so expensive?", a: "Seabourn's pricing reflects its small-ship, all-suite luxury model, personalized service and highly inclusive onboard experience." },
    { q: "Is Seabourn really all-inclusive?", a: "Seabourn includes many major onboard expenses, including dining, selected beverages, Wi-Fi and onboard gratuities. Certain excursions and personal expenses are additional." },
    { q: "Are drinks included on Seabourn?", a: "Yes. Seabourn includes complimentary fine wines with lunch and dinner as well as complimentary spirits and open bars onboard." },
    { q: "Is Wi-Fi included on Seabourn?", a: "Yes. Seabourn currently includes unlimited Wi-Fi with bookings, with Surf and Stream packages available depending on the service level." },
    { q: "Are gratuities included on Seabourn?", a: "Onboard gratuities are not required or expected. However, gratuities for independent shore-excursion guides and drivers are handled separately." },
    { q: "Is Seabourn food good?", a: "Dining is one of Seabourn's major strengths. Its dining venues are complimentary, and nearly all operate with open seating." },
    { q: "Are Seabourn suites worth the price?", a: "For travelers who value space, private outdoor areas and personalized suite service, the all-suite accommodation model can justify the premium." },
    { q: "Is Seabourn better than a regular cruise?", a: "That depends on what you value. Seabourn prioritizes small ships, luxury, service and dining rather than mega-ship entertainment." },
    { q: "Is Seabourn worth it for couples?", a: "Yes. Couples who value privacy, fine dining, service and destination-focused travel may find Seabourn particularly appealing." },
    { q: "Is Seabourn worth it for solo travelers?", a: "It can be, although solo travelers should carefully compare single-occupancy pricing and supplements." },
    { q: "Is Seabourn good for families?", a: "It can work for multigenerational luxury travel, but families seeking extensive children's facilities and entertainment may prefer a larger cruise line." },
    { q: "Is Seabourn worth it for first-time luxury cruisers?", a: "Yes, particularly if you prefer understated luxury, excellent service, fine dining and smaller ships." },
    { q: "Are Seabourn shore excursions included?", a: "Not all shore excursions are automatically included. The inclusions vary by voyage and excursion, so check the specific sailing." },
    { q: "Is Seabourn worth it compared with Silversea?", a: "Both are luxury cruise lines, but the better value depends on your priorities around ships, suites, dining, service, destinations and expedition travel." },
    { q: "Is Seabourn worth it compared with Regent?", a: "Both offer highly inclusive luxury cruising. Compare the actual fare, included experiences, suites, excursions and itinerary before deciding." },
    { q: "Is Seabourn worth it for an expedition cruise?", a: "For travelers seeking remote destinations with luxury accommodations, Seabourn's purpose-built expedition ships and expedition teams can provide a compelling combination." },
    { q: "What is the biggest advantage of Seabourn?", a: "The combination of small ships, all-suite accommodations, personalized service, excellent dining and a highly inclusive onboard experience is arguably Seabourn's strongest overall value proposition." },
];

const seaboutSeabournWorthItSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/",
      "name": "Is Seabourn Worth It? Honest Review of Price & Value",
      "headline": "Is Seabourn Worth the Price? An Honest Look at the Value",
      "description": "Is Seabourn worth the price? Get an honest look at Seabourn's service, suites, dining, inclusions, ships, excursions and overall value before booking.",
      "keywords": [
        "Is Seabourn Worth It",
        "Is Seabourn worth the price",
        "Is Seabourn worth it",
        "Seabourn cruise review",
        "Seabourn value",
        "Seabourn cruise worth it",
        "Seabourn luxury cruise review",
        "Seabourn cruise cost",
        "Seabourn cruise prices",
        "Seabourn vs luxury cruises",
        "Seabourn inclusions",
        "Seabourn service",
        "Seabourn dining",
        "Seabourn suites",
        "Seabourn ships",
        "Seabourn gratuities",
        "Seabourn Wi-Fi",
        "Seabourn excursions",
        "Seabourn luxury cruise value"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#review"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#breadcrumb",
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
          "name": "Is Seabourn Worth It?",
          "item": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/"
        }
      ]
    },

    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#review",
      "name": "Is Seabourn Worth the Price?",
      "headline": "Is Seabourn Worth the Price? An Honest Look at the Value",
      "description": "An analysis of Seabourn's price and overall value, including service, suites, dining, beverages, Wi-Fi, gratuities, excursions, ships and luxury cruise experience.",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Seabourn"
      },
      "reviewBody": "Seabourn can be worth the premium for travelers who value personalized service, all-suite accommodations, fine dining, complimentary beverages, smaller ships, fewer crowds and a relaxed destination-focused atmosphere. The value is less compelling for travelers primarily seeking the lowest cruise fare, large entertainment venues, extensive family facilities or a highly active mega-ship experience.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "positiveNotes": {
        "@type": "ItemList",
        "name": "Seabourn Value Strengths",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "All-suite accommodations"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Small-ship atmosphere"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Highly personalized service"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Complimentary dining venues"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Fine wines with lunch and dinner"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Complimentary spirits"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Included Wi-Fi"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "No expected onboard gratuities"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Strong destination focus"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Expedition capabilities"
          }
        ]
      },
      "negativeNotes": {
        "@type": "ItemList",
        "name": "Seabourn Value Limitations",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Higher upfront fares"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Limited mega-ship entertainment"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Limited family-focused facilities"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Shore excursions can add to trip cost"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Spa and retail purchases are additional"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Solo travelers may face higher occupancy costs"
          }
        ]
      }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#value-features",
      "name": "Seabourn Value Features",
      "description": "Major components that contribute to Seabourn's overall luxury cruise value.",
      "numberOfItems": 10,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "All-Suite Accommodation",
          "description": "Seabourn operates an all-suite accommodation model, with many suites offering ocean-facing views and private verandas."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Personalized Service",
          "description": "The small-ship environment supports highly personalized service, attentive suite service and a more intimate onboard experience."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Complimentary Dining",
          "description": "Seabourn's dining venues are complimentary, with nearly all operating on an open-seating basis."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Complimentary Beverages",
          "description": "The onboard experience includes fine wines with lunch and dinner, complimentary spirits, open bars and in-suite beverages."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Included Wi-Fi",
          "description": "Seabourn currently includes unlimited Wi-Fi with bookings, with Surf and Stream service levels."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "No Expected Onboard Gratuities",
          "description": "Onboard gratuities are not required or expected, although independent excursion staff are handled separately."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Small-Ship Atmosphere",
          "description": "Seabourn's smaller ships emphasize fewer guests, intimate public areas, easier navigation and a yacht-like atmosphere."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Destination Access",
          "description": "Seabourn focuses on major destinations as well as smaller ports and more unusual destination experiences."
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Expedition Capabilities",
          "description": "Seabourn's Venture and Pursuit provide purpose-built expedition capabilities including Zodiacs, kayaks and expedition teams."
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Quiet Luxury",
          "description": "The experience emphasizes space, service, food, privacy and destination access rather than large-scale entertainment."
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#included",
      "name": "Seabourn Included Experiences",
      "description": "Core onboard experiences described as included in Seabourn's highly inclusive luxury cruise model.",
      "numberOfItems": 9,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "All-Suite Accommodation"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Personalized Service"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Complimentary Dining"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Fine Wines with Lunch and Dinner"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Premium Spirits"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Open Bars"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "In-Suite Beverages"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Unlimited Wi-Fi"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Onboard Gratuities Not Required or Expected"
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#additional-costs",
      "name": "Potential Additional Seabourn Expenses",
      "description": "Expenses that may remain outside Seabourn's core onboard inclusions.",
      "numberOfItems": 10,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Airfare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Certain Shore Excursions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Spa Treatments"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Boutique Purchases"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Casino Spending"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Independent Tours"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Certain Premium Services"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Pre- and Post-Cruise Hotels"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Travel Insurance"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Independent Excursion Staff Gratuities"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-worth-it/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Seabourn worth the price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For travelers who value personalized service, all-suite accommodations, fine dining, complimentary beverages and smaller ships, Seabourn can be worth the premium."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Seabourn so expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn's pricing reflects its small-ship, all-suite luxury model, personalized service and highly inclusive onboard experience."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn really all-inclusive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn includes many major onboard expenses, including dining, selected beverages, Wi-Fi and onboard gratuities. Certain excursions and personal expenses are additional."
          }
        },
        {
          "@type": "Question",
          "name": "Are drinks included on Seabourn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Seabourn includes complimentary fine wines with lunch and dinner as well as complimentary spirits and open bars onboard."
          }
        },
        {
          "@type": "Question",
          "name": "Is Wi-Fi included on Seabourn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Seabourn currently includes unlimited Wi-Fi with bookings, with Surf and Stream packages available depending on the service level."
          }
        },
        {
          "@type": "Question",
          "name": "Are gratuities included on Seabourn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Onboard gratuities are not required or expected. However, gratuities for independent shore-excursion guides and drivers are handled separately."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn food good?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dining is one of Seabourn's major strengths. Its dining venues are complimentary, and nearly all operate with open seating."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn suites worth the price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For travelers who value space, private outdoor areas and personalized suite service, the all-suite accommodation model can justify the premium."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn better than a regular cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "That depends on what you value. Seabourn prioritizes small ships, luxury, service and dining rather than mega-ship entertainment."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it for couples?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Couples who value privacy, fine dining, service and destination-focused travel may find Seabourn particularly appealing."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be, although solo travelers should carefully compare single-occupancy pricing and supplements."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn good for families?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can work for multigenerational luxury travel, but families seeking extensive children's facilities and entertainment may prefer a larger cruise line."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it for first-time luxury cruisers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, particularly if you prefer understated luxury, excellent service, fine dining and smaller ships."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn shore excursions included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all shore excursions are automatically included. The inclusions vary by voyage and excursion, so check the specific sailing."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it compared with Silversea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are luxury cruise lines, but the better value depends on your priorities around ships, suites, dining, service, destinations and expedition travel."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it compared with Regent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both offer highly inclusive luxury cruising. Compare the actual fare, included experiences, suites, excursions and itinerary before deciding."
          }
        },
        {
          "@type": "Question",
          "name": "Is Seabourn worth it for an expedition cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For travelers seeking remote destinations with luxury accommodations, Seabourn's purpose-built expedition ships and expedition teams can provide a compelling combination."
          }
        },
        {
          "@type": "Question",
          "name": "What is the biggest advantage of Seabourn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The combination of small ships, all-suite accommodations, personalized service, excellent dining and a highly inclusive onboard experience is arguably Seabourn's strongest overall value proposition."
          }
        }
      ]
    }
  ]
};
/* ── FAQ Accordion (reused Sbc-faq classes from the reference file) ── */
function FAQ() {
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

/* ── Star rating helper (new Isw-verdict-stars) ───────────────────── */
function Stars({ count }) {
    return (
        <span className="Isw-verdict-stars">
            {"★".repeat(count)}
            {"☆".repeat(5 - count)}
        </span>
    );
}

/* ── Data ──────────────────────────────────────────────────────── */
const quickVerdictRows = [
    { cat: "Service", stars: 5 },
    { cat: "Suites", stars: 5 },
    { cat: "Dining", stars: 5 },
    { cat: "Included beverages", stars: 5 },
    { cat: "Wi-Fi", stars: 4 },
    { cat: "Ship atmosphere", stars: 5 },
    { cat: "Destinations", stars: 5 },
    { cat: "Shore excursions", stars: 4 },
    { cat: "Entertainment", stars: 4 },
    { cat: "Family facilities", stars: 3 },
    { cat: "Overall luxury value", stars: 5 },
];

const payingForList = [
    "All-suite accommodation", "Personalized service", "Complimentary dining venues",
    "Fine wines with lunch and dinner", "Premium spirits", "Open bars", "In-suite bar",
    "Complimentary Wi-Fi", "Entertainment", "Selected experiences and events", "Gratuities onboard",
];

const serviceDetails = ["Staff remembering preferences", "Attentive suite service", "Personalized dining", "Easy access to crew", "Less waiting", "A relaxed onboard atmosphere"];

const suiteFeatures = ["Personal suite host and attendant", "In-suite bar", "Walk-in storage", "Marble bathrooms", "Entertainment", "Complimentary PressReader access"];

const verandaUses = ["Alaska cruises", "Mediterranean itineraries", "Scenic cruising", "Expedition voyages", "Long voyages", "World Cruises"];
const verandaActivities = ["Drink coffee", "Read", "Watch the scenery", "Relax after an excursion", "Enjoy room service", "Watch sunrise or sunset"];

const diningVenues = ["The Restaurant", "The Colonnade", "Solis", "Earth & Ocean", "In-suite dining", "Other ship-specific culinary experiences"];
const diningPriorities = ["Fine dining", "Fresh ingredients", "Smaller dining environments", "Flexible seating", "Regional cuisine", "Quality wine"];

const drinksIncluded = ["Fine wines at lunch and dinner", "Open bars", "Complimentary spirits", "In-suite beverages"];
const wifiAlternatives = ["Internet", "Drinks", "Specialty dining", "Gratuities"];

const notIncludedList = ["Airfare", "Certain shore excursions", "Spa treatments", "Boutique purchases", "Casino spending", "Independent tours", "Certain premium services", "Pre- and post-cruise hotels", "Travel insurance", "Ground transportation outside included arrangements", "Gratuities for independent excursion staff"];

const excursionPriorities = ["Local culture", "Food", "History", "Wildlife", "Small-group experiences", "Remote destinations"];

const expeditionFeatures = ["Ice-strengthened hulls", "24 Zodiacs", "Kayaks", "Expedition teams", "Ocean-front suites", "Expedition equipment"];
const expeditionDestinations = ["Antarctica", "the Arctic", "Greenland", "South Pacific", "Kimberley"];

const shipAdvantages = ["Fewer guests", "More intimate public areas", "Personalized service", "Easier navigation", "Access to smaller ports", "Less emphasis on crowds", "More relaxed atmosphere"];

const notOfferedList = ["Water parks", "Massive entertainment complexes", "Roller coasters", "Large children's facilities", "Hundreds of onboard activities", "Huge shopping malls"];

const bestForCards = [
    { icon: Heart, title: "Couples", items: ["Romantic dining", "Quiet evenings", "Private suite time", "Scenic cruising", "Cultural experiences", "Fine wine", "Personalized service"] },
    { icon: User, title: "Solo Travelers", items: ["Smaller ships", "Flexible dining", "Social opportunities", "Personalized service", "Luxury accommodation"], note: "The main concern is single-occupancy cost, since Seabourn's suite model is primarily designed around two-person occupancy." },
    { icon: Home, title: "Families", items: ["Luxury", "Multigenerational travel", "Cultural experiences", "Relaxation", "Smaller ships"], note: "Families seeking water parks, kids' clubs, teen entertainment and constant activities may find a larger cruise line better suited to them." },
    { icon: Gem, title: "First-Time Luxury Cruisers", items: ["Space", "Service", "Food", "Privacy", "Destination access"], note: "If your idea of luxury is a quiet suite, excellent service and a great meal, Seabourn can make an excellent first luxury cruise." },
    { icon: Award, title: "Experienced Luxury Travelers", items: ["Ship size", "Suite design", "Dining", "Included beverages", "Excursions", "Service style", "Destination selection", "Expedition capabilities"], note: "The \u201cbest\u201d luxury cruise line depends heavily on personal travel style." },
];

const optionAList = ["Standard cabin", "Several additional charges", "Large ship", "Crowded public areas"];
const optionBList = ["Suite accommodation", "Personalized service", "Complimentary beverages", "Multiple included dining venues", "Smaller ship", "More intimate atmosphere"];

const vsLines = [
    { name: "Seabourn vs. Silversea", text: "Seabourn is particularly compelling for travelers who prioritize small ships, intimate service, fine dining, a relaxed atmosphere and expedition options. Silversea can appeal to travelers with different preferences around itinerary depth, ship design and expedition offerings.", link: "/seabourn-cruises/seabourn-vs-silversea/" },
    { name: "Seabourn vs. Regent Seven Seas", text: "Both operate in the luxury cruise category, but the experience isn't identical. When comparing them, look at fare structure, included excursions, ship design, suite size, dining, service, itinerary and overall atmosphere.", link: "/seabourn-cruises/seabourn-vs-regent/" },
];

const worthPremiumList = [
    { label: "Personalized service", text: "You want staff who recognize you and your preferences." },
    { label: "Smaller ships", text: "You prefer intimate ships to mega-ships." },
    { label: "Fine dining", text: "Food and wine are important parts of your vacation." },
    { label: "Included beverages", text: "You don't want to constantly monitor drink charges." },
    { label: "All-suite accommodations", text: "You want more space than a traditional cruise cabin." },
    { label: "Destination access", text: "You value smaller ports and unusual itineraries." },
    { label: "Quiet luxury", text: "You prefer understated sophistication to flashy entertainment." },
];

const notWorthList = ["Rarely drink alcohol", "Don't care about fine dining", "Prefer large entertainment venues", "Travel primarily with young children", "Want the lowest possible cruise fare", "Spend little time in your cabin", "Prefer a highly active ship", "Don't value personalized service"];

const valueTest = [
    { q: "Will I use the included dining?", a: "If yes, that's valuable." },
    { q: "Will I use the included beverages?", a: "If yes, your savings can add up." },
    { q: "Do I value personalized service?", a: "If yes, Seabourn's premium becomes easier to justify." },
    { q: "Do I prefer small ships?", a: "If yes, you're paying for something you actually want." },
    { q: "Will I enjoy the destinations?", a: "This is perhaps the most important question. A luxury ship cannot compensate for an itinerary that doesn't interest you." },
];

const costRows = [
    { expense: "Accommodation", seabourn: "Included" },
    { expense: "Dining", seabourn: "Included across complimentary venues" },
    { expense: "Fine wine with lunch/dinner", seabourn: "Included" },
    { expense: "Premium spirits", seabourn: "Included" },
    { expense: "Wi-Fi", seabourn: "Included" },
    { expense: "Onboard gratuities", seabourn: "Not required" },
    { expense: "Shore excursions", seabourn: "Varies" },
    { expense: "Spa", seabourn: "Additional" },
    { expense: "Airfare", seabourn: "Varies" },
    { expense: "Hotels", seabourn: "Varies" },
];

const decideList = ["I value service.", "I prefer small ships.", "I want an all-suite experience.", "Dining matters to me.", "I enjoy wine and spirits.", "I prefer fewer onboard crowds.", "I enjoy cultural destinations.", "I want a relaxed atmosphere.", "I appreciate included amenities."];

const prosList = ["All-suite accommodations", "Small-ship atmosphere", "Highly personalized service", "Complimentary dining venues", "Fine wines with lunch and dinner", "Complimentary spirits", "Included Wi-Fi", "No expected onboard gratuities", "Strong destination focus", "Expedition capabilities", "Private-yacht-like atmosphere", "High-quality culinary program"];
const consList = ["Higher upfront fares", "Limited mega-ship entertainment", "Not designed primarily for families with young children", "Shore excursions can add to trip cost", "Spa and retail purchases are additional", "Solo travelers may face higher occupancy costs", "Some travelers may not use enough included amenities to justify the premium"];

const luxuryTravelerFormula = ["Small ships", "All-suite accommodations", "Personalized service", "Fine dining", "Included beverages", "Wi-Fi", "Destination access", "Relaxed atmosphere"];

const relatedReading = [
    { eyebrow: "The Complete Guide", title: "Seabourn Cruises: Ships, Suites & Destinations", link: "/seabourn-cruises/" },
    { eyebrow: "Comparison", title: "Seabourn vs. Silversea", link: "/seabourn-cruises/seabourn-vs-silversea/" },
    { eyebrow: "Comparison", title: "Seabourn vs. Regent Seven Seas", link: "/seabourn-cruises/seabourn-vs-regent/" },
    { eyebrow: "Accommodations", title: "Seabourn Suites: A Complete Guide", link: "/seabourn-cruises/seabourn-suites/" },
    { eyebrow: "Where Seabourn Sails", title: "Seabourn Destinations Guide", link: "/seabourn-cruises/seabourn-destinations/" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const IsSeabournWorthIt = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Is Seabourn Worth It? Honest Review of Price & Value</title>
                <meta name="title" content="Is Seabourn Worth the Price? Service, Dining & Value" />
                <meta
                    name="description"
                    content="Is Seabourn worth the price? Get an honest look at Seabourn's service, suites, dining, inclusions, ships, excursions and overall value before booking."
                />
                <script type="application/ld+json">{JSON.stringify(seaboutSeabournWorthItSchema )}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Is Seabourn Worth the Price? <br /> An Honest Look at the Value</h1>
                    <p>
                        Is Seabourn worth the price? For the right traveler, the answer is yes—but the value comes from the overall experience, not simply from how much is included in the fare.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Seabourn sits firmly in the luxury and ultra-luxury cruise market, where travelers are paying for more than transportation between ports. The experience centers on small ships, all-suite accommodations, personalized service, fine dining, complimentary beverages, a relaxed atmosphere and destination-focused travel.
                            </p>
                            <p>
                                Seabourn's current fleet consists of five small ships, combining ocean and expedition cruising. The cruise line describes its fleet as offering a private, yacht-like atmosphere, all ocean-front suites, complimentary premium beverages and world-class dining.
                            </p>
                            <p>
                                But that doesn't mean Seabourn is automatically the best value for everyone.
                            </p>
                            <p>
                                If your priority is the lowest cruise fare, the largest number of onboard attractions or a highly active family environment, Seabourn may not be the right choice.
                            </p>
                            <p>
                                If you value personalized service, space, excellent food, smaller ships and fewer extra charges, the premium can make much more sense.
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
                            Start Planning Your Seabourn Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK VERDICT TABLE (new Isw-verdict classes) ──────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-quick-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At a Glance</span>
                        <h2 className="Sbc-h2">Quick Verdict: Is Seabourn <br /> Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Isw-verdict-table-wrap">
                        <table className="Isw-verdict-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Seabourn Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickVerdictRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.cat}</td>
                                        <td><Stars count={row.stars} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                   
                </div>
            </section>

            {/* ── WHAT ARE YOU ACTUALLY PAYING FOR ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-paying-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Understanding the Fare</span>
                        <h2 className="Sbc-h2">What Are You Actually Paying For With Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                A Seabourn fare isn't simply paying for a cabin and access to a ship. You're
                                paying for an overall hospitality experience that includes many components that
                                can otherwise become additional expenses on other cruises. Depending on the
                                sailing and specific terms, Seabourn's included experience encompasses areas
                                such as:
                            </p>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)', marginTop: '20px' }}>
                                <h4 className="Sbc-highlights-title">Seabourn's Included Experience Can Encompass:</h4>
                                <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {payingForList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: 'var(--navy)' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                           
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Gem size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Included Experience Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BIGGEST REASON: PERSONAL SERVICE ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-service">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Defining Difference</span>
                        <h2 className="Sbc-h2">The Biggest Reason Seabourn Can Be Worth It: Personal Service</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For many travelers, service is the defining reason to choose Seabourn. Seabourn's
                            ships are deliberately small compared with mainstream cruise ships. The current
                            fleet includes ships carrying approximately 264, 458 or 600 guests, depending on
                            the vessel. That creates a fundamentally different environment. Instead of
                            thousands of passengers moving through enormous public spaces, you're
                            experiencing a much more intimate ship.
                        </p>
                    </div>

                    <div className="Isw-formula-card">
                        <div className="Isw-formula-title">The result can feel closer to:</div>
                        <div className="Isw-formula-body">
                            <span className="Isw-formula-item">Private yacht</span>
                            <span className="Isw-formula-plus">+</span>
                            <span className="Isw-formula-item">luxury hotel</span>
                            <span className="Isw-formula-plus">+</span>
                            <span className="Isw-formula-item">destination cruise</span>
                        </div>
                        <div className="Isw-formula-verdict">
                            than a conventional mega-ship.
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN SERVICE WORTH PAYING MORE FOR ──────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-service-worth">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Worth the Premium?</span>
                        <h2 className="Sbc-h2">Is Seabourn Service Really Worth Paying More For?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                If personalized service matters to you, this is one of the strongest arguments
                                for Seabourn. Seabourn emphasizes personalized service and has nearly one staff
                                member per guest across its ships. The value is particularly noticeable when you
                                appreciate details such as:
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">You'll notice the difference in:</h4>
                                <ul className="Sbc-qa-list">
                                    {serviceDetails.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "3px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="Sbc-qa-warning-box">
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>For travelers who don't care much about service, however, this premium may be harder to justify.</span>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Personalized Service Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE CTA ────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Exceptional Service</span>
                    <h3 className="Sbc-cta-title">Ready to Experience Award-Winning Service?</h3>
                    <p className="Sbc-cta-text">
                        Let's discuss Seabourn's suite hosts, crew-to-guest ratios and customized onboard arrangements so you know what to expect.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Luxury Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SEABOURN SUITES: IS THE ACCOMMODATION WORTH IT ─────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn Suites: Is the Accommodation Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Another major part of the value proposition is the accommodation. Seabourn
                            operates an all-suite model, rather than mixing standard inside, ocean-view and
                            balcony cabins with suites. Many suites also have ocean-facing views and private
                            verandas. That changes the experience considerably.
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights">
                        <h4 className="Sbc-highlights-title">Seabourn Says Its Suites Include:</h4>
                        <ul className="Sbc-highlights-list">
                            {suiteFeatures.map((item, i) => (
                                <li key={i}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── WHY ALL-SUITE ACCOMMODATION MATTERS (Option A vs B) ────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-suite-matters">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Two Vacations, Same Price</span>
                        <h2 className="Sbc-h2">Why All-Suite <br /> Accommodation Matters</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Imagine two vacations at the same price:</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">Option A</h3>
                            <ul className="Sbc-compare-list">
                                {optionAList.map((item, i) => (
                                    <li key={i}>
                                        <X size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Option B</h3>
                            <ul className="Sbc-compare-list">
                                {optionBList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>The second option can appear expensive at first but become more competitive when the total experience is considered.</p>
                        <p>This is why comparing Seabourn's headline fare against a mainstream cruise fare alone can be misleading.</p>
                    </div>
                </div>
            </section>

            {/* ── IS A VERANDA SUITE WORTH IT ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-veranda">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Private Outdoor Space</span>
                        <h2 className="Sbc-h2">Is a Seabourn Veranda <br /> Suite Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For many travelers, yes. A private veranda becomes particularly valuable on:
                        </p>
                    </div>

                    <div className="Isw-veranda-grid">
                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-image-placeholder" style={{ marginBottom: '20px' }}>
                                <Compass size={36} className="Isw-veranda-placeholder-icon" />
                                <span className="Isw-veranda-placeholder-text">Destinations &amp; Routes</span>
                            </div>
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">Especially Valuable On</h4>
                                <ul className="Isw-veranda-list">
                                    {verandaUses.map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-image-placeholder" style={{ marginBottom: '20px' }}>
                                <Coffee size={36} className="Isw-veranda-placeholder-icon" />
                                <span className="Isw-veranda-placeholder-text">Onboard Relaxation</span>
                            </div>
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">Your Private Retreat</h4>
                                <ul className="Isw-veranda-list">
                                    {verandaActivities.map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="Sbc-p" style={{ marginTop: "28px", textAlign: "center" }}>
                        On a longer voyage, the value of having private outdoor space can become even more noticeable.
                    </p>
                </div>
            </section>

            {/* ── DINING WORTH THE PRICE ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Dining: Is the Food <br /> Worth the Price?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Isw-veranda-grid">
                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-image-placeholder" style={{ marginBottom: '20px' }}>
                                <Utensils size={36} className="Isw-veranda-placeholder-icon" />
                                <span className="Isw-veranda-placeholder-text">Fine Dining Venues</span>
                            </div>
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">The Onboard Dining Lineup</h4>
                                <p className="Sbc-p" style={{marginBottom: '16px'}}>
                                    Dining is one of Seabourn's strongest value arguments. Dining venues are complimentary, with nearly all operating on an open-seating basis. Fine wines are also complimentary with lunch and dinner.
                                </p>
                                <ul className="Isw-veranda-list">
                                    {diningVenues.map((v, i) => (
                                        <li key={i}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{v}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ fontSize: '16px', marginTop: '16px', fontStyle: 'italic', color: '#5a6a85' }}>
                                    Seabourn also offers complimentary 24-hour in-suite dining.
                                </p>
                            </div>
                        </div>

                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-image-placeholder" style={{ marginBottom: '20px' }}>
                                <ChefHat size={36} className="Isw-veranda-placeholder-icon" />
                                <span className="Isw-veranda-placeholder-text">Culinary Standards</span>
                            </div>
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">Is It Better Than Mainstream?</h4>
                                <p className="Sbc-p" style={{ marginBottom: '16px'}}>
                                    The more useful question is whether it matches your expectations. If you don't care much about food quality, you may not get the same value. But it is a major reason to choose Seabourn if you prioritize:
                                </p>
                                <ul className="Isw-veranda-list">
                                    {diningPriorities.map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ fontSize: '16px', marginTop: '16px', fontStyle: 'italic', color: '#5a6a85' }}>
                                    High-quality ingredients and flexible dining options are central.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING CTA ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Culinary Journeys</span>
                    <h3 className="Sbc-cta-title">Ready to Taste Seabourn's Gourmet Dining?</h3>
                    <p className="Sbc-cta-text">
                        Let's walk through reservation policies, specialized dining venues like Solis, and custom wine pairings for your next cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Connect with a Travel Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── DRINKS ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-drinks">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Wine size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Included Beverages Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">What's Included</span>
                                <h2 className="Sbc-h2">Seabourn Drinks: What's Included?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                This is another area where the value can add up. Seabourn's current FAQ
                                describes the items below as part of its onboard experience. Seabourn also
                                states that its ships have an open-bar policy serving premium wine,
                                champagne and spirits.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Seabourn's onboard experience includes:</h4>
                                <ul className="Sbc-qa-list">
                                    {drinksIncluded.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={3} style={{ color: "var(--navy)", backgroundColor: "rgba(13, 23, 41, 0.08)", borderRadius: "50%", padding: "4px", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">For travelers who normally purchase drinks throughout a cruise, this can significantly change the total vacation cost.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WI-FI ────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-wifi">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Staying Connected</span>
                        <h2 className="Sbc-h2">Is Seabourn Wi-Fi Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn currently includes unlimited Wi-Fi with all bookings. Its current Wi-Fi
                            program offers a Surf package for general browsing, email and social media,
                            while the Stream package adds capabilities such as video streaming, internet
                            telephony and VPN/cloud services. This is important when comparing total value.
                            A traveler who would normally purchase the items below may find Seabourn's
                            bundled approach particularly attractive.
                        </p>
                    </div>
                    <div className="Sbc-atmos-words">
                        {wifiAlternatives.map((w, i) => <span key={i}>{w}</span>)}
                    </div>
                </div>
            </section>



        

            {/* ── WHAT ISN'T NECESSARILY INCLUDED ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-not-included">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <span className="Sbc-eyebrow">Set Realistic Expectations</span>
                            <h2 className="Sbc-h2">What Isn't Necessarily Included?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            This is where travelers should avoid thinking of Seabourn as literally
                            "everything included." Potential additional expenses can include:
                        </p>
                    </div>

                    <div className="Sbc-notfit-grid">
                        {notIncludedList.map((item, i) => (
                            <div className="Sbc-notfit-item-card" key={i}>
                                <div className="Sbc-notfit-x-wrapper"><X size={14} strokeWidth={2.5} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "32px" }}>
                        The exact inclusions depend on the itinerary and fare. Always check the terms of your specific sailing.
                    </p>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting Off the Ship</span>
                        <h2 className="Sbc-h2">Seabourn Shore Excursions: Are They Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                Seabourn's destination experience is an important part of its value. The cruise
                                line focuses heavily on accessing both major destinations and smaller ports and
                                hideaways. Its fleet currently visits more than 400 ports according to Seabourn.
                                For travelers who enjoy the items below, this can be a major benefit.
                            </p>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)', marginTop: '20px' }}>
                                <h4 className="Sbc-highlights-title">Travelers Who Enjoy:</h4>
                                <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {excursionPriorities.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: 'var(--navy)' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "20px" }}>
                                However, excursions are not automatically worth their price. Compare the
                                excursion's experience against independent alternatives.
                            </p>

                            <div className="Isw-formula-card" style={{ marginTop: '24px', padding: '20px 24px' }}>
                                <div className="Isw-formula-title" style={{ marginBottom: '12px' }}>Weigh the excursion by:</div>
                                <div className="Isw-formula-body" style={{ fontSize: '15px', gap: '10px' }}>
                                    <span className="Isw-formula-item" style={{ fontSize: '16px' }}>Experience</span>
                                    <span className="Isw-formula-plus">+</span>
                                    <span className="Isw-formula-item" style={{ fontSize: '16px' }}>group size</span>
                                    <span className="Isw-formula-plus">+</span>
                                    <span className="Isw-formula-item" style={{ fontSize: '16px' }}>duration</span>
                                    <span className="Isw-formula-plus">+</span>
                                    <span className="Isw-formula-item" style={{ fontSize: '16px' }}>convenience</span>
                                    <span className="Isw-formula-plus">+</span>
                                    <span className="Isw-formula-item" style={{ fontSize: '16px' }}>destination access</span>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Excursions Worth Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                {/* ── CTA 1 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">All-Inclusive Luxury</span>
                    <h3 className="Sbc-cta-title">Ready to Experience What's Included?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare suite categories, dining and beverage packages so you know exactly
                        what your Seabourn fare covers before you book.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── EXPEDITION CRUISES ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">For Adventure Travelers</span>
                        <h2 className="Sbc-h2">Are Seabourn Expedition Cruises Worth the Price?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For adventure travelers, the answer may be an even stronger yes. Seabourn's
                            Venture and Pursuit are purpose-built expedition ships, according to Seabourn.
                            For travelers who want to combine remote exploration with luxury, this
                            combination is difficult to replicate with a conventional cruise.
                        </p>
                    </div>

                    <div className="Sbc-exp-card">
                        <div className="Sbc-exp-card-header">
                            <div className="Sbc-exp-icon-wrap"><Snowflake size={24} /></div>
                            <h3 className="Sbc-h3">Purpose-Built for Exploration</h3>
                        </div>
                        <div className="Sbc-exp-features">
                            <span className="Sbc-exp-features-title">Expedition ships feature:</span>
                            <div className="Sbc-exp-tags">
                                {expeditionFeatures.map((item, idx) => (
                                    <span key={idx} className="Sbc-exp-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="Sbc-exp-features">
                            <span className="Sbc-exp-features-title">Expedition voyages include destinations such as:</span>
                            <div className="Sbc-exp-tags">
                                {expeditionDestinations.map((item, idx) => (
                                    <span key={idx} className="Sbc-exp-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SMALL-SHIP EXPERIENCE ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-small-ship">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Fleet</span>
                        <h2 className="Sbc-h2">Seabourn Ships: Does the Small-Ship Experience Matter?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                Absolutely — especially if you dislike mega-ships. Seabourn's fleet is designed
                                around smaller ships with a yacht-like atmosphere.
                            </p>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-soft)', marginTop: '20px' }}>
                                <h4 className="Sbc-highlights-title">The Advantages Include:</h4>
                                <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {shipAdvantages.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: 'var(--navy)' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "20px" }}>
                                The trade-off is that you won't find the huge selection of attractions offered by the largest cruise ships.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Small Ship Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT SEABOURN DOES NOT OFFER ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-not-offer">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <h2 className="Sbc-h2">What Seabourn Does Not Offer</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            Seabourn is not trying to compete with mega-ships on:
                        </p>
                    </div>

                    <div className="Sbc-notfit-grid">
                        {notOfferedList.map((item, i) => (
                            <div className="Sbc-notfit-item-card" key={i}>
                                <div className="Sbc-notfit-x-wrapper"><X size={14} strokeWidth={2.5} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "32px" }}>
                        If those features are important to you, paying more for Seabourn may actually reduce your perceived value.
                    </p>
                </div>
            </section>


            {/* ── WHO IS SEABOURN WORTH IT FOR ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-worth-for-who">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Is Seabourn Worth It <br /> for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Isw-veranda-grid">
                        {/* Couples Card */}
                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-image-placeholder" style={{ marginBottom: '20px' }}>
                                <Heart size={36} className="Isw-veranda-placeholder-icon" />
                                <span className="Isw-veranda-placeholder-text">Seabourn for Couples</span>
                            </div>
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">Is Seabourn Worth It for Couples?</h4>
                                <p className="Sbc-p" style={{ fontWeight: '600', color: 'var(--navy)', marginBottom: '8px' }}>
                                    Usually, yes.
                                </p>
                                <p className="Sbc-p" style={{ marginBottom: '16px' }}>
                                    Seabourn works particularly well for couples who want:
                                </p>
                                <ul className="Isw-veranda-list">
                                    {[
                                        "Romantic dining",
                                        "Quiet evenings",
                                        "Private suite time",
                                        "Scenic cruising",
                                        "Cultural experiences",
                                        "Fine wine",
                                        "Personalized service"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ fontSize: '16px', marginTop: '16px', color: '#4a5568', lineHeight: '1.5' }}>
                                    The lack of a massive onboard entertainment complex can actually be an advantage for couples who prefer spending time together.
                                </p>
                            </div>
                        </div>

                        {/* Solo Travelers Card */}
                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-image-placeholder" style={{ marginBottom: '20px' }}>
                                <User size={36} className="Isw-veranda-placeholder-icon" />
                                <span className="Isw-veranda-placeholder-text">Seabourn for Solo Travelers</span>
                            </div>
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">Is Seabourn Worth It for Solo Travelers?</h4>
                                <p className="Sbc-p" style={{ fontWeight: '600', color: 'var(--navy)', marginBottom: '8px' }}>
                                    It can be, but the economics require more consideration.
                                </p>
                                <p className="Sbc-p" style={{marginBottom: '16px' }}>
                                    Solo travelers may appreciate:
                                </p>
                                <ul className="Isw-veranda-list">
                                    {[
                                        "Smaller ships",
                                        "Flexible dining",
                                        "Social opportunities",
                                        "Personalized service",
                                        "Luxury accommodation"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ fontSize: '16px', marginTop: '16px', color: '#4a5568', lineHeight: '1.5' }}>
                                    The main concern is the single-occupancy cost, because Seabourn's suite-based model is primarily designed around two-person occupancy. For solo travelers, comparing promotions and single supplements is particularly important.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── CTA 2 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Find Your Fit</span>
                    <h3 className="Sbc-cta-title">Let's Find Out If Seabourn Fits Your Travel Style</h3>
                    <p className="Sbc-cta-text">
                        Every traveler values something different. Tell us what matters most to you, and
                        we'll help you decide if Seabourn is the right luxury cruise line.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Seabourn Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── IS SEABOURN WORTH IT FOR FAMILIES ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-families-worth">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Family Travel</span>
                        <h2 className="Sbc-h2">Is Seabourn Worth It <br /> for Families?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro" style={{ textAlign: 'center', margin: '0 auto' }}>
                            This depends heavily on the family's expectations.
                        </p>
                    </div>

                    <div className="Isw-veranda-grid">
                        {/* Families who want card */}
                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title">Seabourn works well for families who want:</h4>
                                <ul className="Isw-veranda-list">
                                    {[
                                        "Luxury",
                                        "Multigenerational travel",
                                        "Cultural experiences",
                                        "Relaxation",
                                        "Smaller ships"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Families seeking card */}
                        <div className="Isw-veranda-card">
                            <div className="Isw-veranda-content">
                                <h4 className="Isw-veranda-title" style={{ color: '#c53030', borderColor: '#feb2b2' }}>But families seeking:</h4>
                                <ul className="Isw-veranda-list">
                                    {[
                                        "Water parks",
                                        "Kids' clubs",
                                        "Teen entertainment",
                                        "Large family pools",
                                        "Constant activities"
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <X size={18} strokeWidth={2.5} style={{ color: "#ef4444", border: "1.5px solid #ef4444", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="Sbc-p" style={{ fontSize: '15px', marginTop: '20px', color: '#718096', fontStyle: 'italic' }}>
                                    may find a larger cruise line better suited to them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN VS OTHER LUXURY CRUISE LINES ───────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-vs-others">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn vs. Other <br /> Luxury Cruise Lines</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Isw-vs-grid">
                        {/* Silversea matchup */}
                        <div className="Isw-vs-card">
                            <div>
                                <span className="Isw-vs-badge">Silversea Matchup</span>
                                <h3 className="Isw-vs-title">Seabourn vs. Silversea</h3>
                                <p className="Isw-vs-text">
                                    Seabourn is particularly compelling for travelers who prioritize:
                                </p>
                                <div className="Isw-vs-pills">
                                    {[
                                        "Small ships",
                                        "Intimate service",
                                        "Fine dining",
                                        "Relaxed atmosphere",
                                        "Expedition options"
                                    ].map((pill, i) => (
                                        <span key={i} className="Isw-vs-pill">{pill}</span>
                                    ))}
                                </div>
                                <p className="Isw-vs-text">
                                    Silversea can appeal to travelers with different preferences around itinerary depth, ship design and expedition offerings.
                                </p>
                            </div>
                            <Link to="/seabourn-cruises/seabourn-vs-silversea/" className="Isw-vs-link">
                                Explore Seabourn vs. Silversea
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Regent Seven Seas matchup */}
                        <div className="Isw-vs-card">
                            <div>
                                <span className="Isw-vs-badge">Regent Matchup</span>
                                <h3 className="Isw-vs-title">Seabourn vs. Regent Seven Seas</h3>
                                <p className="Isw-vs-text">
                                    Both operate in the luxury cruise category, but the experience isn't identical. When comparing them, look at:
                                </p>
                                <div className="Isw-vs-pills">
                                    {[
                                        "Fare structure",
                                        "Included excursions",
                                        "Ship design",
                                        "Suite size",
                                        "Dining",
                                        "Service",
                                        "Itinerary",
                                        "Overall atmosphere"
                                    ].map((pill, i) => (
                                        <span key={i} className="Isw-vs-pill">{pill}</span>
                                    ))}
                                </div>
                            </div>
                            <Link to="/seabourn-cruises/seabourn-vs-regent/" className="Isw-vs-link">
                                Explore Seabourn vs. Regent Seven Seas
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHEN WORTH THE PREMIUM / WHEN NOT (Sbc-atmos yes/no) ───── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-when-worth">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Decision Time</span>
                        <h2 className="Sbc-h2">When Is Seabourn <br /> Worth the Premium?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card Sbc-atmos-card--yes">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--yes"><Check size={20} strokeWidth={2.5} /></div>
                                <div className="Sbc-atmos-card-title">Seabourn Is Particularly Compelling If You Value</div>
                            </div>
                            <ul>
                                {worthPremiumList.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--yes"></span>
                                        <span><strong>{item.label}</strong> — {item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card Sbc-atmos-card--no">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--no"><X size={20} strokeWidth={2.5} /></div>
                                <div className="Sbc-atmos-card-title">Seabourn May Not Provide Good Value If You</div>
                            </div>
                            <ul>
                                {notWorthList.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--no"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "36px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
                        In those cases, a premium mainstream cruise or another cruise style may offer better value.
                    </p>
                </div>
            </section>

            {/* ── THE REAL SEABOURN VALUE TEST (new Isw-test classes) ─────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-value-test">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">The Real Seabourn Value Test</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Before booking, ask yourself these five questions:</p>
                    </div>

                    <div className="Isw-test-grid">
                        {valueTest.map((item, i) => (
                            <div className="Isw-test-card" key={i}>
                                <span className="Isw-test-num">{i + 1}</span>
                                <h4 className="Isw-test-q">{item.q}</h4>
                                <p className="Isw-test-a">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            {/* ── CTA 3 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Is Seabourn Right for Your Next Voyage?</h3>
                    <p className="Sbc-cta-text">
                        Let's weigh the fare against everything that's included so you can decide with confidence.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get a Personalized Recommendation
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── COST VS TOTAL VACATION COST (new Isw-cost-table) ────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Compare the Whole Trip</span>
                        <h2 className="Sbc-h2">Seabourn Cost vs. <br /> Total Vacation Cost</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Don't compare Seabourn cruise fare vs. another cruise's cruise fare. Instead
                            compare total Seabourn vacation cost vs. total alternative vacation cost. For example:
                        </p>
                    </div>

                    <div className="Isw-cost-table-wrap">
                        <table className="Isw-cost-table">
                            <thead>
                                <tr>
                                    <th>Expense</th>
                                    <th>Seabourn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.expense}</td>
                                        <td>{row.seabourn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    
                </div>
            </section>

            {/* ── A SIMPLE WAY TO DECIDE ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Isw-decide">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Three-Level Test</span>
                        <h2 className="Sbc-h2">A Simple Way to Decide If Seabourn Is Worth It</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p" style={{ marginBottom: "20px", fontWeight: "600", color: "var(--navy)" }}>
                                Choose Seabourn if you say "Yes" to most of these:
                            </p>
                            <div className="Isw-decide-card">
                                <ul className="Isw-decide-list" style={{ margin: 0 }}>
                                    {decideList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "2.5px", background: "transparent", flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sbc-qa-warning-box" style={{ marginTop: "28px" }}>
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>
                                        <strong>Think twice</strong> if you say "No" to most of these. You may be
                                        paying for luxury features you don't personally value.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Decision Test Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Pros and Cons</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Pros</h3>
                            <ul>
                                {prosList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Cons</h3>
                            <ul>
                                {consList.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WORTH IT FOR A LUXURY TRAVELER / ALL-INCLUSIVE? ─────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-luxury-traveler">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Putting It All Together</span>
                        <h2 className="Sbc-h2">Is Seabourn Worth the Price for a Luxury Traveler?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p" style={{ fontSize: '16.5px' }}>
                                Yes — if you use what you're paying for. The strongest value comes from combining:
                            </p>

                            <div className="Isw-formula-card" style={{ margin: '20px 0', padding: '24px 30px' }}>
                                <div className="Isw-formula-title" style={{ marginBottom: '14px', textAlign: 'left' }}>The Luxury Value Formula</div>
                                <div className="Isw-formula-body" style={{ justifyContent: 'flex-start', gap: '12px 16px' }}>
                                    {luxuryTravelerFormula.map((item, i) => (
                                        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                                            <span className="Isw-formula-item" style={{ fontSize: '16px' }}>{item}</span>
                                            {i < luxuryTravelerFormula.length - 1 && <span className="Isw-formula-plus">+</span>}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "20px" }}>
                                The value becomes less compelling when travelers compare Seabourn solely on the starting fare.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Gem size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Luxury Value Image Placeholder</span>
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


            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Isw-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Value</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before deciding whether Seabourn is worth the price.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

   

                        {/* ── FINAL VERDICT ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Isw-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict: Is Seabourn Worth It?</span>
                        <h2 className="Sbc-h2">Yes, for the Right Traveler</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn is worth the price when you want quiet luxury rather than quantity.
                            You're not paying for the biggest ship, the most attractions or the lowest fare.
                            You're paying for a more refined travel experience built around personalized
                            service, spacious suites, excellent food, complimentary beverages, smaller
                            ships, fewer crowds, destination-focused itineraries and a relaxed onboard
                            atmosphere.
                        </p>
                        <p className="Sbc-p">
                            Seabourn's current fleet and onboard offering support that positioning: its five
                            small ships provide a yacht-like atmosphere, all ocean-front suites and
                            complimentary premium beverages, while Seabourn's dining venues are complimentary
                            and its Wi-Fi is included.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>The biggest question isn't "Is Seabourn expensive?"</strong> It is:
                                "Are Seabourn's included experiences and style of travel the things I
                                actually value?" If the answer is yes, the premium can be justified. If you
                                care more about entertainment, family facilities or the lowest possible
                                cruise fare, there are likely better-value alternatives.
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

export default IsSeabournWorthIt;