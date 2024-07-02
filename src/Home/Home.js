import React, { useContext, useEffect, useState } from "react";
import Main from "./Main";
import "./home.css";
import { store } from "../App";
import axios from "axios";
import { Navigate } from "react-router-dom";
import url from "../url";
import Card from "../Posts/Card";

const Home = () => {
  const { token } = useContext(store);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + "/home", {
          headers: {
            Authorization: { token },
          },
        });
        setPosts(response.data);
        setStatus("loaded");
      } catch (err) {
        console.log(err);
        setStatus("Error");
      }
    };
    if (token) {
      try {
        // Decode the token to get the username
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        console.log("Decoded Token: ", decodedToken); // Log the decoded token
        if (decodedToken.user && decodedToken.user.username) {
          setUsername(decodedToken.user.username);
          setUserId(decodedToken.user._id);
          console.log(username);
        } else {
          console.error("Username not found in token");
        }
      } catch (error) {
        console.error("Error decoding token: ", error);
      }
      fetchData();
    }
  }, [token]);
  console.log("Token: ", token); // Log the token

  if (!token) {
    return <Navigate to="/" />;
  }
  if (status == "loading") {
    return (
      <center className="loading">
        Loading The Posts Please Be Patient..😉
      </center>
    );
  }
  if (status == "Error") {
    return <center>Error In Loading We Are Sorry For this..😣</center>;
  }
  return (
    <div className="home">
      <div className="nav-bar">
        <Main />
      </div>
      <div className="block">
        <h1 className="h1main">Welcome {username}</h1>
        <div>
          {posts.map((post) => (
            <Card
              image={post.p_img}
              name={post.p_name}
              description={post.p_description}
              userid={userId}
            />
          ))}
        </div>
      </div>
      <div className="div3">
        <center>
          <h2 className="h2upd">News and Updates</h2>
        </center>
        <div className="updcard">
          <h3 className="h3head">
            Updated software improves slicing for large-format 3D printing
          </h3>
          <br />
          <h5>
            from:{" "}
            <a
              href="https://techxplore.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://techxplore.com/
            </a>
          </h5>
          <br />
          <p>
            Researchers at the Department of Energy's Oak Ridge National
            Laboratory have developed the first additive manufacturing slicing
            computer application to simultaneously speed and simplify digital
            conversion of accurate...
            <a
              href="https://techxplore.com/news/2024-07-software-slicing-large-format-3d.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="read-more">Read More</span>
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Home;
