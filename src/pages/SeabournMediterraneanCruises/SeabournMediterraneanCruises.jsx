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
import DualPhilosophyShowcase from "../../components/ui/DualPhilosophyShowcase";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import SaltJourneyTimeline from "../../components/ui/SaltJourneyTimeline";
import InteractivePackingChecklist from "../../components/ui/InteractivePackingChecklist";
import DynamicCulinaryShowcase from "../../components/ui/DynamicCulinaryShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ChecklistCards from "../../components/ui/ChecklistCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Assets (imported with images commented out as standard)
// import medHeroImg from "../../assets/SeabournShips/seabourn-encore-modern-luxury-ocean-ship.jpg";
// import diningImg from "../../assets/SeabournShips/seabourn-encore-ovation-solis-specialty-dining.jpg";
// import loungeImg from "../../assets/SeabournShips/seabourn-encore-onboard-luxury-lifestyle-lounge.jpg";
// import suiteImg from "../../assets/SeabournShips/seabourn-ships-luxury-oceanfront-suites-balcony.jpg";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournMediterraneanSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#webpage",
      url: "https://www.tripsandships.com/seabourn-cruises/mediterranean/",
      name: "Seabourn Mediterranean Cruises: Itineraries & Small Ports",
      headline: "Seabourn Mediterranean Cruises: Small Ports, Luxury Itineraries & Signature Experiences",
      description:
        "Explore Seabourn Mediterranean cruises, including small ports, luxury itineraries, signature events, shore excursions, dining, destinations and the best time to sail.",
      keywords: [
        "Seabourn Mediterranean Cruises",
        "Seabourn Mediterranean cruise",
        "Seabourn Mediterranean cruises",
        "Seabourn Mediterranean itineraries",
        "Seabourn Mediterranean cruise ports",
        "Seabourn Mediterranean cruise review",
        "Seabourn Mediterranean shore excursions",
        "Seabourn Mediterranean small ports",
        "Seabourn Mediterranean luxury cruise",
        "Seabourn Mediterranean cruise ships",
        "Seabourn Mediterranean best time to cruise",
        "Seabourn Mediterranean sailing season",
        "Seabourn Mediterranean destinations",
        "Seabourn Mediterranean islands",
        "Seabourn Mediterranean cruise worth it",
        "Seabourn Mediterranean Signature Events",
        "luxury Mediterranean cruise",
        "small ship Mediterranean cruise",
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
      },
      breadcrumb: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#destination",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#breadcrumb",
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
          name: "Seabourn Cruises",
          item: "https://www.tripsandships.com/seabourn-cruises/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Seabourn Mediterranean Cruises",
          item: "https://www.tripsandships.com/seabourn-cruises/mediterranean/",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#destination",
      name: "Seabourn Mediterranean Cruises",
      description:
        "Seabourn Mediterranean cruises offer an intimate luxury small-ship way to explore Mediterranean destinations, including major ports, smaller coastal destinations, historic sites, islands, beaches, cuisine and cultural experiences.",
      url: "https://www.tripsandships.com/seabourn-cruises/mediterranean/",
      touristType: [
        "Luxury travelers",
        "Couples",
        "Food lovers",
        "Culture enthusiasts",
        "History lovers",
        "Wine lovers",
        "First-time luxury travelers",
      ],
      containedInPlace: {
        "@type": "Place",
        name: "Mediterranean",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Region", value: "Mediterranean" },
        { "@type": "PropertyValue", name: "Cruise Style", value: "Ultra-luxury small-ship cruising" },
        { "@type": "PropertyValue", name: "Main Destinations", value: "Italy, Greece, Croatia, France, Spain, Turkey and surrounding regions" },
        { "@type": "PropertyValue", name: "Highlights", value: "Historic ports, islands, beaches, cuisine and culture" },
        { "@type": "PropertyValue", name: "Port Style", value: "Major destinations plus smaller ports" },
        { "@type": "PropertyValue", name: "Experiences", value: "Shore excursions, cultural activities and Signature Events" },
        { "@type": "PropertyValue", name: "Best For", value: "Couples, luxury travelers, food lovers and culture enthusiasts" },
        { "@type": "PropertyValue", name: "Peak Season", value: "Summer" },
        { "@type": "PropertyValue", name: "Shoulder Seasons", value: "Spring and fall" },
        { "@type": "PropertyValue", name: "Atmosphere", value: "Intimate, relaxed and sophisticated" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#features",
      name: "Seabourn Mediterranean Cruise Highlights",
      description: "Key destinations, experiences and features of Seabourn Mediterranean cruises.",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Mediterranean Destinations",
          description: "Seabourn Mediterranean itineraries can include Italy, Greece, Croatia, France, Spain, Turkey and other Mediterranean regions.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Small Mediterranean Ports",
          description: "Selected itineraries can include smaller ports and coastal destinations offering quieter streets, local restaurants, historic neighborhoods, scenic harbors and less-commercialized experiences.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Western Mediterranean",
          description: "Western Mediterranean itinerary themes can include Spain, France, Italy and Mediterranean islands.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Eastern Mediterranean and Adriatic",
          description: "Eastern Mediterranean and Adriatic itineraries can include Greece, Turkey, Croatia, Montenegro, Greek islands and Adriatic islands.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Signature Events",
          description: "Depending on the itinerary and destination, Signature Events can include private cultural performances, special dinners, historic venues, local entertainment and exclusive destination experiences.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Shore Excursions",
          description: "Shore excursions can include cultural, culinary, scenic, active and beach experiences such as archaeological sites, cooking experiences, wine tasting, coastal drives, hiking, cycling, kayaking and swimming.",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Mediterranean Food and Wine",
          description: "Mediterranean voyages provide opportunities to experience regional cuisine and wine traditions from Italy, Greece, Croatia, France and Spain.",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Seasonal Cruising",
          description: "The Mediterranean cruise season generally extends from spring through fall, with summer offering warm weather and long daylight while spring and fall can provide more comfortable sightseeing conditions and fewer peak-season crowds.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/mediterranean/#faq",
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

/* ── Main Component ──────────────────────────────────────────────── */
const SeabournMediterraneanCruisesGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Seabourn Mediterranean Cruises: Itineraries & Small Ports</title>
        <meta name="title" content="Seabourn Mediterranean Cruises: Ports, Itineraries & Seasons" />
        <meta
          name="description"
          content="Explore Seabourn Mediterranean cruises, including small ports, luxury itineraries, signature events, shore excursions, dining, destinations and the best time to sail."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/mediterranean/" />
        <script type="application/ld+json">{JSON.stringify(seabournMediterraneanSchema)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs ? data.hero.paragraphs[0] : ""}
        badge="ULTRA-LUXURY MEDITERRANEAN CRUISING"
        secondaryCtaText={data.hero.ctaText || "Start Planning Your Mediterranean Cruise"}
        secondaryCtaLink={data.hero.ctaLink || "/contact"}
      />

      <div id="content">
        {/* ── 2. AT A GLANCE TABLE ── */}
        <ComparisonTable
          data={data.glanceTable}
        />
      </div>

      {/* ── 3. WHY TAKE A SEABOURN MEDITERRANEAN CRUISE (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.whyTakeSection.title}
        subtitle={data.whyTakeSection.subtitle}
        paragraphs={data.whyTakeSection.paragraphs}
        highlightsTitle="A Seabourn voyage can combine:"
        highlights={data.whyTakeSection.highlights}
        conclusion={data.whyTakeSection.conclusion}
        imagePlaceholderText="Seabourn Mediterranean Coastal Exploration"
      />

      {/* ── 4. WHAT MAKES SEABOURN MEDITERRANEAN DIFFERENT (CURVILINEAR GRID) ── */}
      <CurvilinearGrid
        title={data.differentCards.title}
        subtitle={data.differentCards.subtitle}
        paragraphs={data.differentCards.paragraphs}
        items={data.differentCards.items}
      />

      {/* ── 5. CTA 1 (ITINERARY EXPLORATION) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        theme="dark"
      />

      {/* ── 6. ITINERARIES SHOWCASE (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.itineraryShowcase.title}
        subtitle={data.itineraryShowcase.subtitle}
        items={data.itineraryShowcase.items}
        images={[
          // medHeroImg, // Images commented out as standard
        ]}
      />

      {/* ── 7. SMALL PORTS VS WHY THEY MATTER (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.smallPortsFaceoff}
      />

      {/* ── 8. SIGNATURE EVENTS (EDITORIAL FEATURE SHOWCASE) ── */}
      <EditorialFeatureShowcase
        title={data.signatureEvents.title}
        subtitle={data.signatureEvents.subtitle}
        features={data.signatureEvents.features}
        bgClass="bg-white"
      />

      {/* ── 9. CTA 2 (SHORE EXCURSIONS) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        theme="dark"
      />

      {/* ── 10. SHORE EXCURSIONS (GENERIC CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Seabourn Mediterranean Shore Excursions"
        subtitle="CURATED EXPERIENCES ASHORE"
        cards={data.excursionsGrid}
      />

      {/* ── 11. FOR HISTORY LOVERS (ASYMMETRIC STORY INTRO) ── */}
      <AsymmetricStoryIntro
        heading={data.historySection.heading}
        subtitle={data.historySection.subtitle}
        paragraphs={data.historySection.paragraphs}
        highlights={data.historySection.highlights}
        image1Placeholder={data.historySection.image1Placeholder}
        image2Placeholder={data.historySection.image2Placeholder}
      />

      {/* ── 12. FOOD & WINE (LUXURY FEATURE SHOWCASE) ── */}
      <LuxuryFeatureShowcase
        title={data.foodAndWine.title}
        subtitle={data.foodAndWine.subtitle}
        items={data.foodAndWine.items}
        images={[
          // diningImg, // Images commented out as standard
        ]}
      />

      {/* ── 13. TRAVELER PERSONAS (COUPLES, FIRST-TIME LUXURY, FAMILIES) ── */}
      <TravelerPersonaCards
        title={data.travelerPersonas.title}
        subtitle={data.travelerPersonas.subtitle}
        personas={data.travelerPersonas.personas}
      />

      {/* ── 14. CTA 3 (SPEAK WITH A SPECIALIST) ── */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        theme="dark"
      />

      {/* ── 15. BEST TIME TO CRUISE (SALT JOURNEY TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.seasonsTimeline}
      />

      {/* ── 16. WHAT TO PACK (INTERACTIVE PACKING CHECKLIST) ── */}
      <InteractivePackingChecklist
        title={data.packingChecklist.title}
        subtitle={data.packingChecklist.subtitle}
        categories={data.packingChecklist.categories}
      />

      {/* ── 17. TRIP LENGTH GUIDELINES (GENERIC CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title={data.lengthCards.title}
        subtitle={data.lengthCards.subtitle}
        cards={data.lengthCards.cards}
      />

      {/* ── 18. CRUISE VS LAND VACATION (DUAL PHILOSOPHY SHOWCASE) ── */}
      <DualPhilosophyShowcase
        data={data.cruiseVsLandFaceoff}
      />

      {/* ── 19. SEABOURN VS LARGE-SHIP CRUISES (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.seabournVsLargeFaceoff}
      />

      {/* ── 20. MEDITERRANEAN DINING PROGRAM (DYNAMIC CULINARY SHOWCASE) ── */}
      <DynamicCulinaryShowcase
        title={data.diningProgram.title}
        subtitle={data.diningProgram.subtitle}
        description={data.diningProgram.description}
        items={data.diningProgram.items}
        images={[
          // diningImg, // Images commented out as standard
        ]}
      />

      {/* ── 21. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 22. CTA 4 (TASTE THE MEDITERRANEAN) ── */}
      <CenterCTA
        title={data.ctas.midCta4.title}
        description={data.ctas.midCta4.description}
        buttonText={data.ctas.midCta4.buttonText}
        buttonLink={data.ctas.midCta4.buttonLink}
        theme="light"
      />

      {/* ── 23. WHO SHOULD BOOK VS ALTERNATIVES ── */}
      <ChecklistCards
        data={data.whoShouldBookChecklist}
      />

      {/* ── 24. TIPS FOR CHOOSING THE RIGHT ITINERARY (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.bookingTips}
      />

      {/* ── 25. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 26. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Seabourn Mediterranean cruise.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 27. FINAL CONCLUSION ── */}
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

      {/* ── 28. FINAL CTA ── */}
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

export default SeabournMediterraneanCruisesGuide;