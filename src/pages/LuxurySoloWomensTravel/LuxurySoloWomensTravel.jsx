import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import GrandBentoFeatures from '@/components/ui/GrandBentoFeatures';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import AlternatingRiverShowcase from '@/components/ui/AlternatingRiverShowcase';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import SmartSpendingSplit from '@/components/ui/SmartSpendingSplit';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets
// import AboutImage from "../../assets/AboutAngela.jpeg";
// import SoloHeroImg from "../../assets/Seabourn/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
// import SoloOverviewImg from "../../assets/Seabourn/SeabournCruises/seabourn-ultra-luxury-yacht-ship-overview.jpg";
// import SoloSuitesImg from "../../assets/Seabourn/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
// import SoloCruiseImg from "../../assets/Seabourn/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
// import SoloRiverImg from "../../assets/Seabourn/SeabournCruises/seabourn-worldwide-destination-focused-itineraries.jpg";
// import SoloGroupImg from "../../assets/Seabourn/SeabournCruises/seabourn-cultural-travelers-heritage-exploration.jpg";
// import SoloOver50Img from "../../assets/Seabourn/SeabournCruises/seabourn-mindful-living-wellness-spa-relaxation.jpg";
// import SoloSafariImg from "../../assets/Seabourn/SeabournCruises/seabourn-purpose-built-ultra-luxury-expedition-cruises.jpg";
// import SoloOnboardLifeImg from "../../assets/Seabourn/SeabournCruises/seabourn-onboard-luxury-lifestyle-all-inclusive-amenities.jpg";
// import SoloShoreImg from "../../assets/Seabourn/SeabournCruises/seabourn-curated-shore-excursions-unesco-tours.jpg";
// import SoloCtaImg from "../../assets/Seabourn/SeabournCruises/seabourn-luxury-vacation-planning-expert-quote-cta.jpg";

