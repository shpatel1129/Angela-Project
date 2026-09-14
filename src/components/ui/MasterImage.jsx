import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

// Singleton IntersectionObserver for better performance
let imageObserver = null;
const imageCallbacks = new Map();

const getImageObserver = () => {
  if (typeof window === 'undefined') return null;
  if (!imageObserver) {
    imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = imageCallbacks.get(entry.target);
            if (callback) {
              callback();
              imageObserver.unobserve(entry.target);
              imageCallbacks.delete(entry.target);
            }
          }
        });
      },
      { rootMargin: '200px 0px' }
    );
  }
  return imageObserver;
};

const MasterImage = ({ 
  src, 
  alt = "Image", 
  className = "", 
  fallbackSrc = null, 
  placeholderLabel = "",
  asBackground = false,
  priority = false,
  children
}) => {
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(priority);
  const ref = useRef(null);

  // Reset error status if src prop changes
  useEffect(() => {
    setError(false);
  }, [src]);

  useEffect(() => {
    if (priority || !asBackground) return;
    
    const el = ref.current;
    if (!el) return;

    const obs = getImageObserver();
    if (obs) {
      imageCallbacks.set(el, () => setInView(true));
      obs.observe(el);
      
      return () => {
        imageCallbacks.delete(el);
        obs.unobserve(el);
      };
    } else {
      setInView(true);
    }
  }, [priority, asBackground]);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  // If src is missing (null/undefined/empty) or image errored without valid fallback
  const hasValidSrc = src && typeof src === 'string' && src.trim() !== '' && src !== 'null' && src !== 'undefined';
  const shouldRenderPlaceholder = !hasValidSrc || (error && !fallbackSrc);

  const displayLabel = placeholderLabel || alt || "IMAGE PLACEHOLDER";

  if (shouldRenderPlaceholder) {
    if (asBackground) {
      return (
        <div 
          className={`bg-slate-800 flex flex-col items-center justify-center p-6 text-center border border-slate-700/60 relative overflow-hidden ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-navy-950/40 pointer-events-none" />
          <div className="z-10 flex flex-col items-center justify-center gap-2 max-w-md mx-auto">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-400 mb-1 shadow-sm">
              <ImageIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono tracking-widest text-blue-300 font-bold uppercase px-3 py-1 bg-navy-950/80 rounded border border-blue-500/30">
              [ IMAGE PLACEHOLDER ]
            </span>
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-wide line-clamp-2">
              {displayLabel}
            </span>
          </div>
          {children}
        </div>
      );
    }

    return (
      <div 
        className={`bg-slate-800 flex flex-col items-center justify-center p-6 text-center border border-slate-700/60 relative overflow-hidden select-none ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-navy-950/40 pointer-events-none" />
        <div className="z-10 flex flex-col items-center justify-center gap-2 max-w-md mx-auto">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-400 mb-1 shadow-sm">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-mono tracking-widest text-blue-300 font-bold uppercase px-3 py-1 bg-navy-950/80 rounded border border-blue-500/30 shadow-sm">
            [ IMAGE PLACEHOLDER ]
          </span>
          <span className="text-sm font-semibold text-slate-200 uppercase tracking-wide line-clamp-2">
            {displayLabel}
          </span>
        </div>
      </div>
    );
  }

  const finalSrc = error && fallbackSrc ? fallbackSrc : src;

  if (asBackground) {
    return (
      <div 
        ref={ref}
        className={className}
        style={{ backgroundImage: (inView && finalSrc) ? `url("${finalSrc}")` : 'none' }}
      >
        {children}
      </div>
    );
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
    />
  );
};

export default MasterImage;
