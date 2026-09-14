import React from 'react';
import MasterImage from './MasterImage';

// Each category gets a completely unique layout
const layouts = ['cinematic-split', 'magazine-overlap', 'feature-grid', 'timeline-contrast', 'full-bleed-duel'];

const CinematicSplit = ({ comp }) => (
  <div className="mb-0">
    <div className="text-center py-16 px-6">
      <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold block mb-4">Category 01</span>
      <h3 className="text-5xl md:text-7xl font-display text-navy-950 mb-4">{comp.category}</h3>
      <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      {/* Avalon — full bleed image with text overlay */}
      <div className="relative overflow-hidden group min-h-[500px]">
        {comp.avalon.image && (
          <MasterImage src={comp.avalon.image} alt={comp.avalon.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
        <div className="absolute top-6 left-6 bg-amber-500 text-navy-950 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
          Avalon Waterways
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-10">
          <h4 className="text-4xl font-display text-white mb-4">{comp.avalon.title}</h4>
          <p className="text-ice-200 text-sm leading-relaxed mb-6">{comp.avalon.description}</p>
          <ul className="grid grid-cols-2 gap-2">
            {comp.avalon.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-amber-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></span>{h}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Viking — clean white panel */}
      <div className="bg-slate-50 flex items-center p-12 lg:p-16 relative overflow-hidden group min-h-[500px]">
        {comp.viking.image && (
          <MasterImage src={comp.viking.image} alt={comp.viking.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
        )}
        <div className="relative z-10">
          <div className="inline-block bg-navy-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
            Viking River Cruises
          </div>
          <h4 className="text-4xl font-display text-navy-950 mb-6">{comp.viking.title}</h4>
          <p className="text-slate-600 leading-relaxed mb-8">{comp.viking.description}</p>
          <ul className="space-y-3">
            {comp.viking.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-3 text-navy-800 text-sm font-medium">
                <svg className="w-5 h-5 text-navy-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg>{h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const MagazineOverlap = ({ comp }) => (
  <div className="bg-slate-50 py-16 px-6 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.08),transparent_60%)]"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold block mb-4">Category 02</span>
        <h3 className="text-5xl md:text-7xl font-display text-navy-950 mb-4">{comp.category}</h3>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Avalon Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden group shadow-sm">
          {comp.avalon.image && (
            <div className="h-80 relative overflow-hidden">
              <MasterImage src={comp.avalon.image} alt={comp.avalon.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-amber-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Avalon</span>
              </div>
            </div>
          )}
          <div className="p-8">
            <h4 className="text-3xl font-display text-navy-950 mb-4">{comp.avalon.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">{comp.avalon.description}</p>
            <div className="space-y-3 border-t border-slate-100 pt-6">
              {comp.avalon.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-navy-800 text-sm font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Viking Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden group shadow-sm">
          {comp.viking.image && (
            <div className="h-80 relative overflow-hidden">
              <MasterImage src={comp.viking.image} alt={comp.viking.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-white text-navy-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Viking</span>
              </div>
            </div>
          )}
          <div className="p-8">
            <h4 className="text-3xl font-display text-navy-950 mb-4">{comp.viking.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">{comp.viking.description}</p>
            <div className="space-y-3 border-t border-slate-100 pt-6">
              {comp.viking.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  </div>
                  <span className="text-navy-800 text-sm font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureGrid = ({ comp }) => (
  <div className="mb-0">
    <div className="bg-amber-50 px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold block mb-4">Category 03</span>
          <h3 className="text-5xl md:text-7xl font-display text-navy-950 mb-4">{comp.category}</h3>
          <div className="w-16 h-0.5 bg-navy-900 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[600px]">
          {/* Avalon — image left, spans 2 cols */}
          <div className="lg:col-span-2 relative overflow-hidden min-h-[400px] group rounded-3xl">
            {comp.avalon.image && (
              <MasterImage src={comp.avalon.image} alt={comp.avalon.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-10">
              <div>
                <div className="bg-amber-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-6">Avalon Waterways</div>
                <h4 className="text-4xl font-display text-white mb-4">{comp.avalon.title}</h4>
                <p className="text-ice-200 text-sm leading-relaxed max-w-md mb-6">{comp.avalon.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {comp.avalon.highlights.map((h, i) => (
                    <div key={i} className="bg-white/10 rounded-lg px-3 py-2 text-amber-300 text-xs font-medium">{h}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Viking — tall text panel */}
          <div className="bg-navy-900 p-10 flex flex-col justify-center rounded-3xl lg:rounded-l-none">
            <div className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-8 w-fit">Viking</div>
            <h4 className="text-3xl font-display text-white mb-6">{comp.viking.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{comp.viking.description}</p>
            <ul className="space-y-4">
              {comp.viking.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 items-start border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-slate-400 font-mono text-xs mt-0.5 shrink-0">0{i+1}</span>
                  <span className="text-slate-200 text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TimelineContrast = ({ comp }) => (
  <div className="py-24 px-6 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold block mb-4">Category 04</span>
        <h3 className="text-5xl md:text-7xl font-display text-navy-950 mb-4">{comp.category}</h3>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
      </div>
      {/* Full-width images stacked side by side with wide aspect ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-16 h-[500px]">
        <div className="relative overflow-hidden group">
          {comp.avalon.image && (
            <MasterImage src={comp.avalon.image} alt={comp.avalon.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          )}
          <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors"></div>
          <div className="absolute bottom-8 left-8">
            <span className="bg-amber-500 text-navy-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">Avalon Waterways</span>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          {comp.viking.image && (
            <MasterImage src={comp.viking.image} alt={comp.viking.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          )}
          <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors"></div>
          <div className="absolute bottom-8 right-8">
            <span className="bg-white text-navy-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">Viking River Cruises</span>
          </div>
        </div>
      </div>
      {/* Text below images, side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="border-t-4 border-amber-500 pt-8">
          <h4 className="text-3xl font-display text-navy-950 mb-4">{comp.avalon.title}</h4>
          <p className="text-slate-600 leading-relaxed mb-8">{comp.avalon.description}</p>
          <ul className="space-y-3">
            {comp.avalon.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 items-center text-navy-800 font-medium">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-4 border-navy-900 pt-8">
          <h4 className="text-3xl font-display text-navy-950 mb-4">{comp.viking.title}</h4>
          <p className="text-slate-600 leading-relaxed mb-8">{comp.viking.description}</p>
          <ul className="space-y-3">
            {comp.viking.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 items-center text-navy-800 font-medium">
                <svg className="w-5 h-5 text-navy-900 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const FullBleedDuel = ({ comp }) => (
  <div className="mb-0">
    <div className="text-center py-16 px-6 bg-slate-100">
      <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold block mb-4">Category 05</span>
      <h3 className="text-5xl md:text-7xl font-display text-navy-950 mb-4">{comp.category}</h3>
      <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
    </div>
    <div className="flex flex-col lg:flex-row">
      {/* Avalon — dark panel */}
      <div className="lg:w-1/2 bg-navy-950 px-12 py-16 flex flex-col justify-center relative overflow-hidden">
        {comp.avalon.image && (
          <MasterImage src={comp.avalon.image} alt={comp.avalon.title}
            className="absolute inset-0 w-full h-full object-cover opacity-10" />
        )}
        <div className="relative z-10">
          <div className="text-[60px] font-display text-white/10 leading-none mb-4">01</div>
          <div className="bg-amber-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-6">Avalon Waterways</div>
          <h4 className="text-4xl font-display text-white mb-6">{comp.avalon.title}</h4>
          <p className="text-slate-300 leading-relaxed mb-10">{comp.avalon.description}</p>
          <div className="space-y-4">
            {comp.avalon.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500/40 transition-colors">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-white font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Viking — light panel */}
      <div className="lg:w-1/2 bg-ice-50 px-12 py-16 flex flex-col justify-center relative overflow-hidden">
        {comp.viking.image && (
          <MasterImage src={comp.viking.image} alt={comp.viking.title}
            className="absolute inset-0 w-full h-full object-cover opacity-10" />
        )}
        <div className="relative z-10">
          <div className="text-[60px] font-display text-navy-900/10 leading-none mb-4">02</div>
          <div className="bg-navy-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-6">Viking River Cruises</div>
          <h4 className="text-4xl font-display text-navy-950 mb-6">{comp.viking.title}</h4>
          <p className="text-slate-600 leading-relaxed mb-10">{comp.viking.description}</p>
          <div className="space-y-4">
            {comp.viking.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-navy-900/10 flex items-center justify-center shrink-0 group-hover:bg-navy-900/20 transition-colors">
                  <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-navy-900 font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const layoutComponents = [CinematicSplit, MagazineOverlap, FeatureGrid, TimelineContrast, FullBleedDuel];

const StaggeredComparisonWalkthrough = ({ comparisons }) => {
  if (!comparisons || comparisons.length === 0) return null;

  return (
    <section className="bg-white font-sans overflow-hidden">
      <div className="text-center py-16 px-6 max-w-4xl mx-auto">
        <span className="text-amber-600 font-sans font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Deep Dive</span>
        <h2 className="text-4xl md:text-6xl font-display text-navy-950 mb-6">The Head-to-Head Comparison</h2>
        <p className="text-slate-500 font-sans text-lg md:text-xl leading-relaxed">
          Take a closer look at how Avalon and Viking deliver their luxury experiences across the most important aspects of river cruising.
        </p>
      </div>

      {comparisons.map((comp, idx) => {
        const Layout = layoutComponents[idx % layoutComponents.length];
        return <Layout key={idx} comp={comp} />;
      })}
    </section>
  );
};

export default StaggeredComparisonWalkthrough;
