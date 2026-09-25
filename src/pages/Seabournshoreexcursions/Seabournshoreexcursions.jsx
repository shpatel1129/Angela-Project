import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// Excursion and Destination Images from SeabournShoreExcursions
import HeroImg from "../../assets/SeabournShoreExcursions/seabourn-shore-excursions-luxury-cruise-tours.jpg";
import SightseeingToursImg from "../../assets/SeabournShoreExcursions/seabourn-guided-sightseeing-tours-excursions.jpg";
import CulturalExcursionsImg from "../../assets/SeabournShoreExcursions/seabourn-cultural-historic-shore-excursions.jpg";
import FoodAndWineImg from "../../assets/SeabournShoreExcursions/seabourn-food-and-wine-culinary-shore-tours.jpg";
import ZodiacExcursionsImg from "../../assets/SeabournShoreExcursions/seabourn-expedition-zodiac-cruising-excursions.jpg";
import ShoreLandingsImg from "../../assets/SeabournShoreExcursions/seabourn-expedition-wet-and-dry-shore-landings.jpg";
import KayakingImg from "../../assets/SeabournShoreExcursions/seabourn-ventures-guided-kayak-excursions.jpg";
import AntarcticaImg from "../../assets/SeabournShoreExcursions/seabourn-antarctica-expedition-shore-excursion.jpg";
import AlaskaImg from "../../assets/SeabournShoreExcursions/seabourn-alaska-glacier-wilderness-shore-excursion.jpeg";
import MedImg from "../../assets/SeabournShoreExcursions/seabourn-mediterranean-coastal-shore-excursions.png";
import NorthEuropeImg from "../../assets/SeabournShoreExcursions/seabourn-norwegian-fjords-northern-europe-shore-excursions.jpg";
import AccessibilityImg from "../../assets/SeabournShoreExcursions/seabourn-accessible-shore-excursions-wheelchair-mobility.jpg";

// CTA Section Background Images (from SeabournCruises)
import CtaShoreExcursionsImg from "../../assets/SeabournCruises/seabourn-curated-shore-excursions-unesco-tours.jpg";
import CtaExpeditionVenturesImg from "../../assets/SeabournCruises/ventures-by-seabourn-guided-zodiac-kayak-expeditions.jpg";
import CtaPortDayAmalfiImg from "../../assets/SeabournCruises/seabourn-mediterranean-cruise-amalfi-coast-italy.jpg";
import CtaPlanningQuoteImg from "../../assets/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import DestinationFlipCards from "../../components/ui/DestinationFlipCards";
import ProsConsCards from "../../components/ui/ProsConsCards";
import FeatureGrid from "../../components/ui/FeatureGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import VideoEmbed from "../../components/ui/VideoEmbed";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

