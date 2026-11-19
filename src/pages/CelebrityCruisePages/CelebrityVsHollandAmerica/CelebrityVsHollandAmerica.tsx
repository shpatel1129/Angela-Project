import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// UI Components from src/components/ui/ (Strictly unique per section, zero repetition)
import ComparisonHero from "@/components/ui/ComparisonHero";
import MagazineStoryIntro from "@/components/ui/MagazineStoryIntro";
import ComparisonTable from "@/components/ui/ComparisonTable";
import ShipVibeOverview from "@/components/ui/ShipVibeOverview";
import BrandComparisonTable from "@/components/ui/BrandComparisonTable";
import EditorialExcursionShowcase from "@/components/ui/EditorialExcursionShowcase";
import FeatureGrid from "@/components/ui/FeatureGrid";
import CurvilinearGrid from "@/components/ui/CurvilinearGrid";
import DestinationFlipCards from "@/components/ui/DestinationFlipCards";
import CardGrid from "@/components/ui/CardGrid";
import DetailedInclusionsList from "@/components/ui/DetailedInclusionsList";
import AsymmetricStoryIntro from "@/components/ui/AsymmetricStoryIntro";
import TravelerPersonaCards from "@/components/ui/TravelerPersonaCards";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import ProsConsCards from "@/components/ui/ProsConsCards";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import SvsSDestinations from "@/components/ui/SvsSDestinations";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ConclusionSection from "@/components/ui/ConclusionSection";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import CenterCTA from "@/components/ui/CenterCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";

// Page Assets from src/assets/celebritycruises/CelebrityVsHollandAmerica/
import HeroImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-apex-aerial-port-everglades.webp";
import CelebAtmosphereImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-beyond-sunset-bar-st-thomas-panoramic-scenic-view.webp";
import HalAtmosphereImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/hal-ship-eve-deck-views-sky.jpg";
import EdgeFleetImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-edge-australia-sydney-ship-exterior.webp";
import HalFleetImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/holland-america-cruise-ship-luxury-ocean-voyage.jpg";
import CelebDiningImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-flora-seaside-restaurant-panoramic-scenic-view.webp";
import HalDiningImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/hal-destination-inspired-dining.webp";
import AlaskaHeroImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-edge-alaska-endicott-arm-golden-hour-sunset-glow.webp";
import HalDestinationImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/holland-america-norway-fjord-cruise-scenic-sailing.jpg";
import AlaskaDecisionImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/alaska-hubbard-glacier-expedition-cruise-scenery.jpg";
import CelebPricingImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-edge-doubtful-sounds-magic-carpet-panoramic-scenic-view.webp";
import HalPricingImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/hal-cruise-pricing-voyage.jpg";
import ServiceCelebImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-flora-sunset-lounge-breathtaking-coastal-perspective.webp";
import ServiceHalImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/hal-onboard-service-hospitality.jpg";
import DressCelebImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/celebrity-flora-discovery-lounge-bar.webp";
import DressHalImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/hal-dressy-evening-ambiance.jpg";
import CtaImg from "@/assets/celebritycruises/CelebrityVsHollandAmerica/hal-luxury-cruise-golden-gate.jpg";
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";

