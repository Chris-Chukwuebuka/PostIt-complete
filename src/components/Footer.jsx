import React from "react";
import "../styles/footer.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot">
      <div className="d-md-flex mt-5 py-5 foott">
        <div className="abt ">
          <h3>
            About Post <span>it</span>.
          </h3>
          <p>
            Post It is a cool site where you can leave virtual sticky notes.
            It's super handy for reminders and keeping things organized. Check
            it out!
          </p>
        </div>
        <div className="menu ">
          <h3>Quick Menu</h3>
          <Link to="/" className="text-decoration-none text-start">
            <p>Home</p>
          </Link>
          <Link to="/allstories" className="text-decoration-none text-start">
            <p>Stories</p>
          </Link>
          <p>Trending Stories</p>
          <p>Popular Stories</p>
        </div>
        <div className="fill ">
          <Link to="/register" className="text-decoration-none text-start">
            <p>Sign Up</p>
          </Link>
          <Link to="/login" className="text-decoration-none text-start">
            <p>Log In</p>
          </Link>
          <Link to="/error" className="text-decoration-none text-start">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="news">
          <h3>Subscribe to our newsletter</h3>
          <div className="d-flex newsin ">
            <input type="email" placeholder="Email address" />
            <button>
              Subscribe <BsArrowRightShort />{" "}
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-5" />
      <div className="d-flex justify-content-end me-5 pb-3 terms">
        <h3>Terms and Policy</h3>
        <p>
          <BsTwitter />
        </p>
        <p>
          <FaFacebookF />
        </p>
        <p>
          <FaLinkedinIn />
        </p>
      </div>
    </div>
  );
};

export default Footer;
