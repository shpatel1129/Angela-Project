import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// Assets - Seabourn Suites Images
import HeroSuiteImg from "../../assets/SeabournSuites/seabourn-suites-luxury-accommodations-overview.jpg";

// Category Images (for ThreeColumnGrid)
import OceanViewSuiteImg from "../../assets/SeabournSuites/seabourn-ocean-view-suite-luxury-stateroom.jpg";
import VerandaSuiteImg from "../../assets/SeabournSuites/seabourn-veranda-suite-private-balcony-living.jpg";
import PenthouseSuiteImg from "../../assets/SeabournSuites/seabourn-penthouse-suite-living-room-bedroom.jpg";
import PenthouseSpaSuiteImg from "../../assets/SeabournSuites/seabourn-penthouse-spa-suite-wellness-luxury.jpg";
import OwnersSuiteImg from "../../assets/SeabournSuites/seabourn-owners-suite-luxury-ocean-residence.jpg";
import SignatureSuiteImg from "../../assets/SeabournSuites/seabourn-signature-suite-forward-oceanfront-view.jpg";
import WintergardenSuiteImg from "../../assets/SeabournSuites/seabourn-wintergarden-suite-solarium-glass-lounge.jpg";
import GrandSuiteImg from "../../assets/SeabournSuites/seabourn-grand-suite-connecting-multi-room-luxury.jpg";

// Destination Views Images (for DestinationEditorialGrid)
import AlaskaViewImg from "../../assets/SeabournSuites/seabourn-alaska-glacier-wilderness-scenic-cruise.webp";
import AntarcticaViewImg from "../../assets/SeabournSuites/seabourn-antarctica-polar-expedition-wildlife-scenery.jpg";
import FjordsViewImg from "../../assets/SeabournSuites/seabourn-norwegian-fjords-scandinavia-luxury-cruise.webp";
import MedViewImg from "../../assets/SeabournSuites/seabourn-mediterranean-amalfi-coast-italy-cruise.webp";
import WorldViewImg from "../../assets/SeabournSuites/seabourn-grand-voyages-world-cruise-itineraries.webp";

// Feature / Section Specific Suite Images
import SoloTravelerImg from "../../assets/SeabournSuites/seabourn-suites-for-solo-travelers-single-cruising.jpg";
import FamilyConnectingImg from "../../assets/SeabournSuites/seabourn-suites-for-families-connecting-rooms.jpg";
import FamilyGrandSuiteImg from "../../assets/SeabournSuites/seabourn-suites-for-families-grand-suite-layout.jpg";
import ExpeditionSuiteImg from "../../assets/SeabournSuites/seabourn-suite-for-expedition-cruises-venture-pursuit.jpg";
import PremiumBenefitsImg from "../../assets/SeabournSuites/seabourn-premium-suite-exclusive-vip-benefits.jpg";
import VerandaAlternateImg from "../../assets/SeabournSuites/seabourn-veranda-suite-oceanfront-balcony-view.jpg";

// CTA Background Images (from other Seabourn folders)
import Cta1CategoryImg from "../../assets/SeabournCruises/seabourn-in-suite-private-veranda-dining-service.jpg";
import Cta2DeckImg from "../../assets/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
import Cta3SuiteChoiceImg from "../../assets/SeabournCruiseCost/seabourn-penthouse-premium-luxury-suites-pricing.jpg";
import Cta4VerandaDealImg from "../../assets/IsSeabournWorthPrice/seabourn-all-inclusive-veranda-suite-true-value-comparison.jpg";

// Final CTA Image
import FinalCtaSuiteImg from "../../assets/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";

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
  const categoryImages = [
    OceanViewSuiteImg,
    VerandaSuiteImg,
    PenthouseSuiteImg,
    PenthouseSpaSuiteImg,
    OwnersSuiteImg,
    SignatureSuiteImg,
    WintergardenSuiteImg,
    GrandSuiteImg,
  ];

  const suiteCategoriesWithImages = data.suiteCategories.items.map((item, idx) => ({
    ...item,
    image: categoryImages[idx] || VerandaSuiteImg,
  }));

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
        backgroundImage={HeroSuiteImg}
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
          items={suiteCategoriesWithImages}
        />

        {/* Interlude CTA 1 */}
        <CenterCTA
          theme="dark"
          title="Not Sure Which Suite Category Is Right For You?"
          description="Let's compare deck plans, square footage and pricing so you book the suite that actually fits how you'll use it."
          buttonText="Speak with a Specialist"
          buttonLink="/contact"
          image={Cta1CategoryImg}
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
          image={Cta2DeckImg}
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
          images={[AlaskaViewImg, AntarcticaViewImg, FjordsViewImg, MedViewImg, WorldViewImg]}
        />

        {/* Section 12: Best Seabourn Suites for Solo Travelers */}
        <EditorialFeatureShowcase
          title={data.soloTraveler.title}
          subtitle={data.soloTraveler.subtitle}
          image={SoloTravelerImg}
          features={data.soloTraveler.features}
        />

        {/* Interlude CTA 3 */}
        <CenterCTA
          theme="dark"
          title="Ready to Choose Your Seabourn Suite?"
          description="Let's compare the actual suite, deck location, square footage, veranda and itinerary before you book."
          buttonText="Speak with a Specialist"
          buttonLink="/contact"
          image={Cta3SuiteChoiceImg}
        />

        {/* Section 13: Best Suites for Couples & World Cruises */}
        <ComparisonTable data={data.couplesAndWorldRankings} />

        {/* Section 14: Best Seabourn Suites for Families */}
        <CabinFeatureGrid
          data={data.familySuites}
          image1={FamilyConnectingImg}
          image2={FamilyGrandSuiteImg}
        />

        {/* Section 15: Best Seabourn Suite for Expedition Cruises */}
        <EditorialFeatureShowcase
          title={data.expeditionSuites.title}
          subtitle={data.expeditionSuites.subtitle}
          image={ExpeditionSuiteImg}
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
          image={PremiumBenefitsImg}
        />

        {/* Section 19: Is a Seabourn Veranda Suite Worth It? */}
        <AsymmetricStoryIntro
          eyebrow={data.verandaWorthIt.eyebrow}
          title={data.verandaWorthIt.title}
          paragraphs={data.verandaWorthIt.paragraphs}
          highlights={data.verandaWorthIt.highlights}
          image1Placeholder={data.verandaWorthIt.image1Placeholder}
          image2Placeholder={data.verandaWorthIt.image2Placeholder}
          image1={VerandaSuiteImg}
          image2={VerandaAlternateImg}
        />

        {/* Interlude CTA 4 */}
        <CenterCTA
          theme="dark"
          title="Get the Best Deal on Your Veranda Suite"
          description="Let us check current promotions, upgrade offers, and suite options for your select dates and itinerary."
          buttonText="Get a Veranda Suite Quote"
          buttonLink="/contact"
          image={Cta4VerandaDealImg}
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
          ctaLink={data.angelaHughes.ctaLink || "/contact"}
        />

        {/* Section 25: Frequently Asked Questions (20 FAQs) */}
        <FAQAccordion data={data.faq} />

        {/* Section 26: Final Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="dark"
          title="Start Planning Your Seabourn Suite"
          description="Compare suite categories, deck locations, square footage, and current luxury cruise promotions."
          buttonText="Plan Your Suite With Angela"
          buttonLink="/contact"
          image={FinalCtaSuiteImg}
        />
      </div>
    </div>
  );
};

export default SeabournSuitesGuide;