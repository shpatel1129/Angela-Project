import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import InclusionsList from "../../../components/ui/InclusionsList";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import CenterCTA from "../../../components/ui/CenterCTA";
import AlternatingRiverShowcase from "../../../components/ui/AlternatingRiverShowcase";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import ExpertAuthorityChecklist from "../../../components/ui/ExpertAuthorityChecklist";
import TravelerPersonaCards from "../../../components/ui/TravelerPersonaCards";
import MistakesGrid from "../../../components/ui/MistakesGrid";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import LuxuryIntroSection from "../../../components/ui/LuxuryIntroSection";

// Asset Images (Commented out per request)
// import AboutImage from "../../../assets/AboutAngela.jpeg";
// import HeroImage from "../../../assets/ScenicRiverCruises/ScenicSoloTravel/scenic-solo-hero.jpg";
// import SoloDiningImage from "../../../assets/ScenicRiverCruises/ScenicSoloTravel/scenic-solo-dining.jpg";
// import BalconySuiteImage from "../../../assets/ScenicRiverCruises/ScenicSoloTravel/scenic-balcony-suite.jpg";
// import ExcursionImage from "../../../assets/ScenicRiverCruises/ScenicSoloTravel/scenic-solo-excursion.jpg";

// Itinerary Images (Commented out per request)
// import RhineImg from "../../../assets/ScenicRiverCruises/ScenicRiverCruises/scenic-rhine-river-cruise-castles-vineyards.webp";
// import DanubeImg from "../../../assets/ScenicRiverCruises/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";
// import RhoneImg from "../../../assets/ScenicRiverCruises/ScenicRiverCruises/scenic-rhone-river-cruise-provence-france.webp";
// import DouroImg from "../../../assets/ScenicRiverCruises/ScenicRiverCruises/scenic-douro-river-cruise-portugal-valley.webp";

// const itineraryImages = {
//   "Rhine River — Best Overall": RhineImg,
//   "Danube River — Perfect for Culture": DanubeImg,
//   "Rhône River — Ideal for Food & Wine": RhoneImg,
//   "Douro River — Best for Relaxation": DouroImg,
// };

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      description:
        "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#webpage",
      name: "Scenic Solo River Cruises & Single Supplement Guide (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/solo-travel",
      description:
        "Thinking about taking a Scenic River Cruise alone? Learn about solo travel, single supplements, cabin options, safety, costs, and tips for booking the best Scenic solo cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#article",
      headline: "Scenic Solo River Cruises & Single Supplement Guide",
      description:
        "A complete guide to solo travel on Scenic River Cruises, including single supplements, cabin recommendations, best itineraries, safety, dining, and money-saving tips.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scenic River Cruises",
          item: "https://www.tripsandships.com/scenic-river-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scenic Solo River Cruises & Single Supplement Guide",
          item: "https://www.tripsandships.com/scenic-river-cruises/solo-travel",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#itemlist",
      name: "Scenic Solo River Cruises & Single Supplement Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Is Scenic Good for Solo Travelers?" },
        { "@type": "ListItem", position: 3, name: "What Is a Single Supplement?" },
        { "@type": "ListItem", position: 4, name: "How to Save Money as a Solo Traveler" },
        { "@type": "ListItem", position: 5, name: "Best Scenic Itineraries for Solo Travelers" },
        { "@type": "ListItem", position: 6, name: "Dining & Excursions for Solo Travelers" },
        { "@type": "ListItem", position: 7, name: "Which Cabin Should Solo Travelers Choose?" },
        { "@type": "ListItem", position: 8, name: "Is Scenic Safe for Solo Travelers?" },
        { "@type": "ListItem", position: 9, name: "Who Should Take a Solo Scenic Cruise?" },
        { "@type": "ListItem", position: 10, name: "Common Solo Travel Mistakes" },
        { "@type": "ListItem", position: 11, name: "Scenic vs. Other River Cruise Lines for Solo Travelers" },
        { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 13, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/solo-travel/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Scenic good for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic's small ships, personalized service, and included excursions make it an excellent option for solo travelers.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenic charge a single supplement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually yes. Most solo travelers pay a single supplement because cabins are designed for double occupancy.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenic ever waive the single supplement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic occasionally offers reduced or waived single supplements on select sailings and promotional departures.",
          },
        },
        {
          "@type": "Question",
          name: "Which Scenic itinerary is best for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Rhine and Danube are excellent choices thanks to their popular itineraries, cultural attractions, and welcoming onboard atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "Will I feel awkward dining alone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Scenic offers flexible dining and many solo travelers naturally meet others during meals and excursions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic safe for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guided excursions, organized transportation, secure ships, and experienced staff provide a comfortable and safe travel experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which cabin should a solo traveler choose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Balcony Suite offers excellent comfort and Scenic's signature Sun Lounge, while a Standard Suite is a more budget-friendly option.",
          },
        },
        {
          "@type": "Question",
          name: "Can a travel advisor help me find solo promotions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxury travel advisors often know about reduced single supplement offers and can help you compare available departures.",
          },
        },
        {
          "@type": "Question",
          name: "Should I arrive before embarkation day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Arriving at least one day early helps reduce stress caused by international flight delays.",
          },
        },
        {
          "@type": "Question",
          name: "Are excursions included for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic's included Scenic Freechoice excursions and Scenic Enrich experiences are available to all guests.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic better than an ocean cruise for solo travelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers prefer Scenic because of its smaller ships, easier social atmosphere, and destination-focused experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book my Scenic solo cruise through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A travel advisor can help you compare itineraries, identify solo promotions, coordinate travel arrangements, and maximize the value of your cruise.",
          },
        },
      ],
    },
  ],
};

