import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import "../styles/ultimate.css";
import  {Link, useNavigate} from "react-router-dom"
import Loading from "../components/Loading";
import { RxCross1 } from "react-icons/Rx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`${baseURL}/login`, {
      email, password,
    });
    if (data.success) {
      localStorage.setItem("token", data.token);
      //redirect to welcome page after login
      redirect("/welcome");
    } else {
console.log(error);    }
  }
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <section className="Log-me-abeg d-flex ">
          <div className="login-input text-center pt-5 mt-5">
            <Link to="/" className="d-flex justify-content-end me-5">
              <RxCross1 className="cross" />
            </Link>
            <div className="mt-3">
              <b>Welcome Back.</b>
            </div>
            <div className="liner1 mt-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="mt-3"
                required
              />
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mt-5"
                required
              />
            </div>

            <button type="submit" className="mt-5">
              {" "}
              {loading ? <Loading /> : "Continue"}
            </button>

            <div className="d-flex justify-content-center mt-3">
              <p>No account ?!</p>
              <Link to="/register" className="text-decoration-none">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
