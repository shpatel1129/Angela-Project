import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Fresh Assets - Celebrity Cruises Fleet & Lifestyle Images (distinct set for CelebrityShipClasses)
import HeroShipClassesImg from "@/assets/celebritycruises/CelebrityShipClasses/hero-celebrity-ship-classes.webp";
import EdgeBeyondImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-edge-class-beyond.webp";
import EdgeArchitectureImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-edge-class-architecture.webp";
import EdgeModernDesignImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-edge-modern-design.webp";
import XcelInnovationImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-xcel-innovation.webp";
import SolsticeLawnGrassImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-solstice-lawn-club-grass.webp";
import SolsticeBalconyImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-solstice-traditional-balcony.webp";
import SolsticeFjordImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-solstice-class-fjord.webp";
import SilhouetteOpenDecksImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-silhouette-open-decks.webp";
import MillenniumVeniceImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-millennium-class-venice.webp";
import ExpertGuidanceLoungeImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-expert-guidance-lounge.webp";
import StateroomInfiniteVerandaImg from "@/assets/celebritycruises/CelebrityShipClasses/stateroom-infinite-veranda-interior.webp";
import StateroomSolsticeBalconyImg from "@/assets/celebritycruises/CelebrityShipClasses/stateroom-solstice-traditional-veranda.webp";
import StateroomMillenniumRefurbishedImg from "@/assets/celebritycruises/CelebrityShipClasses/stateroom-millennium-refurbished-suite.webp";
import DiningEdgeSpecialtyImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dining-edge-specialty.webp";
import DiningSolsticeMDRImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dining-solstice-mdr.webp";
import DiningMillenniumRestaurantImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dining-millennium-restaurant.webp";
import DiningCasualQuickServiceImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dining-casual-quickservice.webp";
import EntertainmentTheatreImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-entertainment-theatre.webp";
import DestAlaskaEdgeImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dest-alaska-edge.webp";
import DestEuropeNorwayImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dest-europe-norway.webp";
import DestCaribbeanBahamasImg from "@/assets/celebritycruises/CelebrityShipClasses/dest-caribbean-bahamas-beach.webp";
import DestMillenniumIcyStraitImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-dest-millennium-icy-strait.webp";
import ProsConsEdgeImg from "@/assets/celebritycruises/CelebrityShipClasses/proscons-edge-class-ascent.webp";
import ProsConsSolsticeImg from "@/assets/celebritycruises/CelebrityShipClasses/proscons-solstice-class-reflection.webp";
import ProsConsMillenniumImg from "@/assets/celebritycruises/CelebrityShipClasses/proscons-millennium-class-santorini.webp";
import MillenniumFleetVeniceImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-millennium-blue-hull-aerial-st-maarten.webp";
import MillenniumDecisionPoolImg from "@/assets/celebritycruises/CelebrityShipClasses/celebrity-millennium-sunset-bar-alaska.webp";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

// UI Components from src/components/ui/ (Every section uses a UNIQUE UI component; no repetition except CenterCTA)
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import ChecklistCards from "@/components/ui/ChecklistCards";
import AlternatingRiverShowcase from "@/components/ui/AlternatingRiverShowcase";
import VsComparisonGrid from "@/components/ui/VsComparisonGrid";
import CardGrid from "@/components/ui/CardGrid";
import BoutiqueVsResortFaceoff from "@/components/ui/BoutiqueVsResortFaceoff";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import InteractiveCabinComparison from "@/components/ui/InteractiveCabinComparison";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import DynamicCulinaryShowcase from "@/components/ui/DynamicCulinaryShowcase";
import ExpertAuthorityChecklist from "@/components/ui/ExpertAuthorityChecklist";
import AccordionFlexGrid from "@/components/ui/AccordionFlexGrid";
import ArcticGlanceFacts from "@/components/ui/ArcticGlanceFacts";
import TravelerProfileTabs from "@/components/ui/TravelerProfileTabs";
import CinematicDestinations from "@/components/ui/CinematicDestinations";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";
import { ArrowRight } from "lucide-react";

