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
    Heart,
    Compass,
    Utensils,
    Landmark,
    Mountain,
    Camera,
    Gem,
    Users,
    Award,
    Star,
    MapPin,
    Building2,
    Sunrise,
    Moon,
    Flower2,
    Leaf,
    CloudRain,
    Luggage,
    Calendar,
    Map,
    Dot,
    Coffee,
    Home,
    Globe
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournMediterraneanCruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournMediterraneanSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#webpage",
            "url": "https://www.tripsandships.com/seabourn-cruises/mediterranean/",
            "name": "Seabourn Mediterranean Cruises: Itineraries & Small Ports",
            "headline": "Seabourn Mediterranean Cruises: Small Ports, Luxury Itineraries & Signature Experiences",
            "description": "Explore Seabourn Mediterranean cruises, including small ports, luxury itineraries, signature events, shore excursions, dining, destinations and the best time to sail.",
            "keywords": [
                "Seabourn Mediterranean Cruises",
                "Seabourn Mediterranean cruise",
                "Seabourn Mediterranean cruises",
                "Seabourn Mediterranean itineraries",
                "Seabourn Mediterranean cruise ports",
                "Seabourn Mediterranean cruise review",
                "Seabourn Mediterranean shore excursions",
                "Seabourn Mediterranean small ports",
                "Seabourn Mediterranean luxury cruise",
                "Seabourn Mediterranean cruise ships",
                "Seabourn Mediterranean best time to cruise",
                "Seabourn Mediterranean sailing season",
                "Seabourn Mediterranean destinations",
                "Seabourn Mediterranean islands",
                "Seabourn Mediterranean cruise worth it",
                "Seabourn Mediterranean Signature Events",
                "luxury Mediterranean cruise",
                "small ship Mediterranean cruise"
            ],
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                "url": "https://www.tripsandships.com/",
                "name": "Trips & Ships Luxury Travel"
            },
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#breadcrumb"
            },
            "mainEntity": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#destination"
            },
            "inLanguage": "en-US"
        },

        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#breadcrumb",
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
                    "name": "Seabourn Mediterranean Cruises",
                    "item": "https://www.tripsandships.com/seabourn-cruises/mediterranean/"
                }
            ]
        },

        {
            "@type": "TouristDestination",
            "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#destination",
            "name": "Seabourn Mediterranean Cruises",
            "description": "Seabourn Mediterranean cruises offer an intimate luxury small-ship way to explore Mediterranean destinations, including major ports, smaller coastal destinations, historic sites, islands, beaches, cuisine and cultural experiences.",
            "url": "https://www.tripsandships.com/seabourn-cruises/mediterranean/",
            "touristType": [
                "Luxury travelers",
                "Couples",
                "Food lovers",
                "Culture enthusiasts",
                "History lovers",
                "Wine lovers",
                "First-time luxury travelers"
            ],
            "containedInPlace": {
                "@type": "Place",
                "name": "Mediterranean"
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Region",
                    "value": "Mediterranean"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Cruise Style",
                    "value": "Ultra-luxury small-ship cruising"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Main Destinations",
                    "value": "Italy, Greece, Croatia, France, Spain, Turkey and surrounding regions"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Highlights",
                    "value": "Historic ports, islands, beaches, cuisine and culture"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Port Style",
                    "value": "Major destinations plus smaller ports"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Experiences",
                    "value": "Shore excursions, cultural activities and Signature Events"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best For",
                    "value": "Couples, luxury travelers, food lovers and culture enthusiasts"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Peak Season",
                    "value": "Summer"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Shoulder Seasons",
                    "value": "Spring and fall"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Atmosphere",
                    "value": "Intimate, relaxed and sophisticated"
                }
            ]
        },

        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#features",
            "name": "Seabourn Mediterranean Cruise Highlights",
            "description": "Key destinations, experiences and features of Seabourn Mediterranean cruises.",
            "numberOfItems": 8,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Mediterranean Destinations",
                    "description": "Seabourn Mediterranean itineraries can include Italy, Greece, Croatia, France, Spain, Turkey and other Mediterranean regions."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Small Mediterranean Ports",
                    "description": "Selected itineraries can include smaller ports and coastal destinations offering quieter streets, local restaurants, historic neighborhoods, scenic harbors and less-commercialized experiences."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Western Mediterranean",
                    "description": "Western Mediterranean itinerary themes can include Spain, France, Italy and Mediterranean islands."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Eastern Mediterranean and Adriatic",
                    "description": "Eastern Mediterranean and Adriatic itineraries can include Greece, Turkey, Croatia, Montenegro, Greek islands and Adriatic islands."
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Signature Events",
                    "description": "Depending on the itinerary and destination, Signature Events can include private cultural performances, special dinners, historic venues, local entertainment and exclusive destination experiences."
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Shore Excursions",
                    "description": "Shore excursions can include cultural, culinary, scenic, active and beach experiences such as archaeological sites, cooking experiences, wine tasting, coastal drives, hiking, cycling, kayaking and swimming."
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Mediterranean Food and Wine",
                    "description": "Mediterranean voyages provide opportunities to experience regional cuisine and wine traditions from Italy, Greece, Croatia, France and Spain."
                },
                {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Seasonal Cruising",
                    "description": "The Mediterranean cruise season generally extends from spring through fall, with summer offering warm weather and long daylight while spring and fall can provide more comfortable sightseeing conditions and fewer peak-season crowds."
                }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where does Seabourn cruise in the Mediterranean?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn Mediterranean itineraries can include destinations in Italy, Greece, Croatia, France, Spain, Turkey and other Mediterranean regions, depending on the specific sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Seabourn Mediterranean cruises different?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn focuses on an intimate luxury experience with smaller ships, personalized service, sophisticated dining and itineraries that can include smaller ports."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn visit small Mediterranean ports?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Selected Seabourn itineraries include smaller ports and less-commercialized destinations, although the exact ports vary by voyage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the best Seabourn Mediterranean itineraries?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best itinerary depends on your interests. Greece and the Greek islands are ideal for island scenery and history, Italy for art and food, Croatia for the Adriatic, and France and Spain for culture and cuisine."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best time for a Seabourn Mediterranean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Late spring and early fall can provide an attractive combination of comfortable temperatures and fewer peak-season crowds. Summer is ideal for travelers prioritizing beach weather and long daylight."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is summer too hot for a Mediterranean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Summer can be very warm, particularly in southern Mediterranean destinations. Travelers focused on sightseeing may prefer spring or fall."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn offer Mediterranean Signature Events?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn offers distinctive Signature Experiences and special destination programming, with availability depending on the itinerary."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are shore excursions included on Seabourn?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Shore excursions are not universally included simply because you are sailing with Seabourn. The exact inclusions depend on the voyage and excursion selected."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Mediterranean good for couples?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The combination of intimate ships, scenic destinations, fine dining and sophisticated service makes Seabourn particularly appealing for couples."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Mediterranean good for first-time cruisers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The Mediterranean offers a wide range of destinations, making it an excellent introduction to luxury cruising."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Mediterranean good for families?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It can work for multigenerational families, particularly those interested in culture, history and food. Families seeking extensive children's entertainment may prefer a larger cruise ship."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should I pack for a Seabourn Mediterranean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pack lightweight clothing, comfortable walking shoes, sun protection, a light jacket and smart-casual evening clothing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a balcony worth it on a Mediterranean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A balcony can be valuable for enjoying scenic cruising, coastal views, morning coffee and quiet time in port."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you combine Italy and Greece on a Seabourn cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, depending on the itinerary. Some Mediterranean voyages combine multiple countries and regions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn cruise the Greek Islands?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Greek islands can feature on Seabourn Mediterranean itineraries, with the exact destinations depending on the sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn better than a large Mediterranean cruise ship?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your priorities. Seabourn is better suited to travelers seeking intimacy, personalized service and luxury, while large ships offer more entertainment and onboard facilities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Mediterranean all-inclusive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn offers an inclusive luxury experience with many onboard amenities included, although specific inclusions and optional expenses vary by sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Seabourn Mediterranean cruise worth the money?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For travelers who value smaller ships, personalized service, excellent dining and distinctive Mediterranean experiences, Seabourn can be worth the premium."
                    }
                }
            ]
        }
    ]
};

