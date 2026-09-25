import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// Dining Images from SeabournDining
import HeroDiningImg from "../../assets/SeabournDining/seabourn-luxury-cruise-dining-culinary-experience.jpg";
import TheRestaurantImg from "../../assets/SeabournDining/seabourn-the-restaurant-fine-dining-room.jpg";
import TheColonnadeImg from "../../assets/SeabournDining/seabourn-the-colonnade-casual-indoor-outdoor-dining.jpg";
import EarthOceanImg from "../../assets/SeabournDining/seabourn-earth-and-ocean-poolside-global-dining.jpg";
import SolisImg from "../../assets/SeabournDining/seabourn-solis-mediterranean-specialty-restaurant.jpg";
import SushiImg from "../../assets/SeabournDining/seabourn-sushi-specialty-japanese-dining.jpg";
import ThePatioImg from "../../assets/SeabournDining/seabourn-the-patio-poolside-casual-grill.jpg";
import BalconyDiningImg from "../../assets/SeabournDining/seabourn-suite-private-balcony-veranda-dining.jpg";

// CTA Section Background Images (from WhatIncludedSeabournCruise)
import CtaSpecialtyDiningImg from "../../assets/WhatIncludedSeabournCruise/seabourn-complimentary-specialty-dining-culinary-venues.jpg";
import CtaVerandaDiningImg from "../../assets/WhatIncludedSeabournCruise/seabourn-suite-private-dining-veranda-room-service.jpg";
import CtaDrinksFineWinesImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-included-alcoholic-drinks-fine-wines-cocktails.jpg";
import CtaGourmetDinnerImg from "../../assets/WhatIncludedSeabournCruise/seabourn-open-seating-gourmet-dinner-restaurant.jpg";
import CtaPlanningCruiseImg from "../../assets/WhatIncludedSeabournCruise/seabourn-luxury-cruise-ship-ocean-sailing-all-inclusive.jpg";

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
import VideoEmbed from "../../components/ui/VideoEmbed";

const SeabournDiningGuide = () => {
  const venueImages = [
    TheRestaurantImg,
    TheColonnadeImg,
    EarthOceanImg,
    SolisImg,
    SushiImg,
    ThePatioImg,
  ];

  const venuesWithImages = data.venues.items.map((item, idx) => ({
    ...item,
    image: venueImages[idx] || TheRestaurantImg,
  }));

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
        backgroundImage={HeroDiningImg}
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
          items={venuesWithImages}
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
          image={CtaSpecialtyDiningImg}
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
          image={BalconyDiningImg}
          features={data.inSuiteAndBalcony.features}
        />

        {/* Interlude CTA 2 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          image={CtaVerandaDiningImg}
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
          theme="dark"
          image={CtaDrinksFineWinesImg}
          title="Plan Your Seabourn Culinary Journey"
          description="From dietary accommodations to fine dining preferences, our advisors ensure your Seabourn voyage is fully personalized."
          buttonText="Connect with an Advisor"
          buttonLink="/contact"
        />

        {/* Section 10: Dining for Families, Solo Travelers & Couples */}
        <TravelerTypeGrid
          title={data.travelerProfiles.title}
          subtitle={data.travelerProfiles.subtitle}
          items={data.travelerProfiles.items}
        />

        {/* Video Showcase (Middle of Page) */}
        <VideoEmbed
          data={{
            youtubeId: "7me8VVfJiHI",
            title: "Experience Seabourn Luxury Dining & Culinary Excellence",
            description: "Step inside Seabourn's world-class restaurants, open-seating venues, and signature culinary moments with gourmet menus and fine wine pairings."
          }}
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
          image={CtaGourmetDinnerImg}
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
        <ExpertCredentials
          image={AboutImage}
          title="Seabourn Ultra-Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel"
          badge="SEABOURN CRUISE SPECIALIST"
          experienceBadge="40+ YEARS EXPERIENCE"
          authorityBoxTitle="ANGELA HUGHES LUXURY AUTHORITY"
          authoritySubtitle="Worldwide Luxury Cruise, Culinary & Dining Specialist"
          ctaText="Consult With Angela Hughes"
          ctaLink="/contact"
        />

        {/* Section 18: Frequently Asked Questions */}
        <FAQAccordion data={data.faq} />

        {/* Section 19: Final Verdict & Conclusion */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          image={CtaPlanningCruiseImg}
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