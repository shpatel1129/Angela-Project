import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// UI Components from src/components/ui/ (Strictly unique per section, no repetition)
import ComparisonHero from "@/components/ui/ComparisonHero";
import MagazineStoryIntro from "@/components/ui/MagazineStoryIntro";
import ComparisonTable from "@/components/ui/ComparisonTable";
import PricingFactorsGrid from "@/components/ui/PricingFactorsGrid";
import CardGrid from "@/components/ui/CardGrid";
import BrandComparisonTable from "@/components/ui/BrandComparisonTable";
import BudgetBreakdownTable from "@/components/ui/BudgetBreakdownTable";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CurvilinearGrid from "@/components/ui/CurvilinearGrid";
import TimelineBookingSteps from "@/components/ui/TimelineBookingSteps";
import SvsSDestinations from "@/components/ui/SvsSDestinations";
import LuxuryCruiseComparisonTable from "@/components/ui/LuxuryCruiseComparisonTable";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import SimplePersonaCards from "@/components/ui/SimplePersonaCards";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import ConclusionSection from "@/components/ui/ConclusionSection";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CenterCTA from "@/components/ui/CenterCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FadeIn from "@/components/ui/FadeIn";
import BrandTakeawaysGrid from "@/components/ui/BrandTakeawaysGrid";

// Dedicated Page Images from src/assets/celebritycruises/CelebrityCaptainsClub/
import CaptainHeroImg from "@/assets/celebritycruises/CelebrityCaptainsClub/celebrity-xcel-ship-exterior-golden-hour-sunset-glow.webp";
import StoryIntroImg from "@/assets/celebritycruises/CelebrityCaptainsClub/celebrity-flora-sunset-lounge-golden-hour-sunset-glow.webp";
import GalapagosExpeditionImg from "@/assets/celebritycruises/CelebrityCaptainsClub/celebrity-flora-aerial-golden-hour-sunset-glow.webp";
import RiverCruiseImg from "@/assets/celebritycruises/CelebrityCaptainsClub/celebrity-alaska-riverboat-discovery-iii-panoramic-scenic-view.webp";
import CtaBackdropImg from "@/assets/celebritycruises/CelebrityCaptainsClub/celebrity-equinox-aerial-istanbul-golden-hour-sunset-glow.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

