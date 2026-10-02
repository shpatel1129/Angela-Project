import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import EditorialIntroSplit from "../../../components/ui/EditorialIntroSplit";
import RomanticMilestoneShowcase from "../../../components/ui/RomanticMilestoneShowcase";
import CostValueAnalysisCards from "../../../components/ui/CostValueAnalysisCards";
import CuratedComforts from "../../../components/ui/CuratedComforts";
import TravelerPersonaCards from "../../../components/ui/TravelerPersonaCards";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import ExpeditionHighlight from "../../../components/ui/ExpeditionHighlight";
import BrandPillarsShowcase from "../../../components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import StepByStepGuide from "../../../components/ui/StepByStepGuide";
import CardGrid from "../../../components/ui/CardGrid";
import TravelerProfileTabs from "../../../components/ui/TravelerProfileTabs";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import ExpertAuthorityChecklist from "../../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Data Source
import data from "./data.json";

// Images from assets/IsSeabournGoodFirstTimeCruisers
import HeroImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/is-seabourn-good-for-first-time-cruisers-luxury-ship.jpg";
import QuickAnswerImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/seabourn-first-time-cruisers-yacht-experience.jpg";
import WhySeabourn1Image from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/why-seabourn-is-good-for-first-time-cruisers-intimate-luxury.jpg";
import WhySeabourn2Image from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/why-seabourn-is-good-for-first-time-cruisers-suite-comfort.jpg";
import WhatIsItLikeImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/what-is-seabourn-like-for-a-first-time-cruiser.jpg";
import FormalityImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/is-seabourn-too-formal-for-first-time-cruisers.jpg";
import WhatShip1Image from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/what-seabourn-ship-should-a-first-time-cruiser-choose.jpg";
import SeasickImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/will-i-get-seasick-on-seabourn-cruise.jpg";
import DislikeCrowdsImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/is-seabourn-good-for-people-who-dislike-crowds.jpg";
import DoNotLikeCruisesImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/is-seabourn-good-for-travelers-who-do-not-like-cruises.jpg";
import MedDestImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/seabourn-first-time-cruisers-mediterranean-coastal-towns.jpg";
import CaribDestImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/seabourn-first-time-cruisers-caribbean-yacht-harbors.jpg";
import AlaskaDestImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/seabourn-first-time-cruisers-alaska-glaciers.jpg";
import EuropeDestImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/seabourn-first-time-cruisers-northern-europe-fjords.jpg";
import AntarcticaDestImage from "../../../assets/Seabourn/IsSeabournGoodFirstTimeCruisers/seabourn-first-time-cruisers-antarctica-expedition.jpg";

// Ocean & Expedition Fleet Images (Distinct Images from SeabournShips)
import OceanShipImage from "../../../assets/Seabourn/SeabournShips/seabourn-ovation-ultra-luxury-sister-ship.jpg";
import FleetExpeditionShipImage from "../../../assets/Seabourn/SeabournShips/seabourn-pursuit-ultra-luxury-expedition-vessel.jpg";

// CTA Background Images (Distinct Images from SeabournCruises)
import MidPageCtaImage from "../../../assets/Seabourn/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";
import BottomCtaImage from "../../../assets/Seabourn/SeabournCruises/seabourn-ultra-luxury-yacht-ship-overview.jpg";

