import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import CardGrid from "../../../components/ui/CardGrid";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import CinematicDestinations from "../../../components/ui/CinematicDestinations";
import LuxuryFeatureShowcase from "../../../components/ui/LuxuryFeatureShowcase";
import ValueShowcase from "../../../components/ui/ValueShowcase";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import TravelerTypeGrid from "../../../components/ui/TravelerTypeGrid";
import CulinaryMenuShowcase from "../../../components/ui/CulinaryMenuShowcase";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";

// Image Assets
// import HeroImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-charming-winter-wonderland-river-cruise.webp";
import DockExcursionImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-glowing-star-lanterns-holiday-walkway.webp";
import MarketChaletsImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-festive-ribbon-tied-artisan-gifts.webp";
// import ViennaImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-historic-town-hall-holiday-illumination.webp";
import BudapestImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-charming-illuminated-riverfront-promenade.webp";
import NurembergImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-traditional-spiced-lebkuchen-delicacies.webp";
// import CologneImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-historic-cathedral-backdrop-market-stalls.webp";
// import StrasbourgImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-charming-timbered-house-market-square.webp";
// import PassauImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-traditional-bavarian-style-holiday-fair.webp";
// import ExcursionImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-scenic-holiday-riverbank-winter-stroll.webp";
// import MulledWineImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-steaming-spiced-mulled-wine-gluhwein.webp";
import DiningImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-historic-medieval-castle-market-view.webp";
import EveningLoungeImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-quaint-cobblestone-market-lane-decor.webp";
import WorthItImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-crisp-winter-air-festive-gathering.webp";
import FinalCTAImage from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-christmas-market-traditional-handcrafted-wooden-music-boxes.webp";
import RiversideMorzt from "../../../assets/riversidecruises/RiversideChristmasMarketCruises/riverside-mozart-evening-illuminated-river-cruise-vessel-waterside-ambiance.webp";


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
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#webpage",
      name: "Riverside Christmas Market Cruises | Luxury European Holiday River Cruises",
      url: "https://www.tripsandships.com/riverside-christmas-market-cruises",
      description:
        "Experience Europe's most magical Christmas markets on a Riverside Luxury Cruise. Visit Vienna, Budapest, Strasbourg, Cologne, Nuremberg, and more while enjoying boutique luxury, gourmet dining, and festive holiday traditions."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#article",
      headline: "Riverside Christmas Market Cruises | Luxury Holiday River Cruises",
      description:
        "A complete guide to Riverside Christmas Market Cruises, covering destinations, Riverside Mozart and Riverside Ravel, accommodations, holiday dining, included excursions, and whether a Riverside Christmas Market Cruise is worth booking.",
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
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#breadcrumb",
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
          name: "Riverside Luxury Cruises",
          item: "https://www.tripsandships.com/riverside-luxury-cruises"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Riverside Christmas Market Cruises",
          item: "https://www.tripsandships.com/riverside-christmas-market-cruises"
        }
      ]
    },
    {
      "@type": "TouristTrip",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#touristtrip",
      name: "Riverside Christmas Market Cruise",
      touristType: "Holiday travelers, couples, families, Christmas lovers, luxury travelers",
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Vienna, Austria" },
          { "@type": "ListItem", position: 2, name: "Budapest, Hungary" },
          { "@type": "ListItem", position: 3, name: "Nuremberg, Germany" },
          { "@type": "ListItem", position: 4, name: "Cologne, Germany" },
          { "@type": "ListItem", position: 5, name: "Strasbourg, France" },
          { "@type": "ListItem", position: 6, name: "Passau, Germany" }
        ]
      }
    },
    {
      "@type": "Cruise",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#cruise",
      name: "Riverside Christmas Market Cruise",
      provider: {
        "@type": "Organization",
        name: "Riverside Luxury Cruises"
      },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Vienna, Austria" },
          { "@type": "ListItem", position: 2, name: "Budapest, Hungary" },
          { "@type": "ListItem", position: 3, name: "Nuremberg, Germany" },
          { "@type": "ListItem", position: 4, name: "Cologne, Germany" },
          { "@type": "ListItem", position: 5, name: "Strasbourg, France" },
          { "@type": "ListItem", position: 6, name: "Passau, Germany" }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#destinations",
      name: "Riverside Christmas Market Cruise Destinations",
      itemListElement: [
        { "@type": "Place", position: 1, name: "Vienna, Austria" },
        { "@type": "Place", position: 2, name: "Budapest, Hungary" },
        { "@type": "Place", position: 3, name: "Nuremberg, Germany" },
        { "@type": "Place", position: 4, name: "Cologne, Germany" },
        { "@type": "Place", position: 5, name: "Strasbourg, France" },
        { "@type": "Place", position: 6, name: "Passau, Germany" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#service",
      serviceType: "Luxury Christmas Market River Cruise Planning & Booking Support",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel"
      },
      areaServed: "Worldwide",
      description:
        "Personalized planning support to help travelers compare Christmas Market itineraries and choose the best sailing, ship, and suite for their holiday trip."
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#itemlist",
      name: "What This Riverside Christmas Market Cruises Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Overview" },
        { "@type": "ListItem", position: 2, name: "Why Take a Christmas Market Cruise?" },
        { "@type": "ListItem", position: 3, name: "Why Choose Riverside Luxury Cruises?" },
        { "@type": "ListItem", position: 4, name: "The Best Christmas Market Destinations" },
        { "@type": "ListItem", position: 5, name: "Holiday Experiences You'll Enjoy" },
        { "@type": "ListItem", position: 6, name: "Riverside Mozart & Riverside Ravel" },
        { "@type": "ListItem", position: 7, name: "Included Shore Excursions & Life Onboard" },
        { "@type": "ListItem", position: 8, name: "Luxury Accommodations" },
        { "@type": "ListItem", position: 9, name: "Who Should Choose a Riverside Christmas Market Cruise?" },
        { "@type": "ListItem", position: 10, name: "Holiday Dining" },
        { "@type": "ListItem", position: 11, name: "Best Time to Go" },
        { "@type": "ListItem", position: 12, name: "Is a Riverside Christmas Market Cruise Worth It?" },
        { "@type": "ListItem", position: 13, name: "Why Book Through a Luxury Travel Advisor?" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/riverside-christmas-market-cruises/#faq",
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

const RiversideChristmasMarketCruises = () => {
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
        description={
          (Array.isArray(data.hero.description)
            ? data.hero.description
            : typeof data.hero.description === "string"
            ? data.hero.description.includes("\n\n")
              ? data.hero.description.split("\n\n")
              : data.hero.description.split(/(?<=\.)(?=\s*“)/)
            : []
          ).map((paragraph, index) => (
            <span
              key={index}
              className={index > 0 ? "block mt-4" : "block"}
            >
              {paragraph.trim()}
            </span>
          ))
        }
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink || "/contact"}
        // backgroundImage={HeroImage}
        imageAlt="Riverside European Christmas Market Cruises"
      />

      {/* ── 2. QUICK OVERVIEW ── */}
      <div id="quick-overview">
        <CardGrid
          title={data.quickOverview.title}
          subtitle={data.quickOverview.subtitle}
          cards={data.quickOverview.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 3. WHY TAKE A CHRISTMAS MARKET CRUISE? ── */}
      <div id="why-take-a-christmas-market-cruise">
        <AsymmetricStoryIntro
          eyebrow={data.whyTakeCruise.eyebrow}
          title={data.whyTakeCruise.title}
          subtitle={data.whyTakeCruise.subtitle}
          paragraphs={data.whyTakeCruise.paragraphs}
          highlights={data.whyTakeCruise.highlights}
          image1Placeholder={data.whyTakeCruise.image1Placeholder}
          image2Placeholder={data.whyTakeCruise.image2Placeholder}
          ctaText={data.whyTakeCruise.ctaText}
          ctaLink={data.whyTakeCruise.ctaLink}
          image1={DockExcursionImage}
          image2={MarketChaletsImage}
        />
      </div>

      {/* ── 4. WHY CHOOSE RIVERSIDE LUXURY CRUISES? ── */}
      <div id="why-choose-riverside">
        <GenericChecklistCards
          title={data.whyChooseRiverside.title}
          subtitle={data.whyChooseRiverside.subtitle}
          cards={data.whyChooseRiverside.cards}
        />
      </div>

      {/* ── 5. THE BEST CHRISTMAS MARKET DESTINATIONS ── */}
      <div id="luc-destinations">
        <CinematicDestinations
          title={data.destinations.title}
          subtitle={data.destinations.subtitle}
          items={data.destinations.items.map((item, idx) => ({
            ...item,
            image: [
              undefined,
              BudapestImage,
              NurembergImage,
              undefined,
              undefined,
              undefined
            ][idx]
          }))}
        />
      </div>

      {/* ── 6. HOLIDAY EXPERIENCES YOU'LL ENJOY ── */}
      <div id="holiday-experiences">
        <CardGrid
          title={data.holidayExperiences.title}
          subtitle={data.holidayExperiences.subtitle}
          cards={data.holidayExperiences.cards}
          columns={4}
          stagger={false}
        />
      </div>

      {/* ── 7. RIVERSIDE MOZART & RIVERSIDE RAVEL ── */}
      <div id="riverside-mozart-ravel">
        <LuxuryFeatureShowcase
          title={data.riversideMozartRavel.title}
          subtitle={data.riversideMozartRavel.subtitle}
          items={data.riversideMozartRavel.items.map((item) => ({
            ...item,
            image: [
              RiversideMorzt
            ][0]
          }))}
        />
      </div>

      {/* ── 8. INCLUDED SHORE EXCURSIONS & LIFE ONBOARD ── */}
      <div id="onboard-experience">
        <ValueShowcase
          title={data.whatsIncludedOnboard.title}
          subtitle={data.whatsIncludedOnboard.subtitle}
          items={data.whatsIncludedOnboard.items.map((item, idx) => ({
            ...item,
            image: [
              // ExcursionImage,
              // MulledWineImage
            ][idx]
          }))}
        />
      </div>

      {/* ── 9. LUXURY ACCOMMODATIONS ── */}
      <div id="luxury-accommodations">
        <EditorialIntroSection
          heading={data.accommodations.heading}
          eyebrow={data.accommodations.eyebrow}
          paragraphs={data.accommodations.paragraphs}
          highlights={data.accommodations.highlights}
          placeholderLabel={data.accommodations.placeholderLabel}
          badgeTitle={data.accommodations.badgeTitle}
          badgeDescription={data.accommodations.badgeDescription}
          image={
            // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-suite.jpg"
            undefined
          }
        />
      </div>

      {/* ── 10. WHO SHOULD CHOOSE A RIVERSIDE CHRISTMAS MARKET CRUISE? ── */}
      <div id="who-should-choose">
        <TravelerTypeGrid
          title={data.whoShouldChoose.title}
          subtitle={data.whoShouldChoose.subtitle}
          items={data.whoShouldChoose.cards.map((item, idx) => ({
            ...item,
            image: [
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-dining.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-vienna.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-nuremberg.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-mozart-ravel-holiday.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-cologne.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-budapest.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-evening-lounge.jpg",
              // "src/assets/RiversideChristmasMarketCruises/riverside-christmas-ship-exterior.jpg"
            ][idx]
          }))}
        />
      </div>

      {/* ── 11. HOLIDAY DINING & RIVERSIDE LUXURY DURING THE HOLIDAYS ── */}
      <div id="holiday-dining">
        <CulinaryMenuShowcase
          title={data.diningExperience.title}
          subtitle={data.diningExperience.subtitle}
          items={data.diningExperience.items}
          images={[
            DiningImage,
            EveningLoungeImage
          ]}
        />
      </div>

      {/* ── 12. BEST TIME TO GO ── */}
      <div id="best-time-to-go">
        <CardGrid
          title={data.bestTimeToGo.title}
          subtitle={data.bestTimeToGo.subtitle}
          cards={data.bestTimeToGo.cards}
          columns={3}
          stagger={false}
        />
      </div>

      {/* ── 13. IS A RIVERSIDE CHRISTMAS MARKET CRUISE WORTH IT? ── */}
      <div id="is-it-worth-it">
        <EditorialFeatureShowcase
          title={data.isWorthIt.title}
          subtitle={data.isWorthIt.subtitle}
          features={data.isWorthIt.features}
          image={WorthItImage}
        />
      </div>

      {/* ── 14. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ── */}
      <div id="Asc-luxury-travel-advisor">
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
            subtitle: "Everything travelers need to know before booking a Riverside Christmas Market Cruise.",
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
          image={FinalCTAImage}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default RiversideChristmasMarketCruises;