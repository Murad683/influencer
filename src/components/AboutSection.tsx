import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "@/assets/about-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text fade up
      const textElements = textRef.current?.children;
      if (textElements) {
        gsap.fromTo(
          textElements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="haqqimda"
      className="relative py-32 lg:py-44 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <div ref={imageRef} className="w-full h-[120%] -mt-[10%]">
                <img
                  src={aboutImage}
                  alt="Nərmin haqqında"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-accent -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-dusty-rose/30 -z-10" />
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div ref={textRef} className="flex flex-col gap-6">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Hekayəm
              </p>

              <h2 className="text-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
                Bir az mənim <br />
                <span className="italic font-normal">haqqımda</span>
              </h2>

              <div className="w-12 h-px bg-foreground/20" />

              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
                Mən Nərmin — moda, həyat tərzi və yaradıcılıq dünyasının vurğunuyam. 
                İllərdən bəri estetik dəyərlər, gözəl anlar və ilhamverici məzmun yaratmaqla 
                məşğul oluram.
              </p>

              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
                Hər bir layihəmdə gözəlliyi sadəliklə birləşdirməyə çalışıram. 
                Brendlərlə əməkdaşlıqda səmimiyyət və keyfiyyət həmişə ön plandadır. 
                Dünyaya fərqli baxmaq, hər detaylda estetika tapmaq — mənim həyat fəlsəfəmdir.
              </p>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <span className="font-serif text-4xl font-light text-foreground">150+</span>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    Əməkdaşlıq
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-serif text-4xl font-light text-foreground">80K+</span>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    İzləyici
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-serif text-4xl font-light text-foreground">5+</span>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    İl Təcrübə
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
