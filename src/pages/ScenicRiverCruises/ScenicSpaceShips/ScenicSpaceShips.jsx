import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import InclusionsList from "../../../components/ui/InclusionsList";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import EditorialIntroSplit from "../../../components/ui/EditorialIntroSplit";
import ExpertRulesGrid from "../../../components/ui/ExpertRulesGrid";
import MistakesGrid from "../../../components/ui/MistakesGrid";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import CenterCTA from "../../../components/ui/CenterCTA";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import CardGrid from "../../../components/ui/CardGrid";

// Dedicated Assets
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import HeroRhineLoop from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-spaceships-hero-rhine-loop.webp";
import SunLoungeBalconyPanoramic from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-balcony-panoramic.webp";
import SunLoungeInteriorView from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-interior-view.webp";
import SpaceShipsDroneExterior from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-spaceships-drone-exterior-river.webp";
import Cta1Balcony from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-cta1-balcony.webp";
import SunLoungeMorning from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-morning.webp";
import SunLoungeAfternoon from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-afternoon.webp";
import SunLoungeGoldenHour from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-golden-hour.webp";
import SunLoungeEvening from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-evening.webp";
import SunLoungePrivacy from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-privacy.webp";
import SuitesRoyalOwnerGrand from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-suites-royal-owner-grand.webp";
import SuitesRoyalPanoramaCat from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-suites-royal-panorama-cat.webp";
import SuiteChoiceCtaLuxury from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-suite-choice-cta-luxury.webp";
import ColdWeatherRhineValley from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-cold-weather-rhine-valley.webp";
import ChristmasMarketsNuremberg from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-christmas-markets-nuremberg.webp";
import Cta3SundeckRhine from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-spaceships-cta3-sundeck-rhine.webp";
import SuiteLocationRiverView from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-suite-location-river-view.webp";
import BeyondBalconyDining from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-beyond-balcony-dining.webp";
import BeyondBalconyLounge from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-beyond-balcony-panorama-lounge.webp";
import BeyondBalconySpa from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-beyond-balcony-wellness-spa.webp";
import BeyondBalconyPool from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-beyond-balcony-vitality-pool.webp";
import SunLoungeFinalVerdict from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-sun-lounge-final-verdict.webp";
import ClosingBudapestAerial from "../../../assets/ScenicRiverCruises/ScenicSpaceShips/scenic-spaceships-closing-budapest-aerial.webp";

