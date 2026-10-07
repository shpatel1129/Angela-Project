import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CardGrid from '@/components/ui/CardGrid';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets (Commented out per project preference)
// import SoloHeroImg from "../../../assets/Seabourn/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
// import SoloCruiseImg from "../../../assets/Seabourn/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
// import SoloOverviewImg from "../../../assets/Seabourn/SeabournCruises/seabourn-ultra-luxury-yacht-ship-overview.jpg";
// import SoloSuitesImg from "../../../assets/Seabourn/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
// import AboutImage from "../../../assets/AboutAngela.jpeg";

const SoloLuxuryCruises = () => {

  // 1. Luxury Cruise Lines for TravelerProfileTabs
  const cruiseLineProfiles = pageData.cruiseLines.lines.map((line) => ({
    name: line.name,
    tagline: line.tagline,
    quote: line.quote,
    recommendation: line.recommendation,
    reason: line.reason,
    whyFits: line.whyFits,
    // image: null,
    alt: `${line.name} - Luxury Solo Cruise Line`,
    placeholderLabel: `${line.name.toUpperCase()}`
  }));

  // 2. How to Choose Cards for CardGrid
  const howToChooseCards = pageData.howToChoose.questions.map((q) => ({
    title: q.title,
    description: q.description,
    icon: q.icon || "Compass"
  }));

  // 3. Ocean vs River Faceoff Data for ShipPhilosophyFaceoff
  const faceoffData = {
    title: pageData.oceanVsRiver.title,
    subtitle: pageData.oceanVsRiver.subtitle,
    regent: {
      title: pageData.oceanVsRiver.ocean.title,
      name: pageData.oceanVsRiver.ocean.title,
      badge: "Ocean Voyages",
      tagline: "Worldwide Ocean & Coastal Voyages",
      description: pageData.oceanVsRiver.ocean.summary,
      features: pageData.oceanVsRiver.ocean.points
    },
    viking: {
      title: pageData.oceanVsRiver.river.title,
      name: pageData.oceanVsRiver.river.title,
      badge: "River Waterways",
      tagline: "Intimate Waterway & Cultural Navigation",
      description: pageData.oceanVsRiver.river.summary,
      features: pageData.oceanVsRiver.river.points
    }
  };

  // 4. Women Over 50 Highlights for HighlightsSplit
  const womenOver50Highlights = [
    {
      title: "Tailored Experiences Over Age Labels",
      description: pageData.womenOver50.lead,
      // image: null,
      alt: "Solo Travel for Women Over 50",
      icon: "Sparkles",
      bulletPoints: pageData.womenOver50.interests
    }
  ];

  // 5. How Trips & Ships Can Help for CurvilinearGrid
  const howWeHelpIcons = ["ship", "map", "Compass", "user", "dollar", "Activity", "utensils", "check"];
  const howWeHelpItems = pageData.howWeHelp.helpItems.map((item, idx) => ({
    title: item.title,
    description: item.desc,
    icon: howWeHelpIcons[idx % howWeHelpIcons.length]
  }));

  // 6. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about planning safe, inspiring, and exceptional luxury cruises for solo women.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };


  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
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
          pageData.hero.sublead,
          pageData.hero.conclusion
        ]}
        // backgroundImage={SoloHeroImg}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content">
        {/* ─── 2. WHY CHOOSE A LUXURY CRUISE AS A SOLO TRAVELER (AsymmetricStoryIntro Component) ─── */}
        <AsymmetricStoryIntro
          eyebrow={pageData.whyChoose.eyebrow}
          heading={pageData.whyChoose.title}
          paragraphs={[
            pageData.whyChoose.lead,
            pageData.whyChoose.sublead,
            pageData.whyChoose.conclusion
          ]}
          highlights={pageData.whyChoose.highlights}
          // image1={SoloOverviewImg}
          // image2={SoloSuitesImg}
          ctaText="Find My Luxury Solo Cruise"
          ctaLink="/contact"
        />

        {/* ─── 3. WHAT SHOULD SOLO WOMEN LOOK FOR IN A LUXURY CRUISE? (FeatureGrid Component) ─── */}
        <FeatureGrid
          title={pageData.whatToLookFor.title}
          subtitle={pageData.whatToLookFor.subtitle}
          features={pageData.whatToLookFor.features}
        />

        {/* ─── 4. LUXURY CRUISE LINES TO CONSIDER (TravelerProfileTabs Component) ─── */}
        <div className="relative">
          <TravelerProfileTabs
            title={pageData.cruiseLines.title}
            subtitle={pageData.cruiseLines.subtitle}
            profiles={cruiseLineProfiles}
          />
         
        </div>

        {/* ─── 5. HOW SINGLE SUPPLEMENTS AFFECT SOLO CRUISE PRICING (ValueBreakdownSplit Component) ─── */}
        <ValueBreakdownSplit
          title={pageData.singleSupplements.title}
          subtitle={pageData.singleSupplements.subtitle}
          includedTitle={pageData.singleSupplements.pricingFactorsTitle}
          extrasTitle={pageData.singleSupplements.reducedSupplementsTitle}
          included={pageData.singleSupplements.pricingFactors}
          extras={pageData.singleSupplements.reducedSupplementsLimitations}
          // image={SoloSuitesImg}
        />

        {/* Single Supplement Value Callout & CTA */}
        <div className="bg-stone-50 py-12 border-y border-stone-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-light">
              {pageData.singleSupplements.lead}
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-500 mb-8 italic">
              {pageData.singleSupplements.verificationNote}
            </p>
            <Link
              to={pageData.singleSupplements.ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-950 text-white font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-navy-900 transition-all rounded-full shadow-lg hover:scale-105"
            >
              {pageData.singleSupplements.ctaText}
            </Link>
          </div>
        </div>

        {/* ─── 6. HOW SOCIAL IS A LUXURY CRUISE? (EditorialIntroSplit Component) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.socialVibe.eyebrow}
          heading={pageData.socialVibe.title}
          paragraphs={[
            pageData.socialVibe.subtitle,
            ...pageData.socialVibe.opportunities.map(opp => `${opp.title}: ${opp.desc}`),
            pageData.socialVibe.balanceLead,
            pageData.socialVibe.balanceText
          ]}
          // primaryImage={SoloCruiseImg}
          // secondaryImage={SoloOverviewImg}
        />

        {/* ─── 7. HOW TO CHOOSE THE RIGHT LUXURY CRUISE AS A SOLO WOMAN (CardGrid Component) ─── */}
        <CardGrid
          title={pageData.howToChoose.title}
          subtitle={pageData.howToChoose.subtitle}
          cards={howToChooseCards}
          columns={3}
          stagger={false}
        />

        {/* ─── 8. LUXURY OCEAN CRUISE VS. RIVER CRUISE FOR SOLO TRAVELERS (ShipPhilosophyFaceoff Component) ─── */}
        <div className="relative">
          <ShipPhilosophyFaceoff
            data={faceoffData}
            // regentImage={SoloCruiseImg}
            regentImageAlt="Luxury Ocean Cruise for Solo Travelers"
            regentImagePos="object-center"
            // vikingImage={SoloOverviewImg}
            vikingImageAlt="Luxury River Cruise for Solo Travelers"
            vikingImagePos="object-center"
          />
          {/* River Cruise Interlink Box */}
          <div className="max-w-3xl mx-auto px-6 -mt-6 mb-16 text-center">
            <p className="font-sans text-sm sm:text-base text-slate-700 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              {pageData.oceanVsRiver.interlinkText}{' '}
              <Link
                to={pageData.oceanVsRiver.interlinkUrl}
                className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
              >
                {pageData.oceanVsRiver.interlinkTitle} &rarr;
              </Link>
            </p>
          </div>
        </div>

        
        {/* ─── 13. WOMEN WHO WANDER PROMO (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.womenWhoWanderPromo.title}
          description={pageData.womenWhoWanderPromo.description}
          buttonText={pageData.womenWhoWanderPromo.ctaText}
          buttonLink={pageData.womenWhoWanderPromo.ctaLink}
          // image={SoloOverviewImg}
          theme="dark"
        />



        {/* ─── 9. LUXURY SOLO CRUISES FOR WOMEN OVER 50 (HighlightsSplit Component) ─── */}
        <div className="relative">
          <HighlightsSplit
            title={pageData.womenOver50.title}
            items={womenOver50Highlights}
          />
          {/* Women Over 50 Interlink Box */}
          <div className="max-w-3xl mx-auto px-6 -mt-6 mb-16 text-center">
            <p className="font-sans text-sm sm:text-base text-slate-700 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              {pageData.womenOver50.linkText}{' '}
              <Link
                to={pageData.womenOver50.linkUrl}
                className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
              >
                {pageData.womenOver50.linkTitle} &rarr;
              </Link>
            </p>
          </div>
        </div>

        {/* ─── 10. HOW TRIPS & SHIPS CAN HELP (CurvilinearGrid Component) ─── */}
        <CurvilinearGrid
          title={pageData.howWeHelp.title}
          subtitle="EXPERT CRUISE ADVISORY & PLANNING"
          paragraphs={[pageData.howWeHelp.subtitle]}
          items={howWeHelpItems}
        />

       

        {/* ─── 11. ANGELA HUGHES PROFESSIONAL CREDENTIALS & EEAT (ExpertCredentials Component) ─── */}
        <ExpertCredentials
          name={pageData.expert.name}
          title={pageData.expert.title}
          badge={pageData.expert.badge}
          experienceBadge={pageData.expert.experienceBadge}
          authorityBoxTitle={pageData.expert.authorityBoxTitle}
          authoritySubtitle={pageData.expert.authoritySubtitle}
          bio={pageData.expert.bio}
          credentials={pageData.expert.credentials}
          // image={AboutImage}
          ctaText="Find My Luxury Solo Cruise With Angela"
          ctaLink="/contact"
        />

        {/* ─── 12. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion data={faqData} />

        
        {/* ─── 14. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.finalConversion.title}
          description={pageData.finalConversion.description}
          buttonText={pageData.finalConversion.ctaText}
          buttonLink={pageData.finalConversion.ctaLink}
          // image={SoloCruiseImg}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default SoloLuxuryCruises;
