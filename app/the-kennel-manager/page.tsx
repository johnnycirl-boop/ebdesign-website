import type { Metadata } from 'next';
import styles from './the-kennel-manager.module.css';

export const metadata: Metadata = {
  title: 'The Kennel Manager | An EBdesign Brand',
  description:
    'The Kennel Manager is a brand of EBdesign — modern kennel management software for boarding kennels, doggy day care, and catteries across Ireland and the UK.',
  openGraph: {
    title: 'The Kennel Manager | An EBdesign Brand',
    description:
      'The Kennel Manager is a brand of EBdesign — modern kennel management software for boarding kennels, doggy day care, and catteries.',
    url: 'https://ebdesign.ie/the-kennel-manager',
    type: 'website',
  },
};

export default function TheKennelManager() {
  return (
    <main>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>An EBdesign Brand</span>
          <h1>The Kennel Manager</h1>
          <p>
            Modern kennel management software for boarding kennels, doggy day care,
            and catteries.
          </p>
        </div>
      </section>

      {/* Intro / relationship statement */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <p className={styles.lead}>
            The Kennel Manager is a brand of EBdesign, the trading name of
            EB DESIGN LIMITED (Kilkenny, Ireland).
          </p>
          <p>
            Built and operated by EBdesign in Kilkenny, Ireland, The Kennel Manager
            is our software product for pet boarding businesses. It brings booking
            management, customer and pet profiles, automated billing, and compliance
            tools together in one simple platform — so kennel owners can spend less
            time on admin and more time with the animals in their care.
          </p>
          <p>
            The product is delivered at{' '}
            <a
              href="https://www.thekennelmanager.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              thekennelmanager.com
            </a>
            , where boarding kennels, day care providers, and catteries can sign up
            and get started.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2>What The Kennel Manager Does</h2>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Booking Management</h3>
              <p>
                Take and manage bookings online, track availability, and keep the
                whole calendar in one place.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Customer &amp; Pet Profiles</h3>
              <p>
                Keep detailed records for every customer and pet — vaccinations,
                dietary needs, medical notes, and more.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Automated Billing</h3>
              <p>
                Invoices, deposits, and online payments handled automatically, so
                nothing slips through the cracks.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>UK &amp; Ireland Compliance</h3>
              <p>
                Built-in tools for local licensing and record-keeping requirements
                for boarding businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Run a kennel, cattery, or day care?</h2>
          <p>
            See how The Kennel Manager can simplify the day-to-day of running your
            pet boarding business.
          </p>
          <a
            href="https://www.thekennelmanager.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Visit thekennelmanager.com
          </a>
        </div>
      </section>
    </main>
  );
}
