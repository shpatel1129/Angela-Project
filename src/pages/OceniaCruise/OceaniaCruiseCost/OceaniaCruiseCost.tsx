import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (All Existing Components, Zero Repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import PricingTiersCards from '@/components/ui/PricingTiersCards';
import CardGrid from '@/components/ui/CardGrid';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import CostComparisonMatrix from '@/components/ui/CostComparisonMatrix';
import LuxuryComparisonBoard from '@/components/ui/LuxuryComparisonBoard';
import SmartSpendingSplit from '@/components/ui/SmartSpendingSplit';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ProsConsCards from '@/components/ui/ProsConsCards';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import FadeIn from '@/components/ui/FadeIn';

// High-Resolution Assets (Commented out per user request)
// import HeroShipImg from "@/assets/ExploravsOceania/oceania-aurelia-luxury-cruise-ship-sailing-at-sunset-ocean-voyage.jpg";
// import SuiteLivingRoomImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-suite-living-room-luxury-cruise-ocean-view.png";
// import ShipLoungeImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-lounge-panoramic-ocean-view-luxury-cruise-bar.jpg";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// Lucide Icons
import { Info } from 'lucide-react';

const OceaniaCruiseCost: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Advertised Fare Benchmarks & Two-Guest calculations for PricingTiersCards
  const pricingTierItems = [
    {
      name: "Miami Round-Trip Caribbean (Oceania Vista)",
      price: "From $2,190",
      nights: "7 Days",
      description: "Advertised starting fare from $2,190 per guest. Baseline cruise fare for two guests sharing a stateroom based on double occupancy: $4,380."
    },
    {
      name: "Miami Round-Trip Caribbean (Oceania Marina)",
      price: "From $4,699",
      nights: "14 Days",
      description: "Advertised starting fare from $4,699 per guest. Baseline cruise fare for two guests sharing a stateroom based on double occupancy: $9,398."
    },
    {
      name: "Tokyo Round-Trip Japan (Oceania Nautica)",
      price: "From $5,199",
      nights: "10 Days",
      description: "Advertised starting fare from $5,199 per guest. Baseline cruise fare for two guests sharing a stateroom based on double occupancy: $10,398."
    },
    {
      name: "Hong Kong to Singapore (Oceania Nautica)",
      price: "From $6,799",
      nights: "15 Days",
      description: "Advertised starting fare from $6,799 per guest. Baseline cruise fare for two guests sharing a stateroom based on double occupancy: $13,598."
    }
  ];

  // 2. Competitor Luxury Line Comparisons for LuxuryComparisonBoard
  const comparisonBrands = [
    {
      name: "Regent Seven Seas Cruises",
      tagline: "Ultra All-Inclusive",
      model: "Higher Upfront Fare; Comprehensive Model",
      inclusions: [
        "Unlimited shore excursions in every port included in published cruise fares",
        "Unlimited top-shelf open bar, fine wines, and champagnes 24/7",
        "Round-trip airfare and pre-cruise luxury hotel stays included on most sailings",
        "Shipboard gratuities, valet laundry, and unlimited Wi-Fi included"
      ],
      exclusions: [
        "Significantly higher starting cruise fare than Oceania's entry fares",
        "Oceania allows travelers to pay only for excursions and spirits if desired",
        "Oceania offers more culinary variety with up to 8+ specialty dining venues without cover charges",
        "Oceania provides lower upfront cost for guests who prefer independent port exploration"
      ],
      verdict: "Regent appeals to travelers wanting a completely frictionless, 100% all-inclusive package with zero incidental bills. Oceania appeals to culinary and destination lovers who prefer paying less upfront and selecting only the extras they value."
    },
    {
      name: "Viking Ocean Cruises",
      tagline: "Inclusive Destination Cruising",
      model: "Mid-to-Upper Luxury; Strict Adults-Only Focus",
      inclusions: [
        "One complimentary guided shore excursion in every port of call",
        "Complimentary wine and beer served with restaurant lunch and dinner",
        "Complimentary Nordic thermal spa access and shipwide Wi-Fi",
        "Alternative restaurant dining included without additional cover charges"
      ],
      exclusions: [
        "Viking charges extra for daily shipboard crew gratuities ($17+/day per guest)",
        "Oceania includes all specialty restaurants without reservation limits or fees",
        "Oceania includes shipboard gratuities under Your World Included®",
        "Oceania features a broader variety of world-class gourmet specialty dining concepts"
      ],
      verdict: "Viking suits travelers who want an included tour in every port and Scandinavian serenity. Oceania suits those who demand world-class culinary excellence, included crew gratuities, and boutique ship charm."
    },
    {
      name: "Seabourn",
      tagline: "Ultra-Luxury Yacht Cruising",
      model: "Premium All-Inclusive; Boutique Yacht Capacities",
      inclusions: [
        "All-suite ocean-view accommodations with private teak verandas",
        "Complimentary open-bar premium spirits, fine wine, and caviar on demand 24/7",
        "Intimate yacht club atmosphere carrying just 450 to 600 guests",
        "Tipping is neither required nor expected throughout the voyage"
      ],
      exclusions: [
        "Seabourn operates smaller ships with significantly higher starting price points",
        "Oceania offers greater dining diversity (up to 8+ distinct specialty venues)",
        "Oceania provides larger public lounges, wellness facilities, and expansive pool decks",
        "Oceania features more accessible price points across inside, oceanview, veranda, and suite tiers"
      ],
      verdict: "Seabourn is ideal for travelers seeking private yacht-club exclusivity and continuous open bar. Oceania offers superior dining diversity, larger verandas, and competitive cost-per-night economics."
    }
  ];

  // Inclusions and extras formatted for ValueBreakdownSplit
  const includedItems = pageData.inclusions.included.map((item: { title?: string; description?: string } | string) =>
    typeof item === 'string'
      ? { title: item.split(':')[0]?.trim() || item, description: item.split(':')[1]?.trim() || '' }
      : item
  );
  const extraItems = pageData.inclusions.extras.map((item: { title?: string; description?: string } | string) =>
    typeof item === 'string'
      ? { title: item.split(':')[0]?.trim() || item, description: item.split(':')[1]?.trim() || '' }
      : item
  );

  // Stateroom cards for CardGrid
  const stateroomCards = pageData.staterooms.categories.map((cat) => ({
    title: cat.title,
    description: cat.description,
    icon: cat.icon,
    bullets: cat.bullets
  }));

  // Ship impact editorial features
  const shipImpactFeatures = pageData.shipImpact.features.map((feat) => ({
    title: feat.title,
    description: feat.description
  }));

  // Budgeting framework items for CostComparisonMatrix
  const budgetItems = pageData.budgetingFramework.exampleTwoPerson.items.map((item) => ({
    category: item.category,
    cost: item.cost,
    description: item.description,
    priority: item.priority
  }));

  // Spending strategy items for SmartSpendingSplit
  const spendMoreItems = pageData.costFactors.spendMore.map((item) => ({
    title: item.title,
    description: item.description
  }));
  const spendLessItems = pageData.costFactors.spendLess.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // Savings guide steps for StepByStepGuide
  const savingsSteps = pageData.savingsTips.steps.map((step) => ({
    title: step.title,
    description: step.description
  }));

  // FAQ data for FAQAccordion
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
            "name": "Oceania Cruise Cost Guide",
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

      {/* ─── 0. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
        badge={pageData.hero.badge}
        // backgroundImage={HeroShipImg}
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

        {/* ─── 2. COST AT A GLANCE (ComparisonTable) ─── */}
        <div id="cost-at-a-glance" className="bg-white border-t border-slate-100">
          <ComparisonTable data={pageData.costAtAGlance} />
        </div>

        {/* ─── 3. ADVERTISED FARE BENCHMARKS & DOUBLE OCCUPANCY (PricingTiersCards) ─── */}
        <div className="bg-slate-50 border-y border-slate-200/70">
          <PricingTiersCards
            title={pageData.averageCostAndExamples.title}
            subtitle={pageData.averageCostAndExamples.subtitle}
            items={pricingTierItems}
            theme="light"
          />
          <div className="max-w-4xl mx-auto px-6 pb-16 -mt-8">
            <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-start gap-3 shadow-sm">
              <Info className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <p className="font-sans text-xs md:text-sm text-slate-500 italic leading-relaxed">
                {pageData.averageCostAndExamples.note}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 4. STATEROOM CATEGORIES & FARES (CardGrid) ─── */}
        <CardGrid
          title={pageData.staterooms.title}
          subtitle={pageData.staterooms.subtitle}
          cards={stateroomCards}
          columns={3}
          stagger={false}
        />

        {/* ─── 5. HOW SHIP CLASS AFFECTS COST (EditorialFeatureShowcase) ─── */}
        <EditorialFeatureShowcase
          title={pageData.shipImpact.title}
          subtitle={pageData.shipImpact.subtitle}
          // image={ShipLoungeImg}
          features={shipImpactFeatures}
          bgClass="bg-white"
        />

        {/* ─── 6. WHAT'S INCLUDED VS. EXTRA EXPENSES (ValueBreakdownSplit) ─── */}
        <ValueBreakdownSplit
          title={pageData.inclusions.title}
          subtitle={pageData.inclusions.subtitle}
          includedTitle="Your World Included® Inclusions"
          extrasTitle="Separate & Optional Out-of-Pocket Expenses"
          included={includedItems}
          extras={extraItems}
          // image={SuiteLivingRoomImg}
        />

        {/* ─── 7. PRACTICAL BUDGETING FRAMEWORK & 2-PERSON EXAMPLE (CostComparisonMatrix) ─── */}
        <div className="bg-ice-50 py-16 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-6 mb-12">
            <FadeIn>
              <div className="text-center">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block mb-3">
                  COMPREHENSIVE BUDGETING FRAMEWORK
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
                  {pageData.budgetingFramework.title}
                </h2>
                <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
                <p className="font-sans text-slate-600 max-w-2xl mx-auto text-base">
                  {pageData.budgetingFramework.subtitle}
                </p>
              </div>
            </FadeIn>

            {/* General Framework Table */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white uppercase text-xs tracking-wider">
                    {pageData.budgetingFramework.table.headers.map((h, i) => (
                      <th key={i} className="py-4 px-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {pageData.budgetingFramework.table.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-4 px-6 font-semibold text-navy-950">{row[0]}</td>
                      <td className="py-4 px-6 text-slate-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2-Person Illustrated Budget Matrix */}
          <CostComparisonMatrix
            title={pageData.budgetingFramework.exampleTwoPerson.title}
            subtitle={pageData.budgetingFramework.exampleTwoPerson.lead}
            items={budgetItems}
          />
        </div>

        {/* ─── 8. ALL-INCLUSIVE TRUTH & REALITY (EditorialIntroSplit) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.allInclusiveTruth.eyebrow}
          heading={pageData.allInclusiveTruth.title}
          paragraphs={pageData.allInclusiveTruth.paragraphs}
          theme="dark"
        />

        {/* ─── 9. LUXURY CRUISE LINE PRICE COMPARISONS (LuxuryComparisonBoard) ─── */}
        <LuxuryComparisonBoard
          title={pageData.competitors.title}
          subtitle={pageData.competitors.subtitle}
          eyebrow="Luxury Price & Value Analysis"
          panelSuffix="vs. Oceania Cruises"
          includedLabel="Competitor Inclusions & Pricing Model"
          extraLabel="The Oceania Difference & Cost Value"
          brands={comparisonBrands}
        />

        {/* ─── 10. WHAT FACTORS MAKE IT EXPENSIVE & SPEND SPLIT (SmartSpendingSplit) ─── */}
        <SmartSpendingSplit
          title={pageData.costFactors.title}
          subtitle={pageData.costFactors.subtitle}
          spendMore={spendMoreItems}
          spendLess={spendLessItems}
        />

        {/* ─── 11. 6 PRO TIPS TO GET THE BEST PRICE (StepByStepGuide) ─── */}
        <StepByStepGuide
          title={pageData.savingsTips.title}
          subtitle={pageData.savingsTips.subtitle}
          steps={savingsSteps}
          layout="grid"
          columns={3}
        />

        {/* ─── 12. IS OCEANIA WORTH THE MONEY? (ProsConsCards) ─── */}
        <ProsConsCards
          title={pageData.worthIt.title}
          prosTitle="Oceania Is Worth the Investment If You:"
          consTitle="Consider Other Cruise Lines If You:"
          bestFor={pageData.worthIt.advantages}
          notBestFor={pageData.worthIt.drawbacks}
          bottomNote={pageData.worthIt.bottomNote}
        />

        {/* ─── 13. EXPERT ADVISOR CREDENTIALS (ExpertCredentials) ─── */}
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

export default OceaniaCruiseCost;

