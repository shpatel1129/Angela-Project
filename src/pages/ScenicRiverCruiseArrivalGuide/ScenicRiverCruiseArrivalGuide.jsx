import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import InclusionsList from "../../components/ui/InclusionsList";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CenterCTA from "../../components/ui/CenterCTA";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import FeatureSplit from "../../components/ui/FeatureSplit";
import ComparisonTable from "../../components/ui/ComparisonTable";
import DestinationFlipCards from "../../components/ui/DestinationFlipCards";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import MistakesGrid from "../../components/ui/MistakesGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";

// Assets
import GettingAroundCTAImage from "../../assets/ScenicRiverCruiseArrivalGuide/getting-around-scenic-river-cruise-excursions-transportation-cta.webp";
import StartPlanningCTAImage from "../../assets/ScenicRiverCruiseArrivalGuide/start-planning-scenic-river-cruise-airfare-transfers-cta.webp";

// Asset Images (Commented out per request)
// import AboutImage from "../../assets/AboutAngla.jpeg";
// import HeroImage from "../../assets/ScenicAirfareTransfers/scenic-airfare-hero.jpg";
// import TransferImage from "../../assets/ScenicAirfareTransfers/scenic-airport-transfer.jpg";
// import EmbarkationImage from "../../assets/ScenicAirfareTransfers/scenic-embarkation.jpg";
// import LuggageImage from "../../assets/ScenicAirfareTransfers/scenic-luggage-assist.jpg";

// Embarkation City Images (Commented out per request)
// import AmsterdamImg from "../../assets/ScenicRiverCruises/scenic-rhine-river-cruise-castles-vineyards.webp";
// import BaselImg from "../../assets/ScenicRiverCruises/scenic-space-ships-luxury-fleet-overview.webp";
// import BudapestImg from "../../assets/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";
// import ViennaImg from "../../assets/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";
// import ParisImg from "../../assets/ScenicRiverCruises/scenic-seine-river-cruise-paris-normandy.webp";
// import PortoImg from "../../assets/ScenicRiverCruises/scenic-douro-river-cruise-portugal-valley.webp";
// import LyonImg from "../../assets/ScenicRiverCruises/scenic-rhone-river-cruise-provence-france.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers/#webpage",
      name: "Scenic River Cruise Airfare, Transfers & Arrival Guide (2026) | Flights & Transportation",
      url: "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers",
      description:
        "Planning your Scenic River Cruise? Learn about airfare, airport transfers, arrival times, pre-cruise hotels, embarkation, luggage, and expert travel tips for a stress-free vacation.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers/#article",
      headline: "Scenic River Cruise Airfare, Transfers & Arrival Guide",
      description:
        "A complete guide to Scenic River Cruise airfare, airport transfers, embarkation, and arrival planning, including whether flights are included, when to arrive, and what to expect on embarkation and departure day.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers/#breadcrumb",
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
          name: "Scenic River Cruise Airfare, Transfers & Arrival Guide",
          item: "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers/#itemlist",
      name: "Scenic River Cruise Airfare, Transfers & Arrival Guide What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "60-Second Answer" },
        { "@type": "ListItem", position: 2, name: "Does Scenic Include Airfare?" },
        { "@type": "ListItem", position: 3, name: "Are Airport Transfers Included?" },
        { "@type": "ListItem", position: 4, name: "Should You Book Flights Through Scenic?" },
        { "@type": "ListItem", position: 5, name: "Pre-Cruise Hotels & Luggage Handling" },
        { "@type": "ListItem", position: 6, name: "When Should You Arrive?" },
        { "@type": "ListItem", position: 7, name: "Embarkation Day vs. Departure Day" },
        { "@type": "ListItem", position: 8, name: "Popular Embarkation Cities" },
        { "@type": "ListItem", position: 9, name: "Transportation During Your Cruise & Flight Delays" },
        { "@type": "ListItem", position: 10, name: "Airfare & Transfer Tips" },
        { "@type": "ListItem", position: 11, name: "Common Travel Mistakes" },
        { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 13, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/airfare-transfers/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is airfare included with Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually no. Airfare is generally separate unless included in a special promotion or customized vacation package.",
          },
        },
        {
          "@type": "Question",
          name: "Are airport transfers included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Scenic itineraries include airport transfers under certain booking conditions. Check your confirmation documents for eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "Should I arrive the day before my cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Arriving one day before embarkation helps avoid stress caused by flight delays or missed connections.",
          },
        },
        {
          "@type": "Question",
          name: "Can Scenic book my flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic may assist with air arrangements as part of selected packages or promotions. Your travel advisor can also help coordinate flights.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if my flight is delayed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact Scenic or your travel advisor immediately. Travel insurance and arriving early are the best ways to minimize disruption.",
          },
        },
        {
          "@type": "Question",
          name: "Are luggage transfers included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic staff typically assist with luggage during embarkation and disembarkation.",
          },
        },
        {
          "@type": "Question",
          name: "Should I stay in a hotel before my cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most experienced travelers recommend staying at least one night before embarkation, particularly after international flights.",
          },
        },
        {
          "@type": "Question",
          name: "When should I book my flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking several months in advance often provides the best combination of pricing and flight availability.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book my own airfare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many guests choose to book independently using airline loyalty programs or preferred carriers.",
          },
        },
        {
          "@type": "Question",
          name: "Should I purchase travel insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travel insurance is strongly recommended to protect against unexpected delays, cancellations, medical emergencies, and lost luggage.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I book my return flight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid scheduling very early departures. Allow sufficient time after disembarkation for transfers, airport security, and check-in.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use a travel advisor for flights and transfers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can coordinate flights, hotels, airport transfers, and your Scenic cruise into one seamless itinerary.",
          },
        },
      ],
    },
  ],
};

