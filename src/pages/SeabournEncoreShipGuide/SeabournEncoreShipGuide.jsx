import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

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

// Page Asset Images from SeabournEncoreShipGuide (SEO-Optimized)
import heroImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-ultra-luxury-ship-guide-hero.jpg";
import whatIsEncoreImg from "../../assets/SeabournEncoreShipGuide/what-is-seabourn-encore-luxury-cruise-ship-editorial.jpg";
import dependingOnCategoryImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-luxury-suite-amenities-inclusions.jpg";
import suiteCategoriesImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-all-suite-accommodations-categories.jpg";
import balconiesImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-veranda-suite-private-balcony.jpg";
import findSuiteCtaImg from "../../assets/SeabournEncoreShipGuide/find-your-perfect-suite-seabourn-encore-consultation-cta.jpg";
import theRestaurantImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-the-restaurant-fine-dining-venue.jpg";
import theColonnadeImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-the-colonnade-casual-indoor-outdoor-dining.jpg";
import inSuiteDiningImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-24-hour-in-suite-dining-service.jpg";
import openSeatingDiningImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-open-seating-dining-flexibility.jpg";
import seabournSquareImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-seabourn-square-living-room-hub.jpg";
import encorePoolImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-teak-sundeck-swimming-pool.jpg";
import encoreSpaImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-the-spa-wellness-thermal-suite.jpg";
import fitnessCenterImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-ocean-view-fitness-center-gym.jpg";
import barsLoungesImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-bars-and-lounges-social-venues.jpg";
import entertainmentImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-intimate-evening-entertainment-performances.jpg";
import enrichmentImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-cultural-enrichment-destination-lectures.jpg";
import destinationsCtaImg from "../../assets/SeabournEncoreShipGuide/discover-seabourn-encore-destinations-itinerary-cta.jpg";
import whoShouldSailImg from "../../assets/SeabournEncoreShipGuide/who-should-sail-seabourn-encore-luxury-cruisers.jpg";
import whoShouldNotChooseImg from "../../assets/SeabournEncoreShipGuide/who-should-not-choose-seabourn-encore-mega-ship-travelers.jpg";
import worthItBrandImg from "../../assets/SeabournEncoreShipGuide/seabourn-encore-luxury-value-proposition-showcase.jpg";
import finalCtaImg from "../../assets/SeabournEncoreShipGuide/start-planning-your-seabourn-encore-cruise-voyage-cta.jpg";

// Destination Images (Content-Matched from Dedicated Regional Asset Collections)
import medImg from "../../assets/SeabournSuites/seabourn-mediterranean-amalfi-coast-italy-cruise.webp";
import northEuropeImg from "../../assets/SeabournSuites/seabourn-norwegian-fjords-scandinavia-luxury-cruise.webp";
import caribbeanImg from "../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-turquoise-water.jpg";

// Data Source
import data from "./data.json";

/* ── Destination Tabs ───────────────────────────────────────────── */
const destinationTabs = [
  {
    ...data.destinationsSection.tabs[0],
    image: medImg,
  },
  {
    ...data.destinationsSection.tabs[1],
    image: northEuropeImg,
  },
  {
    ...data.destinationsSection.tabs[2],
    image: caribbeanImg,
  },
];

