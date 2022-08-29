import './App.css';
import React from 'react';
import { useState } from 'react';
import WeatherAPI from './GetTemp';


const MyWeather = () => {
  const [enterVal, setEnterValue] = useState("")
  const [getVal, setGetValue] = useState("")

  return (
      <div className="cover">
       <input type="text" onChange={(e) => setEnterValue(e.target.value)}></input>
       <button onClick={()=>setGetValue([enterVal])}>OK</button>
       
       {getVal && < WeatherAPI data={getVal}/>}
      </div>
  )
}
export default MyWeather