import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import CardGrid from "../../../components/ui/CardGrid";
import CenterCTA from "../../../components/ui/CenterCTA";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import TravelerProfileTabs from "../../../components/ui/TravelerProfileTabs";
import ExpertRulesGrid from "../../../components/ui/ExpertRulesGrid";
import InclusionsList from "../../../components/ui/InclusionsList";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import DetailedInclusionsList from "../../../components/ui/DetailedInclusionsList";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import MistakesGrid from "../../../components/ui/MistakesGrid";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";

// Assets from dedicated ScenicMekongRiverCruises folder
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import scenicMekongHeroSpiritSailing from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-hero-spirit-sailing.webp";
import scenicMekongQaAngkorWatSunset from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-qa-angkor-wat-sunset.webp";
import scenicMekongQaHoChiMinhBasilica from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-qa-ho-chi-minh-basilica.webp";
import scenicMekongWhyScenicSpirit from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-why-scenic-spirit.webp";
import scenicMekongCta1TonleSap from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-cta1-tonle-sap.webp";
import scenicMekongSeasonDry from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-season-dry.webp";
import scenicMekongSeasonWet from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-season-wet.webp";
import scenicMekongSeasonTransitional from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-season-transitional.webp";
import scenicMekongItinVietnamCambodia from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-itin-vietnam-cambodia.webp";
import scenicMekongItinDeltaFocused from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-itin-delta-focused.webp";
import scenicMekongItinSiemReapAngkor from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-itin-siem-reap-angkor.webp";
import scenicMekongFirstTimeOudong from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-first-time-oudong.webp";
import scenicMekongCta2PhnomPenh from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-cta2-phnom-penh.webp";
import scenicMekongCabinsDeluxeSuite from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-cabins-deluxe-suite.webp";
import scenicMekongDiningCrystal from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-dining-crystal.webp";
import scenicMekongFamiliesPool from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-families-pool.webp";
import scenicMekongCouplesSunset from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-couples-sunset.webp";
import scenicMekongCta3Lounge from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-cta3-lounge.webp";
import scenicMekongInclusionsButler from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-inclusions-butler.webp";
import scenicMekongVerdictEnrichAngkor from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-verdict-enrich-angkor.webp";
import scenicMekongClosingSpirit from "../../../assets/ScenicRiverCruises/ScenicMekongRiverCruises/scenic-mekong-closing-spirit.webp";

