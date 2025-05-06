import Link from 'next/link';
import styles from '/Users/marcouflebar/Documents/berecoufV2/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.innerHeader}>
        <div className={styles.navWrapper}>
          <Link href="/" className={styles.button}><span>☼ Accueil ☼</span></Link>
          <Link href="/galerie" className={styles.button}><span>☼ Galerie ☼</span></Link>
          <Link href="/contact" className={styles.button}><span>☼ Contact ☼</span></Link>
        </div>
        <div className={styles.cartWrapper}>
          <Link href="/panier" className={styles.button}><span>☼ 🛒 ☼</span></Link>
        </div>
      </div>
    </header>
  );
}
