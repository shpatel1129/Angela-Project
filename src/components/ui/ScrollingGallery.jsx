import React from 'react';

const ScrollingGallery = ({ items }) => {
  if (!items || items.length === 0) return null;
  
  // Duplicate items for infinite scroll effect
  const repeatedItems = [...items, ...items, ...items];
  
  return (
    <section className="w-full py-12 bg-navy-950 overflow-hidden">
      <div className="relative w-full flex items-center h-64 md:h-80">
        <div className="flex w-max" style={{ animation: 'marquee 40s linear infinite' }}>
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="relative inline-block w-[300px] md:w-[450px] h-60 md:h-72 mx-4 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl group">
              <img src={item} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default ScrollingGallery;
