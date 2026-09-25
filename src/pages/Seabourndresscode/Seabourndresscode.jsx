import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// Images from SeabournDressCode (SEO Optimized)
import HeroBgImg from "../../assets/SeabournDressCode/seabourn-dress-code-packing-guide-luxury-cruises.jpg";
import DaytimeTopsImg from "../../assets/SeabournDressCode/seabourn-daytime-attire-polo-shirts-blouses-tops.jpg";
import DaytimeBottomsImg from "../../assets/SeabournDressCode/seabourn-daytime-casual-shorts-jeans-chinos.jpg";
import DaytimeFootwearImg from "../../assets/SeabournDressCode/seabourn-cruise-footwear-comfortable-walking-shoes-sandals.jpg";
import PoolSpaImg from "../../assets/SeabournDressCode/seabourn-pool-spa-swimwear-resort-attire-guide.jpg";
import MenDaywearImg from "../../assets/SeabournDressCode/seabourn-men-daywear-essentials-cruise-packing.jpg";
import MenEveningImg from "../../assets/SeabournDressCode/seabourn-men-elegant-casual-evening-formal-attire.jpg";
import WomenDaywearImg from "../../assets/SeabournDressCode/seabourn-women-daywear-essentials-resort-wear.jpg";
import WomenEveningImg from "../../assets/SeabournDressCode/seabourn-women-evening-elegant-casual-formal-dresses.jpg";
import TuxedoImg from "../../assets/SeabournDressCode/seabourn-formal-night-tuxedo-suit-rules-guide.jpg";
import LaundryImg from "../../assets/SeabournDressCode/seabourn-onboard-complimentary-laundry-services.jpg";
import AshoreImg from "../../assets/SeabournDressCode/seabourn-shore-excursions-cultural-attire-guide.jpg";

// Destination Images (from SeabournCruises & CaribbeanCruisesExploraJourneys)
import DestMedImg from "../../assets/SeabournCruises/seabourn-mediterranean-cruise-amalfi-coast-italy.jpg";
import DestAlaskaImg from "../../assets/SeabournCruises/seabourn-alaska-inside-passage-glacier-wilderness-cruise.jpeg";
import DestAntarcticaImg from "../../assets/SeabournCruises/seabourn-antarctica-luxury-polar-expedition-cruise.webp";
import DestArcticImg from "../../assets/SeabournCruises/seabourn-arctic-northwest-passage-polar-expedition-cruise.webp";
import DestKimberleyImg from "../../assets/SeabournCruises/seabourn-kimberley-australia-coastal-wilderness-expedition.jpg";
import DestTropicsImg from "../../assets/CaribbeanCruisesExploraJourneys/roatan-western-caribbean-reef.jpg";
import DestWorldImg from "../../assets/SeabournCruises/seabourn-worldwide-destination-focused-itineraries.jpg";

// CTA Section Background Images (from SeabournCruises & SeabournExpeditionCruises)
import CtaPackImg from "../../assets/SeabournCruises/seabourn-in-suite-private-veranda-dining-service.jpg";
import CtaItineraryImg from "../../assets/SeabournExpeditionCruises/seabourn-expedition-cruises-ultra-luxury-adventure.jpg";
import CtaAdviceImg from "../../assets/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";
import CtaFinalImg from "../../assets/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import ComparisonTable from "../../components/ui/ComparisonTable";
import DualBrandComparisonTable from "../../components/ui/DualBrandComparisonTable";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import DestinationFlipCards from "../../components/ui/DestinationFlipCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import CardGrid from "../../components/ui/CardGrid";
import VideoEmbed from "../../components/ui/VideoEmbed";

