import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// Distinct UI Components (Zero repetition of component types)
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import HighlightsSplit from "../../components/ui/HighlightsSplit";
import ValuePropositionHighlight from "../../components/ui/ValuePropositionHighlight";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import CardGrid from "../../components/ui/CardGrid";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import FadeIn from "../../components/ui/FadeIn";

// Data Source
import data from "./data.json";

const WhatIsThereToDoOnSeabourn = () => {
  // ── 1. Dining (Activities 1–6) via DetailedInclusionsList ─────────
  const diningInclusions = {
    title: data.thirtyActivities.dining.title,
    intro: [data.thirtyActivities.dining.items[0].description],
    items: data.thirtyActivities.dining.items.slice(1).map((item) => ({
      title: item.title,
      paragraphs: [item.description]
    }))
  };

  // ── 2. Social Spaces & Nightlife (Activities 7–10) via HighlightsSplit ─
  const socialHighlights = data.thirtyActivities.socialAndNightlife.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    bulletPoints: item.bullets || [],
    icon: idx === 0 ? "Compass" : idx === 1 ? "Star" : idx === 2 ? "Sparkles" : "Heart"
  }));

  // ── 3. Enrichment (Activities 11–12) via ValuePropositionHighlight ──
  const enrichmentItems = data.thirtyActivities.enrichment.items.map((item) => ({
    title: item.title,
    description: `${item.description} Topics explored include: ${item.bullets.join(", ")}.`,
    impact: "Destination & Scholarly Mastery",
    icon: "Compass"
  }));

  // ── 4. Pool & Wellness (Activities 13–17) via TravelerPersonaCards ─
  const wellnessPersonas = data.thirtyActivities.wellness.items.map((item, idx) => {
    const icons = ["Heart", "Camera", "Bike", "Gem", "Wine"];
    return {
      title: item.title,
      description: item.description,
      traits: item.bullets || [],
      icon: icons[idx % icons.length]
    };
  });

  // ── 5. Games & Signatures (Activities 18–21) via GenericChecklistCards ─
  const socialCards = data.thirtyActivities.socialAndSignature.items.map((item) => ({
    title: item.title,
    items: [item.description, ...(item.bullets || [])]
  }));

  // ── 6. Expedition (Activities 22–25) via ThreeColumnGrid ──────────
  const expeditionGridItems = data.thirtyActivities.expeditionAndAdventure.items.map((item) => ({
    title: item.title,
    description: item.description,
    category: "EXPEDITION & ADVENTURE",
    features: item.bullets || []
  }));

  // ── 7. Shore Excursions (Activities 26–29) via StepByStepGuide ────
  const destinationSteps = data.thirtyActivities.destinationAndScenic.items.map((item) => ({
    title: item.title,
    description: `${item.description} ${item.bullets ? `Key highlights include: ${item.bullets.join(", ")}.` : ""}`
  }));

  // ── 8. Sea Day Schedule (Activity 30) via TravelerProfileTabs ─────
  const seaDayProfiles = data.seaDayTimeline.periods.map((period) => ({
    name: period.period,
    tagline: period.badge,
    quote: `Experience pure freedom during the ${period.period.toLowerCase()} hours on a Seabourn sea day.`,
    recommendation: period.activities.join(" • "),
    reason: "Curated experiences that invite participation without ever forcing a rigid schedule.",
    whyFits: period.activities,
    placeholderLabel: `${period.period} on Seabourn`
  }));

  // ── 9. Best Activities by Traveler Style via CardGrid ─────────────
  const travelerStyleCards = data.bestActivitiesByTraveler.sections.map((section, idx) => {
    const icons = ["Sparkles", "Compass", "Activity", "Utensils", "Eye", "Landmark"];
    return {
      title: section.category,
      description: section.advice,
      bullets: section.items,
      icon: icons[idx % icons.length]
    };
  });

  // ── 10. Compatibility Demographics via CurvilinearGrid ────────────
  const compatibilityItems = data.travelerCompatibility.personas.map((persona) => ({
    title: persona.title,
    subtitle: persona.verdict,
    description: persona.description,
    features: persona.highlights,
    icon: "Compass"
  }));

  // ── 11. Cruise Participation & Nuances via FeatureGrid ───────────
  const activityPhilosophyFeatures = data.activityPhilosophy.cards.map((card) => ({
    title: card.title,
    description: card.text,
    highlight: card.lead
  }));

  // Schema.org JSON-LD structured data
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
          "Seabourn Cruises",
          "Luxury Cruises",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Luxury Travel",
          "Cruise Excursions",
          "Luxury Cruise Activities",
          "Alaska Cruises",
          "Antarctica Cruises",
          "European Cruises"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "jobTitle": "CEO and Luxury Travel Expert",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "founder": {
          "@type": "Organization",
          "name": "Luxury Travel University",
          "url": "https://luxurytraveluniversity.com/"
        },
        "knowsAbout": [
          "Luxury Cruises",
          "Seabourn Cruises",
          "Expedition Cruises",
          "Small Ship Cruises",
          "Luxury Travel",
          "Alaska Cruises",
          "Antarctica Cruises",
          "River Cruises",
          "Custom Safaris"
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
        "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#webpage",
        "url": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/",
        "name": "What Is There to Do on a Seabourn Cruise?",
        "headline": "What Is There to Do on a Seabourn Cruise?",
        "description": "What is there to do on a Seabourn cruise? Explore Seabourn activities, entertainment, dining, wellness, excursions, enrichment, nightlife, watersports and more.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": "Seabourn Cruise Activities"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#article"
        },
        "breadcrumb": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#article",
        "headline": "What Is There to Do on a Seabourn Cruise?",
        "description": "A comprehensive guide to Seabourn cruise activities, including dining, entertainment, enrichment, wellness, nightlife, watersports, excursions and expedition experiences.",
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#webpage"
        },
        "articleSection": "Seabourn Cruises",
        "keywords": [
          "What Is There to Do on a Seabourn Cruise",
          "Seabourn cruise activities",
          "Seabourn onboard activities",
          "Seabourn entertainment",
          "Seabourn nightlife",
          "Seabourn cruise excursions",
          "Seabourn dining",
          "Seabourn spa",
          "Seabourn fitness",
          "Seabourn enrichment",
          "Seabourn watersports",
          "Seabourn kayaking",
          "Seabourn Zodiac excursions",
          "Seabourn cruise sea days"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#breadcrumb",
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
            "name": "What Is There to Do on a Seabourn Cruise?",
            "item": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/#faq",
        "url": "https://www.tripsandships.com/seabourn-cruises/what-is-there-to-do/",
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
    <div className="min-h-screen bg-white text-navy-950 font-sans selection:bg-gold-500 selection:text-white">
      {/* ── SEO / Helmet Metadata ───────────────────────────────────── */}
      <Helmet>
        <title>{data.seo.seoTitle}</title>
        <meta name="description" content={data.seo.metaDescription} />
        <meta name="keywords" content={data.seo.secondaryKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.tripsandships.com${data.seo.suggestedUrl}`} />
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>

      {/* ── Global Navigation ──────────────────────────────────────── */}
      <Nav />

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaText="Explore Seabourn Itineraries"
        ctaLink="/contact"
      />

      {/* ── 2. Editorial Introduction ──────────────────────────────── */}
      <EditorialIntroSection
        badge="THE SEABOURN LIFESTYLE"
        title={data.editorialIntro.heading}
        paragraphs={data.editorialIntro.paragraphs}
        takeaway={data.editorialIntro.takeaway}
        accentText="Curated & Uncrowded"
      />

      {/* ── 3. Quick Answer Table ──────────────────────────────────── */}
      <div className="bg-slate-50 py-12">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Typical Day Overview ────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-bold block mb-3">
              {data.typicalDay.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
              {data.typicalDay.title}
            </h2>
            <div className="w-20 h-1 bg-gold-400 mx-auto rounded-full mb-8" />
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed text-left md:text-center max-w-4xl mx-auto">
              {data.typicalDay.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. Everything You Can Do on a Seabourn Voyage (Unique Components) ── */}
      <div className="py-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto pt-16 pb-8 px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-bold block mb-3">
            COMPLETE 30-ACTIVITY CATALOG
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-4">
            Everything You Can Do on a Seabourn Voyage
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Explore all 30 activities organized across culinary arts, social spaces, enrichment, wellness, expeditions, and shore exploration.
          </p>
        </div>

        {/* Group 1: Dining (Activities 1–6) via DetailedInclusionsList */}
        <DetailedInclusionsList
          title={diningInclusions.title}
          intro={diningInclusions.intro}
          items={diningInclusions.items}
        />

        {/* Group 2: Social Spaces & Nightlife (Activities 7–10) via HighlightsSplit */}
        <HighlightsSplit
          title={data.thirtyActivities.socialAndNightlife.title}
          items={socialHighlights}
        />

        {/* Group 3: Enrichment (Activities 11–12) via ValuePropositionHighlight */}
        <ValuePropositionHighlight
          title={data.thirtyActivities.enrichment.title}
          subtitle={data.thirtyActivities.enrichment.subtitle}
          items={enrichmentItems}
          imageOverlayText="Seabourn Conversations & Enrichment"
        />

        {/* Group 4: Pool & Wellness (Activities 13–17) via TravelerPersonaCards */}
        <TravelerPersonaCards
          title={data.thirtyActivities.wellness.title}
          subtitle={data.thirtyActivities.wellness.subtitle}
          personas={wellnessPersonas}
        />

        {/* Group 5: Games & Signature Beach Events (Activities 18–21) via GenericChecklistCards */}
        <GenericChecklistCards
          title={data.thirtyActivities.socialAndSignature.title}
          subtitle={data.thirtyActivities.socialAndSignature.subtitle}
          cards={socialCards}
        />

        {/* Group 6: Expedition Adventures (Activities 22–25) via ThreeColumnGrid */}
        <ThreeColumnGrid
          title={data.thirtyActivities.expeditionAndAdventure.title}
          subtitle={data.thirtyActivities.expeditionAndAdventure.subtitle}
          items={expeditionGridItems}
        />

        {/* Group 7: Shore Excursions & Scenic Cruising (Activities 26–29) via StepByStepGuide */}
        <StepByStepGuide
          title={data.thirtyActivities.destinationAndScenic.title}
          subtitle={data.thirtyActivities.destinationAndScenic.subtitle}
          steps={destinationSteps}
        />
      </div>

      {/* ── 6. Activity 30: What Is There to Do on a Seabourn Sea Day? ─ */}
      <TravelerProfileTabs
        title={data.seaDayTimeline.title}
        subtitle={data.seaDayTimeline.subtitle}
        profiles={seaDayProfiles}
      />

      {/* ── 7. Traveler Compatibility & Demographics (CurvilinearGrid) ── */}
      <CurvilinearGrid
        title={data.travelerCompatibility.title}
        subtitle={data.travelerCompatibility.subtitle}
        items={compatibilityItems}
      />

      {/* ── 8. Seabourn vs Large Mainstream Cruise Ships Table ─────── */}
      <div className="bg-slate-50 py-12">
        <ComparisonTable data={data.seabournVsMegaShipsTable} />
      </div>

      {/* ── 9. Seabourn vs Luxury Competitors (LuxuryZigZagShowcase) ── */}
      <LuxuryZigZagShowcase
        title={data.luxuryCompetitors.title}
        subtitle={data.luxuryCompetitors.subtitle}
        items={data.luxuryCompetitors.items}
      />

      {/* ── 10. Best Activities by Traveler Style (CardGrid) ───────── */}
      <CardGrid
        title={data.bestActivitiesByTraveler.title}
        subtitle={data.bestActivitiesByTraveler.subtitle}
        cards={travelerStyleCards}
        columns={3}
      />

      {/* ── 11. Cruise Participation & Nuances (FeatureGrid) ───────── */}
      <FeatureGrid
        title={data.activityPhilosophy.title}
        subtitle={data.activityPhilosophy.subtitle}
        features={activityPhilosophyFeatures}
      />

      {/* ── 12. Questions to Ask Before Booking ────────────────────── */}
      <ExpertAuthorityChecklist
        title={data.questionsBeforeBooking.title}
        subtitle={data.questionsBeforeBooking.subtitle}
        points={data.questionsBeforeBooking.questions}
      />

      {/* ── 13. Travel Advisor Booking Strategy ────────────────────── */}
      <section className="py-20 bg-ice-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-2">
              {data.advisorValue.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-navy-950">
              {data.advisorValue.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-display text-navy-950 mb-4">{data.advisorValue.bookingStrategy.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{data.advisorValue.bookingStrategy.description}</p>
              <div className="p-4 bg-ice-50 rounded-xl border border-ice-100 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Match ocean yachts vs polar expedition hulls</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Evaluate destination activity pacing & sea days</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Select optimal midship suite deck positions</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-display text-navy-950 mb-4">{data.advisorValue.agencyHighlights.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{data.advisorValue.agencyHighlights.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.advisorValue.agencyHighlights.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mr-2 shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. Angela Hughes Authority & Credentials ──────────────── */}
      <ExpertCredentials
        title={data.angelaHughes.title}
        name={data.angelaHughes.name}
        image={AboutImage}
        badge="LUXURY CRUISE EXPERTISE"
        experienceBadge={data.angelaHughes.experience}
        bio={data.angelaHughes.bio}
        credentials={data.angelaHughes.certifications}
        authorityBoxTitle="Why Plan Your Seabourn Voyage With Angela Hughes?"
        authoritySubtitle="With over four decades of luxury cruising mastery, Angela Hughes ensures your chosen ship and itinerary offer the precise mix of onboard activities, enrichment, and shore adventures for your vacation style."
        ctaText="Work With Angela Hughes"
        ctaLink="/contact"
      />

      {/* ── 15. Frequently Asked Questions (20 FAQs) ───────────────── */}
      <div className="bg-slate-50 py-12">
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

      {/* ── 17. Recommended Internal Links ─────────────────────────── */}
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

      {/* ── 18. Bottom Call to Action ──────────────────────────────── */}
      <CenterCTA
        title="Ready to Experience the World of Seabourn?"
        description="Connect with Angela Hughes and the Trips & Ships Luxury Travel team to plan your ideal voyage with exclusive Virtuoso amenities, preferred suite placements, and expert itinerary advice."
        buttonText="Request Your Seabourn Quote"
        buttonLink="/contact"
        theme="dark"
      />
    </div>
  );
};

export default WhatIsThereToDoOnSeabourn;
