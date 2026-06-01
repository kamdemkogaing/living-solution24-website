import { CheckCircle, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const karlsruheMap =
    "https://www.google.com/maps/search/?api=1&query=Erzbergerstr+94+76133+Karlsruhe";
  const pforzheimMap =
    "https://www.google.com/maps/search/?api=1&query=Bleichstr+46+75173+Pforzheim";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Neue Anfrage von ${name} - Living Solution 24`,
    );

    const body = encodeURIComponent(
      `Neue Anfrage über die Website:\n\n` +
        `Name: ${name}\n` +
        `E-Mail: ${email}\n` +
        `Telefon: ${phone}\n` +
        `Leistung: ${service}\n\n` +
        `Nachricht:\n${message}`,
    );

    window.location.href = `mailto:info@living-solution24.de?subject=${subject}&body=${body}`;

    setSuccessMessage(
      "Vielen Dank! Ihre Anfrage wurde vorbereitet. Bitte bestätigen Sie den Versand in Ihrem E-Mail-Programm.",
    );

    form.reset();

    setTimeout(() => {
      setSuccessMessage("");
    }, 10000);
  };

  return (
    <section id="kontakt" className="section-padding bg-brandBlack text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-brandRed font-black uppercase text-sm">Kontakt</p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mt-3 mb-6">
            Jetzt Angebot anfragen
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Schreiben Sie uns für Bau, Sanierung, Renovierung oder eine
            unverbindliche Beratung.
          </p>

          <div className="space-y-5 mb-8">
            <a
              href="mailto:info@living-solution24.de"
              className="flex items-center gap-3 hover:text-brandRed transition break-all"
            >
              <Mail className="text-brandRed shrink-0" />
              info@living-solution24.de
            </a>

            <a
              href="mailto:rechnung@living-solution24.de"
              className="flex items-center gap-3 hover:text-brandRed transition break-all"
            >
              <Mail className="text-brandRed shrink-0" />
              rechnung@living-solution24.de
            </a>

            <a
              href="mailto:christianmonthe@living-solution24.de"
              className="flex items-center gap-3 hover:text-brandRed transition break-all"
            >
              <Mail className="text-brandRed shrink-0" />
              christianmonthe@living-solution24.de
            </a>

            <a
              href="tel:+491726432778"
              className="flex items-center gap-3 hover:text-brandRed transition"
            >
              <Phone className="text-brandRed shrink-0" />
              +49 172 643 2778
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <a
              href={karlsruheMap}
              target="_blank"
              rel="noreferrer"
              className="group bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-brandRed hover:bg-white/10 transition"
            >
              <div className="flex items-start gap-3">
                <MapPin className="text-brandRed shrink-0 mt-1" />
                <div>
                  <h3 className="font-black uppercase mb-2">Karlsruhe</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Erzbergerstr. 94
                    <br />
                    76133 Karlsruhe
                  </p>
                </div>

                <ExternalLink
                  size={18}
                  className="ml-auto text-gray-500 group-hover:text-brandRed transition"
                />
              </div>
            </a>

            <a
              href={pforzheimMap}
              target="_blank"
              rel="noreferrer"
              className="group bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-brandRed hover:bg-white/10 transition"
            >
              <div className="flex items-start gap-3">
                <MapPin className="text-brandRed shrink-0 mt-1" />
                <div>
                  <h3 className="font-black uppercase mb-2">Pforzheim</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Bleichstr. 46
                    <br />
                    75173 Pforzheim
                  </p>
                </div>

                <ExternalLink
                  size={18}
                  className="ml-auto text-gray-500 group-hover:text-brandRed transition"
                />
              </div>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-soft">
            <iframe
              title="Living Solution 24 Standorte Karlsruhe und Pforzheim"
              src="https://www.google.com/maps?q=Erzbergerstr%2094%2076133%20Karlsruhe%20Bleichstr%2046%2075173%20Pforzheim&output=embed"
              className="w-full h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-brandBlack p-6 md:p-10 shadow-soft space-y-4 rounded-2xl"
        >
          {successMessage && (
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl">
              <CheckCircle className="shrink-0 mt-0.5" size={22} />
              <p className="text-sm font-semibold">{successMessage}</p>
            </div>
          )}

          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed rounded-xl"
          />

          <input
            name="email"
            type="email"
            placeholder="E-Mail"
            required
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed rounded-xl"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Telefon"
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed rounded-xl"
          />

          <select
            name="service"
            required
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed rounded-xl"
          >
            <option value="">Leistung auswählen</option>
            <option>Sanierung</option>
            <option>Renovierung</option>
            <option>Trockenbau</option>
            <option>Malerarbeiten</option>
            <option>Bodenverlegung</option>
            <option>Innenausbau</option>
            <option>Elektrikarbeiten</option>
            <option>Sonstiges</option>
          </select>

          <textarea
            name="message"
            placeholder="Nachricht"
            required
            style={{ resize: "none" }}
            className="w-full border border-brandBorder p-4 h-36 outline-none focus:border-brandRed rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-brandRed hover:bg-brandDarkRed text-white py-4 font-bold uppercase transition rounded-xl"
          >
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
