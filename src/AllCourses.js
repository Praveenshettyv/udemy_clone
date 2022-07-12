import React from 'react'
import'./Allinone.css'
const courses=["SharePoint","Microsoft Power Apps","Microsoft Power Automate","Microsoft Office 365","Microsoft Teams","Data Engineering","Databricks","Apache Spark","Data Warehouse","AWS Databases"]
export default function AllCourses() {
  return (
    <div>
        <h1>Topics recommended for you</h1>
        <div className='display_flex'>
        {courses.map((data,index)=>{
           return <div className='Course_cls' key={index}>{data}</div>
        })}
        </div>
    </div>
  )
}
