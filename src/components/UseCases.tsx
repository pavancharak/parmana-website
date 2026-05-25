import styles from './UseCases.module.css'

const cases = [
  {
    tag: 'Fintech',
    title: 'Loan approved at 2:47am prove it was right',
    description:
      'Your AI approved a INR 240K disbursement overnight. No human reviewed it. When the customer calls, you need more than logs you need a signed record that proves which policy ran, what the inputs were, and that no one touched the record since.',
  },
  {
    tag: 'Healthcare',
    title: 'AI triage suggests escalation',
    description:
      'An AI flags a patient for urgent review. Parmana governs whether escalation is authorized, records the signal, the policy, and the outcome and produces evidence an auditor can verify without access to your production system.',
  },
  {
    tag: 'Insurance',
    title: 'Pre-authorization for a claim',
    description:
      'An underwriting model classifies a claim and recommends approval. Parmana checks the policy version, authorizes execution, and creates a tamper-evident record. If the decision is ever challenged, you can replay the exact governance state.',
  },
  {
    tag: 'AI voice agents',
    title: 'Voice agent escalation in a regulated call',
    description:
      'An AI handles a customer call and recommends escalating to a human. Parmana determines whether escalation is allowed under your policy, logs it cryptographically, and keeps a record that survives a compliance review months later.',
  },
  {
    tag: 'Security ops',
    title: 'Automated containment after an anomaly',
    description:
      "Your AI flags suspicious behavior and recommends isolating a system. Before any action fires, Parmana verifies the escalation is authorized, signs the execution record, and ensures the audit trail can't be silently altered after the fact.",
  },
  {
    tag: 'Enterprise',
    title: 'Approval chains with cryptographic receipts',
    description:
      'Multi-step procurement or access-control approvals. Each decision in the chain is cryptographically signed and chained together. Any party internal or external can verify the full authorization history offline.',
  },
]

export default function UseCases() {
  return (
    <section className={styles.section} id="use-cases">
      <div className={styles.inner}>
        <div className={styles.label}>Use cases</div>
        <h2 className={styles.heading}>Anywhere execution needs a paper trail that holds up</h2>
        <p className={styles.sub}>
          Parmana is valuable the moment an AI-influenced action creates financial risk, compliance
          exposure, or safety consequences and someone might later ask you to prove what happened.
        </p>

        <div className={styles.grid}>
          {cases.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.tag}>{c.tag}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardText}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
