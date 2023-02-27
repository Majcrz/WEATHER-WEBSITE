import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Degree_measure from './Degree_measure';
import Days_status from './Days_status';
import { useState } from 'react';
import Loading from './Loading';
import axios from 'axios'
function App() {

  const [state,setstate]=useState({
   value:'',
   loading:false,
   current:{},
   weekinfo:[],
   error:false
   

  })
  const searchprops = (event) =>{
    
   setstate({...state,value:event.target.value}) 
  //  console.log("new",state)
  }

  const enterprops = (event) =>{
    event.preventDefault();


    setstate({
      ...state,loading:true     
    })
    
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`).then((datas)=>{
    console.log(datas)



    const data1=datas.data
    const months=['Januvary','February','March','April','May','June','July','Auguest','September','October','November','December']
    const Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const currentdate=new Date()
    console.log("date",currentdate.getDay())
    const date=`${Days[currentdate.getDay()]} ${currentdate.getDate()} ${months[currentdate.getMonth()]}`


    console.log("dateeee",date)


    
    const sunrise= new Date(datas.data.list[0].sunrise*1000).toLocaleTimeString().slice(0.4)
    const sunset= new Date(datas.data.list[0].sunset*1000).toLocaleTimeString().slice(0.4)

    console.log("sunrrise",sunrise)
    console.log("sunset",sunset)








    const current = {
      city:datas.data.city.name,
      country:datas.data.city.country,
      population:datas.data.city.population,
      Description:datas.data.list[0].weather[0].description,
      Main:datas.data.list[0].weather[0].main,
      icon:datas.data.list[0].weather[0].icon,
      temp:datas.data.list[0].temp,
      htemp:datas.data.list[0].temp.max,
      ltemp:datas.data.list[0].temp.min,
      sunrise:sunrise,
      sunset:sunset,
      clouds:datas.data.list[0].clouds,
      humidity:datas.data.list[0].humidity,
      pressure:datas.data.list[0].pressure,
      Wind:datas.data.list[0].speed,
      Date:date
    
    }
    console.log(current);

 const weekData =data1.list
 const weekinfo=weekData.map((data1,index)=>{
  return{
           key:index,
           Main:data1.weather[0].main,
           day:new Date(data1.dt*1000).toLocaleString('en-us',{weekday:'long'}).slice(0.3),
           Description:data1.weather[0].description,
           icon:data1.weather[0].icon,
           htemp:data1.temp.max,
           ltemp:data1.temp.min,
           

     } })

     setstate({
             ...state,
             current,
             weekinfo,
             loading:false,
             error:false
 
            })






    })
    .catch((error)=>{
      setstate({
        ...state,
        current:{},
        weekinfo:[],
        loading:false,
        error:true

       })

    })
    



  }
  
  
  return (
    <>
     <div></div><img src="https://i.pinimg.com/originals/0c/96/b1/0c96b19dc89ffdaa7ff737cfc04a095f.png" width="1890px" height="100%"/>
<Search searchplace={searchprops} enterbutton={enterprops} value={state.value}/>
{ state.loading===true ? <Loading/>:
<div>
  { state.current.country !== undefined ?
  <div className='weather'>
       <Degree_measure today={state.current}/>
       <Days_status weekly={state.weekinfo}/>

  </div>  :
      state.error ? 
      <p className="error">Sorry We Dont Have Any information</p> :
        <div>


        </div>
  
  }
</div>
}
    </>
  )
  
}

export default App;
