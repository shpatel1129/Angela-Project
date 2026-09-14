import React from 'react';
import { Check } from 'lucide-react';

const ChecklistCards = ({ data }) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="font-display text-4xl text-navy-950 text-center mb-16">{data?.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
          {/* AmaWaterways */}
          <div className="bg-white border border-border-light rounded-xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-sans font-bold text-xl text-navy-900 mb-8 border-b border-border-light pb-4">
              {data?.ama?.name}
            </h3>
            <ul className="space-y-4">
              {data?.ama?.reasons?.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-ice-50 flex items-center justify-center flex-shrink-0">
                    <Check size={20} strokeWidth={1.5} className="text-navy-800" />
                  </div>
                  <span className="font-sans text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avalon Waterways */}
          <div className="bg-white border border-border-light rounded-xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-sans font-bold text-xl text-navy-900 mb-8 border-b border-border-light pb-4">
              {data?.avalon?.name}
            </h3>
            <ul className="space-y-4">
              {data?.avalon?.reasons?.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-ice-50 flex items-center justify-center flex-shrink-0">
                    <Check size={20} strokeWidth={1.5} className="text-navy-800" />
                  </div>
                  <span className="font-sans text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistCards;
