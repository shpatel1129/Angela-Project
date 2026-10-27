import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";

// Shared modern UI components (100% component-based architecture)
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import CenterCTA from "../../../components/ui/CenterCTA";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import FeatureSplit from "../../../components/ui/FeatureSplit";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import TravelerProfileSelector from "../../../components/ui/TravelerProfileSelector";
import CulinaryExcellence from "../../../components/ui/CulinaryExcellence";
import ContainedShowdown from "../../../components/ui/ContainedShowdown";
import QuickCompareCards from "../../../components/ui/QuickCompareCards";
import CardGrid from "../../../components/ui/CardGrid";
import SuiteAndInclusionsFaceoff from "../../../components/ui/SuiteAndInclusionsFaceoff";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import ValueBreakdownSplit from "../../../components/ui/ValueBreakdownSplit";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import CategoryAwards from "../../../components/ui/CategoryAwards";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import TrustSection from "../../../components/ui/TrustSection";

// Structured JSON data
import data from "./data.json";

// Advisor Image
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// Scenic Dedicated WebP Assets (from src/assets/optimized, 100% unique hashes)
import heroImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/hero-scenic-vs-celebrity.webp";
import scenicDifferenceImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-difference-ship.webp";
import scenicPhilosophyFleetImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-philosophy-fleet.webp";
import cta1BgImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/cta1-scenic-sundeck.webp";
import scenicSuiteImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-suite.webp";
import scenicRoyalSuiteImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-royal-suite.webp";
import scenicSunLoungeImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-sun-lounge.webp";
import scenicDiningImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-dining.webp";
import cta2BgImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/cta2-scenic-castle.webp";
import scenicButlerImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-butler-service.webp";
import scenicExcursionImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-excursion.webp";
import scenicInclusionsImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-inclusions.webp";
import scenicShipFleetImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-space-ship.webp";
import cta3BgImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/cta3-scenic-river.webp";
import scenicChooseImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/scenic-choose-experience.webp";
import verdictScenicImg1 from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/verdict-scenic-landmark.webp";
import verdictScenicImg2 from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/verdict-scenic-interior.webp";
import finalCtaBgImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/final-cta-evening-cruise.webp";

// Traveler Profiles WebP Assets
import profileFirstTimeImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/profile-first-time.webp";
import profileCouplesImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/profile-couples.webp";
import profileHoneymoonImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/profile-honeymoon.webp";
import profileFamiliesImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/profile-families.webp";
import profileSoloImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/profile-solo.webp";
import profileCelebrityFansImg from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/profile-celebrity-fans.webp";

// Celebrity Dedicated SVG Placeholders
import celebrityDifferencePlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-difference-placeholder.svg";
import celebrityPhilosophyPlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-philosophy-placeholder.svg";
import celebritySuitePlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-suite-placeholder.svg";
import celebrityDiningPlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-dining-placeholder.svg";
import celebrityServicePlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-service-placeholder.svg";
import celebrityExcursionsPlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-excursions-placeholder.svg";
import celebrityInclusionsPlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-inclusions-placeholder.svg";
import celebrityShipFleetPlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-ship-placeholder.svg";
import celebrityChoosePlaceholder from "../../../assets/ScenicRiverCruises/Scenicvscelebrity/celebrity-choose-placeholder.svg";

