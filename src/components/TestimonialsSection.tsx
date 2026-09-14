import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Professional testimonials - Tully style
const testimonials = [
  {
    id: 1,
    name: "James Harrison",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Our corporate retreat to Tuscany was flawlessly executed. The team at Trips & Ships handled everything from private transportation to exclusive wine tastings. Our executives were thoroughly impressed with the entire experience.",
    trip: "Tuscany Corporate Retreat",
    image: "/african-lion-couple-safari-jeep-kenya-wildlife.jpg"
  },
  {
    id: 2,
    name: "Emily & David Chen",
    location: "Chicago, IL",
    rating: 5,
    text: "The exotic cultural journey exceeded all expectations. From the moment we arrived to our final day, every experience was carefully curated. Our travel designer understood exactly what we wanted and delivered beyond our dreams.",
    trip: "Cultural Discovery Tour",
    image: "/chureito-pagoda-mount-fuji-cherry-blossoms-japan.webp"
  },
  {
    id: 3,
    name: "Robert & Linda Martinez",
    location: "Miami, FL",
    rating: 5,
    text: "After 30 years of marriage, we wanted something special. Our anniversary trip to Paris was beyond our wildest dreams. The luxury accommodations, private tours, and romantic dinners created memories we'll treasure forever.",
    trip: "Paris Anniversary Celebration",
    image: "/northern-lights-finland-lapland-aurora.webp"
  },
  {
    id: 4,
    name: "Dr. Amanda Foster",
    location: "Boston, MA",
    rating: 5,
    text: "As a busy professional, I needed someone to handle every detail of my Mediterranean cruise. Trips & Ships delivered beyond expectations - from cabin upgrades to shore excursions, everything was perfectly arranged.",
    trip: "Mediterranean Luxury Cruise",
    image: "/paris-champs-elysees-night-city-lights.webp"
  },
  {
    id: 5,
    name: "The Wilson Family",
    location: "Seattle, WA",
    rating: 5,
    text: "Our tropical island getaway was challenging to plan for our large family, but Trips & Ships made it effortless. They accommodated everyone's needs and created an itinerary that delighted both our teenagers and grandparents.",
    trip: "Tropical Family Paradise",
    image: "/maldives-aerial-view-overwater-villas-turquoise-lagoon.webp"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover why discerning travelers choose Trips & Ships for their most important journeys. 
            Our commitment to excellence speaks through their experiences.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img 
                    src={current.image} 
                    alt={current.trip}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-light opacity-90">{current.trip}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-primary mb-6" />
                  
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                    "{current.text}"
                  </blockquote>

                  <div className="flex items-center mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-1">{current.name}</p>
                    <p className="text-sm text-gray-500">{current.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentTestimonial 
                  ? "bg-primary scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        {/* Statistics - Tully style */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2">4.9</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2">1,200+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2">30+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Countries Visited</div>
          </div>
        </div>
      </div>
    </section>
  );
}
