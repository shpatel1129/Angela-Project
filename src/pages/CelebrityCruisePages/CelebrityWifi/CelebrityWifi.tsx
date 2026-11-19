import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Navbar/Nav";
import data from "./data.json";

// Assets - Celebrity Cruises Wi-Fi (Images commented out)
// import HeroWifiImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-ascent-journey-eden.webp";
// import FleetwideWifiImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-millennium-observation-lounge-alaska.webp";
// import BasicWifiShowcaseImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-flora-discovery-lounge-panoramic-scenic-view.webp";
// import PremiumWifiShowcaseImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-apex-rooftop-garden.webp";
// import WifiCostBreakdownImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-beyond-sunset-bar-saint-thomas.webp";
// import RetreatAllIncludedImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-flora-discovery-lounge-presentation.webp";
// import StarlinkSatelliteImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-xcel-ship-exterior-crystal-clear-waterside-view.webp";
// import PortWifiCafeImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-amsterdam-cafe-storefront.webp";
// import StreamingDeckImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-xcel-vitamind-deck.webp";
// import RemoteWorkScenicImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-solstice-lifou-new-caledonia-panoramic-scenic-view.webp";
// import TravelerLightBrowserImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-portofino-overlook-golden-hour-sunset-glow.webp";
// import TravelerRemoteExecutiveImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-edge-portofino-magic-carpet.webp";
// import CtaApexExteriorImg from "@/assets/celebritycruises/CelebrityWifi/celebrity-apex-exterior.webp";
// import AboutAngelaImg from "@/assets/AboutAngela2.jpeg";

