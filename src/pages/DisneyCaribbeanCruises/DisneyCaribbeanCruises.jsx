import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Users,
  Compass,
  Home,
  Binoculars,
  Waves,
  Globe,
  Ship,
  Anchor,
  Sun,
  Fish,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela2.jpeg";
import { Helmet } from "react-helmet-async";

import HeroImage1 from "../../assets/DisneyCaribbeanCruises/disney-cruise-ship-at-caribbean-island-with-water-sports.jpg";
import HeroImage2 from "../../assets/DisneyCaribbeanCruises/disney-dream-cruise-ship-ocean-voyage-family-cruise-vacation.jpg";
import HeroImage3 from "../../assets/DisneyCaribbeanCruises/disney-wish-palo-steakhouse-adults-only-premium-dining.jpg";
import NightPoint from "../../assets/DisneyCaribbeanCruises/disney-wish-star-wars-hyperspace-lounge-adults-cocktails.jpg";
import DiseyCaribbeanExp1 from "../../assets/DisneyCaribbeanCruises/Disney-Treasure-Periscope-Pub.jpg";
import DiseyCaribbeanExp2 from "../../assets/DisneyCaribbeanCruises/skipper-society-lounge-disney-treasure.jpg";
import DiseyCaribbeanExp3 from "../../assets/DisneyCaribbeanCruises/disney-very-merrytime-cruise-deck-sunset-ocean-view.jpg";
import DiseyCaribbeanExp4 from "../../assets/DisneyCaribbeanCruises/disney-treasure-adults-only-lounge-ocean-view.jpg";
import DiseyCaribbeanExp5 from "../../assets/DisneyCaribbeanCruises/adults-relaxing-at-disney-cruise-pool-bar-with-tropical-drinks.jpg";
import DiseyCaribbeanExp6 from "../../assets/DisneyCaribbeanCruises/disney-wish-cruise-ship-caribbean-family-vacation-at-sea.jpg";
import DiseyCaribbeanExp7 from "../../assets/DisneyCaribbeanCruises/disney-cruise-vibe-teen-club-foosball-youth-activities.jpg";
import DiseyCaribbeanExp8 from "../../assets/DisneyCaribbeanCruises/family-enjoying-ocean-sunset-view-on-disney-cruise-ship-deck.jpg";
import DiseyCaribbeanExp9 from "../../assets/DisneyCaribbeanCruises/kids-enjoying-disney-cruise-deck-family-vacation-at-sea.jpg";
import DiseyCaribbeanSuite from "../../assets/DisneyCaribbeanCruises/disney-cruise-oceanview-stateroom-cabin-with-porthole-room.jpg";
import DiseyCaribbeanDining from "../../assets/DisneyCaribbeanCruises/family-dining-with-ocean-views-on-disney-cruise-ship.jpg";
import DiseyCaribbeanCta from "../../assets/DisneyCaribbeanCruises/disney-wish-the-bayou-lounge-bar-cocktails-cruise-nightlife.jpeg";

import DisneyCastawayCay from "../../assets/DisneyCaribbeanCruises/disney-castaway-cay-private-island-tropical-beachfront-relaxation.jpg";
import BahamasCruises from "../../assets/DisneyCaribbeanCruises/aerial-view-disney-castaway-cay-private-island-bahamas-cruise-destination.jpeg";
import WesternCaribbean from "../../assets/DisneyCaribbeanCruises/best-disney-cruise-caribbean-family-beach-vacation-excursion.jpg";
import southernCaribbean from "../../assets/DisneyCaribbeanCruises/disney-dream-cruise-ship-sailing-at-sunset-caribbean-family-vacation.jpg";

