import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Fresh Assets - Celebrity Cruises Staterooms & Suites
import HeroStateroomsImg from "@/assets/celebritycruises/CelebrityStaterooms/hero-staterooms.webp";
import InsideStateroomImg from "@/assets/celebritycruises/CelebrityStaterooms/inside-stateroom.webp";
import VerandaStateroomImg from "@/assets/celebritycruises/CelebrityStaterooms/celebrity-flora-penthouse-suite-bedroom.webp";
import InfiniteVerandaImg from "@/assets/celebritycruises/CelebrityStaterooms/infinite-veranda.webp";
import ConciergeClassImg from "@/assets/celebritycruises/CelebrityStaterooms/concierge-class.webp";
import AquaClassWellnessImg from "@/assets/celebritycruises/CelebrityStaterooms/aquaclass-wellness.webp";
import TheRetreatSuiteImg from "@/assets/celebritycruises/CelebrityStaterooms/the-retreat-suite.webp";
import SuiteCelebrityImg from "@/assets/celebritycruises/CelebrityStaterooms/suite-celebrity.webp";
import SingleSoloStateroomImg from "@/assets/celebritycruises/CelebrityStaterooms/single-solo-stateroom.webp";
import CouplesStateroomImg from "@/assets/celebritycruises/CelebrityStaterooms/couples-stateroom.webp";
import FamiliesConnectingImg from "@/assets/celebritycruises/CelebrityStaterooms/families-connecting.webp";
import ScenicAlaskaBalconyImg from "@/assets/celebritycruises/CelebrityStaterooms/scenic-alaska-balcony.webp";
import DeckLocationShipImg from "@/assets/celebritycruises/CelebrityStaterooms/celebrity-flora-stargazing-panoramic-scenic-view.webp";
import UpgradeValueImg from "@/assets/celebritycruises/CelebrityStaterooms/celebrity-flora-penthouse-suite-balcony.webp";
import AquaClassBluRestaurantImg from "@/assets/celebritycruises/CelebrityStaterooms/aquaclass-blu-restaurant.webp";
import AquaClassThermalSuiteImg from "@/assets/celebritycruises/CelebrityStaterooms/aquaclass-thermal-suite.webp";
import AquaClassPersianGardenImg from "@/assets/celebritycruises/CelebrityStaterooms/aquaclass-persian-garden.webp";
import AquaClassTranquilDeckImg from "@/assets/celebritycruises/CelebrityStaterooms/aquaclass-tranquil-deck.webp";
import DestMediterraneanGreekIslesImg from "@/assets/celebritycruises/CelebrityStaterooms/dest-mediterranean-greek-isles.webp";
import VerandaInteriorLivingSpaceImg from "@/assets/celebritycruises/CelebrityStaterooms/veranda-interior-living-space.webp";
import DeckLocationForwardImg from "@/assets/celebritycruises/CelebrityStaterooms/deck-location-forward-bow.jpg";
import DeckLocationMidshipImg from "@/assets/celebritycruises/CelebrityStaterooms/deck-location-midship-stability.jpg";
import DeckLocationAftWakeImg from "@/assets/celebritycruises/CelebrityStaterooms/deck-location-aft-wake-view.webp";
import DeckLocationSandwichCorridorImg from "@/assets/celebritycruises/CelebrityStaterooms/deck-location-quiet-corridor.jpg";
import DestNorwayFjordsImg from "@/assets/celebritycruises/CelebrityStaterooms/dest-norway-fjords.webp";
import SuiteRoyalImg from "@/assets/celebritycruises/CelebrityStaterooms/suite-royal.webp";
import SuitePenthouseImg from "@/assets/celebritycruises/CelebrityStaterooms/suite-penthouse.webp";
import SuiteEdgeVillaImg from "@/assets/celebritycruises/CelebrityStaterooms/suite-edge-villa.webp";
import SuiteIconicImg from "@/assets/celebritycruises/CelebrityStaterooms/suite-iconic.webp";
import StateroomsVsSuitesOverviewImg from "@/assets/celebritycruises/CelebrityStaterooms/celebrity-flora-glamping-vibrant-natural-setting.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// UI Components from src/components/ui/ (Every section uses a UNIQUE UI component; no repetition except CenterCTA)
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CardGrid from "@/components/ui/CardGrid";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ChecklistCards from "@/components/ui/ChecklistCards";
import AlternatingRiverShowcase from "@/components/ui/AlternatingRiverShowcase";
import VsComparisonGrid from "@/components/ui/VsComparisonGrid";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import ShipAmenitiesShowcase from "@/components/ui/ShipAmenitiesShowcase";
import PremiumSuiteCategories from "@/components/ui/PremiumSuiteCategories";
import SoloCabinShowcase from "@/components/ui/SoloCabinShowcase";
import ExpertAuthorityChecklist from "@/components/ui/ExpertAuthorityChecklist";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import TravelStyleGrid from "@/components/ui/TravelStyleGrid";
import CinematicDestinations from "@/components/ui/CinematicDestinations";
import AccordionFlexGrid from "@/components/ui/AccordionFlexGrid";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import BoutiqueVsResortFaceoff from "@/components/ui/BoutiqueVsResortFaceoff";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";

