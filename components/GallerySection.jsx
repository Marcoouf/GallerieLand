// components/GallerySection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/GallerySection.module.css';

export default function GallerySection({ artworks = [] }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.galleryTitle}>Galerie</h2>
      <div className={styles.columns}>
        {artworks.map(({ id, src, title, width, height, slug }) => {
          const ratio = (height / width) * 100 + '%';
          return (
            <div key={id} className={styles.cardWrapper}>
              <Link href={`/oeuvre/${slug}`}>
                <div
                  className={styles.card}
                  style={{ paddingBottom: ratio }}
                >
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className={styles.image}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className={styles.caption}>{title}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
