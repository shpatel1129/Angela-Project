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
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import InclusionsList from '@/components/ui/InclusionsList';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import CardGrid from '@/components/ui/CardGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Assets (Commented out per project preference)
// import TourHeroImg from "../../../assets/Seabourn/SeabournCruises/seabourn-luxury-cruise-ship-ocean-hero.jpg";
// import TourGroupImg from "../../../assets/Seabourn/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
// import TourOverviewImg from "../../../assets/Seabourn/SeabournCruises/seabourn-ultra-luxury-yacht-ship-overview.jpg";
// import TourSuitesImg from "../../../assets/Seabourn/SeabournCruises/seabourn-all-suite-oceanfront-veranda-accommodations.jpg";
// import AboutImage from "../../../assets/AboutAngela.jpeg";

const WomenOnlyTours = () => {

  // 1. Group vs Traditional Faceoff Data for ShipPhilosophyFaceoff
  const faceoffData = {
    title: pageData.groupVsTraditional.title,
    subtitle: pageData.groupVsTraditional.subtitle,
    regent: {
      title: pageData.groupVsTraditional.womenOnly.title,
      name: pageData.groupVsTraditional.womenOnly.title,
      badge: "Small-Group Travel",
      tagline: "Curated Exclusively for Women Travelers",
      description: pageData.groupVsTraditional.womenOnly.summary,
      features: pageData.groupVsTraditional.womenOnly.points
    },
    viking: {
      title: pageData.groupVsTraditional.traditional.title,
      name: pageData.groupVsTraditional.traditional.title,
      badge: "Traditional Tours",
      tagline: "Standard Large Mixed Group Departures",
      description: pageData.groupVsTraditional.traditional.summary,
      features: pageData.groupVsTraditional.traditional.points
    }
  };

  // 2. Who Are Tours For Profiles for TravelerProfileTabs
  const travelerProfiles = pageData.whoIsItFor.profiles.map((profile) => ({
    name: profile.name,
    tagline: profile.tagline,
    quote: profile.quote,
    recommendation: profile.recommendation,
    reason: profile.reason,
    whyFits: profile.whyFits,
    // image: null,
    alt: `${profile.name} - Women-Only Luxury Tour Profile`,
    placeholderLabel: profile.name.toUpperCase()
  }));

  // 3. How to Choose Cards for CardGrid
  const howToChooseCards = pageData.howToChoose.questions.map((q) => ({
    title: q.title,
    description: q.description,
    icon: q.icon || "Compass"
  }));

  // 4. Comparison Table Data for ComparisonTable
  const comparisonTableData = {
    title: pageData.comparisonVsSolo.title,
    headers: ["Feature", "Women-Only Tour", "Independent Solo Travel"],
    rows: pageData.comparisonVsSolo.matrix.map((row) => [
      row.feature,
      row.tour,
      row.solo
    ])
  };

  // 5. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions About Women-Only Luxury Tours",
    subtitle: "Everything you need to know about planning safe, inspiring, and exceptional small-group journeys for women.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 6. Related Pillar Guides
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
        // backgroundImage={TourHeroImg}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content">
        {/* ─── 2. WHAT ARE WOMEN-ONLY TOURS? (AsymmetricStoryIntro Component) ─── */}
        <AsymmetricStoryIntro
          eyebrow={pageData.whatAreTours.eyebrow}
          heading={pageData.whatAreTours.title}
          paragraphs={[
            pageData.whatAreTours.lead,
            pageData.whatAreTours.sublead,
            pageData.whatAreTours.conclusion
          ]}
          highlights={pageData.whatAreTours.highlights}
          // image1={TourOverviewImg}
          // image2={TourSuitesImg}
          ctaText="Explore Women's Group Departures"
          ctaLink="/contact"
        />

        {/* ─── 3. WHY CHOOSE A WOMEN-ONLY LUXURY TOUR? (FeatureGrid Component) ─── */}
        <FeatureGrid
          title={pageData.whyChoose.title}
          subtitle={pageData.whyChoose.subtitle}
          features={pageData.whyChoose.features}
        />

        {/* ─── 4. WHAT SHOULD YOU LOOK FOR IN A WOMEN-ONLY LUXURY TOUR? (CurvilinearGrid Component) ─── */}
        <CurvilinearGrid
          title={pageData.whatToLookFor.title}
          subtitle="ESSENTIAL EVALUATION CRITERIA"
          paragraphs={[pageData.whatToLookFor.subtitle]}
          items={pageData.whatToLookFor.items}
        />

        {/* ─── 5. WOMEN-ONLY SMALL-GROUP TRAVEL VS. TRADITIONAL GROUP TOURS (ShipPhilosophyFaceoff Component) ─── */}
        <div className="relative">
          <ShipPhilosophyFaceoff
            data={faceoffData}
            // regentImage={TourGroupImg}
            regentImageAlt="Women-Only Small Group Travel"
            regentImagePos="object-center"
            // vikingImage={TourOverviewImg}
            vikingImageAlt="Traditional Group Tours"
            vikingImagePos="object-center"
          />
          {/* Section Summary & Advisory Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-6 mb-16 text-center">
            <p className="font-sans text-sm sm:text-base text-slate-700 bg-white p-6 rounded-2xl border border-slate-200 shadow-md leading-relaxed">
              {pageData.groupVsTraditional.conclusion}
            </p>
          </div>
        </div>

        {/* ─── 6. WHO ARE WOMEN-ONLY LUXURY TOURS BEST FOR? (TravelerProfileTabs Component) ─── */}
        <div className="relative">
          <TravelerProfileTabs
            title={pageData.whoIsItFor.title}
            subtitle={pageData.whoIsItFor.subtitle}
            profiles={travelerProfiles}
          />
        </div>

        {/* ─── 7. WHAT IS THE ATMOSPHERE LIKE ON A WOMEN-ONLY TOUR? (InclusionsList Component) ─── */}
        <div className="relative">
          <InclusionsList
            title={pageData.atmosphere.title}
            expertNote={`${pageData.atmosphere.subtitle}. ${pageData.atmosphere.lead}`}
            inclusions={pageData.atmosphere.questions}
            // image={TourOverviewImg}
          />
          {/* Atmosphere Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-navy-950 font-medium leading-relaxed">
                {pageData.atmosphere.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 8. WOMEN-ONLY TOURS AND LUXURY TRAVEL (DetailedInclusionsList Component) ─── */}
        <DetailedInclusionsList
          title={pageData.luxuryInclusions.title}
          intro={[pageData.luxuryInclusions.subtitle]}
          items={pageData.luxuryInclusions.items}
        />

        {/* Luxury Inclusions Conclusion Box */}
        <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
          <div className="p-8 bg-navy-950 text-white rounded-3xl shadow-xl">
            <h3 className="font-display text-2xl sm:text-3xl mb-4 text-white font-medium">
              {pageData.luxuryInclusions.conclusion}
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-navy-950 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-all rounded-full shadow-lg hover:scale-105 mt-2"
            >
              Explore Women's Group Departures
            </Link>
          </div>
        </div>

        {/* ─── 9. HOW TO CHOOSE THE RIGHT WOMEN-ONLY TOUR (CardGrid Component) ─── */}
        <CardGrid
          title={pageData.howToChoose.title}
          subtitle={pageData.howToChoose.subtitle}
          cards={howToChooseCards}
          columns={3}
          stagger={false}
        />

        {/* ─── 10. WOMEN-ONLY TOURS VS. INDEPENDENT SOLO TRAVEL (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable data={comparisonTableData} />
          {/* Comparison Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.comparisonVsSolo.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 11. WOMEN-ONLY TOURS VS. WOMEN WHO WANDER (EditorialIntroSplit Component) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.womenWhoWanderPromo.eyebrow}
          heading={pageData.womenWhoWanderPromo.title}
          paragraphs={[
            pageData.womenWhoWanderPromo.subtitle,
            pageData.womenWhoWanderPromo.lead,
            pageData.womenWhoWanderPromo.sublead
          ]}
          // primaryImage={TourGroupImg}
          // secondaryImage={TourOverviewImg}
        />

        {/* ─── 12. HOW TRIPS & SHIPS HELPS YOU FIND THE RIGHT JOURNEY (ExpertRulesGrid Component) ─── */}
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
          ctaText="Plan My Women's Group Tour With Angela"
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
          // image={TourHeroImg}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default WomenOnlyTours;
