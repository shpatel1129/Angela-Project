import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import BentoQuickFacts from "../../components/ui/BentoQuickFacts";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import CinematicDestinations from "../../components/ui/CinematicDestinations";
import SignatureFeatures from "../../components/ui/SignatureFeatures";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import LuxuryFeatureShowcase from "../../components/ui/LuxuryFeatureShowcase";
import ValueShowcase from "../../components/ui/ValueShowcase";
import TravelerTypeGrid from "../../components/ui/TravelerTypeGrid";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection"; 
import CenterCTA from "../../components/ui/CenterCTA";

// Image Assets
import ScenicRiverCruisesHero from "../../assets/ScenicRiverCruises/scenic-river-cruises-ultra-luxury-europe-hero.webp";
import WhyChooseScenicImage from "../../assets/ScenicRiverCruises/why-choose-scenic-all-inclusive-luxury-river-cruises.webp";
import WhatMakesScenicDifferent1Image from "../../assets/ScenicRiverCruises/scenic-space-ship-river-cruise-experience.webp";
import WhatMakesScenicDifferent2Image from "../../assets/ScenicRiverCruises/scenic-luxury-river-cruise-onboard-lounge.webp";
import DanubeImage from "../../assets/ScenicRiverCruises/scenic-danube-river-cruise-budapest-vienna.webp";
import RhineImage from "../../assets/ScenicRiverCruises/scenic-rhine-river-cruise-castles-vineyards.webp";
import RhoneImage from "../../assets/ScenicRiverCruises/scenic-rhone-river-cruise-provence-france.webp";
import SeineImage from "../../assets/ScenicRiverCruises/scenic-seine-river-cruise-paris-normandy.webp";
import DouroImage from "../../assets/ScenicRiverCruises/scenic-douro-river-cruise-portugal-valley.webp";
import MekongImage from "../../assets/ScenicRiverCruises/scenic-mekong-river-cruise-vietnam-cambodia.webp";
import SuitesAccommodations1Image from "../../assets/ScenicRiverCruises/scenic-sun-lounge-balcony-suite-accommodations.webp";
import SuitesAccommodations2Image from "../../assets/ScenicRiverCruises/scenic-space-ship-butler-service-luxury-suite.webp";
import DiningExperienceImage from "../../assets/ScenicRiverCruises/scenic-gourmet-fine-dining-culinary-experience.webp";
import StayActiveAndRechargeImage from "../../assets/ScenicRiverCruises/scenic-river-cruises-wellness-fitness-spa.webp";
import ElegantEveningExperiencesImage from "../../assets/ScenicRiverCruises/scenic-river-cruises-elegant-evening-entertainment.webp";
import ScenicRiverShipsImage from "../../assets/ScenicRiverCruises/scenic-space-ships-luxury-fleet-overview.webp";
import ComprehensiveExperienceImage from "../../assets/ScenicRiverCruises/scenic-ultra-luxury-river-cruising-expert-booking-cta.webp";


/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp"
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      description:
        "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences."
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/#webpage",
      name: "Scenic River Cruises: The Complete Guide | Luxury River Cruising in Europe & Southeast Asia",
      url: "https://www.tripsandships.com/scenic-river-cruises",
      description:
        "Discover everything you need to know about Scenic River Cruises. Explore luxury ships, destinations, all-inclusive amenities, itineraries, dining, suites, pricing, and whether Scenic is the right river cruise line for you."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/#article",
      headline: "Scenic River Cruises Guide | Ships, Destinations, Inclusions & Reviews",
      description:
        "A complete guide to Scenic Luxury Cruises & Tours covering ships, suites, dining, destinations, Scenic Freechoice, Scenic Enrich, pricing, pros and cons, and who should sail.",
      author: {
        "@type": "Person",
        name: "Angela Hughes"
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel"
      },
      inLanguage: "en-US"
    },
    {
      "@type": "Review",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/#review",
      itemReviewed: {
        "@type": "Product",
        name: "Scenic Luxury Cruises & Tours"
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5"
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scenic River Cruises: The Complete Guide",
          item: "https://www.tripsandships.com/scenic-river-cruises"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/#itemlist",
      name: "What This Scenic River Cruises Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Overview" },
        { "@type": "ListItem", position: 2, name: "Why Choose Scenic River Cruises?" },
        { "@type": "ListItem", position: 3, name: "What Makes Scenic Different?" },
        { "@type": "ListItem", position: 4, name: "Scenic Destinations" },
        { "@type": "ListItem", position: 5, name: "Scenic River Ships" },
        { "@type": "ListItem", position: 6, name: "Suites & Accommodations" },
        { "@type": "ListItem", position: 7, name: "Dining Experience" },
        { "@type": "ListItem", position: 8, name: "Scenic Freechoice & Scenic Enrich" },
        { "@type": "ListItem", position: 9, name: "Who Should Sail Scenic?" },
        { "@type": "ListItem", position: 10, name: "Is Scenic Worth the Price?" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/#faq",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer
        }
      }))
    }
  ]
};

const ScenicRiverCruisesGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy-950">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ── NAVBAR ── */}
      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink || "/contact"}
        backgroundImage={ScenicRiverCruisesHero}
      />

      {/* ── 2. QUICK OVERVIEW ── */}
      <div id="quick-overview">
        <BentoQuickFacts
          title={data.quickOverview.title}
          items={data.quickOverview.items}
        />
      </div>

      {/* ── 3. WHY CHOOSE SCENIC RIVER CRUISES? ── */}
      <div id="why-choose-scenic">
        <EditorialIntroSection
          heading={data.whyChoose.heading}
          eyebrow={data.whyChoose.eyebrow}
          paragraphs={data.whyChoose.paragraphs}
          highlights={data.whyChoose.highlights}
          badgeTitle={data.whyChoose.badgeTitle}
          badgeDescription={data.whyChoose.badgeDescription}
          placeholderLabel={data.whyChoose.placeholderLabel}
          image={WhyChooseScenicImage}
        />
      </div>

      {/* ── 4. WHAT MAKES SCENIC DIFFERENT? ── */}
      <div id="what-makes-scenic-different">
        <AsymmetricStoryIntro
          eyebrow={data.whatMakesDifferent.eyebrow}
          title={data.whatMakesDifferent.title}
          subtitle={data.whatMakesDifferent.subtitle}
          paragraphs={data.whatMakesDifferent.paragraphs}
          highlights={data.whatMakesDifferent.highlights}
          image1Placeholder={data.whatMakesDifferent.image1Placeholder}
          image2Placeholder={data.whatMakesDifferent.image2Placeholder}
          ctaText={data.whatMakesDifferent.ctaText}
          ctaLink={data.whatMakesDifferent.ctaLink}
          image1={WhatMakesScenicDifferent1Image}
          image2={WhatMakesScenicDifferent2Image}
        />
      </div>

      {/* ── 5. SCENIC DESTINATIONS & ITINERARIES ── */}
      <div id="scenic-destinations">
        <CinematicDestinations
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          items={data.destinations.items.map((item, idx) => ({
            ...item,
            image: [
              DanubeImage,
              RhineImage,
              RhoneImage,
              SeineImage,
              DouroImage,
              MekongImage
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. SUITES & ACCOMMODATIONS ── */}
      <div id="suites-and-accommodations">
        <SignatureFeatures
          data={{
            title: data.suites.heading,
            subtitle: data.suites.eyebrow,
            features: [
              {
                id: "sun-lounge",
                icon: "Sun",
                title: "Scenic Sun Lounge Balcony Suite",
                description: data.suites.paragraphs[0],
                bullets: data.suites.highlights.slice(0, 4),
                image: "sunLounge"
              },
              {
                id: "butler-service",
                icon: "Layers",
                title: "Space-Ship Butler Service & Stateroom Comforts",
                description: `${data.suites.badgeTitle} — ${data.suites.badgeDescription}`,
                bullets: data.suites.highlights.slice(4),
                image: "butlerService"
              }
            ]
          }}
          images={{
            sunLounge: SuitesAccommodations1Image,
            butlerService: SuitesAccommodations2Image
          }}
        />
      </div>

      {/* ── 7. SCENIC FREECHOICE & SCENIC ENRICH ── */}
      <div id="freechoice-and-enrich">
        <TravelerPersonaCards
          title={data.freechoiceAndEnrich.title}
          subtitle={data.freechoiceAndEnrich.subtitle}
          personas={data.freechoiceAndEnrich.cards.map((card, idx) => ({
            title: card.title,
            icon: idx === 0 ? "Compass" : "Gem",
            description: card.description,
            traits: card.bullets,
            recommendations: idx === 0
              ? ["Personalized Pace", "Included Sightseeing", "E-Bike Tours"]
              : ["Palace Concerts", "Castle Banquets", "Exclusive Access"]
          }))}
        />
      </div>

      {/* ── 8. DINING EXPERIENCE ── */}
      <div id="dining-experience">
        <LuxuryFeatureShowcase
          title={data.dining.title}
          subtitle={data.dining.subtitle}
          items={[
            {
              title: "Gourmet Destination-Inspired Menus",
              description: data.dining.intro,
              features: data.dining.highlights,
              image: DiningExperienceImage
            }
          ]}
        />
      </div>

      {/* ── 9. WELLNESS, RELAXATION & ENTERTAINMENT ── */}
      <div id="wellness-entertainment">
        <ValueShowcase
          title={data.wellnessAndEntertainment.title}
          subtitle={data.wellnessAndEntertainment.subtitle}
          items={data.wellnessAndEntertainment.items.map((item, idx) => ({
            ...item,
            image: [
              StayActiveAndRechargeImage,
              ElegantEveningExperiencesImage
            ][idx]
          }))}
        />
      </div>

      {/* ── 10. WHO SHOULD SAIL SCENIC? ── */}
      <div id="who-should-sail-scenic">
        <TravelerTypeGrid
          title={data.whoShouldSail.title}
          subtitle={data.whoShouldSail.lead}
          items={data.whoShouldSail.cards}
        />
      </div>

      {/* ── 11. SCENIC RIVER SHIPS ── */}
      <div id="scenic-river-ships">
        <EditorialFeatureShowcase
          title={data.riverShips.title}
          subtitle={data.riverShips.intro}
          features={data.riverShips.features}
          image={ScenicRiverShipsImage}
        />
      </div>

      {/* ── 12. SCENIC VS. OTHER LUXURY RIVER CRUISE LINES ── */}
      <div id="scenic-vs-competitors">
        <BrandPillarsShowcase
          data={{
            title: data.scenicVsCompetitors.title,
            subtitle: data.scenicVsCompetitors.subtitle,
            pillars: data.scenicVsCompetitors.pillars
          }}
        />
      </div>

      {/* ── 13. IS SCENIC WORTH THE PRICE? ── */}
      <div id="is-it-worth-the-price">
        <CurvilinearGrid
          title={data.isWorthIt.heading}
          subtitle={data.isWorthIt.eyebrow}
          paragraphs={data.isWorthIt.paragraphs}
          items={[
            {
              title: "All Shore Excursions Included",
              description: "Scenic Freechoice guided excursions in every port at every activity level.",
              icon: "Compass",
              features: [data.isWorthIt.highlights[0], data.isWorthIt.highlights[5]]
            },
            {
              title: "Unlimited Premium Beverages",
              description: "Top-shelf spirits, fine wines, regional draft beers, and specialty coffees.",
              icon: "utensils",
              features: [data.isWorthIt.highlights[1], "Complimentary in-suite mini-bar"]
            },
            {
              title: "Dedicated Butler Service",
              description: "Personalized butler attention across all suite categories and stateroom decks.",
              icon: "user",
              features: [data.isWorthIt.highlights[2], "Garment pressing & morning beverages"]
            },
            {
              title: "All Gratuities Included",
              description: "Zero tipping expected onboard or onshore for guides, drivers, and crew.",
              icon: "dollar",
              features: [data.isWorthIt.highlights[3], "Complete peace of mind"]
            },
            {
              title: "Complimentary Airport Transfers",
              description: "Private seamless arrival and departure transfers to and from your Space-Ship.",
              icon: "ship",
              features: [data.isWorthIt.highlights[4], "Flight connection assistance"]
            },
            {
              title: data.isWorthIt.badgeTitle,
              description: data.isWorthIt.badgeDescription,
              icon: "check",
              features: ["Zero hidden charges", "Predictable luxury vacation budget"]
            }
          ]}
        />
      </div>

      {/* ── 14. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <div id="why-book-through-a-luxury-travel-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 15. ANGELA HUGHES AUTHORITY BOX ── */}
      <div id="Asc-expert-insight">
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.badge}
          authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
          authoritySubtitle={data.angelaHughes.authoritySubtitle}
          experienceBadge={data.angelaHughes.experienceBadge}
          image={AboutImage}
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          ctaText={data.angelaHughes.ctaText}
          ctaLink={data.angelaHughes.ctaLink}
        />
      </div>

      {/* ── 16. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know before booking a Scenic River Cruise.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 17. FINAL VERDICT & CTA ── */}
      <div id="final-verdict">
        <ConclusionSection
          sections={[
            {
              heading: data.finalVerdict.title,
              paragraphs: [
                ...data.finalVerdict.paragraphs,
                `Our luxury planning services include: ${data.finalVerdict.planningServices.join(", ")}.`
              ]
            }
          ]}
        />
        <CenterCTA
          title={data.finalVerdict.title}
          description={data.finalVerdict.paragraphs[0]}
          buttonText={data.finalVerdict.ctaText}
          buttonLink={data.finalVerdict.ctaLink}
          image={ComprehensiveExperienceImage}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default ScenicRiverCruisesGuide;