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
  Sun,
  BookOpen,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import { Helmet } from "react-helmet-async";
import "../VikingCruises/VikingCruises.css";

// Import polar expedition images from assets
import HeroImage1 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica.jpg";
import HeroImage2 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica2.jpg";
import HeroImage3 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica3.jpg";
import GalapagosImage from "../../assets/LuxuryAlumniExpeditionCruises/Gal_pagos_Islands.jpg";

// Onboard imagery from Viking Ocean assets (representing the luxury Scandinavian interiors)
import VikingExp2 from "../../assets/VikingExpeditionCruises/Guests-in-Antarctica.jpg";
import VikingExp1 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica4.jpg";
import VikingExp3 from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica5.jpg";
import VikingExp4 from "../../assets/VikingExpeditionCruises/Guests-in-Antarctica2.jpg";
import VikingExp5 from "../../assets/VikingExpeditionCruises/Explorers_Lounge.jpg";
import VikingExp6 from "../../assets/VikingExpeditionCruises/Guests-in-Antarctica3.jpg";
import VikingExp9 from "../../assets/VikingExpeditionCruises/Viking-Aquavit-Terrace.jpg";
import VikingExp10 from "../../assets/VikingExpeditionCruises/Explorer-Suite-Living-Room.jpg";
import VikingExp11 from "../../assets/VikingExpeditionCruises/viking-expedition-cruise-antarctica-suite-view.jpg";
import VikingExp12 from "../../assets/VikingExpeditionCruises/viking-ocean-cruise-world-cafe-outdoor-deck.jpg";
import VikingCta from "../../assets/VikingExpeditionCruises/Expedition-Ship-Antarctica6.jpg";

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/viking-expedition-cruises#webpage",
      "url": "https://www.tripsandships.com/viking-expedition-cruises",
      "name": "Viking Expedition Cruises | Explore Antarctica, the Arctic & Beyond",
      "headline": "Viking Expedition Cruises",
      "description":
        "Discover Viking Expedition Cruises and explore Antarctica, the Arctic, the Great Lakes, and remote destinations around the world. Learn how Viking combines luxury, science, education, and exploration into unforgettable expedition experiences.",
      "inLanguage": "en-US",
      "author": {
        "@id": "https://www.tripsandships.com/#founder"
      },
      "publisher": {
        "@id": "https://www.tripsandships.com/#organization"
      },
      "isPartOf": { "@id": "https://www.tripsandships.com/#website" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "founder": {
        "@id": "https://www.tripsandships.com/#founder"
      }
    },
    {
      "address": { "@type": "PostalAddress", "addressLocality": "Winter Garden", "addressRegion": "FL", "postalCode": "34787", "addressCountry": "US" },
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "description":
        "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
      "parentOrganization": {
        "@id": "https://www.tripsandships.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#founder",
      "name": "Angela Hughes",
      "jobTitle": "CEO of Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/our-story",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
        "caption": "Angela Hughes - Luxury Travel Expert"
      },
      "description":
        "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and expedition cruises.",
      "worksFor": {
        "@id": "https://www.tripsandships.com/#organization"
      },
      "knowsAbout": [
        "Luxury Travel",
        "Expedition Cruises",
        "Viking Expedition Cruises",
        "Antarctica Expeditions",
        "Arctic Cruises",
        "Great Lakes Cruises"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/viking-expedition-cruises#breadcrumb",
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
          "name": "Cruise Guide",
          "item": "https://www.tripsandships.com/small-ship-cruises"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Viking Expedition Cruises",
          "item": "https://www.tripsandships.com/viking-expedition-cruises"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/viking-expedition-cruises#faq",
      "mainEntity": [
        {
          "@type": "Question",
          name: "What is Viking Expedition Cruises known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking Expedition Cruises is known for luxury expedition travel to destinations such as Antarctica, the Arctic, and the Great Lakes.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking sail to Antarctica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Antarctica is one of Viking's most popular expedition destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Expedition Cruises adults-only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guests generally must be at least 18 years old.",
          },
        },
        {
          "@type": "Question",
          name: "What wildlife can I see on Viking expeditions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the itinerary, guests may see penguins, whales, seals, seabirds, and other wildlife.",
          },
        },
        {
          "@type": "Question",
          name: "Are excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many expedition activities and guided experiences are included.",
          },
        },
        {
          "@type": "Question",
          name: "Is Viking Expedition Cruises luxury travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking combines expedition exploration with premium accommodations and service.",
          },
        },
        {
          "@type": "Question",
          name: "Does Viking have expedition experts onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Expert expedition teams provide lectures, guidance, and educational programming.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking expedition ships small?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They are significantly smaller than many mainstream cruise ships and designed specifically for exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complimentary Wi-Fi is generally included.",
          },
        },
        {
          "@type": "Question",
          name: "Are Viking Expedition Cruises worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe the combination of remote destinations, expert-led experiences, luxury accommodations, and educational opportunities provides excellent value.",
          },
        },
        {
          "@type": "Question",
          name: 'What is "The Hangar" on Viking expedition ships?',
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Hangar is an innovative, enclosed in-ship marina that allows guests to board excursion craft (such as Special Operations Boats, Zodiacs, and kayaks) easily and safely inside the ship, sheltered from wind and waves.",
          },
        },
        {
          "@type": "Question",
          name: "Do Viking expedition ships have submarines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Viking Polaris and Viking Octantis each carry two six-passenger yellow submarines (named John, Paul, George, and Ringo) that dive in polar waters, providing guests with undersea exploration opportunities, typically at no additional charge (subject to local conditions).",
          },
        },
        {
          "@type": "Question",
          name: "What gear is provided and what should I bring for a polar expedition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viking provides guests with a high-quality expedition jacket (yours to keep) and boots on loan for polar landings. You will also have access to trekking poles, life jackets, and dry bags. Guests should bring base layers, waterproof pants, gloves, warm socks, and sunglasses.",
          },
        },
        {
          "@type": "Question",
          name: "How does scientific research work onboard Viking expeditions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every Viking expedition ship has a working Science Lab equipped with wet and dry facilities. Guests can participate in active scientific research, assist in launching weather balloons, examine water samples under microscopes, and attend talks by resident polar scientists.",
          },
        },
        {
          "@type": "Question",
          name: "Are medical facilities available onboard for remote areas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Viking ships are equipped with a state-of-the-art Medical Center staffed by a resident physician and nurses, prepared to manage medical issues in remote polar environments.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "name": "Viking Expedition Cruises",
      "description":
        "Destination-focused polar and wilderness expedition voyages to Antarctica, the Arctic, and the Great Lakes aboard purpose-built Polar Class 6 expedition ships.",
      "image": "https://www.tripsandships.com/viking-expedition.png",
      "brand": {
        "@type": "Brand",
        "name": "Viking"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "4995",
        "highPrice": "24995",
        "offerCount": "10",
        "availability": "https://schema.org/InStock",
        "url": "https://www.tripsandships.com/viking-expedition-cruises"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "28",
        "bestRating": "5"
      },
      "review": {
        "@type": "Review",
        "@id": "https://www.tripsandships.com/viking-expedition-cruises#review",
        "reviewBody":
          "Viking Expedition Cruises offers award-winning destination-focused expedition voyages designed for curious adult travelers — combining purpose-built polar class ships, inclusive pricing, scientific discovery, and expert expedition guides.",
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
      q: "What is Viking Expedition Cruises known for?",
      a: "Viking Expedition Cruises is known for luxury expedition travel to destinations such as Antarctica, the Arctic, and the Great Lakes.",
    },
    {
      q: "Does Viking sail to Antarctica?",
      a: "Yes. Antarctica is one of Viking's most popular expedition destinations.",
    },
    {
      q: "Are Viking Expedition Cruises adults-only?",
      a: "Yes. Guests generally must be at least 18 years old.",
    },
    {
      q: "What wildlife can I see on Viking expeditions?",
      a: "Depending on the itinerary, guests may see penguins, whales, seals, seabirds, and other wildlife.",
    },
    {
      q: "Are excursions included?",
      a: "Many expedition activities and guided experiences are included.",
    },
    {
      q: "Is Viking Expedition Cruises luxury travel?",
      a: "Yes. Viking combines expedition exploration with premium accommodations and service.",
    },
    {
      q: "Does Viking have expedition experts onboard?",
      a: "Yes. Expert expedition teams provide lectures, guidance, and educational programming.",
    },
    {
      q: "Are Viking expedition ships small?",
      a: "They are significantly smaller than many mainstream cruise ships and designed specifically for exploration.",
    },
    {
      q: "Is Wi-Fi included?",
      a: "Yes. Complimentary Wi-Fi is generally included.",
    },
    {
      q: "Are Viking Expedition Cruises worth the cost?",
      a: "Many travelers believe the combination of remote destinations, expert-led experiences, luxury accommodations, and educational opportunities provides excellent value.",
    },
    {
      q: 'What is "The Hangar" on Viking expedition ships?',
      a: "The Hangar is an innovative, enclosed in-ship marina that allows guests to board excursion craft (such as Special Operations Boats, Zodiacs, and kayaks) easily and safely inside the ship, sheltered from wind and waves.",
    },
    {
      q: "Do Viking expedition ships have submarines?",
      a: "Yes. Viking Polaris and Viking Octantis each carry two six-passenger yellow submarines (named John, Paul, George, and Ringo) that dive in polar waters, providing guests with undersea exploration opportunities, typically at no additional charge (subject to local conditions).",
    },
    {
      q: "What gear is provided and what should I bring for a polar expedition?",
      a: "Viking provides guests with a high-quality expedition jacket (yours to keep) and boots on loan for polar landings. You will also have access to trekking poles, life jackets, and dry bags. Guests should bring base layers, waterproof pants, gloves, warm socks, and sunglasses.",
    },
    {
      q: "How does scientific research work onboard Viking expeditions?",
      a: "Every Viking expedition ship has a working Science Lab equipped with wet and dry facilities. Guests can participate in active scientific research, assist in launching weather balloons, examine water samples under microscopes, and attend talks by resident polar scientists.",
    },
    {
      q: "Are medical facilities available onboard for remote areas?",
      a: "Yes, Viking ships are equipped with a state-of-the-art Medical Center staffed by a resident physician and nurses, prepared to manage medical issues in remote polar environments.",
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
const VikingExpeditionCruises = () => {
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
        antarctica: 5,
        arctic: 6,
        "the-arctic": 6,
        greatlakes: 7,
        "great-lakes": 7,
        coast: 8,
        "north-american-coast": 8,
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
          Viking Expedition Cruises | Explore Antarctica, the Arctic &amp;
          Beyond
        </title>
        <meta
          name="title"
          content="Viking Expedition Cruises | Luxury Expedition Travel for Curious Explorers"
        />
        <meta
          name="description"
          content="Discover Viking Expedition Cruises and explore Antarctica, the Arctic, the Great Lakes, and remote destinations around the world. Learn how Viking combines luxury, science, education, and exploration into unforgettable expedition experiences."
        />
        <meta
          property="og:title"
          content="Viking Expedition Cruises | Explore Antarctica, the Arctic &amp; Beyond"
        />
        <meta
          property="og:description"
          content="Discover Viking Expedition Cruises and explore Antarctica, the Arctic, the Great Lakes, and remote destinations around the world."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/viking-expedition-cruises"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/viking-expedition-cruises"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

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
          <h1>
            Explore the World's Most Remote Destinations with Viking Expedition
            Cruises
          </h1>
          <p>
            For travelers who dream of exploring the most extraordinary places
            on Earth, Viking Expedition Cruises offers a unique combination of
            adventure, discovery, luxury, and education.
          </p>
          <p>
            Unlike traditional ocean cruises that focus on popular tourist
            destinations, expedition cruises take guests to some of the world's
            most remote and fascinating regions.
          </p>
          {readMore && (
            <>
              <p>
                From the icy landscapes of Antarctica and the Arctic to the
                pristine coastlines of North America and the Great Lakes, Viking
                Expedition Cruises are designed for travelers who want to go
                beyond sightseeing and experience the world in a deeper, more
                meaningful way.
              </p>
              <p>
                These voyages blend exploration with comfort, creating
                unforgettable journeys for curious travelers.
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

      {/* ══ WHAT IS A VIKING EXPEDITION CRUISE ════════════════════════════════ */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          {/* Quick Page Links for Pillar/Cluster Hierarchy */}

          <div className="ugt-components-header">
            <h2 className="adg-c-h2">What Is a Viking Expedition Cruise?</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp1}
                    alt="Viking Expedition ship sailing polar landscape"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  A Viking Expedition Cruise is a destination-focused voyage
                  that combines exploration, scientific discovery, educational
                  enrichment, luxury accommodations, and expert-led experiences.
                </p>
                <p className="ugt-component-text">
                  Rather than simply visiting ports, expedition travelers
                  actively engage with the environments they explore,
                  participating in polar landings, scientific research, and
                  wildlife observation.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Viking Expedition Cruises Offer:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Exploration",
                      "Scientific discovery",
                      "Educational enrichment",
                      "Luxury accommodations",
                      "Expert-led experiences",
                      "Wildlife encounters",
                      "Remote destinations",
                      "Small-group adventures",
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
              Discover the Viking Expedition Experience
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Watch a tour of Viking's state-of-the-art polar expedition ship
              and see how scientific discovery, comfortable design, and polar
              research come together on every voyage.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/XCLFSFXAggo"
                title="Discover the Viking Expedition Cruise Experience"
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
              What Makes Viking Expedition Cruises Different?
            </h2>
            <div className="dbf-fleet-accent"></div>
          </div>

          <div className="dbf-fleet-grid">
            {[
              {
                name: "Exploration Without Sacrificing Comfort",
                desc: "Guests enjoy luxury accommodations while visiting some of the world's most remote regions.",
                icon: Mountain,
              },
              {
                name: "Science and Discovery",
                desc: "Expedition voyages emphasize learning and exploration with wet and dry labs onboard.",
                icon: Compass,
              },
              {
                name: "Expert Expedition Teams",
                desc: "Polar specialists, scientists, and researchers help guests understand the destinations they visit.",
                icon: Users,
              },
              {
                name: "Smaller Guest Capacity",
                desc: "Comfortable polar vessels with only around 378 guests provide a highly intimate travel experience.",
                icon: Ship,
              },
              {
                name: "Purpose-Built Expedition Ships",
                desc: "Specifically designed for polar environments with active stabilization and reinforced hulls.",
                icon: Anchor,
              },
              {
                name: "Inclusive Onboard Excursions",
                desc: "Zodiac landings, submarine outings, and kayak trips are part of Viking's inclusive value.",
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
        </div>
      </section>

      {/* ══ WHY TRAVELERS CHOOSE VIKING EXPEDITION ══════════════════════════ */}
      <section className="luc-why-section" id="luc-why-viking">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp2}
                alt="Viking Expedition ship navigating remote destinations"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={VikingExp3}
                alt="Viking Expedition scientific facilities and observation areas"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Key Features</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">Purpose-Built Expedition Ships</h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              Viking's expedition vessels are specifically designed for
              exploration, combining advanced capabilities with the comfort and
              elegance guests expect from Viking.
            </p>

            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Advanced Technology",
                  desc: "Supports safe and efficient travel in some of the world's most remote environments.",
                },
                {
                  num: "02",
                  title: "Polar Capabilities",
                  desc: "Purpose-built to navigate challenging conditions in Arctic and Antarctic regions.",
                },
                {
                  num: "03",
                  title: "Comfortable Accommodations",
                  desc: "Luxury standards remain central to the onboard experience.",
                },
                {
                  num: "04",
                  title: "Observation Areas",
                  desc: "Ideal for wildlife viewing, photography, and scenic cruising.",
                },
                {
                  num: "05",
                  title: "Scientific Facilities",
                  desc: "Support educational programming, guest learning, and research-focused activities.",
                },
                {
                  num: "06",
                  title: "Expedition Excellence",
                  desc: "Combines exploration capabilities with Viking's signature comfort and service.",
                },
              ]
                .slice(0, readMoreWhy ? 6 : 3)
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

      {/* ══ WILDLIFE ENCOUNTERS ON VIKING EXPEDITIONS ═══════════════════════ */}
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
                  alt="Scenic kayaking near massive glacier"
                  className="dmg-media-img"
                  style={{ height: "710px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Polar Expedition</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Wildlife Encounters on Viking Expeditions
              </h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Wildlife is often one of the most memorable aspects of
                expedition travel. Depending on the destination, guests have
                unique opportunities for close-up observation and photography in
                natural habitats.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Penguins</h3>
                    <p className="dmg-info-feature-desc">
                      Observe massive colonies in Antarctica as they interact on
                      land and ice.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Whales</h3>
                    <p className="dmg-info-feature-desc">
                      Watch for humpbacks, orcas, and fin whales breaching in
                      remote polar channels.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Seals</h3>
                    <p className="dmg-info-feature-desc">
                      Spot Weddell, leopard, and elephant seals resting on ice
                      floes or coastlines.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Polar Wildlife</h3>
                    <p className="dmg-info-feature-desc">
                      Search for unique species adapted to arctic and sub-polar
                      ecosystems.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Seabirds</h3>
                    <p className="dmg-info-feature-desc">
                      Observe albatrosses, petrels, and puffins nesting on
                      dramatic sea cliffs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ POPULAR EXPEDITION DESTINATIONS — TABBED SECTION ════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">
              Popular Viking Expedition Destinations
            </span>
            <h2 className="dac-reasons-title">
              Where Does Viking Expedition Cruise?
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              Viking explores some of the world's most extraordinary locations.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Mountain size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">01</span>
                <span className="dac-reasons-tab-title">Antarctica</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Globe size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">02</span>
                <span className="dac-reasons-tab-title">The Arctic</span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Waves size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">03</span>
                <span className="dac-reasons-tab-title">Great Lakes</span>
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
                <span className="dac-reasons-tab-title">
                  North American Coast
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Tab 5 — Antarctica */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">01</span>
                    <h3 className="dac-reasons-row-title">
                      Antarctica Expeditions
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Antarctica remains one of the most sought-after expedition
                      destinations in the world. A bucket-list polar wilderness
                      where guests explore glaciers, mountains, massive
                      icebergs, and observe penguin colonies.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Massive Icebergs",
                        "Penguin Colonies",
                        "Spectacular Landscapes",
                        "Zodiac Excursions",
                        "Scientific Insights",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Check size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={HeroImage1}
                        alt="Massive icebergs and penguins in Antarctica"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6 — The Arctic */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">02</span>
                    <h3 className="dac-reasons-row-title">
                      Arctic Expeditions
                    </h3>
                    <p className="dac-reasons-row-desc">
                      The Arctic offers dramatic scenery, polar exploration
                      history, and unique wildlife encounters. Highlights
                      include remote Greenland communities, Svalbard, and
                      searching for polar bears and seabirds.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Greenland Coast",
                        "Svalbard Archipelago",
                        "Arctic Wildlife",
                        "Polar Exploration History",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Check size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={HeroImage2}
                        alt="Glaciers and remote wilderness in the Arctic"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7 — Great Lakes */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">03</span>
                    <h3 className="dac-reasons-row-title">
                      Great Lakes Expeditions
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Explore North America's massive inland seas: Lakes
                      Superior, Michigan, Huron, Erie, and Ontario. Itineraries
                      showcase natural wilderness alongside historic port
                      cities, indigenous culture, and maritime history.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "All Five Great Lakes",
                        "Maritime History",
                        "Indigenous Heritage",
                        "Scenic Shorelines",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Check size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={HeroImage3}
                        alt="Great Lakes scenic coastline and waterways"
                        className="dac-reasons-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8 — North American Coast */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">04</span>
                    <h3 className="dac-reasons-row-title">
                      North American Coastal
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Itineraries exploring remote coastlines, hidden scenic
                      passages, rich marine wildlife habitats, and historical
                      maritime communities along North America's scenic ocean
                      passages.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Remote Coastlines",
                        "Wildlife Habitats",
                        "Scenic Passages",
                        "Lesser-Known Communities",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Check size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        src={GalapagosImage}
                        alt="Scenic coastlines and islands of North America"
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

      {/* ══ EXPEDITION ACTIVITIES ══════════════════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">Immersive Exploration</span>

            <h2 className="ugt-advantage-title">Expedition Activities</h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Activities vary by destination, but every Viking Expedition voyage
              is designed to deepen guests' understanding of the places they
              visit through exploration, education, and cultural discovery.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            {[
              {
                icon: Ship,
                title: "Zodiac Landings",
                desc: "Explore remote shorelines and inaccessible areas with experienced expedition guides, bringing guests closer to nature and wildlife.",
              },
              {
                icon: Sun,
                title: "Wildlife Viewing & Scenic Cruising",
                desc: "Observe animals in their natural habitats while enjoying spectacular views of glaciers, fjords, icebergs, and remote coastlines.",
              },
              {
                icon: Globe,
                title: "Educational & Cultural Experiences",
                desc: "Learn from destination experts and discover local traditions, history, and cultures through enriching excursions and onboard programs.",
              },
            ].map((card, i) => {
              const Icon = card.icon;

              return (
                <div key={i} className="ugt-advantage-card">
                  <div className="ugt-icon-box">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h4 className="ugt-card-title">{card.title}</h4>

                  <p className="ugt-card-desc">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Viking Expedition Cruises vs Traditional Cruises
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Viking Expedition Cruises</th>
                  <th>Traditional Cruises</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Remote Destinations</strong>
                  </td>
                  <td>✔ (Polar &amp; Coastal)</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Wildlife Focus</strong>
                  </td>
                  <td>✔ (High Immersion)</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Scientific Programs</strong>
                  </td>
                  <td>✔ (Active Labs Onboard)</td>
                  <td>Rare</td>
                </tr>
                <tr>
                  <td>
                    <strong>Expedition Landings</strong>
                  </td>
                  <td>✔ (Zodiacs &amp; Kayaks)</td>
                  <td>Rare</td>
                </tr>
                <tr>
                  <td>
                    <strong>Educational Lectures</strong>
                  </td>
                  <td>Extensive (Expert Teams)</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Adult-Oriented</strong>
                  </td>
                  <td>✔ (Adults-Only 18+)</td>
                  <td>Mixed</td>
                </tr>
                <tr>
                  <td>
                    <strong>Adventure Experiences</strong>
                  </td>
                  <td>High (Zodiac, Sub, Kayak)</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Water Parks &amp; Attractions</strong>
                  </td>
                  <td>✖ (None)</td>
                  <td>Often Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ VIKING EXPEDITION EXPERIENCE SPOTLIGHTS ═════════════════════════ */}
      <section className="dbf-spotlight-section">
        <div className="dbf-spotlight-container">
          <div className="dbf-spotlight-header">
            <h2 className="dbf-spotlight-title">
              Viking Expedition Experience Highlights
            </h2>
            <div className="dbf-spotlight-accent"></div>
          </div>

          <div className="dbf-spotlight-grid">
            {/* CARD 1: Life Onboard */}
            <div className="dbf-spotlight-card dbf-spotlight-card--wish">
              <div className="dbf-spotlight-card-header">
                <span className="dbf-spotlight-card-badge">
                  Onboard Experience
                </span>
                <h3 className="dbf-spotlight-card-title">
                  Life Onboard a Viking Expedition Ship
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp5}
                  alt="Life onboard Viking Expedition dining room"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  The onboard experience complements the destinations being
                  explored, offering intellectual enrichment alongside
                  relaxation. Guests gain deeper insights into the regions they
                  explore.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Onboard Experience Features:
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Expert Lectures",
                        text: "Learn about polar wildlife, geology, history, and culture.",
                      },
                      {
                        title: "Educational Programming",
                        text: "Destination-focused presentations throughout the voyage.",
                      },
                      {
                        title: "Observation Opportunities",
                        text: "Enjoy spectacular scenery from multiple viewing areas.",
                      },
                      {
                        title: "Scientific Discovery",
                        text: "Guests gain deeper insights in dry and wet research labs.",
                      },
                      {
                        title: "Relaxation",
                        text: "Comfortable Scandinavian spaces to unwind after daily adventures.",
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
                  Onboard research laboratories and polar scientists offer
                  direct, hands-on learning.
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
                  Viking Expedition for Mature Travelers
                </h3>
              </div>

              <div className="dbf-spotlight-card-media">
                <img
                  src={VikingExp6}
                  alt="Mature travelers enjoying polar landscapes"
                  className="dbf-spotlight-card-img"
                />
                <div className="dbf-spotlight-card-img-overlay"></div>
                <div className="dbf-spotlight-card-icon-badge">
                  <Users size={18} />
                </div>
              </div>

              <div className="dbf-spotlight-card-body">
                <p className="dbf-spotlight-card-lead">
                  Viking's expedition cruises appeal to mature travelers,
                  retirees, and nature enthusiasts who value discovery, wildlife
                  viewing, and lifelong learning.
                </p>

                <div className="dbf-spotlight-features-box">
                  <h4 className="dbf-spotlight-features-title">
                    Popular Guest Profiles:
                  </h4>

                  <ul className="dbf-spotlight-features-list">
                    {[
                      {
                        title: "Retirees & Empty Nesters",
                        text: "Seeking enriching, educational polar and coastal experiences.",
                      },
                      {
                        title: "Couples & Solo Travelers",
                        text: "Sharing sophisticated adventures in a comfortable group environment.",
                      },
                      {
                        title: "Nature & Wildlife Lovers",
                        text: "Passionate about polar landscapes, marine life, and wild spaces.",
                      },
                      {
                        title: "Photographers",
                        text: "Capturing massive icebergs, glaciers, fjords, and unique wildlife.",
                      },
                      {
                        title: "Adventure & Lifelong Learners",
                        text: "Accessing remote environments with world-class polar experts.",
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
                  Sophisticated and destination-focused, tailored for lifelong
                  learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS VIKING EXPEDITION FAMILY-FRIENDLY? ═══════════════════════════ */}
      <section className="adg-section">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">
              Are Viking Expedition Cruises Family-Friendly?
            </h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={VikingExp9}
                alt="Adults-only Viking Expedition stateroom"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Adults-Only Expedition Experience
                  </span>
                </div>

                <p className="adg-card-lead">
                  Viking operates an adults-only environment.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Guests generally must be at least 18 years old to sail on
                  Viking polar expedition vessels.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  The cruise line focuses on scientific discovery, polar
                  exploration, and a quiet, sophisticated atmosphere designed
                  for adult travelers. Viking does not provide kids clubs or
                  children's entertainment.
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
                  title: "No Water Slides or Family Amusement Parks",
                  icon: <Waves size={20} />,
                },
                {
                  title: "No Family Entertainment or Characters",
                  icon: <Users size={20} />,
                },
                {
                  title: "Designed Specifically for Adult Explorers",
                  icon: <Star size={20} />,
                },
                {
                  title: "Focus Placed on Science, Education & Culture",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Expert-Led Expedition Lectures & Workshops",
                  icon: <BookOpen size={20} />,
                },
                {
                  title: "Peaceful Atmosphere for Meaningful Exploration",
                  icon: <Mountain size={20} />,
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

      {/* ══ WHY LUXURY TRAVELERS APPRECIATE VIKING EXPEDITIONS ══════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <div className="dac-families-heading-wrap">
                <h2 className="dac-families-title">
                  Why Luxury Travelers Choose Viking Expeditions
                </h2>
                <div className="dac-families-accent"></div>
              </div>

              <div className="dac-families-features">
                {[
                  {
                    title: "Luxury Accommodations",
                    desc: "State-of-the-art polar class staterooms and suites that keep you comfortable even in remote environments.",
                  },
                  {
                    title: "Destination Immersion",
                    desc: "Itineraries and daily landings built entirely around deep wilderness exploration and wildlife encounters.",
                  },
                  {
                    title: "Educational Value",
                    desc: "World-class geologists, polar scientists, and biologists lead excursions and onboard research lectures.",
                  },
                  {
                    title: "Smaller Guest Numbers",
                    desc: "With around 378 guests onboard, the cruise offers a highly personalized, uncrowded luxury travel experience.",
                  },
                  {
                    title: "Exceptional Service",
                    desc: "Award-winning onboard service, attentive crew, and simple inclusive pricing streamline your polar journey.",
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
                    src={VikingExp11}
                    alt="Viking Expedition luxury stateroom stateroom"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Antarctica Suite View
                  </div>
                </div>

                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={VikingExp12}
                    alt="Viking Expedition outdoor observation area"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Viking Cruise Outdoor Deck
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
              What Is Included on a Viking Expedition Cruise?
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VikingExp10}
                    alt="Viking Expedition included gourmet dining"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Viking offers a relatively inclusive expedition experience.
                  Depending on the itinerary, fares cover a wide range of
                  premium onboard and shore-side amenities, simplifying planning
                  and budgeting.
                </p>

                <p className="ugt-component-text">
                  This straightforward pricing avoids the nickel-and-diming
                  often found on traditional cruise lines, letting you focus
                  fully on polar and coastal discovery.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Often Included in Viking Expedition Cruise Fares:
                  </span>
                  <ul className="ugt-questions-list">
                    {[
                      "Comfortable Staterooms & Suites",
                      "Multiple Dining Venues Throughout the Ship",
                      "Beer & Wine with Lunch and Dinner",
                      "Complimentary Wi-Fi Access",
                      "Daily Zodiac Landings & Guided Excursions",
                      "Scientific Enrichment Programs & Lectures",
                      "Access to Specialty Expedition Gear",
                      "Port Charges & Fees",
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

      {/* ══ VIDEO SECTION 2 ══════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Explore the Great Lakes with Viking</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover the maze of granite islands that make up the Georgian Bay
              Biosphere Reserve while hiking, kayaking, and taking in
              breathtaking vistas.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/hmEob-WtVdE"
                title="Explore the Great Lakes with Viking"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ARE VIKING EXPEDITIONS WORTH IT? ══════════════════════════════════ */}
      <section
        className="Asc-section Asc-alt-bg"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2>Are Viking Expedition Cruises Worth It?</h2>
            <div className="Asc-accent-line"></div>
            <p
              className="Asc-faq-intro"
              style={{
                marginTop: "15px",
                marginBottom: "30px",
                fontSize: "1.1rem",
              }}
            >
              To see if an adventure voyage is right for your travel goals, read
              our core{" "}
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
              analysis and see what guest feedback reports in our{" "}
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
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Worth It For</h3>

              <ul className="Asc-who-list">
                {[
                  "Adventure seekers",
                  "Nature & wildlife enthusiasts",
                  "Wildlife photographers",
                  "Cultural explorers",
                  "Lifelong learners",
                  "Couples & solo travelers",
                  "Luxury travelers seeking meaningful experiences",
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
                  "Families with children under 18",
                  "Travelers seeking active nightlife",
                  "Budget-focused travelers",
                  "Guests wanting water parks & resort attractions",
                  "Travelers preferring highly predictable weather/itineraries",
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
              Everything you need to know about Viking Expedition Cruises.
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
            alt="Viking Expedition ship in polar wilderness"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Viking Expedition Cruises Guide
                </span>
                <h2 className="Asc-help-h2">
                  It's About Experiencing Places That Change How You See the
                  World.
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Viking Expedition Cruises offers travelers the opportunity
                    to explore some of the most remote, beautiful, and
                    fascinating destinations on Earth without sacrificing
                    comfort or quality.
                  </p>
                  <p className="Asc-help-intro">
                    Whether you're witnessing towering Antarctic icebergs,
                    exploring Arctic wilderness, discovering wildlife-rich
                    coastlines, or learning from world-class experts, Viking
                    transforms travel into an experience of discovery and
                    enrichment.
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
                      For travelers who believe the greatest adventures happen
                      beyond the ordinary, Viking Expedition Cruises provides a
                      remarkable way to see the world.
                      <br />
                      <br />
                      <strong>
                        Contact Trips &amp; Ships Luxury Travel to explore
                        Viking Expedition cruise itineraries and begin planning
                        your next great adventure.
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
                      Explore Viking Expedition Cruises
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Viking Expedition Features:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Polar & Remote Destinations Focus",
                      "Dry & Wet Scientific Research Labs Onboard",
                      "Purpose-Built Polar Class Ships (378 Guests)",
                      "Adults-Only Refined Atmosphere (18+)",
                      "Included Excursions (Zodiacs, Kayaking, Gear)",
                      "Complimentary Wi-Fi Access",
                      "Award-Winning Onboard Service & Dining",
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VikingExpeditionCruises;
