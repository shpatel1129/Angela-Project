import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Anchor,
    Waves,
    Wine,
    Sun,
    Gem,
    Heart,
    Compass,
    Utensils,
    Landmark,
    Camera,
    Home,
    Users,
    Award,
    AlertCircle,
    Palmtree,
    Fish,
    Sailboat,
    CloudRain,
    Thermometer,
    Umbrella,
    Sparkles,
    Ship,
    Star,
    MapPin
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournCaribbeanCruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournCaribbeanSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#webpage",
            "url": "https://www.tripsandships.com/seabourn-cruises/caribbean/",
            "name": "Seabourn Caribbean Cruises: Beaches, Yacht Harbors & More",
            "headline": "Seabourn Caribbean Cruises: Beaches, Yacht Harbors, Marina Day & Caviar in the Surf",
            "description": "Explore Seabourn Caribbean cruises, including yacht harbors, secluded beaches, Marina Day, Caviar in the Surf, shore excursions, itineraries and the best time to sail.",
            "keywords": [
                "Seabourn Caribbean Cruises",
                "Seabourn Caribbean cruise",
                "Seabourn Caribbean cruises",
                "Seabourn Caribbean itinerary",
                "Seabourn Caribbean cruise review",
                "Seabourn Caribbean beaches",
                "Seabourn Caribbean yacht harbors",
                "Seabourn Caribbean shore excursions",
                "Seabourn Caribbean Marina Day",
                "Seabourn Caviar in the Surf",
                "Seabourn Caribbean cruise ports",
                "Seabourn Caribbean luxury cruise",
                "Seabourn Caribbean small ship cruise",
                "Seabourn Caribbean best time to cruise",
                "Seabourn Caribbean islands",
                "Seabourn Caribbean cruise worth it",
                "luxury Caribbean cruise",
                "small ship Caribbean cruise"
            ],
            "inLanguage": "en-US",
            "breadcrumb": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#breadcrumb"
            },
            "mainEntity": {
                "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#cruise"
            }
        },

        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#breadcrumb",
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
                    "name": "Seabourn Caribbean Cruises",
                    "item": "https://www.tripsandships.com/seabourn-cruises/caribbean/"
                }
            ]
        },

        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#cruise",
            "name": "Seabourn Caribbean Cruises",
            "description": "An intimate luxury small-ship cruise experience across the Caribbean, combining beaches, islands, yacht-style harbors, watersports, shore excursions, Marina Day and Caviar in the Surf.",
            "touristType": [
                "Luxury travelers",
                "Couples",
                "Beach lovers",
                "Repeat Caribbean visitors",
                "Solo travelers",
                "Multigenerational families"
            ],
            "itinerary": {
                "@type": "ItemList",
                "name": "Seabourn Caribbean Itinerary Regions",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Eastern Caribbean"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Southern Caribbean"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Lesser Antilles"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "British Caribbean"
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "French Caribbean"
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "Dutch Caribbean"
                    },
                    {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "Caribbean Coastal Regions"
                    }
                ]
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Region",
                    "value": "Caribbean"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Cruise Style",
                    "value": "Ultra-luxury small-ship cruising"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Main Attractions",
                    "value": "Beaches, islands, harbors and tropical scenery"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Signature Experiences",
                    "value": "Marina Day and Caviar in the Surf"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Activities",
                    "value": "Swimming, watersports, snorkeling, excursions and sightseeing"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Atmosphere",
                    "value": "Relaxed, elegant and intimate"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Best For",
                    "value": "Couples, luxury travelers, beach lovers and repeat Caribbean visitors"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Peak Season",
                    "value": "Winter and early spring"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Shoulder Seasons",
                    "value": "Fall and late spring"
                },
                {
                    "@type": "PropertyValue",
                    "name": "Ideal Vacation Style",
                    "value": "Luxury + relaxation + island exploration"
                }
            ]
        },

        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#highlights",
            "name": "Seabourn Caribbean Cruise Highlights",
            "numberOfItems": 8,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Yacht Harbors",
                    "description": "Smaller luxury ships can provide access to yacht-style harbors and smaller coastal destinations with scenic surroundings, smaller crowds, waterfronts and relaxed port days."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Caribbean Beaches",
                    "description": "Depending on the itinerary, travelers can experience white-sand beaches, secluded coves, turquoise water, coral reefs, calm swimming areas and beach clubs."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Marina Day",
                    "description": "When conditions permit, the ship's marina can become a hub for swimming, kayaking, paddleboarding and other water activities."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Caviar in the Surf",
                    "description": "A Seabourn Signature Event combining caviar and Champagne with a beach and ocean setting."
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Shore Excursions",
                    "description": "Excursion categories include beach experiences, water activities, wildlife and nature, culture and history, and food and drink."
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Caribbean Cuisine",
                    "description": "Depending on the destination, travelers may experience fresh seafood, Caribbean spices, tropical fruit, Creole cuisine, French-Caribbean cuisine, Dutch-Caribbean influences and local rum traditions."
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Seasonal Cruising",
                    "description": "Winter and early spring are popular, while summer and fall can offer fewer travelers but require greater consideration of tropical weather and hurricane-season conditions."
                },
                {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Small-Ship Luxury",
                    "description": "The Seabourn experience emphasizes smaller ships, personalized service, luxury accommodations, fine dining and destination-focused experiences."
                }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where does Seabourn cruise in the Caribbean?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn Caribbean itineraries can include destinations across the Eastern Caribbean, Southern Caribbean, Lesser Antilles and other Caribbean regions, depending on the sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Seabourn Caribbean cruises different?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn focuses on an intimate luxury experience with smaller ships, personalized service, yacht-style harbors, beach experiences and distinctive Signature Events."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn offer Marina Day in the Caribbean?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Marina Day can be offered on selected Seabourn Caribbean voyages when weather, sea conditions and local regulations permit."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Seabourn Caviar in the Surf?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Caviar in the Surf is a Seabourn Signature Event that combines caviar and Champagne with a beach and ocean setting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Caviar in the Surf included?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "When offered as a Seabourn Signature Event, it is generally part of the cruise experience rather than a separately purchased dining venue. Availability depends on the itinerary and conditions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Seabourn visit small Caribbean ports?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Selected itineraries can include smaller harbors and destinations that provide a more intimate experience than major commercial cruise ports."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the best Seabourn Caribbean itineraries?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best itinerary depends on your priorities. Eastern Caribbean routes can be excellent for beaches and water activities, while Southern Caribbean itineraries can provide more varied landscapes and cultural experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best time for a Seabourn Caribbean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Winter and early spring are popular because of warm weather and generally favorable conditions. Other seasons can offer fewer crowds but come with different weather considerations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is summer a good time to cruise the Caribbean?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It can be, especially for travelers looking for warm weather and potentially lower fares. However, tropical weather and hurricane-season considerations become more important."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the Caribbean hurricane season a concern?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The Atlantic hurricane season runs from June through November. Cruise itineraries can be adjusted when tropical weather affects destinations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Caribbean good for couples?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The intimate ships, beaches, fine dining and romantic tropical settings make Seabourn particularly attractive to couples."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Caribbean good for solo travelers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Solo travelers can participate in excursions, dining, Marina Day and other onboard activities while enjoying the smaller-ship atmosphere."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Caribbean good for families?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It can work well for multigenerational families who enjoy beaches and watersports, but travelers looking for extensive children's entertainment may prefer a larger cruise line."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should I pack for a Seabourn Caribbean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Bring lightweight clothing, swimwear, comfortable walking shoes, sunglasses, sunscreen, a hat, a light rain layer and smart-casual evening clothing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a balcony worth it on a Seabourn Caribbean cruise?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For many travelers, yes. A balcony provides private space for enjoying tropical views, sunsets and relaxing between excursions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are shore excursions included on Seabourn Caribbean cruises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The exact inclusions vary by sailing. Some onboard experiences may be included while individual shore excursions can carry additional charges."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Seabourn Caribbean all-inclusive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seabourn offers an inclusive luxury cruise experience with many onboard amenities, dining, selected beverages, Wi-Fi and gratuities generally included. Specific terms vary by sailing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Seabourn Caribbean cruise worth the money?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For travelers who value small ships, personalized service, beautiful beaches, unique experiences and luxury rather than large-ship entertainment, Seabourn can be worth the premium."
                    }
                }
            ]
        }
    ]
};