export default function CelebrityCaptainsClub() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords.join(", ")} />
        <link rel="canonical" href={data.meta.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(data.schemaData)}
        </script>
      </Helmet>

      <Nav />

      {/* 1. HERO SECTION */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        badge={data.hero.badge}
        backgroundImage={CaptainHeroImg}
        bgPosition="bg-center"
        imageAlt="Celebrity Cruises Captain's Club Loyalty Guide"
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaLink={data.hero.secondaryCtaLink}
        author={data.hero.author}
        publishedDate="2026-03-30"
        readTime="16 min read"
      />

      {/* 2. PROGRAM OVERVIEW */}
      <MagazineStoryIntro
        badge={data.overview.badge}
        heading={data.overview.heading}
        paragraphs={data.overview.paragraphs}
        image={StoryIntroImg}
        imageAlt="Celebrity Cruises Captain's Club Member Lounge"
        imageCaption="Captain's Club rewards regular Celebrity guests with exclusive events, priority services, and onboard discounts."
      />

      {/* 3. QUICK ANSWER SUMMARY */}
      <section className="bg-white">
        <ComparisonTable data={data.quickAnswer} />
      </section>

      {/* 4. TIERS AT A GLANCE */}
      <section id="tiers-at-a-glance">
        <PricingFactorsGrid data={data.pricingFactorsData} />
      </section>

      {/* 5. DETAILED 6 TIERS BREAKDOWN */}
      <section className="bg-white">
        <CardGrid
          title={data.tierCardsData.title}
          subtitle={data.tierCardsData.subtitle}
          cards={data.tierCardsData.cards}
          columns={3}
          stagger={false}
        />
      </section>

      {/* 6. HOW DO YOU EARN POINTS? (OCEAN POINTS PER NIGHT) */}
      <section className="bg-white py-8">
        <div className="max-w-[1100px] mx-auto px-6 mb-8 text-center">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold mb-3 block">
              POINT ACCRUAL FORMULA
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {data.earningPoints.title}
            </h2>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {data.earningPoints.subtitle} {data.earningPoints.introText}
            </p>
          </FadeIn>
        </div>
        <BrandComparisonTable
          title={data.earningPoints.oceanTable.title}
          subtitle="Club Points earned per night based on stateroom level"
          headers={data.earningPoints.oceanTable.headers}
          rows={data.earningPoints.oceanTable.rows}
        />
      </section>

      {/* 7. SEVEN-NIGHT CRUISE EXAMPLES */}
      <section className="bg-ice-50">
        <BudgetBreakdownTable
          data={{
            title: data.earningPoints.sevenNightExample.title,
            description: data.earningPoints.sevenNightExample.subtitle,
            headers: data.earningPoints.sevenNightExample.headers,
            rows: data.earningPoints.sevenNightExample.rows,
            note: data.earningPoints.sevenNightExample.note
          }}
        />
      </section>

      {/* 8. SPECIAL EXPEDITIONS: GALAPAGOS & RIVER CRUISES */}
      <FeatureGrid
        title="Galapagos & River Cruises: Earning Captain’s Club Points"
        subtitle="Celebrity’s destination-focused expedition sailings and river cruises offer substantial loyalty accrual opportunities due to all-suite and premium cabin configurations."
        bgClass="bg-white"
        features={[
          {
            image: GalapagosExpeditionImg,
            title: data.specialCruises.galapagos.title,
            description: data.specialCruises.galapagos.description,
            tags: data.specialCruises.galapagos.rows.map(
              (r) => `${r[0]}: ${r[1]} Points per night`
            ),
            highlight: "Galapagos sailings earn points automatically across all expedition suite categories."
          },
          {
            image: RiverCruiseImg,
            title: data.specialCruises.river.title,
            description: data.specialCruises.river.description,
            tags: data.specialCruises.river.rows.map(
              (r) => `${r[0]}: ${r[1]} Points per night`
            ),
            highlight: "River cruise accommodations earn Captain's Club points that contribute directly to your status."
          }
        ]}
      />

      {/* 9. POINT ACCELERATORS: SOLO, POWER UP & GO GREEN */}
      <CurvilinearGrid
        title={data.acceleratorsGrid.title}
        subtitle={data.acceleratorsGrid.subtitle}
        paragraphs={data.acceleratorsGrid.paragraphs}
        items={data.acceleratorsGrid.items}
      />

      {/* 10. MILESTONE REWARDS */}
      <section className="bg-gray-50">
        <TimelineBookingSteps data={data.milestonesTimeline} />
        
        {/* Milestone Summary Table Component */}
        <BrandTakeawaysGrid
          title={data.milestoneBenefits?.table?.title || data.milestoneBenefits?.title}
          subtitle="Point Thresholds & Recognition"
          items={data.milestoneBenefits?.table?.items || data.milestoneBenefits?.milestones || data.milestoneBenefits?.table?.rows || []}
        />
      </section>

      {/* 11. STATUS MATCH: ROYAL CARIBBEAN & SILVERSEA */}
      <SvsSDestinations data={data.statusMatch} />

      {/* 12. POINTS CHOICE ALLOCATION MATRIX */}
      <LuxuryCruiseComparisonTable
        title={data.pointsChoice.table.title}
        headers={data.pointsChoice.table.headers}
        rows={data.pointsChoice.table.rows}
      />
      <div className="bg-navy-950 px-6 pb-16 text-center">
        <p className="text-slate-400 text-sm max-w-3xl mx-auto italic">
          {data.pointsChoice.note}
        </p>
      </div>

      {/* 13. LOGISTICS, EXPIRATION & HOW TO JOIN */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
                <span className="font-sans text-xs font-bold tracking-widest uppercase text-ts-gold block mb-2">POLICY DETAIL</span>
                <h3 className="font-display text-2xl text-navy-950 mb-4">{data.logisticsAndJoin.expiration.title}</h3>
                <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base">
                  {data.logisticsAndJoin.expiration.content}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
                <span className="font-sans text-xs font-bold tracking-widest uppercase text-ts-gold block mb-2">ACCOUNT TIMELINE</span>
                <h3 className="font-display text-2xl text-navy-950 mb-4">{data.logisticsAndJoin.posting.title}</h3>
                <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base">
                  {data.logisticsAndJoin.posting.content}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <StepByStepGuide
        title={data.logisticsAndJoin.howToJoin.title}
        subtitle={data.logisticsAndJoin.howToJoin.subtitle}
        steps={data.logisticsAndJoin.howToJoin.steps}
        layout="timeline"
      />

      {/* 14. WHICH CAPTAIN'S CLUB TIER IS WORTH REACHING? */}
      <SimplePersonaCards
        title={data.personaCards.title}
        subtitle={data.personaCards.subtitle}
        personas={data.personaCards.personas}
      />

      {/* 15. TIPS FOR MAXIMIZING BENEFITS */}
      <GenericChecklistCards
        title={data.tipsCards.title}
        subtitle="EXPERT STRATEGIES"
        cards={data.tipsCards.cards}
      />

    

      {/* 17. EXPERT CREDENTIALS (ANGELA HUGHES) */}
      <ExpertCredentials
        badge={data.expertCredentials.badge}
        title={data.expertCredentials.title}
        name="Angela Hughes"
        authorName={data.expertCredentials.authorName}
        image={AboutAngelaImg}
        authorityBoxTitle={data.expertCredentials.authorityBoxTitle}
        authoritySubtitle={data.expertCredentials.authoritySubtitle}
        experienceBadge={data.expertCredentials.experienceBadge}
        credentials={data.expertCredentials.credentials}
        bio={data.expertCredentials.bio}
        quote={data.expertCredentials.quote}
        quoteSubtitle={data.expertCredentials.quoteSubtitle}
        bottomText={data.expertCredentials.bottomText}
        ctaText={data.expertCredentials.ctaText}
        ctaLink={data.expertCredentials.ctaLink}
      />

      
      {/* 19. FAQS (30 VERBATIM QUESTIONS) */}
      <FAQAccordion data={data.faqs} />


      {/* 18. CENTER CTA */}
      <CenterCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
        image={CtaBackdropImg}
      />
    </div>
  );
}

