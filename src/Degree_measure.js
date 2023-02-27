import React from 'react'
import './Degree_measure.css'
export default function Degree_measure({today}) {












  return (
<>
<div className='image'>
    <div className='image1'>
      
    <center><span><br></br>{today.city},{today.country}</span> <h4> <br></br>{today.Date}<br></br><br></br>population: {today.population}</h4></center>
  </div>
  <div className='image2'><img src={`https://openweathermap.org/img/w/${today.icon}.png`}/><span>{today.sunrise}<br></br>{today.sunset}</span></div>
</div>
</>





  )
}
