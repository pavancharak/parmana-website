import styles from './ContrastBand.module.css'

export default function ContrastBand() {
  return (
    <div className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.other}>
          <span className={styles.label}>Other tools say:</span>
          <span className={styles.quote}>"We help you understand what your AI decided."</span>
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.parmana}>
          <span className={styles.label}>Parmana says:</span>
          <span className={styles.quote}>"I don't decide what's allowed — you already did. I enforce it, exactly, and I can prove it."</span>
        </div>
      </div>
    </div>
  )
}
