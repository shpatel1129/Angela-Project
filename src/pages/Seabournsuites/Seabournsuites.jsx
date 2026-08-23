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
    Users,
    Award,
    AlertCircle,
    Star,
    Crown,
    MapPin,
    Dot,

} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "./Seabournsuites.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/suites/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/suites/",
      "name": "Seabourn Suites: Complete Guide",
      "description": "Explore Seabourn suites, suite categories, sizes, verandas, amenities, locations and accommodation options to help you choose the right Seabourn suite for your cruise.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "about": {
        "@type": "Brand",
        "name": "Seabourn"
      }
    },

    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/seabourn-cruises/suites/#article",
      "url": "https://www.tripsandships.com/seabourn-cruises/suites/",
      "headline": "Seabourn Suites: Complete Guide",
      "description": "A complete guide to Seabourn suites, including suite categories, sizes, verandas, locations, amenities and how to choose the right accommodation for your Seabourn cruise.",
      "mainEntityOfPage": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/suites/#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Angela Hughes"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      "about": {
        "@type": "Brand",
        "name": "Seabourn"
      },
      "keywords": [
        "Seabourn suites",
        "Seabourn suite guide",
        "Seabourn suite categories",
        "Seabourn suites sizes",
        "Seabourn suite amenities",
        "Seabourn suite verandas",
        "Seabourn suite locations",
        "best Seabourn suite"
      ],
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/suites/#breadcrumb",
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
          "name": "Seabourn Suites",
          "item": "https://www.tripsandships.com/seabourn-cruises/suites/"
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/suites/#suite-categories",
      "name": "Seabourn Suite Categories",
      "description": "A guide to the suite categories and accommodation options available across the Seabourn fleet.",
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Seabourn Suite Categories"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Seabourn Oceanfront Suites"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Seabourn Veranda Suites"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Seabourn Premium Suites"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/suites/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What suites does Seabourn offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn offers a range of luxury suite accommodations, with suite categories, sizes, locations, verandas and amenities varying by ship."
          }
        },
        {
          "@type": "Question",
          "name": "Do Seabourn suites have balconies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Seabourn suites feature private verandas, although the exact veranda configuration depends on the ship and suite category."
          }
        },
        {
          "@type": "Question",
          "name": "Are all Seabourn accommodations suites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn is known for an all-suite accommodation model, with luxury suite accommodations forming the foundation of its onboard experience."
          }
        },
        {
          "@type": "Question",
          "name": "How large are Seabourn suites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn suite sizes vary significantly by category and ship. Travelers should compare the interior space, veranda size and specific suite configuration when choosing an accommodation."
          }
        },
        {
          "@type": "Question",
          "name": "Which Seabourn suite is best?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best Seabourn suite depends on your priorities, including space, veranda size, location, amenities, privacy and budget."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in a Seabourn suite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn suites provide luxury accommodation and suite amenities, with specific features and benefits varying by suite category and ship."
          }
        },
        {
          "@type": "Question",
          "name": "Do Seabourn suites have ocean views?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seabourn's accommodation is designed around oceanfront suite experiences, although the exact view and configuration depend on the selected suite and ship."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose a Seabourn suite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare suite category, interior square footage, veranda size, location, amenities, privacy and price. The right choice depends on how you plan to use your suite during the voyage."
          }
        }
      ]
    }
  ]
};

/* ── FAQ Accordion (reused Sbc-faq classes) ─────────────────────── */
function SuitesFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Are all Seabourn cabins suites?", a: "Seabourn's accommodations are built around oceanfront suites rather than the traditional cabin categories used by many cruise lines." },
        { q: "What is the best Seabourn suite?", a: "For most travelers, the Veranda Suite offers the best balance of space, private outdoor access and value. Travelers wanting significantly more space should consider a Penthouse or premium suite." },
        { q: "What is the largest Seabourn suite?", a: "The Wintergarden Suite is among Seabourn's largest suite categories, with approximately 989 square feet of interior space plus a 197-square-foot veranda on the published specifications." },
        { q: "How big are Seabourn Veranda Suites?", a: "Published specifications show approximately 246–302 square feet of interior space plus a 68–83 square-foot veranda, depending on the suite." },
        { q: "Do Seabourn suites have balconies?", a: "Many Seabourn suites have private verandas. Ocean View Suites are the principal category without a private veranda, while Veranda and higher categories provide private outdoor space." },
        { q: "What is included in a Seabourn suite?", a: "Suite amenities include a personal suite host and attendant, walk-in closet, marble bathroom, in-suite bar, entertainment system, bath amenities, welcome Champagne and other services." },
        { q: "Do Seabourn suites have bathtubs?", a: "Seabourn's suite specifications generally include a full tub and separate shower, although travelers should confirm the exact configuration of their individual suite." },
        { q: "Do Seabourn suites have walk-in closets?", a: "Yes. Walk-in closets are listed among the standard amenities across Seabourn's suite categories." },
        { q: "Do Seabourn suites have a minibar?", a: "Seabourn suites include an in-suite bar with complimentary wines or spirits, and premium suites can receive an enhanced bar setup." },
        { q: "Do Seabourn suites include Wi-Fi?", a: "Seabourn includes Wi-Fi, with the specific package depending on the suite category. The line's premium suites receive the Stream Wi-Fi package, while standard categories receive the Surf package under the published suite benefits." },
        { q: "Which Seabourn suite is best for a long cruise?", a: "A Penthouse or premium suite can be especially appealing on a long voyage because the additional living space becomes more useful over time." },
        { q: "Which Seabourn suite is best for a honeymoon?", a: "A Veranda Suite is an excellent starting point for most couples. For a more luxurious honeymoon, consider a Penthouse Spa, Owner's, Signature or Wintergarden Suite." },
        { q: "Which Seabourn suite is best for families?", a: "Connecting Veranda and premium suites can create Grand Suite configurations with multiple sleeping areas, bathrooms and verandas on applicable ships." },
        { q: "Are Seabourn premium suites worth the upgrade?", a: "They can be, particularly for long voyages, celebrations, entertaining or travelers who spend significant time in their suite. Premium suites can provide substantially more interior and veranda space and enhanced amenities." },
        { q: "What is the difference between a Seabourn Veranda and Penthouse Suite?", a: "A Penthouse Suite provides substantially more interior living space and additional premium amenities than a standard Veranda Suite. The published examples show about 436 square feet inside for a Penthouse compared with 246–302 square feet for Veranda Suites." },
        { q: "What is the difference between an Owner's Suite and Signature Suite?", a: "Both are premium accommodations, but the Signature Suite is considerably larger in the published specifications, with approximately 859 square feet inside and a 493-square-foot veranda." },
        { q: "Do Seabourn expedition ships have balconies?", a: "Yes. Seabourn's expedition fleet includes oceanfront veranda suites, and the line highlights private furnished verandas on its expedition ships." },
        { q: "Do Seabourn Venture and Pursuit suites have binoculars?", a: "Yes. Seabourn provides Swarovski Optik binoculars in every suite on Venture and Pursuit for use during the voyage." },
        { q: "Which Seabourn suite is best for views?", a: "A Veranda or premium suite with a well-positioned private veranda is generally the best choice for travelers who prioritize scenery. On expedition ships, the ability to observe wildlife and landscapes from the suite is particularly valuable." },
        { q: "Should I book a higher deck on Seabourn?", a: "Not automatically. The best deck depends on your priorities, including motion sensitivity, views, proximity to public areas and the exact location of the suite. Always review the ship's current deck plan before selecting a specific suite." },
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
const quickAnswerRows = [
    { type: "Ocean View Suite", best: "Travelers who don't need a private veranda" },
    { type: "Veranda Suite", best: "Best overall balance" },
    { type: "Penthouse Suite", best: "More living space and entertaining" },
    { type: "Penthouse Spa Suite", best: "Travelers prioritizing wellness" },
    { type: "Owner's Suite", best: "Extra space and premium amenities" },
    { type: "Signature Suite", best: "Travelers wanting exceptional space and a huge veranda" },
    { type: "Wintergarden Suite", best: "Maximum space, entertaining and panoramic relaxation" },
];

