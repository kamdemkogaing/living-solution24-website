import { ArrowUpRight, MapPin } from "lucide-react";

export default function ReferenceCard({
  title,
  category,
  image,
  location,
  featured,
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-brandBlack shadow-soft ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative h-[320px] md:h-[380px]">
        <img
          src={image}
          alt={`${title} - ${category} von living-solution24`}
          loading="lazy"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-brandRed/0 group-hover:bg-brandRed/10 transition duration-500" />

        <div className="absolute top-5 left-5">
          <span className="bg-brandRed text-white px-4 py-2 text-xs font-black uppercase tracking-wide">
            {category}
          </span>
        </div>

        <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition duration-500">
          <ArrowUpRight size={22} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {location && (
            <p className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <MapPin size={16} className="text-brandRed" />
              {location}
            </p>
          )}

          <h3 className="text-white text-2xl font-black leading-tight">
            {title}
          </h3>

          <div className="w-12 h-1 bg-brandRed mt-4 transition-all duration-500 group-hover:w-24" />
        </div>
      </div>
    </article>
  );
}
