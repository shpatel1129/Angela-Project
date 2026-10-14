import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import LuxuryScorecardVisual from "../../components/ui/LuxuryScorecardVisual";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import CenterCTA from "../../components/ui/CenterCTA";
import BudgetBreakdownTable from "../../components/ui/BudgetBreakdownTable";
import ScenicGallery from "../../components/ui/ScenicGallery";
import ProsConsCards from "../../components/ui/ProsConsCards";
import LuxuryCruiseComparisonTable from "../../components/ui/LuxuryCruiseComparisonTable";
import ContainedShowdown from "../../components/ui/ContainedShowdown";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";

// Asset Images
import HeroImage from "../../assets/IsSceniRiverCruiseWorthMoney/is-a-scenic-river-cruise-worth-the-money-hero.webp";
import QuickAnswerImage from "../../assets/IsSceniRiverCruiseWorthMoney/is-scenic-river-cruise-worth-it-quick-answer.webp";
import WhyMoreExpensiveImage from "../../assets/IsSceniRiverCruiseWorthMoney/why-is-scenic-river-cruise-more-expensive-value.webp";
import WonderingIfScenicFitsImage from "../../assets/IsSceniRiverCruiseWorthMoney/scenic-river-cruises-travel-style-quote-cta.webp";
import LuxurySuitesImage from "../../assets/IsSceniRiverCruiseWorthMoney/scenic-river-cruise-luxury-suites-accommodations-worth-it.webp";
import AllInclusiveDiningImage from "../../assets/IsSceniRiverCruiseWorthMoney/scenic-river-cruise-all-inclusive-gourmet-dining-review.webp";
import ScenicSpaceShipsImage from "../../assets/IsSceniRiverCruiseWorthMoney/scenic-space-ships-luxury-fleet-value-review.webp";
import ChooseScenicImage from "../../assets/IsSceniRiverCruiseWorthMoney/choose-scenic-river-cruises-luxury-all-inclusive-vs-viking.webp";
import ChooseVikingImage from "../../assets/IsSceniRiverCruiseWorthMoney/choose-viking-river-cruises-comparison-vs-scenic.jpg";
import ThinkingAboutBookingImage from "../../assets/IsSceniRiverCruiseWorthMoney/thinking-about-booking-scenic-river-cruise-luxury-advisor-cta.webp";
import PlanningScenicRiverCruiseImage from "../../assets/IsSceniRiverCruiseWorthMoney/start-planning-your-scenic-river-cruise-luxury-vacation-cta.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#webpage",
      name: "Is a Scenic River Cruise Worth the Money? Honest Review (2026)",
      url: "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it",
      description:
        "Is Scenic River Cruises worth the premium price? Discover the pros, cons, value, what's included, hidden costs, and who should (or shouldn't) book a Scenic River Cruise.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#article",
      headline: "Is Scenic River Cruises Worth It? | Honest Luxury Cruise Review",
      description:
        "An honest review of Scenic River Cruises covering value, pros and cons, what's included, and who gets the most out of booking a Scenic river cruise.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#breadcrumb",
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
          position: 3 ,
          name: "Is a Scenic River Cruise Worth the Money?",
          item: "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#itemlist",
      name: "Is a Scenic River Cruise Worth the Money? — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Is Scenic Worth the Money? The Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Scenic at a Glance" },
        { "@type": "ListItem", position: 3, name: "Why Is Scenic More Expensive?" },
        { "@type": "ListItem", position: 4, name: "What Value Do You Actually Receive?" },
        { "@type": "ListItem", position: 5, name: "Real Value Example" },
        { "@type": "ListItem", position: 6, name: "Scenic Pros" },
        { "@type": "ListItem", position: 7, name: "Scenic Cons" },
        { "@type": "ListItem", position: 8, name: "Who Gets the Best Value?" },
        { "@type": "ListItem", position: 9, name: "Scenic vs. Other Luxury River Cruise Lines" },
        { "@type": "ListItem", position: 10, name: "Is Scenic Better Than Viking?" },
        { "@type": "ListItem", position: 11, name: "Why Booking Through a Luxury Travel Advisor Adds Value" },
        { "@type": "ListItem", position: 12, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Scenic River Cruises worth the money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic offers excellent value for travelers who want a luxury, all-inclusive experience with butler service, premium dining, excursions, and drinks included.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Scenic more expensive than other river cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic includes many amenities—such as gratuities, premium beverages, butler service, airport transfers (on eligible itineraries), and guided excursions—that other cruise lines may charge extra for.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic better than Viking River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic generally offers more luxury inclusions and personalized service, while Viking often appeals to travelers seeking a lower starting price and destination-focused itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Are drinks included on Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Premium wines, beer, spirits, cocktails, soft drinks, coffee, tea, and bottled water are typically included.",
          },
        },
        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenic Freechoice excursions and Scenic Enrich cultural experiences are included on most itineraries.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic a good choice for first-time river cruisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Its all-inclusive approach makes planning easier and reduces unexpected costs during the trip.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenic include gratuities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Onboard gratuities are generally included in the cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "What costs extra on a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Optional spa treatments, travel insurance, personal shopping, some premium experiences, and airfare (unless part of a package) may cost extra.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenic River Cruises good value compared with other luxury brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travelers believe so because Scenic combines luxury accommodations, personalized service, premium beverages, excursions, and gratuities into one comprehensive fare.",
          },
        },
        {
          "@type": "Question",
          name: "Should I book Scenic through a travel advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite, and coordinate flights, hotels, and transfers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest advantage of Scenic River Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Its truly all-inclusive luxury experience. The combination of butler service, gourmet dining, premium beverages, included excursions, and exceptional service provides a seamless vacation with fewer unexpected expenses.",
          },
        },
        {
          "@type": "Question",
          name: "Who should book a Scenic River Cruise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenic is ideal for couples, retirees, luxury travelers, food and wine enthusiasts, and anyone seeking a premium river cruise experience.",
          },
        },
      ],
    },
  ],
};

