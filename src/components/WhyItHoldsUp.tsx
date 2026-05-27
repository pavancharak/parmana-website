import styles from './WhyItHoldsUp.module.css'

const pillars = [
  {
    icon: '⊟',
    title: 'Apache-2.0',
    body: 'No proprietary lock-in. Fork it, audit it, deploy it. The license says you can.',
  },
  {
    icon: '◉',
    title: 'Ed25519 signatures',
    body: 'A standard elliptic-curve signature scheme. Widely audited, used across TLS and SSH. Not invented here.',
  },
  {
    icon: '≈',
    title: 'Deterministic & reproducible',
    body: 'Same inputs always produce the same output and the same signature. You can replay any decision and get an identical result.',
  },
  {
    icon: '≡',
    title: 'Append-only log',
    body: 'Records can be added but not deleted or changed. Tampering is detectable verification breaks visibly.',
  },
  {
    icon: '⊕',
    title: '14 worked examples',
    body: 'Claims approval, healthcare triage, fraud detection, agentic containment concrete examples you can run and inspect.',
  },
]

export default function WhyItHoldsUp() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>WHY IT HOLDS UP</p>
        <h2 className={styles.heading}>Built on things that don't move.</h2>
        <p className={styles.sub}>
          No proprietary formats. No trust assumptions. Every guarantee traces back to
          math and open standards.
        </p>

        <div className={styles.grid}>
          {pillars.map(p => (
            <div key={p.title} className={styles.pillar}>
              <div className={styles.pillarIcon} aria-hidden="true">{p.icon}</div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
