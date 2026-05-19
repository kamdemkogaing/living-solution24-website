import { CheckCircle } from "lucide-react";

const points = [
  "Persönliche Beratung",
  "Feste Ansprechpartner",
  "Faire Preise",
  "Saubere & termingerechte Ausführung",
];

export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/about-team.jpg"
            alt="Living Solution 24 Team"
            className="w-full h-[420px] object-cover shadow-soft"
          />
        </div>

        <div>
          <p className="text-brandRed font-black uppercase text-sm">
            Über uns
          </p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mt-3 mb-6">
            Warum Living Solution 24?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Wir sind Ihr zuverlässiger Partner für Bau, Sanierung und
            Renovierung. Mit Leidenschaft, Erfahrung und einem starken Team
            setzen wir Ihre Projekte professionell um.
          </p>

          <div className="space-y-3 mb-8">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle className="text-brandRed" size={20} />
                <span className="font-semibold">{point}</span>
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="inline-flex bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-sm transition"
          >
            Mehr über uns
          </a>
        </div>
      </div>
    </section>
  );
}