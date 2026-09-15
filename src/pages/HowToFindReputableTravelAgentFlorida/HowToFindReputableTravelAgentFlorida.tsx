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
  Waves,
  MessageSquare,
  Search,
  FileCheck,
  AlertTriangle,
  Flame,
  Plane,
  Building,
  Car,
  Camera,
  Layers,
  Sparkle
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
import MistakesGrid from '@/components/ui/MistakesGrid';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import ConclusionSection from '@/components/ui/ConclusionSection';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import BentoQuickFacts from '@/components/ui/BentoQuickFacts';
import FadeIn from '@/components/ui/FadeIn';

// Assets (Kept exclusively for Angela Hughes Authority sections)
import AboutImage from "../../assets/AboutAngela.jpeg";
import AboutImage2 from "../../assets/AboutAngela2.jpeg";

const HowToFindReputableTravelAgentFlorida = () => {

  // Map 10 Quick Answer Factors for BentoQuickFacts
  const quickAnswerBentoItems = pageData.quickAnswer.factors.map((factor, idx) => ({
    title: `Vetting Factor 0${idx + 1}`,
    description: factor
  }));

  // Map 7 Factors in What Makes a Travel Agent Reputable for ThreeColumnGrid
  const whatMakesReputableItems = pageData.whatMakesReputable.factors.map((factor) => ({
    title: factor.title,
    description: `${factor.question} ${factor.description}`,
    image: null,
    placeholderLabel: factor.title
  }));

  // Map 10 Red Flags for MistakesGrid
  const redFlagsItems = pageData.redFlags.items.map((flag, idx) => ({
    number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
    title: flag.title,
    description: flag.description
  }));

  // Final Answer section formatted for ConclusionSection component
  const finalAnswerSections = [
    {
      heading: pageData.finalAnswer.title,
      paragraphs: [
        pageData.finalAnswer.summary,
        `Look for: ${pageData.finalAnswer.corePillars.join(', ')}.`,
        pageData.finalAnswer.paragraphs[0],
        pageData.finalAnswer.paragraphs[1],
        pageData.finalAnswer.paragraphs[2]
      ]
    }
  ];

  // Map 5 Trustworthiness evaluation items for HighlightsSplit
  const trustHighlightsItems = [
    {
      title: "The Trust Equation",
      description: `A trustworthy travel advisor combines: ${pageData.trustworthiness.formula}`,
      bulletPoints: [
        "Multi-Decade Travel Industry Experience",
        "Verified Professional Credentials & Affiliations",
        "Transparent Communication & Advisory Support",
        "Direct Specialization in Your Trip Style"
      ],
      icon: "Sparkles",
      image: null
    },
    {
      title: "1. The Complete Picture",
      description: pageData.trustworthiness.paragraphs[0],
      bulletPoints: [
        "Look beyond advertisements and surface-level marketing",
        "Evaluate the complete advisor ecosystem"
      ],
      icon: "Compass",
      image: null
    },
    {
      title: "2. Experience & Communication",
      description: pageData.trustworthiness.paragraphs[1],
      bulletPoints: [
        "Experience without responsiveness creates booking friction",
        "Prioritize prompt, transparent communication"
      ],
      icon: "Clock",
      image: null
    },
    {
      title: "3. Destination Relevance",
      description: pageData.trustworthiness.paragraphs[2],
      bulletPoints: [
        "High review volume must match your specific destination",
        "Demand verified firsthand product knowledge"
      ],
      icon: "Star",
      image: null
    },
    {
      title: "4. Specialization & Verification",
      description: pageData.trustworthiness.paragraphs[3],
      bulletPoints: [
        "Match with an advisor specializing in your exact trip type",
        "Review independent third-party traveler ratings"
      ],
      icon: "Heart",
      image: null
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.title} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.secondaryKeywords.join(', ')} />
        <meta property="og:title" content={pageData.seo.title} />
        <meta property="og:description" content={pageData.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida" />
        <link rel="canonical" href="https://www.tripsandships.com/how-to-find-reputable-travel-agent-florida" />
        <script type="application/ld+json">{JSON.stringify(pageData.schema)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText="Plan My Luxury Journey"
        primaryCtaLink="/contact"
      />

      {/* ─── 2a. FLORIDA TRAVEL ADVISOR LANDSCAPE & VETTING STRATEGY (Editorial Narrative Split) ─── */}
      <EditorialIntroSplit
        eyebrow="FLORIDA TRAVEL ADVISOR VETTING GUIDE"
        heading="Navigating the Florida Travel Advisory Landscape"
        paragraphs={[
          pageData.hero.introParagraphs[0],
          pageData.hero.introParagraphs[1],
          pageData.hero.introParagraphs[2],
          pageData.hero.introParagraphs[3]
        ]}
        // primaryImage={AboutImage}
        // secondaryImage={AboutImage2}
      />

      {/* ─── 2b. QUICK ANSWER: HOW DO I FIND A REPUTABLE TRAVEL AGENT IN FLORIDA (Bento Box Grid) ─── */}
      <BentoQuickFacts
        title={pageData.quickAnswer.title}
        paragraphs={[
          pageData.quickAnswer.intro,
          pageData.quickAnswer.highlight
        ]}
        items={quickAnswerBentoItems}
      />

      {/* ─── 3. WHAT MAKES A TRAVEL AGENT REPUTABLE (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.whatMakesReputable.title}
        subtitle={pageData.whatMakesReputable.subtitle}
        items={whatMakesReputableItems}
      />

      {/* ─── 4. 9 CRITICAL STEPS TO VETTING A TRAVEL ADVISOR (Deep Walkthrough) ─── */}
      <section className="py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3 block flex items-center justify-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-600" /> Evaluation Blueprint
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 leading-tight">
              {pageData.nineSteps.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />
            <p className="font-sans text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              {pageData.nineSteps.subtitle}
            </p>
          </FadeIn>

          <div className="space-y-16">
            {/* Step 1: Experience */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[0].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[0].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[0].intro}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 mb-6">
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {pageData.nineSteps.steps[0].details}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200/70 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                    Crucial Questions to Ask:
                  </h4>
                  <ul className="space-y-2">
                    {pageData.nineSteps.steps[0].questionsToAsk.map((q, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm md:text-base font-medium text-navy-950">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>"{q}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[0].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 2: Credentials */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[1].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[1].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[1].intro}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 mb-6">
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {pageData.nineSteps.steps[1].details}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200/70 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                    Questions to Ask:
                  </h4>
                  <ul className="space-y-2">
                    {pageData.nineSteps.steps[1].questionsToAsk.map((q, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm md:text-base font-medium text-navy-950">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>"{q}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[1].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 3: Independent Reviews */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[2].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[2].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[2].intro}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 mb-6">
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {pageData.nineSteps.steps[2].details}
                  </p>
                </div>
                <div className="bg-navy-950 text-white p-6 md:p-8 rounded-2xl mb-4 border border-navy-800 shadow-lg flex items-start gap-4">
                  <Star className="w-6 h-6 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
                      Independent Benchmark
                    </span>
                    <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed">
                      {pageData.nineSteps.steps[2].caseStudy}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[2].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 4: Specialization */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[3].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[3].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-6">
                  {pageData.nineSteps.steps[3].intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {pageData.nineSteps.steps[3].specialties.map((spec, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <h4 className="font-display text-xl text-navy-950 mb-3 border-b border-slate-100 pb-2">
                          {spec.name}
                        </h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-3">
                          Look for experience with:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {spec.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[3].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 5: Verify Agency Reputation */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[4].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[4].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[4].intro}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 mb-6">
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {pageData.nineSteps.steps[4].details}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[4].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 6: Firsthand Experience */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[5].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[5].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[5].intro}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 mb-6">
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {pageData.nineSteps.steps[5].details}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200/70 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                    Direct Diagnostic Questions:
                  </h4>
                  <ul className="space-y-2">
                    {pageData.nineSteps.steps[5].questionsToAsk.map((q, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm md:text-base font-medium text-navy-950">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>"{q}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[5].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 7: Compare Options */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[6].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[6].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[6].intro}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 mb-6 font-serif italic text-blue-950 text-base md:text-lg">
                  {pageData.nineSteps.steps[6].details}
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[6].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 8: What Happens After Booking */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[7].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[7].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[7].intro}
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200/70 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                    Post-Booking Support Inquiries:
                  </h4>
                  <ul className="space-y-2">
                    {pageData.nineSteps.steps[7].questionsToAsk.map((q, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm md:text-base font-medium text-navy-950">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>"{q}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[7].conclusion}
                </p>
              </div>
            </FadeIn>

            {/* Step 9: Understand Whole Journey */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pageData.nineSteps.steps[8].number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 font-normal">
                    {pageData.nineSteps.steps[8].title}
                  </h3>
                </div>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[8].intro}
                </p>
                <div className="bg-gradient-to-r from-navy-950 to-slate-900 text-white p-6 md:p-8 rounded-2xl mb-6 shadow-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
                    Seamless End-to-End Logistics Flow:
                  </span>
                  <p className="font-mono text-xs md:text-sm text-blue-100">
                    {pageData.nineSteps.steps[8].journeyFlow}
                  </p>
                </div>
                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-4">
                  {pageData.nineSteps.steps[8].details}
                </p>
                <p className="text-sm font-medium text-slate-600 italic">
                  {pageData.nineSteps.steps[8].conclusion}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

         {/* ─── MID-PAGE CTA BANNER ─── */}
      <CenterCTA
        title="Ready to Plan Your Next Journey with a Trusted Florida Advisor?"
        description="Connect directly with Angela Hughes and the Trips & Ships Luxury Travel team to craft a seamless, bespoke itinerary tailored to your travel vision."
        buttonText="Speak With an Advisor"
        buttonLink="/contact"
      />

   


      {/* Angela Bio Callout with AboutImage2 */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={`${pageData.authority.angelaBio} ${pageData.authority.angelaProfileDetails} ${pageData.authority.profileQuote}`}
        image={AboutImage2}
      />

      
      {/* ─── 6. ANGELA HUGHES AUTHORITY & CREDENTIALS ─── */}
      <section className="py-28 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3 block flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" /> Agency & Advisor Leadership
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white">
                {pageData.authority.agencyTitle}
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full" />
              <p className="text-xl text-blue-100 font-light leading-relaxed mb-6">
                {pageData.authority.agencyDescription}
              </p>

              {/* Agency Focus List */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
                  Current Agency Travel Focus:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
                  {pageData.authority.agencyFocus.map((focus, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

            </FadeIn>

            

            <FadeIn direction="left" className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src={AboutImage}
                  alt="Angela Hughes - CEO of Trips & Ships Luxury Travel"
                  className="w-full h-[580px] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-300 block mb-2">
                    Meet Angela Hughes
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

      

      {/* ─── 7. QUESTIONS TO ASK A TRAVEL AGENT BEFORE BOOKING ─── */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-[1300px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600" /> Pre-Booking Due Diligence
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.questionsToAsk.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.questionsToAsk.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {pageData.questionsToAsk.categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl text-navy-950 mb-6 pb-3 border-b border-slate-200">
                      {cat.category}
                    </h3>
                    <ul className="space-y-3">
                      {cat.questions.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                          <span>"{q}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-center text-slate-600 font-serif italic text-lg">
            "{pageData.questionsToAsk.conclusion}"
          </p>
        </div>
      </section>

      {/* ─── 8. TRAVEL AGENT VS BOOKING DIRECTLY (Comparison Matrix) ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Booking Channel Faceoff
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.comparisonTable.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.comparisonTable.subtitle}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-navy-950 text-white">
                      {pageData.comparisonTable.headers.map((h, i) => (
                        <th key={i} className={`p-5 text-sm font-bold uppercase tracking-wider ${i === 0 ? 'w-1/3' : 'w-1/3'}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm md:text-base">
                    {pageData.comparisonTable.rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="p-5 font-bold text-navy-950">{row.aspect}</td>
                        <td className="p-5 text-slate-600">{row.bookingDirectly}</td>
                        <td className="p-5 font-medium text-blue-900 bg-blue-50/40">{row.travelAdvisor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-6 md:p-8 rounded-2xl border border-blue-200 text-center max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-blue-950 font-light leading-relaxed">
                {pageData.comparisonTable.verdict}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 9. HOW DO I KNOW IF A TRAVEL AGENT IS TRUSTWORTHY (HighlightsSplit with Image Placeholder) ─── */}
      <HighlightsSplit
        title={pageData.trustworthiness.title}
        items={trustHighlightsItems}
      />

      {/* ─── 10. RED FLAGS WHEN CHOOSING A TRAVEL AGENT (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.redFlags.title}
        subtitle={pageData.redFlags.subtitle}
        mistakes={redFlagsItems}
      />



      {/* ─── 12. WHY SPECIALIZED TRAVEL ADVICE MATTERS FOR LUXURY TRAVEL ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Investment Protection
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.luxuryAdviceMatters.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.luxuryAdviceMatters.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pageData.luxuryAdviceMatters.diagnosticQuestions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display text-xl text-navy-950 mb-3">
                      "{item.question}"
                    </h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-center text-slate-600 font-serif italic text-lg">
            "{pageData.luxuryAdviceMatters.conclusion}"
          </p>
        </div>
      </section>

      {/* ─── 13. REPUTABLE TRAVEL AGENT CHECKLIST ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Pre-Departure Verification
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.checklist.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.checklist.subtitle}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pageData.checklist.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 bg-slate-50 p-4 rounded-xl border border-slate-200/70 hover:border-blue-300 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-slate-600 font-serif italic text-lg">
              "{pageData.checklist.conclusion}"
            </p>
          </FadeIn>
        </div>
      </section>

      
      {/* ─── 15. FINAL ANSWER (ConclusionSection Component) ─── */}
      <ConclusionSection sections={finalAnswerSections} />

      {/* ─── 14. 15 FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />


      {/* CenterCTA banner */}
      <CenterCTA
        title={pageData.finalAnswer.ctaSection.headline}
        description={pageData.finalAnswer.ctaSection.subheadline}
        buttonText="Plan My Luxury Journey"
        buttonLink="/contact"
      />
    </div>
  );
};

export default HowToFindReputableTravelAgentFlorida;
