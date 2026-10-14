import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CenterCTA from "../../components/ui/CenterCTA";
import FeatureGrid from "../../components/ui/FeatureGrid";
import CardGrid from "../../components/ui/CardGrid";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import LuxuryCruiseComparisonTable from "../../components/ui/LuxuryCruiseComparisonTable";
import MistakesGrid from "../../components/ui/MistakesGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ExpertPlanning from "../../components/ui/ExpertPlanning";

// Asset Images
import HeroImage from "../../assets/BestScenicRiverCruiseCabins/best-scenic-river-cruise-cabins-luxury-guide-hero.webp";
import QuickAnswerImage1 from "../../assets/BestScenicRiverCruiseCabins/best-scenic-river-cruise-cabins-quick-answer-overview.webp";
import QuickAnswerImage2 from "../../assets/BestScenicRiverCruiseCabins/best-scenic-river-cruise-cabins-quick-answer-balcony.webp";
import WhatMakesGreatCabinImage from "../../assets/BestScenicRiverCruiseCabins/what-makes-a-great-scenic-river-cruise-cabin.webp";
import NotSureCabinImage from "../../assets/BestScenicRiverCruiseCabins/not-sure-which-scenic-cabin-fits-you-best-advisor-cta.webp";
import UpperDeckImage from "../../assets/BestScenicRiverCruiseCabins/scenic-river-cruise-upper-deck-diamond-deck-cabins.webp";
import MiddleDeckImage from "../../assets/BestScenicRiverCruiseCabins/scenic-river-cruise-middle-deck-sapphire-deck-cabins.webp";
import LowerDeckImage from "../../assets/BestScenicRiverCruiseCabins/scenic-river-cruise-lower-deck-standard-suite-cabins.webp";
import ReadyToChooseImage from "../../assets/BestScenicRiverCruiseCabins/ready-to-choose-scenic-suite-booking-advisor-cta.webp";
import SunLoungeWorthItImage from "../../assets/BestScenicRiverCruiseCabins/is-scenic-sun-lounge-worth-it-balcony-review.webp";
import FinalCtaImage from "../../assets/BestScenicRiverCruiseCabins/start-planning-scenic-river-cruise-cabins-voyage-cta.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#webpage",
      name: "Best Scenic River Cruise Cabins (and Cabins to Avoid) | 2026 Guide",
      url: "https://www.tripsandships.com/scenic-river-cruises/best-cabins",
      description:
        "Discover the best Scenic River Cruise cabins for couples, first-time cruisers, luxury travelers, and milestone trips. Learn which cabins offer the best value, which to avoid, and how to choose the perfect suite.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#article",
      headline: "Best Scenic River Cruise Cabins (and Cabins to Avoid)",
      description:
        "A complete comparison of every Scenic River Cruise cabin category, including which suites offer the best value, the best cabins for couples and first-timers, and which cabins to avoid.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#breadcrumb",
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
          name: "Best Scenic River Cruise Cabins",
          item: "https://www.tripsandships.com/scenic-river-cruises/best-cabins",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#itemlist",
      name: "Best Scenic River Cruise Cabins Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Best Scenic River Cruise Cabins: The Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Quick Cabin Comparison" },
        { "@type": "ListItem", position: 3, name: "What Makes a Great Scenic Cabin?" },
        { "@type": "ListItem", position: 4, name: "Scenic Cabin Categories Explained" },
        { "@type": "ListItem", position: 5, name: "Are There Any Scenic Cabins to Avoid?" },
        { "@type": "ListItem", position: 6, name: "Which Deck Is Best?" },
        { "@type": "ListItem", position: 7, name: "Scenic Sun Lounge: Worth It?" },
        { "@type": "ListItem", position: 8, name: "Scenic vs. Other Luxury River Cruise Cabins" },
        { "@type": "ListItem", position: 9, name: "Common Cabin Booking Mistakes" },
        { "@type": "ListItem", position: 10, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 11, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-cabins/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best cabin on a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Deluxe Balcony Suite is widely regarded as the best overall choice thanks to its combination of space, Scenic Sun Lounge, premium location, and value.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic cabin offers the best value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Balcony Suite provides the best balance of comfort, luxury, and price for most travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any cabins to avoid on Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are no truly bad cabins. However, travelers who prioritize expansive views may prefer Balcony Suites over lower-deck Standard Suites.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Scenic Sun Lounge worth paying for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many guests consider it one of Scenic's signature features, providing panoramic river views and additional living space in all weather conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Which cabin is best for first-time Scenic guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Balcony Suite is an excellent choice for first-time cruisers because it offers the classic Scenic experience at a reasonable upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "Which cabin is best for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Deluxe Balcony Suite is a favorite among couples seeking comfort, privacy, and beautiful river views.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic suite is the most luxurious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Royal Owner's Suite is the largest and most luxurious accommodation onboard, offering premium amenities and personalized service.",
          },
        },
        {
          "@type": "Question",
          name: "Which deck is best on a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers prefer the middle or upper decks for convenient access to public areas and excellent views, though the best deck depends on your cabin category and preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Is it worth upgrading from a Standard Suite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you enjoy relaxing in your cabin and want Scenic's signature Sun Lounge, many travelers find the upgrade worthwhile.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I book the best Scenic cabins?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking 9 to 18 months before departure usually provides the widest choice of cabin categories and deck locations.",
          },
        },
        {
          "@type": "Question",
          name: "Can a travel advisor help me choose the best cabin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can recommend the best cabin based on your itinerary, budget, travel style, and current promotions.",
          },
        },
        {
          "@type": "Question",
          name: "What should I consider before choosing a Scenic cabin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Think about your budget, preferred views, cruise length, deck location, and how much time you expect to spend relaxing in your suite.",
          },
        },
      ],
    },
  ],
};

