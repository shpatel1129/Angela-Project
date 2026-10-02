import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// Page Asset Images from SeabournOceanvsExpeditionCruises (SEO-Optimized)
import heroImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-ocean-vs-expedition-cruises-hero.jpg";
import editorialImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-ocean-vs-expedition-two-distinct-luxury-approaches-editorial.jpg";
import oceanCoreImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/what-is-a-seabourn-ocean-cruise-classic-luxury-ports.jpg";
import expeditionCoreImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/what-is-a-seabourn-expedition-cruise-polar-exploration-ships.jpg";
import ovationImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-ovation-ocean-fleet-luxury-cruise-ship.jpg";
import encoreImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-encore-ocean-fleet-modern-luxury-ship.jpg";
import questImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-quest-ocean-fleet-intimate-luxury-ship.jpg";
import ventureImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-venture-ultra-luxury-polar-expedition-ship.jpg";
import pursuitImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-pursuit-remote-destination-expedition-ship.jpg";
import oceanDestImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-ocean-cruise-destinations-mediterranean-caribbean-alaska.jpg";
import expeditionDestImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-expedition-cruise-destinations-arctic-antarctica-kimberley.jpg";
import antarcticaDestImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/is-seabourn-antarctica-ocean-or-expedition-cruise-guide.jpg";
import oceanSeaDayImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-ocean-fleet-sea-day-relaxation-dining-amenities.jpg";
import expeditionSeaDayImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/seabourn-expedition-fleet-sea-day-wildlife-zodiac-discovery.jpg";
import chooseOceanImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/choose-seabourn-ocean-cruise-classic-cultural-ports.jpg";
import considerExpeditionImg from "../../../assets/Seabourn/SeabournOceanvsExpeditionCruises/consider-seabourn-expedition-cruise-remote-adventure.jpg";

// Distinct CTA Background Images (from other Seabourn collections)
import midCtaImg from "../../../assets/Seabourn/SeabournCruises/seabourn-purpose-built-ultra-luxury-expedition-cruises.jpg";
import bottomCtaImg from "../../../assets/Seabourn/SeabournShips/seabourn-ocean-vs-expedition-fleet-comparison.jpg";

// Distinct UI Components (Zero repetition of component types across sections)
import ComparisonHero from "../../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import HighlightsSplit from "../../../components/ui/HighlightsSplit";
import LuxuryZigZagShowcase from "../../../components/ui/LuxuryZigZagShowcase";
import OceanVsExpeditionCoreShowcase from "../../../components/ui/OceanVsExpeditionCoreShowcase";
import DetailedInclusionsList from "../../../components/ui/DetailedInclusionsList";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import CurvilinearGrid from "../../../components/ui/CurvilinearGrid";
import TravelerPersonaCards from "../../../components/ui/TravelerPersonaCards";
import TravelerProfileTabs from "../../../components/ui/TravelerProfileTabs";
import CardGrid from "../../../components/ui/CardGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import ExpertAuthorityChecklist from "../../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";
import FadeIn from "../../../components/ui/FadeIn";

// Data Source
import data from "./data.json";

