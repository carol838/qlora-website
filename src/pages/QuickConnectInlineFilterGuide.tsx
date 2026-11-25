import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import guide from '../data/quickConnectInlineFilterGuide.json'
import { absoluteUrl, applySEO } from '../lib/seo'

const canonicalUrl = absoluteUrl(guide.path)
const socialImage = absoluteUrl(guide.images[0].src)
const shortTitle = 'Quick-Connect Inline Water Filters Guide'
const linkClass = 'font-medium text-nordic underline underline-offset-4'
const headingClass = 'text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink md:text-4xl'

function articleText(text: string) {
  return text.split('**').map((part, index) =>
    index % 2 === 0 ? part : <strong key={index} className="font-semibold text-ink">{part}</strong>,
  )
}

function ProductComparison() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {guide.images.map((image) => (
          <figure key={image.src} className="min-w-0 rounded-2xl border border-line bg-white p-3 sm:p-5">
            <img src={image.src} alt={image.alt} className="aspect-square w-full object-contain" loading="lazy" decoding="async" />
            <figcaption className="mt-3 text-center text-sm leading-5">
              <a href={image.href} className={linkClass}>{image.label}</a>
              <span className="mt-1 block">{image.length}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl border border-line bg-white/70">
        <table className="w-full table-fixed text-left text-xs leading-5 sm:text-sm">
          <thead className="border-b border-line bg-mist text-ink">
            <tr>{guide.comparison.headers.map((header) => <th key={header} scope="col" className="break-words p-2.5 sm:p-4">{header}</th>)}</tr>
          </thead>
          <tbody>
            {guide.comparison.rows.map(([label, iShape, uShape]) => (
              <tr key={label} className="border-b border-line last:border-0">
                <th scope="row" className="break-words p-2.5 align-top font-medium text-ink sm:p-4">{label}</th>
                <td className="break-words p-2.5 align-top sm:p-4">{iShape}</td>
                <td className="break-words p-2.5 align-top sm:p-4">{uShape}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {guide.comparison.notes.map((note) => <p key={note}>{articleText(note)}</p>)}
    </>
  )
}

export default function QuickConnectInlineFilterGuide() {
  useEffect(() => {
    applySEO({
      title: guide.title,
      description: guide.description,
      path: guide.path,
      canonicalUrl,
      image: socialImage,
      type: 'article',
      breadcrumbs: [
        { name: 'Technical Knowledge', path: '/technical-knowledge' },
        { name: shortTitle, path: guide.path },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.headline,
        description: guide.description,
        image: socialImage,
        author: { '@type': 'Organization', name: 'QLORA' },
        publisher: { '@type': 'Organization', name: 'QLORA' },
        mainEntityOfPage: canonicalUrl,
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        <article>
          <section className="shell py-14 md:py-20">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink/45" aria-label="Breadcrumb">
              <a href="/" className="hover:text-ink">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/technical-knowledge" className="hover:text-ink">Technical Knowledge</a>
              <span aria-hidden="true">/</span>
              <span className="text-ink/70" aria-current="page">{shortTitle}</span>
            </nav>
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">Inline filtration guide</p>
              <h1 className="mt-6 text-[clamp(2.5rem,5.4vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-ink">{guide.headline}</h1>
            </div>
          </section>
          <div className="shell pb-16 md:pb-24">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-5 text-base leading-8 text-ink/68 md:text-lg md:leading-9">
                {guide.intro.map((paragraph) => <p key={paragraph}>{articleText(paragraph)}</p>)}
              </div>
              <nav className="mt-10 rounded-2xl border border-line bg-mist p-5 sm:p-7" aria-labelledby="guide-contents">
                <h2 id="guide-contents" className="text-lg font-semibold text-ink">On this page</h2>
                <ul className="mt-3 space-y-2 text-sm leading-6">
                  {guide.sections.map(({ id, title }) => <li key={id}><a className={linkClass} href={`#${id}`}>{title}</a></li>)}
                  <li><a className={linkClass} href="#faq">Frequently asked questions</a></li>
                </ul>
              </nav>
              {guide.sections.map(({ id, title, body }) => (
                <section key={id} id={id} className="mt-14 scroll-mt-28">
                  <h2 className={headingClass}>{title}</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-ink/68 md:text-lg md:leading-9">
                    {body.map((block) => {
                      if (typeof block === 'string') return <p key={block}>{articleText(block)}</p>
                      if ('items' in block && block.items) return <ul key={block.items[0]} className="list-disc space-y-2 pl-6">{block.items.map((item) => <li key={item}>{articleText(item)}</li>)}</ul>
                      if (block.major || (id !== 'i-shape' && id !== 'u-shape')) return <h3 key={block.heading} className="text-xl font-semibold text-ink">{block.heading}</h3>
                      return <h4 key={block.heading} className="font-semibold text-ink">{block.heading}</h4>
                    })}
                    {id === 'comparison' && <ProductComparison />}
                    {id === 'oem' && <p><a className={linkClass} href="/oem-private-label">Explore OEM and private-label support</a></p>}
                    {id === 'why-qlora' && <p><a className={linkClass} href="/water-filtration">Browse replacement water filters</a></p>}
                    {id === 'sourcing' && (
                      <>
                        <p>Website: <a className={linkClass} href="/">https://www.qloratech.com</a></p>
                        <a className="button-primary inline-flex" href="/contact">Contact QLORA</a>
                      </>
                    )}
                  </div>
                </section>
              ))}
              <section id="faq" className="mt-14 scroll-mt-28">
                <h2 className={headingClass}>Frequently Asked Questions</h2>
                <div className="mt-6 space-y-4">
                  {guide.faq.map(({ question, answer }) => (
                    <details key={question} className="rounded-2xl border border-line bg-white/70 p-5">
                      <summary className="cursor-pointer font-semibold text-ink">{question}</summary>
                      <p className="mt-3 leading-7 text-ink/68">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
