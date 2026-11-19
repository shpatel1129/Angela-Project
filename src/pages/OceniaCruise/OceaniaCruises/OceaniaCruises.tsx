import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (All Unique, No Repetition)
import ComparisonHero from '@/components/ui/ComparisonHero';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import FeatureGrid from '@/components/ui/FeatureGrid';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import DiningVenuesMasonry from '@/components/ui/DiningVenuesMasonry';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import TravelerProfileTabs from '@/components/ui/TravelerProfileTabs';
import EditorialExcursionShowcase from '@/components/ui/EditorialExcursionShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import ShipPhilosophyFaceoff from '@/components/ui/ShipPhilosophyFaceoff';
import SmartSpendingSplit from '@/components/ui/SmartSpendingSplit';
import TravelerTypeGrid from '@/components/ui/TravelerTypeGrid';
import TabbedComparison from '@/components/ui/TabbedComparison';
import ProsConsCards from '@/components/ui/ProsConsCards';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';

// Assets
import AboutAngelaImg from "@/assets/AboutAngela.jpeg";
// import oceaniaShipImg from "@/assets/ExploravsOceania/oceania-aurelia-luxury-cruise-ship-sailing-at-sunset-ocean-voyage.jpg";
// import suiteLivingRoomImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-suite-living-room-luxury-cruise-ocean-view.png";
// import mixologyBarImg from "@/assets/ExploravsOceania/oceania-aurelia-signature-mixology-cocktail-bar-luxury-cruise-lounge.jpg";
// import destinationsImg from "@/assets/AzamaravsOceaniaCruises/destinations.jpg";
// import onboardLifeImg from "@/assets/AzamaravsOceaniaCruises/Oceania-Atmosphere.jpg";
// import horizonLoungeImg from "@/assets/ExploravsOceania/oceania-aurelia-horizon-lounge-panoramic-ocean-view-luxury-cruise-bar.jpg";

