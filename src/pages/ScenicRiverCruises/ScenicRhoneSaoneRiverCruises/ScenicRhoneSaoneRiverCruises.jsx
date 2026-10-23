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

// Assets from dedicated ScenicRhoneSaoneRiverCruises folder commented out
/*
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import scenicRhoneHeroSapphireLyon from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-hero-sapphire-lyon.webp";
import scenicRhoneQaPontAvignon from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-qa-pont-avignon.webp";
import scenicRhoneQaBeauneCathedral from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-qa-beaune-cathedral.webp";
import scenicRhoneWhySapphireDocked from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-why-sapphire-docked.webp";
import scenicRhoneCta1LesBaux from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-cta1-les-baux.webp";
import scenicRhoneSeasonSpring from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-season-spring.webp";
import scenicRhoneSeasonSummer from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-season-summer.webp";
import scenicRhoneSeasonFall from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-season-fall.webp";
import scenicRhoneSeasonWinter from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-season-winter.webp";
import scenicRhoneItinChateauGrignan from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-itin-chateau-grignan.webp";
import scenicRhoneItinShopWithChef from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-itin-shop-with-chef.webp";
import scenicRhoneItinArlesVanGogh from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-itin-arles-van-gogh.webp";
import scenicRhoneArtRoussillonPanoramic from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-art-roussillon-panoramic.webp";
import scenicRhoneCta2StGeorgesLyon from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-cta2-st-georges-lyon.webp";
import scenicRhoneCabinsBalconySuite from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-cabins-balcony-suite.webp";
import scenicRhoneButlerRoyalSuite from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-butler-royal-suite.webp";
import scenicRhoneFamiliesLunch from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-families-lunch.webp";
import scenicRhoneCouplesSundeck from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-couples-sundeck.webp";
import scenicRhoneCta3CulinaireKitchen from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-cta3-culinaire-kitchen.webp";
import scenicRhoneVerdictSapphireLyon from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-verdict-sapphire-lyon.webp";
import scenicRhoneClosingVieuxLyon from "../../../assets/ScenicRiverCruises/ScenicRhoneSaoneRiverCruises/scenic-rhone-closing-vieux-lyon.webp";
*/

