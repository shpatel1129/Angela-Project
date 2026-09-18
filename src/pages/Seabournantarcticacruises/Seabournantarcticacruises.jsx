import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import ComparisonTable from "../../components/ui/ComparisonTable";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import CardGrid from "../../components/ui/CardGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import FeatureSplit from "../../components/ui/FeatureSplit";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import CabinFeatureGrid from "../../components/ui/CabinFeatureGrid";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";

// Data Source
import data from "./data.json";

// Optional Image imports (commented out per requirements)
// import HeroImage from "../../assets/Seabournantarcticacruises/hero.jpg";
// import ShipVentureImage from "../../assets/Seabournantarcticacruises/venture.jpg";
// import ShipPursuitImage from "../../assets/Seabournantarcticacruises/pursuit.jpg";
// import ZodiacLandingImage from "../../assets/Seabournantarcticacruises/zodiac.jpg";
// import ZodiacIncludedImage from "../../assets/Seabournantarcticacruises/zodiac-included.jpg";
// import GuaranteedWildlifeImage from "../../assets/Seabournantarcticacruises/guaranteed-wildlife.jpg";
// import WildlifePenguinsImage from "../../assets/Seabournantarcticacruises/penguins.jpg";
// import WildlifeWhalesImage from "../../assets/Seabournantarcticacruises/whales.jpg";

