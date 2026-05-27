import styles from './Problem.module.css'

export default function Problem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>THE PROBLEM</p>
        <h2 className={styles.heading}>
          AI is handling real decisions.<br />
          <span className={styles.headingMuted}>The record is whatever the vendor says it is.</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardNum}>01</div>
            <h3 className={styles.cardTitle}>AI is handed real authority</h3>
            <p className={styles.cardText}>
              Approving claims. Flagging fraud. Routing medical triage. These aren't suggestions
              anymore they're actions with real consequences.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNum}>02</div>
            <h3 className={styles.cardTitle}>When something goes wrong, you can't prove anything</h3>
            <p className={styles.cardText}>
              The logs live on the vendor's servers. You can't prove what the AI was
              allowed to do, what it actually did, or whether the record was changed after the fact.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNum}>03</div>
            <h3 className={styles.cardTitle}>Observation isn't governance</h3>
            <p className={styles.cardText}>
              Existing tools watch what happened and surface it afterward. They can't stop a bad
              action before it runs. They can't prove it was stopped. The AI still controls the outcome.
            </p>
          </div>
        </div>

        <div className={styles.contrast}>
          <div className={styles.contrastSide}>
            <span className={styles.contrastLabel}>Other tools say:</span>
            <span className={styles.contrastQuote}>
              "We help you understand what your AI decided."
            </span>
          </div>
          <div className={styles.contrastDiv} aria-hidden="true" />
          <div className={`${styles.contrastSide} ${styles.contrastRight}`}>
            <span className={styles.contrastLabel}>Parmana says:</span>
            <span className={styles.contrastQuote}>
              "We decide whether that action is allowed to run and we can prove it."
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
