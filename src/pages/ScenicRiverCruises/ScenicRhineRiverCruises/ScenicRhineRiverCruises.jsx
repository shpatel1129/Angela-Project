import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import CardGrid from "../../../components/ui/CardGrid";
import CenterCTA from "../../../components/ui/CenterCTA";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import TravelerProfileTabs from "../../../components/ui/TravelerProfileTabs";
import ExpertRulesGrid from "../../../components/ui/ExpertRulesGrid";
import InclusionsList from "../../../components/ui/InclusionsList";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import DetailedInclusionsList from "../../../components/ui/DetailedInclusionsList";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import MistakesGrid from "../../../components/ui/MistakesGrid";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";

// Assets
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import scenicRhineHeroSundeckGorge from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-hero-sundeck-gorge.webp";
import scenicRhineQaBernkastel from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-qa-bernkastel.webp";
import scenicRhineQaBaselCentre from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-qa-basel-centre.webp";
import scenicRhineShipVariety from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-ship-variety.webp";
import scenicRhineCta1Gorge from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-cta1-gorge.webp";
import scenicRhineSeasonSpring from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-season-spring.webp";
import scenicRhineSeasonSummer from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-season-summer.webp";
import scenicRhineSeasonFall from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-season-fall.webp";
import scenicRhineSeasonWinter from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-season-winter.webp";
import scenicRhineItinAmsterdamBasel from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-itin-amsterdam-basel.webp";
import scenicRhineItinGorgeCastles from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-itin-gorge-castles.webp";
import scenicRhineItinChristmasMarkets from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-itin-christmas-markets.webp";
import scenicRhineCastlesReichsburg from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-castles-reichsburg.webp";
import scenicRhineCta2BalconyView from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-cta2-balcony-view.webp";
import scenicRhineCabinsBalcony from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-cabins-balcony.webp";
import scenicRhineButlerService from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-butler-service.webp";
import scenicRhineFamiliesHeidelberg from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-families-heidelberg.webp";
import scenicRhineCouplesSunset from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-couples-sunset.webp";
import scenicRhineCta3Suite from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-cta3-suite.webp";
import scenicRhineVerdictExterior from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-verdict-exterior.webp";
import scenicRhineClosingAerial from "../../../assets/ScenicRiverCruises/ScenicRhineRiverCruises/scenic-rhine-closing-aerial.webp";

