import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No External Placeholders)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import CostAndInclusionsPanel from '@/components/ui/CostAndInclusionsPanel';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaConciergeVsVeranda: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. ComparisonTable data structure
  const quickComparisonData = {
    title: pageData.quickAnswer.title,
    subtitle: pageData.quickAnswer.subtitle,
    headers: pageData.quickAnswer.headers,
    rows: pageData.quickAnswer.rows
  };

  // 2. ThreeColumnGrid items for Standard Veranda
  const standardVerandaCards = pageData.standardVeranda.cards.map(c => ({
    category: c.category,
    title: c.title,
    description: c.description,
    lead: c.lead,
    placeholderLabel: c.placeholderLabel,
    facets: c.facets
  }));

  // 3. DetailedInclusionsList items for 10 Concierge Benefits
  const conciergeBenefitsList = pageData.conciergeBenefits.items.map(b => ({
    title: b.title,
    paragraphs: b.paragraphs
  }));

  // 4. ValueBreakdownSplit items for Worth-It Analysis
  const worthItConciergeItems = pageData.worthItAnalysis.conciergeReasons.map(r => ({
    title: r.title,
    description: r.description
  }));
  const worthItVerandaItems = pageData.worthItAnalysis.verandaReasons.map(r => ({
    title: r.title,
    description: r.description
  }));

  // 5. TravelerPersonaCards items for Traveler Matchmaker
  const iconNames = ['Camera', 'Compass', 'Heart', 'Wine', 'Sparkles', 'Landmark', 'Gem', 'Anchor', 'Bike', 'Heart'];
  const travelerMatchmakerPersonas = pageData.travelerProfiles.personas.map((persona, idx) => ({
    title: persona.title,
    description: persona.description,
    traits: persona.traits,
    recommendations: persona.recommendations,
    icon: iconNames[idx % iconNames.length]
  }));

  // 6. StepByStepGuide items for 7-Step Decision Roadmap
  const decisionRoadmapSteps = pageData.decisionSteps.steps.map(s => ({
    number: s.number,
    title: s.title,
    description: s.description
  }));

  // 7. FAQ Accordion data format
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
            "name": "Concierge Veranda vs. Veranda",
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

        {/* ─── 3. QUICK ANSWER COMPARISON TABLE (ComparisonTable) ─── */}
        <div id="quick-answer" className="bg-slate-50 border-b border-slate-200">
          <ComparisonTable data={quickComparisonData} />
        </div>

        {/* ─── 4. STANDARD VERANDA STATEROOMS (ThreeColumnGrid) ─── */}
        <div id="standard-veranda" className="bg-white border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.standardVeranda.title}
            subtitle={pageData.standardVeranda.subtitle}
            items={standardVerandaCards}
          />
        </div>

        {/* ─── 5. CONCIERGE LEVEL PRIVILEGES (DetailedInclusionsList) ─── */}
        <div id="concierge-benefits" className="bg-slate-50 border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.conciergeBenefits.title}
            intro={[pageData.conciergeBenefits.description]}
            items={conciergeBenefitsList}
          />
        </div>

        {/* ─── 6. STATEROOM DIMENSIONS COMPARISON (LuxuryComparisonMatrix) ─── */}
        <div id="dimensions-comparison" className="border-b border-slate-200">
          <LuxuryComparisonMatrix
            title={pageData.dimensionsComparison.title}
            subtitle={pageData.dimensionsComparison.subtitle}
            headers={pageData.dimensionsComparison.headers}
            rows={pageData.dimensionsComparison.rows}
          />
        </div>

        {/* ─── 7. SHIP-BY-SHIP CONSIDERATIONS (ArcticGlanceFacts) ─── */}
        <div id="ship-considerations" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.shipConsiderations.title}
            items={pageData.shipConsiderations.items}
          />
        </div>

        {/* ─── 8. WORTH-IT BREAKDOWN (ValueBreakdownSplit) ─── */}
        <div id="worth-it" className="bg-white border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.worthItAnalysis.title}
            subtitle={pageData.worthItAnalysis.subtitle}
            includedTitle="When Concierge Level Is Worth It"
            extrasTitle="When Standard Veranda Is Better Value"
            included={worthItConciergeItems}
            extras={worthItVerandaItems}
          />
        </div>

        {/* ─── 9. PRICING & CALCULATION (CostAndInclusionsPanel) ─── */}
        <div id="pricing" className="bg-slate-50 border-b border-slate-200">
          <CostAndInclusionsPanel
            title={pageData.pricingAndCalculation.title}
            subtitle={pageData.pricingAndCalculation.subtitle}
            items={pageData.pricingAndCalculation.panels}
          />
        </div>

        {/* ─── 10. TRAVELER MATCHMAKER (TravelerPersonaCards) ─── */}
        <div id="traveler-matchmaker" className="bg-ice-100 border-b border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerProfiles.title}
            subtitle={pageData.travelerProfiles.subtitle}
            personas={travelerMatchmakerPersonas}
          />
        </div>

        {/* ─── 11. FARE INCLUSIONS VS OUT-OF-POCKET EXPENSES (GenericChecklistCards) ─── */}
        <div id="fare-inclusions" className="bg-white border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.fareInclusions.title}
            subtitle={pageData.fareInclusions.subtitle}
            cards={pageData.fareInclusions.cards}
          />
        </div>

        {/* ─── 12. 7-STEP DECISION ROADMAP (StepByStepGuide) ─── */}
        <div id="decision-roadmap" className="bg-slate-50 border-b border-slate-200">
          <StepByStepGuide
            title={pageData.decisionSteps.title}
            subtitle={pageData.decisionSteps.subtitle}
            steps={decisionRoadmapSteps}
            layout="grid"
            columns={2}
          />
        </div>

        {/* ─── 13. FINAL RECOMMENDATION SHOWDOWN (ContainedShowdown) ─── */}
        <div id="final-recommendation" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.finalRecommendation.title}
            brandA={pageData.finalRecommendation.brandA}
            brandB={pageData.finalRecommendation.brandB}
          />
        </div>

        {/* ─── 14. EXPERT CREDENTIALS (ExpertCredentials) ─── */}
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

        {/* ─── 15. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 20 FAQs) ─── */}
        <div id="faqs" className="bg-white border-t border-slate-200">
          <FAQAccordion data={faqData} />
        </div>

        {/* ─── 16. CENTER CTA (CenterCTA) ─── */}
        <CenterCTA
          badge="OCEANIA VERANDA UPGRADE CONSULTATION"
          title="Wondering If Concierge Level Is Worth It for Your Sailing?"
          description="Speak directly with Angela Hughes to compare live stateroom pricing, unobstructed cabin locations, and available Concierge Lounge benefits across Oceania's fleet."
          primaryCtaText="Contact Angela Hughes"
          primaryCtaLink="/contact"
          secondaryCtaText="Explore Oceania Staterooms & Suites"
          secondaryCtaLink="/oceania-cruises/staterooms-and-suites"
        />


      </div>
    </>
  );
};

export default OceaniaConciergeVsVeranda;
