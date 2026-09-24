import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Award,
  Check,
  Minus,
  Plus,
  ArrowRight,
  Star,
  Compass,
  Sparkles,
  Ship,
  Utensils,
  Plane,
  MapPinned,
  BadgePercent,
  Home,
  ShieldCheck,
  Anchor,
  Waves,
  HeartHandshake,
  Rocket,
  Globe,
  Info,
  Mountain,
  Cherry,
  Palmtree,
  Snowflake,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage1 from "../../assets/ExploraJourneysWorth/Explora-Journeys.webp";
import HeroImage2 from "../../assets/ExploraJourneysCruises/explora-journeys-canada-new-england-fall-cruise.webp";
import HeroImage3 from "../../assets/LuxuryExploraJourneysGuide/Luxury-Explora-Journeys3.webp";
import ExploraPool from "../../assets/ExploraJourneysvsSeabourn/explora-journeys-ocean-wellness-spa-sunrise-pool-deck.webp";
import ExploraDining from "../../assets/ExploraJourneysCruises/Fine-Dining.webp";
import ExploraAtmosphere from "../../assets/ExploraJourneysCruises/Meridian-Lounge.webp";
import LuxuryOceanfront from "../../assets/ExploraIVGuide/greenland-expedition-cruise-arctic-luxury-voyage.jpg";
import ExploraShip from "../../assets/ExploraJourneysWorth/Explora-Journeys2.webp";
import ExploraSpa from "../../assets/ExploraJourneysCruises/explora-journeys-luxury-fitness-center-gym.webp";
import ExploraDestination from "../../assets/ExploraJourneysCruises/amalfi-coast-italy-mediterranean-hero-summer-2025.webp";
import ExploraSuiteImage from "../../assets/ExploraJourneysWorth/Explora-Suite.webp";
import ExploraLifeOnboard from "../../assets/ExploraJourneysCruises/onboard-experience.webp";
import ExploraSantorini from "../../assets/ExploraJourneysWorth/santorini-greece-mediterranean-luxury-cruise-view.jpg";

import Mediterranean from "../../assets/ExploraIVGuide/Mediterranean.png";
import Alaska from "../../assets/ExploraIVGuide/Alaska.png";
import Japan from "../../assets/ExploraIVGuide/Japan.png";
import Caribbean from "../../assets/ExploraIVGuide/Caribbean.png";
import NorthernEurope from "../../assets/ExploraIVGuide/NorthernEurope.png";
import IcelandGreenland from "../../assets/ExploraIVGuide/Iceland.png";

import CouplesImage from "../../assets/ExploraIVGuide/Couples.png";
import ExperiencedCruisersImage from "../../assets/ExploraIVGuide/Experienced-Luxury-Cruisers.png";
import SoloTravelersImage from "../../assets/ExploraIVGuide/Solo-Travelers.png";
import WellnessTravelersImage from "../../assets/ExploraIVGuide/Wellness-Focused-Travelers.png";
import FoodWineImage from "../../assets/ExploraIVGuide/Food-Wine-Enthusiasts.png";
import LuxuryHotelGuestsImage from "../../assets/ExploraIVGuide/Luxury-Hotel-Guests.png";

