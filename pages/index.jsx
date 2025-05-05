// pages/index.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import PointCloudText from '../components/PointCloudText'
import styles from '../styles/PointCloudText.module.css'

export default function Home() {
  // Prépare une série de flèches
  const arrows = Array(20).fill('⇩');

  return (
    <div className={styles.container}>
      {/* Canvas 3D en arrière‑plan */}
      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.8} />
        <PointCloudText text="GallerieLand" count={30000} />
      </Canvas>

      {/* Barre de flèches pulsantes */}
      <div className={styles.arrowsBar}>
        {arrows.map((arrow, idx) => (
          <span key={idx} className={styles.bounceArrow}>
            {arrow}
          </span>
        ))}
      </div>
    </div>
  )
}
