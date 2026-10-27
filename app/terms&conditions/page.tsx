import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'
import {
  termsEffective,
  termsSections,
  termsTitle,
} from '@/lib/legal-contents'

export const metadata: Metadata = {
  title: termsTitle,
  description:
    'The terms that govern use of the Kemjet Himalog Platform, including permit, hotel and taxi services.',
  alternates: { canonical: '/terms&conditions' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title={termsTitle}
      effective={termsEffective}
      sections={termsSections}
      related={{ label: 'Privacy Policy', href: '/policy' }}
    />
  )
}