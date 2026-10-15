import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import InclusionsList from "../../components/ui/InclusionsList";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import CenterCTA from "../../components/ui/CenterCTA";
import AlternatingRiverShowcase from "../../components/ui/AlternatingRiverShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import FeatureSplit from "../../components/ui/FeatureSplit";
import MistakesGrid from "../../components/ui/MistakesGrid";
import ComparisonTable from "../../components/ui/ComparisonTable";
import CardGrid from "../../components/ui/CardGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";

// Asset Images (Commented out per request)
// import AboutImage from "../../assets/AboutAngela.jpeg";
// import HeroImage from "../../assets/ScenicFamilyTravel/scenic-family-hero.jpg";
// import FamilyDiningImage from "../../assets/ScenicFamilyTravel/scenic-family-dining.jpg";
// import SuiteImage from "../../assets/ScenicFamilyTravel/scenic-family-suites.jpg";
// import ExcursionImage from "../../assets/ScenicFamilyTravel/scenic-family-excursion.jpg";

// Itinerary Images (Commented out per request)
// import RhineImg from "../../assets/ScenicRiverCruises/scenic-rhine-river-cruise-castles-vineyards.webp";
// import DanubeImg from "../../assets/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";
// import RhoneImg from "../../assets/ScenicRiverCruises/scenic-rhone-river-cruise-provence-france.webp";
// import DouroImg from "../../assets/ScenicRiverCruises/scenic-douro-river-cruise-portugal-valley.webp";

// const itineraryImages = {
//   "Rhine River — Best Overall": RhineImg,
//   "Danube River — Excellent for Culture": DanubeImg,
//   "Rhône River — Perfect for Food Lovers": RhoneImg,
//   "Douro River — Best for a Relaxed Pace": DouroImg,
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational/#webpage",
      name: "Scenic River Cruises for Families & Multigenerational Groups (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational",
      description:
        "Planning a Scenic River Cruise with family? Discover whether Scenic is right for multigenerational travel, including grandparents, adult children, and family celebrations.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational/#article",
      headline: "Scenic River Cruises for Families & Multigenerational Groups",
      description:
        "A complete guide to family travel on Scenic River Cruises, including best multigenerational groups, itineraries, dining, suites, celebrations, and tips for booking the best Scenic family cruise.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational/#breadcrumb",
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
          name: "Scenic River Cruises for Families & Multigenerational Groups",
          item: "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational/#itemlist",
      name: "Scenic River Cruises for Families & Multigenerational Groups — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Is Scenic a Good Choice for Families?" },
        { "@type": "ListItem", position: 3, name: "Why Families Love River Cruising" },
        { "@type": "ListItem", position: 4, name: "Best Multigenerational Family Groups" },
        { "@type": "ListItem", position: 5, name: "Best Scenic Itineraries for Families" },
        { "@type": "ListItem", position: 6, name: "Activities Everyone Can Enjoy" },
        { "@type": "ListItem", position: 7, name: "Dining for Families" },
        { "@type": "ListItem", position: 8, name: "Suite Options for Families" },
        { "@type": "ListItem", position: 9, name: "Family Celebrations Onboard" },
        { "@type": "ListItem", position: 10, name: "Is Scenic Good for Children?" },
        { "@type": "ListItem", position: 11, name: "Common Family Planning Mistakes" },
        { "@type": "ListItem", position: 12, name: "Scenic vs Ocean Cruises for Families" },
        { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 14, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/family-multigenerational/#faq",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question || faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer || faq.a,
        },
      })),
    },
  ],
};

