import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from "@/components/Navbar/Nav";

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (17 Distinct Unique Components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import FeatureSplit from '@/components/ui/FeatureSplit';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import ComparisonTable from '@/components/ui/ComparisonTable';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import MistakesGrid from '@/components/ui/MistakesGrid';
import TopQuestionsReveal from '@/components/ui/TopQuestionsReveal';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ConclusionSection from '@/components/ui/ConclusionSection';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets (Images Commented Out)
// import AboutImage from "../../assets/AboutAngela.jpeg";
// import AboutImage2 from "../../assets/AboutAngela2.jpeg";

const HowToFindReputableTravelAgentFlorida = () => {

  // Map 10 Quick Answer Factors for BentoQuickFacts
  const quickAnswerBentoItems = pageData.quickAnswer.factors.map((factor, idx) => ({
    title: `Vetting Factor 0${idx + 1}`,
    description: factor
  }));

  // Map 7 Factors in What Makes a Travel Agent Reputable for ThreeColumnGrid
  const whatMakesReputableItems = pageData.whatMakesReputable.factors.map((factor) => ({
    title: factor.title,
    description: `${factor.question} ${factor.description}`,
    image: null,
    placeholderLabel: factor.title
  }));

  // Map 9 Steps to Vetting an Advisor for CurvilinearGrid
  const iconList = ["Compass", "Award", "Star", "Heart", "ShieldCheck", "Map", "Activity", "Clock", "Navigation"];

  const nineStepsCurvilinearItems = pageData.nineSteps.steps.map((st, idx) => {
    const features: string[] = [];
    if (st.questionsToAsk && st.questionsToAsk.length > 0) {
      st.questionsToAsk.forEach((q) => features.push(`Question: "${q}"`));
    }
    if (st.caseStudy) {
      features.push(`Benchmark: ${st.caseStudy}`);
    }
    if (st.specialties && st.specialties.length > 0) {
      st.specialties.forEach((s) => features.push(`${s.name}: ${s.items.join(', ')}`));
    }
    if (st.journeyFlow) {
      features.push(`Logistics Flow: ${st.journeyFlow}`);
    }
    if (st.conclusion) {
      features.push(st.conclusion);
    }
    return {
      title: `${st.number}. ${st.title.replace(/^\d+\.\s*/, '')}`,
      description: `${st.intro} ${st.details}`,
      features,
      icon: iconList[idx] || "CheckCircle"
    };
  });

  // Map Questions to Ask to GenericChecklistCards
  const questionsCards = pageData.questionsToAsk.categories.map((cat) => ({
    title: cat.category,
    items: cat.questions.map((q) => `"${q}"`)
  }));

  // Map Comparison Table for ComparisonTable component
  const comparisonTableData = {
    title: pageData.comparisonTable.title,
    headers: pageData.comparisonTable.headers,
    rows: pageData.comparisonTable.rows.map((row) => [
      row.aspect,
      row.bookingDirectly,
      row.travelAdvisor
    ])
  };

  // Map 5 Trustworthiness evaluation items for HighlightsSplit
  const trustHighlightsItems = [
    {
      title: "The Trust Equation",
      description: `A trustworthy travel advisor combines: ${pageData.trustworthiness.formula}`,
      bulletPoints: [
        "Multi-Decade Travel Industry Experience",
        "Verified Professional Credentials & Affiliations",
        "Transparent Communication & Advisory Support",
        "Direct Specialization in Your Trip Style"
      ],
      icon: "Sparkles",
      image: null
    },
    {
      title: "1. The Complete Picture",
      description: pageData.trustworthiness.paragraphs[0],
      bulletPoints: [
        "Look beyond advertisements and surface-level marketing",
        "Evaluate the complete advisor ecosystem"
      ],
      icon: "Compass",
      image: null
    },
    {
      title: "2. Experience & Communication",
      description: pageData.trustworthiness.paragraphs[1],
      bulletPoints: [
        "Experience without responsiveness creates booking friction",
        "Prioritize prompt, transparent communication"
      ],
      icon: "Clock",
      image: null
    },
    {
      title: "3. Destination Relevance",
      description: pageData.trustworthiness.paragraphs[2],
      bulletPoints: [
        "High review volume must match your specific destination",
        "Demand verified firsthand product knowledge"
      ],
      icon: "Star",
      image: null
    },
    {
      title: "4. Specialization & Verification",
      description: pageData.trustworthiness.paragraphs[3],
      bulletPoints: [
        "Match with an advisor specializing in your exact trip type",
        "Review independent third-party traveler ratings"
      ],
      icon: "Heart",
      image: null
    }
  ];

  // Map 10 Red Flags for MistakesGrid
  const redFlagsItems = pageData.redFlags.items.map((flag, idx) => ({
    number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
    title: flag.title,
    description: flag.description
  }));

  // Map Luxury Advice Diagnostic Questions to TopQuestionsReveal
  const luxuryAdviceQuestions = pageData.luxuryAdviceMatters.diagnosticQuestions.map((item) => ({
    question: `"${item.question}"`,
    answer: item.reason
  }));

  // Final Answer section formatted for ConclusionSection component
  const finalAnswerSections = [
    {
      heading: pageData.finalAnswer.title,
      paragraphs: [
        pageData.finalAnswer.summary,
        `Look for: ${pageData.finalAnswer.corePillars.join(', ')}.`,
        pageData.finalAnswer.paragraphs[0],
        pageData.finalAnswer.paragraphs[1],
        pageData.finalAnswer.paragraphs[2]
      ]
    }
  ];

  // Complete JSON-LD Schema matching standard reference structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida",
        "name": pageData.seo.title,
        "url": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida",
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntity": { "@id": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida#article" }
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
        "@id": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida#article",
        "headline": pageData.seo.title,
        "url": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida",
        "description": pageData.seo.metaDescription,
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntityOfPage": { "@id": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida" }
      },
      {
        "@type": "Service",
        "name": "Travel Advisor Vetting & Advisory Consultation",
        "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
        "serviceType": "Professional Travel Advisory",
        "description": "Guidance and vetting frameworks to help travelers evaluate Florida Seller of Travel registration, ASTA/CLIA credentials, fee transparency, and advisor expertise."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Florida Travel Agency", "item": "https://www.tripsandships.com/best-travel-agency-florida" },
          { "@type": "ListItem", "position": 3, "name": "How to Find a Reputable Travel Agent in Florida", "item": "https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida" }
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
        <meta name="title" content={pageData.seo.title} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.secondaryKeywords.join(', ')} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText="Plan My Luxury Journey"
        primaryCtaLink="/contact"
      />

      {/* ─── 2a. FLORIDA TRAVEL ADVISOR LANDSCAPE (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow="FLORIDA TRAVEL ADVISOR VETTING GUIDE"
        heading="Navigating the Florida Travel Advisory Landscape"
        paragraphs={[
          pageData.hero.introParagraphs[0],
          pageData.hero.introParagraphs[1],
          pageData.hero.introParagraphs[2],
          pageData.hero.introParagraphs[3]
        ]}
      />

      {/* ─── 2b. QUICK ANSWER (BentoQuickFacts) ─── */}
      <BentoQuickFacts
        title={pageData.quickAnswer.title}
        paragraphs={[
          pageData.quickAnswer.intro,
          pageData.quickAnswer.highlight
        ]}
        items={quickAnswerBentoItems}
      />

      {/* ─── 3. WHAT MAKES A TRAVEL AGENT REPUTABLE (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesReputable.title}
        subtitle={pageData.whatMakesReputable.subtitle}
        items={whatMakesReputableItems}
      />

      {/* ─── 4. 9 CRITICAL STEPS TO VETTING A TRAVEL ADVISOR (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.nineSteps.title}
        subtitle={pageData.nineSteps.subtitle}
        items={nineStepsCurvilinearItems}
      />

      {/* ─── 5. MID-PAGE CALL TO ACTION (FeatureSplit) ─── */}
      <FeatureSplit
        title="Ready to Plan Your Next Journey with a Trusted Florida Advisor?"
        summary="Connect directly with Angela Hughes and the Trips & Ships Luxury Travel team to craft a seamless, bespoke itinerary tailored to your travel vision."
        ctaText="Speak With an Advisor"
        ctaLink="/contact"
        theme="light"
        features={[
          "Over 4 decades designing bespoke luxury vacations worldwide",
          "Verified Virtuoso and Travel Leaders elite leadership",
          "Dedicated end-to-end concierge support before, during, and after travel"
        ]}
      />



      {/* ─── 7. AGENCY LEADERSHIP & FOCUS (EditorialIntroSection) ─── */}
      <EditorialIntroSection
        eyebrow="Agency & Advisor Leadership"
        heading={pageData.authority.agencyTitle}
        paragraphs={[pageData.authority.agencyDescription]}
        highlights={pageData.authority.agencyFocus}
        placeholderLabel="Angela Hughes, CTC - CEO & Luxury Travel Specialist"
        badgeTitle="Meet Angela Hughes"
        badgeDescription="Angela Hughes, CTC — CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
      />

      {/* ─── 8. PRE-BOOKING QUESTIONS TO ASK (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.questionsToAsk.title}
        subtitle={`${pageData.questionsToAsk.subtitle} "${pageData.questionsToAsk.conclusion}"`}
        cards={questionsCards}
      />

      {/* ─── 9. TRAVEL AGENT VS BOOKING DIRECTLY (ComparisonTable) ─── */}
      <ComparisonTable data={comparisonTableData} />

      {/* ─── 10. EVALUATING TRUSTWORTHINESS (HighlightsSplit) ─── */}
      <HighlightsSplit
        title={pageData.trustworthiness.title}
        items={trustHighlightsItems}
      />

      {/* ─── 11. RED FLAGS WHEN CHOOSING A TRAVEL AGENT (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.redFlags.title}
        subtitle={pageData.redFlags.subtitle}
        mistakes={redFlagsItems}
      />

      {/* ─── 12. WHY SPECIALIZED ADVICE MATTERS (TopQuestionsReveal) ─── */}
      <TopQuestionsReveal
        title={pageData.luxuryAdviceMatters.title}
        subtitle={`${pageData.luxuryAdviceMatters.subtitle} "${pageData.luxuryAdviceMatters.conclusion}"`}
        questions={luxuryAdviceQuestions}
      />

      {/* ─── 13. REPUTABLE TRAVEL AGENT CHECKLIST (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.checklist.title}
        subtitle={`${pageData.checklist.subtitle} "${pageData.checklist.conclusion}"`}
        points={pageData.checklist.items}
      />

      {/* ─── 6. ANGELA HUGHES AUTHORITY (ExpertCredentials) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={`${pageData.authority.angelaBio} ${pageData.authority.angelaProfileDetails} ${pageData.authority.profileQuote}`}
      />

      {/* ─── 14. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── 15. FINAL ANSWER & SUMMARY (ConclusionSection) ─── */}
      <ConclusionSection sections={finalAnswerSections} />

      {/* ─── 16. FINAL CALL TO ACTION (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.finalAnswer.ctaSection.headline}
        description={pageData.finalAnswer.ctaSection.subheadline}
        buttonText="Plan My Luxury Journey"
        buttonLink="/contact"
      />
    </div>
  );
};

export default HowToFindReputableTravelAgentFlorida;
