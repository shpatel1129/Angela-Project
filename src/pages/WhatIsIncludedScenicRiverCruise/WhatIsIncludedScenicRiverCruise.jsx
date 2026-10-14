import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import InclusionCheckerGrid from "../../components/ui/InclusionCheckerGrid";
import BentoQuickFacts from "../../components/ui/BentoQuickFacts";
import ButlerServiceDetails from "../../components/ui/ButlerServiceDetails";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import InclusionsList from "../../components/ui/InclusionsList";
import CenterCTA from "../../components/ui/CenterCTA";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ExpertPlanning from "../../components/ui/ExpertPlanning";

// Asset Images
import HeroImage from "../../assets/WhatIncludedScenicRiverCruise/what-is-included-on-a-scenic-river-cruise-hero.webp";
import QuickAnswerImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-river-cruise-all-inclusive-amenities-quick-answer.webp";
import MorningComfortImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-butler-service-morning-coffee-dining-assistance.webp";
import WardrobeCareImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-butler-service-wardrobe-care-daily-concierge.webp";
import BreakfastImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-river-cruise-included-gourmet-breakfast.webp";
import LunchImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-river-cruise-included-regional-gourmet-lunch.webp";
import DinnerImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-river-cruise-included-multi-course-dinner.webp";
import PremiumBeveragesImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-river-cruises-included-premium-beverages-wine.webp";
import InlineCtaImage from "../../assets/WhatIncludedScenicRiverCruise/scenic-all-inclusive-packages-inclusions-consultation-cta.webp";
import FinalCtaImage from "../../assets/WhatIncludedScenicRiverCruise/start-planning-your-scenic-river-cruise-voyage.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#webpage",
      name: "What Is Included on a Scenic River Cruise? | Complete Guide (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/what-is-included",
      description:
        "Discover what's included on a Scenic River Cruise, from butler service and gourmet dining to premium drinks, excursions, airport transfers, gratuities, and luxury amenities.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#article",
      headline: "What Is Included on a Scenic River Cruise? | All-Inclusive Luxury Guide",
      description:
        "A complete breakdown of everything included on a Scenic River Cruise — suites, butler service, dining, beverages, excursions, transfers, gratuities, and more.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#breadcrumb",
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
          name: "What Is Included on a Scenic River Cruise?",
          item: "https://www.tripsandships.com/scenic-river-cruises/what-is-included",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#itemlist",
      name: "What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "What's Included at a Glance" },
        { "@type": "ListItem", position: 3, name: "Luxury Suite Accommodations" },
        { "@type": "ListItem", position: 4, name: "Butler Service" },
        { "@type": "ListItem", position: 5, name: "Gourmet Dining" },
        { "@type": "ListItem", position: 6, name: "Premium Beverages" },
        { "@type": "ListItem", position: 7, name: "Scenic Freechoice & Scenic Enrich" },
        { "@type": "ListItem", position: 8, name: "Airport Transfers & Wi-Fi" },
        { "@type": "ListItem", position: 9, name: "Gratuities" },
        { "@type": "ListItem", position: 10, name: "Entertainment & Wellness" },
        { "@type": "ListItem", position: 11, name: "What's Not Usually Included" },
        { "@type": "ListItem", position: 12, name: "Is Scenic Really All-Inclusive?" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/what-is-included/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are drinks included on Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Premium wines, beer, spirits, cocktails, coffee, tea, soft drinks, and bottled water are generally included throughout your cruise.",
          },
        },
        {
          "@type": "Question",
          name: "Is butler service included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every Scenic suite includes personalized butler service.",
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
          name: "Is Wi-Fi included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complimentary Wi-Fi is available throughout the ship.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Onboard gratuities are included in your cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Are airport transfers included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, on eligible itineraries and qualifying flight arrangements.",
          },
        },
        {
          "@type": "Question",
          name: "Are specialty restaurants included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic includes gourmet dining and specialty culinary experiences available on your ship.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to pay extra onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most major expenses are already included, though optional spa treatments, premium shopping, and certain specialty experiences may cost extra.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic more inclusive than other river cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic is considered one of the most all-inclusive luxury river cruise lines, with more amenities included than many competitors.",
          },
        },
        {
          "@type": "Question",
          name: "Are laundry services included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Complimentary laundry service is included for select suite categories (such as Royal Suites and Balcony Suites) on Scenic River Cruises, and laundry arrangements can be handled directly by your butler.",
          },
        },
        {
          "@type": "Question",
          name: "Are bicycles or e-bikes included for exploring ports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic space-ships carry a fleet of complimentary electronically-assisted bicycles (e-bikes) for guests to use either on guided excursions or for independent exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can explain inclusions, compare itineraries, recommend the best suite, and ensure you receive the best available value.",
          },
        },
      ],
    },
  ],
};