import { Helmet } from "react-helmet-async";
import "../LuxuryExploraJourneysGuide/LuxuryExploraJourneysGuide.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      "@id": "https://tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#webpage",
      name: "Why Luxury Travelers Are Choosing Explora Journeys",
      url: "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys",
      description:
        "Discover why discerning luxury travelers are choosing Explora Journeys for spacious all-suite accommodations, destination-focused itineraries, exceptional dining, personalized service, wellness experiences, and contemporary European luxury.",
    },
    {
      "@type": "Article",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#article",
      headline: "Why Luxury Travelers Are Choosing Explora Journeys",
      description:
        "An in-depth look at why today's luxury travelers are choosing Explora Journeys, covering spacious suites, boutique atmosphere, destinations, dining, wellness, service, design, and sustainability.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "TravelAgency",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#travelguide",
      name: "Trips & Ships Luxury Travel",
      description:
        "Expert guidance on Explora Journeys, the luxury lifestyle cruise brand of the MSC Group, for today's discerning luxury traveler.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Explora Journeys",
          item: "https://tripsandships.com/luxury-explora-journeys-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why Luxury Travelers Are Choosing Explora Journeys",
          item: "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#service",
      serviceType: "Luxury Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning for Explora Journeys sailings, including itinerary guidance, suite selection, dining recommendations, and onboard experience matching.",
    },
    {
      "@type": "TouristTrip",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#touristtrip",
      name: "Explora Journeys Luxury Cruise",
      touristType: "Luxury travelers, couples, and experienced cruisers",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "ItemList",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#itemlist",
      name: "Why Luxury Travelers Are Choosing Explora Journeys",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "A New Definition of Luxury",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Spacious Suites Designed Like Luxury Residences",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Boutique Luxury Instead of Mega Ships",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Destinations Take Center Stage",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Exceptional Culinary Experiences",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Wellness Is Part of the Journey",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Personalized Service Without Formality",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "More Time to Enjoy the Journey",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Carefully Curated Destinations",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Luxury Without Pretension",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Sustainability Matters",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Who Is Choosing Explora Journeys?",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tripsandships.com/why-luxury-travelers-are-choosing-explora-journeys/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why are luxury travelers choosing Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury travelers appreciate Explora's spacious all-suite accommodations, personalized service, destination-focused itineraries, flexible dining, and sophisticated onboard atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Explora different from other luxury cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora combines contemporary European design, wellness-focused experiences, longer port stays, and a relaxed luxury atmosphere that feels more like a boutique resort than a traditional cruise.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora suitable for experienced luxury travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many guests have previously sailed other luxury cruise lines and choose Explora for its modern approach and elegant style.",
          },
        },
        {
          "@type": "Question",
          name: "Are all accommodations suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every guest enjoys an oceanfront suite with a private terrace.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora good for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Spacious suites, fine dining, wellness facilities, and romantic destinations make it one of the most appealing luxury cruise options for couples.",
          },
        },
        {
          "@type": "Question",
          name: "Does Explora have formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The dress code is elegant and relaxed, allowing guests to enjoy luxury without traditional formal evenings.",
          },
        },
        {
          "@type": "Question",
          name: "Which destinations does Explora visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora sails throughout the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland & Greenland, Japan, Asia, and on select transoceanic voyages.",
          },
        },
        {
          "@type": "Question",
          name: "Is dining included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multiple gourmet restaurants and many premium beverages are included in the cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you select the ideal itinerary, recommend the right suite, and coordinate every aspect of your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Explora worth the investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking spacious accommodations, exceptional dining, personalized service, and destination-rich luxury travel, many guests find Explora Journeys offers outstanding value and a memorable experience.",
          },
        },
      ],
    },
  ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Why are luxury travelers choosing Explora Journeys?",
      a: "Luxury travelers appreciate Explora's spacious all-suite accommodations, personalized service, destination-focused itineraries, flexible dining, and sophisticated onboard atmosphere.",
    },
    {
      q: "What makes Explora different from other luxury cruise lines?",
      a: "Explora combines contemporary European design, wellness-focused experiences, longer port stays, and a relaxed luxury atmosphere that feels more like a boutique resort than a traditional cruise.",
    },
    {
      q: "Is Explora suitable for experienced luxury travelers?",
      a: "Yes. Many guests have previously sailed other luxury cruise lines and choose Explora for its modern approach and elegant style.",
    },
    {
      q: "Are all accommodations suites?",
      a: "Yes. Every guest enjoys an oceanfront suite with a private terrace.",
    },
    {
      q: "Is Explora good for couples?",
      a: "Absolutely. Spacious suites, fine dining, wellness facilities, and romantic destinations make it one of the most appealing luxury cruise options for couples.",
    },
    {
      q: "Does Explora have formal nights?",
      a: "No. The dress code is elegant and relaxed, allowing guests to enjoy luxury without traditional formal evenings.",
    },
    {
      q: "Which destinations does Explora visit?",
      a: "Explora sails throughout the Mediterranean, Caribbean, Alaska, Northern Europe, Iceland & Greenland, Japan, Asia, and on select transoceanic voyages.",
    },
    {
      q: "Is dining included?",
      a: "Yes. Multiple gourmet restaurants and many premium beverages are included in the cruise fare.",
    },
    {
      q: "Should I book through a travel advisor?",
      a: "Yes. A luxury travel advisor can help you select the ideal itinerary, recommend the right suite, and coordinate every aspect of your vacation.",
    },
    {
      q: "Is Explora worth the investment?",
      a: "For travelers seeking spacious accommodations, exceptional dining, personalized service, and destination-rich luxury travel, many guests find Explora Journeys offers outstanding value and a memorable experience.",
    },
  ];

  return (
    <div className="Asc-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`Asc-faq-item${open === i ? " Asc-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="Asc-faq-q">
            <span>{item.q}</span>
            <span className="Asc-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="Asc-faq-a">
              <div className="Asc-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const diningData = [
  {
    key: "mediterranean",
    icon: <Compass size={22} strokeWidth={1.6} />,
    eyebrow: "Mediterranean",
    title: "Mediterranean",
    image: Mediterranean,
    imageAlt: "Explora Journeys Mediterranean cruise",
    items: ["Food and wine", "Historic cities", "Coastal scenery"],
    accent: "adg-accent-rose",
  },

  {
    key: "alaska",
    icon: <Mountain size={22} strokeWidth={1.6} />,
    eyebrow: "Alaska",
    title: "Alaska",
    image: Alaska,
    imageAlt: "Explora Journeys Alaska cruise",
    items: ["Wildlife", "Nature", "Photography"],
    accent: "adg-accent-blue",
  },

  {
    key: "japan",
    icon: <Cherry size={22} strokeWidth={1.6} />,
    eyebrow: "Japan",
    title: "Japan",
    image: Japan,
    imageAlt: "Explora Journeys Japan cruise",
    items: ["Culture", "Gardens", "Temples"],
    accent: "adg-accent-purple",
  },

  {
    key: "caribbean",
    icon: <Palmtree size={22} strokeWidth={1.6} />,
    eyebrow: "Caribbean",
    title: "Caribbean",
    image: Caribbean,
    imageAlt: "Explora Journeys Caribbean cruise",
    items: ["Beaches", "Warm weather", "Relaxation"],
    accent: "adg-accent-gold",
  },

  {
    key: "northern-europe",
    icon: <Ship size={22} strokeWidth={1.6} />,
    eyebrow: "Northern Europe",
    title: "Northern Europe",
    image: NorthernEurope,
    imageAlt: "Explora Journeys Northern Europe cruise",
    items: ["Fjords", "Scandinavian cities", "History"],
    accent: "adg-accent-teal",
  },

  {
    key: "iceland-greenland",
    icon: <Snowflake size={22} strokeWidth={1.6} />,
    eyebrow: "Iceland & Greenland",
    title: "Iceland & Greenland",
    image: IcelandGreenland,
    imageAlt: "Explora Journeys Iceland & Greenland cruise",
    items: ["Adventure", "Icebergs", "Remote landscapes"],
    accent: "adg-accent-silver",
  },
];

