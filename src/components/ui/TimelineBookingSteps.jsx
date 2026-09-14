import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';

const TimelineBookingSteps = ({ data }) => {
  if (!data || !data.steps) return null;

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-xl text-slate-600 font-light">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {data.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white border-4 border-blue-900 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 shrink-0">
                    <Clock className="w-5 h-5 text-blue-900" />
                  </div>

                  {/* Text Content Container */}
                  <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${
                    isEven ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 relative z-20">
                      <div className="inline-block px-4 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-semibold mb-4 border border-blue-100">
                        {step.timeframe}
                      </div>
                      <h3 className="text-2xl font-serif text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {step.checklist && step.checklist.length > 0 && (
                        <ul className="space-y-3">
                          {step.checklist.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                              <span className="mt-0.5">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className={`hidden md:block w-1/2 ${
                    isEven ? 'pl-16' : 'pr-16'
                  }`}>
                    {step.image && (
                      <div className="rounded-2xl overflow-hidden shadow-lg h-64 w-full">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineBookingSteps;
