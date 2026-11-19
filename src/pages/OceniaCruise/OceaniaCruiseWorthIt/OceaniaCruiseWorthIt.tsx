import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No Images Added)
import ComparisonHero from '@/components/ui/ComparisonHero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import SmartSpendingSplit from '@/components/ui/SmartSpendingSplit';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ElegantFleetShowcase from '@/components/ui/ElegantFleetShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TabbedComparison from '@/components/ui/TabbedComparison';
import FeatureSplit from '@/components/ui/FeatureSplit';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import FadeIn from '@/components/ui/FadeIn';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaCruiseWorthIt: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Core Pillars for ThreeColumnGrid
  const pillarItems = pageData.corePillars.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    features: item.features,
    placeholderLabel: item.placeholderLabel || item.title
  }));

  // 2. Inclusions for ValueBreakdownSplit
  const includedItems = pageData.inclusions.included;
  const choiceItems = pageData.inclusions.extras;

  // 3. Extra expenses for SmartSpendingSplit
  const extraExpensesCol1 = pageData.whatCostsExtra.spendMore.map((item) => ({
    title: item.title,
    description: item.description
  }));
  const extraExpensesCol2 = pageData.whatCostsExtra.spendLess.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // 4. Cost factors for BrandTakeawaysGrid
  const costFactorItems = pageData.costFactors.items.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // 5. Fleet ships for ElegantFleetShowcase
  const fleetShips = pageData.fleetShowcase.ships;

  // 6. Stateroom accommodation items for DetailedInclusionsList
  const stateroomItems = pageData.staterooms.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    lists: item.lists,
    highlight: item.highlight,
    placeholderLabel: item.title
  }));

  // 7. Traveler Persona Profiles for TravelerPersonaCards
  const personaCards = pageData.travelerProfiles.personas.map((persona) => ({
    title: persona.title,
    icon: persona.icon,
    description: persona.description,
    traits: persona.traits
  }));

  // 8. Competitor comparisons for TabbedComparison
  const competitorTabs = pageData.competitorComparison.competitors.map((comp) => ({
    name: comp.name,
    mainBrandStrengths: comp.mainBrandStrengths,
    competitorStrengths: comp.competitorStrengths,
    bestForMainBrand: comp.bestForMainBrand,
    bestForCompetitor: comp.bestForCompetitor
  }));

  // 9. Booking strategy steps for StepByStepGuide
  const bookingSteps = pageData.bookingTips.steps.map((step) => ({
    title: step.title,
    description: step.description
  }));

  // 10. FAQ data for FAQAccordion
  const faqData = {
    title: pageData.faqs.title,
    subtitle: pageData.faqs.subtitle,
    questions: pageData.faqs.questions.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
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
            "name": "Is Oceania Cruises Worth It?",
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
    <div className="bg-white min-h-screen font-sans text-slate-800">
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

      {/* ─── 0. HERO SECTION (ComparisonHero - No image) ─── */}
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
        {/* ─── 1. QUICK ANSWER TABLE (ComparisonTable) ─── */}
        <div id="quick-assessment" className="bg-white border-t border-slate-100">
          <ComparisonTable data={pageData.quickAnswer} />
        </div>

        {/* ─── 2. WHAT MAKES OCEANIA WORTH THE MONEY? (ThreeColumnGrid - Image Placeholders) ─── */}
        <div className="bg-slate-50 border-t border-slate-200">
          <ThreeColumnGrid
            title={pageData.corePillars.title}
            subtitle={pageData.corePillars.subtitle}
            items={pillarItems}
          />
        </div>

        {/* ─── 3. WHAT IS INCLUDED IN AN OCEANIA CRUISE? (ValueBreakdownSplit) ─── */}
        <ValueBreakdownSplit
          title={pageData.inclusions.title}
          subtitle={pageData.inclusions.subtitle}
          includedTitle="Everyday Amenities Included in Fare"
          extrasTitle="Choose One Additional Amenity"
          included={includedItems}
          extras={choiceItems}
        />

        {/* ─── 4. SHORE EXCURSION CREDIT AMOUNTS (Custom Styled Table) ─── */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block mb-3">
                  ALTERNATIVE AMENITY TIERS
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
                  {pageData.excursionCreditTable.title}
                </h2>
                <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                <p className="font-sans text-slate-600 max-w-2xl mx-auto text-base">
                  {pageData.excursionCreditTable.subtitle}
                </p>
              </div>
            </FadeIn>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white uppercase text-xs tracking-wider">
                    {pageData.excursionCreditTable.headers.map((h, i) => (
                      <th key={i} className="py-4 px-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {pageData.excursionCreditTable.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-4 px-6 font-semibold text-navy-950">{row[0]}</td>
                      <td className="py-4 px-6 font-bold text-gold-600">{row[1]}</td>
                      <td className="py-4 px-6 text-slate-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 5. WHAT COSTS EXTRA ON OCEANIA? (SmartSpendingSplit) ─── */}
        <SmartSpendingSplit
          title={pageData.whatCostsExtra.title}
          subtitle={pageData.whatCostsExtra.subtitle}
          spendMore={extraExpensesCol1}
          spendLess={extraExpensesCol2}
        />

        {/* ─── 6. WHAT AFFECTS THE COST OF AN OCEANIA CRUISE? (BrandTakeawaysGrid) ─── */}
        <div className="border-t border-slate-100">
          <BrandTakeawaysGrid
            title={pageData.costFactors.title}
            subtitle={pageData.costFactors.subtitle}
            items={costFactorItems}
          />
        </div>

        {/* ─── 7. IS OCEANIA WORTH IT FOR THE DINING? (EditorialIntroSplit - Dark Theme) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.diningDeepDive.eyebrow}
          heading={pageData.diningDeepDive.title}
          paragraphs={pageData.diningDeepDive.paragraphs}
          theme="dark"
        />

        {/* ─── 8. ARE OCEANIA SHIPS WORTH THE MONEY? (ElegantFleetShowcase - Placeholders) ─── */}
        <div className="border-t border-slate-100">
          <ElegantFleetShowcase
            title={pageData.fleetShowcase.title}
            subtitle={pageData.fleetShowcase.subtitle}
            ships={fleetShips}
          />
        </div>

        {/* ─── 9. STATEROOMS & SUITES VALUE GUIDE (DetailedInclusionsList) ─── */}
        <div className="bg-slate-50 border-t border-slate-200">
          <DetailedInclusionsList
            title={pageData.staterooms.title}
            intro={pageData.staterooms.intro}
            items={stateroomItems}
          />
        </div>

        {/* ─── 10. TRAVELER PROFILES: COUPLES, SOLOS, FAMILIES (TravelerPersonaCards) ─── */}
        <div className="border-t border-slate-100">
          <TravelerPersonaCards
            title={pageData.travelerProfiles.title}
            subtitle={pageData.travelerProfiles.subtitle}
            personas={personaCards}
          />
        </div>

        {/* ─── 11. HONEST PROS AND CONS (ProsConsCards) ─── */}
        <ProsConsCards
          title={pageData.prosCons.title}
          prosTitle={pageData.prosCons.prosTitle}
          consTitle={pageData.prosCons.consTitle}
          bestFor={pageData.prosCons.bestFor}
          notBestFor={pageData.prosCons.notBestFor}
          bottomNote={pageData.prosCons.bottomNote}
        />

        {/* ─── 12. COMPETITIVE COMPARISON: REGENT, VIKING, SEABOURN (TabbedComparison) ─── */}
        <div className="border-t border-slate-200">
          <TabbedComparison
            title={pageData.competitorComparison.title}
            mainBrand={pageData.competitorComparison.mainBrand}
            competitors={competitorTabs}
            hideVs={true}
            leftLabel="Oceania Strengths"
            rightLabel="Competitor Strengths"
          />
        </div>

        {/* ─── 13. WHO SHOULD BOOK VS WHO SHOULD LOOK ELSEWHERE (FeatureSplit - Placeholder) ─── */}
        <div className="border-t border-slate-100">
          <FeatureSplit
            title={pageData.whoShouldBook.title}
            subtitles={[pageData.whoShouldBook.eyebrow]}
            imagePosition="right"
            theme="white"
          >
            <div className="space-y-4 text-slate-600 font-sans text-base md:text-lg leading-relaxed">
              {pageData.whoShouldBook.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </FeatureSplit>
        </div>

        {/* ─── 14. HOW TO GET THE BEST VALUE (StepByStepGuide) ─── */}
        <StepByStepGuide
          title={pageData.bookingTips.title}
          subtitle={pageData.bookingTips.subtitle}
          steps={bookingSteps}
          layout="grid"
          columns={3}
        />

        {/* ─── 15. EXPERT CREDENTIALS (ExpertCredentials - Angela Hughes) ─── */}
        <ExpertCredentials
          badge={pageData.expert.badge}
          authorityBoxTitle={pageData.expert.authorityBoxTitle}
          authoritySubtitle={pageData.expert.authoritySubtitle}
          name={pageData.expert.name}
          title={pageData.expert.title}
          experienceBadge={pageData.expert.experienceBadge}
          bio={pageData.expert.bio}
          quote={pageData.expert.quote}
          quoteSubtitle={pageData.expert.quoteSubtitle}
          credentials={pageData.expert.credentials}
          image={AboutAngelaImg}
          ctaText={pageData.expert.ctaText}
          ctaLink={pageData.expert.ctaLink}
        />

        {/* ─── 16. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 20 FAQs) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 17. FINAL CALL TO ACTION (CenterCTA) ─── */}
        <CenterCTA
          title={pageData.cta.title}
          description={pageData.cta.description}
          buttonText={pageData.cta.buttonText}
          buttonLink={pageData.cta.buttonLink}
          theme="dark"
        />

      </div>
    </div>
  );
};

export default OceaniaCruiseWorthIt;
