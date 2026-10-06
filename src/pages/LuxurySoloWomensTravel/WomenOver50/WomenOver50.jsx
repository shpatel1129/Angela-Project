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
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import CruiseLineShowcase from '@/components/ui/CruiseLineShowcase';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import InclusionsList from '@/components/ui/InclusionsList';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Assets (Commented out per project preference)
// import OptionOceanImg from "../../../assets/Seabourn/SeabournCruises/seabourn-ocean-cruises-luxury-yacht-experience.jpg";
// import OptionRiverImg from "../../../assets/Seabourn/SeabournCruises/seabourn-complete-fleet-overview-and-ships-guide.jpg";
// import OptionWomenToursImg from "../../../assets/Seabourn/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
// import OptionSafariImg from "../../../assets/Seabourn/SeabournCruises/seabourn-purpose-built-ultra-luxury-expedition-cruises.jpg";
// import OptionIndependentImg from "../../../assets/Seabourn/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
// import Over50HeroImg from "../../../assets/Seabourn/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
// import Over50SoloImg from "../../../assets/Seabourn/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
// import Over50OverviewImg from "../../../assets/Seabourn/SeabournCruises/seabourn-ultra-luxury-yacht-ship-overview.jpg";
// import Over50SuitesImg from "../../../assets/Seabourn/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
// import AboutImage from "../../../assets/AboutAngela.jpeg";