const SeabournShoreExcursionsGuide = () => {
  const traditionalExcursionImages = [
    SightseeingToursImg,
    CulturalExcursionsImg,
    FoodAndWineImg,
  ];
  const traditionalExcursionsWithImages = data.traditionalExcursions.items.map((item, idx) => ({
    ...item,
    image: traditionalExcursionImages[idx] || SightseeingToursImg,
  }));

  const expeditionActivityImages = [
    ZodiacExcursionsImg,
    ShoreLandingsImg,
    KayakingImg,
  ];
  const expeditionActivitiesWithImages = data.expeditionActivities.items.map((item, idx) => ({
    ...item,
    image: expeditionActivityImages[idx] || ZodiacExcursionsImg,
  }));

  const destinationImages = [
    AntarcticaImg,
    AlaskaImg,
    MedImg,
    NorthEuropeImg,
  ];
  const destinationItemsWithImages = data.destinations.items.map((item, idx) => ({
    ...item,
    image: destinationImages[idx] || MedImg,
  }));

  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Shore Excursions: Ventures, Tours & Activities</title>
        <meta name="title" content="Seabourn Shore Excursions Guide: Tours, Ventures & Activities" />
        <meta
          name="description"
          content="Explore Seabourn shore excursions, including traditional tours, Ventures by Seabourn, expedition activities, private experiences, wildlife adventures and planning tips."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/shore-excursions/" />
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
        backgroundImage={HeroImg}
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Section 1: What Are Seabourn Shore Excursions? */}
        <GenericChecklistCards
          title={data.quickAnswer.title}
          subtitle={data.quickAnswer.subtitle}
          cards={data.quickAnswer.cards}
        />

        {/* Section 2: The Three Main Types of Seabourn Excursions */}
        <SimplePersonaCards
          title={data.threeTypes.title}
          subtitle={data.threeTypes.subtitle}
          personas={data.threeTypes.personas}
        />

        {/* Section 3: Traditional Seabourn Shore Excursions */}
        <ThreeColumnGrid
          title={data.traditionalExcursions.title}
          subtitle={data.traditionalExcursions.subtitle}
          items={traditionalExcursionsWithImages}
        />

        {/* Section 4: What Are Ventures by Seabourn? */}
        <GenericChecklistCards
          title={data.venturesBySeabourn.title}
          subtitle={data.venturesBySeabourn.subtitle}
          cards={data.venturesBySeabourn.cards}
        />

        {/* Interlude CTA 1 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaShoreExcursionsImg}
          title="Let's Find Your Perfect Shore Excursion"
          description="From sightseeing and culinary tours to Zodiac expeditions, we'll help you choose excursions that match your interests and activity level in every port."
          buttonText="Plan My Shore Excursions"
          buttonLink="/contact"
        />

        {/* Section 5: Seabourn Expedition Activities */}
        <ThreeColumnGrid
          title={data.expeditionActivities.title}
          subtitle={data.expeditionActivities.subtitle}
          items={expeditionActivitiesWithImages}
        />

        {/* Section 6: Seabourn Excursions by Destination */}
        <DestinationFlipCards
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          items={destinationItemsWithImages}
        />

        {/* Section 7: How Long Are Seabourn Shore Excursions? & Activity Levels */}
        <GenericChecklistCards
          title={data.durationsAndActivity.title}
          subtitle={data.durationsAndActivity.subtitle}
          cards={data.durationsAndActivity.cards}
        />

        {/* Section 8: Choosing Excursions by Traveler Type */}
        <SimplePersonaCards
          title={data.travelerTypes.title}
          subtitle={data.travelerTypes.subtitle}
          personas={data.travelerTypes.personas}
        />

        {/* Interlude CTA 2 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaExpeditionVenturesImg}
          title="Ready for an Expedition Adventure?"
          description="Whether it's Zodiac cruising in Antarctica or glacier viewing in Alaska, let's design a shore experience that matches your sense of adventure."
          buttonText="Design My Excursion Plan"
          buttonLink="/contact"
        />

        {/* Section 9: Are Seabourn Shore Excursions Worth the Money? */}
        <SimplePersonaCards
          title={data.worthTheMoney.title}
          subtitle={data.worthTheMoney.subtitle}
          personas={data.worthTheMoney.personas}
        />

        {/* Section 10: Book Seabourn Excursions vs. Independent Exploration */}
        <ProsConsCards
          type="compare"
          title={data.bookVsIndependent.title}
          bestFor={data.bookVsIndependent.bestFor}
          notBestFor={data.bookVsIndependent.notBestFor}
          prosTitle={data.bookVsIndependent.prosTitle}
          consTitle={data.bookVsIndependent.consTitle}
          bottomNote={data.bookVsIndependent.bottomNote}
        />

        {/* Video Showcase (Middle of Page) */}
        <VideoEmbed
          data={{
            youtubeId: "1BcXv4IFBCI",
            title: "Experience Seabourn Shore Excursions & Ventures",
            description: "Watch how Seabourn elevates destination immersion through guided cultural excursions, active Ventures, and pristine Zodiac expedition landings."
          }}
        />

        {/* Section 11: How to Choose the Best Seabourn Shore Excursion */}
        <StepByStepGuide
          title={data.howToChoose.title}
          subtitle={data.howToChoose.subtitle}
          steps={data.howToChoose.steps}
        />

        {/* Section 12: Seabourn Excursion Planning Strategy */}
        <GenericChecklistCards
          title={data.planningStrategy.title}
          subtitle={data.planningStrategy.subtitle}
          cards={data.planningStrategy.cards}
        />

        {/* Interlude CTA 3 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaPortDayAmalfiImg}
          title="Let's Build Your Perfect Port Day"
          description="From culinary tours to Zodiac wildlife cruises, we'll match every port to the experience that fits your travel goals."
          buttonText="Speak with a Specialist"
          buttonLink="/contact"
        />

        {/* Section 13: Seabourn Excursion Pros and Cons */}
        <ProsConsCards
          title={data.prosAndCons.title}
          bestFor={data.prosAndCons.bestFor}
          notBestFor={data.prosAndCons.notBestFor}
          prosTitle={data.prosAndCons.prosTitle}
          consTitle={data.prosAndCons.consTitle}
          bottomNote={data.prosAndCons.bottomNote}
        />

        {/* Section 14: What to Wear, Pack & Bring on Shore Excursions */}
        <GenericChecklistCards
          title={data.packingAndAttire.title}
          subtitle={data.packingAndAttire.subtitle}
          cards={data.packingAndAttire.cards}
        />

        {/* Section 15: Seabourn Excursions and Accessibility */}
        <EditorialFeatureShowcase
          title={data.accessibility.title}
          subtitle={data.accessibility.subtitle}
          image={AccessibilityImg}
          features={data.accessibility.features}
        />

        {/* Section 16: Traditional Shore Excursions vs. Ventures by Seabourn */}
        <ComparisonTable data={data.traditionalVsVentures} />

        {/* Section 17: Traditional Shore Excursions vs. Expedition Activities */}
        <FeatureGrid
          title={data.traditionalVsExpedition.title}
          subtitle={data.traditionalVsExpedition.subtitle}
          features={data.traditionalVsExpedition.features}
        />

        {/* Section 18: Angela Hughes Authority Box */}
        <ExpertCredentials
          image={AboutImage}
          title="Seabourn Ultra-Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel"
          badge="SEABOURN CRUISE SPECIALIST"
          experienceBadge="40+ YEARS EXPERIENCE"
          authorityBoxTitle="ANGELA HUGHES LUXURY AUTHORITY"
          authoritySubtitle="Worldwide Luxury Cruise, Safari & Shore Excursion Specialist"
          ctaText="Consult With Angela Hughes"
          ctaLink="/contact"
        />

        {/* Section 19: Frequently Asked Questions */}
        <FAQAccordion data={data.faq} />

        {/* Section 20: Final Verdict & Conclusion */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          image={CtaPlanningQuoteImg}
          title="Start Planning Your Seabourn Shore Excursions"
          description="Balance iconic sightseeing with active Ventures and expedition landings with personalized guidance from Angela Hughes."
          buttonText="Plan Your Cruise With Angela"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default SeabournShoreExcursionsGuide;