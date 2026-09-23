import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  Minus,
  Plus,
  ArrowRight,
  Wine,
  Gem,
  Map,
  Compass,
  Utensils,
  Home,
  MessageCircle,
  Wifi,
  DollarSign,
  Music,
  Dumbbell,
  Coffee,
  Sparkles,
  Droplet,
  Shirt,
  Flower2,
  MapPin,
  Wallet,
  ShoppingBag,
  Waves,
  AlertCircle,
  Star,
  Award,
  Users,
  Ship
} from "lucide-react";

// Page Data JSON
import pageData from "./data.json";
import Nav from "@/components/Navbar/Nav";

// Shared Components & UI System
import ComparisonHero from "@/components/ui/ComparisonHero";
import HighlightsSplit from "@/components/ui/HighlightsSplit";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CenterCTA from "@/components/ui/CenterCTA";
import LuxuryZigZagShowcase from "@/components/ui/LuxuryZigZagShowcase";
import EditorialIntroSplit from "@/components/ui/EditorialIntroSplit";
import EditorialIntroSection from "@/components/ui/EditorialIntroSection";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import InclusionCheckerGrid from "@/components/ui/InclusionCheckerGrid";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import SmartSpendingSplit from "@/components/ui/SmartSpendingSplit";
import MistakesGrid from "@/components/ui/MistakesGrid";
import ComparisonTable from "@/components/ui/ComparisonTable";
import TravelerProfileTabs from "@/components/ui/TravelerProfileTabs";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProsConsCards from "@/components/ui/ProsConsCards";
import ExpertRulesGrid from "@/components/ui/ExpertRulesGrid";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import VideoEmbed from "@/components/ui/VideoEmbed";
import MasterImage from "@/components/ui/MasterImage";
import FadeIn from "@/components/ui/FadeIn";

// Asset References
import AboutImage from "../../assets/AboutAngela3.jpeg";
import HeroImage from "../../assets/WhatIncludedSeabournCruise/seabourn-luxury-cruise-ship-ocean-sailing-all-inclusive.jpg";
import IsAllInclusiveImg from "../../assets/WhatIncludedSeabournCruise/is-seabourn-all-inclusive-luxury-cruise-experience.jpg";
import ChampagneIncludedImg from "../../assets/WhatIncludedSeabournCruise/seabourn-included-champagne-pours-luxury-cruise.jpg";
import TheRestaurantImg from "../../assets/WhatIncludedSeabournCruise/seabourn-the-restaurant-fine-dining-main-venue.jpg";
import TheColonnadeImg from "../../assets/WhatIncludedSeabournCruise/seabourn-the-colonnade-casual-indoor-outdoor-dining.jpg";
import InSuiteDiningImg from "../../assets/WhatIncludedSeabournCruise/seabourn-suite-private-dining-veranda-room-service.jpg";
import PremiumSpiritsImg from "../../assets/WhatIncludedSeabournCruise/seabourn-premium-spirits-craft-cocktails-open-bar.jpg";
import WelcomeChampagneImg from "../../assets/WhatIncludedSeabournCruise/seabourn-embarkation-welcome-champagne-hospitality.jpg";
import AnInSuiteBarImg from "../../assets/WhatIncludedSeabournCruise/seabourn-luxury-suite-customized-complimentary-bar.jpg";
import CaviarIncludedImg from "../../assets/WhatIncludedSeabournCruise/seabourn-complimentary-caviar-service-on-demand-luxury.jpg";
import WifiIncludedImg from "../../assets/WhatIncludedSeabournCruise/seabourn-starlink-included-wifi-internet-connectivity.jpg";
import GratuitiesAreImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-included-crew-gratuities-tipping-policy.jpg";
import SeabournConversationsImg from "../../assets/WhatIncludedSeabournCruise/seabourn-conversations-enrichment-guest-speakers-program.jpg";
import FitnessFacilitiesImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-fitness-center-ocean-view-wellness-facilities.jpg";
import PoolsPublicSpacesImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-ship-pool-deck-and-public-lounges.jpg";
import ExpeditionActivitiesImg from "../../assets/WhatIncludedSeabournCruise/seabourn-expedition-zodiac-activities-included-excursions.jpg";
import RoomServiceImg from "../../assets/WhatIncludedSeabournCruise/seabourn-24-hour-complimentary-in-suite-room-service.jpg";
import SpecialtyDiningImg from "../../assets/WhatIncludedSeabournCruise/seabourn-complimentary-specialty-dining-culinary-venues.jpg";
import AlcoholicDrinksImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-included-alcoholic-drinks-fine-wines-cocktails.jpg";
import SoftDrinksImg from "../../assets/WhatIncludedSeabournCruise/seabourn-included-specialty-coffees-soft-drinks-refreshments.jpg";
import LaundryValetImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-valet-laundry-and-dry-cleaning-services.jpg";
import SpaTreatmentsImg from "../../assets/WhatIncludedSeabournCruise/seabourn-spa-wellness-massage-and-salon-treatments.jpg";
import ShoreExcursionsImg from "../../assets/WhatIncludedSeabournCruise/seabourn-shore-excursions-guided-tours-cultural-ports.jpg";
import TrueCostImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-inclusions-true-cost-value-breakdown.jpg";
import EnjoyDinnerImg from "../../assets/WhatIncludedSeabournCruise/seabourn-open-seating-gourmet-dinner-restaurant.jpg";
import RelaxInSuiteImg from "../../assets/WhatIncludedSeabournCruise/seabourn-oceanfront-luxury-suite-veranda-relaxation.jpg";
import FinalVerdictImg from "../../assets/WhatIncludedSeabournCruise/seabourn-final-verdict-all-inclusive-value-lifestyle.jpg";

