import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ProsConsCards from "../../components/ui/ProsConsCards";
import CardGrid from "../../components/ui/CardGrid";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Placeholder image imports (kept commented out) ─────────────────
   // import HeroImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-hero.jpg";
   // import SuiteImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-suite.jpg";
   // import DiningImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-dining.jpg";
   // import ShipsImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-ship.jpg";
   // import LoungeImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-lounge.jpg";
   // import WorthItImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-evening-lounge.jpg";
   // import CTAImage from "../../assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-ship-exterior.jpg";
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
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#webpage",
      name: "Riverside Luxury Cruises Pros and Cons | Honest Luxury River Cruise Review",
      url: "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons",
      description:
        "Explore the pros and cons of Riverside Luxury Cruises. Learn about spacious suites, gourmet dining, personalized service, potential drawbacks, and whether Riverside is the right luxury river cruise for you."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#article",
      headline: "Riverside Luxury Cruises Pros and Cons | Is Riverside Worth It?",
      description:
        "An honest look at the biggest advantages and potential drawbacks of Riverside Luxury Cruises, covering suites, dining, service, itineraries, pricing, and who Riverside is best suited for.",
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
      "@type": "Review",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#review",
      itemReviewed: {
        "@type": "Organization",
        name: "Riverside Luxury Cruises"
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes"
      },
      reviewBody:
        "Riverside Luxury Cruises stands out for its spacious suites, boutique atmosphere, and personalized hospitality, though its smaller fleet and premium pricing may not suit every traveler.",
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#breadcrumb",
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
          name: "Riverside Luxury Cruises Pros and Cons",
          item: "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons"
        }
      ]
    },
    {
      "@type": "Cruise",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#cruise",
      name: "Riverside Luxury Cruises",
      provider: {
        "@type": "Organization",
        name: "Riverside Luxury Cruises"
      },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Budapest, Hungary" },
          { "@type": "ListItem", position: 2, name: "Vienna, Austria" },
          { "@type": "ListItem", position: 3, name: "Amsterdam, Netherlands" },
          { "@type": "ListItem", position: 4, name: "Strasbourg, France" },
          { "@type": "ListItem", position: 5, name: "Lyon, France" },
          { "@type": "ListItem", position: 6, name: "Avignon, France" },
          { "@type": "ListItem", position: 7, name: "Cologne, Germany" },
          { "@type": "ListItem", position: 8, name: "Passau, Germany" }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#service",
      serviceType: "Luxury River Cruise Comparison & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel"
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support to help travelers compare Riverside Luxury Cruises with other luxury river cruise lines and choose the best itinerary, ship, and suite."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#itemlist",
      name: "What This Riverside Luxury Cruises Pros and Cons Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Overview" },
        { "@type": "ListItem", position: 2, name: "The Biggest Advantages of Riverside Luxury Cruises" },
        { "@type": "ListItem", position: 3, name: "Potential Drawbacks" },
        { "@type": "ListItem", position: 4, name: "Who Will Love Riverside?" },
        { "@type": "ListItem", position: 5, name: "Who Might Prefer Another Cruise Line?" },
        { "@type": "ListItem", position: 6, name: "Riverside vs. Other Luxury River Cruise Lines" },
        { "@type": "ListItem", position: 7, name: "Is Riverside Luxury Cruises Worth It?" },
        { "@type": "ListItem", position: 8, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-luxury-cruises-pros-and-cons/#faq",
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

const RiversideLuxuryCruisesProsAndCons = () => {
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

      {/* ── 2. QUICK OVERVIEW (PROS VS CONS) ── */}
      <div id="quick-overview">
        <ProsConsCards
          title={data.quickOverview.title}
          prosTitle={data.quickOverview.prosTitle}
          consTitle={data.quickOverview.consTitle}
          bestFor={data.quickOverview.pros}
          notBestFor={data.quickOverview.cons}
          bottomNote={data.quickOverview.bottomNote}
        />
      </div>

      {/* ── 3. THE BIGGEST ADVANTAGES ── */}
      <div id="biggest-advantages">
        <CardGrid
          title={data.biggestAdvantages.title}
          subtitle={data.biggestAdvantages.subtitle}
          cards={data.biggestAdvantages.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 4. POTENTIAL DRAWBACKS ── */}
      <div id="potential-drawbacks">
        <CardGrid
          title={data.potentialDrawbacks.title}
          subtitle={data.potentialDrawbacks.subtitle}
          cards={data.potentialDrawbacks.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 5. WHO WILL LOVE RIVERSIDE? ── */}
      <div id="who-will-love-riverside">
        <TravelerTypeGrid
          title={data.whoWillLoveRiverside.title}
          subtitle={data.whoWillLoveRiverside.subtitle}
          items={data.whoWillLoveRiverside.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-suite.jpg",
              // "src/assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-dining.jpg",
              // "src/assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-ship.jpg",
              // "src/assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-lounge.jpg",
              // "src/assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-evening-lounge.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. RIVERSIDE VS. OTHER LUXURY RIVER CRUISE LINES ── */}
      <div id="riverside-vs-other-luxury-river-cruise-lines">
        <BrandPillarsShowcase data={data.brandComparison} />
      </div>

      {/* ── 7. IS RIVERSIDE LUXURY CRUISES WORTH IT? ── */}
      <div id="is-it-worth-it">
        <EditorialFeatureShowcase
          title={data.isWorthIt.title}
          subtitle={data.isWorthIt.subtitle}
          features={data.isWorthIt.features}
          image={
            // "src/assets/RiversideLuxuryCruisesProsAndCons/riverside-pros-cons-evening-lounge.jpg"
            undefined
          }
        />
      </div>

      {/* ── 8. WHO MIGHT PREFER ANOTHER CRUISE LINE? ── */}
      <div id="who-might-prefer-another-line">
        <CardGrid
          title={data.whoMightPreferAnotherLine.title}
          subtitle={data.whoMightPreferAnotherLine.subtitle}
          cards={data.whoMightPreferAnotherLine.cards}
          columns={4}
          stagger={false}
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
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          ctaText={data.angelaHughes.ctaText}
          ctaLink={data.angelaHughes.ctaLink}
        />
      </div>

      {/* ── 11. FREQUENTLY ASKED QUESTIONS (10 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before deciding if Riverside Luxury Cruises is right for them.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 12. FINAL VERDICT & CTA ── */}
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

export default RiversideLuxuryCruisesProsAndCons;