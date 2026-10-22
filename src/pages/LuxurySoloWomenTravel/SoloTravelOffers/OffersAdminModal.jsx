import React, { useState } from 'react';
import { 
  X, Plus, Edit2, Trash2, CheckCircle2, AlertCircle, RefreshCw, 
  ShieldCheck, Calendar, DollarSign, Tag, Globe, Sparkles, SlidersHorizontal
} from 'lucide-react';

const EMPTY_OFFER = {
  id: '',
  supplier: '',
  experience: 'Luxury Ocean Cruise',
  destination: '',
  departureDate: '',
  soloOffer: 'Waived Single Supplement (0% Supplement)',
  price: '',
  currency: 'USD',
  offerExpires: '',
  lastVerified: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
  status: 'Active',
  terms: '',
  ctaText: 'Ask About This Offer',
  ctaLink: '/contact'
};

const OffersAdminModal = ({ 
  isOpen, 
  onClose, 
  offers, 
  onSaveOffer, 
  onDeleteOffer, 
  onResetDefaults,
  rules 
}) => {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'edit' | 'rules'
  const [editingOffer, setEditingOffer] = useState(EMPTY_OFFER);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleStartCreate = () => {
    setEditingOffer({
      ...EMPTY_OFFER,
      id: `offer-${Date.now()}`
    });
    setActiveTab('edit');
  };

  const handleStartEdit = (offer) => {
    setEditingOffer({ ...offer });
    setActiveTab('edit');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!editingOffer.supplier || !editingOffer.destination || !editingOffer.price) {
      alert('Please fill in required fields: Supplier, Destination, and Price.');
      return;
    }

    onSaveOffer(editingOffer);
    setSuccessMessage(`Offer "${editingOffer.supplier} - ${editingOffer.destination}" saved successfully!`);
    setTimeout(() => setSuccessMessage(''), 3500);
    setActiveTab('list');
  };

  const filteredOffers = offers.filter(offer => {
    if (filterStatus === 'ALL') return true;
    return offer.status.toUpperCase() === filterStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl my-8 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-white">Solo Travel Offers CMS Admin Panel</h3>
              <p className="font-sans text-xs text-slate-300">
                Manage, verify, publish, and archive dynamic luxury solo promotions in real-time
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert Banner */}
        {successMessage && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-3 flex items-center gap-3 text-emerald-800 text-sm font-sans">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Sub-Navigation Tabs */}
        <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'list'
                  ? 'bg-navy-950 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Published Offers ({offers.length})
            </button>
            <button
              onClick={handleStartCreate}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'edit'
                  ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                  : 'bg-gold-100 hover:bg-gold-200 text-navy-900 border border-gold-300'
              }`}
            >
              <Plus className="w-4 h-4" /> Add New Offer
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'rules'
                  ? 'bg-navy-950 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Verification Rules (10)
            </button>
          </div>

          {activeTab === 'list' && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-sans uppercase font-bold">Filter Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-xs px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-navy-900"
              >
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">Active Only</option>
                <option value="EXPIRED">Expired Only</option>
              </select>
              <button
                onClick={onResetDefaults}
                title="Reset to default initial verified offers"
                className="text-xs px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
          )}
        </div>

        {/* Main Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
          
          {/* TAB 1: LIST VIEW */}
          {activeTab === 'list' && (
            <div className="space-y-4">
              {filteredOffers.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
                  <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                  <h4 className="font-display text-lg text-slate-800 mb-1">No offers found for current filter</h4>
                  <p className="font-sans text-xs text-slate-500 mb-4">Click below to add a new verified luxury solo promotion.</p>
                  <button
                    onClick={handleStartCreate}
                    className="px-4 py-2 bg-navy-950 text-white text-xs font-semibold rounded-xl"
                  >
                    + Add First Offer
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredOffers.map((offer) => (
                    <div 
                      key={offer.id} 
                      className={`p-5 rounded-2xl border transition-all ${
                        offer.status === 'Active' 
                          ? 'bg-white border-slate-200 hover:border-gold-400 shadow-sm' 
                          : 'bg-stone-100 border-stone-300 opacity-75'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-sans text-xs font-bold uppercase tracking-wider text-navy-950 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                              {offer.supplier}
                            </span>
                            <span className="font-sans text-xs text-gold-700 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200">
                              {offer.experience}
                            </span>
                            <span className={`font-sans text-xs font-bold px-2.5 py-0.5 rounded-full ${
                              offer.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                              {offer.status}
                            </span>
                          </div>

                          <h4 className="font-display text-lg text-navy-950">
                            {offer.destination}
                          </h4>
                          
                          <p className="font-sans text-xs font-semibold text-slate-700">
                            Offer: <span className="text-navy-900 font-bold">{offer.soloOffer}</span> • Price: <span className="text-emerald-700 font-bold">{offer.price} {offer.currency}</span>
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-slate-500 pt-1">
                            <span><strong>Departure:</strong> {offer.departureDate || 'TBD'}</span>
                            <span><strong>Expires:</strong> {offer.offerExpires || 'Open'}</span>
                            <span><strong>Last Verified:</strong> {offer.lastVerified}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <button
                            onClick={() => handleStartEdit(offer)}
                            className="p-2.5 bg-slate-100 hover:bg-gold-50 text-slate-700 hover:text-navy-950 rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                          >
                            <Edit2 className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button
                            onClick={() => onDeleteOffer(offer.id)}
                            className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl border border-rose-200 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CREATE / EDIT FORM */}
          {activeTab === 'edit' && (
            <form onSubmit={handleSubmitForm} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-xl text-navy-950">
                    {editingOffer.id ? 'Edit Solo Travel Offer' : 'Create New Verified Solo Travel Offer'}
                  </h4>
                  <p className="font-sans text-xs text-slate-500">
                    All fields correspond to the Trips & Ships verified CMS offer template.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Cancel & Back to List
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Supplier Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Silversea Cruises, AmaWaterways, Wilderness Safaris"
                    value={editingOffer.supplier}
                    onChange={(e) => setEditingOffer({ ...editingOffer, supplier: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Experience / Travel Style
                  </label>
                  <select
                    value={editingOffer.experience}
                    onChange={(e) => setEditingOffer({ ...editingOffer, experience: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  >
                    <option value="Luxury Ocean Cruise">Luxury Ocean Cruise</option>
                    <option value="Luxury River Cruise">Luxury River Cruise</option>
                    <option value="Women-Only Escorted Tour">Women-Only Escorted Tour</option>
                    <option value="African Safari">African Safari</option>
                    <option value="Small-Group Journey">Small-Group Journey</option>
                    <option value="Independent Luxury Experience">Independent Luxury Experience</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Primary Destination / Itinerary Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Mediterranean & Greek Isles (Athens to Rome, 10 Nights)"
                    value={editingOffer.destination}
                    onChange={(e) => setEditingOffer({ ...editingOffer, destination: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Departure Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., October 14, 2026 or Multiple Dates"
                    value={editingOffer.departureDate}
                    onChange={(e) => setEditingOffer({ ...editingOffer, departureDate: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Solo Offer Type *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Waived Single Supplement (0%) / No Supplement on Veranda Suites"
                    value={editingOffer.soloOffer}
                    onChange={(e) => setEditingOffer({ ...editingOffer, soloOffer: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Verified Price *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., $6,850"
                    value={editingOffer.price}
                    onChange={(e) => setEditingOffer({ ...editingOffer, price: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Currency
                  </label>
                  <select
                    value={editingOffer.currency}
                    onChange={(e) => setEditingOffer({ ...editingOffer, currency: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="AUD">AUD ($)</option>
                    <option value="CAD">CAD ($)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Offer Expiration Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., November 30, 2026"
                    value={editingOffer.offerExpires}
                    onChange={(e) => setEditingOffer({ ...editingOffer, offerExpires: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Last Verified Date *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., October 07, 2026"
                    value={editingOffer.lastVerified}
                    onChange={(e) => setEditingOffer({ ...editingOffer, lastVerified: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Status
                  </label>
                  <select
                    value={editingOffer.status}
                    onChange={(e) => setEditingOffer({ ...editingOffer, status: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  >
                    <option value="Active">Active (Published on Live Page)</option>
                    <option value="Expired">Expired (Marked as Closed / Archived)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    CTA Action Link
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., /contact?offer=silversea-solo"
                    value={editingOffer.ctaLink}
                    onChange={(e) => setEditingOffer({ ...editingOffer, ctaLink: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold font-sans text-slate-700 uppercase mb-1">
                    Terms & Important Inclusions / Restrictions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify cabin categories, deposit conditions, included amenities, port charges, or single occupancy exclusions..."
                    value={editingOffer.terms}
                    onChange={(e) => setEditingOffer({ ...editingOffer, terms: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-gold-400 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" /> Save & Publish Offer
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: OFFER MANAGEMENT RULES (EEAT) */}
          {activeTab === 'rules' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h4 className="font-display text-xl text-navy-950 mb-1">
                  10 Mandatory Offer Management & Verification Rules
                </h4>
                <p className="font-sans text-xs text-slate-500">
                  Trips & Ships adheres to strict accuracy protocols before publishing promotional solo pricing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rules && rules.map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy-950 text-gold-400 font-display text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="font-sans font-bold text-sm text-navy-950">{rule.title}</h5>
                      <p className="font-sans text-xs text-slate-600 mt-0.5 leading-relaxed">{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>Trips & Ships CMS Collection: <strong>trips_ships_solo_offers</strong></span>
          <span>Verified LocalStorage Persistence Active</span>
        </div>

      </div>
    </div>
  );
};

export default OffersAdminModal;