export default function ScenicVsCelebrity() {
  const { schemaData } = data;

  // 1. Traveler Profiles Data Mapping
  const profileImages = {
    "first-time": profileFirstTimeImg,
    "couples": profileCouplesImg,
    "honeymoons": profileHoneymoonImg,
    "families": profileFamiliesImg,
    "solo": profileSoloImg,
    "celebrity-fans": profileCelebrityFansImg,
  };

  const formattedProfiles = data.travelerProfiles.profiles.map((p) => ({
    name: p.name || p.label || p.title,
    tagline: p.tagline || p.title,
    quote: p.quote || p.lead,
    image: profileImages[p.id] || profileFirstTimeImg,
    recommendation: p.recommendation || p.takeaway,
    reason: p.reason || `${p.scenicRecommendation} ${p.celebrityRecommendation}`,
    whyFits: p.whyFits || [
      `Scenic Choice: ${p.scenicRecommendation}`,
      `Celebrity Choice: ${p.celebrityRecommendation}`,
      `Key Takeaway: ${p.takeaway}`,
    ],
  }));

  // 2. Culinary Venues Data
  const culinaryVenues = [
    {
      name: data.dining.scenic.title,
      cuisine: "Multi-Course Haute Cuisine & Sommelier Wine",
      description: `${data.dining.scenic.text} Key highlights: ${data.dining.scenic.points.join(", ")}. ${data.dining.verdict.scenicEdge}`,
      signatureDish: "Table La Rive 6-Course Degustation",
      atmosphere: "Refined White-Glove Luxury & Multiple Venues",
    },
    {
      name: data.dining.celebrity.title,
      cuisine: "Contemporary Destination Cuisine & Magic Edge",
      description: `${data.dining.celebrity.text} Key highlights: ${data.dining.celebrity.points.join(", ")}. ${data.dining.verdict.celebrityEdge}`,
      signatureDish: "Magic Edge Panoramic Dining Pods",
      atmosphere: "Stylish, Vibrant & Architecturally Modern",
    },
  ];

  // 3. Service Cards for QuickCompareCards
  const serviceScenicCard = {
    style: "SCENIC LUXURY SERVICE",
    name: data.service.scenic.title,
    description: data.service.scenic.text,
  };

  const serviceCelebrityCard = {
    style: "CELEBRITY RETREAT CARE",
    name: data.service.celebrity.title,
    description: data.service.celebrity.text,
  };

  // 4. Inclusions data for SuiteAndInclusionsFaceoff
  const suiteAndInclusionsFaceoffData = {
    subtitle: "ALL-INCLUSIVE LUXURY VS CONTEMPORARY INCLUSIVE CRUISE FARE",
    title: data.whatsIncluded.title,
    scenic: {
      title: data.whatsIncluded.scenicTitle,
      subtitle: "Truly All-Inclusive 5-Star Luxury",
      inclusions: [
        {
          name: "All Meals Across Multiple Venues",
          desc: "Full board gourmet dining across casual cafes and fine dining restaurants with flexible options.",
        },
        {
          name: "Unlimited Selected Premium Beverages",
          desc: "Complimentary fine wines, premium spirits, beers, cocktails, and barista coffees all day long.",
        },
        {
          name: "Scenic Freechoice & Enrich Excursions",
          desc: "Daily curated shore excursions plus exclusive private evening events, palace concerts, and castle dinners.",
        },
        {
          name: "Butler Service Across All Suites",
          desc: "Personalized butler service offering beverage deliveries, garment pressing, and in-suite arrangements.",
        },
        {
          name: "Airport Transfers, Wi-Fi & All Gratuities",
          desc: "Zero out-of-pocket expenses: airport transfers, high-speed Wi-Fi, and all onboard tipping are covered.",
        },
        {
          name: "Zero Out-of-Pocket Philosophy",
          desc: data.whatsIncluded.scenicText,
        },
      ],
    },
    avalon: {
      title: data.whatsIncluded.tauckTitle,
      subtitle: "Modern Luxury Inclusions & Suite Amenities",
      inclusions: [
        {
          name: "All Meals in Main Venues Included",
          desc: "Daily regionally inspired European breakfast, lunch, and dinner menus.",
        },
        {
          name: "Selected Beverages Included",
          desc: "Selected wines, beers, and soft drinks complimentary with meals and cruise packages.",
        },
        {
          name: "Suite-Level Butler Care",
          desc: "Dedicated butler service included across all suites, inspired by The Retreat ocean experience.",
        },
        {
          name: "Curated European Excursions",
          desc: "Curated shore tours designed to connect travelers with authentic European heritage.",
        },
        {
          name: "Onboard Gratuities & Select Transfers",
          desc: "Gratuities included in cruise fare; transfer arrangements with specific packages.",
        },
        {
          name: "Modern Fare Flexibility",
          desc: data.whatsIncluded.tauckText,
        },
      ],
    },
  };

  // 5. Ships data for ShipPhilosophyFaceoff
  const shipsFaceoffData = {
    title: data.ships.title,
    regent: {
      badge: "SCENIC SPACE-SHIPS",
      title: data.ships.scenic.title,
      description: `${data.ships.scenic.text} ${data.ships.winner.scenicEdge}`,
      features: data.ships.scenic.points,
    },
    viking: {
      badge: "CELEBRITY RIVER FLEET",
      title: data.ships.celebrity.title,
      description: `${data.ships.celebrity.text} ${data.ships.winner.celebrityEdge}`,
      features: data.ships.celebrity.points,
    },
  };

  // 6. Price & Value data for ValueBreakdownSplit
  const priceIncluded = [
    {
      title: "All-Inclusive Luxury Pricing",
      description: data.priceAndValue.scenic.formula,
    },
    {
      title: "Value Proposition",
      description: data.priceAndValue.scenic.summary,
    },
    {
      title: "Included Experience Components",
      description: "Cruise fare, suite butler service, fine wines & spirits, all excursions, private concerts, gratuities & transfers.",
    },
  ];

  const priceExtras = [
    {
      title: "Contemporary Luxury Pricing",
      description: data.priceAndValue.celebrity.formula,
    },
    {
      title: "Value Proposition",
      description: data.priceAndValue.celebrity.summary,
    },
    {
      title: "Included Experience Components",
      description: "Cruise fare, suite-level butler service, dining, selected beverages, and familiar brand continuity for ocean cruisers.",
    },
  ];

  // 7. Final Verdict data for TrustSection
  const trustSections = [
    {
      heading: data.finalVerdict.title,
      lead: data.finalVerdict.lead,
      paragraphs: [
        data.finalVerdict.summary,
        data.finalVerdict.decidingFactor,
      ],
    },
    {
      heading: "Our Luxury Planning Services Include:",
      paragraphs: [
        "Our dedicated luxury river cruise planning services provide comprehensive, unbiased advice:",
      ],
      list: data.finalVerdict.planningServices,
      conclusion: "Start Planning with Angela Hughes",
    },
    {
      heading: "Ready to Reserve Your River Cruise?",
      paragraphs: [
        "Whether you choose Scenic's established 5-star Space-Ships or Celebrity's cutting-edge modern river fleet, our team ensures you receive the finest available staterooms, perks, and promotions.",
        "Contact Angela Hughes to compare dates, suite categories, and special offers for your European river cruise.",
      ],
      list: [
        "Direct coordination with cruise line management",
        "Expert assistance selecting the ideal deck and suite orientation",
        "Complete travel protection and logistics support",
      ],
      conclusion: "Get in Touch Today",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Scenic vs Celebrity River Cruises (2026): Which Is Better?</title>
        <meta name="title" content="Scenic vs Celebrity River Cruises | Luxury Comparison" />
        <meta
          name="description"
          content="Compare Scenic vs Celebrity River Cruises for 2026. Explore ships, suites, balconies, dining, service, inclusions, excursions, pricing, itineraries, families, and who each brand is best for."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/scenic-vs-celebrity" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        readMore={data.hero.readMore}
        image={heroImg}
        primaryCtaText={data.hero.primaryCta.text}
        primaryCtaLink={data.hero.primaryCta.link}
        secondaryCtaText={data.hero.secondaryCta.text}
        secondaryCtaLink={data.hero.secondaryCta.link}
      />

      {/* ── 2. QUICK ANSWER COMPARISON TABLE ── */}
      <div id="quick-answer">
        <ComparisonTable data={data.quickAnswer} />
        <div className="max-w-[1000px] mx-auto px-6 -mt-8 mb-16">
          <div className="bg-slate-50 border-l-4 border-navy-900 p-6 rounded-r-xl shadow-sm">
            <span className="font-sans text-xs uppercase tracking-widest text-navy-500 font-bold block mb-2">
              {data.quickAnswer.calloutText}
            </span>
            <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed">
              {data.quickAnswer.bottomLine}
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. THE BIGGEST DIFFERENCE ── */}
      <div id="biggest-difference">
        <AsymmetricStoryIntro
          eyebrow={data.biggestDifference.eyebrow}
          heading={data.biggestDifference.heading}
          paragraphs={data.biggestDifference.paragraphs}
          highlights={data.biggestDifference.highlights}
          image1={scenicDifferenceImg}
          image2={celebrityDifferencePlaceholder}
          image1Placeholder="SCENIC SPACE-SHIP PORTO PORTUGAL"
          image2Placeholder="CELEBRITY MODERN RIVER CRUISE SHIP"
          ctaText={data.biggestDifference.ctaText}
          ctaLink={data.biggestDifference.ctaLink}
        />
      </div>

      {/* ── 4. WHAT ARE SCENIC AND CELEBRITY BEST KNOWN FOR? ── */}
      <div id="who-is-it-for">
        <DualPhilosophyShowcase
          data={data.whoIsItFor}
          imageSailing={scenicPhilosophyFleetImg}
          imageAllSuite={celebrityPhilosophyPlaceholder}
        />
      </div>

      {/* ── 5. INLINE CTA 1 ── */}
      <CenterCTA
        title={data.cta1.title}
        description={data.cta1.description}
        buttonText={data.cta1.buttonText}
        buttonLink={data.cta1.buttonLink}
        image={cta1BgImg}
        theme="dark"
      />

      {/* ── 6. CABINS COMPARISON ── */}
      <div id="cabins">
        <CabinFeatureGrid
          data={data.cabins}
          image1={scenicSuiteImg}
          image2={celebritySuitePlaceholder}
        />
      </div>

      {/* ── 7. WHICH HAS BETTER SUITES? ── */}
      <div id="better-suites">
        <FeatureSplit
          title={data.betterSuites.title}
          subtitles={[data.betterSuites.subtitle]}
          features={data.betterSuites.features}
          image={scenicRoyalSuiteImg}
          imagePosition="left"
          theme="light"
          summary="Scenic offers established luxury with Sun Lounges, while Celebrity introduces Skylight Infinite Balconies. Compare the specific category for your departure."
          ctaText="Compare Suite Categories"
          ctaLink="/contact"
        />
      </div>

      {/* ── 8. BALCONIES COMPARISON ── */}
      <div id="balconies">
        <EditorialFeatureShowcase
          title={data.balconies.title}
          subtitle={data.balconies.subtitle}
          features={data.balconies.features}
          image={scenicSunLoungeImg}
          bgClass="bg-ice-50/60"
        />
      </div>

      {/* ── 9. TARGET TRAVELER PROFILES TABS ── */}
      <div id="traveler-profiles">
        <TravelerProfileSelector
          title={data.travelerProfiles.title}
          subtitle={data.travelerProfiles.subtitle}
          profiles={formattedProfiles}
        />
      </div>

      {/* ── 10. DINING COMPARISON ── */}
      <div id="dining">
        <CulinaryExcellence
          title={data.dining.title}
          subtitle={data.dining.lead}
          venues={culinaryVenues}
          images={[scenicDiningImg, celebrityDiningPlaceholder]}
        />
      </div>

      {/* ── 11. INLINE CTA 2 ── */}
      <CenterCTA
        title={data.cta2.title}
        description={data.cta2.description}
        buttonText={data.cta2.buttonText}
        buttonLink={data.cta2.buttonLink}
        image={cta2BgImg}
        theme="dark"
      />

      {/* ── 12. SERVICE & BUTLER CARE (SHOWDOWN) ── */}
      <div id="service">
        <ContainedShowdown
          title={data.service.title}
          brandA={{
            name: data.service.scenic.title,
            image: scenicButlerImg,
            features: data.service.scenic.features,
          }}
          brandB={{
            name: data.service.celebrity.title,
            image: celebrityServicePlaceholder,
            features: data.service.celebrity.features,
          }}
        />
      </div>

      {/* ── 13. TOUR LEADERSHIP & EXCURSIONS ── */}
      <div id="tour-directors" className="py-20 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-6 text-center pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-ts-gold font-bold block mb-3">
            DESTINATION IMMERSION
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 font-bold mb-4">
            {data.tourDirectors.title}
          </h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {data.tourDirectors.lead}
          </p>
        </div>

        <div className="pt-8">
          <QuickCompareCards
            ama={{
              style: "SCENIC EXCURSION MODEL",
              name: data.tourDirectors.scenic.title,
              description: data.tourDirectors.scenic.text,
            }}
            avalon={{
              style: "CELEBRITY SHORE EXPERIENCES",
              name: data.tourDirectors.celebrity.title,
              description: data.tourDirectors.celebrity.text,
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-12">
          <div className="bg-navy-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-ts-gold/30 text-center">
            <span className="inline-block px-3 py-1 bg-ts-gold text-navy-950 font-sans text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              EXCURSION VERDICT
            </span>
            <p className="font-sans text-slate-200 text-sm md:text-base leading-relaxed">
              {data.tourDirectors.winner}
            </p>
          </div>
        </div>
      </div>

      {/* ── 14. EXCURSIONS COMPARISON ── */}
      <div id="excursions">
        <CardGrid
          title={data.excursions.title}
          subtitle={data.excursions.intro}
          cards={data.excursions.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 15. WHAT IS INCLUDED & TOTAL VALUE FORMULA ── */}
      <div id="whats-included">
        <SuiteAndInclusionsFaceoff
          data={suiteAndInclusionsFaceoffData}
          imageScenic={scenicInclusionsImg}
          imageAvalon={celebrityInclusionsPlaceholder}
        />
        <div className="max-w-4xl mx-auto px-6 -mt-10 mb-16 relative z-20">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg text-center">
            <span className="font-sans text-xs uppercase tracking-widest text-navy-500 font-bold block mb-2">
              Inclusions Assessment
            </span>
            <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed">
              {data.whatsIncluded.expertNote}
            </p>
          </div>
        </div>
      </div>

      {/* ── 16. SHIPS COMPARISON ── */}
      <div id="ships">
        <ShipPhilosophyFaceoff
          data={shipsFaceoffData}
          regentImage={scenicShipFleetImg}
          vikingImage={celebrityShipFleetPlaceholder}
          regentImageAlt="Scenic Space-Ship European Waterways"
          vikingImageAlt="Celebrity Modern River Fleet"
        />
      </div>

      {/* ── 17. PRICE & VALUE COMPARISON ── */}
      <div id="price">
        <ValueBreakdownSplit
          title={data.priceAndValue.title}
          subtitle={data.priceAndValue.subtitle}
          includedTitle={data.priceAndValue.scenic.title}
          extrasTitle={data.priceAndValue.celebrity.title}
          included={priceIncluded}
          extras={priceExtras}
          image={scenicDifferenceImg}
        />
      </div>

      {/* ── 18. INLINE CTA 3 ── */}
      <CenterCTA
        title={data.cta3.title}
        description={data.cta3.description}
        buttonText={data.cta3.buttonText}
        buttonLink={data.cta3.buttonLink}
        image={cta3BgImg}
        theme="dark"
      />

      {/* ── 19. PROS & CONS SECTION ── */}
      <div id="pros-and-cons" className="space-y-12 py-12 bg-slate-50">
        <ProsConsCards
          title="Scenic: Strengths & Considerations"
          bestFor={data.prosAndCons.scenicPros}
          notBestFor={data.prosAndCons.scenicCons}
          prosTitle="Scenic Key Strengths"
          consTitle="Things to Consider"
          type="pros-cons"
          bgClass="bg-slate-50"
        />

        <ProsConsCards
          title="Celebrity: Strengths & Considerations"
          bestFor={data.prosAndCons.celebrityPros}
          notBestFor={data.prosAndCons.celebrityCons}
          prosTitle="Celebrity Key Strengths"
          consTitle="Things to Consider"
          bottomNote="Celebrity River Cruises brings the contemporary luxury aesthetic of its ocean Edge-series ships into European river cruising."
          type="pros-cons"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ── 20. CATEGORY SHOWDOWNS: HEAD-TO-HEAD DECIDERS ── */}
      <div id="verdict-categories">
        <CategoryAwards
          title="Direct Head-to-Head Deciders"
          subtitle="KEY COMPARISON SHOWDOWNS"
          categories={data.categoryShowdowns}
        />
      </div>

      {/* ── 21. WHO SHOULD CHOOSE SCENIC / CELEBRITY ── */}
      <div id="who-should-choose">
        <GenericChecklistCards
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.lead}
          cards={data.whoShouldChoose.cards}
        />
      </div>

      {/* ── 22. ANGELA HUGHES AUTHORITY BOX ── */}
      <div id="angela-hughes">
        <ExpertCredentials
          title={data.angelaHughes.role}
          name={data.angelaHughes.name}
          authorName={data.angelaHughes.name}
          image={AboutImage}
          badge={data.angelaHughes.eyebrow}
          credentials={data.angelaHughes.credentials.map((c) => c.label)}
          bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury and river cruise travel experiences. She is widely recognized across the travel industry as a leading river cruise authority."
          ctaText="Consult Angela Hughes"
          ctaLink="/contact"
        />
      </div>

      {/* ── 23. FREQUENTLY ASKED QUESTIONS ── */}
      <div id="faq" className="bg-slate-50/60 py-16">
        <FAQAccordion data={data.faq} />
      </div>

      {/* ── 24. FINAL VERDICT & PLANNING SERVICES ── */}
      <div id="verdict">
        <TrustSection
          sections={trustSections}
          mainImage={verdictScenicImg1}
          secondaryImage={verdictScenicImg2}
        />
      </div>

      {/* ── 25. FINAL CALL TO ACTION ── */}
      <div id="final-cta">
        <CenterCTA
          title={data.finalCta.title}
          description={data.finalCta.description}
          buttonText={data.finalCta.buttonText}
          buttonLink={data.finalCta.buttonLink}
          image={finalCtaBgImg}
          theme="dark"
        />
      </div>
    </div>
  );
}
