// App.jsx — routes updated April 2026
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AzamaraShipComparison from "./pages/AzamaraShipComparison/Azamarashipcomparison";
import AzamaravsRegentSevenSeas from "./pages/AzamaravsRegentSevenSeas/AzamaravsRegentSevenSeas";
import AzamaraVsSeabourn from "./pages/AzamaravsSeabourn/AzamaraVsSeabourn";
import AzamaraDiningGuide from "./pages/AzamaraDiningGuide/AzamaraDiningGuide";
import AzamaraAlaskCruises from "./pages/AzamaraAlaskCruises/AzamaraAlaskCruises";
import AzamaraNorwayFjordsCruises from "./pages/AzamaraNorwayFjordsCruises/AzamaraNorwayFjordsCruises";
import LuxuryExploraJourneysGuide from "./pages/LuxuryExploraJourneysGuide/LuxuryExploraJourneysGuide";
import ExploraJourneysWorth from "./pages/ExploraJourneysWorth/ExploraJourneysWorth";
import ExploraJourneysCruises from "./pages/ExploraJourneysCruises/ExploraJourneysCruises";
import ExploraCruiseCost from "./pages/ExploraCruiseCost/ExploraCruiseCost";
import ExploraJourneysvsSeabourn from "./pages/ExploraJourneysvsSeabourn/ExploraJourneysvsSeabourn";
import FacultyLedTravelPrograms from "./pages/FacultyLedTravelPrograms/FacultyLedTravelPrograms";
import EducationalTravelPrograms from "./pages/EducationalTravelPrograms/EducationalTravelPrograms";
import LuxuryAlumniTravel from "./pages/LuxuryAlumniTravel/LuxuryAlumniTravel";
import AlumniCruises from "./pages/AlumniCruises/AlumniCruises";
import UniversityGroupTravelPlanning from "./pages/UniversityGroupTravelPlanning/UniversityGroupTravelPlanning";
import WhyUniversitiesPartner from "./pages/WhyUniversitiesPartner/WhyUniversitiesPartner";
import LuxuryAlumniRiverCruises from "./pages/LuxuryAlumniRiverCruises/LuxuryAlumniRiverCruises";
import LuxuryAlumniExpeditionCruises from "./pages/LuxuryAlumniExpeditionCruises/LuxuryAlumniExpeditionCruises";
import SmallShipAlumniCruises from "./pages/SmallShipAlumniCruises/SmallShipAlumniCruises";
import DonorTravelPrograms from "./pages/DonorTravelPrograms/DonorTravelPrograms";
import MultiGenerationalAlumniTravel from "./pages/Multi-GenerationalAlumniTravel/MultiGenerationalAlumniTravel";
import WhyLuxuryTravelForUniversities from "./pages/WhyLuxuryTravelForUniversities/WhyLuxuryTravelForUniversities";
import DisneyCruisevsVikingOcean from "./pages/DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean";
import DisneyCruisesforGrandparents from "./pages/DisneyCruisesforGrandparents/DisneyCruisesforGrandparents";
import DisneyAlaskavsPrincessCruises from "./pages/DisneyAlaskavsPrincessCruises/DisneyAlaskavsPrincessCruises";
import DisneyAlaskavsHollandAmerica from "./pages/DisneyAlaskavsHollandAmerica/DisneyAlaskavsHollandAmerica";
import IsDisneyCruiseReallyForKids from "./pages/IsDisneyCruiseReallyForKids/IsDisneyCruiseReallyForKids";
import DisneyAlaskaCruises from "./pages/DisneyAlaskaCruises/DisneyAlaskaCruises";
import DisneyEuropeCruises from "./pages/DisneyEuropeCruises/DisneyEuropeCruises";
import DisneyCaribbeanCruises from "./pages/DisneyCaribbeanCruises/DisneyCaribbeanCruises";
import DisneyBahamasCruises from "./pages/DisneyBahamasCruises/DisneyBahamasCruises";
import DisneyCruisesFromFlorida from "./pages/DisneyCruisesFromFlorida/Disneycruisesfromflorida";
import DisneyCruisesFromPortCanaveral from "./pages/DisneyCruisesFromPortCanaveral/DisneyCruisesFromPortCanaveral";
import WhyAreDisneyCruisesSoExpensive from "./pages/WhyAreDisneyCruisesSoExpensive/WhyAreDisneyCruisesSoExpensive";
import WhatIsIncludedDisneyCruise from "./pages/WhatIsIncludedDisneyCruise/WhatIsIncludedDisneyCruise";
import BestDisneyCruiseShipForFamilies from "./pages/BestDisneyCruiseShipForFamilies/BestDisneyCruiseShipForFamilies";
import VikingCruises from "./pages/VikingCruises/VikingCruises";
import VikingRiverCruises from "./pages/VikingRiverCruises/VikingRiverCruises";
import VikingOceanCruises from "./pages/VikingOceanCruises/VikingOceanCruises";
import VikingExpeditionCruises from "./pages/VikingExpeditionCruises/VikingExpeditionCruises";
import IsVikingWorthIt from "./pages/IsVikingWorthIt/IsVikingWorthIt";
import VikingCruiseReviews from "./pages/VikingCruiseReviews/VikingCruiseReviews";
import VikingCruiseCostGuide from "./pages/VikingCruiseCostGuide/VikingCruiseCostGuide";
import WhatIncludedVikingCruises from "./pages/WhatIncludedVikingCruises/WhatIncludedVikingCruises";
import WhoShouldSailViking from "./pages/WhoShouldSailViking/WhoShouldSailViking";
import WhoShouldNotSailViking from "./pages/WhoShouldNotSailViking/WhoShouldNotSailViking";
import VikingDanubeRiverCruises from "./pages/VikingDanubeRiverCruises/VikingDanubeRiverCruises";
import DisneyCruiseLineVacations from "./pages/DisneyCruiseLineVacations/DisneyCruiseLineVacations";
import BestTravelAgentFlorida from "./pages/BestTravelAgentFlorida/BestTravelAgentFlorida";
import BestTravelAgencyFlorida from "./pages/BestTravelAgencyFlorida/BestTravelAgencyFlorida";
import BestCruiseTravelAgentFlorida from "./pages/BestCruiseTravelAgentFlorida/BestCruiseTravelAgentFlorida";
import TravelProgramsForMuseums from "./pages/TravelProgramsForMuseums/TravelProgramsForMuseums";
import TravelProgramsForAquariums from "./pages/TravelProgramsForAquariums/TravelProgramsForAquariums";
import TravelProgramsForZoos from "./pages/TravelProgramsForZoos/TravelProgramsForZoos";
import TravelProgramsForFoundations from "./pages/TravelProgramsForFoundations/TravelProgramsForFoundations";
import DonorExpeditionCruises from "./pages/DonorExpeditionCruises/DonorExpeditionCruises";
import Pressrelease from "./pages/Pressrelease/Pressrelease";
import WhichExploraShipChoose from "./pages/WhichExploraShipChoose/WhichExploraShipChoose";
import WhichExploraSuiteWorthUpgrade from "./pages/WhichExploraSuiteWorthUpgrade/WhichExploraSuiteWorthUpgrade";
import IsAnthologyWorthIt from "./pages/IsAnthologyWorthIt/IsAnthologyWorthIt";
import WhichMediterraneanIsBest from "./pages/WhichMediterraneanIsBest/WhichMediterraneanIsBest";
import IsExploraGoodForFamilies from "./pages/IsExploraGoodForFamilies/IsExploraGoodForFamilies";
import IsExploraGoodForSoloTravelers from "./pages/IsExploraGoodForSoloTravelers/IsExploraGoodForSoloTravelers";
import HowAdvanceShouldBookExplora from "./pages/HowAdvanceShouldBookExplora/HowAdvanceShouldBookExplora";
import HowGetBestValueExploraJourneys from "./pages/HowGetBestValueExploraJourneys/HowGetBestValueExploraJourneys";
import WhatPackForExploraCruise from "./pages/WhatPackForExploraCruise/WhatPackForExploraCruise";
import ProfessionalAthleteFamilyTravel from "./pages/ProfessionalAthleteFamilyTravel/ProfessionalAthleteFamilyTravel";
import OffSeasonLuxuryTravel from "./pages/OffSeasonLuxuryTravel/OffSeasonLuxuryTravel";
import MultigenerationalTravel from "./pages/MultigenerationalTravel/MultigenerationalTravel";
import PrivateVillasYachtsExclusiveResorts from "./pages/PrivateVillasYachtsExclusiveResorts/PrivateVillasYachtsExclusiveResorts";
import PrivacySecurityTravelPlanning from "./pages/PrivacySecurityTravelPlanning/PrivacySecurityTravelPlanning";
import ChampionshipCelebrationsMilestoneTravel from "./pages/ChampionshipCelebrationsMilestoneTravel/ChampionshipCelebrationsMilestoneTravel";
import LuxuryWellnessRecoveryTravel from "./pages/LuxuryWellnessRecoveryTravel/LuxuryWellnessRecoveryTravel";
import PrivateJetConciergeTravel from "./pages/PrivateJetConciergeTravel/PrivateJetConciergeTravel";
import ProfessionalAthleteBucketListAdventures from "./pages/ProfessionalAthleteBucketListAdventures/ProfessionalAthleteBucketListAdventures";
import LuxurySportsTravelExperiences from "./pages/LuxurySportsTravelExperiences/LuxurySportsTravelExperiences";
import TravelingDuringTheCompetitiveSeason from "./pages/TravelingDuringTheCompetitiveSeason/TravelingDuringTheCompetitiveSeason";
import FamilyConciergeTravelServices from "./pages/FamilyConciergeTravelServices/FamilyConciergeTravelServices";
import LuxuryCruisesForProfessionalAthletes from "./pages/LuxuryCruisesForProfessionalAthletes/LuxuryCruisesForProfessionalAthletes";
import ExploraJourneysReviews from "./pages/ExploraJourneysReviews/ExploraJourneysReviews";
import WhatMakesExploraDifferent from "./pages/WhatMakesExploraDifferent/WhatMakesExploraDifferent";
import IsExploraLuxury from "./pages/IsExploraLuxury/IsExploraLuxury";
import PlanningFirstJourney from "./pages/PlanningFirstJourney/PlanningFirstJourney";
import WhoShouldSailExploraJourneys from "./pages/WhoShouldSailExploraJourneys/WhoShouldSailExploraJourneys";
import ExploraIReview from "./pages/ExploraIReview/ExploraIReview";
import ExploraIIReview from "./pages/ExploraIIReview/ExploraIIReview";
import ExploraIIIGuide from "./pages/ExploraIIIGuide/ExploraIIIGuide";
import ExploraIVGuide from "./pages/ExploraIVGuide/ExploraIVGuide";
import DiningExploraJourneys from "./pages/DiningExploraJourneys/DiningExploraJourneys";
import ExploraJourneysWellnessExperience from "./pages/ExploraJourneysWellnessExperience/ExploraJourneysWellnessExperience";
import EntertainmentLifeOnboardExploraJourneys from "./pages/EntertainmentLifeOnboardExploraJourneys/EntertainmentLifeOnboardExploraJourneys";
import MediterraneanCruisesExploraJourneys from "./pages/MediterraneanCruisesExploraJourneys/MediterraneanCruisesExploraJourneys";
import GreeceGreekIslesCruisesExploraJourneys from "./pages/GreeceGreekIslesCruisesExploraJourneys/GreeceGreekIslesCruisesExploraJourneys";
import JapanCruisesExploraJourneys from "./pages/JapanCruisesExploraJourneys/JapanCruisesExploraJourneys";
import AlaskaCruisesExploraJourneys from "./pages/AlaskaCruisesExploraJourneys/AlaskaCruisesExploraJourneys";
import CaribbeanCruisesExploraJourneys from "./pages/CaribbeanCruisesExploraJourneys/CaribbeanCruisesExploraJourneys";
import NorthernEuropeCruisesExploraJourneys from "./pages/NorthernEuropeCruisesExploraJourneys/NorthernEuropeCruisesExploraJourneys";
import IcelandGreenlandCruisesExploraJourneys from "./pages/IcelandGreenlandCruisesExploraJourneys/IcelandGreenlandCruisesExploraJourneys";
import AsiaCruisesExploraJourneys from "./pages/AsiaCruisesExploraJourneys/AsiaCruisesExploraJourneys";
import AzamaravsOceaniaCruises from "./pages/AzamaravsOceaniaCruises/AzamaravsOceaniaCruises";
import BookAzamaraTravelAdvisor from "./pages/BookAzamaraTravelAdvisor/BookAzamaraTravelAdvisor";
import WhyChooseExploraJourneys from "./pages/WhyChooseExploraJourneys/WhyChooseExploraJourneys";
import ExploraJourneysItineraries from "./pages/ExploraJourneysItineraries/ExploraJourneysItineraries";
import ExploraJourneysResourceCenter from "./pages/ExploraJourneysResourceCenter/ExploraJourneysResourceCenter";
import LuxuryTravelGuideExploraJourneys from "./pages/LuxuryTravelGuideExploraJourneys/LuxuryTravelGuideExploraJourneys";
import WhyLuxuryTravelersChoosingExploraJourneys from "./pages/WhyLuxuryTravelersChoosingExploraJourneys/WhyLuxuryTravelersChoosingExploraJourneys";
import RiversideLuxuryCruisesReviews from "./pages/RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews";
import RiversideLuxuryCruises from "./pages/RiversideLuxuryCruises/RiversideLuxuryCruises";
import RiversideVsScenicRiverCruises from "./pages/RiversideVsScenicRiverCruises/RiversideVsScenicRiverCruises";
import RiversideVsUniworldRiverCruises from "./pages/RiversideVsUniworldRiverCruises/RiversideVsUniworldRiverCruises";
import RiversideVsTauckRiverCruises from "./pages/RiversideVsTauckRiverCruises/RiversideVsTauckRiverCruises";
import RiversideVsAvalonWaterways from "./pages/RiversideVsAvalonWaterways/RiversideVsAvalonWaterways";
import RiversideMozartReview from "./pages/RiversideMozartReview/RiversideMozartReview";
import RiversideDebussyReview from "./pages/RiversideDebussyReview/RiversideDebussyReview";
import RiversideRavelReview from "./pages/RiversideRavelReview/RiversideRavelReview";
import IsRiversideLuxuryCruisesWorthIt from "./pages/IsRiversideLuxuryCruisesWorthIt/IsRiversideLuxuryCruisesWorthIt";
import WhatIsIncludedRiversideLuxuryCruises from "./pages/WhatIsIncludedRiversideLuxuryCruises/WhatIsIncludedRiversideLuxuryCruises";
import BestRiversideCruises from "./pages/BestRiversideCruises/BestRiversideCruises";
import RiversideDanubeCruises from "./pages/RiversideDanubeCruises/RiversideDanubeCruises";
import RiversideRhineCruises from "./pages/RiversideRhineCruises/RiversideRhineCruises";
import RiversideRhoneCruises from "./pages/RiversideRhoneCruises/RiversideRhoneCruises";
import RiversideChristmasMarketCruises from "./pages/RiversideChristmasMarketCruises/RiversideChristmasMarketCruises";
import RiversideTulipCruises from "./pages/RiversideTulipCruises/RiversideTulipCruises";
import RiversideLuxuryCruisesProsandCons from "./pages/RiversideLuxuryCruisesProsandCons/RiversideLuxuryCruisesProsandCons";
import HonestRiversideCruiseReview from "./pages/HonestRiversideCruiseReview/HonestRiversideCruiseReview";
import WhoShouldSailRiverside from "./pages/WhoShouldSailRiverside/WhoShouldSailRiverside";
import ScenicRiverCruises from "./pages/ScenicRiverCruises/ScenicRiverCruises";
import ScenicRiverCruisesReview from "./pages/ScenicRiverCruisesReview/ScenicRiverCruisesReview";
import WhatIsIncludedScenicRiverCruise from "./pages/WhatIsIncludedScenicRiverCruise/WhatIsIncludedScenicRiverCruise";
import HowMuchDoesScenicRiverCruiseCost from "./pages/HowMuchDoesScenicRiverCruiseCost/HowMuchDoesScenicRiverCruiseCost";
import IsScenicRiverCruiseWorthMoney from "./pages/IsScenicRiverCruiseWorthMoney/IsScenicRiverCruiseWorthMoney";
import ScenicRiverCruiseShipsAndSuitesGuide from "./pages/ScenicRiverCruiseShipsAndSuitesGuide/ScenicRiverCruiseShipsAndSuitesGuide";
import ScenicRiverCruiseCabinCategoriesExplained from "./pages/ScenicRiverCruiseCabinCategoriesExplained/ScenicRiverCruiseCabinCategoriesExplained";
import BestScenicRiverCruiseCabins from "./pages/BestScenicRiverCruiseCabins/BestScenicRiverCruiseCabins";
import BestScenicRiverCruiseItineraries from "./pages/BestScenicRiverCruiseItineraries/BestScenicRiverCruiseItineraries";
import FirstTimeScenicRiverCruiseGuide from "./pages/FirstTimeScenicRiverCruiseGuide/FirstTimeScenicRiverCruiseGuide";
import ScenicRiverCruiseFoodDiningReview from "./pages/ScenicRiverCruiseFoodDiningReview/ScenicRiverCruiseFoodDiningReview";
import ScenicRiverCruiseDressCodePackingGuide from "./pages/ScenicRiverCruiseDressCodePackingGuide/ScenicRiverCruiseDressCodePackingGuide";
import ScenicRiverCruiseArrivalGuide from "./pages/ScenicRiverCruiseArrivalGuide/ScenicRiverCruiseArrivalGuide";
import ScenicSoloRiverCruises from "./pages/ScenicSoloRiverCruises/ScenicSoloRiverCruises";
import ScenicRiverCruisesForFamilies from "./pages/ScenicRiverCruisesForFamilies/ScenicRiverCruisesForFamilies";
import ScenicChristmasMarketRiverCruises from "./pages/ScenicChristmasMarketRiverCruises/ScenicChristmasMarketRiverCruises";
import ScenicFreechoiceExcursions from "./pages/ScenicFreechoiceExcursions/ScenicFreechoiceExcursions";
import ScenicRiverCruiseButlerService from "./pages/ScenicRiverCruiseButlerService/ScenicRiverCruiseButlerService";
import ScenicSpaceShips from "./pages/ScenicSpaceShips/ScenicSpaceShips";
import ScenicRhineRiverCruises from "./pages/ScenicRhineRiverCruises/ScenicRhineRiverCruises";
import ScenicDanubeRiverCruises from "./pages/ScenicDanubeRiverCruises/ScenicDanubeRiverCruises";
import ScenicSeineRiverCruises from "./pages/ScenicSeineRiverCruises/ScenicSeineRiverCruises";
import ScenicRhoneSaoneRiverCruises from "./pages/ScenicRhoneSaoneRiverCruises/ScenicRhoneSaoneRiverCruises";
import ScenicBordeauxRiverCruises from "./pages/ScenicBordeauxRiverCruises/ScenicBordeauxRiverCruises";
import ScenicDouroRiverCruisesPortugal from "./pages/ScenicDouroRiverCruisesPortugal/ScenicDouroRiverCruisesPortugal";
import ScenicMekongRiverCruises from "./pages/ScenicMekongRiverCruises/ScenicMekongRiverCruises";
import ScenicVsAvalonWaterways from "./pages/ScenicVsAvalonWaterways/ScenicVsAvalonWaterways";
import ScenicVsRiversideLuxuryCruises from "./pages/ScenicVsRiversideLuxuryCruises/ScenicVsRiversideLuxuryCruises";
import ScenicVsTauckRiverCruises from "./pages/ScenicVsTauckRiverCruises/ScenicVsTauckRiverCruises";
import Scenicvscelebrity from "./pages/Scenicvscelebrity/Scenicvscelebrity";
import SeabournCruises from "./pages/SeabournCruises/SeabournCruises";
import Seabournwhatsincluded from "./pages/Seabournwhatsincluded/Seabournwhatsincluded";
import Seabournships from "./pages/Seabournships/Seabournships";
import Seabournsuites from "./pages/Seabournsuites/Seabournsuites";
import Seabournexpeditioncruises from "./pages/Seabournexpeditioncruises/Seabournexpeditioncruises";
import Seabournantarcticacruises from "./pages/Seabournantarcticacruises/Seabournantarcticacruises";
import Seabournvssilversea from "./pages/Seabournvssilversea/Seabournvssilversea";
import Seabournshoreexcursions from "./pages/Seabournshoreexcursions/Seabournshoreexcursions";
import Seabournvsregent from "./pages/Seabournvsregent/Seabournvsregent";
import Seabournfaqs from "./pages/Seabournfaqs/Seabournfaqs";
import Seabournwhybookwithus from "./pages/Seabournwhybookwithus/Seabournwhybookwithus";
import Seabourndining from "./pages/Seabourndining/Seabourndining";
import Seabournsignatureexperiences from "./pages/Seabournsignatureexperiences/Seabournsignatureexperiences";
import SeabournVentureShipGuide from "./pages/SeabournVentureShipGuide/SeabournVentureShipGuide";
import SeabournPursuitShipGuide from "./pages/SeabournPursuitShipGuide/SeabournPursuitShipGuide";
import SeabournOvationShipGuide from "./pages/SeabournOvationShipGuide/SeabournOvationShipGuide";
import SeabournEncoreShipGuide from "./pages/SeabournEncoreShipGuide/SeabournEncoreShipGuide";
import SeabournQuestShipGuide from "./pages/SeabournQuestShipGuide/SeabournQuestShipGuide";
import SeabournKimberleyCruises from "./pages/SeabournKimberleyCruises/SeabournKimberleyCruises";
import SeabournArcticandGreenlandCruises from "./pages/SeabournArcticandGreenlandCruises/SeabournArcticandGreenlandCruises";
import SeabournAlaskaCruises from "./pages/SeabournAlaskaCruises/SeabournAlaskaCruises";
import SeabournMediterraneanCruises from "./pages/SeabournMediterraneanCruises/SeabournMediterraneanCruises";
import SeabournCaribbeanCruises from "./pages/SeabournCaribbeanCruises/SeabournCaribbeanCruises";
import SeabournSoloTravelers from "./pages/SeabournSoloTravelers/SeabournSoloTravelers";
import SeabournWorldCruises from "./pages/SeabournWorldCruises/SeabournWorldCruises";
import IsSeabournWorthPrice from "./pages/IsSeabournWorthPrice/IsSeabournWorthPrice";
import HowMuchDoesSeabournCruiseCost from "./pages/HowMuchDoesSeabournCruiseCost/HowMuchDoesSeabournCruiseCost";
import Seabournoffersloyalty  from "./pages/Seabournoffersloyalty/Seabournoffersloyalty";
import Seabourncruisequote   from "./pages/Seabourncruisequote/Seabourncruisequote";
import Seabourndresscode    from "./pages/Seabourndresscode/Seabourndresscode";


