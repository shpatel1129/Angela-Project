import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Compass,
  Ship,
  Check,
  Award,
  Sparkles,
  Plane,
  Hotel,
  MapPin,
  HelpCircle,
  ShieldCheck,
  DollarSign,
  Users,
  Calendar,
  AlertCircle,
  FileText,
  UserCheck,
  Heart,
  Globe,
  Star,
  Luggage,
  Clock,
  ArrowRight
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import LuxuryZigZagShowcase from "../../components/ui/LuxuryZigZagShowcase";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import ProsConsCards from "../../components/ui/ProsConsCards";
import CardGrid from "../../components/ui/CardGrid";
import TravelerProfileTabs from "../../components/ui/TravelerProfileTabs";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import AuthorityGrid from "../../components/ui/AuthorityGrid";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import DetailedInclusionsList from "../../components/ui/DetailedInclusionsList";
import InclusionCheckerGrid from "../../components/ui/InclusionCheckerGrid";
import AuthorityBox from "../../components/ui/AuthorityBox";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import FadeIn from "../../components/ui/FadeIn";

// Data Source
import data from "./data.json";

const BookSeabournDirectVsTravelAdvisor = () => {

  // Persona Cards Data for GenericChecklistCards
  const travelerPersonaCardsData = data.travelerTypes.map((t) => ({
    title: t.title,
    badge: t.type,
    items: [
      t.lead,
      ...t.points.map((p) => ` ${p}`),
      t.verdict ? `Verdict: ${t.verdict}` : t.directAlternative ? `Alternative: ${t.directAlternative}` : ""
    ].filter(Boolean)
  }));

  // ── 8 Pillars Image-based Data for LuxuryZigZagShowcase ──
  // =========================================================================
  // IMAGES COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES
  // =========================================================================
  /*
  const pillarImages = [
    "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
  ];
  */
  const pillarImages = []; // Commented-out image slots ready

  const pillarsZigZagItems = [
    {
      title: data.whyUseAdvisorPillars.pillars[0].title,
      category: "Pillar 01 — Voyage Selection",
      description: data.whyUseAdvisorPillars.pillars[0].description,
      bestFor: `An advisor can help compare: ${data.whyUseAdvisorPillars.pillars[0].items.join(", ")}.`,
      placeholderLabel: "PILLAR 1: CHOOSING THE RIGHT SEABOURN SAILING"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[1].title,
      category: "Pillar 02 — Suite Architecture",
      description: `${data.whyUseAdvisorPillars.pillars[1].description} ${data.whyUseAdvisorPillars.pillars[1].footnote}`,
      bestFor: `Key Comparisons: ${data.whyUseAdvisorPillars.pillars[1].items.join(", ")}.`,
      placeholderLabel: "PILLAR 2: SELECTING THE RIGHT SEABOURN SUITE"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[2].title,
      category: "Pillar 03 — Inclusions & Budget",
      description: `${data.whyUseAdvisorPillars.pillars[2].description} ${data.whyUseAdvisorPillars.pillars[2].footnote}`,
      bestFor: `Included: ${data.whyUseAdvisorPillars.pillars[2].inclusions.join(", ")} | Additional Expenses: ${data.whyUseAdvisorPillars.pillars[2].expenses.join(", ")}.`,
      placeholderLabel: "PILLAR 3: UNDERSTANDING SEABOURN'S INCLUSIONS"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[3].title,
      category: "Pillar 04 — Flight Coordination",
      description: `${data.whyUseAdvisorPillars.pillars[3].description} ${data.whyUseAdvisorPillars.pillars[3].footnote}`,
      bestFor: `Connected Route: ${data.whyUseAdvisorPillars.pillars[3].routingFlow}`,
      placeholderLabel: "PILLAR 4: PLANNING FLIGHTS AROUND SEABOURN"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[4].title,
      category: "Pillar 05 — Pre-Cruise Hotel Stays",
      description: `${data.whyUseAdvisorPillars.pillars[4].description} ${data.whyUseAdvisorPillars.pillars[4].footnote}`,
      bestFor: `Itinerary Flow: ${data.whyUseAdvisorPillars.pillars[4].exampleSteps.join(" → ")}.`,
      placeholderLabel: "PILLAR 5: PLANNING A PRE-CRUISE HOTEL"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[5].title,
      category: "Pillar 06 — Shore Experiences",
      description: `${data.whyUseAdvisorPillars.pillars[5].description} ${data.whyUseAdvisorPillars.pillars[5].footnote}`,
      bestFor: `Excursion Options: ${data.whyUseAdvisorPillars.pillars[5].options.join(", ")}.`,
      placeholderLabel: "PILLAR 6: SHORE EXCURSION PLANNING"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[6].title,
      category: "Pillar 07 — Milestone Celebrations",
      description: `${data.whyUseAdvisorPillars.pillars[6].description} ${data.whyUseAdvisorPillars.pillars[6].footnote}`,
      bestFor: `Celebrations Coordinated: ${data.whyUseAdvisorPillars.pillars[6].occasions.join(", ")}.`,
      placeholderLabel: "PILLAR 7: PLANNING SPECIAL OCCASIONS"
    },
    {
      title: data.whyUseAdvisorPillars.pillars[7].title,
      category: "Pillar 08 — Multi-Traveler Logistics",
      description: `${data.whyUseAdvisorPillars.pillars[7].description} ${data.whyUseAdvisorPillars.pillars[7].footnote}`,
      bestFor: `Group Coordination: ${data.whyUseAdvisorPillars.pillars[7].groups.join(", ")}.`,
      placeholderLabel: "PILLAR 8: COORDINATING MULTIPLE TRAVELERS"
    }
  ];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-gold-500 selection:text-white">
      {/* ── SEO Metadata with react-helmet-async ── */}
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="description" content={data.meta.metaDescription} />
        <meta name="keywords" content={data.meta.secondaryKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.tripsandships.com${data.meta.suggestedUrl}`} />
        <meta property="og:title" content={data.meta.metaTitle} />
        <meta property="og:description" content={data.meta.metaDescription} />
        <meta property="og:url" content={`https://www.tripsandships.com${data.meta.suggestedUrl}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      {/* ── Global Navigation ── */}
      <Nav />

      {/* ── 1. Hero Section ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        stats={data.hero.stats}
      />

      {/* ── 2. Editorial Introduction ── */}
      <EditorialIntroSection
        title={data.intro.title}
        paragraphs={data.intro.paragraphs}
      />

      {/* Core Question Callout */}
      <section className="py-8 bg-slate-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">
                THE CORE LUXURY PLANNING QUESTION
              </span>
              <p className="text-xl md:text-2xl font-serif text-slate-900 italic">
                "{data.intro.paragraphs[3]}"
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. Quick Answer Comparison Table ── */}
    
        <ComparisonTable data={data.quickAnswerTable} />
     

      {/* ── 4. What Is the Difference Section ── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              CORE DISTINCTION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-6">
              {data.difference.title}
            </h2>
            <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <div className="space-y-4 text-ice-100 text-base md:text-lg font-light leading-relaxed">
              {data.difference.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-serif text-gold-400 mb-6 text-center">
              {data.difference.distinctionListTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.difference.distinctionList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <Compass className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Pricing, Rates & Value Realities (CostValueAnalysisCards) ── */}
      <CostValueAnalysisCards
        title={data.pricingAndCost.isCheaperDirect.title}
        subtitle={`${data.pricingAndCost.isCheaperDirect.lead} ${data.pricingAndCost.isCheaperDirect.reality}`}
        includedTitle={data.pricingAndCost.isCheaperDirect.advisorAccessTitle}
        extrasTitle="Pricing Assumptions & Total Value Reality"
        included={data.pricingAndCost.isCheaperDirect.advisorAccess.map((access) => ({
          title: access,
          description: "Potential booking opportunities available depending on agency partnerships, preferred consortium programs, and eligible sailings."
        }))}
        extras={[
          {
            title: "Common Assumption",
            description: data.pricingAndCost.isCheaperDirect.assumption
          },
          {
            title: "Pricing Dynamics",
            description: data.pricingAndCost.isCheaperDirect.reality
          },
          {
            title: "Total Vacation Comparison",
            description: data.pricingAndCost.isCheaperDirect.footnote
          }
        ]}
      />

    

      {/* ── 6. Why Luxury Travelers Use a Seabourn Travel Advisor (LuxuryZigZagShowcase) ── */}
      <LuxuryZigZagShowcase
        title={data.whyUseAdvisorPillars.title}
        subtitle={data.whyUseAdvisorPillars.lead}
        items={pillarsZigZagItems}
        images={pillarImages}
      />


      {/* ── 7. Simple Trips Direct vs When Travel Advisor Is Especially Useful (ShipPhilosophyFaceoff) ── */}
      <ShipPhilosophyFaceoff
        data={{
          title: "Simple Trips Direct vs. When a Travel Advisor Is Especially Useful",
          regent: {
            badge: "INDEPENDENT AUTONOMY",
            title: data.tripComplexityScenarios.simpleTripsDirect.title,
            description: `${data.tripComplexityScenarios.simpleTripsDirect.lead} ${data.tripComplexityScenarios.simpleTripsDirect.verdict}`,
            features: data.tripComplexityScenarios.simpleTripsDirect.points
          },
          viking: {
            badge: "HIGH VALUE & COMPLEX LOGISTICS",
            title: data.tripComplexityScenarios.whenAdvisorUseful.title,
            description: data.tripComplexityScenarios.whenAdvisorUseful.lead,
            features: data.tripComplexityScenarios.whenAdvisorUseful.scenarios.map(
              (sc) => `${sc.title}: ${sc.detail}`
            )
          }
        }}
        // regentImage="https://images.unsplash.com/photo-1548574505-5e2386136fb6?auto=format&fit=crop&w=1200&q=80"
        // vikingImage="https://images.unsplash.com/photo-1516495312341-3da872e27e7a?auto=format&fit=crop&w=1200&q=80"
      />

      {/* ── 8. Advantages & Limitations (Pros & Cons) (ProsConsCards) ── */}
      <div className="border-t border-slate-200">
        <ProsConsCards
          title={data.prosAndCons.directBooking.title}
          prosTitle={data.prosAndCons.directBooking.advantagesTitle}
          consTitle={data.prosAndCons.directBooking.limitationsTitle}
          bestFor={data.prosAndCons.directBooking.advantages.map(
            (adv) => `${adv.title}: ${adv.description}`
          )}
          notBestFor={data.prosAndCons.directBooking.limitations}
          bottomNote={data.prosAndCons.directBooking.limitationsSummary}
          bgClass="bg-slate-50"
        />

        <ProsConsCards
          title={data.prosAndCons.travelAdvisor.title}
          prosTitle={data.prosAndCons.travelAdvisor.advantagesTitle}
          consTitle={data.prosAndCons.travelAdvisor.limitationsTitle}
          bestFor={data.prosAndCons.travelAdvisor.advantages.map(
            (adv) => `${adv.title}: ${adv.description}`
          )}
          notBestFor={data.prosAndCons.travelAdvisor.limitations}
          bottomNote={data.prosAndCons.travelAdvisor.limitationsSummary}
          bgClass="bg-white"
        />
      </div>

      {/* ── 9. Critical Logistics: Cabins, Credits, Promotions, Changes & Insurance (CardGrid) ── */}
      <CardGrid
        title="Cabins, Amenities, Promotions & Support"
        subtitle="Critical questions luxury travelers ask when evaluating Seabourn direct booking vs. working with an advisor."
        columns={3}
        stagger={false}
        cards={[
          {
            icon: "Ship",
            title: data.expertInquiries.betterCabin.title,
            description: `${data.expertInquiries.betterCabin.lead} ${data.expertInquiries.betterCabin.footnote}`,
            bullets: [
              data.expertInquiries.betterCabin.practicalValueTitle,
              ...data.expertInquiries.betterCabin.points
            ]
          },
          {
            icon: "DollarSign",
            title: data.expertInquiries.onboardCredit.title,
            description: `${data.expertInquiries.onboardCredit.lead} ${data.expertInquiries.onboardCredit.description} ${data.expertInquiries.onboardCredit.footnote}`,
            bullets: [
              data.expertInquiries.onboardCredit.benefitsListTitle,
              ...data.expertInquiries.onboardCredit.benefits
            ]
          },
          {
            icon: "Tag",
            title: data.expertInquiries.promotions.title,
            description: `${data.expertInquiries.promotions.lead} (${data.expertInquiries.promotions.keyQuestion}) ${data.expertInquiries.promotions.advice}`,
            bullets: data.expertInquiries.promotions.factors
          },
          {
            icon: "ShieldCheck",
            title: data.expertInquiries.changesSupport.title,
            description: `Direct: ${data.expertInquiries.changesSupport.directVsAdvisor.direct} | Advisor: ${data.expertInquiries.changesSupport.directVsAdvisor.advisor} (${data.expertInquiries.changesSupport.footnote})`,
            bullets: [
              data.expertInquiries.changesSupport.reasonsTitle,
              ...data.expertInquiries.changesSupport.reasons
            ]
          },
          {
            icon: "ShieldAlert",
            title: data.expertInquiries.travelInsurance.title,
            description: `${data.expertInquiries.travelInsurance.lead} ${data.expertInquiries.travelInsurance.footnote}`,
            bullets: [
              data.expertInquiries.travelInsurance.concernsTitle,
              ...data.expertInquiries.travelInsurance.concerns
            ]
          }
        ]}
      />

      {/* ── 10. Destination Matchups: Alaska, Antarctica, Caribbean & Europe (TravelerProfileTabs) ── */}
      <TravelerProfileTabs
        title="Direct vs. Travel Advisor by Region"
        subtitle="DESTINATION-SPECIFIC LOGISTICS"
        profiles={data.destinationComparisons.map((dest) => ({
          name: dest.destination,
          tagline: `Region Showcase: ${dest.destination}`,
          quote: dest.title,
          recommendation: dest.routing
            ? `Journey Flow: ${dest.routing}`
            : dest.summary,
          reason: dest.lead,
          whyFits: [
            ...(dest.considerations || []),
            ...(dest.complexComponents || []),
            ...(dest.cities ? dest.cities.map((c) => `Pre/Post Extension: ${c}`) : []),
            ...(dest.routing ? [dest.summary] : [])
          ],
          /*
          image:
            dest.destination === "Alaska"
              ? "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
              : dest.destination === "Antarctica"
              ? "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
              : dest.destination === "Caribbean"
              ? "https://images.unsplash.com/photo-1548574505-5e2386136fb6?auto=format&fit=crop&w=1200&q=80"
              : "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
          */
          placeholderLabel: dest.destination
        }))}
      />

      {/* ── 11. Traveler Personas & Demographics (GenericChecklistCards) ── */}
      <GenericChecklistCards
        title="Who Benefits Most from an Advisor?"
        subtitle="TRAVELER DEMOGRAPHICS & STYLES"
        cards={travelerPersonaCardsData}
      />

      {/* ── 12. Advisor Vetting Checklist & Expert Questions (ExpertAuthorityChecklist) ── */}
      <ExpertAuthorityChecklist
        title={data.advisorVetting.questionsTitle}
        subtitle={data.advisorVetting.questionsLead}
        points={data.advisorVetting.questions}
      />

      {/* ── 13. Experience Verification Checklist (AuthorityGrid) ── */}
      <div className="border-t border-slate-200">
        <AuthorityGrid
          title={data.advisorVetting.experienceChecklistTitle}
          subtitle={`${data.advisorVetting.experienceChecklistLead} "${data.advisorVetting.summary}"`}
          items={data.advisorVetting.criteria.map((cr) => {
            const descriptions = {
              "Cruise-line specialization": "Direct on-ship experience and verified expertise across Seabourn's ocean and polar expedition fleets.",
              "Luxury travel credentials": "Recognized luxury travel affiliations, industry certifications, and top-tier consortium partnerships.",
              "Destination expertise": "Firsthand knowledge of complex destinations including Antarctica, the Arctic, Alaska, and Europe.",
              "Industry experience": "Decades of professional cruise advisory experience managing ultra-luxury reservations and client portfolios.",
              "Client reviews": "Documented track record of exceptional traveler feedback, repeat clientele, and verified five-star reviews.",
              "Supplier relationships": "Strong preferred partnerships that yield priority service, elite support, and exclusive amenities.",
              "Experience with complex itineraries": "Proven ability to seamlessly coordinate multi-leg air, pre/post luxury hotels, and private transfers.",
              "Knowledge of suites and ships": "In-depth understanding of deck plans, suite layouts, obstruction nuances, and optimal stateroom placement."
            };
            return {
              title: cr,
              description: descriptions[cr] || "Essential qualification benchmark for evaluating luxury cruise advisors."
            };
          })}
        />
      </div>

      {/* ── 14. Authority & Angela Hughes / Trips & Ships Credentials (ExpertCredentials) ── */}
      <ExpertCredentials
        authorImage={AboutImage}
        authorName="Angela Hughes"
        authorTitle="CEO of Trips & Ships Luxury Travel & Founder of Luxury Travel University"
        paragraphs={data.agencyAndAngelaHughes.angelaHughes.paragraphs}
        credentials={[
          "40+ Years of Luxury Travel & Cruise Planning Experience",
          "Founder of Luxury Travel University & Mentor to 140+ Travel Advisors",
          "Top-Tier Producer & Preferred Partner with Seabourn & Ultra-Luxury Fleets",
          "Extensive Global On-Ship Experience Across Seabourn Ocean & Polar Expedition Fleets",
          "Specialist in Polar Expeditions (Antarctica & Arctic), Alaska, Mediterranean & World Cruises"
        ]}
      />

      {/* ── 14. Agency Capabilities Box (DetailedInclusionsList) ── */}
      <DetailedInclusionsList
        title={data.agencyAndAngelaHughes.agency.title}
        intro={data.agencyAndAngelaHughes.agency.paragraphs}
        items={[
          {
            title: data.agencyAndAngelaHughes.agency.coordinationTitle,
            lists: [
              {
                title: "Full-Service Concierge Planning & Travel Coordination",
                items: data.agencyAndAngelaHughes.agency.services
              }
            ],
            highlight: {
              title: "Agency Philosophy",
              text: data.agencyAndAngelaHughes.agency.philosophy
            }
          }
        ]}
      />

      {/* ── 15. Decision Matrix: When to Book Direct vs When to Use an Advisor (InclusionCheckerGrid & AuthorityBox) ── */}
      <InclusionCheckerGrid
        eyebrow="DECISION ARCHITECTURE"
        title="Your Booking Pathway Blueprint"
        subtitle="Compare when booking directly is straightforward versus when using a Seabourn luxury travel advisor delivers maximum value, expertise, and peace of mind."
        inclusionsTitle={data.decisionChecklists.useAdvisor.title}
        exclusionsTitle={data.decisionChecklists.bookDirect.title}
        inclusions={data.decisionChecklists.useAdvisor.points}
        exclusions={data.decisionChecklists.bookDirect.points}
      />

      <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16">
        <AuthorityBox
          title={data.decisionChecklists.realQuestion.title}
          content={
            <div className="space-y-3">
              {data.decisionChecklists.realQuestion.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          }
          author="Angela Hughes, CEO & Luxury Cruise Specialist"
        />
      </div>

      {/* ── 15. FAQ Accordion (All 25 FAQs Verbatim) ── */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about booking Seabourn directly versus working with an expert luxury travel advisor.",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 16. Final Takeaway (ConclusionSection) ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalTakeaway.title,
            paragraphs: [
              data.finalTakeaway.question,
              ...data.finalTakeaway.paragraphs
            ]
          }
        ]}
      />

      {/* ── 17. Center CTA ── */}
      <CenterCTA
        title="Ready to Plan Your Perfect Seabourn Voyage?"
        description="Connect with Angela Hughes and the luxury travel specialists at Trips & Ships Luxury Travel for personalized suite recommendations, preferred benefits, and end-to-end itinerary coordination."
        buttonText="Request a Complimentary Seabourn Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default BookSeabournDirectVsTravelAdvisor;
