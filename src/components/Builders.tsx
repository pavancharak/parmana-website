import styles from './Builders.module.css'

const builders = [
  {
    name: "Pavan Charak",
    role: "Founder & Engineer",
    bio: "Engineer, product manager, and business developer, with two earlier ventures behind him. Started Parmana after seeing that the way most products are built today is exactly what holds AI back from its real potential.",
    linkedin: "https://www.linkedin.com/in/pavancharak/",
  },
  {
    name: "Mohinder Singh Charak",
    role: "Investor & Advisor",
    bio: "A retired Indian Army officer whose career in service shapes how Parmana thinks about accountability.",
    linkedin: "https://www.linkedin.com/in/mohinder-singh-charak-b246bb346/",
  },
]

export default function Builders() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Builders</p>
        <h2 className={styles.h2}>Built by a founder and a veteran.</h2>
        <p className={styles.intro}>
          Different roads to the same conclusion: AI deserves proof, not promises.
        </p>
        <div className={styles.grid}>
          {builders.map((b) => (
            <div key={b.name} className={styles.block}>
              <h3 className={styles.name}>{b.name}</h3>
              <p className={styles.role}>{b.role}</p>
              <p className={styles.bio}>{b.bio}</p>
              <a
                href={b.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
