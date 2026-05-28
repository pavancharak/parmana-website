import styles from './UseCases.module.css'

const cases = [
  {
    num: '01',
    title: 'Hand the proof to your adversary.',
    body: "A payout is disputed. Instead of producing logs and asking them to trust you, you hand the other side the signed record and a key. Their expert checks it on their own machine — and lands on the exact same answer.",
  },
  {
    num: '02',
    title: 'Rewind a decision years later.',
    body: "A claim approved today is questioned in 2031. Re-run it with the rules that were in force then, and get an identical result — proving the decision was never quietly changed.",
  },
  {
    num: '03',
    title: "Prove the AI couldn't have done it.",
    body: "A regulator asks: could it have approved this without a human? You don't show a clean log — you prove the action was impossible, blocked by policy, with signed evidence of every attempt.",
  },
]

export default function UseCases() {
  return (
    <section className={styles.section} id="use-cases">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>What You Can Prove</p>
        <h2 className={styles.h2}>Guarantees, not features.</h2>
        <p className={styles.body}>
          These aren't features. They're structural guarantees — things that hold because
          of how Parmana works, not because we say so.
        </p>
        <div className={styles.grid}>
          {cases.map((c) => (
            <div key={c.num} className={styles.card}>
              <span className={styles.cardNum}>{c.num}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
