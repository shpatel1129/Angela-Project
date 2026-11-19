import React from 'react';
import { Helmet } from 'react-helmet-async';
import pageData from './data.json';

// Shared Components & UI System (Unique, non-repeating component-based layout)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FeatureGrid from '@/components/ui/FeatureGrid';
import CardGrid from '@/components/ui/CardGrid';
import AuthorityBox from '@/components/ui/AuthorityBox';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ProsConsCards from '@/components/ui/ProsConsCards';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import BrandComparisonTable from '@/components/ui/BrandComparisonTable';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import TravelerProfileSelector from '@/components/ui/TravelerProfileSelector';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

import Profile_Picture_AH from '@/assets/AboutAngela.jpeg';

// Authentic Celebrity Cruises Images (Dedicated folder, completely unused across other pages)
import HeroBgImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-solstice-pago-pago-american-samoa-panoramic-scenic-view.webp';
import IntroVerandaImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-flora-suite-veranda.webp';
import IntroAquaSpaImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-reflection-spa-persian-garden.webp';
import VerandaTraditionalImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-flora-penthouse-suite-bedroom-panoramic-scenic-view.webp';
import VerandaInfiniteImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-flora-suite-infinite-veranda-bedroom-panoramic-scenic-view.webp';
import ConciergeLunchImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-flora-ranch-restaurant-panoramic-scenic-view.webp';
import AquaClassBluImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-flora-ranch-restaurant.webp';
import AquaClassThermalImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-beyond-spa-sauna.webp';
import AquaClassSpaConciergeImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-reflection-spa-infrared-sauna.webp';
import DiningShowdownImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-belize-local-cuisine.webp';
import PricingValueImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-solstice-lifou-new-caledonia-golden-hour-sunset-glow.webp';
import PromotionsShipImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-promotions-offers-ship.webp';
import ServiceConciergeImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-concierge-service-hospitality.webp';
import CouplesRomanceImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-couples-romance-santorini.webp';
import LongerVoyagesImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-longer-voyages-ocean-sailing.webp';
import ProfileFirstTimerImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-apex-mykonos-panoramic-scenic-view.webp';
import ProfileWellnessImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-summit-spa-persian-garden.webp';
import ProfileConciergeImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-solstice-sydney-ship-exterior-panoramic-scenic-view.webp';
import RetreatDistinctionImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-flora-penthouse-suite-bathroom-golden-hour-sunset-glow.webp';
import CtaImg from '@/assets/celebritycruises/CelebrityAquaClassVsConciergeVsVeranda/celebrity-edge-alaska-magic-carpet.webp';

