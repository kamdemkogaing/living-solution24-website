import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("livingSolutionCookieConsent");

    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("livingSolutionCookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("livingSolutionCookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-brandBlack text-white border-t border-brandRed/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-brandRed flex items-center justify-center shrink-0">
            <Cookie size={24} />
          </div>

          <div>
            <h3 className="font-black uppercase text-lg mb-2">
              Cookie-Hinweis
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
              Diese Website verwendet technisch notwendige Cookies, um die
              Funktionalität der Seite sicherzustellen. Mit „Akzeptieren“
              stimmen Sie der Verwendung zu. Weitere Informationen finden Sie in
              unserer Datenschutzerklärung.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button
            type="button"
            onClick={declineCookies}
            className="border border-white/30 text-white px-6 py-3 font-bold uppercase text-sm hover:bg-white hover:text-brandBlack transition"
          >
            Ablehnen
          </button>

          <button
            type="button"
            onClick={acceptCookies}
            className="bg-brandRed hover:bg-brandDarkRed text-white px-6 py-3 font-bold uppercase text-sm transition"
          >
            Akzeptieren
          </button>

          <button
            type="button"
            onClick={declineCookies}
            className="hidden lg:flex w-11 h-11 border border-white/20 items-center justify-center hover:bg-brandRed transition"
            aria-label="Cookie Banner schließen"
          >
            <X size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
