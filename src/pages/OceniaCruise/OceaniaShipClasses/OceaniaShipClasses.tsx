import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No Real Images Added)
import ComparisonHero from '@/components/ui/ComparisonHero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import SailingVesselSpecsShowcase from '@/components/ui/SailingVesselSpecsShowcase';
import CardGrid from '@/components/ui/CardGrid';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import DiningComparisonTable from '@/components/ui/DiningComparisonTable';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CostAndInclusionsPanel from '@/components/ui/CostAndInclusionsPanel';
import BestForMatch from '@/components/ui/BestForMatch';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import LuxuryCruiseMatchmaker from '@/components/ui/LuxuryCruiseMatchmaker';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import FadeIn from '@/components/ui/FadeIn';
import MasterImage from '@/components/ui/MasterImage';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";
import { Ship, Check, Compass, ShieldCheck, Sparkles, Anchor, Info } from 'lucide-react';

const OceaniaShipClasses: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Quick Comparison Table data format for ComparisonTable component
  const quickComparisonData = {
    title: pageData.quickComparison.title,
    subtitle: pageData.quickComparison.subtitle,
    headers: pageData.quickComparison.headers,
    rows: pageData.quickComparison.rows.map(r => [
      r.class,
      r.ships,
      r.capacity,
      r.tonnage,
      r.characteristics
    ])
  };

  // 2. FeatureGrid items for Stateroom Categories
  const stateroomFeatures = pageData.stateroomCategories.categories.map(cat => ({
    title: cat.title,
    description: cat.description,
    tags: cat.tags,
    details: [cat.bestFor]
  }));

  // 4. StepByStepGuide items for Pre-Booking Checks
  const preBookingSteps = pageData.preBookingChecks.steps.map(s => ({
    number: s.number,
    title: s.title,
    description: s.text || s.description
  }));

  // 5. FAQ Accordion data format
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
            "name": "Ship Classes Compared",
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
        {/* ─── 1. QUICK COMPARISON TABLE (ComparisonTable) ─── */}
        <div id="quick-comparison" className="bg-white border-t border-slate-100">
          <ComparisonTable data={quickComparisonData} />
      
        </div>

        {/* ─── 2. UNDERSTANDING OCEANIA CRUISES SHIP CLASSES (EditorialIntroSplit) ─── */}
        <div id="understanding-classes" className="bg-slate-50 border-t border-slate-200">
          <EditorialIntroSplit
            heading={pageData.understandingClasses.heading}
            paragraphs={pageData.understandingClasses.paragraphs}
            eyebrow="FLEET PERSPECTIVE"
          />

        </div>

        {/* ─── 3. OCEANIA ALLURA CLASS: ALLURA AND VISTA (HighlightsSplit) ─── */}
        <div id="allura-class" className="border-t border-slate-200 bg-white">
          <HighlightsSplit
            title={pageData.alluraClass.title}
            subtitle={`${pageData.alluraClass.badge} • Best for: ${pageData.alluraClass.bestFor}`}
            items={pageData.alluraClass.showcaseShips}
            badgeSuffix="ALLURA CLASS"
            footerLeft="Contemporary Luxury"
            footerRight="All-Veranda Living"
          />
          {/* Allura-Class Ship Specifications (SailingVesselSpecsShowcase) */}
          <SailingVesselSpecsShowcase
            title="Allura-Class Ship Specifications"
            subtitle="Oceania Allura vs Oceania Vista"
            brands={pageData.alluraClass.specsShowcase}
          />

          {/* Allura-Class Staterooms and Suites (CardGrid) */}
          <CardGrid
            title="Allura-Class Staterooms and Suites"
            subtitle="Explore private veranda staterooms and expansive residential suites across the Allura Class"
            cards={pageData.alluraClass.stateroomCards}
            columns={3}
          />

          {/* Allura-Class Dining Venues (BrandTakeawaysGrid) */}
          <BrandTakeawaysGrid
            title="Allura-Class Dining Venues"
            subtitle="SIGNATURE CULINARY EXPERIENCES"
            items={pageData.alluraClass.diningVenuesTakeaways}
          />

          {/* Who Should Choose the Allura Class? (ProsConsCards) */}
          <ProsConsCards
            title={pageData.alluraClass.whoShouldChooseComparison.title}
            prosTitle={pageData.alluraClass.whoShouldChooseComparison.prosTitle}
            consTitle={pageData.alluraClass.whoShouldChooseComparison.consTitle}
            bestFor={pageData.alluraClass.whoShouldChooseComparison.bestFor}
            notBestFor={pageData.alluraClass.whoShouldChooseComparison.notBestFor}
            bottomNote={pageData.alluraClass.whoShouldChooseComparison.bottomNote}
            type="compare"
            bgClass="bg-white"
          />
        </div>

        {/* ─── 4. OCEANIA O CLASS: MARINA AND RIVIERA (AlternatingRiverShowcase) ─── */}
        <div id="o-class" className="border-t border-slate-200 bg-white">
          <AlternatingRiverShowcase
            title={pageData.oClass.title}
            description={`${pageData.oClass.description} Best for: ${pageData.oClass.bestFor}`}
            rivers={pageData.oClass.showcaseShips}
          />

          {/* O-Class Ship Specifications (BentoQuickFacts) */}
          <BentoQuickFacts
            title={pageData.oClass.specsQuickFacts.title}
            paragraphs={pageData.oClass.specsQuickFacts.paragraphs}
            items={pageData.oClass.specsQuickFacts.items}
          />

          {/* O-Class Staterooms and Suites (CurvilinearGrid) */}
          <CurvilinearGrid
            title={pageData.oClass.stateroomsCurvilinear.title}
            subtitle={pageData.oClass.stateroomsCurvilinear.subtitle}
            items={pageData.oClass.stateroomsCurvilinear.items}
          />

          {/* O-Class Dining Venues (DiningComparisonTable) */}
          <DiningComparisonTable
            data={pageData.oClass.diningComparison}
          />

          {/* Who Should Choose the O Class? (FeatureSplit) */}
          <FeatureSplit
            title={pageData.oClass.whoShouldChooseFeatureSplit.title}
            features={pageData.oClass.whoShouldChooseFeatureSplit.features}
            bestFor={pageData.oClass.whoShouldChooseFeatureSplit.bestFor}
            notIdealFor={pageData.oClass.whoShouldChooseFeatureSplit.notIdealFor}
            theme="white"
          />
        </div>

        {/* ─── 5. OCEANIA R CLASS: NAUTICA, INSIGNIA, SIRENA (ThreeColumnGrid) ─── */}
        <div id="r-class" className="border-t border-slate-200 bg-white">
          <ThreeColumnGrid
            title={pageData.rClass.title}
            subtitle={`Best for: ${pageData.rClass.bestFor}`}
            items={pageData.rClass.showcaseShips}
          />

          {/* R-Class Ship Specifications (ArcticGlanceFacts) */}
          <ArcticGlanceFacts
            title={pageData.rClass.specsGlance.title}
            items={pageData.rClass.specsGlance.items}
          />

          {/* R-Class Staterooms and Suites (DetailedInclusionsList) */}
          <DetailedInclusionsList
            title={pageData.rClass.stateroomsDetailed.title}
            intro={pageData.rClass.stateroomsDetailed.intro}
            items={pageData.rClass.stateroomsDetailed.items}
          />

          {/* R-Class Dining Venues (CostAndInclusionsPanel) */}
          <CostAndInclusionsPanel
            title={pageData.rClass.diningPanel.title}
            subtitle={pageData.rClass.diningPanel.subtitle}
            items={pageData.rClass.diningPanel.items}
          />

          {/* Who Should Choose the R Class? (BestForMatch) */}
          <BestForMatch
            data={pageData.rClass.whoShouldChooseMatch}
          />
        </div>

        {/* ─── 6. FUTURE FLEET: SONATA CLASS & OCEANIA AURELIA (LuxuryZigZagShowcase) ─── */}
        <div id="future-fleet" className="border-t border-slate-200">
          <LuxuryZigZagShowcase
            title="Future Fleet: Sonata Class and Oceania Aurelia"
            subtitle="Oceania is expanding with two revolutionary additions: the brand-new 86,000 GT Sonata Class and the extended-journey transformation of Aurelia."
            items={pageData.futureShips.showcaseItems}
          />
        </div>

        {/* ─── 7. SHIP SIZE & PASSENGER CAPACITY COMPARISON (Custom Table) ─── */}
        <section id="size-comparison" className="w-full py-20 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold mb-3 inline-block">
                FLEET METRICS
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">
                {pageData.sizeComparison.title}
              </h2>
              <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
              <p className="font-sans text-slate-600">
                {pageData.sizeComparison.subtitle}
              </p>
            </FadeIn>

            <FadeIn>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy-950 text-white font-semibold">
                      {pageData.sizeComparison.headers.map((h, i) => (
                        <th key={i} className="py-4 px-5">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {pageData.sizeComparison.rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="py-4 px-5 font-bold text-navy-950">{row.class}</td>
                        <td className="py-4 px-5 font-mono text-slate-800">{row.tonnage}</td>
                        <td className="py-4 px-5 font-semibold text-ts-gold">{row.guests}</td>
                        <td className="py-4 px-5">{row.length}</td>
                        <td className="py-4 px-5 text-slate-600">{row.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            
          </div>
        </section>

        {/* ─── 8. STATEROOM CATEGORIES ACROSS CLASSES (FeatureGrid) ─── */}
        <div id="stateroom-categories" className="bg-ice-50 border-t border-slate-200">
          <FeatureGrid
            title={pageData.stateroomCategories.title}
            subtitle={pageData.stateroomCategories.subtitle}
            features={stateroomFeatures}
          />
        </div>

        {/* ─── 9. STATEROOM SIZE COMPARISON & UPGRADE VALUE (ValueBreakdownSplit) ─── */}
        <div id="stateroom-dimensions" className="bg-white border-t border-slate-200">
          <ValueBreakdownSplit
            title={pageData.stateroomSizeComparison.title}
            subtitle={pageData.stateroomSizeComparison.subtitle}
            includedTitle="When to Upgrade to a Suite"
            extrasTitle="When a Veranda Stateroom Is Best"
            included={pageData.stateroomSizeComparison.suiteUpgradeReasons}
            extras={pageData.stateroomSizeComparison.verandaValueReasons}
          />

        </div>

        {/* ─── 10. DINING AND AMENITIES COMPARISON (Custom Table) ─── */}
        <section id="dining-amenities" className="w-full py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold mb-3 inline-block">
                CULINARY & LIFESTYLE
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">
                {pageData.diningAmenities.title}
              </h2>
              <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
              <p className="font-sans text-slate-600">
                {pageData.diningAmenities.subtitle}
              </p>
            </FadeIn>

            <FadeIn>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12 bg-white">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy-950 text-white font-semibold">
                      {pageData.diningAmenities.headers.map((h, i) => (
                        <th key={i} className="py-4 px-5">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {pageData.diningAmenities.rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="py-4 px-5 font-semibold text-navy-950">{row.feature}</td>
                        <td className="py-4 px-5">{row.allura}</td>
                        <td className="py-4 px-5">{row.oClass}</td>
                        <td className="py-4 px-5">{row.rClass}</td>
                        <td className="py-4 px-5 text-slate-500">{row.sonata}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Your World Included Banner */}
            <FadeIn>
              <div className="bg-navy-950 text-white p-8 rounded-2xl border border-navy-800 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold-400/20 text-ts-gold flex items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-ts-gold mb-2">
                      What About Your World Included?
                    </h3>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {pageData.diningAmenities.yourWorldIncludedNote}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── 11. WHICH SHIP CLASS IS BEST FOR DIFFERENT TRAVELERS? (TravelerPersonaCards) ─── */}
        <div id="traveler-matchmaker" className="bg-ice-100 border-t border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerMatch.title}
            subtitle={pageData.travelerMatch.subtitle}
            personas={pageData.travelerMatch.personas}
          />
        </div>

        {/* ─── 12. ALLURA VS O VS R CLASS SHOWDOWN (LuxuryCruiseMatchmaker) ─── */}
        <div id="class-showdown" className="bg-ice-50 border-t border-slate-200">
          <LuxuryCruiseMatchmaker
            title={pageData.classShowdown.title}
            subtitle={pageData.classShowdown.subtitle}
            personas={pageData.classShowdown.personas}
          />
        </div>

        {/* ─── 13. PRE-BOOKING CHECKS (StepByStepGuide) ─── */}
        <div id="pre-booking-checks" className="bg-white border-t border-slate-200">
          <StepByStepGuide
            title={pageData.preBookingChecks.title}
            subtitle={pageData.preBookingChecks.subtitle}
            steps={preBookingSteps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* ─── 14. OUR FINAL RECOMMENDATION & EXPERT CREDENTIALS (ExpertCredentials) ─── */}
        <div id="expert-recommendation" className="bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6 pt-20 text-center">
            <FadeIn>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold mb-3 inline-block">
                {pageData.finalRecommendation.badge}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
                {pageData.finalRecommendation.title}
              </h2>
              <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-8"></div>
              <div className="space-y-4 font-sans text-base text-slate-700 leading-relaxed text-left">
                {pageData.finalRecommendation.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <ExpertCredentials
            badge={pageData.finalRecommendation.expert.badge}
            authorityBoxTitle={pageData.finalRecommendation.expert.authorityBoxTitle}
            authoritySubtitle={pageData.finalRecommendation.expert.authoritySubtitle}
            name={pageData.finalRecommendation.expert.name}
            title={pageData.finalRecommendation.expert.title}
            experienceBadge={pageData.finalRecommendation.expert.experienceBadge}
            bio={pageData.finalRecommendation.expert.bio}
            quote={pageData.finalRecommendation.expert.quote}
            quoteSubtitle={pageData.finalRecommendation.expert.quoteSubtitle}
            credentials={pageData.finalRecommendation.expert.credentials}
            image={AboutAngelaImg}
            ctaText={pageData.finalRecommendation.expert.ctaText}
            ctaLink={pageData.finalRecommendation.expert.ctaLink}
          />
        </div>

        {/* ─── 15. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 20 FAQs) ─── */}
        <div id="faqs" className="bg-white border-t border-slate-200">
          <FAQAccordion data={faqData} />
        </div>

        {/* ─── 16. FINAL CALL TO ACTION (CenterCTA) ─── */}
        <CenterCTA
          title={pageData.cta.title}
          description={pageData.cta.description || pageData.cta.subtitle}
          buttonText={pageData.cta.buttonText}
          buttonLink={pageData.cta.buttonLink}
        />

      </div>
    </>
  );
};

export default OceaniaShipClasses;

