import { Mail, MapPin, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [modal, setModal] = useState(null);

  const closeModal = () => setModal(null);

  return (
    <>
      <footer className="bg-[#080808] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <div>
            <h3 className="font-black uppercase mb-5 text-lg">Kontakt</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <a
                href="tel:+4917664691587"
                className="flex items-center gap-3 hover:text-brandRed transition"
              >
                <Phone size={18} className="text-brandRed shrink-0" />
                +49 176 646 91 587
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

              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-brandRed shrink-0" />
                Deutschland
              </p>
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
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/4917664691587"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition duration-300"
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandRed hover:border-brandRed transition duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
              Folgen Sie Living Solution 24 auf Social Media und sehen Sie
              unsere neuesten Projekte und Baustellen.
            </p>
          </div>
        </div>

        <div className="border-t border-brandRed/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p>© 2024 Living Solution 24 – Alle Rechte vorbehalten.</p>

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
          <div className="relative bg-white text-brandBlack max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 shadow-2xl">
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
                      Living Solution 24
                      <br />
                      Inhaber: Christian Monthe
                      <br />
                      Straße und Hausnummer
                      <br />
                      PLZ Ort
                      <br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Kontakt</h3>
                    <p>
                      Telefon: +49 176 646 91 587
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
                      Straße und Hausnummer
                      <br />
                      PLZ Ort
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
                      DEXXXXXXXXX
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Haftung für Inhalte
                    </h3>
                    <p>
                      Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                      Seiten nach den allgemeinen Gesetzen verantwortlich. Wir
                      sind jedoch nicht verpflichtet, übermittelte oder
                      gespeicherte fremde Informationen zu überwachen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Haftung für Links
                    </h3>
                    <p>
                      Unser Angebot enthält Links zu externen Webseiten Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      übernehmen wir für diese fremden Inhalte keine Gewähr.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Urheberrecht</h3>
                    <p>
                      Die durch den Seitenbetreiber erstellten Inhalte und Werke
                      auf dieser Webseite unterliegen dem deutschen
                      Urheberrecht. Beiträge Dritter sind als solche
                      gekennzeichnet.
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 pt-4">
                    Hinweis: Bitte Adresse, Rechtsform, Umsatzsteuer-ID und
                    weitere Pflichtangaben vor Veröffentlichung durch echte
                    Firmendaten ersetzen.
                  </p>
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
                      Living Solution 24
                      <br />
                      Inhaber: Christian Monthe
                      <br />
                      Straße und Hausnummer
                      <br />
                      PLZ Ort
                      <br />
                      Deutschland
                      <br />
                      E-Mail: info@living-solution24.de
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      3. Erhebung und Verarbeitung personenbezogener Daten
                    </h3>
                    <p>
                      Wenn Sie uns über das Kontaktformular kontaktieren, werden
                      die von Ihnen eingegebenen Daten wie Name, E-Mail-Adresse,
                      Telefonnummer, ausgewählte Leistung und Nachricht
                      verarbeitet, um Ihre Anfrage zu beantworten.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      4. Rechtsgrundlage
                    </h3>
                    <p>
                      Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                      Erfüllung eines Vertrags oder vorvertraglichen Maßnahmen
                      zusammenhängt. In allen übrigen Fällen erfolgt die
                      Verarbeitung auf Grundlage unseres berechtigten Interesses
                      gemäß Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Speicherdauer</h3>
                    <p>
                      Ihre Daten bleiben bei uns, bis der Zweck der
                      Datenverarbeitung entfällt oder Sie uns zur Löschung
                      auffordern, sofern keine gesetzlichen
                      Aufbewahrungspflichten entgegenstehen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      6. Weitergabe von Daten
                    </h3>
                    <p>
                      Eine Weitergabe Ihrer personenbezogenen Daten an Dritte
                      erfolgt nicht ohne Ihre Einwilligung, es sei denn, dies
                      ist zur Bearbeitung Ihrer Anfrage erforderlich oder wir
                      sind gesetzlich dazu verpflichtet.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">7. Ihre Rechte</h3>
                    <p>
                      Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                      Löschung, Einschränkung der Verarbeitung,
                      Datenübertragbarkeit sowie Widerspruch gegen die
                      Verarbeitung Ihrer personenbezogenen Daten.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      8. Server-Log-Dateien
                    </h3>
                    <p>
                      Beim Besuch dieser Webseite können durch den
                      Hostinganbieter automatisch Informationen wie IP-Adresse,
                      Browsertyp, Betriebssystem, Referrer-URL und Uhrzeit des
                      Zugriffs erfasst werden. Diese Daten dienen der
                      technischen Sicherheit und Stabilität der Webseite.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      9. Kontakt per E-Mail oder Telefon
                    </h3>
                    <p>
                      Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden
                      Ihre Angaben zur Bearbeitung der Anfrage und für mögliche
                      Anschlussfragen gespeichert.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      10. Cookies und externe Dienste
                    </h3>
                    <p>
                      Diese Webseite kann technisch notwendige Cookies
                      verwenden. Sollten externe Dienste wie Google Maps, Google
                      Analytics, YouTube, Instagram, Facebook oder andere
                      Dienste eingebunden werden, muss diese
                      Datenschutzerklärung entsprechend erweitert werden.
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 pt-4">
                    Hinweis: Diese Datenschutzerklärung ist eine Vorlage und
                    ersetzt keine rechtliche Prüfung. Bitte vor Veröffentlichung
                    mit echten Firmendaten und tatsächlich verwendeten Diensten
                    anpassen.
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
