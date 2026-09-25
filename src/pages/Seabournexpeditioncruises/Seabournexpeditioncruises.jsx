import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// Images from SeabournExpeditionCruises
import HeroBgImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-cruises-ultra-luxury-adventure.jpg";
import QuickAnswerImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-cruises-worth-it-value-review.jpg";
import VentureImg from "../../assets/SeabournExpeditionCruises/seabourn-venture-ultra-luxury-expedition-ship.jpg";
import PursuitImg from "../../assets/SeabournExpeditionCruises/seabourn-pursuit-polar-luxury-expedition-ship.jpg";
import AntarcticaWildlifeImg from "../../assets/SeabournExpeditionCruises/seabourn-antarctica-wildlife-penguins-polar-expedition.jpg";
import ArcticWildlifeImg from "../../assets/SeabournExpeditionCruises/seabourn-arctic-svalbard-polar-bear-wildlife-expedition.jpg";
import AlaskaWildlifeImg from "../../assets/SeabournExpeditionCruises/seabourn-alaska-coastal-wildlife-whales-marine-life.jpg";
import KimberleyWildlifeImg from "../../assets/SeabournExpeditionCruises/seabourn-the-kimberley-australia-wildlife-expedition.jpg";
import EquipmentImg1 from "../../assets/SeabournExpeditionCruises/seabourn-expedition-equipment-zodiacs-submarines-kayaks.jpg";
import EquipmentImg2 from "../../assets/SeabournExpeditionCruises/seabourn-expedition-parka-boots-polar-gear-inclusions.jpg";
import DiningImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-fine-dining-culinary-experience.jpg";
import PhysicalActivityImg1 from "../../assets/SeabournExpeditionCruises/seabourn-expedition-customizable-physical-activity-levels.jpg";
import PhysicalActivityImg2 from "../../assets/SeabournExpeditionCruises/seabourn-expedition-mobility-accessibility-older-travelers.jpg";
import FamilyImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-cruises-multigenerational-family-travel.jpg";
import CouplesImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-cruises-couples-romantic-luxury.jpg";
import SoloImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-cruises-solo-single-travelers.jpg";
import BestTimeAntarcticaImg from "../../assets/SeabournExpeditionCruises/seabourn-antarctica-cruises-best-time-to-sail-season.jpg";
import BestTimeArcticImg from "../../assets/SeabournExpeditionCruises/seabourn-arctic-cruises-best-time-greenland-svalbard.jpg";
import BestTimeAlaskaImg from "../../assets/SeabournExpeditionCruises/seabourn-alaska-expedition-cruises-best-season-glaciers.jpg";
import BestTimeKimberleyImg from "../../assets/SeabournExpeditionCruises/seabourn-kimberley-expedition-cruises-best-time-waterfalls.jpg";

// Destination Profile Images (from SeabournCruises & SeabournShoreExcursions)
import DestAntarcticaImg from "../../assets/SeabournCruises/seabourn-antarctica-luxury-polar-expedition-cruise.webp";
import DestArcticImg from "../../assets/SeabournCruises/seabourn-arctic-northwest-passage-polar-expedition-cruise.webp";
import DestAlaskaImg from "../../assets/SeabournShoreExcursions/seabourn-alaska-glacier-wilderness-shore-excursion.jpeg";
import DestKimberleyImg from "../../assets/SeabournCruises/seabourn-kimberley-australia-coastal-wilderness-expedition.jpg";