export default function CelebrityVsHollandAmerica() {
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

      {/* HERO SECTION */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description=""
        backgroundImage={HeroImg}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaLink={data.hero.secondaryCtaLink}
        byline={true}
        updated="2026-09-02"
      />

      {/* INTRO: CORE DIFFERENCE */}
      <MagazineStoryIntro
        heading={data.intro.heading}
        paragraphs={data.intro.paragraphs}
      />

      {/* QUICK COMPARISON TABLE */}
      <ComparisonTable
        data={{
          title: data.quickComparison.title,
          headers: data.quickComparison.headers,
          rows: data.quickComparison.rows,
        }}
      />
      <div className="bg-white px-6 pb-16 text-center">
        <p className="text-slate-600 text-base max-w-4xl mx-auto italic font-sans font-medium">
          {data.quickComparison.verdict}
        </p>
      </div>

      {/* 1. OVERALL ONBOARD ATMOSPHERE */}
      <ShipVibeOverview
        title={data.atmosphere.title}
        subtitle={data.atmosphere.subtitle}
        mainImage={CelebAtmosphereImg}
        sideImages={[CelebAtmosphereImg, HalAtmosphereImg]}
        items={data.atmosphere.features}
      />

      {/* 2. SHIPS AND FLEET EXPERIENCE */}
      <BrandComparisonTable
        title={data.shipsAndFleet.hollandTable.title}
        subtitle={data.shipsAndFleet.subtitle}
        headers={data.shipsAndFleet.hollandTable.headers}
        rows={data.shipsAndFleet.hollandTable.rows}
      />
      <EditorialExcursionShowcase
        title="Fleet Innovation & Architectural Showdown"
        subtitle="Comparing Celebrity's contemporary Edge Series innovation against Holland America's classic maritime fleet."
        items={[
          {
            category: "MODERN ARCHITECTURE",
            title: "Celebrity Edge Series & Modern Fleet",
            description: data.shipsAndFleet.celebrityText,
            image: EdgeFleetImg,
          },
          {
            category: "FLEET VERDICT",
            title: "Which Cruise Line Has Better Ships?",
            description: data.shipsAndFleet.comparisonVerdict,
            image: HalFleetImg,
          },
        ]}
      />

      {/* 3. DINING COMPARISON */}
      <FeatureGrid
        title={data.dining.title}
        subtitle={data.dining.subtitle}
        features={[
          {
            image: CelebDiningImg,
            title: data.dining.features[0].title,
            description: data.dining.features[0].description,
            tags: [
              "Four Complimentary Themed Main Restaurants",
              "Eden, Fine Cut & Le Voyage by Daniel Boulud",
              "Blu Restaurant Exclusive to AquaClass",
              "Luminae Fine Dining Exclusive to The Retreat"
            ],
            highlight: "Contemporary, innovative culinary concepts created with world-class celebrity chef partnerships."
          },
          {
            image: HalDiningImg,
            title: data.dining.features[1].title,
            description: data.dining.features[1].description,
            tags: [
              "Culinary Council Leading Chef Partnerships",
              "Pinnacle Grill Premium Steakhouse & Seafood",
              "Tamarind Pan-Asian & Canaletto Italian Dining",
              "Grand Dutch Cafe & Rudi's Sel de Mer"
            ],
            highlight: "Destination-inspired culinary mastery celebrating authentic regional dishes and fresh seafood."
          }
        ]}
      />
      <div className="bg-ice-50 px-6 pb-16 text-center">
        <p className="text-slate-600 text-base max-w-4xl mx-auto italic font-sans font-medium">
          {data.dining.verdict}
        </p>
      </div>

      {/* 4. ENTERTAINMENT AND NIGHTLIFE */}
      <CurvilinearGrid
        title={data.entertainment.title}
        subtitle={data.entertainment.subtitle}
        paragraphs={[]}
        items={data.entertainment.cards.map((c) => ({
          title: c.title,
          description: c.description,
          icon: c.icon,
          tag: c.badge
        }))}
      />

      {/* 5. DESTINATIONS AND ITINERARIES (INCLUDING ALASKA) */}
      <DestinationFlipCards
        title={data.destinations.title}
        subtitle={`${data.destinations.subtitle} ${data.destinations.summary}`}
        items={[
          {
            title: "Celebrity Global Routes",
            image: AlaskaHeroImg,
            description: "Celebrity offers broad global itineraries with a standout Galapagos small-ship program on Celebrity Flora, stylish Mediterranean and Caribbean sailings, and modern resort-style Alaska journeys.",
            features: [
              "Caribbean & Bahamas",
              "Alaska Glaciers & Inside Passage",
              "Mediterranean & Northern Europe",
              "Galapagos on Celebrity Flora"
            ]
          },
          {
            title: "Holland America Routes",
            image: HalDestinationImg,
            description: "Holland America boasts historic leadership in Alaska, extensive Panama Canal transits, and world-renowned Grand Voyages with longer port stays, deep enrichment, and Yukon land-and-sea cruisetours.",
            features: [
              "Alaska & Glacier Bay Permits",
              "Iconic Grand World Voyages",
              "Full Panama Canal Transits",
              "Yukon Land+Sea Cruisetours"
            ]
          },
          {
            title: "Alaska Itinerary Decision",
            image: AlaskaDecisionImg,
            description: "Choose Celebrity for contemporary Edge Series architecture, resort-style atmosphere, and upscale dining. Choose Holland America if destination programming, Glacier Bay permits, and extended land-and-sea tours are your top priorities.",
            features: [
              "Celebrity: Modern Architecture",
              "Holland America: Glacier Bay Permits",
              "Celebrity: Resort-Style Living",
              "Holland America: Yukon Cruisetours"
            ]
          }
        ]}
      />

      {/* 6. STATEROOMS AND SUITES */}
      <CardGrid
        title={data.accommodations.title}
        subtitle={data.accommodations.subtitle}
        cards={data.accommodations.cards}
        columns={4}
      />
      <div className="bg-slate-50 px-6 pb-16 text-center">
        <p className="text-slate-600 text-base max-w-4xl mx-auto italic font-sans font-medium">
          {data.accommodations.verdict}
        </p>
      </div>

      {/* 7. PRICING AND WHAT'S INCLUDED */}
      <DetailedInclusionsList
        title={data.pricingDetailed.title}
        intro={data.pricingDetailed.intro}
        items={[
          {
            ...data.pricingDetailed.items[0],
            image: CelebPricingImg,
          },
          {
            ...data.pricingDetailed.items[1],
            image: HalPricingImg,
          },
        ]}
      />

      {/* 8. SERVICE AND GUEST EXPERIENCE */}
      <AsymmetricStoryIntro
        eyebrow={data.service.eyebrow}
        heading={data.service.heading}
        paragraphs={data.service.paragraphs}
        image1={ServiceCelebImg}
        image2={ServiceHalImg}
        image1Alt="Celebrity Cruises Attentive Lounge Hospitality"
        image2Alt="Holland America Traditional Onboard Hospitality and Service"
      />

      {/* 9, 10, 11, 12. TRAVELER MATCHMAKER (COUPLES, FAMILIES, SOLO, RETIREES) */}
      <TravelerPersonaCards
        title={data.personas.title}
        subtitle={data.personas.subtitle}
        personas={data.personas.items}
      />

      {/* 13. DRESS CODE AND EVENING ATMOSPHERE */}
      <ContainedShowdown
        title={data.dressCode.title}
        brandA={{
          name: "Celebrity Cruises: Evening Chic",
          image: DressCelebImg,
          description: "Flexible, stylish designer elegance without tuxedos or formal gowns.",
          features: [
            "Smart Casual for standard evenings (collared shirts, stylish slacks, sundresses)",
            "Evening Chic on 1–2 nights per sailing for elevated designer attire",
            "Designer jeans, smart dresses, and blazers warmly embraced",
            "Modern cocktail lounge and nightclub atmosphere"
          ]
        }}
        brandB={{
          name: "Holland America: Dressy Nights",
          image: DressHalImg,
          description: "Traditional maritime elegance with polished evening attire.",
          features: [
            "Smart Casual for casual dining and daytime cruising",
            "Dressy Nights featuring slacks, skirts, dresses, blouses, and jackets",
            "Formal wear (tuxedos or dark suits) encouraged on Grand Voyages",
            "Refined, unhurried live music venue ambiance"
          ]
        }}
      />

      {/* 14. PROS AND CONS */}
      <ProsConsCards
        title="Celebrity Cruises: Advantages and Considerations"
        prosTitle="Celebrity Advantages"
        consTitle="Celebrity Considerations"
        bestFor={data.prosCons.prosCelebrity}
        notBestFor={data.prosCons.consCelebrity}
        type="compare"
        bgClass="bg-white"
      />

      <CostValueAnalysisCards
        title="Holland America Line: Advantages and Considerations"
        subtitle="Key highlights and realistic factors to weigh before choosing Holland America."
        includedTitle="Holland America Advantages"
        extrasTitle="Holland America Considerations"
        included={data.prosCons.hollandAdvantages || (data.prosCons.prosHolland || []).map((t: string) => ({ title: t, description: "" }))}
        extras={data.prosCons.hollandConsiderations || (data.prosCons.consHolland || []).map((t: string) => ({ title: t, description: "" }))}
      />

      {/* 15. WHICH CRUISE LINE SHOULD YOU CHOOSE? */}
      <SvsSDestinations data={data.decisionMatrixTable} />
      <GenericChecklistCards
        subtitle="QUICK RECOMMENDATION"
        title="Quick Booking Recommendations"
        cards={[
          {
            title: "Choose Celebrity Cruises If:",
            items: data.decisionMatrix.chooseCelebrityIf,
          },
          {
            title: "Choose Holland America Line If:",
            items: data.decisionMatrix.chooseHollandIf,
          },
        ]}
      />

      {/* 16. HOW TO COMPARE TWO SPECIFIC SAILINGS */}
      <StepByStepGuide
        title={data.comparisonGuide.title}
        subtitle={data.comparisonGuide.subtitle}
        steps={data.comparisonGuide.steps}
        layout="timeline"
      />



      {/* 18. EXPERT CREDENTIALS (ANGELA HUGHES) */}
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


      {/* 20. CENTER CTA */}
      <CenterCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink}
        image={CtaImg}
      />
    </div>
  );
}

