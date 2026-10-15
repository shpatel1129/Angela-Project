import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CenterCTA from "../../components/ui/CenterCTA";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CardGrid from "../../components/ui/CardGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
import MistakesGrid from "../../components/ui/MistakesGrid";
import LuxuryCruiseComparisonTable from "../../components/ui/LuxuryCruiseComparisonTable";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";

// Assets
import ScenicBookingCTAImage from "../../assets/ScenicRiverCruises/scenic-ultra-luxury-river-cruising-expert-booking-cta.webp";
import WinterSailingCTAImage from "../../assets/ScenicRiverCruiseDressCode/scenic-river-cruise-winter-sailing-christmas-markets-packing-cta.webp";
import StartPlanningCTAImage from "../../assets/ScenicRiverCruiseDressCode/start-planning-your-luxury-scenic-river-cruise-cta.webp";

// Asset Images (Commented out per request)
// import AboutImage from "../../assets/AboutAngela3.jpeg";
// import HeroImage from "../../assets/ScenicDressCodePacking/scenic-packing-hero.jpg";
// import DiningAttireImage from "../../assets/ScenicDressCodePacking/scenic-dinner-attire.jpg";
// import ExcursionImage from "../../assets/ScenicDressCodePacking/scenic-excursion-shoes.jpg";
// import LuggageImage from "../../assets/ScenicDressCodePacking/scenic-luggage.jpg";
// import ChristmasMarketImage from "../../assets/ScenicDressCodePacking/scenic-christmas-market.jpg";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing/#webpage",
      name: "Scenic River Cruise Dress Code & Packing Guide (2026) | What to Wear",
      url: "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing",
      description:
        "Wondering what to wear on a Scenic River Cruise? Learn the dress code for daytime, evenings, excursions, and discover the ultimate Scenic River Cruise packing list for every season.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing/#article",
      headline: "Scenic River Cruise Dress Code & Packing Guide",
      description:
        "A complete guide to Scenic River Cruise attire and packing, including daytime wear, dinner dress code, seasonal packing tips, and a full packing checklist.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing/#breadcrumb",
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
          name: "Scenic River Cruise Dress Code & Packing Guide",
          item: "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing/#itemlist",
      name: "Scenic River Cruise Dress Code & Packing Guide — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Scenic Dress Code at a Glance" },
        { "@type": "ListItem", position: 3, name: "Is There a Formal Night?" },
        { "@type": "ListItem", position: 4, name: "What to Wear During the Day, Excursions & Dinner" },
        { "@type": "ListItem", position: 5, name: "Seasonal Packing Guide" },
        { "@type": "ListItem", position: 6, name: "Essential Packing Checklist" },
        { "@type": "ListItem", position: 7, name: "Laundry Onboard" },
        { "@type": "ListItem", position: 8, name: "Luggage Tips" },
        { "@type": "ListItem", position: 9, name: "Common Packing Mistakes" },
        { "@type": "ListItem", position: 10, name: "Scenic vs. Ocean Cruise Dress Codes" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 12, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/dress-code-packing/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the dress code on a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic follows a smart casual dress code. Guests typically wear comfortable clothing during the day and slightly dressier attire for dinner.",
          },
        },
        {
          "@type": "Question",
          name: "Are there formal nights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Scenic River Cruises do not have mandatory formal nights.",
          },
        },
        {
          "@type": "Question",
          name: "Can I wear jeans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Neat, dark jeans are generally acceptable during the day and may be suitable for some evening occasions.",
          },
        },
        {
          "@type": "Question",
          name: "What shoes should I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comfortable walking shoes are essential due to cobblestone streets, walking tours, and historic sites.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a jacket for dinner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A jacket is optional. Most men wear collared shirts or polos, while women choose dresses or smart casual separates.",
          },
        },
        {
          "@type": "Question",
          name: "What should I pack for a Christmas Market cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warm clothing including a winter coat, gloves, hat, waterproof boots, scarves, and thermal layers.",
          },
        },
        {
          "@type": "Question",
          name: "Is there laundry service onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Scenic ships offer laundry services, allowing guests to pack fewer clothes for longer itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Should I bring a universal power adapter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A universal adapter is highly recommended for European river cruises.",
          },
        },
        {
          "@type": "Question",
          name: "Can I wear shorts onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Shorts are appropriate during warm-weather daytime activities but are less common at dinner.",
          },
        },
        {
          "@type": "Question",
          name: "How much luggage should I bring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most travelers only need one medium suitcase and one carry-on for a 7 to 10-night Scenic River Cruise.",
          },
        },
        {
          "@type": "Question",
          name: "What shouldn't I pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid packing formal gowns, tuxedos, too many shoes, or bulky clothing that you are unlikely to wear.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can help you choose the right itinerary, explain seasonal weather, provide packing advice, and coordinate every aspect of your trip.",
          },
        },
      ],
    },
  ],
};

