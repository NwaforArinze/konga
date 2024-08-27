import React from 'react'
import Slider from '../components/Slider'
import TodayDeal from '../components/TodayDeal'
import Sponsored from '../components/Sponsored'
import Store from '../components/Store'
import Recommend from '../components/Recommend'
import Pictures from '../components/Pictures'

const Home = () => {
  return (
    <div>
      <Slider/>
      <TodayDeal/>
      <Sponsored/>
      <Store/>
      <Recommend/>
      <Pictures/>
    </div>
  )
}

export default Home
