import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>EBdesign</h4>
            <p>Professional business acceleration for the South East of Ireland.</p>
          </div>
          
          <div className={styles.section}>
            <h4>Location</h4>
            <p>Kilkenny, Ireland</p>
          </div>

          <div className={styles.section}>
            <h4>Our Brands</h4>
            <p>
              <a href="https://www.thekennelmanager.com" target="_blank" rel="noopener noreferrer">
                The Kennel Manager
              </a>
              {' '}&mdash; kennel management software, a brand of EBdesign.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <p>
              <a href="mailto:info@ebdesign.ie">info@ebdesign.ie</a>
            </p>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear} EBdesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
