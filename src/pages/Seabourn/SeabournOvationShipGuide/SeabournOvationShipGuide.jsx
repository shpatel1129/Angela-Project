import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import CardGrid from "../../../components/ui/CardGrid";
import DynamicCulinaryShowcase from "../../../components/ui/DynamicCulinaryShowcase";
import LuxuryZigZagShowcase from "../../../components/ui/LuxuryZigZagShowcase";
import OpulentTabbedExperience from "../../../components/ui/OpulentTabbedExperience";
import TravelerTypeGrid from "../../../components/ui/TravelerTypeGrid";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import LuxuryCruiseComparisonTable from "../../../components/ui/LuxuryCruiseComparisonTable";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import BrandShowcase from "../../../components/ui/BrandShowcase";
import SaltJourneyTimeline from "../../../components/ui/SaltJourneyTimeline";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Page Asset Images from SeabournOvationShipGuide (SEO-Optimized)
import heroImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-ultra-luxury-ship-guide-hero.jpg";
import whatIsOvationImg from "../../../assets/Seabourn/SeabournOvationShipGuide/what-is-seabourn-ovation-luxury-cruise-ship-editorial.jpg";
import dependingOnCategoryImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-luxury-suite-amenities-inclusions.jpg";
import suiteCategoriesImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-all-suite-accommodations-categories.jpg";
import balconiesImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-veranda-suite-private-balcony.jpg";
import theRestaurantImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-the-restaurant-fine-dining-venue.jpg";
import theColonnadeImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-the-colonnade-casual-indoor-outdoor-dining.jpg";
import earthOceanImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-earth-and-ocean-alfresco-dining.jpg";
import thePatioImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-the-patio-poolside-alfresco-dining.jpg";
import seabournSquareImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-seabourn-square-living-room-hub.jpg";
import observationAreasImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-scenic-observation-lounge-decks.jpg";
import swimmingPoolImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-teak-sundeck-swimming-pool.jpg";
import luxurySpaImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-the-spa-wellness-thermal-suite.jpg";
import fitnessCenterImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-ocean-view-fitness-center-gym.jpg";
import barsLoungesImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-bars-and-lounges-social-venues.jpg";
import entertainmentImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-intimate-evening-entertainment-performances.jpg";
import enrichmentImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-cultural-enrichment-destination-lectures.jpg";
import whoShouldSailImg from "../../../assets/Seabourn/SeabournOvationShipGuide/who-should-sail-seabourn-ovation-luxury-cruisers.jpg";
import whoShouldNotChooseImg from "../../../assets/Seabourn/SeabournOvationShipGuide/who-should-not-choose-seabourn-ovation-mega-ship-travelers.jpg";
import worthItBrandImg from "../../../assets/Seabourn/SeabournOvationShipGuide/seabourn-ovation-luxury-value-proposition-showcase.jpg";
import finalCtaImg from "../../../assets/Seabourn/SeabournOvationShipGuide/start-planning-your-seabourn-ovation-cruise-voyage-cta.jpg";

// Mid-Page CTA Images
import findSuiteCtaImg from "../../../assets/Seabourn/SeabournSuites/seabourn-signature-suite-forward-oceanfront-view.jpg";
import reserveTableCtaImg from "../../../assets/Seabourn/SeabournDining/seabourn-luxury-cruise-dining-culinary-experience.jpg";

