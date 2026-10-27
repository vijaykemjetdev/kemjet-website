import Link from 'next/link'
import { Topo } from '@/components/site/primitives'
import { LegalDocument } from '@/components/site/legal-document'
import type { LegalSection } from '@/lib/legal-contents'

export function LegalPage({
  title,
  effective,
  sections,
  related,
}: {
  title: string
  effective: string
  sections: LegalSection[]
  related: { label: string; href: string }
}) {
  return (
    <>
      <section className="grain relative overflow-hidden bg-deep text-ivory">
        <Topo variant="light" className="opacity-[0.06]" />
        <div className="container-editorial relative pb-14 pt-36 md:pb-20 md:pt-44">
          <h1 className="max-w-4xl font-serif text-5xl font-light leading-[1] md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-sm text-ivory/70">{effective}</p>
        </div>
      </section>

      <div className="paper py-16 md:py-24">
        <div className="container-editorial relative grid gap-12 lg:grid-cols-12 lg:gap-8">
          <nav
            aria-label={`${title} sections`}
            className="hidden lg:col-span-3 lg:block"
          >
            <div className="sticky top-28">
              <p className="text-sm font-semibold text-forest">On this page</p>
              <ol className="mt-4 space-y-2 border-l border-forest/15 text-sm">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="-ml-px block border-l border-transparent py-0.5 pl-4 text-charcoal/65 transition-colors hover:border-gold hover:text-forest"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0 max-w-3xl lg:col-span-8 lg:col-start-5">
            <LegalDocument sections={sections} />

            <p className="mt-16 border-t border-forest/15 pt-8 text-sm text-charcoal/65">
              See also our{' '}
              <Link
                href={related.href}
                className="text-forest underline decoration-gold underline-offset-4 hover:text-moss"
              >
                {related.label}
              </Link>
              .
            </p>
          </article>
        </div>
      </div>
    </>
  )
}