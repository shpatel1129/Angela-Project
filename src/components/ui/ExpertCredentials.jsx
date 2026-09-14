import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { User, Star, MapPin, GraduationCap, Users, Pen, Shield, Award, Globe, Ship, Anchor, Quote } from 'lucide-react';
import defaultAngelaImage from '../../assets/avalon-inclusions/Angela.webp';

const credentialIcons = [User, Star, MapPin, GraduationCap, Users, Pen, Shield, Award, Globe, Ship, Anchor, Award];

const defaultCredentialsList = [
  "Over 4 Decades Designing Luxury Travel Experiences",
  "Explored 121+ Countries Across Seven Continents",
  "Recognized Industry Leader & River Cruise Specialist",
  "CEO & Founder of Trips & Ships Luxury Travel",
  "Specialist in Active River Cruising & Multi-Generational Travel",
  "Personal Relationships with AmaWaterways Executives & Staff"
];

const ExpertCredentials = ({
  title,
  name,
  authorName,
  image,
  badge = "LUXURY TRAVEL EXPERTISE",
  authorityBoxTitle,
  authoritySubtitle,
  experienceBadge = "40+ YEARS EXPERTISE",
  paragraphs,
  credentials,
  bio,
  quote,
  quoteSubtitle,
  bottomText,
  ctaText,
  ctaLink,
}) => {
  const expertName = name || authorName || "Angela Hughes";
  const expertTitle = title || "Greece Luxury Travel Specialist & CEO, Trips & Ships Luxury Travel";
  const expertBio = bio || "Angela Hughes has explored over 121 countries and spent more than four decades designing luxury travel experiences. She is widely recognized across the travel industry as a leading travel authority and active travel advocate.";
  const expertImage = image || defaultAngelaImage;
  const finalCredentials = (credentials && credentials.length > 0) ? credentials : defaultCredentialsList;

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {badge && (
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent-600 bg-white border border-accent-200 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
              ✦ {badge} ✦
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{expertName} Authority & Credentials</h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mt-6 mb-4"></div>
          <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{expertTitle}</p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          {/* Left Column: Profile Photo Card + Floating Badge */}
          <FadeIn direction="right" className="lg:w-4/12 flex w-full">
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:max-w-none bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <MasterImage
                src={expertImage}
                alt={expertName}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none"></div>

              {/* Overlay Name & Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="bg-ts-gold text-navy-950 text-[10px] font-bold tracking-[0.15em] px-4 py-1.5 rounded-full inline-block uppercase shadow-lg mb-2">
                  {experienceBadge}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white drop-shadow-md">{expertName}</h3>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Bio, Quote, and Credentials Grid */}
          <FadeIn direction="left" className="lg:w-8/12 flex w-full">
            <div className="bg-white rounded-3xl p-6 lg:p-8 w-full flex flex-col shadow-md border border-slate-100">

              {/* Authority Header Box */}
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-ts-gold flex items-center justify-center shadow-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-navy-900 block">
                      {authorityBoxTitle || `${expertName} INSIGHTS & LEADERSHIP`}
                    </span>
                    <span className="font-sans text-[11px] text-slate-500">
                      {authoritySubtitle || "Trusted Greece Luxury Travel Authority"}
                    </span>
                  </div>
                </div>

                {/* Bio Text */}
                {paragraphs && paragraphs.length > 0 ? (
                  <div className="space-y-4 mb-6">
                    {paragraphs.map((p, i) => (
                      <p key={i} className="font-sans text-slate-700 text-sm leading-relaxed font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-slate-700 text-sm leading-relaxed mb-6 font-light">
                    {expertBio}
                  </p>
                )}

                {/* Quote Box (If provided) */}
                {quote && (
                  <div className="bg-ice-50/80 rounded-2xl p-4 lg:p-5 border-l-4 border-ts-gold mb-6 relative">
                    <Quote className="w-5 h-5 text-ts-gold/30 absolute top-3 right-3" />
                    <p className="font-display text-lg text-navy-950 italic leading-relaxed relative z-10">
                      "{quote}"
                    </p>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2 block">
                      — {expertName}, {quoteSubtitle || "On Greece Planning"}
                    </span>
                  </div>
                )}
              </div>

              {/* Credentials Dense List */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mt-auto">
                <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  KEY QUALIFICATIONS & ACHIEVEMENTS
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {finalCredentials.map((cred, idx) => {
                    const IconComp = credentialIcons[idx % credentialIcons.length];
                    const text = typeof cred === 'string' 
                      ? cred 
                      : (cred && typeof cred === 'object') 
                        ? `${cred.number ? cred.number + ' ' : ''}${cred.label || ''}${cred.desc ? ' (' + cred.desc + ')' : ''}`.trim()
                        : String(cred);
                    return (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="mt-0.5 text-ts-gold flex-shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="font-sans text-[11.5px] text-slate-700 font-medium leading-tight">{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Optional CTA Button */}
              {ctaText && (
                <div className="mt-6">
                  <Link
                    to={ctaLink || "/contact"}
                    className="inline-flex items-center justify-center px-8 py-3 bg-navy-950 text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-navy-900 transition-all rounded-full shadow-lg hover:scale-105"
                  >
                    {ctaText}
                  </Link>
                </div>
              )}

              {bottomText && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="font-sans text-slate-500 leading-relaxed text-[11px]">
                    {bottomText}
                  </p>
                </div>
              )}

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExpertCredentials;