/* ── Main Component ──────────────────────────────────────────────── */
const WhatsIncludedScenicRiverCruise = () => {
  return (
    <div className="w-full bg-white font-sans antialiased text-navy-950">
      <Helmet>
        <title>What Is Included on a Scenic River Cruise? | Complete Guide</title>
        <meta
          name="title"
          content="What Is Included on Scenic River Cruises? | All-Inclusive Luxury Guide"
        />
        <meta
          name="description"
          content="Discover what's included on a Scenic River Cruise, from butler service and gourmet dining to premium drinks, excursions, airport transfers, gratuities, and luxury amenities."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/what-is-included" />
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

      {/* ── 2. QUICK ANSWER ─────────────────────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        description={data.quickAnswer.description}
        highlights={data.quickAnswer.highlights}
        badgeTitle={data.quickAnswer.badgeTitle}
        badgeDescription={data.quickAnswer.badgeDescription}
        placeholderLabel={data.quickAnswer.placeholderLabel}
        image={QuickAnswerImage}
      />

      {/* ── 3. WHAT'S INCLUDED AT A GLANCE ──────────────────────────── */}
      <InclusionCheckerGrid
        eyebrow={data.inclusionsGlance.eyebrow}
        title={data.inclusionsGlance.title}
        subtitle={data.inclusionsGlance.subtitle}
        inclusionsTitle={data.inclusionsGlance.inclusionsTitle}
        exclusionsTitle={data.inclusionsGlance.exclusionsTitle}
        inclusions={data.inclusionsGlance.inclusions}
        exclusions={data.inclusionsGlance.exclusions}
      />

      {/* ── 4. LUXURY SUITE ACCOMMODATIONS ──────────────────────────── */}
      <BentoQuickFacts
        title={data.suites.title}
        paragraphs={data.suites.paragraphs}
        items={data.suites.items}
      />

      {/* ── 5. BUTLER SERVICE ───────────────────────────────────────── */}
      <ButlerServiceDetails
        data={data.butlerService}
        images={[MorningComfortImage, WardrobeCareImage]}
      />

      {/* ── 6. GOURMET DINING ───────────────────────────────────────── */}
      <ThreeColumnGrid
        title={data.dining.title}
        subtitle={data.dining.subtitle}
        items={data.dining.items.map((item, idx) => ({
          ...item,
          image: [BreakfastImage, LunchImage, DinnerImage][idx]
        }))}
      />

      {/* ── 7. PREMIUM BEVERAGES ────────────────────────────────────── */}
      <InclusionsList
        title={data.beverages.title}
        expertNote={data.beverages.expertNote}
        inclusions={data.beverages.inclusions}
        image={PremiumBeveragesImage}
      />

      {/* ── 8. INLINE CTA 1 ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={InlineCtaImage}
        theme="dark"
      />

      {/* ── 9. SCENIC FREECHOICE & SCENIC ENRICH ─────────────────────── */}
      <TravelerPersonaCards
        title={data.shoreExcursions.title}
        subtitle={data.shoreExcursions.subtitle}
        personas={data.shoreExcursions.personas}
      />

      {/* ── 10. ENTERTAINMENT & ENRICHMENT / WELLNESS & FITNESS ─────── */}
      <GenericChecklistCards
        title={data.wellnessAndEntertainment.title}
        subtitle={data.wellnessAndEntertainment.subtitle}
        cards={data.wellnessAndEntertainment.cards}
      />

      {/* ── 11. IS SCENIC REALLY ALL-INCLUSIVE? & WORTH THE PRICE? ───── */}
      <CurvilinearGrid
        title={data.allInclusiveValue.title}
        subtitle={data.allInclusiveValue.subtitle}
        paragraphs={data.allInclusiveValue.paragraphs}
        items={data.allInclusiveValue.items}
      />

     

      {/* ── 13. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────── */}
      <AuthorityGrid
        title={data.travelAdvisor.title}
        subtitle={data.travelAdvisor.subtitle}
        items={data.travelAdvisor.items}
      />

      {/* ── 14. ANGELA HUGHES AUTHORITY BOX ─────────────────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        authorName={data.angelaHughes.authorName}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.credentials}
        image={AboutImage}
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

export default WhatsIncludedScenicRiverCruise;