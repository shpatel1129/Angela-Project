import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components (Unique per section, zero component repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import CardGrid from '@/components/ui/CardGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';

// Dynamic CMS Offers Showcase & Admin Panel
import DynamicOffersShowcase from './DynamicOffersShowcase';

const SoloTravelOffers = () => {

  // 1. Current Opportunities Cards for CardGrid
  const currentOffersCards = pageData.currentOffersOverview.categories.map((cat) => ({
    title: cat.title,
    description: cat.description,
    icon: cat.icon || "Sparkles"
  }));

  // 2. How to Use This Page Steps for StepByStepGuide
  const howToUseSteps = pageData.howToUsePage.steps.map((step) => ({
    title: step.title,
    description: step.description
  }));

  // 3. Experience Showcases for TravelerProfileTabs (Interactive Pill Tab-based Showcase with Images)
  // Recommended Visuals: Solo woman on luxury cruise, Luxury river cruise Europe, Women-only small group, Solo woman African safari lodge
  // import cruiseImage from '@/assets/...'; // (Image imports commented out as per project standards)
  const experienceTabProfiles = pageData.experienceOffers.sections.map((sec, idx) => ({
    name: sec.name,
    tagline: `EXPERIENCE TIER 0${idx + 1}`,
    quote: sec.description,
    recommendation: sec.bestFor,
    reason: sec.interlinkText,
    whyFits: sec.highlights,
    image: null, // Image prop commented out / handled gracefully by MasterImage placeholder
    placeholderLabel: `${sec.name.toUpperCase()} — VERIFIED SOLO TRAVEL`
  }));

  // 4. Reduced Single Supplement Details for DetailedInclusionsList
  const reducedSupplementItems = pageData.reducedSingleSupplement.conditions.map((cond) => ({
    title: cond.title,
    paragraphs: cond.paragraphs
  }));

  // 5. Why Offers Change Rules for ExpertRulesGrid
  const whyOffersChangeRules = pageData.whyOffersChange.reasons.map((r) => ({
    number: r.number,
    title: r.title,
    text: r.text
  }));

  // 6. No Single Supplement Meaning Paragraphs for EditorialIntroSplit
  const noSupplementParagraphs = [
    pageData.noSingleSupplementMeaning.lead,
    ...pageData.noSingleSupplementMeaning.paragraphs
  ];

  // 7. Traveler Persona Profiles for TravelerTypeGrid
  const travelerPersonas = pageData.whoAreTheseOffersFor.personas.map((p) => ({
    title: p.title,
    description: p.description,
    tag: p.tag,
    icon: p.icon || "Compass"
  }));

  // 8. 4 Discovery Questions for FeatureGrid
  const discoveryFeatures = pageData.howToFindRightOffer.questions.map((q) => ({
    title: q.question,
    description: `${q.options.join(' • ')} — ${q.guidance}`,
    icon: "Compass"
  }));

  // 9. Why Work With Trips & Ships Items for CurvilinearGrid
  const whyWorkWithItems = pageData.whyWorkWithTripsAndShips.evaluationItems.map((item) => ({
    title: item,
    description: `We rigorously verify supplier inventory, room categories, pricing fairness, and single occupancy supplement terms for ${item.toLowerCase()}.`,
    icon: "Shield"
  }));

  // 10. FAQ Accordion Items
  const faqData = {
    title: "Frequently Asked Questions About Luxury Solo Travel Offers",
    subtitle: "Clear answers on single supplements, verified departure promotions, booking deadlines, and value comparisons.",
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
        
        {/* ─── 2. CURRENT LUXURY SOLO TRAVEL OFFERS (CardGrid Component) ─── */}
        <div className="relative">
          <CardGrid
            title={pageData.currentOffersOverview.title}
            subtitle={`${pageData.currentOffersOverview.lead} ${pageData.currentOffersOverview.sublead}`}
            cards={currentOffersCards}
            columns={4}
            stagger={false}
          />
          {/* Section Conclusion Note */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
                {pageData.currentOffersOverview.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 3. HOW TO USE THIS PAGE (StepByStepGuide Component) ─── */}
        <div className="relative">
          <StepByStepGuide
            title={pageData.howToUsePage.title}
            subtitle={pageData.howToUsePage.subtitle}
            steps={howToUseSteps}
          />
        
        </div>

        {/* ─── 4. DYNAMIC CMS OFFERS SECTION & ADMIN PANEL ─── */}
        <DynamicOffersShowcase
          initialOffers={pageData.initialOffers}
          rules={pageData.cmsStructureAndRules.rules}
          sectionTitle={pageData.cmsStructureAndRules.sectionTitle}
          sectionNotice={pageData.cmsStructureAndRules.sectionNotice}
        />

        {/* ─── 5. EXPERIENCE-SPECIFIC SOLO TRAVEL OFFERS (TravelerProfileTabs Interactive Pill Tab-Based Component) ─── */}
        <div className="relative">
          <TravelerProfileTabs
            title={pageData.experienceOffers.title}
            subtitle={pageData.experienceOffers.subtitle}
            profiles={experienceTabProfiles}
          />
          {/* Interlink Hubs Box for Experience Guides */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              {pageData.experienceOffers.sections.map((sec, idx) => (
                <Link
                  key={idx}
                  to={sec.interlinkUrl}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200 hover:border-gold-300 font-sans text-xs font-bold text-navy-950 hover:text-navy-900 transition-all flex items-center justify-center text-center"
                >
                  {sec.interlinkLabel} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 6. WHAT IS A REDUCED SINGLE SUPPLEMENT? (DetailedInclusionsList Component) ─── */}
        <div className="relative">
          <DetailedInclusionsList
            title={pageData.reducedSingleSupplement.title}
            intro={[
              pageData.reducedSingleSupplement.lead,
              pageData.reducedSingleSupplement.supplierNote
            ]}
            items={reducedSupplementItems}
          />
          {/* Reduced Supplement Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.reducedSingleSupplement.interlinkText}{' '}
                <Link
                  to={pageData.reducedSingleSupplement.interlinkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.reducedSingleSupplement.interlinkLabel} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 7. WHY DO SOLO TRAVEL OFFERS CHANGE? (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.whyOffersChange.title}
            subtitle={`${pageData.whyOffersChange.subtitle} ${pageData.whyOffersChange.conclusion}`}
            rules={whyOffersChangeRules}
          />
        </div>

        {/* ─── 8. WHAT DOES "NO SINGLE SUPPLEMENT" ACTUALLY MEAN? (EditorialIntroSplit Component) ─── */}
        <div className="relative">
          <EditorialIntroSplit
            eyebrow="TERMS & CLARITY"
            heading={pageData.noSingleSupplementMeaning.title}
            paragraphs={noSupplementParagraphs}
            ctaText="Explore Verified Offers"
            ctaLink="#offers-feed"
          />
        </div>

        {/* ─── 8b. HOW TRIPS & SHIPS VERIFIES SOLO TRAVEL OFFERS (ExpertAuthorityChecklist Component) ─── */}
        <div className="relative">
          <ExpertAuthorityChecklist
            title={pageData.verificationProtocol.title}
            subtitle={pageData.verificationProtocol.subtitle}
            points={pageData.verificationProtocol.items}
          />
         
        </div>

        {/* ─── 10. WHO ARE THESE OFFERS FOR? (TravelerTypeGrid Component) ─── */}
        <div className="relative">
          <TravelerTypeGrid
            title={pageData.whoAreTheseOffersFor.title}
            subtitle={pageData.whoAreTheseOffersFor.subtitle}
            items={travelerPersonas}
          />
          {/* Women Over 50 Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm text-slate-700 leading-relaxed">
                Planning as an independent mature traveler?{' '}
                <Link
                  to="/luxury-solo-womens-travel/women-over-50/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Explore Solo Travel for Women Over 50 &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        

        {/* ─── 11. HOW TO FIND THE RIGHT SOLO TRAVEL OFFER (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.howToFindRightOffer.title}
            subtitle={pageData.howToFindRightOffer.subtitle}
            features={discoveryFeatures}
          />
          {/* Budget Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Want to evaluate exact pricing benchmarks?{' '}
                <Link
                  to="/luxury-solo-womens-travel/solo-travel-cost/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Read How Much Does Luxury Solo Travel Cost? &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

          {/* ─── 13. FIND YOUR LUXURY SOLO TRAVEL OFFER (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.finalCta.title}
          subtitle={pageData.finalCta.subtitle}
          primaryText={pageData.finalCta.ctaText}
          primaryHref={pageData.finalCta.ctaLink}
          secondaryText="Browse Live Verified Offers"
          secondaryHref="#offers-feed"
        />

        {/* ─── 12. WHY WORK WITH TRIPS & SHIPS? (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.whyWorkWithTripsAndShips.title}
            subtitle="ADVISORY VALUE & BEYOND DISCOUNTS"
            paragraphs={[
              pageData.whyWorkWithTripsAndShips.lead,
              pageData.whyWorkWithTripsAndShips.philosophy
            ]}
            items={whyWorkWithItems}
          />
          
        </div>

      

        {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={faqData}
        />

        {/* ─── 16. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
        <div className="relative">
          <ExpertCredentials
            name={pageData.author.name}
            title={pageData.author.role}
            bio={pageData.author.bio}
            ctaText={pageData.author.ctaText}
            ctaLink={pageData.author.ctaLink}
          
          />
        </div>

        {/* ─── 17. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
        <CenterCTA
          title="Start Planning Your Luxury Solo Adventure"
          subtitle="Explore verified promotions or consult directly with Angela Hughes to customize your independent journey."
          primaryText="Explore My Solo Travel Options"
          primaryHref="/contact"
          secondaryText="Explore Pillar Hub"
          secondaryHref="/luxury-solo-womens-travel/"
        />

      </div>
    </div>
  );
};

export default SoloTravelOffers;
