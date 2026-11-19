import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition Across Page)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import BrandPillarsShowcase from '@/components/ui/BrandPillarsShowcase';
import AccordionFlexGrid from '@/components/ui/AccordionFlexGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ExcursionTypesShowcase from '@/components/ui/ExcursionTypesShowcase';
import CardGrid from '@/components/ui/CardGrid';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CuratedComforts from '@/components/ui/CuratedComforts';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import CostComparisonMatrix from '@/components/ui/CostComparisonMatrix';
import DressCodeGallery from '@/components/ui/DressCodeGallery';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import BestForMatch from '@/components/ui/BestForMatch';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Image Assets (Content images commented out per request)
// import barcelonaPortImg from "@/assets/ExploravsOceania/oceania-aurelia-luxury-cruise-ship-sailing-at-sunset-ocean-voyage.jpg";
// import santoriniCalderaImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-lounge-panoramic-ocean-view-luxury-cruise-bar.jpg";
// import dubrovnikWallsImg from "@/assets/ExploravsOceania/oceania-aurelia-elegant-cocktail-lounge-premium-cruise-bar-seating.jpg";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaMediterranean: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  const meta = pageData.meta as {
    keywords?: string;
    primaryKeyword?: string;
    secondaryKeywords?: string[];
  };
  const keywords = meta.keywords || (meta.primaryKeyword ? [meta.primaryKeyword, ...(meta.secondaryKeywords || [])].join(", ") : "");

  // Structured Schema (Organization, WebPage, Article, Breadcrumbs, FAQs)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "logo": "https://www.tripsandships.com/assets/logo.png"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angelahughes",
        "name": "Angela Hughes",
        "jobTitle": "Luxury Cruise Specialist & Elite Travel Advisor",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageData.meta.title,
        "description": pageData.meta.description,
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Oceania Cruises",
            "item": "https://www.tripsandships.com/oceania-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mediterranean Cruises",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": pageData.meta.title,
        "description": pageData.meta.description,
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@id": "https://www.tripsandships.com/#angelahughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.questions.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.title} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content={pageData.meta.title} />
        <meta property="og:description" content={pageData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.meta.title} />
        <meta name="twitter:description" content={pageData.meta.description} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ─── HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      <div className="w-full">
        {/* ─── EDITORIAL INTRO SECTION (EditorialIntroSplit) ─── */}
        <div id="intro-overview" className="bg-white border-b border-slate-200">
          <EditorialIntroSplit
            heading={pageData.editorialIntro.heading}
            paragraphs={pageData.editorialIntro.paragraphs}
            eyebrow={pageData.editorialIntro.eyebrow}
          />
        </div>

        {/* ─── AT A GLANCE COMPARISON TABLE (BrandComparisonTable) ─── */}
        <div id="quick-comparison" className="bg-slate-50 border-b border-slate-200">
          <BrandComparisonTable
            title={pageData.quickAnswer.title}
            subtitle={pageData.quickAnswer.subtitle}
            headers={pageData.quickAnswer.headers}
            rows={pageData.quickAnswer.rows}
          />
        </div>

        {/* ─── WHY CHOOSE OCEANIA FOR THE MEDITERRANEAN (BrandPillarsShowcase) ─── */}
        <div id="why-choose-oceania" className="border-b border-slate-200">
          <BrandPillarsShowcase data={pageData.whyChooseOceania} />
        </div>

        {/* ─── MAIN MEDITERRANEAN CRUISE REGIONS (AccordionFlexGrid) ─── */}
        <div id="mediterranean-regions" className="border-b border-slate-200">
          <AccordionFlexGrid
            title={pageData.mainRegions.title}
            subtitle={pageData.mainRegions.subtitle}
            items={pageData.mainRegions.items}
          />
        </div>

        {/* ─── POPULAR PORTS IN ITALY, GREECE, SPAIN, FRANCE, CROATIA (ThreeColumnGrid) ─── */}
        <div id="popular-ports" className="border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.popularPorts.title}
            subtitle={pageData.popularPorts.subtitle}
            items={pageData.popularPorts.items}
          />
        </div>

        {/* ─── SAMPLE ITINERARIES (ExcursionTypesShowcase) ─── */}
        <div id="sample-itineraries" className="border-b border-slate-200">
          <ExcursionTypesShowcase data={pageData.sampleItineraries} />
        </div>

        {/* ─── BEST TIME TO SAIL (CardGrid) ─── */}
        <div id="best-time-to-sail" className="border-b border-slate-200">
          <CardGrid
            title={pageData.bestTimeToSail.title}
            subtitle={pageData.bestTimeToSail.subtitle}
            cards={pageData.bestTimeToSail.cards}
            columns={4}
            stagger={false}
          />
        </div>

        {/* ─── WHICH SHIP TO CHOOSE (CabinComparisonGallery) ─── */}
        <div id="which-ship" className="border-b border-slate-200">
          <CabinComparisonGallery
            title={pageData.whichShipToChoose.title}
            subtitle={pageData.whichShipToChoose.subtitle}
            items={pageData.whichShipToChoose.items}
          />
        </div>

        {/* ─── WHAT IS INCLUDED (CostValueAnalysisCards) ─── */}
        <div id="what-is-included" className="bg-slate-50 border-b border-slate-200">
          <CostValueAnalysisCards
            title={pageData.whatIsIncluded.title}
            subtitle={pageData.whatIsIncluded.subtitle}
            includedTitle={pageData.whatIsIncluded.includedTitle}
            extrasTitle={pageData.whatIsIncluded.extrasTitle}
            included={pageData.whatIsIncluded.included}
            extras={pageData.whatIsIncluded.extras}
          />
        </div>

        {/* ─── SHORE EXCURSIONS: WHAT CAN YOU DO ASHORE? (CuratedComforts) ─── */}
        <div id="shore-excursions" className="border-b border-slate-200">
          <CuratedComforts data={pageData.shoreExcursions} />
        </div>

        {/* ─── HOW TO PLAN AROUND THE PORTS (StepByStepGuide) ─── */}
        <div id="port-planning" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.planningAroundPorts.title}
            subtitle={pageData.planningAroundPorts.subtitle}
            steps={pageData.planningAroundPorts.steps}
            layout="timeline"
          />
        </div>

        {/* ─── WHAT DOES A MEDITERRANEAN CRUISE COST? (CostComparisonMatrix) ─── */}
        <div id="mediterranean-costs" className="border-b border-slate-200">
          <CostComparisonMatrix
            title={pageData.costBreakdown.title}
            subtitle={pageData.costBreakdown.subtitle}
            items={pageData.costBreakdown.items}
          />
        </div>

        {/* ─── WHAT TO PACK (DressCodeGallery) ─── */}
        <div id="what-to-pack" className="bg-white border-b border-slate-200">
          <DressCodeGallery data={pageData.whatToPack} />
        </div>

        {/* ─── TRAVELER SUITABILITY (TravelerPersonaCards) ─── */}
        <div id="traveler-suitability" className="border-b border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerSuitability.title}
            subtitle={pageData.travelerSuitability.subtitle}
            personas={pageData.travelerSuitability.personas}
          />
        </div>

        {/* ─── COMPETITOR COMPARISON (ComparisonTable) ─── */}
        <div id="competitor-comparison" className="border-b border-slate-200">
          <ComparisonTable data={pageData.competitorComparison} />
        </div>

        {/* ─── HOW TO CHOOSE THE RIGHT ITINERARY (BestForMatch) ─── */}
        <div id="how-to-choose" className="bg-slate-50 border-b border-slate-200">
          <BestForMatch data={pageData.howToChoose} />
        </div>

        {/* ─── EXPERT GUIDANCE & RECOMMENDATION (ExpertCredentials) ─── */}
        <div id="expert-advice">
          <ExpertCredentials
            badge={pageData.expertAdvice.expert.badge}
            authorityBoxTitle={pageData.expertAdvice.expert.authorityBoxTitle}
            authoritySubtitle={pageData.expertAdvice.expert.authoritySubtitle}
            name={pageData.expertAdvice.expert.name}
            title={pageData.expertAdvice.expert.title}
            experienceBadge={pageData.expertAdvice.expert.experienceBadge}
            bio={pageData.expertAdvice.expert.bio}
            quote={pageData.expertAdvice.expert.quote}
            quoteSubtitle={pageData.expertAdvice.expert.quoteSubtitle}
            credentials={pageData.expertAdvice.expert.credentials}
            ctaText={pageData.expertAdvice.expert.ctaText}
            ctaLink={pageData.expertAdvice.expert.ctaLink}
            image={AboutAngelaImg}
          />
        </div>

        {/* ─── FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <div id="oceania-mediterranean-faqs" className="bg-white border-b border-slate-200">
          <FAQAccordion data={pageData.faqs} />
        </div>

        {/* ─── CALL TO ACTION (CenterCTA) ─── */}
        <div id="contact-cta">
          <CenterCTA
            title={pageData.centerCta.title}
            description={pageData.centerCta.subtitle}
            buttonText={pageData.centerCta.primaryCtaText}
            buttonLink={pageData.centerCta.primaryCtaLink}
          />
        </div>


      </div>
    </>
  );
};

export default OceaniaMediterranean;
