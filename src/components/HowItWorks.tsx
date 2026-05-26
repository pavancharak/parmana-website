import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Your AI recommends',
    description:
      "The model does what it's good at: reads the situation and suggests an action.",
    detail: 'Works with any AI model or automated system. The output is a suggestion, not a command.',
  },
  {
    number: '02',
    title: 'Parmana decides',
    description:
      "Your rules, not the AI, determine whether that action is allowed. If the conditions aren't met, it stops. Not a warning. An actual stop.",
    detail: 'Same situation always produces the same outcome — regardless of which AI model you use.',
  },
  {
    number: '03',
    title: 'The proof is recorded',
    description:
      'Every decision is signed and saved. Anyone can later check that record is real and unchanged, without needing access to your systems.',
    detail: "If the record was altered after it was saved, the check fails. That's the point.",
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <div className={styles.label}>How it works</div>
        <h2 className={styles.heading}>From suggestion to signed record</h2>
        <p className={styles.sub}>
          Parmana sits between your AI and your systems. The AI makes suggestions. Parmana decides
          what's actually allowed to run.
        </p>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber}>{s.number}</div>
                {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
              </div>
              <div className={styles.stepRight}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.description}</p>
                <p className={styles.stepDetail}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLabel}>Quick look ,one function call</span>
            <span className={styles.codeLang}>TypeScript</span>
          </div>
          <pre className={styles.code}>{`import { executeFromSignals } from '@parmanasystems/core'

const attestation = await executeFromSignals(
  {
    policyId:      'loan-approval',
    policyVersion: '2.1.0',
    signals: {
      credit_score:         712,
      dti_ratio:            0.31,
      model_recommendation: 'approve',  // from your LLM
    },
  },
  signer,
  verifier,
  replayStore
)

// attestation.signature : Ed25519 over every field above
// Anyone with the public key can verify this, offline, forever`}</pre>
        </div>
      </div>
    </section>
  )
}
