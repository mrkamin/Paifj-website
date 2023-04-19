import React from "react"
import { Link } from "react-router-dom"
import "./card.css"

const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {
  return (
    <>
    <Link to={`/SinglePage/${id}`} className="cardlink">
      
          <img src={cover} alt='' className="cardimg" />
        <div className='cardboxtext'>
            <h1 className='titleBg'>{title}</h1>
            <button type="button" className="readmorbtn">Read More</button>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
        
      
      </Link>
    </>
  )
}

export default Card