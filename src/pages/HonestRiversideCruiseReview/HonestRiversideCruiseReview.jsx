import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ReviewSnapshotGrid from "../../components/ui/ReviewSnapshotGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CardGrid from "../../components/ui/CardGrid";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ValueShowcase from "../../components/ui/ValueShowcase";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import CinematicDestinations from "../../components/ui/CinematicDestinations";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Placeholder image imports (kept commented out) ─────────────────
   // import HeroImage from "../../assets/HonestRiversideCruiseReview/riverside-review-hero.jpg";
   // import ShipsImage from "../../assets/HonestRiversideCruiseReview/riverside-review-ship.jpg";
   // import SuiteImage from "../../assets/HonestRiversideCruiseReview/riverside-review-suite.jpg";
   // import DiningImage from "../../assets/HonestRiversideCruiseReview/riverside-review-dining.jpg";
   // import DiningPlateImage from "../../assets/HonestRiversideCruiseReview/riverside-review-plate.jpg";
   // import WineImage from "../../assets/HonestRiversideCruiseReview/riverside-review-wine.jpg";
   // import DanubeImage from "../../assets/HonestRiversideCruiseReview/riverside-review-danube.jpg";
   // import RhineImage from "../../assets/HonestRiversideCruiseReview/riverside-review-rhine.jpg";
   // import RhoneImage from "../../assets/HonestRiversideCruiseReview/riverside-review-rhone.jpg";
   // import LoungeImage from "../../assets/HonestRiversideCruiseReview/riverside-review-lounge.jpg";
   // import WorthItImage from "../../assets/HonestRiversideCruiseReview/riverside-review-evening.jpg";
   // import CTAImage from "../../assets/HonestRiversideCruiseReview/riverside-review-ship-exterior.jpg";
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
      "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#webpage",
      name: "Honest Riverside Cruise Review | Is Riverside Luxury Cruises Worth It?",
      url: "https://www.tripsandships.com/honest-riverside-cruise-review",
      description:
        "Read our honest Riverside Cruise review covering suites, dining, service, itineraries, excursions, pricing, pros and cons, and who should sail Riverside Luxury Cruises."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#article",
      headline: "Honest Riverside Cruise Review | Real Look at Riverside Luxury Cruises",
      description:
        "A complete, honest review of Riverside Luxury Cruises covering accommodations, dining, service, itineraries, excursions, pricing, pros and cons, and who should sail.",
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
      "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Riverside Luxury Cruises"
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5"
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#breadcrumb",
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
          name: "Honest Riverside Cruise Review",
          item: "https://www.tripsandships.com/honest-riverside-cruise-review"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#itemlist",
      name: "What This Honest Riverside Cruise Review Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Verdict" },
        { "@type": "ListItem", position: 2, name: "What Makes Riverside Different?" },
        { "@type": "ListItem", position: 3, name: "Suites & Accommodations" },
        { "@type": "ListItem", position: 4, name: "Dining Experience" },
        { "@type": "ListItem", position: 5, name: "Service" },
        { "@type": "ListItem", position: 6, name: "Destinations & Itineraries" },
        { "@type": "ListItem", position: 7, name: "Shore Excursions & Life Onboard" },
        { "@type": "ListItem", position: 8, name: "Pros and Cons" },
        { "@type": "ListItem", position: 9, name: "Is Riverside Worth the Price?" },
        { "@type": "ListItem", position: 10, name: "Our Overall Verdict" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/honest-riverside-cruise-review/#faq",
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

const HonestRiversideCruiseReview = () => {
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

      {/* ── 2. QUICK VERDICT ── */}
      <div id="quick-verdict">
        <ReviewSnapshotGrid data={data.quickVerdict} />
      </div>

      {/* ── 3. WHAT MAKES RIVERSIDE DIFFERENT? ── */}
      <div id="what-makes-riverside-different">
        <AsymmetricStoryIntro
          eyebrow={data.whatMakesRiversideDifferent.eyebrow}
          title={data.whatMakesRiversideDifferent.title}
          subtitle={data.whatMakesRiversideDifferent.subtitle}
          paragraphs={data.whatMakesRiversideDifferent.paragraphs}
          highlights={data.whatMakesRiversideDifferent.highlights}
          image1Placeholder={data.whatMakesRiversideDifferent.image1Placeholder}
          image2Placeholder={data.whatMakesRiversideDifferent.image2Placeholder}
          ctaText={data.whatMakesRiversideDifferent.ctaText}
          ctaLink={data.whatMakesRiversideDifferent.ctaLink}
          image1={
            // "src/assets/HonestRiversideCruiseReview/riverside-review-hero.jpg"
            undefined
          }
          image2={
            // "src/assets/HonestRiversideCruiseReview/riverside-review-lounge.jpg"
            undefined
          }
        />
      </div>

      {/* ── 4. LIFE ONBOARD ── */}
      <div id="life-onboard">
        <CardGrid
          title={data.lifeOnboard.title}
          subtitle={data.lifeOnboard.subtitle}
          cards={data.lifeOnboard.cards}
          columns={4}
          stagger={false}
        />
      </div>

      {/* ── 5. SUITES & ACCOMMODATIONS ── */}
      <div id="suites-and-accommodations">
        <EditorialIntroSection
          heading={data.accommodations.heading}
          eyebrow={data.accommodations.eyebrow}
          paragraphs={data.accommodations.paragraphs}
          highlights={data.accommodations.highlights}
          placeholderLabel={data.accommodations.placeholderLabel}
          badgeTitle={data.accommodations.badgeTitle}
          badgeDescription={data.accommodations.badgeDescription}
          image={
            // "src/assets/HonestRiversideCruiseReview/riverside-review-suite.jpg"
            undefined
          }
        />
      </div>

      {/* ── 6. SERVICE & SHORE EXCURSIONS ── */}
      <div id="service-and-excursions">
        <ValueShowcase
          title={data.serviceAndExcursions.title}
          subtitle={data.serviceAndExcursions.subtitle}
          items={data.serviceAndExcursions.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/HonestRiversideCruiseReview/riverside-review-ship.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-lounge.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 7. DINING EXPERIENCE ── */}
      <div id="dining-experience">
        <LuxuryFeatureShowcase
          title={data.diningExperience.title}
          subtitle={data.diningExperience.subtitle}
          items={data.diningExperience.items.map((item) => ({
            ...item,
            image: [
              // "src/assets/HonestRiversideCruiseReview/riverside-review-dining.jpg"
            ][0]
          }))}
        />
      </div>

      {/* ── 8. DESTINATIONS & ITINERARIES ── */}
      <div id="destinations-and-itineraries">
        <CinematicDestinations
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          items={data.destinations.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/HonestRiversideCruiseReview/riverside-review-danube.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-rhine.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-rhone.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 9. WHO MIGHT PREFER ANOTHER CRUISE LINE? ── */}
      <div id="who-might-prefer-another-line">
        <CardGrid
          title={data.whoMightPreferAnotherLine.title}
          subtitle={data.whoMightPreferAnotherLine.subtitle}
          cards={data.whoMightPreferAnotherLine.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 10. WHO WILL LOVE RIVERSIDE? ── */}
      <div id="who-will-love-riverside">
        <TravelerTypeGrid
          title={data.whoWillLoveRiverside.title}
          subtitle={data.whoWillLoveRiverside.subtitle}
          items={data.whoWillLoveRiverside.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/HonestRiversideCruiseReview/riverside-review-suite.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-dining.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-danube.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-wine.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-rhine.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-rhone.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-plate.jpg",
              // "src/assets/HonestRiversideCruiseReview/riverside-review-evening.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 11. PROS & CONS ── */}
      <div id="pros-and-cons">
        <ProsConsCards
          title={data.prosAndCons.title}
          prosTitle={data.prosAndCons.prosTitle}
          consTitle={data.prosAndCons.consTitle}
          bestFor={data.prosAndCons.pros}
          notBestFor={data.prosAndCons.cons}
          bottomNote={data.prosAndCons.bottomNote}
        />
      </div>

      {/* ── 12. IS RIVERSIDE WORTH THE PRICE? ── */}
      <div id="is-it-worth-the-price">
        <EditorialFeatureShowcase
          title={data.isWorthIt.title}
          subtitle={data.isWorthIt.subtitle}
          features={data.isWorthIt.features}
          image={
            // "src/assets/HonestRiversideCruiseReview/riverside-review-evening.jpg"
            undefined
          }
        />
      </div>

      {/* ── 13. OUR OVERALL VERDICT ── */}
      <div id="our-overall-verdict">
        <ProsConsCards
          title={data.overallVerdict.title}
          prosTitle="We Recommend Riverside If You Want:"
          consTitle="You May Want Another Line If You Prefer:"
          bestFor={data.overallVerdict.recommendIf}
          notBestFor={data.overallVerdict.preferOtherIf}
          bottomNote={data.overallVerdict.subtitle}
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
            subtitle: "Everything travelers need to know before booking a Riverside Luxury Cruise.",
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

export default HonestRiversideCruiseReview;