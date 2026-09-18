import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
// import SuiteImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import ExpeditionSuiteImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import AlaskaViewImg from "../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg";
// import AntarcticaViewImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import FjordsViewImg from "../../assets/ExploraJourneysvsSeabourn/Auckland-skyline-in-New-Zealand.jpg";
// import MedViewImg from "../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg";
// import WorldViewImg from "../../assets/ExploraJourneysvsSeabourn/Asia-Ship-a-Long-Bay-Vietnam.webp";
// import FamilyConnectingImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import FamilyGrandSuiteImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg";
// import PremiumBenefitsImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import VerandaBalconyImg from "../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg";
// import VerandaViewsImg from "../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import FeatureGrid from "../../components/ui/FeatureGrid";
import DestinationEditorialGrid from "../../components/ui/DestinationEditorialGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import CabinFeatureGrid from "../../components/ui/CabinFeatureGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import CardGrid from "../../components/ui/CardGrid";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";

const SeabournSuitesGuide = () => {
  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Suites: Complete Guide to Categories & Sizes</title>
        <meta name="title" content="Seabourn Suites Guide: Categories, Sizes, Verandas & Amenities" />
        <meta
          name="description"
          content="Compare Seabourn suites by category, size, veranda, location and amenities. See Ocean View, Veranda, Penthouse, Owner's, Signature and Wintergarden suites."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/suites/" />
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
        {/* Section 1: Quick Answer - Which Seabourn Suite Is Best? */}
        <ComparisonTable data={data.quickAnswerTable} />

        {/* Section 2: Seabourn Suite Categories at a Glance */}
        <GenericChecklistCards
          title={data.categoriesGlance.title}
          subtitle={data.categoriesGlance.subtitle}
          cards={data.categoriesGlance.cards}
        />

        {/* Section 3: Seabourn Suite Sizes Table */}
        <ComparisonTable data={data.sizeTable} />

        {/* Section 4: Seabourn Suites, Category by Category */}
        <ThreeColumnGrid
          title={data.suiteCategories.title}
          subtitle={data.suiteCategories.subtitle}
          items={data.suiteCategories.items}
        />

        {/* Interlude CTA 1 */}
        <CenterCTA
          theme="dark"
          title="Not Sure Which Suite Category Is Right For You?"
          description="Let's compare deck plans, square footage and pricing so you book the suite that actually fits how you'll use it."
          buttonText="Speak with a Specialist"
          buttonLink="/contact"
        />

        {/* Section 5: Seabourn Suite Amenities */}
        <GenericChecklistCards
          title={data.suiteAmenities.title}
          subtitle={data.suiteAmenities.subtitle}
          cards={data.suiteAmenities.cards}
        />

        {/* Section 6: Best Seabourn Suite for Entertaining */}
        <SimplePersonaCards
          title={data.entertainingSuites.title}
          subtitle={data.entertainingSuites.subtitle}
          personas={data.entertainingSuites.personas}
        />

        {/* Section 7: Which Seabourn Suites Have Verandas? */}
        <ComparisonTable data={data.verandaTable} />

        {/* Section 8: Service, Bar, Bathrooms & Storage */}
        <SimplePersonaCards
          title={data.serviceDetails.title}
          subtitle={data.serviceDetails.subtitle}
          personas={data.serviceDetails.personas}
        />

        {/* Interlude CTA 2 */}
        <CenterCTA
          theme="dark"
          title="Let's Find Your Ideal Deck & Location"
          description="Whether you're sensitive to motion or chasing the best views, we'll match the right deck and location to your itinerary."
          buttonText="Talk to a Seabourn Specialist"
          buttonLink="/contact"
        />

        {/* Section 9: Are All Seabourn Suites the Same Size? */}
        <FeatureGrid
          title={data.sameSizeFeatures.title}
          subtitle={data.sameSizeFeatures.subtitle}
          features={data.sameSizeFeatures.features}
        />

        {/* Section 10: Does Suite Location Matter on Seabourn? */}
        <SimplePersonaCards
          title={data.locationPersonas.title}
          subtitle={data.locationPersonas.subtitle}
          personas={data.locationPersonas.personas}
        />

        {/* Section 11: Best Seabourn Suites for Views */}
        <DestinationEditorialGrid
          eyebrow={data.viewDestinations.eyebrow}
          title={data.viewDestinations.title}
          subtitle={data.viewDestinations.subtitle}
          items={data.viewDestinations.items}
          // images={[AlaskaViewImg, AntarcticaViewImg, FjordsViewImg, MedViewImg, WorldViewImg]}
        />

        {/* Section 12: Best Seabourn Suites for Solo Travelers */}
        <EditorialFeatureShowcase
          title={data.soloTraveler.title}
          subtitle={data.soloTraveler.subtitle}
          // image={SuiteImg}
          features={data.soloTraveler.features}
        />

        {/* Interlude CTA 3 */}
        <CenterCTA
          theme="dark"
          title="Ready to Choose Your Seabourn Suite?"
          description="Let's compare the actual suite, deck location, square footage, veranda and itinerary before you book."
          buttonText="Speak with a Specialist"
          buttonLink="/contact"
        />

        {/* Section 13: Best Suites for Couples & World Cruises */}
        <ComparisonTable data={data.couplesAndWorldRankings} />

        {/* Section 14: Best Seabourn Suites for Families */}
        <CabinFeatureGrid
          data={data.familySuites}
          // image1={FamilyConnectingImg}
          // image2={FamilyGrandSuiteImg}
        />

        {/* Section 15: Best Seabourn Suite for Expedition Cruises */}
        <EditorialFeatureShowcase
          title={data.expeditionSuites.title}
          subtitle={data.expeditionSuites.subtitle}
          // image={ExpeditionSuiteImg}
          features={data.expeditionSuites.features}
        />

        {/* Section 16: Best Seabourn Suite for Wellness */}
        <CardGrid
          title={data.wellnessSuite.title}
          subtitle={data.wellnessSuite.subtitle}
          cards={data.wellnessSuite.cards}
          columns={3}
        />

        {/* Section 17: Is a Seabourn Penthouse Suite Worth It? */}
        <ProsConsCards
          title={data.penthouseWorthIt.title}
          bestFor={data.penthouseWorthIt.bestFor}
          notBestFor={data.penthouseWorthIt.notBestFor}
          prosTitle={data.penthouseWorthIt.prosTitle}
          consTitle={data.penthouseWorthIt.consTitle}
          bottomNote={data.penthouseWorthIt.bottomNote}
        />

        {/* Section 18: Seabourn Premium Suite Benefits */}
        <EditorialIntroSection
          eyebrow={data.premiumBenefits.eyebrow}
          title={data.premiumBenefits.title}
          paragraphs={data.premiumBenefits.paragraphs}
          highlights={data.premiumBenefits.highlights}
          badgeTitle={data.premiumBenefits.badgeTitle}
          badgeDescription={data.premiumBenefits.badgeDescription}
          placeholderLabel={data.premiumBenefits.placeholderLabel}
          // image={PremiumBenefitsImg}
        />

        {/* Section 19: Is a Seabourn Veranda Suite Worth It? */}
        <AsymmetricStoryIntro
          eyebrow={data.verandaWorthIt.eyebrow}
          title={data.verandaWorthIt.title}
          paragraphs={data.verandaWorthIt.paragraphs}
          highlights={data.verandaWorthIt.highlights}
          image1Placeholder={data.verandaWorthIt.image1Placeholder}
          image2Placeholder={data.verandaWorthIt.image2Placeholder}
          // image1={VerandaBalconyImg}
          // image2={VerandaViewsImg}
        />

        {/* Interlude CTA 4 */}
        <CenterCTA
          theme="dark"
          title="Get the Best Deal on Your Veranda Suite"
          description="Let us check current promotions, upgrade offers, and suite options for your select dates and itinerary."
          buttonText="Get a Veranda Suite Quote"
          buttonLink="/contact"
        />

        {/* Section 20: Seabourn Venture & Pursuit Suite Difference */}
        <GenericChecklistCards
          title={data.ventureDifference.title}
          subtitle={data.ventureDifference.subtitle}
          cards={data.ventureDifference.cards}
        />

        {/* Section 21: Are Seabourn Suites Worth the Price? */}
        <FeatureGrid
          title={data.worthThePrice.title}
          subtitle={data.worthThePrice.subtitle}
          features={data.worthThePrice.features}
        />

        {/* Section 22: Seabourn Suite Selection Strategy */}
        <StepByStepGuide
          title={data.selectionStrategy.title}
          subtitle={data.selectionStrategy.subtitle}
          steps={data.selectionStrategy.steps}
        />

        {/* Section 23: Seabourn Suites: What I Would Choose */}
        <SimplePersonaCards
          title={data.whatIWouldChoose.title}
          subtitle={data.whatIWouldChoose.subtitle}
          personas={data.whatIWouldChoose.personas}
        />

        {/* Section 24: Angela Hughes Authority Box */}
        <ExpertCredentials image={AboutImage} />

        {/* Section 25: Frequently Asked Questions (20 FAQs) */}
        <FAQAccordion data={data.faq} />

        {/* Section 26: Final Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="light"
          title="Start Planning Your Seabourn Suite"
          description="Compare suite categories, deck locations, square footage, and current luxury cruise promotions."
          buttonText="Plan Your Suite With Angela"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default SeabournSuitesGuide;