import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Azamara brand images (from AzamaraCruisesGuide + Azamarashipcomparison assets)
import azamara1 from "@/assets/AzamaraCruisesGuide/Hero1.webp";
import azamara2 from "@/assets/AzamaraCruisesGuide/Hero2.webp";
import azamara3 from "@/assets/AzamaraCruisesGuide/Hero3.webp";
import azamara4 from "@/assets/AzamaraCruisesGuide/Cultural_Integration.webp";
import azamara5 from "@/assets/AzamaraCruisesGuide/Simplified_Inclusions.webp";
import azamara6 from "@/assets/AzamaraCruisesGuide/Small_Ship.webp";
import azamara7 from "@/assets/AzamaraCruisesGuide/Stays_Overnight.webp";
import azamara8 from "@/assets/Azamarashipcomparison/Azamaraship.webp";
import azamara9 from "@/assets/Azamarashipcomparison/Azamaraship2.webp";
import azamara10 from "@/assets/Azamarashipcomparison/Azamara-Onward-lux-urycruise-ship.webp";

// Viking brand images (from VikingCruises + VikingOceanCruises assets)
import viking1 from "@/assets/VikingCruises/viking-river-cruise-exterior-st-louis.jpg";
import viking2 from "@/assets/VikingCruises/viking-expedition-ship-antarctica-cruise.jpg";
import viking3 from "@/assets/VikingCruises/viking-infinity-pool-ocean-view.jpg";
import viking4 from "@/assets/VikingCruises/flam-norway-fjord-cruise.jpg";
import viking5 from "@/assets/VikingCruises/viking-explorers-lounge-panoramic-views.jpg";
import viking6 from "@/assets/VikingCruises/viking-aquavit-terrace-ocean-dining.jpg";
import viking7 from "@/assets/VikingOceanCruises/flam-norway-fjord-cruise.jpg";
import viking8 from "@/assets/VikingOceanCruises/Viking-Multiple-Dining.jpg";
import viking9 from "@/assets/VikingOceanCruises/viking-Dubrovnik-Croatia.jpg";
import viking10 from "@/assets/VikingOceanCruises/viking-Halong-Bay-Vietnam.jpg";

// Disney brand images (from DisneyCruiseLineVacations assets)
import disney1 from "@/assets/DisneyCruiseLineVacations/disney-cruise-ship-docked-at-castaway-cay-aerial-view.jpg";
import disney2 from "@/assets/DisneyCruiseLineVacations/disney-wish-pool-deck-and-aquamouse-attraction.jpg";
import disney3 from "@/assets/DisneyCruiseLineVacations/disney-wish-grand-hall-atrium-cinderella-character-meet-greet.jpg";
import disney4 from "@/assets/DisneyCruiseLineVacations/disney-wish-palo-steakhouse-adults-only-premium-dining.jpg";
import disney5 from "@/assets/DisneyCruiseLineVacations/disney-castaway-cay-private-island-aerial-drone-view-cruise-ship.jpg";
import disney6 from "@/assets/DisneyCruiseLineVacations/kids-enjoying-disney-cruise-deck-family-vacation-at-sea.jpg";
import disney7 from "@/assets/DisneyCruiseLineVacations/romantic-couple-cruise-ship-cocktails-adult-vacation-onboard-experience.jpg";
import disney8 from "@/assets/DisneyCruiseLineVacations/guests-enjoying-cocktails-at-cruise-ship-nightlife-bar.jpg";
import disney9 from "@/assets/DisneyCruiseLineVacations/family-dining-with-ocean-views-on-disney-cruise-ship.jpg";
import disney10 from "@/assets/DisneyCruiseLineVacations/disney-wish-oceaneer-club-kids-space-interactive-slide.jpg";

// Explora brand images (from ExploraJourneysCruises + LuxuryExploraJourneysGuide assets)
import explora1 from "@/assets/ExploraJourneysCruises/ExploraCruise.webp";
import explora2 from "@/assets/ExploraJourneysCruises/ExploraCruise2.webp";
import explora3 from "@/assets/ExploraJourneysCruises/ExploraCruise3.webp";
import explora4 from "@/assets/ExploraJourneysCruises/Fine-Dining.webp";
import explora5 from "@/assets/ExploraJourneysCruises/Luxury-Oceanfront-Suites.webp";
import explora6 from "@/assets/ExploraJourneysCruises/amalfi-coast-italy-mediterranean-hero-summer-2025.webp";
import explora7 from "@/assets/ExploraJourneysCruises/explora-journeys-red-sea-luxury-cruise-oman.webp";
import explora8 from "@/assets/ExploraJourneysCruises/onboard-experience.webp";
import explora9 from "@/assets/LuxuryExploraJourneysGuide/Luxury-Explora-Journeys.webp";
import explora10 from "@/assets/LuxuryExploraJourneysGuide/Luxury-Explora-Journeys2.webp";

// Scenic brand images (from ScenicvsFourSeasonsYachts assets)
import scenic1 from "@/assets/ScenicvsFourSeasonsYachts/Section_12_Scenic_Eclipse.jpg";
import scenic2 from "@/assets/ScenicvsFourSeasonsYachts/Hero1.jpg";
import scenic3 from "@/assets/ScenicvsFourSeasonsYachts/Hero2.jpg";
import scenic4 from "@/assets/ScenicvsFourSeasonsYachts/GalleryImage1.jpg";
import scenic5 from "@/assets/ScenicvsFourSeasonsYachts/GalleryImage2.jpg";

