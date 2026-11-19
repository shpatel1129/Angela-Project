import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Assets - Celebrity Cruises Fleet & Lifestyle Images
import HeroShipImg from "@/assets/celebritycruises/CelebrityCruiseCost/hero-celebrity-beyond.webp";
import SantoriniImg from "@/assets/celebritycruises/CelebrityCruiseCost/hero-celebrity-santorini.webp";
import AlaskaEdgeImg from "@/assets/celebritycruises/CelebrityCruiseCost/hero-celebrity-edge-alaska.webp";
import SunsetBarImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-sunset-bar.webp";
import MagicCarpetImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-edge-magic-carpet.webp";
import ApexShipImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-edge-series-apex.webp";
import SolsticeShipImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-solstice-class.webp";
import MillenniumShipImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-millennium-class.webp";
import FloraShipImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-galapagos-flora.webp";
import RetreatSuiteImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-the-retreat-suite.webp";
import AllIncludedDrinksImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-all-included-drinks.webp";
import SpecialtyDiningImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-specialty-dining-le-voyage.webp";
import CulinaryExpImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-culinary-experience.webp";
import DestCaribbeanImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-destination-caribbean.webp";
import DestAlaskaImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-destination-alaska.webp";
import DestMedImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-destination-mediterranean.webp";
import DestGalapagosImg from "@/assets/celebritycruises/CelebrityCruiseCost/celebrity-destination-galapagos.webp";
import AboutImage from "@/assets/AboutAngela.jpeg";

// UI Components from src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import ElegantFleetShowcase from "@/components/ui/ElegantFleetShowcase";
import SimplePersonaCards from "@/components/ui/SimplePersonaCards";
import DestinationFlipCards from "@/components/ui/DestinationFlipCards";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import DynamicCulinaryShowcase from "@/components/ui/DynamicCulinaryShowcase";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";
import CardGrid from "@/components/ui/CardGrid";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import FadeIn from "@/components/ui/FadeIn";
import { AlertCircle, Scale, Users, CheckCircle2 } from "lucide-react";

