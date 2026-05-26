import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section} id="get-started">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Govern what your AI is allowed to do — and prove it.
        </h2>
        <p className={styles.sub}>
          The rules you set determine what your AI is and isn't allowed to do. Every decision
          is saved in a way anyone can verify — so when someone asks what happened, you have
          a real answer.
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
          Open source. Signed, verifiable records for every decision.
        </p>
      </div>
    </section>
  )
}
