import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Accelerating Business Growth<br />
              <span className={styles.highlight}>in the South East</span>
            </h1>
            
            <p className={styles.subtitle}>
              EBdesign partners with established and ambitious businesses across Kilkenny and the South East of Ireland to unlock growth, streamline operations, and build sustainable competitive advantage.
            </p>
            
            <div className={styles.heroButtons}>
              <Link href="#services" className={styles.btnPrimary}>
                Explore Our Services
              </Link>
              <Link href="/about" className={styles.btnSecondary}>
                Learn Our Story
              </Link>
            </div>
          </div>
          
          {/* Sunflower SVG Graphic */}
          <div className={styles.heroGraphic}>
            <svg viewBox="0 0 200 200" className={styles.sunflower}>
              <circle cx="100" cy="100" r="20" fill="#FFD93D" />
              {/* Petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 100 + 50 * Math.cos(rad);
                const y = 100 + 50 * Math.sin(rad);
                return (
                  <ellipse
                    key={angle}
                    cx={x}
                    cy={y}
                    rx="18"
                    ry="35"
                    fill="#FFE563"
                    transform={`rotate(${angle} ${x} ${y})`}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} id="services">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          
          <div className={styles.serviceGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3>Business Acceleration</h3>
              <p>
                We help growing businesses scale sustainably, from strategy refinement to operational excellence and market expansion.
              </p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Strategic Planning</h3>
              <p>
                Define clear vision and executable roadmaps. We work with leadership to align teams, resources, and objectives for measurable impact.
              </p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚙️</div>
              <h3>Operations & Process</h3>
              <p>
                Optimize workflows, eliminate inefficiencies, and build systems that scale. Better operations drive profitability.
              </p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>👥</div>
              <h3>Team & Leadership</h3>
              <p>
                Build high-performing teams and develop leadership capability. Strong people make strong businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Accelerate?</h2>
          <p>
            Let's talk about where your business is heading and how we can help get you there faster.
          </p>
          <Link href="/contact" className={styles.btnLarge}>
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
