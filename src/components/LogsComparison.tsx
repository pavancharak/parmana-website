import styles from './LogsComparison.module.css'

const rows = [
  {
    label: 'When it acts',
    logs: 'After the fact.',
    parmana: 'Before the action runs.',
  },
  {
    label: "Can it stop a bad action?",
    logs: "No. It only takes notes.",
    parmana: "Yes. It blocks, and fails closed.",
  },
  {
    label: "Who can verify it?",
    logs: "Only people who trust your servers.",
    parmana: "Anyone, with just a key.",
  },
]

export default function LogsComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>But isn't this just logging?</p>
        <h2 className={styles.h2}>
          A log records what happened. Parmana proves it — and could have stopped it.
        </h2>
        <p className={styles.body}>
          Logs are written by the system you're asking everyone to trust. Parmana is different on every count.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thLabel} />
                <th className={styles.thLogs}>Ordinary logs</th>
                <th className={styles.thParmana}>Parmana</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className={styles.tr}>
                  <td className={styles.tdLabel}>{row.label}</td>
                  <td className={styles.tdLogs}>{row.logs}</td>
                  <td className={styles.tdParmana}>{row.parmana}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.mobileCards}>
          {rows.map((row) => (
            <div key={row.label} className={styles.mobileCard}>
              <p className={styles.mobileLabel}>{row.label}</p>
              <div className={styles.mobileRow}>
                <div className={styles.mobileCol}>
                  <span className={styles.mobileColHead}>Ordinary logs</span>
                  <span className={styles.mobileVal}>{row.logs}</span>
                </div>
                <div className={styles.mobileDivider} aria-hidden="true" />
                <div className={styles.mobileCol}>
                  <span className={styles.mobileColHead}>Parmana</span>
                  <span className={`${styles.mobileVal} ${styles.mobileValAccent}`}>{row.parmana}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
