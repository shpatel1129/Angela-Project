import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// Page Asset Images from SeabournPursuitShipGuide (SEO-Optimized)
import heroImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-luxury-expedition-ship-guide-hero.jpg";
import editorialImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/what-is-seabourn-pursuit-ultra-luxury-polar-expedition-editorial.jpg";
import rightForYouCtaImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/see-if-seabourn-pursuit-is-right-for-you-planning-cta.jpg";
import luxuryAccommodationsImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-luxury-all-suite-accommodations.jpg";
import balconiesImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-veranda-suite-balcony-ocean-views.jpg";
import findSuiteCtaImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/find-your-suite-aboard-seabourn-pursuit-consultation-cta.jpg";
import restaurantImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-the-restaurant-fine-dining-venue.jpg";
import colonnadeImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-the-colonnade-casual-buffet-dining.jpg";
import earthOceanImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-earth-and-ocean-dining-experience.jpg";
import inSuiteDiningImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-24-hour-in-suite-dining-room-service.jpg";
import atmosphereImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-sophisticated-yacht-like-atmosphere.jpg";
import observationImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-panoramic-observation-lounge-spaces.jpg";
import spaWellnessImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-spa-and-wellness-relaxation-deck.jpg";
import polarAdventureCtaImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/choose-your-seabourn-pursuit-polar-adventure-itinerary-cta.jpg";
import pursuitVsOthersImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/seabourn-pursuit-vs-other-luxury-expedition-ships-showcase.jpg";
import whoShouldSailImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/who-should-sail-seabourn-pursuit-expedition-travelers.jpg";
import whoShouldChooseDiffImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/who-should-choose-different-seabourn-ocean-cruise-ship.jpg";
import finalCtaImg from "../../../assets/Seabourn/SeabournPursuitShipGuide/is-seabourn-pursuit-your-next-adventure-booking-cta.jpg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import CardGrid from "../../../components/ui/CardGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import DynamicCulinaryShowcase from "../../../components/ui/DynamicCulinaryShowcase";
import LuxuryZigZagShowcase from "../../../components/ui/LuxuryZigZagShowcase";
import TravelerTypeGrid from "../../../components/ui/TravelerTypeGrid";
import LuxuryCruiseComparisonTable from "../../../components/ui/LuxuryCruiseComparisonTable";
import BrandShowcase from "../../../components/ui/BrandShowcase";
import InteractivePackingChecklist from "../../../components/ui/InteractivePackingChecklist";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import SaltJourneyTimeline from "../../../components/ui/SaltJourneyTimeline";
import StepByStepGuide from "../../../components/ui/StepByStepGuide";
import OpulentTabbedExperience from "../../../components/ui/OpulentTabbedExperience";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Destination Images (Content-Matched from Dedicated Regional Asset Collections)
import antarcticaImg from "../../../assets/Seabourn/SeabournAntarcticaCruises/seabourn-antarctica-penguin-colony-wildlife-encounters.jpg";
import arcticImg from "../../../assets/IcelandGreenlandCruisesExploraJourneys/Arctic.jpg";
import greenlandImg from "../../../assets/IcelandGreenlandCruisesExploraJourneys/Ilulissat.png";

// Data Source
import data from "./data.json";

/* ── Destination Tabs with Images ───────────────────────────────── */
const destinationTabs = [
  {
    ...data.destinationsSection.tabs[0],
    image: antarcticaImg,
  },
  {
    ...data.destinationsSection.tabs[1],
    image: arcticImg,
  },
  {
    ...data.destinationsSection.tabs[2],
    image: greenlandImg,
  },
];

