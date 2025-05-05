// components/Footer.jsx
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>GalleryLand</div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Accueil</Link>
          <Link href="/gallery" className={styles.link}>Galerie</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
        <div className={styles.copy}>&copy; {new Date().getFullYear()} GalleryLand. Tous droits réservés.</div>
      </div>
    </footer>
  )
}
