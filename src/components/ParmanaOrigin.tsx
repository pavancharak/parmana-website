import styles from './ParmanaOrigin.module.css'

export default function ParmanaOrigin() {
  return (
    <section className={styles.section} id="the-name">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Name</p>
        <div className={styles.devanagariWrap}>
          <span className={styles.devanagari} aria-hidden="true">प्रमाण</span>
          <h2 className={styles.h2}>Parmana means proof.</h2>
        </div>
        <p className={styles.body}>
          From the Sanskrit pramana — a valid means of knowing something is true.
          That is the whole idea: trust you don't have to take on faith. Built in the
          open, free for anyone, anywhere to inspect, run, and verify.
        </p>
      </div>
    </section>
  )
}