export default function ScenicRiverCruiseArrivalGuide() {
  // const cityImages = {
  //   Amsterdam: AmsterdamImg,
  //   Basel: BaselImg,
  //   Budapest: BudapestImg,
  //   Vienna: ViennaImg,
  //   Paris: ParisImg,
  //   Porto: PortoImg,
  //   Lyon: LyonImg,
  // };

  const embarkationCityItems = data.embarkationCities.cards.map((item) => ({
    ...item,
    // image: cityImages[item.title],
  }));

  return (
    <div className="w-full bg-white text-navy-950 font-sans antialiased">
      {/* ── SEO Helmet ─────────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.title}</title>
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

      {/* ── Section 2: 60-Second Quick Answer ─────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.title}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
      />

      {/* ── Section 3: Does Scenic Include Airfare? ─────────────────── */}
      <InclusionsList
        title={data.airfareInclusions.title}
        inclusions={data.airfareInclusions.inclusions}
        expertNote={data.airfareInclusions.expertNote}
      />

      {/* ── Section 4: Are Airport Transfers Included? ─────────────── */}
      <EditorialIntroSection
        eyebrow={data.airportTransfers.eyebrow}
        heading={data.airportTransfers.title}
        paragraphs={data.airportTransfers.paragraphs}
        highlights={data.airportTransfers.highlights}
        badgeTitle={data.airportTransfers.badgeTitle}
        badgeDescription={data.airportTransfers.badgeDescription}
      />

      {/* ── Section 5: Inline CTA 1 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
      />

      {/* ── Section 6: Should You Book Flights Through Scenic? ─────── */}
      <ThreeColumnGrid
        title={data.bookingFlights.title}
        subtitle={data.bookingFlights.subtitle}
        items={data.bookingFlights.items}
      />

      {/* ── Section 7: Pre-Cruise Hotels & Luggage Handling ─────────── */}
      <GenericChecklistCards
        title={data.hotelsAndLuggage.title}
        subtitle={data.hotelsAndLuggage.subtitle}
        cards={data.hotelsAndLuggage.cards}
      />

      {/* ── Section 8: When Should You Arrive? ─────────────────────── */}
      <FeatureSplit
        theme={data.whenToArrive.theme}
        imagePosition={data.whenToArrive.imagePosition}
        title={data.whenToArrive.title}
        subtitles={data.whenToArrive.subtitles}
        features={data.whenToArrive.features}
        summary={data.whenToArrive.summary}
        ctaText={data.whenToArrive.ctaText}
        ctaLink={data.whenToArrive.ctaLink}
      />

      {/* ── Section 9: Embarkation Day vs. Departure Day ───────────── */}
      <ComparisonTable data={data.embarkationVsDeparture} />

      {/* ── Section 10: Popular Embarkation Cities ─────────────────── */}
      <DestinationFlipCards
        title={data.embarkationCities.title}
        subtitle={data.embarkationCities.subtitle}
        items={embarkationCityItems}
      />

      {/* ── Section 11: Inline CTA 2 ──────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={GettingAroundCTAImage}
      />

      {/* ── Section 12: Transit & Flight Delay Protocols ──────────── */}
      <ProsConsCards
        title={data.transitAndDelays.title}
        prosTitle={data.transitAndDelays.prosTitle}
        consTitle={data.transitAndDelays.consTitle}
        bestFor={data.transitAndDelays.bestFor}
        notBestFor={data.transitAndDelays.notBestFor}
        bottomNote={data.transitAndDelays.bottomNote}
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ── Section 13: Airfare & Transfer Tips ───────────────────── */}
      <ExpertAuthorityChecklist
        title={data.airfareTransferTips.title}
        subtitle={data.airfareTransferTips.subtitle}
        points={data.airfareTransferTips.points}
      />

      {/* ── Section 14: Common Travel Mistakes ────────────────────── */}
      <MistakesGrid data={data.commonMistakes} />

      {/* ── Section 15: Why Book Through a Luxury Travel Advisor? ─── */}
      <AuthorityGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        items={data.whyBookAdvisor.items}
      />

      {/* ── Section 16: Angela Hughes Authority Credentials ───────── */}
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

      {/* ── Section 17: Frequently Asked Questions ────────────────── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle:
            "Everything travelers need to know about airfare, transfers, and arrival before their Scenic River Cruise.",
          faqs: data.faqs,
        }}
      />

      {/* ── Section 18: Final Verdict & Planning ───────────────────── */}
      <LuxuryIntroSection
        heading={data.finalVerdict.title}
        description={data.finalVerdict.paragraphs.join("\n\n")}
        highlights={data.finalVerdict.sections[0].bullets}
      />

      {/* ── Section 19: Final Center CTA ──────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.finalVerdict.ctaText}
        description="Ready to plan your unforgettable Scenic River Cruise? Let Angela Hughes and the Trips & Ships Luxury Travel team coordinate your flights, transfers, and cruise itinerary."
        buttonText="Contact Angela Hughes"
        buttonLink={data.finalVerdict.ctaLink}
        image={StartPlanningCTAImage}
      />
    </div>
  );
}