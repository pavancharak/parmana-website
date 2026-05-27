import styles from './HowItWorks.module.css'

const steps = [
  {
    id: '01',
    title: 'AI proposes',
    desc: 'The model reads the situation and recommends an action. It can reason freely.',
    icon: '◎',
  },
  {
    id: '02',
    title: 'Policy check',
    desc: 'Parmana evaluates the proposal against your rules before it runs.',
    icon: '⊞',
  },
  {
    id: '03',
    title: 'Allow or Block',
    desc: 'If the conditions are met, the action proceeds. If not, it stops. Fails closed. Not a warning.',
    icon: '◈',
    highlight: true,
  },
  {
    id: '04',
    title: 'Sign',
    desc: "Every decision gets an Ed25519 signature a proof that can't be forged.",
    icon: '◉',
  },
  {
    id: '05',
    title: 'Append-only log',
    desc: 'The signed record is written and can only be added to never quietly changed.',
    icon: '≡',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>HOW IT WORKS</p>
        <h2 className={styles.heading}>From AI proposal to verified record</h2>
        <p className={styles.sub}>
          Parmana sits between your AI and your systems. The AI advises. Parmana decides
          what's allowed to run and proves it.
        </p>

        <div className={styles.flow}>
          {steps.map((step, i) => (
            <div key={step.id} className={styles.stepWrapper}>
              <div className={`${styles.step} ${step.highlight ? styles.stepHighlight : ''}`}>
                <div className={styles.stepIcon} aria-hidden="true">{step.icon}</div>
                <div className={styles.stepId}>{step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={styles.arrow} aria-hidden="true">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M0 8h16M11 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLabel}>ILLUSTRATIVE SDK CALL</span>
            <span className={styles.codeLang}>TypeScript</span>
          </div>
          <pre className={styles.code}>{`import { executeFromSignals } from '@parmanasystems/core'

const result = await executeFromSignals(
  {
    policyId: 'claims-auto-approve',
    policyVersion: '2.1.0',
    signals: {
      claim_amount:         4200,
      claimant_verified:    true,
      model_recommendation: 'approve',   // from your LLM
    },
  },
  { signer, verifier, replayStore }
)

// result.decision  → 'ALLOWED' | 'BLOCKED'
// result.signature → Ed25519 over every field above
// result.logEntry  → append-only record; verify offline with public key`}</pre>
        </div>

      </div>
    </section>
  )
}