// ─── DESTINATION DATA ────────────────────────────────────────────────────────
const caribbeanDestinations = [
  {
    id: "castaway-cay",
    badge: "Castaway Cay",
    title: "Disney's Castaway Cay",
    image: DisneyCastawayCay,
    icon: Anchor,
    desc: "Disney's private island in the Bahamas is often the undisputed highlight of any Caribbean voyage — designed exclusively for Disney Cruise Line guests and unlike any other private island experience at sea.",
    columns: [
      {
        label: "Island Highlights",
        items: [
          "Family Beaches",
          "Adult-Only Beach",
          "Water Activities",
          "Character Experiences",
          "Private Island Convenience",
        ],
      },
      {
        label: "Popular Activities",
        items: [
          "Swimming & Snorkeling",
          "Biking & Paddle Sports",
          "Meet Disney Characters",
          "Relax on White-Sand Beaches",
        ],
      },
    ],
    themeLabel: "The Crown Jewel of Disney Cruising",
    themeText:
      "Many guests consider Castaway Cay one of the finest private island experiences in all of cruising — a place where Disney magic meets tropical paradise.",
  },
  {
    id: "Bahamas Cruises",
    badge: "Bahamas Cruises",
    title: "Bahamas",
    image: BahamasCruises,
    icon: Ship,
    desc: "Shorter Disney Caribbean itineraries frequently visit the Bahamas.",

    columns: [
      {
        label: "Popular experiences include:",
        items: [
          "Beautiful beaches",
          "Water activities",
          "Shopping",
          "Family excursions",
          "Marine adventures",
        ],
      },
    ],

    themeLabel: "Why Families Love the Bahamas",

    themeText:
      "The Bahamas are particularly popular for first-time cruisers and families seeking shorter vacations.",
  },
  {
    id: "eastern-caribbean",
    badge: "Eastern Caribbean",
    title: "Eastern Caribbean",
    image: HeroImage1,
    icon: Sun,
    desc: "Eastern Caribbean itineraries offer stunning tropical islands, rich history, and incredible natural beauty — a perfect blend of relaxation and exploration for families and multigenerational travelers.",
    columns: [
      {
        label: "Destinations",
        items: [
          "St. Thomas",
          "Tortola",
          "Puerto Rico",
          "Disney Island Destinations",
        ],
      },
      {
        label: "Highlights",
        items: [
          "St. Thomas — Beautiful beaches & scenic views",
          "Tortola — Nature lovers & outdoor adventures",
          "Puerto Rico — History, culture & architecture",
          "Tropical island exploration",
        ],
      },
    ],
    themeLabel: "Relaxation & Exploration",
    themeText:
      "Eastern Caribbean itineraries combine relaxation with discovery, offering families a chance to explore vibrant island cultures alongside stunning natural landscapes.",
  },
  {
    id: "western-caribbean",
    badge: "Western Caribbean",
    title: "Western Caribbean",
    image: WesternCaribbean,
    icon: Globe,
    desc: "Western Caribbean cruises deliver adventure and cultural discovery across some of the region's most iconic destinations — from world-class snorkeling reefs to ancient Maya ruins and vibrant local cultures.",
    columns: [
      {
        label: "Destinations",
        items: ["Cozumel", "Grand Cayman", "Jamaica", "Mexico"],
      },
      {
        label: "Highlights",
        items: [
          "Cozumel — Excellent snorkeling & beach experiences",
          "Grand Cayman — Crystal-clear waters & marine encounters",
          "Jamaica — Beautiful scenery & vibrant culture",
          "Mexico — Historic sites & family-friendly excursions",
        ],
      },
    ],
    themeLabel: "Adventure & Cultural Discovery",
    themeText:
      "Western Caribbean itineraries offer the perfect combination of outdoor adventure, cultural immersion, and breathtaking natural beauty for families of all ages.",
  },
  {
    id: "southern-caribbean",
    badge: "Southern Caribbean",
    title: "Southern Caribbean",
    image: southernCaribbean,
    icon: Waves,
    desc: "Longer Disney Caribbean voyages venture into the Southern Caribbean — home to some of the most spectacular beaches and landscapes in the entire region.",
    columns: [
      {
        label: "Destinations",
        items: ["Aruba", "Curaçao", "Barbados", "St. Lucia", "Antigua"],
      },
      {
        label: "Highlights",
        items: [
          "World-class beach experiences",
          "Vibrant island cultures",
          "Stunning natural scenery",
          "Deeper Caribbean exploration",
        ],
      },
    ],
    themeLabel: "Deeper Caribbean Experience",
    themeText:
      "Southern Caribbean cruises are especially appealing for travelers seeking a richer, more immersive Caribbean experience beyond the typical Bahamas itinerary.",
  },
];

