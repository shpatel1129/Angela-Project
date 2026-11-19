import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import FeatureGrid from "@/components/ui/FeatureGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import CinematicDestinations from "@/components/ui/CinematicDestinations";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import AccordionFlexGrid from "@/components/ui/AccordionFlexGrid";
import StickyEditorialIntro from "@/components/ui/StickyEditorialIntro";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CenterCTA from "@/components/ui/CenterCTA";
import FadeIn from "@/components/ui/FadeIn";

// Asset Images
import HeroDressCodeImg from "@/assets/celebritycruises/CelebrityDressCode/hero-celebrity-dress-code.webp";
import SmartCasualImg from "@/assets/celebritycruises/CelebrityDressCode/smart-casual-resort-attire.webp";
import SmartCasualTerraceImg from "@/assets/celebritycruises/CelebrityDressCode/smart-casual-terrace-dining.webp";
import PackingLayersImg from "@/assets/celebritycruises/CelebrityDressCode/packing-checklist-layers.webp";
import CaribbeanResortImg from "@/assets/celebritycruises/CelebrityDressCode/destination-caribbean-resort-wear.webp";
import AlaskaLayersImg from "@/assets/celebritycruises/CelebrityDressCode/destination-alaska-layered-clothing.webp";
import MedExcursionImg from "@/assets/celebritycruises/CelebrityDressCode/destination-mediterranean-excursion.webp";
import NorthEuropeKayakImg from "@/assets/celebritycruises/CelebrityDressCode/celebrity-apex-olden-serene-morning-ambiance.webp";
import ActivityPickleballImg from "@/assets/celebritycruises/CelebrityDressCode/activity-fitness-sports-pickleball.webp";
import ActivitySpaImg from "@/assets/celebritycruises/CelebrityDressCode/activity-spa-wellness.webp";
import ShipEdgeImg from "@/assets/celebritycruises/CelebrityDressCode/ship-edge-series.webp";
import ShipSolsticeImg from "@/assets/celebritycruises/CelebrityDressCode/ship-solstice-series.webp";
import ShipMillenniumImg from "@/assets/celebritycruises/CelebrityDressCode/ship-millennium-series.webp";
import DaytimePoolLoungeImg from "@/assets/celebritycruises/CelebrityDressCode/daytime-pool-lounge.webp";
import ThemedPartiesLoungeImg from "@/assets/celebritycruises/CelebrityDressCode/themed-parties-evening-lounges.webp";
import DressyLifestyleImg from "@/assets/celebritycruises/CelebrityDressCode/celebrity-dressy-lifestyle-guest.webp";
import ReadyExperienceImg from "@/assets/celebritycruises/CelebrityDressCode/ready-to-experience-celebrity-comfort.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

