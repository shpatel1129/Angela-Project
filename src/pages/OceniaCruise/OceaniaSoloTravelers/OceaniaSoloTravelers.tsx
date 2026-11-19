import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition Across Page)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import SoloCabinShowcase from '@/components/ui/SoloCabinShowcase';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import CulinaryExcellence from '@/components/ui/CulinaryExcellence';
import ExcursionTypesShowcase from '@/components/ui/ExcursionTypesShowcase';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import VsComparisonGrid from '@/components/ui/VsComparisonGrid';
import TravelStyleGrid from '@/components/ui/TravelStyleGrid';
import BestForMatch from '@/components/ui/BestForMatch';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Image Assets
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaSoloTravelers: React.FC = () => {
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
            "name": "Solo Travelers",
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

        {/* ─── AT A GLANCE TABLE (BrandComparisonTable) ─── */}
        <div id="quick-comparison" className="bg-slate-50 border-b border-slate-200">
          <BrandComparisonTable
            title={pageData.quickAnswer.title}
            subtitle={pageData.quickAnswer.subtitle}
            headers={pageData.quickAnswer.headers}
            rows={pageData.quickAnswer.rows}
          />
        </div>

        {/* ─── 1. DOES OCEANIA HAVE SOLO STATEROOMS? (SoloCabinShowcase) ─── */}
        <div id="solo-staterooms" className="border-b border-slate-200">
          <SoloCabinShowcase
            data={pageData.soloCabinsShowcase}
            images={[]}
          />
        </div>

        {/* ─── SHOULD YOU BOOK A DEDICATED SOLO STATEROOM? (BentoQuickFacts) ─── */}
        <div id="solo-cabin-evaluation" className="bg-white border-b border-slate-200">
          <BentoQuickFacts
            title={pageData.soloCabinEvaluation.title}
            paragraphs={pageData.soloCabinEvaluation.paragraphs}
            items={pageData.soloCabinEvaluation.items}
          />
        </div>

        {/* ─── 2. HOW MUCH DOES AN OCEANIA CRUISE COST FOR ONE PERSON? (ComparisonTable) ─── */}
        <div id="single-supplement-math" className="border-b border-slate-200">
          <ComparisonTable data={pageData.singleSupplementMath} />
        </div>

        {/* ─── WHAT AFFECTS THE PRICE? (ThreeColumnGrid) ─── */}
        <div id="price-influences" className="border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.priceInfluences.title}
            subtitle={pageData.priceInfluences.subtitle}
            items={pageData.priceInfluences.items}
          />
        </div>

        {/* ─── 3. HOW TO FIND THE BEST SOLO CRUISE DEALS (GenericChecklistCards) ─── */}
        <div id="booking-deals-strategy" className="border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.bookingDealsStrategy.title}
            subtitle={pageData.bookingDealsStrategy.subtitle}
            cards={pageData.bookingDealsStrategy.cards}
          />
        </div>

        {/* ─── 4. WHAT IS ONBOARD LIFE LIKE FOR SOLO TRAVELERS? (ContainedShowdown) ─── */}
        <div id="onboard-life" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.onboardLifeShowdown.title}
            brandA={pageData.onboardLifeShowdown.brandA}
            brandB={pageData.onboardLifeShowdown.brandB}
          />
        </div>

        {/* ─── 5. DINING ALONE ON OCEANIA CRUISES (CulinaryExcellence) ─── */}
        <div id="dining-experience" className="border-b border-slate-200">
          <CulinaryExcellence
            title={pageData.diningExperience.title}
            subtitle={pageData.diningExperience.subtitle}
            venues={pageData.diningExperience.venues}
            images={["", "", "", ""]}
          />
        </div>

        {/* ─── 6. SHORE EXCURSIONS FOR SOLO TRAVELERS (ExcursionTypesShowcase) ─── */}
        <div id="shore-excursions" className="border-b border-slate-200">
          <ExcursionTypesShowcase data={pageData.shoreExcursions} />
        </div>

        {/* ─── 7. WHAT IS INCLUDED FOR SOLO GUESTS? (CostValueAnalysisCards) ─── */}
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

        {/* ─── 8. WHICH OCEANIA SHIPS ARE BEST FOR SOLO TRAVELERS? (CabinComparisonGallery) ─── */}
        <div id="ships-for-solo" className="border-b border-slate-200">
          <CabinComparisonGallery
            title={pageData.shipsForSolo.title}
            subtitle={pageData.shipsForSolo.subtitle}
            items={pageData.shipsForSolo.items}
          />
        </div>

        {/* ─── 9. OCEANIA VS OTHER LUXURY LINES (VsComparisonGrid) ─── */}
        <div id="competitive-comparison" className="border-b border-slate-200">
          <VsComparisonGrid data={pageData.competitiveComparison} />
        </div>

        {/* ─── 10. WHO SHOULD CONSIDER AN OCEANIA CRUISE ALONE? (TravelStyleGrid) ─── */}
        <div id="traveler-profiles" className="border-b border-slate-200">
          <TravelStyleGrid data={pageData.travelerProfiles} />
        </div>

        {/* ─── 11. ADVANTAGES AND DISADVANTAGES (BestForMatch) ─── */}
        <div id="pros-cons" className="bg-slate-50 border-b border-slate-200">
          <BestForMatch data={pageData.prosAndCons} />
        </div>

        {/* ─── 12. TIPS FOR BOOKING AN OCEANIA CRUISE ALONE (StepByStepGuide) ─── */}
        <div id="booking-steps" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.bookingSteps.title}
            subtitle={pageData.bookingSteps.subtitle}
            steps={pageData.bookingSteps.steps}
            layout="grid"
          />
        </div>

        {/* ─── FINAL VERDICT & KEY FACTS (ArcticGlanceFacts) ─── */}
        <div id="final-verdict" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.finalVerdict.title}
            items={pageData.finalVerdict.items}
          />
        </div>

        {/* ─── 13. EXPERT GUIDANCE & HOW TRIPS & SHIPS CAN HELP (ExpertCredentials) ─── */}
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
        <div id="faqs" className="bg-white border-b border-slate-200">
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

export default OceaniaSoloTravelers;