const LuxurySoloWomensTravel = () => {

  // 1. Is Luxury Solo Travel Right for You Cards for GrandBentoFeatures
  const isItRightBentoFeatures = pageData.isItRight.cards.map((card, idx) => ({
    title: card.title,
    description: card.description,
    icon: card.icon,
    // image: [SoloCruiseImg, SoloRiverImg, SoloSuitesImg, SoloGroupImg, SoloOverviewImg][idx] || null,
    alt: card.title,
    placeholderLabel: card.title
  }));

  // 2. Women-Only Small-Group Tours for HighlightsSplit
  const womenOnlyHighlights = pageData.womenOnlyTours.items.map((item, idx) => ({
    title: item.title,
    description: item.desc,
    // image: [SoloGroupImg, SoloShoreImg, SoloOverviewImg][idx] || null,
    alt: item.title,
    icon: "Heart",
    bulletPoints: item.best
  }));

  // 3. Best Destinations for TravelerProfileTabs
  const destinationProfiles = pageData.bestDestinations.profiles.map((dest, idx) => ({
    name: dest.name,
    tagline: dest.tagline,
    quote: dest.quote,
    recommendation: dest.recommendation,
    reason: dest.reason,
    whyFits: dest.whyFits,
    // image: [SoloRiverImg, SoloCruiseImg, SoloSuitesImg, SoloSafariImg, SoloOverviewImg, SoloGroupImg][idx] || null,
    alt: `${dest.name} - Luxury Solo Female Destination`,
    placeholderLabel: `${dest.name.toUpperCase()} DESTINATION`
  }));

  // 4. Solo River Cruising for AlternatingRiverShowcase
  const riverShowcaseItems = pageData.riverCruises.rivers.map((river, idx) => ({
    name: river.name,
    description: river.description,
    bestFor: river.bestFor,
    highlights: river.highlights,
    // image: [SoloRiverImg, SoloShoreImg][idx]
  }));

  // 5. African Safaris for LuxuryZigZagShowcase
  const safariZigZagItems = pageData.africanSafaris.items.map((item, idx) => ({
    category: item.category,
    title: item.title,
    description: item.description,
    bestFor: item.bestFor,
    // image: [SoloSafariImg, SoloShoreImg][idx],
    alt: `${item.title} - Luxury African Safari for Solo Women`,
    placeholderLabel: `${item.title.toUpperCase()}`
  }));

  // 6. How Trips & Ships Plans Luxury Solo Vacations for GrandBentoFeatures
  const howWePlanBentoFeatures = pageData.howWePlan.features.map((feature, idx) => ({
    title: feature.title,
    description: feature.description,
    icon: "Compass",
    // image: [SoloCruiseImg, SoloRiverImg, SoloGroupImg, SoloSuitesImg, SoloSafariImg, SoloOverviewImg, SoloOver50Img, SoloOnboardLifeImg][idx] || null,
    alt: feature.title,
    placeholderLabel: feature.title
  }));

  // 7. Interactive Pillar Hub Guides
  const pillarHubGuides = pageData.whySolo.guides.map((guide, idx) => ({
    title: guide.title,
    category: guide.category,
    description: guide.description,
    // image: [SoloCruiseImg, SoloGroupImg, SoloOver50Img][idx] || null,
    alt: guide.title,
    badgeCount: guide.badgeCount,
    links: guide.links,
    mainUrl: guide.mainUrl
  }));

  // 8. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about planning safe, inspiring, and exceptional luxury solo travel for women.",
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
        {/* ─── 2. WHY MORE WOMEN ARE CHOOSING TO TRAVEL SOLO (EditorialIntroSection Component) ─── */}
        <EditorialIntroSection
          eyebrow={pageData.whySolo.eyebrow}
          heading={pageData.whySolo.title}
          paragraphs={[
            pageData.whySolo.quote,
            pageData.whySolo.lead,
            pageData.whySolo.sublead,
            pageData.whySolo.conclusion
          ]}
          highlights={pageData.whySolo.highlights}
          badgeTitle="Empowerment & Support"
          badgeDescription="Combining true independence with white-glove luxury logistics."
          placeholderLabel="WHY MORE WOMEN CHOOSE SOLO TRAVEL"
        // image={SoloOverviewImg}
        />

        {/* ─── CURATED SOLO GUIDES HUB (InteractivePillarHubGrid Component) ─── */}
        <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
          <InteractivePillarHubGrid
            title="Explore Dedicated Solo Travel Guides & Programs"
            subtitle="Hover over any card below to slide open the guide drawer, access dedicated cruise reviews, women-only group itineraries, and over-50 planning resources."
            items={pillarHubGuides}
            variant="destination"
          />
        </div>

        {/* ─── 3. IS LUXURY SOLO TRAVEL RIGHT FOR YOU? (GrandBentoFeatures Component) ─── */}
        <GrandBentoFeatures
          title={pageData.isItRight.title}
          subtitle={pageData.isItRight.lead}
          features={isItRightBentoFeatures}
        />

        {/* ─── 4. BEST LUXURY CRUISES FOR SOLO WOMEN (EditorialFeatureShowcase Component) ─── */}
        <EditorialFeatureShowcase
          title={pageData.luxuryCruises.title}
          subtitle={`${pageData.luxuryCruises.intro} ${pageData.luxuryCruises.evaluating}`}
          // image={SoloCruiseImg}
          features={pageData.luxuryCruises.features}
        />

        {/* Best Luxury Cruises Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Cruise Pillar Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/solo-luxury-cruises/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Solo Luxury Cruises &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Find My Luxury Solo Cruise
            </Link>
          </div>
        </div>

        {/* ─── 5. WOMEN-ONLY SMALL-GROUP TOURS (HighlightsSplit Component) ─── */}
        <HighlightsSplit
          title={pageData.womenOnlyTours.title}
          items={womenOnlyHighlights}
        />

        {/* Women-Only Tours Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Group Travel Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/women-only-tours/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Women-Only Small-Group Tours &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Explore Women's Group Departures
            </Link>
          </div>
        </div>

        {/* ─── 6. LUXURY SOLO TRAVEL FOR WOMEN OVER 50 AND 60 (EditorialIntroSplit Component) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.womenOver50.eyebrow}
          heading={pageData.womenOver50.title}
          paragraphs={[
            pageData.womenOver50.quote,
            pageData.womenOver50.lead,
            pageData.womenOver50.safetyComfort,
            `${pageData.womenOver50.diverseTypes} ${pageData.womenOver50.verdict}`
          ]}
        // primaryImage={SoloOver50Img}
        // secondaryImage={SoloOnboardLifeImg}
        />

        {/* Women Over 50 Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Age 50+ & 60+ Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/women-over-50/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Luxury Solo Travel for Women Over 50 and 60 &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Plan Your Luxury Solo Journey
            </Link>
          </div>
        </div>

        {/* ─── 7. BEST DESTINATIONS FOR SOLO FEMALE TRAVELERS (TravelerProfileTabs Component) ─── */}
        <TravelerProfileTabs
          title={pageData.bestDestinations.title}
          subtitle={pageData.bestDestinations.subtitle}
          profiles={destinationProfiles}
        />

        {/* Best Destinations Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Worldwide Destinations Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/best-destinations/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Best Destinations for Solo Female Travelers &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Find My Ideal Solo Destination
            </Link>
          </div>
        </div>

        {/* ─── 8. HOW SINGLE SUPPLEMENTS WORK (ValueBreakdownSplit Component) ─── */}
        <ValueBreakdownSplit
          title={pageData.singleSupplement.title}
          subtitle={pageData.singleSupplement.subtitle}
          includedTitle={pageData.singleSupplement.includedTitle}
          extrasTitle={pageData.singleSupplement.extrasTitle}
          included={pageData.singleSupplement.included}
          extras={pageData.singleSupplement.extras}
        // image={SoloSuitesImg}
        />

        {/* Single Supplements Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Pricing & Supplement Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/single-supplement-cruises/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  How Single Supplements Work &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Ask About Solo Traveler Pricing
            </Link>
          </div>
        </div>

        {/* ─── 9. SOLO RIVER CRUISING (AlternatingRiverShowcase Component - 2 Images) ─── */}
        <AlternatingRiverShowcase
          title={pageData.riverCruises.title}
          description={pageData.riverCruises.description}
          rivers={riverShowcaseItems}
        />

        {/* Solo River Cruising Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated River Cruise Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/solo-river-cruises/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Solo River Cruising &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Explore Solo River Cruises
            </Link>
          </div>
        </div>

        {/* ─── 10. AFRICAN SAFARIS FOR SOLO WOMEN (LuxuryZigZagShowcase Component - 2 Images) ─── */}
        <LuxuryZigZagShowcase
          title={pageData.africanSafaris.title}
          subtitle={pageData.africanSafaris.subtitle}
          items={safariZigZagItems}
        />

        {/* African Safaris Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Safari Planning Guide
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/solo-african-safaris/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  African Safaris for Solo Women &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Plan My African Safari
            </Link>
          </div>
        </div>

        {/* ─── 11. SOLO TRAVEL VS. WOMEN-ONLY GROUP TRAVEL (ShipPhilosophyFaceoff Component) ─── */}
        <ShipPhilosophyFaceoff
          data={pageData.soloVsGroup.faceoff}
          // regentImage={SoloCruiseImg}
          regentImageAlt="Solo Travel Style - Complete Independence"
          regentImagePos="object-center"
          // vikingImage={SoloGroupImg}
          vikingImageAlt="Women-Only Group Travel - Shared Sisterhood"
          vikingImagePos="object-center"
        />

        {/* Solo vs Group Travel Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Travel Style Comparison
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/solo-vs-group-travel/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  Solo Travel vs. Women-Only Group Travel &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Help Me Choose the Right Travel Style
            </Link>
          </div>
        </div>

        {/* ─── 12. HOW MUCH DOES LUXURY SOLO TRAVEL COST? (SmartSpendingSplit Component) ─── */}
        <SmartSpendingSplit
          title={pageData.costGuide.title}
          subtitle={pageData.costGuide.subtitle}
          spendMore={pageData.costGuide.spendMore}
          spendLess={pageData.costGuide.spendLess}
        />

        {/* Cost Guide Interlink & Action CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-8 mb-20 relative z-20">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
                Dedicated Budget & Investment Breakdown
              </span>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete guide:{' '}
                <Link
                  to="/luxury-solo-womens-travel/solo-travel-cost/"
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  How Much Does Luxury Solo Travel Cost? &rarr;
                </Link>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 text-white hover:bg-navy-900 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all shrink-0 hover:scale-105"
            >
              Ask About Luxury Solo Travel Pricing
            </Link>
          </div>
        </div>

        {/* ─── 13. HOW TRIPS & SHIPS PLANS LUXURY SOLO VACATIONS (GrandBentoFeatures Component) ─── */}
        <GrandBentoFeatures
          title={pageData.howWePlan.title}
          subtitle={pageData.howWePlan.subtitle}
          features={howWePlanBentoFeatures}
        />

        {/* ─── 14. WOMEN WHO WANDER (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.womenWhoWander.title}
          description={pageData.womenWhoWander.description}
          buttonText={pageData.womenWhoWander.ctaText}
          buttonLink={pageData.womenWhoWander.ctaLink}
          // image={SoloGroupImg}
          theme="dark"
        />

        {/* ─── 15. ANGELA HUGHES LUXURY SOLO AUTHORITY (ExpertCredentials Component) ─── */}
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
          ctaText="Plan Your Solo Journey With Angela"
          ctaLink="/contact"
        />

        {/* ─── 16. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 17. FINAL CONVERSION SECTION (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.finalConversion.title}
          description={pageData.finalConversion.description}
          buttonText={pageData.finalConversion.ctaText}
          buttonLink={pageData.finalConversion.ctaLink}
          // image={SoloCtaImg}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default LuxurySoloWomensTravel;