export default function CelebrityCruiseCost() {
  // Fleet showcase with individual ship images
  const fleetImages = [
    ApexShipImg,
    SolsticeShipImg,
    MillenniumShipImg,
    FloraShipImg,
  ];
  const fleetWithImages = data.fleet.map((ship, idx) => ({
    ...ship,
    image: fleetImages[idx] || HeroShipImg,
  }));

  // Destination flip cards with region-specific imagery
  const destinationImages = [
    DestCaribbeanImg,
    DestAlaskaImg,
    DestMedImg,
    DestGalapagosImg,
  ];
  const destinationItemsWithImages = data.destinationShowcase.items.map((item, idx) => ({
    ...item,
    image: destinationImages[idx] || HeroShipImg,
  }));

  // Dining showcase images
  const diningImages = [
    SpecialtyDiningImg,
    CulinaryExpImg,
    AllIncludedDrinksImg,
    SunsetBarImg,
  ];

  return (
    <div className="w-full min-h-screen bg-white text-navy-950 font-sans selection:bg-amber-100 selection:text-amber-900">
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

      {/* Hero Section */}
      <ComparisonHero
        byline
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        badge={data.hero.badge}
        backgroundImage={HeroShipImg}
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Important Pricing Conditions Banner */}
       

       
        {/* Section 1: Quick Answer (ComparisonTable) */}
        <ComparisonTable data={data.quickCompareTable} />


        {/* Section 2: Pricing Basics (Cost Per Person & Cost for Two) */}
        <div id="cost-per-person">
          <CardGrid
            title={data.pricingBasicsCards.title}
            subtitle={data.pricingBasicsCards.subtitle}
            cards={data.pricingBasicsCards.cards}
            columns={3}
            stagger={false}
          />
        </div>

        {/* Section 3: Which Celebrity Cabin Offers the Best Value? (SimplePersonaCards) */}
        <SimplePersonaCards
          title={data.whichBest.title}
          subtitle={data.whichBest.subtitle}
          personas={data.whichBest.personas}
        />

        {/* Section 4: The Celebrity Fleet in Detail (ElegantFleetShowcase) */}
        <div id="pricing-factors">
          <ElegantFleetShowcase
            title="Celebrity Ship Classes & Fleet Pricing"
            subtitle="Celebrity operates multiple ship classes, each with distinct accommodations, dining and pricing structures."
            ships={fleetWithImages}
          />
        </div>

        {/* Interlude CTA 1 */}
        <CenterCTA
          theme="dark"
          title="Plan Your Celebrity Cruise Vacation"
          description="Speak with Trips & Ships Luxury Travel about your preferred destination, travel dates, stateroom and overall budget."
          buttonText="Plan Your Celebrity Cruise"
          buttonLink="/contact#celebrity-cruise-inquiry"
          image={SunsetBarImg}
        />

        {/* Section 5: All Included Package (ComparisonTable) */}
        <ComparisonTable data={data.allIncludedTable} />

        {/* All Included Details & Value Evaluation */}
        <div id="all-included-evaluation">
          <ValueBreakdownSplit
            title={data.allIncludedValueBreakdown.title}
            subtitle={data.allIncludedValueBreakdown.subtitle}
            includedTitle={data.allIncludedValueBreakdown.includedTitle}
            extrasTitle={data.allIncludedValueBreakdown.extrasTitle}
            included={data.allIncludedValueBreakdown.included}
            extras={data.allIncludedValueBreakdown.extras}
            image={AllIncludedDrinksImg}
          />


        </div>

        {/* Section 6: Stateroom Categories Showcase (EditorialFeatureShowcase) */}
        <EditorialFeatureShowcase
          title={data.stateroomShowcase.title}
          subtitle={data.stateroomShowcase.subtitle}
          image={RetreatSuiteImg}
          features={data.stateroomShowcase.features}
        />

        {/* Section 7: Specialty Dining & Drinks Showcase (DynamicCulinaryShowcase) */}
        <DynamicCulinaryShowcase
          title={data.diningAndDrinks.title}
          subtitle={data.diningAndDrinks.subtitle}
          items={data.diningAndDrinks.items}
          images={diningImages}
        />

        {/* Section 8: Destination Costs Flip Cards (DestinationFlipCards) */}
        <DestinationFlipCards
          title={data.destinationShowcase.title}
          subtitle={data.destinationShowcase.subtitle}
          items={destinationItemsWithImages}
        />

        {/* Section 9: Additional Costs Checklist (ComparisonTable) */}
        <ComparisonTable data={data.additionalCostsTable} />

        {/* Section 10: Total Cost Estimation Framework (StepByStepGuide) */}
        <StepByStepGuide
          title={data.estimationFormulaSteps.title}
          subtitle={data.estimationFormulaSteps.subtitle}
          steps={data.estimationFormulaSteps.steps}
        />

        {/* Section 11: Celebrity vs Other Cruise Lines (ComparisonTable) */}
        <ComparisonTable data={data.brandComparisonTable} />

        {/* Section 12: Deals & Booking Timing (StepByStepGuide) */}
        <StepByStepGuide
          title={data.dealsAndTimingSteps.title}
          subtitle={data.dealsAndTimingSteps.subtitle}
          steps={data.dealsAndTimingSteps.steps}
        />

        {/* Interlude CTA 2 */}
        <CenterCTA
          theme="dark"
          title="Compare Sailings with an Advisor"
          description="Speak with our luxury cruise advisors to compare ship classes, stateroom categories, and All Included packages for your sailing."
          buttonText="Request a Consultation"
          buttonLink="/contact"
          image={SantoriniImg}
        />

        {/* Section 13: Angela Hughes Authority Box & Credentials (ExpertCredentials) */}
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.badge}
          experienceBadge={data.angelaHughes.experienceBadge}
          authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
          authoritySubtitle={data.angelaHughes.authoritySubtitle}
          paragraphs={data.angelaHughes.paragraphs}
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          image={AboutImage}
          ctaText={data.angelaHughes.ctaText}
          ctaLink="/contact"
        />

        {/* Section 14: Frequently Asked Questions (FAQAccordion) */}
        <FAQAccordion data={data.faq} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          title="Plan Your Celebrity Cruise"
          description="Speak with Trips & Ships Luxury Travel about your preferred destination, travel dates, stateroom and overall budget."
          buttonText="Plan Your Celebrity Cruise"
          buttonLink="/contact"
          image={AlaskaEdgeImg}
        />
      </div>
    </div>
  );
}
