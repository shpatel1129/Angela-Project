import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Compass, 
  Anchor, 
  DollarSign, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Wine, 
  Ship, 
  Users, 
  Globe2, 
  Calendar,
  AlertCircle,
  ChefHat,
  UtensilsCrossed
} from 'lucide-react';

import pageData from './data.json';
import FadeIn from '../../components/ui/FadeIn';
import ComparisonHero from '../../components/ui/ComparisonHero';
import ComparisonTable from '../../components/ui/ComparisonTable';
import ThreeColumnGrid from '../../components/ui/ThreeColumnGrid';
import BentoGlassmorphismGrid from '../../components/ui/BentoGlassmorphismGrid';
import InclusionsSplitFeatures from '../../components/ui/InclusionsSplitFeatures';
import ContainedShowdown from '../../components/ui/ContainedShowdown';
import EditorialExcursionShowcase from '../../components/ui/EditorialExcursionShowcase';
import StepByStepGuide from '../../components/ui/StepByStepGuide';
import EditorialIntroSection from '../../components/ui/EditorialIntroSection';
import MistakesGrid from '../../components/ui/MistakesGrid';
import ExpertCredentials from '../../components/ui/ExpertCredentials';
import LuxuryPriceComparison from '../../components/ui/LuxuryPriceComparison';
import OpulentTabbedExperience from '../../components/ui/OpulentTabbedExperience';
import CurvilinearGrid from '../../components/ui/CurvilinearGrid';
import ExpeditionHighlight from '../../components/ui/ExpeditionHighlight';
import DestinationFlipCards from '../../components/ui/DestinationFlipCards';
import FAQAccordion from '../../components/ui/FAQAccordion';
import TravelerProfileTabs from '../../components/ui/TravelerProfileTabs';
import MasterImage from '../../components/ui/MasterImage';
import CenterCTA from '../../components/ui/CenterCTA';
import FooterCTA from '../../components/ui/FooterCTA';
import TrustSection from '../../components/ui/TrustSection';

// Dining Images
import seabournDiningImg from '../../assets/ExploraJourneysvsSeabourn/SeabournDining.jpg';
import silverseaDiningImg from '../../assets/WhatIsIncludedOnVikingCruises/viking-the-restaurant-ocean-view-dining.jpg';
import regentDiningImg from '../../assets/WhatIsIncludedOnVikingCruises/viking-aquavit-terrace-ocean-dining.jpg';

// Itinerary Images
import seabournItineraryImg from '../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg';
import silverseaItineraryImg from '../../assets/WhatIsIncludedOnVikingCruises/Expedition-Ship-Antarctica.jpg';
import regentItineraryImg from '../../assets/LuxuryExploraJourneysGuide/Regent-Seven-Seas-Explorer.webp';

