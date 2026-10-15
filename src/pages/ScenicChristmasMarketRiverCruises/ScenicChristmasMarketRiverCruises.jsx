import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import InclusionsList from "../../components/ui/InclusionsList";
import CenterCTA from "../../components/ui/CenterCTA";
import AlternatingRiverShowcase from "../../components/ui/AlternatingRiverShowcase";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ProsConsCards from "../../components/ui/ProsConsCards";
import FeatureSplit from "../../components/ui/FeatureSplit";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import MistakesGrid from "../../components/ui/MistakesGrid";
import ComparisonTable from "../../components/ui/ComparisonTable";
import CardGrid from "../../components/ui/CardGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";

// Asset Images (Commented out per request)
// import AboutImage from "../../assets/AboutAngela3.jpeg";
// import HeroImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-hero.jpg";
// import DiningImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-dining.jpg";
// import MarketImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-market.jpg";
// import ExcursionImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-excursion.jpg";

// Itinerary Images (Commented out per request)
// import RhineImg from "../../assets/ScenicRiverCruises/scenic-rhine-river-cruise-castles-vineyards.webp";
// import DanubeImg from "../../assets/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";

// const itineraryImages = {
//   "Rhine Christmas Market Cruise — Best Overall": RhineImg,
//   "Danube Christmas Market Cruise": DanubeImg,
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/christmas-markets/#webpage",
      name: "Scenic Christmas Market River Cruises (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/christmas-markets",
      description:
        "Experience Europe's magical Christmas markets on a Scenic River Cruise. Discover the best itineraries, destinations, costs, what's included, and expert tips for planning your holiday river cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/christmas-markets/#article",
      headline: "Scenic Christmas Market River Cruises",
      description:
        "A complete guide to Scenic Christmas Market River Cruises, including the best Rhine and Danube itineraries, what's included, packing tips, and how to plan your holiday river cruise.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/christmas-markets/#breadcrumb",
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
          name: "Scenic Christmas Market River Cruises",
          item: "https://www.tripsandships.com/scenic-river-cruises/christmas-markets",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/christmas-markets/#itemlist",
      name: "Scenic Christmas Market River Cruises — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Christmas Market Cruise?" },
        { "@type": "ListItem", position: 3, name: "Best Scenic Christmas Market Itineraries" },
        { "@type": "ListItem", position: 4, name: "What Makes European Christmas Markets Special?" },
        { "@type": "ListItem", position: 5, name: "Scenic Enrich & Scenic Freechoice Experiences" },
        { "@type": "ListItem", position: 6, name: "Christmas Dining Onboard" },
        { "@type": "ListItem", position: 7, name: "What Should You Pack? Is It Cold?" },
        { "@type": "ListItem", position: 8, name: "Who Should Take a Scenic Christmas Market Cruise?" },
        { "@type": "ListItem", position: 9, name: "Common Booking Mistakes" },
        { "@type": "ListItem", position: 10, name: "Scenic vs Other Christmas Market River Cruises" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 12, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/christmas-markets/#faq",
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

const ScenicChristmasMarketRiverCruises = () => {
  const christmasRivers = data.christmasItineraries.cards.map((item) => ({
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

      {/* ── Section 3: Why Choose a Scenic Christmas Market Cruise? ─ */}
      <InclusionsList
        title={data.whyChooseScenic.title}
        inclusions={data.whyChooseScenic.inclusions}
        expertNote={data.whyChooseScenic.expertNote}
      />

      {/* ── Section 4: Inline CTA 1 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
      />

      {/* ── Section 5: Best Scenic Christmas Market Itineraries ───── */}
      <AlternatingRiverShowcase
        title={data.christmasItineraries.title}
        description={data.christmasItineraries.subtitle}
        rivers={christmasRivers}
      />

      {/* ── Section 6: What Makes European Christmas Markets Special? */}
      <EditorialIntroSection
        eyebrow={data.marketHighlights.eyebrow}
        heading={data.marketHighlights.heading}
        paragraphs={data.marketHighlights.paragraphs}
        highlights={data.marketHighlights.highlights}
        badgeTitle={data.marketHighlights.badgeTitle}
        badgeDescription={data.marketHighlights.badgeDescription}
      />

      {/* ── Section 7: Scenic Enrich & Scenic Freechoice ──────────── */}
      <ProsConsCards
        title={data.enrichAndFreechoice.title}
        prosTitle={data.enrichAndFreechoice.prosTitle}
        consTitle={data.enrichAndFreechoice.consTitle}
        bestFor={data.enrichAndFreechoice.bestFor}
        notBestFor={data.enrichAndFreechoice.notBestFor}
        bottomNote={data.enrichAndFreechoice.bottomNote}
        type={data.enrichAndFreechoice.type}
        bgClass={data.enrichAndFreechoice.bgClass}
      />

      {/* ── Section 8: Inline CTA 2 ──────────────────────────────── */}
      <CenterCTA
        theme="light"
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
      />

      {/* ── Section 9: Christmas Dining Onboard ───────────────────── */}
      <FeatureSplit
        theme="white"
        imagePosition="left"
        title={data.christmasDining.title}
        subtitles={data.christmasDining.subtitles}
        features={data.christmasDining.features}
        summary={data.christmasDining.summary}
      />

      {/* ── Section 10: Who Should Take a Scenic Christmas Cruise? ── */}
      <TravelerPersonaCards
        title={data.whoShouldGo.title}
        subtitle={data.whoShouldGo.subtitle}
        personas={data.whoShouldGo.personas}
      />

      {/* ── Section 11: What Should You Pack? Is It Cold? ─────────── */}
      <ExpertAuthorityChecklist
        title={data.packingAndWeather.title}
        subtitle={data.packingAndWeather.subtitle}
        points={data.packingAndWeather.points}
      />

      {/* ── Section 12: Common Booking Mistakes ────────────────────── */}
      <MistakesGrid data={data.commonMistakes} />

      {/* ── Section 13: Inline CTA 3 ──────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
      />

      {/* ── Section 14: Scenic vs Other Christmas Market River Cruises */}
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
            "Everything you need to know before booking a Scenic Christmas Market River Cruise.",
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
        description="At Trips & Ships Luxury Travel, we'll help you plan every detail of your holiday Scenic cruise — from reserving preferred suites to coordinating flights and festive hotel stays."
        buttonText="Contact Angela Hughes"
        buttonLink={data.finalVerdict.ctaLink}
      />
    </div>
  );
};

export default ScenicChristmasMarketRiverCruises;