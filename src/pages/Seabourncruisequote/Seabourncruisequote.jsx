import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  User,
  Mail,
  Phone,
  Compass,
  Calendar,
  Users,
  Home,
  Ship,
  Tag,
  Award,
  Heart,
  Check,
  ArrowRight,
  Sparkles,
  Quote
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import data from "./data.json";

// Assets from RequestSeabournCruiseQuote (SEO-optimized filenames)
import heroBgImg from "../../assets/RequestSeabournCruiseQuote/request-a-seabourn-cruise-quote-hero.jpg";
import introImg from "../../assets/RequestSeabournCruiseQuote/start-planning-your-seabourn-cruise-intro.jpg";
import questImg from "../../assets/RequestSeabournCruiseQuote/seabourn-quest-ship-quote.jpg";
import encoreImg from "../../assets/RequestSeabournCruiseQuote/seabourn-encore-ship-quote.jpg";
import ovationImg from "../../assets/RequestSeabournCruiseQuote/seabourn-ovation-ship-quote.jpg";
import ventureImg from "../../assets/RequestSeabournCruiseQuote/seabourn-venture-ship-quote.jpg";
import pursuitImg from "../../assets/RequestSeabournCruiseQuote/seabourn-pursuit-ship-quote.jpg";
import shipCtaImg from "../../assets/RequestSeabournCruiseQuote/which-seabourn-ship-right-for-you-advisor.jpg";
import guideCtaImg from "../../assets/RequestSeabournCruiseQuote/explore-the-complete-seabourn-cruises-guide-cta.jpg";
import beforeCruiseImg from "../../assets/RequestSeabournCruiseQuote/seabourn-before-your-cruise-planning.jpg";
import duringCruiseImg from "../../assets/RequestSeabournCruiseQuote/seabourn-during-your-cruise-experience.jpg";
import afterCruiseImg from "../../assets/RequestSeabournCruiseQuote/seabourn-after-your-cruise-extensions.jpg";
import travelStyleCtaImg from "../../assets/RequestSeabournCruiseQuote/traveling-solo-as-a-couple-or-with-family-cta.jpg";
import finalCtaImg from "../../assets/RequestSeabournCruiseQuote/request-your-personalized-seabourn-quote-final-cta.jpg";

