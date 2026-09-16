import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Navbar/Nav';
import data from './data.json';

// Assets
import AboutImage from '../../assets/AboutAngela3.jpeg';
// import HeroImage1 from '../../assets/ExploraJourneysvsSeabourn/ExploraCruise.webp';
// import HeroImage2 from '../../assets/ExploraJourneysvsSeabourn/Auckland-skyline-in-New-Zealand.jpg';
// import HeroImage4 from '../../assets/ExploraJourneysvsSeabourn/Asia-Ship-a-Long-Bay-Vietnam.webp';
// import ExploraOverview from '../../assets/ExploraJourneysvsSeabourn/Explora-Overview.webp';
// import SeabournOverview from '../../assets/ExploraJourneysvsSeabourn/Seabourn-Overview.jpg';
// import ExploraSuite from '../../assets/ExploraJourneysvsSeabourn/Suite-Services.webp';
// import SeabournSuite from '../../assets/ExploraJourneysvsSeabourn/Seabourn-Suite.jpg';
// import SpaExperience from '../../assets/ExploraJourneysvsSeabourn/explora-journeys-sunrise-pool-deck-luxury-yacht.webp';
// import ExploraDetination from '../../assets/ExploraJourneysvsSeabourn/ExploraDestination.webp';
// import SeabournDetination from '../../assets/ExploraJourneysvsSeabourn/SeabourPlace.jpg';
// import ExploraPool from '../../assets/ExploraJourneysvsSeabourn/explora-I-infinity-pool.webp';
// import ExploraDinig from '../../assets/ExploraJourneysvsSeabourn/Conservatory-Pool-Bar.jpg';
// import ExploraJournryDinig from '../../assets/ExploraJourneysvsSeabourn/ExploraDining.jpeg';
// import SeabourDinig from '../../assets/ExploraJourneysvsSeabourn/SeabournDining.jpg';
// import CTAImage from '../../assets/ExploraJourneysvsSeabourn/EXPLORA-Mediterranean.webp';

// import Experience from '../../assets/ExploraJourneysvsSeabourn/Ilulissat_Greenland_Jakobshavn_Glacier.jpg';
// import Experience1 from '../../assets/ExploraJourneysvsSeabourn/OnBoard_AfternoonTea.jpg';
// import Experience2 from '../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore.jpg';
// import Experience3 from '../../assets/ExploraJourneysvsSeabourn/Seabourn_Encor.jpg';
// import Experience4 from '../../assets/ExploraJourneysvsSeabourn/Seabourn_Encores.jpg';
// import Experience5 from '../../assets/ExploraJourneysvsSeabourn/Seabourn_Encore_PoolDeck.jpg';
// import Experience6 from '../../assets/ExploraJourneysvsSeabourn/SBN_Kusadasi_Turkey_Encore_ENC_Sunrise_Sail_In_Location_Drone.jpg';

// UI Components
import ComparisonHero from '../../components/ui/ComparisonHero';
import EditorialIntroSection from '../../components/ui/EditorialIntroSection';
import ContainedShowdown from '../../components/ui/ContainedShowdown';
import BrandShowcase from '../../components/ui/BrandShowcase';
import BentoGlassmorphismGrid from '../../components/ui/BentoGlassmorphismGrid';
import CenterCTA from '../../components/ui/CenterCTA';
import VideoEmbed from '../../components/ui/VideoEmbed';
import DestinationFlipCards from '../../components/ui/DestinationFlipCards';
import DynamicCulinaryShowcase from '../../components/ui/DynamicCulinaryShowcase';
import EditorialFeatureShowcase from '../../components/ui/EditorialFeatureShowcase';
import DestinationEditorialGrid from '../../components/ui/DestinationEditorialGrid';
import InclusionsSplitFeatures from '../../components/ui/InclusionsSplitFeatures';
import GrandBentoFeatures from '../../components/ui/GrandBentoFeatures';
import CostValueAnalysisCards from '../../components/ui/CostValueAnalysisCards';
import ScenicGallery from '../../components/ui/ScenicGallery';
import MistakesGrid from '../../components/ui/MistakesGrid';
import ProsConsCards from '../../components/ui/ProsConsCards';
import ExpertCredentials from '../../components/ui/ExpertCredentials';
import StepByStepGuide from '../../components/ui/StepByStepGuide';
import FAQAccordion from '../../components/ui/FAQAccordion';
import TrustSection from '../../components/ui/TrustSection';
import FadeIn from '../../components/ui/FadeIn';

