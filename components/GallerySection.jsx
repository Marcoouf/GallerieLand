// components/GallerySection.jsx
import React from 'react'
import Image from 'next/image'
import styles from '../styles/GallerySection.module.css'

export default function GallerySection({ artworks = [] }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.galleryTitle}>Galerie</h2>
      <div className={styles.columns}>
        {artworks.map(({ id, src, title, width, height }) => {
          // calcule le ratio hauteur/largeur pour préserver les proportions
          const ratio = (height / width) * 100 + '%'
          return (
            <div key={id} className={styles.cardWrapper}>
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
            </div>
          )
        })}
      </div>
    </section>
  )
}
