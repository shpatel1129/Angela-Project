import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
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
  MessageCircle,
  Users,
  Award,
  AlertCircle,
  Star,
  MapPin,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import SmartSpendingSplit from '@/components/ui/SmartSpendingSplit';
import MistakesGrid from '@/components/ui/MistakesGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import VideoEmbed from '@/components/ui/VideoEmbed';

// Assets
import AboutImage from "../../assets/AboutAngela.jpeg";

// Seabourn Cruises SEO-Optimized Image Assets
import SeabournHeroImg from "../../assets/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
import SeabournOverviewImg from "../../assets/SeabournCruises/seabourn-ultra-luxury-yacht-ship-overview.jpg";
import SeabournSuitesImg from "../../assets/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
import SeabournSmallShipsImg from "../../assets/SeabournCruises/seabourn-small-luxury-ships-intimate-experience.jpg";
import SeabournAllSuiteImg from "../../assets/SeabournCruises/seabourn-oceanfront-luxury-veranda-suites.jpg";
import SeabournPersonalizedServiceImg from "../../assets/SeabournCruises/seabourn-intuitive-personalized-luxury-service.jpg";
import SeabournFineDiningImg from "../../assets/SeabournCruises/seabourn-gourmet-fine-dining-culinary-experience.jpg";
import SeabournWorldwideDestinationsImg from "../../assets/SeabournCruises/seabourn-worldwide-destination-focused-itineraries.jpg";
import SeabournExpeditionImg from "../../assets/SeabournCruises/seabourn-purpose-built-ultra-luxury-expedition-cruises.jpg";
import SeabournOceanCruisesImg from "../../assets/SeabournCruises/seabourn-ocean-cruises-luxury-yacht-experience.jpg";
import SeabournQuestImg from "../../assets/SeabournCruises/seabourn-quest-ocean-luxury-cruise-ship.jpg";
import SeabournEncoreImg from "../../assets/SeabournCruises/seabourn-encore-modern-luxury-cruise-ship.jpg";
import SeabournOvationImg from "../../assets/SeabournCruises/seabourn-ovation-ultra-luxury-cruise-ship.jpg";
import SeabournVentureImg from "../../assets/SeabournCruises/seabourn-venture-polar-luxury-expedition-ship.jpg";
import SeabournPursuitImg from "../../assets/SeabournCruises/seabourn-pursuit-remote-luxury-expedition-ship.jpg";
import SeabournDining1Img from "../../assets/SeabournCruises/seabourn-the-restaurant-primary-fine-dining.jpg";
import SeabournDining2Img from "../../assets/SeabournCruises/seabourn-the-colonnade-casual-regional-dining.jpg";
import SeabournDining3Img from "../../assets/SeabournCruises/seabourn-in-suite-private-veranda-dining-service.jpg";
import SeabournOnboardLifeImg from "../../assets/SeabournCruises/seabourn-onboard-luxury-lifestyle-all-inclusive-amenities.jpg";
import SeabournMedImg from "../../assets/SeabournCruises/seabourn-mediterranean-cruise-amalfi-coast-italy.jpg";
import SeabournAlaskaImg from "../../assets/SeabournCruises/seabourn-alaska-inside-passage-glacier-wilderness-cruise.jpeg";
import SeabournJapanImg from "../../assets/SeabournCruises/seabourn-japan-autumn-foliage-cultural-cruise.jpg";
import SeabournNorthEuropeImg from "../../assets/SeabournCruises/seabourn-northern-europe-scandinavia-baltic-cruise.jpg";
import SeabournAntarcticaImg from "../../assets/SeabournCruises/seabourn-antarctica-luxury-polar-expedition-cruise.webp";
import SeabournArcticImg from "../../assets/SeabournCruises/seabourn-arctic-northwest-passage-polar-expedition-cruise.webp";
import SeabournKimberleyImg from "../../assets/SeabournCruises/seabourn-kimberley-australia-coastal-wilderness-expedition.jpg";
import SeabournShoreExcursionsImg from "../../assets/SeabournCruises/seabourn-curated-shore-excursions-unesco-tours.jpg";
import SeabournVenturesImg from "../../assets/SeabournCruises/ventures-by-seabourn-guided-zodiac-kayak-expeditions.jpg";
import SeabournConversationsImg from "../../assets/SeabournCruises/seabourn-conversations-onboard-expert-lectures-enrichment.jpg";
import SeabournWellnessImg from "../../assets/SeabournCruises/seabourn-mindful-living-wellness-spa-relaxation.jpg";
import SeabournCouplesImg from "../../assets/SeabournCruises/seabourn-luxury-cruise-for-couples-honeymoons-anniversaries.jpg";
import SeabournCulturalImg from "../../assets/SeabournCruises/seabourn-cultural-travelers-heritage-exploration.jpg";
import SeabournFamiliesImg from "../../assets/SeabournCruises/seabourn-luxury-family-multigenerational-cruises.jpg";
import SeabournSoloImg from "../../assets/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
import SeabournWorthItImg from "../../assets/SeabournCruises/is-seabourn-worth-the-price-luxury-cruise-value-review.jpg";
import SeabournVsSilverseaImg from "../../assets/SeabournCruises/seabourn-vs-silversea-luxury-cruise-line-comparison.jpg";
import SeabournVsRegentImg from "../../assets/SeabournCruises/seabourn-vs-regent-seven-seas-all-inclusive-comparison.jpg";
import SeabournVsExploraImg from "../../assets/SeabournCruises/seabourn-vs-explora-journeys-modern-ocean-luxury-comparison.jpg";
import SeabournVsScenicImg from "../../assets/SeabournCruises/seabourn-vs-scenic-ocean-and-expedition-cruise-comparison.webp";
import SeabournFleetImg from "../../assets/SeabournCruises/seabourn-complete-fleet-overview-and-ships-guide.jpg";
import SeabournCtaImg from "../../assets/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";

