import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4917664691587"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle size={32} />
    </a>
  );
}
