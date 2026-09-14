import React from 'react';
import FadeIn from './FadeIn';
import { Award, Star, ShieldCheck, Globe, BookOpen, GraduationCap, Ship, Map, Heart, Gem, Compass, CheckCircle2 } from 'lucide-react';

const icons = [Award, Globe, Ship, Compass, Star, GraduationCap, Map, BookOpen, Gem, ShieldCheck, Heart, CheckCircle2];

const ExpertAuthorityGrid = ({ name, titles, bio, quote, image, credentials }) => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Bio Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <div className="w-full lg:w-1/3 relative">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-gold-400/20">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display text-white mb-1">{name}</h3>
                  {titles.map((title, idx) => (
                    <p key={idx} className="text-xs text-gold-400 uppercase tracking-widest font-semibold">{title}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-2/3">
            <FadeIn delay={200}>
              <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-navy-600 font-semibold px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                <span>Expert Insight</span>
              </span>
              
              <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6 leading-tight">
                Designing the Perfect Luxury Journey
              </h2>
              
              <div className="w-16 h-0.5 bg-gold-400 mb-8"></div>
              
              <div className="prose prose-lg prose-slate max-w-none mb-10 text-slate-600">
                <p>{bio}</p>
              </div>
              
              <div className="bg-navy-950 p-8 rounded-2xl relative shadow-xl border border-gold-400/20">
                <Compass className="absolute top-4 right-4 w-24 h-24 text-white/5" />
                <p className="text-lg md:text-xl font-display text-white italic relative z-10">
                  "{quote}"
                </p>
                <div className="mt-4 flex items-center space-x-3 relative z-10">
                  <div className="w-8 h-px bg-gold-400"></div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">{name}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 12 Authority Boxes Grid */}
        <div className="text-center mb-12">
          <FadeIn>
            <h3 className="text-2xl font-display text-navy-950 mb-3">
              Recognized Global Authority
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm">
              With decades of experience and worldwide recognition, Angela brings unparalleled expertise to matching you with the right cruise line.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {credentials.slice(0, 12).map((cred, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl h-full flex items-start space-x-4 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-navy-950 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold-600 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-950 mb-1 leading-snug group-hover:text-gold-600 transition-colors duration-300">
                      {cred.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {cred.description}
                    </p>
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

export default ExpertAuthorityGrid;