export default function CelebrityStaterooms() {
  // Quick Answer ComparisonTable data structure
  const quickAnswerTableData = {
    title: data.quickAnswer.title,
    headers: data.quickAnswer.columns,
    rows: (data.quickAnswer.rows || []).map((row) => [
      row.category,
      row.benefit,
      row.bestFor,
    ]),
    footnote: data.quickAnswer.footnote,
  };

  // Section 1: Categories Overview CardGrid
  const categoriesGridCards = (data.categoriesOverview.cards || []).map(
    (card, idx) => {
      const iconNames = [
        "BedDouble",
        "Eye",
        "Ship",
        "Sparkles",
        "Award",
        "Heart",
        "Crown",
        "User",
      ];
      return {
        ...card,
        icon: iconNames[idx % iconNames.length],
      };
    }
  );

  // Section 3: Ocean View ChecklistCards
  const oceanViewChecklistData = {
    title: "Ocean View Staterooms: Inclusions & Traveler Match",
    ama: {
      name: "What Ocean View Staterooms Offer",
      reasons: [
        ...(data.oceanViewStaterooms.whatItOffers || []),
        ...data.oceanViewStaterooms.pros.map((p) => `Advantage: ${p}`),
      ],
    },
    avalon: {
      name: "Who Should Book Ocean View?",
      reasons: [
        ...(data.oceanViewStaterooms.whoShouldBook || []),
        ...data.oceanViewStaterooms.cons.map((c) => `Consideration: ${c}`),
      ],
    },
  };

  // Section 4: Veranda AlternatingRiverShowcase
  const verandaAlternatingData = (data.verandaStaterooms.features || []).map(
    (feat, idx) => ({
      name: feat.name,
      description: feat.description,
      image: idx === 0 ? VerandaStateroomImg : VerandaInteriorLivingSpaceImg,
      bestFor: feat.bestFor,
      highlights: feat.highlights,
    })
  );

  // Section 5: Infinite Veranda VsComparisonGrid
  const infiniteVsTraditionalData = {
    title: "Infinite Veranda vs. Traditional Balcony Comparison",
    rhine: {
      title: "Edge Series Infinite Veranda",
      subtitle: "MODERN INDOOR-OUTDOOR INTEGRATION",
      features: [
        "Floor-to-ceiling glass window lowers at touch of a button",
        "Adds ~23% more interior climate-controlled living space",
        "Integrated lounge armchairs within convertible veranda zone",
        "Featured on Edge, Apex, Beyond, Ascent, and Xcel",
        "Touchscreen lighting, blind, and temperature controls",
      ],
    },
    danube: {
      title: "Traditional Step-Out Balcony",
      subtitle: "CONVENTIONAL MARITIME PRIVACY",
      features: [
        "Exterior private outdoor platform accessed through sliding glass doors",
        "Exterior patio chairs and drink table separated from room",
        "Uninterrupted fresh ocean air without opening the cabin interior",
        "Standard across Solstice and Millennium Class ships",
        "Familiar nautical layout preferred by traditional balcony lovers",
      ],
    },
  };

  // Section 6: Concierge Class ContainedShowdown
  const conciergeShowdownData = {
    title: "Concierge Class vs. Standard Veranda",
    brandA: {
      name: "Concierge Class Veranda",
      image: ConciergeClassImg,
      features: [
        "Dedicated Concierge team for reservations, excursions & priority requests",
        "Exclusive embarkation day welcome lunch in Main Dining Room",
        "Prime midship and upper-deck residential ship placement",
        "Sparkling wine upon request, afternoon canapés, and pillow menu",
        "Priority check-in, priority tender service, and enhanced bath amenities",
      ],
    },
    brandB: {
      name: "Standard Veranda Stateroom",
      image: VerandaStateroomImg,
      features: [
        "Same physical cabin square footage on the majority of ships",
        "Private outdoor step-out balcony with chairs and drinks table",
        "Standard stateroom attendant service twice daily",
        "More economical entry fare for cruisers who just want outdoor space",
        "Freedom to dine anywhere without paying for unused concierge perks",
      ],
    },
  };

  // Section 7: AquaClass ShipAmenitiesShowcase
  const aquaAmenitiesData = {
    title: data.aquaClass.title,
    subtitle: data.aquaClass.subtitle,
    items: [
      {
        title: "Exclusive Blu Restaurant",
        highlight: "CLEAN CUISINE",
        description:
          "Complimentary breakfast and dinner at Blu, featuring flavorful clean cuisine, lighter sauces, intimate atmosphere, and biodynamic wines.",
      },
      {
        title: "Thermal Suite Spa Access",
        highlight: "UNLIMITED PASS",
        description:
          "Unlimited access to SEA Thermal Suite (Edge Class) or Persian Garden (Solstice/Millennium Class) heated loungers, steam rooms, and saunas.",
      },
      {
        title: "Spa Concierge & Amenities",
        highlight: "VIP WELLNESS",
        description:
          "Dedicated spa concierge for treatment priority, in-cabin yoga mats, Hansgrohe shower towers, and plush microfiber robes.",
      },
      {
        title: "Tranquil Ship Locations",
        highlight: "SERENE DECKS",
        description:
          "Staterooms clustered conveniently near the Spa and adults-only Solarium, ensuring quiet residential corridors and unhurried rest.",
      },
    ],
  };
  const aquaImages = [
    AquaClassBluRestaurantImg,
    AquaClassThermalSuiteImg,
    AquaClassPersianGardenImg,
    AquaClassTranquilDeckImg,
  ];

  // Section 8: The Retreat PremiumSuiteCategories
  const retreatKeys = [
    "sky",
    "celebrity",
    "royal",
    "penthouse",
    "edgeVilla",
    "iconic",
  ];
  const retreatSuiteImages: Record<string, string> = {
    sky: TheRetreatSuiteImg,
    celebrity: SuiteCelebrityImg,
    royal: SuiteRoyalImg,
    penthouse: SuitePenthouseImg,
    edgeVilla: SuiteEdgeVillaImg,
    iconic: SuiteIconicImg,
  };
  const retreatPremiumSuiteData = {
    title: (
      <span
        className="text-navy-950 not-italic"
        style={{
          color: "#0a192f",
          WebkitTextFillColor: "#0a192f",
          background: "none",
          WebkitBackgroundClip: "unset",
          display: "inline-block",
        }}
      >
        {data.theRetreat.title}
      </span>
    ),
    subtitle: data.theRetreat.subtitle,
    description: data.theRetreat.description,
    categories: (data.theRetreat.suiteCategories || []).map((suite, idx) => ({
      name: suite.name,
      badge: suite.badge,
      imageKey: retreatKeys[idx % retreatKeys.length],
      imageLabel: `${suite.size} • ${suite.deck}`,
      features: suite.features,
      bestFor: suite.description,
    })),
  };

  const retreatExpertRecommendation = {
    badge: "THE RETREAT SANCTUARY",
    title: "All-Suite Luxury with Boutique Exclusivity",
    quote:
      "The Retreat is not just a larger room; it is an entirely private luxury lifestyle. Having breakfast at Luminae, enjoying afternoon cocktails in the private lounge, and sunbathing on the Retreat Sundeck gives you an uncrowded sanctuary on a world-class premium ship.",
    author: "Angela Hughes",
    role: "CEO & Luxury Cruise Specialist",
  };

  // Section 9: Single / Solo Staterooms SoloCabinShowcase
  const soloShowcaseData = {
    title: data.singleStaterooms.title,
    subtitle: data.singleStaterooms.subtitle,
    description: data.singleStaterooms.description,
    cabins: data.singleStaterooms.cabins,
  };

  // Section 14: Scenic Cruises CinematicDestinations
  const scenicDestinationsItems = (data.scenicDestinations.destinations || []).map(
    (dest, idx) => {
      const destImages = [
        ScenicAlaskaBalconyImg,
        DestNorwayFjordsImg,
        DestMediterraneanGreekIslesImg,
      ];
      return {
        title: dest.region,
        description: dest.details,
        features: [dest.headline, dest.tips],
        image: destImages[idx % destImages.length],
      };
    }
  );

  // Section 15: Deck Location AccordionFlexGrid
  const deckLocationAccordionItems = [
    {
      title: "Forward Cabins",
      category: "LOCATION & VIEWS",
      description:
        "Forward cabins offer sweeping ocean outlooks and easy proximity to the theater and spa. In rough sea conditions, forward rooms experience more vertical pitching motion.",
      highlights: [
        "Unobstructed views approaching destinations and ports",
        "Short walk to the Main Theater and Fitness Center",
        "Best suited for cruisers comfortable with sea motion",
      ],
      image: DeckLocationForwardImg,
    },
    {
      title: "Midship Cabins",
      category: "MAXIMUM STABILITY",
      description:
        "Midship is the fulcrum of the vessel, offering the most stable ride during ocean crossings. Highly recommended for travelers sensitive to motion sickness.",
      highlights: [
        "Minimal motion during sea transitions",
        "Direct central elevator lobby and dining access",
        "Prime category designation with highest booking demand",
      ],
      image: DeckLocationMidshipImg,
    },
    {
      title: "Aft Wake Cabins",
      category: "PANORAMIC WAKES",
      description:
        "Aft cabins overlook the ship's churned white wake and provide mesmerizing, sheltered sea views with larger-than-standard balcony dimensions.",
      highlights: [
        "Iconic sunset wake views and quiet dead-end corridors",
        "Deep exterior balconies on Sunset Veranda categories",
        "Slightly longer walk to forward entertainment areas",
      ],
      image: DeckLocationAftWakeImg,
    },
    {
      title: "Sandwich Decks",
      category: "QUIET STRATEGY",
      description:
        "The gold standard in deck placement: choose a residential deck with passenger cabins directly above and below you to avoid pool chairs or nightclub noise.",
      highlights: [
        "No early morning pool chair scraping overhead",
        "No late-night bass vibrations from lounges or casinos",
        "Insulated by residential staterooms on all sides",
      ],
      image: DeckLocationSandwichCorridorImg,
    },
  ];

  // Sections 16 & 17: Stateroom Costs & Upgrades ValueBreakdownSplit
  const upgradeIncludedList = (data.upgradeDecisions.whenWorthIt || []).map(
    (item, idx) => ({
      title: `Reason 0${idx + 1}`,
      description: item,
    })
  );

  const upgradeExtrasList = (data.upgradeDecisions.whenNotWorthIt || []).map(
    (item, idx) => ({
      title: `Consideration 0${idx + 1}`,
      description: item,
    })
  );

  // Section 18: Staterooms vs Suites BoutiqueVsResortFaceoff
  const stateroomsVsSuitesData = {
    title: data.stateroomsVsSuites.title,
    subtitle: data.stateroomsVsSuites.subtitle,
    boutique: {
      title: data.stateroomsVsSuites.standardStaterooms.title,
      subtitle: data.stateroomsVsSuites.standardStaterooms.categories,
      features: [
        data.stateroomsVsSuites.standardStaterooms.description,
        `Best for: ${data.stateroomsVsSuites.standardStaterooms.bestFor}`,
        "Full access to standard pools, theaters, lounges & Main Dining Rooms",
        "Dedicated twice-daily stateroom attendant care",
      ],
    },
    resort: {
      title: data.stateroomsVsSuites.retreatSuites.title,
      subtitle: data.stateroomsVsSuites.retreatSuites.categories,
      features: [
        data.stateroomsVsSuites.retreatSuites.description,
        `Best for: ${data.stateroomsVsSuites.retreatSuites.bestFor}`,
        "Exclusive Luminae gourmet restaurant & 24/7 Retreat Lounge",
        "Private Retreat Sundeck with dedicated pool, hot tub & cabanas",
        "Personalized butler service & bundled premium amenities",
      ],
    },
  };

  // Section 20: FAQs data
  const faqAccordionData = {
    title: data.faqs.title,
    subtitle: data.faqs.subtitle,
    items: data.faqs.items.map((item) => ({
      question: item.q,
      answer: item.a,
    })),
  };

  // Section 21: Final Verdict ConclusionSection
  const conclusionSections = [
    {
      heading: data.finalVerdict.title,
      paragraphs: [
        data.finalVerdict.description,
        ...data.finalVerdict.breakdown.map(
          (b) => `${b.label}: ${b.value} — ${b.detail}`
        ),
        data.finalVerdict.closingAdvice,
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="description" content={data.meta.metaDescription} />
        <meta name="keywords" content={data.meta.primaryKeyword} />
        <link rel="canonical" href={`https://www.tripsandships.com${data.meta.pageUrl}`} />

        {/* Structured Schema */}
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      <Nav />

      {/* Main Page Layout */}
      <div className="min-h-screen bg-white">
        {/* Top Brand Navigation */}


        {/* Hero Section */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            description={data.hero.description}
            backgroundImage={HeroStateroomsImg}
            byline={true}
            primaryCtaText="Explore Stateroom Categories"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Consult Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

        {/* Quick Answer Table (ComparisonTable) */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable data={quickAnswerTableData} />
        </div>

        {/* Section 1: Categories Overview (CardGrid) */}
        <div id="categories-overview">
          <CardGrid
            title={data.categoriesOverview.title}
            subtitle={data.categoriesOverview.subtitle}
            cards={categoriesGridCards}
            columns={4}
            stagger={false}
          />
        </div>

        {/* Section 2: Inside Staterooms (EditorialFeatureShowcase) */}
        <div id="inside-staterooms">
          <EditorialFeatureShowcase
            title={data.insideStaterooms.title}
            subtitle={data.insideStaterooms.subtitle}
            image={InsideStateroomImg}
            features={data.insideStaterooms.features}
            bgClass="bg-ice-50"
          />

          {/* Inside Stateroom Advisor Advice */}

        </div>

        {/* Section 3: Ocean View Staterooms (ChecklistCards) */}
        <div id="oceanview-staterooms">
          <ChecklistCards data={oceanViewChecklistData} />

          {/* Ocean View Advisor Advice */}
          <div className="max-w-[1100px] mx-auto px-6 -mt-8 mb-16">
            <div className="bg-ice-50 border border-navy-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ts-gold shrink-0 mt-0.5">
                Advisor Advice
              </span>
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed italic">
                "{data.oceanViewStaterooms.advice}"
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Traditional Veranda Staterooms (AlternatingRiverShowcase) */}
        <div id="veranda-staterooms">
          <AlternatingRiverShowcase
            title={data.verandaStaterooms.title}
            description={data.verandaStaterooms.description}
            rivers={verandaAlternatingData}
          />
        </div>

        {/* Section 5: Infinite Veranda vs Traditional Balcony (VsComparisonGrid) */}
        <div id="infinite-veranda">
          <VsComparisonGrid data={infiniteVsTraditionalData} />

        </div>

        {/* Interlude CTA 1 */}
        <CenterCTA
          title={data.ctaInterlude.title}
          description={data.ctaInterlude.description}
          buttonText={data.ctaInterlude.primaryButtonText}
          buttonLink={data.ctaInterlude.primaryButtonLink}
          image={InfiniteVerandaImg}
          theme="dark"
        />

        {/* Section 6: Concierge Class (ContainedShowdown) */}
        <div id="concierge-class">
          <ContainedShowdown
            title={data.conciergeClass.title}
            brandA={conciergeShowdownData.brandA}
            brandB={conciergeShowdownData.brandB}
          />

          {/* Concierge Advisor Advice */}
          <div className="max-w-[1100px] mx-auto px-6 mt-8 mb-16">
            <div className="bg-ice-50 border border-navy-100 rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ts-gold shrink-0 mt-0.5">
                Advisor Advice
              </span>
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed italic">
                "{data.conciergeClass.advice}"
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: AquaClass (ShipAmenitiesShowcase) */}
        <div id="aquaclass">
          <ShipAmenitiesShowcase data={aquaAmenitiesData} images={aquaImages} />
        </div>

        {/* Section 8: The Retreat Suite Experience (PremiumSuiteCategories) */}
        <div id="the-retreat">
          <PremiumSuiteCategories
            data={retreatPremiumSuiteData}
            images={retreatSuiteImages}
          />


        </div>

        {/* Section 9: Single / Solo Staterooms (SoloCabinShowcase) */}
        <div id="single-staterooms">
          <SoloCabinShowcase
            data={soloShowcaseData}
            images={[SingleSoloStateroomImg, InfiniteVerandaImg]}
          />

        </div>

        {/* Section 10: Accessible Staterooms (ExpertAuthorityChecklist) */}
        <div id="accessible-staterooms">
          <ExpertAuthorityChecklist
            title={data.accessibleStaterooms.title}
            subtitle={data.accessibleStaterooms.subtitle}
            points={[
              ...data.accessibleStaterooms.features.map(
                (f) => `${f.title}: ${f.description}`
              ),
              ...data.accessibleStaterooms.bookingConsiderations,
            ]}
          />


        </div>

        {/* Section 11: Stateroom Category Codes Explained (Table Primitives) */}
        <div id="category-codes">
          <section className="w-full py-20 bg-white">
            <div className="max-w-[1100px] mx-auto px-6">
              <div className="text-center mb-14">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4">
                  {data.categoryCodes.subtitle}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950">
                  {data.categoryCodes.title}
                </h2>
                <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6" />
                <p className="font-sans text-base text-slate-600 max-w-3xl mx-auto mt-6">
                  {data.categoryCodes.description}
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm mb-12">
                <Table className="w-full text-left border-collapse">
                  <TableHeader>
                    <TableRow className="bg-navy-950 hover:bg-navy-950 border-none">
                      {(data.categoryCodes.columns || []).map((header, idx) => (
                        <TableHead
                          key={idx}
                          className="px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90"
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {(data.categoryCodes.rows || []).map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                      >
                        <TableCell className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm align-top md:w-1/3">
                          {row[0]}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-600 align-top">
                          {row[1]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

            </div>
          </section>
        </div>

        {/* Sections 12 & 13: Best for Couples & Families (TravelStyleGrid) */}
        <div id="couples-families">
          <TravelStyleGrid
            data={{
              title: "Which Celebrity Stateroom Category Fits You Best?",
              subtitle: "TAILORED CABIN RECOMMENDATIONS BY TRAVEL COMPOSITION",
              items: [
                {
                  title: "Best for Couples",
                  timeframe: "ROMANCE & VERANDAS",
                  description: data.couplesMatch.description,
                  highlights: data.couplesMatch.recommendations.map(
                    (r) => `${r.tier}: ${r.category}`
                  ),
                  image: CouplesStateroomImg,
                },
                {
                  title: "Best for Families",
                  timeframe: "CONNECTING ROOMS & SUITES",
                  description: data.familiesMatch.description,
                  highlights: data.familiesMatch.checklist.slice(0, 4),
                  image: FamiliesConnectingImg,
                },
                {
                  title: "Best for Wellness Lovers",
                  timeframe: "AQUACLASS & SPA",
                  description:
                    "Complimentary Blu dining and daily Persian Garden thermal suite access make AquaClass the quintessential restorative voyage.",
                  highlights: [
                    "Clean cuisine dining at Blu",
                    "Unlimited Thermal Suite pass",
                    "Spa concierge booking assistance",
                  ],
                  image: AquaClassWellnessImg,
                },
                {
                  title: "Best for Ultra Luxury",
                  timeframe: "THE RETREAT SUITES",
                  description:
                    "Exclusive access to Luminae, private sun decks, and dedicated 24-hour butler care deliver total peace of mind.",
                  highlights: [
                    "Gourmet dining at Luminae",
                    "Private Retreat Sundeck & pool",
                    "Premium drinks & Wi-Fi included",
                  ],
                  image: TheRetreatSuiteImg,
                },
              ],
            }}
          />
        </div>

        {/* Section 14: Scenic Cruises (CinematicDestinations) */}
        <div id="scenic-cruises">
          <CinematicDestinations
            title={data.scenicDestinations.title}
            subtitle={data.scenicDestinations.subtitle}
            items={scenicDestinationsItems}
          />
        </div>

        {/* Section 15: Deck & Cabin Location (AccordionFlexGrid) */}
        <div id="deck-location">
          <AccordionFlexGrid
            title={data.deckLocation.title}
            subtitle={data.deckLocation.subtitle}
            items={deckLocationAccordionItems}
          />
        </div>

        {/* Sections 16 & 17: Stateroom Costs & Upgrades (ValueBreakdownSplit) */}
        <div id="costs-upgrades">
          <ValueBreakdownSplit
            title={data.stateroomCosts.title}
            subtitle={data.stateroomCosts.subtitle}
            includedTitle="When an Upgrade Is Worth It"
            extrasTitle="When an Upgrade May Not Be Worth It"
            included={upgradeIncludedList}
            extras={upgradeExtrasList}
            image={UpgradeValueImg}
          />
        </div>

        {/* Section 18: Staterooms vs Suites (BoutiqueVsResortFaceoff) */}
        <div id="staterooms-vs-suites">
          <BoutiqueVsResortFaceoff
            data={stateroomsVsSuitesData}
            boutiqueImg={VerandaStateroomImg}
            resortImg={StateroomsVsSuitesOverviewImg}
          />
        </div>

        {/* Section 19: Travel Advisor Guidance (ExpertCredentials) */}
        <div id="advisor">
          <ExpertCredentials
            title={data.advisorServices.title}
            name={data.advisorServices.bio.name}
            authoritySubtitle={data.advisorServices.bio.title}
            authorityBoxTitle="EXPERT CELEBRITY STATEROOM ADVICE"
            image={AboutAngelaImg}
            credentials={data.advisorServices.services}
            bio={data.advisorServices.intro}
            ctaText={data.advisorServices.bio.ctaText}
            ctaLink={data.advisorServices.bio.ctaLink}
          />
        </div>

        {/* Section 20: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>



        {/* Final CTA */}
        <CenterCTA
          title="Ready to Find Your Ideal Celebrity Stateroom?"
          description="Speak with Angela Hughes and the luxury cruise specialists at Trips & Ships Luxury Travel. We evaluate ship layouts, verify connecting options, and secure VIP Virtuoso perks."
          buttonText="Schedule Stateroom Consultation"
          buttonLink="/contact"
          image={DeckLocationShipImg}
          theme="dark"
        />
      </div>
    </>
  );
}

