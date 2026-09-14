import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Travel destination images using actual JPEG files
const slideImages = [
  {
    url: "/paris-champs-elysees-night-city-lights.webp",
    title: "Paris, France",
    description: "",
  },
  {
    url: "/african-lion-couple-safari-jeep-kenya-wildlife.webp",
    title: "Kenya, Africa",
    description: "",
  },
  {
    url: "/pienza-tuscany-italy-scenic-village.webp",
    title: "Tuscany, Italy",
    description: "",
  },
  {
    url: "/northern-lights-finland-lapland-aurora.webp",
    title: "Saariselkä Finnish Lapland",
    description: "",
  },
  {
    url: "/maldives-aerial-view-overwater-villas-turquoise-lagoon.webp",
    title: "Maldives",
    description: "",
  },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [readMore, setReadMore] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
      setIsTransitioning(false);
    }, 500);
  };

  const currentImage = slideImages[currentSlide];

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center min-h-screen py-[90px] px-[15px] md:min-h-[90vh] md:py-[110px] lg:min-h-screen lg:py-[140px] lg:px-10">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes Dist_snowfall {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(100px) rotate(5deg); }
        }
        @keyframes Dist_fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .Dist_readmore_wrapper {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .Dist_readmore_btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 14px;
          cursor: pointer;
          position: relative;
          padding-bottom: 2px;
          transition: 0.3s;
        }
        .Dist_readmore_btn::after {
          content: "";
          width: 0;
          height: 1px;
          background: white;
          position: absolute;
          left: 0;
          bottom: -2px;
          transition: 0.3s;
        }
        .Dist_readmore_btn:hover::after {
          width: 100%;
        }
      `}} />

      {/* Slideshow Background */}
      {slideImages.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center pointer-events-none transition-all duration-[2000ms]",
            index === currentSlide ? "opacity-100 scale-100 z-[1]" : "opacity-0 scale-110 z-0"
          )}
          style={{
            backgroundImage: `url('${slide.url}')`,
            transitionProperty: "opacity, transform",
            transitionTimingFunction: index === currentSlide ? "ease-in-out, linear" : "ease-in-out, ease",
            transitionDuration: index === currentSlide ? "2s, 8s" : "2s, 0.3s",
          }}
        />
      ))}

      {/* Radial overlay and snowfall animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 z-[2]" />
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%] opacity-30 pointer-events-none z-[1] animate-[Dist_snowfall_60s_linear_infinite]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-[3] max-w-[850px] text-center text-white animate-[Dist_fadeInUp_1s_ease-out] w-full px-4 sm:px-6">
        {/* Brand block — smaller on mobile to fit below the fixed navbar */}
        <div className="mb-6 sm:mb-8">
          <div className="brand-est text-white/60 text-xs sm:text-sm tracking-[0.3em] uppercase mb-2 sm:mb-4">
            EST 1995
          </div>
          <h1 className="brand-main text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] font-normal text-white leading-none mb-2 tracking-wide">
            TRIPS &amp; SHIPS
            <span className="sr-only"> - Luxury River Cruises, Custom Safaris &amp; Expedition Voyages</span>
          </h1>
          <div className="brand-subtitle text-xs sm:text-sm md:text-base tracking-[0.4em] text-white/80 uppercase mb-6 sm:mb-10">
            LUXURY TRAVEL
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-6 sm:mb-8 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 tracking-wide font-serif">
            Curated Escapes. Seamless Luxury.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Tailored travel experiences designed for discerning travelers.
          </p>
        </div>

        {/* Main description block with Read More functionality */}
        <div className="max-w-3xl mx-auto text-white/85 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-light">
          <p>
            Trips &amp; Ships Luxury Travel creates custom river cruises, small ship expeditions,
            luxury safaris, and personalized vacations around the world.
          </p>
          {readMore && (
            <p className="mt-3 animate-[Dist_fadeInUp_0.5s_ease-out]">
              Our travel advisors combine more than 40 years of experience with insider access to exclusive cruise
              lines, safari lodges, and luxury resorts, ensuring every journey is tailored to your
              interests, travel style, and budget.
            </p>
          )}
          <div className="Dist_readmore_wrapper">
            <button
              className="Dist_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Current destination */}
        <div className="mb-6 sm:mb-8 text-white">
          <h3 className="text-sm sm:text-base md:text-lg text-white/95 tracking-widest uppercase font-light">{currentImage.title}</h3>
        </div>

        {/* CTA Buttons - Tully style */}
        <div className="flex justify-center flex-wrap gap-[15px] mt-[25px] flex-col items-center sm:flex-row">
          <Link
            to="/contact"
            className="w-full max-w-[320px] sm:w-auto px-[35px] py-[15px] bg-white text-[#1a1a1a] border-none text-[14px] font-semibold tracking-[0.5px] cursor-pointer rounded-[4px] transition-all duration-300 hover:bg-[#274472] hover:text-white flex items-center justify-center"
          >
            Start Planning
          </Link>
          <Link
            to="/custom-safaris"
            className="w-full max-w-[320px] sm:w-auto px-[30px] py-[14px] bg-transparent text-white border border-white text-[14px] font-semibold cursor-pointer rounded-[4px] transition-all duration-300 hover:bg-white/10 flex items-center justify-center"
          >
            Explore Destinations
          </Link>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center text-white mt-10 z-20">
          <a
            href="#explore"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={() => {
              document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center opacity-[200] hover:opacity-100 transition-opacity cursor-pointer group"
          >
            <span className="text-[11px] tracking-[0.2em] font-light uppercase mb-3">Scroll to Explore</span>
            <div className="w-[20px] h-[34px] border-2 border-white/50 rounded-full flex justify-center p-1.5 group-hover:border-white transition-colors">
              <div className="w-[4px] h-[7px] bg-white rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>

    </section>
  );
}
