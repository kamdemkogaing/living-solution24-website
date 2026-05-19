import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Beschreibung */}
        <div>
          <img
            src="/logo-living-solution_v2.png"
            alt="Living Solution 24"
            className="mb-6"
          />

          <p className="text-gray-400 text-sm leading-relaxed">
            Living Solution 24 steht für professionelle Bau-, Sanierungs- und
            Renovierungsarbeiten mit Qualität, Zuverlässigkeit und modernen
            Lösungen aus einer Hand.
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-black uppercase mb-5 text-lg">Kontakt</h3>

          <div className="space-y-4 text-sm text-gray-300">
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-brandRed shrink-0" />
              +4917664691587
            </p>

            <p className="flex items-center gap-3 break-all">
              <Mail size={18} className="text-brandRed shrink-0" />
              info@living-solution24.de
            </p>

            <p className="flex items-center gap-3 break-all">
              <Mail size={18} className="text-brandRed shrink-0" />
              rechnung@living-solution.de
            </p>

            <p className="flex items-center gap-3 break-all">
              <Mail size={18} className="text-brandRed shrink-0" />
              christianmonthe@living-solution24.de
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-brandRed shrink-0" />
              Deutschland
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-black uppercase mb-5 text-lg">Navigation</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <a href="#start" className="hover:text-brandRed transition">
              Startseite
            </a>

            <a href="#leistungen" className="hover:text-brandRed transition">
              Leistungen
            </a>

            <a href="#referenzen" className="hover:text-brandRed transition">
              Referenzen
            </a>

            <a href="#ueber-uns" className="hover:text-brandRed transition">
              Über uns
            </a>

            <a href="#kontakt" className="hover:text-brandRed transition">
              Kontakt
            </a>

            <a href="#" className="hover:text-brandRed transition">
              Impressum
            </a>

            <a href="#" className="hover:text-brandRed transition">
              Datenschutz
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-black uppercase mb-5 text-lg">Folge uns</h3>

          <div className="flex flex-wrap gap-4">
            {/* Facebook */}
            <a
              href="#"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
            >
              <FaInstagram size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/4917664691587"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition duration-300"
            >
              <FaWhatsapp size={22} />
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
            >
              <FaTiktok size={18} />
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
            >
              <FaYoutube size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6 leading-relaxed">
            Folgen Sie Living Solution 24 auf Social Media und sehen Sie unsere
            neuesten Projekte und Baustellen.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brandRed/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© 2024 Living Solution 24 – Alle Rechte vorbehalten.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-brandRed transition">
              Impressum
            </a>

            <a href="#" className="hover:text-brandRed transition">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
