import styles from './ParmanaOrigin.module.css'

export default function ParmanaOrigin() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>THE NAME</p>
        <h2 className={styles.heading}>Parmana means proof.</h2>
        <p className={styles.body}>
          From the Sanskrit <span className={styles.term}>pramana</span> a valid means
          of knowing something is true. {"That's"} the whole idea: trust you {"don't"} have
          to take on faith. Built in the open, free for anyone, anywhere to inspect,
          run, and verify.
        </p>
      </div>
    </section>
  )
}
