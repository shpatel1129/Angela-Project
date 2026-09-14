import React from 'react';
import VideoEmbed from './VideoEmbed';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const BalconyVideoSection = ({ youtubeId, title, subtitle, description, variant, sideImage }) => {
  const isDark = variant === 'dark';

  return (
    <section className={`py-28 px-6 relative overflow-hidden ${isDark ? 'bg-navy-950 text-white' : 'bg-white text-navy-900 border-t border-b border-slate-200/60'}`}>
      {isDark && (
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-ts-gold/5 rounded-full filter blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isDark ? '' : 'flex-row-reverse'}`}>
          
          {/* Text Side */}
          <div className={`${isDark ? 'lg:col-span-5 order-first' : 'lg:col-span-4 order-last lg:order-first'} space-y-6`}>
            <span className={`text-[11px] font-bold uppercase tracking-[0.3em] ${isDark ? 'text-ts-gold' : 'text-navy-900'}`}>
              {subtitle}
            </span>
            <h3 className={`font-display text-3xl sm:text-4xl leading-tight ${isDark ? 'text-white' : 'text-navy-950'}`}>
              {title}
            </h3>
            <div className="w-12 h-0.5 bg-ts-gold"></div>
            <p className={`font-sans text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {description}
            </p>

            {/* Side visual thumbnail */}
            {sideImage && (
              <div className="pt-6 hidden lg:block">
                <div className={`rounded-2xl overflow-hidden aspect-[16/9] ${isDark ? 'border border-white/10' : 'border border-slate-200/60'} shadow-md`}>
                  <MasterImage src={sideImage} alt="Windstar deck" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* Video Side */}
          <div className={`${isDark ? 'lg:col-span-7' : 'lg:col-span-8'} relative`}>
            <div className={`absolute -bottom-4 ${isDark ? '-left-4' : '-right-4'} w-full h-full ${isDark ? 'bg-ts-gold/10' : 'bg-slate-100'} rounded-[36px] -z-10`}></div>
            <div className={`rounded-[36px] overflow-hidden p-2 ${isDark ? 'bg-white/10' : 'bg-white border border-slate-200/60'} shadow-2xl`}>
              <div className="rounded-[28px] overflow-hidden bg-slate-900 aspect-[16/9]">
                <VideoEmbed youtubeId={youtubeId} title={title} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BalconyVideoSection;
