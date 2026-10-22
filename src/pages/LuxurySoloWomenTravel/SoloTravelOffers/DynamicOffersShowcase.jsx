import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, CheckCircle2, AlertCircle, Calendar, DollarSign, 
  Search, SlidersHorizontal, Settings2, ShieldCheck, ArrowRight, Compass, Ship
} from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import OffersAdminModal from './OffersAdminModal';

const STORAGE_KEY = 'trips_ships_verified_solo_offers_v1';

const DynamicOffersShowcase = ({ initialOffers, rules, sectionTitle, sectionNotice }) => {
  const [offers, setOffers] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading offers from localStorage', e);
    }
    return initialOffers || [];
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyActive, setShowOnlyActive] = useState(true);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(offers));
    } catch (e) {
      console.error('Error saving offers to localStorage', e);
    }
  }, [offers]);

  // Admin CRUD Handlers
  const handleSaveOffer = (offerData) => {
    setOffers(prev => {
      const exists = prev.some(o => o.id === offerData.id);
      if (exists) {
        return prev.map(o => o.id === offerData.id ? offerData : o);
      }
      return [offerData, ...prev];
    });
  };

  const handleDeleteOffer = (id) => {
    if (window.confirm('Are you sure you want to delete this offer from the live collection?')) {
      setOffers(prev => prev.filter(o => o.id !== id));
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all offers back to initial verified default items?')) {
      setOffers(initialOffers);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Filter logic
  const filteredOffers = offers.filter(offer => {
    if (showOnlyActive && offer.status !== 'Active') return false;
    if (selectedExperience !== 'ALL' && offer.experience !== selectedExperience) return false;
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchSupplier = offer.supplier.toLowerCase().includes(query);
      const matchDestination = offer.destination.toLowerCase().includes(query);
      const matchOffer = offer.soloOffer.toLowerCase().includes(query);
      return matchSupplier || matchDestination || matchOffer;
    }
    return true;
  });

  const experienceTabs = [
    { label: 'All Verified Offers', value: 'ALL' },
    { label: 'Ocean Cruises', value: 'Luxury Ocean Cruise' },
    { label: 'River Cruises', value: 'Luxury River Cruise' },
    { label: 'African Safaris', value: 'African Safari' },
    { label: 'Women-Only Tours', value: 'Women-Only Escorted Tour' }
  ];

  return (
    <section id="offers-feed" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs font-sans font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dynamic CMS Collection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              {sectionTitle || "Featured Solo Travel Offers"}
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
              {sectionNotice || "This section is actively updated and verified through the Trips & Ships offers database. Only verified, current offers appear here."}
            </p>
          </FadeIn>

          {/* Admin Management Trigger Button */}
          <FadeIn delay={0.1} className="shrink-0">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-slate-200 border border-white/20 transition-all text-xs font-bold font-sans tracking-wide shadow-lg group"
            >
              <Settings2 className="w-4 h-4 text-gold-400 group-hover:text-navy-950 transition-colors" />
              <span>Manage Offers (Admin Panel)</span>
            </button>
          </FadeIn>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-navy-950/80 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl mb-10 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {experienceTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedExperience(tab.value)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-sans transition-all ${
                    selectedExperience === tab.value
                      ? 'bg-gold-500 text-navy-950 font-bold shadow-md shadow-gold-500/20'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search and Active Toggle */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search destination, supplier..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none bg-white/5 px-3 py-2 rounded-xl border border-white/10 text-xs font-sans text-slate-300">
                <input
                  type="checkbox"
                  checked={showOnlyActive}
                  onChange={(e) => setShowOnlyActive(e.target.checked)}
                  className="rounded text-gold-500 focus:ring-gold-500 h-3.5 w-3.5"
                />
                <span>Active Only</span>
              </label>
            </div>

          </div>
        </div>

        {/* Live Offers Grid */}
        {filteredOffers.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 p-8">
            <AlertCircle className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="font-display text-2xl text-white mb-2">No Matching Offers Found</h3>
            <p className="font-sans text-sm text-slate-400 max-w-md mx-auto mb-6">
              There are currently no published promotions matching your search criteria. Please adjust your filters or contact our advisors for unlisted inventory.
            </p>
            <button
              onClick={() => {
                setSelectedExperience('ALL');
                setSearchQuery('');
                setShowOnlyActive(false);
              }}
              className="px-6 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredOffers.map((offer, idx) => (
              <FadeIn key={offer.id || idx} delay={idx * 0.05}>
                <div className="bg-gradient-to-b from-navy-950 to-slate-900 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-gold-400/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group relative overflow-hidden">
                  
                  {/* Top Bar: Supplier & Status */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 border border-gold-400/20 px-3 py-1 rounded-lg">
                        {offer.supplier}
                      </span>
                      <span className={`font-sans text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        offer.status === 'Active' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      }`}>
                        {offer.status}
                      </span>
                    </div>

                    {/* Destination & Experience */}
                    <div>
                      <span className="font-sans text-xs text-slate-400 block mb-1">
                        {offer.experience}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-gold-200 transition-colors leading-snug">
                        {offer.destination}
                      </h3>
                    </div>

                    {/* Solo Offer Highlight Badge */}
                    <div className="p-3.5 rounded-2xl bg-gold-500/15 border border-gold-400/30">
                      <span className="font-sans text-[11px] text-gold-300 uppercase tracking-wider font-bold block mb-0.5">
                        Solo Promotion
                      </span>
                      <p className="font-sans text-sm font-bold text-white">
                        {offer.soloOffer}
                      </p>
                    </div>

                    {/* Price & Departure Details Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs font-sans">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Verified Price</span>
                        <span className="font-display text-lg font-bold text-emerald-400">
                          {offer.price} <span className="text-xs font-normal text-slate-300">{offer.currency}</span>
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Departure Date</span>
                        <span className="font-medium text-slate-200">{offer.departureDate || 'Selected Dates'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Offer Expires</span>
                        <span className="font-medium text-slate-200">{offer.offerExpires || 'Limited Inventory'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Last Verified</span>
                        <span className="font-medium text-gold-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {offer.lastVerified}
                        </span>
                      </div>
                    </div>

                    {/* Terms Note */}
                    {offer.terms && (
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-sans text-slate-300 leading-relaxed">
                        <strong className="text-slate-200">Terms:</strong> {offer.terms}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      to={offer.ctaLink || '/contact'}
                      className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-gold-500/25"
                    >
                      <span>{offer.ctaText || 'Ask About This Offer'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        )}

      </div>

      {/* Admin Panel Modal Component */}
      <OffersAdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        offers={offers}
        onSaveOffer={handleSaveOffer}
        onDeleteOffer={handleDeleteOffer}
        onResetDefaults={handleResetDefaults}
        rules={rules}
      />
    </section>
  );
};

export default DynamicOffersShowcase;
