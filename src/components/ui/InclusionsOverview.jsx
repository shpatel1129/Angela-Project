import React from 'react';
import { Check, X, Info, Lightbulb, ShieldCheck, AlertCircle } from 'lucide-react';

const InclusionsOverview = ({ data }) => {
  if (!data) return null;

  const { headline, intro, table } = data;

  // Separate items
  const includedItems = table?.filter(row => row.included === true) || [];
  const extraItems = table?.filter(row => row.included === false || row.included === null) || [];

  return (
    <section className="bg-white py-20 px-6 border-b border-slate-100 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, intro, and expert badge */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-gold-400 uppercase bg-gold-400/10 px-3 py-1 rounded-full">
              At A Glance
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight">
              {headline}
            </h2>
            <div className="w-12 h-1 bg-gold-400 rounded-full"></div>
            <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed">
              {intro}
            </p>
            
            {/* Quick value proposition block */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex items-start gap-4 shadow-sm">
              <Lightbulb className="w-6 h-6 text-gold-400 shrink-0 mt-0.5 animate-pulse" />
              <div>
                <p className="font-display text-base text-navy-900 font-semibold mb-1">Expert Travel Note</p>
                <p className="font-sans text-slate-600 text-sm leading-relaxed italic">
                  "The core onboard experience covers nearly everything. The true value is in removing routine charges."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Categorized Grid Dashboard */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Included Card */}
            <div className="bg-emerald-50/20 border border-emerald-500/10 rounded-[32px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-950">Included in Your Base Fare</h3>
                  <p className="text-xs text-slate-500 font-sans">Everything covered by the core Silversea booking</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedItems.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group hover:shadow-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-950 text-sm group-hover:text-emerald-700 transition-colors leading-tight">
                        {row.item}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        {row.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra or Varies Card */}
            <div className="bg-amber-50/15 border border-gold-400/10 rounded-[32px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy-950">Varies or Extra Charges</h3>
                  <p className="text-xs text-slate-500 font-sans">Services that depend on fare type or carry added fees</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extraItems.map((row, idx) => {
                  const isOptional = row.included === null;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-gold-400/30 transition-all duration-300 group hover:shadow-sm"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isOptional ? 'bg-gold-400/10 text-gold-400' : 'bg-rose-50 text-rose-600'
                      }`}>
                        {isOptional ? (
                          <Info className="w-3.5 h-3.5" />
                        ) : (
                          <X className="w-3.5 h-3.5" strokeWidth={3} />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-950 text-sm group-hover:text-gold-400 transition-colors leading-tight">
                          {row.item}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          {row.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionsOverview;
