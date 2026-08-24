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
    Globe2,
    Home,
    Users,
    Award,
    Star,
    MapPin,
    Clock,
    Wallet,
    Luggage,
    PlaneTakeoff,
    Building2,
    Shirt,
    ListChecks,
    CalendarClock,
    HeartPulse,
    Coffee,
    Moon,
    Sunrise,
    Sunset,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "./SeabournWorldCruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournWorldCruisesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/world-cruises/",
      "name": "Seabourn World Cruises: Routes, Suites & Planning Guide",
      "headline": "Seabourn World Cruises and Grand Voyages: Complete Planning Guide",
      "description": "Explore Seabourn World Cruises and Grand Voyages, including long itineraries, cruise segments, suites, benefits, destinations, planning tips and booking timelines.",
      "keywords": [
        "Seabourn World Cruises",
        "Seabourn World Cruise",
        "Seabourn World Cruises",
        "Seabourn Grand Voyages",
        "Seabourn world cruise itineraries",
        "Seabourn world cruise segments",
        "Seabourn world cruise cost",
        "Seabourn world cruise suites",
        "Seabourn long cruises",
        "Seabourn extended voyages",
        "Seabourn world cruise destinations",
        "Seabourn world cruise benefits",
        "Seabourn world cruise booking",
        "Seabourn world cruise planning",
        "Seabourn world cruise review",
        "Seabourn world cruise 2027",
        "Seabourn world cruise 2028",
        "luxury world cruise",
        "luxury world voyage"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#world-cruise"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#breadcrumb",
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
          "name": "Seabourn World Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/world-cruises/"
        }
      ]
    },

    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#world-cruise",
      "name": "Seabourn World Cruises and Grand Voyages",
      "description": "Extended Seabourn luxury voyages connecting multiple regions, countries and destinations, with opportunities for slow travel, extended exploration and a familiar shipboard experience.",
      "touristType": [
        "Luxury travelers",
        "Experienced cruisers",
        "Slow travelers",
        "Long-voyage travelers",
        "Couples",
        "Solo travelers",
        "Retirees"
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Cruise Style",
          "value": "Extended luxury voyage"
        },
        {
          "@type": "PropertyValue",
          "name": "Duration",
          "value": "Significantly longer than a typical cruise"
        },
        {
          "@type": "PropertyValue",
          "name": "Destinations",
          "value": "Multiple regions and countries"
        },
        {
          "@type": "PropertyValue",
          "name": "Accommodation",
          "value": "Seabourn suites"
        },
        {
          "@type": "PropertyValue",
          "name": "Dining",
          "value": "Multiple onboard dining options"
        },
        {
          "@type": "PropertyValue",
          "name": "Best For",
          "value": "Slow travelers and experienced cruisers"
        },
        {
          "@type": "PropertyValue",
          "name": "Booking",
          "value": "Best planned well in advance"
        },
        {
          "@type": "PropertyValue",
          "name": "Segments",
          "value": "Selected voyages may offer shorter portions"
        },
        {
          "@type": "PropertyValue",
          "name": "Pace",
          "value": "Designed for extended exploration"
        },
        {
          "@type": "PropertyValue",
          "name": "Atmosphere",
          "value": "Intimate, relaxed and destination-focused"
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#features",
      "name": "Seabourn World Cruise Benefits",
      "description": "Key benefits and characteristics of Seabourn World Cruises and extended voyages.",
      "numberOfItems": 8,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Unpack Once",
          "description": "Travelers can keep their suite as a home throughout the voyage instead of repeatedly changing hotels and packing and unpacking."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Multiple Regions",
          "description": "A single long voyage can connect destinations across multiple regions, countries and potentially continents."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Familiar Ship Environment",
          "description": "Long voyages allow guests to become familiar with restaurants, lounges, preferred seating, crew members and daily routines."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Slow Travel",
          "description": "Extended voyages provide more time to slow down, enjoy sea days and explore destinations without treating every port as a checklist."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Meaningful Connections",
          "description": "Repeated interactions during long voyages can provide more opportunities to develop friendships with fellow guests and crew."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Cruise Segments",
          "description": "Selected long voyages may offer shorter segments for travelers who cannot commit to the full World Cruise."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Suite Living",
          "description": "On an extended voyage, suite size, storage, closet space, bathroom configuration, balcony, location and noise become especially important."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Reduced Travel Logistics",
          "description": "Long voyages can reduce the number of flights, hotel changes and repeated transportation arrangements required to visit multiple regions."
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#destinations",
      "name": "Seabourn World Cruise Destinations",
      "description": "Regions that may be included in Seabourn World Cruise and Grand Voyage itineraries depending on the specific sailing.",
      "numberOfItems": 11,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Europe"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mediterranean"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Middle East"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Africa"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Asia"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Southeast Asia"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Australia"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "South Pacific"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "North America"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "South America"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Multiple Continents",
          "description": "Depending on the itinerary, a World Cruise may connect multiple continents."
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Seabourn World Cruise is an extended luxury voyage that connects multiple regions and destinations during one continuous journey."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The duration varies by sailing. World Cruises are significantly longer than conventional cruises, while Grand Voyages and segments can provide shorter alternatives."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Seabourn Grand Voyage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Grand Voyage is an extended itinerary that can combine multiple destinations or regions into one longer cruise experience. Exact duration and structure vary by sailing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book only part of a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selected long voyages may offer individual segments. Availability and segment lengths depend on the specific itinerary."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn World Cruises worth the money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be worthwhile for travelers who value slow travel, luxury accommodations, personalized service and the convenience of visiting multiple regions without repeatedly changing hotels."
          }
        },
        {
          "@type": "Question",
          "name": "How far in advance should I book a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Planning well in advance is advisable, especially if you want a specific suite or itinerary. Many travelers begin researching 18–24 months or more before departure."
          }
        },
        {
          "@type": "Question",
          "name": "Which Seabourn suite is best for a World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best suite depends on your budget and priorities. For a long voyage, consider storage, space, location, bathroom configuration and whether a private balcony is important."
          }
        },
        {
          "@type": "Question",
          "name": "Is a balcony worth it on a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many travelers find a balcony valuable during a long voyage because it provides private outdoor space for relaxing and enjoying scenic cruising."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn World Cruises good for solo travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be. The extended duration creates repeated opportunities to meet fellow travelers, although solo travelers should carefully consider the cost of single occupancy."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn World Cruises good for couples?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Couples can enjoy the slower pace, multiple destinations, dining and the ability to establish a comfortable routine onboard."
          }
        },
        {
          "@type": "Question",
          "name": "Are Seabourn World Cruises good for first-time cruisers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can be, but travelers uncertain about cruising may want to try a shorter Seabourn voyage first to make sure they enjoy sea days and life onboard."
          }
        },
        {
          "@type": "Question",
          "name": "What destinations are included on Seabourn World Cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Routes vary by year. Depending on the sailing, a World Cruise may connect destinations across Europe, Africa, Asia, Australia, the South Pacific and the Americas."
          }
        },
        {
          "@type": "Question",
          "name": "Do Seabourn World Cruises have many sea days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extended voyages generally include sea days. Travelers should make sure they enjoy relaxing and participating in onboard activities between destinations."
          }
        },
        {
          "@type": "Question",
          "name": "Should I arrive early for a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arriving at the embarkation city before departure can provide a useful buffer against flight delays and other transportation problems."
          }
        },
        {
          "@type": "Question",
          "name": "What should I pack for a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Focus on versatile clothing, comfortable shoes, layers, evening attire, workout clothing, medications and travel essentials. Laundry planning is also important for an extended voyage."
          }
        },
        {
          "@type": "Question",
          "name": "Can I take a Seabourn World Cruise in segments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selected voyages may be available as segments. This can be useful for travelers who want a portion of the itinerary without committing to the entire journey."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Seabourn World Cruise better than several shorter cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your travel style. A World Cruise offers continuity and slow travel, while separate cruises provide more flexibility and allow you to choose different ships and itineraries."
          }
        },
        {
          "@type": "Question",
          "name": "What is the biggest advantage of a Seabourn World Cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ability to make the ship your temporary home while visiting numerous destinations without repeatedly packing, unpacking and changing hotels is one of the biggest advantages."
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
        { q: "What is a Seabourn World Cruise?", a: "A Seabourn World Cruise is an extended luxury voyage that connects multiple regions and destinations during one continuous journey." },
        { q: "How long is a Seabourn World Cruise?", a: "The duration varies by sailing. World Cruises are significantly longer than conventional cruises, while Grand Voyages and segments can provide shorter alternatives." },
        { q: "What is a Seabourn Grand Voyage?", a: "A Grand Voyage is an extended itinerary that can combine multiple destinations or regions into one longer cruise experience. Exact duration and structure vary by sailing." },
        { q: "Can I book only part of a Seabourn World Cruise?", a: "Selected long voyages may offer individual segments. Availability and segment lengths depend on the specific itinerary." },
        { q: "Are Seabourn World Cruises worth the money?", a: "They can be worthwhile for travelers who value slow travel, luxury accommodations, personalized service and the convenience of visiting multiple regions without repeatedly changing hotels." },
        { q: "How far in advance should I book a Seabourn World Cruise?", a: "Planning well in advance is advisable, especially if you want a specific suite or itinerary. Many travelers begin researching 18–24 months or more before departure." },
        { q: "Which Seabourn suite is best for a World Cruise?", a: "The best suite depends on your budget and priorities. For a long voyage, consider storage, space, location, bathroom configuration and whether a private balcony is important." },
        { q: "Is a balcony worth it on a Seabourn World Cruise?", a: "Many travelers find a balcony valuable during a long voyage because it provides private outdoor space for relaxing and enjoying scenic cruising." },
        { q: "Are Seabourn World Cruises good for solo travelers?", a: "They can be. The extended duration creates repeated opportunities to meet fellow travelers, although solo travelers should carefully consider the cost of single occupancy." },
        { q: "Are Seabourn World Cruises good for couples?", a: "Yes. Couples can enjoy the slower pace, multiple destinations, dining and the ability to establish a comfortable routine onboard." },
        { q: "Are Seabourn World Cruises good for first-time cruisers?", a: "They can be, but travelers uncertain about cruising may want to try a shorter Seabourn voyage first to make sure they enjoy sea days and life onboard." },
        { q: "What destinations are included on Seabourn World Cruises?", a: "Routes vary by year. Depending on the sailing, a World Cruise may connect destinations across Europe, Africa, Asia, Australia, the South Pacific and the Americas." },
        { q: "Do Seabourn World Cruises have many sea days?", a: "Extended voyages generally include sea days. Travelers should make sure they enjoy relaxing and participating in onboard activities between destinations." },
        { q: "Should I arrive early for a Seabourn World Cruise?", a: "Arriving at the embarkation city before departure can provide a useful buffer against flight delays and other transportation problems." },
        { q: "What should I pack for a Seabourn World Cruise?", a: "Focus on versatile clothing, comfortable shoes, layers, evening attire, workout clothing, medications and travel essentials. Laundry planning is also important for an extended voyage." },
        { q: "Can I take a Seabourn World Cruise in segments?", a: "Selected voyages may be available as segments. This can be useful for travelers who want a portion of the itinerary without committing to the entire journey." },
        { q: "Is a Seabourn World Cruise better than several shorter cruises?", a: "It depends on your travel style. A World Cruise offers continuity and slow travel, while separate cruises provide more flexibility and allow you to choose different ships and itineraries." },
        { q: "What is the biggest advantage of a Seabourn World Cruise?", a: "The ability to make the ship your temporary home while visiting numerous destinations without repeatedly packing, unpacking and changing hotels is one of the biggest advantages." },
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
const glanceRows = [
    ["Cruise style", "Extended luxury voyage"],
    ["Duration", "Significantly longer than a typical cruise"],
    ["Destinations", "Multiple regions and countries"],
    ["Accommodation", "Seabourn suites"],
    ["Dining", "Multiple onboard dining options"],
    ["Best for", "Slow travelers and experienced cruisers"],
    ["Booking", "Best planned well in advance"],
    ["Segments", "Selected voyages may offer shorter portions"],
    ["Pace", "Designed for extended exploration"],
    ["Atmosphere", "Intimate, relaxed and destination-focused"],
];

const vsGrandVoyageRows = [
    ["Typically an exceptionally long journey", "Extended multi-region voyage"],
    ["Broad geographic scope", "Can focus on specific regions"],
    ["Ideal for committed long-term travelers", "Useful for travelers seeking a shorter commitment"],
    ["May cross multiple continents", "May combine several destinations or regions"],
    ["Significant planning required", "Easier to fit into a shorter travel calendar"],
];

const whyTakeList = [
    "Wake up in a different destination",
    "Return to the same suite",
    "Develop relationships with crew",
    "Meet fellow long-voyage travelers",
    "Spend more time exploring",
    "Enjoy extended sea days",
    "Travel at a slower pace",
];

const benefitCards = [
    { icon: Luggage, title: "1. Unpack Once", text: "One of the biggest advantages is simplicity. Instead of changing hotels every few days, your suite remains your home throughout the voyage." },
    { icon: Globe2, title: "2. See Multiple Regions", text: "A single long voyage can connect destinations that would otherwise require multiple flights and hotel stays." },
    { icon: Ship, title: "3. Develop a Relationship With the Ship", text: "On a long voyage, the ship becomes familiar. You learn your favorite restaurants, lounges, preferred seating, crew members, and daily routines, making the experience feel increasingly personalized." },
    { icon: Clock, title: "4. More Time to Slow Down", text: "A long voyage gives you permission to slow down. You don't need to treat every port as a checklist. You can choose a quiet day onboard occasionally without feeling that you've missed the entire trip." },
    { icon: Users, title: "5. More Opportunities to Build Friendships", text: "Long voyages naturally encourage repeated interaction. You may meet someone during the first weeks of the voyage and encounter them again many times. This can create stronger relationships than a short cruise." },
];

const destinationRegions = ["Europe", "Mediterranean", "Middle East", "Africa", "Asia", "Southeast Asia", "Australia", "South Pacific", "North America", "South America"];

const chooseItineraryCards = [
    { icon: Heart, title: "Which destinations matter most to me?", text: "If you've always wanted to explore Asia, prioritize a voyage with significant time in that region." },
    { icon: Waves, title: "How many sea days do I enjoy?", text: "Long voyages can include substantial periods at sea." },
    { icon: Compass, title: "Do I prefer depth or breadth?", text: "A voyage visiting fewer regions more slowly may be more enjoyable than one with constant port changes." },
    { icon: Anchor, title: "Are there overnight stays?", text: "Overnights can allow significantly more time in important destinations." },
    { icon: Sun, title: "Does the timing work?", text: "Consider weather and seasonal conditions across the entire itinerary." },
];

const segmentTravelers = ["Have limited vacation time", "Want to experience one region", "Are testing long-voyage cruising", "Cannot commit to the full journey"];

const fullVoyageList = ["You enjoy slow travel", "You have substantial time available", "You want maximum geographic coverage", "You enjoy life onboard", "You don't want repeated travel logistics"];
const segmentList = ["You have limited vacation time", "You prefer a particular region", "You want to test long-voyage cruising", "You want to combine the cruise with a land vacation"];

const longerVoyageBenefits = ["More relaxed travel", "More time for cultural exploration", "Fewer flights", "Fewer hotel changes", "More time to use onboard facilities", "Greater familiarity with the ship", "More opportunities for meaningful connections"];

const suiteConsiderations = ["Suite size", "Storage", "Closet space", "Bathroom configuration", "Balcony", "Location", "Noise", "Access to elevators and public areas"];
const balconyList = ["Read", "Have morning coffee", "Watch scenic cruising", "Relax privately", "Enjoy sunsets", "Take a break from public spaces"];

const suiteLocationCards = [
    { icon: Building2, title: "Midship", text: "Often appealing to travelers who prioritize a central location and potentially smoother motion." },
    { icon: Sun, title: "Higher decks", text: "Can provide excellent views and convenient access to certain public areas." },
    { icon: Anchor, title: "Lower decks", text: "May appeal to travelers who prefer easier access to certain areas and potentially less movement." },
    { icon: Users, title: "Near elevators", text: "Convenient, but some travelers prefer to avoid areas with higher foot traffic." },
];

const diningStyles = ["Fine dining", "Casual meals", "Specialty dining experiences", "Outdoor dining", "Room service"];
const soloDiningList = ["Meet different people throughout the voyage", "Develop recurring dining relationships", "Join shared meals", "Choose private dining when preferred"];

const seaDaysList = ["Reading", "Exercising", "Visiting the spa", "Attending lectures", "Enjoying the pool", "Dining", "Relaxing in your suite", "Meeting fellow guests", "Watching the ocean"];

const firstTimeList = ["Sea days", "Shipboard routines", "Extended time onboard", "Cruise excursions", "Living in a suite for several weeks"];
const retireeList = ["Extended travel", "Reduced packing", "Multiple destinations", "Comfortable accommodations", "Leisurely pace", "Social opportunities"];

const coupleSchedule = [
    { icon: Sunrise, time: "Morning", text: "Breakfast and scenic cruising" },
    { icon: Sun, time: "Afternoon", text: "Shore excursion" },
    { icon: Sunset, time: "Evening", text: "Dinner and entertainment" },
];

const costFactors = ["Voyage length", "Suite category", "Departure date", "Itinerary", "Availability", "Included benefits", "Promotions"];
const evaluateValueList = ["Cost per night", "Suite category", "Dining", "Beverages", "Wi-Fi", "Gratuities", "Excursions", "Transfers", "Flights", "Pre- and post-cruise hotels"];
const bookEarlyList = ["Suite category", "Suite location", "Departure date", "Segment", "Pre- and post-cruise arrangements"];

const timelinePhases = [
    { phase: "18–24+ Months Before Departure", title: "Begin researching:", items: ["Routes", "Ships", "Suite categories", "Approximate budget", "Travel dates"] },
    { phase: "12–18 Months Before Departure", title: "Compare:", items: ["Specific itineraries", "Suite availability", "Promotions", "Segments", "Flights"] },
    { phase: "6–12 Months Before Departure", title: "Finalize:", items: ["Shore excursions", "Hotels", "Transfers", "Travel insurance", "Documentation"] },
    { phase: "1–3 Months Before Departure", title: "Review:", items: ["Packing", "Flights", "Transfers", "Medical and travel requirements", "Final documents"] },
];

const arriveEarlyList = ["Flight delays", "Cancellations", "Lost luggage", "Jet lag", "Transportation problems"];

const packingList = ["Versatile clothing", "Layering pieces", "Comfortable walking shoes", "Formal or dressier evening clothing", "Workout clothing", "Swimwear", "Sun protection", "Travel adapters", "Medications", "Essential toiletries", "Small laundry supplies"];
const laundryList = ["Focus on neutral basics that mix & match", "Include interchangeable layers for weather variety", "Pack a few elegant pieces for dressy evenings", "Utilize Seabourn's complimentary self-service launderettes", "Consider professional laundry & pressing packages"];

const wellnessPlanList = ["Prescription medications", "Travel insurance", "Medical documentation", "Mobility needs", "Fitness routines", "Sleep routines"];

const prosList = ["Extensive global travel", "Unpack once", "Slow-travel experience", "Multiple destinations", "Familiar ship environment", "Strong opportunities to build friendships", "Luxury accommodations", "Less frequent flights and hotel changes", "More time to enjoy the ship", "Excellent option for experienced cruisers"];
const consList = ["Significant overall cost", "Long time away from home", "Single supplements can be substantial", "Requires careful planning", "Many sea days", "Less flexibility once the voyage begins", "Suite availability can become limited", "Requires thoughtful packing and logistics"];

const worldCruiseFitList = ["Have substantial time available", "Enjoy slow travel", "Prefer luxury", "Enjoy sea days", "Want to visit multiple regions", "Don't want repeated hotel changes", "Like becoming familiar with a ship", "Enjoy meeting fellow travelers", "Have already experienced shorter cruises"];
const grandVoyageFitList = ["Cannot take an extended vacation", "Want to explore one particular region", "Prefer shorter commitments", "Want to test long-voyage cruising", "Want to combine cruising with a land vacation"];

const vsMultipleCruisesRows = [
    ["One continuous journey", "Several separate vacations"],
    ["Unpack once", "Repeated packing"],
    ["More relaxed", "More frequent transitions"],
    ["Deeper relationships", "New guests each voyage"],
    ["Extended ship familiarity", "Multiple ships possible"],
    ["Less flight logistics", "More transportation"],
    ["Long commitment", "More flexibility"],
];

const bookingTips = [
    { title: "1. Start with the itinerary", text: "The route matters more than the voyage title." },
    { title: "2. Choose your suite early", text: "Long voyages can make suite availability particularly important." },
    { title: "3. Compare segments", text: "A segment may provide the best balance between time and cost." },
    { title: "4. Calculate the total trip cost", text: "Include flights, hotels, excursions and transfers." },
    { title: "5. Consider the sea days", text: "Make sure you genuinely enjoy time at sea." },
    { title: "6. Research the climate across the entire route", text: "A world voyage can cross several climate zones." },
    { title: "7. Plan medication and personal essentials", text: "Don't assume every item will be easy to replace in every destination." },
    { title: "8. Build flexibility into your schedule", text: "Avoid scheduling an important event immediately after disembarkation." },
    { title: "9. Consider a pre-cruise hotel stay", text: "This reduces the stress of same-day international travel." },
    { title: "10. Work with a luxury travel advisor", text: "An experienced advisor can help coordinate the cruise, suite, promotions, flights, hotels, transfers and special arrangements." },
];

const worthItFormula = ["One suite", "One ship", "Multiple regions", "Extended time", "Luxury service", "Fewer travel transitions"];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournWorldCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn World Cruises: Routes, Suites & Planning Guide</title>
                <meta name="title" content="Seabourn World Cruises & Grand Voyages: Complete Guide" />
                <meta
                    name="description"
                    content="Explore Seabourn World Cruises and Grand Voyages, including long itineraries, cruise segments, suites, benefits, destinations, planning tips and booking timelines."
                />
                <script type="application/ld+json">{JSON.stringify(seabournWorldCruisesSchema )}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn World Cruises <br /> and Grand Voyages</h1>
                    <p>
                        A Seabourn World Cruise offers the opportunity to travel across multiple regions of the world during one extended luxury voyage rather than experiencing each destination as a separate vacation.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                For travelers who enjoy slow travel, extended exploration and the comfort of returning to the same ship each evening, a Seabourn World Cruise or Grand Voyage can be an appealing alternative to a series of shorter cruises.
                            </p>
                            <p>
                                These longer journeys can connect multiple continents, countries and cultures, with time for both well-known destinations and less frequently visited ports.
                            </p>
                            <p>
                                This guide explains how Seabourn World Cruises work, what makes a Grand Voyage different, how cruise segments can be booked, which suites to consider, the benefits and challenges of a long voyage, and how far in advance you should begin planning.
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
                            Start Planning Your World Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE TABLE (new Wcg-table) ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn World Cruises at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-table-scroll">
                        <table className="Wcg-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn World Cruises &amp; Grand Voyages</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row[0]}</td>
                                        <td>{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS A SEABOURN WORLD CRUISE ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Short Version</span>
                                <h2 className="Sbc-h2">What Is a Seabourn World Cruise?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                A Seabourn World Cruise is an extended voyage designed to connect a broad collection of destinations within one continuous journey.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                Rather than booking several unrelated cruises, travelers remain on the same ship for a much longer period.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                This creates a different style of travel. You can settle into your suite, become familiar with the crew and fellow guests, and develop a rhythm that is very different from a one-week cruise.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                Depending on the itinerary, a long Seabourn voyage may include destinations across several regions and potentially multiple continents.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn World Cruise Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS A GRAND VOYAGE ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-grand-voyage">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Grand Voyage Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">A Flexible Alternative</span>
                                <h2 className="Sbc-h2">What Is a Seabourn Grand Voyage?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                A Grand Voyage generally refers to a longer, carefully connected itinerary that combines multiple destinations or regions into one extended experience.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                Grand Voyages can appeal to travelers who want more than a conventional cruise itinerary but may not necessarily want to commit to an entire world cruise. The exact itinerary, duration and included benefits vary by voyage.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">When comparing Grand Voyages, look carefully at:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Total number of nights", "Countries visited", "Number of sea days", "Overnight stays", "Included experiences", "Suite availability", "Segment options"].map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", background: "transparent" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WORLD CRUISE VS GRAND VOYAGE TABLE ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-vs-grand-voyage">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making the Comparison</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise vs. <br /> Grand Voyage</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-table-scroll">
                        <table className="Wcg-table">
                            <thead>
                                <tr>
                                    <th>World Cruise</th>
                                    <th>Grand Voyage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vsGrandVoyageRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row[0]}</td>
                                        <td>{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "820px", margin: "28px auto 0" }}>
                        The terminology and exact structure can vary by Seabourn sailing, so always evaluate the individual itinerary rather than relying solely on the voyage name.
                    </p>
                </div>
            </section>

            {/* ── CTA 1 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Slow Travel, Redefined</span>
                    <h3 className="Sbc-cta-title">Start Planning Your Extended Voyage</h3>
                    <p className="Sbc-cta-text">
                        Whether it's a full World Cruise or a Grand Voyage segment, let's find the itinerary,
                        suite and departure date that fits your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak With a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHY TAKE A SEABOURN WORLD CRUISE ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-why-take">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Take a Seabourn World Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-qa-split" style={{ marginTop: "40px" }}>
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                A long voyage changes the way you experience travel. Instead of constantly packing and unpacking, you establish a home at sea. You can:
                            </p>

                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px" }}>
                                <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: "1fr" }}>
                                    {whyTakeList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion" style={{ fontWeight: "500" }}>
                                For many experienced travelers, the pace is the greatest luxury.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Waves size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Life at a Slower Pace Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BENEFITS OF A SEABOURN WORLD CRUISE ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-benefits">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Five Reasons to Consider One</span>
                        <h2 className="Sbc-h2">The Benefits of a Seabourn <br /> World Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-exp-grid">
                        {benefitCards.map((card, i) => {
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
                                    {card.tags && (
                                        <div className="Sbc-exp-features">
                                            <span className="Sbc-exp-features-title">{card.tagsTitle}</span>
                                            <div className="Sbc-exp-tags">
                                                {card.tags.map((t, j) => (
                                                    <span key={j} className="Sbc-exp-tag">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {card.footer && <div className="Sbc-exp-footer">{card.footer}</div>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where World Cruises Sail</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise Destinations</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            World and Grand Voyage itineraries vary by year. Depending on the specific voyage, routes can connect regions such as:
                        </p>
                    </div>

                    <div className="Wcg-destinations-grid">
                        {destinationRegions.map((v, i) => (
                            <div className="Wcg-destination-card" key={i}>
                                <div className="Wcg-destination-icon">
                                    <MapPin size={20} strokeWidth={2} />
                                </div>
                                <span className="Wcg-destination-name">{v}</span>
                            </div>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ maxWidth: "760px", margin: "40px auto 0", textAlign: "center" }}>
                        The exact route is determined by the individual sailing. For this reason, the itinerary itself should be the starting point when evaluating a Seabourn World Cruise.
                    </p>
                </div>
            </section>

            {/* ── HOW TO CHOOSE AN ITINERARY ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-choose-itinerary">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ask Yourself</span>
                        <h2 className="Sbc-h2">How to Choose a Seabourn World Cruise Itinerary</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Don't choose solely based on the number of countries visited. Instead, ask:
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {chooseItineraryCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title" style={{ fontSize: "20px" }}>{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA 1.5 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Expert Itinerary Planning</span>
                    <h3 className="Sbc-cta-title">Let's Design Your Journey</h3>
                    <p className="Sbc-cta-text">
                        Choosing the right route is the most critical decision for a long voyage. Speak with an advisor to customize your travel plans today.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Itinerary Planning Help
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WORLD CRUISE SEGMENTS ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-segments">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">A Flexible Way In</span>
                                <h2 className="Sbc-h2">Seabourn World Cruise Segments</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                One of the most useful features of long voyages can be the availability of segments. A traveler may not always need to commit to an entire world voyage.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                Depending on the sailing, portions of a longer itinerary may be bookable as separate segments. This can make an extended voyage accessible to travelers who:
                            </p>

                            <div className="Sbc-qa-card">
                                <ul className="Sbc-qa-list">
                                    {segmentTravelers.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", background: "transparent" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Map size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Voyage Segments Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FULL VOYAGE VS SEGMENT ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-full-vs-segment">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Decide What Fits</span>
                        <h2 className="Sbc-h2">Should You Book the Full World Cruise or a Segment?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Full World Cruise Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Choose the Full Voyage If</h3>
                            <ul className="Sbc-compare-list">
                                {fullVoyageList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Map size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Voyage Segment Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Choose a Segment If</h3>
                            <ul className="Sbc-compare-list">
                                {segmentList.map((item, i) => (
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

            {/* ── BENEFITS OF BOOKING A LONGER VOYAGE ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-longer-voyage-benefits">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond More Destinations</span>
                        <h2 className="Sbc-h2">Benefits of Booking a Longer Seabourn Voyage</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-wellness-layout" style={{ marginTop: "40px" }}>
                        <div className="Sbc-wellness-content">
                            <p className="Sbc-wellness-intro">
                                Longer voyages can provide advantages beyond simply adding more destinations. You may have:
                            </p>

                            <div className="Sbc-wellness-features-card" style={{ marginTop: "0" }}>
                                <ul className="Sbc-wellness-list">
                                    {longerVoyageBenefits.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sbc-wellness-takeaway">
                                <p className="Sbc-p">However, longer doesn't automatically mean better.</p>
                                <p className="Sbc-p" style={{ fontWeight: "600", color: "var(--navy)", marginTop: "8px" }}>
                                    The right voyage depends on your preferred travel pace.
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-wellness-image-container">
                            <div className="Sbc-wellness-image-placeholder">
                                <div className="Sbc-wellness-placeholder-icon-wrapper">
                                    <Clock size={40} className="Sbc-wellness-placeholder-icon" />
                                </div>
                                <span className="Sbc-wellness-placeholder-text">Longer Voyage Benefits Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── SUITES ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise Suites</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-suites-grid">
                        <div className="Wcg-suite-card">
                            <div className="Wcg-suite-image-placeholder">
                                <Home size={40} className="Wcg-suite-placeholder-icon" />
                                <span className="Wcg-suite-placeholder-text">Seabourn World Cruise Suites</span>
                            </div>
                            <h3 className="Wcg-suite-card-title">Suite Considerations</h3>
                            <p className="Wcg-suite-card-intro">
                                Choosing the right suite becomes particularly important on a long voyage.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                On a seven-night cruise, you might tolerate a suite that feels slightly smaller. On a much longer voyage, your accommodation becomes your home. Consider:
                            </p>
                            <ul className="Wcg-suite-list">
                                {suiteConsiderations.map((f, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Wcg-suite-card">
                            <div className="Wcg-suite-image-placeholder">
                                <Sunset size={40} className="Wcg-suite-placeholder-icon" />
                                <span className="Wcg-suite-placeholder-text">Balcony Living</span>
                            </div>
                            <h3 className="Wcg-suite-card-title">Is a Balcony Worth It on a Seabourn World Cruise?</h3>
                            <p className="Wcg-suite-card-intro">
                                For many long-voyage travelers, a balcony is especially valuable.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                A private outdoor space gives you somewhere to:
                            </p>
                            <ul className="Wcg-suite-list">
                                {balconyList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-suite-card-footer">
                                The value of a balcony increases when you are spending weeks or months onboard.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── CTA 2 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Accommodations</span>
                    <h3 className="Sbc-cta-title">Find Your Home at Sea</h3>
                    <p className="Sbc-cta-text">
                        For a voyage of weeks or months, your suite becomes your home. Let us help you compare
                        categories, locations and layouts before you book.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SUITE LOCATION ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-suite-location">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where to Book</span>
                        <h2 className="Sbc-h2">Which Suite Location Is Best?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">There is no universally best location.</p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {suiteLocationCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title" style={{ fontSize: "20px" }}>{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "28px auto 0" }}>
                        For a long voyage, comfort should generally take priority over simply choosing the most expensive suite.
                    </p>
                </div>
            </section>

                        {/* ── LIFE AT SEA ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-life-at-sea">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Sea Days</span>
                                <h2 className="Sbc-h2">Life at Sea During a World Cruise</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                A common misconception is that a World Cruise is simply a long sequence of port days. It isn't. Sea days are an important part of the experience. You may spend your time:
                            </p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-qa-list">
                                    {seaDaysList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">
                                    The ability to enjoy sea days is essential to enjoying a long voyage.
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Waves size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Life at Sea Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise Dining</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-dining-grid">
                        <div className="Wcg-dining-card">
                            <div className="Wcg-dining-card-icon">
                                <Utensils size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Wcg-dining-card-title">Seabourn World Cruise Dining</h3>
                            <p className="Wcg-dining-card-intro">
                                Dining becomes an important part of life during a long voyage. The advantage is variety.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                You can move between:
                            </p>
                            <ul className="Wcg-dining-list">
                                {diningStyles.map((v, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{v}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-dining-card-footer">
                                Long voyages also allow travelers to develop their own dining routines — some nights may be formal and social, while others can be completely relaxed.
                            </div>
                        </div>

                        <div className="Wcg-dining-card">
                            <div className="Wcg-dining-card-icon">
                                <Users size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Wcg-dining-card-title">Dining on a Long Voyage as a Solo Traveler</h3>
                            <p className="Wcg-dining-card-intro">
                                Long voyages can be particularly appealing to solo travelers.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                You may:
                            </p>
                            <ul className="Wcg-dining-list">
                                {soloDiningList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-dining-card-footer">
                                Because the voyage is long, social relationships can develop naturally rather than requiring you to meet new people every few days.
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* ── SUITABILITY ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-suitability">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Who It's For</span>
                        <h2 className="Sbc-h2">Is a Seabourn World Cruise Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-suitability-grid">
                        <div className="Wcg-suitability-card">
                            <div className="Wcg-suitability-image-placeholder">
                                <Star size={40} className="Wcg-suitability-placeholder-icon" />
                                <span className="Wcg-suitability-placeholder-text">First-Time Cruisers</span>
                            </div>
                            <h3 className="Wcg-suitability-card-title">Are Seabourn World Cruises Good for First-Time Cruisers?</h3>
                            <p className="Wcg-suitability-card-intro">
                                They can be, but a long voyage is not necessarily the best introduction to cruising for everyone.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                First-time cruisers should consider taking a shorter Seabourn voyage first if they're unsure whether they enjoy:
                            </p>
                            <ul className="Wcg-suitability-list">
                                {firstTimeList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-suitability-card-footer">
                                Experienced cruisers may find the transition much easier.
                            </div>
                        </div>

                        <div className="Wcg-suitability-card">
                            <div className="Wcg-suitability-image-placeholder">
                                <HeartPulse size={40} className="Wcg-suitability-placeholder-icon" />
                                <span className="Wcg-suitability-placeholder-text">Retirees & Flexible Travelers</span>
                            </div>
                            <h3 className="Wcg-suitability-card-title">Are Seabourn World Cruises Good for Retirees?</h3>
                            <p className="Wcg-suitability-card-intro">
                                Long voyages can be especially appealing to travelers with flexible schedules.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Retirees may appreciate:
                            </p>
                            <ul className="Wcg-suitability-list">
                                {retireeList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-suitability-card-footer">
                                However, travelers should plan carefully for healthcare, medications, insurance and personal responsibilities before committing to a long voyage.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── CTA 3 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Every Traveler Is Different</span>
                    <h3 className="Sbc-cta-title">Let's Find Your Ideal Voyage Style</h3>
                    <p className="Sbc-cta-text">
                        Whether you're a first-time cruiser, a retiree, a couple or traveling solo, we'll help
                        you choose the itinerary, suite and pace that fits.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning My Voyage
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── COUPLES ──────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-couples">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Together at Sea</span>
                        <h2 className="Sbc-h2">Seabourn World Cruises for Couples</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Couples can benefit from the slower pace. Instead of trying to maximize every day, you can create routines together. For example:
                        </p>
                    </div>

                    <div className="Wcg-day-schedule">
                        {coupleSchedule.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div className="Wcg-day-card" key={i}>
                                    <div className="Sbc-card-icon" style={{ margin: "0 auto 16px" }}>
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="Wcg-day-time">{item.time}</span>
                                    <p className="Wcg-day-text">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "700px", margin: "28px auto 0" }}>
                        On sea days, you can simply relax.
                    </p>
                </div>
            </section>

            {/* ── SOLO TRAVELERS & COST ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-solo-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Key Considerations</span>
                        <h2 className="Sbc-h2">Solo Travel & World Cruise Cost</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-dining-grid">
                        <div className="Wcg-dining-card">
                            <div className="Wcg-dining-card-icon">
                                <Users size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Wcg-dining-card-title">Seabourn World Cruises for Solo Travelers</h3>
                            <p className="Wcg-dining-card-intro">
                                Long voyages can also be excellent for solo travelers. The extended duration creates repeated opportunities to meet fellow guests.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                You may develop friendships that continue throughout the voyage rather than having to repeatedly introduce yourself to new people.
                            </p>
                            <div className="Wcg-dining-card-footer">
                                The main consideration remains the cost of single occupancy.
                            </div>
                        </div>

                        <div className="Wcg-dining-card">
                            <div className="Wcg-dining-card-icon">
                                <Wallet size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Wcg-dining-card-title">How Much Does a Seabourn World Cruise Cost?</h3>
                            <p className="Wcg-dining-card-intro">
                                There is no single fixed price for a Seabourn World Cruise. Cost depends on:
                            </p>
                            <ul className="Wcg-dining-list">
                                {costFactors.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-dining-card-footer">
                                Longer voyages naturally require a larger overall travel budget, but comparing only the total price can be misleading. Instead, consider the cost per night and what is included.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EVALUATE VALUE ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-evaluate-value">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Look Beyond the Fare</span>
                        <h2 className="Sbc-h2">How to Evaluate the Value of a World Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Compare:</p>
                    </div>

                    <div className="Wcg-value-grid">
                        {evaluateValueList.map((item, i) => (
                            <div className="Wcg-value-card" key={i}>
                                <div className="Wcg-value-icon">
                                    <Check size={18} strokeWidth={2.5} />
                                </div>
                                <span className="Wcg-value-text">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "700px", margin: "40px auto 0" }}>
                        A higher cruise fare may offer strong value if more services are included.
                    </p>
                </div>
            </section>

            {/* ── WHEN TO BOOK + TIMELINE ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-when-to-book">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Planning Ahead</span>
                        <h2 className="Sbc-h2">When Should You Book a Seabourn World Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For a long voyage, planning early is generally advisable. The most desirable suites can be limited, particularly on highly sought-after itineraries. Early planning can give you more choice of:
                        </p>
                    </div>

                    <div className="Sbc-qa-card" style={{ maxWidth: "900px", margin: "0 auto 56px" }}>
                        <ul className="Sbc-qa-list">
                            {bookEarlyList.map((item, i) => (
                                <li key={i}>
                                    <Check size={22} strokeWidth={2} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="Sbc-qa-card-footer">
                            Travelers who are flexible may also monitor later promotions, but waiting can reduce suite availability.
                        </div>
                    </div>

                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timeline</span>
                        <h3 className="Sbc-h3" style={{ fontSize: "32px" }}>Suggested World Cruise Planning Timeline</h3>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-timeline">
                        {timelinePhases.map((phase, i) => (
                            <div className="Wcg-timeline-item" key={i}>
                                <div className="Wcg-timeline-phase">{phase.phase}</div>
                                <div className="Wcg-timeline-content">
                                    <h4 className="Wcg-timeline-title">{phase.title}</h4>
                                    <ul className="Sbc-qa-list">
                                        {phase.items.map((item, j) => (
                                            <li key={j}>
                                                <Check size={22} strokeWidth={2} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "32px auto 0" }}>
                        The exact timing should be adjusted based on the sailing and your circumstances.
                    </p>
                </div>
            </section>

            {/* ── CTA 4 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Timing Matters</span>
                    <h3 className="Sbc-cta-title">Book Before Your Preferred Suite Sells Out</h3>
                    <p className="Sbc-cta-text">
                        The most desirable suites on the most sought-after itineraries go early. Let's map out
                        your planning timeline today.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Seabourn Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ARRIVE EARLY ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-arrive-early">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <PlaneTakeoff size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Arriving Early Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Embarkation Day</span>
                                <h2 className="Sbc-h2">Should You Arrive Early Before a World Cruise?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                For a major long voyage, arriving at the embarkation city before embarkation day can be a smart strategy. It provides a buffer against:
                            </p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-qa-list">
                                    {arriveEarlyList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", background: "transparent" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">
                                    It also allows you to begin the vacation rather than treating embarkation day as a race against the clock.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PACKING & LAUNDRY ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-packing-laundry">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Preparation</span>
                        <h2 className="Sbc-h2">Packing &amp; Laundry Strategies</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-dining-grid">
                        <div className="Wcg-dining-card">
                            <div className="Wcg-dining-card-icon">
                                <Luggage size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Wcg-dining-card-title">What to Pack for a Seabourn World Cruise</h3>
                            <p className="Wcg-dining-card-intro">
                                Packing for an extended voyage requires more planning than packing for a one-week cruise.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Consider:
                            </p>
                            <ul className="Wcg-dining-list">
                                {packingList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Wcg-dining-card-footer">
                                The goal is not to pack for every possible situation. Choose versatile pieces that can be combined throughout the voyage.
                            </div>
                        </div>

                        <div className="Wcg-dining-card">
                            <div className="Wcg-dining-card-icon">
                                <Shirt size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Wcg-dining-card-title">Laundry and Long-Voyage Packing</h3>
                            <p className="Wcg-dining-card-intro">
                                Laundry becomes much more important during an extended voyage. Instead of packing dozens of outfits, build a wardrobe that can be reused and combined.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Practical guidelines:
                            </p>
                            <ul className="Wcg-dining-list">
                                {laundryList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="Sbc-worth-card" style={{ width: "100%", margin: "20px 0", background: "var(--bg-soft)", border: "none", boxShadow: "none" }}>
                                <h4 className="Sbc-worth-card-title" style={{ fontSize: "15px", color: "var(--navy)" }}>A Practical Strategy</h4>
                                <div className="Sbc-worth-formula-row" style={{ gap: "10px", padding: "0 10px" }}>
                                    <span style={{ fontSize: "14px" }}>Neutral basics</span>
                                    <span className="Sbc-worth-plus" style={{ fontSize: "16px" }}>+</span>
                                    <span style={{ fontSize: "14px" }}>interchangeable layers</span>
                                    <span className="Sbc-worth-plus" style={{ fontSize: "16px" }}>+</span>
                                    <span style={{ fontSize: "14px" }}>dressier pieces</span>
                                </div>
                            </div>

                            <div className="Wcg-dining-card-footer">
                                This keeps luggage manageable while providing variety.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HEALTH & WELLNESS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-wellness">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Health &amp; Wellbeing</span>
                        <h2 className="Sbc-h2">Health and Wellness on a Long Voyage</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-wellness-layout" style={{ marginTop: "40px" }}>
                        <div className="Sbc-wellness-content">
                            <p className="Sbc-wellness-intro">
                                Before booking an extended voyage, consider your personal health and wellness needs. Discuss long-term travel plans with your healthcare professionals when appropriate.
                            </p>

                            <div className="Sbc-wellness-features-card" style={{ marginTop: "0" }}>
                                <h4 className="Sbc-wellness-features-title">Plan for:</h4>
                                <ul className="Sbc-wellness-list">
                                    {wellnessPlanList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sbc-wellness-takeaway">
                                <p className="Sbc-p">A longer cruise requires more preparation than a short vacation.</p>
                            </div>
                        </div>

                        <div className="Sbc-wellness-image-container">
                            <div className="Sbc-wellness-image-placeholder">
                                <div className="Sbc-wellness-placeholder-icon-wrapper">
                                    <HeartPulse size={40} className="Sbc-wellness-placeholder-icon" />
                                </div>
                                <span className="Sbc-wellness-placeholder-text">Health &amp; Wellness Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise Pros and Cons</h2>
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

            {/* ── WHO SHOULD TAKE / GRAND VOYAGE INSTEAD ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-who-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Take a Seabourn <br /> World Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card Sbc-atmos-card--yes">
                            <div className="Sbc-atmos-card-header">
                                <div className="Sbc-atmos-card-icon Sbc-atmos-icon--yes">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="Sbc-atmos-card-title">A World Cruise May Be Ideal If You</div>
                            </div>
                            <ul>
                                {worldCruiseFitList.map((item, i) => (
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
                                <div className="Sbc-atmos-card-title">Consider a Grand Voyage Instead If You</div>
                            </div>
                            <ul>
                                {grandVoyageFitList.map((item, i) => (
                                    <li key={i}>
                                        <span className="Sbc-atmos-item-dot Sbc-atmos-dot--no"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>A continuous World Cruise offers the ultimate global exploration, while regional Grand Voyages provide targeted depth in a shorter format.</p>
                    </div>
                </div>
            </section>

            
            {/* ── CTA 5 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ready When You Are</span>
                    <h3 className="Sbc-cta-title">Let's Compare Routes, Suites &amp; Promotions</h3>
                    <p className="Sbc-cta-text">
                        From a single segment to a full circumnavigation, we'll help you find the best value
                        for your ultra-luxury voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak With a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WORLD CRUISE VS MULTIPLE SHORT CRUISES ──────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-vs-multiple">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">One More Comparison</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise vs. Multiple Short Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Wcg-table-scroll">
                        <table className="Wcg-table">
                            <thead>
                                <tr>
                                    <th>World Cruise</th>
                                    <th>Multiple Short Cruises</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vsMultipleCruisesRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row[0]}</td>
                                        <td>{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "780px", margin: "28px auto 0" }}>
                        For travelers who enjoy slow travel, the World Cruise experience can be difficult to replicate through multiple shorter cruises.
                    </p>
                </div>
            </section>


            {/* ── TIPS FOR BOOKING ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Wcg-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Tips for Booking a <br /> Seabourn World Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid">
                        {bookingTips.map((tip, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <span className="Wcg-num">{i + 1}</span>
                                </div>
                                <h3 className="Sbc-card-title" style={{ fontSize: "20px" }}>{tip.title.replace(/^\d+\.\s*/, "")}</h3>
                                <p className="Sbc-card-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IS IT WORTH IT ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Wcg-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is a Seabourn World Cruise <br /> Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Wcg-worth-verdict-intro">
                                For travelers who genuinely enjoy long-form travel, a Seabourn World Cruise can offer exceptional convenience and depth.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                The value isn't simply in the number of countries visited. It comes from:
                            </p>

                            <div className="Wcg-worth-grid">
                                {worthItFormula.map((item, i) => (
                                    <div className="Wcg-worth-item" key={i}>
                                        <Check size={20} strokeWidth={3} style={{ color: "var(--navy)", border: "1.5px solid var(--navy)", borderRadius: "50%", padding: "3px", background: "transparent", flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="Wcg-worth-caveat">
                                <h4 className="Wcg-worth-caveat-title">Consideration</h4>
                                <p className="Wcg-worth-caveat-text">
                                    If you prefer short vacations and frequent changes, a World Cruise may feel too long.
                                </p>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "24px", fontWeight: "600", color: "var(--navy)" }}>
                                If you love the idea of making the ship your home while exploring the world, it can be one of the most rewarding ways to travel.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Value &amp; Worth Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────────── */}
            <section className="Sbc-expert-section" id="Wcg-expert-insight">
                <div className="Sbc-container">
                    <div className="Sbc-expert-heading">
                        <span className="Sbc-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Sbc-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Sbc-expert-divider"></div>
                    </div>

                    <div className="Sbc-expert-grid">
                        <div className="Sbc-expert-image-col">
                            <div className="Sbc-expert-portrait-wrap">
                                <img src={AboutImage} alt="Angela Hughes – Luxury Travel Expert" className="Sbc-expert-portrait" />
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
            <section className="Sbc-section Sbc-bg-white" id="Wcg-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn World Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn World Cruise or Grand Voyage.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Wcg-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Final Verdict</span>
                        <h2 className="Sbc-h2">A Lifestyle Experience, Not Just a Longer Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            A Seabourn World Cruise or Grand Voyage is best viewed as a lifestyle experience rather than simply a longer cruise. The greatest advantages are the ability to unpack once, travel across multiple regions, settle into a familiar ship and experience destinations at a slower pace.
                        </p>
                        <p className="Sbc-p">
                            The biggest considerations are cost, time commitment, sea days and advance planning.
                        </p>
                        <p className="Sbc-p">
                            For experienced luxury travelers with the flexibility to spend an extended period away from home, Seabourn's long voyages offer a compelling combination of global exploration, intimate shipboard living and sophisticated service. For travelers who cannot commit to the entire voyage, a segment or Grand Voyage can provide many of the same benefits while requiring a shorter time commitment.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Choose a Seabourn World Cruise if you want to unpack once, travel across
                                multiple regions, settle into a familiar ship and experience destinations at a slower, more luxurious pace — and
                                consider a Grand Voyage or segment if you want many of the same benefits within a shorter time commitment.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn World Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournWorldCruisesGuide;