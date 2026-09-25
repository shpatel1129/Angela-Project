import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import SvsSQuickAnswer from "../../components/ui/SvsSQuickAnswer";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import CardGrid from "../../components/ui/CardGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
import BrandShowcase from "../../components/ui/BrandShowcase";
import SvsSServiceDifference from "../../components/ui/SvsSServiceDifference";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import AuthorityBox from "../../components/ui/AuthorityBox";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import DualPhilosophyShowcase from "../../components/ui/DualPhilosophyShowcase";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import ContainedShowdown from "../../components/ui/ContainedShowdown";
import CabinFeatureGrid from "../../components/ui/CabinFeatureGrid";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import InclusionCheckerGrid from "../../components/ui/InclusionCheckerGrid";
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
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#article",
      "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/"
      },
      "headline": "Seabourn vs. Silversea: Which Luxury Cruise Line Is Right for You?",
      "description": "Seabourn vs Silversea compared across ships, suites, dining, service, inclusions, expeditions and overall value. Find out which luxury cruise line is right for you.",
      "articleSection": [
        "Seabourn vs. Silversea Comparison",
        "Ships",
        "Suites",
        "Dining",
        "Service",
        "Inclusions",
        "Shore Excursions",
        "Expedition Cruises",
        "Antarctica",
        "Couples",
        "Solo Travelers",
        "Families",
        "Value",
        "Frequently Asked Questions"
      ],
      "keywords": [
        "Seabourn vs Silversea",
        "Seabourn or Silversea",
        "Seabourn vs Silversea cruises",
        "Seabourn vs Silversea comparison",
        "Seabourn vs Silversea expedition",
        "Seabourn vs Silversea suites",
        "Seabourn vs Silversea dining",
        "Seabourn vs Silversea service",
        "Seabourn vs Silversea inclusions",
        "Seabourn vs Silversea price",
        "Seabourn vs Silversea value",
        "Seabourn or Silversea for couples",
        "Seabourn vs Silversea Antarctica"
      ],
      "author": {
        "@type": "Person",
        "name": "Angela Hughes",
        "url": "https://www.tripsandships.com/about-angela-hughes/"
      },
      "publisher": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
      "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
      "name": "Seabourn vs Silversea: Ships, Suites, Dining & Value",
      "description": "Seabourn vs Silversea compared across ships, suites, dining, service, inclusions, expeditions and overall value.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#breadcrumb"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#faq",
      "url": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/#breadcrumb",
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
          "name": "Seabourn vs. Silversea",
          "item": "https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/"
        }
      ]
    }
  ]
};

