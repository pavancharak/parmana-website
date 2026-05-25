import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section} id="get-started">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Start with a signed attestation in five minutes
        </h2>
        <p className={styles.sub}>
          Governance isn't what you add after something goes wrong. It's what lets you prove
          nothing went wrong. The quickstart gets you to a verifiable, cryptographically signed
          decision record with a single function call.
        </p>

        <div className={styles.install}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cmd}>npm install @parmanasystems/core</span>
        </div>

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
        </div>

        <p className={styles.note}>
          Open source · Apache 2.0 · No cloud lock-in · Works offline
        </p>
      </div>
    </section>
  )
}
