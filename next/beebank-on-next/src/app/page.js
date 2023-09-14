import React, { Component } from 'react'

import PublicNavBar from '../../generalContent/publicNav'
import HomeContent from '../../dedicatedContent/public/homeContent'
import Footer from '../../generalContent/footer'
export default function Home() {

  return (<>

    <main>
      <PublicNavBar />
      <HomeContent />
      <Footer />
    </main>

  </>
  )
}