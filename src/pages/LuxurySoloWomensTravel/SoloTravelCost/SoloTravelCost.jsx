import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components (Unique per section, zero component repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase';
import InclusionCheckerGrid from '@/components/ui/InclusionCheckerGrid';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import CardGrid from '@/components/ui/CardGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import MistakesShowcase from '@/components/ui/MistakesShowcase';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';

const SoloTravelCost = () => {

  // 1. Budget Tiers for ValueBreakdownSplit
  const budgetTiersIncluded = pageData.budgetRanges.tiers.slice(0, 2).map((tier) => ({
    title: `${tier.range} — ${tier.title}`,
    description: `${tier.description} ${tier.optionsTitle} ${tier.options.join(', ')}. ${tier.footerNote}`
  }));

  const budgetTiersExtras = pageData.budgetRanges.tiers.slice(2, 4).map((tier) => ({
    title: `${tier.range} — ${tier.title}`,
    description: `${tier.description} ${tier.optionsTitle} ${tier.options.join(', ')}. ${tier.footerNote}`
  }));

  // 2. Services for CurvilinearGrid (Why Does Solo Luxury Travel Cost More?)
  const whyCostMoreItems = pageData.whyCostMore.services.map((service) => ({
    title: service.title,
    description: service.description,
    icon: service.icon || "ship"
  }));

  // 3. Single Supplement Details for DetailedInclusionsList
  const singleSupplementItems = [
    {
      title: "Where Single Supplements Appear",
      paragraphs: [
        pageData.singleSupplementSection.lead,
        `${pageData.singleSupplementSection.placesLead} ${pageData.singleSupplementSection.places.join(', ')}.`,
        pageData.singleSupplementSection.supplierNote
      ]
    },
    {
      title: pageData.singleSupplementSection.howMuchTitle,
      paragraphs: [
        pageData.singleSupplementSection.howMuchSubtitle,
        pageData.singleSupplementSection.factors.join(', '),
        pageData.singleSupplementSection.promotionNote
      ]
    }
  ];

  // 4. Experience Type Showcases for AlternatingRiverShowcase
  const experienceRivers = pageData.experiencesPricing.experiences.map((exp) => ({
    name: exp.title,
    description: `${exp.lead} ${exp.conclusion}`,
    bestFor: exp.comparisonHeading,
    highlights: exp.points
  }));

  // 4b. Inclusions & Exclusions for InclusionCheckerGrid
  const additionalExpensesItems = pageData.inclusionsAndAdditional.additionalCosts.map((item) => ({
    name: item.title,
    description: item.description
  }));

  // 5. Advisor & Opportunity Narrative for EditorialIntroSplit
  const doesCostMoreParagraphs = [
    ...pageData.doesSoloCostMore.paragraphs,
    pageData.advisorValue.title,
    ...pageData.advisorValue.paragraphs
  ];

  // 6. Best Trip Cards for CardGrid
  const bestTripCards = pageData.bestTripForBudget.cards.map((c) => ({
    title: c.title,
    description: c.description,
    icon: c.icon || "Compass"
  }));

  // 7. Benefits for MistakesShowcase (Is Luxury Solo Travel Worth the Cost?)
  const isItWorthBenefits = pageData.isItWorthIt.benefits.map((b, idx) => ({
    title: `Value Dimension 0${idx + 1}`,
    description: b
  }));

  // 8. Trips & Ships Help Items for ExpertRulesGrid
  const howWeHelpRules = pageData.howTripsAndShipsHelps.comparisonItems.map((item, idx) => ({
    number: idx < 9 ? `0${idx + 1}` : `${idx + 1}`,
    title: item,
    text: "We evaluate real-time inventory, single supplement reductions, verified pricing, and supplier amenities for this experience category."
  }));

  // 9. Discovery Questions for FeatureGrid
  const discoveryFeatures = pageData.discoveryQuestions.questions.map((q) => ({
    title: q.question,
    description: q.options.join(' • '),
    icon: "Compass"
  }));

  // 10. FAQ Accordion Items
  const faqData = {
    title: "Frequently Asked Questions About Luxury Solo Travel Costs",
    subtitle: "Essential pricing insights, single supplement guidance, and budgeting strategies for independent women travelers.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 selection:bg-gold-500 selection:text-white">
      {/* ─── SEO METADATA & SCHEMA ─── */}
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.metaTitle} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={pageData.meta.keywords.join(', ')} />
        <link rel="canonical" href={pageData.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageData.schema)}</script>
      </Helmet>

      {/* ─── NAVIGATION ─── */}
      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero Component) ─── */}
      <ComparisonHero
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={[
          pageData.hero.lead,
          `${pageData.hero.sublead} ${pageData.hero.ranges.join(', ')}.`,
          pageData.hero.conclusion
        ]}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content" className="relative z-10">
        {/* ─── 2. WHAT IS THE AVERAGE COST OF LUXURY SOLO TRAVEL? (EditorialIntroSection Component) ─── */}
        <div className="relative">
          <EditorialIntroSection
            eyebrow={pageData.averageCost.eyebrow}
            heading={pageData.averageCost.title}
            paragraphs={pageData.averageCost.paragraphs}
            badgeTitle="Total Value Assessment"
            badgeDescription="Why comparing end-to-end inclusions is more meaningful than baseline advertised rates."
            placeholderLabel="AVERAGE COST OF LUXURY SOLO TRAVEL"
          />
        </div>

        {/* ─── 3. LUXURY SOLO TRAVEL BUDGET RANGES (ValueBreakdownSplit Component) ─── */}
        <div className="relative">
          <ValueBreakdownSplit
            title={pageData.budgetRanges.title}
            subtitle={pageData.budgetRanges.subtitle}
            includedTitle="Foundation & Expanded Tiers"
            extrasTitle="Comprehensive & Bespoke Tiers"
            included={budgetTiersIncluded}
            extras={budgetTiersExtras}
          />
        </div>

        {/* ─── 4. WHY DOES SOLO LUXURY TRAVEL COST MORE? (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.whyCostMore.title}
            subtitle="OCCUPANCY & SERVICE REALITIES"
            paragraphs={[
              pageData.whyCostMore.subtitle,
              pageData.whyCostMore.relevantHeading
            ]}
            items={whyCostMoreItems}
          />
          {/* Why Cost More Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.whyCostMore.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 5. WHAT IS A SINGLE SUPPLEMENT? (DetailedInclusionsList Component) ─── */}
        <div className="relative">
          <DetailedInclusionsList
            title={pageData.singleSupplementSection.title}
            intro={[
              pageData.singleSupplementSection.lead,
              pageData.singleSupplementSection.supplierNote
            ]}
            items={singleSupplementItems}
          />
          {/* Single Supplement Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.singleSupplementSection.interlinkText}{' '}
                <Link
                  to={pageData.singleSupplementSection.interlinkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.singleSupplementSection.interlinkLabel} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 6. PRICING ACROSS LUXURY EXPERIENCES (AlternatingRiverShowcase Component) ─── */}
        <div className="relative">
          <AlternatingRiverShowcase
            title={pageData.experiencesPricing.title}
            description={pageData.experiencesPricing.subtitle}
            rivers={experienceRivers}
          />
          {/* Interlink Hubs Box for Experiences */}
          <div className="max-w-4xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              {pageData.experiencesPricing.experiences.map((exp, idx) => (
                <Link
                  key={idx}
                  to={exp.linkUrl}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200/80 hover:border-gold-300 font-sans text-xs sm:text-sm font-semibold text-navy-950 hover:text-navy-900 transition-all flex items-center justify-center text-center"
                >
                  {exp.linkText}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 7. WHAT IS INCLUDED IN A LUXURY SOLO TRAVEL PRICE? (InclusionCheckerGrid Component) ─── */}
        <div className="relative">
          <InclusionCheckerGrid
            eyebrow="PRICING TRANSPARENCY"
            title={pageData.inclusionsAndAdditional.inclusionsTitle}
            subtitle={pageData.inclusionsAndAdditional.inclusionsSubtitle}
            inclusionsTitle="Commonly Included Components"
            exclusionsTitle={pageData.inclusionsAndAdditional.additionalTitle}
            inclusions={pageData.inclusionsAndAdditional.inclusions}
            exclusions={additionalExpensesItems}
          />
          {/* Inclusions Advisory Note Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {pageData.inclusionsAndAdditional.inclusionsNote}
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-500 italic">
                {pageData.inclusionsAndAdditional.additionalSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 8. DOES TRAVELING SOLO ALWAYS COST MORE? & ADVISOR VALUE (EditorialIntroSplit Component) ─── */}
        <div className="relative">
          <EditorialIntroSplit
            eyebrow="ADVISORY PERSPECTIVE"
            heading={pageData.doesSoloCostMore.title}
            paragraphs={doesCostMoreParagraphs}
            ctaText="Plan With A Travel Advisor"
            ctaLink="/contact"
          />
        </div>

        {/* ─── 9. WHAT IS THE BEST LUXURY SOLO TRIP FOR YOUR BUDGET? (CardGrid Component) ─── */}
        <div className="relative">
          <CardGrid
            title={pageData.bestTripForBudget.title}
            subtitle={`${pageData.bestTripForBudget.subtitle} ${pageData.bestTripForBudget.note}`}
            cards={bestTripCards}
            columns={4}
            stagger={false}
          />
        </div>

        {/* ─── 10. SOLO TRAVEL COST: INDEPENDENT VS GROUP (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable
            data={{
              title: pageData.independentVsGroupTable.title,
              headers: pageData.independentVsGroupTable.headers,
              rows: pageData.independentVsGroupTable.rows
            }}
          />
          {/* Table Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.independentVsGroupTable.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 11. IS LUXURY SOLO TRAVEL WORTH THE COST? (MistakesShowcase Component) ─── */}
        <div className="relative">
          <MistakesShowcase
            mistakes={isItWorthBenefits}
          />
         
        </div>

        {/* ─── 12. HOW TRIPS & SHIPS HELPS YOU PLAN AROUND YOUR BUDGET (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.howTripsAndShipsHelps.title}
            subtitle={`${pageData.howTripsAndShipsHelps.subtitle} ${pageData.howTripsAndShipsHelps.conclusion}`}
            rules={howWeHelpRules}
          />
        </div>

        {/* ─── 13. WHERE WILL YOUR NEXT CHAPTER TAKE YOU? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.discoveryQuestions.title}
            subtitle={`${pageData.discoveryQuestions.subtitle} ${pageData.discoveryQuestions.conclusion}`}
            features={discoveryFeatures}
          />
        </div>

        
        {/* ─── 15. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={faqData}
        />

        {/* ─── 17. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
        <div className="relative">
          <ExpertCredentials
            name={pageData.author.name}
            title={pageData.author.role}
            bio={pageData.author.bio}
            ctaText={pageData.author.ctaText}
            ctaLink={pageData.author.ctaLink}
           
          />
        </div>

        {/* ─── 18. FINAL CONVERSION SECTION (CenterCTA Component) ─── */}
        <CenterCTA
          title="Plan Your Luxury Solo Journey"
          subtitle="You don't need someone to go with you. You need the right experience waiting for you. Get in touch with our luxury travel advisors today."
          primaryText="Plan Your Luxury Solo Journey"
          primaryHref="/contact"
          secondaryText="Explore Luxury Solo Pillar Hub"
          secondaryHref="/luxury-solo-womens-travel/"
        />
      </div>
    </div>
  );
};

export default SoloTravelCost;
