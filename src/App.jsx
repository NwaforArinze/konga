import React from 'react'
import Brand from './components/Brand'
import Header from './components/Header'
import HeaderTwo from './components/HeaderTwo'
import Slider from './components/Slider'
import TodayDeal from './components/TodayDeal'
import Sponsored from './components/Sponsored'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Brand/>
      <Header/>
      <HeaderTwo/>
      <Slider/>
      <TodayDeal/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default App
