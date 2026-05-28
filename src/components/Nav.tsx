import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.wordmark}>
          <span className={styles.dot} aria-hidden="true" />
          Parmana
        </a>
        <nav className={styles.links} aria-label="Primary navigation">
          <a href="#how-it-works" className={styles.link}>How it works</a>
          <a href="#use-cases" className={styles.link}>Use cases</a>
          <a href="#the-name" className={styles.link}>The name</a>
          <a href="#start" className={styles.cta}>Start building</a>
        </nav>
      </div>
    </header>
  )
}
