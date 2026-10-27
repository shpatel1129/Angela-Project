import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";

// UI Components (100% component-based, no custom HTML sections, clean architecture)
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

// Distinct images for each section from dedicated ScenicVsTauckRiverCruises assets folder
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import heroImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/hero-scenic-vs-tauck.webp";
import scenicBiggestDifferenceImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-difference-ship.webp";
import tauckBiggestDifferenceImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-difference-journey.webp";
import scenicPhilosophyFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-philosophy-fleet.webp";
import tauckPhilosophyFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-philosophy-fleet.webp";
import cta1BgImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/cta1-scenic-sundeck.webp";
import scenicSuiteImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-suite.webp";
// import tauckSuiteImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-suite.webp";
import tauckSuitePlaceholder from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-suite-placeholder.svg";
import scenicRoyalSuiteImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-royal-suite.webp";
import scenicSunLoungeImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-sun-lounge.webp";
import scenicDiningImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-dining.webp";
// import tauckDiningImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-dining.webp";
import tauckDiningPlaceholder from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-dining-placeholder.svg";
import cta2BgImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/cta2-tauck-french-river.webp";
import scenicButlerImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-butler-service.webp";
import tauckCrewImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-crew-service.webp";
import scenicInclusionsImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-inclusions.webp";
import tauckInclusionsImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-inclusions.webp";
import scenicShipFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/scenic-space-ship.webp";
import tauckShipFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/tauck-riverboat-pool.webp";
import profileFirstTimeImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/profile-first-time.webp";
import profileFoodLoversImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/profile-food-lovers.webp";
import profileCouplesImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/profile-couples.webp";
import profileFamiliesImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/profile-families.webp";
import profileSoloImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/profile-solo.webp";
import profileActiveImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/profile-active.webp";
import priceValueImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/price-value-breakdown.webp";
import cta3BgImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/cta3-tauck-destination.webp";
import trustScenicEnrichImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/trust-scenic-enrich.webp";
import trustTauckJourneyImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/trust-tauck-journey.webp";
import finalCtaBgImg from "../../../assets/ScenicRiverCruises/ScenicVsTauckRiverCruises/final-cta-evening-cruise.webp";

// Structured page data
import data from "./data.json";

