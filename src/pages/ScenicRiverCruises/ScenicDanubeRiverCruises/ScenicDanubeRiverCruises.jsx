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

// Assets from dedicated ScenicDanubeRiverCruises folder
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import scenicDanubeHeroAmberDurnstein from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-hero-amber-durnstein.webp";
import scenicDanubeQaBudapestParliament from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-qa-budapest-parliament.webp";
import scenicDanubeQaViennaPalace from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-qa-vienna-palace.webp";
import scenicDanubeWhyShipJewel from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-why-ship-jewel.webp";
import scenicDanubeCta1BudapestCityscape from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-cta1-budapest-cityscape.webp";
import scenicDanubeSeasonSpring from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-season-spring.webp";
import scenicDanubeSeasonSummer from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-season-summer.webp";
import scenicDanubeSeasonFall from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-season-fall.webp";
import scenicDanubeSeasonWinter from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-season-winter.webp";
import scenicDanubeItinBudapestVienna from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-itin-budapest-vienna.webp";
import scenicDanubeItinCentralEuropeMelk from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-itin-central-europe-melk.webp";
import scenicDanubeItinChristmasBratislava from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-itin-christmas-bratislava.webp";
import scenicDanubeCastlesBratislavaSunset from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-castles-bratislava-sunset.webp";
import scenicDanubeCta2IronGates from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-cta2-iron-gates.webp";
import scenicDanubeCabinsSunLounge from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-cabins-sun-lounge.webp";
import scenicDanubeButlerSuiteService from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-butler-suite-service.webp";
import scenicDanubeFamiliesViennaEbike from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-families-vienna-ebike.webp";
import scenicDanubeCouplesPoolBudapest from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-couples-pool-budapest.webp";
import scenicDanubeCta3SuiteLuxury from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-cta3-suite-luxury.webp";
import scenicDanubeVerdictLichtensteinConcert from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-verdict-lichtenstein-concert.webp";
import scenicDanubeClosingBudapestAerial from "../../../assets/ScenicRiverCruises/ScenicDanubeRiverCruises/scenic-danube-closing-budapest-aerial.webp";

