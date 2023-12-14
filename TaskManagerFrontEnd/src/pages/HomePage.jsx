import React from 'react'
import sebsruiz from "../assets/sebsruiz.jpg";
import yepsmeps from "../assets/yepsmeps.jpg";

export default function HomePage() {
  const imageStyle = {
    width : "600px",
    height: "500px"
  }

  return (
    <>
      <h1>Seb y Yeps development team</h1>
      <img src={sebsruiz} alt="Sebastian" style={imageStyle}></img>
      <img src={yepsmeps} alt="Santiago" style={imageStyle}></img>
    </>
  )
}