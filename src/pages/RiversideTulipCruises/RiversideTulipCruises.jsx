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
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Placeholder image imports (kept commented out) ─────────────────
   // import HeroImage from "../../assets/RiversideTulipCruises/riverside-tulip-hero.jpg";
   // import ShipsImage from "../../assets/RiversideTulipCruises/riverside-tulip-ship.jpg";
   // import AmsterdamImage from "../../assets/RiversideTulipCruises/riverside-tulip-amsterdam.jpg";
   // import KeukenhofImage from "../../assets/RiversideTulipCruises/riverside-tulip-keukenhof.jpg";
   // import KinderdijkImage from "../../assets/RiversideTulipCruises/riverside-tulip-kinderdijk.jpg";
   // import RotterdamImage from "../../assets/RiversideTulipCruises/riverside-tulip-rotterdam.jpg";
   // import AntwerpImage from "../../assets/RiversideTulipCruises/riverside-tulip-antwerp.jpg";
   // import DelftImage from "../../assets/RiversideTulipCruises/riverside-tulip-delft.jpg";
   // import SuiteImage from "../../assets/RiversideTulipCruises/riverside-tulip-suite.jpg";
   // import DiningImage from "../../assets/RiversideTulipCruises/riverside-tulip-dining.jpg";
   // import FieldsImage from "../../assets/RiversideTulipCruises/riverside-tulip-fields.jpg";
   // import WorthItImage from "../../assets/RiversideTulipCruises/riverside-tulip-evening-lounge.jpg";
   // import CTAImage from "../../assets/RiversideTulipCruises/riverside-tulip-ship-exterior.jpg";
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
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#webpage",
      name: "Riverside Tulip Cruises | Luxury Spring River Cruises in Holland & Belgium",
      url: "https://www.tripsandships.com/riverside-tulip-cruises",
      description:
        "Experience spring in the Netherlands and Belgium on a Riverside Tulip Cruise. Visit Amsterdam, Keukenhof Gardens, Kinderdijk, Antwerp, and colorful tulip fields while enjoying boutique luxury river cruising."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#article",
      headline: "Riverside Tulip Cruises | Luxury Holland & Belgium River Cruises",
      description:
        "A complete guide to Riverside Tulip Cruises, covering destinations, accommodations, gourmet dining, included excursions, and whether a Riverside Tulip Cruise is worth booking.",
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
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#breadcrumb",
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
          name: "Riverside Tulip Cruises",
          item: "https://www.tripsandships.com/riverside-tulip-cruises"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#touristtrip",
      name: "Riverside Tulip Cruise",
      touristType: "Spring travelers, garden lovers, couples, photographers, luxury travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Amsterdam, Netherlands" },
          { "@type": "ListItem", position: 2, name: "Keukenhof Gardens, Netherlands" },
          { "@type": "ListItem", position: 3, name: "Kinderdijk, Netherlands" },
          { "@type": "ListItem", position: 4, name: "Rotterdam, Netherlands" },
          { "@type": "ListItem", position: 5, name: "Antwerp, Belgium" },
          { "@type": "ListItem", position: 6, name: "Delft, Netherlands" }
        ]
      }
    },
    {
      "@type": "Cruise",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#cruise",
      name: "Riverside Tulip Cruise",
      provider: {
        "@type": "Organization",
        name: "Riverside Luxury Cruises"
      },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Amsterdam, Netherlands" },
          { "@type": "ListItem", position: 2, name: "Keukenhof Gardens, Netherlands" },
          { "@type": "ListItem", position: 3, name: "Kinderdijk, Netherlands" },
          { "@type": "ListItem", position: 4, name: "Rotterdam, Netherlands" },
          { "@type": "ListItem", position: 5, name: "Antwerp, Belgium" },
          { "@type": "ListItem", position: 6, name: "Delft, Netherlands" }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#destinations",
      name: "Riverside Tulip Cruise Destinations",
      itemListElement: [
        { "@type": "Place", position: 1, name: "Amsterdam, Netherlands" },
        { "@type": "Place", position: 2, name: "Keukenhof Gardens, Netherlands" },
        { "@type": "Place", position: 3, name: "Kinderdijk, Netherlands" },
        { "@type": "Place", position: 4, name: "Rotterdam, Netherlands" },
        { "@type": "Place", position: 5, name: "Antwerp, Belgium" },
        { "@type": "Place", position: 6, name: "Delft, Netherlands" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#service",
      serviceType: "Luxury Spring Tulip River Cruise Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel"
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support to help travelers compare Tulip Cruise itineraries and choose the best sailing dates, ship, and suite for peak bloom season."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#itemlist",
      name: "What This Riverside Tulip Cruises Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Overview" },
        { "@type": "ListItem", position: 2, name: "Why Choose a Tulip Cruise?" },
        { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", position: 4, name: "Highlights of a Riverside Tulip Cruise" },
        { "@type": "ListItem", position: 5, name: "Tulip Fields in Bloom" },
        { "@type": "ListItem", position: 6, name: "Riverside Luxury Accommodations" },
        { "@type": "ListItem", position: 7, name: "Gourmet Dining" },
        { "@type": "ListItem", position: 8, name: "Included Shore Excursions & Life Onboard" },
        { "@type": "ListItem", position: 9, name: "Who Should Choose a Riverside Tulip Cruise?" },
        { "@type": "ListItem", position: 10, name: "Best Time to Go" },
        { "@type": "ListItem", position: 11, name: "Is a Riverside Tulip Cruise Worth It?" },
        { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-tulip-cruises/#faq",
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

const RiversideTulipCruises = () => {
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

      {/* ── 3. WHY CHOOSE A TULIP CRUISE? ── */}
      <div id="why-choose-a-tulip-cruise">
        <AsymmetricStoryIntro
          eyebrow={data.whyChooseTulipCruise.eyebrow}
          title={data.whyChooseTulipCruise.title}
          subtitle={data.whyChooseTulipCruise.subtitle}
          paragraphs={data.whyChooseTulipCruise.paragraphs}
          highlights={data.whyChooseTulipCruise.highlights}
          image1Placeholder={data.whyChooseTulipCruise.image1Placeholder}
          image2Placeholder={data.whyChooseTulipCruise.image2Placeholder}
          ctaText={data.whyChooseTulipCruise.ctaText}
          ctaLink={data.whyChooseTulipCruise.ctaLink}
          image1={
            // "src/assets/RiversideTulipCruises/riverside-tulip-hero.jpg"
            undefined
          }
          image2={
            // "src/assets/RiversideTulipCruises/riverside-tulip-amsterdam.jpg"
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

      {/* ── 5. HIGHLIGHTS OF A RIVERSIDE TULIP CRUISE ── */}
      <div id="luc-destinations">
        <CinematicDestinations
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          items={data.destinations.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideTulipCruises/riverside-tulip-amsterdam.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-keukenhof.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-kinderdijk.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-rotterdam.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-antwerp.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-delft.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. TULIP FIELDS IN BLOOM ── */}
      <div id="tulip-fields-in-bloom">
        <CardGrid
          title={data.tulipFieldsInBloom.title}
          subtitle={data.tulipFieldsInBloom.subtitle}
          cards={data.tulipFieldsInBloom.cards}
          columns={4}
          stagger={false}
        />
      </div>

      {/* ── 7. GOURMET DINING ── */}
      <div id="gourmet-dining">
        <LuxuryFeatureShowcase
          title={data.gourmetDining.title}
          subtitle={data.gourmetDining.subtitle}
          items={data.gourmetDining.items.map((item) => ({
            ...item,
            image: [
              // "src/assets/RiversideTulipCruises/riverside-tulip-dining.jpg"
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
              // "src/assets/RiversideTulipCruises/riverside-tulip-fields.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-evening-lounge.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 9. RIVERSIDE LUXURY ACCOMMODATIONS ── */}
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
            // "src/assets/RiversideTulipCruises/riverside-tulip-suite.jpg"
            undefined
          }
        />
      </div>

      {/* ── 10. WHO SHOULD CHOOSE A RIVERSIDE TULIP CRUISE? ── */}
      <div id="who-should-choose">
        <TravelerTypeGrid
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
          items={data.whoShouldChoose.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideTulipCruises/riverside-tulip-dining.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-amsterdam.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-keukenhof.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-ship.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-kinderdijk.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-rotterdam.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-antwerp.jpg",
              // "src/assets/RiversideTulipCruises/riverside-tulip-fields.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 11. BEST TIME TO GO ── */}
      <div id="best-time-to-go">
        <CardGrid
          title={data.bestTimeToGo.title}
          subtitle={data.bestTimeToGo.subtitle}
          cards={data.bestTimeToGo.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 12. IS A RIVERSIDE TULIP CRUISE WORTH IT? ── */}
      <div id="is-it-worth-it">
        <EditorialFeatureShowcase
          title={data.isWorthIt.title}
          subtitle={data.isWorthIt.subtitle}
          features={data.isWorthIt.features}
          image={
            // "src/assets/RiversideTulipCruises/riverside-tulip-evening-lounge.jpg"
            undefined
          }
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
            subtitle: "Everything travelers need to know before booking a Riverside Tulip Cruise.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 16. FINAL VERDICT & CTA ── */}
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

export default RiversideTulipCruises;