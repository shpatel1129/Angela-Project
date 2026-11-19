import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No External Placeholders)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import CostAndInclusionsPanel from '@/components/ui/CostAndInclusionsPanel';
import CulinaryExcellence from '@/components/ui/CulinaryExcellence';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ExcursionTypesShowcase from '@/components/ui/ExcursionTypesShowcase';
import ShipVibeOverview from '@/components/ui/ShipVibeOverview';
import CabinComparisonGallery from '@/components/ui/CabinComparisonGallery';
import ButlerServiceDetails from '@/components/ui/ButlerServiceDetails';
import BudgetBreakdownTable from '@/components/ui/BudgetBreakdownTable';
import DestinationEditorialGrid from '@/components/ui/DestinationEditorialGrid';
import DressCodeGallery from '@/components/ui/DressCodeGallery';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import RvoProsCons from '@/components/ui/RvoProsCons';
import LuxuryCruiseComparisonTable from '@/components/ui/LuxuryCruiseComparisonTable';
import CategoryAwards from '@/components/ui/CategoryAwards';
import BestForMatch from '@/components/ui/BestForMatch';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Image Assets (Commented out per request)
// import shipSailingImg from "@/assets/ExploravsOceania/oceania-aurelia-luxury-cruise-ship-sailing-at-sunset-ocean-voyage.jpg";
// import cocktailLoungeImg from "@/assets/ExploravsOceania/oceania-aurelia-elegant-cocktail-lounge-premium-cruise-bar-seating.jpg";
// import horizonLoungeImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-lounge-panoramic-ocean-view-luxury-cruise-bar.jpg";
// import suiteLivingRoomImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-suite-living-room-luxury-cruise-ocean-view.png";
// import ownersSuiteImg from "@/assets/ExploravsOceania/oceania-aurelia-owners-suite-luxury-living-room-private-veranda-ocean-view.png";
// import mixologyBarImg from "@/assets/ExploravsOceania/oceania-aurelia-signature-mixology-cocktail-bar-luxury-cruise-lounge.jpg";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

