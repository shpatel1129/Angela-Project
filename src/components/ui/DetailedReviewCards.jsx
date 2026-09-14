import React from 'react';
import FadeIn from './FadeIn';

const DetailedReviewCards = ({ reviews, comparisons }) => {
  if (!reviews) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold-400 text-xs font-bold mb-4 block">In-Depth Analysis</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">Detailed Cruise Line Reviews</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {reviews.map((review, idx) => {
            const match = comparisons?.find(c => review.name.includes(c.name) || c.name.includes(review.name));
            const image = review.image || match?.image || 'src/assets/Amawaterways/BestOf_French_hero.webp';
            const isEven = idx % 2 === 0;

            return (
              <FadeIn key={idx}>
                <div className={`flex flex-col lg:flex-row gap-0 bg-white rounded-xl shadow-xl overflow-hidden border border-ice-100 group`}>
                  {/* Image Section */}
                  <div className={`lg:w-2/5 relative h-72 lg:h-auto overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                     <div className="absolute inset-0 bg-navy-950/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                     <img 
                       src={image} 
                       alt={review.name} 
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} z-20`}>
                        <div className="bg-white/95 backdrop-blur-sm text-navy-950 px-4 py-3 rounded-lg shadow-lg border border-ice-100 flex flex-col items-center">
                          <span className="font-display text-2xl font-bold leading-none">{review.rating.split('/')[0]}</span>
                          <span className="text-[10px] text-slate-500 font-bold uppercase mt-1">/10 Rating</span>
                        </div>
                     </div>
                  </div>

                  {/* Content Section */}
                  <div className={`lg:w-3/5 p-8 md:p-12 lg:p-16 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center bg-white`}>
                    <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">{review.name}</h3>
                    <p className="font-sans text-slate-600 mb-10 text-lg leading-relaxed">{review.overview}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-5 flex items-center">
                          <span className="text-teal-600 mr-2 text-xl leading-none">✓</span> What We Love
                        </h4>
                        <ul className="text-[15px] text-slate-600 space-y-3">
                          {review.love.map((item, i) => (
                            <li key={i} className="flex items-start">
                               <span className="text-gold-400 mr-3 mt-0.5 font-bold">•</span>
                               <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-5 flex items-center">
                          <span className="text-red-400 mr-2 text-xl leading-none">✕</span> Potential Drawbacks
                        </h4>
                        <ul className="text-[15px] text-slate-600 space-y-3">
                          {review.drawbacks.map((item, i) => (
                            <li key={i} className="flex items-start">
                               <span className="text-ice-300 mr-3 mt-0.5 font-bold">•</span>
                               <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedReviewCards;