const IsSeabournGoodForFirstTimeCruisers = () => {
  // 1. Format Inclusions vs Extras for CostValueAnalysisCards
  const includedItemsFormatted = data.detailedInclusions.includedItems.map((item) => 
    typeof item === "object" ? item : {
      title: item,
      description: "Complimentary luxury amenity included as standard on your Seabourn voyage."
    }
  );

  const extrasItemsFormatted = data.detailedInclusions.extrasItems.map((item) => 
    typeof item === "object" ? item : {
      title: item,
      description: "Optional personalized service or bespoke arrangement available upon request."
    }
  );

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

  // 4. Format Ocean vs Expedition for ShipPhilosophyFaceoff
  const fleetShipFaceoffData = {
    title: data.fleetAndExpedition.title,
    regent: {
      badge: "Ocean Cruises",
      title: data.fleetAndExpedition.oceanTitle,
      description: `${data.fleetAndExpedition.oceanBestFor} ${data.fleetAndExpedition.expeditionAdvice}`,
      features: data.fleetAndExpedition.oceanFeatures
    },
    viking: {
      badge: "Expedition Cruises",
      title: data.fleetAndExpedition.expeditionTitle,
      description: `${data.fleetAndExpedition.expeditionBestFor} ${data.fleetAndExpedition.expeditionAdvice}`,
      features: data.fleetAndExpedition.expeditionFeatures
    }
  };

  // 5. Format Suite & Dining Pillars for BrandPillarsShowcase
  const suiteAndDiningPillarsData = {
    title: "Dining Excellence & All-Suite Living",
    subtitle: "Enjoy open-seating gourmet restaurants and spacious suite retreats with walk-in closets, marble tubs, and private verandas.",
    pillars: [
      ...data.suiteGuide.features.map((feat, idx) => ({
        title: feat,
        description: "Standard in-suite indulgence designed for seamless transition from luxury hotels.",
        icon: idx % 4 === 0 ? "window" : idx % 4 === 1 ? "star" : idx % 4 === 2 ? "ship" : "compass"
      })),
      {
        title: data.diningExperience.sharedDiningQuestion,
        description: data.diningExperience.sharedDiningAnswer,
        icon: "star"
      }
    ]
  };

  // 6. Format Seasickness, Crowds & Non-Cruisers for ThreeColumnGrid
  const threePillars = [
    {
      title: data.seasicknessAndCrowds.seasicknessTitle,
      description: data.seasicknessAndCrowds.seasicknessDesc,
      image: SeasickImage
    },
    {
      title: data.seasicknessAndCrowds.crowdsTitle,
      description: data.seasicknessAndCrowds.crowdsDesc,
      image: DislikeCrowdsImage
    },
    {
      title: data.seasicknessAndCrowds.nonCruisersTitle,
      description: data.seasicknessAndCrowds.nonCruisersDesc,
      image: DoNotLikeCruisesImage
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
    image: dest.name === "Mediterranean" ? MedDestImage : dest.name === "Caribbean" ? CaribDestImage : dest.name === "Alaska" ? AlaskaDestImage : dest.name === "Northern Europe" ? EuropeDestImage : AntarcticaDestImage
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

  // 10. Video Section Data
  const videoSectionData = {
    youtubeId: "2wTfN2K_NNc",
    title: "Watch: Is Seabourn Right for Your First Luxury Cruise?",
    description: "Explore an inside look at Seabourn's intimate yacht-style atmosphere, all-suite oceanfront accommodations, open-seating gourmet dining, and personalized service."
  };

  return (
    <div className="w-full bg-white font-sans text-navy-900 antialiased">
      {/* ── SEO / Meta Tags ────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
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
          backgroundImage={HeroImage}
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
        image={QuickAnswerImage}
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
        image1={WhySeabourn1Image}
        image2={WhySeabourn2Image}
      />

      {/* ── 5. What Is Seabourn Like for a First-Timer? (Editorial Feature Showcase) ── */}
      <EditorialFeatureShowcase
        title={data.whatIsItLike.title}
        subtitle={`${data.whatIsItLike.intro} ${data.whatIsItLike.subIntro}`}
        features={data.whatIsItLike.activities.map((act) => ({
          title: act,
          description: "A flexible, self-paced onboard experience designed entirely around your personal vacation interests."
        }))}
        image={WhatIsItLikeImage}
      />

      {/* ── 6. Is Seabourn Too Formal? (Editorial Intro Split) ─────── */}
      <EditorialIntroSplit
        eyebrow={data.formalitySection.eyebrow}
        heading={data.formalitySection.title}
        paragraphs={[data.formalitySection.lead, ...data.formalitySection.paragraphs]}
        primaryImage={FormalityImage}
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

      {/* ── 10. Ocean Ships vs Expedition Ships (Ship Philosophy Faceoff) ─── */}
      <ShipPhilosophyFaceoff
        data={fleetShipFaceoffData}
        regentImage={OceanShipImage}
        vikingImage={FleetExpeditionShipImage}
        regentImageAlt="Seabourn Ocean Ships"
        vikingImageAlt="Seabourn Expedition Ships"
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
        image={WhatShip1Image}
      />

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Embark on Your First Luxury Cruise With Total Confidence"
        description="Speak directly with Angela Hughes and the Trips & Ships team to select the ideal Seabourn ship, suite location, and beginner-friendly itinerary."
        buttonText="Plan Your First Cruise"
        buttonLink="/contact"
        image={MidPageCtaImage}
        theme="dark"
      />

      {/* ── First-Time Cruiser Video Guide (VideoEmbed) ──────────── */}
      <VideoEmbed data={videoSectionData} />

      {/* ── 11. Dining Excellence & All-Suite Living (Brand Pillars Showcase) ── */}
      <BrandPillarsShowcase data={suiteAndDiningPillarsData} />

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
        image={BottomCtaImage}
        theme="dark"
      />
    </div>
  );
};

export default IsSeabournGoodForFirstTimeCruisers;
