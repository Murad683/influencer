import { useState, useEffect } from "react";

const navLinks = [
  { label: "Haqqımda", href: "#haqqimda" },
  { label: "Layihələr", href: "#layiheler" },
  { label: "Qalereya", href: "#qalereya" },
  { label: "Əlaqə", href: "#elaqe" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-nav py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <a
          href="#"
          className="font-serif text-2xl font-semibold tracking-tight text-foreground"
        >
          Nərmin.
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm tracking-widest uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#elaqe"
          className="hidden md:inline-flex font-sans text-xs tracking-widest uppercase text-foreground border border-foreground rounded-full px-6 py-2.5 transition-all duration-500 hover:bg-foreground hover:text-primary-foreground"
        >
          Əlaqə
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
