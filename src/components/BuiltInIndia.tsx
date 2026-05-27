import styles from './BuiltInIndia.module.css'

export default function BuiltInIndia() {
  return (
    <div className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.tricolor} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h2 className={styles.heading}>Built in India. By all of us.</h2>
        <p className={styles.sub}>
          Open-source trust infrastructure made in India, free for everyone, owned by no one.
        </p>
      </div>
    </div>
  )
}
