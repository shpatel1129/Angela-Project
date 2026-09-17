import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
// import RoomServiceImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import FamiliesDiningImg from "../../assets/ExploraJourneysvsSeabourn/SeabournDining.jpg";
// import SoloDiningImg from "../../assets/ExploraJourneysvsSeabourn/SeabournPlace.jpg";
// import CouplesDiningImg from "../../assets/ExploraJourneysvsSeabourn/OnBoard_AfternoonTea.jpg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ProsConsCards from "../../components/ui/ProsConsCards";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";

const SeabournDiningGuide = () => {
  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Dining Guide: Restaurants, Menus & Dining</title>
        <meta name="title" content="Seabourn Dining Guide: Restaurants, Food & Room Service" />
        <meta
          name="description"
          content="Explore Seabourn dining, including restaurants, complimentary meals, open seating, room service, specialty dining, drinks, dietary needs and what to expect onboard."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/dining/" />
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
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Section 1: Is Dining Included on Seabourn? */}
        <GenericChecklistCards
          title={data.isIncluded.title}
          subtitle={data.isIncluded.subtitle}
          cards={data.isIncluded.cards}
        />

        {/* Section 2: Seabourn Dining at a Glance */}
        <ComparisonTable data={data.glanceTable} />

        {/* Section 3: The Seabourn Dining Venues */}
        <ThreeColumnGrid
          title={data.venues.title}
          subtitle={data.venues.subtitle}
          items={data.venues.items}
        />

        {/* Section 4: Seabourn Breakfast, Lunch & Dinner */}
        <GenericChecklistCards
          title={data.mealsOverview.title}
          subtitle={data.mealsOverview.subtitle}
          cards={data.mealsOverview.cards}
        />

        {/* Interlude CTA 1 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Reserve Your Favorite Seabourn Restaurant Early"
          description="Popular specialty venues can fill up fast. Let us help you plan your dining reservations before you set sail."
          buttonText="Start Planning Your Cruise"
          buttonLink="/contact"
        />

        {/* Section 5: Seating, Company & Reservations */}
        <SimplePersonaCards
          title={data.seatingAndCompany.title}
          subtitle={data.seatingAndCompany.subtitle}
          personas={data.seatingAndCompany.personas}
        />

        {/* Section 6: Seabourn Room Service & Balcony Dining */}
        <EditorialFeatureShowcase
          title={data.inSuiteAndBalcony.title}
          subtitle={data.inSuiteAndBalcony.subtitle}
          // image={RoomServiceImg}
          features={data.inSuiteAndBalcony.features}
        />

        {/* Interlude CTA 2 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Want Private Balcony Dining on Seabourn?"
          description="Veranda suites provide the perfect setting for private dining. We can help you select the ideal suite category for your cruise."
          buttonText="Speak to a Cruise Specialist"
          buttonLink="/contact"
        />

        {/* Section 7: Seabourn Food Quality & Caviar Experience */}
        <FeatureGrid
          title={data.foodQuality.title}
          subtitle={data.foodQuality.subtitle}
          features={data.foodQuality.features}
        />

        {/* Section 8: Seabourn Drinks With Meals */}
        <SimplePersonaCards
          title={data.drinksWithMeals.title}
          subtitle={data.drinksWithMeals.subtitle}
          personas={data.drinksWithMeals.personas}
        />

        {/* Section 9: Seabourn Dining and Dietary Restrictions */}
        <GenericChecklistCards
          title={data.dietaryRestrictions.title}
          subtitle={data.dietaryRestrictions.subtitle}
          cards={data.dietaryRestrictions.cards}
        />

        {/* Interlude CTA 3 (Every 4 sections) */}
        <CenterCTA
          theme="light"
          title="Plan Your Seabourn Culinary Journey"
          description="From dietary accommodations to fine dining preferences, our advisors ensure your Seabourn voyage is fully personalized."
          buttonText="Connect with an Advisor"
          buttonLink="/contact"
        />

        {/* Section 10: Dining for Families, Solo Travelers & Couples */}
        <TravelerTypeGrid
          title={data.travelerProfiles.title}
          subtitle={data.travelerProfiles.subtitle}
          items={data.travelerProfiles.items.map((item, idx) => ({
            ...item,
            // image: [FamiliesDiningImg, SoloDiningImg, CouplesDiningImg][idx],
          }))}
        />

        {/* Section 11: Dress Code for Seabourn Dining */}
        <ProsConsCards
          type="compare"
          title={data.dressCode.title}
          bestFor={data.dressCode.bestFor}
          notBestFor={data.dressCode.notBestFor}
          prosTitle={data.dressCode.prosTitle}
          consTitle={data.dressCode.consTitle}
          bottomNote={data.dressCode.bottomNote}
        />

        {/* Section 12: Seabourn Dining vs. Traditional Cruise Dining */}
        <ComparisonTable data={data.vsTraditionalTable} />

        {/* Section 13: What Makes Seabourn Dining Different? */}
        <SimplePersonaCards
          title={data.differentCards.title}
          subtitle={data.differentCards.subtitle}
          personas={data.differentCards.personas}
        />

        {/* Section 14: Tips for Getting the Most From Seabourn Dining */}
        <StepByStepGuide
          title={data.tips.title}
          subtitle={data.tips.subtitle}
          steps={data.tips.steps}
        />

        {/* Section 15: Best Seabourn Dining Experiences for Different Travelers */}
        <ComparisonTable data={data.bestForTable} />

        {/* Interlude CTA 4 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Ready to Experience Seabourn Dining?"
          description="Get in touch with Trips & Ships for expert cruise guidance, special promotions, and complimentary booking support."
          buttonText="Start Planning Now"
          buttonLink="/contact"
        />

        {/* Section 16: Seabourn Dining: Pros and Cons */}
        <ProsConsCards
          title={data.prosAndCons.title}
          bestFor={data.prosAndCons.bestFor}
          notBestFor={data.prosAndCons.notBestFor}
          prosTitle={data.prosAndCons.prosTitle}
          consTitle={data.prosAndCons.consTitle}
          bottomNote={data.prosAndCons.bottomNote}
        />

        {/* Section 17: Angela Hughes Authority Box */}
        <ExpertCredentials image={AboutImage} />

        {/* Section 18: Frequently Asked Questions */}
        <FAQAccordion data={data.faq} />

        {/* Section 19: Final Verdict & Conclusion */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="light"
          title="Start Planning Your Seabourn Cruise"
          description="Experience world-class culinary luxury with open seating, fine wines, and personalized service."
          buttonText="Plan Your Cruise With Angela"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default SeabournDiningGuide;