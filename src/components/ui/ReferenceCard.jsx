export default function ReferenceCard({ title, category, image }) {
  return (
    <article className="relative overflow-hidden group h-72 shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute bottom-0 left-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition">
        <p className="text-brandRed font-bold uppercase text-sm">
          {category}
        </p>
        <h3 className="text-xl font-black">{title}</h3>
      </div>
    </article>
  );
}