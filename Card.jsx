import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='container'>
      <div className="card" style={{overflow: "hidden"}}>
        <img src={props.image} alt="" style={{border: "0px solid black" , height: "168px" , width: "300px"}}/>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>  
    </div>
  )
}

export default Card
