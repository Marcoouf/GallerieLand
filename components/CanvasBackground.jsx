import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import PointCloudText from './PointCloudText'
import styles from '../styles/PointCloudText.module.css'

export default function CanvasBackground({ text = 'GalleryLand', count = 25000 }) {
  const containerRef = useRef()
  const [arrowCount, setArrowCount] = useState(0)

  // Dynamically compute number of arrows to fill width
  useEffect(() => {
    const updateCount = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      // approximate slot: arrow font-size (3rem ~48px) + margin (8px)
      const slot = 48 + 8
      const count = Math.floor(width / slot)
      setArrowCount(count)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  return (
    <div ref={containerRef} className={styles.canvasContainer}>
      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.5} />
        <PointCloudText text={text} count={count} />
      </Canvas>
      {/* Dynamic arrows at bottom of 3D section */}
      <div className={styles.arrowsBar}>
        {Array(arrowCount).fill('⇩').map((arrow, idx) => (
          <span key={idx} className={styles.bounceArrow}>{arrow}</span>
        ))}
      </div>
    </div>
  )
}
