import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Open source · Apache 2.0
        </div>

        <h1 className={styles.headline}>
          Prove exactly what your AI was allowed to do <br />
          <span className={styles.accent}>before anyone asks you to.</span>
        </h1>

        <p className={styles.sub}>
          Most AI tools watch what your AI does and raise a flag when something looks off. Parmana goes
          further: it decides whether the action is even allowed to run, and keeps a signed record you can
          prove later. The AI can advise. It doesn't get the final say.
        </p>

        <div className={styles.ctas}>
          <a
            href="https://parmanasystems.mintlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Read the docs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className={styles.secondary}>
            See how it works
          </a>
        </div>

        <div className={styles.tagline}>
          <span className={styles.mono}>The AI can advise.</span>
          <span className={styles.sep}>·</span>
          <span className={styles.mono}>Parmana decides what's allowed to run.</span>
        </div>
      </div>
    </section>
  )
}
