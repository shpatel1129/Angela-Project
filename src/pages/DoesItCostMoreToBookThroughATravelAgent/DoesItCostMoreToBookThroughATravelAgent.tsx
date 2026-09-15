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
  DollarSign,
  TrendingDown,
  Scale,
  CreditCard,
  FileText,
  BadgeCheck,
  Percent,
  Compass as CompassIcon,
  Luggage,
  ShieldAlert,
  Search
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
import ConclusionSection from '@/components/ui/ConclusionSection';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import CurvilinearGrid from '@/components/ui/CurvilinearGrid';
import AsymmetricStoryIntro from '@/components/ui/AsymmetricStoryIntro';
import HighlightsSplit from '@/components/ui/HighlightsSplit';
import FadeIn from '@/components/ui/FadeIn';

// Assets (Kept exclusively for Angela Hughes Authority sections)
import AboutImage from "../../assets/AboutAngela.jpeg";
import AboutImage2 from "../../assets/AboutAngela2.jpeg";

// SVG Image Placeholders for Direct Booking vs Advisor Value Comparison
const directBookingPlaceholderImage1 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="%230b1329"/><circle cx="400" cy="500" r="300" fill="%231e293b" opacity="0.5"/><path d="M250 650 L400 350 L550 650 Z" fill="none" stroke="%2338bdf8" stroke-width="2" opacity="0.35"/><text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="%2394a3b8" letter-spacing="4">[ IMAGE PLACEHOLDER ]</text><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="%23f8fafc" letter-spacing="2">DIRECT BOOKING VS. ADVISOR VALUE</text></svg>`;
const directBookingPlaceholderImage2 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23050b14"/><circle cx="400" cy="300" r="200" fill="%230f1d32" opacity="0.7"/><path d="M280 400 L400 200 L520 400 Z" fill="none" stroke="%23d4af37" stroke-width="2" opacity="0.4"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="%23d4af37" letter-spacing="4">[ IMAGE PLACEHOLDER ]</text><text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="%23ffffff" letter-spacing="2">COMPLETE EXPERIENCE INCLUSIONS</text></svg>`;


