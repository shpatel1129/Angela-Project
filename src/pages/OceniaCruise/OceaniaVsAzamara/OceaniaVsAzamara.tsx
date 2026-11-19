import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition Across Page)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import CostAndInclusionsPanel from '@/components/ui/CostAndInclusionsPanel';
import ElegantFleetShowcase from '@/components/ui/ElegantFleetShowcase';
import CulinaryExcellence from '@/components/ui/CulinaryExcellence';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ExcursionTypesShowcase from '@/components/ui/ExcursionTypesShowcase';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import AccordionFlexGrid from '@/components/ui/AccordionFlexGrid';
import CuratedComforts from '@/components/ui/CuratedComforts';
import DressCodeGallery from '@/components/ui/DressCodeGallery';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Image Assets (Content images commented out per request)
// import oceaniaShipImg from "@/assets/ExploravsOceania/oceania-aurelia-luxury-cruise-ship-sailing-at-sunset-ocean-voyage.jpg";
// import azamaraShipImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-lounge-panoramic-ocean-view-luxury-cruise-bar.jpg";
// import diningLoungeImg from "@/assets/ExploravsOceania/oceania-aurelia-elegant-cocktail-lounge-premium-cruise-bar-seating.jpg";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaVsAzamara: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // ComparisonTable data structure
  const quickComparisonData = {
    title: pageData.quickAnswer.title,
    subtitle: pageData.quickAnswer.subtitle,
    headers: pageData.quickAnswer.headers,
    rows: pageData.quickAnswer.rows
  };

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
            "name": "Oceania vs. Azamara",
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

        {/* ─── AT A GLANCE COMPARISON TABLE (ComparisonTable) ─── */}
        <div id="quick-comparison" className="bg-slate-50 border-b border-slate-200">
          <ComparisonTable data={quickComparisonData} />
        </div>

        {/* ─── WHAT IS THE BIGGEST DIFFERENCE? (ShipPhilosophyFaceoff) ─── */}
        <div id="biggest-difference" className="border-b border-slate-200">
          <ShipPhilosophyFaceoff
            data={pageData.biggestDifference}
          />
        </div>

        {/* ─── PRICING COMPARISON (CostAndInclusionsPanel) ─── */}
        <div id="pricing-value" className="border-b border-slate-200">
          <CostAndInclusionsPanel
            title={pageData.pricingAndValue.title}
            subtitle={pageData.pricingAndValue.subtitle}
            items={pageData.pricingAndValue.items}
          />
        </div>

        {/* ─── SHIPS AND FLEET (ElegantFleetShowcase) ─── */}
        <div id="ships-fleet" className="border-b border-slate-200">
          <ElegantFleetShowcase
            title={pageData.shipsAndFleet.title}
            subtitle={pageData.shipsAndFleet.subtitle}
            ships={pageData.shipsAndFleet.ships}
          />
        </div>

        {/* ─── DINING COMPARISON (CulinaryExcellence) ─── */}
        <div id="dining-showdown" className="bg-white border-b border-slate-200">
          <CulinaryExcellence
            title={pageData.diningComparison.title}
            subtitle={pageData.diningComparison.subtitle}
            venues={pageData.diningComparison.venues}
            images={[]}
          />
        </div>

        {/* ─── DRINKS AND BEVERAGE PACKAGES (CostValueAnalysisCards) ─── */}
        <div id="drinks-comparison" className="bg-slate-50 border-b border-slate-200">
          <CostValueAnalysisCards
            title={pageData.drinksComparison.title}
            subtitle={pageData.drinksComparison.subtitle}
            includedTitle={pageData.drinksComparison.includedTitle}
            extrasTitle={pageData.drinksComparison.extrasTitle}
            included={pageData.drinksComparison.included}
            extras={pageData.drinksComparison.extras}
          />
        </div>

        {/* ─── DESTINATION EXPERIENCES (ThreeColumnGrid) ─── */}
        <div id="destinations-experiences" className="border-b border-slate-200">
          <ThreeColumnGrid
            title={pageData.destinationExperiences.title}
            subtitle={pageData.destinationExperiences.subtitle}
            items={pageData.destinationExperiences.items}
          />
        </div>

        {/* ─── AZAMAZING EVENINGS VS OCEANIA EXPERIENCES (ExcursionTypesShowcase) ─── */}
        <div id="azamazing-evenings" className="border-b border-slate-200">
          <ExcursionTypesShowcase data={pageData.azAmazingEvenings} />
        </div>

        {/* ─── STATEROOMS AND SUITES (CabinComparisonGallery) ─── */}
        <div id="staterooms-suites" className="border-b border-slate-200">
          <CabinComparisonGallery
            title={pageData.stateroomsAndSuites.title}
            subtitle={pageData.stateroomsAndSuites.subtitle}
            items={pageData.stateroomsAndSuites.items}
          />
        </div>

        {/* ─── ONBOARD ACTIVITIES AND ENTERTAINMENT (AccordionFlexGrid) ─── */}
        <div id="entertainment-activities" className="border-b border-slate-200">
          <AccordionFlexGrid
            title={pageData.onboardActivities.title}
            subtitle={pageData.onboardActivities.subtitle}
            items={pageData.onboardActivities.items}
          />
        </div>

        {/* ─── SPA AND WELLNESS (CuratedComforts) ─── */}
        <div id="spa-wellness" className="border-b border-slate-200">
          <CuratedComforts data={pageData.spaAndWellness} />
        </div>

        {/* ─── SERVICE AND ONBOARD ATMOSPHERE (DressCodeGallery) ─── */}
        <div id="service-atmosphere" className="bg-white border-b border-slate-200">
          <DressCodeGallery data={pageData.serviceAndAtmosphere} />
        </div>

        {/* ─── ITINERARIES AND DESTINATIONS (HighlightsSplit) ─── */}
        <div id="itineraries-destinations" className="border-b border-slate-200">
          <HighlightsSplit
            title={pageData.itinerariesAndDestinations.title}
            subtitle={pageData.itinerariesAndDestinations.subtitle}
            items={pageData.itinerariesAndDestinations.items}
            badgeSuffix={pageData.itinerariesAndDestinations.badgeSuffix}
            footerLeft={pageData.itinerariesAndDestinations.footerLeft}
            footerRight={pageData.itinerariesAndDestinations.footerRight}
            images={[]}
          />
        </div>

        {/* ─── WHAT COSTS EXTRA (DetailedInclusionsList) ─── */}
        <div id="costs-extra" className="border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.whatCostsExtra.title}
            intro={pageData.whatCostsExtra.intro}
            items={pageData.whatCostsExtra.items}
          />
        </div>

        {/* ─── TRAVELER SUITABILITY (TravelerPersonaCards) ─── */}
        <div id="traveler-suitability" className="border-b border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerSuitability.title}
            subtitle={pageData.travelerSuitability.subtitle}
            personas={pageData.travelerSuitability.personas}
          />
        </div>

        {/* ─── PROS AND CONS (GenericChecklistCards) ─── */}
        <div id="pros-cons" className="border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.prosAndCons.title}
            subtitle={pageData.prosAndCons.subtitle}
            cards={pageData.prosAndCons.cards}
          />
        </div>

        {/* ─── HOW TO COMPARE THE TRUE COST (LuxuryCruiseComparisonTable) ─── */}
        <div id="true-cost-checklist" className="border-b border-slate-200">
          <LuxuryCruiseComparisonTable
            title={pageData.costComparisonChecklist.title}
            headers={pageData.costComparisonChecklist.headers}
            rows={pageData.costComparisonChecklist.rows}
          />
        </div>

        {/* ─── WHICH SHOULD YOU CHOOSE (ContainedShowdown) ─── */}
        <div id="which-to-choose" className="border-b border-slate-200">
          <ContainedShowdown
            title={
              <>
                <span className="block">{pageData.whichShouldYouChoose.title}</span>
                <span className="block font-sans text-base md:text-lg text-slate-300 mt-4 max-w-2xl mx-auto font-light tracking-normal">
                  {pageData.whichShouldYouChoose.subtitle}
                </span>
              </>
            }
            brandA={pageData.whichShouldYouChoose.brandA}
            brandB={pageData.whichShouldYouChoose.brandB}
          />
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
        <div id="oceania-azamara-faqs" className="bg-white border-b border-slate-200">
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

export default OceaniaVsAzamara;
