import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section} id="start">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Get Started</p>
        <h2 className={styles.h2}>Deploy the AI you'd otherwise be afraid to.</h2>
        <p className={styles.sub}>Give it room to think. Keep control of what it does.</p>
        <div className={styles.ctas}>
          <a
            href="https://parmanasystems.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start building →
          </a>
          <a
            href="https://parmanasystems.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Read the docs ↗
          </a>
        </div>
        <p className={styles.credStrip}>Apache-2.0  ·  Ed25519  ·  deterministic  ·  append-only</p>
      </div>
    </section>
  )
}