const ScenicDanubeRiverCruises = () => {
  // Season items mapping for ThreeColumnGrid
  const seasonImages = [
    scenicDanubeSeasonSpring,
    scenicDanubeSeasonSummer,
    scenicDanubeSeasonFall,
    scenicDanubeSeasonWinter
  ];

  const seasonItems = data.bestTimeToCruise.items.map((item, idx) => ({
    category: item.category,
    title: item.title,
    description: item.description,
    bullets: item.features,
    image: seasonImages[idx]
  }));

  // Itinerary items mapping for TravelerProfileTabs
  const itineraryImages = [
    scenicDanubeItinBudapestVienna,
    scenicDanubeItinCentralEuropeMelk,
    scenicDanubeItinChristmasBratislava
  ];

  const itineraryTabs = data.bestItineraries.items.map((item, idx) => ({
    name: item.badge,
    tagline: item.category,
    quote: item.title,
    recommendation: item.category,
    reason: item.description,
    whyFits: item.bestFor,
    image: itineraryImages[idx]
  }));

  // Excursion rules mapping for ExpertRulesGrid
  const excursionRules = data.excursions.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item.title,
    description: item.description
  }));

  // Destination cards mapping for CardGrid
  const destinationIcons = [
    "Landmark",
    "Music",
    "Castle",
    "Compass",
    "Building2",
    "Church",
    "Sparkles"
  ];

  const destinationCards = data.destinations.items.map((item, idx) => ({
    title: item.title,
    description: "Danube Highlights & Historic Wonders",
    bullets: item.items,
    icon: destinationIcons[idx] || "Landmark"
  }));

  // Cabins and Butler data for CabinFeatureGrid
  const cabinFeatureData = {
    title: "Scenic Danube Cabins & Butler Service",
    subtitle: "Personalized comfort and 5-star service tailored to your Central European journey.",
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

  // Food, Wine & Christmas Markets checklist cards
  const foodAndChristmasCards = [
    {
      title: data.diningAndChristmas.foodAndWine.title,
      items: [
        data.diningAndChristmas.foodAndWine.text,
        `${data.diningAndChristmas.foodAndWine.countriesTitle} Hungary, Austria, Slovakia (${data.diningAndChristmas.foodAndWine.note})`,
        ...data.diningAndChristmas.foodAndWine.highlights,
        data.diningAndChristmas.foodAndWine.outro
      ]
    },
    {
      title: data.diningAndChristmas.christmasMarkets.title,
      items: [
        data.diningAndChristmas.christmasMarkets.text,
        `${data.diningAndChristmas.christmasMarkets.listTitle}:`,
        ...data.diningAndChristmas.christmasMarkets.highlights,
        data.diningAndChristmas.christmasMarkets.outro
      ]
    }
  ];

  // Dual philosophy data for Families & Couples
  const familiesAndCouplesData = {
    title: "Scenic Danube Cruises for Families & Couples",
    subtitle: "A balanced, multigenerational journey and a deeply romantic luxury escape.",
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
    description: `Factor ${idx + 1} influencing total cruise investment, stateroom availability, and peak seasonal pricing.`
  }));

  // Comparison table format
  const comparisonTableData = {
    title: data.comparison.title,
    headers: ["Cruise Line", "Particularly Appealing For"],
    rows: data.comparison.table.map((row) => [row.line, row.appeal])
  };

  // Common mistakes items
  const mistakeItems = data.mistakes.items.map((item) => ({
    title: item,
    description: "Avoiding this common mistake ensures a seamless, relaxed, and rewarding Scenic Danube river cruise experience."
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

  // Formatted FAQs
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
      image: scenicDanubeVerdictLichtensteinConcert,
      imageCaption: "Vienna Palais Liechtenstein • Exclusive Enrich Concert",
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
      title: "All-Inclusive Danube Experiences",
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
        "Your luxury travel advisor will verify every detail including complimentary drinks, shore excursions, Wi-Fi, and gratuities prior to confirmation."
      ],
      lists: [
        {
          title: "Advisor Verification",
          items: [
            "Suite-specific beverage packages and mini-bar restocking",
            "Included Scenic Enrich private concert allocations",
            "Complimentary airport transfers and baggage handling",
            "E-bike availability and guided shore excursion bookings"
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
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/danube" />
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
        badge="Scenic Space-Ships • Central Europe"
        backgroundImage={scenicDanubeHeroAmberDurnstein}
        primaryCtaText={data.hero.ctaText}
        primaryCtaLink={data.hero.ctaLink}
        secondaryCtaText="View Danube Itineraries"
        secondaryCtaLink="#best-itineraries"
      />

      {/* 2. Quick Answer Section */}
      <AsymmetricStoryIntro
        eyebrow="The Quick Answer"
        title={data.quickAnswer.title}
        paragraphs={[data.quickAnswer.intro, data.quickAnswer.outro]}
        highlights={data.quickAnswer.emphasis}
        image1={scenicDanubeQaBudapestParliament}
        image2={scenicDanubeQaViennaPalace}
      />

      {/* 3. Why Choose Section */}
      <EditorialIntroSection
        eyebrow="The Scenic Advantage"
        heading={data.whyChoose.title}
        paragraphs={[data.whyChoose.intro]}
        badgeTitle={data.whyChoose.imageLabel}
        badgeDescription={data.whyChoose.callout}
        highlights={data.whyChoose.features}
        image={scenicDanubeWhyShipJewel}
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
        image={scenicDanubeCta1BudapestCityscape}
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

      {/* 8. Castles, Abbeys & Historic Sites */}
      <InclusionsList
        title={data.castles.title}
        expertNote={`${data.castles.lead} ${data.castles.conclusion}`}
        inclusions={data.castles.items}
        image={scenicDanubeCastlesBratislavaSunset}
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
        image={scenicDanubeCta2IronGates}
        theme="dark"
      />

      {/* 11. Cabins & Butler Service */}
      <CabinFeatureGrid
        data={cabinFeatureData}
        image1={scenicDanubeCabinsSunLounge}
        image2={scenicDanubeButlerSuiteService}
      />

      {/* 12. Food, Wine & Christmas Markets */}
      <GenericChecklistCards
        title="Danube Dining, Regional Wine & Christmas Markets"
        subtitle="Culinary & Holiday Traditions"
        cards={foodAndChristmasCards}
      />

      {/* 13. Families & Couples Section */}
      <DualPhilosophyShowcase
        data={familiesAndCouplesData}
        imageSailing={scenicDanubeFamiliesViennaEbike}
        imageAllSuite={scenicDanubeCouplesPoolBudapest}
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
        image={scenicDanubeCta3SuiteLuxury}
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

      {/* 19. Days Needed & Pre-Cruise Hotel Planning */}
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
        title="Final Verdict: Central Europe in Luxury"
        subtitle="Exclusive Experiences & VIP Planning"
        items={valueShowcaseItems}
      />

      {/* 24. Concluding CTA */}
      <CenterCTA
        title={data.closingCta.title}
        description={data.closingCta.text}
        buttonText={data.closingCta.buttonText}
        buttonLink={data.closingCta.link}
        image={scenicDanubeClosingBudapestAerial}
        theme="dark"
      />
    </div>
  );
};

export default ScenicDanubeRiverCruises;