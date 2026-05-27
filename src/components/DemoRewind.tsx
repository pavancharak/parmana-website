import { useState } from 'react'
import type { CryptoSetup } from '../lib/crypto'
import { signRecord } from '../lib/crypto'
import styles from './DemoRewind.module.css'

// Fixed record no Date.now(), no Math.random().
// Same inputs → same signature, every time.
const FIXED_RECORD = JSON.stringify(
  {
    action: 'approve_claim',
    claim_id: 'CLM-2024-04891',
    amount: 4200,
    policy: 'auto-approve-under-5000',
    decision: 'ALLOWED',
    run_id: 'deterministic',
    timestamp: '2024-01-15T09:23:41Z',
  },
  null,
  2
)

interface Run {
  sig: string
  at: string
}

interface Props {
  cryptoSetup: CryptoSetup | null
}

export default function DemoRewind({ cryptoSetup }: Props) {
  const [runs, setRuns] = useState<Run[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = async () => {
    if (!cryptoSetup || isRunning) return
    setIsRunning(true)
    setRuns([])

    await new Promise(r => setTimeout(r, 200))
    const sig1 = await signRecord(cryptoSetup, FIXED_RECORD)
    setRuns([{ sig: sig1, at: new Date().toLocaleTimeString() }])

    await new Promise(r => setTimeout(r, 280))
    const sig2 = await signRecord(cryptoSetup, FIXED_RECORD)
    setRuns([
      { sig: sig1, at: new Date().toLocaleTimeString() },
      { sig: sig2, at: new Date().toLocaleTimeString() },
    ])

    setIsRunning(false)
  }

  const identical = runs.length === 2 && runs[0].sig === runs[1].sig

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.demoId}>DEMO C</div>
        <h3 className={styles.title}>Rewind</h3>
        <p className={styles.desc}>
          Same input. Same rules. Same signature every time.
          {' '}Run this again years from now and get the exact same proof.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.recordPreview}>
          <div className={styles.previewLabel}>FIXED DECISION RECORD</div>
          <pre className={styles.previewCode}>{FIXED_RECORD}</pre>
        </div>

        <button
          className={`${styles.runBtn} ${isRunning ? styles.runBtnRunning : ''}`}
          onClick={handleRun}
          disabled={!cryptoSetup || isRunning}
        >
          {isRunning ? '◐ Running…' : 'Run twice →'}
        </button>

        {runs.length > 0 && (
          <div className={styles.results}>
            {runs.map((run, i) => (
              <div key={i} className={styles.runRow}>
                <span className={styles.runLabel}>Run {i + 1}</span>
                <code className={styles.runSig}>{run.sig.slice(0, 32)}…</code>
                <span className={styles.runTime}>{run.at}</span>
              </div>
            ))}

            {identical && (
              <div className={styles.match}>
                <span className={styles.matchIcon}>✓</span>
                Byte-for-byte identical.{' '}
                <span className={styles.matchNote}>
                  Ed25519 is deterministic — same key + same message = same signature, always.
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
