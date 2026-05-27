import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>P</span>
            <span className={styles.logoWord}>parmana</span>
          </div>
          <p className={styles.tagline}>
            Deterministic governance for AI execution. Open source, self-hosted.
          </p>
        </div>

        <div className={styles.links}>
          <a href="https://parmanasystems.mintlify.app" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href="https://parmanasystems.mintlify.app" target="_blank" rel="noopener noreferrer">Quickstart</a>
          <a href="https://parmanasystems.mintlify.app" target="_blank" rel="noopener noreferrer">Examples</a>
          <a href="https://parmanasystems.mintlify.app" target="_blank" rel="noopener noreferrer">API reference</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 Parmana Systems</span>
        <span className={styles.sep}>·</span>
        <span>Apache-2.0 License</span>
        <span className={styles.sep}>·</span>
        <span>Ed25519 · append-only · offline-verifiable</span>
      </div>
    </footer>
  )
}
