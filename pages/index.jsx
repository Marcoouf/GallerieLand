// pages/index.jsx
import React from 'react'
import CanvasBackground from '../components/CanvasBackground'
import ArrowsBar      from '../components/ArrowsBar'
import GallerySection from '../components/GallerySection'

const artworks = [
  { src: '/gallery/art1.webp', title: 'Artwork 1', price: '100€' },
  { src: '/gallery/art2.webp', title: 'Artwork 2', price: '150€' },
  { src: '/gallery/art3.webp', title: 'Artwork 3', price: '200€' },
  { src: '/gallery/art4.webp', title: 'Artwork 4', price: '250€' },
  { src: '/gallery/art5.webp', title: 'Artwork 5', price: '20€' },
  { src: '/gallery/art6.webp', title: 'Artwork 6', price: '170€' },
  { src: '/gallery/art7.webp', title: 'Artwork 7', price: '50€' },
]

export default function Home() {
  return (
    <>
      <CanvasBackground text="berecouf" count={25000} />

      <GallerySection artworks={artworks} />
    </>
  )
}
