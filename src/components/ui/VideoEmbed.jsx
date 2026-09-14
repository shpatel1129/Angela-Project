import React from 'react';
import FadeIn from './FadeIn';

const VideoEmbed = ({ data, youtubeId: propYoutubeId, title: propTitle, description: propDescription, maxWidthClass = "max-w-[1050px]" }) => {
  const youtubeId = propYoutubeId || data?.youtubeId;
  const title = propTitle || data?.title || "Discover AmaWaterways River Cruising";
  const description = propDescription || data?.description;

  if (!youtubeId) return null;

  const isEmbedded = Boolean(propYoutubeId && !data);

  const iframeContent = (
    <div className="w-full aspect-video bg-navy-950 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-200/60">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&vq=hd1080`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );

  if (isEmbedded) {
    return <FadeIn>{iframeContent}</FadeIn>;
  }

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className={`${maxWidthClass} mx-auto px-6 text-center`}>
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-5">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-4 mb-6"></div>
          {description && (
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          {iframeContent}
        </FadeIn>
      </div>
    </section>
  );
};

export default VideoEmbed;
