import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CardGrid from "../../components/ui/CardGrid";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import AlternatingRiverShowcase from "../../components/ui/AlternatingRiverShowcase";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import ValueShowcase from "../../components/ui/ValueShowcase";
import ProsConsCards from "../../components/ui/ProsConsCards";
import InclusionsList from "../../components/ui/InclusionsList";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Placeholder image imports (kept commented out) ─────────────────
   // import HeroImage1 from "../../assets/RiversideLuxuryCruises/riverside-danube-vienna-hero.jpg";
   // import HeroImage2 from "../../assets/RiversideLuxuryCruises/riverside-rhine-castle-hero.jpg";
   // import FleetMozart from "../../assets/RiversideLuxuryCruises/riverside-mozart-danube.jpg";
   // import FleetDebussy from "../../assets/RiversideLuxuryCruises/riverside-debussy-rhine.jpg";
   // import FleetRavel from "../../assets/RiversideLuxuryCruises/riverside-ravel-rhone.jpg";
   // import RiversideAtmosphere from "../../assets/RiversideLuxuryCruises/riverside-onboard-atmosphere.jpg";
   // import RiversideSuite from "../../assets/RiversideLuxuryCruises/riverside-suite-interior.jpg";
   // import RiversideDining from "../../assets/RiversideLuxuryCruises/riverside-gourmet-dining.jpg";
   // import RiversideCrew from "../../assets/RiversideLuxuryCruises/riverside-crew-service.jpg";
   // import DanubeImage from "../../assets/RiversideLuxuryCruises/riverside-danube-budapest.jpg";
   // import RhineImage from "../../assets/RiversideLuxuryCruises/riverside-rhine-vineyards.jpg";
   // import RhoneImage from "../../assets/RiversideLuxuryCruises/riverside-rhone-provence.jpg";
   // import ChristmasMarketImage from "../../assets/RiversideLuxuryCruises/riverside-christmas-market.jpg";
   // import TulipImage from "../../assets/RiversideLuxuryCruises/riverside-tulip-season-netherlands.jpg";
   // import LifeOnboardImage from "../../assets/RiversideLuxuryCruises/riverside-observation-lounge.jpg";
   // import ShoreExcursionsImage from "../../assets/RiversideLuxuryCruises/riverside-shore-excursion-tour.jpg";
   // import WorthItImage from "../../assets/RiversideLuxuryCruises/riverside-evening-lounge.jpg";
   // import CTAImage from "../../assets/RiversideLuxuryCruises/riverside-ship-exterior-river.jpg";
