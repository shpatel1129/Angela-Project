import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import CurvilinearGrid from "../../../components/ui/CurvilinearGrid";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import LuxuryZigZagShowcase from "../../../components/ui/LuxuryZigZagShowcase";
import DynamicCulinaryShowcase from "../../../components/ui/DynamicCulinaryShowcase";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import SaltJourneyTimeline from "../../../components/ui/SaltJourneyTimeline";
import CardGrid from "../../../components/ui/CardGrid";
import BrandShowcase from "../../../components/ui/BrandShowcase";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ChecklistCards from "../../../components/ui/ChecklistCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Assets from SeabournSoloTravelers (SEO-optimized filenames)
import heroBgImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-for-solo-travelers-luxury-hero.jpg";
import isGoodImg from "../../../assets/Seabourn/SeabournSoloTravelers/is-seabourn-good-for-solo-travelers.jpg";
import singleSupplement1Img from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-single-supplement-explained-1.jpg";
import singleSupplement2Img from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-single-supplement-explained-2.jpg";
import midCta1Img from "../../../assets/Seabourn/SeabournSoloTravelers/start-planning-your-solo-seabourn-voyage-cta.jpg";
import suiteOption1Img from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-entry-level-ocean-view-veranda-suites-solo.jpg";
import suiteOption2Img from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-mid-ship-veranda-suites-solo.jpg";
import suiteOption3Img from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-penthouse-premium-suites-solo.jpg";
import restaurantImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-the-restaurant-solo-dining.jpg";
import colonnadeImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-the-colonnade-casual-solo-dining.jpg";
import patioSquareImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-the-patio-seabourn-square-solo-dining.jpg";
import inSuiteImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-24-hour-in-suite-course-by-course-solo-dining.jpg";
import midCta2Img from "../../../assets/Seabourn/SeabournSoloTravelers/find-the-right-suite-for-traveling-alone-cta.jpg";
import medItineraryImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-mediterranean-cruises-solo-itinerary.jpg";
import alaskaItineraryImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-alaska-cruises-solo-itinerary.jpg";
import antarcticaItineraryImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-antarctica-expedition-cruises-solo-itinerary.jpg";
import arcticItineraryImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-arctic-greenland-expeditions-solo-itinerary.jpg";
import grandVoyageItineraryImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-grand-voyages-world-cruises-solo-itinerary.jpg";
import midCta3Img from "../../../assets/Seabourn/SeabournSoloTravelers/design-your-solo-itinerary-cta.jpg";
import introvertImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-for-introverted-solo-travelers.jpg";
import extrovertImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-for-extroverted-solo-travelers.jpg";
import midCta4Img from "../../../assets/Seabourn/SeabournSoloTravelers/ready-to-book-your-solo-voyage-cta.jpg";
import valuePropositionImg from "../../../assets/Seabourn/SeabournSoloTravelers/seabourn-solo-travel-value-proposition.jpg";
import finalCtaImg from "../../../assets/Seabourn/SeabournSoloTravelers/start-planning-your-seabourn-solo-cruise-cta.jpg";