/* ── Main Component ──────────────────────────────────────────────── */
const BestScenicRiverCruiseCabins = () => {
  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      <Helmet>
        <title>Best Scenic River Cruise Cabins (and Cabins to Avoid) | 2026 Guide</title>
        <meta name="title" content="Best Scenic River Cruise Cabins | Which Cabin Should You Book?" />
        <meta
          name="description"
          content="Discover the best Scenic River Cruise cabins for couples, first-time cruisers, luxury travelers, and milestone trips. Learn which cabins offer the best value, which to avoid, and how to choose the perfect suite."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/best-cabins" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      
      <Nav />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description || data.hero.paragraphs}
        badge={data.hero.badge}
        primaryCtaText={data.hero.primaryCtaText || data.hero.primaryCta?.text}
        primaryCtaLink={data.hero.primaryCtaLink || data.hero.primaryCta?.link}
        backgroundImage={HeroImage}
      />

      {/* ── 2. BEST SCENIC CABINS: QUICK ANSWER ───────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        image1Placeholder={data.quickAnswer.image1Placeholder}
        image2Placeholder={data.quickAnswer.image2Placeholder}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
        image1={QuickAnswerImage1}
        image2={QuickAnswerImage2}
      />

      {/* ── 3. QUICK CABIN COMPARISON ────────────────────────────────── */}
      <ComparisonTable
        data={data.quickComparisonTable}
      />

      {/* ── 4. WHAT MAKES A GREAT SCENIC CABIN? ──────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.whatMakesAGreatCabin.eyebrow}
        title={data.whatMakesAGreatCabin.title}
        paragraphs={data.whatMakesAGreatCabin.paragraphs}
        highlights={data.whatMakesAGreatCabin.highlights}
        badgeTitle={data.whatMakesAGreatCabin.badgeTitle}
        badgeDescription={data.whatMakesAGreatCabin.badgeDescription}
        placeholderLabel={data.whatMakesAGreatCabin.placeholderLabel}
        image={WhatMakesGreatCabinImage}
      />

      {/* ── 5. INLINE CTA 1 ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={NotSureCabinImage}
        theme="dark"
      />

      {/* ── 6. SCENIC CABIN CATEGORIES EXPLAINED ────────────────────── */}
      <FeatureGrid
        title={data.cabinCategoriesExplained.title}
        subtitle={data.cabinCategoriesExplained.subtitle}
        features={data.cabinCategoriesExplained.features}
        bgClass="bg-ice-50"
      />

      {/* ── 7. ARE THERE ANY SCENIC CABINS TO AVOID? ─────────────────── */}
      <CardGrid
        title={data.cabinsToAvoid.title}
        subtitle={data.cabinsToAvoid.subtitle}
        cards={data.cabinsToAvoid.cards}
        columns={3}
        stagger={false}
      />

      {/* ── 8. WHICH DECK IS BEST? ───────────────────────────────────── */}
      <ThreeColumnGrid
        title={data.whichDeckIsBest.title}
        subtitle={data.whichDeckIsBest.subtitle}
        items={data.whichDeckIsBest.items.map((item) => ({
          ...item,
          image: item.title === "Upper Deck" ? UpperDeckImage : item.title === "Middle Deck" ? MiddleDeckImage : LowerDeckImage,
        }))}
      />

      {/* ── 9. INLINE CTA 2 ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={ReadyToChooseImage}
        theme="dark"
      />

      {/* ── 10. SCENIC SUN LOUNGE: WORTH IT? ────────────────────────── */}
      <EditorialFeatureShowcase
        title={data.sunLoungeWorthIt.title}
        subtitle={data.sunLoungeWorthIt.subtitle}
        features={data.sunLoungeWorthIt.features || data.sunLoungeWorthIt.items}
        image={SunLoungeWorthItImage}
      />

      {/* ── 11. SCENIC VS OTHER LUXURY RIVER CRUISE CABINS ──────────── */}
      <LuxuryCruiseComparisonTable
        title={data.competitorComparison.title}
        headers={data.competitorComparison.headers}
        rows={data.competitorComparison.rows}
      />

      {/* ── 12. COMMON CABIN BOOKING MISTAKES ───────────────────────── */}
      <MistakesGrid
        title={data.mistakes.title}
        items={data.mistakes.items}
      />

      {/* ── 13. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ───────────── */}
      <AuthorityGrid
        title={data.advisorValue.title}
        subtitle={data.advisorValue.subtitle}
        items={data.advisorValue.items}
      />

      {/* ── 14. ANGELA HUGHES LUXURY AUTHORITY ──────────────────────── */}
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

      {/* ── 15. FREQUENTLY ASKED QUESTIONS ──────────────────────────── */}
      <FAQAccordion data={data.faqs} />

      {/* ── 16. FINAL VERDICT ───────────────────────────────────────── */}
      <ExpertPlanning
        title={data.verdict.title}
        subtitle={data.verdict.subtitle}
        sections={data.verdict.sections}
      />

      {/* ── 17. FINAL PLANNING CTA ──────────────────────────────────── */}
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

export default BestScenicRiverCruiseCabins;