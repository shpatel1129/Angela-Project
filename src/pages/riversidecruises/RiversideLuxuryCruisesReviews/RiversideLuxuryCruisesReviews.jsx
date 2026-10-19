import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import CulinaryMenuShowcase from "../../../components/ui/CulinaryMenuShowcase";
import ValueShowcase from "../../../components/ui/ValueShowcase";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import HighlightsSplit from "../../../components/ui/HighlightsSplit";
import EditorialShipTour from "../../../components/ui/EditorialShipTour";
import CardGrid from "../../../components/ui/CardGrid";
import TravelerPersonaCards from "../../../components/ui/TravelerPersonaCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";

// Asset Images
import HeroImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-luxury-fleet-panoramic-river-cruise-ship-exterior-panoramic-view.webp";
import WhatIsRiversideImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-luxury-fleet-observation-deck-panoramic-riverfront.webp";
import DiningMultiCourseImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-mozart-gourmet-dining-fine-dining-multi-course-dinner.webp";
import DiningWineSelectionImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-mozart-cocktails-sommelier-fine-wine-selection.webp";
import DiningBistroCafeImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-mozart-artisan-bistro-cafe-espresso.webp";
import ButlerServiceImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-luxury-cruise-couple-butler-served-in-suite-breakfast.webp";
import MasterSuiteBalconyImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-debussy-master-suite-king-bedroom-french-balcony.webp";
import MarbleBathroomImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-debussy-marble-ensuite-bathroom-luxury-amenities.webp";
import WellnessFitnessImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-debussy-wellness-gym-fitness-studio.webp";
import ScenicRelaxationImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-luxury-cruise-couple-sundeck-shaded-canopy-relaxation.webp";
import PenthouseSuiteSalonImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-mozart-luxurious-penthouse-suite-living-salon.webp";
import GourmetEntreeImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-mozart-gourmet-dining-waterside-restaurant-gourmet-entree.webp";
import WatersideTerraceImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-luxury-fleet-waterside-terrace-river-navigation.webp";
import FinalCTAImage from "../../../assets/riversidecruises/RiversideLuxuryCruisesReviews/riverside-luxury-fleet-evening-illuminated-river-cruise-vessel.webp";

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
          "item": "https://www.tripsandships.com/riverside-luxury-cruises-ultimate-guide"
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
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink || "/contact"}
        backgroundImage={HeroImage}
        imageAlt="Riverside Luxury Cruises Review"
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
        image={WhatIsRiversideImage}
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
          DiningMultiCourseImage,
          DiningWineSelectionImage,
          DiningBistroCafeImage
        ]}
      />

      {/* ── 6. PERSONALIZED SERVICE ── */}
      <ValueShowcase
        title={data.personalizedService.title}
        subtitle={data.personalizedService.subtitle}
        items={data.personalizedService.items.map((item, idx) => ({
          ...item,
          image: [ButlerServiceImage][idx]
        }))}
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
        image1={MasterSuiteBalconyImage}
        image2={MarbleBathroomImage}
      />

      {/* ── 10. WELLNESS & RELAXATION ── */}
      <HighlightsSplit
        title={data.wellness.title}
        items={data.wellness.items.map((item, idx) => ({
          ...item,
          image: [WellnessFitnessImage, ScenicRelaxationImage][idx]
        }))}
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
          PenthouseSuiteSalonImage,
          GourmetEntreeImage,
          WatersideTerraceImage
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
        image={FinalCTAImage}
        theme="dark"
      />
    </div>
  );
};

export default RiversideLuxuryCruisesReviews;