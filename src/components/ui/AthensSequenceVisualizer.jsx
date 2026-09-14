import React, { useState } from 'react';
import { PlaneLanding, PlaneTakeoff, Landmark, Waves, Utensils, Anchor, Sun, MapPin, Coffee, Camera, Sunset, Map } from 'lucide-react';
import FadeIn from './FadeIn';

const sequenceData = {
  first: {
    title: "Athens First Strategy",
    subtitle: "The Cultural Introduction",
    description: "Arrive in Athens to recover from jet lag while exploring ancient history, then smoothly transition into a relaxing island escape.",
    timeline: [
      { id: 1, icon: PlaneLanding, label: "Arrival", detail: "International Flight", active: true },
      { id: 2, icon: Landmark, label: "Culture", detail: "Acropolis & Museums", active: true },
      { id: 3, icon: Utensils, label: "Gastronomy", detail: "Fine Athenian Dining", active: true },
      { id: 4, icon: Anchor, label: "Transfer", detail: "Ferry or Short Flight", active: false },
      { id: 5, icon: Waves, label: "Islands", detail: "Beach & Relaxation", active: false },
      { id: 6, icon: PlaneTakeoff, label: "Departure", detail: "Fly Home Refreshed", active: false }
    ],
    highlightQuote: "Experience the Acropolis while fresh, and relax more deeply once you reach the islands.",
    rhythm: "Culture → Cuisine → Islands → Relaxation"
  },
  last: {
    title: "Athens Last Strategy",
    subtitle: "The Dramatic Finale",
    description: "Head straight to the islands for immediate relaxation, saving the vibrant energy and cultural depth of Athens for your grand finale.",
    timeline: [
      { id: 1, icon: PlaneLanding, label: "Arrival", detail: "Immediate Transfer", active: false },
      { id: 2, icon: Waves, label: "Islands", detail: "Instant Relaxation", active: false },
      { id: 3, icon: Sun, label: "Exploration", detail: "Sailing & Villages", active: false },
      { id: 4, icon: Anchor, label: "Transfer", detail: "Return to Mainland", active: true },
      { id: 5, icon: Landmark, label: "Culture", detail: "Athens City Break", active: true },
      { id: 6, icon: PlaneTakeoff, label: "Departure", detail: "Stress-Free Flight", active: true }
    ],
    highlightQuote: "Start immediately with beach relaxation, and protect against international flight delays by finishing in the capital.",
    rhythm: "Relaxation → Sea → Culture → Departure"
  }
};

export default function AthensSequenceVisualizer({ image1, image2 }) {
  const [activeStrategy, setActiveStrategy] = useState('first');
  const data = sequenceData[activeStrategy];

  return (
    <section className="relative py-24 bg-navy-950 text-white overflow-hidden border-y border-gold-400/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-900 via-navy-950 to-navy-950"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <Map className="w-3.5 h-3.5" />
              <span>Interactive Vacation Sequencer</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">
              Design Your Greece Rhythm
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-sm md:text-base">
              The order of your itinerary completely changes the emotional feel of your vacation. Toggle between the two classic luxury strategies to see how your trip unfolds.
            </p>
          </div>
        </FadeIn>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-navy-900 p-1.5 rounded-2xl inline-flex border border-slate-800 shadow-xl relative">
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gold-400 rounded-xl transition-all duration-300 ease-out z-0 ${
                activeStrategy === 'first' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'
              }`}
            ></div>
            <button
              onClick={() => setActiveStrategy('first')}
              className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-xl transition-colors duration-300 flex items-center space-x-2 ${
                activeStrategy === 'first' ? 'text-navy-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Athens First</span>
            </button>
            <button
              onClick={() => setActiveStrategy('last')}
              className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-xl transition-colors duration-300 flex items-center space-x-2 ${
                activeStrategy === 'last' ? 'text-navy-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sunset className="w-4 h-4" />
              <span>Athens Last</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-navy-900/60 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visualizer Side */}
            <div className="order-2 lg:order-1 relative h-full">
              <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-slate-800 hidden md:block"></div>
              
              <div className="space-y-6 relative">
                {data.timeline.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={`${activeStrategy}-${item.id}`} 
                      className="flex items-start group animate-[fadeIn_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${idx * 100}ms`, opacity: 0 }}
                    >
                      <div className={`relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                        item.active 
                          ? 'bg-gold-400 text-navy-950 shadow-gold-400/20 scale-110' 
                          : 'bg-navy-800 text-sky-400 border border-sky-400/30'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="ml-6 flex-1 pt-1">
                        <div className={`text-xl font-display transition-colors duration-300 ${
                          item.active ? 'text-white' : 'text-slate-300'
                        }`}>
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">{item.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8 animate-[fadeIn_0.6s_ease-out_forwards]">
              <div>
                <h3 className="text-3xl md:text-4xl font-display text-white mb-2">{data.title}</h3>
                <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm block mb-6">{data.subtitle}</span>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {data.description}
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-700 shadow-2xl group">
                <img 
                  src={activeStrategy === 'first' ? image1 : image2} 
                  alt={data.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-navy-950/80 backdrop-blur-md p-4 rounded-xl border border-gold-400/30">
                    <p className="text-gold-400 italic text-sm md:text-base font-serif">"{data.highlightQuote}"</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-400/5 border border-gold-400/20 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 block mb-1">Vacation Rhythm</span>
                  <span className="text-gold-400 font-medium text-sm md:text-base">{data.rhythm}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center shrink-0">
                  <Waves className="w-5 h-5 text-gold-400" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
