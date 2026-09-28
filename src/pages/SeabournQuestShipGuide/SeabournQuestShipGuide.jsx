import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import CardGrid from "../../components/ui/CardGrid";
import DynamicCulinaryShowcase from "../../components/ui/DynamicCulinaryShowcase";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import OpulentTabbedExperience from "../../components/ui/OpulentTabbedExperience";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import LuxuryCruiseComparisonTable from "../../components/ui/LuxuryCruiseComparisonTable";
import ProsConsCards from "../../components/ui/ProsConsCards";
import BrandShowcase from "../../components/ui/BrandShowcase";
import SaltJourneyTimeline from "../../components/ui/SaltJourneyTimeline";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Assets (imported with images commented out as standard)
import questHeroImg from "../../assets/SeabournShips/seabourn-quest-luxury-ocean-cruise-ship.jpg";
import questDiningImg from "../../assets/SeabournShips/seabourn-quest-gourmet-dining-restaurant-experience.jpg";
import questVsEncoreImg from "../../assets/SeabournShips/seabourn-quest-vs-seabourn-encore-ship-comparison.jpg";
import questVsOvationImg from "../../assets/SeabournShips/seabourn-quest-vs-seabourn-ovation-ship-comparison.jpg";
import suitesImg from "../../assets/SeabournShips/seabourn-ships-luxury-oceanfront-suites-balcony.jpg";

// Data Source
import data from "./data.json";

