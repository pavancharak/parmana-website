import styles from './DataSovereignty.module.css'

const cells = [
  {
    label: 'Your servers',
    detail: 'Self-hosted and open source. Deploy in your own cloud, data center, or fully air-gapped.',
  },
  {
    label: 'Your keys',
    detail: 'You generate and hold the signing keys. No one can produce a valid decision — including us.',
  },
  {
    label: 'Your audit trail',
    detail: 'Every decision lives in your database, under your control, ready for your auditors.',
  },
]

export default function DataSovereignty() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Where It Runs</p>
        <h2 className={styles.h2}>Your data never leaves your servers.</h2>
        <p className={styles.body}>
          Parmana runs entirely inside your own infrastructure there is nothing to phone home to.
        </p>
        <div className={styles.grid}>
          {cells.map((cell) => (
            <div key={cell.label} className={styles.cell}>
              <h3 className={styles.cellLabel}>{cell.label}</h3>
              <p className={styles.cellDetail}>{cell.detail}</p>
            </div>
          ))}
        </div>
        <div className={styles.chips}>
          <span className={styles.chipsLabel}>Built for regulated environments </span>
          <span className={styles.chip}>inspect every line</span>
          <span className={styles.chipSep} aria-hidden="true">·</span>
          <span className={styles.chip}>self-host or air-gap</span>
          <span className={styles.chipSep} aria-hidden="true">·</span>
          <span className={styles.chip}>audit-ready by design</span>
        </div>
      </div>
    </section>
  )
}
