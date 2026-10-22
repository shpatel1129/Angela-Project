import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import InclusionsList from "../../components/ui/InclusionsList";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ProsConsCards from "../../components/ui/ProsConsCards";
import EditorialIntroSplit from "../../components/ui/EditorialIntroSplit";
import ExpertRulesGrid from "../../components/ui/ExpertRulesGrid";
import MistakesGrid from "../../components/ui/MistakesGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import CenterCTA from "../../components/ui/CenterCTA";

// Dedicated Assets
import AboutImage from "../../assets/AboutAngela3.jpeg";
import HeroDanubeAerial from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-hero-danube-aerial.webp";
import InsuiteDining from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-insuite-dining.webp";
import BreakfastService from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-breakfast-service.webp";
import RoyalSuiteInterior from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-royal-suite-interior.webp";
import SpecialOccasionEvening from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-special-occasion-evening.webp";
import ChampagneCelebration from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-champagne-celebration.webp";
import SoloTravelerSuite from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-solo-traveler-suite.webp";
import SuiteChoiceAerial from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-suite-choice-aerial.webp";
import SuitePerspective from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-suite-perspective.webp";
import CanapesService from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-canapes-service.webp";
import DurnsteinSailing from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-durnstein-sailing.webp";
import FinalVerdictSuite from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-final-verdict-suite.webp";
import ServiceUnpacking from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-unpacking-service.webp";
import ServiceBreakfast from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-morning-breakfast.webp";
import ServiceRefreshments from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-refreshments-dining.webp";
import ServiceRequests from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-special-requests.webp";
import ServiceDining from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-dining-coordination.webp";
import ServiceExcursions from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-excursion-coordination.webp";
import PlanningCtaBg from "../../assets/ScenicRiverCruiseButlerService/scenic-butler-planning-cta.webp";

