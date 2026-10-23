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
import ValueShowcase from "../../../components/ui/ValueShowcase";

// Assets from dedicated ScenicSeineRiverCruises folder
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import scenicSeineHeroGemSailing from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-hero-gem-sailing.webp";
import scenicSeineQaPontAlexandre from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-qa-pont-alexandre.webp";
import scenicSeineQaArcDeTriomphe from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-qa-arc-de-triomphe.webp";
import scenicSeineWhyGemCaudebec from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-why-gem-caudebec.webp";
import scenicSeineCta1Honfleur from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-cta1-honfleur.webp";
import scenicSeineSeasonSpring from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-season-spring.webp";
import scenicSeineSeasonSummer from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-season-summer.webp";
import scenicSeineSeasonFall from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-season-fall.webp";
import scenicSeineSeasonWinter from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-season-winter.webp";
import scenicSeineItinChateauGaillard from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-itin-chateau-gaillard.webp";
import scenicSeineItinRouenCathedral from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-itin-rouen-cathedral.webp";
import scenicSeineItinCalvadosNormandy from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-itin-calvados-normandy.webp";
import scenicSeineArtRouenMuseum from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-art-rouen-museum.webp";
import scenicSeineCta2ChateauAgassac from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-cta2-chateau-agassac.webp";
import scenicSeineCabinsBalconySuite from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-cabins-balcony-suite.webp";
import scenicSeineButlerRoyalSuite from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-butler-royal-suite.webp";
import scenicSeineFamiliesEbikes from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-families-ebikes.webp";
import scenicSeineCouplesSundeckEvening from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-couples-sundeck-evening.webp";
import scenicSeineCta3GemStateroom from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-cta3-gem-stateroom.webp";
import scenicSeineVerdictFrenchConcert from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-verdict-french-concert.webp";
import scenicSeineClosingPalaisGarnier from "../../../assets/ScenicRiverCruises/ScenicSeineRiverCruises/scenic-seine-closing-palais-garnier.webp";

