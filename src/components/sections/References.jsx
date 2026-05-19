import { ArrowRight } from "lucide-react";
import { references } from "../../data/references";
import ReferenceCard from "../ui/ReferenceCard";

const filters = [
  "Alle",
  "Sanierung",
  "Renovierung",
  "Trockenbau",
  "Innenausbau",
  "Fassade",
];

export default function References() {
  return (
    <section id="referenzen" className="section-padding bg-brandGray">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <p className="text-brandRed font-black uppercase text-sm">
            Referenzen
          </p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mt-3">
            Unsere aktuellen Projekte
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-6 py-3 text-xs font-bold uppercase ${
                index === 0
                  ? "bg-brandRed text-white"
                  : "bg-white text-brandBlack"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {references.map((item) => (
            <ReferenceCard key={item.title} {...item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-xs transition"
          >
            Alle Projekte ansehen <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
