
'use client';

import { useState } from 'react';
import LegalDialog from './legal-dialog';
import {
  legalLastUpdated,
  privacySections,
  termsSections,
} from '@/lib/legal-contents';

export default function LegalFooterLinks() {
  const [activePolicy, setActivePolicy] = useState<
    'terms' | 'privacy' | null
  >(null);

  const closeDialog = () => setActivePolicy(null);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ivory/70">
        <button
          type="button"
          onClick={() => setActivePolicy('terms')}
          className="transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Terms &amp; Conditions
        </button>

        <button
          type="button"
          onClick={() => setActivePolicy('privacy')}
          className="transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Privacy Policy
        </button>
      </div>

      <LegalDialog
        open={activePolicy === 'terms'}
        title="Terms & Conditions"
        lastUpdated={legalLastUpdated}
        sections={termsSections}
        onClose={closeDialog}
      />

      <LegalDialog
        open={activePolicy === 'privacy'}
        title="Privacy Policy"
        lastUpdated={legalLastUpdated}
        sections={privacySections}
        onClose={closeDialog}
      />
    </>
  );
}