const OceaniaVsRegent: React.FC = () => {
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
            "name": "Oceania vs. Regent Seven Seas",
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

        {/* ─── QUICK COMPARISON SUMMARY TABLE (ComparisonTable) ─── */}
        <div id="quick-comparison" className="bg-slate-50 border-b border-slate-200">
          <ComparisonTable data={quickComparisonData} />
        </div>

        {/* ─── CRUISE FARE AND OVERALL VALUE (CostAndInclusionsPanel) ─── */}
        <div id="cruise-fare-value" className="border-b border-slate-200">
          <CostAndInclusionsPanel
            title={pageData.cruiseFareAndValue.title}
            subtitle={pageData.cruiseFareAndValue.subtitle}
            items={pageData.cruiseFareAndValue.items}
          />
        </div>

        {/* ─── DINING: OCEANIA VS. REGENT (CulinaryExcellence) ─── */}
        <div id="dining-showdown" className="bg-white border-b border-slate-200">
          <CulinaryExcellence
            title={pageData.diningComparison.title}
            subtitle={pageData.diningComparison.subtitle}
            venues={pageData.diningComparison.venues}
            // images={[cocktailLoungeImg, horizonLoungeImg, mixologyBarImg]}
            images={[]}
          />
        </div>

        {/* ─── DRINKS & ALCOHOL POLICIES (CostValueAnalysisCards) ─── */}
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

        {/* ─── SHORE EXCURSIONS: OCEANIA VS. REGENT (ExcursionTypesShowcase) ─── */}
        <div id="shore-excursions" className="border-b border-slate-200">
          <ExcursionTypesShowcase data={pageData.shoreExcursions} />
        </div>

        {/* ─── SHIPS AND ONBOARD ATMOSPHERE (ShipVibeOverview) ─── */}
        <div id="ships-atmosphere" className="border-b border-slate-200">
          <ShipVibeOverview
            title={pageData.shipsAndAtmosphere.title}
            subtitle={pageData.shipsAndAtmosphere.subtitle}
            items={pageData.shipsAndAtmosphere.items}
            // mainImage={shipSailingImg}
            // sideImages={[shipSailingImg, horizonLoungeImg]}
          />
        </div>

        {/* ─── SUITES AND ACCOMMODATION (CabinComparisonGallery) ─── */}
        <div id="suites-accommodation" className="border-b border-slate-200">
          <CabinComparisonGallery
            title={pageData.suitesAndAccommodation.title}
            subtitle={pageData.suitesAndAccommodation.subtitle}
            items={pageData.suitesAndAccommodation.items}
          />
        </div>

        {/* ─── SERVICE AND STAFF ATTENTION (ButlerServiceDetails) ─── */}
        <div id="service-attention" className="border-b border-slate-200">
          <ButlerServiceDetails
            data={pageData.serviceAndStaff}
            // images={[suiteLivingRoomImg, ownersSuiteImg, horizonLoungeImg]}
            images={[]}
          />
        </div>

        {/* ─── WI-FI, LAUNDRY & ONBOARD AMENITIES (BudgetBreakdownTable) ─── */}
        <div id="amenities-logistics" className="bg-slate-50 border-b border-slate-200">
          <BudgetBreakdownTable data={pageData.amenitiesAndLogistics} />
        </div>

        {/* ─── DESTINATIONS AND ITINERARIES (DestinationEditorialGrid) ─── */}
        <div id="destinations-itineraries" className="border-b border-slate-200">
          <DestinationEditorialGrid
            title={pageData.destinationsAndItineraries.title}
            eyebrow={pageData.destinationsAndItineraries.eyebrow}
            subtitle={pageData.destinationsAndItineraries.subtitle}
            items={pageData.destinationsAndItineraries.items}
            // images={[shipSailingImg, horizonLoungeImg, cocktailLoungeImg]}
            images={[]}
          />
        </div>

        {/* ─── DRESS CODE AND EVENING ATMOSPHERE (DressCodeGallery) ─── */}
        <div id="dress-code" className="bg-white border-b border-slate-200">
          <DressCodeGallery data={pageData.dressCodeAndAtmosphere} />
        </div>

        {/* ─── TRAVELER SUITABILITY: COUPLES, SOLOS & OLDER ADULTS (TravelerPersonaCards) ─── */}
        <div id="traveler-suitability" className="border-b border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerSuitability.title}
            subtitle={pageData.travelerSuitability.subtitle}
            personas={pageData.travelerSuitability.personas}
          />
        </div>

        {/* ─── PROS AND CONS: OCEANIA VS. REGENT (RvoProsCons) ─── */}
        <div id="pros-cons" className="bg-white border-b border-slate-200">
          <RvoProsCons
            data={pageData.prosAndCons}
            // image={shipSailingImg}
          />
        </div>

        {/* ─── WHICH IS MORE AFFORDABLE? (LuxuryCruiseComparisonTable) ─── */}
        <div id="affordability-comparison" className="border-b border-slate-200">
          <LuxuryCruiseComparisonTable
            title={pageData.affordabilityComparison.title}
            headers={pageData.affordabilityComparison.headers}
            rows={pageData.affordabilityComparison.rows}
          />
        </div>

        {/* ─── PRIORITY MATCHMAKER: IF YOUR PRIORITY IS... (CategoryAwards) ─── */}
        <div id="priority-awards" className="border-b border-slate-200">
          <CategoryAwards
            title={pageData.priorityAwards.title}
            subtitle={pageData.priorityAwards.subtitle}
            categories={pageData.priorityAwards.categories}
          />
        </div>

        {/* ─── WHICH CRUISE LINE SHOULD YOU CHOOSE? (BestForMatch) ─── */}
        <div id="final-decision" className="bg-slate-50 border-b border-slate-200">
          <BestForMatch data={pageData.finalDecisionMatch} />
        </div>

        {/* ─── EXPERT CREDENTIALS (ExpertCredentials) ─── */}
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
            image={AboutAngelaImg}
            ctaText={pageData.expertAdvice.expert.ctaText}
            ctaLink={pageData.expertAdvice.expert.ctaLink}
          />
        </div>

        {/* ─── FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <div id="oceania-regent-faqs" className="bg-white border-b border-slate-200">
          <FAQAccordion data={pageData.faqs} />
        </div>

        {/* ─── CALL TO ACTION (CenterCTA) ─── */}
        <div id="contact-cta">
          <CenterCTA
            title={pageData.centerCta.title}
            subtitle={pageData.centerCta.subtitle}
            primaryCtaText={pageData.centerCta.primaryCtaText}
            primaryCtaLink={pageData.centerCta.primaryCtaLink}
            secondaryCtaText={pageData.centerCta.secondaryCtaText}
            secondaryCtaLink={pageData.centerCta.secondaryCtaLink}
          />
        </div>


      </div>
    </>
  );
};

export default OceaniaVsRegent;
