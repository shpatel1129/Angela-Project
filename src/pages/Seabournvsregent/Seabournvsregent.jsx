import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import SvsSQuickAnswer from "../../components/ui/SvsSQuickAnswer";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import DualPhilosophyShowcase from "../../components/ui/DualPhilosophyShowcase";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import CabinFeatureGrid from "../../components/ui/CabinFeatureGrid";
import SvsSServiceDifference from "../../components/ui/SvsSServiceDifference";
import InclusionCheckerGrid from "../../components/ui/InclusionCheckerGrid";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import ContainedShowdown from "../../components/ui/ContainedShowdown";
import CardGrid from "../../components/ui/CardGrid";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import AuthorityBox from "../../components/ui/AuthorityBox";
import ProsConsCards from "../../components/ui/ProsConsCards";
import BrandShowcase from "../../components/ui/BrandShowcase";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#article",
      "headline": "Seabourn vs. Regent Seven Seas: Which Luxury Cruise Line Is Right for You?",
      "description": "Seabourn vs Regent Seven Seas compared across fares, suites, ships, dining, excursions, service, inclusions and atmosphere. Find the best luxury cruise for you.",
      "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/"
      },
      "author": {
        "@type": "Person",
        "name": "Angela Hughes",
        "url": "https://www.tripsandships.com/about-angela-hughes/"
      },
      "publisher": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Seabourn"
        },
        {
          "@type": "Thing",
          "name": "Regent Seven Seas Cruises"
        },
        {
          "@type": "Thing",
          "name": "Luxury Cruises"
        }
      ],
      "keywords": [
        "Seabourn vs Regent Seven Seas",
        "Seabourn vs Regent",
        "Seabourn or Regent",
        "Seabourn vs Regent comparison",
        "Seabourn vs Regent cruises",
        "Seabourn vs Regent suites",
        "Seabourn vs Regent dining",
        "Seabourn vs Regent excursions",
        "Seabourn vs Regent price",
        "Seabourn vs Regent value",
        "Seabourn vs Regent service",
        "Seabourn vs Regent atmosphere",
        "Seabourn vs Regent all inclusive"
      ],
      "articleSection": [
        "Seabourn vs. Regent at a Glance",
        "Seabourn vs. Regent Ships",
        "Seabourn vs. Regent Suites",
        "Seabourn vs. Regent Dining",
        "Seabourn vs. Regent Inclusions",
        "Seabourn vs. Regent Shore Excursions",
        "Seabourn vs. Regent Expedition Cruises",
        "Seabourn vs. Regent Service",
        "Seabourn vs. Regent Atmosphere",
        "Seabourn vs. Regent Fares",
        "Seabourn vs. Regent Pros and Cons",
        "Frequently Asked Questions"
      ],
      "isPartOf": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#webpage"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/",
      "name": "Seabourn vs Regent Seven Seas: Fares, Suites & Value",
      "description": "Seabourn vs Regent Seven Seas compared across fares, suites, ships, dining, excursions, service, inclusions and atmosphere.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#article"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#breadcrumb",
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
          "name": "Seabourn Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Seabourn vs Regent Seven Seas",
          "item": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/#faq",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }
  ]
};

