import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'
import {
  privacyEffective,
  privacySections,
  privacyTitle,
} from '@/lib/legal-contents'

export const metadata: Metadata = {
  title: privacyTitle,
  description:
    'How Kemjet Himalog Technologies Private Limited collects, uses, shares and protects personal data.',
  alternates: { canonical: '/policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={privacyTitle}
      effective={privacyEffective}
      sections={privacySections}
      related={{ label: 'Website Terms and Conditions', href: '/terms&conditions' }}
    />
  )
}