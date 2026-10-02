import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";

// Assets from SeabournOffers (SEO-optimized filenames)
import heroBgImg from "../../../assets/Seabourn/SeabournOffers/seabourn-offers-club-benefits-luxury-hero.jpg";
import whatAreOffersImg from "../../../assets/Seabourn/SeabournOffers/what-are-seabourn-offers-editorial.jpg";
import midCta1Img from "../../../assets/Seabourn/SeabournOffers/compare-your-seabourn-offer-options-cta.jpg";
import onboardCredit1Img from "../../../assets/Seabourn/SeabournOffers/what-can-onboard-credit-be-used-for.jpg";
import onboardCredit2Img from "../../../assets/Seabourn/SeabournOffers/essential-questions-before-choosing-onboard-credit.jpg";
import seabournClubImg from "../../../assets/Seabourn/SeabournOffers/seabourn-club-the-loyalty-program.jpg";
import midCta2Img from "../../../assets/Seabourn/SeabournOffers/check-your-seabourn-club-status-cta.jpg";
import groupOppImg from "../../../assets/Seabourn/SeabournOffers/seabourn-group-opportunities.jpg";
import familyGroupImg from "../../../assets/Seabourn/SeabournOffers/seabourn-for-families-and-groups.jpg";
import bookingEarlyImg from "../../../assets/Seabourn/SeabournOffers/booking-early-vs-waiting-for-deals.jpg";
import longerVoyagesImg from "../../../assets/Seabourn/SeabournOffers/seabourn-longer-voyages-grand-voyages-offers.jpg";
import expeditionImg from "../../../assets/Seabourn/SeabournOffers/seabourn-expedition-voyages-offers.jpg";
import worldCruisesImg from "../../../assets/Seabourn/SeabournOffers/seabourn-world-cruises-grand-explorations-offers.jpg";
import shoulderSeasonImg from "../../../assets/Seabourn/SeabournOffers/seabourn-shoulder-season-itineraries-offers.jpg";
import repeatCruisesImg from "../../../assets/Seabourn/SeabournOffers/repeat-seabourn-cruises-loyalty-offers.jpg";
import holidaySailingsImg from "../../../assets/Seabourn/SeabournOffers/seabourn-holiday-festive-sailings-offers.jpg";
import midCta3Img from "../../../assets/Seabourn/SeabournOffers/explore-group-cruise-opportunities-cta.jpg";
import advisorDirectVsAgentImg from "../../../assets/Seabourn/SeabournOffers/should-you-book-seabourn-directly-vs-advisor.jpg";
import whyBookTripsShipsImg from "../../../assets/Seabourn/SeabournOffers/why-book-seabourn-offers-with-trips-and-ships.jpg";
import finalCtaImg from "../../../assets/Seabourn/SeabournOffers/start-planning-your-seabourn-cruise-cta.jpg";