// UI Components
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import CardGrid from "../../components/ui/CardGrid";
import ElegantFleetShowcase from "../../components/ui/ElegantFleetShowcase";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import BrandPillarsShowcase from "../../components/ui/BrandPillarsShowcase";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import SaltJourneyTimeline from "../../components/ui/SaltJourneyTimeline";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournCruiseQuoteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#webpage",
      "url": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/",
      "name": "Request a Seabourn Cruise Quote | Luxury Cruise Planning",
      "headline": "Request a Seabourn Cruise Quote",
      "description":
        "Request a personalized Seabourn cruise quote from Trips & Ships Luxury Travel. Get expert help choosing your Seabourn ship, suite, itinerary, dates and available offers.",
      "keywords": [
        "Seabourn cruise quote",
        "Seabourn cruise pricing",
        "Seabourn cruise travel advisor",
        "Seabourn luxury cruise planning",
        "Seabourn cruise booking",
        "Seabourn cruise specialist",
        "Seabourn cruise vacation",
        "Seabourn suite quote",
        "Seabourn cruise deals",
        "Seabourn cruise offers",
        "Seabourn itinerary planning",
        "luxury cruise quote",
        "Seabourn travel advisor",
        "book a Seabourn cruise"
      ],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel"
      },
      "breadcrumb": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#quote-service"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Cruises", "item": "https://www.tripsandships.com/seabourn-cruises/" },
        { "@type": "ListItem", "position": 3, "name": "Request a Seabourn Cruise Quote", "item": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#quote-service",
      "name": "Seabourn Cruise Quote",
      "serviceType": "Luxury Seabourn Cruise Planning and Quote Service",
      "description":
        "Personalized Seabourn cruise planning and quote assistance covering ships, suites, itineraries, travel dates, pricing, promotions, loyalty benefits and related travel arrangements.",
      "url": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/"
      },
      "brand": { "@type": "Brand", "name": "Seabourn" },
      "areaServed": { "@type": "Place", "name": "Worldwide" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Seabourn Cruise Planning Options",
        "itemListElement": [
          { "@type": "Offer", "name": "Seabourn Ocean Cruise Planning", "description": "Planning assistance for Seabourn ocean-going luxury cruises." },
          { "@type": "Offer", "name": "Seabourn Expedition Cruise Planning", "description": "Planning assistance for Seabourn expedition voyages including Antarctica, the Arctic, Greenland and the Kimberley." },
          { "@type": "Offer", "name": "Seabourn World Cruise Planning", "description": "Planning assistance for Seabourn World Cruises and Grand Voyages." },
          { "@type": "Offer", "name": "Seabourn Suite Planning", "description": "Assistance comparing suite categories, locations, verandas, amenities and overall value." },
          { "@type": "Offer", "name": "Seabourn Itinerary Planning", "description": "Assistance comparing destinations, ports, sailing dates and cruise lengths." }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#quote-details",
      "name": "Seabourn Quote Request Details",
      "description": "Information travelers can provide when requesting a personalized Seabourn cruise quote.",
      "numberOfItems": 9,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Preferred Destination", "description": "The destination or region the traveler would like to visit." },
        { "@type": "ListItem", "position": 2, "name": "Travel Dates", "description": "Preferred travel dates and whether those dates are flexible." },
        { "@type": "ListItem", "position": 3, "name": "Number of Travelers", "description": "The number of travelers included in the cruise request." },
        { "@type": "ListItem", "position": 4, "name": "Preferred Suite Category", "description": "Preferred suite category or accommodation level." },
        { "@type": "ListItem", "position": 5, "name": "Approximate Budget", "description": "A budget range that helps narrow down realistic Seabourn options." },
        { "@type": "ListItem", "position": 6, "name": "Special Occasions", "description": "Special occasions such as anniversaries, honeymoons, birthdays, retirements or family celebrations." },
        { "@type": "ListItem", "position": 7, "name": "Cruise Length", "description": "Preferred voyage length, including shorter cruises, extended voyages or World Cruises." },
        { "@type": "ListItem", "position": 8, "name": "Previous Seabourn Experience", "description": "Information about previous Seabourn cruises and past-guest experience." },
        { "@type": "ListItem", "position": 9, "name": "Loyalty Status and Travel Preferences", "description": "Seabourn Club status and other preferences that may affect cruise recommendations." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#ships",
      "name": "Seabourn Ships Available for Quote Requests",
      "description": "Seabourn ships listed on the quote request page.",
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Seabourn Quest" },
        { "@type": "ListItem", "position": 2, "name": "Seabourn Encore" },
        { "@type": "ListItem", "position": 3, "name": "Seabourn Ovation" },
        { "@type": "ListItem", "position": 4, "name": "Seabourn Venture" },
        { "@type": "ListItem", "position": 5, "name": "Seabourn Pursuit" },
        { "@type": "ListItem", "position": 6, "name": "Not Sure" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#suite-categories",
      "name": "Seabourn Suite Categories for Quote Requests",
      "description": "Suite categories travelers can select or discuss when requesting a Seabourn cruise quote.",
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Veranda Suite" },
        { "@type": "ListItem", "position": 2, "name": "Penthouse Suite" },
        { "@type": "ListItem", "position": 3, "name": "Premium Suite" },
        { "@type": "ListItem", "position": 4, "name": "Signature Suite" },
        { "@type": "ListItem", "position": 5, "name": "Expedition Suite" },
        { "@type": "ListItem", "position": 6, "name": "Not Sure" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#destinations",
      "name": "Seabourn Cruise Quote Destinations",
      "description": "Destination examples available for Seabourn quote requests.",
      "numberOfItems": 9,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Mediterranean" },
        { "@type": "ListItem", "position": 2, "name": "Alaska" },
        { "@type": "ListItem", "position": 3, "name": "Antarctica" },
        { "@type": "ListItem", "position": 4, "name": "Arctic & Greenland" },
        { "@type": "ListItem", "position": 5, "name": "Kimberley" },
        { "@type": "ListItem", "position": 6, "name": "South America" },
        { "@type": "ListItem", "position": 7, "name": "Northern Europe" },
        { "@type": "ListItem", "position": 8, "name": "Asia" },
        { "@type": "ListItem", "position": 9, "name": "World Cruise" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#planning-services",
      "name": "Seabourn Cruise Planning Services",
      "description": "Areas of cruise and luxury travel planning assistance offered by Trips & Ships Luxury Travel.",
      "numberOfItems": 10,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Seabourn Ship Selection", "description": "Help choosing between Seabourn ocean ships and expedition vessels." },
        { "@type": "ListItem", "position": 2, "name": "Suite Recommendations", "description": "Help comparing suite size, location, veranda configuration, views, accessibility and amenities." },
        { "@type": "ListItem", "position": 3, "name": "Itinerary Comparisons", "description": "Help comparing destinations, ports and sailing dates." },
        { "@type": "ListItem", "position": 4, "name": "Cruise Pricing", "description": "Help evaluating Seabourn cruise pricing and available options." },
        { "@type": "ListItem", "position": 5, "name": "Promotion Monitoring", "description": "Help reviewing applicable Seabourn promotions and special offers." },
        { "@type": "ListItem", "position": 6, "name": "Seabourn Club Considerations", "description": "Help taking applicable Seabourn Club status and benefits into consideration." },
        { "@type": "ListItem", "position": 7, "name": "Pre- and Post-Cruise Arrangements", "description": "Help coordinating hotels, transfers and other travel before or after the cruise." },
        { "@type": "ListItem", "position": 8, "name": "Special Occasions", "description": "Planning considerations for anniversaries, honeymoons, birthdays, retirements and other milestones." },
        { "@type": "ListItem", "position": 9, "name": "Private Travel Arrangements", "description": "Assistance with private travel arrangements connected to the Seabourn vacation." },
        { "@type": "ListItem", "position": 10, "name": "Destination Planning", "description": "Help coordinating the broader destination experience around the cruise." }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#how-it-works",
      "name": "How the Seabourn Cruise Quote Process Works",
      "description": "Five steps for requesting and refining a personalized Seabourn cruise quote.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Tell Us What You Want", "text": "Submit your preferred destination, dates, travelers and other relevant details." },
        { "@type": "HowToStep", "position": 2, "name": "We Review Your Preferences", "text": "Your travel priorities, desired experience, suite and itinerary are reviewed." },
        { "@type": "HowToStep", "position": 3, "name": "We Identify Options", "text": "Potential Seabourn sailings are evaluated based on availability, itinerary, suite category and applicable offers." },
        { "@type": "HowToStep", "position": 4, "name": "We Discuss the Choices", "text": "Review the potential options and ask questions before deciding." },
        { "@type": "HowToStep", "position": 5, "name": "We Refine the Trip", "text": "Once the right cruise is identified, the details of the broader luxury vacation can be refined." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsandships.com/seabourn-cruises/request-a-quote/#faq",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }
  ]
};

const SeabournCruiseQuote = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    flexible: "",
    travelers: "",
    suitesNeeded: "",
    ship: "",
    suite: "",
    cruiseLength: "",
    budget: "",
    sailedBefore: "",
    clubMember: "",
    previousExperience: "",
    specialRequests: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addTag = (tag) => {
    setForm((prev) => ({
      ...prev,
      specialRequests: prev.specialRequests ? `${prev.specialRequests}, ${tag}` : tag
    }));
  };

  const useExample = (text) => {
    setForm((prev) => ({ ...prev, specialRequests: text }));
    scrollToForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full bg-white text-navy-950 font-sans antialiased">
      <Helmet>
        <title>Request a Seabourn Cruise Quote | Luxury Cruise Planning</title>
        <meta name="title" content="Request a Seabourn Cruise Quote | Trips & Ships" />
        <meta
          name="description"
          content="Request a personalized Seabourn cruise quote from Trips & Ships Luxury Travel. Get expert help choosing your Seabourn ship, suite, itinerary, dates and available offers."
        />
        <link rel="canonical" href="https://www.tripsandships.com/seabourn-cruises/request-a-quote/" />
        <script type="application/ld+json">{JSON.stringify(seabournCruiseQuoteSchema)}</script>
      </Helmet>

      <Nav />

      {/* ── 1. HERO SECTION ── */}
      <ComparisonHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.intro}
        badge={data.hero.badge}
        backgroundImage={heroBgImg}
        secondaryCtaText={data.hero.ctaText || "Request a Quote"}
        secondaryCtaLink={data.hero.ctaLink || "/contact"}
      />

      <div id="content">
        {/* ── 2. EDITORIAL INTRO: START PLANNING ── */}
        <EditorialIntroSection
          badge={data.introSection.badge}
          title={data.introSection.title}
          subtitle={data.introSection.subtitle}
          paragraphs={data.introSection.paragraphs}
          highlights={data.introSection.highlights}
          image={introImg}
        />
      </div>

      {/* ── 3. WHY REQUEST A PERSONALIZED QUOTE (CARD GRID) ── */}
      <CardGrid
        title={data.whyQuote.title}
        subtitle={data.whyQuote.subtitle}
        cards={data.whyQuote.cards}
        columns={3}
      />

      {/* ── 4. DEDICATED LUXURY QUOTE REQUEST FORM ── */}
      <section className="w-full py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80" id="quote-form" ref={formRef}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold block mb-3">
              YOUR QUOTE REQUEST
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4 tracking-tight">
              Tell Us About Your Seabourn Cruise
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-5"></div>
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Use the quote request form below to provide the details that are most important to you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-xl border border-gold-200/60 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Check size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-3xl text-navy-950 mb-3">
                Thank You, {form.firstName || "Traveler"}!
              </h3>
              <p className="font-sans text-slate-600 text-base lg:text-lg leading-relaxed max-w-lg mx-auto font-light mb-8">
                Your Seabourn cruise quote request has been received. A dedicated luxury cruise advisor from Trips & Ships will be in touch shortly with personalized recommendations and current promotions.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-950 text-white rounded-full font-sans text-sm font-bold uppercase tracking-wider hover:bg-navy-900 transition-all shadow-md"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-slate-200 space-y-10">
              
              {/* Group 1: Contact Info */}
              <div>
                <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-ice-100 text-navy-900 flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 font-medium">Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor"
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@example.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Trip Details */}
              <div>
                <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-ice-100 text-navy-900 flex items-center justify-center">
                    <Compass size={16} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 font-medium">Trip Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Preferred Destination</label>
                    <select
                      value={form.destination}
                      onChange={(e) => updateField("destination", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    >
                      <option value="">Select a destination</option>
                      {data.formOptions.destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Preferred Travel Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. June 2027, or flexible"
                      value={form.travelDates}
                      onChange={(e) => updateField("travelDates", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Are Your Dates Flexible?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Somewhat"].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => updateField("flexible", opt)}
                        className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                          form.flexible === opt
                            ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                            : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Number of Travelers</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="2"
                      value={form.travelers}
                      onChange={(e) => updateField("travelers", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Number of Suites Needed</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="1"
                      value={form.suitesNeeded}
                      onChange={(e) => updateField("suitesNeeded", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Group 3: Cruise Preferences */}
              <div>
                <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-ice-100 text-navy-900 flex items-center justify-center">
                    <Ship size={16} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 font-medium">Cruise Preferences</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Preferred Seabourn Ship</label>
                    <select
                      value={form.ship}
                      onChange={(e) => updateField("ship", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    >
                      <option value="">Select a ship</option>
                      {data.formOptions.ships.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Suite Category</label>
                    <select
                      value={form.suite}
                      onChange={(e) => updateField("suite", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    >
                      <option value="">Select a suite</option>
                      {data.formOptions.suites.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Cruise Length</label>
                    <select
                      value={form.cruiseLength}
                      onChange={(e) => updateField("cruiseLength", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                    >
                      <option value="">Select a length</option>
                      {data.formOptions.lengths.map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Group 4: Budget */}
              <div>
                <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-ice-100 text-navy-900 flex items-center justify-center">
                    <Tag size={16} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 font-medium">Budget</h3>
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Approximate Cruise Budget</label>
                  <input
                    type="text"
                    placeholder="e.g. $10,000 – $15,000 per person"
                    value={form.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm mb-2"
                  />
                  <p className="font-sans text-xs text-slate-500 font-light">
                    Providing a budget range helps your advisor focus on realistic options rather than presenting unsuitable choices.
                  </p>
                </div>
              </div>

              {/* Group 5: Previous Seabourn Experience */}
              <div>
                <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-ice-100 text-navy-900 flex items-center justify-center">
                    <Award size={16} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 font-medium">Previous Seabourn Experience</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Sailed With Seabourn Before?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Yes", "No"].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => updateField("sailedBefore", opt)}
                          className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                            form.sailedBefore === opt
                              ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                              : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Seabourn Club Member?</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Yes", "No", "Not Sure"].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => updateField("clubMember", opt)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                            form.clubMember === opt
                              ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                              : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Previous Sailings & Loyalty Status</label>
                  <textarea
                    rows={2}
                    placeholder="If you are a returning Seabourn guest, include information about your previous sailings, sailed days, or loyalty tier."
                    value={form.previousExperience}
                    onChange={(e) => updateField("previousExperience", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm"
                  />
                </div>
              </div>

              {/* Group 6: Special Requests & Interactive Tags */}
              <div>
                <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-ice-100 text-navy-900 flex items-center justify-center">
                    <Heart size={16} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 font-medium">Special Requests & Celebrations</h3>
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Tell us anything that would help us personalize your recommendation:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Anniversary, honeymoon, accessibility requirements, connecting suites, pre- or post-cruise travel..."
                    value={form.specialRequests}
                    onChange={(e) => updateField("specialRequests", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ts-gold/40 focus:border-ts-gold transition-all text-sm mb-4"
                  />
                  <div className="flex flex-wrap gap-2">
                    {data.formOptions.specialRequestTags.map((tag, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => addTag(tag)}
                        className="px-3 py-1.5 rounded-lg bg-ice-50 hover:bg-ice-100 text-navy-800 border border-ice-200/80 font-sans text-xs font-medium transition-colors cursor-pointer"
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-slate-100 text-center sm:text-left">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy-950 text-white font-sans text-sm font-bold uppercase tracking-widest rounded-full shadow-xl hover:bg-navy-900 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Request My Seabourn Quote
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── 5. NOT SURE WHICH CRUISE IS RIGHT (INSPIRATIONAL EXAMPLES) ── */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold block mb-3">
              NO PRESSURE TO DECIDE
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4 tracking-tight">
              {data.notSureSection.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              {data.notSureSection.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {data.notSureSection.examples.map((ex, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-ts-gold mb-6 shadow-sm">
                    <Quote size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-navy-600 block mb-2">
                    {ex.label}
                  </span>
                  <p className="font-display text-lg text-navy-950 italic leading-relaxed mb-6">
                    "{ex.text}"
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => useExample(ex.text)}
                  className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-ts-gold hover:text-navy-950 transition-colors pt-4 border-t border-slate-200/60"
                >
                  Use This Example in Form <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CHOOSING THE RIGHT SEABOURN SHIP (FLEET SHOWCASE) ── */}
      <ElegantFleetShowcase
        title={data.fleetSection.title}
        subtitle={data.fleetSection.subtitle}
        ships={data.fleetSection.ships.map((ship, idx) => {
          const fleetImages = [
            questImg,
            encoreImg,
            ovationImg,
            ventureImg,
            pursuitImg,
          ];
          return {
            name: ship.title,
            atmosphere: ship.subtitle,
            image: fleetImages[idx],
            launched: ship.tags?.[1] || "Ultra-Luxury",
            description: ship.description,
            guests: ship.tags?.[0]?.replace(/\s*Guests/i, "") || "Luxury Suites",
            bestFor: ship.tags?.[2] || ship.subtitle
          };
        })}
      />

      {/* ── 7. SHIP SELECTION CTA ── */}
      <CenterCTA
        title={data.ctas.shipCta.title}
        description={data.ctas.shipCta.description}
        buttonText={data.ctas.shipCta.buttonText}
        buttonLink={data.ctas.shipCta.buttonLink}
        image={shipCtaImg}
        theme="dark"
      />

      {/* ── 8. CHOOSING THE RIGHT SUITE (GENERIC CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title={data.suiteSection.title}
        subtitle={data.suiteSection.subtitle}
        cards={data.suiteSection.cards}
      />

      {/* ── 9. SPECIALIZED VOYAGE PLANNING (TRAVELER PERSONA CARDS) ── */}
      <TravelerPersonaCards
        title={data.specializedPlanning.title}
        subtitle={data.specializedPlanning.subtitle}
        personas={data.specializedPlanning.personas}
      />

      {/* ── 10. LOOKING FOR SEABOURN OFFERS? (BRAND PILLARS SHOWCASE) ── */}
      <BrandPillarsShowcase
        data={data.offersSection}
      />

      {/* ── 11. WHY WORK WITH TRIPS & SHIPS LUXURY TRAVEL? ── */}
      <GenericChecklistCards
        title={data.whyWorkWithUs.title}
        subtitle={data.whyWorkWithUs.subtitle}
        cards={data.whyWorkWithUs.cards}
      />

      {/* ── 12. RELATED GUIDE CTA ── */}
      <CenterCTA
        title={data.ctas.guideCta.title}
        description={data.ctas.guideCta.description}
        buttonText={data.ctas.guideCta.buttonText}
        buttonLink={data.ctas.guideCta.buttonLink}
        image={guideCtaImg}
        theme="dark"
      />

      {/* ── 13. MORE THAN A CRUISE: PLAN THE COMPLETE JOURNEY ── */}
      <ThreeColumnGrid
        title={data.completeJourney.title}
        subtitle={data.completeJourney.subtitle}
        items={data.completeJourney.items?.map((item, idx) => {
          const journeyImages = [beforeCruiseImg, duringCruiseImg, afterCruiseImg];
          return {
            ...item,
            image: journeyImages[idx] || item.image
          };
        })}
      />

      {/* ── 14. SEABOURN CRUISE QUOTE: WHAT HAPPENS NEXT? (TIMELINE) ── */}
      <SaltJourneyTimeline
        data={data.processSteps}
      />

      {/* ── 15. PLANNING FOR YOUR TRAVEL STYLE (TRAVELER PERSONA CARDS) ── */}
      <TravelerPersonaCards
        title={data.travelStyles.title}
        subtitle={data.travelStyles.subtitle}
        personas={data.travelStyles.personas}
      />

      {/* ── 16. TRAVEL STYLES CTA ── */}
      <CenterCTA
        title={data.ctas.travelStyleCta.title}
        description={data.ctas.travelStyleCta.description}
        buttonText={data.ctas.travelStyleCta.buttonText}
        buttonLink={data.ctas.travelStyleCta.buttonLink}
        image={travelStyleCtaImg}
        theme="dark"
      />

      {/* ── 17. WHAT INFORMATION SHOULD I PROVIDE? (GENERIC CHECKLIST CARDS) ── */}
      <GenericChecklistCards
        title={data.minimumInfoSection.title}
        subtitle={data.minimumInfoSection.subtitle}
        cards={data.minimumInfoSection.cards}
      />

      {/* ── 18. ANGELA HUGHES AUTHORITY BOX ── */}
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

      {/* ── 19. FREQUENTLY ASKED QUESTIONS (12 FAQS) ── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Everything travelers need to know before requesting a Seabourn cruise quote.",
          faqs: data.faqs
        }}
      />

      {/* ── 20. FINAL RECOMMENDATION & VERDICT ── */}
      <ConclusionSection
        sections={[
          {
            heading: data.finalVerdict.title,
            paragraphs: [
              ...data.finalVerdict.paragraphs,
              data.finalVerdict.recommendation
            ]
          }
        ]}
      />

      {/* ── 21. FINAL CTA ── */}
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

export default SeabournCruiseQuote;