/* ── FAQ Accordion ─────────────────────────────────────────────── */
function MedFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Where does Seabourn cruise in the Mediterranean?", a: "Seabourn Mediterranean itineraries can include destinations in Italy, Greece, Croatia, France, Spain, Turkey and other Mediterranean regions, depending on the specific sailing." },
        { q: "What makes Seabourn Mediterranean cruises different?", a: "Seabourn focuses on an intimate luxury experience with smaller ships, personalized service, sophisticated dining and itineraries that can include smaller ports." },
        { q: "Does Seabourn visit small Mediterranean ports?", a: "Selected Seabourn itineraries include smaller ports and less-commercialized destinations, although the exact ports vary by voyage." },
        { q: "What are the best Seabourn Mediterranean itineraries?", a: "The best itinerary depends on your interests. Greece and the Greek islands are ideal for island scenery and history, Italy for art and food, Croatia for the Adriatic, and France and Spain for culture and cuisine." },
        { q: "What is the best time for a Seabourn Mediterranean cruise?", a: "Late spring and early fall can provide an attractive combination of comfortable temperatures and fewer peak-season crowds. Summer is ideal for travelers prioritizing beach weather and long daylight." },
        { q: "Is summer too hot for a Mediterranean cruise?", a: "Summer can be very warm, particularly in southern Mediterranean destinations. Travelers focused on sightseeing may prefer spring or fall." },
        { q: "Does Seabourn offer Mediterranean Signature Events?", a: "Seabourn offers distinctive Signature Experiences and special destination programming, with availability depending on the itinerary." },
        { q: "Are shore excursions included on Seabourn?", a: "Shore excursions are not universally included simply because you are sailing with Seabourn. The exact inclusions depend on the voyage and excursion selected." },
        { q: "Is Seabourn Mediterranean good for couples?", a: "Yes. The combination of intimate ships, scenic destinations, fine dining and sophisticated service makes Seabourn particularly appealing for couples." },
        { q: "Is Seabourn Mediterranean good for first-time cruisers?", a: "Yes. The Mediterranean offers a wide range of destinations, making it an excellent introduction to luxury cruising." },
        { q: "Is Seabourn Mediterranean good for families?", a: "It can work for multigenerational families, particularly those interested in culture, history and food. Families seeking extensive children's entertainment may prefer a larger cruise ship." },
        { q: "What should I pack for a Seabourn Mediterranean cruise?", a: "Pack lightweight clothing, comfortable walking shoes, sun protection, a light jacket and smart-casual evening clothing." },
        { q: "Is a balcony worth it on a Mediterranean cruise?", a: "A balcony can be valuable for enjoying scenic cruising, coastal views, morning coffee and quiet time in port." },
        { q: "Can you combine Italy and Greece on a Seabourn cruise?", a: "Yes, depending on the itinerary. Some Mediterranean voyages combine multiple countries and regions." },
        { q: "Does Seabourn cruise the Greek Islands?", a: "Yes, Greek islands can feature on Seabourn Mediterranean itineraries, with the exact destinations depending on the sailing." },
        { q: "Is Seabourn better than a large Mediterranean cruise ship?", a: "It depends on your priorities. Seabourn is better suited to travelers seeking intimacy, personalized service and luxury, while large ships offer more entertainment and onboard facilities." },
        { q: "Is Seabourn Mediterranean all-inclusive?", a: "Seabourn offers an inclusive luxury experience with many onboard amenities included, although specific inclusions and optional expenses vary by sailing." },
        { q: "Is a Seabourn Mediterranean cruise worth the money?", a: "For travelers who value smaller ships, personalized service, excellent dining and distinctive Mediterranean experiences, Seabourn can be worth the premium." },
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
const glanceData = [
    { label: "Region", value: "Mediterranean" },
    { label: "Cruise style", value: "Ultra-luxury small-ship cruising" },
    { label: "Main destinations", value: "Italy, Greece, Croatia, France, Spain, Turkey and surrounding regions" },
    { label: "Highlights", value: "Historic ports, islands, beaches, cuisine and culture" },
    { label: "Port style", value: "Major destinations plus smaller ports" },
    { label: "Experiences", value: "Shore excursions, cultural activities and Signature Events" },
    { label: "Best for", value: "Couples, luxury travelers, food lovers and culture enthusiasts" },
    { label: "Peak season", value: "Summer" },
    { label: "Shoulder seasons", value: "Spring and fall" },
    { label: "Atmosphere", value: "Intimate, relaxed and sophisticated" },
];

