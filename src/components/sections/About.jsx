import { ArrowRight, CheckCircle } from "lucide-react";

const points = [
  "Persönliche Beratung",
  "Feste Ansprechpartner",
  "Faire Preise",
  "Saubere & termingerechte Ausführung",
];

export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Oberer Bereich */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Geschäftsführer */}
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/christian-monthe.webp"
                alt="Christian Monthe Geschäftsführer"
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8">
                <p className="text-brandRed uppercase font-bold text-sm">
                  Geschäftsführer
                </p>

                <h3 className="text-white text-3xl font-black">
                  Christian Monthe
                </h3>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-brandRed font-black uppercase text-sm">
              Über uns
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase mt-3 mb-8">
              Warum Living Solution 24?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Wir sind Ihr zuverlässiger Partner für Bau, Sanierung,
              Renovierung, Trockenbau, Elektrik und Innenausbau.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              Mit Leidenschaft, Erfahrung und einem starken Team begleiten wir
              unsere Kunden von der Planung bis zur erfolgreichen Umsetzung
              ihrer Projekte.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="text-brandRed shrink-0" size={22} />

                  <span className="font-semibold text-lg">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-sm transition rounded-xl"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Teamfoto volle Breite */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-brandRed font-black uppercase text-sm">
              Unser Team
            </p>

            <h3 className="text-3xl md:text-5xl font-black uppercase mt-3">
              Gemeinsam für Ihr Projekt
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/team-living-solution24.webp"
              alt="Living Solution 24 Team"
              className="w-full h-[650px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-brandRed uppercase font-bold">
                Living Solution 24
              </p>

              <h3 className="text-white text-3xl md:text-5xl font-black">
                Unser starkes Team
              </h3>

              <p className="text-white mt-3 max-w-2xl">
                Erfahrene Fachkräfte für Sanierung, Renovierung, Trockenbau,
                Elektrik und Innenausbau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
