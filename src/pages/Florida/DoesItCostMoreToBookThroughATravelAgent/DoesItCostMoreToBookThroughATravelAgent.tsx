import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Components & UI System (22 Unique Components — Zero Duplicates)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ExpertInterlude from '@/components/ui/ExpertInterlude';
import FooterCTA from '@/components/ui/FooterCTA';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ChecklistCards from '@/components/ui/ChecklistCards';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import MistakesGrid from '@/components/ui/MistakesGrid';
import ConclusionSection from '@/components/ui/ConclusionSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets (Angela Hughes Authority section)
import AboutImage from "../../../assets/AboutAngela.jpeg";

// SVG Image Placeholders for Direct Booking vs Advisor Value Comparison
const directBookingPlaceholderImage1 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="%230b1329"/><circle cx="400" cy="500" r="300" fill="%231e293b" opacity="0.5"/><path d="M250 650 L400 350 L550 650 Z" fill="none" stroke="%2338bdf8" stroke-width="2" opacity="0.35"/><text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="%2394a3b8" letter-spacing="4">[ IMAGE PLACEHOLDER ]</text><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="%23f8fafc" letter-spacing="2">DIRECT BOOKING VS. ADVISOR VALUE</text></svg>`;
const directBookingPlaceholderImage2 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23050b14"/><circle cx="400" cy="300" r="200" fill="%230f1d32" opacity="0.7"/><path d="M280 400 L400 200 L520 400 Z" fill="none" stroke="%23d4af37" stroke-width="2" opacity="0.4"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="%23d4af37" letter-spacing="4">[ IMAGE PLACEHOLDER ]</text><text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="%23ffffff" letter-spacing="2">COMPLETE EXPERIENCE INCLUSIONS</text></svg>`;

const DoesItCostMoreToBookThroughATravelAgent = () => {
  // Map 6 Fee Model Questions for CurvilinearGrid
  const feeModelCurvilinearItems = [
    {
      title: "1. Planning Fee Structure",
      description: pageData.feeModel.questionsBeforeWorking[0],
      icon: "dollar"
    },
    {
      title: "2. Refundability Terms",
      description: pageData.feeModel.questionsBeforeWorking[1],
      icon: "check"
    },
    {
      title: "3. Scope of Service Coverage",
      description: pageData.feeModel.questionsBeforeWorking[2],
      icon: "map"
    },
    {
      title: "4. Supplier Commission Alignment",
      description: pageData.feeModel.questionsBeforeWorking[3],
      icon: "user"
    },
    {
      title: "5. Modifications & Change Fees",
      description: pageData.feeModel.questionsBeforeWorking[4],
      icon: "Compass"
    },
    {
      title: "6. Post-Booking & On-Trip Support",
      description: pageData.feeModel.questionsBeforeWorking[5],
      icon: "Heart"
    }
  ];

  // Map 3 Payment Models for ThreeColumnGrid
  const howPaidItems = pageData.howPaid.models.map((model) => ({
    title: model.title,
    description: model.description,
    image: null,
    placeholderLabel: model.title
  }));

  // Map 13 Cruise Comparison Elements & Insights for HighlightsSplit with Image Placeholders
  const cruiseCostsHighlightsItems = [
    {
      title: "1. Ships, Suites & Stateroom Selection",
      description: `${pageData.cruiseCosts.subtitle} ${pageData.cruiseCosts.context}`,
      icon: "Ship",
      bulletPoints: [
        pageData.cruiseCosts.comparisonElements[0],
        pageData.cruiseCosts.comparisonElements[1],
        pageData.cruiseCosts.comparisonElements[2],
        pageData.cruiseCosts.comparisonElements[3]
      ]
    },
    {
      title: "2. Itineraries, Ports & Excursion Logistics",
      description: "Advisors provide essential insight when comparing sailing routes, embarkation logistics, and curated land extensions.",
      icon: "Compass",
      bulletPoints: [
        pageData.cruiseCosts.comparisonElements[5],
        pageData.cruiseCosts.comparisonElements[6],
        pageData.cruiseCosts.comparisonElements[7],
        pageData.cruiseCosts.comparisonElements[8],
        pageData.cruiseCosts.comparisonElements[9]
      ]
    },
    {
      title: "3. Value, Protection & Core Decision Framework",
      description: pageData.cruiseCosts.coreQuestion,
      icon: "Sparkles",
      bulletPoints: [
        pageData.cruiseCosts.comparisonElements[4],
        pageData.cruiseCosts.comparisonElements[10],
        pageData.cruiseCosts.comparisonElements[11],
        pageData.cruiseCosts.comparisonElements[12]
      ]
    }
  ];

  // Map 5 Trip Styles for LuxuryZigZagShowcase with Image Placeholders
  const whenMakesSenseZigZagItems = pageData.whenMakesSense.styles.map((style) => ({
    title: style.title,
    category: "HIGH-VALUE ADVISORY COORDINATION",
    description: style.description,
    bestFor: `Coordinated components: ${style.coordination.join(', ')}.`,
    image: null,
    placeholderLabel: `${style.title.toUpperCase()} — ADVISOR VALUE`
  }));

  // Map 6 Core Advisory Pillars for BrandPillarsShowcase
  const brandPillarsData = {
    title: pageData.whatYouPayFor.title,
    subtitle: pageData.whatYouPayFor.subtitle,
    pillars: pageData.whatYouPayFor.pillars.map((pillar, idx) => ({
      title: pillar.title,
      description: pillar.description,
      icon: idx % 4 === 0 ? 'compass' : idx % 4 === 1 ? 'ship' : idx % 4 === 2 ? 'star' : 'window'
    }))
  };

  // Map Side-by-Side Comparison Table for ComparisonTable Component
  const comparisonTableData = {
    title: pageData.comparisonTable.title,
    headers: pageData.comparisonTable.headers,
    rows: pageData.comparisonTable.rows.map((row) => [
      row.aspect,
      row.bookingDirect,
      row.travelAdvisor
    ])
  };

  // Mid-Page CTA Data for FooterCTA Component
  const midPageCtaData = {
    title: "DIRECT VS. ADVISORY PLANNING",
    subtitle: "Ready to Compare Your Specific Vacation Options?",
    description: "Whether you are planning a luxury cruise, African safari, or complex international journey, our advisors provide full price transparency and customized itinerary planning.",
    buttonText: "Speak With a Travel Advisor",
    specialtiesTitle: "Specialized Advisory Focus",
    specialties: [
      "Luxury Ocean & Expedition Cruises",
      "All-Inclusive River Journeys",
      "Bespoke International Itineraries",
      "Private Safaris & Small Groups",
      "VIP Amenities & Preferred Upgrades",
      "Full Advocate Support & Protection"
    ]
  };

  // Map Financial Advantages vs Extra Fee Situations for CostValueAnalysisCards
  const doesItSaveMoneyItems = [
    ...pageData.doesItSaveMoney.savingsAreas.map((area) => ({
      title: area,
      description: pageData.doesItSaveMoney.subtitle
    })),
    {
      title: "Time Value & Concierge Protection",
      description: pageData.doesItSaveMoney.timeValue
    }
  ];

  const canItCostMoreItems = [
    ...pageData.canItCostMore.circumstances.map((circ) => ({
      title: circ,
      description: pageData.canItCostMore.subtitle
    })),
    {
      title: "Important Professional Distinction",
      description: pageData.canItCostMore.takeaway
    }
  ];

  // Map Questions About Fees & Apples-to-Apples Checklist for ChecklistCards
  const feeChecklistData = {
    title: "Fee Due Diligence & Apples-to-Apples Booking Comparison",
    ama: {
      name: pageData.questionsAboutFees.title,
      reasons: [
        pageData.questionsAboutFees.subtitle,
        ...pageData.questionsAboutFees.questions.map((q) => `"${q}"`)
      ]
    },
    avalon: {
      name: pageData.howToCompare.title,
      reasons: [
        pageData.howToCompare.subtitle,
        `Important Warning: ${pageData.howToCompare.notCompare}`,
        ...pageData.howToCompare.applesToApples,
      ]
    }
  };

  // Map Luxury Advisors & Agency Specialties for DualPhilosophyShowcase
  const luxuryVsAgencyData = {
    title: "Luxury Travel Advisors & Specialist Agency Advocacy",
    subtitle: "Why high-net-worth and discerning travelers partner with accredited specialists.",
    sailing: {
      label: pageData.luxuryAdvisors.title,
      philosophy: `"${pageData.luxuryAdvisors.subtitle}"`,
      points: [
        pageData.luxuryAdvisors.description,
        ...pageData.luxuryAdvisors.firsthandAreas
      ]
    },
    allSuite: {
      label: pageData.whyChooseTripsAndShips.title,
      philosophy: pageData.whyChooseTripsAndShips.subtitle,
      points: [
        pageData.whyChooseTripsAndShips.description,
        ...pageData.whyChooseTripsAndShips.specialties
      ]
    },
    verdict: "High-touch agency advocacy transforms ordinary travel into extraordinary, seamless journeys."
  };

  // Map 8 Red Flags for MistakesGrid
  const redFlagsItems = pageData.redFlags.items.map((flag, idx) => ({
    number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
    title: flag.title,
    description: flag.description
  }));

  // Final Answer section formatted for ConclusionSection component
  const finalAnswerSections = [
    {
      heading: pageData.finalAnswer.title,
      paragraphs: [
        pageData.finalAnswer.summary,
        pageData.finalAnswer.coreEquation,
        pageData.finalAnswer.paragraphs[0],
        pageData.finalAnswer.paragraphs[1]
      ]
    }
  ];

  // Complete JSON-LD Schema matching standard reference structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent",
        "name": pageData.seo.title,
        "url": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent",
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntity": { "@id": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent#article" }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel agency specializing in African safaris, expedition cruises, bucket list vacations, luxury cruises, and personalized adventure travel.",
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Winter Garden",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "telephone": "+1-603-860-3274"
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
        "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent#article",
        "headline": pageData.seo.title,
        "url": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent",
        "description": pageData.seo.metaDescription,
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntityOfPage": { "@id": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent" }
      },
      {
        "@type": "Service",
        "name": "Travel Advisory Cost & Value Consultation",
        "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
        "serviceType": "Transparent Travel Planning Consultation",
        "description": "Educational guidance on travel advisor compensation models, supplier commissions, planning fees, and direct booking vs. advisor price comparison."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Florida Travel Agency", "item": "https://www.tripsandships.com/best-travel-agency-florida" },
          { "@type": "ListItem", "position": 3, "name": "Does It Cost More to Book Through a Travel Agent?", "item": "https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": pageData.faqs.items.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.title} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.secondaryKeywords.join(', ')} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent" />
        <link rel="canonical" href="https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText="Compare Your Travel Options"
        primaryCtaLink="/contact"
      />

      {/* ─── 2a. ADVISORY ECONOMICS & VALUE FRAMEWORK (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow="TRAVEL ECONOMICS & TRANSPARENCY"
        heading="Evaluating the True Value of Professional Travel Planning"
        paragraphs={[
          pageData.hero.introParagraphs[0],
          pageData.hero.introParagraphs[1]
        ]}
      />

      {/* ─── 2b. PROFESSIONAL FEE MODELS & CONSULTATION STANDARDS (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.feeModel.title}
        subtitle="Fee Models & Consultation Transparency"
        paragraphs={[
          pageData.feeModel.intro,
          pageData.feeModel.astaNote,
          pageData.feeModel.conclusion
        ]}
        items={feeModelCurvilinearItems}
      />

      {/* ─── 3. HOW DO TRAVEL AGENTS GET PAID (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.howPaid.title}
        subtitle={pageData.howPaid.subtitle}
        items={howPaidItems}
      />

      {/* ─── 4. SO, IS IT CHEAPER TO BOOK DIRECT? (AsymmetricStoryIntro) ─── */}
      <AsymmetricStoryIntro
        eyebrow="VALUE VS. PRICE BREAKDOWN"
        heading={pageData.isCheaperDirect.title}
        paragraphs={[
          pageData.isCheaperDirect.subtitle,
          pageData.isCheaperDirect.lead,
          pageData.isCheaperDirect.ftcWarning
        ]}
        highlights={pageData.isCheaperDirect.factorsToCompare}
        image1={directBookingPlaceholderImage1}
        image2={directBookingPlaceholderImage2}
        ctaText="Compare Your Booking Options"
        ctaLink="/contact"
      />

      {/* ─── 5. CAN A TRAVEL AGENT GET A BETTER PRICE? (EditorialIntroSection) ─── */}
      <EditorialIntroSection
        heading={pageData.betterPrice.title}
        eyebrow="Promotions & Preferred Rates"
        paragraphs={[
          pageData.betterPrice.description,
          `"${pageData.betterPrice.takeaway}"`
        ]}
        highlights={pageData.betterPrice.valueSources}
        badgeTitle="Premier Rate Advantage"
        badgeDescription="Maximizing overall package value vs simply seeking lowest advertised base price."
        placeholderLabel="PREMIER RATES & VALUE AMENITIES"
        image={null}
      />

      {/* ─── 6. DOES BOOKING A CRUISE THROUGH A TRAVEL AGENT COST MORE? (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={pageData.cruiseCosts.title}
        items={cruiseCostsHighlightsItems}
      />

      {/* ─── 7. WHEN DOES USING A TRAVEL AGENT MAKE THE MOST SENSE? (LuxuryZigZagShowcase) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.whenMakesSense.title}
        subtitle={pageData.whenMakesSense.subtitle}
        items={whenMakesSenseZigZagItems}
      />

      {/* ─── 8. WHAT ARE YOU REALLY PAYING FOR? (BrandPillarsShowcase) ─── */}
      <BrandPillarsShowcase data={brandPillarsData} />

      {/* ─── 9. TRAVEL AGENT VS BOOKING DIRECT (ComparisonTable) ─── */}
      <ComparisonTable data={comparisonTableData} />

      {/* ─── 9b. THE VERDICT ON DIRECT VS ADVISOR (ExpertInterlude) ─── */}
      <ExpertInterlude text={pageData.comparisonTable.verdict} />

      {/* ─── MID-PAGE CALL TO ACTION (FooterCTA) ─── */}
      <FooterCTA data={midPageCtaData} />

      {/* ─── 10. DOES IT SAVE MONEY & CAN IT COST MORE? (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title="Direct Savings vs. Circumstances Where Fees Apply"
        subtitle={pageData.doesItSaveMoney.subtitle}
        includedTitle={pageData.doesItSaveMoney.title}
        extrasTitle={pageData.canItCostMore.title}
        included={doesItSaveMoneyItems}
        extras={canItCostMoreItems}
      />

      {/* ─── 11. QUESTIONS TO ASK ABOUT FEES & HOW TO COMPARE (ChecklistCards) ─── */}
      <ChecklistCards data={feeChecklistData} />

      {/* ─── 12. LUXURY TRAVEL ADVISORS & TRIPS AND SHIPS SPECIALTIES (DualPhilosophyShowcase) ─── */}
      <DualPhilosophyShowcase data={luxuryVsAgencyData} />


      {/* ─── 14. IS A TRAVEL ADVISOR WORTH THE COST? (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.worthTheCost.title}
        subtitle={`${pageData.worthTheCost.subtitle} — "${pageData.worthTheCost.takeaway}"`}
        points={pageData.worthTheCost.scenarios}
      />

      {/* ─── 15. HOW TO KNOW IF AN ADVISOR PROVIDES GOOD VALUE (AuthorityGrid) ─── */}
      <AuthorityGrid
        title={pageData.howToKnowGoodValue.title}
        subtitle={`${pageData.howToKnowGoodValue.subtitle} FTC Guidance: ${pageData.howToKnowGoodValue.ftcNote}`}
        items={pageData.howToKnowGoodValue.hallmarks}
      />

      {/* ─── 16. RED FLAGS WHEN CHOOSING A TRAVEL AGENT (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.redFlags.title}
        subtitle={pageData.redFlags.subtitle}
        mistakes={redFlagsItems}
      />


            {/* ─── 13. ANGELA HUGHES: FOUR DECADES OF LUXURY LEADERSHIP (ExpertCredentials) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={`${pageData.angelaHughes.bio} ${pageData.whyExperienceMatters.description} ${pageData.whyExperienceMatters.ftcAdvice}`}
        quote={pageData.angelaHughes.conclusion}
        credentials={pageData.angelaHughes.questionsAnswered.map((q) => `Advisory Insight: "${q}"`)}
        image={AboutImage}
        badge="FOUR DECADES OF INDUSTRY LEADERSHIP"
        experienceBadge="40+ YEARS LEADERSHIP"
        authorityBoxTitle={pageData.angelaHughes.title}
        authoritySubtitle={pageData.whyExperienceMatters.title}
        ctaText="Consult With Angela Hughes"
        ctaLink="/contact"
      />


      {/* ─── 19. 15 FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      
      {/* ─── 18. FINAL ANSWER & SUMMARY (ConclusionSection) ─── */}
      <ConclusionSection sections={finalAnswerSections} />

      {/* ─── 20. FINAL CALL TO ACTION BANNER (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.finalAnswer.ctaSection.headline}
        description={pageData.finalAnswer.ctaSection.subheadline}
        buttonText="Plan My Luxury Journey"
        buttonLink="/contact"
      />
    </div>
  );
};

export default DoesItCostMoreToBookThroughATravelAgent;
