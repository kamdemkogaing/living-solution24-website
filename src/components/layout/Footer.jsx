import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src="/logo-living-solution.png"
            alt="Living Solution 24"
            className="h-20 mb-6"
          />

          <p className="text-gray-400 text-sm">
            Bau, Sanierung & Renovierung aus einer Hand.
          </p>
        </div>

        <div>
          <h3 className="font-black uppercase mb-5">Kontakt</h3>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex gap-2">
              <Phone size={16} className="text-brandRed" />
              +49 000 000000
            </p>

            <p className="flex gap-2">
              <Mail size={16} className="text-brandRed" />
              info@living-solution.de
            </p>

            <p className="flex gap-2">
              <Mail size={16} className="text-brandRed" />
              rechnung@living-solution.de
            </p>

            <p className="flex gap-2">
              <Mail size={16} className="text-brandRed" />
              christianmonthe@living-solution.de
            </p>

            <p className="flex gap-2">
              <MapPin size={16} className="text-brandRed" />
              Deutschland
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-black uppercase mb-5">Links</h3>

          <div className="space-y-3 text-sm text-gray-300 flex flex-col">
            <a href="#start">Startseite</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#referenzen">Referenzen</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>

        <div>
          <h3 className="font-black uppercase mb-5">Folge uns</h3>

          <div className="flex gap-4">
            <a className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed transition">
              <Facebook size={20} />
            </a>

            <a className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brandRed/40 py-5 text-center text-sm text-gray-400">
        © 2024 Living Solution 24 – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}