const ScenicRiverCruisesForFamilies = () => {
  const familyRivers = data.familyItineraries.cards.map((item) => ({
    name: item.title,
    description: item.description,
    bestFor: item.bestFor,
    highlights: item.highlights || item.bullets,
    // image: itineraryImages[item.title],
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

      {/* ── Section 2: Quick Answer ───────────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.title}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
      />

      {/* ── Section 3: Is Scenic a Good Choice for Families? ───────── */}
      <EditorialIntroSection
        eyebrow={data.isScenicGoodFamilies.eyebrow}
        heading={data.isScenicGoodFamilies.heading}
        paragraphs={data.isScenicGoodFamilies.paragraphs}
        highlights={data.isScenicGoodFamilies.highlights}
        badgeTitle={data.isScenicGoodFamilies.badgeTitle}
        badgeDescription={data.isScenicGoodFamilies.badgeDescription}
      />

      {/* ── Section 4: Why Families Love River Cruising ───────────── */}
      <InclusionsList
        title={data.whyFamiliesLove.title}
        inclusions={data.whyFamiliesLove.inclusions}
        expertNote={data.whyFamiliesLove.expertNote}
      />

      {/* ── Section 5: Inline CTA 1 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
      />

      {/* ── Section 6: Best Multigenerational Family Groups ───────── */}
      <TravelerPersonaCards
        title={data.bestFamilyGroups.title}
        subtitle={data.bestFamilyGroups.subtitle}
        personas={data.bestFamilyGroups.personas}
      />

      {/* ── Section 7: Best Scenic Itineraries for Families ───────── */}
      <AlternatingRiverShowcase
        title={data.familyItineraries.title}
        description={data.familyItineraries.subtitle}
        rivers={familyRivers}
      />

      {/* ── Section 8: Activities & Dining for Families ──────────── */}
      <ProsConsCards
        title={data.activitiesAndDining.title}
        prosTitle={data.activitiesAndDining.prosTitle}
        consTitle={data.activitiesAndDining.consTitle}
        bestFor={data.activitiesAndDining.bestFor}
        notBestFor={data.activitiesAndDining.notBestFor}
        bottomNote={data.activitiesAndDining.bottomNote}
        type={data.activitiesAndDining.type}
        bgClass={data.activitiesAndDining.bgClass}
      />

      {/* ── Section 9: Inline CTA 2 ──────────────────────────────── */}
      <CenterCTA
        theme="light"
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
      />

      {/* ── Section 10: Suite Options for Families ────────────────── */}
      <FeatureSplit
        theme="light"
        imagePosition="right"
        title={data.suiteOptions.title}
        subtitles={data.suiteOptions.subtitles}
        features={data.suiteOptions.features}
        summary={data.suiteOptions.summary}
      />

      {/* ── Section 11: Is Scenic Good for Children? ──────────────── */}
      <ProsConsCards
        title={data.isScenicGoodForChildren.title}
        prosTitle={data.isScenicGoodForChildren.prosTitle}
        consTitle={data.isScenicGoodForChildren.consTitle}
        bestFor={data.isScenicGoodForChildren.bestFor}
        notBestFor={data.isScenicGoodForChildren.notBestFor}
        bottomNote={data.isScenicGoodForChildren.bottomNote}
        type={data.isScenicGoodForChildren.type}
        bgClass={data.isScenicGoodForChildren.bgClass}
      />

      {/* ── Section 12: Common Family Planning Mistakes ───────────── */}
      <MistakesGrid data={data.commonMistakes} />

      {/* ── Section 13: Inline CTA 3 ──────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
      />

      {/* ── Section 14: Scenic vs Ocean Cruises for Families ──────── */}
      <ComparisonTable data={data.cruiseLineComparison} />

      {/* ── Section 15: Why Book Through a Luxury Travel Advisor? ─── */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        cards={data.whyBookAdvisor.items}
        columns={4}
        stagger={false}
      />

      {/* ── Section 16: Angela Hughes Authority Credentials ───────── */}
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

      {/* ── Section 17: Frequently Asked Questions ────────────────── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle:
            "Everything families need to know before booking a Scenic River Cruise.",
          faqs: data.faqs,
        }}
      />

      {/* ── Section 18: Final Verdict ─────────────────────────────── */}
      <LuxuryIntroSection
        heading={data.finalVerdict.title}
        description={data.finalVerdict.paragraphs.join("\n\n")}
        highlights={data.finalVerdict.sections[0].bullets}
      />

      {/* ── Section 19: Final Center CTA ──────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.finalVerdict.ctaText}
        description="At Trips & Ships Luxury Travel, we'll help you plan every detail of your family Scenic cruise — from reserving adjacent suites to coordinating flights, transfers, and private group excursions."
        buttonText="Contact Angela Hughes"
        buttonLink={data.finalVerdict.ctaLink}
      />
    </div>
  );
};

export default ScenicRiverCruisesForFamilies;