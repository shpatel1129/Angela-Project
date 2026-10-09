import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import CruiseLinesComparison from "../../components/ui/CruiseLinesComparison";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ProsConsCards from "../../components/ui/ProsConsCards";
import EditorialShipTour from "../../components/ui/EditorialShipTour";
import CulinaryMenuShowcase from "../../components/ui/CulinaryMenuShowcase";
import ValueShowcase from "../../components/ui/ValueShowcase";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CardGrid from "../../components/ui/CardGrid";
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
      "url": "https://www.tripsandships.com",
      "logo": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      "sameAs": [
        "https://www.facebook.com/tripsandships/",
        "https://www.instagram.com/tripsandshipsluxurytravel"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-603-860-3274",
        "email": "sales@tripsandships.com",
        "contactType": "customer service"
      }
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsandships.com",
      "logo": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
      "founder": { "@type": "Person", "name": "Angela Hughes" },
      "areaServed": "Worldwide",
      "priceRange": "$$$$",
      "telephone": "+1-603-860-3274",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Orlando",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      "name": "Angela Hughes",
      "jobTitle": "CEO, Trips & Ships Luxury Travel; Founder, Luxury Travel University",
      "worksFor": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel"
      },
      "description":
        "Luxury travel expert with 40+ years in the travel industry and personal travel to 121+ countries. Global luxury travel speaker and trainer, weekly industry columnist, Travel Leaders Network Advisory Board member, 2024 Luxury Travel Influencer of the Year, and named one of the Most Influential Women in Travel in 2026 by TravelPulse.",
      "award": [
        "2024 Luxury Travel Influencer of the Year — Travel Leaders Network",
        "2026 Most Influential Women in Travel — TravelPulse"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/riverside-vs-tauck-river-cruises/#webpage",
      "name": "Riverside vs. Tauck River Cruises | Which Luxury River Cruise Is Better?",
      "description":
        "Compare Riverside and Tauck River Cruises. Discover differences in ships, suites, dining, service, itineraries, inclusions, pricing, excursions, and which luxury river cruise line is the best fit for your travel style.",
      "url": "https://www.tripsandships.com/riverside-vs-tauck-river-cruises",
      "author": { "@type": "Person", "name": "Angela Hughes" },
      "publisher": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel"
      },
      "datePublished": "2026-08-01",
      "dateModified": "2026-08-01"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/riverside-vs-tauck-river-cruises/#breadcrumb",
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
          "name": "Riverside vs. Tauck",
          "item": "https://www.tripsandships.com/riverside-vs-tauck-river-cruises"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-vs-tauck-river-cruises/#faq",
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

const RiversideVsTauck = () => {
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

      {/* ── 2. QUICK COMPARISON TABLE ── */}
      <div id="content">
        <ComparisonTable data={data.quickComparison} />
      </div>

      {/* ── 3. ABOUT THE CRUISE LINES (CRUISE LINES COMPARISON) ── */}
      <CruiseLinesComparison
        title={data.aboutBrands.title}
        subtitle={data.aboutBrands.subtitle}
        items={data.aboutBrands.items.map((item, idx) => ({
          ...item,
          image: [
            // "src/assets/RiversidevsTauck/riverside-overview.jpg",
            // "src/assets/RiversidevsTauck/tauck-overview.jpg"
          ][idx]
        }))}
      />

      {/* ── 4. PRICING COMPARISON ── */}
      <ProsConsCards
        title={data.pricingComparison.title}
        prosTitle={data.pricingComparison.prosTitle}
        consTitle={data.pricingComparison.consTitle}
        bestFor={data.pricingComparison.bestFor}
        notBestFor={data.pricingComparison.notBestFor}
        bottomNote={data.pricingComparison.bottomNote}
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ── 5. SHIPS & FLEET ── */}
      <EditorialShipTour
        title={data.fleetComparison.title}
        subtitle={data.fleetComparison.subtitle}
        features={data.fleetComparison.features}
        images={[
          // "src/assets/RiversidevsTauck/riverside-fleet.jpg",
          // "src/assets/RiversidevsTauck/tauck-fleet.jpg"
        ]}
      />

      {/* ── 6. DINING EXPERIENCE (CULINARY SHOWCASE) ── */}
      <CulinaryMenuShowcase
        title={data.diningExperience.title}
        subtitle={data.diningExperience.subtitle}
        items={data.diningExperience.items}
        images={[
          // "src/assets/RiversidevsTauck/riverside-dining.jpg",
          undefined,
          // "src/assets/RiversidevsTauck/tauck-dining.jpg"
          undefined
        ]}
      />

      {/* ── 7. SERVICE, ATMOSPHERE & DESTINATIONS (VALUE SHOWCASE) ── */}
      <ValueShowcase
        title={data.editorialHighlights.title}
        subtitle={data.editorialHighlights.subtitle}
        items={data.editorialHighlights.items.map((item, idx) => ({
          ...item,
          image: [
            // "src/assets/RiversidevsTauck/riverside-service.jpg",
            // "src/assets/RiversidevsTauck/tauck-atmosphere.jpg",
            // "src/assets/RiversidevsTauck/tauck-destinations.jpg"
          ][idx]
        }))}
      />

      {/* ── 8. SUITES & ACCOMMODATIONS ── */}
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
          // "src/assets/RiversidevsTauck/riverside-suite.jpg"
          undefined
        }
        image2={
          // "src/assets/RiversidevsTauck/tauck-suite.jpg"
          undefined
        }
      />

      {/* ── 9. SHORE EXCURSIONS ── */}
      <GenericChecklistCards
        title={data.shoreExcursions.title}
        subtitle={data.shoreExcursions.subtitle}
        cards={data.shoreExcursions.cards}
      />

      {/* ── 10. WHO SHOULD CHOOSE WHICH CRUISE LINE ── */}
      <ProsConsCards
        title={data.whoShouldChoose.title}
        prosTitle={data.whoShouldChoose.prosTitle}
        consTitle={data.whoShouldChoose.consTitle}
        bestFor={data.whoShouldChoose.bestFor}
        notBestFor={data.whoShouldChoose.notBestFor}
        bottomNote={data.whoShouldChoose.bottomNote}
        type="compare"
        bgClass="bg-white"
      />

      {/* ── 11. PROS & CONS COMPARISON ── */}
      <GenericChecklistCards
        title={data.prosAndCons.title}
        subtitle={data.prosAndCons.subtitle}
        cards={data.prosAndCons.cards}
      />

      {/* ── 12. WHICH CRUISE LINE OFFERS BETTER VALUE? ── */}
      <ProsConsCards
        title={data.valueComparison.title}
        prosTitle={data.valueComparison.prosTitle}
        consTitle={data.valueComparison.consTitle}
        bestFor={data.valueComparison.bestFor}
        notBestFor={data.valueComparison.notBestFor}
        bottomNote={data.valueComparison.bottomNote}
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ── 13. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={data.whyBookAdvisor.subtitle}
        cards={data.whyBookAdvisor.items}
        columns={4}
      />

      {/* ── 14. ANGELA HUGHES AUTHORITY BOX ── */}
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

      {/* ── 15. FREQUENTLY ASKED QUESTIONS (11 FAQS) ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about choosing between Riverside and Tauck River Cruises.",
          faqs: data.faqs
        }}
      />

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

export default RiversideVsTauck;