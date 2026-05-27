import styles from './UseCases.module.css'

const cases = [
  {
    tag: 'Claims & insurance',
    title: 'Hand the proof to your adversary.',
    body: 'When a denied claim is disputed, you hand over a signed record the claimant can verify themselves — with only a public key, no access to your systems. The proof doesn\'t depend on trusting you.',
  },
  {
    tag: 'Regulatory audit',
    title: 'Rewind a decision years later. Identical result.',
    body: 'A regulator asks what happened in 2024. You replay the exact decision — same inputs, same rules, same signature. The deterministic output is the proof. No reconstruction, no narrative.',
  },
  {
    tag: 'AI containment',
    title: "Prove the AI couldn't have done it.",
    body: "Your AI tried something it wasn't allowed to do. Parmana blocked it before it ran and logged the denial. Now you can prove the action never executed — with a signed record no one can quietly delete.",
  },
  {
    tag: 'Air-gapped verification',
    title: 'Verify with the internet unplugged.',
    body: "Verification requires no server, no API call, no database. Hand someone a record and a public key. They check it in a terminal, offline, years from now. It either holds or it doesn't.",
  },
]

export default function UseCases() {
  return (
    <section className={styles.section} id="use-cases">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>USE CASES</p>
        <h2 className={styles.heading}>Things competitors can't claim.</h2>
        <p className={styles.sub}>
          These aren't features. They're structural guarantees — things that hold because of
          how Parmana works, not because we say so.
        </p>

        <div className={styles.grid}>
          {cases.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.tag}>{c.tag}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
