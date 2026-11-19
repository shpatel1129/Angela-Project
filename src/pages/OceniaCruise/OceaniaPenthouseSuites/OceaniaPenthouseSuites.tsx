import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No External Placeholders)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaPenthouseSuites: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. ComparisonTable data structure
  const quickComparisonData = {
    title: pageData.quickAnswer.title,
    subtitle: pageData.quickAnswer.subtitle,
    headers: pageData.quickAnswer.headers,
    rows: pageData.quickAnswer.rows
  };

  // 2. ThreeColumnGrid items for Suite Architecture
  const architectureCards = pageData.penthouseArchitecture.cards.map(c => ({
    category: c.category,
    title: c.title,
    description: c.description,
    lead: c.lead,
    placeholderLabel: c.placeholderLabel,
    facets: c.facets
  }));

  // 3. DetailedInclusionsList items for 11 Core Privileges
  const privilegesList = pageData.penthouseInclusions.items.map(item => ({
    title: item.title,
    paragraphs: item.paragraphs
  }));

  // 4. ValueBreakdownSplit items for Penthouse vs Concierge
  const conciergeFeaturesList = pageData.headToHeadComparison.conciergeFeatures.map(f => ({
    title: f.title,
    description: f.description
  }));
  const penthouseFeaturesList = pageData.headToHeadComparison.penthouseFeatures.map(f => ({
    title: f.title,
    description: f.description
  }));

  // 5. TravelerPersonaCards items for Traveler Matchmaker
  const iconNames = ['Heart', 'Compass', 'Wine', 'Gem'];
  const travelerMatchmakerPersonas = pageData.travelerProfiles.personas.map((persona, idx) => ({
    title: persona.title,
    description: persona.description,
    traits: persona.traits,
    recommendations: persona.recommendations,
    icon: iconNames[idx % iconNames.length]
  }));

  // 6. FAQ Accordion data format
  const faqData = {
    title: pageData.faqs.title,
    subtitle: pageData.faqs.subtitle,
    questions: pageData.faqs.questions
  };

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
            "name": "Are Oceania Penthouse Suites Worth It?",
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

      {/* ─── 1. HERO SECTION (ComparisonHero) ─── */}
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
        {/* ─── 2. EDITORIAL INTRO SECTION (EditorialIntroSplit) ─── */}
        <div id="intro-overview" className="bg-white border-b border-slate-200">
          <EditorialIntroSplit
            heading={pageData.editorialIntro.heading}
            paragraphs={pageData.editorialIntro.paragraphs}
            eyebrow={pageData.editorialIntro.eyebrow}
          />
        </div>

        {/* ─── 3. QUICK ANSWER SUMMARY TABLE (ComparisonTable) ─── */}
        <div id="quick-answer" className="bg-slate-50 border-b border-slate-200">
          <ComparisonTable data={quickComparisonData} />
        </div>

        {/* ─── 4. SUITE ARCHITECTURE & LIVING SPACE (ThreeColumnGrid) ─── */}
        <div id="suite-architecture" className="bg-white border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.penthouseArchitecture.title}
            subtitle={pageData.penthouseArchitecture.subtitle}
            items={architectureCards}
          />
        </div>

        {/* ─── 5. FLEET DIMENSIONS COMPARISON (LuxuryComparisonMatrix) ─── */}
        <div id="dimensions-comparison" className="border-b border-slate-200">
          <LuxuryComparisonMatrix
            title={pageData.dimensionsComparison.title}
            subtitle={pageData.dimensionsComparison.subtitle}
            headers={pageData.dimensionsComparison.headers}
            rows={pageData.dimensionsComparison.rows}
          />
        </div>

        {/* ─── 6. 11 PENTHOUSE PRIVILEGES & BUTLER SERVICES (DetailedInclusionsList) ─── */}
        <div id="suite-inclusions" className="bg-slate-50 border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.penthouseInclusions.title}
            intro={[pageData.penthouseInclusions.description]}
            items={privilegesList}
          />
        </div>

        {/* ─── 7. PENTHOUSE VS CONCIERGE LEVEL SHOWDOWN (ValueBreakdownSplit) ─── */}
        <div id="penthouse-vs-concierge" className="bg-white border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.headToHeadComparison.title}
            subtitle={pageData.headToHeadComparison.subtitle}
            includedTitle="Concierge Level Veranda Features"
            extrasTitle="Penthouse Suite Elevating Features"
            included={conciergeFeaturesList}
            extras={penthouseFeaturesList}
          />
        </div>

        {/* ─── 8. HIGHER SUITES BENCHMARK: OCEANIA & VISTA SUITES (ArcticGlanceFacts) ─── */}
        <div id="higher-suites" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.higherSuitesComparison.title}
            items={pageData.higherSuitesComparison.items}
          />
        </div>

        {/* ─── 9. WORTH-IT DECISION CRITERIA (GenericChecklistCards) ─── */}
        <div id="worth-it-evaluation" className="bg-white border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.worthItEvaluation.title}
            subtitle={pageData.worthItEvaluation.subtitle}
            cards={pageData.worthItEvaluation.cards}
          />
        </div>

        {/* ─── 10. SUITE PRICING & VALUE DELTAS (CabinComparisonGallery) ─── */}
        <div id="pricing-analysis">
          <CabinComparisonGallery
            title={pageData.pricingAnalysis.title}
            subtitle={pageData.pricingAnalysis.subtitle}
            items={pageData.pricingAnalysis.items}
            expertRecommendation={pageData.pricingAnalysis.expertRecommendation}
          />
        </div>

        {/* ─── 11. SHIP-BY-SHIP SELECTION (ArcticGlanceFacts was 8, use TravelerPersonaCards for profiles) ─── */}
        <div id="traveler-profiles" className="bg-ice-100 border-b border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerProfiles.title}
            subtitle={pageData.travelerProfiles.subtitle}
            personas={travelerMatchmakerPersonas}
          />
        </div>

        {/* ─── 12. FINAL RECOMMENDATION SHOWDOWN (ContainedShowdown) ─── */}
        <div id="final-recommendation" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.finalRecommendation.title}
            brandA={pageData.finalRecommendation.brandA}
            brandB={pageData.finalRecommendation.brandB}
          />
        </div>

        {/* ─── 13. EXPERT CREDENTIALS (ExpertCredentials) ─── */}
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
            image={AboutAngelaImg}
            ctaText={pageData.expertAdvice.expert.ctaText}
            ctaLink={pageData.expertAdvice.expert.ctaLink}
          />
        </div>

        {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 20 FAQs) ─── */}
        <div id="faqs" className="bg-white border-t border-slate-200">
          <FAQAccordion data={faqData} />
        </div>

        {/* ─── 15. CENTER CTA (CenterCTA) ─── */}
        <CenterCTA
          badge="OCEANIA PENTHOUSE SUITE BOOKING"
          title="Ready to Reserve Your Oceania Penthouse Suite?"
          description="Speak directly with Angela Hughes to compare live suite availability, prime deck locations, and exclusive Virtuoso amenities across Oceania's fleet."
          primaryCtaText="Contact Angela Hughes"
          primaryCtaLink="/contact"
          secondaryCtaText="Compare Concierge vs Veranda"
          secondaryCtaLink="/oceania-cruises/concierge-vs-veranda"
        />


      </div>
    </>
  );
};

export default OceaniaPenthouseSuites;

