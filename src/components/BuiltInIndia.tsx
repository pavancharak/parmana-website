import styles from './BuiltInIndia.module.css'

export default function BuiltInIndia() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.triband} aria-hidden="true">
          <span className={styles.band1} />
          <span className={styles.band2} />
          <span className={styles.band3} />
        </div>
        <h2 className={styles.h2}>Built in India. By all of us.</h2>
        <p className={styles.sub}>
          Open-source trust infrastructure , made in India, free for everyone, owned by no one.
        </p>
      </div>
    </section>
  )
}
