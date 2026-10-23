import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import ValuePropositionHighlight from "../../../components/ui/ValuePropositionHighlight";
import ScenicGallery from "../../../components/ui/ScenicGallery";
import LuxuryCruiseComparisonTable from "../../../components/ui/LuxuryCruiseComparisonTable";
import MistakesGrid from "../../../components/ui/MistakesGrid";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import CurvilinearGrid from "../../../components/ui/CurvilinearGrid";

// Asset Images
import HeroImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/why-your-scenic-river-cruise-cabin-choice-matters.webp";
import QuickAnswerImage1 from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-cabin-categories-quick-answer-balcony.webp";
import QuickAnswerImage2 from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-cabin-categories-explained-hero.webp";
import WhyCabinChoiceMattersImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-cabin-categories-quick-answer-sun-lounge.webp";
import NotSureCabinImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/not-sure-which-scenic-cabin-fits-you-best-cta.webp";
import SunLoungeImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/what-is-the-scenic-sun-lounge-cabin-innovation.webp";
import StandardSuiteImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-standard-suite-cabin.webp";
import BalconySuiteImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-balcony-suite-cabin.webp";
import DeluxeBalconySuiteImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-deluxe-balcony-suite-cabin.webp";
import JuniorSuiteImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-junior-suite-cabin.webp";
import RoyalSuiteImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-royal-suite-cabin.webp";
import RoyalOwnersSuiteImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/scenic-river-cruise-royal-owners-suite-cabin.webp";
import ReadyToChooseImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/ready-to-choose-your-scenic-suite-advisor-cta.webp";
import FinalCtaImage from "../../../assets/ScenicRiverCruises/ScenicRiverCruiseCabin/start-planning-your-scenic-river-cruise-cabin-cta.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#webpage",
      name: "Scenic River Cruise Cabin Categories Explained (2026) | Which Suite Should You Book?",
      url: "https://www.tripsandships.com/scenic-river-cruises/cabin-categories",
      description:
        "Compare every Scenic River Cruise cabin category, including Standard Suites, Balcony Suites, Junior Suites, Royal Suites, and Royal Owner's Suites. Find the best cabin for your travel style and budget.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#article",
      headline: "Scenic River Cruise Cabin Categories | Complete Suite Guide",
      description:
        "A complete guide to every Scenic River Cruise cabin category, covering suite features, the Scenic Sun Lounge, pricing tiers, and how to choose the right suite for your travel style.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#breadcrumb",
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
          name: "Scenic River Cruise Cabin Categories",
          item: "https://www.tripsandships.com/scenic-river-cruises/cabin-categories",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#itemlist",
      name: "Scenic River Cruise Cabin Categories Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Scenic Cabin Categories: Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Quick Cabin Comparison" },
        { "@type": "ListItem", position: 3, name: "Why Your Cabin Choice Matters" },
        { "@type": "ListItem", position: 4, name: "Scenic Suite Categories Explained" },
        { "@type": "ListItem", position: 5, name: "What Is Scenic's Sun Lounge?" },
        { "@type": "ListItem", position: 6, name: "Which Cabin Offers the Best Value?" },
        { "@type": "ListItem", position: 7, name: "Which Cabin Should You Choose?" },
        { "@type": "ListItem", position: 8, name: "Scenic vs. Other Luxury River Cruise Cabins" },
        { "@type": "ListItem", position: 9, name: "Common Cabin Booking Mistakes" },
        { "@type": "ListItem", position: 10, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 11, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cabin-categories/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Scenic River Cruise cabin is the best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most travelers, the Balcony Suite offers the best combination of luxury, river views, and value.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Scenic Sun Lounge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Scenic Sun Lounge is an enclosed balcony with floor-to-ceiling windows that lower electronically, allowing guests to enjoy fresh air and panoramic views in almost any weather.",
          },
        },
        {
          "@type": "Question",
          name: "Does every Scenic cabin include butler service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every Scenic suite includes personalized butler service, regardless of cabin category.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a Balcony Suite and a Deluxe Balcony Suite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Deluxe Balcony Suite generally offers additional space, upgraded locations, and enhanced comfort while maintaining the same core amenities as the Balcony Suite.",
          },
        },
        {
          "@type": "Question",
          name: "Is it worth upgrading to a Junior Suite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you're taking a longer cruise or celebrating a special occasion, many travelers find the additional space and comfort worthwhile.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the Royal Owner's Suite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Royal Owner's Suite typically includes the largest living space onboard, premium furnishings, panoramic views, personalized butler service, and luxury amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Are Scenic cabins larger than other river cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Suite sizes vary by ship and category, but Scenic is known for spacious accommodations, particularly in its premium suites.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic cabin is best for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Balcony Suite and Deluxe Balcony Suite are among the most popular choices for couples seeking comfort, privacy, and scenic views.",
          },
        },
        {
          "@type": "Question",
          name: "Can I choose my cabin when booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cabin selection depends on availability, so booking early gives you the widest choice of locations and suite categories.",
          },
        },
        {
          "@type": "Question",
          name: "Which deck is the best on a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There isn't a universally \"best\" deck. The ideal location depends on your preferred suite category, itinerary, and personal preferences.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I book the best Scenic cabins?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For popular itineraries and premium suites, booking 9 to 18 months in advance typically provides the best selection.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book my Scenic cabin through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can recommend the best cabin category, explain promotions, compare itineraries, and help ensure you choose the suite that offers the best overall value.",
          },
        },
      ],
    },
  ],
};

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseCabinCategories = () => {
  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      <Helmet>
        <title>Scenic River Cruise Cabin Categories Explained | Which Suite Should You Book?</title>
        <meta name="title" content="Scenic River Cruise Cabin Categories | Complete Suite Guide" />
        <meta
          name="description"
          content="Compare every Scenic River Cruise cabin category, including Standard Suites, Balcony Suites, Junior Suites, Royal Suites, and Royal Owner's Suites. Find the best cabin for your travel style and budget."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/cabin-categories" />
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

      {/* ── 2. 60-SECOND ANSWER ─────────────────────────────────────────── */}
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

      {/* ── 4. WHY YOUR CABIN CHOICE MATTERS ────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.whyCabinChoiceMatters.eyebrow}
        title={data.whyCabinChoiceMatters.title}
        paragraphs={data.whyCabinChoiceMatters.paragraphs}
        highlights={data.whyCabinChoiceMatters.highlights}
        badgeTitle={data.whyCabinChoiceMatters.badgeTitle}
        badgeDescription={data.whyCabinChoiceMatters.badgeDescription}
        placeholderLabel={data.whyCabinChoiceMatters.placeholderLabel}
        image={WhyCabinChoiceMattersImage}
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

      {/* ── 6. SCENIC SUITE CATEGORIES EXPLAINED ────────────────────── */}
      <FeatureGrid
        title={data.suiteCategoriesExplained.title}
        subtitle={data.suiteCategoriesExplained.subtitle}
        features={data.suiteCategoriesExplained.features}
        bgClass="bg-ice-50"
      />

      {/* ── 7. WHAT IS THE SCENIC SUN LOUNGE? ───────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.sunLounge.eyebrow}
        title={data.sunLounge.title}
        paragraphs={data.sunLounge.paragraphs}
        highlights={data.sunLounge.highlights}
        badgeTitle={data.sunLounge.badgeTitle}
        badgeDescription={data.sunLounge.badgeDescription}
        placeholderLabel={data.sunLounge.placeholderLabel}
        image={SunLoungeImage}
      />

      {/* ── 8. WHICH SUITE OFFERS THE BEST VALUE? ───────────────────── */}
      <ValuePropositionHighlight
        title={data.bestValueSuite.title}
        subtitle={data.bestValueSuite.subtitle}
        items={data.bestValueSuite.items}
        imageOverlayText={data.bestValueSuite.imageOverlayText}
        // image={SuiteImage}
      />

      {/* ── 9. WHICH SUITE SHOULD YOU CHOOSE? ──────────────────────── */}
      <ScenicGallery
        title={data.whichSuiteToChoose.title}
        subtitle={data.whichSuiteToChoose.subtitle}
        items={data.whichSuiteToChoose.items.map((item, idx) => ({
          ...item,
          image: [
            StandardSuiteImage,
            BalconySuiteImage,
            DeluxeBalconySuiteImage,
            JuniorSuiteImage,
            RoyalSuiteImage,
            RoyalOwnersSuiteImage
          ][idx],
        }))}
      />

      {/* ── 10. INLINE CTA 2 ────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={ReadyToChooseImage}
        theme="dark"
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
      <CurvilinearGrid
        title={data.verdict.title}
        subtitle={data.verdict.subtitle}
        paragraphs={data.verdict.paragraphs}
        items={data.verdict.items}
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

export default ScenicRiverCruiseCabinCategories;