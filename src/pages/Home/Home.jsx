import React from 'react'
import Banner from '../../components/Banner/Banner'
import Introduction from './Introduction'
import Vision from './Vision'
import Objective from './Objective'
import Projects from './Projects'

const Home = () => {
  return (
    <div>

        <Banner/>
        <Introduction/>
        <Vision/>
        <Objective/>
        <Projects/>
    </div>
  )
}

export default Home