/* ── Main Component ──────────────────────────────────────────────── */
const WhyLuxuryTravelersChooseExploraJourneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreDestination, setReadMoreDestination] = useState(false);

  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [gridCols, setGridCols] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setGridCols(1);
      } else if (window.innerWidth <= 991) {
        setGridCols(2);
      } else {
        setGridCols(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>Why Luxury Travelers Are Choosing Explora Journeys</title>
        <meta
          name="title"
          content="Why Luxury Travelers Are Choosing Explora Journeys"
        />
        <meta
          name="description"
          content="Discover why discerning luxury travelers are choosing Explora Journeys for spacious all-suite accommodations, destination-focused itineraries, exceptional dining, personalized service, wellness experiences, and contemporary European luxury."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>Why Luxury Travelers Are Choosing Explora Journeys</h1>

          <p>
            Luxury travel has evolved. Today's travelers are no longer searching
            for the biggest ships, the busiest schedules, or endless onboard
            attractions. Instead, they seek meaningful experiences, exceptional
            comfort, personalized service, and authentic destinations.
          </p>

          <p>
            Explora Journeys was created with this new generation of luxury
            traveler in mind, combining elegant European design, spacious
            all-suite accommodations, destination-rich itineraries, world-class
            dining, and wellness-focused experiences.
          </p>

          {readMore && (
            <p>
              Whether you're celebrating a milestone, exploring a new region, or
              simply looking for a more refined way to travel, it's easy to
              understand why more luxury travelers are choosing Explora Journeys
              over both traditional and mainstream cruise lines.
            </p>
          )}

          <div className="Scenic_readmore_wrapper">
            <button
              className="Scenic_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* ── WHAT IS EXPLORA JOURNEYS? ─────────────────────────────── */}
      <section
        className="ugt-components-section"
        id="a-new-definition-of-luxury"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">A New Definition of Luxury</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={ExploraPool}
                    alt="Elegant sundeck aboard Explora Journeys luxury cruise ship"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Luxury today isn't measured by excess—it's measured by{" "}
                  <strong>
                    quality, space, personalization, and unforgettable
                    experiences
                  </strong>
                  . <strong>Explora Journeys</strong> embraces this philosophy,
                  offering a sophisticated alternative to both traditional and
                  mainstream cruise lines. Instead of trying to impress with
                  size, Explora focuses on delivering an experience that feels
                  effortless, refined, and deeply relaxing.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Explora Journeys embraces this philosophy by offering:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "More personal space",
                      "Fewer crowds",
                      "Exceptional hospitality",
                      "Curated destinations",
                      "Flexible schedules",
                      "Wellness-focused travel",
                      "Contemporary European elegance",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p
                  className="ugt-component-footer"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  The result feels more like staying in a five-star boutique
                  hotel than aboard a traditional ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EXPLORA FLEET ───────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-soft"
        id="boutique-luxury-instead-of-mega-ships"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">An Intimate Atmosphere</span>

            <h2 className="adg-c-h2">Boutique Luxury Instead of Mega Ships</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Many luxury travelers have moved away from massive cruise ships
              carrying thousands of guests. Without overwhelming crowds, every
              area of an Explora ship feels calm and welcoming.
            </p>
          </div>

          <div
            className="adg-c-venues-grid1"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              gap: "30px",
            }}
          >
            {/* Explora I */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Ship
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Onboard Calm
                </span>

                <h3 className="adg-c-venue-name">Quiet Lounges</h3>

                <p className="adg-c-venue-highlight">Space to Unwind</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Low guest-to-space ratio",
                  "Relaxed atmosphere",
                  "No overcrowding",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Quiet lounges throughout the ship give guests room to relax
                  without ever feeling crowded or rushed.
                </p>
              </div>
            </div>

            {/* Explora II */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Anchor
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Outdoor Living
                </span>

                <h3 className="adg-c-venue-name">Spacious Pool Decks</h3>

                <p className="adg-c-venue-highlight">Room to Breathe</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Generous deck space",
                  "Comfortable loungers",
                  "Never overcrowded",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Generously proportioned pool decks give every guest plenty of
                  room to relax in the sun without competing for space.
                </p>
              </div>
            </div>

            {/* Explora III */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Compass
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Sea Views
                </span>

                <h3 className="adg-c-venue-name">Ocean-View Terraces</h3>

                <p className="adg-c-venue-highlight">
                  A Front-Row Seat to the Sea
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Uninterrupted ocean views",
                  "Quiet outdoor corners",
                  "Al fresco relaxation",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Ocean-view terraces throughout the ship offer peaceful spots
                  to take in the scenery at any time of day.
                </p>
              </div>
            </div>

            {/* Explora IV */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Globe
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Genuine Hospitality
                </span>

                <h3 className="adg-c-venue-name">Personalized Service</h3>

                <p className="adg-c-venue-highlight">
                  Attentive, Not Intrusive
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Anticipates guest needs",
                  "Warm, genuine interactions",
                  "Fast, professional attention",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  With a favorable crew-to-guest ratio, service feels genuinely
                  personal rather than transactional.
                </p>
              </div>
            </div>

            {/* Shared Features */}
            <div className="adg-c-venue-card adg-c-venue-1">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Sparkles
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Easy Living
                </span>

                <h3 className="adg-c-venue-name">Relaxed Social Spaces</h3>

                <p className="adg-c-venue-highlight">
                  Comfortable, Never Crowded
                </p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Elegant lounges",
                  "Easy access to restaurants",
                  "Calm, welcoming areas",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  Every public space is designed for easy, relaxed
                  socializing—never crowded, never overwhelming.
                </p>
              </div>
            </div>

            {/* Future Fleet */}
            <div className="adg-c-venue-card adg-c-venue-2">
              <div className="adg-c-venue-top">
                <span className="adg-c-venue-eyebrow">
                  <Rocket
                    size={14}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  Effortless Flow
                </span>

                <h3 className="adg-c-venue-name">Easy Access, Everywhere</h3>

                <p className="adg-c-venue-highlight">Nothing Feels Far Away</p>
              </div>

              <ul className="adg-c-venue-list">
                {[
                  "Intuitive ship layout",
                  "Short walks to amenities",
                  "No long lines or waits",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="adg-c-venue-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="adg-c-venue-callout">
                <span className="adg-c-venue-callout-bar"></span>
                <p>
                  With fewer guests aboard, restaurants, lounges, and amenities
                  are always within easy, unhurried reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRAVELERS CHOOSE EXPLORA JOURNEYS ────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="why-travelers-choose-explora"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Why Travelers Choose Explora Journeys</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury travelers increasingly choose Explora because it offers an
              experience that is elegant, relaxed, and highly personalized.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            {/* Left Side */}
            <div className="adg-c-overview-icons">
              {[
                "All oceanfront suites with private terraces",
                "Contemporary European luxury",
                "Exceptional dining",
                "Boutique ship atmosphere",
                "Longer destination visits",
                "Wellness and spa experiences",
                "Refined entertainment",
                "Outstanding personalized service",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    Explora appeals to travelers who value quality, comfort, and
                    authentic experiences over crowds and constant activity.
                  </p>
                </div>
              </div>

              <div
                className="adg-c-overview-image-wrap"
                style={{ height: "380px" }}
              >
                <img
                  src={ExploraAtmosphere}
                  alt="Oceanfront infinity pool deck aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Elegant • Relaxed • Personalized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY SUITES DESIGNED FOR SPACE ─────────────────────────── */}
      <section
        className="azs-entertainment-section"
        id="spacious-suites-designed-like-luxury-residences"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Spacious Suites Designed Like Luxury Residences
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Unlike many cruise lines, every guest enjoys an oceanfront suite
              with a private terrace, creating the feeling of staying in a
              luxury waterfront residence rather than a traditional cruise
              cabin.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Suite Categories */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Home size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Accommodation Categories</h3>
              </div>

              <p className="azs-ent-intro">
                Explora offers a range of suite and residence categories to suit
                every style of luxury travel.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Choose From:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Ocean Terrace Suites",
                    "Ocean Grand Terrace Suites",
                    "Penthouse Suites",
                    "Cove Residences",
                    "Retreat Residences",
                    "Owner's Residences",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Check size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-azamara-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Every category offers an oceanfront view with a private
                    terrace.
                  </p>
                </div>
              </div>
            </div>

            {/* Suite Features */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Sparkles size={24} className="azs-ent-icon" />
                </div>

                <h3 className="azs-ent-title">Signature Suite Features</h3>
              </div>

              <p className="azs-ent-intro">
                Each suite is thoughtfully designed with comfort and
                sophistication in mind.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Every Suite Includes:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Floor-to-ceiling windows",
                    "Spacious living areas",
                    "Walk-in wardrobes",
                    "Marble bathrooms",
                    "King-size beds",
                    "Luxury amenities",
                    "Private outdoor space",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Star size={14} className="azs-ent-list-icon" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    The generous accommodations are among the largest in the
                    luxury cruise industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adg-section" id="destinations-take-center-stage">
        <div className="adg-container">
          {/* HEADER */}
          <div className="adg-header">
            <h2 className="adg-h2">Destinations Take Center Stage</h2>

            <div className="adg-accent-line"></div>

            <p className="adg-intro">
              Luxury travelers increasingly value immersive travel experiences
              over simply collecting passport stamps. Explora itineraries
              prioritize longer port stays, overnight visits, smaller boutique
              ports, and scenic cruising so guests truly experience each
              destination rather than rushing through it.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="adgs-grid">
            {diningData.map((item) => (
              <div key={item.key} className={`adg-card ${item.accent}`}>
                {/* IMAGE */}
                <div className="adg-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="adg-card-img"
                  />

                  <div className="adg-card-image-overlay"></div>

                  {/* FLOATING LABEL */}
                  <div className="adg-card-eyebrow-wrap">
                    <span className="adg-card-eyebrow-icon">{item.icon}</span>

                    <span className="adg-card-eyebrow-label">
                      {item.eyebrow}
                    </span>
                  </div>
                </div>

                {/* BODY */}
                <div className="adg-card-body">
                  <h3 className="adg-card-title">{item.title}</h3>

                  <div
                    style={{
                      fontWeight: 600,
                      marginBottom: "14px",
                      color: "var(--primary)",
                    }}
                  >
                    Choose for:
                  </div>

                  <ul className="adg-card-list">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="adg-card-list-item">
                        <span className="adg-card-list-dot"></span>
                        <span className="adg-card-list-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTOM ACCENT BAR */}
                <div className="adg-card-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS & SERVICE — SIDE BY SIDE */}
      <section className="azs-dining-section" style={{ background: "var(--bg-white)" }}>
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">Why Luxury Travelers Choose Explora Journeys</h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Luxury travelers increasingly choose Explora because it offers an
              experience that is elegant, relaxed, and highly personalized.
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Destinations */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Compass size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Destinations Take Center Stage</h3>
                </div>

                <p className="azs-dining-intro">
                  Luxury travelers increasingly value immersive travel experiences
                  over simply collecting passport stamps.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Explora Journeys designs itineraries that prioritize:
                  </h4>

                  <ul className="azs-dining-list">
                    {["Longer port stays", "Overnight visits", "Smaller boutique ports", "Scenic cruising", "Authentic cultural experiences"].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Check size={14} className="azs-dining-list-icon" />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-dining-divider"></div>

                  <div className="azs-dining-highlight-box azs-seabourn-highlight">
                    <p className="azs-dining-highlight-text">
                      This allows guests to truly experience each destination rather than
                      rushing through a short visit. Whether exploring the Greek Isles,
                      Alaska, Japan, or the Caribbean, every itinerary encourages deeper
                      connections with the places you visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <HeartHandshake size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Personalized Service Without Formality</h3>
                </div>

                <p className="azs-dining-intro">
                  Luxury hospitality is about anticipating needs rather than simply
                  responding to requests. Explora's crew provides warm, attentive
                  service that feels genuine and approachable.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">Guests appreciate:</h4>

                  <ul className="azs-dining-list">
                    {["Friendly interactions", "Personalized recommendations", "Attention to detail", "Fast, professional service", "A welcoming atmosphere"].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Star size={14} className="azs-dining-list-icon" />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-dining-divider"></div>

                  <div className="azs-dining-highlight-box azs-azamara-highlight">
                    <p className="azs-dining-highlight-text">
                      The result is luxury that feels comfortable rather than intimidating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS AT SEA */}
      <section
        className="azs-dining-section"
        id="wellness-is-part-of-the-journey"
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Wellness Is Part of the Journey
            </h2>

            <div className="azs-section-accent"></div>

            <p className="azs-section-subtitle">
              Today's luxury travelers want vacations that help them return home
              feeling refreshed—not exhausted. Explora's Ocean Wellness concept
              lets guests balance exploration with relaxation while maintaining
              their personal wellness routines.
            </p>
          </div>

          <div className="azs-dining-grid">
            {/* Wellness at Sea */}
            <div className="azs-dining-card azs-seabourn-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={ExploraSpa}
                  alt="Ocean Wellness experience aboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-seabourn-badge">
                    Ocean Wellness
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <HeartHandshake size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">Wellness at Sea</h3>
                </div>

                <p className="azs-dining-intro">
                  The Ocean Wellness concept is designed to help guests relax,
                  recharge, and maintain a healthy lifestyle throughout their
                  voyage.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Ocean Wellness Includes:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Luxury spa",
                      "Thermal areas",
                      "Massage treatments",
                      "Yoga classes",
                      "Fitness center",
                      "Meditation",
                      "Outdoor wellness spaces",
                      "Healthy cuisine",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Check size={14} className="azs-dining-list-icon" />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-dining-divider"></div>

                  <div className="azs-dining-highlight-box azs-seabourn-highlight">
                    <p className="azs-dining-highlight-text">
                      Whether your goal is relaxation or maintaining an active
                      lifestyle, wellness is thoughtfully integrated into every
                      aspect of the Explora experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Onboard */}
            <div className="azs-dining-card azs-azamara-dining">
              <div className="azs-dining-image-wrap">
                <img
                  src={ExploraLifeOnboard}
                  alt="Life onboard Explora Journeys"
                  className="azs-dining-img"
                />

                <div className="azs-dining-badge-wrapper">
                  <span className="azs-dining-badge azs-azamara-badge">
                    Unhurried Days
                  </span>
                </div>
              </div>

              <div className="azs-dining-content">
                <div className="azs-dining-header">
                  <div className="azs-dining-icon-circle">
                    <Waves size={24} className="azs-dining-icon" />
                  </div>

                  <h3 className="azs-dining-title">
                    More Time to Enjoy the Journey
                  </h3>
                </div>

                <p className="azs-dining-intro">
                  Explora encourages guests to slow down. Instead of filling
                  every hour with scheduled activities, luxury becomes less
                  about doing more—and more about enjoying every moment.
                </p>

                <div className="azs-dining-body">
                  <h4 className="azs-dining-group-title">
                    Guests Are Free To:
                  </h4>

                  <ul className="azs-dining-list">
                    {[
                      "Sleep in",
                      "Enjoy breakfast on their terrace",
                      "Read by the pool",
                      "Relax in the spa",
                      "Explore destinations at their own pace",
                      "Enjoy sunset cocktails",
                      "Watch the ocean pass by",
                      "Socialize in elegant lounges",
                    ].map((item, idx) => (
                      <li key={idx} className="azs-dining-list-item">
                        <div className="azs-dining-list-icon-wrapper">
                          <Star size={14} className="azs-dining-list-icon" />
                        </div>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="azs-dining-divider"></div>

                  <div className="azs-dining-highlight-box azs-azamara-highlight">
                    <p className="azs-dining-highlight-text">
                      There is no pressure to follow a packed schedule—each day
                      is designed around freedom, relaxation, and meaningful
                      experiences both onboard and ashore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXTRAORDINARY DESTINATIONS ─────────────────────────── */}
      <section className="luc-why-section" id="carefully-curated-destinations">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraDestination}
                alt="Carefully curated destinations visited by Explora Journeys"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={ExploraSantorini}
                alt="Guests exploring destinations with Explora Journeys"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">7</span>
                <span className="luc-why-badge-text">Global Regions</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Carefully Curated Destinations</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Explora Journeys sails to some of the world's most remarkable
              regions, with each itinerary designed to maximize both exploration
              and relaxation.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Mediterranean",
                  desc: "Historic cities, coastal villages, and world-renowned cuisine throughout Italy, Spain, France, Croatia, and Malta.",
                },
                {
                  num: "02",
                  title: "Greece & Greek Isles",
                  desc: "Iconic islands, crystal-clear waters, and timeless history across the Greek Isles.",
                },
                {
                  num: "03",
                  title: "Caribbean",
                  desc: "Relaxed island escapes with luxury beach experiences across famous islands and hidden gems.",
                },
                {
                  num: "04",
                  title: "Alaska",
                  desc: "Glaciers, wildlife, and breathtaking natural landscapes along Alaska's scenic coastline.",
                },
                {
                  num: "05",
                  title: "Northern Europe",
                  desc: "Scandinavian capitals, fjords, and charming coastal towns throughout Northern Europe.",
                },
                {
                  num: "06",
                  title: "Iceland & Greenland",
                  desc: "Remote Arctic beauty, icebergs, volcanoes, and unforgettable scenery.",
                },
                {
                  num: "07",
                  title: "Japan & Asia",
                  desc: "Ancient traditions, vibrant cities, and extraordinary culinary experiences.",
                },
              ]
                .slice(0, readMoreDestination ? 7 : 4)
                .map((feat, i) => (
                  <div key={i} className="luc-why-feature">
                    <div className="luc-why-feature-num">{feat.num}</div>

                    <div className="luc-why-feature-body">
                      <h3 className="luc-why-feature-title">{feat.title}</h3>
                      <p className="luc-why-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div
              className="Scenic_readmore_wrapper"
              style={{ marginTop: "25px", textAlign: "left" }}
            >
              <button
                className="Scenic_readmore_btn"
                onClick={() => setReadMoreDestination(!readMoreDestination)}
              >
                {readMoreDestination ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING THAT RIVALS LUXURY RESORTS ───────────────────────── */}
      <section className="adg-section" id="exceptional-culinary-experiences">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Exceptional Culinary Experiences</h2>
            <div className="adg-accent-line"></div>

            <p
              className="Asc-body-text"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              Dining is one of the defining features of the Explora
              experience—every restaurant reflects the quality expected from a
              world-class luxury resort.
            </p>
          </div>

          <div className="adg-split-layout">
            <div className="adg-content-card-side">
              <img
                src={ExploraDining}
                alt="Fine dining aboard Explora Journeys luxury cruise ship"
                className="adg-side-image"
                style={{ height: "58vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Utensils size={28} />
                  <span className="adg-meta-label">
                    Flexible, World-Class Dining
                  </span>
                </div>

                <p className="adg-card-lead">
                  Unlike traditional cruises with assigned dining times, Explora
                  offers flexible dining that allows guests to enjoy meals
                  whenever they choose.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                "Mediterranean cuisine",
                "Asian specialties",
                "Fresh seafood",
                "Premium steaks",
                "European classics",
                "International flavors",
                "Healthy wellness-inspired dishes",
                "In-suite dining",
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <h4 className="adg-list-item-label">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS CHOOSING EXPLORA JOURNEYS? ────────────────────────── */}
      <section
        className="wc-section"
        id="who-is-choosing-explora-journeys"
      >
        <div className="wc-container">
          <div className="wc-header">
            <span className="wc-eyebrow">
              A Wide Range of Guests
            </span>

            <h2 className="wc-title">
              Who Is Choosing Explora Journeys?
            </h2>

            <div className="wc-accent-line"></div>

            <p className="wc-intro">
              Explora's relaxed atmosphere and personalized service attract
              guests who appreciate thoughtful luxury rather than large-scale
              entertainment.
            </p>
          </div>

          <div className="wc-grid">
            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={CouplesImage}
                  alt="Couples choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <HeartHandshake size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Couples</h4>
                <p className="wc-card-desc">
                  Celebrating anniversaries or other special occasions.
                </p>
              </div>
            </div>

            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={ExperiencedCruisersImage}
                  alt="Experienced Luxury Cruisers choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <Compass size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Experienced Luxury Cruisers</h4>
                <p className="wc-card-desc">
                  Seeking something new from a modern luxury cruise line.
                </p>
              </div>
            </div>

            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={SoloTravelersImage}
                  alt="Solo Travelers choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Solo Travelers</h4>
                <p className="wc-card-desc">
                  Looking for comfort and security aboard an intimate ship.
                </p>
              </div>
            </div>

            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={WellnessTravelersImage}
                  alt="Wellness-Focused Travelers choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Wellness-Focused Travelers</h4>
                <p className="wc-card-desc">
                  Prioritizing rest, movement, and mindful travel.
                </p>
              </div>
            </div>

            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={FoodWineImage}
                  alt="Food & Wine Enthusiasts choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <Utensils size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Food &amp; Wine Enthusiasts</h4>
                <p className="wc-card-desc">
                  Drawn to world-class dining and regional flavors.
                </p>
              </div>
            </div>

            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={LuxuryHotelGuestsImage}
                  alt="Luxury Hotel Guests choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <Home size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Luxury Hotel Guests</h4>
                <p className="wc-card-desc">
                  Transitioning to cruising for the first time.
                </p>
              </div>
            </div>

            <div className="wc-card">
              <div className="wc-card-image-wrap">
                <img
                  src={Japan}
                  alt="Cultural Travelers choosing Explora Journeys"
                  className="wc-card-image"
                />
                <div className="wc-card-overlay"></div>
              </div>
              <div className="wc-card-content">
                <div className="wc-icon-box">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <h4 className="wc-card-title">Cultural Travelers</h4>
                <p className="wc-card-desc">
                  Valuing authentic cultural experiences ashore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW MUCH DOES AN EXPLORA CRUISE COST? ───────────────────── */}
      <section
        className="Ejv-verdict-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Refined, Not Rigid</span>

            <h2 className="Ejv-verdict-title">Luxury Without Pretension</h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraSuiteImage}
                alt="Luxury suite aboard Explora Journeys"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Casual Sophistication
                </span>

                <span className="Ejv-verdict-badge-sub">
                  Elegant, Yet Relaxed
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                Many guests describe Explora as elegant yet refreshingly
                relaxed. This understated atmosphere appeals to travelers who
                appreciate refinement without unnecessary formality.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "No formal nights",
                  "Flexible dining",
                  "Casual sophistication",
                  "Spacious public areas",
                  "Quiet evenings",
                  "Comfortable luxury",
                ].map((item) => (
                  <li key={item} className="Ejv-verdict-list-item">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="Ejv-verdict-check"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejv-verdict-outcome">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-verdict-outcome-icon"
                />

                <p className="Ejv-verdict-outcome-text">
                  The result is luxury that feels comfortable rather than
                  intimidating—hospitality built on anticipating needs rather
                  than simply responding to requests.
                </p>
              </div>

              <div className="Ejv-verdict-divider"></div>

              <div className="Ejv-verdict-note">
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />

                <p className="Ejv-verdict-note-text">
                  Guests appreciate friendly interactions, personalized
                  recommendations, attention to detail, and a genuinely
                  welcoming atmosphere throughout the voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCLUDED? ─────────────────────────────────────────── */}
      <section
        className="adg-c-section adg-c-bg-white"
        id="sustainability-matters"
      >
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Sustainability Matters</h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Luxury travelers increasingly value responsible tourism. Explora
              Journeys has invested in advanced technologies and operational
              practices that help reduce environmental impact.
            </p>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Modern energy-efficient systems",
                "Advanced wastewater treatment",
                "Reduced emissions technologies",
                "Responsible resource management",
                "Single-use plastic reduction initiatives",
                "Ongoing sustainability initiatives",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </span>

                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />

                  <p className="adg-c-callout-text">
                    This commitment allows guests to travel more responsibly
                    while enjoying exceptional comfort.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={LuxuryOceanfront}
                  alt="Luxury oceanfront suite and lounge aboard Explora Journeys"
                  className="adg-c-overview-img"
                />

                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Responsible Luxury
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK THROUGH TRIPS & SHIPS LUXURY TRAVEL? */}
      <section
        className="Avr-planning-section"
        id="why-book-through-trips-and-ships"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">
              Personalized Cruise Planning
            </span>

            <h2 className="Avr-planning-title">
              Why Book Through a Luxury Travel Advisor?
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          <div className="Avr-planning-grid">
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                A Seamless, Personalized Luxury Experience
              </h3>

              <p className="Avr-planning-left-body">
                Planning a luxury cruise involves many important decisions. A
                knowledgeable travel advisor ensures every detail is tailored to
                your preferences, from before you book through the day you
                return home.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  Our expertise ensures a seamless and personalized luxury
                  travel experience.
                </p>
              </div>
            </div>

            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">Our advisors help you:</p>

              <div className="Avr-planning-benefits-grid">
                {[
                  { icon: <Compass size={18} />, label: "Compare itineraries" },
                  {
                    icon: <Ship size={18} />,
                    label: "Recommend the best ship",
                  },
                  {
                    icon: <Home size={18} />,
                    label: "Choose the ideal suite",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Coordinate flights and hotels",
                  },
                  {
                    icon: <MapPinned size={18} />,
                    label: "Arrange private transfers",
                  },
                  {
                    icon: <Sparkles size={18} />,
                    label: "Recommend shore experiences",
                  },
                  {
                    icon: <BadgePercent size={18} />,
                    label: "Explain promotions and offers",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Provide support before, during, and after",
                  },
                ].map((item, i) => (
                  <div key={i} className="Avr-planning-benefit-card">
                    <span className="Avr-planning-benefit-icon">
                      {item.icon}
                    </span>

                    <span className="Avr-planning-benefit-label">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes – Luxury Travel Expert"
                  className="Adg-expert-portrait"
                />
                <div className="Adg-expert-portrait-badge">
                  <Star size={14} />
                  <span>40+ Years Experience</span>
                </div>
              </div>

              <div className="Adg-expert-name-card">
                <h3 className="Adg-expert-name">Angela Hughes</h3>
                <p className="Adg-expert-role">
                  CEO of Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  Traveled to more than 121 countries
                </p>
              </div>
            </div>

            <div className="Adg-expert-content-col">
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Angela Hughes Authority Box
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Award size={16} />,
                      label: "CEO of Trips & Ships Luxury Travel",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "Over 40 years in the travel industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveled to more than 121 countries",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly industry columnist",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Travel Leaders Network Advisory Board member",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "2024 Luxury Travel Influencer of the Year",
                    },
                    {
                      icon: <Star size={16} />,
                      label:
                        "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                    },
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">{item.icon}</span>
                      <span className="Adg-expert-list-label">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything travelers want to know about why Explora Journeys is
              winning over today's luxury traveler.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA / FINAL THOUGHTS ─────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={ExploraShip}
            alt="Explora Journeys luxury cruise ship at sea"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Cruise Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Discover Explora Journeys?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Explora Journeys reflects the changing expectations of
                    today's luxury traveler—delivering space, comfort,
                    exceptional service, authentic destinations, outstanding
                    cuisine, and the freedom to experience the journey at your
                    own pace.
                    {!readMore && (
                      <button
                        onClick={() => setReadMore(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--bg-white)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontWeight: "600",
                          padding: 0,
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </p>

                  {readMore && (
                    <>
                      <br />
                      <p className="Asc-help-intro">
                        From elegant oceanfront suites and world-class wellness
                        facilities to thoughtfully crafted itineraries and
                        attentive hospitality, every element has been designed
                        to create a refined and enriching travel experience—one
                        that feels less like a traditional voyage and more like
                        staying at an exclusive luxury resort.
                      </p>
                      <br />
                      <p className="Asc-help-intro">
                        At Trips &amp; Ships Luxury Travel, we're passionate
                        about helping travelers choose the right ship, suite,
                        and itinerary while ensuring every detail of the journey
                        is perfectly planned.
                        <button
                          onClick={() => setReadMore(false)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--bg-white)",
                            cursor: "pointer",
                            marginLeft: "8px",
                            fontWeight: "600",
                            padding: 0,
                          }}
                        >
                          Read Less
                        </button>
                      </p>
                    </>
                  )}

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Our luxury planning services include:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Compare itineraries and destinations",
                      "Recommend the ideal ship and sailing",
                      "Select the right suite category",
                      "Compare fare options and promotions",
                      "Arrange flights and hotels",
                      "Coordinate pre- and post-cruise transfers",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suggested Internal Links */}
              <div
                className="Asc-internal-links-section"
                style={{
                  marginTop: "60px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  paddingTop: "40px",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: "400",
                    marginBottom: "20px",
                  }}
                >
                  Explore More Explora Journeys Guides
                </h3>
                <div
                  className="Asc-internal-links-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {[
                    {
                      label: "Explora Journeys Review",
                      path: "/explora-journeys-review",
                    },
                    {
                      label: "Why Choose Explora Journeys?",
                      path: "/why-choose-explora-journeys",
                    },
                    {
                      label: "What Makes Explora Journeys Different?",
                      path: "/what-makes-explora-journeys-different",
                    },
                    {
                      label: "Is Explora Journeys Luxury?",
                      path: "/is-explora-journeys-luxury",
                    },
                    {
                      label: "Planning Your First Explora Journey",
                      path: "/planning-your-first-explora-journey",
                    },
                    {
                      label: "Explora I Review",
                      path: "/explora-i-review",
                    },
                    {
                      label: "Explora II Review",
                      path: "/explora-ii-review",
                    },
                    {
                      label: "Explora III Guide",
                      path: "/explora-iii-guide",
                    },
                    {
                      label: "Explora IV Guide",
                      path: "/explora-iv-guide",
                    },
                    {
                      label: "Which Explora Ship Should You Choose?",
                      path: "/which-explora-ship-should-you-choose",
                    },
                    {
                      label: "Which Explora Suite Is Worth the Upgrade?",
                      path: "/which-explora-suite-is-worth-the-upgrade",
                    },
                    {
                      label: "Explora Journeys Itineraries",
                      path: "/explora-journeys-itineraries",
                    },
                    {
                      label: "Mediterranean Cruises on Explora Journeys",
                      path: "/mediterranean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Greece & Greek Isles Cruises on Explora Journeys",
                      path: "/greece-greek-isles-cruises-on-explora-journeys",
                    },
                    {
                      label: "Caribbean Cruises on Explora Journeys",
                      path: "/caribbean-cruises-on-explora-journeys",
                    },
                    {
                      label: "Alaska Cruises on Explora Journeys",
                      path: "/alaska-cruises-on-explora-journeys",
                    },
                    {
                      label: "Northern Europe Cruises on Explora Journeys",
                      path: "/northern-europe-cruises-on-explora-journeys",
                    },
                    {
                      label: "Iceland & Greenland Cruises on Explora Journeys",
                      path: "/iceland-greenland-cruises-on-explora-journeys",
                    },
                    {
                      label: "Japan Cruises on Explora Journeys",
                      path: "/japan-cruises-on-explora-journeys",
                    },
                    {
                      label: "Asia Cruises on Explora Journeys",
                      path: "/asia-cruises-on-explora-journeys",
                    },
                    {
                      label: "Dining on Explora Journeys",
                      path: "/dining-on-explora-journeys",
                    },
                    {
                      label: "Explora Journeys Wellness Experience",
                      path: "/explora-journeys-wellness-experience",
                    },
                    {
                      label: "Entertainment & Life Onboard Explora Journeys",
                      path: "/entertainment-life-onboard-explora-journeys",
                    },
                    {
                      label: "How to Get the Best Value on Explora Journeys",
                      path: "/how-to-get-the-best-value-on-explora-journeys",
                    },
                    {
                      label: "What to Pack for an Explora Cruise",
                      path: "/what-to-pack-for-an-explora-cruise",
                    },
                    {
                      label: "Should You Book Through a Travel Advisor?",
                      path: "/should-you-book-through-a-travel-advisor",
                    },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "16px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      <ArrowRight size={14} style={{ flexShrink: 0 }} />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyLuxuryTravelersChooseExploraJourneys;
