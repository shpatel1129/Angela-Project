import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Fresh Assets - Celebrity Cruises The Retreat (Distinct, matched to headings & never used in previous pages)
import HeroRetreatImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-edge-cannes-suite.webp";
import RetreatConceptImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-penthouse-suite-living-room-panoramic-scenic-view.webp";
import LuminaeDiningImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-le-voyage-dining.webp";
import LuminaeSeasideImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-seaside-restaurant.webp";
import LuminaeChefImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-destination-dining.webp";
import LuminaeGrillImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-ocean-grill.webp";
import RetreatLoungeImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-sunset-lounge.webp";
import MichaelsClubImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-millennium-sunset-bar-alaska.webp";
import RetreatSundeckImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-beyond-sunset-bar-st-thomas.webp";
import RetreatPoolDeckImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-pool-deck.webp";

// Butler & In-Suite Service Assets
import ButlerServiceLivingImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-royal-suite-living-room.webp";
import ButlerServiceBedroomImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-royal-suite-bedroom.webp";
import ButlerServiceSalonImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-penthouse-suite-living-room.webp";
import ButlerServiceVerandaImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-penthouse-suite-veranda.webp";

// Suite Categories Assets (Accurately matched suite categories)
import SkySuiteImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-suite-veranda-bedroom.webp";
import CelebritySuiteBalconyImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-royal-suite-balcony.webp";
import RoyalSuiteMasterImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-penthouse-suite-bedroom.webp";
import PenthouseDetailImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-penthouse-suite-detail.webp";
import EdgeVillaPlungeImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-sunset-lounge-jacuzzi.webp";
import IconicSuitePanoramicImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-sunset-lounge.webp";

// Premium Drinks, Wi-Fi & Lifestyle Assets (Matching beverage and suite connectivity)
import DrinksCocktailImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-antigua-ocean-point-resort-cocktail.webp";
import WifiSuiteLivingImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-penthouse-suite-living-room.webp";
import CouplesCelebrationImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-perfect-day-cococay-beach-club.webp";

// First-Timers & Destinations Assets (Matched to Alaska, Europe & Caribbean itineraries)
import FirstTimerMillenniumImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-millennium-exterior-venice.webp";
import FirstTimerEdgeImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-edge-sydney-arrival.webp";
import DestAlaskaEdgeImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-edge-alaska-endicott-arm.webp";
import DestEuropePortofinoImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-edge-portofino.webp";
import DestCaribbeanCocoCayImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-beyond-perfect-day-coco-cay-aerial.webp";
import DestCtaShipImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-beyond-santorini.webp";

// Comparison & Planning Assets (Standard veranda balcony vs luxury suite & ship booking)
import StandardVerandaBalconyImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-eclipse-veranda-stateroom-balcony.webp";
import RetreatSuiteLivingImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-flora-royal-suite-living-room.webp";
import VerifyShipImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-edge-cannes-magic-carpet.webp";
import PlanRetreatShipImg from "@/assets/celebritycruises/CelebrityTheRetreat/celebrity-beyond-perfect-day-cococay-ship-exterior.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ChecklistCards from "@/components/ui/ChecklistCards";
import ShipAmenitiesShowcase from "@/components/ui/ShipAmenitiesShowcase";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import CardGrid from "@/components/ui/CardGrid";
import ButlerServiceDetails from "@/components/ui/ButlerServiceDetails";
import PremiumSuiteCategories from "@/components/ui/PremiumSuiteCategories";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import PricingFactorsGrid from "@/components/ui/PricingFactorsGrid";
import VsComparisonGrid from "@/components/ui/VsComparisonGrid";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import EditorialIntroSplit from "@/components/ui/EditorialIntroSplit";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import AccordionFlexGrid from "@/components/ui/AccordionFlexGrid";
import AuthorityGrid from "@/components/ui/AuthorityGrid";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";

