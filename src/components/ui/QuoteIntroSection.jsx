import React from 'react';
import FadeIn from './FadeIn';

const QuoteIntroSection = ({ image }) => {
  const handleScrollToForm = () => {
    const formElement = document.getElementById('quote-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-20 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content with no title heading */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3.5xl text-navy-950 leading-tight font-medium">
                Get a Personalized Silversea Cruise Quote From a Luxury Travel Expert
              </h2>
              
              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                A Silversea cruise should never be chosen on price alone. The right voyage depends on the destination, sailing date, ship, suite category, itinerary, inclusions, air arrangements, pre- and post-cruise plans, and—most importantly—the experience you want to have.
              </p>
              
              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                At Trips & Ships Luxury Travel, we help discerning travelers evaluate those details before they commit. Tell us where you want to go, when you want to travel, who is traveling, and what matters most to you.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleScrollToForm}
                  className="bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 font-display text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl font-bold transition-all duration-300 shadow-md inline-block"
                >
                  Request My Silversea Cruise Quote
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Visual block */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea luxury suite view"
                className="relative z-10 w-full h-[440px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default QuoteIntroSection;
