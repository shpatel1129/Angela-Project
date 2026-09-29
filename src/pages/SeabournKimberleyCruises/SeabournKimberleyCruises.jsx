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
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import ProsConsCards from "../../components/ui/ProsConsCards";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import InteractivePackingChecklist from "../../components/ui/InteractivePackingChecklist";
import SaltJourneyTimeline from "../../components/ui/SaltJourneyTimeline";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";  

// Assets (imported with images commented out as standard)
import kimberleyHeroImg from "../../assets/SeabournShips/seabourn-pursuit-ultra-luxury-expedition-vessel.jpg";
import venturePolarImg from "../../assets/SeabournShips/seabourn-venture-polar-class-expedition-ship.jpg";
import discoveryLoungeImg from "../../assets/SeabournShips/seabourn-venture-onboard-expedition-discovery-lounge.jpg";
import expeditionDiningImg from "../../assets/SeabournShips/seabourn-venture-pursuit-expedition-fine-dining.jpg";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournKimberleySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#webpage",
      url: "https://www.tripsandships.com/seabourn-cruises/kimberley/",
      name: "Seabourn Kimberley Cruises: Wildlife, Waterfalls & Zodiacs",
      headline: "Seabourn Kimberley Cruises: Wildlife, Waterfalls, Zodiacs & Indigenous Culture",
      description:
        "Explore Seabourn Kimberley cruises with Zodiac excursions, waterfalls, Indigenous culture, wildlife, remote landscapes and the best time to sail Australia's Kimberley coast.",
      keywords: [
        "Seabourn Kimberley Cruises",
        "Seabourn Kimberley",
        "Seabourn Kimberley cruise",
        "Seabourn Kimberley cruises",
        "Seabourn Kimberley itinerary",
        "Seabourn Kimberley expedition",
        "Kimberley cruise Australia",
        "Seabourn Kimberley wildlife",
        "Seabourn Kimberley waterfalls",
        "Seabourn Kimberley Zodiac excursions",
        "Seabourn Kimberley Indigenous culture",
        "Seabourn Kimberley best time to cruise",
        "Kimberley Australia cruise season",
        "Seabourn Kimberley packing",
        "Seabourn Kimberley shore excursions",
        "Seabourn Kimberley cruise review",
        "Seabourn Kimberley worth it",
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
      },
      breadcrumb: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#breadcrumb",
      },
      mainEntity: {
        "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#destination",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#breadcrumb",
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
          name: "Seabourn Kimberley Cruises",
          item: "https://www.tripsandships.com/seabourn-cruises/kimberley/",
        },
      ],
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#destination",
      name: "Seabourn Kimberley Cruises",
      description:
        "Luxury expedition cruises exploring Australia's remote Kimberley region through Zodiac excursions, wildlife encounters, waterfalls, scenic cruising, shore exploration and Indigenous cultural experiences.",
      url: "https://www.tripsandships.com/seabourn-cruises/kimberley/",
      brand: {
        "@type": "Brand",
        name: "Seabourn",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Destination", value: "Kimberley, Western Australia" },
        { "@type": "PropertyValue", name: "Cruise Style", value: "Luxury expedition" },
        { "@type": "PropertyValue", name: "Main Attraction", value: "Remote landscapes and wildlife" },
        { "@type": "PropertyValue", name: "Shore Access", value: "Zodiac excursions" },
        { "@type": "PropertyValue", name: "Wildlife", value: "Crocodiles, birds, marine life and other native species" },
        { "@type": "PropertyValue", name: "Scenery", value: "Cliffs, waterfalls, beaches, rivers and tidal landscapes" },
        { "@type": "PropertyValue", name: "Cultural Experiences", value: "Indigenous heritage and local cultural interpretation" },
        { "@type": "PropertyValue", name: "Activities", value: "Zodiac rides, hikes, wildlife viewing and exploration" },
        { "@type": "PropertyValue", name: "Sailing Season", value: "Primarily during the Kimberley's dry-season months" },
        { "@type": "PropertyValue", name: "Onboard Experience", value: "Luxury accommodation, fine dining, lounge spaces, wellness facilities and relaxed social spaces" },
        { "@type": "PropertyValue", name: "Best For", value: "Adventure travelers, couples, photographers, wildlife enthusiasts, nature lovers and luxury expedition travelers" },
        { "@type": "PropertyValue", name: "Atmosphere", value: "Remote, adventurous and luxurious" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#features",
      name: "Seabourn Kimberley Cruise Features",
      description: "Key experiences and features of Seabourn Kimberley expedition cruises.",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Zodiac Expeditions",
          description: "Zodiac excursions allow guests to explore narrow waterways, remote beaches, waterfalls, tidal environments, cliffs and coastal areas that the main ship cannot reach.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kimberley Waterfalls",
          description: "Seasonal waterfalls are among the region's most memorable attractions and can be experienced by Zodiac, scenic cruising, shore landing or guided expedition depending on conditions.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wildlife Viewing",
          description: "Depending on the itinerary, season and conditions, guests may encounter saltwater crocodiles, sea turtles, dolphins, whales, rays, seabirds, shore birds and other native Australian wildlife.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Indigenous Cultural Experiences",
          description: "Depending on the itinerary and programming, guests may learn about Indigenous history, traditional knowledge, connection to Country, art, stories, traditions and ancient rock art.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Hiking and Shore Exploration",
          description: "Expedition activities can include guided walks, short hikes, beach exploration, scenic viewpoints, wildlife observation and cultural interpretation.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Scenic Cruising",
          description: "Guests can experience dramatic Kimberley scenery from the water, including red cliffs, islands, beaches, waterfalls, tidal rivers and remote coastline.",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Luxury Onboard Experience",
          description: "After expedition activities, guests can return to comfortable suites, fine dining, lounge spaces, wellness facilities, pool areas and relaxed social spaces.",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Dry-Season Expedition Cruising",
          description: "The Kimberley cruise season is generally concentrated around the dry season, with timing influencing waterfall activity, weather and expedition conditions.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/kimberley/#faq",
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
const SeabournKimberleyCruisesGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Seabourn Kimberley Cruises: Itineraries, Wildlife & Zodiacs</title>
        <meta name="title" content="Seabourn Kimberley Cruises: Itineraries, Wildlife & Zodiacs" />
        <meta
          name="description"
          content="Explore Seabourn Kimberley cruises with Zodiac excursions, waterfalls, Indigenous culture, wildlife, remote landscapes and the best time to sail Australia's Kimberley coast."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/kimberley/" />
        <script type="application/ld+json">{JSON.stringify(seabournKimberleySchema)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs ? data.hero.paragraphs[0] : ""}
        badge="LUXURY EXPEDITION VOYAGES"
        secondaryCtaText={data.hero.ctaText || "Start Planning Your Seabourn Cruise"}
        secondaryCtaLink={data.hero.ctaLink || "/contact"}
      />

      <div id="content">
        {/* ── 2. AT A GLANCE TABLE ── */}
        <ComparisonTable
          data={data.glanceTable}
        />
      </div>

      {/* ── 3. WHY TAKE A KIMBERLEY CRUISE (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.whyTakeSection.title}
        subtitle={data.whyTakeSection.subtitle}
        paragraphs={data.whyTakeSection.paragraphs}
        highlightsTitle="A Seabourn Kimberley itinerary can combine:"
        highlights={data.whyTakeSection.highlights}
        conclusion={data.whyTakeSection.conclusion}
        imagePlaceholderText="Seabourn Kimberley Expedition"
      />

      {/* ── 4. WHAT MAKES THE KIMBERLEY SPECIAL (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="What Makes the Kimberley Special?"
        subtitle="DRAMATIC CONTRASTS"
        cards={data.specialChecklistCards}
      />

      {/* ── 5. ZODIAC EXCURSIONS (LUXURY FEATURE SHOWCASE) ── */}
      <LuxuryFeatureShowcase
        title={data.zodiacShowcase.title}
        subtitle={data.zodiacShowcase.subtitle}
        description={data.zodiacShowcase.description}
        items={data.zodiacShowcase.items}
        images={[
          // kimberleyHeroImg, // Images commented out as requested
        ]}
      />

      {/* ── 6. WATERFALLS SECTION (ASYMMETRIC STORY INTRO) ── */}
      <AsymmetricStoryIntro
        heading={data.waterfallsSection.title}
        subtitle={data.waterfallsSection.subtitle}
        paragraphs={data.waterfallsSection.paragraphs}
        highlights={data.waterfallsSection.highlights}
        image1Placeholder="KIMBERLEY SEASONAL WATERFALLS"
        image2Placeholder="ZODIAC WATERFALL EXPLORATION"
      />

      {/* ── 7. CTA 1 (EXPEDITION VOYAGES) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        theme="dark"
      />

      {/* ── 8. WILDLIFE & MARINE ENCOUNTERS (CURVILINEAR GRID) ── */}
      <CurvilinearGrid
        title={data.wildlifeSection.title}
        subtitle={data.wildlifeSection.subtitle}
        paragraphs={data.wildlifeSection.paragraphs}
        items={data.wildlifeSection.items}
      />

      {/* ── 9. INDIGENOUS CULTURE (LUXURY FEATURE SHOWCASE) ── */}
      <LuxuryFeatureShowcase
        title={data.cultureShowcase.title}
        subtitle={data.cultureShowcase.subtitle}
        description={data.cultureShowcase.description}
        items={data.cultureShowcase.items}
        images={[
          // venturePolarImg, // Images commented out as requested
        ]}
      />

      {/* ── 10. HIKING & SHORE EXPLORATION (CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title="Seabourn Kimberley Hiking and Shore Exploration"
        subtitle="ON FOOT & ASHORE"
        cards={data.hikingCards}
      />

      {/* ── 11. SCENIC CRUISING (EDITORIAL INTRO) ── */}
      <EditorialIntroSection
        title={data.scenicSection.title}
        subtitle={data.scenicSection.subtitle}
        paragraphs={data.scenicSection.paragraphs}
        highlightsTitle="Breathtaking sights from the water include:"
        highlights={data.scenicSection.highlights}
        conclusion={data.scenicSection.conclusion}
        imagePlaceholderText="Scenic Cruising along Kimberley Gorges"
      />

      {/* ── 12. WHEN TO SAIL & CLIMATE (ZIG-ZAG SHOWCASE) ── */}
      <LuxuryZigZagShowcase
        title={data.seasonShowcase.title}
        subtitle={data.seasonShowcase.subtitle}
        items={data.seasonShowcase.items}
        images={[
          // discoveryLoungeImg, // Images commented out as requested
        ]}
      />

      {/* ── 13. CTA 2 (SAILING DATES) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        theme="dark"
      />

      {/* ── 14. PACKING LIST (INTERACTIVE PACKING CHECKLIST) ── */}
      <InteractivePackingChecklist
        title={data.packingChecklist.title}
        subtitle={data.packingChecklist.subtitle}
        categories={data.packingChecklist.categories}
      />

      {/* ── 15. ONBOARD EXPERIENCE (EDITORIAL FEATURE SHOWCASE) ── */}
      <EditorialFeatureShowcase
        title={data.onboardSection.title}
        subtitle={data.onboardSection.subtitle}
        features={data.onboardSection.features}
        bgClass="bg-stone-50"
      />

      {/* ── 16. KIMBERLEY VS TRADITIONAL LUXURY CRUISE (PHILOSOPHY FACEOFF) ── */}
      <ShipPhilosophyFaceoff
        data={data.kimberleyVsTraditionalFaceoff}
      />

      {/* ── 17. WHO SHOULD TAKE THIS CRUISE (TRAVELER TYPE GRID) ── */}
      <TravelerTypeGrid
        title="Who Should Take a Seabourn Kimberley Cruise?"
        subtitle="This extraordinary expedition itinerary is particularly well suited to:"
        items={data.travelerTypes}
      />

      {/* ── 18. CTA 3 (PLANNING) ── */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        theme="light"
      />

      {/* ── 19. COUPLES, SOLO TRAVELERS & FAMILIES (TRAVELER PERSONA CARDS) ── */}
      <TravelerPersonaCards
        title={data.travelerPersonaCards.title}
        subtitle={data.travelerPersonaCards.subtitle}
        personas={data.travelerPersonaCards.personas}
      />

      {/* ── 20. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 21. TIPS FOR PLANNING A KIMBERLEY CRUISE (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.tipsData}
      />

      {/* ── 22. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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

      {/* ── 23. FREQUENTLY ASKED QUESTIONS (18 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Seabourn Kimberley cruise.",
            items: data.faqs,
          }}
        />
      </div>

      {/* ── 24. FINAL CONCLUSION ── */}
      {/* ── 24. FINAL VERDICT ── */}
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

      {/* ── 25. FINAL CTA ── */}
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

export default SeabournKimberleyCruisesGuide;