const SeabournWhatsIncluded = () => {

  // 1. Dining Sub-cards for ThreeColumnGrid
  const diningImages = [TheRestaurantImg, TheColonnadeImg, InSuiteDiningImg];
  const diningVenueItems = pageData.dining.subCards.map((card, idx) => ({
    title: card.title,
    description: card.description,
    image: diningImages[idx] || null,
    placeholderLabel: `SEABOURN DINING — ${card.title.toUpperCase()}`
  }));

  // 3. Beverage Features for EditorialFeatureShowcase
  const beverageFeaturesList = [
    {
      title: "Complimentary Fine Wines & Champagne",
      description: "Poured freely at lunch, dinner, and across all onboard lounges, including welcoming Champagne upon boarding."
    },
    {
      title: "Premium Spirits & Craft Cocktails",
      description: "Top-shelf liquors, signature cocktails, and artisanal spirits are included without requiring beverage package tiers."
    },
    {
      title: "In-Suite Customized Bar",
      description: "Your suite refrigerator is stocked with your preferred wines, spirits, beers, and soft drinks at no additional charge."
    },
    {
      title: "Artisanal Coffees & Non-Alcoholic Beverages",
      description: "Espresso, cappuccino, specialty teas, bottled waters, fresh juices, and sodas are available anytime throughout the ship."
    }
  ];

  // 4. Grouped Amenities for LuxuryZigZagShowcase (Champagne, Bar, Caviar, Wi-Fi)
  const groupedAmenitiesZigZagItems = [
    {
      title: pageData.groupedAmenities.cards[0].title,
      category: "Category 03 • Arrival Touch",
      description: pageData.groupedAmenities.cards[0].description,
      bestFor: "Celebrations, milestone anniversaries, and honeymooners seeking genuine first-class welcome hospitality.",
      image: WelcomeChampagneImg,
      placeholderLabel: "SEABOURN WELCOME CHAMPAGNE"
    },
    {
      title: pageData.groupedAmenities.cards[1].title,
      category: "Category 04 • In-Suite Living",
      description: `${pageData.groupedAmenities.cards[1].description} Particularly valuable for: ${pageData.groupedAmenities.cards[1].items.join(', ')}.`,
      bestFor: "Private veranda breakfasts and pre-dinner suite drinks with customized wines and spirits.",
      image: AnInSuiteBarImg,
      placeholderLabel: "CUSTOMIZED IN-SUITE BAR"
    },
    {
      title: pageData.groupedAmenities.cards[2].title,
      category: "Category 05 • Signature Luxury",
      description: `${pageData.groupedAmenities.cards[2].description} Caviar can be enjoyed: ${pageData.groupedAmenities.cards[2].items.join(', ')}. ${pageData.groupedAmenities.cards[2].footnote}`,
      bestFor: "Culinary connoisseurs seeking Seabourn's iconic complimentary caviar service anywhere onboard.",
      image: CaviarIncludedImg,
      placeholderLabel: "COMPLIMENTARY CAVIAR SERVICE"
    },
    {
      title: pageData.groupedAmenities.cards[3].title,
      category: "Category 06 • Seamless Connectivity",
      description: `${pageData.groupedAmenities.cards[3].description} Perfect for: ${pageData.groupedAmenities.cards[3].items.join(', ')}. ${pageData.groupedAmenities.cards[3].footnote}`,
      bestFor: "Remote professionals, family connectivity, and seamless global Starlink internet at sea.",
      image: WifiIncludedImg,
      placeholderLabel: "STARLINK INCLUDED WI-FI"
    }
  ];

  // 5. Entertainment Highlights for HighlightsSplit
  const entertainmentItems = pageData.entertainment.highlights.map((item, idx) => ({
    title: item,
    description: `Intimate, sophisticated performances and evening events tailored to small-ship luxury.`,
    image: null,
    icon: "Music",
    bulletPoints: [
      "Sophisticated onboard ambiance",
      "No large-ship arena crowding",
      "Complimentary access every evening"
    ]
  }));

  // 6. Seabourn Conversations for EditorialFeatureShowcase
  const conversationFeaturesList = [
    {
      title: "World-Renowned Guest Speakers",
      description: "Engage with historians, scientists, diplomats, explorers, and artists who share deep regional insights."
    },
    {
      title: "Curated Topic Spectrum",
      description: `Topics include: ${pageData.conversations.topics.join(', ')}.`
    },
    {
      title: "Conversational, Informal Access",
      description: "Speakers sail as fellow guests, joining travelers for casual conversations, meals, and shoreside excursions."
    }
  ];

  // 7. Detailed Inclusions (Fitness, Pools, Expeditions) for ThreeColumnGrid
  const detailInclusionImages = [FitnessFacilitiesImg, PoolsPublicSpacesImg, ExpeditionActivitiesImg];
  const detailInclusionItems = pageData.detailInclusions.items.map((item, idx) => ({
    title: item.title,
    description: `${item.text} ${item.featuresTitle} ${item.features.join(', ')}.`,
    image: detailInclusionImages[idx] || null,
    placeholderLabel: `SEABOURN ${item.title.toUpperCase()}`
  }));

  // 8. Shore & Ventures Comparison Data for ValueBreakdownSplit
  const shoreExcursionIncludedItems = pageData.shoreVentures.cards[0].features.map((feat) => ({
    title: feat,
    description: "Available across global ports, ranging from UNESCO cultural tours to private excursions (priced per tour)."
  }));

  const venturesIncludedItems = pageData.shoreVentures.cards[1].features.map((feat) => ({
    title: feat,
    description: "Specialized active adventures led by the expedition team (Zodiacs, kayaking, guided hikes)."
  }));

  // 9. Common Questions Part 1 for ThreeColumnGrid
  const moreInclusionsPart1Images = [RoomServiceImg, SpecialtyDiningImg, AlcoholicDrinksImg, ChampagneIncludedImg];
  const moreInclusionsPart1Items = pageData.moreInclusionsPart1.cards.map((card, idx) => ({
    title: card.title,
    description: card.text,
    image: moreInclusionsPart1Images[idx] || null,
    placeholderLabel: card.title.replace('?', '').toUpperCase()
  }));

  // 10. Additional Amenities & Exclusions Profiles for TravelerProfileTabs
  const additionalAmenitiesProfiles = [
    {
      name: "Soft Drinks & Artisan Refreshments",
      tagline: "Category 05 • Included Onboard",
      quote: "Non-alcoholic beverages are generously included across all dining venues, bars, and suites.",
      recommendation: "Enjoy complimentary espresso, cappuccinos, fresh squeezed juices, bottled waters, and sodas without ordering beverage packages.",
      reason: "Seabourn ensures every guest enjoys premium non-alcoholic refreshments throughout the ship at zero extra charge.",
      whyFits: [
        "Specialty barista coffees & teas",
        "Fresh-pressed morning juices",
        "Still & sparkling bottled waters",
        "Craft mocktails & artisan sodas"
      ],
      image: SoftDrinksImg,
      placeholderLabel: "SEABOURN SOFT DRINKS & REFRESHMENTS"
    },
    {
      name: "Laundry & Valet Services",
      tagline: "Category 06 • Budget Separately",
      quote: "Standard laundry and dry-cleaning services are treated as additional expenses unless included in specific suite tiers.",
      recommendation: "Take advantage of complimentary self-service launderettes on select ships or verify higher-category suite laundry perks.",
      reason: "Longer voyages and world cruises often feature special promotions or suite inclusions for valet dry cleaning.",
      whyFits: [
        "Complimentary self-service launderettes (select ships)",
        "Valet full-service laundry",
        "Professional dry cleaning",
        "Same-day pressing services"
      ],
      image: LaundryValetImg,
      placeholderLabel: "SEABOURN LAUNDRY & VALET SERVICES"
    },
    {
      name: "Spa Treatments & Salon",
      tagline: "Category 07 • Signature Upgrades",
      quote: "Access to onboard fitness and pools is included, while personalized spa therapies are billed individually.",
      recommendation: "Pre-book oceanfront cabanas, thermal suite day passes, and tailored massage therapies before embarking.",
      reason: "Seabourn partners with world-class wellness experts to provide deeply restorative body therapies and beauty salon care.",
      whyFits: [
        "Thermal suites & aroma steam rooms",
        "Hot stone & ocean massage therapies",
        "Holistic wellness & facial treatments",
        "Full-service hair and nail salon"
      ],
      image: SpaTreatmentsImg,
      placeholderLabel: "SEABOURN SPA & WELLNESS"
    },
    {
      name: "Shore Excursions & Ventures",
      tagline: "Category 08 • Optional Shore Adventures",
      quote: "While expedition Zodiac cruises are often included on expedition ships, standard ocean shore excursions carry individual pricing.",
      recommendation: "Mix curated UNESCO partner tours with independent port exploration to optimize your shoreside budget.",
      reason: "Seabourn's small ships dock closer to historic town centers, allowing easy walk-off exploration alongside premium private tours.",
      whyFits: [
        "UNESCO World Heritage partner tours",
        "Bespoke private guide & car services",
        "Ventures by Seabourn active excursions",
        "Exclusive evening cultural access"
      ],
      image: ShoreExcursionsImg,
      placeholderLabel: "SEABOURN SHORE EXCURSIONS"
    }
  ];

  // 10. What Is NOT Included for MistakesGrid
  const notIncludedMistakesItems = pageData.notIncluded.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item.title,
    description: item.text
  }));

  // 11. Comparison Table Data
  const comparisonTableData = {
    title: pageData.comparisonTable.title,
    headers: [pageData.comparisonTable.includedHeading, pageData.comparisonTable.additionalHeading],
    rows: pageData.comparisonTable.rows
  };

  // 12. Mainstream Differences for FeatureGrid (No images)
  const mainstreamFeatureGridItems = pageData.vsMainstream.items.map((item) => ({
    title: item.term,
    description: item.desc,
    tags: ["Included on Seabourn", "No Extra Add-on"],
    highlight: `Eliminates daily surcharges for ${item.term.toLowerCase()}.`
  }));

  // 13. Other Luxury Lines Comparison for ProsConsCards (Preserving all 11 items & takeaways)
  const luxuryComparisonCheckpoints = pageData.vsLuxury.items.map((item) => `Compare ${item.toLowerCase()} line-by-line across lines`);

  const luxuryEvaluationGuidance = [
    "Compare line-by-line vs Silversea, Regent Seven Seas, Scenic, Crystal, and Explora Journeys.",
    "Examine whether shore excursions are bundled into the base fare or offered à la carte.",
    "Assess whether airfare, airport transfers, and pre-cruise luxury hotels are included in promotional fares.",
    "Check beverage and dining policies for premium specialty restaurant access and vintage open-bar pours.",
    "Verify whether all-suite layouts, Wi-Fi connectivity, and onboard gratuities are truly all-inclusive.",
    pageData.vsLuxury.takeaway
  ];

  // 15. Maximize Value Tips for ExpertRulesGrid (Image-Free UI Component)
  const maximizeValueRules = pageData.maximizeValue.tips.map((tip) => ({
    title: tip.title,
    description: tip.text
  }));

  // 16. FAQ Data for FAQAccordion
  const faqAccordionData = {
    title: "Frequently Asked Questions",
    subtitle: "Everything travelers need to know about what is included on a Seabourn cruise.",
    questions: pageData.faq.map((item) => ({
      question: item.question,
      answer: item.answer
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(pageData.schema)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={HeroImage}
        badge={pageData.hero.eyebrow}
        secondaryCtaText={pageData.hero.ctaText || "Contact a Specialist"}
        secondaryCtaLink={pageData.hero.ctaLink || "/contact"}
      />

      <div id="content">
        {/* ─── 2. QUICK ANSWER: WHAT IS INCLUDED (InclusionCheckerGrid) ─── */}
        <InclusionCheckerGrid
          eyebrow={pageData.quickAnswer.eyebrow}
          title={pageData.quickAnswer.title}
          subtitle={pageData.quickAnswer.intro}
          inclusionsTitle={pageData.quickAnswer.includedTitle}
          exclusionsTitle={pageData.quickAnswer.additionalTitle}
          inclusions={pageData.quickAnswer.included}
          exclusions={pageData.quickAnswer.additional}
        />

      {/* ─── 3. IS SEABOURN ALL-INCLUSIVE? (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.allInclusive.eyebrow}
        heading={pageData.allInclusive.title}
        paragraphs={[
          ...pageData.allInclusive.paragraphs,
          `${pageData.allInclusive.formulaTitle} ${pageData.allInclusive.formula.join(' + ')}.`
        ]}
        primaryImage={IsAllInclusiveImg}
        secondaryImage={ChampagneIncludedImg}
      />

      {/* ─── 4. CATEGORY 01: SEABOURN DINING (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.dining.title}
        subtitle={`${pageData.dining.lead} ${pageData.dining.body} Featured venues: ${pageData.dining.venueChips.join(', ')}.`}
        items={diningVenueItems}
      />

      {/* ─── 5. CATEGORY 02: PREMIUM SPIRITS & FINE WINES (EditorialFeatureShowcase) ─── */}
      <EditorialFeatureShowcase
        title={pageData.beverages.title}
        subtitle={`${pageData.beverages.lead} ${pageData.beverages.body}`}
        image={PremiumSpiritsImg}
        features={beverageFeaturesList}
      />

      {/* ─── MID-PAGE CTA 1: FULL SEABOURN EXPERIENCE ─── */}
      <CenterCTA
        title={pageData.cta1.title}
        description={pageData.cta1.description}
        buttonText={pageData.cta1.buttonText}
        buttonLink={pageData.cta1.buttonLink}
        theme="dark"
      />

      {/* ─── VIDEO SHOWCASE 1: WHAT IS INCLUDED ON SEABOURN ─── */}
      <VideoEmbed
        data={{
          youtubeId: "uVjz2VofTLo",
          title: "What Is Included on a Seabourn Cruise? All-Inclusive Luxury at Sea",
          description: "Explore Seabourn's comprehensive all-inclusive luxury model: all-suite oceanfront accommodations, open-seating gourmet dining, complimentary fine wines and spirits, caviar service, and onboard gratuities."
        }}
      />

      {/* ─── 6. CATEGORIES 03-06: CHAMPAGNE, BAR, CAVIAR & WI-FI (LuxuryZigZagShowcase) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.groupedAmenities.title}
        subtitle="Explore the signature all-inclusive amenities that distinguish Seabourn's boutique yacht luxury from the moment you step onboard."
        items={groupedAmenitiesZigZagItems}
      />

      {/* ─── 7. CATEGORY 07: GRATUITIES ARE INCLUDED (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.gratuities.eyebrow}
        heading={pageData.gratuities.title}
        paragraphs={[
          pageData.gratuities.lead,
          pageData.gratuities.intro,
          `${pageData.gratuities.whyTitle} ${pageData.gratuities.whyIntro} ${pageData.gratuities.highlights.join(', ')}.`,
          pageData.gratuities.outro
        ]}
        primaryImage={GratuitiesAreImg}
      />

      {/* ─── 8. CATEGORY 08: ENTERTAINMENT IS INCLUDED (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={pageData.entertainment.title}
        items={entertainmentItems}
      />

      {/* ─── 9. CATEGORY 09: SEABOURN CONVERSATIONS (EditorialFeatureShowcase) ─── */}
      <EditorialFeatureShowcase
        title={pageData.conversations.title}
        subtitle={`${pageData.conversations.lead} ${pageData.conversations.body}`}
        image={SeabournConversationsImg}
        features={conversationFeaturesList}
      />

      {/* ─── MID-PAGE CTA 2: SHORE EXPERIENCE CURATION ─── */}
      <CenterCTA
        title={pageData.cta2.title}
        description={pageData.cta2.description}
        buttonText={pageData.cta2.buttonText}
        buttonLink={pageData.cta2.buttonLink}
        theme="dark"
      />

      {/* ─── 10. CATEGORY BY CATEGORY: IN DETAIL (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.detailInclusions.title}
        subtitle={pageData.detailInclusions.intro}
        items={detailInclusionItems}
      />

      {/* ─── 11. SHORE EXCURSIONS & VENTURES (ValueBreakdownSplit) ─── */}
      <ValueBreakdownSplit
        title={pageData.shoreVentures.title}
        subtitle={pageData.shoreVentures.intro}
        includedTitle="Seabourn Shore Excursion Portfolio"
        extrasTitle="Ventures by Seabourn Active Expeditions"
        included={shoreExcursionIncludedItems}
        extras={venturesIncludedItems}
      />

      {/* ─── 12. MORE INCLUSIONS: PART 1 (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.moreInclusionsPart1.title}
        subtitle="Detailed answers regarding in-suite room service, specialty restaurant access, premium alcoholic beverages, and welcome Champagne."
        items={moreInclusionsPart1Items}
      />

      {/* ─── 13. ADDITIONAL AMENITIES & EXCLUSIONS (TravelerProfileTabs) ─── */}
      <TravelerProfileTabs
        title={pageData.moreInclusionsPart2.title}
        subtitle={pageData.moreInclusionsPart2.eyebrow}
        profiles={additionalAmenitiesProfiles}
      />

      {/* ─── MID-PAGE CTA 3: COMPARE TOTAL VALUE ─── */}
      <CenterCTA
        title={pageData.cta3.title}
        description={pageData.cta3.description}
        buttonText={pageData.cta3.buttonText}
        buttonLink={pageData.cta3.buttonLink}
        theme="gold"
      />

      {/* ─── 14. WHAT IS NOT INCLUDED (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.notIncluded.title}
        items={notIncludedMistakesItems}
      />

      {/* ─── 15. INCLUSIONS VS ADDITIONAL COSTS TABLE (ComparisonTable) ─── */}
      <ComparisonTable data={comparisonTableData} />

      {/* ─── 16. HOW INCLUSIONS AFFECT TRUE CRUISE COST (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.trueCost.eyebrow}
        heading={pageData.trueCost.title}
        paragraphs={[
          pageData.trueCost.intro,
          `${pageData.trueCost.noteQuestion} ${pageData.trueCost.noteQuestionText}`,
          pageData.trueCost.noteOutro
        ]}
        primaryImage={TrueCostImg}
      />

      {/* ─── 17. SEABOURN VS MAINSTREAM CRUISE LINES (FeatureGrid - Image Free) ─── */}
      <FeatureGrid
        title={pageData.vsMainstream.title}
        subtitle={pageData.vsMainstream.intro}
        features={mainstreamFeatureGridItems}
        bgClass="bg-slate-50"
      />

      {/* ─── MID-PAGE CTA 4: TRIP ESTIMATE ─── */}
      <CenterCTA
        title={pageData.cta4.title}
        description={pageData.cta4.description}
        buttonText={pageData.cta4.buttonText}
        buttonLink={pageData.cta4.buttonLink}
        theme="dark"
      />

      {/* ─── 18. SEABOURN VS OTHER LUXURY LINES (ProsConsCards) ─── */}
      <ProsConsCards
        title={pageData.vsLuxury.title}
        prosTitle="11 Line-by-Line Comparison Checkpoints"
        consTitle="Strategic Value Rule & Decision Guidance"
        type="compare"
        bestFor={luxuryComparisonCheckpoints}
        notBestFor={luxuryEvaluationGuidance}
        bottomNote={pageData.vsLuxury.takeaway}
      />

      {/* ─── 19. WHAT MAKES THE MODEL DIFFERENT (AsymmetricStoryIntro) ─── */}
      <AsymmetricStoryIntro
        eyebrow={pageData.modelDifferent.eyebrow}
        heading={pageData.modelDifferent.title}
        paragraphs={[
          pageData.modelDifferent.paragraphs[0],
          `${pageData.modelDifferent.paragraphs[1]} ${pageData.modelDifferent.closingWithout}`,
          pageData.modelDifferent.closingValue
        ]}
        highlights={pageData.modelDifferent.formula.map(
          (item) => `${pageData.modelDifferent.cardLabel} ${item}`
        )}
        image1={EnjoyDinnerImg}
        image2={RelaxInSuiteImg}
        image1Placeholder="SEABOURN ALL-INCLUSIVE LUXURY"
        image2Placeholder="EFFORTLESS SHIPBOARD HOSPITALITY"
        ctaText="Plan Your Seabourn Voyage"
        ctaLink="/contact"
      />

      {/* ─── 20. HOW MUCH TO BUDGET BEYOND THE FARE (GenericChecklistCards - Image Free) ─── */}
      <GenericChecklistCards
        title={pageData.budgetTiers.title}
        subtitle={pageData.budgetTiers.intro}
        cards={pageData.budgetTiers.tiers}
      />

      {/* ─── 21. HOW TO MAXIMIZE SEABOURN VALUE (ExpertRulesGrid - Image Free) ─── */}
      <ExpertRulesGrid
        title={pageData.maximizeValue.title}
        subtitle={pageData.maximizeValue.eyebrow}
        rules={maximizeValueRules}
      />

      {/* ─── 22. IS SEABOURN WORTH THE MONEY? (EditorialIntroSection with Image) ─── */}
      <EditorialIntroSection
        eyebrow={pageData.worthIt.eyebrow}
        heading={pageData.worthIt.title}
        paragraphs={[
          `${pageData.worthIt.intro} ${pageData.worthIt.text}`,
          `${pageData.worthIt.formulaTitle} ${pageData.worthIt.formula.join(', ')}.`,
          pageData.worthIt.valueDesc
        ]}
        highlights={pageData.worthIt.formula.map(item => `Included: ${item}`)}
        image={HeroImage}
        placeholderLabel="SEABOURN CRUISE VALUE PROPOSITION"
        badgeTitle="True Luxury Value"
        badgeDescription="Combines all-suite living, fine dining, premium drinks, caviar, Wi-Fi, and crew gratuities."
      />

    

      {/* ─── 23. ANGELA HUGHES LUXURY AUTHORITY BOX (ExpertCredentials) ─── */}
      <ExpertCredentials
        title="Seabourn Ultra-Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel"
        authorName="Angela Hughes"
        image={AboutImage}
        badge="SEABOURN CRUISE SPECIALIST"
        experienceBadge="40+ YEARS EXPERIENCE"
        authorityBoxTitle="ANGELA HUGHES LUXURY AUTHORITY"
        authoritySubtitle="Worldwide Luxury Cruise, Safari & Expedition Specialist"
        paragraphs={[
          "Angela Hughes brings over four decades of hands-on expertise planning ultra-luxury ocean voyages and expedition cruises worldwide. Having explored 121+ countries across all seven continents, Angela provides unbiased guidance on suite selection, itinerary pacing, and all-inclusive luxury value.",
          "As CEO of Trips & Ships Luxury Travel and a member of the Travel Leaders Network Advisory Board, Angela works directly with Seabourn executive leadership to ensure our travelers receive exclusive amenities, preferred suite locations, and seamless personalized booking support."
        ]}
        credentials={pageData.authority.credentials}
        quote="Seabourn's inclusive philosophy provides peace of mind where genuine luxury and effortless hospitality replace constant nickel-and-diming."
        quoteSubtitle="On Seabourn Value"
        ctaText="Plan Your Seabourn Voyage With Angela"
        ctaLink="/contact"
      />

      {/* ─── 24. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
      <FAQAccordion data={faqAccordionData} />

      {/* ─── 26. FINAL VERDICT: WHAT IS INCLUDED (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.finalVerdict.title}
        description={`${pageData.finalVerdict.paragraphs[0]} ${pageData.finalVerdict.paragraphs[1]}`}
        buttonText={pageData.finalVerdict.buttonText}
        buttonLink={pageData.finalVerdict.buttonLink}
        image={FinalVerdictImg}
        theme="dark"
      />
      </div>
    </div>
  );
};

export default SeabournWhatsIncluded;