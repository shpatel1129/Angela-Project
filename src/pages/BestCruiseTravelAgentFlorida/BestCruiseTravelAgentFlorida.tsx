import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  Award, 
  Compass, 
  Globe, 
  Ship, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Calendar, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight,
  UserCheck,
  Palmtree,
  Mountain,
  Anchor,
  HeartHandshake,
  Navigation,
  CheckCircle,
  Clock,
  Briefcase,
  Users,
  Compass as CompassIcon,
  Waves
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Page Data JSON
import pageData from './data.json';
import Nav from "@/components/Navbar/Nav";

// Shared Components & UI System
import ComparisonHero from '@/components/ui/ComparisonHero';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import CenterCTA from '@/components/ui/CenterCTA';
import InteractivePillarHubGrid from '@/components/ui/InteractivePillarHubGrid';
import FadeIn from '@/components/ui/FadeIn';

// Assets (kept exclusively for Authority & Why Trips & Ships Stands Out sections)
import AboutImage from "../../assets/AboutAngela.jpeg";
import AboutImage2 from "../../assets/AboutAngela2.jpeg";

const BestCruiseTravelAgentFlorida = () => {
  // Map 6 Destinations to InteractivePillarHubGrid items with clean placeholders
  const destinationHubItems = pageData.destinations.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    image: null,
    placeholderLabel: `${item.title.toUpperCase()} — TRIPS & SHIPS`,
    actionLabel: "Explore Region",
    links: [
      { label: `Learn more about ${item.title}`, url: item.link },
      { label: "Request a Custom Cruise Itinerary", url: "/contact" }
    ],
    mainUrl: item.link
  }));

  // Map 6 Factors to ThreeColumnGrid items with placeholders
  const whatMakesBestItems = pageData.whatMakesBest.factors.map((factor) => ({
    title: factor.title,
    description: `${factor.question} ${factor.description}`,
    image: null,
    placeholderLabel: factor.title
  }));

  // FAQ data formatted for FAQAccordion
  const faqData = {
    title: pageData.faqs.title,
    questions: pageData.faqs.items.map((faq) => faq.question),
    answers: pageData.faqs.items.map((faq) => faq.answer)
  };

  // Complete JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travel-agency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel agency specializing in luxury cruises, river cruises, small-ship cruising, expedition voyages, custom safaris and personalized international travel.",
        "foundingDate": "1995",
        "areaServed": {
          "@type": "State",
          "name": "Florida"
        },
        "knowsAbout": [
          "Luxury Cruises",
          "River Cruises",
          "Small Ship Cruises",
          "Expedition Cruises",
          "World Cruises",
          "Custom Safaris",
          "Luxury Travel Planning"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#travel-agency"
        },
        "knowsAbout": [
          "Luxury Cruises",
          "Small Ship Cruises",
          "River Cruises",
          "Expedition Cruises",
          "World Cruises",
          "Luxury Travel"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida#webpage",
        "url": "https://www.tripsandships.com/best-cruise-travel-agent-florida",
        "name": "Who Is the Best Cruise Travel Agent in Florida?",
        "headline": "Who Is the Best Cruise Travel Agent in Florida?",
        "description": "Discover what makes a great cruise travel agent and why experienced Florida cruise advisors can help travelers plan luxury cruises, expedition voyages and personalized cruise vacations.",
        "about": {
          "@id": "https://www.tripsandships.com/#travel-agency"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida#breadcrumb",
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
            "name": "Best Cruise Travel Agent in Florida",
            "item": "https://www.tripsandships.com/best-cruise-travel-agent-florida"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/best-cruise-travel-agent-florida#faq",
        "mainEntity": pageData.faqs.items.map((faq) => ({
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
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords.join(', ')} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/best-cruise-travel-agent-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/best-cruise-travel-agent-florida" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
      />

      {/* ─── 2. QUICK ANSWER & DIRECT CRUISE ADVISOR RECOMMENDATION ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-200/90 relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                  <Sparkles className="w-4 h-4 text-blue-600" /> Direct Answer & Cruise Specialist Recommendation
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Florida Luxury Cruise Specialist
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6 leading-tight">
                {pageData.quickAnswer.title}
              </h2>

              <p className="font-serif text-xl md:text-2xl text-blue-950 italic leading-relaxed mb-6 bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-600">
                "{pageData.quickAnswer.lead}"
              </p>

              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
                {pageData.quickAnswer.body}
              </p>

              {/* Checklist Grid */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 mb-10">
                <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-600" /> {pageData.quickAnswer.checklistTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {pageData.quickAnswer.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs hover:border-blue-300 transition-colors">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Callout & Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <p className="text-base md:text-lg font-medium text-navy-950 max-w-2xl">
                  {pageData.quickAnswer.closing}
                </p>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy-950 hover:bg-blue-900 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    Plan My Luxury Cruise <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3. WHAT MAKES A CRUISE TRAVEL AGENT THE BEST (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesBest.title}
        subtitle={pageData.whatMakesBest.subtitle}
        items={whatMakesBestItems}
      />

      {/* ─── 4. WHY CHOOSE TRIPS & SHIPS FOR CRUISE TRAVEL PLANNING ─── */}
      <section className="py-28 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3 block flex items-center gap-2">
                <Ship className="w-4 h-4 text-blue-400" /> Maritime Distinction & End-to-End Planning
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white">
                {pageData.whyTripsAndShips.title}
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full" />
              <p className="text-xl text-blue-100 font-light leading-relaxed mb-6">
                {pageData.whyTripsAndShips.subtitle}
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-4 text-base md:text-lg">
                {pageData.whyTripsAndShips.body1}
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-8 text-base md:text-lg">
                {pageData.whyTripsAndShips.body2}
              </p>

              {/* Coordinated Components */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-4">
                  A Complete Connected Journey Includes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                  {pageData.whyTripsAndShips.components.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Best Cruise Travel Agent in Florida"
                  className="w-full h-[580px] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-300 block mb-2">
                    Cruise Industry Leadership
                  </span>
                  <h4 className="text-3xl font-serif">Angela Hughes, CTC</h4>
                  <p className="text-sm text-slate-300 mt-2 font-light">
                    CEO, Trips & Ships Luxury Travel | Luxury Cruise Specialist
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 5. ANGELA HUGHES AUTHORITY BOX ─── */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={pageData.authorityBox.bio}
        image={AboutImage2}
      />

      {/* ─── 6. LUXURY CRUISE PLANNING DIMENSIONS (Style & Ship Size) ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Beyond Just Finding a Cabin
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.cruisePlanningDimensions.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed">
              {pageData.cruisePlanningDimensions.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Travel Styles */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span>{pageData.cruisePlanningDimensions.styles.title}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    {pageData.cruisePlanningDimensions.styles.items.map((style, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                        <span className="font-medium">{style}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Ship Sizes */}
            <FadeIn delay={0.2}>
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Ship className="w-5 h-5" />
                    </div>
                    <span>{pageData.cruisePlanningDimensions.shipSizes.title}</span>
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-6">
                    {pageData.cruisePlanningDimensions.shipSizes.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 text-xs text-blue-300 font-mono">
                  Small-Ship (Under 300 Guests) vs. Luxury Mid-Ship (600–1,200 Guests)
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 7. CHOOSING THE RIGHT CRUISE LINE ─── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Personality & Culture Alignment
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.cruiseLineSelection.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed">
              {pageData.cruiseLineSelection.subtitle}
            </p>
          </FadeIn>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 mb-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {pageData.cruiseLineSelection.emphasisPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-800">{pt}</span>
                </div>
              ))}
            </div>
            <p className="text-base text-slate-600 font-light leading-relaxed text-center max-w-3xl mx-auto">
              {pageData.cruiseLineSelection.body}
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. CHOOSING THE RIGHT SHIP & CABIN ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Choosing the Right Ship */}
            <FadeIn direction="right">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                  Vessel Architecture
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-light text-navy-950 mb-4">
                  {pageData.shipSelection.title}
                </h3>
                <p className="text-slate-600 font-light text-sm md:text-base mb-6">
                  {pageData.shipSelection.subtitle}
                </p>
                <div className="space-y-3.5">
                  {pageData.shipSelection.questions.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                      <h4 className="font-semibold text-navy-950 text-sm mb-1">{item.q}</h4>
                      <p className="text-xs text-slate-600 font-light">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Choosing the Right Cabin */}
            <FadeIn direction="left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                  Stateroom & Hull Strategy
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-light text-navy-950 mb-4">
                  {pageData.cabinSelection.title}
                </h3>
                <p className="text-slate-600 font-light text-sm md:text-base mb-6">
                  {pageData.cabinSelection.subtitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pageData.cabinSelection.checklist.map((chk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 9. WORLDWIDE DESTINATIONS (Interactive Pillar Hub Grid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title={pageData.destinations.title}
          subtitle={pageData.destinations.subtitle}
          items={destinationHubItems}
          variant="destination"
        />
      </div>

      {/* ─── 10. EXPEDITION & SMALL-SHIP EXPERTISE ─── */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3 block">
              Extreme & Secluded Navigation
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
              {pageData.expeditionExpertise.title}
            </h2>
            <p className="text-slate-300 font-light text-lg md:text-xl leading-relaxed">
              {pageData.expeditionExpertise.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <FadeIn direction="right" className="lg:col-span-6">
              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-6">
                {pageData.expeditionExpertise.description}
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block mb-2">
                  Specialist Certification
                </span>
                <p className="text-sm text-slate-200 italic">
                  "For travelers considering an expedition journey, the advisor's role extends well beyond booking the cabin—it governs safety, polar permits, and Zodiac execution."
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pageData.expeditionExpertise.elements.map((el, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs md:text-sm text-slate-200 flex items-center gap-3">
                    <Mountain className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{el}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 11. IS IT WORTH USING A CRUISE TRAVEL AGENT & DOES IT COST MORE? ─── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Value & Advisory Economics
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.isItWorthIt.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed">
              {pageData.isItWorthIt.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {pageData.isItWorthIt.reasons.map((reason, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex items-start gap-3 h-full">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span className="text-sm font-medium text-slate-800">{reason}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Cost Question Callout */}
          <FadeIn>
            <div className="bg-blue-50/70 border border-blue-200 rounded-3xl p-8 md:p-12 text-slate-800">
              <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
                {pageData.costQuestion.title}
              </h3>
              <p className="text-base text-slate-700 font-light leading-relaxed mb-4">
                {pageData.costQuestion.body1}
              </p>
              <p className="text-base text-slate-700 font-light leading-relaxed mb-6">
                {pageData.costQuestion.body2}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-blue-200 text-xs font-semibold text-blue-900">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> {pageData.costQuestion.advice}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 12. HOW TO CHOOSE THE BEST CRUISE TRAVEL AGENT IN FLORIDA (7 Questions) ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Advisor Evaluation Guide
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.howToChoose.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl max-w-2xl mx-auto">
              {pageData.howToChoose.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageData.howToChoose.questions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs flex items-start gap-5 hover:shadow-md transition-shadow h-full">
                  <div className="font-mono text-sm font-bold text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl flex-shrink-0 border border-blue-100">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-navy-950 mb-2">{item.q}</h4>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 13. CRUISE PLANNING FOR COUPLES, FAMILIES & MULTIGENERATIONAL ─── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Tailored Group Dynamics
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.travelerTypes.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed">
              {pageData.travelerTypes.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Couples */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-navy-950 mb-4 flex items-center gap-2.5">
                    <HeartHandshake className="w-5 h-5 text-rose-600" />
                    <span>{pageData.travelerTypes.couples.title}</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    {pageData.travelerTypes.couples.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Families */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-navy-950 mb-4 flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{pageData.travelerTypes.families.title}</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    {pageData.travelerTypes.families.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Multigenerational */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-navy-950 mb-4 flex items-center gap-2.5">
                    <Globe className="w-5 h-5 text-amber-600" />
                    <span>{pageData.travelerTypes.multigenerational.title}</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    {pageData.travelerTypes.multigenerational.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 14. 12-ROW COMPARISON TABLE ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Objective Comparison
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.comparisonTable.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg max-w-2xl mx-auto">
              {pageData.comparisonTable.subtitle}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-navy-950 text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-5 px-6 md:px-8">{pageData.comparisonTable.headers[0]}</th>
                      <th className="py-5 px-6 md:px-8 text-gold-400">{pageData.comparisonTable.headers[1]}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                    {pageData.comparisonTable.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-4 px-6 md:px-8 font-semibold text-navy-950">{row[0]}</td>
                        <td className="py-4 px-6 md:px-8 text-slate-600 font-light">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 15. THE TRIPS & SHIPS CRUISE PLANNING PROCESS (6 Steps) ─── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Structured Methodology
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.planningProcess.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl max-w-2xl mx-auto">
              {pageData.planningProcess.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.planningProcess.steps.map((st, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-6">
                      {st.step}
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{st.title}</h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 16. INDEPENDENT RECOGNITION & CRUISE EXPERTISE STATS ─── */}
      <section className="py-24 bg-gradient-to-b from-navy-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              Verified Public Credentials
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
              {pageData.authorityStats.title}
            </h2>
            <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto">
              {pageData.authorityStats.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pageData.authorityStats.stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-xl">
                  <div className="font-display text-3xl lg:text-5xl font-light text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-4">
              Certified Specialist Cruise Partners:
            </span>
            <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-slate-200">
              {pageData.authorityStats.brands.map((br, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/10 rounded-full border border-white/10">
                  {br}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 17. FAQ SECTION (15 FAQs) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 18. FINAL CENTER CTA ─── */}
      <CenterCTA
        title="Ready to Plan Your Luxury Cruise?"
        description="Let Trips & Ships Luxury Travel help you turn your next cruise into a complete luxury travel experience. Tell us where you want to sail, and we will architect the voyage."
        buttonText="Plan My Luxury Cruise"
        buttonLink="/contact"
        image={null}
      />
    </div>
  );
};

export default BestCruiseTravelAgentFlorida;
