import { Mail, MapPin, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [modal, setModal] = useState(null);

  const closeModal = () => setModal(null);

  const karlsruheMap =
    "https://www.google.com/maps/search/?api=1&query=Erzbergerstr+94+76133+Karlsruhe";
  const pforzheimMap =
    "https://www.google.com/maps/search/?api=1&query=Bleichstr+46+75173+Pforzheim";

  return (
    <>
      <footer className="bg-[#080808] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/images/logo_CM.webp"
              alt="living-solution24"
              className="mb-6"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              living-solution24 steht für professionelle Bau-, Sanierungs- und
              Renovierungsarbeiten mit Qualität, Zuverlässigkeit und modernen
              Lösungen aus einer Hand.
            </p>
          </div>

          <div>
            <h3 className="font-black uppercase mb-5 text-lg">Kontakt</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <a
                href="tel:+491726432778"
                className="flex items-center gap-3 hover:text-brandRed transition"
              >
                <Phone size={18} className="text-brandRed shrink-0" />
                +49 172 643 2778
              </a>

              <a
                href="mailto:info@living-solution24.de"
                className="flex items-center gap-3 break-all hover:text-brandRed transition"
              >
                <Mail size={18} className="text-brandRed shrink-0" />
                info@living-solution24.de
              </a>

              <a
                href="mailto:rechnung@living-solution24.de"
                className="flex items-center gap-3 break-all hover:text-brandRed transition"
              >
                <Mail size={18} className="text-brandRed shrink-0" />
                rechnung@living-solution24.de
              </a>

              <a
                href="mailto:christianmonthe@living-solution24.de"
                className="flex items-center gap-3 break-all hover:text-brandRed transition"
              >
                <Mail size={18} className="text-brandRed shrink-0" />
                christianmonthe@living-solution24.de
              </a>

              <a
                href={karlsruheMap}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-brandRed transition"
              >
                <MapPin size={18} className="text-brandRed shrink-0 mt-0.5" />
                <span>
                  Karlsruhe
                  <br />
                  Erzbergerstr. 94
                  <br />
                  76133 Karlsruhe
                </span>
              </a>

              <a
                href={pforzheimMap}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-brandRed transition"
              >
                <MapPin size={18} className="text-brandRed shrink-0 mt-0.5" />
                <span>
                  Pforzheim
                  <br />
                  Bleichstr. 46
                  <br />
                  75173 Pforzheim
                </span>
              </a>
            </div>
          </div>

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

              <button
                type="button"
                onClick={() => setModal("impressum")}
                className="text-left hover:text-brandRed transition"
              >
                Impressum
              </button>

              <button
                type="button"
                onClick={() => setModal("datenschutz")}
                className="text-left hover:text-brandRed transition"
              >
                Datenschutz
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-black uppercase mb-5 text-lg">Folge uns</h3>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/share/1GsJZ2x5br/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/livingsolution24?igsh=MzFqZ2pwbmc4bW5n&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/491726432778"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition duration-300"
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href="https://www.tiktok.com/@living.solution24?_r=1&_t=ZG-96W3AbOfVjd"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://youtube.com/@livingsolution24?si=4wJ7jQOarGUBuNl3"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/christian-monthe-298b73317/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
              Folgen Sie living-solution24 auf Social Media und sehen Sie
              unsere neuesten Projekte und Baustellen.
            </p>
          </div>
        </div>

        <div className="border-t border-brandRed/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p>© 2024 living-solution24 – Alle Rechte vorbehalten.</p>

            <div className="flex gap-5">
              <button
                type="button"
                onClick={() => setModal("impressum")}
                className="hover:text-brandRed transition"
              >
                Impressum
              </button>

              <button
                type="button"
                onClick={() => setModal("datenschutz")}
                className="hover:text-brandRed transition"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {modal && (
        <div className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center px-4">
          <div className="relative bg-white text-brandBlack max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 shadow-2xl rounded-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-brandRed transition"
              aria-label="Modal schließen"
            >
              <X size={28} />
            </button>

            {modal === "impressum" && (
              <div>
                <h2 className="text-xl font-black uppercase mb-6">Impressum</h2>

                <div className="space-y-5 text-sm md:text-base leading-relaxed">
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Angaben gemäß § 5 TMG
                    </h3>
                    <p>
                      living-solution24
                      <br />
                      Inhaber: Christian Monthe
                      <br />
                      Erzbergerstr. 94
                      <br />
                      76133 Karlsruhe
                      <br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Weitere Adresse</h3>
                    <p>
                      Bleichstr. 46
                      <br />
                      75173 Pforzheim
                      <br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Kontakt</h3>
                    <p>
                      Telefon: +49 172 643 2778
                      <br />
                      E-Mail: info@living-solution24.de
                      <br />
                      E-Mail Rechnungen: rechnung@living-solution24.de
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Verantwortlich für den Inhalt
                    </h3>
                    <p>
                      Christian Monthe
                      <br />
                      Erzbergerstr. 94
                      <br />
                      76133 Karlsruhe
                      <br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Umsatzsteuer-ID</h3>
                    <p>
                      Umsatzsteuer-Identifikationsnummer gemäß § 27a
                      Umsatzsteuergesetz:
                      <br />
                      DE369733400
                      <br />
                      Steuernummer: 35126/01256
                    </p>
                  </div>
                </div>
              </div>
            )}

            {modal === "datenschutz" && (
              <div>
                <h2 className="text-xl font-black uppercase mb-6">
                  Datenschutzerklärung
                </h2>

                <div className="space-y-5 text-sm md:text-base leading-relaxed">
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      1. Datenschutz auf einen Blick
                    </h3>
                    <p>
                      Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir
                      behandeln Ihre personenbezogenen Daten vertraulich und
                      entsprechend den gesetzlichen Datenschutzvorschriften.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      2. Verantwortliche Stelle
                    </h3>
                    <p>
                      living-solution24
                      <br />
                      Inhaber: Christian Monthe
                      <br />
                      Erzbergerstr. 94
                      <br />
                      76133 Karlsruhe
                      <br />
                      Deutschland
                      <br />
                      E-Mail: info@living-solution24.de
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      3. Google Maps / externe Links
                    </h3>
                    <p>
                      Im Footer werden Google-Maps-Links zu unseren Standorten
                      bereitgestellt. Beim Anklicken verlassen Sie unsere
                      Webseite und es gelten die Datenschutzbestimmungen von
                      Google.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      4. Kontaktformular
                    </h3>
                    <p>
                      Wenn Sie uns über das Kontaktformular kontaktieren, werden
                      die eingegebenen Daten zur Bearbeitung Ihrer Anfrage
                      verarbeitet.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      5. Social Media Links
                    </h3>
                    <p>
                      Diese Webseite enthält Links zu Facebook, Instagram,
                      WhatsApp, TikTok, YouTube und LinkedIn. Beim Anklicken
                      dieser Links gelten die Datenschutzrichtlinien der
                      jeweiligen Anbieter.
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 pt-4">
                    Hinweis: Diese Datenschutzerklärung ist eine Vorlage und
                    ersetzt keine rechtliche Prüfung.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}