─────────────────────────────────────────────────────────────────── */

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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#webpage",
      name: "Riverside Luxury Cruises | Luxury River Cruise Guide (2026)",
      url: "https://www.tripsandships.com/riverside-luxury-cruises",
      description:
        "Discover Riverside Luxury Cruises with our complete guide covering ships, suites, dining, itineraries, pricing, destinations, inclusions, reviews, and expert planning advice for luxury European river cruises.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#article",
      headline: "Riverside Luxury Cruises | Complete Guide",
      description:
        "A complete guide to Riverside Luxury Cruises, covering the fleet, suites, dining, destinations, seasonal sailings, shore excursions, inclusions, pricing, and who should sail.",
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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#breadcrumb",
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
          name: "River Cruise Guides",
          item: "https://www.tripsandships.com/riverside-luxury-cruises-ultimate-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Riverside Luxury Cruises",
          item: "https://www.tripsandships.com/riverside-luxury-cruises",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#touristtrip",
      name: "Riverside Luxury Cruises European River Itineraries",
      touristType: "Luxury travelers, couples, retirees, food & wine enthusiasts",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Danube River" },
          { "@type": "ListItem", position: 2, name: "Rhine River" },
          { "@type": "ListItem", position: 3, name: "Rhône River" },
          { "@type": "ListItem", position: 4, name: "Christmas Market Cruises" },
          { "@type": "ListItem", position: 5, name: "Tulip Season Cruises" },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#destinations",
      name: "Riverside Luxury Cruises Destinations",
      itemListElement: [
        { "@type": "Place", position: 1, name: "Danube River" },
        { "@type": "Place", position: 2, name: "Rhine River" },
        { "@type": "Place", position: 3, name: "Rhône River" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#service",
      serviceType: "Luxury River Cruise Vacation Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support for Riverside Luxury Cruises sailings, including itinerary selection, suite categories, and shore experiences.",
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Riverside Luxury Cruises",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      reviewBody:
        "Riverside Luxury Cruises delivers a boutique luxury river cruise experience with spacious all-suite accommodations, personalized service, exceptional dining, and thoughtfully designed European itineraries.",
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#itemlist",
      name: "What This Riverside Luxury Cruises Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", position: 2, name: "The Riverside Fleet" },
        { "@type": "ListItem", position: 3, name: "Spacious Suite Accommodations" },
        { "@type": "ListItem", position: 4, name: "Dining That Reflects the Destination" },
        { "@type": "ListItem", position: 5, name: "Personalized Service" },
        { "@type": "ListItem", position: 6, name: "Beautiful European Destinations" },
        { "@type": "ListItem", position: 7, name: "Christmas Market & Tulip Season Cruises" },
        { "@type": "ListItem", position: 8, name: "Life Onboard" },
        { "@type": "ListItem", position: 9, name: "Shore Excursions" },
        { "@type": "ListItem", position: 10, name: "Who Should Sail Riverside?" },
        { "@type": "ListItem", position: 11, name: "What's Included?" },
        { "@type": "ListItem", position: 12, name: "Is Riverside Worth It?" },
        { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises/#faq",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ],
};

const RiversideLuxuryCruises = () => {
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

      {/* ── 2. WHY CHOOSE RIVERSIDE LUXURY CRUISES? ── */}
      <div id="why-choose-riverside">
        <AsymmetricStoryIntro
          eyebrow={data.whyChoose.eyebrow}
          title={data.whyChoose.title}
          subtitle={data.whyChoose.subtitle}
          paragraphs={data.whyChoose.paragraphs}
          highlights={data.whyChoose.highlights}
          image1Placeholder={data.whyChoose.image1Placeholder}
          image2Placeholder={data.whyChoose.image2Placeholder}
          ctaText={data.whyChoose.ctaText}
          ctaLink={data.whyChoose.ctaLink}
          image1={
            // "src/assets/RiversideLuxuryCruises/riverside-onboard-atmosphere.jpg"
            undefined
          }
          image2={
            // "src/assets/RiversideLuxuryCruises/riverside-danube-vienna-hero.jpg"
            undefined
          }
        />
      </div>

      {/* ── 3. THE RIVERSIDE FLEET ── */}
      <div id="riverside-fleet">
        <CardGrid
          title={data.fleet.title}
          subtitle={data.fleet.subtitle}
          cards={data.fleet.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 4. SPACIOUS SUITE ACCOMMODATIONS ── */}
      <div id="spacious-suites">
        <HighlightsSplit
          title={data.suites.title}
          items={data.suites.items.map((item) => ({
            ...item,
            image:
              // "src/assets/RiversideLuxuryCruises/riverside-suite-interior.jpg"
              undefined,
          }))}
        />
      </div>

      {/* ── 5. DINING THAT REFLECTS THE DESTINATION ── */}
      <div id="dining-reflects-destination">
        <EditorialFeatureShowcase
          title={data.dining.title}
          subtitle={data.dining.subtitle}
          features={data.dining.features}
          bgClass="bg-slate-50"
          image={
            // "src/assets/RiversideLuxuryCruises/riverside-gourmet-dining.jpg"
            undefined
          }
        />
      </div>

      {/* ── 6. PERSONALIZED SERVICE ── */}
      <div id="personalized-service">
        <GenericChecklistCards
          title={data.personalizedService.title}
          subtitle={data.personalizedService.subtitle}
          cards={data.personalizedService.cards}
        />
      </div>

      {/* ── 7. BEAUTIFUL EUROPEAN DESTINATIONS ── */}
      <div id="luc-destinations">
        <AlternatingRiverShowcase
          title={data.destinations.title}
          description={data.destinations.description}
          rivers={data.destinations.rivers.map((river) => ({
            ...river,
            image: undefined,
          }))}
        />
      </div>

      {/* ── 8. CHRISTMAS MARKET & TULIP SEASON CRUISES ── */}
      <div id="seasonal-cruises">
        <LuxuryFeatureShowcase
          title={data.seasonal.title}
          subtitle={data.seasonal.subtitle}
          items={data.seasonal.items.map((item) => ({
            ...item,
            image: undefined,
          }))}
        />
      </div>

      {/* ── 9. LIFE ONBOARD ── */}
      <div id="life-onboard">
        <ValueShowcase
          title={data.lifeOnboard.title}
          subtitle={data.lifeOnboard.subtitle}
          items={data.lifeOnboard.items.map((item) => ({
            ...item,
            image: undefined,
          }))}
        />
      </div>

      {/* ── 10. SHORE EXCURSIONS ── */}
      <div id="shore-excursions">
        <LuxuryIntroSection
          heading={data.shoreExcursions.title}
          description={`${data.shoreExcursions.subtitles.join("\n\n")}\n\n${data.shoreExcursions.summary}`}
          highlights={data.shoreExcursions.features}
          image={
            // "src/assets/RiversideLuxuryCruises/riverside-shore-excursion-tour.jpg"
            undefined
          }
        />
      </div>

      {/* ── 11. WHO SHOULD SAIL RIVERSIDE? ── */}
      <div id="who-should-sail">
        <ProsConsCards
          title={data.whoShouldSail.title}
          prosTitle={data.whoShouldSail.prosTitle}
          consTitle={data.whoShouldSail.consTitle}
          bestFor={data.whoShouldSail.bestFor}
          notBestFor={data.whoShouldSail.notBestFor}
          bottomNote={data.whoShouldSail.bottomNote}
          bgClass="bg-white"
        />
      </div>

      {/* ── 12. WHAT'S INCLUDED? ── */}
      <div id="whats-included">
        <InclusionsList
          title={data.whatsIncluded.title}
          expertNote={data.whatsIncluded.expertNote}
          inclusions={data.whatsIncluded.inclusions}
          image={
            // "src/assets/RiversideLuxuryCruises/riverside-suite-booking-planning.jpg"
            undefined
          }
        />
      </div>

      {/* ── 13. IS RIVERSIDE WORTH IT? ── */}
      <div id="is-riverside-worth-it">
        <EditorialIntroSection
          eyebrow={data.worthIt.eyebrow}
          title={data.worthIt.title}
          paragraphs={data.worthIt.paragraphs}
          highlights={data.worthIt.highlights}
          badgeTitle={data.worthIt.badgeTitle}
          badgeDescription={data.worthIt.badgeDescription}
          placeholderLabel={data.worthIt.placeholderLabel}
          image={
            // "src/assets/RiversideLuxuryCruises/riverside-evening-lounge.jpg"
            undefined
          }
        />
      </div>

      {/* ── 14. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <div id="Asc-luxury-travel-advisor">
        <AuthorityGrid
          title={data.advisor.title}
          subtitle={data.advisor.subtitle}
          items={data.advisor.items}
        />
      </div>

      {/* ── 15. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
      <div id="Asc-expert-insight">
        <ExpertCredentials
          name={data.authority.name}
          title={data.authority.title}
          badge={data.authority.badge}
          authorityBoxTitle={data.authority.authorityBoxTitle}
          experienceBadge={data.authority.experienceBadge}
          credentials={data.authority.credentials}
          image={AboutImage}
        />
      </div>

      {/* ── 16. FREQUENTLY ASKED QUESTIONS ── */}
      <div id="Asc-faq">
        <FAQAccordion
          title="Frequently Asked Questions"
          subtitle="Everything travelers need to know about Riverside Luxury Cruises."
          faqs={data.faqs}
        />
      </div>

      {/* ── 17. CONCLUSION ── */}
      <div id="conclusion">
        <ConclusionSection sections={data.conclusion.sections} />
      </div>

      {/* ── 18. CENTER CTA ── */}
      <CenterCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonLink={data.cta.buttonLink || "/contact"}
        theme="dark"
      />
    </div>
  );
};

export default RiversideLuxuryCruises;