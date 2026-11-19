import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Assets - Celebrity Cruises Fleet & Lifestyle Images (distinct set for IsCelebrityWorthIt)
import HeroAscentSantoriniImg from "@/assets/celebritycruises/IsCelebrityWorthIt/hero-ascent-santorini.webp";
import EdenLoungeImg from "@/assets/celebritycruises/IsCelebrityWorthIt/celebrity-eden-lounge.webp";
import LuxurySuiteImg from "@/assets/celebritycruises/IsCelebrityWorthIt/celebrity-luxury-suite.webp";
import VerandaCabinImg from "@/assets/celebritycruises/IsCelebrityWorthIt/celebrity-veranda-cabin.webp";
import ThermalSuiteImg from "@/assets/celebritycruises/IsCelebrityWorthIt/celebrity-thermal-suite.webp";
import MagicCarpetCaribImg from "@/assets/celebritycruises/IsCelebrityWorthIt/celebrity-magic-carpet-caribbean.webp";
import ApexOceanSailingImg from "@/assets/celebritycruises/IsCelebrityWorthIt/celebrity-apex-ocean-sailing.webp";
import AboutImage from "@/assets/AboutAngela.jpeg";

// Persona / Travel Style Images (with images for each travel persona)
import PersonaCouplesImg from "@/assets/celebritycruises/IsCelebrityWorthIt/persona-couples.webp";
import PersonaFamiliesImg from "@/assets/celebritycruises/IsCelebrityWorthIt/persona-families.webp";
import PersonaSoloImg from "@/assets/celebritycruises/IsCelebrityWorthIt/persona-solo.webp";
import PersonaFirstTimersImg from "@/assets/celebritycruises/IsCelebrityWorthIt/persona-first-timers.webp";
import PersonaOlderTravelersImg from "@/assets/celebritycruises/IsCelebrityWorthIt/persona-older-travelers.webp";
import PersonaYoungerAdultsImg from "@/assets/celebritycruises/IsCelebrityWorthIt/persona-younger-adults.webp";

// Fresh Destination Images (never used on previous page)
import DestAlaskaAlyeskaImg from "@/assets/celebritycruises/IsCelebrityWorthIt/dest-alaska-alyeska.webp";
import DestCaribbeanAntiguaImg from "@/assets/celebritycruises/IsCelebrityWorthIt/dest-caribbean-antigua.webp";
import DestMedRhodesImg from "@/assets/celebritycruises/IsCelebrityWorthIt/dest-med-rhodes.webp";
import DestGalapagosRabidaImg from "@/assets/celebritycruises/IsCelebrityWorthIt/dest-galapagos-rabida.webp";

