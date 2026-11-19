import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No External Placeholders)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Nav from '@/components/Navbar/Nav';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaDrinkPackages: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // ComparisonTable data structure
  const quickComparisonData = {
    title: pageData.quickAnswer.title,
    subtitle: pageData.quickAnswer.subtitle,
    headers: pageData.quickAnswer.headers,
    rows: pageData.quickAnswer.rows
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
            "name": "Drink Packages",
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

        {/* ─── 4. YOUR WORLD INCLUDED BEVERAGE INCLUSIONS (DetailedInclusionsList) ─── */}
        <div id="included-beverages" className="border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.alwaysIncludedSection.title}
            intro={pageData.alwaysIncludedSection.intro}
            items={pageData.alwaysIncludedSection.items}
          />
        </div>

        {/* ─── 5. PRESTIGE SELECT COVERAGE VS EXCLUSIONS (ValueBreakdownSplit) ─── */}
        <div id="prestige-select-coverage" className="bg-slate-50 border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.prestigeSelectCoverage.title}
            subtitle={pageData.prestigeSelectCoverage.subtitle}
            includedTitle={pageData.prestigeSelectCoverage.includedTitle}
            extrasTitle={pageData.prestigeSelectCoverage.extrasTitle}
            included={pageData.prestigeSelectCoverage.included}
            extras={pageData.prestigeSelectCoverage.extras}
          />
        </div>

        {/* ─── 6. PACKAGE COSTS MATRIX & EXPENDITURES (LuxuryComparisonMatrix) ─── */}
        <div id="package-costs" className="border-b border-slate-200">
          <LuxuryComparisonMatrix
            title={pageData.packageCostsMatrix.title}
            subtitle={pageData.packageCostsMatrix.subtitle}
            headers={pageData.packageCostsMatrix.headers}
            rows={pageData.packageCostsMatrix.rows}
          />
        </div>

        {/* ─── 7. PRESTIGE SELECT VS WINE & BEER AMENITY (BrandComparisonTable) ─── */}
        <div id="package-comparison" className="bg-white border-b border-slate-200">
          <BrandComparisonTable
            title={pageData.packageComparison.title}
            subtitle={pageData.packageComparison.subtitle}
            headers={pageData.packageComparison.headers}
            rows={pageData.packageComparison.rows}
          />
        </div>

        {/* ─── 8. VALUE & BREAK-EVEN PROFILES (ThreeColumnGrid) ─── */}
        <div id="break-even-analysis" className="bg-slate-50 border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.breakEvenScenarios.title}
            subtitle={pageData.breakEvenScenarios.subtitle}
            items={pageData.breakEvenScenarios.items}
          />
        </div>

        {/* ─── 9. GRATUITY POLICIES & VENUES (GenericChecklistCards) ─── */}
        <div id="gratuities-and-venues" className="bg-white border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.gratuityAndVenues.title}
            subtitle={pageData.gratuityAndVenues.subtitle}
            cards={pageData.gratuityAndVenues.cards}
          />
        </div>

        {/* ─── 10. 4-PHASE PURCHASING TIMELINE (StepByStepGuide) ─── */}
        <div id="purchasing-timeline" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.purchasingTimeline.title}
            subtitle={pageData.purchasingTimeline.subtitle}
            steps={pageData.purchasingTimeline.steps}
            layout="grid"
          />
        </div>

        {/* ─── 11. COMPETITOR LUXURY BENCHMARK (ArcticGlanceFacts) ─── */}
        <div id="competitor-comparison" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.luxuryCompetitorBenchmarking.title}
            items={pageData.luxuryCompetitorBenchmarking.items}
          />
        </div>

        {/* ─── 12. 10 EXPERT BEVERAGE TIPS (BrandTakeawaysGrid) ─── */}
        <div id="expert-tips" className="border-b border-slate-200">
          <BrandTakeawaysGrid
            title={pageData.expertTips.title}
            subtitle={pageData.expertTips.subtitle}
            items={pageData.expertTips.items}
          />
        </div>

        {/* ─── 13. IS OCEANIA DRINK PACKAGE WORTH IT (ContainedShowdown) ─── */}
        <div id="is-it-worth-it" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.isItWorthIt.title}
            brandA={pageData.isItWorthIt.brandA}
            brandB={pageData.isItWorthIt.brandB}
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

        {/* ─── 15. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <div id="drink-faqs" className="bg-white border-b border-slate-200">
          <FAQAccordion data={pageData.faqs} />
        </div>

        {/* ─── 16. CALL TO ACTION (CenterCTA) ─── */}
        <div id="contact-cta">
          <CenterCTA
            title={pageData.centerCta.title}
            subtitle={pageData.centerCta.subtitle}
            primaryCtaText={pageData.centerCta.primaryCtaText}
            primaryCtaLink={pageData.centerCta.primaryCtaLink}
            secondaryCtaText={pageData.centerCta.secondaryCtaText}
            secondaryCtaLink={pageData.centerCta.secondaryCtaLink}
          />
        </div>


      </div>
    </>
  );
};

export default OceaniaDrinkPackages;

