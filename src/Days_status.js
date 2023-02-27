import React from 'react'
import './Days_status.css'
export default function Days_status({weekly}) {
  console.log("weekly",weekly)
  return (

    <div className='maindiv'>
     { weekly.map((data4,key)=>
     <div className='block1'> <center>
       {key==0 ?<span>Today</span>:
      
      <span>{data4.day} </span>}<h4><br></br> <img src={`https://openweathermap.org/img/w/${data4.icon}.png`}/> <br></br> {data4.htemp}<sup>o</sup>C - {data4.ltemp}<sup>o</sup>C  <br></br><br></br>{data4.Main}<br></br><br></br>{data4.Description}</h4></center> </div>
      
      )
}

    </div>
  )
}
