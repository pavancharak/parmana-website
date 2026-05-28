import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Governed AI Execution</p>
        <h1 className={styles.h1}>
          Make AI safer.
          <span className={styles.h1Line2}>
            <em>Without holding it back.</em>
          </span>
        </h1>
        <p className={styles.sub}>
          AI reasons freely. Parmana controls what actually runs and signs proof anyone can verify.
        </p>
        <div className={styles.ctas}>
          <a
            href="https://parmanasystems.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start building →
          </a>
          <a href="#how-it-works" className="btn-secondary">How it works</a>
        </div>
      </div>
    </section>
  )
}