// Destination Images
import medImg from "../../../assets/GreeceGreekIslesCruisesExploraJourneys/Greek-Isles-Cruises.jpg";
import northEuropeImg from "../../../assets/NorthernEuropeCruisesExploraJourneys/Magnificent-Fjords.jpg";
import caribbeanImg from "../../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-beach-aerial.jpg";

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
const ovationVideoData = {
  youtubeId: "v_LbIOec38Y",
  title: "Experience Seabourn Ovation",
  description:
    "Explore the refined ultra-luxury design, Adam D. Tihany all-suite interiors, gourmet dining venues, and destination-focused cruising aboard Seabourn Ovation.",
};

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournOvationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/",
      "name": "Seabourn Ovation: Ship Guide, Suites & Dining",
      "headline": "Seabourn Ovation Ship Guide: Suites, Restaurants, Public Areas & Destinations",
      "description":
        "Explore Seabourn Ovation, including suites, restaurants, public areas, onboard amenities, destinations and who this luxury ship is best suited for.",
      "keywords": [
        "Seabourn Ovation",
        "Seabourn Ovation ship",
        "Seabourn Ovation cruise",
        "Seabourn Ovation review",
        "Seabourn Ovation suites",
        "Seabourn Ovation cabins",
        "Seabourn Ovation restaurants",
        "Seabourn Ovation dining",
        "Seabourn Ovation amenities",
        "Seabourn Ovation deck plan",
        "Seabourn Ovation destinations",
        "Seabourn Ovation itinerary",
        "Seabourn Ovation pool",
        "Seabourn Ovation spa",
        "Seabourn Ovation best suites",
        "Seabourn Ovation worth it",
        "Seabourn Ovation ship guide",
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel",
      },
      "breadcrumb": { "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#breadcrumb" },
      "mainEntity": { "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#ship" },
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Cruises", "item": "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Ships", "item": "https://www.tripsandships.com/seabourn-cruises/ships/" },
        { "@type": "ListItem", "position": 4, "name": "Seabourn Ovation", "item": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/" },
      ],
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#ship",
      "name": "Seabourn Ovation",
      "description":
        "An all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining, elegant public spaces and destination-focused cruising in an intimate atmosphere.",
      "url": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/",
      "brand": { "@type": "Brand", "name": "Seabourn" },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Ship Type", "value": "Luxury ocean cruise ship" },
        { "@type": "PropertyValue", "name": "Guest Capacity", "value": "Approximately 600 guests" },
        { "@type": "PropertyValue", "name": "Ship Style", "value": "All-suite luxury" },
        { "@type": "PropertyValue", "name": "Atmosphere", "value": "Intimate, elegant and relaxed" },
        { "@type": "PropertyValue", "name": "Accommodation", "value": "All-suite" },
        { "@type": "PropertyValue", "name": "Private Verandas", "value": "Available in many suite categories" },
        { "@type": "PropertyValue", "name": "Pool", "value": "Yes" },
        { "@type": "PropertyValue", "name": "Spa", "value": "Yes" },
        { "@type": "PropertyValue", "name": "Fitness Center", "value": "Yes" },
        { "@type": "PropertyValue", "name": "Bars & Lounges", "value": "Multiple" },
        { "@type": "PropertyValue", "name": "Entertainment", "value": "Shows, live music and enrichment" },
        { "@type": "PropertyValue", "name": "Dining", "value": "Multiple restaurants and dining venues" },
        { "@type": "PropertyValue", "name": "Sister Ship", "value": "Seabourn Encore" },
        { "@type": "PropertyValue", "name": "Primary Appeal", "value": "Luxury ocean cruising" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#features",
      "name": "Seabourn Ovation Features",
      "description": "Key accommodations, dining, onboard amenities and destination features of Seabourn Ovation.",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "All-Suite Accommodations", "description": "Seabourn Ovation provides an all-suite accommodation experience with multiple suite categories and spacious living areas." },
        { "@type": "ListItem", "position": 2, "name": "Private Verandas", "description": "Many Seabourn Ovation suites feature private verandas for enjoying ocean views, sunsets, port arrivals and coastal scenery." },
        { "@type": "ListItem", "position": 3, "name": "Luxury Dining", "description": "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." },
        { "@type": "ListItem", "position": 4, "name": "Seabourn Square", "description": "Seabourn Square provides a central social and service area with a sophisticated lounge or living-room atmosphere." },
        { "@type": "ListItem", "position": 5, "name": "Pool", "description": "The ship features a swimming pool area designed primarily for quiet relaxation rather than a large resort-style pool experience." },
        { "@type": "ListItem", "position": 6, "name": "Spa & Fitness", "description": "Seabourn Ovation provides spa, wellness and fitness facilities for relaxation and maintaining an exercise routine during the cruise." },
        { "@type": "ListItem", "position": 7, "name": "Entertainment & Enrichment", "description": "Onboard programming can include live music, performances, guest speakers, cultural presentations and destination-focused enrichment." },
        { "@type": "ListItem", "position": 8, "name": "Destination-Focused Cruising", "description": "Seabourn Ovation can sail to destinations including the Mediterranean, Northern Europe, Scandinavia, British Isles, Caribbean and other seasonal regions." },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is Seabourn Ovation?", "acceptedAnswer": { "@type": "Answer", "text": "Seabourn Ovation is an all-suite luxury ocean cruise ship designed for travelers seeking personalized service, fine dining and an intimate onboard atmosphere." } },
        { "@type": "Question", "name": "How many guests does Seabourn Ovation accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "Seabourn Ovation accommodates approximately 600 guests." } },
        { "@type": "Question", "name": "Is Seabourn Ovation an all-suite ship?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All accommodations on Seabourn Ovation are suites." } },
        { "@type": "Question", "name": "Do Seabourn Ovation suites have balconies?", "acceptedAnswer": { "@type": "Answer", "text": "Many Seabourn Ovation suite categories include private verandas. The exact configuration depends on the suite." } },
        { "@type": "Question", "name": "What restaurants are on Seabourn Ovation?", "acceptedAnswer": { "@type": "Answer", "text": "Dining options can include The Restaurant, The Colonnade, Earth & Ocean, The Patio and in-suite dining." } },
        { "@type": "Question", "name": "Is dining included on Seabourn Ovation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." } },
        { "@type": "Question", "name": "Is Seabourn Ovation dining open seating?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Seabourn's dining model provides flexible, open-seating options rather than requiring guests to remain at one assigned table throughout the cruise." } },
        { "@type": "Question", "name": "Does Seabourn Ovation have a pool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Seabourn Ovation has a pool area designed primarily for relaxation." } },
        { "@type": "Question", "name": "Does Seabourn Ovation have a spa?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guests can access spa and wellness services onboard." } },
        { "@type": "Question", "name": "Does Seabourn Ovation have a fitness center?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The ship provides fitness facilities for guests who want to exercise during the cruise." } },
        { "@type": "Question", "name": "What destinations does Seabourn Ovation visit?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the itinerary and season, Ovation can sail to destinations in the Mediterranean, Northern Europe, Scandinavia, the British Isles, the Caribbean and other regions." } },
        { "@type": "Question", "name": "Is Seabourn Ovation good for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Its intimate atmosphere, suites, verandas, dining and destination-focused itineraries make it particularly appealing to couples." } },
        { "@type": "Question", "name": "Is Seabourn Ovation good for solo travelers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open dining and the relatively intimate passenger environment can make the ship comfortable for solo travelers." } },
        { "@type": "Question", "name": "Is Seabourn Ovation good for families?", "acceptedAnswer": { "@type": "Answer", "text": "It can work for families, particularly multigenerational travelers, but it is not designed as a traditional family resort ship." } },
        { "@type": "Question", "name": "Is Seabourn Ovation good for first-time luxury cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The combination of all-suite accommodations, personalized service, fine dining and a relaxed atmosphere makes it a strong introduction to luxury cruising." } },
        { "@type": "Question", "name": "Is Seabourn Ovation formal?", "acceptedAnswer": { "@type": "Answer", "text": "The atmosphere is sophisticated but generally relaxed. Smart-casual clothing is appropriate for much of the onboard experience." } },
        { "@type": "Question", "name": "What is the difference between Seabourn Ovation and Seabourn Encore?", "acceptedAnswer": { "@type": "Answer", "text": "They are sister ships with very similar luxury concepts, passenger capacity and onboard experiences. Itinerary and suite availability can be more important factors when choosing between them." } },
        { "@type": "Question", "name": "Is Seabourn Ovation worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "For travelers who value all-suite accommodations, personalized service, fine dining and a quieter luxury cruise atmosphere, Seabourn Ovation can be an excellent choice." } },
      ],
    },
  ],
};

