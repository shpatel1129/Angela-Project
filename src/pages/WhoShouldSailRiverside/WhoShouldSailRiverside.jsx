import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

import { PartyPopper, Users } from "lucide-react";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import GenerationalTravelMatcher from "../../components/ui/GenerationalTravelMatcher";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import ValueShowcase from "../../components/ui/ValueShowcase"; 
import ProsConsCards from "../../components/ui/ProsConsCards";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Placeholder image imports (kept commented out) ─────────────────
   // import HeroImage1 from "../../assets/WhoShouldSailRiverside/riverside-couple-suite-balcony.jpg";
   // import HeroImage2 from "../../assets/WhoShouldSailRiverside/riverside-couple-dining.jpg";
   // import HeroImage3 from "../../assets/WhoShouldSailRiverside/riverside-onboard-lounge.jpg";
   // import RiversideSuite from "../../assets/WhoShouldSailRiverside/riverside-suite-living-area.jpg";
   // import RiversideFamily from "../../assets/WhoShouldSailRiverside/riverside-family-onboard.jpg";
   // import RiversideCulture from "../../assets/WhoShouldSailRiverside/riverside-cultural-excursion.jpg";
   // import RiversideCastle from "../../assets/WhoShouldSailRiverside/riverside-rhine-castle-view.jpg";
   // import RiversideCrew from "../../assets/WhoShouldSailRiverside/riverside-crew-service.jpg";
   // import RiversideEvening from "../../assets/WhoShouldSailRiverside/riverside-evening-lounge.jpg";
   // import RiversideShip from "../../assets/WhoShouldSailRiverside/riverside-ship-exterior.jpg";