// HX Expeditions brand images (from HXExpeditionsCruises + Hxexpeditionsantarctica assets)
import hx1 from "@/assets/HXExpeditionsCruises/Hero_1.webp";
import hx2 from "@/assets/HXExpeditionsCruises/Hero_2.jpg";
import hx3 from "@/assets/HXExpeditionsCruises/Hero_3.webp";
import hx4 from "@/assets/HXExpeditionsCruises/Antarctica.jpg";
import hx5 from "@/assets/HXExpeditionsCruises/Greenland.jpg";
import hx6 from "@/assets/HXExpeditionsCruises/Svalbard.jpg";
import hx7 from "@/assets/HXExpeditionsCruises/Galápagos.jpg";
import hx8 from "@/assets/Hxexpeditionsantarctica/Antarctica_YuriChoufour.jpg";
import hx9 from "@/assets/Hxexpeditionsantarctica/Aerial_photo_MS_Fridtjof_Nansen_HX_34605_Photo_Espen_Mills_v2RGB.jpg";
import hx10 from "@/assets/HXExpeditionsCruises/Image_1.jpg";

// Riverside brand images (from RiversideLuxuryCruises assets)
import riverside1 from "@/assets/RiversideLuxuryCruises/Riversideimage1.webp";
import riverside2 from "@/assets/RiversideLuxuryCruises/Riversideimage2.webp";
import riverside3 from "@/assets/RiversideLuxuryCruises/Riversideimage3.webp";
import riverside4 from "@/assets/RiversideLuxuryCruises/Riversideimage4.webp";
import riverside5 from "@/assets/RiversideLuxuryCruises/Riversideimage5.webp";

// Avalon Waterways brand images
import avalon1 from "@/assets/avalon-inclusions/Exterior Alegria 1.webp";
import avalon2 from "@/assets/avalon-inclusions/avalon_panorama_suite.png";
import avalon3 from "@/assets/avalon-inclusions/Exterior Alegria 17.webp";
import avalon4 from "@/assets/avalon-inclusions/Exterior Artistry II 16.webp";
import avalon5 from "@/assets/avalon-inclusions/Exterior Envision 46.webp";
import avalon6 from "@/assets/avalon-inclusions/Exterior Alegria 10.webp";
import avalon7 from "@/assets/avalon-inclusions/Exterior Panorama 1.webp";
import avalon8 from "@/assets/avalon-inclusions/avalon_dining.png";

// AmaWaterways brand images
import ama1 from "@/assets/Amawaterways/AmaMagna_Exterior_Repainted_Cruising.webp";
import ama2 from "@/assets/Amawaterways/AmaBella_Twin-Balcony_PhotogVV_Rm_218-1.webp";
import ama3 from "@/assets/Amawaterways/AmaCello_Bar_Lounge_PhotogVV-GH_GRY07274.webp";
import ama4 from "@/assets/Amawaterways/AmaCello_DiningRoom_PhotogVV-GH_A9V07786.webp";
import ama5 from "@/assets/Amawaterways/AmaDante_Exterior_DE_Passau.webp";
import ama6 from "@/assets/Amawaterways/AmaCello_MainRestaurant_Apr2023_photogVV_A9V01594.webp";
import ama7 from "@/assets/Amawaterways/AmaCello_Spa_Apr2023_photogVV_A9V01397.webp";
import ama8 from "@/assets/Amawaterways/AmaCello_Suite_Apr2023_photogVV_Room 301-1.webp";
import ama9 from "@/assets/Amawaterways/AmaMagna_Al Fresco_MV 2019.webp";
import ama10 from "@/assets/Amawaterways/AmaReina_TwinBalcony_Stateroom_APT_edit_NS.webp";

// Regent Seven Seas brand images
import regent1 from "@/assets/regentsevenseas/Splendor/SPL - Ship Aerial Sunset V1_2026-05-18_15-36-13.jpg";
import regent2 from "@/assets/regentsevenseas/Regent Ships in Port/Seven Seas Explorer in Karlskrona_2026-05-18_15-57-38.jpg";
import regent3 from "@/assets/regentsevenseas/Splendor/SPL Atrium Staircase_2026-05-18_15-33-14.jpg";
import regent4 from "@/assets/regentsevenseas/Splendor/SPL Casino_2026-05-18_15-33-16.jpg";
import regent5 from "@/assets/regentsevenseas/Splendor/SPL Chartreuse Bar_2026-05-18_15-33-26.jpg";
import regent6 from "@/assets/regentsevenseas/Splendor/SPL Coffee Connection_2026-05-18_15-33-31.jpg";