const differentCards = [
    { icon: Landmark, title: "Local culture", text: "Itineraries can be built around the everyday rhythm of each port rather than only its landmarks." },
    { icon: Building2, title: "Historic architecture", text: "Smaller destinations can offer historic neighborhoods and architecture away from the busiest crowds." },
    { icon: Utensils, title: "Food", text: "Regional cuisine can be experienced through markets, tavernas and family-run restaurants ashore." },
    { icon: Waves, title: "Beaches", text: "Smaller ports can provide access to quieter beaches and coastal stretches." },
    { icon: Mountain, title: "Scenic landscapes", text: "Coastal drives, hillside villages and island viewpoints add to the visual variety of a voyage." },
    { icon: Compass, title: "Walking", text: "A slower pace ashore can make it easier to explore on foot rather than by coach." },
    { icon: Camera, title: "Art", text: "Museums, galleries and historic sites remain part of the itinerary alongside smaller-port discovery." },
    { icon: Wine, title: "Wine", text: "Regional wine traditions can be explored through tastings and vineyard visits in several countries." },
];

const itineraryThemes = [
    {
        name: "Western Mediterranean",
        meta: "Spain • France • Italy",
        desc: "Western Mediterranean itineraries can combine ports across Spain, France and Italy, along with a selection of Mediterranean islands, depending on the specific sailing.",
        items: ["Spain", "France", "Italy", "Mediterranean islands"],
    },
    {
        name: "Eastern Mediterranean",
        meta: "Greece • Turkey • Croatia",
        desc: "Eastern Mediterranean itineraries can focus on Greece, Turkey and Croatia, often including a selection of Greek islands along the way.",
        items: ["Greece", "Turkey", "Croatia", "Greek islands"],
    },
    {
        name: "Adriatic",
        meta: "Croatia • Montenegro • Greece",
        desc: "Adriatic itineraries can combine Croatia, Montenegro and Greece, with opportunities to visit smaller Adriatic islands and coastal towns.",
        items: ["Croatia", "Montenegro", "Greece", "Adriatic islands"],
    },
    {
        name: "Italian & Greek Islands",
        meta: "Italy • Sicily • Sardinia • Greece",
        desc: "These itineraries can combine Italy, Sicily and Sardinia with Greece and the Greek islands for travelers who want an island-focused Mediterranean journey.",
        items: ["Italy", "Sicily", "Sardinia", "Greece", "Greek islands"],
    },
];

const excursionCategories = [
    { title: "Cultural Excursions", items: ["Historic cities", "Archaeological sites", "Museums", "Churches", "Ancient ruins"] },
    { title: "Culinary Excursions", items: ["Local markets", "Cooking experiences", "Wine tasting", "Regional restaurants", "Food-focused tours"] },
    { title: "Scenic Excursions", items: ["Coastal drives", "Mountain villages", "Island viewpoints", "Scenic boat trips"] },
    { title: "Active Excursions", items: ["Hiking", "Cycling", "Kayaking", "Walking tours"] },
    { title: "Beach Experiences", items: ["Private beaches", "Beach clubs", "Coastal relaxation", "Swimming"] },
];

const foodByCountry = [
    { icon: Landmark, country: "Italy", items: ["Pasta", "Seafood", "Regional wines", "Fresh produce"] },
    { icon: Sun, country: "Greece", items: ["Grilled seafood", "Olive oil", "Fresh vegetables", "Regional cheeses"] },
    { icon: Waves, country: "Croatia", items: ["Adriatic seafood", "Local wines", "Mediterranean-influenced cuisine"] },
    { icon: Wine, country: "France", items: ["Regional cuisine", "Pastries", "Cheese", "Wine"] },
    { icon: Utensils, country: "Spain", items: ["Tapas", "Seafood", "Iberian specialties", "Regional wines"] },
];

const wineRegionsData = [
    { region: "Italian wine regions", desc: "Tuscan coastals, Sicilian reds, and regional whites near historic ports." },
    { region: "French wine regions", desc: "Provence rosés and Riviera vineyards overlooking the sea." },
    { region: "Greek wines", desc: "Assyrtiko in Santorini and regional wines in the Aegean islands." },
    { region: "Croatian wines", desc: "Plavac Mali on the Dalmatian Coast and indigenous Pelješac varieties." },
    { region: "Spanish wines", desc: "Catalan Cavas, bold Riojas, and coastal whites near Barcelona." }
];

const seasons = [
    { icon: Flower2, title: "Spring", items: ["Mild temperatures", "Fewer crowds", "Spring scenery", "Comfortable sightseeing"] },
    { icon: Sun, title: "Summer", items: ["Warm weather", "Long daylight", "Beach time", "Full Mediterranean atmosphere"], note: "Major destinations can become crowded during peak summer." },
    { icon: Leaf, title: "Fall", items: ["Comfortable temperatures", "Food and wine experiences", "Fewer peak-season crowds", "Cultural sightseeing"] },
];

const dayPlan = [
    { icon: Sunrise, label: "Morning", text: "Historic village or cultural excursion" },
    { icon: Sun, label: "Afternoon", text: "Beach or scenic cruising" },
    { icon: Moon, label: "Evening", text: "Fine dining and a Seabourn Signature Event" }
];

const medWhyList = [
    "Historic cities",
    "Small coastal towns",
    "Greek islands",
    "Italian ports",
    "Croatian villages",
    "French Riviera destinations",
    "Mediterranean cuisine",
    "Archaeological sites",
    "Beaches",
    "Cultural experiences",
    "Scenic cruising"
];

const smallPortsList = [
    "Quieter streets",
    "Local restaurants",
    "Historic neighborhoods",
    "Smaller beaches",
    "Traditional villages",
    "Scenic harbors",
    "Less commercialized experiences"
];

const whySmallPortsMatterList = [
    "Walking through a historic village",
    "Visiting a local market",
    "Exploring a small archaeological site",
    "Sampling regional food",
    "Meeting local artisans"
];

const medWorthItems = [
    "Multiple destinations",
    "Small-ship access",
    "Luxury accommodation",
    "Personalized service",
    "Fine dining",
    "Curated shore experiences"
];

const packingDaytime = ["Lightweight shirts", "Shorts or lightweight trousers", "Comfortable walking shoes", "Sun hat", "Sunglasses", "Sunscreen", "Lightweight layers"];
const packingShore = ["Comfortable walking shoes", "Small day bag", "Reusable water bottle", "Light rain layer", "Camera"];
const packingEvening = ["Smart-casual outfits", "Dressier evening clothing", "Comfortable dress shoes", "Light jacket or wrap"];

