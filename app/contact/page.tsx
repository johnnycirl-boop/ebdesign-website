import Link from 'next/link';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <main>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.container}>
          <h1>Get in Touch</h1>
          <p>We&apos;d love to hear about your business and explore how we can help.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Left Column - Info */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>✉️</div>
                <h3>Email</h3>
                <a href="mailto:info@ebdesign.ie">info@ebdesign.ie</a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.icon}>📍</div>
                <h3>Location</h3>
                <p>Kilkenny, Ireland</p>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.icon}>💬</div>
                <h3>Let&apos;s Talk</h3>
                <p>Whether you&apos;re looking to scale, streamline, or strategise — we&apos;d love to hear from you.</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <form className={styles.contactForm} action="https://formspree.io/f/placeholder" method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="you@company.ie" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required placeholder="Tell us about your business and how we can help..." />
              </div>
              <button type="submit" className={styles.btnPrimary}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Prefer a Direct Conversation?</h2>
          <p>Drop us an email and we&apos;ll get back to you within 24 hours.</p>
          <a href="mailto:info@ebdesign.ie" className={styles.ctaBtn}>
            Email Us Directly
          </a>
        </div>
      </section>
    </main>
  );
}
