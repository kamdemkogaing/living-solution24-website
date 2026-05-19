import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Startseite", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-24 flex items-center justify-between">
        <a href="#start">
          <img
            src="/logo-living-solution.png"
            alt="Living Solution 24"
            className="h-16 md:h-[10rem] object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-brandRed transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden lg:flex items-center gap-2 bg-brandRed hover:bg-brandDarkRed text-white px-6 py-3 rounded-sm font-bold uppercase text-sm transition"
        >
          <Phone size={18} />
          Kontakt
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-brandBlack"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-brandBorder">
          <nav className="flex flex-col p-4 gap-4 font-bold uppercase text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="bg-brandRed text-white text-center py-4 rounded-sm"
            >
              Kontakt aufnehmen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
