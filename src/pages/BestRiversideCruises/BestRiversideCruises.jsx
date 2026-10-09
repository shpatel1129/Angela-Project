import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import CardGrid from "../../components/ui/CardGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CinematicDestinations from "../../components/ui/CinematicDestinations";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
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
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#webpage",
      "name": "Best Riverside Cruises | Top Luxury River Cruise Itineraries in Europe",
      "url": "https://www.tripsandships.com/best-riverside-cruises",
      "description":
        "Discover the best Riverside Luxury Cruises on the Danube, Rhine, and Rhône Rivers. Compare itineraries, destinations, ships, and find the perfect luxury European river cruise."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#article",
      "headline": "Best Riverside Cruises | Luxury European River Cruise Guide",
      "description":
        "A complete guide to the best Riverside Luxury Cruises itineraries, covering the Danube, Rhine, and Rhône Rivers, Christmas Market and Tulip season sailings, recommended ships, and which cruise is best for your travel style.",
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
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#breadcrumb",
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
          "name": "Best Riverside Cruises",
          "item": "https://www.tripsandships.com/best-riverside-cruises"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#touristtrip",
      "name": "Best Riverside Luxury Cruises Itineraries",
      "touristType":
        "Luxury travelers, couples, retirees, food & wine enthusiasts, first-time river cruisers",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Danube River Cruises" },
          { "@type": "ListItem", "position": 2, "name": "Rhine River Cruises" },
          { "@type": "ListItem", "position": 3, "name": "Rhône River Cruises" },
          { "@type": "ListItem", "position": 4, "name": "Christmas Market Cruises" },
          { "@type": "ListItem", "position": 5, "name": "Tulip Cruises" }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#destinations",
      "name": "Best Riverside Cruises Destinations",
      "itemListElement": [
        { "@type": "Place", "position": 1, "name": "Danube River" },
        { "@type": "Place", "position": 2, "name": "Rhine River" },
        { "@type": "Place", "position": 3, "name": "Rhône River" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#service",
      "serviceType": "Luxury River Cruise Itinerary Planning & Booking Support",
      "provider": {
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel"
      },
      "areaServed": "Worldwide",
      "description":
        "Personalized planning support to help travelers compare Riverside Luxury Cruises itineraries and choose the best sailing, ship, and suite for their trip."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#itemlist",
      "name": "What This Best Riverside Cruises Guide Covers",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Quick Overview" },
        { "@type": "ListItem", "position": 2, "name": "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", "position": 3, "name": "Best Danube Cruises" },
        { "@type": "ListItem", "position": 4, "name": "Best Rhine Cruises" },
        { "@type": "ListItem", "position": 5, "name": "Best Rhône Cruises" },
        { "@type": "ListItem", "position": 6, "name": "Best Christmas Market Cruises" },
        { "@type": "ListItem", "position": 7, "name": "Best Tulip Cruises" },
        { "@type": "ListItem", "position": 8, "name": "Which Riverside Cruise Is Best for You?" },
        { "@type": "ListItem", "position": 9, "name": "Which Ship Should You Choose?" },
        { "@type": "ListItem", "position": 10, "name": "What Makes Riverside Different?" },
        { "@type": "ListItem", "position": 11, "name": "Is Riverside Worth the Price?" },
        { "@type": "ListItem", "position": 12, "name": "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/best-riverside-cruises/#faq",
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

const BestRiversideCruises = () => {
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
          cards={data.quickOverview.cards.map((c) => ({
            title: c.title,
            description: `${c.tagline ? `(${c.tagline}) — ` : ""}${c.description} Highlights: ${c.highlights.join(", ")}.`,
            icon: c.icon
          }))}
          columns={3}
        />
      </div>

      {/* ── 3. WHY CHOOSE RIVERSIDE LUXURY CRUISES ── */}
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
            // "src/assets/BestRiversideCruises/riverside-danube-vienna-hero.jpg"
            undefined
          }
          image2={
            // "src/assets/BestRiversideCruises/riverside-rhine-castle-hero.jpg"
            undefined
          }
        />
      </div>

      {/* ── 4. BEST RIVERSIDE CRUISE ITINERARIES (DANUBE, RHINE, RHÔNE, CHRISTMAS, TULIP) ── */}
      <div id="luc-destinations">
        <CinematicDestinations
          title={data.destinationsItineraries.title}
          subtitle={data.destinationsItineraries.subtitle}
          items={data.destinationsItineraries.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/BestRiversideCruises/riverside-danube-budapest.jpg",
              // "src/assets/BestRiversideCruises/riverside-rhine-vineyards.jpg",
              // "src/assets/BestRiversideCruises/riverside-rhone-provence.jpg",
              // "src/assets/BestRiversideCruises/riverside-christmas-market.jpg",
              // "src/assets/BestRiversideCruises/riverside-tulip-season-netherlands.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 5. WHICH RIVERSIDE CRUISE IS BEST FOR YOU? ── */}
      <div id="which-cruise-is-best-for-you">
        <TravelerTypeGrid
          title={data.whichCruiseBest.title}
          subtitle={data.whichCruiseBest.subtitle}
          items={data.whichCruiseBest.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/BestRiversideCruises/riverside-first-timer.jpg",
              // "src/assets/BestRiversideCruises/riverside-wine-food.jpg",
              // "src/assets/BestRiversideCruises/riverside-castles.jpg",
              // "src/assets/BestRiversideCruises/riverside-holiday.jpg",
              // "src/assets/BestRiversideCruises/riverside-tulips.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. WHAT MAKES RIVERSIDE DIFFERENT? ── */}
      <div id="what-makes-riverside-different">
        <GenericChecklistCards
          title={data.whatMakesDifferent.title}
          subtitle={data.whatMakesDifferent.subtitle}
          cards={data.whatMakesDifferent.cards}
        />
      </div>

      {/* ── 7. WHICH SHIP SHOULD YOU CHOOSE? ── */}
      <div id="riverside-fleet">
        <CulinaryMenuShowcase
          title={data.fleetSelection.title}
          subtitle={data.fleetSelection.subtitle}
          items={data.fleetSelection.items}
          images={[
            // "src/assets/BestRiversideCruises/riverside-mozart-danube.jpg",
            undefined,
            // "src/assets/BestRiversideCruises/riverside-ravel-rhine.jpg",
            undefined
          ]}
        />
      </div>

      {/* ── 8. IS RIVERSIDE WORTH THE PRICE? ── */}
      <div id="is-riverside-worth-the-price">
        <ProsConsCards
          title={data.isWorthPrice.title}
          prosTitle={data.isWorthPrice.prosTitle}
          consTitle={data.isWorthPrice.consTitle}
          bestFor={data.isWorthPrice.bestFor}
          notBestFor={data.isWorthPrice.notBestFor}
          bottomNote={data.isWorthPrice.bottomNote}
          type="pros-cons"
          bgClass="bg-slate-50"
        />
      </div>

      {/* ── 9. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ── */}
      <div id="Asc-luxury-travel-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 10. ANGELA HUGHES AUTHORITY BOX ── */}
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

      {/* ── 11. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle:
              "Everything travelers need to know about choosing the best Riverside Luxury Cruises itinerary.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 12. FINAL VERDICT / CONCLUSION ── */}
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

      {/* ── 13. FINAL CTA ── */}
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

export default BestRiversideCruises;