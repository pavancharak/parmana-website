import styles from './UseCases.module.css'

const cases = [
  {
    tag: 'Fintech',
    title: 'Loan approval, 2:47am',
    description:
      'An overnight automated approval, with a signed record you can show an auditor months later.',
  },
  {
    tag: 'Insurance',
    title: 'Insurance claim paid out',
    description:
      "The payout runs only if the rules allow it, and the record can't be quietly edited afterward.",
  },
  {
    tag: 'Payments',
    title: 'Payment authorized',
    description:
      'Money moves only when conditions are met, and the same request can never accidentally go through twice.',
  },
  {
    tag: 'AI agents',
    title: 'AI agent stopped in time',
    description:
      "An agent tried to take an action it shouldn't have. Parmana denied it before anything happened.",
  },
  {
    tag: 'Security ops',
    title: 'Security action contained',
    description:
      "Your AI flags suspicious activity and recommends isolating a system; Parmana confirms it's allowed and records it before anything runs.",
  },
  {
    tag: 'Compliance',
    title: 'Regulator asks "prove it"',
    description:
      'Months later, someone asks what happened and why. You hand them a record anyone can verify.',
  },
]

export default function UseCases() {
  return (
    <section className={styles.section} id="use-cases">
      <div className={styles.inner}>
        <div className={styles.label}>Use cases</div>
        <h2 className={styles.heading}>Anywhere you need proof that the right thing happened</h2>
        <p className={styles.sub}>
          Parmana is useful the moment an AI action could have real consequences — financial, legal,
          or otherwise — and you might later need to explain exactly what happened and why.
        </p>

        <div className={styles.grid}>
          {cases.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.tag}>{c.tag}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardText}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
