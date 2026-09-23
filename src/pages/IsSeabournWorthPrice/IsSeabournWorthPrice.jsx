import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Wine,
  Gem,
  Heart,
  Snowflake,
  Home,
  User,
  Award,
  AlertCircle,
  Compass,
  Coffee,
  Utensils,
  ChefHat,
  Ship,
  Star,
  MapPin,
  Users,
  Check,
  X
} from "lucide-react";

// Page Data JSON
import pageData from "./data.json";
import Nav from "@/components/Navbar/Nav";

// Shared Components & UI System
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CardGrid from "@/components/ui/CardGrid";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import EditorialIntroSection from "@/components/ui/EditorialIntroSection";
import EditorialIntroSplit from "@/components/ui/EditorialIntroSplit";
import CenterCTA from "@/components/ui/CenterCTA";
import ProsConsCards from "@/components/ui/ProsConsCards";
import MoneySavingTips from "@/components/ui/MoneySavingTips";
import InclusionCheckerGrid from "@/components/ui/InclusionCheckerGrid";
import MistakesGrid from "@/components/ui/MistakesGrid";
import EditorialExcursionShowcase from "@/components/ui/EditorialExcursionShowcase";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import BentoGlassmorphismGrid from "@/components/ui/BentoGlassmorphismGrid";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import ExpertRulesGrid from "@/components/ui/ExpertRulesGrid";
import InclusionsSplitFeatures from "@/components/ui/InclusionsSplitFeatures";
import ValuePropositionHighlight from "@/components/ui/ValuePropositionHighlight";
import TravelerProfileTabs from "@/components/ui/TravelerProfileTabs";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import VideoEmbed from "@/components/ui/VideoEmbed";

