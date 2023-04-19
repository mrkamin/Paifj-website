import React, { useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
  const [items, ] = useState(hero)

  return (
    <>
      <section className='hero'>
      
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
       
      </section>
    </>
  )
}

export default Hero