const ScenicSoloRiverCruises = () => {
  const soloRivers = data.soloItineraries.cards.map((item) => ({
    name: item.title,
    description: item.description,
    bestFor: item.bestFor,
    highlights: item.highlights || item.bullets,
    // image: itineraryImages[item.title],
  }));

  return (
    <div className="w-full bg-white text-navy-950 font-sans antialiased">
      {/* ── SEO Helmet ─────────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── Global Navigation ──────────────────────────────────────── */}
      <Nav />

      {/* ── Section 1: Hero ───────────────────────────────────────── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        badge={data.hero.badge}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
      />

      {/* ── Section 2: Quick Answer ───────────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.title}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
      />

      {/* ── Section 3: Is Scenic Good for Solo Travelers? ─────────── */}
      <EditorialIntroSection
        eyebrow={data.isScenicGoodSolo.eyebrow}
        heading={data.isScenicGoodSolo.heading}
        paragraphs={data.isScenicGoodSolo.paragraphs}
        highlights={data.isScenicGoodSolo.highlights}
        badgeTitle={data.isScenicGoodSolo.badgeTitle}
        badgeDescription={data.isScenicGoodSolo.badgeDescription}
      />

      {/* ── Section 4: What Is a Single Supplement? ───────────────── */}
      <InclusionsList
        title={data.singleSupplement.title}
        inclusions={data.singleSupplement.inclusions}
        expertNote={data.singleSupplement.expertNote}
      />

      {/* ── Section 5: How to Save Money as a Solo Traveler ───────── */}
      <GenericChecklistCards
        title={data.howToSaveMoney.title}
        subtitle={data.howToSaveMoney.subtitle}
        cards={data.howToSaveMoney.cards}
      />

      {/* ── Section 6: Inline CTA 1 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
      />

      {/* ── Section 7: Best Scenic Itineraries for Solo Travelers ─── */}
      <AlternatingRiverShowcase
        title={data.soloItineraries.title}
        description={data.soloItineraries.subtitle}
        rivers={soloRivers}
      />

      {/* ── Section 8: Dining & Excursions for Solo Travelers ──────── */}
      <ProsConsCards
        title={data.diningAndExcursions.title}
        prosTitle={data.diningAndExcursions.prosTitle}
        consTitle={data.diningAndExcursions.consTitle}
        bestFor={data.diningAndExcursions.bestFor}
        notBestFor={data.diningAndExcursions.notBestFor}
        bottomNote={data.diningAndExcursions.bottomNote}
        type={data.diningAndExcursions.type}
        bgClass={data.diningAndExcursions.bgClass}
      />

      {/* ── Section 9: Which Cabin Should Solo Travelers Choose? ──── */}
      <CabinFeatureGrid
        data={data.cabinChoice}
      />

      {/* ── Section 10: Inline CTA 2 ──────────────────────────────── */}
      <CenterCTA
        theme="light"
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
      />

      {/* ── Section 11: Is Scenic Safe for Solo Travelers? ────────── */}
      <ExpertAuthorityChecklist
        title={data.isScenicSafe.title}
        subtitle={data.isScenicSafe.subtitle}
        points={data.isScenicSafe.points}
      />

      {/* ── Section 12: Who Should Take a Solo Scenic Cruise? ──────── */}
      <TravelerPersonaCards
        title={data.whoShouldGo.title}
        subtitle={data.whoShouldGo.subtitle}
        personas={data.whoShouldGo.personas}
      />

      {/* ── Section 13: Common Solo Travel Mistakes ───────────────── */}
      <MistakesGrid data={data.commonMistakes} />

      {/* ── Section 14: Inline CTA 3 ──────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
      />

      {/* ── Section 15: Scenic vs. Other Cruise Lines ─────────────── */}
      <ComparisonTable data={data.cruiseLineComparison} />

      {/* ── Section 16: Why Book Through a Luxury Travel Advisor? ─── */}
      <AuthorityGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        items={data.whyBookAdvisor.items}
      />

      {/* ── Section 17: Angela Hughes Authority Credentials ───────── */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={data.angelaHughes.title}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        authoritySubtitle={data.angelaHughes.authoritySubtitle}
        experienceBadge={data.angelaHughes.experienceBadge}
        credentials={data.angelaHughes.credentials}
        quote={data.angelaHughes.quote}
        quoteSubtitle={data.angelaHughes.quoteSubtitle}
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── Section 18: Frequently Asked Questions ────────────────── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle:
            "Everything solo travelers need to know before booking a Scenic River Cruise.",
          faqs: data.faqs,
        }}
      />

      {/* ── Section 19: Final Verdict ─────────────────────────────── */}
      <LuxuryIntroSection
        heading={data.finalVerdict.title}
        description={data.finalVerdict.paragraphs.join("\n\n")}
        highlights={data.finalVerdict.sections[0].bullets}
      />

      {/* ── Section 20: Final Center CTA ──────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.finalVerdict.ctaText}
        description="Ready to plan your unforgettable Scenic River Cruise? Let Angela Hughes and the Trips & Ships Luxury Travel team find the best single supplement promotions and coordinate your journey."
        buttonText="Contact Angela Hughes"
        buttonLink={data.finalVerdict.ctaLink}
      />
    </div>
  );
};

export default ScenicSoloRiverCruises;