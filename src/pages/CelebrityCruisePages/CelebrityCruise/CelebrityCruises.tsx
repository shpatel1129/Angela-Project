import React from 'react';
import { Helmet } from 'react-helmet-async';
import pageData from './data.json';

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import CostValueAnalysisCards from '@/components/ui/CostValueAnalysisCards';
import ComparisonTable from '@/components/ui/ComparisonTable';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import FeatureGrid from '@/components/ui/FeatureGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import CardGrid from '@/components/ui/CardGrid';
import TravelerProfileSelector from '@/components/ui/TravelerProfileSelector';
import ExpertAuthorityChecklist from '@/components/ui/ExpertAuthorityChecklist';
import AuthorityBox from '@/components/ui/AuthorityBox';
import InteractivePlanningRoadmap from '@/components/ui/InteractivePlanningRoadmap';
import ExpertRulesGrid from '@/components/ui/ExpertRulesGrid';
import BentoGlassmorphismGrid from '@/components/ui/BentoGlassmorphismGrid';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import Profile_Picture_AH from '@/assets/AboutAngela.jpeg';

// Assets - Celebrity Cruises Authentic Photography (Unused across other pages)
import HeroBgImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-beyond-perfect-day-cococay-aerial-panoramic-scenic-view.webp';
import IntroArchImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-edge-portofino-magic-carpet-panoramic-scenic-view.webp';
import IntroAmenitiesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-penthouse-suite-balcony-golden-hour-sunset-glow.webp';

import CuratedEdgeImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-xcel-ship-exterior-breathtaking-coastal-perspective.webp';
import CuratedFleetImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-silhouette-blue-hull-aerial.webp';
import CuratedRetreatImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-suite-infinite-veranda-bedroom.webp';
import CuratedDiningImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-kusadasi-cooking-class-panoramic-scenic-view.webp';
import CuratedCaribbeanMedImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-antigua-ocean-point-resort-beach.webp';
import CuratedAlaskaGalapagosImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-eclipse-aerial-hubbard-glacier-panoramic-scenic-view.webp';
import CuratedShowdownsImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-equinox-santorini.webp';
import CuratedWhyBookImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-reflection-aerial-panoramic-scenic-view.webp';

import FeaturedAscentImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-ascent-santorini-aerial-panoramic-scenic-view.webp';
import FeaturedXcelImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-xcel-ship-exterior-panoramic-scenic-view.webp';

import EditorialDesignPrimaryImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-apex-magic-carpet-panoramic-scenic-view.webp';
import EditorialCulinarySecondaryImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-mykonos-local-dining.webp';

import DestCaribbeanImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-beyond-perfect-day-cococay-aerial-breathtaking-coastal-perspective.webp';
import DestMediterraneanImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-norway-olden-golden-hour-sunset-glow.webp';
import DestAlaskaGalapagosImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-galapagos-rabida-island.webp';

import DiningCouplesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-st-lucia-restaurant-view.webp';
import DiningFamiliesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-ocean-grill-serene-morning-ambiance.webp';
import DiningFoodiesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-corfu-greek-salad.webp';
import DiningSuiteImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-seaside-restaurant-golden-hour-sunset-glow.webp';

import ProfileCouplesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-observatory-breathtaking-coastal-perspective.webp';
import ProfileFamiliesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-perfect-day-coco-cay-aerial.webp';
import ProfileSoloImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-apex-spa-sauna.jpg';

import Step1DestinationImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-apex-mykonos-breathtaking-coastal-perspective.webp';
import Step2LengthImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-solstice-aerial-blue-hull-tracy-arm-fjord.webp';
import Step3CompareImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-millennium-aerial-venice.webp';
import Step4CostImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-suite-veranda-panoramic-scenic-view.webp';
import Step5ItineraryImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-edge-sydney-overnight.webp';

import BentoGlobalImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-pago-pago-sail-away.webp';
import BentoEuropeImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-apex-rhodes.webp';
import BentoNordicImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-apex-flam-norway-ext.webp';
import BentoExpeditionImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-flora-aerial-breathtaking-coastal-perspective.webp';
import BentoAsiaPacificImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-solstice-sydney-harbour-bridge.webp';
import BentoGrandVoyagesImg from '@/assets/celebritycruises/CelebrityCruise/celebrity-infinity-aerial-panama-canal-panoramic-scenic-view.webp';

