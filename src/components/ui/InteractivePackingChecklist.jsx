import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { 
  FileText, 
  Shirt, 
  Footprints, 
  MonitorSmartphone, 
  HeartPulse, 
  Backpack, 
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  DocumentIcon: FileText,
  ShirtIcon: Shirt,
  ShoeIcon: Footprints,
  DeviceIcon: MonitorSmartphone,
  HeartIcon: HeartPulse,
  BackpackIcon: Backpack,
};

const InteractivePackingChecklist = ({ title, subtitle, categories, images = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = categories[activeTab];
  const activeImage = images[activeTab % images.length];

  return (
    <section className="py-20 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <p className="font-sans text-lg text-navy-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Categories List */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || FileText;
              const isActive = index === activeTab;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center text-left w-full px-6 py-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-navy-950 text-white shadow-lg shadow-navy-900/20 translate-x-2' 
                      : 'bg-white text-navy-600 hover:bg-ice-100 hover:text-navy-900'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 mr-4 ${isActive ? 'text-accent-400' : 'text-navy-400'}`} />
                  <span className="font-display text-lg tracking-wide">{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Content & Image */}
          <div className="lg:col-span-8">
            <FadeIn key={activeTab}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-navy-900/5 flex flex-col md:flex-row gap-8 items-center border border-ice-100 h-full">
                
                {/* Content List */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center mb-8">
                    {React.createElement(iconMap[activeCategory.icon] || FileText, {
                      className: "w-8 h-8 text-accent-600 mr-4"
                    })}
                    <h3 className="font-display text-3xl text-navy-950">
                      {activeCategory.label}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {activeCategory.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="font-sans text-navy-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Image per Category */}
                {activeImage && (
                  <div className="w-full md:w-1/2 h-full min-h-[300px]">
                    <div className="relative w-full h-full rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto">
                      <img 
                        src={activeImage} 
                        alt={activeCategory.label}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                )}
                
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractivePackingChecklist;
