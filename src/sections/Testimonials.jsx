import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "As a supervisor during his intern days, I noticed he learns quickly and turns knowledge into code. He asks thoughtful questions, which contributed to building the compliance system.",
    author: "Nikko Niel Zamora",
    role: "IT Head Supervisor, People360",
    avatar: "/testimonials/nikko-niel-zamora.jpeg",
  },
  {
    quote:
      "As a team lead, he’s easy to manage, takes tasks seriously, and consistently delivers on time, even under pressure.",
    author: "June Roe Nasayao",
    role: "Developer Team Lead, Inobei. Inc",
    avatar: "/testimonials/june-roe-nasayao.jpeg",
  },
  {
    quote:
      "Fast to design and implement fixes on our website using Wix Studio. Easy to communicate with and follows instructions very well.",
    author: "Dr. Shaun Tan",
    role: "Consultant in Health Tech, Alternative Medicine & GP Services",
    avatar: "/testimonials/dr-shaun-tan.png",
  },
  {
    quote:
      "Easy to collaborate with. We share ideas on using graphics effectively in the system.",
    author: "Jam Songsong",
    role: "Graphic Designer & Marketing Head, Inobei Inc.",
    avatar: "/testimonials/jam-songsong.jpeg",
  },
  {
    quote:
      "The compliance system he developed is still in use today, proving that his code stands the test of time.",
    author: "Mark Christian Dela Cruz",
    role: "IMS Officer, People360",
    avatar: "/testimonials/mark-christian-dela-cruz.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const intervalRef = useRef(null);
  const restartTimeoutRef = useRef(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setDirection("left");
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 300);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
  };

  // Start on mount, clean up on unmount
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (index, dir) => {
    stopAutoPlay();
    setDirection(dir);
    setActiveIndex(index);

    restartTimeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 3000);
  };

  const previous = () => {
    const index = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goTo(index, "right");
  };

  const next = () => {
    const index = (activeIndex + 1) % testimonials.length;
    goTo(index, "left");
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-32 relative overflow-hidden scroll-mt-15 md:scroll-mt-0"
    >
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kinds words from
            <span className="font-serif italic font-normal text-white">
              {" "}
              amazing people.
            </span>
          </h2>
        </div>
        {/* Section Header - END */}

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div
              key={activeIndex}
              className={`glass p-8 md:p-12 glow-border relative
      ${direction === "left" ? "slide-in-left" : "slide-in-right"}`}
            >
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                {testimonials[activeIndex].quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
            {/* Main Testimonial - END */}

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
            {/* Testimonials Navigation - END */}
          </div>
        </div>
        {/* Testimonial Carousel - END */}
      </div>
    </section>
  );
};
export default Testimonials;
