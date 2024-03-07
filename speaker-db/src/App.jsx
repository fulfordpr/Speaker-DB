/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import SpeakerUL from './components/SpeakerUL.jsx'
import SplCalulator from './components/SplCalculator.jsx'


//SPL CALC = {spl} - (20* Math.log10({distance}/{1m})


function App() {

  return (
    <div>
      <SpeakerUL/>
    </div>
  )
}

export default App
