import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import AlternatingRiverShowcase from "../../components/ui/AlternatingRiverShowcase";
import CenterCTA from "../../components/ui/CenterCTA";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import ScenicGallery from "../../components/ui/ScenicGallery";
import LuxuryCruiseComparisonTable from "../../components/ui/LuxuryCruiseComparisonTable";
import MistakesGrid from "../../components/ui/MistakesGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";

// Asset Images
import HeroImage from "../../assets/ScenicRiverCruiseShipsSuites/start-planning-scenic-space-ship-cruise-voyage-cta.webp";
import QuickAnswerImage from "../../assets/ScenicRiverCruiseShipsSuites/scenic-river-cruise-ships-and-suites-quick-answer.webp";
import WhichShipIsBestImage from "../../assets/ScenicRiverCruiseShipsSuites/which-scenic-space-ship-is-best-fleet-comparison.webp";
import SunLoungeImage from "../../assets/ScenicRiverCruiseShipsSuites/what-is-the-scenic-sun-lounge-balcony-feature.webp";
import StandardSuiteImage from "../../assets/ScenicRiverCruiseShipsSuites/scenic-river-cruise-standard-suite-accommodations.webp";
import BalconySuiteImage from "../../assets/ScenicRiverCruiseShipsSuites/scenic-river-cruise-balcony-suite-sun-lounge.webp";
import JuniorSuiteImage from "../../assets/ScenicRiverCruiseShipsSuites/scenic-river-cruise-junior-suite-luxury-space.webp";
import RoyalSuiteImage from "../../assets/ScenicRiverCruiseShipsSuites/scenic-river-cruise-royal-suite-luxury-amenities.webp";
import ReadyToChooseImage from "../../assets/ScenicRiverCruiseShipsSuites/ready-to-choose-scenic-ship-suite-advisor-cta.webp";
import BestForFirstTimersImage from "../../assets/ScenicRiverCruiseShipsSuites/which-scenic-ship-is-best-for-first-time-cruisers.webp";
import FinalCtaImage from "../../assets/ScenicRiverCruiseShipsSuites/scenic-river-cruise-ships-suites-complete-guide-hero.webp";
import ItineraryFitsImage from "../../assets/ScenicRiverCruiseShipsSuites/which-scenic-river-cruise-itinerary-fits-you-best-cta.webp";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      description:
        "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#webpage",
      name: "Scenic River Cruise Ships & Suites Guide (2026) | Compare Every Ship & Suite",
      url: "https://www.tripsandships.com/scenic-river-cruises/ships-suites",
      description:
        "Explore every Scenic River Cruise ship and suite category. Compare Scenic's Space-Ships, Royal Suites, balcony suites, amenities, deck plans, and find the best cabin for your luxury river cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#article",
      headline: "Scenic River Cruise Ships & Suites | Complete Luxury Guide",
      description:
        "A complete guide to the Scenic Space-Ship fleet and suite categories, covering itineraries by river, suite features, the Scenic Sun Lounge, and how to choose the right ship and cabin.",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scenic River Cruises",
          item: "https://www.tripsandships.com/scenic-river-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scenic River Cruise Ships & Suites Guide",
          item: "https://www.tripsandships.com/scenic-river-cruises/ships-suites",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#itemlist",
      name: "Scenic River Cruise Ships & Suites Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Scenic Ships & Suites: The Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Scenic Fleet at a Glance" },
        { "@type": "ListItem", position: 3, name: "Which Scenic Ship Is Best?" },
        { "@type": "ListItem", position: 4, name: "Scenic Ships by Destination" },
        { "@type": "ListItem", position: 5, name: "Scenic Suite Categories Explained" },
        { "@type": "ListItem", position: 6, name: "What Is the Scenic Sun Lounge?" },
        { "@type": "ListItem", position: 7, name: "Which Suite Offers the Best Value?" },
        { "@type": "ListItem", position: 8, name: "Which Suite Should You Choose?" },
        { "@type": "ListItem", position: 9, name: "Scenic Ships vs. Other Luxury River Cruise Lines" },
        { "@type": "ListItem", position: 10, name: "Common Mistakes When Choosing a Suite" },
        { "@type": "ListItem", position: 11, name: "Which Scenic Ship Is Best for First-Time Cruisers?" },
        { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 13, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/ships-suites/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Scenic River Cruise ship is the best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There isn't a single \"best\" ship. Scenic maintains a consistent luxury standard across its fleet, so your itinerary and destination are usually more important than the specific vessel.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Scenic Sun Lounge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's Scenic's signature enclosed balcony featuring floor-to-ceiling windows that can be lowered electronically, allowing guests to enjoy river views in any weather.",
          },
        },
        {
          "@type": "Question",
          name: "Does every Scenic suite include butler service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Personalized butler service is available for every suite category.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic suite offers the best value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers consider the Balcony Suite with Scenic Sun Lounge to offer the best balance of luxury, views, and price.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most luxurious suite on Scenic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Royal Owner's Suite is typically the largest and most luxurious accommodation available onboard.",
          },
        },
        {
          "@type": "Question",
          name: "Are Scenic ships all the same?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While the overall luxury experience is consistent, ships vary slightly in décor, artwork, and itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic ship sails the Danube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Several Scenic Space-Ships operate Danube itineraries, depending on the season and schedule.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic ship sails the Rhine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiple Scenic ships cruise the Rhine throughout the year, especially during spring, summer, and Christmas Market seasons.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose my ship or my itinerary first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Scenic, choosing the right itinerary usually has a greater impact on your vacation than selecting a specific ship.",
          },
        },
        {
          "@type": "Question",
          name: "Are Scenic ships adults-only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic primarily caters to adult travelers, though age policies may vary by itinerary.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book the best suites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking 9–18 months in advance typically provides the best selection, especially for Balcony Suites and Royal Suites on popular departures.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book a Scenic River Cruise through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can recommend the best ship, compare suite categories, explain promotions, and help you choose the itinerary that best fits your travel style.",
          },
        },
      ],
    },
  ],
};

