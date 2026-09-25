import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import BrandShowcase from "../../components/ui/BrandShowcase";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import CardGrid from "../../components/ui/CardGrid";
import EditorialMistakes from "../../components/ui/EditorialMistakes";
import ComparisonTable from "../../components/ui/ComparisonTable";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "description":
        "Luxury travel planning and cruise advisory services specializing in personalized Seabourn cruise planning, suite selection, itinerary planning, promotions and travel arrangements."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/",
      "name": "Why Book Seabourn With Trips & Ships?",
      "headline": "Why Book Seabourn With Trips & Ships?",
      "description":
        "Discover why travelers book Seabourn with Trips & Ships. Get expert cruise advice, personalized suite selection, promotion monitoring and added amenities.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "about": { "@id": "https://www.tripsandships.com/#travelagency" },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#faq"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Seabourn Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Why Book Seabourn With Trips & Ships?",
          "item": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/why-book-with-us/#faq",
      "mainEntity": data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const SeabournWhyBookWithUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Why Book Seabourn With Trips & Ships?</title>
        <meta name="title" content="Book Seabourn With Trips & Ships | Luxury Cruise Advisors" />
        <meta
          name="description"
          content="Discover why travelers book Seabourn with Trips & Ships. Get expert cruise advice, personalized suite selection, promotion monitoring and added amenities."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/why-book-with-us/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText="Explore Advisor Benefits"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. EDITORIAL INTRO: THE ADVISOR ADVANTAGE ── */}
      <EditorialIntroSection
        eyebrow={data.advisorAdvantage.eyebrow}
        heading={data.advisorAdvantage.heading}
        paragraphs={data.advisorAdvantage.paragraphs}
        placeholderLabel={data.advisorAdvantage.placeholderLabel}
        badgeTitle={data.advisorAdvantage.badgeTitle}
        badgeDescription={data.advisorAdvantage.badgeDescription}
        highlights={data.advisorAdvantage.questions}
      />

      {/* ── 3. 12 WAYS SECTION (BENEFITS 1-4) ── */}
      <div id="advisor-benefits">
        <GenericChecklistCards
          title={data.benefitsSection1to4.title}
          subtitle={data.benefitsSection1to4.subtitle}
          cards={data.benefitsSection1to4.cards}
        />
      </div>

      {/* ── 4. BENEFITS 5 & 6 (PROMOTION MONITORING & VALUE OVER PRICE) ── */}
      <CostValueAnalysisCards
        title={data.promotionsAndValue.title}
        subtitle={data.promotionsAndValue.subtitle}
        includedTitle={data.promotionsAndValue.includedTitle}
        included={data.promotionsAndValue.included}
        extrasTitle={data.promotionsAndValue.extrasTitle}
        extras={data.promotionsAndValue.extras}
      />

      {/* ── 5. BENEFIT 7 (COMPARING SEABOURN WITH OTHER LUXURY CRUISE LINES) ── */}
      <BrandShowcase
        brand={data.compareCruiseLinesBrand}
        index={0}
      />

      {/* ── 6. BENEFITS 8 & 9 (LUXURY PERSPECTIVE & ADDED AMENITIES) ── */}
      <HighlightsSplit
        title={data.luxuryPerspectiveAndAmenities.title}
        items={data.luxuryPerspectiveAndAmenities.items}
      />

      {/* ── 7. BENEFITS 10, 11, 12 (SPECIAL OCCASIONS, PRE-TRIP & LOGISTICS SUPPORT) ── */}
      <CardGrid
        title={data.benefitsMilestonesAndSupport.title}
        subtitle={data.benefitsMilestonesAndSupport.subtitle}
        cards={data.benefitsMilestonesAndSupport.cards}
        columns={3}
      />

      {/* ── CTA 1: MID-PAGE ADVISOR PLANNING ── */}
      <CenterCTA
        title={data.ctas.midCta.title}
        description={data.ctas.midCta.description}
        buttonText={data.ctas.midCta.buttonText}
        buttonLink={data.ctas.midCta.buttonLink}
        theme="dark"
      />

      {/* ── 8. WHY THIS MATTERS MORE: 4 MISTAKES ── */}
      <EditorialMistakes
        subtitle="When you're spending significantly more on a vacation, small mistakes can become expensive mistakes. Luxury travel planning is about getting the details right before they become problems."
        mistakes={data.mistakes}
      />

      {/* ── 9. PLANNING TABLE: WHAT WE CAN HELP WITH ── */}
      <ComparisonTable
        data={data.planningTable}
      />

      {/* ── 10. VALUE OVER PRICE: 4 CRITICAL QUESTIONS ── */}
      <GenericChecklistCards
        title={data.priceQuestionsSection.title}
        subtitle={data.priceQuestionsSection.subtitle}
        cards={data.priceQuestionsSection.cards}
      />

      {/* ── 11. 7-STEP PROVEN BOOKING PROCESS ── */}
      <StepByStepGuide
        title="A Better Way to Book Seabourn"
        subtitle="OUR 7-STEP PROVEN PROCESS"
        steps={data.bookingSteps}
      />

      {/* ── 12. IS BOOKING SEABOURN WITH A TRAVEL ADVISOR WORTH IT? ── */}
      <HighlightsSplit
        title={data.worthItSection.title}
        items={data.worthItSection.items}
      />

      {/* ── 13. WHO BENEFITS MOST FROM BOOKING SEABOURN WITH TRIPS & SHIPS? ── */}
      <CardGrid
        title="Who Benefits Most From Booking Seabourn With Trips & Ships?"
        subtitle="Matching every traveler profile with the ideal ship, suite, and itinerary."
        cards={data.whoBenefits}
        columns={3}
      />

      {/* ── 14. THE TRIPS & SHIPS DIFFERENCE: EFFORTLESS LUXURY ── */}
      <BrandShowcase
        brand={data.tripsAndShipsDifferenceBrand}
        index={1}
      />

      {/* ── 15. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={data.angelaHughes.title}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        authoritySubtitle={data.angelaHughes.authoritySubtitle}
        experienceBadge={data.angelaHughes.experienceBadge}
        image={AboutImage}
        paragraphs={data.angelaHughes.paragraphs}
        credentials={data.angelaHughes.credentials}
        quote={data.angelaHughes.quote}
        quoteSubtitle={data.angelaHughes.quoteSubtitle}
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── 16. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking Seabourn with a luxury travel advisor.",
            items: data.faqs
          }}
        />
      </div>

      {/* ── 17. FINAL CONCLUSION ── */}
      <ConclusionSection
        sections={[data.finalVerdict]}
      />

      {/* ── 18. FINAL CTA ── */}
      <CenterCTA
        title={data.ctas.finalCta.title}
        description={data.ctas.finalCta.description}
        buttonText={data.ctas.finalCta.buttonText}
        buttonLink={data.ctas.finalCta.buttonLink}
        theme="light"
      />
    </div>
  );
};

export default SeabournWhyBookWithUs;