import CtaImage from '@/assets/celebritycruises/CelebrityCruise/celebrity-solstice-blue-hull-aerial-miami.webp';

function CelebrityCruisesGuide() {
  // 1. Map Intro for PremiumIntro (Placeholders enabled)
  const introSections = [
    {
      heading: pageData.intro.title,
      paragraphs: [pageData.intro.lead, ...pageData.intro.paragraphs],
    },
  ];

  // 2. Map Featured Ships for HighlightsSplit (Placeholders enabled)
  const featuredShipHighlights = [
    {
      title: pageData.featuredShips.ascent.title,
      description: pageData.featuredShips.ascent.lead,
      bulletPoints: pageData.featuredShips.ascent.features,
      image: FeaturedAscentImg,
      placeholderLabel: 'Celebrity Ascent — Edge Series Ship',
      icon: 'Ship',
    },
    {
      title: pageData.featuredShips.xcel.title,
      description: `${pageData.featuredShips.xcel.lead} ${pageData.featuredShips.xcel.body}`,
      image: FeaturedXcelImg,
      placeholderLabel: 'Celebrity Xcel — Modern Architecture',
      icon: 'Sparkles',
    },
  ];

  // 3. Map Who Should Choose for CostValueAnalysisCards
  const suitedIncluded = pageData.knownForAndSuited.suitedList.map((item) => ({
    title: item,
    description: 'Designed for discerning travelers seeking premium modern ship amenities.',
  }));

  const suitedExtras = [
    {
      title: 'Different Travel Styles',
      description:
        pageData.knownForAndSuited.footerNote ||
        'Travelers seeking small expedition vessels or ultra-luxury boutique yachts should explore specialized alternatives.',
    },
  ];

  // 4. Fleet Features for FeatureGrid (Solstice, Millennium, Flora)
  const fleetFeatures = [
    {
      title: pageData.fleetMore.solstice.title,
      description: pageData.fleetMore.solstice.description,
      tags: pageData.fleetMore.solstice.ships,
    },
    {
      title: pageData.fleetMore.millennium.title,
      description: pageData.fleetMore.millennium.description,
      tags: pageData.fleetMore.millennium.ships,
    },
    {
      title: pageData.fleetMore.flora.title,
      description: pageData.fleetMore.flora.description,
      highlight: pageData.fleetMore.flora.tag,
    },
  ];

  // 5. Map Destinations to ThreeColumnGrid format (Placeholders enabled)
  const destinationItems = [
    {
      title: pageData.destinations.caribbean.title,
      category: 'Tropical Coastlines',
      description: `${pageData.destinations.caribbean.lead} Top ports: ${pageData.destinations.caribbean.ports.join(', ')}.`,
      image: DestCaribbeanImg,
      placeholderLabel: 'Caribbean Ports & Islands',
    },
    {
      title: pageData.destinations.mediterranean.title,
      category: 'European Culture',
      description: `${pageData.destinations.mediterranean.lead} Popular regions: ${pageData.destinations.mediterranean.regions.join(', ')}.`,
      image: DestMediterraneanImg,
      placeholderLabel: 'Mediterranean & Europe',
    },
    {
      title: 'Alaska & Galápagos Expeditions',
      category: 'Scenic & Wildlife Journeys',
      description:
        'Scenic glacier viewing in Alaska and all-suite wildlife exploration in the Galápagos aboard Celebrity Flora.',
      image: DestAlaskaGalapagosImg,
      placeholderLabel: 'Global & Expedition Regions',
    },
  ];

  // 6. Accommodations Cards for GenericChecklistCards
  const accommodationCards = [
    {
      title: pageData.accommodations.interiorAndOceanView.title,
      items: [
        pageData.accommodations.interiorAndOceanView.lead,
        pageData.accommodations.interiorAndOceanView.body,
        ...pageData.accommodations.interiorAndOceanView.goodFor,
        `Note: ${pageData.accommodations.interiorAndOceanView.footnote}`,
      ],
    },
    {
      title: pageData.accommodations.verandaAquaClassSuites.title,
      items: [
        ...pageData.accommodations.verandaAquaClassSuites.features,
        `Note: ${pageData.accommodations.verandaAquaClassSuites.footnote}`,
      ],
    },
  ];

  // 7. Map Dining Styles to ThreeColumnGrid format (Placeholders enabled)
  const diningStyleImages = [
    DiningCouplesImg,
    DiningFamiliesImg,
    DiningFoodiesImg,
    DiningSuiteImg,
  ];

  const diningStyleItems = pageData.dining.styles.items.map((item, idx) => {
    return {
      title: item.title,
      category: 'Dining Experience',
      description: item.desc,
      image: diningStyleImages[idx] || null,
      placeholderLabel: `${item.title} Dining Experience`,
    };
  });

  // 8. Onboard Packages, Activities & Wellness for CardGrid
  const onboardExperienceCards = [
    {
      icon: 'Wine',
      title: pageData.onboardPackagesAndWellness.packages.title,
      description: pageData.onboardPackagesAndWellness.packages.body,
      bullets: [
        ...pageData.onboardPackagesAndWellness.packages.items,
        `Note: ${pageData.onboardPackagesAndWellness.packages.note}`,
      ],
    },
    {
      icon: 'Sun',
      title: pageData.onboardPackagesAndWellness.activities.title,
      description: pageData.onboardPackagesAndWellness.activities.body,
      bullets: [
        ...pageData.onboardPackagesAndWellness.activities.items,
        `Note: ${pageData.onboardPackagesAndWellness.activities.note}`,
      ],
    },
    {
      icon: 'Heart',
      title: pageData.onboardPackagesAndWellness.wellness.title,
      description: pageData.onboardPackagesAndWellness.wellness.body,
      bullets: [
        ...pageData.onboardPackagesAndWellness.wellness.items,
        `Note: ${pageData.onboardPackagesAndWellness.wellness.note}`,
      ],
    },
  ];

  // 9. Traveler Personas for TravelerProfileSelector
  const travelerProfilesData = [
    {
      name: 'Couples & Romance',
      tagline: pageData.travelerProfiles.couples.badge,
      image: ProfileCouplesImg,
      quote: pageData.travelerProfiles.couples.lead,
      recommendation: pageData.travelerProfiles.couples.title,
      reason: pageData.travelerProfiles.couples.footnote,
      whyFits: pageData.travelerProfiles.couples.priorities,
    },
    {
      name: 'Families & Multigen',
      tagline: pageData.travelerProfiles.families.badge,
      image: ProfileFamiliesImg,
      quote: pageData.travelerProfiles.families.lead,
      recommendation: pageData.travelerProfiles.families.title,
      reason: pageData.travelerProfiles.families.footnote,
      whyFits: pageData.travelerProfiles.families.considerations,
    },
    {
      name: 'Solo Travelers',
      tagline: pageData.travelerProfiles.solo.eyebrow,
      image: ProfileSoloImg,
      quote: pageData.travelerProfiles.solo.text,
      recommendation: pageData.travelerProfiles.solo.title,
      reason: 'Consult with an advisor to evaluate current single supplement waivers and social sailings.',
      whyFits: [
        'Dedicated single occupancy stateroom categories',
        'Daily solo traveler meetups and evening socials',
        'Full access to all ship entertainment and lounges',
        'Flexible open-seating and specialty dining options',
      ],
    },
  ];

  // 10. Map 5-Step Ship Selection to InteractivePlanningRoadmap (Placeholders enabled)
  const roadmapImages = [
    Step1DestinationImg,
    Step2LengthImg,
    Step3CompareImg,
    Step4CostImg,
    Step5ItineraryImg,
  ];

  const roadmapSteps = pageData.chooseShipSteps.steps.map((step, idx) => {
    return {
      timeframe: `Step 0${idx + 1}`,
      title: step.title,
      description: step.desc,
      image: roadmapImages[idx] || null,
      placeholderLabel: `Step 0${idx + 1}: ${step.title}`,
    };
  });

  // 11. First-Time Tips for ExpertRulesGrid
  const firstTimeRules = pageData.firstTimeTips.tips.map((tip) => ({
    title: tip.title,
    description: tip.desc,
  }));

  // 12. 2026-2027 Highlights for BentoGlassmorphismGrid
  const highlightsBentoItems = [
    {
      stat: '70+ Countries',
      title: 'Global Deployments Across Seven Continents',
      description: pageData.highlights2026.footer,
      category: '2026–2027 Global Program',
      image: BentoGlobalImg,
    },
    {
      stat: '280+ Ports',
      title: 'Iconic European & Mediterranean Sailings',
      description: `${pageData.highlights2026.items.slice(0, 3).join(', ')} with overnight stays in cultural capitals.`,
      category: 'Europe & Mediterranean',
      image: BentoEuropeImg,
    },
    {
      stat: 'Polar Voyages',
      title: 'Iceland, Norway & Arctic Circle',
      description: 'Fjord navigation, midnight sun sailings, and scenic glacier viewing.',
      category: 'Nordic & Arctic',
      image: BentoNordicImg,
    },
    {
      stat: 'Expeditions',
      title: 'Antarctica, South America & Galápagos',
      description: 'Expedition exploration aboard purpose-built vessels like Celebrity Flora.',
      category: 'Expedition Cruising',
      image: BentoExpeditionImg,
    },
    {
      stat: 'Asia & Pacific',
      title: 'Asia, Australia & New Zealand',
      description: 'Deep destination immersion in Japan, Southeast Asia, and Australasia.',
      category: 'Transpacific & Asia',
      image: BentoAsiaPacificImg,
    },
    {
      stat: 'Grand Voyages',
      title: 'Extended Global Itineraries',
      description: pageData.highlights2026.subtext,
      category: 'World Itineraries',
      image: BentoGrandVoyagesImg,
    },
  ];

  // 13. Map Curated Guides for InteractivePillarHubGrid (Placeholders enabled)
  const curatedGuideImages = [
    CuratedEdgeImg,
    CuratedFleetImg,
    CuratedRetreatImg,
    CuratedDiningImg,
    CuratedCaribbeanMedImg,
    CuratedAlaskaGalapagosImg,
    CuratedShowdownsImg,
    CuratedWhyBookImg,
  ];

  const curatedGuideItems = pageData.curatedGuides.map((guide, idx) => {
    return {
      title: guide.title,
      category: guide.category,
      description: guide.description,
      image: curatedGuideImages[idx] || null,
      placeholderLabel: guide.title,
      links: guide.links,
      mainUrl: guide.mainUrl,
    };
  });

  // Schema LD+JSON Graph (Trips & Ships Luxury Travel Standard)
  const canonicalUrl = pageData.seo?.canonical || 'https://www.tripsandships.com/celebrity-cruises';
  const pageTitle = pageData.seo?.title || 'Celebrity Cruises: Complete Guide';
  const metaTitle = pageData.seo?.metaTitle || pageTitle;
  const metaDescription = pageData.seo?.metaDescription || 'Comprehensive guide to Celebrity Cruises with fleet reviews, dining guides, suite comparisons, itineraries, and expert booking advice from Angela Hughes.';

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
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO of Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Travel Expert"
        },
        "description": "Angela Hughes is a luxury travel expert with over 40 years of experience, having traveled to 121+ countries, specializing in luxury cruises and river cruises.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "Celebrity Cruises",
          "Cruise Ship Selection",
          "The Retreat",
          "AquaClass",
          "Infinite Verandas"
        ]
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
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": (Array.isArray(pageData.faqs) ? pageData.faqs : (pageData.faqs?.questions || [])).map(faq => ({
          "@type": "Question",
          "name": (faq.question || faq.q || "").replace(/^\d+\.\s*/, ''),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer || faq.a || ""
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

      {/* ─── SECTION 2: INTRO (PremiumIntro) ─── */}
      <PremiumIntro
        sections={introSections}
        image1={IntroArchImg}
        image2={IntroAmenitiesImg}
        alt1="Celebrity Cruises Modern Ship Architecture"
        alt2="Celebrity Cruises Suite & Dining Amenities"
        watermarkText="Celebrity"
      />

      {/* ─── SECTION 3: CURATED GUIDES HUB (InteractivePillarHubGrid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title="Explore Our Curated Celebrity Cruises Guides & Comparisons"
          subtitle="Discover specialized ship guides, dining reviews, destination itineraries, and competitor showdowns."
          items={curatedGuideItems}
          variant="destination"
        />
      </div>

      {/* ─── SECTION 3: WHAT IS CELEBRITY KNOWN FOR & SUITABILITY (EditorialIntroSplit) ─── */}
      <EditorialIntroSplit
        eyebrow={pageData.knownForAndSuited.eyebrow}
        heading={pageData.knownForAndSuited.title}
        paragraphs={[
          pageData.knownForAndSuited.description1,
          pageData.knownForAndSuited.description2,
          pageData.knownForAndSuited.description3,
        ]}
        primaryImage={EditorialDesignPrimaryImg}
        primaryAlt="Celebrity Cruises Contemporary Ship Architecture and Magic Carpet"
        secondaryImage={EditorialCulinarySecondaryImg}
        secondaryAlt="Destination Immersion and Mediterranean Culinary Experience"
      />

      {/* ─── SECTION 4: WHO SHOULD CHOOSE CELEBRITY CRUISES (CostValueAnalysisCards) ─── */}
      <CostValueAnalysisCards
        title={pageData.knownForAndSuited.bestSuitedTitle}
        subtitle="Comparing how Celebrity Cruises matches your travel style and vacation goals."
        includedTitle={pageData.knownForAndSuited.bestSuitedTitle}
        extrasTitle="Considerations & Alternatives"
        included={suitedIncluded}
        extras={suitedExtras}
      />

      {/* ─── SECTION 5: EDGE SERIES TABLE (ComparisonTable) ─── */}
      <ComparisonTable
        data={{
          title: `${pageData.edgeSeries.eyebrow} — ${pageData.edgeSeries.title}`,
          headers: pageData.edgeSeries.headers,
          rows: pageData.edgeSeries.ships.map((s) => [s.ship, s.notable, s.regions]),
        }}
      />

      {/* ─── SECTION 6: FEATURED SHIPS (HighlightsSplit: Ascent & Xcel) ─── */}
      <HighlightsSplit
        title="Featured Edge Series Ships"
        subtitle="Explore cutting-edge amenities, modern architecture, and innovative open-air spaces."
        items={featuredShipHighlights}
      />

      {/* ─── SECTION 7: SOLSTICE, MILLENNIUM & CELEBRITY FLORA (FeatureGrid with visible light background) ─── */}
      <FeatureGrid
        title={pageData.fleetMore.title}
        subtitle={pageData.fleetMore.eyebrow}
        features={fleetFeatures}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 8: DESTINATIONS SHOWCASE (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title="Where Does Celebrity Cruises Sail?"
        subtitle="From the sunny Caribbean and historic Mediterranean ports to scenic Alaska and the Galápagos."
        items={destinationItems}
      />

      {/* ─── SECTION 9: ITINERARY SELECTION TABLE (ComparisonTable) ─── */}
      <div id="itineraries">
        <ComparisonTable
          data={{
            title: pageData.itinerarySelection.title,
            headers: pageData.itinerarySelection.headers,
            rows: pageData.itinerarySelection.tripLengths.map((t) => [
              t.length,
              t.goodFor,
              t.consider,
            ]),
          }}
        />
      </div>

      {/* ─── SECTION 10: ACCOMMODATIONS (GenericChecklistCards) ─── */}
      <GenericChecklistCards
        title="Staterooms & The Retreat Suite Living"
        subtitle={pageData.accommodations.interiorAndOceanView.eyebrow}
        cards={accommodationCards}
      />

      {/* ─── SECTION 11: DINING OVERVIEW & STYLES (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.dining.overview.title}
        subtitle={`${pageData.dining.overview.lead} Venues include: ${pageData.dining.overview.venues.join(', ')}.`}
        items={diningStyleItems}
      />

      {/* ─── SECTION 12: PACKAGES, ACTIVITIES & WELLNESS (CardGrid) ─── */}
      <CardGrid
        title="Onboard Experiences, Packages & Wellness"
        subtitle="RESORT-STYLE AMENITIES & EXPERIENCES"
        cards={onboardExperienceCards}
        columns={3}
        stagger={false}
      />

      {/* ─── SECTION 13: TRAVELER PROFILES (TravelerProfileSelector) ─── */}
      <TravelerProfileSelector
        title="Celebrity Cruises for Every Traveler"
        subtitle="MATCH YOUR VACATION STYLE"
        profiles={travelerProfilesData}
      />

      {/* ─── BEST TIME TO BOOK (ExpertAuthorityChecklist + AuthorityBox) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.bestTimeToBook.title}
        subtitle={pageData.bestTimeToBook.lead}
        points={pageData.bestTimeToBook.reasons}
      />
      <div className="max-w-5xl mx-auto px-6 -mt-8 mb-12">
        <AuthorityBox
          title="TIMING & PROMOTION ADVICE"
          content={pageData.bestTimeToBook.body}
          author="Angela Hughes, Luxury Cruise Specialist"
          authorImage={Profile_Picture_AH}
        />
      </div>

      {/* ─── HOW TO CHOOSE THE RIGHT SHIP (InteractivePlanningRoadmap) ─── */}
      <InteractivePlanningRoadmap
        title={pageData.chooseShipSteps.title}
        subtitle={pageData.chooseShipSteps.subtext}
        steps={roadmapSteps}
      />

      {/* ─── COSTS TO BUDGET FOR (ComparisonTable) ─── */}
      <ComparisonTable
        data={{
          title: pageData.cost.title,
          headers: pageData.cost.headers,
          rows: pageData.cost.budgetTable.map((item) => [item.expense, item.included]),
        }}
      />

      {/* ─── WHAT TO KNOW BEFORE FIRST CRUISE (ExpertRulesGrid) ─── */}
      <ExpertRulesGrid
        title={pageData.firstTimeTips.title}
        subtitle={pageData.firstTimeTips.subtext}
        rules={firstTimeRules}
      />

      {/* ─── CELEBRITY VS OTHER PREMIUM CRUISE LINES (ComparisonTable) ─── */}
      <ComparisonTable
        data={{
          title: pageData.comparisonVsOthers.title,
          headers: pageData.comparisonVsOthers.headers,
          rows: pageData.comparisonVsOthers.factors.map((f) => [f.factor, f.value]),
        }}
      />

      {/* ─── 2026-2027 HIGHLIGHTS (BentoGlassmorphismGrid) ─── */}
      <BentoGlassmorphismGrid
        title={pageData.highlights2026.title}
        subtitle={`${pageData.highlights2026.eyebrow} — ${pageData.highlights2026.subtext}`}
        bentoItems={highlightsBentoItems}
      />

      {/* ─── SECTION 20: ANGELA HUGHES EXPERT CREDENTIALS (ExpertCredentials) ─── */}
      <ExpertCredentials
        name={pageData.expertInsight.name}
        title={pageData.expertInsight.role}
        bio={pageData.expertInsight.bio}
        image={Profile_Picture_AH}
        badge={pageData.expertInsight.badge}
        experienceBadge={pageData.expertInsight.experience}
        credentials={pageData.expertInsight.standoutPills}
        quote={pageData.expertInsight.quote}
        quoteSubtitle="On Celebrity Cruises Planning"
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Trusted Luxury Cruise Travel Authority"
        ctaText="Plan Your Cruise with Angela"
        ctaLink="/contact"
      />

      {/* ─── SECTION 21: KEY TAKEAWAYS (ExpertAuthorityChecklist) ─── */}
      <ExpertAuthorityChecklist
        title={pageData.keyTakeaways.title}
        subtitle="12 Essential takeaways and fleet insights for planning your Celebrity Cruises vacation."
        points={pageData.keyTakeaways.items}
      />

      {/* ─── FAQS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── SECTION 24: FINAL CENTER CTA (CenterCTA) ─── */}
      <CenterCTA
        title={pageData.cta.title}
        description={pageData.cta.description}
        buttonText={pageData.cta.primaryButtonText}
        buttonLink={pageData.cta.primaryButtonLink}
        image={CtaImage}
      />
    </>
  );
}

export default CelebrityCruisesGuide;