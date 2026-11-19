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
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Nav from '@/components/Navbar/Nav';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaSpecialtyDining: React.FC = () => {
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
            "name": "Specialty Dining",
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

        {/* ─── 4. INCLUDED SPECIALTY RESTAURANTS (DetailedInclusionsList) ─── */}
        <div id="included-specialty-venues" className="border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.includedRestaurants.title}
            intro={pageData.includedRestaurants.intro}
            items={pageData.includedRestaurants.venues}
          />
        </div>

        {/* ─── 5. INCLUDED VS PREMIUM SURCHARGES (ValueBreakdownSplit) ─── */}
        <div id="experiences-cost-extra" className="bg-slate-50 border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.experiencesCostExtra.title}
            subtitle={pageData.experiencesCostExtra.subtitle}
            includedTitle={pageData.experiencesCostExtra.includedTitle}
            extrasTitle={pageData.experiencesCostExtra.extrasTitle}
            included={pageData.experiencesCostExtra.included}
            extras={pageData.experiencesCostExtra.extras}
          />
        </div>

        {/* ─── 6. FLEET RESTAURANT AVAILABILITY MATRIX (LuxuryComparisonMatrix) ─── */}
        <div id="ship-lineups" className="border-b border-slate-200">
          <LuxuryComparisonMatrix
            title={pageData.shipLineups.title}
            subtitle={pageData.shipLineups.subtitle}
            headers={pageData.shipLineups.headers}
            rows={pageData.shipLineups.rows}
          />
        </div>

        {/* ─── 7. HOW MANY SPECIALTY DINING RESERVATIONS CAN YOU MAKE? (Tables & Scenarios) ─── */}
        <div id="reservation-allowances" className="bg-slate-50 border-b border-slate-200 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-3 block">
                {pageData.reservationLimits.subtitle}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
                {pageData.reservationLimits.title}
              </h2>
              <div className="w-16 h-1 bg-gold-400 mx-auto mb-6"></div>
              <p className="font-sans text-lg text-slate-600 leading-relaxed">
                {pageData.reservationLimits.intro}
              </p>
            </div>

            {/* Published Reservation Allowance Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Table 1: Allura, Vista, Marina and Riviera */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-navy-950 px-6 py-4">
                  <h3 className="font-display text-xl text-white">
                    {pageData.reservationLimits.tableLargeShips.title}
                  </h3>
                  <p className="font-sans text-xs text-ice-200 mt-1">
                    {pageData.reservationLimits.tableLargeShips.subtitle}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-xs font-bold text-navy-950 uppercase tracking-wider">
                        <th className="px-5 py-3.5">Accommodation Category</th>
                        <th className="px-5 py-3.5">Voyage Length</th>
                        <th className="px-5 py-3.5 text-center">Reservations per Venue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {pageData.reservationLimits.tableLargeShips.rows.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}>
                          <td className="px-5 py-3.5 font-medium text-navy-900">{row.category}</td>
                          <td className="px-5 py-3.5 text-slate-600">{row.length}</td>
                          <td className="px-5 py-3.5 text-center font-bold text-gold-600">{row.allowance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: Nautica, Insignia and Sirena */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-navy-950 px-6 py-4">
                  <h3 className="font-display text-xl text-white">
                    {pageData.reservationLimits.tableSmallShips.title}
                  </h3>
                  <p className="font-sans text-xs text-ice-200 mt-1">
                    {pageData.reservationLimits.tableSmallShips.subtitle}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-xs font-bold text-navy-950 uppercase tracking-wider">
                        <th className="px-5 py-3.5">Accommodation Category</th>
                        <th className="px-5 py-3.5">Voyage Length</th>
                        <th className="px-5 py-3.5 text-center">Reservations per Venue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {pageData.reservationLimits.tableSmallShips.rows.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}>
                          <td className="px-5 py-3.5 font-medium text-navy-900">{row.category}</td>
                          <td className="px-5 py-3.5 text-slate-600">{row.length}</td>
                          <td className="px-5 py-3.5 text-center font-bold text-gold-600">{row.allowance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Important Guidance Note */}
            <div className="bg-ice-50 border-l-4 border-gold-500 p-6 rounded-r-xl max-w-4xl mx-auto mb-4">
              <p className="font-sans text-sm text-navy-900 font-medium leading-relaxed">
                <strong className="text-navy-950">Important:</strong> {pageData.reservationLimits.importantNote}
              </p>
            </div>
          </div>

          {/* 3 Real-World Examples */}
          <ThreeColumnGrid
            title={pageData.reservationScenarios.title}
            subtitle={pageData.reservationScenarios.subtitle}
            items={pageData.reservationScenarios.items}
          />
        </div>

        {/* ─── 8. 4-PHASE RESERVATION BOOKING TIMELINE (StepByStepGuide) ─── */}
        <div id="booking-timeline" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.bookingTimeline.title}
            subtitle={pageData.bookingTimeline.subtitle}
            steps={pageData.bookingTimeline.steps}
            layout="grid"
          />
        </div>

        {/* ─── 9. MULTIPLE VISITS & IN-SUITE BUTLER DINING (GenericChecklistCards) ─── */}
        <div id="multiple-visits-and-suite-dining" className="bg-white border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.multipleVisitsAndSuiteDining.title}
            subtitle={pageData.multipleVisitsAndSuiteDining.subtitle}
            cards={pageData.multipleVisitsAndSuiteDining.cards}
          />
        </div>

        {/* ─── 10. LUXURY CRUISE LINE BENCHMARKING (BrandComparisonTable) ─── */}
        <div id="luxury-benchmarking" className="bg-slate-50 border-b border-slate-200">
          <BrandComparisonTable
            title={pageData.luxuryBenchmarking.title}
            subtitle={pageData.luxuryBenchmarking.subtitle}
            headers={pageData.luxuryBenchmarking.headers}
            rows={pageData.luxuryBenchmarking.rows}
          />
        </div>

        {/* ─── 11. 10 EXPERT SPECIALTY DINING TIPS (BrandTakeawaysGrid) ─── */}
        <div id="expert-tips" className="border-b border-slate-200">
          <BrandTakeawaysGrid
            title={pageData.expertTips.title}
            subtitle={pageData.expertTips.subtitle}
            items={pageData.expertTips.items}
          />
        </div>

        {/* ─── 12. IS OCEANIA SPECIALTY DINING WORTH IT (ContainedShowdown) ─── */}
        <div id="is-it-worth-it" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.isItWorthIt.title}
            brandA={pageData.isItWorthIt.brandA}
            brandB={pageData.isItWorthIt.brandB}
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

        {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <div id="specialty-faqs" className="bg-white border-b border-slate-200">
          <FAQAccordion data={pageData.faqs} />
        </div>

        {/* ─── 15. CALL TO ACTION (CenterCTA) ─── */}
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

export default OceaniaSpecialtyDining;

