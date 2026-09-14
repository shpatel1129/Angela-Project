import React from 'react';
import FadeIn from './FadeIn';

const QuoteDestinations = ({ image }) => {
  const destinations = [
    { 
      title: "Antarctica Voyages", 
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-3-6L6 18M6 6l12 12" />
        </svg>
      ), 
      desc: "Experience the White Continent on Silversea's expedition vessels with zodiac landings and expert naturalists." 
    },
    { 
      title: "Galapagos Islands", 
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75" />
        </svg>
      ), 
      desc: "Explore the Galapagos aboard Silver Origin, purpose-built with butler service and immersive daily zodiac tours." 
    },
    { 
      title: "Mediterranean Cruises", 
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m-.386-6.364l1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      ), 
      desc: "Sail classic Mediterranean ports and enjoy local culinary programs with Silversea's S.A.L.T. dining options." 
    },
    { 
      title: "Alaska Cruises", 
      icon: (
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ), 
      desc: "Cruise glaciers and scenic passages on classic luxury ships with specialized land extensions available." 
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Destinations grid */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Voyage Destinations
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                Where Can You Sail With Silversea?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-8">
                Silversea operates classic luxury cruises and remote expedition voyages across all seven continents. Here are some of the most popular quote categories.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {destinations.map((dest, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)}>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-gold-400 transition-colors duration-300">
                    <div className="p-2 bg-white rounded-xl border border-slate-100 mb-4 inline-block flex items-center justify-center w-12 h-12">{dest.icon}</div>
                    <h3 className="font-display text-sm text-navy-950 font-semibold mb-2">{dest.title}</h3>
                    <p className="font-sans text-slate-600 text-xs font-light leading-relaxed">{dest.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Image with a description overlay */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea destination scenery"
                className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-navy-950/95 backdrop-blur-md rounded-xl p-5 border border-slate-800">
                <h4 className="font-display text-xs text-gold-400 uppercase tracking-widest mb-1">Destination Immersion</h4>
                <p className="font-sans text-white text-xs font-light leading-relaxed">
                  "Silversea's expedition itineraries reach remote destinations that standard cruise liners cannot access, utilizing inflatable zodiacs for wilderness landings."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default QuoteDestinations;
