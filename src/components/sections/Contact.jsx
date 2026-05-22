import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

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

          <div className="space-y-5">
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
              +491726432778
            </a>

            <p className="flex items-center gap-3">
              <MapPin className="text-brandRed shrink-0" />
              Deutschland
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-brandBlack p-6 md:p-10 shadow-soft space-y-4"
        >
          {successMessage && (
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-700 p-4">
              <CheckCircle className="shrink-0 mt-0.5" size={22} />
              <p className="text-sm font-semibold">{successMessage}</p>
            </div>
          )}

          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          />

          <input
            name="email"
            type="email"
            placeholder="E-Mail"
            required
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Telefon"
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          />

          <select
            name="service"
            required
            className="w-full border border-brandBorder p-4 outline-none focus:border-brandRed"
          >
            <option value="">Leistung auswählen</option>
            <option>Sanierung</option>
            <option>Renovierung</option>
            <option>Trockenbau</option>
            <option>Malerarbeiten</option>
            <option>Bodenverlegung</option>
            <option>Innenausbau</option>
            <option>Sonstiges</option>
          </select>

          <textarea
            name="message"
            placeholder="Nachricht"
            required
            style={{ resize: "none" }}
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
