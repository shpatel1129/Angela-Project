import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components (Unique per section, zero component repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import InclusionsList from '@/components/ui/InclusionsList';
import ValuePropositionHighlight from '@/components/ui/ValuePropositionHighlight';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CardGrid from '@/components/ui/CardGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import GlassQuickFacts from '@/components/ui/GlassQuickFacts';
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase';
import MistakesShowcase from '@/components/ui/MistakesShowcase';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

const SingleSupplementCruises = () => {

  // 1. Detailed Inclusions Items for Can You Find Section
  const distinctionItems = pageData.canYouFind.distinctions.map((d) => ({
    title: d.title,
    paragraphs: [d.description]
  }));

  // 2. Why Cruise Lines Charge Factors for CurvilinearGrid
  const whyChargeItems = pageData.whyCharge.factors.map(f => ({
    title: f.title,
    description: f.description,
    icon: f.icon || "ship"
  }));

  // 3. Brand Pillars Data for Luxury Cruise Lines
  const cruiseLinesPillarsData = {
    title: pageData.cruiseLines.title,
    subtitle: pageData.cruiseLines.subtitle,
    pillars: pageData.cruiseLines.lines.map(line => ({
      title: line.name,
      description: line.summary,
      icon: 'ship'
    }))
  };

  // 4. Comparison Criteria for FeatureGrid
  const comparisonCriteria = pageData.compareBeyondSupplement.criteria.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon
  }));

  // 5. Solo vs Standard Staterooms Cards for CardGrid
  const soloVsStandardCards = pageData.soloVsStandard.questions.map((q, idx) => ({
    title: `Evaluation Factor 0${idx + 1}`,
    description: q,
    icon: "Compass"
  }));

  // 6. Value Proposition Highlight Items for Reduced Single Supplements
  const valuePropositionItems = [
    {
      title: "Total Fare Optimization",
      description: pageData.reducedSupplementsValue.paragraphs[1],
      icon: "TrendingDown",
      impact: "Lower Overall Cost"
    },
    {
      title: "Compare Bottom-Line Value",
      description: pageData.reducedSupplementsValue.paragraphs[2],
      icon: "DollarSign",
      impact: "Better Stateroom Tier"
    },
    {
      title: "Holistic Assessment",
      description: pageData.reducedSupplementsValue.paragraphs[3],
      icon: "Compass",
      impact: "Superior Journey"
    }
  ];

  // 7. River Cruise Brand Profiles for AlternatingRiverShowcase
  const riverShowcaseRivers = pageData.riverCruises.brands.map((brand) => ({
    name: brand.name,
    description: brand.description,
    bestFor: "Solo Travelers seeking intimate European waterway navigation, inclusive luxury, and cultural immersion.",
    highlights: [
      "Waived or reduced single supplements on select departures",
      "Intimate, relaxed, and social onboard atmosphere",
      "Curated small-group excursions, fine dining & beverage inclusions"
    ]
  }));

  // 8. Caution Dimensions for MistakesShowcase (Why Lowest Solo Fare Isn't Always the Best Choice)
  const lowestFareMistakes = pageData.lowestFareCaution.reasons.map((reason, idx) => ({
    title: `Value Consideration 0${idx + 1}`,
    description: reason
  }));

  // 9. Expert Rules Grid Data for How Trips & Ships Helps
  const howWeHelpRules = pageData.howTripsAndShipsHelps.services.map((service, idx) => ({
    number: idx < 9 ? `0${idx + 1}` : `${idx + 1}`,
    title: service,
    text: `Our experienced luxury travel advisors verify exact rates, promotional eligibility, and stateroom categories directly with suppliers.`
  }));

  // 10. Offers Table Data for ComparisonTable
  const offersTableData = {
    title: pageData.offersTable.title,
    headers: pageData.offersTable.headers,
    rows: pageData.offersTable.rows.map(r => [r.info, r.shows])
  };

  // 11. FAQ Accordion Items
  const faqData = {
    title: "Frequently Asked Questions About Cruises Without Single Supplements",
    subtitle: "Essential answers regarding solo staterooms, waived single supplements, and finding true luxury cruise value.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 12. Related Hub Guides for InteractivePillarHubGrid
  const relatedHubGuides = pageData.relatedGuides.guides.map((guide) => ({
    title: guide.title,
    category: guide.category,
    description: guide.description,
    alt: guide.title,
    badgeCount: guide.links ? guide.links.length : 1,
    links: guide.links,
    mainUrl: guide.mainUrl
  }));

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
        description={pageData.hero.paragraphs}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content" className="relative z-10">
        {/* ─── 2. WHAT IS A SINGLE SUPPLEMENT ON A CRUISE? (EditorialIntroSection Component) ─── */}
        <div className="relative">
          <EditorialIntroSection
            eyebrow={pageData.whatIsSingleSupplement.eyebrow}
            heading={pageData.whatIsSingleSupplement.title}
            paragraphs={[
              ...pageData.whatIsSingleSupplement.paragraphs,
              `${pageData.whatIsSingleSupplement.exampleTitle}: ${pageData.whatIsSingleSupplement.exampleParagraphs.join(' ')}`
            ]}
            badgeTitle="Double Occupancy Model"
            badgeDescription="Cruises calculate stateroom revenue based on two passengers sharing."
            placeholderLabel="WHAT IS A SINGLE SUPPLEMENT"
          />
        </div>

        {/* ─── 3. CAN YOU FIND LUXURY CRUISES WITHOUT A SINGLE SUPPLEMENT? (DetailedInclusionsList Component) ─── */}
        <div className="relative">
          <DetailedInclusionsList
            title={pageData.canYouFind.title}
            intro={[
              pageData.canYouFind.lead,
              pageData.canYouFind.sublead,
              pageData.canYouFind.distinctionTitle
            ]}
            items={distinctionItems}
          />
          {/* Can You Find Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.canYouFind.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 4. WHY DO CRUISE LINES CHARGE SINGLE SUPPLEMENTS? (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.whyCharge.title}
            subtitle="REVENUE & CAPACITY FACTORS"
            paragraphs={[pageData.whyCharge.subtitle]}
            items={whyChargeItems}
          />
        </div>

        {/* ─── 5. WHAT DOES “NO SINGLE SUPPLEMENT” ACTUALLY MEAN? (InclusionsList Component) ─── */}
        <div className="relative">
          <InclusionsList
            title={pageData.noSingleSupplementMeaning.title}
            expertNote={`${pageData.noSingleSupplementMeaning.subtitle} ${pageData.noSingleSupplementMeaning.prompt} ${pageData.noSingleSupplementMeaning.footerNote}`}
            inclusions={pageData.noSingleSupplementMeaning.checklist}
          />
        </div>

        {/* ─── 6. REDUCED SINGLE SUPPLEMENTS CAN BE JUST AS VALUABLE (ValuePropositionHighlight Component) ─── */}
        <div className="relative">
          <ValuePropositionHighlight
            title={pageData.reducedSupplementsValue.title}
            subtitle={pageData.reducedSupplementsValue.paragraphs[0]}
            items={valuePropositionItems}
            imageOverlayText="Compare Total Solo Value"
          />
        </div>

        {/* ─── 7. LUXURY CRUISE LINES AND SOLO TRAVELER PRICING (BrandPillarsShowcase Component) ─── */}
        <div className="relative">
          <BrandPillarsShowcase
            data={cruiseLinesPillarsData}
          />
          {/* Verification Policy Disclaimer Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-amber-50/90 rounded-2xl border border-amber-200 shadow-sm">
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                {pageData.cruiseLines.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 8. WHAT SHOULD SOLO TRAVELERS COMPARE BESIDES THE SUPPLEMENT? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.compareBeyondSupplement.title}
            subtitle={pageData.compareBeyondSupplement.subtitle}
            features={comparisonCriteria}
          />
        </div>

        {/* ─── 9. SOLO STATEROOMS VS. STANDARD STATEROOMS (CardGrid Component) ─── */}
        <div className="relative">
          <CardGrid
            title={pageData.soloVsStandard.title}
            subtitle={`${pageData.soloVsStandard.subtitle} ${pageData.soloVsStandard.questionsTitle}`}
            cards={soloVsStandardCards}
            columns={3}
            stagger={false}
          />
        </div>

        {/* ─── 10. HOW TO FIND CRUISES WITH REDUCED OR NO SINGLE SUPPLEMENTS (StepByStepGuide Component) ─── */}
        <div className="relative">
          <StepByStepGuide
            title={pageData.howToFind.title}
            subtitle={pageData.howToFind.subtitle}
            steps={pageData.howToFind.steps}
          />
        </div>

        {/* ─── 11. WHEN IS THE BEST TIME TO LOOK FOR A SOLO CRUISE OFFER? (GlassQuickFacts Component) ─── */}
        <div className="relative bg-navy-950">
          <GlassQuickFacts
            title={pageData.bestTime.title}
            items={pageData.bestTime.paragraphs.map((p, idx) => ({
              label: `TIMING INSIGHT 0${idx + 1}`,
              description: p
            }))}
          />
        </div>

        {/* ─── 12. ARE RIVER CRUISES DIFFERENT? (AlternatingRiverShowcase Component) ─── */}
        <div className="relative">
          <AlternatingRiverShowcase
            title={pageData.riverCruises.title}
            description={`${pageData.riverCruises.lead} ${pageData.riverCruises.brandsLead}`}
            rivers={riverShowcaseRivers}
          />
          {/* River Cruises Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                {pageData.riverCruises.conclusion}
              </p>
              <Link
                to={pageData.riverCruises.interlinkUrl}
                className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
              >
                {pageData.riverCruises.interlinkLabel} &rarr;
              </Link>
            </div>
          </div>
        </div>

        
        {/* ─── 15. MID-PAGE CALLOUT / CTA (CenterCTA Component) ─── */}
        <div className="relative">
          <CenterCTA
            title={pageData.midPageCta.title}
            subtitle={pageData.midPageCta.subtitle}
            primaryText={pageData.midPageCta.ctaText}
            primaryHref={pageData.midPageCta.ctaLink}
            secondaryText="Explore Solo River Cruises"
            secondaryHref="/luxury-solo-womens-travel/solo-river-cruises/"
          />
        </div>

        {/* ─── 13. WHY THE LOWEST SOLO FARE ISN'T ALWAYS THE BEST CHOICE (MistakesShowcase Component) ─── */}
        <div className="relative">
          <MistakesShowcase
            mistakes={lowestFareMistakes}
          />
          {/* Lowest Fare Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-navy-950 font-bold leading-relaxed">
                {pageData.lowestFareCaution.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 14. HOW TRIPS & SHIPS HELPS WITH SOLO CRUISE PRICING (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.howTripsAndShipsHelps.title}
            subtitle={`${pageData.howTripsAndShipsHelps.subtitle} ${pageData.howTripsAndShipsHelps.verificationPromise}`}
            rules={howWeHelpRules}
          />
        </div>


        {/* ─── 16. UNDERSTANDING OUR SOLO CRUISE OFFERS (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable
            data={offersTableData}
          />
          {/* Offers Table Verification Explanation Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {pageData.offersTable.explanation}
              </p>
            </div>
          </div>
        </div>

        
        {/* ─── 20. ABOUT THE AUTHOR & LAST UPDATED (ExpertCredentials Component) ─── */}
        <div className="relative">
          <ExpertCredentials
            name={pageData.author.name}
            title={pageData.author.role}
            bio={pageData.author.bio}
            ctaText="Ask About Solo Traveler Pricing"
            ctaLink="/contact"

          />
        </div>

        {/* ─── 17. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={faqData}
        />


        {/* ─── 19. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <InteractivePillarHubGrid
          title={pageData.relatedGuides.title}
          subtitle={pageData.relatedGuides.subtitle}
          items={relatedHubGuides}
        />


        
        {/* ─── 18. FIND THE RIGHT LUXURY CRUISE FOR YOU (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.finalClosing.title}
          subtitle={pageData.finalClosing.paragraphs.join(" ")}
          primaryText={pageData.finalClosing.ctaText}
          primaryHref={pageData.finalClosing.ctaLink}
          secondaryText="Explore Luxury Solo Pillar Hub"
          secondaryHref="/luxury-solo-womens-travel/"
        />
      </div>
    </div>
  );
};

export default SingleSupplementCruises;
