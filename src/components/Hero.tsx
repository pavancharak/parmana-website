import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>

        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          GOVERNED AI EXECUTION
        </div>

        <h1 className={styles.headline}>
          Make AI safer.<br />
          <span className={styles.headlineLight}>Without holding it back.</span>
        </h1>

        <p className={styles.sub}>
          AI reasons freely. Parmana controls what actually runs checking every action
          against your rules, blocking what isn't allowed, and signing the result so anyone
          can verify exactly what happened. With nothing but a key.
        </p>

        <div className={styles.ctas}>
          <a
            href="https://parmanasystems.mintlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Start building
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className={styles.secondary}>
            How it works
          </a>
        </div>

        <div className={styles.proofStrip}>
          <span className={styles.proofItem}>
            <span className={styles.proofDot} style={{ background: 'var(--green)' }} />
            Open source · Apache-2.0
          </span>
          <span className={styles.proofSep} aria-hidden="true" />
          <span className={styles.proofItem}>Self-hosted, nothing phones home</span>
          <span className={styles.proofSep} aria-hidden="true" />
          <span className={styles.proofItem}>Ed25519 · append-only · offline-verifiable</span>
        </div>

      </div>
    </section>
  )
}