const ScenicSpaceShipsSunLounge = () => {
  // Best Time to Use moments for ThreeColumnGrid
  const momentImages = [
    SunLoungeMorning,
    SunLoungeAfternoon,
    SunLoungeGoldenHour,
    SunLoungeEvening,
  ];

  const beyondBalconyFeatures = [
    {
      title: data.beyondBalcony.items[0].title,
      description: data.beyondBalcony.items[0].description,
      image: BeyondBalconyDining,
      highlight: "Crystal Dining & Specialty Venues",
    },
    {
      title: data.beyondBalcony.items[1].title,
      description: data.beyondBalcony.items[1].description,
      image: BeyondBalconyLounge,
      highlight: "Floor-to-Ceiling Riverfront Glass",
    },
    {
      title: data.beyondBalcony.items[2].title,
      description: data.beyondBalcony.items[2].description,
      image: BeyondBalconySpa,
      highlight: "Therapeutic Salt Therapy Rooms",
    },
    {
      title: data.beyondBalcony.items[3].title,
      description: data.beyondBalcony.items[3].description,
      image: BeyondBalconyPool,
      highlight: "Heated Sun Deck Vitality Pools",
    },
  ];

  const advisorCards = data.whyBookAdvisor.benefits.map((benefit, idx) => {
    const icons = [
      "LayoutGrid",
      "Sliders",
      "Layers",
      "Maximize2",
      "UserCheck",
      "Eye",
      "CalendarCheck",
      "Sparkles",
    ];
    return {
      title: benefit.title,
      description: benefit.description,
      icon: icons[idx % icons.length],
    };
  });

  const bestTimeItems = data.bestTimeToUse.moments.map((moment, idx) => ({
    title: moment.title,
    category: moment.category,
    description: moment.description,
    features: moment.features,
    image: momentImages[idx],
  }));

  // Sun Lounge Operation & Importance Cards
  const sunLoungeOperationCards = [
    {
      title: data.sunLoungeOperation.howItWorksCard.title,
      items: [
        ...data.sunLoungeOperation.howItWorksCard.paragraphs,
        `${data.sunLoungeOperation.howItWorksCard.listTitle} ${data.sunLoungeOperation.howItWorksCard.items.join(", ")}`,
      ],
    },
    {
      title: data.sunLoungeOperation.whyDesignMattersCard.title,
      items: [
        ...data.sunLoungeOperation.whyDesignMattersCard.paragraphs,
        `${data.sunLoungeOperation.whyDesignMattersCard.listTitle} ${data.sunLoungeOperation.whyDesignMattersCard.items.join(", ")}`,
        data.sunLoungeOperation.whyDesignMattersCard.footer,
      ],
    },
  ];

  // Balcony Comparison Table Data
  const balconyComparisonTableData = {
    title: data.balconyComparison.title,
    headers: data.balconyComparison.headers,
    rows: data.balconyComparison.rows,
  };

  // Space-Ship vs Ocean Cruise Table Data
  const spaceShipVsOceanTableData = {
    title: data.spaceShipVsOcean.title,
    headers: data.spaceShipVsOcean.headers,
    rows: data.spaceShipVsOcean.rows,
  };

  // FAQ items from schema
  const faqPageGraph = data.schema?.["@graph"]?.find(
    (item) => item["@type"] === "FAQPage"
  );
  const faqItems = faqPageGraph?.mainEntity?.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  })) || [];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO & Schema Metadata */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Nav />

      {/* 1. Hero Section */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={`${data.hero.lead}\n\n${data.hero.sublead}\n\n${data.hero.conclusion}`}
        backgroundImage={HeroRhineLoop}
        imageAlt="Scenic Space-Ships & Sun Lounge Balconies on European Rivers"
        primaryCtaText={data.hero.primaryCta.text}
        primaryCtaLink={data.hero.primaryCta.link}
        secondaryCtaText={data.hero.secondaryCta.text}
        secondaryCtaLink={data.hero.secondaryCta.link}
      />

      {/* 2. Quick Answer Section */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.title}
        paragraphs={[
          data.quickAnswer.lead,
          data.quickAnswer.conclusion,
        ]}
        highlights={data.quickAnswer.emphasis}
        image1={SunLoungeBalconyPanoramic}
        image2={SunLoungeInteriorView}
        ctaText="Plan Your Scenic Cruise"
        ctaLink="/contact"
      />

      {/* 3. What Is a Scenic Space-Ship? */}
      <EditorialIntroSection
        eyebrow={data.whatIsSpaceShip.eyebrow}
        heading={data.whatIsSpaceShip.title}
        paragraphs={[
          data.whatIsSpaceShip.lead,
          data.whatIsSpaceShip.conclusion,
        ]}
        badgeTitle="Purpose-Built for European Rivers"
        badgeDescription={data.whatIsSpaceShip.callout}
        highlights={data.whatIsSpaceShip.features}
        image={SpaceShipsDroneExterior}
      />

      {/* 4. How Does a Scenic Sun Lounge Work & Why Balcony Design Matters */}
      <GenericChecklistCards
        title={data.sunLoungeOperation.title}
        subtitle={data.sunLoungeOperation.subtitle}
        cards={sunLoungeOperationCards}
      />

      {/* 5. Inline CTA 1: Not Sure Which Balcony Type Suits You? */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={Cta1Balcony}
        theme="dark"
      />

      {/* 6. The Best Time to Use Your Sun Lounge (Mornings, Afternoon, Golden Hour, Evening) */}
      <ThreeColumnGrid
        title={data.bestTimeToUse.title}
        subtitle={data.bestTimeToUse.subtitle}
        items={bestTimeItems}
      />

      {/* 7. Scenic Sun Lounge vs Traditional Balcony */}
      <ComparisonTable data={balconyComparisonTableData} />

      {/* 8. Are Scenic Sun Lounge Balconies Private? */}
      <InclusionsList
        title={data.privacy.title}
        expertNote={`${data.privacy.lead} ${data.privacy.conclusion}`}
        inclusions={data.privacy.factors.map((factor) => ({
          title: factor,
          description: "Key element affecting acoustic comfort, sightlines, and stateroom privacy.",
        }))}
        image={SunLoungePrivacy}
      />

      {/* 9. Which Scenic Suites Have Sun Lounge Balconies? */}
      <EditorialIntroSplit
        eyebrow="SUITE CATEGORIES & SELECTION"
        heading={data.whichSuitesHaveBalconies.title}
        paragraphs={[
          data.whichSuitesHaveBalconies.suitesCard.paragraphs[0],
          data.whichSuitesHaveBalconies.suitesCard.paragraphs[1],
          `${data.whichSuitesHaveBalconies.suitesCard.checklistTitle} ${data.whichSuitesHaveBalconies.suitesCard.items.join(" • ")}`,
          `${data.whichSuitesHaveBalconies.categoriesCard.paragraphs[0]} ${data.whichSuitesHaveBalconies.categoriesCard.paragraphs[1]}`,
          `${data.whichSuitesHaveBalconies.categoriesCard.checklistTitle} ${data.whichSuitesHaveBalconies.categoriesCard.items.join(" • ")}`,
          data.whichSuitesHaveBalconies.categoriesCard.footer,
        ]}
        primaryImage={SuitesRoyalOwnerGrand}
        secondaryImage={SuitesRoyalPanoramaCat}
      />

      {/* 10. Inline CTA 2: Which Scenic Suite Is Right for You? */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={`${data.inlineCta2.eyebrow} — ${data.inlineCta2.description}`}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={SuiteChoiceCtaLuxury}
        theme="dark"
      />

      {/* 11. Is a Sun Lounge Better Than an Outdoor Balcony? */}
      <ProsConsCards
        title={data.isItBetterThanOutdoor.title}
        prosTitle={data.isItBetterThanOutdoor.prosTitle}
        consTitle={data.isItBetterThanOutdoor.consTitle}
        bestFor={data.isItBetterThanOutdoor.pros}
        notBestFor={data.isItBetterThanOutdoor.cons}
        bottomNote={`${data.isItBetterThanOutdoor.subtitle} — ${data.isItBetterThanOutdoor.bottomNote}`}
        type="compare"
        bgClass="bg-slate-50/60"
      />

      {/* 12. Best Scenic Suites for River Views */}
      <AuthorityGrid
        title={data.bestSuitesForViews.title}
        subtitle={data.bestSuitesForViews.subtitle}
        items={data.bestSuitesForViews.items}
      />

      {/* 13. Is a Scenic Sun Lounge Worth It? */}
      <ProsConsCards
        title={data.isItWorthIt.title}
        prosTitle={data.isItWorthIt.prosTitle}
        consTitle={data.isItWorthIt.consTitle}
        bestFor={data.isItWorthIt.pros}
        notBestFor={data.isItWorthIt.cons}
        bottomNote={`${data.isItWorthIt.subtitle} — ${data.isItWorthIt.bottomNote}`}
        type="pros-cons"
        bgClass="bg-white"
      />

      {/* 14. Sun Lounges in Cold Weather & Christmas Markets */}
      <CabinFeatureGrid
        data={{
          title: data.coldWeatherAndChristmas.title,
          subtitle: data.coldWeatherAndChristmas.subtitle,
          oceanview: {
            title: data.coldWeatherAndChristmas.cards[0].title,
            bestFor: data.coldWeatherAndChristmas.cards[0].items[0],
            advantages: data.coldWeatherAndChristmas.cards[0].items.slice(1),
          },
          balcony: {
            title: data.coldWeatherAndChristmas.cards[1].title,
            bestFor: data.coldWeatherAndChristmas.cards[1].items[0],
            advantages: data.coldWeatherAndChristmas.cards[1].items.slice(1),
          },
        }}
        image1={ColdWeatherRhineValley}
        image2={ChristmasMarketsNuremberg}
      />

      {/* 15. Inline CTA 3: Ready to Book a Sun Lounge Suite? */}
      <CenterCTA
        title={data.inlineCta3.title}
        description={`${data.inlineCta3.eyebrow} — ${data.inlineCta3.description}`}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
        image={Cta3SundeckRhine}
        theme="dark"
      />

      {/* 16. Scenic Space-Ship vs Ocean Cruise Balcony */}
      <ComparisonTable data={spaceShipVsOceanTableData} />

      {/* 17. Why Your Suite Location Matters */}
      <InclusionsList
        title={data.suiteLocation.title}
        expertNote={`${data.suiteLocation.lead} ${data.suiteLocation.conclusion}`}
        inclusions={data.suiteLocation.factors.map((f) => ({
          title: f.title,
          description: f.description,
        }))}
        image={SuiteLocationRiverView}
      />

      {/* 18. Common Scenic Balcony Booking Mistakes */}
      <MistakesGrid
        title={data.commonMistakes.title}
        items={data.commonMistakes.mistakes.map((m, idx) => ({
          number: `0${idx + 1}`,
          title: `Mistake 0${idx + 1}`,
          description: m,
        }))}
      />

      {/* 19. How to Choose the Right Scenic Suite */}
      <ExpertRulesGrid
        title={data.howToChoose.title}
        subtitle={data.howToChoose.subtitle}
        rules={data.howToChoose.rules}
      />

      {/* 20. Scenic Space-Ships Beyond the Balcony */}
      <FeatureGrid
        title={data.beyondBalcony.title}
        subtitle={`${data.beyondBalcony.subtitle} ${data.beyondBalcony.callout}`}
        features={beyondBalconyFeatures}
        bgClass="bg-white"
      />

      {/* 21. Why a Luxury Travel Advisor Can Help */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={`${data.whyBookAdvisor.quoteTitle}: ${data.whyBookAdvisor.quoteBody} ${data.whyBookAdvisor.alert}`}
        cards={advisorCards}
        columns={4}
        stagger={false}
      />

      {/* 22. Angela Hughes Authority Box & Credentials */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={`${data.angelaHughes.role} | ${data.angelaHughes.countries}`}
        authorityBoxTitle="SCENIC LUXURY CRUISE EXPERT"
        authoritySubtitle="River Cruise Specialist & Industry Leader"
        badge="SCENIC CRUISE EXPERT & CEO"
        experienceBadge="40+ YEARS EXPERTISE"
        bio="Angela Hughes has over four decades of luxury travel experience across 121+ countries, offering insider guidance on Scenic river cruises, Space-Ships, suite categories, and Sun Lounge balcony design."
        credentials={data.angelaHughes.credentials}
        image={AboutImage}
        ctaText="Consult with Angela Hughes"
        ctaLink="/contact"
      />

      {/* 23. Frequently Asked Questions */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle:
            "Everything you need to know about Scenic Space-Ships and Sun Lounge balconies before booking.",
          questions: faqItems,
        }}
      />

      {/* 24. Final Verdict & Showcase */}
      <EditorialFeatureShowcase
        title={data.finalVerdict.title}
        subtitle={data.finalVerdict.paragraphs[0]}
        image={SunLoungeFinalVerdict}
        features={[
          {
            title: "Private Riverfront Observation",
            description: data.finalVerdict.paragraphs[1],
          },
          {
            title: "Strategic Cabin Decisions",
            description: data.finalVerdict.paragraphs[2],
          },
          {
            title: "Comprehensive Planning Support",
            description: `${data.finalVerdict.servicesTitle} ${data.finalVerdict.services.join(" • ")}`,
          },
        ]}
      />

      {/* Concluding CTA */}
      <CenterCTA
        title={data.finalVerdict.buttonText}
        description="Connect with our luxury river cruise advisors to compare Scenic Space-Ships, suite locations, and exclusive balcony amenities for your European voyage."
        buttonText={data.finalVerdict.buttonText}
        buttonLink={data.finalVerdict.buttonLink}
        image={ClosingBudapestAerial}
        theme="dark"
      />
    </div>
  );
};

export default ScenicSpaceShipsSunLounge;