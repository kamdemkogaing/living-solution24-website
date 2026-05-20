import { useMemo, useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filteredReferences = useMemo(() => {
    if (activeFilter === "Alle") {
      return references;
    }

    return references.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="referenzen" className="section-padding bg-brandGray">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Titel */}
        <div className="text-center mb-10">
          <p className="text-brandRed font-black uppercase text-sm">
            Referenzen
          </p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mt-3">
            Unsere aktuellen Projekte
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-4 text-xs md:text-sm font-black uppercase transition duration-300 border
              
              ${
                activeFilter === filter
                  ? "bg-brandRed text-white border-brandRed shadow-lg"
                  : "bg-white text-brandBlack border-gray-200 hover:bg-brandBlack hover:text-white"
              }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Referenzen */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReferences.map((item) => (
            <ReferenceCard key={item.title} {...item} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-xs transition"
          >
            Uns kontaktieren <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