const DoesItCostMoreToBookThroughATravelAgent = () => {
  // Map 6 Fee Model Questions for CurvilinearGrid
  const feeModelCurvilinearItems = [
    {
      title: "1. Planning Fee Structure",
      description: pageData.feeModel.questionsBeforeWorking[0],
      icon: "dollar"
    },
    {
      title: "2. Refundability Terms",
      description: pageData.feeModel.questionsBeforeWorking[1],
      icon: "check"
    },
    {
      title: "3. Scope of Service Coverage",
      description: pageData.feeModel.questionsBeforeWorking[2],
      icon: "map"
    },
    {
      title: "4. Supplier Commission Alignment",
      description: pageData.feeModel.questionsBeforeWorking[3],
      icon: "user"
    },
    {
      title: "5. Modifications & Change Fees",
      description: pageData.feeModel.questionsBeforeWorking[4],
      icon: "Compass"
    },
    {
      title: "6. Post-Booking & On-Trip Support",
      description: pageData.feeModel.questionsBeforeWorking[5],
      icon: "Heart"
    }
  ];
  // Map 3 Payment Models for ThreeColumnGrid
  const howPaidItems = pageData.howPaid.models.map((model) => ({
    title: model.title,
    description: model.description,
    image: null,
    placeholderLabel: model.title
  }));

  // Map 13 Cruise Comparison Elements & Insights for HighlightsSplit with Image Placeholders
  const cruiseCostsHighlightsItems = [
    {
      title: "1. Ships, Suites & Stateroom Selection",
      description: `${pageData.cruiseCosts.subtitle} ${pageData.cruiseCosts.context}`,
      // image: cruisePlaceholderImage1,
      icon: "Ship",
      bulletPoints: [
        pageData.cruiseCosts.comparisonElements[0],
        pageData.cruiseCosts.comparisonElements[1],
        pageData.cruiseCosts.comparisonElements[2],
        pageData.cruiseCosts.comparisonElements[3]
      ]
    },
    {
      title: "2. Itineraries, Ports & Excursion Logistics",
      description: "Advisors provide essential insight when comparing sailing routes, embarkation logistics, and curated land extensions.",
      // image: cruisePlaceholderImage2,
      icon: "Compass",
      bulletPoints: [
        pageData.cruiseCosts.comparisonElements[5],
        pageData.cruiseCosts.comparisonElements[6],
        pageData.cruiseCosts.comparisonElements[7],
        pageData.cruiseCosts.comparisonElements[8],
        pageData.cruiseCosts.comparisonElements[9]
      ]
    },
    {
      title: "3. Value, Protection & Core Decision Framework",
      description: pageData.cruiseCosts.coreQuestion,
      // image: cruisePlaceholderImage3,
      icon: "Sparkles",
      bulletPoints: [
        pageData.cruiseCosts.comparisonElements[4],
        pageData.cruiseCosts.comparisonElements[10],
        pageData.cruiseCosts.comparisonElements[11],
        pageData.cruiseCosts.comparisonElements[12]
      ]
    }
  ];

  // Map 5 Trip Styles for LuxuryZigZagShowcase with Image Placeholders
  const whenMakesSenseZigZagItems = pageData.whenMakesSense.styles.map((style) => ({
    title: style.title,
    category: "HIGH-VALUE ADVISORY COORDINATION",
    description: style.description,
    bestFor: `Coordinated components: ${style.coordination.join(', ')}.`,
    image: null,
    placeholderLabel: `${style.title.toUpperCase()} — ADVISOR VALUE`
  }));

  // Map 8 Red Flags for MistakesGrid
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
        pageData.finalAnswer.coreEquation,
        pageData.finalAnswer.paragraphs[0],
        pageData.finalAnswer.paragraphs[1]
      ]
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
        <meta property="og:url" content="https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent" />
        <link rel="canonical" href="https://www.tripsandships.com/does-it-cost-more-to-book-through-a-travel-agent" />
        <script type="application/ld+json">{JSON.stringify(pageData.schema)}</script>
      </Helmet>

      <Nav />

      {/* ─── 1. HERO SECTION ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={null}
        primaryCtaText="Compare Your Travel Options"
        primaryCtaLink="/contact"
      />

      {/* ─── 2a. ADVISORY ECONOMICS & VALUE FRAMEWORK (Editorial Narrative Split) ─── */}
      <EditorialIntroSplit
        eyebrow="TRAVEL ECONOMICS & TRANSPARENCY"
        heading="Evaluating the True Value of Professional Travel Planning"
        paragraphs={[
          pageData.hero.introParagraphs[0],
          pageData.hero.introParagraphs[1]
        ]}
      />

      {/* ─── 2b. PROFESSIONAL FEE MODELS & CONSULTATION STANDARDS (CurvilinearGrid) ─── */}
      <CurvilinearGrid
        title={pageData.feeModel.title}
        subtitle="Fee Models & Consultation Transparency"
        paragraphs={[
          pageData.feeModel.intro,
          pageData.feeModel.astaNote,
          pageData.feeModel.conclusion
        ]}
        items={feeModelCurvilinearItems}
      />

      {/* ─── 3. HOW DO TRAVEL AGENTS GET PAID (ThreeColumnGrid) ─── */}
      <ThreeColumnGrid
        title={pageData.howPaid.title}
        subtitle={pageData.howPaid.subtitle}
        items={howPaidItems}
      />

      {/* ─── 4. SO, IS IT CHEAPER TO BOOK DIRECT? (AsymmetricStoryIntro Component with Images) ─── */}
      <AsymmetricStoryIntro
        eyebrow="VALUE VS. PRICE BREAKDOWN"
        heading={pageData.isCheaperDirect.title}
        paragraphs={[
          pageData.isCheaperDirect.subtitle,
          pageData.isCheaperDirect.lead,
          pageData.isCheaperDirect.ftcWarning
        ]}
        highlights={pageData.isCheaperDirect.factorsToCompare}
        image1={directBookingPlaceholderImage1}
        image2={directBookingPlaceholderImage2}
        ctaText="Compare Your Booking Options"
        ctaLink="/contact"
      />

      {/* ─── 5. CAN A TRAVEL AGENT GET A BETTER PRICE? ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <FadeIn direction="right" className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
                  Promotions & Preferred Rates
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6">
                  {pageData.betterPrice.title}
                </h2>
                <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed mb-6">
                  {pageData.betterPrice.description}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="font-serif italic text-blue-950 text-base md:text-lg">
                    "{pageData.betterPrice.takeaway}"
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-6 bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-navy-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
                  Value-Added Opportunities
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-6">
                  Where Real Advisor Value Comes From:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pageData.betterPrice.valueSources.map((source, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10 text-sm text-slate-200">
                      <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{source}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-6 mt-6 border-t border-white/10 font-light">
                Maximizing overall package value vs simply seeking lowest advertised base price.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 6. DOES BOOKING A CRUISE THROUGH A TRAVEL AGENT COST MORE? (HighlightsSplit Component with Images) ─── */}
      <HighlightsSplit
        title={pageData.cruiseCosts.title}
        items={cruiseCostsHighlightsItems}
      />

      {/* ─── 7. WHEN DOES USING A TRAVEL AGENT MAKE THE MOST SENSE? (LuxuryZigZagShowcase with Image Placeholders) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.whenMakesSense.title}
        subtitle={pageData.whenMakesSense.subtitle}
        items={whenMakesSenseZigZagItems}
      />

      {/* ─── 8. WHAT ARE YOU REALLY PAYING FOR? ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Core Advisory Value
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.whatYouPayFor.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.whatYouPayFor.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.whatYouPayFor.pillars.map((pillar, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs h-full flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display text-xl text-navy-950 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. TRAVEL AGENT VS BOOKING DIRECT (Comparison Table) ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Side-by-Side Comparison
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
                        <th key={i} className="p-5 text-sm font-bold uppercase tracking-wider w-1/3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm md:text-base">
                    {pageData.comparisonTable.rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="p-5 font-bold text-navy-950">{row.aspect}</td>
                        <td className="p-5 text-slate-600">{row.bookingDirect}</td>
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

      {/* ─── MID-PAGE CTA BANNER ─── */}
      <CenterCTA
        title="Ready to Compare Your Specific Vacation Options?"
        description="Whether you are planning a luxury cruise, African safari, or complex international journey, our advisors provide full price transparency and customized itinerary planning."
        buttonText="Speak With a Travel Advisor"
        buttonLink="/contact"
      />

      {/* ─── 10. DOES IT SAVE MONEY & CAN IT COST MORE? ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-12">
            {/* Does it Save Money */}
            <FadeIn direction="right">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                    Financial Advantage
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-3">
                    {pageData.doesItSaveMoney.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.doesItSaveMoney.subtitle}
                  </p>
                  <div className="space-y-2.5 mb-6">
                    {pageData.doesItSaveMoney.savingsAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs md:text-sm text-slate-800">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-xs md:text-sm text-blue-950 font-light">
                  {pageData.doesItSaveMoney.timeValue}
                </div>
              </div>
            </FadeIn>

            {/* Can it Cost More */}
            <FadeIn direction="left">
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-navy-800 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                    Fee Circumstances
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
                    {pageData.canItCostMore.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.canItCostMore.subtitle}
                  </p>
                  <div className="space-y-2.5 mb-6">
                    {pageData.canItCostMore.circumstances.map((circ, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10 text-xs md:text-sm text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <span>{circ}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 text-xs md:text-sm text-slate-200 font-light">
                  {pageData.canItCostMore.takeaway}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 11. QUESTIONS TO ASK ABOUT FEES & APPLES-TO-APPLES COMPARISON ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Questions to Ask */}
            <FadeIn direction="right">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                    Fee Due Diligence
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-3">
                    {pageData.questionsAboutFees.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.questionsAboutFees.subtitle}
                  </p>
                  <div className="space-y-2">
                    {pageData.questionsAboutFees.questions.map((q, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs md:text-sm text-slate-800">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>"{q}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* How to Compare */}
            <FadeIn direction="left">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                    Apples-to-Apples Checklist
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-3">
                    {pageData.howToCompare.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-4">
                    {pageData.howToCompare.subtitle}
                  </p>
                  <div className="p-3.5 bg-red-50 text-red-900 rounded-xl border border-red-200 text-xs font-medium mb-4">
                    {pageData.howToCompare.notCompare}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {pageData.howToCompare.applesToApples.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-serif italic">
                  "{pageData.howToCompare.conclusion}"
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 12. LUXURY TRAVEL ADVISORS & TRIPS AND SHIPS SPECIALTIES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Luxury Travel Advisors */}
            <FadeIn direction="right">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                    High-Touch Expertise
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-3">
                    {pageData.luxuryAdvisors.title}
                  </h3>
                  <p className="text-slate-700 font-serif italic text-base md:text-lg mb-4">
                    "{pageData.luxuryAdvisors.subtitle}"
                  </p>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.luxuryAdvisors.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {pageData.luxuryAdvisors.firsthandAreas.map((area, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Why Choose Trips & Ships */}
            <FadeIn direction="left">
              <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-navy-800 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                    Tailored Luxury Agency
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
                    {pageData.whyChooseTripsAndShips.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-6">
                    {pageData.whyChooseTripsAndShips.subtitle}
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {pageData.whyChooseTripsAndShips.specialties.map((spec, idx) => (
                      <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-slate-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-light border-t border-white/10 pt-4">
                  {pageData.whyChooseTripsAndShips.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 13. ANGELA HUGHES: LUXURY TRAVEL EXPERTISE ─── */}
      <section className="py-28 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3 block flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" /> Four Decades of Industry Leadership
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white">
                {pageData.angelaHughes.title}
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full" />
              <p className="text-xl text-blue-100 font-light leading-relaxed mb-6">
                {pageData.angelaHughes.bio}
              </p>

              {/* Questions Answered List */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
                  Critical Questions an Experienced Advisor Answers:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
                  {pageData.angelaHughes.questionsAnswered.map((q, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>"{q}"</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-300 font-light">
                {pageData.angelaHughes.conclusion}
              </p>
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

      {/* Expert Credentials Box with AboutImage2 */}
      <ExpertCredentials
        name="Angela Hughes"
        title="CEO, Trips & Ships Luxury Travel | Founder, Luxury Travel University"
        bio={`${pageData.angelaHughes.bio} ${pageData.whyExperienceMatters.description} ${pageData.whyExperienceMatters.ftcAdvice}`}
        image={AboutImage2}
      />

      {/* ─── 14. IS A TRAVEL ADVISOR WORTH THE COST? ─── */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-[1300px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Investment Assessment
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.worthTheCost.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.worthTheCost.subtitle}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-6">
                A travel advisor is particularly worth the cost when:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                {pageData.worthTheCost.scenarios.map((scen, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-800">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{scen}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-serif italic text-slate-600 text-center">
                "{pageData.worthTheCost.takeaway}"
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 15. HOW TO KNOW IF AN ADVISOR PROVIDES GOOD VALUE ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Professional Hallmarks
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-4">
              {pageData.howToKnowGoodValue.title}
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              {pageData.howToKnowGoodValue.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pageData.howToKnowGoodValue.hallmarks.map((h, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display text-xl text-navy-950 mb-2">
                      {h.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 font-light">
            {pageData.howToKnowGoodValue.ftcNote}
          </p>
        </div>
      </section>

      {/* ─── 16. RED FLAGS WHEN CHOOSING A TRAVEL AGENT (MistakesGrid) ─── */}
      <MistakesGrid
        title={pageData.redFlags.title}
        subtitle={pageData.redFlags.subtitle}
        mistakes={redFlagsItems}
      />


      {/* ─── 18. FINAL ANSWER (ConclusionSection Component) ─── */}
      <ConclusionSection sections={finalAnswerSections} />

      {/* ─── 19. 15 FREQUENTLY ASKED QUESTIONS (FAQAccordion) ─── */}
      <FAQAccordion data={pageData.faqs} />

      {/* ─── 20. CENTER CTA BANNER ─── */}
      <CenterCTA
        title={pageData.finalAnswer.ctaSection.headline}
        description={pageData.finalAnswer.ctaSection.subheadline}
        buttonText="Plan My Luxury Journey"
        buttonLink="/contact"
      />
    </div>
  );
};

export default DoesItCostMoreToBookThroughATravelAgent;
