import React from 'react';

const ExpertProfile = ({ data }) => {
  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans text-sm font-bold tracking-widest text-navy-800 uppercase mb-3">
            {data?.title}
          </h2>
          <h3 className="font-display text-4xl text-navy-950">
            {data?.subtitle}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-border-light overflow-hidden flex flex-col lg:flex-row">
          
          {/* Profile Sidebar */}
          <div className="lg:w-[350px] bg-navy-950 text-white p-10 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700 mb-6 flex items-center justify-center overflow-hidden">
               {data?.image ? (
                 <img src={data.image} alt={data?.name || "Expert"} className="w-full h-full object-cover" />
               ) : (
                 <span className="text-xs uppercase tracking-widest text-slate-400">Photo</span>
               )}
            </div>
            <h4 className="font-display text-2xl mb-2">{data?.name}</h4>
            <p className="font-sans text-sm text-slate-300 mb-6">{data?.position}</p>
            <div className="w-full h-px bg-slate-800 mb-6" />
            <p className="font-sans text-sm font-medium text-white mb-2 uppercase tracking-wide">{data?.experience}</p>
            <p className="font-sans text-sm font-medium text-slate-400 uppercase tracking-wide">{data?.countries}</p>
          </div>

          {/* Quote & Credentials */}
          <div className="flex-1 p-10 md:p-14">
            <blockquote className="font-display text-2xl text-navy-950 leading-relaxed italic mb-8 relative">
              <span className="absolute -top-4 -left-6 text-6xl text-ice-100 font-serif leading-none">"</span>
              <span className="relative z-10">{data?.quote}</span>
            </blockquote>

            {data?.paragraphs && (
              <div className="space-y-4 mb-8 font-sans text-slate-700 text-sm leading-relaxed">
                {data.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}
            
            <h5 className="font-sans font-bold text-navy-900 uppercase tracking-wider text-sm mb-6 border-b border-border-light pb-2">
              Credentials & Recognition
            </h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {data?.credentials?.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold mt-0.5">✦</span>
                  <span className="font-sans text-sm text-slate-700">{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;
