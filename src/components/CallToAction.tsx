import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section} id="get-started">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Govern what your AI is allowed to do.<br />
          <span className={styles.headingMuted}>And prove it.</span>
        </h2>
        <p className={styles.sub}>
          Self-hosted, open source, nothing phones home. The rules you set determine what
          runs. Every decision is signed and logged so when someone asks what happened,
          you have a real answer — not a dashboard.
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
          <a
            href="https://parmanasystems.mintlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read the docs ↗
          </a>
        </div>

        <p className={styles.note}>Apache-2.0 · Ed25519 · deterministic · append-only</p>
      </div>
    </section>
  )
}
