import styles from './about.module.css';

export default function About() {
  return (
    <main>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.container}>
          <h1>Our Story</h1>
          <p>Building extraordinary businesses across the South East since day one.</p>
        </div>
      </section>

      {/* About Content */}
      <section className={styles.aboutContent}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column */}
            <div>
              <h2>Who We Are</h2>
              <p>
                EBdesign is a team of experienced business professionals based in Kilkenny, at the heart of the South East of Ireland. We work with ambitious businesses—from established companies seeking new growth to emerging leaders building something special.
              </p>
              
              <h3>Our Foundation</h3>
              <p>
                With decades of combined experience across strategy, operations, finance, and leadership development, we bring deep expertise and real-world perspective to every engagement. We've walked in our clients' shoes. We understand the challenges of scaling a business, managing rapid growth, and staying competitive in an evolving market.
              </p>
            </div>
            
            {/* Right Column */}
            <div>
              <h2>What Drives Us</h2>
              <p>
                We believe the South East of Ireland is home to world-class talent and untapped potential. Our mission is simple: help local businesses unlock that potential, grow sustainably, and compete at the highest level.
              </p>
              
              <h3>How We Work</h3>
              <p>
                We don't believe in one-size-fits-all solutions. Every business is unique, with its own DNA, challenges, and opportunities. We partner closely with our clients—as advisors, strategists, and sometimes as catalysts for change—to design and execute strategies that drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Principles</h2>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>✓ Partnership</h3>
              <p>We succeed when you succeed. We're invested in your wins and accountable for your outcomes.</p>
            </div>
            
            <div className={styles.valueCard}>
              <h3>✓ Pragmatism</h3>
              <p>We focus on what works. Strategy without execution is just talk. We deliver practical, actionable results.</p>
            </div>
            
            <div className={styles.valueCard}>
              <h3>✓ Integrity</h3>
              <p>We tell you the truth, even when it's uncomfortable. Trust is built on honesty and follow-through.</p>
            </div>
            
            <div className={styles.valueCard}>
              <h3>✓ Local Pride</h3>
              <p>The South East matters to us. We're building here, investing here, and committed to the region's growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2>Why Partner With Us</h2>
          
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <span className={styles.icon}>🎯</span>
              <h3>Focused Expertise</h3>
              <p>We specialize in growth and operational transformation. It's what we do, and we're damn good at it.</p>
            </div>
            
            <div className={styles.whyCard}>
              <span className={styles.icon}>🤝</span>
              <h3>True Partnership</h3>
              <p>Not consultants who parachute in and out. We partner for the long term and get invested in your success.</p>
            </div>
            
            <div className={styles.whyCard}>
              <span className={styles.icon}>🏆</span>
              <h3>Proven Track Record</h3>
              <p>We've helped businesses double revenue, streamline operations, and enter new markets. Results matter.</p>
            </div>
            
            <div className={styles.whyCard}>
              <span className={styles.icon}>🌍</span>
              <h3>Local Roots</h3>
              <p>We know the region, the market, and the people. That local knowledge is your advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Let's Talk About Your Future</h2>
          <p>Whether you're just starting to think about growth or ready to accelerate, we'd love to explore what's possible for your business.</p>
          <a href="/contact" className={styles.ctaBtn}>
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