const sizeRows = [
    { suite: "Ocean View Suite", interior: "Approx. 295 sq. ft.", veranda: "None" },
    { suite: "Veranda Suite", interior: "246–302 sq. ft.", veranda: "68–83 sq. ft." },
    { suite: "Penthouse Suite", interior: "Approx. 436 sq. ft.", veranda: "Approx. 98 sq. ft." },
    { suite: "Penthouse Spa Suite", interior: "536–539 sq. ft.", veranda: "167–200 sq. ft." },
    { suite: "Owner's Suite", interior: "526–593 sq. ft.", veranda: "133–354 sq. ft." },
    { suite: "Signature Suite", interior: "Approx. 859 sq. ft.", veranda: "Approx. 493 sq. ft." },
    { suite: "Wintergarden Suite", interior: "Approx. 989 sq. ft.", veranda: "Approx. 197 sq. ft." },
];

const verandaRows = [
    { suite: "Veranda Suites", size: "Approximately 68–83 sq. ft. veranda." },
    { suite: "Penthouse Suites", size: "Approximately 98 sq. ft. veranda on the published example." },
    { suite: "Penthouse Spa Suites", size: "Approximately 167–200 sq. ft. veranda." },
    { suite: "Owner's Suites", size: "Approximately 133–354 sq. ft. veranda, depending on the suite." },
    { suite: "Signature Suites", size: "Approximately 493 sq. ft. veranda." },
    { suite: "Wintergarden Suites", size: "Approximately 197 sq. ft. veranda." },
];