const lengthCards = [
    { icon: Calendar, title: "Shorter Voyages", text: "Good for travelers who want to sample one region." },
    { icon: Ship, title: "One-to-Two-Week Voyages", text: "Better for combining several countries." },
    { icon: Compass, title: "Longer Voyages", text: "Ideal for travelers who want a deeper Mediterranean experience or want to combine multiple regional itineraries." },
];

const cruiseVsLand = {
    cruise: ["Unpack once", "Multiple destinations", "Scenic cruising", "Luxury onboard", "Ship-based dining", "Port excursions", "Easy country-to-country travel"],
    land: ["Multiple hotels", "More time in individual destinations", "More inland access", "Luxury hotels", "Local restaurants", "Flexible independent touring", "More transportation logistics"],
};

const seabournVsLarge = {
    seabourn: ["Smaller ship", "Intimate atmosphere", "Luxury-focused", "Personalized service", "Smaller-port emphasis", "Sophisticated onboard experience", "Destination-focused"],
    large: ["Much larger ship", "Resort atmosphere", "Broad entertainment focus", "Large-scale service", "Major cruise ports", "Extensive onboard facilities", "Destination + onboard entertainment"],
};

const inclusionsList = ["Suite accommodation", "Dining", "Selected beverages", "Wi-Fi", "Gratuities", "Entertainment", "Many onboard amenities"];

const onboardList = ["Elegant lounges", "Fine dining", "Spa treatments", "Comfortable suites", "Bars", "Outdoor spaces", "Entertainment"];

const diningPills = ["Fine dining", "Casual meals", "Room service", "Regional-inspired cuisine", "Premium beverages"];

const prosList = ["Intimate luxury atmosphere", "Smaller ship experience", "Access to smaller ports on selected itineraries", "Excellent Mediterranean cuisine", "Wide variety of destinations", "Strong cultural and historical opportunities", "Signature Events", "Personalized service", "Comfortable suites", "Scenic cruising", "Excellent choice for couples"];
const consList = ["Higher fares than mainstream Mediterranean cruises", "Popular ports can still be crowded", "Some excursions can be expensive", "Summer temperatures can be very high", "Itineraries vary significantly by season", "Smaller ships have fewer large-scale entertainment facilities"];

const shouldBookList = ["Prefer luxury over mass-market cruising", "Enjoy smaller ships", "Love history and culture", "Appreciate excellent food and wine", "Want access to less-commercialized destinations", "Prefer personalized service", "Enjoy scenic cruising", "Want a sophisticated couples' vacation", "Have already visited the Mediterranean and want to explore beyond major cities"];

const notFitList = ["Large waterparks", "Extensive children's facilities", "Huge entertainment venues", "Dozens of restaurants", "Large shopping areas", "The lowest possible cruise fare", "Very large ships"];