// Windstar Cruises brand images
import windstar1 from "@/assets/Windstar Cruises/S_Spirit_Breeze_Tahiti_03-Edited-2.webp";
import windstar2 from "@/assets/Windstar Cruises/2025_WindStar_Santorini_03_V0.webp";
import windstar3 from "@/assets/Windstar Cruises/2025_StarBreeze_BoraBora_Aerial_03_V0.webp";
import windstar4 from "@/assets/Windstar Cruises/2025_WindStar_Mykonos_02_V0.webp";
import windstar5 from "@/assets/Windstar Cruises/2025_WindSurf_CompassRose_180.webp";
import windstar6 from "@/assets/Windstar Cruises/2025_WindStar_Nafplio_09_V0.webp";

// Silversea brand images
import silversea1 from "@/assets/silversea/SSC_Greece_Athens_DSCF1141.webp";
import silversea2 from "@/assets/silversea/SSC_Greece_Crete_Aghios_Nikolaos_DSCF5841_61.webp";
import silversea3 from "@/assets/silversea/SSC_RA_Malta_Valletta_Harbour_032.webp";
import silversea4 from "@/assets/silversea/SSC_Italy_Amalfi_Coast_Taxi_Boat_3495.webp";
import silversea5 from "@/assets/silversea/SSC_RA_SilverNote_Culinary_4327.webp";
import silversea6 from "@/assets/silversea/SSC_SM_Greece_Nafplion_DSCF4094_46.webp";

// Greece Destination images
import greece1 from "@/assets/Greece-photo/Santorini/shutterstock_2582375693.webp";
import greece2 from "@/assets/Greece-photo/Athens/angela-hughes-luxury-greece-travel-acropolis-athens.webp";
import greece3 from "@/assets/Greece-photo/Santorini/shutterstock_2671956625.webp";
import greece4 from "@/assets/Greece-photo/Corfu/shutterstock_2393935471.webp";
import greece5 from "@/assets/Greece-photo/Athens/shutterstock_2025620126.webp";
import greece6 from "@/assets/Greece-photo/Corfu/shutterstock_2589231827.webp";

// Image pools per brand — each card cycles through its brand's pool
const brandImagePools: Record<string, string[]> = {
  "AmaWaterways":         [ama1, ama2, ama3, ama4, ama5, ama6, ama7, ama8, ama9, ama10],
  "Azamara Cruises":       [azamara1, azamara2, azamara3, azamara4, azamara5, azamara6, azamara7, azamara8, azamara9, azamara10],
  "viking cruises":       [viking1, viking2, viking3, viking4, viking5, viking6, viking7, viking8, viking9, viking10],
  "disney cruises":       [disney1, disney2, disney3, disney4, disney5, disney6, disney7, disney8, disney9, disney10],
  "explora jouneys":      [explora1, explora2, explora3, explora4, explora5, explora6, explora7, explora8, explora9, explora10],
  "scenic cruises":       [scenic1, scenic2, scenic3, scenic4, scenic5],
  "hx-expedition cruises":[hx1, hx2, hx3, hx4, hx5, hx6, hx7, hx8, hx9, hx10],
  "riverside cruises":    [riverside1, riverside2, riverside3, riverside4, riverside5],
  "Avalon Waterways":     [avalon1, avalon2, avalon3, avalon4, avalon5, avalon6, avalon7, avalon8],
  "Regent Seven Seas":    [regent1, regent2, regent3, regent4, regent5, regent6],
  "Windstar Cruises":     [windstar1, windstar2, windstar3, windstar4, windstar5, windstar6],
  "Silversea":            [silversea1, silversea2, silversea3, silversea4, silversea5, silversea6],
  "Greece":               [greece1, greece2, greece3, greece4, greece5, greece6],
};


// Tab categories
const cruiseCategories = [
  { id: "all", label: "all" },
  { id: "AmaWaterways", label: "AmaWaterways" },
  { id: "Azamara Cruises", label: "Azamara Cruises" },
  { id: "viking cruises", label: "viking cruises" },
  { id: "disney cruises", label: "disney cruises" },
  { id: "explora jouneys", label: "explora jouneys" },
  { id: "scenic cruises", label: "scenic cruises" },
  { id: "hx-expedition cruises", label: "hx-expedition cruises" },
  { id: "riverside cruises", label: "riverside cruises" },
  { id: "Avalon Waterways", label: "Avalon Waterways" },
  { id: "Regent Seven Seas", label: "Regent Seven Seas" },
  { id: "Windstar Cruises", label: "Windstar Cruises" },
  { id: "Silversea", label: "Silversea" },
  { id: "Greece", label: "Greece" },
];

