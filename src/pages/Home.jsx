import React from 'react'
import Header from '../compnets/Navbar'
import Footer from '../compnets/Footer'
import Banner from '../compnets/Banner'
import Zwork from '../compnets/Zwork'
import Zudiosyl from '../compnets/Zudiosyl'
import Compaigns from '../compnets/Campaigns'
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Zwork/>
      <Zudiosyl/>
      <Compaigns/>
      <Footer />
    </>
  )
}

export default Home