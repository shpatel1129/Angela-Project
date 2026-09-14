import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Award } from 'lucide-react';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import GrandBentoFeatures from '@/components/ui/GrandBentoFeatures';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import VideoEmbed from '@/components/ui/VideoEmbed';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Assets
import AboutImage from "../../assets/AboutAngela2.jpeg";
import HeroImage1 from "../../assets/DisneyCruiseLineVacations/disney-castaway-cay-private-island-aerial-drone-view-cruise-ship.jpg";
import HeroImage2 from "../../assets/DisneyCruiseLineVacations/disney-cruise-line-vacation-packages-special-offers.jpg";
import HeroImage3 from "../../assets/DisneyCruiseLineVacations/disney-wish-palo-steakhouse-adults-only-premium-dining.jpg";
import FamilyVaction from "../../assets/DisneyCruiseLineVacations/disney-wish-sarabi-lounge-family-entertainment-venue-stage.jpg";

import DisneyDiningOverview from "../../assets/DisneyCruiseLineVacations/disney-wish-oceaneer-club-kids-space-interactive-slide.jpg";
import DisneyStateroomExp from "../../assets/DisneyCruiseLineVacations/disney-wish-deluxe-oceanview-stateroom-porthole-cabin-layout.jpg";
import DisneyEntertainmentSpotlight from "../../assets/DisneyCruiseLineVacations/disney-wish-grand-hall-atrium-cinderella-character-meet-greet.jpg";
import DisneyAgeActivities from "../../assets/DisneyCruiseLineVacations/disney-cruise-character-walk-donald-duck-promenade-deck.jpg";
import GrandparentsDisneyCruise from "../../assets/DisneyCruiseLineVacations/family-dining-with-ocean-views-on-disney-cruise-ship.jpg";
import MultigenerationalDisneyCruise from "../../assets/DisneyCruiseLineVacations/guests-enjoying-cocktails-at-cruise-ship-nightlife-bar.jpg";
import DisneyCruiseLineExp1 from "../../assets/DisneyCruiseLineVacations/disney-wish-oceaneer-club-mickey-minnie-captains-deck-kids.jpg";
import DisneyCruiseLineExp2 from "../../assets/DisneyCruiseLineVacations/guests-relaxing-on-luxury-cruise-veranda-deck.jpg";
import DisneyCruiseLineExp3 from "../../assets/DisneyCruiseLineVacations/disney-wish-palo-steakhouse-adults-only-fine-dining-table.jpg";
import DisneyCruiseLineExp4 from "../../assets/DisneyCruiseLineVacations/disney-wish-pool-deck-and-aquamouse-attraction.jpg";
import DisneyCruiseLineExp5 from "../../assets/DisneyCruiseLineVacations/guest-riding-aquamouse-water-slide-on-disney-cruise.jpg";
import DisneyCruiseLineExp6 from "../../assets/DisneyCruiseLineVacations/romantic-couple-cruise-ship-cocktails-adult-vacation-onboard-experience.jpg";
import DisneyCruiseLineExp7 from "../../assets/DisneyCruiseLineVacations/kids-enjoying-disney-cruise-deck-family-vacation-at-sea.jpg";

import Alaska from "../../assets/IsDisneyCruiseReallyForKids/disney-wonder-alaska-glacier-cruise-scenic-inside-passage-adventure.jpeg";
import Bahamas from "../../assets/IsDisneyCruiseReallyForKids/aerial-view-disney-cruise-line-castaway-cay-private-island-bahamas-family-beach.jpg";
import Caribbean from "../../assets/DisneyCruiseLineVacations/disney-cruise-ship-at-caribbean-island-with-water-sports.jpg";
import NorthEurope from "../../assets/IsDisneyCruiseReallyForKids/disney-cruise-line-ship-at-bahamas-island-port-ocean-view.jpg";
import Florida from "../../assets/DisneyCruiseLineVacations/disney-cruise-ship-docked-at-castaway-cay-aerial-view.jpg";
import CTAImage from "../../assets/IsDisneyCruiseReallyForKids/disney-dream-cruise-ship-aerial-ocean-crossing-family-cruise-vacation.jpg";

