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
    Gem,
    Heart,
    Map,
    Compass,
    Home,
    Users,
    Award,
    Star,
    MapPin,
    Calendar,
    Plane,
    Building2,
    CreditCard,
    Percent,
    Car,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournCruiseCost.css";

/* ── Schema (from supplied schema data) ────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/cost/",
            name: "How Much Does a Seabourn Cruise Cost? 2026 Guide",
            headline: "How Much Does a Seabourn Cruise Cost? Complete Pricing Guide",
            description:
                "How much does a Seabourn cruise cost? Compare typical fares, suite categories, solo pricing, promotions, what's included and additional expenses in this complete guide.",
            keywords: [
                "Seabourn cruise cost",
                "How much does a Seabourn cruise cost",
                "Seabourn cruise prices",
                "Seabourn cruise cost per person",
                "Seabourn cruise fares",
                "Seabourn cruise price",
                "Seabourn suite prices",
                "Seabourn cruise cost for two",
                "Seabourn solo cruise cost",
                "Seabourn single supplement",
                "Seabourn cruise promotions",
                "Seabourn cruise deals",
                "Seabourn cruise inclusions",
                "Seabourn additional costs",
                "Seabourn luxury cruise cost",
                "Seabourn cruise price 2026",
                "Seabourn cost per night",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#pricing-guide" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Cruise Cost", item: "https://www.tripsandships.com/seabourn-cruises/cost/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#pricing-guide",
            name: "Seabourn Cruise Cost",
            description:
                "A comprehensive guide to Seabourn cruise pricing, including fares, suite categories, solo supplements, inclusions, additional expenses, promotions and cost-per-night comparisons.",
            url: "https://www.tripsandships.com/seabourn-cruises/cost/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Pricing Basis", value: "Generally per guest based on double occupancy" },
                { "@type": "PropertyValue", name: "Currency", value: "U.S. dollars" },
                { "@type": "PropertyValue", name: "Taxes and Port Expenses", value: "Included in advertised fares" },
                { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
                { "@type": "PropertyValue", name: "Dining", value: "Complimentary dining venues" },
                { "@type": "PropertyValue", name: "Premium Beverages", value: "Included" },
                { "@type": "PropertyValue", name: "Wi-Fi", value: "Included" },
                { "@type": "PropertyValue", name: "Onboard Gratuities", value: "Not required or expected" },
                { "@type": "PropertyValue", name: "Solo Pricing", value: "May involve a single supplement" },
                { "@type": "PropertyValue", name: "Promotions", value: "Varies by sailing and eligibility" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#price-factors",
            name: "Factors That Determine Seabourn Cruise Cost",
            description: "Key factors that can affect the price of a Seabourn cruise.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Cruise Length", description: "The total length of the voyage affects the overall fare and can influence the effective cost per night." },
                { "@type": "ListItem", position: 2, name: "Suite Category", description: "Seabourn's suite categories range from Oceanview and Veranda Suites to Penthouse and Premium Suites, with higher categories offering additional space and amenities." },
                { "@type": "ListItem", position: 3, name: "Destination", description: "Destination demand and itinerary can significantly influence cruise pricing." },
                { "@type": "ListItem", position: 4, name: "Time of Year", description: "Peak-season departures may command higher fares, while shoulder-season itineraries can sometimes offer better value." },
                { "@type": "ListItem", position: 5, name: "Ship", description: "Different Seabourn ships offer different itineraries and suite configurations, which can influence pricing and experience." },
                { "@type": "ListItem", position: 6, name: "Promotions", description: "Available promotions, loyalty offers, shipboard credit and reduced deposits can change the effective cost of a sailing." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#suite-categories",
            name: "Seabourn Cruise Suite Categories",
            description: "Suite categories discussed in the Seabourn cruise cost guide.",
            numberOfItems: 4,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Oceanview Suites", description: "Ocean-facing accommodation without the private veranda found on veranda categories." },
                { "@type": "ListItem", position: 2, name: "Veranda Suites", description: "Suites with private outdoor space, particularly attractive for scenic itineraries." },
                { "@type": "ListItem", position: 3, name: "Penthouse Suites", description: "Larger suites offering substantially more space and additional amenities." },
                { "@type": "ListItem", position: 4, name: "Premium Suites", description: "Higher-level suites offering additional living space and enhanced amenities." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#included",
            name: "Seabourn Cruise Fare Inclusions",
            description: "Core experiences and services described as included in applicable Seabourn cruise fares.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "All-Suite Accommodation", description: "Seabourn operates an all-suite accommodation model." },
                { "@type": "ListItem", position: 2, name: "Complimentary Dining", description: "Complimentary dining is available across Seabourn's restaurants and venues." },
                { "@type": "ListItem", position: 3, name: "Complimentary Fine Wines and Premium Spirits", description: "Fine wines and premium spirits are part of Seabourn's onboard offering." },
                { "@type": "ListItem", position: 4, name: "Complimentary Wi-Fi", description: "Seabourn currently includes complimentary Wi-Fi for bookings." },
                { "@type": "ListItem", position: 5, name: "In-Suite Bar", description: "Suites include an in-suite bar with complimentary wines or spirits, with enhanced offerings in higher categories." },
                { "@type": "ListItem", position: 6, name: "Onboard Gratuities", description: "Seabourn states that onboard gratuities are neither required nor expected." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#additional-costs",
            name: "Potential Additional Seabourn Cruise Costs",
            description: "Expenses that may remain separate from the cruise fare.",
            numberOfItems: 12,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Airfare" },
                { "@type": "ListItem", position: 2, name: "Travel Insurance" },
                { "@type": "ListItem", position: 3, name: "Shore Excursions" },
                { "@type": "ListItem", position: 4, name: "Spa Treatments" },
                { "@type": "ListItem", position: 5, name: "Boutique Purchases" },
                { "@type": "ListItem", position: 6, name: "Casino Spending" },
                { "@type": "ListItem", position: 7, name: "Private Transportation" },
                { "@type": "ListItem", position: 8, name: "Pre-Cruise Hotels" },
                { "@type": "ListItem", position: 9, name: "Post-Cruise Hotels" },
                { "@type": "ListItem", position: 10, name: "Independent Tour Gratuities" },
                { "@type": "ListItem", position: 11, name: "Airline Baggage Charges" },
                { "@type": "ListItem", position: 12, name: "Personal Expenses" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#promotions",
            name: "Seabourn Cruise Promotions",
            description: "Promotion types discussed in the Seabourn cruise cost guide.",
            numberOfItems: 7,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Early Booking Advantage" },
                { "@type": "ListItem", position: 2, name: "Savings on Select Voyages" },
                { "@type": "ListItem", position: 3, name: "Shipboard Credit" },
                { "@type": "ListItem", position: 4, name: "Reduced Deposits" },
                { "@type": "ListItem", position: 5, name: "Single-Supplement Offers" },
                { "@type": "ListItem", position: 6, name: "World Cruise Benefits" },
                { "@type": "ListItem", position: 7, name: "Combination Cruise Savings" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/cost/#faq",
            mainEntity: [
                { "@type": "Question", name: "How much does a Seabourn cruise cost?", acceptedAnswer: { "@type": "Answer", text: "Seabourn pricing varies by itinerary, cruise length, suite, sailing date and availability. Advertised fares are generally per guest based on double occupancy and include taxes, fees and port expenses." } },
                { "@type": "Question", name: "Is Seabourn expensive?", acceptedAnswer: { "@type": "Answer", text: "Seabourn is positioned in the ultra-luxury cruise market, so its upfront fares are generally higher than mainstream cruises. However, many onboard expenses are included." } },
                { "@type": "Question", name: "What does a Seabourn cruise fare include?", acceptedAnswer: { "@type": "Answer", text: "Depending on the sailing and applicable terms, Seabourn includes complimentary dining, beverages, Wi-Fi and onboard gratuities, along with all-suite accommodation." } },
                { "@type": "Question", name: "Does Seabourn include taxes and port fees?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn's current U.S. pricing terms state that advertised fares include taxes, fees and port expenses." } },
                { "@type": "Question", name: "Are drinks included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Complimentary fine wines and premium spirits are part of Seabourn's onboard offering." } },
                { "@type": "Question", name: "Is Wi-Fi included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn currently provides complimentary Wi-Fi with unlimited minutes for bookings, powered by Starlink." } },
                { "@type": "Question", name: "Are gratuities included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Onboard gratuities are not required or expected. Independent shore-excursion staff may be treated separately." } },
                { "@type": "Question", name: "How much does a Seabourn cruise cost for one person?", acceptedAnswer: { "@type": "Answer", text: "It depends on the sailing and whether a single supplement applies. Current Seabourn promotions can reduce the supplement on selected sailings." } },
                { "@type": "Question", name: "Does Seabourn have solo cruise deals?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn's current terms include a single-supplement offer as low as 125% on selected sailings, subject to availability and restrictions." } },
                { "@type": "Question", name: "Is a Seabourn Veranda Suite worth the extra cost?", acceptedAnswer: { "@type": "Answer", text: "For travelers who value private outdoor space, particularly on scenic itineraries and longer cruises, a Veranda Suite can be worth the upgrade." } },
                { "@type": "Question", name: "Are Seabourn shore excursions included?", acceptedAnswer: { "@type": "Answer", text: "Not all excursions are included. Shore excursion costs depend on the specific experience and itinerary." } },
                { "@type": "Question", name: "Does Seabourn include airfare?", acceptedAnswer: { "@type": "Answer", text: "Generally, airfare should be treated separately unless a specific promotion or voyage includes it. Certain qualifying World Cruise offers can include business-class or first-class air." } },
                { "@type": "Question", name: "Does Seabourn offer cruise promotions?", acceptedAnswer: { "@type": "Answer", text: "Yes. Current promotions can include reduced fares, shipboard credit, reduced deposits, single-supplement offers and other incentives." } },
                { "@type": "Question", name: "Can Seabourn Club members get lower prices?", acceptedAnswer: { "@type": "Answer", text: "Eligible Seabourn Club members can receive certain promotional discounts when qualifying offers are available. The current Early Booking Advantage provides a 10% reduced fare to eligible members under its terms." } },
                { "@type": "Question", name: "Does Seabourn offer shipboard credit?", acceptedAnswer: { "@type": "Answer", text: "Yes. Selected promotions provide shipboard credit, with current offers varying according to sailing and suite category." } },
                { "@type": "Question", name: "Is a longer Seabourn cruise cheaper per night?", acceptedAnswer: { "@type": "Answer", text: "Not necessarily, but longer itineraries can sometimes provide a lower effective cost per night. Compare the total fare divided by the number of nights." } },
                { "@type": "Question", name: "How much does a Seabourn World Cruise cost?", acceptedAnswer: { "@type": "Answer", text: "World Cruise pricing varies significantly according to the voyage and suite. Full World Cruise bookings can also receive additional benefits that change the overall value proposition." } },
                { "@type": "Question", name: "What additional costs should I budget for on a Seabourn cruise?", acceptedAnswer: { "@type": "Answer", text: "Plan for potential airfare, hotels, transfers, shore excursions, travel insurance, spa treatments, personal purchases and other incidental expenses." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reuses Sbc-faq classes) ──────────────────────── */
function CostFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "How much does a Seabourn cruise cost?", a: "Seabourn pricing varies by itinerary, cruise length, suite, sailing date and availability. Advertised fares are generally per guest based on double occupancy and include taxes, fees and port expenses." },
        { q: "Is Seabourn expensive?", a: "Seabourn is positioned in the ultra-luxury cruise market, so its upfront fares are generally higher than mainstream cruises. However, many onboard expenses are included." },
        { q: "What does a Seabourn cruise fare include?", a: "Depending on the sailing and applicable terms, Seabourn includes complimentary dining, beverages, Wi-Fi and onboard gratuities, along with all-suite accommodation." },
        { q: "Does Seabourn include taxes and port fees?", a: "Yes. Seabourn's current U.S. pricing terms state that advertised fares include taxes, fees and port expenses." },
        { q: "Are drinks included on Seabourn?", a: "Yes. Complimentary fine wines and premium spirits are part of Seabourn's onboard offering." },
        { q: "Is Wi-Fi included on Seabourn?", a: "Yes. Seabourn currently provides complimentary Wi-Fi with unlimited minutes for bookings, powered by Starlink." },
        { q: "Are gratuities included on Seabourn?", a: "Onboard gratuities are not required or expected. Independent shore-excursion staff may be treated separately." },
        { q: "How much does a Seabourn cruise cost for one person?", a: "It depends on the sailing and whether a single supplement applies. Current Seabourn promotions can reduce the supplement on selected sailings." },
        { q: "Does Seabourn have solo cruise deals?", a: "Yes. Seabourn's current terms include a single-supplement offer as low as 125% on selected sailings, subject to availability and restrictions." },
        { q: "Is a Seabourn Veranda Suite worth the extra cost?", a: "For travelers who value private outdoor space, particularly on scenic itineraries and longer cruises, a Veranda Suite can be worth the upgrade." },
        { q: "Are Seabourn shore excursions included?", a: "Not all excursions are included. Shore excursion costs depend on the specific experience and itinerary." },
        { q: "Does Seabourn include airfare?", a: "Generally, airfare should be treated separately unless a specific promotion or voyage includes it. Certain qualifying World Cruise offers can include business-class or first-class air." },
        { q: "Does Seabourn offer cruise promotions?", a: "Yes. Current promotions can include reduced fares, shipboard credit, reduced deposits, single-supplement offers and other incentives." },
        { q: "Can Seabourn Club members get lower prices?", a: "Eligible Seabourn Club members can receive certain promotional discounts when qualifying offers are available. The current Early Booking Advantage provides a 10% reduced fare to eligible members under its terms." },
        { q: "Does Seabourn offer shipboard credit?", a: "Yes. Selected promotions provide shipboard credit, with current offers varying according to sailing and suite category." },
        { q: "Is a longer Seabourn cruise cheaper per night?", a: "Not necessarily, but longer itineraries can sometimes provide a lower effective cost per night. Compare the total fare divided by the number of nights." },
        { q: "How much does a Seabourn World Cruise cost?", a: "World Cruise pricing varies significantly according to the voyage and suite. Full World Cruise bookings can also receive additional benefits that change the overall value proposition." },
        { q: "What additional costs should I budget for on a Seabourn cruise?", a: "Plan for potential airfare, hotels, transfers, shore excursions, travel insurance, spa treatments, personal purchases and other incidental expenses." },
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
    ["Cruise fare", "Varies by sailing and suite"],
    ["Pricing basis", "Generally per guest, double occupancy"],
    ["Taxes & port expenses", "Included in advertised fares"],
    ["Accommodation", "All-suite"],
    ["Dining", "Complimentary dining venues"],
    ["Premium beverages", "Included"],
    ["Wi-Fi", "Included"],
    ["Onboard gratuities", "Not required or expected"],
    ["Shore excursions", "Varies; additional in many cases"],
    ["Airfare", "Usually separate unless specifically included"],
    ["Hotels", "Additional unless part of a package"],
    ["Spa", "Additional"],
    ["Personal purchases", "Additional"],
    ["Solo travel", "May involve a single supplement"],
    ["Promotions", "Frequently vary by sailing"],
];

