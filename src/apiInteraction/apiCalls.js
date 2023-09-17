const LOCALURL = "http://localhost:3000";
const STAGINGURL = "https://tap-be.vercel.app/";

import axios from "axios";

const api = axios.create({
  baseURL: LOCALURL, // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage?.getItem("token")}`,
    // 'Access-Control-Allow-Origin' : '*'
  },
});

export const apiRegistration = async (ipEmail, ipPassword) => {
  try {
    // Make a POST request to the backend register route
    const response = await api.post(`/auth/register`, {
      ipEmail,
      ipPassword,
    });

    console.log(response); // Successful response from the backend

    return response; // Successful response from the backend
  } catch (error) {
    console.error("Error:", error);
  }
};

export const apiLogin = async (ipEmail, ipPassword) => {
  try {
    // Make a POST request to the backend register route
    const response = await api.post(`/auth/login`, {
      ipEmail,
      ipPassword,
    });

    console.log(response); // Successful response from the backend

    return response; // Successful response from the backend
  } catch (error) {
    console.error("Error:", error);
  }
};

export const apiAdminAddNewContent = async (
  ipTitle,
  ipTags,
  ipContentUrl,
  ipContentType,
  ipDescription,
  ipPlatform
) => {
  try {
    await api.post("/admin/newcontent", {
      ipTitle,
      ipTags,
      ipContentUrl,
      ipContentType,
      ipDescription,
      ipPlatform,
    });

    console.log("Content submitted successfully");
  } catch (error) {
    if (error.response.status == 401) {
      return { message: "Unauthorized, You are not an Admin", status: 401 };
    }
    console.error("Error submitting content:", error);
  }
};

export const apiGetAllContent = async (platform) => {
  try {
    const response = await api.get(`/content?platform=${platform}`);
    console.log("Content Fetched successfully");

    return response;
  } catch (error) {
    console.error("Error Fetching content:", error);
  }
};

export const apiGetContentDetailsForID = async (tapContentId) => {
  try {
    const response = await api.get(`/content/${tapContentId}`);
    console.log(`Content ${tapContentId} successfully`);

    return response;
    
  } catch (error) {
    console.error("Error Fetching content:", error);
  }
};
