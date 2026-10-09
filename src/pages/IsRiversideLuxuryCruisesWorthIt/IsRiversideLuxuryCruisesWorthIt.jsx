import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ProsConsCards from "../../components/ui/ProsConsCards";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CulinaryMenuShowcase from "../../components/ui/CulinaryMenuShowcase";
import ValueShowcase from "../../components/ui/ValueShowcase";
import CinematicDestinations from "../../components/ui/CinematicDestinations";
import CardGrid from "../../components/ui/CardGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import ExpertReviewVerdict from "../../components/ui/ExpertReviewVerdict";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "logo": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp"
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com/",
      "description":
        "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences."
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      "name": "Angela Hughes",
      "jobTitle": "CEO of Trips & Ships Luxury Travel",
      "description":
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#webpage",
      "name": "Is Riverside Luxury Cruises Worth It? | Honest Luxury River Cruise Review",
      "url": "https://www.tripsandships.com/is-riverside-worth-it",
      "description":
        "Is Riverside Luxury Cruises worth the price? Discover what makes Riverside different, what's included, who should sail, pricing, pros and cons, and whether it's the right luxury river cruise for you."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#article",
      "headline": "Is Riverside Luxury Cruises Worth It? | Riverside Luxury Cruises Review",
      "description":
        "An honest look at Riverside Luxury Cruises, covering spacious suites, gourmet dining, personalized service, European itineraries, pros and cons, and how it compares to other luxury river cruise lines.",
      "author": {
        "@type": "Person",
        "name": "Angela Hughes"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#review",
      "itemReviewed": {
        "@type": "TouristTrip",
        "name": "Riverside Luxury Cruises"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Angela Hughes"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#breadcrumb",
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
          "name": "River Cruise Guides",
          "item": "https://www.tripsandships.com/riverside-luxury-cruises-ultimate-guide"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Riverside Luxury Cruises Reviews",
          "item": "https://www.tripsandships.com/riverside-luxury-cruises-reviews"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Is Riverside Worth It?",
          "item": "https://www.tripsandships.com/is-riverside-worth-it"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#trip",
      "name": "Riverside Luxury Cruises European River Cruise Experience",
      "description":
        "Boutique luxury river cruising with spacious suite accommodations, gourmet dining, personalized service, and immersive European itineraries on the Danube, Rhine, Rhône, Main, and Moselle Rivers.",
      "provider": {
        "@type": "Organization",
        "name": "Riverside Luxury Cruises"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#service",
      "serviceType": "Luxury River Cruise Vacation Planning",
      "provider": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel"
      },
      "areaServed": "Worldwide",
      "description":
        "Personalized planning for Riverside Luxury Cruises sailings, including itinerary selection, suite recommendations, and exclusive promotions."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#itemlist",
      "name": "Is Riverside Luxury Cruises Worth It? — What This Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Quick Answer" },
        { "@type": "ListItem", "position": 2, "name": "What Makes Riverside Different?" },
        { "@type": "ListItem", "position": 3, "name": "What Is Included?" },
        { "@type": "ListItem", "position": 4, "name": "Exceptional Dining" },
        { "@type": "ListItem", "position": 5, "name": "Personalized Service" },
        { "@type": "ListItem", "position": 6, "name": "Beautiful European Itineraries" },
        { "@type": "ListItem", "position": 7, "name": "Pros & Cons of Riverside Luxury Cruises" },
        { "@type": "ListItem", "position": 8, "name": "Spacious Suites That Stand Out" },
        { "@type": "ListItem", "position": 9, "name": "Who Should Sail Riverside?" },
        { "@type": "ListItem", "position": 10, "name": "Riverside vs. Other Luxury River Cruise Lines" },
        { "@type": "ListItem", "position": 11, "name": "Is Riverside Worth the Price?" },
        { "@type": "ListItem", "position": 12, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/is-riverside-worth-it/#faq",
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

const IsRiversideLuxuryCruisesWorthIt = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy-950">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── NAVBAR ── */}
      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink || "/contact"}
      />

      {/* ── 2. QUICK ANSWER ── */}
      <div id="quick-answer">
        <ProsConsCards
          title={data.quickAnswer.title}
          prosTitle={data.quickAnswer.prosTitle}
          consTitle={data.quickAnswer.consTitle}
          bestFor={data.quickAnswer.bestFor}
          notBestFor={data.quickAnswer.notBestFor}
          bottomNote={data.quickAnswer.bottomNote}
          type="compare"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ── 3. WHAT MAKES RIVERSIDE DIFFERENT? ── */}
      <EditorialIntroSection
        eyebrow={data.whatMakesDifferent.eyebrow}
        title={data.whatMakesDifferent.title}
        paragraphs={data.whatMakesDifferent.paragraphs}
        highlights={data.whatMakesDifferent.highlights}
        placeholderLabel={data.whatMakesDifferent.placeholderLabel}
        badgeTitle={data.whatMakesDifferent.badgeTitle}
        badgeDescription={data.whatMakesDifferent.badgeDescription}
        image={
          // "src/assets/IsRiversideWorthIt/riverside-lounge-deck.jpg"
          undefined
        }
      />

      {/* ── 4. WHAT IS INCLUDED? ── */}
      <GenericChecklistCards
        title={data.whatIsIncluded.title}
        subtitle={data.whatIsIncluded.subtitle}
        cards={data.whatIsIncluded.cards}
      />

      {/* ── 5. EXCEPTIONAL DINING ── */}
      <CulinaryMenuShowcase
        title={data.diningExperience.title}
        subtitle={data.diningExperience.subtitle}
        items={data.diningExperience.items}
        images={[
          // "src/assets/IsRiversideWorthIt/riverside-gourmet-dining.jpg",
          undefined,
          // "src/assets/IsRiversideWorthIt/riverside-evening-lounge.jpg",
          undefined
        ]}
      />

      {/* ── 6. PERSONALIZED SERVICE ── */}
      <ValueShowcase
        title={data.personalizedService.title}
        subtitle={data.personalizedService.subtitle}
        items={data.personalizedService.items.map((item) => ({
          ...item,
          image: [
            // "src/assets/IsRiversideWorthIt/riverside-crew-service.jpg"
          ][0]
        }))}
      />

      {/* ── 7. BEAUTIFUL EUROPEAN ITINERARIES (5 RIVERS) ── */}
      <CinematicDestinations
        title={data.destinationsItineraries.title}
        subtitle={data.destinationsItineraries.subtitle}
        items={data.destinationsItineraries.cards.map((item, idx) => ({
          ...item,
          image: [
            // "src/assets/IsRiversideWorthIt/riverside-danube.jpg",
            // "src/assets/IsRiversideWorthIt/riverside-rhine.jpg",
            // "src/assets/IsRiversideWorthIt/riverside-rhone.jpg",
            // "src/assets/IsRiversideWorthIt/riverside-main.jpg",
            // "src/assets/IsRiversideWorthIt/riverside-moselle.jpg"
          ][idx]
        }))}
      />

      {/* ── 8. RIVERSIDE VS. OTHER LUXURY RIVER CRUISE LINES ── */}
      <CardGrid
        title={data.comparisonWithOtherLines.title}
        subtitle={data.comparisonWithOtherLines.subtitle}
        cards={data.comparisonWithOtherLines.cards}
        columns={4}
      />

      {/* ── 9. SPACIOUS SUITES THAT STAND OUT ── */}
      <AsymmetricStoryIntro
        eyebrow={data.accommodations.eyebrow}
        title={data.accommodations.title}
        subtitle={data.accommodations.subtitle}
        paragraphs={data.accommodations.paragraphs}
        highlights={data.accommodations.highlights}
        image1Placeholder={data.accommodations.image1Placeholder}
        image2Placeholder={data.accommodations.image2Placeholder}
        ctaText={data.accommodations.ctaText}
        ctaLink={data.accommodations.ctaLink}
        image1={
          // "src/assets/IsRiversideWorthIt/riverside-suite-balcony.jpg"
          undefined
        }
        image2={
          // "src/assets/IsRiversideWorthIt/riverside-suite-living-area.jpg"
          undefined
        }
      />

      {/* ── 10. PROS & CONS OF RIVERSIDE LUXURY CRUISES ── */}
      <ProsConsCards
        title={data.prosAndCons.title}
        prosTitle={data.prosAndCons.prosTitle}
        consTitle={data.prosAndCons.consTitle}
        bestFor={data.prosAndCons.bestFor}
        notBestFor={data.prosAndCons.notBestFor}
        bottomNote={data.prosAndCons.bottomNote}
        type="pros-cons"
        bgClass="bg-white"
      />

      {/* ── 11. WHO WILL LOVE RIVERSIDE? ── */}
      <ProsConsCards
        title={data.whoShouldSail.title}
        prosTitle={data.whoShouldSail.prosTitle}
        consTitle={data.whoShouldSail.consTitle}
        bestFor={data.whoShouldSail.bestFor}
        notBestFor={data.whoShouldSail.notBestFor}
        bottomNote={data.whoShouldSail.bottomNote}
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ── 12. IS RIVERSIDE WORTH THE PRICE? (EXPERT VERDICT) ── */}
      <ExpertReviewVerdict
        title={data.isWorthPrice.title}
        prosTitle={data.isWorthPrice.prosTitle}
        pros={data.isWorthPrice.bestFor}
        consTitle={data.isWorthPrice.consTitle}
        cons={data.isWorthPrice.notBestFor}
      />

      {/* ── 13. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ── */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        cards={data.whyBookAdvisor.items}
        columns={3}
      />

      {/* ── 14. ANGELA HUGHES AUTHORITY BOX ── */}
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

      {/* ── 15. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything travelers need to know about Riverside Luxury Cruises before booking their next European river cruise.",
          faqs: data.faqs
        }}
      />

      {/* ── 16. FINAL VERDICT / CONCLUSION ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              `Our luxury planning services include: ${data.finalVerdict.planningServices.join(", ")}.`
            ]
          }
        ]}
      />

      {/* ── 17. FINAL CTA ── */}
      <CenterCTA
        title={data.finalVerdict.title}
        description={data.finalVerdict.paragraphs[0]}
        buttonText={data.finalVerdict.ctaText}
        buttonLink={data.finalVerdict.ctaLink}
        theme="dark"
      />
    </div>
  );
};

export default IsRiversideLuxuryCruisesWorthIt;