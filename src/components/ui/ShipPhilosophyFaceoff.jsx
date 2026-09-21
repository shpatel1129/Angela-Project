import React from 'react';

const ShipPhilosophyFaceoff = ({ 
  data, 
  regentImage, 
  vikingImage,
  regentImageAlt = "Seabourn Ocean Cruises Atmosphere",
  vikingImageAlt = "Seabourn Expedition Cruises Atmosphere",
  regentImagePos = "object-[center_68%]",
  vikingImagePos = "object-center"
}) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-navy-950 mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Ocean Side */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col bg-navy-950">
            {/* Image Section */}
            {regentImage && (
              <div className="relative h-72 md:h-80 w-full overflow-hidden bg-navy-900">
                <img 
                  src={regentImage} 
                  alt={regentImageAlt} 
                  className={`w-full h-full object-cover ${regentImagePos} transform group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
              </div>
            )}
            
            {/* Content Section */}
            <div className="relative z-10 flex flex-col h-full bg-navy-950 p-8 sm:p-10 text-white">
              <div className="inline-block bg-ts-gold text-navy-950 font-sans font-semibold px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-widest mb-6 w-max shadow-md">
                {data.regent.badge || data.regent.title || "Ocean Cruises"}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 group-hover:text-ts-gold transition-colors duration-300">
                {data.regent.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed mb-8 flex-grow font-light">
                {data.regent.description}
              </p>
              <ul className="space-y-3.5">
                {data.regent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start opacity-85 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${idx * 80}ms` }}>
                    <span className="text-ts-gold mr-3 transform group-hover:scale-125 transition-transform duration-300">✦</span>
                    <span className="font-sans font-light text-gray-200 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expedition Side */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col bg-slate-50">
            {/* Image Section */}
            {vikingImage && (
              <div className="relative h-72 md:h-80 w-full overflow-hidden bg-slate-100">
                <img 
                  src={vikingImage} 
                  alt={vikingImageAlt} 
                  className={`w-full h-full object-cover ${vikingImagePos} transform group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent"></div>
              </div>
            )}
            
            {/* Content Section */}
            <div className="relative z-10 flex flex-col h-full bg-slate-50 p-8 sm:p-10 text-navy-950">
              <div className="inline-block bg-navy-900 text-white font-sans font-semibold px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-widest mb-6 w-max shadow-md">
                {data.viking.badge || data.viking.title || "Expedition Cruises"}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-6 group-hover:text-slate-700 transition-colors duration-300">
                {data.viking.title}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed mb-8 flex-grow font-light">
                {data.viking.description}
              </p>
              <ul className="space-y-3.5">
                {data.viking.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start opacity-85 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${idx * 80}ms` }}>
                    <span className="text-navy-700 mr-3 transform group-hover:translate-x-1 transition-transform duration-300">✦</span>
                    <span className="font-sans font-light text-slate-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShipPhilosophyFaceoff;
