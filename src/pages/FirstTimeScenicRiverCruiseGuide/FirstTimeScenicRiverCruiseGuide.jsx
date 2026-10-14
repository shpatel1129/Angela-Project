import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
// import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import CenterCTA from "../../components/ui/CenterCTA";
import AlternatingRiverShowcase from "../../components/ui/AlternatingRiverShowcase";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import BentoQuickFacts from "../../components/ui/BentoQuickFacts";
import MistakesGrid from "../../components/ui/MistakesGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ExpertPlanning from "../../components/ui/ExpertPlanning";

// Asset Images (Commented out)
// import ScenicRiverCruisesHero from "../../assets/ScenicRiverCruises/scenic-river-cruises-ultra-luxury-europe-hero.webp";
// import WhyChooseScenicImage from "../../assets/ScenicRiverCruises/why-choose-scenic-all-inclusive-luxury-river-cruises.webp";
// import WhatMakesScenicDifferent1Image from "../../assets/ScenicRiverCruises/scenic-space-ship-river-cruise-experience.webp";
// import WhatMakesScenicDifferent2Image from "../../assets/ScenicRiverCruises/scenic-luxury-river-cruise-onboard-lounge.webp";
// import DanubeImage from "../../assets/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";
// import RhineImage from "../../assets/ScenicRiverCruises/scenic-rhine-river-cruise-castles-vineyards.webp";
// import RhoneImage from "../../assets/ScenicRiverCruises/scenic-rhone-river-cruise-provence-france.webp";
// import DouroImage from "../../assets/ScenicRiverCruises/scenic-douro-river-cruise-portugal-valley.webp";
// import SuitesAccommodations1Image from "../../assets/ScenicRiverCruises/scenic-sun-lounge-balcony-suite-accommodations.webp";
// import SuitesAccommodations2Image from "../../assets/ScenicRiverCruises/scenic-space-ship-butler-service-luxury-suite.webp";
// import DiningExperienceImage from "../../assets/ScenicRiverCruises/scenic-gourmet-fine-dining-culinary-experience.webp";
// import ElegantEveningExperiencesImage from "../../assets/ScenicRiverCruises/scenic-river-cruises-elegant-evening-entertainment.webp";
// import ScenicRiverShipsImage from "../../assets/ScenicRiverCruises/scenic-space-ships-luxury-fleet-overview.webp";
// import ComprehensiveExperienceImage from "../../assets/ScenicRiverCruises/scenic-ultra-luxury-river-cruising-expert-booking-cta.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/first-time-guide/#webpage",
      name: "First-Time Scenic River Cruise Guide (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/first-time-guide",
      description:
        "Planning your first Scenic River Cruise? Learn what to expect, what's included, how to choose the right itinerary, cabins, excursions, costs, and expert tips before you book.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/first-time-guide/#article",
      headline: "First-Time Scenic River Cruise Guide | Tips, Costs & What to Expect",
      description:
        "A complete beginner's guide to Scenic River Cruises covering itineraries, cabins, what's included, a typical day onboard, packing tips, and common first-time mistakes to avoid.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/first-time-guide/#breadcrumb",
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
          name: "First-Time Scenic River Cruise Guide",
          item: "https://www.tripsandships.com/scenic-river-cruises/first-time-guide",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/first-time-guide/#itemlist",
      name: "First-Time Scenic River Cruise Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer: Is Scenic Good for First-Timers?" },
        { "@type": "ListItem", position: 2, name: "Why Choose Scenic for Your First River Cruise?" },
        { "@type": "ListItem", position: 3, name: "What Makes Scenic Different?" },
        { "@type": "ListItem", position: 4, name: "Which Itinerary Is Best for First-Time Travelers?" },
        { "@type": "ListItem", position: 5, name: "Which Cabin Should First-Time Guests Book?" },
        { "@type": "ListItem", position: 6, name: "What's Included and What's Not" },
        { "@type": "ListItem", position: 7, name: "What Is a Typical Day Like?" },
        { "@type": "ListItem", position: 8, name: "How Formal Is Scenic?" },
        { "@type": "ListItem", position: 9, name: "Who Is Scenic Best For?" },
        { "@type": "ListItem", position: 10, name: "Essential Packing Tips" },
        { "@type": "ListItem", position: 11, name: "Common First-Time Mistakes to Avoid" },
        { "@type": "ListItem", position: 12, name: "Should You Book Through a Travel Advisor?" },
        { "@type": "ListItem", position: 13, name: "Final Verdict & Planning" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/first-time-guide/#faq",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ],
};

