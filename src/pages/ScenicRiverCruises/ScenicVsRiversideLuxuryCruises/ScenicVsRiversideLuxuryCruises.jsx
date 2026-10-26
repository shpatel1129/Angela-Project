import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../../components/Navbar/Nav";

// UI Components (100% component-based, no custom HTML sections, no framer-motion)
import ComparisonHero from "../../../components/ui/ComparisonHero";
import ComparisonTable from "../../../components/ui/ComparisonTable";
import AsymmetricStoryIntro from "../../../components/ui/AsymmetricStoryIntro";
import DualPhilosophyShowcase from "../../../components/ui/DualPhilosophyShowcase";
import CabinFeatureGrid from "../../../components/ui/CabinFeatureGrid";
import EditorialFeatureShowcase from "../../../components/ui/EditorialFeatureShowcase";
import BalconyTypesShowcase from "../../../components/ui/BalconyTypesShowcase";
import ContainedShowdown from "../../../components/ui/ContainedShowdown";
import CulinaryExcellence from "../../../components/ui/CulinaryExcellence";
import DestinationFlipCards from "../../../components/ui/DestinationFlipCards";
import SuiteAndInclusionsFaceoff from "../../../components/ui/SuiteAndInclusionsFaceoff";
import ShipPhilosophyFaceoff from "../../../components/ui/ShipPhilosophyFaceoff";
import TravelerProfileSelector from "../../../components/ui/TravelerProfileSelector";
import ValueBreakdownSplit from "../../../components/ui/ValueBreakdownSplit";
import ProsConsCards from "../../../components/ui/ProsConsCards";
import CategoryAwards from "../../../components/ui/CategoryAwards";
import GenericChecklistCards from "../../../components/ui/GenericChecklistCards";
import ExpertCredentials from "../../../components/ui/ExpertCredentials";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import TrustSection from "../../../components/ui/TrustSection";
import CenterCTA from "../../../components/ui/CenterCTA";

// 33 completely distinct, matching images with zero duplicates
import heroImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/hero-riverside-vs-scenic.webp";
import scenicBiggestDifferenceImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-durnstein-space-ship.webp";
import aboutRiversideImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/about-riverside-luxury-cruises.webp";
import scenicPhilosophyFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-fleet-space-ships-overview.webp";
import riversidePhilosophyFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-debussy-exterior-sailing.webp";
import cta1BgImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-sundeck-rhine-gorge.webp";
import scenicSuiteImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-jasper-balcony-suite.webp";
import riversideSuiteImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-spacious-luxury-suite.webp";
import riversideMozartMasterSuiteImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-mozart-master-suite.webp";
import scenicServiceImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-couple-butler.webp";
import riversideServiceImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-crew-service.webp";
import scenicDiningImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-gourmet-dining-experience.webp";
import riversideDiningImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-mozart-danube.webp";
import scenicEnrichExcursionImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-enrich-concert-excursion.webp";
import destinationsImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/destinations-and-reach-comparison.webp";
import riversidePortTournonImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-port-tournon.webp";
import riversideBeveragesImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-beverages-included.webp";
import scenicSunLoungeImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-sun-lounge-balcony-suite.webp";
import cta2BgImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-debussy-evening-illuminated.webp";
import scenicShipFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-crystal-exterior-sailing.webp";
import riversideShipFleetImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-fleet-boutique-luxury.webp";
import profileCouplesImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-couple-dining.webp";
import profileFirstTimeImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/scenic-firsttime-panorama.webp";
import profileFoodLoversImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-mozart-gourmet-dinner.webp";
import profileSoloImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-debussy-palm-court.webp";
import profileFamiliesImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-couple-balcony.webp";
import profileHoneymoonsImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-couple-gala.webp";
import priceValueImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/wellness-and-amenities-comparison.webp";
import aboutAngelaImg from "../../../assets/AboutAngela.jpeg";
import trustMainImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/final-cta-evening-cruise.webp";
import trustSecondaryImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/riverside-debussy-waterside-terrace.webp";
import finalCtaBgImg from "../../../assets/ScenicRiverCruises/ScenicVsRiversideLuxuryCruises/itinerary-rhine-castle-cta.webp";

// Load content from data.json
import pageData from "./data.json";

