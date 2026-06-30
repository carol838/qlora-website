const whatsappUrl = 'https://wa.me/8613185999783'

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3.2A12.65 12.65 0 0 0 5.1 22.24L3.6 28.8l6.72-1.42A12.7 12.7 0 1 0 16.02 3.2Zm0 2.28a10.4 10.4 0 0 1 8.87 15.83 10.33 10.33 0 0 1-12.2 3.75l-.38-.16-3.95.84.88-3.83-.2-.4A10.37 10.37 0 0 1 16.02 5.48Zm-4.05 5.2c-.24 0-.62.09-.95.45-.33.37-1.25 1.23-1.25 3 0 1.76 1.28 3.46 1.46 3.7.18.24 2.48 3.96 6.1 5.39 3 .1 3.6-.9 4.04-1.7.35-.64.35-1.18.25-1.3-.1-.12-.36-.19-.76-.39-.4-.2-2.33-1.15-2.7-1.28-.36-.13-.62-.2-.88.2-.26.39-1 1.27-1.23 1.53-.23.26-.45.3-.85.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.05-1.98-2.35-2.2-2.75-.23-.39-.03-.6.17-.8.17-.17.4-.45.6-.68.2-.23.26-.39.4-.65.13-.26.06-.49-.03-.68-.1-.2-.88-2.12-1.2-2.9-.32-.75-.64-.65-.88-.66h-.75Z" />
    </svg>
  )
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with QLORA on WhatsApp"
      className="whatsapp-float fixed bottom-[18px] right-[18px] z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(37,211,102,0.38)] md:bottom-7 md:right-7 md:h-14 md:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
    </a>
  )
}

export { whatsappUrl }
