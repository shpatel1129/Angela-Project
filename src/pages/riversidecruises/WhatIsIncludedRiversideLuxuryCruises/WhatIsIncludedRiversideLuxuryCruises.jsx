import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import ValueShowcase from "../../../components/ui/ValueShowcase";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import CardGrid from "../../../components/ui/CardGrid";
import CinematicDestinations from "../../../components/ui/CinematicDestinations";
import CulinaryMenuShowcase from "../../../components/ui/CulinaryMenuShowcase";
import ExpertReviewVerdict from "../../../components/ui/ExpertReviewVerdict";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";

// Image Assets
import HeroImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/hero-what-is-included.webp";
import SuiteBedroomImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-suite-balcony.webp";
import SuiteLivingAreaImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-suite-living-area.webp";
import BeveragesIncludedImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-beverages-included.webp";
import DanubeRiverImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-danube-vienna.webp";
import RhineRiverImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-rhine-vineyards.webp";
import RhoneRiverImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-rhone-provence.webp";
import MoselleRiverImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-moselle-vineyards.webp";
import ServiceHospitalityImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-crew-service.webp";
import DiningBreakfastLunchImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-gourmet-dining.webp";
import DiningDinnerImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-dinner-dining.webp";
import FinalCTAImage from "../../../assets/riversidecruises/WhatIsIncludedRiversideLuxuryCruises/riverside-final-cta.webp";

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
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#webpage",
      "name": "What Is Included on Riverside Luxury Cruises? | Complete Guide",
      "url": "https://www.tripsandships.com/what-is-included-on-riverside",
      "description":
        "Discover what's included on Riverside Luxury Cruises, from spacious suites and gourmet dining to beverages, Wi-Fi, excursions, and personalized service. Learn exactly what to expect before you book."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#article",
      "headline": "What Is Included on Riverside Luxury Cruises?",
      "description":
        "A complete guide to everything included on a Riverside Luxury Cruises vacation, covering accommodations, dining, beverages, Wi-Fi, excursions, service, amenities, and what typically costs extra.",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#breadcrumb",
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
          "name": "What Is Included on Riverside",
          "item": "https://www.tripsandships.com/what-is-included-on-riverside"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#trip",
      "name": "Riverside Luxury Cruises European River Cruise Experience",
      "description":
        "Boutique luxury river cruising with spacious suite accommodations, gourmet dining, beverages with meals, Wi-Fi, personalized service, and guided shore excursions on the Danube, Rhine, Rhône, Main, and Moselle Rivers.",
      "provider": {
        "@type": "Organization",
        "name": "Riverside Luxury Cruises"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#service",
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
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#itemlist",
      "name": "What Is Included on Riverside Luxury Cruises? — What This Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Quick Answer" },
        { "@type": "ListItem", "position": 2, "name": "Luxury Suite Accommodations" },
        { "@type": "ListItem", "position": 3, "name": "Gourmet Dining Throughout Your Cruise" },
        { "@type": "ListItem", "position": 4, "name": "Beverages Included" },
        { "@type": "ListItem", "position": 5, "name": "Complimentary Wi-Fi" },
        { "@type": "ListItem", "position": 6, "name": "Shore Excursions" },
        { "@type": "ListItem", "position": 7, "name": "Personalized Service" },
        { "@type": "ListItem", "position": 8, "name": "Onboard Amenities & Evening Entertainment" },
        { "@type": "ListItem", "position": 9, "name": "Wellness & Fitness" },
        { "@type": "ListItem", "position": 10, "name": "Destinations You'll Explore" },
        { "@type": "ListItem", "position": 11, "name": "What's Usually Not Included?" },
        { "@type": "ListItem", "position": 12, "name": "Is Riverside All-Inclusive?" },
        { "@type": "ListItem", "position": 13, "name": "Who Gets the Most Value?" },
        { "@type": "ListItem", "position": 14, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#faq",
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

const WhatIsIncludedRiversideLuxuryCruises = () => {
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
        backgroundImage={HeroImage}
        imageAlt="What Is Included on Riverside Luxury Cruises Guide"
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

      {/* ── 3. LUXURY SUITE ACCOMMODATIONS ── */}
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
        image1={SuiteBedroomImage}
        image2={SuiteLivingAreaImage}
      />

      {/* ── 4. WHAT'S INCLUDED ONBOARD (WI-FI & WELLNESS) ── */}
      <GenericChecklistCards
        title={data.onboardAmenities.title}
        subtitle={data.onboardAmenities.subtitle}
        cards={data.onboardAmenities.cards}
      />

      {/* ── 5. BEVERAGES INCLUDED ── */}
      <ValueShowcase
        title={data.beveragesIncluded.title}
        subtitle={data.beveragesIncluded.subtitle}
        items={data.beveragesIncluded.items.map((item, idx) => ({
          ...item,
          image: [
            BeveragesIncludedImage
          ][idx]
        }))}
      />

      {/* ── 6. SHORE EXCURSIONS ── */}
      <CardGrid
        title={data.shoreExcursions.title}
        subtitle={data.shoreExcursions.subtitle}
        cards={data.shoreExcursions.cards}
        columns={3}
      />

      {/* ── 7. DESTINATIONS YOU'LL EXPLORE ── */}
      <CinematicDestinations
        title={data.destinationsExplored.title}
        subtitle={data.destinationsExplored.subtitle}
        items={data.destinationsExplored.items.map((item, idx) => ({
          ...item,
          image: [
            DanubeRiverImage,
            RhineRiverImage,
            RhoneRiverImage,
            MoselleRiverImage
          ][idx]
        }))}
      />

      {/* ── 8. PERSONALIZED SERVICE ── */}
      <LuxuryFeatureShowcase
        title={data.personalizedService.title}
        subtitle={data.personalizedService.subtitle}
        items={data.personalizedService.items.map((item, idx) => ({
          ...item,
          image: [
            ServiceHospitalityImage
          ][idx]
        }))}
      />

      {/* ── 9. ONBOARD AMENITIES & EVENING ENTERTAINMENT ── */}
      <GenericChecklistCards
        title={data.amenitiesAndEntertainment.title}
        subtitle={data.amenitiesAndEntertainment.subtitle}
        cards={data.amenitiesAndEntertainment.cards}
      />

      {/* ── 10. GOURMET DINING THROUGHOUT YOUR CRUISE ── */}
      <CulinaryMenuShowcase
        title={data.gourmetDining.title}
        subtitle={data.gourmetDining.subtitle}
        items={data.gourmetDining.items}
        images={[
          DiningBreakfastLunchImage,
          DiningDinnerImage
        ]}
      />

      {/* ── 11. WHAT'S USUALLY NOT INCLUDED? ── */}
      <ProsConsCards
        title={data.whatsNotIncluded.title}
        prosTitle={data.whatsNotIncluded.prosTitle}
        consTitle={data.whatsNotIncluded.consTitle}
        bestFor={data.whatsNotIncluded.bestFor}
        notBestFor={data.whatsNotIncluded.notBestFor}
        bottomNote={data.whatsNotIncluded.bottomNote}
        type="pros-cons"
        bgClass="bg-slate-50"
      />

      {/* ── 12. IS RIVERSIDE ALL-INCLUSIVE? ── */}
      <ExpertReviewVerdict
        title={data.isAllInclusive.title}
        prosTitle={data.isAllInclusive.prosTitle}
        pros={data.isAllInclusive.bestFor}
        consTitle={data.isAllInclusive.consTitle}
        cons={data.isAllInclusive.notBestFor}
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
          subtitle: "Everything travelers need to know about what's included on Riverside Luxury Cruises before booking their next European river cruise.",
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
        image={FinalCTAImage}
        theme="dark"
      />
    </div>
  );
};

export default WhatIsIncludedRiversideLuxuryCruises;