export default function ScenicRiverCruiseDressCodePackingGuide() {
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

      {/* ── Section 2: Quick Answer ───────────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.title}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
      />

      {/* ── Section 3: Scenic Dress Code at a Glance ─────────────── */}
      <ComparisonTable data={data.dressCodeGlance} />

      {/* ── Section 4: Is There a Formal Night? ────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.formalNight.eyebrow}
        heading={data.formalNight.title}
        paragraphs={data.formalNight.paragraphs}
        highlights={data.formalNight.highlights}
        badgeTitle={data.formalNight.badgeTitle}
        badgeDescription={data.formalNight.badgeDescription}
      />

      {/* ── Section 5: Inline CTA 1 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
      />

      {/* ── Section 6: What to Wear, Day and Night ─────────────────── */}
      <ThreeColumnGrid
        title={data.whatToWear.title}
        subtitle={data.whatToWear.subtitle}
        items={data.whatToWear.items}
      />

      {/* ── Section 7: Essential Packing Checklist ─────────────────── */}
      <GenericChecklistCards
        title={data.packingChecklist.title}
        subtitle={data.packingChecklist.subtitle}
        cards={data.packingChecklist.cards}
      />

      {/* ── Section 8: Seasonal Packing Guide ─────────────────────── */}
      <CardGrid
        title={data.seasonalPacking.title}
        subtitle={data.seasonalPacking.subtitle}
        cards={data.seasonalPacking.cards}
        columns={4}
        stagger={true}
      />

      {/* ── Section 9: Inline CTA 2 ───────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={WinterSailingCTAImage}
      />

      {/* ── Section 10: Laundry Onboard & Luggage Tips ────────────── */}
      <ProsConsCards
        title={data.laundryAndLuggage.title}
        prosTitle={data.laundryAndLuggage.prosTitle}
        consTitle={data.laundryAndLuggage.consTitle}
        bestFor={data.laundryAndLuggage.bestFor}
        notBestFor={data.laundryAndLuggage.notBestFor}
        bottomNote={data.laundryAndLuggage.bottomNote}
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ── Section 11: Common Packing Mistakes ───────────────────── */}
      <MistakesGrid data={data.commonMistakes} />

      {/* ── Section 12: Scenic vs. Ocean Cruise Dress Codes ────────── */}
      <LuxuryCruiseComparisonTable
        title={data.dressCodeComparison.title}
        headers={data.dressCodeComparison.headers}
        rows={data.dressCodeComparison.rows}
      />

      {/* ── Section 13: Why Book Through a Luxury Travel Advisor? ─── */}
      <AuthorityGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        items={data.whyBookAdvisor.items}
      />

      {/* ── Section 14: Angela Hughes Authority Box ───────────────── */}
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

      {/* ── Section 15: Frequently Asked Questions ────────────────── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle:
            "Everything you need to know about Scenic River Cruise dress code, packing, and laundry.",
          faqs: data.faqs,
        }}
      />

      {/* ── Section 16: Final Verdict & Planning ───────────────────── */}
      <LuxuryIntroSection
        heading={data.finalVerdict.title}
        description={data.finalVerdict.paragraphs.join("\n\n")}
        highlights={data.finalVerdict.sections[0].bullets}
        image={ScenicBookingCTAImage}
      />

      {/* ── Final Center CTA ──────────────────────────────────────── */}
      <CenterCTA
        theme="dark"
        title={data.finalVerdict.ctaText}
        description="Ready to plan your unforgettable Scenic River Cruise? Let Angela Hughes and the Trips & Ships Luxury Travel team design your bespoke journey."
        buttonText="Contact Angela Hughes"
        buttonLink={data.finalVerdict.ctaLink}
        image={StartPlanningCTAImage}
      />
    </div>
  );
}