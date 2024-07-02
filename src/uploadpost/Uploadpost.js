import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate, useNavigate } from 'react-router-dom';
import Main from "../Home/Main";
import '../Home/home.css';
import './upload.css';

const Uploadpost = () => {
  const [postImage, setPostImage] = useState("");
  const { token } = useContext(store);
  const [username, setUsername] = useState("");
  const [setUserId] = useState("");
  const [p_description, setPDescription] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    if (token) {
      try {
        // Decode the token to get the username
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        if (decodedToken.user && decodedToken.user.username) {
          setUsername(decodedToken.user.username);
          setUserId(decodedToken.user._id);
        } else {
          console.error("Username not found in token");
        }
      } catch (error) {
        console.error("Error decoding token: ", error);
      }
    }
  }, [token]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
  };

  const handleDescriptionChange = (e) => {
    setPDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      p_img: postImage,
      p_name: username,
      p_description: p_description,
    };

    try {
      const response = await axios.post("http://localhost:1313/uploadpost", postData, {
        headers: {
          'Authorization': token
        }
      });
      setStatus("Post uploaded successfully");
      console.log(response.data);
      navigate('/home'); // Redirect to /home after successful post
    } catch (error) {
      console.error("Error uploading post: ", error);
      setStatus("Error uploading post");
    }
  };

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="nav-bar">
        <Main />
      </div>
      <div className="uploadone upload-post">
        <h1 className="hiupload">Upload Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="p_img">Upload Image:</label>
            <input type="file" id="p_img" name="p_img" onChange={handleFileChange} required />
          </div>
          <div>
            <label htmlFor="p_description">Description:</label>
            <textarea id="p_description" name="p_description" value={p_description} onChange={handleDescriptionChange} required></textarea>
          </div>
          <button type="submit">Add Post</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
}

export default Uploadpost;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
