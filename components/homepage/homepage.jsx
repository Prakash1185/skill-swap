import React from 'react'
import HeroSection from './hero-section'
import { GlobeDemo } from './globe-demo'
import { FeatureCards } from '../Skills/FeatureCards'
import Skillsters from '../Skills/Skillsters'

const Homepage = () => {
  return (
    <>
      <GlobeDemo />
      <FeatureCards />
      <Skillsters />
    </>
  )
}

export default Homepage