import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import CardGrid from "../../components/ui/CardGrid";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ProsConsCards from "../../components/ui/ProsConsCards";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

// Optional Image Assets (commented out per requirements)
// import SoloHeroImage from "../../assets/SeabournCruises/seabourn-solo-travelers-luxury-single-cruising.jpg";
// import SoloSuiteImage from "../../assets/SeabournCruises/seabourn-oceanfront-luxury-veranda-suites.jpg";
// import SoloDiningImage from "../../assets/SeabournCruises/seabourn-the-restaurant-primary-fine-dining.jpg";
// import ExpeditionShipImage from "../../assets/SeabournCruises/seabourn-venture-polar-luxury-expedition-ship.jpg";

const IsSeabournGoodForSoloTravelers = () => {
  // 1. Format Single Supplement & Pricing for DetailedInclusionsList
  const singleSupplementDetailedItems = [
    {
      title: data.singleSupplementAndPricing.discounts.title,
      paragraphs: data.singleSupplementAndPricing.discounts.paragraphs,
      highlight: {
        title: data.singleSupplementAndPricing.discounts.importantTitle,
        text: data.singleSupplementAndPricing.discounts.importantText
      },
      lists: [
        {
          title: data.singleSupplementAndPricing.discounts.factorsTitle,
          items: data.singleSupplementAndPricing.discounts.factors
        }
      ]
    },
    {
      title: data.singleSupplementAndPricing.cost.title,
      paragraphs: data.singleSupplementAndPricing.cost.paragraphs,
      lists: [
        {
          title: data.singleSupplementAndPricing.cost.calculationsTitle,
          items: data.singleSupplementAndPricing.cost.calculations
        }
      ],
      paragraphsAfter: data.singleSupplementAndPricing.cost.paragraphsAfter
    }
  ];

  // 2. Format Social & Dining Highlights for HighlightsSplit
  const socialAndDiningSplitItems = [
    {
      title: data.socialExperience.title,
      description: `${data.socialExperience.lead}\n\n${data.socialExperience.description}`,
      icon: "Users",
      bulletPoints: data.socialExperience.socialTouchpoints
    },
    {
      title: data.diningFreedom.title,
      description: `${data.diningFreedom.lead}\n\n${data.diningFreedom.description}\n\n${data.diningFreedom.inSuiteDiningDesc}`,
      icon: "Utensils",
      bulletPoints: [
        "Open-seating dining in all primary venues",
        "Zero fixed tables or mandatory assigned seatings",
        "Complimentary 24-hour course-by-course in-suite dining",
        "Freedom to choose private or shared tables nightly"
      ]
    }
  ];

  // 3. Format Suite Selection Pillars for ValuePropositionHighlight
  const suiteSelectionItems = [
    ...data.suiteSelection.priorities.map((priority) => ({
      title: priority,
      description: "Standard luxury design element across Seabourn's all-oceanfront suite accommodations.",
      icon: "CheckCircle",
      impact: "Solo Comfort"
    })),
    ...data.suiteSelection.scenarios.map((s) => ({
      title: `${s.category}: ${s.recommendation}`,
      description: s.reason,
      icon: "Sparkles",
      impact: "Category Fit"
    }))
  ];

  // 4. Format Destinations for TravelerProfileTabs
  const destinationTabProfiles = data.destinations.items.map((dest) => ({
    name: dest.destination,
    tagline: `Best for Solo Exploration`,
    quote: `There is no single best destination for every solo traveler. Your choice should depend on how much independence and social interaction you want.`,
    recommendation: dest.destination,
    reason: dest.highlights,
    whyFits: [
      dest.highlights,
      "Small-group guided excursions & independent port time",
      "Seamless logistics with safe, convenient embarkation ports",
      "Dedicated Seabourn enrichment & destination lectures"
    ],
    placeholderLabel: `SEABOURN ${dest.destination.toUpperCase()} SOLO CRUISE`
  }));

  // 5. Format Loneliness & Vibe Pillars for ThreeColumnGrid
  const atmospherePillars = [
    {
      title: data.lonelinessAndVibe.lonelyTitle,
      description: data.lonelinessAndVibe.lonelyDesc
    },
    {
      title: data.lonelinessAndVibe.quietTitle,
      description: data.lonelinessAndVibe.quietDesc
    },
    {
      title: "Excursions & Private Touring",
      description: `${data.excursionsAndAdventure.privateTouring.description} ${data.excursionsAndAdventure.sharedExcursions.description}`
    }
  ];

  // 6. Format Luxury Competitors for CardGrid
  const luxuryFactorCards = data.competitorComparisons.luxuryCompetitors.factors.map((f) => ({
    title: f.title,
    description: f.description
  }));

  // 7. Format Booking Strategy for GenericChecklistCards
  const bookingStrategyCards = [
    {
      title: data.bookingStrategyAndAdvisor.bookingWindow.title,
      items: [
        data.bookingStrategyAndAdvisor.bookingWindow.description,
        "Monitor real-time capacity-controlled solo promotional releases",
        "Secure preferred midship veranda suite locations early",
        "Lock in exclusive travel advisor amenities and upgrades"
      ]
    },
    {
      title: data.bookingStrategyAndAdvisor.advisorValue.title,
      items: [
        data.bookingStrategyAndAdvisor.advisorValue.description,
        "Compare actual single-occupancy totals across multiple sailing dates",
        "Coordinate business-class international flights and private transfers",
        "Arrange 5-star pre- and post-cruise hotel stays"
      ]
    }
  ];

  // 8. Format Schema JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "TravelAgency"],
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/logo.png"
        },
        "foundingDate": "1995",
        "founder": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Seabourn Cruises",
          "Solo Travel",
          "Solo Cruises",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Luxury Cruise Planning",
          "Shore Excursions",
          "Luxury Travel Planning"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO and Luxury Travel Expert",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "founder": {
          "@type": "Organization",
          "name": "Luxury Travel University",
          "url": "https://luxurytraveluniversity.com/"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Seabourn Cruises",
          "Solo Cruise Travel",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Luxury Cruise Planning",
          "Shore Excursions"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel",
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#webpage",
        "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/",
        "name": "Is Seabourn Good for Solo Travelers? Complete Guide",
        "headline": "Is Seabourn Good for Solo Travelers?",
        "description": "Is Seabourn good for solo travelers? Learn about single supplements, suites, dining, social experiences, excursions, itineraries, costs and what solo guests should know.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Seabourn Cruises for Solo Travelers"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#article"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#article",
        "headline": "Is Seabourn Good for Solo Travelers?",
        "description": "A guide to Seabourn for solo travelers, including single supplements, solo traveler promotions, suites, dining, excursions, itineraries, expedition cruises and booking considerations.",
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#webpage"
        },
        "articleSection": "Seabourn Cruises",
        "keywords": [
          "Is Seabourn Good for Solo Travelers",
          "Seabourn for solo travelers",
          "Seabourn solo cruise",
          "Seabourn single supplement",
          "Seabourn cruises for singles",
          "Seabourn solo travel",
          "Seabourn cruise for one person",
          "luxury cruises for solo travelers",
          "best Seabourn cruise for solo travelers",
          "Seabourn solo traveler discount",
          "Seabourn single occupancy",
          "Seabourn suites for solo travelers",
          "Seabourn shore excursions for solo travelers"
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#breadcrumb",
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
            "name": "Seabourn Cruises",
            "item": "https://www.tripsandships.com/seabourn-cruises/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Is Seabourn Good for Solo Travelers?",
            "item": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/#faq",
        "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/",
        "mainEntity": data.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="w-full bg-white font-sans text-navy-900 antialiased">
      {/* ── SEO / Meta Tags ────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl || "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-solo-travelers/"} />
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      </Helmet>

      {/* ── Navigation Bar ─────────────────────────────────────────── */}
      <Nav />

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        badge={data.hero.badge}
        ctaText="Plan Your Solo Luxury Cruise"
        ctaLink="/contact"
        // image={SoloHeroImage}
      />

      {/* ── 2. Editorial Introduction ──────────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.editorialIntro.eyebrow}
        heading={data.editorialIntro.title}
        lead={data.editorialIntro.lead}
        paragraphs={data.editorialIntro.paragraphs}
        quote="Seabourn delivers the rare freedom of independent solo travel combined with intuitive ultra-luxury service and spontaneous connection."
        quoteAuthor="Angela Hughes, CEO & Luxury Travel Expert"
      />

      {/* ── 3. Quick Answer Comparison Table ───────────────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Why Seabourn Can Be Good for Solo Travelers ─────────── */}
      <AsymmetricStoryIntro
        eyebrow={data.whySeabournWorks.eyebrow}
        heading={data.whySeabournWorks.title}
        paragraphs={[data.whySeabournWorks.intro, data.whySeabournWorks.description]}
        highlights={data.whySeabournWorks.pillars}
        image1Placeholder="SEABOURN PRIVATE VERANDA SUITE RETREAT"
        image2Placeholder="INTIMATE SOCIAL & DINING EXPERIENCES"
        ctaText="Explore Solo Cruise Options"
        ctaLink="/contact"
        // image1={SoloSuiteImage}
      />

      {/* ── 5. Social Experience & Dining Freedom ──────────────────── */}
      <HighlightsSplit
        title="Social Connection & Dining Freedom"
        items={socialAndDiningSplitItems}
      />

      {/* ── 6. Single Supplements & Solo Pricing (DetailedInclusionsList) ── */}
      <DetailedInclusionsList
        title={data.singleSupplementAndPricing.title}
        intro={data.singleSupplementAndPricing.intro}
        items={singleSupplementDetailedItems}
      />

      {/* ── 7. Best Seabourn Suite for a Solo Traveler ─────────────── */}
      <ValuePropositionHighlight
        title={data.suiteSelection.title}
        subtitle={data.suiteSelection.subtitle}
        items={suiteSelectionItems}
        imageOverlayText="All-Oceanfront Luxury Suite Sanctuary"
      />

      {/* ── 8. Solo Shore Excursions & Private Touring ─────────────── */}
      <LuxuryZigZagShowcase
        title={data.excursionsAndPrivateTouring.title}
        subtitle={data.excursionsAndPrivateTouring.subtitle}
        items={data.excursionsAndPrivateTouring.items}
      />

      {/* ── 9. Solo Adventure & Expeditions (Global, Alaska, Antarctica) ── */}
      <BrandPillarsShowcase
        data={data.soloAdventureAndExpeditions}
      />

      {/* ── 10. Solo Traveler Profiles & Lifestyle Styles ───────────── */}
      <TravelerPersonaCards
        title={data.travelerTypes.title}
        subtitle={data.travelerTypes.subtitle}
        personas={data.travelerTypes.personas}
      />

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Find the Perfect Seabourn Voyage for Your Solo Journey"
        description="Speak directly with Angela Hughes and the Trips & Ships team to capture reduced single-supplement promotions, optimal suite locations, and seamless itinerary planning."
        buttonText="Plan Your Solo Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ── 10. Best Destinations for Solo Travelers (Tabs) ────────── */}
      <TravelerProfileTabs
        title={data.destinations.title}
        subtitle={data.destinations.subtitle}
        profiles={destinationTabProfiles}
      />

      {/* ── 11. Atmosphere, Loneliness & Evening Vibe ──────────────── */}
      <ThreeColumnGrid
        title={data.lonelinessAndVibe.title}
        subtitle={data.lonelinessAndVibe.subtitle}
        items={atmospherePillars}
      />

      {/* ── 12. Seabourn vs. Large Cruise Ships Table ──────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable
          data={{
            title: data.competitorComparisons.title,
            subtitle: data.competitorComparisons.subtitle,
            headers: data.competitorComparisons.headers,
            rows: data.competitorComparisons.rows
          }}
        />
      </div>

      {/* ── 13. Seabourn vs Other Luxury Cruise Lines ─────────────── */}
      <CardGrid
        title={data.competitorComparisons.luxuryCompetitors.title}
        subtitle={data.competitorComparisons.luxuryCompetitors.subtitle}
        cards={luxuryFactorCards}
        columns={3}
      />

      {/* ── 14. Pros & Cons: Is Seabourn Right for You? ────────────── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.pros}
        notBestFor={data.prosCons.cons}
        bottomNote={data.prosCons.consNote}
        type="pros-cons"
        bgClass="bg-slate-50"
      />

      {/* ── 15. 5-Step Framework to Choose Your Solo Cruise ───────── */}
      <StepByStepGuide
        title={data.selectionGuide.title}
        subtitle={data.selectionGuide.subtitle}
        steps={data.selectionGuide.steps}
      />

      {/* ── 16. Questions to Ask Before Booking ───────────────────── */}
      <ExpertAuthorityChecklist
        title={data.questionsBeforeBooking.title}
        subtitle={data.questionsBeforeBooking.subtitle}
        points={data.questionsBeforeBooking.questions}
      />

      {/* ── 17. Booking Strategy & Advisor Coordination ───────────── */}
      <GenericChecklistCards
        title="Solo Booking Strategy & Expert Value"
        subtitle="CAPITALIZING ON REDUCED PROMOTIONS"
        cards={bookingStrategyCards}
      />

      {/* ── 18. Angela Hughes Authority & Credentials ─────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="SOLO LUXURY CRUISE SPECIALIST"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Plan Your Solo Cruise With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury travel planning and personal experience sailing luxury and expedition cruise lines worldwide, Angela Hughes ensures solo travelers capture optimal single supplements, premier suite placements, and stress-free vacations."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 19. Frequently Asked Questions ────────────────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faqs} />
      </div>

      {/* ── 20. Final Verdict & Takeaway ──────────────────────────── */}
      <ConclusionSection
        sections={[
          {
            heading: data.conclusion.heading,
            paragraphs: data.conclusion.paragraphs
          }
        ]}
      />

      {/* ── 21. Bottom Call to Action ─────────────────────────────── */}
      <CenterCTA
        title="Ready to Experience the Freedom of Solo Luxury Cruising?"
        description="Connect with Angela Hughes and the Trips & Ships team to unlock exclusive solo rates, tailored itineraries, and expert guidance for your Seabourn voyage."
        buttonText="Request Your Solo Cruise Quote"
        buttonLink="/contact"
        theme="light"
      />
    </div>
  );
};

export default IsSeabournGoodForSoloTravelers;