// The 10 brand overview cards shown in the "all" tab — each links to its Ultimate Guide pillar page
const brandOverviewCards = [
  { label: "AmaWaterways", path: "/amawaterways-ultimate-guide", image: brandImagePools["AmaWaterways"][0] },
  { label: "Azamara Cruises", path: "/azamara-cruises-ultimate-guide", image: brandImagePools["Azamara Cruises"][0] },
  { label: "viking cruises", path: "/viking-cruises-ultimate-guide", image: brandImagePools["viking cruises"][0] },
  { label: "disney cruises", path: "/disney-cruise-line-ultimate-guide", image: brandImagePools["disney cruises"][0] },
  { label: "explora jouneys", path: "/explora-journeys-ultimate-guide", image: brandImagePools["explora jouneys"][0] },
  { label: "scenic cruises", path: "/scenic-cruises-ultimate-guide", image: brandImagePools["scenic cruises"][0] },
  { label: "hx-expedition cruises", path: "/hx-expeditions-ultimate-guide", image: brandImagePools["hx-expedition cruises"][0] },
  { label: "riverside cruises", path: "/riverside-luxury-cruises-ultimate-guide", image: brandImagePools["riverside cruises"][0] },
  { label: "Avalon Waterways", path: "/avalon-waterways-ultimate-guide", image: brandImagePools["Avalon Waterways"][0] },
  { label: "Regent Seven Seas", path: "/ultimate-guide-regent-seven-seas-cruises", image: brandImagePools["Regent Seven Seas"][0] },
  { label: "Windstar Cruises", path: "/windstar-cruises-ultimate-guide", image: brandImagePools["Windstar Cruises"][0] },
  { label: "Silversea", path: "/silversea-cruises-ultimate-guide", image: brandImagePools["Silversea"][0] },
  { label: "Greece", path: "/greece-ultimate-guide", image: brandImagePools["Greece"][0] },
];

