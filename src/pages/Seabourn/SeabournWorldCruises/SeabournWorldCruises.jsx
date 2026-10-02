import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import CurvilinearGrid from "../../../components/ui/CurvilinearGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import CardGrid from "../../../components/ui/CardGrid";
import DynamicCulinaryShowcase from "../../../components/ui/DynamicCulinaryShowcase";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import SaltJourneyTimeline from "../../../components/ui/SaltJourneyTimeline";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ChecklistCards from "../../../components/ui/ChecklistCards";
import BrandShowcase from "../../../components/ui/BrandShowcase";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import InteractivePackingChecklist from "../../../components/ui/InteractivePackingChecklist";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Assets from SeabournWorldCruises (SEO-optimized filenames)
import heroBgImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-world-cruises-luxury-hero.jpg";
import whatIsWorldCruiseImg from "../../../assets/Seabourn/SeabournWorldCruises/what-is-a-seabourn-world-cruise.jpg";
import grandVoyage1Img from "../../../assets/Seabourn/SeabournWorldCruises/what-is-a-seabourn-grand-voyage-1.jpg";
import grandVoyage2Img from "../../../assets/Seabourn/SeabournWorldCruises/what-is-a-seabourn-grand-voyage-2.jpg";
import midCta1Img from "../../../assets/Seabourn/SeabournWorldCruises/start-planning-your-extended-voyage-cta.jpg";
import midCta2Img from "../../../assets/Seabourn/SeabournWorldCruises/lets-design-your-journey-cta.jpg";
import fullVoyageImg from "../../../assets/Seabourn/SeabournWorldCruises/choose-the-full-voyage-if-seabourn-world-cruise.jpg";
import segmentImg from "../../../assets/Seabourn/SeabournWorldCruises/choose-a-cruise-segment-if-seabourn-world-cruise.jpg";
import restaurantImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-the-restaurant-world-cruise-dining.jpg";
import colonnadePatioImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-the-colonnade-the-patio-dining.jpg";
import solisImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-solis-specialty-dining-world-cruise.jpg";
import inSuiteImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-24-hour-in-suite-course-by-course-dining.jpg";
import couplesImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-world-cruises-for-couples.jpg";
import soloTravelersImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-world-cruises-for-solo-travelers.jpg";
import costImg from "../../../assets/Seabourn/SeabournWorldCruises/how-much-does-a-seabourn-world-cruise-cost.jpg";
import evaluateValueImg from "../../../assets/Seabourn/SeabournWorldCruises/how-to-evaluate-world-cruise-value.jpg";
import whenToBookImg from "../../../assets/Seabourn/SeabournWorldCruises/when-should-you-book-a-seabourn-world-cruise.jpg";
import midCta4Img from "../../../assets/Seabourn/SeabournWorldCruises/book-before-your-preferred-suite-sells-out-cta.jpg";
import midCta5Img from "../../../assets/Seabourn/SeabournWorldCruises/lets-compare-routes-suites-promotions-cta.jpg";
import valuePropositionImg from "../../../assets/Seabourn/SeabournWorldCruises/seabourn-world-cruise-value-proposition.jpg";
import finalCtaImg from "../../../assets/Seabourn/SeabournWorldCruises/start-planning-your-seabourn-world-cruise-cta.jpg";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournWorldCruisesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/world-cruises/",
      "name": "Seabourn World Cruises: Routes, Suites & Planning Guide",
      "headline": "Seabourn World Cruises and Grand Voyages: Complete Planning Guide",
      "description": "Explore Seabourn World Cruises and Grand Voyages, including long itineraries, cruise segments, suites, benefits, destinations, planning tips and booking timelines.",
      "keywords": [
        "Seabourn World Cruises",
        "Seabourn World Cruise",
        "Seabourn Grand Voyages",
        "Seabourn world cruise itineraries",
        "Seabourn world cruise segments",
        "Seabourn world cruise cost",
        "Seabourn world cruise suites",
        "Seabourn long cruises",
        "Seabourn extended voyages",
        "Seabourn world cruise destinations",
        "Seabourn world cruise benefits",
        "Seabourn world cruise booking",
        "Seabourn world cruise planning",
        "Seabourn world cruise review",
        "luxury world cruise",
        "luxury world voyage"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#world-cruise"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tripsandships.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Seabourn Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Seabourn World Cruises",
          "item": "https://www.tripsandships.com/seabourn-cruises/world-cruises/"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#world-cruise",
      "name": "Seabourn World Cruises and Grand Voyages",
      "description": "Extended Seabourn luxury voyages connecting multiple regions, countries and destinations, with opportunities for slow travel, extended exploration and a familiar shipboard experience.",
      "touristType": [
        "Luxury travelers",
        "Experienced cruisers",
        "Slow travelers",
        "Long-voyage travelers",
        "Couples",
        "Solo travelers",
        "Retirees"
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Cruise Style",
          "value": "Extended luxury voyage"
        },
        {
          "@type": "PropertyValue",
          "name": "Duration",
          "value": "Significantly longer than a typical cruise"
        },
        {
          "@type": "PropertyValue",
          "name": "Destinations",
          "value": "Multiple regions and countries"
        },
        {
          "@type": "PropertyValue",
          "name": "Accommodation",
          "value": "Seabourn suites"
        },
        {
          "@type": "PropertyValue",
          "name": "Dining",
          "value": "Multiple onboard dining options"
        },
        {
          "@type": "PropertyValue",
          "name": "Best For",
          "value": "Slow travelers and experienced cruisers"
        },
        {
          "@type": "PropertyValue",
          "name": "Booking",
          "value": "Best planned well in advance"
        },
        {
          "@type": "PropertyValue",
          "name": "Segments",
          "value": "Selected voyages may offer shorter portions"
        },
        {
          "@type": "PropertyValue",
          "name": "Pace",
          "value": "Designed for extended exploration"
        },
        {
          "@type": "PropertyValue",
          "name": "Atmosphere",
          "value": "Intimate, relaxed and destination-focused"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/world-cruises/#faq",
      "mainEntity": data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const SeabournWorldCruises = () => {
  return (
    <div className="bg-white min-h-screen text-navy-950">
      <Helmet>
        <title>Seabourn World Cruises: Routes, Suites & Planning Guide</title>
        <meta name="title" content="Seabourn World Cruises & Grand Voyages: Complete Guide" />
        <meta
          name="description"
          content="Explore Seabourn World Cruises and Grand Voyages, including long itineraries, cruise segments, suites, benefits, destinations, planning tips and booking timelines."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/world-cruises/" />
        <script type="application/ld+json">{JSON.stringify(seabournWorldCruisesSchema)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        readMoreParagraphs={data.hero.paragraphs.slice(1)}
        badge="ULTRA-LUXURY GLOBAL EXPEDITIONS"
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink={data.hero.ctaLink}
        backgroundImage={heroBgImg}
      />

      {/* ── 2. AT A GLANCE TABLE ── */}
      <ComparisonTable
        data={data.glanceTable}
      />

      {/* ── 3. WHAT IS A SEABOURN WORLD CRUISE ── */}
      <EditorialIntroSection
        title={data.whatIsWorldCruise.title}
        subtitle={data.whatIsWorldCruise.subtitle}
        paragraphs={data.whatIsWorldCruise.paragraphs}
        highlightsTitle="The pace and continuity offer unique advantages:"
        highlights={data.whatIsWorldCruise.highlights}
        conclusion={data.whatIsWorldCruise.conclusion}
        image={whatIsWorldCruiseImg}
        imagePlaceholderText={data.whatIsWorldCruise.imagePlaceholderText}
      />

      {/* ── 4. WHAT IS A GRAND VOYAGE ── */}
      <AsymmetricStoryIntro
        heading={data.whatIsGrandVoyage.title}
        subtitle={data.whatIsGrandVoyage.subtitle}
        paragraphs={data.whatIsGrandVoyage.paragraphs}
        highlights={data.whatIsGrandVoyage.highlights}
        image1={grandVoyage1Img}
        image2={grandVoyage2Img}
        image1Placeholder={data.whatIsGrandVoyage.image1Placeholder}
        image2Placeholder={data.whatIsGrandVoyage.image2Placeholder}
      />

      {/* ── 5. WORLD CRUISE VS. GRAND VOYAGE TABLE ── */}
      <ComparisonTable
        data={data.vsGrandVoyageTable}
      />

      {/* ── 6. MID CTA 1 (PLANNING EXTENDED VOYAGE) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        image={midCta1Img}
        theme="dark"
      />

      {/* ── 7. BENEFITS OF A WORLD CRUISE ── */}
      <CurvilinearGrid
        title={data.benefitsGrid.title}
        subtitle={data.benefitsGrid.subtitle}
        paragraphs={data.benefitsGrid.paragraphs}
        items={data.benefitsGrid.items}
      />

      {/* ── 8. DESTINATIONS & HOW TO CHOOSE ITINERARY ── */}
      <GenericChecklistCards
        title={data.destinationsAndCriteria.title}
        subtitle={data.destinationsAndCriteria.subtitle}
        cards={data.destinationsAndCriteria.cards}
      />

      {/* ── 9. MID CTA 2 (DESIGN YOUR JOURNEY) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={midCta2Img}
        theme="dark"
      />

      {/* ── 10. WORLD CRUISE SEGMENTS (FULL VOYAGE VS SEGMENT) ── */}
      <ShipPhilosophyFaceoff
        data={data.segmentsFaceoff}
        regentImage={fullVoyageImg}
        vikingImage={segmentImg}
      />

      {/* ── 11. SUITES & BALCONY LIVING ── */}
      <GenericChecklistCards
        title={data.suitesAndBalconyChecklist.title}
        subtitle={data.suitesAndBalconyChecklist.subtitle}
        cards={data.suitesAndBalconyChecklist.cards}
      />

     

      {/* ── 13. WHICH SUITE LOCATION IS BEST ── */}
      <CardGrid
        title={data.suiteLocationCards.title}
        subtitle={data.suiteLocationCards.subtitle}
        cards={data.suiteLocationCards.cards}
      />

      {/* ── 14. DINING & LIFE AT SEA ── */}
      <DynamicCulinaryShowcase
        title={data.diningShowcase.title}
        subtitle={data.diningShowcase.subtitle}
        items={data.diningShowcase.items}
        images={[restaurantImg, colonnadePatioImg, solisImg, inSuiteImg]}
      />

      {/* ── 15. IS A WORLD CRUISE RIGHT FOR YOU ── */}
      <DualPhilosophyShowcase
        data={data.suitabilityPhilosophy}
      />

      {/* ── VIDEO SECTION ── */}
      <VideoEmbed
        data={{
          youtubeId: "F3-F5gkA9Jc",
          title: "Experience Seabourn World Cruises & Grand Voyages",
          description: "Embark on an extraordinary global voyage with Seabourn's intimate small ships, seamless all-inclusive luxury, and unforgettable destinations."
        }}
      />

      {/* ── 16. COUPLES, SOLO TRAVELERS & COST ── */}
      <ThreeColumnGrid
        title={data.travelStylesAndCost.title}
        subtitle={data.travelStylesAndCost.subtitle}
        items={data.travelStylesAndCost.items.map((item, idx) => ({
          ...item,
          image: [couplesImg, soloTravelersImg, costImg][idx]
        }))}
      />

      {/* ── 17. EVALUATING VALUE & WHEN TO BOOK ── */}
      <LuxuryFeatureShowcase
        title={data.evaluationAndBooking.title}
        subtitle={data.evaluationAndBooking.subtitle}
        items={data.evaluationAndBooking.items.map((item, idx) => ({
          ...item,
          image: [evaluateValueImg, whenToBookImg][idx]
        }))}
      />

      {/* ── 18. PLANNING TIMELINE ── */}
      <SaltJourneyTimeline
        title={data.planningTimeline.title}
        subtitle={data.planningTimeline.subtitle}
        items={data.planningTimeline.items}
      />

      {/* ── 19. MID CTA 4 (BOOK BEFORE SUITES SELL OUT) ── */}
      <CenterCTA
        title={data.ctas.midCta4.title}
        description={data.ctas.midCta4.description}
        buttonText={data.ctas.midCta4.buttonText}
        buttonLink={data.ctas.midCta4.buttonLink}
        image={midCta4Img}
        theme="dark"
      />

      {/* ── 20. ARRIVING EARLY, PACKING & HEALTH GUIDELINES ── */}
      <InteractivePackingChecklist
        title={data.preparationChecklist.title}
        subtitle={data.preparationChecklist.subtitle}
        categories={data.preparationChecklist.categories}
      />

      {/* ── 21. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
      />

      {/* ── 22. WHO SHOULD SAIL WORLD CRUISE VS GRAND VOYAGE ── */}
      <ChecklistCards
        data={data.whoShouldSailChecklist}
      />

      {/* ── 23. WORLD CRUISE VS MULTIPLE SHORT CRUISES ── */}
      <ComparisonTable
        data={data.vsMultipleCruisesTable}
      />

      {/* ── 24. MID CTA 5 (COMPARE ROUTES & SUITES) ── */}
      <CenterCTA
        title={data.ctas.midCta5.title}
        description={data.ctas.midCta5.description}
        buttonText={data.ctas.midCta5.buttonText}
        buttonLink={data.ctas.midCta5.buttonLink}
        image={midCta5Img}
        theme="dark"
      />

      {/* ── 25. 10 BOOKING TIPS ── */}
      <CardGrid
        title={data.bookingTipsGrid.title}
        subtitle={data.bookingTipsGrid.subtitle}
        cards={data.bookingTipsGrid.cards}
      />

      {/* ── 26. IS IT WORTH IT VALUE PROPOSITION ── */}
      <BrandShowcase
        brand={{ ...data.worthItBrand, image: valuePropositionImg }}
        index={0}
      />

      {/* ── 27. ANGELA HUGHES EXPERT CREDENTIALS ── */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={data.angelaHughes.title}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        authoritySubtitle={data.angelaHughes.authoritySubtitle}
        experienceBadge={data.angelaHughes.experienceBadge}
        image={AboutImage}
        paragraphs={data.angelaHughes.paragraphs}
        credentials={data.angelaHughes.credentials}
        quote={data.angelaHughes.quote}
        quoteSubtitle={data.angelaHughes.quoteSubtitle}
        ctaText="Plan Your World Cruise"
        ctaLink="/contact"
      />

      {/* ── 28. FAQ ACCORDION ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions About Seabourn World Cruises",
          subtitle: "Everything travelers need to know before booking a Seabourn World Cruise or Grand Voyage.",
          items: data.faqs,
        }}
      />

      {/* ── 29. FINAL VERDICT ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              data.finalVerdict.recommendation,
            ],
          },
        ]}
      />

      {/* ── 30. FINAL CTA ── */}
      <CenterCTA
        title={data.ctas.finalCta.title}
        description={data.ctas.finalCta.description}
        buttonText={data.ctas.finalCta.buttonText}
        buttonLink={data.ctas.finalCta.buttonLink}
        image={finalCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default SeabournWorldCruises;