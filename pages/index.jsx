// pages/index.jsx
import React from 'react'
import Header from '../components/Header'
import CanvasBackground from '../components/CanvasBackground'
import ArrowsBar      from '../components/ArrowsBar'
import GallerySection from '../components/GallerySection'
import Footer from '../components/Footer'

const artworks = [
  { id: 1, src: '/gallery/art1.webp', title: 'Artwork 1', width: 1024, height: 1536 },
  { id: 2, src: '/gallery/art2.webp', title: 'Artwork 2', width: 2480, height: 1770 },
  { id: 3, src: '/gallery/art3.webp', title: 'Artwork 3', width: 1024, height: 1536 },
  { id: 4, src: '/gallery/art4.webp', title: 'Artwork 4', width: 640, height: 640 },
  { id: 5, src: '/gallery/art5.webp', title: 'Artwork 5', width: 1024, height: 1024 },
  { id: 6, src: '/gallery/art6.webp', title: 'Artwork 6', width: 1024, height: 1536 },
  { id: 7, src: '/gallery/art7.webp', title: 'Artwork 7', width: 1565, height: 1037 },

]

export default function Home() {
  return (
    <>
      <Header />

      {/* Section 3D */}
      <CanvasBackground text="GalleryLand" count={30000} />

      {/* Galerie d'œuvres */}
      <GallerySection artworks={artworks} />

      <Footer />
    </>
  )
}
