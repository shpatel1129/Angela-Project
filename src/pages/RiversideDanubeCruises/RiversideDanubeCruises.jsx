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
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import CulinaryMenuShowcase from "../../components/ui/CulinaryMenuShowcase";
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
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#webpage",
      "name": "Riverside Danube Cruises | Luxury Danube River Cruise Guide",
      "url": "https://www.tripsandships.com/riverside-danube-cruises",
      "description":
        "Discover Riverside Danube Cruises featuring luxury suites, gourmet dining, and unforgettable journeys through Budapest, Vienna, Bratislava, and the Wachau Valley. Learn what to expect before you book."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#article",
      "headline": "Riverside Danube Cruises | Luxury River Cruises Through Europe",
      "description":
        "A complete guide to Riverside Danube Cruises, covering destinations, the Riverside Mozart, accommodations, dining, excursions, and whether a Riverside Danube Cruise is worth booking.",
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
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#breadcrumb",
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
          "name": "Riverside Danube Cruises",
          "item": "https://www.tripsandships.com/riverside-danube-cruises"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#touristtrip",
      "name": "Riverside Danube Cruise",
      "touristType": "Couples, luxury travelers, first-time river cruisers",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Budapest, Hungary" },
          { "@type": "ListItem", "position": 2, "name": "Vienna, Austria" },
          { "@type": "ListItem", "position": 3, "name": "Bratislava, Slovakia" },
          { "@type": "ListItem", "position": 4, "name": "Melk, Austria" },
          { "@type": "ListItem", "position": 5, "name": "Passau, Germany" },
          { "@type": "ListItem", "position": 6, "name": "Wachau Valley, Austria" }
        ]
      }
    },
    {
      "@type": "Cruise",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#cruise",
      "name": "Riverside Danube Cruise",
      "provider": {
        "@type": "Organization",
        "name": "Riverside Luxury Cruises"
      },
      "departurePort": {
        "@type": "BoatTerminal",
        "name": "Budapest, Hungary"
      },
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Budapest, Hungary" },
          { "@type": "ListItem", "position": 2, "name": "Bratislava, Slovakia" },
          { "@type": "ListItem", "position": 3, "name": "Vienna, Austria" },
          { "@type": "ListItem", "position": 4, "name": "Wachau Valley, Austria" },
          { "@type": "ListItem", "position": 5, "name": "Melk, Austria" },
          { "@type": "ListItem", "position": 6, "name": "Passau, Germany" }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#destinations",
      "name": "Riverside Danube Cruise Destinations",
      "itemListElement": [
        { "@type": "Place", "position": 1, "name": "Budapest, Hungary" },
        { "@type": "Place", "position": 2, "name": "Vienna, Austria" },
        { "@type": "Place", "position": 3, "name": "Bratislava, Slovakia" },
        { "@type": "Place", "position": 4, "name": "Melk, Austria" },
        { "@type": "Place", "position": 5, "name": "Passau, Germany" },
        { "@type": "Place", "position": 6, "name": "Wachau Valley, Austria" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#service",
      "serviceType": "Luxury Danube River Cruise Planning & Booking Support",
      "provider": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel"
      },
      "areaServed": "Worldwide",
      "description":
        "Personalized planning support to help travelers compare Danube itineraries and choose the best sailing, ship, and suite for their trip."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#itemlist",
      "name": "What This Riverside Danube Cruises Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Quick Overview" },
        { "@type": "ListItem", "position": 2, "name": "Why Cruise the Danube?" },
        { "@type": "ListItem", "position": 3, "name": "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", "position": 4, "name": "Destinations Along the Danube" },
        { "@type": "ListItem", "position": 5, "name": "Riverside Mozart" },
        { "@type": "ListItem", "position": 6, "name": "What's Included Onboard" },
        { "@type": "ListItem", "position": 7, "name": "Luxury Accommodations" },
        { "@type": "ListItem", "position": 8, "name": "Who Should Choose a Riverside Danube Cruise?" },
        { "@type": "ListItem", "position": 9, "name": "Dining on the Danube" },
        { "@type": "ListItem", "position": 10, "name": "Best Time to Cruise the Danube" },
        { "@type": "ListItem", "position": 11, "name": "Is a Riverside Danube Cruise Worth It?" },
        { "@type": "ListItem", "position": 12, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-danube-cruises/#faq",
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

const RiversideDanubeCruises = () => {
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

      {/* ── 2. QUICK OVERVIEW ── */}
      <div id="quick-overview">
        <CardGrid
          title={data.quickOverview.title}
          subtitle={data.quickOverview.subtitle}
          cards={data.quickOverview.cards}
          columns={3}
        />
      </div>

      {/* ── 3. WHY CRUISE THE DANUBE? ── */}
      <div id="why-cruise-the-danube">
        <AsymmetricStoryIntro
          eyebrow={data.whyCruiseDanube.eyebrow}
          title={data.whyCruiseDanube.title}
          subtitle={data.whyCruiseDanube.subtitle}
          paragraphs={data.whyCruiseDanube.paragraphs}
          highlights={data.whyCruiseDanube.highlights}
          image1Placeholder={data.whyCruiseDanube.image1Placeholder}
          image2Placeholder={data.whyCruiseDanube.image2Placeholder}
          ctaText={data.whyCruiseDanube.ctaText}
          ctaLink={data.whyCruiseDanube.ctaLink}
          image1={
            // "src/assets/RiversideDanubeCruises/riverside-danube-vienna-hero.jpg"
            undefined
          }
          image2={
            // "src/assets/RiversideDanubeCruises/riverside-danube-budapest.jpg"
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

      {/* ── 5. DESTINATIONS ALONG THE DANUBE ── */}
      <div id="luc-destinations">
        <CinematicDestinations
          title={data.destinationsAlongDanube.title}
          subtitle={data.destinationsAlongDanube.subtitle}
          items={data.destinationsAlongDanube.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideDanubeCruises/riverside-danube-budapest.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-vienna.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-bratislava.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-melk.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-passau.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-wachau-valley.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. RIVERSIDE MOZART (FLAGSHIP) ── */}
      <div id="riverside-mozart">
        <LuxuryFeatureShowcase
          title={data.riversideMozart.title}
          subtitle={data.riversideMozart.subtitle}
          items={data.riversideMozart.items.map((item) => ({
            ...item,
            image: [
              // "src/assets/RiversideDanubeCruises/riverside-mozart-danube.jpg"
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
              // "src/assets/RiversideDanubeCruises/riverside-danube-excursion.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-life-onboard.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 8. LUXURY ACCOMMODATIONS ── */}
      <div id="luxury-accommodations">
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
            // "src/assets/RiversideDanubeCruises/riverside-danube-suite.jpg"
            undefined
          }
          image2={
            // "src/assets/RiversideDanubeCruises/riverside-danube-suite-living.jpg"
            undefined
          }
        />
      </div>

      {/* ── 9. WHO SHOULD CHOOSE A RIVERSIDE DANUBE CRUISE? ── */}
      <div id="who-should-choose">
        <TravelerTypeGrid
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
          items={data.whoShouldChoose.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideDanubeCruises/riverside-danube-couple.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-romance.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-luxury.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-history.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-wine.jpg",
              // "src/assets/RiversideDanubeCruises/riverside-danube-anniversary.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 10. DINING ON THE DANUBE ── */}
      <div id="dining-on-the-danube">
        <CulinaryMenuShowcase
          title={data.diningExperience.title}
          subtitle={data.diningExperience.subtitle}
          items={data.diningExperience.items}
          images={[
            // "src/assets/RiversideDanubeCruises/riverside-danube-dining.jpg",
            undefined,
            // "src/assets/RiversideDanubeCruises/riverside-danube-lounge.jpg",
            undefined
          ]}
        />
      </div>

      {/* ── 11. BEST TIME TO CRUISE THE DANUBE ── */}
      <div id="best-time-to-cruise">
        <CardGrid
          title={data.seasonsGuide.title}
          subtitle={data.seasonsGuide.subtitle}
          cards={data.seasonsGuide.cards}
          columns={4}
        />
      </div>

      {/* ── 12. IS A RIVERSIDE DANUBE CRUISE WORTH IT? ── */}
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
            subtitle: "Everything travelers need to know before booking a Riverside Danube Cruise.",
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

export default RiversideDanubeCruises;