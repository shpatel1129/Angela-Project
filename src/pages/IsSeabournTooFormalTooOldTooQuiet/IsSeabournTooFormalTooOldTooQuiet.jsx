import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components (Zero framer-motion dependencies, unique across page)
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import CenterCTA from "../../components/ui/CenterCTA";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";

// Data Source
import data from "./data.json";

const IsSeabournTooFormalTooOldTooQuiet = () => {
  // 1. Format Itinerary Pacing Profiles for TravelerProfileTabs
  const itineraryProfiles = data.itineraryEnergyAndSeasons.tabs.map((tab) => ({
    name: tab.name,
    tagline: tab.tagline,
    quote: tab.quote,
    recommendation: tab.recommendation,
    reason: tab.reason,
    whyFits: tab.whyFits,
    placeholderLabel: tab.placeholderLabel
  }));

  // 2. Format Packing Guide for GenericChecklistCards
  const packingCards = [
    {
      title: data.packingGuide.daytime.title,
      items: data.packingGuide.daytime.items
    },
    {
      title: data.packingGuide.evening.title,
      items: data.packingGuide.evening.items
    },
    {
      title: data.packingGuide.expedition.title,
      items: data.packingGuide.expedition.items
    }
  ];

  // 3. Format Advisor Cards for GenericChecklistCards
  const advisorCards = [
    {
      title: data.advisorValue.bookingStrategy.title,
      items: [
        data.advisorValue.bookingStrategy.description,
        "Assess passenger demographics, pacing, and vibe across specific sailing dates",
        "Select optimal midship suite locations tailored to comfort and deck stability",
        "Coordinate seamless flights, private transfers, and luxury 5-star pre-cruise hotels"
      ]
    },
    {
      title: data.advisorValue.agencyHighlights.title,
      items: [
        data.advisorValue.agencyHighlights.description,
        "Over four decades of luxury cruise and expedition planning experience",
        "Virtuoso exclusive amenities, upgrades, and onboard spending credits",
        "Tailored guidance for couples, solo travelers, and multigenerational families"
      ]
    }
  ];

  // 4. Format Cruise Skeptics Section for HighlightsSplit
  const skepticsHighlights = [
    {
      title: "Why People Who Dislike Cruising May Appreciate Seabourn",
      description: `${data.skepticsSection.lead} ${data.skepticsSection.dislikeIntro} ... ${data.skepticsSection.dislikeConclusion} ${data.skepticsSection.closingNote1}`,
      bulletPoints: data.skepticsSection.dislikeReasons,
      icon: "Ship"
    },
    {
      title: "Cruising Realities to Evaluate",
      description: `${data.skepticsSection.cruiseRealityIntro} ${data.skepticsSection.closingNote2}`,
      bulletPoints: data.skepticsSection.cruiseRealities,
      icon: "Compass"
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
          "Seabourn Passenger Demographics",
          "Seabourn Cruise Atmosphere",
          "Seabourn Dress Code",
          "Seabourn Nightlife",
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
          "Seabourn Passenger Demographics",
          "Seabourn Cruise Atmosphere",
          "Seabourn Dress Code",
          "Seabourn Nightlife",
          "Alaska Cruises",
          "Antarctica Cruises",
          "Mediterranean Cruises",
          "Caribbean Cruises",
          "Solo Travel",
          "Family Travel"
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
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#webpage",
        "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/",
        "name": "Is Seabourn Too Formal, Too Old or Too Quiet?",
        "headline": "Is Seabourn Too Formal, Too Old or Too Quiet?",
        "description": "Is Seabourn too formal, too old or too quiet? Learn about Seabourn's dress code, passenger age, nightlife, onboard atmosphere, entertainment and who will enjoy the experience.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Seabourn Cruise Atmosphere"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#article"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#article",
        "headline": "Is Seabourn Too Formal, Too Old or Too Quiet?",
        "description": "A detailed guide to Seabourn's passenger demographics, dress code, onboard atmosphere, nightlife, entertainment, activity level and suitability for different types of travelers.",
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#webpage"
        },
        "articleSection": "Seabourn Cruises",
        "keywords": [
          "Is Seabourn Too Formal, Too Old or Too Quiet",
          "Is Seabourn too formal",
          "Is Seabourn too old",
          "Is Seabourn too quiet",
          "Seabourn atmosphere",
          "Seabourn dress code",
          "Seabourn nightlife",
          "Seabourn average age",
          "Seabourn passenger demographics",
          "Seabourn cruise atmosphere",
          "Seabourn cruise for younger travelers",
          "Seabourn cruise for older travelers",
          "Seabourn cruise for couples",
          "Seabourn cruise for solo travelers",
          "Seabourn cruise entertainment"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#breadcrumb",
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
            "name": "Is Seabourn Too Formal, Too Old or Too Quiet?",
            "item": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/#faq",
        "url": "https://www.tripsandships.com/seabourn-cruises/is-seabourn-too-formal-too-old-too-quiet/",
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
        quote="Seabourn is not a floating theme park or a stuffy gala. It is an intimate, relaxed luxury sanctuary where guests dress intentionally, dine magnificently, and explore the world in unhurried comfort."
        quoteAuthor="Angela Hughes, CEO & Luxury Travel Expert"
      />

      {/* ── 3. Quick Answer Comparison Table ───────────────────────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Dress Code Reality: Formal Nights & Packing ─────────── */}
      <DetailedInclusionsList
        title={data.dressCodeReality.title}
        intro={data.dressCodeReality.intro}
        items={data.dressCodeReality.items}
      />

      {/* ── 5. Passenger Age: 40s, 50s, 60s, 70s & Retirees ────────── */}
      <TravelerPersonaCards
        title={data.ageDemographics.title}
        subtitle={data.ageDemographics.subtitle}
        personas={data.ageDemographics.personas}
      />

      {/* ── 6. Is Seabourn Too Quiet? Nightlife, Dancing & Boredom ──── */}
      <ValuePropositionHighlight
        title={data.quietAndNightlife.title}
        subtitle={data.quietAndNightlife.subtitle}
        items={data.quietAndNightlife.items}
      />

      {/* ── Mid-Page Call to Action ───────────────────────────────── */}
      <CenterCTA
        title="Find the Perfect Seabourn Atmosphere for Your Vacation"
        description="Speak directly with Angela Hughes and the Trips & Ships team to match your preferred energy level, dress expectations, and entertainment style with the ideal ship and itinerary."
        buttonText="Plan Your Cruise With Angela Hughes"
        buttonLink="/contact"
        theme="light"
      />

      {/* ── 7. Traveler Compatibility Profiles ─────────────────────── */}
      <CurvilinearGrid
        title={data.travelerCompatibility.title}
        subtitle={data.travelerCompatibility.subtitle}
        paragraphs={data.travelerCompatibility.paragraphs}
        items={data.travelerCompatibility.items}
      />

      {/* ── 8. Is Seabourn Good for People Who Don't Like Cruises? ── */}
      <HighlightsSplit
        title={data.skepticsSection.title}
        items={skepticsHighlights}
      />

      {/* ── 9. Seabourn vs Large Mainstream Cruise Lines Table ─────── */}
      <div className="bg-slate-50 py-4">
        <ComparisonTable data={data.mainstreamVsSeabournTable} />
      </div>

      {/* ── 10. Seabourn vs Luxury Competitors (Silversea, Regent, Explora, Ritz) ── */}
      <LuxuryZigZagShowcase
        title={data.luxuryCompetitors.title}
        subtitle={data.luxuryCompetitors.subtitle}
        items={data.luxuryCompetitors.items}
      />

      {/* ── 11. Itinerary Pacing & Seasonal Demographics (Tabs) ────── */}
      <TravelerProfileTabs
        title={data.itineraryEnergyAndSeasons.title}
        subtitle={data.itineraryEnergyAndSeasons.subtitle}
        profiles={itineraryProfiles}
      />

      {/* ── 12. What to Pack for Seabourn (Daytime, Evening, Expedition) ── */}
      <GenericChecklistCards
        title={data.packingGuide.title}
        subtitle={data.packingGuide.subtitle}
        cards={packingCards}
      />

      {/* ── 13. 5 Personality Questions to Choose the Right Cruise ─── */}
      <StepByStepGuide
        title={data.fivePersonalityQuestions.title}
        subtitle={data.fivePersonalityQuestions.subtitle}
        steps={data.fivePersonalityQuestions.steps}
      />

      {/* ── 14. Questions to Ask Before Booking ────────────────────── */}
      <ExpertAuthorityChecklist
        title={data.questionsBeforeBooking.title}
        subtitle={data.questionsBeforeBooking.subtitle}
        points={data.questionsBeforeBooking.questions}
      />

      {/* ── 15. Luxury Travel Advisor Strategy ─────────────────────── */}
      <GenericChecklistCards
        title="Why Work With a Luxury Travel Advisor?"
        subtitle="SEABOURN ATMOSPHERE & PLANNING EXPERTISE"
        cards={advisorCards}
      />

      {/* ── 16. Angela Hughes Authority & Credentials ──────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="LUXURY CRUISE & LIFESTYLE EXPERT"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Plan Your Seabourn Voyage With Angela Hughes?"
        authoritySubtitle="With over 40 years of luxury cruise planning and having personally sailed luxury and expedition lines worldwide, Angela Hughes ensures your ship, destination, and sailing date align with your true vacation style."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 17. Frequently Asked Questions (19 FAQs) ───────────────── */}
      <div className="bg-slate-50 py-8">
        <FAQAccordion data={data.faqs} />
      </div>

      {/* ── 18. Final Takeaway & Summary ───────────────────────────── */}
      <ConclusionSection
        sections={[
          {
            heading: data.conclusion.heading,
            paragraphs: data.conclusion.paragraphs
          }
        ]}
      />

      {/* ── 19. Recommended Internal Links ─────────────────────────── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-navy-800 font-bold block mb-2">
              Explore Related Guides
            </span>
            <h2 className="text-3xl font-display text-navy-950">
              Recommended Seabourn Planning Resources
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.internalLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.url}
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-gold-400 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <span className="font-sans text-sm text-navy-950 group-hover:text-gold-600 font-medium">
                  {link.title}
                </span>
                <span className="text-gold-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 20. Bottom Call to Action ──────────────────────────────── */}
      <CenterCTA
        title="Ready to Experience the Elegance of Seabourn?"
        description="Connect with Angela Hughes and the Trips & Ships team to unlock exclusive Virtuoso amenities, optimal suite locations, and personalized itinerary guidance."
        buttonText="Request Your Seabourn Quote"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default IsSeabournTooFormalTooOldTooQuiet;
