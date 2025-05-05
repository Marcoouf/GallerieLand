import React from 'react'
import Image from 'next/image'
import styles from '../styles/PointCloudText.module.css'

export default function GallerySection({ artworks = [] }) {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Galerie</h2>
      <div className={styles.galleryGrid}>
        {artworks.map((art, i) => (
          <div key={i} className={styles.artworkCard}>
            <Image
              src={art.src}
              alt={art.title}
              width={300}
              height={300}
              className={styles.artworkImage}
            />
            <div className={styles.artworkInfo}>
              <h3 className={styles.artworkTitle}>{art.title}</h3>
              <p className={styles.artworkPrice}>{art.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