const suiteCategories = [
    {
        name: "Seabourn Ocean View Suite",
        subtitle: "Best for: Travelers who want Seabourn luxury without a private veranda",
        meta: "Approx. 295 sq. ft.",
        icon: Home,
        desc: [
            "The Ocean View Suite is the entry-level suite category on ships where it is offered.",
            "Despite being an entry category, it is substantially different from the standard cabin concept found on many cruise lines.",
            "A typical Ocean View Suite offers approximately 295 square feet of interior space."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Large picture window",
            "Queen-size bed or twin beds",
            "Comfortable living area",
            "Dining table for two",
            "Walk-in closet",
            "Interactive entertainment",
            "Fully stocked bar and refrigerator",
            "Makeup vanity",
            "Marble bathroom",
            "Separate tub and shower"
        ],
        bestTitle: "An Ocean View Suite can make sense if:",
        best: [
            "You spend most of your time ashore",
            "You don't need outdoor space",
            "You prefer to spend more on excursions",
            "You are looking for the lowest suite category",
            "You primarily use the room for sleeping and relaxing"
        ],
        differentTitle: "Main Drawback",
        different: [
            "There is no private veranda.",
            "If you love having morning coffee outdoors or watching sailaways from your own private space, upgrading to a Veranda Suite is likely worthwhile."
        ]
    },
    {
        name: "Seabourn Veranda Suite",
        subtitle: "Best for: Most travelers",
        meta: "246–302 sq. ft. + Veranda",
        icon: Sun,
        desc: [
            "For many guests, the Veranda Suite is the sweet spot in the Seabourn fleet.",
            "Seabourn describes Veranda Suites as spacious all-suite accommodations with a private furnished veranda.",
            "Published specifications show approximately 246–302 square feet of interior space plus a 68–83 square-foot veranda, depending on the specific suite."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Private veranda",
            "Full-length window",
            "Glass door to veranda",
            "Living area",
            "Queen-size bed or twin beds",
            "Dining table for two",
            "Walk-in closet",
            "Interactive TV",
            "Fully stocked bar",
            "Refrigerator",
            "Marble bathroom",
            "Double vanities"
        ],
        bestTitle: "Why Veranda Suites are popular (You can):",
        best: [
            "Have coffee outside",
            "Read privately",
            "Watch scenery & sailaways",
            "Enjoy room-service meals",
            "Relax after excursions",
            "Enjoy sunset drinks"
        ],
        differentTitle: "Recommendation",
        different: [
            "For a first Seabourn cruise, this is the category I would start with."
        ]
    },
    {
        name: "Penthouse Suite",
        subtitle: "Best for: Travelers who want significantly more living space",
        meta: "Approx. 436 sq. ft. + Veranda",
        icon: Gem,
        desc: [
            "The Penthouse Suite is a substantial upgrade from a standard Veranda Suite.",
            "Seabourn lists its Penthouse Suite at approximately 436 square feet of interior space plus a 98-square-foot veranda on the applicable ships."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Separate living area",
            "Private veranda",
            "Queen-size bed or twin beds",
            "Walk-in closet",
            "Personal safe",
            "Interactive TV",
            "Fully stocked bar",
            "Refrigerator",
            "Writing desk",
            "Vanity",
            "Spacious marble bathroom",
            "Separate tub and shower"
        ],
        bestTitle: "A Penthouse Suite makes sense for:",
        best: [
            "Longer voyages",
            "Honeymoons and anniversaries",
            "Travelers who entertain",
            "Guests who spend significant time in their suite",
            "Travelers who value a separate living area"
        ],
        differentTitle: "Additional Amenities",
        different: [
            "Penthouse Suites include enhanced amenities such as a Nespresso machine, fresh flowers, customized fruit selection, and full-sized Molton Brown bath products."
        ]
    },
    {
        name: "Penthouse Spa Suite",
        subtitle: "Best for: Wellness-focused travelers",
        meta: "536–539 sq. ft. + Veranda",
        icon: Waves,
        desc: [
            "The Penthouse Spa Suite combines more space with enhanced wellness-oriented amenities.",
            "Published specifications show approximately 536–539 square feet of interior space with a 167–200 square-foot veranda, depending on the specific accommodation."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Comfortable living area",
            "Private veranda",
            "Queen or twin beds",
            "Walk-in closet",
            "Personal safe",
            "Interactive entertainment",
            "Fully stocked bar",
            "Refrigerator",
            "Marble bathroom",
            "Double vanities"
        ],
        bestTitle: "Wellness Benefits",
        best: [
            "Second in-suite bar with healthy options",
            "Spa loofahs and bath sponges",
            "Essential oil diffusion & background music",
            "Access to the Spa Serene Area",
            "Spa Concierge services"
        ],
        differentTitle: "Is the Penthouse Spa Suite worth it?",
        different: [
            "If you are not particularly interested in wellness, probably not. But for someone who regularly uses spa facilities, wellness services, relaxation areas, and in-suite wellness amenities, it can be a meaningful upgrade."
        ]
    },
    {
        name: "Seabourn Owner's Suite",
        subtitle: "Best for: Travelers who want a premium entertaining space",
        meta: "526–593 sq. ft. + Veranda",
        icon: Award,
        desc: [
            "Owner's Suites are significantly larger than standard Veranda Suites.",
            "Published specifications show approximately 526–593 square feet of interior space, with veranda sizes ranging from approximately 133 to 354 square feet, depending on the suite."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Expansive ocean views",
            "Forward-facing windows",
            "Dining for four to six",
            "Whirlpool bathtub",
            "Guest bathroom",
            "Pantry",
            "Wet bar",
            "Two flat-screen TVs",
            "Large veranda"
        ],
        bestTitle: "Why choose an Owner's Suite? It is attractive for:",
        best: [
            "Couples celebrating a major milestone",
            "Long voyages",
            "Entertaining friends",
            "Families",
            "Travelers who spend substantial time onboard & want a larger dining/living area"
        ]
    },
    {
        name: "Seabourn Signature Suite",
        subtitle: "Best for: Maximum entertaining space and an enormous veranda",
        meta: "Approx. 859 sq. ft. + Veranda",
        icon: Landmark,
        desc: [
            "The Signature Suite is one of Seabourn's premium accommodations.",
            "Seabourn publishes approximately 859 square feet of interior space plus a 493-square-foot veranda for the Signature Suite."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Expansive ocean views",
            "Forward-facing windows",
            "Dining for four to six",
            "Whirlpool bathtub",
            "Guest bathroom",
            "Pantry",
            "Wet bar",
            "Two flat-screen TVs",
            "Large private veranda"
        ],
        bestTitle: "Who should choose it? It stands out for:",
        best: [
            "Family celebrations",
            "Entertaining",
            "Long voyages",
            "Multi-generational travel",
            "Travelers who want a true residential-style suite with a massive veranda"
        ],
        differentTitle: "Why it stands out",
        different: [
            "The combination of large interior space and enormous outdoor space makes the Signature Suite particularly attractive for travelers who love spending time outside."
        ]
    },
    {
        name: "Seabourn Wintergarden Suite",
        subtitle: "Best for: The ultimate Seabourn suite experience",
        meta: "Approx. 989 sq. ft. + Veranda",
        icon: Snowflake,
        desc: [
            "The Wintergarden Suite is one of the largest and most distinctive accommodations in the fleet.",
            "Seabourn lists approximately 989 square feet of interior space plus a 197-square-foot veranda for this suite category."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Large windows",
            "Dining for six",
            "Whirlpool bathtub",
            "Guest bathroom",
            "Pantry",
            "Wet bar",
            "Convertible sofa bed",
            "Two closets",
            "Two flat-screen TVs",
            "Glass-enclosed solarium",
            "Tub and day bed",
            "Private veranda"
        ],
        bestTitle: "Why it is special",
        best: [
            "Functions like a private luxury residence at sea",
            "Multiple dedicated areas for dining, relaxing, and entertaining",
            "Panoramic relaxation in the glass-enclosed solarium",
            "Especially valuable for world cruises or extended voyages"
        ]
    },
    {
        name: "Grand Suite Configurations",
        subtitle: "Best for: Families, Multi-generational groups, Two couples traveling together, Friends, Celebration groups",
        meta: "Connecting Configurations",
        icon: Users,
        desc: [
            "Seabourn also offers connecting configurations on selected ships.",
            "Many premium suites can connect to adjoining Veranda Suites to create Grand Suite configurations."
        ],
        glanceTitle: "Typical Features",
        glance: [
            "Multiple sleeping areas",
            "Multiple bathrooms",
            "Multiple verandas",
            "Expanded living space"
        ],
        bestTitle: "Best for:",
        best: [
            "Families & multi-generational groups",
            "Two couples traveling together",
            "Friends",
            "Celebration groups"
        ],
        differentTitle: "Why choose it",
        different: [
            "This can be a much better solution than booking separate rooms on different parts of the ship."
        ]
    }
];

const amenityGroups = [
    { title: "Comfort & Sleep", items: ["Personal suite host and attendant", "Queen or twin beds", "Custom-built mattress", "Cotton linens", "All-season duvet", "Pillow choice"] },
    { title: "In-Suite Bar & Bath", items: ["In-suite bar", "Complimentary wines or spirits", "Marble bathroom with double vanities", "Full tub and separate shower", "Molton Brown bath products"] },
    { title: "Service & Extras", items: ["Walk-in closet", "Robes and slippers", "Personal safe", "Interactive entertainment", "PressReader", "Welcome Champagne"] },
];

const serviceCards = [
    { icon: Heart, title: "Suite Host & Attendant", text: "Guests receive a personal suite host and suite attendant who help maintain the suite and handle requests, including nightly turndown, laundry-service assistance, replenishing ice, bar setup and drawing a bath." },
    { icon: Wine, title: "In-Suite Bar", text: "The in-suite bar is included across the principal suite categories. Seabourn says guests can request complimentary wines or spirits, with the bar setup tailored to preferences. Premium suites can receive an enhanced setup." },
    { icon: Waves, title: "Suite Bathrooms", text: "Standard suite amenities include marble bathrooms, double vanities, a full bathtub and a separate shower. Seabourn uses Molton Brown, London bath and beauty products across its suites." },
    { icon: Home, title: "Closets & Storage", text: "The line provides walk-in closets, personal safes, robes and slippers with space for clothing and luggage — especially valuable if you're considering a world cruise or multi-week itinerary." },
];

const locationCards = [
    { icon: Compass, title: "Midship", text: "Often a good choice for travelers who want a balanced location and generally easier access to public areas." },
    { icon: Sun, title: "Forward", text: "Can provide excellent views, but travelers sensitive to motion may prefer a more central location." },
    { icon: Anchor, title: "Aft", text: "Can provide distinctive wake views and potentially larger outdoor spaces on certain suites." },
    { icon: Mountain, title: "Higher Decks", text: "Can offer more elevated views and easier access to some public spaces. But higher is not automatically better." },
];

