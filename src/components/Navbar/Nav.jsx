import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  useEffect(() => {
    // Scroll active link into view inside its scrollable parent dropdown
    const timer = setTimeout(() => {
      const activeLink = document.querySelector(".nav-dropdown-menu .active, .offcanvas-menu .active");
      if (activeLink) {
        activeLink.scrollIntoView({ block: "center", inline: "nearest" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setHomeDropdownOpen(!homeDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        TRIPS & SHIPS
      </div>

      <div className="nav-links">
        <div className="nav-dropdown-wrapper">
          <Link to="/" className="nav-dropdown-trigger">
            HOME <i className="fas fa-angle-down"></i>
          </Link>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-group">
              <NavLink
                to="/azamara-ship-comparison"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Ship Comparison
              </NavLink>

              <NavLink
                to="/azamara-vs-regent-seven-seas"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara vs Regent Seven Seas
              </NavLink>

              <NavLink
                to="/azamara-vs-seabourn"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara vs Seabourn
              </NavLink>

              <NavLink
                to="/azamara-dining-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Dining Guide
              </NavLink>

              <NavLink
                to="/azamara-alaska-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Alaska Cruises
              </NavLink>

              <NavLink
                to="/azamara-norway-fjords-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Norway Fjords Cruises
              </NavLink>

              <NavLink
                to="/luxury-explora-journeys-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Explora Journeys Guide
              </NavLink>

              <NavLink
                to="/is-explora-journeys-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Explora Journeys Worth It?
              </NavLink>

              <NavLink
                to="/explora-journeys-cruise-inclusions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Journeys Cruise Inclusions
              </NavLink>

              <NavLink
                to="/how-much-does-an-explora-cruise-cost-2026-2027"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How Much Does an Explora Cruise Cost?
              </NavLink>

              <NavLink
                to="/explora-journeys-vs-seabourn"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Journeys vs Seabourn
              </NavLink>

              <NavLink
                to="/faculty-led-travel-programs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Faculty-Led Travel Programs
              </NavLink>

              <NavLink
                to="/educational-travel-programs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Educational Travel Programs
              </NavLink>

              <NavLink
                to="/luxury-alumni-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Alumni Travel
              </NavLink>

              <NavLink
                to="/alumni-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alumni Cruises
              </NavLink>

              <NavLink
                to="/university-group-travel-planning"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                University Group Travel Planning
              </NavLink>

              <NavLink
                to="/why-universities-partner-with-travel-companies"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why Universities Partner With Travel Companies
              </NavLink>

              <NavLink
                to="/alumni-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alumni River Cruises
              </NavLink>

              <NavLink
                to="/alumni-expedition-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alumni Expedition Cruises
              </NavLink>

              <NavLink
                to="/small-ship-alumni-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Small Ship Alumni Cruises
              </NavLink>

              <NavLink
                to="/donor-travel-programs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Donor Travel Programs
              </NavLink>

              <NavLink
                to="/multi-generational-alumni-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Multi-Generational Alumni Travel
              </NavLink>

              <NavLink
                to="/why-trips-and-ships-luxury-travel-for-universities"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why Trips and Ships Luxury Travel for Universities
              </NavLink>

              <NavLink
                to="/disney-cruise-line-vacations"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise Line Vacations
              </NavLink>

              <NavLink
                to="/disney-cruise-vs-viking-ocean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise vs Viking Ocean Cruises
              </NavLink>

              <NavLink
                to="/disney-cruises-for-grandparents-and-multigenerational-families"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise For Multigenerational Families
              </NavLink>

              <NavLink
                to="/disney-alaska-vs-princess-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Alaska vs Princess Cruises
              </NavLink>

              <NavLink
                to="/disney-alaska-vs-holland-america"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Alaska vs Holland America
              </NavLink>

              <NavLink
                to="/is-disney-cruise-really-just-for-kids"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Disney Cruise Really For Kids
              </NavLink>

              <NavLink
                to="/disney-alaska-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Alaska Cruises
              </NavLink>

              <NavLink
                to="/disney-europe-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Europe Cruises
              </NavLink>

              <NavLink
                to="/disney-caribbean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Caribbean Cruises
              </NavLink>

              <NavLink
                to="/disney-bahamas-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Bahamas Cruises
              </NavLink>

              <NavLink
                to="/disney-cruises-from-florida"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruises From Florida
              </NavLink>

              <NavLink
                to="/disney-cruises-from-port-canaveral"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruises From Port Canaveral
              </NavLink>

              <NavLink
                to="/why-are-disney-cruises-so-expensive"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why Are Disney Cruises So Expensive
              </NavLink>

              <NavLink
                to="/what-is-included-on-a-disney-cruise"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What is included on a disney cruise
              </NavLink>

              <NavLink
                to="/best-disney-cruise-ship-for-families"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Disney Cruise For Families
              </NavLink>

              <NavLink
                to="/viking-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Cruises
              </NavLink>

              <NavLink
                to="/viking-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking River Cruises
              </NavLink>

              <NavLink
                to="/viking-ocean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Ocean Cruises
              </NavLink>

              <NavLink
                to="/viking-expedition-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Expedition Cruises
              </NavLink>

              <NavLink
                to="/is-viking-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Viking Worth It
              </NavLink>

              <NavLink
                to="/viking-cruise-reviews"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Cruise Reviews
              </NavLink>

              <NavLink
                to="/viking-cruise-cost-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Cruise Cost Guide
              </NavLink>

              <NavLink
                to="/what-is-included-on-viking-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What is included on viking cruises
              </NavLink>

              <NavLink
                to="/who-should-sail-viking"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Who should sail viking
              </NavLink>

              <NavLink
                to="/who-should-not-sail-viking"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Who should not sail viking
              </NavLink>

              <NavLink
                to="/viking-danube-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Danube River Cruises
              </NavLink>

              <NavLink
                to="/travel-programs-for-museums"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Travel Programs For Museums
              </NavLink>

              <NavLink
                to="/travel-programs-for-aquariums"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Travel Programs For Aquariums
              </NavLink>

              <NavLink
                to="/travel-programs-for-zoos-conservation-organizations"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Travel Programs For Zoos Conservation Organizations
              </NavLink>

              <NavLink
                to="/travel-programs-for-foundations-nonprofits"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Travel Programs For Foundations Nonprofits
              </NavLink>

              <NavLink
                to="/donor-expedition-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Donor Expedition Cruises
              </NavLink>

              <NavLink
                to="/pressrelease"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Pressrelease
              </NavLink>

              <NavLink
                to="/which-explora-ship-should-you-choose"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Which Explora Ship should you choose
              </NavLink>

              <NavLink
                to="/which-explora-suite-is-worth-the-upgrade"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Which Explora Suite is worht the upgrade
              </NavLink>

              <NavLink
                to="/is-anthology-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Anthology Worth It
              </NavLink>

              <NavLink
                to="/which-mediterranean-itinerary-is-best"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Which Mediterranean itinerary is best
              </NavLink>

              <NavLink
                to="/is-explora-good-for-families"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is explora good for families
              </NavLink>

              <NavLink
                to="/is-explora-good-for-solo-travelers"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is explora good for solo travelers
              </NavLink>

              <NavLink
                to="/how-far-in-advance-should-you-book-explora"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How far in advance should you book explora
              </NavLink>

              <NavLink
                to="/how-to-get-the-best-value-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How to get the best value on explora journeys
              </NavLink>

              <NavLink
                to="/what-to-pack-for-an-explora-cruise"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What to pack for an explora cruise
              </NavLink>

              <NavLink
                to="/professional-athlete-family-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                professional athlete family travel
              </NavLink>

              <NavLink
                to="/off-season-luxury-travel-for-professional-athletes"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                off season luxury travel for professional athletes
              </NavLink>

              <NavLink
                to="/multigenerational-travel-for-professional-athletes"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                multigenerational travel for professional athletes
              </NavLink>

              <NavLink
                to="/private-villas-yachts-exclusive-resorts"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                private villas, yachts, and exclusive resorts
              </NavLink>

              <NavLink
                to="/privacy-security-travel-planning"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                privacy and security in travel planning
              </NavLink>

              <NavLink
                to="/championship-celebrations-milestone-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                championship celebrations and milestone travel
              </NavLink>

              <NavLink
                to="/luxury-wellness-recovery-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                luxury wellness and recovery travel
              </NavLink>

              <NavLink
                to="/private-jet-concierge-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                private jet concierge travel
              </NavLink>

              <NavLink
                to="/professional-athlete-bucket-list-adventures"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                professional athlete bucket list adventures
              </NavLink>

              <NavLink
                to="/luxury-sports-travel-experiences"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                luxury sports travel experiences
              </NavLink>

              <NavLink
                to="/traveling-during-the-competitive-season"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                traveling during the competitive season
              </NavLink>

              <NavLink
                to="/family-concierge-travel-services"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                family concierge travel services
              </NavLink>

              <NavLink
                to="/luxury-cruises-for-professional-athletes"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                luxury cruises for professional athletes
              </NavLink>

              <NavLink
                to="/explora-journeys-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explore Journeys Review
              </NavLink>

              <NavLink
                to="/what-makes-explora-journeys-different"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What Makes Explora Journeys Different?
              </NavLink>

              <NavLink
                to="/is-explora-journeys-luxury"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Explora Journeys Luxury?
              </NavLink>

              <NavLink
                to="/planning-your-first-explora-journey"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Planning Your First Explora Journey
              </NavLink>

              <NavLink
                to="/who-should-sail-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Who Should Sail Explora Journeys?
              </NavLink>

              <NavLink
                to="/explora-i-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora I Review
              </NavLink>

              <NavLink
                to="/explora-ii-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora II Review
              </NavLink>

              <NavLink
                to="/explora-iii-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora III Guide
              </NavLink>

              <NavLink
                to="/explora-iv-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora IV Guide
              </NavLink>

              <NavLink
                to="/dining-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Dining on Explora Journeys
              </NavLink>

              <NavLink
                to="/explora-journeys-wellness-experience"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora journeys wellness experience
              </NavLink>

              <NavLink
                to="/entertainment-life-onboard-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Entertainment life onboard explora journeys
              </NavLink>

              <NavLink
                to="/mediterranean-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Mediterranean cruises on explora journeys
              </NavLink>

              <NavLink
                to="/greece-greek-isles-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Greece greek isles cruises on explora journeys
              </NavLink>

              <NavLink
                to="/japan-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Japan Cruises on explora journeys
              </NavLink>

              <NavLink
                to="/alaska-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alaska Cruises on explora journeys
              </NavLink>

              <NavLink
                to="/caribbean-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Caribbean Cruises on explora journeys
              </NavLink>

              <NavLink
                to="/northern-europe-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Northern Europe Cruises on explora journeys
              </NavLink>

              <NavLink
                to="/iceland-greenland-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Iceland Greenland Cruises on explora journeys
              </NavLink>

              <NavLink
                to="/asia-cruises-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Asia Cruises on explora journeys
              </NavLink>

              <NavLink
                to="/azamara-vs-oceania-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara vs Oceania Cruises
              </NavLink>

              <NavLink
                to="/book-azamara-travel-advisor"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Book Azamara Travel Advisor
              </NavLink>

              <NavLink
                to="/why-choose-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                why choose explora journeys
              </NavLink>

              <NavLink
                to="/explora-journeys-itineraries"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                explora journeys itineraries
              </NavLink>

              <NavLink
                to="/explora-journeys-resource-center"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                explora journeys resource center
              </NavLink>

              <NavLink
                to="/luxury-travel-guide-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                luxury travel guide explora journeys
              </NavLink>

              <NavLink
                to="/why-luxury-travelers-are-choosing-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                why luxury travelers are choosing explora journeys
              </NavLink>

              <NavLink
                to="/riverside-luxury-cruises-reviews"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Luxury Cruises Reviews
              </NavLink>

              <NavLink
                to="/riverside-luxury-cruises"
                end
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Luxury Cruises
              </NavLink>

              <NavLink
                to="/riverside-vs-scenic-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside vs Scenic River Cruises
              </NavLink>

              <NavLink
                to="/riverside-vs-uniworld-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside vs Uniworld River Cruises
              </NavLink>

              <NavLink
                to="/riverside-vs-tauck-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside vs Tauck River Cruises
              </NavLink>

              <NavLink
                to="/riverside-vs-avalon-waterways"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside vs Avalon Waterways
              </NavLink>

              <NavLink
                to="/riverside-mozart-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Mozart Review
              </NavLink>

              <NavLink
                to="/riverside-debussy-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Debussy Review
              </NavLink>

              <NavLink
                to="/riverside-ravel-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Ravel Review
              </NavLink>

              <NavLink
                to="/is-riverside-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Riverside Worth It?
              </NavLink>


              <NavLink
                to="/what-is-included-on-riverside"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What Is Included On Riverside Luxury Cruises
              </NavLink>

              <NavLink
                to="/best-riverside-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Riverside Luxury Cruises
              </NavLink>

              <NavLink
                to="/riverside-danube-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Danube Cruises
              </NavLink>

              <NavLink
                to="/riverside-rhine-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Rhine Cruises
              </NavLink>

              <NavLink
                to="/riverside-rhone-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Rhone Cruises
              </NavLink>


              <NavLink
                to="/riverside-christmas-market-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Christmas Market Cruises
              </NavLink>

              <NavLink
                to="/riverside-tulip-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Tulip Cruises
              </NavLink>


              <NavLink
                to="/riverside-luxury-cruises-pros-and-cons"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Riverside Luxury Cruises Pros and Cons
              </NavLink>


              <NavLink
                to="/honest-riverside-cruise-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Honest riverside cruise review
              </NavLink>

              <NavLink
                to="/who-should-sail-riverside"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Who Should Sail Riverside
              </NavLink>


              <NavLink
                to="/scenic-river-cruises"
                end
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises
              </NavLink>


              <NavLink
                to="/scenic-river-cruises/review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Review
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/what-is-included"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What Is Included Scenic River Cruise
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/cost"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How Much Does Scenic River Cruise Cost
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/is-scenic-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Scenic River Cruise Worth Money
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/ships-suites"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruise Ships and Suites Guide
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/cabin-categories"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruise Cabin Categories Explained
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/best-cabins"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Best Cabins
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/best-itineraries"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Best Itineraries
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/first-time-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises First Time Guide
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/food-dining"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Food & Dining Review
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/dress-code-packing"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Dress Code & Packing Guide
              </NavLink>


              <NavLink
                to="/scenic-river-cruises/airfare-transfers"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Airfare & Transfers
              </NavLink>


              <NavLink
                to="/scenic-river-cruises/solo-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Solo Travel
              </NavLink>


              <NavLink
                to="/scenic-river-cruises/family-multigenerational"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises for Families
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/christmas-markets"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Christmas Market River Cruises
              </NavLink>


              <NavLink
                to="/scenic-river-cruises/freechoice-enrich"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Freechoice & Enrich
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/butler-service"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Butler Service
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/space-ships-sun-lounges"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic River Cruises Space Ships & Sun Lounges
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/rhine"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Rhine River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/danube"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Danube River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/seine"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Seine River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/rhone-saone"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Rhone & Saône River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/bordeaux"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Bordeaux River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/douro"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Douro River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/mekong"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Mekong River Cruises
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/scenic-vs-avalon"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Vs Avalon Waterways
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/scenic-vs-riverside"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Vs Riverside
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/scenic-vs-tauck"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Vs Tauck
              </NavLink>

              <NavLink
                to="/scenic-river-cruises/scenic-vs-celebrity/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Vs Celebrity
              </NavLink>

              <NavLink
                to="/seabourn-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Cruises
              </NavLink>


              <NavLink
                to="/seabourn-cruises/whats-included"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn What's Included
              </NavLink>

              <NavLink
                to="/seabourn-cruises/ships"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Ships
              </NavLink>

              <NavLink
                to="/seabourn-cruises/suites"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Suites
              </NavLink>

              <NavLink
                to="/seabourn-cruises/expeditions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Expedition
              </NavLink>

              <NavLink
                to="/seabourn-cruises/antarctica"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Antarctica
              </NavLink>


              <NavLink
                to="/seabourn-cruises/shore-excursions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Shore Excursions
              </NavLink>

              <NavLink
                to="/seabourn-cruises/seabourn-vs-silversea"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Vs Silversea
              </NavLink>

              <NavLink
                to="/seabourn-cruises/seabourn-vs-regent"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Vs Regent
              </NavLink>

              <NavLink
                to="/seabourn-vs-silversea-vs-regent"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn vs Silversea vs Regent
              </NavLink>

              <NavLink
                to="/seabourn-cruises/faqs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Faqs
              </NavLink>

              <NavLink
                to="/seabourn-cruises/why-book-with-us"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Why Book With Us
              </NavLink>

              <NavLink
                to="/seabourn-cruises/dining"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Dining
              </NavLink>

              <NavLink
                to="/seabourn-cruises/signature-experiences"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Signature Experiences
              </NavLink>

              <NavLink
                to="/seabourn-cruises/ships/seabourn-venture"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Venture Ship Guide
              </NavLink>

              <NavLink
                to="/seabourn-cruises/ships/seabourn-pursuit"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Pursuit Ship Guide
              </NavLink>

              <NavLink
                to="/seabourn-cruises/ships/seabourn-ovation"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Ovation Ship Guide
              </NavLink>


              <NavLink
                to="/seabourn-cruises/ships/seabourn-encore"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Encore Ship Guide
              </NavLink>


              <NavLink
                to="/seabourn-cruises/ships/seabourn-quest"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Quest Ship Guide
              </NavLink>

              <NavLink
                to="/seabourn-cruises/kimberley"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Kimberley
              </NavLink>

              <NavLink
                to="/seabourn-cruises/arctic-greenland"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Arctic & Greenland
              </NavLink>

              <NavLink
                to="/seabourn-cruises/alaska"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Alaska
              </NavLink>


              <NavLink
                to="/seabourn-cruises/mediterranean"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Mediterranean
              </NavLink>

              <NavLink
                to="/seabourn-cruises/caribbean"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Caribbean
              </NavLink>

              <NavLink
                to="/seabourn-cruises/solo-travelers"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Solo Travelers
              </NavLink>


              <NavLink
                to="/seabourn-cruises/world-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn World Cruises
              </NavLink>

              <NavLink
                to="/seabourn-cruises/is-seabourn-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Seabourn Worth it
              </NavLink>

              <NavLink
                to="/seabourn-cruises/cost"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How much does Seabourn cost
              </NavLink>

              <NavLink
                to="/seabourn-cruises/dress-code"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Dress Code
              </NavLink>

              <NavLink
                to="/seabourn-cruises/offers-loyalty"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Offers & Loyalty
              </NavLink>


              <NavLink
                to="/seabourn-cruises/request-a-quote"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Seabourn Request a quote
              </NavLink>

              <NavLink
                to="/best-travel-agent-florida"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Travel Agent in Florida
              </NavLink>

              <NavLink
                to="/best-travel-agency-florida"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Travel Agency in Florida
              </NavLink>

              <NavLink
                to="/best-cruise-travel-agent-florida"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Cruise Travel Agent in Florida
              </NavLink>

              <NavLink
                to="/how-to-find-reputable-travel-agent-florida"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How to Find a Reputable Travel Agent in Florida
              </NavLink>

              <NavLink
                to="/does-it-cost-more-to-book-through-a-travel-agent"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Does It Cost More to Book Through a Travel Agent?
              </NavLink>






















            </div>
          </div>
        </div>
        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
      </div>

      <div className="nav-right">
        <button className="nav-btn">CONTACT</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          ×
        </div>

        <div className="mobile-dropdown-wrapper">
          <div className="mobile-dropdown-trigger" onClick={toggleHomeDropdown}>
            HOME{" "}
            <i
              className={`fas fa-angle-${homeDropdownOpen ? "up" : "down"}`}
            ></i>
          </div>
          <div
            className={`mobile-dropdown-menu ${homeDropdownOpen ? "active" : ""}`}
          >
            <NavLink
              to="/azamara-ship-comparison"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Ship Comparison
            </NavLink>

            <NavLink
              to="/azamara-vs-regent-seven-seas"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara vs Regent Seven Seas
            </NavLink>

            <NavLink
              to="/azamara-vs-seabourn"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara vs Seabourn
            </NavLink>

            <NavLink
              to="/azamara-dining-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Dining Guide
            </NavLink>

            <NavLink
              to="/azamara-alaska-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Alaska Cruises
            </NavLink>

            <NavLink
              to="/azamara-norway-fjords-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Norway Fjords Cruises
            </NavLink>

            <NavLink
              to="/luxury-explora-journeys-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Explora Journeys Guide
            </NavLink>

            <NavLink
              to="/is-explora-journeys-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Explora Journeys Worth It?
            </NavLink>

            <NavLink
              to="/explora-journeys-cruise-inclusions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Journeys Cruise Inclusions
            </NavLink>

            <NavLink
              to="/how-much-does-an-explora-cruise-cost-2026-2027"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How Much Does an Explora Cruise Cost?
            </NavLink>

            <NavLink
              to="/explora-journeys-vs-seabourn"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Journeys vs Seabourn
            </NavLink>

            <NavLink
              to="/faculty-led-travel-programs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Faculty-Led Travel Programs
            </NavLink>

            <NavLink
              to="/educational-travel-programs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Educational Travel Programs
            </NavLink>

            <NavLink
              to="/luxury-alumni-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Alumni Travel
            </NavLink>

            <NavLink
              to="/alumni-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alumni Cruises
            </NavLink>

            <NavLink
              to="/university-group-travel-planning"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              University Group Travel Planning
            </NavLink>

            <NavLink
              to="/why-universities-partner-with-travel-companies"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why Universities Partner With Travel Companies
            </NavLink>

            <NavLink
              to="/alumni-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alumni River Cruises
            </NavLink>

            <NavLink
              to="/alumni-expedition-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alumni Expedition Cruises
            </NavLink>

            <NavLink
              to="/small-ship-alumni-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Small Ship Alumni Cruises
            </NavLink>

            <NavLink
              to="/donor-travel-programs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Donor Travel Programs
            </NavLink>

            <NavLink
              to="/multi-generational-alumni-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Multi-Generational Alumni Travel
            </NavLink>

            <NavLink
              to="/why-trips-and-ships-luxury-travel-for-universities"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why Trips and Ships Luxury Travel for Universities
            </NavLink>

            <NavLink
              to="/disney-cruise-line-vacations"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise Line Vacations
            </NavLink>

            <NavLink
              to="/disney-cruise-vs-viking-ocean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise vs Viking Ocean Cruises
            </NavLink>

            <NavLink
              to="/ "
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise For Multigenerational Families
            </NavLink>

            <NavLink
              to="/disney-alaska-vs-princess-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Alaska vs Princess Cruises
            </NavLink>

            <NavLink
              to="/disney-alaska-vs-holland-america"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Alaska vs Holland America
            </NavLink>

            <NavLink
              to="/is-disney-cruise-really-just-for-kids"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Disney Cruise Really For Kids
            </NavLink>

            <NavLink
              to="/disney-alaska-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Alaska Cruises
            </NavLink>

            <NavLink
              to="/disney-europe-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Europe Cruises
            </NavLink>

            <NavLink
              to="/disney-caribbean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Caribbean Cruises
            </NavLink>

            <NavLink
              to="/disney-bahamas-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Bahamas Cruises
            </NavLink>

            <NavLink
              to="/disney-cruises-from-florida"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruises From Florida
            </NavLink>

            <NavLink
              to="/disney-cruises-from-port-canaveral"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruises From Port Canaveral
            </NavLink>

            <NavLink
              to="/why-are-disney-cruises-so-expensive"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why Are Disney Cruises So Expensive
            </NavLink>

            <NavLink
              to="/what-is-included-on-a-disney-cruise"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What is included on a disney cruise
            </NavLink>

            <NavLink
              to="/best-disney-cruise-ship-for-families"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Disney Cruise For Families
            </NavLink>

            <NavLink
              to="/viking-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Cruises
            </NavLink>

            <NavLink
              to="/viking-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking River Cruises
            </NavLink>

            <NavLink
              to="/viking-ocean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Ocean Cruises
            </NavLink>

            <NavLink
              to="/viking-expedition-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Expedition Cruises
            </NavLink>

            <NavLink
              to="/is-viking-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Viking Worth It
            </NavLink>

            <NavLink
              to="/viking-cruise-reviews"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Cruise Reviews
            </NavLink>

            <NavLink
              to="/viking-cruise-cost-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Cruise Cost Guide
            </NavLink>

            <NavLink
              to="/what-is-included-on-viking-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What is included on viking cruises
            </NavLink>

            <NavLink
              to="/who-should-sail-viking"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Who should sail viking
            </NavLink>

            <NavLink
              to="/who-should-not-sail-viking"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Who should not sail viking
            </NavLink>

            <NavLink
              to="/viking-danube-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Danube River Cruises
            </NavLink>

            <NavLink
              to="/travel-programs-for-museums"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Travel Programs For Museums
            </NavLink>

            <NavLink
              to="/travel-programs-for-aquariums"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Travel Programs For Aquariums
            </NavLink>

            <NavLink
              to="/travel-programs-for-zoos-conservation-organizations"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Travel Programs For Zoos Conservation Organizations
            </NavLink>

            <NavLink
              to="/travel-programs-for-foundations-nonprofits"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Travel Programs For Foundations Nonprofits
            </NavLink>

            <NavLink
              to="/donor-expedition-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Donor Expedition Cruises
            </NavLink>

            <NavLink
              to="/which-explora-ship-should-you-choose"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Which Explora Ship should you choose
            </NavLink>

            <NavLink
              to="/which-explora-suite-is-worth-the-upgrade"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Which Explora Suite is worht the upgrade
            </NavLink>

            <NavLink
              to="/is-anthology-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Anthology Worth It
            </NavLink>

            <NavLink
              to="/which-mediterranean-itinerary-is-best"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Which Mediterranean itinerary is best
            </NavLink>

            <NavLink
              to="/is-explora-good-for-families"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is explora good for families
            </NavLink>

            <NavLink
              to="/is-explora-good-for-solo-travelers"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is explora good for solo travelers
            </NavLink>

            <NavLink
              to="/how-far-in-advance-should-you-book-explora"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How far in advance should you book explora
            </NavLink>

            <NavLink
              to="/how-to-get-the-best-value-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How to get the best value on explora journeys
            </NavLink>

            <NavLink
              to="/what-to-pack-for-an-explora-cruise"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What to pack for an explora cruise
            </NavLink>

            <NavLink
              to="/professional-athlete-family-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              professional athlete family travel
            </NavLink>

            <NavLink
              to="/off-season-luxury-travel-for-professional-athletes"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              off season luxury travel for professional athletes
            </NavLink>

            <NavLink
              to="/multigenerational-travel-for-professional-athletes"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              multigenerational travel for professional athletes
            </NavLink>

            <NavLink
              to="/private-villas-yachts-exclusive-resorts"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              private villas, yachts, and exclusive resorts
            </NavLink>

            <NavLink
              to="/privacy-security-travel-planning"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              privacy and security in travel planning
            </NavLink>

            <NavLink
              to="/championship-celebrations-milestone-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              championship celebrations and milestone travel
            </NavLink>

            <NavLink
              to="/luxury-wellness-recovery-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              luxury wellness and recovery travel
            </NavLink>

            <NavLink
              to="/private-jet-concierge-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              private jet concierge travel
            </NavLink>

            <NavLink
              to="/professional-athlete-bucket-list-adventures"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              professional athlete bucket list adventures
            </NavLink>

            <NavLink
              to="/luxury-sports-travel-experiences"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              luxury sports travel experiences
            </NavLink>

            <NavLink
              to="/traveling-during-the-competitive-season"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              traveling during the competitive season
            </NavLink>

            <NavLink
              to="/family-concierge-travel-services"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              family concierge travel services
            </NavLink>

            <NavLink
              to="/luxury-cruises-for-professional-athletes"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              luxury cruises for professional athletes
            </NavLink>

            <NavLink
              to="/explora-journeys-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explore Journeys Review
            </NavLink>

            <NavLink
              to="/what-makes-explora-journeys-different"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What Makes Explora Journeys Different?
            </NavLink>

            <NavLink
              to="/is-explora-journeys-luxury"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Explora Journeys Luxury?
            </NavLink>

            <NavLink
              to="/planning-your-first-explora-journey"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Planning Your First Explora Journey
            </NavLink>

            <NavLink
              to="/who-should-sail-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Who Should Sail Explora Journeys?
            </NavLink>

            <NavLink
              to="/explora-i-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora I Review
            </NavLink>

            <NavLink
              to="/explora-ii-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora II Review
            </NavLink>

            <NavLink
              to="/explora-iii-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora III Guide
            </NavLink>

            <NavLink
              to="/explora-iv-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora IV Guide
            </NavLink>

            <NavLink
              to="/dining-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Dining on Explora Journeys
            </NavLink>

            <NavLink
              to="/explora-journeys-wellness-experience"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora journeys wellness experience
            </NavLink>

            <NavLink
              to="/entertainment-life-onboard-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Entertainment life onboard explora journeys
            </NavLink>

            <NavLink
              to="/mediterranean-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Mediterranean cruises on explora journeys
            </NavLink>

            <NavLink
              to="/greece-greek-isles-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Greece greek isles cruises on explora journeys
            </NavLink>

            <NavLink
              to="/japan-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Japan Cruises on explora journeys
            </NavLink>

            <NavLink
              to="/alaska-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alaska Cruises on explora journeys
            </NavLink>

            <NavLink
              to="/caribbean-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Caribbean Cruises on explora journeys
            </NavLink>

            <NavLink
              to="/northern-europe-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Northern Europe Cruises on explora journeys
            </NavLink>

            <NavLink
              to="/iceland-greenland-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Iceland Greenland Cruises on explora journeys
            </NavLink>

            <NavLink
              to="/asia-cruises-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Asia Cruises on explora journeys
            </NavLink>

            <NavLink
              to="/azamara-vs-oceania-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara vs Oceania Cruises
            </NavLink>

            <NavLink
              to="/book-azamara-travel-advisor"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Book Azamara Travel Advisor
            </NavLink>

            <NavLink
              to="/why-choose-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              why choose explora journeys
            </NavLink>

            <NavLink
              to="/explora-journeys-itineraries"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              explora journeys itineraries
            </NavLink>

            <NavLink
              to="/explora-journeys-resource-center"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              explora journeys resource center
            </NavLink>

            <NavLink
              to="/luxury-travel-guide-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              luxury travel guide explora journeys
            </NavLink>

            <NavLink
              to="/why-luxury-travelers-are-choosing-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              why luxury travelers are choosing explora journeys
            </NavLink>

            <NavLink
              to="/riverside-luxury-cruises-reviews"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Luxury Cruises Reviews
            </NavLink>

            <NavLink
              to="/riverside-luxury-cruises"
              end
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Luxury Cruises
            </NavLink>

            <NavLink
              to="/riverside-vs-scenic-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside vs Scenic River Cruises
            </NavLink>

            <NavLink
              to="/riverside-vs-uniworld-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside vs Uniworld River Cruises
            </NavLink>

            <NavLink
              to="/riverside-vs-tauck-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside vs Tauck River Cruises
            </NavLink>

            <NavLink
              to="/riverside-vs-avalon-waterways"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside vs Avalon Waterways
            </NavLink>

            <NavLink
              to="/riverside-mozart-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Mozart Review
            </NavLink>

            <NavLink
              to="/riverside-debussy-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Debussy Review
            </NavLink>

            <NavLink
              to="/riverside-ravel-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Ravel Review
            </NavLink>

            <NavLink
              to="/is-riverside-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Riverside Worth It?
            </NavLink>

            <NavLink
              to="/what-is-included-on-riverside"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What Is Included On Riverside Luxury Cruises
            </NavLink>

            <NavLink
              to="/best-riverside-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Riverside Luxury Cruises
            </NavLink>

            <NavLink
              to="/riverside-danube-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Danube Cruises
            </NavLink>


            <NavLink
              to="/riverside-rhine-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Rhine Cruises
            </NavLink>

            <NavLink
              to="/riverside-rhone-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Rhone Cruises
            </NavLink>

            <NavLink
              to="/riverside-christmas-market-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Christmas Market Cruises
            </NavLink>

            <NavLink
              to="/riverside-tulip-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Tulip Cruises
            </NavLink>


            <NavLink
              to="/riverside-luxury-cruises-pros-and-cons"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside Luxury Cruises Pros and Cons
            </NavLink>


            <NavLink
              to="/honest-riverside-cruise-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Honest riverside cruise review
            </NavLink>

            <NavLink
              to="/who-should-sail-riverside"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Who Should Sail Riverside
            </NavLink>


            <NavLink
              to="/scenic-river-cruises"
              end
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Review
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/what-is-included"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What Is Included Scenic River Cruise
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/cost"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How Much Does Scenic River Cruise Cost
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/is-scenic-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Scenic River Cruise Worth Money
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/ships-suites"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruise Ships and Suites Guide
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/cabin-categories"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruise Cabin Categories Explained
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/best-cabins"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Best Cabins
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/best-itineraries"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Best Itineraries
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/first-time-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises First Time Guide
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/food-dining"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Food & Dining Review
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/dress-code-packing"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Dress Code & Packing Guide
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/airfare-transfers"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Airfare & Transfers
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/solo-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Solo Travel
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/family-multigenerational"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises for Families
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/christmas-markets"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Christmas Market River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/freechoice-enrich"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Freechoice & Enrich
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/butler-service"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Butler Service
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/space-ships-sun-lounges"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic River Cruises Space Ships & Sun Lounges
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/rhine"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Rhine River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/danube"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Danube River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/seine"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Seine River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/rhone-saone"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Rhone & Saône River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/bordeaux"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Bordeaux River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/douro"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Douro River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/mekong"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Mekong River Cruises
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/scenic-vs-avalon"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Vs Avalon Waterways
            </NavLink>


            <NavLink
              to="/scenic-river-cruises/scenic-vs-riverside"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Vs Riverside
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/scenic-vs-tauck"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Vs Tauck
            </NavLink>

            <NavLink
              to="/scenic-river-cruises/scenic-vs-celebrity/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Vs Celebrity
            </NavLink>

            <NavLink
              to="/seabourn-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Cruises
            </NavLink>

            <NavLink
              to="/seabourn-cruises/whats-included"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn What's Included
            </NavLink>

            <NavLink
              to="/seabourn-cruises/ships"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Ships
            </NavLink>

            <NavLink
              to="/seabourn-cruises/suites"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Suites
            </NavLink>

            <NavLink
              to="/seabourn-cruises/expeditions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Expedition
            </NavLink>


            <NavLink
              to="/seabourn-cruises/antarctica"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Antarctica
            </NavLink>


            <NavLink
              to="/seabourn-cruises/shore-excursions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Shore Excursions
            </NavLink>



            <NavLink
              to="/seabourn-cruises/seabourn-vs-silversea"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Vs Silversea
            </NavLink>

            <NavLink
              to="/seabourn-cruises/seabourn-vs-regent"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Vs Regent
            </NavLink>

            <NavLink
              to="/seabourn-vs-silversea-vs-regent"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn vs Silversea vs Regent
            </NavLink>

            <NavLink
              to="/seabourn-cruises/faqs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Faqs
            </NavLink>

            <NavLink
              to="/seabourn-cruises/why-book-with-us"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Why Book With Us
            </NavLink>

            <NavLink
              to="/seabourn-cruises/dining"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Dining
            </NavLink>


            <NavLink
              to="/seabourn-cruises/signature-experiences"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Signature Experiences
            </NavLink>

            <NavLink
              to="/seabourn-cruises/ships/seabourn-venture"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Venture Ship Guide
            </NavLink>

            <NavLink
              to="/seabourn-cruises/ships/seabourn-pursuit"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Pursuit Ship Guide
            </NavLink>

            <NavLink
              to="/seabourn-cruises/ships/seabourn-ovation"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Ovation Ship Guide
            </NavLink>

            <NavLink
              to="/seabourn-cruises/ships/seabourn-encore"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Encore Ship Guide
            </NavLink>

            <NavLink
              to="/seabourn-cruises/ships/seabourn-quest"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Quest Ship Guide
            </NavLink>

            <NavLink
              to="/seabourn-cruises/kimberley"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Kimberley
            </NavLink>

            <NavLink
              to="/seabourn-cruises/arctic-greenland"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Arctic & Greenland
            </NavLink>

            <NavLink
              to="/seabourn-cruises/alaska"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Alaska
            </NavLink>

            <NavLink
              to="/seabourn-cruises/mediterranean"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Mediterranean
            </NavLink>

            <NavLink
              to="/seabourn-cruises/caribbean"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Caribbean
            </NavLink>

            <NavLink
              to="/seabourn-cruises/solo-travelers"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Solo Travelers
            </NavLink>

            <NavLink
              to="/seabourn-cruises/world-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn World Cruises
            </NavLink>

            <NavLink
              to="/seabourn-cruises/is-seabourn-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Seabourn Worth it?
            </NavLink>


            <NavLink
              to="/seabourn-cruises/cost"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How much does Seabourn cost?
            </NavLink>

            <NavLink
              to="/seabourn-cruises/dress-code"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Dress Code
            </NavLink>

            <NavLink
              to="/seabourn-cruises/offers-loyalty"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Offers & Loyalty
            </NavLink>

            <NavLink
              to="/seabourn-cruises/request-a-quote"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Seabourn Request a quote
            </NavLink>

            <NavLink
              to="/best-travel-agent-florida"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Travel Agent in Florida
            </NavLink>

            <NavLink
              to="/best-travel-agency-florida"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Travel Agency in Florida
            </NavLink>

            <NavLink
              to="/best-cruise-travel-agent-florida"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Cruise Travel Agent in Florida
            </NavLink>

            <NavLink
              to="/how-to-find-reputable-travel-agent-florida"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How to Find a Reputable Travel Agent in Florida
            </NavLink>

            <NavLink
              to="/does-it-cost-more-to-book-through-a-travel-agent"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Does It Cost More to Book Through a Travel Agent?
            </NavLink>

            <span className="mobile-dropdown-divider"></span>
          </div>
        </div>

        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
        <button className="nav-btn">CONTACT</button>
      </div>
    </nav>
  );
};

export default Nav;
