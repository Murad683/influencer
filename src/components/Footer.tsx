import { Instagram, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="elaqe" className="bg-accent py-32 lg:py-44">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Əlaqə
          </p>
          <h2 className="text-editorial text-5xl sm:text-6xl lg:text-8xl font-light text-accent-foreground">
            Birlikdə <br />
            <span className="italic font-normal">Yaradaq.</span>
          </h2>
          <a
            href="mailto:hello@nermin.az"
            className="inline-flex items-center gap-2 font-sans text-lg text-muted-foreground mt-8 transition-colors duration-300 hover:text-foreground group"
          >
            hello@nermin.az
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-foreground/10 mb-12" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="font-serif text-2xl font-semibold tracking-tight text-accent-foreground"
          >
            Nərmin.
          </a>

          {/* Social */}
          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, label: "Instagram", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
            <a
              href="mailto:hello@nermin.az"
              className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="font-sans text-xs text-muted-foreground tracking-wide">
            © 2026 Nərmin. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
