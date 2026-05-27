import { useState, useEffect } from 'react'
import type { CryptoSetup } from '../lib/crypto'
import { signRecord, verifyRecord } from '../lib/crypto'
import styles from './DemoVerify.module.css'

const INITIAL_RECORD = JSON.stringify(
  {
    action: 'approve_claim',
    claim_id: 'CLM-2024-04891',
    amount: 4200,
    policy: 'auto-approve-under-5000',
    decision: 'ALLOWED',
    timestamp: '2024-01-15T09:23:41Z',
  },
  null,
  2
)

type Status = 'loading' | 'signing' | 'verified' | 'tampered'

interface Props {
  cryptoSetup: CryptoSetup | null
}

export default function DemoVerify({ cryptoSetup }: Props) {
  const [recordText, setRecordText] = useState(INITIAL_RECORD)
  const [originalSig, setOriginalSig] = useState('')
  const [status, setStatus] = useState<Status>('loading')
  const [cryptoReady, setCryptoReady] = useState(false)

  // Sign the initial record once crypto is ready
  useEffect(() => {
    if (!cryptoSetup) {
      setStatus('loading')
      return
    }
    let cancelled = false
    setStatus('signing')
    signRecord(cryptoSetup, INITIAL_RECORD).then(sig => {
      if (!cancelled) {
        setOriginalSig(sig)
        setCryptoReady(true)
      }
    })
    return () => { cancelled = true }
  }, [cryptoSetup])

  // Re-verify whenever the record text changes (after crypto is ready)
  useEffect(() => {
    if (!cryptoSetup || !originalSig || !cryptoReady) return
    let cancelled = false
    const timer = setTimeout(async () => {
      if (cancelled) return
      const valid = await verifyRecord(cryptoSetup, recordText, originalSig)
      if (!cancelled) setStatus(valid ? 'verified' : 'tampered')
    }, 80)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [recordText, cryptoSetup, originalSig, cryptoReady])

  const handleReset = async () => {
    if (!cryptoSetup) return
    setRecordText(INITIAL_RECORD)
    setStatus('signing')
    setCryptoReady(false)
    const sig = await signRecord(cryptoSetup, INITIAL_RECORD)
    setOriginalSig(sig)
    setCryptoReady(true)
  }

  const isVerified = status === 'verified'
  const isTampered = status === 'tampered'

  const shortSig = originalSig
    ? `${originalSig.slice(0, 22)}…${originalSig.slice(-6)}`
    : '—'

  const pubKeyDisplay = cryptoSetup?.publicKeyHex
    ? `${cryptoSetup.publicKeyHex.slice(0, 16)}…${cryptoSetup.publicKeyHex.slice(-8)}`
    : ''

  return (
    <div className={`${styles.card} ${isTampered ? styles.cardTampered : isVerified ? styles.cardVerified : ''}`}>
      <div className={styles.header}>
        <div className={styles.demoId}>DEMO A</div>
        <h3 className={styles.title}>Live Verify &amp; Tamper</h3>
        <p className={styles.desc}>
          {cryptoSetup?.mode === 'Ed25519'
            ? 'A real Ed25519 keypair was generated in your browser when this page loaded. Edit any character below.'
            : cryptoSetup?.mode === 'SHA256'
            ? 'Your browser falls back to SHA-256 hash comparison (not a cryptographic signature). Tamper-detection still works — edit any character.'
            : 'Generating keypair in your browser…'}
        </p>
      </div>

      <div className={styles.body}>
        <label className={styles.fieldLabel}>DECISION RECORD</label>
        <textarea
          className={`${styles.textarea} ${isTampered ? styles.textareaTampered : isVerified ? styles.textareaVerified : ''}`}
          value={recordText}
          onChange={e => setRecordText(e.target.value)}
          spellCheck={false}
          disabled={status === 'loading' || status === 'signing'}
          aria-label="Decision record — editable"
        />

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaKey}>SIGNATURE</span>
            <code className={styles.metaVal}>{shortSig}</code>
          </div>
          {pubKeyDisplay && (
            <div className={styles.metaItem}>
              <span className={styles.metaKey}>PUBLIC KEY</span>
              <code className={styles.metaVal}>{pubKeyDisplay}</code>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <div
          className={`${styles.badge} ${
            isTampered ? styles.badgeTampered :
            isVerified ? styles.badgeVerified :
            styles.badgeLoading
          }`}
        >
          {status === 'loading' && '◐ Initializing…'}
          {status === 'signing' && '◐ Signing…'}
          {status === 'verified' && '✓ VERIFIED'}
          {status === 'tampered' && '✗ TAMPERED — SIGNATURE INVALID'}
        </div>
        <button
          className={styles.resetBtn}
          onClick={handleReset}
          disabled={status === 'loading' || status === 'signing'}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
