export const AQUATECH_CHINA_2026_ENABLED = true

const meetingSubject = 'Aquatech China 2026 Meeting Request'
const meetingMessage = 'I would like to schedule a meeting with QLORA during Aquatech China 2026 at Booth E6B46. Please contact me to discuss available meeting times.'
const factoryVisitSubject = 'Aquatech China 2026 Factory Visit Request'
const factoryVisitMessage = 'I plan to visit Aquatech China 2026 and would like to discuss arranging a factory visit by appointment. Please contact me regarding availability and visit details.'

function contactHref(subject: string, message: string) {
  return `/contact?subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}#inquiry-form`
}

const meetingHref = contactHref(meetingSubject, meetingMessage)
const factoryVisitHref = contactHref(factoryVisitSubject, factoryVisitMessage)

export function AquatechAnnouncementBanner() {
  return (
    <section aria-labelledby="aquatech-announcement-heading" className="border-y border-nordic/15 bg-nordic text-white">
      <div className="shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
          <h2 id="aquatech-announcement-heading" className="text-sm font-semibold tracking-tight sm:text-base">Meet QLORA at Aquatech China 2026</h2>
          <p className="text-xs font-medium tracking-[0.08em] text-white/75 sm:border-l sm:border-white/25 sm:pl-5 sm:text-sm">October 28–30, 2026 <span aria-hidden="true">|</span> Shanghai <span aria-hidden="true">|</span> Booth E6B46</p>
        </div>
        <a href={meetingHref} className="inline-flex min-h-10 shrink-0 items-center justify-center self-start rounded-full bg-white px-5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-mist focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-nordic sm:self-auto">
          Schedule a Meeting
        </a>
      </div>
    </section>
  )
}

export function AquatechMeetingSection() {
  return (
    <section aria-labelledby="aquatech-meeting-heading" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[2rem] border border-line bg-white/65 p-7 shadow-soft sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-4">
          <p className="eyebrow">Aquatech China 2026</p>
          <h2 id="aquatech-meeting-heading" className="headline mt-5">Let&apos;s Meet in Shanghai</h2>
          <p className="mt-5 text-sm font-medium leading-6 text-nordic">October 28–30, 2026 · Shanghai · Meeting location: Booth E6B46</p>
        </div>
        <div className="lg:col-span-8">
          <p className="body-copy max-w-3xl">Visiting Aquatech China 2026? Connect with QLORA to explore water filtration solutions, upcoming RO products and OEM cooperation opportunities. Meetings can be arranged at Booth E6B46, and factory visits may be scheduled by appointment.</p>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-ink/75">Visiting the Canton Fair or Aquatech China this October? Contact QLORA to arrange a meeting or factory visit.</p>
          <p className="mt-2 text-xs leading-5 text-ink/50">Canton Fair dates: October 15–November 4, 2026.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={meetingHref} className="button-primary">Book a Meeting</a>
            <a href={factoryVisitHref} className="button-secondary">Arrange a Factory Visit</a>
          </div>
        </div>
      </div>
    </section>
  )
}
