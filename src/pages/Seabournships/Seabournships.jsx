import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// Assets - Seabourn Ships Fleet & Lifestyle Images
import HeroShipImg from "../../assets/SeabournShips/seabourn-fleet-luxury-cruise-ships-overview.jpg";
import QuestShipImg from "../../assets/SeabournShips/seabourn-quest-luxury-ocean-cruise-ship.jpg";
import EncoreShipImg from "../../assets/SeabournShips/seabourn-encore-modern-luxury-ocean-ship.jpg";
import OvationShipImg from "../../assets/SeabournShips/seabourn-ovation-ultra-luxury-sister-ship.jpg";
import VentureShipImg from "../../assets/SeabournShips/seabourn-venture-polar-class-expedition-ship.jpg";
import PursuitShipImg from "../../assets/SeabournShips/seabourn-pursuit-ultra-luxury-expedition-vessel.jpg";

// Ship Comparison Images
import QuestVsEncoreImg from "../../assets/SeabournShips/seabourn-quest-vs-seabourn-encore-ship-comparison.jpg";
import QuestVsOvationImg from "../../assets/SeabournShips/seabourn-quest-vs-seabourn-ovation-ship-comparison.jpg";
import EncoreVsOvationImg from "../../assets/SeabournShips/seabourn-encore-vs-seabourn-ovation-sister-ship-comparison.jpg";
import OceanVsExpeditionImg from "../../assets/SeabournShips/seabourn-ocean-vs-expedition-fleet-comparison.jpg";

// Suites, Dining & Onboard Lifestyle Images
import SuitesShowcaseImg from "../../assets/SeabournShips/seabourn-ships-luxury-oceanfront-suites-balcony.jpg";
import QuestDiningImg from "../../assets/SeabournShips/seabourn-quest-gourmet-dining-restaurant-experience.jpg";
import EncoreOvationDiningImg from "../../assets/SeabournShips/seabourn-encore-ovation-solis-specialty-dining.jpg";
import VenturePursuitDiningImg from "../../assets/SeabournShips/seabourn-venture-pursuit-expedition-fine-dining.jpg";
import SignatureCulinaryImg from "../../assets/SeabournShips/seabourn-signature-culinary-experiences-and-dining.jpg";

// Destination Images from SeabournCruises
import DestMedImg from "../../assets/SeabournCruises/seabourn-mediterranean-cruise-amalfi-coast-italy.jpg";
import DestAntarcticaImg from "../../assets/SeabournCruises/seabourn-antarctica-luxury-polar-expedition-cruise.webp";
import DestArcticImg from "../../assets/SeabournCruises/seabourn-arctic-northwest-passage-polar-expedition-cruise.webp";
import DestKimberleyImg from "../../assets/SeabournCruises/seabourn-kimberley-australia-coastal-wilderness-expedition.jpg";

// Onboard Amenities Images from other Seabourn Folders
import QuestAmenityImg from "../../assets/SeabournCruises/seabourn-conversations-onboard-expert-lectures-enrichment.jpg";
import EncoreAmenityImg from "../../assets/SeabournCruises/seabourn-mindful-living-wellness-spa-relaxation.jpg";
import OvationAmenityImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-ship-pool-deck-and-public-lounges.jpg";
import VentureAmenityImg from "../../assets/IsSeabournWorthPrice/seabourn-expedition-polar-zodiac-landings-remote-cruising.jpg";
import PursuitAmenityImg from "../../assets/WhatIncludedSeabournCruise/seabourn-expedition-zodiac-activities-included-excursions.jpg";

// CTA Interlude Background Images from other Seabourn folders
import Cta1VoyageImg from "../../assets/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
import Cta2LuxuryServiceImg from "../../assets/SeabournCruises/seabourn-intuitive-personalized-luxury-service.jpg";
import Cta3JourneyImg from "../../assets/WhatIncludedSeabournCruise/seabourn-luxury-cruise-ship-ocean-sailing-all-inclusive.jpg";

