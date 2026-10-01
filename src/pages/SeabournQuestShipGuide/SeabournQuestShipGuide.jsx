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
import VideoEmbed from "../../components/ui/VideoEmbed";

// Assets from SeabournQuestShipGuide
import heroImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-luxury-cruise-ship-guide-hero.jpg";
import whatIsImg from "../../assets/SeabournQuestShipGuide/what-is-seabourn-quest-intimate-luxury-yacht-atmosphere.jpg";
import suitesImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-luxury-suites-accommodations-overview.jpg";
import balconiesImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-veranda-suite-private-balcony-ocean-view.jpg";
import suiteCategoriesImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-suite-categories-ocean-view-penthouse-layout.jpg";
import findSuiteCtaImg from "../../assets/SeabournQuestShipGuide/find-your-perfect-suite-seabourn-quest-cruise-cta.jpg";
import worldCruiseSuiteImg from "../../assets/SeabournQuestShipGuide/why-suite-choice-matters-seabourn-quest-world-cruise.jpg";
import theRestaurantImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-the-restaurant-fine-dining-culinary-experience.jpg";
import theColonnadeImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-the-colonnade-casual-indoor-outdoor-dining.jpg";
import inSuiteDiningImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-24-hour-in-suite-course-by-course-dining.jpg";
import openSeatingDiningImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-open-seating-dining-flexibility-freedom.jpg";
import reserveTableCtaImg from "../../assets/SeabournQuestShipGuide/reserve-your-table-seabourn-quest-culinary-cta.jpg";
import seabournSquareImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-seabourn-square-living-room-concierge-lounge.jpg";
import poolImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-teak-swimming-pool-sundeck-relaxation.jpg";
import spaWellnessImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-the-spa-wellness-thermal-suite.jpg";
import fitnessCenterImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-ocean-view-fitness-center-gym.jpg";
import barsLoungesImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-bars-and-lounges-social-venues.jpg";
import entertainmentImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-intimate-entertainment-enrichment-lectures.jpg";
import medImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-mediterranean-coastal-ports-ancient-cities.jpg";
import northEuropeImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-northern-europe-norwegian-fjords-baltic-voyages.jpg";
import americasImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-americas-caribbean-south-america-cruises.jpg";
import asiaPacificImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-asia-australia-pacific-islands-voyages.jpg";
import worldCruisesImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-grand-world-cruise-global-voyages.jpg";
import worldCruiseWhyImg from "../../assets/SeabournQuestShipGuide/why-choose-seabourn-quest-for-a-world-cruise-community.jpg";
import whoShouldSailImg from "../../assets/SeabournQuestShipGuide/who-should-sail-seabourn-quest-world-cruise-travelers.jpg";
import whoShouldNotChooseImg from "../../assets/SeabournQuestShipGuide/who-should-not-choose-seabourn-quest-mega-ship-cruisers.jpg";
import compareCtaImg from "../../assets/SeabournQuestShipGuide/compare-seabourn-quest-suites-and-sailings-cta.jpg";
import destinationsCtaImg from "../../assets/SeabournSuites/seabourn-grand-voyages-world-cruise-itineraries.webp";
import worthItBrandImg from "../../assets/SeabournQuestShipGuide/seabourn-quest-luxury-value-proposition-showcase.jpg";
import finalCtaImg from "../../assets/SeabournQuestShipGuide/start-planning-your-seabourn-quest-cruise-voyage-cta.jpg";

// Data Source
import data from "./data.json";

/* ── Suite Items with Images ─────────────────────────────────────── */
const suiteImages = [suitesImg, balconiesImg, suiteCategoriesImg];
const suiteItems = data.suitesSection.items.map((item, idx) => ({
  ...item,
  image: suiteImages[idx],
}));

/* ── Dining Images ──────────────────────────────────────────────── */
const diningImages = [
  theRestaurantImg,
  theColonnadeImg,
  inSuiteDiningImg,
  openSeatingDiningImg,
];

/* ── Public Areas Images ────────────────────────────────────────── */
const publicAreasImages = [
  seabournSquareImg,
  poolImg,
  spaWellnessImg,
  fitnessCenterImg,
  barsLoungesImg,
  entertainmentImg,
];

/* ── Destination Tabs with Images ───────────────────────────────── */
const destinationImages = [
  medImg,
  northEuropeImg,
  americasImg,
  asiaPacificImg,
  worldCruisesImg,
];
const destinationTabs = data.destinationsSection.tabs.map((tab, idx) => ({
  ...tab,
  image: destinationImages[idx],
}));

/* ── Video Data ─────────────────────────────────────────────────── */
const questVideoData = {
  youtubeId: "65UCuDzogIQ",
  title: "Experience Seabourn Quest",
  description:
    "Explore the intimate all-suite ambiance, world-class dining, personalized service, and extended global voyages aboard Seabourn Quest.",
};

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
        backgroundImage={heroImg}
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
        image={whatIsImg}
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
        items={suiteItems}
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
        image={findSuiteCtaImg}
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
        image={worldCruiseSuiteImg}
      />

      {/* ── 9. DINING & RESTAURANTS (CULINARY SHOWCASE) ── */}
      <DynamicCulinaryShowcase
        title={data.diningSection.title}
        subtitle={data.diningSection.subtitle}
        items={data.diningSection.items}
        images={diningImages}
      />

      {/* ── 10. CTA 2 (DINING) ── */}
      <CenterCTA
        title={data.ctas.diningCta.title}
        description={data.ctas.diningCta.description}
        buttonText={data.ctas.diningCta.buttonText}
        buttonLink={data.ctas.diningCta.buttonLink}
        image={reserveTableCtaImg}
        theme="dark"
      />

      {/* ── 11. PUBLIC AREAS & ONBOARD EXPERIENCE (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.publicAreasShowcase.title}
        subtitle={data.publicAreasShowcase.subtitle}
        items={data.publicAreasShowcase.items}
        images={publicAreasImages}
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
        image={destinationsCtaImg}
        theme="dark"
      />

      {/* ── Mid-Page Video Spotlight (Seabourn Quest Tour) ── */}
      <VideoEmbed data={questVideoData} />

      {/* ── 13. WHY CHOOSE QUEST FOR A WORLD CRUISE / COMMUNITY ── */}
      <EditorialIntroSection
        title={data.worldCruiseWhySection.title}
        subtitle={data.worldCruiseWhySection.subtitle}
        paragraphs={data.worldCruiseWhySection.paragraphs}
        highlightsTitle="Onboard a Quest World Cruise, you are more likely to:"
        highlights={data.worldCruiseWhySection.highlights}
        conclusion={data.worldCruiseWhySection.conclusion}
        imagePlaceholderText="World Cruise Community Onboard"
        image={worldCruiseWhyImg}
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
        regentImage={whoShouldSailImg}
        vikingImage={whoShouldNotChooseImg}
        regentImageAlt="A World Cruise Can Be an Excellent Fit"
        vikingImageAlt="It Is Less Suitable for Travelers Who"
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
        image={compareCtaImg}
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
        brand={{
          ...data.worthItBrand,
          image: worthItBrandImg,
        }}
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
        image={finalCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default SeabournQuestGuide;