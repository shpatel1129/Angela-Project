import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Assets - Celebrity Cruises Infinite Veranda vs Balcony (100% Unique, dedicated folder)
import HeroVerandaImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-vista-dramatic-coastal-scenery.webp";
import InfiniteVerandaShowcaseImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-ultimate-suite-infinite-veranda-bedroom-panoramic-scenic-view.webp";
import TraditionalBalconyShowcaseImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-penthouse-suite-balcony-panoramic-scenic-view.webp";
import DifferencesSpaceImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-ultimate-suite-infinite-veranda-bedroom.webp";
import SpaceDimensionsImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-premium-suite-infinite-veranda-bedroom-panoramic-scenic-view.webp";
import ProsMagicCarpetImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-apex-magic-carpet.webp";
import TraditionalBalconyFeatureImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-suite-veranda-bedroom-panoramic-scenic-view.webp";

// Traveler Personas Assets
import CouplesVerandaImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-santorini-rooftop-couple.webp";
import FamiliesVerandaImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-perfect-day-cococay-cabanas-breathtaking-coastal-perspective.webp";
import SoloVerandaImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-seating-area-panoramic-scenic-view.webp";
import FirstTimersVerandaImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-edge-sydney-arrival-panoramic-scenic-view.webp";
import ScenicCruisesVerandaImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-edge-dawes-glacier.webp";

// Valuation & Cost Assets
import InfiniteWorthItImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-flora-penthouse-suite-veranda-panoramic-scenic-view.webp";
import TraditionalBalconyWorthExtraImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-solstice-blue-hull-aerial-tracey-arm-fjord.webp";

// Destinations Assets
import DestAlaskaGlacierImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-edge-alaska-endicott-arm-panoramic-scenic-view.webp";
import DestEuropeSantoriniImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-apex-olden-scenic-landscape-vantage.webp";
import DestCaribbeanCocoCayImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-perfect-day-cococay-aerial-golden-hour-sunset-glow.webp";