// Final CTA Image from SeabournCruises
import FinalCtaImg from "../../assets/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ElegantFleetShowcase from "../../components/ui/ElegantFleetShowcase";
import DualBrandComparisonTable from "../../components/ui/DualBrandComparisonTable";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import TabbedComparison from "../../components/ui/TabbedComparison";
import DestinationFlipCards from "../../components/ui/DestinationFlipCards";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import DynamicCulinaryShowcase from "../../components/ui/DynamicCulinaryShowcase";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import VideoEmbed from "../../components/ui/VideoEmbed";

const SeabournShipsGuide = () => {
  // Fleet Showcase with individual ship images
  const fleetImages = [
    QuestShipImg,
    EncoreShipImg,
    OvationShipImg,
    VentureShipImg,
    PursuitShipImg,
  ];
  const fleetWithImages = data.fleet.map((ship, idx) => ({
    ...ship,
    image: fleetImages[idx] || HeroShipImg,
  }));

  // Tabbed Ship vs Ship Comparisons with images
  const tabbedImages = [
    QuestVsEncoreImg,
    EncoreVsOvationImg,
    QuestVsOvationImg,
    OceanVsExpeditionImg,
  ];
  const competitorsWithImages = data.tabbedComparisons.competitors.map((comp, idx) => ({
    ...comp,
    image: tabbedImages[idx] || OceanVsExpeditionImg,
  }));

  // Destination flip cards with region-specific ship imagery
  const destinationImages = [
    DestMedImg,
    DestAntarcticaImg,
    DestArcticImg,
    DestKimberleyImg,
  ];
  const destinationItemsWithImages = data.destinationShowcase.items.map((item, idx) => ({
    ...item,
    image: destinationImages[idx] || HeroShipImg,
  }));

  // Dining showcase images
  const diningImages = [
    QuestDiningImg,
    EncoreOvationDiningImg,
    VenturePursuitDiningImg,
    SignatureCulinaryImg,
  ];

  // Amenities items with onboard imagery
  const amenityImages = [
    QuestAmenityImg,
    EncoreAmenityImg,
    OvationAmenityImg,
    VentureAmenityImg,
    PursuitAmenityImg,
  ];
  const amenitiesWithImages = data.amenities.items.map((item, idx) => ({
    ...item,
    image: amenityImages[idx] || QuestAmenityImg,
  }));

  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Ships: Complete Fleet Guide & Ship Comparison</title>
        <meta name="title" content="Seabourn Ships Guide: Quest, Encore, Ovation, Venture & Pursuit" />
        <meta
          name="description"
          content="Compare Seabourn ships including Quest, Encore, Ovation, Venture and Pursuit. Explore suites, dining, amenities, expedition features, size and which Seabourn ship is best for you."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/" />
        <script type="application/ld+json">{JSON.stringify(data.schemaData)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        badge={data.hero.badge}
        backgroundImage={HeroShipImg}
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Section 1: Quick Seabourn Ship Comparison Table */}
        <ComparisonTable data={data.quickCompareTable} />

        {/* Section 2: Which Seabourn Ship Is Best? (SimplePersonaCards) */}
        <SimplePersonaCards
          title={data.whichBest.title}
          subtitle={data.whichBest.subtitle}
          personas={data.whichBest.personas}
        />

        {/* Section 3: The Seabourn Fleet in Detail */}
        <ElegantFleetShowcase
          title="The Seabourn Fleet in Detail"
          subtitle="Explore each ship's story, at-a-glance specs and who it's best suited for."
          ships={fleetWithImages}
        />

        {/* Section 4: Seabourn Venture vs Seabourn Pursuit (Expedition Twins) */}
        <DualBrandComparisonTable
          title={data.ventureVsPursuit.title}
          subtitle={data.ventureVsPursuit.subtitle}
          headers={data.ventureVsPursuit.headers}
          rows={data.ventureVsPursuit.rows}
        />

        {/* Interlude CTA 1 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Ready to Plan Your Seabourn Voyage?"
          description="Speak with our luxury travel advisors to design your perfect itinerary across the Seabourn fleet."
          buttonText="Contact an Advisor"
          buttonLink="/contact"
          image={Cta1VoyageImg}
        />

        {/* Section 5: Ship vs Ship Tabbed Comparisons */}
        <TabbedComparison
          title={data.tabbedComparisons.title}
          mainBrand={{ name: "Seabourn" }}
          competitors={competitorsWithImages}
          leftLabel="Strengths"
          rightLabel="Strengths"
        />

        {/* Section 6: Which Seabourn Ship Is Best for Your Destination? */}
        <DestinationFlipCards
          title={data.destinationShowcase.title}
          subtitle={data.destinationShowcase.subtitle}
          items={destinationItemsWithImages}
        />

        {/* Section 7: Which Seabourn Ship Has the Best Suites? */}
        <EditorialFeatureShowcase
          title={data.suitesShowcase.title}
          subtitle={data.suitesShowcase.subtitle}
          image={SuitesShowcaseImg}
          features={data.suitesShowcase.features}
        />

        {/* Section 8: Seabourn Ships and Dining */}
        <DynamicCulinaryShowcase
          title={data.dining.title}
          subtitle={data.dining.subtitle}
          items={data.dining.items}
          images={diningImages}
        />

        {/* Video Showcase */}
        <VideoEmbed
          data={{
            youtubeId: "OI9mYBY6lG0",
            title: "Explore Seabourn Luxury Fleet & Onboard Experience",
            description: "Step onboard Seabourn's ultra-luxury ocean and expedition ships to experience the refined atmosphere, all-suite oceanfront accommodations, and world-class service."
          }}
        />

        {/* Interlude CTA 2 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Experience Seabourn's Signature Luxury"
          description="Let Angela Hughes and our dedicated luxury cruise specialists curate your suite, dining, and shore excursions."
          buttonText="Get in Touch"
          buttonLink="/contact"
          image={Cta2LuxuryServiceImg}
        />

        {/* Section 9: Seabourn Ships and Onboard Amenities */}
        <ThreeColumnGrid
          title={data.amenities.title}
          subtitle={data.amenities.subtitle}
          items={amenitiesWithImages}
        />

        {/* Section 10: Which Seabourn Ship Has the Best Atmosphere? */}
        <SimplePersonaCards
          title={data.atmosphereAwards.title}
          subtitle={data.atmosphereAwards.subtitle}
          personas={data.atmosphereAwards.personas}
        />

        {/* Section 11: Seabourn Fleet Decision Table */}
        <ComparisonTable data={data.decisionTable} />

        {/* Section 12: 7 Things to Consider Before Choosing a Seabourn Ship */}
        <StepByStepGuide
          title={data.considerSteps.title}
          subtitle={data.considerSteps.subtitle}
          steps={data.considerSteps.steps}
        />

        {/* Interlude CTA 3 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Start Your Seabourn Journey"
          description="Receive personalized recommendations, VIP amenities, and expert ship selection guidance."
          buttonText="Request a Consultation"
          buttonLink="/contact"
          image={Cta3JourneyImg}
        />

        {/* Section 13: Angela Hughes Authority Box & Credentials */}
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

        {/* Section 14: Frequently Asked Questions */}
        <FAQAccordion data={data.faq} />

        {/* Section 15: Our Seabourn Ship Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          title="Start Planning Your Seabourn Cruise"
          description="Choose the Seabourn itinerary first, then choose the ship and suite that make that itinerary exceptional."
          buttonText="Plan Your Cruise With Angela"
          buttonLink="/contact"
          image={FinalCtaImg}
        />
      </div>
    </div>
  );
};

export default SeabournShipsGuide;