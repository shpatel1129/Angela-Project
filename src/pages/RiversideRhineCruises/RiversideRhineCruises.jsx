import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import CardGrid from "../../components/ui/CardGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CinematicDestinations from "../../components/ui/CinematicDestinations";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import ValueShowcase from "../../components/ui/ValueShowcase";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
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
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#webpage",
      "name": "Riverside Rhine Cruises | Luxury Rhine River Cruise Guide",
      "url": "https://www.tripsandships.com/riverside-rhine-cruises",
      "description":
        "Explore Riverside Rhine Cruises through Germany, France, Switzerland, and the Netherlands. Discover castles, vineyards, charming villages, luxury suites, gourmet dining, and personalized service."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#article",
      "headline": "Riverside Rhine Cruises | Luxury European River Cruises",
      "description":
        "A complete guide to Riverside Rhine Cruises, covering destinations, the Riverside Ravel, accommodations, dining, excursions, and whether a Riverside Rhine Cruise is worth booking.",
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
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#breadcrumb",
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
          "name": "Riverside Luxury Cruises",
          "item": "https://www.tripsandships.com/riverside-luxury-cruises"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Riverside Rhine Cruises",
          "item": "https://www.tripsandships.com/riverside-rhine-cruises"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#touristtrip",
      "name": "Riverside Rhine Cruise",
      "touristType": "Couples, luxury travelers, first-time European visitors",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Amsterdam, Netherlands" },
          { "@type": "ListItem", "position": 2, "name": "Cologne, Germany" },
          { "@type": "ListItem", "position": 3, "name": "Koblenz, Germany" },
          { "@type": "ListItem", "position": 4, "name": "Rüdesheim, Germany" },
          { "@type": "ListItem", "position": 5, "name": "Strasbourg, France" },
          { "@type": "ListItem", "position": 6, "name": "Basel, Switzerland" }
        ]
      }
    },
    {
      "@type": "Cruise",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#cruise",
      "name": "Riverside Rhine Cruise",
      "provider": {
        "@type": "Organization",
        "name": "Riverside Luxury Cruises"
      },
      "departurePort": {
        "@type": "BoatTerminal",
        "name": "Amsterdam, Netherlands"
      },
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Amsterdam, Netherlands" },
          { "@type": "ListItem", "position": 2, "name": "Cologne, Germany" },
          { "@type": "ListItem", "position": 3, "name": "Koblenz, Germany" },
          { "@type": "ListItem", "position": 4, "name": "Rüdesheim, Germany" },
          { "@type": "ListItem", "position": 5, "name": "Strasbourg, France" },
          { "@type": "ListItem", "position": 6, "name": "Basel, Switzerland" }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#destinations",
      "name": "Riverside Rhine Cruise Destinations",
      "itemListElement": [
        { "@type": "Place", "position": 1, "name": "Amsterdam, Netherlands" },
        { "@type": "Place", "position": 2, "name": "Cologne, Germany" },
        { "@type": "Place", "position": 3, "name": "Koblenz, Germany" },
        { "@type": "Place", "position": 4, "name": "Rüdesheim, Germany" },
        { "@type": "Place", "position": 5, "name": "Strasbourg, France" },
        { "@type": "Place", "position": 6, "name": "Basel, Switzerland" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#service",
      "serviceType": "Luxury Rhine River Cruise Planning & Booking Support",
      "provider": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel"
      },
      "areaServed": "Worldwide",
      "description":
        "Personalized planning support to help travelers compare Rhine itineraries and choose the best sailing, ship, and suite for their trip."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#itemlist",
      "name": "What This Riverside Rhine Cruises Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Quick Overview" },
        { "@type": "ListItem", "position": 2, "name": "Why Cruise the Rhine?" },
        { "@type": "ListItem", "position": 3, "name": "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", "position": 4, "name": "Destinations Along the Rhine" },
        { "@type": "ListItem", "position": 5, "name": "Riverside Ravel" },
        { "@type": "ListItem", "position": 6, "name": "Luxury Accommodations" },
        { "@type": "ListItem", "position": 7, "name": "Gourmet Dining" },
        { "@type": "ListItem", "position": 8, "name": "Included Shore Excursions" },
        { "@type": "ListItem", "position": 9, "name": "Life Onboard" },
        { "@type": "ListItem", "position": 10, "name": "Best Time to Cruise the Rhine" },
        { "@type": "ListItem", "position": 11, "name": "Is a Riverside Rhine Cruise Worth It?" },
        { "@type": "ListItem", "position": 12, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-rhine-cruises/#faq",
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

const RiversideRhineCruises = () => {
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
        primaryCtaLink={data.hero.primaryCtaLink}
      />

      {/* ── 2. QUICK OVERVIEW ── */}
      <div id="quick-overview">
        <CardGrid
          title={data.quickOverview.title}
          subtitle={data.quickOverview.subtitle}
          cards={data.quickOverview.cards}
          columns={3}
        />
      </div>

      {/* ── 3. WHY CRUISE THE RHINE? ── */}
      <div id="why-cruise-the-rhine">
        <AsymmetricStoryIntro
          eyebrow={data.whyCruiseRhine.eyebrow}
          title={data.whyCruiseRhine.title}
          subtitle={data.whyCruiseRhine.subtitle}
          paragraphs={data.whyCruiseRhine.paragraphs}
          highlights={data.whyCruiseRhine.highlights}
          image1Placeholder={data.whyCruiseRhine.image1Placeholder}
          image2Placeholder={data.whyCruiseRhine.image2Placeholder}
          ctaText={data.whyCruiseRhine.ctaText}
          ctaLink={data.whyCruiseRhine.ctaLink}
          image1={
            // "src/assets/RiversideRhineCruises/riverside-rhine-gorge-hero.jpg"
            undefined
          }
          image2={
            // "src/assets/RiversideRhineCruises/riverside-rhine-rudesheim.jpg"
            undefined
          }
        />
      </div>

      {/* ── 4. WHY CHOOSE RIVERSIDE LUXURY CRUISES? ── */}
      <div id="why-choose-riverside">
        <GenericChecklistCards
          title={data.whyChooseRiverside.title}
          subtitle={data.whyChooseRiverside.subtitle}
          cards={data.whyChooseRiverside.cards}
        />
      </div>

      {/* ── 5. DESTINATIONS ALONG THE RHINE ── */}
      <div id="luc-destinations">
        <CinematicDestinations
          title={data.destinationsAlongRhine.title}
          subtitle={data.destinationsAlongRhine.subtitle}
          items={data.destinationsAlongRhine.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhineCruises/riverside-rhine-amsterdam.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-cologne.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-koblenz.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-gorge.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-rudesheim.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-strasbourg.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-basel.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. RIVERSIDE RAVEL (FEATURED RHINE SHIP) ── */}
      <div id="riverside-ravel">
        <LuxuryFeatureShowcase
          title={data.riversideRavel.title}
          subtitle={data.riversideRavel.subtitle}
          items={data.riversideRavel.items.map((item) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhineCruises/riverside-ravel-rhine.jpg"
            ][0]
          }))}
        />
      </div>

      {/* ── 7. WHAT'S INCLUDED ONBOARD (SHORE EXCURSIONS & LIFE ONBOARD) ── */}
      <div id="onboard-experience">
        <ValueShowcase
          title={data.whatsIncludedOnboard.title}
          subtitle={data.whatsIncludedOnboard.subtitle}
          items={data.whatsIncludedOnboard.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhineCruises/riverside-rhine-excursion.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-evening-lounge.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 8. LUXURY ACCOMMODATIONS ── */}
      <div id="luxury-accommodations">
        <EditorialIntroSection
          eyebrow={data.accommodations.eyebrow}
          title={data.accommodations.title}
          paragraphs={data.accommodations.paragraphs}
          highlights={data.accommodations.highlights}
          badgeTitle="Riverside Suite Luxury"
          badgeDescription="Generous boutique proportions with bespoke king bedding and river views."
          image={
            // "src/assets/RiversideRhineCruises/riverside-rhine-suite.jpg"
            undefined
          }
          placeholderLabel="RIVERSIDE RAVEL LUXURY SUITES"
        />
      </div>

      {/* ── 9. WHO SHOULD CHOOSE A RIVERSIDE RHINE CRUISE? ── */}
      <div id="who-should-choose">
        <TravelerTypeGrid
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
          items={data.whoShouldChoose.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhineCruises/riverside-rhine-couples.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-first-time.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-castles.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-history.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-wine.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-luxury.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-photography.jpg",
              // "src/assets/RiversideRhineCruises/riverside-rhine-anniversary.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 10. GOURMET DINING ── */}
      <div id="gourmet-dining">
        <EditorialFeatureShowcase
          title={data.diningExperience.title}
          subtitle={data.diningExperience.subtitle}
          features={data.diningExperience.items}
          image={
            // "src/assets/RiversideRhineCruises/riverside-rhine-dining.jpg"
            undefined
          }
        />
      </div>

      {/* ── 11. BEST TIME TO CRUISE THE RHINE ── */}
      <div id="best-time-to-cruise">
        <CardGrid
          title={data.seasonsGuide.title}
          subtitle={data.seasonsGuide.subtitle}
          cards={data.seasonsGuide.cards}
          columns={4}
        />
      </div>

      {/* ── 12. IS A RIVERSIDE RHINE CRUISE WORTH IT? ── */}
      <div id="is-it-worth-it">
        <ProsConsCards
          title={data.isWorthIt.title}
          prosTitle={data.isWorthIt.prosTitle}
          consTitle={data.isWorthIt.consTitle}
          bestFor={data.isWorthIt.bestFor}
          notBestFor={data.isWorthIt.notBestFor}
          bottomNote={data.isWorthIt.bottomNote}
          type="pros-cons"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ── 13. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ── */}
      <div id="Asc-luxury-travel-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 14. ANGELA HUGHES AUTHORITY BOX ── */}
      <div id="Asc-expert-insight">
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
      </div>

      {/* ── 15. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Riverside Rhine Cruise.",
            faqs: data.faqs
          }}
        />
      </div>

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

export default RiversideRhineCruises;