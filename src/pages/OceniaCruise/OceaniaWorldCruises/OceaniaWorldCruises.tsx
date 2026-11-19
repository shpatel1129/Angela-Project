import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition Across Page)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import AccordionFlexGrid from '@/components/ui/AccordionFlexGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import ComparisonTable from '@/components/ui/ComparisonTable';
import BestForMatch from '@/components/ui/BestForMatch';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import InteractiveDestinationPanels from '@/components/ui/InteractiveDestinationPanels';
import DressCodeGallery from '@/components/ui/DressCodeGallery';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import CuratedComforts from '@/components/ui/CuratedComforts';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ExcursionTypesShowcase from '@/components/ui/ExcursionTypesShowcase';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import DualPhilosophyShowcase from '@/components/ui/DualPhilosophyShowcase';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Image Assets
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaWorldCruises: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  const meta = pageData.meta as {
    keywords?: string;
    primaryKeyword?: string;
    secondaryKeywords?: string[];
  };
  const keywords = meta.keywords || (meta.primaryKeyword ? [meta.primaryKeyword, ...(meta.secondaryKeywords || [])].join(", ") : "");

  // Structured Schema (Organization, WebPage, Article, Breadcrumbs, FAQs)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "logo": "https://www.tripsandships.com/assets/logo.png"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angelahughes",
        "name": "Angela Hughes",
        "jobTitle": "Luxury Cruise Specialist & Elite Travel Advisor",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageData.meta.title,
        "description": pageData.meta.description,
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Oceania Cruises",
            "item": "https://www.tripsandships.com/oceania-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "World Cruises & Grand Voyages",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": pageData.meta.title,
        "description": pageData.meta.description,
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@id": "https://www.tripsandships.com/#angelahughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.questions.map((faq) => ({
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
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.title} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content={pageData.meta.title} />
        <meta property="og:description" content={pageData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.meta.title} />
        <meta name="twitter:description" content={pageData.meta.description} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ─── HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      <div className="w-full">
        {/* ─── EDITORIAL INTRO SECTION (EditorialIntroSplit) ─── */}
        <div id="intro-overview" className="bg-white border-b border-slate-200">
          <EditorialIntroSplit
            heading={pageData.editorialIntro.heading}
            paragraphs={pageData.editorialIntro.paragraphs}
            eyebrow={pageData.editorialIntro.eyebrow}
          />
        </div>

        {/* ─── AT A GLANCE COMPARISON TABLE (BrandComparisonTable) ─── */}
        <div id="quick-comparison" className="bg-slate-50 border-b border-slate-200">
          <BrandComparisonTable
            title={pageData.quickAnswer.title}
            subtitle={pageData.quickAnswer.subtitle}
            headers={pageData.quickAnswer.headers}
            rows={pageData.quickAnswer.rows}
          />
        </div>

        {/* ─── 2028 WORLD CRUISE: AROUND THE WORLD IN 180 DAYS (HighlightsSplit) ─── */}
        <div id="world-cruise-2028" className="border-b border-slate-200">
          <HighlightsSplit
            title={pageData.worldCruise2028Highlights.title}
            subtitle={pageData.worldCruise2028Highlights.subtitle}
            items={pageData.worldCruise2028Highlights.items}
            badgeSuffix={pageData.worldCruise2028Highlights.badgeSuffix}
            footerLeft={pageData.worldCruise2028Highlights.footerLeft}
            footerRight={pageData.worldCruise2028Highlights.footerRight}
            images={[]}
          />
        </div>

        {/* ─── OTHER LONGER VOYAGES TO CONSIDER (AccordionFlexGrid) ─── */}
        <div id="other-longer-voyages" className="border-b border-slate-200">
          <AccordionFlexGrid
            title={pageData.otherLongerVoyages.title}
            subtitle={pageData.otherLongerVoyages.subtitle}
            items={pageData.otherLongerVoyages.items}
          />
        </div>

        {/* ─── OCEANIA AURELIA OVERVIEW (ThreeColumnGrid) ─── */}
        <div id="ship-aurelia" className="border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.shipAureliaOverview.title}
            subtitle={pageData.shipAureliaOverview.subtitle}
            items={pageData.shipAureliaOverview.items}
          />
        </div>

        {/* ─── WORLD CRUISE VS GRAND VOYAGE PHILOSOPHY (ShipPhilosophyFaceoff) ─── */}
        <div id="world-vs-grand-philosophy" className="border-b border-slate-200">
          <ShipPhilosophyFaceoff
            data={pageData.worldVsGrandPhilosophy}
          />
        </div>

        {/* ─── 2028 VS 2029 WORLD CRUISE COMPARISON (ComparisonTable) ─── */}
        <div id="world-cruise-comparison" className="border-b border-slate-200">
          <ComparisonTable data={pageData.worldCruiseCompareTable} />
        </div>

        {/* ─── WHICH EXTENDED VOYAGE TO CHOOSE (BestForMatch) ─── */}
        <div id="which-to-choose" className="bg-slate-50 border-b border-slate-200">
          <BestForMatch data={pageData.whichToChooseMatch} />
        </div>

        {/* ─── 2028 GRAND VOYAGES SHOWDOWN (ContainedShowdown) ─── */}
        <div id="grand-voyages-showdown" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.grandVoyages2028Showcase.title}
            brandA={pageData.grandVoyages2028Showcase.brandA}
            brandB={pageData.grandVoyages2028Showcase.brandB}
          />
        </div>

        {/* ─── PREPARING FOR AN EXTENDED VOYAGE (InteractiveDestinationPanels) ─── */}
        <div id="preparation-pillars" className="border-b border-slate-200">
          <InteractiveDestinationPanels
            title={pageData.preparationPillars.title}
            description={pageData.preparationPillars.description}
            items={pageData.preparationPillars.items}
          />
        </div>

        {/* ─── WHAT TO PACK & WARDROBE PLANNING (DressCodeGallery) ─── */}
        <div id="wardrobe-packing" className="bg-white border-b border-slate-200">
          <DressCodeGallery data={pageData.wardrobePacking} />
        </div>

        {/* ─── STATEROOM & SUITE SELECTION (CabinComparisonGallery) ─── */}
        <div id="stateroom-selection" className="border-b border-slate-200">
          <CabinComparisonGallery
            title={pageData.stateroomSelection.title}
            subtitle={pageData.stateroomSelection.subtitle}
            items={pageData.stateroomSelection.items}
          />
        </div>

        {/* ─── DAILY LIFE ABOARD A WORLD CRUISE (CuratedComforts) ─── */}
        <div id="daily-life" className="border-b border-slate-200">
          <CuratedComforts data={pageData.dailyLife} />
        </div>

        {/* ─── WHAT IS INCLUDED ON A WORLD CRUISE (CostValueAnalysisCards) ─── */}
        <div id="what-is-included" className="bg-slate-50 border-b border-slate-200">
          <CostValueAnalysisCards
            title={pageData.whatIsIncluded.title}
            subtitle={pageData.whatIsIncluded.subtitle}
            includedTitle={pageData.whatIsIncluded.includedTitle}
            extrasTitle={pageData.whatIsIncluded.extrasTitle}
            included={pageData.whatIsIncluded.included}
            extras={pageData.whatIsIncluded.extras}
          />
        </div>

        {/* ─── CAN YOU BOOK PART OF A WORLD CRUISE (ExcursionTypesShowcase) ─── */}
        <div id="segments-guide" className="border-b border-slate-200">
          <ExcursionTypesShowcase data={pageData.segmentsGuide} />
        </div>

        {/* ─── WORLD CRUISE VALUE VS SEPARATE CRUISES (ValueBreakdownSplit) ─── */}
        <div id="value-comparison" className="border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.valueComparison.title}
            subtitle={pageData.valueComparison.subtitle}
            includedTitle={pageData.valueComparison.includedTitle}
            extrasTitle={pageData.valueComparison.extrasTitle}
            included={pageData.valueComparison.included}
            extras={pageData.valueComparison.extras}
          />
        </div>

        {/* ─── PROS AND CONS (DualPhilosophyShowcase) ─── */}
        <div id="pros-cons" className="border-b border-slate-200">
          <DualPhilosophyShowcase
            data={pageData.prosAndCons}
          />
        </div>

        {/* ─── HOW TO BOOK A WORLD CRUISE OR GRAND VOYAGE (StepByStepGuide) ─── */}
        <div id="booking-steps" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.bookingSteps.title}
            subtitle={pageData.bookingSteps.subtitle}
            steps={pageData.bookingSteps.steps}
            layout="grid"
          />
        </div>

        {/* ─── IS IT WORTH IT (ArcticGlanceFacts) ─── */}
        <div id="is-it-worth-it" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.isItWorthIt.title}
            items={pageData.isItWorthIt.items}
          />
        </div>

        {/* ─── EXPERT GUIDANCE & RECOMMENDATION (ExpertCredentials) ─── */}
        <div id="expert-advice">
          <ExpertCredentials
            badge={pageData.expertAdvice.expert.badge}
            authorityBoxTitle={pageData.expertAdvice.expert.authorityBoxTitle}
            authoritySubtitle={pageData.expertAdvice.expert.authoritySubtitle}
            name={pageData.expertAdvice.expert.name}
            title={pageData.expertAdvice.expert.title}
            experienceBadge={pageData.expertAdvice.expert.experienceBadge}
            bio={pageData.expertAdvice.expert.bio}
            quote={pageData.expertAdvice.expert.quote}
            quoteSubtitle={pageData.expertAdvice.expert.quoteSubtitle}
            credentials={pageData.expertAdvice.expert.credentials}
            ctaText={pageData.expertAdvice.expert.ctaText}
            ctaLink={pageData.expertAdvice.expert.ctaLink}
            image={AboutAngelaImg}
          />
        </div>

        {/* ─── FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <div id="faqs" className="bg-white border-b border-slate-200">
          <FAQAccordion data={pageData.faqs} />
        </div>

        {/* ─── CALL TO ACTION (CenterCTA) ─── */}
        <div id="contact-cta">
          <CenterCTA
            title={pageData.centerCta.title}
            description={pageData.centerCta.subtitle}
            buttonText={pageData.centerCta.primaryCtaText}
            buttonLink={pageData.centerCta.primaryCtaLink}
          />
        </div>


      </div>
    </>
  );
};

export default OceaniaWorldCruises;
