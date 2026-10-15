import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import CenterCTA from "../../components/ui/CenterCTA";
import InclusionsList from "../../components/ui/InclusionsList";
import ItineraryCards from "../../components/ui/ItineraryCards";
import CardGrid from "../../components/ui/CardGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
import DualPhilosophyShowcase from "../../components/ui/DualPhilosophyShowcase";
import FeatureGrid from "../../components/ui/FeatureGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import MistakesGrid from "../../components/ui/MistakesGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";

// Asset Images (Commented out per request)
// import AboutImage from "../../assets/AboutAngela.jpeg";
// import HeroImage from "../../assets/ScenicFreechoiceEnrich/scenic-excursion-hero.jpg";
// import FreechoiceImage from "../../assets/ScenicFreechoiceEnrich/scenic-freechoice.jpg";
// import EnrichImage from "../../assets/ScenicFreechoiceEnrich/scenic-enrich.jpg";
// import ActivityImage from "../../assets/ScenicFreechoiceEnrich/scenic-activity.jpg";
// Category Images (Commented out per request)
// import HistoryImg from "../../assets/ScenicFreechoiceEnrich/history-culture.jpg";
// import FoodWineImg from "../../assets/ScenicFreechoiceEnrich/food-wine.jpg";
// import ActiveImg from "../../assets/ScenicFreechoiceEnrich/active.jpg";
// import SightseeingImg from "../../assets/ScenicFreechoiceEnrich/sightseeing.jpg";

