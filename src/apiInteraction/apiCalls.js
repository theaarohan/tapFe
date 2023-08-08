const LOCALURL = "http://localhost:3000";
const STAGINGURL = "https://tap-be.vercel.app/"

import axios from 'axios';

const api = axios.create({
  baseURL: STAGINGURL, // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Access-Control-Allow-Origin' : [STAGINGURL, LOCALURL]
  },
});

export default api;


export const apiRegistration = async (ipEmail, ipPassword) => {

    try {
        // Make a POST request to the backend register route
    const response = await api.post(`/auth/register`, {
        ipEmail,
        ipPassword,
    });

    console.log(response); // Successful response from the backend

    return response // Successful response from the backend
    } catch (error) {
    console.error('Error:', error);
}
}

export const apiLogin = async (ipEmail, ipPassword) => {

    try {
        // Make a POST request to the backend register route
    const response = await api.post(`/auth/login`, {
        ipEmail,
        ipPassword,
    });

    console.log(response); // Successful response from the backend

    return response // Successful response from the backend
    } catch (error) {
    console.error('Error:', error);
}
} 

export const apiAdminAddNewContent = async (ipTitle, ipTags, ipContentUrl, ipDescription, ipPlatform) =>{
try {
    await api.post('/admin/newcontent', {
      ipTitle,
      ipTags,
      ipContentUrl,
      ipDescription,
      ipPlatform
    });

    console.log('Content submitted successfully');
  } catch (error) {
    console.error('Error submitting content:', error);
  }
}

// {
//     "data": {
//       "message": "User registered successfully"
//     },
//     "status": 201,
//     "statusText": "Created",
//     "headers": {
//       "content-length": "42",
//       "content-type": "application/json; charset=utf-8"
//     },
//     "config": {
//       "transitional": {
//         "silentJSONParsing": true,
//         "forcedJSONParsing": true,
//         "clarifyTimeoutError": false
//       },
//       "adapter": [
//         "xhr",
//         "http"
//       ],
//       "transformRequest": [
//         null
//       ],
//       "transformResponse": [
//         null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1,
//       "maxBodyLength": -1,
//       "env": {},
//       "headers": {
//         "Accept": "application/json, text/plain, */*",
//         "Content-Type": "application/json"
//       },
//       "baseURL": "http://localhost:3000",
//       "method": "post",
//       "url": "/auth/register",
//       "data": "{\"ipEmail\":\"tds2@gmail.com\",\"ipPassword\":\"tds@gmail.com\"}"
//     },
//     "request": {}
//   }