const ScenicMekongRiverCruises = () => {
  // Season items mapping for ThreeColumnGrid
  const seasonImages = [
    scenicMekongSeasonDry,
    scenicMekongSeasonWet,
    scenicMekongSeasonTransitional,
  ];

  const seasonItems = data.bestTimeToCruise.items.map((item, idx) => ({
    category: item.category,
    title: item.title,
    description: item.description,
    bullets: item.features,
    image: seasonImages[idx],
  }));

  // Itinerary items mapping for TravelerProfileTabs
  const itineraryImages = [
    scenicMekongItinVietnamCambodia,
    scenicMekongItinDeltaFocused,
    scenicMekongItinSiemReapAngkor,
  ];

  const itineraryTabs = data.bestItineraries.items.map((item, idx) => ({
    name: item.title,
    tagline: item.badge,
    quote: item.desc,
    recommendation: item.badge,
    reason: item.desc,
    whyFits: item.bestFor || [],
    image: itineraryImages[idx],
  }));

  // Cabins and Dining data for CabinFeatureGrid
  const cabinFeatureData = {
    title: data.cabinsAndDining.title,
    subtitle: data.cabinsAndDining.subtitle,
    oceanview: {
      title: data.cabinsAndDining.cabins.title,
      bestFor: `${data.cabinsAndDining.cabins.text} ${data.cabinsAndDining.cabins.outro}`,
      advantages: data.cabinsAndDining.cabins.features,
    },
    balcony: {
      title: data.cabinsAndDining.dining.title,
      bestFor: `${data.cabinsAndDining.dining.text} ${data.cabinsAndDining.dining.outro}`,
      advantages: data.cabinsAndDining.dining.features,
    },
  };

  // Dual philosophy data for Families & Couples
  const familiesAndCouplesData = {
    title: data.familiesAndCouples.title,
    subtitle: data.familiesAndCouples.subtitle,
    sailing: {
      label: data.familiesAndCouples.families.title,
      philosophy: data.familiesAndCouples.families.intro,
      points: data.familiesAndCouples.families.generations.map(
        (g) => `${g.role} ${g.features.join(", ")}`
      ),
      quote: data.familiesAndCouples.families.quote,
    },
    allSuite: {
      label: data.familiesAndCouples.couples.title,
      philosophy: data.familiesAndCouples.couples.intro,
      points: data.familiesAndCouples.couples.features,
      quote: data.familiesAndCouples.couples.quote,
    },
  };

  // Detailed Inclusions data mapping
  const detailedInclusionsItems = [
    {
      title: data.whatsIncluded.items[0].title,
      paragraphs: data.whatsIncluded.items[0].paragraphs,
      image: scenicMekongInclusionsButler,
      lists: data.whatsIncluded.items[0].lists,
    },
  ];

  // Advisor benefit cards mapping with Lucide icons
  const advisorIconNames = [
    "Plane",
    "Home",
    "Ship",
    "MapPin",
    "Compass",
    "Calendar",
    "ShieldCheck",
    "Sparkles",
  ];

  const advisorCards = data.whyBookAdvisor.benefits.map((benefit, idx) => ({
    title: benefit.title,
    description: benefit.description,
    icon: advisorIconNames[idx % advisorIconNames.length],
  }));

  // Final Verdict service features
  const verdictFeatures = data.finalVerdict.services.map((service, idx) => ({
    title: `VIP Service ${idx + 1}`,
    description: service,
  }));

  return (
    <div className="w-full bg-white font-sans text-navy-950 overflow-hidden">
      {/* ── SEO Head ── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.metaDescription} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(data.meta.schema)}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Nav />

      {/* 1. Hero Section */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs.join(" ")}
        badge={data.hero.badgeText}
        backgroundImage={scenicMekongHeroSpiritSailing}
        primaryCtaText={data.hero.primaryButton.label}
        primaryCtaLink={data.hero.primaryButton.href}
        secondaryCtaText={data.hero.secondaryButton.label}
        secondaryCtaLink={data.hero.secondaryButton.href}
      />

      {/* 2. Quick Answer Section */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        title={data.quickAnswer.title}
        paragraphs={data.quickAnswer.storyParagraphs}
        highlights={data.quickAnswer.highlightList}
        image1={scenicMekongQaAngkorWatSunset}
        image2={scenicMekongQaHoChiMinhBasilica}
      />

      {/* 3. Why Choose Section */}
      <EditorialIntroSection
        eyebrow={data.whyChoose.eyebrow}
        heading={data.whyChoose.heading}
        paragraphs={data.whyChoose.paragraphs}
        badgeTitle={data.whyChoose.badgeTitle}
        badgeDescription={data.whyChoose.badgeDescription}
        highlights={data.whyChoose.highlights}
        image={scenicMekongWhyScenicSpirit}
      />

      {/* 4. Where Do Scenic Mekong Cruises Go? (Destinations) */}
      <CardGrid
        title={data.destinations.title}
        subtitle={data.destinations.subtitle}
        cards={data.destinations.cards}
        columns={3}
        stagger={false}
      />

      {/* 5. Inline CTA 1 */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={scenicMekongCta1TonleSap}
        theme="dark"
      />

      {/* 6. Best Time to Cruise */}
      <ThreeColumnGrid
        title={data.bestTimeToCruise.title}
        subtitle={data.bestTimeToCruise.subtitle}
        items={seasonItems}
      />

      {/* 7. Best Itineraries */}
      <div id="best-itineraries">
        <TravelerProfileTabs
          title={data.bestItineraries.title}
          subtitle={data.bestItineraries.subtitle}
          profiles={itineraryTabs}
        />
      </div>

      {/* 8. First-Time Travelers Progression */}
      <InclusionsList
        title={data.firstTimeTravelers.title}
        expertNote={`${data.firstTimeTravelers.lead} ${data.firstTimeTravelers.calloutText} ${data.firstTimeTravelers.conclusion}`}
        inclusions={data.firstTimeTravelers.steps.map(
          (s) => `${s.number}. ${s.title} ${s.subtitle}`
        )}
        image={scenicMekongFirstTimeOudong}
      />

      {/* 9. Excursions Section */}
      <ExpertRulesGrid
        title={data.excursions.title}
        subtitle={data.excursions.subtitle}
        rules={data.excursions.rules}
      />

      {/* 10. Inline CTA 2 */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={scenicMekongCta2PhnomPenh}
        theme="dark"
      />

      {/* 11. Cabins & Dining */}
      <CabinFeatureGrid
        data={cabinFeatureData}
        image1={scenicMekongCabinsDeluxeSuite}
        image2={scenicMekongDiningCrystal}
      />

      {/* 12. Food & Cultural Heritage */}
      <GenericChecklistCards
        title={data.foodAndHistory.title}
        subtitle={data.foodAndHistory.subtitle}
        cards={[
          {
            title: data.foodAndHistory.food.title,
            items: [
              data.foodAndHistory.food.lead,
              data.foodAndHistory.food.text,
              ...data.foodAndHistory.food.features,
              data.foodAndHistory.food.outro,
            ],
          },
          {
            title: data.foodAndHistory.history.title,
            items: [
              data.foodAndHistory.history.lead,
              data.foodAndHistory.history.text,
              ...data.foodAndHistory.history.features,
              data.foodAndHistory.history.outro,
            ],
          },
        ]}
      />

      {/* 13. Photography & Packing */}
      <GenericChecklistCards
        title={data.photographyAndPacking.title}
        subtitle={data.photographyAndPacking.subtitle}
        cards={data.photographyAndPacking.cards}
      />

      {/* 14. Families & Couples Section */}
      <DualPhilosophyShowcase
        data={familiesAndCouplesData}
        imageSailing={scenicMekongFamiliesPool}
        imageAllSuite={scenicMekongCouplesSunset}
      />

      {/* 15. Cost Factors Section */}
      <AuthorityGrid
        title={data.cost.title}
        subtitle={data.cost.subtitle}
        items={data.cost.items}
      />

      {/* 16. Inline CTA 3 */}
      <CenterCTA
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
        image={scenicMekongCta3Lounge}
        theme="dark"
      />

      {/* 17. What's Included */}
      <DetailedInclusionsList
        title={data.whatsIncluded.title}
        intro={data.whatsIncluded.intro}
        items={detailedInclusionsItems}
      />

      {/* 18. Comparison Table */}
      <ComparisonTable data={data.comparison} />

      {/* 19. Common Booking Mistakes */}
      <MistakesGrid
        title={data.mistakes.title}
        items={data.mistakes.items}
      />

      {/* 20. Days Needed & Pre/Post Cruise Hotel Planning */}
      <ProsConsCards
        title={data.daysNeededAndHotel.title}
        prosTitle={data.daysNeededAndHotel.prosTitle}
        consTitle={data.daysNeededAndHotel.consTitle}
        bestFor={data.daysNeededAndHotel.bestFor}
        notBestFor={data.daysNeededAndHotel.notBestFor}
        bottomNote={data.daysNeededAndHotel.bottomNote}
        type="compare"
      />

      {/* 21. Why Book Through a Luxury Travel Advisor? */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={`${data.whyBookAdvisor.quoteTitle}: ${data.whyBookAdvisor.quoteBody} ${data.whyBookAdvisor.alert}`}
        cards={advisorCards}
        columns={4}
        stagger={false}
      />

      {/* 22. Angela Hughes Credentials */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={`${data.angelaHughes.role} • ${data.angelaHughes.countries}`}
        image={AboutImage}
        bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury Southeast Asian river cruises, safaris, and bespoke global itineraries for discerning travelers."
        credentials={data.angelaHughes.credentials.map((c) => c.label)}
        ctaText="Plan with Angela"
        ctaLink="/contact"
      />

      {/* 23. Frequently Asked Questions */}
      <FAQAccordion data={data.faq} />

      {/* 24. Final Verdict */}
      <EditorialFeatureShowcase
        title={data.finalVerdict.title}
        subtitle={data.finalVerdict.paragraphs.join(" ")}
        image={scenicMekongVerdictEnrichAngkor}
        features={verdictFeatures}
      />

      {/* 25. Concluding CTA */}
      <CenterCTA
        title="Ready to Sail the Scenic Mekong?"
        description="Connect with Angela Hughes and the Trips & Ships luxury river cruise team to craft your bespoke Southeast Asian voyage with exclusive amenities and priority suite selection."
        buttonText={data.finalVerdict.buttonText}
        buttonLink={data.finalVerdict.buttonLink}
        image={scenicMekongClosingSpirit}
        theme="dark"
      />
    </div>
  );
};

export default ScenicMekongRiverCruises;