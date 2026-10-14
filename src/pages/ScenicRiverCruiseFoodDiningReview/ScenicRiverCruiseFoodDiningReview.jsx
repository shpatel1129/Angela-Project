import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import InclusionsList from "../../components/ui/InclusionsList";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ComparisonTable from "../../components/ui/ComparisonTable";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import CenterCTA from "../../components/ui/CenterCTA";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import LuxuryIntroSection from "../../components/ui/LuxuryIntroSection";
import CardGrid from "../../components/ui/CardGrid";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";

// Assets
// import ScenicDiningImage from "../../assets/ScenicRiverCruises/scenic-gourmet-fine-dining-culinary-experience.webp";
// import ScenicLoungeImage from "../../assets/ScenicRiverCruises/scenic-luxury-river-cruise-onboard-lounge.webp";
// import ScenicBookingCTAImage from "../../assets/ScenicRiverCruises/scenic-ultra-luxury-river-cruising-expert-booking-cta.webp";

// Asset Images (Commented out)
// import HeroImage from "../../assets/ScenicFoodDining/scenic-dining-hero.jpg";
// import DiningRoomImage from "../../assets/ScenicFoodDining/scenic-crystal-dining.jpg";
// import PortobellosImage from "../../assets/ScenicFoodDining/scenic-portobellos.jpg";
// import RiverCafeImage from "../../assets/ScenicFoodDining/scenic-river-cafe.jpg";
// import WineImage from "../../assets/ScenicFoodDining/scenic-wine-pairing.jpg";
// import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com/",
      description:
        "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsandships.com/#person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/food-dining/#webpage",
      name: "Scenic River Cruise Food & Dining Review (2026) | Menus, Restaurants & Is It Worth It?",
      url: "https://www.tripsandships.com/scenic-river-cruises/food-dining",
      description:
        "Discover what dining is really like on a Scenic River Cruise. Learn about restaurants, menus, included drinks, dietary options, specialty experiences, and whether Scenic's all-inclusive dining is worth it.",
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/food-dining/#article",
      headline: "Scenic River Cruise Food and Dining Review",
      description:
        "A complete look at dining on a Scenic River Cruise, including restaurants, menus, included beverages, dietary accommodations, and how Scenic compares to other luxury river cruise lines.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/food-dining/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tripsandships.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scenic River Cruises",
          item: "https://www.tripsandships.com/scenic-river-cruises",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scenic River Cruise Food & Dining Review",
          item: "https://www.tripsandships.com/scenic-river-cruises/food-dining",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/food-dining/#itemlist",
      name: "Scenic River Cruise Food & Dining Review — What This Guide Covers",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Quick Answer" },
        { "@type": "ListItem", position: 2, name: "Overall Dining Experience" },
        { "@type": "ListItem", position: 3, name: "What Restaurants Are Onboard?" },
        { "@type": "ListItem", position: 4, name: "Breakfast, Lunch & Dinner" },
        { "@type": "ListItem", position: 5, name: "Regional Cuisine" },
        { "@type": "ListItem", position: 6, name: "Are Drinks Included?" },
        { "@type": "ListItem", position: 7, name: "Dietary Requirements" },
        { "@type": "ListItem", position: 8, name: "Service" },
        { "@type": "ListItem", position: 9, name: "How Scenic Compares to Other River Cruise Lines" },
        { "@type": "ListItem", position: 10, name: "Is Scenic Dining Worth It?" },
        { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
        { "@type": "ListItem", position: 12, name: "Final Verdict" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/scenic-river-cruises/food-dining/#faq",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ],
};

const ScenicRiverCruiseFoodDining = () => {
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
        primaryCtaLink={data.hero.primaryCtaLink}
        // backgroundImage={HeroImage}
      />

      {/* ── 2. QUICK ANSWER ── */}
      <div id="quick-answer">
        <AsymmetricStoryIntro
          eyebrow={data.quickAnswer.eyebrow}
          heading={data.quickAnswer.title}
          paragraphs={data.quickAnswer.paragraphs}
          highlights={data.quickAnswer.highlights}
          ctaText={data.quickAnswer.ctaText}
          ctaLink={data.quickAnswer.ctaLink}
          // image1={DiningRoomImage}
          // image2={PortobellosImage}
        />
      </div>

      {/* ── 3. OVERALL DINING EXPERIENCE ── */}
      <div id="overall-dining-experience">
        <EditorialIntroSection
          eyebrow={data.overallExperience.eyebrow}
          heading={data.overallExperience.title}
          paragraphs={data.overallExperience.paragraphs}
          highlights={data.overallExperience.highlights}
          badgeTitle={data.overallExperience.badgeTitle}
          badgeDescription={data.overallExperience.badgeDescription}
          // image={DiningRoomImage}
        />
      </div>

      {/* ── INLINE CTA 1 ── */}
      <CenterCTA
        title={data.inlineCta1.title}
        description={data.inlineCta1.description}
        buttonText={data.inlineCta1.buttonText}
        buttonLink={data.inlineCta1.buttonLink}
        // image={RiverCafeImage}
        theme="dark"
      />

      {/* ── 4. WHAT RESTAURANTS ARE ONBOARD? ── */}
      <div id="restaurants-onboard">
        <FeatureGrid
          title={data.restaurantsOnboard.title}
          subtitle={data.restaurantsOnboard.subtitle}
          features={data.restaurantsOnboard.features}
          bgClass="bg-white"
        />
      </div>

      {/* ── 5. BREAKFAST, LUNCH & DINNER ── */}
      <div id="breakfast-lunch-dinner">
        <ThreeColumnGrid
          title={data.mealsOfDay.title}
          subtitle={data.mealsOfDay.subtitle}
          items={data.mealsOfDay.items}
        />
      </div>

      {/* ── 6. ARE DRINKS INCLUDED? ── */}
      <div id="drinks-included">
        <InclusionsList
          title={data.drinksIncluded.title}
          inclusions={data.drinksIncluded.inclusions}
          expertNote={data.drinksIncluded.expertNote}
          // image={WineImage}
        />
      </div>

      {/* ── INLINE CTA 2 ── */}
      <CenterCTA
        title={data.inlineCta2.title}
        description={data.inlineCta2.description}
        buttonText={data.inlineCta2.buttonText}
        buttonLink={data.inlineCta2.buttonLink}
        // image={PortobellosImage}
        theme="light"
      />

      {/* ── 7. DIETARY REQUIREMENTS ── */}
      <div id="dietary-requirements">
        <AuthorityGrid
          title={data.dietaryRequirements.title}
          subtitle={data.dietaryRequirements.subtitle}
          items={data.dietaryRequirements.items}
        />
      </div>

      {/* ── 8. REGIONAL CUISINE ── */}
      <div id="regional-cuisine">
        <GenericChecklistCards
          title={data.regionalCuisine.title}
          subtitle={data.regionalCuisine.subtitle}
          cards={data.regionalCuisine.cards}
        />
      </div>

      {/* ── 9. DINING SERVICE ── */}
      <div id="dining-service">
        <EditorialFeatureShowcase
          title={data.diningService.title}
          subtitle={data.diningService.subtitle}
          // image={ScenicDiningImage}
          features={data.diningService.features}
        />
      </div>

      {/* ── 10. HOW SCENIC COMPARES TO OTHER RIVER CRUISE LINES ── */}
      <div id="dining-comparison">
        <ComparisonTable data={data.comparison} />
      </div>

      {/* ── INLINE CTA 3 ── */}
      <CenterCTA
        title={data.inlineCta3.title}
        description={data.inlineCta3.description}
        buttonText={data.inlineCta3.buttonText}
        buttonLink={data.inlineCta3.buttonLink}
        // image={HeroImage}
        theme="dark"
      />

      {/* ── 11. WHAT WE LOVED (CULINARY HIGHLIGHTS) ── */}
      <div id="what-we-loved">
        <BrandPillarsShowcase data={data.whatWeLoved} />
      </div>

      {/* ── 12. IS SCENIC DINING WORTH IT? ── */}
      <div id="is-dining-worth-it">
        <LuxuryIntroSection
          heading={data.isDiningWorthIt.title}
          description={data.isDiningWorthIt.paragraphs.join('\n\n')}
          highlights={data.isDiningWorthIt.highlights}
          // image={ScenicLoungeImage}
        />
      </div>

      {/* ── 13. WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ── */}
      <div id="why-book-through-advisor">
        <CardGrid
          title={data.whyBookAdvisor.title}
          subtitle={data.whyBookAdvisor.subtitle}
          cards={data.whyBookAdvisor.items}
          columns={4}
          stagger={true}
        />
      </div>

      {/* ── 14. ANGELA HUGHES AUTHORITY BOX ── */}
      <div id="Asc-expert-insight">
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.badge}
          authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
          authoritySubtitle={data.angelaHughes.authoritySubtitle}
          experienceBadge={data.angelaHughes.experienceBadge}
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          ctaText={data.angelaHughes.ctaText}
          ctaLink={data.angelaHughes.ctaLink}
          // image={AboutImage}
        />
      </div>

      {/* ── 15. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="Asc-faq">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know about dining before booking a Scenic River Cruise.",
            faqs: data.faqs,
          }}
        />
      </div>

      {/* ── 16. FINAL VERDICT & PLANNING ── */}
      <div id="final-verdict">
        <ExpertAuthorityChecklist
          title={data.finalVerdict.title}
          subtitle={`${data.finalVerdict.subtitle} — ${data.finalVerdict.paragraphs[0]}`}
          points={data.finalVerdict.sections[0].bullets}
        />
        <CenterCTA
          title={data.finalVerdict.title}
          description={data.finalVerdict.paragraphs[1]}
          buttonText={data.finalVerdict.ctaText}
          buttonLink={data.finalVerdict.ctaLink}
          // image={ScenicBookingCTAImage}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default ScenicRiverCruiseFoodDining;