export default function CelebrityDressCode() {
  // Quick Answer Cards
  const quickAnswerCards = (data.quickAnswer.categories || []).map((cat, idx) => ({
    title: cat.category,
    description: cat.description,
    badge: idx === 0 ? "DAYTIME RESORT" : idx === 1 ? "STANDARD EVENING" : "DRESSIER NIGHTS",
  }));

  // Section 1: Overview ComparisonTable
  const overviewTableData = {
    title: data.understanding.title,
    subtitle: data.understanding.subtitle,
    headers: data.understanding.columns,
    rows: (data.understanding.rows || []).map((r) => [
      r.occasion,
      r.attire,
      r.remember,
    ]),
  };

  // Section 2: Smart Casual Highlights for AsymmetricStoryIntro
  const smartCasualHighlights = [
    `Women's Outfits: ${data.smartCasual.womenItems.join(", ")}. ${data.smartCasual.womenTip}`,
    `Men's Outfits: ${data.smartCasual.menItems.join(", ")}. ${data.smartCasual.menTip}`,
    `Jeans Policy: ${data.smartCasual.jeansAnswer}`,
    `Shorts to Dinner: ${data.smartCasual.shortsAnswer}`,
  ];

  // Section 3: Evening Chic Features for FeatureGrid (No image)
  const eveningChicFeatures = [
    {
      title: data.eveningChic.womenTitle,
      description: data.eveningChic.womenTip,
      tags: data.eveningChic.womenItems,
      highlight: "Ideas include: Cocktail dresses, skirts with dressy tops, tailored trousers, dressy jumpsuits, designer jeans & jewelry",
    },
    {
      title: data.eveningChic.menTitle,
      description: data.eveningChic.menTip,
      tags: data.eveningChic.menItems,
      highlight: "Consider: Dress trousers with button-down shirt, blazers, sweaters, designer jeans, suits or optional tuxedos",
    },
    {
      title: data.eveningChic.tuxedoQuestion,
      description: data.eveningChic.tuxedoAnswer,
      tags: [
        "Tuxedos Optional",
        "Suits Welcome",
        "Cocktail Dresses",
        "Polished Shirts & Slacks",
      ],
      highlight: "Traditional formalwear is welcome but strictly optional",
    },
    {
      title: "How many nights & what if you do not want to dress up?",
      description: `${data.eveningChic.scheduleAnswer} ${data.eveningChic.skipAnswer}`,
      tags: [
        "1-2 Chic Nights Per Itinerary",
        "Check Celebrity App & Daily Program",
        "Smart Casual Always Accepted",
        "Dining & Theater Welcomed",
      ],
      highlight: "Smart Casual attire is acceptable for dining and the theater when guests do not wish to participate in Evening Chic",
    },
  ];

  // Section 4: By Time of Day EditorialFeatureShowcase
  const timeOfDayFeatures = (data.byTimeOfDay.venues || []).map((v) => ({
    title: v.time,
    description: v.description,
  }));

  // Section 5: What Not to Wear Table
  const whatNotToWearTableData = {
    title: data.whatNotToWear.title,
    subtitle: data.whatNotToWear.subtitle,
    headers: data.whatNotToWear.columns,
    rows: (data.whatNotToWear.rows || []).map((r) => [r.item, r.unsuitable]),
  };

  // Section 6: Packing Checklist for GenericChecklistCards
  const packingChecklistCards = (data.packingChecklist.categories || []).map((cat) => ({
    title: cat.title,
    items: cat.items,
  }));

  // Section 7: CinematicDestinations Data
  const destinationItems = [
    {
      title: data.byDestination.destinations[0].region,
      description: `${data.byDestination.destinations[0].description} ${data.byDestination.destinations[0].tip}`,
      features: ["Lightweight Linens", "Swimwear & Cover-ups", "Reef-Safe Sunscreen", "Chic Dinner Wear"],
      image: CaribbeanResortImg,
    },
    {
      title: data.byDestination.destinations[1].region,
      description: `${data.byDestination.destinations[1].description} ${data.byDestination.destinations[1].tip}`,
      features: ["Thermal Base Layers", "Waterproof Outerwear", "Supportive Walking Shoes", "Fleece & Beanies"],
      image: AlaskaLayersImg,
    },
    {
      title: data.byDestination.destinations[2].region,
      description: `${data.byDestination.destinations[2].description} ${data.byDestination.destinations[2].tip}`,
      features: ["Breathable Sundresses", "Comfortable Walking Flats", "Modest Cathedral Attire", "Designer Evening Wear"],
      image: MedExcursionImg,
    },
    {
      title: data.byDestination.destinations[3].region,
      description: `${data.byDestination.destinations[3].description} ${data.byDestination.destinations[3].tip}`,
      features: ["Windproof Layers", "Cardigans & Sweaters", "Closed-Toe Walking Shoes", "Warm Scarves & Accents"],
      image: NorthEuropeKayakImg,
    },
  ];

  // Section 8: Activities ThreeColumnGrid
  const activitiesGridItems = [
    {
      title: "Fitness Center & Court Sports",
      category: "GYM & RECREATION",
      description: data.activities.items[0].description,
      features: ["Athletic Shorts & Tops", "Supportive Gym Sneakers", "Open-Deck Pickleball Gear"],
      image: ActivityPickleballImg,
    },
    {
      title: "The Spa & Thermal Suite",
      category: "WELLNESS & RELAXATION",
      description: data.activities.items[1].description,
      features: ["Comfortable Robe Attire", "Persian Garden Swimwear", "Relaxation Lounge Footwear"],
      image: ActivitySpaImg,
    },
    {
      title: "Port Shore Excursions",
      category: "DESTINATION EXPLORATION",
      description: data.activities.items[2].description,
      features: ["Sturdy Walking Shoes", "Water Shoes for Marine Tours", "Modest Religious Site Outfits"],
      image: PackingLayersImg,
    },
    {
      title: "Vacation Portrait Photography",
      category: "PORTRAITS & STUDIO",
      description: data.activities.items[3].description,
      features: ["Evening Chic Ensembles", "Coordinated Couple Palettes", "Statement Accessories"],
      image: HeroDressCodeImg,
    },
    {
      title: "Themed Parties & Evening Lounges",
      category: "NIGHTLIFE & MUSIC",
      description: data.activities.items[4].description,
      features: ["Optional Theme Accents", "Chic Clubwear", "Smart Casual Nightlife Attire"],
      image: ThemedPartiesLoungeImg,
    },
  ];

  // Section 9: Ship Class AccordionFlexGrid
  const shipClassItems = [
    {
      title: data.byShipClass.classes[0].name,
      subtitle: data.byShipClass.classes[0].subtitle,
      description: data.byShipClass.classes[0].expectation,
      image: ShipEdgeImg,
    },
    {
      title: data.byShipClass.classes[1].name,
      subtitle: data.byShipClass.classes[1].subtitle,
      description: data.byShipClass.classes[1].expectation,
      image: ShipSolsticeImg,
    },
    {
      title: data.byShipClass.classes[2].name,
      subtitle: data.byShipClass.classes[2].subtitle,
      description: data.byShipClass.classes[2].expectation,
      image: ShipMillenniumImg,
    },
  ];

  // Section 11: Pack Light CostValueAnalysisCards
  const packLightIncluded = (data.packLight.strategies || []).slice(0, 2).map((s) => ({
    title: s.title,
    description: s.description,
  }));
  const packLightExtras = (data.packLight.strategies || []).slice(2, 4).map((s) => ({
    title: s.title,
    description: s.description,
  }));

  // Section 12: Cruise Line Comparison Table
  const cruiseLineComparisonTableData = {
    title: data.cruiseLineComparison.title,
    subtitle: `${data.cruiseLineComparison.subtitle} ${data.cruiseLineComparison.comparisonAdvice}`,
    headers: data.cruiseLineComparison.columns,
    rows: (data.cruiseLineComparison.rows || []).map((r) => [
      r.line,
      r.approach,
      r.consider,
    ]),
  };

  // Section 13: 7 Packing Mistakes StepByStepGuide
  const packingMistakesSteps = (data.packingMistakes.mistakes || []).map((m, idx) => ({
    number: String(idx + 1).padStart(2, "0"),
    title: m.title,
    description: m.description,
  }));

  // Section 14: ValueBreakdownSplit (Who Will Enjoy Celebrity's Dress Code)
  const whoWillEnjoyIncluded = (data.whoWillEnjoy.goodFit || []).map((item, idx) => ({
    title: `Ideal Traveler Profile 0${idx + 1}`,
    description: item,
  }));
  const whoWillEnjoyExtras = (data.whoWillEnjoy.lessAppealing || []).map((item, idx) => ({
    title: `Alternative Traveler Fit 0${idx + 1}`,
    description: item,
  }));

  // FAQs Accordion Data
  const faqAccordionData = {
    title: "Frequently Asked Questions About the Celebrity Cruises Dress Code",
    subtitle: "Detailed, practical answers to every common question regarding daytime resort wear, Smart Casual evenings, and Evening Chic celebrations.",
    faqs: data.faqs,
  };

  return (
    <>
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

      <div className="bg-white text-navy-950 min-h-screen">
        {/* Hero Section */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            backgroundImage={HeroDressCodeImg}
            byline={true}
            primaryCtaText="Explore Packing Guide"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Consult Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

        {/* Quick Answer: Summary Cards & Introductory Highlights */}
        <div id="quick-answer" className="py-20 bg-stone-50 border-b border-navy-100">
          <div className="max-w-[1280px] mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-sans text-xs uppercase tracking-widest text-ts-gold font-bold mb-3 block">
                AT-A-GLANCE DRESS GUIDANCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
                {data.quickAnswer.title}
              </h2>
              <p className="font-sans text-slate-600 text-lg leading-relaxed">
                {data.quickAnswer.subtitle}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickAnswerCards.map((card, idx) => (
                <FadeIn key={idx} delay={idx * 0.15}>
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full mb-4">
                        {card.badge}
                      </span>
                      <h3 className="font-display text-2xl text-navy-950 mb-3">
                        {card.title}
                      </h3>
                      <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Section 1: Understanding the Celebrity Cruises Dress Code (ComparisonTable) */}
        <div id="understanding" className="border-b border-navy-100">
          <ComparisonTable data={overviewTableData} />
        </div>

        {/* Section 2: What Is Smart Casual on Celebrity Cruises? (AsymmetricStoryIntro) */}
        <div id="smart-casual" className="border-b border-navy-100">
          <AsymmetricStoryIntro
            eyebrow="STANDARD EVENING DRESS CODE"
            heading={data.smartCasual.title}
            paragraphs={[data.smartCasual.subtitle, data.smartCasual.description]}
            highlights={smartCasualHighlights}
            image1={SmartCasualImg}
            image1Alt="Celebrity Cruises Smart Casual evening dining attire"
            image2={SmartCasualTerraceImg}
            image2Alt="Celebrity Cruises chic seaside terrace dining ambiance"
          />
        </div>

        {/* Section 3: What Is Evening Chic on Celebrity Cruises? (FeatureGrid) */}
        <div id="evening-chic" className="border-b border-navy-100">
          <FeatureGrid
            title={data.eveningChic.title}
            subtitle={`${data.eveningChic.subtitle} ${data.eveningChic.description}`}
            features={eveningChicFeatures}
            bgClass="bg-stone-50"
          />
        </div>

        {/* Section 4: Celebrity Cruises Dress Code by Time of Day (EditorialFeatureShowcase) */}
        <div id="by-time-of-day">
          <EditorialFeatureShowcase
            title={data.byTimeOfDay.title}
            subtitle={data.byTimeOfDay.subtitle}
            image={DaytimePoolLoungeImg}
            features={timeOfDayFeatures}
            bgClass="bg-white"
          />
        </div>

        {/* Section 5: What Not to Wear on Celebrity Cruises (ComparisonTable) */}
        <div id="what-not-to-wear" className="border-b border-navy-100">
          <ComparisonTable data={whatNotToWearTableData} />
        </div>

        {/* Section 6: Complete Packing Checklist (GenericChecklistCards) */}
        <div id="packing-checklist" className="border-b border-navy-100 bg-stone-50">
          <GenericChecklistCards
            title={data.packingChecklist.title}
            subtitle="CELEBRITY CRUISES PACKING MATRIX"
            cards={packingChecklistCards}
          />
        </div>

        {/* Section 7: Destination Outfits (CinematicDestinations) */}
        <div id="by-destination">
          <CinematicDestinations
            title={data.byDestination.title}
            subtitle={data.byDestination.subtitle}
            items={destinationItems}
          />
        </div>

        {/* Section 8: Activities (ThreeColumnGrid) */}
        <div id="activities" className="border-b border-navy-100 bg-stone-50">
          <ThreeColumnGrid
            title={data.activities.title}
            subtitle={data.activities.subtitle}
            items={activitiesGridItems}
          />
        </div>

        {/* Section 9: Dress Code by Ship Class (AccordionFlexGrid) */}
        <div id="by-ship-class" className="border-b border-navy-100">
          <AccordionFlexGrid
            title={data.byShipClass.title}
            subtitle={data.byShipClass.subtitle}
            items={shipClassItems}
          />
        </div>

        {/* Section 10: Does Celebrity Enforce Its Dress Code? (StickyEditorialIntro) */}
        <div id="enforcement" className="border-b border-navy-100">
          <StickyEditorialIntro
            eyebrow="ONBOARD POLICY & COURTESY"
            heading={data.enforcement.title}
            paragraphs={data.enforcement.paragraphs}
            highlights={[
              "Daytime casual wear is celebrated on open decks and outdoor cafés.",
              "Smart Casual guidance applies specifically to indoor evening dining and theatre performances.",
              "Evening Chic is flexible: guests can wear Smart Casual if they choose not to dress up.",
              "Daily programs and Celebrity app post the evening attire guidelines each morning.",
            ]}
            image1={PackingLayersImg}
          />
        </div>

        {/* Section 11: Can You Pack Light? (CostValueAnalysisCards) */}
        <div id="pack-light" className="border-b border-navy-100">
          <CostValueAnalysisCards
            title={data.packLight.title}
            subtitle={data.packLight.subtitle}
            includedTitle="Capsule Wardrobe Strategies"
            extrasTitle="Cruise Length & Weather Adjustments"
            included={packLightIncluded}
            extras={packLightExtras}
          />
        </div>

        {/* Section 12: Celebrity vs Other Cruise Lines (ComparisonTable) */}
        <div id="cruise-line-comparison" className="border-b border-navy-100">
          <ComparisonTable data={cruiseLineComparisonTableData} />
        </div>

        {/* Section 13: 7 Packing Mistakes to Avoid (StepByStepGuide) */}
        <div id="packing-mistakes" className="border-b border-navy-100">
          <StepByStepGuide
            title={data.packingMistakes.title}
            subtitle={data.packingMistakes.subtitle}
            steps={packingMistakesSteps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* Section 14: Is Celebrity Dressy? Who Will Enjoy It? (ValueBreakdownSplit) */}
        <div id="who-will-enjoy" className="border-b border-navy-100">
          <ValueBreakdownSplit
            title={data.whoWillEnjoy.title}
            subtitle={data.whoWillEnjoy.subtitle}
            includedTitle="Who Will Love Celebrity's Dress Code"
            included={whoWillEnjoyIncluded}
            extrasTitle="Who Might Prefer Alternative Cruise Lines"
            extras={whoWillEnjoyExtras}
            image={DressyLifestyleImg}
          />
        </div>

        {/* Final Verdict (ConclusionSection) */}
        <div id="final-verdict">
          <ConclusionSection
            title={data.finalVerdict.title}
            subtitle={data.finalVerdict.subtitle}
            content={
              data.finalVerdict.practicalWardrobe.join(" ") +
              " " +
              data.finalVerdict.conclusion
            }
            highlights={data.finalVerdict.practicalWardrobe}
            ctaText="Plan Your Celebrity Cruise with Angela Hughes"
            ctaLink="/contact"
          />
        </div>

      
        {/* Expert Credentials */}
        <div id="advisor-credentials" className="border-t border-navy-100">
          <ExpertCredentials
            name="Angela Hughes"
            title="CEO & Luxury Cruise Specialist"
            bio="Angela Hughes has sailed on dozens of premium and luxury cruise ships across the globe, providing firsthand insider guidance on packing, wardrobe planning, stateroom selection, and itinerary curation for discerning travelers."
            image={AboutAngelaImg}
            credentials={[
              "40+ Years Luxury Cruise Industry Veteran",
              "Top Producer for Celebrity Cruises Worldwide",
              "Certified Master Cruise Counselor (CLIA)",
              "Published Luxury Travel Writer & Global Keynote Speaker",
            ]}
            ctaText="Consult Angela Hughes"
            ctaLink="/contact"
          />
        </div>

          {/* Section 16: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>


        {/* Center CTA */}
        <div id="book-cta">
          <CenterCTA
            theme="dark"
            title="Ready to Experience Celebrity Cruises in Polished Comfort?"
            description="Connect with Angela Hughes and the Trips & Ships Luxury Travel team for personalized booking arrangements, stateroom upgrades, and VIP concierge service."
            buttonText="Contact Trips & Ships Luxury Travel"
            buttonLink="/contact"
            image={ReadyExperienceImg}
          />
        </div>
      </div>
    </>
  );
}