// Data Source
import data from "./data.json";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournSoloTravelersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/",
      "name": "Seabourn for Solo Travelers: Single Supplements & Tips",
      "headline": "Seabourn for Solo Travelers: Single Supplements, Dining & What to Expect",
      "description": "Is Seabourn good for solo travelers? Explore single supplements, solo dining, social opportunities, suites, itineraries and tips for cruising alone.",
      "keywords": [
        "Seabourn for Solo Travelers",
        "Seabourn solo travel",
        "Seabourn solo cruises",
        "Seabourn for solo travelers",
        "Seabourn single supplement",
        "Seabourn solo cruise",
        "Seabourn cruise for one",
        "Seabourn single traveler",
        "Seabourn solo dining",
        "Seabourn solo cabins",
        "Seabourn solo cruise review",
        "Seabourn solo travel tips",
        "best Seabourn cruises for solo travelers",
        "Seabourn single occupancy",
        "luxury solo cruise",
        "luxury cruises for solo travelers",
        "Seabourn solo itinerary"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#travel"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#breadcrumb",
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
          "name": "Seabourn Solo Travel",
          "item": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#travel",
      "name": "Seabourn Solo Travel",
      "description": "A luxury cruise experience for solo travelers combining intimate ships, personalized service, flexible dining, luxury accommodations, destination-focused itineraries and natural social opportunities.",
      "touristType": [
        "Solo travelers",
        "Independent luxury travelers",
        "Solo women travelers",
        "Solo men travelers",
        "Introverted travelers",
        "Extroverted travelers",
        "Luxury travelers"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/solo-travelers/#faq",
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

const SeabournSoloTravelers = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(seabournSoloTravelersSchema)}
        </script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        badge="LUXURY SOLO CRUISING"
        primaryCtaText="Contact Travel Advisor"
        primaryCtaLink="/contact"
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink={data.hero.ctaLink}
        backgroundImage={heroBgImg}
      />

      {/* ── 2. QUICK OVERVIEW (TABLE) ── */}
      <ComparisonTable
        data={data.glanceTable}
      />

      {/* ── 3. IS SEABOURN GOOD FOR SOLO TRAVELERS ── */}
      <EditorialIntroSection
        title={data.isGoodSection.title}
        subtitle={data.isGoodSection.subtitle}
        paragraphs={data.isGoodSection.paragraphs}
        highlightsTitle="The experience is particularly well suited to independent travelers who appreciate:"
        highlights={data.isGoodSection.highlights}
        conclusion={data.isGoodSection.conclusion}
        image={isGoodImg}
        imagePlaceholderText={data.isGoodSection.imagePlaceholderText}
      />

      {/* ── 4. WHY SOLO TRAVELERS CHOOSE SEABOURN ── */}
      <CurvilinearGrid
        title={data.whyChooseGrid.title}
        subtitle={data.whyChooseGrid.subtitle}
        paragraphs={data.whyChooseGrid.paragraphs}
        items={data.whyChooseGrid.items}
      />

      {/* ── 5. SINGLE SUPPLEMENT EXPLAINED ── */}
      <AsymmetricStoryIntro
        heading={data.singleSupplementSection.title}
        subtitle={data.singleSupplementSection.subtitle}
        paragraphs={data.singleSupplementSection.paragraphs}
        highlights={data.singleSupplementSection.highlights}
        image1={singleSupplement1Img}
        image2={singleSupplement2Img}
        image1Placeholder="SEABOURN SINGLE SUPPLEMENT"
        image2Placeholder="LUXURY SOLO OCCUPANCY"
      />

      {/* ── 6. CTA 1 (PLANNING SOLO VOYAGE) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        image={midCta1Img}
        theme="dark"
      />

      {/* ── 7. REDUCED SUPPLEMENTS & BEST VALUE ── */}
      <GenericChecklistCards
        title={data.reducedFaresChecklist.title}
        subtitle={data.reducedFaresChecklist.subtitle}
        cards={data.reducedFaresChecklist.cards}
      />

      {/* ── 8. SUITE OPTIONS & BALCONY VALUE ── */}
      <LuxuryZigZagShowcase
        title={data.suiteOptionsShowcase.title}
        subtitle={data.suiteOptionsShowcase.subtitle}
        items={data.suiteOptionsShowcase.items}
        images={[suiteOption1Img, suiteOption2Img, suiteOption3Img]}
      />

      {/* ── 9. SOLO DINING ON SEABOURN ── */}
      <DynamicCulinaryShowcase
        title={data.soloDiningShowcase.title}
        subtitle={data.soloDiningShowcase.subtitle}
        description={data.soloDiningShowcase.description}
        items={data.soloDiningShowcase.items}
        images={[restaurantImg, colonnadeImg, patioSquareImg, inSuiteImg]}
      />

      {/* ── 10. CTA 2 (FIND THE RIGHT SUITE) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={midCta2Img}
        theme="dark"
      />

      {/* ── 11. IS SEABOURN TOO QUIET FOR SOLO TRAVELERS? ── */}
      <DualPhilosophyShowcase
        data={data.tooQuietPhilosophy}
      />

      {/* ── 12. BEST SEABOURN ITINERARIES FOR SOLO TRAVELERS ── */}
      <LuxuryZigZagShowcase
        title={data.itineraryShowcase.title}
        subtitle={data.itineraryShowcase.subtitle}
        items={data.itineraryShowcase.items}
        images={[
          medItineraryImg,
          alaskaItineraryImg,
          antarcticaItineraryImg,
          arcticItineraryImg,
          grandVoyageItineraryImg,
        ]}
      />

      {/* ── 13. CTA 3 (DESIGN ITINERARY) ── */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        image={midCta3Img}
        theme="dark"
      />

      {/* ── VIDEO SECTION ── */}
      <VideoEmbed
        data={{
          youtubeId: "J9HtYOxrvj0",
          title: "Experience Seabourn Luxury Solo Cruising",
          description: "Discover what makes Seabourn the premier choice for independent solo travelers seeking refined ultra-luxury and welcoming onboard camaraderie."
        }}
      />

      {/* ── 14. INTROVERTS VS EXTROVERTS ── */}
      <ShipPhilosophyFaceoff
        data={data.personalityFaceoff}
        regentImage={introvertImg}
        vikingImage={extrovertImg}
      />

      {/* ── 15. SOLO WOMEN, SOLO MEN & EXCURSIONS ── */}
      <GenericChecklistCards
        title={data.genderAndExcursions.title}
        subtitle={data.genderAndExcursions.subtitle}
        cards={data.genderAndExcursions.cards}
      />

      {/* ── 16. SOLO TRAVEL TIPS (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.soloTipsTimeline}
      />

      {/* ── 17. CTA 4 (BOOK WITH CONFIDENCE) ── */}
      <CenterCTA
        title={data.ctas.midCta4.title}
        description={data.ctas.midCta4.description}
        buttonText={data.ctas.midCta4.buttonText}
        buttonLink={data.ctas.midCta4.buttonLink}
        image={midCta4Img}
        theme="dark"
      />

      {/* ── 18. HOW TO SAVE MONEY ON A SOLO CRUISE ── */}
      <CardGrid
        title={data.moneySavingCards.title}
        subtitle={data.moneySavingCards.subtitle}
        cards={data.moneySavingCards.cards}
        columns={4}
      />

      {/* ── 19. VALUE PROPOSITION ── */}
      <BrandShowcase
        brand={{ ...data.worthItBrand, image: valuePropositionImg }}
        index={0}
      />

      {/* ── 20. PROS AND CONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 21. WHO SHOULD CHOOSE SEABOURN VS ALTERNATIVES ── */}
      <ChecklistCards
        data={data.whoShouldChooseChecklist}
      />

      {/* ── 22. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
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
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── 23. FREQUENTLY ASKED QUESTIONS ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything solo travelers need to know before booking a Seabourn cruise.",
          faqs: data.faqs
        }}
      />

      {/* ── 24. FINAL VERDICT ── */}
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

      {/* ── 25. FINAL CTA ── */}
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

export default SeabournSoloTravelers;