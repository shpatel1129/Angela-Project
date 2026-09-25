import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CardGrid from "../../components/ui/CardGrid";
import FAQAccordion from "../../components/ui/FAQAccordion";
import BrandShowcase from "../../components/ui/BrandShowcase";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

/* ── Flatten all FAQ items for Schema ────────────────────────────── */
const allFaqItems = [
  ...data.quickFaqs.map((item) => ({ q: item.title, a: item.description })),
  ...data.faqCategories.flatMap((cat) => cat.items.map((i) => ({ q: i.question, a: i.answer })))
];

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/faqs/",
      "name": "Seabourn Cruise FAQs: Ships, Suites, Costs & Inclusions",
      "description":
        "Get answers to frequently asked questions about Seabourn cruises, including costs, ships, suites, dining, drinks, excursions, dress code, Wi-Fi, gratuities and expedition cruises.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "about": { "@type": "Thing", "name": "Seabourn Cruises" },
      "breadcrumb": { "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#breadcrumb" },
      "mainEntity": { "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#faq" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#faq",
      "url": "https://www.tripsandships.com/seabourn-cruises/faqs/",
      "name": "Seabourn Frequently Asked Questions",
      "mainEntity": allFaqItems.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Cruises", "item": "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Frequently Asked Questions", "item": "https://www.tripsandships.com/seabourn-cruises/faqs/" }
      ]
    }
  ]
};

const SeabournFAQs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>Seabourn FAQs: Cruise Questions Answered</title>
        <meta name="title" content="Seabourn Cruise FAQs: Ships, Suites, Costs & Inclusions" />
        <meta
          name="description"
          content="Get answers to frequently asked questions about Seabourn cruises, including costs, ships, suites, dining, drinks, excursions, dress code, Wi-Fi, gratuities and expedition cruises."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/faqs/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText="Explore Quick FAQs"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. EDITORIAL INTRO ── */}
      <EditorialIntroSection
        eyebrow="SEABOURN CRUISE PLANNING GUIDE"
        heading="Everything You Need to Know Before Booking Seabourn"
        paragraphs={data.hero.paragraphs.slice(1)}
        placeholderLabel="SEABOURN CRUISE PLANNING & FAQS"
        badgeTitle="Ultra-Luxury Guidance"
        badgeDescription="Expert answers backed by over 40 years of luxury cruise industry leadership."
        highlights={[
          "All-inclusive gourmet dining, fine wines & complimentary caviar",
          "Intimate, all-oceanfront suites with intuitive suite host service",
          "Purpose-built PC6 polar expedition ships (Venture & Pursuit)",
          "Curated shore experiences & relaxed yacht-style atmosphere"
        ]}
      />

      {/* ── 3. QUICK SEABOURN FAQ (CARD GRID) ── */}
      <div id="quick-faqs" className="py-12 bg-white">
        <CardGrid
          title="Quick Seabourn FAQ"
          subtitle="Whether you're comparing Seabourn with another luxury cruise line, researching your first Seabourn voyage, choosing a suite or planning an expedition to Antarctica, use this quick reference."
          cards={data.quickFaqs}
          columns={3}
        />
      </div>

      {/* ── CTA 1: MID-PAGE PLANNING ── */}
      <CenterCTA
        title={data.ctas.midCta.title}
        description={data.ctas.midCta.description}
        buttonText={data.ctas.midCta.buttonText}
        buttonLink={data.ctas.midCta.buttonLink}
        theme="dark"
      />

      {/* ── 4. GROUPED FAQ CATEGORIES (57 QUESTIONS ACROSS 11 CATEGORIES USING FAQAccordion COMPONENT) ── */}
      <div id="faq-categories">
        {data.faqCategories.map((category, idx) => (
          <div
            key={category.title}
            className={`py-8 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200/80`}
          >
            <FAQAccordion
              data={{
                title: category.title,
                subtitle: `Seabourn Ultra-Luxury Cruising • ${category.chip}`,
                items: category.items
              }}
            />
          </div>
        ))}
      </div>

      {/* ── 5. IS SEABOURN RIGHT FOR YOU ── */}
      {/*
      // Image for the showcase card (uncomment and pass when image asset is ready):
      // import seabournRightForYouImg from "../../assets/Seabourn/seabourn-lifestyle.jpg";
      */}
      <div className="w-full bg-ice-50 pt-20 pb-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-600 font-bold mb-3 block">
            {data.fitSection.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 tracking-tight">
            {data.fitSection.title}
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            {data.fitSection.intro}
          </p>
        </div>

        <BrandShowcase
          brand={{
            name: "Seabourn Cruises",
            bestFor: "Travelers Who Value Intimacy, Exceptional Service & Fine Dining",
            whatMakesItStandOut: data.fitSection.intro,
            strengths: data.fitSection.highlights,
            considerations: [
              data.fitSection.note
            ],
            /* image: seabournRightForYouImg */
          }}
          index={0}
        />
      </div>

      {/* ── 6. QUICK COMPARISON TABLE ── */}
      <ComparisonTable
        data={{
          title: data.comparisonTable.title,
          headers: data.comparisonTable.headers,
          rows: data.comparisonTable.rows
        }}
      />

      {/* ── 7. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
      <ExpertCredentials
        image={AboutImage}
        name={data.angelaHughes.name}
        title={data.angelaHughes.role}
        badge="LUXURY CRUISE EXPERTISE"
        experienceBadge="40+ YEARS EXPERTISE"
        paragraphs={data.angelaHughes.paragraphs}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.credentials}
        authorityBoxTitle="Why Consult Angela Hughes for Your Seabourn Voyage?"
        authoritySubtitle="With over 40 years of luxury travel industry leadership, Angela Hughes provides unbiased first-hand guidance to ensure your Seabourn cruise exceeds every expectation."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 8. FINAL VERDICT & RECOMMENDATION ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              `Our Recommendation: ${data.finalVerdict.recommendation}`
            ]
          }
        ]}
      />

      {/* ── 9. FINAL CENTER CTA ── */}
      <CenterCTA
        title={data.ctas.finalCta.title}
        description={data.ctas.finalCta.description}
        buttonText={data.ctas.finalCta.buttonText}
        buttonLink={data.ctas.finalCta.buttonLink}
      />
    </div>
  );
};

export default SeabournFAQs;