const {
    schemaData,
    quickAnswerTableData,
    dualPhilosophyData,
    cabinGridData,
    suiteEditorialFeatures,
    balconyData,
    culinaryVenues,
    destinationFlipItems,
    suiteInclusionsData,
    shipPhilosophyData,
    travelerProfiles,
    valueBreakdownData,
    prosConsData,
    categoryAwardsList,
    checklistCardsData,
    faqData,
    trustSectionsData,
} = pageData;

const destinationFlipItemsWithImages = [
    { ...destinationFlipItems[0], image: scenicEnrichExcursionImg },
    { ...destinationFlipItems[1], image: destinationsImg },
    { ...destinationFlipItems[2], image: riversidePortTournonImg },
];

const travelerProfilesWithImages = [
    { ...travelerProfiles[0], image: profileCouplesImg },
    { ...travelerProfiles[1], image: profileFirstTimeImg },
    { ...travelerProfiles[2], image: profileFoodLoversImg },
    { ...travelerProfiles[3], image: profileSoloImg },
    { ...travelerProfiles[4], image: profileFamiliesImg },
    { ...travelerProfiles[5], image: profileHoneymoonsImg },
];

/* ── Main Component ───────────────────────────────────────────────── */
export default function ScenicVsRiverside() {
    return (
        <div className="w-full bg-white overflow-hidden">
            <Helmet>
                <title>Scenic vs Riverside Luxury Cruises: Which River Cruise Is Better?</title>
                <meta name="title" content="Scenic vs Riverside Luxury Cruises | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Scenic vs Riverside Luxury Cruises: compare luxury, cabins, balconies, dining, excursions, inclusions, service, ships, itineraries, pricing and who each river cruise line is best for."
                />
                <link rel="canonical" href="https://www.tripsandships.com/scenic-river-cruises/scenic-vs-riverside" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* 1. HERO COMPONENT */}
            <ComparisonHero
                title={`Scenic vs Riverside Luxury Cruises:\nWhich River Cruise Is Better?`}
                badge="Luxury River Cruise Comparison"
                subtitle="Scenic and Riverside Luxury Cruises are both compelling choices for travelers looking for an upscale European river cruise, but they deliver luxury in different ways."
                description="Scenic has built its river-cruise identity around an ultra-luxury, highly inclusive experience, with purpose-built Space-Ships, personalized service, spacious suites, and included experiences. Riverside takes a different approach, with a particularly strong emphasis on large accommodations, elevated dining, personalized service, and a more intimate luxury-ship feel."
                backgroundImage={heroImg}
                imageAlt="Scenic Space-Ship and Riverside luxury ship sailing on European waterways"
                primaryCtaText="Start Planning Your River Cruise"
                primaryCtaLink="/contact"
                secondaryCtaText="Explore Quick Comparison"
                secondaryCtaLink="#quick-answer"
            />

            {/* 2. QUICK ANSWER COMPARISON TABLE */}
            <div id="quick-answer">
                <ComparisonTable data={quickAnswerTableData} />
            </div>

            {/* 3. THE BIGGEST DIFFERENCE */}
            <div id="biggest-difference">
                <AsymmetricStoryIntro
                    eyebrow="Fundamental Distinction"
                    heading="The Biggest Difference Between Scenic and Riverside"
                    paragraphs={[
                        "The difference is subtle because both brands are competing for travelers who want a luxury river cruise rather than a mainstream river vacation. The distinction becomes clearer when you look at the complete experience.",
                        "Scenic explicitly describes its European Space-Ships as ultra-luxury vessels carrying up to 163 guests, with suites, personalized service, included beverages, dining and destination experiences.",
                        "For travelers choosing between these brands, the suite, itinerary and inclusions can ultimately matter more than the brand name. Riverside competes with a strong luxury proposition centered around suites, service, dining and a more intimate boutique atmosphere."
                    ]}
                    highlights={[
                        "Scenic Emphasizes: Ultra-luxury positioning, all-inclusive travel, Space-Ships, Sun Lounge suites, Butler service, included beverages, curated excursions, Scenic Enrich experiences & personalized service.",
                        "Riverside Emphasizes: Spacious suites, intimate ship experience, luxury dining, personalized service, destination-focused travel, premium accommodations & a boutique-style atmosphere."
                    ]}
                    image1={scenicBiggestDifferenceImg}
                    image2={aboutRiversideImg}
                    ctaText="Compare Itineraries"
                    ctaLink="/contact"
                />
            </div>

            {/* 4. WHO IS EACH LINE BEST FOR? */}
            <div id="who-is-it-for">
                <DualPhilosophyShowcase
                    data={dualPhilosophyData}
                    imageSailing={scenicPhilosophyFleetImg}
                    imageAllSuite={riversidePhilosophyFleetImg}
                />
            </div>

            {/* 5. INLINE CTA 1 */}
            <CenterCTA
                title="Not Sure Which Line Fits Your Travel Style?"
                description="Let us help you compare Scenic and Riverside sailings and find the perfect fit for your trip."
                buttonText="Contact Angela Hughes"
                buttonLink="/contact"
                image={cta1BgImg}
                theme="dark"
            />

            {/* 6. CABINS COMPARISON */}
            <div id="cabins">
                <CabinFeatureGrid
                    data={cabinGridData}
                    image1={scenicSuiteImg}
                    image2={riversideSuiteImg}
                />
            </div>

            {/* 7. WHICH HAS BETTER SUITES? */}
            <div id="better-suites">
                <EditorialFeatureShowcase
                    title="Scenic vs Riverside: Which Has Better Suites?"
                    subtitle="This is one category where there is no universal winner. For a specific sailing, compare the exact suite category, not just the brand."
                    image={riversideMozartMasterSuiteImg}
                    features={suiteEditorialFeatures}
                />
            </div>

            {/* 8. BALCONY EXPERIENCE */}
            <div id="balconies">
                <BalconyTypesShowcase data={balconyData} />
            </div>

            {/* 9. SERVICE COMPARISON */}
            <div id="service">
                <ContainedShowdown
                    title="Scenic vs Riverside: Service Comparison"
                    brandA={{
                        name: "Scenic Dedicated Butler Care",
                        image: scenicServiceImg,
                        features: [
                            "Scenic explicitly emphasizes its personalized service model and 'Nth Degree' service philosophy.",
                            "Butler service on applicable suites provides unpacking, garment pressing, and in-suite beverage delivery.",
                            "Highly structured, polished luxury-service experience with attentive crew on Space-Ships."
                        ]
                    }}
                    brandB={{
                        name: "Riverside Intimate Boutique Care",
                        image: riversideServiceImg,
                        features: [
                            "Riverside focuses heavily on personalized service and an intimate onboard experience.",
                            "Boutique-hotel atmosphere where attentive European crew learn your individual preferences.",
                            "Warm, highly personal relationship with the staff without the formality of larger cruise brands."
                        ]
                    }}
                />
            </div>

            {/* 10. DINING COMPARISON */}
            <div id="dining">
                <CulinaryExcellence
                    title="Scenic vs Riverside: Dining Comparison"
                    subtitle="Both brands are designed for travelers who expect considerably more than basic cruise dining, treating gastronomy as a premier destination experience."
                    venues={culinaryVenues}
                    images={[scenicDiningImg, riversideDiningImg]}
                />
            </div>

            {/* 11. EXCURSIONS */}
            <div id="excursions">
                <DestinationFlipCards
                    title="Scenic vs Riverside: Excursions"
                    subtitle="A luxury river cruise should not be evaluated only by what happens onboard. The destinations are the reason most travelers choose European waterways."
                    items={destinationFlipItemsWithImages}
                />
            </div>

            {/* 12. WHAT IS INCLUDED */}
            <div id="whats-included">
                <SuiteAndInclusionsFaceoff
                    data={suiteInclusionsData}
                    imageAvalon={riversideBeveragesImg}
                    imageScenic={scenicSunLoungeImg}
                />
            </div>

            {/* 13. INLINE CTA 2 */}
            <CenterCTA
                title="Don't Compare Only the Advertised Fare"
                description="Compare cruise fare + included experiences + beverages + excursions + transfers + hotel nights + suite category + other costs before deciding between Scenic and Riverside."
                buttonText="Contact Angela Hughes"
                buttonLink="/contact"
                image={cta2BgImg}
                theme="dark"
            />

            {/* 14. SHIPS COMPARISON */}
            <div id="ships">
                <ShipPhilosophyFaceoff
                    data={shipPhilosophyData}
                    regentImage={scenicShipFleetImg}
                    vikingImage={riversideShipFleetImg}
                    regentImageAlt="Scenic Space-Ships European Fleet"
                    vikingImageAlt="Riverside Luxury Fleet"
                />
            </div>

            {/* 15. TRAVELER PROFILES & OCCASIONS */}
            <div id="traveler-profiles">
                <TravelerProfileSelector
                    title="Scenic vs Riverside by Traveler Style"
                    subtitle="Tailoring Choice to Your Journey"
                    profiles={travelerProfilesWithImages}
                />
            </div>

            {/* 16. PRICE & VALUE */}
            <div id="price">
                <ValueBreakdownSplit
                    title={valueBreakdownData.title}
                    subtitle={valueBreakdownData.subtitle}
                    includedTitle={valueBreakdownData.includedTitle}
                    extrasTitle={valueBreakdownData.extrasTitle}
                    included={valueBreakdownData.included}
                    extras={valueBreakdownData.extras}
                    image={priceValueImg}
                />
            </div>

            {/* 17. PROS & CONS */}
            <div id="pros-and-cons">
                <ProsConsCards
                    title={prosConsData.title}
                    prosTitle={prosConsData.prosTitle}
                    consTitle={prosConsData.consTitle}
                    bestFor={prosConsData.bestFor}
                    notBestFor={prosConsData.notBestFor}
                    bottomNote={prosConsData.bottomNote}
                />
            </div>

            {/* 18. WHICH IS MORE LUXURY / AWARDS */}
            <div id="more-luxury">
                <CategoryAwards
                    title="Scenic vs Riverside: Which Is More Luxury?"
                    subtitle="Comparing Specific Strengths Across Core Luxury Benchmarks"
                    categories={categoryAwardsList}
                />
            </div>

            {/* 19. WHO SHOULD CHOOSE EACH LINE */}
            <div id="who-should-choose">
                <GenericChecklistCards
                    title="Scenic vs Riverside: Which Should You Choose?"
                    subtitle="The Decision Checklist"
                    cards={checklistCardsData}
                />
            </div>

            {/* 20. ANGELA HUGHES AUTHORITY BOX */}
            <div id="Asc-expert-insight">
                <ExpertCredentials
                    badge="LUXURY TRAVEL EXPERTISE"
                    title="CEO of Trips & Ships Luxury Travel • 121+ Countries Visited"
                    name="Angela Hughes"
                    image={aboutAngelaImg}
                    experienceBadge="40+ YEARS EXPERIENCE"
                    authorityBoxTitle="Angela Hughes Luxury Authority"
                    authoritySubtitle="CEO of Trips & Ships Luxury Travel"
                    paragraphs={[
                        "Angela Hughes is the CEO of Trips & Ships Luxury Travel, an industry-leading luxury travel advisor with over 40 years of hands-on experience designing bespoke river cruise itineraries, luxury expeditions, and custom European vacations.",
                        "Having traveled to more than 121 countries, Angela provides objective, insider guidance comparing luxury river cruise lines like Scenic and Riverside to ensure your investment matches your exact travel style."
                    ]}
                    credentials={[
                        "CEO & Founder of Trips & Ships Luxury Travel",
                        "Over 40 years designing luxury river and ocean cruises",
                        "Traveled to more than 121 countries across seven continents",
                        "Founder of Luxury Travel University",
                        "Global luxury travel speaker and weekly industry columnist",
                        "Travel Leaders Network Advisory Board member",
                        "2024 Luxury Travel Influencer of the Year",
                        "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                        "Featured in major travel publications globally",
                        "Specialist in Scenic Space-Ships, Riverside Luxury Cruises, and ultra-luxury river travel"
                    ]}
                    ctaText="Speak With Angela Hughes"
                    ctaLink="/contact"
                />
            </div>

            {/* 21. FREQUENTLY ASKED QUESTIONS */}
            <div id="Asc-faq" className="bg-slate-50 py-12">
                <FAQAccordion
                    data={{
                        title: "Frequently Asked Questions",
                        subtitle: "Everything you need to know about Scenic vs Riverside Luxury Cruises before booking.",
                        questions: faqData
                    }}
                />
            </div>

            {/* 22. FINAL VERDICT & WHY CHOOSE US */}
            <TrustSection
                sections={trustSectionsData}
                mainImage={trustMainImg}
                secondaryImage={trustSecondaryImg}
            />

            {/* 23. FINAL CTA */}
            <CenterCTA
                title="A Great Itinerary Beats a Bigger Brand Name"
                description="Neither line wins universally on itineraries — the better choice depends on destination, departure date, duration, ports, and pre/post-cruise arrangements. Contact Angela Hughes to plan your dream river journey."
                buttonText="Contact Angela Hughes"
                buttonLink="/contact"
                image={finalCtaBgImg}
                theme="dark"
            />
        </div>
    );
}