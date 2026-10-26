import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import data from "./data.json";

// UI Components - Every section has a distinct component from src/components/ui/
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import CenterCTA from "../../../components/ui/CenterCTA";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import TravelerProfileSelector from "../../../components/ui/TravelerProfileSelector";
import CulinaryExcellence from "../../../components/ui/CulinaryExcellence";
import CardGrid from "../../../components/ui/CardGrid";
import SuiteAndInclusionsFaceoff from "../../../components/ui/SuiteAndInclusionsFaceoff";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import QuickCompareCards from "../../../components/ui/QuickCompareCards";
import ValueBreakdownSplit from "../../../components/ui/ValueBreakdownSplit";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import CategoryAwards from "../../../components/ui/CategoryAwards";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import TrustSection from "../../../components/ui/TrustSection";

// Distinct images for each section from dedicated ScenicVsAvalonWaterways assets folder
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// 1. Hero
import scenicShipRhine from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-ship-rhine-valley.webp";

// 2. The Biggest Difference
import avalonExteriorBudapest from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-exterior-budapest.webp";
import scenicSpaceShipDurnstein from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-space-ship-durnstein.webp";

// 3. Who Is Each Line Best For?
import scenicAzureDouro from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-azure-douro.webp";
import avalonExpressionExterior from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-expression-exterior.webp";

// 4. Inline CTA 1
import scenicDanubeBudapest from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-danube-budapest.webp";

// 5. Cabins Comparison
import scenicBalconySuite from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-balcony-suite.webp";
import avalonPanoramaSuite from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-panorama-suite.png";

// 6. Balconies Comparison
import scenicSunLoungeSuite from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-sun-lounge-suite.webp";

// 7. Traveler Profiles (7 unique images)
import avalonAmsterdam from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-amsterdam-tulips.webp";
import scenicCouplesSunset from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-couples-sunset.webp";
import scenicGourmetSteak from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-gourmet-steak.webp";
import avalonWine from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-seine-itin-calvados-normandy.webp";
import scenicEbikes from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-ebikes-durnstein.webp";
import scenicFamilyPool from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-family-pool.webp";
import avalonLucerne from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-destination-lucerne.webp";

// 8. Dining Comparison
import scenicCrystalDining from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-crystal-dining.webp";
import avalonDining from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-dining.png";

// 9. Inline CTA 2
import avalonGhent from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-excursion-ghent.webp";

// 10. Inclusions & Value Formula
import scenicButlerChampagne from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-butler-champagne.webp";
import avalonArtistryExterior from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-artistry-exterior.webp";

// 11. Ships Comparison
import scenicRhineLoop from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-rhine-loop.webp";
import avalonEnvision from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-envision-exterior.webp";

// 12. Service Comparison (No Images - Uses VsComparisonGrid)

// 13. Price & Value Comparison
import avalonProvenceLavender from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-pricing-value.webp";

// 14. Inline CTA 3
import scenicBordeauxPont from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-bordeaux-pont.webp";

// 15. Final Verdict & Planning
import scenicAmberDurnstein from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/scenic-amber-durnstein.webp";
import avalonAntwerpSunset from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-antwerp-sunset.webp";
import avalonSunriseFinalCta from "../../../assets/ScenicRiverCruises/ScenicVsAvalonWaterways/avalon-sunrise-final-cta.webp";

