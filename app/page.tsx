'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductCategories } from '@/components/product-categories'
import { WhyChoose } from '@/components/why-choose'
import { FeaturedProducts } from '@/components/featured-products'
import { CertificationSection } from '@/components/certification-section'
import { ManufacturingProcess } from '@/components/manufacturing-process'
import { AboutSection } from '@/components/about-section'
import { GallerySection } from '@/components/gallery-section'
import { FAQSection } from '@/components/faq-section'
import { FactoryVisit } from '@/components/factory-visit'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'
import { ProductModal } from '@/components/product-modal'
import { MediaModal, MediaItem } from '@/components/media-modal'
import { Product } from '@/lib/site-data'

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [mediaList, setMediaList] = useState<MediaItem[]>([])
  const [mediaIndex, setMediaIndex] = useState<number>(-1)

  function handleSelectMedia(
    media: MediaItem,
    list?: MediaItem[],
    index?: number
  ) {
    if (list && list.length > 0 && typeof index === 'number') {
      setMediaList(list)
      setMediaIndex(index)
    } else {
      setMediaList([media])
      setMediaIndex(0)
    }
  }

  function handleOpenMediaModal(src: string, title: string, category: string) {
    setMediaList([{ src, title, category }])
    setMediaIndex(0)
  }

  function handleCloseMediaModal() {
    setMediaIndex(-1)
    setMediaList([])
  }

  return (
    <>
      <SiteHeader onOpenMediaModal={handleOpenMediaModal} />
      <main>
        <Hero onOpenMediaModal={handleOpenMediaModal} />
        <ProductCategories />
        <WhyChoose />
        <FeaturedProducts onSelectProduct={setSelectedProduct} />
        <CertificationSection />
        <ManufacturingProcess />
        <AboutSection />
        <GallerySection onSelectMedia={handleSelectMedia} />
        <FAQSection />
        <FactoryVisit />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />

      {/* Interactive Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <MediaModal
        items={mediaList}
        currentIndex={mediaIndex}
        onNavigate={(idx) => setMediaIndex(idx)}
        onClose={handleCloseMediaModal}
      />
    </>
  )
}