const viewDestinations = [
    {
        icon: Mountain,
        title: "Alaska",
        desc: "Prioritize a suite with excellent viewing opportunities and a private veranda if available.",
    },
    {
        icon: Snowflake,
        title: "Antarctica",
        desc: "Outdoor viewing becomes extremely valuable.",
    },
    {
        icon: Waves,
        title: "Norwegian fjords",
        desc: "A veranda can be particularly rewarding when sailing through dramatic landscapes.",
    },
    {
        icon: Landmark,
        title: "Mediterranean",
        desc: "A private veranda is excellent for coastal scenery and sailaways.",
    },
    {
        icon: Compass,
        title: "World cruises",
        desc: "The ability to step outside privately can become one of the most-used features of the suite.",
    },
];

const couplesRanking = [
    { rank: 1, name: "Veranda Suite", text: "Best balance of space and price." },
    { rank: 2, name: "Penthouse Suite", text: "Better for longer voyages." },
    { rank: 3, name: "Penthouse Spa Suite", text: "Ideal for wellness-oriented couples." },
    { rank: 4, name: "Owner's Suite", text: "For couples who want substantially more living space." },
    { rank: 5, name: "Signature / Wintergarden", text: "For travelers where budget is secondary to space and exclusivity." },
];

const worldCruiseRanking = [
    { rank: 1, name: "Owner's Suite", text: "Substantial space for an extended voyage." },
    { rank: 2, name: "Signature Suite", text: "Enormous veranda for daily outdoor time." },
    { rank: 3, name: "Wintergarden Suite", text: "The ultimate residential-style experience." },
    { rank: 4, name: "Penthouse Suite", text: "A meaningful step up in living space." },
    { rank: 5, name: "Veranda Suite", text: "Still a comfortable option for longer sailings." },
];

const chooseCards = [
    { title: "Best Overall", suite: "Veranda Suite", text: "Gives you the signature Seabourn experience without moving too far into premium-suite pricing." },
    { title: "Best Upgrade", suite: "Penthouse Suite", text: "A meaningful improvement in living space." },
    { title: "Best Wellness Choice", suite: "Penthouse Spa Suite", text: "Ideal for guests who prioritize spa and wellness." },
    { title: "Best Luxury Entertaining", suite: "Owner's or Signature Suite", text: "Excellent for extended voyages and socializing." },
];

const strategySteps = [
    { step: "1", title: "Choose the itinerary", text: "Don't start with the suite. Choose the destination first." },
    { step: "2", title: "Decide whether you need a veranda", text: "For most Seabourn travelers, I recommend one." },
    { step: "3", title: "Determine how much time you'll spend onboard", text: "More sea days = more value from a larger suite." },
    { step: "4", title: "Decide whether you need separate living space", text: "If yes, look at Penthouse or higher." },
    { step: "5", title: "Check the exact deck plan", text: "Don't book based solely on the category name." },
    { step: "6", title: "Check the actual square footage", text: "Two suites in the same category can have different dimensions." },
    { step: "7", title: "Compare the upgrade cost", text: "Ask \"What will I actually use?\" That prevents overpaying for features you won't enjoy." },
];

const worthItFor = ["You're taking a long cruise", "You entertain", "You want a separate living area", "You value extra space", "You're celebrating a major occasion"];
const worthItNot = ["You're rarely in the suite", "You spend most days ashore", "You're booking a short itinerary", "You would rather spend the difference on excursions"];

