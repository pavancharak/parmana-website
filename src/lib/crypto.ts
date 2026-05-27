/**
 * Parmana demo crypto utilities.
 *
 * Attempts real Ed25519 via SubtleCrypto (Chrome 113+, Firefox 130+, Safari 17+).
 * Falls back to SHA-256 hash comparison and labels the mode honestly.
 */

export type CryptoMode = 'Ed25519' | 'SHA256'

export interface CryptoSetup {
  mode: CryptoMode
  keypair?: CryptoKeyPair
  publicKeyHex: string
}

function bufToBase64(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
}

function base64ToBuf(b64: string): Uint8Array {
  return Uint8Array.from(atob(b64), c => c.charCodeAt(0))
}

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function setupCrypto(): Promise<CryptoSetup> {
  try {
    // Ed25519 generateKey — cast through unknown to avoid strict-lib overload mismatch
    const kp = await (crypto.subtle as unknown as {
      generateKey(
        algorithm: { name: string },
        extractable: boolean,
        keyUsages: string[]
      ): Promise<CryptoKeyPair>
    }).generateKey(
      { name: 'Ed25519' },
      true,
      ['sign', 'verify']
    )

    // Confirm sign/verify actually works before committing to this mode
    const testBuf = new TextEncoder().encode('ok')
    const sig = await (crypto.subtle as unknown as {
      sign(algorithm: string, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>
    }).sign('Ed25519', kp.privateKey, testBuf)

    await (crypto.subtle as unknown as {
      verify(
        algorithm: string,
        key: CryptoKey,
        signature: BufferSource,
        data: BufferSource
      ): Promise<boolean>
    }).verify('Ed25519', kp.publicKey, sig, testBuf)

    // Export the public key as raw bytes (32 bytes = 64 hex chars)
    const rawPub = await (crypto.subtle as unknown as {
      exportKey(format: string, key: CryptoKey): Promise<ArrayBuffer>
    }).exportKey('raw', kp.publicKey)

    return {
      mode: 'Ed25519',
      keypair: kp,
      publicKeyHex: bufToHex(rawPub),
    }
  } catch {
    // SHA-256 fallback: hash comparison, not a real signature
    return {
      mode: 'SHA256',
      keypair: undefined,
      publicKeyHex: '',
    }
  }
}

export async function signRecord(setup: CryptoSetup, data: string): Promise<string> {
  const encoded = new TextEncoder().encode(data)

  if (setup.mode === 'Ed25519' && setup.keypair) {
    const sig = await (crypto.subtle as unknown as {
      sign(algorithm: string, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>
    }).sign('Ed25519', setup.keypair.privateKey, encoded)
    return bufToBase64(sig)
  }

  // SHA-256 fallback
  const hash = await crypto.subtle.digest('SHA-256', encoded)
  return bufToBase64(hash)
}

export async function verifyRecord(
  setup: CryptoSetup,
  data: string,
  sigB64: string
): Promise<boolean> {
  const encoded = new TextEncoder().encode(data)

  if (setup.mode === 'Ed25519' && setup.keypair) {
    try {
      const sig = base64ToBuf(sigB64)
      return await (crypto.subtle as unknown as {
        verify(
          algorithm: string,
          key: CryptoKey,
          signature: ArrayBuffer,
          data: ArrayBuffer
        ): Promise<boolean>
      }).verify('Ed25519', setup.keypair.publicKey, sig.buffer as ArrayBuffer, encoded.buffer as ArrayBuffer)
    } catch {
      return false
    }
  }

  // SHA-256 fallback: recompute hash and compare
  try {
    const hash = await crypto.subtle.digest('SHA-256', encoded)
    return bufToBase64(hash) === sigB64
  } catch {
    return false
  }
}
