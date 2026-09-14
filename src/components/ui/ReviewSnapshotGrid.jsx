import React from 'react';
import FadeIn from './FadeIn';

const ReviewSnapshotGrid = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-ice-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{data.title}</h2>
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-5xl font-display text-gold-500 font-bold tracking-tight">{data.overallRating}</span>
              <span className="font-sans uppercase tracking-[0.15em] text-navy-700 text-sm font-semibold">Overall Rating</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Categories Grid (Left) */}
          <div className="lg:col-span-8 bg-white shadow-xl shadow-navy-900/5 rounded-2xl p-8 border border-ice-100">
            <h3 className="font-display text-2xl text-navy-900 mb-8 border-b border-ice-100 pb-4">Category Ratings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {data.categories.map((cat, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="font-sans text-navy-800 text-base md:text-lg group-hover:text-gold-600 transition-colors">{cat.name}</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-5 h-5 ${star <= cat.rating ? 'text-gold-500' : 'text-ice-200'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best For / Not Ideal For (Right) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="bg-navy-900 text-white shadow-xl shadow-navy-900/10 rounded-2xl p-8 h-full flex flex-col">
              <h3 className="font-display text-xl text-gold-400 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best For
              </h3>
              <ul className="space-y-4 font-sans text-sm md:text-base text-ice-50 flex-grow">
                {data.bestFor.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gold-500 mr-2 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-xl shadow-navy-900/5 rounded-2xl p-8 border border-ice-100 flex flex-col">
              <h3 className="font-display text-xl text-navy-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Not Ideal For
              </h3>
              <ul className="space-y-4 font-sans text-sm md:text-base text-navy-700">
                {data.notIdealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-navy-400 mr-2 font-bold">•</span>
                    <span>{item}</span>
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

export default ReviewSnapshotGrid;
