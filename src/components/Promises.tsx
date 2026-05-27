import styles from './Promises.module.css'

const promises = [
  {
    heading: 'Same input, same decision, every time',
    body: 'The rules make the call, so the same situation always produces the same outcome. Swap your AI model later and your rules still hold.',
  },
  {
    heading: "You don't have to take our word for it",
    body: 'Each decision comes with a signed proof anyone can verify on their own. Trust doesn't depend on trusting us.',
  },
  {
    heading: "A decision can't run twice by accident",
    body: 'Critical when the action is paying a claim or sending money. No duplicates, no accidental re-runs.',
  },
  {
    heading: 'The AI advises; it never controls what actually runs',
    body: 'The thinking part and the "is this allowed" part are kept separate.',
  },
  {
    heading: 'You own the proof',
    body: 'Not just a login to a dashboard. The actual records are yours to keep and check, anywhere.',
  },
  {
    heading: "If something's wrong, it stops",
    body: 'Not "risk score increased." Not "review suggested." The action is denied.',
  },
]

export default function Promises() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>What you get</div>
        <h2 className={styles.heading}>Six things you can count on</h2>

        <div className={styles.grid}>
          {promises.map((p) => (
            <div key={p.heading} className={styles.card}>
              <h3 className={styles.cardHeading}>{p.heading}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
