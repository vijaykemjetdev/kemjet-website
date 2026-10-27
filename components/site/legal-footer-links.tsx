import Link from 'next/link'

export default function LegalFooterLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ivory/70">
      <Link
        href="/terms&conditions"
        className="transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        Terms &amp; Conditions
      </Link>
      <Link
        href="/policy"
        className="transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        Privacy Policy
      </Link>
    </div>
  )
}