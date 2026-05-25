import styles from './WhoItsFor.module.css'

const audiences = [
  {
    icon: '\u{1F4B3}',
    title: 'Fintech & financial teams',
    description:
      "You're shipping loan approvals, payment authorization, or trading workflows. Regulations like MiFID II, SOC 2, and PCI require you to prove a specific policy governed a specific transaction. Logs don't fully satisfy that. A signed, replayable attestation does.",
  },
  {
    icon: '\u{1F916}',
    title: 'AI platform & product teams',
    description:
      'Your agent can send money, modify records, or trigger real-world actions. "The model decided" is not an audit trail. You need a layer that records what authorized the action and makes that record tamper-evident from the moment it\'s created.',
  },
  {
    icon: '\u{1F3E5}',
    title: 'Regulated industries',
    description:
      'Healthcare, insurance, government, enterprise compliance any domain where an auditor, regulator, or legal team might one day ask: "prove that the right policy ran, with the right inputs, and that nobody changed the record." That question always comes at the worst possible time.',
  },
]

export default function WhoItsFor() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.inner}>
        <div className={styles.label}>Who it's for</div>
        <h2 className={styles.heading}>Built for teams where decisions have consequences</h2>
        <p className={styles.sub}>
          Parmana is not for chatbots or creative AI workflows. It's for systems where something real
          happens when the AI makes a call.
        </p>

        <div className={styles.grid}>
          {audiences.map((a) => (
            <div key={a.title} className={styles.card}>
              <div className={styles.icon}>{a.icon}</div>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardText}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