const Seabournvsregent = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Seabourn vs Regent: Which Luxury Cruise Is Better?</title>
        <meta
          name="description"
          content="Seabourn vs Regent Seven Seas compared across fares, suites, ships, dining, excursions, service, inclusions and atmosphere. Find the best luxury cruise for you."
        />
        <meta
          name="keywords"
          content="Seabourn vs Regent Seven Seas, Seabourn vs Regent, Seabourn or Regent, Seabourn vs Regent comparison, Seabourn vs Regent cruises, Seabourn vs Regent suites, Seabourn vs Regent dining, Seabourn vs Regent excursions, Seabourn vs Regent price, Seabourn vs Regent value, Seabourn vs Regent service, Seabourn vs Regent atmosphere, Seabourn vs Regent all inclusive"
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/seabourn-vs-regent/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText="Compare Fleets"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. EDITORIAL INTRO ── */}
      <EditorialIntroSection
        eyebrow="HEAD-TO-HEAD LUXURY COMPARISON"
        heading="Two Distinct Philosophies of Ultra-Luxury Cruising"
        paragraphs={data.hero.paragraphs.slice(1)}
        placeholderLabel="SEABOURN VS REGENT SEVEN SEAS"
        badgeTitle="Ultra-Luxury Benchmark"
        badgeDescription="Comparing intimate yacht luxury with unrivaled space and all-inclusive excursions."
        highlights={[
          "Seabourn: Yacht-style atmosphere & all-oceanfront suites",
          "Regent: Unrivaled space at sea & thousands of included excursions",
          "All-inclusive gourmet dining, fine wines & premium spirits",
          "Dedicated polar expedition capabilities with Seabourn Venture & Pursuit"
        ]}
      />

      {/* ── 3. QUICK ANSWER ── */}
      <SvsSQuickAnswer
        data={{
          title: data.quickAnswer.title,
          intro: data.quickAnswer.intro,
          silverseaSummary: data.quickAnswer.regentSummary,
          seabournSummary: data.quickAnswer.seabournSummary,
          comparisonTable: {
            headers: ["Travel Priority", "Recommended Cruise Line"],
            rows: [
              ["Intimate, private yacht-like atmosphere", "Seabourn"],
              ["Maximum suite space & private balconies (99%)", "Regent Seven Seas"],
              ["Complimentary caviar & open-seating dining", "Seabourn"],
              ["Thousands of included shore excursions in every port", "Regent Seven Seas"],
              ["Intuitive personal suite host & attendant care", "Seabourn"],
              ["Complimentary specialty dining & Epicurean Perfection", "Regent Seven Seas"]
            ]
          },
          bottomLine: data.quickAnswer.keyTakeaway
        }}
      />

      {/* ── 3b. PRIORITY CHECKLIST CARDS ── */}
      <GenericChecklistCards
        title="Priorities Checklist: Seabourn vs. Regent Seven Seas"
        cards={[
          {
            title: "Choose Seabourn If You Prioritize:",
            items: data.quickAnswer.seabournPriorities
          },
          {
            title: "Choose Regent Seven Seas If You Prioritize:",
            items: data.quickAnswer.regentPriorities
          }
        ]}
      />

      {/* ── 4. AT A GLANCE (COMPARISON TABLE) ── */}
      <ComparisonTable
        data={{
          title: data.atAGlance.title,
          headers: data.atAGlance.headers,
          rows: data.atAGlance.rows
        }}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
        <p className="font-sans text-slate-500 italic text-sm">
          {data.atAGlance.note}
        </p>
      </div>

      {/* ── 5. THE BIGGEST DIFFERENCE (FACE-OFF) ── */}
      <ShipPhilosophyFaceoff
        data={{
          title: data.biggestDifference.title,
          regent: {
            badge: data.biggestDifference.seabourn.badge,
            title: data.biggestDifference.seabourn.title,
            description: data.biggestDifference.seabourn.description,
            features: data.biggestDifference.seabourn.features
          },
          viking: {
            badge: data.biggestDifference.regent.badge,
            title: data.biggestDifference.regent.title,
            description: data.biggestDifference.regent.description,
            features: data.biggestDifference.regent.features
          }
        }}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
        <p className="font-sans text-slate-600 font-medium text-sm leading-relaxed">
          {data.biggestDifference.note}
        </p>
      </div>

      {/* ── 6. FLEET BREAKDOWN ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournShipsImg from "../../assets/Seabourn/seabourn-fleet.jpg";
      // import regentShipsImg from "../../assets/Regent/regent-fleet.jpg";
      */}
      <DualPhilosophyShowcase
        data={{
          title: data.fleetComparison.title,
          subtitle: data.fleetComparison.intro,
          sailing: {
            label: data.fleetComparison.seabourn.title,
            philosophy: data.fleetComparison.seabourn.subtitle,
            points: data.fleetComparison.seabourn.features
          },
          allSuite: {
            label: data.fleetComparison.regent.title,
            philosophy: data.fleetComparison.regent.subtitle,
            points: data.fleetComparison.regent.features
          },
          verdict: `${data.fleetComparison.seabourn.note} ${data.fleetComparison.regent.note}`
        }}
        /* imageSailing={seabournShipsImg} */
        /* imageAllSuite={regentShipsImg} */
      />

      {/* ── CTA 1: FLEET COMPARISON ── */}
      <CenterCTA
        title={data.ctas.fleetCta.title}
        description={data.ctas.fleetCta.description}
        buttonText={data.ctas.fleetCta.buttonText}
        buttonLink={data.ctas.fleetCta.buttonLink}
        theme="dark"
      />

      {/* ── 7. WHICH HAS THE BETTER SHIPS ── */}
      <GenericChecklistCards
        title={data.whichHasBetterShips.title}
        subtitle="SHIP ENVIRONMENT & SCALE"
        cards={[
          {
            title: "Seabourn May Be Better If You Want:",
            items: data.whichHasBetterShips.seabournWins
          },
          {
            title: "Regent Seven Seas May Be Better If You Want:",
            items: data.whichHasBetterShips.regentWins
          }
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
        <p className="font-sans text-slate-500 italic text-sm">
          {data.whichHasBetterShips.note}
        </p>
      </div>

      {/* ── 8. SUITES ACCOMMODATIONS ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournSuitesImg from "../../assets/Seabourn/seabourn-suites.jpg";
      // import regentSuitesImg from "../../assets/Regent/regent-suites.jpg";
      */}
      <LuxuryFeatureShowcase
        title={data.suitesComparison.title}
        subtitle={data.suitesComparison.intro}
        items={[
          {
            title: data.suitesComparison.seabourn.title,
            subtitle: "Oceanfront Suites & Veranda Living",
            description: data.suitesComparison.seabourn.description,
            features: data.suitesComparison.seabourn.categories,
            /* image: seabournSuitesImg */
          },
          {
            title: data.suitesComparison.regent.title,
            subtitle: "Unrivaled Space & Balconies",
            description: data.suitesComparison.regent.description,
            features: data.suitesComparison.regent.categories,
            /* image: regentSuitesImg */
          }
        ]}
      />

      {/* ── 9. WHICH HAS BETTER SUITES? ── */}
      <CabinFeatureGrid
        data={{
          title: data.suitesComparison.whichBetter.title,
          subtitle: "COMPARING SUITE LUXURY & SPACE PHILOSOPHIES",
          oceanview: {
            title: "Choose Seabourn Suites For",
            bestFor: "Yacht-like suite design, oceanfront accommodations, relaxed luxury, and personal suite host service.",
            advantages: data.suitesComparison.whichBetter.seabournBetter
          },
          balcony: {
            title: "Choose Regent Suites For",
            bestFor: "Maximum interior square footage, expansive living spaces, private balconies across 99% of suites, and lavish premium tiers.",
            advantages: data.suitesComparison.whichBetter.regentBetter
          }
        }}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
        <p className="font-sans text-slate-500 italic text-sm">
          {data.suitesComparison.whichBetter.note}
        </p>
      </div>

      {/* ── CTA 2: SUITE SELECTION ── */}
      <CenterCTA
        title={data.ctas.suiteCta.title}
        description={data.ctas.suiteCta.description}
        buttonText={data.ctas.suiteCta.buttonText}
        buttonLink={data.ctas.suiteCta.buttonLink}
        theme="dark"
      />

      {/* ── 10. SUITE SERVICE DIFFERENCE ── */}
      <SvsSServiceDifference
        data={{
          title: data.suiteService.title,
          description: data.suiteService.intro,
          brand1Name: "SEABOURN SUITE SERVICE",
          silverseaTitle: "Personal Suite Host & Attendant",
          silverseaText: "Seabourn pairs every suite with a dedicated Suite Host and Suite Attendant. This model focuses on warm, intuitive, and relaxed luxury—ensuring your stateroom is immaculately maintained, custom bar fully stocked, and special requests honored without formal stiffness.",
          brand2Name: "REGENT SUITE SERVICE",
          seabournTitle: "Heartfelt Hospitality & Dedicated Butler",
          seabournText: "Regent provides personalized suite steward service across standard categories, and elevates to dedicated European-trained white-glove butler service in Penthouse Suites and higher tiers for unpacking, dining service, and bespoke concierge care."
        }}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
        <p className="font-sans text-slate-600 font-medium text-sm leading-relaxed mb-2">
          {data.suiteService.summary}
        </p>
        <p className="font-sans text-slate-500 italic text-xs">
          {data.suiteService.note}
        </p>
      </div>

      {/* ── 11. DINING SHOWDOWN ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournDiningImg from "../../assets/Seabourn/seabourn-dining.jpg";
      // import regentDiningImg from "../../assets/Regent/regent-dining.jpg";
      */}
      <ShipPhilosophyFaceoff
        data={{
          title: data.diningComparison.title,
          regent: {
            badge: data.diningComparison.seabourn.badge,
            title: data.diningComparison.seabourn.title,
            description: data.diningComparison.seabourn.description,
            features: data.diningComparison.seabourn.features
          },
          viking: {
            badge: data.diningComparison.regent.badge,
            title: data.diningComparison.regent.title,
            description: data.diningComparison.regent.description,
            features: data.diningComparison.regent.features
          }
        }}
        /* regentImage={seabournDiningImg} */
        /* vikingImage={regentDiningImg} */
      />

      {/* ── 12. WHICH HAS BETTER FOOD ── */}
      <InclusionCheckerGrid
        eyebrow="CULINARY COMPARISON"
        title={data.diningComparison.whichBetter.title}
        subtitle={data.diningComparison.whichBetter.intro}
        inclusionsTitle="Seabourn May Appeal More If You Prefer:"
        exclusionsTitle="Regent May Appeal More If You Prefer:"
        inclusions={data.diningComparison.whichBetter.seabournFoodPrefer}
        exclusions={data.diningComparison.whichBetter.regentFoodPrefer}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-16 text-center">
        <p className="font-sans text-slate-500 italic text-sm">
          {data.diningComparison.whichBetter.note}
        </p>
      </div>

      {/* ── 13. INCLUSIONS BREAKDOWN ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournInclusionsImg from "../../assets/Seabourn/seabourn-inclusions.jpg";
      // import regentInclusionsImg from "../../assets/Regent/regent-inclusions.jpg";
      */}
      <HighlightsSplit
        title={data.inclusionsComparison.title}
        items={[
          {
            title: "What Seabourn Includes",
            icon: "Sparkles",
            description: data.inclusionsComparison.intro,
            bulletPoints: data.inclusionsComparison.seabournIncludes,
            /* image: seabournInclusionsImg */
          },
          {
            title: "What Regent Includes",
            icon: "Crown",
            description: data.inclusionsComparison.intro,
            bulletPoints: data.inclusionsComparison.regentIncludes,
            /* image: regentInclusionsImg */
          }
        ]}
      />

      {/* ── 13b. WHICH HAS MORE INCLUSIVE VALUE ── */}
      <div className="max-w-5xl mx-auto px-6 my-12">
        <AuthorityBox
          title={data.inclusionsComparison.inclusiveValue.title}
          content={
            <div>
              <p className="font-sans text-base text-slate-700 leading-relaxed mb-4 font-normal">
                {data.inclusionsComparison.inclusiveValue.regentValue}
              </p>
              <p className="font-sans text-base text-slate-700 leading-relaxed font-normal">
                {data.inclusionsComparison.inclusiveValue.seabournValue}
              </p>
            </div>
          }
          author="Angela Hughes, Luxury Cruise Specialist"
        />
      </div>

      {/* ── CTA 3: INCLUSIONS ── */}
      <CenterCTA
        title={data.ctas.inclusionsCta.title}
        description={data.ctas.inclusionsCta.description}
        buttonText={data.ctas.inclusionsCta.buttonText}
        buttonLink={data.ctas.inclusionsCta.buttonLink}
        theme="dark"
      />

      {/* ── 14. SHORE EXCURSIONS ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournExcursionsImg from "../../assets/Seabourn/seabourn-excursions.jpg";
      // import regentExcursionsImg from "../../assets/Regent/regent-excursions.jpg";
      */}
      <DualPhilosophyShowcase
        data={{
          title: data.shoreExcursions.title,
          subtitle: data.shoreExcursions.intro,
          sailing: {
            label: data.shoreExcursions.seabourn.title,
            philosophy: data.shoreExcursions.seabourn.badge,
            points: data.shoreExcursions.seabourn.features
          },
          allSuite: {
            label: data.shoreExcursions.regent.title,
            philosophy: data.shoreExcursions.regent.badge,
            points: data.shoreExcursions.regent.features
          },
          verdict: data.shoreExcursions.note
        }}
        /* imageSailing={seabournExcursionsImg} */
        /* imageAllSuite={regentExcursionsImg} */
      />

      {/* ── 14b. WHICH HAS BETTER SHORE EXCURSIONS ── */}
      <InclusionCheckerGrid
        eyebrow="EXCURSIONS COMPARISON"
        title="Which Cruise Line Wins on Shore Excursions?"
        subtitle="Comparing curated boutique excursions with comprehensive included port tours."
        inclusionsTitle="Seabourn Wins If You Value:"
        exclusionsTitle="Regent Wins If You Value:"
        inclusions={data.shoreExcursions.seabourn.features}
        exclusions={data.shoreExcursions.regent.features}
      />

      {/* ── 15. EXPEDITION CRUISES ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournExpeditionImg from "../../assets/Seabourn/seabourn-expedition.jpg";
      // import regentLuxuryImg from "../../assets/Regent/regent-luxury.jpg";
      */}
      <LuxuryZigZagShowcase
        title={data.antarcticaAndExpeditions.expeditionTitle}
        subtitle="PURPOSE-BUILT EXPEDITIONS VS. CLASSIC LUXURY"
        items={[
          {
            title: data.antarcticaAndExpeditions.seabournExpedition.title,
            category: "PURPOSE-BUILT POLAR EXPEDITION",
            description: data.antarcticaAndExpeditions.seabournExpedition.description,
            bestFor: data.antarcticaAndExpeditions.seabournExpedition.features.join(" • "),
            /* image: seabournExpeditionImg, */
            placeholderLabel: "SEABOURN EXPEDITION CRUISES"
          },
          {
            title: data.antarcticaAndExpeditions.regentLuxury.title,
            category: "CLASSIC DESTINATION LUXURY",
            description: data.antarcticaAndExpeditions.regentLuxury.description,
            bestFor: data.antarcticaAndExpeditions.regentLuxury.features.join(" • "),
            /* image: regentLuxuryImg, */
            placeholderLabel: "REGENT LUXURY CRUISES"
          }
        ]}
      />

       {/* ── 17. ONBOARD SERVICE STANDARDS ── */}
      <ContainedShowdown
        title={data.serviceComparison.title}
        brandA={{
          name: "Seabourn Intuitive Service",
          features: data.serviceComparison.seabournService
        }}
        brandB={{
          name: "Regent Heartfelt Hospitality",
          features: data.serviceComparison.regentService
        }}
      />

      {/* ── 16. ANTARCTICA POLAR DESTINATIONS ── */}
      <LuxuryFeatureShowcase
        title={data.antarcticaAndExpeditions.antarcticaTitle}
        subtitle={data.antarcticaAndExpeditions.antarcticaIntro}
        items={[
          {
            title: "Seabourn Antarctica Strengths",
            subtitle: "Purpose-Built Polar Class 6 Ships",
            description: "Seabourn provides an immersive polar expedition with PC6 ice-strengthened hull, 24-person expedition team, submarine excursions, and included Zodiac landings.",
            features: data.antarcticaAndExpeditions.seabournAntarctica
          },
          {
            title: "Regent Antarctica Strengths",
            subtitle: "Traditional Destination-Focused Luxury",
            description: "Regent offers scenic polar navigation, spacious heated suites, high-end destination enrichment, and luxurious onboard comfort.",
            features: data.antarcticaAndExpeditions.regentAntarctica
          }
        ]}
      />
    

      {/* ── CTA 4: POLAR EXPEDITIONS ── */}
      <CenterCTA
        title={data.ctas.expeditionCta.title}
        description={data.ctas.expeditionCta.description}
        buttonText={data.ctas.expeditionCta.buttonText}
        buttonLink={data.ctas.expeditionCta.buttonLink}
        theme="dark"
      />

     
     

      {/* ── 18. ATMOSPHERE & LIFESTYLE ── */}
      <ContainedShowdown
        title={data.atmosphereComparison.title}
        brandA={{
          name: `Seabourn: ${data.atmosphereComparison.seabourn.tagline}`,
          features: data.atmosphereComparison.seabourn.items
        }}
        brandB={{
          name: `Regent: ${data.atmosphereComparison.regent.tagline}`,
          features: data.atmosphereComparison.regent.items
        }}
      />

      {/* ── 19. ONBOARD LIFESTYLE (Dress Code, Entertainment, Spa) ── */}
      <div className="py-12 bg-white">
        <CardGrid
          title={data.onboardLifestyle.title}
          subtitle={data.onboardLifestyle.subtitle}
          cards={data.onboardLifestyle.cards}
          columns={3}
        />
        <div className="max-w-4xl mx-auto px-6 mt-4 text-center">
          <p className="font-sans text-slate-500 italic text-sm">
            {data.onboardLifestyle.highlight}
          </p>
        </div>
      </div>

      {/* ── CTA 5: TAILOR-MADE CRUISING ── */}
      <CenterCTA
        title={data.ctas.atmosphereCta.title}
        description={data.ctas.atmosphereCta.description}
        buttonText={data.ctas.atmosphereCta.buttonText}
        buttonLink={data.ctas.atmosphereCta.buttonLink}
        theme="dark"
      />

      {/* ── 20. FARES & VALUE COMPARISON ── */}
      <CostValueAnalysisCards
        title={data.costAndValue.title}
        subtitle="ALL-INCLUSIVE LUXURY VALUE ANALYSIS"
        includedTitle="Why Seabourn Can Be Excellent Value:"
        extrasTitle="Why a Higher Regent Fare May Still Be Good Value:"
        included={data.costAndValue.seabournValueItems.map((item) => ({
          title: item,
          description: "Included in standard Seabourn cruise fares."
        }))}
        extras={data.costAndValue.regentValueItems.map((item) => ({
          title: item,
          description: "Included in comprehensive Regent Seven Seas all-inclusive fares."
        }))}
      />

      {/* ── 21b. ANGELA HUGHES PRICING GUIDE ── */}
      <div className="max-w-5xl mx-auto px-6 my-12">
        <AuthorityBox
          title={data.costAndValue.pricingComparison.title}
          content={
            <div>
              <p className="font-sans text-base text-slate-700 leading-relaxed mb-4 font-normal">
                {data.costAndValue.pricingComparison.intro} {data.costAndValue.pricingComparison.desc}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {data.costAndValue.pricingComparison.factors.map((f, i) => (
                  <span key={i} className="bg-navy-950/5 text-navy-950 px-3 py-1.5 rounded-lg text-xs font-semibold border border-navy-950/10 text-center">
                    ✦ {f}
                  </span>
                ))}
              </div>
              <p className="font-serif italic text-gold-700 text-sm font-semibold">
                "{data.costAndValue.pricingComparison.callout}"
              </p>
            </div>
          }
          author="Angela Hughes, Luxury Cruise Specialist"
        />
      </div>

      {/* ── 22. PROS & CONS (WEIGH IT UP) ── */}
      <ProsConsCards
        title="Seabourn Cruises: Pros & Cons"
        prosTitle={data.prosAndCons.seabourn.prosTitle}
        consTitle={data.prosAndCons.seabourn.consTitle}
        bestFor={data.prosAndCons.seabourn.pros}
        notBestFor={data.prosAndCons.seabourn.cons}
        type="pros-cons"
        bgClass="bg-white"
      />

      <ProsConsCards
        title="Regent Seven Seas: Pros & Cons"
        prosTitle={data.prosAndCons.regent.prosTitle}
        consTitle={data.prosAndCons.regent.consTitle}
        bestFor={data.prosAndCons.regent.pros}
        notBestFor={data.prosAndCons.regent.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ── 23. WHO SHOULD CHOOSE SEABOURN VS REGENT ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournIdealImg from "../../assets/Seabourn/seabourn-travelers.jpg";
      // import regentIdealImg from "../../assets/Regent/regent-travelers.jpg";
      */}
      <div className="w-full bg-ice-50 pt-20 pb-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-600 font-bold mb-3 block">
            {data.whoShouldChoose.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 tracking-tight">
            {data.whoShouldChoose.title}
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            {data.whoShouldChoose.intro}
          </p>
        </div>

        <BrandShowcase
          brand={{
            name: "Seabourn Cruises",
            bestFor: "Relaxed Luxury, Oceanfront Suites & Yacht-Like Atmosphere",
            whatMakesItStandOut: "Seabourn is especially strong for travelers who want intimate, yacht-like luxury without excessive formality, intuitive suite host attention, and flexible fine dining.",
            strengths: data.whoShouldChoose.chooseSeabourn,
            /* image: seabournIdealImg */
          }}
          index={0}
        />

        <BrandShowcase
          brand={{
            name: "Regent Seven Seas Cruises",
            bestFor: "Unrivaled Space, Balcony Suites & Included Excursions",
            whatMakesItStandOut: "Regent is compelling for travelers who prioritize spacious suites with private balconies, thousands of included shore excursions across 550+ ports, and a comprehensive luxury resort experience.",
            strengths: data.whoShouldChoose.chooseRegent,
            /* image: regentIdealImg */
          }}
          index={1}
        />
      </div>

      {/* ── 24. DECISION GUIDE (DECIDE IN SECONDS) ── */}
      <AuthorityGrid
        title={data.decisionGuide.title}
        subtitle={`${data.decisionGuide.intro} ${data.decisionGuide.note}`}
        items={data.decisionGuide.cards.map((c) => ({
          title: `${c.label} ${c.brand}`,
          description: `"${c.say}"`
        }))}
      />

      {/* ── 25. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
      <ExpertCredentials
        image={AboutImage}
        name={data.angelaHughes.name}
        title={data.angelaHughes.role}
        badge="LUXURY CRUISE EXPERTISE"
        experienceBadge="40+ YEARS EXPERTISE"
        paragraphs={data.angelaHughes.paragraphs}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.credentials}
        authorityBoxTitle="Why Plan Your Luxury Cruise With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury cruise mastery, Angela Hughes provides unbiased guidance comparing Seabourn and Regent Seven Seas to ensure you choose the perfect ship, suite, and itinerary."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 26. FREQUENTLY ASKED QUESTIONS (ALL 20 FAQS VERBATIM) ── */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions About Seabourn vs. Regent",
            subtitle: "Everything travelers need to know before choosing between Seabourn and Regent Seven Seas.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 27. FINAL VERDICT & RECOMMENDATION ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              `Our Recommendation: ${data.finalVerdict.recommendation}`
            ]
          }
        ]}
      />

      {/* ── 28. FINAL CENTER CTA ── */}
      <CenterCTA
        title={data.ctas.finalCta.title}
        description={data.ctas.finalCta.description}
        buttonText={data.ctas.finalCta.buttonText}
        buttonLink={data.ctas.finalCta.buttonLink}
      />
    </div>
  );
};

export default Seabournvsregent;
