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
      <img src={yepsmeps} alt="Santiago" style={imageStyle}></img>
    </>
  )
}