/* ── Video Data ─────────────────────────────────────────────────── */
const encoreVideoData = {
  youtubeId: "laeY8KoXhXk",
  title: "Experience Seabourn Encore",
  description:
    "Explore the ultra-luxury ambiance, Adam D. Tihany-designed all-suite accommodations, fine dining, and destination cruising aboard Seabourn Encore.",
};

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournEncoreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#webpage",
      url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/",
      name: "Seabourn Encore: Ship Guide, Suites & Dining",
      headline: "Seabourn Encore Ship Guide: Suites, Dining, Amenities & Itineraries",
      description:
        "Explore Seabourn Encore, including suites, restaurants, dining, amenities, public areas, itineraries and who this luxury cruise ship is best suited for.",
      keywords: [
        "Seabourn Encore",
        "Seabourn Encore ship",
        "Seabourn Encore cruise",
        "Seabourn Encore review",
        "Seabourn Encore suites",
        "Seabourn Encore cabins",
        "Seabourn Encore restaurants",
        "Seabourn Encore dining",
        "Seabourn Encore amenities",
        "Seabourn Encore deck plan",
        "Seabourn Encore itineraries",
        "Seabourn Encore destinations",
        "Seabourn Encore pool",
        "Seabourn Encore spa",
        "Seabourn Encore best suites",
        "Seabourn Encore worth it",
        "Seabourn Encore ship guide",
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
      },
      breadcrumb: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#ship",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#breadcrumb",
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
          name: "Seabourn Encore",
          item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/",
        },
      ],
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#ship",
      name: "Seabourn Encore",
      description:
        "An intimate all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining, elegant public spaces and destination-focused cruising.",
      url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/",
      brand: {
        "@type": "Brand",
        name: "Seabourn",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Ship Type", value: "Luxury ocean cruise ship" },
        { "@type": "PropertyValue", name: "Guest Capacity", value: "Approximately 600 guests" },
        { "@type": "PropertyValue", name: "Ship Style", value: "All-suite luxury" },
        { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
        { "@type": "PropertyValue", name: "Private Verandas", value: "Available in many suite categories" },
        { "@type": "PropertyValue", name: "Dining", value: "Multiple restaurants and dining venues" },
        { "@type": "PropertyValue", name: "Pool", value: "Yes" },
        { "@type": "PropertyValue", name: "Spa", value: "Yes" },
        { "@type": "PropertyValue", name: "Fitness Center", value: "Yes" },
        { "@type": "PropertyValue", name: "Lounges", value: "Multiple" },
        { "@type": "PropertyValue", name: "Entertainment", value: "Live performances, music and enrichment" },
        { "@type": "PropertyValue", name: "Atmosphere", value: "Intimate, elegant and relaxed" },
        { "@type": "PropertyValue", name: "Best For", value: "Couples, solo travelers and luxury cruisers" },
        { "@type": "PropertyValue", name: "Sister Ship", value: "Seabourn Ovation" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#features",
      name: "Seabourn Encore Features",
      description: "Key accommodations, dining, amenities and onboard features of Seabourn Encore.",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "All-Suite Accommodations",
          description:
            "Seabourn Encore offers an all-suite accommodation experience with multiple suite categories, including Veranda and Penthouse options.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Private Verandas",
          description:
            "Many Seabourn Encore suites feature private verandas that provide outdoor space for scenic cruising, relaxation and enjoying port arrivals.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Dining",
          description:
            "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Flexible Dining",
          description:
            "Seabourn Encore offers flexible dining with open-seating options rather than traditional fixed assigned dining arrangements.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Pool and Relaxation",
          description:
            "The ship features a pool area designed primarily for swimming, sunbathing and quiet relaxation.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Spa and Fitness",
          description:
            "Seabourn Encore provides spa, wellness and fitness facilities for relaxation and maintaining an exercise routine during the cruise.",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Elegant Public Areas",
          description:
            "Public spaces include Seabourn Square, lounges, dining areas, scenic viewing spaces and social areas designed around an intimate luxury atmosphere.",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Destination-Focused Cruising",
          description:
            "Seabourn Encore offers destination-focused ocean cruising with itineraries that can include the Mediterranean, Northern Europe, Scandinavia, British Isles, Caribbean and other seasonal destinations.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/#faq",
      mainEntity: [
        { "@type": "Question", "name": "What is Seabourn Encore?", "acceptedAnswer": { "@type": "Answer", "text": "Seabourn Encore is an all-suite luxury ocean cruise ship designed around personalized service, fine dining and destination-focused cruising." } },
        { "@type": "Question", "name": "How many guests are on Seabourn Encore?", "acceptedAnswer": { "@type": "Answer", "text": "Seabourn Encore accommodates approximately 600 guests." } },
        { "@type": "Question", "name": "Is Seabourn Encore an all-suite ship?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All guest accommodations are suites." } },
        { "@type": "Question", "name": "Do Seabourn Encore suites have balconies?", "acceptedAnswer": { "@type": "Answer", "text": "Many suites include private verandas. The exact configuration depends on the suite category." } },
        { "@type": "Question", "name": "What restaurants are on Seabourn Encore?", "acceptedAnswer": { "@type": "Answer", "text": "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." } },
        { "@type": "Question", "name": "Is dining included on Seabourn Encore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." } },
        { "@type": "Question", "name": "Does Seabourn Encore offer open seating?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Seabourn's dining approach provides flexible dining rather than traditional fixed assigned seating." } },
        { "@type": "Question", "name": "Does Seabourn Encore have a pool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The ship has a pool area designed primarily for relaxation." } },
        { "@type": "Question", "name": "Does Seabourn Encore have a spa?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The ship provides spa and wellness services." } },
        { "@type": "Question", "name": "Does Seabourn Encore have a gym?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guests can use the onboard fitness facilities." } },
        { "@type": "Question", "name": "What destinations does Seabourn Encore visit?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the sailing, Encore can visit regions such as the Mediterranean, Northern Europe, Scandinavia, the British Isles, the Caribbean and other seasonal destinations." } },
        { "@type": "Question", "name": "Is Seabourn Encore good for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Its all-suite accommodations, verandas, dining and intimate atmosphere make it particularly well suited to couples." } },
        { "@type": "Question", "name": "Is Seabourn Encore good for solo travelers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Flexible dining and the relatively intimate passenger environment can make it a comfortable choice for solo travelers." } },
        { "@type": "Question", "name": "Is Seabourn Encore good for families?", "acceptedAnswer": { "@type": "Answer", "text": "It can work well for multigenerational families who value luxury and destination experiences, although it is not designed as a traditional family cruise ship." } },
        { "@type": "Question", "name": "Is Seabourn Encore good for first-time luxury cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The combination of all-suite accommodations, personalized service, fine dining and relaxed luxury makes it a strong introduction to luxury cruising." } },
        { "@type": "Question", "name": "Is Seabourn Encore formal?", "acceptedAnswer": { "@type": "Answer", "text": "Seabourn Encore maintains a sophisticated but relatively relaxed atmosphere. Smart-casual clothing is appropriate for much of the onboard experience." } },
        { "@type": "Question", "name": "What is the difference between Seabourn Encore and Seabourn Ovation?", "acceptedAnswer": { "@type": "Answer", "text": "They are sister ships with very similar designs and experiences. Itinerary, departure date and suite availability are often more important when choosing between them." } },
        { "@type": "Question", "name": "Is Seabourn Encore worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "For travelers who value spacious suites, personalized service, fine dining and an intimate luxury atmosphere, Seabourn Encore can be worth the premium." } },
      ],
    },
  ],
};