// Asset References
import AboutImage from "../../assets/AboutAngela.jpeg";
import HeroImage from "../../assets/IsSeabournWorthPrice/is-a-seabourn-cruise-worth-the-price-luxury-guide.jpg";
import PayingForImg from "../../assets/WhatIncludedSeabournCruise/seabourn-cruise-inclusions-true-cost-value-breakdown.jpg";
import PersonalServiceImg from "../../assets/IsSeabournWorthPrice/seabourn-personal-service-intuitive-luxury-hospitality.jpg";
import FinalVerdictImg from "../../assets/WhatIncludedSeabournCruise/seabourn-final-verdict-all-inclusive-value-lifestyle.jpg";
import OptionAMainstreamImg from "../../assets/IsSeabournWorthPrice/mainstream-cruise-balcony-pricing-extra-costs-showdown.jpg";
import OptionBSeabournImg from "../../assets/IsSeabournWorthPrice/seabourn-all-inclusive-veranda-suite-true-value-comparison.jpg";
import SeabournDiningImg from "../../assets/IsSeabournWorthPrice/seabourn-complimentary-fine-dining-gourmet-restaurants.jpg";
import LocalCulturalImg from "../../assets/IsSeabournWorthPrice/seabourn-curated-local-cultural-heritage-shore-excursions.jpg";
import WineTastingsImg from "../../assets/IsSeabournWorthPrice/seabourn-culinary-market-tours-and-regional-wine-tastings.jpg";
import WildlifeTrekImg from "../../assets/IsSeabournWorthPrice/seabourn-small-group-wildlife-observation-nature-treks.jpg";
import ZodiacLandingsImg from "../../assets/IsSeabournWorthPrice/seabourn-expedition-polar-zodiac-landings-remote-cruising.jpg";
import BoutiqueGuidesImg from "../../assets/IsSeabournWorthPrice/seabourn-curated-boutique-destination-tours-expert-guides.jpg";
import PrivateCarImg from "../../assets/IsSeabournWorthPrice/seabourn-private-car-driver-custom-port-tours.jpg";
import ExpeditionCruisesImg from "../../assets/IsSeabournWorthPrice/seabourn-ultra-luxury-expedition-cruises-venture-pursuit.jpg";
import SmallShipFleetImg from "../../assets/IsSeabournWorthPrice/seabourn-intimate-small-ship-fleet-yacht-experience.jpg";
import MassMarketMegaShipsImg from "../../assets/IsSeabournWorthPrice/mass-market-mega-cruise-ships-crowded-comparison.jpg";
import WaterParksImg from "../../assets/IsSeabournWorthPrice/seabourn-excludes-crowded-water-parks-and-waterslides.jpg";
import MegaEntertainmentImg from "../../assets/IsSeabournWorthPrice/seabourn-excludes-mega-entertainment-complexes.jpg";
import RollerCoastersImg from "../../assets/IsSeabournWorthPrice/seabourn-excludes-onboard-roller-coasters-and-arcades.jpg";
import TeenLoungesImg from "../../assets/IsSeabournWorthPrice/seabourn-excludes-large-kids-clubs-and-teen-lounges.jpg";
import DailyAnnouncementsImg from "../../assets/IsSeabournWorthPrice/seabourn-quiet-luxury-no-disruptive-daily-announcements.jpg";
import ShoppingMallsImg from "../../assets/IsSeabournWorthPrice/seabourn-excludes-crowded-multi-story-shopping-malls.jpg";
import CouplesImg from "../../assets/IsSeabournWorthPrice/is-seabourn-worth-it-for-couples-romantic-cruises.jpg";
import SoloTravelerImg from "../../assets/IsSeabournWorthPrice/is-seabourn-worth-it-for-solo-travelers-single-supplement.jpg";
import FamiliesImg from "../../assets/IsSeabournWorthPrice/is-seabourn-worth-it-for-multigenerational-families.jpg";
import FirstTimeCruisersImg from "../../assets/IsSeabournWorthPrice/seabourn-value-for-first-time-luxury-cruisers.jpg";
import ExperiencedVoyagersImg from "../../assets/IsSeabournWorthPrice/seabourn-value-for-experienced-luxury-voyagers.jpg";
import LuxuryCruiseLinesImg from "../../assets/IsSeabournWorthPrice/seabourn-vs-other-ultra-luxury-cruise-lines-comparison.jpg";

