import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// UI Components from src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import MagazineStoryIntro from "@/components/ui/MagazineStoryIntro";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FeatureGrid from "@/components/ui/FeatureGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import FeatureSplit from "@/components/ui/FeatureSplit";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import EditorialExcursionShowcase from "@/components/ui/EditorialExcursionShowcase";
import AccordionFlexGrid from "@/components/ui/AccordionFlexGrid";
import SimplePersonaCards from "@/components/ui/SimplePersonaCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import CardGrid from "@/components/ui/CardGrid";
import ProsConsCards from "@/components/ui/ProsConsCards";
import ConclusionSection from "@/components/ui/ConclusionSection";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CenterCTA from "@/components/ui/CenterCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FadeIn from "@/components/ui/FadeIn";
import CurvilinearGrid from "@/components/ui/CurvilinearGrid";
import BudgetBreakdownTable from "@/components/ui/BudgetBreakdownTable";
import BrandTakeawaysGrid from "@/components/ui/BrandTakeawaysGrid";
import BrandComparisonTable from "@/components/ui/BrandComparisonTable";
import PricingFactorsGrid from "@/components/ui/PricingFactorsGrid";

// Dedicated Page Images from src/assets/celebritycruises/CelebritySoloTravelers/
import SoloHeroImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-apex-mykonos-golden-hour-sunset-glow.webp";
import SingleStateroomImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-flora-premium-suite-infinite-veranda-bedroom.webp";
import SingleSupplementImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-solstice-lifou-new-caledonia.webp";
import SoloMagicCarpetImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-beyond-magic-carpet-st-thomas.webp";
import SoloDiningWineImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-dunedin-food-wine-panoramic-scenic-view.webp";
import SoloEveningLoungeImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-flora-discovery-lounge-bar-golden-hour-sunset-glow.webp";
import SoloSpaThermalSuiteImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-beyond-spa-thermal-suite.webp";
import SoloCulinaryClassImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-mykonos-private-cooking-class-panoramic-scenic-view.webp";
import ExcursionArubaImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-aruba-best-aruba-tour-golden-hour-sunset-glow.webp";
import ExcursionFlorenceImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-florence-cityscape.webp";
import ExcursionReefImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-australia-great-barrier-reef.webp";
import ShipEdgeImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-edge-portofino.webp";
import ShipApexImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-apex-aerial-dubrovnik.webp";
import ShipBeyondImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-beyond-santorini.webp";
import ShipAscentImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-ascent-santorini-aerial.webp";
import ShipSilhouetteImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-silhouette-blue-hull-exterior.webp";
import CtaSoloImg from "@/assets/celebritycruises/CelebritySoloTravelers/celebrity-ascent-santorini-aerial-golden-hour-sunset-glow.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

