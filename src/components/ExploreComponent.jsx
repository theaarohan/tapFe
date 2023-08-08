import React, { useEffect } from 'react'
import { apiGetAllContent } from '../apiInteraction/apiCalls'
import { CardComponent } from './Cards'

export default function ExploreComponent() {

    const fnHandleContent = () =>{
      const platform = "instagram"
      const response = apiGetAllContent(platform);
      console.log(response);
    }
    useEffect(()=>{
      fnHandleContent();
    },[])

  return (
    <>
    Explore Route
      <CardComponent propTitle={"yeStu sahasavantha"}
        propDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam ullam, sequi temporibus nesciunt at "}
        />  
        <button onClick={fnHandleContent}>Refresh</button>
    </>
  )
}
