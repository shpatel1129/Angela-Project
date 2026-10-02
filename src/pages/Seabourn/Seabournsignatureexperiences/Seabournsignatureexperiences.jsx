import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";
import AboutImage from "../../../assets/AboutAngela3.jpeg";

// Page Asset Images from SeabournSignatureExperiences (SEO-Optimized)
import heroImg from "../../../assets/Seabourn/SeabournSignatureExperiences/seabourn-signature-experiences-luxury-moments-hero.jpg";
import editorialImg from "../../../assets/Seabourn/SeabournSignatureExperiences/seabourn-signature-experiences-at-a-glance-editorial.jpg";
import midCtaImg from "../../../assets/Seabourn/SeabournSignatureExperiences/build-a-seabourn-voyage-around-your-favorite-signature-experience.jpg";
import brandPhilosophyImg from "../../../assets/Seabourn/SeabournSignatureExperiences/discerning-travelers-seeking-genuine-destination-immersion-seabourn-philosophy.jpg";
import finalCtaImg from "../../../assets/Seabourn/SeabournSignatureExperiences/ready-to-experience-seabourn-signature-luxury-moments-cta.jpg";

// UI Components
import ComparisonHero from "../../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import CardGrid from "../../../components/ui/CardGrid";
import TravelerTypeGrid from "../../../components/ui/TravelerTypeGrid";
import CostValueAnalysisCards from "../../../components/ui/CostValueAnalysisCards";
import StepByStepGuide from "../../../components/ui/StepByStepGuide";
import HighlightsSplit from "../../../components/ui/HighlightsSplit";
import BrandShowcase from "../../../components/ui/BrandShowcase";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import ConclusionSection from "../../../components/ui/ConclusionSection";
import CenterCTA from "../../../components/ui/CenterCTA";
import VideoEmbed from "../../../components/ui/VideoEmbed";

// Data Source
import data from "./data.json";

