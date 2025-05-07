// pages/oeuvre/[slug].jsx
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { oeuvres } from '../../data/oeuvres';
import styles from '../../styles/AchatPage.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function AchatPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [format, setFormat] = useState('standard');

  if (!slug) return null;

  const oeuvre = oeuvres.find((item) => item.slug === slug);

  if (!oeuvre) {
    return (
      <div className={styles.notFound}>
        <p>Œuvre introuvable.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Achat – {oeuvre.title}</title>
      </Head>
      <Header />
      <div className={styles.pageContainerCentered}>
        <div className={styles.flexContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={oeuvre.src}
              alt={oeuvre.title}
              width={oeuvre.width}
              height={oeuvre.height}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>{oeuvre.title}</h1>
            <p className={styles.description}>{oeuvre.description}</p>
            <p className={styles.artist}>Artiste : {oeuvre.artiste || 'Inconnu'}</p>

            <div className={styles.formatRow}>
              <label className={styles.label} htmlFor="format">Format :</label>
              <select
                id="format"
                name="format"
                className={styles.select}
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="grand">Grand format</option>
                <option value="toile">Impression sur toile</option>
              </select>
            </div>

            <p className={styles.price}>{oeuvre.price} €</p>
            <button className={styles.button}>Ajouter au panier</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
