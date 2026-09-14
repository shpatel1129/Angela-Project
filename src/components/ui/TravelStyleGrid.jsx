import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Heart, Calendar, Gift, Wine, Ship, Star } from 'lucide-react';

const TravelStyleGrid = ({ data }) => {
  if (!data || !data.items) return null;

  // Map icons based on title keywords for a dynamic touch
  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('couple') || t.includes('anniversary') || t.includes('honeymoon')) return <Heart className="w-6 h-6" />;
    if (t.includes('solo')) return <User className="w-6 h-6" />;
    if (t.includes('family') || t.includes('groups')) return <Users className="w-6 h-6" />;
    if (t.includes('christmas')) return <Gift className="w-6 h-6" />;
    if (t.includes('wine') || t.includes('food')) return <Wine className="w-6 h-6" />;
    if (t.includes('tulip') || t.includes('spring')) return <Ship className="w-6 h-6" />;
    if (t.includes('flexible')) return <Calendar className="w-6 h-6" />;
    return <Star className="w-6 h-6" />;
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-xl text-slate-600 font-light">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 overflow-hidden group border transition-all duration-500 shadow-sm hover:shadow-xl ${
                item.image 
                  ? 'border-transparent text-white' 
                  : 'bg-slate-50 border-slate-100 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.image && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 z-10" />
                </>
              )}

              <div className="relative z-20 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                  item.image ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-white text-blue-900'
                }`}>
                  {getIcon(item.title)}
                </div>
                
                <h3 className={`text-xl font-serif mb-2 transition-colors ${
                  item.image ? 'text-white' : 'group-hover:text-blue-200'
                }`}>
                  {item.title}
                </h3>
                
                <div className="mt-auto">
                  <div className={`inline-block px-3 py-1 rounded-md text-sm font-bold mb-4 transition-colors ${
                    item.image 
                      ? 'bg-blue-500/80 text-white backdrop-blur-sm' 
                      : 'bg-blue-100 text-blue-900 group-hover:bg-blue-800 group-hover:text-blue-100'
                  }`}>
                    {item.timeframe}
                  </div>
                  
                  <p className={`text-sm leading-relaxed transition-colors ${
                    item.image ? 'text-slate-200' : 'text-slate-600 group-hover:text-slate-300'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStyleGrid;
