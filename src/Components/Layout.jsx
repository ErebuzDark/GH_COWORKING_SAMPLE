import React from 'react'

// components
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navigation />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