export default function CelebrityTheRetreat() {
  // Quick Answer ComparisonTable
  const quickAnswerTableData = {
    title: data.quickAnswer.title,
    subtitle: data.quickAnswer.subtitle,
    headers: data.quickAnswer.columns,
    rows: (data.quickAnswer.rows || []).map((row) => [row.want, row.considering]),
    footnote: data.quickAnswer.verdict,
  };

  // Section 1: What is The Retreat EditorialFeatureShowcase
  const whatIsRetreatFeatures = [
    {
      title: "Suite Accommodation",
      description: "Dedicated high-tier residential suites featuring expanded living space, premium cashmere mattresses, and private verandas.",
      icon: "BedDouble",
      highlight: "EXPANSIVE LIVING",
    },
    {
      title: "Exclusive Dining at Luminae",
      description: "Private restaurant reserved solely for Retreat guests, serving distinct breakfast, lunch, and dinner menus created by top chefs.",
      icon: "Utensils",
      highlight: "PRIVATE CULINARY",
    },
    {
      title: "Private Lounge & Concierge",
      description: "24/7 access to The Retreat Lounge or Michael's Club with complimentary beverages, afternoon tea, gourmet bites, and dedicated concierge.",
      icon: "Coffee",
      highlight: "EXCLUSIVE ENCLAVE",
    },
    {
      title: "Dedicated Butler Service",
      description: "Personalized assistance with unpacking, in-suite dining, specialty reservations, spa bookings, and priority shore arrangements.",
      icon: "UserCheck",
      highlight: "WHITE-GLOVE CARE",
    },
  ];

  // Section 2: What is Included ChecklistCards
  const whatIsIncludedChecklistData = {
    title: data.whatIsIncluded.title,
    ama: {
      name: "Core Retreat Inclusions",
      reasons: (data.whatIsIncluded.mainBenefits || []).map(
        (b) => `${b.benefit}: ${b.meaning}`
      ),
    },
    avalon: {
      name: data.whatIsIncluded.additionalServicesHeading,
      reasons: data.whatIsIncluded.additionalServices || [],
    },
  };

  // Section 3: Luminae ShipAmenitiesShowcase
  const luminaeAmenitiesData = {
    title: data.luminae.title,
    subtitle: data.luminae.subtitle,
    items: [
      {
        title: "Dedicated Luminae Atmosphere",
        highlight: "PRIVATE RESTAURANT",
        description:
          "Breakfast, lunch, and dinner service in a tranquil, beautifully appointed dining room away from the hustle of the main dining room.",
      },
      {
        title: "Distinct Signature Menus",
        highlight: "CULINARY MASTERY",
        description:
          "Daily rotating menus created specifically for Luminae featuring signature dishes associated with Celebrity's world-class culinary program.",
      },
      {
        title: "Inclusion & Guest Access",
        highlight: "SUITE PRIVILEGE",
        description:
          "Access to Luminae is fully included for eligible Retreat suite guests. Non-Retreat travel companions may visit for an additional cover charge subject to availability.",
      },
      {
        title: "Specialty Dining Distinction",
        highlight: "SUITE POLICY",
        description:
          "Luminae is complimentary for all Retreat guests. Selected higher-tier suites (Iconic, Penthouse, Royal, Edge Villa) also include specialty dining packages.",
      },
    ],
  };
  const luminaeImages = [
    LuminaeDiningImg,
    LuminaeSeasideImg,
    LuminaeChefImg,
    LuminaeGrillImg,
  ];

  // Section 4: Retreat Lounge ContainedShowdown
  const retreatLoungeShowdownData = {
    title: "The Retreat Lounge vs. Michael's Club",
    brandA: {
      name: "The Retreat Lounge (Edge & Revolutionized Ships)",
      image: RetreatLoungeImg,
      features: [
        "Modern, light-filled indoor sanctuary designed by Kelly Hoppen",
        "Available around the clock with 24/7 card key access",
        "Complimentary beverages, gourmet bites, afternoon tea, and evening cocktails",
        "Dedicated on-site Retreat Concierge to handle dining and excursion requests",
        "Direct connection to The Retreat Sundeck on Edge Series vessels",
      ],
    },
    brandB: {
      name: "Michael's Club (Classic Solstice & aShips)",
      image: MichaelsClubImg,
      features: [
        "Intimate, club-style private lounge setting with rich wood accents",
        "Complimentary bar service and daily afternoon refreshments",
        "Dedicated concierge desk assisting with all shoreside and onboard needs",
        "Quiet, refined social hub for meeting fellow luxury suite cruisers",
        "Exclusive gathering point for officer cocktail parties and captain events",
      ],
    },
  };

  // Section 5: The Retreat Sundeck CardGrid
  const retreatSundeckCards = [
    {
      title: "Dedicated Outdoor Lounge Seating",
      description:
        "Generous cushioned loungers, plush daybeds, and private cabana-style enclaves offering uncrowded outdoor relaxation.",
      badge: "SUN & SEA",
      icon: "Sun",
      highlight: "UNCROWDED DECKS",
    },
    {
      title: "Private Pool & Hot Tub Facilities",
      description:
        "Featured on Edge Series ships with dedicated sundeck plunge pools and raised hot tubs overlooking panoramic ocean horizons.",
      badge: "WELLNESS",
      icon: "Waves",
      highlight: "OCEAN VISTAS",
    },
    {
      title: "Attentive Food & Beverage Service",
      description:
        "Dedicated Retreat attendants delivering chilled towels, spritzes, signature cocktails, and gourmet light fare directly to your lounger.",
      badge: "SERVICE",
      icon: "Sparkles",
      highlight: "POOLSIDE ATTENDANTS",
    },
    {
      title: "Fleet Availability Considerations",
      description:
        "Available on Edge Series and Revolutionized ships. Solstice, Eclipse, Reflection, Constellation, and Infinity offer alternative open-deck suite access.",
      badge: "SHIP HARDWARE",
      icon: "Ship",
      highlight: "EDGE & REVOLUTION",
    },
  ];

  // Section 6: Butler Service Details
  const butlerServiceData = {
    eyebrow: "WHITE-GLOVE CONVENIENCE",
    heading: data.butlerService.title,
    description: data.butlerService.description,
    services: [
      {
        number: "01",
        title: "Unpacking & Luggage Organization",
        description:
          "Your butler assists with unpacking your wardrobe on embarkation day, organizing in-closet amenities, and packing your luggage smoothly before departure.",
      },
      {
        number: "02",
        title: "In-Suite Dining & Full Course Service",
        description:
          "Enjoy course-by-course breakfast, lunch, or dinner from Luminae or the Main Dining Room served white-tablecloth style on your private veranda.",
      },
      {
        number: "03",
        title: "Priority Reservations & Spa Coordination",
        description:
          "From booking peak specialty dining slots to scheduling spa appointments and tender departures, your butler coordinates every detail with the concierge.",
      },
      {
        number: "04",
        title: "Butler Chat on Mobile Devices",
        description:
          "On applicable ships, message your dedicated butler directly via your smartphone for swift requests, cocktail orders, and afternoon ice refills.",
      },
    ],
  };
  const butlerServiceImages = [
    ButlerServiceLivingImg,
    ButlerServiceBedroomImg,
    ButlerServiceSalonImg,
    ButlerServiceVerandaImg,
  ];

  // Section 7: Suite Categories PremiumSuiteCategories
  const retreatSuiteKeys = [
    "sky",
    "celebrity",
    "royal",
    "penthouse",
    "edgeVilla",
    "iconic",
  ];
  const retreatSuiteImagesMap: Record<string, string> = {
    sky: SkySuiteImg,
    celebrity: CelebritySuiteBalconyImg,
    royal: RoyalSuiteMasterImg,
    penthouse: PenthouseDetailImg,
    edgeVilla: EdgeVillaPlungeImg,
    iconic: IconicSuitePanoramicImg,
  };
  const retreatPremiumSuiteData = {
    title: (
      <span
        className="text-navy-950 not-italic"
        style={{
          color: "#0a192f",
          WebkitTextFillColor: "#0a192f",
          background: "none",
          WebkitBackgroundClip: "unset",
          display: "inline-block",
        }}
      >
        {data.suiteCategories.title}
      </span>
    ),
    subtitle: data.suiteCategories.subtitle,
    description: data.suiteCategories.description,
    categories: (data.suiteCategories.suites || []).map((suite, idx) => ({
      name: suite.name,
      badge: suite.badge,
      imageKey: retreatSuiteKeys[idx % retreatSuiteKeys.length],
      imageLabel: `${suite.size} • ${suite.deck}`,
      features: suite.features,
      bestFor: suite.description,
    })),
  };

  // Section 10: Cost Comparison VsComparisonGrid
  const costComparisonVsData = {
    title: data.costComparison.title,
    rhine: {
      title: "The Retreat Suite Total Package",
      subtitle: "ALL-INCLUSIVE LUXURY ENCLAVE",
      features: [
        "Expansive luxury suite with dedicated sitting area & large veranda",
        "Complimentary Luminae dining for breakfast, lunch & dinner",
        "Dedicated 24/7 Retreat butler service and Retreat concierge",
        "Bundled Premium Drinks Package & streaming-speed Premium Wi-Fi",
        "Access to private Retreat Lounge and outdoor Retreat Sundeck",
        "Priority embarkation, debarkation, and priority tender service",
      ],
    },
    danube: {
      title: "Standard Veranda / AquaClass Baseline",
      subtitle: "CONVENTIONAL STATEROOM WITH A LA CARTE ADD-ONS",
      features: [
        "Standard stateroom footprint (approx. 192–228 sq. ft.)",
        "Main Dining Room meals (or Blu for AquaClass staterooms)",
        "Standard room attendant service twice daily without butler care",
        "Drinks package ($80–$100+/day/person) purchased separately",
        "Wi-Fi streaming package ($25–$35+/day/device) purchased separately",
        "Public pool decks and public lounges shared with all passengers",
      ],
    },
  };

  // Section 11: Drinks & Wi-Fi BentoGlassmorphismGrid
  const drinksWifiBentoItems = [
    {
      title: "Premium Drinks Package",
      subtitle: "TOP-SHELF SPIRITS & WINES",
      description:
        "Eligible Retreat suite guests enjoy top-shelf cocktails, craft beers, sodas, specialty coffees, and premium wines by the glass up to $17–$20/glass across the ship.",
      badge: "BEVERAGE PACKAGE",
      colSpan: "col-span-1 md:col-span-2",
      image: DrinksCocktailImg,
    },
    {
      title: "Premium Wi-Fi Streaming",
      subtitle: "HIGH-SPEED CONNECTIVITY",
      description:
        "Stay connected with seamless internet for web browsing, video calls, social media posting, and movie streaming directly in your suite.",
      badge: "INTERNET BUNDLE",
      colSpan: "col-span-1",
      image: WifiSuiteLivingImg,
    },
    {
      title: "Gratuities & Tipping Policies",
      subtitle: "BEVERAGE VS. STAFF GRATUITIES",
      description:
        "Beverage package service charges are covered under your suite package. Daily stateroom and dining staff gratuities may be billed separately depending on booking promotion.",
      badge: "GRATUITY POLICY",
      colSpan: "col-span-1 md:col-span-3",
      image: RetreatSundeckImg,
    },
  ];

  // Section 16: Destinations Evaluation ThreeColumnGrid
  const destinationsGridItems = [
    {
      title: data.destinationsEvaluation.items[0].title,
      category: data.destinationsEvaluation.items[0].category,
      image: DestAlaskaEdgeImg,
      description: data.destinationsEvaluation.items[0].description,
      lead: data.destinationsEvaluation.items[0].lead,
      features: data.destinationsEvaluation.items[0].features,
    },
    {
      title: data.destinationsEvaluation.items[1].title,
      category: data.destinationsEvaluation.items[1].category,
      image: DestEuropePortofinoImg,
      description: data.destinationsEvaluation.items[1].description,
    },
    {
      title: data.destinationsEvaluation.items[2].title,
      category: data.destinationsEvaluation.items[2].category,
      image: DestCaribbeanCocoCayImg,
      description: data.destinationsEvaluation.items[2].description,
    },
  ];

  // Section 17: The Retreat vs Standard Veranda AccordionFlexGrid
  const retreatVsVerandaAccordionItems = [
    {
      title: "Choose a Standard Veranda Stateroom If...",
      category: "SMART VALUE BASELINE",
      description:
        "You primarily want a private balcony and comfortable sleeping quarters while spending most of your waking hours exploring destinations, joining tours, and enjoying the ship's public venues.",
      highlights: data.retreatVsVeranda.chooseVerandaIf,
      image: StandardVerandaBalconyImg,
    },
    {
      title: "Choose The Retreat Suite Experience If...",
      category: "ELEVATED RESIDENTIAL LUXURY",
      description:
        "You value private dining, dedicated butler attention, peaceful uncrowded sun decks, and premium included amenities that transform your cruise into a luxury resort vacation.",
      highlights: data.retreatVsVeranda.chooseRetreatIf,
      image: RetreatSuiteLivingImg,
    },
  ];

  // Section 18: Disadvantages AuthorityGrid
  const disadvantagesGridItems = (data.disadvantages.drawbacks || []).map((item) => ({
    title: item.title,
    description: item.description,
    badge: `DRAWBACK ${item.number}`,
    icon: "AlertCircle",
  }));

  // Section 19: Decision Framework StepByStepGuide
  const decisionSteps = (data.decisionFramework.steps || []).map((s) => ({
    step: s.step,
    title: s.title,
    description: s.description,
  }));

  // Section 20: Travel Advisor Guidance ExpertCredentials
  const advisorCredentialsList = data.advisorServices.features;

  // Section 21: FAQs FAQAccordion
  const faqAccordionData = {
    title: "Frequently Asked Questions: Celebrity The Retreat",
    subtitle: "EXPERT ANSWERS TO THE MOST COMMON SUITE QUESTIONS",
    items: (data.faqs || []).map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  };

  // Section 22: Final Verdict ConclusionSection
  const conclusionSections = [
    {
      heading: data.finalVerdict.title,
      paragraphs: [
        data.finalVerdict.description,
        "The Retreat is worth considering if you want dedicated butler service, value private dining at Luminae, enjoy uncrowded lounge and sundeck access, and appreciate a more personalized vacation experience.",
        "A standard Veranda or AquaClass stateroom may be better if you prioritize shore exploration, spend little time in your room, and prefer putting your budget toward excursions and destination tours.",
        data.finalVerdict.closingAdvice,
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.primaryKeyword} />
        <link rel="canonical" href={data.meta.canonical} />

        {/* Structured Schema */}
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      <Nav />

      {/* Main Page Container */}
      <div className="min-h-screen bg-white">
        {/* Hero Section (ComparisonHero) */}
        <div id="hero">
          <ComparisonHero
            badge="CELEBRITY CRUISES THE RETREAT"
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            description={data.hero.description}
            backgroundImage={HeroRetreatImg}
            byline={true}
            primaryCtaText="Explore The Retreat"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Consult Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

        {/* Quick Answer Table (ComparisonTable) */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable data={quickAnswerTableData} />
        </div>

        {/* Section 1: What is The Retreat (EditorialFeatureShowcase) */}
        <div id="what-is-the-retreat">
          <EditorialFeatureShowcase
            title={data.whatIsRetreat.title}
            subtitle={data.whatIsRetreat.subtitle}
            image={RetreatConceptImg}
            features={whatIsRetreatFeatures}
            bgClass="bg-white"
          />


        </div>

        {/* Section 2: What is Included (ChecklistCards) */}
        <div id="what-is-included">
          <ChecklistCards data={whatIsIncludedChecklistData} />


        </div>

        {/* Section 3: Luminae Restaurant (ShipAmenitiesShowcase) */}
        <div id="luminae">
          <ShipAmenitiesShowcase data={luminaeAmenitiesData} images={luminaeImages} />


        </div>

        {/* Section 4: The Retreat Lounge & Michael's Club (ContainedShowdown) */}
        <div id="retreat-lounge">
          <ContainedShowdown
            title={retreatLoungeShowdownData.title}
            brandA={retreatLoungeShowdownData.brandA}
            brandB={retreatLoungeShowdownData.brandB}
          />


        </div>

        {/* Section 5: The Retreat Sundeck (CardGrid) */}
        <div id="retreat-sundeck">
          <CardGrid
            title={data.retreatSundeck.title}
            subtitle={data.retreatSundeck.subtitle}
            cards={retreatSundeckCards}
            columns={4}
            stagger={false}
          />


        </div>

        {/* CenterCTA 1 */}
        <CenterCTA
          title="Experience The Retreat on Your Next Celebrity Cruise"
          description="Speak with Angela Hughes at Trips & Ships Luxury Travel to compare suite categories, evaluate Retreat Sundeck availability, and unlock VIP Virtuoso amenities."
          buttonText="Consult a Luxury Cruise Advisor"
          buttonLink="/contact"
          image={RetreatPoolDeckImg}
          theme="dark"
        />

        {/* Section 6: Butler Service (ButlerServiceDetails) */}
        <div id="butler-service">
          <ButlerServiceDetails data={butlerServiceData} images={butlerServiceImages} />

          {/* Butler Worth It Callout */}
          <div className="max-w-[1100px] mx-auto px-6 -mt-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ts-gold shrink-0 mt-0.5">
                Butler Value
              </span>
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed italic">
                "{data.butlerService.isWorthIt}"
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Suite Categories (PremiumSuiteCategories) */}
        <div id="suite-categories">
          <PremiumSuiteCategories
            data={retreatPremiumSuiteData}
            images={retreatSuiteImagesMap}
          />

          {/* Other Suites Note */}
          <div className="max-w-[1100px] mx-auto px-6 -mt-8 mb-16">
            <div className="bg-ice-50 border border-navy-100 rounded-2xl p-6 shadow-sm">
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed">
                {data.suiteCategories.otherSuitesText}
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Which Suite Should You Book? (Table Primitives) */}
        <div id="which-suite-to-book">
          <section className="w-full py-20 bg-white">
            <div className="max-w-[1100px] mx-auto px-6">
              <div className="text-center mb-14">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold mb-4">
                  {data.whichSuiteToBook.subtitle}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950">
                  {data.whichSuiteToBook.title}
                </h2>
                <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6" />
                <p className="font-sans text-base text-slate-600 max-w-3xl mx-auto mt-6">
                  {data.whichSuiteToBook.description}
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm mb-8">
                <Table className="w-full text-left border-collapse">
                  <TableHeader>
                    <TableRow className="bg-navy-950 hover:bg-navy-950 border-none">
                      {(data.whichSuiteToBook.columns || []).map((header, idx) => (
                        <TableHead
                          key={idx}
                          className="px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90"
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {(data.whichSuiteToBook.rows || []).map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                      >
                        <TableCell className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm align-top">
                          {row.category}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-700 align-top">
                          {row.experience}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-ts-gold font-medium align-top">
                          {row.bestFor}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Recommendation Callout */}
              <div className="bg-ice-50 border border-navy-100 rounded-2xl p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-navy-900 block mb-2">
                  Advisor Recommendation
                </span>
                <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed italic">
                  "{data.whichSuiteToBook.recommendation}"
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Section 9: Celebrity The Retreat Cost: How Much Does It Cost? (PricingFactorsGrid) */}
        <div id="cost-drivers">
          <PricingFactorsGrid data={data.costDrivers} />
        </div>

          {/* CenterCTA 2: Plan Your Celebrity Retreat Experience */}
        <CenterCTA
          title={data.ctaInterlude.title}
          description={data.ctaInterlude.description}
          buttonText={data.ctaInterlude.primaryButtonText}
          buttonLink={data.ctaInterlude.primaryButtonLink}
          image={PlanRetreatShipImg}
          theme="dark"
        />

        {/* Section 10: How Much More Does The Retreat Cost (VsComparisonGrid) */}
        <div id="cost-comparison">
          <VsComparisonGrid data={costComparisonVsData} />

          {/* What Should You Compare Checklist */}
          <div className="max-w-[1100px] mx-auto px-6 -mt-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-2xl text-navy-950 mb-4">
                {data.costComparison.checklistTitle}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {(data.costComparison.checklist || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                    <span className="text-ts-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-xs text-slate-500 italic">
                {data.costComparison.advice}
              </p>
            </div>
          </div>
        </div>

        {/* Section 11: Drinks & Wi-Fi (BentoGlassmorphismGrid) */}
        <div id="drinks-and-wifi">
          <BentoGlassmorphismGrid
            title={data.drinksAndWifi.title}
            subtitle={data.drinksAndWifi.subtitle}
            bentoItems={drinksWifiBentoItems}
          />
        </div>

        {/* Section 12: Does The Retreat Include Specialty Dining? (Table Primitives) */}
        <div id="specialty-dining">
          <section className="w-full py-20 bg-ice-50/50">
            <div className="max-w-[1100px] mx-auto px-6">
              <div className="text-center mb-12">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold mb-4">
                  {data.specialtyDining.subtitle}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950">
                  {data.specialtyDining.title}
                </h2>
                <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6 mb-8" />
                <div className="max-w-3xl mx-auto space-y-4 text-base text-slate-700 leading-relaxed text-left md:text-center">
                  {(data.specialtyDining.introParagraphs || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

             

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                <Table className="w-full text-left border-collapse">
                  <TableHeader>
                    <TableRow className="bg-navy-950 hover:bg-navy-950 border-none">
                      {(data.specialtyDining.columns || []).map((header, idx) => (
                        <TableHead
                          key={idx}
                          className="px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90"
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {(data.specialtyDining.rows || []).map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                      >
                        <TableCell className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm align-top w-[40%]">
                          {row.experience}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-700 align-top">
                          {row.access}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        </div>

        {/* Section 13: Is The Retreat Worth It for Couples? (AsymmetricStoryIntro) */}
        <div id="retreat-worth-it-couples">
          <AsymmetricStoryIntro
            eyebrow={data.couplesEvaluation.eyebrow}
            heading={data.couplesEvaluation.title}
            paragraphs={data.couplesEvaluation.paragraphs}
            highlights={data.couplesEvaluation.appealingFor}
            image1={CouplesCelebrationImg}
            image2={CelebritySuiteBalconyImg}
            image1Alt="Couples Retreat Experience"
            image2Alt="Celebrity Suite Balcony"
          />

          {/* Couples Best Option Callout */}
          <div className="max-w-[1100px] mx-auto px-6 -mt-8 mb-16">
            <div className="bg-ice-50 border border-navy-100 rounded-2xl p-6 shadow-sm text-center">
              <p className="font-sans text-sm text-navy-900 font-semibold italic">
                "{data.couplesEvaluation.bestOption}"
              </p>
            </div>
          </div>
        </div>

        {/* Section 14: Is The Retreat Worth It for Families? (CostValueAnalysisCards) */}
        <div id="retreat-worth-it-families">
          <CostValueAnalysisCards
            title={data.familiesEvaluation.title}
            subtitle={data.familiesEvaluation.subtitle}
            includedTitle={data.familiesEvaluation.includedTitle}
            extrasTitle={data.familiesEvaluation.extrasTitle}
            included={data.familiesEvaluation.included}
            extras={data.familiesEvaluation.extras}
          />


        </div>

        {/* Section 15: Is The Retreat Worth It for First-Time Celebrity Cruisers? (EditorialIntroSplit) */}
        <div id="retreat-first-timers">
          <EditorialIntroSplit
            heading={data.firstTimersEvaluation.title}
            eyebrow={data.firstTimersEvaluation.eyebrow}
            paragraphs={data.firstTimersEvaluation.paragraphs}
            primaryImage={FirstTimerMillenniumImg}
            secondaryImage={FirstTimerEdgeImg}
            primaryAlt="First-time Celebrity Cruiser Millennium class experience in Venice"
            secondaryAlt="Celebrity Edge modern luxury flagship arrival in Sydney"
          />
        </div>

        {/* Section 16: Is The Retreat Worth It on Alaska, Europe, and Caribbean Cruises? (ThreeColumnGrid) */}
        <div id="destinations-value">
          <ThreeColumnGrid
            title={data.destinationsEvaluation.title}
            subtitle={data.destinationsEvaluation.subtitle}
            items={destinationsGridItems}
          />
        </div>

        {/* Destination-to-Suite Decision CTA */}
        <CenterCTA
          title={data.destinationCta.title}
          description={data.destinationCta.description}
          buttonText={data.destinationCta.buttonText}
          buttonLink={data.destinationCta.buttonLink}
          image={DestCtaShipImg}
          theme="dark"
        />

        {/* Section 15: The Retreat vs. AquaClass: Which Should You Choose? (Table Primitives) */}
        <div id="retreat-vs-aquaclass">
          <section className="w-full py-20 bg-white">
            <div className="max-w-[1100px] mx-auto px-6">
              <div className="text-center mb-12">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold mb-4">
                  {data.retreatVsAquaClass.subtitle}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950">
                  {data.retreatVsAquaClass.title}
                </h2>
                <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6 mb-8" />
                <div className="max-w-3xl mx-auto space-y-4 text-base text-slate-700 leading-relaxed text-left md:text-center">
                  {(data.retreatVsAquaClass.introParagraphs || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                <Table className="w-full text-left border-collapse">
                  <TableHeader>
                    <TableRow className="bg-navy-950 hover:bg-navy-950 border-none">
                      {(data.retreatVsAquaClass.columns || []).map((header, idx) => (
                        <TableHead
                          key={idx}
                          className="px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90"
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {(data.retreatVsAquaClass.rows || []).map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                      >
                        <TableCell className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm align-top w-[25%]">
                          {row.feature}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-600 align-top w-[37.5%]">
                          {row.aquaclass}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-ts-gold font-medium align-top w-[37.5%]">
                          {row.retreat}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        </div>

        {/* Section 16: The Retreat vs. Concierge Class: Is the Upgrade Worth It? (Table Primitives) */}
        <div id="retreat-vs-concierge">
          <section className="w-full py-20 bg-ice-50/40">
            <div className="max-w-[1100px] mx-auto px-6">
              <div className="text-center mb-12">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold mb-4">
                  {data.retreatVsConciergeClass.subtitle}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950">
                  {data.retreatVsConciergeClass.title}
                </h2>
                <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6 mb-8" />
                <div className="max-w-3xl mx-auto space-y-4 text-base text-slate-700 leading-relaxed text-left md:text-center">
                  {(data.retreatVsConciergeClass.introParagraphs || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                <Table className="w-full text-left border-collapse">
                  <TableHeader>
                    <TableRow className="bg-navy-950 hover:bg-navy-950 border-none">
                      {(data.retreatVsConciergeClass.columns || []).map((header, idx) => (
                        <TableHead
                          key={idx}
                          className="px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90"
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {(data.retreatVsConciergeClass.rows || []).map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                      >
                        <TableCell className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm align-top w-[25%]">
                          {row.feature}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-600 align-top w-[37.5%]">
                          {row.concierge}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-ts-gold font-medium align-top w-[37.5%]">
                          {row.retreat}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        </div>

        {/* Section 17: The Retreat vs Standard Veranda (AccordionFlexGrid) */}
        <div id="retreat-vs-veranda">
          <AccordionFlexGrid
            title={data.retreatVsVeranda.title}
            subtitle={data.retreatVsVeranda.subtitle}
            items={retreatVsVerandaAccordionItems}
          />
        </div>

        {/* Section 18: Disadvantages of The Retreat (AuthorityGrid) */}
        <div id="disadvantages">
          <AuthorityGrid
            title={data.disadvantages.title}
            subtitle={data.disadvantages.subtitle}
            items={disadvantagesGridItems}
          />
        </div>

        {/* Section 19: Decision Framework (StepByStepGuide) */}
        <div id="decision-framework">
          <StepByStepGuide
            title={data.decisionFramework.title}
            subtitle={data.decisionFramework.subtitle}
            steps={decisionSteps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* Section 20: Travel Advisor Guidance (ExpertCredentials) */}
        <div id="advisor-services">
          <ExpertCredentials
            title={data.advisorServices.title}
            authoritySubtitle={data.advisorServices.subtitle}
            authorityBoxTitle="RETREAT SUITE EXPERTISE"
            image={AboutAngelaImg}
            credentials={advisorCredentialsList}
            quote={data.advisorServices.advisorQuote.quote}
            quoteSubtitle={data.advisorServices.advisorQuote.author}
            ctaText={data.advisorServices.contactButton.text}
            ctaLink={data.advisorServices.contactButton.link}
          />
        </div>

      

        {/* Section 21: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>

      

        {/* Final CTA */}
        <CenterCTA
          title="Plan Your Celebrity Retreat Experience"
          description="Speak with Angela Hughes and the luxury travel advisors at Trips & Ships Luxury Travel. We evaluate ship layouts, verify suite perks, and coordinate your personalized voyage."
          buttonText="Schedule Retreat Consultation"
          buttonLink="/contact"
          image={PlanRetreatShipImg}
          theme="dark"
        />
      </div>
    </>
  );
}