const SeabournVsSilversea = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Seabourn vs Silversea: Ships, Suites, Dining & Value</title>
        <meta name="title" content="Seabourn vs Silversea: Ships, Suites, Dining & Value" />
        <meta
          name="description"
          content="Seabourn vs Silversea compared across ships, suites, dining, service, inclusions, expeditions and overall value. Find out which luxury cruise line is right for you."
        />
        <meta
          name="keywords"
          content="Seabourn vs Silversea, Seabourn or Silversea, Seabourn vs Silversea cruises, Seabourn vs Silversea comparison, Seabourn vs Silversea expedition, Seabourn vs Silversea suites, Seabourn vs Silversea dining, Seabourn vs Silversea service, Seabourn vs Silversea inclusions, Seabourn vs Silversea price, Seabourn vs Silversea value, Seabourn or Silversea for couples, Seabourn vs Silversea Antarctica"
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/seabourn-vs-silversea/" />
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
        placeholderLabel="SEABOURN VS SILVERSEA FLEET"
        badgeTitle="Ultra-Luxury Benchmark"
        badgeDescription="Comparing intimate yacht luxury with global expedition immersion."
        highlights={[
          "Seabourn: Yacht-style atmosphere & all-oceanfront suites",
          "Silversea: Butler service & extensive global expedition fleet",
          "All-inclusive fine dining, fine wines & premium spirits",
          "Polar expedition capabilities in Antarctica & Arctic"
        ]}
      />

      {/* ── 3. QUICK ANSWER ── */}
      <SvsSQuickAnswer
        data={{
          title: data.quickAnswer.title,
          intro: data.quickAnswer.intro,
          silverseaSummary: "Silversea combines traditional ultra-luxury with an extensive classic and expedition fleet, personalized butler service in every suite category, S.A.L.T. culinary immersion, and unmatched global destination reach.",
          seabournSummary: "Seabourn delivers an intimate, relaxed private-yacht atmosphere with spacious oceanfront suites, intuitive suite host service, complimentary caviar, flexible fine dining, and purposeful expedition ships.",
          comparisonTable: {
            headers: ["Travel Priority", "Recommended Cruise Line"],
            rows: [
              ["Relaxed, yacht-like social atmosphere", "Seabourn"],
              ["Butler service in every suite category", "Silversea"],
              ["Complimentary caviar & fine champagne", "Seabourn"],
              ["Broadest global expedition destinations", "Silversea"],
              ["Intuitive suite host & attendant care", "Seabourn"],
              ["Destination-oriented culinary programs (S.A.L.T.)", "Silversea"]
            ]
          },
          bottomLine: data.quickAnswer.keyTakeaway
        }}
      />

      {/* ── 3b. PRIORITY CHECKLIST CARDS ── */}
      <GenericChecklistCards
        title="Priorities Checklist: Seabourn vs. Silversea"
        cards={[
          {
            title: "Choose Seabourn If You Prioritize:",
            items: data.quickAnswer.seabournPriorities
          },
          {
            title: "Choose Silversea If You Prioritize:",
            items: data.quickAnswer.silverseaPriorities
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
            badge: data.biggestDifference.silversea.badge,
            title: data.biggestDifference.silversea.title,
            description: data.biggestDifference.silversea.description,
            features: data.biggestDifference.silversea.features
          }
        }}
      />

      {/* ── 6. FLEET BREAKDOWN ── */}
      <div id="fleets">
        <CardGrid
          title={data.fleetComparison.title}
          subtitle={data.fleetComparison.subtitle}
          cards={data.fleetComparison.cards}
          columns={4}
        />
      </div>

      {/* ── CTA 1: FLEET COMPARISON ── */}
      <CenterCTA
        title={data.ctas.fleetCta.title}
        description={data.ctas.fleetCta.description}
        buttonText={data.ctas.fleetCta.buttonText}
        buttonLink={data.ctas.fleetCta.buttonLink}
        theme="dark"
      />

      {/* ── 7. WHICH HAS THE BETTER SHIPS ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournShipsImg from "../../assets/Seabourn/seabourn-fleet.jpg";
      // import silverseaShipsImg from "../../assets/Silversea/silversea-fleet.jpg";
      */}
      <DualPhilosophyShowcase
        data={{
          title: data.whichHasBetterShips.title,
          subtitle: data.whichHasBetterShips.intro,
          sailing: {
            label: "Seabourn Ships",
            philosophy: "Intimate Yacht Atmosphere & Small-Ship Luxury",
            points: data.whichHasBetterShips.seabournWins
          },
          allSuite: {
            label: "Silversea Ships",
            philosophy: "Expansive Fleet Variety & Global Reach",
            points: data.whichHasBetterShips.silverseaWins
          },
          verdict: data.whichHasBetterShips.note
        }}
        /* imageSailing={seabournShipsImg} */
        /* imageAllSuite={silverseaShipsImg} */
      />

      {/* ── 8. SUITES & BUTLER SERVICE ── */}
      <SvsSServiceDifference
        data={{
          title: "Silversea Butler Service vs. Seabourn Suite Service",
          description: data.suitesComparison.intro,
          brand1Name: "SILVERSEA BUTLER SERVICE",
          silverseaTitle: "Dedicated Butler in Every Suite",
          silverseaText: "Silversea provides formalized, white-glove butler service across every suite category—from entry-level Vista Suites to the Owner's Suite. Butlers handle in-suite breakfast, unpacking, packing, dinner reservations, shoe shine, and bespoke concierge assistance.",
          brand2Name: "SEABOURN SUITE SERVICE",
          seabournTitle: "Intuitive Suite Host & Attendant",
          seabournText: "Seabourn pairs every suite with a dedicated Suite Host and Suite Attendant. This model focuses on warm, intuitive, and relaxed luxury—ensuring your stateroom is immaculately maintained, custom bar fully stocked, and special requests honored without formal stiffness."
        }}
      />

      {/* ── 8b. WHICH HAS BETTER SUITES ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournSuitesImg from "../../assets/Seabourn/seabourn-suites.jpg";
      // import silverseaSuitesImg from "../../assets/Silversea/silversea-suites.jpg";
      */}
      <LuxuryFeatureShowcase
        title={data.suitesComparison.whichBetter.title}
        subtitle={data.suitesComparison.whichBetter.intro}
        items={[
          {
            title: "Seabourn Suites",
            subtitle: "Seabourn May Be Better For:",
            description: "Seabourn focuses on spacious oceanfront suites, intuitive suite host care, large private verandas, and relaxed yacht-style living.",
            features: data.suitesComparison.whichBetter.seabournBetter,
            /* image: seabournSuitesImg */
          },
          {
            title: "Silversea Suites",
            subtitle: "Silversea May Be Better For:",
            description: "Silversea delivers formalized white-glove butler service in every suite category and a wider variety of expansive layout choices.",
            features: data.suitesComparison.whichBetter.silverseaBetter,
            /* image: silverseaSuitesImg */
          }
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-12 mb-16 text-center">
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

      {/* ── 9. DINING SHOWDOWN ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournDiningImg from "../../assets/Seabourn/seabourn-dining.jpg";
      // import silverseaDiningImg from "../../assets/Silversea/silversea-dining.jpg";
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
            badge: data.diningComparison.silversea.badge,
            title: data.diningComparison.silversea.title,
            description: data.diningComparison.silversea.description,
            features: data.diningComparison.silversea.features
          }
        }}
        /* regentImage={seabournDiningImg} */
        /* vikingImage={silverseaDiningImg} */
      />

      {/* ── 9b. WHICH HAS BETTER FOOD ── */}
      <GenericChecklistCards
        title="Which Has Better Food?"
        subtitle="GASTRONOMY PREFERENCE"
        cards={[
          {
            title: "Choose Seabourn if you prefer:",
            items: data.diningComparison.seabournFoodPrefer
          },
          {
            title: "Choose Silversea if you prefer:",
            items: data.diningComparison.silverseaFoodPrefer
          }
        ]}
      />

      {/* ── 10. ONBOARD SERVICE STANDARDS ── */}
      <InclusionCheckerGrid
        eyebrow="SERVICE COMPARISON"
        title={data.serviceComparison.title}
        subtitle="Comparing Seabourn's intuitive suite hosts with Silversea's personalized butler service."
        inclusionsTitle="Seabourn Service Qualities:"
        exclusionsTitle="Silversea Service Qualities:"
        inclusions={data.serviceComparison.seabournService}
        exclusions={data.serviceComparison.silverseaService}
      />

      {/* ── 11. INCLUSIONS BREAKDOWN ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournInclusionsImg from "../../assets/Seabourn/seabourn-inclusions.jpg";
      // import silverseaInclusionsImg from "../../assets/Silversea/silversea-inclusions.jpg";
      */}
      <HighlightsSplit
        title={data.inclusionsComparison.title}
        items={[
          {
            title: "Seabourn Inclusions",
            icon: "Sparkles",
            description: data.inclusionsComparison.intro,
            bulletPoints: data.inclusionsComparison.seabournIncludes,
            /* image: seabournInclusionsImg */
          },
          {
            title: "Silversea Inclusions",
            icon: "Crown",
            description: data.inclusionsComparison.intro,
            bulletPoints: data.inclusionsComparison.silverseaIncludes,
            /* image: silverseaInclusionsImg */
          }
        ]}
      />

      {/* ── 11b. WHICH HAS BETTER INCLUSIONS ── */}
      <InclusionCheckerGrid
        eyebrow="Inclusions Comparison"
        title="Which Cruise Line Has Better Inclusions?"
        subtitle={data.inclusionsComparison.note}
        inclusionsTitle="Seabourn Stands Out For:"
        exclusionsTitle="Silversea Stands Out For:"
        inclusions={data.inclusionsComparison.seabournStandsOut}
        exclusions={data.inclusionsComparison.silverseaStandsOut}
      />

      {/* ── CTA 3: INCLUSIONS ── */}
      <CenterCTA
        title={data.ctas.inclusionsCta.title}
        description={data.ctas.inclusionsCta.description}
        buttonText={data.ctas.inclusionsCta.buttonText}
        buttonLink={data.ctas.inclusionsCta.buttonLink}
        theme="dark"
      />

      {/* ── 12. SHORE EXCURSIONS ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournExcursionsImg from "../../assets/Seabourn/seabourn-excursions.jpg";
      // import silverseaExcursionsImg from "../../assets/Silversea/silversea-excursions.jpg";
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
            label: data.shoreExcursions.silversea.title,
            philosophy: data.shoreExcursions.silversea.badge,
            points: data.shoreExcursions.silversea.features
          },
          verdict: "Compare excursion selections destination by destination to find the best match for your exploration style."
        }}
        /* imageSailing={seabournExcursionsImg} */
        /* imageAllSuite={silverseaExcursionsImg} */
      />

      {/* ── 13. ANTARCTICA & EXPEDITION CRUISES ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournAntarcticaImg from "../../assets/Seabourn/seabourn-antarctica.jpg";
      // import silverseaAntarcticaImg from "../../assets/Silversea/silversea-antarctica.jpg";
      */}
      <LuxuryZigZagShowcase
        title={data.antarcticaAndExpeditions.antarcticaTitle}
        subtitle="EXPEDITION SHOWDOWN IN THE POLAR REGIONS"
        items={[
          {
            title: "Seabourn Antarctica Expedition",
            category: "PURPOSE-BUILT POLAR EXPEDITION",
            description: "Seabourn operates its newest ultra-luxury purpose-built expedition ships (Seabourn Venture & Seabourn Pursuit) in Antarctica, combining world-class PC6 polar hardware with intimate yacht service.",
            bestFor: data.antarcticaAndExpeditions.seabournAntarctica.join(" • "),
            /* image: seabournAntarcticaImg, */
            placeholderLabel: "SEABOURN ANTARCTICA EXPEDITION"
          },
          {
            title: "Silversea Antarctica Expedition",
            category: "EXPEDITION FLEET & FLY-CRUISE",
            description: "Silversea offers one of the most comprehensive Antarctica expedition programs in luxury cruising, featuring multiple dedicated ice-class expedition vessels (including Silver Endeavour, Silver Wind, and Silver Cloud) with Antarctica Bridge fly-cruise options.",
            bestFor: data.antarcticaAndExpeditions.silverseaAntarctica.join(" • "),
            /* image: silverseaAntarcticaImg, */
            placeholderLabel: "SILVERSEA ANTARCTICA EXPEDITION"
          }
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 -mt-12 mb-16 text-center">
        <p className="font-sans text-slate-500 italic text-sm">
          {data.antarcticaAndExpeditions.antarcticaKey}
        </p>
      </div>

      {/* ── 13b. ANTARCTICA MATRIX ── */}
      <ComparisonTable
        data={{
          title: data.antarcticaAndExpeditions.matrixTitle,
          headers: data.antarcticaAndExpeditions.matrixHeaders,
          rows: data.antarcticaAndExpeditions.matrixRows
        }}
      />

      {/* ── 13c. EXPEDITION CRUISES SHOWDOWN ── */}
      
      <CabinFeatureGrid
        data={{
          title: data.antarcticaAndExpeditions.expeditionTitle,
          subtitle: data.antarcticaAndExpeditions.expeditionIntro,
          oceanview: {
            title: "Seabourn Expedition Ships Feature",
            bestFor: "Purpose-built Polar Class 6 expedition ships (Venture & Pursuit) designed for ultra-luxury remote exploration.",
            advantages: data.antarcticaAndExpeditions.seabournExpeditionFeatures
          },
          balcony: {
            title: "Silversea's Expedition Portfolio Covers",
            bestFor: "A large and diverse luxury expedition fleet delivering unmatched global coverage across all 7 continents.",
            advantages: data.antarcticaAndExpeditions.silverseaExpeditionDestinations
          }
        }}
        /* image1={seabournExpeditionImg} */
        /* image2={silverseaExpeditionImg} */
      />

      {/* ── CTA 4: POLAR EXPEDITIONS ── */}
      <CenterCTA
        title={data.ctas.expeditionCta.title}
        description={data.ctas.expeditionCta.description}
        buttonText={data.ctas.expeditionCta.buttonText}
        buttonLink={data.ctas.expeditionCta.buttonLink}
        theme="dark"
      />

      {/* ── 14. TRAVELER PROFILES & DEMOGRAPHICS ── */}
      <TravelerProfileTabs
        title={data.travelerTypes.title}
        subtitle={data.travelerTypes.subtitle}
        profiles={data.travelerTypes.profiles}
      />

      {/* ── 15. ONBOARD LIFESTYLE (Dress Code, Entertainment, Spa, Wi-Fi) ── */}
      <CardGrid
        title={data.onboardLifestyle.title}
        subtitle={data.onboardLifestyle.subtitle}
        cards={data.onboardLifestyle.cards}
        columns={4}
      />

      {/* ── 16. MOOD & ATMOSPHERE ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournAtmosphereImg from "../../assets/Seabourn/seabourn-atmosphere.jpg";
      // import silverseaAtmosphereImg from "../../assets/Silversea/silversea-atmosphere.jpg";
      */}
      <ContainedShowdown
        title={data.atmosphereComparison.title}
        brandA={{
          name: "Seabourn Atmosphere",
          /* image: seabournAtmosphereImg, */
          features: data.atmosphereComparison.seabourn.items
        }}
        brandB={{
          name: "Silversea Atmosphere",
          /* image: silverseaAtmosphereImg, */
          features: data.atmosphereComparison.silversea.items
        }}
      />

      {/* ── CTA 5: TAILOR-MADE CRUISING ── */}
      <CenterCTA
        title={data.ctas.atmosphereCta.title}
        description={data.ctas.atmosphereCta.description}
        buttonText={data.ctas.atmosphereCta.buttonText}
        buttonLink={data.ctas.atmosphereCta.buttonLink}
        theme="dark"
      />

      {/* ── 17. COST & VALUE + PRICING COMPARISON ── */}
      <CostValueAnalysisCards
        title={data.costAndValue.title}
        subtitle="ALL-INCLUSIVE LUXURY VALUE"
        includedTitle="What Does Seabourn Value Include?"
        extrasTitle="What Does Silversea Value Include?"
        included={[
          {
            title: "Dining",
            description: "Complimentary open-seating dining across all gourmet venues without surcharges."
          },
          {
            title: "Premium beverages",
            description: "Fine spirits, signature cocktails, and specialty coffees poured freely anytime."
          },
          {
            title: "Fine wines",
            description: "Sommelier-curated fine wines poured generously during lunch and dinner service."
          },
          {
            title: "Champagne",
            description: "Welcome champagne in-suite and premium bubbly available at all bars and lounges."
          },
          {
            title: "Caviar",
            description: "Signature complimentary 'Caviar in the Surf' and on-demand in-suite caviar service."
          },
          {
            title: "Wi-Fi",
            description: "Unlimited high-speed Starlink internet access included for every suite guest."
          },
          {
            title: "Personalized service",
            description: "Intuitive Suite Host & Attendant pairing focused on warm, yacht-like hospitality."
          },
          {
            title: "In-suite dining",
            description: "Multi-course dining served course-by-course directly from the main restaurant menu."
          },
          {
            title: "Selected expedition experiences",
            description: "Zodiac exploration, kayaks, and expedition team lectures on purpose-built polar ships."
          }
        ]}
        extras={[
          {
            title: "Food",
            description: "Diverse specialty restaurants, regional culinary concepts, and S.A.L.T. dining."
          },
          {
            title: "Beverages",
            description: "Select fine wines, champagne, craft beers, and premium spirits served complimentary."
          },
          {
            title: "Wi-Fi",
            description: "Unlimited standard or high-speed internet connectivity across all suite tiers."
          },
          {
            title: "Butler service",
            description: "Dedicated, professionally trained white-glove butler assistance in every single suite."
          },
          {
            title: "Gratuities",
            description: "All onboard shipboard and service staff gratuities covered in your cruise fare."
          },
          {
            title: "Personalized service",
            description: "Formal European-style concierge attendance, custom packing/unpacking, and reservations."
          },
          {
            title: "Expedition activities and landings (All-Inclusive Plus)",
            description: "Guided Zodiac excursions, polar landings, and expert naturalist-led field trips included."
          }
        ]}
      />

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

      {/* ── 18. PROS & CONS (WEIGH IT UP) ── */}
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
        title="Silversea Cruises: Pros & Cons"
        prosTitle={data.prosAndCons.silversea.prosTitle}
        consTitle={data.prosAndCons.silversea.consTitle}
        bestFor={data.prosAndCons.silversea.pros}
        notBestFor={data.prosAndCons.silversea.cons}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ── 19. WHO SHOULD CHOOSE SEABOURN VS SILVERSEA ── */}
      {/*
      // Images for both cards (uncomment and pass when image assets are ready):
      // import seabournIdealImg from "../../assets/Seabourn/seabourn-travelers.jpg";
      // import silverseaIdealImg from "../../assets/Silversea/silversea-travelers.jpg";
      */}
      <div className="w-full bg-ice-50 pt-20 pb-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-600 font-bold mb-3 block">
            {data.whoShouldChoose.eyebrow || "The Right Fit"}
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
            whatMakesItStandOut: "Seabourn is especially strong for travelers who want ultra-luxury without excessive formality, intuitive suite host attention, and flexible fine dining.",
            strengths: data.whoShouldChoose.chooseSeabourn,
            /* image: seabournIdealImg */
          }}
          index={0}
        />

        <BrandShowcase
          brand={{
            name: "Silversea Cruises",
            bestFor: "White-Glove Butler Service & Global Expedition Breadth",
            whatMakesItStandOut: "Silversea is compelling for travelers who prioritize formalized personalized butler service across every suite category and unparalleled worldwide expedition itineraries.",
            strengths: data.whoShouldChoose.chooseSilversea,
            /* image: silverseaIdealImg */
          }}
          index={1}
        />
      </div>

      {/* ── 20. DECISION GUIDE (DECIDE IN SECONDS) ── */}
      <AuthorityGrid
        title={data.decisionGuide.title}
        subtitle={`${data.decisionGuide.intro} ${data.decisionGuide.note}`}
        items={data.decisionGuide.cards.map((c) => ({
          title: `${c.label} ${c.brand}`,
          description: `"${c.say}"`
        }))}
/>

      {/* ── 21. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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
        authoritySubtitle="With over 40 years of luxury cruise mastery, Angela Hughes provides unbiased guidance comparing Seabourn and Silversea to ensure you choose the perfect ship, suite, and itinerary."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 22. FREQUENTLY ASKED QUESTIONS (ALL 14 FAQS VERBATIM) ── */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions About Seabourn vs. Silversea",
            subtitle: "Everything travelers need to know before choosing between Seabourn and Silversea.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 23. FINAL VERDICT & RECOMMENDATION ── */}
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

      {/* ── 24. CENTER CTA ── */}
      <CenterCTA
        title={data.centerCta.title}
        description={data.centerCta.description}
        buttonText={data.centerCta.buttonText}
        buttonLink={data.centerCta.buttonLink}
      />
    </div>
  );
};

export default SeabournVsSilversea;