import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative h-[70vh] md:h-[65vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.45), rgba(0,0,0,0.15)), url('/images/hero-baustelle-v2.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[3.5rem] font-black uppercase leading-tight">
            Bau, Sanierung & <span className="text-brandRed">Renovierung</span>{" "}
            aus einer Hand
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 max-w-xl">
            living-solution24 steht für Qualität, Zuverlässigkeit und perfekte
            Ergebnisse bei Bau, Sanierung und Renovierung.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="bg-brandRed hover:bg-brandDarkRed text-white px-8 py-4 font-bold uppercase text-sm flex items-center justify-center gap-3 transition rounded-xl"
            >
              Angebot anfragen <ArrowRight size={18} />
            </a>

            <a
              href="#leistungen"
              className="border border-white text-white px-8 py-4 font-bold uppercase text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-black transition rounded-xl"
            >
              Mehr erfahren <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
