import styles from './Problem.module.css'

export default function Problem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Problem</p>
        <h2 className={styles.h2}>
          Don't let what AI might do stop you from what AI can do.
        </h2>
        <p className={styles.body}>
          AI is being handed real decisions approving claims, triaging patients,
          flagging fraud. The teams that hesitate are leaving the work to systems that
          can't be checked. The ones who move have one thing in common: they can prove
          what their AI was allowed to do.
        </p>
      </div>
    </section>
  )
}
