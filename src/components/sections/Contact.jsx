import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-brandBlack text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-brandRed font-black uppercase text-sm">Kontakt</p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mt-3 mb-6">
            Jetzt Projekt anfragen
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Schreiben Sie uns für Bau, Sanierung, Renovierung oder eine
            unverbindliche Beratung.
          </p>

          <div className="space-y-5">
            <p className="flex items-center gap-3">
              <Mail className="text-brandRed" />
              info@living-solution24.de
            </p>

            <p className="flex items-center gap-3">
              <Mail className="text-brandRed" />
              rechnung@living-solution24.de
            </p>

            <p className="flex items-center gap-3">
              <Mail className="text-brandRed" />
              christianmonthe@living-solution24.de
            </p>

            <p className="flex items-center gap-3">
              <Phone className="text-brandRed" />
              +49 176 646 91 587
            </p>

            <p className="flex items-center gap-3">
              <MapPin className="text-brandRed" />
              Deutschland
            </p>
          </div>
        </div>

        <form className="bg-white text-brandBlack p-6 md:p-10 shadow-soft space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          />

          <input
            type="email"
            placeholder="E-Mail"
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          />

          <input
            type="tel"
            placeholder="Telefon"
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          />

          <select className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed">
            <option>Leistung auswählen</option>
            <option>Sanierung</option>
            <option>Renovierung</option>
            <option>Trockenbau</option>
            <option>Malerarbeiten</option>
            <option>Bodenverlegung</option>
            <option>Innenausbau</option>
          </select>

          <textarea
            placeholder="Nachricht"
            className="w-full border border-brandBorder p-4 h-36 outline-none focus:border-brandRed"
          />

          <button
            type="submit"
            className="w-full bg-brandRed hover:bg-brandDarkRed text-white py-4 font-bold uppercase transition"
          >
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
