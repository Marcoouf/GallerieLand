// pages/index.jsx
import React from 'react'
import Header from '../components/Header'
import CanvasBackground from '../components/CanvasBackground'
import ArrowsBar from '../components/ArrowsBar'
import GallerySection from '../components/GallerySection'
import Footer from '../components/Footer'
import { oeuvres } from '../data/oeuvres' // Gardez uniquement cette ligne

export default function Home() {
  return (
    <>
      <Header />
      <main> <section id="accueil"> <CanvasBackground/></section>
      <section id="gallery"> <GallerySection artworks={oeuvres} /></section>
      <section id="contact"> <Footer /></section>
      </main>
      
    </>
  );
}
