import React from 'react'
import './Headertwo.css'
import img from '../Images/background.jpg'
import { useState  } from 'react'
export default function Headertwo() {
  const [Development,setDevelopment] = useState("")
  const Development_array=['Web Development',"Data Science","Mobile Development","Programming Languages","Game Development","Software Testing","Software Engineering","Software Development Tools"];
  const Business_array=["Entrepreneurship","Communication","Management","Sales","Business Strategy"];
  const Finance_array=["Accounting & Bookkeeping","Compliance","Cryptocurrency & Blockchain","Finance"]
  const it_array=["IT Certifications","Network & Security","Hardware","Operating Systems & Servers","Other IT & Software"]
  const Office_array=["Microsoft","Apple","Google","SAP","Oracle","Other Office Productivity"]
  const Personal_array=["Personal Transformation","Personal Productivity","Leadership","Career Development","Happiness"]
  const Design_array=["Web Design","Design Tools","Game Design","3D & Animation","Photography","Architectural Design"]
  const Marketing_array=["Marketing","Digital Marketing","SEO","SMM","Social Media","Marketing Fundamentals"]
  const Health_array=["Health & Fitness","Nutrition","Fitness","Healthcare","Nutrition","Other Health & Wellness"]
  const Music_array=["Music","Music Production","Music Theory","Music Composition","Music Analysis"]
  const Development_data=Development_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Business_data=Business_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Finance_data=Finance_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const it_data=it_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Office_data=Office_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Personal_data=Personal_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Design_data=Design_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Marketing_data=Marketing_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Health_data=Health_array.map((data)=>(<div className='sub_div'>{data}</div>));
  const Music_data=Music_array.map((data)=>(<div className='sub_div'>{data}</div>));
  function myfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={myfunction} >{Development_data} <hr /></div>)
  }
  function Businessmyfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Business_data} <hr /></div>)
  }
  function Financefunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Finance_data} <hr /></div>)
  }
  function itfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{it_data} <hr /></div>)
  }
  function officefunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Office_data} <hr /></div>)
  }
  function personalfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Personal_data} <hr /></div>)
  }
  function designfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Design_data} <hr /></div>)
  }
  function marketingfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Marketing_data} <hr /></div>)
  }
  function Healthfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Health_data} <hr /></div>)
  }
  function musicfunction(){
    setDevelopment(<div className='Sub_main_div' onMouseMove={Businessmyfunction} >{Music_data} <hr /></div>)
  }

  return (<div>
              <div className='Header_two_main'>
                    <div className='Dev_div' onMouseMove={myfunction} onMouseOut={()=>setDevelopment("")}>Development</div>
                    <div onMouseMove={Businessmyfunction} onMouseOut={()=>setDevelopment("")}>Business</div>
                    <div onMouseMove={Financefunction} onMouseOut={()=>setDevelopment("")}>Finance & Accounting</div>
                    <div onMouseMove={itfunction} onMouseOut={()=>setDevelopment("")}>IT & Software</div>
                    <div onMouseMove={officefunction} onMouseOut={()=>setDevelopment("")}>Office Productivity</div>
                    <div onMouseMove={personalfunction} onMouseOut={()=>setDevelopment("")}>Personal Development</div>
                    <div onMouseMove={designfunction} onMouseOut={()=>setDevelopment("")}>Design</div>
                    <div onMouseMove={marketingfunction} onMouseOut={()=>setDevelopment("")}>Marketing</div>
                    <div onMouseMove={Healthfunction} onMouseOut={()=>setDevelopment("")}>Health & Fitness</div>
                    <div  onMouseMove={musicfunction} onMouseOut={()=>setDevelopment("")}>Music</div>
                </div>
                <div className='sub_divs' >{ Development==="" ? "" : Development }</div>
                <div onMouseMove={()=>setDevelopment("")}><img width="1340px" height="400" alt="" src={img} /></div>
                {/* "https://img-c.udemycdn.com/notices/featured_banner/image_udlite/05143fb8-9a81-4f50-a345-112a7274ac2a.jpg" */}
                <div className='offer_text'><h1>Explore your future</h1><h5>Where can learning take you? Discover the possibilities with a course.</h5></div>
            </div>)
}