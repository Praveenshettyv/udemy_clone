import React from 'react'
import './Home.css'
import test from './test.json'
export default function Home() {
  const array=["java","Oracle","React"]
  return (  
    <div className='Home_Main'>
        <h1>Recommended for you</h1> 
        <div className='video_main_div'>
          {   array.map((arrayvalue)=>{
               var data=<h1>{arrayvalue}</h1>;
                var given_data= test.data[arrayvalue].map((data,index)=>{
                  return <iframe key={index} src={`https://www.youtube.com/embed/${data}`} ></iframe>
                })
                return [data,given_data] ;
            }) 
          }
        </div>
    </div>
  )
}



