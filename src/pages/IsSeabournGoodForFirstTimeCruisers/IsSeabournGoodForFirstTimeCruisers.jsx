import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import EditorialIntroSplit from "../../components/ui/EditorialIntroSplit";
import RomanticMilestoneShowcase from "../../components/ui/RomanticMilestoneShowcase";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import CuratedComforts from "../../components/ui/CuratedComforts";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import ExpeditionHighlight from "../../components/ui/ExpeditionHighlight";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import CardGrid from "../../components/ui/CardGrid";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import ProsConsCards from "../../components/ui/ProsConsCards";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

// Expedition Image
import ExpeditionShipImage from "../../assets/SeabournCruises/seabourn-venture-polar-luxury-expedition-ship.jpg";

// Optional Destination Tab Images (commented out per requirements)
// import MedDestImage from "../../assets/SeabournCruises/seabourn-mediterranean-cruise-amalfi-coast-italy.jpg";
// import CaribDestImage from "../../assets/SeabournCruises/seabourn-ocean-cruises-luxury-yacht-experience.jpg";
// import AlaskaDestImage from "../../assets/SeabournCruises/seabourn-alaska-inside-passage-glacier-wilderness-cruise.jpeg";
// import NorthEuropeDestImage from "../../assets/SeabournCruises/seabourn-northern-europe-scandinavia-baltic-cruise.jpg";
// import AntarcticaDestImage from "../../assets/SeabournCruises/seabourn-antarctica-luxury-polar-expedition-cruise.webp";