const IsSeabournWorthIt = () => {

  // 1. Quick Verdict Ratings Table (ComparisonTable - 1x of 2)
  const quickVerdictTableData = {
    title: pageData.quickVerdict.title,
    subtitle: pageData.quickVerdict.eyebrow,
    headers: ["Experience Category", "Seabourn Rating", "Value Verdict"],
    rows: pageData.quickVerdict.table.map((row) => [
      row.cat,
      `${row.rating} (${"★".repeat(row.stars)})`,
      row.verdict
    ])
  };

  // 2. Service Worth Analysis (CostValueAnalysisCards - 1x)
  const serviceIncluded = pageData.serviceWorth.details.map((item) => ({
    title: item,
    description: "Intuitive, one-to-one hospitality delivered by dedicated suite hosts and culinary staff."
  }));
  const serviceExtras = [
    {
      title: "When Service Is Not a Priority",
      description: pageData.serviceWorth.warning
    },
    {
      title: "Mainstream Comparison",
      description: "Large mega-ships with thousands of guests cannot deliver personalized recognition or intimate crew connection."
    }
  ];

  // 3. Suites Cards (CardGrid - 1x)
  const suiteCards = pageData.suitesWorth.features.map((feat) => ({
    title: feat.title,
    description: feat.text,
    icon: "Home",
    bullets: [
      "All-suite ocean-front accommodation",
      "Dedicated personal suite host service"
    ]
  }));

  // 4. Two Vacations, Same Price (ContainedShowdown - 1x of 2)
  const optionABrand = {
    name: pageData.allSuiteMatters.optionA.title,
    image: OptionAMainstreamImg,
    features: pageData.allSuiteMatters.optionA.items
  };
  const optionBBrand = {
    name: pageData.allSuiteMatters.optionB.title,
    image: OptionBSeabournImg,
    features: pageData.allSuiteMatters.optionB.items
  };

  // 5. Dining Lineup Showcase (EditorialFeatureShowcase - 1x)
  const diningFeatures = pageData.diningWorth.diningVenues.map((v) => ({
    title: v.title,
    description: v.description
  }));

  // 6. Wi-Fi Bento Items (BentoGlassmorphismGrid - 1x)
  const wifiBentoItems = pageData.wifiWorth.bentoCards;

  // 7. Not Included Items (MistakesGrid - 1x)
  const notIncludedItems = pageData.notIncluded.items.map((item) => ({
    title: item,
    description: "Budget separately as an independent expense outside the standard cruise fare."
  }));

  // 8. Excursion Showcase Items (EditorialExcursionShowcase - 1x)
  const excursionImages = [
    LocalCulturalImg,
    WineTastingsImg,
    WildlifeTrekImg,
    ZodiacLandingsImg,
    BoutiqueGuidesImg,
    PrivateCarImg
  ];

  const excursionItems = pageData.excursionsWorth.excursionPriorities.map((item, idx) => ({
    title: item,
    category: "Curated Destination Experience",
    description: "Small-group shore tours and remote exploration designed around deep destination access.",
    image: excursionImages[idx] || null
  }));

  // 9. Small Ship vs Mega Ship (ContainedShowdown - 2x of 2)
  const smallShipBrand = {
    name: "Seabourn Small-Ship Fleet (264–600 Guests)",
    image: SmallShipFleetImg,
    features: pageData.smallShipExperience.advantages
  };
  const megaShipBrand = {
    name: "Mass-Market Mega-Ships (3,000–6,000 Guests)",
    image: MassMarketMegaShipsImg,
    features: [
      "Thousands of passengers creating crowded public areas",
      "Long lines for specialty dining, tenders, and embarkation",
      "Cannot access small historic boutique ports and harbors",
      "Impersonal service with low crew-to-guest ratios",
      "Frequent extra surcharges for Wi-Fi, dining, and drinks"
    ]
  };

  // 10. What Seabourn Does Not Offer (ThreeColumnGrid - 1x)
  const notOfferedImages = [
    WaterParksImg,
    MegaEntertainmentImg,
    RollerCoastersImg,
    TeenLoungesImg,
    DailyAnnouncementsImg,
    ShoppingMallsImg
  ];

  const notOfferedCards = pageData.notOffered.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    category: item.category,
    highlight: "Deliberately Excluded",
    image: notOfferedImages[idx] || null
  }));

  // 11. Seabourn vs Other Luxury Lines (InclusionsSplitFeatures - 1x)
  const vsLuxuryData = {
    headline: pageData.vsOtherLuxury.title,
    description: "Comparing Seabourn against other ultra-luxury cruise lines requires evaluating ship size, dining flexibility, and fare inclusion structures.",
    pullQuote: "Seabourn gives you complete freedom to enjoy curated boutique excursions or explore independently without paying for unwanted bundled tours.",
    whatIsIncluded: {
      title: pageData.vsOtherLuxury.silversea.title,
      items: pageData.vsOtherLuxury.silversea.items || []
    },
    whatIsExtra: {
      title: pageData.vsOtherLuxury.regent.title,
      items: pageData.vsOtherLuxury.regent.items || []
    }
  };

  // 12. When Worth the Premium (MoneySavingTips - 1x)
  const whenWorthCompelling = pageData.whenWorth.worthList.map((item) => ({
    title: item.label,
    description: item.text
  }));
  const whenWorthNotCompelling = pageData.whenWorth.notWorthList;

  // 13. The Real Value Test Steps (StepByStepGuide - 1x)
  const valueTestSteps = pageData.valueTest.questions.map((q) => ({
    title: `${q.step}. ${q.q}`,
    description: q.a
  }));

  // 14. Cost vs Total Vacation Cost Table (ComparisonTable - 2x of 2)
  const costTableData = {
    title: pageData.costVsTotal.title,
    subtitle: pageData.costVsTotal.intro,
    headers: ["Vacation Expense", "Seabourn Inclusive Coverage"],
    rows: pageData.costVsTotal.table.map((row) => [row.expense, row.seabourn])
  };

  // 15. Simple Way to Decide Rules (ExpertRulesGrid - 1x)
  const simpleDecideRules = pageData.simpleDecide.rules.map((r) => ({
    title: r.title,
    description: r.description
  }));

  // 16. Pros & Cons Features (FeatureGrid - 1x)
  const prosFeatures = pageData.prosCons.pros.map((p) => ({
    title: p.title,
    description: p.description,
    icon: p.icon
  }));

  // 17. Luxury Traveler Value Pillars (ValuePropositionHighlight - 1x)
  const luxuryValueItems = pageData.luxuryTraveler.formula.map((item) => ({
    title: item,
    description: "Fully integrated into your Seabourn cruise fare for a frictionless luxury vacation.",
    impact: "Included",
    icon: "CheckCircle"
  }));

  // 17b. Traveler Profiles with Images (TravelerProfileTabs - 1x)
  const profileImages = [
    CouplesImg,
    SoloTravelerImg,
    FamiliesImg,
    FirstTimeCruisersImg,
    ExperiencedVoyagersImg
  ];

  const travelerProfilesWithImages = pageData.worthForYou.profiles.map((profile, idx) => ({
    ...profile,
    image: profileImages[idx] || null
  }));

  // 18. FAQ Data (FAQAccordion - 1x)
  const faqAccordionData = {
    title: "Frequently Asked Questions About Seabourn Value",
    subtitle: "Everything travelers need to know before deciding whether Seabourn is worth the price.",
    questions: (pageData.faq || []).map((item) => ({
      question: item.question || item.q,
      answer: item.answer || item.a
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <link rel="canonical" href={pageData.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(pageData.schema)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero - 1x) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={`${pageData.hero.subtitle} ${pageData.hero.extendedParagraphs[0]} ${pageData.hero.extendedParagraphs[1]} ${pageData.hero.extendedParagraphs[2]} ${pageData.hero.extendedParagraphs[3]}`}
        backgroundImage={HeroImage}
        secondaryCtaText="Contact"
        secondaryCtaLink="/contact"
      />

      <div id="content">

      {/* ─── 2. QUICK VERDICT RATINGS TABLE (ComparisonTable - 1x of 2) ─── */}
      <ComparisonTable data={quickVerdictTableData} />

      {/* ─── 3. WHAT ARE YOU ACTUALLY PAYING FOR? (EditorialIntroSection - 1x of 2) ─── */}
      <EditorialIntroSection
        eyebrow={pageData.payingFor.eyebrow}
        heading={pageData.payingFor.title}
        paragraphs={[
          pageData.payingFor.lead,
          "A Seabourn cruise fare bundles accommodations, dining, drinks, and gratuities into a transparent, all-inclusive luxury vacation."
        ]}
        highlights={pageData.payingFor.items}
        placeholderLabel="SEABOURN INCLUDED EXPERIENCE"
        badgeTitle="All-Inclusive Hospitality"
        badgeDescription="Fine dining, premium spirits, Starlink Wi-Fi, in-suite bar, and crew gratuities are fully included."
        image={PayingForImg}
      />

      {/* ─── 4. DEFINING DIFFERENCE: PERSONAL SERVICE (EditorialIntroSplit - 1x) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.personalService.eyebrow}
        heading={pageData.personalService.title}
        paragraphs={[
          pageData.personalService.intro,
          `${pageData.personalService.formula.title} ${pageData.personalService.formula.body.join(' + ')} ${pageData.personalService.formula.verdict}`
        ]}
        primaryImage={PersonalServiceImg}
      />

      {/* ─── 5. IS SERVICE WORTH PAYING MORE FOR? (CostValueAnalysisCards - 1x) ─── */}
      <CostValueAnalysisCards
        title={pageData.serviceWorth.title}
        subtitle={pageData.serviceWorth.lead}
        includedTitle={pageData.serviceWorth.cardTitle}
        extrasTitle="When Service Might Not Fit"
        included={serviceIncluded}
        extras={serviceExtras}
      />

      {/* ─── MID-PAGE CTA 1: SERVICE (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.serviceCta.title}
        description={pageData.serviceCta.description}
        buttonText={pageData.serviceCta.buttonText}
        buttonLink={pageData.serviceCta.buttonLink}
        theme="dark"
      />

      {/* ─── 6. SEABOURN SUITES: IS ACCOMMODATION WORTH IT? (CardGrid - 1x) ─── */}
      <CardGrid
        title={pageData.suitesWorth.title}
        subtitle={pageData.suitesWorth.intro}
        cards={suiteCards}
        columns={3}
        stagger={false}
      />

      {/* ─── 7. TWO VACATIONS, SAME PRICE (ContainedShowdown - 1x of 2) ─── */}
      <ContainedShowdown
        title={pageData.allSuiteMatters.title}
        brandA={optionABrand}
        brandB={optionBBrand}
      />

      {/* ─── 8. IS A SEABOURN VERANDA SUITE WORTH IT? (ProsConsCards - 1x of 2) ─── */}
      <ProsConsCards
        title={pageData.verandaSuite.title}
        prosTitle={pageData.verandaSuite.destinationsTitle}
        consTitle={pageData.verandaSuite.retreatTitle}
        type="compare"
        bestFor={pageData.verandaSuite.verandaUses}
        notBestFor={pageData.verandaSuite.verandaActivities}
        bottomNote={pageData.verandaSuite.footerText}
        bgClass="bg-slate-50"
      />

      {/* ─── 9. SEABOURN DINING: IS FOOD WORTH THE PRICE? (EditorialFeatureShowcase - 1x) ─── */}
      <EditorialFeatureShowcase
        title={pageData.diningWorth.title}
        subtitle={`${pageData.diningWorth.intro} ${pageData.diningWorth.venuesText}`}
        features={diningFeatures}
        image={SeabournDiningImg}
        bgClass="bg-white"
      />

      {/* ─── MID-PAGE CTA 2: GOURMET DINING (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.diningCta.title}
        description={pageData.diningCta.description}
        buttonText={pageData.diningCta.buttonText}
        buttonLink={pageData.diningCta.buttonLink}
        theme="gold"
      />

      {/* ─── 10. SEABOURN DRINKS: WHAT'S INCLUDED? (InclusionCheckerGrid - 1x) ─── */}
      <InclusionCheckerGrid
        eyebrow={pageData.drinksIncluded.eyebrow}
        title={pageData.drinksIncluded.title}
        subtitle={`${pageData.drinksIncluded.lead} ${pageData.drinksIncluded.footer}`}
        inclusionsTitle="Complimentary Beverage Program"
        exclusionsTitle="Additional / Specialty Items"
        inclusions={pageData.drinksIncluded.items}
        exclusions={[
          "Ultra-rare premium reserve vintages",
          "Specialty cellar master wine tastings",
          "Purchases in boutique gift shops"
        ]}
      />

      {/* ─── 11. IS SEABOURN WI-FI WORTH IT? (BentoGlassmorphismGrid - 1x) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.wifiWorth.title}
        subtitle={pageData.wifiWorth.intro}
        bentoItems={wifiBentoItems}
      />

      {/* ─── 12. WHAT ISN'T NECESSARILY INCLUDED? (MistakesGrid - 1x) ─── */}
      <MistakesGrid
        title={pageData.notIncluded.title}
        items={notIncludedItems}
      />

      {/* ─── VIDEO SHOWCASE: IS SEABOURN WORTH IT? ─── */}
      <VideoEmbed data={pageData.videoSection} />

      {/* ─── 13. SHORE EXCURSIONS: ARE THEY WORTH IT? (EditorialExcursionShowcase - 1x) ─── */}
      <EditorialExcursionShowcase
        title={pageData.excursionsWorth.title}
        subtitle={`${pageData.excursionsWorth.lead} ${pageData.excursionsWorth.alternativeText} ${pageData.excursionsWorth.formula.title} ${pageData.excursionsWorth.formula.elements.join(', ')}.`}
        items={excursionItems}
      />

      {/* ─── MID-PAGE CTA 3: ALL-INCLUSIVE LUXURY (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.inclusionsCta.title}
        description={pageData.inclusionsCta.description}
        buttonText={pageData.inclusionsCta.buttonText}
        buttonLink={pageData.inclusionsCta.buttonLink}
        theme="dark"
      />

      {/* ─── 14. ARE EXPEDITION CRUISES WORTH THE PRICE? (EditorialIntroSection - 2x of 2) ─── */}
      <EditorialIntroSection
        eyebrow={pageData.expeditionWorth.eyebrow}
        heading={pageData.expeditionWorth.title}
        paragraphs={[
          pageData.expeditionWorth.intro,
          `Expedition voyages explore remote regions including: ${pageData.expeditionWorth.destinations.join(', ')}.`
        ]}
        highlights={pageData.expeditionWorth.features}
        placeholderLabel="SEABOURN EXPEDITION EXPLORATION"
        badgeTitle="Purpose-Built Polar Luxury"
        badgeDescription="PC6 ice-strengthened hulls, 24 Zodiacs, submarines, kayaks, and a 24-member expert expedition team."
        image={ExpeditionCruisesImg}
      />

      {/* ─── 15. SMALL SHIPS VS MEGA SHIPS (ContainedShowdown - 2x of 2) ─── */}
      <ContainedShowdown
        title={pageData.smallShipExperience.title}
        brandA={smallShipBrand}
        brandB={megaShipBrand}
      />

      {/* ─── 16. WHAT SEABOURN DOES NOT OFFER (ThreeColumnGrid - 1x) ─── */}
      <ThreeColumnGrid
        title={pageData.notOffered.title}
        subtitle={`${pageData.notOffered.intro} ${pageData.notOffered.warning}`}
        items={notOfferedCards}
      />

      {/* ─── 17. IS SEABOURN WORTH IT FOR YOU? (TravelerProfileTabs - 1x) ─── */}
      <TravelerProfileTabs
        title={pageData.worthForYou.title}
        subtitle={pageData.worthForYou.eyebrow}
        profiles={travelerProfilesWithImages}
      />

      {/* ─── MID-PAGE CTA 4: FIND YOUR FIT (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.fitCta.title}
        description={pageData.fitCta.description}
        buttonText={pageData.fitCta.buttonText}
        buttonLink={pageData.fitCta.buttonLink}
        theme="gold"
      />

      {/* ─── 18. IS SEABOURN WORTH IT FOR FAMILIES? (ProsConsCards - 2x of 2) ─── */}
      <ProsConsCards
        title={pageData.familiesWorth.title}
        prosTitle={pageData.familiesWorth.worksWellTitle}
        consTitle={pageData.familiesWorth.seekingTitle}
        type="compare"
        bestFor={pageData.familiesWorth.worksWellItems}
        notBestFor={pageData.familiesWorth.seekingItems}
        bottomNote={pageData.familiesWorth.footer}
        bgClass="bg-slate-50"
      />

      {/* ─── 19. SEABOURN VS OTHER LUXURY CRUISE LINES (InclusionsSplitFeatures - 1x) ─── */}
      <InclusionsSplitFeatures data={vsLuxuryData} image={LuxuryCruiseLinesImg} />

      {/* ─── 20. WHEN IS SEABOURN WORTH THE PREMIUM? (MoneySavingTips - 1x) ─── */}
      <MoneySavingTips
        title={pageData.whenWorth.title}
        subtitle="Evaluating When Seabourn Delivers Maximum Value"
        hiddenCosts={whenWorthNotCompelling}
        savingTips={whenWorthCompelling}
      />

      {/* ─── 21. THE REAL SEABOURN VALUE TEST (StepByStepGuide - 1x) ─── */}
      <StepByStepGuide
        title={pageData.valueTest.title}
        subtitle={pageData.valueTest.intro}
        steps={valueTestSteps}
      />

      {/* ─── MID-PAGE CTA 5: PLAN WITH CONFIDENCE (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.confidenceCta.title}
        description={pageData.confidenceCta.description}
        buttonText={pageData.confidenceCta.buttonText}
        buttonLink={pageData.confidenceCta.buttonLink}
        theme="dark"
      />

      {/* ─── 22. COST VS TOTAL VACATION COST TABLE (ComparisonTable - 2x of 2) ─── */}
      <ComparisonTable data={costTableData} />

      {/* ─── 23. A SIMPLE WAY TO DECIDE (ExpertRulesGrid - 1x) ─── */}
      <ExpertRulesGrid
        title={pageData.simpleDecide.title}
        subtitle={`${pageData.simpleDecide.yesIntro} ${pageData.simpleDecide.thinkTwiceWarning}`}
        rules={simpleDecideRules}
      />

      {/* ─── 24. SEABOURN PROS AND CONS (FeatureGrid - 1x) ─── */}
      <FeatureGrid
        title={pageData.prosCons.title}
        subtitle="An honest summary of Seabourn's value strengths and travel considerations."
        features={prosFeatures}
        bgClass="bg-slate-50"
      />

      {/* ─── 25. IS SEABOURN WORTH IT FOR A LUXURY TRAVELER? (ValuePropositionHighlight - 1x) ─── */}
      <ValuePropositionHighlight
        title={pageData.luxuryTraveler.title}
        subtitle={`${pageData.luxuryTraveler.lead} ${pageData.luxuryTraveler.conclusion}`}
        items={luxuryValueItems}
      />

      {/* ─── 26. ANGELA HUGHES LUXURY AUTHORITY BOX (ExpertCredentials - 1x) ─── */}
      <ExpertCredentials
        title={pageData.authority.title}
        authorName={pageData.authority.authorName}
        image={AboutImage}
        badge={pageData.authority.badge}
        experienceBadge={pageData.authority.experienceBadge}
        authorityBoxTitle={pageData.authority.authorityBoxTitle}
        authoritySubtitle={pageData.authority.authoritySubtitle}
        paragraphs={pageData.authority.paragraphs}
        credentials={pageData.authority.credentials}
        quote={pageData.authority.quote}
        quoteSubtitle={pageData.authority.quoteSubtitle}
        ctaText={pageData.authority.ctaText}
        ctaLink={pageData.authority.ctaLink}
      />

      {/* ─── 27. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 1x) ─── */}
      <FAQAccordion data={faqAccordionData} />

      {/* ─── 28. FINAL VERDICT (CenterCTA - Final) ─── */}
      <CenterCTA
        title={pageData.finalVerdict.title}
        description={`${pageData.finalVerdict.paragraphs[0]} ${pageData.finalVerdict.paragraphs[1]} ${pageData.finalVerdict.recommendation}`}
        buttonText={pageData.finalVerdict.buttonText}
        buttonLink={pageData.finalVerdict.buttonLink}
        image={FinalVerdictImg}
        theme="dark"
      />
      </div>
    </div>
  );
};

export default IsSeabournWorthIt;