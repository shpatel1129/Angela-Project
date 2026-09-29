import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import DynamicCulinaryShowcase from "../../components/ui/DynamicCulinaryShowcase";
import DualPhilosophyShowcase from "../../components/ui/DualPhilosophyShowcase";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import SaltJourneyTimeline from "../../components/ui/SaltJourneyTimeline";
import CardGrid from "../../components/ui/CardGrid";
import BrandShowcase from "../../components/ui/BrandShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ChecklistCards from "../../components/ui/ChecklistCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Assets (imported with images commented out as standard)
// import soloHeroImg from "../../assets/SeabournShips/seabourn-encore-modern-luxury-ocean-ship.jpg";
// import diningImg from "../../assets/SeabournShips/seabourn-encore-ovation-solis-specialty-dining.jpg";
// import loungeImg from "../../assets/SeabournShips/seabourn-encore-onboard-luxury-lifestyle-lounge.jpg";
// import suiteImg from "../../assets/SeabournShips/seabourn-ships-luxury-oceanfront-suites-balcony.jpg";

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
        <title>Seabourn Solo Cruises: Single Supplements, Dining & Tips</title>
        <meta
          name="description"
          content="Is Seabourn good for solo travelers? Explore single supplements, solo dining, social opportunities, suites, itineraries and tips for cruising alone."
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/seabourn-cruises/solo-travelers/"
        />
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
        image=""
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
        image1Placeholder="SEABOURN SINGLE SUPPLEMENT"
        image2Placeholder="LUXURY SOLO OCCUPANCY"
      />

      {/* ── 6. CTA 1 (PLANNING SOLO VOYAGE) ── */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
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
      />

      {/* ── 9. SOLO DINING ON SEABOURN ── */}
      <DynamicCulinaryShowcase
        title={data.soloDiningShowcase.title}
        subtitle={data.soloDiningShowcase.subtitle}
        description={data.soloDiningShowcase.description}
        items={data.soloDiningShowcase.items}
        images={[
          // diningImg, // Images commented out as standard
        ]}
      />

      {/* ── 10. CTA 2 (FIND THE RIGHT SUITE) ── */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
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
      />

      {/* ── 13. CTA 3 (DESIGN ITINERARY) ── */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        theme="dark"
      />

      {/* ── 14. INTROVERTS VS EXTROVERTS ── */}
      <ShipPhilosophyFaceoff
        data={data.personalityFaceoff}
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
        theme="light"
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
        brand={data.worthItBrand}
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
        theme="dark"
      />
    </div>
  );
};

export default SeabournSoloTravelers;