import { ArrowRight, Images } from "lucide-react";
import { useMemo, useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filteredReferences = useMemo(() => {
    if (activeFilter === "Alle") return references;
    return references.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="referenzen"
      className="relative section-padding bg-[#f4f4f4] overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brandRed/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 shadow-sm mb-5">
            <Images size={18} className="text-brandRed" />
            <span className="text-brandRed font-black uppercase text-sm">
              Referenzen
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black uppercase leading-tight">
            Unsere aktuellen Projekte
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Ein Einblick in unsere Arbeit: Sanierung, Renovierung, Innenausbau,
            Fassadenarbeiten und moderne Komplettlösungen.
          </p>
        </div>

        <div className="sticky top-24 z-20 mb-12">
          <div className="mx-auto max-w-5xl bg-white/90 backdrop-blur-xl border border-white shadow-soft p-2 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 text-xs md:text-sm font-black uppercase transition duration-300 ${
                  activeFilter === filter
                    ? "bg-brandRed text-white shadow-md"
                    : "text-brandBlack hover:bg-brandBlack hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredReferences.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReferences.map((item) => (
              <ReferenceCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 text-center shadow-soft">
            <p className="font-bold text-gray-600">
              Für diese Kategorie sind aktuell keine Referenzen vorhanden.
            </p>
          </div>
        )}

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-brandBlack text-white p-6 md:p-8 shadow-soft">
          <div>
            {/* <p className="text-brandRed font-black uppercase text-sm">
              Ihr Projekt ist das nächste?
            </p> */}
            <h3 className="text-2xl md:text-3xl font-black uppercase mt-2">
              Jetzt kostenlose Anfrage senden
            </h3>
          </div>

          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-xs transition rounded-xl"
          >
            Uns kontaktieren <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