const SeabournOvationGuide = () => {
  const suiteItems = data.suitesSection.items.map((item, idx) => ({
    ...item,
    image: [dependingOnCategoryImg, suiteCategoriesImg, balconiesImg][idx]
  }));

  const diningImages = [
    theRestaurantImg,
    theColonnadeImg,
    earthOceanImg,
    thePatioImg
  ];

  const publicAreasImages = [
    seabournSquareImg,
    observationAreasImg,
    swimmingPoolImg,
    luxurySpaImg,
    fitnessCenterImg,
    barsLoungesImg,
    entertainmentImg,
    enrichmentImg
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Seabourn Ovation: Ship Guide, Suites & Dining</title>
        <meta name="title" content="Seabourn Ovation Ship Guide: Suites, Dining & Destinations" />
        <meta
          name="description"
          content="Explore Seabourn Ovation, including suites, restaurants, public areas, onboard amenities, destinations and who this luxury ship is best suited for."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/seabourn-ovation/" />
        <script type="application/ld+json">{JSON.stringify(seabournOvationSchema)}</script>
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
        primaryCtaText={data.hero.ctaText || "Start Planning Your Ovation Voyage"}
        primaryCtaLink={data.hero.ctaLink || "/contact"}
        secondaryCtaText="Explore Ovation Details"
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* ── 2. AT A GLANCE TABLE ── */}
        <ComparisonTable
          data={data.glanceTable}
        />
      </div>

      {/* ── 3. WHAT IS SEABOURN OVATION (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.whatIsSection.title}
        subtitle={data.whatIsSection.subtitle}
        paragraphs={data.whatIsSection.paragraphs}
        highlightsTitle="Ovation focuses on:"
        highlights={data.whatIsSection.highlights}
        conclusion={data.whatIsSection.conclusion}
        imagePlaceholderText="Seabourn Ovation Luxury Yacht Atmosphere"
        image={whatIsOvationImg}
      />

      {/* ── 4. WHY CHOOSE SEABOURN OVATION (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Why Choose Seabourn Ovation?"
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
        title="Best Seabourn Ovation Suites"
        subtitle="CHOOSING A CATEGORY"
        description="There isn't one best suite for everyone."
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
        items={data.diningSection.items || data.diningSection.venues}
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

      {/* ── Mid-Page Video Spotlight (Seabourn Ovation Tour) ── */}
      <VideoEmbed data={ovationVideoData} />

      {/* ── 11. WHO IS SEABOURN OVATION BEST FOR (TRAVELER TYPE GRID) ── */}
      <TravelerTypeGrid
        title="Who Is Seabourn Ovation Best For?"
        subtitle="Seabourn Ovation is particularly well suited to travelers who value:"
        items={data.travelerTypes}
      />

      {/* ── 12. CTA 2 (DINING) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={reserveTableCtaImg}
        theme="dark"
      />

      {/* ── 13. TARGET FIT (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.targetFitFaceoff}
        regentImage={whoShouldSailImg}
        vikingImage={whoShouldNotChooseImg}
        regentImageAlt="Who Should Sail Seabourn Ovation"
        vikingImageAlt="Who Should NOT Choose Seabourn Ovation"
      />

      {/* ── 14. OVATION VS SEABOURN ENCORE (SISTER SHIP TABLE) ── */}
      <LuxuryCruiseComparisonTable
        title={data.ovationVsEncoreTable.title}
        subtitle={data.ovationVsEncoreTable.subtitle}
        headers={data.ovationVsEncoreTable.headers}
        rows={data.ovationVsEncoreTable.rows}
      />

      {/* ── 16. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 17. VALUE PROPOSITION (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={{
          ...data.worthItBrand,
          image: worthItBrandImg,
        }}
        index={0}
      />

      {/* ── 18. TIPS FOR CHOOSING A SUITE & PLANNING (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.suiteAndPlanningTips}
      />

      {/* ── 19. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 20. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions About Seabourn Ovation",
            subtitle: "Everything travelers need to know before booking a Seabourn Ovation cruise.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 21. FINAL CONCLUSION ── */}
      <ConclusionSection
        sections={[data.finalVerdict]}
      />

      {/* ── 22. FINAL CTA ── */}
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

export default SeabournOvationGuide;