import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { applySEO } from '../lib/seo'

export type ProductDetail = {
  slug: string
  title: string
  intro: string
  overview: string
  hideOverview?: boolean
  hideFeatures?: boolean
  howItWorksAfterHero?: boolean
  specsAfterHow?: boolean
  heroImage?: { src: string; alt: string }
  howItWorksImage?: { src: string; alt: string }
  howItWorksImageClassName?: string
  specsImage?: { src: string; alt: string }
  replacementImage?: { src: string; alt: string }
  oemImage?: { src: string; alt: string }
  highlights: string[]
  features: Array<{ title: string; description: string }>
  howItWorksTitle: string
  howItWorks: string[]
  applications: string[]
  specs: Array<{ label: string; value: string }>
  related: Array<{ title: string; href: string }>
  faqs: Array<{ question: string; answer: string }>
  seoTitle: string
  seoDescription: string
}

function ImageFallback({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-white via-[#f5f3ee] to-[#e8e3d8] p-8 text-center shadow-soft">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/35">{label}</span>
    </div>
  )
}

function ProductImage({
  image,
  label,
  className = 'aspect-[4/3]',
  loading = 'lazy',
  fetchPriority,
}: {
  image?: { src: string; alt: string }
  label: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}) {
  if (!image) return <ImageFallback label={label} />

  return (
    <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft sm:p-6">
      <img
        src={image.src}
        alt={image.alt}
        className={`${className} block max-w-full w-full rounded-[1.5rem] object-contain`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        width="900"
        height="675"
      />
    </div>
  )
}

export default function ProductDetailTemplate({ product }: { product: ProductDetail }) {
  const path = `/products/${product.slug}`
  const category = product.slug.includes('ro-system')
    ? { name: 'RO Systems', path: '/ro-systems' }
    : { name: 'Water Filtration', path: '/water-filtration' }
  const howItWorksSection = (
    <section className="py-14 md:py-20">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">How it works</p>
          <h2 className="headline mt-5">{product.howItWorksTitle}</h2>
          <div className="mt-8 space-y-3">
            {product.howItWorks.map(step => (
              <div key={step} className="rounded-2xl bg-white/70 px-5 py-4 text-sm text-ink/70 shadow-sm">{step}</div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <ProductImage image={product.howItWorksImage} label="Product process visual" className={product.howItWorksImageClassName ?? 'aspect-[16/10]'} />
        </div>
      </div>
    </section>
  )
  const specsSection = (
    <section className="py-14 md:py-20">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Technical specifications</p>
          <h2 className="headline mt-5">Technical Specifications</h2>
        </div>
        {product.specsImage && (
          <div className="mx-auto mt-10 max-w-5xl">
            <ProductImage image={product.specsImage} label="Technical specifications visual" className="aspect-[16/9]" />
          </div>
        )}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-line bg-white/70">
          <table className="w-full text-left text-sm">
            <tbody>
              {product.specs.map(spec => (
                <tr key={spec.label} className="border-b border-line last:border-0">
                  <th className="w-1/3 px-5 py-4 font-medium text-ink">{spec.label}</th>
                  <td className="px-5 py-4 text-ink/60">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
  const replacementSection = product.replacementImage ? (
    <section className="py-14 md:py-20">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How to replace</p>
          <h2 className="headline mt-5">Simple Filter Replacement</h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <ProductImage image={product.replacementImage} label="Filter replacement visual" className="aspect-auto" />
        </div>
      </div>
    </section>
  ) : null

  useEffect(() => {
    applySEO({
      title: product.seoTitle,
      description: product.seoDescription,
      path,
      breadcrumbs: [
        category,
        { name: product.title, path },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        brand: { '@type': 'Brand', name: 'QLORA' },
        description: product.seoDescription,
      }],
    })
  }, [category, path, product])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[620px] items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
            <div className="min-w-0 lg:col-span-6">
              <ProductImage image={product.heroImage} label="Product visual" loading="eager" fetchPriority="high" />
            </div>
            <div className="min-w-0 lg:col-span-6">
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/45" aria-label="Breadcrumb">
                <a href="/" className="transition hover:text-ink">Home</a>
                <span aria-hidden="true">›</span>
                <a href={category.path} className="transition hover:text-ink">{category.name}</a>
                <span aria-hidden="true">›</span>
                <a href={path} className="text-ink/70 transition hover:text-ink">{product.title}</a>
              </nav>
              <p className="eyebrow">QLORA product</p>
              <h1 className="display mt-6 max-w-2xl">{product.title}</h1>
              <p className="body-copy mt-7 max-w-xl">{product.intro}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="button-primary">Request Quote</a>
                <a href="/oem-private-label" className="button-secondary">OEM Service</a>
              </div>
            </div>
          </div>
        </section>

        {product.howItWorksAfterHero && howItWorksSection}
        {product.howItWorksAfterHero && product.specsAfterHow && specsSection}
        {product.howItWorksAfterHero && product.specsAfterHow && replacementSection}

        {!product.hideOverview && (
          <section className="py-14 md:py-20">
            <div className="shell grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <ImageFallback label="Product overview visual" />
              </div>
              <div className="lg:col-span-6">
                <p className="eyebrow">Product overview</p>
                <h2 className="headline mt-5">Built for Clear Product Positioning</h2>
                <p className="body-copy mt-6 max-w-xl">{product.overview}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {product.highlights.map(item => (
                    <div key={item} className="rounded-full bg-white/70 px-5 py-3 text-sm text-ink/70 shadow-sm">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {!product.hideFeatures && (
        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Key features</p>
              <h2 className="headline mt-5">Designed for Everyday Performance</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {product.features.map(feature => (
                <article key={feature.title} className="rounded-2xl bg-white/70 p-6 shadow-sm">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-nordic/10 text-nordic">•</div>
                  <h3 className="text-lg font-medium tracking-tight">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        {!product.howItWorksAfterHero && howItWorksSection}

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Applications</p>
              <h2 className="headline mt-5">Where It Fits</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {product.applications.map(application => (
                <article key={application} className="rounded-2xl bg-white/70 p-7 text-center shadow-sm">
                  <h3 className="text-xl font-medium tracking-tight">{application}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {!product.specsAfterHow && specsSection}
        {!product.specsAfterHow && replacementSection}

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">OEM &amp; private label</p>
              <h2 className="headline mt-5">Build This Product Under Your Brand</h2>
              <p className="body-copy mt-6">QLORA supports private label branding, packaging direction and product configuration for international water filtration partners.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/oem-private-label" className="button-primary">OEM Service</a>
                <a href="/contact" className="button-secondary">Request Quote</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ProductImage image={product.oemImage} label="OEM product visual" className="aspect-[16/10]" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Related products</p>
              <h2 className="headline mt-5">Explore More QLORA Solutions</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {product.related.map(item => (
                <a key={item.href} href={item.href} className="rounded-2xl bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-5 aspect-[4/3] rounded-xl bg-[#f5f3ee]" />
                  <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-nordic">View product →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line py-14 md:py-20">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em]">Product FAQ</h2>
            <div className="mt-10 space-y-6">
              {product.faqs.map(faq => (
                <details key={faq.question} className="group rounded-xl border border-line bg-white/35 px-6 py-5 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-xl text-nordic transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Ready to Discuss {product.title}?</h2>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Quote</a>
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