const WomenOver50 = () => {

  // 1. Best Travel Options for CruiseLineShowcase (Image-rich cards)
  const bestOptionsShowcaseItems = pageData.bestOptions.options.map((opt) => ({
    title: opt.title,
    description: opt.description,
    category: opt.linkText,
    linkUrl: opt.linkUrl,
    linkText: opt.linkText
  }));

  // const bestOptionsImages = [
  //   OptionOceanImg,
  //   OptionRiverImg,
  //   OptionWomenToursImg,
  //   OptionSafariImg,
  //   OptionIndependentImg
  // ];

  // 2. Age Profiles for TravelerProfileTabs
  const ageProfiles = pageData.ageDecades.profiles.map((profile) => ({
    name: profile.name,
    tagline: profile.tagline,
    quote: profile.quote,
    recommendation: profile.recommendation,
    reason: profile.reason,
    whyFits: profile.whyFits,
    // image: null,
    alt: `${profile.name} - Solo Travel Profile`,
    placeholderLabel: profile.name.toUpperCase()
  }));

  // 3. Single Supplements & Cost Breakdown for ValueBreakdownSplit
  const singleSupplementsIncluded = [
    {
      title: "What It Is",
      description: "A single supplement is an additional charge that can apply when one person occupies accommodations designed and priced for two travelers."
    },
    {
      title: "Where It Applies",
      description: "This is especially relevant when comparing cruises, tours, and other luxury travel experiences."
    },
    {
      title: "Supplier Policies",
      description: "Single supplement policies vary significantly between suppliers and departures."
    },
    {
      title: "Solo Travel Opportunities",
      description: "Some experiences may offer solo accommodations, reduced supplements, or other solo traveler pricing opportunities."
    },
    {
      title: "Planning Ahead",
      description: "Because these offers can change, it is important to review the current pricing and terms before booking."
    }
  ];

  const singleSupplementsExtras = [
    {
      title: "Destination & Seasonality",
      description: pageData.singleSupplementsAndCost.costFactors[0]
    },
    {
      title: "Trip Length & Pacing",
      description: pageData.singleSupplementsAndCost.costFactors[1]
    },
    {
      title: "Accommodation Category",
      description: pageData.singleSupplementsAndCost.costFactors[2]
    },
    {
      title: "Operator & Vessel Tier",
      description: pageData.singleSupplementsAndCost.costFactors[3]
    },
    {
      title: "Touring Style",
      description: pageData.singleSupplementsAndCost.costFactors[4]
    },
    {
      title: "Inclusions & Dining",
      description: pageData.singleSupplementsAndCost.costFactors[5]
    },
    {
      title: "Excursions & Guides",
      description: pageData.singleSupplementsAndCost.costFactors[6]
    },
    {
      title: "Airfare & Transfers",
      description: pageData.singleSupplementsAndCost.costFactors[7]
    },
    {
      title: "Single Supplement Terms",
      description: pageData.singleSupplementsAndCost.costFactors[8]
    },
    {
      title: "Travel Windows",
      description: pageData.singleSupplementsAndCost.costFactors[9]
    }
  ];

  // 4. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions About Solo Travel for Women Over 50",
    subtitle: "Everything you need to know about planning safe, inspiring, and exceptional luxury journeys.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 5. Related Pillar Guides
  const relatedHubGuides = pageData.relatedGuides.guides.map((guide) => ({
    title: guide.title,
    category: guide.category,
    description: guide.description,
    // image: null,
    alt: guide.title,
    badgeCount: guide.badgeCount,
    links: guide.links,
    mainUrl: guide.mainUrl
  }));

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
        // backgroundImage={Over50HeroImg}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content">
        {/* ─── 2. IS SOLO TRAVEL AFTER 50 RIGHT FOR YOU? (AsymmetricStoryIntro Component) ─── */}
        <AsymmetricStoryIntro
          eyebrow={pageData.isItRight.eyebrow}
          heading={pageData.isItRight.title}
          paragraphs={[
            pageData.isItRight.lead,
            pageData.isItRight.sublead,
            pageData.isItRight.conclusion
          ]}
          highlights={pageData.isItRight.highlights}
          // image1={Over50OverviewImg}
          // image2={Over50SuitesImg}
          ctaText="Plan Your Luxury Solo Journey"
          ctaLink="/contact"
        />

        {/* ─── 3. WHY MORE WOMEN OVER 50 ARE CHOOSING SOLO TRAVEL (FeatureGrid Component) ─── */}
        <FeatureGrid
          title={pageData.whyChoose.title}
          subtitle={pageData.whyChoose.subtitle}
          features={pageData.whyChoose.features}
        />

        {/* ─── 4. WHAT MAKES LUXURY SOLO TRAVEL DIFFERENT AFTER 50? (CurvilinearGrid Component) ─── */}
        <CurvilinearGrid
          title={pageData.whatMakesDifferent.title}
          subtitle="THE LUXURY DIFFERENCE AFTER 50"
          paragraphs={[
            pageData.whatMakesDifferent.subtitle,
            pageData.whatMakesDifferent.comfortLead
          ]}
          items={pageData.whatMakesDifferent.comfortItems}
        />


        {/* ─── 5. BEST LUXURY TRAVEL OPTIONS FOR WOMEN OVER 50 (CruiseLineShowcase Component) ─── */}
        <div className="relative">
          <CruiseLineShowcase
            title={pageData.bestOptions.title}
            eyebrow="TAILORED EXPERIENCES FOR WOMEN OVER 50"
            subtitle={pageData.bestOptions.subtitle}
            items={bestOptionsShowcaseItems}
            // images={bestOptionsImages}
          />
          {/* Quick Subpage Navigation Chips */}
          <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16 relative z-20">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg flex flex-wrap items-center justify-center gap-3">
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-navy-950 mr-2">
                Explore Detailed Guides:
              </span>
              {pageData.bestOptions.options.map((opt, idx) => (
                <Link
                  key={idx}
                  to={opt.linkUrl}
                  className="inline-flex items-center px-4 py-2 bg-stone-50 hover:bg-navy-950 hover:text-white text-navy-900 border border-stone-200 rounded-full font-sans text-xs font-semibold transition-all shadow-sm group"
                >
                  <span>{opt.linkText}</span>
                  <span className="ml-1.5 text-gold-500 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 6. HOW TO TRAVEL SOLO COMFORTABLY AFTER 50 (DetailedInclusionsList Component) ─── */}
        <DetailedInclusionsList
          title={pageData.travelComfortably.title}
          intro={[pageData.travelComfortably.subtitle]}
          items={pageData.travelComfortably.pillars}
        />

        {/* ─── 7. IS SOLO TRAVEL SAFE FOR WOMEN OVER 50? (InclusionsList Component) ─── */}
        <div className="relative">
          <InclusionsList
            title={pageData.safety.title}
            expertNote={`${pageData.safety.subtitle}. ${pageData.safety.lead}`}
            inclusions={pageData.safety.points}
            // image={Over50SoloImg}
          />
          {/* Safety Interlink Box */}
          <div className="max-w-3xl mx-auto px-6 -mt-6 mb-16 text-center">
            <p className="font-sans text-sm sm:text-base text-slate-700 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              {pageData.safety.conclusion}{' '}
              <Link
                to={pageData.safety.linkUrl}
                className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
              >
                {pageData.safety.linkTitle} &rarr;
              </Link>
            </p>
          </div>
        </div>

        {/* ─── 8. HOW TO MEET PEOPLE WHILE TRAVELING ALONE (EditorialIntroSplit Component) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.meetPeople.eyebrow}
          heading={pageData.meetPeople.title}
          paragraphs={[
            pageData.meetPeople.subtitle,
            pageData.meetPeople.lead,
            pageData.meetPeople.sublead
          ]}
          // primaryImage={Over50OverviewImg}
          // secondaryImage={Over50SuitesImg}
          ctaText={pageData.meetPeople.ctaText}
          ctaLink={pageData.meetPeople.ctaLink}
        />

        {/* ─── 9. SOLO TRAVEL FOR WOMEN IN THEIR 50S, 60S AND BEYOND (TravelerProfileTabs Component) ─── */}
        <div className="relative">
          <TravelerProfileTabs
            title={pageData.ageDecades.title}
            subtitle={pageData.ageDecades.subtitle}
            profiles={ageProfiles}
          />
        </div>

        {/* ─── 10. SOLO TRAVEL VS. WOMEN-ONLY GROUP TRAVEL (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable data={pageData.comparisonTable} />
          {/* Table Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.comparisonTable.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 11. WHAT ABOUT SINGLE SUPPLEMENTS & TRIP INVESTMENT? (ValueBreakdownSplit Component) ─── */}
        <div className="relative">
          <ValueBreakdownSplit
            title={pageData.singleSupplementsAndCost.title}
            subtitle={pageData.singleSupplementsAndCost.costText}
            includedTitle={pageData.singleSupplementsAndCost.supplementsTitle}
            extrasTitle={pageData.singleSupplementsAndCost.costTitle}
            included={singleSupplementsIncluded}
            extras={singleSupplementsExtras}
          />
          {/* Dual Cost & Supplements Interlink Box */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
                {pageData.singleSupplementsAndCost.costText}
              </p>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  to={pageData.singleSupplementsAndCost.linkSupplementsUrl}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-navy-950 text-white font-sans text-xs font-bold tracking-wider uppercase rounded-full hover:bg-navy-900 transition-all shadow"
                >
                  {pageData.singleSupplementsAndCost.linkSupplementsTitle} &rarr;
                </Link>
                <Link
                  to={pageData.singleSupplementsAndCost.linkCostUrl}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-stone-100 text-navy-950 font-sans text-xs font-bold tracking-wider uppercase rounded-full hover:bg-stone-200 transition-all border border-stone-200"
                >
                  {pageData.singleSupplementsAndCost.linkCostTitle} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 12. HOW TRIPS & SHIPS HELPS WOMEN OVER 50 TRAVEL SOLO (ExpertRulesGrid Component) ─── */}
        <ExpertRulesGrid
          title={pageData.howTripsAndShipsHelps.title}
          subtitle={pageData.howTripsAndShipsHelps.subtitle}
          rules={pageData.howTripsAndShipsHelps.considerations}
        />

        {/* ─── 13. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
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
          ctaText="Plan My Solo Journey With Angela"
          ctaLink="/contact"
        />

        {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 15. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
          <InteractivePillarHubGrid
            title={pageData.relatedGuides.title}
            subtitle={pageData.relatedGuides.subtitle}
            items={relatedHubGuides}
            variant="destination"
          />
        </div>

        {/* ─── 16. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
        <CenterCTA
          title={pageData.finalConversion.title}
          description={pageData.finalConversion.description}
          buttonText={pageData.finalConversion.ctaText}
          buttonLink={pageData.finalConversion.ctaLink}
          // image={Over50HeroImg}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default WomenOver50;
