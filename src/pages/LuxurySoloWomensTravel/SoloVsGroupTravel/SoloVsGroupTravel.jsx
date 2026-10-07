import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components (Unique per section, zero component repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import CardGrid from '@/components/ui/CardGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import FeatureGrid from '@/components/ui/FeatureGrid';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FadeIn from '@/components/ui/FadeIn';

const SoloVsGroupTravel = () => {

  // 1. Editorial Intro Highlights
  const differenceHighlights = [
    "Complete Itinerary Autonomy",
    "Built-In Companionship Options",
    "Vetted Safety & Private Support",
    "Seamless Turnkey Planning"
  ];

  // 2. Decision Factors for CardGrid
  const decisionCards = pageData.decisionFactors.factors.map((factor) => ({
    title: factor.title,
    description: factor.description,
    icon: factor.icon || "Compass",
    bullets: factor.linkUrl ? [`${factor.tag} • Explore related guide below`] : [factor.tag]
  }));

  // 3. Hybrid Journey Items for CurvilinearGrid
  const hybridItems = pageData.hybridJourneys.options.map((opt) => ({
    title: opt.title,
    description: opt.description,
    icon: opt.icon || "Compass",
    features: [opt.tag]
  }));

  // 4. Travel Style Profiles for TravelerProfileTabs
  // Recommended Visuals: Solo female traveler luxury cruise, River cruise Europe, African safari lodge, European cultural journey
  const travelStyleProfiles = pageData.byTravelStyle.profiles.map((prof) => ({
    name: prof.name,
    tagline: prof.tagline.toUpperCase(),
    quote: prof.quote,
    recommendation: prof.recommendation,
    reason: prof.reason,
    whyFits: prof.whyFits,
    image: null, // Image prop commented out / handled gracefully by MasterImage placeholder
    placeholderLabel: prof.placeholderLabel || prof.name
  }));

  // 5. Discovery Questions for FeatureGrid
  const discoveryFeatures = pageData.howToKnowRight.questions.map((q) => ({
    title: q.title,
    description: q.description,
    icon: "Compass"
  }));

  // 6. Decision Matrix Persona Items for TravelerTypeGrid ("You Don't Have to Choose Based on Fear")
  const decisionMatrixItems = pageData.howToKnowRight.decisionMatrix.map((item, idx) => {
    const icons = ["Compass", "Heart", "Shield", "Ship", "Sparkles"];
    const tags = ["Freedom", "Connection", "Adventure", "Relaxation", "Hybrid"];
    return {
      title: item.goal,
      description: item.recommendation,
      icon: icons[idx % icons.length],
      tag: tags[idx % tags.length]
    };
  });

  // 7. 10 Evaluation Pillars for ExpertRulesGrid
  const tripsAndShipsRules = pageData.howTripsAndShipsHelps.comparisonPoints.map((pt, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    title: pt.title,
    text: pt.desc
  }));

  // 8. FAQ Accordion Items
  const faqData = {
    title: "Frequently Asked Questions: Solo vs. Women-Only Group Travel",
    subtitle: "Clear, authoritative answers comparing independence, single supplements, safety, group sizes, and hybrid journeys.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 8. Related Hub Guides for InteractivePillarHubGrid
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
        <meta name="keywords" content={pageData.meta.keywords ? pageData.meta.keywords.join(', ') : (pageData.meta.secondaryKeywords ? [pageData.meta.primaryKeyword, ...pageData.meta.secondaryKeywords].join(', ') : '')} />
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
          pageData.hero.sublead,
          pageData.hero.conclusion
        ]}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link || null}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content" className="relative z-10">

        {/* ─── 2. WHAT IS THE DIFFERENCE? (EditorialIntroSection Component) ─── */}
        <div className="relative">
          <EditorialIntroSection
            eyebrow={pageData.differenceIntro.eyebrow}
            heading={pageData.differenceIntro.title}
            paragraphs={[
              pageData.differenceIntro.lead,
              pageData.differenceIntro.sublead,
              pageData.differenceIntro.paragraph,
              pageData.differenceIntro.conclusion
            ]}
            image={null}
            placeholderLabel="SOLO VS WOMEN-ONLY TRAVEL DISTINCTION"
            badgeTitle="Balanced Independence"
            badgeDescription="Tailoring structure, freedom, and connection to your personal travel style."
            highlights={differenceHighlights}
          />
        </div>

        {/* ─── 3. AT A GLANCE COMPARISON TABLE (ComparisonTable Component) ─── */}
        <div className="relative bg-slate-50 py-4">
          <ComparisonTable
            data={pageData.atAGlanceTable}
          />
          {/* Table Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-6 mb-16 text-center relative z-20">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
                {pageData.atAGlanceTable.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 4. WHAT DOES EACH TRAVEL STYLE MEAN? (ShipPhilosophyFaceoff Component) ─── */}
        <div className="relative">
          <ShipPhilosophyFaceoff
            data={pageData.deepDiveFaceoff}
            regentImage={null}
            vikingImage={null}
            regentImageAlt="Luxury Solo Travel Concept"
            vikingImageAlt="Women-Only Group Travel Concept"
          />
          {/* Deep Dive Interlink Action Box */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl text-navy-950 mb-2">Luxury Solo Travel</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pageData.deepDiveFaceoff.regent.conclusion}
                  </p>
                </div>
                <Link
                  to={pageData.deepDiveFaceoff.regent.interlinkUrl}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  {pageData.deepDiveFaceoff.regent.interlinkLabel} &rarr;
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl text-navy-950 mb-2">Women-Only Group Travel</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pageData.deepDiveFaceoff.viking.conclusion}
                  </p>
                </div>
                <Link
                  to={pageData.deepDiveFaceoff.viking.interlinkUrl}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-navy-950 hover:text-navy-800 transition-colors"
                >
                  {pageData.deepDiveFaceoff.viking.interlinkLabel} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. WHY CHOOSE SOLO VS. WOMEN-ONLY TRAVEL? (ValueBreakdownSplit Component) ─── */}
        <div className="relative">
          <ValueBreakdownSplit
            title={pageData.whyChooseSplit.title}
            subtitle={pageData.whyChooseSplit.subtitle}
            includedTitle={pageData.whyChooseSplit.soloTitle}
            extrasTitle={pageData.whyChooseSplit.groupTitle}
            included={pageData.whyChooseSplit.soloPillars}
            extras={pageData.whyChooseSplit.groupPillars}
            image={null}
          />
          {/* Interlink Guides Bar */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <Link
                to={pageData.whyChooseSplit.soloInterlink.url}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 hover:border-gold-300 font-sans text-xs font-bold text-navy-950 transition-all text-center"
              >
                {pageData.whyChooseSplit.soloInterlink.label} &rarr;
              </Link>
              <Link
                to={pageData.whyChooseSplit.groupInterlink.url}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 hover:border-gold-300 font-sans text-xs font-bold text-navy-950 transition-all text-center"
              >
                {pageData.whyChooseSplit.groupInterlink.label} &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* ─── 6. COMPARING KEY DECISION FACTORS (CardGrid Component) ─── */}
        <div className="relative">
          <CardGrid
            title={pageData.decisionFactors.title}
            subtitle={pageData.decisionFactors.subtitle}
            cards={decisionCards}
            columns={3}
            stagger={false}
          />
          {/* Decision Interlinks Grid */}
          <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              <Link
                to="/luxury-solo-womens-travel/women-over-50/"
                className="p-3 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 font-sans text-xs font-bold text-navy-950 text-center transition-all"
              >
                Solo Travel for Women Over 50 &rarr;
              </Link>
              <Link
                to="/luxury-solo-womens-travel/travel-safety/"
                className="p-3 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 font-sans text-xs font-bold text-navy-950 text-center transition-all"
              >
                Solo Female Travel Safety Guide &rarr;
              </Link>
              <Link
                to="/luxury-solo-womens-travel/solo-travel-cost/"
                className="p-3 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 font-sans text-xs font-bold text-navy-950 text-center transition-all"
              >
                Luxury Solo Travel Cost Breakdown &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* ─── 7. HYBRID JOURNEYS: CAN YOU COMBINE SOLO & GROUP? (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.hybridJourneys.title}
            subtitle="FLEXIBLE HYBRID JOURNEYS"
            paragraphs={[
              pageData.hybridJourneys.subtitle,
              pageData.hybridJourneys.conclusion
            ]}
            items={hybridItems}
          />
        </div>

        {/* ─── 8. SOLO VS. GROUP BY TRAVEL STYLE (TravelerProfileTabs Component) ─── */}
        <div className="relative">
          <TravelerProfileTabs
            title={pageData.byTravelStyle.title}
            subtitle={pageData.byTravelStyle.subtitle}
            profiles={travelStyleProfiles}
          />
          {/* Style Interlink Hubs */}
          <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              {pageData.byTravelStyle.profiles.map((prof, idx) => (
                <Link
                  key={idx}
                  to={prof.linkUrl}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 hover:border-gold-300 font-sans text-xs font-bold text-navy-950 hover:text-navy-900 transition-all flex items-center justify-center text-center"
                >
                  {prof.linkText}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 9. HOW DO YOU KNOW WHICH OPTION IS RIGHT? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.howToKnowRight.title}
            subtitle={pageData.howToKnowRight.subtitle}
            features={discoveryFeatures}
          />
        </div>

        {/* ─── 10. YOU DON'T HAVE TO CHOOSE BASED ON FEAR (TravelerTypeGrid Component) ─── */}
        <div className="relative">
          <TravelerTypeGrid
            title={pageData.howToKnowRight.philosophyTitle}
            subtitle={pageData.howToKnowRight.philosophySubtitle}
            items={decisionMatrixItems}
          />
         
        </div>

       
        {/* ─── 11. HOW TRIPS & SHIPS HELPS YOU CHOOSE (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.howTripsAndShipsHelps.title}
            subtitle={`${pageData.howTripsAndShipsHelps.subtitle} ${pageData.howTripsAndShipsHelps.conclusion}`}
            rules={tripsAndShipsRules}
          />
        </div>

        {/* ─── 12. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={faqData}
        />

        {/* ─── 13. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <InteractivePillarHubGrid
          title={pageData.relatedGuides.title}
          subtitle={pageData.relatedGuides.subtitle}
          items={relatedHubGuides}
        />

        {/* ─── 14. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
        <div className="relative">
          <ExpertCredentials
            name={pageData.expert.name}
            title={pageData.expert.title}
            bio={pageData.expert.bio}
            ctaText="Consult with Angela Hughes"
            ctaLink="/contact"
            bottomText="Founder & Leader of Women Who Wander • 121+ Countries Explored"
          />
        </div>

        {/* ─── 15. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.finalConversion.title}
          subtitle={pageData.finalConversion.subtitle}
          primaryText={pageData.finalConversion.ctaText}
          primaryHref={pageData.finalConversion.ctaLink}
          secondaryText="Explore Pillar Hub"
          secondaryHref="/luxury-solo-womens-travel/"
        />

      </div>
    </div>
  );
};

export default SoloVsGroupTravel;
