import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CenterCTA from "../../components/ui/CenterCTA";
import CardGrid from "../../components/ui/CardGrid";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import LuxuryCruiseComparisonTable from "../../components/ui/LuxuryCruiseComparisonTable";
import MistakesGrid from "../../components/ui/MistakesGrid";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ExpertPlanning from "../../components/ui/ExpertPlanning";

/* ── Placeholder image imports (uncomment when assets are ready) ─────
import HeroImage from "../../assets/ScenicItineraries/scenic-itineraries-hero.webp";
import RhineImage from "../../assets/ScenicItineraries/scenic-rhine.webp";
import DanubeImage from "../../assets/ScenicItineraries/scenic-danube.webp";
import ShipExteriorImage from "../../assets/ScenicItineraries/scenic-ship-exterior.webp";
─────────────────────────────────────────────────────────────────── */

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#webpage",
      name: "Best Scenic River Cruise Itineraries (2026) | Top Routes in Europe",
      url: "https://www.tripsandships.com/scenic-river-cruises/best-itineraries",
      description:
        "Discover the best Scenic River Cruise itineraries for 2026, including the Danube, Rhine, Douro, Rhône, Seine, Christmas Markets, and Tulip cruises. Compare destinations, highlights, and find the perfect luxury river cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#article",
      headline: "Best Scenic River Cruise Itineraries",
      description:
        "A complete comparison of Scenic's most popular river cruise itineraries, including the Rhine, Danube, Douro, Rhône, Seine, Christmas Markets, and Tulip cruises, and how to choose the right route for your travel style.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#breadcrumb",
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
          name: "Best Scenic River Cruise Itineraries",
          item: "https://www.tripsandships.com/scenic-river-cruises/best-itineraries",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#itemlist",
      name: "Best Scenic River Cruise Itineraries Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Best Scenic River Cruise Itineraries: The Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Quick Comparison of Scenic's Best Itineraries" },
        { "@type": "ListItem", position: 3, name: "Best Overall: Rhine River Cruise" },
        { "@type": "ListItem", position: 4, name: "Scenic Itineraries by River" },
        { "@type": "ListItem", position: 5, name: "Which Itinerary Offers the Best Value?" },
        { "@type": "ListItem", position: 6, name: "Best for First-Time Travelers: Danube River Cruise" },
        { "@type": "ListItem", position: 7, name: "Which Itinerary Should You Choose?" },
        { "@type": "ListItem", position: 8, name: "Scenic vs. Other River Cruise Itineraries" },
        { "@type": "ListItem", position: 9, name: "Common Mistakes When Choosing an Itinerary" },
        { "@type": "ListItem", position: 10, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 11, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/best-itineraries/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Scenic River Cruise itinerary is the best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Rhine River Cruise is widely considered Scenic's best overall itinerary because it combines castles, vineyards, charming villages, and historic cities.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic itinerary is best for first-time travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Danube and Rhine are both excellent choices for first-time river cruisers thanks to their iconic destinations and diverse experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What is Scenic's most popular river cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Rhine River and Danube River itineraries are among Scenic's most popular European cruises.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic cruise is best for wine lovers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Douro River Cruise through Portugal is ideal for wine enthusiasts, offering vineyard visits and Port wine tastings.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic itinerary is best for Christmas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic's Christmas Market cruises along the Rhine and Danube are among the most popular seasonal itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic cruise is best for couples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many couples enjoy the Rhine, Rhône, and Douro itineraries for their romantic scenery, fine dining, and intimate atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Scenic cruise for food lovers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Rhône River Cruise is known for its gourmet cuisine, French wines, and culinary experiences.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to take a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring and fall are popular for pleasant weather, while December is ideal for Christmas Market cruises and spring is perfect for Tulip cruises.",
          },
        },
        {
          "@type": "Question",
          name: "Are Scenic excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences on most itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "How long are most Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most itineraries range from 7 to 15 nights, with some Grand Journeys lasting even longer.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose my itinerary or ship first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your itinerary usually has a greater impact on your overall experience than the specific Scenic ship, as the fleet maintains a consistent luxury standard.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book a Scenic itinerary through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can compare itineraries, recommend the best sailing for your interests, explain promotions, and coordinate your complete vacation.",
          },
        },
      ],
    },
  ],
};

