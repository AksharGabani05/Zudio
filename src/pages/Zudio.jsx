import React from 'react'
import Header from '../compnets/Navbar'
import Zudiosyl from '../compnets/Zudiosyl'
import Footer from '../compnets/Footer'
import Add from '../compnets/Add'
import Banner from '../compnets/Banner'

const Zudio = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Zudiosyl />
      <Add/>
      <Footer />
    </>
  )
}

export default Zudio