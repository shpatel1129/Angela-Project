import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Gem,
  Map,
  Sun,
  Ship,
  Waves,
  Home,
  Star,
  Compass,
  Users,
  Award,
  CreditCard,
  Percent,
  Plane,
  Building2,
  Car,
  Heart,
  Anchor,
  MapPin,
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

// Asset References
import AboutImage from "../../assets/AboutAngela.jpeg";

const SeabournCruiseCostGuide = () => {

  // 1. Glance Table Format for ComparisonTable
  const glanceTableData = {
    title: pageData.glance.title,
    subtitle: pageData.glance.intro,
    headers: ["Cost Factor", "What to Know"],
    rows: pageData.glance.table.map((row) => [row.label, row.value])
  };

  // 2. Price Factors for FeatureGrid (1x)
  const priceFactorFeatures = pageData.priceFactors.factors.map((factor) => ({
    title: factor.title,
    description: factor.text,
    icon: factor.icon
  }));

  // 3. Suite Cost Categories for CardGrid (1x)
  const suiteCostCards = pageData.suiteCost.categories.map((cat) => ({
    title: cat.title,
    description: cat.text,
    icon: cat.icon,
    bullets: [
      "All-suite ocean-front layout",
      "Dedicated personal suite host service"
    ]
  }));

  // 4. Suite Worth It Showdown for ContainedShowdown (1x of 2)
  const suiteWorthItBrandA = {
    name: "Veranda Suite Balance",
    image: "",
    features: [
      `Verdict: ${pageData.suiteWorthIt.verdict}`,
      `${pageData.suiteWorthIt.balanceIntro} ${pageData.suiteWorthIt.equation.join(' + ')}.`,
      pageData.suiteWorthIt.points[0].text,
      "Evaluate suite space based on how many hours you spend inside vs exploring ashore."
    ]
  };
  const suiteWorthItBrandB = {
    name: "Penthouse & Premium Suites",
    image: "",
    features: [
      pageData.suiteWorthIt.sublead,
      pageData.suiteWorthIt.rightTitle,
      pageData.suiteWorthIt.points[1].text,
      "Dedicated dining areas, expanded verandas, and personalized butler concierge service."
    ]
  };

  // 5. Suite Amenities for EditorialFeatureShowcase (1x)
  const suiteAmenitiesFeatures = pageData.suiteAmenities.items.map((item) => ({
    title: item,
    description: "Included as standard in every Seabourn oceanfront suite with personalized suite host service."
  }));

  // 6. Airfare & Hotel Cards for ThreeColumnGrid (1x)
  const airHotelItems = pageData.airAndHotel.cards.map((card) => ({
    title: card.title,
    description: card.text,
    highlight: card.footer,
    category: "Logistics & Planning"
  }));

  // 7. Promotions for BentoGlassmorphismGrid (1x)
  const promotionsBentoItems = pageData.promotions.cards.map((promo, idx) => ({
    title: promo.title,
    description: promo.text,
    stat: idx === 0 ? "10%" : idx === 1 ? "15%" : idx === 2 ? "CLUB" : "VIP"
  }));

  // 8. Cost Per Night for ContainedShowdown (2x of 2)
  const costPerNightBrandA = {
    name: `${pageData.costPerNight.cruiseA.heading} (${pageData.costPerNight.cruiseA.sub})`,
    image: "",
    features: [
      ...pageData.costPerNight.cruiseA.items,
      pageData.costPerNight.takeaways[0]
    ]
  };
  const costPerNightBrandB = {
    name: `${pageData.costPerNight.cruiseB.heading} (${pageData.costPerNight.cruiseB.sub})`,
    image: "",
    features: [
      ...pageData.costPerNight.cruiseB.items,
      pageData.costPerNight.takeaways[1]
    ]
  };

  // 9. Value Table Format for ComparisonTable (2x)
  const valueComparisonTableData = {
    title: pageData.valueTable.title,
    subtitle: pageData.valueTable.intro,
    headers: ["Factor", "Key Planning Question"],
    rows: pageData.valueTable.table.map((row) => [row.factor, row.question])
  };

  // 10. Vs Other Luxury Lines for CostValueAnalysisCards (1x)
  const vsLuxuryIncluded = [
    { title: pageData.vsLuxury.leadEm, description: pageData.vsLuxury.conclusion },
    ...pageData.vsLuxury.formulaGood.map((item) => ({
      title: item,
      description: "Included in your base fare with zero surprise charges."
    }))
  ];
  const vsLuxuryExtras = [
    { title: pageData.vsLuxury.competitorIntro, description: `${pageData.vsLuxury.formulaLabelBad} ${pageData.vsLuxury.formulaBad.join(' ')}` },
    ...pageData.vsLuxury.competitorExtras.map((extra) => ({
      title: extra,
      description: "Often billed separately on competing luxury cruise lines."
    }))
  ];

  // 11. Best Price Tips for ExpertRulesGrid (1x)
  const bestPriceRules = pageData.bestPrice.tips.map((tip) => ({
    title: tip.title,
    description: tip.text
  }));

  // 12. Best Time to Book for InclusionsSplitFeatures (1x)
  const bestTimeSplitData = {
    headline: pageData.bestTime.title,
    description: pageData.bestTime.intro,
    pullQuote: "Booking early secures the best suite selection, while monitoring promotions can unlock valuable shipboard credits and loyalty savings.",
    whatIsIncluded: {
      title: pageData.bestTime.bookEarlyTitle,
      items: pageData.bestTime.bookEarly.map((item) => ({
        title: item,
        desc: "Secures top suite inventory, preferred deck positions, and Seabourn Club Early Booking Advantage."
      }))
    },
    whatIsExtra: {
      title: pageData.bestTime.monitorPromoTitle,
      items: pageData.bestTime.monitorPromo.map((item) => ({
        title: item,
        desc: "Tactical promotional fare monitoring for value-driven departures and last-minute suite sales."
      }))
    }
  };

  // 13. Solo Saving Tips for MoneySavingTips (1x)
  const soloHiddenCosts = [
    {
      title: "Standard 200% Single Supplement",
      description: "Default cruise pricing is structured around double occupancy, meaning solo travelers can face up to a 200% fare without active promotions."
    },
    {
      title: "Capacity-Controlled Solo Allocations",
      description: "Special single supplement promotions (such as 125% fares) are strictly capacity-controlled and sell out quickly on high-demand departures."
    },
    {
      title: "Advertised Double Occupancy Fares",
      description: "Displayed headline prices always reflect per-guest rates for two sharing a suite; solo guests should calculate the true solo rate before budgeting."
    },
    {
      title: "Premium Suite Category Supplements",
      description: "Reduced supplement discounts typically apply to lead-in categories; Penthouse and Premium suites often require the full standard supplement."
    },
    {
      title: "Pre- & Post-Cruise Hotel Rooms",
      description: "Independent hotel stays and private port transfers carry full per-room costs without a second traveler to share the logistical expense."
    },
    {
      title: "Peak-Season Destination Premiums",
      description: "High-demand peak itineraries (such as summer Alaska or the Mediterranean) rarely feature promotional solo waivers."
    },
    {
      title: "Optional Excursions & Personal Purchases",
      description: "Shore excursions, premium spa services, and personal boutique spending remain separate line items outside the base cruise fare."
    }
  ];

  const soloSavingTips = [
    {
      title: "Monitor Reduced Single Supplements",
      description: "Track active Seabourn promotions offering single supplements reduced to as low as 125% on select global sailings."
    },
    {
      title: "Target Specific Solo Promotions",
      description: "Seabourn regularly releases dedicated solo traveler fares across selected ocean and expedition itineraries."
    },
    {
      title: "Select Less Expensive Suite Categories",
      description: "Oceanview and standard Veranda suites provide the most cost-effective baseline for solo occupancy and value."
    },
    {
      title: "Book Shoulder-Season Departures",
      description: "Spring and autumn sailings offer lower baseline fares and significantly higher solo waiver availability."
    },
    {
      title: "Choose Flexible & Repositioning Routes",
      description: "Transatlantic crossings, repositioning cruises, and extended voyages frequently offer the most generous solo terms."
    },
    {
      title: "Stack Seabourn Club Loyalty Offers",
      description: "Eligible repeat guests can combine club milestone savings with eligible promotional solo departures."
    },
    {
      title: pageData.soloSave.diamondElite.title,
      description: `${pageData.soloSave.diamondElite.text} ${pageData.soloSave.diamondElite.note}`
    }
  ];

  // 14. Excursion Items for EditorialExcursionShowcase (1x)
  const excursionShowcaseItems = pageData.excursions.types.map((type) => ({
    title: type,
    category: "Curated Shore Experience",
    description: "Available across destinations worldwide with expert guides, private transport, or small-group immersion."
  }));

  // 15. Worth Cost Pillars for ValuePropositionHighlight (1x)
  const worthCostItems = pageData.worthCost.elements.map((el) => ({
    title: el.label,
    description: "Seamlessly included throughout your voyage without routine incidental add-ons.",
    impact: "Included",
    icon: "CheckCircle"
  }));

  // 16. Traveler Profiles for TravelerProfileTabs (1x)
  const travelerProfilesData = [
    {
      name: "Couples",
      tagline: "Double Occupancy Travel",
      quote: pageData.travelerTypes.types[0].items[0],
      recommendation: "Select the Right Suite Category",
      reason: pageData.travelerTypes.types[0].items[1],
      whyFits: [
        pageData.travelerTypes.types[0].items[0],
        pageData.travelerTypes.types[0].items[1],
        "In-suite dining and champagne service included",
        "Fine wines, premium spirits, and caviar complimentary"
      ],
      placeholderLabel: "SEABOURN FOR COUPLES"
    },
    {
      name: "Solo Travelers",
      tagline: "Independent Luxury Voyagers",
      quote: pageData.travelerTypes.types[1].items[0],
      recommendation: "Monitor Single Supplement Waivers",
      reason: pageData.travelerTypes.types[1].items[1],
      whyFits: [
        pageData.travelerTypes.types[1].items[0],
        pageData.travelerTypes.types[1].items[1],
        "Hosted social tables & open-seating dining venues",
        "All-inclusive amenities without per-person bar minimums"
      ],
      placeholderLabel: "SEABOURN FOR SOLO TRAVELERS"
    },
    {
      name: "Multigenerational Families",
      tagline: "Family & Group Planning",
      quote: "Planning for multiple generations requires evaluating suites, occupancy, and travel logistics together.",
      recommendation: "Coordinate Connecting Suites & Group Airfare",
      reason: "Factoring in airfare, transfers, and pre-cruise hotels upfront prevents unexpected cost additions.",
      whyFits: pageData.travelerTypes.types[2].items.map((item) => `Planning Factor: ${item}`),
      placeholderLabel: "SEABOURN FOR FAMILIES"
    },
    {
      name: "Long-Voyage Travelers",
      tagline: "Grand Voyages & Extended Sailings",
      quote: "Longer itineraries and grand voyages can offer a significantly more attractive cost per night.",
      recommendation: "Evaluate Full Voyage Package Benefits",
      reason: "Spreading inclusive luxury amenities across a longer sailing improves overall travel efficiency.",
      whyFits: pageData.travelerTypes.types[3].items.map((item) => `Key Consideration: ${item}`),
      placeholderLabel: "SEABOURN LONG VOYAGES"
    },
    {
      name: "First-Time Luxury Cruisers",
      tagline: "New to Ultra-Luxury",
      quote: pageData.travelerTypes.types[4].items[0],
      recommendation: "Start with a Veranda Suite & Compare All-In",
      reason: pageData.travelerTypes.types[4].items[1],
      whyFits: pageData.travelerTypes.types[4].items,
      placeholderLabel: "FIRST-TIME LUXURY CRUISERS"
    },
    {
      name: "Repeat & Loyal Cruisers",
      tagline: "Seabourn Club Members",
      quote: pageData.travelerTypes.types[5].items[0],
      recommendation: "Stack Seabourn Club Loyalty Benefits",
      reason: pageData.travelerTypes.types[5].items[2],
      whyFits: pageData.travelerTypes.types[5].items,
      placeholderLabel: "REPEAT & LOYAL CRUISERS"
    }
  ];

  // 17. Checklist Steps for StepByStepGuide (1x)
  const checklistSteps = pageData.checklist.groups.map((group) => ({
    title: `${group.step}. ${group.title}`,
    description: group.items.join(" • ")
  }));

  // 18. Mistakes / Not Included format for MistakesGrid (1x)
  const notIncludedMistakes = pageData.notIncluded.items.map((item) => ({
    title: item,
    description: "Budget separately as an optional or independent expense outside the standard cruise fare."
  }));

  // 19. FAQ Accordion Data (1x)
  const faqData = {
    title: "Frequently Asked Questions About Seabourn Cruise Cost",
    subtitle: "Everything travelers need to know before budgeting for a Seabourn cruise.",
    questions: pageData.faq
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
        subtitle={`${pageData.hero.subtitle} ${pageData.hero.extendedParagraphs[0]} ${pageData.hero.extendedParagraphs[1]} ${pageData.hero.extendedParagraphs[2]}`}
        primaryCtaText={pageData.hero.ctaText}
        primaryCtaLink={pageData.hero.ctaLink}
      />

      {/* ─── 2. SEABOURN CRUISE COST AT A GLANCE (ComparisonTable - 1x of 2) ─── */}
      <ComparisonTable data={glanceTableData} />

      {/* ─── 3. WHAT DETERMINES THE PRICE OF A SEABOURN CRUISE? (FeatureGrid - 1x) ─── */}
      <FeatureGrid
        title={pageData.priceFactors.title}
        subtitle={pageData.priceFactors.intro}
        features={priceFactorFeatures}
        bgClass="bg-slate-50"
      />

      {/* ─── 4. HOW SEABOURN ADVERTISES ITS CRUISE PRICES (EditorialIntroSection - 1x of 2) ─── */}
      <EditorialIntroSection
        eyebrow={pageData.howAdvertised.eyebrow}
        heading={pageData.howAdvertised.title}
        paragraphs={[
          pageData.howAdvertised.intro,
          pageData.howAdvertised.conclusion
        ]}
        highlights={pageData.howAdvertised.list}
        placeholderLabel="SEABOURN FARE TERMS & ADVERTISING"
        badgeTitle="Advertised Fare Basis"
        badgeDescription="All displayed fares apply to lead-in categories per guest based on double occupancy."
      />

      {/* ─── 5. SEABOURN CRUISE COST BY SUITE CATEGORY (CardGrid - 1x) ─── */}
      <CardGrid
        title={pageData.suiteCost.title}
        subtitle={`${pageData.suiteCost.intro} ${pageData.suiteCost.note}`}
        cards={suiteCostCards}
        columns={4}
        stagger={false}
      />

      {/* ─── MID-PAGE CTA 1: SUITE RECOMMENDATIONS (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta1.title}
        description={pageData.cta1.description}
        buttonText={pageData.cta1.buttonText}
        buttonLink={pageData.cta1.buttonLink}
        theme="gold"
      />

      {/* ─── 6. IS A MORE EXPENSIVE SEABOURN SUITE WORTH IT? (ContainedShowdown - 1x of 2) ─── */}
      <ContainedShowdown
        title={pageData.suiteWorthIt.title}
        brandA={suiteWorthItBrandA}
        brandB={suiteWorthItBrandB}
      />

      {/* ─── 7. WHAT DO YOU GET IN A SEABOURN SUITE? (EditorialFeatureShowcase - 1x) ─── */}
      <EditorialFeatureShowcase
        title={pageData.suiteAmenities.title}
        subtitle={`${pageData.suiteAmenities.intro} ${pageData.suiteAmenities.note}`}
        features={suiteAmenitiesFeatures}
        bgClass="bg-white"
      />

      {/* ─── 8. HOW MUCH DOES A SEABOURN CRUISE COST FOR TWO? (EditorialIntroSplit - 1x of 2) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.costForTwo.eyebrow}
        heading={pageData.costForTwo.title}
        paragraphs={[
          pageData.costForTwo.intro,
          `${pageData.costForTwo.exampleLabel} ${pageData.costForTwo.formula.left} ${pageData.costForTwo.formula.operator} ${pageData.costForTwo.formula.arrow} ${pageData.costForTwo.formula.right}.`,
          `${pageData.costForTwo.resultText} (${pageData.costForTwo.footnote})`,
          pageData.costForTwo.conclusion
        ]}
      />

      {/* ─── 9. SOLO TRAVELER COST & SINGLE SUPPLEMENT (ProsConsCards - 1x of 2) ─── */}
      <ProsConsCards
        title={pageData.soloCost.title}
        prosTitle="Solo Traveler Considerations"
        consTitle={pageData.soloCost.supplementTitle}
        type="compare"
        bestFor={[
          pageData.soloCost.intro,
          pageData.soloCost.promoText,
          pageData.soloCost.callout
        ]}
        notBestFor={[
          pageData.soloCost.supplementText,
          pageData.soloCost.examples[0],
          pageData.soloCost.examples[1],
          pageData.soloCost.supplementOutro
        ]}
        bottomNote="Always verify single supplement terms for your selected itinerary and suite category prior to booking."
        bgClass="bg-slate-50"
      />

      {/* ─── MID-PAGE CTA 2: PERSONALIZED QUOTE (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta2.title}
        description={pageData.cta2.description}
        buttonText={pageData.cta2.buttonText}
        buttonLink={pageData.cta2.buttonLink}
        theme="dark"
      />

      {/* ─── 10. HOW TO SAVE ON SEABOURN AS A SOLO TRAVELER (MoneySavingTips - 1x) ─── */}
      <MoneySavingTips
        title={pageData.soloSave.title}
        subtitle="Solo Traveler Pricing Tactics & Loyalty Benefits"
        hiddenCosts={soloHiddenCosts}
        savingTips={soloSavingTips}
      />

      {/* ─── 11. WHAT IS INCLUDED IN A SEABOURN CRUISE FARE? (InclusionCheckerGrid - 1x) ─── */}
      <InclusionCheckerGrid
        eyebrow={pageData.included.eyebrow}
        title={pageData.included.title}
        subtitle={`${pageData.included.intro} ${pageData.included.takeaway}`}
        inclusionsTitle="Core Cruise Inclusions"
        exclusionsTitle="Optional / Separate Expenses"
        inclusions={pageData.included.categories.map((c) => `${c.title}: ${c.items.join(', ')}`)}
        exclusions={pageData.notIncluded.items.slice(0, 6)}
      />

      {/* ─── 12. WHAT IS NOT INCLUDED IN THE SEABOURN CRUISE FARE? (MistakesGrid - 1x) ─── */}
      <MistakesGrid
        title={pageData.notIncluded.title}
        items={notIncludedMistakes}
      />

      {/* ─── 13. SEABOURN SHORE EXCURSION COSTS (EditorialExcursionShowcase - 1x) ─── */}
      <EditorialExcursionShowcase
        title={pageData.excursions.title}
        subtitle={`${pageData.excursions.intro} ${pageData.excursions.closing}`}
        items={excursionShowcaseItems}
      />

      {/* ─── MID-PAGE CTA 3: SHORE EXCURSION BUDGETING (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta3.title}
        description={pageData.cta3.description}
        buttonText={pageData.cta3.buttonText}
        buttonLink={pageData.cta3.buttonLink}
        theme="dark"
      />

      {/* ─── 14. AIRFARE & PRE/POST-CRUISE HOTEL COSTS (ThreeColumnGrid - 1x) ─── */}
      <ThreeColumnGrid
        title={pageData.airAndHotel.title}
        subtitle="Logistical considerations for flights, pre-cruise hotel stays, and private port transfers."
        items={airHotelItems}
      />

      {/* ─── 15. TOTAL BUDGET FORMULA (EditorialIntroSplit - 2x of 2) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.totalBudget.eyebrow}
        heading={pageData.totalBudget.title}
        paragraphs={[
          pageData.totalBudget.subtitle,
          `${pageData.totalBudget.formulaItems.map((f) => f.label).join(' + ')} = ${pageData.totalBudget.result}`,
          pageData.totalBudget.note
        ]}
      />

      {/* ─── 16. SEABOURN CRUISE PROMOTIONS (BentoGlassmorphismGrid - 1x) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.promotions.title}
        subtitle={pageData.promotions.intro}
        bentoItems={promotionsBentoItems}
      />

      {/* ─── 17. IS IT CHEAPER TO BOOK A LONGER SEABOURN CRUISE? (ContainedShowdown - 2x of 2) ─── */}
      <ContainedShowdown
        title={pageData.costPerNight.title}
        brandA={costPerNightBrandA}
        brandB={costPerNightBrandB}
      />

      {/* ─── MID-PAGE CTA 4: MAP OUT VACATION BUDGET (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta4.title}
        description={pageData.cta4.description}
        buttonText={pageData.cta4.buttonText}
        buttonLink={pageData.cta4.buttonLink}
        theme="gold"
      />

      {/* ─── 18. SEABOURN CRUISE COST VS. TOTAL VALUE (ComparisonTable - 2x of 2) ─── */}
      <ComparisonTable data={valueComparisonTableData} />

      {/* ─── 19. SEABOURN CRUISE COST VS. OTHER LUXURY CRUISE LINES (CostValueAnalysisCards - 1x) ─── */}
      <CostValueAnalysisCards
        title={pageData.vsLuxury.title}
        subtitle={pageData.vsLuxury.lead}
        includedTitle="Seabourn Inclusive Experience"
        extrasTitle="Other Luxury & Premium Lines"
        included={vsLuxuryIncluded}
        extras={vsLuxuryExtras}
      />

      {/* ─── 20. HOW TO GET THE BEST SEABOURN CRUISE PRICE (ExpertRulesGrid - 1x) ─── */}
      <ExpertRulesGrid
        title={pageData.bestPrice.title}
        subtitle={pageData.bestPrice.eyebrow}
        rules={bestPriceRules}
      />

      {/* ─── 21. WHEN IS THE BEST TIME TO BOOK SEABOURN? (InclusionsSplitFeatures - 1x) ─── */}
      <InclusionsSplitFeatures data={bestTimeSplitData} />

      {/* ─── 22. IS SEABOURN MORE EXPENSIVE THAN MAINSTREAM CRUISES? (ProsConsCards - 2x of 2) ─── */}
      <ProsConsCards
        title={pageData.vsMainstream.title}
        prosTitle={pageData.vsMainstream.seabournTitle}
        consTitle={pageData.vsMainstream.mainstreamTitle}
        type="compare"
        bestFor={pageData.vsMainstream.seabourn}
        notBestFor={pageData.vsMainstream.mainstream}
        bottomNote={`${pageData.vsMainstream.intro} ${pageData.vsMainstream.takeaway}`}
        bgClass="bg-slate-50"
      />

      {/* ─── MID-PAGE CTA 5: SPEAK WITH A SPECIALIST (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta5.title}
        description={pageData.cta5.description}
        buttonText={pageData.cta5.buttonText}
        buttonLink={pageData.cta5.buttonLink}
        theme="gold"
      />

      {/* ─── 23. IS SEABOURN WORTH THE COST? (ValuePropositionHighlight - 1x) ─── */}
      <ValuePropositionHighlight
        title={pageData.worthCost.title}
        subtitle={`${pageData.worthCost.lead} ${pageData.worthCost.verdict}`}
        items={worthCostItems}
      />

      {/* ─── 24. SEABOURN CRUISE COST FOR DIFFERENT TRAVELER TYPES (TravelerProfileTabs - 1x) ─── */}
      <TravelerProfileTabs
        title={pageData.travelerTypes.title}
        subtitle={pageData.travelerTypes.eyebrow}
        profiles={travelerProfilesData}
      />

      {/* ─── 25. SEABOURN WORLD CRUISE COST (EditorialIntroSection - 2x of 2) ─── */}
      <EditorialIntroSection
        eyebrow={pageData.worldCruise.eyebrow}
        heading={pageData.worldCruise.title}
        paragraphs={pageData.worldCruise.paragraphs}
        highlights={pageData.worldCruise.benefits}
        placeholderLabel="SEABOURN WORLD CRUISE BENEFITS"
        badgeTitle="World Cruise Package Value"
        badgeDescription="Full-voyage bookings receive roundtrip business class air, hotel packages, shipboard credits, and private events."
      />

      {/* ─── 26. SEABOURN CRUISE COST CHECKLIST (StepByStepGuide - 1x) ─── */}
      <StepByStepGuide
        title={pageData.checklist.title}
        subtitle={pageData.checklist.subtitle}
        steps={checklistSteps}
      />

      {/* ─── 27. ANGELA HUGHES LUXURY AUTHORITY BOX (ExpertCredentials - 1x) ─── */}
      <ExpertCredentials
        title="Seabourn Ultra-Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel"
        authorName="Angela Hughes"
        image={AboutImage}
        badge="SEABOURN CRUISE SPECIALIST"
        experienceBadge="40+ YEARS EXPERIENCE"
        authorityBoxTitle="ANGELA HUGHES LUXURY AUTHORITY"
        authoritySubtitle="Worldwide Luxury Cruise, Safari & Expedition Specialist"
        paragraphs={[
          "Angela Hughes brings over four decades of hands-on expertise planning ultra-luxury ocean voyages, world cruises, and expedition voyages across 121+ countries and all seven continents.",
          "As CEO of Trips & Ships Luxury Travel and a member of the Travel Leaders Network Advisory Board, Angela works directly with Seabourn executive leadership to ensure our travelers secure the best fares, suite upgrades, shipboard credit, and personalized VIP service."
        ]}
        credentials={pageData.authority.credentials}
        quote="Evaluating a luxury cruise requires looking at the all-in total cost. Seabourn's inclusive model removes surprise fees and delivers pure peace of mind."
        quoteSubtitle="On Seabourn Cruise Pricing"
        ctaText="Plan Your Seabourn Voyage With Angela"
        ctaLink="/contact"
      />

      {/* ─── 28. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 1x) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 29. OUR SEABOURN COST VERDICT (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.finalVerdict.title}
        description={`${pageData.finalVerdict.paragraphs[0]} ${pageData.finalVerdict.paragraphs[1]} ${pageData.finalVerdict.recommendation}`}
        buttonText={pageData.finalVerdict.buttonText}
        buttonLink={pageData.finalVerdict.buttonLink}
        theme="dark"
      />
    </div>
  );
};

export default SeabournCruiseCostGuide;