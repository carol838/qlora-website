import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { applySEO } from '../lib/seo'

type SeriesProduct = {
  name: string
  models: string
  description: string
  image?: { src: string; alt: string }
}

type CompatibilityPageData = {
  path: string
  title: string
  subtitle: string
  heroImage?: { src: string; alt: string }
  oemImage?: { src: string; alt: string }
  seoTitle: string
  seoDescription: string
  seriesTitle: string
  series: SeriesProduct[]
  guideSubtitle: string
  guideColumns: [string, string, string, string]
  guideRows: Array<[string, string, string, string]>
  guideCta: string
  featuresTitle: string
  features: Array<[string, string]>
  oemContent: string
  oemBullets: string[]
  qualityItems: string[]
  faqs: Array<[string, string]>
  disclaimer: string
  relatedLinks: Array<{ title: string; href: string }>
}

function VisualFallback({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-white via-[#f5f3ee] to-[#e8e3d8] p-8 text-center shadow-soft">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/35">{label}</span>
    </div>
  )
}

function ProductVisual({ image, label }: { image?: { src: string; alt: string }; label: string }) {
  if (!image) return <VisualFallback label={label} />
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft sm:p-6">
      <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full rounded-[1.5rem] object-contain" loading="lazy" />
    </div>
  )
}

export default function CompatibilitySolutionPage({ data }: { data: CompatibilityPageData }) {
  useEffect(() => {
    applySEO({
      title: data.seoTitle,
      description: data.seoDescription,
      path: data.path,
      image: data.heroImage?.src ? `https://qloratech.com${data.heroImage.src}` : undefined,
      breadcrumbs: [
        { name: 'Water Filtration', path: '/water-filtration' },
        { name: data.title, path: data.path },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: data.seriesTitle,
        itemListElement: data.series.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
        })),
      }],
    })
  }, [data])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[620px] items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-6">
              <ProductVisual image={data.heroImage} label="Compatible filter visual" />
            </div>
            <div className="lg:col-span-6">
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/45" aria-label="Breadcrumb">
                <a href="/" className="transition hover:text-ink">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/water-filtration" className="transition hover:text-ink">Water Filtration</a>
                <span aria-hidden="true">/</span>
                <a href={data.path} className="text-ink/70 transition hover:text-ink">{data.title}</a>
              </nav>
              <p className="eyebrow">Compatible replacement filters</p>
              <h1 className="display mt-6 max-w-2xl">{data.title}</h1>
              <p className="body-copy mt-7 max-w-xl">{data.subtitle}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="button-primary">Request Quote</a>
                <a href="/oem-private-label" className="button-secondary">OEM Service</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Compatible product series</p>
              <h2 className="headline mt-5">{data.seriesTitle}</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {data.series.map(item => (
                <article key={item.name} className="rounded-[1.75rem] bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <ProductVisual image={item.image} label="Product visual" />
                  <div className="px-2 pb-2 pt-7">
                    <h3 className="text-2xl font-medium tracking-tight">{item.name}</h3>
                    <p className="mt-3 text-sm font-medium text-nordic">{item.models}</p>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{item.description}</p>
                    <a href="/contact" className="mt-5 inline-flex text-sm font-medium text-nordic">Request Quote →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Compatibility guide</p>
              <h2 className="headline mt-5">Compatibility Guide</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">{data.guideSubtitle}</p>
            </div>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white/70">
              <table className="min-w-[760px] w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line">
                    {data.guideColumns.map(column => <th key={column} className="px-5 py-4 font-medium">{column}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {data.guideRows.map(row => (
                    <tr key={row[0]} className="border-b border-line last:border-0">
                      {row.map(cell => <td key={cell} className="px-5 py-4 text-ink/65">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white/60 p-6 text-center shadow-sm">
              <p className="text-sm leading-6 text-ink/65">{data.disclaimer}</p>
              <a href="/contact" className="mt-5 inline-flex text-sm font-medium text-nordic">{data.guideCta}</a>
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Why compatible filters</p>
              <h2 className="headline mt-5">{data.featuresTitle}</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.features.map(([title, copy]) => (
                <article key={title} className="rounded-2xl bg-white/70 p-7 shadow-sm">
                  <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">OEM &amp; neutral packaging</p>
              <h2 className="headline mt-5">OEM &amp; Neutral Packaging</h2>
              <p className="body-copy mt-6">{data.oemContent}</p>
              <div className="mt-8 grid gap-3 text-sm text-ink/70">
                {data.oemBullets.map(item => <div key={item} className="rounded-full bg-white/70 px-5 py-3 shadow-sm">{item}</div>)}
              </div>
            </div>
            <div className="lg:col-span-7">
              <ProductVisual image={data.oemImage} label="Neutral packaging visual" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Quality assurance</p>
              <h2 className="headline mt-5">Quality Assurance</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.qualityItems.map(item => (
                <article key={item} className="rounded-2xl bg-white/70 p-7 text-center shadow-sm">
                  <div className="mx-auto mb-5 flex size-10 items-center justify-center rounded-full bg-nordic/10 text-nordic">•</div>
                  <h3 className="text-lg font-medium tracking-tight">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line py-14 md:py-20">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em]">Compatibility FAQ</h2>
            <div className="mt-10 space-y-6">
              {data.faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-line bg-white/35 px-6 py-5 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                    <span>{question}</span>
                    <span className="shrink-0 text-xl text-nordic transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Compatibility support</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Need Compatibility Verification?</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Share your model reference, packaging needs and target market. QLORA will help confirm the right compatible filter solution.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Quote</a>
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Contact Us</a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/60">
              {data.relatedLinks.map(link => <a key={link.href} href={link.href} className="transition hover:text-white">{link.title}</a>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export type { CompatibilityPageData }
