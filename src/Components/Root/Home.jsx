import React from 'react'
import Hero from '../Home/Hero'
import LegalService from '../Home/LegalService'
import Guidance from '../Home/Guidance'
import Solutions from '../Solutions/Solutions'
import PracticalSolution from '../Solutions/PracticalSolution'
import SuccessfullCase from '../Solutions/SuccessfullCase'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <LegalService></LegalService>
        <Solutions></Solutions>
        <PracticalSolution></PracticalSolution>
        <SuccessfullCase></SuccessfullCase>
        <Guidance></Guidance>
    </div>
  )
}

export default Home                               