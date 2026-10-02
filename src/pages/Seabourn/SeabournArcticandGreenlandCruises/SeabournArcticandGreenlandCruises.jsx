import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import LuxuryZigZagShowcase from "../../../components/ui/LuxuryZigZagShowcase";
import CurvilinearGrid from "../../../components/ui/CurvilinearGrid";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import SaltJourneyTimeline from "../../../components/ui/SaltJourneyTimeline";
import InteractivePackingChecklist from "../../../components/ui/InteractivePackingChecklist";
import TravelerPersonaCards from "../../../components/ui/TravelerPersonaCards";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import BrandShowcase from "../../../components/ui/BrandShowcase";
import LuxuryCruiseComparisonTable from "../../../components/ui/LuxuryCruiseComparisonTable";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Assets from SeabournArcticandGreenlandCruises (SEO-optimized filenames)
import heroBgImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-and-greenland-cruises-luxury-hero.jpg";
import whyTakeImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/why-take-a-seabourn-arctic-luxury-cruise.jpg";
import greenlandImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-greenland-fjords-expedition-cruises.jpg";
import svalbardImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-svalbard-high-arctic-polar-expedition.jpg";
import chartExpeditionCtaImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/chart-your-seabourn-arctic-expedition-cta.jpg";
import zodiacCruisingImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-zodiac-excursions-glacier-cruising.jpg";
import zodiacLandingImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/what-is-a-seabourn-polar-zodiac-landing-like.jpg";
import guidedWalksImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-guided-tundra-walks-and-hikes.jpg";
import iceLandingsImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-polar-sea-ice-landings-exploration.jpg";
import expeditionTeamImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-expedition-team-naturalists-guides.jpg";
import culture1Img from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-inuit-cultural-experiences-greenland.jpg";
import culture2Img from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-greenland-community-encounters.jpg";
import exploreNwpCtaImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/explore-northwest-passage-high-arctic-voyages-cta.jpg";
import nwpExpeditionsImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-northwest-passage-historic-polar-route.jpg";
import baffinEllesmereImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-baffin-and-ellesmere-island-high-arctic.jpg";
import northernLightsImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-and-greenland-northern-lights-aurora.jpg";
import findSuiteCtaImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/find-your-perfect-seabourn-arctic-suite-cta.jpg";
import expeditionShipImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-pc6-polar-class-expedition-ship.jpg";
import traditionalShipImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/traditional-conventional-cruise-ship-comparison.jpg";
import consultSpecialistCtaImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/consult-a-polar-luxury-travel-specialist-cta.jpg";
import valuePropImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/seabourn-arctic-cruises-value-proposition-worth-it.jpg";
import startPlanningCtaImg from "../../../assets/Seabourn/SeabournArcticandGreenlandCruises/start-planning-seabourn-arctic-greenland-cruise-cta.jpg";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournArcticGreenlandSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#webpage",
      url: "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/",
      name: "Seabourn Arctic & Greenland Cruises: Svalbard & Wildlife",
      headline: "Seabourn Arctic & Greenland Cruises: Svalbard, Wildlife & Expedition Adventures",
      description:
        "Explore Seabourn Arctic and Greenland cruises featuring Svalbard, Greenland, Iceland, wildlife, glaciers, Zodiac excursions, expedition activities and Arctic culture.",
      keywords: [
        "Seabourn Arctic and Greenland Cruises",
        "Seabourn Arctic cruises",
        "Seabourn Greenland cruises",
        "Seabourn Arctic expedition",
        "Seabourn Greenland cruise",
        "Seabourn Svalbard cruise",
        "Seabourn Svalbard",
        "Seabourn Arctic itinerary",
        "Seabourn Greenland itinerary",
        "Seabourn Arctic wildlife",
        "Seabourn Greenland wildlife",
        "Seabourn Arctic expedition cruises",
        "Seabourn Venture Arctic",
        "Seabourn Pursuit Arctic",
        "Arctic luxury cruises",
        "Greenland expedition cruise",
        "Svalbard expedition cruise",
        "Arctic cruise best time",
        "Seabourn Arctic Northern Lights",
        "Seabourn Arctic Zodiac excursions",
        "Seabourn Arctic review",
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
      },
      breadcrumb: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#experience",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#breadcrumb",
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
          name: "Seabourn Arctic & Greenland Cruises",
          item: "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/",
        },
      ],
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#experience",
      name: "Seabourn Arctic & Greenland Cruises",
      description:
        "Ultra-luxury expedition cruises exploring Greenland, Svalbard, Iceland, Arctic Canada and other remote northern destinations through wildlife viewing, Zodiac exploration, guided walks, cultural experiences and expert-led expedition activities.",
      url: "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/",
      brand: {
        "@type": "Brand",
        name: "Seabourn",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Cruise Style", value: "Ultra-luxury expedition" },
        { "@type": "PropertyValue", name: "Main Regions", value: "Greenland, Svalbard, Iceland and Arctic Canada" },
        { "@type": "PropertyValue", name: "Expedition Ships", value: "Seabourn Venture and Seabourn Pursuit" },
        { "@type": "PropertyValue", name: "Popular Wildlife", value: "Polar bears, walruses, seals, whales and seabirds" },
        { "@type": "PropertyValue", name: "Expedition Activities", value: "Zodiac cruises, landings, walks, hikes and wildlife viewing" },
        { "@type": "PropertyValue", name: "Cultural Experiences", value: "Arctic communities, history and local traditions" },
        { "@type": "PropertyValue", name: "Scenery", value: "Glaciers, fjords, sea ice, mountains and tundra" },
        { "@type": "PropertyValue", name: "Northern Lights", value: "Possible on selected itineraries and conditions" },
        { "@type": "PropertyValue", name: "Best Travel Period", value: "Primarily Arctic summer" },
        { "@type": "PropertyValue", name: "Best For", value: "Wildlife lovers, photographers, adventure travelers and luxury expedition cruisers" },
        { "@type": "PropertyValue", name: "Zodiacs", value: "24 Zodiacs on purpose-built expedition ships" },
        { "@type": "PropertyValue", name: "Kayaking", value: "Available as an optional experience on selected itineraries" },
        { "@type": "PropertyValue", name: "Expedition Team", value: "Naturalists, biologists, historians, geologists, glaciologists, photographers and regional experts" },
        { "@type": "PropertyValue", name: "Primary Arctic Destinations", value: "Greenland, Svalbard, Iceland, Arctic Canada, Baffin Island, Ellesmere Island and Northwest Passage" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#features",
      name: "Seabourn Arctic & Greenland Cruise Features",
      description: "Key destinations, wildlife, expedition activities, cultural experiences and luxury features of Seabourn Arctic and Greenland cruises.",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Greenland and Svalbard Exploration",
          description: "Seabourn Arctic itineraries can explore Greenland, Svalbard and other remote northern destinations featuring glaciers, fjords, sea ice, mountains and tundra.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Zodiac Expedition Experiences",
          description: "Purpose-built expedition ships carry 24 Zodiacs for remote coastline exploration, wildlife viewing, glacier cruising, shore landings and scenic exploration.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Arctic Wildlife Viewing",
          description: "Depending on the itinerary and conditions, guests may encounter polar bears, walruses, seals, beluga whales, other whales, Arctic foxes, caribou, muskox and seabirds.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Guided Walks and Hikes",
          description: "Expedition activities can include guided walks and hikes through tundra, beaches, coastal areas, historic sites, villages, scenic viewpoints and wildlife habitats.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Expert Expedition Team",
          description: "Specialists including naturalists, biologists, historians, geologists, glaciologists and photographers provide briefings, lectures, wildlife interpretation, shore guidance and cultural context.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Arctic Cultural Experiences",
          description: "Selected itineraries provide opportunities to learn about Indigenous traditions, Arctic communities, local history, traditional livelihoods and cultural relationships with the environment.",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Northern Lights and Polar Scenery",
          description: "Selected Arctic voyages provide opportunities to search for the Northern Lights while exploring glaciers, fjords, sea ice, mountains and other dramatic polar landscapes.",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Luxury Expedition Cruising",
          description: "Seabourn combines remote expedition exploration with luxury accommodations, fine dining, premium beverages, comfortable lounges, spa facilities and wellness amenities.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/arctic-greenland/#faq",
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
const SeabournArcticGreenlandGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(seabournArcticGreenlandSchema)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs ? data.hero.paragraphs[0] : ""}
        badge="ULTRA-LUXURY POLAR EXPEDITION"
        backgroundImage={heroBgImg}
        secondaryCtaText={data.hero.ctaText || "Start Planning Your Seabourn Cruise"}
        secondaryCtaLink={data.hero.ctaLink || "/contact"}
      />

      <div id="content">
        {/* ── 2. AT A GLANCE TABLE ── */}
        <ComparisonTable
          data={data.glanceTable}
        />
      </div>

      {/* ── 3. WHY TAKE A SEABOURN ARCTIC CRUISE (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.whyTakeSection.title}
        subtitle={data.whyTakeSection.subtitle}
        paragraphs={data.whyTakeSection.paragraphs}
        highlightsTitle="Instead of traveling between conventional ports, a Seabourn expedition takes you into environments defined by:"
        highlights={data.whyTakeSection.highlights}
        conclusion={data.whyTakeSection.conclusion}
        image={whyTakeImg}
        imagePlaceholderText="Seabourn Arctic Wilderness Expedition"
      />

      {/* ── 4. WHERE DO SEABOURN ARCTIC CRUISES GO (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Where Do Seabourn Arctic Cruises Go?"
        subtitle="THE REGION"
        cards={data.whereGoCards}
      />

      {/* ── 5. GREENLAND & SVALBARD SHOWCASE (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.destinationsShowcase.title}
        subtitle={data.destinationsShowcase.subtitle}
        items={data.destinationsShowcase.items}
        images={[greenlandImg, svalbardImg]}
      />

      {/* ── 6. CTA 1 (EXPEDITION ITINERARIES) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        image={chartExpeditionCtaImg}
        theme="dark"
      />

      {/* ── 7. ARCTIC WILDLIFE (CURVILINEAR GRID) ── */}
      <CurvilinearGrid
        title={data.wildlifeSection.title}
        subtitle={data.wildlifeSection.subtitle}
        paragraphs={data.wildlifeSection.paragraphs}
        items={data.wildlifeSection.items}
      />

      {/* ── 8. ZODIAC EXCURSIONS, LANDINGS & ICE (LUXURY FEATURE SHOWCASE) ── */}
      <LuxuryFeatureShowcase
        title={data.zodiacTabs.title}
        subtitle={data.zodiacTabs.subtitle}
        description={data.zodiacTabs.description}
        items={data.zodiacTabs.tabs.map((tab, idx) => ({
          ...tab,
          image: [zodiacCruisingImg, zodiacLandingImg, guidedWalksImg, iceLandingsImg][idx]
        }))}
      />

      {/* ── 9. EXPEDITION TEAM (EDITORIAL FEATURE SHOWCASE) ── */}
      <EditorialFeatureShowcase
        title={data.expeditionTeam.title}
        subtitle={data.expeditionTeam.subtitle}
        features={data.expeditionTeam.roles}
        image={expeditionTeamImg}
        bgClass="bg-white"
      />

      {/* ── 10. ARCTIC CULTURAL EXPERIENCES (ASYMMETRIC STORY INTRO) ── */}
      <AsymmetricStoryIntro
        heading={data.cultureSection.heading}
        subtitle={data.cultureSection.subtitle}
        paragraphs={data.cultureSection.paragraphs}
        highlights={data.cultureSection.highlights}
        image1={culture1Img}
        image2={culture2Img}
        image1Placeholder={data.cultureSection.image1Placeholder}
        image2Placeholder={data.cultureSection.image2Placeholder}
      />

      {/* ── 11. CTA 2 (NORTHWEST PASSAGE & HIGH ARCTIC) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={exploreNwpCtaImg}
        theme="dark"
      />

      {/* ── 12. NORTHWEST PASSAGE VS BAFFIN & ELLESMERE (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.nwpFaceoff}
        regentImage={nwpExpeditionsImg}
        vikingImage={baffinEllesmereImg}
      />

      {/* ── 13. NORTHERN LIGHTS (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.northernLights.title}
        subtitle={data.northernLights.subtitle}
        paragraphs={data.northernLights.paragraphs}
        highlightsTitle="Key Aurora Viewing Considerations:"
        highlights={[
          "Observation areas including Constellation Lounge & open decks",
          "Darker late-summer skies (August & September)",
          "Natural phenomenon influenced by solar activity and cloud cover",
        ]}
        conclusion="Potentially, but travelers should understand the aurora is a natural phenomenon rather than a scheduled cruise activity."
        image={northernLightsImg}
        imagePlaceholderText="Chasing the Aurora Borealis in the Arctic"
      />

      {/* ── 14. BEST TIME / SEASONS (SALT JOURNEY TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.seasonsTimeline}
      />

      {/* ── VIDEO SECTION ── */}
      <VideoEmbed
        data={{
          youtubeId: "jqT0HCtx0Qw",
          title: "Experience Seabourn Arctic & Greenland Expedition Cruising",
          description: "Watch how Seabourn explores the massive glaciers of Greenland, the sea ice of Svalbard, and the majestic wildlife of the High Arctic."
        }}
      />

      {/* ── 15. EXPEDITION SHIPS (VENTURE & PURSUIT) (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.shipsShowcase.title}
        subtitle={data.shipsShowcase.subtitle}
        items={data.shipsShowcase.items}
        images={[expeditionShipImg]}
      />

      {/* ── 16. CTA 3 (SUITE PLANNING) ── */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        image={findSuiteCtaImg}
        theme="dark"
      />

      {/* ── 17. SHIP VS TRADITIONAL CRUISE (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.shipVsTraditionalFaceoff}
        regentImage={expeditionShipImg}
        vikingImage={traditionalShipImg}
      />

      {/* ── 18. PACKING LIST (INTERACTIVE PACKING CHECKLIST) ── */}
      <InteractivePackingChecklist
        title={data.packingChecklist.title}
        subtitle={data.packingChecklist.subtitle}
        categories={data.packingChecklist.categories}
      />

      {/* ── 19. EXPERIENCE NEEDED / PHYSICAL READINESS (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title={data.experienceNeeded.title}
        subtitle={data.experienceNeeded.subtitle}
        cards={[
          {
            title: "Physical & Mobility Considerations",
            items: data.experienceNeeded.highlights,
          },
          {
            title: "Expedition Team Guidance",
            items: [
              "Zodiac boarding assistance provided on every excursion",
              "Choice of gentle walks or active tundra hikes",
              "Full safety briefings and polar gear guidelines",
              "Accessible for first-time polar expedition travelers",
            ],
          },
        ]}
      />

      {/* ── 20. WHO IS IT BEST FOR (TRAVELER PERSONA CARDS) ── */}
      <TravelerPersonaCards
        title={data.travelerPersonas.title}
        subtitle={data.travelerPersonas.subtitle}
        personas={data.travelerPersonas.personas}
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

      {/* ── 22. CTA 4 (CONSULT POLAR SPECIALIST) ── */}
      <CenterCTA
        title={data.ctas.midCta4.title}
        description={data.ctas.midCta4.description}
        buttonText={data.ctas.midCta4.buttonText}
        buttonLink={data.ctas.midCta4.buttonLink}
        image={consultSpecialistCtaImg}
        theme="dark"
      />

      {/* ── 23. VALUE PROPOSITION (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={{ ...data.worthItBrand, image: valuePropImg }}
        index={0}
      />

      {/* ── 24. ARCTIC VS ANTARCTICA COMPARISON TABLE ── */}
      <LuxuryCruiseComparisonTable
        title={data.arcticVsAntarctica.title}
        headers={data.arcticVsAntarctica.headers}
        rows={data.arcticVsAntarctica.rows}
      />

      {/* ── 25. TIPS FOR BOOKING AN ARCTIC CRUISE (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.bookingTips}
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

      {/* ── 27. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Seabourn Arctic or Greenland cruise.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 28. FINAL CONCLUSION ── */}
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
        image={startPlanningCtaImg}
        theme="dark"
      />
    </div>
  );
 };

export default SeabournArcticGreenlandGuide;