// CTA Section Background Images (from SeabournCruises & WhatIncludedSeabournCruise)
import CtaExpeditionShipImg from "../../assets/SeabournCruises/seabourn-purpose-built-ultra-luxury-expedition-cruises.jpg";
import CtaPolarGlacierImg from "../../assets/SeabournCruises/seabourn-alaska-inside-passage-glacier-wilderness-cruise.jpeg";
import CtaZodiacKayakImg from "../../assets/SeabournCruises/ventures-by-seabourn-guided-zodiac-kayak-expeditions.jpg";
import CtaVerandaSuiteImg from "../../assets/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
import CtaAllInclusiveValueImg from "../../assets/WhatIncludedSeabournCruise/is-seabourn-all-inclusive-luxury-cruise-experience.jpg";
import CtaPlanningExpertImg from "../../assets/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CabinFeatureGrid from "../../components/ui/CabinFeatureGrid";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import ComparisonTable from "../../components/ui/ComparisonTable";
import CenterCTA from "../../components/ui/CenterCTA";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import CardGrid from "../../components/ui/CardGrid";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import ScenicGallery from "../../components/ui/ScenicGallery";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import BentoGlassmorphismGrid from "../../components/ui/BentoGlassmorphismGrid";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import ProsConsCards from "../../components/ui/ProsConsCards";
import MistakesGrid from "../../components/ui/MistakesGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import VideoEmbed from "../../components/ui/VideoEmbed";