const FirstTimeScenicRiverCruiseGuide = () => {
  // Itinerary items mapped
  const riverItems = data.bestItineraries.rivers.map((river) => ({
    ...river,
    // image: undefined,
  }));

  // Which cabin recommendation features
  const cabinItems = data.whichCabin.items.map((item) => ({
    ...item,
    // image: undefined,
  }));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy-950">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── NAVBAR ── */}
      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        // backgroundImage={ScenicRiverCruisesHero}
      />

      {/* ── 2. QUICK ANSWER (AI OVERVIEW) ── */}
      <div id="quick-answer">
        <AsymmetricStoryIntro
          eyebrow={data.quickAnswer.eyebrow}
          heading={data.quickAnswer.title}
          paragraphs={data.quickAnswer.paragraphs}
          highlights={data.quickAnswer.highlights}
          // image1={WhyChooseScenicImage}
          // image2={ScenicRiverShipsImage}
          ctaText={data.quickAnswer.ctaText}
          ctaLink={data.quickAnswer.ctaLink}
        />
      </div>

      {/* ── 3. WHY CHOOSE SCENIC FOR YOUR FIRST RIVER CRUISE? ── */}
      <div id="why-choose-scenic">
        <EditorialIntroSection
          eyebrow={data.whyChooseScenic.eyebrow}
          heading={data.whyChooseScenic.title}
          paragraphs={data.whyChooseScenic.paragraphs}
          highlights={data.whyChooseScenic.highlights}
          badgeTitle={data.whyChooseScenic.badgeTitle}
          badgeDescription={data.whyChooseScenic.badgeDescription}
          // image={ScenicRiverShipsImage}
        />
      </div>

      {/* ── 4. WHAT MAKES SCENIC DIFFERENT? ── */}
      <div id="what-makes-scenic-different">
        <FeatureGrid
          title={data.whatMakesScenicDifferent.title}
          subtitle={data.whatMakesScenicDifferent.subtitle}
          features={data.whatMakesScenicDifferent.features}
          bgClass="bg-white"
        />
      </div>

      {/* ── INLINE CTA 1 ── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        // image={WhatMakesScenicDifferent1Image}
        theme="dark"
      />

      {/* ── 5. WHICH ITINERARY IS BEST FOR FIRST-TIME TRAVELERS? ── */}
      <div id="best-itineraries">
        <AlternatingRiverShowcase
          title={data.bestItineraries.title}
          description={data.bestItineraries.description}
          rivers={riverItems}
        />
      </div>

      {/* ── 6. WHICH CABIN SHOULD FIRST-TIME GUESTS BOOK? ── */}
      <div id="which-cabin">
        <LuxuryFeatureShowcase
          title={data.whichCabin.title}
          subtitle={data.whichCabin.subtitle}
          items={cabinItems}
        />
      </div>

      {/* ── 7. WHAT'S INCLUDED & WHAT'S NOT? ── */}
      <div id="whats-included-and-not">
        <ProsConsCards
          title={data.whatsIncludedAndNot.title}
          prosTitle={data.whatsIncludedAndNot.prosTitle}
          consTitle={data.whatsIncludedAndNot.consTitle}
          bestFor={data.whatsIncludedAndNot.bestFor}
          notBestFor={data.whatsIncludedAndNot.notBestFor}
          bottomNote={data.whatsIncludedAndNot.bottomNote}
          type="compare"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ── 8. WHAT IS A TYPICAL DAY LIKE? ── */}
      <div id="typical-day">
        <StepByStepGuide
          title={data.typicalDay.title}
          subtitle={data.typicalDay.subtitle}
          steps={data.typicalDay.steps}
        />
      </div>

      {/* ── 9. HOW FORMAL IS SCENIC? ── */}
      <div id="how-formal">
        <EditorialIntroSection
          eyebrow={data.howFormal.eyebrow}
          heading={data.howFormal.title}
          paragraphs={data.howFormal.paragraphs}
          highlights={data.howFormal.highlights}
          badgeTitle={data.howFormal.badgeTitle}
          badgeDescription={data.howFormal.badgeDescription}
          // image={ElegantEveningExperiencesImage}
        />
      </div>

      {/* ── INLINE CTA 2 ── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        // image={WhatMakesScenicDifferent2Image}
        theme="light"
      />

      {/* ── 10. WHO IS SCENIC BEST FOR? ── */}
      <div id="who-is-scenic-best-for">
        <GenericChecklistCards
          title={data.whoIsScenicBestFor.title}
          subtitle={data.whoIsScenicBestFor.subtitle}
          cards={data.whoIsScenicBestFor.cards}
        />
      </div>

      {/* ── 11. PACKING TIPS ── */}
      <div id="packing-tips">
        <BentoQuickFacts
          title={data.packingTips.title}
          paragraphs={data.packingTips.paragraphs}
          items={data.packingTips.items}
        />
      </div>

      {/* ── 12. COMMON FIRST-TIME MISTAKES ── */}
      <div id="common-mistakes">
        <MistakesGrid
          title={data.commonMistakes.title}
          items={data.commonMistakes.items}
        />
      </div>

      {/* ── 13. SHOULD YOU BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <div id="why-book-through-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 14. ANGELA HUGHES AUTHORITY BOX ── */}
      <div id="Asc-expert-insight">
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.badge}
          authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
          authoritySubtitle={data.angelaHughes.authoritySubtitle}
          experienceBadge={data.angelaHughes.experienceBadge}
          // image={AboutImage}
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          ctaText={data.angelaHughes.ctaText}
          ctaLink={data.angelaHughes.ctaLink}
        />
      </div>

      {/* ── 15. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything first-time travelers need to know before booking a Scenic River Cruise.",
            faqs: data.faqs,
          }}
        />
      </div>

      {/* ── 16. FINAL VERDICT & CTA ── */}
      <div id="final-verdict">
        <ExpertPlanning
          title={data.finalVerdict.title}
          subtitle={data.finalVerdict.subtitle}
          sections={data.finalVerdict.sections}
        />
        <CenterCTA
          title={data.finalVerdict.title}
          description={data.finalVerdict.paragraphs[0]}
          buttonText={data.finalVerdict.ctaText}
          buttonLink={data.finalVerdict.ctaLink}
          // image={ComprehensiveExperienceImage}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default FirstTimeScenicRiverCruiseGuide;