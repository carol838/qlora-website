export default function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-12 sm:py-12">
      <div className="shell flex flex-col gap-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-semibold tracking-[0.22em]">QLORA</p>
          <p className="mt-2 text-xs text-ink/50">Better Water for Everyday Life</p>
          <div className="mt-4 flex flex-col gap-1 text-xs text-ink/55 sm:flex-row sm:gap-4">
            <a href="mailto:sales@qloratech.com" className="transition hover:text-ink">sales@qloratech.com</a>
          </div>
        </div>

        <p className="text-xs text-ink/45">&copy; 2026 QLORA</p>
      </div>
    </footer>
  )
}
