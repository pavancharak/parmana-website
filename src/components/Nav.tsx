import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>P</span>
          <span className={styles.logoWord}>parmana</span>
        </a>
        <div className={styles.links}>
          <a href="#how-it-works">How it works</a>
          <a href="#use-cases">Use cases</a>
          <a
            href="https://parmanasystems.mintlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.docsLink}
          >
            Docs
          </a>
        </div>
      </nav>
    </header>
  )
}