const SeabournAntarcticaCruises = () => {
  return (
    <div className="w-full bg-white font-sans text-navy-900 antialiased">
      {/* ── SEO / Meta Tags ────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <script type="application/ld+json">
          {JSON.stringify(data.schemaData)}
        </script>
      </Helmet>

      {/* ── Navigation ────────────────────────────────────────────── */}
      <Nav />

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <div id="content">
        <ComparisonHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          badge={data.hero.badge}
          // backgroundImage={HeroImage}
          secondaryCtaText={data.hero.ctaText}
          secondaryCtaLink={data.hero.ctaLink}
        />
      </div>

      {/* ── 2. Quick Answer: Is Seabourn a Good Choice? ───────────── */}
      <EditorialIntroSection
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        description={`${data.quickAnswer.intro}\n\n${data.quickAnswer.conclusion}`}
        highlights={data.quickAnswer.highlights}
        placeholderLabel={data.quickAnswer.placeholderLabel}
        badgeTitle={data.quickAnswer.badgeTitle}
        badgeDescription={data.quickAnswer.badgeDescription}
        // image={ZodiacLandingImage}
      />

      {/* ── 3. The Fleet: Seabourn Antarctica Ships ───────────────── */}
      <ThreeColumnGrid
        title={data.ships.title}
        subtitle={data.ships.subtitle}
        items={data.ships.items}
      />

      {/* ── 4. Venture vs. Pursuit Comparison Table ───────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.ventureVsPursuit} />
        {data.ventureVsPursuit.note && (
          <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-12">
            <div className="p-4 bg-ice-50 border-l-4 border-navy-800 rounded-r-xl text-sm text-slate-700 leading-relaxed">
              <strong>Comparison Advice:</strong> {data.ventureVsPursuit.note}
            </div>
          </div>
        )}
      </div>

      {/* ── 5. The Route: Where Do Seabourn Antarctica Cruises Go? ── */}
      <ThreeColumnGrid
        title={data.route.heading}
        subtitle={data.route.intro}
        items={data.route.cards}
      />

      {/* ── 6. CTA 1 ──────────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta1.title}
        description={data.cta1.description}
        buttonText={data.cta1.buttonText}
        buttonLink={data.cta1.buttonLink}
        theme={data.cta1.theme}
      />

      {/* ── 7. Typical Day in Antarctica ───────────────────────────── */}
      <StepByStepGuide
        title={data.typicalDay.title}
        subtitle={data.typicalDay.subtitle}
        steps={data.typicalDay.steps}
      />
      {data.typicalDay.note && (
        <div className="w-full bg-ice-50 pb-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm italic text-slate-500 font-sans">
              *{data.typicalDay.note}
            </p>
          </div>
        </div>
      )}

      {/* ── 8. Zodiac Landings ─────────────────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.zodiacLandings.eyebrow}
        heading={data.zodiacLandings.heading}
        description={`${data.zodiacLandings.intro}\n\n${data.zodiacLandings.takeaway}`}
        highlights={data.zodiacLandings.listItems}
        placeholderLabel={data.zodiacLandings.placeholderLabel}
        badgeTitle="Zodiac Exploration"
        badgeDescription="Daily Zodiac operations bringing you right up to ice floes and wildlife."
      />

      {/* ── 9. Zodiac Landing Steps ───────────────────────────────── */}
      <CardGrid
        title={data.zodiacSteps.title}
        subtitle={data.zodiacSteps.subtitle}
        cards={data.zodiacSteps.cards.map((c) => ({
          title: c.title,
          description: c.description,
          icon: "Compass",
        }))}
        columns={4}
      />
      {data.zodiacSteps.note && (
        <div className="bg-slate-50 pb-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm italic text-slate-500 font-sans">
              *{data.zodiacSteps.note}
            </p>
          </div>
        </div>
      )}

      {/* ── 10. Included Excursions Q&A ───────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.includedQA.eyebrow}
        heading={data.includedQA.heading}
        paragraphs={[
          data.includedQA.intro,
          data.includedQA.listTitle,
          `⚠️ ${data.includedQA.warning}`,
        ]}
        highlights={data.includedQA.listItems}
        image1Placeholder="SEABOURN ZODIAC EXCURSIONS"
        image2Placeholder="ANTARCTIC LANDINGS & EXPEDITIONS"
        ctaText="Speak with an Expedition Specialist"
        ctaLink="/contact"
        // image1={ZodiacIncludedImage}
        // image2={ZodiacExcursionImage}
      />

      {/* ── 11. CTA 2 ──────────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta2.title}
        description={data.cta2.description}
        buttonText={data.cta2.buttonText}
        buttonLink={data.cta2.buttonLink}
        theme={data.cta2.theme}
      />

      {/* ── 12. Antarctic Wildlife You May See ─────────────────────── */}
      <CardGrid
        title={data.wildlife.title}
        subtitle={data.wildlife.subtitle}
        cards={data.wildlife.cards}
        columns={4}
      />

      {/* ── 13. Guaranteed Wildlife Q&A ────────────────────────────── */}
      <FeatureSplit
        title={data.guaranteedQA.heading}
        subtitles={[data.guaranteedQA.intro, data.guaranteedQA.listTitle]}
        features={data.guaranteedQA.listItems}
        summary={data.guaranteedQA.footer}
        imagePosition="left"
        theme="light"
        // image={GuaranteedWildlifeImage}
      />

      {/* ── 14. Penguins & Whales Deep Dive ────────────────────────── */}
      <LuxuryZigZagShowcase
        title={data.penguinsAndWhales.title}
        subtitle={data.penguinsAndWhales.subtitle}
        items={data.penguinsAndWhales.cards.map((c) => ({
          title: c.title,
          category: c.icon === "Footprints" ? "PENGUIN ENCOUNTERS" : "WHALE WATCHING",
          description: `${c.boldText} ${c.descText || ""}`.trim(),
          bestFor: `${c.listLabel} ${c.listItems.join(", ")}. ${c.note || ""}`.trim(),
          placeholderLabel: c.title.toUpperCase(),
        }))}
        // images={[WildlifePenguinsImage, WildlifeWhalesImage]}
      />

      {/* ── 15. Photography & Binoculars ───────────────────────────── */}
      <GenericChecklistCards
        title={data.photographyAndBinoculars.title}
        subtitle={data.photographyAndBinoculars.subtitle}
        cards={data.photographyAndBinoculars.cards}
      />

      {/* ── 16. CTA 3 ──────────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta3.title}
        description={data.cta3.description}
        buttonText={data.cta3.buttonText}
        buttonLink={data.cta3.buttonLink}
        theme={data.cta3.theme}
      />

      {/* ── 17. Accommodations: Seabourn Antarctica Suites ─────────── */}
      <CabinFeatureGrid
        data={{
          title: data.suites.heading,
          subtitle: data.suites.intro,
          oceanview: {
            title: data.suites.cards[0].title,
            bestFor: data.suites.cards[0].intro,
            advantages: data.suites.cards[0].items,
          },
          balcony: {
            title: data.suites.cards[1].title,
            bestFor: `${data.suites.cards[1].intro} ${data.suites.cards[1].outro}`,
            advantages: data.suites.cards[1].items,
          },
        }}
        // image1={SuiteFeature1Image}
        // image2={SuiteFeature2Image}
      />

      {/* ── 18. Dining & Expedition Team ───────────────────────────── */}
      <ThreeColumnGrid
        title={data.diningAndExpedition.title}
        subtitle={data.diningAndExpedition.subtitle}
        items={data.diningAndExpedition.items}
      />

      {/* ── 19. Mobility & Older Travelers ─────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.mobilityQA.eyebrow}
        heading={data.mobilityQA.heading}
        description={`${data.mobilityQA.intro}\n\n${data.mobilityQA.warning}`}
        highlights={data.mobilityQA.listItems}
        placeholderLabel={data.mobilityQA.placeholderLabel}
        badgeTitle="Mobility Advisory"
        badgeDescription="Essential physical considerations for comfortable Antarctic expedition participation."
      />

      {/* ── 20. Activity Level ─────────────────────────────────────── */}
      <DetailedInclusionsList
        title={data.activityLevel.title}
        intro={[data.activityLevel.subtitle]}
        items={[
          {
            title: data.activityLevel.cards[0].title,
            lists: [{ items: data.activityLevel.cards[0].items }],
            highlight: {
              title: "PHYSICAL ADVISORY",
              text: "Activity difficulty varies by excursion. You can choose your level of active participation each day.",
            },
          },
          {
            title: data.activityLevel.cards[1].title,
            lists: [{ items: data.activityLevel.cards[1].items }],
            highlight: {
              title: "LEISURELY PERSPECTIVE",
              text: "Enjoy polar landscapes and wildlife observation at your own pace from panoramic lounges and open observation decks.",
            },
          },
        ]}
      />

      {/* ── 21. CTA 4 ──────────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta4.title}
        description={data.cta4.description}
        buttonText={data.cta4.buttonText}
        buttonLink={data.cta4.buttonLink}
        theme={data.cta4.theme}
      />

      {/* ── 22. The Right Fit: Couples, Families & Solo ─────────────── */}
      <SimplePersonaCards
        title={data.rightFit.title}
        subtitle={data.rightFit.subtitle}
        personas={data.rightFit.personas}
      />

      {/* ── 23. What to Pack for Antarctica ─────────────────────────── */}
      <GenericChecklistCards
        title={data.packing.title}
        subtitle={data.packing.subtitle}
        cards={data.packing.cards}
      />
      {data.packing.onboardStrategy && (
        <div className="bg-white pb-12 -mt-4">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-700 leading-relaxed shadow-sm">
              <strong>Onboard Packing Strategy:</strong> {data.packing.onboardStrategy}
            </div>
          </div>
        </div>
      )}

      {/* ── 24. Best Time to Take a Cruise ─────────────────────────── */}
      <CardGrid
        title={data.bestTime.heading}
        subtitle={data.bestTime.intro}
        cards={data.bestTime.months.map((m) => ({
          title: m.m,
          description: m.h,
          icon: "Sun",
        }))}
        columns={4}
      />
      {data.bestTime.durationNote && (
        <div className="bg-slate-50 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl text-sm text-slate-700 leading-relaxed shadow-sm">
              <strong>Cruise Duration Strategy:</strong> {data.bestTime.durationNote}
            </div>
          </div>
        </div>
      )}

      {/* ── 25. Seasons Comparison Table ───────────────────────────── */}
      <div className="bg-white py-4">
        <ComparisonTable data={data.seasonsCompare} />
      </div>

      {/* ── 26. CTA 5 ──────────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta5.title}
        description={data.cta5.description}
        buttonText={data.cta5.buttonText}
        buttonLink={data.cta5.buttonLink}
        theme={data.cta5.theme}
      />

      {/* ── 27. Cruise Cost & Inclusions ───────────────────────────── */}
      <CostValueAnalysisCards
        title={data.cost.title}
        subtitle={data.cost.subtitle}
        includedTitle={data.cost.cards[1].title}
        extrasTitle={data.cost.cards[0].title}
        included={data.cost.cards[1].items.map((item) => ({
          title: item,
          description: "Included in standard Seabourn Antarctica expedition fare.",
        }))}
        extras={data.cost.cards[0].items.map((item) => ({
          title: item,
          description: "Key variable influencing your final expedition pricing.",
        }))}
      />
      {data.cost.note && (
        <div className="bg-white pb-12 -mt-6">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm text-slate-600 italic font-sans">
              *{data.cost.note}
            </p>
          </div>
        </div>
      )}

      {/* ── 28. Is It Worth the Money? (Value Proposition) ─────────── */}
      <EditorialIntroSection
        eyebrow={data.worthIt.eyebrow}
        heading={data.worthIt.heading}
        description={`${data.worthIt.intro}\n\n${data.worthIt.text}\n\n${data.worthIt.valueDesc}`}
        highlights={data.worthIt.formulaItems}
        placeholderLabel={data.worthIt.placeholderLabel}
        badgeTitle="Integrated Value"
        badgeDescription="Remote expedition capabilities with ultra-luxury inclusions and world-class culinary excellence."
      />

      {/* ── 29. Seabourn vs. Traditional Cruise Table ──────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.vsTraditional} />
      </div>

      {/* ── 30. Seabourn vs. Other Luxury Lines ────────────────────── */}
      <GenericChecklistCards
        title={data.shoppingAround.title}
        subtitle={data.shoppingAround.subtitle}
        cards={data.shoppingAround.cards}
      />
      {data.shoppingAround.verdict && (
        <div className="bg-white pb-12 -mt-4">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="p-4 bg-ice-50 border border-navy-200 rounded-xl text-sm font-medium text-navy-950 inline-block shadow-sm">
              💡 {data.shoppingAround.verdict}
            </div>
          </div>
        </div>
      )}

      {/* ── 31. CTA 6 ──────────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta6.title}
        description={data.cta6.description}
        buttonText={data.cta6.buttonText}
        buttonLink={data.cta6.buttonLink}
        theme={data.cta6.theme}
      />

      {/* ── 32. Pros and Cons ──────────────────────────────────────── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.pros}
        notBestFor={data.prosCons.cons}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-slate-50"
      />

      {/* ── 33. First-Time Antarctica Tips ─────────────────────────── */}
      <CardGrid
        title={data.firstTimeTips.title}
        subtitle={data.firstTimeTips.subtitle}
        cards={data.firstTimeTips.cards.map((t) => ({
          title: t.title,
          description: t.description,
          icon: "Compass",
        }))}
        columns={4}
      />

      {/* ── 34. Who Should Choose Seabourn Antarctica? ─────────────── */}
      <TravelerPersonaCards
        title={data.suitability.title}
        subtitle={data.suitability.subtitle}
        personas={[
          {
            icon: "Gem",
            title: data.suitability.cards[0].title,
            description: "Seabourn Antarctica is engineered for guests who seek uncompromised 5-star small-ship luxury along with active polar expedition exploration.",
            traits: data.suitability.cards[0].items,
            recommendations: ["Luxury Travelers", "Wildlife Lovers", "Photographers", "Couples", "Families"],
          },
          {
            icon: "Compass",
            title: data.suitability.cards[1].title,
            description: "Travelers seeking alternative styles of Antarctic exploration may prefer other specialized polar operators.",
            traits: data.suitability.cards[1].items,
            recommendations: ["Scientific Focus", "Budget Expeditions", "Mega-Ship Cruising"],
          },
        ]}
      />

      {/* ── 35. Angela Hughes Authority Box ────────────────────────── */}
      <ExpertCredentials
        image={AboutImage}
        name={data.expertCredentials.name}
        title={data.expertCredentials.title}
        bio={data.expertCredentials.bio}
        badge={data.expertCredentials.badge}
        experienceBadge={data.expertCredentials.experienceBadge}
        quote={data.expertCredentials.quote}
        quoteSubtitle={data.expertCredentials.quoteSubtitle}
        credentials={data.expertCredentials.credentials}
        ctaText={data.expertCredentials.ctaText}
        ctaLink={data.expertCredentials.ctaLink}
      />

      {/* ── 36. FAQ Accordion ──────────────────────────────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faq} />
      </div>

      {/* ── 37. Final Conclusion & Verdict ─────────────────────────── */}
      <ConclusionSection sections={data.conclusion.sections} />

      {/* ── 38. Final CTA ─────────────────────────────────────────── */}
      <CenterCTA
        title="Ready to Begin Your Antarctic Adventure?"
        description="Let Angela Hughes and Trips & Ships Luxury Travel design your bespoke Seabourn Antarctica journey."
        buttonText={data.conclusion.ctaText}
        buttonLink={data.conclusion.ctaLink}
        theme="light"
      />
    </div>
  );
};

export default SeabournAntarcticaCruises;