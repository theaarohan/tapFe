import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { apiGetContentDetailsForID } from '../apiInteraction/apiCalls';
import { Loader } from '@geist-ui/icons';
import ReactPlayer from 'react-player/';

const ContentComponent = () => {
  
    const { contentId } = useParams();
    console.log("Param contentId");
    console.log(contentId);

    const [content, setContent] = useState();

    const fnFetchContent = async () => {
      const response = await apiGetContentDetailsForID(contentId);
      setContent(response.data);
      console.log("Response in Content.jsx");
      console.log(response.data);

    }

    useEffect(() => {
        fnFetchContent();
    }, []);


  return (
    <>

      {!content 
      ? 
      
      <h1><Loader/></h1> 
      
      :
      <>
        <ReactPlayer url={content.keyContentUrl}/> 
        <h5>{content.keyTapContentId}</h5>
        <h4>{content.keyTitle}</h4>
        <h3>{content.keyDescription}</h3>
        <h3>{content.keyCreatedAt}</h3>
      </>
      }
    </>
  )
}

export default ContentComponent;
