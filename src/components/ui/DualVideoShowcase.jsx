import React from 'react';

const DualVideoShowcase = ({ data }) => {
  if (!data || !data.videos) return null;

  return (
    <section className="py-24 bg-ice-50 text-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4">{data.title}</h2>
          <p className="text-xl text-navy-800/70 max-w-2xl mx-auto font-light">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-900 mb-6 shadow-xl">
                {/* Fallback styling since this is a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-ice-50/20 backdrop-blur-sm flex items-center justify-center border border-ice-50/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-ice-50 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* In a real implementation, you might load a YouTube iframe or thumbnail here based on video.youtubeId */}
                <div className="absolute bottom-4 right-4 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-full text-ice-50 text-xs font-sans tracking-widest uppercase">
                  Play Video
                </div>
              </div>
              <h3 className="font-display text-2xl mb-2 text-navy-900 group-hover:text-gold-600 transition-colors">
                {video.title}
              </h3>
              <p className="text-navy-700/80 text-sm">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DualVideoShowcase;
