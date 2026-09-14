import React, { useState } from 'react';
import FadeIn from './FadeIn';

const InteractiveVideoFeature = ({ videos }) => {
  if (!videos || Object.keys(videos).length === 0) return null;

  const videoList = Object.values(videos);
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                A Closer Look
              </h2>
            </FadeIn>
            
            <div className="flex flex-col gap-4">
              {videoList.map((video, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideo(idx)}
                  className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                    activeVideo === idx 
                      ? 'bg-white/10 border-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.15)]' 
                      : 'bg-transparent border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <h3 className={`font-display text-2xl mb-2 transition-colors ${
                    activeVideo === idx ? 'text-gold-400' : 'text-white'
                  }`}>
                    {video.title}
                  </h3>
                  <p className="font-sans text-sm text-ice-200">
                    {video.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="w-full lg:w-2/3">
            <FadeIn delay={0.2} key={activeVideo}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoList[activeVideo].youtubeId}?autoplay=0&rel=0`}
                  title={videoList[activeVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveVideoFeature;
