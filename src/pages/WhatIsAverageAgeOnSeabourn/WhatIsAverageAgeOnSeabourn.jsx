import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components (Zero framer-motion dependencies, unique across page)
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import ProsConsCards from "../../components/ui/ProsConsCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";

// Data Source
import data from "./data.json";

const WhatIsAverageAgeOnSeabourn = () => {
  // 1. Format Destination Profiles for TravelerProfileTabs
  const destinationTabProfiles = data.itineraryDemographics.tabs.map((dest) => ({
    name: dest.name,
    tagline: dest.tagline,
    quote: dest.quote,
    recommendation: dest.recommendation,
    reason: dest.reason,
    whyFits: dest.whyFits,
    placeholderLabel: dest.placeholderLabel
  }));

  // 2. Format Advisor Value for GenericChecklistCards
  const advisorCards = [
    {
      title: data.advisorValue.bookingStrategy.title,
      items: [
        data.advisorValue.bookingStrategy.description,
        "Compare demographic profiles across sailing dates, seasons, and itineraries",
        "Select optimal midship suite locations tailored to mobility preferences",
        "Coordinate seamless flights, private transfers, and luxury 5-star pre-cruise hotels"
      ]
    },
    {
      title: data.advisorValue.agencyHighlights.title,
      items: [
        data.advisorValue.agencyHighlights.description,
        "Over four decades of luxury cruise and expedition planning experience",
        "Virtuoso exclusive amenities, upgrades, and onboard spending credits",
        "Personalized guidance for solo travelers, couples, and multigenerational families"
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
          "Seabourn Cruises",
          "Luxury Cruises",
          "Luxury Travel",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Mediterranean Cruises",
          "Caribbean Cruises",
          "Solo Travel",
          "Family Travel",
          "Multigenerational Travel"
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
          "Seabourn Cruises",
          "Luxury Cruises",
          "Luxury Travel",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Mediterranean Cruises",
          "Caribbean Cruises",
          "Solo Travel",
          "Family Travel",
          "Multigenerational Travel"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel",
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#webpage",
        "url": "https://www.tripsandships.com/seabourn-cruises/average-age/",
        "name": "What Is the Average Age on a Seabourn Cruise?",
        "headline": "What Is the Average Age on a Seabourn Cruise?",
        "description": "What is the average age on a Seabourn cruise? Learn about the typical Seabourn passenger age, travelers in their 40s, 50s, 60s and 70s, families, solo travelers and what affects the age mix.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Seabourn Cruise Passenger Demographics"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#article"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#article",
        "headline": "What Is the Average Age on a Seabourn Cruise?",
        "description": "A detailed guide to the average age and passenger demographics on Seabourn cruises, including age ranges, younger travelers, older travelers, families, solo travelers and itinerary differences.",
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#webpage"
        },
        "articleSection": "Seabourn Cruises",
        "keywords": [
          "What Is the Average Age on a Seabourn Cruise",
          "Seabourn average age",
          "average age on Seabourn cruises",
          "Seabourn passenger age",
          "Seabourn cruise demographics",
          "Seabourn age range",
          "Seabourn passengers",
          "Seabourn cruise for older adults",
          "Seabourn cruise for younger travelers",
          "Seabourn cruise for couples",
          "Seabourn cruise for solo travelers",
          "Seabourn cruise for families"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#breadcrumb",
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
            "name": "What Is the Average Age on a Seabourn Cruise?",
            "item": "https://www.tripsandships.com/seabourn-cruises/average-age/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/average-age/#faq",
        "url": "https://www.tripsandships.com/seabourn-cruises/average-age/",
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
        ctaText="Plan Your Seabourn Voyage"
        ctaLink="/contact"
      />

      {/* ── 2. Editorial Introduction ──────────────────────────────── */}
      <EditorialIntroSection
        eyebrow={data.editorialIntro.eyebrow}
        heading={data.editorialIntro.title}
        lead={data.editorialIntro.lead}
        paragraphs={data.editorialIntro.paragraphs}
        quote="Seabourn attracts accomplished, well-traveled guests who appreciate five-star dining, intimate ships, and destination immersion over loud entertainment."
        quoteAuthor="Angela Hughes, CEO & Luxury Travel Expert"
      />

      {/* ── 3. Quick Answer Comparison Table ───────────────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Typical Age Range Across Decades ─────────────────────── */}
      <TravelerPersonaCards
        title={data.ageDecades.title}
        subtitle={data.ageDecades.subtitle}
        personas={data.ageDecades.personas}
      />

      {/* ── 5. Why Seabourn Attracts an Older Demographic ──────────── */}
      <BrandPillarsShowcase
        data={data.whyOlderDemographic}
      />

      {/* ── 6. Itinerary & Destination Demographics (Tabs) ─────────── */}
      <TravelerProfileTabs
        title={data.itineraryDemographics.title}
        subtitle={data.itineraryDemographics.subtitle}
        profiles={destinationTabProfiles}
      />

      {/* ── 7. Fleet Variations: Ocean vs Expedition Ships ─────────── */}
      <LuxuryZigZagShowcase
        title={data.shipVariations.title}
        subtitle={data.shipVariations.subtitle}
        items={data.shipVariations.items}
      />

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Find the Perfect Seabourn Sailing for Your Travel Style"
        description="Speak directly with Angela Hughes and the Trips & Ships team to match your age, pacing, and preferred atmosphere with the ideal ship and itinerary."
        buttonText="Plan Your Cruise With Angela Hughes"
        buttonLink="/contact"
        theme="light"
      />

      {/* ── Age by Decade Breakdown (40s, 50s, 60s, 70s) ───────────── */}
      <ValuePropositionHighlight
        title={data.decadeAnalysis.title}
        subtitle={data.decadeAnalysis.subtitle}
        items={data.decadeAnalysis.items}
      />

      {/* ── Younger Travelers & Children Policies on Seabourn ──────── */}
      <HighlightsSplit
        title={data.youngerAndChildrenPolicies.title}
        items={data.youngerAndChildrenPolicies.items}
      />

      {/* ── 8. Younger Guests, Solo Cruisers & Atmosphere ─────────── */}
      <DetailedInclusionsList
        title={data.youngerAndSoloTravelers.title}
        intro={data.youngerAndSoloTravelers.intro}
        items={data.youngerAndSoloTravelers.items}
      />

      {/* ── 9. Luxury Cruise Competitor Demographic Table ──────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.competitorTable} />
      </div>

      {/* ── Repeat Cruisers, Voyage Length, Best Itineraries & Age Limits ── */}
      <CurvilinearGrid
        title={data.passengerDemographicInsights.title}
        subtitle={data.passengerDemographicInsights.subtitle}
        paragraphs={data.passengerDemographicInsights.paragraphs}
        items={data.passengerDemographicInsights.items}
      />

      {/* ── 10. Who Fits Seabourn Best vs Who Might Prefer Other Lines ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.pros}
        notBestFor={data.prosCons.cons}
        bottomNote={data.prosCons.consNote}
        type="pros-cons"
        bgClass="bg-white"
      />

      {/* ── 11. 7 Factors to Consider Beyond Age ───────────────────── */}
      <StepByStepGuide
        title={data.sevenFactors.title}
        subtitle={data.sevenFactors.subtitle}
        steps={data.sevenFactors.steps}
      />

      {/* ── 12. Questions to Ask Before Booking ────────────────────── */}
      <ExpertAuthorityChecklist
        title={data.questionsBeforeBooking.title}
        subtitle={data.questionsBeforeBooking.subtitle}
        points={data.questionsBeforeBooking.questions}
      />

      {/* ── 13. Luxury Travel Advisor Strategy ─────────────────────── */}
      <GenericChecklistCards
        title="Why Work With a Luxury Travel Advisor?"
        subtitle="SEABOURN CRUISE PLANNING EXPERTISE"
        cards={advisorCards}
      />

      {/* ── 14. Angela Hughes Authority & Credentials ──────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="LUXURY CRUISE & DEMOGRAPHIC EXPERT"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Plan Your Seabourn Voyage With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury travel experience and having sailed luxury and expedition cruise lines across every continent, Angela Hughes ensures you choose the right ship, itinerary, and atmosphere for how you truly want to travel."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 15. Frequently Asked Questions (18 FAQs) ───────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faqs} />
      </div>

      {/* ── 16. Final Takeaway & Summary ───────────────────────────── */}
      <ConclusionSection
        sections={[
          {
            heading: data.conclusion.heading,
            paragraphs: data.conclusion.paragraphs
          }
        ]}
      />

      {/* ── 17. Bottom Call to Action ──────────────────────────────── */}
      <CenterCTA
        title="Ready to Experience the Elegance of Seabourn?"
        description="Connect with Angela Hughes and the Trips & Ships team to unlock exclusive Virtuoso amenities, optimal suite locations, and personalized itinerary guidance."
        buttonText="Request Your Seabourn Quote"
        buttonLink="/contact"
        theme="light"
      />
    </div>
  );
};

export default WhatIsAverageAgeOnSeabourn;
