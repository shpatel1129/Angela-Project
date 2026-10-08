import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CulinaryMenuShowcase from "../../components/ui/CulinaryMenuShowcase";
import ValueShowcase from "../../components/ui/ValueShowcase";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CardGrid from "../../components/ui/CardGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
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
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#webpage",
      "name": "Riverside Ravel Review | Is Riverside Ravel Worth It?",
      "url": "https://www.tripsandships.com/riverside-ravel-review",
      "description":
        "Read our Riverside Ravel review covering suites, dining, service, itineraries, onboard experience, pricing, and who should sail this luxury Rhine river ship before you book."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#article",
      "headline": "Riverside Ravel Review | Luxury Rhine River Cruise Guide",
      "description":
        "A complete guide to Riverside Ravel, covering spacious suites, gourmet dining, personalized service, Rhine itineraries, shore excursions, wellness, and more.",
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
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#review",
      "itemReviewed": {
        "@type": "TouristTrip",
        "name": "Riverside Ravel"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
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
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#breadcrumb",
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
          "item": "https://www.tripsandships.com/river-cruise-guides"
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
          "name": "Riverside Ravel Review",
          "item": "https://www.tripsandships.com/riverside-ravel-review"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#trip",
      "name": "Riverside Ravel Rhine River Cruise Experience",
      "description":
        "Boutique luxury river cruising aboard Riverside Ravel, an elegant and intimate ship featuring spacious accommodations, gourmet dining, personalized service, and immersive Rhine River itineraries through Germany, France, Switzerland, and the Netherlands.",
      "provider": {
        "@type": "Organization",
        "name": "Riverside Luxury Cruises"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#service",
      "serviceType": "Luxury River Cruise Vacation Planning",
      "provider": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel"
      },
      "areaServed": "Worldwide",
      "description":
        "Personalized planning for Riverside Ravel sailings, including itinerary selection, suite recommendations, and exclusive promotions."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#itemlist",
      "name": "Riverside Ravel Review — What This Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Overview of Riverside Ravel" },
        { "@type": "ListItem", "position": 2, "name": "Suites & Accommodations" },
        { "@type": "ListItem", "position": 3, "name": "Dining Experience" },
        { "@type": "ListItem", "position": 4, "name": "Service & Hospitality" },
        { "@type": "ListItem", "position": 5, "name": "Rhine Itineraries" },
        { "@type": "ListItem", "position": 6, "name": "Life Onboard" },
        { "@type": "ListItem", "position": 7, "name": "Shore Excursions" },
        { "@type": "ListItem", "position": 8, "name": "Public Spaces" },
        { "@type": "ListItem", "position": 9, "name": "Fitness & Wellness" },
        { "@type": "ListItem", "position": 10, "name": "Who Should Sail Riverside Ravel?" },
        { "@type": "ListItem", "position": 11, "name": "Is Riverside Ravel Worth It?" },
        { "@type": "ListItem", "position": 12, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-ravel-review/#faq",
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

const RiversideRavelReview = () => {
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
        secondaryCtaText={data.hero.primaryCtaText}
        secondaryCtaLink={data.hero.primaryCtaLink}
      />

      {/* ── 2. QUICK REVIEW (RATING & TABLE) ── */}
      <div id="quick-review">
        <ComparisonTable data={data.quickReviewTable} />
      </div>

      {/* ── 3. OVERVIEW OF RIVERSIDE RAVEL ── */}
      <EditorialIntroSection
        eyebrow={data.overview.eyebrow}
        title={data.overview.title}
        paragraphs={data.overview.paragraphs}
        highlights={data.overview.highlights}
        placeholderLabel={data.overview.placeholderLabel}
        badgeTitle={data.overview.badgeTitle}
        badgeDescription={data.overview.badgeDescription}
        image={
          // "src/assets/RiversideRavelReview/riverside-ravel-observation-lounge.jpg"
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
          // "src/assets/RiversideRavelReview/riverside-ravel-gourmet-dining.jpg",
          undefined,
          // "src/assets/RiversideRavelReview/riverside-ravel-evening-lounge.jpg",
          undefined
        ]}
      />

      {/* ── 6. SERVICE & HOSPITALITY ── */}
      <ValueShowcase
        title={data.serviceHospitality.title}
        subtitle={data.serviceHospitality.subtitle}
        items={data.serviceHospitality.items.map((item) => ({
          ...item,
          image: [
            // "src/assets/RiversideRavelReview/riverside-ravel-crew-service.jpg"
          ][0]
        }))}
      />

      {/* ── 7. RHINE RIVER ITINERARIES (6 PORTS) ── */}
      <CardGrid
        title={data.rhineItineraries.title}
        subtitle={data.rhineItineraries.subtitle}
        cards={data.rhineItineraries.cards}
        columns={3}
      />

      {/* ── 8. PUBLIC SPACES ── */}
      <CardGrid
        title={data.publicSpaces.title}
        subtitle={data.publicSpaces.subtitle}
        cards={data.publicSpaces.cards}
        columns={4}
      />

      {/* ── 9. SUITES & ACCOMMODATIONS ── */}
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
          // "src/assets/RiversideRavelReview/riverside-ravel-suite-balcony.jpg"
          undefined
        }
        image2={
          // "src/assets/RiversideRavelReview/riverside-ravel-suite-living-area.jpg"
          undefined
        }
      />

      {/* ── 10. WHO SHOULD SAIL RIVERSIDE RAVEL ── */}
      <ProsConsCards
        title={data.whoShouldSail.title}
        prosTitle={data.whoShouldSail.prosTitle}
        consTitle={data.whoShouldSail.consTitle}
        bestFor={data.whoShouldSail.bestFor}
        notBestFor={data.whoShouldSail.notBestFor}
        bottomNote={data.whoShouldSail.bottomNote}
        type="compare"
        bgClass="bg-white"
      />

      {/* ── 11. IS RIVERSIDE RAVEL WORTH IT (EXPERT VERDICT) ── */}
      <ExpertReviewVerdict
        title={data.isWorthIt.title}
        prosTitle={data.isWorthIt.prosTitle}
        pros={data.isWorthIt.bestFor}
        consTitle={data.isWorthIt.consTitle}
        cons={data.isWorthIt.notBestFor}
        bottomNote={data.isWorthIt.bottomNote}
      />

      {/* ── 12. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ── */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        cards={data.whyBookAdvisor.items}
        columns={3}
      />

      {/* ── 13. ANGELA HUGHES AUTHORITY BOX ── */}
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

      {/* ── 14. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything travelers need to know about Riverside Ravel before booking their next European river cruise.",
          faqs: data.faqs
        }}
      />

      {/* ── 15. FINAL VERDICT / CONCLUSION ── */}
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

      {/* ── 16. FINAL CTA ── */}
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

export default RiversideRavelReview;