/* ── Personas for Traveler Type Grid ────────────────────────────── */
const travelerTypeItems = data.personasCards;

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/",
      "name": "Seabourn Signature Experiences: Caviar, Marina Day & More",
      "headline": "Seabourn Signature Experiences: The Luxury Moments That Set Seabourn Apart",
      "description":
        "Discover Seabourn signature experiences including Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#experiences"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Cruises", "item": "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Signature Experiences", "item": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#experiences",
      "name": "Seabourn Signature Experiences",
      "description":
        "Distinctive Seabourn experiences including Caviar in the Surf, Marina Day, Caviar on the Ice and Evening at Ephesus.",
      "numberOfItems": 4,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Caviar in the Surf", "description": "A Seabourn signature experience combining caviar and Champagne with a relaxed beach setting on applicable itineraries." },
        { "@type": "ListItem", "position": 2, "name": "Marina Day", "description": "A water-focused Seabourn experience using the ship's marina platform for activities such as swimming, kayaking and paddleboarding when conditions permit." },
        { "@type": "ListItem", "position": 3, "name": "Caviar on the Ice", "description": "A Seabourn caviar experience associated with expedition and polar environments, combining luxury hospitality with icy surroundings." },
        { "@type": "ListItem", "position": 4, "name": "Evening at Ephesus", "description": "A special Seabourn destination experience centered on the ancient archaeological site of Ephesus in an evening setting." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/signature-experiences/#faq",
      "mainEntity": data.faqs.map((faq) => ({
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

const SeabournSignatureExperiences = () => {
  const signatureExperiencesVideoData = {
    youtubeId: "ev3IBDUKWIU",
    title: "Seabourn Signature Experiences: Luxury Moments Unveiled",
    description: "Explore the iconic signature moments that define Seabourn cruising—from Caviar in the Surf and Watersports Marina Days to Evening at Ephesus."
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-gold-500 selection:text-white">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO ── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.paragraphs[0]}
        backgroundImage={heroImg}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaLink={data.hero.primaryCtaLink}
        secondaryCtaText="Explore Signature Moments"
        secondaryCtaLink="/contact"
      />

      {/* ── 2. EDITORIAL INTRO: AT A GLANCE ── */}
      <EditorialIntroSection
        eyebrow={data.editorialIntro.eyebrow}
        heading={data.editorialIntro.heading}
        paragraphs={data.editorialIntro.paragraphs}
        image={editorialImg}
        placeholderLabel={data.editorialIntro.placeholderLabel}
        badgeTitle={data.editorialIntro.badgeTitle}
        badgeDescription={data.editorialIntro.badgeDescription}
        highlights={data.editorialIntro.highlights}
      />

      {/* ── 3. AT A GLANCE COMPARISON TABLE ── */}
      <ComparisonTable
        data={data.glanceTable}
      />

      {/* ── 4. SIGNATURE EXPERIENCES IN DETAIL (4 CARDS) ── */}
      <div id="signature-details">
        <GenericChecklistCards
          title={data.signatureExperiencesCards.title}
          subtitle={data.signatureExperiencesCards.subtitle}
          cards={data.signatureExperiencesCards.cards}
        />
      </div>

      {/* ── 5. SIGNATURE EXPERIENCES VS TRADITIONAL EXCURSIONS ── */}
      <ComparisonTable
        data={data.compareExcursionsTable}
      />

      {/* ── 6. MATCH IT TO YOUR TRAVEL STYLE (4 CARDS) ── */}
      <div className="py-8 bg-white">
        <CardGrid
          title="Which Seabourn Signature Experience Is Best?"
          subtitle="There isn't one universal answer—it depends on your personal travel style and priorities."
          cards={data.bestForCards}
          columns={4}
        />
      </div>

      {/* ── CTA 1: MID-PAGE SPECIALIST PLANNING ── */}
      <CenterCTA
        title={data.ctas.midCta.title}
        description={data.ctas.midCta.description}
        buttonText={data.ctas.midCta.buttonText}
        buttonLink={data.ctas.midCta.buttonLink}
        image={midCtaImg}
        theme="dark"
      />

      {/* ── 7. SIGNATURE EXPERIENCES BY TRAVEL STYLE (TRAVELER TYPE GRID WITH IMAGES) ── */}
      <TravelerTypeGrid
        title="Seabourn Signature Experiences by Travel Style"
        subtitle="Discover how signature moments elevate voyages for couples, history lovers, and adventure seekers."
        items={travelerTypeItems}
      />

      {/* ── 8. INCLUDED & GUARANTEED ANALYSIS ── */}
      <CostValueAnalysisCards
        title={data.includedAndGuaranteed.title}
        subtitle={data.includedAndGuaranteed.subtitle}
        includedTitle={data.includedAndGuaranteed.includedTitle}
        included={data.includedAndGuaranteed.included}
        extrasTitle={data.includedAndGuaranteed.extrasTitle}
        extras={data.includedAndGuaranteed.extras}
      />

      {/* ── Mid-Page Video Spotlight (Seabourn Signature Experiences) ── */}
      <VideoEmbed data={signatureExperiencesVideoData} />

      {/* ── 9. HOW TO PLAN AROUND SIGNATURE EXPERIENCES (5 STEPS) ── */}
      <StepByStepGuide
        title="How to Plan Around Seabourn Signature Experiences"
        subtitle="TIMING & ITINERARY STRATEGY"
        steps={data.planSteps}
      />

      {/* ── 10. TIPS FOR GETTING THE MOST (HIGHLIGHTS SPLIT) ── */}
      <HighlightsSplit
        title={data.tips.title}
        items={data.tips.items}
      />

      {/* ── 11. SIGNATURE EXPERIENCES & BROADER LUXURY PHILOSOPHY ── */}
      <BrandShowcase
        brand={{
          ...data.brandPhilosophy,
          image: brandPhilosophyImg
        }}
        index={0}
      />

      {/* ── 12. PROS AND CONSIDERATIONS ── */}
      <ProsConsCards
        title={data.prosCons.title}
        prosTitle={data.prosCons.prosTitle}
        consTitle={data.prosCons.consTitle}
        bestFor={data.prosCons.bestFor}
        notBestFor={data.prosCons.notBestFor}
        bottomNote={data.prosCons.bottomNote}
        bgClass="bg-slate-50"
      />

      {/* ── 13. ANGELA HUGHES AUTHORITY & CREDENTIALS ── */}
      <ExpertCredentials
        name={data.angelaHughes.name}
        title={data.angelaHughes.title}
        badge={data.angelaHughes.badge}
        authorityBoxTitle={data.angelaHughes.authorityBoxTitle}
        authoritySubtitle={data.angelaHughes.authoritySubtitle}
        experienceBadge={data.angelaHughes.experienceBadge}
        image={AboutImage}
        paragraphs={data.angelaHughes.paragraphs}
        credentials={data.angelaHughes.credentials}
        quote={data.angelaHughes.quote}
        quoteSubtitle={data.angelaHughes.quoteSubtitle}
        ctaText={data.angelaHughes.ctaText}
        ctaLink={data.angelaHughes.ctaLink}
      />

      {/* ── 14. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <div id="faq" className="py-12 bg-white">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything travelers need to know about Seabourn Signature Experiences.",
            items: data.faqs
          }}
        />
      </div>

      {/* ── 15. FINAL CONCLUSION ── */}
      <ConclusionSection
        sections={[data.finalVerdict]}
      />

      {/* ── 16. FINAL CTA ── */}
      <CenterCTA
        title={data.ctas.finalCta.title}
        description={data.ctas.finalCta.description}
        buttonText={data.ctas.finalCta.buttonText}
        buttonLink={data.ctas.finalCta.buttonLink}
        image={finalCtaImg}
        theme="dark"
      />
    </div>
  );
};

export default SeabournSignatureExperiences;