const SeabournDressCodeGuide = () => {
  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Dress Code: What to Wear & What to Pack</title>
        <meta name="title" content="Seabourn Dress Code: What to Wear & What to Pack" />
        <meta
          name="description"
          content="What should you wear on a Seabourn cruise? See Seabourn's daytime, elegant casual and formal dress codes, plus destination-specific packing tips for Alaska, Antarctica, Europe and more."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/dress-code/" />
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
        backgroundImage={HeroBgImg}
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Section 1: Does Seabourn Have a Dress Code? */}
        <SimplePersonaCards
          title={data.threeCategories.title}
          subtitle={data.threeCategories.subtitle}
          personas={data.threeCategories.personas}
        />

        {/* Section 2: Quick Seabourn Dress Code Guide */}
        <ComparisonTable data={data.quickGuideTable} />

        {/* Section 3: Seabourn Daytime Dress Code */}
        <ThreeColumnGrid
          title={data.daytimeAttire.title}
          subtitle={data.daytimeAttire.subtitle}
          items={data.daytimeAttire.items.map((item, idx) => ({
            ...item,
            image: [DaytimeTopsImg, DaytimeBottomsImg, DaytimeFootwearImg][idx]
          }))}
        />

        {/* Section 4: What Should You Wear Around the Pool & Spa? */}
        <EditorialFeatureShowcase
          title={data.poolSpaWear.title}
          subtitle={data.poolSpaWear.subtitle}
          image={PoolSpaImg}
          features={data.poolSpaWear.features}
        />

        {/* Interlude CTA 1 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaPackImg}
          title="Not Sure What to Pack?"
          description="Let's go over your exact itinerary, ship and cabin category so you know precisely what to bring — from daytime casual to formal night."
          buttonText="Speak with a Specialist"
          buttonLink="/contact"
        />

        {/* Section 5: Seabourn Evening Dress Code (Elegant Casual) */}
        <SimplePersonaCards
          title={data.eveningAttire.title}
          subtitle={data.eveningAttire.subtitle}
          personas={data.eveningAttire.personas}
        />

        {/* Section 6: Jeans Policy & Formal Nights Across the Fleet */}
        <D-ualBrandComparisonTable
          title={data.jeansAndFormalNights.title}
          subtitle={data.jeansAndFormalNights.subtitle}
          headers={data.jeansAndFormalNights.headers}
          rows={data.jeansAndFormalNights.rows}
        />
 
        {/* Section 7: How Many Formal Nights Does Seabourn Have? */}
        <ComparisonTable data={data.formalNightsCount} />

        {/* Section 8: What Should Men & Women Pack for Seabourn? */}
        <ThreeColumnGrid
          title={data.menAndWomenPacking.title}
          subtitle={data.menAndWomenPacking.subtitle}
          items={data.menAndWomenPacking.items.map((item, idx) => ({
            ...item,
            image: [MenDaywearImg, MenEveningImg, WomenDaywearImg, WomenEveningImg][idx]
          }))}
        />

        {/* Video Showcase (Middle of Page) */}
        <VideoEmbed
          data={{
            youtubeId: "8arMg1a6ezo",
            title: "Experience Seabourn Luxury Cruising & Onboard Elegance",
            description: "Step onboard Seabourn to experience the relaxed luxury, daytime atmosphere, and elegant evening dining firsthand."
          }}
        />

        {/* Interlude CTA 2 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaItineraryImg}
          title="Sailing Somewhere Specific?"
          description="From Antarctica to the Mediterranean, we'll help you pack the right layers for your exact Seabourn itinerary."
          buttonText="Talk Through Your Itinerary"
          buttonLink="/contact"
        />

        {/* Section 9: Seabourn Packing List: Essentials & Carry-On Strategy */}
        <GenericChecklistCards
          title={data.essentialsAndCarryOn.title}
          subtitle={data.essentialsAndCarryOn.subtitle}
          cards={data.essentialsAndCarryOn.cards}
        />

        {/* Section 10: Capsule Wardrobe Strategy & Footwear Guide */}
        <StepByStepGuide
          title={data.capsuleAndFootwear.title}
          subtitle={data.capsuleAndFootwear.subtitle}
          steps={data.capsuleAndFootwear.steps}
        />

        {/* Section 11: Seabourn Dress Code by Destination */}
        <DestinationFlipCards
          title={data.destinationGuides.title}
          subtitle={data.destinationGuides.subtitle}
          items={data.destinationGuides.items.map((item, idx) => ({
            ...item,
            image: [
              DestMedImg,
              DestAlaskaImg,
              DestAntarcticaImg,
              DestArcticImg,
              DestKimberleyImg,
              DestTropicsImg,
              DestWorldImg
            ][idx]
          }))}
        />

        {/* Section 12: Formalwear Rules, Laundry & Going Ashore */}
        <ThreeColumnGrid
          title={data.tuxedoAndAshore.title}
          subtitle={data.tuxedoAndAshore.subtitle}
          items={data.tuxedoAndAshore.items.map((item, idx) => ({
            ...item,
            image: [TuxedoImg, LaundryImg, AshoreImg][idx]
          }))}
        />

        {/* Interlude CTA 3 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaAdviceImg}
          title="Let Us Help You Pack Right"
          description="Share your ship, cabin category and itinerary, and we'll walk you through exactly what belongs in your suitcase."
          buttonText="Get Personalized Packing Advice"
          buttonLink="/contact"
        />

        {/* Section 13: Reference Tables & Packing Mistakes to Avoid */}
        <ComparisonTable data={data.destinationPriorityTable} />
        <ComparisonTable data={data.packingMistakesTable} />

        {/* Section 14: Quick Dress Code & Packing Checklists */}
        <CardGrid
          title={data.quickChecklists.title}
          subtitle={data.quickChecklists.subtitle}
          columns={3}
          stagger={false}
          cards={data.quickChecklists.items.map((item, idx) => ({
            ...item,
            icon: ["Shirt", "Sparkles", "Luggage"][idx] || "CheckCircle2",
            bullets: item.features
          }))}
        />

        {/* Section 15: Angela Hughes Luxury Authority Box */}
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

        {/* Section 16: Frequently Asked Questions */}
        <FAQAccordion data={data.faq} />


        {/* Section 17: Final Answer / Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          image={CtaFinalImg}
          title="Start Planning Your Seabourn Cruise"
          description="For the best packing strategy, think: Daytime comfort + Elegant Casual evenings + destination-specific layers."
          buttonText="Plan Your Cruise With Angela"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default SeabournDressCodeGuide;