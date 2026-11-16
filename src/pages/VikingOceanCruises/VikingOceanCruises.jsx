import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Users,
  Ship,
  Compass,
  Globe,
  Waves,
  Mountain,
  X,
  Sparkles,
  Anchor,
  BookOpen,
  Coffee,
} from "lucide-react";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import "../VikingCruises/VikingCruises.css";

import HeroImage1 from "../../assets/VikingOceanCruises/viking-Tromso-Norway.jpg";
import HeroImage2 from "../../assets/VikingOceanCruises/viking-Halong-Bay-Vietnam.jpg";
import HeroImage3 from "../../assets/VikingOceanCruises/viking-Dubrovnik-Croatia.jpg";
import VikingMediterranean from "../../assets/VikingOceanCruises/Mediterranean.jpg";
import VikingNorthern from "../../assets/VikingOceanCruises/Australia.jpg";
import VikingAsia from "../../assets/VikingOceanCruises/Asia.jpg";
import VikingExp1 from "../../assets/VikingOceanCruises/Bay-of-Islands-New-Zealand.jpg";
import VikingExp2 from "../../assets/VikingOceanCruises/Aquavit-Terrace-Waiter.jpg";
import VikingExp3 from "../../assets/VikingOceanCruises/The-Restaurant.jpg";
import VikingExp4 from "../../assets/VikingOceanCruises/viking-aquavit-terrace-ocean-dining.jpg";
import VikingExp5 from "../../assets/VikingOceanCruises/Viking-Aquavit-Terrace.jpg";
import VikingExp6 from "../../assets/VikingOceanCruises/Viking-Aquavit-Terrace-Dining.jpg";
import VikingExp7 from "../../assets/VikingOceanCruises/Montego-Bay-Jamaica.jpg";
import VikingExp8 from "../../assets/VikingOceanCruises/Viking-family-experience.jpg";
import VikingExp9 from "../../assets/VikingOceanCruises/Viking-Multiple-Dining.jpg";
import VikingExp10 from "../../assets/VikingOceanCruises/Viking-Explorer-Suite.jpg";
import VikingExp11 from "../../assets/VikingOceanCruises/viking-ocean-cruise-aquavit-terrace-outdoor-dining.jpg";
import VikingCta from "../../assets/VikingOceanCruises/flam-norway-fjord-cruise.jpg";
import VikingAlaska from "../../assets/VikingOceanCruises/alaska-glacier-mountain-lake-scenic-wilderness-vacation.jpg";
import VikingIcaland from "../../assets/VikingOceanCruises/Iceland.jpg";

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      description:
        "Luxury travel agency specializing in luxury cruises, family travel, river cruises, expedition cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "description": "Luxury travel experts helping travelers discover Viking Ocean cruise experiences through expert guidance and personalized travel planning.",
      "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Winter Garden",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "telephone": "+1-603-860-3274",
      "email": "sales@tripsandships.com"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-ocean-cruises",
      url: "https://www.tripsandships.com/viking-ocean-cruises",
      name: "Viking Ocean Cruises | Elegant Destination-Focused Ocean Voyages",
      description:
        "Explore Viking Ocean Cruises and discover destination-focused voyages, elegant Scandinavian design, enriching cultural experiences, and award-winning service. Learn why travelers choose Viking Ocean Cruises for sophisticated ocean travel.",
      isPartOf: { "@id": "https://www.tripsandships.com/#website" },
      about: [{ "@type": "Organization", name: "Viking Cruises" }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/viking-ocean-cruises#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cruise Guide",
          item: "https://www.tripsandships.com/small-ship-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Viking Ocean Cruises",
          item: "https://www.tripsandships.com/viking-ocean-cruises",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/viking-ocean-cruises#itemlist",
      name: "Popular Viking Ocean Cruise Destinations",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Mediterranean Cruises" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Northern Europe & Scandinavia",
        },
        { "@type": "ListItem", position: 3, name: "Alaska Cruises" },
        { "@type": "ListItem", position: 4, name: "Asia & Australia Cruises" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/viking-ocean-cruises#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Viking Ocean Cruises known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Ocean Cruises is known for destination-focused itineraries, adult-only travel, cultural enrichment, and elegant Scandinavian design.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Ocean Cruises adults-only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests are generally required to be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking have casinos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Viking ships do not feature casinos.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included on Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many itineraries include at least one complimentary excursion in each port.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking considered luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking is generally considered a premium or upper-premium cruise line offering many luxury-style experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beer and wine with lunch and dinner are often included.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking sail Alaska?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Alaska is one of Viking's most popular ocean cruise destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included on Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complimentary Wi-Fi is generally included.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Ocean Cruises good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many solo travelers enjoy Viking's relaxed and culturally focused atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Ocean Cruises worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe Viking offers excellent value due to its service, enrichment programs, included amenities, and destination-focused experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What is the dress code on Viking Ocean ships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Ocean has a casual, relaxed dress code. There are no formal nights. Smart casual attire is appropriate for evening dining, and comfortable clothing is ideal for daytime exploration ashore.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included on Viking Ocean Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gratuities are not included in the cruise fare. Viking provides recommended daily gratuity amounts, which can be pre-paid or settled onboard.",
          },
        },
        {
          "@type": "Question",
          name: "How does Viking Ocean handle dietary restrictions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking's culinary team can accommodate most dietary needs including vegetarian, vegan, gluten-free, and low-sodium diets. It is best to notify Viking in advance of the voyage.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring wine onboard a Viking Ocean ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests are welcome to bring wine and spirits onboard and enjoy them in their staterooms or at dinner with no corkage fees.",
          },
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/viking-ocean-cruises#touristtrip",
      name: "Viking Ocean Cruises — Destination-Focused Ocean Voyages",
      description:
        "Award-winning Viking ocean cruises spanning the Mediterranean, Northern Europe, Alaska, Asia, Australia, and beyond — designed for culturally curious adult travelers seeking immersive destination experiences.",
      touristType: [
        "Cultural Travelers",
        "Couples",
        "Retirees",
        "Lifelong Learners",
        "Solo Travelers",
        "History Enthusiasts",
      ],
    },
    {
      "@type": "Product",
      "name": "Viking Ocean Cruises",
      "description":
        "Destination-focused ocean voyages designed for curious adult travelers, combining Scandinavian design, inclusive pricing, and small ship luxury.",
      "brand": {
        "@type": "Brand",
        "name": "Viking"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "38",
        "bestRating": "5"
      },
      "review": {
        "@type": "Review",
        "@id": "https://www.tripsandships.com/viking-ocean-cruises#review",
        "reviewBody":
          "Viking Ocean Cruises offers award-winning destination-focused ocean voyages designed for curious adult travelers — combining elegant Scandinavian design, inclusive pricing, cultural enrichment programs, and smaller ship intimacy that set it apart from mainstream cruise lines.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Angela Hughes"
        }
      }
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is Viking Ocean Cruises known for?",
      a: "Viking Ocean Cruises is known for destination-focused itineraries, adult-only travel, cultural enrichment, and elegant Scandinavian design.",
    },
    {
      q: "Are Viking Ocean Cruises adults-only?",
      a: "Yes. Guests are generally required to be at least 18 years old.",
    },
    {
      q: "Does Viking have casinos?",
      a: "No. Viking ships do not feature casinos.",
    },
    {
      q: "Are shore excursions included on Viking Ocean Cruises?",
      a: "Many itineraries include at least one complimentary excursion in each port.",
    },
    {
      q: "Is Viking considered luxury?",
      a: "Viking is generally considered a premium or upper-premium cruise line offering many luxury-style experiences.",
    },
    {
      q: "Are drinks included on Viking Ocean Cruises?",
      a: "Beer and wine with lunch and dinner are often included.",
    },
    {
      q: "Does Viking sail Alaska?",
      a: "Yes. Alaska is one of Viking's most popular ocean cruise destinations.",
    },
    {
      q: "Is Wi-Fi included on Viking Ocean Cruises?",
      a: "Yes. Complimentary Wi-Fi is generally included.",
    },
    {
      q: "Are Viking Ocean Cruises good for solo travelers?",
      a: "Many solo travelers enjoy Viking's relaxed and culturally focused atmosphere.",
    },
    {
      q: "Are Viking Ocean Cruises worth the money?",
      a: "Many travelers believe Viking offers excellent value due to its service, enrichment programs, included amenities, and destination-focused experiences.",
    },
    {
      q: "What is the dress code on Viking Ocean ships?",
      a: "Viking Ocean has a casual, relaxed dress code. There are no formal nights. Smart casual attire is appropriate for evening dining, and comfortable clothing is ideal for daytime exploration ashore.",
    },
    {
      q: "Are gratuities included on Viking Ocean Cruises?",
      a: "Gratuities are not included in the cruise fare. Viking provides recommended daily gratuity amounts, which can be pre-paid or settled onboard.",
    },
    {
      q: "How does Viking Ocean handle dietary restrictions?",
      a: "Viking's culinary team can accommodate most dietary needs including vegetarian, vegan, gluten-free, and low-sodium diets. It is best to notify Viking in advance of the voyage.",
    },
    {
      q: "Can I bring wine onboard a Viking Ocean ship?",
      a: "Yes. Guests are welcome to bring wine and spirits onboard and enjoy them in their staterooms or at dinner with no corkage fees.",
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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const VikingOceanCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [readMoreWhy, setReadMoreWhy] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeReasonTab, setActiveReasonTab] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam) {
      const tabMap = {
        mediterranean: 5,
        med: 5,
        "northern-europe": 6,
        northerneurope: 6,
        iceland: 6,
        alaska: 7,
        asia: 8,
        australia: 9,
        "australia-nz": 9,
      };
      const targetTab = tabMap[tabParam.toLowerCase()];
      if (targetTab) {
        setActiveReasonTab(targetTab);
        setTimeout(() => {
          const element = document.querySelector(".dac-reasons-tabs-nav");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Viking Ocean Cruises | Elegant Destination-Focused Ocean Voyages
        </title>
        <meta
          name="title"
          content="Viking Ocean Cruises | Luxury-Inspired Cruises for Curious Travelers"
        />
        <meta
          name="description"
          content="Explore Viking Ocean Cruises and discover destination-focused voyages, elegant Scandinavian design, enriching cultural experiences, and award-winning service. Learn why travelers choose Viking Ocean Cruises for sophisticated ocean travel."
        />
        <meta
          property="og:title"
          content="Viking Ocean Cruises | Elegant Destination-Focused Ocean Voyages"
        />
        <meta
          property="og:description"
          content="Discover Viking Ocean Cruises — award-winning destination-focused ocean voyages with elegant Scandinavian design, designed for culturally curious adult travelers."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/viking-ocean-cruises"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/viking-ocean-cruises"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        className="Scenic_hero_section"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
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
          <h1>Discover the World with Viking Ocean Cruises</h1>
          <p>
            For travelers who want to explore the world in comfort while
            focusing on culture, history, and meaningful experiences, Viking
            Ocean Cruises offers a refreshing alternative to traditional
            cruising.
          </p>
          <p>
            Rather than emphasizing casinos, water parks, and large-scale
            attractions, Viking creates ocean voyages centered on discovery,
            enrichment, and destination immersion.
          </p>
          {readMore && (
            <>
              <p>
                From the Mediterranean and Northern Europe to Alaska, Asia,
                Australia, and beyond, Viking Ocean Cruises combines elegant
                ships, thoughtful service, and carefully curated itineraries
                that appeal to travelers seeking more than a typical cruise
                vacation.
              </p>
              <p>
                For many guests, Viking represents a different way to see the
                world — one where the destination remains the star of the
                journey.
              </p>
              <p>
                At Trips &amp; Ships Luxury Travel, we help travelers evaluate
                whether Viking Ocean is the right fit for their travel style,
                goals, and preferred destinations.
              </p>
            </>
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

      {/* ══ WHAT IS VIKING OCEAN CRUISES ══════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* Quick Page Links for Pillar/Cluster Hierarchy */}

          <div className="ugt-components-header">
            <h2 className="adg-c-h2">What Is Viking Ocean Cruises?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp1}
                    alt="Viking Ocean cruise ship sailing scenic destination"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Viking Ocean Cruises is the ocean-going division of Viking,
                  one of the world's most respected travel brands. The company
                  bridges the gap between mainstream and luxury cruising —
                  offering premium experiences without unnecessary complexity.
                </p>
                <p className="ugt-component-text">
                  Rather than competing on size, casinos, or entertainment
                  spectacle, Viking Ocean focuses on the destination itself —
                  creating journeys that feel genuinely different from
                  mainstream ocean cruising.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Viking Ocean Cruises Is Known For:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Destination-Focused Itineraries",
                      "Smaller Ocean Ships",
                      "Scandinavian-Inspired Design",
                      "Adult-Only Cruising (18+)",
                      "Cultural Enrichment Programs",
                      "Included Amenities",
                      "Award-Winning Service",
                      "Sophisticated Atmosphere",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
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

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover the Viking Ocean Cruise Experience
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Explore the world's most fascinating destinations aboard a Viking
              Ocean ship — combining elegant Scandinavian design, cultural
              enrichment programs, and thoughtful service that places the
              destination at the center of every journey.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/z7vttI7fin4"
                title="Discover the Viking Ocean Cruise Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FLEET OVERVIEW BREAKDOWN ════════════════════════════════════════ */}
      <section className="dbf-fleet-breakdown-section">
        <div className="dbf-fleet-container">
          <div className="dbf-fleet-header">
            <h2 className="dbf-fleet-title">
              Smaller Ships, Bigger Experiences
            </h2>
            <div className="dbf-fleet-accent"></div>
          </div>

          <div className="dbf-fleet-grid">
            {[
              {
                name: "Fewer Guests",
                desc: "Less crowding throughout the ship, creating a more comfortable experience.",
                icon: Anchor,
              },
              {
                name: "Easier Navigation",
                desc: "Ships are simple, intuitive, and enjoyable to explore.",
                icon: Compass,
              },
              {
                name: "Personalized Service",
                desc: "Crew members often get to know guests throughout the voyage.",
                icon: Ship,
              },
              {
                name: "More Relaxed Atmosphere",
                desc: "A quieter onboard environment focused on comfort and enrichment.",
                icon: Waves,
              },
              {
                name: "Better Destination Access",
                desc: "Many itineraries focus on ports larger ships may not prioritize.",
                icon: Globe,
              },
              {
                name: "Destination-Focused Travel",
                desc: "More time spent experiencing destinations rather than onboard attractions.",
                icon: Sparkles,
              },
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="dbf-ship-overview-card">
                  <div className="dbf-ship-card-icon-wrap">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="dbf-ship-card-name">{benefit.name}</h3>
                  <p className="dbf-ship-card-desc">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="dbf-fleet-lead-footer">
            The smaller ship approach is a major reason travelers return to
            Viking again and again.
          </p>
        </div>
      </section>

      {/* ══ WHY TRAVELERS CHOOSE VIKING OCEAN CRUISES ═══════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp2}
                alt="Viking Ocean cruise lounge elegant Scandinavian design"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp3}
                alt="Viking Ocean cruise dining regional cuisine destination-inspired"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Key Reasons</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Why Travelers Choose Viking Ocean Cruises
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              Many travelers are drawn to Viking because of what it doesn't
              offer — and because of what it delivers instead.
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "No Casinos, No Water Parks",
                  desc: "Viking deliberately excludes casinos, water parks, and large-scale amusement attractions — keeping the focus firmly on cultural exploration and destination immersion.",
                },
                {
                  num: "02",
                  title: "Cultural Exploration at the Center",
                  desc: "Viking emphasizes cultural learning, historical exploration, and local experiences rather than onboard attractions — placing the destination at the heart of every voyage.",
                },
                {
                  num: "03",
                  title: "Adults-Only Atmosphere",
                  desc: "Viking Ocean ships are adults-only (18+), creating a quieter, more refined environment that appeals to couples, retirees, and culturally focused solo travelers.",
                },
                {
                  num: "04",
                  title: "Elegant Scandinavian Design",
                  desc: "Clean architecture, natural materials, panoramic windows, and open spaces create an onboard atmosphere that feels sophisticated, calm, and timeless.",
                },
                {
                  num: "05",
                  title: "Inclusive Pricing Structure",
                  desc: "Wi-Fi, one shore excursion per port, beer and wine with meals, dining, and enrichment programs are often included — simplifying vacation budgeting.",
                },
              ]
                .slice(0, readMoreWhy ? 5 : 3)
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
                onClick={() => setReadMoreWhy(!readMoreWhy)}
              >
                {readMoreWhy ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Scandinavian Design */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={VikingExp4}
                  alt="Elegant Scandinavian design aboard a Viking Ocean ship"
                  className="dmg-media-img"  style={{height: "700px"}}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Scandinavian Elegance</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Elegant Scandinavian Design</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                One of the defining characteristics of Viking Ocean Cruises is
                its Scandinavian-inspired design, blending simplicity,
                functionality, and understated luxury.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Clean Architecture
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Modern spaces feel elegant and sophisticated without being
                      overly formal.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Natural Materials
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Wood, stone, and soft textures create a warm and welcoming
                      atmosphere throughout the ship.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Open Spaces</h3>
                    <p className="dmg-info-feature-desc">
                      Thoughtful layouts make ships feel spacious, comfortable,
                      and uncrowded.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Panoramic Views</h3>
                    <p className="dmg-info-feature-desc">
                      Large windows maximize connections to the surrounding
                      destination and scenery.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Comfortable Luxury
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Refined accommodations are designed for relaxation,
                      comfort, and effortless travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            className="dmg-info-lead"
            style={{
              marginTop: "40px",
              textAlign: "center",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            The result is an atmosphere many guests describe as sophisticated,
            calm, and timeless.
          </p>
        </div>
      </section>

      {/* ══ POPULAR OCEAN CRUISE DESTINATIONS — TABBED SECTION ══════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Popular Viking Ocean Cruise Destinations
            </span>
            <h2 className="dac-reasons-title">
              Popular Viking Ocean Cruise Destinations
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Viking Ocean sails to destinations across the globe.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">Mediterranean</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">Northern Europe</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">Alaska</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 8 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Compass size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">04</span>
                <span className="dac-reasons-tab-title">Asia</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 9 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(9)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">05</span>
                <span className="dac-reasons-tab-title">Australia & NZ</span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Mediterranean */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      <Link
                        to="/viking-mediterranean-cruises"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Mediterranean Cruises
                      </Link>
                    </h3>
                    <p className="dac-reasons-row-desc">
                      The Mediterranean remains one of Viking's most popular
                      ocean cruise regions. Travelers experience ancient
                      history, world-famous cuisine, and iconic landmarks across
                      Italy, Greece, Spain, Croatia, and beyond. To see detailed
                      ratings and reviews, read our{" "}
                      <Link
                        to="/viking-cruise-reviews"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Viking Cruise Reviews
                      </Link>
                      .
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Italy",
                        "Greece",
                        "Spain",
                        "Croatia",
                        "Ancient History",
                        "Coastal Beauty",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Globe size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: "25px" }}>
                      <Link
                        to="/viking-mediterranean-cruises"
                        className="Scenic_readmore_btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          textDecoration: "none",
                        }}
                      >
                        Explore Mediterranean Cruises{" "}
                        <ArrowRight size={16} style={{ marginLeft: "6px" }} />
                      </Link>
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingMediterranean}
                        alt="Viking Ocean Mediterranean cruise coastal landmarks"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — Northern Europe */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingIcaland}
                        alt="Viking Ocean Northern Europe Scandinavia fjords"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Northern Europe & Scandinavia
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Given Viking's Scandinavian roots, Northern Europe
                      itineraries are especially popular. Guests explore
                      dramatic Norwegian fjords, volcanic Iceland (often
                      featured on{" "}
                      <Link
                        to="/viking-iceland-cruises"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Viking Iceland Cruises
                      </Link>
                      ), historic Baltic capitals, and iconic British landmarks.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Norwegian Fjords — Dramatic Landscapes",
                        "Iceland — Volcanic Wonders",
                        "Baltic Capitals — Rich Cultural Heritage",
                        "United Kingdom — Iconic Landmarks",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Waves
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: "25px" }}>
                      <Link
                        to="/viking-iceland-cruises"
                        className="Scenic_readmore_btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          textDecoration: "none",
                        }}
                      >
                        Explore Iceland Cruises{" "}
                        <ArrowRight size={16} style={{ marginLeft: "6px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7 — Alaska */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      <Link
                        to="/viking-alaska-cruises"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Alaska Cruises
                      </Link>
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Viking's Alaska itineraries (featured in our{" "}
                      <Link
                        to="/viking-alaska-cruises"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Viking Alaska Cruises
                      </Link>{" "}
                      guide) appeal to travelers seeking nature and discovery.
                      Guests experience glacier viewing, wildlife encounters,
                      and some of the most spectacular scenery on earth. Check
                      our pricing overview in the{" "}
                      <Link
                        to="/viking-cruise-cost-guide"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Viking Cruise Cost Guide
                      </Link>{" "}
                      or see if it's the right choice in the{" "}
                      <Link
                        to="/is-viking-worth-it"
                        style={{
                          color: "var(--navy)",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Is Viking Worth It
                      </Link>{" "}
                      guide.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Glacier Viewing",
                        "Wildlife",
                        "Indigenous Culture",
                        "Scenic Ports",
                        "Wilderness",
                        "Natural Beauty",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Mountain size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: "25px" }}>
                      <Link
                        to="/viking-alaska-cruises"
                        className="Scenic_readmore_btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          textDecoration: "none",
                        }}
                      >
                        Explore Alaska Cruises{" "}
                        <ArrowRight size={16} style={{ marginLeft: "6px" }} />
                      </Link>
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingAlaska}
                        alt="Viking Ocean Alaska cruise glacier wildlife scenery"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — Asia */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingAsia}
                        alt="Viking Ocean Asia cruise cultural destinations"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">Asia Cruises</h3>
                    <p className="dac-reasons-row-desc">
                      Viking also explores fascinating destinations throughout
                      Asia. Travelers experience diverse cultures, cuisine,
                      history, and natural beauty across some of the world's
                      most compelling destinations.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Japan — History, Culture & Natural Beauty",
                        "Southeast Asia — Vibrant Traditions",
                        "China — Ancient & Modern",
                        "South Korea — Dynamic Culture",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Compass
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 9 — Australia & NZ */}
            {activeReasonTab === 9 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">05</span>
                    <h3 className="dac-reasons-row-title">
                      Australia & New Zealand
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Australia and New Zealand attract adventurous travelers
                      seeking longer journeys to spectacular destinations. These
                      itineraries feature stunning coastlines, vibrant cities,
                      unique wildlife, and rich cultural experiences.
                    </p>
                    <div className="dac-reasons-bullets">
                      {[
                        "Spectacular Coastlines & Natural Landscapes",
                        "Vibrant Cities — Sydney, Melbourne, Auckland",
                        "Unique Wildlife Encounters",
                        "Rich Indigenous & Colonial Cultural Experiences",
                      ].map((bullet, idx) => (
                        <div key={idx} className="dac-reasons-bullet-item">
                          <Globe
                            size={16}
                            className="dac-reasons-bullet-icon"
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={VikingNorthern}
                        alt="Viking Ocean Australia New Zealand cruise scenic coastline"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ LIFE ONBOARD A VIKING OCEAN SHIP ═════════════════════════════════ */}
      <section
        className="dmg-info-section dmg-bg-white"
        id="dmg-accommodations"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Life Onboard a Viking Ocean Ship
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                The onboard experience is intentionally designed to complement
                the destinations being visited — creating a floating boutique
                hotel atmosphere rather than a floating resort.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Relaxation</h3>
                    <p className="dmg-info-feature-desc">
                      Quiet public spaces encourage meaningful downtime between
                      destination-rich port days.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Cultural Enrichment
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Destination-focused lectures and presentations deepen
                      guests' understanding of every place visited.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Panoramic Scenic Viewing
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Observation areas and large windows throughout the ship
                      maximize enjoyment of coastal and ocean scenery.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Wellness & Fitness
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Fitness facilities and spa experiences support guest
                      wellbeing throughout the voyage.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Destination-Focused Atmosphere
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Guests spend more time discussing travel experiences than
                      onboard attractions — by design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={VikingExp5}
                  alt="Life onboard a Viking Ocean Ship elegant lounge"
                  className="dmg-media-img"  style={{height: "700px"}}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Destination-Focused Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Viking Ocean Cruises vs Traditional Cruise Lines
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking Ocean Cruises</th>
                  <th>Mainstream Cruise Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Atmosphere</strong>
                  </td>
                  <td>Relaxed &amp; Sophisticated</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Kids Programs</strong>
                  </td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Casinos</strong>
                  </td>
                  <td>No</td>
                  <td>Often Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Water Attractions</strong>
                  </td>
                  <td>No</td>
                  <td>Often Yes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cultural Focus</strong>
                  </td>
                  <td>Very High</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Included Excursions</strong>
                  </td>
                  <td>Often Included</td>
                  <td>Usually Extra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ship Size</strong>
                  </td>
                  <td>Smaller</td>
                  <td>Larger</td>
                </tr>
                <tr>
                  <td>
                    <strong>Adult-Oriented</strong>
                  </td>
                  <td>Yes</td>
                  <td>Mixed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ VIKING OCEAN CRUISE EXPERIENCE SPOTLIGHTS ══════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">
              Viking Ocean Cruise Highlights
            </h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1: Dining on Viking Ocean */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">
                  Culinary Experience
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Dining on Viking Ocean Cruises
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp6}
                  alt="Dining on Viking Ocean Cruises Aquavit Terrace"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Dining on Viking Ocean reflects the line's destination-focused
                  philosophy — emphasizing regional cuisine, fresh ingredients,
                  and local flavors inspired by the places being visited.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    What Guests Enjoy
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Regional Cuisine",
                        text: "Inspired by the destinations being visited.",
                      },
                      {
                        title: "International Favorites",
                        text: "Classic dishes from around the world.",
                      },
                      {
                        title: "Casual Dining",
                        text: "Relaxed venues for everyday meals.",
                      },
                      {
                        title: "Specialty Restaurants",
                        text: "Unique culinary experiences included on many voyages.",
                      },
                      {
                        title: "High-Quality Ingredients",
                        text: "Fresh and thoughtfully prepared menus.",
                      },
                      {
                        title: "Oceanfront Dining Venues",
                        text: "Many restaurants feature panoramic sea views that enhance the dining experience.",
                      },
                      {
                        title: "Complimentary Dining Options",
                        text: "Multiple dining venues are included without additional specialty dining fees.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="dbf-spotlight-feature-item">
                        <span className="dbf-spotlight-feature-check">
                          <Check size={12} />
                        </span>
                        <div className="dbf-spotlight-feature-text">
                          <strong>{item.title}</strong> — {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dbf-spotlight-card-footer">
                <Sparkles size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  Dining is often considered one of the highlights of the Viking
                  Ocean experience.
                </p>
              </div>
            </div>

            {/* CARD 2: Mature Travelers */}
            <div className="dbf-spotlight-card dbf-spotlight-card--fantasy">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge dbf-spotlight-card-badge--navy">
                  Popular Guest Profile
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Viking Ocean Cruises for Mature Travelers
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp7}
                  alt="Mature travelers enjoying a Viking Ocean cruise destination"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Users size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Viking Ocean's atmosphere naturally appeals to travelers who
                  prioritize culture, learning, and meaningful destination
                  exploration over onboard entertainment.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Popular Guest Types
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Retirees",
                        text: "Seeking enriching destination experiences.",
                      },
                      {
                        title: "Empty Nesters",
                        text: "Exploring the world at a relaxed, meaningful pace.",
                      },
                      {
                        title: "Couples",
                        text: "Sharing sophisticated cultural experiences.",
                      },
                      {
                        title: "Solo Travelers",
                        text: "Comfortable exploration in a relaxed atmosphere.",
                      },
                      {
                        title: "Cultural Travelers",
                        text: "Drawn to history, architecture, and local traditions.",
                      },
                      {
                        title: "History Enthusiasts",
                        text: "Immersive destinations rich in historical significance.",
                      },
                      {
                        title: "Lifelong Learners",
                        text: "Enrichment programs and educational experiences onboard.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="dbf-spotlight-feature-item">
                        <span className="dbf-spotlight-feature-check">
                          <Check size={12} />
                        </span>
                        <div className="dbf-spotlight-feature-text">
                          <strong>{item.title}</strong> — {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dbf-spotlight-card-footer">
                <Users size={16} className="dbf-spotlight-footer-icon" />
                <p>
                  The experience is intentionally designed for adults seeking
                  exploration rather than entertainment-focused vacations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS VIKING OCEAN FAMILY-FRIENDLY? ════════════════════════════════ */}
      <section className="adg-section">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Are Viking Ocean Cruises Family-Friendly?
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={VikingExp8}
                alt="Adults-only Viking Ocean cruise stateroom experience"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Adults-Only Ocean Cruise Experience
                  </span>
                </div>

                <p className="adg-card-lead">
                  Viking is not a family cruise line.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Guests must generally be at least 18 years old to sail on
                  Viking Ocean ships.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  The cruise line focuses on cultural enrichment, destination
                  exploration, and a refined atmosphere designed specifically
                  for adult travelers. Families with young children may prefer
                  cruise lines built for multigenerational travel.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "No Kids Clubs",
                  icon: <Check size={20} />,
                },
                {
                  title: "No Water Slides or Amusement Attractions",
                  icon: <Waves size={20} />,
                },
                {
                  title: "No Children's Entertainment Programs",
                  icon: <Users size={20} />,
                },
                {
                  title: "No Character Experiences",
                  icon: <Star size={20} />,
                },
                {
                  title: "No Casinos",
                  icon: <Compass size={20} />,
                },
                {
                  title:
                    "Enrichment Lectures & Destination-Focused Programming",
                  icon: <BookOpen size={20} />,
                },
                {
                  title: "Relaxed Adults-Only Atmosphere",
                  icon: <Coffee size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>
                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY LUXURY TRAVELERS APPRECIATE VIKING OCEAN ════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Why Luxury Travelers Appreciate Viking Ocean
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Meaningful Travel",
                    desc: "Destinations take center stage throughout every Viking voyage — not casinos, water parks, or onboard spectacle.",
                  },
                  {
                    title: "Elegant Design",
                    desc: "Sophisticated Scandinavian-inspired interiors that feel refined without being overly formal.",
                  },
                  {
                    title: "Included Amenities",
                    desc: "Less nickel-and-diming onboard — many key amenities are covered in the fare, simplifying planning.",
                  },
                  {
                    title: "Personalized Service",
                    desc: "Smaller ships allow crew members to deliver a more intimate, attentive guest experience.",
                  },
                  {
                    title: "Educational Enrichment",
                    desc: "Lectures, destination presentations, and cultural programming provide meaningful learning throughout the voyage.",
                  },
                ].map((feat, idx) => (
                  <div key={idx} className="dac-families-feature-item">
                    <div className="dac-families-feature-icon-box">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div className="dac-families-feature-texts">
                      <h3 className="dac-families-feature-title">
                        {feat.title}
                      </h3>
                      <p className="dac-families-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images Column */}
            <div className="dac-families-right">
              <div className="dac-families-image-wrapper">
                <div className="dac-families-img-card dac-families-img-card--primary">
                  <img
                    src={VikingExp10}
                    alt="Viking Ocean cruise Mediterranean destination experience"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Viking Explorer Suite
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={VikingExp11}
                    alt="Viking Ocean Northern Europe Scandinavia cultural cruise"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Viking Outdoor Dining
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT IS INCLUDED ══════════════════════════════════════════════════ */}
      <section
        className="ugt-components-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              What Is Included on a Viking Ocean Cruise?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp9}
                    alt="Viking Ocean cruise dining regional cuisine included"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One reason Viking enjoys strong guest loyalty is its
                  relatively inclusive pricing structure. Depending on the
                  itinerary, fares often include a meaningful range of amenities
                  that simplify budgeting and reduce surprise expenses.
                </p>

                <p className="ugt-component-text">
                  This allows travelers to better predict the true cost of a
                  Viking Ocean voyage — and often makes the value proposition
                  clearer when compared to mainstream cruise lines.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Often Included in Viking Ocean Cruise Fares:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Comfortable Staterooms & Suites",
                      "Multiple Dining Venues Throughout the Ship",
                      "Beer & Wine with Meals",
                      "Complimentary Wi-Fi",
                      "At Least One Shore Excursion Per Port",
                      "Cultural Enrichment Lectures & Programs",
                      "Port Charges & Fees",
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
                    backgroundColor: "var(--bg-soft)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  Inclusions vary by itinerary. Consult a Viking travel
                  specialist for details specific to your chosen voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION 2 ══════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Discover Viking Longships</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Viking's award-winning Longships showcase innovative engineering,
              streamlined Scandinavian design, and understated elegance.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/drsLIk6vJ5A"
                title="Discover Viking Longships"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS VIKING OCEAN WORTH IT? ══════════════════════════════════════ */}
      <section
        className="Asc-section Asc-alt-bg"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2>Are Viking Ocean Cruises Worth It?</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Worth It For</h3>

              <ul className="Asc-who-list">
                {[
                  "Couples",
                  "Retirees",
                  "Solo travelers",
                  "Cultural explorers",
                  "History enthusiasts",
                  "Destination-focused travelers",
                  "Luxury-minded guests",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">May Not Be Ideal For</h3>

              <ul className="Asc-who-list">
                {[
                  "Families with young children",
                  "Travelers seeking nightlife",
                  "Budget-focused travelers",
                  "Guests wanting water parks and attractions",
                  "Travelers seeking highly active onboard entertainment",
                ].map((item, i) => (
                  <li key={i}>
                    <X size={16} className="Asc-icon-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>
            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>
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
                  CEO · Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  121+ Countries Visited
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
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
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
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, safaris, expeditions, and premium travel",
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

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Viking Ocean Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={VikingCta}
            alt="Viking Ocean cruise scenic destination ocean voyage"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Viking Ocean Cruises Guide
                </span>
                <h2 className="Asc-help-h2">
                  The Most Memorable Journeys Are Defined <br /> by the
                  Destinations You Explore
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking Ocean Cruises has redefined ocean travel for a
                    generation of curious, destination-focused travelers.
                  </p>
                  <p className="Asc-help-intro">
                    By eliminating many of the distractions commonly found on
                    large cruise ships and focusing instead on culture, history,
                    enrichment, and exploration, Viking creates journeys that
                    feel more meaningful and immersive.
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
                  <br />
                  {readMore && (
                    <p className="Asc-help-intro">
                      Whether you're sailing through the Mediterranean,
                      exploring the Norwegian Fjords, discovering Alaska's
                      wilderness, or crossing oceans to distant destinations,
                      Viking offers a sophisticated and rewarding travel
                      experience.
                      <br />
                      <br />
                      For travelers who value learning, discovery, and authentic
                      connections with the world around them, Viking Ocean
                      Cruises remains one of the most respected names in modern
                      cruising.
                      <br />
                      <br />
                      <strong>
                        Because the most memorable journeys aren't defined by
                        what happens onboard. They're defined by the
                        destinations you explore and the stories you bring home.
                      </strong>
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
                  )}
                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Explore Viking Ocean Cruise Vacations
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Travelers Choose Viking Ocean Cruises:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Destination-Focused Travel",
                      "Cultural Enrichment Programs",
                      "Elegant Scandinavian Ocean Ships",
                      "Adults-Only Sophisticated Atmosphere",
                      "Inclusive Pricing Structure",
                      "Smaller Ships, More Personal Experience",
                      "Award-Winning Service",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                    <strong>
                      Contact Trips &amp; Ships Luxury Travel to explore Viking
                      Ocean cruise itineraries and find the perfect voyage for
                      your travel style.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VikingOceanCruises;
