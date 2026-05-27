import styles from './ForDevelopers.module.css'

const snippet = `import { parmana } from '@parmanasystems/core'

// illustrative swap in your real SDK call
const decision = await parmana.execute({
  action:  'approve_claim',
  context: { claim_id: 'CLM-04891', amount: 4200 },
  policy:  'claims-v2.1',
})

decision.verify()          // → true
decision.signature         // → 'ed25519:a3f2c1...'
decision.log_entry.sealed  // → append-only, tamper-evident`

export default function ForDevelopers() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>FOR DEVELOPERS</p>
        <h2 className={styles.heading}>One install. One function call.</h2>
        <p className={styles.sub}>
          Add Parmana to any Node.js or TypeScript project. It wraps around your existing
          AI calls you keep your model, your prompts, your logic.
        </p>

        <div className={styles.installLine}>  
          <span className={styles.prompt}>$</span>
          <code className={styles.cmd}>npm install @parmanasystems/core</code>
          <button
            className={styles.copyBtn}
            onClick={() => void navigator.clipboard?.writeText('npm install @parmanasystems/core')}
            aria-label="Copy install command"
          >
            Copy
          </button>
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLabel}>ILLUSTRATIVE SDK CALL</span>
            <span className={styles.codeLang}>TypeScript</span>
          </div>
          <pre className={styles.code}>{snippet}</pre>
        </div>

        <div className={styles.links}>
          <a
            href="https://parmanasystems.mintlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Read the docs ↗
          </a>
          <a
            href="https://parmanasystems.mintlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkSecondary}
          >
            See the 14 worked examples ↗
          </a>
        </div>
      </div>
    </section>
  )
}
