import styles from './LogsComparison.module.css'

const rows = [
  {
    question: 'When it acts',
    logs: 'After the action runs',
    parmana: 'Before the action runs',
    parmanaBold: true,
  },
  {
    question: 'Can it stop a bad action',
    logs: 'No',
    parmana: 'Yes fails closed',
    parmanaBold: true,
  },
  {
    question: 'Who can verify',
    logs: 'Only people who trust your servers',
    parmana: 'Anyone with a public key',
    parmanaBold: true,
  },
  {
    question: 'Under tampering',
    logs: "Silently edited — you'd never know",
    parmana: 'Proof breaks visibly verification fails',
    parmanaBold: true,
  },
  {
    question: 'What it proves',
    logs: 'A line was written',
    parmana: 'What was authorized, by which rules, and when',
    parmanaBold: true,
  },
]

export default function LogsComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>COMMON QUESTION</p>
        <h2 className={styles.heading}>"Isn't this just logging?"</h2>
        <p className={styles.sub}>
          No. Here's the exact difference.
        </p>

        {/* Desktop table */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thQuestion}></th>
                <th className={styles.thLogs}>Ordinary logs</th>
                <th className={styles.thParmana}>Parmana</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.question} className={styles.tr}>
                  <td className={styles.tdQuestion}>{row.question}</td>
                  <td className={styles.tdLogs}>{row.logs}</td>
                  <td className={`${styles.tdParmana} ${row.parmanaBold ? styles.tdParmanaGreen : ''}`}>
                    {row.parmana}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className={styles.cards}>
          {rows.map(row => (
            <div key={row.question} className={styles.mobileCard}>
              <div className={styles.mobileQuestion}>{row.question}</div>
              <div className={styles.mobileRow}>
                <div className={styles.mobileCol}>
                  <div className={styles.mobileColLabel}>Ordinary logs</div>
                  <div className={styles.mobileColVal}>{row.logs}</div>
                </div>
                <div className={styles.mobileDivider} aria-hidden="true" />
                <div className={styles.mobileCol}>
                  <div className={styles.mobileColLabel}>Parmana</div>
                  <div className={`${styles.mobileColVal} ${styles.mobileColGreen}`}>{row.parmana}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