/* ── FAQ Accordion (reused Sbc-faq classes) ───────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Where does Seabourn cruise in the Caribbean?", a: "Seabourn Caribbean itineraries can include destinations across the Eastern Caribbean, Southern Caribbean, Lesser Antilles and other Caribbean regions, depending on the sailing." },
        { q: "What makes Seabourn Caribbean cruises different?", a: "Seabourn focuses on an intimate luxury experience with smaller ships, personalized service, yacht-style harbors, beach experiences and distinctive Signature Events." },
        { q: "Does Seabourn offer Marina Day in the Caribbean?", a: "Marina Day can be offered on selected Seabourn Caribbean voyages when weather, sea conditions and local regulations permit." },
        { q: "What is Seabourn Caviar in the Surf?", a: "Caviar in the Surf is a Seabourn Signature Event that combines caviar and Champagne with a beach and ocean setting." },
        { q: "Is Caviar in the Surf included?", a: "When offered as a Seabourn Signature Event, it is generally part of the cruise experience rather than a separately purchased dining venue. Availability depends on the itinerary and conditions." },
        { q: "Does Seabourn visit small Caribbean ports?", a: "Selected itineraries can include smaller harbors and destinations that provide a more intimate experience than major commercial cruise ports." },
        { q: "What are the best Seabourn Caribbean itineraries?", a: "The best itinerary depends on your priorities. Eastern Caribbean routes can be excellent for beaches and water activities, while Southern Caribbean itineraries can provide more varied landscapes and cultural experiences." },
        { q: "What is the best time for a Seabourn Caribbean cruise?", a: "Winter and early spring are popular because of warm weather and generally favorable conditions. Other seasons can offer fewer crowds but come with different weather considerations." },
        { q: "Is summer a good time to cruise the Caribbean?", a: "It can be, especially for travelers looking for warm weather and potentially lower fares. However, tropical weather and hurricane-season considerations become more important." },
        { q: "Is the Caribbean hurricane season a concern?", a: "Yes. The Atlantic hurricane season runs from June through November. Cruise itineraries can be adjusted when tropical weather affects destinations." },
        { q: "Is Seabourn Caribbean good for couples?", a: "Yes. The intimate ships, beaches, fine dining and romantic tropical settings make Seabourn particularly attractive to couples." },
        { q: "Is Seabourn Caribbean good for solo travelers?", a: "Yes. Solo travelers can participate in excursions, dining, Marina Day and other onboard activities while enjoying the smaller-ship atmosphere." },
        { q: "Is Seabourn Caribbean good for families?", a: "It can work well for multigenerational families who enjoy beaches and watersports, but travelers looking for extensive children's entertainment may prefer a larger cruise line." },
        { q: "What should I pack for a Seabourn Caribbean cruise?", a: "Bring lightweight clothing, swimwear, comfortable walking shoes, sunglasses, sunscreen, a hat, a light rain layer and smart-casual evening clothing." },
        { q: "Is a balcony worth it on a Seabourn Caribbean cruise?", a: "For many travelers, yes. A balcony provides private space for enjoying tropical views, sunsets and relaxing between excursions." },
        { q: "Are shore excursions included on Seabourn Caribbean cruises?", a: "The exact inclusions vary by sailing. Some onboard experiences may be included while individual shore excursions can carry additional charges." },
        { q: "Is Seabourn Caribbean all-inclusive?", a: "Seabourn offers an inclusive luxury cruise experience with many onboard amenities, dining, selected beverages, Wi-Fi and gratuities generally included. Specific terms vary by sailing." },
        { q: "Is a Seabourn Caribbean cruise worth the money?", a: "For travelers who value small ships, personalized service, beautiful beaches, unique experiences and luxury rather than large-ship entertainment, Seabourn can be worth the premium." },
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
const glanceData = [
    { label: "Region", value: "Caribbean" },
    { label: "Cruise style", value: "Ultra-luxury small-ship cruising" },
    { label: "Main attractions", value: "Beaches, islands, harbors and tropical scenery" },
    { label: "Signature experiences", value: "Marina Day and Caviar in the Surf" },
    { label: "Activities", value: "Swimming, watersports, snorkeling, excursions and sightseeing" },
    { label: "Atmosphere", value: "Relaxed, elegant and intimate" },
    { label: "Best for", value: "Couples, luxury travelers, beach lovers and repeat Caribbean visitors" },
    { label: "Peak season", value: "Winter and early spring" },
    { label: "Shoulder seasons", value: "Fall and late spring" },
    { label: "Ideal vacation style", value: "Luxury + relaxation + island exploration" },
];

const whyChooseHighlights = [
    "Smaller ships", "Personalized service", "Beautiful anchorages", "Relaxed beach days",
    "Luxury accommodations", "Fine dining", "Fewer crowds", "Curated shore experiences",
];

const differentList = [
    "Scenic island approaches", "Smaller harbors", "Beach experiences", "Watersports",
    "Local culture", "Gourmet dining", "Personalized service", "Signature Seabourn events",
];

const itineraryRegions = [
    {
        icon: Waves,
        title: "Eastern Caribbean",
        subtitle: "Eastern Caribbean Cruises",
        desc: "Eastern Caribbean itineraries can appeal to travelers looking for beaches, clear water, island scenery, snorkeling, sailing and relaxed port days.",
        listLabel: "Depending on the itinerary, travelers may visit islands associated with the:",
        listItems: ["U.S. Virgin Islands", "British Virgin Islands", "Leeward Islands", "Windward Islands"],
        best: "Exact ports vary by sailing.",
    },
    {
        icon: Landmark,
        title: "Southern Caribbean",
        subtitle: "Southern Caribbean Cruises",
        desc: "Southern Caribbean itineraries can offer a different atmosphere, combining beaches with rainforests, volcanic landscapes, local food, history and culture.",
        listLabel: "Destinations may include islands such as:",
        listItems: ["Barbados", "Grenada", "St. Lucia", "St. Vincent", "Martinique", "Guadeloupe", "Other southern Caribbean islands"],
        best: "",
    },
    {
        icon: Palmtree,
        title: "Lesser Antilles",
        subtitle: "The Lesser Antilles",
        desc: "The Lesser Antilles are particularly well suited to small-ship cruising. A smaller luxury ship can provide a more intimate way to explore these islands.",
        listLabel: "The islands offer:",
        listItems: ["Small harbors", "Dramatic coastlines", "Beaches", "Coral reefs", "Local villages", "Tropical landscapes"],
        best: "",
    },
];

const harborBenefits = ["Scenic surroundings", "Smaller crowds", "Beautiful waterfronts", "Easy access to local restaurants", "Charming towns", "More relaxed port days"];
const smallPortList = ["Walk along the waterfront", "Visit a local café", "Explore a historic village", "Swim at a nearby beach", "Take a small boat excursion", "Enjoy the scenery without large crowds"];

const beachCards = [
    { icon: Umbrella, title: "For Relaxation", text: "Look for quieter beaches with calm water and fewer crowds." },
    { icon: Fish, title: "For Snorkeling", text: "Choose destinations known for clear water and healthy reefs." },
    { icon: Camera, title: "For Scenery", text: "Some beaches are particularly memorable because of their surrounding cliffs, vegetation or turquoise water." },
    { icon: Sailboat, title: "For Watersports", text: "Choose destinations offering kayaking, paddleboarding or other activities." },
];

const excursionCategories = [
    { icon: Umbrella, title: "Beach & Water", text: "Explore the classic Caribbean coastline through relaxed, active or private settings.", tags: ["Beach experiences", "Beach visits", "Private beach experiences", "Swimming"] },
    { icon: Sailboat, title: "Snorkeling & Sailing", text: "Experience the water from a different perspective across a range of active excursions.", tags: ["Snorkeling", "Water activities", "Kayaking", "Sailing", "Paddleboarding", "Boat tours"] },
    { icon: Fish, title: "Wildlife & Nature", text: "Discover marine life and tropical landscapes beyond the shoreline.", tags: ["Marine wildlife", "Tropical forests", "Scenic nature tours"] },
    { icon: Landmark, title: "Culture & History", text: "Learn about the islands beyond their beaches through local heritage and architecture.", tags: ["Historic towns", "Museums", "Local culture", "Indigenous heritage", "Architecture"] },
    { icon: Utensils, title: "Food & Drink", text: "Taste the Caribbean through rum, cuisine and local markets.", tags: ["Rum experiences", "Local cuisine", "Cooking experiences", "Markets", "Restaurants"] },
];

const firstTimeTips = [
    { title: "One beach day", text: "Enjoy the classic Caribbean experience." },
    { title: "One snorkeling or sailing excursion", text: "Experience the water from a different perspective." },
    { title: "One cultural tour", text: "Learn about the island beyond its beaches." },
    { title: "One nature excursion", text: "Explore forests, mountains or wildlife." },
    { title: "One completely unscheduled day", text: "Sometimes the best Caribbean experience is simply walking ashore and exploring at your own pace." },
];

const audienceCards = [
    {
        icon: Palmtree,
        title: "Seabourn Caribbean for Beach Lovers",
        desc: "If your priority is relaxation, a Seabourn Caribbean cruise can be particularly attractive.",
        listTitle: "You can combine:",
        items: ["Beach time", "Pool time", "Marina Day", "Watersports", "Spa treatments", "Fine dining"],
        conclusion: "This creates a vacation that doesn't require constant sightseeing.",
        placeholderText: "Tranquil Caribbean Beach View"
    },
    {
        icon: Utensils,
        title: "Seabourn Caribbean for Food Lovers",
        desc: "Caribbean travel provides an excellent opportunity to explore regional cuisine.",
        listTitle: "Depending on the destination, travelers may encounter:",
        items: ["Fresh seafood", "Caribbean spices", "Tropical fruit", "Creole cuisine", "French-Caribbean cuisine", "Dutch-Caribbean influences", "Local rum traditions"],
        conclusion: "Seabourn's onboard dining provides another layer of the culinary experience.",
        placeholderText: "Gourmet Ocean-side Dining Scene"
    },
    {
        icon: Heart,
        title: "Seabourn Caribbean for Couples",
        desc: "The Caribbean is particularly well suited to couples traveling with Seabourn.",
        listTitle: "A typical day could look like:",
        items: ["Morning: Beach or snorkeling excursion", "Afternoon: Relax onboard or enjoy Marina Day", "Evening: Cocktails and fine dining"],
        conclusion: "The combination of tropical scenery and intimate luxury makes the region naturally romantic.",
        placeholderText: "Romantic Sunset Veranda View"
    },
    {
        icon: Compass,
        title: "Seabourn Caribbean for Solo Travelers",
        desc: "Solo travelers can also enjoy the Caribbean experience. The smaller ship encourages social interaction while still allowing plenty of personal space.",
        listTitle: "Solo guests can participate in:",
        items: ["Shore excursions", "Marina activities", "Dining", "Lectures", "Beach experiences", "Watersports"],
        conclusion: "",
        placeholderText: "Solo Explorer Onboard Deck View"
    },
    {
        icon: Users,
        title: "Seabourn Caribbean for Families",
        desc: "Seabourn Caribbean cruises can work for multigenerational families who value:",
        listTitle: "Families who value:",
        items: ["Beaches", "Swimming", "Watersports", "Culture", "Relaxation", "Luxury"],
        conclusion: "However, Seabourn does not offer the same extensive children's entertainment infrastructure as the largest family-focused cruise lines. Families should consider age requirements and activity levels when selecting a sailing.",
        placeholderText: "Family Gathering in Luxury Setting"
    },
];

const seasonCards = [
    { icon: Sun, title: "Winter", text: "Often attractive because of warm weather, an escape from colder climates, lower rainfall in many destinations and excellent beach conditions." },
    { icon: Sparkles, title: "Spring", text: "Can offer warm temperatures, good beach conditions and fewer peak-season crowds." },
    { icon: Thermometer, title: "Summer", text: "Can provide hot temperatures, fewer travelers and attractive cruise fares on some sailings. But tropical weather becomes an important consideration." },
    { icon: CloudRain, title: "Fall", text: "Can offer fewer travelers, warm water and potentially lower prices. But travelers should carefully consider hurricane-season weather." },
];

const weatherList = ["Tropical heat", "High humidity", "Strong sunshine", "Occasional rain", "Seasonal storms"];

const packingData = [
    { title: "Daytime", items: ["Lightweight shirts", "Shorts", "Lightweight trousers", "Swimsuits", "Sandals", "Comfortable walking shoes"] },
    { title: "Beach", items: ["Swimwear", "Sunglasses", "Hat", "Sunscreen", "Beach cover-up", "Waterproof phone pouch"] },
    { title: "Excursions", items: ["Comfortable walking shoes", "Small daypack", "Reusable water bottle", "Lightweight rain layer"] },
    { title: "Evening", items: ["Smart-casual clothing", "Dressier outfits", "Comfortable evening shoes"] },
];

const compareData = {
    seabourn: ["Smaller ship", "Intimate atmosphere", "Luxury-focused", "Personalized service", "Yacht-style feel", "Beach and destination emphasis", "Marina Day", "Caviar in the Surf"],
    large: ["Very large ship", "Resort-style atmosphere", "Entertainment-focused", "Large-scale service", "Mega-resort feel", "Destination + onboard attractions", "Large pool and waterslide complexes", "Broad range of themed experiences"],
};

const inclusiveList = ["Suite accommodation", "Dining", "Selected beverages", "Wi-Fi", "Gratuities", "Entertainment", "Many onboard amenities"];

const diningCards = [
    { icon: Utensils, title: "Fine Dining", text: "Sophisticated onboard restaurants provide an elegant dining environment after a day at the beach." },
    { icon: Sun, title: "Casual Dining", text: "Relaxed venues suit travelers who want excellent food without a formal restaurant atmosphere." },
    { icon: Home, title: "In-Suite Dining", text: "Guests can enjoy meals in the comfort of their suite, ideal for couples and travelers who prefer privacy." },
];

const worthList = ["Beautiful destinations", "Smaller yacht-like atmosphere", "Luxury accommodation", "Personalized service", "Marina Day", "Caviar in the Surf", "Fine dining"];

const prosList = ["Intimate small-ship atmosphere", "Yacht-harbor experience", "Beautiful Caribbean beaches", "Marina Day", "Caviar in the Surf", "Personalized service", "Luxury suites", "Fine dining", "Relaxed atmosphere", "Excellent choice for couples", "Good selection of water activities", "Fewer crowds than many large ships"];
const consList = ["Higher price than mainstream cruises", "Fewer large-scale entertainment facilities", "Limited children's facilities", "Weather can affect beach and marina activities", "Hurricane season can affect itineraries", "Some excursions cost extra"];

const bookForList = ["Love beaches", "Prefer smaller ships", "Enjoy luxury travel", "Want personalized service", "Appreciate excellent dining", "Enjoy watersports", "Prefer fewer crowds", "Want a yacht-like atmosphere", "Are interested in unique experiences such as Caviar in the Surf"];
const preferAnotherList = ["Waterparks", "Large children's clubs", "Huge entertainment venues", "Dozens of restaurants", "Casinos", "Extensive nightlife", "Lowest possible fare"];

const itineraryTips = [
    { title: "Decide whether you want beaches or culture", text: "Some itineraries emphasize relaxation while others offer more cultural exploration." },
    { title: "Look at the ports carefully", text: "Small harbors can be a major advantage." },
    { title: "Check for Marina Day", text: "If watersports are important to you, look for sailings where this experience is scheduled." },
    { title: "Look for Caviar in the Surf", text: "This signature experience can be a highlight for first-time Seabourn guests." },
    { title: "Consider the season", text: "Winter is popular for weather, while shoulder seasons can offer different advantages." },
    { title: "Research excursions before departure", text: "The best wildlife, sailing and snorkeling experiences can be popular." },
    { title: "Leave room for relaxation", text: "Don't schedule an excursion in every port." },
    { title: "Compare suite locations", text: "A balcony can enhance the Caribbean experience." },
    { title: "Consider travel insurance", text: "This is particularly important when traveling during hurricane season." },
    { title: "Work with a luxury travel advisor", text: "An experienced advisor can compare itineraries, suites, promotions, excursions and travel arrangements." },
];


const SeabournCaribbeanCruisesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeItinTab, setActiveItinTab] = useState(0);
    const [activeAudienceTab, setActiveAudienceTab] = useState(0);

    const ActiveItinIcon = itineraryRegions[activeItinTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Caribbean Cruises: Beaches, Yacht Harbors & More</title>
                <meta name="title" content="Seabourn Caribbean Cruises: Itineraries, Beaches & Marina Day" />
                <meta
                    name="description"
                    content="Explore Seabourn Caribbean cruises, including yacht harbors, secluded beaches, Marina Day, Caviar in the Surf, shore excursions, itineraries and the best time to sail."
                />
                <script type="application/ld+json">{JSON.stringify(seabournCaribbeanSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>

                <div className="Sbc-hero-content">
                    <h1>Seabourn Caribbean Cruises</h1>

                    <p>
                        A Seabourn Caribbean cruise offers a more intimate way to experience the Caribbean, combining beautiful beaches and tropical islands with Seabourn's luxury small-ship atmosphere.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The Caribbean is often associated with large cruise ships and busy resort ports. Seabourn takes a different approach, emphasizing smaller harbors, beautiful anchorages, relaxed beach experiences and destination-focused excursions.
                            </p>
                            <p>
                                Depending on the itinerary, travelers can explore islands and coastal destinations across the Caribbean while enjoying experiences such as Marina Day and the iconic Caviar in the Surf.
                            </p>
                            <p>
                                This guide covers Seabourn Caribbean itineraries, yacht harbors, beaches, Marina Day, Caviar in the Surf, shore excursions, the best time to sail and who should choose a Seabourn Caribbean cruise.
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
                            Start Planning Your Caribbean Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE (new Scc- classes) ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Scc-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Facts</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean Cruises <br /> at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-glance-table">
                        <div className="Scc-glance-row Scc-glance-head">
                            <span>Feature</span>
                            <span>Seabourn Caribbean Cruises</span>
                        </div>
                        {glanceData.map((row, i) => (
                            <div className="Scc-glance-row" key={i}>
                                <span className="Scc-glance-label">{row.label}</span>
                                <span className="Scc-glance-value">{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY TAKE A SEABOURN CARIBBEAN CRUISE ─────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Appeal</span>
                        <h2 className="Sbc-h2">Why Take a Seabourn <br /> Caribbean Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Caribbean has thousands of islands, beaches and coastal
                            communities, but not every cruise experience feels the same.
                            A Seabourn Caribbean cruise is designed for travelers who prefer:
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)' }}>
                                <h4 className="Sbc-highlights-title">A Seabourn Caribbean cruise is designed for travelers who prefer:</h4>
                                <ul className="Sbc-highlights-list">
                                    {whyChooseHighlights.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p Sbc-what-conclusion">
                                Rather than making the ship itself the main attraction, Seabourn
                                puts greater emphasis on the islands, beaches and experiences
                                outside the ship.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Palmtree size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Caribbean Cruise Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES SEABOURN CARIBBEAN CRUISES DIFFERENT ──────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Small-Ship Difference</span>
                                <h2 className="Sbc-h2">What Makes Seabourn Caribbean Cruises Different?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                The Caribbean is dominated by large cruise ships. Seabourn offers
                                a more intimate alternative. The smaller-ship experience can make
                                it possible to spend more time in destinations where the
                                atmosphere feels closer to a private yacht vacation than a
                                traditional cruise.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">The experience can include:</h4>
                                <ul className="Sbc-highlights-list">
                                    {differentList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">For travelers who have already experienced mainstream Caribbean cruising, this difference can be significant.</div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Sailboat size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">What Makes Seabourn Different Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ITINERARY OPTIONS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where To Sail</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean <br /> Itinerary Options</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn Caribbean itineraries vary by season and sailing. Some
                            voyages focus heavily on beach destinations, while others combine
                            island stops with cultural and historical experiences. Depending
                            on the voyage, travelers may visit destinations across the Eastern
                            Caribbean, Southern Caribbean, Lesser Antilles, British Caribbean,
                            French Caribbean, Dutch Caribbean and Caribbean coastal regions.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: 'center' }}>
                            {itineraryRegions.map((dest, i) => {
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
                                    {itineraryRegions[activeItinTab].title} Travel Image
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Region</span>
                                <h3 className="Sbc-dest-tab-title">
                                    {itineraryRegions[activeItinTab].subtitle}
                                </h3>
                                <p className="Sbc-dest-tab-desc">
                                    {itineraryRegions[activeItinTab].desc}
                                </p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">
                                        {itineraryRegions[activeItinTab].listLabel}
                                    </h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {itineraryRegions[activeItinTab].listItems.map((item, j) => (
                                            <li key={j}>
                                                <Check size={16} strokeWidth={2.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {itineraryRegions[activeItinTab].best && (
                                    <div className="Sbc-dest-best-strategy">
                                        <p>{itineraryRegions[activeItinTab].best}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 1.5 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Itinerary Assistance</span>
                    <h3 className="Sbc-cta-title">Find Your Perfect Caribbean Sailing</h3>
                    <p className="Sbc-cta-text">
                        From Eastern harbors to Southern hideaways, let us help you find the itinerary, suite and pace that matches your style.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak With a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── YACHT HARBORS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Anchor size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Caribbean Yacht Harbors Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Small-Ship Ports</span>
                                <h2 className="Sbc-h2">Seabourn Caribbean Yacht Harbors</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                One of the strongest advantages of a smaller luxury ship is the
                                ability to experience yacht-style harbors and smaller coastal
                                destinations. These settings can feel very different from the
                                large commercial cruise terminals found in major Caribbean ports.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">A yacht harbor experience can provide:</h4>
                                <ul className="Sbc-highlights-list">
                                    {harborBenefits.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">This is especially attractive to travelers who prefer the feeling of arriving by private yacht.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY SMALLER HARBORS MATTER ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-not-fit">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <span className="Sbc-eyebrow">Beyond the Famous Ports</span>
                            <h2 className="Sbc-h2">Why Smaller Harbors Matter</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            A Caribbean destination isn't necessarily better because it is
                            famous. Some of the most memorable experiences can come from
                            smaller ports where you can:
                        </p>
                    </div>

                    <div className="Sbc-notfit-grid">
                        {smallPortList.map((item, i) => (
                            <div className="Sbc-notfit-item-card" key={i} style={{ border: 'none' }}>
                                <div className="Sbc-notfit-x-wrapper" style={{ background: "rgba(16, 185, 129, 0.12)", color: "#10b981" }}>
                                    <Check size={14} strokeWidth={2.5} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="Sbc-p" style={{ textAlign: "center", marginTop: "28px" }}>
                        This is where the small-ship advantage becomes particularly noticeable.
                    </p>
                </div>
            </section>

            {/* ── BEACHES ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Sun & Sand</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean Beaches</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Beaches are naturally one of the biggest attractions of the
                            Caribbean. Depending on the itinerary and destination, travelers
                            can experience white-sand beaches, secluded coves, turquoise water,
                            coral reefs, calm swimming areas, beach clubs and private or
                            semi-private beach experiences. The "best" beach depends on what
                            you want — the excursion description is often more useful than the
                            beach's popularity alone.
                        </p>
                    </div>

                    <div className="Ssc-card-grid">
                        {beachCards.map((card, i) => {
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

            {/* ── MARINA DAY ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Your Floating Beach Club</span>
                                <h2 className="Sbc-h2">Seabourn Marina Day</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Marina Day is one of the experiences that can make a Seabourn
                                Caribbean cruise feel different from a conventional cruise. The
                                ship's marina can become a hub for watersports and relaxation
                                when conditions allow. It creates the feeling of having your own
                                floating beach club.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Depending on the sailing and local conditions, guests may enjoy:</h4>
                                <ul className="Sbc-highlights-list">
                                    {["Swimming directly from the ship", "Kayaking", "Paddleboarding", "Water activities", "Sunbathing and relaxing near the water"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Weather, sea conditions and local regulations determine whether Marina Day can operate.</div>
                            </div>

                            <div className="Sbc-qa-warning-box" style={{ marginTop: "20px" }}>
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                                    <span>
                                        Marina Day is part of Seabourn's onboard experience when conditions permit. The availability of individual watersports and activities can vary by sailing.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Waves size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Marina Day Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Signature Experiences</span>
                    <h3 className="Sbc-cta-title">Reserve Your Marina Day & Caviar in the Surf</h3>
                    <p className="Sbc-cta-text">
                        Let us help you choose a sailing where Seabourn's most memorable
                        Caribbean moments are on the itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Available Sailings
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── CAVIAR IN THE SURF ────────────────────────────────────── */}
            <section className="Scc-caviar-section" id="Sbc-wellness">
                <div className="Scc-caviar-container">
                    {/* Top layout: Introduction & Combines Card */}
                    <div className="Scc-caviar-layout">
                        <div className="Scc-caviar-main-content">
                            <div className="Scc-caviar-header">
                                <span className="Scc-caviar-eyebrow">Signature Experience</span>
                                <h2 className="Scc-caviar-title">Seabourn Caviar in the Surf</h2>
                                <div className="Scc-caviar-accent-line"></div>
                            </div>
                            <p className="Scc-caviar-intro-text">
                                Caviar in the Surf is one of Seabourn's most recognizable signature experiences.
                                It is designed to combine Seabourn's luxury identity with the Caribbean's natural environment.
                            </p>

                            <div className="Scc-caviar-combines-box">
                                <span className="Scc-caviar-combines-subtitle">The event combines:</span>
                                <div className="Scc-caviar-combines-grid">
                                    {[
                                        { label: "Caviar", icon: Gem },
                                        { label: "Champagne", icon: Wine },
                                        { label: "Beach scenery", icon: Palmtree },
                                        { label: "Ocean water", icon: Waves },
                                        { label: "A relaxed tropical setting", icon: Sun },
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div className="Scc-caviar-combine-item" key={idx}>
                                                <div className="Scc-caviar-combine-icon-wrapper">
                                                    <IconComponent size={18} />
                                                </div>
                                                <span className="Scc-caviar-combine-label">{item.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="Scc-caviar-visual-col">
                            <div className="Scc-caviar-visual-card">
                                <div className="Scc-caviar-visual-overlay"></div>
                                <div className="Scc-caviar-visual-content">
                                    <div className="Scc-caviar-visual-icon-glow">
                                        <Wine size={48} className="Scc-caviar-visual-icon" />
                                    </div>
                                    <span className="Scc-caviar-visual-tag">Ultra-Luxury</span>
                                    <h4 className="Scc-caviar-visual-title">Caviar & Champagne in the Surf</h4>
                                    <p className="Scc-caviar-visual-caption">A floating surf-side bar served by Seabourn's white-gloved staff.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom grid: 3-column detail section */}
                    <div className="Scc-caviar-details-grid">
                        {/* Card 1: What is it */}
                        <div className="Scc-caviar-detail-card">
                            <div className="Scc-caviar-card-header">
                                <div className="Scc-caviar-card-icon-wrap">
                                    <Sparkles size={22} />
                                </div>
                                <h3 className="Scc-caviar-card-title">What Is Caviar in the Surf?</h3>
                            </div>
                            <p className="Scc-caviar-card-text">
                                Rather than serving caviar exclusively in an elegant dining room, Seabourn takes the experience outdoors.
                                Guests can enjoy caviar and Champagne in a beach setting while surrounded by tropical scenery.
                            </p>
                            <div className="Scc-caviar-contrast-badge">
                                <span>Luxury dining</span>
                                <span className="Scc-caviar-plus-icon">+</span>
                                <span>Caribbean beach life</span>
                            </div>
                            <div className="Scc-caviar-card-info-box">
                                <AlertCircle size={14} className="Scc-caviar-info-icon" />
                                <span>Subject to destination, weather and operational conditions.</span>
                            </div>
                        </div>

                        {/* Card 2: Is it included */}
                        <div className="Scc-caviar-detail-card">
                            <div className="Scc-caviar-card-header">
                                <div className="Scc-caviar-card-icon-wrap">
                                    <Award size={22} />
                                </div>
                                <h3 className="Scc-caviar-card-title">Is Caviar in the Surf Included?</h3>
                            </div>
                            <p className="Scc-caviar-card-text">
                                When offered as part of a Seabourn Signature Event, the experience is generally part of the cruise experience rather than a separately purchased restaurant meal.
                            </p>
                            <div className="Scc-caviar-card-middle-content">
                                <ul className="Scc-caviar-check-list">
                                    <li>
                                        <Check size={16} className="Scc-caviar-check-icon" />
                                        <span>No extra cover charge</span>
                                    </li>
                                    <li>
                                        <Check size={16} className="Scc-caviar-check-icon" />
                                        <span>Complimentary premium bubbles</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="Scc-caviar-card-info-box">
                                <AlertCircle size={14} className="Scc-caviar-info-icon" />
                                <span>Availability depends on the itinerary and conditions.</span>
                            </div>
                        </div>

                        {/* Card 3: Why it's popular */}
                        <div className="Scc-caviar-detail-card">
                            <div className="Scc-caviar-card-header">
                                <div className="Scc-caviar-card-icon-wrap">
                                    <Heart size={22} />
                                </div>
                                <h3 className="Scc-caviar-card-title">Why Caviar in the Surf Is Popular</h3>
                            </div>
                            <p className="Scc-caviar-card-text">
                                The experience works because it combines two things that normally feel completely different: ultra-luxury dining and casual beach life.
                                You can spend the morning swimming in Caribbean water and later enjoy caviar and Champagne on the beach.
                            </p>
                            <div className="Scc-caviar-quote-box">
                                <p className="Scc-caviar-quote">
                                    "For many travelers, it becomes one of the defining memories of the cruise."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* ── SHORE EXCURSIONS ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-experiences">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond the Beach</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean Shore Excursions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn offers a wide range of ways to explore the Caribbean
                            beyond the beach.
                        </p>
                    </div>

                    <div className="Sbc-exp-grid">
                        {excursionCategories.map((card, i) => {
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
                                        <span className="Sbc-exp-features-title">Excursion categories can include:</span>
                                        <div className="Sbc-exp-tags">
                                            {card.tags.map((tag, idx) => (
                                                <span key={idx} className="Sbc-exp-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── BEST EXCURSIONS FOR FIRST-TIME VISITORS (new numbered list) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Scc-first-timers">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">First Time in the Caribbean?</span>
                        <h2 className="Sbc-h2">Best Seabourn Caribbean Excursions for First-Time Visitors</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            If you're visiting the Caribbean for the first time, consider
                            combining different types of experiences.
                        </p>
                    </div>

                    <div className="Scc-numbered-list">
                        {firstTimeTips.map((tip, i) => (
                            <div className="Scc-numbered-item" key={i}>
                                <span className="Scc-numbered-index">{i + 1}</span>
                                <div className="Scc-numbered-content">
                                    <h4 className="Scc-numbered-title">{tip.title}</h4>
                                    <p className="Scc-numbered-text">{tip.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHO IT'S GOOD FOR (beach/food/couples/solo/families) ─── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Seabourn Caribbean <br /> Is Best For</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-best-tabs-nav-container">
                        <div className="Scc-best-tabs-nav">
                            {audienceCards.map((card, i) => {
                                const IconComponent = card.icon;
                                const tabLabel = card.title.replace("Seabourn Caribbean for ", "");
                                return (
                                    <button
                                        key={i}
                                        className={`Scc-best-tab-btn${activeAudienceTab === i ? " active" : ""}`}
                                        onClick={() => setActiveAudienceTab(i)}
                                    >
                                        <IconComponent size={18} />
                                        <span>{tabLabel}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="Scc-best-tab-content-container">
                        {(() => {
                            const card = audienceCards[activeAudienceTab];
                            const IconComponent = card.icon;
                            return (
                                <div className="Scc-best-tab-content">
                                    <div className="Scc-best-tab-image-wrapper">
                                        <div className="Scc-best-tab-image-overlay"></div>
                                        <div className="Scc-best-tab-image-placeholder">
                                            <div className="Scc-best-tab-placeholder-icon-wrap">
                                                <IconComponent size={48} />
                                            </div>
                                            <span className="Scc-best-tab-placeholder-caption">{card.placeholderText}</span>
                                        </div>
                                    </div>
                                    <div className="Scc-best-tab-body">
                                        <h3 className="Scc-best-tab-title">{card.title}</h3>
                                        <p className="Scc-best-tab-text">{card.desc}</p>

                                        {card.listTitle && <span className="Scc-best-tab-list-title">{card.listTitle}</span>}

                                        <div className="Scc-best-tab-tags-container">
                                            {card.items.map((item, idx) => (
                                                <span className="Scc-best-tab-tag" key={idx}>
                                                    <Check size={12} className="Scc-best-tab-check" />
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        {card.conclusion && (
                                            <p className="Scc-best-tab-conclusion-text">
                                                {card.conclusion}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* ── CTA 1.7 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Travel Planning</span>
                    <h3 className="Sbc-cta-title">Plan Your Custom Caribbean Getaway</h3>
                    <p className="Sbc-cta-text">
                        Whether you want to lounge on white sand beaches, kayak through mangroves, or enjoy gourmet dining, we can guide you to the perfect fit.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning My Voyage
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── BEST TIME TO SAIL ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timing Your Trip</span>
                        <h2 className="Sbc-h2">Best Time for a <br /> Seabourn Caribbean Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The Caribbean cruise season operates throughout much of the year,
                            but the most popular period is generally winter through early
                            spring.
                        </p>
                    </div>

                    <div className="Ssc-card-grid">
                        {seasonCards.map((card, i) => {
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

                    <div className="Sbc-compare-key">
                        <p><strong>Is winter the best time?</strong> For many travelers, winter is the easiest season to recommend because it combines warm Caribbean weather with an appealing escape from colder climates elsewhere. Travelers looking for lower prices or fewer visitors may prefer other months.</p>
                        <p><strong>Caribbean hurricane season:</strong> The Atlantic hurricane season officially runs from June through November. Cruise itineraries can be adjusted when tropical weather threatens a destination — travelers should purchase appropriate travel insurance and remain flexible.</p>
                    </div>

                    <div className="Sbc-brand-highlights" style={{ marginTop: "32px" }}>
                        <h4 className="Sbc-highlights-title">Caribbean weather — expect:</h4>
                        <ul className="Sbc-highlights-list">
                            {weatherList.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="Sbc-p" style={{ marginTop: "18px" }}>Lightweight clothing and strong sun protection are essential.</p>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO PACK (reused Sbc-includes-grid) ───────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-includes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Packing Guide</span>
                        <h2 className="Sbc-h2">What to Pack for a Seabourn Caribbean Cruise</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-includes-grid">
                        {packingData.map((cat, i) => (
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
                            <strong>Should you bring snorkeling gear?</strong> It can be useful
                            if snorkeling is a major interest. However, equipment availability
                            varies by excursion and sailing.
                        </p>
                        <p>
                            If you have your own mask and snorkel that fit well, bringing them
                            can be worthwhile.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SCENIC CRUISING / BALCONY ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Views From the Ship</span>
                                <h2 className="Sbc-h2">Seabourn Caribbean Scenic Cruising</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Not every memorable moment happens ashore. The Caribbean is
                                beautiful from the ship as well. Scenic cruising can reveal
                                tropical islands, mountains, beaches, small fishing villages,
                                turquoise water and dramatic coastlines.
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Is a balcony worth it? For many travelers, yes.</h4>
                                <ul className="Sbc-highlights-list">
                                    {["Drink morning coffee", "Watch the coastline", "Enjoy the sunset", "Relax after an excursion", "Watch the ship approach a harbor"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">A private veranda provides a quiet place for these moments.</div>
                            </div>
                            <p className="Sbc-p" style={{ marginTop: "16px" }}>
                                However, Caribbean weather is warm and tropical, so you'll
                                likely spend plenty of time in public outdoor areas as well.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Camera size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Caribbean Scenic Cruising Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN VS LARGE-SHIP CARIBBEAN CRUISES ──────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ocean-vs-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean vs. Large-Ship Caribbean Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">The right choice depends on your travel style.</p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Seabourn Caribbean Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Seabourn</h3>
                            <p className="Sbc-compare-sub">A more intimate way to experience the Caribbean:</p>
                            <ul className="Sbc-compare-list">
                                {compareData.seabourn.map((item, i) => (
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
                            <p className="Sbc-compare-sub">The traditional mega-ship Caribbean experience:</p>
                            <ul className="Sbc-compare-list">
                                {compareData.large.map((item, i) => (
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

            {/* ── CTA 1.9 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Intimate Yacht Cruising</span>
                    <h3 className="Sbc-cta-title">Experience the Yachting Lifestyle</h3>
                    <p className="Sbc-cta-text">
                        Skip the crowds and queues of mega-ships. Sail into the heart of the Caribbean's boutique harbors on Seabourn.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Intimate Cruising
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── IS IT ALL-INCLUSIVE ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Is Seabourn Caribbean All-Inclusive Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Inclusions</span>
                                <h2 className="Sbc-h2">Is Seabourn Caribbean All-Inclusive?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                Seabourn offers an inclusive luxury cruise experience. Depending
                                on the sailing, the fare can include:
                            </p>

                            <div className="Sbc-qa-card">
                                <ul className="Sbc-highlights-list">
                                    {inclusiveList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Some shore excursions, premium services and optional experiences may cost extra. Always check the specific cruise fare before booking.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ─────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Dining is a major part of the onboard experience. After a day at
                            the beach, the ability to return to a sophisticated dining
                            environment is one of the advantages of luxury cruising.
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

            {/* ── IS IT WORTH THE MONEY ─────────────────────────────────── */}
            <section className="Scc-worth-section" id="Sbc-worth-it-2">
                <div className="Scc-worth-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Value Proposition</span>
                        <h2 className="Sbc-h2">Is a Seabourn Caribbean Cruise Worth the Money?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-worth-split">
                        <div className="Scc-worth-content">
                            <p className="Scc-worth-intro">
                                For travelers who value intimacy, personalized service, luxury
                                accommodations and unique beach experiences, Seabourn can
                                justify its premium.
                            </p>
                            <p className="Scc-worth-subtitle">
                                The value isn't simply about visiting Caribbean islands. It comes from combining:
                            </p>

                            <div className="Scc-worth-value-block">
                                <h4 className="Scc-worth-value-title">What you're paying for:</h4>
                                <div className="Scc-worth-tags-grid">
                                    {worthList.map((item, i) => (
                                        <div key={i} className="Scc-worth-tag-item">
                                            <div className="Scc-worth-tag-dot"></div>
                                            <span className="Scc-worth-tag-label">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="Scc-worth-value-desc">
                                The experience is particularly compelling for travelers who have
                                already experienced traditional Caribbean cruises and want
                                something more refined.
                            </p>
                        </div>

                        <div className="Scc-worth-image-col">
                            <div className="Scc-worth-image-wrapper">
                                <div className="Scc-worth-image-overlay"></div>
                                <div className="Scc-worth-image-placeholder">
                                    <div className="Scc-worth-placeholder-icon-wrap">
                                        <div className="Scc-worth-ring Scc-ring-1"></div>
                                        <div className="Scc-worth-ring Scc-ring-2"></div>
                                        <Gem size={48} className="Scc-worth-placeholder-icon" />
                                    </div>
                                    <span className="Scc-worth-placeholder-caption">Seabourn Caribbean Value</span>
                                    <span className="Scc-worth-placeholder-sub">Intimate Small-Ship Luxury Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Caribbean Pros and Cons</h2>
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

            {/* ── CTA 2 ──────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Find Your Ideal Caribbean Sailing</h3>
                    <p className="Sbc-cta-text">
                        Let's compare itinerary routes, suite categories, and seasonal
                        pricing to find the right Seabourn Caribbean cruise for you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── WHO SHOULD BOOK / WHO MAY PREFER ANOTHER ──────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-for-2">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Decision Time</span>
                        <h2 className="Sbc-h2">Who Should Book a Seabourn Caribbean Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-decision-grid">
                        <div className="Scc-decision-card Scc-decision-suited">
                            <div className="Scc-decision-card-header">
                                <div className="Scc-decision-icon-wrap">
                                    <Heart size={20} />
                                </div>
                                <h3 className="Scc-decision-title">Who Should Book Seabourn</h3>
                            </div>
                            <div className="Scc-decision-card-body">
                                <p className="Scc-decision-subtitle">
                                    Seabourn Caribbean cruises are particularly suited to travelers who:
                                </p>
                                <ul className="Scc-decision-list">
                                    {bookForList.map((item, j) => (
                                        <li key={j} className="Scc-decision-item">
                                            <div className="Scc-decision-bullet Scc-bullet-check">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Scc-decision-card Scc-decision-prefer-another">
                            <div className="Scc-decision-card-header">
                                <div className="Scc-decision-icon-wrap">
                                    <X size={20} />
                                </div>
                                <h3 className="Scc-decision-title">Who May Prefer Another Cruise</h3>
                            </div>
                            <div className="Scc-decision-card-body">
                                <p className="Scc-decision-subtitle">
                                    A larger cruise line may be a better choice if your priorities include:
                                </p>
                                <ul className="Scc-decision-list">
                                    {preferAnotherList.map((item, i) => (
                                        <li key={i} className="Scc-decision-item">
                                            <div className="Scc-decision-bullet Scc-bullet-x">
                                                <X size={12} strokeWidth={3} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="Scc-decision-conclusion">
                        Seabourn offers a fundamentally different type of Caribbean vacation.
                    </p>
                </div>
            </section>

            {/* ── TIPS FOR CHOOSING THE RIGHT ITINERARY (numbered) ─────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Planning Advice</span>
                        <h2 className="Sbc-h2">Tips for Choosing the Right Seabourn Caribbean Itinerary</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-numbered-list Scc-numbered-list--twocol">
                        {itineraryTips.map((tip, i) => (
                            <div className="Scc-numbered-item" key={i}>
                                <span className="Scc-numbered-index">{i + 1}</span>
                                <div className="Scc-numbered-content">
                                    <h4 className="Scc-numbered-title">{tip.title}</h4>
                                    <p className="Scc-numbered-text">{tip.text}</p>
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




            {/* ── FAQ ────────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn
                            Caribbean cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Caribbean Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Caribbean cruises are an excellent choice for travelers
                            who want the Caribbean to feel more like a luxury yacht vacation
                            than a traditional mega-ship cruise. The combination of beautiful
                            beaches, smaller harbors, tropical scenery, Marina Day, Caviar in
                            the Surf and personalized service creates a distinctly Seabourn
                            approach to the region.
                        </p>
                        <p className="Sbc-p">
                            For travelers who want to spend their days swimming, exploring
                            islands and relaxing in beautiful surroundings rather than
                            participating in a huge onboard entertainment program, Seabourn
                            can be an excellent fit.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your ideal Caribbean
                                vacation combines beaches, yacht-style harbors, watersports,
                                fine dining and sophisticated luxury, a Seabourn Caribbean
                                cruise deserves serious consideration.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Caribbean Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournCaribbeanCruisesGuide;