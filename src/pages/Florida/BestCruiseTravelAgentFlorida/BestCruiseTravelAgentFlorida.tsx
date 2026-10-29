import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from "@/components/Navbar/Nav";

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (21 Distinct Unique Components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import LuxuryFeatureShowcase from '@/components/ui/LuxuryFeatureShowcase';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import CabinFeatureGrid from '@/components/ui/CabinFeatureGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import ExpeditionHighlight from '@/components/ui/ExpeditionHighlight';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import TopQuestionsReveal from '@/components/ui/TopQuestionsReveal';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import ComparisonTable from '@/components/ui/ComparisonTable';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import SilverseaStatTicker from '@/components/ui/SilverseaStatTicker';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ConclusionSection from '@/components/ui/ConclusionSection';

// Assets (Images Commented Out)
// import AboutImage from "../../assets/AboutAngela.jpeg";
// import AboutImage2 from "../../assets/AboutAngela2.jpeg";

const BestCruiseTravelAgentFlorida = () => {
  // 1. Map 5 Factors to ThreeColumnGrid items
  const whatMakesBestItems = pageData.whatMakesBest.factors.map((factor) => ({
    title: factor.title,
    description: factor.description,
    image: null,
    placeholderLabel: factor.title
  }));

  // 2. Map Luxury Cruise Planning Dimensions (Styles & Ship Sizes) for LuxuryFeatureShowcase
  const cruisePlanningDimensionItems = [
    {
      subtitle: "Dimension 01",
      title: pageData.cruisePlanningDimensions.styles.title,
      description: "From boutique yachting to European river voyages and polar expeditions, our curation aligns your pace, enrichment desires, and party profile with the perfect vessel.",
      features: pageData.cruisePlanningDimensions.styles.items,
      image: null
    },
    {
      subtitle: "Dimension 02",
      title: pageData.cruisePlanningDimensions.shipSizes.title,
      description: pageData.cruisePlanningDimensions.shipSizes.description,
      features: [
        "Small-Ship Yacht Cruising: Under 300 guests with intimate marina access",
        "Luxury Mid-Ship Cruising: 600–1,200 guests balancing expansive dining with bespoke intimacy",
        "Ultra-Luxury World Voyaging: Complete multi-month navigation with high staff-to-guest ratios"
      ],
      image: null
    }
  ];

  // 3. Map Cruise Line Selection to GenericChecklistCards
  const cruiseLineSelectionCards = [
    {
      title: "Personality & Culture Alignment Factors",
      items: pageData.cruiseLineSelection.emphasisPoints
    },
    {
      title: "Why Advisor Fit Matters",
      items: [pageData.cruiseLineSelection.body]
    }
  ];

  // 4. Map Ship Selection to CurvilinearGrid items
  const shipSelectionCurvilinearItems = (pageData.shipSelection.questions || []).map((it, idx) => ({
    title: it.q,
    description: it.a,
    icon: idx % 2 === 0 ? "Anchor" : "Ship"
  }));

  // 5. Cabin Feature Grid Data (Images Commented Out)
  // const cabinPlaceholderImage1 = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80";
  // const cabinPlaceholderImage2 = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80";

  const cabinChecklist = pageData.cabinSelection.checklist || [];
  const cabinFeatureGridData = {
    title: pageData.cabinSelection.title,
    subtitle: pageData.cabinSelection.subtitle,
    oceanview: {
      title: "Essential Cabin Positioning & Noise Evaluation",
      bestFor: "Ideal for travelers seeking smart value, midship stability, and strategic deck placement away from noisy public zones.",
      advantages: cabinChecklist.slice(0, 6)
    },
    balcony: {
      title: "Veranda Suites & Concierge Stateroom Architecture",
      bestFor: "Designed for travelers prioritizing expansive private verandas, dedicated butler service, suite amenities, and panoramic ocean vistas.",
      advantages: cabinChecklist.slice(6)
    }
  };

  // 6. Map Destinations to InteractivePillarHubGrid items
  const destinationHubItems = pageData.destinations.items.map((item) => ({
    title: item.title,
    description: item.description,
    category: item.category,
    image: null,
    link: item.link
  }));

  // 7. Map Value & Cost Breakdown to ValueBreakdownSplit
  const valueIncludedItems = (pageData.isItWorthIt.reasons || []).map((reason: any) => ({
    title: reason.title || reason,
    description: reason.description || reason
  }));

  const valueExtrasItems = [
    {
      title: "Direct Supplier Commission Model",
      description: pageData.costQuestion.body1
    },
    {
      title: "High-Touch Concierge Scope & Value",
      description: pageData.costQuestion.body2
    },
    {
      title: "Consumer Advisory Tip",
      description: pageData.costQuestion.advice
    },
    {
      title: "Dedicated Human Partnership",
      description: pageData.isItWorthIt.conclusion
    }
  ];

  // 8. Map How To Choose 7 Questions to TopQuestionsReveal
  const howToChooseQuestions = pageData.howToChoose.questions.map((item) => ({
    question: `${item.num}. ${item.q}`,
    answer: item.a
  }));

  // 9. Map Traveler Types to TravelerPersonaCards
  const travelerPersonas = [
    {
      title: pageData.travelerTypes.couples.title,
      icon: "Heart",
      description: "Bespoke romantic sailings with private verandas, intimate dining reservations, and couple's enrichment.",
      traits: pageData.travelerTypes.couples.items
    },
    {
      title: pageData.travelerTypes.families.title,
      icon: "Gem",
      description: "Family-friendly luxury voyages balancing world-class youth clubs with refined adult relaxation.",
      traits: pageData.travelerTypes.families.items
    },
    {
      title: pageData.travelerTypes.multigenerational.title,
      icon: "Landmark",
      description: "Multi-suite and interconnecting stateroom planning ensuring private space alongside shared milestone memories.",
      traits: pageData.travelerTypes.multigenerational.items
    }
  ];

  // 10. Map Planning Process to StepByStepGuide
  const planningProcessSteps = pageData.planningProcess.steps.map((st) => ({
    title: st.title,
    description: st.desc
  }));

  // 11. Map Authority Brands to AuthorityGrid
  const authorityGridItems = pageData.authorityStats.brands.map((brand) => ({
    title: brand,
    description: `Certified specialist cruise partner for ${brand} voyages worldwide.`
  }));

  // 12. FAQ Data
  const faqData = {
    title: pageData.faqs.title,
    faqs: pageData.faqs.items
  };

  // 13. Structured Schema (JSON-LD) matching standard reference structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida",
        "name": pageData.seo.title,
        "url": "https://www.tripsandships.com/best-cruise-travel-agent-florida",
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntity": { "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida#article" }
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
        "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida#article",
        "headline": pageData.seo.title,
        "url": "https://www.tripsandships.com/best-cruise-travel-agent-florida",
        "description": pageData.seo.metaDescription,
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntityOfPage": { "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida" }
      },
      {
        "@type": "Service",
        "name": "Luxury Cruise Travel Consulting & Booking",
        "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
        "serviceType": "Cruise Specialist Advisory Services",
        "description": "Specialized cruise planning for luxury ocean lines, European river cruises, and expedition voyages, including cabin selection, port logistics, and exclusive cruise amenities."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Florida Travel Agency", "item": "https://www.tripsandships.com/best-travel-agency-florida" },
          { "@type": "ListItem", "position": 3, "name": "Best Cruise Travel Agent in Florida", "item": "https://www.tripsandships.com/best-cruise-travel-agent-florida" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": pageData.faqs.items.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords.join(', ')} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/best-cruise-travel-agent-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/best-cruise-travel-agent-florida" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── 2. QUICK ANSWER & CRUISE ADVISOR RECOMMENDATION (AsymmetricStoryIntro) ─── */}
      {/* Image commented out: image1={AboutImage} */}
      <AsymmetricStoryIntro
        eyebrow="Direct Answer & Cruise Specialist Recommendation"
        heading={pageData.quickAnswer.title}
        paragraphs={[
          `"${pageData.quickAnswer.lead}"`,
          pageData.quickAnswer.body,
          pageData.quickAnswer.closing
        ]}
        highlights={pageData.quickAnswer.checklist}
        image1Placeholder="Angela Hughes, CTC"
        ctaText="Plan My Luxury Cruise"
        ctaLink="/contact"
      />

      {/* ─── 3. WHAT MAKES A CRUISE TRAVEL AGENT THE BEST (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesBest.title}
        subtitle={pageData.whatMakesBest.subtitle}
        items={whatMakesBestItems}
      />

      {/* ─── 4. WHY CHOOSE TRIPS & SHIPS FOR CRUISE TRAVEL PLANNING (EditorialIntroSection) ─── */}
      {/* Image commented out: image={AboutImage} */}
      <EditorialIntroSection
        eyebrow="Maritime Distinction & End-to-End Planning"
        heading={pageData.whyTripsAndShips.title}
        paragraphs={[
          pageData.whyTripsAndShips.subtitle,
          pageData.whyTripsAndShips.body1,
          pageData.whyTripsAndShips.body2
        ]}
        highlights={pageData.whyTripsAndShips.components}
        placeholderLabel="Angela Hughes, CTC - CEO & Luxury Cruise Specialist"
        badgeTitle="Cruise Leadership"
        badgeDescription="Angela Hughes, CTC — CEO, Trips & Ships Luxury Travel"
      />



      {/* ─── 6. LUXURY CRUISE PLANNING DIMENSIONS: STYLE & SHIP SIZE (LuxuryFeatureShowcase) ─── */}
      <LuxuryFeatureShowcase
        title={pageData.cruisePlanningDimensions.title}
        subtitle={pageData.cruisePlanningDimensions.subtitle}
        items={cruisePlanningDimensionItems}
      />

      {/* ─── 7. CHOOSING THE RIGHT CRUISE LINE (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.cruiseLineSelection.title}
        subtitle={pageData.cruiseLineSelection.subtitle}
        cards={cruiseLineSelectionCards}
      />

      {/* ─── 8. CHOOSING THE RIGHT CRUISE SHIP (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.shipSelection.title}
        subtitle={pageData.shipSelection.subtitle}
        items={shipSelectionCurvilinearItems}
      />

      {/* ─── 8b. CHOOSING THE RIGHT CRUISE CABIN (CabinFeatureGrid) ─── */}
      {/* Images commented out: image1={cabinPlaceholderImage1}, image2={cabinPlaceholderImage2} */}
      <CabinFeatureGrid
        data={cabinFeatureGridData}
      />

      {/* ─── 9. MID-PAGE CALL TO ACTION (CenterCTA) ─── */}
      <CenterCTA
        title="Find the Perfect Ship & Stateroom"
        description="Connect with Florida's premier luxury cruise specialist to secure preferred stateroom allocations, exclusive Virtuoso shipboard credits, and private shore itineraries."
        buttonText="Request a Custom Cruise Consultation"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ─── 10. WORLDWIDE DESTINATIONS (InteractivePillarHubGrid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title={pageData.destinations.title}
          subtitle={pageData.destinations.subtitle}
          items={destinationHubItems}
          variant="destination"
        />
      </div>

      {/* ─── 11. EXPEDITION & SMALL-SHIP EXPERTISE (ExpeditionHighlight) ─── */}
      {/* Image commented out: image={AboutImage2} */}
      <ExpeditionHighlight
        title={pageData.expeditionExpertise.title}
        subtitle={pageData.expeditionExpertise.subtitle}
        content={[
          pageData.expeditionExpertise.description,
          "For travelers considering an expedition journey, the advisor's role extends well beyond booking the cabin—it governs safety, polar permits, and Zodiac execution."
        ]}
        features={pageData.expeditionExpertise.elements}
      />

      {/* ─── 12. IS IT WORTH USING A CRUISE TRAVEL AGENT & COST (ValueBreakdownSplit) ─── */}
      {/* Image commented out: image={AboutImage} */}
      <ValueBreakdownSplit
        title={pageData.isItWorthIt.title}
        subtitle={pageData.isItWorthIt.subtitle}
        includedTitle="Advisory Value Advantages"
        extrasTitle={pageData.costQuestion.title}
        included={valueIncludedItems}
        extras={valueExtrasItems}
      />

      {/* ─── 13. HOW TO CHOOSE THE BEST CRUISE TRAVEL AGENT (TopQuestionsReveal) ─── */}
      <TopQuestionsReveal
        title={pageData.howToChoose.title}
        subtitle={pageData.howToChoose.subtitle}
        questions={howToChooseQuestions}
      />

      {/* ─── 14. CRUISE PLANNING BY TRAVELER TYPE (TravelerPersonaCards) ─── */}
      <TravelerPersonaCards
        title={pageData.travelerTypes.title}
        subtitle={pageData.travelerTypes.subtitle}
        personas={travelerPersonas}
      />

      {/* ─── 15. 12-ROW COMPARISON TABLE (ComparisonTable) ─── */}
      <ComparisonTable data={pageData.comparisonTable} />

      {/* ─── 16. THE TRIPS & SHIPS CRUISE PLANNING PROCESS (StepByStepGuide) ─── */}
      <StepByStepGuide
        title={pageData.planningProcess.title}
        subtitle={pageData.planningProcess.subtitle}
        steps={planningProcessSteps}
      />

      {/* ─── 17. RECOGNITION & CRUISE EXPERTISE STATS (SilverseaStatTicker & AuthorityGrid) ─── */}
      <SilverseaStatTicker stats={pageData.authorityStats.stats} />
      <AuthorityGrid
        title={pageData.authorityStats.title}
        subtitle={pageData.authorityStats.subtitle}
        items={authorityGridItems}
      />

            {/* ─── 5. ANGELA HUGHES AUTHORITY BOX (ExpertCredentials) ─── */}
      {/* Image commented out: image={AboutImage2} */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={pageData.authorityBox.bio}
      />

      {/* ─── 18. FAQ SECTION (FAQAccordion) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 19. FINAL CONCLUSION SECTION (ConclusionSection) ─── */}
      <ConclusionSection
        sections={[
          {
            heading: "Ready to Plan Your Luxury Cruise?",
            paragraphs: [
              "Let Trips & Ships Luxury Travel help you turn your next cruise into a complete luxury travel experience. Tell us where you want to sail, and we will architect the voyage.",
              "Signature Advisory Inclusions: Exclusive Shipboard Credits, Stateroom Upgrades & Priority Allocations, Bespoke Private Shore Excursions, 24/7 Dedicated Concierge Advocacy."
            ]
          }
        ]}
      />
    </div>
  );
};

export default BestCruiseTravelAgentFlorida;
