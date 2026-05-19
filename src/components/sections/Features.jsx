import { features } from "../../data/features";

export default function Features() {
  return (
    <section className="bg-brandBlack text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="flex items-center gap-4 py-8 lg:p-10 border-b sm:border-r sm:border-b-0 border-white/15 last:border-r-0"
          >
            <div className="w-16 h-16 bg-brandRed rounded-full flex items-center justify-center shrink-0">
              <Icon size={30} />
            </div>

            <div>
              <h3 className="font-bold uppercase">{title}</h3>
              <p className="text-sm text-gray-300">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
