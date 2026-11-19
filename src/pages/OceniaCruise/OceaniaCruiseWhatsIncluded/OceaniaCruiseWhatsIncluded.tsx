import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No Images Added)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import CardGrid from '@/components/ui/CardGrid';
import AccordionFlexGrid from '@/components/ui/AccordionFlexGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase';
import SmartSpendingSplit from '@/components/ui/SmartSpendingSplit';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import FadeIn from '@/components/ui/FadeIn';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaCruiseWhatsIncluded: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Inclusions and choice amenities formatted for ValueBreakdownSplit
  const alwaysIncludedItems = pageData.yourWorldIncluded.included;
  const choiceAmenityItems = pageData.yourWorldIncluded.extras;

  // 2. Specialty dining venues for AccordionFlexGrid
  const diningItems = pageData.dining.venues.map((venue) => ({
    title: venue.title,
    subtitle: venue.category,
    description: venue.description,
    placeholderLabel: venue.title,
    bullets: venue.bullets
  }));

  // 3. Beverage pillars for CardGrid
  const drinkCards = pageData.drinks.drinkPillars.map((pillar) => ({
    title: pillar.title,
    description: pillar.description,
    icon: pillar.icon,
    bullets: pillar.bullets
  }));

  // 4a. Wi-Fi features for FeatureGrid
  const wifiFeatures = pageData.wifi.features;

  // 4b. Gratuities items for CurvilinearGrid
  const gratuitiesItems = pageData.gratuities.items;

  // 4c. Laundry services for HighlightsSplit
  const laundryItems = pageData.laundry.items;

  // 4d. Fitness & Spa showcase for AlternatingRiverShowcase
  const fitnessAndSpaItems = pageData.fitnessAndSpa.items;

  // 5. Stateroom category privileges for ThreeColumnGrid
  const privilegeItems = pageData.categoryPrivileges.categories.map((cat) => ({
    title: cat.title,
    category: cat.category,
    description: cat.description,
    features: cat.bullets,
    placeholderLabel: cat.title
  }));

  // 6. What costs extra items for SmartSpendingSplit
  const extraExpensesCol1 = pageData.whatCostsExtra.spendMore.map((item) => ({
    title: item.title,
    description: item.description
  }));
  const extraExpensesCol2 = pageData.whatCostsExtra.spendLess.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // 7. Savings steps for StepByStepGuide
  const savingsSteps = pageData.savingsTips.steps.map((step) => ({
    title: step.title,
    description: step.description
  }));

  // 8. FAQ data for FAQAccordion
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
            "name": "What's Included & What Costs Extra",
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

      {/* ─── 0. HERO SECTION (ComparisonHero - No images) ─── */}
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
        {/* ─── 1. EDITORIAL INTRODUCTION (EditorialIntroSplit) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.intro.eyebrow}
          heading={pageData.intro.heading}
          paragraphs={pageData.intro.paragraphs}
          theme="light"
        />

        {/* ─── 2. QUICK OVERVIEW TABLE: WHAT'S INCLUDED VS EXTRA (ComparisonTable) ─── */}
        <div id="inclusions-table" className="bg-white border-t border-slate-100">
          <ComparisonTable data={pageData.inclusionsTable} />
        </div>

        {/* ─── 3. YOUR WORLD INCLUDED BREAKDOWN (ValueBreakdownSplit - No images) ─── */}
        <ValueBreakdownSplit
          title={pageData.yourWorldIncluded.title}
          subtitle={pageData.yourWorldIncluded.subtitle}
          includedTitle="Always Included, Always Free"
          extrasTitle="Choose One Additional Amenity"
          included={alwaysIncludedItems}
          extras={choiceAmenityItems}
        />

        {/* ─── 4. INCLUDED SPECIALTY DINING (AccordionFlexGrid) ─── */}
        <AccordionFlexGrid
          title={pageData.dining.title}
          subtitle={pageData.dining.subtitle}
          items={diningItems}
        />

        {/* ─── 5. BEVERAGE INCLUSIONS & PACKAGES (CardGrid) ─── */}
        <div className="border-t border-slate-100">
          <CardGrid
            title={pageData.drinks.title}
            subtitle={pageData.drinks.subtitle}
            cards={drinkCards}
            columns={3}
            stagger={false}
          />
        </div>

        {/* ─── 6A. IS WI-FI INCLUDED ON OCEANIA CRUISES? (FeatureGrid) ─── */}
        <div className="border-t border-slate-100">
          <FeatureGrid
            title={pageData.wifi.title}
            subtitle={pageData.wifi.subtitle}
            features={wifiFeatures}
            bgClass="bg-white"
          />
        </div>

        {/* ─── 6B. ARE GRATUITIES INCLUDED ON OCEANIA CRUISES? (CurvilinearGrid) ─── */}
        <div className="border-t border-slate-100">
          <CurvilinearGrid
            title={pageData.gratuities.title}
            subtitle={pageData.gratuities.subtitle}
            paragraphs={pageData.gratuities.paragraphs}
            items={gratuitiesItems}
          />
        </div>

        {/* ─── 6C. IS LAUNDRY INCLUDED ON OCEANIA CRUISES? (HighlightsSplit) ─── */}
        <div className="border-t border-slate-100">
          <HighlightsSplit
            title={pageData.laundry.title}
            subtitle={pageData.laundry.subtitle}
            items={laundryItems}
            badgeSuffix="LAUNDRY BENEFIT"
            footerLeft="Fleetwide Oceania Service"
            footerRight="Your World Included® Standard"
          />
        </div>

        {/* ─── 6D. ARE FITNESS CLASSES & SPA INCLUDED? (AlternatingRiverShowcase) ─── */}
        <div className="border-t border-slate-100">
          <AlternatingRiverShowcase
            title={pageData.fitnessAndSpa.title}
            description={pageData.fitnessAndSpa.subtitle}
            rivers={fitnessAndSpaItems}
          />
        </div>

        {/* ─── 7. SHORE EXCURSION CREDIT BREAKDOWN (ComparisonTable) ─── */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block mb-3">
                  SHORE EXCURSIONS
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
                  {pageData.excursions.title}
                </h2>
                <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                <p className="font-sans text-slate-600 max-w-2xl mx-auto text-base">
                  {pageData.excursions.subtitle}
                </p>
              </div>
            </FadeIn>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white uppercase text-xs tracking-wider">
                    {pageData.excursions.headers.map((h, i) => (
                      <th key={i} className="py-4 px-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {pageData.excursions.rows.map((row, idx) => (
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

        {/* ─── 8. WHAT COSTS EXTRA ON OCEANIA (SmartSpendingSplit) ─── */}
        <SmartSpendingSplit
          title={pageData.whatCostsExtra.title}
          subtitle={pageData.whatCostsExtra.subtitle}
          spendMore={extraExpensesCol1}
          spendLess={extraExpensesCol2}
        />

        {/* ─── 9. ACCOMMODATION CATEGORY PRIVILEGES (ThreeColumnGrid) ─── */}
        <div className="bg-slate-50 border-t border-slate-100">
          <ThreeColumnGrid
            title={pageData.categoryPrivileges.title}
            subtitle={pageData.categoryPrivileges.subtitle}
            items={privilegeItems}
          />
        </div>

        {/* ─── 10. ALL-INCLUSIVE TRUTH & REALITY (FeatureSplit) ─── */}
        <div className="border-t border-slate-100">
          <FeatureSplit
            title={pageData.allInclusiveTruth.title}
            subtitles={[pageData.allInclusiveTruth.eyebrow]}
            imagePosition="right"
            theme="white"
          >
            <div className="space-y-4 text-slate-600 font-sans text-base md:text-lg leading-relaxed">
              {pageData.allInclusiveTruth.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </FeatureSplit>
        </div>

        {/* ─── 11. HOW TO AVOID UNEXPECTED EXPENSES (StepByStepGuide) ─── */}
        <StepByStepGuide
          title={pageData.savingsTips.title}
          subtitle={pageData.savingsTips.subtitle}
          steps={savingsSteps}
          layout="grid"
          columns={3}
        />

        {/* ─── 12. IS OCEANIA'S INCLUDED PROGRAM GOOD VALUE? (ProsConsCards) ─── */}
        <ProsConsCards
          title={pageData.worthIt.title}
          prosTitle="Oceania Offers Strong Value If You:"
          consTitle="You May Need to Budget More If You:"
          bestFor={pageData.worthIt.advantages}
          notBestFor={pageData.worthIt.drawbacks}
          bottomNote={pageData.worthIt.bottomNote}
        />

        {/* ─── 13. EXPERT ADVISOR CREDENTIALS (ExpertCredentials - No image) ─── */}
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

        {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 15. FINAL CALL TO ACTION (CenterCTA) ─── */}
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

export default OceaniaCruiseWhatsIncluded;