import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AzamaraShipComparison />} />

          <Route
            path="/azamara-ship-comparison"
            element={<AzamaraShipComparison />}
          />

          <Route
            path="/azamara-vs-regent-seven-seas"
            element={<AzamaravsRegentSevenSeas />}
          />

          <Route path="/azamara-vs-seabourn" element={<AzamaraVsSeabourn />} />

          <Route
            path="/azamara-dining-guide"
            element={<AzamaraDiningGuide />}
          />

          <Route
            path="/azamara-alaska-cruises"
            element={<AzamaraAlaskCruises />}
          />

          <Route
            path="/azamara-norway-fjords-cruises"
            element={<AzamaraNorwayFjordsCruises />}
          />

          <Route
            path="/luxury-explora-journeys-guide"
            element={<LuxuryExploraJourneysGuide />}
          />

          <Route
            path="/is-explora-journeys-worth-it"
            element={<ExploraJourneysWorth />}
          />

          <Route
            path="/explora-journeys-cruise-inclusions"
            element={<ExploraJourneysCruises />}
          />

          <Route
            path="/how-much-does-an-explora-cruise-cost-2026-2027"
            element={<ExploraCruiseCost />}
          />

          <Route
            path="/explora-journeys-vs-seabourn"
            element={<ExploraJourneysvsSeabourn />}
          />

          <Route
            path="/faculty-led-travel-programs"
            element={<FacultyLedTravelPrograms />}
          />

          <Route
            path="/educational-travel-programs"
            element={<EducationalTravelPrograms />}
          />

          <Route
            path="/luxury-alumni-travel"
            element={<LuxuryAlumniTravel />}
          />

          <Route path="/alumni-cruises" element={<AlumniCruises />} />

          <Route
            path="/university-group-travel-planning"
            element={<UniversityGroupTravelPlanning />}
          />

          <Route
            path="/why-universities-partner-with-travel-companies"
            element={<WhyUniversitiesPartner />}
          />

          <Route
            path="/alumni-river-cruises"
            element={<LuxuryAlumniRiverCruises />}
          />

          <Route
            path="/alumni-expedition-cruises"
            element={<LuxuryAlumniExpeditionCruises />}
          />

          <Route
            path="/small-ship-alumni-cruises"
            element={<SmallShipAlumniCruises />}
          />

          <Route
            path="/donor-travel-programs"
            element={<DonorTravelPrograms />}
          />

          <Route
            path="/multi-generational-alumni-travel"
            element={<MultiGenerationalAlumniTravel />}
          />

          <Route
            path="/why-trips-and-ships-luxury-travel-for-universities"
            element={<WhyLuxuryTravelForUniversities />}
          />

          <Route
            path="/disney-cruise-vs-viking-ocean-cruises"
            element={<DisneyCruisevsVikingOcean />}
          />

          <Route
            path="/disney-cruises-for-grandparents-and-multigenerational-families"
            element={<DisneyCruisesforGrandparents />}
          />

          <Route
            path="/disney-alaska-vs-princess-cruises"
            element={<DisneyAlaskavsPrincessCruises />}
          />

          <Route
            path="/disney-alaska-vs-holland-america"
            element={<DisneyAlaskavsHollandAmerica />}
          />

          <Route
            path="/is-disney-cruise-really-just-for-kids"
            element={<IsDisneyCruiseReallyForKids />}
          />

          <Route
            path="/disney-alaska-cruises"
            element={<DisneyAlaskaCruises />}
          />

          <Route
            path="/disney-europe-cruises"
            element={<DisneyEuropeCruises />}
          />

          <Route
            path="/disney-caribbean-cruises"
            element={<DisneyCaribbeanCruises />}
          />

          <Route
            path="/disney-bahamas-cruises"
            element={<DisneyBahamasCruises />}
          />

          <Route
            path="/disney-cruises-from-florida"
            element={<DisneyCruisesFromFlorida />}
          />

          <Route
            path="/disney-cruises-from-port-canaveral"
            element={<DisneyCruisesFromPortCanaveral />}
          />

          <Route
            path="/why-are-disney-cruises-so-expensive"
            element={<WhyAreDisneyCruisesSoExpensive />}
          />

          <Route
            path="/what-is-included-on-a-disney-cruise"
            element={<WhatIsIncludedDisneyCruise />}
          />

          <Route
            path="/best-disney-cruise-ship-for-families"
            element={<BestDisneyCruiseShipForFamilies />}
          />

          <Route
            path="/disney-cruise-line-vacations"
            element={<DisneyCruiseLineVacations />}
          />

          <Route
            path="/best-travel-agent-florida"
            element={<BestTravelAgentFlorida />}
          />

          <Route path="/viking-cruises" element={<VikingCruises />} />

          <Route
            path="/viking-river-cruises"
            element={<VikingRiverCruises />}
          />

          <Route
            path="/viking-ocean-cruises"
            element={<VikingOceanCruises />}
          />

          <Route
            path="/viking-expedition-cruises"
            element={<VikingExpeditionCruises />}
          />

          <Route path="/is-viking-worth-it" element={<IsVikingWorthIt />} />

          <Route
            path="/viking-cruise-reviews"
            element={<VikingCruiseReviews />}
          />

          <Route
            path="/viking-cruise-cost-guide"
            element={<VikingCruiseCostGuide />}
          />

          <Route
            path="/what-is-included-on-viking-cruises"
            element={<WhatIncludedVikingCruises />}
          />

          <Route
            path="/who-should-sail-viking"
            element={<WhoShouldSailViking />}
          />

          <Route
            path="/who-should-not-sail-viking"
            element={<WhoShouldNotSailViking />}
          />

          <Route
            path="/viking-danube-river-cruises"
            element={<VikingDanubeRiverCruises />}
          />

          <Route
            path="/travel-programs-for-museums"
            element={<TravelProgramsForMuseums />}
          />

          <Route
            path="/travel-programs-for-aquariums"
            element={<TravelProgramsForAquariums />}
          />

          <Route
            path="/travel-programs-for-zoos-conservation-organizations"
            element={<TravelProgramsForZoos />}
          />

          <Route
            path="/travel-programs-for-foundations-nonprofits"
            element={<TravelProgramsForFoundations />}
          />

          <Route
            path="/donor-expedition-cruises"
            element={<DonorExpeditionCruises />}
          />

          <Route path="/pressrelease" element={<Pressrelease />} />

          <Route
            path="/which-explora-ship-should-you-choose"
            element={<WhichExploraShipChoose />}
          />

          <Route
            path="/which-explora-suite-is-worth-the-upgrade"
            element={<WhichExploraSuiteWorthUpgrade />}
          />

          <Route
            path="/is-anthology-worth-it"
            element={<IsAnthologyWorthIt />}
          />

          <Route
            path="/which-mediterranean-itinerary-is-best"
            element={<WhichMediterraneanIsBest />}
          />

          <Route
            path="/is-explora-good-for-families"
            element={<IsExploraGoodForFamilies />}
          />

          <Route
            path="/is-explora-good-for-solo-travelers"
            element={<IsExploraGoodForSoloTravelers />}
          />

          <Route
            path="/how-far-in-advance-should-you-book-explora"
            element={<HowAdvanceShouldBookExplora />}
          />

          <Route
            path="/how-to-get-the-best-value-on-explora-journeys"
            element={<HowGetBestValueExploraJourneys />}
          />

          <Route
            path="/what-to-pack-for-an-explora-cruise"
            element={<WhatPackForExploraCruise />}
          />

          <Route
            path="/professional-athlete-family-travel"
            element={<ProfessionalAthleteFamilyTravel />}
          />

          <Route
            path="/off-season-luxury-travel-for-professional-athletes"
            element={<OffSeasonLuxuryTravel />}
          />

          <Route
            path="/multigenerational-travel-for-professional-athletes"
            element={<MultigenerationalTravel />}
          />

          <Route
            path="/private-villas-yachts-exclusive-resorts"
            element={<PrivateVillasYachtsExclusiveResorts />}
          />

          <Route
            path="/privacy-security-travel-planning"
            element={<PrivacySecurityTravelPlanning />}
          />

          <Route
            path="/championship-celebrations-milestone-travel"
            element={<ChampionshipCelebrationsMilestoneTravel />}
          />

          <Route
            path="/luxury-wellness-recovery-travel"
            element={<LuxuryWellnessRecoveryTravel />}
          />

          <Route
            path="/private-jet-concierge-travel"
            element={<PrivateJetConciergeTravel />}
          />

          <Route
            path="/professional-athlete-bucket-list-adventures"
            element={<ProfessionalAthleteBucketListAdventures />}
          />

          <Route
            path="/luxury-sports-travel-experiences"
            element={<LuxurySportsTravelExperiences />}
          />

          <Route
            path="/traveling-during-the-competitive-season"
            element={<TravelingDuringTheCompetitiveSeason />}
          />

          <Route
            path="/family-concierge-travel-services"
            element={<FamilyConciergeTravelServices />}
          />

          <Route
            path="/luxury-cruises-for-professional-athletes"
            element={<LuxuryCruisesForProfessionalAthletes />}
          />

          <Route
            path="/explora-journeys-review"
            element={<ExploraJourneysReviews />}
          />

          <Route
            path="/what-makes-explora-journeys-different"
            element={<WhatMakesExploraDifferent />}
          />

          <Route
            path="/is-explora-journeys-luxury"
            element={<IsExploraLuxury />}
          />

          <Route
            path="/planning-your-first-explora-journey"
            element={<PlanningFirstJourney />}
          />

          <Route
            path="/who-should-sail-explora-journeys"
            element={<WhoShouldSailExploraJourneys />}
          />

          <Route path="/explora-i-review" element={<ExploraIReview />} />
          <Route path="/explora-ii-review" element={<ExploraIIReview />} />
          <Route path="/explora-iii-guide" element={<ExploraIIIGuide />} />
          <Route path="/explora-iv-guide" element={<ExploraIVGuide />} />
          <Route path="/dining-on-explora-journeys" element={<DiningExploraJourneys />} />
          <Route path="/explora-journeys-wellness-experience" element={<ExploraJourneysWellnessExperience />} />
          <Route path="/entertainment-life-onboard-explora-journeys" element={<EntertainmentLifeOnboardExploraJourneys />} />
          <Route path="/mediterranean-cruises-on-explora-journeys" element={<MediterraneanCruisesExploraJourneys />} />
          <Route path="/greece-greek-isles-cruises-on-explora-journeys" element={<GreeceGreekIslesCruisesExploraJourneys />} />
          <Route path="/japan-cruises-on-explora-journeys" element={<JapanCruisesExploraJourneys />} />
          <Route path="/alaska-cruises-on-explora-journeys" element={<AlaskaCruisesExploraJourneys />} />
          <Route path="/caribbean-cruises-on-explora-journeys" element={<CaribbeanCruisesExploraJourneys />} />
          <Route path="/northern-europe-cruises-on-explora-journeys" element={<NorthernEuropeCruisesExploraJourneys />} />
          <Route path="/iceland-greenland-cruises-on-explora-journeys" element={<IcelandGreenlandCruisesExploraJourneys />} />
          <Route path="/asia-cruises-on-explora-journeys" element={<AsiaCruisesExploraJourneys />} />
          <Route path="/azamara-vs-oceania-cruises" element={<AzamaravsOceaniaCruises />} />
          <Route path="/book-azamara-travel-advisor" element={<BookAzamaraTravelAdvisor />} />
          <Route path="/why-choose-explora-journeys" element={<WhyChooseExploraJourneys />} />
          <Route path="/explora-journeys-itineraries" element={<ExploraJourneysItineraries />} />
          <Route path="/explora-journeys-resource-center" element={<ExploraJourneysResourceCenter />} />
          <Route path="/luxury-travel-guide-explora-journeys" element={<LuxuryTravelGuideExploraJourneys />} />
          <Route path="/why-luxury-travelers-are-choosing-explora-journeys" element={<WhyLuxuryTravelersChoosingExploraJourneys />} />
          <Route path="/riverside-luxury-cruises-reviews" element={<RiversideLuxuryCruisesReviews />} />
          <Route path="/riverside-luxury-cruises" element={<RiversideLuxuryCruises />} />
          <Route path="/riverside-vs-scenic-river-cruises" element={<RiversideVsScenicRiverCruises />} />
          <Route path="/riverside-vs-uniworld-river-cruises" element={<RiversideVsUniworldRiverCruises />} />
          <Route path="/riverside-vs-tauck-river-cruises" element={<RiversideVsTauckRiverCruises />} />
          <Route path="/riverside-vs-avalon-waterways" element={<RiversideVsAvalonWaterways />} />
          <Route path="/riverside-mozart-review" element={<RiversideMozartReview />} />
          <Route path="/riverside-debussy-review" element={<RiversideDebussyReview />} />
          <Route path="/riverside-ravel-review" element={<RiversideRavelReview />} />
          <Route path="/is-riverside-worth-it" element={<IsRiversideLuxuryCruisesWorthIt />} />
          <Route path="/what-is-included-on-riverside" element={<WhatIsIncludedRiversideLuxuryCruises />} />
          <Route path="/best-riverside-cruises" element={<BestRiversideCruises />} />
          <Route path="/riverside-danube-cruises" element={<RiversideDanubeCruises />} />
          <Route path="/riverside-rhine-cruises" element={<RiversideRhineCruises />} />
          <Route path="/riverside-rhone-cruises" element={<RiversideRhoneCruises />} />
          <Route path="/riverside-christmas-market-cruises" element={<RiversideChristmasMarketCruises />} />
          <Route path="/riverside-tulip-cruises" element={<RiversideTulipCruises />} />
          <Route path="/riverside-luxury-cruises-pros-and-cons" element={<RiversideLuxuryCruisesProsandCons />} />
          <Route path="/honest-riverside-cruise-review" element={<HonestRiversideCruiseReview />} />
          <Route path="/who-should-sail-riverside" element={<WhoShouldSailRiverside />} />
          <Route path="/scenic-river-cruises" element={<ScenicRiverCruises />} />
          <Route path="/scenic-river-cruises/review" element={<ScenicRiverCruisesReview />} />
          <Route path="/scenic-river-cruises/what-is-included" element={<WhatIsIncludedScenicRiverCruise />} />
          <Route path="/scenic-river-cruises/cost" element={<HowMuchDoesScenicRiverCruiseCost />} />
          <Route path="/scenic-river-cruises/is-scenic-worth-it" element={<IsScenicRiverCruiseWorthMoney />} />
          <Route path="/scenic-river-cruises/ships-suites" element={<ScenicRiverCruiseShipsAndSuitesGuide />} />
          <Route path="/scenic-river-cruises/cabin-categories" element={<ScenicRiverCruiseCabinCategoriesExplained />} />
          <Route path="/scenic-river-cruises/best-cabins" element={<BestScenicRiverCruiseCabins />} />
          <Route path="/scenic-river-cruises/best-itineraries" element={<BestScenicRiverCruiseItineraries />} />
          <Route path="/scenic-river-cruises/first-time-guide" element={<FirstTimeScenicRiverCruiseGuide />} />
          <Route path="/scenic-river-cruises/food-dining" element={<ScenicRiverCruiseFoodDiningReview />} />
          <Route path="/scenic-river-cruises/dress-code-packing" element={<ScenicRiverCruiseDressCodePackingGuide />} />
          <Route path="/scenic-river-cruises/airfare-transfers" element={<ScenicRiverCruiseArrivalGuide />} />
          <Route path="/scenic-river-cruises/solo-travel" element={<ScenicSoloRiverCruises />} />
          <Route path="/scenic-river-cruises/family-multigenerational" element={<ScenicRiverCruisesForFamilies />} />
          <Route path="/scenic-river-cruises/christmas-markets" element={<ScenicChristmasMarketRiverCruises />} />
          <Route path="/scenic-river-cruises/freechoice-enrich" element={<ScenicFreechoiceExcursions />} />
          <Route path="/scenic-river-cruises/butler-service" element={<ScenicRiverCruiseButlerService />} />
          <Route path="/scenic-river-cruises/space-ships-sun-lounges" element={<ScenicSpaceShips />} />
          <Route path="/scenic-river-cruises/rhine" element={<ScenicRhineRiverCruises />} />
          <Route path="/scenic-river-cruises/danube" element={<ScenicDanubeRiverCruises />} />
          <Route path="/scenic-river-cruises/seine" element={<ScenicSeineRiverCruises />} />
          <Route path="/scenic-river-cruises/rhone-saone" element={<ScenicRhoneSaoneRiverCruises />} />
          <Route path="/scenic-river-cruises/bordeaux" element={<ScenicBordeauxRiverCruises />} />
          <Route path="/scenic-river-cruises/douro" element={<ScenicDouroRiverCruisesPortugal />} />
          <Route path="/scenic-river-cruises/mekong" element={<ScenicMekongRiverCruises />} />
          <Route path="/scenic-river-cruises/scenic-vs-avalon" element={<ScenicVsAvalonWaterways />} />
          <Route path="/scenic-river-cruises/scenic-vs-riverside" element={<ScenicVsRiversideLuxuryCruises />} />
          <Route path="/scenic-river-cruises/scenic-vs-tauck" element={<ScenicVsTauckRiverCruises />} />
          <Route path="/scenic-river-cruises/scenic-vs-celebrity" element={<Scenicvscelebrity />} />
          <Route path="/seabourn-cruises" element={<SeabournCruises />} />
          <Route path="/seabourn-cruises/whats-included" element={<Seabournwhatsincluded />} />
          <Route path="/seabourn-cruises/ships" element={<Seabournships />} />
          <Route path="/seabourn-cruises/suites" element={<Seabournsuites />} />
          <Route path="/seabourn-cruises/expeditions" element={<Seabournexpeditioncruises />} />
          <Route path="/seabourn-cruises/antarctica" element={<Seabournantarcticacruises />} />
          <Route path="/seabourn-cruises/seabourn-vs-silversea" element={<Seabournvssilversea />} />
          <Route path="/seabourn-cruises/shore-excursions" element={<Seabournshoreexcursions />} />
          <Route path="/seabourn-cruises/seabourn-vs-regent" element={<Seabournvsregent />} />
          <Route path="/seabourn-cruises/faqs" element={<Seabournfaqs />} />
          <Route path="/seabourn-cruises/why-book-with-us" element={<Seabournwhybookwithus />} />
          <Route path="/seabourn-cruises/dining" element={<Seabourndining />} />
          <Route path="/seabourn-cruises/signature-experiences" element={<Seabournsignatureexperiences />} />
          <Route path="/seabourn-cruises/ships/seabourn-venture" element={<SeabournVentureShipGuide />} />
          <Route path="/seabourn-cruises/ships/seabourn-pursuit" element={<SeabournPursuitShipGuide />} />
          <Route path="/seabourn-cruises/ships/seabourn-ovation" element={<SeabournOvationShipGuide />} />
          <Route path="/seabourn-cruises/ships/seabourn-encore" element={<SeabournEncoreShipGuide />} />
          <Route path="/seabourn-cruises/ships/seabourn-quest" element={<SeabournQuestShipGuide />} />
          <Route path="/seabourn-cruises/kimberley" element={<SeabournKimberleyCruises />} />
          <Route path="/seabourn-cruises/arctic-greenland" element={<SeabournArcticandGreenlandCruises />} />
          <Route path="/seabourn-cruises/alaska" element={<SeabournAlaskaCruises />} />
          <Route path="/seabourn-cruises/mediterranean" element={<SeabournMediterraneanCruises />} />
          <Route path="/seabourn-cruises/caribbean" element={<SeabournCaribbeanCruises />} />
          <Route path="/seabourn-cruises/solo-travelers" element={<SeabournSoloTravelers />} />
          <Route path="/seabourn-cruises/world-cruises" element={<SeabournWorldCruises />} />
          <Route path="/seabourn-cruises/is-seabourn-worth-it" element={<IsSeabournWorthPrice />} />
          <Route path="/seabourn-cruises/cost" element={<HowMuchDoesSeabournCruiseCost />} />
          <Route path="/seabourn-cruises/offers-loyalty" element={<Seabournoffersloyalty />} />
          <Route path="/seabourn-cruises/request-a-quote" element={<Seabourncruisequote />} />
          <Route path="/seabourn-cruises/dress-code" element={<Seabourndresscode />} />
          <Route path="/best-travel-agent-florida" element={<BestTravelAgentFlorida />} />
          <Route path="/best-travel-agency-florida" element={<BestTravelAgencyFlorida />} />
          <Route path="/best-cruise-travel-agent-florida" element={<BestCruiseTravelAgentFlorida />} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