/* ── Destination Tabs (Images Commented Out) ─────────────────────── */
const destinationTabs = data.destinationsSection.tabs.map((tab) => ({
  ...tab,
  // image: questHeroImg, // Images commented out as requested
}));

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#webpage",
      url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/",
      name: "Seabourn Quest: Ship Guide, Suites & World Cruises",
      headline: "Seabourn Quest Ship Guide: Suites, Dining & World Cruises",
      description:
        "Explore Seabourn Quest, including its intimate ship experience, suites, dining, amenities, itineraries, World Cruises and who this luxury ship is best suited for.",
      keywords: [
        "Seabourn Quest",
        "Seabourn Quest ship",
        "Seabourn Quest cruise",
        "Seabourn Quest review",
        "Seabourn Quest suites",
        "Seabourn Quest cabins",
        "Seabourn Quest dining",
        "Seabourn Quest restaurants",
        "Seabourn Quest amenities",
        "Seabourn Quest itineraries",
        "Seabourn Quest World Cruise",
        "Seabourn Quest World Cruise 2027",
        "Seabourn Quest World Cruise 2028",
        "Seabourn Quest destinations",
        "Seabourn Quest best suites",
        "Seabourn Quest worth it",
        "Seabourn Quest deck plan",
        "Seabourn Quest ship guide",
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
      },
      breadcrumb: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#ship",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#breadcrumb",
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
          name: "Seabourn Ships",
          item: "https://www.tripsandships.com/seabourn-cruises/ships/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Seabourn Quest",
          item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/",
        },
      ],
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#ship",
      name: "Seabourn Quest",
      description:
        "An intimate all-suite luxury ocean cruise ship designed for personalized service, fine dining, destination-focused travel and longer voyages including selected World Cruises.",
      url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/",
      brand: {
        "@type": "Brand",
        name: "Seabourn",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Ship Type", value: "Luxury ocean cruise ship" },
        { "@type": "PropertyValue", name: "Ship Style", value: "Intimate, all-suite luxury" },
        { "@type": "PropertyValue", name: "Passenger Capacity", value: "Approximately 458 guests" },
        { "@type": "PropertyValue", name: "Atmosphere", value: "Quiet, elegant and personalized" },
        { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
        { "@type": "PropertyValue", name: "Private Verandas", value: "Available in selected suite categories" },
        { "@type": "PropertyValue", name: "Dining", value: "Multiple dining venues including The Restaurant, The Colonnade, The Patio and in-suite dining" },
        { "@type": "PropertyValue", name: "Pool", value: "Yes" },
        { "@type": "PropertyValue", name: "Spa", value: "Yes" },
        { "@type": "PropertyValue", name: "Fitness Center", value: "Yes" },
        { "@type": "PropertyValue", name: "Lounges", value: "Multiple" },
        { "@type": "PropertyValue", name: "Entertainment", value: "Live music, performances, guest speakers, cultural programming and destination enrichment" },
        { "@type": "PropertyValue", name: "Long Voyages", value: "Yes" },
        { "@type": "PropertyValue", name: "World Cruises", value: "Available on selected schedules" },
        { "@type": "PropertyValue", name: "Dining Style", value: "Flexible and open seating" },
        { "@type": "PropertyValue", name: "Primary Destinations", value: "Mediterranean, Northern Europe, Scandinavia, British Isles, Caribbean, South America, Asia, Australia and the Pacific" },
        { "@type": "PropertyValue", name: "Best For", value: "Couples, solo travelers, experienced cruisers and long-voyage travelers" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/#faq",
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
const SeabournQuestGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Seabourn Quest: Ship Guide, Suites & World Cruises</title>
        <meta name="title" content="Seabourn Quest Ship Guide: Suites, Dining & World Cruises" />
        <meta
          name="description"
          content="Explore Seabourn Quest, including its intimate ship experience, suites, dining, amenities, itineraries, World Cruises and who this luxury ship is best suited for."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/seabourn-quest/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs ? data.hero.paragraphs[0] : ""}
        badge="INTIMATE LUXURY & WORLD CRUISES"
        secondaryCtaText={data.hero.ctaText || "Start Planning Your Seabourn Quest Cruise"}
        secondaryCtaLink={data.hero.ctaLink || "/contact"}
      />

      <div id="content">
        {/* ── 2. AT A GLANCE TABLE ── */}
        <ComparisonTable
          data={data.glanceTable}
        />
      </div>

      {/* ── 3. WHAT IS SEABOURN QUEST (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.whatIsSection.title}
        subtitle={data.whatIsSection.subtitle}
        paragraphs={data.whatIsSection.paragraphs}
        highlightsTitle="The experience focuses on:"
        highlights={data.whatIsSection.highlights}
        conclusion={data.whatIsSection.conclusion}
        imagePlaceholderText="Seabourn Quest Luxury Yacht Atmosphere"
      />

      {/* ── 4. WHY CHOOSE SEABOURN QUEST (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Why Choose Seabourn Quest?"
        subtitle="THE APPEAL"
        cards={data.whyChooseChecklistCards}
      />

      {/* ── 5. SUITES & ACCOMMODATIONS (LUXURY FEATURE SHOWCASE) ── */}
      <LuxuryFeatureShowcase
        title={data.suitesSection.title}
        subtitle={data.suitesSection.subtitle}
        description={data.suitesSection.description}
        items={data.suitesSection.items}
        images={[
          // suitesImg, // Images commented out as requested
        ]}
      />

      {/* ── 6. BEST SUITES SELECTION (CARD GRID) ── */}
      <CardGrid
        title="What Is the Best Suite on Seabourn Quest?"
        subtitle="CHOOSING A CATEGORY"
        description="The 'best' suite depends on what you value most. A well-positioned suite offering the features you actually use can provide better value than simply selecting the largest category."
        cards={data.bestSuiteCards}
      />

      {/* ── 7. CTA 1 (SUITES) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        theme="dark"
      />

      {/* ── 8. SUITE CHOICE ON A WORLD CRUISE (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.worldCruiseSuiteSection.title}
        subtitle={data.worldCruiseSuiteSection.subtitle}
        paragraphs={data.worldCruiseSuiteSection.paragraphs}
        highlightsTitle="Consider prioritizing:"
        highlights={data.worldCruiseSuiteSection.highlights}
        conclusion={data.worldCruiseSuiteSection.conclusion}
        imagePlaceholderText="Suite as Your Home on a World Cruise"
      />

      {/* ── 9. DINING & RESTAURANTS (CULINARY SHOWCASE) ── */}
      <DynamicCulinaryShowcase
        title={data.diningSection.title}
        subtitle={data.diningSection.subtitle}
        items={data.diningSection.items}
        images={[
          // questDiningImg, // Images commented out as requested
        ]}
      />

      {/* ── 10. CTA 2 (DINING) ── */}
      <CenterCTA
        title={data.ctas.diningCta.title}
        description={data.ctas.diningCta.description}
        buttonText={data.ctas.diningCta.buttonText}
        buttonLink={data.ctas.diningCta.buttonLink}
        theme="dark"
      />

      {/* ── 11. PUBLIC AREAS & ONBOARD EXPERIENCE (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.publicAreasShowcase.title}
        subtitle={data.publicAreasShowcase.subtitle}
        items={data.publicAreasShowcase.items}
        images={[
          // questHeroImg, // Images commented out as requested
        ]}
      />

      {/* ── 12. DESTINATIONS & WORLD CRUISES (OPULENT TABBED EXPERIENCE) ── */}
      <OpulentTabbedExperience
        title={data.destinationsSection.title}
        subtitle={data.destinationsSection.subtitle}
        tabs={destinationTabs}
      />

      {/* ── CTA 3 (DESTINATIONS) ── */}
      <CenterCTA
        title={data.ctas.destinationsCta.title}
        description={data.ctas.destinationsCta.description}
        buttonText={data.ctas.destinationsCta.buttonText}
        buttonLink={data.ctas.destinationsCta.buttonLink}
        theme="light"
      />

      {/* ── 13. WHY CHOOSE QUEST FOR A WORLD CRUISE / COMMUNITY ── */}
      <EditorialIntroSection
        title={data.worldCruiseWhySection.title}
        subtitle={data.worldCruiseWhySection.subtitle}
        paragraphs={data.worldCruiseWhySection.paragraphs}
        highlightsTitle="Onboard a Quest World Cruise, you are more likely to:"
        highlights={data.worldCruiseWhySection.highlights}
        conclusion={data.worldCruiseWhySection.conclusion}
        imagePlaceholderText="World Cruise Community Onboard"
      />

      {/* ── 14. WHO IS SEABOURN QUEST BEST FOR (TRAVELER TYPE GRID) ── */}
      <TravelerTypeGrid
        title="Who Is Seabourn Quest Best For?"
        subtitle="Quest suits a specific type of traveler. Here is how the ship fits different profiles:"
        items={data.travelerTypes}
      />

      {/* ── 15. TARGET FIT (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.targetFitFaceoff}
      />

      {/* ── 16. QUEST VS ENCORE COMPARISON (COMPARISON TABLE) ── */}
      <LuxuryCruiseComparisonTable
        title={data.questVsEncoreTable.title}
        subtitle={data.questVsEncoreTable.subtitle}
        headers={data.questVsEncoreTable.headers}
        rows={data.questVsEncoreTable.rows}
      />

      {/* ── 17. QUEST VS OVATION COMPARISON (COMPARISON TABLE) ── */}
      <LuxuryCruiseComparisonTable
        title={data.questVsOvationTable.title}
        subtitle={data.questVsOvationTable.subtitle}
        headers={data.questVsOvationTable.headers}
        rows={data.questVsOvationTable.rows}
      />

      {/* ── CTA 4 (COMPARISONS) ── */}
      <CenterCTA
        title={data.ctas.compareCta.title}
        description={data.ctas.compareCta.description}
        buttonText={data.ctas.compareCta.buttonText}
        buttonLink={data.ctas.compareCta.buttonLink}
        theme="dark"
      />

      {/* ── 18. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 19. VALUE PROPOSITION (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={data.worthItBrand}
        index={0}
      />

      {/* ── 20. BOOKING TIPS & PACKING ESSENTIALS (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.bookingTips}
      />

      {/* ── 21. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 22. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions About Seabourn Quest",
            subtitle: "Everything travelers need to know before booking Seabourn Quest.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 23. FINAL CONCLUSION ── */}
      <ConclusionSection
        sections={[data.finalVerdict]}
      />

      {/* ── 24. FINAL CTA ── */}
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

export default SeabournQuestGuide;