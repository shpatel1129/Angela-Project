import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No Images Added)
import ComparisonHero from '@/components/ui/ComparisonHero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ElegantFleetShowcase from '@/components/ui/ElegantFleetShowcase';
import TabbedComparison from '@/components/ui/TabbedComparison';
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import FadeIn from '@/components/ui/FadeIn';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaCruiseShips: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Fleet Classes for ThreeColumnGrid
  const classItems = pageData.fleetClasses.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    features: item.features,
    placeholderLabel: item.placeholderLabel || item.title
  }));

  // 2. Ships list for ElegantFleetShowcase
  const fleetShips = pageData.shipShowcase.ships;

  // 3. Head-to-Head Sister Ships for TabbedComparison
  const competitorTabs = pageData.headToHead.competitors.map((comp) => ({
    name: comp.name,
    mainBrandStrengths: comp.mainBrandStrengths,
    competitorStrengths: comp.competitorStrengths,
    bestForMainBrand: comp.bestForMainBrand,
    bestForCompetitor: comp.bestForCompetitor
  }));

  // 4. Future Fleet for AlternatingRiverShowcase
  const futureShips = pageData.futureFleet.items;

  // 5. Traveler Matchmakers for TravelerPersonaCards
  const personaCards = pageData.travelerMatch.personas.map((persona) => ({
    title: persona.title,
    icon: persona.icon,
    description: persona.description,
    traits: persona.traits
  }));

  // 6. Decision factors for BrandTakeawaysGrid
  const decisionItems = pageData.decisionFactors.items.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // 7. FAQ data for FAQAccordion
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
            "name": "Ships & Fleet Comparison",
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

        {/* ─── 2. FLEET OVERVIEW & CLASSES (ThreeColumnGrid - Placeholders) ─── */}
        <div id="fleet-classes" className="bg-slate-50 border-t border-slate-200">
          <ThreeColumnGrid
            title={pageData.fleetClasses.title}
            subtitle={pageData.fleetClasses.subtitle}
            items={classItems}
          />
        </div>

        {/* ─── 3. SEVEN SHIPS DETAILED SHOWCASE (ElegantFleetShowcase - Placeholders) ─── */}
        <div className="border-t border-slate-100">
          <ElegantFleetShowcase
            title={pageData.shipShowcase.title}
            subtitle={pageData.shipShowcase.subtitle}
            ships={fleetShips}
          />
        </div>

        {/* ─── 4. FLEET METRICS & CAPACITY COMPARISON (Custom Table) ─── */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block mb-3">
                  SPECIFICATIONS & SIZES
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
                  {pageData.fleetMetricsTable.title}
                </h2>
                <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                <p className="font-sans text-slate-600 max-w-2xl mx-auto text-base">
                  {pageData.fleetMetricsTable.subtitle}
                </p>
              </div>
            </FadeIn>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white uppercase text-xs tracking-wider">
                    {pageData.fleetMetricsTable.headers.map((h, i) => (
                      <th key={i} className="py-4 px-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {pageData.fleetMetricsTable.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-4 px-6 font-semibold text-navy-950">{row[0]}</td>
                      <td className="py-4 px-6 font-bold text-gold-600">{row[1]}</td>
                      <td className="py-4 px-6 text-slate-600">{row[2]}</td>
                      <td className="py-4 px-6 text-slate-600">{row[3]}</td>
                      <td className="py-4 px-6 text-slate-600">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 5. HEAD-TO-HEAD SISTER SHIPS SHOWDOWNS (TabbedComparison) ─── */}
        <div className="border-t border-slate-200">
          <TabbedComparison
            title={pageData.headToHead.title}
            mainBrand={pageData.headToHead.mainBrand}
            competitors={competitorTabs}
            hideVs={true}
            leftLabel="Key Distinctions"
            rightLabel="Key Distinctions"
          />
        </div>

        {/* ─── 6. FUTURE FLEET: AURELIA & SONATA (AlternatingRiverShowcase - Placeholders) ─── */}
        <div className="border-t border-slate-100">
          <AlternatingRiverShowcase
            title={pageData.futureFleet.title}
            description={pageData.futureFleet.description}
            rivers={futureShips}
          />
        </div>

        {/* ─── 7. TRAVELER MATCHMAKERS: STYLES & PREFERENCES (TravelerPersonaCards) ─── */}
        <div className="border-t border-slate-100">
          <TravelerPersonaCards
            title={pageData.travelerMatch.title}
            subtitle={pageData.travelerMatch.subtitle}
            personas={personaCards}
          />
        </div>

        {/* ─── 8. SIX DECISION FACTORS BEFORE CHOOSING (BrandTakeawaysGrid) ─── */}
        <div className="border-t border-slate-100">
          <BrandTakeawaysGrid
            title={pageData.decisionFactors.title}
            subtitle={pageData.decisionFactors.subtitle}
            items={decisionItems}
          />
        </div>

        {/* ─── 9. FINAL RECOMMENDATION MATRIX (FeatureSplit - Placeholder) ─── */}
        <div className="border-t border-slate-100">
          <FeatureSplit
            title={pageData.finalRecommendations.title}
            subtitles={[pageData.finalRecommendations.eyebrow]}
            imagePosition="right"
            theme="white"
          >
            <div className="space-y-4 text-slate-600 font-sans text-base md:text-lg leading-relaxed">
              {pageData.finalRecommendations.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </FeatureSplit>
        </div>

        {/* ─── 10. EXPERT ADVISOR CREDENTIALS (ExpertCredentials - Angela Hughes) ─── */}
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

        {/* ─── 11. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 20 FAQs) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 12. FINAL CALL TO ACTION (CenterCTA) ─── */}
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

export default OceaniaCruiseShips;

