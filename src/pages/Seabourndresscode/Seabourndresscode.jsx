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
    Sun,
    Moon,
    Gem,
    Compass,
    Landmark,
    Mountain,
    Snowflake,
    Home,
    MapPin,
    Luggage,
    Briefcase,
    Palmtree,
    Info,
    Square,
    Shirt,
    Utensils,
    Globe,
    Calendar,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";

import { Helmet } from "react-helmet-async";
import "./SeabournDressCode.css";

/* ── Schema (from source content, unchanged) ───────────────────── */
const seabournDressCodeSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/dress-code/",
            name: "Seabourn Dress Code & Packing Guide: What to Wear",
            headline: "Seabourn Dress Code: What to Wear and What to Pack",
            description:
                "What should you wear on a Seabourn cruise? See Seabourn's daytime, Elegant Casual and formal dress codes, plus destination-specific packing tips for Alaska, Antarctica, Europe and more.",
            keywords: [
                "Seabourn dress code",
                "Seabourn packing list",
                "what to wear on Seabourn",
                "Seabourn formal night",
                "Seabourn formal evening",
                "Seabourn elegant casual",
                "Seabourn dress code for men",
                "Seabourn dress code for women",
                "Seabourn cruise packing list",
                "Seabourn evening attire",
                "Seabourn formal night dress",
                "Seabourn Alaska packing list",
                "Seabourn Antarctica packing list",
                "Seabourn expedition packing list",
                "Seabourn Mediterranean packing list",
                "what to pack for a Seabourn cruise",
                "are jeans allowed on Seabourn",
                "does Seabourn have formal nights",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#guide",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Dress Code", item: "https://www.tripsandships.com/seabourn-cruises/dress-code/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#guide",
            name: "Seabourn Dress Code and Packing Guide",
            description:
                "A practical guide to Seabourn's daytime, Elegant Casual and formal evening dress codes, plus cruise packing lists and destination-specific clothing recommendations.",
            url: "https://www.tripsandships.com/seabourn-cruises/dress-code/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Daytime Dress Code", value: "Casual, resort-style attire" },
                { "@type": "PropertyValue", name: "Evening Dress Code", value: "Elegant Casual after 6 p.m." },
                { "@type": "PropertyValue", name: "Formal Evenings", value: "Applicable on Seabourn Quest, Seabourn Encore and Seabourn Ovation" },
                { "@type": "PropertyValue", name: "Expedition Ships", value: "Seabourn Venture and Seabourn Pursuit have zero formal evenings" },
                { "@type": "PropertyValue", name: "Jeans", value: "Elegant jeans are welcome in dining venues, subject to formal-evening restrictions" },
                { "@type": "PropertyValue", name: "Men's Evening Attire", value: "Slacks with a collared shirt or sweater; jacket optional for Elegant Casual" },
                { "@type": "PropertyValue", name: "Women's Evening Attire", value: "Slacks, skirts, blouses, pantsuits or dresses" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#dress-code",
            name: "Seabourn Dress Code Categories",
            description: "The main dress-code categories described in the Seabourn dress code guide.",
            numberOfItems: 3,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Daytime Casual", description: "Casual, resort-style clothing is appropriate during the day, including jeans and shorts." },
                { "@type": "ListItem", position: 2, name: "Elegant Casual", description: "After 6 p.m., Seabourn's standard is Elegant Casual, including slacks and a collared shirt or sweater for men and slacks, skirts, blouses, pantsuits or dresses for women." },
                { "@type": "ListItem", position: 3, name: "Formal Evening", description: "Formal attire applies in The Restaurant on applicable Seabourn ocean ships. Seabourn Venture and Seabourn Pursuit have no formal evenings." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#formal-ships",
            name: "Seabourn Ships with Formal Evenings",
            description: "Seabourn ships identified in the guide as having formal evenings.",
            numberOfItems: 3,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Seabourn Quest", description: "Formal evenings may apply in The Restaurant." },
                { "@type": "ListItem", position: 2, name: "Seabourn Encore", description: "Formal evenings may apply in The Restaurant." },
                { "@type": "ListItem", position: 3, name: "Seabourn Ovation", description: "Formal evenings may apply in The Restaurant." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#packing-destinations",
            name: "Seabourn Destination Packing Guides",
            description: "Destination-specific packing priorities covered in the Seabourn dress code and packing guide.",
            numberOfItems: 9,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Mediterranean", description: "Light layers and comfortable walking shoes, with consideration for cultural dress requirements." },
                { "@type": "ListItem", position: 2, name: "Caribbean", description: "Lightweight clothing and swimwear." },
                { "@type": "ListItem", position: 3, name: "Alaska", description: "Warm layers and weather protection, including waterproof footwear and cold-weather accessories." },
                { "@type": "ListItem", position: 4, name: "Antarctica", description: "Thermal and waterproof expedition layers, including appropriate polar accessories." },
                { "@type": "ListItem", position: 5, name: "Arctic and Greenland", description: "Insulation, waterproof clothing and expedition-ready layers." },
                { "@type": "ListItem", position: 6, name: "Kimberley", description: "Breathable clothing, sun protection and practical expedition footwear." },
                { "@type": "ListItem", position: 7, name: "Tropical Expeditions", description: "Quick-drying clothing, breathable layers, sun protection and rain protection." },
                { "@type": "ListItem", position: 8, name: "Northern Europe", description: "Layered clothing and rain protection." },
                { "@type": "ListItem", position: 9, name: "World Cruise", description: "A versatile capsule wardrobe designed to cover multiple climates and destinations." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#packing-essentials",
            name: "Seabourn Cruise Packing Essentials",
            description: "Essential items recommended in the Seabourn cruise packing guide.",
            numberOfItems: 5,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Travel Documents", description: "Passport, visas if required, cruise documents, travel insurance documents and copies of important travel information." },
                { "@type": "ListItem", position: 2, name: "Electronics", description: "Smartphone, charger, camera, batteries, memory cards and appropriate travel adapters." },
                { "@type": "ListItem", position: 3, name: "Personal Items", description: "Prescription medications, toiletries, sunglasses, sunscreen, hat and a small first-aid kit." },
                { "@type": "ListItem", position: 4, name: "Useful Extras", description: "Foldable tote bag, laundry bag, zip-lock bags, small sewing kit and comfortable daypack." },
                { "@type": "ListItem", position: 5, name: "Carry-On Essentials", description: "Keep important documents, medications, electronics, chargers and a change of clothes in your carry-on." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dress-code/#faq",
            mainEntity: [
                { "@type": "Question", name: "What is the dress code on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Seabourn's daytime dress code is casual resort-style. After 6 p.m., the standard is Elegant Casual, with formal evenings on some ocean ships." } },
                { "@type": "Question", name: "Is Seabourn formal?", acceptedAnswer: { "@type": "Answer", text: "Seabourn is generally elegant rather than continuously formal. Most evenings are Elegant Casual, while certain ocean ships schedule formal evenings." } },
                { "@type": "Question", name: "Does Seabourn have formal nights?", acceptedAnswer: { "@type": "Answer", text: "Yes, on Seabourn Quest, Seabourn Encore and Seabourn Ovation. Seabourn Venture and Seabourn Pursuit have no formal evenings." } },
                { "@type": "Question", name: "How many formal nights are on a Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "As a general rule, voyages up to 13 days have one formal evening, 14–20 days have two, and voyages of 21 days or more have three. World Cruises and special voyages can follow different schedules." } },
                { "@type": "Question", name: "Can I wear jeans on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Elegant jeans are welcome in dining venues, although jeans are not appropriate in The Restaurant after 6 p.m. on formal evenings." } },
                { "@type": "Question", name: "Do men need a jacket on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "A jacket is optional for the regular Elegant Casual evening dress code. A jacket, suit or tuxedo is required for men dining in The Restaurant on applicable formal evenings." } },
                { "@type": "Question", name: "Do women need a dress on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "No. Women can wear slacks, skirts, blouses, pantsuits or dresses during Elegant Casual evenings." } },
                { "@type": "Question", name: "Do I need a tuxedo for Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Only if you want to wear one for a formal evening. Seabourn also permits a suit or slacks and jacket for men on formal evenings in The Restaurant." } },
                { "@type": "Question", name: "What should I pack for a Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "Pack versatile casual clothing, Elegant Casual evening attire, comfortable walking shoes, swimwear, exercise clothing, weather-appropriate layers and formalwear if your ship and itinerary require it." } },
                { "@type": "Question", name: "What should I pack for a Seabourn Alaska cruise?", acceptedAnswer: { "@type": "Answer", text: "Pack warm layers, weather protection and comfortable footwear. Seabourn provides a destination-specific Alaska packing list and currently provides guests with a complimentary all-weather jacket." } },
                { "@type": "Question", name: "What should I pack for a Seabourn Antarctica cruise?", acceptedAnswer: { "@type": "Answer", text: "Bring thermal base layers, insulating clothing, waterproof outerwear and expedition accessories. Seabourn provides additional polar packing guidance and expedition gear." } },
                { "@type": "Question", name: "Can I wear shorts on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shorts are appropriate during the daytime, but resort-style swimwear and similar pool attire should be restricted to appropriate areas." } },
                { "@type": "Question", name: "Can I wear a swimsuit to the dining room?", acceptedAnswer: { "@type": "Answer", text: "No. Seabourn recommends reserving swimsuits, brief shorts and cover-ups for the pool, deck, spa and fitness areas." } },
                { "@type": "Question", name: "What shoes should I pack for Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Bring comfortable walking shoes, casual shoes or sandals, and dress shoes. Expedition cruises may require specialized footwear depending on the destination." } },
                { "@type": "Question", name: "How can I avoid overpacking for Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Build a capsule wardrobe using neutral colors, layers and clothing that can work for multiple occasions. Seabourn also recommends using laundry services on longer voyages." } },
                { "@type": "Question", name: "What should I pack for a Seabourn World Cruise?", acceptedAnswer: { "@type": "Answer", text: "Pack a versatile capsule wardrobe capable of handling multiple climates. World Cruises can cross several climate zones, so layering and multi-purpose clothing are especially important." } },
                { "@type": "Question", name: "Do Seabourn expedition cruises have formal nights?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture and Seabourn Pursuit have zero formal evenings, making expedition packing considerably more relaxed." } },
                { "@type": "Question", name: "Where can I find Seabourn's official packing list?", acceptedAnswer: { "@type": "Answer", text: "Seabourn provides a general packing list as well as destination-specific lists for regions including Alaska, Antarctica and the Arctic, Kimberley, the tropics and Northern Europe." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq classes) ─────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is the dress code on Seabourn?", a: "Seabourn's daytime dress code is casual resort-style. After 6 p.m., the standard is Elegant Casual, with formal evenings on some ocean ships." },
        { q: "Is Seabourn formal?", a: "Seabourn is generally elegant rather than continuously formal. Most evenings are Elegant Casual, while certain ocean ships schedule formal evenings." },
        { q: "Does Seabourn have formal nights?", a: "Yes, on Seabourn Quest, Seabourn Encore and Seabourn Ovation. Seabourn Venture and Seabourn Pursuit have no formal evenings." },
        { q: "How many formal nights are on a Seabourn cruise?", a: "As a general rule, voyages up to 13 days have one formal evening, 14–20 days have two, and voyages of 21 days or more have three. World Cruises and special voyages can follow different schedules." },
        { q: "Can I wear jeans on Seabourn?", a: "Yes. Elegant jeans are welcome in dining venues, although jeans are not appropriate in The Restaurant after 6 p.m. on formal evenings." },
        { q: "Do men need a jacket on Seabourn?", a: "A jacket is optional for the regular Elegant Casual evening dress code. A jacket, suit or tuxedo is required for men dining in The Restaurant on applicable formal evenings." },
        { q: "Do women need a dress on Seabourn?", a: "No. Women can wear slacks, skirts, blouses, pantsuits or dresses during Elegant Casual evenings." },
        { q: "Do I need a tuxedo for Seabourn?", a: "Only if you want to wear one for a formal evening. Seabourn also permits a suit or slacks and jacket for men on formal evenings in The Restaurant." },
        { q: "What should I pack for a Seabourn cruise?", a: "Pack versatile casual clothing, Elegant Casual evening attire, comfortable walking shoes, swimwear, exercise clothing, weather-appropriate layers and formalwear if your ship and itinerary require it." },
        { q: "What should I pack for a Seabourn Alaska cruise?", a: "Pack warm layers, weather protection and comfortable footwear. Seabourn provides a destination-specific Alaska packing list and currently provides guests with a complimentary all-weather jacket." },
        { q: "What should I pack for a Seabourn Antarctica cruise?", a: "Bring thermal base layers, insulating clothing, waterproof outerwear and expedition accessories. Seabourn provides additional polar packing guidance and expedition gear." },
        { q: "Can I wear shorts on Seabourn?", a: "Yes. Shorts are appropriate during the daytime, but resort-style swimwear and similar pool attire should be restricted to appropriate areas." },
        { q: "Can I wear a swimsuit to the dining room?", a: "No. Seabourn recommends reserving swimsuits, brief shorts and cover-ups for the pool, deck, spa and fitness areas." },
        { q: "What shoes should I pack for Seabourn?", a: "Bring comfortable walking shoes, casual shoes or sandals, and dress shoes. Expedition cruises may require specialized footwear depending on the destination." },
        { q: "How can I avoid overpacking for Seabourn?", a: "Build a capsule wardrobe using neutral colors, layers and clothing that can work for multiple occasions. Seabourn also recommends using laundry services on longer voyages." },
        { q: "What should I pack for a Seabourn World Cruise?", a: "Pack a versatile capsule wardrobe capable of handling multiple climates. World Cruises can cross several climate zones, so layering and multi-purpose clothing are especially important." },
        { q: "Do Seabourn expedition cruises have formal nights?", a: "Seabourn Venture and Seabourn Pursuit have zero formal evenings, making expedition packing considerably more relaxed." },
        { q: "Where can I find Seabourn's official packing list?", a: "Seabourn provides a general packing list as well as destination-specific lists for regions including Alaska, Antarctica and the Arctic, Kimberley, the tropics and Northern Europe." },
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
const categoryCards = [
    { icon: Sun, title: "Daytime Casual", text: "Casual, resort-style clothing is welcome, including shorts and jeans, in lounges and dining venues during the day." },
    { icon: Moon, title: "Elegant Casual", text: "After 6 p.m., the standard changes to Elegant Casual — slacks and a collared shirt or sweater for men, and slacks, skirts, blouses, pantsuits or dresses for women." },
    { icon: Gem, title: "Formal Evening", text: "Some Seabourn ocean ships also have formal evenings in The Restaurant, while Seabourn Venture and Seabourn Pursuit have zero formal evenings." },
];

const quickGuideRows = [
    { name: "Daytime onboard", text: "Casual, resort-style" },
    { name: "Lounges during the day", text: "Casual clothing, including jeans and shorts" },
    { name: "Pool / spa", text: "Swimwear and cover-up" },
    { name: "Fitness center", text: "Exercise clothing" },
    { name: "After 6 p.m.", text: "Elegant Casual" },
    { name: "Men – evening", text: "Slacks + collared shirt or sweater" },
    { name: "Women – evening", text: "Slacks, skirt, blouse, pantsuit or dress" },
    { name: "Elegant jeans", text: "Welcome in dining venues" },
    { name: "Formal evening", text: "Formalwear required in The Restaurant on applicable ships" },
    { name: "Venture & Pursuit", text: "No formal evenings" },
    { name: "Shore excursions", text: "Comfortable, weather-appropriate clothing" },
];

const daytimeItems = ["Polo shirts", "Blouses", "Casual shirts", "T-shirts", "Jeans", "Chinos", "Shorts", "Casual skirts", "Sundresses", "Lightweight trousers", "Comfortable walking shoes", "Sandals", "Sneakers"];

const poolItems = ["Pool", "Deck", "Spa", "Fitness center"];

const eveningComboCards = [
    { title: "Men — Option 1", text: "Dark trousers + collared shirt + loafers." },
    { title: "Men — Option 2", text: "Chinos + dress shirt + lightweight jacket." },
    { title: "Women — Option 1", text: "Dress + flats." },
    { title: "Women — Option 2", text: "Tailored trousers + blouse + elegant sandals." },
];

const eveningMenItems = ["Slacks", "Collared dress shirt", "Sweater", "Jacket optional"];
const eveningWomenItems = ["Slacks", "Skirt", "Blouse", "Pantsuit", "Dress"];

const formalShipsYes = ["Seabourn Quest", "Seabourn Encore", "Seabourn Ovation"];
const formalShipsNo = ["Seabourn Venture", "Seabourn Pursuit"];
const formalMenItems = ["Tuxedo", "Suit", "Slacks and jacket"];
const formalWomenItems = ["Evening gown", "Other formal apparel"];

const formalNightsTable = [
    { name: "Up to 13 days", text: "1 formal evening" },
    { name: "14–20 days", text: "2 formal evenings" },
    { name: "21+ days", text: "3 formal evenings" },
    { name: "Venture / Pursuit", text: "0 formal evenings" },
];

const menPacking = [
    { title: "Daywear", items: ["3–5 casual shirts", "2–3 polo shirts", "2–3 pairs of shorts", "2–3 pairs of casual trousers", "Jeans", "Lightweight sweater", "Comfortable walking shoes", "Casual sandals"] },
    { title: "Evening", items: ["2–3 collared dress shirts", "Dark trousers", "Loafers or dress shoes", "Sports jacket", "Optional sweater"] },
    { title: "Formal Evening", items: ["Dark suit or tuxedo", "Dress shirt", "Dress shoes", "Appropriate accessories"] },
];

const womenPacking = [
    { title: "Daywear", items: ["Blouses", "Tops", "Shirts", "Lightweight trousers", "Skirts", "Shorts", "Sundresses", "Comfortable walking shoes", "Sandals"] },
    { title: "Evening", items: ["2–3 dresses", "Elegant trousers", "Blouses", "Pantsuit or coordinated separates", "Dressy sandals or shoes", "Lightweight wrap or jacket"] },
    { title: "Formal Evening", items: ["Evening dress", "Formal gown", "Dressy accessories", "Evening shoes", "Clutch"] },
];

const essentialsCategories = [
    { title: "Travel Documents", items: ["Passport", "Visas if required", "Cruise documents", "Travel insurance documents", "Copies of important travel information"] },
    { title: "Electronics", items: ["Smartphone", "Charger", "Camera", "Camera batteries", "Memory cards", "Appropriate travel adapters"] },
    { title: "Personal Items", items: ["Prescription medications", "Toiletries", "Sunglasses", "Sunscreen", "Hat", "Small first-aid kit"] },
    { title: "Useful Extras", items: ["Foldable tote bag", "Laundry bag", "Zip-lock bags", "Small sewing kit", "Comfortable daypack"] },
];

const carryOnItems = ["Passport", "Cruise documents", "Medications", "Phone", "Charger", "Wallet", "Travel insurance information", "Sunglasses", "Essential toiletries", "Change of clothes", "Important valuables"];

const capsuleExamples = [
    { title: "One lightweight jacket can work with:", text: "Jeans during the day, trousers at dinner, and a dress on a cool evening." },
    { title: "One neutral pair of walking shoes can work for:", text: "Airport travel, port exploration and casual onboard activities." },
];

const shoeTypes = [
    { num: "1", title: "Comfortable walking shoes", text: "For shore excursions and cities." },
    { num: "2", title: "Casual shoes or sandals", text: "For relaxed onboard days." },
    { num: "3", title: "Dress shoes", text: "For evening dining." },
    { num: "4", title: "Outdoor or specialized footwear", text: "Only if your destination requires it." },
];

const destinations = [
    {
        icon: Landmark, title: "Mediterranean", subtitle: "Seabourn Mediterranean Cruise Packing List",
        desc: "Mediterranean cruises can involve significant differences between hot afternoons, cool evenings and cultural sites.",
        listLabel: "Pack:",
        listItems: ["Lightweight trousers", "Shorts", "Sundresses", "Breathable tops", "Comfortable walking shoes", "Sandals", "Lightweight sweater", "Scarf or wrap", "Sun hat", "Sunglasses", "Evening outfit", "Light rain jacket"],
        best: "For cultural sites, modest clothing can be important. Seabourn specifically advises travelers to consider local customs when going ashore, including dress expectations at religious sites.",
    },
    {
        icon: Mountain, title: "Alaska", subtitle: "Seabourn Alaska Packing List",
        desc: "Alaska requires a more layered approach than warmer-weather itineraries.",
        listLabel: "Consider:",
        listItems: ["Waterproof outer layer", "Warm sweater", "Base layers", "Comfortable walking shoes", "Waterproof footwear", "Gloves", "Hat", "Sunglasses", "Casual onboard clothing", "Evening attire"],
        best: "Seabourn provides a destination-specific Alaska packing list and currently notes that guests on Alaska voyages receive a complimentary all-weather jacket, which can save valuable luggage space.",
    },
    {
        icon: Snowflake, title: "Antarctica", subtitle: "Seabourn Antarctica Packing List",
        desc: "Antarctica is completely different from a Mediterranean or Caribbean cruise and calls for expedition-specific clothing.",
        listLabel: "You'll need:",
        listItems: ["Thermal base layers", "Insulating mid-layers", "Waterproof pants", "Waterproof outerwear", "Warm socks", "Gloves", "Warm hat", "Neck protection", "Sunglasses", "Expedition-ready accessories"],
        best: "Seabourn's official Antarctica and Arctic packing guidance recommends mid-weight thermal layers and expedition clothing designed to provide warmth without excessive bulk, and also provides complimentary expedition gear for qualifying polar voyages, including waterproof expedition boots that are fitted onboard.",
    },
    {
        icon: Compass, title: "Arctic & Greenland", subtitle: "Seabourn Arctic and Greenland Packing",
        desc: "Arctic and Greenland voyages call for a combination of layering, waterproofing and warmth.",
        listLabel: "Your packing list should include:",
        listItems: ["Thermal base layers", "Fleece or insulating layer", "Waterproof jacket", "Waterproof trousers", "Warm socks", "Gloves", "Hat", "Neck warmer", "Waterproof backpack", "Sunglasses", "Comfortable expedition clothing"],
        best: "The exact requirements should be checked against Seabourn's destination-specific packing list before departure.",
    },
    {
        icon: Anchor, title: "Kimberley", subtitle: "Seabourn Kimberley Packing List",
        desc: "The Kimberley requires a very different approach from polar cruising, prioritizing breathability and sun protection.",
        listLabel: "Prioritize:",
        listItems: ["Lightweight breathable clothing", "Sun protection", "Comfortable walking shoes", "Sandals", "Sun hat", "Sunglasses", "Lightweight rain protection", "Daypack", "Swimwear", "Casual evening clothing"],
        best: "For expedition destinations, comfortable footwear and practical clothing are generally more important than bringing extensive formalwear.",
    },
    {
        icon: Palmtree, title: "Tropical Expeditions", subtitle: "Seabourn Tropical Expedition Packing",
        desc: "Tropical expeditions require clothing that handles heat, humidity, sun and occasional rain.",
        listLabel: "Useful items include:",
        listItems: ["Breathable shirts", "Quick-drying trousers", "Shorts", "Rash guard", "Sun hat", "Waterproof hat", "Comfortable walking shoes", "Water sandals", "Lightweight waterproof backpack", "Sunglasses", "Sunscreen", "Insect repellent where appropriate"],
        best: "Seabourn's tropical expedition packing guidance specifically recommends breathable, quick-drying performance clothing and protective accessories.",
    },
    {
        icon: Ship, title: "World Cruise", subtitle: "Seabourn World Cruise Packing",
        desc: "A World Cruise is one of the hardest Seabourn voyages to pack for, since you may move from Antarctica to the Mediterranean to Asia to the tropics during the same extended voyage. The solution is not simply bringing more clothes — it's bringing more versatile clothes.",
        listLabel: "Seabourn's World Cruise packing guidance recommends:",
        listItems: ["Capsule wardrobe", "Neutral colors", "Multi-purpose clothing", "Layering", "Limited footwear", "Accessories that serve multiple functions"],
        best: "It also recommends using onboard laundry services to reduce how much you need to pack.",
    },
];

const overpackItems = ["Multiple formal gowns", "Several heavy jackets on warm itineraries", "Excessive shoes", "A completely different outfit for every day", "Large quantities of toiletries", "Too many accessories"];

const destinationPriorityTable = [
    { name: "Mediterranean", text: "Light layers + comfortable walking shoes" },
    { name: "Caribbean", text: "Lightweight clothing + swimwear" },
    { name: "Alaska", text: "Warm layers + weather protection" },
    { name: "Antarctica", text: "Thermal + waterproof expedition layers" },
    { name: "Arctic / Greenland", text: "Insulation + waterproof clothing" },
    { name: "Kimberley", text: "Breathable clothing + sun protection" },
    { name: "Tropics", text: "Quick-dry clothing + rain protection" },
    { name: "Northern Europe", text: "Layers + rain protection" },
    { name: "World Cruise", text: "Capsule wardrobe covering multiple climates" },
];

const mistakesList = [
    { name: "Mistake 1: Packing too much formalwear", text: "Most evenings are Elegant Casual." },
    { name: "Mistake 2: Ignoring the destination", text: "Alaska and Antarctica require dramatically different clothing from the Mediterranean." },
    { name: "Mistake 3: Bringing uncomfortable shoes", text: "You'll likely walk considerably more ashore than you expect." },
    { name: "Mistake 4: Forgetting layers", text: "Weather can change during the day." },
    { name: "Mistake 5: Packing essentials in checked luggage", text: "Keep medications, documents and chargers in your carry-on." },
    { name: "Mistake 6: Ignoring local customs", text: "Religious and cultural sites can have their own dress expectations." },
    { name: "Mistake 7: Packing too many shoes", text: "Choose versatile footwear instead." },
];

const menChecklist = [
    { title: "Day", items: ["Polo shirts", "Casual shirts", "Shorts", "Jeans", "Chinos", "Walking shoes", "Sandals"] },
    { title: "Evening", items: ["Collared shirts", "Dress trousers", "Sweater", "Loafers", "Sports jacket"] },
    { title: "Formal evening, if applicable", items: ["Suit or tuxedo", "Dress shirt", "Dress shoes", "Formal accessories"] },
];

const womenChecklist = [
    { title: "Day", items: ["Tops", "Blouses", "Shorts", "Skirts", "Sundresses", "Casual trousers", "Walking shoes", "Sandals"] },
    { title: "Evening", items: ["Dresses", "Blouses", "Elegant trousers", "Skirt", "Pantsuit", "Dressy shoes", "Wrap or light jacket"] },
    { title: "Formal evening, if applicable", items: ["Evening dress", "Formal outfit", "Dress shoes", "Evening bag", "Accessories"] },
];

const finalChecklist = [
    { title: "Documents", items: ["Passport", "Visa documents", "Cruise documents", "Travel insurance", "Emergency contact information"] },
    { title: "Clothing", items: ["Casual clothing", "Evening clothing", "Formal outfit if applicable", "Swimwear", "Cover-up", "Exercise clothing", "Weather layers", "Comfortable walking shoes", "Dress shoes"] },
    { title: "Accessories", items: ["Sunglasses", "Sun hat", "Handbag/daypack", "Belt", "Scarf/wrap", "Travel adapter"] },
    { title: "Health & Essentials", items: ["Prescription medications", "Toiletries", "Sunscreen", "First-aid supplies", "Motion-sickness remedies"] },
    { title: "Electronics", items: ["Phone", "Charger", "Camera", "Batteries", "Memory cards"] },
];



const laundryHighlights = [
    { icon: Globe, label: "World Cruises" },
    { icon: Ship, label: "Grand Voyages" },
    { icon: Calendar, label: "21+ Day Cruises" },
    { icon: Compass, label: "Expedition Itineraries" },
];

/* ── Component ─────────────────────────────────────────────────── */
const SeabournDressCodeGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeDestTab, setActiveDestTab] = useState(0);
    const ActiveIcon = destinations[activeDestTab].icon;

    return (
        <div>
            <Helmet>
                <title>Seabourn Dress Code: What to Wear & What to Pack</title>
                <meta name="title" content="Seabourn Dress Code: What to Wear & What to Pack" />
                <meta
                    name="description"
                    content="What should you wear on a Seabourn cruise? See Seabourn's daytime, elegant casual and formal dress codes, plus destination-specific packing tips for Alaska, Antarctica, Europe and more."
                />
                <script type="application/ld+json">{JSON.stringify(seabournDressCodeSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (referenced from Cruise Cost hero) ────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Dress Code: What to Wear and What to Pack</h1>

                    <p>
                        What should you wear on a Seabourn cruise?
                    </p>
                    <p>
                        Seabourn's dress code is more relaxed than many travelers expect from an ultra-luxury cruise line. During the day, casual resort-style clothing is welcome, including shorts and jeans. After 6 p.m., the standard changes to Elegant Casual, with slacks and a collared shirt or sweater for men and slacks, skirts, blouses, pantsuits or dresses for women.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Some Seabourn ocean ships also have formal evenings in The Restaurant, while Seabourn Venture and Seabourn Pursuit have zero formal evenings.
                            </p>
                            <p>
                                The key to packing well for Seabourn is to build a versatile wardrobe that moves easily between sightseeing, relaxed sea days, elegant dinners and destination-specific activities.
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

            {/* ── DOES SEABOURN HAVE A DRESS CODE? ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-dresscode-overview">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Does Seabourn Have a Dress Code?</span>
                        <h2 className="Sbc-h2">Three Practical Categories</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Yes, but it is relatively straightforward. Seabourn divides onboard attire into three practical categories, which means you don't need a completely different wardrobe for every evening — a well-planned capsule wardrobe can cover most of the voyage.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {categoryCards.map((card, i) => {
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

            {/* ── QUICK DRESS CODE GUIDE (reused Sbc-vs-list as a table) ─ */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-quick-guide">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At a Glance</span>
                        <h2 className="Sbc-h2">Quick Seabourn Dress Code Guide</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's official packing guidance recommends adapting clothing to the destination and layering for changing weather.
                        </p>
                    </div>

                    <div className="Sdc-table-wrap">
                        <table className="Sdc-table">
                            <thead>
                                <tr>
                                    <th>Situation / Venue</th>
                                    <th>Dress Code &amp; Guidelines</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickGuideRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Situation / Venue"><strong>{row.name}</strong></td>
                                        <td data-label="Dress Code &amp; Guidelines">{row.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── DAYTIME DRESS CODE ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-daytime">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Casual, Resort-Style</span>
                        <h2 className="Sbc-h2">Seabourn Daytime Dress Code</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            During the day, Seabourn describes its dress standard as casual, resort-style attire. Shorts and jeans are welcome in lounges and dining venues during the daytime. For warmer itineraries, breathable fabrics are particularly useful; for cooler destinations, lightweight layers give you more flexibility.
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights">
                        <h4 className="Sbc-highlights-title">Good daytime choices include:</h4>
                        <ul className="Sbc-highlights-list">
                            {daytimeItems.map((item, i) => (
                                <li key={i}>
                                    <Check size={16} strokeWidth={2} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── POOL / SPA WEAR ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-pool">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Poolside & Wellness</span>
                        <h2 className="Sbc-h2">What Should You Wear <br /> Around the Pool?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Swimsuits, brief shorts, cover-ups and exercise clothing should be reserved for appropriate areas. They are not appropriate for regular dining venues.
                        </p>
                    </div>

                    <div className="Sdc-pool-grid">
                        <div className="Sdc-pack-card">
                            <div className="Sdc-pack-card-header">
                                <div className="Sdc-pack-icon-circle">
                                    <Waves size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="Sdc-pack-card-title-custom">Where Pool &amp; Spa Attire is Welcomed</h3>
                            </div>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                Swimsuits, cover-ups, brief shorts, and exercise wear should be reserved for the appropriate wellness and recreation spaces:
                            </p>
                            <ul>
                                {poolItems.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Check size={16} strokeWidth={2.5} style={{ color: 'var(--navy)' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sdc-pack-card">
                            <div className="Sdc-pack-card-header">
                                <div className="Sdc-pack-icon-circle">
                                    <Sun size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="Sdc-pack-card-title-custom">Recommended Poolside Attire</h3>
                            </div>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>
                                <strong>A simple poolside combination:</strong> swimsuit + cover-up + sandals + sunglasses + hat.
                            </p>
                            <div className="Sdc-note-highlight">
                                <Info size={18} style={{ color: 'var(--navy)', flexShrink: 0, marginTop: '2px' }} />
                                <p className="Sbc-p" style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.5' }}>
                                    Keep a lightweight layer nearby if you expect to move between outdoor decks and indoor air-conditioned spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EVENING DRESS CODE (ELEGANT CASUAL) ─────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-evening">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">After 6 P.M.</span>
                        <h2 className="Sbc-h2">Seabourn Evening Dress Code</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbcq-suite-split">
                        <div className="Sbcq-suite-content" style={{ gap: "24px" }}>
                            <p className="Sbc-intro" style={{ margin: 0 }}>
                                After 6 p.m., Seabourn's standard becomes Elegant Casual. Seabourn also states that elegant jeans are welcome in dining venues — useful for travelers who want to look polished without packing a formal wardrobe every night.
                            </p>

                            <div className="Sdc-evening-cards-stack">
                                <div className="Sdc-pack-card">
                                    <h3 className="Sdc-pack-card-title">For Men</h3>
                                    <ul>
                                        {eveningMenItems.map((item, i) => (
                                            <li key={i}>
                                                <Shirt size={16} strokeWidth={1.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="Sdc-pack-card">
                                    <h3 className="Sdc-pack-card-title">For Women</h3>
                                    <ul>
                                        {eveningWomenItems.map((item, i) => (
                                            <li key={i}>
                                                <Shirt size={16} strokeWidth={1.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="Sbcq-suite-image-container">
                            <div className="Sbcq-suite-image-placeholder">
                                <div className="Sbcq-suite-placeholder-icon-wrapper">
                                    <Shirt size={44} strokeWidth={1.5} />
                                </div>
                                <span className="Sbcq-suite-placeholder-text">Seabourn Evening Attire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT DOES ELEGANT CASUAL MEAN ────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-elegant-casual">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Polished + Comfortable + Sophisticated</span>
                        <h2 className="Sbc-h2">What Does "Elegant Casual" <br /> Mean on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Think polished, comfortable and sophisticated — rather than black tie or a formal ball gown. The goal is to look appropriately dressed for a luxury dining environment without feeling overdressed.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {eveningComboCards.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Not Sure What to Pack?</h3>
                    <p className="Sbc-cta-text">
                        Let's go over your exact itinerary, ship and cabin category so you know precisely what to bring — from daytime casual to formal night.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── CAN YOU WEAR JEANS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-jeans">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A Common Question</span>
                        <h2 className="Sbc-h2">Can You Wear Jeans on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Yes. Seabourn's current dress-code guidance specifically says elegant jeans are welcome in all dining venues. So you can pack your favorite jeans — but make sure you have an alternative for formal nights.
                        </p>
                    </div>

                    <div className="Sdc-note-box">
                        <Info size={18} strokeWidth={2} />
                        <p>
                            <strong>Important exception:</strong> On formal evenings, jeans are not appropriate in The Restaurant after 6 p.m. on Seabourn Quest, Seabourn Encore and Seabourn Ovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FORMAL NIGHTS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-formal-nights">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Formal Evenings</span>
                        <h2 className="Sbc-h2">Does Seabourn Have <br /> Formal Nights?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Some Seabourn ships do. For the applicable ships, formal attire is required in The Restaurant, while other dining venues remain Elegant Casual on formal evenings.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sdc-pack-card">
                            <h3 className="Sdc-pack-card-title">Ships With Formal Evenings</h3>
                            <ul>
                                {formalShipsYes.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sdc-pack-card">
                            <h3 className="Sdc-pack-card-title">Ships With No Formal Evenings</h3>
                            <ul>
                                {formalShipsNo.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2" style={{ marginTop: "28px" }}>
                        <div className="Sdc-pack-card">
                            <h3 className="Sdc-pack-card-title">Men — Formal Evening</h3>
                            <ul>
                                {formalMenItems.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sdc-pack-card">
                            <h3 className="Sdc-pack-card-title">Women — Formal Evening</h3>
                            <ul>
                                {formalWomenItems.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW MANY FORMAL NIGHTS ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-formal-count">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">A General Guideline</span>
                        <h2 className="Sbc-h2">How Many Formal Nights <br /> Does Seabourn Have?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-vs-list">
                        {formalNightsTable.map((row, i) => (
                            <div className="Sbc-vs-row" key={i}>
                                <div className="Sbc-vs-name">{row.name}</div>
                                <p className="Sbc-vs-desc">{row.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="Sdc-note-box" style={{ marginTop: "24px" }}>
                        <Info size={18} strokeWidth={2} />
                        <p>
                            Seabourn notes that World Cruises, Grand Voyages, Holiday voyages and Crossings may follow different schedules. Your boarding-pass information will provide the formal-evening details for your specific voyage — this is why you should check your actual sailing information before finalizing your packing list.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── MEN'S PACKING LIST ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-men-pack">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Packing List</span>
                        <h2 className="Sbc-h2">What Should Men Pack <br /> for a Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's official packing list specifically recommends sweaters, shirts, slacks, shorts, a sports jacket and a tuxedo or dark suit, with the latter optional on expedition ships.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {menPacking.map((cat, i) => (
                            <div className="Sdc-pack-card" key={i}>
                                <h3 className="Sdc-pack-card-title">{cat.title}</h3>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}>
                                            <Luggage size={14} strokeWidth={1.5} style={{ color: 'var(--navy)', marginTop: '4px', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WOMEN'S PACKING LIST ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-women-pack">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Packing List</span>
                        <h2 className="Sbc-h2">What Should Women Pack <br /> for a Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's official packing list recommends blouses, tops, shirts, jackets, sweaters or wraps, skirts, slacks, shorts, informal cocktail/dinner attire and evening or cocktail dresses.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {womenPacking.map((cat, i) => (
                            <div className="Sdc-pack-card" key={i}>
                                <h3 className="Sdc-pack-card-title">{cat.title}</h3>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}>
                                            <Luggage size={14} strokeWidth={1.5} style={{ color: 'var(--navy)', marginTop: '4px', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PACKING ESSENTIALS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-essentials">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Beyond Clothing</span>
                        <h2 className="Sbc-h2">Seabourn Packing List: Essentials</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Don't forget the basics. Seabourn recommends keeping important travel documents, medications, chargers and a change of clothes in your carry-on.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {essentialsCategories.map((cat, i) => (
                            <div className="Sbc-includes-card" key={i}>
                                <div className="Sbc-includes-title">{cat.title}</div>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CARRY-ON ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-carryon">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Pack Smart</span>
                        <h2 className="Sbc-h2">What Should You Keep <br /> in Your Carry-On?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbcq-suite-split">
                        <div className="Sbcq-suite-content" style={{ gap: "24px" }}>
                            <p className="Sbc-intro" style={{ margin: 0 }}>
                                Your checked luggage may not immediately be available when you board. Keep essential items with you.
                            </p>

                            <div className="Sdc-carryon-list-container">
                                <h4 className="Sbc-highlights-title" style={{ marginBottom: "12px" }}>Keep with you:</h4>
                                <ul className="Sdc-two-col-list">
                                    {carryOnItems.map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Briefcase size={16} strokeWidth={2} style={{ color: 'var(--navy)', flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Sdc-note-highlight" style={{ marginTop: "8px" }}>
                                <Info size={18} style={{ color: 'var(--navy)', flexShrink: 0, marginTop: '2px' }} />
                                <p className="Sbc-p" style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.5' }}>
                                    Seabourn's packing guidance specifically recommends a carry-on with a change of clothing and keeping prescription medications and important electronics in the carry-on.
                                </p>
                            </div>
                        </div>

                        <div className="Sbcq-suite-image-container">
                            <div className="Sbcq-suite-image-placeholder">
                                <div className="Sbcq-suite-placeholder-icon-wrapper">
                                    <Briefcase size={44} strokeWidth={1.5} />
                                </div>
                                <span className="Sbcq-suite-placeholder-text">Carry-On Essentials</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CAPSULE WARDROBE STRATEGY ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-capsule">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Pack Less, Wear More</span>
                        <h2 className="Sbc-h2">Seabourn Packing Strategy: <br /> Build a Capsule Wardrobe</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the best ways to avoid overpacking is to choose clothes that work in multiple combinations. This approach becomes especially valuable on longer voyages. Seabourn's own World Cruise packing guidance recommends a cohesive capsule wardrobe and choosing pieces that serve more than one purpose.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {capsuleExamples.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW MANY SHOES ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-shoes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Footwear</span>
                        <h2 className="Sbc-h2">How Many Shoes Should You Pack?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Shoes can quickly make luggage unnecessarily heavy. For most Seabourn cruises, a practical selection covers the essentials. For expedition cruises, footwear requirements can be significantly different.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {shoeTypes.map((shoe, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <span className="Sdc-card-num">{shoe.num}</span>
                                </div>
                                <h3 className="Sbc-card-title">{shoe.title}</h3>
                                <p className="Sbc-card-text">{shoe.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Every Region Is Different</span>
                    <h3 className="Sbc-cta-title">Sailing Somewhere Specific?</h3>
                    <p className="Sbc-cta-text">
                        From Antarctica to the Mediterranean, we'll help you pack the right layers for your exact Seabourn itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Talk Through Your Itinerary
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── DESTINATION PACKING LISTS (reused Sbc-dest-tabs) ─────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-dest-packing">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Pack by Destination</span>
                        <h2 className="Sbc-h2">Seabourn Dress Code by Destination</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The destination-specific packing requirements can differ substantially, so Seabourn recommends using its dedicated packing lists for expedition and special-region voyages.
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
                                    {destinations[activeDestTab].title} Packing
                                </span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Destination Packing List</span>
                                <h3 className="Sbc-dest-tab-title">{destinations[activeDestTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{destinations[activeDestTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{destinations[activeDestTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {destinations[activeDestTab].listItems.map((item, j) => (
                                            <li key={j}><Check size={16} strokeWidth={2.5} /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>

                                {destinations[activeDestTab].best && (
                                    <div className="Sbc-dest-best-strategy">
                                        <p>{destinations[activeDestTab].best}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TUXEDO / SKIP FORMALWEAR ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-tuxedo">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Formalwear Questions</span>
                        <h2 className="Sbc-h2">Do You Need a Tuxedo on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon">
                                <Shirt size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sbc-card-title">Do You Need a Tuxedo?</h3>
                            <p className="Sbc-card-text">
                                Only if your itinerary includes a formal evening and you want to dine in The Restaurant on that evening. On Quest, Encore and Ovation, Seabourn permits formal attire such as a tuxedo, suit or slacks and jacket for men in The Restaurant. On Venture and Pursuit, there are no formal evenings. If you're unsure, check the formal-evening information for your exact voyage.
                            </p>
                        </div>
                        <div className="Sbc-card">
                            <div className="Sbc-card-icon">
                                <Luggage size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sbc-card-title">Can You Skip Formalwear?</h3>
                            <p className="Sbc-card-text">
                                If your voyage has a formal evening, you can plan your evening around venues that follow the Elegant Casual standard rather than the formal standard in The Restaurant. If you want the full dining choice on a formal evening, packing appropriate formalwear gives you more flexibility. For shorter cruises, this may mean bringing one versatile formal outfit rather than an extensive formal wardrobe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT NOT TO OVERPACK ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-overpack">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Pack Smart, Not Heavy</span>
                        <h2 className="Sbc-h2">What Not to Overpack for Seabourn</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Instead, prioritize pieces that can be mixed and matched.
                        </p>
                    </div>

                    <div className="Sdc-single-card-wrap">
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">You Probably Don't Need</h3>
                            <ul>
                                {overpackItems.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LAUNDRY AND PACKING LESS ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-laundry">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Pack Less</span>
                        <h2 className="Sbc-h2">Laundry and Packing Less</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Longer Seabourn voyages make laundry especially useful. Seabourn's current packing guidance recommends taking advantage of laundry services to reduce overpacking, particularly on long voyages. This can make a major difference on:
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {laundryHighlights.map((hl, i) => {
                            const Icon = hl.icon;
                            return (
                                <div className="Sdc-laundry-card" key={i}>
                                    <div className="Sdc-laundry-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="Sdc-laundry-label">{hl.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHAT TO WEAR ASHORE ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-ashore">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Going Ashore</span>
                        <h2 className="Sbc-h2">What Should You Wear Ashore?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbcq-suite-split">
                        <div className="Sbcq-suite-content" style={{ gap: "24px" }}>
                            <p className="Sbc-intro" style={{ margin: 0 }}>
                                Your onboard dress code does not automatically apply everywhere you visit. Before leaving the ship, consider:
                            </p>

                            <div className="Sdc-ashore-tags-container">
                                {["Weather", "Walking requirements", "Local customs", "Religious sites", "Terrain", "Sun exposure", "Transportation"].map((item, i) => (
                                    <span className="Sdc-ashore-tag" key={i}>
                                        <MapPin size={14} strokeWidth={2} />
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="Sdc-note-highlight" style={{ marginTop: "8px" }}>
                                <Info size={18} style={{ color: 'var(--navy)', flexShrink: 0, marginTop: '2px' }} />
                                <p className="Sbc-p" style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.5' }}>
                                    Seabourn specifically advises travelers to be aware of local customs and notes that some religious sites may expect women to wear dresses or skirts and may restrict shorts for men and women.
                                </p>
                            </div>
                        </div>

                        <div className="Sbcq-suite-image-container">
                            <div className="Sbcq-suite-image-placeholder">
                                <div className="Sbcq-suite-placeholder-icon-wrapper">
                                    <MapPin size={44} strokeWidth={1.5} />
                                </div>
                                <span className="Sbcq-suite-placeholder-text">Exploring Ashore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DRESS CODE BY DESTINATION TABLE ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-dest-priority">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Reference Table</span>
                        <h2 className="Sbc-h2">Packing Priority by Destination</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sdc-table-wrap">
                        <table className="Sdc-table">
                            <thead>
                                <tr>
                                    <th>Destination / Voyage Type</th>
                                    <th>Packing Priority &amp; Guidelines</th>
                                </tr>
                            </thead>
                            <tbody>
                                {destinationPriorityTable.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Destination / Voyage Type"><strong>{row.name}</strong></td>
                                        <td data-label="Packing Priority &amp; Guidelines">{row.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── PACKING MISTAKES TO AVOID ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-mistakes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Learn From Others</span>
                        <h2 className="Sbc-h2">Seabourn Packing Mistakes to Avoid</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-vs-list">
                        {mistakesList.map((row, i) => (
                            <div className="Sbc-vs-row" key={i}>
                                <div className="Sbc-vs-name">{row.name}</div>
                                <p className="Sbc-vs-desc">{row.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Skip the Guesswork</span>
                    <h3 className="Sbc-cta-title">Let Us Help You Pack Right</h3>
                    <p className="Sbc-cta-text">
                        Share your ship, cabin category and itinerary, and we'll walk you through exactly what belongs in your suitcase.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Personalized Packing Advice
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── QUICK CHECKLISTS: MEN / WOMEN ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-quick-checklists">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Print &amp; Pack</span>
                        <h2 className="Sbc-h2">Quick Dress Code Checklists</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <h3 className="Sbc-h3" style={{ textAlign: "center", marginBottom: "24px" }}>Seabourn Dress Code for Men</h3>
                    <div className="Sbc-card-grid" style={{ marginBottom: "48px" }}>
                        {menChecklist.map((cat, i) => (
                            <div className="Sdc-pack-card Sdc-checklist" key={i}>
                                <h3 className="Sdc-pack-card-title">{cat.title}</h3>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}><Square size={15} strokeWidth={2} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h3 className="Sbc-h3" style={{ textAlign: "center", marginBottom: "24px" }}>Seabourn Dress Code for Women</h3>
                    <div className="Sbc-card-grid">
                        {womenChecklist.map((cat, i) => (
                            <div className="Sdc-pack-card Sdc-checklist" key={i}>
                                <h3 className="Sdc-pack-card-title">{cat.title}</h3>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}><Square size={15} strokeWidth={2} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL PACKING CHECKLIST ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-final-checklist">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Go</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Packing Checklist</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-includes-grid">
                        {finalChecklist.map((cat, i) => (
                            <div className="Sbc-includes-card" key={i}>
                                <div className="Sbc-includes-title">{cat.title}</div>
                                <ul>
                                    {cat.items.map((item, j) => (
                                        <li key={j}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Dress Code</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before packing for a Seabourn cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>



            {/* ── FINAL ANSWER / VERDICT ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-final-answer">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Answer</span>
                        <h2 className="Sbc-h2">What Should You Wear on a Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            The simplest answer is: dress comfortably and elegantly, but don't overpack. During the day, Seabourn is relaxed and resort-style. After 6 p.m., dress Elegant Casual. On applicable Quest, Encore and Ovation voyages, bring formalwear if you want to dine in The Restaurant on formal evenings. And if you're sailing on Venture or Pursuit, you can leave the tuxedo or formal gown at home because those ships have no formal evenings.
                        </p>
                        <p className="Sbc-p">
                            For Alaska, Antarctica, Arctic, Kimberley and tropical expeditions, follow Seabourn's dedicated regional packing guidance rather than using a generic cruise packing list.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>For the best packing strategy, think:</strong> Daytime comfort + Elegant Casual evenings + destination-specific layers.
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

export default SeabournDressCodeGuide;