export default function CelebrityShipClasses() {
  // Quick Answer ComparisonTable data structure
  const quickAnswerTableData = {
    title: data.quickAnswer.title,
    headers: data.quickAnswer.columns,
    rows: (data.quickAnswer.rows || []).map((row) => [
      row.feature,
      row.col1,
      row.col2,
      row.col3,
    ]),
    footnote: data.quickAnswer.footnote,
  };

  // 1. Edge Class Lineup & Who Should Choose -> ChecklistCards
  const edgeLineupAndChecklistData = {
    title: "Celebrity Edge Class: Fleet Lineup & Cruiser Match",
    ama: {
      name: data.edgeClass.shipsTitle,
      reasons: [
        ...(data.edgeClass.ships || []).map(
          (s) => `${s.name} (${s.year}): ${s.grossTonnage} • ${s.guests} guests`
        ),
        data.edgeClass.evolutionNote,
      ],
    },
    avalon: {
      name: data.edgeClass.whoShouldChooseTitle,
      reasons: [
        ...(data.edgeClass.whoShouldChoosePoints || []),
        data.edgeClass.drawback,
      ],
    },
  };

  // 2. Solstice Class AlternatingRiverShowcase
  const solsticeAlternatingData = [
    {
      name: "The Lawn Club & Real Grass",
      description:
        "The Lawn Club is one of the defining features of Solstice Class. It provides a real-grass outdoor area where guests can relax, enjoy the sea views, and spend time outdoors. This is a particularly appealing feature for travelers who enjoy open-air environments rather than spending most of their time in indoor entertainment venues.",
      image: SolsticeLawnGrassImg,
      bestFor: "Travelers who love outdoor greenery, lawn games, and unhurried sea breezes.",
      highlights: [
        "Half-acre of genuine green grass on the top deck",
        "Lawn Club Grill and Sunset Bar outdoor gathering spots",
        "Relaxed picnics, concerts, and sea-view lounging",
      ],
    },
    {
      name: "Traditional Balconies & Glass Architecture",
      description:
        "Solstice Class ships emphasize outdoor decks, pool areas, and spaces where guests can enjoy the ocean while sailing between destinations. Known for extensive glasswork and open sightlines, they offer conventional step-out balconies with true exterior privacy.",
      image: SolsticeBalconyImg,
      bestFor: "Cruisers who want classic step-out veranda balconies and bright, open public spaces.",
      highlights: [
        "Conventional step-out private balconies across all veranda categories",
        "Soaring, light-filled Solarium adults-only indoor pool complex",
        "Balanced layout with grand atrium and two-story dining venues",
      ],
    },
  ];

  // 2. Solstice Class Fleet & Persona Grid -> VsComparisonGrid
  const solsticeVsData = {
    title: "Celebrity Solstice Class: Fleet Lineup & Travel Match",
    rhine: {
      title: data.solsticeClass.shipsTitle,
      subtitle: data.solsticeClass.shipsSubtitle,
      features: [
        ...(data.solsticeClass.ships || []).map(
          (s) => `${s.name} (${s.year}): ${s.grossTonnage} • ${s.guests} guests`
        ),
        data.solsticeClass.shipNote,
      ],
    },
    danube: {
      title: data.solsticeClass.whoShouldChooseTitle,
      subtitle: "IDEAL TRAVEL PROFILE",
      features: [
        ...(data.solsticeClass.whoShouldChoosePoints || []),
        data.solsticeClass.drawback,
      ],
    },
  };

  // 3. Millennium Class cards for CardGrid
  const millenniumGridCards = (data.millenniumClass.cards || []).map((c, idx) => {
    const iconNames = ["Compass", "Anchor", "Utensils", "MapPin"];
    return {
      ...c,
      icon: iconNames[idx % iconNames.length],
    };
  });

  // 3. Millennium Fleet & Decision Box -> BoutiqueVsResortFaceoff
  const millenniumFaceoffData = {
    title: "Celebrity Millennium Class: Fleet & Decision Match",
    subtitle: "CLASSIC MARITIME SCALING & DESTINATION IMMERSION",
    boutique: {
      title: data.millenniumClass.shipsTitle,
      subtitle: "FLEET SPECIFICATIONS",
      features: [
        ...(data.millenniumClass.ships || []).map(
          (s) => `${s.name} (${s.year}): ${s.grossTonnage} • ${s.guests} guests`
        ),
        data.millenniumClass.shipNote,
      ],
    },
    resort: {
      title: data.millenniumClass.whoShouldChooseTitle,
      subtitle: "IDEAL TRAVEL MATCH",
      features: [
        ...(data.millenniumClass.whoShouldChoosePoints || []),
        data.millenniumClass.drawback,
      ],
    },
  };

  // 4. Three Design Pillars Editorial -> BrandPillarsShowcase
  const designPillarsData = {
    title: "Three Design Pillars Compared",
    subtitle: data.designComparison.intro,
    pillars: [
      {
        icon: "ship",
        title: "Ship Size and Overall Layout",
        description: `${data.designComparison.dimensions[0]?.details} ${data.designComparison.dimensions[0]?.note}`,
      },
      {
        icon: "window",
        title: "Design and Architecture",
        description: data.designComparison.dimensions[1]?.details,
      },
      {
        icon: "compass",
        title: "Outdoor Spaces",
        description: data.designComparison.dimensions[2]?.details,
      },
    ],
  };

  // 5. Staterooms mapped for InteractiveCabinComparison
  const interactiveCabinsData = {
    title: data.staterooms.title,
    subtitle: data.staterooms.subtitle,
    cabins: [
      {
        id: "edge-infinite",
        name: "Edge Class: Infinite Veranda",
        bestFor:
          "Travelers who want contemporary cabin design and seamless indoor-outdoor boundary reduction.",
        description: `${data.staterooms.classes[0]?.overview || ""} ${
          data.staterooms.classes[0]?.verdict || ""
        }`,
        features: [
          "Floor-to-ceiling glass window lowers at touch of a button",
          "Adds ~23% more interior living space to the cabin",
          "Modern high-tech touchscreen climate and lighting controls",
          "Distinctive Edge Series suite categories (Iconic Suites, Edge Villas)",
        ],
      },
      {
        id: "solstice-balcony",
        name: "Solstice Class: Traditional Balcony",
        bestFor:
          "Travelers who want a traditional step-out balcony and a familiar cruise-cabin layout.",
        description: `${data.staterooms.classes[1]?.overview || ""} ${
          data.staterooms.classes[1]?.verdict || ""
        }`,
        features: [
          "True private step-out exterior balcony with two chairs and table",
          "Conventional cabin layout familiar to seasoned cruisers",
          "Generous suite selections including Celebrity and Sky Suites",
          "AquaClass staterooms with unlimited Persian Garden thermal suite access",
        ],
      },
      {
        id: "millennium-stateroom",
        name: "Millennium Class: Refurbished Stateroom",
        bestFor:
          "Guests seeking an intimate ship with updated modern bedding and approachable fares.",
        description: `${data.staterooms.classes[2]?.overview || ""} ${
          data.staterooms.classes[2]?.verdict || ""
        }`,
        features: [
          "Fully modernized during the fleetwide Celebrity Revolution program",
          "Cashmere Collection bedding and updated contemporary bathrooms",
          "Approachable entry pricing for premium ocean cruising",
          "Familiar nautical dimensions with convenient elevator proximity",
        ],
      },
    ],
  };

  const interactiveCabinImages = [
    StateroomInfiniteVerandaImg,
    StateroomSolsticeBalconyImg,
    StateroomMillenniumRefurbishedImg,
  ];

  // 6. Dining images for DynamicCulinaryShowcase
  const diningImages = [
    DiningEdgeSpecialtyImg,
    DiningSolsticeMDRImg,
    DiningMillenniumRestaurantImg,
    DiningCasualQuickServiceImg,
  ];

  // 7. Entertainment items for AccordionFlexGrid
  const entertainmentAccordionItems = (data.entertainment.items || []).map(
    (item, idx) => {
      const images = [
        EntertainmentTheatreImg,
        SolsticeFjordImg,
        MillenniumVeniceImg,
      ];
      return {
        ...item,
        image: images[idx % images.length],
      };
    }
  );

  // 7. Entertainment Preference Table -> ArcticGlanceFacts
  const entertainmentGlanceFacts = [
    {
      label: "Entertainment Preference",
      value: "Contemporary Design-Led",
      description:
        "Edge Class: The Theatre with 4 stage areas, Eden interactive performances, and The Club.",
    },
    {
      label: "Entertainment Preference",
      value: "Traditional Theater & Lawn",
      description:
        "Solstice Class: Broadway-style revues in grand theaters, live music, and open-air lawn concerts.",
    },
    {
      label: "Entertainment Preference",
      value: "Classic Ship Atmosphere",
      description:
        "Millennium Class: Celebrity Theater, Rendezvous Lounge ensembles, and cozy poolside screenings.",
    },
    {
      label: "Entertainment Preference",
      value: "Specific Shows & Venues",
      description:
        "Check individual vessel: Guest performers, production schedules, and special venues vary by sailing.",
    },
  ];

  // 8, 9, 10. Travel Styles for TravelerProfileTabs
  const travelerProfilesData = [
    {
      name: "Best for Couples",
      tagline: "ROMANCE & CONTEMPORARY VIBE",
      image: EdgeBeyondImg,
      recommendation: "Edge Class or Solstice Class",
      reason: data.travelerStyles.items[0]?.description,
      whyFits: data.travelerStyles.items[0]?.highlights,
    },
    {
      name: "Best for Families",
      tagline: "CAMP AT SEA & OUTDOOR SPACE",
      image: SilhouetteOpenDecksImg,
      recommendation: "Solstice Class or Edge Class",
      reason: data.travelerStyles.items[1]?.description,
      whyFits: data.travelerStyles.items[1]?.highlights,
    },
    {
      name: "Best for First-Time Cruisers",
      tagline: "BALANCED LUXURY & ENTRY CRUISING",
      image: MillenniumVeniceImg,
      recommendation: "Edge Class or Solstice Class",
      reason: data.travelerStyles.items[2]?.description,
      whyFits: data.travelerStyles.items[2]?.highlights,
    },
  ];

  // 11. Destinations for CinematicDestinations
  const destinationItems = [
    {
      title: data.destinations.items[0]?.title || "Alaska",
      description: data.destinations.items[0]?.description,
      features: data.destinations.items[0]?.features,
      image: DestAlaskaEdgeImg,
    },
    {
      title: data.destinations.items[1]?.title || "Europe & Mediterranean",
      description: data.destinations.items[1]?.description,
      features: data.destinations.items[1]?.features,
      image: DestEuropeNorwayImg,
    },
    {
      title: data.destinations.items[2]?.title || "The Caribbean & Bahamas",
      description: data.destinations.items[2]?.description,
      features: data.destinations.items[2]?.features,
      image: DestCaribbeanBahamasImg,
    },
    {
      title:
        data.destinations.items[3]?.title ||
        "Longer Voyages & Destination-Focused Travel",
      description: data.destinations.items[3]?.description,
      features: data.destinations.items[3]?.features,
      image: DestMillenniumIcyStraitImg,
    },
  ];

  // 12. Section 12 Upgrade Value mapped for ValueBreakdownSplit
  const upgradeIncludedItems = (data.upgradeValue.reasonsToUpgrade || []).map(
    (reason, idx) => {
      const titles = [
        "The Magic Carpet",
        "Infinite Veranda Architecture",
        "Contemporary Public Spaces",
        "The Grand Plaza & Eden",
        "Newer Design Concepts & Venues",
        "Distinctive Premier Suites",
      ];
      return {
        title: titles[idx] || `Signature Feature 0${idx + 1}`,
        description: reason,
      };
    }
  );

  const upgradeExtrasItems = [
    {
      title: "Itinerary & Value Priority",
      description: data.upgradeValue.perspectiveText,
    },
    {
      title: "Total Vacation Cost Analysis",
      description: data.upgradeValue.fareComparisonAdvice,
    },
    {
      title: "Companion Value Review",
      description:
        "Read our comprehensive companion guide: Is Celebrity Cruises Worth the Money? to compare complete cruise-only and All Included fare packages.",
    },
  ];

  // 13. Pros and Cons for ThreeColumnGrid
  const prosConsThreeColumnItems = (data.prosAndCons.cards || []).map(
    (card, idx) => {
      const images = [
        ProsConsEdgeImg,
        ProsConsSolsticeImg,
        ProsConsMillenniumImg,
      ];
      const leadText =
        idx === 0
          ? "Contemporary design, Magic Carpet, and Infinite Verandas."
          : idx === 1
          ? "Real grass Lawn Club, open decks, and classic step-out balconies."
          : "Intimate scaling, destination access, and classic maritime elegance.";

      return {
        title: card.classType,
        category: card.subtitle,
        image: images[idx % images.length],
        lead: leadText,
        description: leadText,
        facets: [
          {
            label: "PROS",
            items: card.pros || [],
            text: (card.pros || []).join("; "),
          },
          {
            label: "CONS",
            items: card.cons || [],
            text: (card.cons || []).join("; "),
          },
        ],
      };
    }
  );


  // Conclusion Section paragraphs
  const conclusionSections = [
    {
      heading: data.finalVerdict.title,
      paragraphs: [
        data.finalVerdict.intro,
        "Best for modern design: Edge Class.",
        "Best for outdoor relaxation and the Lawn Club: Solstice Class.",
        "Best for a smaller-ship preference: Millennium Class.",
        "Best overall choice: The individual ship and itinerary that best match your vacation priorities.",
        data.finalVerdict.closingAdvice,
        data.finalVerdict.calloutText,
      ],
    },
  ];

  // FAQ Accordion items
  const faqAccordionData = {
    title: data.faqs.title,
    subtitle: data.faqs.subtitle,
    questions: (data.faqs.items || []).map((item) => ({
      question: item.q,
      answer: item.a,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{data.seo.metaTitle}</title>
        <meta name="description" content={data.seo.metaDescription} />
        <link rel="canonical" href={data.seo.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      <Nav />

      {/* Main Page Layout */}
      <div className="min-h-screen bg-white">
 

        {/* Section 0: Comparison Hero */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            description={data.hero.description}
            backgroundImage={HeroShipClassesImg}
            byline={true}
    
            primaryCtaText="Compare Ship Classes"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Speak With Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

        {/* Section 1: Quick Answer (ComparisonTable) */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable data={quickAnswerTableData} />
        </div>

        {/* Section 2: 1. What Is Celebrity Edge Class? (EditorialFeatureShowcase) */}
        <div id="edge-class">
          <EditorialFeatureShowcase
            title={data.edgeClass.title}
            subtitle={data.edgeClass.subtitle}
            image={EdgeArchitectureImg}
            features={data.edgeClass.features}
            bgClass="bg-white"
          />

          {/* Edge Class Lineup & Who Should Choose (ChecklistCards) */}
          <ChecklistCards data={edgeLineupAndChecklistData} />
        </div>

        {/* Section 3: 2. What Is Celebrity Solstice Class? (AlternatingRiverShowcase) */}
        <div id="solstice-class">
          <AlternatingRiverShowcase
            title={data.solsticeClass.title}
            description={data.solsticeClass.description}
            rivers={solsticeAlternatingData}
          />

          {/* Solstice Class Fleet & Persona Grid (VsComparisonGrid) */}
          <VsComparisonGrid data={solsticeVsData} />
        </div>

        {/* Section 4: 3. What Is Celebrity Millennium Class? (CardGrid) */}
        <div id="millennium-class">
          <CardGrid
            title={data.millenniumClass.title}
            subtitle={data.millenniumClass.subtitle}
            cards={millenniumGridCards}
            columns={4}
            stagger={false}
          />

          {/* Millennium Fleet & Decision Box (BoutiqueVsResortFaceoff) */}
          <BoutiqueVsResortFaceoff
            data={millenniumFaceoffData}
            boutiqueImg={MillenniumFleetVeniceImg}
            resortImg={MillenniumDecisionPoolImg}
          />
        </div>

        {/* Section 5: 4. Size, Design, and Atmosphere (ContainedShowdown) */}
        <div id="size-design-atmosphere">
          <ContainedShowdown
            title={data.designComparison.title}
            brandA={{
              name: data.designComparison.brandA.name,
              image: EdgeModernDesignImg,
              features: data.designComparison.brandA.highlights,
            }}
            brandB={{
              name: data.designComparison.brandB.name,
              image: SilhouetteOpenDecksImg,
              features: data.designComparison.brandB.highlights,
            }}
          />

          {/* Three Design Pillars Editorial (BrandPillarsShowcase) */}
          <BrandPillarsShowcase data={designPillarsData} />
        </div>

        {/* Interlude CTA */}
        <CenterCTA
          title={data.ctaInterlude.title}
          description={data.ctaInterlude.description}
          buttonText={data.ctaInterlude.primaryButtonText}
          buttonLink={data.ctaInterlude.primaryButtonLink}
          image={ExpertGuidanceLoungeImg}
          theme="dark"
        />

        {/* Section 6: 5. Which Class Has the Best Staterooms? (InteractiveCabinComparison) */}
        <div id="staterooms">
          <InteractiveCabinComparison
            data={interactiveCabinsData}
            images={interactiveCabinImages}
          />

          {/* Stateroom Comparison Matrix Table (Table UI Primitives) */}
          <section className="w-full py-20 bg-white">
            <div className="max-w-[1100px] mx-auto px-6">
              <div className="text-center mb-14">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4">
                  ACCOMMODATION ARCHITECTURE MATRIX
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950">
                  Stateroom Comparison: Edge vs. Solstice vs. Millennium
                </h2>
                <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6" />
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                <Table className="w-full text-left border-collapse">
                  <TableHeader>
                    <TableRow className="bg-navy-950 hover:bg-navy-950 border-none">
                      {(data.staterooms.table.columns || []).map((header, idx) => (
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
                    {(data.staterooms.table.rows || []).map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                      >
                        <TableCell className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm align-top">
                          {row.feature}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-600 align-top">
                          {row.col1}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-600 align-top">
                          {row.col2}
                        </TableCell>
                        <TableCell className="px-6 py-5 font-sans text-sm text-slate-600 align-top">
                          {row.col3}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

        </div>

        {/* Section 7: 6. Which Class Has the Best Dining? (DynamicCulinaryShowcase) */}
        <div id="dining">
          <DynamicCulinaryShowcase
            title={data.dining.title}
            subtitle={data.dining.subtitle}
            items={data.dining.classes}
            images={diningImages}
          />

          {/* Dining Comparison Tips & Link (ExpertAuthorityChecklist) */}
          <div className="relative">
            <ExpertAuthorityChecklist
              title={data.dining.comparisonTipsTitle}
              subtitle={data.dining.comparisonTipsText}
              points={data.dining.checklist}
            />

          </div>
        </div>

        {/* Section 8: 7. Which Class Has the Best Entertainment? (AccordionFlexGrid) */}
        <div id="entertainment">
          <AccordionFlexGrid
            title={data.entertainment.title}
            subtitle={data.entertainment.subtitle}
            items={entertainmentAccordionItems}
          />

          {/* Entertainment Preference Table (ArcticGlanceFacts) */}
          <ArcticGlanceFacts
            title="Entertainment Preference: Which Ship Class Should You Choose?"
            items={entertainmentGlanceFacts}
          />
        </div>

        {/* Section 8: Best for Couples, Families, First-Timers (TravelerProfileTabs) */}
        <div id="travel-styles">
          <TravelerProfileTabs
            title={data.travelerStyles.title}
            subtitle={data.travelerStyles.subtitle}
            profiles={travelerProfilesData}
          />
        </div>

        {/* Section 10: 11. Which Class Is Best for Alaska, Europe, Caribbean? (CinematicDestinations) */}
        <div id="destinations">
          <CinematicDestinations
            title={data.destinations.title}
            subtitle={data.destinations.subtitle}
            items={destinationItems}
          />
        </div>

        {/* Section 11: 12. Is Edge Class Worth the Upgrade? (ValueBreakdownSplit) */}
        <div id="upgrade-value">
          <ValueBreakdownSplit
            title={data.upgradeValue.title}
            subtitle={data.upgradeValue.subtitle}
            includedTitle={data.upgradeValue.reasonsToUpgradeTitle}
            extrasTitle={data.upgradeValue.perspectiveTitle}
            included={upgradeIncludedItems}
            extras={upgradeExtrasItems}
            image={XcelInnovationImg}
          />


        </div>

        {/* Section 12: 13. Pros and Cons: Edge vs Solstice vs Millennium (ThreeColumnGrid) */}
        <div id="pros-and-cons">
          <ThreeColumnGrid
            title={data.prosAndCons.title}
            subtitle={data.prosAndCons.subtitle}
            items={prosConsThreeColumnItems}
          />
        </div>

        {/* Section 13: 14. How to Choose the Right Celebrity Ship Class (StepByStepGuide) */}
        <div id="how-to-choose">
          <StepByStepGuide
            title={data.decisionFramework.title}
            subtitle="A 6-STEP DECISION FRAMEWORK"
            steps={data.decisionFramework.steps}
            layout="grid"
            columns={3}
          />
        </div>

        {/* Section 14: 15. Why Work With a Luxury Cruise Travel Advisor? (ExpertCredentials) */}
        <div id="advisor">
          <ExpertCredentials
            title={data.advisorCredentials.title}
            name={data.advisorCredentials.bio.name}
            authoritySubtitle={data.advisorCredentials.bio.title}
            authorityBoxTitle="VIP CRUISE ADVISORY & EXPERTISE"
            image={AboutAngelaImg}
            credentials={data.advisorCredentials.services}
            bio={data.advisorCredentials.intro}
            ctaText="Schedule Your Celebrity Consultation"
            ctaLink="/contact"
          />
        </div>

        {/* Section 15: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>

        {/* Section 17: Final CTA (CenterCTA) */}
        <CenterCTA
          title={data.ctaFinal.title}
          description={data.ctaFinal.description}
          buttonText={data.ctaFinal.primaryButtonText}
          buttonLink={data.ctaFinal.primaryButtonLink}
          image={HeroShipClassesImg}
          theme="dark"
        />
      </div>
    </>
  );
}
