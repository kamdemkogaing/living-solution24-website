import { services } from "../../data/services";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p className="text-brandRed font-black uppercase text-sm">
            Unsere Leistungen
          </p>

          <h2 className="text-3xl md:text-5xl font-black uppercase mt-3">
            Wir bieten Ihnen <br className="hidden md:block" />
            Komplettlösungen
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#kontakt"
            className="inline-flex bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-sm transition"
          >
            Alle Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}