const OceaniaCruises: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Quick Answer items for BentoQuickFacts (10-card interlocking bento)
  const quickAnswerItems = pageData.quickAnswer.items.map((item) => ({
    label: item.label,
    text: item.content
  }));

  // 2. Why Choose Features for FeatureGrid (6 Pillars)
  const whyChooseFeatures = pageData.whyChoose.features.map((feat, idx) => ({
    title: feat.title,
    description: feat.description,
    highlight: `Signature Pillar 0${idx + 1}`,
    placeholderLabel: feat.title
  }));

  // 3. Fleet highlights for HighlightsSplit (7 operating ships + 2 upcoming)
  const fleetHighlightsItems = pageData.fleetGuide.ships.map((ship) => ({
    title: ship.title,
    description: ship.description,
    icon: ship.icon,
    bulletPoints: ship.bulletPoints
  }));

  // 4. Staterooms and Suites for LuxuryZigZagShowcase (8 categories)
  const stateroomZigZagItems = pageData.suites.items.map((suite) => ({
    title: suite.title,
    category: suite.category,
    description: suite.description,
    bestFor: suite.bestFor,
    placeholderLabel: suite.title
  }));

  // 5. Dining Concepts for DiningVenuesMasonry (10 venues)
  const diningCategories = [
    "Signature Continental",
    "Classic Steakhouse",
    "Regional Italian",
    "Asian Fusion",
    "French Haute Cuisine",
    "Casual Buffet & Alfresco",
    "Poolside Grill",
    "Wellness Cuisine",
    "Artisanal Coffee & Bakery",
    "Exclusive Culinary Experiences"
  ];

  const culinaryItems = pageData.dining.venues.map((venue, idx) => ({
    title: venue.title,
    description: venue.description,
    category: diningCategories[idx % diningCategories.length],
    placeholderLabel: venue.title
  }));

  // 6. Inclusions for ValueBreakdownSplit
  const includedItems = pageData.inclusions.alwaysIncluded.map((item) => ({
    title: item.title,
    description: item.description
  }));

  const extraItems = pageData.inclusions.notIncluded.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // 7. Destinations for TravelerProfileTabs (10 worldwide regions)
  const destinationProfiles = pageData.destinations.items.map((dest) => ({
    name: dest.name,
    tagline: dest.category,
    quote: dest.quote,
    recommendation: dest.recommendation,
    reason: dest.reason,
    whyFits: dest.whyFits,
    placeholderLabel: `${dest.name.toUpperCase()} DESTINATION`
  }));

  // 8. Shore Excursions for EditorialExcursionShowcase (3 in-depth aspects)
  const excursionItems = pageData.excursions.items.map((exc) => ({
    title: exc.title,
    subtitle: exc.subtitle,
    badge: exc.badge,
    description: exc.description,
    highlights: exc.highlights
  }));

  // 9. Life Onboard for ThreeColumnGrid (5 signature amenities)
  const onboardItems = pageData.onboardLife.items.map((item) => ({
    title: item.title,
    description: item.description,
    placeholderLabel: item.title
  }));

  // 10. Adults-Only Philosophy for ShipPhilosophyFaceoff
  const adultsOnlyData = {
    title: pageData.adultsOnly.title,
    regent: {
      badge: pageData.adultsOnly.regent.badge,
      title: pageData.adultsOnly.regent.title,
      description: pageData.adultsOnly.regent.description,
      features: pageData.adultsOnly.regent.features
    },
    viking: {
      badge: pageData.adultsOnly.viking.badge,
      title: pageData.adultsOnly.viking.title,
      description: pageData.adultsOnly.viking.description,
      features: pageData.adultsOnly.viking.features
    }
  };

  // 11. Cost & Spending for SmartSpendingSplit
  const spendMoreItems = pageData.pricing.spendMore.map((item) => ({
    title: item.title,
    description: item.description
  }));

  const spendLessItems = pageData.pricing.spendLess.map((item) => ({
    title: item.title,
    description: item.description
  }));

  // 12. Traveler Personas for TravelerTypeGrid (6 distinct personas)
  const travelerGridItems = pageData.travelerTypes.items.map((type) => ({
    title: type.title,
    description: type.description,
    icon: type.icon,
    fitScore: type.fitScore,
    tags: type.tags
  }));

  // 13. Brand Comparisons for TabbedComparison (Regent, Viking, Seabourn)
  const mainBrandComparison = pageData.comparisons.mainBrand;
  const competitorsComparison = pageData.comparisons.competitors;

  // 14. Pros and Cons for ProsConsCards
  const prosList = pageData.prosCons.advantages;
  const consList = pageData.prosCons.drawbacks;

  // 15. FAQs for FAQAccordion
  const faqData = {
    title: pageData.faqs.title,
    subtitle: pageData.faqs.subtitle,
    questions: pageData.faqs.questions.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  // 16. Oceania Curated Guides & Interlinking Hub (All Oceania Subpages)
  const oceaniaCuratedGuides = [
    {
      title: "Oceania Fleet & Ship Classes",
      category: "Fleet & Vessels",
      description: "Explore Oceania's fleet of intimate boutique ships across the Regatta, Oceania, and Allura classes.",
      // image: oceaniaShipImg,
      alt: "Oceania Cruises fleet and ship profiles overview",
      placeholderLabel: "OCEANIA FLEET & SHIPS",
      badgeCount: 2,
      links: [
        { label: "Oceania Cruise Ships & Fleet", url: "/oceania-cruises/ships" },
        { label: "Oceania Ship Classes Compared", url: "/oceania-cruises/ship-classes" }
      ],
      mainUrl: "/oceania-cruises/ships"
    },
    {
      title: "Staterooms, Verandas & Suites",
      category: "Accommodations",
      description: "Compare Oceania veranda staterooms, Concierge Level privileges, and ultra-spacious Penthouse and Owner's Suites.",
      // image: suiteLivingRoomImg,
      alt: "Oceania staterooms and suites luxury accommodations",
      placeholderLabel: "OCEANIA STATEROOMS & SUITES",
      badgeCount: 3,
      links: [
        { label: "Staterooms & Suites Guide", url: "/oceania-cruises/staterooms-and-suites" },
        { label: "Concierge vs. Veranda Guide", url: "/oceania-cruises/concierge-vs-veranda" },
        { label: "Penthouse Suites Review", url: "/oceania-cruises/penthouse-suites" }
      ],
      mainUrl: "/oceania-cruises/staterooms-and-suites"
    },
    {
      title: "Dining, Restaurants & Drinks",
      category: "The Finest Cuisine at Sea®",
      description: "Discover Oceania's legendary culinary venues, complimentary specialty dining concepts, menus, and beverage packages.",
      // image: mixologyBarImg,
      alt: "Oceania Cruises dining specialty restaurants and cocktail bars",
      placeholderLabel: "OCEANIA DINING & DRINKS",
      badgeCount: 3,
      links: [
        { label: "Oceania Dining & Menus", url: "/oceania-cruises/dining" },
        { label: "Specialty Dining Inclusions", url: "/oceania-cruises/specialty-dining" },
        { label: "Drink Packages Guide", url: "/oceania-cruises/drink-packages" }
      ],
      mainUrl: "/oceania-cruises/dining"
    },
    {
      title: "Worldwide Itineraries & Grand Voyages",
      category: "Destinations",
      description: "From Alaska's fjords and Mediterranean harbors to 180-day Around the World epic voyages and curated excursions.",
      // image: destinationsImg,
      alt: "Oceania Cruises worldwide destinations and Grand Voyages",
      placeholderLabel: "OCEANIA DESTINATIONS",
      badgeCount: 5,
      links: [
        { label: "Oceania Alaska Cruises", url: "/oceania-cruises/alaska" },
        { label: "Oceania Mediterranean Cruises", url: "/oceania-cruises/mediterranean" },
        { label: "Northern Europe Cruises", url: "/oceania-cruises/northern-europe" },
        { label: "World Cruises & Grand Voyages", url: "/oceania-cruises/world-cruises" },
        { label: "Shore Excursions Guide", url: "/oceania-cruises/shore-excursions" }
      ],
      mainUrl: "/oceania-cruises/world-cruises"
    },
    {
      title: "Inclusions, Pricing & Onboard Life",
      category: "Planning & Inclusions",
      description: "Learn what's included in Your World Included, true cruise costs, tipping gratuities, Wi-Fi packages, and dress code.",
      // image: onboardLifeImg,
      alt: "Oceania Cruises onboard atmosphere inclusions and fares",
      placeholderLabel: "INCLUSIONS & ONBOARD LIFE",
      badgeCount: 6,
      links: [
        { label: "What's Included: Your World Included", url: "/oceania-cruises/whats-included" },
        { label: "How Much Does Oceania Cost?", url: "/oceania-cruises/cost" },
        { label: "Is Oceania Cruises Worth It?", url: "/oceania-cruises/is-it-worth-it" },
        { label: "Gratuities & Service Charges", url: "/oceania-cruises/gratuities" },
        { label: "Wi-Fi & Connectivity Guide", url: "/oceania-cruises/wifi" },
        { label: "Dress Code & Packing Tips", url: "/oceania-cruises/dress-code" }
      ],
      mainUrl: "/oceania-cruises/whats-included"
    },
    {
      title: "Oceania Club & Line Comparisons",
      category: "Loyalty & Comparisons",
      description: "Explore Oceania Club loyalty tiers, solo traveler staterooms and supplements, and direct comparisons against top rivals.",
      // image: horizonLoungeImg,
      alt: "Oceania Club loyalty program and cruise line comparisons",
      placeholderLabel: "LOYALTY & COMPARISONS",
      badgeCount: 6,
      links: [
        { label: "Oceania Club Loyalty Program", url: "/oceania-cruises/oceania-club" },
        { label: "Oceania for Solo Travelers", url: "/oceania-cruises/solo-travelers" },
        { label: "Oceania vs. Regent Seven Seas", url: "/oceania-cruises/oceania-vs-regent" },
        { label: "Oceania vs. Viking Ocean", url: "/oceania-cruises/oceania-vs-viking" },
        { label: "Oceania vs. Celebrity Cruises", url: "/oceania-cruises/oceania-vs-celebrity" },
        { label: "Oceania vs. Azamara", url: "/oceania-cruises/oceania-vs-azamara" }
      ],
      mainUrl: "/oceania-cruises/oceania-club"
    }
  ];

  const meta = pageData.meta as {
    keywords?: string;
    primaryKeyword?: string;
    secondaryKeywords?: string[];
  };
  const keywords = meta.keywords || (meta.primaryKeyword ? [meta.primaryKeyword, ...(meta.secondaryKeywords || [])].join(", ") : "");

  // Structured Schema (Organization, WebPage, Article, Breadcrumbs, FAQs)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "logo": "https://www.tripsandships.com/assets/logo.png"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angelahughes",
        "name": "Angela Hughes",
        "jobTitle": "Luxury Cruise Specialist & Elite Travel Advisor",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageData.meta.title,
        "description": pageData.meta.description,
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
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
            "name": "Oceania Cruises",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": pageData.meta.title,
        "description": pageData.meta.description,
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@id": "https://www.tripsandships.com/#angelahughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.questions.map((faq) => ({
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
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.title} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content={pageData.meta.title} />
        <meta property="og:description" content={pageData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.meta.title} />
        <meta name="twitter:description" content={pageData.meta.description} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ─── 0. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      <div id="content">
        {/* ─── 1. WHAT IS OCEANIA CRUISES? (EditorialIntroSplit) ─── */}
        <EditorialIntroSplit
          eyebrow={pageData.intro.eyebrow}
          heading={pageData.intro.heading}
          paragraphs={pageData.intro.paragraphs}
        />

        {/* ─── 2. QUICK ANSWER: 10 KEY QUESTIONS (BentoQuickFacts) ─── */}
        <BentoQuickFacts
          title={pageData.quickAnswer.title}
          items={quickAnswerItems}
          paragraphs={[
            "Oceania Cruises is particularly worth considering if you want a cruise where the itinerary and onboard dining experience are just as important as the ship itself."
          ]}
        />

        {/* ─── 3. WHY CHOOSE OCEANIA CRUISES? (FeatureGrid) ─── */}
        <FeatureGrid
          title={pageData.whyChoose.title}
          subtitle={pageData.whyChoose.subtitle}
          features={whyChooseFeatures}
          bgClass="bg-slate-50"
        />

        {/* ─── CURATED OCEANIA GUIDES & INTERLINKING HUB (InteractivePillarHubGrid) ─── */}
        <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
          <InteractivePillarHubGrid
            title="Explore Our Curated Oceania Cruises Guides & Planning Resources"
            subtitle="Hover over any card below to slide open the guide drawer, access dedicated ship reviews, compare luxury lines, and plan your voyage."
            items={oceaniaCuratedGuides}
            variant="destination"
          />
        </div>

        {/* ─── 4. COMPLETE FLEET GUIDE (HighlightsSplit) ─── */}
        <div id="fleet-guide">
          <HighlightsSplit
            title={pageData.fleetGuide.title}
            subtitle={pageData.fleetGuide.subtitle}
            items={fleetHighlightsItems}
            badgeSuffix="OCEANIA CLASS"
            footerLeft="The Finest Cuisine at Sea®"
            footerRight="Boutique Luxury Cruising"
          />
        </div>

        {/* ─── 5. SUITES & STATEROOMS GUIDE (LuxuryZigZagShowcase) ─── */}
        <LuxuryZigZagShowcase
          title={pageData.suites.title}
          subtitle={pageData.suites.subtitle}
          items={stateroomZigZagItems}
        />

        {/* ─── 6. DINING: THE FINEST CUISINE AT SEA® (DiningVenuesMasonry) ─── */}
        <DiningVenuesMasonry
          title={pageData.dining.title}
          subtitle={`${pageData.dining.subtitle} ${pageData.dining.isSpecialtyFree}`}
          items={culinaryItems}
        />

        {/* ─── 7. WHAT'S INCLUDED? YOUR WORLD INCLUDED® (ValueBreakdownSplit) ─── */}
        <ValueBreakdownSplit
          title={pageData.inclusions.title}
          subtitle={`${pageData.inclusions.subtitle} ${pageData.inclusions.luxuryOfChoice.description} ${pageData.inclusions.luxuryOfChoice.option1} ${pageData.inclusions.luxuryOfChoice.option2}`}
          includedTitle="Always-Included Amenities"
          extrasTitle="What Is Not Automatically Included"
          included={includedItems}
          extras={extraItems}
        />

        {/* ─── 8. DESTINATIONS & ITINERARIES (TravelerProfileTabs) ─── */}
        <TravelerProfileTabs
          title={pageData.destinations.title}
          subtitle={pageData.destinations.subtitle}
          profiles={destinationProfiles}
        />

        {/* ─── 9. SHORE EXCURSIONS IN DEPTH (EditorialExcursionShowcase) ─── */}
        <EditorialExcursionShowcase
          title={pageData.excursions.title}
          subtitle={pageData.excursions.subtitle}
          items={excursionItems}
        />

        {/* ─── 10. LIFE ONBOARD OCEANIA CRUISES (ThreeColumnGrid) ─── */}
        <ThreeColumnGrid
          title={pageData.onboardLife.title}
          subtitle={pageData.onboardLife.subtitle}
          items={onboardItems}
        />

        {/* ─── 11. ADULTS-ONLY EXPERIENCE (ShipPhilosophyFaceoff) ─── */}
        <ShipPhilosophyFaceoff
          data={adultsOnlyData}
        />

        {/* ─── 12. CRUISE PRICING & EVALUATION (SmartSpendingSplit) ─── */}
        <SmartSpendingSplit
          title={pageData.pricing.title}
          subtitle={pageData.pricing.subtitle}
          spendMore={spendMoreItems}
          spendLess={spendLessItems}
        />

        {/* ─── 13. TRAVELER PERSONAS (TravelerTypeGrid) ─── */}
        <TravelerTypeGrid
          title={pageData.travelerTypes.title}
          subtitle={pageData.travelerTypes.subtitle}
          items={travelerGridItems}
        />

        {/* ─── 14. BRAND COMPARISONS (TabbedComparison) ─── */}
        <TabbedComparison
          title={pageData.comparisons.title}
          mainBrand={mainBrandComparison}
          competitors={competitorsComparison}
          leftLabel="Oceania Hallmarks"
          rightLabel="Competitor Model"
        />

        {/* Which Cruise Line Should You Choose */}
        <div className="w-full bg-ice-50 pb-16">
          <div className="max-w-[1024px] mx-auto px-6">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-3">
                {pageData.comparisons.conclusion.title}
              </h3>
              <div className="w-12 h-0.5 bg-navy-800 mb-6"></div>
              <p className="font-sans text-slate-600 mb-6 leading-relaxed">
                {pageData.comparisons.conclusion.description}
              </p>
              <div className="space-y-4 font-sans text-slate-700">
                {pageData.comparisons.conclusion.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-navy-900 font-bold">•</span>
                    <span className="text-sm md:text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-sm text-slate-500 italic mt-6 pt-4 border-t border-slate-100">
                {pageData.comparisons.conclusion.footer}
              </p>
            </div>
          </div>
        </div>

        {/* ─── 15. PROS AND CONS & VERDICT (ProsConsCards) ─── */}
        <ProsConsCards
          title={pageData.prosCons.title}
          prosTitle="Key Oceania Advantages"
          consTitle="Potential Drawbacks & Considerations"
          bestFor={prosList}
          notBestFor={consList}
          bottomNote={pageData.prosCons.bottomNote}
        />

        {/* ─── 16. EXPERT ADVISOR CREDENTIALS (ExpertCredentials) ─── */}
        <ExpertCredentials
          badge={pageData.expert.badge}
          authorityBoxTitle={pageData.expert.authorityBoxTitle}
          authoritySubtitle={pageData.expert.authoritySubtitle}
          name={pageData.expert.name}
          title={pageData.expert.title}
          experienceBadge={pageData.expert.experienceBadge}
          bio={pageData.expert.bio}
          quote={pageData.expert.quote}
          quoteSubtitle={pageData.expert.quoteSubtitle}
          credentials={pageData.expert.credentials}
          image={AboutAngelaImg}
          ctaText={pageData.expert.ctaText}
          ctaLink={pageData.expert.ctaLink}
        />

        {/* ─── 17. FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
        <FAQAccordion data={faqData} />

        {/* ─── 18. FINAL CENTER CALL TO ACTION (CenterCTA) ─── */}
        <CenterCTA
          title={pageData.cta.title}
          description={pageData.cta.description}
          buttonText={pageData.cta.buttonText}
          buttonLink={pageData.cta.buttonLink}
          theme="dark"
        />

      </div>
    </div>
  );
};

export default OceaniaCruises;

