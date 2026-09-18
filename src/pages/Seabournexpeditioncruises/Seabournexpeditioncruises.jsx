import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
// import HeroBgImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import QuickAnswerImg from "../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg";
// import VentureImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import PursuitImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import AntarcticaDestImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import ArcticDestImg from "../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg";
// import AlaskaDestImg from "../../assets/ExploraJourneysvsSeabourn/Auckland-skyline-in-New-Zealand.jpg";
// import KimberleyDestImg from "../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg";
// import AntarcticaWildlifeImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import ArcticWildlifeImg from "../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg";
// import AlaskaWildlifeImg from "../../assets/ExploraJourneysvsSeabourn/Auckland-skyline-in-New-Zealand.jpg";
// import KimberleyWildlifeImg from "../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg";
// import BestTimeAntarcticaImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import BestTimeArcticImg from "../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg";
// import BestTimeAlaskaImg from "../../assets/ExploraJourneysvsSeabourn/Auckland-skyline-in-New-Zealand.jpg";
// import BestTimeKimberleyImg from "../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg";
// import EquipmentImg1 from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import EquipmentImg2 from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import DiningImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import PhysicalActivityImg from "../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg";
// import FamilyImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import CouplesImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import SoloImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
import data from "./data.json";

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
        // backgroundImage={HeroBgImg}
        primaryCtaText="Start Planning Your Expedition"
        primaryCtaLink="/contact"
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
          // image={QuickAnswerImg}
        />

        {/* Section 3: Seabourn Expedition Ships */}
        <CabinFeatureGrid
          data={data.expeditionShips}
          // image1={VentureImg}
          // image2={PursuitImg}
        />

        {/* Section 4: Where Do Seabourn Expedition Cruises Go? */}
        <TravelerProfileTabs
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          profiles={data.destinations.profiles}
        />

        {/* Section 5: Seabourn Venture vs. Seabourn Pursuit */}
        <ComparisonTable data={data.ventureVsPursuit} />

        {/* Interlude CTA 1 */}
        <CenterCTA
          theme="dark"
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
            // image: [AntarcticaWildlifeImg, ArcticWildlifeImg, AlaskaWildlifeImg, KimberleyWildlifeImg][idx]
          }))}
        />

        {/* Interlude CTA 2 */}
        <CenterCTA
          theme="dark"
          eyebrow="Remote & Rare"
          title="Ready to Explore Antarctica or the Arctic?"
          description="Let's compare Seabourn Venture and Seabourn Pursuit sailings to find the itinerary and suite category that fits your expedition goals."
          buttonText="Explore Expedition Departures"
          buttonLink="/contact"
        />

        {/* Section 10: Seabourn Expedition Equipment */}
        <CabinFeatureGrid
          data={data.equipment}
          // image1={EquipmentImg1}
          // image2={EquipmentImg2}
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
          // image={DiningImg}
        />

        {/* Section 13: Expedition Team, Lectures & Photography */}
        <ThreeColumnGrid
          title={data.teamAndLectures.title}
          subtitle={data.teamAndLectures.subtitle}
          columns={data.teamAndLectures.columns}
        />

        {/* Interlude CTA 3 */}
        <CenterCTA
          theme="dark"
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
          // images={[PhysicalActivityImg, PhysicalActivityImg]}
        />

        {/* Section 17: Are Seabourn Expedition Cruises Family-Friendly? */}
        <EditorialFeatureShowcase
          title={data.familyFriendly.title}
          subtitle={data.familyFriendly.subtitle}
          features={data.familyFriendly.features}
          // image={FamilyImg}
        />

        {/* Interlude CTA 4 */}
        <CenterCTA
          theme="dark"
          eyebrow="Pack Your Binoculars"
          title="Let's Find Your Ideal Suite & Sailing"
          description="From Veranda Suites to premium categories, we'll help you choose the right accommodation and itinerary for your expedition."
          buttonText="Talk to an Expedition Specialist"
          buttonLink="/contact"
        />

        {/* Section 18: Couples & Solo Travelers on Seabourn Expeditions */}
        <CabinFeatureGrid
          data={data.couplesAndSolo}
          // image1={CouplesImg}
          // image2={SoloImg}
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
            // image: [BestTimeAntarcticaImg, BestTimeArcticImg, BestTimeAlaskaImg, BestTimeKimberleyImg][idx]
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
        <ExpertCredentials image={AboutImage} />

        {/* Section 27: Frequently Asked Questions (18 FAQs) */}
        <FAQAccordion data={data.faq} />

        {/* Section 28: Final Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="light"
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