const SeabournCruises = () => {

  // 1. Map 7 Why Choose Cards for GrandBentoFeatures
  const whyChooseImages = [
    { image: SeabournSmallShipsImg, alt: "Seabourn intimate boutique luxury cruise ship sailing into port" },
    { image: SeabournAllSuiteImg, alt: "Seabourn all-suite oceanfront luxury accommodations with private balcony" },
    { image: SeabournPersonalizedServiceImg, alt: "Intuitive personalized luxury service and hospitality onboard Seabourn" },
    { image: SeabournFineDiningImg, alt: "Seabourn gourmet fine dining culinary dish presentation" },
    { image: SeabournDining2Img, alt: "Complimentary fine wines and premium spirits served onboard Seabourn" },
    { image: SeabournWorldwideDestinationsImg, alt: "Seabourn destination-focused worldwide itineraries and boutique harbors" },
    { image: SeabournExpeditionImg, alt: "Seabourn purpose-built luxury expedition ship navigating polar ice" }
  ];

  const whyChooseBentoFeatures = pageData.whyChoose.cards.map((card, idx) => ({
    title: card.title,
    description: card.description,
    icon: card.icon,
    image: whyChooseImages[idx]?.image || null,
    alt: whyChooseImages[idx]?.alt || card.title,
    placeholderLabel: card.title
  }));

  // 2. Data for Ocean vs Expedition Faceoff Component
  const oceanVsExpeditionData = {
    title: pageData.oceanVsExpedition.title,
    regent: {
      title: pageData.oceanVsExpedition.ocean.title,
      description: `${pageData.oceanVsExpedition.ocean.subtitle} ${pageData.oceanVsExpedition.ocean.lead}`,
      features: pageData.oceanVsExpedition.ocean.features
    },
    viking: {
      title: pageData.oceanVsExpedition.expedition.title,
      description: `${pageData.oceanVsExpedition.expedition.subtitle} ${pageData.oceanVsExpedition.expedition.lead}`,
      features: pageData.oceanVsExpedition.expedition.features
    }
  };

  // 3. Map 5 Fleet Ships for HighlightsSplit
  const fleetShipImages = [
    { image: SeabournQuestImg, alt: "Seabourn Quest ocean luxury cruise ship sailing the coastline" },
    { image: SeabournEncoreImg, alt: "Seabourn Encore modern luxury cruise ship at sea" },
    { image: SeabournOvationImg, alt: "Seabourn Ovation ultra-luxury small cruise vessel in harbor" },
    { image: SeabournVentureImg, alt: "Seabourn Venture purpose-built polar luxury expedition ship" },
    { image: SeabournPursuitImg, alt: "Seabourn Pursuit expedition cruise ship navigating remote waterways" }
  ];

  const fleetHighlightsItems = pageData.ships.fleet.map((ship, idx) => ({
    title: `${ship.name} (${ship.meta})`,
    description: ship.desc,
    image: fleetShipImages[idx]?.image || null,
    alt: fleetShipImages[idx]?.alt || `${ship.name} - Seabourn luxury ${ship.meta.toLowerCase()} cruise ship`,
    icon: "Ship",
    bulletPoints: ship.best.map((tag) => `Best For: ${tag}`)
  }));

  // 4. Map Suites for EditorialFeatureShowcase
  const suiteFeaturesList = [
    {
      title: "All-Suite Oceanfront Accommodations",
      description: pageData.suites.intro
    },
    {
      title: "Core Veranda Features",
      description: `Every suite offers: ${pageData.suites.features.join(', ')}.`
    },
    {
      title: "Upgrade Value & Strategy",
      description: `${pageData.suites.upgradeNarrative} ${pageData.suites.bestStrategy}`
    },
    {
      title: pageData.suites.wintergarden.title,
      description: `${pageData.suites.wintergarden.description} Key features include: ${pageData.suites.wintergarden.features.join(', ')}. ${pageData.suites.wintergarden.conclusion}`
    }
  ];

  // 5. Map 3 Dining Venues for ThreeColumnGrid
  const diningImages = [
    { image: SeabournDining1Img, alt: "The Restaurant - Seabourn open-seating primary fine dining room" },
    { image: SeabournDining2Img, alt: "The Colonnade - Seabourn casual and regional indoor-outdoor dining venue" },
    { image: SeabournDining3Img, alt: "Seabourn in-suite course-by-course private veranda dining service" }
  ];

  const diningItems = pageData.dining.cards.map((venue, idx) => ({
    title: venue.title,
    description: venue.description,
    image: diningImages[idx]?.image || null,
    alt: diningImages[idx]?.alt || venue.title,
    placeholderLabel: venue.title
  }));

  // 6. Map Inclusions for ValueBreakdownSplit
  const includedItems = pageData.includes.categories.slice(0, 4).map((cat) => ({
    title: cat.title,
    description: cat.items.join(' • ')
  }));

  const extraItems = [
    ...pageData.includes.categories.slice(4).map((cat) => ({
      title: cat.title,
      description: cat.items.join(' • ')
    })),
    {
      title: "Ventures by Seabourn Note",
      description: pageData.includes.importantDistinction
    }
  ];

  // 7. Map 7 Worldwide Destinations for TravelerProfileTabs
  const destinationImages = [
    { image: SeabournMedImg, alt: "Seabourn Mediterranean cruise sailing Amalfi Coast and Italian Riviera" },
    { image: SeabournAlaskaImg, alt: "Seabourn Alaska Inside Passage glacier and scenic wilderness cruise" },
    { image: SeabournJapanImg, alt: "Seabourn Japan cultural heritage and autumn foliage cruise" },
    { image: SeabournNorthEuropeImg, alt: "Seabourn Northern Europe Scandinavian fjords and Baltic capitals cruise" },
    { image: SeabournAntarcticaImg, alt: "Seabourn Antarctica luxury expedition cruise iceberg reflection" },
    { image: SeabournArcticImg, alt: "Seabourn Arctic and Northwest Passage remote polar expedition voyage" },
    { image: SeabournKimberleyImg, alt: "Seabourn Kimberley Australia remote coastal wilderness and tidal waterfall expedition" }
  ];

  const destinationProfiles = pageData.destinations.items.map((dest, idx) => ({
    name: dest.title,
    tagline: dest.category,
    quote: dest.desc,
    recommendation: dest.subtitle,
    reason: dest.best ? `Best for: ${dest.best}` : '',
    whyFits: dest.listItems,
    image: destinationImages[idx]?.image || null,
    alt: destinationImages[idx]?.alt || `${dest.title} Seabourn Cruise Destination`,
    placeholderLabel: `${dest.title.toUpperCase()} SEABOURN CRUISE`
  }));

  // 8. Map 3 Shore & Enrichment Programs for ThreeColumnGrid
  const experienceImages = [
    { image: SeabournShoreExcursionsImg, alt: "Curated Seabourn shore excursions and UNESCO World Heritage destination tours" },
    { image: SeabournVenturesImg, alt: "Ventures by Seabourn guided Zodiac tours and sea kayaking expeditions" },
    { image: SeabournConversationsImg, alt: "Seabourn Conversations onboard expert enrichment lectures and guest speaker series" }
  ];

  const experienceItems = pageData.experiences.cards.map((exp, idx) => ({
    title: exp.title,
    description: `${exp.description} ${exp.listTitle} ${exp.tags.join(', ')}. ${exp.footer}`,
    image: experienceImages[idx]?.image || null,
    alt: experienceImages[idx]?.alt || exp.title,
    placeholderLabel: exp.title
  }));

  // 9. Map 5 Atmosphere Keywords & Comparisons for SmartSpendingSplit
  const atmosphereSpendMore = pageData.atmosphere.chooseItems.map((item) => ({
    title: item,
    description: `A core Seabourn pillar ensuring ${item.toLowerCase()} and intimate small-ship luxury.`
  }));

  const atmosphereSpendLess = pageData.atmosphere.unlikelyItems.map((item) => ({
    title: item,
    description: `Seabourn intentionally avoids ${item.toLowerCase()} in favor of an unhurried, boutique atmosphere.`
  }));

  // 10. Map 5 Traveler Personas for GrandBentoFeatures
  const bestForImages = [
    { image: SeabournCouplesImg, alt: "Couples enjoying romantic Seabourn luxury ocean cruise vacation" },
    { image: SeabournPersonalizedServiceImg, alt: "Discerning experienced luxury travelers enjoying bespoke Seabourn service" },
    { image: SeabournExpeditionImg, alt: "Adventure travelers exploring polar wildlife and ice on Seabourn expedition" },
    { image: SeabournCulturalImg, alt: "Cultural travelers exploring historic architecture and local traditions" },
    { image: SeabournSmallShipsImg, alt: "Luxury cruisers enjoying intimate boutique small ship atmosphere" }
  ];

  const bestForPersonaFeatures = pageData.bestFor.personas.map((persona, idx) => ({
    title: persona.title,
    description: `Tailored for: ${persona.items.join(', ')}.`,
    icon: persona.icon,
    image: bestForImages[idx]?.image || null,
    alt: bestForImages[idx]?.alt || persona.title,
    placeholderLabel: persona.title
  }));

  // 11. Map 7 Not Fit Items for MistakesGrid
  const notFitMistakesItems = pageData.notFit.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item,
    description: `Travelers seeking ${item.toLowerCase()} will find large commercial resort lines more suitable than Seabourn's quiet yacht setting.`
  }));

  // 12. Map 3 Q&A Deep Dives for LuxuryZigZagShowcase
  const qaZigZagItems = [
    {
      title: pageData.qaDeepDives.families.title,
      category: pageData.qaDeepDives.families.eyebrow,
      description: `${pageData.qaDeepDives.families.intro} ${pageData.qaDeepDives.families.cardTitle} ${pageData.qaDeepDives.families.appreciatedItems.join(', ')} ${pageData.qaDeepDives.families.cardFooter}`,
      bestFor: pageData.qaDeepDives.families.warning,
      image: SeabournFamiliesImg,
      alt: "Is Seabourn good for families - multigenerational luxury cruise review",
      placeholderLabel: "SEABOURN FAMILY TRAVEL FIT"
    },
    {
      title: pageData.qaDeepDives.solo.title,
      category: pageData.qaDeepDives.solo.eyebrow,
      description: `${pageData.qaDeepDives.solo.intro} Solo travelers should evaluate: ${pageData.qaDeepDives.solo.compareItems.join(', ')} ${pageData.qaDeepDives.solo.cardFooter}`,
      bestFor: "Ideal for social solo guests seeking boutique yacht hospitality with conversational dining.",
      image: SeabournSoloImg,
      alt: "Seabourn solo traveler luxury cruise guide and single supplement insights",
      placeholderLabel: "SEABOURN SOLO CRUISING"
    },
    {
      title: pageData.qaDeepDives.worthIt.title,
      category: pageData.qaDeepDives.worthIt.eyebrow,
      description: `${pageData.qaDeepDives.worthIt.intro} ${pageData.qaDeepDives.worthIt.formulaTitle} ${pageData.qaDeepDives.worthIt.formulaTerms.join(' + ')}. ${pageData.qaDeepDives.worthIt.valueDesc}`,
      bestFor: pageData.qaDeepDives.worthIt.verdict,
      image: SeabournWorthItImg,
      alt: "Is Seabourn cruise worth the money - luxury travel cost and value evaluation",
      placeholderLabel: "SEABOURN VALUE EQUATION"
    }
  ];

  // 13. Map 4 Line Comparisons for ThreeColumnGrid
  const vsOtherLinesImages = [
    { image: SeabournVsSilverseaImg, alt: "Seabourn vs Silversea luxury cruise comparison review" },
    { image: SeabournVsRegentImg, alt: "Seabourn vs Regent Seven Seas all-inclusive cruise comparison" },
    { image: SeabournVsExploraImg, alt: "Seabourn vs Explora Journeys modern ocean luxury comparison" },
    { image: SeabournVsScenicImg, alt: "Seabourn vs Scenic ocean and expedition cruise comparison" }
  ];

  const vsOtherLinesItems = pageData.vsOtherLines.lines.map((item, idx) => ({
    title: item.name,
    description: item.text,
    image: vsOtherLinesImages[idx]?.image || null,
    alt: vsOtherLinesImages[idx]?.alt || item.name,
    placeholderLabel: item.name
  }));

  // 14. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Everything travelers need to know before booking a Seabourn luxury ocean or expedition cruise.",
    items: pageData.faqs.map((faq: any) => ({
      question: faq.q || faq.question,
      answer: faq.a || faq.answer
    }))
  };

  // 15. Seabourn Curated Guides Hub mapping all Seabourn related pages/routes from App.jsx
  const seabournCuratedGuides = [
    {
      title: "Seabourn Fleet & Ship Profiles",
      category: "Fleet & Vessels",
      description: "Explore detailed ship guides, suite plans, and onboard features across Seabourn's ocean and expedition fleet.",
      image: SeabournFleetImg,
      alt: "Seabourn complete fleet overview and ship profiles guide",
      badgeCount: 6,
      links: [
        { label: "Seabourn Fleet Overview", url: "/seabourn-cruises/ships" },
        { label: "Seabourn Venture Guide", url: "/seabourn-cruises/ships/seabourn-venture" },
        { label: "Seabourn Pursuit Guide", url: "/seabourn-cruises/ships/seabourn-pursuit" },
        { label: "Seabourn Ovation Guide", url: "/seabourn-cruises/ships/seabourn-ovation" },
        { label: "Seabourn Encore Guide", url: "/seabourn-cruises/ships/seabourn-encore" },
        { label: "Seabourn Quest Guide", url: "/seabourn-cruises/ships/seabourn-quest" }
      ],
      mainUrl: "/seabourn-cruises/ships"
    },
    {
      title: "Suites, Dining & Onboard Life",
      category: "Onboard Luxury",
      description: "Discover all oceanfront veranda suites, complimentary caviar, fine dining venues, and signature shoreside events.",
      image: SeabournSuitesImg,
      alt: "Seabourn suites dining caviar and onboard luxury lifestyle",
      badgeCount: 6,
      links: [
        { label: "Seabourn Suites Guide", url: "/seabourn-cruises/suites" },
        { label: "Seabourn Dining & Menus", url: "/seabourn-cruises/dining" },
        { label: "What Is Included on Seabourn", url: "/seabourn-cruises/whats-included" },
        { label: "Signature Experiences & Caviar", url: "/seabourn-cruises/signature-experiences" },
        { label: "Shore Excursions & Ventures", url: "/seabourn-cruises/shore-excursions" },
        { label: "Seabourn Dress Code Guide", url: "/seabourn-cruises/dress-code" }
      ],
      mainUrl: "/seabourn-cruises/suites"
    },
    {
      title: "Worldwide Destinations & Expeditions",
      category: "Destinations",
      description: "Global sailing itineraries from Mediterranean harbors to polar expeditions in Antarctica, Arctic, and the Kimberley.",
      image: SeabournWorldwideDestinationsImg,
      alt: "Seabourn worldwide cruise destinations and polar expedition itineraries",
      badgeCount: 8,
      links: [
        { label: "Seabourn Expeditions Overview", url: "/seabourn-cruises/expeditions" },
        { label: "Antarctica Cruises Guide", url: "/seabourn-cruises/antarctica" },
        { label: "Arctic & Greenland Expeditions", url: "/seabourn-cruises/arctic-greenland" },
        { label: "Kimberley Australia Cruises", url: "/seabourn-cruises/kimberley" },
        { label: "Mediterranean Seabourn Cruises", url: "/seabourn-cruises/mediterranean" },
        { label: "Alaska Inside Passage Cruises", url: "/seabourn-cruises/alaska" },
        { label: "Caribbean Yacht Cruises", url: "/seabourn-cruises/caribbean" },
        { label: "Seabourn World Cruises", url: "/seabourn-cruises/world-cruises" }
      ],
      mainUrl: "/seabourn-cruises/expeditions"
    },
    {
      title: "Luxury Cruise Comparisons",
      category: "Comparisons",
      description: "Compare Seabourn with Silversea, Regent Seven Seas, Explora Journeys, and Azamara to find your ideal luxury match.",
      image: SeabournVsExploraImg,
      alt: "Seabourn compared to Silversea Regent Seven Seas and Explora Journeys",
      badgeCount: 4,
      links: [
        { label: "Seabourn vs Silversea", url: "/seabourn-cruises/seabourn-vs-silversea" },
        { label: "Seabourn vs Regent Seven Seas", url: "/seabourn-cruises/seabourn-vs-regent" },
        { label: "Explora Journeys vs Seabourn", url: "/explora-journeys-vs-seabourn" },
        { label: "Azamara vs Seabourn", url: "/azamara-vs-seabourn" }
      ],
      mainUrl: "/seabourn-cruises/seabourn-vs-silversea"
    },
    {
      title: "Costs, Planning & Club Loyalty",
      category: "Planning & Value",
      description: "Explore Seabourn cruise costs, solo traveler pricing, club loyalty benefits, and why to book with Angela Hughes.",
      image: SeabournWorthItImg,
      alt: "Seabourn cruise pricing costs offers and club loyalty planning",
      badgeCount: 6,
      links: [
        { label: "How Much Does Seabourn Cost?", url: "/seabourn-cruises/cost" },
        { label: "Is Seabourn Worth the Price?", url: "/seabourn-cruises/is-seabourn-worth-it" },
        { label: "Offers & Seabourn Club Loyalty", url: "/seabourn-cruises/offers-loyalty" },
        { label: "Seabourn for Solo Travelers", url: "/seabourn-cruises/solo-travelers" },
        { label: "Seabourn Comprehensive FAQs", url: "/seabourn-cruises/faqs" },
        { label: "Request a Custom Cruise Quote", url: "/seabourn-cruises/request-a-quote" }
      ],
      mainUrl: "/seabourn-cruises/is-seabourn-worth-it"
    }
  ];

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
        backgroundImage={SeabournHeroImg}
        secondaryCtaText="Contact"
        secondaryCtaLink="/contact"
      />

      <div id="content">
      {/* ─── 2. WHAT IS SEABOURN CRUISES (AsymmetricStoryIntro Component) ─── */}
      <AsymmetricStoryIntro
        eyebrow={pageData.whatIs.eyebrow}
        heading={pageData.whatIs.title}
        paragraphs={[
          pageData.whatIs.lead,
          pageData.whatIs.sublead,
          pageData.whatIs.conclusion
        ]}
        highlights={pageData.whatIs.highlights}
        image1={SeabournOverviewImg}
        image2={SeabournSuitesImg}
        ctaText="Explore Seabourn Fleet & Suites"
        ctaLink="/contact"
      />

      {/* ─── 3. WHY LUXURY TRAVELERS CHOOSE SEABOURN (GrandBentoFeatures Component) ─── */}
      <GrandBentoFeatures
        title={pageData.whyChoose.title}
        subtitle={pageData.whyChoose.eyebrow}
        features={whyChooseBentoFeatures}
      />

      {/* ─── 4. OCEAN VS EXPEDITION CRUISES (ShipPhilosophyFaceoff Component) ─── */}
      <ShipPhilosophyFaceoff
        data={oceanVsExpeditionData}
        regentImage={SeabournOceanCruisesImg}
        regentImageAlt="Seabourn classic luxury ocean cruise ship sailing the open sea"
        regentImagePos="object-[center_68%]"
        vikingImage={SeabournExpeditionImg}
        vikingImageAlt="Seabourn purpose-built ultra-luxury expedition ship in polar ice"
        vikingImagePos="object-[center_35%]"
      />

      {/* ─── 5. SEABOURN CRUISE SHIPS (HighlightsSplit Component) ─── */}
      <HighlightsSplit
        title={pageData.ships.title}
        items={fleetHighlightsItems}
      />

      {/* ─── 6. SEABOURN SUITES (EditorialFeatureShowcase Component) ─── */}
      <EditorialFeatureShowcase
        title={pageData.suites.title}
        subtitle={pageData.suites.intro}
        image={SeabournSuitesImg}
        features={suiteFeaturesList}
      />

      {/* ─── MID-PAGE CTA 1: SUITE RESERVATIONS ─── */}
      <CenterCTA
        title="Find Your Perfect Suite at Sea"
        description="Explore Seabourn's all-suite oceanfront configurations. Let Angela Hughes help you select the ideal layout, from spacious veranda suites to premium multi-room Wintergarden accommodations."
        buttonText="Explore Suite Availability & Upgrades"
        buttonLink="/contact"
        image={SeabournSuitesImg}
        theme="dark"
      />

      {/* ─── VIDEO SHOWCASE 1: THE SEABOURN LUXURY EXPERIENCE ─── */}
      <VideoEmbed
        data={{
          youtubeId: "laeY8KoXhXk",
          title: "Experience the Seabourn All-Inclusive Luxury Difference",
          description: "Step inside the intimate world of Seabourn: yacht-like small ships, intuitive personalized hospitality, all-suite oceanfront accommodations, and gourmet open-seating dining."
        }}
      />

      {/* ─── 7. SEABOURN DINING (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.dining.title}
        subtitle={`${pageData.dining.intro} Featured venues: ${pageData.dining.venuesList.join(', ')}.`}
        items={diningItems}
      />

      {/* ─── 8. WHAT IS INCLUDED ON SEABOURN (ValueBreakdownSplit Component) ─── */}
      <ValueBreakdownSplit
        title={pageData.includes.title}
        subtitle={pageData.includes.intro}
        includedTitle="Core Seabourn Inclusions"
        extrasTitle="Voyage Specializations & Notes"
        included={includedItems}
        extras={extraItems}
        image={SeabournOnboardLifeImg}
      />

      {/* ─── 9. SEABOURN DESTINATIONS (TravelerProfileTabs Component) ─── */}
      <TravelerProfileTabs
        title={pageData.destinations.title}
        subtitle={pageData.destinations.eyebrow}
        profiles={destinationProfiles}
      />

      {/* ─── 10. SHORE EXCURSIONS, VENTURES & CONVERSATIONS (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.experiences.title}
        subtitle="Seabourn creates destination depth through curated shore collections, active expedition ventures, and renowned guest speaker enrichment."
        items={experienceItems}
      />

      {/* ─── MID-PAGE CTA 2: SHORE EXPERIENCE CURATION ─── */}
      <CenterCTA
        title="Curate Your Next Shore Experience"
        description="From cultural immersion and UNESCO private tours to active Zodiac adventures, Seabourn offers meaningful shore collections across 400+ worldwide ports."
        buttonText="Design My Custom Seabourn Itinerary"
        buttonLink="/contact"
        image={SeabournShoreExcursionsImg}
        theme="dark"
      />

      {/* ─── 11. SEABOURN WELLNESS (EditorialIntroSplit Component) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.wellness.eyebrow}
        heading={pageData.wellness.title}
        paragraphs={[
          pageData.wellness.intro,
          `${pageData.wellness.featuresTitle} ${pageData.wellness.features.join(', ')}.`,
          `${pageData.wellness.takeaway} ${pageData.wellness.coreFocus}`
        ]}
        primaryImage={SeabournWellnessImg}
        secondaryImage={SeabournOnboardLifeImg}
      />

      {/* ─── 12. ONBOARD ATMOSPHERE & FEEL (SmartSpendingSplit Component) ─── */}
      <SmartSpendingSplit
        title={pageData.atmosphere.title}
        subtitle={`${pageData.atmosphere.intro} Key Atmosphere Tones: ${pageData.atmosphere.keywords.join(' • ')}.`}
        spendMore={atmosphereSpendMore}
        spendLess={atmosphereSpendLess}
      />

      {/* ─── 13. WHO IS SEABOURN BEST FOR? (GrandBentoFeatures Component) ─── */}
      <GrandBentoFeatures
        title={pageData.bestFor.title}
        subtitle={pageData.bestFor.eyebrow}
        features={bestForPersonaFeatures}
      />

      {/* ─── 14. WHO MAY NOT BE A GOOD FIT (MistakesGrid Component) ─── */}
      <MistakesGrid
        title={pageData.notFit.title}
        subtitle={pageData.notFit.intro}
        mistakes={notFitMistakesItems}
      />

      {/* ─── 15. SEABOURN Q&A DEEP DIVES (LuxuryZigZagShowcase Component) ─── */}
      <LuxuryZigZagShowcase
        title="Seabourn Practical Insights & Evaluations"
        subtitle="In-depth analysis for families, solo travelers, and overall vacation value."
        items={qaZigZagItems}
      />

      {/* ─── 16. PROS AND CONS (ProsConsCards Component) ─── */}
      <ProsConsCards
        title={pageData.prosCons.title}
        prosTitle={pageData.prosCons.prosTitle}
        consTitle={pageData.prosCons.consTitle}
        bestFor={pageData.prosCons.pros}
        notBestFor={pageData.prosCons.cons}
        bottomNote="Weighing Seabourn's ultra-luxury yacht atmosphere against personal vacation priorities to ensure the ideal cruise match."
        bgClass="bg-slate-50"
      />

      {/* ─── 17. SEABOURN VS OTHER LUXURY CRUISE LINES (ThreeColumnGrid Component) ─── */}
      <ThreeColumnGrid
        title={pageData.vsOtherLines.title}
        subtitle={pageData.vsOtherLines.intro}
        items={vsOtherLinesItems}
      />

      {/* ─── 18. CURATED SEABOURN GUIDES & INTERLINKING HUB (InteractivePillarHubGrid Component) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated Seabourn Guides & Planning Resources"
          subtitle="Hover over any card below to slide open the guide drawer, access dedicated ship reviews, compare luxury lines, and plan your voyage."
          items={seabournCuratedGuides}
          variant="destination"
        />
      </div>

      {/* ─── VIDEO SHOWCASE 2: EXPEDITIONS & WORLDWIDE DESTINATIONS ─── */}
      <VideoEmbed
        data={{
          youtubeId: "KDn0xhJh-k8",
          title: "Seabourn Expeditions & Worldwide Ocean Journeys",
          description: "Discover extraordinary destinations from polar ice frontiers in Antarctica and the Arctic to unhurried Mediterranean and Caribbean yacht harbors with purpose-built luxury."
        }}
      />

      {/* ─── 19. ANGELA HUGHES LUXURY AUTHORITY (ExpertCredentials Component) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel"
        badge="LUXURY CRUISE EXPERTISE"
        experienceBadge="40+ YEARS EXPERTISE"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Ultra-Luxury Cruise Authority"
        bio="Angela Hughes is an internationally recognized luxury travel advisor and CEO of Trips & Ships Luxury Travel. With more than four decades of high-end travel consulting, over 121 countries visited, and leadership roles on global advisory boards, Angela provides discerning travelers with peerless insight into Seabourn's fleet, suite allocations, and worldwide itineraries."
        credentials={[
          "Over 4 Decades Designing Ultra-Luxury Cruise Vacations",
          "Explored 121+ Countries & Remote Polar Destinations",
          "Recognized Global Ultra-Luxury & Expedition Cruise Authority",
          "CEO & Founder of Trips & Ships Luxury Travel",
          "Specialist in Suite Selection, Ship Comparisons & Private Excursions",
          "Direct Executive Relationships with Seabourn & Top Luxury Lines"
        ]}
        image={AboutImage}
        ctaText="Plan Your Seabourn Voyage With Angela"
        ctaLink="/contact"
      />

      {/* ─── 20. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 21. VERDICT & FINAL CTA (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.verdict.title}
        description={`${pageData.verdict.paragraphs.join(' ')} ${pageData.verdict.recommendation}`}
        buttonText={pageData.verdict.ctaText}
        buttonLink={pageData.verdict.ctaLink}
        image={SeabournCtaImg}
        theme="dark"
      />
      </div>
    </div>
  );
};

export default SeabournCruises;
