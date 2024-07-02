import '../Home/home.css';
import Main from '../Home/Main';
import React, { useContext, useEffect, useState } from "react";
import url from "../url";
import { store } from "../App";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import Card from '../Posts/Card';

function Profile() {
  const { token } = useContext(store);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + "/profile", {
          headers: {
            'Authorization': token,
          },
        });
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      try {
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
      fetchData();
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="nav-bar">
        <Main />
      </div>
      <div className="block">
        <h1 className="h1main">Welcome {username}</h1><br></br>
        <h2 className="h2main">Your posts</h2>
        <div>
          {posts.map((post) => (
            <Card
              key={post._id}
              image={post.p_img}
              name={post.p_name}
              description={post.p_description}
              userid={userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
