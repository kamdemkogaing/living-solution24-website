export default function ServiceCard({ title, text, icon: Icon }) {
  return (
    <div className="group bg-white border border-brandBorder p-8 text-center hover:shadow-soft transition duration-300">
      <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-brandGray flex items-center justify-center group-hover:bg-brandRed transition">
        <Icon size={32} className="text-brandBlack group-hover:text-white transition" />
      </div>

      <h3 className="text-lg font-black uppercase mb-3">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>

      <div className="w-10 h-1 bg-brandRed mx-auto mt-5"></div>
    </div>
  );
}