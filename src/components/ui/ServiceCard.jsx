import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, text, icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-white border border-brandBorder p-8 text-center hover:shadow-soft transition duration-300 rounded-2xl relative overflow-hidden"
    >
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brandGray flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <ArrowUpRight size={18} className="text-brandRed" />
      </div>

      <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-brandGray flex items-center justify-center group-hover:bg-brandRed transition">
        <Icon
          size={32}
          className="text-brandBlack group-hover:text-white transition"
        />
      </div>

      <h3 className="text-base font-black uppercase mb-3">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>

      <div className="w-10 h-1 bg-brandRed mx-auto mt-5 group-hover:w-20 transition-all" />

      <p className="text-xs font-bold uppercase text-brandRed mt-5 opacity-0 group-hover:opacity-100 transition">
        Bilder ansehen
      </p>
    </button>
  );
}
