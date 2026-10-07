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
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import EditorialShipTour from "../../components/ui/EditorialShipTour";
import CardGrid from "../../components/ui/CardGrid";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#webpage",
      "name": "Riverside Luxury Cruises Review (2026) | Is Riverside Worth It?",
      "url": "https://www.tripsandships.com/riverside-luxury-cruises-reviews",
      "description":
        "Read our Riverside Luxury Cruises review covering ships, suites, dining, itineraries, service, inclusions, pricing, and who should sail. Discover if Riverside Luxury Cruises is the right luxury river cruise for your next European vacation."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#article",
      "headline": "Riverside Luxury Cruises Review | Luxury River Cruise Guide",
      "description":
        "A complete guide to Riverside Luxury Cruises, covering spacious all-suite accommodations, gourmet dining, personalized service, European itineraries, shore excursions, wellness, and more.",
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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#review",
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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#breadcrumb",
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
          "item": "https://www.tripsandships.com/riverside-luxury-cruises"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Riverside Luxury Cruises Reviews",
          "item": "https://www.tripsandships.com/riverside-luxury-cruises-reviews"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#trip",
      "name": "Riverside Luxury Cruises European River Cruise Experience",
      "description":
        "Boutique luxury river cruising with spacious all-suite accommodations, gourmet dining, personalized service, and immersive European itineraries on the Danube, Rhine, Main, and Moselle Rivers.",
      "provider": {
        "@type": "Organization",
        "name": "Riverside Luxury Cruises"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#service",
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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#itemlist",
      "name": "Riverside Luxury Cruises Review — What This Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "What Is Riverside Luxury Cruises?" },
        { "@type": "ListItem", "position": 2, "name": "Elegant All-Suite Accommodations" },
        { "@type": "ListItem", "position": 3, "name": "Dining Experience" },
        { "@type": "ListItem", "position": 4, "name": "Personalized Service" },
        { "@type": "ListItem", "position": 5, "name": "Destinations & Itineraries" },
        { "@type": "ListItem", "position": 6, "name": "Life Onboard" },
        { "@type": "ListItem", "position": 7, "name": "Shore Excursions" },
        { "@type": "ListItem", "position": 8, "name": "Wellness & Relaxation" },
        { "@type": "ListItem", "position": 9, "name": "Who Should Sail Riverside?" },
        { "@type": "ListItem", "position": 10, "name": "Riverside vs. Other Luxury River Cruise Lines" },
        { "@type": "ListItem", "position": 11, "name": "Is Riverside Worth the Price?" },
        { "@type": "ListItem", "position": 12, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-reviews/#faq",
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

const RiversideLuxuryCruisesReviews = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy-950">
      <Helmet>
        <title>
          Riverside Luxury Cruises Review (2026) | Is Riverside Worth It?
        </title>
        <meta
          name="title"
          content="Riverside Luxury Cruises Review | Luxury River Cruise Guide"
        />
        <meta
          name="description"
          content="Read our Riverside Luxury Cruises review covering ships, suites, dining, itineraries, service, inclusions, pricing, and who should sail. Discover if Riverside Luxury Cruises is the right luxury river cruise for your next European vacation."
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/riverside-luxury-cruises-reviews"
        />
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
        secondaryCtaText={data.hero.primaryCtaText}
        secondaryCtaLink={data.hero.primaryCtaLink}
      />

      {/* ── 2. QUICK REVIEW (RATING & PROS/CONS) ── */}
      <ProsConsCards
        title={data.quickReview.title}
        prosTitle={data.quickReview.prosTitle}
        consTitle={data.quickReview.consTitle}
        bestFor={data.quickReview.bestFor}
        notBestFor={data.quickReview.notBestFor}
        bottomNote={data.quickReview.bottomNote}
        bgClass="bg-white"
      />

      {/* ── 3. WHAT IS RIVERSIDE LUXURY CRUISES ── */}
      <EditorialIntroSection
        eyebrow={data.whatIsRiverside.eyebrow}
        title={data.whatIsRiverside.title}
        paragraphs={data.whatIsRiverside.paragraphs}
        highlights={data.whatIsRiverside.highlights}
        placeholderLabel={data.whatIsRiverside.placeholderLabel}
        badgeTitle={data.whatIsRiverside.badgeTitle}
        badgeDescription={data.whatIsRiverside.badgeDescription}
        image={
          // "src/assets/RiversideLuxuryCruises/riverside-lounge-deck.jpg"
          undefined
        }
      />

      {/* ── 4. LIFE ONBOARD & SHORE EXCURSIONS ── */}
      <GenericChecklistCards
        title={data.lifeOnboardAndExcursions.title}
        subtitle={data.lifeOnboardAndExcursions.subtitle}
        cards={data.lifeOnboardAndExcursions.cards}
      />

      {/* ── 5. DINING EXPERIENCE ── */}
      <CulinaryMenuShowcase
        title={data.diningExperience.title}
        subtitle={data.diningExperience.subtitle}
        items={data.diningExperience.items}
        images={[
          // "src/assets/RiversideLuxuryCruises/riverside-gourmet-dining.jpg",
          undefined,
          // "src/assets/RiversideLuxuryCruises/riverside-evening-lounge.jpg",
          undefined,
          // "src/assets/RiversideLuxuryCruises/riverside-danube-vienna.jpg",
          undefined
        ]}
      />

      {/* ── 6. PERSONALIZED SERVICE ── */}
      <ValueShowcase
        title={data.personalizedService.title}
        subtitle={data.personalizedService.subtitle}
        items={data.personalizedService.items}
      />

      {/* ── 7. DESTINATIONS & ITINERARIES (4 RIVERS) ── */}
      <CardGrid
        title={data.destinations.title}
        subtitle={data.destinations.subtitle}
        cards={data.destinations.cards}
        columns={4}
      />

      {/* ── 8. RIVERSIDE VS. OTHER LUXURY RIVER CRUISE LINES ── */}
      <TravelerPersonaCards
        title={data.competitorComparison.title}
        subtitle={data.competitorComparison.subtitle}
        personas={data.competitorComparison.personas}
      />

      {/* ── 9. ELEGANT ALL-SUITE ACCOMMODATIONS ── */}
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
          // "src/assets/RiversideLuxuryCruises/riverside-suite-balcony.jpg"
          undefined
        }
        image2={
          // "src/assets/RiversideLuxuryCruises/riverside-suite-living-area.jpg"
          undefined
        }
      />

      {/* ── 10. WELLNESS & RELAXATION ── */}
      <HighlightsSplit
        title={data.wellness.title}
        items={data.wellness.items}
      />

      {/* ── 11. WHO SHOULD SAIL RIVERSIDE ── */}
      <ProsConsCards
        title={data.whoShouldSail.title}
        prosTitle={data.whoShouldSail.prosTitle}
        consTitle={data.whoShouldSail.consTitle}
        bestFor={data.whoShouldSail.bestFor}
        notBestFor={data.whoShouldSail.notBestFor}
        bottomNote={data.whoShouldSail.bottomNote}
        bgClass="bg-ice-50"
      />

      {/* ── 12. IS RIVERSIDE WORTH THE PRICE ── */}
      <EditorialShipTour
        title={data.worthThePrice.title}
        subtitle={data.worthThePrice.subtitle}
        features={data.worthThePrice.features}
        images={[
          // "src/assets/RiversideLuxuryCruises/riverside-evening-lounge.jpg",
          // "src/assets/RiversideLuxuryCruises/riverside-gourmet-dining.jpg",
          // "src/assets/RiversideLuxuryCruises/riverside-crew-service.jpg"
        ]}
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

export default RiversideLuxuryCruisesReviews;