// const categoryImages = {
//   "History & Culture": HistoryImg,
//   "Food & Wine": FoodWineImg,
//   "Active Experiences": ActiveImg,
//   "Scenic Sightseeing": SightseeingImg,
// };

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/#webpage",
      name: "Scenic Freechoice Excursions & Scenic Enrich Experiences (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/",
      description:
        "Discover Scenic Freechoice excursions and Scenic Enrich experiences. Learn how Scenic excursions work, what's included, the best activities, and how to choose experiences on your river cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/#article",
      headline: "Scenic Freechoice Excursions & Scenic Enrich Experiences",
      description:
        "A complete guide to Scenic Freechoice excursions and Scenic Enrich experiences, including how they work, examples, and how to choose the right activities for your travel style.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/#breadcrumb",
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
          name: "Riverside Luxury Cruises",
          item: "https://www.tripsandships.com/riverside-luxury-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scenic River Cruises",
          item: "https://www.tripsandships.com/scenic-river-cruises",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Scenic Freechoice & Enrich",
          item: "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/#itemlist",
      name: "Scenic Freechoice & Scenic Enrich — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "What Is Scenic Freechoice?" },
        { "@type": "ListItem", position: 3, name: "How Does Scenic Freechoice Work?" },
        { "@type": "ListItem", position: 4, name: "What Is Scenic Enrich?" },
        { "@type": "ListItem", position: 5, name: "Scenic Freechoice Examples" },
        { "@type": "ListItem", position: 6, name: "Scenic Enrich Examples" },
        { "@type": "ListItem", position: 7, name: "Are Freechoice & Enrich Included?" },
        { "@type": "ListItem", position: 8, name: "Freechoice vs Traditional Shore Excursions" },
        { "@type": "ListItem", position: 9, name: "Scenic Freechoice vs Scenic Enrich" },
        { "@type": "ListItem", position: 10, name: "Best Excursions By Travel Style" },
        { "@type": "ListItem", position: 11, name: "How Active Are Scenic Excursions?" },
        { "@type": "ListItem", position: 12, name: "Common Excursion Mistakes" },
        { "@type": "ListItem", position: 13, name: "How to Choose the Right Excursions" },
        { "@type": "ListItem", position: 14, name: "Why a Travel Advisor Can Help" },
        { "@type": "ListItem", position: 15, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/freechoice-enrich/#faq",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const ScenicFreechoiceExcursions = () => {
  const freechoiceCards = data.freechoiceExamples.categories.map((item) => ({
    title: item.title,
    duration: item.bestFor || "Scenic Freechoice",
    description: item.description,
    highlights: item.highlights,
    // image: categoryImages[item.title],
  }));

  return (
    <div className="w-full bg-white text-navy-950 font-sans antialiased">
      {/* ── SEO Helmet ─────────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── Global Navigation ──────────────────────────────────────── */}
      <Nav />

      {/* ── Section 1: Hero ───────────────────────────────────────── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        badge={data.hero.badge}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
      />

      {/* ── Section 2: Quick Answer Intro ─────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.title}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
      />

      {/* ── Section 2b: Quick Answer Table ────────────────────────── */}
      <ComparisonTable data={data.quickAnswerTable} />

      {/* ── Section 3: What Is Scenic Freechoice? ─────────────────── */}
      <EditorialIntroSection
        eyebrow={data.whatIsFreechoice.eyebrow}
        heading={data.whatIsFreechoice.heading}
        paragraphs={data.whatIsFreechoice.paragraphs}
        highlights={data.whatIsFreechoice.highlights}
        badgeTitle={data.whatIsFreechoice.badgeTitle}
        badgeDescription={data.whatIsFreechoice.badgeDescription}
      />

      {/* ── Section 4: How Does Scenic Freechoice Work? ───────────── */}
      <StepByStepGuide
        title={data.howFreechoiceWorks.title}
        subtitle={data.howFreechoiceWorks.subtitle}
        steps={data.howFreechoiceWorks.steps}
      />

      {/* ── Section 5: Inline CTA 1 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
      />

      {/* ── Section 6: What Is Scenic Enrich? ─────────────────────── */}
      <InclusionsList
        title={data.whatIsEnrich.title}
        inclusions={data.whatIsEnrich.inclusions}
        expertNote={data.whatIsEnrich.expertNote}
      />

      {/* ── Section 7: Scenic Freechoice Examples ─────────────────── */}
      <ItineraryCards
        title={data.freechoiceExamples.title}
        items={freechoiceCards}
      />

      {/* ── Section 8: Scenic Enrich Examples ─────────────────────── */}
      <CardGrid
        title={data.enrichExamples.title}
        subtitle={data.enrichExamples.subtitle}
        cards={data.enrichExamples.cards}
        columns={4}
        stagger={false}
      />

      {/* ── Section 9: Are Freechoice & Enrich Included? ──────────── */}
      <ProsConsCards
        title={data.areTheyIncluded.title}
        prosTitle={data.areTheyIncluded.prosTitle}
        consTitle={data.areTheyIncluded.consTitle}
        bestFor={data.areTheyIncluded.bestFor}
        notBestFor={data.areTheyIncluded.notBestFor}
        bottomNote={data.areTheyIncluded.bottomNote}
        type={data.areTheyIncluded.type}
        bgClass={data.areTheyIncluded.bgClass}
      />

      {/* ── Section 10: Inline CTA 2 ──────────────────────────────── */}
      <CenterCTA
        theme="light"
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
      />

      {/* ── Section 11: Freechoice vs Traditional Shore Excursions ── */}
      <ComparisonTable data={data.traditionalVsFreechoice} />

      {/* ── Section 12: Scenic Freechoice vs Scenic Enrich ────────── */}
      <DualPhilosophyShowcase
        data={data.freechoiceVsEnrich}
      />

      {/* ── Section 13: Best Scenic Excursions for First-Time Travelers ── */}
      <ExpertAuthorityChecklist
        title={data.firstTimeTravelers.title}
        subtitle={data.firstTimeTravelers.subtitle}
        points={data.firstTimeTravelers.points}
      />

      {/* ── Section 14: Best Excursions by Travel Style ───────────── */}
      <TravelerPersonaCards
        title={data.travelStyles.title}
        subtitle={data.travelStyles.subtitle}
        personas={data.travelStyles.personas}
      />

      {/* ── Section 15: Inline CTA 3 ──────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
      />

      {/* ── Section 16: How Active Are Scenic Excursions? ─────────── */}
      <EditorialFeatureShowcase
        title={data.activityLevels.heading}
        subtitle={data.activityLevels.paragraphs[0]}
        features={data.activityLevels.features}
        bgClass="bg-stone-50"
        // image={ActivityImage}
      />

      {/* ── Section 17: Excursion Flexibility & Value ─────────────── */}
      <FeatureGrid
        title={data.skipAndValue.title}
        subtitle={data.skipAndValue.subtitle}
        features={data.skipAndValue.features}
        bgClass="bg-white"
      />

      {/* ── Section 18: Common Scenic Excursion Mistakes ───────────── */}
      <MistakesGrid data={data.commonMistakes} />

      {/* ── Section 19: How to Choose the Right Scenic Excursions ─── */}
      <GenericChecklistCards
        title={data.chooseFramework.title}
        subtitle={data.chooseFramework.subtitle}
        cards={data.chooseFramework.cards}
      />

      {/* ── Section 20: Why a Travel Advisor Can Help ─────────────── */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        cards={data.whyBookAdvisor.items}
        columns={3}
        stagger={false}
      />

      {/* ── Section 21: Angela Hughes Authority Credentials ───────── */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={data.angelaHughes.title}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        authoritySubtitle={data.angelaHughes.authoritySubtitle}
        experienceBadge={data.angelaHughes.experienceBadge}
        credentials={data.angelaHughes.credentials}
        quote={data.angelaHughes.quote}
        quoteSubtitle={data.angelaHughes.quoteSubtitle}
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── Section 22: Frequently Asked Questions ────────────────── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle:
            "Everything you need to know before choosing your Scenic Freechoice excursions and Scenic Enrich experiences.",
          faqs: data.faqs,
        }}
      />

      {/* ── Section 23: Final Verdict ─────────────────────────────── */}
      <LuxuryIntroSection
        heading={data.finalVerdict.title}
        description={data.finalVerdict.paragraphs.join("\n\n")}
        highlights={data.finalVerdict.highlights}
      />

      {/* ── Section 24: Final Center CTA ──────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.finalVerdict.ctaText}
        description="At Trips & Ships Luxury Travel, we'll help you plan every detail of your Scenic cruise — from matching Freechoice excursions to your travel style to securing exclusive Enrich opportunities and luxury suites."
        buttonText="Contact Angela Hughes"
        buttonLink={data.finalVerdict.ctaLink}
      />
    </div>
  );
};

export default ScenicFreechoiceExcursions;