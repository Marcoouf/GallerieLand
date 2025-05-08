
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css'; // si Header.jsx est dans /components

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmartScroll = (id) => {
        if (pathname === '/') {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${id}`)
    }
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.innerHeader}>
        <div className={styles.navWrapper}>
    <button onClick={() => handleSmartScroll('accueil')}className={styles.button}>☼ Accueil ☼</button>
    <button onClick={() => handleSmartScroll('gallery')}className={styles.button}>☼ Galerie ☼</button>
    <button onClick={() => handleSmartScroll('contact')}className={styles.button}>☼ Contact ☼</button>

   <div className={styles.cartWrapper}>
   <button onClick={() => handleSmartScroll ('/panier')} className={styles.button}><span>☼ 🛒 ☼</span></button>
 </div>

 </div>
      </div>
    </header>
  );
}
