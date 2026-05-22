import { ArrowRight, X } from "lucide-react";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white text-brandBlack max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-brandBlack text-white flex items-center justify-center hover:bg-brandRed transition"
          aria-label="Modal schließen"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-brandRed text-white flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <div>
                  <p className="text-brandRed font-black uppercase text-sm">
                    Unsere Leistung
                  </p>

                  <h3 className="text-xl md:text-5xl font-black uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 max-w-2xl leading-relaxed">
                {service.text} Hier sehen Sie ausgewählte Beispiele und
                Eindrücke unserer Arbeit.
              </p>
            </div>

            <a
              href="#kontakt"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-3 bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-xs transition rounded-xl"
            >
              Anfrage senden <ArrowRight size={16} />
            </a>
          </div>

          {service.images?.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.images.map((image, index) => (
                <div
                  key={image}
                  className={`group relative overflow-hidden rounded-2xl bg-brandGray ${
                    index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${service.title} Beispiel ${index + 1}`}
                    loading="lazy"
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute bottom-5 left-5 right-5 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <p className="text-sm font-bold uppercase text-brandRed">
                      {service.title}
                    </p>
                    <h4 className="text-xl font-black">
                      Projektbild {index + 1}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-brandGray p-8 rounded-2xl text-center">
              <p className="font-semibold text-gray-600">
                Für diese Leistung sind aktuell noch keine Bilder hinterlegt.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
