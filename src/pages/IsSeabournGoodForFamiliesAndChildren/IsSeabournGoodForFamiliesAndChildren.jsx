import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components (Zero framer-motion dependencies, unique across page)
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import CardGrid from "../../components/ui/CardGrid";
import ProsConsCards from "../../components/ui/ProsConsCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

// Data Source
import data from "./data.json";

const IsSeabournGoodForFamiliesAndChildren = () => {
  // 1. Format Suite Selection Pillars & Scenarios for ValuePropositionHighlight
  const suiteSelectionItems = [
    ...data.suiteSelection.priorities.map((priority) => ({
      title: priority,
      description: "Essential consideration when configuring luxury suites for families and multigenerational groups on Seabourn.",
      icon: "CheckCircle",
      impact: "Family Comfort"
    })),
    ...data.suiteSelection.scenarios.map((s) => ({
      title: `${s.category}: ${s.recommendation}`,
      description: s.reason,
      icon: "Sparkles",
      impact: "Recommended Fit"
    }))
  ];

  // 2. Format Destination Profiles for TravelerProfileTabs
  const destinationTabProfiles = data.destinationTabs.map((dest) => ({
    name: dest.name,
    tagline: dest.tagline,
    quote: dest.quote,
    recommendation: dest.recommendation,
    reason: dest.reason,
    whyFits: dest.whyFits,
    placeholderLabel: dest.placeholderLabel
  }));

  // 3. Format Luxury Competitors for CardGrid
  const luxuryFactorCards = data.luxuryCompetitors.factors.map((f) => ({
    title: f.title,
    description: f.description
  }));

  // 4. Format Booking Strategy for GenericChecklistCards
  const bookingStrategyCards = [
    {
      title: data.bookingStrategy.bookingWindow.title,
      items: [
        data.bookingStrategy.bookingWindow.description,
        "Secure connecting suites and family configurations before inventory books out",
        "Coordinate multi-suite clusters early for holiday school vacations",
        "Lock in preferred small-group family excursions and private touring"
      ]
    },
    {
      title: data.bookingStrategy.advisorValue.title,
      items: [
        data.bookingStrategy.advisorValue.description,
        "Seamless coordination of international flights, transfers, and 5-star pre-cruise hotels",
        "Verification of age and activity requirements across all planned excursions",
        "Customized celebration arrangements for milestone multigenerational birthdays & anniversaries"
      ]
    }
  ];

  // Schema.org JSON-LD structured data matching user specification verbatim
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": [
          "Organization",
          "TravelAgency"
        ],
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
          "Family Cruises",
          "Family Travel",
          "Multigenerational Travel",
          "Seabourn Family Cruises",
          "Seabourn Cruises with Children",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Luxury Cruise Planning",
          "Shore Excursions"
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
          "Family Travel",
          "Family Cruises",
          "Multigenerational Travel",
          "Seabourn Family Travel",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Luxury Cruise Planning"
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
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#webpage",
        "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/",
        "name": "Is Seabourn Good for Families and Children? Family Guide",
        "headline": "Is Seabourn Good for Families and Children?",
        "description": "Is Seabourn good for families and children? Learn about Seabourn suites, dining, kids, activities, excursions, family travel, age considerations and more.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Seabourn Cruises for Families and Children"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#article"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#article",
        "headline": "Is Seabourn Good for Families and Children?",
        "description": "A guide to Seabourn for families and children, including age requirements, suites, dining, activities, excursions, Alaska and Antarctica cruises, multigenerational travel and family planning considerations.",
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#webpage"
        },
        "articleSection": "Seabourn Cruises",
        "keywords": [
          "Is Seabourn Good for Families and Children",
          "Seabourn for families",
          "Seabourn cruises for families",
          "Seabourn with children",
          "Seabourn kids",
          "Seabourn family cruise",
          "Seabourn cruise for children",
          "Seabourn family travel",
          "Seabourn family suites",
          "Seabourn Alaska family cruise",
          "Seabourn expedition family cruise",
          "Seabourn family activities",
          "Seabourn cruise age requirements",
          "luxury cruises for families",
          "Seabourn multigenerational cruise"
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#breadcrumb",
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
            "name": "Is Seabourn Good for Families and Children?",
            "item": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/#faq",
        "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-good-for-families-and-children/",
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
    <div className="bg-white min-h-screen">
      {/* ── SEO / Meta Tags ────────────────────────────────────────── */}
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
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
        ctaText="Plan Your Luxury Family Cruise"
        ctaLink="/contact"
      />

      {/* ── 2. Editorial Introduction ──────────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.editorialIntro.eyebrow}
        heading={data.editorialIntro.title}
        lead={data.editorialIntro.lead}
        paragraphs={data.editorialIntro.paragraphs}
        quote="Seabourn offers families and multigenerational groups a rare blend of intimate luxury, educational exploration, and shared destination memories without the crowds."
        quoteAuthor="Angela Hughes, CEO & Luxury Travel Expert"
      />

      {/* ── 3. Quick Answer Comparison Table ───────────────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. What Is Seabourn Like for Families & Age Rules ───────── */}
      <AsymmetricStoryIntro
        eyebrow={data.whatIsSeabournLike.eyebrow}
        heading={data.whatIsSeabournLike.title}
        paragraphs={[
          data.whatIsSeabournLike.intro,
          data.whatIsSeabournLike.description,
          data.whatIsSeabournLike.agePolicy.description
        ]}
        highlights={data.whatIsSeabournLike.pillars}
        image1Placeholder="SEABOURN LUXURY FAMILY TRAVEL"
        image2Placeholder="SHARED DESTINATION DISCOVERY"
        ctaText="Explore Family Cruise Itineraries"
        ctaLink="/contact"
      />

      {/* ── 5. Age-by-Age Breakdown & Suitability ──────────────────── */}
      <TravelerPersonaCards
        title={data.ageSuitability.title}
        subtitle={data.ageSuitability.subtitle}
        personas={data.ageSuitability.personas}
      />

      {/* ── 6. Kids Clubs, Activities & What Children Can Do ───────── */}
      <DetailedInclusionsList
        title={data.kidsClubsAndActivities.title}
        intro={data.kidsClubsAndActivities.intro}
        items={data.kidsClubsAndActivities.items}
      />

      {/* ── 7. Multigenerational Travel & Family Celebrations ───────── */}
      <HighlightsSplit
        title={data.multigenerationalDynamics.title}
        items={data.multigenerationalDynamics.items}
      />

      {/* ── 8. Are Seabourn Suites Good for Families? ──────────────── */}
      <ValuePropositionHighlight
        title={data.suiteSelection.title}
        subtitle={data.suiteSelection.subtitle}
        items={suiteSelectionItems}
        imageOverlayText="All-Oceanfront Luxury Family Suite Sanctuaries"
      />

      {/* ── 9. Family Dining, Picky Eaters & 24-Hour Room Service ──── */}
      <LuxuryZigZagShowcase
        title={data.familyDining.title}
        subtitle={data.familyDining.subtitle}
        items={data.familyDining.items}
      />

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Find the Perfect Seabourn Voyage for Your Family"
        description="Speak directly with Angela Hughes and the Trips & Ships team to secure optimal suite configurations, connecting rooms, and custom family shore excursions."
        buttonText="Plan Your Family Cruise"
        buttonLink="/contact"
        theme="dark"
      />

      {/* ── 10. Shore Excursions for Children & Adventure (ThreeColumnGrid) ── */}
      <ThreeColumnGrid
        title={data.familyExcursionsAndAdventure.title}
        subtitle={data.familyExcursionsAndAdventure.subtitle}
        items={data.familyExcursionsAndAdventure.items}
      />

      {/* ── 11. Family Adventure & Global Expeditions ──────────────── */}
      <BrandPillarsShowcase
        data={data.familyAdventureAndDestinations}
      />

      {/* ── 11. Destination Profiles (Tabs) ────────────────────────── */}
      <TravelerProfileTabs
        title="Best Seabourn Destinations for Families"
        subtitle="SELECT THE PERFECT DESTINATION MATCH FOR YOUR CHILDREN'S AGES AND ACTIVITY STYLE"
        profiles={destinationTabProfiles}
      />

      {/* ── 12. Seabourn vs. Mainstream Family Cruise Lines Table ──── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.competitorTable} />
      </div>

      {/* ── 13. Seabourn vs. Disney & Luxury Competitors ──────────── */}
      <CardGrid
        title={data.luxuryCompetitors.title}
        subtitle={data.luxuryCompetitors.subtitle}
        cards={luxuryFactorCards}
        columns={3}
      />

      {/* ── 14. Pros & Cons: Is Seabourn Right for Your Family? ────── */}
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

      {/* ── 15. 7-Step Selection Framework ────────────────────────── */}
      <StepByStepGuide
        title={data.selectionGuide.title}
        subtitle={data.selectionGuide.subtitle}
        steps={data.selectionGuide.steps}
      />

      {/* ── 16. 15 Questions Families Should Ask Before Booking ────── */}
      <ExpertAuthorityChecklist
        title={data.questionsBeforeBooking.title}
        subtitle={data.questionsBeforeBooking.subtitle}
        points={data.questionsBeforeBooking.questions}
      />

      {/* ── 17. Advance Booking Strategy & Advisor Coordination ────── */}
      <GenericChecklistCards
        title="Family Booking Strategy & Advisor Coordination"
        subtitle="SEABOURN FAMILY PLANNING GUIDELINES"
        cards={bookingStrategyCards}
      />

      {/* ── 18. Angela Hughes Authority & Credentials ─────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="LUXURY FAMILY & MULTIGENERATIONAL SPECIALIST"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Plan Your Family Cruise With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury travel experience and having sailed luxury and expedition cruise lines with her own children and grandchildren, Angela Hughes ensures families secure ideal suite locations, connecting configurations, and tailored itineraries."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 19. Frequently Asked Questions (18 FAQs) ───────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faqs} />
      </div>

      {/* ── 20. Final Takeaway & Summary ──────────────────────────── */}
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
        title="Ready to Plan an Unforgettable Luxury Family Voyage?"
        description="Connect with Angela Hughes and the Trips & Ships team to receive personalized suite recommendations, family itineraries, and exclusive luxury perks for your Seabourn cruise."
        buttonText="Request Your Family Cruise Quote"
        buttonLink="/contact"
        theme="light"
      />
    </div>
  );
};

export default IsSeabournGoodForFamiliesAndChildren;
