import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Assets - Celebrity Cruises Gratuities (100% Unique, dedicated folder)
import HeroGratuitiesImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-apex-aerial-dubrovnik.webp";
import WhatGratuitiesCoverImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-alaska-hotel-alyeska-dining.webp";
import AllIncludedImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-blenheim-wine-tasting.webp";
import TheRetreatImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-flora-penthouse-suite-balcony.webp";
import DrinksGratuityImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-beyond-sunset-bar-cocktail.webp";
import SpecialtyDiningImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-ascent-le-voyage.webp";
import SpaGratuityImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-beyond-spa-thermal-suite-heated-loungers.webp";
import RoomServiceImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-flora-suite-veranda-balcony.webp";
import ShoreExcursionsImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-aruba-best-aruba-tour.webp";
import AdjustRemoveImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-edge-spa-chandelier.webp";
import PrepayBudgetImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-eclipse-veranda-stateroom.webp";
import OtherLinesImg from "@/assets/celebritycruises/CelebrityGratuities/celebrity-apex-rhodes-magic-carpet.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import StickyEditorialIntro from "@/components/ui/StickyEditorialIntro";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CenterCTA from "@/components/ui/CenterCTA";
import {
  DollarSign,
  Award,
  Crown,
  Sparkles,
  CheckCircle2,
  Users,
  ShieldCheck,
  CreditCard,
  Wine,
  UtensilsCrossed,
  Sparkle,
} from "lucide-react";