const SeabournEncoreGuide = () => {
  const suiteItems = data.suitesSection.items.map((item, idx) => ({
    ...item,
    image: [dependingOnCategoryImg, suiteCategoriesImg, balconiesImg][idx],
  }));

  const diningImages = [
    theRestaurantImg,
    theColonnadeImg,
    inSuiteDiningImg,
    openSeatingDiningImg,
  ];

  const publicAreasImages = [
    seabournSquareImg,
    encorePoolImg,
    encoreSpaImg,
    fitnessCenterImg,
    barsLoungesImg,
    entertainmentImg,
    enrichmentImg,
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Seabourn Encore: Ship Guide, Suites & Dining</title>
        <meta name="title" content="Seabourn Encore Ship Guide: Suites, Dining & Itineraries" />
        <meta
          name="description"
          content="Explore Seabourn Encore, including suites, restaurants, dining, amenities, public areas, itineraries and who this luxury cruise ship is best suited for."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/seabourn-encore/" />
        <script type="application/ld+json">{JSON.stringify(seabournEncoreSchema)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs ? data.hero.paragraphs[0] : ""}
        badge="ULTIMATE LUXURY SHIP GUIDE"
        backgroundImage={heroImg}
        primaryCtaText={data.hero.ctaText || "Start Planning Your Encore Cruise"}
        primaryCtaLink={data.hero.ctaLink || "/contact"}
        secondaryCtaText="Explore Encore Details"
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* ── 2. AT A GLANCE TABLE ── */}
        <ComparisonTable
          data={data.glanceTable}
        />
      </div>

      {/* ── 3. WHAT IS SEABOURN ENCORE (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.whatIsSection.title}
        subtitle={data.whatIsSection.subtitle}
        paragraphs={data.whatIsSection.paragraphs}
        highlightsTitle="Encore focuses on the fundamentals of luxury travel:"
        highlights={data.whatIsSection.highlights}
        conclusion={data.whatIsSection.conclusion}
        imagePlaceholderText="Seabourn Encore Luxury Yacht Atmosphere"
        image={whatIsEncoreImg}
      />

      {/* ── 4. WHY CHOOSE SEABOURN ENCORE (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Why Choose Seabourn Encore?"
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
        title="What Is the Best Suite on Seabourn Encore?"
        subtitle="CHOOSING A CATEGORY"
        description="There is no single best suite for everyone. Choose the suite based on your itinerary and travel style rather than square footage alone."
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

      {/* ── 8. DINING & RESTAURANTS (CULINARY SHOWCASE) ── */}
      <DynamicCulinaryShowcase
        title={data.diningSection.title}
        subtitle={data.diningSection.subtitle}
        items={data.diningSection.items}
        images={diningImages}
      />

      {/* ── 9. PUBLIC AREAS & ONBOARD EXPERIENCE (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.publicAreasShowcase.title}
        subtitle={data.publicAreasShowcase.subtitle}
        items={data.publicAreasShowcase.items}
        images={publicAreasImages}
      />

      {/* ── 10. DESTINATIONS (OPULENT TABBED EXPERIENCE) ── */}
      <OpulentTabbedExperience
        title={data.destinationsSection.title}
        subtitle={data.destinationsSection.subtitle}
        tabs={destinationTabs}
      />

      {/* ── CTA (DESTINATIONS) ── */}
      <CenterCTA
        title={data.ctas.destinationsCta.title}
        description={data.ctas.destinationsCta.description}
        buttonText={data.ctas.destinationsCta.buttonText}
        buttonLink={data.ctas.destinationsCta.buttonLink}
        image={destinationsCtaImg}
        theme="dark"
      />

      {/* ── Mid-Page Video Spotlight (Seabourn Encore Tour) ── */}
      <VideoEmbed data={encoreVideoData} />

      {/* ── 11. WHO IS SEABOURN ENCORE BEST FOR (TRAVELER TYPE GRID) ── */}
      <TravelerTypeGrid
        title="Who Is Seabourn Encore Best For?"
        subtitle="Seabourn Encore is particularly well suited to travelers who prioritize:"
        items={data.travelerTypes}
      />

      {/* ── 12. TARGET FIT (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.targetFitFaceoff}
        regentImage={whoShouldSailImg}
        vikingImage={whoShouldNotChooseImg}
        regentImageAlt="Who Should Sail Seabourn Encore"
        vikingImageAlt="Who Should NOT Choose Seabourn Encore"
      />

      {/* ── 13. ENCORE VS SEABOURN OVATION (SISTER SHIP TABLE) ── */}
      <LuxuryCruiseComparisonTable
        title={data.encoreVsOvationTable.title}
        subtitle={data.encoreVsOvationTable.subtitle}
        headers={data.encoreVsOvationTable.headers}
        rows={data.encoreVsOvationTable.rows}
      />

      {/* ── 14. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 15. VALUE PROPOSITION (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={{
          ...data.worthItBrand,
          image: worthItBrandImg,
        }}
        index={0}
      />

      {/* ── 16. TIPS FOR CHOOSING A SUITE & PLANNING (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.suiteAndPlanningTips}
      />

      {/* ── 17. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 18. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions About Seabourn Encore",
            subtitle: "Everything travelers need to know before booking Seabourn Encore.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 19. FINAL CONCLUSION ── */}
      <ConclusionSection
        sections={[data.finalVerdict]}
      />

      {/* ── 20. FINAL CTA ── */}
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

export default SeabournEncoreGuide;