/* ── Video Data ─────────────────────────────────────────────────── */
const pursuitVideoData = {
  youtubeId: "OI9mYBY6lG0",
  title: "Experience Seabourn Pursuit",
  description:
    "Explore Seabourn Pursuit—from PC6 polar hull architecture and custom submarines to all-suite luxury accommodations and authentic expedition discovery.",
};

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#webpage",
      url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/",
      name: "Seabourn Pursuit: Ship Guide, Suites & Expeditions",
      headline: "Seabourn Pursuit Ship Guide: Suites, Expeditions, Activities & Itineraries",
      description:
        "Explore Seabourn Pursuit, a luxury expedition ship featuring spacious suites, Zodiacs, expedition activities, fine dining and itineraries in Antarctica, the Arctic and beyond.",
      keywords: [
        "Seabourn Pursuit",
        "Seabourn Pursuit ship",
        "Seabourn Pursuit cruise",
        "Seabourn Pursuit review",
        "Seabourn Pursuit suites",
        "Seabourn Pursuit cabins",
        "Seabourn Pursuit expedition ship",
        "Seabourn Pursuit Antarctica",
        "Seabourn Pursuit Arctic",
        "Seabourn Pursuit itineraries",
        "Seabourn Pursuit Zodiacs",
        "Seabourn Pursuit submarine",
        "Seabourn Pursuit dining",
        "Seabourn Pursuit deck plan",
        "Seabourn Pursuit amenities",
        "Seabourn Pursuit destinations",
        "Seabourn Pursuit expedition activities",
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
      },
      breadcrumb: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#ship",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
        { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", position: 3, name: "Seabourn Ships", item: "https://www.tripsandships.com/seabourn-cruises/ships/" },
        { "@type": "ListItem", position: 4, name: "Seabourn Pursuit", item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/" },
      ],
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#ship",
      name: "Seabourn Pursuit",
      description:
        "A purpose-built luxury expedition ship designed for remote destinations including Antarctica and the Arctic, combining expedition capabilities with all-suite accommodations, fine dining and personalized Seabourn service.",
      url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/",
      brand: { "@type": "Brand", name: "Seabourn" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Ship Type", value: "Luxury expedition ship" },
        { "@type": "PropertyValue", name: "Guest Capacity", value: "Approximately 264 guests" },
        { "@type": "PropertyValue", name: "Entered Service", value: "2023" },
        { "@type": "PropertyValue", name: "Expedition Focus", value: "Polar and remote destinations" },
        { "@type": "PropertyValue", name: "Polar Capability", value: "PC6" },
        { "@type": "PropertyValue", name: "Zodiacs", value: "24" },
        { "@type": "PropertyValue", name: "Kayaks", value: "Available on applicable expeditions" },
        { "@type": "PropertyValue", name: "Expedition Team", value: "Dedicated expedition specialists" },
        { "@type": "PropertyValue", name: "Accommodation", value: "All-suite" },
        { "@type": "PropertyValue", name: "Private Verandas", value: "Available in many suite categories" },
        { "@type": "PropertyValue", name: "Dining", value: "Multiple restaurants, casual dining and in-suite dining" },
        { "@type": "PropertyValue", name: "Spa", value: "Yes" },
        { "@type": "PropertyValue", name: "Fitness Facilities", value: "Yes" },
        { "@type": "PropertyValue", name: "Expedition Activities", value: "Zodiac excursions, shore landings, kayaking, wildlife observation and scenic exploration" },
        { "@type": "PropertyValue", name: "Primary Destinations", value: "Antarctica, Arctic regions, Greenland, Iceland, Northern Europe and other remote expedition regions" },
        { "@type": "PropertyValue", name: "Atmosphere", value: "Intimate, sophisticated and adventurous" },
        { "@type": "PropertyValue", name: "Best For", value: "Luxury adventure travelers, couples, wildlife enthusiasts and first-time expedition travelers" },
        { "@type": "PropertyValue", name: "Sister Ship", value: "Seabourn Venture" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#features",
      name: "Seabourn Pursuit Features",
      description: "Key accommodations, expedition capabilities, dining, amenities and onboard features of Seabourn Pursuit.",
      numberOfItems: 8,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Luxury All-Suite Accommodations", description: "Seabourn Pursuit offers an all-suite luxury accommodation experience with multiple suite categories, including veranda and Penthouse options." },
        { "@type": "ListItem", position: 2, name: "Expedition Capabilities", description: "Pursuit is a purpose-built expedition ship designed for remote destinations, polar exploration, wildlife encounters and expedition-focused shore activities." },
        { "@type": "ListItem", position: 3, name: "24 Zodiacs", description: "The ship carries 24 Zodiacs for shore landings, wildlife viewing, scenic cruising, coastal exploration and access to remote expedition locations." },
        { "@type": "ListItem", position: 4, name: "Kayaking and Outdoor Exploration", description: "Kayaking is available on applicable voyages, providing opportunities to experience ice, islands, fjords, remote coastlines and sheltered bays from the water." },
        { "@type": "ListItem", position: 5, name: "Dedicated Expedition Team", description: "A dedicated expedition team provides destination expertise, leads activities and offers educational presentations covering wildlife, geography, geology, history, conservation and other subjects." },
        { "@type": "ListItem", position: 6, name: "Luxury Dining", description: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining, combining refined cuisine with a relaxed luxury atmosphere." },
        { "@type": "ListItem", position: 7, name: "Wellness and Elegant Public Areas", description: "Guests can enjoy lounges, observation areas, spa facilities, fitness facilities, outdoor spaces and other elegant public areas between expedition activities." },
        { "@type": "ListItem", position: 8, name: "Remote Expedition Destinations", description: "Pursuit offers expedition-style itineraries that can include Antarctica, Arctic regions, Greenland, Iceland, Northern Europe and other remote coastal destinations." },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/#faq",
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

const SeabournPursuitGuide = () => {
  const suiteItems = data.suitesSection.items.map((item, idx) => ({
    ...item,
    image: idx === 0 ? luxuryAccommodationsImg : balconiesImg,
  }));

  const diningImages = [
    restaurantImg,
    colonnadeImg,
    earthOceanImg,
    inSuiteDiningImg,
  ];

  const onboardImages = [
    atmosphereImg,
    observationImg,
    spaWellnessImg,
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Seabourn Pursuit: Ship Guide, Suites & Expeditions</title>
        <meta name="title" content="Seabourn Pursuit Ship Guide: Suites, Expeditions & Itineraries" />
        <meta
          name="description"
          content="Explore Seabourn Pursuit, a luxury expedition ship featuring spacious suites, Zodiacs, expedition activities, fine dining and itineraries in Antarctica, the Arctic and beyond."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/seabourn-pursuit/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        backgroundImage={heroImg}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText="Explore Pursuit Details"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. EDITORIAL INTRO: WHAT IS PURSUIT & THE EXPEDITION DIFFERENCE ── */}
      <EditorialIntroSection
        eyebrow={data.editorialIntro.eyebrow}
        heading={data.editorialIntro.heading}
        paragraphs={data.editorialIntro.paragraphs}
        placeholderLabel={data.editorialIntro.placeholderLabel}
        badgeTitle={data.editorialIntro.badgeTitle}
        badgeDescription={data.editorialIntro.badgeDescription}
        highlights={data.editorialIntro.highlights}
        image={editorialImg}
      />

      {/* ── 3. AT A GLANCE TABLE ── */}
      <ComparisonTable
        data={data.glanceTable}
      />

      {/* ── 4. A DAY IN THE FIELD / EXPEDITION EXPERIENCE (10 STEPS) ── */}
      <StepByStepGuide
        title="Seabourn Pursuit Expedition Experience"
        subtitle="A DAY IN THE FIELD"
        steps={data.expeditionDaySteps}
      />

      {/* ── CTA 1: MID-PAGE PLANNING ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        image={rightForYouCtaImg}
        theme="dark"
      />

      {/* ── 5. PURSUIT VS TRADITIONAL SEABOURN SHIPS TABLE ── */}
      <ComparisonTable
        data={data.shipComparisonTable}
      />

      {/* ── 6. ZODIACS & KAYAKING ── */}
      <GenericChecklistCards
        title={data.zodiacsAndKayaking.title}
        subtitle={data.zodiacsAndKayaking.subtitle}
        cards={data.zodiacsAndKayaking.cards}
      />

      {/* ── 7. EXPEDITION TEAM & ENRICHMENT ── */}
      <GenericChecklistCards
        title={data.expeditionTeamAndEnrichment.title}
        subtitle={data.expeditionTeamAndEnrichment.subtitle}
        cards={data.expeditionTeamAndEnrichment.cards}
      />

      {/* ── 8. SUITES & ACCOMMODATIONS ── */}
      <LuxuryFeatureShowcase
        title={data.suitesSection.title}
        subtitle={data.suitesSection.subtitle}
        items={suiteItems}
      />

      {/* ── 9. BEST SUITE FOR EVERY TRAVELER (4 CARDS) ── */}
      <div className="py-8 bg-slate-50">
        <CardGrid
          title="What Is the Best Suite on Seabourn Pursuit?"
          subtitle="There isn't one best suite for every traveler. Your travel style and budget should determine the choice."
          cards={data.bestSuiteCards}
          columns={4}
        />
      </div>

      {/* ── CTA 2: SUITE AVAILABILITY ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={findSuiteCtaImg}
        theme="dark"
      />

      {/* ── 10. DINING & CULINARY PROGRAM (4 CARDS) ── */}
      <DynamicCulinaryShowcase
        title="Seabourn Pursuit Dining"
        subtitle="All-inclusive fine dining, fine wines, and 24-hour in-suite service following exhilarating days of exploration."
        items={data.diningCards}
        images={diningImages}
      />

      {/* ── 11. DESTINATIONS (OPULENT TABBED EXPERIENCE WITH IMAGES) ── */}
      <OpulentTabbedExperience
        title={data.destinationsSection.title}
        subtitle={data.destinationsSection.subtitle}
        tabs={destinationTabs}
      />

      {/* ── Mid-Page Video Spotlight (Seabourn Pursuit Tour) ── */}
      <VideoEmbed data={pursuitVideoData} />

      {/* ── 12. ONBOARD EXPERIENCE & WELLNESS ── */}
      <LuxuryZigZagShowcase
        title={data.onboardExperienceShowcase.title}
        subtitle={data.onboardExperienceShowcase.subtitle}
        items={data.onboardExperienceShowcase.items}
        images={onboardImages}
      />

      {/* ── 13. WHO IS PURSUIT BEST FOR (TRAVELER TYPES) ── */}
      <TravelerTypeGrid
        title="Who Is Seabourn Pursuit Best For?"
        subtitle="Pursuit is designed for discerning travelers seeking active adventure paired with all-suite luxury."
        items={data.travelerTypes}
      />

      {/* ── 13B. CHOOSE YOUR POLAR ADVENTURE CTA ── */}
      <CenterCTA
        title={data.ctas.polarAdventureCta.title}
        description={data.ctas.polarAdventureCta.description}
        buttonText={data.ctas.polarAdventureCta.buttonText}
        buttonLink={data.ctas.polarAdventureCta.buttonLink}
        image={polarAdventureCtaImg}
        theme="dark"
      />

      {/* ── 14. PURSUIT VS SEABOURN VENTURE TABLE ── */}
      <LuxuryCruiseComparisonTable
        title={data.pursuitVsVentureTable.title}
        headers={data.pursuitVsVentureTable.headers}
        rows={data.pursuitVsVentureTable.rows}
      />

      {/* ── 15. PURSUIT VS OTHER EXPEDITION SHIPS & VENTURE SISTER SHIP (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={{
          ...data.pursuitVsOthersBrand,
          image: pursuitVsOthersImg,
        }}
        index={0}
      />

      {/* ── 16. PACKING GUIDE & DRESS CODE (INTERACTIVE PACKING CHECKLIST) ── */}
      <InteractivePackingChecklist
        title={data.packingGuideSection.title}
        subtitle={data.packingGuideSection.subtitle}
        categories={data.packingGuideSection.categories}
      />

      {/* ── 17. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 18. WHO SHOULD SAIL VS WHO SHOULD CHOOSE A DIFFERENT SHIP (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.whoShouldSailFaceoff}
        regentImage={whoShouldSailImg}
        vikingImage={whoShouldChooseDiffImg}
        regentImageAlt="Who Should Sail Seabourn Pursuit"
        vikingImageAlt="Who Should Choose a Different Seabourn Ship"
      />

      {/* ── 19. HOW TO CHOOSE ITINERARY & BOOKING TIPS (SALT JOURNEY TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.itineraryAndBookingGuide}
      />

      {/* ── 18. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 19. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking Seabourn Pursuit.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 20. FINAL CONCLUSION ── */}
      <ConclusionSection
        sections={[data.finalVerdict]}
      />

      {/* ── 21. FINAL CTA ── */}
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

export default SeabournPursuitGuide;