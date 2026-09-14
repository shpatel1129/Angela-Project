
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark-navy text-white">
      <div className="container max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">
                  EST 1995
                </div>
                <div className="text-2xl font-serif font-normal tracking-wide text-white">
                  TRIPS & SHIPS
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-brand-light-blue mt-1">
                  LUXURY TRAVEL
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Creating extraordinary travel experiences for discerning travelers worldwide.
              Your journey to unforgettable destinations begins with us.
            </p>

            {/* Follow Us Section */}
            <div className="mb-4">
              <h4 className="font-medium text-white mb-2">Follow Us</h4>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                Stay inspired by following us for travel tips, insider exclusives, and luxury escapes around the globe.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/tripsandships/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/tripsandshipsluxurytravel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ocean-cruises" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Ocean Cruise
                </Link>
              </li>
              <li>
                <Link to="/expedition-cruises" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Expedition Cruising
                </Link>
              </li>
              <li>
                <Link to="/christmas-market-cruises" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Christmas Market Cruise
                </Link>
              </li>
              <li>
                <Link to="/river-cruises" className="text-gray-300 hover:text-white transition-colors text-sm">
                  River Cruise
                </Link>
              </li>
              <li>
                <Link to="/custom-safaris" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Safaris
                </Link>
              </li>
              <li>
                <Link to="/small-ship-cruises" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Small Ship Cruises
                </Link>
              </li>
              <li>
                <Link to="/disney-cruise-line-vacations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Disney Cruises
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destination-weddings-honeymoons" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Destination Weddings
                </Link>
              </li>
              <li>
                <Link to="/vip-hotels" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/family-and-multigenerational-travel" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Family Travel
                </Link>
              </li>
              <li>
                <Link to="/women-who-wander" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Women Who Wander
                </Link>
              </li>
              <li>
                <Link to="/meetings-incentives" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Meetings &amp; Incentives
                </Link>
              </li>
              <li>
                <Link to="/alumni-travel" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Alumni Travel
                </Link>
              </li>
              <li>
                <Link to="/travel-insurance" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link to="/planning-fees" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Planning Fees
                </Link>
              </li>
              <li>
                <Link to="/shore-excursions" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shore Excursions
                </Link>
              </li>
              <li>
                <Link to="/packing-tips" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Packing Tips
                </Link>
              </li>
              <li>
                <Link to="/boutique-travel" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Boutique Travel
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-light-blue mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Winter Garden, Florida</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-light-blue" />
                <span className="text-sm text-gray-300">(603) 860-3274</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-light-blue" />
                <span className="text-sm text-gray-300">sales@tripsandships.com</span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-brand-light-blue mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM EST</p>
                  <p>Sat - Sun: 8:00 AM - 8:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container max-w-7xl py-6">
          <div className="flex flex-col space-y-4">
            {/* Company Info & License Numbers */}
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-2">
                <strong>Trips & Ships Luxury Travel</strong> | Winter Garden, Florida | (603) 860-3274 | sales@tripsandships.com
              </div>
              <div className="text-xs text-gray-400 mb-2">
                Trusted Member of Internova/Travel Leaders Network | CLIA | ASTA | PATH
              </div>
              <div className="text-xs text-gray-400 mb-2">
                Florida Seller of Travel #3321471 | California #2148340 | Washington #605-600-800
              </div>
              <div className="text-xs text-gray-400 mb-1">
                © {new Date().getFullYear()} Trips &amp; Ships Luxury Travel. All Rights Reserved.
              </div>
              <div className="text-xs text-gray-500">
                Luxury travel experiences curated with expertise and care. Website by Chase Hughes
              </div>
            </div>

            {/* Legal Links & Theme Toggle */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                <Link to="/website-policy" className="hover:text-white transition-colors">
                  Website Policy
                </Link>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/accessibility-statement" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
                <Link to="/sitemap" className="hover:text-white transition-colors">
                  Site Map
                </Link>
              </div>

              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