const IsScenicRiverCruiseWorthTheMoney = () => {
  return (
    <div className="w-full bg-white font-sans antialiased text-navy-950">
      <Helmet>
        <title>Is a Scenic River Cruise Worth the Money? Honest Review</title>
        <meta
          name="title"
          content="Is Scenic River Cruises Worth It? | Honest Luxury Cruise Review"
        />
        <meta
          name="description"
          content="Is Scenic River Cruises worth the premium price? Discover the pros, cons, value, what's included, hidden costs, and who should (or shouldn't) book a Scenic River Cruise."
        />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        backgroundImage={HeroImage}
      />

      {/* ── 2. 60-SECOND QUICK ANSWER ───────────────────────────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        heading={data.quickAnswer.heading}
        paragraphs={data.quickAnswer.paragraphs}
        highlights={data.quickAnswer.highlights}
        ctaText={data.quickAnswer.ctaText}
        ctaLink={data.quickAnswer.ctaLink}
        image1={QuickAnswerImage}
      />

      {/* ── 3. SCENIC AT A GLANCE ───────────────────────────────────── */}
      <LuxuryScorecardVisual
        title={data.glance.title}
        subtitle={data.glance.subtitle}
        items={data.glance.items}
      />

      {/* ── 4. WHY IS SCENIC MORE EXPENSIVE? ────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.whyMoreExpensive.eyebrow}
        heading={data.whyMoreExpensive.heading}
        paragraphs={data.whyMoreExpensive.paragraphs}
        highlights={data.whyMoreExpensive.highlights}
        placeholderLabel={data.whyMoreExpensive.placeholderLabel}
        badgeTitle={data.whyMoreExpensive.badgeTitle}
        badgeDescription={data.whyMoreExpensive.badgeDescription}
        image={WhyMoreExpensiveImage}
      />

      {/* ── 5. WHAT VALUE DO YOU ACTUALLY RECEIVE? ──────────────────── */}
      <FeatureGrid
        title={data.valueFactors.title}
        subtitle={data.valueFactors.subtitle}
        features={data.valueFactors.features}
      />

      {/* ── 6. INLINE CTA 1 ─────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        image={WonderingIfScenicFitsImage}
        theme="dark"
      />

      {/* ── 7. REAL VALUE EXAMPLE ───────────────────────────────────── */}
      <BudgetBreakdownTable data={data.realValueExample} />

      {/* ── 8. WHERE VALUE MEETS LUXURY GALLERY ─────────────────────── */}
      <ScenicGallery
        title={data.gallery.title}
        subtitle={data.gallery.subtitle}
        items={data.gallery.items.map((item, idx) => ({
          ...item,
          image: [LuxurySuitesImage, AllInclusiveDiningImage, ScenicSpaceShipsImage][idx]
        }))}
      />

      {/* ── 9. SCENIC PROS & CONS ───────────────────────────────────── */}
      <ProsConsCards
        title={data.prosAndCons.title}
        prosTitle={data.prosAndCons.prosTitle}
        consTitle={data.prosAndCons.consTitle}
        bestFor={data.prosAndCons.bestFor}
        notBestFor={data.prosAndCons.notBestFor}
        bottomNote={data.prosAndCons.bottomNote}
        type="pros-cons"
        bgClass="bg-ice-50"
      />

      {/* ── 10. WHO GETS THE BEST VALUE? ────────────────────────────── */}
      <ProsConsCards
        title={data.whoGetsBestValue.title}
        prosTitle={data.whoGetsBestValue.prosTitle}
        consTitle={data.whoGetsBestValue.consTitle}
        bestFor={data.whoGetsBestValue.bestFor}
        notBestFor={data.whoGetsBestValue.notBestFor}
        bottomNote={data.whoGetsBestValue.bottomNote}
        type="compare"
        bgClass="bg-white"
      />

      {/* ── 11. SCENIC VS OTHER LUXURY RIVER CRUISE LINES ───────────── */}
      <LuxuryCruiseComparisonTable
        title={data.costComparison.title}
        headers={data.costComparison.headers}
        rows={data.costComparison.rows}
      />

      {/* ── 12. INLINE CTA 2 ────────────────────────────────────────── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        image={ThinkingAboutBookingImage}
        theme="dark"
      />

      {/* ── 13. IS SCENIC BETTER THAN VIKING? ───────────────────────── */}
      <ContainedShowdown
        title={data.scenicVsViking.title}
        brandA={{
          ...data.scenicVsViking.brandA,
          image: ChooseScenicImage
        }}
        brandB={{
          ...data.scenicVsViking.brandB,
          image: ChooseVikingImage
        }}
      />

      {/* ── 14. WHY BOOKING THROUGH A LUXURY TRAVEL ADVISOR ADDS VALUE ─ */}
      <AuthorityGrid
        title={data.travelAdvisor.title}
        subtitle={data.travelAdvisor.subtitle}
        items={data.travelAdvisor.items}
      />

      {/* ── 15. ANGELA HUGHES LUXURY AUTHORITY ──────────────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        authorName={data.angelaHughes.authorName}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.credentials}
        image={AboutImage}
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── 16. FREQUENTLY ASKED QUESTIONS ──────────────────────────── */}
      <FAQAccordion data={data.faqs} />

      {/* ── 17. FINAL VERDICT ───────────────────────────────────────── */}
      <CurvilinearGrid
        title={data.verdict.title}
        subtitle={data.verdict.subtitle}
        paragraphs={data.verdict.paragraphs}
        items={data.verdict.items}
      />

      {/* ── 18. FINAL PLANNING CTA ──────────────────────────────────── */}
      <CenterCTA
        title={data.finalCta.title}
        description={data.finalCta.description}
        buttonText={data.finalCta.buttonText}
        buttonLink={data.finalCta.buttonLink}
        image={PlanningScenicRiverCruiseImage}
        theme="dark"
      />
    </div>
  );
};

export default IsScenicRiverCruiseWorthTheMoney;