const SeabournOceanVsExpedition = () => {
  // ── 1. HighlightsSplit Data (Core Concepts & Exploration Flows) ──
  const coreConceptHighlights = [
    {
      title: data.coreConcepts.ocean.title,
      description: data.coreConcepts.ocean.description,
      bulletPoints: data.coreConcepts.ocean.destinations,
      icon: "Compass"
    },
    {
      title: data.coreConcepts.expedition.title,
      description: `${data.coreConcepts.expedition.description} ${data.coreConcepts.expedition.footnote}`,
      bulletPoints: data.coreConcepts.expedition.features,
      icon: "Sparkles"
    },
    {
      title: data.coreConcepts.biggestDifference.oceanFlow.title,
      description: `${data.coreConcepts.biggestDifference.oceanFlow.flow} — ${data.coreConcepts.biggestDifference.oceanFlow.description}`,
      bulletPoints: ["Established ports with deep infrastructure", "Curated shore excursions & independent walks", "Return to familiar luxury yacht amenities"],
      icon: "Star"
    },
    {
      title: data.coreConcepts.biggestDifference.expeditionFlow.title,
      description: `${data.coreConcepts.biggestDifference.expeditionFlow.flow} — ${data.coreConcepts.biggestDifference.expeditionFlow.description}`,
      bulletPoints: ["Ship acts as an ultra-luxury mobile base camp", "Zodiacs and kayaks launch directly from the ship", "Daily flexible landings guided by natural conditions"],
      icon: "Heart"
    }
  ];

  // ── 2. LuxuryZigZagShowcase Data (Combined Ocean & Expedition Fleet) ──
  const shipImageMap = {
    "Seabourn Ovation": ovationImg,
    "Seabourn Encore": encoreImg,
    "Seabourn Quest": questImg,
    "Seabourn Venture": ventureImg,
    "Seabourn Pursuit": pursuitImg
  };
  const fleetShowcaseItems = [
    ...data.fleetProfiles.oceanFleet.map((ship) => ({
      title: ship.title,
      name: ship.title,
      category: ship.category,
      description: ship.description,
      bullets: ship.bullets,
      image: shipImageMap[ship.title] || null
    })),
    ...data.fleetProfiles.expeditionFleet.map((ship) => ({
      title: ship.title,
      name: ship.title,
      category: ship.category,
      description: ship.description,
      bullets: ship.bullets,
      image: shipImageMap[ship.title] || null
    }))
  ];

  // ── 2b. Core Cruise Showcases (Ocean vs Expedition Deep Dive) ───
  const coreShowcaseItems = [
    {
      title: "What Is a Seabourn Ocean Cruise?",
      image: oceanCoreImg,
      paragraphs: [
        "A Seabourn ocean cruise is the more traditional version of the Seabourn experience.",
        "You still receive the intimate, small-ship atmosphere, all-suite accommodations and personalized service associated with the brand, but the voyage is primarily structured around visiting established ports and destinations."
      ],
      listTitle: "Ocean itineraries can include destinations such as:",
      listItems: [
        "Mediterranean",
        "Alaska",
        "Caribbean",
        "Northern Europe",
        "Japan",
        "Canada and New England",
        "Europe",
        "Other global destinations"
      ],
      footnote: "Seabourn describes its ocean voyages as part of its luxury small-ship experience, visiting destinations across all seven continents."
    },
    {
      title: "What Is a Seabourn Expedition Cruise?",
      image: expeditionCoreImg,
      paragraphs: [
        "A Seabourn expedition cruise is designed around exploration.",
        "The expedition ships Seabourn Venture and Seabourn Pursuit were purpose-built for this style of travel."
      ],
      listTitle: "They feature:",
      listItems: [
        "Polar Class 6 capabilities",
        "24 Zodiacs",
        "Kayaks",
        "Dedicated Expedition Teams",
        "Expedition spaces",
        "Oceanfront suites",
        "Luxury dining",
        "Spa and wellness facilities",
        "Expedition programming"
      ],
      footnote: "Each expedition ship carries a 19-person Expedition Team made up of specialists such as scientists, academics and naturalists."
    }
  ];

  // ── 3. DetailedInclusionsList Data (Ship Design Priorities) ─────
  const shipDesignData = {
    title: data.shipDesignComparison.title,
    intro: [
      data.shipDesignComparison.description,
      "Both fleet categories represent the pinnacle of ultra-luxury ocean travel, yet their technical architecture, public spaces, and equipment are engineered for two different maritime mission profiles."
    ],
    items: [
      {
        title: data.shipDesignComparison.ocean.title,
        paragraphs: [
          "Seabourn's ocean ships emphasize expansive leisure spaces, sophisticated evening entertainment venues, sun decks, and multiple fine-dining restaurants.",
          `Key Design Features: ${data.shipDesignComparison.ocean.items.join(" • ")}`
        ]
      },
      {
        title: data.shipDesignComparison.expedition.title,
        paragraphs: [
          data.shipDesignComparison.expedition.footnote,
          `Key Expedition Architecture: ${data.shipDesignComparison.expedition.items.join(" • ")}`
        ]
      }
    ]
  };

  // ── 4. ThreeColumnGrid Data (Destinations Exploration) ───────────
  const destinationGridItems = [
    {
      title: data.destinationsExploration.ocean.title,
      description: data.destinationsExploration.ocean.description,
      category: "TRADITIONAL OCEAN PORTS",
      features: data.destinationsExploration.ocean.places,
      image: oceanDestImg
    },
    {
      title: data.destinationsExploration.expedition.title,
      description: `${data.destinationsExploration.expedition.description} ${data.destinationsExploration.expedition.footnote}`,
      category: "REMOTE EXPEDITION REGIONS",
      features: data.destinationsExploration.expedition.places,
      image: expeditionDestImg
    },
    {
      title: data.destinationsExploration.antarcticaDeepDive.title,
      description: `${data.destinationsExploration.antarcticaDeepDive.lead} ${data.destinationsExploration.antarcticaDeepDive.text}`,
      category: "POLAR EXPEDITION MASTERCLASS",
      features: [
        "Zodiac cruising through iceberg galleries",
        "Wet landings among penguin colonies",
        "Guided hikes across polar ice & tundra",
        "Expert marine biologist & historian debriefs"
      ],
      image: antarcticaDestImg
    }
  ];

  // ── 5. CurvilinearGrid Data (Excursions & Exploration Dynamics) ──
  const excursionCurvilinearItems = data.excursionsAndActivities.sections.map((sec, idx) => {
    const icons = ["Compass", "Ship", "Activity", "Eye", "User"];
    return {
      title: sec.title,
      description: sec.description,
      features: sec.bullets || [],
      icon: icons[idx % icons.length]
    };
  });

  // ── 5b. Life Onboard Nuances (TravelerPersonaCards) ──────────────
  const onboardNuancePersonas = [
    {
      title: "Is an Expedition Cruise More Active?",
      description: "Generally, it can be. However, expedition cruising does not mean every guest has to participate in strenuous activities. Guests can often choose different activity levels depending on the itinerary and available experiences.",
      traits: [
        "Walking",
        "Hiking",
        "Zodiac boarding",
        "Kayaking",
        "Beach landings",
        "Wildlife observation",
        "Getting on and off expedition boats"
      ],
      icon: "Bike"
    },
    {
      title: "Is an Ocean Cruise More Relaxing?",
      description: "An ocean cruise can be easier to structure around relaxation. That makes traditional ocean cruising attractive to travelers who want luxury travel without making adventure the central purpose of the trip.",
      traits: [
        "At the pool",
        "In the spa",
        "Reading",
        "Dining",
        "Shopping",
        "Attending lectures",
        "Enjoying your suite",
        "Exploring a port",
        "Relaxing on deck"
      ],
      icon: "Heart"
    },
    {
      title: "Is an Expedition Cruise Rougher?",
      description: "Not necessarily. Seabourn's expedition ships are designed to provide luxury accommodations while operating in challenging environments. The ships are purpose-built with PC6 Polar Class standards and expedition equipment. The environment may be more remote, but the onboard experience remains luxury-focused.",
      traits: [
        "PC6 Polar Class reinforced hulls",
        "Advanced stabilization systems",
        "Ultra-luxury interior insulation & comfort",
        "All-weather expedition discovery spaces"
      ],
      icon: "Gem"
    },
    {
      title: "Are Seabourn Expedition Ships Less Luxurious?",
      description: "No. This is one of the misconceptions worth addressing. Seabourn's expedition ships are designed as ultra-luxury expedition ships, not basic adventure vessels. The difference is what the ship is built to help you do.",
      traits: [
        "Oceanfront suites",
        "Private verandas",
        "Fine dining",
        "Spa",
        "Wellness",
        "Lounges",
        "Expedition spaces",
        "Personalized service"
      ],
      icon: "Landmark"
    },
    {
      title: "Are the Suites Different?",
      description: "Both ocean and expedition ships offer oceanfront suite accommodations. Seabourn's expedition ships feature 132 oceanfront, veranda-equipped suites, while the traditional fleet also emphasizes all-suite accommodations. The choice therefore does not have to be: Luxury vs. adventure. It can be: Luxury ocean cruising vs. luxury expedition cruising.",
      traits: [
        "All-suite luxury across both fleets",
        "132 oceanfront veranda suites on Venture & Pursuit",
        "Heated gear drying closets in expedition suites",
        "Spacious walk-in closets & marble bathrooms"
      ],
      icon: "Camera"
    },
    {
      title: "Is Dining Different?",
      description: "Both experiences maintain Seabourn's focus on luxury dining. Ocean cruises may place more emphasis on the traditional restaurant, specialty dining and leisurely meals between port visits. Expedition cruises still provide luxury dining, but meals may be combined with a more active expedition schedule. For example, you could spend part of the day exploring by Zodiac and return to the ship for a fine-dining experience.",
      traits: [
        "The Restaurant & The Colonnade across fleets",
        "Specialty gourmet venues & al fresco dining",
        "24-Hour complimentary in-suite dining",
        "Flexible dining schedules tailored to expedition landings"
      ],
      icon: "Wine"
    },
    {
      title: "Is the Entertainment Different?",
      description: "Traditional ocean cruises generally provide more conventional onboard entertainment. Expedition ships also provide entertainment and enrichment, but a greater proportion of the programming is connected to wildlife, geography, history, science, exploration, and local culture. The expedition itself becomes part of the entertainment.",
      traits: [
        "Ocean: Live music, performances, dancing, lounges, culinary programming, enrichment",
        "Expedition: Wildlife, geography, history, science, exploration, local culture"
      ],
      icon: "Landmark"
    },
    {
      title: "Is the Evening Atmosphere Different?",
      description: "Both are designed around Seabourn's relaxed luxury atmosphere. On an ocean cruise, evenings may revolve around dinner, cocktails, live music, shows, dancing, and lounges. On an expedition cruise, evenings may include expedition recaps, wildlife discussions, photography, lectures, cocktails, dinner, and informal conversation about the day's discoveries.",
      traits: [
        "Ocean: Dinner, cocktails, live music, shows, dancing, lounges",
        "Expedition: Expedition recaps, wildlife discussions, photography, lectures, cocktails, dinner, informal conversation"
      ],
      icon: "Wine"
    }
  ];

  // ── 6. TravelerProfileTabs Data (Sea Day Comparison) ─────────────
  const seaDayProfiles = [
    {
      name: "Ocean Sea Day",
      tagline: "RESTORATIVE YACHT LEISURE",
      quote: "A sea day on a Seabourn ocean ship is pure restorative freedom—unhurried mornings, poolside cocktails, spa indulgence, and fine dining.",
      reason: "Designed for travelers who want the luxury ship itself to be an indulgent destination.",
      whyFits: data.lifeOnboardComparison.seaDayTimeline.ocean.activities,
      placeholderLabel: "Ocean Fleet Sea Day Experience",
      image: oceanSeaDayImg
    },
    {
      name: "Expedition Sea Day",
      tagline: "ACTIVE POLAR & WILD EXPLORATION",
      quote: "An expedition sea day revolves around discovery—wildlife alerts, lectures by scientists, photography workshops, and spontaneous Zodiac drops.",
      recommendation: data.lifeOnboardComparison.seaDayTimeline.expedition.activities.join(" • "),
      reason: "Designed for travelers who thrive on natural wonder, science, and spontaneous exploration.",
      whyFits: data.lifeOnboardComparison.seaDayTimeline.expedition.activities,
      placeholderLabel: "Expedition Fleet Sea Day Experience",
      image: expeditionSeaDayImg
    }
  ];

  // ── 7. CardGrid Data (Traveler Style Recommendations) ────────────
  const travelerStyleCards = data.travelerStyleRecommendations.categories.map((cat, idx) => {
    const icons = ["Sparkles", "Compass", "Utensils", "Activity", "Heart", "Star", "Heart", "User", "Users", "Gem"];
    return {
      title: cat.category,
      description: `${cat.verdict} ${cat.description}`,
      bullets: [cat.badge, cat.verdict],
      icon: icons[idx % icons.length]
    };
  });

  // ── 8. GenericChecklistCards Data (Cost & Inclusions) ────────────
  const costAndInclusionCards = [
    {
      title: data.costAndInclusions.cost.title,
      items: [
        data.costAndInclusions.cost.description,
        "Pricing factors include specialized ice hulls, expedition staff-to-guest ratios, and equipment.",
        "Compare individual voyages rather than assuming blanket price rules."
      ]
    },
    {
      title: data.costAndInclusions.inclusions.title,
      items: [
        data.costAndInclusions.inclusions.description,
        ...data.costAndInclusions.inclusions.points,
        data.costAndInclusions.inclusions.footnote
      ]
    },
    {
      title: data.costAndInclusions.middleGround.title,
      items: [
        data.costAndInclusions.middleGround.subtitle,
        data.costAndInclusions.middleGround.description,
        "Enjoy Zodiac excursions and kayaking without booking a full expedition ship."
      ]
    }
  ];

  // ── 9. DualPhilosophyShowcase Data (Which Should You Choose?) ────
  const decisionDualData = {
    title: "Seabourn Ocean vs. Expedition: Which Should You Choose?",
    subtitle: "Start with the destination.",
    sailing: {
      label: "Choose an Ocean Cruise if:",
      philosophy: "CLASSIC DESTINATION LUXURY",
      points: [
        "You want classic luxury cruising",
        "You enjoy major cultural destinations",
        "You want more traditional port experiences",
        "You prioritize dining and relaxation",
        "You enjoy spa and onboard amenities",
        "You prefer a predictable cruise structure",
        "You want a Mediterranean, Caribbean or European itinerary"
      ]
    },
    allSuite: {
      label: "Consider an Expedition Cruise if:",
      philosophy: "REMOTE EXPLORATION & DISCOVERY",
      points: [
        "Antarctica is on your bucket list",
        "You want Arctic exploration",
        "You want remote destinations",
        "Wildlife is a major priority",
        "You enjoy hiking",
        "You want Zodiac exploration",
        "You want kayaking",
        "You enjoy expert-led nature and science programming",
        "You want a more flexible expedition itinerary"
      ]
    }
  };

  // ── 10. Video Component Data ─────────────────────────────────────
  const oceanVsExpeditionVideoData = {
    youtubeId: "yPMZpLaHHpc",
    title: "Seabourn Ocean vs. Expedition Cruises: Expert Comparison",
    description: "Watch luxury travel expert Angela Hughes break down the essential differences between Seabourn's classic ocean yachts and purpose-built polar expedition ships."
  };

  // ── Schema.org JSON-LD Structured Data ───────────────────────────
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "TravelAgency"],
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/logo.png"
        },
        "foundingDate": "1995",
        "founder": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "knowsAbout": [
          "Seabourn Cruises",
          "Seabourn Ocean Cruises",
          "Seabourn Expedition Cruises",
          "Luxury Cruises",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Luxury Expedition Travel",
          "Antarctica Cruises",
          "Arctic Cruises",
          "Alaska Cruises",
          "Luxury Cruise Excursions",
          "Luxury Travel"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "jobTitle": "CEO and Luxury Travel Expert",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "founder": {
          "@type": "Organization",
          "name": "Luxury Travel University",
          "url": "https://luxurytraveluniversity.com/"
        },
        "knowsAbout": [
          "Seabourn Cruises",
          "Luxury Cruises",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Luxury Expedition Travel",
          "Antarctica Cruises",
          "Arctic Cruises",
          "Alaska Cruises",
          "River Cruises",
          "Custom Safaris"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel",
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#webpage",
        "url": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/",
        "name": "Seabourn Ocean Cruises vs. Expedition Cruises: What Is the Difference?",
        "headline": "Seabourn Ocean Cruises vs. Expedition Cruises: What Is the Difference?",
        "description": "Seabourn ocean cruises vs. expedition cruises: compare ships, destinations, activities, excursions, suites, dining, pace, wildlife and which experience is right for you.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Seabourn Ocean and Expedition Cruises"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#article"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#article",
        "headline": "Seabourn Ocean Cruises vs. Expedition Cruises: What Is the Difference?",
        "description": "A comprehensive comparison of Seabourn ocean cruises and expedition cruises, including ships, destinations, activities, excursions, wildlife, suites, dining and travel styles.",
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#webpage"
        },
        "articleSection": "Seabourn Cruises",
        "keywords": data.meta.secondaryKeywords
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#breadcrumb",
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
            "name": "Seabourn Ocean Cruises vs. Expedition Cruises: What Is the Difference?",
            "item": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/#faq",
        "url": "https://www.tripsandships.com/seabourn-cruises/ocean-vs-expedition-cruises/",
        "mainEntity": data.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* ── SEO Metadata & Schema Injection ─────────────────────────── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. Hero Section (ComparisonHero) ────────────────────────── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.leadText}
        backgroundImage={heroImg}
        secondaryCtaText="Explore Seabourn Voyages"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. Editorial Introduction (EditorialIntroSection) ──────── */}
      <div id="content">
        <EditorialIntroSection
          title={data.intro.title}
          paragraphs={data.intro.paragraphs}
          image={editorialImg}
        />
      </div>

      {/* ── 3. Quick Answer Comparison Table (ComparisonTable) ─────── */}
      <div className="bg-slate-50 py-12">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Core Concepts & Exploration Flows (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={data.coreConcepts.title}
        subtitle={data.coreConcepts.subtitle}
        highlights={coreConceptHighlights}
      />

      {/* ── 5. Fleet Architecture Showcase (LuxuryZigZagShowcase) ──── */}
      <LuxuryZigZagShowcase
        title={data.fleetProfiles.title}
        subtitle={data.fleetProfiles.subtitle}
        items={fleetShowcaseItems}
      />

      {/* ── 5b. Core Concepts Deep Dive (OceanVsExpeditionCoreShowcase) ── */}
      <OceanVsExpeditionCoreShowcase
        title="What Is a Seabourn Ocean vs. Expedition Cruise?"
        subtitle="EXPLORING CORE SHIP ATMOSPHERE, DESTINATIONS & FIELD CAPABILITIES"
        items={coreShowcaseItems}
      />

      {/* ── 6. Ship Design Priorities (DetailedInclusionsList) ──────── */}
      <DetailedInclusionsList
        title={shipDesignData.title}
        intro={shipDesignData.intro}
        items={shipDesignData.items}
      />

      {/* ── 7. Destinations & Antarctica (ThreeColumnGrid) ──────────── */}
      <ThreeColumnGrid
        title={data.destinationsExploration.title}
        subtitle={data.destinationsExploration.subtitle}
        items={destinationGridItems}
      />

      {/* ── 8. Destination Matchmaker Table (ComparisonTable) ───────── */}
      <div className="bg-white py-16 border-t border-slate-200">
        <ComparisonTable data={data.destinationMatchmakerTable} />
        {data.destinationMatchmakerTable.footnote && (
          <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500 mt-4 italic">
            {data.destinationMatchmakerTable.footnote}
          </div>
        )}
      </div>

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Deciding Between an Ocean Yacht or Polar Expedition?"
        description="Connect with Angela Hughes and the Trips & Ships team to compare fleet amenities, verify seasonal destination weather, and unlock exclusive Virtuoso benefits."
        buttonText="Compare Seabourn Itineraries"
        buttonLink="/contact"
        image={midCtaImg}
        theme="dark"
      />

      {/* ── 9. Excursions & Activities Dynamics (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={data.excursionsAndActivities.title}
        subtitle={data.excursionsAndActivities.subtitle}
        items={excursionCurvilinearItems}
      />

      {/* ── 9b. Onboard Lifestyle & Atmosphere Nuances (TravelerPersonaCards) ── */}
      <TravelerPersonaCards
        title="Onboard Life, Atmosphere & Operational Nuances"
        subtitle="EXPLORING COMFORT, PACING, DINING & ENTERTAINMENT DIFFERENCES"
        personas={onboardNuancePersonas}
      />

      {/* ── Mid-Page Video Spotlight (Angela Hughes Expert Comparison) ── */}
      <VideoEmbed data={oceanVsExpeditionVideoData} />

      {/* ── 10. Sea Day Progression Timeline (TravelerProfileTabs) ─── */}
      <TravelerProfileTabs
        title={data.lifeOnboardComparison.seaDayTimeline.title}
        subtitle={data.lifeOnboardComparison.seaDayTimeline.subtitle}
        profiles={seaDayProfiles}
      />

      {/* ── 11. Traveler Style Matcher (CardGrid) ──────────────────── */}
      <CardGrid
        title={data.travelerStyleRecommendations.title}
        subtitle={data.travelerStyleRecommendations.subtitle}
        cards={travelerStyleCards}
        columns={3}
      />

      {/* ── 12. Cost, Inclusions & Middle Ground (GenericChecklistCards) ── */}
      <GenericChecklistCards
        title={data.costAndInclusions.title}
        subtitle={data.costAndInclusions.subtitle}
        cards={costAndInclusionCards}
      />

      {/* ── 13. Decision Framework (DualPhilosophyShowcase) ────────── */}
      <DualPhilosophyShowcase
        data={decisionDualData}
        imageSailing={chooseOceanImg}
        imageAllSuite={considerExpeditionImg}
      />

      {/* ── 14. 12 Questions Before Booking (ExpertAuthorityChecklist) ─ */}
      <ExpertAuthorityChecklist
        title={data.questionsBeforeBooking.title}
        subtitle={data.questionsBeforeBooking.subtitle}
        points={data.questionsBeforeBooking.questions}
      />

      {/* ── 15. Advisor Value & Agency Planning Details ─────────────── */}
      <section className="py-20 bg-ice-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-2">
              {data.advisorValue.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-navy-950">
              {data.advisorValue.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-display text-navy-950 mb-4">{data.advisorValue.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{data.advisorValue.description}</p>
              <div className="p-4 bg-ice-50 rounded-xl border border-ice-100 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Ocean vs. Expedition Ship Selection</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Suite Category & Deck Position Analysis</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Excursion Availability & Pre-Cruise Logistics</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-display text-navy-950 mb-4">{data.advisorValue.agency.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{data.advisorValue.agency.description}</p>
              <div className="p-4 bg-ice-50 rounded-xl border border-ice-100 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Comparing All 5 Seabourn Ocean & Expedition Ships</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Matching Voyage Pacing to Your Travel Style</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Exclusive Amenities & Concierge Coordination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 16. Expert Credentials (Angela Hughes) ──────────────────── */}
      <ExpertCredentials
        title={data.advisorValue.author.title}
        name={data.advisorValue.author.name}
        image={AboutImage}
        badge="LUXURY CRUISE & EXPEDITION EXPERT"
        experienceBadge="40+ YEARS EXPERTISE"
        bio={data.advisorValue.author.bio}
        credentials={[
          "Over 4 Decades Designing Luxury & Expedition Cruises",
          "Explored 121+ Countries Across All 7 Continents",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Certified Virtuoso Luxury Travel Advisor & Cruise Specialist",
          "Direct Relationships with Seabourn Fleet Operations & Executives",
          "Specialist in Ocean Yachts, Polar Expeditions & Remote Itineraries"
        ]}
        authorityBoxTitle="Why Plan Your Seabourn Voyage With Angela Hughes?"
        authoritySubtitle="With over four decades of luxury travel mastery, Angela Hughes ensures you choose the ideal ship architecture, suite location, and destination pacing for your personal travel style."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 17. Frequently Asked Questions (FAQAccordion) ──────────── */}
      <div className="bg-slate-50 py-12">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "COMMON QUESTIONS ABOUT SEABOURN OCEAN VS. EXPEDITION CRUISES",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 18. Final Takeaway (ConclusionSection) ─────────────────── */}
      <ConclusionSection
        title={data.finalTakeaway.title}
        paragraphs={data.finalTakeaway.paragraphs}
      />

      {/* ── 19. Center CTA ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
        image={bottomCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default SeabournOceanVsExpedition;
