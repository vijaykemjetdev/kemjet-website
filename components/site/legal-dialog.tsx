
'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDialogProps = {
  open: boolean;
  title: string;
  sections: LegalSection[];
  onClose: () => void;
  lastUpdated?: string;
};

export default function LegalDialog({
  open,
  title,
  sections,
  onClose,
  lastUpdated,
}: LegalDialogProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-dialog-title"
        className="flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden border border-gold/40 bg-ivory text-forest shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-forest/15 bg-deep px-5 py-4 text-ivory sm:px-7">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gold">
              Kemjet Himalog Technologies
            </p>
            <h2
              id="legal-dialog-title"
              className="font-serif text-2xl sm:text-3xl"
            >
              {title}
            </h2>
            {lastUpdated && (
              <p className="mt-2 text-xs text-ivory/60">
                Effective date: {lastUpdated}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="flex size-10 shrink-0 items-center justify-center border border-ivory/20 text-ivory transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-6 sm:px-7 sm:py-8">
          <div className="space-y-7">
            {sections.map((section, index) => (
              <article key={`${section.heading}-${index}`}>
                <h3 className="mb-3 font-serif text-lg text-forest sm:text-xl">
                  {section.heading}
                </h3>

                <div className="space-y-3 text-sm leading-7 text-forest/80">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-forest/80">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-forest/15 pt-5 text-xs leading-6 text-forest/60">
            Please contact the company through its designated support channel
            if you have questions about this document.
          </div>
        </div>

        <footer className="flex justify-end border-t border-forest/15 bg-white px-5 py-3 sm:px-7">
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 border border-forest/25 px-5 py-2 text-sm text-forest transition hover:border-gold hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Close
          </button>
        </footer>
      </section>
    </div>
  );
}