const priceFactors = [
    { icon: Calendar, title: "Cruise Length", text: "A seven-day cruise and a multi-week voyage obviously have very different total prices. However, don't compare only the total — a longer cruise can sometimes offer a more attractive cost per night, particularly when more included amenities are spread across the voyage." },
    { icon: Gem, title: "Suite Category", text: "Seabourn operates an all-suite accommodation model. Its suite categories range from Oceanview and Veranda Suites through Penthouse and Premium Suites, with higher categories providing additional space and amenities. The suite is therefore one of the biggest factors influencing your final cruise price." },
    { icon: Map, title: "Destination", text: "Itinerary demand can affect pricing. A sailing to a highly sought-after destination during peak season may cost substantially more than another itinerary of similar length. Alaska, the Mediterranean, Northern Europe, the Caribbean, Antarctica, the Arctic, Australia, Asia and the Kimberley are examples of very different cruise experiences that can have different pricing." },
    { icon: Sun, title: "Time of Year", text: "Peak-season departures can command higher fares, while shoulder-season itineraries may sometimes offer better value. However, don't choose a sailing based on price alone — weather, daylight, wildlife activity and destination conditions can make the timing of a voyage just as important." },
    { icon: Ship, title: "Ship", text: "Seabourn's ships don't all offer identical itineraries or suite configurations. Its expedition ships, Seabourn Venture and Seabourn Pursuit, are purpose-built for remote destinations, while the ocean ships offer a different style of luxury cruising. The ship can therefore influence both price and the type of experience you're purchasing." },
];

const advertisingList = [
    "Are in U.S. dollars",
    "Are per guest",
    "Are based on double occupancy",
    "Include taxes, fees and port expenses",
    "Apply to minimum lead-in suite categories",
    "Are subject to availability",
    "Can change without notice",
];

const suiteCategories = [
    { icon: Waves, title: "Oceanview Suites", text: "These provide ocean-facing accommodation without the private veranda found on veranda categories." },
    { icon: Home, title: "Veranda Suites", text: "These add private outdoor space and are particularly attractive for scenic itineraries." },
    { icon: Star, title: "Penthouse Suites", text: "These offer substantially more space and additional amenities." },
    { icon: Gem, title: "Premium Suites", text: "Higher-level suites can add even more living space and special services." },
];

const suiteAmenities = ["Personal suite host and attendant", "Walk-in closet", "Luxury bath products", "In-suite bar", "Complimentary wines or spirits", "Coffee/espresso facilities in selected categories", "Champagne on embarkation", "Wi-Fi", "Interactive entertainment", "PressReader access"];

const soloSaveList = ["Reduced single supplements", "Specific solo promotions", "Less expensive suite categories", "Shoulder-season sailings", "Less-demanded itineraries", "Seabourn Club offers where eligible"];

const includesData = [
    { title: "Dining", items: ["Complimentary dining across Seabourn's restaurants and venues"] },
    { title: "Beverages", items: ["Complimentary fine wines and premium spirits are part of the Seabourn experience"] },
    { title: "Wi-Fi", items: ["Complimentary Wi-Fi for bookings, with the Surf package powered by Starlink"] },
    { title: "In-Suite Bar", items: ["An in-suite bar with complimentary wines or spirits, with enhanced offerings in higher categories"] },
    { title: "Onboard Gratuities", items: ["Onboard gratuities are neither required nor expected"] },
];

const notIncludedList = ["Airfare", "Travel insurance", "Shore excursions", "Spa treatments", "Boutique purchases", "Casino spending", "Some private transportation", "Pre-cruise hotels", "Post-cruise hotels", "Independent tour gratuities", "Airline baggage charges", "Personal expenses"];

const excursionTypes = ["Private tours", "Premium excursions", "Cultural experiences", "Adventure activities", "Expedition experiences", "Small-group tours"];

const promotions = [
    { icon: Calendar, title: "Early Booking Advantage", text: "Seabourn's current Early Booking Advantage can provide a 10% reduced fare for eligible Seabourn Club members on qualifying new bookings made by September 17, 2026. A separate additional discount is available to eligible returning World or Grand Cruise guests under the terms of the promotion." },
    { icon: Compass, title: "Exploration Promotions", text: "Seabourn's current \"Exploration Awaits\" promotion offers up to 15% savings on select sailings booked during the promotional period. Seabourn has also announced promotions offering up to 15% savings on select summer voyages between 2026 and 2028." },
    { icon: CreditCard, title: "Shipboard Credit Promotions", text: "Some Seabourn promotions offer onboard credit rather than simply reducing the cruise fare. Current terms, for example, list an offer of up to $1,000 per suite on select sailings, with the amount varying by suite category." },
    { icon: Ship, title: "Combination Cruise Savings", text: "Travelers booking consecutive cruises on the same ship may also want to investigate combination-cruise savings. Seabourn's terms currently list combination cruise savings of up to 15% in qualifying circumstances." },
];

const valueTable = [
    ["Fare", "What is the starting price?"],
    ["Suite", "What category is included?"],
    ["Dining", "How much dining is included?"],
    ["Drinks", "What beverages are included?"],
    ["Wi-Fi", "Is internet included?"],
    ["Gratuities", "Are onboard gratuities included?"],
    ["Excursions", "What will I spend ashore?"],
    ["Flights", "Are flights separate?"],
    ["Hotels", "Do I need pre/post nights?"],
    ["Promotion", "Is there current onboard credit or discount?"],
    ["Itinerary", "Is the route worth the price?"],
];

const bestPriceTips = [
    { title: "Compare multiple sailing dates", text: "Even changing your departure date by a few weeks can produce a meaningful difference." },
    { title: "Compare suite categories", text: "Don't automatically assume the most expensive suite is necessary." },
    { title: "Watch promotions", text: "Promotions can include percentage discounts, shipboard credit or reduced deposits." },
    { title: "Check your Seabourn Club status", text: "Eligible members may receive special offers." },
    { title: "Consider shoulder season", text: "You may find better value outside the busiest periods." },
    { title: "Compare the cost per night", text: "A longer cruise can sometimes provide a better daily value." },
    { title: "Consider consecutive cruises", text: "Combination savings may apply on qualifying bookings." },
    { title: "Compare solo offers", text: "If traveling alone, a reduced single supplement can make a major difference." },
    { title: "Look beyond the cruise fare", text: "Calculate your complete trip budget before deciding." },
    { title: "Work with a luxury travel advisor", text: "A knowledgeable advisor can monitor promotions, compare suite options and help determine whether a particular fare represents good value." },
];

const bookEarlyList = ["You want a specific suite", "You want a popular itinerary", "You need multiple suites", "You're planning a World Cruise", "You need specific connecting arrangements"];
const monitorPromoList = ["You're flexible on dates", "You're flexible on suite category", "You're willing to consider alternative itineraries", "You are primarily price-sensitive"];

const mainstreamList = ["Lower entry price", "Much larger ships", "More entertainment", "More family facilities"];
const seabournOfferList = ["Smaller ships", "All suites", "Personalized service", "More included amenities", "A quieter atmosphere"];

const travelerTypes = [
    { icon: Heart, title: "Couples", items: ["Couples may find Seabourn's pricing easier to evaluate because fares are generally structured around double occupancy.", "The best value often comes from selecting the right suite rather than automatically upgrading."] },
    { icon: Users, title: "Solo Travelers", items: ["Solo travelers should focus heavily on the single supplement.", "A reduced supplement can completely change the economics of a sailing."] },
    { icon: Home, title: "Multigenerational Families", items: ["Number of suites", "Occupancy", "Children's needs", "Excursions", "Transfers", "Airfare", "Pre/post hotels"] },
    { icon: Anchor, title: "Long-Voyage Travelers", items: ["Total duration", "Cost per night", "Suite category", "Included air", "Shipboard credit", "Hotel nights", "Laundry", "Transfers", "Special events"] },
    { icon: Star, title: "First-Time Luxury Cruisers", items: ["Compare the all-in cost, not just the headline fare.", "Start with a Veranda Suite to experience the product before committing to a premium category.", "Budget for excursions, transfers and travel insurance as separate line items.", "Check whether an active promotion reduces the effective cost of your first sailing."] },
    { icon: Gem, title: "Repeat & Loyal Cruisers", items: ["Seabourn Club membership can unlock loyalty discounts on eligible sailings.", "Stacking a loyalty discount with a current promotion may require verification of eligibility.", "Repeat guests often have clearer suite preferences, making category selection more efficient.", "Consider cost-per-night comparisons across different itinerary lengths."] },
];

