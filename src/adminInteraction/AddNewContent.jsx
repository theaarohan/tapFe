import React, { useState } from 'react';
import axios from 'axios';
import { apiAdminAddNewContent } from '../apiInteraction/apiCalls';

const AddNewContent = () => {
  const [stIpTitle, setStIpTitle] = useState('');
  const [stIpTags, setStIpTags] = useState('');
  const [stIpContentUrl, setStIpContentUrl] = useState('');
  const [stIpDescription, setStIpDescription] = useState('');
  const [stIpPlatform, setStIpPlatform] = useState('');
  const [stIpContentType, setStIpContentType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // const stIpPlatform = "instagram";
    // const stIpContentType = "image";
    const response = apiAdminAddNewContent(stIpTitle, stIpTags, stIpContentUrl, stIpContentType, stIpDescription, stIpPlatform );
    console.log(response)

    if(response.status(401)){
      // return res.status(401).json({ message: 'Unauthorized, You are not an Admin' });
      window.alert("Unauthorized, You are not an Admin");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl space-y-5">
      <h2 className="text-2xl font-semibold">Add New Content</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="title">Title:</label> */}
          <input
            type="text"
            id="title"
            placeholder='Title'
            className="border border-gray-400 p-2 w-full rounded-md mt-4 mb-4"
            value={stIpTitle}
            onChange={(e) => setStIpTitle(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="tags">Tags (comma-separated):</label> */}
          <input
            type="text"
            id="tags"
            placeholder='Tags (comma-separated)'
            className="border border-gray-400 p-2 w-full rounded-md mt-4 mb-4"
            value={stIpTags}
            onChange={(e) => setStIpTags(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="contentUrl">Content URL:</label> */}
          <input
            type="text"
            id="contentUrl"
            placeholder='Content URL'
            className="border border-gray-400 p-2 w-full rounded-md mt-4 mb-4"
            value={stIpContentUrl}
            onChange={(e) => setStIpContentUrl(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="description">Description:</label> */}
          <textarea
            id="description"
            placeholder='Description'
            className="border border-gray-400 p-2 w-full rounded-md mt-4 mb-4"
            rows="3"
            value={stIpDescription}
            onChange={(e) => setStIpDescription(e.target.value)}
            required
          />
        </div>
        <div className="">
            <input type="radio" name="ipPlatform" value={"instagram"} onClick={(e)=> setStIpPlatform(e.target.value)}/> Instagram
            <input type="radio" name="ipPlatform" value={"youtube"} onClick={(e)=> setStIpPlatform(e.target.value)}/> Youtube
        </div>

        <div className="">
            <input type="radio" name="ipContentType" value={"image"} onClick={(e)=> setStIpContentType(e.target.value)}/> Image
            <input type="radio" name="ipContentType" value={"video"} onClick={(e)=> setStIpContentType(e.target.value)}/> Video
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white inline mt-4 w-full py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewContent;
