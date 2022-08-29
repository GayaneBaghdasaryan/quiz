import React from 'react';
import { useEffect, useState } from 'react';
import  Axios from 'axios';
import './style.css'
const WeatherAPI = (props) => {
  const[arg,setData] = useState('')
  useEffect(()=>{
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.data}&appid=e2ca4f9a24378f4edb57847420e9f775`)
   
    .then(res => {
      setData(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  },[arg[0]])
         //e2ca4f9a24378f4edb57847420e9f775
   return(
    <div className='info'>
    {arg && <h1>{Math.floor(arg.main.temp-273)}°C</h1>}
    {arg && <h1><i>{arg.name}</i></h1>}
    {arg && <h1>({arg.weather[0].description})</h1>}   
    </div>
    )
}
 
export default WeatherAPI