export default function ScenicVsTauckRiverCruises() {
  const { schemaData } = data;

  // 1. Profile items with distinct, matching images
  const profileImages = [
    profileFirstTimeImg,   // First-Time Cruisers
    profileFoodLoversImg,   // Food Lovers
    profileCouplesImg,      // Couples
    profileFamiliesImg,     // Families (Tauck Bridges)
    profileSoloImg,         // Solo Travelers
    profileActiveImg,       // Active Travelers
  ];

  const formattedProfiles = data.travelerProfiles.profiles.map((p, idx) => ({
    name: p.name,
    tagline: p.title,
    image: profileImages[idx] || profileFirstTimeImg,
    quote: p.lead,
    recommendation: `${p.scenicHeader.replace(":", "")} vs ${p.avalonHeader.replace(":", "")}`,
    reason: `${p.scenicPoint}  ${p.avalonPoint}`,
    whyFits: [
      `Scenic: ${p.scenicPoint}`,
      `Tauck: ${p.avalonPoint}`,
      `Key Takeaway: ${p.verdict}`,
    ],
  }));

  // 2. Culinary venues formatted for CulinaryExcellence
  const culinaryVenues = [
    {
      name: data.dining.scenic.title,
      cuisine: "Multi-Course Haute Cuisine & Sommelier Wine",
      description: `${data.dining.scenic.text} Key highlights: ${data.dining.scenic.points.join(", ")}. ${data.dining.verdict.scenicEdge}`,
      signatureDish: "Table La Rive 6-Course Degustation",
      atmosphere: "Refined White-Glove Luxury & Multiple Venues",
    },
    {
      name: data.dining.tauck.title,
      cuisine: "Regional Gastronomy & Dining Ashore",
      description: `${data.dining.tauck.text} Key highlights: ${data.dining.tauck.points.join(", ")}. ${data.dining.verdict.tauckEdge}`,
      signatureDish: "Destination Castles & Local Vineyard Feasts",
      atmosphere: "Warm, Sophisticated & Destination-Connected",
    },
  ];

  // 3. Service Cards for QuickCompareCards
  const serviceScenicCard = {
    style: "SCENIC LUXURY SERVICE",
    name: data.service.scenic.title,
    description: data.service.scenic.text,
  };

  const serviceTauckCard = {
    style: "TAUCK DISTINCTIVE CARE",
    name: data.service.tauck.title,
    description: data.service.tauck.text,
  };

  // 4. Inclusions data for SuiteAndInclusionsFaceoff
  const suiteAndInclusionsFaceoffData = {
    subtitle: "ALL-INCLUSIVE LUXURY VS DISTINCTIVELY INCLUSIVE TOURING",
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
      subtitle: "Distinctively Inclusive European Journeys",
      inclusions: [
        {
          name: "All Shore Excursions Included",
          desc: "Every shore excursion is included with zero optional tours sold on river cruises.",
        },
        {
          name: "Exclusive Cultural Experiences",
          desc: "Private castle dinners, museum visits, and historic palace access included.",
        },
        {
          name: "All Meals & Dining Ashore",
          desc: "All meals onboard plus included lunches and dinners at authentic local restaurants ashore.",
        },
        {
          name: "Complimentary Fine Beverages",
          desc: "Complimentary wine, beer, spirits, and non-alcoholic beverages throughout.",
        },
        {
          name: "Airport Transfers, Gratuities & Hotels",
          desc: "Airport transfers, all gratuities to staff and guides, and selected hotel stays included.",
        },
        {
          name: "Up to 4 Tauck Directors Per Cruise",
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
      badge: "TAUCK RIVERBOATS",
      title: data.ships.tauck.title,
      description: `${data.ships.tauck.text} ${data.ships.winner.tauckEdge}`,
      features: data.ships.tauck.points,
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
      title: "Distinctively Inclusive Pricing",
      description: data.priceAndValue.tauck.formula,
    },
    {
      title: "Value Proposition",
      description: data.priceAndValue.tauck.summary,
    },
    {
      title: "Included Experience Components",
      description: "Cruise fare, all shore excursions (zero sold as options), dining ashore at local restaurants, hotel stays, gratuities & transfers.",
    },
  ];

  // 7. Final Verdict data for TrustSection
  const trustSections = [
    {
      heading: data.finalVerdict.title,
      paragraphs: [
        data.finalVerdict.intro,
        ...data.finalVerdict.readMore,
      ],
      conclusion: "At Trips & Ships Luxury Travel, we'll help you compare the ship, suite, itinerary, and included experiences  not simply the advertised cruise price.",
    },
    {
      heading: data.finalVerdict.servicesTitle,
      paragraphs: [
        "Our dedicated luxury river cruise planning services include comprehensive VIP support:",
      ],
      list: data.finalVerdict.planningServices,
      conclusion: "Start Planning with Angela Hughes",
    },
    {
      heading: "Ready to Reserve Your River Cruise?",
      paragraphs: [
        "Whether you choose Scenic's all-inclusive 5-star Space-Ships or Tauck's distinctive guided journeys, our team ensures you receive the finest available staterooms, perks, and promotions.",
        "Contact Angela Hughes to compare dates, suite categories, and special offers for your European river cruise.",
      ],
      list: [
        "Direct cruise line executive relationships",
        "Preferred suite category availability & promotions",
        "Custom pre- and post-cruise luxury arrangements",
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-navy-950 min-h-screen">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={`${data.hero.description} ${data.hero.readMore.join(" ")}`}
        backgroundImage={heroImg}
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
          image1={scenicBiggestDifferenceImg}
          image2={tauckBiggestDifferenceImg}
          image1Placeholder="SCENIC SPACE-SHIP RHINE CRUISE"
          image2Placeholder="TAUCK MS LUMIERE CRUISE"
          ctaText={data.biggestDifference.ctaText}
          ctaLink={data.biggestDifference.ctaLink}
        />
      </div>

      {/* ── 4. WHO IS EACH LINE BEST FOR? ── */}
      <div id="who-is-it-for">
        <DualPhilosophyShowcase
          data={data.whoIsItFor}
          imageSailing={scenicPhilosophyFleetImg}
          imageAllSuite={tauckPhilosophyFleetImg}
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
          image2={tauckSuitePlaceholder}
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
          summary="This is one category where there is no universal winner. For a specific sailing, compare the exact suite category, not just the brand."
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
          images={[scenicDiningImg, tauckDiningPlaceholder]}
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
            features: [
              "Scenic provides Butler Service across its suite categories, with services tailored to accommodation level.",
              "Services include concierge assistance, unpacking and packing, shoe polishing, in-suite drinks, and minibar restock.",
              "Assistance with special requests and dedicated, personalized in-suite hospitality.",
              "Clear advantage for travelers who want formal in-suite butler pampering."
            ]
          }}
          brandB={{
            name: data.service.tauck.title,
            image: tauckCrewImg,
            features: [
              "Tauck delivers a comprehensive team-based service experience rather than individual butler assignments.",
              "Features up to four Tauck Director-level staff per cruise coordinating with local expert guides.",
              "Attentive, friendly hospitality ensuring seamless execution from ship to shore.",
              "Ideal for travelers who prefer pervasive group and tour support from morning to evening."
            ]
          }}
        />
      </div>

      {/* ── 13. TOUR DIRECTORS & GUIDES ── */}
      <div id="tour-directors" className="py-20 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-6 text-center pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-ts-gold font-bold block mb-3">
            TOUR LEADERSHIP PHILOSOPHY
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
              style: "SCENIC CRUISE LEADERSHIP",
              name: data.tourDirectors.scenic.title,
              description: data.tourDirectors.scenic.text,
            }}
            avalon={{
              style: "TAUCK TOUR DIRECTORS",
              name: data.tourDirectors.tauck.title,
              description: data.tourDirectors.tauck.text,
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-12">
          <div className="bg-navy-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-ts-gold/30 text-center">
            <span className="inline-block px-3 py-1 bg-ts-gold text-navy-950 font-sans text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              TOUR LEADERSHIP VERDICT
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
          imageAvalon={tauckInclusionsImg}
          imageScenic={scenicInclusionsImg}
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
          vikingImage={tauckShipFleetImg}
          regentImageAlt="Scenic Space-Ship European Waterways"
          vikingImageAlt="Tauck Riverboat Pool and Sundeck"
        />
      </div>

      {/* ── 17. PRICE & VALUE COMPARISON ── */}
      <div id="price">
        <ValueBreakdownSplit
          title={data.priceAndValue.title}
          subtitle={data.priceAndValue.lead}
          includedTitle={data.priceAndValue.scenic.title}
          extrasTitle={data.priceAndValue.tauck.title}
          included={priceIncluded}
          extras={priceExtras}
          image={priceValueImg}
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
          title="Tauck: Strengths & Considerations"
          bestFor={data.prosAndCons.tauckPros}
          notBestFor={data.prosAndCons.tauckCons}
          prosTitle="Tauck Key Strengths"
          consTitle="Things to Consider"
          bottomNote="Tauck's current materials explicitly state that no options are sold on its river cruises and that virtually every river-cruise expense is included in one upfront price."
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

      {/* ── 21. WHO SHOULD CHOOSE SCENIC / TAUCK ── */}
      <div id="who-should-choose">
        <GenericChecklistCards
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
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
          mainImage={trustScenicEnrichImg}
          secondaryImage={trustTauckJourneyImg}
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
