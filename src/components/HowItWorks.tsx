import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'AI proposes',
    desc: 'Your model reasons, recommends, predicts — freely.',
    alarm: false,
  },
  {
    num: '02',
    title: 'Policy check',
    desc: 'The action is measured against your rules.',
    alarm: false,
  },
  {
    num: '03',
    title: 'Allow / block',
    desc: 'Anything outside the rules is stopped. Fails closed.',
    alarm: true,
  },
  {
    num: '04',
    title: 'Sign',
    desc: 'The decision is sealed with a signature that cannot be forged.',
    alarm: false,
  },
  {
    num: '05',
    title: 'Log',
    desc: 'Written to a record that can only be added to, never edited.',
    alarm: false,
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>How It Works</p>
        <h2 className={styles.h2}>Every action passes through one gate.</h2>
        <p className={styles.body}>
          The AI proposes. Parmana enforces your rules — the same way,
          every time — and leaves behind proof anyone can check.
        </p>
        <div className={styles.flow}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.stepWrap}>
              <div className={styles.step}>
                <span className={styles.num}>{step.num}</span>
                <p className={step.alarm ? styles.titleAlarm : styles.title}>{step.title}</p>
                <p className={styles.desc}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
