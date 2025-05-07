import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Groupe logo + nom */}
        <div className={styles.logoGroup}>
  <Link href="/" className={styles.logoLink}>
    <Image
      src="/logo.webp"
      alt="Logo"
      width={48}
      height={48}
      className={styles.logoImage}
    />
    <span className={styles.logo}>GalleryLand</span>
  </Link>
</div>


        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Accueil</Link>
          <Link href="/gallery" className={styles.link}>Galerie</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} GalleryLand. Tous droits réservés.
      </div>
    </footer>
  );
}