const ScenicRiverCruiseShipsSuites = () => {
  return (
    <div className="bg-white">
      <Helmet> 
        <title>Scenic River Cruise Ships & Suites Guide | Compare Every Ship & Suite</title>
        <meta name="title" content="Scenic River Cruise Ships & Suites | Complete Luxury Guide" />
        <meta
          name="description"
          content="Explore every Scenic River Cruise ship and suite category. Compare Scenic's Space-Ships, Royal Suites, balcony suites, amenities, deck plans, and find the best cabin for your luxury river cruise."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/ships-suites" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        backgroundImage={HeroImage}
      />

      {/* ── 2. 60-SECOND QUICK ANSWER ───────────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
        image1={QuickAnswerImage}
      />

      {/* ── 3. SCENIC FLEET AT A GLANCE ─────────────────────────────── */}
      <TravelerTypeGrid
        title={data.fleetAtAGlance.title}
        subtitle={data.fleetAtAGlance.subtitle}
        items={data.fleetAtAGlance.ships}
      />

      {/* ── 4. WHICH SCENIC SHIP IS BEST? ───────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.whichShipIsBest.eyebrow}
        title={data.whichShipIsBest.title}
        paragraphs={data.whichShipIsBest.paragraphs}
        highlights={data.whichShipIsBest.highlights}
        badgeTitle={data.whichShipIsBest.badgeTitle}
        badgeDescription={data.whichShipIsBest.badgeDescription}
        placeholderLabel="SCENIC SPACE-SHIP FLEET"
        image={WhichShipIsBestImage}
      />

      {/* ── 5. SCENIC SHIPS BY DESTINATION ──────────────────────────── */}
      <AlternatingRiverShowcase
        title={data.shipsByDestination.title}
        description={data.shipsByDestination.description}
        rivers={data.shipsByDestination.rivers}
      />

      {/* ── 6. INLINE CTA 1 ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={ItineraryFitsImage}
        theme="dark"
      />

      {/* ── 7. SCENIC SUITE CATEGORIES EXPLAINED ────────────────────── */}
      <FeatureGrid
        title={data.suiteCategories.title}
        subtitle={data.suiteCategories.subtitle}
        features={data.suiteCategories.features}
        bgClass="bg-ice-50"
      />

      {/* ── 8. WHAT IS THE SCENIC SUN LOUNGE? ───────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.sunLounge.eyebrow}
        title={data.sunLounge.title}
        paragraphs={data.sunLounge.paragraphs}
        highlights={data.sunLounge.highlights}
        badgeTitle={data.sunLounge.badgeTitle}
        badgeDescription={data.sunLounge.badgeDescription}
        placeholderLabel="SCENIC SUN LOUNGE"
        image={SunLoungeImage}
      />

      {/* ── 9. WHICH SUITE OFFERS THE BEST VALUE? ───────────────────── */}
      <ValuePropositionHighlight
        title={data.bestValueSuite.title}
        subtitle={data.bestValueSuite.subtitle}
        items={data.bestValueSuite.items}
        imageOverlayText={data.bestValueSuite.imageOverlayText}
      />

      {/* ── 10. WHICH SUITE SHOULD YOU CHOOSE? ──────────────────────── */}
      <ScenicGallery
        title={data.whichSuiteToChoose.title}
        subtitle={data.whichSuiteToChoose.subtitle}
        items={data.whichSuiteToChoose.items.map((item, idx) => ({
          ...item,
          image: [StandardSuiteImage, BalconySuiteImage, JuniorSuiteImage, RoyalSuiteImage][idx],
        }))}
      />

      {/* ── 11. INLINE CTA 2 ────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={ReadyToChooseImage}
        theme="dark"
      />

      {/* ── 12. SCENIC SHIPS VS OTHER LUXURY LINES ──────────────────── */}
      <LuxuryCruiseComparisonTable
        title={data.comparisonData.title}
        headers={data.comparisonData.headers}
        rows={data.comparisonData.rows}
      />

      {/* ── 13. COMMON MISTAKES WHEN CHOOSING A SUITE ───────────────── */}
      <MistakesGrid
        title={data.mistakes.title}
        items={data.mistakes.items}
      />

      {/* ── 14. WHICH SCENIC SHIP BEST FOR FIRST-TIME CRUISERS? ─────── */}
      <EditorialFeatureShowcase
        title={data.bestForFirstTimers.title}
        subtitle={data.bestForFirstTimers.subtitle}
        features={data.bestForFirstTimers.features}
        image={BestForFirstTimersImage}
        bgClass="bg-white"
      />

      {/* ── 15. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ───────────── */}
      <AuthorityGrid
        title={data.advisorValue.title}
        subtitle={data.advisorValue.subtitle}
        items={data.advisorValue.items}
      />

      {/* ── 16. ANGELA HUGHES LUXURY AUTHORITY ──────────────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        authorName={data.angelaHughes.authorName}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.credentials}
        image={AboutImage}
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── 17. FREQUENTLY ASKED QUESTIONS ──────────────────────────── */}
      <FAQAccordion data={data.faqs} />

      {/* ── 18. FINAL VERDICT ───────────────────────────────────────── */}
      <CurvilinearGrid
        title={data.verdict.title}
        subtitle={data.verdict.subtitle}
        paragraphs={data.verdict.paragraphs}
        items={data.verdict.items}
      />

      {/* ── 19. FINAL PLANNING CTA ──────────────────────────────────── */}
      <CenterCTA
        title={data.finalCta.title}
        description={data.finalCta.description}
        buttonText={data.finalCta.buttonText}
        buttonLink={data.finalCta.buttonLink}
        image={FinalCtaImage}
        theme="dark"
      />
    </div>
  );
};

export default ScenicRiverCruiseShipsSuites;