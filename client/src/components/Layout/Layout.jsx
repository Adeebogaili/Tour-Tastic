import React from 'react'

// components 
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}

export default Layout