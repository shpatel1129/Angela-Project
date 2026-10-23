import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import CenterCTA from "../../../components/ui/CenterCTA";
import CostValueAnalysisCards from "../../../components/ui/CostValueAnalysisCards";
import BudgetBreakdownTable from "../../../components/ui/BudgetBreakdownTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import ValuePropositionHighlight from "../../../components/ui/ValuePropositionHighlight";
import LuxuryCruiseComparisonTable from "../../../components/ui/LuxuryCruiseComparisonTable";
import BrandPillarsShowcase from "../../../components/ui/BrandPillarsShowcase";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ExpertPlanning from "../../../components/ui/ExpertPlanning";

// Asset Images
import HeroImage from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/how-much-does-a-scenic-river-cruise-cost-pricing-hero.webp";
import QuickAnswerImage1 from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/scenic-river-cruise-prices-average-cost-quick-answer.webp";
import QuickAnswerImage2 from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/scenic-river-cruise-all-inclusive-pricing-value-breakdown.webp";
import ReadyToCompareImage from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/compare-scenic-river-cruise-pricing-itineraries-cta.webp";
import IsScenicWorthThePriceImage from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/is-scenic-river-cruise-worth-the-price-luxury-review.webp";
import PlanningScenicRiverCruiseImage from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/planning-a-scenic-luxury-river-cruise-advisor-cta.webp";
import FinalPlanningCtaImage from "../../../assets/ScenicRiverCruises/HowMuchDoesScenicRiverCruiseCost/scenic-river-cruise-fleet-planning-booking-cta.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cost/#webpage",
      name: "How Much Does a Scenic River Cruise Cost? (2026 Pricing Guide)",
      url: "https://www.tripsandships.com/scenic-river-cruises/cost",
      description:
        "Wondering how much a Scenic River Cruise costs? Discover average prices by itinerary, suite type, season, and destination, plus what's included and how to save on your luxury river cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cost/#article",
      headline: "Scenic River Cruise Cost | Prices, What's Included & Value Guide",
      description:
        "A complete pricing guide to Scenic River Cruises covering average costs by itinerary, suite category, and season, what's included, what's not, and whether Scenic is worth the price.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cost/#breadcrumb",
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
          name: "How Much Does a Scenic River Cruise Cost?",
          item: "https://www.tripsandships.com/scenic-river-cruises/cost",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cost/#itemlist",
      name: "How Much Does a Scenic River Cruise Cost? — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Scenic River Cruise Prices: The Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Scenic River Cruise Prices at a Glance" },
        { "@type": "ListItem", position: 3, name: "What Affects the Cost?" },
        { "@type": "ListItem", position: 4, name: "What's Included in the Price?" },
        { "@type": "ListItem", position: 5, name: "What's Usually NOT Included?" },
        { "@type": "ListItem", position: 6, name: "Example Budget: 7-Night Danube Cruise" },
        { "@type": "ListItem", position: 7, name: "Is Scenic Expensive?" },
        { "@type": "ListItem", position: 8, name: "Scenic vs. Other River Cruise Lines" },
        { "@type": "ListItem", position: 9, name: "When Can You Save Money?" },
        { "@type": "ListItem", position: 10, name: "Is Scenic Worth the Price?" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/cost/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a Scenic River Cruise cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most 7-night cruises range from approximately $4,500 to $7,500 per person, depending on itinerary, suite category, and travel season.",
          },
        },
        {
          "@type": "Question",
          name: "Are Scenic River Cruises all-inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic includes luxury accommodations, butler service, premium beverages, excursions, gratuities, Wi-Fi, and many other amenities.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Scenic more expensive than some other river cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic bundles many premium services into the cruise fare, reducing the number of additional expenses during your vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Premium wines, spirits, cocktails, beer, coffee, tea, and soft drinks are generally included.",
          },
        },
        {
          "@type": "Question",
          name: "Are excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is airfare included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "International airfare is not always included but may be available through select promotions or vacation packages.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenic include gratuities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Onboard gratuities are generally included.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cheapest time to book a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shoulder-season departures and early booking promotions often provide the best value.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking an all-inclusive luxury river cruise with exceptional service, many guests believe Scenic offers excellent overall value.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help compare itineraries, explain pricing, recommend the right suite, and identify available promotions.",
          },
        },
        {
          "@type": "Question",
          name: "Are laundry services included on Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, laundry concierge services are included for all guests, with the number of complimentary pieces washed depending on your suite category (unlimited for top-tier Royal Suites).",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenic offer a single supplement discount for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic occasionally runs promotions offering reduced or waived single supplements on select itineraries, though standard bookings typically include a supplement fee for solo occupancy.",
          },
        },
      ],
    },
  ],
};

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseCost = () => {
  return (
    <div className="w-full bg-white font-sans antialiased text-navy-950">
      <Helmet>
        <title>How Much Does a Scenic River Cruise Cost?</title>
        <meta
          name="title"
          content="Scenic River Cruise Cost | Prices, What's Included & Value Guide"
        />
        <meta
          name="description"
          content="Wondering how much a Scenic River Cruise costs? Discover average prices by itinerary, suite type, season, and destination, plus what's included and how to save on your luxury river cruise."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/cost" />
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
        image1Placeholder={data.quickAnswer.image1Placeholder}
        image2Placeholder={data.quickAnswer.image2Placeholder}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
        image1={QuickAnswerImage1}
        image2={QuickAnswerImage2}
      />

      {/* ── 3. PRICES AT A GLANCE ───────────────────────────────────── */}
      <ComparisonTable data={data.pricesAtAGlance} />

      {/* ── 4. WHAT AFFECTS THE COST ────────────────────────────────── */}
      <FeatureGrid
        title={data.costFactors.title}
        subtitle={data.costFactors.subtitle}
        features={data.costFactors.features}
      />

      {/* ── 5. INLINE CTA 1 ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={ReadyToCompareImage}
        theme="dark"
      />

      {/* ── 6 & 7. WHAT'S INCLUDED & WHAT'S NOT INCLUDED ────────────── */}
      <CostValueAnalysisCards
        title={data.includedVsNotIncluded.title}
        subtitle={data.includedVsNotIncluded.subtitle}
        includedTitle={data.includedVsNotIncluded.includedTitle}
        extrasTitle={data.includedVsNotIncluded.extrasTitle}
        included={data.includedVsNotIncluded.included}
        extras={data.includedVsNotIncluded.extras}
      />

      {/* ── 8. EXAMPLE BUDGET ───────────────────────────────────────── */}
      <BudgetBreakdownTable data={data.exampleBudget} />

      {/* ── 9. IS SCENIC WORTH THE PRICE? ───────────────────────────── */}
      <EditorialIntroSection
        eyebrow="All-Inclusive Luxury"
        heading={data.isScenicWorthIt.title}
        paragraphs={[
          ...data.isScenicWorthIt.subtitles,
          data.isScenicWorthIt.summary,
        ]}
        highlights={data.isScenicWorthIt.features}
        placeholderLabel="ELEGANT EVENING LOUNGE ABOARD SCENIC"
        badgeTitle="All-Inclusive"
        badgeDescription="Predictable luxury value with transparent pricing and zero hidden fees."
        image={IsScenicWorthThePriceImage}
      />

      {/* ── 10. IS SCENIC EXPENSIVE? ────────────────────────────────── */}
      <ValuePropositionHighlight
        title={data.isScenicExpensive.title}
        subtitle={data.isScenicExpensive.subtitle}
        items={data.isScenicExpensive.items}
        imageOverlayText={data.isScenicExpensive.imageOverlayText}
      />

      {/* ── 11. SCENIC VS OTHER RIVER CRUISE LINES ──────────────────── */}
      <LuxuryCruiseComparisonTable
        title={data.costComparison.title}
        headers={data.costComparison.headers}
        rows={data.costComparison.rows}
      />

      {/* ── 12. WHEN CAN YOU SAVE MONEY? ────────────────────────────── */}
      <BrandPillarsShowcase data={data.savingMoney} />

      {/* ── 13. WHO GETS THE BEST VALUE? ────────────────────────────── */}
      <ProsConsCards
        title={data.bestValueMatch.title}
        prosTitle={data.bestValueMatch.prosTitle}
        consTitle={data.bestValueMatch.consTitle}
        bestFor={data.bestValueMatch.bestFor}
        notBestFor={data.bestValueMatch.notBestFor}
        bottomNote={data.bestValueMatch.bottomNote}
        type="pros-cons"
      />

      {/* ── 14. INLINE CTA 2 ────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={PlanningScenicRiverCruiseImage}
        theme="dark"
      />

      {/* ── 15. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────── */}
      <AuthorityGrid
        title={data.travelAdvisor.title}
        subtitle={data.travelAdvisor.subtitle}
        items={data.travelAdvisor.items}
      />

      {/* ── 16. ANGELA HUGHES AUTHORITY BOX ─────────────────────────── */}
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
      <ExpertPlanning
        title={data.verdict.title}
        subtitle={data.verdict.subtitle}
        sections={data.verdict.sections}
      />

      {/* ── 19. FINAL PLANNING CTA ──────────────────────────────────── */}
      <CenterCTA
        title={data.finalCta.title}
        description={data.finalCta.description}
        buttonText={data.finalCta.buttonText}
        buttonLink={data.finalCta.buttonLink}
        image={FinalPlanningCtaImage}
        theme="dark"
      />
    </div>
  );
};

export default ScenicRiverCruiseCost;