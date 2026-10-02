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
import VideoEmbed from "../../components/ui/VideoEmbed";

// Assets from SeabournCaribbeanCruises (SEO-optimized filenames)
import heroBgImg from "../../assets/SeabournCaribbeanCruises/seabourn-caribbean-cruises-luxury-hero.jpg";
import whyTakeImg from "../../assets/SeabournCaribbeanCruises/why-take-a-seabourn-caribbean-cruise.jpg";
import findItineraryCtaImg from "../../assets/SeabournCaribbeanCruises/find-your-perfect-caribbean-sailing-cta.jpg";
import easternCaribImg from "../../assets/SeabournCaribbeanCruises/seabourn-eastern-caribbean-itineraries.jpg";
import southernCaribImg from "../../assets/SeabournCaribbeanCruises/seabourn-southern-caribbean-itineraries.jpg";
import lesserAntillesImg from "../../assets/SeabournCaribbeanCruises/seabourn-lesser-antilles-itineraries.jpg";
import yachtHarborImg from "../../assets/SeabournCaribbeanCruises/seabourn-yacht-harbor-experience.jpg";
import whySmallerHarborsImg from "../../assets/SeabournCaribbeanCruises/why-smaller-caribbean-harbors-matter.jpg";
import marinaDayImg from "../../assets/SeabournCaribbeanCruises/seabourn-marina-day-floating-beach-club.jpg";
import reserveExperiencesCtaImg from "../../assets/SeabournCaribbeanCruises/reserve-marina-day-caviar-in-the-surf-cta.jpg";
import caviar1Img from "../../assets/SeabournCaribbeanCruises/seabourn-caviar-in-the-surf-beach-party-1.jpg";
import caviar2Img from "../../assets/SeabournCaribbeanCruises/seabourn-caviar-in-the-surf-champagne-splash-2.jpg";
import customGetawayCtaImg from "../../assets/SeabournCaribbeanCruises/plan-your-custom-caribbean-getaway-cta.jpg";
import scenicCruisingImg from "../../assets/SeabournCaribbeanCruises/seabourn-caribbean-scenic-cruising-balcony-value.jpg";
import smallShipLuxuryImg from "../../assets/SeabournCaribbeanCruises/seabourn-small-ship-luxury-caribbean.jpg";
import largeShipMegaImg from "../../assets/SeabournCaribbeanCruises/large-ship-mega-cruises-caribbean-comparison.jpg";
import yachtingLifestyleCtaImg from "../../assets/SeabournCaribbeanCruises/experience-the-yachting-lifestyle-cta.jpg";
import restaurantImg from "../../assets/SeabournCaribbeanCruises/seabourn-the-restaurant-caribbean-fine-dining.jpg";
import colonnadeImg from "../../assets/SeabournCaribbeanCruises/seabourn-the-colonnade-casual-caribbean-dining.jpg";
import patioImg from "../../assets/SeabournCaribbeanCruises/seabourn-the-patio-al-fresco-poolside-caribbean-dining.jpg";
import inSuiteDiningImg from "../../assets/SeabournCaribbeanCruises/seabourn-24-hour-in-suite-veranda-dining.jpg";
import valuePropositionImg from "../../assets/SeabournCaribbeanCruises/seabourn-caribbean-value-proposition.jpg";
import finalCtaImg from "../../assets/SeabournCaribbeanCruises/start-planning-seabourn-caribbean-cruise-cta.jpg";

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
        backgroundImage={heroBgImg}
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
        image={whyTakeImg}
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
        images={[easternCaribImg, southernCaribImg, lesserAntillesImg]}
      />

      {/* ── 6. CTA 1 (ITINERARY ASSISTANCE) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        image={findItineraryCtaImg}
        theme="dark"
      />

      {/* ── 7. YACHT HARBORS & SMALL PORTS (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.yachtHarborsFaceoff}
        regentImage={yachtHarborImg}
        vikingImage={whySmallerHarborsImg}
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
        image={marinaDayImg}
      />

      {/* ── 10. CTA 2 (RESERVE SIGNATURE EXPERIENCES) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={reserveExperiencesCtaImg}
        theme="dark"
      />

      {/* ── 11. CAVIAR IN THE SURF (ASYMMETRIC STORY INTRO) ── */}
      <AsymmetricStoryIntro
        heading={data.caviarInTheSurf.heading}
        subtitle={data.caviarInTheSurf.subtitle}
        paragraphs={data.caviarInTheSurf.paragraphs}
        highlights={data.caviarInTheSurf.highlights}
        image1={caviar1Img}
        image2={caviar2Img}
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
        image={customGetawayCtaImg}
        theme="dark"
      />

      {/* ── VIDEO SECTION ── */}
      <VideoEmbed
        data={{
          youtubeId: "4pcz4IQAaIo",
          title: "Experience Seabourn Caribbean Luxury Cruising",
          description: "Discover the magic of yacht-like cruising across intimate Caribbean harbors, pristine secluded beaches, and signature watersports."
        }}
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
        image={scenicCruisingImg}
        imagePlaceholderText="Caribbean Oceanfront Veranda Views"
      />

      {/* ── 19. SEABOURN VS LARGE-SHIP CARIBBEAN CRUISES (FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.seabournVsLargeFaceoff}
        regentImage={smallShipLuxuryImg}
        vikingImage={largeShipMegaImg}
      />

      {/* ── 20. CTA 4 (YACHTING LIFESTYLE) ── */}
      <CenterCTA
        title={data.ctas.midCta4.title}
        description={data.ctas.midCta4.description}
        buttonText={data.ctas.midCta4.buttonText}
        buttonLink={data.ctas.midCta4.buttonLink}
        image={yachtingLifestyleCtaImg}
        theme="dark"
      />

      {/* ── 21. DINING & INCLUSIONS (DYNAMIC CULINARY SHOWCASE) ── */}
      <DynamicCulinaryShowcase
        title={data.inclusionsAndDining.title}
        subtitle={data.inclusionsAndDining.subtitle}
        description={data.inclusionsAndDining.description}
        items={data.inclusionsAndDining.items}
        images={[restaurantImg, colonnadeImg, patioImg, inSuiteDiningImg]}
      />

      {/* ── 22. VALUE PROPOSITION (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={{ ...data.worthItBrand, image: valuePropositionImg }}
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
        image={finalCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default SeabournCaribbeanCruises;