// Per-brand guide pages sourced exactly from SmallShipCruises.tsx secondaryLinks
const brandGuideCards: Record<string, { label: string; path: string }[]> = {
  "Avalon Waterways": [
    { path: "/avalon-waterways-ultimate-guide", label: "Avalon Waterways Ultimate Guide" },
    { path: "/avalon-waterways-reviews", label: "Avalon Waterways Reviews" },
    { path: "/which-avalon-ship-is-best", label: "Which Avalon Ship Is Best?" },
    { path: "/which-avalon-cabin-is-best", label: "Which Avalon Cabin Is Best?" },
    { path: "/is-avalon-waterways-worth-it", label: "Is Avalon Worth It?" },
    { path: "/how-much-does-avalon-cost", label: "Avalon Cruise Cost" },
  ],

  "AmaWaterways": [
    { path: "/amawaterways-ultimate-guide", label: "AmaWaterways Ultimate Guide" },
    { path: "/best-amawaterways-ships", label: "Best AmaWaterways Ships" },
    { path: "/is-amawaterways-worth-it", label: "Is AmaWaterways Worth It?" },
    { path: "/amawaterways-cruise-cost", label: "AmaWaterways Cruise Cost" },
    { path: "/amawaterways-cabin-guide", label: "AmaWaterways Cabin Guide" },
    { path: "/amawaterways-dining-guide", label: "AmaWaterways Dining Guide" },
  ],

  "Regent Seven Seas": [
    { path: "/ultimate-guide-regent-seven-seas-cruises", label: "Regent Seven Seas Ultimate Guide" },
    { path: "/best-regent-cruise-by-destination", label: "Best Regent Cruise by Destination" },
    { path: "/ultimate-regent-cruise-planning-guide", label: "Ultimate Planning Guide" },
    { path: "/first-time-regent-cruiser-handbook", label: "First-Time Cruiser Handbook" },
    { path: "/regent-seven-seas-suites-guide", label: "Regent Suites Guide" },
    { path: "/regent-seven-seas-cruise-costs", label: "Regent Cruise Costs" },
  ],

  "Windstar Cruises": [
    { path: "/windstar-cruises-ultimate-guide", label: "Windstar Cruises Ultimate Guide" },
    { path: "/wind-surf-ship-guide", label: "Wind Surf Ship Guide" },
    { path: "/wind-spirit-ship-guide", label: "Wind Spirit Ship Guide" },
    { path: "/star-pride-ship-guide", label: "Star Pride Ship Guide" },
    { path: "/star-legend-ship-guide", label: "Star Legend Ship Guide" },
    { path: "/star-breeze-ship-guide", label: "Star Breeze Ship Guide" },
  ],

  "Silversea": [
    { path: "/silversea-cruises-ultimate-guide", label: "Silversea Cruises Ultimate Guide" },
    { path: "/silversea-complete-guide", label: "Silversea Fleet Guide" },
    { path: "/silver-nova-cruise-ship-guide", label: "Silver Nova Cruise Ship Guide" },
    { path: "/silver-ray-cruise-ship-guide", label: "Silver Ray Cruise Ship Guide" },
    { path: "/silversea-antarctica-cruises", label: "Silversea Antarctica Cruises" },
    { path: "/what-is-included-on-silversea", label: "What Is Included on a Silversea Cruise?" },
  ],

  "Azamara Cruises": [
    { path: "/azamara-cruises-guide-2026-2027", label: "Azamara Cruises Guide 2026–2027" },
    { path: "/azamara-alaska-cruise", label: "Azamara Alaska Cruise" },
    { path: "/azamara-alaska-cruises", label: "Azamara Alaska Cruises" },
    { path: "/azamara-cabins-alaska-guide", label: "Azamara Cabins Alaska Guide" },
    { path: "/azamara-cabins-guide", label: "Azamara Cabins Guide" },
    { path: "/azamara-cabins-guide-2026", label: "Azamara Cabins Guide 2026" },
    { path: "/azamara-dining-guide", label: "Azamara Dining Guide" },
    { path: "/azamara-greece-cruises", label: "Azamara Greece Cruises" },
    { path: "/azamara-japan-cruises", label: "Azamara Japan Cruises" },
    { path: "/azamara-mediterranean-cruises", label: "Azamara Mediterranean Cruises" },
    { path: "/azamara-norway-fjords-cruises", label: "Azamara Norway Fjords Cruises" },
    { path: "/azamara-ship-comparison", label: "Azamara Ship Comparison" },
    { path: "/azamara-vs-regent-seven-seas", label: "Azamara vs Regent Seven Seas" },
    { path: "/azamara-vs-seabourn", label: "Azamara vs Seabourn" },
    { path: "/azamara-vs-viking-ocean-cruises", label: "Azamara vs Viking Ocean Cruises" },
    { path: "/best-cabins-on-azamara", label: "Best Cabins on Azamara" },
    { path: "/azamara-worth-it", label: "Is Azamara Worth It?" },
    { path: "/azamara-vs-oceania-cruises", label: "Azamara vs Oceania Cruises" },
    { path: "/book-azamara-travel-advisor", label: "Book Azamara Travel Advisor" },
  ],

  "viking cruises": [
    { path: "/viking-cruises", label: "Viking Cruises Overview" },
    { path: "/viking-river-cruises", label: "Viking River Cruises" },
    { path: "/viking-ocean-cruises", label: "Viking Ocean Cruises" },
    { path: "/viking-expedition-cruises", label: "Viking Expedition Cruises" },
    { path: "/viking-rhine-river-cruises", label: "Viking Rhine River Cruises" },
    { path: "/viking-danube-river-cruises", label: "Viking Danube River Cruises" },
    { path: "/viking-christmas-market-cruises", label: "Viking Christmas Market Cruises" },
    { path: "/viking-mediterranean-cruises", label: "Viking Mediterranean Cruises" },
    { path: "/viking-alaska-cruises", label: "Viking Alaska Cruises" },
    { path: "/viking-iceland-cruises", label: "Viking Iceland Cruises" },
    { path: "/is-viking-worth-it", label: "Is Viking Worth It?" },
    { path: "/viking-cruise-reviews", label: "Viking Cruise Reviews" },
    { path: "/viking-cruise-cost-guide", label: "Viking Cruise Cost Guide" },
    { path: "/what-is-included-on-viking-cruises", label: "What Is Included on Viking Cruises" },
    { path: "/who-should-sail-viking", label: "Who Should Sail Viking" },
    { path: "/who-should-not-sail-viking", label: "Who Should Not Sail Viking" },
    { path: "/viking-vs-amawaterways", label: "Viking vs AmaWaterways" },
    { path: "/viking-vs-tauck", label: "Viking vs Tauck" },
    { path: "/viking-vs-scenic", label: "Viking vs Scenic" },
    { path: "/viking-vs-uniworld", label: "Viking vs Uniworld" },
    { path: "/why-i-resisted-viking-for-years", label: "Why I Resisted Viking for Years" },
    { path: "/viking-cruise-resource-center", label: "Viking Cruise Resource Center" },
    { path: "/disney-cruise-vs-viking-ocean-cruises", label: "Disney Cruise Vs Viking Ocean Cruises" },
    { path: "/hx-expeditions-vs-viking-expeditions", label: "HX Expeditions vs Viking Expeditions" },
    { path: "/explora-vs-viking", label: "Explora Journeys vs Viking" },
  ],

  "disney cruises": [
    { path: "/disney-cruise-line-vacations", label: "Disney Cruise Line Vacations Overview" },
    { path: "/why-are-disney-cruises-so-expensive", label: "Why Are Disney Cruises So Expensive?" },
    { path: "/is-disney-cruise-really-just-for-kids", label: "Is Disney Cruise Really Only For Kids?" },
    { path: "/disney-cruise-vs-viking-ocean-cruises", label: "Disney Cruise vs Viking Ocean Cruises" },
    { path: "/disney-cruises-for-grandparents-and-multigenerational-families", label: "Disney Cruises for Grandparents and Multigenerational Families" },
    { path: "/disney-alaska-vs-princess-cruises", label: "Disney Alaska vs Princess Cruises" },
    { path: "/disney-europe-cruises", label: "Disney Europe Cruises" },
    { path: "/disney-caribbean-cruises", label: "Disney Caribbean Cruises" },
    { path: "/disney-bahamas-cruises", label: "Disney Bahamas Cruises" },
    { path: "/disney-cruises-from-florida", label: "Disney Cruises From Florida" },
    { path: "/disney-cruises-from-port-canaveral", label: "Disney Cruises From Port Canaveral" },
    { path: "/what-is-included-on-a-disney-cruise", label: "What Is Included in a Disney Cruise?" },
    { path: "/best-disney-cruise-ship-for-families", label: "Best Disney Cruise Ship for Families" },
    { path: "/disney-cruise-for-adults-without-kids", label: "Disney Cruise for Adults Without Kids" },
    { path: "/what-luxury-travelers-get-wrong-about-disney-cruise-line", label: "Disney Luxury Cruise" },
    { path: "/is-disney-cruise-line-worth-the-money", label: "Is a Disney Cruise Worth the Money?" },
    { path: "/disney-cruise-vs-royal-caribbean", label: "Disney vs Royal Caribbean" },
    { path: "/is-disney-concierge-worth-it", label: "Disney Concierge: Is It Worth It?" },
    { path: "/best-disney-cruise-ship-for-adults", label: "Best Disney Cruise Ship for Adults" },
    { path: "/disney-cruise-vs-celebrity-cruises", label: "Disney vs Celebrity Cruises" },
    { path: "/disney-wish-vs-disney-treasure", label: "Disney Wish vs Disney Treasure" },
    { path: "/castaway-cay-vs-lookout-cay", label: "Castaway Cay vs Lookout Cay" },
    { path: "/disney-concierge-benefits-explained", label: "Disney Concierge Benefits Explained" },
    { path: "/disney-cruise-dining-guide", label: "Disney Cruise Dining Guide" },
    { path: "/best-disney-cruise-cabins", label: "Best Disney Cruise Cabins" },
    { path: "/disney-cruise-booking-timeline", label: "Disney Cruise Booking Timeline" },
    { path: "/disney-cruise-packing-list", label: "Disney Cruise Packing List" },
    { path: "/disney-alaska-cruises", label: "Disney Alaska Cruises" },
    { path: "/disney-alaska-vs-holland-america", label: "Disney Alaska vs Holland America" },
  ],

  "explora jouneys": [
    { path: "/luxury-explora-journeys-guide", label: "Luxury Explora Journeys Guide" },
    { path: "/best-explora-cruises-for-first-time-luxury-travelers", label: "Best Explora Cruises for First-Time Luxury Travelers" },
    { path: "/best-suites-on-explora-journeys", label: "Best Suites on Explora Journeys" },
    { path: "/explora-faq-before-booking", label: "Explora FAQ: Everything Before Booking" },
    { path: "/explora-journeys-vs-seabourn", label: "Explora Journeys vs Seabourn" },
    { path: "/explora-journeys-vs-silversea", label: "Explora Journeys vs Silversea" },
    { path: "/how-much-does-an-explora-cruise-cost-2026-2027", label: "How Much Does an Explora Cruise Cost?" },
    { path: "/is-explora-journeys-worth-it", label: "Is Explora Journeys Worth It?" },
    { path: "/should-you-book-explora-through-a-travel-advisor", label: "Should You Book Explora Through a Travel Advisor?" },
    { path: "/explora-journeys-cruise-inclusions", label: "What Is Included on Explora Journeys?" },
    { path: "/explora-journeys-review", label: "Explora Journeys Review" },
    { path: "/what-makes-explora-journeys-different", label: "What Makes Explora Journeys Different?" },
    { path: "/is-explora-journeys-luxury", label: "Is Explora Journeys Luxury?" },
    { path: "/planning-your-first-explora-journey", label: "Planning Your First Explora Journey" },
    { path: "/who-should-sail-explora-journeys", label: "Who Should Sail Explora Journeys?" },
    { path: "/which-explora-ship-should-you-choose", label: "Which Explora Ship Should You Choose?" },
    { path: "/explora-vs-regent", label: "Explora Journeys vs Regent Seven Seas" },
    { path: "/explora-vs-ritz-carlton-yacht-collection", label: "Explora Journeys vs Ritz-Carlton Yacht Collection" },
    { path: "/explora-vs-viking", label: "Explora Journeys vs Viking" },
    { path: "/explora-vs-oceania", label: "Explora Journeys vs Oceania" },
    { path: "/explora-vs-scenic", label: "Explora Journeys vs Scenic" },
    { path: "/explora-vs-crystal", label: "Explora Journeys vs Crystal" },
    { path: "/explora-vs-ponant", label: "Explora Journeys vs Ponant" },
    { path: "/which-explora-suite-is-worth-the-upgrade", label: "Which Explora Suite Is Worth the Upgrade?" },
    { path: "/is-explora-good-for-families", label: "Is Explora Good for Families?" },
    { path: "/is-explora-good-for-solo-travelers", label: "Is Explora Good for Solo Travelers?" },
    { path: "/how-far-in-advance-should-you-book-explora", label: "How Far in Advance Should You Book Explora?" },
    { path: "/how-to-get-the-best-value-on-explora-journeys", label: "How to Get the Best Value on Explora Journeys" },
    { path: "/what-to-pack-for-an-explora-cruise", label: "What to Pack for an Explora Cruise" },
    { path: "/which-mediterranean-itinerary-is-best", label: "Which Mediterranean Itinerary Is Best?" },
    { path: "/explora-i-review", label: "Explora I Review" },
    { path: "/explora-ii-review", label: "Explora II Review" },
    { path: "/explora-iii-guide", label: "Explora III Guide" },
    { path: "/explora-iv-guide", label: "Explora IV Guide" },
    { path: "/dining-on-explora-journeys", label: "Dining on Explora Journeys" },
    { path: "/explora-journeys-wellness-experience", label: "Explora Journeys Wellness Experience" },
    { path: "/entertainment-life-onboard-explora-journeys", label: "Entertainment & Life Onboard Explora Journeys" },
    { path: "/mediterranean-cruises-on-explora-journeys", label: "Mediterranean Cruises on Explora Journeys" },
    { path: "/greece-greek-isles-cruises-on-explora-journeys", label: "Greece & Greek Isles Cruises on Explora Journeys" },
    { path: "/japan-cruises-on-explora-journeys", label: "Japan Cruises on Explora Journeys" },
    { path: "/alaska-cruises-on-explora-journeys", label: "Alaska Cruises on Explora Journeys" },
    { path: "/caribbean-cruises-on-explora-journeys", label: "Caribbean Cruises on Explora Journeys" },
    { path: "/northern-europe-cruises-on-explora-journeys", label: "Northern Europe Cruises on Explora Journeys" },
    { path: "/iceland-greenland-cruises-on-explora-journeys", label: "Iceland & Greenland Cruises on Explora Journeys" },
    { path: "/asia-cruises-on-explora-journeys", label: "Asia Cruises on Explora Journeys" },
    { path: "/why-choose-explora-journeys", label: "Why Choose Explora Journeys" },
    { path: "/explora-journeys-itineraries", label: "Explora Journeys Itineraries" },
    { path: "/explora-journeys-resource-center", label: "Explora Journeys Resource Center" },
    { path: "/luxury-travel-guide-explora-journeys", label: "Luxury Travel Guide Explora Journeys" },
    { path: "/why-luxury-travelers-are-choosing-explora-journeys", label: "Why Luxury Travelers Are Choosing Explora Journeys" },
  ],

  "scenic cruises": [
    { path: "/scenic-eclipse-discovery", label: "Scenic Eclipse Discovery Overview" },
    { path: "/scenic-antarctica-cruise", label: "Scenic Antarctica" },
    { path: "/scenic-vs-silversea-antarctica", label: "Scenic vs Silversea" },
    { path: "/scenic-vs-four-seasons-yachts", label: "Scenic vs Four Seasons Yachts" },
  ],

  "hx-expedition cruises": [
    { path: "/hx-expeditions", label: "HX Expedition Cruises Overview" },
    { path: "/best-hx-expeditions-cruises-for-first-timers", label: "Best HX Expeditions Cruises for First Timers" },
    { path: "/hx-expeditions-antarctica-cruises", label: "HX Expeditions Antarctica Cruises" },
    { path: "/hx-expeditions-galapagos-cruises", label: "HX Expeditions Galápagos Cruises" },
    { path: "/hx-expeditions-greenland-cruises", label: "HX Expeditions Greenland Cruises" },
    { path: "/hx-expeditions-ships", label: "HX Expeditions Ships" },
    { path: "/hx-expeditions-svalbard-cruises", label: "HX Expeditions Svalbard Cruises" },
    { path: "/hx-expeditions-vs-silversea-expeditions", label: "HX Expeditions vs Silversea Expeditions" },
    { path: "/hx-expeditions-vs-viking-expeditions", label: "HX Expeditions vs Viking Expeditions" },
  ],

  "riverside cruises": [
    { path: "/riverside-luxury-cruises", label: "Riverside Luxury Cruises Overview" },
    { path: "/riverside-vs-viking-river-cruises", label: "Riverside vs Viking River Cruises" },
    { path: "/riverside-vs-amawaterways", label: "Riverside vs AmaWaterways" },
  ],

  "Greece": [
    { path: "/greece-ultimate-guide", label: "Greece Ultimate Luxury Travel Guide" },
    { path: "/where-should-i-go-in-greece-for-my-first-trip", label: "First Trip to Greece Guide" },
    { path: "/santorini-or-mykonos-which-greek-island-should-i-choose", label: "Santorini or Mykonos?" },
    { path: "/best-greek-islands-besides-santorini-and-mykonos", label: "Best Greek Islands Beyond Santorini & Mykonos" },
    { path: "/naxos-vs-paros", label: "Naxos vs Paros" },
    { path: "/crete-vs-cyclades", label: "Crete vs. Cyclades" },
    { path: "/which-greek-islands-should-you-combine", label: "Which Greek Islands Should You Combine?" },
    { path: "/should-i-fly-or-take-ferries-between-greek-islands", label: "Fly or Ferry Between Greek Islands?" },
    { path: "/are-fast-ferries-in-greece-really-that-rough", label: "Are Fast Ferries in Greece Rough?" },
    { path: "/how-many-greek-islands-can-you-visit-in-7-10-days", label: "How Many Greek Islands in 7–10 Days?" },
    { path: "/do-you-need-a-rental-car-in-greece", label: "Do You Need a Rental Car in Greece?" },
    { path: "/how-many-days-do-you-really-need-in-athens", label: "How Many Days Do You Need in Athens?" },
    { path: "/should-you-visit-athens-before-or-after-greek-islands", label: "Athens Before or After Greek Islands?" },
    { path: "/where-to-stay-in-athens-first-time-visitors", label: "Where to Stay in Athens First Time" },
    { path: "/authentic-greece-without-crowds", label: "Authentic Greece Without Crowds" },
    { path: "/best-month-to-visit-greece", label: "Best Month to Visit Greece" },
    { path: "/is-september-or-october-better-than-summer-for-greece", label: "September vs October in Greece" },
    { path: "/is-greece-too-hot-in-july-and-august", label: "Is Greece Too Hot in July & August?" },
    { path: "/should-travelers-worry-about-wildfires-in-greece", label: "Greece Wildfires: Should Travelers Worry?" },
    { path: "/how-much-does-a-luxury-greece-vacation-cost-in-2026-and-2027", label: "Luxury Greece Vacation Cost 2026 & 2027" },
    { path: "/how-expensive-is-greece-2026-2027", label: "How Expensive Is Greece 2026–2027?" },
    { path: "/best-greek-island-for-honeymoon-couples", label: "Best Greek Island for Honeymoon" },
    { path: "/best-greek-island-for-families", label: "Best Greek Island for Families" },
    { path: "/which-greek-island-has-the-best-beaches", label: "Which Greek Island Has the Best Beaches?" },
    { path: "/is-a-small-ship-cruise-the-best-way-to-see-greece", label: "Small Ship Cruise vs Land Vacation in Greece" },
    { path: "/can-you-combine-a-greece-cruise-with-a-land-vacation", label: "Greece Cruise + Land Vacation Guide" },
    { path: "/is-greece-safe-to-visit-right-now", label: "Is Greece Safe to Visit Right Now?" },
    { path: "/do-americans-need-etias-to-travel-to-greece", label: "Do Americans Need ETIAS for Greece?" },
    { path: "/ees-greece-passport-control", label: "EES Greece Passport Control" },
    { path: "/biggest-mistakes-first-time-visitors-make-in-greece", label: "Biggest Mistakes First-Timers Make in Greece" },
    { path: "/greece-luxury-travel-guide", label: "Greece Luxury Travel Guide" },
    { path: "/small-ship-cruise-greece-guide", label: "Small Ship Cruise Greece Guide" },
  ],
};