const veranda_enjoy = ["Morning coffee", "Sunset", "Coastal scenery", "Room service", "Reading", "Sailaways", "Quiet time"];

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournSuitesGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeSuiteTab, setActiveSuiteTab] = useState(0);


    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Suites: Complete Guide to Categories & Sizes</title>
                <meta name="title" content="Seabourn Suites Guide: Categories, Sizes, Verandas & Amenities" />
                <meta
                    name="description"
                    content="Compare Seabourn suites by category, size, veranda, location and amenities. See Ocean View, Veranda, Penthouse, Owner's, Signature and Wintergarden suites."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (reused Sbc-hero classes) ──────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Suites <br /> Complete Guide</h1>
                    <p>
                        A Seabourn cruise is built around a very different accommodation experience from a conventional cruise.
                    </p>
                    <p>
                        Rather than offering a large selection of traditional inside and balcony cabins, Seabourn's accommodations are oceanfront suites, with many featuring private verandas. The line's suite categories range from comfortable Ocean View and Veranda Suites to expansive Penthouse, Owner's, Signature and Wintergarden accommodations.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The right suite can significantly change your experience.
                            </p>
                            <p>
                                A traveler spending most of the day exploring ports may be perfectly happy in a well-located Veranda Suite. Someone taking a long voyage, celebrating a milestone or traveling with family may find the additional space of a premium suite much more valuable.
                            </p>
                            <p>
                                This guide explains Seabourn suite categories, square footage, veranda sizes, locations, amenities and which suites are worth considering for different types of travelers.
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
                            Start Planning Your Seabourn Suite
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER (new Sst-quicktable — no matching pattern in reference) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-quick-answer">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Answer</span>
                        <h2 className="Sbc-h2">Which Seabourn Suite Is Best?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For most travelers, a Veranda Suite is the best balance of space, private
                            outdoor access and value. But the best choice depends on your priorities.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Suite Type</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickAnswerRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.type}</td>
                                        <td>{row.best}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── SUITE CATEGORIES AT A GLANCE (reused Sbc-fleet-columns) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-categories-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Lineup</span>
                        <h2 className="Sbc-h2">Seabourn Suite Categories <br /> at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's exact categories vary somewhat by ship, but the fleet broadly
                            includes the categories below. Deck plans should always be reviewed before
                            selecting a specific suite.
                        </p>
                    </div>

                    <div className="Sbc-fleet-columns">
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Standard Suites</div>
                            <ul>
                                <li>Ocean View Suites</li>
                                <li>Veranda Suites</li>
                                <li>Penthouse Suites</li>
                                <li>Penthouse Spa Suites</li>
                            </ul>
                        </div>
                        <div className="Sbc-fleet-col">
                            <div className="Sbc-fleet-col-title">Premium Suites</div>
                            <ul>
                                <li>Owner's Suites</li>
                                <li>Signature Suites</li>
                                <li>Wintergarden Suites</li>
                                <li>Grand Suite configurations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITE SIZES TABLE (new Sst-quicktable reuse) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-suite-sizes">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">By The Numbers</span>
                        <h2 className="Sbc-h2">Seabourn Suite Sizes</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the biggest advantages of Seabourn is the amount of space provided
                            compared with conventional cruise cabins.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Suite</th>
                                    <th>Interior Space</th>
                                    <th>Veranda</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizeRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.suite}</td>
                                        <td>{row.interior}</td>
                                        <td>{row.veranda}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="Sbc-qa-warning-box" style={{ marginTop: "28px", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
                        These published dimensions are examples from Seabourn's suite portfolio and can
                        vary by ship and individual suite. Always check the deck plan for the specific
                        ship and sailing before booking.
                    </div>
                </div>
            </section>

            {/* ── SUITE CATEGORY TABS (reused Sbc-fleet-tab horizontal patterns) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-suite-tabs">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Explore Each Category</span>
                        <h2 className="Sbc-h2">Seabourn Suites, Category by Category</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            From the entry-level Ocean View Suite to the residential-style Wintergarden
                            Suite, here's what each category offers and who it suits best.
                        </p>
                    </div>

                    <div className="Sbc-fleet-tab-nav">
                        {suiteCategories.map((s, idx) => (
                            <button
                                key={idx}
                                className={`Sbc-fleet-tab-btn ${activeSuiteTab === idx ? "active" : ""}`}
                                onClick={() => setActiveSuiteTab(idx)}
                            >
                                <span className="Sbc-fleet-tab-name">{s.name}</span>
                                <span className="Sbc-fleet-tab-meta">{s.meta}</span>
                            </button>
                        ))}
                    </div>

                    <div className="Sbc-fleet-tab-panel">
                        <div className="Sbc-fleet-tab-grid">
                            <div className="Sbc-fleet-tab-left">
                                <div>
                                    <span className="Sbc-fleet-tab-badge">{suiteCategories[activeSuiteTab].meta}</span>
                                    <h3 className="Sbc-fleet-tab-title">{suiteCategories[activeSuiteTab].name}</h3>
                                    <div className="Sbc-fleet-tab-subtitle">{suiteCategories[activeSuiteTab].subtitle}</div>
                                </div>

                                <div className="Sbc-fleet-tab-desc">
                                    {suiteCategories[activeSuiteTab].desc.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                {suiteCategories[activeSuiteTab].different && (
                                    <div className="Sbc-fleet-tab-diff-box">
                                        <div className="Sbc-fleet-tab-diff-title">{suiteCategories[activeSuiteTab].differentTitle}</div>
                                        {suiteCategories[activeSuiteTab].different.map((p, dIdx) => (
                                            <p key={dIdx} className="Sbc-fleet-tab-diff-text">{p}</p>
                                        ))}
                                    </div>
                                )}

                                <div className="Sbc-fleet-tab-best-box">
                                    <div className="Sbc-fleet-tab-best-title">{suiteCategories[activeSuiteTab].bestTitle || "Best for:"}</div>
                                    <ul className="Sbc-fleet-tab-best-list">
                                        {suiteCategories[activeSuiteTab].best.map((item, bIdx) => (
                                            <li key={bIdx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="Sbc-fleet-tab-right">
                                <div className="Sbc-fleet-tab-image">
                                    {(() => {
                                        const ActiveSuiteIcon = suiteCategories[activeSuiteTab].icon;
                                        return <ActiveSuiteIcon size={32} className="Sbc-fleet-tab-image-icon" />;
                                    })()}
                                    <span className="Sbc-fleet-tab-image-text">{suiteCategories[activeSuiteTab].name} Image Placeholder</span>
                                </div>

                                <div className="Sbc-fleet-tab-glance-box">
                                    <div className="Sbc-fleet-tab-glance-title">{suiteCategories[activeSuiteTab].glanceTitle || "Typical Features"}</div>
                                    <ul className="Sbc-fleet-tab-glance-list">
                                        {suiteCategories[activeSuiteTab].glance.map((item, gIdx) => (
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

            {/* ── CTA 1 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Compare Suites</span>
                    <h3 className="Sbc-cta-title">Not Sure Which Suite Category Is Right For You?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare deck plans, square footage and pricing so you book the suite that
                        actually fits how you'll use it.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SUITE AMENITIES (reused Sbc-includes-grid, dark bg) ── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sst-amenities">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What's Included</span>
                        <h2 className="Sbc-h2">Seabourn Suite Amenities</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            One of the strongest aspects of the Seabourn experience is that even
                            entry-level suites receive a substantial set of amenities.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid">
                        {amenityGroups.map((group, i) => (
                            <div className="Sbc-includes-card" key={i}>
                                <div className="Sbc-includes-title">{group.title}</div>
                                <ul>
                                    {group.items.map((item, j) => (
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

            {/* ── BEST SUITE FOR ENTERTAINING ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-entertaining">
                <div className="Sbc-container">
                    <div className="Sst-ent-header">
                        <span className="Sbc-eyebrow">Hosting Friends</span>
                        <h2 className="Sbc-h2">Best Seabourn Suite for Entertaining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sst-ent-intro">
                            If you enjoy hosting friends in your suite, look first at:
                        </p>
                    </div>

                    <div className="Sst-ent-grid">
                        <div className="Sst-ent-suite-card">
                            <div className="Sst-ent-suite-icon">
                                <Wine size={28} />
                            </div>
                            <div className="Sst-ent-suite-name">Wintergarden Suite</div>
                            <div className="Sst-ent-suite-tag">Panoramic Entertaining</div>
                        </div>
                        <div className="Sst-ent-suite-card">
                            <div className="Sst-ent-suite-icon">
                                <Star size={28} />
                            </div>
                            <div className="Sst-ent-suite-name">Signature Suite</div>
                            <div className="Sst-ent-suite-tag">Premium Social Space</div>
                        </div>
                        <div className="Sst-ent-suite-card">
                            <div className="Sst-ent-suite-icon">
                                <Crown size={28} />
                            </div>
                            <div className="Sst-ent-suite-name">Owner's Suite</div>
                            <div className="Sst-ent-suite-tag">Ultimate Host's Suite</div>
                        </div>
                    </div>

                    <div className="Sst-ent-description">
                        <p>
                            These premium suites offer larger living and dining spaces. Seabourn specifically
                            describes its premium suites as ideal for entertaining, with separate bedrooms,
                            dining areas and expansive living spaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── VERANDA SIZES + SAME SIZE WARNING (reused table + warning box) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-verandas">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Outdoor Space</span>
                        <h2 className="Sbc-h2">Which Seabourn Suites Have Verandas?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Most of the suite categories above the Ocean View category feature private
                            outdoor space.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Suite</th>
                                    <th>Veranda Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {verandaRows.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.suite}</td>
                                        <td>{row.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── SUITE SERVICE / BAR / BATH / STORAGE (reused Sbc-card-grid Sbc-cols-4) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-service">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Suite Experience</span>
                        <h2 className="Sbc-h2">Service, Bar, Bathrooms & Storage</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {serviceCards.map((c, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <c.icon size={22} />
                                </div>
                                <h3 className="Sbc-card-title">{c.title}</h3>
                                <p className="Sbc-card-text">{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── ARE ALL SEABOURN SUITES THE SAME SIZE? (reused Sbc-qa-split pattern) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-same-size">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <span className="Sbc-eyebrow">Size Comparison</span>
                            <h2 className="Sbc-h2">Are All Seabourn Suites the Same Size?</h2>
                            <div className="Sbc-accent-line" style={{ margin: "18px 0" }}></div>
                            <p className="Sbc-p" style={{ fontWeight: 600, fontSize: "20px", marginBottom: "12px" }}>
                                No.
                            </p>
                            <p className="Sbc-p" style={{ marginBottom: "20px" }}>
                                This is an important point when booking.
                            </p>
                            <div className="Sbc-qa-card" style={{ marginTop: 0 }}>
                                <div className="Sbc-qa-card-title">Even within a single category, individual suites can differ in:</div>
                                <ul className="Sbc-qa-list">
                                    <li><Dot size={24} /><span>Interior square footage</span></li>
                                    <li><Dot size={24} /><span>Veranda size</span></li>
                                    <li><Dot size={24} /><span>Location</span></li>
                                    <li><Dot size={24} /><span>Bed configuration</span></li>
                                    <li><Dot size={24} /><span>View</span></li>
                                    <li><Dot size={24} /><span>Connecting-door configuration</span></li>
                                    <li><Dot size={24} /><span>Accessibility</span></li>
                                    <li><Dot size={24} /><span>Bathroom layout</span></li>
                                </ul>
                            </div>
                            <p className="Sbc-p" style={{ marginTop: "20px" }}>
                                Seabourn's deck plans should therefore be reviewed before selecting a specific suite. The published Encore/Ovation deck plans, for example, identify multiple Veranda categories and premium suite categories throughout the ship.
                            </p>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Map size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Deck Plan & Suite Size Comparison Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Deck Plan Help</span>
                    <h3 className="Sbc-cta-title">Let's Find Your Ideal Deck & Location</h3>
                    <p className="Sbc-cta-text">
                        Whether you're sensitive to motion or chasing the best views, we'll match the
                        right deck and location to your itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Talk to a Seabourn Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SUITE LOCATION (reused Sbc-card-grid Sbc-cols-4) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-location">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Placement Matters</span>
                        <h2 className="Sbc-h2">Does Suite Location Matter on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Absolutely. The best location depends on what bothers you most.
                        </p>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-4">
                        {locationCards.map((c, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <c.icon size={22} />
                                </div>
                                <h3 className="Sbc-card-title">{c.title}</h3>
                                <p className="Sbc-card-text">{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── BEST SUITES FOR VIEWS (cards layout) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-views">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Scenery-Focused Itineraries</span>
                        <h2 className="Sbc-h2">Best Seabourn Suites for Views</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For scenery-focused itineraries, the ideal suite depends on the destination.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {viewDestinations.map((d, i) => {
                            const Icon = d.icon;
                            return (
                                <div className="Sbc-suite-card" key={i}>
                                    <div className="Sbc-suite-card-image-placeholder">
                                        <Icon size={32} className="Sbc-suite-placeholder-icon" />
                                        <span className="Sbc-suite-placeholder-text">{d.title} Image Placeholder</span>
                                    </div>
                                    <div className="Sbc-suite-card-content">
                                        <h3 className="Sbc-h3">{d.title}</h3>
                                        <p className="Sbc-p" style={{ fontSize: "16px", color: "#556477", lineHeight: "1.65" }}>
                                            {d.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── BEST FOR SOLO TRAVELERS (reused Sbc-qa-split image-left pattern) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Solo Traveler Veranda Suite Image Placeholder</span>
                            </div>
                        </div>
                        <div className="Sbc-qa-content">
                            <span className="Sbc-eyebrow">Traveling Solo</span>
                            <h2 className="Sbc-h2">Best Seabourn Suites for Solo Travelers</h2>
                            <div className="Sbc-accent-line" style={{ margin: "18px 0" }}></div>
                            <p className="Sbc-p">
                                Solo travelers can enjoy any Seabourn suite category, but the Veranda
                                Suite often provides an excellent balance. The private veranda gives a
                                solo traveler personal outdoor space, a place to read, a quiet breakfast
                                location and a private retreat between excursions.
                            </p>
                            <div className="Sbc-qa-card">
                                <div className="Sbc-qa-card-title">A Veranda Suite Gives You</div>
                                <ul className="Sbc-qa-list">
                                    <li><Check size={24} /><span>Personal outdoor space</span></li>
                                    <li><Check size={24} /><span>A place to read</span></li>
                                    <li><Check size={24} /><span>A quiet breakfast location</span></li>
                                    <li><Check size={24} /><span>A private retreat</span></li>
                                </ul>
                                <p className="Sbc-qa-card-footer">The key consideration is the total fare and any applicable single supplement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RANKED LISTS: COUPLES & WORLD CRUISE (new Sst-rank-list) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-rankings">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Ranked For You</span>
                        <h2 className="Sbc-h2">Best Suites for Couples <br /> & World Cruises</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sst-rank-columns">
                        <div className="Sst-rank-col">
                            <h3 className="Sbc-h3">Best Seabourn Suites for Couples</h3>
                            <ol className="Sst-rank-list">
                                {couplesRanking.map((r) => (
                                    <li key={r.rank}>
                                        <span className="Sst-rank-num">{r.rank}</span>
                                        <div>
                                            <div className="Sst-rank-name">{r.name}</div>
                                            <p className="Sst-rank-text">{r.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="Sst-rank-col">
                            <h3 className="Sbc-h3">Best Seabourn Suite for a World Cruise</h3>
                            <ol className="Sst-rank-list">
                                {worldCruiseRanking.map((r) => (
                                    <li key={r.rank}>
                                        <span className="Sst-rank-num">{r.rank}</span>
                                        <div>
                                            <div className="Sst-rank-name">{r.name}</div>
                                            <p className="Sst-rank-text">{r.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST FOR FAMILIES (reused Sbc-qa-split pattern) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <span className="Sbc-eyebrow">Traveling Together</span>
                            <h2 className="Sbc-h2">Best Seabourn Suites for Families</h2>
                            <div className="Sbc-accent-line" style={{ margin: "18px 0" }}></div>
                            <p className="Sbc-p">
                                For families, don't simply choose the biggest single suite. Instead,
                                investigate connecting suites and Grand Suite configurations. Seabourn
                                notes that many premium suites can connect with adjoining Veranda Suites
                                to create larger Grand Suite configurations.
                            </p>
                            <div className="Sbc-qa-card">
                                <div className="Sbc-qa-card-title">Look For</div>
                                <ul className="Sbc-qa-list">
                                    <li><Check size={24} /><span>Connecting suites</span></li>
                                    <li><Check size={24} /><span>Grand Suite configurations</span></li>
                                    <li><Check size={24} /><span>Multiple bathrooms</span></li>
                                    <li><Check size={24} /><span>Multiple sleeping areas</span></li>
                                </ul>
                                <p className="Sbc-qa-card-footer">Particularly useful for multi-generational groups and celebration trips.</p>
                            </div>
                        </div>
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Families & Grand Suites Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* ── CTA 3 ─────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Ready to Choose Your Seabourn Suite?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare the actual suite, deck location, square footage, veranda and
                        itinerary before you book.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── EXPEDITION SUITES (reused Sbc-what-grid pattern) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <span className="Sbc-eyebrow">Built for Exploration</span>
                            <h2 className="Sbc-h2">Best Seabourn Suite for Expedition Cruises</h2>
                            <p className="Sbc-intro">
                                For Seabourn Venture and Seabourn Pursuit, the Veranda Suite can be
                                particularly attractive because the expedition experience is built around
                                observation. Seabourn's expedition ships feature oceanfront veranda
                                accommodations, and the line provides Swarovski Optik binoculars in every
                                suite on Venture and Pursuit.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px" }}>
                                <div className="Sbc-highlights-title">Consider Before Booking</div>
                                <ul className="Sbc-highlights-list">
                                    <li><Check size={22} /><span>View & balcony</span></li>
                                    <li><Check size={22} /><span>Deck location</span></li>
                                    <li><Check size={22} /><span>Expedition itinerary</span></li>
                                    <li><Check size={22} /><span>Wildlife viewing</span></li>
                                    <li><Check size={22} /><span>Proximity to expedition facilities</span></li>
                                    <li><Check size={22} /><span>Published sizes: ~355–689 sq. ft.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Snowflake size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Venture & Pursuit Suite Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── BEST SUITE FOR WELLNESS ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-wellness">
                <div className="Sbc-container">
                    <div className="Sst-well-layout">

                        {/* Left: content */}
                        <div className="Sst-well-content">
                            <span className="Sbc-eyebrow">Wellness Focus</span>
                            <h2 className="Sbc-h2">Best Seabourn Suite for Wellness</h2>
                            <div className="Sbc-accent-line"></div>

                            <p className="Sst-well-intro">The obvious choice is:</p>

                            {/* Suite spotlight badge */}
                            <div className="Sst-well-badge">
                                <div className="Sst-well-badge-icon">
                                    <Waves size={24} />
                                </div>
                                <div className="Sst-well-badge-details">
                                    <div className="Sst-well-badge-label">Recommended Suite</div>
                                    <div className="Sst-well-badge-name">Penthouse Spa Suite</div>
                                </div>
                            </div>

                            {/* Benefit pills */}
                            <div className="Sst-well-benefits">
                                <div className="Sst-well-benefits-title">Wellness Accommodations</div>
                                <div className="Sst-well-pills">
                                    <span className="Sst-well-pill"><Check size={14} /> Enhanced wellness-oriented features</span>
                                    <span className="Sst-well-pill"><Check size={14} /> Spa Serene Area access</span>
                                    <span className="Sst-well-pill"><Check size={14} /> Spa Concierge services</span>
                                </div>
                            </div>

                            {/* Closing insight */}
                            <div className="Sst-well-insight">
                                <p>
                                    It includes enhanced wellness-oriented features and access to the Spa Serene Area and Spa Concierge services.
                                </p>
                                <p>
                                    For travelers who treat wellness as a central part of their vacation, this can be more valuable than simply upgrading to a larger suite.
                                </p>
                            </div>
                        </div>

                        {/* Right: image placeholder */}
                        <div className="Sst-well-image-wrap">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Waves size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Penthouse Spa Suite Wellness Image Placeholder</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── IS A PENTHOUSE SUITE WORTH IT (reused Sbc-proscons-grid) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-worth-penthouse">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing the Upgrade</span>
                        <h2 className="Sbc-h2">Is a Seabourn Penthouse Suite Worth It?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">It depends on how much time you spend in your suite.</p>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Worth It If</h3>
                            <ul>
                                {worthItFor.map((item, i) => (
                                    <li key={i}><Check size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Probably Unnecessary If</h3>
                            <ul>
                                {worthItNot.map((item, i) => (
                                    <li key={i}><X size={16} strokeWidth={2} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEABOURN PREMIUM SUITE BENEFITS (reused Sbc-what-grid pattern) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-premium-benefits">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <span className="Sbc-eyebrow">Luxury Inclusions</span>
                            <h2 className="Sbc-h2">Seabourn Premium Suite Benefits</h2>
                            <div className="Sbc-accent-line"></div>
                            <p className="Sbc-p">
                                Premium suites receive additional amenities beyond the standard suite experience. Depending on category, these can include:
                            </p>
                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)' }}>
                                <div className="Sbc-highlights-title">Included Premium Amenities</div>
                                <ul className="Sbc-highlights-list">
                                    <li><Check size={24} /><span>Nespresso machine</span></li>
                                    <li><Check size={24} /><span>Fresh flowers</span></li>
                                    <li><Check size={24} /><span>Customized fresh fruit</span></li>
                                    <li><Check size={24} /><span>Enhanced bar</span></li>
                                    <li><Check size={24} /><span>Spa amenities</span></li>
                                    <li><Check size={24} /><span>Spa Serene access</span></li>
                                    <li><Check size={24} /><span>Spa Concierge</span></li>
                                    <li><Check size={24} /><span>Swarovski binoculars</span></li>
                                    <li><Check size={24} /><span>Daily newspaper through PressReader</span></li>
                                    <li><Check size={24} /><span>Complimentary private airport transfer for qualifying premium suites within 50 miles of the pier</span></li>
                                </ul>
                            </div>
                            <p className="Sbc-p">
                                The exact benefits depend on the suite category and applicable terms.
                            </p>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Award size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Premium Suite Benefits Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS A VERANDA SUITE WORTH IT (reused highlights list) ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-worth-veranda">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <span className="Sbc-eyebrow">The Sweet Spot</span>
                            <h2 className="Sbc-h2">Is a Seabourn Veranda Suite Worth It?</h2>
                            <p className="Sbc-intro">
                                For most travelers, yes. The price premium over an Ocean View Suite buys
                                something you will use repeatedly throughout the voyage: your own private
                                outdoor space.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: "24px" }}>
                                <div className="Sbc-highlights-title">If You Enjoy...</div>
                                <ul className="Sbc-highlights-list">
                                    {veranda_enjoy.map((item, i) => (
                                        <li key={i}><Check size={24} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Sun size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Veranda Suite Morning Coffee Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 4 (Veranda Suite Booking CTA) ── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Veranda Suite Booking</span>
                    <h3 className="Sbc-cta-title">Get the Best Deal on Your Veranda Suite</h3>
                    <p className="Sbc-cta-text">
                        Let us check current promotions, upgrade offers, and suite options for your select dates and itinerary.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get a Veranda Suite Quote
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── SEABOURN VENTURE & PURSUIT SUITE DIFFERENCE ── */}
            <section className="Sbc-section Sbc-bg-soft">
                <div className="Sbc-container">

                    {/* Header */}
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Expedition Fleet</span>
                        <h2 className="Sbc-h2">Seabourn Venture & Pursuit Suite Difference</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The expedition ships have their own suite configurations. Seabourn describes expedition Veranda Suites with:
                        </p>
                    </div>

                    {/* Size stat banner */}
                    <div className="Sst-exp-stat-banner">
                        <div className="Sst-exp-stat-icon"><Snowflake size={28} /></div>
                        <div className="Sst-exp-stat-body">
                            <span className="Sst-exp-stat-number">355 – 689 sq ft</span>
                            <span className="Sst-exp-stat-label">Published expedition suite configurations range from approximately 355 to 689 square feet for certain accommodations, depending on category.</span>
                        </div>
                    </div>

                    {/* Key difference intro */}
                    <p className="Sst-exp-difference-intro">
                        The important difference is that Venture and Pursuit are designed around expedition viewing and exploration. So when selecting a suite, consider:
                    </p>

                    {/* Two columns */}
                    <div className="Sst-exp-cols">
                        <div className="Sst-exp-col-card">
                            <div className="Sst-exp-col-icon"><Anchor size={22} /></div>
                            <div className="Sst-exp-col-title">Typical Expedition Features</div>
                            <ul className="Sst-exp-col-list">
                                <li><Check size={15} /><span>Queen or twin beds</span></li>
                                <li><Check size={15} /><span>Walk-in closet</span></li>
                                <li><Check size={15} /><span>Private furnished veranda</span></li>
                                <li><Check size={15} /><span>Separate shower and tub</span></li>
                            </ul>
                        </div>
                        <div className="Sst-exp-col-card">
                            <div className="Sst-exp-col-icon"><Compass size={22} /></div>
                            <div className="Sst-exp-col-title">Key Expedition Considerations</div>
                            <ul className="Sst-exp-col-list">
                                <li><Check size={15} /><span>View</span></li>
                                <li><Check size={15} /><span>Balcony</span></li>
                                <li><Check size={15} /><span>Deck</span></li>
                                <li><Check size={15} /><span>Expedition itinerary</span></li>
                                <li><Check size={15} /><span>Wildlife viewing</span></li>
                                <li><Check size={15} /><span>Proximity to expedition facilities</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="Sst-exp-footer-note">
                        rather than treating the expedition ships exactly like the conventional ocean fleet.
                    </div>

                </div>
            </section>



            {/* ── ARE SEABOURN SUITES WORTH THE PRICE ── */}
            <section className="Sbc-section Sbc-bg-white" id="Sst-worth-price">
                <div className="Sbc-container">

                    {/* Header */}
                    <div className="Sst-worth-header">
                        <span className="Sbc-eyebrow">The Bigger Picture</span>
                        <h2 className="Sbc-h2">Are Seabourn Suites Worth the Price?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sst-worth-lead">
                            This is one of the most important questions. The answer depends on what you value.
                            Seabourn isn't trying to compete with mainstream cruise lines on cabin price.
                        </p>
                    </div>

                    {/* Value proposition banner */}
                    <div className="Sst-worth-banner">
                        <div className="Sst-worth-banner-label">The Value Proposition — all included in your fare</div>
                        <div className="Sst-worth-formula">
                            {[
                                "Suite Accommodation",
                                "Personalized Service",
                                "Dining",
                                "Premium Beverages",
                                "Wi-Fi",
                                "Luxury Amenities"
                            ].map((item, i, arr) => (
                                <span key={i} className="Sst-worth-formula-wrap">
                                    <span className="Sst-worth-formula-item">{item}</span>
                                    {i < arr.length - 1 && <span className="Sst-worth-plus">+</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Two-col insight */}
                    <div className="Sst-worth-insight-row">
                        <div className="Sst-worth-insight-card Sst-worth-insight-main">
                            <div className="Sst-worth-insight-icon"><Gem size={24} /></div>
                            <p>
                                The suite is therefore part of the core luxury product rather than simply a
                                place to sleep.
                            </p>
                        </div>
                        <div className="Sst-worth-insight-card Sst-worth-insight-alt">
                            <div className="Sst-worth-insight-icon"><Home size={24} /></div>
                            <p>
                                Also worth considering: is an Owner's Suite worth it? The Owner's Suite is
                                primarily about space and entertaining — large living area, dining for guests, a
                                guest bathroom, large veranda and premium amenities. For travelers who simply
                                want a private outdoor space, a Veranda Suite may offer better overall value.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── SUITE SELECTION STRATEGY (new Sst-steps) ── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sst-strategy">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Booking Strategy</span>
                        <h2 className="Sbc-h2">Seabourn Suite Selection Strategy</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sst-steps-grid">
                        {strategySteps.map((s) => (
                            <div className="Sst-step-card" key={s.step}>
                                <span className="Sst-step-num">{s.step}</span>
                                <h3 className="Sst-step-title">{s.title}</h3>
                                <p className="Sst-step-text">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── WHAT I WOULD CHOOSE (new Sst-choice-grid, 5-up) ── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sst-choose">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">First-Time Seabourn Traveler?</span>
                        <h2 className="Sbc-h2">Seabourn Suites: What I Would Choose</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sst-choice-grid">
                        {chooseCards.map((c, i) => (
                            <div className="Sst-choice-card" key={i}>
                                <div className="Sst-choice-label">{c.title}</div>
                                <h3 className="Sbc-h3">{c.suite}</h3>
                                <p className="Sbc-card-text">{c.text}</p>
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

            {/* ── FAQ (reused Sbc-faq classes) ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">Everything travelers need to know before booking a Seabourn suite.</p>
                    </div>
                    <SuitesFAQ />
                </div>
            </section>



            {/* ── FINAL VERDICT (reused Sbc-verdict-* classes) ── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Suites Verdict</span>
                        <h2 className="Sbc-h2">Don't Choose by Category <br /> Name Alone</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn's suite program is one of the strongest parts of the brand. Even
                            the entry-level accommodation is a suite rather than a conventional cruise
                            cabin, while the upper categories can become genuine luxury residences at
                            sea.
                        </p>
                        <p className="Sbc-p">
                            For most travelers, the decision comes down to three choices: want the best
                            balance, choose a Veranda Suite; want more space, choose a Penthouse Suite;
                            want the ultimate experience, choose an Owner's, Signature or Wintergarden
                            Suite.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Don't choose a Seabourn suite solely
                                by category. Compare the actual suite, deck location, square footage,
                                veranda and itinerary before booking.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Suite
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SeabournSuitesGuide;