import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import LuxuryCruiseComparisonTable from "../../../components/ui/LuxuryCruiseComparisonTable";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import InclusionCheckerGrid from "../../../components/ui/InclusionCheckerGrid";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import ValueShowcase from "../../../components/ui/ValueShowcase";
import FeatureGrid from "../../../components/ui/FeatureGrid";
import BrandPillarsShowcase from "../../../components/ui/BrandPillarsShowcase";
import OpulentTabbedExperience from "../../../components/ui/OpulentTabbedExperience";
import CardGrid from "../../../components/ui/CardGrid";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import TravelerPersonaCards from "../../../components/ui/TravelerPersonaCards";
import SaltJourneyTimeline from "../../../components/ui/SaltJourneyTimeline";
import EditorialMistakes from "../../../components/ui/EditorialMistakes";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournOffersLoyaltySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/",
      "name": "Seabourn Offers & Seabourn Club Benefits: 2026 Guide",
      "headline": "Seabourn Offers and Seabourn Club Benefits",
      "description":
        "Explore Seabourn offers, promotions, onboard credits and Seabourn Club benefits. Learn how past guests can save, earn loyalty rewards and maximize cruise value.",
      "keywords": [
        "Seabourn offers",
        "Seabourn deals",
        "Seabourn promotions",
        "Seabourn cruise deals",
        "Seabourn Club",
        "Seabourn Club benefits",
        "Seabourn loyalty program",
        "Seabourn onboard credit",
        "Seabourn past guest benefits",
        "Seabourn Club levels",
        "Seabourn cruise discounts",
        "Seabourn special offers",
        "Seabourn group rates",
        "Seabourn loyalty benefits",
        "Seabourn Club rewards",
        "Seabourn savings"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": { "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#breadcrumb" },
      "mainEntity": { "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#guide" },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Cruises", "item": "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Offers & Loyalty", "item": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/" }
      ]
    },
    {
      "@type": "Thing",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#guide",
      "name": "Seabourn Offers and Seabourn Club Benefits",
      "description":
        "A guide to Seabourn promotions, cruise deals, onboard credit, past-guest opportunities, Seabourn Club loyalty benefits, group opportunities and strategies for maximizing the overall value of a Seabourn booking.",
      "url": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/",
      "brand": { "@type": "Brand", "name": "Seabourn" },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Promotional Opportunities", "value": "Reduced cruise fares, onboard credit, special pricing, added-value amenities, past-guest opportunities and suite-specific incentives" },
        { "@type": "PropertyValue", "name": "Loyalty Program", "value": "Seabourn Club" },
        { "@type": "PropertyValue", "name": "Onboard Credit", "value": "May be included with qualifying promotional offers and can apply to eligible onboard expenses" },
        { "@type": "PropertyValue", "name": "Past-Guest Benefits", "value": "Previous Seabourn guests may have access to special offers and loyalty opportunities" },
        { "@type": "PropertyValue", "name": "Group Opportunities", "value": "Potential special pricing or amenities for qualifying groups" },
        { "@type": "PropertyValue", "name": "Best Booking Strategy", "value": "Compare fare, promotion, onboard credit, loyalty benefits, suite, itinerary and advisor amenities" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#opportunities",
      "name": "Seabourn Offer and Savings Opportunities",
      "description": "Key opportunities travelers can evaluate when looking for Seabourn cruise value.",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Current Seabourn Promotions", "description": "Promotional savings or added-value benefits available on selected voyages." },
        { "@type": "ListItem", "position": 2, "name": "Past-Guest Offers", "description": "Special opportunities that may be available to previous Seabourn guests." },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Club", "description": "Loyalty recognition and benefits for repeat Seabourn travelers." },
        { "@type": "ListItem", "position": 4, "name": "Onboard Credit", "description": "Credit that may be used toward eligible onboard expenses depending on the promotion terms." },
        { "@type": "ListItem", "position": 5, "name": "Group Opportunities", "description": "Potential special pricing or amenities for families, friends, organizations and other qualifying groups." },
        { "@type": "ListItem", "position": 6, "name": "Travel Advisor Offers", "description": "Potential additional amenities or preferred opportunities available through a luxury travel advisor." },
        { "@type": "ListItem", "position": 7, "name": "Early Booking", "description": "Early planning can provide better access to popular suites, departure dates and high-demand itineraries." },
        { "@type": "ListItem", "position": 8, "name": "Longer Voyages", "description": "Extended voyages may provide additional value through promotions and included experiences." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#loyalty-benefits",
      "name": "Seabourn Club Benefits",
      "description": "Types of recognition and benefits associated with Seabourn Club and repeat travel.",
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Future Cruise Planning", "description": "Opportunities related to planning future Seabourn voyages." },
        { "@type": "ListItem", "position": 2, "name": "Special Events", "description": "Potential access to special events associated with Seabourn loyalty." },
        { "@type": "ListItem", "position": 3, "name": "Loyalty Recognition", "description": "Recognition of repeat Seabourn guests." },
        { "@type": "ListItem", "position": 4, "name": "Savings Opportunities", "description": "Potential savings opportunities depending on Seabourn Club status and current program terms." },
        { "@type": "ListItem", "position": 5, "name": "Onboard Privileges", "description": "Potential onboard privileges associated with applicable loyalty status." },
        { "@type": "ListItem", "position": 6, "name": "Priority or Preferred Opportunities", "description": "Priority or preferred opportunities may be available depending on loyalty level and current program terms." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#suite-promotions",
      "name": "Seabourn Suite Promotion Categories",
      "description": "Suite categories that may have different promotional pricing or incentives.",
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Veranda Suites", "description": "Promotional pricing may vary for Veranda Suites." },
        { "@type": "ListItem", "position": 2, "name": "Penthouse Suites", "description": "Promotional pricing may vary for Penthouse Suites." },
        { "@type": "ListItem", "position": 3, "name": "Wintergarden Suites", "description": "Promotional pricing may vary for Wintergarden Suites." },
        { "@type": "ListItem", "position": 4, "name": "Signature Suites", "description": "Promotional pricing may vary for Signature Suites." },
        { "@type": "ListItem", "position": 5, "name": "Expedition Suites", "description": "Promotional pricing may vary for expedition suites." },
        { "@type": "ListItem", "position": 6, "name": "Higher-Category Accommodations", "description": "Higher-category Seabourn accommodations may have different promotional incentives." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#value-strategy",
      "name": "How to Maximize Seabourn Value",
      "description": "Six-step strategy for evaluating Seabourn offers and overall booking value.",
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Choose the Right Itinerary", "description": "Start with the destination and travel dates." },
        { "@type": "ListItem", "position": 2, "name": "Choose the Right Ship", "description": "Decide whether an ocean ship or expedition vessel is the better fit." },
        { "@type": "ListItem", "position": 3, "name": "Select the Right Suite", "description": "Consider suite location, size, veranda and amenities." },
        { "@type": "ListItem", "position": 4, "name": "Check Current Promotions", "description": "Look for applicable Seabourn offers and compare their terms." },
        { "@type": "ListItem", "position": 5, "name": "Check Seabourn Club Status", "description": "Confirm loyalty benefits and past-guest opportunities before booking." },
        { "@type": "ListItem", "position": 6, "name": "Compare Complete Value", "description": "Evaluate fare, onboard credit, loyalty benefits, suite, itinerary and advisor amenities rather than the advertised discount alone." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/offers-loyalty/#faq",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }
  ]
};

const SeabournOffersLoyaltyGuide = () => {
  const advisorFeatures = [
    {
      ...data.advisorAndTripsShips.items[0],
      image: advisorDirectVsAgentImg
    },
    {
      ...data.advisorAndTripsShips.items[1],
      image: whyBookTripsShipsImg
    }
  ];

  return (
    <div className="w-full bg-white text-navy-950 font-sans antialiased">
      <Helmet>
        <title>Seabourn Offers & Seabourn Club Benefits: 2026 Guide</title>
        <meta name="title" content="Seabourn Offers, Deals & Seabourn Club Benefits" />
        <meta
          name="description"
          content="Explore Seabourn offers, promotions, onboard credits and Seabourn Club benefits. Learn how past guests can save, earn loyalty rewards and maximize cruise value."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/offers-loyalty/" />
        <script type="application/ld+json">{JSON.stringify(seabournOffersLoyaltySchema)}</script>
      </Helmet>

      <Nav />

      {/* 1. HERO SECTION */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.intro || data.hero.description}
        badge={data.hero.badge || "SEABOURN OFFERS & LOYALTY GUIDE"}
        secondaryCtaText={data.hero.ctaText || data.hero.secondaryCtaText || "Explore Current Seabourn Offers"}
        secondaryCtaLink={data.hero.ctaLink || data.hero.secondaryCtaLink || "/contact"}
        backgroundImage={heroBgImg}
      />

      <div id="content">
        {/* 3. WHAT ARE SEABOURN OFFERS? */}
        <EditorialIntroSection
          badge={data.whatAreOffers.badge}
          title={data.whatAreOffers.title}
          subtitle={data.whatAreOffers.subtitle}
          paragraphs={data.whatAreOffers.paragraphs}
          image={whatAreOffersImg}
        />
      </div>

       {/* 2. QUICK GUIDE AT A GLANCE TABLE */}
      <LuxuryCruiseComparisonTable
        title={data.quickGuideTable.title}
        headers={data.quickGuideTable.headers}
        rows={data.quickGuideTable.rows}
      />

      {/* 4. HOW TO FIND CURRENT PROMOTIONS */}
      <CardGrid
        title={data.findPromotions.title}
        subtitle={data.findPromotions.subtitle}
        cards={data.findPromotions.cards}
        columns={3}
      />

      {/* 5. SEABOURN CRUISE DEALS: WHAT TO COMPARE (OPTION 1 VS OPTION 2) */}
      <ProsConsCards
        title={data.dealsComparison.title}
        prosTitle={data.dealsComparison.regent.title}
        consTitle={data.dealsComparison.viking.title}
        bestFor={data.dealsComparison.regent.features}
        notBestFor={data.dealsComparison.viking.features}
        bottomNote={data.dealsComparison.bottomNote}
        type="compare"
      />

      {/* 6. CTA 1 */}
      <CenterCTA
        title={data.ctas.midCta1.title}
        description={data.ctas.midCta1.description}
        buttonText={data.ctas.midCta1.buttonText}
        buttonLink={data.ctas.midCta1.buttonLink}
        image={midCta1Img}
        theme="dark"
      />

      {/* 7. SEABOURN ONBOARD CREDIT (ELIGIBLE EXPENSES & ESSENTIAL QUESTIONS) */}
      <LuxuryFeatureShowcase
        title={data.onboardCredit.title}
        subtitle={data.onboardCredit.subtitle}
        items={data.onboardCredit.items.map((item, idx) => ({
          ...item,
          image: [onboardCredit1Img, onboardCredit2Img][idx]
        }))}
      />

      {/* 8. SEABOURN CLUB: THE LOYALTY PROGRAM */}
      <EditorialIntroSection
        badge={data.seabournClubIntro.badge}
        title={data.seabournClubIntro.title}
        paragraphs={data.seabournClubIntro.paragraphs}
        image={seabournClubImg}
      />

      {/* 9. WHAT ARE SEABOURN CLUB BENEFITS? */}
      <FeatureGrid
        title={data.clubBenefits.title}
        subtitle={data.clubBenefits.subtitle}
        features={data.clubBenefits.features}
      />

      {/* 10. LOYALTY LEVELS & WHY CLUB MATTERS FOR REPEAT GUESTS */}
      <GenericChecklistCards
        title={data.loyaltyLevelsAndWhy.title}
        subtitle={data.loyaltyLevelsAndWhy.subtitle}
        cards={data.loyaltyLevelsAndWhy.cards}
      />

      {/* 11. CTA 2 */}
      <CenterCTA
        title={data.ctas.midCta2.title}
        description={data.ctas.midCta2.description}
        buttonText={data.ctas.midCta2.buttonText}
        buttonLink={data.ctas.midCta2.buttonLink}
        image={midCta2Img}
        theme="dark"
      />

      {/* ── VIDEO SECTION ── */}
      <VideoEmbed
        data={{
          youtubeId: "_ZExnvHXfpE",
          title: "Experience Seabourn Luxury Cruise Offers & Loyalty",
          description: "Discover how to maximize value with Seabourn Club loyalty benefits, special promotional offers, and personalized travel advisor perks."
        }}
      />

      {/* 12. CAN SEABOURN OFFERS BE COMBINED? */}
      <BrandPillarsShowcase
        data={data.combineOffers}
      />

      {/* 13. SEABOURN OFFERS VS LOWEST FARE (OPTION A VS OPTION B) */}
      <InclusionCheckerGrid
        eyebrow="Offer Analysis"
        title={data.offersVsLowestFare.title}
        subtitle={data.offersVsLowestFare.bottomNote}
        inclusionsTitle={data.offersVsLowestFare.regent.title}
        exclusionsTitle={data.offersVsLowestFare.viking.title}
        inclusions={data.offersVsLowestFare.regent.features}
        exclusions={data.offersVsLowestFare.viking.features}
      />

      {/* 14. SEABOURN SUITE PROMOTIONS */}
      <TravelerPersonaCards
        title={data.suitePromotions.title}
        subtitle={data.suitePromotions.subtitle}
        personas={data.suitePromotions.personas}
      />

      {/* 15. SEABOURN GROUP OPPORTUNITIES & FAMILIES */}
      <ThreeColumnGrid
        title={data.groupOpportunities.title}
        subtitle={data.groupOpportunities.subtitle}
        items={data.groupOpportunities.items?.map((item, idx) => ({
          ...item,
          image: [groupOppImg, familyGroupImg, bookingEarlyImg][idx],
          category: item.category || item.badge,
          description: item.description || item.text,
          features: item.features || item.list,
        }))}
      />

      {/* 16. WHEN ARE SEABOURN OFFERS MOST IMPORTANT? (OPULENT TABBED EXPERIENCE) */}
      <OpulentTabbedExperience
        title={data.whenOffersMatter.title}
        subtitle={data.whenOffersMatter.subtitle}
        tabs={data.whenOffersMatter.items.map((item, idx) => ({
          title: item.title,
          shortDesc: item.description,
          description: item.description,
          highlight: item.title,
          category: "KEY PLANNING MOMENTS",
          image: [
            longerVoyagesImg,
            expeditionImg,
            worldCruisesImg,
            shoulderSeasonImg,
            repeatCruisesImg,
            holidaySailingsImg,
          ][idx]
        }))}
      />

      {/* 17. CTA 3 */}
      <CenterCTA
        title={data.ctas.midCta3.title}
        description={data.ctas.midCta3.description}
        buttonText={data.ctas.midCta3.buttonText}
        buttonLink={data.ctas.midCta3.buttonLink}
        image={midCta3Img}
        theme="dark"
      />

      {/* 18. HOW A LUXURY TRAVEL ADVISOR HELPS & WHY BOOK WITH TRIPS & SHIPS */}
      <ValueShowcase
        title={data.advisorAndTripsShips.title}
        subtitle={data.advisorAndTripsShips.subtitle}
        items={advisorFeatures}
      />

      {/* 19. HOW TO MAXIMIZE YOUR SEABOURN VALUE (6-STEP TIMELINE) */}
      <SaltJourneyTimeline
        data={data.maximizeSteps}
      />

      {/* 20. SEABOURN OFFERS: WHAT TO ASK BEFORE BOOKING */}
      <CardGrid
        title={data.askBeforeBooking.title}
        subtitle={data.askBeforeBooking.subtitle}
        columns={3}
        stagger={false}
        cards={data.askBeforeBooking.items?.map((item) => ({
          ...item,
          icon: item.icon || "BadgePercent",
          bullets: item.bullets || item.features || item.list,
        }))}
      />

      {/* 21. OFFERS VS SEABOURN CLUB BENEFITS TABLE */}
      <LuxuryCruiseComparisonTable
        title={data.offersVsClubTable.title}
        headers={data.offersVsClubTable.headers}
        rows={data.offersVsClubTable.rows}
      />

      {/* 22. COMMON SEABOURN OFFER MISTAKES TO AVOID */}
      <EditorialMistakes
        mistakes={data.commonMistakes.mistakes}
        subtitle={data.commonMistakes.subtitle}
      />

      {/* 23. ANGELA HUGHES AUTHORITY BOX */}
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

      {/* 24. FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything travelers need to know about Seabourn offers and Seabourn Club benefits.",
          faqs: data.faqs
        }}
      />

      {/* 25. FINAL RECOMMENDATION & VERDICT */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              data.finalVerdict.recommendation
            ]
          }
        ]}
      />

      {/* 26. FINAL CTA */}
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

export default SeabournOffersLoyaltyGuide;