// UI Components
import ComparisonHero from "@/components/ui/ComparisonHero";
import ComparisonTable from "@/components/ui/ComparisonTable";
import EditorialFeatureShowcase from "@/components/ui/EditorialFeatureShowcase";
import GenericChecklistCards from "@/components/ui/GenericChecklistCards";
import CardGrid from "@/components/ui/CardGrid";
import AuthorityGrid from "@/components/ui/AuthorityGrid";
import BrandPillarsShowcase from "@/components/ui/BrandPillarsShowcase";
import FeatureSplit from "@/components/ui/FeatureSplit";
import ValueBreakdownSplit from "@/components/ui/ValueBreakdownSplit";
import ContainedShowdown from "@/components/ui/ContainedShowdown";
import CostValueAnalysisCards from "@/components/ui/CostValueAnalysisCards";
import TravelerMatchmaker from "@/components/ui/TravelerMatchmaker";
import ThreeColumnGrid from "@/components/ui/ThreeColumnGrid";
import StepByStepGuide from "@/components/ui/StepByStepGuide";
import ExpertCredentials from "@/components/ui/ExpertCredentials";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ConclusionSection from "@/components/ui/ConclusionSection";
import CenterCTA from "@/components/ui/CenterCTA";
import FadeIn from "@/components/ui/FadeIn";
import {
  Wifi,
  Zap,
  Globe,
  Radio,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

export default function CelebrityWifi() {
  // Quick Answer Comparison Table Data
  const quickAnswerTableData = {
    title: data.quickAnswer.title,
    subtitle: data.quickAnswer.subtitle,
    headers: data.quickAnswer.columns,
    rows: (data.quickAnswer.rows || []).map((row) => [
      row.feature,
      row.basic,
      row.premium,
    ]),
  };

  // Section 1: Fleetwide Capabilities
  const fleetwideFeatures = (data.fleetwideWifi.whatCanYouDoItems || []).map(
    (item) => ({
      title: item.replace(/\.$/, ""),
      description: "Supported connectivity feature on Celebrity Cruises network.",
    })
  );

  // Section 2: Basic vs Premium ContainedShowdown
  const showdownBrandA = {
    name: data.packagesExplained.basic.title,
    // image: BasicWifiShowcaseImg,
    points: [
      ...data.packagesExplained.basic.suitableFor.map((item) => `INCLUDED: ${item}`),
      ...data.packagesExplained.basic.limitations.map((item) => `LIMITATION: ${item}`),
    ],
  };

  const showdownBrandB = {
    name: data.packagesExplained.premium.title,
    // image: PremiumWifiShowcaseImg,
    points: [
      ...data.packagesExplained.premium.canDo.map((item) => `SUPPORTED: ${item}`),
      `SPEED & LATENCY: ${data.packagesExplained.premium.starlinkNote}`,
      `STATEROOM STREAMING: ${data.packagesExplained.premium.inStateroomTvNote}`,
    ],
  };

  // Section 3: Detailed Activity Comparison Table Data
  const activityComparisonTableData = {
    title: data.packageComparison.title,
    subtitle: data.packageComparison.subtitle,
    headers: data.packageComparison.columns,
    rows: (data.packageComparison.rows || []).map((row) => [
      row.activity,
      row.basic,
      row.premium,
    ]),
  };

  // Section 4: How Much Does Wi-Fi Cost? (CostValueAnalysisCards Data)
  const wifiCostsIncluded = [
    {
      title: "Sailing & Duration Variables",
      description:
        "Pricing varies dynamically based on your specific cruise duration, ship class, seasonal travel date, and destination itinerary.",
    },
    {
      title: "Pre-Cruise vs. Onboard Purchase",
      description:
        "Celebrity states official FAQ upgrade and package pricing is noticeably cheaper before sailing via the online Cruise Planner than onboard.",
    },
    {
      title: "Guest Count & Multi-Device Tiers",
      description:
        "Package rates depend on single-guest versus multi-device selections (1 to 4 devices per stateroom).",
    },
    {
      title: "Booking Bundles & Promotions",
      description:
        "Whether Wi-Fi is bundled in All Included or The Retreat, active promotions, and your booking country/currency directly affect the final cost.",
    },
  ];

  const wifiCostsExtras = [
    {
      title: "Basic Wi-Fi Package",
      description:
        "Availability and price depend on eligible booking options and pre-cruise promotional offers.",
    },
    {
      title: "Premium Wi-Fi Package",
      description:
        "Priced dynamically according to sailing length, ship class, and active Cruise Planner discounts.",
    },
    {
      title: "Basic-to-Premium Upgrade",
      description:
        "An additional per-day charge applies (often starting around $9.99/person/day in the Cruise Planner).",
    },
    {
      title: "All Included & The Retreat Suites",
      description:
        "All Included bundles Basic Wi-Fi, while The Retreat includes complimentary Starlink Premium Wi-Fi for all suite guests.",
    },
  ];

  // Section 7: Starlink Satellite Performance (ValueBreakdownSplit Data)
  const starlinkIncluded = [
    {
      title: "Ship Location & Open Ocean Position",
      description:
        "Actual speed and latency depend on the ship's geographic coordinates and proximity to orbital satellite pathways.",
    },
    {
      title: "Low-Earth Orbit Satellite Coverage",
      description:
        "SpaceX Starlink's constellation of LEO satellites provides significantly lower latency than legacy geostationary satellites.",
    },
    {
      title: "Weather & Maritime Conditions",
      description:
        "Dense cloud cover, heavy maritime storms, and extreme latitudes can temporarily influence satellite transponder signal clarity.",
    },
    {
      title: "Onboard Network Demand & Peak Hours",
      description:
        "Speeds naturally fluctuate during peak sea-day hours when thousands of passengers concurrently access the network.",
    },
  ];

  const starlinkExtras = [
    {
      title: "High-Bandwidth Performance",
      description:
        "Starlink broadband connectivity easily supports responsive web browsing, social media feeds, VPN connections, and large file transfers.",
    },
    {
      title: "Video & Voice Calling Capability",
      description:
        "Supports crystal-clear FaceTime, Zoom, and WhatsApp voice/video calling when connected to the Premium Wi-Fi tier.",
    },
    {
      title: "Streaming Entertainment Support",
      description: data.starlinkWifi.streamingParagraph,
    },
    {
      title: "Realistic Expectations at Sea",
      description:
        "Starlink dramatically outperforms older cruise ship satellite systems, but connections will not always mirror high-speed gigabit home fiber.",
    },
  ];

  // Section 5 & 6: Package & Inclusions AuthorityGrid
  const inclusionAuthorityItems = [
    {
      title: "All Included Package",
      subtitle: "Basic Wi-Fi + Classic Drinks",
      description:
        "Eligible All Included bookings combine Basic Wi-Fi with the Classic Drink Package. Upgrades to Starlink Premium Wi-Fi are available in the Cruise Planner before sailing.",
      content:
        "Eligible All Included bookings combine Basic Wi-Fi with the Classic Drink Package. Upgrades to Starlink Premium Wi-Fi are available in the Cruise Planner before sailing.",
      icon: <CheckCircle2 className="w-5 h-5 text-ts-gold" />,
    },
    {
      title: "The Retreat Suites",
      subtitle: "Complimentary Premium Wi-Fi",
      description:
        "Retreat guests receive Premium Wi-Fi powered by Starlink along with the Premium Drink Package, exclusive Luminae dining, and Retreat Lounge access.",
      content:
        "Retreat guests receive Premium Wi-Fi powered by Starlink along with the Premium Drink Package, exclusive Luminae dining, and Retreat Lounge access.",
      icon: <Zap className="w-5 h-5 text-ts-gold" />,
    },
    {
      title: "Galapagos Inclusions",
      subtitle: "Dedicated Satellite Architecture",
      description:
        "Celebrity Flora and Galapagos expedition vessels operate under separate satellite arrangements where unlimited internet connectivity is provided across staterooms.",
      content:
        "Celebrity Flora and Galapagos expedition vessels operate under separate satellite arrangements where unlimited internet connectivity is provided across staterooms.",
      icon: <Globe className="w-5 h-5 text-ts-gold" />,
    },
    {
      title: "Pre-Cruise Discounts",
      subtitle: "Save via Cruise Planner",
      description:
        "Celebrity states that pre-cruise upgrade pricing is lower than onboard rates. Reserve internet packages or upgrade from Basic to Premium through your online account.",
      content:
        "Celebrity states that pre-cruise upgrade pricing is lower than onboard rates. Reserve internet packages or upgrade from Basic to Premium through your online account.",
      icon: <DollarSign className="w-5 h-5 text-ts-gold" />,
    },
  ];

  // Section 5 & 6: All Included Upgrades BrandPillarsShowcase Data
  const allIncludedUpgradePillarsData = {
    title: "All Included Wi-Fi Upgrades & Value Comparison",
    subtitle:
      "Understand upgrade charges, pre-cruise Cruise Planner pricing, and whether bundling Wi-Fi with drinks makes financial sense.",
    pillars: [
      {
        title: data.allIncludedWifi.upgradeTitle,
        description: data.allIncludedWifi.upgradeParagraphs.join(" "),
        icon: "star",
      },
      {
        title: data.allIncludedWifi.isWorthItTitle,
        description: data.allIncludedWifi.isWorthItParagraphs.join(" "),
        icon: "compass",
      },
      {
        title: data.theRetreatWifi.title,
        description: data.theRetreatWifi.paragraphs.join(" "),
        icon: "ship",
      },
      {
        title: "All Included Terms & Exceptions",
        description: `${data.allIncludedWifi.inclusionsTitle} ${data.allIncludedWifi.inclusions.join(" ")} ${data.allIncludedWifi.exceptionsNote}`,
        icon: "window",
      },
    ],
  };

  // Section 8: WhatsApp & Messaging Features for FeatureSplit
  const whatsappFeatures = [
    {
      title: data.whatsappWifi.callsTitle,
      description: data.whatsappWifi.callsParagraph,
    },
    {
      title: data.whatsappWifi.photosTitle,
      description: data.whatsappWifi.photosParagraph,
    },
  ];

  // Section 9 & 10: Streaming & Work ThreeColumnGrid
  const streamingAndWorkGridItems = [
    {
      title: "Streaming Video & Netflix",
      category: "ENTERTAINMENT",
      description:
        data.netflixYoutubeWifi.netflixParagraphs.join(" ") +
        " " +
        data.netflixYoutubeWifi.advice,
      features: [
        "Netflix, Disney+ & Prime Video",
        "Requires Premium Wi-Fi package",
        "Subject to ship location & bandwidth",
      ],
      // image: StreamingDeckImg,
      // imageAlt: "Streaming entertainment on Celebrity Cruises",
    },
    {
      title: "YouTube & Audio Streaming",
      category: "MEDIA ACCESS",
      description:
        data.netflixYoutubeWifi.youtubeParagraphs.join(" ") +
        " Music platforms like Spotify and Apple Music stream seamlessly on Premium Wi-Fi.",
      features: [
        "Spotify, Apple Music & Podcasts",
        "YouTube HD streaming supported",
        "Download offline copies prior to embarkation",
      ],
      // image: RemoteWorkScenicImg,
      // imageAlt: "Audio and video streaming on ship",
    },
    {
      title: "Remote Work & Video Meetings",
      category: "BUSINESS AT SEA",
      description:
        data.remoteWork.paragraphs.join(" ") +
        " " +
        data.remoteWork.videoMeetingsParagraphs.join(" "),
      features: [
        "Zoom, Teams & Webex supported",
        "Cloud file transfer & VPN access",
        "Schedule critical meetings during port days",
      ],
      // image: PortWifiCafeImg,
      // imageAlt: "Remote working on Celebrity Cruises",
    },
  ];

  // Section 11 & 13: Device Limits & Cellular at Sea (GenericChecklistCards)
  const deviceAndCellularCards = [
    {
      title: "Device Limits & Switching Rules",
      items: [
        data.deviceLimits.paragraphs[0],
        data.deviceLimits.paragraphs[1],
        data.deviceLimits.switchingParagraph,
        ...data.deviceLimits.considerations,
      ],
    },
    {
      title: "Cellular at Sea & Maritime Roaming",
      items: [
        data.cellularAtSea.paragraphs[0] + " " + data.cellularAtSea.paragraphs[1],
        data.cellularAtSea.paragraphs[2] + " " + data.cellularAtSea.paragraphs[3],
        data.cellularAtSea.whatIsCellularAtSeaParagraphs[0] +
          " " +
          data.cellularAtSea.whatIsCellularAtSeaParagraphs[1],
        ...data.cellularAtSea.avoidRoamingTips,
      ],
    },
  ];

  // Section 12: How to Buy StepByStepGuide
  const buySteps = (data.howToBuy.option1Steps || []).map((step, idx) => ({
    number: String(idx + 1).padStart(2, "0"),
    title: step.split(".")[0],
    description: step,
  }));

  // Section 15: Traveler Personas Matchmaker
  // const travelerMatchmakerImages = [
  //   TravelerLightBrowserImg,
  //   TravelerRemoteExecutiveImg,
  //   StreamingDeckImg,
  //   PortWifiCafeImg,
  // ];

  const matchmakerPersonas = [
    {
      type: "Light Browsers & Texters",
      reason:
        "Guests who only check incoming family emails, read news headlines, and send WhatsApp or iMessage texts back home.",
      recommendation: "Basic Wi-Fi (or All Included booking)",
    },
    {
      type: "Remote Professionals & Executives",
      reason:
        "Cruisers managing business teams, attending Zoom/Teams meetings, transferring cloud documents, or needing VPN connectivity.",
      recommendation: "Premium Starlink Wi-Fi (Multi-Device Option)",
    },
    {
      type: "Streamers & Social Media Creators",
      reason:
        "Guests uploading Instagram reels, posting cruise photos, streaming Netflix shows in the cabin, and listening to Spotify.",
      recommendation: "Celebrity Premium Wi-Fi Package",
    },
    {
      type: "The Digital Detoxers",
      reason:
        "Travelers seeking an authentic escape from screens, using free Wi-Fi in port cafes and enjoying pure maritime relaxation.",
      recommendation: "No Ship Wi-Fi / Free Port Connectivity",
    },
  ];

  // Section 16: Money Saving Tips CardGrid
  const savingTipsCards = (data.moneySavingTips.tips || []).map((t) => ({
    title: `${t.number}. ${t.title}`,
    description: t.description,
  }));

  // Section 17: Cruise Line Comparison Table
  const cruiseLineTableData = {
    title: data.cruiseLineComparison.title,
    subtitle: data.cruiseLineComparison.subtitle,
    headers: data.cruiseLineComparison.columns,
    rows: (data.cruiseLineComparison.rows || []).map((r) => [
      r.line,
      r.approach,
    ]),
  };

  // Section 18: FAQ Accordion Data
  const faqAccordionData = {
    title: data.faqs.title,
    subtitle: data.faqs.subtitle,
    items: data.faqs.items,
  };

  // Section 19: Conclusion Section Data
  const conclusionSections = [
    {
      title: data.finalVerdict.title,
      subtitle: data.finalVerdict.subtitle,
      paragraphs: data.finalVerdict.paragraphs,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.primaryKeyword} />
        <link rel="canonical" href={data.meta.canonical} />

        {/* Structured Schema */}
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      <Nav />

      <div className="w-full bg-white text-slate-800">
        {/* Hero Section */}
        <div id="hero">
          <ComparisonHero
            badge={data.hero.badge}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            /* backgroundImage={HeroWifiImg} */
            byline={true}
            primaryCtaText="Compare Wi-Fi Packages"
            primaryCtaLink="#quick-answer"
            secondaryCtaText="Consult Angela Hughes"
            secondaryCtaLink="/contact"
          />
        </div>

       

        {/* Quick Answer: ComparisonTable */}
        <div id="quick-answer" className="border-b border-navy-100">
          <ComparisonTable data={quickAnswerTableData} />
        </div>

        {/* Section 1: Does Celebrity Cruises Have Wi-Fi? (EditorialFeatureShowcase) */}
        <div id="fleetwide-wifi">
          <EditorialFeatureShowcase
            title={data.fleetwideWifi.title}
            subtitle={data.fleetwideWifi.paragraphs.join(" ")}
            /* image={FleetwideWifiImg} */
            features={fleetwideFeatures}
            bgClass="bg-white"
          />
        </div>

        {/* Section 2: Wi-Fi Packages Explained (ContainedShowdown) */}
        <div id="packages-explained">
          <ContainedShowdown
            title={data.packagesExplained.title}
            brandA={showdownBrandA}
            brandB={showdownBrandB}
          />
        </div>

        {/* Section 3: Basic vs Premium Activity Comparison (ComparisonTable) */}
        <div id="package-comparison" className="border-b border-navy-100">
          <ComparisonTable data={activityComparisonTableData} />
        </div>

        {/* Section 4: How Much Does Wi-Fi Cost? (CostValueAnalysisCards) */}
        <div id="wifi-costs">
          <CostValueAnalysisCards
            title={data.wifiCosts.title}
            subtitle={data.wifiCosts.subtitle}
            includedTitle="Factors Affecting Your Wi-Fi Cost"
            extrasTitle="Purchasing & Pricing Structure"
            included={wifiCostsIncluded}
            extras={wifiCostsExtras}
          />
        </div>

        {/* Section 5 & 6: Inclusions - All Included & The Retreat (AuthorityGrid) */}
        <div id="inclusions">
          <AuthorityGrid
            title="Bundled Wi-Fi: All Included & The Retreat"
            subtitle="Understand whether your cruise fare already includes complimentary Basic or Premium Wi-Fi before purchasing standalone internet."
            items={inclusionAuthorityItems}
          />

          <BrandPillarsShowcase data={allIncludedUpgradePillarsData} />
        </div>

        {/* Section 7: Starlink Satellite Performance (ValueBreakdownSplit) */}
        <div id="starlink">
          <ValueBreakdownSplit
            title={data.starlinkWifi.title}
            subtitle={data.starlinkWifi.paragraphs.join(" ")}
            includedTitle="Variables That Affect Real-World Speeds"
            included={starlinkIncluded}
            extrasTitle="Streaming Reliability & Performance Verdict"
            extras={starlinkExtras}
            /* image={StarlinkSatelliteImg} */
          />
        </div>

        {/* Section 8: WhatsApp & Messaging Apps (FeatureSplit) */}
        <div id="whatsapp">
          <FeatureSplit
            title={data.whatsappWifi.title}
            subtitles={data.whatsappWifi.paragraphs}
            features={whatsappFeatures}
            /* image={TravelerLightBrowserImg} */
            /* imagePosition="right" */
            theme="white"
            bestFor={[
              "Text messaging on Basic Wi-Fi",
              "Family group chat check-ins",
            ]}
            notIdealFor={[
              "WhatsApp voice/video calls on Basic Wi-Fi",
              "Photo or video uploads without Premium Wi-Fi",
            ]}
          />
        </div>

        {/* Section 9 & 10: Streaming & Remote Work (ThreeColumnGrid) */}
        <div id="streaming-and-work">
          <ThreeColumnGrid
            title="Streaming Entertainment & Working Remotely at Sea"
            subtitle="Detailed advice for video streaming, music access, and professional remote work from your cruise stateroom."
            items={streamingAndWorkGridItems}
          />
        </div>

        {/* Section 11 & 13: Device Limits & Cellular at Sea (GenericChecklistCards) */}
        <div id="cellular-and-devices">
          <GenericChecklistCards
            title="Device Limits & Avoiding Maritime Roaming Charges"
            subtitle="MARITIME CELLULAR & DEVICE POLICIES"
            cards={deviceAndCellularCards}
          />
        </div>

        {/* Section 12: How to Buy Celebrity Cruises Wi-Fi (StepByStepGuide) */}
        <div id="how-to-buy">
          <StepByStepGuide
            title={data.howToBuy.title}
            subtitle={data.howToBuy.subtitle}
            steps={buySteps}
            layout="grid"
            columns={4}
          />
        </div>

        {/* Section 14 & 15: Is Wi-Fi Worth the Money? (TravelerMatchmaker) */}
        <div id="is-wifi-worth-it">
          <TravelerMatchmaker
            title={data.isWifiWorthIt.title}
            subtitle={data.isWifiWorthIt.intro}
            personas={matchmakerPersonas}
            /* images={travelerMatchmakerImages} */
          />
        </div>

        {/* Section 16: Tips to Save Money (CardGrid) */}
        <div id="saving-tips">
          <CardGrid
            title={data.moneySavingTips.title}
            subtitle={data.moneySavingTips.subtitle}
            cards={savingTipsCards}
            columns={3}
            stagger={true}
          />
        </div>

        {/* Section 17: Comparison with Other Cruise Lines (ComparisonTable) */}
        <div id="cruise-lines-comparison" className="border-b border-navy-100">
          <ComparisonTable data={cruiseLineTableData} />
        </div>

       

        {/* Expert Advisory Guidance */}
        <div id="expert-advisor">
          <ExpertCredentials
            title={data.advisorGuidance.title}
            authoritySubtitle={data.advisorGuidance.subtitle}
            authorityBoxTitle="CRUISE CONNECTIVITY ADVISORY"
            /* image={AboutAngelaImg} */
            credentials={data.advisorGuidance.author.credentials}
            quote="Internet packages and fare inclusions change across ship classes and seasons. Checking your Cruise Planner early ensures you never overpay for connectivity you do not need."
            quoteSubtitle="Angela Hughes, CEO & Luxury Cruise Specialist"
            ctaText="Consult Angela Hughes"
            ctaLink="/contact"
          />
        </div>

         {/* Section 18: Frequently Asked Questions (FAQAccordion) */}
        <div id="faqs">
          <FAQAccordion data={faqAccordionData} />
        </div>

        {/* Center CTA */}
        <CenterCTA
          title="Ready to Plan Your Celebrity Cruise Vacation?"
          subtitle="Trips & Ships Luxury Travel compares cruise-only rates, All Included packages, and Retreat benefits to maximize your onboard value."
          primaryText="Start Planning with Angela Hughes"
          primaryLink="/contact"
          secondaryText="Explore Stateroom Classes"
          secondaryLink="/celebrity-cruises/staterooms"
          badge="VIP Concierge Advisory"
        />
      </div>
    </>
  );
}