─────────────────────────────────────────────────────────────────── */

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
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#webpage",
      name: "Who Should Sail Riverside? | Is Riverside Luxury Cruises Right for You?",
      url: "https://www.tripsandships.com/who-should-sail-riverside",
      description:
        "Discover who should sail Riverside Luxury Cruises. Learn whether Riverside is the right choice for couples, first-time river cruisers, food lovers, luxury travelers, and multi-generational families."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#article",
      headline: "Who Should Sail Riverside? | Choosing the Right Luxury River Cruise",
      description:
        "A complete guide to who Riverside Luxury Cruises is best suited for, covering couples, first-time river cruisers, luxury travelers, food and wine enthusiasts, cultural travelers, and multi-generational families.",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#breadcrumb",
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
          name: "River Cruise Guides",
          item: "https://www.tripsandships.com/riverside-luxury-cruises-ultimate-guide"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Riverside Luxury Cruises Reviews",
          item: "https://www.tripsandships.com/riverside-luxury-cruises-reviewss"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Who Should Sail Riverside",
          item: "https://www.tripsandships.com/who-should-sail-riverside"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#trip",
      name: "Riverside Luxury Cruises European River Cruise Experience",
      description:
        "Boutique luxury river cruising designed for couples, first-time river cruisers, luxury travelers, food and wine enthusiasts, cultural explorers, and multi-generational adult families sailing the Danube, Rhine, and Rhône Rivers.",
      provider: {
        "@type": "Organization",
        name: "Riverside Luxury Cruises"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#service",
      serviceType: "Luxury River Cruise Vacation Planning",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel"
      },
      areaServed: "Worldwide",
      description:
        "Personalized guidance to help travelers determine whether Riverside Luxury Cruises matches their travel style, and to plan the ideal itinerary, ship, and suite."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#itemlist",
      name: "Who Should Sail Riverside? — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Riverside Is Perfect for Couples" },
        { "@type": "ListItem", position: 3, name: "First-Time River Cruisers & Luxury Travelers" },
        { "@type": "ListItem", position: 4, name: "Food & Wine Enthusiasts" },
        { "@type": "ListItem", position: 5, name: "Cultural Travelers" },
        { "@type": "ListItem", position: 6, name: "Special Occasions & Multi-Generational Families" },
        { "@type": "ListItem", position: 7, name: "Travelers Who Love Scenic Cruising" },
        { "@type": "ListItem", position: 8, name: "Travelers Who Appreciate Personalized Service" },
        { "@type": "ListItem", position: 9, name: "Who Might Prefer Another Cruise Line?" },
        { "@type": "ListItem", position: 10, name: "Is Riverside Worth It?" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/who-should-sail-riverside/#faq",
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

const WhoShouldSailRiverside = () => {
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
      />

      {/* ── 2. QUICK ANSWER ── */}
      <div id="quick-answer">
        <GenericChecklistCards
          title={data.quickAnswer.title}
          subtitle={data.quickAnswer.subtitle}
          cards={[
            {
              title: "Ideal Traveler Profiles",
              items: data.quickAnswer.items.slice(0, 4)
            },
            {
              title: "Travel Passions & Milestones",
              items: data.quickAnswer.items.slice(4, 8)
            }
          ]}
        />
        <div className="max-w-[1024px] mx-auto px-6 -mt-8 pb-12 text-center">
          <p className="font-sans text-lg text-slate-600 bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            {data.quickAnswer.outro}
          </p>
        </div>
      </div>

      {/* ── 3. RIVERSIDE IS PERFECT FOR COUPLES ── */}
      <div id="perfect-for-couples">
        <EditorialIntroSection
          heading={data.couples.heading}
          eyebrow={data.couples.eyebrow}
          paragraphs={data.couples.paragraphs}
          highlights={data.couples.highlights}
          badgeTitle={data.couples.badgeTitle}
          badgeDescription={data.couples.badgeDescription}
          placeholderLabel={data.couples.placeholderLabel}
          image={
            // "src/assets/WhoShouldSailRiverside/riverside-suite-living-area.jpg"
            undefined
          }
        />
      </div>

      {/* ── 4. FIRST-TIME RIVER CRUISERS & LUXURY TRAVELERS ── */}
      <div id="first-time-and-luxury">
        <TravelerPersonaCards
          title={data.firstTimeAndLuxury.title}
          subtitle={data.firstTimeAndLuxury.subtitle}
          personas={data.firstTimeAndLuxury.cards.map((card, idx) => ({
            title: card.title,
            icon: idx === 0 ? "Landmark" : "Gem",
            description: card.description,
            traits: card.bullets,
            recommendations: idx === 0
              ? ["Stress-Free Travel", "Easy Embarkation", "Unpack Once"]
              : ["Understated Sophistication", "Large Luxury Suites", "Gourmet Dining"]
          }))}
        />
      </div>

      {/* ── 5. FOOD & WINE ENTHUSIASTS ── */}
      <div id="food-and-wine-enthusiasts">
        <EditorialFeatureShowcase
          title={data.foodAndWine.title}
          subtitle={data.foodAndWine.subtitle}
          features={data.foodAndWine.features}
          image={
            // "src/assets/WhoShouldSailRiverside/riverside-couple-dining.jpg"
            undefined
          }
        />
      </div>

      {/* ── 6. CULTURAL TRAVELERS ── */}
      <div id="cultural-travelers">
        <AsymmetricStoryIntro
          eyebrow={data.culturalTravelers.eyebrow}
          title={data.culturalTravelers.title}
          subtitle={data.culturalTravelers.subtitle}
          paragraphs={data.culturalTravelers.paragraphs}
          highlights={data.culturalTravelers.highlights}
          image1Placeholder={data.culturalTravelers.image1Placeholder}
          image2Placeholder={data.culturalTravelers.image2Placeholder}
          ctaText={data.culturalTravelers.ctaText}
          ctaLink={data.culturalTravelers.ctaLink}
          image1={
            // "src/assets/WhoShouldSailRiverside/riverside-cultural-excursion.jpg"
            undefined
          }
          image2={
            // "src/assets/WhoShouldSailRiverside/riverside-rhine-castle-view.jpg"
            undefined
          }
        />
      </div>

      {/* ── 7. SPECIAL OCCASIONS & MULTI-GENERATIONAL FAMILIES ── */}
      <div id="special-occasions-and-families">
        <GenerationalTravelMatcher
          title={data.specialOccasionsAndFamilies.title}
          subtitle={data.specialOccasionsAndFamilies.subtitle}
          generations={[
            {
              id: "special-occasions",
              name: "Special Occasions",
              icon: <PartyPopper className="w-5 h-5" />,
              idealFor: data.specialOccasionsAndFamilies.cards[0].title,
              description: data.specialOccasionsAndFamilies.cards[0].description,
              highlights: data.specialOccasionsAndFamilies.cards[0].bullets
            },
            {
              id: "multi-generational",
              name: "Multi-Generational",
              icon: <Users className="w-5 h-5" />,
              idealFor: data.specialOccasionsAndFamilies.cards[1].title,
              description: data.specialOccasionsAndFamilies.cards[1].description,
              highlights: data.specialOccasionsAndFamilies.cards[1].bullets
            }
          ]}
        />
      </div>

      {/* ── 8. SCENIC CRUISING & PERSONALIZED SERVICE ── */}
      <div id="scenic-and-personalized-service">
        <ValueShowcase
          title={data.scenicAndPersonalized.title}
          subtitle={data.scenicAndPersonalized.subtitle}
          items={data.scenicAndPersonalized.items.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/WhoShouldSailRiverside/riverside-onboard-lounge.jpg",
              // "src/assets/WhoShouldSailRiverside/riverside-crew-service.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 9. WHO MIGHT PREFER ANOTHER CRUISE LINE? (PROS & CONS) ── */}
      <div id="who-might-prefer-another-line">
        <ProsConsCards
          title={data.prosAndCons.title}
          prosTitle={data.prosAndCons.prosTitle}
          consTitle={data.prosAndCons.consTitle}
          bestFor={data.prosAndCons.pros}
          notBestFor={data.prosAndCons.cons}
          bottomNote={data.prosAndCons.bottomNote}
        />
      </div>

      {/* ── 10. IS RIVERSIDE WORTH IT? ── */}
      <div id="is-riverside-worth-it">
        <EditorialIntroSection
          heading={data.isWorthIt.heading}
          eyebrow={data.isWorthIt.eyebrow}
          paragraphs={data.isWorthIt.paragraphs}
          highlights={data.isWorthIt.highlights}
          badgeTitle={data.isWorthIt.badgeTitle}
          badgeDescription={data.isWorthIt.badgeDescription}
          placeholderLabel={data.isWorthIt.placeholderLabel}
          image={
            // "src/assets/WhoShouldSailRiverside/riverside-evening-lounge.jpg"
            undefined
          }
        />
      </div>

      {/* ── 11. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <div id="Asc-luxury-travel-advisor">
        <AuthorityGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          items={data.whyBookAdvisor.items}
        />
      </div>

      {/* ── 12. ANGELA HUGHES AUTHORITY BOX ── */}
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

      {/* ── 13. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle:
              "Everything travelers need to know about whether Riverside Luxury Cruises is the right fit before booking their next European river cruise.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 14. FINAL VERDICT & CTA ── */}
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
          theme="dark"
        />
      </div>
    </div>
  );
};

export default WhoShouldSailRiverside;