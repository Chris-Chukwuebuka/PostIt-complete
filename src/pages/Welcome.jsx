import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
import { useEffect } from "react";
import Header from "../components/Header";
import people from "../assets/people.png";
import "../styles/welcome.css";
import Footer from "../components/Footer";

const Welcome = () => {
  const { baseURL } = useGlobalContext();
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const getUser = async () => {
    const { data } = await axios(`${baseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(data.username);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container">
      <Header t3={"Logout"} />
      <div className="d-md-flex py-2 mx-2 wel">
        <div className="mt-3 user">
          <h1>Welcome {user}, </h1>
          <p className="">
            Hey there! Welcome to our website! We're thrilled to have you here.
            Let us know if there's anything we can help you with. Enjoy
            exploring! 😊🎉
          </p>
          <Link to="/mystories" className="mx-2">
            <button className="btmy">MY STORIES</button>
          </Link>
          <Link to="/allstories">
            <button className="btgo">GO TO FEED</button>
          </Link>
        </div>
        <div className="peo">
          <img src={people} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