const tipsList = [
    { title: "Choose your region first", text: "Decide whether you prefer Greece, Italy, Croatia, France, Spain, Turkey or a combination." },
    { title: "Look beyond the headline ports", text: "Small ports can sometimes provide the most memorable experiences." },
    { title: "Compare the Signature Events", text: "A special experience can make one itinerary significantly more appealing than another." },
    { title: "Consider the season", text: "Spring and fall can provide more comfortable sightseeing conditions." },
    { title: "Match excursions to your interests", text: "Don't choose every excursion simply because it is available." },
    { title: "Allow time to enjoy the ship", text: "The ship itself is part of the vacation." },
    { title: "Consider a pre- or post-cruise stay", text: "Adding several nights in a major Mediterranean city can provide more time for destinations that deserve deeper exploration." },
    { title: "Work with a luxury travel advisor", text: "A knowledgeable advisor can compare itineraries, suites, promotions, shore excursions and pre- and post-cruise arrangements." },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournMediterraneanCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeItinTab, setActiveItinTab] = useState(0);
    const [activeFoodTab, setActiveFoodTab] = useState(0);

    const ActiveFoodIcon = foodByCountry[activeFoodTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Mediterranean Cruises: Itineraries & Small Ports</title>
                <meta name="title" content="Seabourn Mediterranean Cruises: Ports, Itineraries & Seasons" />
                <meta
                    name="description"
                    content="Explore Seabourn Mediterranean cruises, including small ports, luxury itineraries, signature events, shore excursions, dining, destinations and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(seabournMediterraneanSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Mediterranean Cruises</h1>
                    <p>
                        A Seabourn Mediterranean cruise offers a more intimate way to explore one of the world's most diverse cruising regions.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The Mediterranean combines ancient cities, historic ports, islands, beaches, archaeological sites, renowned cuisine and distinctive cultures. But the appeal of a Seabourn itinerary is not simply how many destinations you can visit.
                            </p>
                            <p>
                                Seabourn's smaller luxury ships can create opportunities to experience lesser-known ports and smaller coastal destinations alongside major Mediterranean highlights. Depending on the itinerary, travelers may explore destinations across Italy, Greece, Croatia, France, Spain, Turkey and other Mediterranean regions, with itineraries varying by season and year.
                            </p>
                            <p>
                                This guide explains where Seabourn sails in the Mediterranean, why smaller ports matter, what signature experiences can add to the journey, when to travel and how to choose the right itinerary.
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
                            Start Planning Your Mediterranean Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Smc-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Cruises at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Smc-glance-table-wrap">
                        <div className="Smc-glance-table">
                            <div className="Smc-glance-row Smc-glance-head">
                                <div className="Smc-glance-feature">Feature</div>
                                <div className="Smc-glance-value">Seabourn Mediterranean Cruises</div>
                            </div>
                            {glanceData.map((row, i) => (
                                <div className="Smc-glance-row" key={i}>
                                    <div className="Smc-glance-feature">{row.label}</div>
                                    <div className="Smc-glance-value">{row.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY TAKE A SEABOURN MEDITERRANEAN CRUISE (Med-why pattern) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Med-why-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Take a Seabourn Mediterranean Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Med-why-grid">
                        {/* Left column - Content */}
                        <div className="Med-why-content">
                            <p className="Sbc-p Med-why-intro-p">
                                The Mediterranean is particularly well suited to small-ship cruising. Many of the region's most memorable experiences are found away from the largest cruise terminals.
                            </p>

                            <div className="Med-why-pills-container">
                                <span className="Med-why-pills-label">A Seabourn voyage can combine:</span>
                                <div className="Med-why-pills-grid">
                                    {medWhyList.map((item, idx) => (
                                        <div className="Med-why-pill" key={idx}>
                                            <span className="Med-why-pill-dot"></span>
                                            <span className="Med-why-pill-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p Med-why-body-p">
                                The result is a trip that can feel more like a luxury exploration of the Mediterranean than a traditional port-intensive cruise.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Med-why-image-wrapper">
                            <div className="Med-why-image-placeholder">
                                <div className="Med-why-viewfinder">
                                    <div className="Med-why-bracket tl"></div>
                                    <div className="Med-why-bracket tr"></div>
                                    <div className="Med-why-bracket bl"></div>
                                    <div className="Med-why-bracket br"></div>
                                </div>
                                <div className="Med-why-placeholder-icon-wrapper">
                                    <Compass size={40} className="Med-why-placeholder-icon" />
                                </div>
                                <span className="Med-why-placeholder-text">Seabourn Mediterranean Cruise Image Placeholder</span>
                            </div>

                            {/* Layered floating overlay card */}
                            <div className="Med-why-floating-badge">
                                <div className="Med-why-badge-num">11</div>
                                <div className="Med-why-badge-text">
                                    <span>Signature</span>
                                    <span>Highlights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES SEABOURN MEDITERRANEAN DIFFERENT ──────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Small Ships, Bigger Discovery</span>
                        <h2 className="Sbc-h2">What Makes Seabourn Mediterranean Cruises Different?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of Seabourn's biggest advantages in the Mediterranean is the size and atmosphere of its ships. A smaller ship can make certain destinations feel more intimate. This makes Seabourn especially attractive to travelers who have already visited the major Mediterranean capitals and want to explore beyond the obvious stops.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {differentCards.map((card, i) => {
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

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Small-Ship Discovery</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Mediterranean Itinerary</h3>
                    <p className="Sbc-cta-text">
                        From the Adriatic to the Greek Islands, let us help you choose the region, ports and season that fit your travel style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Mediterranean Itineraries
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ITINERARIES (tabs) ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-itineraries">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where To Sail</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Itineraries</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Mediterranean itineraries vary considerably. Some voyages focus on a specific region, while others combine several countries. The best itinerary depends on whether your priority is history, beaches, food, islands, culture or smaller ports.
                        </p>
                    </div>

                    <div className="Sbc-ships-tabs-container">
                        <div className="Sbc-ships-tabs-nav">
                            {itineraryThemes.map((theme, idx) => (
                                <button
                                    key={idx}
                                    className={`Sbc-ship-tab-btn ${activeItinTab === idx ? "active" : ""}`}
                                    onClick={() => setActiveItinTab(idx)}
                                >
                                    <span className="Sbc-tab-ship-name">{theme.name}</span>
                                    <span className="Sbc-tab-ship-meta">{theme.meta}</span>
                                </button>
                            ))}
                        </div>

                        <div className="Sbc-ship-tab-content">
                            <div className="Sbc-ship-tab-image-placeholder">
                                <Compass size={40} className="Sbc-ship-tab-placeholder-icon" />
                                <span className="Sbc-ship-tab-placeholder-text">{itineraryThemes[activeItinTab].name} Image Placeholder</span>
                            </div>
                            <div className="Sbc-ship-tab-details">
                                <span className="Sbc-ship-tab-meta-badge">{itineraryThemes[activeItinTab].meta}</span>
                                <h3 className="Sbc-ship-tab-title">{itineraryThemes[activeItinTab].name}</h3>
                                <p className="Sbc-ship-tab-desc">{itineraryThemes[activeItinTab].desc}</p>
                                <div className="Sbc-ship-tab-best-title">Destinations Include</div>
                                <ul className="Sbc-ship-tab-tags">
                                    {itineraryThemes[activeItinTab].items.map((tag, j) => (
                                        <li key={j}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SMALL PORTS (Smc-ports-cards pattern) ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Smc-ports-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond The Major Ports</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean <br /> Small Ports</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Smc-ports-cards-grid">
                        {/* Card 1: Small Ports Overview */}
                        <div className="Smc-ports-card">
                            <div className="Smc-ports-card-media">
                                <div className="Smc-ports-viewfinder">
                                    <div className="Smc-ports-bracket tl"></div>
                                    <div className="Smc-ports-bracket tr"></div>
                                    <div className="Smc-ports-bracket bl"></div>
                                    <div className="Smc-ports-bracket br"></div>
                                </div>
                                <Anchor size={36} className="Smc-ports-card-icon" />
                                <span className="Smc-ports-card-media-text">Small Ports Overview</span>
                            </div>

                            <div className="Smc-ports-card-body">
                                <p className="Smc-ports-card-intro">
                                    Small ports are one of the strongest reasons to consider Seabourn. Larger ships often need significant port infrastructure and may concentrate on major destinations.
                                </p>

                                <div className="Smc-ports-card-list-box">
                                    <h4 className="Smc-ports-card-list-title">These ports can provide:</h4>
                                    <ul className="Smc-ports-card-list">
                                        {smallPortsList.map((item, idx) => (
                                            <li key={idx}>
                                                <Dot size={22} strokeWidth={2.5} className="Smc-ports-check-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="Smc-ports-card-footer text-muted">
                                    For travelers who have already visited Rome, Barcelona or Athens, this can be particularly appealing.
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Why Small Ports Matter */}
                        <div className="Smc-ports-card">
                            <div className="Smc-ports-card-media">
                                <div className="Smc-ports-viewfinder">
                                    <div className="Smc-ports-bracket tl"></div>
                                    <div className="Smc-ports-bracket tr"></div>
                                    <div className="Smc-ports-bracket bl"></div>
                                    <div className="Smc-ports-bracket br"></div>
                                </div>
                                <Compass size={36} className="Smc-ports-card-icon" />
                                <span className="Smc-ports-card-media-text">Why Small Ports Matter</span>
                            </div>

                            <div className="Smc-ports-card-body">
                                <p className="Smc-ports-card-intro">
                                    A Mediterranean cruise isn't necessarily better because it visits the most famous cities. Sometimes a smaller port creates a more memorable day.
                                </p>

                                <div className="Smc-ports-card-list-box">
                                    <h4 className="Smc-ports-card-list-title">You may spend the morning:</h4>
                                    <ul className="Smc-ports-card-list">
                                        {whySmallPortsMatterList.map((item, idx) => (
                                            <li key={idx}>
                                                <Dot size={22} strokeWidth={2.5} className="Smc-ports-check-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="Smc-ports-card-footer text-muted">
                                    The experience can feel more personal and less rushed.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SIGNATURE EVENTS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-signature-events">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond Sightseeing</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean <br /> Signature Events</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is known for creating special experiences beyond traditional sightseeing. Signature Events can transform an ordinary port visit into a memorable occasion. Availability varies by voyage.
                        </p>
                    </div>

                    <div className="Sbc-exp-grid">
                        <div className="Sbc-exp-card" style={{ gridColumn: "1 / -1" }}>
                            <div className="Sbc-exp-card-header" id="Sbc-Signature-Event-Card">
                                <div className="Sbc-exp-icon-wrap">
                                    <Star size={24} />
                                </div>
                                <h3 className="Sbc-h3">Depending on the itinerary and destination, experiences may include:</h3>
                            </div>

                            <div className="Sbc-exp-features">
                                <div className="Sbc-exp-tags" style={{ fontSize: '18px' }}>
                                    {["Private cultural performances", "Special dinners", "Historic venues", "Local entertainment", "Exclusive destination experiences"].map((item, idx) => (
                                        <span key={idx} className="Sbc-exp-tag">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="Sbc-exp-footer">
                                <strong>Why this matters:</strong> A destination is often remembered because of the experience rather than the number of attractions visited. A special evening in a historic location can become the defining memory of a Mediterranean voyage — particularly for travelers who have already visited the region and are looking for something beyond standard sightseeing.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Curated Experiences</span>
                    <h3 className="Sbc-cta-title">Design Your Mediterranean Shore Days</h3>
                    <p className="Sbc-cta-text">
                        From cultural excursions to Signature Events, let's build a shore program suited to how you like to travel.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan My Shore Excursions
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ashore</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Mediterranean shore excursions can be divided into several categories. Choosing excursions based on your interests is one of the best ways to personalize a Mediterranean cruise.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {excursionCategories.map((cat, i) => (
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
                </div>
            </section>

            {/* ── HISTORY LOVERS ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-history">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Landmark size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Mediterranean History Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">For History Lovers</span>
                                <h2 className="Sbc-h2">Seabourn Mediterranean Cruises for History Lovers</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                The Mediterranean is one of the world's richest regions for history. Depending on the itinerary, travelers can explore evidence of:
                            </p>

                            <div className="Sbc-qa-card">
                                <ul className="Sbc-qa-list">
                                    {["Ancient Greece", "Ancient Rome", "Byzantine history", "Ottoman history", "Medieval Europe", "Renaissance Italy", "Maritime civilizations"].map((item, idx) => (
                                        <li key={idx} style={{ alignItems: "center" }}>
                                            <span className="Smc-history-icon-circle">
                                                <Check size={22} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">
                                    The advantage of cruising is that you can move between several historical regions without changing hotels.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOD LOVERS (tabs by country) ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-food">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">For Food Lovers</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Cruises for Food Lovers</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Food is another major attraction. Each Mediterranean country brings a different culinary identity. A Seabourn Mediterranean cruise allows travelers to experience these culinary traditions both onboard and ashore.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: 'center' }}>
                            {foodByCountry.map((c, i) => {
                                const Icon = c.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Sbc-dest-tab-btn ${activeFoodTab === i ? "active" : ""}`}
                                        onClick={() => setActiveFoodTab(i)}
                                    >
                                        <Icon size={18} />
                                        <span>{c.country}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Sbc-dest-tab-content">
                            <div className="Sbc-dest-image-placeholder">
                                <div className="Sbc-dest-placeholder-icon-wrapper">
                                    <ActiveFoodIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">
                                    {foodByCountry[activeFoodTab].country} Cuisine Image
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Regional Cuisine</span>
                                <h3 className="Sbc-dest-tab-title">{foodByCountry[activeFoodTab].country}</h3>
                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">You may encounter:</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {foodByCountry[activeFoodTab].items.map((item, j) => (
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

            {/* ── WINE LOVERS (Smc-wine-grid pattern) ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Smc-wine-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">For Wine Lovers</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Cruises for Wine Lovers</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Mediterranean includes some of Europe's most important wine regions.
                        </p>
                    </div>

                    <div className="Smc-wine-intro-box">
                        <p className="Smc-wine-list-intro">
                            Depending on the itinerary, travelers may have opportunities to explore:
                        </p>
                    </div>

                    <div className="Smc-wine-cards-container">
                        {["Italian wine regions", "French wine regions", "Greek wines", "Croatian wines", "Spanish wines"].map((region, idx) => (
                            <div className="Smc-wine-region-block" key={idx}>
                                <div className="Smc-wine-block-circle">
                                    <Wine size={22} strokeWidth={2} />
                                </div>
                                <h4 className="Smc-wine-block-title">{region}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="Smc-wine-conclusion-box">
                        <p className="Smc-wine-conclusion-text">
                            Wine-focused shore excursions can add another dimension to the journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── COUPLES ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-couples">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">For Couples</span>
                                <h2 className="Sbc-h2">Seabourn Mediterranean Cruises for Couples</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                The Mediterranean is one of the strongest Seabourn destinations for couples. The relaxed pace and intimate ship environment make Mediterranean cruising particularly attractive for romantic travel.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "12px" }}>A typical day can combine:</p>

                            <div className="Smc-day-plan">
                                {dayPlan.map((d, i) => {
                                    const Icon = d.icon;
                                    return (
                                        <div className="Smc-day-plan-item" key={i}>
                                            <div className="Smc-day-plan-icon">
                                                <Icon size={18} strokeWidth={2} />
                                            </div>
                                            <div className="Smc-day-plan-info">
                                                <span className="Smc-day-plan-label">{d.label}</span>
                                                <span className="Smc-day-plan-text">{d.text}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Mediterranean Couples Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRST-TIME LUXURY TRAVELERS ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-first-time">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Gem size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">First-Time Luxury Travelers Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Getting Started</span>
                                <h2 className="Sbc-h2">Seabourn Mediterranean Cruises for First-Time Luxury Travelers</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                The Mediterranean is an excellent introduction to Seabourn. The variety of ports also makes it easy to build an itinerary around personal interests.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Travelers can experience:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Luxury service", "Fine dining", "Sophisticated accommodations", "Multiple destinations", "Cultural experiences", "Scenic cruising"].map((item, idx) => (
                                        <li key={idx} style={{ alignItems: "center" }}>
                                            <span className="Smc-firsttime-icon-circle">
                                                <Check size={22} strokeWidth={3} />
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

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Ready for Your Seabourn Mediterranean Voyage?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare regions, ports, seasons and suite categories to find the right sailing for you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── BEST TIME TO CRUISE ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-best-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timing Your Trip</span>
                        <h2 className="Sbc-h2">Best Time for a Seabourn Mediterranean Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Mediterranean cruise season generally extends from spring through fall, with the busiest period during summer. Each season has its own advantages.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {seasons.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{s.title}</h3>
                                    <ul className="Smc-season-list">
                                        {s.items.map((item, j) => (
                                            <li key={j}>
                                                <Dot size={22} strokeWidth={2.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {s.note && <p className="Smc-season-note">{s.note}</p>}
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "36px" }}>
                        For many travelers, late spring and early fall offer an excellent balance between weather and crowds.
                    </p>
                </div>
            </section>

            {/* ── IS SUMMER THE BEST TIME ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-summer-best">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing A Month</span>
                        <h2 className="Sbc-h2">Is Summer the Best Time for a Seabourn Mediterranean Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Summer is popular, but it isn't automatically the best. If your priority is:
                        </p>
                    </div>

                    <div className="Sbc-compare-key" style={{ maxWidth: "760px", margin: "0 auto" }}>
                        <p><strong>Beaches and swimming:</strong> Summer may be ideal.</p>
                        <p><strong>Sightseeing:</strong> Spring or fall may be more comfortable.</p>
                        <p><strong>Fewer crowds:</strong> Shoulder season is generally preferable.</p>
                        <p><strong>Food and wine:</strong> Fall can be particularly appealing.</p>
                    </div>
                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "20px auto 0" }}>
                        The right month depends on how you want to experience the Mediterranean.
                    </p>
                </div>
            </section>

            {/* ── WEATHER ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-weather">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">What To Expect</span>
                                <h2 className="Sbc-h2">Mediterranean Weather</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                The Mediterranean is generally known for warm, dry summers and milder shoulder seasons. However, conditions vary significantly between regions.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Travelers should consider:</h4>
                                <ul className="Sbc-qa-list">
                                    {["Temperature", "Humidity", "Sun exposure", "Wind", "Rain", "Local seasonal conditions"].map((item, idx) => (
                                        <li key={idx} style={{ alignItems: "center" }}>
                                            <span className="Smc-weather-icon-circle">
                                                <Check size={22} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">
                                    Comfortable walking shoes and sun protection are essential.
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <CloudRain size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Mediterranean Weather Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO PACK ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Packing Guide</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn Mediterranean Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Mediterranean packing requires a balance between warm-weather sightseeing and elegant evenings onboard.
                        </p>
                    </div>

                    <div className="Smc-pack-grid">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Daytime</div>
                            <ul>
                                {packingDaytime.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Shore Excursions</div>
                            <ul>
                                {packingShore.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Evening</div>
                            <ul>
                                {packingEvening.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA – PACKING ─────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ready to Start Planning?</span>
                    <h3 className="Sbc-cta-title">Pack Smart. Cruise in Style.</h3>
                    <p className="Sbc-cta-text">
                        Our specialists can advise on the right suite, shore excursions and everything you need for the perfect Mediterranean voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── HOW MANY DAYS ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-length">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Trip Length</span>
                        <h2 className="Sbc-h2">How Many Days Should You Spend in the Mediterranean?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The ideal cruise length depends on how many regions you want to explore.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {lengthCards.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{c.title}</h3>
                                    <p className="Sbc-card-text">{c.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "36px" }}>
                        A longer voyage can reduce the feeling of constantly moving from one destination to another.
                    </p>
                </div>
            </section>

            {/* ── CRUISE VS LAND VACATION ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-land">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Choosing Your Trip Style</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Cruise vs. Land Vacation</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Cruise Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn Cruise</h3>
                            <ul className="Sbc-compare-list">
                                {cruiseVsLand.cruise.map((item, i) => (
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
                                <span className="Sbc-compare-placeholder-text">Mediterranean Land Trip Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Mediterranean Land Trip</h3>
                            <ul className="Sbc-compare-list">
                                {cruiseVsLand.land.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>A cruise works especially well if you want to see several Mediterranean destinations without managing multiple hotels and transfers.</p>
                        <p>A land vacation may be better if you want to spend several days in one city or region.</p>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN VS LARGE-SHIP CRUISES ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-vs-large-ship">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Small Ship or Large Ship</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean vs. Large-Ship Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn</h3>
                            <ul className="Sbc-compare-list">
                                {seabournVsLarge.seabourn.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Users size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Large-Ship Cruise Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Large-Ship Cruise</h3>
                            <ul className="Sbc-compare-list">
                                {seabournVsLarge.large.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>Travelers who prefer peace, service and intimacy may find Seabourn more appealing.</p>
                    </div>
                </div>
            </section>

            {/* ── ALL-INCLUSIVE ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-inclusive">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">All-Inclusive Luxury Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Inclusive Model</span>
                                <h2 className="Sbc-h2">Is a Seabourn Mediterranean Cruise <br /> All-Inclusive?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn is known for an inclusive luxury cruise model. Depending on the sailing, the fare can include:
                            </p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-qa-list">
                                    {inclusionsList.map((item, idx) => (
                                        <li key={idx} style={{ alignItems: "center" }}>
                                            <span className="Smc-inclusive-icon-circle">
                                                <Check size={22} strokeWidth={3} />
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

            {/* ── CTA – ALL-INCLUSIVE ────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Transparent Value</span>
                    <h3 className="Sbc-cta-title">Understand Exactly What's Included</h3>
                    <p className="Sbc-cta-text">
                        We'll walk you through what's covered, what's optional, and how to get the most value from your Seabourn Mediterranean fare.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Ask About Inclusions
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ONBOARD EXPERIENCE ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-onboard">
                <div className="Sbc-container">
                    <div className="Sbc-wellness-layout">
                        <div className="Sbc-wellness-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", marginBottom: "24px" }}>
                                <span className="Sbc-eyebrow">Onboard Life</span>
                                <h2 className="Sbc-h2" style={{ textAlign: "left", margin: "0 0 16px" }}>What Is the Onboard Experience Like?</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 20px" }}></div>
                            </div>

                            <p className="Sbc-wellness-intro">
                                The Mediterranean may be busy and energetic ashore, but the ship provides a quieter environment.
                            </p>

                            <div className="Sbc-wellness-features-card">
                                <h4 className="Sbc-wellness-features-title">Guests can return from a day of sightseeing to:</h4>
                                <ul className="Sbc-wellness-list">
                                    {onboardList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sbc-wellness-takeaway">
                                <p className="Sbc-p" style={{ fontWeight: "600", color: "var(--navy)" }}>
                                    This contrast between destination exploration and onboard relaxation is central to the Seabourn experience.
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-wellness-image-container">
                            <div className="Sbc-wellness-image-placeholder">
                                <div className="Sbc-wellness-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-wellness-placeholder-icon" />
                                </div>
                                <span className="Sbc-wellness-placeholder-text">Onboard Experience Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING (Smc-dining-grid pattern) ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Smc-dining-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Dining is an important part of a Mediterranean voyage. Guests can enjoy a combination of:
                        </p>
                    </div>

                    <div className="Smc-dining-cards-container">
                        {[
                            { title: "Fine dining", icon: Utensils },
                            { title: "Casual meals", icon: Coffee },
                            { title: "Room service", icon: Home },
                            { title: "Regional-inspired cuisine", icon: Globe },
                            { title: "Premium beverages", icon: Wine }
                        ].map((d, i) => {
                            const Icon = d.icon;
                            return (
                                <div className="Smc-dining-card-block" key={i}>
                                    <div className="Smc-dining-block-circle">
                                        <Icon size={22} strokeWidth={2} />
                                    </div>
                                    <h4 className="Smc-dining-block-title">{d.title}</h4>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Smc-dining-conclusion-box">
                        <p className="Smc-dining-conclusion-text">
                            The Mediterranean also creates an opportunity to compare regional food traditions from one destination to the next.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── IS IT WORTH THE MONEY (Smc-worth pattern) ───────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Smc-worth-section">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is a Seabourn Mediterranean Cruise Worth the Money?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Smc-worth-split">
                        {/* Left column - Content */}
                        <div className="Smc-worth-content">
                            <p className="Smc-worth-intro-lead">
                                For travelers who value luxury service, smaller ships, sophisticated dining and access to less crowded destinations, Seabourn can be worth the premium.
                            </p>

                            <div className="Smc-worth-highlights">
                                <h4 className="Smc-worth-highlights-title">The value comes from combining:</h4>
                                <div className="Smc-worth-items-grid">
                                    {medWorthItems.map((item, idx) => (
                                        <div className="Smc-worth-item" key={idx}>
                                            <span className="Smc-worth-item-num">{String(idx + 1).padStart(2, '0')}</span>
                                            <span className="Smc-worth-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Sbc-p Smc-worth-conclusion-p">
                                Instead of simply maximizing the number of ports, Seabourn focuses on the quality of the experience.
                            </p>
                        </div>

                        {/* Right column - Image placeholder */}
                        <div className="Smc-worth-image-wrapper">
                            <div className="Smc-worth-image-placeholder">
                                <div className="Smc-worth-viewfinder">
                                    <div className="Smc-worth-bracket tl"></div>
                                    <div className="Smc-worth-bracket tr"></div>
                                    <div className="Smc-worth-bracket bl"></div>
                                    <div className="Smc-worth-bracket br"></div>
                                </div>
                                <div className="Smc-worth-placeholder-icon-wrapper">
                                    <Award size={40} className="Smc-worth-placeholder-icon" />
                                </div>
                                <span className="Smc-worth-placeholder-text">Seabourn Mediterranean Value Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Mediterranean Pros and Cons</h2>
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

            {/* ── CTA 4 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Onboard &amp; Ashore</span>
                    <h3 className="Sbc-cta-title">Taste the Mediterranean with Seabourn</h3>
                    <p className="Sbc-cta-text">
                        From tapas in Spain to tavernas in Greece, let's build an itinerary around the flavors you want to explore.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHO SHOULD BOOK ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-should-book">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Should Book a Seabourn Mediterranean Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            A Seabourn Mediterranean cruise is particularly well suited to travelers who:
                        </p>
                    </div>

                    <div className="Smc-fit-grid">
                        {shouldBookList.map((item, i) => (
                            <div className="Smc-fit-item-card" key={i}>
                                <div className="Smc-fit-check-wrapper">
                                    <Check size={14} strokeWidth={2.5} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHO MAY PREFER ANOTHER CRUISE ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-not-fit">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <span className="Sbc-eyebrow">Considering Alternatives</span>
                            <h2 className="Sbc-h2">Who May Prefer Another Mediterranean Cruise?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            A different cruise line may be better for travelers who prioritize:
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

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "36px auto 0" }}>
                        Seabourn is built around intimacy, service and destination-focused luxury.
                    </p>
                </div>
            </section>

            {/* ── TIPS FOR CHOOSING THE RIGHT ITINERARY ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting It Right</span>
                        <h2 className="Sbc-h2">Tips for Choosing the Right Seabourn Mediterranean Itinerary</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Smc-tips-grid">
                        {tipsList.map((tip, i) => (
                            <div className="Smc-tips-card" key={i}>
                                <div className="Smc-tips-number">{String(i + 1).padStart(2, "0")}</div>
                                <div>
                                    <h3 className="Smc-tips-title">{tip.title}</h3>
                                    <p className="Smc-tips-text">{tip.text}</p>
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

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn Mediterranean cruise.
                        </p>
                    </div>
                    <MedFAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Mediterranean Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Mediterranean cruises are an excellent choice for travelers who want to explore the Mediterranean without sacrificing intimacy, luxury or personalized service. The region's combination of ancient history, beautiful islands, small ports, cuisine, wine, beaches and cultural experiences provides extraordinary variety.
                        </p>
                        <p className="Sbc-p">
                            Seabourn adds a smaller-ship environment and the opportunity to experience destinations at a more relaxed pace. For travelers who would rather spend the afternoon exploring a historic village or enjoying a quiet Mediterranean harbor than participating in a large-ship entertainment program, Seabourn offers a compelling alternative.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your ideal Mediterranean vacation combines small ports, excellent food, cultural discovery, elegant accommodations and distinctive experiences, a Seabourn Mediterranean cruise deserves serious consideration.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Mediterranean Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournMediterraneanCruisesGuide;