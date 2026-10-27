import type {
  LegalBlock,
  LegalListItem,
  LegalSection,
} from '@/lib/legal-contents'

function ListItemContent({ item }: { item: LegalListItem }) {
  if (typeof item === 'string') return <>{item}</>
  return (
    <>
      <strong className="font-semibold text-forest">{item.lead}</strong>{' '}
      {item.text}
    </>
  )
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>

    case 'subheading':
      return (
        <h3 className="pt-2 font-sans text-base font-semibold text-forest">
          {block.text}
        </h3>
      )

    case 'ul':
      return (
        <ul className="list-disc space-y-2 pl-5 marker:text-gold">
          {block.items.map((item, i) => (
            <li key={i}>
              <ListItemContent item={item} />
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="list-decimal space-y-2 pl-5 marker:text-moss">
          {block.items.map((item, i) => (
            <li key={i}>
              <ListItemContent item={item} />
            </li>
          ))}
        </ol>
      )

    case 'table': {
      const isKeyValue = !block.headers
      return (
        <div className="overflow-x-auto border border-forest/15 bg-white/60">
          <table className="w-full min-w-[32rem] border-collapse text-left text-[0.9375rem] leading-relaxed">
            {block.headers && (
              <thead className="bg-forest/[0.06]">
                <tr>
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-b border-forest/15 px-4 py-3 font-semibold text-forest"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-forest/10 last:border-b-0">
                  {row.map((cell, c) =>
                    isKeyValue && c === 0 ? (
                      <th
                        key={c}
                        scope="row"
                        className="w-[34%] bg-forest/[0.04] px-4 py-3 align-top font-semibold text-forest"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td key={c} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <section
          key={`${section.heading}-${index}`}
          id={`section-${index + 1}`}
          className="scroll-mt-28"
        >
          <h2 className="font-serif text-2xl leading-tight text-forest md:text-3xl">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-[1.8] text-charcoal/80">
            {section.blocks.map((block, blockIndex) => (
              <Block key={blockIndex} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}