const ScenicRhineRiverCruises = () => {
  // Season images mapping for ThreeColumnGrid
  const seasonImages = [
    scenicRhineSeasonSpring,
    scenicRhineSeasonSummer,
    scenicRhineSeasonFall,
    scenicRhineSeasonWinter
  ];

  const seasonItems = data.bestTimeToCruise.items.map((item, idx) => ({
    title: `${item.title} (${item.category})`,
    description: item.description,
    bullets: item.features,
    image: seasonImages[idx]
  }));

  // Itinerary items mapping for TravelerProfileTabs
  const itineraryImages = [
    scenicRhineItinAmsterdamBasel,
    scenicRhineItinGorgeCastles,
    scenicRhineItinChristmasMarkets
  ];

  const itineraryTabs = data.bestItineraries.items.map((item, idx) => ({
    name: item.title,
    tagline: item.category,
    quote: item.description,
    recommendation: item.category,
    reason: item.description,
    whyFits: item.bestFor,
    image: itineraryImages[idx]
  }));

  // Advisor benefit cards mapping with Lucide icons
  const advisorIconNames = [
    "Ship",
    "Home",
    "Compass",
    "Calendar",
    "Sparkles",
    "Landmark",
    "Plane",
    "ShieldCheck"
  ];

  const advisorCards = data.whyBookAdvisor.benefits.map((benefit, idx) => ({
    title: benefit.title,
    description: benefit.description,
    icon: advisorIconNames[idx] || "Star"
  }));

  // Dual philosophy data for Families & Couples
  const familiesAndCouplesData = {
    title: data.familiesAndCouples.title,
    subtitle: data.familiesAndCouples.subtitle,
    sailing: {
      label: data.familiesAndCouples.categoriesCard.title,
      philosophy: data.familiesAndCouples.categoriesCard.subtitle,
      points: [
        ...data.familiesAndCouples.categories,
        data.familiesAndCouples.categoriesCard.footer
      ]
    },
    allSuite: {
      label: data.familiesAndCouples.inclusionsCard.title,
      philosophy: data.familiesAndCouples.inclusionsCard.subtitle,
      points: [
        ...data.familiesAndCouples.inclusions,
        data.familiesAndCouples.inclusionsCard.footer
      ]
    }
  };

  // Final Verdict service features
  const verdictFeatures = data.finalVerdict.services.map((service, idx) => ({
    title: `VIP Service ${idx + 1}`,
    description: service
  }));

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.metaDescription} />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/rhine" />
        <script type="application/ld+json">
          {JSON.stringify(data.meta.schema)}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Nav />

      {/* 1. Hero Section */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs.join(" ")}
        badge={data.hero.badgeText}
        backgroundImage={scenicRhineHeroSundeckGorge}
        primaryCtaText={data.hero.primaryButton.label}
        primaryCtaLink={data.hero.primaryButton.href}
        secondaryCtaText={data.hero.secondaryButton.label}
        secondaryCtaLink={data.hero.secondaryButton.href}
      />

      {/* 2. Quick Answer Section */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        title={data.quickAnswer.title}
        paragraphs={data.quickAnswer.storyParagraphs}
        highlights={data.quickAnswer.highlightList}
        image1={scenicRhineQaBernkastel}
        image2={scenicRhineQaBaselCentre}
      />

      {/* 3. Why Choose Section */}
      <EditorialIntroSection
        eyebrow={data.whyChoose.eyebrow}
        heading={data.whyChoose.heading}
        paragraphs={data.whyChoose.paragraphs}
        badgeTitle={data.whyChoose.badgeTitle}
        badgeDescription={data.whyChoose.badgeDescription}
        highlights={data.whyChoose.highlights}
        image={scenicRhineShipVariety}
      />

      {/* 4. Where Does Cruise Go? (Destinations) */}
      <CardGrid
        title={data.destinations.title}
        subtitle={data.destinations.subtitle}
        cards={data.destinations.cards}
        columns={4}
        stagger={false}
      />

      {/* 5. Inline CTA 1 */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={scenicRhineCta1Gorge}
        theme="dark"
      />

      {/* 6. Best Time to Cruise */}
      <ThreeColumnGrid
        title={data.bestTimeToCruise.title}
        subtitle={data.bestTimeToCruise.subtitle}
        items={seasonItems}
      />

      {/* 7. Best Itineraries */}
      <div id="best-itineraries">
        <TravelerProfileTabs
          title={data.bestItineraries.title}
          subtitle={data.bestItineraries.subtitle}
          profiles={itineraryTabs}
        />
      </div>

      {/* 9. Castles Section */}
      <InclusionsList
        title={data.castles.title}
        expertNote={data.castles.expertNote}
        inclusions={data.castles.inclusions}
        image={scenicRhineCastlesReichsburg}
      />

      {/* 8. Excursions Section */}
      <ExpertRulesGrid
        title={data.excursions.title}
        subtitle={data.excursions.subtitle}
        rules={data.excursions.rules}
      />

      

      {/* 10. Inline CTA 2 */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={scenicRhineCta2BalconyView}
        theme="dark"
      />

      {/* 11. Cabins & Butler Service */}
      <CabinFeatureGrid
        data={data.cabinsAndButler}
        image1={scenicRhineCabinsBalcony}
        image2={scenicRhineButlerService}
      />

      {/* 12. Food, Wine & Christmas Markets */}
      <GenericChecklistCards
        title={data.foodWineChristmas.title}
        subtitle={data.foodWineChristmas.subtitle}
        cards={data.foodWineChristmas.cards}
      />

      {/* 13. Families & Couples Section */}
      <DualPhilosophyShowcase
        data={familiesAndCouplesData}
        imageSailing={scenicRhineFamiliesHeidelberg}
        imageAllSuite={scenicRhineCouplesSunset}
      />

      {/* 14. Cost Factors Section */}
      <AuthorityGrid
        title={data.cost.title}
        subtitle={data.cost.subtitle}
        items={data.cost.items}
      />

      {/* 15. Inline CTA 3 */}
      <CenterCTA
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
        image={scenicRhineCta3Suite}
        theme="dark"
      />

      {/* 16. What's Included */}
      <DetailedInclusionsList
        title={data.whatsIncluded.title}
        intro={data.whatsIncluded.intro}
        items={data.whatsIncluded.items}
      />

      {/* 17. Comparison Table */}
      <ComparisonTable data={data.comparison} />

      {/* 18. Common Mistakes */}
      <MistakesGrid
        title={data.mistakes.title}
        items={data.mistakes.items}
      />

      {/* 19. Days Needed & Pre-Cruise Hotel Planning */}
      <ProsConsCards
        title={data.daysNeededAndHotel.title}
        prosTitle={data.daysNeededAndHotel.prosTitle}
        consTitle={data.daysNeededAndHotel.consTitle}
        bestFor={data.daysNeededAndHotel.bestFor}
        notBestFor={data.daysNeededAndHotel.notBestFor}
        bottomNote={data.daysNeededAndHotel.bottomNote}
        type="compare"
      />

      {/* 20. Why Book Through a Luxury Travel Advisor? */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={`${data.whyBookAdvisor.quoteTitle}: ${data.whyBookAdvisor.quoteBody} ${data.whyBookAdvisor.alert}`}
        cards={advisorCards}
        columns={4}
        stagger={false}
      />

      {/* 21. Angela Hughes Credentials */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={`${data.angelaHughes.role} • ${data.angelaHughes.countries}`}
        image={AboutImage}
        bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury European river cruises and bespoke itineraries for discerning travelers."
        credentials={data.angelaHughes.credentials.map((c) => c.label)}
        ctaText="Plan with Angela"
        ctaLink="/contact"
      />

      {/* 22. Frequently Asked Questions */}
      <FAQAccordion data={data.faq} />

      {/* 23. Final Verdict */}
      <EditorialFeatureShowcase
        title={data.finalVerdict.title}
        subtitle={data.finalVerdict.paragraphs.join(" ")}
        image={scenicRhineVerdictExterior}
        features={verdictFeatures}
      />

      {/* 24. Concluding CTA */}
      <CenterCTA
        title="Ready to Sail the Scenic Rhine?"
        description="Connect with Angela Hughes and the Trips & Ships luxury river cruise team to craft your bespoke European voyage with exclusive amenities and priority suite selection."
        buttonText={data.finalVerdict.buttonText}
        buttonLink={data.finalVerdict.buttonLink}
        image={scenicRhineClosingAerial}
        theme="dark"
      />
    </div>
  );
};

export default ScenicRhineRiverCruises;