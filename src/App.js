import './App.css';
import React from 'react';
import { useState } from 'react';
import WeatherAPI from './GetTemp';


const MyWeather = () => {
  const [enterValue, setEnterValue] = useState("")
  const [getValue, setGetValue] = useState('')

  return (
      <div className="cover">
       <input type="text" onChange={(e) => setEnterValue(e.target.value)}></input>
       <button onClick={()=>setGetValue([enterValue])}>OK</button>
       
       {getValue && < WeatherAPI data={getValue}/>}
      </div>
  )
}
export default MyWeather