const BestScenicRiverCruiseItineraries = () => {
  return (
    <div className="w-full bg-white">
      <Helmet>
        <title>Best Scenic River Cruise Itineraries | Top Routes in Europe</title>
        <meta name="title" content="Best Scenic River Cruise Itineraries | Which Cruise Should You Choose?" />
        <meta
          name="description"
          content="Discover the best Scenic River Cruise itineraries for 2026, including the Danube, Rhine, Douro, Rhône, Seine, Christmas Markets, and Tulip cruises. Compare destinations, highlights, and find the perfect luxury river cruise."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/best-itineraries" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* 1. HERO */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        // backgroundImage={HeroImage}
      />

      {/* 2. QUICK ANSWER */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        image1Placeholder="SCENIC RHINE & DANUBE"
        image2Placeholder="SCENIC LUXURY SUITE & BALCONY"
        // image1={QuickAnswerImage1}
        // image2={QuickAnswerImage2}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
      />

      {/* 3. QUICK ITINERARY COMPARISON */}
      <ComparisonTable data={data.quickComparisonTable} />

      {/* 4. BEST OVERALL: RHINE RIVER CRUISE */}
      <EditorialIntroSection
        eyebrow={data.bestOverallRhine.eyebrow}
        title={data.bestOverallRhine.title}
        paragraphs={data.bestOverallRhine.paragraphs}
        highlights={data.bestOverallRhine.highlights}
        badgeTitle={data.bestOverallRhine.badgeTitle}
        badgeDescription={data.bestOverallRhine.badgeDescription}
        placeholderLabel={data.bestOverallRhine.placeholderLabel}
        // image={RhineImage}
      />

      {/* 5. INLINE CTA 1 */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        theme="dark"
      />

      {/* 6. SCENIC ITINERARIES BY RIVER */}
      <CardGrid
        title={data.itinerariesByRiver.title}
        subtitle={data.itinerariesByRiver.subtitle}
        cards={data.itinerariesByRiver.cards}
        columns={3}
        stagger={false}
      />

      {/* 7. WHICH ITINERARY OFFERS THE BEST VALUE? */}
      <ValuePropositionHighlight
        title={data.bestValue.title}
        subtitle={data.bestValue.subtitle}
        items={data.bestValue.items}
        imageOverlayText="Rhine & Danube: Greatest Overall Itinerary Value"
        // image={RhineImage}
      />

      {/* 8. WHICH ITINERARY SHOULD YOU CHOOSE? */}
      <ThreeColumnGrid
        title={data.chooseItinerary.title}
        subtitle={data.chooseItinerary.subtitle}
        items={data.chooseItinerary.items}
      />

      {/* 9. INLINE CTA 2 */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        theme="light"
      />

      {/* 10. SCENIC VS OTHER RIVER CRUISE ITINERARIES */}
      <LuxuryCruiseComparisonTable
        title={data.comparisonWithOthers.title}
        headers={data.comparisonWithOthers.headers}
        rows={data.comparisonWithOthers.rows}
      />

      {/* 11. COMMON MISTAKES WHEN CHOOSING AN ITINERARY */}
      <MistakesGrid
        title={data.commonMistakes.title}
        items={data.commonMistakes.items}
      />

      {/* 12. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
      <CurvilinearGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        paragraphs={data.whyBookAdvisor.paragraphs}
        items={data.whyBookAdvisor.items}
      />

      {/* 13. ANGELA HUGHES AUTHORITY BOX */}
      <ExpertCredentials
        title={data.expertAuthority.title}
        authorName={data.expertAuthority.authorName}
        image={AboutImage}
        badge={data.expertAuthority.badge}
        authorityBoxTitle={data.expertAuthority.authorityBoxTitle}
        authoritySubtitle={data.expertAuthority.authoritySubtitle}
        experienceBadge={data.expertAuthority.experienceBadge}
        credentials={data.expertAuthority.credentials}
        ctaText={data.expertAuthority.ctaText}
        ctaLink={data.expertAuthority.ctaLink}
      />

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion data={data.faqs} />

      {/* 15. FINAL VERDICT */}
      <ExpertPlanning
        title={data.verdict.title}
        subtitle={data.verdict.subtitle}
        sections={data.verdict.sections}
      />

      {/* 16. FINAL PLANNING CTA */}
      <CenterCTA
        title={data.finalCta.title}
        description={data.finalCta.description}
        buttonText={data.finalCta.buttonText}
        buttonLink={data.finalCta.buttonLink}
        theme="dark"
        // image={ShipExteriorImage}
      />
    </div>
  );
};

export default BestScenicRiverCruiseItineraries;