import React from 'react';

const AuthorityGrid12 = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-navy-950 text-ice-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-tl-full rounded-tr-full overflow-hidden border border-gold-500/30 p-2">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover rounded-tl-full rounded-tr-full filter grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-ice-50 text-navy-950 p-8 rounded-xl max-w-xs shadow-2xl hidden md:block">
              <p className="font-sans text-sm italic mb-4">"{data.quote}"</p>
              <p className="font-display font-semibold tracking-wider text-xs uppercase">{data.title.split(': ')[1]}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl lg:text-5xl text-gold-400 mb-4">
              {data.title}
            </h2>
            <p className="text-xl text-ice-200/80 mb-12 max-w-2xl font-light">
              {data.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.credentials?.map((cred, index) => (
                <div 
                  key={index}
                  className="bg-navy-900/50 backdrop-blur-md border border-ice-50/10 p-6 rounded-xl hover:bg-navy-800 transition-colors duration-300 group"
                >
                  <div className="text-gold-400 font-display text-2xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="font-sans font-semibold text-ice-50 mb-1 text-sm tracking-widest uppercase">
                    {cred.title}
                  </h3>
                  <p className="text-ice-300/80 text-sm">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityGrid12;