export default function ScenicVsAvalonWaterways() {
  // JSON-LD structured schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        name: data.schema.organization.name,
        url: data.schema.organization.url,
        logo: data.schema.organization.logo
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        name: data.schema.travelAgency.name,
        url: data.schema.travelAgency.url,
        description: data.schema.travelAgency.description
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#person",
        name: data.schema.person.name,
        jobTitle: data.schema.person.jobTitle,
        description: data.schema.person.description
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#webpage",
        name: data.schema.webPage.name,
        url: data.schema.webPage.url,
        description: data.schema.webPage.description
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#article",
        headline: data.schema.article.headline,
        description: data.schema.article.description,
        author: {
          "@type": "Person",
          name: data.schema.article.author
        },
        publisher: {
          "@type": "Organization",
          name: data.schema.article.publisher
        },
        inLanguage: "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#breadcrumb",
        itemListElement: data.schema.breadcrumbs.map((b) => ({
          "@type": "ListItem",
          position: b.position,
          name: b.name,
          item: b.item
        }))
      },
      {
        "@type": "ItemList",
        "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#itemlist",
        name: "Scenic vs Avalon Waterways  What This Guide Covers",
        itemListElement: data.schema.coveredTopics.map((topic, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: topic
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/scenic-river-cruises/scenic-vs-avalon/#faq",
        mainEntity: data.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  // 1. Profile items formatted with 7 unique, non-repeating images matching each traveler persona
  const profileImages = [
    avalonAmsterdam,      // First-Time Cruisers: Amsterdam canals & tulips
    scenicCouplesSunset,   // Couples: Sunset champagne with butler on sun deck
    scenicGourmetSteak,    // Food Lovers: Gourmet chef plating
    avalonWine,            // Wine Enthusiasts: Burgundy vineyard countryside
    scenicEbikes,          // Active Travelers: Cycling e-bikes through Dürnstein
    scenicFamilyPool,      // Families: Guests enjoying the vitality pool on deck
    avalonLucerne          // Solo Travelers: Lucerne Chapel Bridge
  ];

  const formattedProfiles = data.travelerProfiles.profiles.map((p, idx) => ({
    name: p.name,
    tagline: p.title,
    image: profileImages[idx] || avalonAmsterdam,
    quote: p.lead,
    recommendation: `${p.scenicHeader.replace(":", "")} vs ${p.avalonHeader.replace(":", "")}`,
    reason: `${p.scenicPoint}  ${p.avalonPoint}`,
    whyFits: [
      `Scenic: ${p.scenicPoint}`,
      `Avalon: ${p.avalonPoint}`,
      `Key Takeaway: ${p.verdict}`
    ]
  }));

  // 2. Culinary venues formatted for CulinaryExcellence
  const culinaryVenues = [
    {
      name: data.dining.scenic.title,
      cuisine: "Multi-Course Haute Cuisine & Sommelier Wine",
      description: `${data.dining.scenic.text} Emphasis is on: ${data.dining.scenic.points.join(", ")}. ${data.dining.verdict.scenicEdge}`,
      signatureDish: "Table La Rive 6-Course Degustation",
      atmosphere: "Refined White-Glove Luxury"
    },
    {
      name: data.dining.avalon.title,
      cuisine: "Avalon Fresh & Regional Gastronomy",
      description: `${data.dining.avalon.text} Emphasis is on: ${data.dining.avalon.points.join(", ")}. ${data.dining.verdict.avalonEdge}`,
      signatureDish: "Locally Sourced Seasonal Chef Specials",
      atmosphere: "Panoramic & Relaxed Modern Vibe"
    }
  ];

  // 3. Inclusions data for SuiteAndInclusionsFaceoff
  const suiteAndInclusionsFaceoffData = {
    subtitle: "ALL-INCLUSIVE LUXURY VS FLEXIBLE VALUE FACE-OFF",
    title: data.whatsIncluded.title,
    scenic: {
      title: data.whatsIncluded.scenicTitle,
      subtitle: "Truly All-Inclusive 5-Star Luxury",
      inclusions: [
        {
          name: "All Meals Across Multiple Venues",
          desc: "Full board dining across casual cafes and fine dining restaurants with flexible options."
        },
        {
          name: "Unlimited Selected Premium Beverages",
          desc: "Complimentary fine wines, premium spirits, beers, cocktails, and barista coffees all day long."
        },
        {
          name: "Scenic Freechoice & Enrich Excursions",
          desc: "Daily curated shore excursions plus exclusive private evening events, palace concerts, and castle dinners."
        },
        {
          name: "Butler Service on Eligible Suites",
          desc: "Personalized butler service offering beverage deliveries, shoe shine, and in-suite arrangements."
        },
        {
          name: "Airport Transfers, Wi-Fi & All Gratuities",
          desc: "No wallet needed onboard: airport transfers, high-speed Wi-Fi, and all onboard tipping are covered."
        },
        {
          name: "Zero Out-of-Pocket Philosophy",
          desc: data.whatsIncluded.expertNote
        }
      ]
    },
    avalon: {
      title: data.whatsIncluded.avalonTitle,
      subtitle: "Spacious Panorama Comfort & Tailored Choices",
      inclusions: [
        {
          name: "Spacious Staterooms & Panorama Suites",
          desc: "Award-winning wall-to-wall panoramic windows with beds facing the stunning river views."
        },
        {
          name: "Daily Included Shore Excursions",
          desc: "Classic guided sightseeing in every port of call with local certified guides and audio systems."
        },
        {
          name: "Complimentary Regional Wine & Beer",
          desc: "Hand-selected regional wines, local beers, and soft drinks served with lunch and dinner."
        },
        {
          name: "High-Speed Wi-Fi & Coffee Stations",
          desc: "Complimentary shipwide Wi-Fi and 24-hour self-serve specialty espresso and tea stations."
        },
        {
          name: "Flexible Premium Cruise Model",
          desc: data.whatsIncluded.avalonText
        },
        {
          name: "Total Value Breakdown Formula",
          desc: `${data.whatsIncluded.totalValueFormula.lead} ${data.whatsIncluded.totalValueFormula.pills.join(" + ")}`
        }
      ]
    }
  };

  // 4. Ships data for ShipPhilosophyFaceoff
  const shipsFaceoffData = {
    title: data.ships.title,
    regent: {
      badge: "SCENIC SPACE-SHIPS",
      title: data.ships.scenic.title,
      description: `${data.ships.scenic.text} ${data.ships.winner.scenicEdge}`,
      features: data.ships.scenic.points
    },
    viking: {
      badge: "AVALON PANORAMA FLEET",
      title: data.ships.avalon.title,
      description: `${data.ships.avalon.text} ${data.ships.winner.avalonEdge}`,
      features: data.ships.avalon.points
    }
  };

  // 5. Service data for QuickCompareCards (No Images, Zero external dependencies)
  const serviceScenicCard = {
    style: "SCENIC LUXURY SERVICE",
    name: data.service.scenic.title,
    description: data.service.scenic.text
  };

  const serviceAvalonCard = {
    style: "AVALON WATERWAYS SERVICE",
    name: data.service.avalon.title,
    description: data.service.avalon.text
  };

  // 6. Price & Value data for ValueBreakdownSplit
  const priceIncluded = [
    {
      title: "All-Inclusive Luxury Pricing",
      description: data.priceAndValue.scenic.formula
    },
    {
      title: "Value Proposition",
      description: data.priceAndValue.scenic.summary
    }
  ];

  const priceExtras = [
    {
      title: "Flexible Premium Pricing",
      description: data.priceAndValue.avalon.formula
    },
    {
      title: "Value Proposition",
      description: data.priceAndValue.avalon.summary
    }
  ];

  // 7. Category Awards for Direct Showdowns
  const categoryShowdowns = [
    {
      category: "01. WHICH ONE IS MORE LUXURY?",
      winner: data.whichIsMoreLuxury.winner.title,
      description: `${data.whichIsMoreLuxury.scenic.lead} ${data.whichIsMoreLuxury.scenic.points.join(", ")}. ${data.whichIsMoreLuxury.avalon.lead} ${data.whichIsMoreLuxury.winner.text}`
    },
    {
      category: "02. WHICH HAS BETTER CABINS?",
      winner: "Luxury: Scenic | Space: Avalon",
      description: `${data.whichHasBetterCabins.lead} ${data.whichHasBetterCabins.scenic.title}: ${data.whichHasBetterCabins.scenic.text} ${data.whichHasBetterCabins.avalon.title}: ${data.whichHasBetterCabins.avalon.text}`
    },
    {
      category: "03. WHICH HAS BETTER ITINERARIES?",
      winner: "Itinerary-Dependent Tie",
      description: `${data.whichHasBetterItineraries.lead} ${data.whichHasBetterItineraries.factors.join(", ")}. ${data.whichHasBetterItineraries.note}`
    }
  ];

  // 8. Final Verdict data for TrustSection
  const trustSections = [
    {
      heading: data.finalVerdict.title,
      paragraphs: [
        data.finalVerdict.intro,
        ...data.finalVerdict.readMore
      ],
      conclusion: "At Trips & Ships Luxury Travel, we'll help you compare the ship, suite, itinerary, and included experiences  not simply the advertised cruise price."
    },
    {
      heading: data.finalVerdict.servicesTitle,
      paragraphs: [
        "Our dedicated luxury river cruise planning services include comprehensive VIP support:"
      ],
      list: data.finalVerdict.planningServices,
      conclusion: "Start Planning with Angela Hughes"
    },
    {
      heading: "Ready to Reserve Your River Cruise?",
      paragraphs: [
        "Whether you choose Scenic's all-inclusive 5-star Space-Ships or Avalon's wall-to-wall Panorama Suites, our team ensures you receive the finest available staterooms, perks, and promotions.",
        "Contact Angela Hughes to compare dates, suite categories, and special offers for your European river cruise."
      ],
      list: [
        "Direct cruise line executive relationships",
        "Preferred suite category availability & promotions",
        "Custom pre- and post-cruise luxury arrangements"
      ]
    }
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

      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={`${data.hero.description} ${data.hero.readMore.join(" ")}`}
        backgroundImage={scenicShipRhine}
        primaryCtaText={data.hero.primaryCta.text}
        primaryCtaLink={data.hero.primaryCta.link}
        secondaryCtaText={data.hero.secondaryCta.text}
        secondaryCtaLink={data.hero.secondaryCta.link}
      />

      {/* ── 2. QUICK ANSWER COMPARISON TABLE ─────────────────────── */}
      <div id="quick-answer">
        <ComparisonTable data={data.quickAnswer} />
      </div>

      {/* ── 3. THE BIGGEST DIFFERENCE ────────────────────────────── */}
      <div id="biggest-difference">
        <AsymmetricStoryIntro
          eyebrow={data.biggestDifference.eyebrow}
          heading={data.biggestDifference.heading}
          paragraphs={data.biggestDifference.paragraphs}
          highlights={data.biggestDifference.highlights}
          image1={avalonExteriorBudapest}
          image2={scenicSpaceShipDurnstein}
          image1Placeholder="AVALON WATERWAYS DANUBE SAILING"
          image2Placeholder="SCENIC SPACE-SHIP DURNSTEIN AUSTRIA"
          ctaText={data.biggestDifference.ctaText}
          ctaLink={data.biggestDifference.ctaLink}
        />
      </div>

      {/* ── 4. WHO IS EACH LINE BEST FOR? ─────────────────────────── */}
      <div id="who-is-it-for">
        <DualPhilosophyShowcase
          data={data.whoIsItFor}
          imageSailing={scenicAzureDouro}
          imageAllSuite={avalonExpressionExterior}
        />
      </div>

      {/* ── 5. INLINE CTA 1 ────────────────────────────────────────── */}
      <CenterCTA
        title={data.cta1.title}
        description={data.cta1.description}
        buttonText={data.cta1.buttonText}
        buttonLink={data.cta1.buttonLink}
        image={scenicDanubeBudapest}
        theme="dark"
      />

      {/* ── 6. CABINS COMPARISON ──────────────────────────────────── */}
      <div id="cabins">
        <CabinFeatureGrid
          data={data.cabins}
          image1={scenicBalconySuite}
          image2={avalonPanoramaSuite}
        />
      </div>

      {/* ── 7. BALCONIES COMPARISON ───────────────────────────────── */}
      <div id="balconies">
        <EditorialFeatureShowcase
          title={data.balconies.title}
          subtitle={data.balconies.subtitle}
          features={data.balconies.features}
          image={scenicSunLoungeSuite}
          bgClass="bg-ice-50/60"
        />
      </div>

      {/* ── 8. TARGET TRAVELER PROFILES TABS ───────────────────────── */}
      <div id="traveler-profiles">
        <TravelerProfileSelector
          title={data.travelerProfiles.title}
          subtitle={data.travelerProfiles.subtitle}
          profiles={formattedProfiles}
        />
      </div>

      {/* ── 9. DINING COMPARISON ──────────────────────────────────── */}
      <div id="dining">
        <CulinaryExcellence
          title={data.dining.title}
          subtitle={data.dining.lead}
          venues={culinaryVenues}
          images={[scenicCrystalDining, avalonDining]}
        />
      </div>

      {/* ── 10. INLINE CTA 2 ───────────────────────────────────────── */}
      <CenterCTA
        title={data.cta2.title}
        description={data.cta2.description}
        buttonText={data.cta2.buttonText}
        buttonLink={data.cta2.buttonLink}
        image={avalonGhent}
        theme="dark"
      />

      {/* ── 11. EXCURSIONS COMPARISON ──────────────────────────────── */}
      <div id="excursions">
        <CardGrid
          title={data.excursions.title}
          subtitle={data.excursions.intro}
          cards={data.excursions.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 12. WHAT IS INCLUDED & TOTAL VALUE FORMULA ─────────────── */}
      <div id="whats-included">
        <SuiteAndInclusionsFaceoff
          data={suiteAndInclusionsFaceoffData}
          imageAvalon={avalonArtistryExterior}
          imageScenic={scenicButlerChampagne}
        />
      </div>

      {/* ── 13. SHIPS COMPARISON ──────────────────────────────────── */}
      <div id="ships">
        <ShipPhilosophyFaceoff
          data={shipsFaceoffData}
          regentImage={scenicRhineLoop}
          vikingImage={avalonEnvision}
          regentImageAlt="Scenic Space-Ship Rhine Valley Loop"
          vikingImageAlt="Avalon Panorama-Class Vessel"
        />
      </div>

      {/* ── 14. SERVICE COMPARISON ─────────────────────────────────── */}
      <div id="service" className="py-24 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-6 text-center pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-ts-gold font-bold block mb-3">
            HOSPITALITY & CREW COMPARISON
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 font-bold mb-4">
            {data.service.title}
          </h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {data.service.lead}
          </p>
        </div>

        <div className="pt-16">
          <QuickCompareCards ama={serviceScenicCard} avalon={serviceAvalonCard} />
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-12">
          <div className="bg-navy-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-ts-gold/30 text-center">
            <span className="inline-block px-3 py-1 bg-ts-gold text-navy-950 font-sans text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              {data.service.winner.title}
            </span>
            <p className="font-sans text-slate-200 text-sm md:text-base leading-relaxed">
              {data.service.winner.text}
            </p>
          </div>
        </div>
      </div>

      {/* ── 15. PRICE & VALUE COMPARISON ───────────────────────────── */}
      <div id="price">
        <ValueBreakdownSplit
          title={data.priceAndValue.title}
          subtitle={data.priceAndValue.lead}
          includedTitle={data.priceAndValue.scenic.title}
          extrasTitle={data.priceAndValue.avalon.title}
          included={priceIncluded}
          extras={priceExtras}
          image={avalonProvenceLavender}
        />
      </div>

      {/* ── 16. INLINE CTA 3 ───────────────────────────────────────── */}
      <CenterCTA
        title={data.cta3.title}
        description={data.cta3.description}
        buttonText={data.cta3.buttonText}
        buttonLink={data.cta3.buttonLink}
        image={scenicBordeauxPont}
        theme="dark"
      />

      {/* ── 17. PROS & CONS SECTION ────────────────────────────────── */}
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
          title="Avalon Waterways: Strengths & Considerations"
          bestFor={data.prosAndCons.avalonPros}
          notBestFor={data.prosAndCons.avalonCons}
          prosTitle="Avalon Key Strengths"
          consTitle="Things to Consider"
          type="pros-cons"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ── 18. CATEGORY SHOWDOWNS: LUXURY, CABINS, ITINERARIES ────── */}
      <div id="verdict-categories">
        <CategoryAwards
          title="Direct Head-to-Head Deciders"
          subtitle="KEY COMPARISON SHOWDOWNS"
          categories={categoryShowdowns}
        />
      </div>

      {/* ── 19. WHO SHOULD CHOOSE SCENIC / AVALON ──────────────────── */}
      <div id="who-should-choose">
        <GenericChecklistCards
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
          cards={data.whoShouldChoose.cards}
        />
      </div>

      {/* ── 20. ANGELA HUGHES AUTHORITY BOX ─────────────────────────── */}
      <div id="angela-hughes">
        <ExpertCredentials
          title={data.angelaHughes.role}
          name={data.angelaHughes.name}
          authorName={data.angelaHughes.name}
          image={AboutImage}
          badge={data.angelaHughes.eyebrow}
          credentials={data.angelaHughes.credentials}
          bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury and river cruise travel experiences. She is widely recognized across the travel industry as a leading authority."
          ctaText="Consult Angela Hughes"
          ctaLink="/contact"
        />
      </div>

      {/* ── 21. FREQUENTLY ASKED QUESTIONS ─────────────────────────── */}
      <div id="faq" className="bg-slate-50/60 py-16">
        <FAQAccordion data={data.faq} />
      </div>

      {/* ── 22. FINAL VERDICT & PLANNING SERVICES ───────────────────── */}
      <div id="verdict">
        <TrustSection
          sections={trustSections}
          mainImage={scenicAmberDurnstein}
          secondaryImage={avalonAntwerpSunset}
        />
      </div>

      {/* ── 23. FINAL CALL TO ACTION ──────────────────────────────── */}
      <div id="final-cta">
        <CenterCTA
          title={data.finalCta.title}
          description={data.finalCta.description}
          buttonText={data.finalCta.buttonText}
          buttonLink={data.finalCta.buttonLink}
          image={avalonSunriseFinalCta}
          theme="dark"
        />
      </div>
    </div>
  );
}