const IsSeabournGoodForFirstTimeCruisers = () => {
  // 1. Format Inclusions vs Extras for CostValueAnalysisCards
  const includedItemsFormatted = data.detailedInclusions.includedItems.map((item) => ({
    title: item,
    description: "Complimentary luxury amenity included as standard on your Seabourn voyage."
  }));

  const extrasItemsFormatted = data.detailedInclusions.extrasItems.map((item) => ({
    title: item,
    description: "Optional personalized service or bespoke arrangement available upon request."
  }));

  // 2. Format Scale & Vibe Bento data for CuratedComforts (requires 5 items)
  const scaleAndVibeData = {
    title: data.scaleAndVibe.title,
    subtitle: data.scaleAndVibe.subtitle,
    items: [
      {
        title: data.scaleAndVibe.scaleTitle,
        description: data.scaleAndVibe.scaleDescription
      },
      {
        title: data.scaleAndVibe.boredTitle,
        description: data.scaleAndVibe.boredDescription
      },
      {
        title: data.scaleAndVibe.designedForTitle,
        description: data.scaleAndVibe.designedFor.join(" • ")
      },
      {
        title: data.scaleAndVibe.notDesignedForTitle,
        description: data.scaleAndVibe.notDesignedFor.join(" • ")
      },
      {
        title: "The Luxury Yacht Difference",
        description: "An intimate, uncrowded environment where relaxation, fine dining, and personal space define your entire journey."
      }
    ]
  };

  // 3. Format Couples & Romantic Milestones for RomanticMilestoneShowcase
  const romanticShowcaseData = {
    title: data.couplesFirstCruiseSection.title,
    subtitle: `${data.couplesFirstCruiseSection.intro} — INTIMATE LUXURY, PRIVACY & ROMANTIC DESTINATIONS`,
    items: [
      {
        year: "Why It Works",
        title: "Suited for Couples",
        recommendation: "Luxury, Privacy & Fine Dining",
        description: `${data.couplesFirstCruiseSection.suitedTitle} ${data.couplesFirstCruiseSection.suitedItems.join(", ")}.`,
        why: data.couplesFirstCruiseSection.hotelNote
      },
      {
        year: "Occasion 01",
        title: "Honeymoons",
        recommendation: "Private Veranda Suites & In-Suite Champagne",
        description: "Celebrate your honeymoon with private ocean-view verandas, 24-hour in-suite dining, and intimate candlelit dinners with open seating.",
        why: "Ideal for couples seeking romance, privacy, and scenic sailing without crowded mega-ship distractions."
      },
      {
        year: "Occasion 02",
        title: "Anniversaries",
        recommendation: "Milestone Romance in Secluded Ports",
        description: "Mark milestone anniversaries sailing into hidden harbors, romantic European ports, or secluded Caribbean coves aboard an intimate luxury yacht.",
        why: "Intuitive personalized service and thoughtful touches make every anniversary effortless and unforgettable."
      },
      {
        year: "Occasion 03",
        title: "Milestone Birthdays",
        recommendation: "Curated Celebrations & Special Moments",
        description: "Celebrate milestone birthdays with bespoke shore excursions, fine wines, and custom culinary menus created for your celebration.",
        why: "Relaxed pacing allows you to celebrate at your own rhythm without rigid schedules."
      },
      {
        year: "Occasion 04",
        title: "Romantic Getaways & Multi-Country Vacations",
        recommendation: "Effortless Multi-Country Exploration",
        description: "Unpack once while waking up in a new romantic destination or historic coastal town every morning.",
        why: data.couplesFirstCruiseSection.hotelNote
      }
    ]
  };

  // 3. Format Traveler Personas for TravelerPersonaCards
  const personaCards = [
    {
      title: data.travelerTypes.couples.title,
      description: data.travelerTypes.couples.description,
      icon: "Heart",
      traits: data.travelerTypes.couples.honeymoonConsiderations
    },
    {
      title: data.travelerTypes.solo.title,
      description: data.travelerTypes.solo.description,
      icon: "Gem",
      traits: [
        "Private suite accommodations",
        "Open-seating dining with optional hosted tables",
        "Enrichment lectures & shore excursions",
        "Reduced solo supplement opportunities"
      ]
    },
    {
      title: data.travelerTypes.families.title,
      description: data.travelerTypes.families.description,
      icon: "Landmark",
      traits: [
        "Quiet, sophisticated family atmosphere",
        "Multi-generational suite configurations",
        "Cultural shore excursions & wildlife",
        "No loud mega-ship waterparks"
      ]
    },
    {
      title: data.travelerTypes.older.title,
      description: data.travelerTypes.older.description,
      icon: "Camera",
      traits: [
        "Elevated comfort & intuitive service",
        "Fine dining at your own schedule",
        "Relaxed pacing & gentle sea transit",
        "Excursion accessibility tailored to mobility"
      ]
    }
  ];

  // 4. Format Ocean vs Expedition for HighlightsSplit
  const fleetItems = [
    {
      title: data.fleetAndExpedition.oceanTitle,
      description: `${data.fleetAndExpedition.oceanBestFor}\n\n${data.fleetAndExpedition.expeditionAdvice}`,
      icon: "Ship",
      bulletPoints: data.fleetAndExpedition.oceanFeatures
    },
    {
      title: data.fleetAndExpedition.expeditionTitle,
      description: `${data.fleetAndExpedition.expeditionBestFor}\n\n${data.fleetAndExpedition.expeditionAdvice}`,
      icon: "Compass",
      bulletPoints: data.fleetAndExpedition.expeditionFeatures
    }
  ];

  // 5. Format Suite & Dining Pillars for ValuePropositionHighlight
  const diningAndSuiteItems = [
    ...data.suiteGuide.features.map((feat) => ({
      title: feat,
      description: "Standard in-suite indulgence designed for seamless transition from luxury hotels.",
      icon: "CheckCircle",
      impact: "All-Suite Living"
    })),
    {
      title: data.diningExperience.sharedDiningQuestion,
      description: data.diningExperience.sharedDiningAnswer,
      icon: "Utensils",
      impact: "Open Seating"
    }
  ];

  // 6. Format Seasickness, Crowds & Non-Cruisers for ThreeColumnGrid
  const threePillars = [
    {
      title: data.seasicknessAndCrowds.seasicknessTitle,
      description: data.seasicknessAndCrowds.seasicknessDesc
    },
    {
      title: data.seasicknessAndCrowds.crowdsTitle,
      description: data.seasicknessAndCrowds.crowdsDesc
    },
    {
      title: data.seasicknessAndCrowds.nonCruisersTitle,
      description: data.seasicknessAndCrowds.nonCruisersDesc
    }
  ];

  // 7. Format Itinerary Durations for CardGrid
  const durationAndDestinationCards = [
    ...data.itineraryAndLength.durations.map((d) => ({
      title: `Duration: ${d.duration}`,
      description: d.description
    })),
  ];

  // 8. Format Best Destinations Tabs for TravelerProfileTabs
  const destinationTabs = data.bestDestinations.destinations.map((dest) => ({
    name: dest.name,
    tagline: dest.tagline,
    quote: dest.quote,
    recommendation: dest.recommendation,
    reason: dest.reason,
    whyFits: dest.whyFits,
    placeholderLabel: `SEABOURN ${dest.name.toUpperCase()} CRUISE`,
    // image: dest.name === "Mediterranean" ? MedDestImage : dest.name === "Caribbean" ? CaribDestImage : dest.name === "Alaska" ? AlaskaDestImage : dest.name === "Northern Europe" ? NorthEuropeDestImage : AntarcticaDestImage
  }));

  // 9. Format Competitor Factors for CardGrid
  const competitorFactorCards = data.luxuryCompetitors.factors.map((f) => ({
    title: f.title,
    description: f.description
  }));

  // 9. Format Cost, Packing & Questions for GenericChecklistCards
  const costAndPackingCards = [
    {
      title: data.costAndPacking.packingTitle,
      items: data.costAndPacking.packingItems
    },
    {
      title: data.advisorValue.planningItemsTitle,
      items: [
        data.costAndPacking.costDescription,
        ...data.advisorValue.planningItems
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-navy-900 antialiased">
      {/* ── SEO / Meta Tags ────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl || "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-first-time-cruisers/"} />
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

      {/* ── 2. Quick Answer: Is Seabourn Good for First-Time Cruisers? ── */}
      <EditorialIntroSection
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        description={`${data.quickAnswer.intro}\n\n${data.quickAnswer.conclusion}`}
        highlights={data.quickAnswer.highlights}
        placeholderLabel={data.quickAnswer.placeholderLabel}
        badgeTitle={data.quickAnswer.badgeTitle}
        badgeDescription={data.quickAnswer.badgeDescription}
        // image={ShipImage}
      />

      {/* ── 3. Quick Answer Matrix Table ──────────────────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Why Seabourn Can Be Good (Asymmetric Story Intro) ───── */}
      <AsymmetricStoryIntro
        eyebrow={data.whySeabournCanBeGood.eyebrow}
        heading={data.whySeabournCanBeGood.title}
        paragraphs={[data.whySeabournCanBeGood.description]}
        highlights={data.whySeabournCanBeGood.concerns}
        image1Placeholder="SEABOURN INTIMATE SHIP ENVIRONMENT"
        image2Placeholder="LUXURY SUITE & DINING RETREAT"
        ctaText="Plan With First-Time Cruise Specialists"
        ctaLink="/contact"
        // image1={SuiteImage}
      />

      {/* ── 5. What Is Seabourn Like for a First-Timer? (Editorial Feature Showcase) ── */}
      <EditorialFeatureShowcase
        title={data.whatIsItLike.title}
        subtitle={`${data.whatIsItLike.intro} ${data.whatIsItLike.subIntro}`}
        features={data.whatIsItLike.activities.map((act) => ({
          title: act,
          description: "A flexible, self-paced onboard experience designed entirely around your personal vacation interests."
        }))}
        // image={DiningImage}
      />

      {/* ── 6. Is Seabourn Too Formal? (Editorial Intro Split) ─────── */}
      <EditorialIntroSplit
        eyebrow={data.formalitySection.eyebrow}
        heading={data.formalitySection.title}
        paragraphs={[data.formalitySection.lead, ...data.formalitySection.paragraphs]}
      />

      {/* ── 7. Inclusions vs Potential Additional Expenses ────────── */}
      <CostValueAnalysisCards
        title={data.detailedInclusions.title}
        subtitle={data.detailedInclusions.subtitle}
        includedTitle={data.detailedInclusions.includedTitle}
        extrasTitle={data.detailedInclusions.extrasTitle}
        included={includedItemsFormatted}
        extras={extrasItemsFormatted}
      />

      {/* ── 8. Is Seabourn Good for Couples Taking Their First Cruise? (Romantic Milestone Showcase) ── */}
      <RomanticMilestoneShowcase data={romanticShowcaseData} />

      {/* ── 9. Are Ships Too Small or Will You Get Bored? (Curated Comforts Bento) ── */}
      <CuratedComforts data={scaleAndVibeData} />

      {/* ── 9. Traveler Personas (Couples, Solo, Families, Mature) ── */}
      <TravelerPersonaCards
        title="Who Sails Seabourn for Their First Cruise?"
        subtitle="TRAVELER PROFILES & LIFESTYLE FIT"
        personas={personaCards}
      />

      {/* ── 10. Ocean Ships vs Expedition Ships (Highlights Split) ─── */}
      <HighlightsSplit
        title={data.fleetAndExpedition.title}
        items={fleetItems}
      />

      {/* ── 11. Should a First-Time Cruiser Choose an Expedition Cruise? (ExpeditionHighlight) ─── */}
      <ExpeditionHighlight
        title={data.shouldChooseExpedition.title}
        subtitle={data.shouldChooseExpedition.subtitle}
        content={[
          data.shouldChooseExpedition.lead,
          `${data.shouldChooseExpedition.intro} destination-first encounters than traditional cruise amenities.`,
          data.shouldChooseExpedition.conclusion
        ]}
        features={data.shouldChooseExpedition.priorities}
        image={ExpeditionShipImage}
      />

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Embark on Your First Luxury Cruise With Total Confidence"
        description="Speak directly with Angela Hughes and the Trips & Ships team to select the ideal Seabourn ship, suite location, and beginner-friendly itinerary."
        buttonText="Plan Your First Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ── 11. Dining Excellence & All-Suite Living (Value Proposition Highlight) ── */}
      <ValuePropositionHighlight
        title="Dining Excellence & All-Suite Living"
        subtitle="Enjoy open-seating gourmet restaurants and spacious suite retreats with walk-in closets, marble tubs, and private verandas."
        items={diningAndSuiteItems}
        imageOverlayText="All-Suite Luxury & Flexible Gourmet Dining"
      />

      {/* ── 12. Seasickness, Crowds & Non-Cruisers (Three Column Grid) ── */}
      <ThreeColumnGrid
        title={data.seasicknessAndCrowds.title}
        subtitle={data.seasicknessAndCrowds.subtitle}
        items={threePillars}
      />

      {/* ── 13. Is Seabourn Easy? Step-by-Step Preparation ─────────── */}
      <StepByStepGuide
        title={data.easeAndPreparation.title}
        subtitle={data.easeAndPreparation.earlyArrivalTip}
        steps={data.easeAndPreparation.phases}
      />

      {/* ── 14. Voyage Length Options ─────────────────────────────── */}
      <CardGrid
        title={data.itineraryAndLength.title}
        subtitle={data.itineraryAndLength.subtitle}
        cards={durationAndDestinationCards}
        columns={3}
      />

      {/* ── 15. Which Seabourn Destination Is Best for First-Time Cruisers? (TravelerProfileTabs) ── */}
      <TravelerProfileTabs
        title={data.bestDestinations.title}
        subtitle={data.bestDestinations.subtitle}
        profiles={destinationTabs}
      />

      {/* ── 16. Seabourn vs Large Cruise Ships Table ──────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.comparisonTable} />
      </div>

      {/* ── 17. Seabourn vs Other Luxury Cruise Lines ─────────────── */}
      <CardGrid
        title={data.luxuryCompetitors.title}
        subtitle={data.luxuryCompetitors.subtitle}
        cards={competitorFactorCards}
        columns={3}
      />

      {/* ── 18. Who Should Choose Seabourn vs Prefer Another Line ─── */}
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

      {/* ── 18. How to Choose Your First Cruise (8-Step Checklist) ─── */}
      <StepByStepGuide
        title={data.stepByStepSelection.title}
        subtitle={data.stepByStepSelection.subtitle}
        steps={data.stepByStepSelection.steps}
      />

      {/* ── 19. Costs, Packing & Travel Advisor Guidance ──────────── */}
      <GenericChecklistCards
        title="Costs, Packing & Advisor Coordination"
        subtitle="COMPLETE TRIP LOGISTICS"
        cards={costAndPackingCards}
      />

      {/* ── 20. Questions to Ask Before Booking (ExpertAuthorityChecklist) ── */}
      <ExpertAuthorityChecklist
        title={data.questionsToAsk.title}
        subtitle={data.questionsToAsk.subtitle}
        points={data.questionsToAsk.questions}
      />

      {/* ── 21. Angela Hughes Authority & Credentials ─────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="FIRST-TIME LUXURY CRUISE EXPERT"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Work With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury travel planning and personal experience on all major luxury cruise lines, Angela Hughes ensures your first cruise exceeds every expectation."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 22. Frequently Asked Questions ────────────────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faqs} />
      </div>

      {/* ── 23. Final Takeaway & Verdict ──────────────────────────── */}
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

      {/* ── 24. Bottom CTA ────────────────────────────────────────── */}
      <CenterCTA
        title="Ready to Plan Your First Seabourn Luxury Cruise?"
        description="Contact our luxury cruise advisors today to access exclusive Seabourn amenities, select staterooms, and comprehensive vacation planning."
        buttonText={data.finalTakeaway.ctaText}
        buttonLink={data.finalTakeaway.ctaLink}
        theme="dark"
      />
    </div>
  );
};

export default IsSeabournGoodForFirstTimeCruisers;
