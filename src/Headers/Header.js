import React from 'react'
import udemy_log from '../Images/logoudemy.svg' 
import Heart from '../Images/heart_regular.svg' 
import cart from '../Images/Cart.png' 
import bell from '../Images/bell_regular.svg' 
import search from '../Images/Search.png'
import './Header.css'
import { useState,useEffect } from 'react'
import Headertwo from './Headertwo'
import useudemy from '../useUdemy'
import test from '../test.json'
function Header() {
  const [state,setstate]=useState("")
  const [textsss,settext]=useState("")
  const [classdata,setclassdata]=useState("");
  const array=["java","Oracle","React"]
  const users_bdata=["My learning","My cart","Wishlist","Instructor dashboard","Notifications","Messages","Account settings","Payment methods"]
  const Category_array=["Development","Business","Finance & Accounting","IT & Software","Office Productivity","Personal Development","Design","Marketing","Lifestyle","Health & Fitness","Music","Teaching & Academics"];
  const Categories_data=Category_array.map((data)=>(<><div className='Categorie_sub_div'><span className='left'>{data}</span> <span className='right'>{'>'}</span></div><hr /></>));
  function Categoriesfunctions(){
    setstate(<div className='Categorie_sub_divsss' onMouseMove={Categoriesfunctions}>{Categories_data}</div>)
  }
  function Businessfunctions(){
    setstate(<div className='Business_sub_div' onMouseMove={Businessfunctions}>Get your team access to over 16,000 top Udemy courses, anytime, anywhere.<br /><button>Try Udemy Business</button> </div>)
  }
  useEffect(()=>{
    setclassdata(<div><div className='Home_Main'>
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
  </div></div>)

  },[textsss])
  console.log(textsss)
  function userfunction(){
    setstate(()=>{<div className='users_sub_div' onMouseMove={userfunction}><br />
                <div className='user_cls'>
                  <span> 
                    <div className='User_profilesss'>PV</div>
                  </span>
                  <span>Praveen Voruganti</span> 
                  <span>Vorugntipraveen@gmail.com</span>
                </div><br /><hr />
                {users_bdata.map((data,index)=>{
                    return <div><div key={index}>{data}</div><br /></div>
                  })
                }
              </div>})  
  }
  return (
    <div >
        <div className='Header_main_div one_line_css' >
          <img onClick={useudemy} src={udemy_log} alt="udemylogo"  className='Udemylogo'/>
          <div className='vertical_middle Categories_cls ' onMouseMove={Categoriesfunctions} onMouseLeave={()=>setstate("")} >Categories</div>
         
          <div className='Search_bar' >
            <img src={search} alt="udemylogo"  className='Search_img'/>
            <input type="text" className='Inputsearch' id="search" onChange={(e)=>{settext(e.target.value)}}  placeholder='Search For Anything ...' />
          </div>
          <div className='vertical_middle' onMouseMove={Businessfunctions} onMouseLeave={()=>setstate("")}>Udemy Business</div>
          <div className='vertical_middle'>Instructor</div>
          <div className='vertical_middle'>My learning</div>
          <div className='one_line_cssss'>
            <img src={Heart} alt="udemylogo"  className='logo'/>
            <img src={cart} alt="udemylogo" style={{width:"20px"}} className='logo'/>
            <img src={bell} alt="udemylogo"  className='logo'/>
          </div>
          <div className='User_profile' onMouseMove={userfunction} onMouseLeave={()=>setstate("")}>PV</div>
      </div>
      {state}
      <hr />
        <div onMouseLeave={()=>setstate("")}><Headertwo /></div>
      <div>
         {classdata}
      </div>
    </div>
    
  )
}
export default  Header;
