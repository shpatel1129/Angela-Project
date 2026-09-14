import React from 'react';
import FadeIn from './FadeIn';
import angelaImage from '../../assets/avalon-inclusions/Angela.webp';

const AuthorityBox = ({ 
  title = "Insider Tip", 
  content, 
  author = "Angela Hughes, Luxury Travel Expert",
  className = "" 
}) => {
  return (
    <FadeIn>
      <div className={`my-8 py-8 px-4 border-y border-ts-gold/30 bg-gradient-to-r from-transparent via-ts-gold/5 to-transparent relative ${className}`}>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-ts-gold/40 shadow-sm mt-1">
            <img src={angelaImage} alt={author} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-ts-gold mb-3">
              {title}
            </h4>
            <div className="font-display text-lg md:text-xl text-navy-950 italic leading-relaxed text-slate-700">
              "{typeof content === 'string' ? (
                <span dangerouslySetInnerHTML={{ __html: content }}></span>
              ) : (
                content
              )}"
            </div>
            <p className="mt-3 font-sans text-xs uppercase tracking-wider text-slate-500 font-medium">— {author}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default AuthorityBox;
