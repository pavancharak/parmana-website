import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Your AI produces a signal',
    description:
      'Your model classifies, recommends, or flags something a credit score, a triage suggestion, a fraud risk score. That output lands in Parmana as a signal, not as a decision.',
    detail: 'Parmana accepts signals from any source: LLMs, classifiers, rule engines, human reviewers.',
  },
  {
    number: '02',
    title: 'Parmana checks your policy and signs the result',
    description:
      'Parmana evaluates the signal against your policy the exact version you deployed and determines whether execution is allowed. The outcome, every input, and the policy version are hashed together and signed with a private key.',
    detail: 'Same inputs, same policy version, same result. Always. That determinism is what makes the signature meaningful.',
  },
  {
    number: '03',
    title: 'Anyone can verify the record, forever',
    description:
      'The signed proof bundle travels with the decision. No database access needed, no call to your servers. Anyone holding your public key — an auditor, a regulator, a partner can verify that the record is authentic and unmodified.',
    detail: "If any field was altered after signing, verification fails. That's the point.",
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <div className={styles.label}>How it works</div>
        <h2 className={styles.heading}>Three steps from signal to proof</h2>
        <p className={styles.sub}>
          Parmana sits between your AI and your execution layer. It doesn't replace the AI ,it
          governs whether the AI's recommendation is allowed to become an action.
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
