import { useState } from 'react'
import type { CryptoSetup } from '../lib/crypto'
import { signRecord } from '../lib/crypto'
import styles from './DemoPolicyGate.module.css'

interface Props {
  cryptoSetup: CryptoSetup | null
}

type Outcome = 'ALLOWED' | 'BLOCKED'

interface Result {
  outcome: Outcome
  reason: string
  record: string
  signature: string
}

function evaluatePolicy(action: string, amount: number): { outcome: Outcome; reason: string } {
  if (action === 'deny_claim') {
    return { outcome: 'BLOCKED', reason: 'Manual denials require supervisor sign-off before logging' }
  }
  if (action === 'escalate') {
    return { outcome: 'ALLOWED', reason: 'Escalations always permitted under policy' }
  }
  if (amount < 5000) {
    return { outcome: 'ALLOWED', reason: `$${amount.toLocaleString()} is under the $5,000 auto-approve threshold` }
  }
  return {
    outcome: 'BLOCKED',
    reason: `$${amount.toLocaleString()} exceeds $5,000 — requires human review before action`,
  }
}

export default function DemoPolicyGate({ cryptoSetup }: Props) {
  const [action, setAction] = useState('approve_claim')
  const [amount, setAmount] = useState(4200)
  const [result, setResult] = useState<Result | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = async () => {
    if (!cryptoSetup || isRunning) return
    setIsRunning(true)
    setResult(null)

    // Brief deliberate pause — this is a consequential decision
    await new Promise(r => setTimeout(r, 320))

    const { outcome, reason } = evaluatePolicy(action, amount)
    const record = {
      action,
      amount,
      policy: 'claims-v1',
      decision: outcome,
      reason,
      timestamp: new Date().toISOString(),
    }
    const recordStr = JSON.stringify(record, null, 2)
    const signature = await signRecord(cryptoSetup, recordStr)

    setResult({ outcome, reason, record: recordStr, signature })
    setIsRunning(false)
  }

  const shortSig = result?.signature
    ? `${result.signature.slice(0, 22)}…${result.signature.slice(-6)}`
    : ''

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.demoId}>DEMO B</div>
        <h3 className={styles.title}>Policy Gate</h3>
        <p className={styles.desc}>Pick an action and amount. Parmana evaluates your policy before anything runs.</p>
      </div>

      <div className={styles.body}>
        <div className={styles.policyBox}>
          <div className={styles.policyLabel}>ACTIVE POLICY</div>
          <code className={styles.policyRule}>
            <span className={styles.ruleAllow}>ALLOW</span>{' '}
            approve_claim where amount &lt; $5,000
          </code>
          <code className={styles.policyRule}>
            <span className={styles.ruleBlock}>BLOCK</span>{' '}
            approve_claim where amount ≥ $5,000
          </code>
          <code className={styles.policyRule}>
            <span className={styles.ruleBlock}>BLOCK</span>{' '}
            deny_claim (requires supervisor)
          </code>
          <code className={styles.policyRule}>
            <span className={styles.ruleAllow}>ALLOW</span>{' '}
            escalate (always)
          </code>
        </div>

        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="pg-action">ACTION</label>
            <select
              id="pg-action"
              className={styles.select}
              value={action}
              onChange={e => setAction(e.target.value)}
              disabled={isRunning}
            >
              <option value="approve_claim">approve_claim</option>
              <option value="deny_claim">deny_claim</option>
              <option value="escalate">escalate</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="pg-amount">AMOUNT ($)</label>
            <input
              id="pg-amount"
              type="number"
              className={styles.input}
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              min={0}
              disabled={isRunning}
            />
          </div>
        </div>

        <button
          className={`${styles.runBtn} ${isRunning ? styles.runBtnRunning : ''}`}
          onClick={handleRun}
          disabled={!cryptoSetup || isRunning}
        >
          {isRunning ? '◐ Evaluating…' : 'Run →'}
        </button>

        {result && (
          <div className={`${styles.result} ${result.outcome === 'ALLOWED' ? styles.resultAllowed : styles.resultBlocked}`}>
            <div className={styles.resultOutcome}>
              {result.outcome === 'ALLOWED' ? '✓' : '✗'} {result.outcome}
            </div>
            <p className={styles.resultReason}>{result.reason}</p>
            <div className={styles.resultSig}>
              <span className={styles.sigKey}>SIGNED</span>
              <code className={styles.sigVal}>{shortSig}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
