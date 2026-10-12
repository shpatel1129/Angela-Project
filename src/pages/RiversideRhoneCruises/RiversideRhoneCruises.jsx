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
import CulinaryMenuShowcase from "../../components/ui/CulinaryMenuShowcase";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Placeholder image imports (kept commented out) ─────────────────
   // import HeroImage from "../../assets/RiversideRhoneCruises/riverside-rhone-provence-hero.jpg";
   // import DebussyImage from "../../assets/RiversideRhoneCruises/riverside-debussy-rhone.jpg";
   // import LyonImage from "../../assets/RiversideRhoneCruises/riverside-rhone-lyon.jpg";
   // import AvignonImage from "../../assets/RiversideRhoneCruises/riverside-rhone-avignon.jpg";
   // import ArlesImage from "../../assets/RiversideRhoneCruises/riverside-rhone-arles.jpg";
   // import ViviersImage from "../../assets/RiversideRhoneCruises/riverside-rhone-viviers.jpg";
   // import TournonImage from "../../assets/RiversideRhoneCruises/riverside-rhone-tournon.jpg";
   // import SuiteImage from "../../assets/RiversideRhoneCruises/riverside-rhone-suite.jpg";
   // import DiningImage from "../../assets/RiversideRhoneCruises/riverside-rhone-dining.jpg";
   // import WineImage from "../../assets/RiversideRhoneCruises/riverside-rhone-vineyard.jpg";
   // import ExcursionImage from "../../assets/RiversideRhoneCruises/riverside-rhone-excursion.jpg";
   // import WorthItImage from "../../assets/RiversideRhoneCruises/riverside-rhone-evening-lounge.jpg";
   // import CTAImage from "../../assets/RiversideRhoneCruises/riverside-rhone-ship-exterior.jpg";
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
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp"
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      description:
        "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences."
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#webpage",
      name: "Riverside Rhône Cruises | Luxury Rhône River Cruises in France",
      url: "https://www.tripsandships.com/riverside-rhone-cruises",
      description:
        "Explore Riverside Rhône Cruises through Lyon, Avignon, Arles, and Provence. Discover gourmet cuisine, world-class wines, luxury suites, and boutique river cruising in southern France."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#article",
      headline: "Riverside Rhône Cruises | Luxury River Cruises Through Provence",
      description:
        "A complete guide to Riverside Rhône Cruises, covering destinations, the Riverside Debussy, accommodations, dining, wine experiences, and whether a Riverside Rhône Cruise is worth booking.",
      author: {
        "@type": "Person",
        name: "Angela Hughes"
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel"
      },
      inLanguage: "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "River Cruise Guides",
          item: "https://www.tripsandships.com/riverside-luxury-cruises-ultimate-guide"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Riverside Luxury Cruises",
          item: "https://www.tripsandships.com/riverside-luxury-cruises"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Riverside Rhône Cruises",
          item: "https://www.tripsandships.com/riverside-rhone-cruises"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#touristtrip",
      name: "Riverside Rhône Cruise",
      touristType: "Food and wine lovers, couples, luxury travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lyon, France" },
          { "@type": "ListItem", position: 2, name: "Avignon, France" },
          { "@type": "ListItem", position: 3, name: "Arles, France" },
          { "@type": "ListItem", position: 4, name: "Viviers, France" },
          { "@type": "ListItem", position: 5, name: "Tournon-sur-Rhône, France" }
        ]
      }
    },
    {
      "@type": "Cruise",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#cruise",
      name: "Riverside Rhône Cruise",
      provider: {
        "@type": "Organization",
        name: "Riverside Luxury Cruises"
      },
      departurePort: {
        "@type": "BoatTerminal",
        name: "Lyon, France"
      },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lyon, France" },
          { "@type": "ListItem", position: 2, name: "Tournon-sur-Rhône, France" },
          { "@type": "ListItem", position: 3, name: "Viviers, France" },
          { "@type": "ListItem", position: 4, name: "Avignon, France" },
          { "@type": "ListItem", position: 5, name: "Arles, France" }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#destinations",
      name: "Riverside Rhône Cruise Destinations",
      itemListElement: [
        { "@type": "Place", position: 1, name: "Lyon, France" },
        { "@type": "Place", position: 2, name: "Avignon, France" },
        { "@type": "Place", position: 3, name: "Arles, France" },
        { "@type": "Place", position: 4, name: "Viviers, France" },
        { "@type": "Place", position: 5, name: "Tournon-sur-Rhône, France" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#service",
      serviceType: "Luxury Rhône River Cruise Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel"
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support to help travelers compare Rhône itineraries and choose the best sailing, ship, and suite for their trip."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#itemlist",
      name: "What This Riverside Rhône Cruises Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Overview" },
        { "@type": "ListItem", position: 2, name: "Why Cruise the Rhône River?" },
        { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", position: 4, name: "Destinations Along the Rhône" },
        { "@type": "ListItem", position: 5, name: "Provence Focus" },
        { "@type": "ListItem", position: 6, name: "Riverside Debussy" },
        { "@type": "ListItem", position: 7, name: "Included Shore Excursions & Life Onboard" },
        { "@type": "ListItem", position: 8, name: "Luxury Accommodations" },
        { "@type": "ListItem", position: 9, name: "Who Should Choose a Riverside Rhône Cruise?" },
        { "@type": "ListItem", position: 10, name: "Gourmet Dining & Wine Experiences" },
        { "@type": "ListItem", position: 11, name: "Best Time to Cruise the Rhône" },
        { "@type": "ListItem", position: 12, name: "Is a Riverside Rhône Cruise Worth It?" },
        { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-rhone-cruises/#faq",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer
        }
      }))
    }
  ]
};