function CelebrityAquaClassVsConciergeVsVeranda() {
  // 1. Map Veranda Features for FeatureGrid (Traditional vs Infinite Veranda)
  const verandaFeatures = [
    {
      title: "Traditional Veranda Balcony",
      description: "A separate outdoor balcony accessed through sliding glass doors. Provides direct open-air ocean breezes, dedicated exterior seating, and distinct separation between interior cabin and private sea views.",
      image: VerandaTraditionalImg,
      bulletPoints: pageData.section1Veranda.whatYouGet.slice(0, 4),
      tags: ["Traditional Sliding Door", "Open-Air Balcony", "Exterior Seating"],
      highlight: "Classic Balcony Feel"
    },
    {
      title: "Edge Series Infinite Veranda",
      description: "Transforms your entire stateroom into a seamless indoor-outdoor sanctuary. With the push of a button, the top floor-to-ceiling panoramic window glides down, bringing the sea directly into your enlarged living space.",
      image: VerandaInfiniteImg,
      bulletPoints: [
        "23% larger living space integrated into cabin interior",
        "Floor-to-ceiling glass lowering window at touch of button",
        "Bi-fold glass doors convert space into private sunroom",
        "Available across Edge, Apex, Beyond, Ascent, and Xcel"
      ],
      tags: ["Motorized Glass Window", "Expanded Living Area", "Edge Series Innovation"],
      highlight: "Next-Gen Architecture"
    }
  ];

  // 2. Map Concierge Class Inclusions for CardGrid
  const conciergeCards = pageData.section2Concierge.amenities.map((item, idx) => ({
    icon: item.icon,
    title: item.title,
    description: item.description,
    bullets: idx === 0 
      ? ["Assistance with shore excursions & dining", "Onboard logistics & scheduling support"]
      : idx === 1
      ? ["Exclusive embarkation day seated lunch", "Main dining room exclusive venue"]
      : undefined
  }));

  // 3. Map AquaClass Highlights for ThreeColumnGrid
  const aquaClassGridItems = [
    {
      title: pageData.section3AquaClass.highlights[0].title,
      category: pageData.section3AquaClass.highlights[0].category,
      description: pageData.section3AquaClass.highlights[0].description,
      image: AquaClassBluImg,
      placeholderLabel: "Exclusive Blu Restaurant Dining"
    },
    {
      title: pageData.section3AquaClass.highlights[1].title,
      category: pageData.section3AquaClass.highlights[1].category,
      description: pageData.section3AquaClass.highlights[1].description,
      image: AquaClassThermalImg,
      placeholderLabel: "SEA Thermal Suite & Persian Garden"
    },
    {
      title: pageData.section3AquaClass.highlights[2].title,
      category: pageData.section3AquaClass.highlights[2].category,
      description: pageData.section3AquaClass.highlights[2].description,
      image: AquaClassSpaConciergeImg,
      placeholderLabel: "Personal Spa Concierge & Fitness"
    }
  ];

  // 4. Map Aqua vs Concierge Head-to-Head for ProsConsCards (Strings required by ProsConsCards)
  const aquaPros = pageData.section4AquaVsConcierge.comparisons.map(
    (c) => `${c.category}: ${c.aquaText} (${c.verdict})`
  );

  const conciergePros = pageData.section4AquaVsConcierge.comparisons.map(
    (c) => `${c.category}: ${c.conciergeText}${c.category.includes('Service') ? ' (Winner for general concierge assistance.)' : ''}`
  );

  // 5. Map Upgrade Worth It Analysis for CostValueAnalysisCards
  const upgradeIncluded = pageData.section5VerandaVsConcierge.worthItWhen;
  const upgradeExtras = pageData.section5VerandaVsConcierge.notWorthItWhen;

  // 6. Map Detailed Inclusions for Section 7: Pricing & Cost Factors (DetailedInclusionsList)
  const costSectionData = {
    title: pageData.section7Cost.title,
    intro: [
      "There is no fixed upgrade price for Celebrity AquaClass or Concierge Class.",
      "AquaClass and Concierge Class can have different price premiums over a standard Veranda, and their relative prices can change from one sailing to another."
    ],
    items: [
      {
        title: "How to Compare the Price Difference",
        image: PricingValueImg,
        paragraphs: [
          "Use the same sailing, departure date, occupancy, and fare conditions when comparing categories."
        ],
        lists: [
          {
            title: "Comparison Category & Value Factors",
            items: [
              "Veranda vs. Concierge Class: Extra cost for concierge service and additional amenities",
              "Veranda vs. AquaClass: Extra cost for Blu, thermal access, fitness benefits and wellness amenities",
              "Concierge Class vs. AquaClass: Which category offers benefits you will actually use?"
            ]
          },
          {
            title: "The Difference Depends On",
            items: [
              "Ship and ship class",
              "Destination",
              "Sailing date",
              "Cruise duration",
              "Cabin location",
              "Remaining inventory",
              "Promotional offers",
              "Booking conditions",
              "Number of guests sharing the stateroom"
            ]
          }
        ],
        highlight: {
          title: "Illustrative Calculation",
          text: "Suppose a standard Veranda is quoted at $2,000 per person and AquaClass at $2,450 per person for the same sailing. The AquaClass upgrade would cost an additional $450 per person, or $900 for two guests. This is an example to demonstrate the calculation, not a current Celebrity Cruises fare. If you plan to use Blu and the thermal suite regularly, the additional cost may be worthwhile. If not, the standard Veranda could provide better value."
        }
      },
      {
        title: "Does Celebrity Offer Promotions on AquaClass and Concierge Class?",
        image: PromotionsShipImg,
        paragraphs: [
          "Celebrity periodically offers promotions and fare options that can affect the cost of different stateroom categories.",
          "However, promotional eligibility may vary by ship, sailing, category, and booking conditions. When comparing an upgrade, check:"
        ],
        lists: [
          {
            title: "Promotional & Upgrade Verification Checklist",
            items: [
              "Whether the offer applies to all three categories.",
              "Whether the displayed price includes the same fare benefits.",
              "Whether the promotional package can be combined with other offers.",
              "Whether the cabin location is comparable.",
              "Whether the final total includes taxes and fees."
            ]
          }
        ]
      }
    ]
  };


  // 7. Map Traveler Profiles for TravelerProfileSelector
  const travelerProfileImages = [
    ProfileFirstTimerImg,
    ProfileWellnessImg,
    ServiceConciergeImg,
    CouplesRomanceImg,
    CtaImg,
    LongerVoyagesImg
  ];

  const travelerProfiles = pageData.section8Travelers.profiles.map((p, idx) => ({
    name: p.name,
    tagline: p.tagline,
    quote: p.quote,
    image: travelerProfileImages[idx] || HeroBgImg,
    recommendation: p.recommendation,
    reason: p.reason,
    whyFits: p.whyFits
  }));

  // 8. Schema LD+JSON Graph (Trips & Ships Standard)
  const canonicalUrl = pageData.seo?.canonical || 'https://www.tripsandships.com/celebrity-cruises/aquaclass-vs-concierge-vs-veranda';
  const pageTitle = pageData.seo?.title || 'Celebrity AquaClass vs. Concierge Class vs. Veranda: Differences';
  const metaTitle = pageData.seo?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || 'Compare Celebrity AquaClass, Concierge Class and Veranda staterooms.';

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": metaTitle,
        "headline": pageTitle,
        "description": metaDescription,
        "inLanguage": "en-US",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": `${canonicalUrl}#primaryimage`,
          "url": HeroBgImg,
          "contentUrl": HeroBgImg,
          "caption": pageTitle
        },
        "image": HeroBgImg,
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "founder": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO & Luxury Travel Advisor",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "description": "Angela Hughes is a luxury cruise specialist with over 40 years of experience, having traveled to 121+ countries.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AquaClass vs Concierge vs Veranda",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.questions.map((faq) => ({
          "@type": "Question",
          "name": faq.question.replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonical} />
        <meta property="og:image" content={HeroBgImg} />
        <meta name="twitter:image" content={HeroBgImg} />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Nav />

      {/* ─── SECTION 1: HERO (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge={pageData.hero.eyebrow}
        backgroundImage={HeroBgImg}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      {/* ─── SECTION 2: INTRO & CORE DIFFERENCE (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.intro.eyebrow}
        heading={pageData.intro.title}
        paragraphs={[pageData.intro.lead, ...pageData.intro.paragraphs]}
        primaryImage={IntroVerandaImg}
        secondaryImage={IntroAquaSpaImg}
      />

      {/* ─── SECTION 3: 3-WAY QUICK COMPARISON TABLE (ComparisonTable) ─── */}
      <div id="quick-comparison">
        <ComparisonTable
          data={{
            title: pageData.quickComparison.title,
            subtitle: pageData.quickComparison.subtitle,
            headers: pageData.quickComparison.headers,
            rows: pageData.quickComparison.rows,
            footnote: pageData.quickComparison.footnote
          }}
        />
      </div>

      {/* ─── SECTION 4: WHAT IS A VERANDA STATEROOM? (FeatureGrid) ─── */}
      <FeatureGrid
        title={pageData.section1Veranda.title}
        subtitle={pageData.section1Veranda.subtitle}
        features={verandaFeatures}
        bgClass="bg-white"
      />

      {/* ─── SECTION 5: WHAT IS CONCIERGE CLASS? (CardGrid) ─── */}
      <CardGrid
        title={pageData.section2Concierge.title}
        subtitle={pageData.section2Concierge.subtitle}
        cards={conciergeCards}
        columns={3}
        stagger={false}
      />

      {/* ─── CONCIERGE BUTLER DISTINCTION (AuthorityBox) ─── */}
      <div className="max-w-5xl mx-auto px-6 -mt-6 mb-16">
        <AuthorityBox
          title={pageData.section2Concierge.conciergeDistinction.title}
          content={pageData.section2Concierge.conciergeDistinction.body}
          author="Angela Hughes, Luxury Cruise Specialist"
          authorImage={Profile_Picture_AH}
        />
      </div>

      {/* ─── SECTION 6: WHAT IS AQUACLASS? (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.section3AquaClass.title}
        subtitle={pageData.section3AquaClass.subtitle}
        items={aquaClassGridItems}
      />

      {/* ─── SECTION 7: AQUACLASS VS CONCIERGE SHOWDOWN (ProsConsCards) ─── */}
      <ProsConsCards
        title={pageData.section4AquaVsConcierge.title}
        prosTitle="AquaClass Advantages (Wellness & Blu)"
        consTitle="Concierge Class Advantages (Service & Ease)"
        bestFor={aquaPros}
        notBestFor={conciergePros}
        bottomNote="Both categories elevate your veranda experience. Choose AquaClass for spa hydrotherapy and exclusive dining; choose Concierge Class for personalized vacation coordination."
        type="compare"
        bgClass="bg-ice-50"
      />

      {/* ─── SECTION 8: IS THE UPGRADE WORTH IT? (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.section5VerandaVsConcierge.title}
        subtitle={pageData.section5VerandaVsConcierge.subtitle}
        includedTitle="When Concierge Class Is Worth It"
        extrasTitle="When a Standard Veranda Is Better Value"
        included={upgradeIncluded}
        extras={upgradeExtras}
      />

      {/* ─── SECTION 8B: AQUACLASS VS VERANDA TABLE (BrandComparisonTable) ─── */}
      <BrandComparisonTable
        title={pageData.section6AquaVsVeranda.title}
        subtitle={pageData.section6AquaVsVeranda.subtitle}
        headers={pageData.section6AquaVsVeranda.table.headers}
        rows={pageData.section6AquaVsVeranda.table.rows}
      />

      {/* ─── SECTION 9: PRICING & COST BREAKDOWN (DetailedInclusionsList) ─── */}
      <DetailedInclusionsList
        title={costSectionData.title}
        intro={costSectionData.intro}
        items={costSectionData.items}
      />

      {/* ─── SECTION 10: BEST STATEROOM BY TRAVELER STYLE (TravelerProfileSelector) ─── */}
      <TravelerProfileSelector
        title={pageData.section8Travelers.title}
        subtitle={pageData.section8Travelers.subtitle}
        profiles={travelerProfiles}
      />

      {/* ─── SECTION 11: CRUCIAL INCLUSION RULES & THE RETREAT (ExpertRulesGrid) ─── */}
      <ExpertRulesGrid
        title={pageData.section9MainBenefits.title}
        subtitle={pageData.section9MainBenefits.subtitle}
        rules={pageData.section9MainBenefits.rules.map((r) => ({
          title: r.rule,
          description: `${r.explanation} ${r.insight}`
        }))}
      />

      {/* ─── SECTION 12: DECISION BLUEPRINT: HOW TO CHOOSE (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title={pageData.section11HowToChoose.title}
        subtitle={pageData.section11HowToChoose.subtitle}
        cards={pageData.section11HowToChoose.checklistCards}
      />

   

      {/* ─── SECTION 14: ANGELA HUGHES EXPERT CREDENTIALS (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        bio={pageData.expertInsight.bio}
        image={Profile_Picture_AH}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        credentials={pageData.expertInsight.standoutPills}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Stateroom Selection"
        authorityBoxTitle="ANGELA HUGHES STATEROOM INSIGHTS"
        authoritySubtitle="Verified Luxury Cruise Authority"
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/contact"
      />

         {/* ─── SECTION 13: FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 15: FINAL CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta.title}
        description={pageData.cta.description}
        buttonText={pageData.cta.primaryButtonText}
        buttonLink={pageData.cta.primaryButtonLink}
        image={CtaImg}
      />
    </>
  );
}

export default CelebrityAquaClassVsConciergeVsVeranda;
