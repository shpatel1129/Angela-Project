import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// UI Components from src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FeatureGrid from "@/components/ui/FeatureGrid";
import MagazineStoryIntro from "@/components/ui/MagazineStoryIntro";
import ProsConsCards from "@/components/ui/ProsConsCards";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import IconGrid from "@/components/ui/IconGrid";
import CardGrid from "@/components/ui/CardGrid";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import DynamicCulinaryShowcase from "@/components/ui/DynamicCulinaryShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import AccordionFlexGrid from "@/components/ui/AccordionFlexGrid";
import SimplePersonaCards from "@/components/ui/SimplePersonaCards";
import CinematicDestinations from "@/components/ui/CinematicDestinations";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";
import FadeIn from "@/components/ui/FadeIn";

// 100% Unique Dedicated Assets for CelebrityFamilies
import HeroFamilyImg from "@/assets/celebritycruises/CelebrityFamilies/hero-celebrity-families.webp";
import FamilyChoiceImg from "@/assets/celebritycruises/CelebrityFamilies/family-choice-overview.webp";
import CampAtSeaImg from "@/assets/celebritycruises/CelebrityFamilies/camp-at-sea-kids-club.webp";
import ToddlersImg from "@/assets/celebritycruises/CelebrityFamilies/toddlers-babies-experience.webp";
import TeenProgramImg from "@/assets/celebritycruises/CelebrityFamilies/teen-program-activities.webp";
import FamilyResortPoolImg from "@/assets/celebritycruises/CelebrityFamilies/family-resort-deck-pool.webp";
import RooftopGardenImg from "@/assets/celebritycruises/CelebrityFamilies/family-rooftop-garden-movies.webp";
import LawnClubImg from "@/assets/celebritycruises/CelebrityFamilies/family-lawn-club-games.webp";
import SportsPickleballImg from "@/assets/celebritycruises/CelebrityFamilies/family-sports-pickleball.webp";
import FamilyDiningCafeImg from "@/assets/celebritycruises/CelebrityFamilies/family-dining-oceanview-cafe.webp";
import FamilyStateroomImg from "@/assets/celebritycruises/CelebrityFamilies/family-stateroom-veranda.webp";
import ShipEdgeImg from "@/assets/celebritycruises/CelebrityFamilies/ship-edge-series-family.webp";
import ShipSolsticeImg from "@/assets/celebritycruises/CelebrityFamilies/ship-solstice-series-family.webp";
import ShipMillenniumImg from "@/assets/celebritycruises/CelebrityFamilies/ship-millennium-series-family.webp";
import ShipFloraImg from "@/assets/celebritycruises/CelebrityFamilies/ship-flora-galapagos.webp";
import ExcursionCaribImg from "@/assets/celebritycruises/CelebrityFamilies/excursion-caribbean-family-beach.webp";
import ExcursionAlaskaImg from "@/assets/celebritycruises/CelebrityFamilies/excursion-alaska-wildlife-glacier.webp";
import ExcursionMedImg from "@/assets/celebritycruises/CelebrityFamilies/excursion-mediterranean-culture-coastal.webp";
import FamilyMultigenImg from "@/assets/celebritycruises/CelebrityFamilies/family-multigen-cruise-value.webp";
import CtaFamilyCruiseImg from "@/assets/celebritycruises/CelebrityFamilies/cta-family-cruise-vacation.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// Distinct Themed Assets from CelebrityFamilies Folder (Matching Section Headings)
import TeenPickleballImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-beyond-pickleball.webp";
import TeenSnorkelingImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-barbados-snorkeling.webp";
import PoolDeckOutdoorImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-xcel-vitamind-deck.webp";
import RooftopGardenMoviesImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-apex-rooftop-garden.webp";
import EnrichmentDarwinImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-galapagos-charles-darwin-foundation.webp";
import DiningSeasideImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-flora-seaside-restaurant.webp";
import DiningKidsFoodImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-rapallo-food.webp";
import DiningLeVoyageImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-ascent-le-voyage.webp";
import DiningFineCuisineImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-ascent-le-voyage-mediterranean-sea-bass-saffron.webp";
import FamilyProsConsCocoCayImg from "@/assets/celebritycruises/CelebrityFamilies/celebrity-beyond-perfect-day-cococay-aerial.webp";