const ScenicSeineRiverCruises = () => {
  // Season items mapping for ThreeColumnGrid
  const seasonImages = [
    scenicSeineSeasonSpring,
    scenicSeineSeasonSummer,
    scenicSeineSeasonFall,
    scenicSeineSeasonWinter
  ];

  const seasonItems = data.bestTimeToCruise.items.map((item, idx) => ({
    category: item.eyebrow,
    title: item.title,
    description: item.intro,
    features: item.items,
    bullets: item.items,
    highlight: item.outro,
    image: seasonImages[idx]
  }));

  // Itinerary items mapping for TravelerProfileTabs
  const itineraryImages = [
    scenicSeineItinChateauGaillard,
    scenicSeineItinRouenCathedral,
    scenicSeineItinCalvadosNormandy
  ];

  const itineraryTabs = data.bestItineraries.items.map((item, idx) => ({
    name: item.title,
    tagline: item.badge,
    quote: item.title,
    recommendation: item.badge,
    reason: item.desc,
    whyFits: item.columns?.[0]?.items || [],
    image: itineraryImages[idx]
  }));

  // Excursion rules mapping for ExpertRulesGrid
  const excursionRules = data.excursions.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item.title,
    description: item.desc
  }));

  // Destination cards mapping for CardGrid
  const destinationIcons = [
    "Landmark",
    "Flower2",
    "Building2",
    "Ship",
    "Compass",
    "ShieldAlert",
    "Sparkles"
  ];

  const destinationCards = data.destinations.items.map((item, idx) => ({
    title: item.title,
    description: "Seine & Normandy Iconic Highlights",
    bullets: item.items,
    icon: destinationIcons[idx] || "Landmark"
  }));

  // Cabins and Butler data for CabinFeatureGrid
  const cabinFeatureData = {
    title: data.cabinsAndButler.cabins.title,
    subtitle: "Personalized comfort, panoramic all-weather Sun Lounges, and five-star Butler Service on Scenic Gem.",
    oceanview: {
      title: data.cabinsAndButler.cabins.title,
      bestFor: `${data.cabinsAndButler.cabins.text} ${data.cabinsAndButler.cabins.outro}`,
      advantages: data.cabinsAndButler.cabins.features
    },
    balcony: {
      title: data.cabinsAndButler.butler.title,
      bestFor: `${data.cabinsAndButler.butler.text} ${data.cabinsAndButler.butler.outro}`,
      advantages: data.cabinsAndButler.butler.features
    }
  };

  // Food, Wine & Normandy D-Day checklist cards
  const foodAndDdayCards = [
    {
      title: data.diningAndHistory.foodAndWine.title,
      items: [
        data.diningAndHistory.foodAndWine.text,
        ...data.diningAndHistory.foodAndWine.highlights,
        data.diningAndHistory.foodAndWine.outro
      ]
    },
    {
      title: data.diningAndHistory.dDayHistory.title,
      items: [
        data.diningAndHistory.dDayHistory.text,
        ...data.diningAndHistory.dDayHistory.highlights,
        data.diningAndHistory.dDayHistory.outro
      ]
    }
  ];

  // Dual philosophy data for Families & Couples
  const familiesAndCouplesData = {
    title: "Scenic Seine Cruises for Families & Couples",
    subtitle: "A balanced, educational multigenerational voyage and a deeply romantic French cultural escape.",
    sailing: {
      label: data.familiesAndCouples.families.title,
      philosophy: data.familiesAndCouples.families.intro,
      points: [
        ...data.familiesAndCouples.families.generations.map(
          (g) => `${g.role} ${g.features.join(", ")}`
        ),
        data.familiesAndCouples.families.quote
      ]
    },
    allSuite: {
      label: data.familiesAndCouples.couples.title,
      philosophy: data.familiesAndCouples.couples.intro,
      points: [
        ...data.familiesAndCouples.couples.experiences,
        data.familiesAndCouples.couples.quote
      ]
    }
  };

  // Cost factor items for AuthorityGrid
  const costItems = data.cost.factors.map((factor, idx) => ({
    title: factor,
    description: `Factor ${idx + 1} influencing total voyage investment, suite category selection, and peak French sailing season rates.`
  }));

  // Comparison table format
  const comparisonTableData = {
    title: data.comparison.title,
    headers: ["Cruise Line", "Particularly Appealing For"],
    rows: data.comparison.table.map((row) => [row.line, row.appeal])
  };

  // Common mistakes items for MistakesGrid
  const mistakeItems = data.mistakes.items.map((item) => ({
    title: item,
    description: "Avoiding this common planning mistake ensures a relaxed, seamless, and enriching Scenic Seine river cruise experience."
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

  // Formatted FAQs for FAQAccordion
  const formattedFaq = {
    title: data.faq.title,
    subtitle: data.faq.intro,
    questions: data.faq.items.map((item) => ({
      question: item.q,
      answer: item.a
    }))
  };

  // Final Verdict showcase items for ValueShowcase
  const valueShowcaseItems = [
    {
      image: scenicSeineVerdictFrenchConcert,
      imageCaption: "French Heritage & Exclusive Scenic Enrich Experiences",
      title: data.finalVerdict.title,
      description: [
        data.finalVerdict.intro,
        ...data.finalVerdict.extendedParagraphs
      ].join(" "),
      features: data.finalVerdict.services
    }
  ];

  // Detailed Inclusions List cards
  const detailedInclusionsCards = [
    {
      title: "All-Inclusive Seine Experiences",
      paragraphs: [
        data.whatsIncluded.intro,
        data.whatsIncluded.subIntro
      ],
      lists: [
        {
          title: "Core Inclusions",
          items: data.whatsIncluded.items
        }
      ]
    },
    {
      title: data.whatsIncluded.calloutTitle,
      paragraphs: [
        data.whatsIncluded.calloutText,
        "Your luxury travel advisor will verify every detail including stateroom categories, shore excursions, airport transfers, and bespoke pre-cruise Paris arrangements prior to booking confirmation."
      ],
      lists: [
        {
          title: "Advisor Verification",
          items: [
            "Scenic Gem stateroom and private Sun Lounge balcony allocation",
            "Included Scenic Enrich private concert and castle event access",
            "Complimentary airport transfers and baggage handling in Paris",
            "Expert D-Day historian-guided excursions and Giverny priority entry"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.metaDescription} />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/seine" />
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
        description={data.hero.extendedText}
        badge="Scenic Space-Ships • Paris to Normandy"
        backgroundImage={scenicSeineHeroGemSailing}
        primaryCtaText={data.hero.ctaText}
        primaryCtaLink={data.hero.ctaLink}
        secondaryCtaText="View Seine Itineraries"
        secondaryCtaLink="#best-itineraries"
      />

      {/* 2. Quick Answer Section */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        title={data.quickAnswer.title}
        paragraphs={[data.quickAnswer.intro, data.quickAnswer.outro]}
        highlights={data.quickAnswer.emphasis}
        image1={scenicSeineQaPontAlexandre}
        image2={scenicSeineQaArcDeTriomphe}
      />

      {/* 3. Why Choose Section */}
      <EditorialIntroSection
        eyebrow={data.whyChoose.eyebrow}
        heading={data.whyChoose.title}
        paragraphs={[data.whyChoose.intro]}
        badgeTitle={data.whyChoose.imageLabel}
        badgeDescription={data.whyChoose.callout}
        highlights={data.whyChoose.features}
        image={scenicSeineWhyGemCaudebec}
      />

      {/* 4. Where Does Cruise Go? (Destinations) */}
      <CardGrid
        title={data.destinations.title}
        subtitle={data.destinations.intro}
        cards={destinationCards}
        columns={4}
        stagger={false}
      />

      {/* 5. Inline CTA 1 */}
      <CenterCTA
        title={data.cta1.title}
        description={data.cta1.text}
        buttonText={data.cta1.buttonText}
        buttonLink={data.cta1.link}
        image={scenicSeineCta1Honfleur}
        theme="dark"
      />

      {/* 6. Best Time to Cruise */}
      <ThreeColumnGrid
        title={data.bestTimeToCruise.title}
        subtitle={data.bestTimeToCruise.intro}
        items={seasonItems}
      />

      {/* 7. Best Itineraries (Tabbed Component) */}
      <div id="best-itineraries">
        <TravelerProfileTabs
          title={data.bestItineraries.title}
          subtitle={data.bestItineraries.intro}
          profiles={itineraryTabs}
        />
      </div>

      {/* 8. Art Lovers & Impressionism Highlights */}
      <InclusionsList
        title={data.artLovers.title}
        expertNote={`${data.artLovers.lead} ${data.artLovers.conclusion}`}
        inclusions={data.artLoversDeep.experiences}
        image={scenicSeineArtRouenMuseum}
      />

      {/* 9. Excursions Section */}
      <ExpertRulesGrid
        title={data.excursions.title}
        subtitle={data.excursions.intro}
        rules={excursionRules}
      />

      {/* 10. Inline CTA 2 */}
      <CenterCTA
        title={data.cta2.title}
        description={data.cta2.text}
        buttonText={data.cta2.buttonText}
        buttonLink={data.cta2.link}
        image={scenicSeineCta2ChateauAgassac}
        theme="dark"
      />

      {/* 11. Cabins & Butler Service */}
      <CabinFeatureGrid
        data={cabinFeatureData}
        image1={scenicSeineCabinsBalconySuite}
        image2={scenicSeineButlerRoyalSuite}
      />

      {/* 12. Food, Wine & Normandy D-Day History */}
      <GenericChecklistCards
        title="Seine Dining, Regional Cheeses & Normandy D-Day History"
        subtitle="French Gastronomy & Monumental Memorials"
        cards={foodAndDdayCards}
      />

      {/* 13. Families & Couples Section */}
      <DualPhilosophyShowcase
        data={familiesAndCouplesData}
        imageSailing={scenicSeineFamiliesEbikes}
        imageAllSuite={scenicSeineCouplesSundeckEvening}
      />

      {/* 14. Cost Factors Section */}
      <AuthorityGrid
        title={data.cost.title}
        subtitle={`${data.cost.intro} ${data.cost.calloutTitle} - ${data.cost.calloutText}`}
        items={costItems}
      />

      {/* 15. Inline CTA 3 */}
      <CenterCTA
        title={data.cta3.title}
        description={data.cta3.text}
        buttonText={data.cta3.buttonText}
        buttonLink={data.cta3.link}
        image={scenicSeineCta3GemStateroom}
        theme="dark"
      />

      {/* 16. What's Included */}
      <DetailedInclusionsList
        title={data.whatsIncluded.title}
        intro={[data.whatsIncluded.intro, data.whatsIncluded.subIntro]}
        items={detailedInclusionsCards}
      />

      {/* 17. Comparison Table */}
      <ComparisonTable data={comparisonTableData} />

      {/* 18. Common Mistakes */}
      <MistakesGrid
        title={data.mistakes.title}
        items={mistakeItems}
      />

      {/* 19. Days Needed & Pre-Cruise Paris Planning */}
      <ProsConsCards
        title={data.duration.title}
        prosTitle={data.duration.shorter.title}
        consTitle={data.duration.longer.title}
        bestFor={data.duration.shorter.items}
        notBestFor={data.duration.longer.items}
        bottomNote={data.duration.tip}
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
        name={data.credentials.name}
        title={`${data.credentials.role} • ${data.credentials.countries}`}
        image={AboutImage}
        bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury European river cruises and bespoke itineraries for discerning travelers."
        credentials={data.credentials.items}
        ctaText="Plan with Angela"
        ctaLink="/contact"
      />

      {/* 22. Frequently Asked Questions */}
      <FAQAccordion data={formattedFaq} />

      {/* 23. Final Verdict */}
      <ValueShowcase
        title="Final Verdict: France, Deepened — Not Just Visited"
        subtitle="Exclusive Scenic Space-Ship Luxury & VIP Planning"
        items={valueShowcaseItems}
      />

      {/* 24. Concluding CTA */}
      <CenterCTA
        title={data.closingCta.title}
        description={data.closingCta.text}
        buttonText={data.closingCta.buttonText}
        buttonLink={data.closingCta.link}
        image={scenicSeineClosingPalaisGarnier}
        theme="dark"
      />
    </div>
  );
};

export default ScenicSeineRiverCruises;