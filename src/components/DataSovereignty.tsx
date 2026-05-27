import styles from './DataSovereignty.module.css'

const points = [
  {
    label: 'Your servers',
    detail: 'Deploy on your own infrastructure. Nothing leaves your network unless you take it out yourself.',
  },
  {
    label: 'Your keys',
    detail: 'You generate and hold the signing keys. There's no Parmana account, no cloud key management, no third-party dependency.',
  },
  {
    label: 'Your audit trail',
    detail: 'The signed records are yours. Hand them to a regulator, an auditor, or your own systems. They verify with a public key — no access to your environment needed.',
  },
  {
    label: 'Air-gap capable',
    detail: 'Verification works offline. No server required, no database query, no API call. Just the record and the public key.',
  },
]

export default function DataSovereignty() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>WHERE IT RUNS</p>
        <h2 className={styles.heading}>Your data never leaves your servers.</h2>
        <p className={styles.sub}>
          Self-hosted or air-gapped. Parmana runs where your data lives.
        </p>

        <div className={styles.grid}>
          {points.map(p => (
            <div key={p.label} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">□</div>
              <h3 className={styles.cardLabel}>{p.label}</h3>
              <p className={styles.cardDetail}>{p.detail}</p>
            </div>
          ))}
        </div>

        <div className={styles.callout}>
          <span className={styles.calloutIcon} aria-hidden="true">◎</span>
          <div>
            <strong className={styles.calloutStrong}>Nothing phones home.</strong>
            {' '}No telemetry, no analytics, no license checks. The code is Apache-2.0 : inspect every line.
          </div>
        </div>
      </div>
    </section>
  )
}