export default function CelebrityFamilies() {
  // Section 1: FeatureGrid for What Makes Celebrity Good for Families
  const whatMakesCards = data.whatMakesGoodChoice.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    badge: `PILLAR 0${idx + 1}`
  }));

  // Section 5: ThreeColumnGrid for Family Activities
  const activityImages = [
    PoolDeckOutdoorImg,      // 1. Swimming Pools and Outdoor Spaces
    RooftopGardenMoviesImg,  // 2. Movies and Entertainment
    SportsPickleballImg,     // 3. Sports and Games
    EnrichmentDarwinImg      // 4. Educational and Enrichment Experiences
  ];
  const familyActivityCards = data.familyActivities.items.map((item, idx) => ({
    title: item.title,
    category: idx === 0 ? "POOLS & DECKS" : idx === 1 ? "ENTERTAINMENT" : idx === 2 ? "SPORTS & GAMES" : "ENRICHMENT",
    description: item.description,
    features: item.features,
    image: activityImages[idx] || FamilyResortPoolImg
  }));

  // Section 8: AccordionFlexGrid for Ships Comparison
  const shipClassImages = [ShipEdgeImg, ShipSolsticeImg, ShipMillenniumImg, ShipFloraImg];
  const shipClassItems = data.byShipClass.classes.map((cls, idx) => ({
    title: cls.name,
    subtitle: cls.ships,
    description: cls.description,
    image: shipClassImages[idx] || ShipEdgeImg
  }));

  // Section 9: SimplePersonaCards for Different Family Types
  const personaIcons = ["Heart", "Star", "Compass", "Gem", "Landmark"];
  const personaCards = data.differentFamilyTypes.types.map((t, idx) => ({
    title: t.title,
    tagline: `Demographic 0${idx + 1}`,
    description: t.description,
    icon: personaIcons[idx] || "Star",
    profile: {
      budgetRange: idx === 0 ? "Infant (6–12+ mo)" : idx === 1 ? "Toddler (1–2 yrs)" : idx === 2 ? "Child (3–12 yrs)" : idx === 3 ? "Teen (13–17 yrs)" : "Grandparents + Multi-Gen",
      idealFor: idx === 0 ? "Independent Supervised Care" : idx === 1 ? "Resort Play & Family Time" : idx === 2 ? "Camp at Sea Youth Club" : idx === 3 ? "Teen Social & Gaming Club" : "Connected Suites & Shared Dining",
      atmosphere: "Contemporary Premium Cruise"
    },
    pros: [t.description]
  }));

  // Section 10: CinematicDestinations for Excursions
  const excursionImages = [ExcursionCaribImg, ExcursionAlaskaImg, ExcursionMedImg];
  const excursionCards = data.shoreExcursions.destinations.map((dest, idx) => ({
    title: dest.title,
    description: dest.description,
    subtitle: dest.description,
    image: excursionImages[idx] || ExcursionCaribImg
  }));

  // Section 14: GenericChecklistCards for Packing
  const packingChecklists = data.packingWithKids.categories.map((cat, idx) => ({
    title: cat.title,
    items: cat.items,
    category: `FAMILY PACKING LIST 0${idx + 1}`
  }));

  // Section 15: StepByStepGuide for Practical Tips
  const practicalTipSteps = data.practicalTips.tips.map((tip, idx) => ({
    step: idx + 1,
    title: tip.title,
    description: tip.description,
    takeaway: `Essential Family Strategy #${idx + 1}`
  }));

  // Section 16: ValueBreakdownSplit for Pros & Cons
  const prosList = data.prosAndCons.advantages.map((adv, idx) => ({
    title: `Key Family Advantage #${idx + 1}`,
    description: adv
  }));
  const consList = data.prosAndCons.considerations.map((con, idx) => ({
    title: `Family Consideration #${idx + 1}`,
    description: con
  }));

  // Section 2: Features for Camp at Sea EditorialFeatureShowcase
  const campAtSeaFeatures = [
    {
      title: "Complimentary Scheduled Sessions",
      description: data.campAtSea.isFree
    },
    {
      title: "Strict Toilet-Training Requirement",
      description: data.campAtSea.toiletTrained
    },
    {
      title: "Fleetwide Ocean Ship Availability",
      description: data.campAtSea.shipsOffering
    }
  ];

  // Section 3: IconGrid items for Toddlers & Babies
  const toddlerIconItems = [
    {
      title: "Minimum Infant Sailing Age",
      description: data.toddlersAndBabies.minimumAge,
      icon: "clock"
    },
    {
      title: "No General Drop-Off Nursery",
      description: data.toddlersAndBabies.nursery,
      icon: "activity"
    },
    {
      title: "In-Room Babysitting Limitations",
      description: data.toddlersAndBabies.babysitting,
      icon: "sun"
    },
    {
      title: "Strict Swimming Pool Regulations",
      description: data.toddlersAndBabies.poolRules,
      icon: "tag"
    }
  ];

  // Section 4: Features for Teenagers EditorialFeatureShowcase
  const teenFeatures = [
    {
      title: "Dedicated Teen Spaces & Venues",
      description: data.teenagers.separateClub
    },
    {
      title: "Independent Come-and-Go Guidance",
      description: data.teenagers.independentMovement
    },
    {
      title: "Socializing, Gaming & Destination Appeal",
      description: data.teenagers.verdict
    }
  ];

  // Section 6: Features for Family Dining DynamicCulinaryShowcase
  const familyDiningFeatures = [
    {
      title: "Oceanview Café & Casual Venues",
      description: data.familyDining.casualDining
    },
    {
      title: data.familyDining.mainDiningTitle || "Main Dining Room Children's Menu",
      description: data.familyDining.mainDiningDescription
    },
    {
      title: "Specialty Restaurant Child Policies",
      description: data.familyDining.specialtyDining
    },
    {
      title: "Flexible Dining Arrangements",
      description: data.familyDining.flexibleTimes
    }
  ];

  // Section 7: CardGrid items for Family Staterooms
  const stateroomIcons = ["Home", "Eye", "Wind", "Users", "Sparkles"];
  const stateroomBullets = [
    ["Budget-conscious family option", "Quiet interior locations", "Functional family base"],
    ["Ocean view picture window", "Natural light for morning routines", "Mid-tier family value"],
    ["Private outdoor veranda", "Parents relaxation zone while kids nap", "Scenic sailing views"],
    ["Two separate connected staterooms", "Two complete private bathrooms", "Ideal for teenagers & multi-gen"],
    ["The Retreat private lounge & sun deck", "Luminae fine dining access", "Expansive suite living spaces"]
  ];
  const stateroomCards = data.familyStaterooms.stateroomTypes.map((st, idx) => ({
    title: st.title,
    description: st.description,
    icon: stateroomIcons[idx] || "Home",
    bullets: stateroomBullets[idx] || ["Premium accommodations", "Dedicated stateroom service"]
  }));

  // Section 19: FAQAccordion Data
  const faqData = {
    title: "Frequently Asked Questions: Celebrity Cruises With Kids",
    subtitle: "Practical, detailed answers to every common question about Camp at Sea, teen facilities, pool rules, infant minimum ages, dining, and accommodations.",
    faqs: data.faqs
  };

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <meta
          name="keywords"
          content={[data.meta.primaryKeyword, ...data.meta.secondaryKeywords].join(", ")}
        />
        <script type="application/ld+json">{JSON.stringify(data.schemaData)}</script>
      </Helmet>

      <Nav />

      <div className="bg-white text-navy-950 min-h-screen">
        {/* Hero Section */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            backgroundImage={HeroFamilyImg}
            byline={true}
            primaryCtaText="Explore Family Guide"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Plan with Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

        {/* Intro Story / Overview */}
        <div id="intro-overview" className="border-b border-navy-100">
          <MagazineStoryIntro
            heading="Is Celebrity Cruises Good for Families? A Guide to Sailing With Kids"
            paragraphs={data.hero.introParagraphs}
          />
        </div>

        {/* Quick Answer: Is Celebrity Cruises Family-Friendly? (ComparisonTable) */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.quickAnswer.title,
              subtitle: data.quickAnswer.subtitle,
              headers: data.quickAnswer.table.headers,
              rows: data.quickAnswer.table.rows
            }}
          />


        </div>

        {/* Section 1: What Makes Celebrity Cruises a Good Choice for Families? */}
        <div id="good-choice" className="border-b border-navy-100">
          <FeatureGrid
            title={data.whatMakesGoodChoice.title}
            subtitle={data.whatMakesGoodChoice.subtitle}
            features={whatMakesCards}
            bgClass="bg-ice-50"
          />
        </div>

        {/* Section 2: Camp at Sea: Kids Club Explained */}
        <div id="camp-at-sea" className="border-b border-navy-100">
          <EditorialFeatureShowcase
            title={data.campAtSea.title}
            subtitle={data.campAtSea.subtitle}
            image={CampAtSeaImg}
            features={campAtSeaFeatures}
            bgClass="bg-white"
          />

          {/* Camp at Sea Age Groups & Experiences */}
          <ComparisonTable data={data.campAtSea.ageGroupsTable} />
        </div>

        {/* Section 3: Toddlers and Babies */}
        <div id="toddlers-and-babies" className="border-b border-navy-100">
          <IconGrid
            title={data.toddlersAndBabies.title}
            subtitle={data.toddlersAndBabies.subtitle}
            items={toddlerIconItems}
          />
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <FadeIn>
              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-navy-900 shadow-sm">
                <p className="text-slate-700 italic text-base leading-relaxed">
                  {data.toddlersAndBabies.verdict}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Section 4: Celebrity Cruises for Teenagers */}
        <div id="teenagers" className="border-b border-navy-100">
          <AsymmetricStoryIntro
            eyebrow="TEEN PROGRAM (AGES 13–17)"
            heading={data.teenagers.title}
            paragraphs={[data.teenagers.subtitle]}
            highlights={[
              `Dedicated Teen Spaces: ${data.teenagers.separateClub}`,
              `Independent Movement: ${data.teenagers.independentMovement}`,
              `Social & Gaming Appeal: ${data.teenagers.verdict}`
            ]}
            image1={TeenPickleballImg}
            image1Alt="Celebrity Cruises Teen Pickleball and Sports"
            image2={TeenSnorkelingImg}
            image2Alt="Celebrity Cruises Teen Snorkeling Excursion"
          />
        </div>

        {/* Section 5: Family Activities Together */}
        <div id="family-activities" className="border-b border-navy-100">
          <ThreeColumnGrid
            title={data.familyActivities.title}
            subtitle={data.familyActivities.subtitle}
            items={familyActivityCards}
          />
        </div>

        {/* Section 6: Family Dining Options */}
        <div id="family-dining" className="border-b border-navy-100">
          <DynamicCulinaryShowcase
            title={data.familyDining.title}
            subtitle={data.familyDining.subtitle}
            items={familyDiningFeatures}
            images={[DiningSeasideImg, DiningKidsFoodImg, DiningLeVoyageImg, DiningFineCuisineImg]}
          />
        </div>

        {/* Section 7: Family Staterooms & Connecting Cabins */}
        <div id="family-staterooms" className="border-b border-navy-100">
          <CardGrid
            title={data.familyStaterooms.title}
            subtitle={data.familyStaterooms.subtitle}
            cards={stateroomCards}
            columns={3}
            stagger={true}
          />

          {/* Which Accommodation Is Best for Families? */}
          <ComparisonTable data={data.familyStaterooms.accommodationTable} />
        </div>

        {/* Section 8: Which Celebrity Ships Are Best for Families? (AccordionFlexGrid) */}
        <div id="best-ships" className="border-b border-navy-100">
          <AccordionFlexGrid
            title={data.byShipClass.title}
            subtitle={data.byShipClass.subtitle}
            items={shipClassItems}
          />


        </div>

        {/* Section 9: Celebrity Cruises for Different Family Types (SimplePersonaCards) */}
        <div id="family-types" className="border-b border-navy-100">
          <SimplePersonaCards
            title={data.differentFamilyTypes.title}
            subtitle={data.differentFamilyTypes.subtitle}
            personas={personaCards}
          />
        </div>

        {/* Section 10: Family Shore Excursions (CinematicDestinations) */}
        <div id="shore-excursions" className="border-b border-navy-100 bg-navy-950">
          <CinematicDestinations
            title={data.shoreExcursions.title}
            subtitle={data.shoreExcursions.subtitle}
            items={excursionCards}
          />

          {/* Family Excursion Checklist & Important Considerations */}
          {data.shoreExcursions.checklist && (
            <div className="max-w-[1400px] mx-auto px-6 pb-24 -mt-8 relative z-10">
              <FadeIn>
                <div className="bg-navy-900/90 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                  <div className="mb-8">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block mb-2">
                      Pre-Booking Checklist
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white">
                      Important Checklist Before Booking Family Excursions
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {data.shoreExcursions.checklist.map((item: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-gold-400/40 transition-colors"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="font-sans text-ice-100 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {data.shoreExcursions.note && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-center gap-3">
                      <span className="flex-shrink-0 text-amber-400 text-xl font-bold">ℹ</span>
                      <p className="font-sans text-amber-200 text-sm md:text-base font-medium">
                        {data.shoreExcursions.note}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          )}
        </div>

        {/* Section 11: Is Celebrity Cruises Affordable for Families? */}
        <div id="affordability" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.affordability.title,
              subtitle: data.affordability.subtitle,
              headers: data.affordability.table.headers,
              rows: data.affordability.table.rows
            }}
          />


        </div>

        {/* Section 12: Family Policies Parents Should Know */}
        <div id="family-policies" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.familyPolicies.title,
              subtitle: data.familyPolicies.subtitle,
              headers: data.familyPolicies.table.headers,
              rows: data.familyPolicies.table.rows
            }}
          />
        </div>

        {/* Section 13: Celebrity vs Other Cruise Lines */}
        <div id="cruise-line-comparison" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.cruiseLineComparison.title,
              subtitle: data.cruiseLineComparison.subtitle,
              headers: data.cruiseLineComparison.table.headers,
              rows: data.cruiseLineComparison.table.rows
            }}
          />

          {/* Brand Breakdown Cards */}
          <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.cruiseLineComparison.comparisons.map((c, idx) => (
              <FadeIn key={idx}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full flex flex-col">
                  <h4 className="font-display text-lg text-navy-950 font-bold mb-3">{c.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-light flex-grow">{c.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Section 14: Packing for a Celebrity Cruise With Kids (GenericChecklistCards) */}
        <div id="packing-checklist" className="border-b border-navy-100">
          <GenericChecklistCards
            title={data.packingWithKids.title}
            subtitle={data.packingWithKids.subtitle}
            cards={packingChecklists}
          />
        </div>

        {/* Section 15: Practical Tips for Parents (StepByStepGuide) */}
        <div id="practical-tips" className="border-b border-navy-100">
          <StepByStepGuide
            title={data.practicalTips.title}
            subtitle={data.practicalTips.subtitle}
            steps={practicalTipSteps}
            layout="grid"
            columns={2}
          />
        </div>

        {/* Section 16: Pros and Cons (ValueBreakdownSplit) */}
        <div id="pros-and-cons" className="border-b border-navy-100">
          <ValueBreakdownSplit
            title={data.prosAndCons.title}
            subtitle={data.prosAndCons.subtitle}
            includedTitle="Advantages for Families"
            included={prosList}
            extrasTitle="Important Considerations"
            extras={consList}
            image={FamilyProsConsCocoCayImg}
          />
        </div>

        {/* Section 17: Is Celebrity Right for Your Family? */}
        <div id="right-choice" className="border-b border-navy-100">
          <ProsConsCards
            title={data.rightForYourFamily.title}
            bottomNote={data.rightForYourFamily.subtitle}
            prosTitle="Celebrity May Be a Good Fit If:"
            consTitle="Compare Alternatives If:"
            bestFor={data.rightForYourFamily.goodFit}
            notBestFor={data.rightForYourFamily.considerAlternatives}
            type="compare"
            bgClass="bg-slate-50"
          />
        </div>

        {/* Section 18: Expert Credentials */}
        <div id="advisor-credentials" className="border-b border-navy-100">
          <ExpertCredentials
            name="Angela Hughes"
            title="CEO & Luxury Family Cruise Specialist"
            bio={data.advisorPlanning.description}
            image={AboutAngelaImg}
            credentials={[
              "40+ Years Luxury Cruise Industry Veteran",
              "Top Producer for Celebrity Cruises Worldwide",
              "Certified Master Cruise Counselor (CLIA)",
              "Multi-Generational & Family Cruise Itinerary Specialist"
            ]}
            ctaText="Plan Your Celebrity Family Cruise"
            ctaLink="/contact"
          />
        </div>



        {/* Section 19: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs" className="border-b border-navy-100">
          <FAQAccordion data={faqData} />
        </div>
      </div>

              {/* Center CTA */}
        <div id="family-cta">
          <CenterCTA
            theme="dark"
            title={data.advisorPlanning.cta.title}
            description={data.advisorPlanning.cta.text}
            buttonText={data.advisorPlanning.cta.buttonText}
            buttonLink={data.advisorPlanning.cta.buttonLink}
            image={CtaFamilyCruiseImg}
          />
        </div>
    </>
  );
}

