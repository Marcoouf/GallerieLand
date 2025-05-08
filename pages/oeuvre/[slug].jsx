import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { oeuvres } from '../../data/oeuvres';
import styles from '../../styles/AchatPage.module.css';

export default function AchatOeuvre() {
  const router = useRouter();
  const { slug } = router.query;
  const oeuvre = oeuvres.find((o) => o.slug === slug);

  if (!oeuvre) {
    return <p style={{ padding: '4rem', textAlign: 'center' }}>Œuvre introuvable.</p>;
  }

  return (
    <>
      <Head>
        <title>Achat – {oeuvre.title}</title>
      </Head>
      <Header />
      <main className={styles.mainSection}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.imageCard}>
              <img
                src={oeuvre.src}
                alt={oeuvre.title}
                width={oeuvre.width}
                height={oeuvre.height}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.infos}>
            <h1 className={styles.title}>{oeuvre.title}</h1>
            <p className={styles.description}>{oeuvre.description}</p>
            <p className={styles.artist}>Artiste : {oeuvre.artist || 'Inconnu'}</p>
            <div className={styles.formatRow}>
              <label className={styles.label} htmlFor="format">Format :</label>
              <select id="format" name="format" className={styles.select}>
                <option value="standard">Standard</option>
                <option value="grand">Grand</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>
            <p className={styles.price}>{oeuvre.price} €</p>
            <button className={styles.button}>Ajouter au panier</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
