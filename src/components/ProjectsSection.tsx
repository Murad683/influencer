import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import collab1 from "@/assets/collab-1.jpg";
import collab2 from "@/assets/collab-2.jpg";
import collab3 from "@/assets/collab-3.jpg";
import collab4 from "@/assets/collab-4.jpg";
import collab5 from "@/assets/collab-5.jpg";
import collab6 from "@/assets/collab-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { image: collab1, title: "Ətirlər Kolleksiyası", brand: "Premium Brend ilə əməkdaşlıq", tall: true },
  { image: collab2, title: "Paris Moda Həftəsi", brand: "Küçə üslubu fotosessiyası", tall: false },
  { image: collab3, title: "Aksessuar Kampaniyası", brand: "Lüks çanta brendləri", tall: true },
  { image: collab4, title: "Dəri Qulluğu Ritualı", brand: "Gözəllik brendləri ilə", tall: false },
  { image: collab5, title: "Yay Kolleksiyası", brand: "Editorial fotosessiya", tall: true },
  { image: collab6, title: "Zərgərlik Kampaniyası", brand: "Qızıl aksessuarlar", tall: false },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate each card
      const cards = sectionRef.current?.querySelectorAll(".project-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="layiheler" className="py-32 lg:py-44">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="text-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            Seçilmiş <span className="italic font-normal">Layihələr</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card break-inside-avoid group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  project.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-xl text-primary-foreground font-medium">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/80 mt-1">
                    {project.brand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
