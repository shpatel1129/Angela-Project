import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Existing UI System Components (Unique per section, zero repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ItineraryCards from '@/components/ui/ItineraryCards';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TopQuestionsReveal from '@/components/ui/TopQuestionsReveal';
import InclusionsList from '@/components/ui/InclusionsList';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';

// Assets (Commented out per project preference)
// import DestinationHeroImg from "../../../assets/Seabourn/SeabournCruises/seabourn-worldwide-destination-focused-itineraries.jpg";
// import AboutImage from "../../../assets/AboutAngela.jpeg";

const BestDestinations = () => {

  // 1. Destination Items for ItineraryCards
  const destinationItineraryItems = pageData.bestLuxuryDestinations.destinations.map((dest) => ({
    title: dest.title,
    duration: `Best for: ${dest.bestFor}`,
    description: dest.description,
    highlights: dest.highlights,
    country: dest.country,
    // image: null
  }));

  // 2. FAQ Accordion Data
  const faqData = {
    title: "Frequently Asked Questions About the Best Destinations for Solo Women",
    subtitle: "Everything you need to know about choosing safe, rewarding, and extraordinary luxury destinations worldwide.",
    items: pageData.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 3. Related Pillar Guides
  const relatedHubGuides = pageData.relatedGuides.guides.map((guide) => ({
    title: guide.title,
    category: guide.category,
    description: guide.description,
    placeholderLabel: guide.title.toUpperCase(),
    // image: null,
    alt: guide.title,
    badgeCount: guide.links ? guide.links.length : 1,
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

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(pageData.schema)}
        </script>
      </Helmet>

      {/* ─── NAVBAR ─── */}
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
        // backgroundImage={DestinationHeroImg}
        primaryCtaText={pageData.hero.primaryCta.text}
        primaryCtaLink={pageData.hero.primaryCta.link}
        secondaryCtaText={pageData.hero.secondaryCta.text}
        secondaryCtaLink={pageData.hero.secondaryCta.link}
      />

      <div id="content">
        {/* ─── 2. WHAT MAKES A DESTINATION GOOD FOR SOLO WOMEN? (EditorialIntroSection Component) ─── */}
        <div className="relative">
          <EditorialIntroSection
            eyebrow={pageData.whatMakesGood.eyebrow}
            heading={pageData.whatMakesGood.title}
            paragraphs={[
              pageData.whatMakesGood.lead,
              pageData.whatMakesGood.sublead,
              pageData.whatMakesGood.conclusion
            ]}
            highlights={pageData.whatMakesGood.criteria}
            badgeTitle="Personalized Destination Matching"
            badgeDescription="Tailored luxury matching your exact independence, comfort, and safety preferences."
            placeholderLabel="WHAT MAKES A DESTINATION GOOD FOR SOLO WOMEN"
            // image={null}
          />
        </div>

        {/* ─── 3. BEST LUXURY DESTINATIONS FOR SOLO WOMEN (ItineraryCards Component) ─── */}
        <div className="relative">
          <ItineraryCards
            title={pageData.bestLuxuryDestinations.title}
            items={destinationItineraryItems}
          />
        </div>

        {/* ─── 4. BEST DESTINATIONS BY TRAVEL STYLE (ComparisonTable Component) ─── */}
        <div className="relative">
          <ComparisonTable data={pageData.travelStylesMatrix} />
          {/* Table Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 mt-4 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.travelStylesMatrix.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 5. BEST DESTINATIONS FOR WOMEN TRAVELING SOLO FOR THE FIRST TIME (EditorialIntroSplit Component) ─── */}
        <div className="relative">
          <EditorialIntroSplit
            eyebrow={pageData.firstTimeSolo.eyebrow}
            heading={pageData.firstTimeSolo.title}
            paragraphs={[
              pageData.firstTimeSolo.lead,
              pageData.firstTimeSolo.sublead
            ]}
            // primaryImage={null}
            // secondaryImage={null}
            ctaText={pageData.firstTimeSolo.ctaText}
            ctaLink={pageData.firstTimeSolo.ctaLink}
          />
          {/* First-Time Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our complete foundational pillar:{' '}
                <Link
                  to={pageData.firstTimeSolo.linkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.firstTimeSolo.linkText} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 6. BEST DESTINATIONS FOR SOLO WOMEN OVER 50 (CurvilinearGrid Component) ─── */}
        <div className="relative">
          <CurvilinearGrid
            title={pageData.destinationsOver50.title}
            subtitle="THE LUXURY DIFFERENCE AFTER 50"
            paragraphs={[
              pageData.destinationsOver50.subtitle,
              pageData.destinationsOver50.lead
            ]}
            items={pageData.destinationsOver50.items}
          />
          {/* Over 50 Interlink Callout */}
          <div className="max-w-3xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore our dedicated guide for travelers over 50:{' '}
                <Link
                  to={pageData.destinationsOver50.linkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.destinationsOver50.linkText} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 7. ALTERNATIVE TRAVEL STRATEGIES: CRUISES, RIVER CRUISES & GROUP TRAVEL (DetailedInclusionsList Component) ─── */}
        <DetailedInclusionsList
          title={pageData.travelStrategies.title}
          intro={[pageData.travelStrategies.subtitle]}
          items={pageData.travelStrategies.pillars}
        />

        {/* ─── 8. HOW TO CHOOSE THE RIGHT DESTINATION FOR YOUR SOLO TRIP (TopQuestionsReveal Component) ─── */}
        <TopQuestionsReveal
          title={pageData.howToChooseQuestions.title}
          subtitle={pageData.howToChooseQuestions.subtitle}
          questions={pageData.howToChooseQuestions.questions}
        />

        {/* ─── 9. HOW SAFE ARE THESE DESTINATIONS FOR SOLO WOMEN? (InclusionsList Component) ─── */}
        <div className="relative">
          <InclusionsList
            title={pageData.safety.title}
            expertNote={`${pageData.safety.subtitle} ${pageData.safety.lead}`}
            inclusions={pageData.safety.points}
            // image={null}
          />
          {/* Safety Interlink Box */}
          <div className="max-w-3xl mx-auto px-6 mt-6 mb-16 text-center relative z-20">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                {pageData.safety.conclusion}{' '}
                <Link
                  to={pageData.safety.linkUrl}
                  className="font-bold text-navy-950 underline underline-offset-4 hover:text-navy-800 transition-colors"
                >
                  {pageData.safety.linkText} &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── 10. SHOULD YOU TRAVEL COMPLETELY ALONE? (FeatureGrid Component) ─── */}
        <div className="relative">
          <FeatureGrid
            title={pageData.travelFormats.title}
            subtitle={pageData.travelFormats.subtitle}
            features={pageData.travelFormats.formats}
          />
          {/* Formats Conclusion Callout */}
          <div className="max-w-4xl mx-auto px-6 mt-4 mb-16 text-center">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
              <p className="font-sans text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {pageData.travelFormats.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 11. HOW TRIPS & SHIPS HELPS CHOOSE YOUR DESTINATION (ExpertRulesGrid Component) ─── */}
        <ExpertRulesGrid
          title={pageData.howTripsAndShipsHelps.title}
          subtitle={pageData.howTripsAndShipsHelps.subtitle}
          rules={pageData.howTripsAndShipsHelps.considerations}
        />

        {/* ─── 12. ABOUT THE AUTHOR & EEAT (ExpertCredentials Component) ─── */}
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

        {/* ─── 13. FREQUENTLY ASKED QUESTIONS (FAQAccordion Component) ─── */}
        <FAQAccordion data={faqData} />


        {/* ─── 15. RELATED LUXURY SOLO TRAVEL GUIDES (InteractivePillarHubGrid Component) ─── */}
        <InteractivePillarHubGrid
          title={pageData.relatedGuides.title}
          subtitle={pageData.relatedGuides.subtitle}
          items={relatedHubGuides}
        />
      </div>

      
        {/* ─── 14. FINAL CONVERSION BANNER (CenterCTA Component) ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        subtitle={`${pageData.finalCta.subtitle} ${pageData.finalCta.lead}`}
        primaryCtaText={pageData.finalCta.primaryCta.text}
        primaryCtaLink={pageData.finalCta.primaryCta.link}
      />
    </div>
  );
};

export default BestDestinations;
