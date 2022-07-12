import React from 'react'
import './Home.css'
import Global from './Global.json'
export default function Home() {
  return (
    <div className='Home_Main'>
        <h1>Recommended for you</h1> 
        <div className='video_main_div'>
          <h1>java </h1>
          {  Global.java.map((data,index)=>{
              return <iframe key={index} src={`https://www.youtube.com/embed/${data}`} ></iframe>
          })
          }
        </div>
        <div className='video_main_div'>
          <h1>Oracle </h1>
          {  Global.Oracle.map((data,index)=>{
              return <iframe key={index} src={`https://www.youtube.com/embed/${data}`} ></iframe>
          })
          }
        </div>
        <div className='video_main_div'>
          <h1>React </h1>
          {  Global.React.map((data,index)=>{
              return <iframe key={index} src={`https://www.youtube.com/embed/${data}`} ></iframe>
          })
          }
        </div>
    </div>
  )
}
