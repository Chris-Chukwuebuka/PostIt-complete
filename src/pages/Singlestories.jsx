import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/singlestories.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Loading from "../components/Loading";

const Singlestories = () => {
  const { storyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/all/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    console.log(story);
    setTag(story.tag);
    setDescription(story.description);
    setImage(story.image);
    setTitle(story.title);
  };
  useEffect(() => {
    getStory();
  }, [storyId]);
  return (
    <div className="container">
      <Header t3={"Log Out"} />
      <div className="my-4 mx-4 singlest ">
        <p className={`${
                      tag == "lifestyle"
                        ? " bg-warning"
                        : tag == "sport"
                        ? "bg-danger"
                        : tag == "nature"
                        ? "bg-success"
                        : tag == "technology"
                        ? "bg-primary"
                        : "bg-dark"
                    } sgtag`} text-capitalize> {tag}</p>
        <p className="sgtit my-4">{title} </p>
        <hr className="mb-4" />
        <img src={image} alt="" />
        <p className="sgdes mt-4">{description}</p>
        <div className="sgicon d-flex my-5">
          <h3>Share post;</h3>
          <p>
            {" "}
            <BsTwitter />{" "}
          </p>
          <p>
            {" "}
            <FaFacebookF />{" "}
          </p>
          <p>
            {" "}
            <FaLinkedinIn />{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singlestories;