const RiversideRhoneCruises = () => {
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
          stagger={false}
        />
      </div>

      {/* ── 3. WHY CRUISE THE RHÔNE RIVER? ── */}
      <div id="why-cruise-the-rhone">
        <AsymmetricStoryIntro
          eyebrow={data.whyCruiseRhone.eyebrow}
          title={data.whyCruiseRhone.title}
          subtitle={data.whyCruiseRhone.subtitle}
          paragraphs={data.whyCruiseRhone.paragraphs}
          highlights={data.whyCruiseRhone.highlights}
          image1Placeholder={data.whyCruiseRhone.image1Placeholder}
          image2Placeholder={data.whyCruiseRhone.image2Placeholder}
          ctaText={data.whyCruiseRhone.ctaText}
          ctaLink={data.whyCruiseRhone.ctaLink}
          image1={
            // "src/assets/RiversideRhoneCruises/riverside-rhone-provence-hero.jpg"
            undefined
          }
          image2={
            // "src/assets/RiversideRhoneCruises/riverside-rhone-avignon.jpg"
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

      {/* ── 5. DESTINATIONS ALONG THE RHÔNE ── */}
      <div id="luc-destinations">
        <CinematicDestinations
          title={data.destinationsAlongRhone.title}
          subtitle={data.destinationsAlongRhone.subtitle}
          items={data.destinationsAlongRhone.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhoneCruises/riverside-rhone-lyon.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-avignon.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-arles.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-viviers.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-tournon.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. PROVENCE: THE HEART OF SOUTHERN FRANCE ── */}
      <div id="provence">
        <CardGrid
          title={data.provence.title}
          subtitle={data.provence.subtitle}
          cards={data.provence.cards}
          columns={4}
          stagger={false}
        />
      </div>

      {/* ── 7. RIVERSIDE DEBUSSY ── */}
      <div id="riverside-debussy">
        <LuxuryFeatureShowcase
          title={data.riversideDebussy.title}
          subtitle={data.riversideDebussy.subtitle}
          items={data.riversideDebussy.items.map((item) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhoneCruises/riverside-debussy-rhone.jpg"
            ][0]
          }))}
        />
      </div>

      {/* ── 8. INCLUDED SHORE EXCURSIONS & LIFE ONBOARD ── */}
      <div id="onboard-experience">
        <ValueShowcase
          title={data.whatsIncludedOnboard.title}
          subtitle={data.whatsIncludedOnboard.subtitle}
          items={data.whatsIncludedOnboard.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhoneCruises/riverside-rhone-excursion.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-evening-lounge.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 9. LUXURY ACCOMMODATIONS ── */}
      <div id="luxury-accommodations">
        <EditorialIntroSection
          heading={data.accommodations.heading}
          eyebrow={data.accommodations.eyebrow}
          paragraphs={data.accommodations.paragraphs}
          highlights={data.accommodations.highlights}
          placeholderLabel={data.accommodations.placeholderLabel}
          badgeTitle={data.accommodations.badgeTitle}
          badgeDescription={data.accommodations.badgeDescription}
          image={
            // "src/assets/RiversideRhoneCruises/riverside-rhone-suite.jpg"
            undefined
          }
        />
      </div>

      {/* ── 10. WHO SHOULD CHOOSE A RIVERSIDE RHÔNE CRUISE? ── */}
      <div id="who-should-choose">
        <TravelerTypeGrid
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
          items={data.whoShouldChoose.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideRhoneCruises/riverside-rhone-dining.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-vineyard.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-evening-lounge.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-debussy-rhone.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-arles.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-avignon.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-viviers.jpg",
              // "src/assets/RiversideRhoneCruises/riverside-rhone-ship-exterior.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 11. GOURMET DINING & WINE EXPERIENCES ── */}
      <div id="dining-wine-experience">
        <CulinaryMenuShowcase
          title={data.diningExperience.title}
          subtitle={data.diningExperience.subtitle}
          items={data.diningExperience.items}
          images={[
            // "src/assets/RiversideRhoneCruises/riverside-rhone-dining.jpg",
            undefined,
            // "src/assets/RiversideRhoneCruises/riverside-rhone-vineyard.jpg",
            undefined
          ]}
        />
      </div>

      {/* ── 12. BEST TIME TO CRUISE THE RHÔNE ── */}
      <div id="best-time-to-cruise">
        <CardGrid
          title={data.seasonsGuide.title}
          subtitle={data.seasonsGuide.subtitle}
          cards={data.seasonsGuide.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 13. IS A RIVERSIDE RHÔNE CRUISE WORTH IT? ── */}
      <div id="is-it-worth-it">
        <EditorialFeatureShowcase
          title={data.isWorthIt.title}
          subtitle={data.isWorthIt.subtitle}
          features={data.isWorthIt.features}
          image={
            // "src/assets/RiversideRhoneCruises/riverside-rhone-evening-lounge.jpg"
            undefined
          }
        />
      </div>

      {/* ── 14. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ── */}
      <div id="Asc-luxury-travel-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 15. ANGELA HUGHES AUTHORITY BOX ── */}
      <div id="Asc-expert-insight">
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.badge}
          authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
          authoritySubtitle={data.angelaHughes.authoritySubtitle}
          experienceBadge={data.angelaHughes.experienceBadge}
          image={AboutImage}
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          ctaText={data.angelaHughes.ctaText}
          ctaLink={data.angelaHughes.ctaLink}
        />
      </div>

      {/* ── 16. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Riverside Rhône Cruise.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 17. FINAL VERDICT & CTA ── */}
      <div id="final-verdict">
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
        <CenterCTA
          title={data.finalVerdict.title}
          description={data.finalVerdict.paragraphs[0]}
          buttonText={data.finalVerdict.ctaText}
          buttonLink={data.finalVerdict.ctaLink}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default RiversideRhoneCruises;