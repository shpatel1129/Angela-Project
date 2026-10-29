import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from "@/components/Navbar/Nav";

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (19 Unique Existing Components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import LuxuryFeatureShowcase from '@/components/ui/LuxuryFeatureShowcase';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ComparisonTable from '@/components/ui/ComparisonTable';
import ProsConsCards from '@/components/ui/ProsConsCards';
import TopQuestionsReveal from '@/components/ui/TopQuestionsReveal';
import MistakesGrid from '@/components/ui/MistakesGrid';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import ConclusionSection from '@/components/ui/ConclusionSection';
import ScenicGallery from '@/components/ui/ScenicGallery';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets
import AboutImage from "../../../assets/AboutAngela.jpeg";
import AboutImage2 from "../../../assets/AboutAngela2.jpeg";

const BestTravelAgentFlorida = () => {
  // 1. Map specialties to InteractivePillarHubGrid items with clean placeholders
  const specialtyHubItems = pageData.specialties.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    image: null,
    placeholderLabel: `${item.title.toUpperCase()} — TRIPS & SHIPS`,
    actionLabel: "Explore Specialty",
    links: [
      { label: `Learn more about ${item.title}`, url: item.link },
      { label: "Request a Custom Itinerary", url: "/contact" }
    ],
    mainUrl: item.link
  }));

  // 2. Map 8 Factors to ThreeColumnGrid items
  const whatMakesBestItems = pageData.whatMakesBest.factors.map((factor) => ({
    title: factor.title,
    description: `${factor.question} ${factor.description}`,
    image: null,
    placeholderLabel: factor.title
  }));

  // 3. Map Safari Planning Factors for CurvilinearGrid
  const safariItems = pageData.deepDives.safariExpertise.factors.map((factor) => ({
    title: factor,
    description: "Crucial element evaluated and managed for bespoke African safari itineraries.",
    icon: "Compass"
  }));

  // 4. Map Dual Deep Dives for LuxuryFeatureShowcase
  const dualDeepDiveItems = [
    {
      title: pageData.deepDives.expeditionExpertise.title,
      subtitle: pageData.deepDives.expeditionExpertise.subtitle,
      description: pageData.deepDives.expeditionExpertise.description,
      features: [
        "Polar Class Hull Verification & Ice Navigation Safety Standards",
        "Zodiac Operations, Wet Landings & Expedition Scientist Leadership"
      ]
    },
    {
      title: pageData.deepDives.riverCruiseExpertise.title,
      subtitle: pageData.deepDives.riverCruiseExpertise.subtitle,
      description: pageData.deepDives.riverCruiseExpertise.description,
      features: [
        "Waterway Water Levels, Low-Bridge Clearances & Seasonal Lock Flow",
        "Central City Docking vs. Outlying Industrial Port Logistics"
      ]
    }
  ];

  // 5. Map What Advisor Does Cards for GenericChecklistCards
  const advisorDoesCards = [
    {
      title: "Before the Trip: Strategy & Curation",
      items: pageData.whatAdvisorDoes.beforeTrip
    },
    {
      title: "During the Trip: Advocacy & Care",
      items: pageData.whatAdvisorDoes.duringTrip
    },
    {
      title: "Travel Agent vs. Online Booking (Complex Trip Coordination)",
      items: [
        "Multi-leg international flight routing and tight connection protection",
        "Private transfers synchronized with hotel check-in times and baggage assistance",
        "Cruise cabin placement, deck acoustics & priority ship boarding privileges",
        "Vetted local private guides and skip-the-line museum admissions",
        "Real-time travel disruption advocacy, supplier re-protection and emergency care",
        "The more moving parts a trip has, the more valuable professional coordination becomes"
      ]
    }
  ];

  // 6. Map Comparison Table Data
  const comparisonTableData = {
    title: pageData.comparisonFramework.title,
    headers: [
      "What Travelers Need",
      "Online Booking",
      "General Travel Agent",
      "Angela Hughes (Luxury Advisor)"
    ],
    rows: pageData.comparisonFramework.rows.map((row) => [
      row.need,
      row.online,
      row.general,
      row.luxury
    ])
  };

  // 7. Map Evaluation Questions for TopQuestionsReveal
  const evaluationQuestions = pageData.howToChoose.questions.map((item) => ({
    question: `${item.num}. ${item.q}`,
    answer: item.a
  }));

  // 8. Map 6 Mistakes for MistakesGrid component
  const mistakesItems = pageData.commonMistakes.mistakes.map((mistake, idx) => ({
    number: `0${idx + 1}`,
    title: mistake.title,
    description: mistake.description
  }));

  // 9. Map Client Reviews & Stats (10 items total) for BentoQuickFacts
  const clientReviewBentoItems = [
    ...pageData.clientReviews.stats.map((stat) => ({
      label: stat.label,
      title: stat.label,
      value: stat.value,
      description: stat.value
    })),
    ...pageData.clientReviews.themes.map((theme) => ({
      label: theme.title,
      title: theme.title,
      value: theme.desc,
      description: theme.desc
    }))
  ];

  // 10. Map Media Cards for ScenicGallery
  const mediaGalleryItems = pageData.mediaExperience.cards.map((card) => ({
    title: `${card.number}. ${card.title}`,
    description: card.desc
  }));

  // 11. FAQ data formatted for FAQAccordion
  const faqData = {
    title: pageData.faqs.title,
    questions: pageData.faqs.items.map((faq) => faq.question),
    answers: pageData.faqs.items.map((faq) => faq.answer)
  };

  // 12. Curated Florida Guides & Interlinking Hub (Referencing ScenicRiverCruises page pattern)
  const floridaInterlinkingGuides = [
    {
      title: "Best Travel Agency in Florida",
      category: "Luxury Agency Guide",
      description: "Discover Florida's premier luxury travel agency. Explore full-service bespoke itinerary planning, VIP hotel privileges, and 40+ years of high-touch travel advocacy.",
      image: null,
      placeholderLabel: "BEST TRAVEL AGENCY FLORIDA",
      actionLabel: "Explore Agency Guide",
      badgeCount: 2,
      links: [
        { label: "Florida Luxury Travel Agency Guide", url: "/best-travel-agency-florida" },
        { label: "Schedule an Agency Consultation", url: "/contact" }
      ],
      mainUrl: "/best-travel-agency-florida"
    },
    {
      title: "Best Cruise Travel Agent in Florida",
      category: "Cruise Specialist Guide",
      description: "Your guide to Florida's premier cruise advisors for luxury ocean, European river, and polar expedition voyages, featuring exclusive perks and cabin selection expertise.",
      image: null,
      placeholderLabel: "BEST CRUISE TRAVEL AGENT FLORIDA",
      actionLabel: "Explore Cruise Guide",
      badgeCount: 2,
      links: [
        { label: "Florida Cruise Specialist Guide", url: "/best-cruise-travel-agent-florida" },
        { label: "Compare Luxury Cruise Lines", url: "/contact" }
      ],
      mainUrl: "/best-cruise-travel-agent-florida"
    },
    {
      title: "How to Find a Reputable Travel Agent in Florida",
      category: "Advisor Vetting Guide",
      description: "9 critical vetting steps, Florida Seller of Travel (FDACS) licensing verification, industry certifications (ASTA, CLIA), and fee transparency checks.",
      image: null,
      placeholderLabel: "VETTING REPUTABLE AGENTS FLORIDA",
      actionLabel: "Explore Vetting Guide",
      badgeCount: 2,
      links: [
        { label: "9-Step Advisor Vetting Checklist", url: "/how-to-find-reputable-travel-agent-florida" },
        { label: "Florida Seller of Travel Rules", url: "/how-to-find-reputable-travel-agent-florida" }
      ],
      mainUrl: "/how-to-find-reputable-travel-agent-florida"
    },
    {
      title: "Does It Cost More to Book Through a Travel Agent?",
      category: "Travel Economics Guide",
      description: "Uncover how travel agents are paid, supplier commissions vs. planning fees, direct booking vs. advisor price parity, and hidden value advantages.",
      image: null,
      placeholderLabel: "TRAVEL ADVISOR COST ECONOMICS",
      actionLabel: "Explore Cost Guide",
      badgeCount: 2,
      links: [
        { label: "Booking Direct vs. Travel Advisor", url: "/does-it-cost-more-to-book-through-a-travel-agent" },
        { label: "Travel Agent Fee Transparency", url: "/does-it-cost-more-to-book-through-a-travel-agent" }
      ],
      mainUrl: "/does-it-cost-more-to-book-through-a-travel-agent"
    }
  ];

  // Complete JSON-LD Schema matching standard reference structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/best-travel-agent-florida",
        "name": pageData.seo.title,
        "url": "https://www.tripsandships.com/best-travel-agent-florida",
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntity": { "@id": "https://www.tripsandships.com/best-travel-agent-florida#article" }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel agency specializing in African safaris, expedition cruises, bucket list vacations, luxury cruises, and personalized adventure travel.",
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Winter Garden",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "telephone": "+1-603-860-3274"
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
        "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/best-travel-agent-florida#article",
        "headline": pageData.seo.title,
        "url": "https://www.tripsandships.com/best-travel-agent-florida",
        "description": pageData.seo.metaDescription,
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntityOfPage": { "@id": "https://www.tripsandships.com/best-travel-agent-florida" }
      },
      {
        "@type": "Service",
        "name": "Florida Luxury Travel Advisory & Planning",
        "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
        "serviceType": "Luxury Travel Consulting",
        "description": "High-touch luxury travel consulting and custom itinerary planning for ocean cruises, river journeys, African safaris, expedition voyages, and bespoke international travel."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Florida Luxury Travel", "item": "https://www.tripsandships.com/best-travel-agency-florida" },
          { "@type": "ListItem", "position": 3, "name": "Best Travel Agent in Florida", "item": "https://www.tripsandships.com/best-travel-agent-florida" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": pageData.faqs.items.map((faq) => ({
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
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords.join(', ')} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/best-travel-agent-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/best-travel-agent-florida" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── 2. QUICK ANSWER & COMMERCIAL INVESTIGATION (AsymmetricStoryIntro) ─── */}
      <AsymmetricStoryIntro
        eyebrow="Commercial Investigation & Local Recommendation"
        heading={pageData.quickAnswer.title}
        paragraphs={[
          `"${pageData.quickAnswer.lead}"`,
          pageData.quickAnswer.body,
          pageData.quickAnswer.closing
        ]}
        highlights={pageData.quickAnswer.specialties}
        ctaText="Start Your Consultation"
        ctaLink="/contact"
        image1Placeholder="FLORIDA LUXURY TRAVEL ADVISORY"
      />

      {/* ─── 3. WHAT MAKES A TRAVEL AGENT THE BEST (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesBest.title}
        subtitle={pageData.whatMakesBest.subtitle}
        items={whatMakesBestItems}
      />

      {/* ─── 4. WHY ANGELA HUGHES STANDS OUT (EditorialIntroSection) ─── */}
      <EditorialIntroSection
        eyebrow="PROFESSIONAL DISTINCTION"
        title={pageData.whyAngelaStandsOut.title}
        subtitle={pageData.whyAngelaStandsOut.subtitle}
        paragraphs={[
          pageData.whyAngelaStandsOut.body1,
          pageData.whyAngelaStandsOut.body2,
          pageData.whyAngelaStandsOut.body3
        ]}
        image={AboutImage}
        placeholderLabel="ANGELA HUGHES - INDUSTRY LEADERSHIP"
        badgeTitle={pageData.whyAngelaStandsOut.author}
        badgeDescription={pageData.whyAngelaStandsOut.quote}
      />



      {/* ─── 6. TRIPS & SHIPS SPECIALTIES (InteractivePillarHubGrid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title={pageData.specialties.title}
          subtitle={pageData.specialties.subtitle}
          items={specialtyHubItems}
          variant="destination"
        />
      </div>

      {/* ─── 7. DEEP DIVE 1: LUXURY CRUISE EXPERTISE (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.deepDives.cruiseExpertise.title}
        subtitle={`${pageData.deepDives.cruiseExpertise.subtitle} — ${pageData.deepDives.cruiseExpertise.description}`}
        points={pageData.deepDives.cruiseExpertise.checklist}
      />

      {/* ─── 8. DEEP DIVE 2: AFRICAN SAFARI PLANNING (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.deepDives.safariExpertise.title}
        subtitle={pageData.deepDives.safariExpertise.subtitle}
        paragraphs={[pageData.deepDives.safariExpertise.description]}
        items={safariItems}
      />

      {/* ─── 9. EXPEDITION TRAVEL & RIVER CRUISING (LuxuryFeatureShowcase) ─── */}
      <LuxuryFeatureShowcase
        title="Expedition & River Cruising Specialization"
        subtitle="NICHE WATERWAY & EXPEDITION ADVISORY"
        items={dualDeepDiveItems}
      />

      {/* ─── 10. WHAT A LUXURY TRAVEL ADVISOR ACTUALLY DOES (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.whatAdvisorDoes.title}
        subtitle={pageData.whatAdvisorDoes.subtitle}
        cards={advisorDoesCards}
      />

      {/* ─── 11. 13-ROW COMPARISON FRAMEWORK TABLE (ComparisonTable) ─── */}
      <ComparisonTable data={comparisonTableData} />

      {/* ─── 12. BEST FOR VS. WHO MAY NOT NEED (ProsConsCards) ─── */}
      <ProsConsCards
        title={pageData.bestFor.title}
        prosTitle="Ideal Client Profile"
        consTitle={pageData.notBestFor.title}
        bestFor={pageData.bestFor.items}
        notBestFor={pageData.notBestFor.items}
        bottomNote={pageData.notBestFor.subtitle}
        type="compare"
        bgClass="bg-slate-50"
      />

      {/* ─── 13. HOW TO CHOOSE THE BEST TRAVEL AGENT (TopQuestionsReveal) ─── */}
      <TopQuestionsReveal
        title={pageData.howToChoose.title}
        subtitle={pageData.howToChoose.subtitle}
        questions={evaluationQuestions}
      />

      {/* ─── 14. 6 COMMON MISTAKES TRAVELERS MAKE (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.commonMistakes.title}
        items={mistakesItems}
      />

      {/* ─── 15. CLIENT REVIEWS & VERIFIED STATS (BentoQuickFacts) ─── */}
      <BentoQuickFacts
        title={pageData.clientReviews.title}
        paragraphs={[pageData.clientReviews.subtitle]}
        items={clientReviewBentoItems}
      />

      {/* ─── 16. THE TRIPS & SHIPS DIFFERENCE (ConclusionSection) ─── */}
      <ConclusionSection
        sections={[
          {
            heading: "The Trips & Ships Difference",
            paragraphs: [
              `"${pageData.tripsAndShipsDifference.quote}"`,
              pageData.tripsAndShipsDifference.body,
              "Core Philosophy: Advocacy & Problem Solving for When Plans Change."
            ]
          }
        ]}
      />

      {/* ─── 17. DYNAMIC LUXURY TRAVEL MEDIA EXPERIENCE (ScenicGallery) ─── */}
      <ScenicGallery
        title={pageData.mediaExperience.title}
        subtitle={pageData.mediaExperience.subtitle}
        items={mediaGalleryItems}
      />

      {/* ─── CURATED FLORIDA TRAVEL GUIDES & INTERLINKING HUB (InteractivePillarHubGrid Component) ─── */}
      <div id="florida-travel-guides-hub" className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(50%-1rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated Florida Travel & Advisory Guides"
          subtitle="Discover comprehensive Florida luxury travel guides, cruise planning resources, advisor vetting frameworks, and port-specific insights."
          items={floridaInterlinkingGuides}
          variant="destination"
        />
      </div>

      {/* ─── 5. ANGELA HUGHES AUTHORITY BOX (ExpertCredentials) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={pageData.authorityBox.bio}
        image={AboutImage2}
      />

      {/* ─── 18. FAQ SECTION (FAQAccordion) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 19. FINAL CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title="Ready to Plan a Journey Worth Remembering?"
        description="Tell us where you want to go, what matters most to you, and what you want the experience to feel like. Angela Hughes and Trips & Ships Luxury Travel will turn your vision into a carefully crafted masterpiece."
        buttonText="Schedule Your Luxury Consultation"
        buttonLink="/contact"
        image={null}
      />
    </div>
  );
};

export default BestTravelAgentFlorida;
