import styles from './DecisionExecution.module.css'

type BoxVariant = 'neutral' | 'muted' | 'warm' | 'warmer'

interface BoxDef {
  text: string
  highlightWord: string | null
  variant: BoxVariant
  subtitle?: string
}

interface ColumnDef {
  header: string
  subhead: string
  boxes: BoxDef[]
  outcome: {
    title: string
    subtitle: string
    variant: 'risk' | 'positive'
    tags?: string
  }
}

const columns: ColumnDef[] = [
  {
    header: "Today's AI systems",
    subhead: "AI reasons, decides, executes",
    boxes: [
      { text: "AI reasons",  highlightWord: null, variant: 'neutral' },
      { text: "AI decides",  highlightWord: "AI", variant: 'muted' },
      { text: "AI executes", highlightWord: "AI", variant: 'muted' },
    ],
    outcome: {
      title: "No guarantee",
      subtitle: "what runs may differ",
      variant: 'risk',
    },
  },
  {
    header: "AI + Parmana",
    subhead: "human decides, Parmana executes",
    boxes: [
      { text: "AI reasons",        highlightWord: null,      variant: 'neutral' },
      { text: "Human decides",     highlightWord: "Human",   variant: 'warm' },
      { text: "Parmana executes",  highlightWord: "Parmana", variant: 'warmer', subtitle: "(deterministic — not AI)" },
    ],
    outcome: {
      title: "Decision = execution",
      subtitle: "guaranteed and provable",
      variant: 'positive',
      tags: "auditable · traceable · explainable · replayable",
    },
  },
]

const boxVariantClass: Record<BoxVariant, string> = {
  neutral: '',
  muted:   styles.boxMuted,
  warm:    styles.boxWarm,
  warmer:  styles.boxWarmer,
}

const outcomeVariantClass: Record<'risk' | 'positive', string> = {
  risk:     styles.outcomeRisk,
  positive: styles.outcomePositive,
}

function BoxTitle({
  text,
  highlightWord,
  variant,
}: {
  text: string
  highlightWord: string | null
  variant: BoxVariant
}) {
  if (!highlightWord) return <>{text}</>
  const idx = text.indexOf(highlightWord)
  if (idx === -1) return <>{text}</>
  const before = text.slice(0, idx)
  const after  = text.slice(idx + highlightWord.length)
  const cls    = variant === 'muted' ? styles.wordAlarm : styles.wordAccent
  return (
    <>
      {before}
      <span className={cls}>{highlightWord}</span>
      {after}
    </>
  )
}

function Column({ col }: { col: ColumnDef }) {
  return (
    <div className={styles.column}>
      <div className={styles.colHeader}>
        <p className={styles.colTitle}>{col.header}</p>
        <p className={styles.colSubhead}>{col.subhead}</p>
      </div>
      <div className={styles.flow}>
        {col.boxes.map((box, i) => (
          <div key={i}>
            <div className={`${styles.box} ${boxVariantClass[box.variant]}`}>
              <p className={styles.boxTitle}>
                <BoxTitle text={box.text} highlightWord={box.highlightWord} variant={box.variant} />
              </p>
              {box.subtitle && (
                <p className={styles.boxSubtitle}>{box.subtitle}</p>
              )}
            </div>
            <div className={styles.connector} aria-hidden="true" />
          </div>
        ))}
        <div className={`${styles.outcome} ${outcomeVariantClass[col.outcome.variant]}`}>
          <p className={styles.outcomeTitle}>{col.outcome.title}</p>
          <p className={styles.outcomeSubtitle}>{col.outcome.subtitle}</p>
          {col.outcome.tags && (
            <p className={styles.outcomeTags}>{col.outcome.tags}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DecisionExecution() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>GOVERNED AI EXECUTION</p>
        <h1 className={styles.h1}>Who holds the authority?</h1>
        <p className={styles.lead}>
          Control at machine speed. You set the rules once, the AI reasons freely,
          and Parmana executes — guaranteeing that what runs is exactly what you approved.
        </p>

        <div className={styles.ctas}>
          <a
            className="btn-primary"
            href="https://parmanasystems.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start building →
          </a>
          <a className="btn-secondary" href="#how-it-works">
            How it works
          </a>
        </div>

        <div className={styles.columns}>
          <Column col={columns[0]} />
          <div className={styles.divider} aria-hidden="true" />
          <Column col={columns[1]} />
        </div>
      </div>
    </section>
  )
}
