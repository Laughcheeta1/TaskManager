import React from 'react'
import yepsmeps from "../assets/yepsmeps.jpg";

export default function HomePage() {
  const imageStyle = {
    width : "600px",
    height: "500px"
  }

  return (
    <>
      <h1>Yeps development</h1>
      <h2>GitHub: 
        <div style={{color: "blue"}}>
          https://github.com/Laughcheeta1
        </div>
      </h2>
      <h2>Linkedin: 
        <div style={{color: "blue"}}>
          https://www.linkedin.com/in/santiago-yepes-mesa-67ab80270/
        </div>
      </h2>
    </>
  )
}