import { useState } from "react";
import { services } from "../../data/services";
import ServiceCard from "../ui/ServiceCard";
import ServiceModal from "../ui/ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="leistungen" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p className="text-brandRed font-black uppercase text-sm">
              Unsere Leistungen
            </p>

            <h2 className="text-2xl md:text-4xl font-black uppercase mt-3 leading-tight">
              Hier sehen Sie ausgewählte Beispiele
              <br className="hidden md:block" />
              und Eindrücke unserer Arbeit
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Wählen Sie eine Leistung aus und sehen Sie passende Projektbilder
              als moderne Galerie.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                text={service.shortText || service.text}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
