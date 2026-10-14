import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ReviewSnapshotGrid from "../../components/ui/ReviewSnapshotGrid";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import SignatureFeatures from "../../components/ui/SignatureFeatures";
import ValueShowcase from "../../components/ui/ValueShowcase";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import CenterCTA from "../../components/ui/CenterCTA";
import ProsConsCards from "../../components/ui/ProsConsCards";
import ScenicGallery from "../../components/ui/ScenicGallery";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ComparisonTable from "../../components/ui/ComparisonTable";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ExpertPlanning from "../../components/ui/ExpertPlanning";

// Asset Images
import ScenicRiverCruisesReviewHero from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-honest-review-hero.webp";
import WhatMakesScenicDifferent1 from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-all-inclusive-luxury-difference.webp";
import WhatMakesScenicDifferent2 from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-all-inclusive-inclusions-experience.webp";
import LuxurySuites1 from "../../assets/ScenicRiverCruisesReview/scenic-sun-lounge-balcony-suite-review.webp";
import LuxurySuites2 from "../../assets/ScenicRiverCruisesReview/scenic-space-ship-butler-service-luxury-suite-review.webp";
import PersonalizedServiceImage from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-personalized-butler-crew-service.webp";
import ExcursionsImage from "../../assets/ScenicRiverCruisesReview/scenic-freechoice-enrich-luxury-shore-excursions.webp";
import GourmetDiningExperienceImage from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-gourmet-fine-dining-experience.webp";
import ScenicBalconySuiteImage from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-balcony-suite-accommodations.webp";
import GourmetDiningImage from "../../assets/ScenicRiverCruisesReview/scenic-river-cruises-culinary-dishes-wine-pairing.webp";
import DanubeRiverImage from "../../assets/ScenicRiverCruisesReview/scenic-danube-river-cruise-review-destinations.webp";
import MekongRiverImage from "../../assets/ScenicRiverCruisesReview/scenic-mekong-river-cruise-luxury-journey.webp";
import ScenicPanoramaLoungeImage from "../../assets/ScenicRiverCruisesReview/scenic-space-ship-panorama-lounge-observation-deck.webp";
import IsScenicWorthTheMoneyImage from "../../assets/ScenicRiverCruisesReview/is-scenic-river-cruise-worth-the-money-pricing-review.webp";
import CulinaryCtaImage from "../../assets/ScenicRiverCruisesReview/scenic-award-winning-culinary-journeys-review-cta.webp";
import PremierLuxuryCtaImage from "../../assets/ScenicRiverCruisesReview/scenic-premier-all-inclusive-luxury-final-verdict-cta.webp";

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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/review/#webpage",
      name: "Scenic River Cruises Review: Pros, Cons & Best Fit (2026 Guide)",
      url: "https://www.tripsandships.com/scenic-river-cruises/review",
      description:
        "Thinking about booking Scenic River Cruises? Read our honest review covering ships, suites, dining, service, inclusions, pricing, pros, cons, and who Scenic is best suited for."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/review/#article",
      headline: "Scenic River Cruises Review | Pros, Cons, Pricing & Is It Worth It?",
      description:
        "Thinking about booking Scenic River Cruises? Read our honest review covering ships, suites, dining, service, inclusions, pricing, pros, cons, and who Scenic is best suited for.",
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/review/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Scenic River Cruises"
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
      "@id": "https://www.tripsandships.com/scenic-river-cruises/review/#breadcrumb",
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
          name: "Scenic River Cruises",
          item: "https://www.tripsandships.com/scenic-river-cruises"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scenic River Cruises Review",
          item: "https://www.tripsandships.com/scenic-river-cruises/review"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/review/#itemlist",
      name: "What This Scenic River Cruises Review Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "At a Glance" },
        { "@type": "ListItem", position: 2, name: "What Makes Scenic Different?" },
        { "@type": "ListItem", position: 3, name: "Relaxed Luxury" },
        { "@type": "ListItem", position: 4, name: "Luxury Suites" },
        { "@type": "ListItem", position: 5, name: "Personalized Service & Excursions" },
        { "@type": "ListItem", position: 6, name: "Dining" },
        { "@type": "ListItem", position: 7, name: "Pros and Cons" },
        { "@type": "ListItem", position: 8, name: "Experience the Luxury" },
        { "@type": "ListItem", position: 9, name: "Who Is Scenic Best For?" },
        { "@type": "ListItem", position: 10, name: "Scenic vs. Other Luxury Lines" },
        { "@type": "ListItem", position: 11, name: "Is Scenic Worth the Money?" },
        { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/review/#faq",
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

const ScenicRiverCruisesReview = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy-950">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/review" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── NAVBAR ── */}
      <Nav />

      {/* ── 1. HERO ── */}
      <div id="hero">
        <ComparisonHero
          badge={data.hero.badge}
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          primaryCtaText={data.hero.primaryCtaText}
          primaryCtaLink={data.hero.primaryCtaLink}
          backgroundImage={ScenicRiverCruisesReviewHero}
        />
      </div>

      {/* ── 2. AT A GLANCE / QUICK VERDICT ── */}
      <div id="quick-verdict">
        <ReviewSnapshotGrid
          data={data.atAGlance}
        />
      </div>

      {/* ── 3. WHAT MAKES SCENIC DIFFERENT? ── */}
      <div id="what-makes-scenic-different">
        <AsymmetricStoryIntro
          eyebrow={data.whatMakesDifferent.eyebrow}
          title={data.whatMakesDifferent.title}
          subtitle={data.whatMakesDifferent.subtitle}
          paragraphs={data.whatMakesDifferent.paragraphs}
          highlights={data.whatMakesDifferent.highlights}
          image1Placeholder={data.whatMakesDifferent.image1Placeholder}
          image2Placeholder={data.whatMakesDifferent.image2Placeholder}
          ctaText={data.whatMakesDifferent.ctaText}
          ctaLink={data.whatMakesDifferent.ctaLink}
          image1={WhatMakesScenicDifferent1}
          image2={WhatMakesScenicDifferent2}
        />
      </div>

      {/* ── 4. OUR HONEST REVIEW: RELAXED LUXURY ── */}
      <div id="relaxed-luxury">
        <BrandPillarsShowcase
          data={{
            title: data.relaxedLuxury.title,
            subtitle: data.relaxedLuxury.subtitle,
            pillars: data.relaxedLuxury.pillars
          }}
        />
      </div>

      {/* ── 5. OUR HONEST REVIEW: LUXURY SUITES ── */}
      <div id="luxury-suites">
        <SignatureFeatures
          data={{
            title: data.suites.heading,
            subtitle: data.suites.eyebrow,
            features: [
              {
                id: "sun-lounge-suite",
                title: "Scenic Sun Lounge Balcony Suite",
                description: data.suites.paragraphs[0],
                icon: "Sun",
                bullets: [
                  "Private glass Sun Lounge balcony transforms into an open-air veranda",
                  "Spacious hotel-like floor plans with premium soundproofing",
                  "Scenic Slumber Bedding with customizable luxury pillow menu",
                  "Marble en-suite bathroom with plush bathrobes and toiletries"
                ],
                image: "suite1"
              },
              {
                id: "butler-service-suite",
                title: "Space-Ship Butler Service & Stateroom Comforts",
                description: `${data.suites.badgeTitle}: ${data.suites.badgeDescription}`,
                icon: "Anchor",
                bullets: [
                  "Personalized butler service included across all suite tiers",
                  "Complimentary restocked in-suite mini-bar daily",
                  "In-suite Illy espresso machines and fine tea service",
                  "Complimentary garment pressing, shoe shine, and beverage delivery"
                ],
                image: "suite2"
              }
            ]
          }}
          images={{
            suite1: LuxurySuites1,
            suite2: LuxurySuites2
          }}
        />
      </div>

      {/* ── 6. OUR HONEST REVIEW: PERSONALIZED SERVICE & EXCURSIONS ── */}
      <div id="service-and-excursions">
        <ValueShowcase
          title={data.serviceAndExcursions.title}
          subtitle={data.serviceAndExcursions.subtitle}
          items={data.serviceAndExcursions.items.map((item, idx) => ({
            ...item,
            image: [
              PersonalizedServiceImage,
              ExcursionsImage
            ][idx]
          }))}
        />
      </div>

      {/* ── 7. OUR HONEST REVIEW: DINING ── */}
      <div id="dining">
        <LuxuryFeatureShowcase
          title={data.dining.title}
          subtitle={data.dining.subtitle}
          items={[
            {
              title: data.dining.placeholderLabel,
              description: data.dining.intro,
              features: data.dining.highlights,
              image: GourmetDiningExperienceImage
            }
          ]}
        />
      </div>

      {/* ── 8. INLINE CULINARY CTA ── */}
      <div id="inline-cta">
        <CenterCTA
          title={data.inlineCta.title}
          description={data.inlineCta.description}
          buttonText={data.inlineCta.buttonText}
          buttonLink={data.inlineCta.buttonLink}
          image={CulinaryCtaImage}
          theme="dark"
        />
      </div>

      {/* ── 9. PROS AND CONS ── */}
      <div id="pros-and-cons">
        <ProsConsCards
          title={data.prosCons.title}
          prosTitle="Pros"
          consTitle="Cons"
          bottomNote={data.prosCons.bottomNote}
          bestFor={data.prosCons.pros.map((p, idx) => (
            <span key={idx}>
              <strong className="font-semibold text-navy-950 block">{p.title}</strong>
              <span className="text-slate-600 text-sm">{p.desc}</span>
            </span>
          ))}
          notBestFor={data.prosCons.cons.map((c, idx) => (
            <span key={idx}>
              <strong className="font-semibold text-navy-950 block">{c.title}</strong>
              <span className="text-slate-600 text-sm">{c.desc}</span>
            </span>
          ))}
        />
      </div>

      {/* ── 10. PHOTO GALLERY: EXPERIENCE THE LUXURY ── */}
      <div id="photo-gallery">
        <ScenicGallery
          title={data.gallery.title}
          subtitle={data.gallery.subtitle}
          items={data.gallery.items.map((item, idx) => ({
            ...item,
            image: [
              ScenicBalconySuiteImage,
              GourmetDiningImage,
              DanubeRiverImage,
              MekongRiverImage,
              ScenicPanoramaLoungeImage
            ][idx]
          }))}
        />
      </div>

      {/* ── 11. WHO IS SCENIC BEST FOR? / PREFER OTHER LINE ── */}
      <div id="who-is-it-for">
        <GenericChecklistCards
          title={data.whoIsItFor.title}
          subtitle={data.whoIsItFor.subtitle}
          cards={data.whoIsItFor.cards}
        />
      </div>

      {/* ── 12. SCENIC VS. OTHER LUXURY RIVER CRUISE LINES ── */}
      <div id="scenic-vs-competitors">
        <ComparisonTable
          data={data.competitorComparison}
        />
      </div>

      {/* ── 13. IS SCENIC WORTH THE MONEY? ── */}
      <div id="is-it-worth-the-money">
        <EditorialIntroSection
          heading={data.isWorthIt.heading}
          eyebrow={data.isWorthIt.eyebrow}
          paragraphs={data.isWorthIt.paragraphs}
          highlights={data.isWorthIt.highlights}
          badgeTitle={data.isWorthIt.badgeTitle}
          badgeDescription={data.isWorthIt.badgeDescription}
          placeholderLabel={data.isWorthIt.badgeTitle}
          image={IsScenicWorthTheMoneyImage}
        />
      </div>

      {/* ── 14. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <div id="why-book-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.lead}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 15. ANGELA HUGHES LUXURY AUTHORITY ── */}
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

      {/* ── 16. FREQUENTLY ASKED QUESTIONS (11 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Scenic River Cruise.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 17. FINAL VERDICT & CTA ── */}
      <div id="final-verdict">
        <ExpertPlanning
          title={data.finalVerdict.title}
          subtitle={data.finalVerdict.eyebrow}
          sections={data.finalVerdict.sections}
        />
        <CenterCTA
          title={data.finalVerdict.title}
          description={data.finalVerdict.paragraphs[0]}
          buttonText={data.finalVerdict.ctaText}
          buttonLink={data.finalVerdict.ctaLink}
          image={PremierLuxuryCtaImage}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default ScenicRiverCruisesReview;
