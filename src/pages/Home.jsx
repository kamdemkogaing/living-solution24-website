import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import References from "../components/sections/References";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/floating/WhatsAppButton";
import CookieBanner from "../components/ui/CookieBanner";

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
      <CookieBanner />
    </>
  );
}