// UI Components from src/components/ui/
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CardGrid from "@/components/ui/CardGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import BoutiqueVsResortFaceoff from "@/components/ui/BoutiqueVsResortFaceoff";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import LuxuryZigZagShowcase from "@/components/ui/LuxuryZigZagShowcase";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import FeatureGrid from "@/components/ui/FeatureGrid";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";
import FadeIn from "@/components/ui/FadeIn";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function IsCelebrityWorthIt() {
  // 6 Traveler Personas mapped for ThreeColumnGrid with photos and verdicts
  const personaImages = [
    PersonaCouplesImg,
    PersonaFamiliesImg,
    PersonaSoloImg,
    PersonaFirstTimersImg,
    PersonaOlderTravelersImg,
    PersonaYoungerAdultsImg,
  ];

  const travelerStyleItems = (data.travelerProfiles?.personas || []).map((persona, idx) => ({
    title: persona.name,
    category: persona.role,
    description: persona.description,
    highlight: persona.verdict,
    image: personaImages[idx] || HeroAscentSantoriniImg,
  }));

  // 4 Destinations mapped for InteractiveDestinationPanels with fresh, unused images
  const destinationImages = [
    DestAlaskaAlyeskaImg,
    DestCaribbeanAntiguaImg,
    DestMedRhodesImg,
    DestGalapagosRabidaImg,
  ];

  const destinationShowcaseItems = (data.destinationsWorthIt?.destinations || []).map((dest, idx) => ({
    title: dest.title,
    category: dest.subtitle,
    description: dest.description,
    bestFor: dest.verdict,
    image: destinationImages[idx] || HeroAscentSantoriniImg,
  }));

    // Brand matchup features for FeatureGrid
  const brandMatchupFeatures = (data.competitorComparison?.brandMatchups || []).map((matchup) => ({
    title: `Celebrity vs. ${matchup.competitor}`,
    description: matchup.description,
    highlight: "Brand Matchup Analysis",
  }));

  // Who Should Choose personas mapped
  const mappedWhoShouldChoose = (data.whoShouldChoose?.personas || []).map((p, idx) => ({
    icon: idx === 0 ? "Star" : "Compass",
    title: p.name,
    description: p.description,
    recommendation: p.role,
  }));

  return (
    <div className="w-full min-h-screen bg-white text-navy-950 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <meta
          name="keywords"
          content={[data.meta.primaryKeyword, ...data.meta.secondaryKeywords].join(", ")}
        />
        <script type="application/ld+json">{JSON.stringify(data.schemaData)}</script>
      </Helmet>
      <Nav />

      {/* Hero Section */}
      <ComparisonHero
        byline
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        badge={data.hero.badge}
        backgroundImage={HeroAscentSantoriniImg}
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Quick Answer: Is Celebrity Worth It? */}
        <ComparisonTable data={data.quickCompareTable} />


        {/* Section 1: What Makes Celebrity Cruises Worth the Money? (CardGrid) */}
        <div id="what-makes-it-worth-it">
          <CardGrid
            title={data.whatMakesItWorthIt.title}
            subtitle={data.whatMakesItWorthIt.subtitle}
            cards={data.whatMakesItWorthIt.cards}
            columns={3}
            stagger={false}
          />
        </div>

        {/* Section 2: Is Celebrity Cruises Really a Luxury Cruise Line? (EditorialFeatureShowcase) */}
        <div id="luxury-evaluation">
          <EditorialFeatureShowcase
            title={data.luxuryEvaluation.title}
            subtitle={data.luxuryEvaluation.subtitle}
            image={LuxurySuiteImg}
            features={data.luxuryEvaluation.features}
          />
          
        </div>

        {/* Section 3: Is Celebrity Cruises Worth the Price Compared With What Is Included? (ValueBreakdownSplit) */}
        <div id="inclusions-comparison">
          <ValueBreakdownSplit
            title={data.inclusionsBreakdown.title}
            subtitle={data.inclusionsBreakdown.subtitle}
            includedTitle={data.inclusionsBreakdown.includedTitle}
            extrasTitle={data.inclusionsBreakdown.extrasTitle}
            included={data.inclusionsBreakdown.included}
            extras={data.inclusionsBreakdown.extras}
            image={ThermalSuiteImg}
          />
        </div>

        {/* Section 4: Is Celebrity All Included Worth It? (CostValueAnalysisCards - Unique UI Component) */}
        <div id="all-included-evaluation">
          <CostValueAnalysisCards
            title={data.allIncludedEvaluation.title}
            subtitle={data.allIncludedEvaluation.subtitle}
            includedTitle={data.allIncludedEvaluation.includedTitle}
            extrasTitle={data.allIncludedEvaluation.extrasTitle}
            included={data.allIncludedEvaluation.included}
            extras={data.allIncludedEvaluation.extras}
          />

        </div>

        {/* Section 5: Traveler Profiles (ThreeColumnGrid - with images for each travel style) */}
        <div id="traveler-profiles">
          <ThreeColumnGrid
            title={data.travelerProfiles.title}
            subtitle={data.travelerProfiles.subtitle}
            items={travelerStyleItems}
          />
        </div>

        {/* Interlude CTA 1 */}
        <CenterCTA
          theme="dark"
          title="Plan Your Celebrity Cruise Vacation"
          description="Speak with Trips & Ships Luxury Travel about your preferred destination, travel dates, stateroom and overall budget."
          buttonText="Plan Your Celebrity Cruise"
          buttonLink="/contact"
          image={MagicCarpetCaribImg}
        />

        {/* Section 6: Upgrades Evaluation (BoutiqueVsResortFaceoff - Unique UI Component for The Retreat & AquaClass) */}
        <div id="upgrades-evaluation">
          <BoutiqueVsResortFaceoff
            data={data.upgradesWorthIt.retreatFaceoff}
            boutiqueImg={EdenLoungeImg}
            resortImg={VerandaCabinImg}
          />

          {/* Retreat Verdict & AquaClass Evaluation */}
          <div className="max-w-[1100px] mx-auto px-6 -mt-6 mb-16 space-y-6">
            {/* Retreat Verdict */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-xs uppercase tracking-widest font-bold text-navy-900 mb-2">
                The Retreat Verdict
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {data.upgradesWorthIt?.retreat?.verdict}
              </p>
            </div>

            {/* AquaClass Evaluation */}
            <div className="p-8 bg-ice-50 rounded-3xl border border-navy-100 shadow-sm space-y-4">
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ts-gold bg-white border border-slate-200 px-4 py-1.5 rounded-full inline-block">
                Wellness Focus
              </span>
              <h3 className="font-display text-2xl text-navy-950">
                {data.upgradesWorthIt?.aquaClass?.title}
              </h3>
              <p className="font-sans text-sm text-slate-700 leading-relaxed">
                {data.upgradesWorthIt?.aquaClass?.subtitle}
              </p>
              <div className="pt-4 border-t border-navy-200/50">
                <p className="font-sans text-sm font-semibold text-navy-900">
                  {data.upgradesWorthIt?.aquaClass?.verdict}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Destinations Evaluation (LuxuryZigZagShowcase - alternating luxury editorial showcase) */}
        <div id="destinations-evaluation">
          <LuxuryZigZagShowcase
            title={data.destinationsWorthIt.title}
            subtitle={data.destinationsWorthIt.subtitle}
            items={destinationShowcaseItems}
          />
        </div>

        {/* Section 8: Pros and Cons (ComparisonTable) */}
        <div id="pros-and-cons">
          <ComparisonTable data={data.prosAndCons} />
        </div>

        {/* Section 9: Who Should Choose Celebrity (GenericChecklistCards - Unique UI Component) */}
        <div id="who-should-choose">
          <GenericChecklistCards
            title={data.whoShouldChoose.title}
            subtitle={data.whoShouldChoose.subtitle}
            cards={data.whoShouldChoose.cards}
          />
        </div>

        {/* Section 10: Celebrity vs Other Cruise Lines (ComparisonTable + Editorial Matchups) */}
        <div id="competitor-comparison" className="py-12 bg-white">
          <ComparisonTable data={data.competitorComparison} />

          {/* Editorial Brand Matchups (FeatureGrid - Unique UI Component) */}
          <div id="brand-matchups">
            <FeatureGrid
              title="Celebrity Cruises In-Depth Brand Matchups"
              subtitle="Detailed comparisons against mainstream, premium, and luxury cruise lines."
              features={brandMatchupFeatures}
              bgClass="bg-white"
            />
          </div>
        </div>

        {/* Section 11: How to Decide Framework (StepByStepGuide) */}
        <div id="how-to-decide">
          <StepByStepGuide
            title={data.decisionSteps.title}
            subtitle="7-STEP EVALUATION FRAMEWORK"
            steps={data.decisionSteps.steps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* Section 12: Expert Credentials (Angela Hughes & Trips & Ships Luxury Travel) */}
        <div id="advisor-credentials">
          <ExpertCredentials
            title={data.angelaHughes.title}
            authorName="Angela Hughes"
            image={AboutImage}
            credentials={data.angelaHughes.agencyDetails}
            bio={data.angelaHughes.subtitle}
            quote={data.angelaHughes.goalNote}
            ctaText="Plan Your Celebrity Cruise"
            ctaLink="/contact"
          />

        </div>

        {/* Section 13: Frequently Asked Questions (FAQAccordion) */}
        <div id="faq">
          <FAQAccordion data={{ title: "Frequently Asked Questions", faqs: data.faq }} />
        </div>

       

        {/* Final Booking CTA */}
        <CenterCTA
          theme="dark"
          title="Plan Your Celebrity Cruise"
          description="Want to know whether Celebrity is the right cruise line for your next vacation? Discuss your travel preferences, budget and preferred destinations with Trips & Ships Luxury Travel."
          buttonText="Plan Your Celebrity Cruise"
          buttonLink="/contact"
          image={ApexOceanSailingImg}
        />
      </div>
    </div>
  );
}
