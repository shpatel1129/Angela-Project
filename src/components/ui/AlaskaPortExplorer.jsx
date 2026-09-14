import React from 'react';
import FadeIn from './FadeIn';
import { Compass, ShieldAlert, Award, MapPin, Camera, Train } from 'lucide-react';

const AlaskaPortExplorer = () => {
  const ports = [
    {
      name: "Juneau",
      experience: "Mendenhall Glacier & Whale Gateways",
      tip: "Consider helicopter flightseeing excursions to walk on the glacier surface, or book a private charter to watch humpback feeding loops.",
      icon: Camera
    },
    {
      name: "Ketchikan",
      experience: "Indigenous Totem Poles & Salmon Fishing",
      tip: "Skip the crowded downtown souvenir stalls and book a guided cultural exploration of Creek Street and Saxman Native Village.",
      icon: Compass
    },
    {
      name: "Skagway",
      experience: "Klondike Gold Rush History & White Pass Rail",
      tip: "The vintage White Pass & Yukon Route Railway is a must-do. Elevate the trip by reserving a premium class carriage with private guides.",
      icon: Train
    },
    {
      name: "Sitka",
      experience: "Russian Architecture & Tlingit Heritage",
      tip: "Sitka offers a layered history that goes beyond typical ports. Tour the historic St. Michael's Russian Orthodox Cathedral.",
      icon: MapPin
    },
    {
      name: "Haines",
      experience: "Chilkoot Inlet Wilderness & Eagle Sanctuaries",
      tip: "Haines is less commercialized, perfect for quiet wilderness hikes, kayaking, or photography in the Chilkat Bald Eagle Preserve.",
      icon: Award
    },
    {
      name: "Glacier Viewing",
      experience: "Tidewater Glaciers & Scenic Cruising Days",
      tip: "Tidewater glacial viewing (like Hubbard Glacier) depends heavily on weather. A private veranda allows you to watch the calving safely.",
      icon: ShieldAlert
    }
  ];

  return (
    <section className="w-full bg-ice-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Port Explorer
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Alaska Ports & Glacier Highlights
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Alaska's ports are not interchangeable. Each provides unique access to wilderness adventures, regional history, or indigenous culture.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ports.map((port, idx) => {
            const Icon = port.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-ice-100 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl text-navy-950 mb-2 font-medium">
                    {port.name}
                  </h3>
                  <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider block mb-4">
                    {port.experience}
                  </span>
                </div>

                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100/50">
                  <span className="text-[10px] uppercase tracking-widest text-navy-950 font-bold block mb-1">
                    Expert Advisor Tip:
                  </span>
                  <p className="text-xs font-sans text-slate-500 font-light leading-relaxed">
                    {port.tip}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlaskaPortExplorer;
