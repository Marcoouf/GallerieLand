import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { oeuvres } from '../../data/oeuvres';
import styles from '../../styles/AchatPage.module.css';
import { useState, useEffect } from 'react';

export default function AchatOeuvre() {
  const router = useRouter();
  const { slug } = router.query;
  const [format, setFormat] = useState('standard');

  const oeuvre = oeuvres.find((o) => o.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!oeuvre) {
    return (
      <>
        <Head><title>Œuvre introuvable</title></Head>
        <Header />
        <main className={styles.mainSection}>
          <p style={{ color: 'white' }}>Œuvre introuvable.</p>
        </main>
        <Footer />
      </>
    );
  }

  const getPrice = () => {
    switch (format) {
      case 'grand':
        return oeuvre.price + 50;
      case 'XL':
        return oeuvre.price + 100;
      default:
        return oeuvre.price;
    }
  };

  return (
    <>
      <Head>
        <title>{oeuvre.title} — Achat</title>
      </Head>
      <Header />

      <main className={styles.mainSection}>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img
              src={oeuvre.src}
              alt={`Œuvre ${oeuvre.title} par ${oeuvre.artist || 'inconnu'}`}
              className={styles.image}
            />
          </div>

          <div className={styles.infos}>
            <h1 className={styles.title}>{oeuvre.title}</h1>
            <p className={styles.description}>{oeuvre.description}</p>
            <p className={styles.artist}>Artiste : {oeuvre.artist || 'Inconnu'}</p>

            <div className={styles.formatRow}>
              <label htmlFor="format" className={styles.label}>Format :</label>
              <select
                id="format"
                className={styles.select}
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="grand">Grand</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>

            <p className={styles.price}>{getPrice()} €</p>
            <button className={styles.button}>Ajouter au panier</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
