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

  const renderContent = () => {
    if (Array.isArray(service.longText)) {
      return (
        <>
          {service.longText.map((paragraph, index) => {
            const isFirst = index === 0 && service.title === "Elektrikarbeiten";

            return isFirst ? (
              <h4
                key={index}
                className="text-xl md:text-2xl font-black text-brandBlack"
              >
                {paragraph}
              </h4>
            ) : (
              <p key={index}>{paragraph}</p>
            );
          })}

          {service.listTitle && (
            <h4 className="text-xl md:text-2xl font-black text-brandBlack pt-3">
              {service.listTitle}
            </h4>
          )}

          {service.listItems?.length > 0 && (
            <ul className="list-disc pl-6 space-y-2">
              {service.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {service.finalText && <p>{service.finalText}</p>}
        </>
      );
    }

    return (
      <p className="whitespace-pre-line">{service.longText || service.text}</p>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white text-brandBlack max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-brandBlack text-white flex items-center justify-center hover:bg-brandRed transition"
          aria-label="Modal schließen"
        >
          <X size={22} />
        </button>

        <div className="p-6 md:p-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 mb-8 pr-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-brandRed text-white flex items-center justify-center shrink-0">
                  <Icon size={32} />
                </div>

                <div>
                  <p className="text-brandRed font-black uppercase text-sm">
                    {service.upload ? "Projekt Upload" : "Unsere Leistung"}
                  </p>

                  <h3 className="text-xl md:text-3xl font-black uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {!service.upload && service.modalTitle && (
                <h4 className="text-brandRed text-lg md:text-xl font-black mb-5 leading-snug">
                  {service.modalTitle}
                </h4>
              )}

              <div className="text-gray-700 max-w-5xl leading-relaxed text-base md:text-lg space-y-5">
                {renderContent()}
              </div>
            </div>

            <a
              href="#kontakt"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-3 bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-xs transition rounded-xl h-fit lg:mt-10 shrink-0"
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
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