const SeabournExpeditionCruisesGuide = () => {
  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Expedition Cruises: Ships, Destinations & Guide</title>
        <meta name="title" content="Seabourn Expedition Cruises Guide: Ships, Destinations & Activities" />
        <meta
          name="description"
          content="Explore Seabourn expedition cruises to Antarctica, the Arctic, Alaska, Kimberley and remote destinations. Compare ships, activities, equipment, suites and inclusions."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/expeditions/" />
        <script type="application/ld+json">{JSON.stringify(data.schemaData)}</script>
      </Helmet>

      <Nav />

      {/* Section 1: Hero */}
      <ComparisonHero
        badge="ULTRA-LUXURY EXPEDITION GUIDE"
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs.join(" ")}
        backgroundImage={HeroBgImg}
        secondaryCtaText="Start Planning Your Expedition"
        secondaryCtaLink="/contact"
      />

      <div id="content" className="w-full">
        {/* Section 2: Are Seabourn Expedition Cruises Worth Considering? */}
        <EditorialIntroSection
          eyebrow={data.quickAnswer.eyebrow}
          title={data.quickAnswer.title}
          paragraphs={data.quickAnswer.paragraphs}
          highlights={data.quickAnswer.highlights}
          badgeTitle={data.quickAnswer.badgeTitle}
          badgeDescription={data.quickAnswer.badgeDescription}
          placeholderLabel={data.quickAnswer.placeholderLabel}
          image={QuickAnswerImg}
        />

        {/* Section 3: Seabourn Expedition Ships */}
        <CabinFeatureGrid
          data={data.expeditionShips}
          image1={VentureImg}
          image2={PursuitImg}
        />

        {/* Section 4: Where Do Seabourn Expedition Cruises Go? */}
        <TravelerProfileTabs
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          profiles={data.destinations.profiles.map((profile, idx) => ({
            ...profile,
            image: [DestAntarcticaImg, DestArcticImg, DestAlaskaImg, DestKimberleyImg][idx]
          }))}
        />

        {/* Section 5: Seabourn Venture vs. Seabourn Pursuit */}
        <ComparisonTable data={data.ventureVsPursuit} />

        {/* Interlude CTA 1 */}
        <CenterCTA
          theme="dark"
          image={CtaExpeditionShipImg}
          eyebrow="Your Next Adventure"
          title="Where in the World Will You Explore?"
          description="From Antarctica to the Arctic and the Kimberley, let us help you plan the perfect Seabourn expedition itinerary."
          buttonText="Start Planning Your Expedition"
          buttonLink="/contact"
        />

        {/* Section 6: A Typical Day in Antarctica */}
        <StepByStepGuide
          title={data.antarcticDay.title}
          subtitle={data.antarcticDay.subtitle}
          steps={data.antarcticDay.steps}
        />

        {/* Section 7: Seabourn Expedition Activities (8 Cards) */}
        <CardGrid
          title={data.activities.title}
          subtitle={data.activities.subtitle}
          cards={data.activities.cards}
          columns={4}
        />

        {/* Section 8: Zodiacs, Kayaking & Hiking (Ways to Explore) */}
        <ThreeColumnGrid
          title={data.waysToExplore.title}
          subtitle={data.waysToExplore.subtitle}
          columns={data.waysToExplore.columns}
        />

        {/* Section 9: Wildlife Watching by Region */}
        <ScenicGallery
          title={data.wildlife.title}
          subtitle={data.wildlife.subtitle}
          items={data.wildlife.items.map((item, idx) => ({
            ...item,
            image: [AntarcticaWildlifeImg, ArcticWildlifeImg, AlaskaWildlifeImg, KimberleyWildlifeImg][idx]
          }))}
        />

        {/* Interlude CTA 2 */}
        <CenterCTA
          theme="dark"
          image={CtaPolarGlacierImg}
          eyebrow="Remote & Rare"
          title="Ready to Explore Antarctica or the Arctic?"
          description="Let's compare Seabourn Venture and Seabourn Pursuit sailings to find the itinerary and suite category that fits your expedition goals."
          buttonText="Explore Expedition Departures"
          buttonLink="/contact"
        />

        {/* Section 10: Seabourn Expedition Equipment */}
        <CabinFeatureGrid
          data={data.equipment}
          image1={EquipmentImg1}
          image2={EquipmentImg2}
        />

        {/* Section 11: Seabourn Expedition Suites */}
        <GenericChecklistCards
          title={data.suitesStrategy.title}
          subtitle={data.suitesStrategy.subtitle}
          cards={data.suitesStrategy.cards}
        />

        {/* Section 12: Seabourn Expedition Dining */}
        <EditorialFeatureShowcase
          title={data.dining.title}
          subtitle={data.dining.subtitle}
          features={data.dining.features}
          image={DiningImg}
        />

        {/* Section 13: Expedition Team, Lectures & Photography */}
        <ThreeColumnGrid
          title={data.teamAndLectures.title}
          subtitle={data.teamAndLectures.subtitle}
          columns={data.teamAndLectures.columns}
        />

        {/* Video Showcase (Middle of Page) */}
        <VideoEmbed
          data={{
            youtubeId: "n9bIkaCDxIo",
            title: "Experience Seabourn Ultra-Luxury Expedition Cruises",
            description: "Immerse yourself in world-class polar and remote expedition cruising aboard Seabourn Venture and Seabourn Pursuit."
          }}
        />

        {/* Interlude CTA 3 */}
        <CenterCTA
          theme="dark"
          image={CtaZodiacKayakImg}
          eyebrow="Expert-Led Journeys"
          title="Learn from the Best in the Field"
          description="Our specialists help you get the most out of every Zodiac excursion, hike and lecture. Let's find your ideal voyage."
          buttonText="Connect with a Specialist"
          buttonLink="/contact"
        />

        {/* Section 14: Seabourn Expedition Inclusions */}
        <SimplePersonaCards
          title={data.inclusions.title}
          subtitle={data.inclusions.subtitle}
          personas={data.inclusions.personas}
        />

        {/* Section 15: Pros and Cons of Seabourn Expedition Cruises */}
        <ProsConsCards
          title={data.prosCons.title}
          prosTitle={data.prosCons.prosTitle}
          consTitle={data.prosCons.consTitle}
          bestFor={data.prosCons.bestFor}
          notBestFor={data.prosCons.notBestFor}
          bottomNote={data.prosCons.bottomNote}
        />

        {/* Section 16: How Physically Active Are Seabourn Expeditions? */}
        <LuxuryZigZagShowcase
          title={data.physicalActivity.title}
          subtitle={data.physicalActivity.subtitle}
          items={data.physicalActivity.items}
          images={[PhysicalActivityImg1, PhysicalActivityImg2]}
        />

        {/* Section 17: Are Seabourn Expedition Cruises Family-Friendly? */}
        <EditorialFeatureShowcase
          title={data.familyFriendly.title}
          subtitle={data.familyFriendly.subtitle}
          features={data.familyFriendly.features}
          image={FamilyImg}
        />

        {/* Interlude CTA 4 */}
        <CenterCTA
          theme="dark"
          image={CtaVerandaSuiteImg}
          eyebrow="Pack Your Binoculars"
          title="Let's Find Your Ideal Suite & Sailing"
          description="From Veranda Suites to premium categories, we'll help you choose the right accommodation and itinerary for your expedition."
          buttonText="Talk to an Expedition Specialist"
          buttonLink="/contact"
        />

        {/* Section 18: Couples & Solo Travelers on Seabourn Expeditions */}
        <CabinFeatureGrid
          data={data.couplesAndSolo}
          image1={CouplesImg}
          image2={SoloImg}
        />

        {/* Section 19: Seabourn Expedition vs Traditional Seabourn Cruise */}
        <ComparisonTable data={data.expVsTraditional} />

        {/* Section 20: Seabourn Expedition vs Other Luxury Expedition Lines */}
        <SimplePersonaCards
          title={data.vsOtherLines.title}
          subtitle={data.vsOtherLines.subtitle}
          personas={data.vsOtherLines.personas}
        />

        {/* Section 21: How Much Do Seabourn Expedition Cruises Cost? */}
        <GenericChecklistCards
          title={data.costFactors.title}
          subtitle={data.costFactors.subtitle}
          cards={data.costFactors.cards}
        />

        {/* Interlude CTA 5 */}
        <CenterCTA
          theme="dark"
          image={CtaAllInclusiveValueImg}
          eyebrow="Value & Luxury"
          title="Evaluate Inclusions for the Best Value"
          description="Let's compare suite rates, expedition activities and exclusive promotions to find the best value for your Seabourn cruise."
          buttonText="Compare Cruise Rates"
          buttonLink="/contact"
        />

        {/* Section 22: What to Pack for a Seabourn Expedition (8 Cards) */}
        <CardGrid
          title={data.packing.title}
          subtitle={data.packing.subtitle}
          cards={data.packing.cards}
          columns={4}
        />

        {/* Section 23: Best Time for Seabourn Expedition Cruises */}
        <BentoGlassmorphismGrid
          title={data.bestTime.title}
          subtitle={data.bestTime.subtitle}
          bentoItems={data.bestTime.bentoItems.map((item, idx) => ({
            ...item,
            image: [BestTimeAntarcticaImg, BestTimeArcticImg, BestTimeAlaskaImg, BestTimeKimberleyImg][idx]
          }))}
        />

        {/* Section 24: Who Should Book a Seabourn Expedition Cruise? */}
        <SimplePersonaCards
          title={data.whoShouldBook.title}
          subtitle={data.whoShouldBook.subtitle}
          personas={data.whoShouldBook.personas}
        />

        {/* Section 25: Who Should Skip a Seabourn Expedition? */}
        <MistakesGrid
          title={data.whoShouldSkip.title}
          items={data.whoShouldSkip.items}
        />

        {/* Section 26: Angela Hughes Authority Box */}
        <ExpertCredentials
          image={AboutImage}
          title="Seabourn Ultra-Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel"
          badge="SEABOURN CRUISE SPECIALIST"
          experienceBadge="40+ YEARS EXPERIENCE"
          authorityBoxTitle="ANGELA HUGHES LUXURY AUTHORITY"
          authoritySubtitle="Worldwide Luxury Cruise & Polar Expedition Specialist"
          ctaText="Consult With Angela Hughes"
          ctaLink="/contact"
        />

        {/* Section 27: Frequently Asked Questions (18 FAQs) */}
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Expert answers to the most common questions about Seabourn expedition cruises.",
            questions: data.faq
          }}
        />

        {/* Section 28: Final Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          image={CtaPlanningExpertImg}
          title="Start Planning Your Expedition Cruise"
          description="Compare luxury expedition suites, polar departures, Kimberley seasons, and exclusive promotional offers."
          buttonText="Plan Your Expedition With Angela"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default SeabournExpeditionCruisesGuide;