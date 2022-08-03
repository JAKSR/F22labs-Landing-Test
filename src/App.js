import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'
import Specifications from './components/Specifications'
import EnjoySection from './components/EnjoySection'
import TryitNow from './components/TryitNow'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

const App = () => (
  <>
    <Navbar />
    <Home />
    <Details />
    <Specifications />
    <EnjoySection />
    <TryitNow />
    <Feedback />
    <Footer />
  </>
)

export default App