const ScenicRiverCruiseButlerService = () => {
  // Matching distinct images for the 6 Butler Service cards
  const serviceImages = [
    ServiceUnpacking,
    ServiceBreakfast,
    ServiceRefreshments,
    ServiceRequests,
    ServiceDining,
    ServiceExcursions,
  ];

  // Service items for ThreeColumnGrid with matching photography
  const butlerServices = data.whatDoesAButlerDo.services.map((service, index) => ({
    title: service.title,
    category: service.category,
    description: service.description,
    highlight: service.valuableFor,
    image: serviceImages[index],
  }));

  // Occasions and Families cards
  const occasionAndFamilyCards = [
    {
      title: data.occasionsAndFamilies.occasions.title,
      items: [
        data.occasionsAndFamilies.occasions.intro,
        ...data.occasionsAndFamilies.occasions.items,
      ],
    },
    {
      title: data.occasionsAndFamilies.families.title,
      items: [
        data.occasionsAndFamilies.families.intro,
        ...data.occasionsAndFamilies.families.items,
      ],
    },
  ];

  // Butler vs Concierge cards
  const butlerVsConciergeCards = [
    {
      title: data.butlerVsConcierge.conciergeCard.title,
      items: [
        ...data.butlerVsConcierge.conciergeCard.paragraphs,
        `${data.butlerVsConcierge.conciergeCard.conciergeQ} ${data.butlerVsConcierge.conciergeCard.conciergeA}`,
        `${data.butlerVsConcierge.conciergeCard.butlerQ} ${data.butlerVsConcierge.conciergeCard.butlerA}`,
        data.butlerVsConcierge.conciergeCard.alert,
      ],
    },
    {
      title: data.butlerVsConcierge.expectationsCard.title,
      items: [
        data.butlerVsConcierge.expectationsCard.intro,
        ...data.butlerVsConcierge.expectationsCard.points,
        data.butlerVsConcierge.expectationsCard.footer,
        data.butlerVsConcierge.expectationsCard.alert,
      ],
    },
  ];

  // Comparison Table 1: Scenic Butler vs Standard
  const standardComparisonTableData = {
    title: data.serviceComparison.title,
    headers: ["Service / Feature", "Standard Cruise Service", "Scenic Butler Service"],
    rows: data.serviceComparison.rows.map((r) => [r.feature, r.standard, r.butler]),
  };

  // Comparison Table 2: Scenic vs Other Luxury Lines
  const luxuryLinesComparisonTableData = {
    title: data.cruiseLineComparison.title,
    headers: ["Luxury River Cruise Line", "Butler & Personalized Service Inclusions"],
    rows: data.cruiseLineComparison.lines.map((line) => [line.name, line.service]),
  };

  // FAQ list from schema
  const faqPageGraph = data.schema?.["@graph"]?.find(
    (item) => item["@type"] === "FAQPage"
  );
  const faqItems = faqPageGraph?.mainEntity?.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  })) || [];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO & Meta Tags */}
      <Helmet>
        <title>{data.meta.title}</title>
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
        backgroundImage={HeroDanubeAerial}
        imageAlt="Scenic River Cruise Butler Service on European Rivers"
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
          data.quickAnswer.sublead,
          data.quickAnswer.conclusion,
        ]}
        highlights={data.quickAnswer.emphasis}
        image1={InsuiteDining}
        image2={BreakfastService}
        ctaText="Plan Your Scenic Cruise"
        ctaLink="/contact"
      />

      {/* 3. Does Every Scenic Guest Get Butler Service? */}
      <EditorialIntroSection
        eyebrow={data.doesEveryGuestGetButler.eyebrow}
        heading={data.doesEveryGuestGetButler.title}
        paragraphs={[
          data.doesEveryGuestGetButler.lead,
          data.doesEveryGuestGetButler.sublead,
          data.doesEveryGuestGetButler.conclusion,
        ]}
        badgeTitle={data.doesEveryGuestGetButler.badgeTitle}
        badgeDescription={data.doesEveryGuestGetButler.badgeDescription}
        highlights={data.doesEveryGuestGetButler.factors}
        image={RoyalSuiteInterior}
      />

      {/* 4. What Does a Scenic Butler Actually Do? (6 Services) */}
      <ThreeColumnGrid
        title={data.whatDoesAButlerDo.title}
        subtitle={data.whatDoesAButlerDo.subtitle}
        items={butlerServices}
      />

      {/* 5. Inline CTA 1: Celebrating a Special Occasion? */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={SpecialOccasionEvening}
        theme="dark"
      />

      {/* 6. Butler Service for Special Occasions & Families */}
      <GenericChecklistCards
        title={data.occasionsAndFamilies.title}
        subtitle={data.occasionsAndFamilies.subtitle}
        cards={occasionAndFamilyCards}
      />

      {/* 7. Butler Service for Solo Travelers */}
      <InclusionsList
        title={data.soloTravelers.title}
        expertNote={`${data.soloTravelers.lead} ${data.soloTravelers.conclusion}`}
        inclusions={data.soloTravelers.values.map((v) => ({
          title: v,
          description: "Dedicated personal attention tailored for independent solo river voyages.",
        }))}
        image={SoloTravelerSuite}
      />

      {/* 8. Comparison Table: Scenic Butler Service vs Standard Cruise Service */}
      <ComparisonTable data={standardComparisonTableData} />

      {/* 9. Is Scenic Butler Service Worth It? (Pros & Cons) */}
      <ProsConsCards
        title={data.isItWorthIt.title}
        prosTitle={data.isItWorthIt.prosTitle}
        consTitle={data.isItWorthIt.consTitle}
        bestFor={data.isItWorthIt.pros}
        notBestFor={data.isItWorthIt.cons}
        bottomNote={`${data.isItWorthIt.subtitle}  ${data.isItWorthIt.consAlert}`}
        type="pros-cons"
        bgClass="bg-slate-50/60"
      />

      {/* 10. Inline CTA 2: Which Scenic Suite Is Right for You? */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={`${data.inlineCta2.eyebrow} ${data.inlineCta2.description}`}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={SuiteChoiceAerial}
        theme="dark"
      />

      {/* 11. Which Scenic Suites Have Butler Service? */}
      <EditorialIntroSplit
        eyebrow={data.whichSuitesHaveButler.eyebrow}
        heading={data.whichSuitesHaveButler.title}
        paragraphs={[
          data.whichSuitesHaveButler.lead,
          data.whichSuitesHaveButler.factorsTitle,
          ...data.whichSuitesHaveButler.factors,
          data.whichSuitesHaveButler.conclusion,
        ]}
        primaryImage={SuitePerspective}
        secondaryImage={ChampagneCelebration}
      />

      {/* 12. Butler vs. Concierge & Expectations */}
      <GenericChecklistCards
        title={data.butlerVsConcierge.title}
        subtitle={data.butlerVsConcierge.subtitle}
        cards={butlerVsConciergeCards}
      />

      {/* 13. Inline CTA 3: Ready to Book a Butler-Serviced Suite? */}
      <CenterCTA
        title={data.inlineCta3.title}
        description={`${data.inlineCta3.eyebrow} ${data.inlineCta3.description}`}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
        image={DurnsteinSailing}
        theme="dark"
      />

      {/* 14. Tips for Getting the Most From Your Butler */}
      <ExpertRulesGrid
        title={data.butlerTips.title}
        subtitle={data.butlerTips.subtitle}
        rules={data.butlerTips.tips.map((t) => ({
          title: t.title,
          description: t.text,
        }))}
      />

      {/* 15. Common Booking Mistakes */}
      <MistakesGrid
        title={data.commonMistakes.title}
        items={data.commonMistakes.mistakes.map((m, idx) => ({
          number: `0${idx + 1}`,
          title: `Mistake 0${idx + 1}`,
          description: m,
        }))}
      />

      {/* 16. Scenic vs Other Luxury River Cruise Lines */}
      <ComparisonTable data={luxuryLinesComparisonTableData} />

      {/* 17. Why a Luxury Travel Advisor Can Help */}
      <AuthorityGrid
        title={data.whyBookAdvisor.title}
        subtitle={`${data.whyBookAdvisor.quoteTitle}: ${data.whyBookAdvisor.quoteBody} ${data.whyBookAdvisor.alert}`}
        items={data.whyBookAdvisor.benefits}
      />

      {/* 18. Angela Hughes Authority Box & Credentials */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={`${data.angelaHughes.role} | ${data.angelaHughes.countries}`}
        authorityBoxTitle="SCENIC LUXURY CRUISE EXPERT"
        authoritySubtitle="River Cruise Specialist & Industry Leader"
        badge="SCENIC CRUISE EXPERT & CEO"
        experienceBadge="40+ YEARS EXPERTISE"
        bio="Angela Hughes has over four decades of luxury travel experience across 121+ countries, offering insider guidance on Scenic river cruises, Space-Ships, suite categories, and personalized butler service."
        credentials={data.angelaHughes.credentials}
        image={AboutImage}
        ctaText="Consult with Angela Hughes"
        ctaLink="/contact"
      />

      {/* 19. Frequently Asked Questions */}
      <FAQAccordion
        data={{
          title: "Scenic River Cruise Butler Service FAQs",
          subtitle:
            "Everything you need to know about butler inclusions, suite categories, and onboard amenities.",
          questions: faqItems,
        }}
      />

      {/* 20. Final Verdict & Showcase */}
      <EditorialFeatureShowcase
        title={data.finalVerdict.title}
        subtitle={data.finalVerdict.paragraphs[0]}
        image={FinalVerdictSuite}
        features={[
          {
            title: "Personalized In-Suite Experience",
            description: data.finalVerdict.paragraphs[1],
          },
          {
            title: "Effortless Luxury Vacation",
            description: data.finalVerdict.paragraphs[2],
          },
          {
            title: "Comprehensive Planning Inclusions",
            description: `${data.finalVerdict.servicesTitle} ${data.finalVerdict.services.join(" • ")}`,
          },
        ]}
      />

      {/* Concluding CTA */}
      <CenterCTA
        title={data.finalVerdict.buttonText}
        description="Connect with our luxury river cruise advisors to compare Scenic Space-Ships, suite locations, and exclusive butler amenities for your European voyage."
        buttonText={data.finalVerdict.buttonText}
        buttonLink={data.finalVerdict.buttonLink}
        image={PlanningCtaBg}
        theme="dark"
      />
    </div>
  );
};

export default ScenicRiverCruiseButlerService;