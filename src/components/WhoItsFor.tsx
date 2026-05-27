import styles from './WhoItsFor.module.css'

const audiences = [
  {
    icon: '\u{1F4B3}',
    title: 'Teams handling money or sensitive actions',
    description:
      `If your AI approves loans, authorizes payments, or moves funds, "the model decided" isn't an answer you can give an auditor. Parmana gives you a signed record of what was allowed and why.`,
  },
  {
    icon: '\u{1F916}',
    title: 'Teams building AI agents that do things',
    description:
      "When your agent can change records or trigger real actions, you need something separate from the AI that decides what's actually permitted.",
  },
  {
    icon: '\u{1F3E5}',
    title: 'Regulated industries',
    description:
      'Healthcare, insurance, finance, government. Anywhere someone may later ask you to prove the right rule ran, on the right inputs, and that no one changed the record afterward.',
  },
]

export default function WhoItsFor() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.inner}>
        <div className={styles.label}>Who it's for</div>
        <h2 className={styles.heading}>Built for teams where decisions have consequences</h2>
        <p className={styles.sub}>
          Parmana is not for chatbots or creative AI workflows. It's for systems where something real
          happens when the AI makes a call.
        </p>

        <div className={styles.grid}>
          {audiences.map((a) => (
            <div key={a.title} className={styles.card}>
              <div className={styles.icon}>{a.icon}</div>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardText}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
