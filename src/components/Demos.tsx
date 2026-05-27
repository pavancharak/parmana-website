import { useState, useEffect } from 'react'
import { setupCrypto } from '../lib/crypto'
import type { CryptoSetup } from '../lib/crypto'
import DemoVerify from './DemoVerify'
import DemoPolicyGate from './DemoPolicyGate'
import DemoRewind from './DemoRewind'
import styles from './Demos.module.css'

export default function Demos() {
  const [cryptoSetup, setCryptoSetup] = useState<CryptoSetup | null>(null)

  useEffect(() => {
    setupCrypto().then(setCryptoSetup)
  }, [])

  const mode = cryptoSetup?.mode
  const pubKeyShort = cryptoSetup?.publicKeyHex
    ? `${cryptoSetup.publicKeyHex.slice(0, 8)}…${cryptoSetup.publicKeyHex.slice(-8)}`
    : null

  return (
    <section className={styles.section} id="demos">
      <div className={styles.inner}>

        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>LIVE DEMOS</p>
          <h2 className={styles.heading}>See it work in your browser.</h2>
          <p className={styles.sub}>
            No server. No backend. These run entirely client-side using the Web Crypto API.
          </p>
        </div>

        {/* Keypair status bar */}
        <div className={styles.cryptoBar}>
          {!cryptoSetup && (
            <span className={styles.cryptoLoading}>◐ Generating keypair in your browser…</span>
          )}
          {cryptoSetup && mode === 'Ed25519' && (
            <>
              <span className={styles.cryptoMode}>
                <span className={styles.cryptoDot} />
                Ed25519 keypair — generated this session, lives only in your browser
              </span>
              {pubKeyShort && (
                <span className={styles.cryptoPub}>
                  pub <code>{pubKeyShort}</code>
                </span>
              )}
            </>
          )}
          {cryptoSetup && mode === 'SHA256' && (
            <span className={styles.cryptoFallback}>
              ⚠ Your browser doesn't support Ed25519 — using SHA-256 hash comparison instead. Tamper-detection still works; this is not a cryptographic signature.
            </span>
          )}
        </div>

        {/* Demo A — full width hero demo */}
        <div className={styles.demoA}>
          <DemoVerify cryptoSetup={cryptoSetup} />
        </div>

        {/* Demo B + C — side by side */}
        <div className={styles.demosRow}>
          <DemoPolicyGate cryptoSetup={cryptoSetup} />
          <DemoRewind cryptoSetup={cryptoSetup} />
        </div>

      </div>
    </section>
  )
}