const ExploraJourneysvsSeabourn = () => {
  // Section 3: Overview Brand Showcase Data
  const exploraBrandData = {
    name: data.overview.explora.title,
    // image: ExploraOverview,
    bestFor: data.overview.explora.badge,
    whatMakesItStandOut: `${data.overview.explora.lead} ${data.overview.explora.description}`,
    strengths: data.overview.explora.atmosphere.map((a) => `Atmosphere: ${a}`),
    considerations: data.overview.explora.appeals.map((a) => `Appeals to: ${a}`),
  };

  const seabournBrandData = {
    name: data.overview.seabourn.title,
    // image: SeabournOverview,
    bestFor: data.overview.seabourn.badge,
    whatMakesItStandOut: `${data.overview.seabourn.lead} ${data.overview.seabourn.description}`,
    strengths: data.overview.seabourn.atmosphere.map((a) => `Atmosphere: ${a}`),
    considerations: data.overview.seabourn.appeals.map((a) => `Appeals to: ${a}`),
  };

  // Section 4: Design & Experience Style Bento Items
  const designBentoItems = [
    {
      title: 'Explora Journeys — Boutique Luxury',
      description: `${data.designAtmosphere.explora.intro} ${data.designAtmosphere.explora.note}`,
      // image: ExploraPool,
      stat: 'Explora',
    },
    {
      title: 'Explora Design Highlights',
      description: data.designAtmosphere.explora.highlights.join(' • '),
      // image: ExploraOverview,
      stat: 'Modern',
    },
    {
      title: 'Seabourn — Classic Refinement',
      description: `${data.designAtmosphere.seabourn.intro} ${data.designAtmosphere.seabourn.note}`,
      // image: SeabournOverview,
      stat: 'Seabourn',
    },
    {
      title: 'Seabourn Elegance Highlights',
      description: data.designAtmosphere.seabourn.highlights.join(' • '),
      // image: SeabournSuite,
      stat: 'Refined',
    },
  ];

  // Section 6: Suites & Accommodations Flip Cards
  const suitesFlipItems = [
    {
      title: 'Explora Ocean Suites',
      // image: ExploraSuite,
      description: `${data.suitesComparison.explora.intro} ${data.suitesComparison.explora.note}`,
      features: data.suitesComparison.explora.features,
    },
    {
      title: 'Seabourn Ultra-Luxury Suites',
      // image: SeabournSuite,
      description: `${data.suitesComparison.seabourn.intro} ${data.suitesComparison.seabourn.note}`,
      features: data.suitesComparison.seabourn.features,
    },
    {
      title: 'Suite Comparison Summary',
      // image: HeroImage4,
      description:
        'Explora delivers larger contemporary oceanfront living areas and terraces, while Seabourn sets the industry standard for dedicated suite attendant hospitality and personalized butler attention.',
      features: [
        'Explora: Penthouse residential layout & heated marble floors',
        'Seabourn: Dedicated suite hosts & personalized in-suite dining',
        'Both: 100% ocean-view suites with private verandas',
      ],
    },
  ];

  // Section 7: Dining Showcase
  const diningItems = [
    {
      title: 'Explora Culinary Arts',
      description: `${data.diningComparison.venues[0].intro} ${data.diningComparison.venues[0].description}`,
    },
    {
      title: 'Seabourn Fine Dining',
      description: `${data.diningComparison.venues[1].intro} ${data.diningComparison.venues[1].description}`,
    },
    {
      title: 'Explora Pool & Lounge Dining',
      description:
        'Relaxed yet sophisticated poolside dining and conservatory lounges serving fresh Mediterranean and global gastronomy.',
    },
    {
      title: 'Seabourn Signature Venues',
      description:
        'Caviar in the Surf, Thomas Keller inspired culinary offerings, and sommelier-curated fine wine pairings.',
    },
  ];
  // const diningImages = [ExploraJournryDinig, SeabourDinig, ExploraDinig, Experience1];

  // Section 8: Wellness & Spa Features
  const spaFeatures = [
    ...data.wellnessAndSpa.explora.features.map((f) => ({
      title: f,
      description:
        "Explora's Ocean Wellness philosophy integrates thermal hydrotherapy, ocean-view fitness suites, open-air running tracks, and restorative mind-body wellness rituals.",
    })),
    {
      title: 'Seabourn Spa by Mindful Living',
      description: `${data.wellnessAndSpa.seabourn.note} Includes mindful living programs, thermal suites, and oceanfront massage cabanas.`,
    },
  ];

  // Section 9: Entertainment & Nightlife Showdown
  const entertainmentBrandA = {
    name: data.entertainmentNightlife.explora.name,
    // image: ExploraPool,
    features: [
      data.entertainmentNightlife.explora.intro,
      ...data.entertainmentNightlife.explora.features,
      data.entertainmentNightlife.explora.highlight,
    ],
  };
  const entertainmentBrandB = {
    name: data.entertainmentNightlife.seabourn.name,
    // image: Experience5,
    features: [
      data.entertainmentNightlife.seabourn.intro,
      ...data.entertainmentNightlife.seabourn.features,
      data.entertainmentNightlife.seabourn.highlight,
    ],
  };

  // Section 10: Destinations & Itineraries Editorial Grid
  const destinationItems = [
    {
      category: 'Global Exploration',
      title: data.destinationsItineraries.seabourn.name,
      description: `${data.destinationsItineraries.seabourn.intro} Highlights include: ${data.destinationsItineraries.seabourn.features.join('; ')}.`,
    },
    {
      category: 'Expedition & Polar',
      title: 'Seabourn Expeditions',
      description:
        'Antarctica, Arctic, Northwest Passage, and remote polar archipelagos with PC6-class hull luxury expedition vessels.',
    },
    {
      category: 'World Cruises',
      title: 'Seabourn Grand Voyages',
      description:
        'Extended worldwide journeys exploring hidden harbors, exotic islands, and cultural capital ports across 7 continents.',
    },
    {
      category: 'Ocean State of Mind',
      title: data.destinationsItineraries.explora.name,
      description: `${data.destinationsItineraries.explora.intro} Highlights include: ${data.destinationsItineraries.explora.features.join('; ')}.`,
    },
    {
      category: 'Mediterranean Elegance',
      title: 'Explora Mediterranean Sailings',
      description:
        'Riviera escapes, Greek Isles, boutique Italian ports, and late-night departures designed for immersive discovery.',
    },
    {
      category: 'Caribbean Retreats',
      title: 'Explora Caribbean Itineraries',
      description:
        'Secluded Caribbean cays, St. Barts, Virgin Gorda, and relaxed turquoise-water yacht harbor calls.',
    },
  ];
  // const destinationImages = [Experience, SeabournDetination, Experience6, ExploraDetination, HeroImage2, CTAImage];

  // Section 11: Service Style Comparison
  const serviceData = {
    headline: data.serviceStyle.title,
    description: data.serviceStyle.subtitle,
    pullQuote:
      'Service on Explora feels like a chic contemporary boutique hotel, while Seabourn offers the pinnacle of intuitive, white-glove ultra-luxury hospitality.',
    whatIsIncluded: {
      title: data.serviceStyle.explora.name,
      items: [
        { title: 'Warm & Contemporary', desc: data.serviceStyle.explora.intro },
        { title: 'Service Pillars', desc: data.serviceStyle.explora.tags.join(' • ') },
      ],
    },
    whatIsExtra: {
      title: data.serviceStyle.seabourn.name,
      items: [
        { title: 'Polished & Refined', desc: data.serviceStyle.seabourn.intro },
        { title: 'Service Pillars', desc: data.serviceStyle.seabourn.tags.join(' • ') },
      ],
    },
  };

  // Section 12: Which Feels More Luxurious Grand Bento
  const luxuryFeatures = [
    {
      title: data.luxuryDefinition.title,
      description: data.luxuryDefinition.note,
      // image: HeroImage1,
    },
    {
      title: data.luxuryDefinition.explora.label,
      description:
        'Contemporary atmosphere anchored by: ' +
        data.luxuryDefinition.explora.elements.join(', '),
      // image: ExploraOverview,
    },
    {
      title: data.luxuryDefinition.seabourn.label,
      description:
        'Heritage ultra-luxury distinguished by: ' +
        data.luxuryDefinition.seabourn.elements.join(', '),
      // image: SeabournOverview,
    },
    {
      title: 'The Deciding Factor',
      description:
        'Your preference between cutting-edge modern European hotel design and time-honored maritime luxury tradition.',
      // image: Experience3,
    },
  ];

  // Section 13: Pricing & Value Comparison Data
  const exploraValueItems = [
    {
      title: "Explora appeals strongly to travelers who prioritize the onboard luxury lifestyle experience.",
      description: "Comprehensive inclusions curated for modern luxury cruising.",
    },
    {
      title: "Lifestyle-oriented inclusions",
      description: "All-inclusive dining, premium beverages, and high-speed Wi-Fi.",
    },
    {
      title: "Modern luxury atmosphere",
      description: "European contemporary aesthetic with a relaxed, residential feel.",
    },
    {
      title: "Wellness-focused experiences",
      description: "Extensive Ocean Wellness spa, fitness, and open-air tracks.",
    },
    {
      title: "Large residential-style suites",
      description: "Spacious private oceanfront terraces and walk-in wardrobes.",
    },
    {
      title: "Relaxed luxury ambiance",
      description: "Unhurried, casual-elegant atmosphere with flexible dining.",
    },
    {
      title: "Ideal for travelers seeking a highly contemporary luxury experience at sea.",
      description: "Perfect for modern affluent travelers and luxury hotel lovers.",
    },
  ];

  const seabournValueItems = [
    {
      title: "Seabourn often delivers exceptional value for travelers focused on service and destination depth.",
      description: "Legendary ultra-luxury reputation built over decades of excellence.",
    },
    {
      title: "Refined personalized service",
      description: "Intuitive, dedicated suite host attention and classic hospitality.",
    },
    {
      title: "Destination-intensive itineraries",
      description: "Boutique ports, polar expedition landings, and world voyages.",
    },
    {
      title: "Traditional ultra-luxury atmosphere",
      description: "Sophisticated yacht-club elegance and formal refinement.",
    },
    {
      title: "Elegant culinary experiences",
      description: "Legendary fine dining, wine programming, and signature caviar.",
    },
    {
      title: "Strong itinerary reputation",
      description: "Decades of proven excellence across remote global destinations.",
    },
    {
      title: "Best suited for travelers who value classic luxury cruising and immersive destinations.",
      description: "Ideal for experienced luxury cruisers and cultural explorers.",
    },
  ];

  // Section 14: Experience Gallery
  const galleryItems = data.experienceShowcase.slides.map((s) => ({
    title: s.title,
    description: s.description,
    // image: ...
  }));

  // Section 15: Common Mistakes
  const mistakesData = {
    title: data.commonMistakes.title,
    items: data.commonMistakes.items,
  };

  // Section 22: Trust Sections Data
  const trustSections = [
    {
      heading: 'Why Book With Trips & Ships Luxury Travel',
      paragraphs: [
        'Choosing an ultra-luxury cruise involves far more than picking a date and stateroom category. It requires deep firsthand knowledge of ship ambiance, suite locations, dining nuances, and destination port logistics.',
        'Angela Hughes and Trips & Ships Luxury Travel provide unmatched luxury travel advisory services, securing priority dining reservations, complimentary onboard amenities, and personalized journey planning tailored exclusively to your preferences.',
      ],
      conclusion:
        'Personalized advice from verified luxury travel authorities ensures your voyage exceeds every expectation.',
    },
    {
      heading: 'Why Luxury Cruisers Choose Us',
      paragraphs: [
        'Over four decades of luxury travel relationships and direct access to cruise executive teams ensure VIP treatment at every step.',
      ],
      list: [
        '40+ Years Luxury Cruise Industry Authority',
        'Over 121+ Countries Explored Worldwide',
        'Exclusive Virtuoso & Travel Leaders VIP Amenities',
        'Direct Relationships with Explora & Seabourn Executives',
        'Bespoke Pre- and Post-Cruise Custom Itinerary Design',
      ],
      conclusion: 'UNPARALLELED ACCESS & LUXURY ADVOCACY',
    },
    {
      heading: 'Planning Your Luxury Cruise?',
      paragraphs: [
        'Let our master cruise advisors design a seamless, customized vacation experience tailored to your exact travel style.',
      ],
      list: [
        'Complimentary Stateroom Upgrades (when available)',
        'Exclusive Shipboard Spending Credits',
        'Private Shore Excursion Curation',
        'Dedicated Concierge Support Before, During, and After Sailing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-navy-900 selection:bg-gold-500 selection:text-white">
      {/* Helmet SEO & Schema */}
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.metaDescription} />
        <link rel="canonical" href={`https://www.tripsandships.com${data.seo.url}`} />
        <script type="application/ld+json">{JSON.stringify(data.schema)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={`${data.hero.lead}\n\n${data.hero.sublead}`}
        // backgroundImage={HeroImage1}
        secondaryCtaText="Request a Quote"
        secondaryCtaLink="/contact"
      />

      <div id="content">
        {/* Section 1: Editorial Intro */}
        <EditorialIntroSection
          eyebrow={data.introSection.eyebrow}
          heading={data.introSection.heading}
          paragraphs={data.introSection.paragraphs}
          highlights={data.introSection.highlights}
          badgeTitle={data.introSection.badgeTitle}
          badgeDescription={data.introSection.badgeDescription}
          image={AboutImage}
          placeholderLabel="Angela Hughes Luxury Authority"
        />

        {/* Section 2: Final Verdict Showdown */}
        <ContainedShowdown
          title={data.finalVerdict.title}
          brandA={{
            name: data.finalVerdict.explora.name,
            features: data.finalVerdict.explora.features,
            // image: ExploraOverview,
          }}
          brandB={{
            name: data.finalVerdict.seabourn.name,
            features: data.finalVerdict.seabourn.features,
            // image: SeabournOverview,
          }}
        />

        {/* Section 3: Overview Comparison Brand Showcases */}
        <div className="w-full bg-ice-50 pt-16 pb-4 border-b border-slate-200">
          <FadeIn className="text-center max-w-3xl mx-auto px-6 mb-8">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-3 block">
              Overview Comparison
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">
              {data.overview.title}
            </h2>
            <div className="w-16 h-0.5 bg-navy-800 mx-auto my-4"></div>
            <p className="font-sans text-lg text-slate-600">
              {data.overview.subtitle}
            </p>
          </FadeIn>
          <BrandShowcase brand={exploraBrandData} index={0} />
          <BrandShowcase brand={seabournBrandData} index={1} />
        </div>

        {/* Section 4: Ship Design & Atmosphere Bento Grid */}
        <BentoGlassmorphismGrid
          title={data.designAtmosphere.title}
          subtitle={data.designAtmosphere.subtitle}
          bentoItems={designBentoItems}
        />

        {/* Interlude CTA 1 (After 4 sections) */}
        <CenterCTA
          theme="light"
          title="Need Help Choosing Between Explora & Seabourn?"
          description="Connect with Angela Hughes and the Trips & Ships Luxury Travel team for personalized cabin selection, VIP perks, and voyage planning."
          buttonText="Plan Your Luxury Cruise"
          buttonLink="/contact"
        />

        {/* Section 5: Explora Naming Ceremony Video */}
        <VideoEmbed data={data.videoSection1} />

        {/* Section 6: Suites & Accommodations Flip Cards */}
        <DestinationFlipCards
          title={data.suitesComparison.title}
          subtitle={data.suitesComparison.subtitle}
          items={suitesFlipItems}
        />

        {/* Section 7: Dining Comparison Showcase */}
        <DynamicCulinaryShowcase
          title={data.diningComparison.title}
          subtitle={data.diningComparison.subtitle}
          items={diningItems}
          // images={diningImages}
        />

        {/* Section 8: Wellness & Spa Experience */}
        <EditorialFeatureShowcase
          title={data.wellnessAndSpa.title}
          subtitle={`${data.wellnessAndSpa.subtitle} — ${data.wellnessAndSpa.note}`}
          // image={SpaExperience}
          features={spaFeatures}
        />

        {/* Interlude CTA 2 (After 4 sections) */}
        <CenterCTA
          theme="light"
          title="Elevate Your Onboard Experience"
          description="Unlock exclusive stateroom upgrades, onboard ship credits, and tailored shore excursions on your upcoming voyage."
          buttonText="Request a Luxury Cruise Quote"
          buttonLink="/contact"
        />

        {/* Section 9: Entertainment & Nightlife */}
        <ContainedShowdown
          title={data.entertainmentNightlife.title}
          brandA={entertainmentBrandA}
          brandB={entertainmentBrandB}
        />

        {/* Section 10: Destinations & Itineraries Editorial Grid */}
        <DestinationEditorialGrid
          eyebrow="Global Deployment & Port Pacing"
          title={data.destinationsItineraries.title}
          subtitle={data.destinationsItineraries.subtitle}
          items={destinationItems}
          // images={destinationImages}
        />

        {/* Section 11: Service Style Comparison */}
        <InclusionsSplitFeatures data={serviceData} />

        {/* Section 12: Which Cruise Line Feels More Luxurious */}
        <GrandBentoFeatures
          title={data.luxuryDefinition.title}
          subtitle={data.luxuryDefinition.note}
          features={luxuryFeatures}
        />

        {/* Interlude CTA 3 (After 4 sections) */}
        <CenterCTA
          theme="light"
          title="Speak Directly With Angela Hughes"
          description="Get candid comparisons, cabin recommendations, and exclusive VIP booking amenities for your 2026-2027 voyage."
          buttonText="Schedule a Consultation"
          buttonLink="/contact"
        />

        {/* Section 13: Pricing & Value Comparison */}
        <CostValueAnalysisCards
          title="Pricing & Value Comparison"
          subtitle="Understanding the difference between lifestyle luxury and destination-focused value"
          includedTitle="Explora Journeys Value"
          extrasTitle="Seabourn Value"
          included={exploraValueItems}
          extras={seabournValueItems}
        />

        {/* Section 14: The Experience Onboard Gallery */}
        <ScenicGallery
          title={data.experienceShowcase.title}
          subtitle={data.experienceShowcase.subtitle}
          items={galleryItems}
        />

        {/* Section 15: Common Mistakes Travelers Make */}
        <MistakesGrid data={mistakesData} />

        {/* Section 16: Seabourn Luxury Cruise Video */}
        <section className="w-full py-16 bg-navy-950 text-white">
          <div className="max-w-[1050px] mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-5">
                {data.videoSection2.title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold mx-auto mt-4 mb-6"></div>
              <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                {data.videoSection2.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="w-full aspect-video bg-navy-900 rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
                <iframe
                  src={data.videoSection2.embedUrl}
                  title={data.videoSection2.title}
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Interlude CTA 4 (After 4 sections) */}
        <CenterCTA
          theme="light"
          title="Ready to Experience Ultra-Luxury Cruising?"
          description="Contact Angela Hughes to lock in special promotional pricing, complimentary suite upgrades, and bespoke pre/post cruise arrangements."
          buttonText="Request Your Custom Proposal"
          buttonLink="/contact"
        />

        {/* Section 17: Who Explora Journeys Is Best For */}
        <ProsConsCards
          title={data.whoExploraIsBestFor.title}
          prosTitle={data.whoExploraIsBestFor.prosTitle}
          consTitle={data.whoExploraIsBestFor.consTitle}
          bestFor={data.whoExploraIsBestFor.bestFor}
          notBestFor={data.whoExploraIsBestFor.notBestFor}
          bgClass="bg-white"
        />

        {/* Section 18: Who Seabourn Is Best For */}
        <ProsConsCards
          title={data.whoSeabournIsBestFor.title}
          prosTitle={data.whoSeabournIsBestFor.prosTitle}
          consTitle={data.whoSeabournIsBestFor.consTitle}
          bestFor={data.whoSeabournIsBestFor.bestFor}
          notBestFor={data.whoSeabournIsBestFor.notBestFor}
          bgClass="bg-ice-50"
        />

        {/* Section 19: Angela Hughes Authority & Credentials */}
        <ExpertCredentials
          name={data.angelaHughes.name}
          title={data.angelaHughes.title}
          badge={data.angelaHughes.eyebrow}
          experienceBadge="40+ YEARS CRUISE EXPERTISE"
          authorityBoxTitle={`${data.angelaHughes.name} CRUISE AUTHORITY & LEADERSHIP`}
          authoritySubtitle={data.angelaHughes.role}
          image={AboutImage}
          paragraphs={[
            data.angelaHughes.lead,
            data.angelaHughes.expertise,
            data.angelaHughes.value,
          ]}
          quote={data.angelaHughes.quote}
          quoteSubtitle={data.angelaHughes.quoteSubtitle}
          credentials={data.angelaHughes.credentials}
          ctaText="Consult With Angela Hughes"
          ctaLink="/contact"
        />

        {/* Section 20: How to Choose the Right Luxury Cruise Line */}
        <StepByStepGuide
          title={data.howToChoose.title}
          subtitle={data.howToChoose.eyebrow}
          steps={data.howToChoose.factors.map((f) => ({
            title: `${f.number}. ${f.title}`,
            description: f.description,
          }))}
        />

        {/* Section 21: Frequently Asked Questions */}
        <FAQAccordion
          data={{
            title: 'Frequently Asked Questions',
            subtitle: 'Common Questions About Explora Journeys vs Seabourn',
            faqs: data.faqs,
          }}
        />

        {/* Section 22: Trust Section */}
        <TrustSection
          sections={trustSections}
          secondaryImage={AboutImage}
        />

        {/* Final CTA Section */}
        <CenterCTA
          theme="dark"
          title="Ready to Plan Your Explora or Seabourn Cruise?"
          description="Contact Angela Hughes today for expert insights, tailored suite recommendations, and exclusive VIP booking privileges."
          buttonText="Request a Consultation"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default ExploraJourneysvsSeabourn;
