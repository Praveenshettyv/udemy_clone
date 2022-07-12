import React from 'react'
import img1 from './Images/nasdaq_light.svg'
import img2 from './Images/volkswagen_light.svg'
import img3 from './Images/box_light.svg'
import img4 from './Images/netapp_light.svg'
import img5 from './Images/eventbrite_light.svg'
import img6 from './Images/logo-udemy-inverted.svg'
import './Footer.css'
import useUdemy from './useUdemy'
const footer_data=["Udemy Business","Teach on Udemy","Get the app","About us","Contact us"," Careers",'Blog'," Help and Support"," Affiliate","  Investors"
,"Terms"," Privacy policy","Cookie settings","Sitemap","Accessibility statement"]
export default function Footer() {
  return (
    <div className='Footer_main_div'>
        <div style={{display:"flex"}}>
            <div className='font_size_footer'>Top companies choose Udemy Business to build in-demand career skills.</div>
            <div style={{float: "right"}}>
                <img src={img1} alt="brand" />
                <img src={img2} alt="brand" />
                <img src={img3} alt="brand" />
                <img src={img4} alt="brand" />
                <img src={img5} alt="brand" />
            </div>
        </div>
        <hr style={{colo:"white"}} />
        <div  className='footer_sub_div'>
            {
              footer_data.map((data,index)=>{
                return (<div className='data_footer_sub_data' key={index}>{data}</div>)
              })
            }
        </div>
        <div>
          <img onClick={useUdemy} className='Imgesss' src={img6} alt="brand" />
        </div>
        <div style={{color:"white", float:"right"}}>© 2022 Udemy, Inc.</div>
    </div>
  )
}
