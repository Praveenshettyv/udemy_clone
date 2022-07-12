import React from 'react'
import './Home.css'
import Global from './Global.json'
import test from './test.json'
export default function Home() {
  const array=["java","Oracle","React"]
  return (
    <div className='Home_Main'>
        <h1>Recommended for you</h1> 
        <div className='video_main_div'>
          {   array.map((arrayvalue)=>{
                return test.data[arrayvalue].map((data,index)=>{
                  return <iframe key={index} src={`https://www.youtube.com/embed/${data}`} ></iframe>
                })
                
            }) 
          }
        </div>
    </div>
  )
}



