import React from 'react';
import FadeIn from './FadeIn';
import { User, Star, MapPin, GraduationCap, Users, Pen, Shield, Award, Globe, Ship, Anchor, Quote } from 'lucide-react';
import MasterImage from './MasterImage';
import defaultAngelaImage from '../../assets/AboutAngela.jpeg';

const credentialIcons = [User, Star, MapPin, GraduationCap, Users, Pen, Shield, Award, Globe, Ship, Anchor, Award];

const defaultCredentialsList = [
  "Over 4 Decades Designing Luxury Cruise & Yacht Experiences",
  "Explored 121+ Countries Across Seven Continents Firsthand",
  "Recognized Industry Leader & Small-Ship Yacht Specialist",
  "CEO & Founder of Trips & Ships Luxury Travel",
  "Travel Leaders Network Advisory Board Member",
  "2024 Luxury Travel Influencer & 2026 Most Influential in Travel"
];

const WindstarCabinsExpertCredentials = ({
  name,
  title,
  bio,
  image,
  credentials,
  quote
}) => {
  const expertName = name || "Angela Hughes";
  const expertTitle = title || "Luxury Cruise Specialist & CEO, Trips & Ships Luxury Travel";
  const expertBio = bio || "Angela Hughes has spent more than four decades planning luxury journeys. She has visited over 121 countries, bringing an experiential, firsthand perspective to cruise ship layouts, itinerary nuances, and cabin placement.";
  const expertImage = image || defaultAngelaImage;
  const finalCredentials = (credentials && credentials.length > 0) ? credentials : defaultCredentialsList;

  return (
    <section className="py-24 px-6 bg-white border-t border-b border-slate-200/60 relative overflow-hidden">
      {/* Decorative layout accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Slanted/Angled profile image wrapper */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-ts-gold/10 rounded-t-[100px] rounded-b-3xl transform rotate-2 -z-10 shadow-lg"></div>
            <div className="rounded-t-[100px] rounded-b-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white relative group">
              <MasterImage
                src={expertImage}
                alt={expertName}
                className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="bg-ts-gold text-navy-950 text-[10px] font-bold tracking-[0.15em] px-4 py-1 rounded-full uppercase inline-block shadow-md">
                  40+ Years Authority
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white mt-2 drop-shadow-md">{expertName}</h3>
              </div>
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-ts-gold bg-slate-50 border border-slate-200/60 px-4 py-2 rounded-full shadow-xs">
                Luxury Travel Authority
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
                About Angela Hughes, CTC
              </h2>
              <div className="w-12 h-1 bg-ts-gold rounded-full"></div>
            </div>

            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {expertBio}
            </p>

            {quote && (
              <blockquote className="relative bg-slate-50 border-l-4 border-ts-gold p-6 rounded-r-2xl border border-slate-200/50">
                <Quote className="w-5 h-5 text-ts-gold/30 absolute top-4 right-4" />
                <p className="font-display text-base md:text-lg text-navy-950 italic leading-relaxed relative z-10">
                  "{quote}"
                </p>
              </blockquote>
            )}

            {/* Credentials Dense Grid */}
            <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6">
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
                Verified Authority & Experience
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {finalCredentials.map((cred, idx) => {
                  const IconComp = credentialIcons[idx % credentialIcons.length];
                  return (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 text-ts-gold shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-sans text-xs text-slate-700 font-medium leading-tight">
                        {cred}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WindstarCabinsExpertCredentials;
