import WhatsAppButton from "../components/floating/WhatsAppButton";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import References from "../components/sections/References";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <References />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
