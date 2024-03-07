/* eslint-disable no-unused-vars */
import React from 'react'

function SplCalulator(props) {
  const spl = props.spl
  const initCalc = spl - (20* Math.log10(100/1))
  return (
    <div className="spl-calc">
        <h1>{spl} db at 100m is {initCalc} db</h1>
        
    </div>
  )
}

export default SplCalulator