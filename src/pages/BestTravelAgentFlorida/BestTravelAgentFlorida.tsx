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
  Users
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
import MistakesGrid from '@/components/ui/MistakesGrid';
import FadeIn from '@/components/ui/FadeIn';

// Assets (kept exclusively for Authority & Why Angela Stands Out sections)
import AboutImage from "../../assets/AboutAngela.jpeg";
import AboutImage2 from "../../assets/AboutAngela2.jpeg";

const BestTravelAgentFlorida = () => {
  // Map specialties to InteractivePillarHubGrid items with clean placeholders
  const specialtyHubItems = pageData.specialties.items.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    image: null,
    placeholderLabel: `${item.title.toUpperCase()} — TRIPS & SHIPS`,
    actionLabel: "Explore Specialty",
    links: [
      { label: `Learn more about ${item.title}`, url: item.link },
      { label: "Request a Custom Itinerary", url: "/contact" }
    ],
    mainUrl: item.link
  }));

  // Map 8 Factors to ThreeColumnGrid items with placeholders
  const whatMakesBestItems = pageData.whatMakesBest.factors.map((factor) => ({
    title: factor.title,
    description: `${factor.question} ${factor.description}`,
    image: null,
    placeholderLabel: factor.title
  }));

  // Map 6 Mistakes for MistakesGrid component
  const mistakesItems = pageData.commonMistakes.mistakes.map((mistake, idx) => ({
    number: `0${idx + 1}`,
    title: mistake.title,
    description: mistake.description
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
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Trips & Ships Luxury Travel is a Florida-based luxury travel agency specializing in luxury cruises, river cruises, small-ship travel, expedition voyages, African safaris and customized international journeys.",
        "foundingDate": "1995",
        "telephone": "+1-603-860-3274",
        "email": "sales@tripsandships.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Winter Garden",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "areaServed": "Worldwide",
        "sameAs": [
          "https://www.tripsandships.com/"
        ],
        "employee": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "foundingDate": "1995",
        "founder": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO of Trips & Ships Luxury Travel",
        "description": "Angela Hughes is a luxury travel industry leader, speaker, trainer and travel advisor with more than 40 years of travel industry experience and extensive international travel experience.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#travelagency"
        },
        "founder": {
          "@type": "Organization",
          "name": "Luxury Travel University",
          "url": "https://luxurytraveluniversity.com/"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Luxury Cruises",
          "River Cruises",
          "Expedition Cruises",
          "African Safaris",
          "Small Ship Cruises",
          "Custom Travel Planning",
          "International Luxury Travel"
        ],
        "sameAs": [
          "https://www.travelleaders.com/agent/17255",
          "https://luxurytraveluniversity.com/"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/best-travel-agent-florida#webpage",
        "url": "https://www.tripsandships.com/best-travel-agent-florida",
        "name": "Who Is the Best Travel Agent in Florida?",
        "headline": "Who Is the Best Travel Agent in Florida?",
        "description": "Discover how to choose the best travel agent in Florida and why Angela Hughes and Trips & Ships Luxury Travel are a standout choice for luxury cruises, safaris, expeditions and custom travel.",
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "about": {
          "@id": "https://www.tripsandships.com/#travelagency"
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/best-travel-agent-florida#breadcrumb",
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
            "name": "Best Travel Agent in Florida",
            "item": "https://www.tripsandships.com/best-travel-agent-florida"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/best-travel-agent-florida#faq",
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
        <meta property="og:url" content="https://www.tripsandships.com/best-travel-agent-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/best-travel-agent-florida" />
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

      {/* ─── 2. QUICK ANSWER & COMMERCIAL INVESTIGATION ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-200/90 relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                  <Sparkles className="w-4 h-4 text-blue-600" /> Commercial Investigation & Local Recommendation
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Florida Luxury Travel Advisory
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6 leading-tight">
                {pageData.quickAnswer.title}
              </h2>

              <p className="font-serif text-xl md:text-2xl text-blue-950 italic leading-relaxed mb-6 bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-600">
                "{pageData.quickAnswer.lead}"
              </p>

              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-10">
                {pageData.quickAnswer.body}
              </p>

              {/* 13 Specialties Grid */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 mb-10">
                <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-600" /> Trips & Ships Luxury Travel Specializations:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {pageData.quickAnswer.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs hover:border-blue-300 transition-colors">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="font-medium text-slate-800">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Callout & Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <p className="text-base md:text-lg font-medium text-navy-950 max-w-2xl">
                  {pageData.quickAnswer.closing}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy-950 hover:bg-blue-900 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg shrink-0"
                >
                  Start Your Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3. WHAT MAKES A TRAVEL AGENT THE BEST (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesBest.title}
        subtitle={pageData.whatMakesBest.subtitle}
        items={whatMakesBestItems}
      />

      {/* ─── 4. WHY ANGELA HUGHES STANDS OUT (Dark Navy Luxury Section) ─── */}
      <section className="py-28 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3 block flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" /> Professional Distinction
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white">
                {pageData.whyAngelaStandsOut.title}
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full" />
              <p className="text-xl text-blue-100 font-light leading-relaxed mb-6">
                {pageData.whyAngelaStandsOut.subtitle}
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-4 text-base md:text-lg">
                {pageData.whyAngelaStandsOut.body1}
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-8 text-base md:text-lg">
                {pageData.whyAngelaStandsOut.body2}
              </p>
              
              {/* Quote Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md mb-8 shadow-xl">
                <p className="font-serif text-xl md:text-2xl text-blue-200 italic leading-relaxed mb-4">
                  "{pageData.whyAngelaStandsOut.quote}"
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  — {pageData.whyAngelaStandsOut.author}
                </p>
              </div>

              <p className="text-slate-300 font-light leading-relaxed text-base md:text-lg">
                {pageData.whyAngelaStandsOut.body3}
              </p>
            </FadeIn>

            <FadeIn direction="left" className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - Best Travel Agent in Florida"
                  className="w-full h-[580px] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-300 block mb-2">
                    Industry Leadership
                  </span>
                  <h4 className="text-3xl font-serif">Angela Hughes, CTC</h4>
                  <p className="text-sm text-slate-300 mt-2 font-light">
                    CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University
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

      {/* ─── 6. TRIPS & SHIPS SPECIALTIES (Interactive Hub Grid) ─── */}
      <div className="[&_.grid]:!flex [&_.grid]:flex-wrap [&_.grid]:justify-center [&_.grid>div]:w-full md:[&_.grid>div]:w-[calc(50%-1rem)] lg:[&_.grid>div]:w-[calc(33.333%-1.333rem)]">
        <InteractivePillarHubGrid
          title={pageData.specialties.title}
          subtitle={pageData.specialties.subtitle}
          items={specialtyHubItems}
          variant="destination"
        />
      </div>

      {/* ─── 7. DEEP DIVE 1: LUXURY CRUISE EXPERTISE ─── */}
      <section className="py-28 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-5 w-96 h-96 bg-navy-950/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3 block flex items-center justify-center gap-2">
              <Ship className="w-4 h-4 text-blue-600" /> Cruise Portfolio & Ship Advisory
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 leading-tight">
              {pageData.deepDives.cruiseExpertise.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />
            <p className="font-sans text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              {pageData.deepDives.cruiseExpertise.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Left: Deep Narrative & Image Placeholder (5 cols) */}
            <FadeIn direction="right" className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* Image Placeholder Card */}
              <div className="h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 border border-navy-800 shadow-xl relative flex flex-col items-center justify-center p-8 text-center group">
                <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[1px]" />
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Ship className="w-8 h-8" />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-blue-300 uppercase mb-2 z-10">
                  IMAGE PLACEHOLDER
                </span>
                <span className="font-display text-2xl text-white font-light z-10">
                  Luxury Ocean & Yacht Fleet Architecture
                </span>
                <span className="absolute bottom-4 left-4 bg-navy-950/80 backdrop-blur-md text-slate-300 text-[10px] px-3 py-1.5 rounded-full border border-white/10 z-10 font-medium">
                  Small-Ship & Boutique Yachting
                </span>
              </div>

              {/* Narrative Context Card */}
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-navy-800 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                    Finding the Right Ship Atmosphere
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.deepDives.cruiseExpertise.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                    Fiduciary Guidance
                  </p>
                  <p className="text-sm font-light text-slate-200 italic">
                    "This is especially important when the trip represents a major financial investment."
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: 16-Point Evaluation Matrix (7 cols) */}
            <FadeIn direction="left" className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      Comprehensive Criteria
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                      A Luxury Cruise Advisor Evaluates:
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block bg-blue-50 text-blue-700 text-xs font-bold px-4 py-2 rounded-full border border-blue-100">
                    16 Key Factors
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pageData.deepDives.cruiseExpertise.checklist.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 hover:border-blue-300 transition-all flex items-center gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-navy-950 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Personalized Cabin & Hull Placement</span>
                <span className="font-semibold text-blue-600">VIP Amenities Included</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 8. DEEP DIVE 2: AFRICAN SAFARI PLANNING ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 mb-3 block flex items-center justify-center gap-2">
              <Compass className="w-4 h-4 text-amber-700" /> Wildlife & Wilderness Expedition Planning
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 leading-tight">
              {pageData.deepDives.safariExpertise.title}
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6 rounded-full" />
            <p className="font-sans text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              {pageData.deepDives.safariExpertise.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            {/* Left: 14-Point Safari Factor Grid (7 cols) */}
            <FadeIn direction="right" className="lg:col-span-7 bg-amber-50/40 rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200/60 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-200/50">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      Critical Expedition Components
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                      Important Safari Planning Factors:
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block bg-amber-100 text-amber-900 text-xs font-bold px-4 py-2 rounded-full border border-amber-200">
                    14 Crucial Elements
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pageData.deepDives.safariExpertise.factors.map((factor, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white hover:bg-amber-100/60 border border-amber-200/60 hover:border-amber-400 transition-all flex items-center gap-3 group shadow-xs"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      <span className="text-sm font-medium text-slate-800 group-hover:text-navy-950 transition-colors">
                        {factor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200/50 flex items-center justify-between text-xs text-amber-900 font-medium">
                <span>Great Migration Timing & Calving Season</span>
                <span>Private 4x4 Game Vehicles</span>
              </div>
            </FadeIn>

            {/* Right: Safari Narrative & Image Placeholder (5 cols) */}
            <FadeIn direction="left" className="lg:col-span-5 flex flex-col gap-6 justify-between order-1 lg:order-2">
              {/* Image Placeholder Card */}
              <div className="h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 border border-amber-800 shadow-xl relative flex flex-col items-center justify-center p-8 text-center group">
                <div className="absolute inset-0 bg-amber-500/5 backdrop-blur-[1px]" />
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Compass className="w-8 h-8" />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-amber-300 uppercase mb-2 z-10">
                  IMAGE PLACEHOLDER
                </span>
                <span className="font-display text-2xl text-white font-light z-10">
                  Serengeti, Okavango & Kruger Wilderness
                </span>
                <span className="absolute bottom-4 left-4 bg-amber-950/80 backdrop-blur-md text-amber-200 text-[10px] px-3 py-1.5 rounded-full border border-amber-700/50 z-10 font-medium">
                  Luxury Tented Lodges & Bush Aviation
                </span>
              </div>

              {/* Narrative Context Card */}
              <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone-800 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-amber-200 mb-4">
                    Tailoring the Wildlife Experience
                  </h3>
                  <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.deepDives.safariExpertise.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-stone-800">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                    Bespoke Expedition Execution
                  </p>
                  <p className="text-sm font-light text-stone-200 italic">
                    "A knowledgeable advisor can help turn a broad request such as 'I want to go on safari' into a realistic, personalized plan."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 9. EXPEDITION TRAVEL & RIVER CRUISING DUAL LUXURY CARDS ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-400 mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    <Mountain className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-light text-white mb-4">
                    {pageData.deepDives.expeditionExpertise.title}
                  </h3>
                  <p className="text-base md:text-lg text-blue-200 font-light leading-relaxed mb-6">
                    {pageData.deepDives.expeditionExpertise.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    {pageData.deepDives.expeditionExpertise.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-300">
                  <span>Polar Class Hull Verification</span>
                  <span>Zodiac Operations</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-400 mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    <Anchor className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-light text-white mb-4">
                    {pageData.deepDives.riverCruiseExpertise.title}
                  </h3>
                  <p className="text-base md:text-lg text-blue-200 font-light leading-relaxed mb-6">
                    {pageData.deepDives.riverCruiseExpertise.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    {pageData.deepDives.riverCruiseExpertise.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-300">
                  <span>Waterway Water Levels</span>
                  <span>Docking Locations</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 10. WHAT A LUXURY TRAVEL ADVISOR ACTUALLY DOES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              High-Touch Service Model
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.whatAdvisorDoes.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {pageData.whatAdvisorDoes.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Before the Trip */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-navy-950 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span>Before the Trip: Strategy & Curation</span>
                  </h3>
                  <ul className="space-y-4 text-slate-700 text-sm md:text-base">
                    {pageData.whatAdvisorDoes.beforeTrip.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-light">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* During the Trip & Logistics */}
            <FadeIn delay={0.2} className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-navy-950 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span>During the Trip: Advocacy & Care</span>
                </h3>
                <ul className="space-y-4 text-slate-700 text-sm md:text-base">
                  {pageData.whatAdvisorDoes.duringTrip.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-light">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Online Booking Moving Parts Breakdown */}
              <div className="bg-blue-50/80 border border-blue-200/80 rounded-3xl p-8 text-slate-800 shadow-xs">
                <h4 className="font-bold text-navy-950 text-base md:text-lg mb-2">
                  Travel Agent vs. Online Booking
                </h4>
                <p className="text-sm font-light leading-relaxed mb-4 text-slate-700">
                  Online booking is useful for simple single-hotel stays. However, a complicated luxury itinerary can involve:
                </p>
                <div className="text-xs md:text-sm font-mono bg-white p-4 rounded-xl border border-blue-200 text-blue-950 leading-relaxed shadow-inner">
                  Flights → private transfers → hotels → cruise → excursions → internal flights → guides → travel protection → special experiences → return transportation.
                </div>
                <p className="text-xs md:text-sm text-slate-600 mt-4 font-light">
                  The more moving parts a trip has, the more valuable professional coordination becomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 11. 13-ROW COMPARISON FRAMEWORK TABLE ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Booking Channel Analysis
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.comparisonFramework.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg max-w-2xl mx-auto">
              {pageData.comparisonFramework.subtitle}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-navy-950 text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-5 px-6 md:px-8">What Travelers Need</th>
                      <th className="py-5 px-6 md:px-8 text-slate-300">Online Booking</th>
                      <th className="py-5 px-6 md:px-8 text-slate-300">General Travel Agent</th>
                      <th className="py-5 px-6 md:px-8 text-gold-400 bg-navy-900">Angela Hughes (Luxury Advisor)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                    {pageData.comparisonFramework.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-4 px-6 md:px-8 font-semibold text-navy-950">{row.need}</td>
                        <td className="py-4 px-6 md:px-8 text-slate-500 font-light">{row.online}</td>
                        <td className="py-4 px-6 md:px-8 text-slate-500 font-light">{row.general}</td>
                        <td className="py-4 px-6 md:px-8 text-blue-900 font-medium bg-blue-50/30">{row.luxury}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 12. BEST FOR (15 Points) VS. WHO MAY NOT NEED (5 Points) ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Best For */}
            <FadeIn direction="right" className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 block flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Ideal Client Profile
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-light text-navy-950 mb-4">
                {pageData.bestFor.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-light mb-8">
                {pageData.bestFor.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pageData.bestFor.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Who May Not Need */}
            <FadeIn direction="left" className="lg:col-span-5 bg-slate-50/50 rounded-3xl p-8 md:p-12 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                When to Self-Book
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-light text-navy-950 mb-4">
                {pageData.notBestFor.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-light mb-8">
                {pageData.notBestFor.subtitle}
              </p>
              <div className="space-y-3.5">
                {pageData.notBestFor.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-600 text-sm bg-white/70 p-3.5 rounded-xl border border-slate-200/50">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 13. HOW TO CHOOSE THE BEST TRAVEL AGENT IN FLORIDA (10 Questions) ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
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
                <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow h-full">
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

      {/* ─── 14. 6 COMMON MISTAKES TRAVELERS MAKE (MistakesGrid Component) ─── */}
      <MistakesGrid
        title={pageData.commonMistakes.title}
        items={mistakesItems}
      />

      {/* ─── 15. CLIENT REVIEWS & VERIFIED CREDENTIALS STATS ─── */}
      <section className="py-24 bg-gradient-to-b from-navy-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              Verified Client Trust & Reputation
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
              {pageData.clientReviews.title}
            </h2>
            <p className="text-slate-300 font-light text-lg md:text-xl max-w-2xl mx-auto">
              {pageData.clientReviews.subtitle}
            </p>
          </FadeIn>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pageData.clientReviews.stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm shadow-xl">
                  <div className="font-display text-4xl lg:text-5xl font-light text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Themes Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.clientReviews.themes.map((theme, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
                    <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                    <h4 className="text-lg font-serif text-white">{theme.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 16. THE TRIPS & SHIPS DIFFERENCE (Core Philosophy) ─── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Our Core Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-8 italic leading-snug">
              "{pageData.tripsAndShipsDifference.quote}"
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
              {pageData.tripsAndShipsDifference.body}
            </p>
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-8 py-4 text-sm font-medium text-slate-700 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Advocacy & Problem Solving for When Plans Change</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 17. DYNAMIC LUXURY TRAVEL MEDIA EXPERIENCE (7 Placeholder Cards) ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Curated Visual Portfolios
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.mediaExperience.title}
            </h2>
            <p className="text-slate-600 font-light text-lg md:text-xl max-w-2xl mx-auto">
              {pageData.mediaExperience.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pageData.mediaExperience.cards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-xl transition-all h-full">
                  <div className="h-44 relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 border-b border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-bold text-slate-400 tracking-[0.2em] mb-1 text-[10px]">
                      IMAGE PLACEHOLDER
                    </span>
                    <span className="font-display text-sm text-navy-950 font-normal line-clamp-1">
                      {card.title}
                    </span>
                    <span className="absolute top-3 left-3 bg-navy-950 text-white font-mono text-[10px] px-2 py-0.5 rounded">
                      {card.number}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-base text-navy-950 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 18. FAQ SECTION (14 FAQs) ─── */}
      <FAQAccordion data={faqData} />

      {/* ─── 19. FINAL CENTER CTA ─── */}
      <CenterCTA
        title="Ready to Plan a Journey Worth Remembering?"
        description="Tell us where you want to go, what matters most to you, and what you want the experience to feel like. Angela Hughes and Trips & Ships Luxury Travel will turn your vision into a carefully crafted masterpiece."
        buttonText="Schedule Your Luxury Consultation"
        buttonLink="/contact"
        image={null}
      />
    </div>
  );
};

export default BestTravelAgentFlorida;