const ScenicRhoneSaoneRiverCruises = () => {
  // Season items mapping for ThreeColumnGrid
  /*
  const seasonImages = [
    scenicRhoneSeasonSpring,
    scenicRhoneSeasonSummer,
    scenicRhoneSeasonFall,
    scenicRhoneSeasonWinter
  ];
  */

  const seasonItems = data.bestTimeToCruise.items.map((item, idx) => ({
    category: item.eyebrow,
    title: item.title,
    description: item.intro,
    features: item.items,
    bullets: item.items,
    highlight: item.outro,
    // image: seasonImages[idx]
  }));

  // Itinerary items mapping for TravelerProfileTabs
  /*
  const itineraryImages = [
    scenicRhoneItinChateauGrignan,
    scenicRhoneItinShopWithChef,
    scenicRhoneItinArlesVanGogh
  ];
  */

  const itineraryTabs = data.bestItineraries.items.map((item, idx) => ({
    name: item.title,
    tagline: item.badge,
    quote: item.title,
    recommendation: item.badge,
    reason: item.desc,
    whyFits: item.columns?.[0]?.items || [],
    // image: itineraryImages[idx]
  }));

  // Excursion rules mapping for ExpertRulesGrid
  const excursionRules = data.excursions.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item.title,
    description: item.desc
  }));

  // Destination cards mapping for CardGrid
  const destinationIcons = [
    "Utensils",
    "Landmark",
    "Palette",
    "Wine",
    "Sparkles",
    "Castle",
    "Compass"
  ];

  const destinationCards = data.destinations.items.map((item, idx) => ({
    title: item.title,
    description: "Rhône & Saône Highlights",
    bullets: item.items,
    icon: destinationIcons[idx] || "Landmark"
  }));

  // Cabins and Butler data for CabinFeatureGrid
  const cabinFeatureData = {
    title: data.cabinsAndButler.cabins.title,
    subtitle: "Personalized comfort, panoramic all-weather Sun Lounges, and five-star Butler Service on Scenic Sapphire.",
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

  // Food, Wine & Roman History checklist cards
  const foodAndHistoryCards = [
    {
      title: data.diningAndHistory.foodAndWine.title,
      items: [
        data.diningAndHistory.foodAndWine.text,
        ...data.diningAndHistory.foodAndWine.highlights,
        data.diningAndHistory.foodAndWine.outro
      ]
    },
    {
      title: data.diningAndHistory.historyAndArchitecture.title,
      items: [
        data.diningAndHistory.historyAndArchitecture.text,
        ...data.diningAndHistory.historyAndArchitecture.highlights,
        data.diningAndHistory.historyAndArchitecture.outro
      ]
    }
  ];

  // Dual philosophy data for Families & Couples
  const familiesAndCouplesData = {
    title: "Scenic Rhône & Saône Cruises for Families & Couples",
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
    description: "Avoiding this common planning mistake ensures a relaxed, seamless, and enriching Scenic Rhône river cruise experience."
  }));

  // Advisor benefit cards mapping with Lucide icons
  const advisorIconNames = [
    "Ship",
    "Home",
    "Compass",
    "Calendar",
    "Sparkles",
    "Wine",
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
      // image: scenicRhoneVerdictSapphireLyon,
      imageCaption: "Scenic Sapphire Sailing Through Historic Lyon",
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
      title: "All-Inclusive Rhône Experiences",
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
        "Your luxury travel advisor will verify every detail including stateroom categories, shore excursions, airport transfers, and bespoke pre-cruise arrangements prior to booking confirmation."
      ],
      lists: [
        {
          title: "Advisor Verification",
          items: [
            "Scenic Sapphire stateroom and private Sun Lounge balcony allocation",
            "Included Scenic Enrich private classical concert and castle access",
            "Complimentary airport transfers and baggage handling in Lyon",
            "Sommelier-led vineyard excursions and priority winery entry"
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
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/rhone-saone" />
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
        badge="Scenic Space-Ships • Burgundy to Provence"
        // backgroundImage={scenicRhoneHeroSapphireLyon}
        primaryCtaText={data.hero.ctaText}
        primaryCtaLink={data.hero.ctaLink}
        secondaryCtaText="View Rhône Itineraries"
        secondaryCtaLink="#best-itineraries"
      />

      {/* 2. Quick Answer Section */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        title={data.quickAnswer.title}
        paragraphs={[data.quickAnswer.intro, data.quickAnswer.outro]}
        highlights={data.quickAnswer.emphasis}
        // image1={scenicRhoneQaPontAvignon}
        // image2={scenicRhoneQaBeauneCathedral}
      />

      {/* 3. Why Choose Section */}
      <EditorialIntroSection
        eyebrow={data.whyChoose.eyebrow}
        heading={data.whyChoose.title}
        paragraphs={[data.whyChoose.intro]}
        badgeTitle={data.whyChoose.imageLabel}
        badgeDescription={data.whyChoose.callout}
        highlights={data.whyChoose.features}
        // image={scenicRhoneWhySapphireDocked}
      />

      {/* 4. Where Do Rhône & Saône Cruises Go? (Destinations) */}
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
        // image={scenicRhoneCta1LesBaux}
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

      {/* 8. Art Lovers & Light of Provence */}
      <InclusionsList
        title={data.artLovers.title}
        expertNote={`${data.artLovers.lead} ${data.artLovers.conclusion}`}
        inclusions={data.artLoversDeep.experiences}
        // image={scenicRhoneArtRoussillonPanoramic}
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
        // image={scenicRhoneCta2StGeorgesLyon}
        theme="dark"
      />

      {/* 11. Cabins & Butler Service */}
      <CabinFeatureGrid
        data={cabinFeatureData}
        // image1={scenicRhoneCabinsBalconySuite}
        // image2={scenicRhoneButlerRoyalSuite}
      />

      {/* 12. Food, Wine & Roman History */}
      <GenericChecklistCards
        title="Rhône Gastronomy, Burgundy Wine & Roman Provence"
        subtitle="Culinary Heritage & Ancient Antiquity"
        cards={foodAndHistoryCards}
      />

      {/* 13. Families & Couples Section */}
      <DualPhilosophyShowcase
        data={familiesAndCouplesData}
        // imageSailing={scenicRhoneFamiliesLunch}
        // imageAllSuite={scenicRhoneCouplesSundeck}
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
        // image={scenicRhoneCta3CulinaireKitchen}
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

      {/* 19. Days Needed & Pre-Cruise Lyon Planning */}
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
        // image={AboutImage}
        bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury European river cruises and bespoke itineraries for discerning travelers."
        credentials={data.credentials.items}
        ctaText="Plan with Angela"
        ctaLink="/contact"
      />

      {/* 22. Frequently Asked Questions */}
      <FAQAccordion data={formattedFaq} />

      {/* 23. Final Verdict */}
      <ValueShowcase
        title="Final Verdict: Burgundy to Provence in Scenic Luxury"
        subtitle="Exclusive Scenic Space-Ship Luxury & VIP Planning"
        items={valueShowcaseItems}
      />

      {/* 24. Concluding CTA */}
      <CenterCTA
        title={data.closingCta.title}
        description={data.closingCta.text}
        buttonText={data.closingCta.buttonText}
        buttonLink={data.closingCta.link}
        // image={scenicRhoneClosingVieuxLyon}
        theme="dark"
      />
    </div>
  );
};

export default ScenicRhoneSaoneRiverCruises;