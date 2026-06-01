import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Startseite", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Über uns", href: "#ueber-uns" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#start">
          <img
            src="/images/logo_CM.webp"
            alt="Living Solution 24"
            className="h-16 md:h-[6rem] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                hover:text-brandRed
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-brandRed
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Kontakt Button Desktop */}
        <a
          href="#kontakt"
          className="
            hidden lg:flex
            items-center
            gap-3
            bg-brandRed
            hover:bg-brandDarkRed
            text-white
            px-8
            py-4
            font-bold
            uppercase
            text-sm
            rounded-2xl
            transition-all
            duration-300
            shadow-lg
            hover:shadow-xl
            hover:-translate-y-1
          "
        >
          <Phone size={18} />
          Kontakt
        </a>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-brandBlack"
          aria-label="Menü öffnen"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-white border-t border-brandBorder shadow-lg">
          <nav className="flex flex-col p-4 gap-2 font-bold uppercase text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  py-4
                  border-b
                  border-brandBorder
                  hover:text-brandRed
                  transition
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-brandRed
                hover:bg-brandDarkRed
                text-white
                py-4
                mt-3
                rounded-2xl
                font-bold
                uppercase
                shadow-lg
                transition
              "
            >
              <Phone size={18} />
              Kontakt aufnehmen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
