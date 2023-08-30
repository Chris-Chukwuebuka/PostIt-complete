import React from 'react'
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      {" "}
      <div className="container mt-3">
        <h2 className="blue-text fw-bold text-center text-primary">
          Oops, Something Went Wrong
        </h2>
        <img
          className="d-block my-3 mx-auto img-fluid"
          style={{ height: "400px", objectFit: "cover",width: "800px" }}
          src="https://cdn.dribbble.com/userupload/2641500/file/original-b2b4da3f25a13ff275d03cd646d1fec3.png?resize=1200x900"
          alt="error 404"
        />
        <button className="d-block my-5 mx-auto py-3 border-0 w-auto">
          <Link to="/" className=" text-decoration-none text-primary">
          Go Back To Homepage
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Error