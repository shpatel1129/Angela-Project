import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import CardGrid from "../../../components/ui/CardGrid";
import CenterCTA from "../../../components/ui/CenterCTA";
import ThreeColumnGrid from "../../../components/ui/ThreeColumnGrid";
import TravelerProfileTabs from "../../../components/ui/TravelerProfileTabs";
import InclusionsList from "../../../components/ui/InclusionsList";
import ExpertRulesGrid from "../../../components/ui/ExpertRulesGrid";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import AuthorityGrid from "../../../components/ui/AuthorityGrid";
import DetailedInclusionsList from "../../../components/ui/DetailedInclusionsList";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import MistakesGrid from "../../../components/ui/MistakesGrid";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ValueShowcase from "../../../components/ui/ValueShowcase";

// Image imports commented out per request
/*
import AboutImage from "../../../assets/AboutAngela3.jpeg";
// import HeroImage from "../../../assets/ScenicRiverCruises/ScenicDouro/hero.jpg";
// import FinalImage from "../../../assets/ScenicRiverCruises/ScenicDouro/final.jpg";
*/

const ScenicDouroRiverCruises = () => {
  // 1. Destination cards for CardGrid
  const destIconNames = ["Compass", "Wine", "Landmark", "Building2", "Sparkles", "Home", "Ship", "MapPin"];
  const destinationCards = data.destinations.items.map((dest, idx) => ({
    title: dest.title,
    description: dest.items[0],
    bullets: dest.items,
    icon: destIconNames[idx % destIconNames.length]
  }));

  // 2. Best time to cruise seasons for ThreeColumnGrid
  const seasonItems = data.bestTimeToCruise.items.map((item) => ({
    category: item.eyebrow,
    title: item.title,
    description: item.intro,
    features: item.items,
    bullets: item.items,
    highlight: item.outro
  }));

  // 3. Best itineraries tabs for TravelerProfileTabs
  const itineraryTabs = data.bestItineraries.items.map((item) => ({
    name: item.title,
    tagline: item.badge,
    quote: item.desc,
    recommendation: item.badge,
    reason: item.desc,
    whyFits: item.columns?.[0]?.items || []
  }));

  // 4. Excursions rules for ExpertRulesGrid
  const excursionRules = data.excursions.items.map((item, idx) => ({
    number: `0${idx + 1}`,
    title: item.title,
    description: item.desc
  }));

  // 5. Cabins & Butler data for CabinFeatureGrid
  const cabinsAndButlerData = {
    title: "Cabins & Butler Service on Douro Cruises",
    subtitle: "Luxury All-Weather Sun Lounges & Dedicated Butler Attention",
    oceanview: {
      title: data.cabinsAndButler.cabins.title,
      bestFor: `${data.cabinsAndButler.cabins.text} ${data.cabinsAndButler.cabins.outro}`,
      advantages: data.cabinsAndButler.cabins.features,
      linkText: "Explore Douro Cabins",
      linkUrl: "/contact"
    },
    balcony: {
      title: data.cabinsAndButler.butler.title,
      bestFor: `${data.cabinsAndButler.butler.text} ${data.cabinsAndButler.butler.outro}`,
      advantages: data.cabinsAndButler.butler.features,
      linkText: "Inquire About Butler Service",
      linkUrl: "/contact"
    }
  };

  // 6. Food & Port Wine Heritage cards for GenericChecklistCards
  const foodAndHistoryCards = [
    {
      title: data.diningAndHistory.foodAndWine.title,
      items: [
        data.diningAndHistory.foodAndWine.lead,
        data.diningAndHistory.foodAndWine.text,
        ...data.diningAndHistory.foodAndWine.features,
        data.diningAndHistory.foodAndWine.outro
      ]
    },
    {
      title: data.diningAndHistory.historyAndArchitecture.title,
      items: [
        data.diningAndHistory.historyAndArchitecture.lead,
        data.diningAndHistory.historyAndArchitecture.text,
        ...data.diningAndHistory.historyAndArchitecture.features,
        data.diningAndHistory.historyAndArchitecture.outro
      ]
    }
  ];

  // 7. Wine Lovers & Sun Lounge cards for GenericChecklistCards
  const wineAndSunLoungeCards = [
    {
      title: data.wineAndSunLounge.wineLovers.title,
      items: [
        data.wineAndSunLounge.wineLovers.lead,
        data.wineAndSunLounge.wineLovers.desc,
        data.wineAndSunLounge.wineLovers.callout,
        `${data.wineAndSunLounge.wineLovers.contextTitle} ${data.wineAndSunLounge.wineLovers.pathway.join(" → ")}`,
        data.wineAndSunLounge.wineLovers.outro
      ]
    },
    {
      title: data.wineAndSunLounge.sunLounge.title,
      items: [
        data.wineAndSunLounge.sunLounge.lead,
        data.wineAndSunLounge.sunLounge.listTitle,
        ...data.wineAndSunLounge.sunLounge.features,
        data.wineAndSunLounge.sunLounge.desc,
        data.wineAndSunLounge.sunLounge.outro
      ]
    }
  ];

  // 8. Families & Couples data for DualPhilosophyShowcase
  const familiesAndCouplesData = {
    title: "Scenic Douro for Families & Couples",
    subtitle: "Multigenerational Exploration & Romantic Portuguese Wine Cruises",
    sailing: {
      label: data.familiesAndCouples.families.title,
      philosophy: data.familiesAndCouples.families.intro,
      points: data.familiesAndCouples.families.generations.map(
        (g) => `${g.role} ${g.features.join(", ")}`
      ),
      quote: data.familiesAndCouples.families.quote
    },
    allSuite: {
      label: data.familiesAndCouples.couples.title,
      philosophy: data.familiesAndCouples.couples.intro,
      points: data.familiesAndCouples.couples.features,
      quote: data.familiesAndCouples.couples.quote
    }
  };

  // 9. Cost factors for AuthorityGrid
  const costItems = data.cost.factors.map((factor) => ({
    title: factor.split(" (")[0],
    description: factor
  }));

  // 10. Detailed Inclusions cards for DetailedInclusionsList
  const detailedInclusionsCards = [
    {
      title: "All-Inclusive Luxury Amenities",
      paragraphs: [
        data.whatsIncluded.intro,
        data.whatsIncluded.sectionIntro,
        data.whatsIncluded.highlightDesc
      ],
      lists: [
        {
          title: "Included Scenic Douro Inclusions:",
          items: data.whatsIncluded.items
        }
      ]
    }
  ];

  // 11. Comparison Table data
  const comparisonTableData = {
    title: data.comparison.title,
    headers: ["Cruise Line", "Particularly Appealing For"],
    rows: (data.comparison.table
      ? data.comparison.table.map((row) => [row.line, row.appeal])
      : (data.comparison.rows || []).map((row) =>
          Array.isArray(row) ? row : [row.scenic || row.line || "", row.ocean || row.appeal || ""]
        ))
  };

  // 12. Mistakes grid items
  const mistakeItems = data.mistakes.items.map((desc, idx) => ({
    number: `0${idx + 1}`,
    title: desc.split(" without ")[0].split(" during ")[0].split(" relative ")[0].split(" instead of ")[0],
    description: desc
  }));

  // 13. Advisor benefits cards for CardGrid
  const advisorIconNames = ["Plane", "Home", "Ship", "MapPin", "Compass", "Calendar", "ShieldCheck", "Sparkles"];
  const advisorCards = data.whyBookAdvisor.benefits.map((b, idx) => ({
    title: b.label,
    description: `Personalized assistance coordinating ${b.label.toLowerCase()} for your Scenic Douro cruise.`,
    icon: advisorIconNames[idx % advisorIconNames.length]
  }));

  // 14. FAQ questions
  const formattedFaq = {
    title: data.faq.title,
    subtitle: data.faq.intro,
    questions: data.faq.items.map((item) => ({
      question: item.q,
      answer: item.a
    }))
  };

  // 15. Credentials formatted as strings for ExpertCredentials
  const credentialsList = data.credentials.items.map((item) =>
    typeof item === "string" ? item : item.label
  );

  // 16. Value Showcase items
  const valueShowcaseItems = [
    {
      title: data.finalVerdict.title,
      description: `${data.finalVerdict.intro} ${data.finalVerdict.extendedText}`,
      imageCaption: "Douro Wine Country in Scenic Luxury",
      features: data.finalVerdict.services
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-navy-950 overflow-hidden">
      {/* ── SEO Head ── */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.metaDescription} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(data.meta.schema)}
        </script>
      </Helmet>

      {/* ── Navigation ── */}
      <Nav />

      {/* ── 1. Hero ── */}
      <ComparisonHero
        badge="SCENIC LUXURY CRUISE TOURS"
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={`${data.hero.intro} ${data.hero.extendedText}`}
        primaryCtaText={data.hero.ctaText}
        primaryCtaLink={data.hero.ctaLink}
      />

      {/* ── 2. Quick Answer ── */}
      <AsymmetricStoryIntro
        eyebrow={data.quickAnswer.eyebrow}
        title={data.quickAnswer.title}
        paragraphs={[data.quickAnswer.intro, data.quickAnswer.outro]}
        highlights={data.quickAnswer.emphasis}
        imageAlt1="Scenic Douro Wine Country"
        imageAlt2="Porto Historic Harbor"
      />

      {/* ── 3. Why Choose ── */}
      <EditorialIntroSection
        eyebrow={data.whyChoose.eyebrow}
        title={data.whyChoose.title}
        paragraphs={[data.whyChoose.intro, data.whyChoose.callout]}
        highlights={data.whyChoose.features}
        placeholderLabel={data.whyChoose.imageLabel}
      />

      {/* ── 4. Where Do Scenic Douro Cruises Go? ── */}
      <CardGrid
        title={data.destinations.title}
        subtitle={data.destinations.intro}
        cards={destinationCards}
        columns={4}
        stagger={false}
      />

      {/* ── 5. Inline CTA 1 ── */}
      <CenterCTA
        title={data.cta1.title}
        description={data.cta1.text}
        buttonText={data.cta1.buttonText}
        buttonLink={data.cta1.link}
        theme="dark"
      />

      {/* ── 6. Best Time to Cruise ── */}
      <ThreeColumnGrid
        title={data.bestTimeToCruise.title}
        subtitle={data.bestTimeToCruise.intro}
        items={seasonItems}
      />

      {/* ── 7. Best Itineraries ── */}
      <TravelerProfileTabs
        title={data.bestItineraries.title}
        subtitle={data.bestItineraries.intro}
        profiles={itineraryTabs}
      />

      {/* ── 8. First-Time River Cruisers ── */}
      <InclusionsList
        title={data.firstTimeCruisers.title}
        expertNote={`${data.firstTimeCruisers.intro} ${data.firstTimeCruisers.footerCallout} ${data.firstTimeCruisers.outro}`}
        inclusions={data.firstTimeCruisers.steps.map(
          (step) => `${step.num}. ${step.title}  ${step.subtitle}`
        )}
      />

      {/* ── 9. Excursions ── */}
      <ExpertRulesGrid
        title={data.excursions.title}
        subtitle={data.excursions.intro}
        rules={excursionRules}
      />

      {/* ── 10. Inline CTA 2 ── */}
      <CenterCTA
        title={data.cta2.title}
        description={data.cta2.text}
        buttonText={data.cta2.buttonText}
        buttonLink={data.cta2.link}
        theme="dark"
      />

      {/* ── 11. Cabins & Butler Service ── */}
      <CabinFeatureGrid
        data={cabinsAndButlerData}
      />

      {/* ── 12. Food & Port Wine Heritage ── */}
      <GenericChecklistCards
        title="Douro Gastronomy & Port Wine Heritage"
        subtitle="Regional Portuguese Cuisine & Ancient Terraced Estates"
        cards={foodAndHistoryCards}
      />

      {/* ── 13. Wine Lovers & Scenic Sun Lounge ── */}
      <GenericChecklistCards
        title="Scenic Douro for Wine Lovers & Sun Lounge Relaxation"
        subtitle="Terroir Exploration & Private Balcony Views"
        cards={wineAndSunLoungeCards}
      />

      {/* ── 14. Families & Couples Section ── */}
      <DualPhilosophyShowcase
        data={familiesAndCouplesData}
      />

      {/* ── 15. Cost Factors ── */}
      <AuthorityGrid
        title={data.cost.title}
        subtitle={`${data.cost.intro} ${data.cost.calloutText} ${data.cost.tip}`}
        items={costItems}
      />

      {/* ── 16. Inline CTA 3 ── */}
      <CenterCTA
        title={data.cta3.title}
        description={data.cta3.text}
        buttonText={data.cta3.buttonText}
        buttonLink={data.cta3.link}
        theme="dark"
      />

      {/* ── 17. What's Included ── */}
      <DetailedInclusionsList
        title={data.whatsIncluded.title}
        intro={[
          data.whatsIncluded.intro,
          data.whatsIncluded.sectionIntro,
          data.whatsIncluded.highlightDesc
        ]}
        items={detailedInclusionsCards}
      />

      {/* ── 18. Comparison Table ── */}
      <ComparisonTable
        data={comparisonTableData}
      />

      {/* ── 19. Common Booking Mistakes ── */}
      <MistakesGrid
        title={data.mistakes.title}
        items={mistakeItems}
      />

      {/* ── 20. Cruise Duration ── */}
      <ProsConsCards
        title={data.duration.title}
        prosTitle={data.duration.before.title}
        consTitle={data.duration.after.title}
        bestFor={data.duration.before.items}
        notBestFor={data.duration.after.items}
        bottomNote={`${data.duration.lead} ${data.duration.tip}`}
        type="compare"
      />

      {/* ── 21. Why Book Through a Luxury Travel Advisor? ── */}
      <CardGrid
        title={data.whyBookAdvisor.title}
        subtitle={`${data.whyBookAdvisor.leftTitle}: ${data.whyBookAdvisor.leftBody} ${data.whyBookAdvisor.alertText}`}
        cards={advisorCards}
        columns={4}
        stagger={false}
      />

      {/* ── 22. Angela Hughes Authority / Credentials ── */}
      <ExpertCredentials
        badge="LUXURY TRAVEL SPECIALIST"
        name={data.credentials.name}
        title={`${data.credentials.role} • ${data.credentials.countries}`}
        authorityBoxTitle="ANGELA HUGHES INSIGHTS & LEADERSHIP"
        authoritySubtitle="Scenic Luxury European River Cruise Specialist"
        experienceBadge="40+ YEARS EXPERTISE"
        bio="Angela Hughes has explored over 121 countries and spent more than four decades designing luxury European river cruises and bespoke itineraries for discerning travelers."
        credentials={credentialsList}
        quote="The Douro is one of Europe's most rewarding river cruises because the journey is less about collecting cities and more about slowing down to experience dramatic terraced vineyards, historic wine estates, and Portugal's authentic regional culture."
        quoteSubtitle="On Douro River Cruising"
        ctaText="Plan with Angela"
        ctaLink="/contact"
      />

      {/* ── 23. Frequently Asked Questions ── */}
      <FAQAccordion
        data={formattedFaq}
      />

      {/* ── 24. Final Verdict / Value Showcase ── */}
      <ValueShowcase
        title="Final Verdict: Douro Wine Country in Scenic Luxury"
        subtitle="Exclusive Scenic Space-Ship Luxury & VIP Planning"
        items={valueShowcaseItems}
      />

      {/* ── 25. Concluding CTA ── */}
      <CenterCTA
        title={data.closingCta.title}
        description={data.closingCta.subtitle}
        buttonText={data.closingCta.buttonText}
        buttonLink={data.closingCta.link}
        theme="dark"
      />
    </div>
  );
};

export default ScenicDouroRiverCruises;