import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components (Unique per section, zero component repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import InteractiveDestinationPanels from '@/components/ui/InteractiveDestinationPanels';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';

const SoloAfricanSafaris = () => {

  // 1. Safety Structure Points for ExpertAuthorityChecklist
  const safetyChecklistPoints = pageData.safetySection.structurePoints.map(
    (pt) => `${pt.title}: ${pt.description}`
  );

  // 2. Safari Types for TravelerProfileTabs
  // Recommended Visuals: Small-group safari vehicle, Safari lodge at sunrise, Private 4x4 game drive
  const safariTypeProfiles = pageData.safariTypes.types.map((type) => ({
    name: type.name,
    tagline: type.tagline,
    quote: type.quote,
    recommendation: type.recommendation,
    reason: type.reason,
    whyFits: type.whyFits,
    image: null, // Image prop commented out / handled gracefully by MasterImage placeholder
    placeholderLabel: type.placeholderLabel || type.name
  }));

  // 3. Destination Showcase Panels with Images for InteractiveDestinationPanels
  // Recommended Visuals: Masai Mara Kenya, Serengeti Tanzania, Okavango Delta Botswana, Sabi Sands South Africa, Sossusvlei Namibia, Volcanoes National Park Rwanda
  // import kenyaImg from '@/assets/...'; // (Image imports commented out as per project standards)
  // import tanzaniaImg from '@/assets/...';
  // import botswanaImg from '@/assets/...';
  // import southAfricaImg from '@/assets/...';
  // import namibiaImg from '@/assets/...';
  // import rwandaImg from '@/assets/...';
  const destinationPanelItems = pageData.destinations.countries.map((country) => ({
    title: country.title,
    description: country.description,
    tag: country.tag,
    image: null // Image prop commented out / handled gracefully with fallback styling
  }));

  // 4. Typical Day Steps for StepByStepGuide
  const typicalDaySteps = pageData.typicalDay.steps.map((step) => ({
    title: step.title,
    description: step.description
  }));

  // 5. Lodge Selection Criteria for DetailedInclusionsList
  const lodgeSelectionItems = pageData.lodgeSelection.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs
  }));

  // 6. Social & Over 50 Features for FeatureGrid
  const socialOver50Features = pageData.meetingPeopleAndOver50.features.map((feat) => ({
    title: feat.title,
    description: feat.description,
    icon: feat.icon || "Compass"
  }));

  // 7. Cost & Single Supplement Pillars for CurvilinearGrid
  const costSupplementItems = pageData.costAndSupplements.supplementChecklist.points.map((pt, idx) => ({
    title: `Key Factor 0${idx + 1}`,
    description: pt,
    icon: "Shield",
    features: ["Verified Solo Terms"]
  }));

  // 8. 10 Evaluation Pillars for ExpertRulesGrid
  const tripsAndShipsRules = pageData.howTripsAndShipsPlans.evaluationPillars.map((pillar, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    title: pillar.title,
    text: pillar.desc
  }));

  // 9. FAQ Accordion Items
  const faqData = {
    title: "Frequently Asked Questions About African Safaris for Solo Women",
    subtitle: "Clear, authoritative guidance on safety, single supplements, small-group dynamics, lodge selection, and packing.",
    items: pageData.faqs ? pageData.faqs.map(faq => ({
      question: faq.question || faq.name,
      answer: faq.answer || (faq.acceptedAnswer && faq.acceptedAnswer.text)
    })) : pageData.schema["@graph"][3].mainEntity.map((faq) => ({
      question: faq.name,
      answer: faq.acceptedAnswer.text
    }))
  };

  // 10. Related Hub Guides for InteractivePillarHubGrid
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

        {/* ─── 2. WHY CHOOSE A LUXURY SAFARI AS A SOLO WOMAN? (EditorialIntroSection Component) ─── */}
        <div className="relative">
          <EditorialIntroSection
            eyebrow={pageData.whyChooseSafari.eyebrow}
            heading={pageData.whyChooseSafari.title}
            paragraphs={[
              pageData.whyChooseSafari.lead,
              pageData.whyChooseSafari.sublead,
              pageData.whyChooseSafari.conclusion
            ]}
            image={null}
            placeholderLabel="SOLO FEMALE LUXURY SAFARI EXPERIENCE"
            badgeTitle="Supported Adventure"
            badgeDescription="Independent exploration surrounded by verified lodge hosts, trackers, and private logistics."
            highlights={pageData.whyChooseSafari.features.slice(0, 4)}
          />
        </div>

        {/* ─── 3. ARE AFRICAN SAFARIS SAFE FOR SOLO WOMEN? (ExpertAuthorityChecklist Component) ─── */}
        <div className="relative">
          <ExpertAuthorityChecklist
            title={pageData.safetySection.title}
            subtitle={`${pageData.safetySection.subtitle} ${pageData.safetySection.lead}`}
            points={safetyChecklistPoints}
          />
          {/* Safety Interlink Callout Box */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                {pageData.safetySection.advisorNote}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-800 font-semibold">
                {pageData.safetySection.interlinkText}{' '}
                <Link
                  to={pageData.safetySection.interlinkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-gold-600 transition-colors"
                >
                  {pageData.safetySection.interlinkLabel} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 4. WHAT IS THE BEST TYPE OF SAFARI FOR A SOLO WOMAN? (TravelerProfileTabs Component) ─── */}
        <div className="relative">
          <TravelerProfileTabs
            title={pageData.safariTypes.title}
            subtitle={pageData.safariTypes.subtitle}
            profiles={safariTypeProfiles}
          />
        </div>

        {/* ─── 5. LUXURY SAFARI OPERATORS FOR SOLO WOMEN (ShipPhilosophyFaceoff Component) ─── */}
        <div className="relative">
          <ShipPhilosophyFaceoff
            data={pageData.operators}
            regentImage={null}
            vikingImage={null}
            regentImageAlt="Abercrombie and Kent Safari Experience"
            vikingImageAlt="Micato Safaris Luxury Experience"
          />
          {/* Operator Notice Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="p-5 bg-gold-50/80 rounded-2xl border border-gold-200 shadow-sm">
              <p className="font-sans text-xs sm:text-sm text-navy-950 font-bold leading-relaxed">
                {pageData.operators.importantNote}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 6. WHERE CAN SOLO WOMEN GO ON SAFARI? (InteractiveDestinationPanels Component) ─── */}
        <div className="relative">
          <InteractiveDestinationPanels
            title={pageData.destinations.title}
            description={pageData.destinations.subtitle}
            items={destinationPanelItems}
          />
          {/* Destinations Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="font-sans text-sm text-slate-700 leading-relaxed">
                Looking for broader destination inspiration?{' '}
                <Link
                  to="/luxury-solo-womens-travel/best-destinations/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-gold-600 transition-colors"
                >
                  Explore Best Destinations for Solo Women &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 7. WHAT IS A TYPICAL DAY ON A LUXURY SAFARI? (StepByStepGuide Component) ─── */}
        <div className="relative">
          <StepByStepGuide
            title={pageData.typicalDay.title}
            subtitle={pageData.typicalDay.subtitle}
            steps={typicalDaySteps}
          />
        </div>

        {/* ─── 8. WILL I BE ALONE ON A SAFARI? (EditorialIntroSplit Component) ─── */}
        <div className="relative">
          <EditorialIntroSplit
            eyebrow={pageData.willIBeAlone.eyebrow}
            heading={pageData.willIBeAlone.title}
            paragraphs={pageData.willIBeAlone.paragraphs}
            ctaText="Plan My African Safari"
            ctaLink="/contact"
          />
        </div>

        {/* ─── 9. SOLO SAFARI VS. PRIVATE SAFARI (ComparisonTable Component) ─── */}
        <div className="relative bg-slate-50 py-4">
          <ComparisonTable
            data={pageData.comparisonTable}
          />
          {/* Table Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-6 mb-16 text-center relative z-20">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
                {pageData.comparisonTable.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 10. WHAT SHOULD SOLO WOMEN LOOK FOR IN A SAFARI LODGE? (DetailedInclusionsList Component) ─── */}
        <div className="relative">
          <DetailedInclusionsList
            title={pageData.lodgeSelection.title}
            intro={[pageData.lodgeSelection.subtitle]}
            items={lodgeSelectionItems}
          />
        </div>

        {/* ─── 11. SOCIAL EASE & WOMEN OVER 50 (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.meetingPeopleAndOver50.title}
            subtitle={pageData.meetingPeopleAndOver50.subtitle}
            features={socialOver50Features}
          />
          {/* Over 50 Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.meetingPeopleAndOver50.over50Interlink.text}{' '}
                <Link
                  to={pageData.meetingPeopleAndOver50.over50Interlink.url}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-gold-600 transition-colors"
                >
                  {pageData.meetingPeopleAndOver50.over50Interlink.label} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 12. COST & SINGLE SUPPLEMENTS (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.costAndSupplements.title}
            subtitle="PRICING TRANSPARENCY & SINGLE SUPPLEMENTS"
            paragraphs={[
              pageData.costAndSupplements.subtitle,
              pageData.costAndSupplements.lead,
              pageData.costAndSupplements.supplementChecklist.lead
            ]}
            items={costSupplementItems}
          />
          {/* Cost Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 -mt-8 mb-16 text-center relative z-20">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.costAndSupplements.costInterlink.text}{' '}
                <Link
                  to={pageData.costAndSupplements.costInterlink.url}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-gold-600 transition-colors"
                >
                  {pageData.costAndSupplements.costInterlink.label} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 13. WHAT SHOULD I PACK FOR A LUXURY SAFARI? (GenericChecklistCards Component) ─── */}
        <div className="relative">
          <GenericChecklistCards
            title={pageData.packingGuide.title}
            subtitle="PRACTICAL PACKING CHECKLIST"
            cards={pageData.packingGuide.cards}
          />
        </div>

        {/* ─── 14. HOW TRIPS & SHIPS PLANS SAFARIS FOR SOLO WOMEN (ExpertRulesGrid Component) ─── */}
        <div className="relative">
          <ExpertRulesGrid
            title={pageData.howTripsAndShipsPlans.title}
            subtitle={`${pageData.howTripsAndShipsPlans.subtitle} ${pageData.howTripsAndShipsPlans.conclusion}`}
            rules={tripsAndShipsRules}
          />
        </div>

       
        {/* ─── 16. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion
          data={faqData}
        />

        {/* ─── 17. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <InteractivePillarHubGrid
          title={pageData.relatedGuides.title}
          subtitle={pageData.relatedGuides.subtitle}
          items={relatedHubGuides}
        />

        {/* ─── 18. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
        <div className="relative">
          <ExpertCredentials
            name={pageData.author.name}
            title={pageData.author.role}
            bio={pageData.author.bio}
            ctaText={pageData.author.ctaText}
            ctaLink={pageData.author.ctaLink}
            bottomText={`Last Updated: ${pageData.author.lastUpdated}`}
          />
        </div>

        {/* ─── 19. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
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

export default SoloAfricanSafaris;