export const CruiseBrandsTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setShowAll(false);
  };

  // All cards for the active tab — each card gets a unique image cycling through the brand's pool
  const pool = brandImagePools[activeTab] ?? [];
  const allDisplayCards: { label: string; path: string; image: string }[] =
    activeTab === "all"
      ? brandOverviewCards
      : (brandGuideCards[activeTab] ?? []).map((c, i) => ({
          label: c.label,
          path: c.path,
          image: pool[i % pool.length],
        }));

  // Show only 6 cards unless "Read More" has been clicked
  const displayCards = showAll ? allDisplayCards : allDisplayCards.slice(0, 6);
  const hasMore = allDisplayCards.length > 6;

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 w-full">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 text-brand-navy dark:text-white leading-tight">
            Explore Cruise Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Stay informed with our comprehensive guides, reviews, and comparisons of the world's finest cruise collections.
          </p>
        </div>

        {/* Tabs row */}
        <div className="w-full overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-start md:justify-center min-w-max gap-6 md:gap-8 px-2">
            {cruiseCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={cn(
                    "relative pb-3 text-sm md:text-base font-medium tracking-wide transition-all duration-300 focus:outline-none whitespace-nowrap capitalize",
                    isActive
                      ? "text-brand-navy dark:text-white font-semibold"
                      : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                  )}
                >
                  {category.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-navy dark:bg-brand-light-blue" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {displayCards.map((card, index) => {
            const childLinks = activeTab === "all" ? brandGuideCards[card.label] : null;
            const hasLinks = childLinks && childLinks.length > 0;
            const badgeCount = hasLinks ? childLinks.length + 1 : 0; // +1 to include the main page

            return (
              <div
                key={`${card.path}-${index}`}
                className="group relative h-72 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/40 dark:border-slate-800/20 block"
              >
                {/* Full card clickable background */}
                <Link to={card.path} className="absolute inset-0 z-0" aria-label={card.label}>
                  <span className="sr-only">{card.label}</span>
                </Link>
                
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] pointer-events-none"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent group-hover:from-slate-900/90 transition-all duration-300 pointer-events-none" />

                {/* Bottom Overlay Pill / Links */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end pointer-events-none">
                  {hasLinks ? (
                    <div className="flex flex-col w-full pointer-events-auto">
                      {/* Main Pill */}
                      <Link
                        to={card.path}
                        className="inline-flex items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 w-full min-h-[2.5rem] rounded-xl px-4 text-xs sm:text-sm font-medium tracking-wide capitalize shadow-lg transition-colors border border-white/20 dark:border-slate-800/20"
                      >
                        {card.label}
                      </Link>
                      
                      {/* Hover Links Drawer */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[16rem] group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col gap-1.5 mt-0 group-hover:mt-2 overflow-y-auto custom-scrollbar pb-1 pr-1">
                        {childLinks.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            to={link.path}
                            className="inline-flex items-center justify-center bg-[#0B1120]/95 text-white hover:bg-blue-600 transition-colors duration-300 w-full min-h-[2.25rem] rounded-lg px-3 text-xs font-medium shadow-lg"
                          >
                            <span className="truncate">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/20 dark:border-slate-800/20 py-2.5 px-4 rounded-xl shadow-lg transition-colors group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 max-w-[90%] mx-auto text-center pointer-events-auto">
                      <Link to={card.path} className="text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm tracking-wide line-clamp-2 capitalize">
                        {card.label}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Read More button */}
        {!showAll && hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="border-2 border-brand-navy dark:border-white text-brand-navy dark:text-white px-10 py-3 tracking-[0.15em] uppercase font-medium text-sm hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy transition-all duration-300"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CruiseBrandsTabs;
