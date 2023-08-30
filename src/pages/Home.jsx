import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/home.css";
import pic1 from "../assets/REC1.png";
import pic2 from "../assets/REC2.png";
import pic3 from "../assets/REC3.png";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="container">
      <Header t1={"Sign In"} t2={"Get started"} />
      <div>
        <div className="curiousbg">
          <div className="wordasbig p-4 m-3">
            <h1 className="">Stay Curious.</h1>
            <p>
              As you embrace the wonders of the world!! Explore, learn and let
              your imagination soar sky high!
            </p>
            <Link to="/register">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <section className="scroll-line d- d-md-flex  mt-3 justify-content-center text-center g-5 ps-5">
          <div className="picture1 d-flex">
            <div className="place1">
              <img src={pic1} alt="" />
            </div>
            <div className="place1-tag d-flex flex-column ">
              <b>Lifestyle</b>
              <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
            </div>
          </div>
          <div class="picture2 d-flex ps-3">
            <div className="place2">
              <img src={pic2} alt="" />
            </div>
            <div className="place2-tag d-flex flex-column">
              <b>Nature</b>
              <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="picture3 d-flex me-md-5 pe-md-5 ps-3">
            <div className="place3">
              <img src={pic3} alt="" />
            </div>
            <div className="place3-tag d-flex flex-column">
              <b>Technology</b>
              <p>The 20 Biggest Fintech Companies In Nigeria 2022</p>
            </div>
          </div>
        </section>
        <section className="second-BG">
          <div className="small-pose">
            <h6 className=""> Try Post<span>it</span>.
            <p></p></h6>
            <p>
              Do you want to write or discover stories from writers on any
              topic?
            </p>
          </div>
          <div className="click-me mx-4">
            <input type="email" placeholder="Enter Email address" />
            <button className="me-5">Get Started</button>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
