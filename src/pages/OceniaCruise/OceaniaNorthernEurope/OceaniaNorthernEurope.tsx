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

const OceaniaNorthernEurope: React.FC = () => {
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
            "name": "Northern Europe Cruises",
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

        {/* ─── WHAT MAKES AN OCEANIA NORTHERN EUROPE CRUISE DIFFERENT (HighlightsSplit) ─── */}
        <div id="what-makes-different" className="border-b border-slate-200">
          <HighlightsSplit
            title={pageData.whatMakesDifferent.title}
            subtitle={pageData.whatMakesDifferent.subtitle}
            items={pageData.whatMakesDifferent.items}
            badgeSuffix={pageData.whatMakesDifferent.badgeSuffix}
            footerLeft={pageData.whatMakesDifferent.footerLeft}
            footerRight={pageData.whatMakesDifferent.footerRight}
            images={[]}
          />
        </div>

        {/* ─── MAIN TYPES OF ITINERARIES (AccordionFlexGrid) ─── */}
        <div id="itinerary-types" className="border-b border-slate-200">
          <AccordionFlexGrid
            title={pageData.mainItineraryTypes.title}
            subtitle={pageData.mainItineraryTypes.subtitle}
            items={pageData.mainItineraryTypes.items}
          />
        </div>

        {/* ─── POPULAR PORTS ACROSS NORTHERN EUROPE (ThreeColumnGrid) ─── */}
        <div id="popular-ports" className="border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.popularPorts.title}
            subtitle={pageData.popularPorts.subtitle}
            items={pageData.popularPorts.items}
          />
        </div>

        {/* ─── REGIONAL COMPARISON: BALTIC VS FJORDS (ShipPhilosophyFaceoff) ─── */}
        <div id="regional-comparison" className="border-b border-slate-200">
          <ShipPhilosophyFaceoff
            data={pageData.regionalComparison}
          />
        </div>

        {/* ─── FEATURED 2027 ITINERARIES (ComparisonTable) ─── */}
        <div id="featured-itineraries" className="border-b border-slate-200">
          <ComparisonTable data={pageData.featuredItinerariesTable} />
        </div>

        {/* ─── WHICH ITINERARY SHOULD YOU CHOOSE (BestForMatch) ─── */}
        <div id="which-itinerary" className="bg-slate-50 border-b border-slate-200">
          <BestForMatch data={pageData.whichItineraryToChoose} />
        </div>

        {/* ─── WHICH OCEANIA SHIPS SAIL NORTHERN EUROPE (ContainedShowdown) ─── */}
        <div id="ships-overview" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.shipsOverview.title}
            brandA={pageData.shipsOverview.brandA}
            brandB={pageData.shipsOverview.brandB}
          />
        </div>

        {/* ─── BEST TIME TO SAIL (InteractiveDestinationPanels) ─── */}
        <div id="best-time-to-sail" className="border-b border-slate-200">
          <InteractiveDestinationPanels
            title={pageData.bestTimeToSail.title}
            description={pageData.bestTimeToSail.description}
            items={pageData.bestTimeToSail.items}
          />
        </div>

        {/* ─── WHAT TO PACK (DressCodeGallery) ─── */}
        <div id="what-to-pack" className="bg-white border-b border-slate-200">
          <DressCodeGallery data={pageData.whatToPack} />
        </div>

        {/* ─── SHOULD YOU CHOOSE A VERANDA STATEROOM (CabinComparisonGallery) ─── */}
        <div id="veranda-staterooms" className="border-b border-slate-200">
          <CabinComparisonGallery
            title={pageData.verandaStaterooms.title}
            subtitle={pageData.verandaStaterooms.subtitle}
            items={pageData.verandaStaterooms.items}
          />
        </div>

        {/* ─── SHORE EXCURSIONS GUIDE (CuratedComforts) ─── */}
        <div id="shore-excursions" className="border-b border-slate-200">
          <CuratedComforts data={pageData.shoreExcursions} />
        </div>

        {/* ─── WHAT IS INCLUDED (CostValueAnalysisCards) ─── */}
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

        {/* ─── ADDING A LAND STAY EXTENSION (ExcursionTypesShowcase) ─── */}
        <div id="land-extensions" className="border-b border-slate-200">
          <ExcursionTypesShowcase data={pageData.landStayExtensions} />
        </div>

        {/* ─── ROUND-TRIP VS ONE-WAY CRUISES (ValueBreakdownSplit) ─── */}
        <div id="roundtrip-vs-oneway" className="border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.roundTripVsOneWay.title}
            subtitle={pageData.roundTripVsOneWay.subtitle}
            includedTitle={pageData.roundTripVsOneWay.includedTitle}
            extrasTitle={pageData.roundTripVsOneWay.extrasTitle}
            included={pageData.roundTripVsOneWay.included}
            extras={pageData.roundTripVsOneWay.extras}
          />
        </div>

        {/* ─── PROS AND CONS (DualPhilosophyShowcase) ─── */}
        <div id="pros-cons" className="border-b border-slate-200">
          <DualPhilosophyShowcase
            data={pageData.prosAndCons}
          />
        </div>

        {/* ─── HOW TO BOOK THE RIGHT CRUISE (StepByStepGuide) ─── */}
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

export default OceaniaNorthernEurope;