export default function CelebrityGratuities() {
  // Quick Answer Comparison Table
  const quickAnswerTableData = {
    title: data.quickAnswer.title,
    subtitle: data.quickAnswer.subtitle,
    headers: data.quickAnswer.columns,
    rows: (data.quickAnswer.rows || []).map((r) => [r.item, r.status]),
  };

  // Section 1: Daily Rates Table
  const dailyRatesTableData = {
    title: data.dailyRates.title,
    subtitle: `${data.dailyRates.subtitle} (${data.dailyRates.effectiveDate})`,
    headers: data.dailyRates.ratesColumns,
    rows: (data.dailyRates.ratesRows || []).map((r) => [
      r.category,
      r.perDay,
      r.sevenNight,
    ]),
  };

  // Section 1: Two Guests Cost Analysis for CostValueAnalysisCards
  const twoGuestsAnalysis = {
    title: data.dailyRates.twoGuestsTitle,
    subtitle: data.dailyRates.twoGuestsSubtitle,
    includedTitle: "7-Night Sailing Calculations (2 Guests)",
    included: [
      {
        title: "Inside, Oceanview or Veranda",
        description: "Total for two guests: $273 for a 7-night sailing ($19.50 per person, per day).",
      },
      {
        title: "Concierge Class or AquaClass",
        description: "Total for two guests: $287 for a 7-night sailing ($20.50 per person, per day).",
      },
      {
        title: "The Retreat (Suites)",
        description: "Total for two guests: $343 for a 7-night sailing ($24.50 per person, per day).",
      },
      {
        title: "Example: 7-Night Veranda Calculation",
        description: "2 guests × 7 nights × $19.50/day = $273 total applied to onboard SeaPass accounts if not prepaid.",
      },
    ],
    extrasTitle: "Shipwide Policy & SeaPass Rules",
    extras: [
      {
        title: "Category-Based Standard Rates",
        description: data.dailyRates.shipVariationParagraphs[0],
      },
      {
        title: "Booking Confirmation Verification",
        description: data.dailyRates.shipVariationParagraphs[1],
      },
      {
        title: "Automatic SeaPass Account Posting",
        description: data.dailyRates.exampleParagraphs[2],
      },
      {
        title: "Discretionary Adjustments",
        description: "Gratuities are optional and may be adjusted or removed onboard at the Guest Relations desk before departure.",
      },
    ],
  };

  // Section 2: What Gratuities Cover Features
  const crewFeatures = (data.whatGratuitiesCover.crewTeams || []).map((team) => ({
    title: team,
    description: "Supported crew department recognized through pooled onboard staff gratuities.",
  }));



  // Section 4: All Included BrandPillarsShowcase
  const allIncludedPillarsData = {
    title: data.allIncluded.title,
    subtitle: data.allIncluded.subtitle,
    pillars: [
      {
        title: "Included Beverage Gratuities",
        description: data.allIncluded.beverageGratuitiesNote,
        points: [
          "Classic Drink Package gratuities fully covered",
          "No extra 20% fee on covered package cocktails and beers",
          "Price difference and 20% apply only to premium drinks above limit",
        ],
        icon: "star",
      },
      {
        title: "Separate Daily Staff Gratuities",
        description:
          "Daily onboard staff gratuities are separate from the All Included package. Stateroom attendants and dining staff are compensated through the daily stateroom rate.",
        points: [
          "Inside/Oceanview/Veranda: $19.50/day per guest",
          "Concierge/AquaClass: $20.50/day per guest",
          "Can be prepaid before departure or billed to SeaPass",
        ],
        icon: "compass",
      },
    ],
  };



  // Section 6, 7 & 8: 20% Additional Gratuities ThreeColumnGrid Items
  const purchaseGratuitiesItems = [
    {
      title: "Beverages & Drink Packages",
      category: "BARS & LOUNGES",
      description:
        "A 20% gratuity is automatically added to all individual cocktails, wine bottles, and beverage packages purchased onboard or pre-cruise.",
      features: [
        "Example: $15 cocktail + 20% ($3) = $18 total",
        "Beverage package covers standard drinks with gratuities included",
        "Ordering above package limits: 20% applied only to difference",
      ],
      image: DrinksGratuityImg,
      imageAlt: "Celebrity Cruises Sunset Bar cocktail service",
    },
    {
      title: "Specialty Dining Venues",
      category: "CULINARY EXPERIENCES",
      description:
        "A 20% gratuity is automatically added to specialty dining covers, multi-restaurant packages, and chef dining experiences.",
      features: [
        "Example: $60 specialty cover + 20% ($12) = $72 total",
        "Applies to pre-cruise and onboard restaurant bookings",
        "Select high-tier Retreat suites include specialty dining perks",
      ],
      image: SpecialtyDiningImg,
      imageAlt: "Celebrity Cruises Le Voyage specialty dining",
    },
    {
      title: "Spa & Salon Treatments",
      category: "WELLNESS & BEAUTY",
      description:
        "A 20% gratuity is added to all spa, salon, and thermal suite appointments booked through The Spa.",
      features: [
        "Example: $150 massage + 20% ($30) = $180 total",
        "Applies to massages, facials, haircuts, and body wraps",
        "Additional therapist cash tips are optional for exceptional service",
      ],
      image: SpaGratuityImg,
      imageAlt: "Celebrity Cruises The Spa thermal suite",
    },
  ];

  // Section 9 & 10: Room Service & Shore Excursions GenericChecklistCards
  const additionalPoliciesCards = [
    {
      title: "Room Service & Minibar Gratuities",
      items: [
        data.roomService.paragraphs[0],
        data.roomService.paragraphs[1],
        data.roomService.paragraphs[2],
        "Delivery fees may apply to select late-night orders.",
        "Continental breakfast orders during designated morning hours are complimentary.",
      ],
    },
    {
      title: "Shore Excursion Tipping Policies",
      items: [
        data.shoreExcursions.paragraphs[0],
        data.shoreExcursions.paragraphs[1],
        data.shoreExcursions.paragraphs[2],
        "Local currency or USD cash tips are customary for excellent motorcoach drivers and guides.",
        "Shipboard staff gratuities do not transfer to private tour contractors.",
      ],
    },
  ];

  // Section 11: Adjust or Remove Steps
  const adjustSteps = (data.adjustRemove.steps || []).map((step, idx) => ({
    number: String(idx + 1).padStart(2, "0"),
    title: step.split(".")[0],
    description: step,
  }));

  // Section 12: Prepaying ValueBreakdownSplit
  const prepayValueData = {
    title: data.prepayGratuities.title,
    subtitle: data.prepayGratuities.subtitle,
    includedTitle: "Benefits of Prepaying Before Sailing",
    included: [
      {
        title: "Predictable Vacation Budget",
        description: data.prepayGratuities.prepayBenefits[0],
      },
      {
        title: "Reduced SeaPass Charges",
        description: data.prepayGratuities.prepayBenefits[1],
      },
      {
        title: "Accurate Expense Estimation",
        description: data.prepayGratuities.prepayBenefits[2],
      },
      {
        title: "Lock In Confirmed Rates",
        description: data.prepayGratuities.prepayBenefits[3],
      },
    ],
    extrasTitle: "Benefits of Paying Onboard via SeaPass",
    extras: [
      {
        title: "Settle Expenses Together",
        description: data.prepayGratuities.onboardBenefits[0],
      },
      {
        title: "Automatic SeaPass Account Posting",
        description: data.prepayGratuities.onboardBenefits[1],
      },
      {
        title: "Account Tracking Flexibility",
        description: data.prepayGratuities.onboardBenefits[2],
      },
      {
        title: "Maintain Discretionary Control",
        description: "Allows you to discuss service or make discretionary adjustments directly with Guest Relations onboard before disembarkation.",
      },
    ],
    image: PrepayBudgetImg,
  };

  // Section 13: Budgeting Tables (7-Night, 10-Night, 14-Night)
  const budgetingTableData = {
    title: data.budgeting.title,
    subtitle: `${data.budgeting.subtitle} ${data.budgeting.intro}`,
    headers: ["Cruise Duration & Stateroom", "One Guest Total", "Two Guests Total"],
    rows: [
      ["7-Night: Inside, Oceanview or Veranda", "$136.50", "$273.00"],
      ["7-Night: Concierge Class or AquaClass", "$143.50", "$287.00"],
      ["7-Night: The Retreat Suites", "$171.50", "$343.00"],
      ["10-Night: Inside, Oceanview or Veranda", "$195.00", "$390.00"],
      ["10-Night: Concierge Class or AquaClass", "$205.00", "$410.00"],
      ["10-Night: The Retreat Suites", "$245.00", "$490.00"],
      ["14-Night: Inside, Oceanview or Veranda", "$273.00", "$546.00"],
      ["14-Night: Concierge Class or AquaClass", "$287.00", "$574.00"],
      ["14-Night: The Retreat Suites", "$343.00", "$686.00"],
    ],
  };

  // Section 14: Cruise Line Comparison Table
  const cruiseLineTableData = {
    title: data.cruiseLineComparison.title,
    subtitle: data.cruiseLineComparison.subtitle,
    headers: data.cruiseLineComparison.columns,
    rows: (data.cruiseLineComparison.rows || []).map((r) => [r.line, r.approach]),
  };

  // Section 15: How to Check StepByStepGuide
  const checkSteps = (data.howToCheck.steps || []).map((step) => ({
    number: step.number,
    title: step.title,
    description: step.description,
  }));

  // Section 16: FAQ Accordion
  const faqAccordionData = {
    title: data.faqs.title,
    subtitle: data.faqs.subtitle,
    items: data.faqs.items,
  };

  // Section 17: Conclusion Sections
  const conclusionSections = [
    {
      title: data.finalVerdict.title,
      subtitle: data.finalVerdict.subtitle,
      paragraphs: data.finalVerdict.paragraphs,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.primaryKeyword} />
        <link rel="canonical" href={data.meta.canonical} />

        {/* Structured Schema */}
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      <Nav />

      <div className="w-full bg-white text-slate-800">
        {/* Hero Section */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            backgroundImage={HeroGratuitiesImg}
            byline={true}
            primaryCtaText="Explore Daily Rates"
            primaryCtaLink="#daily-rates"
            secondaryCtaText="Consult Angela Hughes"
            secondaryCtaLink="/contact"
          >
          </ComparisonHero>
        </div>


        {/* Quick Answer: ComparisonTable */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable data={quickAnswerTableData} />
        </div>

        {/* Section 1: Daily Rates in 2026 (ComparisonTable & Cost Breakdown) */}
        <div id="daily-rates" className="border-b border-navy-100">
          <ComparisonTable data={dailyRatesTableData} />

          <div className="max-w-[1280px] mx-auto px-6 py-6">
            <CostValueAnalysisCards
              title={twoGuestsAnalysis.title}
              subtitle={twoGuestsAnalysis.subtitle}
              includedTitle={twoGuestsAnalysis.includedTitle}
              extrasTitle={twoGuestsAnalysis.extrasTitle}
              included={twoGuestsAnalysis.included}
              extras={twoGuestsAnalysis.extras}
            />
          </div>
        </div>

        {/* Section 2: What Do Daily Gratuities Cover? (EditorialFeatureShowcase) */}
        <div id="what-gratuities-cover">
          <EditorialFeatureShowcase
            title={data.whatGratuitiesCover.title}
            subtitle={data.whatGratuitiesCover.paragraphs.join(" ")}
            image={WhatGratuitiesCoverImg}
            features={crewFeatures}
            bgClass="bg-stone-50"
          />
        </div>

        {/* Section 4: Does All Included Cover Gratuities? (BrandPillarsShowcase) */}
        <div id="all-included">
          <BrandPillarsShowcase data={allIncludedPillarsData} />
        </div>

        {/* Section 5: Are Gratuities Included in The Retreat? (StickyEditorialIntro) */}
        <div id="the-retreat" className="border-b border-navy-100">
          <StickyEditorialIntro
            eyebrow={data.theRetreat.eyebrow}
            heading={data.theRetreat.title}
            paragraphs={data.theRetreat.paragraphs}
            highlights={data.theRetreat.highlights}
            image1={TheRetreatImg}
          />
        </div>

        {/* Section 6, 7 & 8: 20% Gratuity on Drinks, Dining & Spa (ThreeColumnGrid) */}
        <div id="purchase-gratuities">
          <ThreeColumnGrid
            title="Gratuities Added to Purchases & Specialty Services"
            subtitle="Understand how Celebrity applies automatic service charges across bars, specialty restaurants, and wellness facilities."
            items={purchaseGratuitiesItems}
          />
        </div>

        {/* Section 9 & 10: Room Service & Shore Excursion Tips (GenericChecklistCards) */}
        <div id="room-service-and-excursions">
          <GenericChecklistCards
            title="Room Service, Minibar & Shore Excursion Tipping Policies"
            subtitle="SPECIALTY CHARGES & LANDSIDE GUIDELINES"
            cards={additionalPoliciesCards}
          />
        </div>

        {/* Section 11: Can You Adjust or Remove Gratuities? (StepByStepGuide) */}
        <div id="adjust-remove">
          <StepByStepGuide
            title={data.adjustRemove.title}
            subtitle={`${data.adjustRemove.subtitle} ${data.adjustRemove.paragraphs[0]} ${data.adjustRemove.paragraphs[1]}`}
            steps={adjustSteps}
            layout="grid"
            columns={4}
          />
        </div>

        {/* Section 12: Should You Prepay Gratuities? (ValueBreakdownSplit) */}
        <div id="prepay-gratuities">
          <ValueBreakdownSplit
            title={prepayValueData.title}
            subtitle={prepayValueData.subtitle}
            includedTitle={prepayValueData.includedTitle}
            included={prepayValueData.included}
            extrasTitle={prepayValueData.extrasTitle}
            extras={prepayValueData.extras}
            image={prepayValueData.image}
          />
          <div className="max-w-[1280px] mx-auto px-6 pb-16">
            <div className="bg-navy-950 text-white p-8 rounded-3xl border border-gold-500/30 flex flex-col md:flex-row items-center gap-6 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-xl text-gold-300 mb-2">Expert Verdict: Prepaying vs. SeaPass Billing</h4>
                <p className="font-sans text-sm text-ice-200/90 leading-relaxed">
                  {data.prepayGratuities.verdict}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 13: Budgeting by Cruise Duration (ComparisonTable) */}
        <div id="budgeting" className="border-b border-navy-100">
          <ComparisonTable data={budgetingTableData} />
        </div>

        {/* Section 14: Celebrity vs Other Cruise Lines (ComparisonTable) */}
        <div id="other-lines" className="border-b border-navy-100">
          <ComparisonTable data={cruiseLineTableData} />
        </div>

        {/* Section 15: How to Check Gratuities Before Sailing (StepByStepGuide) */}
        <div id="how-to-check">
          <StepByStepGuide
            title={data.howToCheck.title}
            subtitle={data.howToCheck.subtitle}
            steps={checkSteps}
            layout="process"
            columns={5}
          />
        </div>

       

       

        {/* Expert Advisory Guidance */}
        <div id="expert-advisor">
          <ExpertCredentials
            title={data.advisorGuidance.title}
            authoritySubtitle={data.advisorGuidance.subtitle}
            authorityBoxTitle="CRUISE GRATUITY & BUDGETING SPECIALIST"
            image={AboutAngelaImg}
            credentials={data.advisorGuidance.author.credentials}
            quote="Prepaying gratuities and verifying your fare inclusions before embarkation eliminates guesswork and ensures total financial clarity for your luxury cruise vacation."
            quoteSubtitle="Angela Hughes, CEO & Luxury Cruise Specialist"
            ctaText="Consult Angela Hughes"
            ctaLink="/contact"
          />
        </div>

         {/* Section 16: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>


        {/* Center CTA */}
        <CenterCTA
          title="Ready to Plan Your Celebrity Cruise Vacation?"
          subtitle="Trips & Ships Luxury Travel compares cruise-only rates, All Included packages, and Retreat benefits to maximize your onboard value."
          primaryText="Start Planning with Angela Hughes"
          primaryLink="/contact"
          secondaryText="Explore Wi-Fi & Connectivity"
          secondaryLink="/celebrity-cruises/wifi"
          badge="VIP Concierge Advisory"
        />
      </div>
    </>
  );
}

