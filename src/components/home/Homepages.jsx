import React from "react"
import Discover from "./discover/Discover" 
import Hero from "./hero/Hero" 
import Homes from "./mainContent/homes/Home"  
/* import News from "../news/News" */

const Homepages = () => {
  return (
    <>
       <Hero /> 
        <Homes />  
       {/* <News/> */}
     <Discover /> 
    </>
  )
}

export default Homepages