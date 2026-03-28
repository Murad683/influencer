import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.4,
          ease: "power3.inOut",
          delay: 0.3,
        }
      );

      // Headline letters
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.6 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground animate-fade-up">
              Moda · Həyat tərzi · İlham
            </p>

            <h1
              ref={headlineRef}
              className="text-editorial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground"
            >
              Mənim Rəqəmsal
              <br />
              <span className="italic font-normal">Dünyama</span>
              <br />
              Xoş Gəlmisiniz
            </h1>

            <p className="font-sans text-base text-muted-foreground max-w-md leading-relaxed animate-fade-up-delay-2">
              Modanın, yaradıcılığın və estetikanın kəsişdiyi nöqtədə —
              birlikdə gözəl hekayələr yaradırıq.
            </p>

            <div className="animate-fade-up-delay-3">
              <a href="#elaqe" className="btn-primary-warm">
                Mənimlə Əməkdaşlıq
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Nərmin — Moda və Həyat Tərzi İnfluenseri"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1024}
                />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-3">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Aşağı sürüşdür
        </span>
        <div className="w-px h-10 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
