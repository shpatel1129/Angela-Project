import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import CardGrid from "../../components/ui/CardGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import BrandShowcase from "../../components/ui/BrandShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import OpulentTabbedExperience from "../../components/ui/OpulentTabbedExperience";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Destination Images
import antarcticaImg from "../../assets/SeabournExpeditionCruises/seabourn-antarctica-wildlife-penguins-polar-expedition.jpg";
import arcticImg from "../../assets/SeabournExpeditionCruises/seabourn-arctic-svalbard-polar-bear-wildlife-expedition.jpg";
import greenlandImg from "../../assets/SeabournExpeditionCruises/seabourn-arctic-cruises-best-time-greenland-svalbard.jpg";

// Data Source
import data from "./data.json";

/* ── Destination Tabs with Images ───────────────────────────────── */
const destinationTabs = [
  {
    ...data.destinationsSection.tabs[0],
    image: antarcticaImg
  },
  {
    ...data.destinationsSection.tabs[1],
    image: arcticImg
  },
  {
    ...data.destinationsSection.tabs[2],
    image: greenlandImg
  }
];

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/",
      "name": "Seabourn Venture: Ship Guide, Suites & Expeditions",
      "headline": "Seabourn Venture Ship Guide: Suites, Dining, Zodiacs, Submarine & Expeditions",
      "description":
        "Explore Seabourn Venture, including suites, dining, Zodiacs, submarines, expedition capabilities, onboard amenities and destinations.",
      "keywords": [
        "Seabourn Venture",
        "Seabourn Venture ship",
        "Seabourn Venture cruise",
        "Seabourn Venture review",
        "Seabourn Venture suites",
        "Seabourn Venture cabins",
        "Seabourn Venture dining",
        "Seabourn Venture submarine",
        "Seabourn Venture Zodiacs",
        "Seabourn Venture expedition ship",
        "Seabourn Venture Antarctica",
        "Seabourn Venture Arctic",
        "Seabourn Venture destinations",
        "Seabourn Venture amenities",
        "Seabourn Venture deck plan",
        "Seabourn Venture itinerary",
        "Seabourn Venture ship guide"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#ship"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Cruises", "item": "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Ships", "item": "https://www.tripsandships.com/seabourn-cruises/ships/" },
        { "@type": "ListItem", "position": 4, "name": "Seabourn Venture", "item": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/" }
      ]
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#ship",
      "name": "Seabourn Venture",
      "description":
        "A purpose-built luxury expedition ship designed for remote destinations, including Antarctica and Arctic regions, combining expedition capabilities with Seabourn's all-suite luxury experience.",
      "url": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/",
      "brand": { "@type": "Brand", "name": "Seabourn" },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Ship Type", "value": "Luxury expedition ship" },
        { "@type": "PropertyValue", "name": "Guest Capacity", "value": "Approximately 264 guests" },
        { "@type": "PropertyValue", "name": "Entered Service", "value": "2022" },
        { "@type": "PropertyValue", "name": "Polar Class", "value": "PC6" },
        { "@type": "PropertyValue", "name": "Length", "value": "Approximately 557 feet" },
        { "@type": "PropertyValue", "name": "Width", "value": "Approximately 78 feet" },
        { "@type": "PropertyValue", "name": "Zodiacs", "value": "24" },
        { "@type": "PropertyValue", "name": "Expedition Team", "value": "Up to 19 members" },
        { "@type": "PropertyValue", "name": "Kayaks", "value": "Available for expedition activities" },
        { "@type": "PropertyValue", "name": "Submarine", "value": "Available for selected expedition experiences" },
        { "@type": "PropertyValue", "name": "Primary Purpose", "value": "Luxury expedition cruising" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#features",
      "name": "Seabourn Venture Expedition Features",
      "description": "Key expedition capabilities and onboard features of Seabourn Venture.",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Zodiacs", "description": "Seabourn Venture carries 24 Zodiacs for shore landings, wildlife viewing, scenic cruising and coastal exploration." },
        { "@type": "ListItem", "position": 2, "name": "Kayaking", "description": "Kayaking provides opportunities to explore coastlines, ice, wildlife habitats, remote islands and sheltered bays on applicable expedition voyages." },
        { "@type": "ListItem", "position": 3, "name": "Submarine", "description": "Seabourn Venture has submarine capability for selected underwater exploration experiences, subject to availability and operating conditions." },
        { "@type": "ListItem", "position": 4, "name": "Expedition Team", "description": "A dedicated expedition team provides destination interpretation, lectures, guidance and support throughout the voyage." },
        { "@type": "ListItem", "position": 5, "name": "Polar Capability", "description": "Seabourn Venture has a PC6 Polar Class rating supporting operation in appropriate polar environments." },
        { "@type": "ListItem", "position": 6, "name": "All-Suite Accommodations", "description": "Seabourn Venture offers an all-suite luxury accommodation experience with multiple suite categories." },
        { "@type": "ListItem", "position": 7, "name": "Luxury Dining", "description": "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining." },
        { "@type": "ListItem", "position": 8, "name": "Remote Destinations", "description": "Seabourn Venture is designed for expedition destinations including Antarctica, the Arctic, Greenland, Iceland and remote coastal regions." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#faq",
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

const SeabournVentureGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Seabourn Venture: Ship Guide, Suites & Expeditions</title>
        <meta name="title" content="Seabourn Venture Ship Guide: Suites, Zodiacs & Submarine" />
        <meta
          name="description"
          content="Explore Seabourn Venture, including suites, dining, Zodiacs, submarines, expedition capabilities, onboard amenities and destinations."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText="Explore Venture Details"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. AT A GLANCE TABLE ── */}
      <ComparisonTable
        data={data.glanceTable}
      />

      {/* ── 3. EDITORIAL INTRO: WHAT IS VENTURE & HOW IT DIFFERS ── */}
      <EditorialIntroSection
        eyebrow={data.editorialIntro.eyebrow}
        heading={data.editorialIntro.heading}
        paragraphs={data.editorialIntro.paragraphs}
        placeholderLabel={data.editorialIntro.placeholderLabel}
        badgeTitle={data.editorialIntro.badgeTitle}
        badgeDescription={data.editorialIntro.badgeDescription}
        highlights={data.editorialIntro.highlights}
      />

      {/* ── 4. EXPEDITION CAPABILITIES (5 CARDS) ── */}
      <div className="py-8 bg-white">
        <CardGrid
          title="Seabourn Venture's Expedition Capabilities"
          subtitle="Designed so remote destinations are actively experienced rather than merely viewed from afar."
          cards={data.capabilitiesCards}
          columns={3}
        />
      </div>

      {/* ── CTA 1: MID-PAGE EXPEDITION PLANNING ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        theme="dark"
      />

      {/* ── 5. ZODIACS & SUBMARINE EXPLORATION ── */}
      <GenericChecklistCards
        title={data.zodiacsAndSubmarine.title}
        subtitle={data.zodiacsAndSubmarine.subtitle}
        cards={data.zodiacsAndSubmarine.cards}
      />

      {/* ── 6. KAYAKING & EXPEDITION TEAM ENRICHMENT ── */}
      <GenericChecklistCards
        title={data.kayakingAndExpeditionTeam.title}
        subtitle={data.kayakingAndExpeditionTeam.subtitle}
        cards={data.kayakingAndExpeditionTeam.cards}
      />

      {/* ── 7. SUITES & ACCOMMODATIONS ── */}
      <HighlightsSplit
        title={data.suitesSection.title}
        items={data.suitesSection.items}
      />

      {/* ── CTA 2: SUITE AVAILABILITY ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        theme="light"
      />

      {/* ── 8. DINING & CULINARY PROGRAM (5 CARDS) ── */}
      <div className="py-8 bg-white">
        <CardGrid
          title="Seabourn Venture Dining"
          subtitle="All-inclusive fine dining, fine wines, and in-suite service following exhilarating days of exploration."
          cards={data.diningCards}
          columns={3}
        />
      </div>

      {/* ── 9. DESTINATIONS (OPULENT TABBED EXPERIENCE WITH IMAGES) ── */}
      <OpulentTabbedExperience
        title={data.destinationsSection.title}
        subtitle={data.destinationsSection.subtitle}
        tabs={destinationTabs}
      />

      {/* ── 10. ONBOARD ATMOSPHERE & PACKING ESSENTIALS ── */}
      <CostValueAnalysisCards
        title={data.atmosphereAndPacking.title}
        subtitle={data.atmosphereAndPacking.subtitle}
        includedTitle={data.atmosphereAndPacking.includedTitle}
        included={data.atmosphereAndPacking.included}
        extrasTitle={data.atmosphereAndPacking.extrasTitle}
        extras={data.atmosphereAndPacking.extras}
      />

      {/* ── 11. WHO IS VENTURE BEST FOR (TRAVELER TYPES) ── */}
      <TravelerTypeGrid
        title="Who Is Seabourn Venture Best For?"
        subtitle="Venture is designed for discerning travelers seeking active adventure paired with all-suite luxury."
        items={data.travelerTypes}
      />

      {/* ── 12. VENTURE VS TRADITIONAL SEABOURN SHIPS TABLE ── */}
      <ComparisonTable
        data={data.shipComparisonTable}
      />

      {/* ── 13. VENTURE VS OTHER EXPEDITION SHIPS (BRAND SHOWCASE) ── */}
      <BrandShowcase
        brand={data.ventureVsOthersBrand}
        index={0}
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

      {/* ── 15. WHO SHOULD SAIL VS WHO SHOULD NOT CHOOSE ── */}
      <ProsConsCards
        title={data.whoShouldSailProsCons.title}
        prosTitle={data.whoShouldSailProsCons.prosTitle}
        consTitle={data.whoShouldSailProsCons.consTitle}
        bestFor={data.whoShouldSailProsCons.bestFor}
        notBestFor={data.whoShouldSailProsCons.notBestFor}
        bottomNote={data.whoShouldSailProsCons.bottomNote}
        bgClass="bg-slate-50"
      />

      {/* ── 16. TIPS FOR BOOKING SEABOURN VENTURE (6 STEPS) ── */}
      <StepByStepGuide
        title="Tips for Booking Seabourn Venture"
        subtitle="BEFORE YOU BOOK"
        steps={data.bookingTips}
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
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking Seabourn Venture.",
            items: data.faqs
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
        theme="light"
      />
    </div>
  );
};

export default SeabournVentureGuide;