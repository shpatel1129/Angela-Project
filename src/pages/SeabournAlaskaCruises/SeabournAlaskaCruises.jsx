import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSplit from "../../components/ui/EditorialIntroSplit";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import BentoGlassmorphismGrid from "../../components/ui/BentoGlassmorphismGrid";
import CuratedComforts from "../../components/ui/CuratedComforts";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import CardGrid from "../../components/ui/CardGrid";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

// Optional Image imports (commented out per requirements)
// import HeroImage from "../../assets/SeabournAlaskaCruises/hero.jpg";
// import EncoreImage from "../../assets/SeabournAlaskaCruises/encore.jpg";
// import GlacierBayImage from "../../assets/SeabournAlaskaCruises/glacier-bay.jpg";
// import VenturesImage from "../../assets/SeabournAlaskaCruises/ventures.jpg";
// import WildlifeImage from "../../assets/SeabournAlaskaCruises/wildlife.jpg";
// import DenaliImage from "../../assets/SeabournAlaskaCruises/denali.jpg";

const SeabournAlaskaCruises = () => {
  // Format items for LuxuryZigZagShowcase (Glacier Viewing, Inside Passage, Wildlife)
  const zigZagItems = [
    {
      title: data.glacierViewing.title,
      subtitle: data.glacierViewing.eyebrow,
      description: `${data.glacierViewing.lead}\n\n${data.glacierViewing.destinationsTitle}\n• ${data.glacierViewing.destinations.join("\n• ")}\n\n${data.glacierViewing.programQuote}`,
      placeholderLabel: "SEABOURN GLACIER VIEWING & MAJESTIC FJORDS"
    },
    {
      title: data.insidePassage.title,
      subtitle: data.insidePassage.eyebrow,
      description: `${data.insidePassage.lead}\n\n${data.insidePassage.elementsTitle}\n• ${data.insidePassage.elements.join("\n• ")}\n\n${data.insidePassage.conclusion}`,
      placeholderLabel: "INSIDE PASSAGE & NARROW WATERWAYS"
    },
    {
      title: data.wildlifeViewing.title,
      subtitle: data.wildlifeViewing.eyebrow,
      description: `${data.wildlifeViewing.lead}\n\n${data.wildlifeViewing.speciesTitle}\n• ${data.wildlifeViewing.species.join("\n• ")}\n\n${data.wildlifeViewing.interpretation}`,
      placeholderLabel: "ALASKAN WILDLIFE & EXPEDITION INTERPRETATION"
    }
  ];

  // Format personas for TravelerPersonaCards
  const personaCards = [
    {
      title: data.travelerProfiles.couples.title,
      description: data.travelerProfiles.couples.description,
      icon: "Heart",
      traits: data.travelerProfiles.couples.points
    },
    {
      title: data.travelerProfiles.families.title,
      description: data.travelerProfiles.families.description,
      icon: "Landmark",
      traits: [
        ...data.travelerProfiles.families.activePoints.map(p => `Active: ${p}`),
        ...data.travelerProfiles.families.relaxedPoints.map(p => `Relaxed: ${p}`)
      ]
    },
    {
      title: data.travelerProfiles.firstTimers.title,
      description: data.travelerProfiles.firstTimers.description,
      icon: "Camera",
      traits: data.travelerProfiles.firstTimers.points
    }
  ];

  // Format Inclusions for CostValueAnalysisCards
  const includedItemsFormatted = data.inclusions.includedItems.map(item => ({
    title: item,
    description: "Complimentary luxury amenity included as standard on your Seabourn Alaska voyage."
  }));

  const extraItemsFormatted = data.inclusions.additionalItems.map(item => ({
    title: item,
    description: "Optional personalized add-on or specialty experience available during your voyage."
  }));

  // Format Month Spotlights
  const monthCards = data.seasonality.monthHighlights.map(item => ({
    title: item.month,
    description: item.text
  }));

  // Format Advisor planning checklist
  const advisorCards = [
    {
      title: data.advisorPlanning.advisorItemsTitle,
      items: data.advisorPlanning.advisorItems
    },
    {
      title: data.advisorPlanning.tripsAndShipsItemsTitle,
      items: data.advisorPlanning.tripsAndShipsItems
    }
  ];

  // Format Ports & Excursions checklist
  const portAndExcursionCards = [
    {
      title: data.popularPorts.title,
      items: [
        ...data.popularPorts.ports,
        `Special Note: ${data.popularPorts.programNote}`
      ]
    },
    {
      title: data.excursions.title,
      items: [
        ...data.excursions.types,
        `Booking Advice: ${data.excursions.bookingTip}`
      ]
    }
  ];

  // Format Priority Selection Cards
  const priorityCards = data.howToChooseBest.priorities.map(p => ({
    title: p.title,
    description: p.description
  }));

  // Format Itinerary themes cards
  const itineraryThemeCards = data.itineraries.themes.map(t => ({
    title: t.title,
    description: t.description
  }));

  // Format Luxury comparison factors cards
  const luxuryFactorCards = data.luxuryComparison.factors.map(f => ({
    title: f.title,
    description: f.description
  }));

  // Format Ventures activities for HighlightsSplit
  const venturesSplitItems = data.venturesBySeabourn.activities.map((act) => ({
    title: act,
    description: `${act} guided by Seabourn's Expedition Team specialists. ${data.venturesBySeabourn.teamExpertise}`,
    icon: "Compass",
    bulletPoints: [
      "Small-group immersive wilderness access",
      "Specialist expedition equipment provided",
      "Interpretative insights from naturalists & scientists"
    ]
  }));

  // Format Denali overland items for BentoGlassmorphismGrid
  const denaliBentoItems = [
    {
      title: "The Denali Experience",
      description: `${data.denaliExperience.lead} ${data.denaliExperience.description}`,
      tag: "Pre-Cruise Land Program"
    },
    {
      title: "Denali National Park & Preserve",
      description: "Explore the vast wilderness surrounding North America's tallest peak with dedicated guides.",
      tag: "National Park Highlight"
    },
    {
      title: "Scenic Rail Travel",
      description: "Travel through Alaska's rugged interior via luxury scenic rail cars with panoramic dome windows.",
      tag: "Interior Transit"
    },
    {
      title: "Flightseeing & Glacier Landings",
      description: `${data.denaliExperience.takeaway} Includes breathtaking aerial views and remote wilderness landings.`,
      tag: "Wilderness Flightseeing"
    }
  ];

  // Format Cruise Length Curated Comforts Bento
  const cruiseLengthData = {
    title: data.cruiseLength.title,
    subtitle: data.cruiseLength.lead,
    items: data.cruiseLength.longerReasons.map((reason) => ({
      title: reason,
      description: `Essential consideration when choosing a comprehensive 14-day combination voyage versus a 7-day introduction. ${data.cruiseLength.note}`
    }))
  };

  // Format Worth It reasons for ValuePropositionHighlight
  const worthItItems = data.isWorthIt.reasons.map((r) => ({
    title: r,
    description: "True ultra-luxury value combining intimate ship access, all-suite service, and uncompromised destination immersion.",
    icon: "CheckCircle",
    impact: "Included Luxury"
  }));

  return (
    <div className="w-full bg-white font-sans text-navy-900 antialiased">
      {/* ── SEO / Meta Tags ────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl || "https://www.tripsandships.com/seabourn-cruises/alaska/"} />
        <script type="application/ld+json">
          {JSON.stringify(data.schemaData)}
        </script>
      </Helmet>

      {/* ── Navigation ────────────────────────────────────────────── */}
      <Nav />

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <div id="content">
        <ComparisonHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          badge={data.hero.badge}
          // backgroundImage={HeroImage}
          secondaryCtaText={data.hero.ctaText}
          secondaryCtaLink={data.hero.ctaLink}
        />
      </div>

      {/* ── 2. Quick Answer: Is Seabourn Good for Alaska? ─────────── */}
      <EditorialIntroSection
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        description={`${data.quickAnswer.intro}\n\n${data.quickAnswer.conclusion}`}
        highlights={data.quickAnswer.highlights}
        placeholderLabel={data.quickAnswer.placeholderLabel}
        badgeTitle={data.quickAnswer.badgeTitle}
        badgeDescription={data.quickAnswer.badgeDescription}
        // image={GlacierBayImage}
      />

      {/* ── 3. Quick Answer Matrix Table ──────────────────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Why Seabourn Is Good for Alaska (Asymmetric Story Intro) ── */}
      <AsymmetricStoryIntro
        eyebrow={data.whySeabournIsGood.eyebrow}
        heading={data.whySeabournIsGood.title}
        paragraphs={[data.whySeabournIsGood.description]}
        highlights={data.whySeabournIsGood.advantages}
        image1Placeholder="SEABOURN SMALL SHIP SCENIC ALASKA ACCESS"
        image2Placeholder="LUXURY SUITE HOSPITALITY"
        ctaText="Plan With Seabourn Specialists"
        ctaLink="/contact"
        // image1={HeroImage}
      />

      {/* ── 5. Seabourn Encore in Alaska (Editorial Intro Split) ──── */}
      <EditorialIntroSplit
        eyebrow={data.encoreInAlaska.eyebrow}
        heading={data.encoreInAlaska.title}
        paragraphs={[data.encoreInAlaska.lead, ...data.encoreInAlaska.paragraphs]}
        // primaryImage={EncoreImage}
      />

      {/* ── 6. What Is Seabourn Alaska Like? (Scenic, Wildlife, Glaciers) */}
      <ThreeColumnGrid
        title={data.whatIsAlaskaLike.title}
        subtitle={data.whatIsAlaskaLike.subtitle}
        items={data.whatIsAlaskaLike.items}
      />

      {/* ── 7. Does Seabourn Go to Glacier Bay? (Editorial Feature Showcase) ── */}
      <EditorialFeatureShowcase
        title={data.glacierBaySection.title}
        subtitle={`${data.glacierBaySection.intro} ${data.glacierBaySection.advice}`}
        features={data.glacierBaySection.checklist.map((item) => ({
          title: item,
          description: "Essential route landmark to identify when booking pristine glacial fjord itineraries."
        }))}
        // image={GlacierBayImage}
      />

      {/* ── 8. Seabourn Alaska Itineraries ─────────────────────────── */}
      <CardGrid
        title={data.itineraries.title}
        subtitle={data.itineraries.subtitle}
        cards={itineraryThemeCards}
      />

      {/* ── 9. Popular Seabourn Alaska Ports & Excursions ─────────── */}
      <GenericChecklistCards
        title="Popular Alaska Ports & Excursions"
        subtitle="DESTINATION IMMERSION & ADVENTURE"
        cards={portAndExcursionCards}
      />

      {/* ── 10. What Are Ventures by Seabourn? (Highlights Split) ──── */}
      <HighlightsSplit
        title={data.venturesBySeabourn.title}
        items={venturesSplitItems}
      />

      {/* ── 11. Seabourn Ventures vs. Regular Shore Excursions Table ─ */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.venturesComparisonTable} />
        {data.venturesComparisonTable.note && (
          <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-12">
            <div className="p-4 bg-ice-50 border-l-4 border-navy-800 rounded-r-xl text-sm text-slate-700 leading-relaxed">
              <strong>Ventures Availability Note:</strong> {data.venturesComparisonTable.note}
            </div>
          </div>
        )}
      </div>

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Experience Alaska with Ultra-Luxury Precision"
        description="Connect with Angela Hughes and the Trips & Ships team to secure your preferred Seabourn Encore suite and Glacier Bay itinerary."
        buttonText="Plan Your Alaska Journey"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ── 12. Wildlife, Glaciers & Inside Passage Zig-Zag Showcase ─ */}
      <LuxuryZigZagShowcase
        title="Glaciers, Wildlife & The Inside Passage"
        subtitle="Explore Alaska's majestic wilderness from narrow fjords to active marine habitats with Seabourn's expedition naturalists."
        items={zigZagItems}
      />

      {/* ── 13. Traveler Personas (Couples, Families, First-Timers) ── */}
      <TravelerPersonaCards
        title="Who Sails Seabourn to Alaska?"
        subtitle="TRAVELER PROFILES & LIFESTYLE FIT"
        personas={personaCards}
      />

      {/* ── 14. Inclusions vs Potential Additional Costs ──────────── */}
      <CostValueAnalysisCards
        title={data.inclusions.title}
        subtitle={data.inclusions.subtitle}
        includedTitle={data.inclusions.includedTitle}
        extrasTitle={data.inclusions.additionalTitle}
        included={includedItemsFormatted}
        extras={extraItemsFormatted}
      />

      {/* ── 15. Seabourn Alaska vs. Large Cruise Ships Table ──────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.shipComparisonTable} />
      </div>

      {/* ── 16. Seabourn vs. Other Luxury Alaska Cruises ──────────── */}
      <CardGrid
        title={data.luxuryComparison.title}
        subtitle={data.luxuryComparison.subtitle}
        cards={luxuryFactorCards}
        columns={3}
      />

      {/* ── 17. The Denali Experience Pre-Cruise Land Program (Bento Glassmorphism) ── */}
      <BentoGlassmorphismGrid
        title={data.denaliExperience.title}
        subtitle={data.denaliExperience.eyebrow}
        bentoItems={denaliBentoItems}
      />

      {/* ── 18. Seasonality & Best Time to Go ─────────────────────── */}
      <div className="bg-slate-50 py-8">
        <ComparisonTable
          data={{
            title: data.seasonality.title,
            headers: data.seasonality.tableHeaders,
            rows: data.seasonality.tableRows
          }}
        />
        {data.seasonality.seasonNote && (
          <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-12">
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 leading-relaxed shadow-sm">
              <strong>Seasonal Perspective:</strong> {data.seasonality.seasonNote}
            </div>
          </div>
        )}
      </div>

      {/* ── 19. Month Spotlights (June, July, September) ───────────── */}
      <CardGrid
        title="Alaska Month Spotlights: June, July & September"
        subtitle="UNDERSTANDING SEASONAL HIGHLIGHTS"
        cards={monthCards}
        columns={3}
      />

      {/* ── 20. Cruise Length Considerations (Curated Comforts Bento) ─ */}
      <CuratedComforts
        data={cruiseLengthData}
      />

      {/* ── 21. Step-by-Step Itinerary Selection Guide ─────────────── */}
      <StepByStepGuide
        title={data.selectionGuide.title}
        subtitle={data.selectionGuide.subtitle}
        steps={data.selectionGuide.steps}
      />

      {/* ── 22. Who Is Seabourn Alaska Best For vs Prefer Different ─ */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.pros}
        notBestFor={data.prosCons.cons}
        bottomNote={data.prosCons.consNote}
        type="pros-cons"
        bgClass="bg-slate-50"
      />

      {/* ── 23. Is Seabourn Worth It for Alaska? (Value Proposition Highlight) ── */}
      <ValuePropositionHighlight
        title={data.isWorthIt.title}
        subtitle={data.isWorthIt.description}
        items={worthItItems}
        imageOverlayText="Small-Ship Access & Ultra-Luxury Value"
      />

      {/* ── 24. How to Choose the Best Seabourn Alaska Cruise ──────── */}
      <CardGrid
        title={data.howToChooseBest.title}
        subtitle={data.howToChooseBest.subtitle}
        cards={priorityCards}
      />

      {/* ── 25. Planning with an Advisor & Trips & Ships ──────────── */}
      <GenericChecklistCards
        title={data.advisorPlanning.title}
        subtitle="SEAMLESS LOGISTICS & VIP AMENITIES"
        cards={advisorCards}
      />

      {/* ── 26. Angela Hughes Authority & Credentials ─────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="LUXURY ALASKA & CRUISE EXPERT"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Work With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury travel planning and extensive destination knowledge, Angela Hughes provides unmatched insight into small-ship Alaska itineraries and land journeys."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 27. Frequently Asked Questions ────────────────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faqs} />
      </div>

      {/* ── 28. Final Takeaway & Verdict ──────────────────────────── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalTakeaway.title,
            paragraphs: [
              data.finalTakeaway.description,
              data.finalTakeaway.closing
            ]
          }
        ]}
      />

      {/* ── 29. Bottom CTA ────────────────────────────────────────── */}
      <CenterCTA
        title="Ready to Plan Your Seabourn Alaska Journey?"
        description="Contact our luxury cruise specialists today to access exclusive Seabourn amenities, select staterooms, and custom Denali land extensions."
        buttonText={data.finalTakeaway.ctaText}
        buttonLink={data.finalTakeaway.ctaLink}
        theme="dark"
      />
    </div>
  );
};

export default SeabournAlaskaCruises;