const DisneyCruiseLineVacations = () => {

  // Map exact images to the Fleet Overview items
  const fleetOverviewItems = pageData.fleetOverview.items.map((item, idx) => {
    const imgList = [
      DisneyCruiseLineExp4,
      Alaska,
      CTAImage,
      Bahamas,
      HeroImage1,
      HeroImage2
    ];
    return {
      ...item,
      image: imgList[idx] || null
    };
  });

  // Map exact images to the Cabin Innovations section
  const cabinInnovationItems = pageData.cabinInnovations.features.map((item, idx) => {
    const imgList = [DisneyStateroomExp, DisneyCruiseLineExp2, DisneyCruiseLineExp3];
    return {
      ...item,
      image: imgList[idx] || null,
      placeholderLabel: item.title
    };
  });

  // Map exact images to Dining & Inclusions
  const diningInclusionItems = pageData.diningAndInclusions.items.map((item, idx) => {
    const imgList = [DisneyDiningOverview, FamilyVaction, DisneyCruiseLineExp3];
    return {
      ...item,
      image: imgList[idx] || null
    };
  });

  const whyChooseBlends = [
    "Disney Storytelling Woven Into Every Voyage",
    "Exceptional Service & Guest Satisfaction",
    "Family-Focused Ship Design",
    "Premium Cruise Experience",
    "Exclusive Private Island Destinations"
  ];

  // Destination Hub grid data
  const destinationHubItems = [
    {
      title: "Disney Caribbean Cruises",
      category: "Caribbean",
      description: "The Caribbean remains Disney's most popular cruise region, featuring white-sand beaches and tropical family-friendly excursions.",
      image: Caribbean,
      actionLabel: "Explore Caribbean Cruises",
      links: [
        { label: "Disney Caribbean Cruises Guide", url: "/disney-caribbean-cruises" },
        { label: "What is Included on a Disney Cruise", url: "/what-is-included-on-a-disney-cruise" }
      ],
      mainUrl: "/disney-caribbean-cruises"
    },
    {
      title: "Disney Bahamas Cruises",
      category: "Bahamas",
      description: "Perfect for first-time cruisers and shorter vacations, featuring relaxing beach days on Disney's private island.",
      image: Bahamas,
      actionLabel: "Explore Bahamas Cruises",
      links: [
        { label: "Disney Bahamas Cruises Guide", url: "/disney-bahamas-cruises" },
        { label: "Castaway Cay vs Lookout Cay", url: "/castaway-cay-vs-lookout-cay" }
      ],
      mainUrl: "/disney-bahamas-cruises"
    },
    {
      title: "Disney Alaska Cruises",
      category: "Alaska",
      description: "One of Disney's most unique vacation experiences, sailing through glaciers and scenic Inside Passage wilderness.",
      image: Alaska,
      actionLabel: "Explore Alaska Cruises",
      links: [
        { label: "Disney Alaska Cruises Overview", url: "/disney-alaska-cruises" },
        { label: "Disney Alaska vs Princess Cruises", url: "/disney-alaska-vs-princess-cruises" },
        { label: "Disney Alaska vs Holland America", url: "/disney-alaska-vs-holland-america" }
      ],
      mainUrl: "/disney-alaska-cruises"
    },
    {
      title: "Disney Europe Cruises",
      category: "Europe",
      description: "Disney brings its signature experience to some of Europe's most iconic destinations, combining history and magic.",
      image: NorthEurope,
      actionLabel: "Explore Europe Cruises",
      links: [
        { label: "Disney Europe Cruises Guide", url: "/disney-europe-cruises" }
      ],
      mainUrl: "/disney-europe-cruises"
    },
    {
      title: "Disney Cruises from Florida",
      category: "Florida Departures",
      description: "Florida serves as Disney Cruise Line's primary departure region with convenient sailings from Port Canaveral, Fort Lauderdale, and Miami.",
      image: Florida,
      actionLabel: "Explore Florida Departures",
      links: [
        { label: "Disney Cruises From Florida", url: "/disney-cruises-from-florida" },
        { label: "Disney Cruises From Port Canaveral", url: "/disney-cruises-from-port-canaveral" }
      ],
      mainUrl: "/disney-cruises-from-florida"
    }
  ];

  // Private Island Venues mapped to ThreeColumnGrid items
  const privateIslandItems = [
    {
      title: "Beautiful Beaches",
      description: "Powder-Soft Sand, Crystal-Clear Water, Private Cabanas, and Scenic Ocean Views. Disney's private islands offer some of the most picturesque beach settings.",
      image: Bahamas,
      placeholderLabel: "Beautiful Beaches"
    },
    {
      title: "Family Activities",
      description: "Guests enjoy a full day of beach games, water sports, snorkeling, and family shore excursions in a private, exclusive setting.",
      image: FamilyVaction,
      placeholderLabel: "Family Activities"
    },
    {
      title: "Adult Areas",
      description: "Dedicated adult areas (Serenity Bay, adult-only bars, and cabanas) provide a peaceful retreat away from the family beach zones.",
      image: HeroImage3,
      placeholderLabel: "Adult Areas"
    },
    {
      title: "Included Amenities",
      description: "Many island experiences (beach access, buffet BBQ lunch, recreational equipment, and tram transportation) are included as part of your fare.",
      image: Florida,
      placeholderLabel: "Included Amenities"
    }
  ];

  // Onboard experience spotlights mapped to HighlightsSplit items
  const spotlightItems = [
    {
      title: "Entertainment at Sea",
      description: "Disney Cruise Line is known for delivering some of the best entertainment in the cruise industry. Enjoy Broadway-style productions, character meet-and-greets, deck parties, and first-run Disney movies onboard.",
      image: DisneyEntertainmentSpotlight
    },
    {
      title: "Activities for Every Age",
      description: "Disney excels at creating experiences tailored perfectly for every generation. Dedicated youth spaces (Oceaneer Club) and teen lounges balance with sophisticated adult-only quiet pools and lounges.",
      image: DisneyAgeActivities
    }
  ];

  // Multigenerational features mapped to ThreeColumnGrid items
  const multigenerationalItems = [
    {
      title: "Activities for Every Age",
      description: "Dedicated spaces and programming ensure every generation has something to enjoy, balancing separate play and relaxation.",
      image: DisneyCruiseLineExp7,
      placeholderLabel: "Activities for Every Age"
    },
    {
      title: "Shared Family Experiences",
      description: "Families create lasting memories together while exploring new destinations, attending deck shows, and watching movies.",
      image: DisneyCruiseLineExp1,
      placeholderLabel: "Shared Family Experiences"
    },
    {
      title: "Rotational Dining Variety",
      description: "Unique rotational dining and family-friendly menus give every generation options they'll enjoy without dining stress.",
      image: GrandparentsDisneyCruise,
      placeholderLabel: "Rotational Dining Variety"
    },
    {
      title: "Spacious Accommodations",
      description: "Family-oriented staterooms with split bathrooms make traveling together comfortable, no matter how many generations are along.",
      image: MultigenerationalDisneyCruise,
      placeholderLabel: "Spacious Accommodations"
    }
  ];

  // Disney Curated Guides Hub mapping the 29 Disney pages/routes from CruiseBrandsTabs
  const disneyCuratedGuides = [
    {
      title: "Disney Cruise Comparisons",
      category: "Comparisons",
      description: "Compare Disney Cruise Line with Viking, Royal Caribbean, Celebrity, and Holland America to find the right family fit.",
      image: DisneyCruiseLineExp6,
      badgeCount: 5,
      links: [
        { label: "Disney vs Viking Ocean", url: "/disney-cruise-vs-viking-ocean-cruises" },
        { label: "Disney vs Royal Caribbean", url: "/disney-cruise-vs-royal-caribbean" },
        { label: "Disney vs Celebrity Cruises", url: "/disney-cruise-vs-celebrity-cruises" },
        { label: "Disney Alaska vs Princess Cruises", url: "/disney-alaska-vs-princess-cruises" },
        { label: "Disney Alaska vs Holland America", url: "/disney-alaska-vs-holland-america" }
      ],
      mainUrl: "/disney-cruise-vs-viking-ocean-cruises"
    },
    {
      title: "Planning & Booking Strategies",
      category: "Planning",
      description: "Find out why Disney cruises carry premium pricing, how to select your stateroom, and when to book.",
      image: DisneyStateroomExp,
      badgeCount: 5,
      links: [
        { label: "Why Are Disney Cruises So Expensive?", url: "/why-are-disney-cruises-so-expensive" },
        { label: "Is a Disney Cruise Worth the Money?", url: "/is-disney-cruise-line-worth-the-money" },
        { label: "Disney Cruise Booking Timeline", url: "/disney-cruise-booking-timeline" },
        { label: "Best Disney Cruise Cabins", url: "/best-disney-cruise-cabins" },
        { label: "Disney Cruise Packing List", url: "/disney-cruise-packing-list" }
      ],
      mainUrl: "/is-disney-cruise-line-worth-the-money"
    },
    {
      title: "Ships & Onboard Experience",
      category: "Ships",
      description: "Detailed reviews of rotational dining, kids clubs, teen lounges, and family entertainment venues.",
      image: DisneyCruiseLineExp3,
      badgeCount: 4,
      links: [
        { label: "Best Disney Ship for Families", url: "/best-disney-cruise-ship-for-families" },
        { label: "Disney Wish vs Disney Treasure", url: "/disney-wish-vs-disney-treasure" },
        { label: "Disney Cruise Dining Guide", url: "/disney-cruise-dining-guide" },
        { label: "What Is Included on a Disney Cruise", url: "/what-is-included-on-a-disney-cruise" }
      ],
      mainUrl: "/best-disney-cruise-ship-for-families"
    },
    {
      title: "Adults & Luxury Concierge",
      category: "Luxury",
      description: "Discover adult-only pool decks, Palo and Remy premium dining, and VIP concierge benefits.",
      image: HeroImage3,
      badgeCount: 5,
      links: [
        { label: "Disney Concierge: Is It Worth It?", url: "/is-disney-concierge-worth-it" },
        { label: "Disney Concierge Benefits Explained", url: "/disney-concierge-benefits-explained" },
        { label: "Disney Cruise for Adults Without Kids", url: "/disney-cruise-for-adults-without-kids" },
        { label: "Best Disney Cruise Ship for Adults", url: "/best-disney-cruise-ship-for-adults" },
        { label: "Disney Luxury Cruise Misconceptions", url: "/what-luxury-travelers-get-wrong-about-disney-cruise-line" }
      ],
      mainUrl: "/is-disney-concierge-worth-it"
    },
    {
      title: "Private Islands & Global Itineraries",
      category: "Destinations",
      description: "Sailing itineraries covering Bahamian beaches, Castaway Cay, Europe, and the Inside Passage of Alaska.",
      image: Bahamas,
      badgeCount: 5,
      links: [
        { label: "Castaway Cay vs Lookout Cay", url: "/castaway-cay-vs-lookout-cay" },
        { label: "Disney Alaska Cruises Overview", url: "/disney-alaska-cruises" },
        { label: "Disney Europe Cruises Guide", url: "/disney-europe-cruises" },
        { label: "Disney Cruises From Florida", url: "/disney-cruises-from-florida" },
        { label: "Disney Cruises From Port Canaveral", url: "/disney-cruises-from-port-canaveral" }
      ],
      mainUrl: "/disney-caribbean-cruises"
    }
  ];

  const faqData = {
    title: pageData.faqs.title,
    questions: pageData.faqs.items.map(faq => faq.question),
    answers: pageData.faqs.items.map(faq => faq.answer)
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "logo": "https://www.tripsandships.com/logo.png",
        "description": "Luxury travel agency specializing in luxury cruises, family travel, river cruises, expedition cruises, and custom travel planning."
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel experts helping families, couples, and multigenerational groups plan unforgettable Disney Cruise Line vacations.",
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
        "@id": "https://www.tripsandships.com/disney-cruise-line-vacations",
        "url": "https://www.tripsandships.com/disney-cruise-line-vacations",
        "name": "Disney Cruise Line Vacations | Family, Luxury & Adventure at Sea",
        "description": "Discover Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, Alaska adventures, European cruises, and unforgettable Disney magic at sea.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": [
          {
            "@type": "Organization",
            "name": "Disney Cruise Line"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com"
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
            "name": "Disney Cruise Line Vacations",
            "item": "https://www.tripsandships.com/disney-cruise-line-vacations"
          }
        ]
      },
      {
        "@type": "Trip",
        "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#trip",
        "name": "Disney Cruise Line Vacations",
        "description": "Family, luxury, and adventure at sea aboard Disney Cruise Line, sailing to the Caribbean, Bahamas, Alaska, and Europe.",
        "provider": {
          "@type": "Organization",
          "name": "Disney Cruise Line"
        }
      },
      {
        "@type": "Cruise",
        "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#cruise",
        "name": "Disney Cruise Line Vacations",
        "description": "Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, Alaska adventures, and European cruises.",
        "provider": {
          "@type": "Organization",
          "name": "Disney Cruise Line"
        }
      },
      {
        "@type": "TouristTrip",
        "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#touristtrip",
        "name": "Disney Cruise Line — Family, Luxury & Adventure at Sea",
        "description": "Disney Cruise Line vacations sailing to the Caribbean, Bahamas, Alaska, and Europe, designed for families, couples, grandparents, and multigenerational travelers.",
        "touristType": [
          "Families",
          "Multigenerational Groups",
          "Disney Fans",
          "First-Time Cruisers",
          "Grandparents Traveling with Grandchildren",
          "Couples Seeking Disney Magic"
        ]
      },
      {
        "@type": "Review",
        "@id": "https://www.tripsandships.com/disney-cruise-line-vacations#review",
        "itemReviewed": {
          "@type": "TravelAction",
          "name": "Disney Cruise Line"
        },
        "reviewBody": "Disney Cruise Line combines the magic of Disney with the relaxation and excitement of a world-class cruise, creating unforgettable vacations for families, couples, grandparents, and multigenerational travelers.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Trips & Ships Luxury Travel"
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData?.seo?.title || "Disney Cruise Line Vacations | Family, Luxury & Adventure at Sea"}</title>
        <meta name="title" content={pageData?.seo?.metaTitle || "Disney Cruise Line Vacations"} />
        <meta name="description" content={pageData?.seo?.metaDescription || "Discover Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, Alaska adventures, European cruises, and unforgettable Disney magic at sea."} />
        <meta name="keywords" content={pageData?.seo?.keywords?.join(', ') || "Disney Cruise Line Vacations, Disney family cruises, Disney Cruise Line, Castaway Cay private island, Disney Wish, Disney Treasure"} />
        <meta property="og:title" content={pageData?.seo?.title || "Disney Cruise Line Vacations | Family, Luxury & Adventure at Sea"} />
        <meta property="og:description" content={pageData?.seo?.metaDescription || "Discover Disney Cruise Line vacations featuring family-friendly entertainment, world-class dining, tropical destinations, and unforgettable Disney magic at sea."} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/disney-cruise-line-vacations" />
        <link rel="canonical" href="https://www.tripsandships.com/disney-cruise-line-vacations" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        {pageData?.faqs?.items && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": pageData.faqs.items.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <Nav />

      {/* ─── SECTION 1: Comparison Hero ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage1}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── SECTION 2: Video Embed & Specialties ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              The Disney Difference
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6">
              {pageData.videoSection.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              {pageData.videoSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-navy-950 mb-6">
                Disney Cruise Line Vacations Deliver:
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-slate-700">
                {pageData.videoSection.specialties.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                {pageData.videoSection.videoText}
              </p>
            </div>

            <div className="w-full">
              <VideoEmbed
                youtubeId={pageData.videoSection.youtubeId}
                title="Enjoy 3 Vacations in 1 With Disney Cruise Line"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Interactive Destination Grid ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Popular Disney Cruise Destinations"
          subtitle="Disney Cruise Line sails to some of the world's most desirable family-friendly vacation destinations."
          items={destinationHubItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 3.5: Disney's Private Island Experiences (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title="Disney's Private Island Experiences"
        subtitle="One of the biggest highlights of many Disney vacations is visiting Disney's private island destinations. These destinations consistently rank among guests' favorite cruise memories."
        items={privateIslandItems}
      />

      {/* ─── SECTION 4: Why Discerning Families Choose Disney (Dark Navy Section) ─── */}
      <section className="py-20 bg-gradient-to-b from-navy-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                Expert Insight
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-6">
                {pageData.whyAttention.title}
              </h2>
              <div className="w-12 h-0.5 bg-blue-500 mb-8" />
              <p className="font-display text-xl text-blue-100 italic leading-relaxed mb-6">
                "{pageData.whyAttention.quote}"
              </p>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-8">
                — {pageData.whyAttention.author}
              </p>
              <p className="text-slate-300 leading-relaxed font-light font-sans">
                {pageData.whyChoose?.content?.[0] || pageData.whyAttention.body}
              </p>
            </div>

            <div className="w-full lg:w-5/12 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" /> Disney Cruise Line Vacations Deliver:
              </h3>
              <ul className="space-y-4">
                {whyChooseBlends.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Fleet Overview (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={pageData.fleetOverview.title}
        items={fleetOverviewItems}
      />

      {/* ─── SECTION 6: Accommodations Highlights (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.cabinInnovations.title}
        subtitle={pageData.cabinInnovations.subtitle}
        items={cabinInnovationItems}
      />

      {/* ─── SECTION 6.5: Disney Cruise Experience Highlights (HighlightsSplit) ─── */}
      <HighlightsSplit
        title="Disney Cruise Experience Highlights"
        items={spotlightItems}
      />

      {/* ─── SECTION 7: Dining & All-Inclusive Value (GrandBentoFeatures) ─── */}
      <GrandBentoFeatures
        title={pageData.diningAndInclusions.title}
        subtitle={pageData.diningAndInclusions.subtitle}
        items={diningInclusionItems}
      />

      {/* ─── SECTION 7.5: Is Disney Cruise Line Luxury? & Quick Comparison Table ─── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                Luxury Standard
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-6">
                Is Disney Cruise Line Luxury?
              </h2>
              <div className="w-12 h-0.5 bg-blue-600 mb-8" />
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light mb-6">
                Disney is not traditionally classified as an ultra-luxury cruise line. However, many travelers describe the experience as uniquely high-end. Disney often competes successfully with premium and luxury cruise brands when it comes to guest satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Premium Experience",
                  "Family Luxury",
                  "Service-Focused",
                  "Experience-Driven",
                  "Exceptional Entertainment",
                  "Spacious Family Accommodations",
                  "World-Class Dining",
                  "Immersive Disney Storytelling"
                ].map((label, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={DisneyCruiseLineExp3}
                alt="Disney Cruise Line Premium Experience"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-300 block mb-1">Onboard Fine Dining</span>
                <h4 className="text-lg font-semibold">Palo Adults-Only Steakhouse</h4>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="text-xl font-semibold text-navy-950">Disney vs Other Cruise Lines</h3>
              <p className="text-sm text-slate-500 font-light mt-1">A direct comparison of the family vacation experience at sea.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-8">Category</th>
                    <th className="py-4 px-8 text-blue-700">Disney Cruise Line</th>
                    <th className="py-4 px-8">Typical Mainstream Cruise Line</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
                  {[
                    { cat: "Family Experience", disney: "Exceptional", typical: "Good" },
                    { cat: "Entertainment", disney: "Industry Leading", typical: "Moderate" },
                    { cat: "Private Island Access", disney: "Exclusive", typical: "Varies" },
                    { cat: "Service", disney: "Outstanding", typical: "Varies" },
                    { cat: "Kids Programs", disney: "Industry Leading", typical: "Good" },
                    { cat: "Multigenerational Travel", disney: "Exceptional", typical: "Moderate" },
                    { cat: "Character Experiences", disney: "Unique", typical: "None" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-8 font-semibold text-slate-800">{row.cat}</td>
                      <td className="py-4 px-8 text-blue-700 font-medium">{row.disney}</td>
                      <td className="py-4 px-8">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7.6: Disney Cruises for Multigenerational Families (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title="Disney Cruises for Multigenerational Families"
        subtitle="Disney is one of the best cruise lines for grandparents, parents, and children traveling together. Many families return year after year because Disney creates memorable experiences across generations."
        items={multigenerationalItems}
      />

      {/* ─── SECTION 8: Vacation Investment & Pricing ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Vacation Investment
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              {pageData.pricingEstimates.title}
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              {pageData.pricingEstimates.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageData.pricingEstimates.tiers.map((tier, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="mb-6">
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-bold tracking-wider px-4 py-2 rounded-full mb-4">
                    {tier.priceRange}
                  </span>
                  <h3 className="font-semibold text-xl text-navy-950 leading-snug">
                    {tier.duration}
                  </h3>
                </div>
                <p className="text-slate-600 font-light leading-relaxed mt-auto border-t border-slate-100 pt-6">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: Center CTA ─── */}
      <CenterCTA
        title="Ready to Start Planning Your Disney Cruise?"
        description="Connect with our family luxury cruise experts to select the perfect stateroom and secure exclusive promotions."
        buttonText="Contact a Specialist"
        buttonLink="/contact"
        image={CTAImage}
      />

      {/* ─── SECTION 10: Curated Guides Hub (Explore Cruise Brands) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated Disney Guides & Planning Strategies"
          subtitle="Hover over any card below to slide open the guide drawer, access direct comparisons, and learn family cruising strategies."
          items={disneyCuratedGuides}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 11: Second Video Showcase ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Disney Cruise Line in Action
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 mb-4">
              Why Families Love Disney Cruise Line
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              Disney Cruise Line offers a vacation experience unlike any other that magically brings families together while providing kids' clubs and adult-exclusive retreats.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <VideoEmbed
              youtubeId="qxzrC4ahtDQ"
              title="What’s Great About A Disney Cruise? | Disney Cruise Line"
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: Expert Bio ─── */}
      <ExpertCredentials
        name={pageData.expertCredentials.name}
        title={pageData.expertCredentials.title}
        bio={pageData.expertCredentials.bottomText}
        image={AboutImage}
      />

      {/* ─── SECTION 13: FAQ Accordion ─── */}
      <FAQAccordion
        data={faqData}
      />

      {/* ─── SECTION 14: Final Center CTA ─── */}
      <CenterCTA
        title="More Than a Vacation — Disney Magic, Memories & Moments"
        description="Contact Trips & Ships Luxury Travel to start planning your Disney Cruise Line vacation today and unlock VIP travel perks."
        buttonText="Plan Your Disney Cruise"
        buttonLink="/contact"
        image={HeroImage2}
      />

      {/* Comprehensive text guide to increase text ratio for SEO */}
      <section className="bg-white py-20 px-6 border-t border-b border-[#274472]/10 font-sans">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#274472] text-center mb-8 font-serif">
            Disney Cruise Line Vacations: Complete Family Cruise Guide
          </h2>
          <div className="text-base lg:text-lg text-gray-600 leading-relaxed flex flex-col gap-6 font-light">
            <p className="text-brand-navy">
              A Disney Cruise Line vacation combines world-class cruising with Disney storytelling. Families appreciate the combination of entertainment, service, safety, dining, accommodations, and Disney magic at sea.
            </p>
            <p className="text-brand-navy">
              Disney Cruise Line sails to some of the world's most desirable vacation destinations including the Bahamas, Caribbean, Alaska, and Europe.
            </p>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default DisneyCruiseLineVacations;
