import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CardGrid from "../../components/ui/CardGrid";
import SaltJourneyTimeline from "../../components/ui/SaltJourneyTimeline";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import InteractivePackingChecklist from "../../components/ui/InteractivePackingChecklist";
import DynamicCulinaryShowcase from "../../components/ui/DynamicCulinaryShowcase";
import BrandShowcase from "../../components/ui/BrandShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ChecklistCards from "../../components/ui/ChecklistCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Assets (imported with images commented out as standard)
// import caribbeanHeroImg from "../../assets/SeabournShips/seabourn-encore-modern-luxury-ocean-ship.jpg";
// import diningImg from "../../assets/SeabournShips/seabourn-encore-ovation-solis-specialty-dining.jpg";
// import loungeImg from "../../assets/SeabournShips/seabourn-encore-onboard-luxury-lifestyle-lounge.jpg";
// import suiteImg from "../../assets/SeabournShips/seabourn-ships-luxury-oceanfront-suites-balcony.jpg";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournCaribbeanSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/caribbean/",
      "name": "Seabourn Caribbean Cruises: Beaches, Yacht Harbors & More",
      "headline": "Seabourn Caribbean Cruises: Beaches, Yacht Harbors, Marina Day & Caviar in the Surf",
      "description": "Explore Seabourn Caribbean cruises, including yacht harbors, secluded beaches, Marina Day, Caviar in the Surf, shore excursions, itineraries and the best time to sail.",
      "keywords": [
        "Seabourn Caribbean Cruises",
        "Seabourn Caribbean cruise",
        "Seabourn Caribbean cruises",
        "Seabourn Caribbean itinerary",
        "Seabourn Caribbean cruise review",
        "Seabourn Caribbean beaches",
        "Seabourn Caribbean yacht harbors",
        "Seabourn Caribbean shore excursions",
        "Seabourn Caribbean Marina Day",
        "Seabourn Caviar in the Surf",
        "Seabourn Caribbean cruise ports",
        "Seabourn Caribbean luxury cruise",
        "Seabourn Caribbean small ship cruise",
        "Seabourn Caribbean best time to cruise",
        "Seabourn Caribbean islands",
        "Seabourn Caribbean cruise worth it",
        "luxury Caribbean cruise",
        "small ship Caribbean cruise"
      ],
      "inLanguage": "en-US",
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#cruise"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tripsandships.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Seabourn Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Seabourn Caribbean Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/caribbean/"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#cruise",
      "name": "Seabourn Caribbean Cruises",
      "description": "An intimate luxury small-ship cruise experience across the Caribbean, combining beaches, islands, yacht-style harbors, watersports, shore excursions, Marina Day and Caviar in the Surf.",
      "touristType": [
        "Luxury travelers",
        "Couples",
        "Beach lovers",
        "Repeat Caribbean visitors",
        "Solo travelers",
        "Multigenerational families"
      ],
      "itinerary": {
        "@type": "ItemList",
        "name": "Seabourn Caribbean Itinerary Regions",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Eastern Caribbean" },
          { "@type": "ListItem", "position": 2, "name": "Southern Caribbean" },
          { "@type": "ListItem", "position": 3, "name": "Lesser Antilles" },
          { "@type": "ListItem", "position": 4, "name": "British Caribbean" },
          { "@type": "ListItem", "position": 5, "name": "French Caribbean" },
          { "@type": "ListItem", "position": 6, "name": "Dutch Caribbean" },
          { "@type": "ListItem", "position": 7, "name": "Caribbean Coastal Regions" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/caribbean/#faq",
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

const SeabournCaribbeanCruises = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Seabourn Caribbean Cruises: Beaches, Yacht Harbors & More</title>
        <meta
          name="description"
          content="Explore Seabourn Caribbean cruises, including yacht harbors, secluded beaches, Marina Day, Caviar in the Surf, shore excursions, itineraries and the best time to sail."
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/seabourn-cruises/caribbean/"
        />
        <script type="application/ld+json">
          {JSON.stringify(seabournCaribbeanSchema)}
        </script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        badge="ULTRA-LUXURY CARIBBEAN CRUISING"
        primaryCtaText="Contact Travel Advisor"
        primaryCtaLink="/contact"
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink={data.hero.ctaLink}
        image=""
      />

      {/* ── 2. AT A GLANCE OVERVIEW (TABLE) ── */}
      <ComparisonTable
        data={data.glanceTable}
      />

      {/* ── 3. WHY TAKE A SEABOURN CARIBBEAN CRUISE ── */}
      <EditorialIntroSection
        title={data.whyTakeSection.title}
        subtitle={data.whyTakeSection.subtitle}
        paragraphs={data.whyTakeSection.paragraphs}
        highlightsTitle="A Seabourn Caribbean cruise is designed for travelers who prefer:"
        highlights={data.whyTakeSection.highlights}
        conclusion={data.whyTakeSection.conclusion}
        imagePlaceholderText={data.whyTakeSection.imagePlaceholderText}
      />

      {/* ── 4. WHAT MAKES SEABOURN CARIBBEAN CRUISES DIFFERENT ── */}
      <CurvilinearGrid
        title={data.differentCards.title}
        subtitle={data.differentCards.subtitle}
        paragraphs={data.differentCards.paragraphs}
        items={data.differentCards.items}
      />

      {/* ── 5. ITINERARY OPTIONS (LUXURY ZIGZAG) ── */}
      <LuxuryZigZagShowcase
        title={data.itineraryShowcase.title}
        subtitle={data.itineraryShowcase.subtitle}
        items={data.itineraryShowcase.items}
      />

      {/* ── 6. CTA 1 (ITINERARY ASSISTANCE) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        theme="dark"
      />

      {/* ── 7. YACHT HARBORS & SMALL PORTS (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.yachtHarborsFaceoff}
      />

      {/* ── 8. SEABOURN CARIBBEAN BEACHES ── */}
      <GenericChecklistCards
        title="Seabourn Caribbean Beaches"
        subtitle="SUN, SAND & SECLUDED BAYS"
        cards={data.beachCategories}
      />

      {/* ── 9. MARINA DAY (EDITORIAL FEATURE SHOWCASE) ── */}
      <EditorialFeatureShowcase
        title={data.marinaDaySection.title}
        subtitle={data.marinaDaySection.subtitle}
        description={data.marinaDaySection.description}
        features={data.marinaDaySection.features}
        badge="SIGNATURE WATERTOP LIVING"
      />

      {/* ── 10. CTA 2 (RESERVE SIGNATURE EXPERIENCES) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        theme="dark"
      />

      {/* ── 11. CAVIAR IN THE SURF (ASYMMETRIC STORY INTRO) ── */}
      <AsymmetricStoryIntro
        heading={data.caviarInTheSurf.heading}
        subtitle={data.caviarInTheSurf.subtitle}
        paragraphs={data.caviarInTheSurf.paragraphs}
        highlights={data.caviarInTheSurf.highlights}
        image1Placeholder={data.caviarInTheSurf.image1Placeholder}
        image2Placeholder={data.caviarInTheSurf.image2Placeholder}
      />

      {/* ── 12. SHORE EXCURSIONS (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Seabourn Caribbean Shore Excursions"
        subtitle="BEYOND THE BEACH • ACTIVE, CULTURAL & CULINARY"
        cards={data.excursionCategories}
      />

      {/* ── 13. FIRST-TIME EXCURSION TIPS (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.firstTimeTips}
      />

      {/* ── 14. WHO IT'S BEST FOR (TRAVELER PERSONAS) ── */}
      <TravelerPersonaCards
        title={data.travelerPersonas.title}
        subtitle={data.travelerPersonas.subtitle}
        personas={data.travelerPersonas.personas}
      />

      {/* ── 15. CTA 3 (CUSTOM GETAWAY) ── */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        theme="dark"
      />

      {/* ── 16. BEST TIME TO SAIL (CARD GRID) ── */}
      <CardGrid
        title={data.seasonsCards.title}
        subtitle={data.seasonsCards.subtitle}
        cards={data.seasonsCards.cards}
        columns={4}
      />

      {/* ── 17. WHAT TO PACK (PACKING CHECKLIST) ── */}
      <InteractivePackingChecklist
        title={data.packingChecklist.title}
        subtitle={data.packingChecklist.subtitle}
        categories={data.packingChecklist.categories}
      />

      {/* ── 18. SCENIC CRUISING & BALCONY VALUE ── */}
      <EditorialIntroSection
        title={data.scenicCruising.title}
        subtitle={data.scenicCruising.subtitle}
        paragraphs={data.scenicCruising.paragraphs}
        highlightsTitle="The Veranda Advantage in the Caribbean:"
        highlights={data.scenicCruising.highlights}
        conclusion={data.scenicCruising.conclusion}
        imagePlaceholderText="Caribbean Oceanfront Veranda Views"
      />

      {/* ── 19. SEABOURN VS LARGE-SHIP CARIBBEAN CRUISES (FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.seabournVsLargeFaceoff}
      />

      {/* ── 20. CTA 4 (YACHTING LIFESTYLE) ── */}
      <CenterCTA
        title={data.ctas.midCta4.title}
        description={data.ctas.midCta4.description}
        buttonText={data.ctas.midCta4.buttonText}
        buttonLink={data.ctas.midCta4.buttonLink}
        theme="light"
      />

      {/* ── 21. DINING & INCLUSIONS (DYNAMIC CULINARY SHOWCASE) ── */}
      <DynamicCulinaryShowcase
        title={data.inclusionsAndDining.title}
        subtitle={data.inclusionsAndDining.subtitle}
        description={data.inclusionsAndDining.description}
        items={data.inclusionsAndDining.items}
        images={[
          // diningImg, // Images commented out as standard
        ]}
      />

      {/* ── 22. VALUE PROPOSITION (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={data.worthItBrand}
        index={0}
      />

      {/* ── 23. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 24. WHO SHOULD BOOK VS ALTERNATIVES (CHECKLIST CARDS) ── */}
      <ChecklistCards
        data={data.whoShouldBookChecklist}
      />

      {/* ── 25. TIPS FOR CHOOSING THE RIGHT ITINERARY ── */}
      <SaltJourneyTimeline
        data={data.itineraryTips}
      />

      {/* ── 26. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 27. FREQUENTLY ASKED QUESTIONS ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything travelers need to know before booking a Seabourn Caribbean cruise.",
          faqs: data.faqs
        }}
      />

      {/* ── 28. FINAL VERDICT ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              data.finalVerdict.recommendation,
            ],
          },
        ]}
      />

      {/* ── 29. FINAL CTA ── */}
      <CenterCTA
        title={data.ctas.finalCta.title}
        description={data.ctas.finalCta.description}
        buttonText={data.ctas.finalCta.buttonText}
        buttonLink={data.ctas.finalCta.buttonLink}
        theme="dark"
      />
    </div>
  );
};

export default SeabournCaribbeanCruises;