const faqData = [
  {
    q: "Are Disney Caribbean Cruises good for families?",
    a: "Yes. Disney Caribbean Cruises are among the most popular family cruise vacations in the world, combining tropical beauty with Disney's family-focused service and entertainment.",
  },
  {
    q: "What islands do Disney Caribbean Cruises visit?",
    a: "Itineraries vary but may include destinations in The Bahamas, Eastern Caribbean (St. Thomas, Tortola, Puerto Rico), Western Caribbean (Cozumel, Grand Cayman, Jamaica), and Southern Caribbean (Aruba, Curaçao, Barbados, St. Lucia, Antigua).",
  },
  {
    q: "What is Castaway Cay?",
    a: "Castaway Cay is Disney Cruise Line's private island destination in The Bahamas, reserved exclusively for Disney guests. It features family beaches, an adult-only retreat, water activities, and Disney character experiences in a tropical setting.",
  },
  {
    q: "What is Lookout Cay at Lighthouse Point?",
    a: "Disney's newer island destination in The Bahamas that celebrates Bahamian culture, natural beauty, and family experiences — blending Disney hospitality with authentic island traditions.",
  },
  {
    q: "Are Disney Caribbean Cruises good for grandparents?",
    a: "Absolutely. The Caribbean's relaxed atmosphere and Disney's family-focused design make these cruises ideal for multigenerational travel, with activities and pacing that suit every generation.",
  },
  {
    q: "Do Disney Caribbean Cruises have character experiences?",
    a: "Yes. Guests can meet beloved Disney characters throughout the voyage, both onboard the ship and at Castaway Cay and Lookout Cay.",
  },
  {
    q: "What is the best Disney Caribbean itinerary?",
    a: "This depends on your interests. Eastern and Western Caribbean cruises are among the most popular, while Bahamas-focused itineraries are great for families seeking shorter vacations. Southern Caribbean cruises suit travelers seeking a deeper island experience.",
  },
  {
    q: "Are Disney Caribbean Cruises worth the cost?",
    a: "Many families believe Disney's exceptional service, world-class entertainment, private island destinations, and family-focused atmosphere justify the premium pricing.",
  },
  {
    q: "Can grandparents travel with grandchildren on Disney Caribbean Cruises?",
    a: "Yes. Disney Caribbean Cruises are one of the best options for grandparents traveling with grandchildren, thanks to flexible pacing, multigenerational activities, and Disney's talent for uniting generations.",
  },
  {
    q: "What makes Disney different from other Caribbean cruise lines?",
    a: "Disney combines family-focused service, world-class entertainment, private island destinations, and multigenerational appeal in a way few cruise lines can match.",
  },
  {
    q: "What is the best time to take a Disney Caribbean Cruise?",
    a: "The Caribbean offers excellent cruising throughout much of the year. Winter offers a warm-weather escape; spring brings comfortable temperatures and great beach conditions; summer is peak family vacation season; fall often offers lower demand and attractive pricing opportunities.",
  },
  {
    q: "Are there kids' clubs and supervised activities onboard Disney Caribbean Cruises?",
    a: "Yes. Disney Cruise Line offers age-specific youth clubs — including the Oceaneer Club & Lab for younger children and Edge and Vibe for tweens and teens — providing supervised, theme-based programming throughout the voyage.",
  },
  {
    q: "Can I book shore excursions directly through Disney for the Caribbean?",
    a: "Yes. Disney offers a curated selection of shore excursions for each Caribbean port, ranging from snorkeling adventures and beach escapes to dolphin encounters, island tours, and nature experiences. Booking through Disney ensures coordination with the ship's schedule.",
  },
  {
    q: "How long are Disney Caribbean Cruises?",
    a: "Disney Caribbean itineraries vary from short 3–4 night Bahamas cruises to 7-night Eastern and Western Caribbean sailings and longer 10–14 night Southern Caribbean voyages.",
  },
  {
    q: "Do Disney Caribbean Cruises require a passport?",
    a: "Most Disney Caribbean itineraries require a valid passport for US citizens, especially those visiting foreign ports. For closed-loop cruises (departing and returning to the same US port), a passport card or enhanced driver's license may be accepted, but a passport is always recommended.",
  },
];

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
        "Luxury travel agency specializing in Disney cruises, luxury cruises, family travel, multigenerational vacations, Caribbean cruises, and custom travel planning.",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "description": "Luxury travel experts helping families plan Disney Caribbean Cruises, Bahamas voyages, Eastern and Western Caribbean adventures, and multigenerational cruise vacations.",
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
      "@id": "https://www.tripsandships.com/disney-caribbean-cruises",
      url: "https://www.tripsandships.com/disney-caribbean-cruises",
      name: "Disney Caribbean Cruises",
      description:
        "Explore Disney Caribbean Cruises featuring Castaway Cay, Eastern Caribbean, Western Caribbean, and Southern Caribbean itineraries. Discover family-friendly tropical cruise vacations filled with sunshine, adventure, and Disney magic.",
    },

    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/disney-caribbean-cruises#article",
      headline: "Disney Caribbean Cruises",
      description:
        "A comprehensive guide to Disney Caribbean Cruises, including Castaway Cay, Eastern Caribbean, Western Caribbean, Southern Caribbean itineraries, family travel experiences, and multigenerational cruise vacations.",
      author: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      publisher: {
        "@id": "https://www.tripsandships.com/#organization",
      },
      mainEntityOfPage: {
        "@id": "https://www.tripsandships.com/disney-caribbean-cruises",
      },
    },

    {
      "@type": "TouristTrip",
      "@id":
        "https://www.tripsandships.com/disney-caribbean-cruises#touristtrip",
      name: "Disney Caribbean Cruises",
      description:
        "Family-friendly Disney Cruise Line vacations exploring the Caribbean, including Castaway Cay, Eastern Caribbean, Western Caribbean, and Southern Caribbean destinations.",
      touristType: [
        "Families",
        "Multigenerational Travelers",
        "Grandparents and Grandchildren",
        "Disney Fans",
        "First-Time Cruisers",
      ],
      itinerary: [
        { "@type": "Place", name: "Castaway Cay" },
        { "@type": "Place", name: "St. Thomas" },
        { "@type": "Place", name: "Puerto Rico" },
        { "@type": "Place", name: "Cozumel" },
        { "@type": "Place", name: "Grand Cayman" },
        { "@type": "Place", name: "Jamaica" },
        { "@type": "Place", name: "Aruba" },
        { "@type": "Place", name: "Barbados" },
      ],
    },

    {
      "@type": "Product",
      "name": "Disney Caribbean Cruises",
      "description":
        "Disney Caribbean cruises featuring tropical islands, Castaway Cay and Lookout Cay private island stops, family activities, and world-class entertainment.",
      "brand": {
        "@type": "Brand",
        "name": "Disney Cruise Line"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "34",
        "bestRating": "5"
      },
      "review": {
        "@type": "Review",
        "@id": "https://www.tripsandships.com/disney-caribbean-cruises#review",
        "reviewBody":
          "Disney Caribbean Cruises successfully combine iconic tropical destinations with Disney's family-focused service, entertainment, accommodations, private island experiences, and multigenerational appeal.",
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

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/disney-caribbean-cruises#breadcrumb",
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
          name: "Disney Cruises",
          item: "https://www.tripsandships.com/disney-cruise-line-ultimate-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Disney Caribbean Cruises",
          item: "https://www.tripsandships.com/disney-caribbean-cruises",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/disney-caribbean-cruises#faq",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

// ─── FAQ COMPONENT ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
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
const DisneyCaribbeancruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [HeroImage1, HeroImage2, HeroImage3];
  const [activeDest, setActiveDest] = useState("castaway-cay");
  const currentDest =
    caribbeanDestinations.find((d) => d.id === activeDest) ||
    caribbeanDestinations[0];
  const ActiveIcon = currentDest.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Disney Caribbean Cruises | Family Caribbean Cruise Vacations
        </title>
        <meta
          name="title"
          content="Disney Caribbean Cruises for Families & Multigenerational Travel"
        />
        <meta
          name="description"
          content="Discover Disney Caribbean Cruises featuring tropical islands, family-friendly adventures, private island experiences, world-class entertainment, and unforgettable vacations for families, grandparents, and multigenerational travelers."
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
            className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="Scenic_hero_overlay"></div>
        <div className="Scenic_hero_content">
          <h1>
            Set Sail on a <br /> Disney Caribbean Cruise
          </h1>
          <p>
            Few destinations capture the imagination quite like the Caribbean.
          </p>
          <p>
            Crystal-clear turquoise waters, white-sand beaches, tropical
            islands, vibrant cultures, and year-round sunshine make the
            Caribbean one of the world's most popular cruise destinations.
          </p>
          {readMore && (
            <>
              <p>
                Now combine that tropical paradise with the exceptional service,
                entertainment, and family-focused experiences of Disney Cruise
                Line.
              </p>
              <p>
                Disney Caribbean Cruises offer the perfect blend of relaxation,
                adventure, family bonding, and Disney magic — creating
                unforgettable vacations for travelers of all ages.
              </p>
              <p>
                Whether you're planning a family getaway, celebrating a special
                occasion, or organizing a multigenerational vacation with
                grandparents and grandchildren, Disney Caribbean Cruises deliver
                experiences that everyone can enjoy together.
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

      {/* ══ WHY CHOOSE A DISNEY CARIBBEAN CRUISE ════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-why-caribbean">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Family Travel Trends
              </span>
              <h2 className="adg-c-h2 adg-c-h2-light">
                Why Choose a Disney Caribbean Cruise?
              </h2>
              <div className="aac-accent-line aac-accent-white"></div>
              <p className="adg-c-lead adg-c-lead-light">
                The Caribbean is one of Disney Cruise Line's most beloved
                destinations.
              </p>
              <p className="adg-c-body adg-c-body-light">
                Disney transforms a Caribbean vacation into something far more
                memorable than simply visiting beautiful beaches — combining
                tropical paradise with world-class hospitality, entertainment,
                and private island experiences found nowhere else.
              </p>
              <br />
              <p className="adg-c-body adg-c-body-light">
                Disney allows travelers to focus on enjoying the Caribbean
                rather than managing complicated travel logistics.
              </p>
            </div>
            {/* RIGHT */}
            <div className="adg-c-why-right">
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">Guests Enjoy:</span>
                <div className="adg-c-pill-grid">
                  {[
                    "Beautiful Tropical Islands",
                    "Warm Weather Year-Round",
                    "Family-Friendly Beaches",
                    "Disney's Private Island Experiences",
                    "World-Class Entertainment",
                    "Exceptional Service",
                    "Activities for All Ages",
                    "Stress-Free Vacation Planning",
                  ].map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION ════════════════════════════════════════════════════ */}
      <section
        className="azs-video-section"
        id="azs-video-caribbean"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover the Caribbean Through the <br /> Magic of Disney Cruise
              Line
            </h2>
            <div className="azs-accent-line"></div>
            <p className="azs-video-intro">
              Experience the turquoise waters, white-sand beaches, and vibrant
              island cultures of the Caribbean aboard Disney Cruise Line.
            </p>
          </div>
          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/bJ1yCvxmgOY"
                title="Discover the Caribbean Through the Magic of Disney Cruise Line"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
   DISNEY LOOKOUT CAY AT LIGHTHOUSE POINT
═════════════════════════════════════════ */}

      <section className="adg-c-section adg-c-bg-white">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-section-title">
              Disney Lookout Cay at Lighthouse Point
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            {/* LEFT — list */}
            <div className="adg-c-overview-icons">
              {[
                {
                  icon: <Check size={18} />,
                  label: "Bahamian-Inspired Experiences",
                },
                {
                  icon: <Check size={18} />,
                  label: "Family-Friendly Beaches",
                },
                {
                  icon: <Check size={18} />,
                  label: "Cultural Entertainment",
                },
                {
                  icon: <Check size={18} />,
                  label: "Water Recreation",
                },
                {
                  icon: <Check size={18} />,
                  label: "Local Storytelling & Traditions",
                },
              ].map((item, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">{item.icon}</span>
                  <span className="adg-c-overview-label">{item.label}</span>
                </div>
              ))}
            </div>

            {/* RIGHT — callout card + image */}
            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Disney's newest island destination celebrates the culture
                    and natural beauty of The Bahamas while offering
                    unforgettable experiences for guests of all ages.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={NightPoint}
                  alt="Disney Lookout Cay at Lighthouse Point"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Disney Lookout Cay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES THE CARIBBEAN SPECIAL ════════════════════════════════ */}
      <section className="dac-special-section">
        <div className="dac-special-container">
          <div className="dac-special-header">
            <h2 className="dac-special-title">
              What Makes the Caribbean So Popular?
            </h2>
            <div className="dac-special-accent"></div>
            <p className="dac-special-lead">
              The Caribbean offers something for every type of traveler — a
              perfect combination of natural beauty, warm weather, adventure,
              and vibrant island culture all within easy reach.
            </p>
          </div>
          <div className="dac-special-grid">
            {[
              {
                icon: Waves,
                title: "Stunning Beaches",
                desc: "Relax on soft white sand beside crystal-clear waters — some of the most beautiful beaches in the world.",
              },
              {
                icon: Sun,
                title: "Tropical Weather",
                desc: "Warm temperatures make the Caribbean ideal throughout much of the year, perfect for an escape from colder climates.",
              },
              {
                icon: Users,
                title: "Family-Friendly Activities",
                desc: "Perfect for children, parents, and grandparents alike — the Caribbean offers experiences suited to every generation.",
              },
              {
                icon: Fish,
                title: "Water Adventures",
                desc: "Enjoy snorkeling, swimming, kayaking, paddleboarding, and encounters with remarkable Caribbean marine life.",
              },
              {
                icon: Globe,
                title: "Island Culture",
                desc: "Experience unique traditions, cuisine, music, and history across a diverse array of island destinations.",
              },
              {
                icon: Anchor,
                title: "Easy Travel",
                desc: "Cruising allows guests to visit multiple islands while unpacking only once — the ultimate stress-free vacation.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="dac-special-card">
                  <div className="dac-special-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="dac-special-card-title">{item.title}</h3>
                  <p className="dac-special-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ POPULAR DISNEY CARIBBEAN CRUISE DESTINATIONS ════════════════════ */}
      <section
        className="luc-destinations-section"
        id="luc-caribbean-destinations"
      >
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">
              Popular Disney Caribbean Cruise Destinations
            </h2>
            <div className="adg-c-accent-line"></div>
            <p className="luc-destinations-intro">
              Disney Caribbean itineraries vary throughout the year, offering
              opportunities to explore several of the region's most beautiful
              destinations — from exclusive private islands to vibrant tropical
              ports.
            </p>
          </div>
          <div className="luc-dest-layout">
            {/* Sidebar nav */}
            <nav className="luc-dest-nav">
              {caribbeanDestinations.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeDest === item.id;
                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                    onClick={() => setActiveDest(item.id)}
                  >
                    <div className="luc-dest-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>
                    <span className="luc-dest-nav-label">{item.badge}</span>
                    {isActive && <div className="luc-dest-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>
            {/* Detail panel */}
            <div className="luc-dest-panel" key={activeDest}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentDest.image}
                  alt={currentDest.title}
                  className="luc-dest-img"
                />
                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>
                  <span className="luc-dest-img-title">
                    {currentDest.title}
                  </span>
                </div>
              </div>
              <p className="luc-dest-panel-desc">{currentDest.desc}</p>
              <div className="luc-dest-columns">
                {currentDest.columns.map((col, cIdx) => (
                  <div key={cIdx} className="luc-dest-info-col">
                    <span className="luc-dest-info-label">{col.label}</span>
                    <div className="luc-dest-items-grid">
                      {col.items.map((item) => (
                        <div key={item} className="luc-dest-item">
                          <div className="luc-dest-item-dot"></div>
                          <span className="luc-dest-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>
                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentDest.themeLabel}
                  </span>
                  <p className="luc-dest-theme-note-text">
                    {currentDest.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISNEY CARIBBEAN CRUISES FOR FAMILIES ═══════════════════════════ */}
      <section className="dac-families-section">
        <div className="dac-families-container">
          <div className="dac-families-grid">
            {/* Left Content Column */}
            <div className="dac-families-left">
              <h2 className="dac-families-title">
                Disney Caribbean Cruises for Families
              </h2>
              <div className="dac-families-accent"></div>
              <p className="dac-families-lead">
                Disney Cruise Line is designed with families in mind, bringing
                magic and tropical adventure together.
              </p>

              <div className="dac-families-features">
                {[
                  {
                    title: "Shared Adventures",
                    desc: "Spend quality time together while exploring tropical destinations.",
                  },
                  {
                    title: "Activities for Every Age",
                    desc: "Children, teens, parents, and grandparents can all find experiences tailored to their interests.",
                  },
                  {
                    title: "Family Entertainment",
                    desc: "Broadway-quality shows, deck parties, movies, and interactive events.",
                  },
                  {
                    title: "Stress-Free Planning",
                    desc: "Transportation, dining, accommodations, and entertainment are all included in one vacation.",
                  },
                  {
                    title: "Unforgettable Memories",
                    desc: "Many families return year after year because of the memories they create together.",
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
                    src={DiseyCaribbeanExp1}
                    alt="Disney Caribbean Cruise Family Sailing"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Tropical Adventures
                  </div>
                </div>
                <div className="dac-families-img-card dac-families-img-card--secondary">
                  <img
                    src={DiseyCaribbeanExp2}
                    alt="Family enjoying onboard dining and time together"
                    className="dac-families-img"
                  />
                  <div className="dac-families-img-caption">
                    Memorable Family Moments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ONBOARD DISNEY ENTERTAINMENT ════════════════════════════════════ */}
      <section
        className="dac-ent-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-ent-container">
          <div className="dac-ent-grid">
            <div className="dac-ent-left">
              <h2 className="dac-ent-title">Onboard Disney Entertainment</h2>

              <div className="dac-ent-accent"></div>

              <p className="dac-ent-desc">
                Even with beautiful Caribbean destinations waiting at every
                port, Disney continues to deliver world-class onboard
                experiences throughout the voyage.
              </p>

              <div className="dac-ent-badge">
                Entertainment for Every Generation
              </div>
            </div>

            <div className="dac-ent-right">
              {[
                {
                  title: "Broadway-Style Shows",
                  desc: "Award-winning productions featuring spectacular performances, storytelling, music, and stage effects for guests of all ages.",
                },
                {
                  title: "Character Experiences",
                  desc: "Meet beloved Disney characters throughout the voyage and enjoy memorable family photo opportunities onboard and at private island destinations.",
                },
                {
                  title: "Deck Parties",
                  desc: "High-energy celebrations unique to Disney Cruise Line — tropical-themed deck parties that light up the night sky at sea.",
                },
                {
                  title: "Family Activities",
                  desc: "Interactive entertainment, themed events, games, and activities designed to bring families together throughout the voyage.",
                },
                {
                  title: "Youth Clubs",
                  desc: "Industry-leading programs and dedicated spaces for children and teens supervised by Disney's trained counselors.",
                },
              ].map((item, idx) => (
                <div key={idx} className="dac-ent-card">
                  <div className="dac-ent-card-header">
                    <div className="dac-ent-card-num">0{idx + 1}</div>

                    <h3 className="dac-ent-card-title">{item.title}</h3>
                  </div>

                  <p className="dac-ent-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ IMAGE GALLERY ════════════════════════════════════════════════════ */}
      <section
        className="svf-section svf-gallery-section"
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="svf-inner">
          <div className="svf-gallery-header">
            <h2 className="svf-h2" style={{ textAlign: "center" }}>
              The Caribbean's Greatest Moments, <br /> Experienced Through
              Disney
            </h2>
            <div className="svf-bar" style={{ margin: "20px auto 0" }}></div>
            <p
              className="svf-p"
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              From the pristine beaches of Castaway Cay and turquoise reefs of
              the Eastern Caribbean to the vibrant culture of Jamaica and the
              spectacular landscapes of the Southern Caribbean — Disney
              Caribbean Cruises deliver the region's most iconic experiences
              wrapped in unmatched family-focused service.
            </p>
          </div>
          <div className="svf-gallery-grid">
            <div className="svf-gallery-item svf-gallery-item--large">
              <div className="svf-gallery-image-wrap">
                <img
                  src={DiseyCaribbeanExp3}
                  alt="Disney Very Merrytime Cruise deck at sunset overlooking the ocean"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Very Merrytime Cruise
                    </span>
                    <h3>Celebrate the Holidays at Sea</h3>
                    <p>
                      Experience Disney's Very Merrytime Cruise as festive
                      décor, seasonal entertainment, and breathtaking ocean
                      sunsets create a magical Caribbean vacation unlike any
                      other.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  src={DiseyCaribbeanExp4}
                  alt="Disney Treasure adults-only lounge with panoramic ocean views"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Adults-Only Retreat
                    </span>
                    <h3>Relax in Sophisticated Oceanfront Lounges</h3>
                    <p>
                      Escape to elegant adults-only spaces aboard Disney
                      Treasure, where handcrafted cocktails, comfortable
                      seating, and panoramic sea views offer the perfect place
                      to unwind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item">
              <div className="svf-gallery-image-wrap">
                <img
                  src={DiseyCaribbeanExp5}
                  alt="Adults enjoying tropical drinks at a Disney Cruise pool bar"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">
                      Poolside Relaxation
                    </span>
                    <h3>Tropical Drinks and Caribbean Vibes</h3>
                    <p>
                      Sip refreshing tropical beverages beside the pool while
                      soaking up the sunshine and enjoying the laid-back
                      atmosphere of your Disney Caribbean Cruise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="svf-gallery-item svf-gallery-item--wide">
              <div className="svf-gallery-image-wrap">
                <img
                  src={DiseyCaribbeanExp6}
                  alt="Disney Wish cruise ship sailing through the Caribbean with families onboard"
                  className="svf-gallery-image"
                />
                <div className="svf-gallery-overlay">
                  <div className="svf-gallery-content">
                    <span className="svf-gallery-badge">Disney Wish</span>
                    <h3>The Ultimate Caribbean Family Vacation</h3>
                    <p>
                      Set sail aboard Disney Wish and enjoy world-class
                      entertainment, imaginative dining, spacious
                      accommodations, and unforgettable adventures designed for
                      every member of the family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ BEST TIME TO CRUISE ══════════════════════════════════════════════ */}
      <section
        className="dac-timing-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="dac-timing-container">
          <div className="dac-timing-header">
            <h2 className="dac-timing-title">
              Best Time to Take a Disney Caribbean Cruise
            </h2>

            <div className="dac-timing-accent"></div>

            <p className="dac-timing-lead">
              The Caribbean offers excellent cruising throughout much of the
              year. Each season offers unique benefits depending on your travel
              goals.
            </p>
          </div>

          <div className="dac-timing-grid">
            {[
              {
                month: "Winter",
                items: [
                  {
                    label: "Warm Weather Escape",
                    desc: "Enjoy sunny tropical destinations while escaping colder winter climates.",
                  },
                  {
                    label: "Popular Holiday Season",
                    desc: "A favorite time for families celebrating holidays and special occasions together.",
                  },
                ],
              },
              {
                month: "Spring",
                items: [
                  {
                    label: "Comfortable Temperatures",
                    desc: "Pleasant weather ideal for sightseeing, beach days, and outdoor activities.",
                  },
                  {
                    label: "Excellent Beach Conditions",
                    desc: "Calm waters and beautiful beaches make spring a popular travel season.",
                  },
                ],
              },
              {
                month: "Summer",
                items: [
                  {
                    label: "Family Vacation Season",
                    desc: "School holidays make summer one of the busiest and most popular cruise periods.",
                  },
                  {
                    label: "Warm Tropical Weather",
                    desc: "Enjoy sunshine, warm seas, and classic Caribbean vacation conditions.",
                  },
                ],
              },
              {
                month: "Fall",
                items: [
                  {
                    label: "Lower Demand Periods",
                    desc: "Often fewer crowds compared to peak travel seasons.",
                  },
                  {
                    label: "Attractive Pricing Opportunities",
                    desc: "Travelers may find excellent value and promotional offers during the fall months.",
                  },
                ],
              },
            ].map((seasonItem, idx) => (
              <div key={idx} className="dac-timing-card">
                <div className="dac-timing-month-header">
                  <span className="dac-timing-month-name">
                    {seasonItem.month}
                  </span>
                </div>

                <div className="dac-timing-card-body">
                  <ul className="dac-timing-list">
                    {seasonItem.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="dac-timing-list-item">
                        <div className="dac-timing-item-bullet"></div>

                        <div className="dac-timing-item-texts">
                          <span className="dac-timing-item-label">
                            {item.label}
                          </span>

                          <span className="dac-timing-item-desc">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ACCOMMODATIONS ═══════════════════════════════════════════════════ */}
      <section
        className="dmg-info-section dmg-bg-soft"
        id="dmg-accommodations-caribbean"
      >
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">
                Accommodations Designed for Families
              </h2>
              <div className="dmg-info-accent"></div>
              <p className="dmg-info-lead">
                Disney staterooms remain among the most family-friendly at sea.
              </p>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Split Bathrooms",
                    desc: "A favorite convenience for families sharing staterooms.",
                  },
                  {
                    title: "Connecting Cabins",
                    desc: "Perfect for larger groups and multigenerational families.",
                  },
                  {
                    title: "Family Suites",
                    desc: "Ideal for multigenerational travel with more space and privacy.",
                  },
                  {
                    title: "Concierge Accommodations",
                    desc: "Premium service and exclusive benefits for the ultimate Disney experience.",
                  },
                ].map((feat, i) => (
                  <div key={i} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>
                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{feat.title}</h3>
                      <p className="dmg-info-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="dmg-info-lead" style={{ marginTop: "24px" }}>
                Disney's thoughtful cabin designs help make Caribbean travel
                more comfortable and convenient for families of every size.
              </p>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={DiseyCaribbeanSuite}
                  alt="Disney Caribbean Cruise family stateroom accommodations"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>
                <div className="dmg-media-badge">
                  <span>Family-Friendly Staterooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DINING ═══════════════════════════════════════════════════════════ */}
      <section className="dmg-info-section dmg-bg-white dmg-info-reverse">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <div className="dmg-info-header">
                <h2 className="dmg-info-title">
                  Dining on a Disney Caribbean Cruise
                </h2>
                <div className="dmg-info-accent"></div>
                <p className="dmg-info-lead">
                  Dining is a major highlight of every Disney voyage.
                </p>
              </div>
              <div className="dmg-info-features">
                {[
                  {
                    title: "Rotational Dining",
                    desc: "Experience multiple themed restaurants throughout the cruise.",
                  },
                  {
                    title: "Family-Friendly Menus",
                    desc: "Options for all ages, preferences, and dietary needs.",
                  },
                  {
                    title: "Tropical Flavors",
                    desc: "Regional influences and Caribbean-inspired dishes featured throughout the voyage.",
                  },
                  {
                    title: "Specialty Dining",
                    desc: "Elevated dining experiences for adults seeking something extra special.",
                  },
                  {
                    title: "Exceptional Service",
                    desc: "Disney's dining teams consistently earn high praise from guests worldwide.",
                  },
                ].map((feat, i) => (
                  <div key={i} className="dmg-info-feature-item">
                    <div className="dmg-info-icon-box">
                      <Check size={16} />
                    </div>
                    <div className="dmg-info-feature-texts">
                      <h3 className="dmg-info-feature-title">{feat.title}</h3>
                      <p className="dmg-info-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={DiseyCaribbeanDining}
                  alt="Dining on a Disney Caribbean Cruise"
                  className="dmg-media-img"
                />
                <div className="dmg-media-overlay"></div>
                <div className="dmg-media-badge">
                  <span>Disney Dining Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GRANDPARENTS & GRANDCHILDREN ════════════════════════════════════ */}
      <section className="luc-why-section" id="luc-why-caribbean">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                src={DiseyCaribbeanExp7}
                alt="Grandparents and grandchildren enjoying a Disney Caribbean Cruise together"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>
            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                src={DiseyCaribbeanExp8}
                alt="Disney Caribbean multigenerational family vacation"
                className="luc-why-img-accent"
              />
              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">4</span>
                <span className="luc-why-badge-text">Key Benefits</span>
              </div>
            </div>
          </div>
          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Disney Caribbean Cruises for Grandparents &amp; Grandchildren
            </h2>
            <div className="aac-accent-line aac-accent-white"></div>
            <p className="luc-why-intro">
              The Caribbean is one of the best destinations for
              multigenerational travel.
            </p>
            <p className="luc-why-intro">
              Grandparents choose Disney Caribbean Cruises because they combine:
            </p>
            <div className="luc-why-features">
              {[
                {
                  num: "01",
                  title: "Easy Travel Logistics",
                  desc: "No constant packing or hotel changes — unpack once and let the ship carry you between beautiful tropical destinations.",
                },
                {
                  num: "02",
                  title: "Family Bonding Opportunities",
                  desc: "Plenty of activities designed for shared experiences across every generation, from the beach to Broadway-style shows.",
                },
                {
                  num: "03",
                  title: "Relaxation and Recreation",
                  desc: "Everyone can enjoy the vacation at their own pace — quiet beach time, poolside relaxation, or island adventures.",
                },
                {
                  num: "04",
                  title: "Meaningful Experiences",
                  desc: "Disney excels at helping multiple generations enjoy the same vacation — creating lifelong memories and meaningful family connections.",
                },
              ].map((feat, i) => (
                <div key={i} className="luc-why-feature">
                  <div className="luc-why-feature-num">{feat.num}</div>
                  <div className="luc-why-feature-body">
                    <h3 className="luc-why-feature-title">{feat.title}</h3>
                    <p className="luc-why-feature-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHORE EXCURSIONS ═════════════════════════════════════════════════ */}
      <section className="ugt-advantage-section">
        <div className="ugt-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Disney Caribbean Excursions
            </span>
            <h2 className="ugt-advantage-title">Caribbean Shore Excursions</h2>
            <div className="Asc-accent-line"></div>
            <p className="ugt-advantage-intro">
              Disney offers a wide variety of excursions across the Caribbean —
              every destination provides opportunities for both adventure and
              relaxation for families of all ages.
            </p>
          </div>
          <div className="ugt-advantage-grid">
            {[
              {
                icon: Fish,
                title: "Snorkeling Adventures",
                desc: "Explore colorful coral reefs and vibrant marine life in some of the Caribbean's most spectacular underwater environments.",
              },
              {
                icon: Waves,
                title: "Beach Escapes",
                desc: "Relax at some of the Caribbean's most beautiful beaches — from Castaway Cay's pristine sands to world-famous tropical shores.",
              },
              {
                icon: Anchor,
                title: "Dolphin Encounters",
                desc: "A beloved family activity available across several Caribbean destinations — unforgettable for children and adults alike.",
              },
              {
                icon: Globe,
                title: "Island Tours",
                desc: "Discover local culture, history, and traditions across a diverse collection of Caribbean islands.",
              },
              {
                icon: Waves,
                title: "Water Sports",
                desc: "Kayaking, paddleboarding, jet skiing, and other aquatic adventures for the whole family.",
              },
              {
                icon: Binoculars,
                title: "Nature Experiences",
                desc: "Explore tropical ecosystems, wildlife, and natural wonders unique to the Caribbean region.",
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

      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Onboard Disney Entertainment</h2>

            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover the incredible entertainment that makes Disney Alaska
              Cruises so memorable. From Broadway-style productions and live
              performances to character experiences and family activities,
              Disney delivers world-class entertainment for guests of all ages
              throughout the voyage.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/rBKx28xA11Y"
                title="Onboard Disney Entertainment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IS IT WORTH IT ═══════════════════════════════════════════════════ */}
      <section className="adg-section" id="adg-worth-it-caribbean">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is a Disney Caribbean Cruise Worth It?</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={DiseyCaribbeanExp9}
                alt="Disney Caribbean Cruise family experience"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">Family Travel Value</span>
                </div>
                <p className="adg-card-lead">For many families, absolutely.</p>
                <div className="adg-card-divider"></div>
                <p className="adg-card-subtext">
                  Disney Caribbean Cruises often carry premium pricing compared
                  to some mainstream cruise lines.
                </p>
                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  For travelers seeking both Caribbean beauty and premium family
                  experiences, Disney offers a compelling and highly-valued
                  combination.
                </p>
              </div>
            </div>
            <div className="adg-list-side">
              {[
                { title: "Disney Service", icon: <Check size={20} /> },
                {
                  title: "Exceptional Entertainment",
                  icon: <Check size={20} />,
                },
                {
                  title: "Family-Focused Experiences",
                  icon: <Star size={20} />,
                },
                {
                  title: "Private Island Destinations",
                  icon: <Anchor size={20} />,
                },
                {
                  title: "Multigenerational Appeal",
                  icon: <Users size={20} />,
                },
                {
                  title: "Comfortable Accommodations",
                  icon: <Home size={20} />,
                },
                {
                  title: "Stress-Free Vacation Planning",
                  icon: <Compass size={20} />,
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

      {/* ══ WHO SHOULD CHOOSE ════════════════════════════════════════════════ */}
      <section className="Asc-section Asc-bg-white">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-section-title">
              Who Should Choose a Disney Caribbean Cruise?
            </h2>
            <div className="Asc-accent-line"></div>
          </div>
          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Perfect For</h3>
              <ul className="Asc-who-list">
                {[
                  "Families with Children",
                  "Grandparents and Grandchildren",
                  "Multi-Generational Groups",
                  "First-Time Cruisers",
                  "Disney Fans",
                  "Celebration Vacations",
                  "Travelers Seeking Stress-Free Family Travel",
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
                  "Adults Seeking Adults-Only Cruises",
                  "Budget-Focused Travelers",
                  "Expedition Travelers",
                  "Guests Seeking Ultra-Luxury Cruising",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>

            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
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

            {/* RIGHT SIDE */}
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
      <section className="Asc-section Asc-bg-white" id="Asc-faq-caribbean">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about Disney Caribbean Cruises.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ══ FINAL THOUGHTS / CTA ══════════════════════════════════════════════ */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={DiseyCaribbeanCta}
            alt="Disney Caribbean Cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>
        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Caribbean Cruises
                </span>
                <h2 className="Asc-help-h2">Final Thoughts</h2>
                <div className="Asc-help-accent"></div>
              </div>
              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    A Disney Caribbean Cruise combines the best of two worlds:
                  </p>
                  <p className="Asc-help-intro">
                    <strong>
                      The beauty of the Caribbean with the exceptional service,
                      entertainment, and family-focused experience of Disney
                      Cruise Line.
                    </strong>
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
                      From relaxing on tropical beaches and exploring vibrant
                      islands to enjoying Broadway-style entertainment and
                      creating family memories that last a lifetime, Disney
                      delivers a vacation experience designed for every
                      generation.
                      <br />
                      <br />
                      Whether you're traveling with young children, celebrating
                      with grandparents, or gathering the entire family for a
                      special getaway, Disney Caribbean Cruises offer a seamless
                      blend of adventure, relaxation, and family connection.
                      <br />
                      <br />
                      Because the best Caribbean vacations aren't just about
                      where you go.
                      <br />
                      <br />
                      <strong>
                        They're about sharing the journey with the people who
                        matter most.
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
                      Plan Your Disney Caribbean Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Why Families Choose Disney for the Caribbean:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Caribbean Exploration",
                      "Family Entertainment",
                      "Private Island Experiences",
                      "Exceptional Service",
                      "Multigenerational Appeal",
                      "Comfortable Accommodations",
                      "Stress-Free Travel Planning",
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
                      Contact Trips &amp; Ships Luxury Travel today to begin
                      planning your Disney Caribbean adventure.
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

export default DisneyCaribbeancruises;
