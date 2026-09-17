import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import data from "./data.json";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import ComparisonTable from "../../components/ui/ComparisonTable";
import ElegantFleetShowcase from "../../components/ui/ElegantFleetShowcase";
import DualBrandComparisonTable from "../../components/ui/DualBrandComparisonTable";
import SimplePersonaCards from "../../components/ui/SimplePersonaCards";
import TabbedComparison from "../../components/ui/TabbedComparison";
import DestinationFlipCards from "../../components/ui/DestinationFlipCards";
import EditorialFeatureShowcase from "../../components/ui/EditorialFeatureShowcase";
import DynamicCulinaryShowcase from "../../components/ui/DynamicCulinaryShowcase";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import StepByStepGuide from "../../components/ui/StepByStepGuide";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

const SeabournShipsGuide = () => {
  return (
    <div className="w-full min-h-screen bg-white text-navy-950">
      <Helmet>
        <title>Seabourn Ships: Complete Fleet Guide & Ship Comparison</title>
        <meta name="title" content="Seabourn Ships Guide: Quest, Encore, Ovation, Venture & Pursuit" />
        <meta
          name="description"
          content="Compare Seabourn ships including Quest, Encore, Ovation, Venture and Pursuit. Explore suites, dining, amenities, expedition features, size and which Seabourn ship is best for you."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/ships/" />
        <script type="application/ld+json">{JSON.stringify(data.schemaData)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        badge={data.hero.badge}
        secondaryCtaText={data.hero.ctaText}
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Section 1: Quick Seabourn Ship Comparison Table */}
        <ComparisonTable data={data.quickCompareTable} />

        {/* Section 2: Which Seabourn Ship Is Best? (SimplePersonaCards) */}
        <SimplePersonaCards
          title={data.whichBest.title}
          subtitle={data.whichBest.subtitle}
          personas={data.whichBest.personas}
        />

        {/* Section 3: The Seabourn Fleet in Detail */}
        <ElegantFleetShowcase
          title="The Seabourn Fleet in Detail"
          subtitle="Explore each ship's story, at-a-glance specs and who it's best suited for."
          ships={data.fleet}
        />

        {/* Section 4: Seabourn Venture vs Seabourn Pursuit (Expedition Twins) */}
        <DualBrandComparisonTable
          title={data.ventureVsPursuit.title}
          subtitle={data.ventureVsPursuit.subtitle}
          headers={data.ventureVsPursuit.headers}
          rows={data.ventureVsPursuit.rows}
        />

        {/* Interlude CTA 1 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Ready to Plan Your Seabourn Voyage?"
          description="Speak with our luxury travel advisors to design your perfect itinerary across the Seabourn fleet."
          buttonText="Contact an Advisor"
          buttonLink="/contact"
        />

        {/* Section 5: Ship vs Ship Tabbed Comparisons */}
        <TabbedComparison
          title={data.tabbedComparisons.title}
          mainBrand={{ name: "Seabourn" }}
          competitors={data.tabbedComparisons.competitors}
          leftLabel="Strengths"
          rightLabel="Strengths"
        />

        {/* Section 6: Which Seabourn Ship Is Best for Your Destination? */}
        <DestinationFlipCards
          title={data.destinationShowcase.title}
          subtitle={data.destinationShowcase.subtitle}
          items={data.destinationShowcase.items}
        />

        {/* Section 7: Which Seabourn Ship Has the Best Suites? */}
        <EditorialFeatureShowcase
          title={data.suitesShowcase.title}
          subtitle={data.suitesShowcase.subtitle}
          features={data.suitesShowcase.features}
        />

        {/* Section 8: Seabourn Ships and Dining */}
        <DynamicCulinaryShowcase
          title={data.dining.title}
          subtitle={data.dining.subtitle}
          items={data.dining.items}
        />

        {/* Interlude CTA 2 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Experience Seabourn's Signature Luxury"
          description="Let Angela Hughes and our dedicated luxury cruise specialists curate your suite, dining, and shore excursions."
          buttonText="Get in Touch"
          buttonLink="/contact"
        />

        {/* Section 9: Seabourn Ships and Onboard Amenities */}
        <ThreeColumnGrid
          title={data.amenities.title}
          subtitle={data.amenities.subtitle}
          items={data.amenities.items}
        />

        {/* Section 10: Which Seabourn Ship Has the Best Atmosphere? */}
        <SimplePersonaCards
          title={data.atmosphereAwards.title}
          subtitle={data.atmosphereAwards.subtitle}
          personas={data.atmosphereAwards.personas}
        />

        {/* Section 11: Seabourn Fleet Decision Table */}
        <ComparisonTable data={data.decisionTable} />

        {/* Section 12: 7 Things to Consider Before Choosing a Seabourn Ship */}
        <StepByStepGuide
          title={data.considerSteps.title}
          subtitle={data.considerSteps.subtitle}
          steps={data.considerSteps.steps}
        />

        {/* Interlude CTA 3 (Every 4 sections) */}
        <CenterCTA
          theme="dark"
          title="Start Your Seabourn Journey"
          description="Receive personalized recommendations, VIP amenities, and expert ship selection guidance."
          buttonText="Request a Consultation"
          buttonLink="/contact"
        />

        {/* Section 13: Angela Hughes Authority Box & Credentials */}
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.badge}
          experienceBadge={data.angelaHughes.experienceBadge}
          authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
          authoritySubtitle={data.angelaHughes.authoritySubtitle}
          paragraphs={data.angelaHughes.paragraphs}
          credentials={data.angelaHughes.credentials}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          image={AboutImage}
          ctaText={data.angelaHughes.ctaText}
          ctaLink="/contact"
        />

        {/* Section 14: Frequently Asked Questions */}
        <FAQAccordion data={data.faq} />

        {/* Section 15: Our Seabourn Ship Verdict */}
        <ConclusionSection sections={data.verdict.sections} />

        {/* Final CTA */}
        <CenterCTA
          theme="light"
          title="Start Planning Your Seabourn Cruise"
          description="Choose the Seabourn itinerary first, then choose the ship and suite that make that itinerary exceptional."
          buttonText="Plan Your Cruise With Angela"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default SeabournShipsGuide;