const worldCruiseBenefits = ["Two-night pre-cruise hotel stay", "Business-class air on qualifying routes", "Shipboard credit", "Upgraded Wi-Fi", "Medical services package", "Special events", "Laundry", "Transfers", "Exclusive dining experiences"];

const checklistGroups = [
    { title: "Cruise Fare", items: ["What is the exact fare?", "Is it refundable?", "What taxes and fees are included?"] },
    { title: "Suite", items: ["What category am I booking?", "Is there a veranda?", "What is the actual suite location?"] },
    { title: "Inclusions", items: ["Is Wi-Fi included?", "Are beverages included?", "Are gratuities included?", "Which dining venues are complimentary?"] },
    { title: "Extras", items: ["How much should I budget for excursions?", "Do I need airfare?", "Do I need a hotel before embarkation?", "Will I purchase spa services?"] },
    { title: "Promotions", items: ["Is there an active promotion?", "Is shipboard credit included?", "Is there a reduced deposit?", "Does a loyalty discount apply?", "Is there a solo offer?"] },
    { title: "Total Budget", items: ["What is the all-in cost of my vacation?"] },
];

const relatedLinks = [
    { icon: Ship, title: "Seabourn Cruises: The Complete Guide", text: "Explore the full guide covering ships, suites, destinations, dining, inclusions and what makes Seabourn different.", url: "/seabourn-cruises/" },
    { icon: Award, title: "Is Seabourn Worth the Price?", text: "A deeper look at whether Seabourn's ultra-luxury fare delivers real value for your travel style.", url: "/seabourn-cruises/is-seabourn-worth-it/" },
    { icon: Gem, title: "Seabourn Suites Explained", text: "Compare Oceanview, Veranda, Penthouse and Premium suite categories across the fleet.", url: "/seabourn-cruises/suites/" },
    { icon: Map, title: "Seabourn Destinations", text: "See where Seabourn sails, from the Mediterranean and Alaska to Antarctica and the Kimberley.", url: "/seabourn-cruises/destinations/" },
    { icon: Percent, title: "Seabourn Promotions & Deals", text: "Current Seabourn offers, shipboard credit, reduced deposits and single-supplement promotions.", url: "/seabourn-cruises/promotions/" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournCruiseCostGuide = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>How Much Does a Seabourn Cruise Cost? 2026 Guide</title>
                <meta name="title" content="Seabourn Cruise Cost: Fares, Suites, Solo & Extra Costs" />
                <meta
                    name="description"
                    content="How much does a Seabourn cruise cost? Compare typical fares, suite categories, solo pricing, promotions, what's included and additional expenses in this complete guide."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>How Much Does a Seabourn Cruise Cost?</h1>

                    <p>
                        There isn't one standard Seabourn cruise price. Fares vary
                        significantly based on the ship, itinerary, sailing date,
                        cruise length, suite category, occupancy and available
                        promotions.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Seabourn's current pricing is advertised in U.S.
                                dollars, with fares generally shown per guest based on
                                double occupancy. Its current terms also state that
                                advertised fares include taxes, fees and port
                                expenses, although prices and availability can change
                                before a reservation is confirmed.
                            </p>
                            <p>
                                That means the most useful way to understand Seabourn
                                pricing isn't to ask only, "What is the cheapest
                                Seabourn cruise?" Instead, ask: What will my total
                                Seabourn vacation cost, and what is already included
                                in that price?
                            </p>
                            <p>
                                Because Seabourn includes many elements that can be
                                extra on other cruise lines — including dining,
                                beverages, Wi-Fi and onboard gratuities — the headline
                                fare doesn't tell the whole story.
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

            {/* ── AT A GLANCE TABLE ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Scc-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Overview</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Cost <br /> at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's official terms are particularly important when
                            comparing prices because promotional fares, occupancy
                            assumptions and inclusions can differ by offer.
                        </p>
                    </div>

                    <div className="Scc-table-scroll">
                        <table className="Scc-table">
                            <thead>
                                <tr>
                                    <th>Cost Factor</th>
                                    <th>What to Know</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row, i) => (
                                    <tr key={i}>
                                        <td className="Scc-table-label">{row[0]}</td>
                                        <td>{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHAT DETERMINES THE PRICE ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-price-factors">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Pricing Factors</span>
                        <h2 className="Sbc-h2">What Determines the Price <br /> of a Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Several factors can dramatically change the fare.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {priceFactors.map((card, i) => {
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

            {/* ── HOW SEABOURN ADVERTISES ITS PRICES ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Scc-how-advertised">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Reading the Fare</span>
                        <h2 className="Sbc-h2">How Seabourn Advertises <br /> Its Cruise Prices</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is an important detail for shoppers. Seabourn's
                            current terms state that advertised fares:
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Advertised fares currently:</h4>
                                <ul className="Sbc-highlights-list">
                                    {advertisingList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                So if you see a Seabourn cruise advertised at a
                                particular price, don't automatically assume that is
                                the price of the suite you want. The displayed fare
                                may apply to the lowest available category.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Percent size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Fare Terms Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COST BY SUITE CATEGORY ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-suite-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations & Price</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Cost <br /> by Suite Category</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the easiest ways to increase your cruise price is
                            to upgrade your suite. Seabourn's current suite lineup
                            includes categories such as:
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {suiteCategories.map((card, i) => {
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

                    <div className="Sbc-includes-note" style={{ marginTop: "40px", background: "rgba(21,42,74,0.04)" }}>
                        <p style={{ color: "#3d4c5f" }}>
                            Seabourn confirms that its accommodations are all-suite
                            and ocean-front, with many suites offering private
                            verandas.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA – SUITE CATEGORY ─────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Choose the Right Suite</span>
                    <h3 className="Sbc-cta-title">Not Sure Which Seabourn Suite Category Is Right for You?</h3>
                    <p className="Sbc-cta-text">
                        From Oceanview to Premium Suites, the right category depends
                        on your travel style, itinerary and budget. Let us help you
                        find the perfect fit.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Suite Recommendations
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── IS A MORE EXPENSIVE SUITE WORTH IT ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-worth-section" id="Scc-suite-worth-it">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing the Upgrade</span>
                        <h2 className="Sbc-h2">Is a More Expensive <br /> Seabourn Suite Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>
                    
                    <div className="Scc-worth-split">
                        <div className="Scc-worth-left-card">
                            <div className="Scc-worth-badge-verdict">Not necessarily.</div>
                            
                            <p className="Scc-worth-desc-text">
                                For some travelers, a Veranda Suite may provide the ideal balance between:
                            </p>
                            
                            <div className="Scc-worth-equation-row">
                                <span className="Scc-eq-item">space</span>
                                <span className="Scc-eq-plus">+</span>
                                <span className="Scc-eq-item">outdoor area</span>
                                <span className="Scc-eq-plus">+</span>
                                <span className="Scc-eq-item">price</span>
                            </div>
                            
                            <p className="Scc-worth-desc-text">
                                For others, a larger Penthouse or Premium Suite may be worthwhile because they expect to spend substantial time in their suite.
                            </p>
                        </div>

                        <div className="Scc-worth-right-card">
                            <h3 className="Scc-worth-right-title">Think about how you actually travel.</h3>
                            
                            <div className="Scc-worth-travel-points">
                                <div className="Scc-worth-point-item">
                                    <div className="Scc-point-icon-wrapper">
                                        <Compass size={22} />
                                    </div>
                                    <p className="Scc-point-text">
                                        If you spend most of your day ashore, you may not need the largest suite.
                                    </p>
                                </div>

                                <div className="Scc-worth-point-item">
                                    <div className="Scc-point-icon-wrapper Scc-gold-icon">
                                        <Ship size={22} />
                                    </div>
                                    <p className="Scc-point-text">
                                        If you're taking a long World Cruise, the additional space can become much more valuable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT DO YOU GET IN A SUITE ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft Scc-amenities-section" id="Scc-suite-amenities">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">What's Inside</span>
                        <h2 className="Sbc-h2">What Do You Get in <br /> a Seabourn Suite?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Current Seabourn suite amenities can include:
                        </p>
                    </div>

                    <div className="Scc-amenities-split">
                        <div className="Scc-amenities-content">
                            <div className="Sbc-brand-highlights" style={{ margin: "0", backgroundColor:'var(--bg-white)' }}>
                                <h4 className="Sbc-highlights-title">Included with your suite:</h4>
                                <ul className="Sbc-highlights-list">
                                    {suiteAmenities.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p Scc-amenities-note">
                                Higher categories add features such as larger living areas,
                                dining areas and enhanced amenities. This is one reason
                                comparing Seabourn's fare directly against a standard cruise
                                cabin can produce a misleading value comparison.
                            </p>
                        </div>

                        <div className="Scc-amenities-image-container">
                            <div className="Scc-amenities-image-placeholder">
                                <div className="Scc-amenities-placeholder-icon-wrapper">
                                    <Home size={40} />
                                </div>
                                <span className="Scc-amenities-placeholder-text">Seabourn Suite Interior View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── COST FOR TWO ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-two-section" id="Scc-cost-for-two">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Couples Budgeting</span>
                        <h2 className="Sbc-h2">How Much Does a Seabourn <br /> Cruise Cost for Two?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-two-container">
                        <p className="Scc-two-intro-text">
                            Because Seabourn generally advertises fares per guest based on double occupancy, a displayed per-person price needs to be multiplied by two when budgeting for a couple.
                        </p>

                        <div className="Scc-two-calculation-card">
                            <h4 className="Scc-two-card-subtitle">For example, if a particular sailing displays:</h4>
                            
                            <div className="Scc-two-formula-row">
                                <div className="Scc-two-formula-badge">$X per guest</div>
                                <div className="Scc-two-formula-op">× 2</div>
                                <div className="Scc-two-formula-eq">→</div>
                                <div className="Scc-two-formula-badge Scc-badge-highlight">$2X for two</div>
                            </div>

                            <p className="Scc-two-card-result-text">
                                your cruise fare for two would generally begin around: <strong>$2X</strong>
                            </p>

                            <p className="Scc-two-card-footnote">
                                before considering optional travel components and personal expenses.
                            </p>
                        </div>

                        <p className="Scc-two-conclusion-text">
                            The actual amount depends on the sailing and selected suite.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SOLO TRAVELER COST ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft Scc-solo-section" id="Scc-solo-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Traveling Alone</span>
                        <h2 className="Sbc-h2">How Much Does a Seabourn Cruise <br /> Cost for a Solo Traveler?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-solo-rows">
                        {/* Sub-row 1 */}
                        <div className="Scc-solo-row-split">
                            <div className="Scc-solo-card">
                                <p className="Scc-solo-text">
                                    Solo pricing is an important consideration.
                                </p>
                                <p className="Scc-solo-text">
                                    Cruise fares are generally structured around two guests sharing a suite, so solo travelers can face a single supplement.
                                </p>
                                <p className="Scc-solo-text">
                                    Seabourn currently lists a promotion offering single supplements as low as 125% on select sailings, compared with a standard 200% supplement. The offer is capacity-controlled and subject to availability.
                                </p>
                                <div className="Scc-solo-callout">
                                    <p className="Scc-solo-callout-text">
                                        That means solo travelers should never assume the advertised per-person fare is their final price.
                                    </p>
                                    <p className="Scc-solo-callout-text" style={{ marginBottom: "0" }}>
                                        Always check the actual solo fare for the sailing and suite category.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="Scc-solo-image-placeholder">
                                <div className="Scc-solo-placeholder-icon-wrapper">
                                    <Users size={40} />
                                </div>
                                <span className="Scc-solo-placeholder-text">Solo Pricing Considerations Guide</span>
                            </div>
                        </div>

                        {/* Sub-row 2 */}
                        <div className="Scc-solo-row-split Scc-row-reverse">
                            <div className="Scc-solo-card Scc-supplement-card">
                                <h3 className="Scc-solo-card-title">Seabourn Single Supplement Explained</h3>
                                <p className="Scc-solo-text">
                                    A single supplement is an additional charge applied when one traveler occupies a suite designed to accommodate two guests.
                                </p>
                                
                                <div className="Scc-solo-example-box">
                                    <span className="Scc-example-header">For example:</span>
                                    <ul className="Scc-example-list">
                                        <li>
                                            <span className="Scc-bullet-dot"></span>
                                            <span><strong>Double occupancy:</strong> two travelers share the suite.</span>
                                        </li>
                                        <li>
                                            <span className="Scc-bullet-dot"></span>
                                            <span><strong>Solo occupancy:</strong> one traveler uses the same suite.</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="Scc-solo-text">
                                    Because the cruise line loses the second passenger's fare, a supplement can be applied.
                                </p>
                                <p className="Scc-solo-text" style={{ marginBottom: "0" }}>
                                    The exact percentage varies according to the sailing, suite and current promotion.
                                </p>
                            </div>

                            <div className="Scc-solo-image-placeholder">
                                <div className="Scc-solo-placeholder-icon-wrapper">
                                    <Compass size={40} />
                                </div>
                                <span className="Scc-solo-placeholder-text">Supplement Explanation Visual Guide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── CTA 1 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Compare Suites & Fares</span>
                    <h3 className="Sbc-cta-title">Find the Right Seabourn Suite for Your Budget</h3>
                    <p className="Sbc-cta-text">
                        Let us compare sailing dates, suite categories and current
                        promotions to find the fare that fits your Seabourn
                        vacation.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get a Personalized Quote
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── HOW TO SAVE AS SOLO ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-solo-save-section" id="Scc-solo-save">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Solo Savings Tips</span>
                        <h2 className="Sbc-h2">How to Save on Seabourn <br /> as a Solo Traveler</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-solo-save-grid">
                        <div className="Scc-solo-save-card">
                            <h4 className="Scc-solo-save-card-title">Solo travelers should monitor:</h4>
                            <ul className="Scc-solo-save-list">
                                <li>
                                    <span className="Scc-save-icon"><Check size={18} strokeWidth={2.5} /></span>
                                    <span>Reduced single supplements</span>
                                </li>
                                <li>
                                    <span className="Scc-save-icon"><Check size={18} strokeWidth={2.5} /></span>
                                    <span>Specific solo promotions</span>
                                </li>
                                <li>
                                    <span className="Scc-save-icon"><Check size={18} strokeWidth={2.5} /></span>
                                    <span>Less expensive suite categories</span>
                                </li>
                                <li>
                                    <span className="Scc-save-icon"><Check size={18} strokeWidth={2.5} /></span>
                                    <span>Shoulder-season sailings</span>
                                </li>
                                <li>
                                    <span className="Scc-save-icon"><Check size={18} strokeWidth={2.5} /></span>
                                    <span>Less-demanded itineraries</span>
                                </li>
                                <li>
                                    <span className="Scc-save-icon"><Check size={18} strokeWidth={2.5} /></span>
                                    <span>Seabourn Club offers where eligible</span>
                                </li>
                            </ul>
                        </div>

                        <div className="Scc-solo-save-info-card">
                            <div className="Scc-solo-save-info-icon">
                                <Award size={28} />
                            </div>
                            <h4 className="Scc-solo-save-info-title">Diamond Elite Discount</h4>
                            <p className="Scc-solo-save-info-text">
                                Seabourn's current terms also list a separate Diamond Elite solo-traveler discount, with supplements as low as 150% or 175% depending on suite category.
                            </p>
                            <p className="Scc-solo-save-info-note">
                                Offers can change, so verify the terms when booking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS INCLUDED ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Scc-included">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Inclusive Fare</span>
                        <h2 className="Sbc-h2">What Is Included in a <br /> Seabourn Cruise Fare?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            This is where Seabourn pricing becomes particularly
                            interesting. Depending on the sailing and applicable
                            terms, the onboard experience includes many expenses that
                            travelers may otherwise pay separately.
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
                            <strong>The takeaway:</strong> This combination can
                            significantly change the effective cost of a Seabourn
                            vacation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS NOT INCLUDED ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-not-included">
                <div className="Sbc-container">
                    <div className="Sbc-notfit-header" style={{ textAlign: "center" }}>
                        <div className="Sbc-section-header">
                            <span className="Sbc-eyebrow">Budget Carefully</span>
                            <h2 className="Sbc-h2">What Is Not Included in the <br /> Seabourn Cruise Fare?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
                            Your cruise fare should not automatically be treated as
                            an all-expenses-paid vacation. Potential additional
                            expenses include:
                        </p>
                    </div>

                    <div className="Sbc-notfit-grid">
                        {notIncludedList.map((item, i) => (
                            <div className="Sbc-notfit-item-card" key={i}>
                                <div className="Sbc-notfit-x-wrapper">
                                    <X size={14} strokeWidth={2.5} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="Sbc-p" style={{ textAlign: "center", maxWidth: "760px", margin: "32px auto 0" }}>
                        Seabourn's cruise contract specifically excludes certain
                        incidental items, activities, excursions, transportation and
                        personal services from the cruise fare. Airline services and
                        baggage fees may also be charged separately.
                    </p>
                </div>
            </section>

            {/* ── SHORE EXCURSION COSTS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-excursion-section" id="Scc-excursions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Ashore</span>
                        <h2 className="Sbc-h2">Seabourn Shore Excursion Costs</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-excursion-split">
                        <div className="Scc-excursion-content">
                            <p className="Scc-excursion-intro">
                                Shore excursions are an important part of your total
                                budget. Some travelers spend very little beyond the
                                cruise fare by exploring independently. Others may spend
                                significantly more by booking:
                            </p>

                            <div className="Sbc-brand-highlights" style={{ margin: "0", backgroundColor: 'var(--bg-white)' }}>
                                <ul className="Sbc-highlights-list">
                                    {excursionTypes.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Scc-excursion-closing">
                                The right strategy depends on the destination. For a
                                once-in-a-lifetime port, paying for a memorable experience
                                may be worthwhile. For a destination you know well,
                                independent exploration may make more sense.
                            </p>
                        </div>

                        <div className="Scc-excursion-image-container">
                            <div className="Scc-excursion-image-placeholder">
                                <div className="Scc-excursion-placeholder-icon-wrapper">
                                    <Map size={40} />
                                </div>
                                <span className="Scc-excursion-placeholder-text">Shore Excursion Visual Guide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan Your Shore Experience</span>
                    <h3 className="Sbc-cta-title">Get Expert Help Budgeting Your Seabourn Shore Excursions</h3>
                    <p className="Sbc-cta-text">
                        From private tours to expedition experiences, shore excursion
                        costs vary widely. Let us help you plan the right excursions
                        for your itinerary — and build a realistic total vacation budget.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── AIRFARE & HOTEL COSTS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-air-hotel">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Getting There & Staying Over</span>
                        <h2 className="Sbc-h2">Airfare & Pre/Post-Cruise Hotel Costs</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-exp-grid">
                        <div className="Sbc-exp-card">
                            <div className="Sbc-exp-card-header">
                                <div className="Sbc-exp-icon-wrap">
                                    <Plane size={24} />
                                </div>
                                <h3 className="Sbc-h3">Airfare and Seabourn Cruise Cost</h3>
                            </div>
                            <p className="Sbc-exp-text">
                                Airfare can represent a significant additional
                                expense. Unless a particular promotion or voyage
                                specifically includes air, don't assume your flights
                                are part of the cruise fare. Seabourn does offer air
                                programs and selected promotions. For example, its
                                2027 World Cruise terms include complimentary
                                round-trip business-class or first-class air on
                                select flights from select North American gateways
                                for qualifying full World Cruise bookings.
                            </p>
                            <div className="Sbc-exp-footer">
                                That's a very different pricing proposition from a
                                regular cruise. Always check the specific fare and
                                promotion.
                            </div>
                        </div>

                        <div className="Sbc-exp-card">
                            <div className="Sbc-exp-card-header">
                                <div className="Sbc-exp-icon-wrap">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="Sbc-h3">Pre- and Post-Cruise Hotel Costs</h3>
                            </div>
                            <p className="Sbc-exp-text">
                                Many travelers should budget for at least one hotel
                                night before embarkation. Seabourn offers pre- and
                                post-cruise hotel packages that can include hotel
                                accommodation, breakfast, private car transfers, a
                                hospitality representative, porterage, bell service
                                gratuities and taxes.
                            </p>
                            <div className="Sbc-exp-footer">
                                These packages are optional, but they can simplify the
                                logistics of a luxury trip.
                            </div>
                        </div>

                        <div className="Sbc-exp-card">
                            <div className="Sbc-exp-card-header">
                                <div className="Sbc-exp-icon-wrap">
                                    <Car size={24} />
                                </div>
                                <h3 className="Sbc-h3">Transfers & Ground Transport</h3>
                            </div>
                            <p className="Sbc-exp-text">
                                Port transfers between the airport, hotel and pier
                                can add up, especially in distant embarkation cities.
                                Seabourn offers private car and transfer packages.
                                Some promotions, such as the 2027 World Cruise,
                                include complimentary transfers between select airports,
                                hotels and the ship for qualifying bookings.
                            </p>
                            <div className="Sbc-exp-footer">
                                Always confirm whether transfers are included in your
                                fare or package before assuming they are covered.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TOTAL BUDGET FORMULA ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-budget-section" id="Scc-total-budget">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">The Full Picture</span>
                        <h2 className="Sbc-h2">How Much Should You Budget <br /> Beyond the Cruise Fare?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Scc-budget-subtitle">A useful planning formula is:</p>
                    </div>

                    {/* Formula Card */}
                    <div className="Scc-budget-formula-card">
                        <div className="Scc-budget-formula-chain">
                            <div className="Scc-budget-pill">
                                <Anchor size={16} />
                                <span>Cruise fare</span>
                            </div>
                            <span className="Scc-budget-operator">+</span>
                            <div className="Scc-budget-pill">
                                <Plane size={16} />
                                <span>Airfare</span>
                            </div>
                            <span className="Scc-budget-operator">+</span>
                            <div className="Scc-budget-pill">
                                <Building2 size={16} />
                                <span>Hotels</span>
                            </div>
                            <span className="Scc-budget-operator">+</span>
                            <div className="Scc-budget-pill">
                                <Car size={16} />
                                <span>Transfers</span>
                            </div>
                            <span className="Scc-budget-operator">+</span>
                            <div className="Scc-budget-pill">
                                <Map size={16} />
                                <span>Excursions</span>
                            </div>
                            <span className="Scc-budget-operator">+</span>
                            <div className="Scc-budget-pill">
                                <Heart size={16} />
                                <span>Insurance</span>
                            </div>
                            <span className="Scc-budget-operator">+</span>
                            <div className="Scc-budget-pill">
                                <CreditCard size={16} />
                                <span>Personal spending</span>
                            </div>
                        </div>
                        <div className="Scc-budget-formula-result">
                            <span className="Scc-budget-equals">=</span>
                            <span className="Scc-budget-result-label">Total Trip Budget</span>
                        </div>
                    </div>

                    {/* Supporting advice note */}
                    <div className="Scc-budget-note">
                        <p className="Scc-budget-note-text">
                            For a luxury cruise, don't make the mistake of spending your entire budget on the suite. Leave room for the rest of the journey.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── PROMOTIONS ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-promotions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Save on Your Sailing</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Promotions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Promotions can significantly change the effective cost of
                            a Seabourn cruise. Current Seabourn terms list several
                            types of offers, including Early Booking Advantage,
                            savings on select voyages, shipboard credit, reduced
                            deposits, single-supplement offers, World Cruise benefits,
                            combination cruise savings and other limited-time
                            promotions. The exact promotion available depends on the
                            booking date, sailing and eligibility.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {promotions.map((card, i) => {
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

            {/* ── COST PER NIGHT ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Scc-cost-per-night">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Longer vs. Shorter</span>
                        <h2 className="Sbc-h2">Is It Cheaper to Book a <br /> Longer Seabourn Cruise?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Not automatically. Longer voyages cost more overall, but
                            the per-night value can sometimes improve. Cost per night
                            is one of the best ways to compare different Seabourn
                            itineraries: total cruise fare ÷ number of nights =
                            approximate cruise cost per night.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">Cruise A</h3>
                            <p className="Sbc-compare-sub">10-night sailing</p>
                            <ul className="Sbc-compare-list">
                                <li><Check size={16} strokeWidth={2} /><span>$10,000 total cruise fare</span></li>
                                <li><Check size={16} strokeWidth={2} /><span>÷ 10 nights</span></li>
                                <li><Check size={16} strokeWidth={2} /><span>= $1,000 per night</span></li>
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Cruise B</h3>
                            <p className="Sbc-compare-sub">15-night sailing</p>
                            <ul className="Sbc-compare-list">
                                <li><Check size={16} strokeWidth={2} /><span>$13,000 total cruise fare</span></li>
                                <li><Check size={16} strokeWidth={2} /><span>÷ 15 nights</span></li>
                                <li><Check size={16} strokeWidth={2} /><span>= about $867 per night</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>
                            <strong>The result:</strong> Cruise B costs more overall
                            but less per night. A 14-night cruise isn't necessarily
                            twice the value of a seven-night cruise — but it may offer
                            a more efficient overall travel experience.
                        </p>
                        <p>
                            <strong>The second question:</strong> Which itinerary and
                            suite do I actually prefer?
                        </p>
                    </div>
                </div>
            </section>

                        {/* ── CTA 2 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Full Trip, Full Budget</span>
                    <h3 className="Sbc-cta-title">Let's Map Out Your Complete Seabourn Vacation Cost</h3>
                    <p className="Sbc-cta-text">
                        From fare to flights, hotels and excursions, we'll help you
                        understand exactly what your Seabourn vacation will cost
                        before you book.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Build My Budget
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── COST VS TOTAL VALUE TABLE ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-value-table">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Look Beyond the Fare</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Cost <br /> vs. Total Value</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The cheapest Seabourn cruise isn't necessarily the best
                            deal. A more useful comparison considers:
                        </p>
                    </div>

                    <div className="Scc-table-scroll">
                        <table className="Scc-table">
                            <thead>
                                <tr>
                                    <th>Factor</th>
                                    <th>Question</th>
                                </tr>
                            </thead>
                            <tbody>
                                {valueTable.map((row, i) => (
                                    <tr key={i}>
                                        <td className="Scc-table-label">{row[0]}</td>
                                        <td>{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── VS OTHER LUXURY LINES ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-vslines-section" id="Scc-vs-other-lines">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Making Fair Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Cost vs. <br /> Other Luxury Cruise Lines</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    {/* Top image placeholder — full width */}
                    <div className="Scc-vslines-top-image">
                        <div className="Scc-vslines-top-placeholder">
                            <div className="Scc-vslines-placeholder-icon-wrapper">
                                <Gem size={40} />
                            </div>
                            <span className="Scc-vslines-placeholder-text">Luxury Cruise Comparison Guide</span>
                        </div>
                    </div>

                    {/* Two cards side by side */}
                    <div className="Scc-vslines-cards-row">
                        {/* Card 1: Competitor extras */}
                        <div className="Scc-vslines-block">
                            <p className="Scc-vslines-lead">Don't compare Seabourn solely on advertised fare.</p>
                            <p className="Scc-vslines-lead Scc-vslines-lead-em">Compare the total included experience.</p>
                            <p className="Scc-vslines-text">
                                For example, a competitor might advertise a lower cruise fare but charge separately for:
                            </p>
                            <ul className="Scc-vslines-list">
                                <li><span className="Scc-vslines-dot"></span><span>Wi-Fi</span></li>
                                <li><span className="Scc-vslines-dot"></span><span>Premium beverages</span></li>
                                <li><span className="Scc-vslines-dot"></span><span>Specialty dining</span></li>
                                <li><span className="Scc-vslines-dot"></span><span>Gratuities</span></li>
                                <li><span className="Scc-vslines-dot"></span><span>Certain services</span></li>
                            </ul>
                            <p className="Scc-vslines-text">
                                A higher Seabourn fare may therefore narrow the apparent price difference.
                            </p>
                        </div>

                        {/* Card 2: Formula comparison */}
                        <div className="Scc-vslines-formula-block">
                            <p className="Scc-vslines-formula-label">This is why your comparison should always be:</p>
                            <div className="Scc-vslines-formula-row Scc-formula-good">
                                <span className="Scc-vf-pill">Fare</span>
                                <span className="Scc-vf-op">+</span>
                                <span className="Scc-vf-pill">Inclusions</span>
                                <span className="Scc-vf-op">+</span>
                                <span className="Scc-vf-pill">Extras</span>
                                <span className="Scc-vf-op">+</span>
                                <span className="Scc-vf-pill">Itinerary</span>
                                <span className="Scc-vf-op">+</span>
                                <span className="Scc-vf-pill">Suite</span>
                            </div>
                            <p className="Scc-vslines-formula-label Scc-formula-label-vs">rather than simply:</p>
                            <div className="Scc-vslines-formula-row Scc-formula-bad">
                                <span className="Scc-vf-pill Scc-vf-pill-muted">Fare</span>
                                <span className="Scc-vf-op">vs.</span>
                                <span className="Scc-vf-pill Scc-vf-pill-muted">Fare</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW TO GET THE BEST PRICE ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-best-price">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Smart Booking</span>
                        <h2 className="Sbc-h2">How to Get the Best <br /> Seabourn Cruise Price</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {bestPriceTips.map((tip, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px" }}>{i + 1}</span>
                                </div>
                                <h3 className="Sbc-card-title">{tip.title}</h3>
                                <p className="Sbc-card-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO BOOK ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Scc-best-time">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timing Your Booking</span>
                        <h2 className="Sbc-h2">When Is the Best Time <br /> to Book Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            There isn't one universal answer. The best strategy
                            depends on whether choice or price is your highest
                            priority.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">Book Early If:</h3>
                            <ul className="Sbc-compare-list">
                                {bookEarlyList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Monitor Promotions If:</h3>
                            <ul className="Sbc-compare-list">
                                {monitorPromoList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN VS MAINSTREAM ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-vs-mainstream">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ultra-Luxury vs. Mainstream</span>
                        <h2 className="Sbc-h2">Is Seabourn More Expensive <br /> Than Mainstream Cruises?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Yes, generally. But that's not necessarily an
                            apples-to-apples comparison. Seabourn operates in the
                            ultra-luxury segment, with all-suite accommodations and a
                            highly inclusive onboard model.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">A Mainstream Cruise May Offer</h3>
                            <ul className="Sbc-compare-list">
                                {mainstreamList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Seabourn Offers</h3>
                            <ul className="Sbc-compare-list">
                                {seabournOfferList.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>Choose based on what you actually value.</p>
                    </div>
                </div>
            </section>

                        {/* ── CTA 3 ────────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Ready to See Real Seabourn Pricing?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare current fares, suite categories and active
                        promotions to find the best value for your Seabourn cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── IS SEABOURN WORTH THE COST ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft Scc-worth2-section" id="Scc-worth-the-cost">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">The Value Question</span>
                        <h2 className="Sbc-h2">Is Seabourn Worth the Cost?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Scc-worth2-split">
                        {/* Left: Text content */}
                        <div className="Scc-worth2-content">
                            <p className="Scc-worth2-lead">
                                For travelers who value service, food, space, smaller ships and inclusions, Seabourn can offer strong value despite its higher upfront fare.
                            </p>

                            <div className="Scc-worth2-value-card">
                                <h4 className="Scc-worth2-card-title">The value becomes compelling when you'd otherwise spend on:</h4>
                                <div className="Scc-worth2-pills-row">
                                    <span className="Scc-worth2-pill"><Gem size={14} />Premium drinks</span>
                                    <span className="Scc-worth2-op">+</span>
                                    <span className="Scc-worth2-pill"><Star size={14} />Dining</span>
                                    <span className="Scc-worth2-op">+</span>
                                    <span className="Scc-worth2-pill"><Waves size={14} />Internet</span>
                                    <span className="Scc-worth2-op">+</span>
                                    <span className="Scc-worth2-pill"><Heart size={14} />Gratuities</span>
                                    <span className="Scc-worth2-op">+</span>
                                    <span className="Scc-worth2-pill"><Home size={14} />Larger accommodations</span>
                                </div>
                            </div>

                            <div className="Scc-worth2-callout">
                                <p className="Scc-worth2-verdict">
                                    But if you don't use those benefits, the premium may be harder to justify.
                                </p>
                            </div>

                            <p className="Scc-worth2-link-text">
                                For a deeper assessment, see:{" "}
                                <Link to="/seabourn-cruises/is-seabourn-worth-it/" className="Scc-worth2-link">
                                    Is Seabourn Worth the Price?
                                </Link>
                            </p>
                        </div>

                        {/* Right: Image placeholder */}
                        <div className="Scc-worth2-image-container">
                            <div className="Scc-worth2-image-placeholder">
                                <div className="Scc-worth2-icon-wrapper">
                                    <Award size={40} />
                                </div>
                                <span className="Scc-worth2-placeholder-text">Seabourn Value & Cost Guide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── COST FOR DIFFERENT TRAVELER TYPES ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Scc-traveler-types">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Budgeting by Traveler</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Cost for <br /> Different Traveler Types</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-fit-grid">
                        {travelerTypes.map((card, i) => {
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

            {/* ── WORLD CRUISE COST ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white Scc-world-section" id="Scc-world-cruise">
                <div className="Sbc-container">
                    {/* Centered title */}
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">The Longest Voyages</span>
                        <h2 className="Sbc-h2">Seabourn World Cruise Cost</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    {/* Top full-width image placeholder */}
                    <div className="Scc-world-top-image">
                        <div className="Scc-world-top-placeholder">
                            <div className="Scc-world-icon-wrapper">
                                <Anchor size={40} />
                            </div>
                            <span className="Scc-world-placeholder-text">Seabourn World Cruise Guide</span>
                        </div>
                    </div>

                    {/* Bottom: Left paragraphs + Right card */}
                    <div className="Scc-world-bottom-split">
                        {/* Left: text paragraphs */}
                        <div className="Scc-world-para-col">
                            <p className="Scc-world-text">
                                World Cruises should be evaluated separately from
                                ordinary Seabourn cruises. The price is significantly
                                higher because of the length, but qualifying
                                full-voyage bookings can receive substantial
                                additional benefits.
                            </p>
                            <p className="Scc-world-text">
                                For example, Seabourn's 2026 129-day World Cruise
                                included benefits such as:
                            </p>
                            <p className="Scc-world-closing">
                                This illustrates why World Cruise pricing should be
                                evaluated as a package rather than simply multiplying
                                a short cruise fare by the number of days.
                            </p>
                        </div>

                        {/* Right: benefits card */}
                        <div className="Scc-world-card">
                            <h4 className="Scc-world-card-title">Included with qualifying full-voyage bookings:</h4>
                            <ul className="Scc-world-list">
                                {worldCruiseBenefits.map((item, idx) => (
                                    <li key={idx}>
                                        <span className="Scc-world-check"><Check size={18} strokeWidth={2.5} /></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COST CHECKLIST ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft Scc-cl-section" id="Scc-checklist">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Cost Checklist</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Scc-cl-subtitle">Before booking, ask:</p>
                    </div>

                    <div className="Scc-cl-grid">
                        {/* 1 – Cruise Fare */}
                        <div className="Scc-cl-card">
                            <div className="Scc-cl-card-top">
                                <span className="Scc-cl-step">01</span>
                                <div className="Scc-cl-icon-wrap"><CreditCard size={22} /></div>
                            </div>
                            <h3 className="Scc-cl-title">{checklistGroups[0].title}</h3>
                            <ul className="Scc-cl-list">
                                {checklistGroups[0].items.map((item, j) => (
                                    <li key={j}><span className="Scc-cl-dot"></span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* 2 – Suite */}
                        <div className="Scc-cl-card">
                            <div className="Scc-cl-card-top">
                                <span className="Scc-cl-step">02</span>
                                <div className="Scc-cl-icon-wrap"><Home size={22} /></div>
                            </div>
                            <h3 className="Scc-cl-title">{checklistGroups[1].title}</h3>
                            <ul className="Scc-cl-list">
                                {checklistGroups[1].items.map((item, j) => (
                                    <li key={j}><span className="Scc-cl-dot"></span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* 3 – Inclusions */}
                        <div className="Scc-cl-card">
                            <div className="Scc-cl-card-top">
                                <span className="Scc-cl-step">03</span>
                                <div className="Scc-cl-icon-wrap"><Star size={22} /></div>
                            </div>
                            <h3 className="Scc-cl-title">{checklistGroups[2].title}</h3>
                            <ul className="Scc-cl-list">
                                {checklistGroups[2].items.map((item, j) => (
                                    <li key={j}><span className="Scc-cl-dot"></span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* 4 – Extras */}
                        <div className="Scc-cl-card">
                            <div className="Scc-cl-card-top">
                                <span className="Scc-cl-step">04</span>
                                <div className="Scc-cl-icon-wrap"><Compass size={22} /></div>
                            </div>
                            <h3 className="Scc-cl-title">{checklistGroups[3].title}</h3>
                            <ul className="Scc-cl-list">
                                {checklistGroups[3].items.map((item, j) => (
                                    <li key={j}><span className="Scc-cl-dot"></span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* 5 – Promotions */}
                        <div className="Scc-cl-card">
                            <div className="Scc-cl-card-top">
                                <span className="Scc-cl-step">05</span>
                                <div className="Scc-cl-icon-wrap"><Percent size={22} /></div>
                            </div>
                            <h3 className="Scc-cl-title">{checklistGroups[4].title}</h3>
                            <ul className="Scc-cl-list">
                                {checklistGroups[4].items.map((item, j) => (
                                    <li key={j}><span className="Scc-cl-dot"></span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* 6 – Total Budget (wide highlight card) */}
                        <div className="Scc-cl-card Scc-cl-card-highlight">
                            <div className="Scc-cl-card-top">
                                <span className="Scc-cl-step Scc-cl-step-hl">06</span>
                                <div className="Scc-cl-icon-wrap Scc-cl-icon-hl"><Award size={22} /></div>
                            </div>
                            <h3 className="Scc-cl-title Scc-cl-title-hl">{checklistGroups[5].title}</h3>
                            <ul className="Scc-cl-list">
                                {checklistGroups[5].items.map((item, j) => (
                                    <li key={j}><span className="Scc-cl-dot Scc-cl-dot-hl"></span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────────── */}
            <section className="Sbc-expert-section" id="Scc-expert-insight">
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
            <section className="Sbc-section Sbc-bg-white" id="Scc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Cruise Cost</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before budgeting for a
                            Seabourn cruise.
                        </p>
                    </div>
                    <CostFAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Scc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Cost Verdict</span>
                        <h2 className="Sbc-h2">There Is No Single Seabourn Cruise Price</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            The final cost depends primarily on itinerary, length,
                            suite, occupancy, sailing date and promotions. The
                            advertised fare is generally per guest based on double
                            occupancy and currently includes taxes, fees and port
                            expenses, but additional travel and personal expenses can
                            still apply.
                        </p>
                        <p className="Sbc-p">
                            The most important thing to remember is that Seabourn's
                            higher upfront fare includes many components that
                            travelers may pay separately elsewhere. That includes
                            complimentary dining, beverages, Wi-Fi and no expected
                            onboard gratuities.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>So when comparing Seabourn, don't ask only:</strong>{" "}
                                "How much is the cruise?" Ask: "How much will my
                                entire vacation cost, and how much of that cost is
                                already covered by the Seabourn fare?" That is the
                                more accurate way to determine whether a particular
                                Seabourn sailing represents good value.
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

export default SeabournCruiseCostGuide;