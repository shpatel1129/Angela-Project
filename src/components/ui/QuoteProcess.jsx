import React, { useState } from 'react';
import FadeIn from './FadeIn';

const QuoteProcess = ({ image }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Antarctica',
    travelWindow: '',
    guests: '2',
    suitePreference: 'Veranda Suite',
    budgetRange: '$10,000 - $20,000',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { num: "1", title: "Share Travel Intent", desc: "Specify where you want to sail, when you want to travel, and the size of your group." },
    { num: "2", title: "Select Suite Profile", desc: "Select whether you want a Veranda Suite, a mid-ship layout, or higher-tier Butler service." },
    { num: "3", title: "Evaluate Fare Rules", desc: "We look up current public sales, airfare credits, and Venetian loyalty savings." },
    { num: "4", title: "Secure Complete Quote", desc: "Get a comprehensive proposal showing final pricing, suites, and terms." }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Process Steps */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                The Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 leading-tight">
                How We Build Your Personalized Proposal
              </h2>
            </FadeIn>

            <div className="space-y-8 mb-12">
              {steps.map((step, idx) => (
                <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                  <div className="flex gap-6 items-start">
                    <span className="font-display text-lg text-gold-500 font-bold bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl flex-shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-display text-sm text-navy-950 font-semibold mb-1 uppercase tracking-wider">{step.title}</h3>
                      <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src={image} 
                  alt="Luxury cruise travel consultant"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6">
                  <p className="font-sans text-white text-xs italic font-light leading-relaxed">
                    "A Silversea cruise proposal should cover all logistics: suite location, air schedules, hotel extensions, and transfers."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Premium Quote Form */}
          <FadeIn delay={0.25}>
            <div id="quote-form-section" className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md">
              <h3 className="font-display text-xl text-navy-950 mb-2">Request Quote Proposal</h3>
              <p className="font-sans text-slate-500 text-xs font-light mb-6">Provide your criteria below, and our luxury travel advisors will begin building your personalized proposal.</p>

              {submitted ? (
                <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl p-6">
                  <span className="text-4xl block mb-4">✉️</span>
                  <h4 className="font-display text-lg text-navy-950 mb-2 font-semibold">Thank You</h4>
                  <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">
                    Your request has been received. Our Silversea travel advisors will contact you shortly to review your proposal details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Destination</label>
                      <select 
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      >
                        {["Antarctica", "Galapagos", "Mediterranean", "Alaska", "Arctic & Greenland", "Caribbean", "Other"].map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Travel Dates / Window</label>
                      <input 
                        type="text" 
                        placeholder="e.g. June 2026"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.travelWindow}
                        onChange={(e) => setFormData({...formData, travelWindow: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Number of Guests</label>
                      <input 
                        type="number" 
                        min="1"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Suite Preference</label>
                      <select 
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.suitePreference}
                        onChange={(e) => setFormData({...formData, suitePreference: e.target.value})}
                      >
                        {["Veranda Suite", "Medallion Suite", "Silver Suite", "Grand/Owner's Suite", "No Preference"].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Approx. Cruise Budget</label>
                      <select 
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                      >
                        {["Under $10,000", "$10,000 - $20,000", "$20,000 - $40,000", "$40,000+", "No Preference"].map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Travel Preferences / Custom Notes</label>
                    <textarea 
                      rows="3"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:border-gold-500 font-sans"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 font-display text-xs uppercase tracking-widest py-3 px-6 rounded-xl font-bold transition-colors duration-300 shadow-md"
                  >
                    Request My Silversea Cruise Quote
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default QuoteProcess;