const SeabournVsSilverseaVsRegent = () => {
  // 1. Core Differences Data (ThreeColumnGrid)
  const differenceCards = pageData.brandDifferences.brands.map((b) => ({
    title: b.title,
    description: b.description,
    category: b.category,
    highlight: b.highlight
  }));

  // 2. Luxury Bento Items (BentoGlassmorphismGrid)
  const luxuryBentoItems = [
    {
      title: pageData.whichIsMoreLuxury.seabourn.title,
      description: pageData.whichIsMoreLuxury.seabourn.summary + " • Key elements: " + pageData.whichIsMoreLuxury.seabourn.items.slice(0, 5).join(", ") + ".",
      category: pageData.whichIsMoreLuxury.seabourn.badge,
      highlight: "Yacht Atmosphere"
    },
    {
      title: pageData.whichIsMoreLuxury.silversea.title,
      description: pageData.whichIsMoreLuxury.silversea.summary + " • Key elements: " + pageData.whichIsMoreLuxury.silversea.items.slice(0, 5).join(", ") + ".",
      category: pageData.whichIsMoreLuxury.silversea.badge,
      highlight: "Dedicated Butler"
    },
    {
      title: pageData.whichIsMoreLuxury.regent.title,
      description: pageData.whichIsMoreLuxury.regent.summary + " • Key elements: " + pageData.whichIsMoreLuxury.regent.items.slice(0, 5).join(", ") + ".",
      category: pageData.whichIsMoreLuxury.regent.badge,
      highlight: "Unlimited Inclusions"
    }
  ];

  // 3. Inclusions Split Data (InclusionsSplitFeatures)
  const inclusionsData = {
    headline: pageData.mostInclusive.title,
    description: pageData.mostInclusive.lead,
    pullQuote: pageData.mostInclusive.distinction.formula,
    whatIsIncluded: {
      title: "Regent & Silversea Inclusions",
      items: [
        { title: "Regent Inclusions", desc: pageData.mostInclusive.regent.description },
        { title: "Silversea Inclusions", desc: pageData.mostInclusive.silversea.description }
      ]
    },
    whatIsExtra: {
      title: "Seabourn Model & Value Formula",
      items: [
        { title: "Seabourn Inclusions", desc: pageData.mostInclusive.seabourn.description },
        { title: "Apples-to-Apples Rule", desc: pageData.mostInclusive.distinction.conclusion }
      ]
    }
  };

  // 4. Suite Comparison Cards (ThreeColumnGrid)
  const suiteCards = pageData.suiteComparison.suites.map((s) => ({
    title: s.brand,
    category: s.category,
    highlight: s.highlight,
    description: s.description + "\n\nKey Highlights: " + s.amenities.join(" • ")
  }));

  // 5. Service Contained Showdown (ContainedShowdown)
  const serviceBrandA = {
    name: "Seabourn & Silversea Service Styles",
    image: "",
    features: [
      "Seabourn: " + pageData.serviceComparison.services[0].description,
      "Silversea: " + pageData.serviceComparison.services[1].description,
      "Rule: Relaxed & yacht-like → Seabourn",
      "Rule: Butler-centered in every suite → Silversea"
    ]
  };
  const serviceBrandB = {
    name: "Regent Seven Seas Service Style",
    image: "",
    features: [
      "Regent: " + pageData.serviceComparison.services[2].description,
      "High staff-to-guest ratios across all vessels",
      "Dedicated concierge support in qualifying categories",
      "Rule: Highly inclusive with concierge & penthouse butlers → Regent"
    ]
  };

  // 6. Dining Items (DestinationFlipCards)
  const diningFlipItems = pageData.diningSection.venues.map((venue, idx) => {
    const diningImages = [seabournDiningImg, silverseaDiningImg, regentDiningImg];
    return {
      title: venue.title,
      description: venue.description,
      image: diningImages[idx % diningImages.length],
      features: [
        `Style: ${venue.category}`,
        idx === 0
          ? "Caviar service & open-seating elegance"
          : idx === 1
          ? "S.A.L.T. destination culinary immersion"
          : "Included multi-course specialty venues"
      ]
    };
  });

  // 7. Food Matchmaker Cards (ThreeColumnGrid)
  const foodMatchCards = [
    {
      title: "Choose Seabourn If You Value:",
      category: "Culinary Highlights",
      highlight: "Caviar & Fine Wines",
      description: pageData.betterFoodMatchmaker.seabournValues.join(" • ")
    },
    {
      title: "Consider Silversea If You Value:",
      category: "Culinary Highlights",
      highlight: "S.A.L.T. Immersion",
      description: pageData.betterFoodMatchmaker.silverseaValues.join(" • ")
    },
    {
      title: "Consider Regent If You Value:",
      category: "Culinary Highlights",
      highlight: "Included Specialties",
      description: pageData.betterFoodMatchmaker.regentValues.join(" • ")
    }
  ];

  // 8. Shore Excursions (EditorialExcursionShowcase)
  const excursionItems = pageData.shoreExcursions.lines.map((l) => ({
    title: l.brand,
    category: l.category,
    description: l.description
  }));

  // 9. First-Time Guidance (MistakesGrid)
  const firstTimeItems = pageData.firstTimeCruisers.questions.map((q) => ({
    number: `0${q.step}`,
    title: q.question,
    description: q.answer
  }));

  // 10. Decision Checklist Steps (StepByStepGuide)
  const checklistSteps = pageData.decisionChecklist.questions.map((q) => ({
    title: `${q.number}. ${q.title}`,
    description: q.description
  }));

  // 11. Which Line to Choose (ThreeColumnGrid)
  const chooseCards = [
    {
      title: "Seabourn Match",
      category: "Ideal Traveler",
      highlight: "Intimate Yacht Vibe",
      description: pageData.whichShouldYouChoose.seabourn.points.join(" • ")
    },
    {
      title: "Silversea Match",
      category: "Ideal Traveler",
      highlight: "Butler & Expedition",
      description: pageData.whichShouldYouChoose.silversea.points.join(" • ")
    },
    {
      title: "Regent Match",
      category: "Ideal Traveler",
      highlight: "Comprehensive Luxury",
      description: pageData.whichShouldYouChoose.regent.points.join(" • ")
    }
  ];

  // 12. Itinerary Tabs (OpulentTabbedExperience)
  const itineraryImages = [
    seabournItineraryImg,
    silverseaItineraryImg,
    regentItineraryImg
  ];
  const itineraryTabs = pageData.itineraries.destinations.map((dest, idx) => ({
    title: dest.line,
    shortDesc: dest.focus,
    category: pageData.itineraries.eyebrow,
    highlight: `${dest.line} Destinations`,
    description: `${dest.focus} Featured regions: ${dest.regions.join(", ")}.`,
    image: itineraryImages[idx % itineraryImages.length]
  }));

  // 13. Price Comparison Tips (MoneySavingTips)
  const priceFactors = pageData.priceComparison.factors.map((factor) => ({
    title: factor,
    description: "Evaluated dynamically when pricing your luxury sailing."
  }));

  // 14. Small-Ship Luxury (CurvilinearGrid)
  const smallShipItems = pageData.smallShipLuxury.ships.map((ship, idx) => ({
    title: `${ship.line} — ${ship.highlight}`,
    description: ship.description,
    icon: idx === 0 ? "ship" : idx === 1 ? "compass" : "Maximize"
  }));

  // 15. Expedition Cruises (ExpeditionHighlight)
  const expeditionContent = [
    ...pageData.expeditionCruises.expeditions.map(
      (exp) => `${exp.line} (${exp.status}): ${exp.description}`
    ),
    pageData.expeditionCruises.footer
  ];

  // 13. Traveler Profile Tabs Data (TravelerProfileTabs)
  const travelerProfiles = [
    {
      name: "Couples & Honeymoons",
      tagline: "Romantic Luxury & Intimacy",
      quote: pageData.couplesAndHoneymoons.lead,
      recommendation: "Choose Based on Romance Style & Atmosphere",
      reason: "Seabourn offers yacht-club intimacy and casual elegance, Silversea provides personal butler pampering and in-suite dining courses, and Regent offers carefree all-inclusive romance with included shore excursions.",
      whyFits: [
        "Seabourn for Couples: " + pageData.couplesAndHoneymoons.profiles[0].description,
        "Silversea for Couples: " + pageData.couplesAndHoneymoons.profiles[1].description,
        "Regent for Couples: " + pageData.couplesAndHoneymoons.profiles[2].description,
        "Shared Romance Amenities: Quiet luxury, fine dining, spacious oceanfront suites, and intimate evening lounges."
      ],
      placeholderLabel: "COUPLES & HONEYMOONS LUXURY"
    },
    {
      name: "Families & Multigenerational",
      tagline: "Multigenerational Travel",
      quote: pageData.familiesSection.lead,
      recommendation: "Select the Right Vessel, Suite Layout & Itinerary",
      reason: pageData.familiesSection.advisorAdvice,
      whyFits: pageData.familiesSection.considerations.map((c) => "Consideration: " + c),
      placeholderLabel: "MULTIGENERATIONAL LUXURY"
    },
    {
      name: "Solo Travelers",
      tagline: "Independent Luxury Exploration",
      quote: pageData.soloTravelers.lead,
      recommendation: "Match Social Atmosphere & Single Supplement Terms",
      reason: "Seabourn provides conversational hosted tables, Silversea combines intimate destination focus with butler service, and Regent offers seamless included excursions.",
      whyFits: [
        "Seabourn: " + pageData.soloTravelers.brands[0].fit,
        "Silversea: " + pageData.soloTravelers.brands[1].fit,
        "Regent: " + pageData.soloTravelers.brands[2].fit,
        ...pageData.soloTravelers.factors.map((f) => "Evaluate: " + f)
      ],
      placeholderLabel: "SOLO LUXURY TRAVEL"
    },
    {
      name: "Dress Code Guidelines",
      tagline: "Onboard Attire Standards",
      quote: pageData.dressCode.lead,
      recommendation: "Check Specific Guidelines Before Selecting Your Voyage",
      reason: pageData.dressCode.summary,
      whyFits: pageData.dressCode.codes.map((c) => `${c.brand}: ${c.rule}`),
      placeholderLabel: "LUXURY CRUISE DRESS CODES"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.secondaryKeywords.join(', ')} />
        <link rel="canonical" href={`https://www.tripsandships.com${pageData.seo.url}`} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:url" content={`https://www.tripsandships.com${pageData.seo.url}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(pageData.schema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-gold-500 selection:text-white w-full overflow-x-hidden">
        
        {/* 1. HERO SECTION (ComparisonHero - full width) */}
        <ComparisonHero
          title={pageData.hero.title}
          subtitle={pageData.hero.lead}
          description={pageData.hero.sublead}
          badge={pageData.hero.badge + " • " + pageData.hero.lastUpdated}
        />

        {/* Brand Focus Quote Block */}
        <section id="content" className="w-full py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-navy-900 text-center relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
                  The Fundamental Question
                </span>
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white italic max-w-4xl mx-auto leading-relaxed mb-6">
                  "{pageData.hero.coreQuestion}"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8 pt-8 border-t border-white/10">
                  {pageData.hero.brands.map((b, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="font-display text-xl text-gold-400 font-semibold">{b.name}</h3>
                      <p className="font-sans text-slate-300 text-sm leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. QUICK COMPARISON TABLE (full width) */}
        <div className="w-full bg-white">
          <ComparisonTable data={pageData.quickComparison} />
          <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500 italic pb-8">
            {pageData.quickComparison.footnote}
          </div>
        </div>

        {/* 3. CORE DIFFERENCES (ThreeColumnGrid - full width) */}
        <ThreeColumnGrid
          title={pageData.brandDifferences.title}
          subtitle={pageData.brandDifferences.subtitle}
          items={differenceCards}
        />

        {/* 4. WHICH IS MORE LUXURY (BentoGlassmorphismGrid - full width) */}
        <BentoGlassmorphismGrid
          title={pageData.whichIsMoreLuxury.title}
          subtitle={pageData.whichIsMoreLuxury.eyebrow}
          bentoItems={luxuryBentoItems}
        />

        {/* CTA INTERLUDE 1 (After Section 4) */}
        <CenterCTA
          title="Compare Luxury Cruise Inclusions & True Fares"
          description="Let our luxury cruise specialists calculate true apples-to-apples costs for Seabourn, Silversea, and Regent."
          buttonText="Request an Apples-to-Apples Quote"
          buttonLink="/contact"
          theme="light"
        />

        {/* 5. WHICH IS MOST ALL-INCLUSIVE (InclusionsSplitFeatures - full width) */}
        <InclusionsSplitFeatures data={inclusionsData} />

        {/* 6. PRICING & APPLES-TO-APPLES COMPARISON (LuxuryPriceComparison component - full width) */}
        <LuxuryPriceComparison data={pageData.priceComparison} />

        {/* 7. SUITE COMPARISON (ThreeColumnGrid - full width) */}
        <ThreeColumnGrid
          title={pageData.suiteComparison.title}
          subtitle={pageData.suiteComparison.lead}
          items={suiteCards}
        />

        {/* 8. SERVICE COMPARISON (Full-width seamless dark theme) */}
        <section className="w-full bg-navy-950 py-20 text-white border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-3 block">
                {pageData.serviceComparison.eyebrow}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                {pageData.serviceComparison.title}
              </h2>
              <p className="font-sans text-slate-300 text-lg">
                {pageData.serviceComparison.lead}
              </p>
            </FadeIn>

            {/* Comparison Cards Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <FadeIn direction="left" delay={0.1}>
                <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500 shadow-2xl h-full p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl text-gold-400 mb-6 pb-4 border-b border-white/10">
                    {serviceBrandA.name}
                  </h3>
                  <ul className="space-y-4">
                    {serviceBrandA.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gold-400" />
                        <span className="font-sans text-base text-slate-200 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500 shadow-2xl h-full p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl text-gold-400 mb-6 pb-4 border-b border-white/10">
                    {serviceBrandB.name}
                  </h3>
                  <ul className="space-y-4">
                    {serviceBrandB.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gold-400" />
                        <span className="font-sans text-base text-slate-200 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            
            {/* Service Match Rules Callout */}
            <FadeIn>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-sm max-w-4xl mx-auto backdrop-blur">
                <h4 className="font-display text-lg text-gold-400 font-semibold mb-4 text-center">
                  {pageData.serviceComparison.whatMattersMost.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {pageData.serviceComparison.whatMattersMost.rules.map((rule, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs text-slate-300 font-medium mb-1">{rule.style}</p>
                      <p className="font-display text-base text-gold-400 font-bold">→ {rule.winner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA INTERLUDE 2 (After Section 8) */}
        <CenterCTA
          title="Find Your Ideal Suite & Service Match"
          description="Whether you prefer dedicated butler pampering or relaxed yacht-club hospitality, we'll match you to the right suite category."
          buttonText="Speak With a Luxury Specialist"
          buttonLink="/contact"
          theme="light"
        />

        {/* 9. DINING COMPARISON (DestinationFlipCards - full width) */}
        <DestinationFlipCards
          title={pageData.diningSection.title}
          subtitle={pageData.diningSection.lead}
          items={diningFlipItems}
        />

        {/* 10. BETTER FOOD MATCHMAKER (ThreeColumnGrid - full width) */}
        <ThreeColumnGrid
          title={pageData.betterFoodMatchmaker.title}
          subtitle={pageData.betterFoodMatchmaker.lead}
          items={foodMatchCards}
        />

        {/* 11. SHORE EXCURSIONS (EditorialExcursionShowcase - full width) */}
        <EditorialExcursionShowcase
          title={pageData.shoreExcursions.title}
          subtitle={pageData.shoreExcursions.lead + " " + pageData.shoreExcursions.consideration.text}
          items={excursionItems}
        />

        {/* 12. ITINERARIES & DESTINATIONS (OpulentTabbedExperience - full width) */}
        <OpulentTabbedExperience
          title={pageData.itineraries.title}
          subtitle={pageData.itineraries.lead}
          tabs={itineraryTabs}
        />

        {/* CTA INTERLUDE 3 (After Section 12) */}
        <CenterCTA
          title="Unlock Exclusive Itinerary Amenities & Upgrades"
          description="Access exclusive Virtuoso shipboard credits, suite upgrades, and private destination arrangements on your luxury sailing."
          buttonText="Plan Your Luxury Itinerary"
          buttonLink="/contact"
          theme="light"
        />

        {/* 13A. SMALL-SHIP LUXURY (CurvilinearGrid - full width) */}
        <CurvilinearGrid
          title={pageData.smallShipLuxury.title}
          subtitle={pageData.smallShipLuxury.eyebrow}
          paragraphs={[pageData.smallShipLuxury.lead, pageData.smallShipLuxury.verdict]}
          items={smallShipItems}
        />

        {/* 13B. EXPEDITION CRUISES (ExpeditionHighlight - full width) */}
        <ExpeditionHighlight
          title={pageData.expeditionCruises.title}
          subtitle={pageData.expeditionCruises.lead}
          content={expeditionContent}
          features={pageData.expeditionCruises.checklist.map((item) => `${item}`)}
          image={silverseaItineraryImg}
        />

        {/* 14. TRAVELER STYLES: COUPLES, FAMILIES, SOLO & DRESS CODE (TravelerProfileTabs - full width) */}
        <TravelerProfileTabs
          title="Traveler Scenarios: Couples, Families, Solos & Dress Codes"
          subtitle="Tailored Travel Guidance"
          profiles={travelerProfiles}
        />

        {/* 15. FIRST-TIME CRUISERS GUIDANCE (MistakesGrid - full width) */}
        <MistakesGrid
          title={pageData.firstTimeCruisers.title}
          items={firstTimeItems}
        />

        {/* CTA INTERLUDE 4 (After Section 15) */}
        <CenterCTA
          title="First Time Booking Ultra-Luxury?"
          description="Avoid costly booking mistakes. Our 40+ years of luxury cruise expertise guarantees the perfect cruise line match."
          buttonText="Get Personalized Recommendations"
          buttonLink="/contact"
          theme="light"
        />

       

        {/* 17. WHICH SHOULD YOU CHOOSE (ThreeColumnGrid - full width) */}
        <ThreeColumnGrid
          title={pageData.whichShouldYouChoose.title}
          subtitle={pageData.whichShouldYouChoose.lead}
          items={chooseCards}
        />

        {/* 18. THE DECISION CHECKLIST (StepByStepGuide - full width) */}
        <StepByStepGuide
          title={pageData.decisionChecklist.title}
          subtitle={pageData.decisionChecklist.subtitle}
          steps={checklistSteps}
        />

        {/* 19. ADVISOR ADVANTAGE (EditorialIntroSection - full width) */}
        <EditorialIntroSection
          eyebrow={pageData.advisorRole.eyebrow}
          heading={pageData.advisorRole.title}
          paragraphs={[
            pageData.advisorRole.lead,
            pageData.advisorRole.goal
          ]}
          highlights={pageData.advisorRole.dimensions}
          placeholderLabel="LUXURY CRUISE ADVISOR ADVANTAGE"
          badgeTitle="Strategic Value Guidance"
          badgeDescription="Personalized itinerary matching, suite selection, and total vacation value optimization."
        />

        {/* 19b. ANGELA HUGHES AUTHORITY & CREDENTIALS (ExpertCredentials - full width) */}
        <ExpertCredentials
          name={pageData.angelaHughes.name}
          title={pageData.angelaHughes.title}
          badge="ULTRA-LUXURY CRUISE AUTHORITY"
          experienceBadge="40+ YEARS EXPERTISE"
          authorityBoxTitle="ANGELA HUGHES LUXURY PERSPECTIVE"
          authoritySubtitle="CEO, Trips & Ships Luxury Travel"
          paragraphs={[
            pageData.angelaHughes.lead,
            pageData.angelaHughes.expertise,
            pageData.angelaHughes.value
          ]}
          credentials={[
            "Over 4 Decades Designing Ultra-Luxury Cruise Vacations",
            "Explored 121+ Countries Across Seven Continents",
            "Top Producer & Specialist for Seabourn, Silversea & Regent",
            "CEO & Founder of Trips & Ships Luxury Travel",
            "Founder of Luxury Travel University & Master Advisor Mentor",
            "Direct Executive & Concierge Relationships with Luxury Cruise Lines"
          ]}
          quote="The best luxury cruise line is never one-size-fits-all. It's the one that aligns precisely with your personal expectations for service style, dining freedom, suite luxury, and excursion depth."
          quoteSubtitle="On Comparing Seabourn, Silversea & Regent"
          ctaText="Request a Luxury Cruise Consultation"
          ctaLink="/contact"
        />

        {/* 20. FREQUENTLY ASKED QUESTIONS (FAQAccordion - full width) */}
        <section className="w-full py-12 bg-white">
          <FAQAccordion data={pageData.faqs} />
        </section>

        {/* 21. FINAL VERDICT (full width) */}
        <section className="w-full py-20 bg-navy-950 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
                {pageData.finalVerdict.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
                {pageData.finalVerdict.title}
              </h2>
              <p className="text-slate-300 text-base max-w-3xl mx-auto mb-10 leading-relaxed">
                {pageData.finalVerdict.lead}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 text-left">
                {pageData.finalVerdict.breakdown.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
                    <h4 className="font-display text-xl text-gold-400 font-bold mb-2">{item.line}</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.verdict}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur max-w-3xl mx-auto border border-white/20 mb-8">
                <blockquote className="font-display text-lg md:text-xl text-white italic leading-relaxed">
                  "{pageData.finalVerdict.coreTakeaway}"
                </blockquote>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm tracking-wider uppercase rounded-full shadow-lg transition-all hover:scale-105"
              >
                Request a Custom Luxury Cruise Comparison <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* 22. TRUST SECTION (full width) */}
        <TrustSection />

        {/* 23. CENTER & FOOTER CTA (full width) */}
        <CenterCTA
          title="Plan Your Luxury Cruise With Confidence"
          description="Speak with our luxury travel advisors to design your perfect itinerary."
          buttonText="Speak With a Luxury Cruise Specialist"
          buttonLink="/contact"
        />

        <FooterCTA />

      </div>
    </>
  );
};

export default SeabournVsSilverseaVsRegent;
