import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No External Placeholders)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import DressCodeGallery from '@/components/ui/DressCodeGallery';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Nav from '@/components/Navbar/Nav';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaDining: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // ComparisonTable data structure
  const quickComparisonData = {
    title: pageData.quickAnswer.title,
    subtitle: pageData.quickAnswer.subtitle,
    headers: pageData.quickAnswer.headers,
    rows: pageData.quickAnswer.rows
  };

  const menuOverviewItems = pageData.menuOverview.items.map((item) => ({
    ...item,
    lead: item.lead || item.description,
    facets: Array.isArray(item.facets)
      ? item.facets.map((facet: { label?: string; text?: string } | string) =>
          typeof facet === 'string'
            ? { label: 'Highlight', text: facet }
            : facet
        )
      : undefined
  }));

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
            "name": "Dining Guide",
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

        {/* ─── 4. RESTAURANT COMPLETE OVERVIEW (DetailedInclusionsList) ─── */}
        <div id="restaurant-overview" className="border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.restaurantOverview.title}
            intro={pageData.restaurantOverview.intro}
            items={pageData.restaurantOverview.venues}
          />
        </div>

        {/* ─── 5. SHIP-BY-SHIP RESTAURANT AVAILABILITY (LuxuryComparisonMatrix) ─── */}
        <div id="ship-availability" className="border-b border-slate-200">
          <LuxuryComparisonMatrix
            title={pageData.shipAvailability.title}
            subtitle={pageData.shipAvailability.subtitle}
            headers={pageData.shipAvailability.headers}
            rows={pageData.shipAvailability.rows}
          />
        </div>

        {/* ─── 6. MENUS OVERVIEW ACROSS MEAL PERIODS (ThreeColumnGrid) ─── */}
        <div id="menus-overview" className="bg-white border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.menuOverview.title}
            subtitle={pageData.menuOverview.subtitle}
            items={menuOverviewItems}
          />
        </div>

        {/* ─── 7. INCLUDED SPECIALTY VS PREMIUM EXTRAS (ValueBreakdownSplit) ─── */}
        <div id="specialty-inclusions" className="bg-slate-50 border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.specialtyInclusions.title}
            subtitle={pageData.specialtyInclusions.subtitle}
            includedTitle={pageData.specialtyInclusions.includedTitle}
            extrasTitle={pageData.specialtyInclusions.extrasTitle}
            included={pageData.specialtyInclusions.included}
            extras={pageData.specialtyInclusions.extras}
          />
        </div>

        {/* ─── 8. HOW DINING RESERVATIONS WORK (StepByStepGuide) ─── */}
        <div id="reservations-guide" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.reservationsGuide.title}
            subtitle={pageData.reservationsGuide.subtitle}
            steps={pageData.reservationsGuide.steps}
            layout="grid"
          />
        </div>

        {/* ─── 9. OPEN SEATING & ROOM SERVICE PERKS (GenericChecklistCards) ─── */}
        <div id="dining-flexibility" className="bg-white border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.diningFlexibility.title}
            subtitle={pageData.diningFlexibility.subtitle}
            cards={pageData.diningFlexibility.cards}
          />
        </div>

        {/* ─── 10. DIETARY ACCOMMODATIONS & AQUAMAR (ArcticGlanceFacts) ─── */}
        <div id="dietary-wellness" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.dietaryFacts.title}
            items={pageData.dietaryFacts.items}
          />
        </div>

        {/* ─── 11. RESTAURANT DRESS CODE GUIDANCE (DressCodeGallery) ─── */}
        <div id="dress-code" className="bg-white border-b border-slate-200">
          <DressCodeGallery data={pageData.dressCode} />
        </div>

        {/* ─── 12. LUXURY BRAND BENCHMARKING (BrandComparisonTable) ─── */}
        <div id="luxury-comparison" className="bg-slate-50 border-b border-slate-200">
          <BrandComparisonTable
            title={pageData.luxuryComparison.title}
            subtitle={pageData.luxuryComparison.subtitle}
            headers={pageData.luxuryComparison.headers}
            rows={pageData.luxuryComparison.rows}
          />
        </div>

        {/* ─── 13. IS OCEANIA GOOD FOR FOOD LOVERS (BrandPillarsShowcase) ─── */}
        <div id="food-lovers-verdict" className="bg-white border-b border-slate-200">
          <BrandPillarsShowcase data={pageData.foodLoversVerdict} />
        </div>

        {/* ─── 14. 10 EXPERT DINING TIPS (BrandTakeawaysGrid) ─── */}
        <div id="dining-tips" className="border-b border-slate-200">
          <BrandTakeawaysGrid
            title={pageData.diningTips.title}
            subtitle={pageData.diningTips.subtitle}
            items={pageData.diningTips.items}
          />
        </div>

        {/* ─── 15. IS IT WORTH IT SHOWDOWN (ContainedShowdown) ─── */}
        <div id="is-it-worth-it" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.isItWorthIt.title}
            brandA={pageData.isItWorthIt.brandA}
            brandB={pageData.isItWorthIt.brandB}
          />
        </div>

        {/* ─── 16. EXPERT CREDENTIALS (ExpertCredentials) ─── */}
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

        {/* ─── 17. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <div id="dining-faqs" className="bg-white border-b border-slate-200">
          <FAQAccordion data={pageData.faqs} />
        </div>

        {/* ─── 18. CALL TO ACTION (CenterCTA) ─── */}
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

export default OceaniaDining;

