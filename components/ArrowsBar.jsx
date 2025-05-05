import React from 'react'
import styles from '../styles/PointCloudText.module.css'

export default function ArrowsBar({ count = 20, direction = 'down' }) {
  const arrow = direction === 'down' ? '⇩' : '⇧'
  return (
    <div className={styles.arrowsBar}>
      {Array(count).fill(arrow).map((a, i) => (
        <span key={i} className={styles.bounceArrow}>{a}</span>
      ))}
    </div>
  )
}