export default function CelebritySoloTravelers() {
  // Section 3: FeatureGrid for Why Choose Celebrity
  const whyChooseCards = data.whyChooseCelebrity.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    badge: `ADVANTAGE 0${idx + 1}`
  }));

  // Section 4: EditorialFeatureShowcase features for Single Staterooms
  const singleStateroomFeatures = [
    {
      title: "Edge Single Infinite Veranda (184 Sq Ft)",
      description: `${data.singleStaterooms.edgeSeriesSubtitle} ${data.singleStaterooms.edgeSpecs} ${data.singleStaterooms.edgeNote}`
    },
    {
      title: "Celebrity Silhouette Single Inside Cabins",
      description: `${data.singleStaterooms.silhouetteDescription} ${data.singleStaterooms.silhouetteTradeoff}`
    },
    {
      title: "Standard Cabin Single-Occupancy Option",
      description: data.singleStaterooms.standardStaterooms.description
    }
  ];

  // Section 6: FeatureSplit features for Single Supplement
  const singleSupplementFeatures = [
    {
      title: "Double-Occupancy Pricing Baseline",
      description: data.singleSupplement.description
    },
    {
      title: "Key Factors Influencing Cost",
      description: "Ship selection, departure date demand, cabin category, remaining inventory, and available solo promotional waivers."
    }
  ];

  // Section 7: StepByStepGuide for Avoiding Single Supplement
  const avoidSupplementSteps = data.avoidSupplement.strategies.map((strat) => ({
    step: strat.step,
    title: strat.title,
    description: strat.description,
    takeaway: strat.takeaway
  }));

  // Section 8: CurvilinearGrid for Solo Fare Structures
  const soloFareCards = [
    {
      title: data.soloFare.cruiseOnly.title,
      description: data.soloFare.cruiseOnly.description,
      icon: "ship"
    },
    {
      title: data.soloFare.allIncluded.title,
      description: data.soloFare.allIncluded.description,
      icon: "check"
    },
    {
      title: data.soloFare.gratuities.title,
      description: data.soloFare.gratuities.description,
      icon: "dollar"
    }
  ];

  // Section 9: ThreeColumnGrid for Onboard Life
  const onboardActivityCards = data.onboardLife.features.map((item, idx) => ({
    title: item.title,
    category: idx === 0 ? "HOSTED MEETUPS" : idx === 1 ? "INDEPENDENT DINING" : idx === 2 ? "EVENING SHOWS" : "WELLNESS & SPA",
    description: item.description,
    features: [
      idx === 0 ? "Daily Hosted Meetups in Eden & Sky Lounge" : idx === 1 ? "Flexible Table For One or Shared Seating" : idx === 2 ? "Theater Shows & Live Acoustic Lounges" : "State-of-the-Art Spa & Fitness Classes",
      idx === 0 ? "Coordinate Evening Dinner Companions" : idx === 1 ? "Casual Oceanview Café & Specialty Dining" : idx === 2 ? "Themed Dance Parties & Trivia Games" : "Quiet Solarium Pools & Library Havens",
      idx === 0 ? "No Mandatory Social Pressures" : idx === 1 ? "Personal Dining Pace & Ocean Views" : idx === 2 ? "Late-Night Strolls on Open Decks" : "AquaClass Wellness Enhancements"
    ],
    image: idx === 0 ? SoloMagicCarpetImg : idx === 1 ? SoloDiningWineImg : idx === 2 ? SoloEveningLoungeImg : SoloSpaThermalSuiteImg
  }));

  // Section 11: EditorialExcursionShowcase for Shore Excursions
  const excursionImages = [ExcursionArubaImg, ExcursionFlorenceImg, ExcursionReefImg];
  const excursionCards = data.shoreExcursions.destinations.map((dest, idx) => ({
    title: dest.title,
    category: dest.region,
    description: dest.description,
    image: excursionImages[idx] || ExcursionArubaImg
  }));

  // Section 12: AccordionFlexGrid for Best Ships
  const shipImages = [ShipEdgeImg, ShipApexImg, ShipBeyondImg, ShipAscentImg, ShipSilhouetteImg];
  const shipClassItems = data.bestShips.ships.map((ship, idx) => ({
    title: ship.name,
    subtitle: ship.subtitle,
    description: ship.description,
    image: shipImages[idx] || ShipEdgeImg
  }));

  // Section 14: SimplePersonaCards for Different Solo Traveler Types
  const personaCards = data.soloTravelerTypes.personas.map((persona) => ({
    title: persona.title,
    tagline: persona.tagline,
    description: persona.description,
    icon: persona.icon,
    profile: {
      budgetRange: "Tailored Solo Rate",
      idealFor: persona.tagline,
      atmosphere: "Refined, Independent Luxury"
    },
    pros: [persona.description]
  }));

  // Section 15: PricingFactorsGrid for Cost Factors
  const pricingFactorsList = data.pricingAndQuoteComparison.factors.map((factor) => {
    const colonIdx = factor.indexOf(":");
    if (colonIdx !== -1) {
      return {
        title: factor.slice(0, colonIdx).trim(),
        description: factor.slice(colonIdx + 1).trim()
      };
    }
    return {
      title: factor,
      description: ""
    };
  });

  // Section 16: BrandTakeawaysGrid for Cruise Line Comparisons
  const cruiseLinesComparisonItems = data.cruiseLineComparison.lines.map((line) => ({
    title: line.name,
    description: line.description
  }));

  // Section 18: CardGrid for Booking Tips
  const bookingTipCards = data.bookingTips.cards.map((card) => ({
    title: card.title,
    description: card.description,
    icon: card.icon,
    bullets: card.bullets
  }));

  // Section 23: FAQAccordion Data
  const faqData = {
    title: "Frequently Asked Questions About Celebrity Cruises for Solo Travelers",
    subtitle: "Complete, itemized answers to all 30 essential questions regarding single cabins, supplement pricing, dining, safety, and onboard social meetups.",
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
            backgroundImage={SoloHeroImg}
            byline={true}
            primaryCtaText="Explore Solo Guide"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Plan with Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

        {/* Section 1: Intro Overview (MagazineStoryIntro) */}
        <div id="intro-overview" className="border-b border-navy-100">
          <MagazineStoryIntro
            heading={data.hero.introHeading}
            paragraphs={data.hero.introParagraphs}
          />
        </div>

        {/* Section 2: Quick Answer (ComparisonTable) */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.quickAnswer.title,
              subtitle: data.quickAnswer.subtitle,
              headers: data.quickAnswer.table.headers,
              rows: data.quickAnswer.table.rows
            }}
          />
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <FadeIn>
              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-navy-900 shadow-sm text-center">
                <p className="text-slate-700 italic text-base leading-relaxed">
                  {data.quickAnswer.note}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Section 3: Why Choose Celebrity Cruises (FeatureGrid) */}
        <div id="why-choose-celebrity" className="border-b border-navy-100">
          <FeatureGrid
            title={data.whyChooseCelebrity.title}
            subtitle={data.whyChooseCelebrity.subtitle}
            cards={whyChooseCards}
          />
        </div>

        {/* Section 4: Single Staterooms Overview (EditorialFeatureShowcase) */}
        <div id="single-staterooms" className="border-b border-navy-100">
          <EditorialFeatureShowcase
            title={data.singleStaterooms.title}
            subtitle={data.singleStaterooms.subtitle}
            image={SingleStateroomImg}
            features={singleStateroomFeatures}
            bgClass="bg-white"
          />
        </div>

        {/* Section 5: Single Stateroom Fleet Comparison Table (ComparisonTable) */}
        <div id="stateroom-comparison" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.singleStateroomTable.title,
              subtitle: data.singleStateroomTable.subtitle,
              headers: data.singleStateroomTable.headers,
              rows: data.singleStateroomTable.rows
            }}
          />
        </div>

        {/* Section 6: Single Supplement Explained (FeatureSplit & Example Table) */}
        <div id="single-supplement" className="border-b border-navy-100">
          <FeatureSplit
            imagePosition="right"
            theme="white"
            image={SingleSupplementImg}
            title={data.singleSupplement.title}
            subtitles={[data.singleSupplement.subtitle]}
            features={singleSupplementFeatures}
            summary="Celebrity calculates single supplements dynamically based on vessel capacity, seasonal demand, and booking category."
          />

          {/* Pricing Supplement Example Table */}
          <ComparisonTable
            data={{
              title: data.singleSupplement.exampleTable.title,
              subtitle: data.singleSupplement.exampleTable.subtitle,
              headers: data.singleSupplement.exampleTable.headers,
              rows: data.singleSupplement.exampleTable.rows
            }}
          />
        </div>

        {/* Section 7: Avoid the Single Supplement (StepByStepGuide) */}
        <div id="avoid-supplement" className="border-b border-navy-100">
          <StepByStepGuide
            title={data.avoidSupplement.title}
            subtitle={data.avoidSupplement.subtitle}
            steps={avoidSupplementSteps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* Section 8: Solo Fare Inclusions & Budget Checklist (CurvilinearGrid & BudgetBreakdownTable) */}
        <div id="solo-fare" className="border-b border-navy-100">
          <CurvilinearGrid
            title={data.soloFare.title}
            subtitle="SOLO FARE STRUCTURES & OPTIONS"
            paragraphs={[data.soloFare.subtitle]}
            items={soloFareCards}
          />

          <BudgetBreakdownTable
            data={{
              title: data.soloFare.budgetChecklist.title,
              description: data.soloFare.budgetChecklist.subtitle,
              headers: data.soloFare.budgetChecklist.headers,
              rows: data.soloFare.budgetChecklist.rows
            }}
          />
        </div>

        {/* Section 9: What Is Life Like Onboard (ThreeColumnGrid) */}
        <div id="onboard-life" className="border-b border-navy-100">
          <ThreeColumnGrid
            title={data.onboardLife.title}
            subtitle={data.onboardLife.subtitle}
            items={onboardActivityCards}
          />
        </div>

        {/* Section 10: Solo Dining & Socializing (AsymmetricStoryIntro) */}
        <div id="solo-dining" className="border-b border-navy-100">
          <AsymmetricStoryIntro
            eyebrow="SOLO DINING & SOCIALIZING"
            heading="Dining Alone on Celebrity Cruises: Freedom, Flavor & Flexibility"
            paragraphs={[
              "Dining alone does not have to be uncomfortable. Celebrity offers several dining options, including main dining venues, casual eateries, cafés, and specialty restaurants.",
              "You can choose a table for yourself and enjoy the meal at your own pace. If you prefer company, ask the dining team whether shared seating or an appropriate dining arrangement is available on your sailing."
            ]}
            highlights={data.onboardLife.diningTips}
            image1={SoloDiningWineImg}
            image1Alt="Celebrity Cruises Fine Dining and Wine Experience"
            image2={SoloCulinaryClassImg}
            image2Alt="Celebrity Cruises Gourmet Culinary Preparation"
          />
        </div>

        {/* Section 11: Shore Excursions (EditorialExcursionShowcase & Excursion Tips) */}
        <div id="shore-excursions" className="border-b border-navy-100 bg-white">
          <EditorialExcursionShowcase
            title={data.shoreExcursions.title}
            subtitle={data.shoreExcursions.subtitle}
            items={excursionCards}
          />
      
        </div>

        {/* Section 12: Best Ships for Solo Travelers (AccordionFlexGrid) */}
        <div id="best-ships" className="border-b border-navy-100">
          <AccordionFlexGrid
            title={data.bestShips.title}
            subtitle={data.bestShips.subtitle}
            items={shipClassItems}
          />
        </div>

        {/* Section 13: Choosing a Ship Table (ComparisonTable) */}
        <div id="ship-comparison-table" className="border-b border-navy-100">
          <ComparisonTable
            data={{
              title: data.bestShips.table.title,
              subtitle: data.bestShips.table.subtitle,
              headers: data.bestShips.table.headers,
              rows: data.bestShips.table.rows
            }}
          />
        </div>

        {/* Section 14: Solo Traveler Profiles (SimplePersonaCards) */}
        <div id="solo-traveler-types" className="border-b border-navy-100">
          <SimplePersonaCards
            title={data.soloTravelerTypes.title}
            subtitle={data.soloTravelerTypes.subtitle}
            personas={personaCards}
          />
        </div>

        {/* Section 15: Cost & Pricing Factors (PricingFactorsGrid) */}
        <div id="cost-factors" className="border-b border-navy-100">
          <PricingFactorsGrid
            data={{
              title: data.pricingAndQuoteComparison.title,
              description: data.pricingAndQuoteComparison.subtitle,
              factors: pricingFactorsList
            }}
          />
        </div>

        {/* Section 16: Cruise Line Comparison (BrandTakeawaysGrid & BrandComparisonTable) */}
        <div id="cruise-line-comparison" className="border-b border-navy-100">
          <BrandTakeawaysGrid
            title={data.cruiseLineComparison.title}
            subtitle={data.cruiseLineComparison.subtitle}
            items={cruiseLinesComparisonItems}
          />

          <BrandComparisonTable
            title={data.cruiseLineComparison.table.title}
            subtitle={data.cruiseLineComparison.table.subtitle}
            headers={data.cruiseLineComparison.table.headers}
            rows={data.cruiseLineComparison.table.rows}
          />
        </div>

        {/* Section 17: Safety Tips (GenericChecklistCards) */}
        <div id="safety-guidelines" className="border-b border-navy-100">
          <GenericChecklistCards
            title={data.safetyTips.title}
            subtitle={data.safetyTips.subtitle}
            cards={data.safetyTips.checklists}
          />
        </div>

        {/* Section 18: Strategic Booking Tips (CardGrid) */}
        <div id="booking-strategies" className="border-b border-navy-100">
          <CardGrid
            title={data.bookingTips.title}
            subtitle={data.bookingTips.subtitle}
            cards={bookingTipCards}
            columns={4}
            stagger={true}
          />
        </div>

        {/* Section 19: Pros & Cons (ProsConsCards) */}
        <div id="pros-and-cons" className="border-b border-navy-100">
          <ProsConsCards
            title={data.prosAndCons.title}
            bottomNote={data.prosAndCons.subtitle}
            prosTitle="Advantages for Solo Cruisers"
            consTitle="Potential Drawbacks to Note"
            bestFor={data.prosAndCons.advantages}
            notBestFor={data.prosAndCons.drawbacks}
            type="compare"
            bgClass="bg-slate-50"
          />
        </div>


        {/* Section 21: Angela Hughes Expert Credentials */}
        <div id="expert-credentials">
          <ExpertCredentials
            name="Angela Hughes"
            title="Luxury Cruise & Independent Travel Specialist"
            image={AboutAngelaImg}
            experienceBadge="40+ YEARS EXPERTISE"
            authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
            authoritySubtitle="Celebrity Cruises & Solo Travel Specialist"
            ctaText="Consult With Angela"
            ctaLink="/contact"
            credentials={[
              "40+ Years Designing Luxury Cruise Travel",
              "Single Stateroom & Veranda Booking Specialist",
              "Single Supplement Waiver Tracking & Negotiation",
              "Explored 121+ Countries & Major Cruise Lines",
              "Independent Destination Itineraries Expert",
              "Exclusive Solo Traveler Perks & VIP Amenities"
            ]}
            paragraphs={[
              "Angela Hughes is an acclaimed luxury travel advisor and CEO of Trips & Ships Luxury Travel. With over 30 years of hands-on cruise expertise, Angela helps independent travelers navigate single supplements, secure limited solo cabin inventory, and experience the finest ships in the world with total confidence.",
              "Whether you desire a private Single Infinite Veranda on the Edge Series, a budget-friendly solo cabin on Celebrity Silhouette, or a standard stateroom with optimized promotional rates, Angela delivers tailored guidance for your journey."
            ]}
          />
        </div>


 
        {/* Section 23: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs" className="border-b border-navy-100">
          <FAQAccordion data={faqData} />
        </div>
        
                        {/* Section 20: Final Verdict (ConclusionSection) */}
        <div id="verdict" className="border-b border-navy-100">
          <ConclusionSection
            title={data.conclusion.title}
            badge={data.conclusion.badge}
            paragraphs={data.conclusion.paragraphs}
            verdict="Start by comparing dedicated single cabins on Celebrity Edge, Apex, Beyond, Ascent, and Silhouette. Then evaluate standard staterooms with single supplements to secure the best solo cruise value."
          />
        </div>
                        {/* Section 22: Center CTA */}
        <div id="cta">
          <CenterCTA
            title="Plan Your Celebrity Solo Cruise With Trips & Ships"
            description="Connect with Angela Hughes and her expert team to compare single-occupancy rates, unlock private agency amenities, and book your dream independent voyage."
            buttonText="Plan Your Solo Cruise"
            buttonLink="/contact"
            image={CtaSoloImg}
          />
        </div>
      </div>
    </>
  );
}

