import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition Across Page)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ComparisonTable from '@/components/ui/ComparisonTable';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import VsComparisonGrid from '@/components/ui/VsComparisonGrid';
import BrandTakeawaysGrid from '@/components/ui/BrandTakeawaysGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import TravelStyleGrid from '@/components/ui/TravelStyleGrid';
import BestForMatch from '@/components/ui/BestForMatch';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Image Assets
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaClub: React.FC = () => {
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
            "name": "Oceania Club",
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

        {/* ─── 1. WHAT ARE THE SIX MEMBERSHIP LEVELS? (ThreeColumnGrid) ─── */}
        <div id="membership-levels" className="border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.sixMembershipLevels.title}
            subtitle={pageData.sixMembershipLevels.subtitle}
            items={pageData.sixMembershipLevels.items}
          />
        </div>

        {/* ─── MEMBERSHIP LEVELS & CRUISE CREDIT REQUIREMENTS (ComparisonTable) ─── */}
        <div id="credit-requirements" className="border-b border-slate-200">
          <ComparisonTable data={pageData.creditRequirementsTable} />
        </div>

        {/* ─── 2. HOW DO YOU EARN CRUISE CREDITS? (BentoQuickFacts) ─── */}
        <div id="credit-accrual" className="bg-white border-b border-slate-200">
          <BentoQuickFacts
            title={pageData.cruiseCreditAccrual.title}
            paragraphs={pageData.cruiseCreditAccrual.paragraphs}
            items={pageData.cruiseCreditAccrual.items}
          />
        </div>

        {/* ─── 3. WHAT BENEFITS DO MEMBERS RECEIVE? (CostValueAnalysisCards) ─── */}
        <div id="benefits-analysis" className="bg-slate-50 border-b border-slate-200">
          <CostValueAnalysisCards
            title={pageData.benefitsAnalysis.title}
            subtitle={pageData.benefitsAnalysis.subtitle}
            includedTitle={pageData.benefitsAnalysis.includedTitle}
            extrasTitle={pageData.benefitsAnalysis.extrasTitle}
            included={pageData.benefitsAnalysis.included}
            extras={pageData.benefitsAnalysis.extras}
          />
        </div>

        {/* ─── 4. WHAT IS THE MILESTONE CRUISE CREDIT? (ContainedShowdown) ─── */}
        <div id="milestone-credit" className="border-b border-slate-200">
          <ContainedShowdown
            title={pageData.milestoneCreditShowdown.title}
            brandA={pageData.milestoneCreditShowdown.brandA}
            brandB={pageData.milestoneCreditShowdown.brandB}
          />
        </div>

        {/* ─── 5. AMBASSADOR REFERRAL PROGRAM (GenericChecklistCards) ─── */}
        <div id="ambassador-program" className="border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.ambassadorProgram.title}
            subtitle={pageData.ambassadorProgram.subtitle}
            cards={pageData.ambassadorProgram.cards}
          />
        </div>

        {/* ─── 6. CROSS-BRAND STATUS RECOGNITION (VsComparisonGrid) ─── */}
        <div id="cross-brand-status" className="border-b border-slate-200">
          <VsComparisonGrid data={pageData.crossBrandRecognition} />
        </div>

        {/* ─── 7. DO BENEFITS APPLY TO EVERY BOOKING? (BrandTakeawaysGrid) ─── */}
        <div id="booking-eligibility" className="border-b border-slate-200">
          <BrandTakeawaysGrid
            title={pageData.bookingEligibilityChecklist.title}
            subtitle={pageData.bookingEligibilityChecklist.subtitle}
            items={pageData.bookingEligibilityChecklist.items}
          />
        </div>

        {/* ─── 8. HOW TO JOIN & SECURE CREDITS (StepByStepGuide) ─── */}
        <div id="how-to-join" className="border-b border-slate-200">
          <StepByStepGuide
            title={pageData.howToJoinSteps.title}
            subtitle={pageData.howToJoinSteps.subtitle}
            steps={pageData.howToJoinSteps.steps}
            layout="grid"
          />
        </div>

        {/* ─── 9. WHO BENEFITS MOST / TRAVELER PROFILES (TravelStyleGrid) ─── */}
        <div id="traveler-profiles" className="border-b border-slate-200">
          <TravelStyleGrid data={pageData.travelerProfiles} />
        </div>

        {/* ─── 10. OCEANIA CLUB VS OTHER LUXURY LOYALTY (BestForMatch) ─── */}
        <div id="pros-cons" className="bg-slate-50 border-b border-slate-200">
          <BestForMatch data={pageData.prosAndCons} />
        </div>

        {/* ─── 11. TIPS FOR GETTING MORE VALUE (ArcticGlanceFacts) ─── */}
        <div id="value-tips" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.valueTips.title}
            items={pageData.valueTips.items}
          />
        </div>

        {/* ─── 12. EXPERT GUIDANCE & HOW TRIPS & SHIPS CAN HELP (ExpertCredentials) ─── */}
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

export default OceaniaClub;