// CTA & Advisor Assets
import CtaShipEdgeImg from "@/assets/celebritycruises/CelebrityInfiniteVerandaVsBalcony/celebrity-edge-alaska.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// UI Components
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import CardGrid from "@/components/ui/CardGrid";
import AuthorityGrid from "@/components/ui/AuthorityGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import TravelerMatchmaker from "@/components/ui/TravelerMatchmaker";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";
import FadeIn from "@/components/ui/FadeIn";
import MasterImage from "@/components/ui/MasterImage";
import { Check, ShieldCheck, Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function CelebrityInfiniteVerandaVsBalcony() {
  // Quick Answer ComparisonTable
  const quickAnswerTableData = {
    title: data.quickAnswer.title,
    subtitle: data.quickAnswer.subtitle,
    headers: data.quickAnswer.columns,
    rows: (data.quickAnswer.rows || []).map((row) => [
      row.feature,
      row.infiniteVeranda,
      row.traditionalBalcony,
    ]),
    footnote: data.quickAnswer.recommendation,
  };

  // Section 1: Ships with Infinite Verandas Data (AuthorityGrid)
  const edgeShipsAuthorityItems = [
    {
      title: "Celebrity Edge",
      description: "Pioneered the breakthrough Infinite Veranda concept, integrating private open-air oceanfront space directly into the room.",
    },
    {
      title: "Celebrity Apex",
      description: "Expands the Edge Series with motorized floor-to-ceiling glass and refined window-side sitting areas.",
    },
    {
      title: "Celebrity Beyond",
      description: "Features expanded stateroom dimensions and seamless indoor-outdoor veranda spaces.",
    },
    {
      title: "Celebrity Ascent",
      description: "The fourth Edge Series vessel showcasing open-air connection with push-button convenience.",
    },
    {
      title: "Celebrity Xcel",
      description: "Celebrity's newest flagship offering the latest generation of Infinite Veranda design and technology.",
    },
  ];

  // Section 2: Traditional Balcony Categories Data (BrandPillarsShowcase)
  const traditionalBalconyPillarsData = {
    title: data.whatIsTraditionalBalcony.categoriesTitle,
    subtitle: data.whatIsTraditionalBalcony.categoriesIntro,
    pillars: [
      {
        title: data.whatIsTraditionalBalcony.categories[0].name,
        description: data.whatIsTraditionalBalcony.categories[0].detail,
        icon: "ship",
      },
      {
        title: data.whatIsTraditionalBalcony.categories[1].name,
        description: data.whatIsTraditionalBalcony.categories[1].detail,
        icon: "window",
      },
    ],
  };

  // Section 1: What is Infinite Veranda Features
  const infiniteVerandaFeatures = (data.whatIsInfiniteVeranda.features || []).map(
    (feat, idx) => ({
      title: `Feature 0${idx + 1}`,
      description: feat,
      icon: "Maximize",
      highlight: "EDGE CLASS DESIGN",
    })
  );

  // Section 2: What is Traditional Balcony Features
  const traditionalBalconyFeatures = (data.whatIsTraditionalBalcony.features || []).map(
    (feat, idx) => ({
      title: `Feature 0${idx + 1}`,
      description: feat,
      icon: "Sun",
      highlight: "CLASSIC BALCONY",
    })
  );

  // Section 3: Main Differences CardGrid Data
  const mainDifferencesCards = (data.mainDifferences.items || []).map(
    (item, idx) => {
      const icons = ["Maximize2", "Wind", "Eye", "CloudSun", "Layout"];
      return {
        icon: icons[idx % icons.length],
        title: item.title,
        badge: `Factor ${item.letter}`,
        description: item.description,
        bullets: [item.whichIsBetter],
      };
    }
  );

  // Section 5: Pros & Cons Showdown Data
  const showdownBrandA = {
    name: data.prosAndCons.infiniteVeranda.title,
    image: InfiniteVerandaShowcaseImg,
    features: [
      ...data.prosAndCons.infiniteVeranda.pros.map((p) => `PRO: ${p}`),
      ...data.prosAndCons.infiniteVeranda.cons.map((c) => `CONSIDERATION: ${c}`),
    ],
    points: [
      ...data.prosAndCons.infiniteVeranda.pros.map((p) => `PRO: ${p}`),
      ...data.prosAndCons.infiniteVeranda.cons.map((c) => `CONSIDERATION: ${c}`),
    ],
  };

  const showdownBrandB = {
    name: data.prosAndCons.traditionalBalcony.title,
    image: TraditionalBalconyFeatureImg,
    features: [
      ...data.prosAndCons.traditionalBalcony.pros.map((p) => `PRO: ${p}`),
      ...data.prosAndCons.traditionalBalcony.cons.map((c) => `CONSIDERATION: ${c}`),
    ],
    points: [
      ...data.prosAndCons.traditionalBalcony.pros.map((p) => `PRO: ${p}`),
      ...data.prosAndCons.traditionalBalcony.cons.map((c) => `CONSIDERATION: ${c}`),
    ],
  };

  // Section 6: Traveler Matchmaker Data
  const travelerMatchmakerImages = [
    CouplesVerandaImg,
    FamiliesVerandaImg,
    SoloVerandaImg,
    FirstTimersVerandaImg,
    ScenicCruisesVerandaImg,
  ];

  const matchmakerPersonas = (data.travelerTypes.personas || []).map((persona) => ({
    type: persona.title,
    reason: persona.description,
    recommendation: persona.recommendation,
  }));

  // Section 7: Is Infinite Veranda Worth It? Data Mapping
  const infiniteVerandaGoodChoice = (data.isInfiniteVerandaWorthIt.goodChoicePoints || []).map((point: string) => ({
    title: point,
    description: "",
  }));

  const infiniteVerandaNotBestChoice = (data.isInfiniteVerandaWorthIt.notBestChoicePoints || []).map((point: string) => ({
    title: point,
    description: "",
  }));

  // Section 8: Is Traditional Balcony Worth Extra? Data Mapping
  const traditionalBalconyComparison = (data.isTraditionalBalconyWorthExtra.comparisonPoints || []).map((point: string) => ({
    title: point,
    description: "",
  }));

  const traditionalBalconyAdvice = [
    {
      title: "Balcony Valuation Advice",
      description: data.isTraditionalBalconyWorthExtra.advice,
    },
  ];

  // Section 9: ThreeColumnGrid Destinations
  const destinationImages = [
    DestAlaskaGlacierImg,
    DestEuropeSantoriniImg,
    DestCaribbeanCocoCayImg,
  ];

  const destinationsGridItems = (data.destinationsComparison.destinations || []).map(
    (dest, idx) => ({
      title: dest.name,
      category: dest.category,
      description: dest.description,
      features: [dest.bestChoice],
      image: destinationImages[idx % destinationImages.length],
      imageAlt: `${dest.name} on Celebrity Cruises`,
    })
  );

  // Section 11: Advisor Credentials List
  const advisorCredentialsList = (data.advisorGuidance.services || []).map(
    (service) => service
  );

  // Section 12: FAQ Accordion Data
  const faqAccordionData = {
    title: data.faqs.title,
    subtitle: data.faqs.subtitle,
    items: data.faqs.items,
  };

  // Section 13: Conclusion Section Data
  const conclusionSections = [
    {
      title: data.finalVerdict.title,
      subtitle: data.finalVerdict.subtitle,
      paragraphs: data.finalVerdict.paragraphs,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.primaryKeyword} />
        <link rel="canonical" href={data.meta.canonical} />

        {/* Structured Schema */}
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      <Nav />

      <div className="w-full bg-white text-slate-800">
        {/* Hero Section */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            backgroundImage={HeroVerandaImg}
            byline={true}
            primaryCtaText="Compare Staterooms"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Consult Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>


        {/* Quick Answer Table (ComparisonTable) */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable data={quickAnswerTableData} />
        </div>

        {/* Section 1: What is a Celebrity Infinite Veranda (EditorialFeatureShowcase) */}
        <div id="infinite-veranda">
          <EditorialFeatureShowcase
            title={data.whatIsInfiniteVeranda.title}
            subtitle={data.whatIsInfiniteVeranda.subtitle}
            image={InfiniteVerandaShowcaseImg}
            features={infiniteVerandaFeatures}
            bgClass="bg-white"
          />

          {/* Which Celebrity Ships Have Infinite Verandas (AuthorityGrid) */}
          <div id="ships-with-infinite-verandas">
            <AuthorityGrid
              title={data.whatIsInfiniteVeranda.shipsTitle}
              subtitle={data.whatIsInfiniteVeranda.shipsIntro}
              items={edgeShipsAuthorityItems}
            />
          </div>
        </div>

        {/* Section 2: What is a Traditional Balcony (AsymmetricStoryIntro) */}
        <div id="traditional-balcony">
          <AsymmetricStoryIntro
            eyebrow="CLASSIC OUTDOOR TERRACE"
            heading={data.whatIsTraditionalBalcony.title}
            paragraphs={[
              data.whatIsTraditionalBalcony.subtitle,
              data.whatIsTraditionalBalcony.description,
              data.whatIsTraditionalBalcony.appealText,
            ]}
            highlights={data.whatIsTraditionalBalcony.features}
            image1={TraditionalBalconyShowcaseImg}
            image2={TraditionalBalconyFeatureImg}
            image1Alt="Traditional balcony stateroom on Celebrity Cruises"
            image2Alt="Celebrity traditional walk-out veranda outdoor space"
          />

          {/* Traditional Balcony Categories on Celebrity (BrandPillarsShowcase) */}
          <div id="traditional-balcony-categories">
            <BrandPillarsShowcase data={traditionalBalconyPillarsData} />

            <div className="max-w-4xl mx-auto px-6 -mt-12 pb-16">
              <p className="font-sans text-xs text-slate-500 text-center leading-relaxed">
                {data.whatIsTraditionalBalcony.categoriesNote}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Infinite Veranda vs Traditional Balcony: The Main Differences (CardGrid) */}
        <div id="main-differences">
          <CardGrid
            title={data.mainDifferences.title}
            subtitle={data.mainDifferences.subtitle}
            cards={mainDifferencesCards}
            columns={3}
            stagger={true}
          />
        </div>

        {/* Section 4: Which Stateroom Has More Space? */}
        <div id="space-comparison">
          <section className="w-full py-20 bg-slate-50 border-b border-slate-100">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <FadeIn>
                    <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-3 block">
                      DIMENSIONS & MEASUREMENTS
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
                      {data.spaceComparison.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-navy-800 mb-8"></div>
                    <div className="space-y-4 font-sans text-slate-700 leading-relaxed">
                      {(data.spaceComparison.introParagraphs || []).map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                      <h3 className="font-display text-xl text-navy-950 mb-4">
                        {data.spaceComparison.whatToCompareTitle}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {(data.spaceComparison.comparisonPoints || []).map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-ts-gold flex-shrink-0" />
                            <span className="font-sans text-xs text-slate-700 font-medium">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 bg-white border-l-4 border-ts-gold p-4 rounded-r-xl shadow-xs">
                      <p className="font-sans text-xs font-semibold text-navy-950">
                        {data.spaceComparison.advice}
                      </p>
                    </div>
                  </FadeIn>
                </div>

                <div className="lg:col-span-6">
                  <FadeIn direction="right">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                      <MasterImage
                        src={SpaceDimensionsImg}
                        alt="Celebrity Cruises Infinite Veranda stateroom living area"
                        className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white p-6 rounded-2xl bg-navy-950/80 backdrop-blur-md border border-white/10">
                        <span className="text-ts-gold font-sans text-xs uppercase tracking-widest font-bold block mb-1">
                          Celebrity Edge Benchmark
                        </span>
                        <p className="font-display text-2xl text-white">
                          243 Sq. Ft. Total Living Space
                        </p>
                        <p className="font-sans text-xs text-white/80 mt-1">
                          Includes 42 sq. ft. integrated indoor-outdoor veranda zone.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 5: Pros and Cons (ContainedShowdown) */}
        <div id="pros-and-cons">
          <ContainedShowdown
            title={data.prosAndCons.title}
            subtitle={data.prosAndCons.subtitle}
            brandA={showdownBrandA}
            brandB={showdownBrandB}
          />
        </div>

        {/* Section 6: Traveler Types (TravelerMatchmaker) */}
        <div id="traveler-types">
          <TravelerMatchmaker
            title={data.travelerTypes.title}
            subtitle={data.travelerTypes.subtitle}
            personas={matchmakerPersonas}
            images={travelerMatchmakerImages}
          />
        </div>

        {/* Section 7: Is Infinite Veranda Worth It? (CostValueAnalysisCards) */}
        <div id="worth-it">
          <CostValueAnalysisCards
            title={data.isInfiniteVerandaWorthIt.title}
            subtitle={`${data.isInfiniteVerandaWorthIt.subtitle} ${data.isInfiniteVerandaWorthIt.intro}`}
            includedTitle={data.isInfiniteVerandaWorthIt.goodChoiceWhenTitle}
            extrasTitle={data.isInfiniteVerandaWorthIt.notBestChoiceTitle}
            included={infiniteVerandaGoodChoice}
            extras={infiniteVerandaNotBestChoice}
          />
          {data.isInfiniteVerandaWorthIt.verdictText && (
            <div className="bg-white px-6 pb-16 text-center">
              <p className="text-slate-600 text-base max-w-4xl mx-auto italic font-sans font-medium">
                {data.isInfiniteVerandaWorthIt.verdictText}
              </p>
            </div>
          )}

          {/* Section 8: Is Traditional Balcony Worth the Extra Cost? (ValueBreakdownSplit) */}
          <div id="traditional-balcony-worth-extra">
            <ValueBreakdownSplit
              title={data.isTraditionalBalconyWorthExtra.title}
              subtitle={`${data.isTraditionalBalconyWorthExtra.subtitle} ${data.isTraditionalBalconyWorthExtra.intro}`}
              includedTitle={data.isTraditionalBalconyWorthExtra.compareBeforePayingTitle}
              included={traditionalBalconyComparison}
              extrasTitle="Balcony Valuation Advice"
              extras={traditionalBalconyAdvice}
              image={TraditionalBalconyWorthExtraImg}
            />
          </div>
        </div>

        {/* Section 9: Destinations Comparison (ThreeColumnGrid) */}
        <div id="destinations">
          <ThreeColumnGrid
            title={data.destinationsComparison.title}
            subtitle={data.destinationsComparison.subtitle}
            items={destinationsGridItems}
          />
        </div>

        {/* Section 10: How to Choose Steps (StepByStepGuide) */}
        <div id="how-to-choose">
          <StepByStepGuide
            title={data.howToChooseSteps.title}
            subtitle={data.howToChooseSteps.subtitle}
            steps={data.howToChooseSteps.steps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* Section 11: Travel Advisor Credentials (ExpertCredentials) */}
        <div id="expert-advisor">
          <ExpertCredentials
            title={data.advisorGuidance.title}
            authoritySubtitle={data.advisorGuidance.subtitle}
            authorityBoxTitle="STATEROOM PLANNING EXPERTISE"
            image={AboutAngelaImg}
            credentials={advisorCredentialsList}
            quote={data.advisorGuidance.companyNote}
            quoteSubtitle="Angela Hughes, CEO & Luxury Cruise Specialist"
            ctaText={data.advisorGuidance.contactCta.text}
            ctaLink={data.advisorGuidance.contactCta.link}
          />
        </div>

        {/* Section 12: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>

        {/* Final CTA */}
        <CenterCTA
          title={data.finalCta.title}
          description={data.finalCta.description}
          buttonText={data.finalCta.buttonText}
          buttonLink={data.finalCta.buttonLink}
          image={CtaShipEdgeImg}
          theme="dark"
        />
      </div>
    </>
  );
}

