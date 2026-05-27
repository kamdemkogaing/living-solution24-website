import { ArrowRight, ImagePlus, UploadCloud, X } from "lucide-react";
import { useState } from "react";

export default function ServiceModal({ service, onClose }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!service) return null;

  const Icon = service.icon;

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white text-brandBlack max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-brandBlack text-white flex items-center justify-center hover:bg-brandRed transition"
          aria-label="Modal schließen"
        >
          <X size={22} />
        </button>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-brandRed text-white flex items-center justify-center shrink-0">
                  <Icon size={32} />
                </div>

                <div>
                  <p className="text-brandRed font-black uppercase text-sm">
                    {service.upload ? "Projekt Upload" : "Unsere Leistung"}
                  </p>

                  <h3 className="text-xl md:text-5xl font-black uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 max-w-2xl leading-relaxed">
                {service.text}
                {!service.upload &&
                  " Hier sehen Sie ausgewählte Beispiele und Eindrücke unserer Arbeit."}
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

          {service.upload && (
            <div className="mb-10 border-2 border-dashed border-brandRed/40 rounded-3xl p-6 md:p-10 bg-brandGray text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-brandRed text-white flex items-center justify-center mx-auto mb-6">
                  <UploadCloud size={38} />
                </div>

                <h4 className="text-2xl md:text-3xl font-black uppercase mb-3">
                  Baustellenbilder hinzufügen
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wählen Sie Bilder Ihrer Baustelle oder Ihres Projekts aus.
                  Aktuell werden die Bilder nur lokal angezeigt.
                </p>

                <label className="cursor-pointer block">
                  <input
                    type="file"
                    multiple
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <div className="bg-white border border-brandBorder rounded-2xl p-8 md:p-10 hover:border-brandRed hover:shadow-soft transition">
                    <ImagePlus
                      size={42}
                      className="mx-auto mb-4 text-brandRed"
                    />

                    <p className="font-black uppercase mb-2">
                      Bilder auswählen
                    </p>

                    <p className="text-sm text-gray-500">
                      JPG, PNG oder WEBP Dateien möglich
                    </p>
                  </div>
                </label>

                {selectedFiles.length > 0 && (
                  <div className="mt-6 bg-white rounded-2xl p-5 text-left">
                    <p className="font-black uppercase mb-3">
                      Ausgewählte Dateien:
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600">
                      {selectedFiles.map((file) => (
                        <li key={file.name}>• {file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

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
          ) : !service.upload ? (
            <div className="bg-brandGray p-8 rounded-2xl text-center">
              <p className="font-semibold text-gray-600">
                Für diese Leistung sind aktuell noch keine Bilder hinterlegt.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
