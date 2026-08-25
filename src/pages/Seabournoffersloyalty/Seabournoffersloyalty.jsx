import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Anchor,
    Gift,
    Percent,
    Users,
    Award,
    Compass,
    Gem,
    Calendar,
    CreditCard,
    Star,
    Heart,
    Sailboat,
    Map,
    UserCheck,
    Snowflake,
    Globe,
    HelpCircle,
    Sparkles,
    Ticket,
    Layers,
    ClipboardCheck,
    XCircle,
    X,
    MapPin,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "./SeabournOffersLoyalty.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournOffersLoyaltySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/",
            name: "Seabourn Offers & Seabourn Club Benefits: 2026 Guide",
            headline: "Seabourn Offers and Seabourn Club Benefits",
            description:
                "Explore Seabourn offers, promotions, onboard credits and Seabourn Club benefits. Learn how past guests can save, earn loyalty rewards and maximize cruise value.",
            keywords: [
                "Seabourn offers",
                "Seabourn deals",
                "Seabourn promotions",
                "Seabourn cruise deals",
                "Seabourn Club",
                "Seabourn Club benefits",
                "Seabourn loyalty program",
                "Seabourn onboard credit",
                "Seabourn past guest benefits",
                "Seabourn Club levels",
                "Seabourn cruise discounts",
                "Seabourn special offers",
                "Seabourn group rates",
                "Seabourn loyalty benefits",
                "Seabourn Club rewards",
                "Seabourn savings",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#guide" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Offers & Loyalty", item: "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#guide",
            name: "Seabourn Offers and Seabourn Club Benefits",
            description:
                "A guide to Seabourn promotions, cruise deals, onboard credit, past-guest opportunities, Seabourn Club loyalty benefits, group opportunities and strategies for maximizing the overall value of a Seabourn booking.",
            url: "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Promotional Opportunities", value: "Reduced cruise fares, onboard credit, special pricing, added-value amenities, past-guest opportunities and suite-specific incentives" },
                { "@type": "PropertyValue", name: "Loyalty Program", value: "Seabourn Club" },
                { "@type": "PropertyValue", name: "Onboard Credit", value: "May be included with qualifying promotional offers and can apply to eligible onboard expenses" },
                { "@type": "PropertyValue", name: "Past-Guest Benefits", value: "Previous Seabourn guests may have access to special offers and loyalty opportunities" },
                { "@type": "PropertyValue", name: "Group Opportunities", value: "Potential special pricing or amenities for qualifying groups" },
                { "@type": "PropertyValue", name: "Best Booking Strategy", value: "Compare fare, promotion, onboard credit, loyalty benefits, suite, itinerary and advisor amenities" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#opportunities",
            name: "Seabourn Offer and Savings Opportunities",
            description: "Key opportunities travelers can evaluate when looking for Seabourn cruise value.",
            numberOfItems: 8,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Current Seabourn Promotions", description: "Promotional savings or added-value benefits available on selected voyages." },
                { "@type": "ListItem", position: 2, name: "Past-Guest Offers", description: "Special opportunities that may be available to previous Seabourn guests." },
                { "@type": "ListItem", position: 3, name: "Seabourn Club", description: "Loyalty recognition and benefits for repeat Seabourn travelers." },
                { "@type": "ListItem", position: 4, name: "Onboard Credit", description: "Credit that may be used toward eligible onboard expenses depending on the promotion terms." },
                { "@type": "ListItem", position: 5, name: "Group Opportunities", description: "Potential special pricing or amenities for families, friends, organizations and other qualifying groups." },
                { "@type": "ListItem", position: 6, name: "Travel Advisor Offers", description: "Potential additional amenities or preferred opportunities available through a luxury travel advisor." },
                { "@type": "ListItem", position: 7, name: "Early Booking", description: "Early planning can provide better access to popular suites, departure dates and high-demand itineraries." },
                { "@type": "ListItem", position: 8, name: "Longer Voyages", description: "Extended voyages may provide additional value through promotions and included experiences." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#loyalty-benefits",
            name: "Seabourn Club Benefits",
            description: "Types of recognition and benefits associated with Seabourn Club and repeat travel.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Future Cruise Planning", description: "Opportunities related to planning future Seabourn voyages." },
                { "@type": "ListItem", position: 2, name: "Special Events", description: "Potential access to special events associated with Seabourn loyalty." },
                { "@type": "ListItem", position: 3, name: "Loyalty Recognition", description: "Recognition of repeat Seabourn guests." },
                { "@type": "ListItem", position: 4, name: "Savings Opportunities", description: "Potential savings opportunities depending on Seabourn Club status and current program terms." },
                { "@type": "ListItem", position: 5, name: "Onboard Privileges", description: "Potential onboard privileges associated with applicable loyalty status." },
                { "@type": "ListItem", position: 6, name: "Priority or Preferred Opportunities", description: "Priority or preferred opportunities may be available depending on loyalty level and current program terms." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#suite-promotions",
            name: "Seabourn Suite Promotion Categories",
            description: "Suite categories that may have different promotional pricing or incentives.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Veranda Suites", description: "Promotional pricing may vary for Veranda Suites." },
                { "@type": "ListItem", position: 2, name: "Penthouse Suites", description: "Promotional pricing may vary for Penthouse Suites." },
                { "@type": "ListItem", position: 3, name: "Wintergarden Suites", description: "Promotional pricing may vary for Wintergarden Suites." },
                { "@type": "ListItem", position: 4, name: "Signature Suites", description: "Promotional pricing may vary for Signature Suites." },
                { "@type": "ListItem", position: 5, name: "Expedition Suites", description: "Promotional pricing may vary for expedition suites." },
                { "@type": "ListItem", position: 6, name: "Higher-Category Accommodations", description: "Higher-category Seabourn accommodations may have different promotional incentives." },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#value-strategy",
            name: "How to Maximize Seabourn Value",
            description: "Six-step strategy for evaluating Seabourn offers and overall booking value.",
            numberOfItems: 6,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Choose the Right Itinerary", description: "Start with the destination and travel dates." },
                { "@type": "ListItem", position: 2, name: "Choose the Right Ship", description: "Decide whether an ocean ship or expedition vessel is the better fit." },
                { "@type": "ListItem", position: 3, name: "Select the Right Suite", description: "Consider suite location, size, veranda and amenities." },
                { "@type": "ListItem", position: 4, name: "Check Current Promotions", description: "Look for applicable Seabourn offers and compare their terms." },
                { "@type": "ListItem", position: 5, name: "Check Seabourn Club Status", description: "Confirm loyalty benefits and past-guest opportunities before booking." },
                { "@type": "ListItem", position: 6, name: "Compare Complete Value", description: "Evaluate fare, onboard credit, loyalty benefits, suite, itinerary and advisor amenities rather than the advertised discount alone." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#faq",
            mainEntity: [
                { "@type": "Question", name: "Does Seabourn offer cruise discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn periodically offers promotions on selected voyages, dates, suite categories and destinations. The exact offers and terms change." } },
                { "@type": "Question", name: "How can I find current Seabourn offers?", acceptedAnswer: { "@type": "Answer", text: "Check Seabourn's current promotional offers and compare them with the exact sailing and suite you are considering." } },
                { "@type": "Question", name: "What is Seabourn Club?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Club is Seabourn's loyalty program for guests who have sailed with the cruise line." } },
                { "@type": "Question", name: "What benefits do Seabourn Club members receive?", acceptedAnswer: { "@type": "Answer", text: "Benefits depend on Seabourn Club status and current program terms. They can include loyalty recognition, special opportunities and other benefits associated with repeat travel." } },
                { "@type": "Question", name: "Do Seabourn past guests get special offers?", acceptedAnswer: { "@type": "Answer", text: "Past guests may receive special opportunities or offers. Travelers should check their Seabourn Club account and current promotional terms before booking." } },
                { "@type": "Question", name: "Does Seabourn offer onboard credit?", acceptedAnswer: { "@type": "Answer", text: "Some promotional offers may include onboard credit. The amount, eligible expenses and restrictions depend on the specific offer." } },
                { "@type": "Question", name: "Can Seabourn onboard credit be used for excursions?", acceptedAnswer: { "@type": "Answer", text: "Depending on the terms of the credit, it may be usable toward eligible onboard purchases or experiences. Current restrictions should be confirmed before relying on it for a specific expense." } },
                { "@type": "Question", name: "Can Seabourn offers be combined?", acceptedAnswer: { "@type": "Answer", text: "Some offers may be combinable while others are not. The terms of the specific promotion determine whether benefits can be stacked." } },
                { "@type": "Question", name: "Are Seabourn group discounts available?", acceptedAnswer: { "@type": "Answer", text: "Group opportunities may be available depending on the sailing, group size and booking conditions. Families, friends, organizations and special-interest groups should ask about group arrangements before booking individually." } },
                { "@type": "Question", name: "Is it better to book Seabourn early or wait for a promotion?", acceptedAnswer: { "@type": "Answer", text: "It depends on the itinerary and suite. For high-demand voyages, booking early can be more valuable because it provides access to preferred suites and dates. A later promotion may not compensate for losing the accommodation you want." } },
                { "@type": "Question", name: "Can a travel advisor help me find Seabourn promotions?", acceptedAnswer: { "@type": "Answer", text: "Yes. A knowledgeable travel advisor can monitor promotions, compare suite categories, review past-guest benefits and identify opportunities that may provide better overall value." } },
                { "@type": "Question", name: "Are Seabourn promotions available on expedition cruises?", acceptedAnswer: { "@type": "Answer", text: "Promotions can vary by voyage, including expedition itineraries. Travelers should check the specific sailing rather than assuming that an ocean-cruise promotion applies to an expedition voyage." } },
                { "@type": "Question", name: "Are Seabourn offers available for World Cruises?", acceptedAnswer: { "@type": "Answer", text: "Promotional availability varies. Because World Cruises are long, high-value voyages, travelers should compare the complete fare, suite category, included benefits and any applicable promotions." } },
                { "@type": "Question", name: "Can Seabourn Club benefits reduce my cruise fare?", acceptedAnswer: { "@type": "Answer", text: "Depending on the current loyalty program and applicable offers, Seabourn Club membership may provide benefits or special opportunities. Travelers should confirm the current terms associated with their status." } },
                { "@type": "Question", name: "Should I choose a cruise based on the biggest Seabourn discount?", acceptedAnswer: { "@type": "Answer", text: "Not necessarily. Compare the complete value, including the itinerary, suite, included amenities, onboard credit, loyalty benefits and booking conditions." } },
                { "@type": "Question", name: "How can I get the best Seabourn cruise deal?", acceptedAnswer: { "@type": "Answer", text: "Start by choosing the right itinerary and suite, then compare current promotions, Seabourn Club benefits, past-guest opportunities, onboard credit and any available group or advisor amenities." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (custom Sol-faq wrapper reusing Sbc-faq classes) ── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Does Seabourn offer cruise discounts?", a: "Yes. Seabourn periodically offers promotions on selected voyages, dates, suite categories and destinations. The exact offers and terms change." },
        { q: "How can I find current Seabourn offers?", a: "Check Seabourn's current promotional offers and have your travel advisor compare them with the exact sailing and suite you are considering." },
        { q: "What is Seabourn Club?", a: "Seabourn Club is Seabourn's loyalty program for guests who have sailed with the cruise line." },
        { q: "What benefits do Seabourn Club members receive?", a: "Benefits depend on your Seabourn Club status and the current program terms. They can include loyalty recognition, special opportunities and other benefits associated with repeat travel." },
        { q: "Do Seabourn past guests get special offers?", a: "Past guests may receive special opportunities or offers. Check your Seabourn Club account and current promotional terms before booking." },
        { q: "Does Seabourn offer onboard credit?", a: "Some promotional offers may include onboard credit. The amount, eligible expenses and restrictions depend on the specific offer." },
        { q: "Can Seabourn onboard credit be used for excursions?", a: "Depending on the terms of the credit, it may be usable toward eligible onboard purchases or experiences. Always confirm the current restrictions before relying on it for a specific expense." },
        { q: "Can Seabourn offers be combined?", a: "Some offers may be combinable while others are not. The terms of the specific promotion determine whether benefits can be stacked." },
        { q: "Are Seabourn group discounts available?", a: "Group opportunities may be available depending on the sailing, group size and booking conditions. Families, friends, organizations and special-interest groups should ask about group arrangements before booking individually." },
        { q: "Is it better to book Seabourn early or wait for a promotion?", a: "It depends on the itinerary and suite. For high-demand voyages, booking early can be more valuable because it provides access to preferred suites and dates. A later promotion may not compensate for losing the accommodation you want." },
        { q: "Can a travel advisor help me find Seabourn promotions?", a: "Yes. A knowledgeable travel advisor can monitor promotions, compare suite categories, review past-guest benefits and identify opportunities that may provide better overall value." },
        { q: "Are Seabourn promotions available on expedition cruises?", a: "Promotions can vary by voyage, including expedition itineraries. Check the specific sailing rather than assuming that an ocean-cruise promotion applies to an expedition voyage." },
        { q: "Are Seabourn offers available for World Cruises?", a: "Promotional availability varies. Because World Cruises are long, high-value voyages, it is particularly important to compare the complete fare, suite category, included benefits and any applicable promotions." },
        { q: "Can Seabourn Club benefits reduce my cruise fare?", a: "Depending on the current loyalty program and applicable offers, Seabourn Club membership may provide benefits or special opportunities. Confirm the current terms associated with your status." },
        { q: "Should I choose a cruise based on the biggest Seabourn discount?", a: "Not necessarily. Compare the complete value, including the itinerary, suite, included amenities, onboard credit, loyalty benefits and booking conditions." },
        { q: "How can I get the best Seabourn cruise deal?", a: "Start by choosing the right itinerary and suite, then compare current promotions, Seabourn Club benefits, past-guest opportunities, onboard credit and any available group or advisor amenities." },
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
const quickGuideRows = [
    { icon: Sparkles, opportunity: "Current Seabourn promotions", provide: "Promotional savings or added-value benefits", best: "New and returning guests" },
    { icon: UserCheck, opportunity: "Past-guest offers", provide: "Special opportunities for previous Seabourn guests", best: "Repeat travelers" },
    { icon: Award, opportunity: "Seabourn Club", provide: "Loyalty recognition and benefits", best: "Frequent Seabourn guests" },
    { icon: CreditCard, opportunity: "Onboard credit", provide: "Credit that can be used for eligible onboard expenses", best: "Travelers with qualifying offers" },
    { icon: Users, opportunity: "Group opportunities", provide: "Potential special pricing or benefits", best: "Families, friends and organizations" },
    { icon: Compass, opportunity: "Travel advisor offers", provide: "Additional amenities or preferred opportunities", best: "Travelers booking with an advisor" },
    { icon: Calendar, opportunity: "Early booking", provide: "Better access to popular suites and itineraries", best: "High-demand voyages" },
    { icon: Ship, opportunity: "Longer voyages", provide: "Potential value through included experiences", best: "Extended travelers" },
];

const offerTypes = ["Reduced cruise fares", "Onboard credit", "Special pricing", "Added-value amenities", "Past-guest opportunities", "Suite-specific incentives", "Group opportunities", "Other promotional benefits"];
const offerConditions = ["Booking dates", "Departure dates", "Suite categories", "Availability", "Minimum length of cruise", "Payment terms", "Cancellation conditions"];
const promoLookFor = ["The exact voyage", "Departure date", "Suite category", "Fare type", "Promotion expiration date", "What is actually included"];

const obcQuestions = ["How much credit is included?", "Is it per person or per suite?", "When is it applied?", "What can it be used toward?", "Does it expire?", "Can it be combined with another offer?", "Is unused credit refundable?"];

const clubBenefits = [
    { icon: Compass, title: "Future Cruise Planning" },
    { icon: Star, title: "Special Events" },
    { icon: Award, title: "Loyalty Recognition" },
    { icon: Percent, title: "Savings Opportunities" },
    { icon: Gift, title: "Onboard Privileges" },
    { icon: Sparkles, title: "Exclusive Communications" },

];

const advisorChecklist = ["Your current Seabourn Club status", "Your accumulated cruise history", "Benefits available on your next voyage", "Whether a current promotion can be combined with loyalty benefits", "Whether your booking is eligible for additional amenities"];

const repeatGuestReasons = ["Smaller luxury ships", "Suite accommodations", "Inclusive onboard experience", "Personalized service", "Expedition options", "Culinary program", "Destination-focused itineraries"];

const combineList = ["Past-guest offers", "Seabourn Club benefits", "Onboard credit", "Group benefits", "Travel advisor amenities", "Other promotional fares"];

const optionBFeatures = ["Onboard credit", "Better suite location", "More flexible conditions", "Past-guest benefits", "Additional advisor amenities"];

const suiteCategories = [
    { icon: Sailboat,  title: "Veranda Suites" },
    { icon: Gem,       title: "Penthouse Suites" },
    { icon: Snowflake, title: "Wintergarden Suites" },
    { icon: Sparkles,  title: "Signature Suites" },
    { icon: Compass,   title: "Expedition Suites" },
    { icon: Star,      title: "Higher-Category Accommodations" },
];

const earlyBookingLosses = ["Preferred suite location", "Specific suite category", "Popular departure date", "Highly desirable itinerary", "Limited expedition sailing"];
const earlyBookingItineraries = ["Antarctica", "Alaska", "Kimberley", "World Cruises", "Holiday sailings", "High-demand Mediterranean itineraries"];

const importantOfferTimes = [
    { icon: Ship, title: "Longer Voyages", text: "A percentage-based promotion can have a larger dollar impact on an extended cruise." },
    { icon: Compass, title: "Expedition Voyages", text: "Specialty itineraries can have limited inventory." },
    { icon: Globe, title: "World Cruises", text: "Even a relatively small change in fare or added benefit can have a meaningful impact on a long voyage." },
    { icon: Sailboat, title: "Shoulder-Season Itineraries", text: "Travelers with flexible dates may find stronger promotional opportunities." },
    { icon: Anchor, title: "Repeat Seabourn Cruises", text: "Past-guest and loyalty benefits can add another layer of value." },
];

const groupTypes = ["Families", "Friends", "Alumni organizations", "Corporate groups", "Nonprofit organizations", "Special-interest groups", "Celebration groups"];
const groupOccasions = ["Milestone celebrations", "Family reunions", "Multi-generational travel", "Birthday trips", "Anniversary celebrations", "Friends traveling together", "University or alumni groups"];

const advisorHelpList = [
    { icon: Sparkles,      title: "Current Seabourn promotions" },
    { icon: UserCheck,     title: "Past-guest benefits" },
    { icon: Award,         title: "Seabourn Club status" },
    { icon: Gem,           title: "Suite availability" },
    { icon: Users,         title: "Group opportunities" },
    { icon: CreditCard,    title: "Onboard credit" },
    { icon: Gift,          title: "Special amenities" },
    { icon: Map,           title: "Itinerary alternatives" },
    { icon: Calendar,      title: "Different departure dates" },
];

const tripsAndShipsMonitorList = [
    { icon: Sparkles,      title: "Current Seabourn promotions" },
    { icon: Percent,       title: "New offers released after an initial quote" },
    { icon: Gem,           title: "Suite availability" },
    { icon: UserCheck,     title: "Past-guest opportunities" },
    { icon: Award,         title: "Seabourn Club benefits" },
    { icon: CreditCard,    title: "Onboard credits" },
    { icon: Users,         title: "Group opportunities" },
    { icon: Anchor,        title: "Preferred suite locations" },
    { icon: Map,           title: "Alternative itineraries" },
];

const maximizeSteps = [
    { title: "Choose the Right Itinerary", text: "Start with the destination and travel dates." },
    { title: "Choose the Right Ship", text: "Decide whether an ocean ship or expedition vessel is the better fit." },
    { title: "Select the Right Suite", text: "Consider location, size, veranda and amenities." },
    { title: "Check Current Promotions", text: "Look for applicable Seabourn offers." },
    { title: "Check Your Loyalty Status", text: "Confirm your Seabourn Club benefits and past-guest opportunities." },
    { title: "Compare the Complete Value", text: "Consider: Fare + onboard credit + loyalty benefits + suite + itinerary + advisor amenities." },
];

const askBeforeBooking = [
    "What is the final cruise fare?",
    "What promotion is being applied?",
    "Is the promotion per person or per suite?",
    "Is onboard credit included?",
    "What can the onboard credit be used for?",
    "Can my Seabourn Club benefits be applied?",
    "Is there a past-guest offer?",
    "Can this promotion be combined with other benefits?",
    "Are there group opportunities?",
    "What suite categories qualify?",
    "Are there different offers on nearby departure dates?",
    "Is there a better value available on another itinerary?",
];

const askBeforeBookingSections = [
    {
        title: "Fare & Promotions",
        icon: Percent,
        questions: [
            "What is the final cruise fare?",
            "What promotion is being applied?",
            "Is the promotion per person or per suite?",
            "What suite categories qualify?"
        ]
    },
    {
        title: "Perks & Stacking",
        icon: Gift,
        questions: [
            "Is onboard credit included?",
            "What can the onboard credit be used for?",
            "Can my Seabourn Club benefits be applied?",
            "Is there a past-guest offer?"
        ]
    },
    {
        title: "Strategy & Dates",
        icon: HelpCircle,
        questions: [
            "Can this promotion be combined with other benefits?",
            "Are there group opportunities?",
            "Are there different offers on nearby departure dates?",
            "Is there a better value available on another itinerary?"
        ]
    }
];


const offersVsClubRows = [
    { feature: "Purpose", offers: "Promotional value", club: "Loyalty recognition" },
    { feature: "Availability", offers: "Changes by promotion", club: "Based on guest history" },
    { feature: "Applies to first-time guests", offers: "Often", club: "No past cruise history required" },
    { feature: "Past guests", offers: "May qualify", club: "Yes" },
    { feature: "Onboard credit", offers: "May be included", club: "Depends on applicable benefit" },
    { feature: "Discounts", offers: "May be offered", club: "Depends on status/program" },
    { feature: "Group opportunities", offers: "Sometimes", club: "Separate consideration" },
    { feature: "Best strategy", offers: "Compare current offers", club: "Check status before booking" },
];

const commonMistakes = [
    { title: "Looking Only at the Percentage Discount", text: "A smaller promotion can sometimes provide greater overall value." },
    { title: "Forgetting About Seabourn Club", text: "Repeat guests should always verify their loyalty benefits." },
    { title: "Ignoring Onboard Credit", text: "Credit can be valuable if you already plan to spend on eligible onboard experiences." },
    { title: "Waiting Too Long", text: "A future promotion may not be worth losing your preferred suite." },
    { title: "Comparing Different Suite Categories", text: "A cheaper fare isn't necessarily comparable if it is for a substantially different suite." },
    { title: "Assuming Promotions Stack", text: "Always confirm the terms before assuming two benefits can be combined." },
];



/* ── Main Component ──────────────────────────────────────────────── */
const SeabournOffersLoyaltyGuide = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Offers & Seabourn Club Benefits: 2026 Guide</title>
                <meta name="title" content="Seabourn Offers, Deals & Seabourn Club Benefits" />
                <meta
                    name="description"
                    content="Explore Seabourn offers, promotions, onboard credits and Seabourn Club benefits. Learn how past guests can save, earn loyalty rewards and maximize cruise value."
                />
                <script type="application/ld+json">{JSON.stringify(seabournOffersLoyaltySchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Offers <br /> and Seabourn Club Benefits</h1>
                    <p>
                        Planning a Seabourn cruise is about more than finding the lowest advertised fare. The best value can come from understanding current Seabourn offers, past-guest benefits, onboard credits, loyalty rewards and group opportunities before you book.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Seabourn periodically offers promotions that can change the economics of a luxury cruise, including savings on select voyages, reduced fares, onboard credits or other booking incentives. Past guests may also have access to additional benefits through Seabourn Club, the cruise line's loyalty program.
                            </p>
                            <p>
                                For travelers comparing luxury cruise lines, the important question is not simply "What is the Seabourn discount?" It is: What combination of fare, promotion, loyalty benefits and included value gives me the best overall Seabourn experience? This guide explains how to evaluate Seabourn offers and make the most of Seabourn Club benefits.
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
                            Explore Current Seabourn Offers
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK GUIDE TABLE ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-quick-guide">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At a Glance</span>
                        <h2 className="Sbc-h2">Quick Guide to Seabourn Offers</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sol-table-wrap">
                        <table className="Sol-table">
                            <thead>
                                <tr>
                                    <th>Opportunity</th>
                                    <th>What It Can Provide</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickGuideRows.map((row, i) => {
                                    const Icon = row.icon;
                                    return (
                                        <tr key={i}>
                                            <td data-label="Opportunity">
                                                <span className="Sol-table-opportunity">
                                                    <Icon size={18} strokeWidth={1.75} />
                                                    {row.opportunity}
                                                </span>
                                            </td>
                                            <td data-label="What It Can Provide">{row.provide}</td>
                                            <td data-label="Best For">{row.best}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="Sbc-suite-strategy Sol-note">
                        <p>
                            <strong>Important:</strong> Seabourn promotions are voyage- and date-specific and can change. Always verify the terms of a promotion before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHAT ARE SEABOURN OFFERS ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-what-are-offers">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Understanding Promotions</span>
                        <h2 className="Sbc-h2">What Are Seabourn Offers?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn offers are promotional opportunities that may apply to selected cruises, dates, destinations, suites or booking conditions.
                        </p>
                    </div>

                    {/* Top full-width image */}
                    <div className="Sol-offers-top-image">
                        <div className="Sol-offers-top-placeholder">
                            <div className="Sol-offers-top-icon-wrap">
                                <Gift size={44} />
                            </div>
                            <span className="Sol-offers-top-placeholder-text">Seabourn Offers — What's Available</span>
                        </div>
                    </div>

                    {/* Left + Right cards */}
                    <div className="Sol-offers-cards-row">
                        {/* Left card — offer types checklist */}
                        <div className="Sol-offers-card">
                            <div className="Sbc-brand-highlights" style={{ margin: 0 }}>
                                <h4 className="Sbc-highlights-title">Depending on the promotion, an offer may provide:</h4>
                                <ul className="Sbc-highlights-list">
                                    {offerTypes.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sol-offers-card-note">
                                That is why comparing the effective value of the entire booking is more useful than comparing headline percentages alone.
                            </p>
                        </div>

                        {/* Right card — offer conditions */}
                        <div className="Sol-offers-card Sol-offers-card-alt">
                            <h4 className="Sol-subcard-title">Not every promotion applies to every sailing.</h4>
                            <p className="Sbc-p" style={{ marginBottom: "16px" }}>A seemingly attractive discount may also have specific requirements involving:</p>
                            <div className="Sol-tag-list">
                                {offerConditions.map((item, i) => (
                                    <span key={i} className="Sol-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW TO FIND CURRENT PROMOTIONS ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-find-promotions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Research First</span>
                        <h2 className="Sbc-h2">How to Find Current <br /> Seabourn Promotions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn promotions can change frequently. When searching for an offer, look at:
                        </p>
                    </div>

                    <div className="Sol-checklist-centered">
                        <ul className="Sbc-highlights-list Sol-highlights-centered">
                            {promoLookFor.map((item, idx) => (
                                <li key={idx}>
                                    <Check size={22} strokeWidth={2.5} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="Sbc-p Sol-centered-p">
                        A promotion that looks excellent on one sailing may not be available on another. For that reason, travelers should avoid choosing an itinerary solely because it has the largest advertised discount.
                    </p>
                </div>
            </section>

            {/* ── CRUISE DEALS: WHAT TO COMPARE ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-what-to-compare">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Beyond the Headline Number</span>
                        <h2 className="Sbc-h2">Seabourn Cruise Deals: What Should You Compare?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Suppose two Seabourn voyages have different promotional offers.
                        </p>
                    </div>

                    {/* Two offer scenario cards with VS divider */}
                    <div className="Sol-cmp-scenarios">
                        {/* Card A */}
                        <div className="Sol-cmp-card">
                            <div className="Sol-cmp-label">One may advertise</div>
                            <div className="Sol-cmp-icon-wrap">
                                <Percent size={36} strokeWidth={1.5} />
                            </div>
                            <div className="Sol-cmp-figure">20% off</div>
                        </div>

                        {/* VS badge */}
                        <div className="Sol-cmp-vs">VS</div>

                        {/* Card B */}
                        <div className="Sol-cmp-card Sol-cmp-card-alt">
                            <div className="Sol-cmp-label">While another provides</div>
                            <div className="Sol-cmp-icon-wrap">
                                <CreditCard size={36} strokeWidth={1.5} />
                            </div>
                            <div className="Sol-cmp-figure">10% off + onboard credit</div>
                        </div>
                    </div>

                    {/* Better comparison formula */}
                    <div className="Sol-cmp-formula-block">
                        <p className="Sol-cmp-formula-label">A useful comparison is:</p>
                        <div className="Sol-cmp-formula-row">
                            {["Cruise fare", "Included benefits", "Promotional value", "Loyalty benefits", "Advisor amenities"].map((item, i, arr) => (
                                <span key={i} className="Sol-cmp-formula-item-wrap">
                                    <span className="Sol-cmp-formula-item">{item}</span>
                                    {i < arr.length - 1 && <span className="Sol-cmp-formula-plus">+</span>}
                                </span>
                            ))}
                        </div>
                        <div className="Sol-cmp-rather-than">
                            <span className="Sol-cmp-rather-label">rather than simply:</span>
                            <span className="Sol-cmp-rather-value">Advertised discount percentage</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* ── CTA 1 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Compare With Confidence</span>
                    <h3 className="Sbc-cta-title">Compare Your Seabourn Offer Options</h3>
                    <p className="Sbc-cta-text">
                        Let us help you evaluate the complete Seabourn booking value across fare, onboard credit, loyalty benefits and suite category.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Compare My Offers
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── ONBOARD CREDIT ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-onboard-credit">
                <div className="Sbc-container">

                    {/* Section header — centered */}
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">A Useful Perk</span>
                        <h2 className="Sbc-h2">Seabourn Onboard Credit</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Onboard credit can be one of the more useful promotional benefits when it is included with a booking.
                        </p>
                    </div>

                    {/* Top full-width image placeholder */}
                    <div className="Sol-obc-top-image">
                        <div className="Sol-obc-top-placeholder">
                            <div className="Sol-obc-top-icon-wrap">
                                <CreditCard size={44} strokeWidth={1.5} />
                            </div>
                            <span className="Sol-obc-top-placeholder-text">Seabourn Onboard Credit</span>
                        </div>
                    </div>

                    {/* Left + Right cards */}
                    <div className="Sol-obc-cards-row">

                        {/* Left card — description + potential uses */}
                        <div className="Sol-obc-card">
                            <p className="Sol-obc-body">
                                Depending on the applicable offer and terms, onboard credit may help offset eligible onboard expenses.
                            </p>
                            <p className="Sol-obc-body">
                                Potential uses can include certain:
                            </p>
                            <div className="Sol-obc-uses-list">
                                {["Spa services", "Shore excursions", "Boutique purchases", "Other eligible onboard expenses"].map((use, i) => (
                                    <div key={i} className="Sol-obc-use-item">
                                        <span className="Sol-obc-use-dot"></span>
                                        <span>{use}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="Sol-obc-warning">
                                <p className="Sol-obc-warning-text">
                                    <strong>However, onboard credit is not the same as cash.</strong> The exact restrictions depend on the terms of the offer, and unused credit may not be refundable.
                                </p>
                            </div>
                        </div>

                        {/* Right card — questions checklist */}
                        <div className="Sol-obc-card Sol-obc-card-alt">
                            <h4 className="Sol-obc-card-title">Before choosing an onboard-credit promotion, ask:</h4>
                            <ul className="Sol-obc-questions-list">
                                {obcQuestions.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={18} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="Sol-obc-card-footer">
                                These details can make a significant difference to the real value of the promotion.
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── SEABOURN CLUB / WHO CAN JOIN ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-seabourn-club">
                <div className="Sbc-container">

                    {/* Centered section header */}
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">The Loyalty Program</span>
                        <h2 className="Sbc-h2">Seabourn Club: <br /> The Loyalty Program</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    {/* Two side-by-side cards */}
                    <div className="Sol-club-cards-row">

                        {/* Left card — program overview */}
                        <div className="Sol-club-card">
                            <div className="Sol-club-card-icon-wrap">
                                <Award size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sol-club-card-title">About Seabourn Club</h3>
                            <p className="Sol-club-card-body">
                                Seabourn Club is Seabourn's loyalty program for past guests. The program recognizes repeat travelers and provides benefits that can become increasingly valuable as you continue sailing with Seabourn.
                            </p>
                            <p className="Sol-club-card-body">
                                Instead of treating each cruise as a completely separate purchase, repeat guests can potentially build a longer-term relationship with the brand through Seabourn Club.
                            </p>
                            <p className="Sol-club-card-body">
                                For travelers who already enjoy Seabourn's ships, service and style, loyalty benefits can be another reason to consider returning.
                            </p>
                        </div>

                        {/* Right card — who can join */}
                        <div className="Sol-club-card Sol-club-card-alt">
                            <div className="Sol-club-card-icon-wrap Sol-club-icon-alt">
                                <UserCheck size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="Sol-club-card-title Sol-club-title-alt">Who Can Join Seabourn Club?</h3>
                            <p className="Sol-club-card-body Sol-club-body-alt">
                                Guests who sail with Seabourn can participate in the Seabourn Club loyalty program.
                            </p>
                            <p className="Sol-club-card-body Sol-club-body-alt">
                                Your cruise history is important because Seabourn Club benefits are connected to your past Seabourn experience.
                            </p>
                            <div className="Sol-club-callout">
                                <p className="Sol-club-callout-text">
                                    If you have sailed with Seabourn previously, check your Seabourn Club account before booking another voyage to make sure your loyalty information is properly reflected.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── WHAT ARE SEABOURN CLUB BENEFITS ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-club-benefits">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Recognition & Privileges</span>
                        <h2 className="Sbc-h2">What Are Seabourn Club Benefits?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn Club benefits can provide recognition and additional privileges for repeat guests. Benefits can include opportunities related to:
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {clubBenefits.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p Sol-centered-p">
                        Because individual benefits and program terms can change, travelers should confirm the current benefits applicable to their Seabourn Club status.
                    </p>
                </div>
            </section>

            {/* ── LOYALTY LEVELS ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-loyalty-levels">
                <div className="Sbc-container">

                    {/* Centered title */}
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Cruise History</span>
                        <h2 className="Sbc-h2">Seabourn Club Loyalty Levels</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    {/* Left content + Right image */}
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                Seabourn Club is structured around a guest's cruise history. The more you sail with Seabourn, the more opportunities you may have to receive additional recognition and benefits.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "14px" }}>
                                Rather than focusing exclusively on the name of a loyalty level, travelers should look at the specific benefits attached to their current status. These can change as Seabourn updates the program.
                            </p>

                            <div className="Sbc-qa-card" style={{ marginTop: "24px" }}>
                                <h4 className="Sbc-qa-card-title">Your travel advisor can help you determine:</h4>
                                <ul className="Sbc-qa-list">
                                    {advisorChecklist.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Star size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Club Loyalty Levels</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* ── WHY SEABOURN CLUB MATTERS ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-why-club-matters">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Repeat Seabourn Guests Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Returning Guests</span>
                                <h2 className="Sbc-h2">Why Seabourn Club Matters for Repeat Guests</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>

                            <p className="Sbc-p">
                                For a first-time Seabourn traveler, the primary consideration may be: which itinerary and suite provide the best experience? For a repeat guest, another question becomes important: what additional value do I receive by returning to Seabourn?
                            </p>

                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Loyalty benefits can make repeat cruising more attractive, especially for travelers who already know they prefer Seabourn's:</h4>
                                <ul className="Sbc-qa-list Sol-circle-list">
                                    {repeatGuestReasons.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="Sol-circle-num">{idx + 1}</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Repeat Traveler Value</span>
                    <h3 className="Sbc-cta-title">Check Your Seabourn Club Status</h3>
                    <p className="Sbc-cta-text">
                        We'll confirm your loyalty benefits, past-guest opportunities and how they can apply to your next Seabourn voyage.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Check My Status
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── CAN OFFERS BE COMBINED ───────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-combine-offers">
                <div className="Sbc-container">

                    {/* Centered title */}
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Stacking Benefits</span>
                        <h2 className="Sbc-h2">Can Seabourn Offers Be Combined?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    {/* Left content + Right image */}
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <p className="Sbc-p">
                                Not necessarily. Some promotions can be combined with other benefits, while others cannot. The terms and conditions of the specific promotion determine whether it can be combined with:
                            </p>

                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px" }}>
                                <ul className="Sbc-highlights-list">
                                    {combineList.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="Sbc-p" style={{ marginTop: "24px" }}>
                                Never assume that stacking two offers will automatically produce a larger discount.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Layers size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Combining Seabourn Offers</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* ── OFFERS VS LOWEST FARE ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-vs-lowest-fare">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Total Value, Not Just Price</span>
                        <h2 className="Sbc-h2">Seabourn Offers vs. Lowest Fare</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The lowest advertised fare isn't always the best booking. For example, consider two options:
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <div className="Sbc-compare-placeholder">
                                <Ship size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Option A Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Option A</h3>
                            <p className="Sbc-compare-sub">Lower cruise fare but fewer added benefits.</p>
                            <ul className="Sbc-compare-list">
                                {["Lower headline fare", "No onboard credit", "No loyalty benefits applied", "Fewer booking amenities", "Standard conditions"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <div className="Sbc-compare-placeholder">
                                <Gem size={32} className="Sbc-compare-placeholder-icon" />
                                <span className="Sbc-compare-placeholder-text">Option B Image Placeholder</span>
                            </div>
                            <h3 className="Sbc-compare-heading">Option B</h3>
                            <p className="Sbc-compare-sub">Slightly higher fare with:</p>
                            <ul className="Sbc-compare-list">
                                {optionBFeatures.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-compare-key">
                        <p>Option B could potentially deliver greater overall value.</p>
                        <p>This is one reason luxury cruise pricing should be evaluated as a total-value decision, rather than simply a price-per-night calculation.</p>
                    </div>
                </div>
            </section>

            {/* ── SUITE PROMOTIONS ─────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-suite-promotions">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Suite Category Pricing</span>
                        <h2 className="Sbc-h2">Seabourn Suite Promotions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Promotional pricing can vary considerably by suite category. Understanding the differences can help you evaluate whether a promotion is genuinely attractive for the accommodation you want.
                        </p>
                    </div>

                    <div className="Sol-suite-promo-grid">
                        {suiteCategories.map((suite, i) => {
                            const Icon = suite.icon;
                            return (
                                <div className="Sol-suite-promo-card" key={i}>
                                    <div className="Sol-suite-promo-icon-wrap">
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sol-suite-promo-title">{suite.title}</h3>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Sol-suite-promo-note">
                        <span className="Sol-suite-promo-note-icon"><HelpCircle size={18} strokeWidth={1.75} /></span>
                        <p>When comparing promotions, always check the actual suite inventory available under the offer. A discounted fare is less useful if it applies only to a suite category that doesn't meet your needs.</p>
                    </div>
                </div>
            </section>

                        {/* ── GROUP OPPORTUNITIES + FAMILIES ───────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-groups">
                <div className="Sbc-container">

                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Traveling Together</span>
                        <h2 className="Sbc-h2">Seabourn Group Opportunities</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sol-group-cards-row">

                        {/* Card 1 — Group Opportunities */}
                        <div className="Sol-group-card">
                            {/* Image placeholder */}
                            <div className="Sol-group-card-img">
                                <div className="Sol-group-card-img-inner">
                                    <Users size={40} strokeWidth={1.25} />
                                    <span>Seabourn Group Opportunities</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="Sol-group-card-body">
                                <h3 className="Sol-group-card-title">Seabourn Group Opportunities</h3>
                                <p className="Sol-group-card-text">
                                    Traveling with a group can create additional opportunities.
                                </p>
                                <p className="Sol-group-card-label">Groups might include:</p>
                                <div className="Sol-tag-list">
                                    {groupTypes.map((item, i) => (
                                        <span key={i} className="Sol-tag">{item}</span>
                                    ))}
                                </div>
                                <p className="Sol-group-card-text" style={{ marginTop: "20px" }}>
                                    Group arrangements can potentially provide different pricing or amenities depending on the sailing and group size.
                                </p>
                                <p className="Sol-group-card-text">
                                    Because group terms vary, travelers should discuss the opportunity before everyone books individually.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 — Families and Groups */}
                        <div className="Sol-group-card Sol-group-card-alt">
                            {/* Image placeholder */}
                            <div className="Sol-group-card-img Sol-group-card-img-alt">
                                <div className="Sol-group-card-img-inner">
                                    <Heart size={40} strokeWidth={1.25} />
                                    <span>Seabourn for Families and Groups</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="Sol-group-card-body">
                                <h3 className="Sol-group-card-title">Seabourn for Families and Groups</h3>
                                <p className="Sol-group-card-text">
                                    A group booking can be particularly useful when multiple suites are being reserved together.
                                </p>
                                <p className="Sol-group-card-text">
                                    Instead of treating every traveler as an independent booking, a travel advisor can investigate whether the sailing supports a group arrangement.
                                </p>
                                <p className="Sol-group-card-label">This may be particularly valuable for:</p>
                                <ul className="Sol-group-occasions-list">
                                    {groupOccasions.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={17} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── BOOK EARLY ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-book-early">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Timing Your Booking</span>
                        <h2 className="Sbc-h2">Should You Book Early to Get a Seabourn Deal?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For popular itineraries, early planning can be more valuable than waiting for a larger discount. Luxury cruise inventory is limited, particularly in desirable suite categories.
                        </p>
                    </div>

                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Waiting for a promotional fare may mean losing:</h4>
                                <ul className="Sbc-highlights-list">
                                    {earlyBookingLosses.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-what-content">
                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">This is particularly relevant for:</h4>
                                <ul className="Sbc-highlights-list">
                                    {earlyBookingItineraries.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="Sbc-p Sol-centered-p">
                        The best strategy is often to compare the current promotion against the value of securing the right suite.
                    </p>
                </div>
            </section>

            {/* ── WHEN OFFERS MATTER MOST ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-when-important">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Worth Watching Closely</span>
                        <h2 className="Sbc-h2">When Are Seabourn Offers <br /> Most Important?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Promotions can be especially worth monitoring when planning:</p>
                    </div>

                    <div className="Sbc-exp-grid">
                        {importantOfferTimes.map((card, i) => {
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── CTA 3 ────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Celebrate Together</span>
                    <h3 className="Sbc-cta-title">Explore Group Cruise Opportunities</h3>
                    <p className="Sbc-cta-text">
                        Planning a milestone celebration, reunion or alumni trip? Let's discuss potential group pricing and amenities.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Ask About Group Rates
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            

            {/* ── TRAVEL ADVISOR HELP + TRIPS & SHIPS ──────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-advisor-help">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Expert Guidance</span>
                        <h2 className="Sbc-h2">How a Luxury Travel Advisor Can Help Maximize Seabourn Offers</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn promotions can be complicated because the best option isn't always the most obvious one. A knowledgeable luxury travel advisor can compare:
                        </p>
                    </div>

                    <div className="Sol-suite-promo-grid Sol-advisor-grid">
                        {advisorHelpList.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div className="Sol-suite-promo-card" key={i}>
                                    <div className="Sol-suite-promo-icon-wrap">
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sol-suite-promo-title">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p Sol-centered-p">
                        The objective is not simply to find a discount. It is to find the best overall booking value for the specific traveler.
                    </p>
                </div>
            </section>


            {/* ── MAXIMIZE VALUE - 6 STEPS ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-maximize-value">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">A Smart Strategy</span>
                        <h2 className="Sbc-h2">How to Maximize <br /> Your Seabourn Value</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">A smart Seabourn booking strategy can be broken into six steps.</p>
                    </div>

                    <div className="Sol-maximize-grid">
                        {/* Left column — steps 1–3 */}
                        <div className="Sol-maximize-col">
                            {maximizeSteps.slice(0, 3).map((step, i) => (
                                <div className="Sol-maximize-card" key={i}>
                                    <div className="Sol-maximize-num">{i + 1}</div>
                                    <div className="Sol-maximize-card-body">
                                        <h4 className="Sol-maximize-card-title">{step.title}</h4>
                                        <p className="Sol-maximize-card-text">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right column — steps 4–6 */}
                        <div className="Sol-maximize-col">
                            {maximizeSteps.slice(3).map((step, i) => (
                                <div className="Sol-maximize-card" key={i + 3}>
                                    <div className="Sol-maximize-num">{i + 4}</div>
                                    <div className="Sol-maximize-card-body">
                                        <h4 className="Sol-maximize-card-title">{step.title}</h4>
                                        <p className="Sol-maximize-card-text">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="Sbc-suite-strategy Sol-note">
                        <p>This produces a much more meaningful comparison than the advertised discount alone.</p>
                    </div>
                </div>
            </section>
            
            <section className="Sbc-section Sbc-bg-white" id="Sol-why-trips-ships">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Our Approach</span>
                        <h2 className="Sbc-h2">Why Book Seabourn Offers With Trips &amp; Ships?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            At Trips &amp; Ships Luxury Travel, the focus is on helping travelers evaluate the complete Seabourn booking rather than simply selecting the largest advertised promotion. Your advisor can help monitor:
                        </p>
                    </div>

                    <div className="Sol-suite-promo-grid Sol-advisor-grid">
                        {tripsAndShipsMonitorList.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div className="Sol-suite-promo-card" key={i}>
                                    <div className="Sol-suite-promo-icon-wrap">
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sol-suite-promo-title">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>

                    <p className="Sbc-p Sol-centered-p">
                        This can be particularly helpful when planning an expensive suite, expedition voyage or long Seabourn itinerary.
                    </p>
                </div>
            </section>


            {/* ── WHAT TO ASK BEFORE BOOKING ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-ask-before-booking">
                <div className="Sbc-container">
                    <div className="Sbc-section-header Scc-title-center">
                        <span className="Sbc-eyebrow">Ask The Right Questions</span>
                        <h2 className="Sbc-h2">Seabourn Offers: What to Ask Before Booking</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Before committing to a promotion, make sure to ask these essential questions:</p>
                    </div>

                    <div className="Sol-ask-grid">
                        {askBeforeBookingSections.map((section, i) => {
                            const Icon = section.icon;
                            return (
                                <div className="Sol-ask-card" key={i}>
                                    <div className="Sol-ask-card-header">
                                        <div className="Sol-ask-icon-wrap">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="Sol-ask-card-title">{section.title}</h3>
                                    </div>
                                    <ul className="Sol-ask-list">
                                        {section.questions.map((q, idx) => (
                                            <li key={idx} className="Sol-ask-item">
                                                <span className="Sol-ask-qmark">?</span>
                                                <span className="Sol-ask-text">{q}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div className="Sol-ask-footer-note">
                        <p>These questions can uncover hidden booking opportunities that aren't obvious from a basic online fare search.</p>
                    </div>
                </div>
            </section>

            {/* ── OFFERS VS CLUB TABLE ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-offers-vs-club">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Side by Side</span>
                        <h2 className="Sbc-h2">Seabourn Offers vs. Seabourn Club Benefits</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sol-table-wrap">
                        <table className="Sol-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Offers</th>
                                    <th>Seabourn Club</th>
                                </tr>
                            </thead>
                            <tbody>
                                {offersVsClubRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature"><strong>{row.feature}</strong></td>
                                        <td data-label="Seabourn Offers">{row.offers}</td>
                                        <td data-label="Seabourn Club">{row.club}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Sbc-p Sol-centered-p">The two concepts should be evaluated together rather than separately.</p>
                </div>
            </section>

            {/* ── COMMON MISTAKES ──────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sol-mistakes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Avoid These Pitfalls</span>
                        <h2 className="Sbc-h2">Common Seabourn Offer Mistakes</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid">
                        {commonMistakes.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <XCircle size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.text}</p>
                            </div>
                        ))}
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

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sol-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Common Questions</span>
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know about Seabourn offers and Seabourn Club benefits.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL CTA / VERDICT ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sol-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Recommendation</span>
                        <h2 className="Sbc-h2">Compare the Complete Value, Not Just the Discount</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            The best Seabourn booking strategy starts with the right itinerary, ship and suite, then layers in current promotions, Seabourn Club status, past-guest opportunities, onboard credit and any available group or advisor amenities.
                        </p>
                        <p className="Sbc-p">
                            Start by choosing the right itinerary and suite, then compare current promotions, Seabourn Club benefits, past-guest opportunities, onboard credit and any available group or advisor amenities.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Work with a knowledgeable advisor to compare fare, promotion, onboard credit, loyalty benefits, suite, itinerary and advisor amenities together, rather than choosing a cruise based on the biggest advertised discount alone.
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

export default SeabournOffersLoyaltyGuide;