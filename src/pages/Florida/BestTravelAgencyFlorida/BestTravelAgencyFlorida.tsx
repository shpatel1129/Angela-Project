import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from "@/components/Navbar/Nav";

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (20 Distinct Unique Components)
import ComparisonHero from '@/components/ui/ComparisonHero';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import EditorialIntroSection from '@/components/ui/EditorialIntroSection';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import LuxuryFeatureShowcase from '@/components/ui/LuxuryFeatureShowcase';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import TopQuestionsReveal from '@/components/ui/TopQuestionsReveal';
import AuthorityGrid from '@/components/ui/AuthorityGrid';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import ProsConsCards from '@/components/ui/ProsConsCards';
import MistakesGrid from '@/components/ui/MistakesGrid';
import ScenicGallery from '@/components/ui/ScenicGallery';
import ConclusionSection from '@/components/ui/ConclusionSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';

// Assets
import AboutImage from "../../../assets/AboutAngela.jpeg";
import AboutImage2 from "../../../assets/AboutAngela2.jpeg";

const BestTravelAgencyFlorida = () => {
  // 1. Map 8 Factors to ThreeColumnGrid items
  const whatMakesBestItems = pageData.whatMakesBest.factors.map((factor) => ({
    title: factor.title,
    description: `${factor.question} ${factor.description}`,
    image: null,
    placeholderLabel: factor.title
  }));

  // 3. Map River Cruise Factors for CurvilinearGrid
  const riverCruisesItems = pageData.deepDives.riverCruises.factors.map((factor) => ({
    title: factor,
    description: "Essential river cruise element evaluated by our specialist advisors.",
    icon: "Anchor"
  }));

  // 4. Map Safaris, Expeditions & Custom Travel for LuxuryFeatureShowcase
  const expeditionSafariItems = [
    {
      title: pageData.deepDives.safariExpertise.title,
      description: pageData.deepDives.safariExpertise.description,
      features: pageData.deepDives.safariExpertise.factors
    },
    {
      title: pageData.deepDives.expeditionTravel.title,
      description: pageData.deepDives.expeditionTravel.description,
      features: pageData.deepDives.expeditionTravel.factors
    },
    {
      title: pageData.deepDives.customTravel.title,
      description: `${pageData.deepDives.customTravel.description} ${pageData.deepDives.customTravel.footer}`,
      features: [
        "Private Jet & Bush Aviation Logistics",
        "Bespoke Multi-Country Itinerary Architecture"
      ]
    }
  ];

  // 5. Map 6 Agency Roles for TravelerTypeGrid
  const agencyRolesItems = pageData.whatAdvisorDoes.roles.map((item) => ({
    title: `Your ${item.role}`,
    description: item.desc,
    icon: "ShieldCheck"
  }));

  // 6. Map Travel Agency vs Online Booking for GenericChecklistCards
  const comparisonBookingCards = [
    {
      title: pageData.comparisonFramework.onlineBooking.title,
      items: pageData.comparisonFramework.onlineBooking.bestFor
    },
    {
      title: pageData.comparisonFramework.luxuryAgency.title,
      items: pageData.comparisonFramework.luxuryAgency.bestFor
    }
  ];

  // 7. Map 10 Agency Evaluation Questions for TopQuestionsReveal
  const agencyEvaluationQuestions = pageData.howToChoose.questions.map((item) => ({
    question: `${item.num}. ${item.q}`,
    answer: item.a
  }));

  // 8. Map Distinctive Difference & Recognition for AuthorityGrid
  const recognitionItems = pageData.industryRecognition.points.map((pt) => ({
    title: pt.title,
    description: pt.desc
  }));

  // 9. Map 4 Stats + 6 Review Themes (10 items total) for BentoQuickFacts
  const clientReviewsItems = [
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

  // 10. Map 7 Mistakes for MistakesGrid component
  const mistakesItems = pageData.commonMistakes.mistakes.map((mistake, idx) => ({
    number: `0${idx + 1}`,
    title: mistake.title,
    description: mistake.description
  }));

  // 11. Map Media Cards for ScenicGallery
  const mediaGalleryItems = pageData.mediaExperience.cards.map((card) => ({
    title: `${card.number}. ${card.title}`,
    description: card.desc
  }));

  // 12. FAQ data formatted for FAQAccordion
  const faqData = {
    title: pageData.faqs.title,
    questions: pageData.faqs.items.map((faq) => faq.question),
    answers: pageData.faqs.items.map((faq) => faq.answer)
  };

  // Complete JSON-LD Schema matching standard reference structure
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/best-travel-agency-florida",
        "name": pageData.seo.title,
        "url": "https://www.tripsandships.com/best-travel-agency-florida",
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntity": { "@id": "https://www.tripsandships.com/best-travel-agency-florida#article" }
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
        "@id": "https://www.tripsandships.com/best-travel-agency-florida#article",
        "headline": pageData.seo.title,
        "url": "https://www.tripsandships.com/best-travel-agency-florida",
        "description": pageData.seo.metaDescription,
        "image": "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
        "publisher": { "@id": "https://www.tripsandships.com/#organization" },
        "mainEntityOfPage": { "@id": "https://www.tripsandships.com/best-travel-agency-florida" }
      },
      {
        "@type": "Service",
        "name": "Florida Luxury Travel Agency Planning",
        "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
        "serviceType": "Full-Service Travel Agency Services",
        "description": "Full-service luxury vacation design, bespoke itinerary coordination, VIP amenities, and dedicated client advocacy."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Florida Luxury Travel", "item": "https://www.tripsandships.com/best-travel-agency-florida" },
          { "@type": "ListItem", "position": 3, "name": "Best Travel Agency in Florida", "item": "https://www.tripsandships.com/best-travel-agency-florida" }
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
        <meta property="og:url" content="https://www.tripsandships.com/best-travel-agency-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/best-travel-agency-florida" />
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

      {/* ─── 2. QUICK ANSWER & DIRECT RECOMMENDATION (AsymmetricStoryIntro) ─── */}
      <AsymmetricStoryIntro
        eyebrow="Direct Answer & Agency Recommendation"
        heading={pageData.quickAnswer.title}
        paragraphs={[
          `"${pageData.quickAnswer.lead}"`,
          pageData.quickAnswer.body,
          `Agency Core Philosophy: "${pageData.quickAnswer.philosophy}"`,
          pageData.quickAnswer.closing
        ]}
        highlights={pageData.quickAnswer.specialties}
        ctaText="Plan My Luxury Journey"
        ctaLink="/contact"
        image1Placeholder="FLORIDA LUXURY TRAVEL AGENCY"
      />

      {/* ─── 3. WHAT MAKES A TRAVEL AGENCY THE BEST (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesBest.title}
        subtitle={pageData.whatMakesBest.subtitle}
        items={whatMakesBestItems}
      />

      {/* ─── 4. WHY TRIPS & SHIPS STANDS OUT (EditorialIntroSection) ─── */}
      <EditorialIntroSection
        eyebrow="PROFESSIONAL DISTINCTION"
        title={pageData.whyTripsAndShipsStandsOut.title}
        subtitle={pageData.whyTripsAndShipsStandsOut.subtitle}
        paragraphs={[
          pageData.whyTripsAndShipsStandsOut.body1,
          pageData.whyTripsAndShipsStandsOut.body2,
          pageData.whyTripsAndShipsStandsOut.body3
        ]}
        image={AboutImage}
        placeholderLabel="ANGELA HUGHES - INDUSTRY LEADERSHIP"
        badgeTitle={pageData.whyTripsAndShipsStandsOut.author}
        badgeDescription={pageData.whyTripsAndShipsStandsOut.quote}
      />



      {/* ─── 6. DEEP DIVE 1: LUXURY CRUISES (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.deepDives.cruiseExpertise.title}
        subtitle={`${pageData.deepDives.cruiseExpertise.subtitle} — ${pageData.deepDives.cruiseExpertise.description}`}
        points={pageData.deepDives.cruiseExpertise.checklist}
      />

      {/* ─── 8. DEEP DIVE 2: LUXURY RIVER CRUISES (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.deepDives.riverCruises.title}
        subtitle={pageData.deepDives.riverCruises.subtitle}
        paragraphs={[pageData.deepDives.riverCruises.description]}
        items={riverCruisesItems}
      />

      {/* ─── 9. DEEP DIVE 3: SAFARIS, EXPEDITIONS & CUSTOM TRAVEL (LuxuryFeatureShowcase) ─── */}
      <LuxuryFeatureShowcase
        title="African Safaris, Expeditions & Bespoke Custom Travel"
        subtitle="SPECIALIZED EXPEDITION & SAFARI ADVISORY"
        items={expeditionSafariItems}
      />

      {/* ─── 10. WHAT DOES A LUXURY TRAVEL AGENCY DO? (TravelerTypeGrid) ─── */}
      <TravelerTypeGrid
        title={pageData.whatAdvisorDoes.title}
        subtitle={pageData.whatAdvisorDoes.subtitle}
        items={agencyRolesItems}
      />

      {/* ─── 11. TRAVEL AGENCY VS BOOKING ONLINE (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.comparisonFramework.title}
        subtitle={pageData.comparisonFramework.subtitle}
        cards={comparisonBookingCards}
      />

      {/* ─── 12. HOW TO COMPARE TRAVEL AGENCIES (TopQuestionsReveal) ─── */}
      <TopQuestionsReveal
        title={pageData.howToChoose.title}
        subtitle={pageData.howToChoose.subtitle}
        questions={agencyEvaluationQuestions}
      />

      {/* ─── 13. WHAT MAKES TRIPS & SHIPS DIFFERENT (AuthorityGrid) ─── */}
      <AuthorityGrid
        title={pageData.whatMakesTripsAndShipsDifferent.title}
        subtitle={`${pageData.whatMakesTripsAndShipsDifferent.subtitle} — ${pageData.whatMakesTripsAndShipsDifferent.formula}. ${pageData.whatMakesTripsAndShipsDifferent.description}`}
        items={recognitionItems}
      />

      {/* ─── 14. CLIENT REVIEWS & TRUST STATS (BentoQuickFacts) ─── */}
      <BentoQuickFacts
        title={pageData.clientReviews.title}
        paragraphs={[pageData.clientReviews.subtitle]}
        items={clientReviewsItems}
      />

      {/* ─── 15. BEST FOR VS WHO MAY NOT NEED (ProsConsCards) ─── */}
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

      {/* ─── 16. COMMON MISTAKES (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.commonMistakes.title}
        items={mistakesItems}
      />

      {/* ─── 17. DYNAMIC LUXURY TRAVEL MEDIA (ScenicGallery) ─── */}
      <ScenicGallery
        title={pageData.mediaExperience.title}
        subtitle={pageData.mediaExperience.subtitle}
        items={mediaGalleryItems}
      />

      {/* ─── 18. PEACE OF MIND & SUMMARY (ConclusionSection) ─── */}
      <ConclusionSection
        sections={[
          {
            heading: pageData.peaceOfMind.title,
            paragraphs: [
              `"${pageData.peaceOfMind.quote}"`,
              pageData.peaceOfMind.body1,
              pageData.peaceOfMind.body2,
              "Core Standard: Dedicated Luxury Fiduciary Advocacy & Care."
            ]
          }
        ]}
      />

            {/* ─── 5. ANGELA HUGHES AUTHORITY BOX (ExpertCredentials) ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={pageData.authorityBox.bio}
        image={AboutImage2}
      />

      {/* ─── 19. FAQ SECTION (FAQAccordion) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 20. FINAL CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title="Ready to Work With a Luxury Travel Expert?"
        description="Tell Trips & Ships where you want to go, what matters most to you and what you want the experience to feel like. The team will transform your ideas into a carefully coordinated luxury journey."
        buttonText="Plan My Luxury Journey"
        buttonLink="/contact"
        image={null}
      />
    </div>
  );
};

export default BestTravelAgencyFlorida;
